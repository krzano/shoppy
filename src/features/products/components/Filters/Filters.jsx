import { styled } from 'styled-components';
import Divider from '../../../../components/Divider/Divider';
import Button from '../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearFilters,
	filterProducts,
	updateFilters,
} from '../../productsSlice';
import { getUniqueValues } from '../../../../utils/helpers';
import { useEffect, useState } from 'react';
import FilterField from '../FilterField/FilterField';

const Filters = ({ setSearchParams }) => {
	const dispatch = useDispatch();
	// const [showFilters, setShowFilters] = useState(false);
	const { allProducts, filters } = useSelector((store) => store.products);
	const { search, company, category, sortBy } = filters;

	useEffect(() => {
		setSearchParams('', '');
		dispatch(filterProducts());
	}, [allProducts, filters]);

	const companies = getUniqueValues({
		data: allProducts,
		key: 'company',
	});
	const categories = getUniqueValues({
		data: allProducts,
		key: 'category',
	});
	const colors = getUniqueValues({
		data: allProducts,
		key: 'colors',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(updateFilters({ name, value }));
	};

	return (
		<>
			<StyledFilters>
				<FilterField
					input
					name='search'
					type='search'
					value={search}
					onChange={handleChange}
					placeholder='e.g. watch'
				/>
				<FilterField
					select
					optionsList={companies}
					name='company'
					value={company}
					onChange={handleChange}
				/>
				<FilterField
					select
					optionsList={categories}
					name='category'
					value={category}
					onChange={handleChange}
				/>
				<FilterField
					select
					$variant='sort'
					name='sortBy'
					labelText='Sort By'
					value={sortBy}
					onChange={handleChange}
				/>
				<Button
					$size='small'
					onClick={() => {
						dispatch(clearFilters());
					}}>
					Clear filters
				</Button>
			</StyledFilters>
			{/* <StyledShowFiltersButton>
				<Divider>
					<Button
						$variant='secondary'
						$size='small'
						onClick={() => {
							setShowFilters((prev) => !prev);
						}}>
						{showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
					</Button>
				</Divider>
			</StyledShowFiltersButton> */}
		</>
	);
};

// const StyledShowFiltersButton = styled.div`
// 	@media (min-width: 768px) {
// 		display: none;
// 	}
// `;

const StyledFilters = styled.div`
	height: 100%;
	align-content: start;
	justify-content: start;
	font-size: 1.4rem;
	/* font-weight: 500; */
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export default Filters;
