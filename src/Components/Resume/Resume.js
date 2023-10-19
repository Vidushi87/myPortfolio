import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	ButtonWrapper,
	FeatureName,
	FeatureTextWrapper, DownloadButton,
	FeatureSubTitle, FeatureList, FeatWrapper, FeatureText,
} from './ResumeStyles';
import { featuresData } from '../../Data/ResumeData';
import ResumePDF from '../../ResumePDF.pdf';

const Resume = () => {

	const initial = {
		y: 40,
		opacity: 0,
	};

	const animate = {
		y: 0,
		opacity: 1,
	};

	const Experience = (x) => {
		if (x.el.type === 'Experience') {
			return (
				<>
					<FeatureColumn
						initial={initial}
						animate={animate}
						transition={{ duration: 0.5 + x.index * 0.1 }}
						key={x.index}
					>
						<FeatureSubTitle inverse>{x.el.name}</FeatureSubTitle>
						{(x.el.subhead).map((x) => (
							<>
								<FeatureName>{x.name}</FeatureName>
								<FeatWrapper>
									<FeatureList>
										{Object.keys(x.subdesc).map((i) => (
											<li>{x.subdesc[i]}</li>
										))}
									</FeatureList>
									<FeatureList inverse>
										{Object.keys(x.description).map((i) => (
											<li>{x.description[i]}</li>
										))}
									</FeatureList>
								</FeatWrapper>
							</>
						)
						)}
					</FeatureColumn>
				</>
			)
		}
	}

	const Education = (x) => {
		if (x.el.type === 'Education') {
			return (
				<>
					<FeatureSubTitle>{x.el.type}</FeatureSubTitle>
					<FeatureColumn
						initial={initial}
						animate={animate}
						transition={{ duration: 0.5 + x.index * 0.1 }}
						key={x.index}
					>
						{(x.el.subhead).map((x) => (
							<>
								<FeatWrapper>
									<FeatureList inverse>
										<FeatureName>{x.name}</FeatureName>
										<FeatureText>{x.subdesc}</FeatureText>
									</FeatureList>
									<FeatureList>
										<li><FeatureText bold>{x.desc}</FeatureText></li>
										<li><FeatureList>
											{Object.keys(x.description).map((i) => (
												<li>{x.description[i]}</li>
											))}
										</FeatureList></li>
									</FeatureList>
								</FeatWrapper>
							</>
						)
						)}
					</FeatureColumn> </>
			)
		}
	}

	const Skills = (x) => {
		if (x.el.type === 'Skills') {
			return (
				<>
					<FeatureSubTitle>{x.el.type}</FeatureSubTitle>
					<FeatureColumn
						initial={initial}
						animate={animate}
						transition={{ duration: 0.5 + x.index * 0.1 }}
						key={x.index}
					>
						<FeatWrapper>
							<FeatureList inverse width>
								{(x.el.description).map((x) => {
									console.log(x)
									return (
										<>
											<li>{x}</li>
										</>
									)
								})}</FeatureList>
							<FeatureList inverse width>
								{(x.el.subdesc).map((x) => {
									console.log(x)
									return (
										<>
											<li>{x}</li>
										</>
									)
								})}
							</FeatureList>
						</FeatWrapper>
					</FeatureColumn>
				</>
			)
		}
	}

	const CertAchiev = (x) => {
		if (x.el.type === 'Certication & Achievements') {
			return (
				<>
					<FeatureSubTitle>{x.el.type}</FeatureSubTitle>
					<FeatureColumn
						initial={initial}
						animate={animate}
						transition={{ duration: 0.5 + x.index * 0.1 }}
						key={x.index}
					>
						<FeatWrapper inverse>
							{(x.el.description).map((x) => (
								<>
									<FeatureList inverse width>
										<li>{x}</li>
									</FeatureList>
								</>
							)
							)}
						</FeatWrapper>
					</FeatureColumn>
				</>
			)
		}
	}

	const BtnWrapper = () => (
		<ButtonWrapper>
			<FeatureSubTitle>Work Experience</FeatureSubTitle>
			<a href={ResumePDF} without rel='noreferrer' target='_blank'>
				<DownloadButton >Download CV</DownloadButton>
			</a></ButtonWrapper>
	)

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>Resume</FeatureTitle>
				</FeatureTextWrapper>
				<BtnWrapper />
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<>
							<Experience el={el} index={index} />
							<Education el={el} index={index} />
							<Skills el={el} index={index} />
							<CertAchiev el={el} index={index} />
						</>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Resume;
