$(document).ready(function(e) {
	$("#fangwei_button").click(function(){
		var b = $("#bianhao").val();
		if(b==""){
			alert("请输入防伪码");
			return false;
		}
		
		 $.getJSON(

                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: b },

                function(data){
			    if(data.CodeState==1){
		    		$("#jg_main_id").removeClass("jg_main2");
		    		$("#jg_main_id").addClass("jg_main");
		    		$("#fangwei_id").html("");
		    		$("#fangwei_id").html("您好，您购买的产品为正品！，请放心使用");
		    		$("#jg_main_id").show();
		    	}else if(data.CodeState>=2){
		    		$("#jg_main_id").removeClass("jg_main");
		    		$("#jg_main_id").addClass("jg_main2");
		    		$("#fangwei_id").html("");
		    		$("#fangwei_id").html(data.QueryResult);
		    		$("#jg_main_id").show();
		    	}else {
		    		$("#jg_main_id").removeClass("jg_main");
		    		$("#jg_main_id").addClass("jg_main2");
		    		$("#fangwei_id").html("");
		    		$("#fangwei_id").html("您好，您所查询的防伪码 不存在！请核实您所输入的防伪码！若输入正确，则您购买的产品为假货！");
		    		$("#jg_main_id").show();
		    	}
		    });
	});

	$(".chaxun2").mouseover(function(){
		$("#fangwei").addClass("chaxun2").removeClass("chaxun2a");
		$("#daili").addClass("chaxun1").removeClass("chaxun1a");
	});
	$(".chaxun1").mouseover(function(){
		$("#fangwei").addClass("chaxun2a").removeClass("chaxun2");
		$("#daili").addClass("chaxun1a").removeClass("chaxun1");
	});
    $(".chaxun_xl").hover(function(){
		$(this).find(".chaxun_xlin").show();
		},function(){$(this).find(".chaxun_xlin").hide();});
	 $(".chaxun_xl li").hover(function(){
		$(this).addClass("chaxun_xlin_lia");
		},function(){$(this).removeClass("chaxun_xlin_lia");});
	 $(".chaxun_xl li").click(function(){
		 $(".chaxun_xl span").text($(this).text());$(".chaxun_xlin").hide();
	 	 $("#type").attr("name",$(this).attr("txt"));
	 });	
});