import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { patientLocation, patientDoctor } from '../../store/actions/patientAction';

const locations = [
	{
		value: 1,
		label: 'Mumbai',
	},
	{
		value: 2,
		label: 'Delhi',
	},
	{
		value: 3,
		label: 'Kolkata',
	},
];

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
	})
);

const SimpleSelect = ({
	fieldName,
	Icon,
	patientIdState,
	patientLocation,
	patientDoctor,
}: {
	fieldName: string;
	Icon: any;
	patientIdState: string | undefined;
	patientLocation: Function;
	patientDoctor: Function;
}) => {
	const classes = useStyles();
	const [fieldState, setFieldState] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setFieldState(event.target.value as string);
		const locationArray = locations.filter(eachLocation => event.target.value === eachLocation.value.toString());
		if (locationArray.length) {
			let locationName = locationArray[0].label;
			patientLocation(locationName);
		} else {
			patientLocation('');
			patientDoctor('');
		}
	};

	return (
		<div>
			<form className={classes.root} noValidate autoComplete='off'>
				<TextField
					id='standard-select-currency-native'
					select
					label={fieldName}
					value={fieldState}
					onChange={handleChange}
					SelectProps={{
						native: true,
					}}
					helperText='Please select the location'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Icon />
							</InputAdornment>
						),
					}}
					disabled={patientIdState ? false : true}
				>
					<option aria-label='None' value='' />
					{locations.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</TextField>
			</form>
		</div>
	);
};

const mapStateToProps = (state: { patient: { id: string } }) => {
	return {
		patientIdState: state.patient.id,
	};
};

export default connect(mapStateToProps, { patientLocation, patientDoctor })(SimpleSelect);
