
	

	var width = $(window).width();
	var height = $(window).height();

	var vidWidth = width * 1.5;
	var vidHeight = height * 1.5;

	var widthDiff = vidWidth - width;
	var overflow = widthDiff / 2;

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;

	var desktop = true;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		desktop = false;
	}


	function onYouTubeIframeAPIReady() {
		if (desktop){
			player = new YT.Player('player', {
			height: vidHeight,
			width: vidWidth,
			startTime: 10,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});

		}
		else{
			return;
		}
	}

		$('.video').css({
			left: '-' + overflow
		});

	   function onPlayerReady(event) {


		player.cueVideoById('evoPSdJopvU', 5);
		player.playVideo();
	  }

	  function onPlayerStateChange(event){
		if (player.getPlayerState() == 0){
			player.cueVideoById('evoPSdJopvU', 5);
			player.playVideo();
		}
	  }

	  $('.wrapper').mousemove(function(e){
	  	$('.big-cursor').css('left', e.clientX - 70).css('top', e.clientY + 15);
	  });







