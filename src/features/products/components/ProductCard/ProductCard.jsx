import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/helpers';
import RatingStars from '../RatingStars/RatingStars';
import Button from '../../../../components/Button/Button';
import { HiSearch } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../cart/cartSlice';

const ProductCard = ({
	product_id,
	name,
	company,
	image,
	specs,
	price,
	rating,
	reviews,
	color,
}) => {
	const dispatch = useDispatch();

	return (
		<StyledProductCard>
			<div className='image-container'>
				<div className='details'>
					<Link to={product_id}>
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
				{` ${specs || color}`}
			</p>
			<RatingStars rating={rating} reviews={reviews} />
			<div className='button-container'>
				<Button
					className='button'
					$variant='secondary'
					$size='small'
					onClick={() => {
						dispatch(addToCart({}));
					}}>
					Add to Cart
				</Button>
				<Button as={Link} to={product_id} $size='small'>
					Details
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
		border-right: 1px solid var(--color-neutral-300);
		color: var(--color-neutral-500);
	}
	.button-container {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
`;

export default ProductCard;
