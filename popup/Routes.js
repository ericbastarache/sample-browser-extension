import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';


import App from './components/App.js';
import Main from './components/Main';
import Login from './components/Login';
import Options from './components/Options';

export default(
		<Route path='/index.html' component={App}>
			<IndexRoute component={Main}/>
			<Route path="/options" component={Options}/>
			<Route path="/login" component={Login}/>
		</Route>
	)