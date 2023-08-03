import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { FaTrashCan } from 'react-icons/fa6';
import AmountButtons from '../../../../components/AmountButtons/AmountButtons';
import Button from '../../../../components/Button/Button';
import {
	decreaseItemAmount,
	increaseItemAmount,
	removeFromCart,
} from '../../cartSlice';
import { formatPrice } from '../../../../utils/helpers';

const CartItem = ({
	amount,
	product: { product_id, name, price, image, company, color, specs },
}) => {
	const dispatch = useDispatch();
	return (
		<StyledCartItem>
			<img src={image} alt={name} />
			<div className='product-info'>
				<p className='name'>{name}</p>
				<div className='details'>
					<p>
						Company: <span>{company}</span>
					</p>
					{specs && (
						<p>
							Specs: <span>{specs}</span>
						</p>
					)}
					<p>
						Color: <span>{color}</span>
					</p>
				</div>
				<p className='price'>{formatPrice(price * amount)}</p>
				<p className='piece-price'>Price per piece: {formatPrice(price)}</p>
			</div>
			<div className='buttons'>
				<AmountButtons
					amount={amount}
					handleIncrease={() => {
						dispatch(increaseItemAmount(product_id));
					}}
					handleDecrease={() => {
						dispatch(decreaseItemAmount(product_id));
					}}
				/>
				<Button
					$variant='text'
					$size='auto'
					onClick={() => {
						dispatch(removeFromCart(product_id));
					}}>
					<FaTrashCan />
				</Button>
			</div>
		</StyledCartItem>
	);
};

const StyledCartItem = styled.article`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	gap: 1rem;
	padding: 2rem;
	border: 1px solid var(--color-primary-100);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-md);
	img {
		justify-self: center;
		text-align: center;
		height: 10rem;
		object-fit: contain;
	}
	.name,
	.price {
		font-size: 2rem;
		font-weight: bold;
	}
	.name {
		margin-bottom: 0.5rem;
	}
	.details {
		display: flex;
		flex-wrap: wrap;
		column-gap: 2rem;
		margin-bottom: 1.5rem;
		font-size: 1.4rem;
		color: var(--color-neutral-500);
		text-transform: capitalize;
		font-weight: 500;
		span {
			color: var(--color-neutral-700);
		}
	}
	.piece-price {
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--color-neutral-500);
	}
	.buttons {
		display: grid;
		grid-template-columns: clamp(14rem, 70%, 24rem) auto;
		justify-content: space-between;
		gap: 1rem;
		font-size: 1.4rem;
	}
	@media (min-width: 992px) {
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 2rem;
		padding: 3rem 2rem;
		img {
			height: 12rem;
			width: 12rem;
		}
		.buttons {
			justify-self: end;
			grid-template-columns: 1fr auto;
			justify-content: center;
			width: 22rem;
		}
	}
`;

export default CartItem;
