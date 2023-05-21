import React from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	Edge,
	Node,
	ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { shallow } from 'zustand/shallow'
import { Header, Panel } from './components'
import { nodesConfig } from './config/site'
import useStore from './config/store'
import { handleDragOver, handleOnDrop } from './lib/utils'

const selector = (state: {
	nodes: Node[]
	edges: Edge[]
	onNodesChange: any
	onEdgesChange: any
	onConnect: any
	setSelectedNode: (node: Node | null) => void
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
			<Header nodes={nodes} />
			<main className="flex">
				<div
					className="h-[calc(100vh_-_48px)] flex-grow"
					ref={reactFlowWrapper}
				>
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
						fitView
						fitViewOptions={{ maxZoom: 1 }}
						onInit={setReactFlowInstance}
						snapToGrid={true}
						nodeTypes={nodesConfig.nodeTypes}
					>
						<Controls />
						<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
					</ReactFlow>
				</div>
				<div className="hidden basis-[300px] md:block lg:basis-[350px]">
					<Panel />
				</div>
			</main>
		</ReactFlowProvider>
	)
}
