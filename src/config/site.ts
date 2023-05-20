import { TextNode } from '@/components/nodes'
import { Position } from 'reactflow'
import { Edge, Node } from 'reactflow'

export const nodesConfig = {
	initialNodes: [
		{
			id: '1',
			type: 'textNode',
			data: {
				label: 'test message 1',
				isInitial: true,
				targetSelected: false,
			},
			position: { x: 300, y: 400 },
			sourcePosition: Position.Right,
		},
		{
			id: '2',
			type: 'textNode',
			data: {
				label: 'test message 2',
				targetSelected: true,
			},
			position: { x: 600, y: 300 },
			targetPosition: Position.Left,
		},
	] as Node[],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' }] as Edge[],
	nodeTypes: {
		textNode: TextNode,
	},
}
