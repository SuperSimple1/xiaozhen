$(function(){
    //��껬��������Ч��
    $('.nav_in ul li').hover(function(){
        $(this).addClass('current').siblings().removeClass()
    },function(){
        $(this).removeClass('current')
    })
    
    //��Ļ������������
    function gun(){
        var num=$('#nav').offset().top;
        var win=$(window).height();
        
        $(window).scroll(function(e) {
            var top=$(window).scrollTop();
            //����$('#nav').html(top)
            if( top>num ){  
                $('#nav').css({ position:'fixed',top:0})
            }else{  
                $('#nav').css('position','static')
            }
        });
        
        //������Ŀ��Ӧ�߶�
        $('.nav_in ul li:nth-of-type(1)').click(function(e) {
            $('html,body').animate({ scrollTop:0 },500)
        });
        $('.nav_in ul li:nth-of-type(2)').click(function(e) {
            $('html,body').animate({ scrollTop:1150 },500)
        });
        $('.nav_in ul li:nth-of-type(3)').click(function(e) {
            $('html,body').animate({ scrollTop:3047 },500)
        });
        $('.nav_in ul li:nth-of-type(4)').click(function(e) {
            $('html,body').animate({ scrollTop:4447 },500)
        });
        $('.nav_in ul li:nth-of-type(5)').click(function(e) {
            $('html,body').animate({ scrollTop:5136 },500)
        });
        $('.nav_in ul li:nth-of-type(6)').click(function(e) {
            $('html,body').animate({ scrollTop:6512 },500)
        });
        $('.nav_in ul li:nth-of-type(7)').click(function(e) {
            $('html,body').animate({ scrollTop:7538 },500)
        });
        $('.nav_in ul li:nth-of-type(8)').click(function(e) {
            $('html,body').animate({ scrollTop:7973 },500)
        });
        $('.nav_in ul li:nth-of-type(9)').click(function(e) {
            $('html,body').animate({ scrollTop:9076 },500)
        });
        
        
    }
    gun()
})