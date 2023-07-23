import { Field, useField, useFormikContext } from 'formik';
import { styled } from 'styled-components';

const StyledFormikFormRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	label {
		margin-bottom: 1rem;
		font-weight: 500;
		text-transform: capitalize;
		color: var(--color-neutral-600);
	}
	input {
		padding: 0.5rem 1.5rem;
		width: 100%;
		border: 2px solid var(--color-neutral-400);
		border-radius: var(--border-radius-sm);
		&:focus {
			outline-color: var(--color-primary-700);
			border-color: var(--color-primary-700);
		}
	}
	.error-text {
		margin-top: 0.5rem;
		min-height: 1em;
		font-size: 1.4rem;
	}
	&.error {
		input {
			border-color: var(--color-red-700);
		}
		.error-text {
			color: var(--color-red-700);
		}
	}
`;

const FormikFormRow = ({ labelText, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<StyledFormikFormRow className={meta.touched && meta.error && 'error'}>
			<label htmlFor={field.name}>{labelText || field.name}</label>
			<input {...field} {...props} />
			<p className='error-text'>{meta.touched && meta.error}</p>
		</StyledFormikFormRow>
	);
};
export default FormikFormRow;
