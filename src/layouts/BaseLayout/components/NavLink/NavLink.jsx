import { styled } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const StyledNavLink = styled(RouterNavLink)`
	/* border-radius: 0;
	transition: var(--transition); */
	display: block;
	padding: 2rem 0;
	text-decoration: none;
	color: var(--color-neutral-500);
	transition: var(--transition);

	&:hover,
	&.active {
		color: var(--color-primary-950);
		background-color: var(--color-neutral-100);
	}
	@media (min-width: 992px) {
		padding: 0.6em 1em;
		border-radius: 10rem;
	}
`;

const NavLink = ({ path, label }) => {
	return <StyledNavLink to={path}>{label}</StyledNavLink>;
};
export default NavLink;
