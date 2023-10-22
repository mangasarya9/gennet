import React, { useEffect, useState } from 'react'
import './Home.css'

import { CaseService } from '../../../services/case.service'

import Case from './case/Case'
import HomeMain from './home-main/HomeMain'

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
				<HomeMain />
				<Case
					cars={cars}
					visibleProducts={visibleProducts}
					showMore={showMore}
				/>
			</div>
		</div>
	)
}

export default Home
