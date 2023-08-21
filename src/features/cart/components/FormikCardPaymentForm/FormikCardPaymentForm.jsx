import { styled } from 'styled-components';
import { Formik, Form } from 'formik';
import FormikTextField from '../../../../components/FormikTextField/FormikTextField';
import Button from '../../../../components/Button/Button';
import { UseStepsContext } from '../Stepper/Stepper';
import cardPaymentSchema from '../../../../lib/yup/schemas/cardPaymentSchema';

const CardPaymentForm = () => {
	const { handleNextStep } = UseStepsContext();

	return (
		<StyledCardPaymentForm>
			<h2>Card payment</h2>
			<Formik
				initialValues={{
					cardNumber: '',
					nameOnCard: '',
					expiryDate: '',
					securityCode: '',
				}}
				validationSchema={cardPaymentSchema}
				onSubmit={(values) => {
					handleNextStep();
					console.log('submit');
					console.log(values);
				}}>
				<StyledFormikForm>
					<FormikTextField
						className='full-width'
						name='cardNumber'
						labelText='card number'
						placeholder='1234 5678 9102 3456'
					/>
					<FormikTextField
						className='full-width'
						name='nameOnCard'
						labelText='name on card'
						placeholder='Eg. John Smith'
					/>
					<FormikTextField
						className='expiry-date'
						name='expiryDate'
						labelText='expiry date'
						placeholder='MM/YY'
					/>
					<FormikTextField
						className='security-code'
						type='password'
						name='securityCode'
						labelText='Security code'
						placeholder='CVV'
					/>
					<Button type='submit' className='full-width'>
						Pay Now
					</Button>
				</StyledFormikForm>
			</Formik>
		</StyledCardPaymentForm>
	);
};

const StyledCardPaymentForm = styled.div`
	padding: 4rem 2rem 6rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const StyledFormikForm = styled(Form)`
	display: grid;
	gap: 1.2rem;
	@media (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
		align-items: start;
		.full-width {
			grid-column: 1 /-1;
		}
		.expiry-date {
			grid-column: 1 / 2;
		}
		.security-code {
			grid-column: 2 / -1;
		}
	}
`;

export default CardPaymentForm;
