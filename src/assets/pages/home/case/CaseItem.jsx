import React from 'react'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../../../../variants'
import { Link } from 'react-router-dom'
const CaseItem = ({ id, url, name, text }) => {
	return (
		<Link className='case-item' to={`/project/${id}`}>
			<div className='case-item__overlay'></div>
			<img className='case-item__img' src={url} alt='' />
			<h3 className='case-item__name'>{name}</h3>
			<p className='case-item__text'>{text}</p>
		</Link>
	)
}

export default CaseItem
