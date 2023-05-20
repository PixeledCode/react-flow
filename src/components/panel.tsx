import { Node } from 'reactflow'
import { TextPanel } from './text-panel'

export const Panel = ({
	node,
	onChange,
}: {
	node?: Node
	onChange?: (event: string) => void
	type?: 'text'
}) => {
	if (node?.type === 'textNode') {
		const value = node?.data?.label
		return <TextPanel value={value} onChange={onChange} />
	}

	return <TextPanel />
}
