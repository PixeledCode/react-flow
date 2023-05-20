import React from 'react'
import { IconMessages } from '@tabler/icons-react'
import { NodeTypes } from '@/config/store'

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
					className="border border-primary bg-primary/5 text-primary-foreground hover:border-primary/90 hover:bg-primary/10 py-2 px-3 rounded-md cursor-pointer flex flex-col items-center gap-2 transition-colors"
					onDragStart={(event) => onDragStart(event, 'textNode')}
					draggable
				>
					<IconMessages size="32" color="hsl(222.2,47.4%,11.2%)" />
					<span className="font-semibold text-primary">Message</span>
				</div>
			</div>
		</aside>
	)
}