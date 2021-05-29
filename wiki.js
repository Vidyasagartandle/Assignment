$(document).ready(function() {
	$("p:nth-child(2)").next().prepend('<img id="theImg" src="New_Logo_AD.jpg" style="height:40%;width: 15%;"/><img src="iconclose.jpg" id="closeLogo"><br>');
    $("#closeLogo").on('click', function() {
	$("#theImg").hide();
	$("#closeLogo").hide();
	});
});