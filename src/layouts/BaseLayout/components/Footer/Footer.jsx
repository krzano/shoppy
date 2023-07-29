import StyledContentWrapper from '../../../../styles/StyledContentWrapper/StyledContentWrapper';
import SubFooter from '../SubFooter/SubFooter';
import FooterColumn from '../FooterColumn/FooterColumn';
import FooterLinksGroup from '../FooterLinksGroup/FooterLinksGroup';
import LogoLink from '../../../../components/LogoLink/LogoLink';
import SocialLinksList from '../SocialLinksList/SocialLinksList';
import StyledFooter from './StyledFooter';

const Footer = ({ footerLinksList, socialLinksList }) => {
	return (
		<StyledFooter>
			<StyledContentWrapper>
				<LogoLink $variant='secondary' />
				<div className='grid-layout'>
					{footerLinksList.map(({ id, title, links }) => {
						return (
							<FooterColumn key={id}>
								<FooterLinksGroup title={title} links={links} />
							</FooterColumn>
						);
					})}
					<FooterColumn>
						<SocialLinksList socialLinksList={socialLinksList} />
					</FooterColumn>
				</div>
			</StyledContentWrapper>
			<SubFooter />
		</StyledFooter>
	);
};

export default Footer;
