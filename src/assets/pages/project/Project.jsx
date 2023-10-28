import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../LanguageContext'
import './Project.scss'
import CaseItem from '../home/case/CaseItem'
import Select from 'react-select'
import { Services } from '../../../services/services'
import axios from 'axios'

const Project = () => {
	const [filteredData, setFilteredData] = useState([])
	const [filteredDataLanguage, setFilteredDataLanguage] = useState([])
	const [selectedCategory, setSelectedCategory] = useState([])
	const prevSelectedCategoryRef = useRef()

	useEffect(() => {
		prevSelectedCategoryRef.current = selectedCategory
	})

	const prevSelectedCategory = prevSelectedCategoryRef.current
	useEffect(() => {
		const fetchData = async () => {
			const anunhavai = await Services.filterData()
			const filteredDataLanguage = await Services.filterDataLanguage()

			setFilteredData(anunhavai)
			setFilteredDataLanguage(filteredDataLanguage)
		}
		fetchData()
	}, [])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const languages = selectedCategory.map(item => item.value)

				const response = await axios.post(
					'http://menua7u0.beget.tech/api/projects/filter',
					{
						languages: languages,
					}
				)

				setFilteredData(response.data.data)
				console.log(filteredData)
			} catch (error) {
				console.error('Failed to fetch data:', error)
			}
		}

		if (
			prevSelectedCategory &&
			selectedCategory.length < prevSelectedCategory.length
		) {
			fetchData()
		}
		if (selectedCategory.length > 0) {
			fetchData()
		}
	}, [selectedCategory])

	const categoryOptions = filteredDataLanguage.map(category => ({
		value: category,
		label: category,
	}))
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
						isMulti
						placeholder={selectPlaceholder}
						className='select'
						onChange={categoryOption => {
							if (categoryOption) {
								setSelectedCategory(categoryOption)
							} else {
								setSelectedCategory([])
							}
						}}
						value={selectedCategory}
						isSearchable={false}
					/>
				</div>

				<div className='case-flex'>
					{filteredData.length ? (
						filteredData.map(data => (
							<CaseItem
								key={data.id}
								id={data.id}
								name={data.name}
								text={data.short_text}
								url={data.images[0]}
							/>
						))
					) : (
						<div>loading...</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Project
