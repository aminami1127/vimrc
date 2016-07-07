function poll() {
	var presskeys = $('.arrival-presskeys')	
	if (presskeys) {
		var please = $('[data-presskeys="please"]').text()
		$('.presskey-button').filter(function(){
			return $(this).text() === please
		}).trigger('click')
	}
}
setInterval(function(){ poll(); }, 2000);