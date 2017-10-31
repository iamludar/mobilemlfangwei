function fwchack(obj, obj1) {
    var $FwCode = document.getElementById(obj).value;
    // var $CheckResult = document.getElementById(obj1);
    //alert($FwCode);
      var RegNumber = /^[0-9]*[1-9][0-9]*$/;
                var flag = false;


               // alert(document.getElementById("ReturnResult").innerHTML);
                //$CheckResult.html("");
               document.getElementById(obj1).innerHTML = "";


                if ($FwCode.length == 0) {

                    document.getElementById(obj1).innerHTML ="防伪码不能为空";

                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length < 10) {

                   document.getElementById(obj1).innerHTML ="防伪码长度不能少于10位";
		 
                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length > 24) {

                    document.getElementById(obj1).innerHTML ="防伪码长度不能大于24位";

                    document.getElementById(obj).focus();

                    return false;

                }

                else if (!RegNumber.test($FwCode)) {

                   document.getElementById(obj1).innerHTML ="您输入的防伪码不是数字";
  
                    document.getElementById(obj).focus();

                    return false;

                }

            
				 $.ajaxSetup({ scriptCharset: "gbk" , contentType: "application/json; charset=utf8"});
				 
                document.getElementById(obj1).innerHTML ="正在查询......";

                $(this).attr("disabled", true);

                var $strurl="" ;


                        $.getJSON(

                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: $FwCode },

                    function(data) {

                        //      alert(data.QueryResult);
						if(data.cxcs>0 && data.cxcs<4){
							document.getElementById(obj1).innerHTML = data.QueryResult;	
						}else{
							document.getElementById(obj1).innerHTML = "您好，您的产品查询无效。超自然公司提醒：请在授权经销商处购买，以免误买仿品。";
						}
                        
                        setTimeout(btnEnabled, 2000);

                    });


                    
                     


            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}