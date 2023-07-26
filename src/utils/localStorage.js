const USER = 'user';
const OAUTH_SESSION = 'oauth_session';

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

export const updateOAuthSessionInLocalStorage = (session) => {
	localStorage.setItem(OAUTH_SESSION, JSON.stringify(session));
};

export const removeOAuthSessionFromLocalStorage = () => {
	localStorage.removeItem(OAUTH_SESSION);
};

export const getOAuthSessionFromLocalStorage = () => {
	const session = localStorage.getItem(OAUTH_SESSION);
	return JSON.parse(session);
};
