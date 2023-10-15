import { css, styled, keyframes } from 'styled-components';

const Button = ({
	as,
	to,
	$variant = 'primary',
	$size = 'medium',
	children,
	isLoading,
	...rest
}) => {
	return (
		<StyledButton as={as} to={to} $variant={$variant} $size={$size} {...rest}>
			{isLoading && <ButtonLoadingSpinner />} {children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	padding: 0.7em 2em;
	font-weight: 500;
	color: var(--color-neutral-0);
	background-color: var(--color-primary-900);
	border-radius: var(--border-radius-pill);
	border: 1px solid var(--color-primary-900);
	cursor: pointer;
	text-decoration: none;
	overflow: hidden;
	svg {
		font-size: 1.5em;
	}
	${({ $size }) => {
		if ($size === 'small') {
			return css`
				font-size: 1.2rem;
			`;
		}
		if ($size === 'medium') {
			return css`
				font-size: 1.6rem;
			`;
		}
		if ($size === 'big') {
			return css`
				font-size: 2rem;
			`;
		}
		if ($size === 'auto') {
			return css`
				font-size: 1em;
			`;
		}
	}}
	${({ $variant }) => {
		if ($variant === 'primary') {
			return css`
				color: var(--color-neutral-0);
				background-color: var(--color-primary-900);
				transition: background-color 0.3s;
				&:hover:not(:disabled) {
					background-color: var(--color-primary-700);
				}
			`;
		}
		if ($variant === 'secondary') {
			return css`
				color: var(--color-primary-900);
				background-color: var(--color-neutral-0);
				transition: background-color 0.3s;
				&:hover:not(:disabled) {
					background-color: var(--color-primary-100);
				}
			`;
		}
		if ($variant === 'danger') {
			return css`
				color: var(--color-red-700);
				border-color: var(--color-red-700);
				background-color: var(--color-neutral-0);
				transition: background-color 0.3s;
				&:hover:not(:disabled) {
					background-color: var(--color-red-100);
				}
			`;
		}
		if ($variant === 'text') {
			return css`
				font-size: 1em;
				border: none;
				background: none;
				padding: 0 0.7rem;
				color: var(--color-primary-700);
				&:hover:not(:disabled) {
					color: var(--color-primary-500);
					text-decoration: underline;
				}
			`;
		}
	}}
	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

// TO ASK TO CHECK: if I should create a new component file for the ButtonLoadingSpinner
export const ButtonLoadingSpinner = () => {
	return (
		<StyledButtonLoadingSpinner>
			<div className='spinner'></div>
		</StyledButtonLoadingSpinner>
	);
};

const rotate = keyframes`
  0%{
    rotate: 0deg;
    opacity:1;
  }
  50%{
    opacity:0.8;
  }
  100%{
    rotate: 360deg;
    opacity:1;
  }
`;

const showSpinner = keyframes`
	0%{
		opacity:0
		} 
	100%{
		opacity:1
		}
`;

const StyledButtonLoadingSpinner = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(1px);
	animation: ${showSpinner} 0.6s linear forwards;
	.spinner {
		width: 1.5em;
		height: 1.5em;
		border: 5px solid var(--color-primary-900);
		border-top: 5px solid transparent;
		border-radius: 50%;
		animation: ${rotate} 1s cubic-bezier(0.68, 0.42, 0.34, 0.94) infinite;
	}
`;

export default Button;
