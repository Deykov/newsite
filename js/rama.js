$(function () {
  $('.rama').fotorama({
		width: '100%',
		height: '700px', //Это её высота, а зарезервировано место в main.css
		allowfullscreen: false,
		arrows: true,
		click: false,
		swipe: true,
		loop: true,
		hash: true,
		keyboard: true,  
		nav: 'thumbs',
		thumbBorderWidth: '4',
		BorderColor: '#ff2222',
	})
});
