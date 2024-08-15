import { getSingleHTMLElement, HTMLElementRetrievalType } from '../../utilities';

// -- Time in status bar
const taskbar_status_time = getSingleHTMLElement(HTMLElementRetrievalType.ID, 'taskbar-status-time');

function setTime() {
	const time = new Date();
	time.setHours(time.getHours());
	taskbar_status_time.innerText = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
}
setInterval(() => {setTime()}, 1000)
setTime();

// -- Icons in taskbar
const taskbar_status_icons = getSingleHTMLElement(HTMLElementRetrievalType.ID, 'taskbar-status-icons');

export class TaskbarIcon {
	constructor(public name: string, public link: string, public icon: URL | String) {}
}
export function addTaskbarIcon(icon: TaskbarIcon) {
	const iconElement = document.createElement('a');
	iconElement.href = icon.link;
	iconElement.target = "_blank";
	iconElement.innerHTML = `<img src="${icon.icon}" alt="${icon.name}">`;
	iconElement.title = icon.name;
	taskbar_status_icons.appendChild(iconElement);
}
