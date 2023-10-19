import { useField } from 'formik';
import { styled } from 'styled-components';

const FormikTextField = ({
	showLabel = true,
	labelText,
	className,
	...props
}) => {
	const [field, meta, helpers] = useField(props);

	return (
		<StyledFormikTextField
			className={`${className}  ${meta.touched && meta.error && 'error'}`}>
			{showLabel && (
				<label htmlFor={field.name}>{labelText || field.name}</label>
			)}
			<input id={field.name} {...field} {...props} />
			<p className='error-text'>{meta.touched && meta.error}</p>
		</StyledFormikTextField>
	);
};

const StyledFormikTextField = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	label {
		margin-bottom: 0.7rem;
		text-transform: capitalize;
		color: var(--color-neutral-700);
	}
	input {
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
		input {
			border-color: var(--color-red-700);
		}
		.error-text {
			color: var(--color-red-700);
		}
	}
`;

export default FormikTextField;
