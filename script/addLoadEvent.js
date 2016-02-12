function addLoadEvent(func) {
	var oldload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldload();
			func();
		}
	}
}

//addLoadEvent(getNewContent);
addLoadEvent(displayAbbr);
addLoadEvent(displayCitation);
addLoadEvent(displayAccesskey);