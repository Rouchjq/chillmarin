import * as React from 'react';
import { useState } from 'react';
import { Container, Box } from '@mui/material';
import {
	FasesContainer,
	ProgressBar,
	ProgressBarContend,
	SelectorContainer,
	StepActive,
} from './styles';
import { CSSTransition } from 'react-transition-group';

import { Step1 } from './Steps/Step1';
import { EachStep, steps } from './steps';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { Step4 } from './Steps/Step4';
import { Step5 } from './Steps/Step5';
import { Step6 } from './Steps/Step6';
import { Ad } from './Ads';

const Section2: React.FunctionComponent = () => {
	const [step, setStep] = useState(2);

	const progress = (step: number): string => {
		const totalSteps = steps.length;
		const percent = (step / totalSteps) * 100;
		return `${percent}%`;
	};

	const handleNextOrPrev = (action: string): void => {
		if (action === 'next') {
			setStep(step + 1);
			if (step === steps.length) {
				setStep(1);
			}
		} else {
			setStep(step - 1);
			if (step === 1) {
				setStep(steps.length);
			}
		}
	};

	return (
		<>
			<Container maxWidth={'xl'}>
				{step === 1 && <Step1 />}
				{step === 2 && <Step2 />}
				{step === 3 && <Step3 />}
				{step === 4 && <Step4 />}
				{step === 5 && <Step5 />}
				<SelectorContainer>
					<button
						onClick={() => handleNextOrPrev('prev')}
						className="left"
					>
						{'<'}
					</button>
					<button
						onClick={() => handleNextOrPrev('next')}
						className="right"
					>
						{'>'}
					</button>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-evenly',
							marginBottom: '3rem',
							height: '100px',
						}}
					>
						{steps.map((s: EachStep, i): any => {
							const stylesWhenActive = (
								step: number,
								i: number
							) => {
								if (step === i + 1) {
									return {
										top: '-1rem',
										imageWidth: '60px',
										color: '#29CD9C',
										fontWeight: '600',
									};
								}
								return;
							};
							const styles = stylesWhenActive(step, i);
							return (
								<FasesContainer
									onClick={() =>
										setStep(i + 1)
									}
									key={s.id}
								>
									<StepActive
										imageWidth={
											styles?.imageWidth
										}
										color={
											styles?.color
										}
										fontWeight={
											styles?.fontWeight
										}
										top={styles?.top}
									>
										{s.icon && (
											<img
												src={
													s.icon
												}
												alt={
													s.title
												}
											></img>
										)}
										<h3> {s.title} </h3>
									</StepActive>
								</FasesContainer>
							);
						})}
					</Box>

					<ProgressBar>
						<ProgressBarContend
							width={progress(step)}
						></ProgressBarContend>
					</ProgressBar>
				</SelectorContainer>
			</Container>
			<Ad />
		</>
	);
};

export default Section2;
