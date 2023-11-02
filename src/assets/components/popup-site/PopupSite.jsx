import React from 'react'
import '../popup/Popup.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCloudDownloadFill } from 'react-icons/bs'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'
import Select from 'react-select'

const PopupSite = ({ setPopupSite, dataCase }) => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	const options = [
		{
			label: 'RUB',
		},
		{
			label: 'USD',
		},
		{
			label: 'USDT',
		},
	]
	return (
		<div className='popup'>
			<div className='popup-overlay'></div>
			<div className='popupBody'>
				<button
					className='popupBody-close'
					onClick={() => {
						setPopupSite(false)
					}}
				>
					<AiFillCloseCircle className='icon' />
				</button>
				<form className='popupBody-form'>
					<div className=''>
						<img
							className='popupBody-form_img'
							src={dataCase.images[0]}
							alt=''
						/>
						<p className='popupBody-form_name'>
							{language == 'ru' ? dataCase.rus_name : dataCase.name}
						</p>
					</div>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder={translations.popup_name}
					/>
					<textarea
						style={{ maxHeight: '52px', resize: 'height' }}
						placeholder={translations.popup_task}
						className='popupBody-form__input'
					></textarea>
					<input type='file' id='file' className='popupBody-form__input' />
					<label htmlFor='file' className='popupBody-form__label'>
						<BsCloudDownloadFill className='label-icon' />
						{translations.popup_file}
					</label>
					<div className='popupBody-form__grid'>
						<input
							type='text'
							className='popupBody-form__input'
							placeholder={translations.popup_budget}
						/>
						<Select options={options} isSearchable={false} />
					</div>
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

export default PopupSite
