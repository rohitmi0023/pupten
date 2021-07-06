import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { connect } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash';
import { patientDateAndTime } from '../../src/store/actions/patientAction';
import { useRouter } from 'next/router';
const moment = require('moment');

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		large: {
			width: theme.spacing(12),
			height: theme.spacing(12),
		},
	})
);

const DateAndTime = ({
	patientState,
	patientDateAndTime,
}: {
	patientState: { id: string; image: string; name: string; category: string };
	patientDateAndTime: Function;
}) => {
	const router = useRouter();
	const todayDate = moment().format('YYYY-MM-DD');
	const [checked, setChecked] = React.useState(true);
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = useState<Date | null>(moment());
	const [reason, setReason] = useState('');
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	const { name, image, category } = patientState;
	const handleConfirmation = () => {
		patientDateAndTime(moment(selectedDate).format('dddd, MMMM Do YYYY, h:mm a'));
		router.push('/appointment/appointmentReview');
	};

	const handleReasonField = (e: any) => {
		console.log(e.target.value);
		setReason(e.target.value);
	};

	return (
		<div>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<br />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Avatar alt={name} src={image} className={classes.large} />
						<Typography variant='h6' style={{ marginLeft: '2rem' }}>
							{name} ({_.capitalize(category)})
						</Typography>
					</div>
					<br />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Typography variant='h5' style={{ marginRight: '2rem', fontWeight: 'bold' }}>
							Date:
						</Typography>
						<KeyboardDatePicker
							margin='normal'
							id='date-picker-dialog'
							label='Pick Date'
							format='MM/dd/yyyy'
							minDate={todayDate}
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Typography variant='h5' style={{ marginRight: '2rem', fontWeight: 'bold' }}>
							Time:{' '}
						</Typography>
						<KeyboardTimePicker
							margin='normal'
							id='time-picker'
							label='Pick Time'
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change time',
							}}
						/>
					</div>
					<br />
					<br />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Typography variant='h5' style={{ marginRight: '2rem', fontWeight: 'bold' }}>
							Reason:
						</Typography>
						<TextField
							id='outlined-multiline-static'
							label='Reason'
							multiline
							rows={4}
							onChange={e => handleReasonField(e)}
							variant='outlined'
							value={reason}
						/>
					</div>
					<hr style={{ width: '100%' }} />
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque porro architecto. Quasi possimus deleniti sunt rem
						fugiat. Modi, optio eaque a, necessitatibus dolor ut nihil deserunt veritatis voluptate fugiat dolorum, quam ipsa ad incidunt!
						Ex, excepturi eum praesentium hic nihil laborum commodi reprehenderit porro vitae necessitatibus, neque dolorum expedita?
					</div>
					<br />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
						<Typography variant='h6'>
							Receive status update on <WhatsAppIcon /> Whatsapp
						</Typography>
					</div>
					<br />
					<Button variant='contained' color='primary' onClick={handleConfirmation}>
						Book Now
					</Button>
				</div>
			</MuiPickersUtilsProvider>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		patientState: state.patient,
	};
};

export default connect(mapStateToProps, { patientDateAndTime })(DateAndTime);
