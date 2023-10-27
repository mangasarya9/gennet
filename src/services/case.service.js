import axios from 'axios'

export const CaseService = {
	async getAll() {
		const response = await axios.get('http://menua7u0.beget.tech/api/projects')

		return response.data.data
	},

	async getItemById() {
		const response = await axios.get('http://menua7u0.beget.tech/api/projects')

		return response.data.data
	},
}

//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Определите URL сервера, к которому вы хотите отправить запрос
//     const serverURL = 'https://example.com/api/data?filter=yourFilterParameter';

//     axios.get(serverURL)
//       .then(response => {
//         // Обработка успешного ответа
//         setFilteredData(response.data);
//       })
//       .catch(error => {
//         // Обработка ошибки
//         console.error('Ошибка при отправке GET-запроса:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Отображение отфильтрованных данных */}
//       {filteredData.map(item => (
//         <div key={item.id}>{item.name}</div>
//       )}
//     </div>
//   );
// }

// export default YourComponent;
