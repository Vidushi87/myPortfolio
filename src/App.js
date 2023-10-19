import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import contactMe from './Components/ContactMe/contactMe';
import resume from './Components/Resume/Resume';
import projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { useTheme } from './useTheme.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './globalStyles';
import AboutMe from './Components/AboutMe/AboutMe'

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