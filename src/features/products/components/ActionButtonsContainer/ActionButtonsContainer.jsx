import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import AmountButtons from '../../../../components/AmountButtons/AmountButtons';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../../cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const BuyingButtonsContainer = ({ stock, product }) => {
	const [amount, setAmount] = useState(1);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const increaseAmount = () => {
		let newAmount = amount + 1;
		if (newAmount > stock) {
			newAmount = stock;
		}
		setAmount(newAmount);
	};
	const decreaseAmount = () => {
		let newAmount = amount - 1;
		if (newAmount < 1) {
			newAmount = 1;
		}
		setAmount(newAmount);
	};

	return (
		<StyledBuyingButtonsContainer>
			<div className='amount-row'>
				<AmountButtons
					amount={amount}
					handleIncrease={increaseAmount}
					handleDecrease={decreaseAmount}
					stock={stock}
				/>
				{stock > 30 ? (
					<p className='amount-info'>
						<span>{stock} items</span> in stock
					</p>
				) : (
					<p className='amount-info'>
						Only <span>{stock} items</span> left!
						<br />
						Don't miss it
					</p>
				)}
			</div>
			<div className='buttons-row'>
				<Button
					onClick={() => {
						dispatch(buyNow({ amount, product }));
						navigate('/checkout');
					}}>
					Buy Now
				</Button>
				<Button
					$variant='secondary'
					onClick={() => {
						dispatch(addToCart({ amount, product }));
						setAmount(1);
					}}>
					Add to Cart
				</Button>
			</div>
		</StyledBuyingButtonsContainer>
	);
};

const StyledBuyingButtonsContainer = styled.div`
	/* padding: 4rem 0; */
	.amount-row {
		display: grid;
		grid-template-columns: 20rem;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	.buttons-row {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	.amount-info {
		font-size: 1.4rem;
		text-align: center;
		span {
			font-weight: bold;
		}
	}
	@media (min-width: 576px) {
		.buttons-row {
			grid-template-columns: 1fr 1fr;
		}
		.amount-row {
			grid-template-columns: 20rem 1fr;
		}
		.amount-info {
			text-align: left;
		}
	}
`;

export default BuyingButtonsContainer;
