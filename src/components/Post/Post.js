import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Post = (props) => {
    const {id, body, title} = props.post;
    
   

    //styles for cards
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          
		},
		cardTop: {
			height: '60vh',
		},
        media: {
          height: 0,
          paddingTop: '56.25%',
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          //backgroundColor: red[500],
        },
        button:{
			marginLeft: '70px',
			
		},
		link:{
            textDecoration: 'none',
		}
		
      }));
      const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
			<div className={classes.cardTop}>
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
                <CardMedia
                    className={classes.media}
                    image={`https://picsum.photos/id/${50 + id}/1280/720`}
                    title="Paella dish"
                />
                <CardContent>
				    <Typography variant="h6" component="h5">
						{title}
					</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                    </Typography>
                </CardContent>
			</div>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <Link className={classes.link} to={`/post/${id}`}>
                      <Button className={classes.button}  color="secondary">
                      See more
                      </Button>
                    </Link>
                    
                </CardActions>
                
            </Card>
        </>
    );
};

export default Post;