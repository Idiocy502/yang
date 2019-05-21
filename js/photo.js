	/*谁 触发了什么事件 谁做了什么*/
			window.onload=function(){  /*页面加载完成*/
			/*最新的原生获取元素方法querySelectorAll*/
				var oImg=document.querySelectorAll('img'); 
				var oWrap=document.querySelector('.wrap');
				var lastX,lastY,nowX,nowY,minusX,minusY,roY=0,roX=-10;
				var timer=null;
			/*计算每一个图片的角度 总角度(360) / 数量(15) = 单位角度*/
				var length=oImg.length;  /*获取img的数量 统称为长度*/
				var Deg=360/length;      /*单位角度*/
				for(var i=0;i<length;i++){
				   oImg[i].style.transform='rotateY('+ i*Deg +'deg) translateZ(350px)';
				   oImg[i].style.transition='transform 1s '+(length-1-i)*0.2+'s'
				}
				mTop();
				window.onresize=mTop;
				function mTop(){
					 /*获取浏览器窗口可视高度*/
					var wH=document.documentElement.clientHeight||document.body.clientHeight;
					oWrap.style.marginTop=(wH/2)-oWrap.offsetHeight+'px';
				}

				
				
				



                
				
			
			}
            var event2={
                        x:-10,
                        y:0
                    }
	    setTimeout(function(){ 
	    setInterval(()=>{ /*按下鼠标开始准备拖拽*/
		    console.log(111)
		    event2.y-=1;
		    var oWrap=document.querySelector('.wrap');
			oWrap.style.transform='rotateX('+event2.x+'deg) rotateY('+event2.y+'deg)' 
		},100)
	    }, 10000);
            
