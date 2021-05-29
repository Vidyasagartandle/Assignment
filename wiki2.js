$( document ).ready(function() {
	 $("#closeLogo").on('click', function() {
		$(".top").hide();
		$(".middle").hide();
		$(".bottom").hide();
		$("#closeLogo").hide();
	});
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "http://api.weatherstack.com/current?access_key=cd03fc5659d29b727c9061e2da484584&query=New%20York",
	"method": "GET",
};

$.ajax(settings).done(function (response) {
	$("#time").text("time : " + response.current.observation_time);
	$("#country").text("country : " + response.location.country);
	$("#humidity").text("humidity : " + response.current.humidity);
	$("#precip").text( "precip : " + response.current.precip);
	$("#pressure").text("pressure : " +  response.current.pressure);
	$("#temperature").text("pressure : " +  response.current.pressure);
	$("#weather_descriptions").text("weather_descriptions : " + response.current.weather_descriptions[0]);
	$("#wind_dir").text("wind direction : " + response.current.wind_dir);
});
	
	  $('.card').click(function(e){
    e.preventDefault();
    
    var thisCard = $(this);
    
    var topCard = $('.card.top');
    var midCard = $('.card.middle');
    var botCard = $('.card.bottom');
    
    if (thisCard.hasClass('top'))
    {
      topCard.removeClass('top').addClass('bottom');
      midCard.removeClass('middle').addClass('top');
      botCard.removeClass('bottom').addClass('middle');
    }
    else if (thisCard.hasClass('bottom'))
    {
      topCard.removeClass('top').addClass('middle');
      midCard.removeClass('middle').addClass('bottom');
      botCard.removeClass('bottom').addClass('top');
    }
  });
});


