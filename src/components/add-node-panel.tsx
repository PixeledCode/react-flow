import React from 'react'
import { NodeTypes } from '../config/store'

export const AddNodePanel = () => {
	const onDragStart = (
		event: React.DragEvent<HTMLDivElement>,
		nodeType: NodeTypes
	) => {
		event.dataTransfer.setData('application/reactflow', nodeType)
		event.dataTransfer.effectAllowed = 'move'
	}

	return (
		<aside>
			<div className="p-2 font-semibold">
				<h2>Add New Node</h2>
			</div>
			<hr />

			<div className="p-2 mt-3">
				<div
					className="border border-blue-400 py-2 px-3 rounded-md cursor-pointer"
					onDragStart={(event) => onDragStart(event, 'textNode')}
					draggable
				>
					Default Node
				</div>
			</div>
		</aside>
	)
}
