import { styled } from 'styled-components';
import { createContext, useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
// import { ImCheckmark } from 'react-icons/im';

const StepsContext = createContext();
export const UseStepsContext = () => useContext(StepsContext);

const Stepper = ({ steps }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNextStep = () => {
		setCurrentStep((prev) => {
			if (prev === steps.length) {
				return prev;
			}
			return prev + 1;
		});
	};

	const isStepActive = (index) => index === currentStep - 1;
	const isStepCompleted = (index) => index < currentStep - 1;

	return (
		<StyledStepper $numberOfSteps={steps.length}>
			<div className='steps-container'>
				{steps.map(({ title }, index) => {
					return (
						<div
							key={title}
							className={`step ${isStepActive(index) ? 'active' : ''} 
							${isStepCompleted(index) ? 'completed' : ''}`}>
							<div className='step-number'>
								{isStepCompleted(index) ? <FaCheck /> : <p>{index + 1}</p>}
							</div>
							<p className='step-title'>{title}</p>
						</div>
					);
				})}
			</div>
			<StepsContext.Provider value={{ currentStep, handleNextStep }}>
				<div className='step-content'>{steps[currentStep - 1].context}</div>
			</StepsContext.Provider>
		</StyledStepper>
	);
};

const StyledStepper = styled.div`
	.steps-container {
		display: grid;
		align-items: center;
		column-gap: 1rem;
		row-gap: 2rem;
		margin-bottom: 2rem;
		padding-left: 2rem;
		.step {
			flex-grow: 1;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			column-gap: 2rem;
			align-items: center;
			text-transform: capitalize;
			opacity: 0.4;
		}
		.step-number {
			display: grid;
			place-items: center;
			width: 3.6rem;
			height: 3.6rem;
			font-size: 2rem;
			font-weight: bold;
			border-radius: 50%;
			border: 3px solid var(--color-neutral-700);
			background-color: var(--color-neutral-0);
		}
		.step-title {
			font-weight: 500;
		}
		.active {
			opacity: 1;
			color: var(--color-primary-800);
			.step-number {
				border-color: var(--color-primary-800);
			}
		}
		.completed {
			color: var(--color-primary-800);
			.step-number {
				border-color: var(--color-primary-800);
			}
		}
	}
	@media (min-width: ${({ $numberOfSteps }) => $numberOfSteps * 130 + 'px'}) {
		.steps-container {
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
			padding-left: 0;
			.step {
				flex-direction: column;
			}
			.step-number {
				margin-bottom: 1rem;
			}
		}
	}
`;

export default Stepper;
