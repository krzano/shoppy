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
	padding: 2.6rem 3rem 3rem;
	min-height: 20rem;
	width: 100%;
	max-width: 33rem;
	background-color: var(--color-primary-800);
	box-shadow: var(--shadow-md);
	text-align: center;
	color: var(--color-neutral-0);
	border-radius: var(--border-radius-sm);
	border: 1px solid var(--color-primary-300);
	border-bottom: 3px solid var(--color-primary-50);
	transition: background-color 0.6s;
	svg {
		font-size: 5rem;
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
