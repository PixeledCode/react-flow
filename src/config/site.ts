import { Position } from 'reactflow'
import { Edge, Node } from 'reactflow'
import { TextNode } from '../../src/components'

export const nodesConfig = {
	initialNodes: [
		{
			id: '1',
			type: 'textNode',
			data: {
				label: 'test message 1',
				isSelected: false,
			},
			position: { x: 0, y: 0 },
			sourcePosition: Position.Right,
		},
		{
			id: '2',
			type: 'textNode',
			data: {
				label: 'test message 2',
				isSelected: false,
			},
			position: { x: 300, y: 0 },
			targetPosition: Position.Left,
		},
	] as Node[],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' }] as Edge[],
	nodeTypes: {
		textNode: TextNode,
	},
}
