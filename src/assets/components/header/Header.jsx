import { useState } from 'react'
import './Header.css'
import { useLanguage } from '../../../LanguageContext'
import { Link, useLocation } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'

export default function Header({ setPopupOpen }) {
	const location = useLocation()
	const isActivePortfolio = location.pathname === '/portfolio'
	const isActiveHome = location.pathname === '/'
	const { language, changeLanguage } = useLanguage()
	const translations = language === 'ru' ? ruTranslations : enTranslations
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(
		language == 'ru' ? 'Выберите язык' : 'Select Language'
	)

	const [burgerOpen, setBurgerMenu] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const selectOption = (language, option) => {
		changeLanguage(language)
		setSelectedOption(option)
		setIsOpen(false)
	}

	burgerOpen
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto')

	return (
		<header className='header'>
			<div className='container'>
				<div className='header_content'>
					<div className='header_content-logo'>
						<Link to='/'>
							<h1>Gennet</h1>
						</Link>
					</div>
					<div
						className={
							burgerOpen ? 'header__wrapper active' : 'header__wrapper'
						}
					>
						<div className='header_content_links'>
							<ul className='links-ul'>
								<li className='links-li'>
									<Link
										className={`links-a ${isActiveHome ? 'active' : ''}`}
										to='/'
									>
										{translations.home}
									</Link>
								</li>

								<li className='links-li'>
									<Link
										className={`links-a ${isActivePortfolio ? 'active' : ''}`}
										to='/portfolio'
									>
										{translations.portfolio}
									</Link>
								</li>

								<li className='links-li'>
									<a
										onClick={() => {
											setPopupOpen(true)
										}}
										className='links-a'
									>
										{translations.LeaveArequest}
									</a>
								</li>
							</ul>
						</div>
						<div>
							<div className='dropdown'>
								<button onClick={toggleDropdown} className='dropdown-button'>
									{selectedOption}
								</button>
								{isOpen && (
									<ul className='dropdown-list'>
										<li
											value='ru'
											onClick={() => selectOption('ru', 'Русский')}
											className={language == 'ru' ? 'active' : ''}
										>
											Русский
										</li>
										<li
											value='en'
											onClick={() => selectOption('en', 'English')}
											className={language == 'en' ? 'active' : ''}
										>
											English
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>
					<div
						onClick={() => setBurgerMenu(!burgerOpen)}
						className={burgerOpen ? 'burger-menu active' : 'burger-menu'}
					>
						<div className='line'></div>
						<div className='line'></div>
						<div className='line'></div>
					</div>
				</div>
			</div>
		</header>
	)
}
