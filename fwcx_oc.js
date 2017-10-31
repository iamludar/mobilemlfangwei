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

                    document.getElementById(obj1).innerHTML = '<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">防伪码不能为空<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';

                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length < 10) {

                   document.getElementById(obj1).innerHTML ='<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">防伪码长度不能少于10位<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';
		 
                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length > 24) {

                    document.getElementById(obj1).innerHTML ='<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">防伪码长度不能大于24位<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';

                    document.getElementById(obj).focus();

                    return false;

                }

                else if (!RegNumber.test($FwCode)) {

                   document.getElementById(obj1).innerHTML ='<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">您输入的防伪码不是数字<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';
  
                    document.getElementById(obj).focus();

                    return false;

                }

            
				 $.ajaxSetup({ scriptCharset: "gbk" , contentType: "application/json; charset=utf8"});
				 
                document.getElementById(obj1).innerHTML ='<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">正在查询......<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';

                $(this).attr("disabled", true);

                var $strurl="" ;


                        $.getJSON(

                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: $FwCode },

                    function(data) {

                        //      alert(data.QueryResult);
                        document.getElementById(obj1).innerHTML = '<div class="panel panel-primary" style="border-radius:0 0 4px 4px;border:0px solid transparent"><div class="panel-heading" style="border-top-left-radius:0;border-top-right-radius:0;background-color:#31b0d5;border-color:#269abc">查询结果</div><div class="panel-body" id="ReturnResult">'+data.QueryResult+'<br><br><button type="button" class="btn btn-info  btn-block">联系电话 4000139315</button><a href="http://www.oasis-coffee.com" type="button" class="btn btn-info  btn-block">Oasis Coffee 官方网站</a></div>';
                        setTimeout(btnEnabled, 2000);

                    });


                    
                     


            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}