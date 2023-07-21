import { styled } from 'styled-components';

const StyledCardsContainer = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;
const CardsContainer = ({ children }) => {
	return <StyledCardsContainer>{children}</StyledCardsContainer>;
};



export default CardsContainer;
