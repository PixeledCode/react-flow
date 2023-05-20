import React from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	Node,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { shallow } from 'zustand/shallow'
import { Panel } from './components'
import { nodesConfig } from './config/site'
import useStore from './config/store'

const selector = (state: {
	nodes: any
	edges: any
	onNodesChange: any
	onEdgesChange: any
	onConnect: any
	setSelectedNode: any
}) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
	setSelectedNode: state.setSelectedNode,
})

export default function App() {
	const {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		setSelectedNode,
	} = useStore(selector, shallow)

	return (
		<main className="flex">
			<div className="h-screen flex-grow">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onNodeClick={(event: React.MouseEvent, node: Node) => {
						setSelectedNode(node)
					}}
					onConnect={onConnect}
					fitView
					snapToGrid={true}
					nodeTypes={nodesConfig.nodeTypes}
				>
					<Controls />

					<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
				</ReactFlow>
			</div>
			<div className="basis-[400px]">
				<Panel />
			</div>
		</main>
	)
}
