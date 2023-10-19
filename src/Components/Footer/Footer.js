import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterSocialIcon,
	FooterWrapper,
	FooterGrid,
	FooterSection
} from './FooterStyles';
import { footerData } from '../../Data/FooterData';
import { SocialData } from '../../Data/SocialData';
import { Row } from '../../globalStyles';

function Footer() {
	return (
		<FooterSection padding="1rem 0 1rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.title !== 'Follow' ? footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							)) :
								<Row align="center" margin="auto  0 0 0" gap="1rem">
									{SocialData.map((social, index) => (
										<FooterSocialIcon
											key={index}
											href={social.link}
											target="_blank"
											aria-label={social.name}
										>
											{social.icon}
										</FooterSocialIcon>
									))}
								</Row>}
						</FooterLinkItems>

					))}
				</FooterGrid>
			</FooterWrapper>
		</FooterSection>
	);
}

export default Footer;