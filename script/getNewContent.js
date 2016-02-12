function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				alert("响应已收到");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert('Sorry,your browser doesn\'t support XMLHttpRequest,hehe');
	}
	alert("函数完成");
} 