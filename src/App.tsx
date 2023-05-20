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

let id = 0
const getId = () => `newNode${id++}`

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
			event.preventDefault()
			event.dataTransfer.dropEffect = 'move'
		},
		[]
	)

	const onDrop = React.useCallback(
		(event: any) => {
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
		},
		[reactFlowInstance, setNodes]
	)

	return (
		<ReactFlowProvider>
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
		</ReactFlowProvider>
	)
}
