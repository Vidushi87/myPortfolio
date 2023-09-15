import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const SocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: 'https://www.facebook.com/profile.php?id=100009125877416&mibextid=b06tZ0',
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: 'https://instagram.com/_packetofhappiness_?igshid=NGVhN2U2NjQ0Yg==',
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		link: 'https://twitter.com/VidushiPandey12',
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: 'https://www.linkedin.com/in/vidushi-pandey-78b718196/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbVfIYpmMStSuPeVnLLnk5g%3D%3D',
	},
];
