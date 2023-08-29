import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../../globalStyles';


export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color:  ${({ theme }) => theme.color};
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	align-items: center;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	padding: 10px;
	align-items: center;
	width: 1000px;
	padding-left: 200px;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 2fr);
	grid-gap: 2rem;
	justify-content: center;
	align-items: center;
	padding-left: 200px;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const DownloadButton = styled(Button)`
	border-radius: 15px;
	white-space: nowrap;
	color: ${({ theme }) => theme.color}; 
	outline: none;
	font-size: 1rem;
	border-width: 2px;
	border-color: ${({ theme }) => theme.buttonborder};
	border-style: solid ;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	margin-left: 450px;

	&:hover {
		color: ${({ theme }) => theme.navbgColor};
		transition: background-color 0.4s ease-in;
		background-color: ${({ theme }) => theme.buttonborder};
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.boxbg};
	padding: 10px;
	${'' /* box-shadow: 0 0 32px 8px #d0d0d0; */}
	border-radius: 20px;
	height: 350px;
	width: 750px;
`;

export const FeatureSubTitle = styled.h2`
	align-text: bottom;
	color:  ${({ theme }) => theme.color};

`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	${'' /* text-align: center; */}
	color:  ${({ theme }) => theme.color};

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: ${({ theme }) => theme.featuretext};

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
