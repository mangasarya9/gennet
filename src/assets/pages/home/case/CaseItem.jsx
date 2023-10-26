import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
const CaseItem = ({ url, name }) => {
	return (
		<motion.div
			variants={fadeIn('left', 0.2)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.7 }}
			className='case-item'
		>
			<div className='case-item__overlay'></div>
			<img className='case-item__img' src={url} alt='' />
			<p className='case-item__name'>{name}</p>
		</motion.div>
	)
}

export default CaseItem
