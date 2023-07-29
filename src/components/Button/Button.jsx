import { css, styled } from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	padding: 0.7em 2em;
	font-weight: 500;
	color: var(--color-neutral-0);
	background-color: var(--color-primary-900);
	border-radius: var(--border-radius-pill);
	border: 1px solid var(--color-primary-900);
	cursor: pointer;
	text-decoration: none;
	${({ $size }) => {
		if ($size === 'small') {
			return css`
				font-$size: 1.2rem;
			`;
		}
		if ($size === 'medium') {
			return css`
				font-$size: 1.6rem;
			`;
		}
		if ($size === 'big') {
			return css`
				font-$size: 2rem;
			`;
		}
	}}
	${({ $variant }) => {
		if ($variant === 'primary') {
			return css`
				color: var(--color-neutral-0);
				background-color: var(--color-primary-900);
				transition: background-color 0.3s;
				&:hover {
					background-color: var(--color-primary-700);
				}
			`;
		}
		if ($variant === 'secondary') {
			return css`
				color: var(--color-primary-900);
				background-color: var(--color-neutral-0);
				transition: background-color 0.3s;
				&:hover {
					background-color: var(--color-primary-100);
				}
			`;
		}
		if ($variant === 'text') {
			return css`
				font-$size: 1em;
				border: none;
				background: none;
				padding: 0 0.7rem;
				color: var(--color-primary-700);
				&:hover {
					color: var(--color-primary-500);
					text-decoration: underline;
				}
			`;
		}
	}}
`;

const Button = ({
	as,
	to,
	$variant = 'primary',
	$size = 'medium',
	children,
	...rest
}) => {
	return (
		<StyledButton as={as} to={to} $variant={$variant} $size={$size} {...rest}>
			{children}
		</StyledButton>
	);
};
export default Button;
