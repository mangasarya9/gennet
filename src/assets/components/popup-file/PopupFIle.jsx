import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Slider from 'react-slick'
const PopupFIle = ({ setPopupFile, dataCase }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div className='popup'>
			<div className='popupOver'>
				<button
					className='popupBody-close'
					onClick={() => {
						setPopupFile(false)
					}}
				>
					<AiFillCloseCircle className='icon' />
				</button>
				<Slider {...settings}>
					{dataCase.images.map(data => (
						<a className='popupOver-img' href={data} target='_black'>
							<img src={data} alt='' className='popupOver-img' />
						</a>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default PopupFIle
