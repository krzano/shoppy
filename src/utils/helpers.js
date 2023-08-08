export const formatPrice = (price) => {
	const formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price / 100);
	return formattedPrice;
};

export const getUniqueOptions = ({ data, key }) => {
	const all = { id: 'all', value: 'all', label: 'all' };
	const uniqueOptions = new Set(data?.map((item) => item?.[key]));
	const mappedOptions = [...uniqueOptions].map((option) => ({
		id: option,
		value: option,
		label: option,
	}));
	return [all, ...mappedOptions];
};
