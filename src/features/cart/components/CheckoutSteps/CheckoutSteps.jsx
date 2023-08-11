import { styled } from 'styled-components';
import Divider from '../../../../components/Divider/Divider';

const CheckoutSteps = ({ activeStep }) => {
	return (
		<StyledCheckoutSteps>
			<div className='step active'>
				<p>1</p>
				<p>Shipping</p>
			</div>
			<Divider />
			<div className='step'>
				<p>2</p>
				<p>Payment</p>
			</div>
		</StyledCheckoutSteps>
	);
};

const StyledCheckoutSteps = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	gap: 1rem;
	.step {
		opacity: 0.5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.active {
		opacity: 1;
	}
`;

export default CheckoutSteps;
