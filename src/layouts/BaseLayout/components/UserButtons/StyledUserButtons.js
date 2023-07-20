import { styled } from 'styled-components';

const StyledUserButtons = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	/* gap: 1rem; */
	padding: 0 1rem;
	height: 5rem;
	border-radius: var(--border-radius-pill);
	border: 1px solid var(--color-neutral-300);
	background-color: var(--color-neutral-0);
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: var(--shadow-md);
	}
	.btn-container {
		position: relative;
		&:hover {
			.cart-items-number {
				opacity: 1;
			}
		}
	}
	.cart-items-number {
		position: absolute;
		right: -0.4rem;
		top: 0.1rem;
		display: grid;
		place-items: center;
		height: 2rem;
		width: 2rem;
		border-radius: 50%;
		background-color: var(--color-primary-600);
		color: var(--color-neutral-0);
		font-size: 1.2rem;
		font-family: sans-serif;
		font-weight: bold;
		pointer-events: none;
		opacity: 0.8;
		transition: opacity 0.3s;
	}
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--color-neutral-600);
		border: transparent;
		background-color: transparent;
		cursor: pointer;
		transition: var(--transition);
		&:hover {
			color: var(--color-neutral-950);
		}
	}
	.btn-icon {
		font-size: 2.5rem;
	}
	.btn-text {
		display: none;
	}
	.bar {
		display: none;
		height: 100%;
		width: 1px;
		background-color: var(--color-neutral-300);
	}
	.account-dropdown {
		/* properties for toggle animation */
		opacity: 0;
		scale: 0.2;
		transform-origin: top;
		transition: opacity 0.1s, scale 0.3s;
		/* end of properties for toggle animation */
		position: absolute;
		top: 5.5rem;
		right: 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 12rem;
		background-color: var(--color-neutral-100);
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--color-neutral-300);
		background-color: var(--color-neutral-0);
		box-shadow: var(--shadow-md);
		font-size: 1.4rem;
		overflow: hidden;
		.btn-icon {
			font-size: 2rem;
			margin-right: 0.5rem;
			pointer-events: none;
		}
		.btn {
			justify-content: center;
			justify-content: flex-start;
			width: 100%;
		}
		.btn:hover {
			background-color: var(--color-primary-50);
		}
	}
	.show-dropdown {
		opacity: 1;
		translate: 0;
		scale: 1;
	}

	@media (min-width: 420px) {
		gap: 0.5rem;
		.bar {
			display: block;
		}
		.btn {
			padding: 1rem;
		}
		.cart-items-number {
			translate: -0.2rem;
		}
	}
	@media (min-width: 768px) {
		.btn-text {
			display: block;
		}
	}
`;

export default StyledUserButtons;
