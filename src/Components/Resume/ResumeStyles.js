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
	margin-left: 380px;

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
	align-items: right;
	background: ${({ theme }) => theme.boxbg};
	padding: 15px;
	border-radius: 20px;
	height: 350px;
	width: 750px;
	margin-bottom: 25px;
	margin-top: 25px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FeatureSubTitle = styled.h2`
	align-text: bottom;
	color:  ${({ theme }) => theme.color};
	margin-left: ${({inverse}) => inverse ? '20px':'10px'};
	margin-top: 'none';
`;

export const FeatWrapper = styled.div`
	margin-bottom: 1rem;
	padding: 5px;
	display: flex;
	flex-flow: ${({inverse}) => inverse ? 'column':'row'};
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 0.5px;
	color:  ${({ theme }) => theme.color};
	margin-left: 30px;
	margin-top: 5px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	text-align: ${({ bold }) => bold ? 'none' : 'center'}; 
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: ${({ theme }) => theme.featuretext};
	font-weight: ${({ bold }) => bold ? 'bold' : 'none'};
	margin-top: 7px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FeatureList = styled.ul`
  list-style: ${({ inverse }) => (inverse ? 'circle' : 'none')};
  margin-left: 35px;
  width: ${({ width }) => (width ? '600px' : '350px')};
  color: ${({ theme }) => theme.featuretext};

  li {
	margin-top: ${({ width }) => (width ? '7px' : 'none')};
    margin-bottom: ${({ width }) => (width ? '25px' : '1px')};
  }
`;
