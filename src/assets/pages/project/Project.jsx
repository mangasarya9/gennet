import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'
import './Project.scss'
import CaseItem from '../home/case/CaseItem'
import Select from 'react-select'

const Project = ({ caseData }) => {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const categoryOptions = [
		{
			value: 'react js',
			label: 'React Js',
		},
		{
			value: 'caravel',
			label: 'Caravel',
		},
		{
			value: 'flutter',
			label: 'Flutter',
		},
	]
	const filterCase = selectedCategory
		? caseData.filter(data => data.languages[0] === selectedCategory.value)
		: caseData
	console.log(lang)
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
					{filterCase.map((data, index) => (
						<CaseItem key={index} name={data.name} url={data.images[0]} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
