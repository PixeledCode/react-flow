import React from 'react'
import { NodeTypes } from '../config/store'
import { IconMessages } from '@tabler/icons-react'

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

			<div className="p-2 mt-3 w-fit min-w-[240px]">
				<div
					className="border border-blue-500 py-2 px-3 rounded-md cursor-pointer flex flex-col items-center gap-2"
					onDragStart={(event) => onDragStart(event, 'textNode')}
					draggable
				>
					<IconMessages size="32" color="rgb(37,99,235)" />
					<span className="font-semibold text-blue-600">Message</span>
				</div>
			</div>
		</aside>
	)
}
