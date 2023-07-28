import { styled } from 'styled-components';
import RatingStars from '../RatingStars/RatingStars';

const ProductHeader = ({
	heading,
	company,
	rating,
	reviews,
	category,
	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis dolorum accusantium.',
}) => {
	return (
		<StyledProductHeader>
			<h1>{heading}</h1>
			<div className='tags'>
				<p className='tag'>{company}</p>
				<p className='tag'>{category}</p>
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
		display: inline-block;
		padding: 0.5rem 2rem;
		font-size: 1.6rem;
		font-weight: 500;
		text-transform: capitalize;
		color: var(--color-primary-900);
		border-radius: var(--border-radius-pill);
		background-color: var(--color-primary-50);
		/* cursor: pointer; */
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
