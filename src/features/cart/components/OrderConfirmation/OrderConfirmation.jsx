import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../../../utils/helpers';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import Button from '../../../../components/Button/Button';
import { clearCart } from '../../cartSlice';
import {
	getOrderInfoFromLocalStorage,
	removeOrderInfoFromLocalStorage,
} from '../../../../utils/localStorage';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
	const dispatch = useDispatch();
	const { session } = useSelector((store) => store.auth);
	const {
		cart: { cartItems, totalAmount, totalPrice, shippingFee },
		shippingAddress: {
			firstName,
			lastName,
			street,
			postalCode,
			city,
			country,
			phoneNumber,
		},
	} = getOrderInfoFromLocalStorage();

	useEffect(() => {
		dispatch(clearCart());
	}, []);

	return (
		<StyledOrderConfirmation>
			<h2>Thank you!</h2>
			<h3>
				Your order <span className='bold'>#{Date.now()}</span> has been placed!
			</h3>
			<p className='email-info'>
				We sent an email to <span className='bold'>{session?.user?.email}</span>{' '}
				with your order confirmation and receipt. If the email hasn't arrived
				within two minutes, please check your spam folder to see if the email
				was routed there.
			</p>
			<StyledInfoBox className='ordered-items'>
				<h3>Ordered items ({totalAmount}):</h3>
				<ul>
					{cartItems.map(({ amount, product }) => {
						const { name, company, price, specs, color, product_id } = product;
						return (
							<li key={product_id}>
								<p className='amount'>
									{amount}x {formatPrice(price)}
								</p>
								<p>
									{name} {specs && specs + ','} {color}
								</p>
							</li>
						);
					})}
				</ul>
			</StyledInfoBox>
			<StyledInfoBox>
				<h3>Total Price: {formatPrice(totalPrice + shippingFee)}</h3>
				<p>Products: {formatPrice(totalPrice)}</p>
				<p>Shipping fee: {formatPrice(shippingFee)}</p>
			</StyledInfoBox>
			<StyledInfoBox className='shipping-address'>
				<h3>Shipping address:</h3>
				<p>
					{firstName} {lastName}
				</p>
				<p>{phoneNumber}</p>
				<p>{street}</p>
				<p>
					{postalCode} {city}
				</p>
				<p>{country}</p>
			</StyledInfoBox>
			<Button
				as={Link}
				to='/'
				onClick={() => {
					removeOrderInfoFromLocalStorage();
				}}>
				Back To Home
			</Button>
		</StyledOrderConfirmation>
	);
};

const StyledOrderConfirmation = styled.div`
	padding: 2rem 2rem 6rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-align: center;
	.bold {
		font-weight: bold;
	}
	h2 {
		font-size: 3rem;
	}
	h3 {
		font-weight: normal;
	}
	.email-info {
		font-size: 1.4rem;
		color: var(--color-neutral-600);
	}
	.ordered-items {
		li {
			padding: 1rem 0;
			text-transform: capitalize;
			&:not(:last-child) {
				border-bottom: 1px solid var(--color-neutral-300);
			}
			&:last-child {
				padding-bottom: 0;
			}
			p {
				font-size: 1.6rem;
				font-weight: 500;
			}
		}
		.amount {
			font-weight: bold;
		}
	}
	.shipping-address {
		font-weight: 500;
	}
`;

const StyledInfoBox = styled.div`
	padding: 2rem 2rem 3rem;
	border: 1px solid var(--color-neutral-400);
	text-align: left;
	h3 {
		margin-bottom: 1rem;
	}
`;

export default OrderConfirmation;
