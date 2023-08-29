import React from 'react'
import styled from 'styled-components';
import { Container2 } from './CarouselStyles';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <Container2 className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>Description</h1>
            <p>{disc}
            <a href="#">demo</a>
            </p>
        </div>
    </Container2>
  )
}

export default Project;

