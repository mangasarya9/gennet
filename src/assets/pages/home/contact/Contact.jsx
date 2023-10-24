import React from 'react'
import '../contact/Contact.scss'

const Contact = () => {
	return (
		<div className='contact'>
			<div className=''>
				<h2 className='title  contact-title'>Наши контакты</h2>
				<p className='subtitle contact-subtitle'>
					Связывайся с нами как удобно - лично или онлайн!
				</p>
				<form className='contact-form'>
					<div className='contact-form__flex'>
						<input
							type='text'
							className='contact-form__input'
							placeholder='Ваше имя'
						/>
						<input
							type='tel:'
							className='contact-form__input'
							placeholder='Ваш номер'
						/>
					</div>
					<textarea
						className='contact-form__textarea'
						placeholder='Введите обращение'
					></textarea>
					<button className='btn contact-btn'>Отправить</button>
				</form>
			</div>
			<div className='contact-img'>
				<img src='./contact.png' alt='' />
			</div>
		</div>
	)
}

export default Contact
