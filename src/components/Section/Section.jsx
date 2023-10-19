import { styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
StyledContentWrapper;

const StyledSection = styled.section`
	padding: 6rem 2rem 6rem;
	overflow-x: hidden;
	.title {
		margin-bottom: 1.6em;
		color: var(--color-neutral-700);
	}
	@media (min-width: 576px) {
		padding: 8rem 4rem 8rem;
		.title {
			font-size: 3rem;
		}
	}
`;

const Section = ({ title, children }) => {
	return (
		<StyledSection>
			<StyledContentWrapper>
				{title && <h2 className='title'>{title}</h2>}
				{children}
			</StyledContentWrapper>
		</StyledSection>
	);
};
export default Section;
