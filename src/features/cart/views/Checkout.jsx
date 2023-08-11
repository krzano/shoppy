import { useState } from 'react';
import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import CartSummary from '../components/CartSummary/CartSummary';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';
import FormikAddressForm from '../components/FormikAddressForm/FormikAddressForm';
// Shipping Info => Address, City, Phone No, Postal Code, Country => Proceed to payment
// Payment => order summary + (stripe or fake stripe payment)

const Checkout = () => {
	const [activeStep, setActiveStep] = useState(1);
	return (
		<StyledCheckout>
			<StyledContentWrapper>
				<CheckoutSteps activeStep={activeStep} />
				<FormikAddressForm />
			</StyledContentWrapper>
		</StyledCheckout>
	);
};

const StyledCheckout = styled.div`
	padding: 6rem 2rem;
	${StyledContentWrapper} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		max-width: 50rem;
	}
`;

export default Checkout;
