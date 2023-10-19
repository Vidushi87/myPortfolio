import styled from 'styled-components';
import { Button, Container } from '../../globalStyles';

export const BGImage = styled.img.attrs(({ theme }) => ({
	src: theme.BGImage,
	alt: 'BG Image',
  }))`
    object-fit: cover;
	width: 100%;
	height: 120vh;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroSection = styled.section`
    height: 120vh;
	background-position: left;
	background-size: 50% auto;
	padding-top: clamp(70px, 25vh, 220px);
	background-color:  ${({ theme }) => theme.HeroBg};
`;

export const HeroText = styled.p`
	margin-bottom: 20px;
	margin-left: 20px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.color};
	${'' /* padding-left:40px; */}
	text-align: center;
`;

export const ParaText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.5rem, 1.2vw, 1.1rem);
	line-height: 18px; 
	letter-spacing: 2px;
	color: ${({ theme }) => theme.color};
	padding-left:40px;
	padding-top : 10px;
`;

export const HLine = styled.div`
	background-color:${({ theme }) => theme.buttonborder};
	width: 80px;
	height: 2px;
`

export const Heading = styled.h2`
	font-size: clamp(2.0rem, 2.5vw, 3rem);
	margin-bottom: 1rem;
	letter-spacing: 3.5px;
	color: ${({ theme }) => theme.color};
`

export const ButtonWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
	padding: 15px;
	align-items: center;
`;

export const CircularImg = styled.img`
	object-fit: cover;
	border-radius: 50%;
	height: 150px;
	width: 150px;
`

export const HeroContainer = styled(Container)`
	padding-left: 200px;
	padding-top: 20px;
`;

export const ImageContainer = styled(Container)`
	display: inline-block;
    padding: 1rem 1rem;
    vertical-align: middle; 
	width: 380px;
	height: 500px;
`
export const SocialContainer = styled.div`
	background: ${({ theme }) => theme.socialbg};
	width: 400px;
	height: 75px;
	padding: 1rem 6rem;
	justify-content:center;
	align-items:center; 
	margin:auto;
	display: flex;
`
export const ImgContainer = styled.div`
	background:  ${({ theme }) => theme.imgbg};
	width: 400px;
	height: 350px;
	justify-content:center;
	align-items:center; 
	margin:auto;
	display: flex;
	padding-top: 80px;
`

export const HeroButton = styled(Button)`
	color: ${({ theme }) => theme.color};
	outline: none;
	border-width: 2px;
	border-radius: 20px;
	border-color: ${({ theme }) => theme.buttonborder};
	border-style: solid ;

	&:before {
		height: 500%;
		background: ${({ theme }) => theme.navbgColor};
	}

	&:hover:before {
		height: 0%;
		background: ${({ theme }) => theme.buttonborder};
	}

	&:hover {
		color:${({ theme }) => theme.btnhover};
	}
`;

export const SocialIcon = styled.a`
	color: ${({ theme }) => theme.iconcolor};
	font-size: 25px;

	&:hover {
		color:${({ theme }) => theme.iconhover};
		transition: 0.1s ease-out;
	}
`;
