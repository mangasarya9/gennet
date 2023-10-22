import axios from 'axios'

export const CaseService = {
	async getAll() {
		const response = await axios.get('http://localhost:5137/case')

		return response.data
	},
}
