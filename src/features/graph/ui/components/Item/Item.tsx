import { useEffect, useState } from 'react'
import ItemModal from '../ItemModal/ItemModal'
import { TimeLineData } from '../TimeLine/TimeLine'
import './Item.scss'

interface ItemProps {
	index: number
	date: any
	item?: any
	dataPoint?: TimeLineData
	selectedDataPoint?: TimeLineData | null
	onSelectDataPoint: (dataPoint: TimeLineData | null) => void
}

const Item = (props: ItemProps) => {
	const { dataPoint, selectedDataPoint, onSelectDataPoint } = props
	const [color, setColor] = useState('#ededed')
	const [info, setInfo] = useState('')

	const checkValue = () => {
		if (dataPoint) {
			const contributions = dataPoint.value

			if (contributions === 0) {
				setInfo('No contributions')
			} else if (contributions >= 1 && contributions <= 9) {
				setColor('#ACD5F2')
				setInfo(`${contributions} contributions`)
			} else if (contributions >= 10 && contributions <= 19) {
				setColor('#7FA8C9')
				setInfo(`${contributions} contributions`)
			} else if (contributions >= 20 && contributions <= 29) {
				setColor('#527BA0')
				setInfo(`${contributions} contributions`)
			} else {
				setColor('#254E77')
				setInfo(`${contributions} contributions`)
			}
		}
	}

	const handleClickItem = (val: any) => {
		if (
			selectedDataPoint &&
			// dataPoint &&
			selectedDataPoint.date === dataPoint?.date
		) {
			onSelectDataPoint(null)
		} else if (dataPoint) {
			onSelectDataPoint(dataPoint)
		} else {
			onSelectDataPoint({ date: 1, value: 0 })
		}
		localStorage.removeItem('selectedDataPoint')
	}

	let style = {
		backgroundColor: color,
	}

	useEffect(() => {
		checkValue()
	}, [dataPoint])

	return (
		<div className='timeline-cells-cell-block'>
			{selectedDataPoint && selectedDataPoint.date === dataPoint?.date && (
				<div className='modal-block'>
					<ItemModal date={dataPoint} desc={info} />
					<div className='icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='9'
							height='6'
							viewBox='0 0 9 6'
							fill='none'
						>
							<path
								d='M4.5 6L0.169873 1.38009e-07L8.83013 8.95112e-07L4.5 6Z'
								fill='black'
							/>
						</svg>
					</div>
				</div>
			)}
			<div
				className='timeline-cells-cell'
				onClick={handleClickItem.bind(null, dataPoint)}
				style={style}
			></div>
		</div>
	)
}

export default Item
