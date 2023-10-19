import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, MainHeading } from '../../globalStyles';
import {
    HeroSection, HeroText,
    ButtonWrapper, HeroButton,
    HeroContainer, ParaText, ImageContainer,
    SocialContainer, ImgContainer, SocialIcon,
    Heading, HLine, CircularImg, BGImage
} from './AboutMeStyles';
import { SocialData } from '../../Data/SocialData';

const AboutMe = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
        
    }, [windowWidth]);

    return (
        <HeroSection>
            <BGImage />
            <HeroContainer>
                <ImageContainer>
                    <ImgContainer>
                        <ButtonWrapper>
                            <CircularImg src='./assets/clients.jpg' />
                            <Heading> Vidushi </Heading>
                            <Heading> Pandey </Heading>
                            <HLine />
                            <HeroText> Front End Developer</HeroText>
                        </ButtonWrapper>
                    </ImgContainer>
                    <SocialContainer>
                        <Row align="center" margin="auto  0 0 0" gap="1rem">
                            {SocialData.map((social, index) => (
                                <SocialIcon
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </SocialIcon>
                            ))}
                        </Row>
                    </SocialContainer>
                </ImageContainer>
                <ImageContainer>
                    <MainHeading >Hello!</MainHeading>
                    <HeroText> Here's who I am & what I do</HeroText>
                    <ButtonWrapper>
                        <Link to="resume">
                            <HeroButton>Resume</HeroButton>
                        </Link>
                        <Link to="projects">
                            <HeroButton>Projects</HeroButton>
                        </Link>
                    </ButtonWrapper>
                    <ParaText> Front-end React developer with two years of experience in React, HTML, CSS, JavaScript, and SQL. Known for strong interpersonal skills and a proactive attitude toward challenges. Committed to creating exceptional web experiences and contributing effectively to collaborative teams.</ParaText>
                </ImageContainer>
            </HeroContainer>
        </HeroSection>
    )
}

export default AboutMe