import { styled } from 'styled-components';

const StyledSubFooter = styled.div`
	text-align: center;
	text-transform: capitalize;
	/* padding: 3rem 1rem 2rem; */
	margin-top: 4rem;
	p {
		font-size: 1.4rem;
		color: var(--color-primary-200);
	}
	@media (min-width: 1200px) {
		margin-top: 6rem;
	}
`;

const SubFooter = () => {
	return (
		<StyledSubFooter>
			<p>
				Copyright &copy; SHOPPY {new Date().getFullYear()}. All rights reserved.
			</p>
		</StyledSubFooter>
	);
};
export default SubFooter;
