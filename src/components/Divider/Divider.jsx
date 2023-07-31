import { styled } from 'styled-components';

const StyledDivider = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	opacity: 0.7;
	.line {
		height: 1px;
		background-color: var(--color-neutral-400);
	}
	.text {
		padding: 0 1rem;
		color: var(--color-neutral-700);
	}
`;

const Divider = ({ children, ...props }) => {
	return (
		<StyledDivider {...props}>
			<div className='line' />
			<span className={children && 'text'}>{children}</span>
			<div className='line' />
		</StyledDivider>
	);
};
export default Divider;
