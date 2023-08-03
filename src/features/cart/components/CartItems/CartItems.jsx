import { styled } from 'styled-components';
import CartItem from '../CartItem/CartItem';
import Button from '../../../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../cartSlice';
// import { BsCartX } from 'react-icons/bs';

const CartItems = ({ cartItems }) => {
	const dispatch = useDispatch();
	return (
		<StyledCartItems>
			<div className='items-container'>
				{cartItems.map((cartItem) => {
					// TO ASK:
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
					{/* <BsCartX /> */}
				</Button>
			</div>
		</StyledCartItems>
	);
};

const StyledCartItems = styled.div`
	.items-container {
		display: grid;
		gap: 2rem;
	}
	.clear-cart-btn {
		justify-self: start;
	}
`;

export default CartItems;
