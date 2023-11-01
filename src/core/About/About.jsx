import Section from '../../components/Section/Section';
import ourstoryImgSmall from '../../assets/images/about-ourstory-small.jpg';
import ourstoryImgBig from '../../assets/images/about-ourstory-big.jpg';
import styled from 'styled-components';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import ContactUs from './ContactUs/ContactUs';

const faqList = [
	{
		id: 0,
		title: 'How can I return the order?',
		content:
			'Vexillologist offal ethical, locavore chicharrones keffiyeh venmo viral gentrify bushwick. Neutra gorpcore activated charcoal sus shabby chic, gentrify taxidermy brunch forage lo-fi mumblecore four dollar toast.',
	},
	{
		id: 1,
		title: 'How quickly will I receive my order?',
		content:
			'Drinking vinegar poke seitan freegan air plant meh mustache, venmo lomo everyday carry succulents tofu green juice salvia vexillologist.',
	},
	{
		id: 2,
		title: 'Where I can find the invoice?',
		content:
			'Yuccie gentrify umami poutine freegan meggings small batch chia artisan humblebrag try-hard crucifix.',
	},
	{
		id: 3,
		title: 'What should I do to cancel my order?',
		content:
			'Adaptogen cillum kogi hexagon, health goth dreamcatcher letterpress poke officia. Cred microdosing beard tumblr commodo food truck aliquip cardigan. Praxis big mood squid locavore adipisicing etsy.',
	},
];

const contactInfo = [
	{
		id: 0,
		region: 'North America',
		phoneNumber: '+1 630 231-0843',
		email: 'contact@shoppy.com',
		address: {
			street: '337 Parkside Ave',
			city: 'Chicago',
			postalCode: 'IL 60185',
			country: 'USA',
		},
	},
	{
		id: 1,
		region: 'Europe',
		phoneNumber: '+48 22 11-41-337',
		email: 'contact@shoppy.pl',
		address: {
			street: 'plac Europejski 1',
			city: 'Warsaw',
			postalCode: '00-844',
			country: 'Poland',
		},
	},
];

const About = () => {
	return (
		<>
			<Section title='Our story'>
				<p>
					We started as a small shop in Chicago in 2012. Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Modi perspiciatis beatae
					asperiores neque et sint eos nemo molestias repellat a accusamus,
					eaque nulla nam. Vero veritatis tenetur adipisci molestiae sint. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa sed
					voluptatibus iure odit sit, consequatur ut voluptates, aperiam unde,
					corrupti nam molestiae quos quibusdam repellendus sequi ipsum
					necessitatibus at?
				</p>
				<img
					src={ourstoryImgSmall}
					alt='2 women walking together in our warehouse'
				/>
			</Section>
			<Section title='Frequently asked questions'>
				<FrequentlyAskedQuestions faqList={faqList} />
			</Section>
			<StyledContactUsBackground>
				<Section title='Contact us'>
					<ContactUs contactInfo={contactInfo} />
				</Section>
			</StyledContactUsBackground>
		</>
	);
};

const StyledContactUsBackground = styled.div`
	background-color: var(--color-primary-100);
	box-shadow: inset 0px 20px 50px -20px rgb(0, 0, 0, 0.1);
`;

export default About;
