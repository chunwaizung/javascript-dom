function displayCitation() {
	//取得所有引用
	var blockquotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < blockquotes.length; i++){
		//如果没有cite属性，跳过此次循环
		if (!blockquotes[i].getAttribute("cite")) {
			continue;
		}
		//保存cite属性
		var url = blockquotes[i].getAttribute("cite");
		var elements = blockquotes[i].getElementsByTagName("*");
		//获取这个blockquote中的最后一个元素
		var lastElem = elements[elements.length - 1];

		//创建一个a标签
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);

		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		//把标记添加到最后一个元素
		lastElem.appendChild(superscript);
	}
}