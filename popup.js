$(document).ready(function() {
  getHistory();
});

function getHistory() {
	chrome.storage.local.get('table', function(item){
		if(item.table){
			var p = '';
			var q = 1;
			for(k in item.table){
				p = p + ((q%2==0)?'<tr><td>':'<tr class="odd"><td>') + k + '</td><td>' + (item.table[k]/60).toFixed(3) + '</td></tr>';
				q++;
			}
			$("body").append('<table border="1" align="center" id="hor-zebra"><caption>Time I wasted on this sites (by pb. just play around:D)</small></caption><tr><th>site</th><th>time(min)</th></tr>' + p + '</table>');
		} else {
			$("body").append("<p>No data now =w=</p>");
		}
	});
}