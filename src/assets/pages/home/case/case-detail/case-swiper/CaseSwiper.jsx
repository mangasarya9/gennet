import React, { useEffect, useState } from 'react'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../../../LanguageContext'
import PopupSite from '../../../../../components/popup-site/PopupSite'
import PopupFIle from '../../../../../components/popup-file/PopupFIle'
const CaseSwiper = ({ dataCase }) => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	const [popupFile, setPopupFile] = useState(false)
	const [popupSite, setPopupSite] = useState(false)
	useEffect(() => {
		if (popupSite) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [popupSite])
	useEffect(() => {
		if (popupFile) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [popupFile])
	return (
		<>
			<div className='detail-inner'>
				<img className='detail-inner__img' src={dataCase.images[0]} alt='' />
				<div className='detail-offer'>
					<h1 className='title detail-offer__title '>
						{language === 'en' ? dataCase.name : dataCase.rus_name}
					</h1>
					{dataCase.languages?.length ? (
						<div className='languages'>
							<h3>{translations.languages}</h3>
							<div className='detail-offer__languages'>
								{dataCase.languages.map(data => (
									<div className='detail-offer__language'>
										<p>{data.language}</p>
										<img src={data.icon_path} alt='' />
									</div>
								))}
							</div>
						</div>
					) : (
						''
					)}
					<div className='detail-inner__btn'>
						<div className='detail-inner__grid'>
							<button
								onClick={() => setPopupSite(true)}
								className='btn detail-inner__btn'
							>
								{translations.project_order}
							</button>
							<button
								onClick={() => setPopupFile(true)}
								className='btn detail-inner__btn'
							>
								{translations.project_view}
							</button>
						</div>
						{dataCase.link != '' ? (
							<a href={dataCase.link} target='_blank' className='btn'>
								{translations.project_site}
							</a>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<p>{language === 'en' ? dataCase.long_text : dataCase.rus_long_text}</p>
			{popupSite && (
				<PopupSite setPopupSite={setPopupSite} dataCase={dataCase} />
			)}
			{popupFile && (
				<PopupFIle setPopupFile={setPopupFile} dataCase={dataCase} />
			)}
		</>
	)
}

export default CaseSwiper
