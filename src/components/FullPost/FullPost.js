import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useParams} from "react-router-dom";
import Comments from "../Comments/Comments";
import { Box, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { Container } from "react-bootstrap";
import './FullPost.css';

const FullPost = () => {
	
	const {postId} = useParams();

	const [fullPost, setFullPost] = useState([]);
	const [comments, setComments] = useState([]);

	
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
		.then(response => response.json())
		.then(data => setFullPost(data));
	}, []);

	
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
		.then(response => response.json())
		.then(data => setComments(data));
	}, []);

	const useStyles = makeStyles({
		root: {
		  maxWidth: 800,
		  
		  
		},
		media: {
		  height: 540,
		},
		main: {
			display: 'grid',
		  justifyContent: 'center'
		}
	  });
	  
	 
	const classes = useStyles();

	return (
		<Box mt={5} mb={5}>
			<Container className={classes.main}>
			    <Card className={classes.root}>
				<CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src='https://randomuser.me/api/portraits/women/10.jpg' alt=""/>
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title='Anne Hathaway'
                    subheader="September 14, 2016"
                />
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={`https://picsum.photos/id/${50 + fullPost.id}/1280/720`}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
						{fullPost.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						{fullPost.body}
						</Typography>
					</CardContent>
					</CardActionArea>
				<h3 className='h3' style={{paddingLeft:'40px',}}>Comments...</h3>
				<Comments comments={comments}></Comments>
				</Card>
			</Container>
		</Box>
	);
};

export default FullPost;