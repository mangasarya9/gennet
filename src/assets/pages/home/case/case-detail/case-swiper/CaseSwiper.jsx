import React from 'react'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../../../LanguageContext'
const CaseSwiper = ({ dataCase }) => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	
	return (
		<>
			<div className=' detail-inner'>
				<img className='detail-inner__img' src={dataCase.images[0]} alt='' />
				<div className='detail-offer'>
					<h1 className='title detail-offer__title '>{language === 'en' ? dataCase.name : dataCase.rus_name}</h1>
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
							<button className='btn'>{translations.project_order}</button>
							<button className='btn'>{translations.project_view}</button>
						</div>
						{console.log(dataCase.link)}
						{dataCase.link != "" ?  (
							<a disa href={dataCase.link} target='_blank' className='btn'>
								{translations.project_site}
							</a>
						) : (
							''
							
						)
						}
					</div>
				</div>
			</div>
			<p>{language === 'en' ? dataCase.long_text : dataCase.rus_long_text}</p>
		</>
	)
}

export default CaseSwiper
