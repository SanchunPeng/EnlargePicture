$(function(){
	var _index=0;
	var herf="";
	var len=$(".box a").length;
	$(".box a").on("click",function(){
		_index=$(this).index();
		$(".bgGray").fadeIn(100);
		$(".showBiggerImg").fadeIn(100);
		herf=$(this).find("img").attr("src");
		$(".showBiggerImg").attr("src",herf);
	});
	$(".bgGray").on("click",function(){
		$(this).fadeOut(100);
		$(".showBiggerImg").fadeOut(100);
	});
	$(".prev").mouseover(function(){
		$(this).attr("src","img/prev_hover.png");
	}).mouseout(function(){
		$(this).attr("src","img/prev.png");
	});
	$(".prev").on("click",function(){
		_index--;
		if(_index<0){
			_index=len-1;
		}
		herf=$(".box a").eq(_index).find("img").attr("src");
		$(".bigImage").attr("src",herf);
	});
	$(".next").mouseover(function(){
		$(this).attr("src","img/next_hover.png");
	}).mouseout(function(){
		$(this).attr("src","img/next.png");
	})
	$(".next").on("click",function(){
		_index++;
		if(_index>len-1){
			_index=0;
		}
		herf=$(".box a").eq(_index).find("img").attr("src");
		$(".bigImage").attr("src",herf);
	})
});
