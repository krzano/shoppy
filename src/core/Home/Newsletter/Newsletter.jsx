import { Form, Formik } from 'formik';
import styled from 'styled-components';
import FormikTextField from '../../../components/FormikTextField/FormikTextField';
import Button from '../../../components/Button/Button';
import newsletterSchema from '../../../lib/yup/schemas/newsletterSchema';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Newsletter = () => {
	const [isNewsletterSubscriptionLoading, setIsNewsletterSubscriptionLoading] =
		useState(false);

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
				onSubmit={(_values, { resetForm }) => {
					setIsNewsletterSubscriptionLoading(true);
					setTimeout(() => {
						setIsNewsletterSubscriptionLoading(false);
						toast.success('Thank you for subscribing to our newsletter!');
						resetForm();
					}, 900);
				}}>
				<StyledFormikForm>
					<FormikTextField
						name='name'
						showLabel={false}
						placeholder='Your name*'
						disabled={isNewsletterSubscriptionLoading}
					/>
					<FormikTextField
						name='email'
						showLabel={false}
						placeholder='Your email address*'
						disabled={isNewsletterSubscriptionLoading}
					/>
					<Button
						$variant='secondary'
						$size='small'
						type='submit'
						isLoading={isNewsletterSubscriptionLoading}>
						Subscribe
					</Button>
				</StyledFormikForm>
			</Formik>
		</StyledNewsletter>
	);
};

const StyledNewsletter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem 2rem;
	padding: 2rem;
	h2 {
		margin-bottom: 1rem;
	}
	h3 {
		font-weight: 500;
		margin-bottom: 1rem;
	}
	@media (min-width: 576px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	@media (min-width: 768px) {
		gap: 6rem;
	}
`;

const StyledFormikForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 3rem 2rem;
	background-color: var(--color-primary-50);
	border: 1px solid var(--color-primary-200);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-md);
`;

export default Newsletter;

export const StyledNewsletterBackground = styled.div`
	background-color: var(--color-primary-100);
	box-shadow: inset 0px 20px 50px -20px rgb(0, 0, 0, 0.1);
`;
