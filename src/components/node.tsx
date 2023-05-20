import { memo } from 'react'
import { Handle, Position } from 'reactflow'

export const Node = memo(
	({
		data,
		isConnectable,
	}: {
		data: {
			label: string
			onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
		}
		isConnectable: boolean
	}) => {
		return (
			<div className="bg-white border-[1px] shadow-2xl border-none  rounded-md min-w-[200px] text-start">
				<span className="py-1 px-3 text-xs font-semibold bg-green-200 block rounded-t-md">
					Send Message
				</span>
				<div className="py-2 px-3 min-h-[32px]">
					<p className="text-xs">{data.label}</p>
				</div>
				<Handle
					type="target"
					position={Position.Left}
					onConnect={(params) => console.log('handle onConnect', params)}
					isConnectable={isConnectable}
				/>

				<Handle
					type="source"
					position={Position.Right}
					id="a"
					isConnectable={isConnectable}
				/>
			</div>
		)
	}
)
