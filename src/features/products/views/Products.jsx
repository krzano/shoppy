import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../productsSlice';
import { useEffect } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import { styled } from 'styled-components';
import Filters from '../components/Filters/Filters';
import Divider from '../../../components/Divider/Divider';
import ProductCard from '../components/ProductCard/ProductCard';

const Products = () => {
	const { isLoading, isError, filteredProducts } = useSelector(
		(store) => store.products
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	if (isLoading) return <LoadingSpinner />;
	if (isError) return <h2>There was an error... Please try again later.</h2>;

	return (
		<StyledProducts>
			<StyledContentWrapper>
				<Filters />
				<div>
					<Divider>{filteredProducts.length} Products Found</Divider>
					{filteredProducts.length < 1 ? (
						<h2>No products filling the requirements.</h2>
					) : (
						<div className='products-list'>
							{filteredProducts.map((product) => {
								return (
									<ProductCard key={product.product_id} product={product} />
								);
							})}
						</div>
					)}
				</div>
			</StyledContentWrapper>
		</StyledProducts>
	);
};

const StyledProducts = styled.div`
	padding: 4rem 1rem;
	color: var(--color-neutral-700);
	background-color: var(--color-neutral-50);
	${StyledContentWrapper} {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
	h2 {
		margin-bottom: 2rem;
	}
	.products-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-top: 2rem;
	}
	@media (min-width: 576px) {
		padding: 6rem 2rem;
	}
	@media (min-width: 768px) {
		${StyledContentWrapper} {
			grid-template-columns: auto 1fr;
		}
		.products-list {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 1200px) {
		.products-list {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`;

export default Products;
