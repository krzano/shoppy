import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import Stepper from '../components/Stepper/Stepper';
import FormikShippingForm from '../components/FormikShippingForm/FormikShippingForm';
import CardPaymentForm from '../components/FormikCardPaymentForm/FormikCardPaymentForm';
import OrderConfimration from '../components/OrderConfirmation/OrderConfimration';

const steps = [
	{
		title: 'shipping',
		context: <FormikShippingForm />,
	},
	{ title: 'payment', context: <CardPaymentForm /> },
	{ title: 'confirmation', context: <OrderConfimration /> },
];

const Checkout = () => {
	return (
		<StyledCheckout>
			<StyledContentWrapper>
				<Stepper steps={steps} />
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
