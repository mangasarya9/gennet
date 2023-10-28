import axios from 'axios'

const URL = 'http://menua7u0.beget.tech/api/projects'

export const CarService = {
	async getAll() {
		const response = await axios.get(URL)
		return response.data.data
	},

	async getById(id) {
		const response = await axios.get(
			`http://menua7u0.beget.tech/api/project/${id}`
		)
		return response.data.data
	},
}
