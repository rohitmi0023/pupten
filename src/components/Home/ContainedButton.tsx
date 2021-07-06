import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		button: {
			border: '2px solid black',
			textTransform: 'capitalize',
		},
	})
);

const ContainedButton = ({ text, Icon }: { text: string; Icon: any }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button variant='text' size='small' className={classes.button} startIcon={Icon ? Icon : null}>
				{_.capitalize(text)}
			</Button>
		</div>
	);
};

export default ContainedButton;
