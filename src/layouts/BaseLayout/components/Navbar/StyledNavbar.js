import { styled } from 'styled-components';

const StyledNavbar = styled.nav`
	/* position: fixed; */
	/* top: 0; */
	/* width: 100%; */
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--height-navbar);
	background-color: var(--color-neutral-0);
	border-bottom: 1px solid var(--color-neutral-300);
	/* z-index has to be more than 9999 to display the Navbar over the ToastContainer */
	z-index: 10000;
	.nav-header {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
	}
	.content {
		z-index: 1000;
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: center;
		gap: 1rem;
		padding: 0 2rem;
		height: 100%;
		background-color: var(--color-neutral-0);
	}
	@media (min-width: 992px) {
		.content {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			padding: 0 3rem;
			height: 100%;
		}
	}
`;
export default StyledNavbar;
