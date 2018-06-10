
var date1 = new Date();
var t=date1.getSeconds()*1000;
var myminute=setInterval(function(){
	var arr=[3,11,12,13,17,16,15,8,7,6,1,2];
	var t1=((t-(t%5000))/5000+11)%12;
	var div1=document.getElementsByTagName("div")[arr[t1]];
	if(t%1000=="0"){
		div1.style.backgroundColor="red";
	}else{
		div1.style.backgroundColor="white";
	}
	t=t+500;
	console.log(myminute);
},500);

var mytime=setInterval(function(){
				
				//1.获取当前时间
				var date=new Date();
				var hour = date.getHours();
				var minute = date.getMinutes();
				var second = date.getSeconds();
				
				//2.拼接时间
				var time = hour + ":" + minute + ":" + second;
				
				//3.向p标签中设置内容
				var div= document.getElementsByTagName("div")[9];
				div.style.lineHeight="300px";
				div.style.textAlign="center";
				div.innerText = time;
			},1000);
		
