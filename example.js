window.onload = function(){
	var mood = "happy";
	var age = 22;
	var head = 'Nice to meet you.I\'m krake.I\'m ';
	var message = head + mood + " and I'm " + age + "years old now.";
	
	var p = document.createElement("p");
	p.innerHTML = message;
	p.setAttribute("id","message");
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(p);
	/*while循环
	var k = 1;
	while(k<10){
		alert(mood+k);
		k++;
	}*/

	//var result = add(22,33);
	//alert(result);

	alert(typeof document.getElementById(purchases));
	var ms = document.getElementById("message");
	alert(ms.getAttribute("id"));
	alert(ms.getAttribute("title"));
	ms.setAttribute("title","hello");
	alert(ms.getAttribute("title"));
}

function add(num1,num2) {
	var total = num1 + num2;
	return total;
}