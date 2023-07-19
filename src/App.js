import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import aboutMe from './Pages/aboutMe';
import contactMe from './Pages/contactMe';
import resume from './Pages/resume';
import projects from './Pages/projects';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			 <NavBar /> 
			<Switch>
				<Route path="/" exact component={aboutMe} />
				<Route path="/resume" exact component={resume} />
				<Route path="/projects" exact component={projects} />
                <Route path="/contact" exact component={contactMe} />
			</Switch>
			 <Footer /> 
		</Router>
	);
}

export default App; 