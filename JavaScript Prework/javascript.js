$("#buttonGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#buttonBlue").on("click", function() {
	$("#box").css("background-color", "blue")
})

$("#buttonFade").on("click", function(){
	$("#box").css("opacity", "-=0.25")
})

$("#buttonReset").on("click", function(){
	$("#box").css("background-color", "orange");
	$("#box").css("opacity", "1.0");
	$("#box").animate({height:"150px", width:"150px"}, "fast");
})