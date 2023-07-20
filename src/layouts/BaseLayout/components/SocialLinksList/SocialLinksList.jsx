import { styled } from 'styled-components';
import SocialLink from '../SocialLink/SocialLink';

const StyledSocialLinksList = styled.ul`
	li {
		margin-bottom: 2rem;
	}
`;

const SocialLinksList = ({ socialLinksList }) => {
	return (
		<StyledSocialLinksList>
			{socialLinksList.map(({ id, url, icon, label }) => {
				return (
					<li key={id}>
						<SocialLink url={url} icon={icon} label={label} />
					</li>
				);
			})}
		</StyledSocialLinksList>
	);
};
export default SocialLinksList;
