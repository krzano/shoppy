const CART_ITEMS = 'CART_ITEMS';
const ORDER_INFO = 'ORDER_INFO';

export const updateCartItemsInLocalStorage = (cartItems) => {
	localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems));
};

export const getCartItemsFromLocalStorage = () => {
	const localStorageCartItems = JSON.parse(localStorage.getItem(CART_ITEMS));
	return localStorageCartItems || [];
};

export const updateOrderInfoInLocalStorage = (orderInfo) => {
	localStorage.setItem(ORDER_INFO, JSON.stringify(orderInfo));
};

export const getOrderInfoFromLocalStorage = () => {
	const localStorageOrderInfo = JSON.parse(localStorage.getItem(ORDER_INFO));
	return localStorageOrderInfo;
};

export const removeOrderInfoFromLocalStorage = () => {
	localStorage.removeItem(ORDER_INFO);
};
