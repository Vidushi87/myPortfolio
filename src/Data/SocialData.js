import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const SocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: '',
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: '',
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		link: '',
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: '',
	},
];
