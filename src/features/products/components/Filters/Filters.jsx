import { styled } from 'styled-components';
import Button from '../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearFilters,
	filterProducts,
	searchProducts,
	sortProducts,
	updateFilters,
} from '../../productsSlice';
import { getUniqueOptions } from '../../../../utils/helpers';
import { useEffect } from 'react';
import SelectField from '../SelectField/SelectField';
import SearchField from '../SearchField/SearchField';
import { useSearchParams } from 'react-router-dom';
import { sortValues } from '../../../../utils/filterValues';

const sortOptions = [
	{
		id: sortValues.NAME_AZ,
		value: sortValues.NAME_AZ,
		label: 'Name (A-Z)',
	},
	{
		id: sortValues.NAME_ZA,
		value: sortValues.NAME_ZA,
		label: 'Name (Z-A)',
	},
	{
		id: sortValues.PRICE_LOWEST,
		value: sortValues.PRICE_LOWEST,
		label: 'Price (low to high)',
	},
	{
		id: sortValues.PRICE_HIGHEST,
		value: sortValues.PRICE_HIGHEST,
		label: 'Price (high to low)',
	},
];

const Filters = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const { allProducts, filters } = useSelector((store) => store.products);
	const { search, company, category, sortBy } = filters;

	useEffect(() => {
		const searchParamsObject = Object.fromEntries([...searchParams]);
		Object.keys(searchParamsObject).forEach((key) => {
			dispatch(updateFilters({ name: key, value: searchParamsObject[key] }));
		});
		// TODO? / TO FIX?: filters state in searchParams only and then filtering in Filters component using dispatch() searchProducts, sortProducts, filterProduts functions
	}, [searchParams]);

	useEffect(() => {
		dispatch(filterProducts());
	}, [filters, allProducts]);

	const companies = getUniqueOptions({
		data: allProducts,
		key: 'company',
	});
	const categories = getUniqueOptions({
		data: allProducts,
		key: 'category',
	});

	const handleFiltersChange = (e) => {
		const { name, value } = e.target;
		setSearchParams((params) => {
			if (!value) {
				params.delete(name);
			} else {
				params.set(name, value);
			}
			return params;
		});
	};

	return (
		<StyledFilters>
			<SearchField
				name='search'
				value={search}
				onChange={handleFiltersChange}
				placeholder='e.g. watch'
			/>
			<SelectField
				name='company'
				value={company}
				optionsList={companies}
				onChange={handleFiltersChange}
			/>
			<SelectField
				name='category'
				value={category}
				optionsList={categories}
				onChange={handleFiltersChange}
			/>
			<SelectField
				$variant='sort'
				name='sortBy'
				labelText='Sort By'
				value={sortBy}
				optionsList={sortOptions}
				onChange={handleFiltersChange}
			/>
			<Button
				$size='small'
				onClick={() => {
					setSearchParams('');
					dispatch(clearFilters());
				}}>
				Clear filters
			</Button>
		</StyledFilters>
	);
};

const StyledFilters = styled.div`
	height: 100%;
	align-content: start;
	justify-content: start;
	font-size: 1.4rem;
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
