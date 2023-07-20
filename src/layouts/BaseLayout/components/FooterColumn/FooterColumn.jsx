import { styled } from 'styled-components';

const StyledFooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2rem;
`;

const FooterColumn = ({ children }) => {
	return <StyledFooterColumn>{children}</StyledFooterColumn>;
};
export default FooterColumn;
