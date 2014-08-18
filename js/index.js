$(document).ready(function(){
	var $contact = $("#contact");
	var $favourites = $("#favourites");
	var $metro = $("#metro");
	var $grid1 = $("#grid1");
	var $grid2 = $("#grid2");
	var $grid3 = $("#grid3");
	var $grid4 = $("#grid4");
	var $close = $(".close");

	$contact.add($favourites).css("height", $metro.height());

	$grid1.click(function(){
		window.open("http://blog.yumolun.com");
	});
	$grid2.click(function(){
		window.open("https://www.linkedin.com/profile/view?id=248297652");
	});
	$grid3.click(function(){
		$contact.css({
			"z-index":9999,
			"opacity":1,
		});
	});
	$grid4.click(function(){
		$favourites.css({
			"z-index":9999,
			"opacity":1,
		});
	});
	$close.click(function(){
		$contact.add($favourites).css({
			"z-index":-1,
			"opacity":0,
		});
	});

});