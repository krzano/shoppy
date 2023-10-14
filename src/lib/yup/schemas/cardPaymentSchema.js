import * as yup from 'yup';

const cardPaymentSchema = yup.object().shape({
	cardNumber: yup
		.string()
		.matches(/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/, {
			message: 'Incorrect card number',
		})
		.required('Required'),
	cardHolder: yup.string().required('Required'),
	expiryDate: yup
		.string()
		.matches(/^[0-9]{2}[/][0-9]{2}$/, {
			message: 'Incorrect expiry date format (e.g. 12/25)',
		})
		.required('Required'),
	securityCode: yup
		.string()
		.matches(/^[0-9]{3}$/, {
			message: 'Only 3-digit numbers are valid',
		})
		.required('Required'),
});

export default cardPaymentSchema;
