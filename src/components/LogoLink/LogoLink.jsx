import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logoWhite from '../../assets/images/logo-white.svg';
import logoBlack from '../../assets/images/logo-black.svg';

const StyledLogoLink = styled(Link)`
	display: inline-block;
	img {
		width: 15rem;
	}
`;

const LogoLink = ({ $variant = 'primary' }) => {
	return (
		<StyledLogoLink to='/'>
			<img
				src={$variant === 'primary' ? logoBlack : logoWhite}
				alt='Shoppy logo'
			/>
		</StyledLogoLink>
	);
};
export default LogoLink;
