import { keyframes, styled } from 'styled-components';
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

const Filters = ({ setSearchParams }) => {
	const dispatch = useDispatch();
	const [showFilters, setShowFilters] = useState(false);
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
			<StyledFilters className={!showFilters && 'hide-filters'}>
				<div className='select-container'>
					<label htmlFor='search'>Search</label>
					<input
						className='search'
						name='search'
						id='search'
						type='search'
						placeholder='e.g. watch'
						value={search}
						onChange={handleChange}
					/>
				</div>
				<div className='select-container'>
					<label htmlFor='company'>Company</label>
					<select
						className='select'
						name='company'
						id='company'
						value={company}
						onChange={handleChange}>
						{companies.map((company) => {
							return (
								<option key={company} value={company}>
									{company}
								</option>
							);
						})}
					</select>
				</div>
				<div className='select-container'>
					<label htmlFor='category'>category</label>
					<select
						className='select'
						name='category'
						id='category'
						value={category}
						onChange={handleChange}>
						{categories.map((category) => {
							return (
								<option key={category} value={category}>
									{category}
								</option>
							);
						})}
					</select>
				</div>
				<div className='select-container'>
					<label htmlFor='sortBy'>Sort by</label>
					<select
						className='sort'
						name='sortBy'
						id='sortBy'
						value={sortBy}
						onChange={handleChange}>
						<option value='name-az'>Name (A-Z)</option>
						<option value='name-za'>Name (Z-A)</option>
						<option value='price-lowest'>Price (low to high)</option>
						<option value='price-highest'>Price (high to low)</option>
					</select>
				</div>
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
	font-weight: 500;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	/* transition: max-height 1s, opacity 1s; */
	/* max-height: 100vh; */
	/* visibility: visible; */
	/* opacity: 1; */
	/* &.hide-filters {
		max-height: 0;
		visibility: hidden;
		opacity: 0;
	} */
	.search {
		padding: 0.5em 1em;
		border-radius: var(--border-radius-pill);
		background-color: var(--color-neutral-100);
		border: 1px solid transparent;
		outline-color: var(--color-primary-700);
		/* width: 12rem; */
	}
	.select-container {
		display: grid;
		label {
			padding-left: 1rem;
			font-size: 1.4rem;
			font-weight: bold;
			text-transform: capitalize;
		}
	}
	.select {
		padding: 0.5em 1em;
		color: var(--color-neutral-700);
		border-radius: var(--border-radius-pill);
		background-color: var(--color-neutral-100);
		border: 1px solid transparent;
		outline-color: var(--color-primary-700);
		text-transform: capitalize;
		/* width: 12rem; */
		option {
			padding: 2em 1em;
		}
	}
	.sort {
		padding: 0.5em 1em;
		color: var(--color-neutral-700);
		background-color: var(--color-neutral-0);
		border-radius: var(--border-radius-pill);
		border: 1px solid var(--color-neutral-700);
	}

	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export default Filters;
