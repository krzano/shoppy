import { styled } from 'styled-components';
import StyledContentWrapper from '../../styles/StyledContentWrapper/StyledContentWrapper';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Section from './Section/Section';
import CardsContainer from './CardsContainer/CardsContainer';
import CardLink from './CardLink/CardLink';
import categoryLaptopsImg from '../../assets/images/category-laptops.jpg';
import categoryMobilePhonesImg from '../../assets/images/category-mobile-phones.jpg';
import categoryTabletsImg from '../../assets/images/category-tablets.jpg';
import categoryAccesoriesImg from '../../assets/images/category-accesories.jpg';
import SwiperCarousel from './FeaturedProducts/FeaturedProducts';

const featuredCategories = [
	{
		id: 0,
		text: 'laptops',
		path: 'products?category=laptops',
		$backgroundImg: categoryLaptopsImg,
	},
	{
		id: 1,
		text: 'mobile phones',
		path: 'products?category=mobile phones',
		$backgroundImg: categoryMobilePhonesImg,
	},
	{
		id: 2,
		text: 'tablets',
		path: 'products?category=tablets',
		$backgroundImg: categoryTabletsImg,
	},
	{
		id: 3,
		text: 'accessories',
		path: 'products?category=accessories',
		$backgroundImg: categoryAccesoriesImg,
	},
];

const Home = () => {
	return (
		<>
			<StyledHeader>
				<StyledContentWrapper>
					<h1>
						The Ultimate Store <br /> for Tech Lovers.
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						asperiores error quibusdam.
					</p>
					<Button as={Link} to='about'>
						Learn More
					</Button>
				</StyledContentWrapper>
			</StyledHeader>
			<Section title='Our bestsellers'>
				<SwiperCarousel />
			</Section>
			<Section title='Shop our top categories'>
				<CardsContainer>
					{featuredCategories.map(({ id, text, path, $backgroundImg }) => {
						return (
							<CardLink
								key={id}
								to={path}
								text={text}
								$backgroundImg={$backgroundImg}
							/>
						);
					})}
				</CardsContainer>
			</Section>
		</>
	);
};

const StyledHeader = styled.header`
	display: grid;
	padding: 8rem 4rem;
	background-color: var(--color-neutral-0);
	background-image: linear-gradient(
		180deg,
		var(--color-neutral-50) 0%,
		var(--color-neutral-100) 100%
	);
	h1 {
		margin-bottom: 2rem;
		line-height: 1.3;
		text-transform: capitalize;
		color: var(--color-primary-900);
	}
	p {
		color: var(--color-neutral-500);
		margin-bottom: 3rem;
	}
	@media (min-width: 576px) {
		padding: 10rem 4rem;
		${StyledContentWrapper} {
			max-width: 600px;
		}
		h1 {
			font-size: 5rem;
		}
		p {
			font-size: 2rem;
		}
	}
`;

export default Home;
