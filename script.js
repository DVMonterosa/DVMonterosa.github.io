

//$(function () {
//	var way = false;
//	var timer;
//	var percent = 0;
//	var progress = $('.progress');
//
//	function renderBar() {
//		progress.width(percent + '%');
//	}
//
//	function inc() {
//		percent += .5;
//
//		if (percent <= 100) {
//			renderBar();
//		} else {
//			tadam()
//		}
//	}
//
//	function dec() {
//		percent -= .5;
//
//		if (percent >= 0) {
//			renderBar();
//		} else {
//			tadam()
//		}
//	}
//
//	function tadam() {
//		clearInterval(timer);
//
//		if (way = !way) {
//			timer = setInterval(inc, 50)
//		} else {
//			timer = setInterval(dec, 50)
//		}
//	}
//
//	tadam();
//});


$(function () {
	//var myScroll = new IScroll('#wrapper',{
	//	mouseWheel: true,
	//	scrollbars: true,
	//	bounce: true,
	//	//interactiveScrollbars: true,
	//	useTransform: true,
	//	disablePointer: true,
	//	disableTouch: true
	//});


	var percent = 0;
	var progress = $('.progress');
	//
	function renderBar() {
		progress.width(percent + '%');
	}

	function inc() {
		percent = 100;
		renderBar();
		setTimeout(dec, 10000)
	}

	function dec() {
		percent = 0;
		renderBar();
		setTimeout(inc, 10000)
	}

	inc();
});

//$(function(){
//	var iframe = $('#frames');
//	debugger
//
//	iframe.on('load',function (e){
//		iframe.on('scroll', function(e){
//			debugger
//		})
//	});
//});

