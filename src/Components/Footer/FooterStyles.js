import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column} from '../../globalStyles';

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
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
	color: #5e5e5e;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #5e5e5e;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #000;
		transition: 0.3s ease-out;
	}
`;

export const FooterSocialIcon = styled.a`
	color: #5e5e5e;
	font-size: 24px;

	&:hover {
		color: #000;
		transition: 0.3s ease-out;
	}
`;
