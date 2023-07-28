import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import { styled } from 'styled-components';

const RatingStars = ({ rating, reviews }) => {
	const stars = Array.from({ length: 5 }, (item, index) => {
		if (rating >= index + 1)
			return (
				<span>
					<BsStarFill />
				</span>
			);
		if (rating >= index + 0.5)
			return (
				<span>
					<BsStarHalf />
				</span>
			);
		return (
			<span>
				<BsStar />
			</span>
		);
	});

	return (
		<StyledRatingStars>
			<div className='stars' title={`Rating: ${rating}/5`}>
				{stars}
			</div>
			{reviews && <p>({reviews} reviews)</p>}
		</StyledRatingStars>
	);
};

const StyledRatingStars = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
	padding: 1rem 0;
	p {
		font-size: 1.4rem;
		color: var(--color-neutral-500);
	}
	.stars {
		color: var(--color-primary-500);
	}
`;

export default RatingStars;
