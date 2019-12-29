import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root : {
		backgroundColor : '#f9f7f7',
		color           : '#112d4e',
		marginBottom    : '2em',
		padding         : '3em',
		textAlign       : 'left'
	}
});

export default function Education() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Education
			</Typography>

			<Typography variant="body1" gutterBottom>
				<ul>
					<li>
						2009-2013: Bachelor of Science (BSc) in Economics and Business.
						Specialization: Economics and Finance. Universiteit van Amsterdam.
					</li>
					<li>
						2018-2019:{' '}
						<a
							href="https://www.freecodecamp.org/certification/victorvermeulen/javascript-algorithms-and-data-structures"
							target="_blank"
						>
							Developer Certification JavaScript Algorithms and Data Structures.
							FreeCodeCamp.
						</a>
					</li>
					<li>
						2019:{' '}
						<a
							href="https://www.freecodecamp.org/certification/victorvermeulen/responsive-web-design"
							target="_blank"
						>
							Developer Certification Responsive Web Design. FreeCodeCamp.
						</a>
					</li>
					<li>
						2019:{' '}
						<a href="https://ude.my/UC-YY49U57W" target="_blank">
							The Complete 2020 Web Development Bootcamp. Udemy
						</a>
					</li>
				</ul>
			</Typography>
		</div>
	);
}
