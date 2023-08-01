import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi2';

import { useState } from 'react';
import useClickOutside from '../../../../hooks/useClickOutside';
import StyledUserButtons from './StyledUserButtons';
import Dropdown from '../Dropdown/Dropdown';
import { useSelector } from 'react-redux';

const UserButtons = ({ dropdownItemsList }) => {
	const { totalAmount } = useSelector((store) => store.cart);
	const [showDropdown, setShowDropdown] = useState(false);

	const closeDropdown = () => {
		setShowDropdown(false);
	};
	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const accountBtnRef = useClickOutside(closeDropdown);

	return (
		<StyledUserButtons className='user-buttons'>
			<div className='btn-container'>
				<Link className='btn cart-btn' to='cart'>
					<HiOutlineShoppingCart className='btn-icon' />
				</Link>
				<div className='cart-items-number'>
					<span>{totalAmount}</span>
				</div>
			</div>
			<div className='bar'></div>
			<div className='btn-container' ref={accountBtnRef}>
				<button className='btn' type='button' onClick={toggleDropdown}>
					<HiOutlineUserCircle className='btn-icon' />
					<span className='btn-text'>Account</span>
				</button>
			</div>
			<Dropdown
				showDropdown={showDropdown}
				dropdownItemsList={dropdownItemsList}
			/>
		</StyledUserButtons>
	);
};
export default UserButtons;
