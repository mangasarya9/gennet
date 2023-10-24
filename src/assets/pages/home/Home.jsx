import React, { useEffect, useState } from 'react'
import { CaseService } from '../../../services/case.service'
import Banner from './banner/Banner'
import Case from './case/Case'
import Stages from './stages/Stages'
import Request from './request/Request'
import AutoPlay from './auto-play/AutoPlay'
import Contact from './contact/Contact'

const Home = () => {
	const [visibleProducts, setVisibleProducts] = useState(3)
	const showMore = () => {
		setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3)
	}

	const [cars, setCars] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await CaseService.getAll()

			setCars(data)
		}
		fetchData()
	}, [])

	return (
		<div className='home'>
			<div className='container'>
				<Banner />
				<Case
					cars={cars}
					visibleProducts={visibleProducts}
					showMore={showMore}
				/>
				<Stages />
				<Request />
				<AutoPlay />
				<Contact />
			</div>
		</div>
	)
}

export default Home
