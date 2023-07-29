import { Form, Formik, useFormik } from 'formik';
import { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import authSchema from '../../../../lib/yup/schemas/authSchema';
import FormikTextField from '../../../../components/FormikTextField/FormikTextField';
import { FcGoogle } from 'react-icons/fc';
import Divider from '../../../../components/Divider/Divider';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../../services/firebase/firebase';
import { toast } from 'react-toastify';

const FormikLoginForm = () => {
	const [hasAccount, setHasAccount] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = ({ email, password }, actions) => {
		console.log('submit', email, password);
		setIsLoading(true);
		if (hasAccount) {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => toast.success('Succesfully logged in.'))
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log('Error:', errorCode, errorMessage);
					toast.error('There was an error...');
				})
				.finally(() => setIsLoading(false));
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => toast.success('Account created.'))
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log('Error:', errorCode, errorMessage);
					toast.error('There was an error...');
				})
				.finally(() => setIsLoading(false));
		}
		actions.resetForm();
	};

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
			onSubmit={handleSubmit}>
			<StyledFormikLoginForm>
				<h1>{hasAccount ? 'login' : 'register'}</h1>
				<FormikTextField
					name='email'
					type='email'
					placeholder='e.g. user@email.com'
				/>
				<FormikTextField
					name='password'
					type='password'
					placeholder='at least 6 characters'
				/>
				{!hasAccount && (
					<FormikTextField
						name='confirmPassword'
						labelText='confirm password'
						type='password'
						placeholder='confirm your password'
					/>
				)}
				<Button disabled={isLoading} type='submit'>
					{(isLoading && 'Loading...') || (hasAccount ? 'Login' : 'Register')}
				</Button>
				<Divider>or</Divider>
				<Button
					disabled={isLoading}
					type='button'
					$variant='secondary'
					className='auth-provider-btn'>
					<FcGoogle />
					<span>Continue with Google</span>
				</Button>
				<div>
					<p className='form-footer'>
						{hasAccount ? 'Not a member yet?' : 'Already a member?'}
						<Button
							type='button'
							$variant='text'
							onClick={() => setHasAccount((prev) => !prev)}>
							{hasAccount ? 'Signup here' : 'Login here'}
						</Button>
					</p>
				</div>
			</StyledFormikLoginForm>
		</Formik>
	);
};

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
		padding: 6rem 6rem 10rem;
		font-size: 1.8rem;
	}
`;

export default FormikLoginForm;
