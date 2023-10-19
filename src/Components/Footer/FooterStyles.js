import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column} from '../../globalStyles';

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSection = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background-color: ${({ theme }) => theme.footerbgColor};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;
export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
	margin-left: 150px;
`;

export const FooterColumn = styled(Column)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	text-align: left;
	box-sizing: border-box;
	color:${({ theme }) => theme.footertextColor};

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color:${({ theme }) => theme.footertextColor};
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #000;
		transition: 0.1s ease-out;
	}
`;

export const FooterSocialIcon = styled.a`
	color:${({ theme }) => theme.footertextColor};
	font-size: 24px;

	&:hover {
		color: #000;
		transition: 0.1s ease-out;
	}
`;
