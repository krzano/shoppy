import { styled } from 'styled-components';

const StyledDesktopNavLinksMenu = styled.div`
	display: none;
	@media (min-width: 992px) {
		display: block;
	}
`;

const DesktopNavLinksMenu = ({ children }) => {
	return <StyledDesktopNavLinksMenu>{children}</StyledDesktopNavLinksMenu>;
};
export default DesktopNavLinksMenu;
