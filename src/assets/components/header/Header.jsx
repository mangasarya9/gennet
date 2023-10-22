import { useState } from 'react'

import './Header.css'
export default function Header() {
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
	let paramValue = urlParams.get('lang')
	paramValue == null ? (paramValue = 'RU') : (paramValue = paramValue)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(
		paramValue == 'RU' ? 'Выберите язык' : 'Select Language'
	)
	const [burgerOpen, setBurgerMenu] = useState(false)

	const options = ['RU', 'ENG']

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const selectOption = option => {
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
									<a href='#'>{paramValue == 'RU' ? 'Главная' : 'Home'} </a>
								</li>
								<li>
									<a href='#'> {paramValue == 'RU' ? 'О нас' : 'About'} </a>
								</li>
								<li>
									<a href='#'>
										{paramValue == 'RU' ? 'Портфолио' : 'Portfolio'}{' '}
									</a>
								</li>
								<li>
									<a href='#'>
										{paramValue == 'RU' ? 'Почему мы?' : 'Why us?'}
									</a>
								</li>
								<li>
									<a href='#'>
										{paramValue == 'RU' ? 'Оставить заявку ' : 'Leave Comment'}{' '}
									</a>
								</li>
							</ul>
						</div>
						<div className='dropdown'>
							<button onClick={toggleDropdown} className='dropdown-button'>
								{selectedOption}
							</button>
							{isOpen && (
								<ul className='dropdown-list'>
									{options.map((option, index) => (
										<li
											key={index}
											onClick={() => selectOption(option)}
											className={paramValue == option ? 'active' : ''}
										>
											{option}
										</li>
									))}
								</ul>
							)}
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
