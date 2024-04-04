import axios from 'axios'
import { IData } from '../utils/types/IData.interface'

axios.defaults.baseURL = 'https://82d3e26a18e72a6e.mokky.dev'

// interface IGetProducts {
//   getAllProducts: (url: string, page: number) => void
// }

export const getData = {
  async allProducts(url: string, page: number) {
    const { data } = await axios.get<IData>(`/${url}?page=${page}&limit=2`)
    return data
  },
}
