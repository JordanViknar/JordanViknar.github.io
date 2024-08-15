export enum HTMLElementRetrievalType {
	ID,
	CLASS,
	TAG,
	SELECTOR
}

export function getSingleHTMLElement(type: HTMLElementRetrievalType, value: string): HTMLElement {
	let element: HTMLElement | null = null;
	switch (type) {
		case HTMLElementRetrievalType.ID:
			element = document.getElementById(value);
			break;
		case HTMLElementRetrievalType.CLASS:
			element = document.getElementsByClassName(value)[0] as HTMLElement;
			break;
		case HTMLElementRetrievalType.TAG:
			element = document.getElementsByTagName(value)[0] as HTMLElement;
			break;
		case HTMLElementRetrievalType.SELECTOR:
			element = document.querySelector(value) as HTMLElement;
			break;
	};
	if (element === null) throw new Error(`Element not found: ${value}`);
	return element;
}
