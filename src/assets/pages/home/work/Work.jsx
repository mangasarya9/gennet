import React from 'react'
import WorkItem from './work-item/WorkItem'
import '../work/Work.scss'
import enTranslations from '/public/en/en.json'
import ruTranslations from '/public/ru/ru.json'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
import { useLanguage } from '../../../../LanguageContext'

const Work = () => {
	const { language } = useLanguage()
	const translations = language === 'en' ? enTranslations : ruTranslations
	return (
		<div className='work'>
			<motion.h2
				variants={fadeIn('top', 0.2)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.7 }}
				className='title'
			>
				{translations.workTitle}
			</motion.h2>
			<div className='work-grid'>
				<WorkItem
				title = {"Мобильные приложения"}
				text = {'В эпоху мобильности наличие приложения — неотъемлемая часть успешного бизнеса. Наши разработчики создают высокопроизводительные и интуитивно понятные мобильные приложения, которые удовлетворят потребности ваших клиентов.'}
				icon={'/app.svg'}
				/>
				<WorkItem
				title = {"UX/UI Дизайн"}
				text = {'Разработка интуитивных и привлекательных пользовательских интерфейсов, которые обеспечивают простое и приятное взаимодействие с вашим продуктом'}
				icon={'/ui.svg'}
				/>
				<WorkItem 
				title = {"Разработка веб-сайтов"}
				text = {'От простого лендинга до сложного корпоративного сайта — мы предоставляем полный спектр услуг по веб-разработке. Современный дизайн, высокая скорость загрузки и юзабилити — все это вы получите, обратившись к нам.'}
				icon={'/web.svg'}
				/>
				<WorkItem
				title = {"Поддержка и обслуживание"}
				text = {'После запуска продукта его жизненный цикл только начинается. Мы предлагаем комплексные услуги по поддержке и обновлению вашего продукта, чтобы он всегда оставался актуальным и конкурентоспособным.'}
				icon={'/support.svg'}
				/> 
				<WorkItem 
				title = {"QA и тестирование"}
				text = {'Обеспечение качества и стабильности вашего продукта путем проведения тщательного тестирования на всех этапах разработки.'}
				icon={'/testing.svg'}
				/>
				<WorkItem
				title = {"Сайт 'под ключ'"}
				text = {'Комплексная услуга, которая включает в себя все этапы создания веб-сайта: от идеи и дизайна до разработки, тестирования и запуска. Мы также предлагаем последующую поддержку и обновление сайта, чтобы он всегда соответствовал требованиям рынка и потребностям пользователей.'}
				icon={'/kluch.svg'}
				/>
			</div>
		</div>
	)
}

export default Work
