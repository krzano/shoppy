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
					{specs && (
						<p>
							<span>Specs:</span> {specs}
						</p>
					)}
					<p>
						<span>Company:</span> {company}
					</p>
					<p>
						<span>Color:</span> {color}
					</p>
				</div>
				<p className='price'>{formatPrice(price * amount)}</p>
				<p className={`piece-price ${amount === 1 && 'hidden'}`}>
					Price per piece: {formatPrice(price)}
				</p>
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	padding: 2rem;
	border: 1px solid var(--color-neutral-300);
	border-radius: var(--border-radius-lg);

	img {
		text-align: center;
		height: 100px;
		object-fit: contain;
	}
	.hidden {
		visibility: hidden;
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
		margin-bottom: 1.5rem;
		font-size: 1.4rem;
		color: var(--color-neutral-500);
		p {
			text-transform: capitalize;
			font-weight: bold;
		}
		span {
			margin-right: 0.5rem;
			font-weight: 500;
		}
	}
	.piece-price {
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--color-neutral-500);
	}

	.buttons {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		font-size: 1.4rem;
	}
`;

export default CartItem;
