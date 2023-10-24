import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../auto-play/AutoPlay.scss'

const AutoPlay = () => {
	const settings = {
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className='autoplay-border'>
			<Slider {...settings}>
				<div className=''>
					<img className='autoplay' src='./figma.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./react.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./laravel.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./js.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./php.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./python.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./flatter.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./vue.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./figma.svg' alt='' />
				</div>
				<div className=''>
					<img className='autoplay' src='./react.svg' alt='' />
				</div>
			</Slider>
		</div>
	)
}
export default AutoPlay
