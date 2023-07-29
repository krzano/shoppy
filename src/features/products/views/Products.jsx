import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../productsSlice';
import { useEffect } from 'react';
import { formatPrice } from '../../../utils/helpers';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import StyledContentWrapper from '../../../styles/StyledContentWrapper/StyledContentWrapper';
import { Link, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Products = () => {
	const { isLoading, products } = useSelector((store) => store.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	const [searchParams] = useSearchParams();
	console.log(searchParams.get('category'));

	if (isLoading) return <LoadingSpinner />;
	if (products.length < 1) return <h2>There is no products to show...</h2>;
	return (
		<StyledProducts>
			<StyledContentWrapper>
				<h2>Products</h2>
				<div className='products-list'>
					{products.map((product) => {
						const { id, sku, name, company, image, short_description, price } =
							product;
						return (
							<article key={sku}>
								<div>
									<p className='name'>{name}</p>
									<p>{formatPrice(price)}</p>
								</div>
								<Link to={sku}>Details</Link>
							</article>
						);
					})}
				</div>
			</StyledContentWrapper>
		</StyledProducts>
	);
};

const StyledProducts = styled.div`
	padding: 4rem 2rem;
	color: var(--color-neutral-700);
	h2 {
		margin-bottom: 2rem;
	}
	.products-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	article {
		display: grid;
		grid-template-columns: 1fr auto;
		justify-content: center;
		align-items: center;
		padding: 1rem 1.5rem;
		border: 1px solid var(--color-neutral-300);
		border-radius: var(--border-radius-sm);
		box-shadow: var(--shadow-sm);
	}
	.name {
		font-weight: bold;
	}
	a {
		padding: 1em;
		font-weight: bold;
		font-size: 2rem;
		color: var(--color-primary-700);
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	@media (min-width: 768px) {
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
