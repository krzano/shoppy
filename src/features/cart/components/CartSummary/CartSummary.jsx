import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/helpers';
import Button from '../../../../components/Button/Button';
import Divider from '../../../../components/Divider/Divider';
import { Link } from 'react-router-dom';
const CartSummary = () => {
	const { totalPrice, shippingFee } = useSelector((store) => store.cart);
	const { session } = useSelector((store) => store.auth);
	return (
		<StyledCartSummary>
			<h3>Summary</h3>
			<p>
				Subtotal:
				<span>{formatPrice(totalPrice)}</span>
			</p>
			<p>
				Shipping fee:
				{shippingFee === 0 ? (
					<span className='free-shipping'>Free</span>
				) : (
					<span>{formatPrice(shippingFee)}</span>
				)}
			</p>
			<Divider />
			<h3>
				Total:
				<span>{formatPrice(totalPrice + shippingFee)}</span>
			</h3>
			<Button
				className='summary-btn'
				as={Link}
				to={session ? '/checkout' : '/login'}
				state={!session && { from: '/cart' }}>
				{session ? 'Proceed to Checkout' : 'Login to Continue'}
			</Button>
		</StyledCartSummary>
	);
};

const StyledCartSummary = styled.div`
	position: sticky;
	top: calc(var(--height-navbar) + 4rem);
	display: grid;
	gap: 2rem;
	padding: 2rem;
	background-color: var(--color-neutral-0);
	border-radius: var(--border-radius-lg);
	border: 2px solid var(--color-primary-100);
	box-shadow: var(--shadow-md);
	h3,
	p {
		display: flex;
		justify-content: space-between;
	}
	h3 {
		font-size: 2rem;
	}
	.free-shipping {
		font-weight: bold;
		color: var(--color-primary-700);
	}
	.summary-btn {
		text-align: center;
	}
`;

export default CartSummary;
