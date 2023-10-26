import React from 'react'
import CaseItem from './CaseItem'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import '../case/Case.scss'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../LanguageContext'

const Case = ({ caseData, visibleProducts, showMore }) => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
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
					{translations.caseTitle}
				</motion.h2>
				<motion.p
					variants={fadeIn('up', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle'
				>
					{translations.caseSubTitle}
				</motion.p>
				<div className='case-flex'>
					{caseData.map((data, index) => (
						<CaseItem key={index} name={data.name} url={data.image} />
					))}
				</div>

				{visibleProducts < caseData.length && (
					<motion.button
						variants={fadeIn('top', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className='btn'
						onClick={showMore}
					>
						{translations.more}
					</motion.button>
				)}
			</div>
		</div>
	)
}

export default Case
