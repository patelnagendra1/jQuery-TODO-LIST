
// "On" work on future element but only work on those which are initialy on page when it was lodaded
//that is why we use "li" inside "ul" bcz "ul" is initially but when we add future todos "li" will be 
//new but "ul" is old insted of "ul" we can also use "div".

$("ul").on("click", " li" ,function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	
	// stop from going to li bcz span is inside li
	event.stopPropagation();
})

$("input[type='text'").keypress(function(event){
	if((event.which)===13)
	{
		var newtodo= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newtodo + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})
