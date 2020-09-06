import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Comment = (props) => {
	const {comment} = props;

	const useStyles = makeStyles((theme) => ({
		root: {
		  width: '100%',
		  maxWidth: '66ch',
		  backgroundColor: theme.palette.background.paper,
		},
		inline: {
		  display: 'inline',
		},
	  }));

	  const classes = useStyles();
	return (
		<>
		<List className={classes.root}>
			<ListItem alignItems="flex-start" key={comment.id}>
				<ListItemAvatar>
					<Avatar src={`https://randomuser.me/api/portraits/women/${comment.id}.jpg`} alt="" />
				</ListItemAvatar>
				<ListItemText
					primary={comment.name}
					secondary={
						<>
							<Typography component="span" variant="body2" color="textPrimary">
								{comment.email}
							</Typography>
							{` — ${comment.body}`}
						</>
					}
				></ListItemText>
			</ListItem>
		</List>
			 <Divider variant="inset" /> 
		</>
	);
};

export default Comment;