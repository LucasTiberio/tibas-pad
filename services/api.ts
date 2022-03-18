import axios from 'axios'
import { API_ENDPOINT } from '../commons/consts'

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export default instance
