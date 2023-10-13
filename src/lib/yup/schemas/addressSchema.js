import * as yup from 'yup';

const addressSchema = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	street: yup.string().required('Required'),
	city: yup.string().required('Required'),
	postalCode: yup
		.string()
		.matches(/^[0-9]+[0-9-][0-9]+$/, {
			message: 'Incorrect postalcode format (only numbers and hyphen)',
		})
		.required('Required'),
	phoneNumber: yup
		.string()
		// /^\+(?:[0-9]●?){6,14}[0-9]$/ regex for all international phone numbers
		.matches(/^\+(?:[0-9]●?){6,14}[0-9]$/, {
			message:
				'Make sure it is a proper phone number starting with + and your country code',
		})
		.required('Required'),
	// country: yup.string().required('Required'),
});
export default addressSchema;
