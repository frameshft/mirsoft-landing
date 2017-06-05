$(document).ready( function() {
	var clickEvent = false;

	var myCarousel = $('#veonCarousel')
		, carouselLinkedProjects = $('.carousel-linked-projects')
		, allSlides = $('#allSlides').find('div.item')
		// invoke the carousel
		$('#veonCarousel').carousel({
		  interval: 3000
		});

	carouselLinkedProjects.find(' li > a').click(function() {
    carouselLinkedProjects.find('li').removeClass('active')
    $(this).closest('li').addClass('active')

    var currentProject = $(this).data('project')

     myCarousel.find('.item').remove()
		 myCarousel.find('.carousel-inner').empty()
     $slides = allSlides.filter( function () {
          return $(this).data('project') == currentProject
     })
		 $slides.removeClass('active')
		 $slides.removeClass('next')
		 $slides.removeClass('left')
		 $slides.removeClass('prev')
		 $slides.removeClass('right')
     $slides.eq(0).addClass('active')

     //console.log(this, currentProject , $slides )


     myCarousel.find('.carousel-inner').append($slides)

		 myCarousel.carousel("pause").removeData().carousel(0)
		 myCarousel.carousel({
			 interval: false
		 });
    return false
	});

	$('#advantagesCarousel').on('click', '.adv-ctrl a', function() {
			clickEvent = true;
			$('.adv-ctrl li').removeClass('active');
			$(this).parent().addClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.adv-ctrl').children().length -1;
			var current = $('.adv-ctrl li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.adv-ctrl li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
});
