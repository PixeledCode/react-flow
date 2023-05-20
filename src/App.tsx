import React, { useCallback } from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Connection,
	Controls,
	Edge,
	Node,
	addEdge,
	useEdgesState,
	useNodesState,
} from 'reactflow'

import 'reactflow/dist/style.css'
import { Node as CustomNode, Panel } from './components'
import { nodesConfig } from './config/site'

const nodeTypes = {
	textNode: CustomNode,
}

export default function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(
		nodesConfig.initialNodes
	)
	const [edges, setEdges, onEdgesChange] = useEdgesState(
		nodesConfig.initialEdges
	)
	const [selectedNode, setSelectedNode] = React.useState<Node>()
	const [nodeVal, setNodeVal] = React.useState<string | null>(null)

	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	)

	const onChange = useCallback(
		(params: string) => {
			setNodeVal(params)
		},
		[setNodeVal]
	)

	React.useEffect(() => {
		if (selectedNode && nodeVal) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === selectedNode.id) {
						// it's important that you create a new object here
						// in order to notify react flow about the change
						node.data = {
							...node.data,
							label: nodeVal,
						}
					}

					return node
				})
			)
		}
	}, [setNodes, nodeVal, selectedNode])

	React.useEffect(() => {
		if (selectedNode) {
			setNodeVal(selectedNode.data.label)
		}
	}, [selectedNode])

	return (
		<main className="flex">
			<div className="h-screen flex-grow">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onNodeClick={(event: React.MouseEvent, selectedNode: Node) => {
						const selected = nodes.filter(
							(node) => node.id === selectedNode.id
						)[0]
						setSelectedNode(selected)
					}}
					onConnect={onConnect}
					fitView
					snapToGrid={true}
					nodeTypes={nodeTypes}
				>
					<Controls />

					<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
				</ReactFlow>
			</div>
			<div className="basis-[400px]">
				<Panel node={selectedNode} onChange={onChange} />
			</div>
		</main>
	)
}
