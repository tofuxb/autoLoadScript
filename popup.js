(function () {
	var PREFIX = '__ALS__';
	var KEY_SCRIPT_PATH = PREFIX + 'script_path';
	var KEY_ENABLED = PREFIX + 'enabled';

	var $ = function (selector) {
		var $el = document.querySelectorAll(selector);
		if ($el.length == 0) return null;
		if ($el.length == 1) return $el[0];
		return $el
	};

	var modifyUrl = function (e) {
		localStorage[KEY_SCRIPT_PATH] = e.target.value;
	};

	var toggleEnabled = function (e) {
		localStorage[KEY_ENABLED] = $('#enabled').checked;
	};

	// addEventListener and init value
	var $url = $('#url');
	var $enabled = $('#enabled');

	$url.value = localStorage[KEY_SCRIPT_PATH] || '';
	$enabled.checked = localStorage[KEY_ENABLED] == 'true';

	$url.addEventListener('change', modifyUrl);
	$enabled.addEventListener('click', toggleEnabled);


})();

