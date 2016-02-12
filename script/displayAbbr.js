//window.onload = displayAbbr;

function displayAbbr () {
	//取得所有abbr标签
	var abbrArray = document.getElementsByTagName("abbr");
	if (!abbrArray.length) { return false;}

	//abbr定义列表
	var dlist = document.createElement("dl");

	//遍历abbr，为每个abbr创建定义，及其解释
	for (var i = 0; i < abbrArray.length; i++) {
		//每个abbr的定义及其解释
		var key = abbrArray[i].lastChild.nodeValue;
		var value = abbrArray[i].getAttribute("title");
		//创建定义
		var dt = document.createElement("dt");
		var dtTxt = document.createTextNode(key);
		dt.appendChild(dtTxt);
		//创建对应的解释
		var dd = document.createElement("dd");
		var ddTxt = document.createTextNode(value);
		dd.appendChild(ddTxt);
		//把定义和解释加入到定义列表
		dlist.appendChild(dt);
		dlist.appendChild(dd);
	}
	//创建标题
	var header = document.createElement("h2");
	var headerText = document.createTextNode("Abbr");
	header.appendChild(headerText);

	//定义列表加入到body中
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(header);
	body.appendChild(dlist);
}