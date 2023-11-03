import { css, styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
StyledContentWrapper;

const Section = ({ id, title, children, $textColorVariant = 'dark' }) => {
	return (
		<StyledSection id={id} $textColorVariant={$textColorVariant}>
			<StyledContentWrapper>
				{title && <StyledTitle>{title}</StyledTitle>}
				{children}
			</StyledContentWrapper>
		</StyledSection>
	);
};

const StyledTitle = styled.h2`
	margin-bottom: 1.6em;
	@media (min-width: 576px) {
		font-size: 3rem;
	}
`;

const StyledSection = styled.section`
	padding: 6rem 2rem 6rem;
	overflow-x: hidden;
	color: var(--color-neutral-700);
	${({ $textColorVariant }) => {
		if ($textColorVariant === 'light') {
			return css`
				color: var(--color-neutral-100);
			`;
		}
		if ($textColorVariant === 'dark') {
			return css`
				color: var(--color-neutral-700);
			`;
		}
	}}
	@media (min-width: 576px) {
		padding: 6rem 4rem 8rem;
	}
`;

export default Section;
