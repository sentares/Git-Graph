export const DayNames: { [key: number]: string } = {
	0: 'Mon',
	2: 'Wed',
	4: 'Fri',
}

interface WeekdaysProps {
	index: number
}

const Weekdays = (props: WeekdaysProps) => {
	const { index } = props
	const dayName = DayNames[index]

	return <div className='timeline-weekdays-weekday'>{dayName}</div>
}

export default Weekdays
