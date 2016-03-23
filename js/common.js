$(function(){
/*1000宽度*/
fn_guart.show_li_hover()
})
/*屏幕小宽度*/

function show_li_enter(){
	var obj=$(this);
	$(this).find(".filter").fadeIn(500);  
	$(this).find(".real-img").stop().animate({"width":"106%","height":"106%","marginLeft":"-3%","marginTop":"-3%"},300,function(){
		if($(".show-view-more b")){
			obj.find(".show-view-bor01,.show-view-bor04").stop().animate({"left":"0"},600),
			obj.find(".show-view-bor02,.show-view-bor03").stop().animate({"top":"0"},600)
			obj.find(".show-bottom-bg").stop().fadeIn(400)
		}
	})						
}
function show_li_out(){
	var obj=$(this);
	$(this).find(".filter").stop().fadeOut(300);  
	$(this).find(".real-img").stop().animate({"width":"100%","height":"100%","marginLeft":"0","marginTop":"0"},300,function(){
		if($(".show-view-more b")){
			obj.find(".show-view-bor01").stop().animate({"left":"-150px"},600),
			obj.find(".show-view-bor02").stop().animate({"top":"-40px"},600),
			obj.find(".show-view-bor03").stop().animate({"top":"40px"},600),
			obj.find(".show-view-bor04").stop().animate({"left":"150px"},600)
			obj.find(".show-bottom-bg").stop().fadeOut(400)
		}
	})	
}				
 var fn_guart={
	initial:function(){/*初始函数*/
		console.warn("%c%s","color:#666; background:yellow; font-size: 14px;","古摄影艺术写真馆为古摄影唯一艺术写真网站，本站所有样片、客照未经允许转载或用于任何商业用途将承担法律责任");
		console.log("%c%s","color:#bbb; background:; font-size: 11px;","如果您在浏览本站时，有任何意见或建议，请联系QQ—462482529，或直接致电18215627345 (U◕‿‿◕U）");
	},
	show_li_hover:function(){
		if($(".show li")){
			$(".show li").live("mouseenter",show_li_enter).live("mouseleave",show_li_out);
		}
	},
	activity_time_out:function(){
		if($(".activeInfo-data")){
			var out_time;
			var now_time;
			var tody_month;
			var tody_day;
			for(i=0;i<$(".activeInfo-data").length;i++){
				out_time=$(".activeInfo-data").eq(i).text();
				out_time=parseInt(Date.parse(out_time));
				today_month=new Date().getMonth()+1;
				today_day=new Date().getDate();
				if(today_month<10){today_month="0"+today_month}
				if(today_day<10){today_day="0"+today_day}
				now_time=new Date().getFullYear()+"-"+today_month+"-"+today_day;
				
				now_time=parseInt(Date.parse(now_time));
				if($(".activeInfo-data").eq(i).text()==""){out_time=parseInt(now_time)+1}/*不定时间，则结束时间始终比当前时间大*/
				if(out_time-now_time<0){
					$(".activeUl li").eq(i).addClass("time-out").find("a").attr({"href":"javascript:;","target":"_self","style":"cursor:default;"});
					$(".activeUl li").eq(i).find("p:last").css({"color":"pink"}).text("本活动已经结束"); 
					$(".activeUl li").eq(i).find(".activeInfo").css({"background":"#7a797f"});
				}
			}
		}
	},
	back_top:function(){
		backTop()
		$(window).scroll(backTop);
		function backTop(){
			var wScrollTop=$(window).scrollTop();
			if(wScrollTop>0){
			$(".allBackTop").attr({"style":"display:block;"});
			}if(wScrollTop=="0"){$(".allBackTop").hide()}
		}	
		$(".allBackTop").click(function(){
			$("html,body").animate({"scrollTop":"0"});
		}).hover(
		function(){
			$(this).find(".bg").stop().animate({"opacity":"0.8"});
			$(this).find(".bg02").stop().animate({"opacity":"0"});
		},
		function(){
			$(this).find(".bg").stop().animate({"opacity":"0"});
			$(this).find(".bg02").stop().animate({"opacity":"0.4"});
		}
		)
	},
	news_li_bg_special:function(){
		for(i=0;i<$(".article li").length;i++){
			var array_nums=[1,2,5,6,9,10,13,14,17,18];
			for(o=0;o<array_nums.length;o++){
				if(i==array_nums[o]){
					$(".article li").eq(i).addClass("special-bg")
				}
			}
		}
	},
	
	

		
}








 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 








