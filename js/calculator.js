	var start="0";
	var start1="";
	var div;
	var div1;
	var div2;
	var div3;
	var div4;
	var arr="0";
window.onload=function(){
	 div=document.getElementsByTagName("b")[0];
	 div1=document.getElementsByTagName("b")[1];
	 div2=document.getElementsByTagName("b")[2];
	 div3=document.getElementsByTagName("b")[3];
	 div4=document.getElementsByTagName("b")[4];
}
function num(obj){
	var val=obj.innerText;
	//判断符号位是否是+—*/
	if(arr=="0"){
		//符号为是0，说明是键入的是第一个数
		//判断是否计算过但是未清零，如果为清零则清零
		if(div3.innerText=="="){
			return0();
		}
		if(div.innerText.indexOf(".")=="-1"){
			//第一个数没有小数点
			//判断是否未第一次输入
			if(start=="0"){
				//第一次输入值
				if(val=="."){
					//若输入小数点，则显示0.
					start="0.";
			    }else{
			    	//若输入的不是小数点，则直接显示键入的值
					start=val;	
			    }	
			}else{
				//不是第一次键入，则直接显示
				start=div.innerText+val;
			}
		}else{
			//输入的数含有小数点
			if(val!="."){
				//如果键入的是其他值，则直接显示
				start=div.innerText+val;	
			}	
		}
		div.innerText=start;
	}else{
		//符号位不是零，说明输入的是第二个数
		if(div2.innerText.indexOf(".")==-1){
			//如果没有输入小数点
			if(start1=="0"){
				//第一次键入如果是小数点则为0.，否则直接显示
				if(val=="."){
					start1="0.";
				}else{
					start1=val;
				}		
			}else{
				start1=start1+val;
			}		
		}else{
			if(val!="."){
				start1=start1+val;
			}	
		}
		div2.innerText=start1;
	}
}
function return0(){
	//清零
	start="0";
	start1="0";
	arr="0";
	div.innerText="0";
	div1.innerText="";
	div2.innerText="";
	div3.innerText="";
	div4.innerText="";
}
function cal(obj){
	//计算，若果计算位不是零，则说明是连续计算，此时需要先将前两个结果计算出来，值赋给start
	if(arr!="0"){
		iequal();
	}
	//第一个值显示在第一个位置div，显示符号位，其余位置不显示
	div.innerText=start;
	div1.innerText=obj;
	arr=obj;
	div2.innerText="";
	div3.innerText="";
	div4.innerText="";
}
function suqare(){
	if(arr=="0"){
		//如果平方在第一个数
		div.innerText=start+"²";
		start=start*start;
		div1.innerText="";
		div2.innerText="";
		div3.innerText="";
		div4.innerText="";	
	}else{
		div2.innerText=start1+"²";
		start1=start1*start1;
		div3.innerText="";
		div4.innerText="";
	}	
}
function iequal(){
		if(arr=="+"){
			start=parseFloat(start)+parseFloat(start1);
		}	
		if(arr=="-"){
			start=start-start1;
		}
		if(arr=="*"){
			start=start*start1;	
	 	}
		if(arr=="/"){
			start=start/start1;	
		}
		if(start==""){
			start="0";
			
		}
		div3.innerText="=";
		div4.innerText=start;
		
		
		arr="0";
		start1="";	
}
function rem(){
	if(div3.innerText!="="){
		if(arr=="0"){
			if(div.innerText.length!=0){
				div.innerText=div.innerText.substring(0,div.innerText.length-1);
				start=div.innerText;
			}
		}else{
			if(div2.innerText.length!=0){
				div2.innerText=div2.innerText.substring(0,div2.innerText.length-1);
				start1=div2.innerText;
			}
		}		
	}
}
