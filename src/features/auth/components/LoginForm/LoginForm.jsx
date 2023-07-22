import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import authSchema from '../../../../lib/yup/schemas/authSchema';
import FormRow from '../FormRow/FormRow';

const StyledLoginForm = styled.form`
	background-color: var(--color-neutral-50);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-width: 50%;
	padding: 2rem 1rem;
	border-radius: var(--border-radius-lg);
	border: 1px solid var(--color-neutral-500);
`;

const LoginForm = () => {
	const [hasAccount, setHasAccount] = useState(true);

	const { values, handleChange, handleBlur, errors, handleSubmit, touched } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
				confirmPassword: '',
			},
			validationSchema: hasAccount
				? authSchema.omit(['confirmPassword'])
				: authSchema,
			onSubmit: () => {
				console.log('submit', values);
				formik.resetForm();
			},
		});

	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<h2>{hasAccount ? 'login' : 'register'} page</h2>
			<FormRow
				name='email'
				type='email'
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				isTouched={touched.email}
				isError={errors.email}
			/>
			<FormRow
				name='password'
				type='password'
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				isTouched={touched.password}
				isError={errors.password}
			/>
			{!hasAccount && (
				<FormRow
					name='confirmPassword'
					labelText='confirm password'
					type='confirmPassword'
					value={values.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					isTouched={touched.confirmPassword}
					isError={errors.confirmPassword}
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
		</StyledLoginForm>
	);
};
export default LoginForm;
