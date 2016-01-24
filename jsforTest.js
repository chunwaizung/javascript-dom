window.onload = function() {
	var div = document.getElementById("testdiv");
	var newP = document.createElement("p");
	var txt = document.createTextNode("nodeName: " + newP.nodeName + " nodeType: " + newP.nodeType);
	div.appendChild(newP);
	newP.appendChild(txt);
}

function writeSomething(text) {
	var string = "<p>"; //把js和html代码混杂在一起是很不好的做法
		string += text;
		string += "</p>";
	document.write(string);
}