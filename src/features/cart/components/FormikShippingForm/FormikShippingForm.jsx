import { styled } from 'styled-components';
import { Formik, Form } from 'formik';
import FormikTextField from '../../../../components/FormikTextField/FormikTextField';
import FormikSelectField from '../../../../components/FormikSelectField/FormikSelectField';
import Button from '../../../../components/Button/Button';
import addressSchema from '../../../../lib/yup/schemas/addressSchema';
import { UseStepsContext } from '../CheckoutSteps/CheckoutSteps';

const FormikShippingForm = () => {
	const { handleNextStep } = UseStepsContext();

	return (
		<StyledFormikShippingForm>
			<h2>Shipping info</h2>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					street: '',
					city: '',
					postalCode: '',
					phoneNumber: '+1',
					country: 'US',
				}}
				validationSchema={addressSchema}
				onSubmit={(values) => {
					handleNextStep();
					console.log('submit');
					console.log(values);
				}}>
				<StyledFormikForm>
					<FormikTextField
						className='full-width'
						name='firstName'
						labelText='first name'
						// placeholder='John'
					/>
					<FormikTextField
						className='full-width'
						name='lastName'
						labelText='last name'
						// placeholder='Doe'
					/>
					<FormikTextField
						className='full-width'
						name='street'
						labelText='street address'
						placeholder='e.g. 2860 Tully Street'
					/>
					<FormikTextField
						className='postal-code'
						name='postalCode'
						labelText='postal code'
						placeholder='48219'
					/>
					<FormikTextField className='city' name='city' placeholder='Detroit' />
					<FormikTextField
						className='full-width'
						type='tel'
						name='phoneNumber'
						labelText='phone number'
						placeholder='347-418-3434'
					/>
					<FormikSelectField
						name='country'
						labelText='Country/Region'
						className='full-width'>
						<option value='US'>United States</option>
					</FormikSelectField>
					<Button type='submit' className='full-width' $variant='secondary'>
						Save Address
					</Button>
				</StyledFormikForm>
			</Formik>
		</StyledFormikShippingForm>
	);
};

const StyledFormikShippingForm = styled.div`
	padding: 4rem 2rem 6rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	h2 {
		/* margin-bottom: 2rem; */
	}
`;

const StyledFormikForm = styled(Form)`
	display: grid;
	gap: 1.2rem;
	@media (min-width: 576px) {
		/* padding: 4rem 3rem 6rem; */
		grid-template-columns: repeat(3, 1fr);
		align-items: start;
		.full-width {
			grid-column: 1 /-1;
		}
		.postal-code {
			grid-column: 1 / 2;
		}
		.city {
			grid-column: 2 / -1;
		}
	}
`;

export default FormikShippingForm;
