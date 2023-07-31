export const formatPrice = (price) => {
	const formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price / 100);
	return formattedPrice;
};

export const getUniqueValues = ({ data, key }) => {
	let uniqueValues = data?.map((item) => item?.[key]);
	return ['all', ...new Set(uniqueValues)];
};
