if ($(".work").length) {    

		$('.work-users li').on('click', function () {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.work-tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');

				$('.bg').css('transform', 'translate(145%,-50%)');

				$('.stages__list .stages__item:first-child').addClass('active').siblings().removeClass('active');

				$('.all-wrap').find('.days-content:first').addClass('active').siblings().removeClass('active');

			if ($(window).width() <= '576') {
				$(this).removeClass('active').siblings().addClass('active').closest('div.work-tabs').find('div.tabs-content').addClass('active').eq($(this).index()).removeClass('active');
			}
		});

		$('.stages__list .stages__item').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.tabs-content').find('div.days-content').removeClass('active').eq($(this).index()).addClass('active');

			var attr = $(this).attr('data-target');
			
			if (attr == 1) {
				$('.bg').css('transform', 'translate(145%,-50%)');
			}							
			if (attr == 2) {
				$('.bg').css('transform', 'translate(341.25%,-50%)');
			}							
			if (attr == 3) {
				$('.bg').css('transform', 'translate(537%,-50%)');
			}							
			if (attr == 4) {
				$('.bg').css('transform', 'translate(733.75%,-50%)');
			}							
			if (attr == 5) {
				$('.bg').css('transform', 'translate(930%,-50%)');
			}						
		});


		$('.steps .steps__item').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.days-content').find('div.step-content').removeClass('active').eq($(this).index()).addClass('active');
			
		});	

		$('.way__link').on('click', function(e){
			// e.preventDefault();
		});

	

		if ($(window).width() <= '992') {

			$('.tabs-content').swipe({
				swipeLeft: workLeftSwipe,
				swipeRight: workRightSwipe,
				threshold: 75
			});

			function workLeftSwipe (e) {
				swipeGo('left')
			}

			function workRightSwipe (e) {
				swipeGo('right')
			}

			function swipeGo (swipe) {
				var day_active = $(".work .stages .stages__list .stages__item.active");
				var day_active_index = day_active.index()
				var step_active = $(".work .all-wrap .days-content").eq(day_active_index).find('.steps .steps__item.active')
				var step_active_index = step_active.index()

				var day_prev = day_active.prev('.stages__item')
				var day_next = day_active.next('.stages__item')

				var step_prev = step_active.prev()
				var step_next = step_active.next()

				if (swipe == 'left') {
					if (step_next.length) {
						step_next.click()
					} else if (day_next.length) {
						day_next.click()
					}
				} else if (swipe == 'right') {
					if (step_prev.length) {
						step_prev.click()
					} else if (day_prev.length) {
						day_prev.click()
					}
				}

			}

			// function leftSwipe(event) {
			// 	var dt = $('div.tabs-content.active .stages__item.active').attr('data-target'),
			// 		firstItem = $('div.tabs-content.active .stages__item').first(),
			// 		firstContent = $('div.tabs-content.active div.days-content').first();

			// 	if (dt == 1) {

			// 		$('.stages__item.active').removeClass('active').next().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').next().addClass('active');

			// 		$('.bg').css('transform', 'translate(341.25%,-50%)');

			// 	} else if (dt == 2) {

			// 		$('.stages__item.active').removeClass('active').next().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').next().addClass('active');

			// 		$('.bg').css('transform', 'translate(537%,-50%)');
			// 	} else if (dt == 3) {

			// 		$('.stages__item.active').removeClass('active').next().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').next().addClass('active');

			// 		$('.bg').css('transform', 'translate(733.75%,-50%)');
			// 	} else if (dt == 4) {

			// 		$('.stages__item.active').removeClass('active').next().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').next().addClass('active');

			// 		$('.bg').css('transform', 'translate(930%,-50%)');
			// 	} else if (dt == 5) {

			// 		$('.stages__item.active').removeClass('active');
			// 		$(firstItem).addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active');
			// 		$(firstContent).addClass('active');

			// 		$('.bg').css('transform', 'translate(145%,-50%)');
			// 	}
			// }

			// function rightSwipe(event) {
			// 	var dt = $('div.tabs-content.active .stages__item.active').attr('data-target'),
			// 		lastItem = $('div.tabs-content.active .stages__item').last(),
			// 		lastContent = $('div.tabs-content.active div.days-content').last();

			// 	if (dt == 1) {

			// 		$('.stages__item.active').removeClass('active');
			// 		$(lastItem).addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active');
			// 		$(lastContent).addClass('active');

			// 		$('.bg').css('transform', 'translate(930%,-50%)');

			// 	} else if (dt == 2) {

			// 		$('.stages__item.active').removeClass('active').prev().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').prev().addClass('active');

			// 		$('.bg').css('transform', 'translate(145%,-50%)');
			// 	} else if (dt == 3) {

			// 		$('.stages__item.active').removeClass('active').prev().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').prev().addClass('active');

			// 		$('.bg').css('transform', 'translate(341.25%,-50%)');
			// 	} else if (dt == 4) {

			// 		$('.stages__item.active').removeClass('active').prev().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').prev().addClass('active');

			// 		$('.bg').css('transform', 'translate(537%,-50%)');
			// 	} else if (dt == 5) {

			// 		$('.stages__item.active').removeClass('active').prev().addClass('active').closest('div.tabs-content.active').find('div.days-content.active').removeClass('active').prev().addClass('active');

			// 		$('.bg').css('transform', 'translate(733.75%,-50%)');
			// 	}
			// }
		}
}