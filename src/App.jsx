import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import News from './assets/pages/news/News'
import Project from './assets/pages/project/Project'
import { LanguageProvider } from './LanguageContext'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import { CaseService } from './services/case.service'

const App = () => {
	const [caseData, setCaseData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await CaseService.getAll()

			setCaseData(data)
		}
		fetchData()
	}, [])
	return (
		<div>
			<LanguageProvider>
				<Header />
				<Routes>
					<Route path='/' element={<Home caseData={caseData} />} />
					<Route path='/portfolio' element={<Project caseData={caseData} />} />
					<Route path='/news' element={<News />} />
				</Routes>
				<Footer />
			</LanguageProvider>
		</div>
	)
}

export default App
