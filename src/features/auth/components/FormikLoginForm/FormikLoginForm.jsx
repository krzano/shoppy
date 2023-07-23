import { Form, Formik, useFormik } from 'formik';
import { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import authSchema from '../../../../lib/yup/schemas/authSchema';
import FormikFormRow from '../FormikFormRow/FormikFormRow';
import { FcGoogle } from 'react-icons/fc';
import Divider from '../../../../components/Divider/Divider';

const StyledFormikLoginForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 2rem;
	padding: 4rem 3rem 6rem;
	min-height: calc(100vh - var(--height-navbar));
	background-color: transparent;
	h1 {
		margin-bottom: 0.5em;
		text-transform: capitalize;
		text-align: center;
		color: var(--color-primary-900);
	}

	.auth-provider-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		svg {
			font-size: 1.5em;
		}
	}
	.form-footer {
		text-align: center;
	}
	@media (min-width: 576px) {
		padding: 6rem 4rem 8rem;
		font-size: 1.8rem;
	}
	@media (min-width: 768px) {
		padding: 6rem 6rem 10rem;
	}
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
				<h1>{hasAccount ? 'login' : 'register'}</h1>
				<FormikFormRow
					name='email'
					type='email'
					placeholder='e.g. user@email.com'
				/>
				<FormikFormRow
					name='password'
					type='password'
					placeholder='at least 6 characters'
				/>
				{!hasAccount && (
					<FormikFormRow
						name='confirmPassword'
						labelText='confirm password'
						type='password'
						placeholder='confirm your password'
					/>
				)}
				<Button type='submit'>{hasAccount ? 'Login' : 'Register'}</Button>
				<Divider>or</Divider>
				<Button type='button' variant='secondary' className='auth-provider-btn'>
					<FcGoogle />
					<span>Continue with Google</span>
				</Button>
				<div>
					<p className='form-footer'>
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
