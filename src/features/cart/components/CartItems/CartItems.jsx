import { styled } from 'styled-components';
import CartItem from '../CartItem/CartItem';
import Button from '../../../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../cartSlice';
import Divider from '../../../../components/Divider/Divider';

const CartItems = ({ cartItems, totalAmount }) => {
	const dispatch = useDispatch();
	return (
		<StyledCartItems>
			
			<div className='items-container'>
				{cartItems.map((cartItem) => {
					return <CartItem key={cartItem.product.product_id} {...cartItem} />;
				})}
				<Button
					className='clear-cart-btn'
					$variant='danger'
					$size='small'
					onClick={() => {
						dispatch(clearCart());
					}}>
					Clear Cart
				</Button>
			</div>
		</StyledCartItems>
	);
};

const StyledCartItems = styled.div`
	header {
		margin-bottom: 2rem;
	}
	.items-container {
		display: grid;
		gap: 2rem;
		padding: 2rem;
		border: 1px solid var(--color-neutral-300);
		border-radius: var(--border-radius-lg);
	}
	.clear-cart-btn {
		justify-self: flex-start;
		margin-top: 1rem;
	}
`;

export default CartItems;
