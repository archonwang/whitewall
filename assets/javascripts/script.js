$(function() {
	// DATEPICKER - TIMESPAN
	$("#from").datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		showWeek: true,
		firstDay: 1,
		dateFormat: 'yy-mm-dd',
		onClose: function(selectedDate) {
			$("#to").datepicker("option", "minDate", selectedDate);
		}
	});
	$("#to").datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		showWeek: true,
		firstDay: 1,
		dateFormat: 'yy-mm-dd',
		onClose: function(selectedDate) {
			$("#from").datepicker("option", "maxDate", selectedDate);
		}
	});
/*
	// ### THE WALL ###
	
	$('#wall tbody ul').sortable({
		connectWith: '.sortItCon'
	});
*/
	
	// ### DIALOG ###
	
	// NO RELATION ISSUES
	$('#noRel').click(function() {
		$("#relDialog").dialog({
			height: 400,
			width: 540,
			minWidth: 540,
			minHeight: 200,
			maxWidth: 1280,
			maxHeight: 1000,
			show: {
				effect: "fade",
				duration: 200
			},
			hide: {
				effect: "explode",
				duration: 800
			}
		});
	});

	// SHOW/HIDE DETAILS
	$('#showDetails').click(function() {
		if($(this).hasClass('open')) {
        	$(this).removeClass('open');
            $('.postIt').find('.hidden').slideToggle(200);
		} else {
        	$(this).addClass('open');
			$('.postIt').find('.hidden').slideToggle(200);
		}
	});

	// DRAG X AXIS WAL
	$("#wall table").draggable({ axis: "x", scroll: false, cursor: "move" });

	$('.hidden').hide(0);

	$('.postIt').on({
	    'click': function() {
			if($(this).hasClass('open')) {
	        	$(this).removeClass('open');
	            $(this).find('.hidden').slideToggle(200);
			} else {
	        	$(this).addClass('open');
	            $(this).find('.hidden').slideToggle(200);
			}
	    }
	});
	$('#showUsers div').on({
	    'click': function() {
			if($(this).parent().hasClass('open')) {
	        	$(this).parent().removeClass('open');
	            $(this).parent().find('ul').slideToggle(200);
			} else {
	        	$(this).parent().addClass('open');
	            $(this).parent().find('ul').slideToggle(200);
			}
	    }
	});
	$('#showUsers .invert b').click(function() {
		$('#showUsers li input').each(function() {
			var val = $(this).attr('checked');
			console.log(val)
			if(val == 'checked') {
				$(this).removeAttr('checked');
			} else {
				$(this).attr('checked','checked');
			}
			
		})
	});
	
	
/*
	// SORTABLE
	$("#relSort").sortable({
		connectWith: '.sortItCon',
		helper:'clone',
		appendTo: 'body',
		scroll: false,
		zIndex: 1500,
	});
	$("#relSort").disableSelection();
*/

});