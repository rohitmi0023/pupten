import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import { Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginRight: '30px',
			flexDirection: 'column',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		large: {
			width: theme.spacing(20),
			height: theme.spacing(20),
		},
	})
);

const DoctorInfo = ({ doctorList, doctorId }: { doctorList: any; doctorId: string }) => {
	const classes = useStyles();
	const router = useRouter();
	const matchedDoctor = doctorList.filter((each: any) => {
		if (each.id.toString() === doctorId) return true;
		else return false;
	})[0];
	const { first_name, last_name, image, experience, phone_number, location_city, location_street, id } = matchedDoctor;
	const handleClick = (e: any, id: any) => {
		router.push({
			pathname: `/appointment/dateandtime`,
		});
	};
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography variant='h4'>
					{first_name} {last_name}
				</Typography>
				<br />
				<Avatar alt={`${first_name} ${last_name}`} src={image} className={classes.large} />
				<br />
				<Typography variant='h5'>BVS | {experience} years experience</Typography>
				<Typography variant='h5'>
					{location_street}, {location_city}
				</Typography>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<PhoneIcon />
					<Typography variant='h6'> {phone_number}</Typography>
				</div>
				<hr style={{ width: '100%' }} />
				<div style={{ display: 'flex' }}>
					<MessageIcon />
					<Typography variant='h6' style={{ marginLeft: '1rem', fontSize: '16px' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis porro deleniti facilis, soluta ullam rerum? Fuga
						veniam illum, modi a omnis consequuntur itaque dolores facere dolorum consectetur odit libero.
					</Typography>
				</div>
				<hr style={{ width: '100%' }} />
				<Button variant='contained' color='primary' onClick={e => handleClick(e, id)}>
					Next
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		doctorList: state.doctorList,
		doctorId: state.patient.doctorId,
	};
};

export default connect(mapStateToProps)(DoctorInfo);
