import { Typography } from '@material-ui/core';
import React from 'react';
import BasicTextFields from './BasicTextFields';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import SimpleSelect from './SimpleSelect';
import { connect } from 'react-redux';

const useStyles = makeStyles({
	root: {
		textAlign: 'center',
		marginTop: '2rem',
	},
	typography: {
		marginBottom: '1rem',
	},
	inputField: {
		width: '100%',
	},
});

const FindAndBook = ({ patientState }: { patientState: any }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant='h4' className={classes.typography}>
				Find And List
			</Typography>
			<SimpleSelect fieldName='Location' Icon={LocationOnIcon} />
			{patientState.locationInfo ? <BasicTextFields fieldName='Doctor' Icon={SearchIcon} /> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		patientState: state.patient,
	};
};

export default connect(mapStateToProps)(FindAndBook);
