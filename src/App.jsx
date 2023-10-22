import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/components/header/Header'
import Home from './assets/pages/home/Home'
import News from './assets/pages/news/News'
import Project from './assets/pages/project/Project'

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project' element={<Project />} />
				<Route path='/news' element={<News />} />
			</Routes>
		</div>
	)
}

export default App
