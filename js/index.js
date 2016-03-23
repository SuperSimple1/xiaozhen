$(function() {

 //最新资讯图片轮换 start

    auto();
    animates();
//最新资讯图片轮换 end

	

});

//最新资讯图片轮换 start
var i = -1;
var offset = 2500;
var timer = null;
function auto(){
 var n = $("#newsListUl li").length-1;
 i++;
 if(i > n){
  i = 0;
 }
 slide(i);
 timer = window.setTimeout(auto, offset);
}
function slide(i){
  $(".newShowPic:animated").stop(false,true);
  $(".newShowPic").animate({top: -240*i+"px"});
  $("#newsListUl .li" + i).addClass("curr").siblings().removeClass("curr");

}
function animates(){
 $("#newsListUl li").each(function(){
  $(this).hover(function(){
   var num = $(this).index();
   if(timer){
    clearTimeout(timer);
    i = $(this).prevAll().length;
              slide(i);
    $(this).addClass("curr").siblings().removeClass("curr");
    $(".newShowPic").animate({top: -240*num+"px"});
   }
  },function(){
   timer = window.setTimeout(auto, offset);
   $(".newShowPic").dequeue();
  })
 })
 $(".newShowPic").hover(function(){
  clearTimeout(timer);
 },function(){
  timer = window.setTimeout(auto, offset);
 })
}

//最新资讯图片轮换 end

/*拍摄花絮右侧轮番广告start*/

/*拍摄花絮右侧轮番广告end*/
