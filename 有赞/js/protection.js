var $protectionTitle=$(".protection-slogan"),
titleTop=$protectionTitle.offset().top,
$protectionLogan=$(".protection-logan");
$(window).on('scroll',function(){
	var windowTop=$(window).scrollTop();
	if(windowTop>titleTop){
		$protectionTitle.addClass('protection-fix');
		$protectionLogan.addClass('logan-change');
	}else {
		$protectionTitle.removeClass('protection-fix');
		$protectionLogan.removeClass('logan-change');
	}
	
})





