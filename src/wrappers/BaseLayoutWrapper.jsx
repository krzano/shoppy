import { useEffect } from 'react';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import {
	IoSettingsOutline,
	IoLogOutOutline,
	IoLogInOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { getUserSession } from '../features/auth/authSlice';

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

const dropdownItemsList = [
	{
		id: 0,
		label: 'Login',
		icon: <IoLogInOutline />,
		visible: true,
		component: 'link',
		path: 'login',
	},
	{
		id: 1,
		label: 'Settings',
		icon: <IoSettingsOutline />,
		visible: true,
		component: 'link',
		path: '/',
	},
	{
		id: 2,
		label: 'Logout',
		icon: <IoLogOutOutline />,
		visible: true,
		component: 'button',
		onClick: () => {
			console.log('logout');
		},
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
	useEffect(() => {
		dispatch(getUserSession());
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
