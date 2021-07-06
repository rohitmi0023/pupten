import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import NavBar from '../../src/components/Home/NavBar';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import DoctorInfo from '../../src/components/DoctorInformation/DoctorInfo';

const DoctorInfoPage = ({ doctorId }: { doctorId: string }) => {
	const router = useRouter();
	useEffect(() => {
		if (!doctorId) {
			router.push('/');
		}
	}, []);

	return (
		<div>
			<NavBar />
			<Container maxWidth='sm'>
				<Typography variant='h5' style={{ textAlign: 'center' }}>
					Appointment Details
				</Typography>
				<hr />
				{doctorId ? <DoctorInfo /> : null}
			</Container>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		doctorId: state.patient.doctorId,
	};
};

export default connect(mapStateToProps)(DoctorInfoPage);
