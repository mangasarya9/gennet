import React, { useEffect } from 'react'
import '../popup/Popup.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCloudDownloadFill } from 'react-icons/bs'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'

const Popup = ({ setPopupOpen }) => {
	
	// const { language } = useLanguage()
	const translations = localStorage.getItem('language') === 'ru' ? enTranslations : ruTranslations
	
	return (
		<div className='popup'>
			<div className='popup-overlay'></div>
			<div className='popupBody'>
				<button className='popupBody-close' onClick={() => {
					setPopupOpen(false)
					}}>
					<AiFillCloseCircle className='icon' />
				</button>
				<form className='popupBody-form'>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder={translations.popup_name}
					/>
					<textarea
						placeholder={translations.popup_task}
						className='popupBody-form__input'
					></textarea>
					<input
						type='file'
						id='file'
						className='popupBody-form__input'
					/>
					<label htmlFor='file' className='popupBody-form__label'>
				<BsCloudDownloadFill className='label-icon' /> {translations.popup_file}
					</label>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder={translations.popup_budget}
					/>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder={translations.popup_contact}
					/>
					<button type='submit' className='popupBody-form__btn btn'>
						{translations.send}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Popup
