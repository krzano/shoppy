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

const CartItem = ({ amount, product: { product_id, name, price, image } }) => {
	const dispatch = useDispatch();
	return (
		<StyledCartItem>
			<img src={image} alt={name} />
			<div className='product-info'>
				<p>{name}</p>
				<p>{formatPrice(price)}</p>
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
					$variant='danger'
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
	align-items: center;
	gap: 1rem;
	img {
		text-align: center;
		height: 100px;
		width: 100px;
		object-fit: contain;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1.2rem;
	}
`;

export default CartItem;
