import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginRight: '30px',
			flexDirection: 'column',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		small: {
			width: theme.spacing(3),
			height: theme.spacing(3),
		},
		large: {
			width: theme.spacing(10),
			height: theme.spacing(10),
		},
	})
);

const ListAvatar = ({ name, image }: { name: string; image: string }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Avatar alt={name} src={image} className={classes.large} />
		</div>
	);
};

export default ListAvatar;
