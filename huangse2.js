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
	$("#daili_button").click(function(){
		var c = $("#shouji").val();
		/* if(c==""){
			alert("请输入代理商号码");
			return false;
		}
		
		if(c=="king1072"){
			$("#jg_main_id").removeClass("jg_main2");
		    		$("#jg_main_id").addClass("jg_main");
		    		$("#fangwei_id").html("");
		    		
		    		$("#fangwei_id").html("王大明是葡萄牙Huang's Elite授权的(全国官方总代理),请放心购买！");
		    		$("#jg_main_id").show();
			return false;
		}else{
			$("#jg_main_id").removeClass("jg_main");
		    		$("#jg_main_id").addClass("jg_main2");
		    		$("#fangwei_id").html("");
		    		$("#fangwei_id").html("您好，您所查询代理商不存在");
		    		$("#jg_main_id").show();
			
		}*/
	      $.getJSON("http://vip.mlfangwei.com/xt/views/huangselite?,{ dianhua: c },

                function(data) {
			if(data[0]!=null){

                        $("#jg_main_id").removeClass("jg_main2");
		    		$("#jg_main_id").addClass("jg_main");
		    		$("#fangwei_id").html("");
		    		
		    		$("#fangwei_id").html(data[0].name+"是葡萄牙Huang's Elite授权的("+data[0].level+"),请放心购买！");
		    		$("#jg_main_id").show();

			}else{
				$("#jg_main_id").removeClass("jg_main");
		    		$("#jg_main_id").addClass("jg_main2");
		    		$("#fangwei_id").html("");
		    		$("#fangwei_id").html("您好，您所查询代理商不存在");
		    		$("#jg_main_id").show();
				}
                        setTimeout(btnEnabled, 2000);

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