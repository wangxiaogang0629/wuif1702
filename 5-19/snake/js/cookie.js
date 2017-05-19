function setCookie(name,value,time){
	var time = Math.abs(time);
	if (time) {
		var date = new Date()
		date.setTime(date.getTime()+time*1000);
		document.cookie = name+"="+value+"; expires="+date.toGMTString();
	}else{
		document.cookie = name+"="+value;
	}
}

function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	var value;
	arr.forEach(function(v,i){
		var a = v.split("=");
		if (a[0] == name) {
			value = a[1];
		}
	})
	return value;
}

function delCookie(name){
	var date = new Date()
	date.setTime(date.getTime()-1000);
	document.cookie = name+"=; expires="+date.toGMTString();
}
