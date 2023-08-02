import { styled } from 'styled-components';
import img from '../../../../assets/images/empty-cart.svg';
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
	return (
		<StyledEmptyCart>
			<img src={img} alt='empty cart' />
			<h2>Your cart is empty</h2>
			<p>
				There are no products in your shopping cart. Click the button below to
				continue shopping.
			</p>
			<Button as={Link} to='/products'>
				Continue Shopping
			</Button>
		</StyledEmptyCart>
	);
};

const StyledEmptyCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	text-align: center;
	img {
		width: 20rem;
	}
	h2 {
		text-transform: capitalize;
	}
	p {
		margin-bottom: 2rem;
		max-width: 38rem;
		color: var(--color-neutral-500);
	}
`;

export default EmptyCart;
