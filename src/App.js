import React, { Component } from 'react'
import Video from './Video'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
					
						<Route path="/class" exact component={Home} />
						<Route path="/video/:url" component={Video} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;