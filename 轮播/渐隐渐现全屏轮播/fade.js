(function(){
function Rotation($element,interval){
		this.$element=$element;
		this.interval=interval;
		this.init();
		this.bind();
		this.play(0);
		this.setTime();
	}
Rotation.prototype={
		init: function(){
			var $imgCt=this.$imgCt=this.$element.children().first(),
					$buttonPre=this.$buttonPre=this.$element.children().eq(1),
					$buttonNext=this.$buttonNext=this.$element.children().eq(2),
					$bullet=this.$bullet=this.$element.children().last();
					$image=this.$image=$imgCt.find('img');
				
					this.imgCount=$imgCt.children().length;
					// this.windowWidth=$(window).width();
					// $imgCt.children().width(this.windowWidth);
					// $image.width(this.windowWidth);
					$image.eq(0).attr('src',($image.eq(0).attr('data-image')));
					this.imgWidth=$image.width();
					// this.windowWidth=$(window).width();
					this.curIdx=0;
					this.isAnimate=false;
		},
		bind: function(){
			var _this=this;
			this.$buttonPre.on('click',function(e){
				 e.preventDefault();
				_this.play((_this.imgCount+_this.curIdx-1)%_this.imgCount);
			})
			this.$buttonNext.on('click',function(e){
				 e.preventDefault();
					_this.play((_this.curIdx+1)%_this.imgCount);
			})
			this.$bullet.children().on('click',function(){
				var $cur=$(this);
				var idx=$cur.index();
				_this.play(idx);
			})
		},
		play: function(idx){
				var _this=this;
				if(this.isAnimate) return;
				this.isAnimate=true;
				this.$imgCt.children().eq(this.curIdx).fadeOut(500);
				this.$imgCt.children().eq(idx).fadeIn(500,function(){
					_this.isAnimate=false;
				})
				this.curIdx=idx;
				this.setImage();
				this.setButtle();
		},
		setImage: function(){
			var dataImage=this.$image.eq(this.curIdx).attr('data-image');
			this.$image.eq(this.curIdx).attr('src',dataImage);
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
				_this.play((_this.curIdx+1)%_this.imgCount);
			},_this.interval)
		}
	}
 $.fn.carousel=function(time){
	 this.each(function(){
		 new Rotation($(this),time);
	 })
 }
})()


		