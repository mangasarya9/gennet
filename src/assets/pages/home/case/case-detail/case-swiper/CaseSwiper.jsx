import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const CaseSwiper = ({ image }) => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{image.map(data => (
					<SwiperSlide>
						<img className='img' src={data} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

CaseSwiper.propTypes = {
	images: PropTypes.array.isRequired,
}

export default CaseSwiper
