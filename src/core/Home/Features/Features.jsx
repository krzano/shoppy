import styled from 'styled-components';
import Feature from '../Feature/Feature';

const Features = ({ featuresList }) => {
	return (
		<StyledFeatures>
			{featuresList.map(({ id, icon, text }) => {
				return <Feature key={id} icon={icon} text={text} />;
			})}
		</StyledFeatures>
	);
};

const StyledFeatures = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	gap: 6rem 3rem;
`;

export default Features;

export const StyledFeaturesBackground = styled.div`
	background-color: var(--color-primary-900);
	/* box-shadow: 0px 0px 50px -20px rgb(0, 0, 0, 0.6); */
`;
