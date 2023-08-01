import { useDispatch, useSelector } from 'react-redux';
import {
	clearFilters,
	filterProducts,
	getAllProducts,
	updateFilters,
} from '../productsSlice';
import { useEffect } from 'react';
import { formatPrice } from '../../../utils/helpers';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import { Link, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Filters from '../components/Filters/Filters';
import Divider from '../../../components/Divider/Divider';
import ProductCard from '../components/ProductCard/ProductCard';

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { isLoading, isError, filteredProducts, filters } = useSelector(
		(store) => store.products
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearFilters());
		dispatch(getAllProducts());
		if (searchParams.get('category')) {
			dispatch(
				updateFilters({
					name: 'category',
					value: searchParams.get('category'),
				})
			);
		}
		if (searchParams.get('company')) {
			dispatch(
				updateFilters({
					name: 'company',
					value: searchParams.get('company'),
				})
			);
		}
	}, []);

	if (isLoading) return <LoadingSpinner />;
	if (isError) return <h2>There was an error... Please try again later.</h2>;

	return (
		<StyledProducts>
			<StyledContentWrapper>
				<Filters setSearchParams={setSearchParams} />
				<div>
					<Divider>{filteredProducts.length} Products Found</Divider>
					{filteredProducts.length < 1 ? (
						<h2>No products filling the requirements.</h2>
					) : (
						<div className='products-list'>
							{filteredProducts.map((product) => {
								const {
									id,
									sku,
									name,
									company,
									image,
									specs,
									price,
									rating,
									reviews,
									color,
								} = product;
								return (
									<ProductCard
										key={sku}
										sku={sku}
										name={name}
										company={company}
										image={image}
										specs={specs}
										price={price}
										rating={rating}
										reviews={reviews}
										color={color}
									/>
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
