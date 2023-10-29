import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const CaseSwiper = ({ dataCase, image }) => {
	return (
		<div
			styles={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
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
			<div className='detail-offer'>
				<h1>{dataCase.name}</h1>
				<p>{dataCase.long_text}</p>
				<a href={dataCase.link} className='btn' target='_blank'>
					Project-link
				</a>
			</div>
		</div>
	)
}

CaseSwiper.propTypes = {
	images: PropTypes.array.isRequired,
}

export default CaseSwiper
