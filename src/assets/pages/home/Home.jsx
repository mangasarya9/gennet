import React, { useState } from 'react'

import Banner from './banner/Banner'
import Case from './case/Case'
import Stages from './stages/Stages'
import Request from './request/Request'
import AutoPlay from './auto-play/AutoPlay'
import Contact from './contact/Contact'

const Home = ({ caseData }) => {
	const [visibleProducts, setVisibleProducts] = useState(3)
	const showMore = () => {
		setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3)
	}

	return (
		<div className='home'>
			<div className='container'>
				<Banner />
				<Case
					caseData={caseData}
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
