import React from 'react'
import './Footer.scss'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'

const Footer = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-inner'>
					<div className='footer-logo'>Gennet</div>

					
					<ul className='footer-links'>
						<li>
							<a href='#'>{translations.home}</a>
						</li>
						<li>
							<a href='#'>{translations.LeaveArequest}</a>
						</li>
						<li>
							<a href='#'>{translations.portfolio}</a>
						</li>

						
						
					</ul>
					</div>
					</div>
		</footer>
	)
}

export default Footer
