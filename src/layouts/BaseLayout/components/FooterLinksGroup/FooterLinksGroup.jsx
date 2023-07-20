import { styled } from 'styled-components';
import FooterLinksList from '../FooterLinksList/FooterLinksList';
const StyledFooterLinksGroup = styled.div`
	.title {
		font-size: 1.8rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}
`;

const FooterLinksGroup = ({ title, links }) => {
	return (
		<StyledFooterLinksGroup>
			<p className='title'>{title}</p>
			<FooterLinksList links={links} />
		</StyledFooterLinksGroup>
	);
};
export default FooterLinksGroup;
