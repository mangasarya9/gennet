import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../../variants'
const WorkItem = ({title, text, icon}) => {
	return (
		<motion.div
			variants={fadeIn('right', 0.2)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.7 }}
			className='work-item'
		>
			<img src={icon} alt='' />
			<h3 className='work-item__title'>{title}</h3>
			<p className='work-item__p'>
				{text}
			</p>
		</motion.div>
	)
}

export default WorkItem
