import React from 'react'
import WorkItem from './work-item/WorkItem'
import '../work/Work.scss'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import { useLanguage } from '../../../../LanguageContext'

const Work = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	return (
		<div className='work'>
			<motion.h2
				variants={fadeIn('top', 0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.7 }}
				className='title'
			>
				{translations.workTitle}
			</motion.h2>
			<div className='work-grid'>
				<WorkItem />
				<WorkItem />
				<WorkItem />
				<WorkItem />
				<WorkItem />
				<WorkItem />
			</div>
		</div>
	)
}

export default Work
