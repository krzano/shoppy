import { styled } from 'styled-components';
import { Formik, Form } from 'formik';
import FormikTextField from '../../../../components/FormikTextField/FormikTextField';
import Button from '../../../../components/Button/Button';
import { UseStepsContext } from '../Stepper/Stepper';
import cardPaymentSchema from '../../../../lib/yup/schemas/cardPaymentSchema';
import { formatPrice } from '../../../../utils/helpers';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CardPaymentForm = () => {
	const { handleNextStep } = UseStepsContext();
	const [isPaymentLoading, setIsPaymentLoading] = useState(false);
	const { totalPrice, shippingFee } = useSelector((store) => store.cart);

	const handleCardNumberKeyUp = (e) => {
		let newValue = e.target.value.replaceAll(' ', '');
		newValue = newValue.replaceAll(/[a-z]+/gim, '');
		newValue = newValue.replace(/\d{4}(?=.)/g, '$& ');
		e.target.value = newValue;
	};

	const handleExpiryDateKeyUp = (e) => {
		let newValue = e.target.value.replaceAll(' ', '');
		if (e.target.value.length === 3 && e.target.value.endsWith('/')) {
			newValue = newValue.replace('/', '');
		}
		if (e.target.value.length === 3 && !e.target.value.endsWith('/')) {
			newValue = newValue.slice(0, 2) + '/' + newValue.slice(2);
		}
		if (e.target.value.length === 2) {
			newValue = newValue + '/';
		}
		e.target.value = newValue;
	};

	return (
		<StyledCardPaymentForm>
			<h2>Card payment</h2>
			<Formik
				initialValues={{
					cardNumber: '',
					cardHolder: '',
					expiryDate: '',
					securityCode: '',
				}}
				validationSchema={cardPaymentSchema}
				onSubmit={() => {
					setIsPaymentLoading(true);
					setTimeout(() => {
						handleNextStep();
					}, 2500);
				}}>
				<StyledFormikForm>
					<FormikTextField
						inputMode='numeric'
						maxLength='19'
						className='full-width'
						name='cardNumber'
						labelText='card number'
						placeholder='1234 5678 9102 3456'
						onKeyUp={handleCardNumberKeyUp}
						disabled={isPaymentLoading}
					/>
					<FormikTextField
						className='full-width'
						name='cardHolder'
						labelText='card holder'
						placeholder='Eg. John Smith'
						disabled={isPaymentLoading}
					/>
					<FormikTextField
						inputMode='numeric'
						maxLength='5'
						className='expiry-date'
						name='expiryDate'
						labelText='expiry date'
						placeholder='MM/YY'
						onKeyUp={handleExpiryDateKeyUp}
						disabled={isPaymentLoading}
					/>
					<FormikTextField
						inputMode='numeric'
						maxLength='3'
						className='security-code'
						name='securityCode'
						labelText='Security code'
						placeholder='CVV'
						disabled={isPaymentLoading}
					/>
					<Button
						type='submit'
						className='full-width'
						disabled={isPaymentLoading}
						isLoading={isPaymentLoading}>
						Pay {formatPrice(totalPrice + shippingFee)}
					</Button>
				</StyledFormikForm>
			</Formik>
		</StyledCardPaymentForm>
	);
};

const StyledCardPaymentForm = styled.div`
	padding: 2rem 2rem 6rem;
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
