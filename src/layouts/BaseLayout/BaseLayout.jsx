import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { styled } from 'styled-components';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const StyledMain = styled.main`
	display: block;
	/* margin-top: var(--height-navbar); */
	min-height: calc(100vh - var(--height-navbar));
`;

const BaseLayout = ({
	navLinksList,
	footerLinksList,
	socialLinksList,
	dropdownItemsList,
}) => {
	const navigation = useNavigation();
	const pageLoading = navigation.state === 'loading';

	return (
		<>
			<header>
				<Navbar
					navLinksList={navLinksList}
					dropdownItemsList={dropdownItemsList}
				/>
			</header>
			<StyledMain>{pageLoading ? <LoadingSpinner /> : <Outlet />}</StyledMain>
			<Footer
				footerLinksList={footerLinksList}
				socialLinksList={socialLinksList}
			/>
			<ScrollToTop />
		</>
	);
};

export default BaseLayout;
