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
			<StyledAboutPageBackground>
				<Section title='Our story'>
					<StyledOurStory>
						<p>
							We started as a small shop in Chicago in 2012. Lorem ipsum dolor
							sit amet consectetur, adipisicing elit. Modi perspiciatis beatae
							asperiores neque et sint eos nemo molestias repellat a accusamus,
							eaque nulla nam. Vero veritatis tenetur adipisci molestiae sint.
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<img
							src={ourstoryImgSmall}
							alt='2 women walking together in our warehouse'
						/>
					</StyledOurStory>
				</Section>
				<Section title='Frequently asked questions'>
					<FrequentlyAskedQuestions faqList={faqList} />
				</Section>
				<Section title='Contact us'>
					<ContactUs contactInfo={contactInfo} />
				</Section>
			</StyledAboutPageBackground>
		</>
	);
};

const StyledOurStory = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	p {
		width: 100%;
		max-width: 50rem;
		font-size: 1.8rem;
		padding: 2rem;
	}
	img {
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--color-primary-600);
		box-shadow: var(--shadow-md);
	}
`;

const StyledAboutPageBackground = styled.div`
	background-color: #ede9fe;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23EDE9FE'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f6f4ff'/%3E%3Cstop offset='1' stop-color='%23EDE9FE'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(2000 0)'%3E%3Cg %3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
`;

export default About;
