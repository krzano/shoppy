const CART_ITEMS = 'CART_ITEMS';
const SHIPPING_ADDRESS = 'SHIPPING_ADDRESS';

export const updateCartItemsInLocalStorage = (cartItems) => {
	// localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems || []));
	localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems));
};

export const getCartItemsFromLocalStorage = () => {
	const localStorageCartItems = JSON.parse(localStorage.getItem(CART_ITEMS));
	// console.log(localStorageCartItems || []);
	return localStorageCartItems || [];
};

export const updateShippingAddressInLocalStorage = (shippingAddress) => {
	localStorage.setItem(SHIPPING_ADDRESS, JSON.stringify(shippingAddress));
};

export const getShippingAddressFromLocalStorage = () => {
	const localStorageShippingAddress = JSON.parse(
		localStorage.getItem(SHIPPING_ADDRESS)
	);
	console.log(localStorageShippingAddress);
	return localStorageShippingAddress;
};
