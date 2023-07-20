import { forwardRef } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledBurgerButton = styled.button`
	display: grid;
	place-items: center;
	font-size: 3rem;
	width: 5rem;
	height: 5rem;
	border: transparent;
	border-radius: 50%;
	border: 1px solid var(--color-neutral-300);
	color: var(--color-neutral-900);
	background-color: var(--color-neutral-0);
	box-shadow: var(--shadow-sm);
	transition: var(--transition);
	cursor: pointer;
	.icon {
		transition: rotate 0.5s;
	}
	&:hover {
		background-color: var(--color-primary-100);
	}
	&.active {
		background-color: var(--color-primary-100);
		.icon {
			rotate: 90deg;
		}
	}
	@media (min-width: 992px) {
		display: none;
	}
`;

const BurgerButton = forwardRef(({ onClick, isActive }, ref) => {
	return (
		<StyledBurgerButton
			type='button'
			ref={ref}
			className={`burger-btn ${isActive && 'active'}`}
			onClick={onClick}>
			<HiBars3 className='icon' />
		</StyledBurgerButton>
	);
});
export default BurgerButton;
