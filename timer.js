var rand = 5000;

(function loop() {
	//console.log("sleep: " + rand);
	var hehe = function() {
			chrome.runtime.sendMessage(
				{ greeting: "hello", url: location.hostname },
				function(response) {
					if(response.farewell){
						rand = 5000;
					} else {
						rand = 8000;
					}
					console.log('meow', response, ' rand', rand);
				}
			);
			loop();
	}
	did = setTimeout(hehe, rand);
}());