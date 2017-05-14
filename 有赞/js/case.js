var $caseSlogan=$('.case-slogan'),
$shopAhead=$('.case-slogan .shop-ahead'),
$shopBack=$('.case-slogan .shop-back'),
$caseDot=$('.case-slogan .case-dot'),
$caseList=$('.case-slogan .case-list'),
$caseLi=$('.case-slogan .case-list li');
	var windowWidth=$(window).width();
	$caseLi.width(windowWidth);
	var imageWidth=$caseLi.width();
var caseLis=$caseList.children();
var imageCount=$caseList.children().length;
$caseList.append(caseLis.first().clone());
$caseList.prepend(caseLis.last().clone());
var imageRealCount=$caseList.children().length;
$caseList.css({
	left: -imageWidth,
	width: imageWidth*imageRealCount
})
var curIdx=0;
$shopAhead.on('click',function(){
	playPre();
})
$shopBack.on('click',function(){
	playNext();
})
$caseDot.find('li').on('click',function(){
	var $cur=$(this);
	var idx=$cur.index();
	console.log(idx)
	if(curIdx<idx){
		playNext(idx-curIdx);
	}else if(curIdx>idx) {
		playPre(curIdx-idx);
	}
})
var ifAnimate=false;
function playNext(idx){
		idx=idx||1;
	if(!ifAnimate){
		isAnimate=true;
	
		$caseList.animate({left:'-='+idx*imageWidth},'slow',function(){
			curIdx=(curIdx+idx)%imageCount;
			if(curIdx===0){
				$caseList.css({
					'left': -imageWidth
				})
			}
			isAnimate=false;
			setButtle();
		})
	}
}
function playPre(idx){
		idx=idx||1;
	if(!ifAnimate){
		isAnimate=true;
	
		$caseList.animate({left:'+='+idx*imageWidth},function(){
			curIdx=(imageCount+curIdx-idx)%imageCount;
			if(curIdx===(imageCount-1)){
				$caseList.css({
					'left': -imageWidth*imageCount
				})
			}
			isAnimate=false;
			setButtle();
		})
	}
}
function setButtle(){
	$caseDot.find('li').eq(curIdx).addClass('dot-active').siblings().removeClass('dot-active');
}
function autoPlay(){
	setInterval(function(){
		playNext();
	},5000)
}
// autoPlay();