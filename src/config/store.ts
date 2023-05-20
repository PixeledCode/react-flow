import {
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
	OnConnect,
	OnEdgesChange,
	OnNodesChange,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from 'reactflow'
import { create } from 'zustand'
import { nodesConfig } from './site'

export type NodeData = {
	label: string
	isSelected: boolean
}

type RFState = {
	nodes: Node[]
	edges: Edge[]
	selectedNode: Node | null
	onNodesChange: OnNodesChange
	onEdgesChange: OnEdgesChange
	onConnect: OnConnect
	updateNodeLabel: (nodeId: string, nodeVal: string) => void
	setSelectedNode: (node: Node) => void
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
	nodes: nodesConfig.initialNodes,
	edges: nodesConfig.initialEdges,
	selectedNode: null,
	setSelectedNode: (node: Node) => {
		set({
			selectedNode: node,
		})
	},
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		})
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		})
	},
	onConnect: (connection: Connection) => {
		set({
			edges: addEdge(connection, get().edges),
		})
	},

	updateNodeLabel: (nodeId: string, nodeVal: string) => {
		set({
			nodes: get().nodes.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						label: nodeVal,
					}
				}

				return node
			}),
		})
	},
}))

export default useStore
