import { styled } from 'styled-components';

const StyledSocialLink = styled.a`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	color: var(--color-primary-50);
	text-decoration: none;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
	svg {
		font-size: 3rem;
	}
	.label {
		display: none;
	}
	@media (min-width: 576px) {
		.label {
			display: inline-block;
		}
	}
`;

const SocialLink = ({ url, icon, label }) => {
	return (
		<StyledSocialLink href={url} target='_blank' referrerPolicy='noreferrer'>
			{icon}
			<span className='label'>{label}</span>
		</StyledSocialLink>
	);
};
export default SocialLink;
