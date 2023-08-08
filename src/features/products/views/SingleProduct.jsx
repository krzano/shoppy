import { useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { styled } from 'styled-components';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import ProductGallery from '../components/ProductGallery/ProductGallery';
import ProductInfoContainer from '../components/ProductInfoContainer/ProductInfoContainer';
import supabase from '../../../services/supabase/supabase';

export const loader = async ({ params: { id } }) => {
	const { data: products, error } = await supabase
		.from('products')
		.select('*')
		.eq('product_id', id);
	console.log(products);
	console.log(error);
	return products;
};

const SingleProduct = () => {
	const data = useLoaderData();
	console.log('loader data', data);
	const product = data[0];
	const { image, name, images } = product;
	return (
		<StyledSingleProduct image={image}>
			<StyledContentWrapper>
				<ProductGallery image={image} name={name} images={images} />
				<ProductInfoContainer product={product} />
			</StyledContentWrapper>
		</StyledSingleProduct>
	);
};

const StyledSingleProduct = styled.div`
	padding: 2rem 2rem;
	color: var(--color-neutral-700);

	${StyledContentWrapper} {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 768px) {
		${StyledContentWrapper} {
			grid-template-columns: 1fr 1fr;
		}
	}
`;

export default SingleProduct;
