import { styled } from 'styled-components';
import ProductHeader from '../ProductHeader/ProductHeader';
import Divider from '../../../../components/Divider/Divider';
import PriceInfo from '../PriceInfo/PriceInfo';
import BuyingButtonsContainer from '../BuyingButtonsContainer/BuyingButtonsContainer';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';

const ProductInfoContainer = ({
	category,
	color,
	company,
	description,
	id,
	name,
	price,
	rating,
	reviews,
	short_description,
	sku,
	stock,
}) => {
	return (
		<StyledProductInfoContainer>
			<ProductHeader
				heading={`${name} ${short_description}`}
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
					{sku.toUpperCase()}
				</p>
			</div>
			<BuyingButtonsContainer stock={stock} sku={sku} />
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
			margin-right: 1rem;
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
