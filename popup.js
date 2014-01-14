$(document).ready(function() {
  getHistory();
});

function getHistory() {
	chrome.history.search({
    	'text': '',
        'maxResults': 10,
        'startTime': 0
    }, historyfunc);
}

function historyfunc(results){
	$("body").append('<p>hehe</p>');
	for(i in results){
		var hisStr = "<p>"
			+ results[i]['id']
			+ results[i]['lastVisitTime']
		 	+ transTimeToDate(results[i]['lastVisitTime'])
		 	+ results[i]['title']
		 	+ "</p>";
		$("body").append(hisStr);
	}
}

function transTimeToDate(time){
	var timeStr = "";
	var date = new Date(time);
	timeStr += date.getFullYear();
	timeStr += "-";
	timeStr += date.getMonth();
	timeStr += "-";
	timeStr += date.getDate();
	timeStr += "-";
	timeStr += date.getHours();
	timeStr += "-";
	timeStr += date.getMinutes();
	timeStr += "-";
	timeStr += date.getSeconds();
	return timeStr;
}