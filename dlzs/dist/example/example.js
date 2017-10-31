$(function () {
	
    var router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });

    // grid
    var home = {
        url: '/',
        className: 'home',
        render: function () {
            return $('#tpl_home').html();
        }
    };

    // button
    var button = {
        url: '/button',
        className: 'button',
        render: function () {
            return $('#tpl_button').html();
        }
    };

    // cell
    var cell = {
        url: '/cell',
        className: 'cell',
        render: function () {
            return $('#tpl_cell').html();
        }
    };

    // toast
    var toast = {
        url: '/toast',
        className: 'toast',
        render: function () {
            return $('#tpl_toast').html();
        },
        bind: function () {
            $('#container').on('click', '#showToast', function () {
                $('#toast').show();
                setTimeout(function () {
                    $('#toast').hide();
                }, 2000);
            }).on('click', '#showLoadingToast', function () {
                $('#loadingToast').show();
                setTimeout(function () {
                    $('#loadingToast').hide();
                }, 2000);
            });
        }
    };

    // dialog
    var dialog = {
        url: '/dialog',
        className: 'dialog',
        render: function () {
            return $('#tpl_dialog').html();
        },
        bind: function () {
            $('#container').on('click', '#showDialog1', function () {
                $('#dialog1').show().on('click', '.weui_btn_dialog', function () {
                    $('#dialog1').off('click').hide();
                });
            }).on('click', '#showDialog2', function () {
                $('#dialog2').show().on('click', '.weui_btn_dialog', function () {
                    $('#dialog2').off('click').hide();
                });
            });

        }
    };

    // progress
    var progress = {
        url: '/progress',
        className: 'progress',
        render: function () {
            return $('#tpl_progress').html();
        },
        bind: function () {
            $('#container').on('click', '#btnStartProgress', function () {
                if ($(this).hasClass('weui_btn_disabled')) {
                    return;
                }

                $(this).addClass('weui_btn_disabled');

                var progress = 0;
                var $progress = $('.js_progress');

                function next() {
                    $progress.css({width: progress + '%'});
                    progress = ++progress % 100;
                    setTimeout(next, 30);
                }

                next();
            });
        }
    };

    // msg
    var msg = {
        url: '/msg',
        className: 'msg',
        render: function () {
            return $('#tpl_msg').html();
        }
    };

    // article
    var article = {
        url: '/article',
        className: 'article',
        render: function () {
            return $('#tpl_article').html();
        }
    };

    // actionsheet
    var actionsheet = {
        url: '/actionsheet',
        className: 'actionsheet',
        render: function () {
            return $('#tpl_actionsheet').html();
        },
        bind: function () {
            $('#container').on('click', '#showActionSheet', function () {
                var mask = $('#mask');
                var weuiActionsheet = $('#weui_actionsheet');
                weuiActionsheet.addClass('weui_actionsheet_toggle');
                mask.show().addClass('weui_fade_toggle').one('click', function () {
                    hideActionSheet(weuiActionsheet, mask);
                });
                $('#actionsheet_cancel').one('click', function () {
                    hideActionSheet(weuiActionsheet, mask);
                });
                weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

                function hideActionSheet(weuiActionsheet, mask) {
                    weuiActionsheet.removeClass('weui_actionsheet_toggle');
                    mask.removeClass('weui_fade_toggle');
                    weuiActionsheet.on('transitionend', function () {
                        mask.hide();
                    }).on('webkitTransitionEnd', function () {
                        mask.hide();
                    })
                }
            });
        }
    };

    // icons
    var icons = {
        url: '/icons',
        className: 'icons',
        render: function () {
            return $('#tpl_icons').html();
        }
    };

    // panel
    var panel = {
        url: '/panel',
        className: 'panel',
        render: function () {
            return $('#tpl_panel').html();
        }
    };

    // tab
    var tab = {
        url: '/tab',
        className: 'tab',
        render: function () {
            return $('#tpl_tab').html();
        }
    };

    // navbar
    var navbar = {
        url: '/navbar',
        className: 'navbar',
        render: function () {
            return $('#tpl_navbar').html();
        }
    };

    // tabbar
    var tabbar = {
        url: '/tabbar',
        className: 'tabbar',
        render: function () {
            return $('#tpl_tabbar').html();
        }
    };

    // searchbar
    var searchbar = {
        url: '/searchbar',
        className: 'searchbar',
        render: function () {
            return $('#tpl_searchbar').html();
        },
        bind: function () {
            $('#container').on('focus', '#search_input', function () {
                var $weuiSearchBar = $('#search_bar');
                $weuiSearchBar.addClass('weui_search_focusing');
            }).on('blur', '#search_input', function () {
                var $weuiSearchBar = $('#search_bar');
                $weuiSearchBar.removeClass('weui_search_focusing');
                if ($(this).val()) {
                    $('#search_text').hide();
                } else {
                    $('#search_text').show();
                }
            }).on('input', '#search_input', function () {
                var $searchShow = $("#search_show");
                if ($(this).val()) {
                    $searchShow.show();
                } else {
                    $searchShow.hide();
                }
            }).on('touchend', '#search_cancel', function () {
                $("#search_show").hide();
                $('#search_input').val('');
            }).on('touchend', '#search_clear', function () {
                $("#search_show").hide();
                $('#search_input').val('');
            });
        }
    };

    router.push(home)
        .push(button)
        .push(cell)
        .push(toast)
        .push(dialog)
        .push(progress)
        .push(msg)
        .push(article)
        .push(actionsheet)
        .push(icons)
        .push(panel)
        .push(tab)
        .push(navbar)
        .push(tabbar)
        .push(searchbar)
        .setDefault('/')
        .init();


    // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
    // 相关 issue: https://github.com/weui/weui/issues/15
    // 解决方法:
    // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
    // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
});

$(document).ready(function(){
  $("#change").change(function(){
    $("#FwCodec").attr("placeholder","请输入"+this.options[this.selectedIndex].text);	
  });
});

function fwchack(obj) {
    var $FwCode = document.getElementById(obj).value;
	if($("#change").val()=="1"){
		$haoma="微信号";
		$json= "http://www.04wu.com/xt/views/chun_wen_zi?dailiweixin="+$FwCode;
	}else if($("#change").val()=="2"){	
		$haoma="手机号";
		$json= "http://www.04wu.com/xt/views/chun_wen_zi?dailidianhua="+$FwCode;
	}else if($("#change").val()=="3"){
		$haoma="身份证";	
		$json= "http://www.04wu.com/xt/views/chun_wen_zi?shenfenzheng="+$FwCode;
	}
    // var $CheckResult = document.getElementById(obj1);
    //alert($FwCode);
      var RegNumber = /^[0-9]*[1-9][0-9]*$/;
                var flag = false;
                if ($FwCode.length == 0) {

                    $('#dialog2_title').html('警告');
        			$('#dialog2_body').html("您的输入为空，请重新输入");
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
						$.getJSON($json,
                    function(data) {
                        if(data[0]!=null){
							var $result = "您查询的"+$haoma+"【"+$FwCode+"】是我公司授权的"+data[0].dailijibie+",请放心购买";
							var $imgstr = data[0].touxiang;
							$imgstr = $imgstr.replace('typeof=\"foaf:Image\"','width=100%');
							
							var $result_html =					
							'<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div><div class="weui_text_area"><h2 class="weui_msg_title">查询成功</h2><p class="weui_msg_desc" id="weui_msg_desc">'+$result+'</p></div><div class="weui_opr_area"><p class="weui_btn_area"><a href="http://mobile.mlfangwei.com/dlzs/dist/example/" class="weui_btn weui_btn_primary">继续查询</a></br>'+$imgstr+'<!--<a href="" class="weui_btn weui_btn_default">查看证书</a>--></p></div><div class="weui_extra_area"><!--<a href="http://www.mlfangwei.com">技术支持</a>--></div></div>';
							$('#container').html($result_html);
                        }
                        else{
							var $result = "您查询的"+$haoma+"【"+$FwCode+"】不是我公司授权的经销商,请谨慎购买！";
							var $result_html =					
							'<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_warn weui_icon_msg"></i></div><div class="weui_text_area"><h2 class="weui_msg_title">查询失败</h2><p class="weui_msg_desc" id="weui_msg_desc">'+$result+'</p></div><div class="weui_opr_area"><p class="weui_btn_area"><a href="http://mobile.mlfangwei.com/dlzs/dist/example/" class="weui_btn weui_btn_warn">重新查询</a></p></div><div class="weui_extra_area"><!--<a href="http://www.mlfangwei.com">技术支持</a>--></div></div>';
							$('#container').html($result_html);
                        }
                    });
                    }, 1000);
                    
            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}

