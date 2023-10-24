// LanguageSelector.js
import React from 'react'
import { useLanguage } from './LanguageContext'

const LanguageSelector = () => {
	const { language, changeLanguage } = useLanguage()

	const handleLanguageChange = event => {
		changeLanguage(event.target.value)
	}

	return (
		<div>
			<select
				id='language-select'
				value={language}
				onChange={handleLanguageChange}
			>
				<option value='en'>English</option>
				<option value='es'>Español</option>
			</select>
		</div>
	)
}

export default LanguageSelector
