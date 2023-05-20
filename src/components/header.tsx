import { Node } from 'reactflow'
import { useToast } from './ui/toast/use-toast'

export function Header({ nodes }: { nodes: Node[] }) {
	const { toast } = useToast()

	function isValidSave() {
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
		<header className="py-1 px-4 shadow-sm flex justify-between">
			<h1 className="text-4xl font-bold text-center">Chatbot Flow</h1>
			<button
				className="py-1 px-4 border border-blue-400 rounded-md text-sm font-semibold hover:border-blue-600 active:bg-slate-100"
				onClick={isValidSave}
			>
				Save Changes
			</button>
		</header>
	)
}
