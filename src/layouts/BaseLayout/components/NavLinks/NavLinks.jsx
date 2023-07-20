import NavLink from '../NavLink/NavLink';
import { styled } from 'styled-components';

const StyledNavLinks = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	text-align: center;
	@media (min-width: 992px) {
		flex-direction: row;
		gap: 1rem;
	}
`;

const NavLinksList = ({ navLinksList }) => {
	return (
		<StyledNavLinks className='nav-links'>
			{navLinksList.map(({ id, path, label }) => {
				return (
					<li key={id}>
						<NavLink path={path} label={label} />
					</li>
				);
			})}
		</StyledNavLinks>
	);
};
export default NavLinksList;
