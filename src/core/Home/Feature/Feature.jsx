import styled from 'styled-components';

const Feature = ({ icon, text }) => {
	return (
		<StyledFeature>
			{icon}
			<p>{text}</p>
		</StyledFeature>
	);
};

const StyledFeature = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 3rem 2rem 3rem;
	min-height: 20rem;
	width: 100%;
	max-width: 33rem;
	text-align: center;
	border: 1px solid transparent;
	border-bottom: 4px solid var(--color-neutral-200);
	transition: border-color 0.6s, border-radius 0.6s;
	&:hover {
		border-color: var(--color-primary-200);
		border-radius: var(--border-radius-lg);
	}
	svg {
		font-size: 5rem;
		color: var(--color-neutral-700);
	}
	p {
		display: grid;
		place-content: center;
		flex-grow: 1;
		font-size: 1.6rem;
	}
	@media (min-width: 576px) {
		svg {
			font-size: 5.4rem;
		}
		p {
			font-size: 1.8rem;
		}
	}
`;

export default Feature;
