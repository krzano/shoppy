import { styled } from 'styled-components';
import { FiTruck, FiBox } from 'react-icons/fi';

const productPageDeliveryInfo = [
	{
		id: 0,
		icon: <FiTruck />,
		heading: 'Free Delivery',
		text: 'Free delivery on all orders over $500',
	},
	{
		id: 1,
		icon: <FiBox />,
		heading: 'Return Delivery',
		text: 'Free 30 days delivery returns',
	},
];

const DeliveryInfo = () => {
	return (
		<StyledDeliveryInfo>
			{productPageDeliveryInfo.map(({ id, icon, heading, text }) => {
				return (
					<div key={id} className='container'>
						<div className='icon'>{icon}</div>
						<div className='info'>
							<p className='heading'>{heading}</p>
							<p className='text'>{text}</p>
						</div>
					</div>
				);
			})}
		</StyledDeliveryInfo>
	);
};

const StyledDeliveryInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	border: 1px solid var(--color-neutral-300);
	border-radius: var(--border-radius-sm);
	.container {
		padding: 1.5rem;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
		border-bottom: 1px solid var(--color-neutral-300);
		&:last-child {
			border-bottom: 1px solid transparent;
		}
	}
	.icon {
		color: var(--color-primary-700);
		font-size: 1.8rem;
	}
	.info {
		font-size: 1.4rem;
	}
	.heading {
		font-weight: bold;
		text-transform: capitalize;
	}
	.text {
		color: var(--color-neutral-500);
	}
`;

export default DeliveryInfo;
