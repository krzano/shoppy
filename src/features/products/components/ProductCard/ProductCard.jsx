import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/helpers';
import RatingStars from '../RatingStars/RatingStars';
import Button from '../../../../components/Button/Button';
import { HiSearch } from 'react-icons/hi';
const ProductCard = ({
	id,
	sku,
	name,
	company,
	image,
	short_description,
	price,
	rating,
	reviews,
	color,
}) => {
	return (
		<StyledProductCard>
			<div className='image-container'>
				<div className='details'>
					<Link to={sku}>
						<HiSearch />
					</Link>
				</div>
				<img src={image} alt={name} />
			</div>
			<header>
				<p>{name}</p>
				<p>{formatPrice(price)}</p>
			</header>
			<p className='info'>
				<span className='company'>{company}</span>
				{` ${short_description || color}`}
			</p>
			<RatingStars rating={rating} reviews={reviews} />
			<div className='button-container'>
				<Button className='button' $variant='secondary' $size='small'>
					Add to Cart
				</Button>
				<Button as={Link} to={sku} $variant='text'>
					More info
				</Button>
			</div>
		</StyledProductCard>
	);
};

const StyledProductCard = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;
	padding: 2.2rem;
	background-color: var(--color-neutral-0);
	border-radius: var(--border-radius-lg);
	border: 1px solid var(--color-primary-100);
	.button-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.image-container {
		position: relative;
		display: grid;
		place-items: center;
		margin-bottom: 1rem;
		box-shadow: var(--shadow-md);
		border-radius: var(--border-radius-lg);
		overflow: hidden;
	}
	.details {
		position: absolute;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		background-color: #ece4ff3b;
		backdrop-filter: blur(5px);
		opacity: 0;
		transition: opacity 0.7s;
		&:hover {
			opacity: 1;
		}
		a {
			/* position: absolute; */
			/* top: 2rem; */
			/* right: 2rem; */
			display: grid;
			place-items: center;
			width: 4rem;
			height: 4rem;
			font-size: 2.2rem;
			color: var(--color-primary-900);
			border: 1px solid var(--color-primary-900);
			background-color: var(--color-neutral-0);
			border-radius: 50%;
			box-shadow: var(--shadow-lg);
		}
	}
	img {
		height: 200px;
		object-fit: contain;
	}
	header {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
		/* font-weight: 500; */
		font-weight: bold;
		font-size: 2rem;
	}
	.info {
		font-weight: 500;
		color: var(--color-neutral-500);
		text-transform: capitalize;
	}
	.company {
		margin-right: 0.5rem;
		padding-right: 1rem;
		/* font-weight: bold; */
		border-right: 1px solid var(--color-neutral-300);
		color: var(--color-neutral-500);
		/* color: var(--color-primary-500); */
	}
`;

export default ProductCard;
