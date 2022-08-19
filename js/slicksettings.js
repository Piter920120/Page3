$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
            
        }},
        {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
