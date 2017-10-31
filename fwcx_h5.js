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

                    $('#dialog2_title').html('警告');
					$('#dialog2_body').html('防伪码不能为空');
					var $dialog = $('#dialog2');
                    $dialog.show();
                    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
                    });
					return false;
                }

                else if ($FwCode.length < 10) {
					$('#dialog2_title').html('警告');
					$('#dialog2_body').html('防伪码长度不能小于10位');
					var $dialog = $('#dialog2');
                    $dialog.show();
                    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
                    });
					return false;
                }

                else if ($FwCode.length > 24) {

                   	$('#dialog2_title').html('警告');
					$('#dialog2_body').html('防伪码长度不能大于24位');
					var $dialog = $('#dialog2');
                    $dialog.show();
                    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
                    });
					return false;
                }

                else if (!RegNumber.test($FwCode)) {

                    $('#dialog2_title').html('警告');
					$('#dialog2_body').html('您输入的防伪码不是数字');
					var $dialog = $('#dialog2');
                    $dialog.show();
                    $dialog.find('.weui_btn_dialog').one('click', function () {
                        $dialog.hide();
                    });
					return false;

                }			 
				 var $loadingToast = $('#loadingToast');
                    $loadingToast.show();
                    setTimeout(function () {
                        $loadingToast.hide();
						$.getJSON(
                    "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: $FwCode },
                    function(data) {
                        document.getElementById(obj1).innerHTML = data.QueryResult;
                    });
                    }, 2000);
                    
            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}