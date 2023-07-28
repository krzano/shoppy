import { styled } from 'styled-components';

const ProductGallery = ({ image, name }) => {
	return (
		<StyledProductGallery image={image}>
			<div className='blur'>
				<img src={image} alt={name} />
			</div>
		</StyledProductGallery>
	);
};

const StyledProductGallery = styled.div`
	position: relative;
	z-index: -10;
	height: 340px;
	background-image: url(${(props) => props.image});
	border: 1px solid var(--color-neutral-200);
	/* border-radius: var(--border-radius-sm); */
	background-size: cover;
	background-position: center;
	.blur {
		/* padding: 2em; */
		backdrop-filter: blur(10px);
		width: 100%;
		height: 100%;
	}
	img {
		/* box-shadow: var(--shadow-sm); */
		object-fit: contain;
		object-position: center;
		width: 100%;
		height: 100%;
	}
`;

export default ProductGallery;
