import React from 'react'
import '../banner/Banner.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { useLanguage } from '../../../../LanguageContext'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations

	return (
		<div className='banner'>
			<div className='banner-inner'>
				<motion.h1
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
				>
					{translations.bannerTitle}
				</motion.h1>

				<motion.p
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
				>
					Gennet
					{language === 'en' ? (
						<Typewriter
							words={[
								'- transformation of an idea into a successful project.',
								'- innovation and quality in every pixel.',
								'- is your step into the digital age.',
							]}
							loop={Infinity}
							cursor
							cursorStyle='|'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					) : (
						<Typewriter
							words={[
								' - трансформация идеи в успешный проект.',
								' - инновации и качество в каждом пикселе.',
								' - ваш шаг в цифровую эпоху.',
							]}
							loop={5}
							cursor
							cursorStyle='|'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					)}
				</motion.p>
				<motion.div
					variants={fadeIn('right', 0.4)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='banner-btn'
				>
					<a href='#'>{translations.btn}</a>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='7'
							height='10'
							viewBox='0 0 7 10'
							fill='none'
						>
							<path
								d='M6.70859 4.41169C7.09922 4.73708 7.09922 5.26552 6.70859 5.59091L1.70859 9.75595C1.31797 10.0813 0.683594 10.0813 0.292969 9.75595C-0.0976562 9.43056 -0.0976562 8.90212 0.292969 8.57673L4.58672 5L0.296094 1.42327C-0.0945313 1.09788 -0.0945313 0.569439 0.296094 0.244045C0.686719 -0.0813484 1.32109 -0.0813484 1.71172 0.244045L6.71172 4.40908L6.70859 4.41169Z'
								fill='#061B2E'
							/>
						</svg>
					</span>
				</motion.div>
			</div>
			<motion.div
				variants={fadeIn('left', 0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.1 }}
				className='banner-img'
			></motion.div>
		</div>
	)
}

export default Banner
