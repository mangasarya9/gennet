import { useState } from 'react'
import './Header.css'
import { useLanguage } from '../../../LanguageContext'
import { Link } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'

export default function Header() {
	const [burgerOpen, setBurgerMenu] = useState(false)
	const { language, changeLanguage } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations

	console.log(language)

	const handleLanguageChange = event => {
		changeLanguage(event.target.value)
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
							<select
								className='dropdown'
								id='language-select'
								onChange={handleLanguageChange}
							>
								<option value='ru'>РУ</option>
								<option value='en'>EN</option>
							</select>
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
