import React from 'react';
import FindAndBook from './FindAndBook';
import NavBar from './NavBar';
import PatientList from './PatientList';
import { connect } from 'react-redux';
import DoctorList from './DoctorList';

const HomePage = ({ patientState }: { patientState: { id: string } }) => {
	return (
		<div>
			<NavBar />
			<FindAndBook />
			{patientState.id ? <DoctorList /> : <PatientList />}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		patientState: state.patient,
	};
};

export default connect(mapStateToProps)(HomePage);
