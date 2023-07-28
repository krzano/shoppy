import { styled } from 'styled-components';
import { formatPrice } from '../../../../utils/helpers';

const PriceInfo = ({ price }) => {
	return (
		<StyledPriceInfo>
			<p className='price'>
				{formatPrice(price)} or&nbsp;{formatPrice(price / 12)}/month
			</p>
			<p className='info'>
				Suggested payments with 12 months special financing
			</p>
		</StyledPriceInfo>
	);
};

const StyledPriceInfo = styled.div`
	.price {
		font-weight: bold;
		font-size: 2rem;
	}
	.info {
		font-size: 1.4rem;
	}
	@media (min-width: 768px) {
		.price {
			font-size: 2.2rem;
		}
	}
`;

export default PriceInfo;
