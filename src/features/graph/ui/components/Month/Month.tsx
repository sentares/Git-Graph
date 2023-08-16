import moment from 'moment'

interface MonthProps {
	index: number
	startDate: any
}

export const Month = (props: MonthProps) => {
	const { index, startDate } = props
	let date = moment(startDate).add(index, 'month')
	let monthName = date.format('MMM')

	return <div className={`month ${monthName}`}>{monthName}</div>
}
