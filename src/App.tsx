import React from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	Node,
	ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { shallow } from 'zustand/shallow'
import { Panel } from './components'
import { nodesConfig } from './config/site'
import useStore from './config/store'
import { handleDragOver, handleOnDrop } from './lib/utils'

const selector = (state: {
	nodes: any
	edges: any
	onNodesChange: any
	onEdgesChange: any
	onConnect: any
	setSelectedNode: any
	setNodes: (node: Node) => void
}) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
	setSelectedNode: state.setSelectedNode,
	setNodes: state.setNodes,
})

export default function App() {
	const reactFlowWrapper = React.useRef<any>(null)
	const [reactFlowInstance, setReactFlowInstance] = React.useState<any>(null)

	const {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		setSelectedNode,
		setNodes,
	} = useStore(selector, shallow)

	const onDragOver = React.useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			handleDragOver(event)
		},
		[]
	)

	const onDrop = React.useCallback(
		(event: any) => {
			handleOnDrop(event, reactFlowWrapper, reactFlowInstance, setNodes)
		},
		[reactFlowInstance, setNodes]
	)

	return (
		<ReactFlowProvider>
			<header className="py-1 px-4 shadow-sm flex justify-between">
				<h1 className="text-4xl font-bold text-center">Chatbot Flow</h1>
				<button className="py-1 px-4 border border-blue-400 rounded-md text-sm font-semibold hover:border-blue-600 active:bg-slate-100">
					Save Changes
				</button>
			</header>
			<main className="flex">
				<div className="h-screen flex-grow" ref={reactFlowWrapper}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onNodeClick={(event: React.MouseEvent, node: Node) => {
							setSelectedNode(node)
						}}
						onConnect={onConnect}
						onPaneClick={() => {
							setSelectedNode(null)
						}}
						onDragOver={onDragOver}
						onDrop={onDrop}
						onInit={setReactFlowInstance}
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
		</ReactFlowProvider>
	)
}
