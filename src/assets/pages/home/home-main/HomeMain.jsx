import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import '../home-main/HomeMain.css'

const HomeMain = () => {
	return (
		<div>
			<div className='home-flex'>
				<div className='home-inner'>
					<motion.h1
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
					>
						Ваш бизнес в надежных руках !
					</motion.h1>

					<motion.p
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
					>
						"Gennet" -
						<TypeAnimation
							sequence={[
								' трансформация идеи в успешный проект.',

								2000,
								' инновации и качество в каждом пикселе.',
								2000,
								' ваш шаг в цифровую эпоху.',
								2000,
							]}
							speed={50}
							className='text-accent'
							wrapper='span'
							repeat={Infinity}
						/>
					</motion.p>
					<motion.div
						variants={fadeIn('right', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className=''
					>
						<a href='#' className='home-btn'>
							ЗАПУСТИТ ПРОЕКТ
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='10'
									height='16'
									viewBox='0 0 10 16'
									fill='none'
								>
									<path
										d='M8.70664 7.29377C9.09727 7.6844 9.09727 8.31877 8.70664 8.7094L3.70664 13.7094C3.31602 14.1 2.68164 14.1 2.29102 13.7094C1.90039 13.3188 1.90039 12.6844 2.29102 12.2938L6.58477 8.00002L2.29414 3.70627C1.90352 3.31565 1.90352 2.68127 2.29414 2.29065C2.68477 1.90002 3.31914 1.90002 3.70977 2.29065L8.70977 7.29065L8.70664 7.29377Z'
										fill='#061B2E'
									/>
								</svg>
							</span>
						</a>
					</motion.div>
				</div>
				<motion.div
					variants={fadeIn('left', 0.1)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 1 }}
					className='home-img'
				></motion.div>
			</div>
		</div>
	)
}

export default HomeMain
