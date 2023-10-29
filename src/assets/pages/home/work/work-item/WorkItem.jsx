import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../../variants'
const WorkItem = () => {
	return (
		<motion.div
			variants={fadeIn('right', 0.2)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.7 }}
			className='work-item'
		>
			<img src='./brand.png' alt='' />
			<h3 className='work-item__title'>Бренд с нуля</h3>
			<p className='work-item__p'>
				Создание уникального бренда – ключевой фактор успеха любого. Наши
				специалисты по брендингу помогут вам выделиться на рынке, разработав
				уникальный стиль и имидж для вашей компании.
			</p>
		</motion.div>
	)
}

export default WorkItem
