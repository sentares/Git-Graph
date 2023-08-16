import moment from 'moment'
// import 'moment/locale/ru'
import { TimeLineData } from '../TimeLine/TimeLine'
import './ItemModal.scss'

interface ItemModalProps {
	date?: TimeLineData
	desc: string
}

const ItemModal = (props: ItemModalProps) => {
	const { date, desc } = props

	const formatDate = (dateString: string) => {
		// moment.locale('ru')

		const formattedDate = moment(dateString).format('dddd, MMMM D, YYYY')

		return formattedDate
	}

	return (
		<div className='itemModal'>
			<div className='count'>{desc}</div>
			<div className='date'>{date ? formatDate(date.date) : ''}</div>
		</div>
	)
}

export default ItemModal
