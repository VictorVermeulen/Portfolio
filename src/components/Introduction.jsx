import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
	heroContent : {
		backgroundColor : '#dbe2ef',
		color           : '#112d4e',
		padding         : '3em'
	},
	iconBox     : {
		textAlign : 'center'
	},
	icon        : {
		margin : '0.3em'
	}
});

export default function Introduction() {
	const classes = useStyles();

	return (
		<div className={classes.heroContent}>
			<Container maxWidth="sm">
				<Typography component="h1" variant="h2" align="center" gutterBottom>
					Victor Vermeulen
				</Typography>
				<Typography variant="h5" align="center" paragraph>
					Full Stack Web Developer <br />
					Hilversum, Netherlands
				</Typography>
				<div className={classes.iconBox}>
					<Link href="https://github.com/VictorVermeulen" target="_blank">
						<GitHubIcon className={classes.icon} fontSize="large" />
					</Link>
					<Link href="https://www.instagram.com/victor_dev_/" target="_blank">
						<InstagramIcon className={classes.icon} fontSize="large" />
					</Link>
				</div>
			</Container>
		</div>
	);
}
