import useStore from '@/config/store'
import { Node } from 'reactflow'
import { shallow } from 'zustand/shallow'

const selector = (state: {
	selectedNode: Node | null
	updateNodeLabel: (nodeId: string, nodeVal: string) => void
}) => ({
	selectedNode: state.selectedNode,
	updateNodeLabel: state.updateNodeLabel,
})

export const TextPanel = () => {
	const { selectedNode, updateNodeLabel } = useStore(selector, shallow)

	function handleChange(value: string) {
		selectedNode && updateNodeLabel(selectedNode.id, value)
	}

	return (
		<>
			<div className="p-2 font-semibold">
				<h2>Message</h2>
			</div>
			<hr />

			<div className="p-2 mt-3">
				<label
					className="block text-sm font-medium text-start text-gray-700"
					htmlFor="message"
				>
					Text
				</label>
				<div className="mt-1">
					<textarea
						rows={4}
						key={selectedNode?.id}
						defaultValue={selectedNode?.data.label}
						name="message"
						id="message"
						onChange={(e) => handleChange(e.target.value)}
						className="border block w-full border-gray-300 rounded-md sm:text-sm p-2"
					/>
				</div>
			</div>
		</>
	)
}
