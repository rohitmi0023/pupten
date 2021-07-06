export const patientSelect =
	({ eachPatient }: { eachPatient: object }) =>
	async (dispatch: any) => {
		dispatch({
			type: 'PATIENT_SELECT',
			payload: eachPatient,
		});
	};

export const patientLocation = (location: string) => async (dispatch: any) => {
	dispatch({
		type: 'PATIENT_LOCATION',
		payload: location,
	});
};

export const patientDoctor = (doctorInfo: string) => async (dispatch: any) => {
	dispatch({
		type: 'PATIENT_DOCTOR',
		payload: doctorInfo,
	});
};

export const patientDoctorId = (doctorId: any) => async (dispatch: any) => {
	dispatch({
		type: 'PATIENT_DOCTOR_ID',
		payload: doctorId,
	});
};

import moment from 'moment';

export const patientDateAndTime = (dateandtime: string) => async (dispatch: any) => {
	dispatch({
		type: 'PATIENT_DATE_AND_TIME',
		payload: dateandtime,
	});
};
