var rand = 5000;

(function loop() {
	//console.log("sleep: " + rand);
	var hehe = function() {
			chrome.runtime.sendMessage(
				{ greeting: "hello", url: location.hostname, time: rand },
				function(response) {
					if(response.farewell){
						rand = 3000;
					} else {
						rand = 7000;
					}
					//console.log('meow', response, ' rand', rand);
				}
			);
			loop();
	}
	did = setTimeout(hehe, rand);
}());