import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
	return (
		<Typography variant="body2" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/getify/You-Dont-Know-JS">
				Victor Vermeulen
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles({
	footer : {
		backgroundColor : '#112d4e',
		color           : '#f9f7f7',
		padding         : 20
	}
});

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				Contact
			</Typography>
			<Typography variant="subtitle1" align="center" component="p">
				vcvermeulen@gmail.com
			</Typography>
			<Copyright />
		</footer>
	);
}
