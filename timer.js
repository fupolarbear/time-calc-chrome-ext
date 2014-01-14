var rand = 5000;

(function loop() {
	//console.log("sleep: " + rand);
	var hehe = function() {
			chrome.runtime.sendMessage(
				{ greeting: "hello", url: document.domain },
				function(response) {
					//console.log('meow', response);
					if(response.farewell){
						rand = 5000;
					} else {
						rand = 5000;
					}
				}
			);
			loop();
	}
	did = setTimeout(hehe, rand);
}());