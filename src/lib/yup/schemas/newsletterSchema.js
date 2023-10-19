import * as yup from 'yup';

const newsletterSchema = yup.object().shape({
	name: yup.string().required('Please enter your name.'),
	email: yup
		.string()
		.email('Please enter a valid email address.')
		.required('Email is required.'),
});

export default newsletterSchema;
