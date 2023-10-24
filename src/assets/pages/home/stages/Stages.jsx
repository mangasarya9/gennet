import React from 'react'
import '../stages/Stages.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../LanguageContext'

const Stages = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	return (
		<div className='stages'>
			<div className='container'>
				<motion.h2
					variants={fadeIn('top', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='title'
				>
					{translations.stagesTitle}
				</motion.h2>
				<motion.p
					variants={fadeIn('top', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle'
				>
					{translations.stagesSubTitle}
				</motion.p>
				<motion.div
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='stages-bar'
				>
					<div className='stages-line'></div>
					<div>
						<ul className='stages-icons'>
							<motion.li
								variants={fadeIn('right', 0.4)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./check.svg' alt='' />
								<div className='stages-item__text'>
									{translations.statement}
								</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./add.svg' alt='' />
								<div className='stages-item__text'>
									{translations.prototyping}
								</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./code.svg' alt='' />
								<div className='stages-item__text'>
									{translations.development}
								</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./speed.svg' alt='' />
								<div className='stages-item__text'>
									{translations.optimization}
								</div>
							</motion.li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Stages
