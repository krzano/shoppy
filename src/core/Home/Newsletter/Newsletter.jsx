import { Form } from 'formik';
import styled from 'styled-components';

const Newsletter = () => {
	return (
		<StyledNewsletter>
			<StyledFormikForm></StyledFormikForm>
		</StyledNewsletter>
	);
};

const StyledNewsletter = styled.div`
	background-color: pink;
`;

const StyledFormikForm = styled(Form)``;

export default Newsletter;

export const StyledNewsletterBackground = styled.div`
	background-color: var(--color-primary-100);
	box-shadow: inset 0px 20px 50px -20px rgb(0, 0, 0, 0.1);
`;
