import React from 'react'
import '../contact/Contact.scss'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../LanguageContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

const Contact = () => {
	const validateInput = (event) => {
		const key = event.key;
		if (key === '+' || (key >= '0' && key <= '9')) {
		  return true;
		}
		event.preventDefault();
		return false;
	  };
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations

	return (
		<div className='contact'>
			<div className=''>
				<motion.h2
					variants={fadeIn('top', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='title contact-title'
				>
					{translations.contactTitle}
				</motion.h2>
				<motion.p
					variants={fadeIn('top', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle contact-subtitle'
				>
					{translations.contactSubTitle}
				</motion.p>
				<motion.form
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='contact-form'
				>
					<div className='contact-form__flex'>
						<input
							type='text'
							className='contact-form__input'
							placeholder={translations.name}
						/>
						<input
							type="tel"
							 onKeyPress={validateInput}
							className='contact-form__input'
							placeholder={translations.phone}
						/>
					</div>
					<textarea
						className='contact-form__textarea'
						placeholder={translations.message}
					></textarea>
					<button className='btn contact-btn'>{translations.send}</button>
				</motion.form>
			</div>
			<motion.div
				variants={fadeIn('left', 0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.7 }}
				className='contact-img'
			>
				<img src='./contact.jpg' alt='' />
			</motion.div>
		</div>
	)
}

export default Contact
