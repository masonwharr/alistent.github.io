$(document).ready(function() {
	var removeThese = [];
	$('span[data-date]').each(function() {
		// Eventually change to if data-date seconds since 1970 is less than todays amount since 1970, its overdue.
		if ($(this).attr('data-date') == "date1") {
			$(this).css('background-color', "#ce0b24");
		}
	});
	$('.switch').click(function() {
		if ($('.slide').prop('checked') == false) {
			$('.switch').css("pointer-events", "none");
			$(this).children('.slider').css('background-color', "#2d88c7");
			$(this).closest('.task').fadeOut(1200, function() {
				$(this).closest('.task').remove();
			});
			// Prevents spam clicking tasks
			setTimeout(function() {
				$('.switch').css("pointer-events", "auto");
			}, 1000);
		}
	});
});