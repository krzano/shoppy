import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import AmountButtons from '../../../../components/AmountButtons/AmountButtons';
import { styled } from 'styled-components';

const BuyingButtonsContainer = ({ sku, stock }) => {
	const [amount, setAmount] = useState(1);

	return (
		<StyledBuyingButtonsContainer>
			<div className='amount-row'>
				<AmountButtons amount={amount} setAmount={setAmount} stock={stock} />
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
						console.log(`dispatch(clearCart()) then dispatch(addToCart(${amount},${sku})) then navigate('/checkout')
            `);
					}}>
					Buy Now
				</Button>
				<Button
					variant='secondary'
					onClick={() => {
						console.log(`Add to cart ${amount} pieces of ${sku}`);
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
