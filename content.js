function loadScript (res) {
	if (res.enabled) {
		var s = document.createElement('script');
		s.src = res.url;
		document.head.appendChild(s);
	}
}

function onLoad () {
	chrome.runtime.sendMessage('onLoad', loadScript)
}

window.onload = onLoad;