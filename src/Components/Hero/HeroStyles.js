import styled from 'styled-components';
import { Button, Container } from '../../globalStyles';



export const BGImage = styled.img`
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
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroText = styled.p`
	margin-bottom: 20px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	letter-spacing: 2px;
	color: black;
	${'' /* padding-left:40px; */}
	text-align: center;
`;

export const ParaText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.5rem, 1.2vw, 1.1rem);
	line-height: 18px; 
	letter-spacing: 2px;
	color: black;
	padding-left:40px;
	padding-top : 10px;
`;

export const HLine = styled.div`
	background-color: #917151;
	width: 80px;
	height: 2px;
`

export const Heading = styled.h2`
	font-size: clamp(2.0rem, 2.5vw, 3rem);
	margin-bottom: 1rem;
	letter-spacing: 3.5px;
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
`;

export const ImageContainer = styled(Container)`
	display: inline-block;
    padding: 1rem 1rem;
    vertical-align: middle; 
	width: 380px;
	height: 500px;
`
export const SocialContainer = styled.div`
	background: white;
	width: 400px;
	height: 75px;
	padding: 1rem 6rem;
	justify-content:center;
	align-items:center; 
	margin:auto;
	display: flex;
`
export const ImgContainer = styled.div`
	background: #f4ece6;
	width: 400px;
	height: 350px;
	justify-content:center;
	align-items:center; 
	margin:auto;
	display: flex;
	padding-top: 80px;
`

export const HeroButton = styled(Button)`
	color: #000;
	outline: none;
	border: 2px solid #917151;
	border-radius: 20px;

	&:before {
		${'' /* background: #000; */}
		height: 500%;
	}

	&:hover:before {
		height: 0%;
		background: #917151;
	}

	&:hover {
		color: #ba8754;
	}
`;

export const SocialIcon = styled.a`
	color: black;
	font-size: 25px;

	&:hover {
		color: #ba8754;
		transition: 0.3s ease-out;
	}
`;
