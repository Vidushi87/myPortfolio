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
} from './HeroStyles';
import { SocialData } from '../../Data/SocialData';

const Hero = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log(windowWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    }, []);

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
                    <ParaText> I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        I'm a great place for you to tell a story and let your users know a little more about you.</ParaText>
                </ImageContainer>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero