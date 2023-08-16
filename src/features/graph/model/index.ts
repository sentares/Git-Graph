import { useState } from 'react'
import { api } from '../../../app/api/api'
import { IData } from '../types'

export const GraphModel = () => {
	const [uploadData, setUploadData] = useState({})

	const getData = async () => {
		try {
			const { data } = await api.get('')
			setUploadData(data)
		} catch (error) {
			console.error('Error fetching data:', error)
			throw error
		}
	}

	return { getData, uploadData }
}
