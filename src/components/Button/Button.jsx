import { css, styled } from 'styled-components';

const variantPrimaryStyles = css`
	color: var(--color-neutral-0);
	background-color: var(--color-primary-900);
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--color-primary-700);
	}
`;
const variantSecondaryStyles = css`
	color: var(--color-primary-900);
	background-color: var(--color-neutral-0);
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--color-primary-100);
	}
`;
const sizeSmallStyles = css`
	font-size: 1.2rem;
`;
const sizeMediumStyles = css`
	font-size: 1.6rem;
`;
const sizeBigStyles = css`
	font-size: 2rem;
`;

const StyledButton = styled.button`
	display: inline-block;
	padding: 0.7em 2em;
	font-weight: 500;
	border-radius: var(--border-radius-pill);
	border: 1px solid var(--color-primary-900);
	cursor: pointer;
	text-decoration: none;
	${({ variant }) => variant === 'primary' && variantPrimaryStyles}
	${({ variant }) => variant === 'secondary' && variantSecondaryStyles}
	${({ size }) => size === 'small' && sizeSmallStyles}
	${({ size }) => size === 'medium' && sizeMediumStyles}
	${({ size }) => size === 'big' && sizeBigStyles}
`;

const Button = ({ as, to, variant = 'primary', size = 'medium', children }) => {
	return (
		<StyledButton as={as} to={to} variant={variant} size={size}>
			{children}
		</StyledButton>
	);
};
export default Button;
