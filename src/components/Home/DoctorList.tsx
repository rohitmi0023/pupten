import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListAvatar from '../MaterialUI/ListAvatar';
import DoctorsDetails from '../DoctorInformation/DoctorsDetails';
import ContainedButton from './ContainedButton';
import CallIcon from '@material-ui/icons/Call';
import { Button, Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { patientDoctorId } from '../../store/actions/patientAction';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		button: {
			border: '2px solid black',
			textTransform: 'capitalize',
			marginTop: '1rem',
		},
	})
);

const DoctorList = ({
	doctorList,
	locationInfo,
	doctorInfo,
	patientDoctorId,
}: {
	doctorList: Array<object>;
	locationInfo: string;
	doctorInfo: string;
	patientDoctorId: Function;
}) => {
	const classes = useStyles();
	const today = moment().format('dddd');
	console.log(today);
	let doctorListArray = _.reverse(_.sortBy(doctorList, (o: { rating: number }) => o.rating));
	if (locationInfo) {
		// location is searched, filtering
		doctorListArray = doctorListArray.filter((each: any) => each.location_city === locationInfo);
		// doctor name is searched, filtering
		if (doctorInfo) {
			doctorListArray = doctorListArray.filter((each: any) => {
				const fullName = `${each.first_name} ${each.last_name}`;
				const value = fullName.toLowerCase().indexOf(doctorInfo.toLowerCase()) + 1;
				if (value) return true;
				else return false;
			});
		}
	}
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const handleClick = (e: any, id: any) => {
		console.log(id);
		patientDoctorId(id.toString());
	};

	return (
		<Container maxWidth='sm'>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<hr style={{ width: '70%' }} />
				{_.slice(doctorListArray, 0, 3).map((each: any) => {
					const { first_name, last_name, image, id, location_city, experience, location_street, rating, day_available } = each;
					const fullName = `${first_name} ${last_name}`;
					return (
						<div key={id} style={{ margin: '.25rem .25rem', display: 'flex', alignItems: 'center' }}>
							<ListAvatar name={fullName} image={image} />
							<DoctorsDetails
								name={fullName}
								experience={experience}
								locationStreet={location_street}
								city={location_city}
								rating={rating}
							/>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1rem' }}>
								{today === days[day_available] ? (
									<span style={{ color: 'green' }}>Available Today</span>
								) : today === days[day_available + 1] ? (
									<span>Available Tomorrow</span>
								) : (
									<span style={{ textAlign: 'center' }}>Available on {days[day_available]}</span>
								)}
								<Button variant='text' size='small' className={classes.button} onClick={e => handleClick(e, id)}>
									<Link href={`/appointment/doctorInfo`}>
										<a style={{ textDecoration: 'none', color: 'black' }}>{_.capitalize('Book an appointment')}</a>
									</Link>
								</Button>
								<ContainedButton text='Call Clinic' Icon={<CallIcon />} />
							</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

const mapStateToProps = (state: any) => {
	return {
		doctorList: state.doctorList,
		locationInfo: state.patient.locationInfo,
		doctorInfo: state.patient.doctorInfo,
	};
};

export default connect(mapStateToProps, { patientDoctorId })(DoctorList);
