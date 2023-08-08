import { css, styled } from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';
const SelectField = ({
	name,
	labelText,
	value,
	onChange,
	optionsList,
	$variant,
	...restProps
}) => {
	return (
		<StyledSelectField $variant={$variant}>
			<label htmlFor={name}>{labelText || name}</label>
			<div className='select-container'>
				<span className='arrow'>
					<IoChevronDown />
				</span>
				<select
					name={name}
					id={name}
					value={value}
					onChange={onChange}
					{...restProps}>
					{optionsList.map(({ id, value, label }) => {
						return (
							<option key={id} value={value}>
								{label}
							</option>
						);
					})}
				</select>
			</div>
		</StyledSelectField>
	);
};

const StyledSelectField = styled.div`
	display: grid;
	label {
		padding-left: 1rem;
		font-size: 1.4rem;
		font-weight: bold;
		text-transform: capitalize;
	}
	select {
		padding: 0.5em 1em;
		border-radius: var(--border-radius-pill);
		background-color: var(--color-neutral-100);
		outline-color: var(--color-primary-700);
		border: 1px solid transparent;
		${({ $variant }) =>
			$variant === 'sort' &&
			css`
				background-color: var(--color-neutral-0);
				border-color: var(--color-neutral-700);
			`}
	}
	.select-container {
		position: relative;
		display: grid;
	}
	select {
		appearance: none;
		text-transform: capitalize;
	}
	.arrow {
		position: absolute;
		top: 50%;
		right: 2rem;
		translate: 0 -50%;
		font-size: 1.8rem;
		line-height: 1;
	}
`;

export default SelectField;
