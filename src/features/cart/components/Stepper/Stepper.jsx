import { styled } from 'styled-components';
import { createContext, useContext, useState } from 'react';

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
	const isStepCompleted = (index) => index > currentStep - 1;

	return (
		<StyledStepper>
			<div className='stepper'>
				{steps.map(({ title }, index) => {
					return (
						<div
							key={title}
							className={`step ${isStepActive(index) && 'active'} 
							${isStepCompleted(index) && 'completed'}`}>
							<p>{index + 1}</p>
							<p>{title}</p>
						</div>
					);
				})}
			</div>
			<StepsContext.Provider value={{ currentStep, handleNextStep }}>
				<div>{steps[currentStep - 1].context}</div>
			</StepsContext.Provider>
		</StyledStepper>
	);
};

const StyledStepper = styled.div`
	.stepper {
		display: grid;
		align-items: center;
		gap: 1rem;
		row-gap: 3rem;
		margin-bottom: 3rem;
		.step {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-transform: capitalize;
			opacity: 0.5;
		}
		.active {
			opacity: 1;
		}
	}
	@media (min-width: 576px) {
		.stepper {
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
	}
`;

export default Stepper;
