import { Form, Formik, useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import authSchema from '../../../../lib/yup/schemas/authSchema';
import FormikFormRow from '../FormikFormRow/FormikFormRow';

const StyledFormikLoginForm = styled(Form)`
	background-color: var(--color-neutral-50);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-width: 50%;
	padding: 2rem 1rem;
	border-radius: var(--border-radius-lg);
	border: 1px solid var(--color-neutral-500);
`;

const FormikLoginForm = () => {
	const [hasAccount, setHasAccount] = useState(true);

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={
				hasAccount ? authSchema.omit(['confirmPassword']) : authSchema
			}
			onSubmit={(values, actions) => {
				console.log('submit', values);
				actions.resetForm();
			}}>
			<StyledFormikLoginForm>
				<h2>{hasAccount ? 'login' : 'register'} page</h2>
				<FormikFormRow name='email' type='email' />
				<FormikFormRow name='password' type='password' />
				{!hasAccount && (
					<FormikFormRow
						name='confirmPassword'
						labelText='confirm password'
						type='password'
					/>
				)}
				<Button type='submit'>{hasAccount ? 'Login' : 'Register'}</Button>
				<div>
					<p>
						{hasAccount ? 'Not a member yet?' : 'Already a member?'}
						<Button
							type='button'
							variant='text'
							onClick={() => setHasAccount((prev) => !prev)}>
							{hasAccount ? 'Signup here' : 'Login here'}
						</Button>
					</p>
				</div>
			</StyledFormikLoginForm>
		</Formik>
	);
};
export default FormikLoginForm;
