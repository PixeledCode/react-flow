import React from 'react'

export const TextPanel = ({
	value,
	onChange,
}: {
	value?: string
	onChange?: (event: string) => void
}) => {
	const [message, setMessage] = React.useState<string>()

	React.useEffect(() => {
		setMessage(value || '')
	}, [value])

	function handleChange(value: string) {
		onChange && onChange(value)
		setMessage(value)
	}

	return (
		<div className="min-w-[200px] bg-white h-full border-gray-200 border">
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
						name="message"
						id="message"
						value={message}
						onChange={(e) => handleChange(e.target.value)}
						className="border block w-full border-gray-300 rounded-md sm:text-sm p-2"
					/>
				</div>
			</div>
		</div>
	)
}
