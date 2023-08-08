$(document).ready(
	function () {
		if (window.location.hash) {
			load(window.location.hash.substring(1));
		}
		else {
			load("intro");
		}

	});

function load(section) {
	$(".page").css("display", "none");
	$("#"+section).css("display", "block");
	window.location.hash=section;
}