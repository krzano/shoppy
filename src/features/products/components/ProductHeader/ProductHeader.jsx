import { styled } from 'styled-components';
import RatingStars from '../RatingStars/RatingStars';
import { Link } from 'react-router-dom';

const ProductHeader = ({
	heading,
	company,
	rating,
	reviews,
	category,
	description,
}) => {
	return (
		<StyledProductHeader>
			<h1>{heading}</h1>
			<div className='tags'>
				<Link to={`/products?company=${company}`} className='tag'>
					{company}
				</Link>
				<Link to={`/products?category=${category}`} className='tag'>
					{category}
				</Link>
			</div>
			<p className='description'>{description}</p>
			<RatingStars rating={rating} reviews={reviews} />
		</StyledProductHeader>
	);
};

const StyledProductHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	h1 {
		font-size: 2.6rem;
		font-weight: 500;
		line-height: 1.3;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.tag {
		/* display: inline-block; */
		padding: 0.5rem 2rem;
		font-size: 1.6rem;
		font-weight: 500;
		text-transform: capitalize;
		color: var(--color-primary-900);
		border-radius: var(--border-radius-pill);
		background-color: var(--color-primary-50);
		cursor: pointer;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	.description {
		margin-top: 0.5em;
		font-size: 1.4rem;
		color: var(--color-neutral-600);
	}
	@media (min-width: 576px) {
		h1 {
			font-size: 3.2rem;
		}
	}
`;

export default ProductHeader;
