import { useField } from 'formik';
import { styled } from 'styled-components';

const FormikSelectField = ({ labelText, className, children, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<StyledFormikSelectField
			className={`${className}  ${meta.touched && meta.error && 'error'}`}>
			<label htmlFor={field.name}>{labelText || field.name}</label>
			<select id={field.name} {...field} {...props}>
				{children}
			</select>
			<p className='error-text'>{meta.touched && meta.error}</p>
		</StyledFormikSelectField>
	);
};

const StyledFormikSelectField = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	label {
		margin-bottom: 0.7rem;
		text-transform: capitalize;
		color: var(--color-neutral-700);
	}
	select {
		padding: 0.5rem 1.5rem;
		width: 100%;
		border: 1px solid var(--color-neutral-400);
		border-radius: var(--border-radius-sm);
		&:focus {
			outline-color: var(--color-primary-700);
			border-color: var(--color-primary-700);
		}
		&::placeholder {
			font-size: 0.8em;
		}
	}
	.error-text {
		margin-top: 0.5rem;
		font-size: 1.4rem;
		line-height: 1;
	}
	&.error {
		select {
			border-color: var(--color-red-700);
		}
		.error-text {
			color: var(--color-red-700);
		}
	}
`;

export default FormikSelectField;
