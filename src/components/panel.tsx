import { Node } from 'reactflow'
import { shallow } from 'zustand/shallow'
import useStore from '../config/store'
import { TextPanel, AddNodePanel } from './panels'

const selector = (state: { selectedNode: Node | null; nodes: Node[] }) => ({
	selectedNode: state.selectedNode,
})

export const Panel = () => {
	const { selectedNode } = useStore(selector, shallow)
	const CurrentPanel = getPanel(selectedNode?.type || '')

	return (
		<div className=" bg-white h-full border-gray-200 border">
			<CurrentPanel />
		</div>
	)
}

const getPanel = (type: string) => {
	if (type === 'textNode') {
		return TextPanel
	}
	return AddNodePanel
}
