import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import News from './assets/pages/news/News'
import Project from './assets/pages/project/Project'
import { LanguageProvider } from './LanguageContext'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'

const App = () => {
	return (
		<div>
			<LanguageProvider>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project' element={<Project />} />
					<Route path='/news' element={<News />} />
				</Routes>
				<Footer />
			</LanguageProvider>
		</div>
	)
}

export default App
