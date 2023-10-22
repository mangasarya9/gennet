import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
const CaseItem = ({ url, name, caseType }) => {
	return (
		<motion.div
			variants={fadeIn('left', 0.2)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.7 }}
			className='home-case'
		>
			<div className='home-overlay'></div>
			<img className='home-case__img' src={url} alt='' />
			<h3 className='home-case__type'>{caseType}</h3>
			<p className='home-case__name'>{name}</p>
		</motion.div>
	)
}

export default CaseItem
