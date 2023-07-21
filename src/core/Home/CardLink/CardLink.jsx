import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledCardLink = styled(Link)`
	padding: 4rem 2rem;
	height: 30rem;
	background-color: rgba(115, 115, 115, 0.67);
	background-image: radial-gradient(circle, #2b273fbd 0%, #38205dbf 100%),
		url(${({ $backgroundImg }) => $backgroundImg});
	background-size: cover;
	background-position: 50% 20%;
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-md);
	color: var(--color-neutral-0);
	font-weight: bold;
	text-decoration: none;
	transition: scale 0.3s, box-shadow 0.3s;
	overflow: hidden;
	p {
		text-transform: capitalize;
		text-align: center;
		font-size: 2.2rem;
	}
	&:hover {
		scale: 1.02;
		box-shadow: var(--shadow-md);
	}
`;

const CardLink = ({ to, text, $backgroundImg }) => {
	return (
		<StyledCardLink to={to} $backgroundImg={$backgroundImg}>
			<p>{text}</p>
		</StyledCardLink>
	);
};

export default CardLink;
