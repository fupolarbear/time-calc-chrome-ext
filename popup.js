$(document).ready(function() {
  getHistory();
});

function getHistory() {
	chrome.storage.local.get('table', function(item){
		if(item.table){
			var p = '';
			var q = 1;
			mw = [];
			for(k in item.table){
				mw.push([k, (item.table[k]/60).toFixed(3)]);
			}
			function comp(a, b){
				return b[1] - a[1];
			}
			mw.sort(comp);
			for(k in mw){
				p = p + ((q%2==0)?'<tr><td>':'<tr class="odd"><td>') + mw[k][0] + '</td><td>' + mw[k][1] + '</td></tr>';
				q++;
			}
			$("body").append('<table border="1" align="center" id="hor-zebra"><caption>Time I wasted on this sites (by pb. just play around:D)</small></caption><tr><th>site</th><th>time(min)</th></tr>' + p + '</table>');
		} else {
			$("body").append("<p>No data now =w=</p>");
		}
	});
}