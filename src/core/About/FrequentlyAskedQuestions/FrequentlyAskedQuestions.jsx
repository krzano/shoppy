import styled from 'styled-components';
import faqImg from '../../../assets/images/faq.svg';
import Accordion from '../../../components/Accordion/Accordion';

const FrequentlyAskedQuestions = ({ faqList }) => {
	return (
		<StyledFrequentlyAskedQuestions>
			<Accordion accordionList={faqList} />
			<img src={faqImg} alt='FAQ' />
		</StyledFrequentlyAskedQuestions>
	);
};

const StyledFrequentlyAskedQuestions = styled.div`
	img {
		display: none;
	}
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 2fr 1fr;
		justify-content: center;
		align-items: start;
		gap: 3rem;
		img {
			display: block;
			object-fit: cover;
		}
	}
`;

export default FrequentlyAskedQuestions;
