import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('ru')

	const changeLanguage = newLanguage => {
		setLanguage(newLanguage)
		localStorage.setItem('language',language)
	}

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	return useContext(LanguageContext)
}
