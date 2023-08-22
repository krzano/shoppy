import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import Stepper from '../components/Stepper/Stepper';
import FormikShippingForm from '../components/FormikShippingForm/FormikShippingForm';
import CardPaymentForm from '../components/FormikCardPaymentForm/FormikCardPaymentForm';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';

const steps = [
	{
		title: 'shipping',
		context: <FormikShippingForm />,
	},
	{
		title: 'payment',
		context: (
			<>
				<ScrollToTop />
				<CardPaymentForm />
			</>
		),
	},
	{
		title: 'confirmation',
		context: (
			<>
				<ScrollToTop />
				<OrderConfirmation />
			</>
		),
	},
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
	padding: 4rem 2rem 6rem;
	${StyledContentWrapper} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		max-width: 50rem;
	}
`;

export default Checkout;
