function displayAccesskey() {
	var linkArray = document.getElementsByTagName("a");
	var list = document.createElement("ul");

	for(var i = 0; i < linkArray.length; i++) {
		var thisLink = linkArray[i];
		if(!thisLink.getAttribute("accesskey")) {
			continue;
		}
		var accesskey = thisLink.getAttribute("accesskey");
		var linkText = thisLink.lastChild.nodeValue;

		var str = accesskey + ": " + linkText;

		var listItem = document.createElement("li");
		var listItemText = document.createTextNode(str);
		listItem.appendChild(listItemText);

		list.appendChild(listItem);
	}
	document.body.appendChild(list);
}