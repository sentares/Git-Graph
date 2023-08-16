import axios from 'axios'
const URL = process.env.REACT_APP_API_HOST

export const api = axios.create({
	baseURL: URL,
	headers: {
		// 'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
})
