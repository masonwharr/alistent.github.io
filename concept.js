$(document).ready(function() {
	var removeThese = [];
	var overdueTasks = ["lllll", "lll"];
var overdue = overdueTasks.length;
	$('.tasksDetails').each(function() {
var theTab = $(this);
	var theTabSlide = theTab[0].nextElementSibling;
	var theTabRule = $(theTabSlide).find('.slider');
	var theTabColor = ($(theTabRule).css("background-color"));
		console.log(theTabColor);
	
		$(this).html('<div class="tasksDetailsBox" style="padding-left: 8px; border-left: 4px solid ' + theTabColor + '">' + '<p class="tasksName">' + 'Pick up groceries' + '</p>' + '<p class="tasksDate">' + 'Date' + '</p>' + '</div>');

});
	/*$('.slider').each(function() {
		var sliderColor = $(this).css("background-color");
		//var sliderData = $(this).dataset.bg;
		console.log(sliderColor);

	});*/
	$('.overdueBox').html('<p class="overdueText">' + 'You have ' + overdue + ' OVERDUE TASKS. </p>');
	if (overdue == 0){
		$('.overdueBox').remove();
	}
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
