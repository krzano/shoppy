import { styled } from 'styled-components';

const StyledFormRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

const FormRow = ({
	name,
	type,
	value,
	onChange,
	onBlur,
	isTouched,
	isError,
	labelText,
}) => {
	return (
		<StyledFormRow className={isTouched && isError && 'error'}>
			<label htmlFor={name}>{labelText || name}</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<p className='error'>{isTouched && isError}</p>
		</StyledFormRow>
	);
};
export default FormRow;
