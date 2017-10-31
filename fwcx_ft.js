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

                    document.getElementById(obj1).innerHTML ="防偽碼不能為空";

                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length < 10) {

                   document.getElementById(obj1).innerHTML ="防偽碼長度不能少於10位";
		 
                    document.getElementById(obj).focus();

                    return false;

                }

                else if ($FwCode.length > 24) {

                    document.getElementById(obj1).innerHTML ="防偽碼長度不能大於24位";

                    document.getElementById(obj).focus();

                    return false;

                }

                else if (!RegNumber.test($FwCode)) {

                   document.getElementById(obj1).innerHTML ="您輸入的防偽碼不是數位";
  
                    document.getElementById(obj).focus();

                    return false;

                }

            
				 $.ajaxSetup({ scriptCharset: "gbk" , contentType: "application/json; charset=utf8"});
				 
                document.getElementById(obj1).innerHTML ="正在査詢......";

                $(this).attr("disabled", true);

                var $strurl="" ;


                        $.getJSON(

                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: $FwCode },

                    function(data) {

                        //      alert(data.QueryResult);
                        document.getElementById(obj1).innerHTML = data.QueryResult;
                        setTimeout(btnEnabled, 2000);

                    });


                    
                     


            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}