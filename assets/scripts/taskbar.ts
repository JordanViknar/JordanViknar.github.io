function retrieve_element(id: string) {
	const element = document.getElementById(id);

	if (!element) {
		throw new Error(`Element with id ${id} not found`);
	} else {
		return element;
	}
}

const taskbar_status_time = retrieve_element('taskbar-status-time');

// Update the text every second to be the current time
function setTime() {
	const time = new Date();
	time.setHours(time.getHours() + 2);
	taskbar_status_time.innerText = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
}
setInterval(() => {setTime()}, 1000)
setTime();
