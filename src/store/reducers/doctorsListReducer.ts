const data = require('../../../MOCK_DATA.json');
const doctorListState = data;

export const doctorListReducer = (state = doctorListState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};
