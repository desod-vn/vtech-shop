import axios from 'axios'
import { API } from '@/constants/link'

const TOKEN = localStorage.getItem('token') || null;

export default axios.create({
  baseURL: API,
  headers: {
    Authorization: 'Bearer ' + TOKEN
  }
});