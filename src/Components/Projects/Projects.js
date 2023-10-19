import React, { useState } from 'react';
import { Row, Section} from '../../globalStyles';
import { Container, Slide } from './ProjectStyles';
import SliderComp from './SliderComp';



const Projects = () => {


	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
		<Row justify="space-between" margin="1rem" wrap="wrap"></Row>
		<Container id='project'>
       {/*  <Zoom> */}
            <h1>Recent <span className="green">Projects</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
      {/*   </Zoom> */}
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
		
		</Section>
	);
};

export default Projects;
