// 获取年月日
function showLocale(objD) {
	var str, colorhead, colorfoot;
	var yy = objD.getYear();
	if (yy < 1900) yy = yy + 1900;
	var MM = objD.getMonth() + 1;
	if (MM < 10) MM = '0' + MM;
	var dd = objD.getDate();
	if (dd < 10) dd = '0' + dd;
	var hh = objD.getHours();
	if (hh < 10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if (mm < 10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if (ss < 10) ss = '0' + ss;
	var ww = objD.getDay();
	if (ww == 0) colorhead = "<font color=\"#000000\">";
	if (ww > 0 && ww < 6) colorhead = "<font color=\"#000000\">";
	if (ww == 6) colorhead = "<font color=\"#000000\">";
	if (ww == 0) ww = "星期日";
	if (ww == 1) ww = "星期一";
	if (ww == 2) ww = "星期二";
	if (ww == 3) ww = "星期三";
	if (ww == 4) ww = "星期四";
	if (ww == 5) ww = "星期五";
	if (ww == 6) ww = "星期六";
	colorfoot = "</font>"
	str = colorhead + yy + "-" + MM + "-" + dd + "丨" + hh + ":" + mm + ":" + ss + "丨" + ww + colorfoot;
	return (str);
}

function tick() {
	var today;
	today = new Date();
	document.getElementById("localtime").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
}
tick();

// 运行时间
function siteTime() {
	window.setTimeout("siteTime()", 1000);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	var t1 = Date.UTC(2019, 1, 01, 00, 00, 00);
	var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	var diff = t2 - t1;
	var diffYears = Math.floor(diff / years);
	var diffDays = Math.floor((diff / days) - diffYears * 365);
	var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
	var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
		minutes) / seconds);
	document.getElementById("sitetime").innerHTML = " 已运行" + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " +
		diffMinutes + " 分钟 " + diffSeconds + " 秒";
}
siteTime();
