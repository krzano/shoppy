import { Form, Formik } from 'formik';
import styled from 'styled-components';
import FormikTextField from '../../../components/FormikTextField/FormikTextField';
import Button from '../../../components/Button/Button';
import newsletterSchema from '../../../lib/yup/schemas/newsletterSchema';
import { toast } from 'react-toastify';

const Newsletter = () => {
	return (
		<StyledNewsletter>
			<div className='text-container'>
				<h2>Hey there!</h2>
				<h3>Sign up to our newsletter!</h3>
				<p>Stay up to date with new products and deals.</p>
			</div>
			<Formik
				initialValues={{
					name: '',
					email: '',
				}}
				validationSchema={newsletterSchema}
				onSubmit={(values, { resetForm }) => {
					toast.success('Thank you for subscribing to our newsletter!');
					resetForm();
				}}>
				<StyledFormikForm>
					<FormikTextField
						name='name'
						showLabel={false}
						placeholder='Your name*'
					/>
					<FormikTextField
						name='email'
						showLabel={false}
						placeholder='Your email address*'
					/>
					<Button $variant='secondary' $size='small' type='submit'>
						Subscribe
					</Button>
				</StyledFormikForm>
			</Formik>
		</StyledNewsletter>
	);
};

const StyledNewsletter = styled.div`
	display: grid;
	gap: 4rem 2rem;
	padding: 2rem;
	h2 {
		margin-bottom: 1rem;
	}
	h3 {
		font-weight: 500;
		margin-bottom: 1rem;
	}
`;

const StyledFormikForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 3rem 2rem;
	background-color: var(--color-primary-50);
	border: 2px solid var(--color-primary-200);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-md);
`;

export default Newsletter;

export const StyledNewsletterBackground = styled.div`
	background-color: var(--color-primary-100);
	box-shadow: inset 0px 20px 50px -20px rgb(0, 0, 0, 0.1);
`;
