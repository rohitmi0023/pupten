import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		color: {
			backgroundColor: '#FE947F',
		},
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

const NavBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.color}>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						Pupten
					</Typography>
					<Button color='inherit'>Log in</Button>
					<Button color='inherit'>Sign up</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
