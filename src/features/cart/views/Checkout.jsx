import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';
// Shipping Info => Address, City, Phone No, Postal Code, Country => Proceed to payment
// Payment => order summary + (stripe or fake stripe payment)

const Checkout = () => {
	return (
		<StyledCheckout>
			<StyledContentWrapper>
				<CheckoutSteps />
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
