import { Handle, NodeProps, Position } from 'reactflow'
import { twMerge } from 'tailwind-merge'
import { NodeData } from '../../src/config/store'

export const TextNode = ({ data }: NodeProps<NodeData>) => {
	return (
		<div
			className={twMerge(
				'bg-white border-[1px] shadow-2xl border-transparent  rounded-md min-w-[200px] text-start',
				data?.isSelected && 'border-blue-500'
			)}
		>
			<span className="py-1 px-3 text-xs font-semibold bg-green-200 block rounded-t-md">
				Send Message
			</span>
			<div className="py-2 px-3 min-h-[32px]">
				<p className="text-xs">{data.label}</p>
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</div>
	)
}
