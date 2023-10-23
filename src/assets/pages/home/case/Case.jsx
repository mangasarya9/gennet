import React from 'react'
import CaseItem from './CaseItem'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import '../case/Case.scss'

const Case = ({ cars, visibleProducts, showMore }) => {
	return (
		<div>
			<div className='case'>
				<motion.h2
					variants={fadeIn('up', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='title'
				>
					Наши кейсы
				</motion.h2>
				<motion.p
					variants={fadeIn('up', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle'
				>
					Готовы показать все то, что мы делали раньше
				</motion.p>
				<div className='case-flex'>
					{cars.slice(0, visibleProducts).map(car => (
						<CaseItem
							key={car.id}
							name={car.name}
							caseType={car.caseType}
							url={car.image}
						/>
					))}
				</div>

				{visibleProducts < cars.length && (
					<motion.button
						variants={fadeIn('top', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className='btn'
						onClick={showMore}
					>
						Еще
					</motion.button>
				)}
			</div>
		</div>
	)
}

export default Case
