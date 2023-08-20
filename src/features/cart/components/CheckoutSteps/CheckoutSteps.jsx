import { styled } from 'styled-components';
import Divider from '../../../../components/Divider/Divider';
import { createContext, useContext, useState } from 'react';
import FormikShippingForm from '../FormikShippingForm/FormikShippingForm';

const StepsContext = createContext();
export const UseStepsContext = () => useContext(StepsContext);

const CheckoutSteps = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const steps = [
		{
			title: 'shipping',
			context: <FormikShippingForm />,
		},
		{ title: 'payment', context: <div>payment</div> },
		{ title: 'confirmation', context: <div>confirmation</div> },
	];

	const handleNextStep = () => {
		setCurrentStep((prev) => {
			if (prev === steps.length) {
				return prev;
			}
			return prev + 1;
		});
	};

	return (
		<StyledCheckoutSteps>
			<div className='stepper'>
				{steps.map(({ title }, index) => {
					return (
						<div
							key={title}
							className={`step ${index + 1 === currentStep && 'active'}`}>
							<p>{index + 1}</p>
							<p>{title}</p>
						</div>
					);
				})}
			</div>
			<StepsContext.Provider value={{ currentStep, handleNextStep }}>
				<div>{steps[currentStep - 1].context}</div>
			</StepsContext.Provider>
		</StyledCheckoutSteps>
	);
};

const StyledCheckoutSteps = styled.div`
	.stepper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* gap: 1rem; */
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
`;

export default CheckoutSteps;
