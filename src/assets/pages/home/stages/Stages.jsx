import React from 'react'
import '../stages/Stages.scss'
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
					className='title'
				>
					Этапы создания проекта
				</motion.h2>
				<motion.p
					variants={fadeIn('top', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='subtitle'
				>
					Наша задача создать проект максимально быстро, поэтому мы оразбиваем
					задачу на несколько этапов
				</motion.p>
				<motion.div
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='stages-bar'
				>
					<div className='stages-line'></div>
					<div>
						<ul className='stages-icons'>
							<motion.li
								variants={fadeIn('right', 0.4)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./check.svg' alt='' />
								<div className='stages-item__text'>Утверждение ТЗ</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./add.svg' alt='' />
								<div className='stages-item__text'>Создание прототипа</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./code.svg' alt='' />
								<div className='stages-item__text'>Разработка</div>
							</motion.li>
							<motion.li
								variants={fadeIn('right', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='stages-item'
							>
								<img className='stages-item__img' src='./speed.svg' alt='' />
								<div className='stages-item__text'>Оптимизация</div>
							</motion.li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Stages
