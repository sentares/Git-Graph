import moment from 'moment'
import React, { useState } from 'react'
import Item from '../Item/Item'
import { Month } from '../Month/Month'
import Weekdays from '../Weekdays/Weekdays'
import './TimeLine.scss'

export type TimeLineData = {
	date: any
	value: number
}

interface TimeLineProps {
	range: any
	data: TimeLineData[]
}

const TimeLine: React.FC<TimeLineProps> = ({ range, data }) => {
	const days = 365
	const weekDays = Array.from(new Array(7))
	const months = Array.from(new Array(12))

	const startDate = range[0]
	const DayFormat = 'DDMMYYYY'

	const [selectedDataPoint, setSelectedDataPoint] =
		useState<TimeLineData | null>(
			JSON.parse(localStorage.getItem('selectedDataPoint') || 'null')
		)

	const handleSelectDataPoint = (dataPoint: TimeLineData | null) => {
		setSelectedDataPoint(dataPoint)
	}

	return (
		<div className='timeline'>
			<div className='timeline-months'>
				{months.map((_, index) => (
					<Month key={index} index={index} startDate={startDate} />
				))}
			</div>
			<div className='timeline-body'>
				<div className='timeline-weekdays'>
					{weekDays.map((_, index) => (
						<Weekdays key={index} index={index} />
					))}
				</div>
				<div className='timeline-cells'>
					{Array.from({ length: days }).map((_, index) => {
						const date = moment(startDate).add(index, 'day')
						const dataPoint = data.find(
							d =>
								moment(date).format(DayFormat) ===
								moment(d.date).format(DayFormat)
						)

						return (
							<Item
								selectedDataPoint={selectedDataPoint}
								onSelectDataPoint={handleSelectDataPoint}
								key={index}
								index={index}
								date={date}
								dataPoint={dataPoint}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default TimeLine
