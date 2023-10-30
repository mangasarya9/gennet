import React from 'react'

const CaseSwiper = ({ dataCase }) => {
	return (
		<>
			<div className=' detail-inner'>
				<img className='detail-inner__img' src={dataCase.images[0]} alt='' />
				<div className='detail-offer'>
					<h1 className='title detail-offer__title '>{dataCase.name}</h1>
					{dataCase.languages?.length ? (
						<div>
							<h3>Языки</h3>
							<div className='detail-offer__languages'>
								{dataCase.languages.map(data => (
									<div className='detail-offer__language'>
										<img src={data.icon_path} alt='' />
										<p>{data.language}</p>
									</div>
								))}
							</div>
						</div>
					) : (
						''
					)}
					<div className='detail-inner__btn'>
						<div className='detail-inner__grid'>
							<button className='btn'>Заказать похожий проект</button>
							<button className='btn'>Просмотреть файлы</button>
						</div>
						{dataCase.link ? (
							<a href={dataCase.link} target='_blank' className='btn'>
								Перейти на сайт
							</a>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<p>{dataCase.long_text}</p>
		</>
	)
}

export default CaseSwiper
