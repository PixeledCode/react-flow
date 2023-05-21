import { Node } from 'reactflow'
import { useToast } from './ui/toast/use-toast'
import { Button } from './ui/button/button'
import { Workflow } from 'lucide-react'

export function Header({ nodes }: { nodes: Node[] }) {
	const { toast } = useToast()

	function handleSaveClick() {
		const notConnectedNodes = nodes.filter((node) => !node.data.targetSelected)
		const isValid = notConnectedNodes.length < 2
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
		<header className="py-1 px-4 shadow-sm flex justify-between gap-3 flex-wrap">
			<div className="flex gap-2 items-center">
				<Workflow size={32} />
				<h1 className="text-3xl font-bold text-center ">Chatbot Flow</h1>
			</div>
			<Button onClick={handleSaveClick}>Save Changes</Button>
		</header>
	)
}
