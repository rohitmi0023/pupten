import React, { useEffect } from 'react';
import NavBar from '../../src/components/Home/NavBar';
import { Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { patientDateAndTime } from '../../src/store/actions/patientAction';
import { useRouter } from 'next/router';
import DateAndTime from '../../src/components/DateAndTime';

const dateandtime = ({ doctorId }: { doctorId: string }) => {
	const router = useRouter();
	useEffect(() => {
		if (!doctorId) {
			router.push('/');
		}
	}, []);

	return (
		<div>
			<NavBar />
			<br />
			<Container maxWidth='sm'>
				<Typography variant='h5' style={{ textAlign: 'center' }}>
					Appointment Details
				</Typography>
				<hr />
				{doctorId ? <DateAndTime /> : null}
			</Container>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		patientState: state.patient,
		doctorId: state.patient.doctorId,
	};
};

export default connect(mapStateToProps, { patientDateAndTime })(dateandtime);
