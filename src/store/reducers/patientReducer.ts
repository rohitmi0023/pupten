const patientState = {
	id: '',
	name: '',
	image: '',
	breed: '',
	category: '',
	locationInfo: '',
	doctorInfo: '',
	doctorId: '',
	dateandtime: '',
};

export const patientReducer = (state = patientState, action: any) => {
	switch (action.type) {
		case 'PATIENT_SELECT':
			const { id, name, image, breed, category } = action.payload;
			return { ...state, id, name, image, breed, category };
		case 'PATIENT_LOCATION':
			const location = action.payload;
			return { ...state, locationInfo: location };
		case 'PATIENT_DOCTOR':
			const doctorInfo = action.payload;
			return { ...state, doctorInfo };
		case 'PATIENT_DOCTOR_ID':
			return { ...state, doctorId: action.payload };
		case 'PATIENT_DATE_AND_TIME':
			return { ...state, dateandtime: action.payload };
		default:
			return state;
	}
};
