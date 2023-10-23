import React from 'react'
import '../request/Request.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

const Request = () => {
	return (
		<div className='request'>
			<div className=''>
				<motion.h2
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='title request-title'
				>
					Технологии которые мы используем
				</motion.h2>
				<motion.p
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle request-subtitle'
				>
					Наши высококвалифицированные эксперты воплощают в жизнь передовые и
					наиболее востребованные языки программирования
				</motion.p>
			</div>
			<motion.a
				href='#'
				variants={fadeIn('left', 0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.7 }}
				className='btn'
			>
				Оставить заявку
			</motion.a>
		</div>
	)
}

export default Request
