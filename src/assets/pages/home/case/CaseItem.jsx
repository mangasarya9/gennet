import React from 'react'

const CaseItem = ({ url, name, caseType }) => {
	return (
		<div className='home-case'>
			<div className='home-overlay'></div>
			<img className='home-case__img' src={url} alt='' />
			<h3 className='home-case__type'>{caseType}</h3>
			<p className='home-case__name'>{name}</p>
		</div>
	)
}

export default CaseItem
