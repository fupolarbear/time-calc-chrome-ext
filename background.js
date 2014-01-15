chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
			"from a content script:" + sender.tab.url :
			"from the extension");
		var succ = false;
		if (request.greeting == "hello"){
			chrome.pageAction.show(sender.tab.id);
			/*
			chrome.tabs.query({'active':true},
				function(item){
					//console.log(item);
					for(k in item){
						//console.log(item[k].id + '-' + sender.tab.id);
						if(item[k].id == sender.tab.id){
							myurl = request.url?request.url:"unknown";
							if(sender.tab){
								chrome.storage.local.get('table', function(item){
									if(item.table){
										if(item.table[myurl])
											item.table[myurl] += 5;
										else
											item.table[myurl] = 5;
										chrome.storage.local.set({'table': item.table});
									} else {
										var tb = {};
										tb[myurl] = 5;
										chrome.storage.local.set({'table': tb});
									}
									//chrome.storage.local.get('table', function(item){console.log(item.table);});
									succ = true;
									//console.log(succ);
								});
							}
							break;
						}
					}
				} // end query call back-func
			);// end query
			*/
			myurl = request.url?request.url:"unknown";
			if(sender.tab && sender.tab.highlighted){
				chrome.storage.local.get('table', function(item){
					if(item.table){
						if(item.table[myurl])
							item.table[myurl] += 5;
						else
							item.table[myurl] = 5;
						chrome.storage.local.set({'table': item.table});
					} else {
						var tb = {};
						tb[myurl] = 5;
						chrome.storage.local.set({'table': tb});
					}
					//chrome.storage.local.get('table', function(item){console.log(item.table);});
				});
				succ = true;
			}
				/*
				var table = localStorage.meow;
				if(table){
					if(table[myurl]){
						table[myurl] += 5;
					} else {
						table[myurl] = 5;
					}
				} else {
					table = {}
					table[myurl] = 5;
				}
				*/
		}
		if(succ)
			sendResponse({farewell: "success add 5"});
		else
			sendResponse({farewell: ""});
	}
);