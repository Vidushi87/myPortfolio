import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Navbar from './components/Navbar/Navbar';

import aboutMe from './Pages/aboutMe';
import contactMe from './Pages/contactMe';
import resume from './Pages/resume';
import projects from './Pages/projects';
//import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			{/* <Navbar /> */}
			<Switch>
				<Route path="/" exact component={aboutMe} />
				<Route path="/resume" exact component={resume} />
				<Route path="/projects" exact component={projects} />
                <Route path="/contactme" exact component={contactMe} />
			</Switch>
			{/* <Footer /> */}
		</Router>
	);
}

export default App; 