import NavLinks from '../NavLinks/NavLinks';
import UserButtons from '../UserButtons/UserButtons';
import MobileNavLinksMenu from '../MobileNavLinksMenu/MobileNavLinksMenu';
import { useState } from 'react';
import useClickOutside from '../../../../hooks/useClickOutside';
import StyledNavbar from './StyledNavbar';
import DesktopNavLinksMenu from '../DesktopNavLinksMenu/DesktopNavLinksMenu';
import BurgerButton from '../BurgerButton/BurgerButton';
import StyledContentWrapper from '../../../../styles/StyledContentWrapper/StyledContentWrapper';
import LogoLink from '../../../../components/LogoLink/LogoLink';

const Navbar = ({ navLinksList, dropdownItemsList }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const burgerBtnRef = useClickOutside(() => setIsMobileMenuOpen(false));
	const menuOpenHandler = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	return (
		<StyledNavbar>
			<StyledContentWrapper className='content'>
				<div className='nav-header'>
					<LogoLink />
				</div>
				<DesktopNavLinksMenu>
					<NavLinks navLinksList={navLinksList} />
				</DesktopNavLinksMenu>
				<UserButtons dropdownItemsList={dropdownItemsList} />
				<BurgerButton
					onClick={menuOpenHandler}
					ref={burgerBtnRef}
					isActive={isMobileMenuOpen}
				/>
			</StyledContentWrapper>
			<MobileNavLinksMenu isMobileMenuOpen={isMobileMenuOpen}>
				<NavLinks navLinksList={navLinksList} />
			</MobileNavLinksMenu>
		</StyledNavbar>
	);
};
export default Navbar;
