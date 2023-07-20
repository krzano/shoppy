import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledFooterLinksList = styled.ul`
	li {
		margin-bottom: 0.8rem;
	}
	a {
		padding: 0.5rem 0;
		color: var(--color-primary-50);
		text-decoration: none;
		opacity: 0.6;
		&:hover {
			opacity: 1;
		}
	}
`;

const FooterLinksList = ({ links }) => {
	return (
		<StyledFooterLinksList>
			{links.map(({ id, path, label }) => {
				return (
					<li key={id}>
						<Link to={path}>{label}</Link>
					</li>
				);
			})}
		</StyledFooterLinksList>
	);
};
export default FooterLinksList;
