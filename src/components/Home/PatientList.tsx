import React, { Fragment, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListAvatar from '../MaterialUI/ListAvatar';
import _ from 'lodash';
import { connect } from 'react-redux';
import { patientSelect } from '../../store/actions/patientAction';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'center',
			width: '100%',
		},
		secondGrid: {
			display: 'flex',
			flexDirection: 'column',
		},
		gridListContainer: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'center',
			border: '2px solid black',
			borderRadius: '10%',
			margin: '2rem 0',
			width: '100%',
		},
		eachItem: {
			display: 'flex',
			alignItems: 'center',
		},
		control: {
			padding: theme.spacing(2),
		},
	})
);

const PatientList = ({ patientSelect }: { patientSelect: Function }) => {
	const [patientList, setPatientList] = useState([
		{
			id: '41jn41kjj314kjj',
			name: 'Wilson',
			category: 'dog',
			image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/06/21195710/German-Shepherd-Dog-laying-down-in-the-backyard-500x487.jpeg',
			breed: 'german shepherd',
		},
		{
			id: '41jsfdjj314kjj',
			name: 'Brad',
			category: 'dog',
			image: 'https://www.thesprucepets.com/thmb/FEsGt1xpqpRi_YzoMCuzPEWcvso=/872x654/smart/filters:no_upscale()/1024px-Bulldog_inglese-cf544d354159462c8c0d93db5f1adbe6.jpg',
			breed: 'bulldog',
		},
		{
			id: '41jn41kjrw332kjj',
			name: 'Katie',
			category: 'cat',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg',
			breed: 'persian cat',
		},
	]);
	const classes = useStyles();
	const handlePatientClick = (e: any, eachPatient: object) => {
		patientSelect({ eachPatient });
	};

	return (
		<Fragment>
			<Grid container className={classes.root} spacing={4}>
				<Grid className={classes.secondGrid} item xs={12}>
					<Grid container className={classes.gridListContainer} justify='center' spacing={2}>
						<Typography variant='h4' style={{ textAlign: 'center', padding: '1rem 2rem' }}>
							Who is the Patient?
						</Typography>
						{patientList.map(eachPatient => {
							const { id, name, category, image } = eachPatient;
							return (
								<div key={id} onClick={e => handlePatientClick(e, eachPatient)}>
									<Grid item className={classes.eachItem}>
										<ListAvatar name={name} image={image} />
										<Typography variant='h6'>
											{name} ({_.capitalize(category)})
										</Typography>
									</Grid>
								</div>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default connect(null, { patientSelect })(PatientList);
