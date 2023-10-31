import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Project from './assets/pages/project/Project'
import { LanguageProvider } from './LanguageContext'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import CaseDetail from './assets/pages/home/case/case-detail/CaseDetail'
import { CarService } from './services/case.service'
import Popup from './assets/components/popup/Popup'

const App = () => {
	const [caseData, setCaseData] = useState([])
	const [popupOpen, setPopupOpen] = useState(false)

	useEffect(() => {
		if (popupOpen) {
		  document.body.style.overflow = 'hidden';
		} else {
		  document.body.style.overflow = 'auto';
		}
		return () => {
		  document.body.style.overflow = 'auto';
		};
	  }, [popupOpen]);
	
	useEffect(() => {
		const fetchData = async () => {
			const data = await CarService.getAll()
			setCaseData(data)
		}
		fetchData()
	}, [])

	return (
		<div className='app'>
			<LanguageProvider>
				<Header setPopupOpen={setPopupOpen} />
				<Routes>
					<Route path='/' element={<Home caseData={caseData} />} />
					<Route path='/portfolio' element={<Project />} />
					<Route path='/project/:id' element={<CaseDetail />} />
					<Route path='/*' element={<div>Page Not Found</div>} />
				</Routes>
				<Footer />
			</LanguageProvider>
			{popupOpen && <Popup setPopupOpen={setPopupOpen} />}
		</div>
	)
}

export default App
