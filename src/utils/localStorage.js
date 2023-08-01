const CART_ITEMS = 'CART_ITEMS';

export const updateCartItemsInLocalStorage = (cartItems) => {
	// localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems || []));
	localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems));
};

export const getCartItemsFromLocalStorage = () => {
	const localStorageCartItems = JSON.parse(localStorage.getItem(CART_ITEMS));
	// console.log(localStorageCartItems || []);
	return localStorageCartItems || [];
};
