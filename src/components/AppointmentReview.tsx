import { Avatar, Container, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		large: {
			width: theme.spacing(10),
			height: theme.spacing(10),
		},
	})
);

const AppointmentReview = ({
	patientState,
	doctorList,
}: {
	patientState: { doctorId: string; name: string; category: string; dateandtime: string; id: any; image: string };
	doctorList: any;
}) => {
	const classes = useStyles();
	const router = useRouter();
	const { doctorId, name, dateandtime, id } = patientState;
	let matchedDoctor: any;
	if (patientState.doctorId) {
		matchedDoctor = doctorList.filter((each: any) => {
			if (each.id.toString() === doctorId) return true;
			else return false;
		})[0];
	}

	return (
		<Container maxWidth='sm'>
			<div style={{ display: 'flex', marginTop: '2rem', justifyContent: 'center', flexDirection: 'column' }}>
				<br />
				<div style={{ display: 'flex' }}>
					<div>
						<Typography variant='h4' style={{ marginRight: '2rem', fontWeight: 'bold' }}>
							{`${matchedDoctor.first_name} ${matchedDoctor.last_name}`}
						</Typography>
						<Typography>({doctorId.slice(0, 13)})</Typography>
					</div>
					<Avatar src={matchedDoctor.image} alt={matchedDoctor.name} className={classes.large} />
				</div>
				<br />
				<div style={{ display: 'flex' }}>
					<div>
						<Typography variant='h4' style={{ marginRight: '2rem' }}>
							{name}
						</Typography>
						<Typography>({id.slice(0, 6)})</Typography>
					</div>
					<Avatar src={patientState.image} alt={name} className={classes.large} />
				</div>
				<Typography variant='h6'>Follow up</Typography>
				<Typography variant='h6' style={{ color: 'green' }}>
					{dateandtime}
				</Typography>
				<hr style={{ width: '100%' }} />
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant='h5'>Amount to pay</Typography>
					<Typography variant='h5'>Rs. 700/-</Typography>
				</div>
			</div>
		</Container>
	);
};

const mapStateToProps = (state: any) => {
	return {
		patientState: state.patient,
		doctorList: state.doctorList,
	};
};

export default connect(mapStateToProps)(AppointmentReview);
