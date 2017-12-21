Empiricus = {

	init: function(){
		this.menuMobile();
		this.shareFb();
	},

	menuMobile: function(){
		$('#menu-mobile').click(function(){
			$(this).toggleClass('active');
			$('.menu-main').toggle();
		})
	},

	shareFb: function(){

		const permalink = 'https://www.empiricus.com.br/';

$.getJSON('https://graph.facebook.com/'+permalink, function(data){
	var facebookShares = data.share.share_count;
	if (facebookShares) {
	  $('.face').append('<span class="count">'+facebookShares+'</span>');
	}
});

	}
}
document.addEventListener("DOMContentLoaded", function(event) {
    Empiricus.init();
});
