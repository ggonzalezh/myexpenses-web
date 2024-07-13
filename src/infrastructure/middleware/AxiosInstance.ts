import axios, { AxiosInstance } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://myexpenses-back.herokuapp.com/api'
})
