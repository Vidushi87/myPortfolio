import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	ButtonWrapper,
	FeatureName,
	FeatureTextWrapper, DownloadButton,
	FeatureSubTitle
} from './FeaturesStyles';
import { featuresData } from '../../Data/FeaturesData';
import samplePDF from '../../samplePDF.pdf';

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>Resume</FeatureTitle>
				</FeatureTextWrapper>
				<ButtonWrapper>
					<FeatureSubTitle>Experience</FeatureSubTitle>
					<a href={samplePDF} without rel='noreferrer' target='_blank'>
						<DownloadButton >Download CV</DownloadButton>
					</a></ButtonWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<>
							<FeatureSubTitle>{el.type}</FeatureSubTitle>
							<FeatureColumn
								initial={initial}
								animate={animate}
								transition={{ duration: 0.5 + index * 0.1 }}
								key={index}
							>
								<FeatureName>{el.name}</FeatureName>
								<FeatureText>{el.description}</FeatureText>
							</FeatureColumn></>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;
