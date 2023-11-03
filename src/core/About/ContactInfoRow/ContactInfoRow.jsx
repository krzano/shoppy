import styled from 'styled-components';

const ContactInfoRow = ({ icon, children }) => {
	return (
		<StyledContactInfoRow>
			{icon && <div className='icon'>{icon}</div>}
			<div className='info'>{children}</div>
		</StyledContactInfoRow>
	);
};

const StyledContactInfoRow = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem 2rem 1rem 1rem;
	border-left: 2px solid var(--color-primary-800);
	background-color: rgba(255, 255, 255, 0.5);
	border-top-right-radius: var(--border-radius-lg);
	border-bottom-right-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-sm);
	.icon {
		font-size: 3rem;
		color: var(--color-primary-800);
		display: grid;
		place-content: center;
	}
	.info {
		font-weight: 500;
		color: var(--color-primary-900);
	}
`;

export default ContactInfoRow;
