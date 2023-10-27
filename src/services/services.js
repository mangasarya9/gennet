import axios from 'axios'

export const Services = {
	async filterData() {
		const response = await axios.post('http://menua7u0.beget.tech/api/projects/filter', {
				
		});
		
		return response.data.data
	},
	async filterDataLanguage() {
		const response = await axios.get('http://menua7u0.beget.tech/api/languages')
		// console.log(response)
		return response.data
	},
}
