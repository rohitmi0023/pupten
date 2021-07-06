import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../src/components/Home/NavBar';
import { useRouter } from 'next/router';
import AppointmentReview from '../../src/components/AppointmentReview';

const AppointmentReviewPage = ({ doctorId }: { doctorId: string }) => {
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
			{doctorId ? <AppointmentReview /> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		doctorId: state.patient.doctorId,
	};
};

export default connect(mapStateToProps)(AppointmentReviewPage);
