import { Field, useField, useFormikContext } from 'formik';
import { styled } from 'styled-components';

const StyledFormikFormRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

const FormikFormRow = ({ labelText, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<StyledFormikFormRow className={meta.touched && meta.error && 'error'}>
			<label htmlFor={field.name}>{labelText || field.name}</label>
			<input {...field} {...props} />
			<p className='error'>{meta.touched && meta.error}</p>
		</StyledFormikFormRow>
	);
};
export default FormikFormRow;
