var $functionList=$(".function-list"),
$detailTitle=$(".function-detail .detail-title li"),
$detailTitles=$(".function-detail .detail-slogan");
var array=new Array();
$(window).on('scroll',function(){
	var windowTop=$(window).scrollTop(),
	detailTop=$detailTitles.offset().top;
	if(windowTop>detailTop) {
		$detailTitles.addClass('detail-fix');
	}else if(windowTop<540){
		$detailTitles.removeClass('detail-fix');
	}
	$detailTitle.on('click',function(){
		var $cur=$(this);
		$detailTitles.find('a').removeClass('active');
		$cur.find('a').addClass('active');
		var index=$cur.index();
		console.log(index);
		var windowTop=$(window).scrollTop();
		var functionTop=$functionList.eq(index).offset().top;
		$(window).scrollTop(functionTop);
	})
	for(var i=0;i<9;i++){
		var functionTop=$functionList.eq(i).offset().top;
		array[i]=functionTop;
		if(windowTop>=(array[i])){
			$detailTitles.find('a').removeClass('active');
			$detailTitles.find('a').eq(i).addClass('active');
		}
	}
})
