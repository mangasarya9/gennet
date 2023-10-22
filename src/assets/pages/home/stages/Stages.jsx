import React from 'react'
import '../stages/Stages.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

const Stages = () => {
	return (
		<div className='stages'>
			<div className='container'>
				<motion.h2
					variants={fadeIn('top', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='stages-title'
				>
					Этапы создания проекта
				</motion.h2>
				<motion.p
					variants={fadeIn('top', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='stages-subtitle'
				>
					Наша задача создать проект максимально быстро, поэтому мы оразбиваем
					задачу на несколько этапов
				</motion.p>
				<motion.div
					variants={fadeIn('right', 0.4)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='stages-bar'
				>
					<div className='stages-line'></div>
					<div>
						<ul className='stages-icons'>
							<li className='stages-item'>
								<img className='stages-item__img' src='./check.png' alt='' />
								<div className='stages-item__text'>Утверждение ТЗ</div>
							</li>
							<li className='stages-item'>
								<img className='stages-item__img' src='./add.png' alt='' />
								<div className='stages-item__text'>Создание прототипа</div>
							</li>
							<li className='stages-item'>
								<img className='stages-item__img' src='./code.png' alt='' />
								<div className='stages-item__text'>Разработка</div>
							</li>
							<li className='stages-item'>
								<img className='stages-item__img' src='./speed.png' alt='' />
								<div className='stages-item__text'>Оптимизация</div>
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Stages
