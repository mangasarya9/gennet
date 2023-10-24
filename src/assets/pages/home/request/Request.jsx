import React from 'react'
import '../request/Request.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../LanguageContext'

const Request = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
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
					{translations.requestTitle}
				</motion.h2>
				<motion.p
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle request-subtitle'
				>
					{translations.requestSubTitle}
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
				{translations.LeaveArequest}
			</motion.a>
		</div>
	)
}

export default Request
