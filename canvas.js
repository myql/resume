function draw() {
			var canvas=document.getElementById('canvas');
			if(canvas.getContext){
				var ctx=canvas.getContext('2d');
				ctx.font = "12px 'Microsoft Yahei',sans-serif";
				ctx.strokeStyle="#ddd";
				var arcX=400,arcY=400,radius=300;
				var sides=8;
				var e=180/sides,
				x=new Array(),
				y=new Array(),
				x1=new Array(),
				y1=new Array();
				var num=Math.floor(radius/5);
				for(var i=0;i<=sides;i++){
					x[i]=new Array();
					x1[i]=new Array();
					y[i]=new Array();
					y1[i]=new Array();
				}
				function setText(){
					ctx.beginPath();
					ctx.fillStyle="rgb(43,176,212)";
					ctx.strokeStyle="rgb(43,176,212)";
					ctx.fillRect(250,50,15,15);
					ctx.strokeText("兴趣",270,62);
					ctx.beginPath();
					ctx.fillStyle="rgb(97,193,145)";
					ctx.strokeStyle="rgb(97,193,145)";
					ctx.fillRect(550,50,15,15);
					ctx.strokeText("能力",570,62);
				}
				function drawEdge(){
				ctx.beginPath();
					for(radius1=radius;radius1>0;radius1=radius1-num){
				ctx.moveTo(arcX+radius1*Math.cos(0),arcY+radius1*Math.sin(0))
					for(var i=0;i<=sides;i++){
						x[i][radius1]=arcX+radius1*Math.cos(2*Math.PI/sides*i)
						y[i][radius1]=arcY+radius1*Math.sin(2*Math.PI/sides*i)
					ctx.lineTo(x[i][radius1],y[i][radius1]);
					}
				}
				ctx.closePath();
				ctx.stroke();
				}

				function drawLine(){
				ctx.beginPath();
					for(var i=0;i<=sides;i++){
						for(radius1=radius;radius1>0;radius1=radius1-num){
							ctx.moveTo(arcX,arcY)
							x1[i][radius1]=arcX+radius1*Math.cos(2*Math.PI/sides*i)
							y1[i][radius1]=arcY+radius1*Math.sin(2*Math.PI/sides*i)
							ctx.lineTo(x1[i][radius1],y1[i][radius1]);
					}
				}
				ctx.closePath();
				ctx.stroke();
				}
				function fillHobby(){
					ctx.beginPath();
					ctx.fillStyle="rgba(43,176,212,0.4)"
					ctx.strokeStyle="rgba(43,176,212,0.8)"
					ctx.moveTo(x[0][radius],y[0][radius])
					ctx.lineTo(x1[1][radius-num]+15,y1[1][radius-num]+15)
					ctx.lineTo(x1[2][radius-num*2],y1[2][radius-num*2])
					ctx.lineTo(x1[3][radius-num*2]-15,y1[3][radius-num*2]+15)
					ctx.lineTo(x1[4][radius-num]-20,y1[4][radius-num])
					ctx.lineTo(x1[5][radius-num],y1[5][radius-num])
					ctx.lineTo(x1[6][radius-num],y1[6][radius-num])
					ctx.lineTo(x1[7][radius-num],y1[7][radius-num])
					ctx.closePath()
					ctx.stroke()
					ctx.fill()					
				}
				function fillSkills(){
					ctx.beginPath();
					ctx.fillStyle="rgba(97,193,145,0.4)"
					ctx.strokeStyle="rgba(97,193,145,0.8)"
					ctx.moveTo(x[0][radius-num],y[0][radius-num])
					ctx.lineTo(x1[1][radius-num],y1[1][radius-num])
					ctx.lineTo(x1[2][radius-num*2],y1[2][radius-num*2]-15)
					ctx.lineTo(x1[3][radius-num*2],y1[3][radius-num*2])
					ctx.lineTo(x1[4][radius-num*2]-20,y1[4][radius-num*2])
					ctx.lineTo(x1[5][radius-num*3],y1[5][radius-num*3])
					ctx.lineTo(x1[6][radius-num],y1[6][radius-num]-20)
					ctx.lineTo(x1[7][radius-num]-15,y1[7][radius-num]+15)
					ctx.closePath()
					ctx.stroke()
					ctx.fill()
					ctx.strokeStyle="#000"
					ctx.strokeText("javascript",x[0][radius]+10,y[0][radius]);
					ctx.strokeText("HTML",x[6][radius]-10,y[6][radius]-10);
					ctx.strokeText("CSS",x[7][radius]+10,y[7][radius]);
					ctx.strokeText("jQuery",x[1][radius]+10,y[1][radius]+10);
					ctx.strokeText("Bootstrap",x[2][radius]-26,y[2][radius]+20);
					ctx.strokeText("Vue.js",x[3][radius]-50,y[3][radius]);
					ctx.strokeText("CSS3",x[4][radius]-40,y[4][radius]);
					ctx.strokeText("Node.js",x[5][radius]-56,y[5][radius]);

				}
				setText()
				drawEdge()				
				drawLine()
				fillHobby()
				fillSkills()
			}
		}
		draw();