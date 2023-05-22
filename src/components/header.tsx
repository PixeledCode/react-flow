import { Workflow } from 'lucide-react'
import { useStore } from 'reactflow'
import { Button, useToast } from './ui'

export function Header() {
	const { toast } = useToast()
	const nodesWithoutTarget = useStore((store) =>
		store
			.getNodes()
			.filter((node) => !store.edges.some((edge) => edge.target === node.id))
	)

	function handleSaveClick() {
		const isValid = nodesWithoutTarget.length < 2
		if (isValid) {
			toast({
				description: 'Saved successfully.',
			})
		} else {
			toast({
				description: 'Please connect all nodes.',
				variant: 'destructive',
			})
		}
	}

	return (
		<header className="py-2 px-4 shadow-sm flex justify-between gap-3 flex-wrap">
			<div className="flex gap-2 items-center">
				<Workflow size={24} />
				<h1 className="text-xl font-bold text-center sm:text-2xl">
					Chatbot Flow
				</h1>
			</div>
			<Button size="sm" onClick={handleSaveClick}>
				Save Changes
			</Button>
		</header>
	)
}
