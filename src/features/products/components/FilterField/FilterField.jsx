import { css, styled } from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';
const FilterField = ({
	name,
	labelText,
	value,
	onChange,
	select,
	optionsList,
	input,
	type,
	$variant,
	...restProps
}) => {
	if (select && !optionsList && $variant !== 'sort') {
		console.warn(
			'Please provide optionslist prop if select=true in FilterField component!'
		);
	}
	return (
		<StyledFilterField $variant={$variant}>
			<label htmlFor={name}>{labelText || name}</label>
			{input && (
				<input
					name={name}
					id={name}
					type={type}
					value={value}
					onChange={onChange}
					{...restProps}
				/>
			)}
			{select && (
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
						{optionsList &&
							optionsList.map((option) => {
								return (
									<option key={option} value={option}>
										{option}
									</option>
								);
							})}
						{$variant === 'sort' && (
							<>
								<option value='name-az'>Name (A-Z)</option>
								<option value='name-za'>Name (Z-A)</option>
								<option value='price-lowest'>Price (low to high)</option>
								<option value='price-highest'>Price (high to low)</option>
							</>
						)}
					</select>
				</div>
			)}
		</StyledFilterField>
	);
};

const StyledFilterField = styled.div`
	display: grid;
	label {
		padding-left: 1rem;
		font-size: 1.4rem;
		font-weight: bold;
		text-transform: capitalize;
	}
	input,
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

export default FilterField;
