import { styled } from 'styled-components';

const StyledMobileNavLinksMenu = styled.div`
	position: absolute;
	top: var(--height-navbar);
	display: block;
	translate: 0 -110%;
	width: 100%;
	background-color: var(--color-neutral-50);
	box-shadow: var(--shadow-md);
	overflow: hidden;
	border-bottom-left-radius: var(--border-radius-lg);
	border-bottom-right-radius: var(--border-radius-lg);
	border-bottom: 1px solid var(--color-neutral-300);
	transition: translate 0.4s;
	z-index: -1;
	&.active {
		translate: 0;
	}
	@media (min-width: 992px) {
		display: none;
	}
`;

const MobileNavLinksMenu = ({ isMobileMenuOpen, children }) => {
	return (
		<StyledMobileNavLinksMenu
			className={`mobile-menu ${isMobileMenuOpen && 'active'}`}>
			{children}
		</StyledMobileNavLinksMenu>
	);
};
export default MobileNavLinksMenu;
