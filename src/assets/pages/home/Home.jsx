import React, { useEffect, useState } from 'react'
import './Home.css'

import { CaseService } from '../../../services/case.service'

import Case from './case/Case'
import HomeMain from './home-main/HomeMain'
import Stages from './stages/Stages'

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
				<Stages />
			</div>
		</div>
	)
}

export default Home
