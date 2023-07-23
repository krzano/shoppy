import { styled } from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';
import FormikLoginForm from '../components/FormikLoginForm/FormikLoginForm';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
const StyledLogin = styled.div`
	background-color: var(--color-neutral-50);
	${StyledContentWrapper} {
		max-width: 600px;
	}
`;

const Login = () => {
	return (
		<StyledLogin>
			<StyledContentWrapper>
				{/* <LoginForm /> */}
				<FormikLoginForm />
			</StyledContentWrapper>
		</StyledLogin>
	);
};
export default Login;
