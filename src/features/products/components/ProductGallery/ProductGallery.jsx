import { styled } from 'styled-components';

const ProductGallery = ({ image, name }) => {
	return (
		<StyledProductGallery $image={image}>
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
	background-image: url(${({ $image }) => $image});
	border: 1px solid var(--color-neutral-200);
	/* border-radius: var(--border-radius-sm); */
	background-size: cover;
	background-position: center;
	.blur {
		backdrop-filter: blur(10px);
		width: 100%;
		height: 100%;
	}
	img {
		object-fit: contain;
		object-position: center;
		width: 100%;
		height: 100%;
	}
`;

export default ProductGallery;
