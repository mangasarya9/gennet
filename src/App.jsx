import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import News from './assets/pages/news/News'
import Project from './assets/pages/project/Project'
import { LanguageProvider } from './LanguageContext'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import CaseDetail from './assets/pages/home/case/case-detail/CaseDetail'
import { CarService } from './services/case.service'

const App = () => {
	const [caseData, setCaseData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await CarService.getAll()
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
					<Route path='/portfolio' element={<Project />} />
					<Route path='/news' element={<News />} />
					<Route path='/project/:id' element={<CaseDetail />} />
					<Route path='/*' element={<div>Page Not Found</div>} />
				</Routes>
				<Footer />
			</LanguageProvider>
		</div>
	)
}

export default App
