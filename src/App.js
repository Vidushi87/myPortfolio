import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Pages/aboutMe';
import contactMe from './Pages/contactMe';
import resume from './Pages/resume';
import projects from './Pages/projects';
import Footer from './Components/Footer/Footer';
import { useTheme } from './useTheme.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './globalStyles';

function App() {
	const [theme, toggleTheme] = useTheme();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme = {themeMode} >
		<Router>
			<GlobalStyle />
			<NavBar theme={theme} toggleTheme={toggleTheme}/> 
			<Switch>
				<Route path="/" exact component={AboutMe} />
				<Route path="/resume" exact component={resume} />
				<Route path="/projects" exact component={projects} />
				<Route path="/contact" exact component={contactMe} />
			</Switch>
			<Footer />
		</Router>
		</ThemeProvider>
	);
}

export default App; 