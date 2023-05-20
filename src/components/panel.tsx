import { Node } from 'reactflow'
import { shallow } from 'zustand/shallow'
import useStore from '../config/store'
import { TextPanel } from './text-panel'

const selector = (state: { selectedNode: Node | null }) => ({
	selectedNode: state.selectedNode,
})

export const Panel = () => {
	const { selectedNode } = useStore(selector, shallow)

	if (selectedNode?.type === 'textNode') {
		return <TextPanel />
	}

	return <TextPanel />
}
