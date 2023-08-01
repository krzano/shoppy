import { styled } from 'styled-components';
import ProductHeader from '../ProductHeader/ProductHeader';
import Divider from '../../../../components/Divider/Divider';
import PriceInfo from '../PriceInfo/PriceInfo';
import ActionButtonsContainer from '../ActionButtonsContainer/ActionButtonsContainer';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';

const ProductInfoContainer = ({
	product_id,
	category,
	color,
	company,
	description,
	name,
	price,
	rating,
	reviews,
	specs,
	stock,
}) => {
	return (
		<StyledProductInfoContainer>
			<ProductHeader
				heading={`${name} ${specs}`}
				description={description}
				rating={rating}
				reviews={reviews}
				company={company}
				category={category}
			/>
			<Divider />
			<PriceInfo price={price} />
			<Divider />
			<div className='details'>
				<p>
					<span>Color: </span>
					{color}
				</p>
				<p>
					<span>Product ID: </span>
					{product_id.toUpperCase()}
				</p>
			</div>
			<ActionButtonsContainer stock={stock} product_id={product_id} />
			<DeliveryInfo />
		</StyledProductInfoContainer>
	);
};

const StyledProductInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 2em;
	.details {
		font-size: 1.4rem;
		span {
			font-weight: bold;
			margin-right: 0.5rem;
			color: var(--color-neutral-700);
		}
		p {
			text-transform: capitalize;
			font-weight: 500;
			color: var(--color-neutral-600);
		}
	}
	@media (min-width: 992px) {
		.details {
			font-size: 1.6rem;
		}
	}
`;

export default ProductInfoContainer;
