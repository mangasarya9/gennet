import React from 'react'
import '../popup/Popup.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
const Popup = ({ setPopupOpen }) => {
	return (
		<div
			className='popup'
			onClick={() => {
				document.body.style.overflow = 'auto'
				setPopupOpen(false)
			}}
		>
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
						className='popupBody-form__input'
						placeholder='Выберите файл'
					/>
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
