import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	actions : {
		position : 'absolute',
		bottom   : '0',
		left     : '0.25em'
	},
	button  : {},
	card    : {
		height   : '22rem',
		maxWidth : 345,
		margin   : '0.8em',
		position : 'relative'
	},
	media   : {
		height : 140
	}
});

function Project(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media} image={props.img} title="Project Image" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.actions}>
				{props.code && (
					<Button
						className={classes.button}
						size="small"
						color="primary"
						href={props.code}
						target="_blank"
					>
						View Code
					</Button>
				)}
				{props.site && (
					<Button
						className={classes.button}
						size="small"
						color="primary"
						href={props.site}
						target="_blank"
					>
						Full Website
					</Button>
				)}
			</CardActions>
		</Card>
	);
}

export default Project;
