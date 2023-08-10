import * as yup from 'yup';

const addressSchema = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	street: yup.string().required('Required'),
	city: yup.string().required('Required'),
	postalCode: yup.string().required('Required'),
	phoneNumber: yup
		.number('Make sure it is a proper number')
		.required('Required'),
	// country: yup.string().required('Required'),
});

export default addressSchema;
