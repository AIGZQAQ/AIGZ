/*
乐购商城首页js
2020-10-30
*/ 
$(function(){
    //首页大图片
    $("#bannerInner").tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:50,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    /*-----------------电子书-----------------*/
    $("#ebooks-banner").tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:18,//控制按钮宽度
        controlsH:8,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    
   /* 新书列表交互手风琴效果*/
   $('.ebooks .right-box ul > li').mouseenter(function(){
       //所有兄弟：隐藏详情页面,显示标题
       $(this).siblings().find('.desc').hide();//隐藏详情
       $(this).siblings().find('.ebooks-title').show();//显示标题

       //当前：隐藏标题 显示详情
       $(this).find('.ebooks-title').hide();
       $(this).find('.desc').show();
   });
   /*------------------服装-----------------*/
   $("#clothes-banner").tyslide({
    boxh:348,//盒子的高度
    w:426,//盒子的宽度
    h:348,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:18,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});
   /*------------------运动-----------------*/
   $("#sport-banner").tyslide({
    boxh:348,//盒子的高度
    w:426,//盒子的宽度
    h:348,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:18,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});
   /*------------------童装-----------------*/
   $("#children_wear_banner").tyslide({
    boxh:348,//盒子的高度
    w:426,//盒子的宽度
    h:348,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:18,//控制按钮宽度
    controlsH:5,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
});
   // 推广商品切换
       $('.stationery .top-stat ul li').mouseenter(function(){
           $(this).addClass('active').siblings().removeClass('active')
       /*内容切换*/
       var index = $(this).index(); //0=>left:0*1170
       //左右移动
       $('.stationery .title-bottom .inner-box').animate({
           'left': -index * 1170
       });
   });
    /*返回顶部*/
	/* 绑定滚动事件*/
	$(document).scroll(function(){
		//获取距离顶部的位置
	    var topDistance = $('html,body').scrollTop();
		//判断
		if(topDistance > 500){
			$('.backtotop').fadeIn();
		}else{
			$('.backtotop').fadeOut();
		}
	})
	    //返回顶部功能
		$('.backtotop').click(function(){
          $('html,bady').animate({
              scrollTop:0
              
          },200)
          
		});
});