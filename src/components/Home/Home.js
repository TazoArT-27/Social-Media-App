import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import {Container, Box, makeStyles} from "@material-ui/core";

const Home = () => {



	const [posts, setPosts] = useState([]);


	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts/";
		fetch(url)
		.then(response => response.json())
		.then(data => setPosts(data.slice(0, 16)));
	}, []);

	const useStyles = makeStyles({
		flex: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
			gridGap: "15px",
		},
	});

	const classes = useStyles();

	return (
		<Box mt="50px" mb="50px">
			<Container>
				<div className={classes.flex}>
					{
						posts.map( post => <Post key={post.id} post={post}></Post> )
					}
				</div>
			</Container>
		</Box>
	);
};

export default Home;