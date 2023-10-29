import React from 'react'
import '../popup/Popup.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCloudDownloadFill } from 'react-icons/bs'
const Popup = ({ setPopupOpen }) => {
	return (
		<div className='popup'>
			<div className='popup-overlay'></div>
			<div className='popupBody'>
				<button
					className='popupBody-close'
					onClick={() => {
						document.body.style.overflow = 'auto'
						setPopupOpen(false)
					}}
				>
					<AiFillCloseCircle className='icon' />
				</button>
				<form className='popupBody-form'>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder='Как к вам обращаться? '
					/>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder='Название вашей компании'
					/>
					<textarea
						placeholder='Опешите задачу'
						className='popupBody-form__input'
					></textarea>
					<input
						type='file'
						id='file'
						className='popupBody-form__input'
						placeholder='Выберите файл'
					/>
					<label htmlFor='file' className='popupBody-form__label'>
						<BsCloudDownloadFill className='label-icon' /> Оставьте тз
					</label>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder='Ваш бюджет'
					/>
					<input
						type='text'
						className='popupBody-form__input'
						placeholder='Контакты для связи'
					/>
					<button type='submit' className='popupBody-form__btn btn'>
						отправить
					</button>
				</form>
			</div>
		</div>
	)
}

export default Popup
