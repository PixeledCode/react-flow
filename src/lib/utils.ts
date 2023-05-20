import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

let id = 0
const getId = () => `newNode${id++}`

export function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
	event.preventDefault()
	event.dataTransfer.dropEffect = 'move'
}

export function handleOnDrop(
	event: React.DragEvent<HTMLDivElement>,
	reactFlowWrapper: any,
	reactFlowInstance: any,
	setNodes: any
) {
	event.preventDefault()
	if (reactFlowWrapper) {
		const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
		const type = event.dataTransfer.getData('application/reactflow')

		// check if the dropped element is valid
		if (typeof type === 'undefined' || !type) {
			return
		}

		const position = reactFlowInstance.project({
			x: event.clientX - reactFlowBounds.left,
			y: event.clientY - reactFlowBounds.top,
		})
		const newNode = {
			id: getId(),
			type,
			position,
			data: { label: `${type} node` },
		}

		setNodes(newNode)
	}
}
