import { useSelector } from 'react-redux';
import { formatPrice } from '../../../../utils/helpers';

const OrderConfimration = () => {
	const { totalPrice, shippingFee, totalAmount } = useSelector(
		(store) => store.cart
	);

	return (
		<div>
			<h2>Congratulations!</h2>
			<p>Your order is confirmed.</p>
			<p>You bought {totalAmount} items</p>
			<p>Total price: {formatPrice(totalPrice + shippingFee)}</p>
		</div>
	);
};
export default OrderConfimration;
