import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'
import './Project.scss'
import CaseItem from '../home/case/CaseItem'
import Select from 'react-select'
import { Services } from '../../../services/services'

const Project = ({ caseData }) => {
	const [filteredData, setFilteredData] = useState([])
	const [filteredDataLanguage, setFilteredDataLanguage] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const filteredData = await Services.filterData()
			const filteredDataLanguage = await Services.filterDataLanguage()

			setFilteredData(filteredData)
			setFilteredDataLanguage(filteredDataLanguage)
		}
		fetchData()
	}, [])
	const [selectedCategory, setSelectedCategory] = useState(null)
	const categoryOptions = filteredDataLanguage.map(lang => lang)
	const { language } = useLanguage()
	const translations = language === 'ru' ? ruTranslations : enTranslations

	const selectPlaceholder =
		language === 'ru' ? 'Сортировка по языкам' : 'Sorting by language'
	return (
		<div className='section project'>
			<div className='container'>
				<div className='project-link'>
					<Link className='links-a' to='/'>
						{translations.home}
					</Link>
					<span> / </span>
					<Link className='links-a' to='/portfolio'>
						{translations.portfolio}
					</Link>
				</div>
				<h2 className='title'>{translations.portfolio}</h2>
				<div className='flex'>
					<Select
						options={categoryOptions}
						isClearable
						placeholder={selectPlaceholder}
						className='select'
						onChange={categoryOption => setSelectedCategory(categoryOption)}
						value={selectedCategory}
						isSearchable={false}
					/>
				</div>

				<div className='case-flex'>
					{filteredData.map((data, index) => (
						<CaseItem key={index} name={data.name} url={data.images[0]} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
