(function(){
function Rotation($element,interval){
		this.$element=$element;
		this.interval=interval;
		this.init();
		this.bind();
		this.setTime();
	}
Rotation.prototype={
		init: function(){
			var $imgCt=this.$imgCt=this.$element.children().first(),
					$buttonPre=this.$buttonPre=this.$element.find('a').first(),
					$buttonNext=this.$buttonNext=this.$element.find('a').last(),
					$bullet=this.$bullet=this.$element.children().last();
					 var $firstImg = $imgCt.children().first(),
        			$lastImg = $imgCt.children().last();
					this.imgCount=$imgCt.children().length;
					
					this.imgWidth=$lastImg.width();
					this.windowWidth=$(window).width();
					this.curIdx=0;
					this.isAnimate=false;
					
					$imgCt.append($firstImg.clone());
					$imgCt.prepend($lastImg.clone());
					
					this.imgRealCount=$imgCt.children().length;
					$imgCt.width(this.imgRealCount*this.imgWidth);
					
			$imgCt.css({
				left: -this.imgWidth,
				width: this.imgWidth*this.imgRealCount
			})
		},
		bind: function(){
			var _this=this;
			this.$buttonPre.on('click',function(e){
				 e.preventDefault();
				_this.playPre();
			})
			this.$buttonNext.on('click',function(e){
				 e.preventDefault();
				_this.playNext();
			})
			this.$bullet.children().on('click',function(){
				var $cur=$(this);
				var idx=$cur.index();
				if(idx>_this.curIdx){
					_this.playNext(idx-_this.curIdx)
				}else if(idx<_this.curIdx){
					_this.playPre(_this.curIdx-idx)
				}
			})
		},
		playPre: function(idx){
			var _this=this;
			idx=idx||1;
			if(!this.isAnimate){
			this.isAnimate=true;
			this.$imgCt.animate({left:'+='+this.imgWidth*idx},function(){
				_this.curIdx=_this.curIdx-idx;
				if(_this.curIdx<0){
					_this.$imgCt.css({
						left: -_this.imgWidth*_this.imgCount
					})
					_this.curIdx=_this.imgCount-1;
				}
					_this.setButtle();
				
			})
			this.isAnimate=false;
			}
		},
		playNext: function(idx){
			var _this=this;
			idx=idx||1;
			if(!this.isAnimate){
			this.isAnimate=true;
			this.$imgCt.animate({left:"-="+this.imgWidth*idx},function(){
				_this.curIdx=_this.curIdx+idx;
				if(_this.curIdx===_this.imgCount){
					_this.$imgCt.css({
						left: -_this.imgWidth
					})
					_this.curIdx=0;
				}
		
				_this.setButtle();
			})
					this.isAnimate=false;
			}
		},
		setButtle: function(){
			this.$bullet.children()
                .removeClass('active')
                .eq(this.curIdx)
                .addClass('active')
		},
		setTime: function(){
			var _this=this;
			setInterval(function(){
				_this.playNext();
			},_this.interval)
		}
	}

	$.fn.carousel=function(time){ 
		 this.each(function(){
			new Rotation($(this),time);
		 })
	 }
})()