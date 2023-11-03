import { css, styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Dropdown = ({ showDropdown, dropdownItemsList }) => {
	const location = useLocation();

	return (
		<StyledDropdown
			className={`account-dropdown ${showDropdown && 'show-dropdown'}`}>
			<ul>
				{dropdownItemsList.map((item) => {
					if (!item.visible) return;
					if (item.component === 'link') {
						const { id, label, path, icon } = item;
						return (
							<li key={id}>
								<StyledDropdownLink
									to={path}
									state={path === '/login' && { from: location.pathname }}>
									{icon}
									<span>{label}</span>
								</StyledDropdownLink>
							</li>
						);
					}
					const { id, label, onClick, icon } = item;
					return (
						<li key={id}>
							<StyledDropdownButton onClick={onClick}>
								{icon}
								<span>{label}</span>
							</StyledDropdownButton>
						</li>
					);
				})}
			</ul>
		</StyledDropdown>
	);
};

const StyledDropdown = styled.div`
	/* properties for toggle animation */
	opacity: 0;
	scale: 0.2;
	transform-origin: top;
	transition: opacity 0.1s, scale 0.3s;
	/* end of properties for toggle animation */
	position: absolute;
	top: 5.5rem;
	right: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 12rem;
	background-color: var(--color-neutral-100);
	border-radius: var(--border-radius-lg);
	border: 1px solid var(--color-neutral-300);
	background-color: var(--color-neutral-0);
	box-shadow: var(--shadow-md);
	font-size: 1.4rem;
	overflow: hidden;
	&.show-dropdown {
		opacity: 1;
		translate: 0;
		scale: 1;
	}
	ul {
		width: 100%;
	}
`;

const dropdownListItemStyles = css`
	display: flex;
	justify-content: center;
	justify-content: flex-start;
	width: 100%;
	padding: 1rem;
	gap: 0.5rem;
	color: var(--color-neutral-600);
	background-color: transparent;

	&:hover {
		background-color: var(--color-primary-50);
	}
	svg {
		font-size: 2rem;
		margin-right: 0.5rem;
		pointer-events: none;
	}
`;

const StyledDropdownLink = styled(Link)`
	${dropdownListItemStyles}
	text-decoration: none;
`;

const StyledDropdownButton = styled.button`
	${dropdownListItemStyles}
	border: transparent;
	cursor: pointer;
`;

export default Dropdown;
