import { combineReducers } from 'redux';
import { doctorListReducer } from './doctorsListReducer';
import { patientReducer } from './patientReducer';

const rootReducer = combineReducers({
	patient: patientReducer,
	doctorList: doctorListReducer,
});

export default rootReducer;
