// import { Node } from 'reactflow'
// import { shallow } from 'zustand/shallow'
// import useStore from '../../src/config/store'

// const selector = (state: {
// 	selectedNode: Node | null
// 	updateNodeLabel: (nodeId: string, nodeVal: string) => void
// }) => ({
// 	selectedNode: state.selectedNode,
// 	updateNodeLabel: state.updateNodeLabel,
// })

export const AddNodePanel = () => {
	// const { selectedNode, updateNodeLabel } = useStore(selector, shallow)

	return (
		<>
			<div className="p-2 font-semibold">
				<h2>Add New Node</h2>
			</div>
			<hr />

			<div className="p-2 mt-3"></div>
		</>
	)
}
