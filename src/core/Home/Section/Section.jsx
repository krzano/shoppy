import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';

const StyledSection = styled.section`
	padding: 6rem 2rem;
	h2 {
		margin-bottom: 1em;
		color: var(--color-neutral-700);
	}
	@media (min-width: 576px) {
		padding: 6rem 4rem;
		h2 {
			font-size: 3rem;
		}
	}
`;

const Section = ({ title, children }) => {
	return (
		<StyledSection>
			<StyledContentWrapper>
				<h2>{title}</h2>
				{children}
			</StyledContentWrapper>
		</StyledSection>
	);
};
export default Section;
