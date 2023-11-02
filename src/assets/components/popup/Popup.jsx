import React from 'react'
import '../popup/Popup.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCloudDownloadFill } from 'react-icons/bs'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import Select from 'react-select'

const Popup = ({ setPopupOpen }) => {
	const translations =
		localStorage.getItem('language') === 'ru' ? enTranslations : ruTranslations
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
						setPopupOpen(false)
					}}
				>
					<AiFillCloseCircle className='icon' />
				</button>
				<form className='popupBody-form'>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder={translations.popup_name}
					/>
					<textarea
						style={{ maxHeight: '500px', resize: 'height' }}
						placeholder={translations.popup_task}
						className='popupBody-form__input'
					></textarea>
					<input type='file' id='file' className='popupBody-form__input' />
					<label htmlFor='file' className='popupBody-form__label'>
						<BsCloudDownloadFill className='label-icon' />{' '}
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

export default Popup
