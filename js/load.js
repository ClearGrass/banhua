/**
 *@file ��ҳ������ã�����ʱȥ��
 *@author oceanking on 2016/8/13.
 */
$(function(){
    var loader = $("[data-load]");
    var len = loader.length;
    var i = 1;
    loader.each(function(){
        $(this).load($(this).data("load"), function(){
            i++;
            checkLoad();
        });
    });

    function checkLoad() {
        if (i === len) {
            loadAfter();
        }
    }

    function loadAfter () {
        var arr = {
            'index': 0,
            'author': 1,
            'banhua': 2,
            'news': 3,
            'newdetail': 3,
            'news_01': 3,
             'news_02': 3,
             'news_03': 3,
             'news_04': 3,
             'news_05': 3,
             'news_06': 3
        };
        var loc = window.location.href;
        for (var key in arr) {
            if (loc.indexOf(key + '.html') !== -1) {
                $('#nav-list').children('a:eq(' + arr[key] + ')').addClass('curr').siblings().removeClass('curr');
                return;
            }
        }
    }
});
