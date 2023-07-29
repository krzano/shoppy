import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import {
	IoSettingsOutline,
	IoLogOutOutline,
	IoLogInOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateSession } from '../features/auth/authSlice';
import supabase from '../services/supabase/supabase';
import { useEffect } from 'react';

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
	const { currentUser, session } = useSelector((store) => store.auth);

	const dropdownItemsList = [
		{
			id: 0,
			label: 'Login',
			icon: <IoLogInOutline />,
			visible: session ? false : true,
			component: 'link',
			path: 'login',
		},
		{
			id: 1,
			label: 'Settings',
			icon: <IoSettingsOutline />,
			visible: session ? true : false,
			component: 'link',
			path: '/',
		},
		{
			id: 2,
			label: 'Logout',
			icon: <IoLogOutOutline />,
			visible: session ? true : false,
			component: 'button',
			onClick: () => {
				supabase.auth.signOut();
				dispatch(updateSession(null));
				toast.success('Successfully logged out');
			},
		},
	];

	useEffect(() => {
		const listener = supabase.auth.onAuthStateChange((_, session) => {
			if (!session) {
				dispatch(updateSession(null));
			}
			if (session) {
				dispatch(updateSession(session));
			}
		});
		return () => {
			listener.data.subscription.unsubscribe();
		};
	}, [window.location]);

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
