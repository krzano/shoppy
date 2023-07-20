import { styled } from 'styled-components';
const StyledFooter = styled.footer`
	background-color: var(--color-primary-950);
	color: var(--color-neutral-50);
	/* border-top-left-radius: 10% 30px; */
	/* border-top-right-radius: 10% 30px; */
	box-shadow: inset 0px 20px 50px -20px rgb(0, 0, 0, 0.5);
	padding: 6rem 2rem 2rem;
	.grid-layout {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 3rem;
		margin-top: 4rem;
	}
	@media (min-width: 576px) {
		padding: 8rem 4rem 3rem;
	}
	@media (min-width: 992px) {
		.grid-layout {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 1200px) {
		.grid-layout {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;
export default StyledFooter;
