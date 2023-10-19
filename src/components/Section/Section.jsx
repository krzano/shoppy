import { css, styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
StyledContentWrapper;

const Section = ({ title, children, $textColorVariant = 'dark' }) => {
	return (
		<StyledSection $textColorVariant={$textColorVariant}>
			<StyledContentWrapper>
				{title && <h2 className='title'>{title}</h2>}
				{children}
			</StyledContentWrapper>
		</StyledSection>
	);
};

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
	.title {
		margin-bottom: 1.6em;
	}
	@media (min-width: 576px) {
		padding: 6rem 4rem 8rem;
		.title {
			font-size: 3rem;
		}
	}
`;

export default Section;
