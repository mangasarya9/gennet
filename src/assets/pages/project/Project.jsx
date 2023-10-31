import { useState, useEffect, useRef, lazy } from 'react'
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
	const [noItems, setNoItems] =useState(false)
	const [filteredDataLanguage, setFilteredDataLanguage] = useState([])
	const [selectedCategory, setSelectedCategory] = useState([])
	const [isLoading, setIsLoading] = useState(false);

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
			setIsLoading(true); 
			try {
				const languages = selectedCategory.map(item => item.value.language)
			
				const response = await axios.post(
					'http://menua7u0.beget.tech/api/projects/filter',
					{
						languages: languages,
					}
				)
				setIsLoading(false);
				setFilteredData(response.data.data)
				setNoItems(false)

				if(response.data.data.length == 0){
					
					setNoItems(true)
					console.log(true);
				}
				
				
			} catch (error) {
				setIsLoading(false);
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
		label: category.language,  // must be a string
	icon_path: category.icon_path  // optional, if you need it
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

				<div className={noItems ? 'caseFlex-centered' : 'case-flex'}>
				{ isLoading ? (
      <div id="loading" className="loading-wrapper">
        <div className="loader"></div>
      </div>
    ) : (
      filteredData.length ? (
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
		noItems ?
        <div>
			{/* <p>{translations.no_items_project}</p> */}
		<img 
		style={{ width:"500px", height:'500px' }}
		src="./ill.jpg" alt="" />
		</div>
		// {document.querySelector('.caseFlex')}
		:  <div id="loading" className="loading-wrapper">
        <div className="loader"></div>
      </div>
      )
    )}
				</div>
			</div>
		</div>
	)
}

export default Project
