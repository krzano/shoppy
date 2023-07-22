import * as yup from 'yup';

const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter a valid email.')
		.required('Email is required.'),
	password: yup
		.string()
		.min(6, `Password length must be at least 6 characters`)
		.required('Required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords do not match')
		.required('Required'),
});

export default loginSchema;
