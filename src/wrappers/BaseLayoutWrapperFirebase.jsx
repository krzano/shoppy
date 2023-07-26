import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import {
	IoSettingsOutline,
	IoLogOutOutline,
	IoLogInOutline,
} from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeUserFromLocalStorage,
	updateUserInLocalStorage,
} from '../utils/localStorage';
import { updateUser } from '../features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const navLinksList = [
	{
		id: 0,
		path: '/',
		label: 'Home',
	},
	{
		id: 1,
		path: 'about',
		label: 'About',
	},
	{
		id: 2,
		path: 'products',
		label: 'Products',
	},
	{
		id: 3,
		path: 'cart',
		label: 'Cart',
	},
];

const socialLinksList = [
	{
		id: 0,
		url: 'https://twitter.com/',
		icon: <BsTwitter />,
		label: 'Twitter',
	},
	{
		id: 1,
		url: 'https://www.instagram.com/',
		icon: <BsInstagram />,
		label: 'Instagram',
	},
	{
		id: 2,
		url: 'https://facebook.com/',
		icon: <BsFacebook />,
		label: 'Facebook',
	},
];

const footerLinksList = [
	{
		id: 0,
		title: 'Products',
		links: [
			{
				id: 0,
				path: '/',
				label: 'Smartphones',
			},
			{
				id: 1,
				path: '/',
				label: 'Tablets',
			},
			{
				id: 2,
				path: '/',
				label: 'Notebooks',
			},
			{
				id: 3,
				path: '/',
				label: 'Accesories',
			},
		],
	},
	{
		id: 1,
		title: 'Support',
		links: [
			{
				id: 0,
				path: '/',
				label: 'Help Center',
			},
			{
				id: 1,
				path: '/',
				label: 'FAQs',
			},
			{
				id: 2,
				path: '/',
				label: 'Order Status',
			},
			{
				id: 3,
				path: '/',
				label: 'Returns',
			},
			{
				id: 4,
				path: '/',
				label: 'Gift Cards',
			},
			{
				id: 5,
				path: '/',
				label: 'Contact Us',
			},
		],
	},
	{
		id: 2,
		title: 'Third Title',
		links: [
			{
				id: 0,
				path: '/',
				label: 'Link',
			},
			{
				id: 1,
				path: '/',
				label: 'Random',
			},
			{
				id: 2,
				path: '/',
				label: 'Default',
			},
		],
	},
];

const BaseLayoutWrapper = ({ children }) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((store) => store.auth);

	const dropdownItemsList = [
		{
			id: 0,
			label: 'Login',
			icon: <IoLogInOutline />,
			visible: currentUser ? false : true,
			component: 'link',
			path: 'login',
		},
		{
			id: 1,
			label: 'Settings',
			icon: <IoSettingsOutline />,
			visible: currentUser ? true : false,
			component: 'link',
			path: '/',
		},
		{
			id: 2,
			label: 'Logout',
			icon: <IoLogOutOutline />,
			visible: currentUser ? true : false,
			component: 'button',
			onClick: () => {
				console.log('logout');
				signOut(auth)
					.then(() => {
						toast.success('Successfully logged out.');
					})
					.catch((error) => console.log(error));
			},
		},
	];

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				const newUser = {
					uid: currentUser.uid,
					email: currentUser.email,
					emailVerified: currentUser.emailVerified,
				};
				dispatch(updateUser(newUser));
				updateUserInLocalStorage(newUser);
			} else {
				dispatch(updateUser(null));
				removeUserFromLocalStorage();
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<BaseLayout
			navLinksList={navLinksList}
			footerLinksList={footerLinksList}
			socialLinksList={socialLinksList}
			dropdownItemsList={dropdownItemsList}>
			{children}
		</BaseLayout>
	);
};
export default BaseLayoutWrapper;
