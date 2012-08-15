;(function (exports) {
	'use strict';

	var video = document.querySelector('video'),
		body = document.body;

	exports.URL = exports.URL || exports.webkitURL;
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

	function onFailSoHard () {
		console.log('Fail!');
	};

	navigator.getUserMedia({'video': true, 'audio': false}, function (stream) {
		video.src = exports.URL.createObjectURL(stream);
	}, onFailSoHard);

	exports.unload = function () {
		body.removeChild(video);
	};

	document.addEventListener("click", function () {
		video.webkitEnterFullScreen();
	});

}(this));