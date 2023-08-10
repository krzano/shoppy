import { styled } from 'styled-components';
import CartSummary from '../components/CartSummary/CartSummary';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import FormikTextField from '../../../components/FormikTextField/FormikTextField';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import addressSchema from '../../../lib/yup/schemas/addressSchema';
// Shipping Info => Address, City, Phone No, Postal Code, Country => Proceed to payment
// Payment => order summary + (stripe or fake stripe payment)

const Checkout = () => {
	const [step, setStep] = useState(1);
	return (
		<StyledCheckout>
			<StyledContentWrapper>
				<div className='shipping-info'>
					<h2>Shipping info</h2>
					<Formik
						initialValues={{
							firstName: '',
							lastName: '',
							street: '',
							city: '',
							postalCode: '',
							phoneNumber: '',
							country: '',
						}}
						validationSchema={addressSchema}>
						<Form>
							<FormikTextField
								name='firstName'
								labelText='first name'
								placeholder='John'
							/>
							<FormikTextField
								name='lastName'
								labelText='last name'
								placeholder='Doe'
							/>
							<FormikTextField
								name='street'
								labelText='street'
								placeholder='Janas Lane 354'
							/>
							<FormikTextField
								name='city'
								labelText='city'
								placeholder='Chicago'
							/>
							<FormikTextField
								name='postalCode'
								labelText='postal code'
								placeholder='11200'
							/>
							<FormikTextField
								type='tel'
								name='phoneNumber'
								labelText='phone number'
								placeholder='+00326523565'
							/>
							<FormikTextField
								name='country'
								labelText='country'
								placeholder='United States'
							/>
							<Button>Confirm address</Button>
						</Form>
					</Formik>
				</div>
				{/* <CartSummary /> */}
			</StyledContentWrapper>
		</StyledCheckout>
	);
};

const StyledCheckout = styled.div`
	padding: 6rem 2rem;
	.shipping-info {
		h2 {
			margin-bottom: 2rem;
		}
		div {
			margin-bottom: 1rem;
		}
	}
`;

export default Checkout;
