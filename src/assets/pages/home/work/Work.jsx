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
				<WorkItem
					title={translations.aboutItemText1}
					text={translations.aboutItemInfo1}
					icon={'/app.svg'}
				/>
				<WorkItem
					title={translations.aboutItemText2}
					text={translations.aboutItemInfo2}
					icon={'/ui.svg'}
				/>
				<WorkItem
					title={translations.aboutItemText3}
					text={translations.aboutItemInfo3}
					icon={'/web.svg'}
				/>
				<WorkItem
					title={translations.aboutItemText4}
					text={translations.aboutItemInfo4}
					icon={'/support.svg'}
				/>
				<WorkItem
					title={translations.aboutItemText5}
					text={translations.aboutItemInfo5}
					icon={'/testing.svg'}
				/>
				<WorkItem
					title={translations.aboutItemText6}
					text={translations.aboutItemInfo6}
					icon={'/kluch.svg'}
				/>
			</div>
		</div>
	)
}

export default Work
