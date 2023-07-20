import { styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
import Button from '../../components/Button/Button';
const StyledHeader = styled.header`
	padding: 6rem 4rem;
	background-color: var(--color-neutral-0);
	background-image: linear-gradient(
		180deg,
		var(--color-neutral-50) 0%,
		var(--color-neutral-100) 100%
	);
	h1 {
		color: var(--color-primary-900);
		text-transform: capitalize;
		margin-bottom: 2rem;
	}
`;

const Home = () => {
	return (
		<>
			<StyledHeader>
				<h1>Home</h1>
			</StyledHeader>
		</>
	);
};
export default Home;
