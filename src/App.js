import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import FullPost from "../src/components/FullPost/FullPost";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
            <Home/>
          </Route>
					<Route exact path="/post">
            <Home/>
          </Route>
					<Route path="/post/:postId">
            <FullPost/>
          </Route>
					<Route path="*">
            <NotFound/>
          </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
