import React, { useEffect } from 'react'
import moment from 'moment'
import { GraphModel } from '../../model/index'
import TimeLine, { TimeLineData } from '../components/TimeLine/TimeLine'
import './Graph.scss'

export const Graph: React.FC = () => {
	const { uploadData, getData } = GraphModel()
	useEffect(() => {
		getData()
	}, [])

	const dataArray: TimeLineData[] = Object.entries(uploadData).map(
		([date, value]) => ({
			date,
			value: value as number,
		})
	)

	const startDate = moment(dataArray[0]?.date).startOf('week').add(1, 'day')
	const dateRange = [startDate, moment()]

	return (
		<div className='activity-graph'>
			{uploadData && <TimeLine range={dateRange} data={dataArray} />}
		</div>
	)
}
