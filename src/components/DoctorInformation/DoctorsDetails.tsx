import React from 'react';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: 500,
	},
	thumbsUpIcon: {
		borderRadius: '5%',
		backgroundColor: 'limegreen',
		color: 'white',
		padding: '.5rem 1rem',
		display: 'inline-flex',
		alignItems: 'center',
		marginTop: '.5rem',
	},
});

const DoctorsDetails = ({
	name,
	experience,
	locationStreet,
	city,
	rating,
}: {
	name: string;
	experience: number;
	rating: number;
	locationStreet: string;
	city: string;
}) => {
	const classes = useStyles();
	return (
		<div style={{ margin: '.8rem .5rem' }}>
			<Typography variant='h5'>{name}</Typography>
			<span>Bachelor in vetenary science, BVS</span>
			<br />
			<span>{experience} years experience</span>
			<br />
			<span>
				{locationStreet}, {city}
			</span>
			<br />
			<span className={classes.thumbsUpIcon}>
				<ThumbUpAltRoundedIcon />
				<span style={{ marginLeft: '0.5rem' }}>{rating} % </span>
			</span>
		</div>
	);
};

export default DoctorsDetails;
