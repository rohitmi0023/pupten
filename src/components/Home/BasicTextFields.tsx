import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';
import { patientDoctor } from '../../store/actions/patientAction';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
	})
);

const BasicTextFields = ({
	fieldName,
	Icon,
	patientIdState,
	patientDoctor,
}: {
	fieldName: string;
	Icon: any;
	patientIdState: string | undefined;
	patientDoctor: Function;
}) => {
	const classes = useStyles();
	const handleChange = (e: any) => {
		const text = e.target.value;
		patientDoctor(text);
	};
	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<TextField
				disabled={patientIdState ? false : true}
				id='outlined-basic'
				label={fieldName}
				variant='outlined'
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<Icon />
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
};

const mapStateToProps = (state: { patient: { id: string } }) => {
	return {
		patientIdState: state.patient.id,
	};
};

export default connect(mapStateToProps, { patientDoctor })(BasicTextFields);
