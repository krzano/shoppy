const USER = 'user';

export const updateUserInLocalStorage = (user) => {
	localStorage.setItem(USER, JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem(USER);
};

export const getUserFromLocalStorage = () => {
	const user = localStorage.getItem(USER);
	return JSON.parse(user);
};
