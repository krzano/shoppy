import { useSelector } from 'react-redux';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import CartItems from '../components/CartItems/CartItems';
import { styled } from 'styled-components';
import CartSummary from '../components/CartSummary/CartSummary';

const Cart = () => {
	const { totalAmount } = useSelector((store) => store.cart);

	if (totalAmount < 1) {
		return (
			<StyledCart>
				<EmptyCart />
			</StyledCart>
		);
	}

	return (
		<StyledCart>
			<StyledContentWrapper>
				<header>
					<h2>Shopping cart</h2>
					<p>
						{totalAmount} Product{totalAmount > 1 && 's'}
					</p>
				</header>
				<div className='grid-container'>
					<CartItems />
					<CartSummary />
				</div>
			</StyledContentWrapper>
		</StyledCart>
	);
};

const StyledCart = styled.div`
	padding: 6rem 2rem;
	header {
		margin-bottom: 2rem;
	}
	.grid-container {
		display: grid;
		gap: 2rem;
		row-gap: 5rem;
	}
	@media (min-width: 576px) {
		.grid-container {
			grid-template-columns: 1fr clamp(28rem, 50%, 32rem);
			align-items: start;
		}
	}
	@media (min-width: 768px) {
		padding: 6rem 4rem;
	}
`;

export default Cart;
