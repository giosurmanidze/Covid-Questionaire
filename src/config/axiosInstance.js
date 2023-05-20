import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://covid19.devtest.ge/api/create',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
