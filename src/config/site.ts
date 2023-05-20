import { Position } from 'reactflow'

export const nodesConfig = {
	initialNodes: [
		{
			id: '1',
			type: 'textNode',
			data: {
				label: 'test message 1',
				onChange: (e: any) => {
					console.log(e)
				},
			},
			position: { x: 0, y: 0 },
			sourcePosition: Position.Right,
		},
		{
			id: '2',
			type: 'textNode',
			data: {
				label: 'test message 2',
				onChange: (e: any) => {
					console.log(e)
				},
			},
			position: { x: 300, y: 0 },
			targetPosition: Position.Left,
		},
	],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' }],
}
