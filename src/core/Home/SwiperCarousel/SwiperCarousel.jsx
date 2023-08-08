import { Swiper, SwiperSlide } from 'swiper/react';
import {
	EffectCoverflow,
	EffectCards,
	EffectFade,
	Pagination,
	Navigation,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../features/products/components/ProductCard/ProductCard';
import { useEffect } from 'react';
import { getFeaturedProducts } from '../../../features/products/productsSlice';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const SwiperCarousel = () => {
	const dispatch = useDispatch();
	const { isLoading, isError, featuredProducts } = useSelector(
		(store) => store.products
	);

	useEffect(() => {
		dispatch(getFeaturedProducts());
	}, []);

	return (
		<StyledSwiperCarousel>
			<Swiper
				modules={[Navigation, Pagination, EffectCoverflow, EffectCards]}
				effect='cards'
				grabCursor={true}
				pagination
				spaceBetween={20}
				slidesPerView={1}
				// breakpoints={{
				// 	640: {
				// 		effect: 'fade',
				// 		slidesPerView: 2,
				// 		spaceBetween: 20,
				// 	},
				// 	768: {
				// 		slidesPerView: 4,
				// 		spaceBetween: 40,
				// 	},
				// 	1024: {
				// 		slidesPerView: 5,
				// 		spaceBetween: 50,
				// 	},
				// }}
				>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					featuredProducts.map((product) => {
						return (
							<SwiperSlide key={product.product_id}>
								<ProductCard product={product} />
							</SwiperSlide>
						);
					})
				)}
				{/* <SwiperSlide>Slide 3</SwiperSlide> */}
			</Swiper>
			<div className='pagination'></div>
		</StyledSwiperCarousel>
	);
};

const StyledSwiperCarousel = styled.div`
	.swiper {
		/* height: 300px; */
		/* width: 100%; */
	}
	.swiper-slide {
		border-radius: var(--border-radius-lg);
		border: 1px solid var(--color-primary-300);
		/* background-color: #ddd; */
		/* max-width: 300px; */
	}
	.swiper-slide-shadow {
		background: #c4b5fd6e;
	}
`;

export default SwiperCarousel;
