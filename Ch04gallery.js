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

function insertAfter(newElement, target) {
	var parent = target.parentNode;
	if (parent.lastChild == target) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,target.nextsibing);
	}
}

//动态添加范例图片和文字说明
function createDivAndImg(){
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var descriptionText = document.createTextNode("choose an image");
	description.appendChild(descriptionText);

	var imgDisplay = document.createElement("img");
	imgDisplay.setAttribute("id","imgDisplay");
	imgDisplay.setAttribute("src","images/krake.jpg");
	imgDisplay.setAttribute("width","520px");

  
	var div = document.createElement("div");
	div.appendChild(description);
	div.appendChild(imgDisplay);
	
	/*
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(div);
	*/

	//第七章新内容,使用insertAfter()
	var gallery = document.getElementById("imageGallery");
	insertAfter(div, gallery);
}

//第六章
function prepareGallery() {
	if (!document.getElementById || !document.getElementsByTagName) {
		return false;
	} else {
		if (!document.getElementById("imageGallery")) {
			return false;
		} else {
			var gallery = document.getElementById("imageGallery");
			var allImages = gallery.getElementsByTagName("a");
			for (var i = 0; i < allImages.length; i++) {
				allImages[i].onclick = function() {
					showImg(this);
					return false;
					//return false; //是否返回false应取决于showImg()的返回结果。
				}
				//allImages[i].onkeypress = allImages[i].onclick;//键盘访问
			}
		}
	}
}

function showImg(whichImg) {
	//要赋值的元素
	var imageDisplay = document.getElementById("imgDisplay");
	var description = document.getElementById("description");
	if (!imageDisplay) { 
		alert("imageDisplay不存在");
		return false;}
	if (imageDisplay.nodeName != "IMG") {
		alert("imageDisplay不是img！");
		return false;}
	//取值
	var source = whichImg.getAttribute("href"); // same as: var source = whichImg.href;
	var descrip = whichImg.getAttribute("title");
	//赋值
	imageDisplay.setAttribute("src",source); // same as: imageDisplay.src = source;
	if (description) {
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = descrip ? descrip : "";
		}
	}
}
/*window.onload = function() {
	var imgArray = document.getElementsByTagName("a");
	for (var i = 0; i < imgArray.length; i++) {
		imgArray[i].onclick = function(){ //onclick的属性是一个函数，不能是一个函数的调用
			showImg(this);
			return false;
		}
	}}*/

/*function countElementInBody(){
	var body = document.getElementsByTagName("body")[0];
	alert("body一共有"+body.childNodes.length+"个子元素");}*/

//window.onload = countElementInBody;

addLoadEvent(createDivAndImg);
addLoadEvent(prepareGallery);

//insertBefore()
/*function demoForInsertBefore() {
	var gallery = document.getElementById("imageGallery");
	var description = document.getElementById("description");
	gallery.parentNode.insertBefore(description, gallery);}*/



//使用insertAfter()增加div和img
/*function createDivAndImgUsingIA(){
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var descriptionText = document.createTextNode("choose an image");
	description.appendChild(descriptionText);

	var imgDisplay = document.createElement("img");
	imgDisplay.setAttribute("id","imgDisplay");
	imgDisplay.setAttribute("src","images/krake.jpg");

	var div = document.createElement("div");
	div.appendChild(description);
	div.appendChild(imgDisplay);

	var gallery = document.getElementById("imageGallery");
	insertAfter(div, gallery);}*/

	/*
	页面加载流程：
	加载html、css、脚本
	脚本动态创建图片说明和图片预览区域
	脚本枚举列表标签下的<a>元素添加onclick
	onclick动作负责更换文字说明和图片展示img的src属性
	返回false取消链接点击事件
	*/