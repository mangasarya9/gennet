import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarService } from '../../../../../services/case.service'
import CaseSwiper from './case-swiper/CaseSwiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
const CaseDetail = () => {
	const { id } = useParams()
	const [dataCase, setDataCase] = useState({})

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			const fetch = await CarService.getById(id)

			setDataCase(fetch)
		}
		fetchData()
	}, [id])
	if (!dataCase?.id)
		return (
			<div className='section'>
				<div className='container'>project id is not defend </div>
			</div>
		)
	const image = dataCase.images
	return (
		<div className='section detail'>
			<div className='container'>
				<div
					styles={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div className=''>
						<CaseSwiper image={image} />
					</div>
				</div>
				<div className='detail-offer'>
					<h1>{dataCase.name}</h1>
					<p>{dataCase.long_text}</p>
					<a href={dataCase.link} className='btn' target='_blank'>
						Project-link
					</a>
				</div>
			</div>
		</div>
	)
}

export default CaseDetail