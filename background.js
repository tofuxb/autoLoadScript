var PREFIX = '__ALS__';
var KEY_SCRIPT_PATH = PREFIX + 'script_path';
var KEY_ENABLED = PREFIX + 'enabled';

// on request
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (sender.tab) {
		sendResponse({
			url: localStorage[KEY_SCRIPT_PATH] || '',
			enabled: localStorage[KEY_ENABLED] == 'true'
		})
	}
});