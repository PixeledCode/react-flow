export function lineSeparatedText(text: string): string {
	const txttostore = '<p>' + text.replace(/\n/g, '</p>\n<p>') + '</p>'
	return txttostore
}
