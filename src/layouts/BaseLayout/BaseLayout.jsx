import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { styled } from 'styled-components';
// import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
const StyledMain = styled.main`
	display: block;
	/* margin-top: var(--height-navbar); */
	min-height: 80vh;
`;

const BaseLayout = ({
	navLinksList,
	footerLinksList,
	socialLinksList,
	dropdownItemsList,
}) => {
	return (
		<>
			<header>
				<Navbar
					navLinksList={navLinksList}
					dropdownItemsList={dropdownItemsList}
				/>
			</header>
			<StyledMain>
				<Outlet />
			</StyledMain>
			<Footer
				footerLinksList={footerLinksList}
				socialLinksList={socialLinksList}
			/>
			{/* <ScrollToTop /> */}
		</>
	);
};

export default BaseLayout;
