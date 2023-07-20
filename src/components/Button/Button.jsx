import { css, styled } from 'styled-components';

const StyledButton = styled.button`
	background-color: ${({ variant }) =>
		variant === 'primary' ? 'red' : 'green'};
`;

const Button = ({ variant = 'primary', children }) => {
	return <StyledButton variant={variant}>{children}</StyledButton>;
};
export default Button;
