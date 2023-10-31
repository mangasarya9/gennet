import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../auto-play/AutoPlay.scss'
import { Services } from '../../../../services/services'

const AutoPlay = () => {
	const [languages, setLanguages] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  const languages = await Services.languages()
		  setLanguages(languages);
		}
		fetchData()
	  }, [])
	const settings = {
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		swipeToSlide: true,
		autoplaySpeed: 700,
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
			
				{
					languages.map(
						data => (
							<div className=''>
								<img className='autoplay' src={data.icon_path} alt='' />
							</div>
						)
					)
				}
			
			</Slider>
		</div>
	)
}
export default AutoPlay
