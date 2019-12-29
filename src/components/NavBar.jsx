import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles({
	root  : {
		flexGrow        : 1,
		backgroundColor : '#112d4e',
		color           : '#f9f7f7'
	},
	title : {
		flexGrow   : 1,
		marginLeft : 20
	}
});

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<ComputerIcon />
				<Typography variant="h6" className={classes.title}>
					Full Stack Web Developer
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
