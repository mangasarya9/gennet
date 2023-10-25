import { useState } from 'react'
import './Header.css'
import { useLanguage } from '../../../LanguageContext'
import { Link } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'

export default function Header() {
	const { language, changeLanguage } = useLanguage()
	const translations = language === 'ru' ? ruTranslations : enTranslations
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(
		language == 'ru' ? 'Выберите язык' : 'Select Language'
	)

	const options = ['Русский', 'English']
	const [burgerOpen, setBurgerMenu] = useState(false)

	console.log(language)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const selectOption = (language, option) => {
		changeLanguage(language)
		const newURL = `?lang=${language}`
		setSelectedOption(option)
		setIsOpen(false)
	}

	return (
		<header className='header'>
			<div className='container'>
				<div className='header_content'>
					<div className='header_content-logo'>
						<h1>Gennet</h1>
					</div>
					<div
						className={
							burgerOpen ? 'header__wrapper active' : 'header__wrapper'
						}
					>
						<div className='header_content_links'>
							<ul>
								<li>
									<Link to='/'> {translations.home} </Link>
								</li>
								<li>
									<Link to='/about'> {translations.about} </Link>
								</li>
								<li>
									<Link to='/profile'>{translations.portfolio}</Link>
								</li>
								<li>
									<Link to='/new'>{translations.news}</Link>
								</li>
								<li>
									<a href='#'>{translations.LeaveArequest}</a>
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
										>
											Русский
										</li>
										<li
											value='en'
											onClick={() => selectOption('en', 'English')}
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
