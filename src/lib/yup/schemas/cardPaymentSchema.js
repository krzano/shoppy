import * as yup from 'yup';

const cardPaymentSchema = yup.object().shape({
	cardNumber: yup.string().required('Required'),
	nameOnCard: yup.string().required('Required'),
	expiryDate: yup.string().required('Required'),
	securityCode: yup.string().required('Required'),
});

export default cardPaymentSchema;
