	/*˭ ������ʲô�¼� ˭����ʲô*/
			window.onload=function(){  /*ҳ��������*/
			/*���µ�ԭ����ȡԪ�ط���querySelectorAll*/
				var oImg=document.querySelectorAll('img'); 
				var oWrap=document.querySelector('.wrap');
				var lastX,lastY,nowX,nowY,minusX,minusY,roY=0,roX=-10;
				var timer=null;
			/*����ÿһ��ͼƬ�ĽǶ� �ܽǶ�(360) / ����(15) = ��λ�Ƕ�*/
				var length=oImg.length;  /*��ȡimg������ ͳ��Ϊ����*/
				var Deg=360/length;      /*��λ�Ƕ�*/
				for(var i=0;i<length;i++){
				   oImg[i].style.transform='rotateY('+ i*Deg +'deg) translateZ(350px)';
				   oImg[i].style.transition='transform 1s '+(length-1-i)*0.2+'s'
				}
				mTop();
				window.onresize=mTop;
				function mTop(){
					 /*��ȡ��������ڿ��Ӹ߶�*/
					var wH=document.documentElement.clientHeight||document.body.clientHeight;
					oWrap.style.marginTop=(wH/2)-oWrap.offsetHeight+'px';
				}

				
				/*��קdrag ���� onmousedown �ƶ� onmousemove ̧�� onmouseup */
				document.onmousedown=function(event){ /*������꿪ʼ׼����ק*/
					event=event||window.event;			/*���������*/
					lastX=event.clientX;				/*�����ק��ʼʱ��x����*/
					lastY=event.clientY;				/*�����ק��ʼʱ��Y����*/
					clearInterval(timer);
					document.onmousemove=function(event){
						event=event||window.event;	
						nowX=event.clientX;             /*����ƶ�ʱ��x����*/
						nowY=event.clientY;				/*����ƶ�ʱ��y����*/
						minusX=nowX-lastX;              /*��ȡ����ƶ�����*/
						minusY=nowY-lastY;				/*��ȡ����ƶ�����*/
						roY+=minusX*0.2;				/*ͨ���ƶ���������ת�Ƕ�*/
						roX-=minusY*0.1;				/*ͨ���ƶ���������ת�Ƕ�*/
						oWrap.style.transform='rotateX('+roX+'deg) rotateY('+roY+'deg)' 
						lastX=nowX;						/*���³�ʼλ�ñ�֤ lastX ���������*/
						lastY=nowY;						/*���³�ʼλ�ñ�֤ lastY  */
					}
					document.onmouseup=function(){
						document.onmousemove=null;
						timer=setInterval(function(){
							/*��һ��Ħ��ϵ��,ÿһ�ζ�ʱ����������һ���*/
							minusX*=0.9;                     
							minusY*=0.9;
							roY+=minusX*0.2;				/*ͨ���ƶ���������ת�Ƕ�*/
							roX-=minusY*0.1;				/*ͨ���ƶ���������ת�Ƕ�*/
							oWrap.style.transform='rotateX('+roX+'deg) rotateY('+roY+'deg)';
							if(Math.abs(minusX)<0.1&&Math.abs(minusY)<0.1){
								/*���ƶ�������С��ʱ����ֹ��ʱ��ֹͣ����*/
								clearInterval(timer);    
							}
						},12);
					}
					return false;
				}
				
				
			
			}