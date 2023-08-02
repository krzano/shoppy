import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/helpers';
import Button from '../../../../components/Button/Button';
import Divider from '../../../../components/Divider/Divider';
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
				<span>{shippingFee === 0 ? 'GRATIS' : formatPrice(shippingFee)}</span>
			</p>
			<Divider />
			<h3>
				Total:
				<span>{formatPrice(totalPrice + shippingFee)}</span>
			</h3>
			<Button>{session ? 'Proceed to Checkout' : 'Login to Continue'}</Button>
		</StyledCartSummary>
	);
};

const StyledCartSummary = styled.div`
	position: sticky;
	top: calc(var(--height-navbar) + 4rem);
	display: grid;
	gap: 2rem;
	padding: 2rem;
	background-color: var(--color-neutral-50);
	border-radius: var(--border-radius-lg);
	border: 1px solid var(--color-neutral-300);
	h3,
	p {
		display: flex;
		justify-content: space-between;
	}
`;

export default CartSummary;
