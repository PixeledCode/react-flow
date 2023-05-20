import { NodeData } from '@/config/store'
import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { twMerge } from 'tailwind-merge'

export const TextNode = memo(
	({ selected, data }: { selected: boolean; data: NodeData }) => {
		return (
			<div
				className={twMerge(
					'bg-white border-[1px] shadow-2xl border-transparent rounded-md min-w-[200px] text-start',
					selected && 'border-blue-500'
				)}
			>
				<span className="py-1 px-3 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 block rounded-t-md">
					Send Message
				</span>
				<div className="py-2 px-3 min-h-[32px]">
					<p className="text-xs whitespace-pre-wrap">{data.label}</p>
				</div>
				{!data.isInitial && <Handle type="target" position={Position.Left} />}
				<Handle type="source" position={Position.Right} />
			</div>
		)
	}
)
