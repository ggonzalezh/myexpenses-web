import axios, { AxiosInstance } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
  baseURL: process.env.API_URL
})
