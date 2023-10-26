import axios from 'axios'

export const CaseService = {
	async getAll() {
		const response = await axios.get('http://menua7u0.beget.tech/api/projects')

		return response.data.data
	},
}
