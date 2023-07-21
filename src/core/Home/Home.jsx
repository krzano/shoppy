import { styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
const StyledHeader = styled.header`
	display: grid;
	padding: 6rem 4rem;
	background-color: var(--color-neutral-0);
	background-image: linear-gradient(
		180deg,
		var(--color-neutral-50) 0%,
		var(--color-neutral-100) 100%
	);
	h1 {
		margin-bottom: 2rem;
		line-height: 1.3;
		text-transform: capitalize;
		color: var(--color-primary-900);
	}
	p {
		color: var(--color-neutral-500);
		margin-bottom: 3rem;
	}
	@media (min-width: 576px) {
		padding: 8rem 4rem;
		${StyledContentWrapper} {
			max-width: 600px;
		}
		h1 {
			font-size: 5rem;
		}
		p {
			font-size: 2rem;
		}
	}
`;

const Home = () => {
	return (
		<>
			<StyledHeader>
				<StyledContentWrapper>
					<h1>
						{/* Where Technology <br /> Meets Your Needs. */}
						The Ultimate Store <br /> for Tech Lovers.
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						asperiores error quibusdam.
					</p>
					<Button as={Link} to='about'>
						Learn More
					</Button>
				</StyledContentWrapper>
			</StyledHeader>
		</>
	);
};
export default Home;
