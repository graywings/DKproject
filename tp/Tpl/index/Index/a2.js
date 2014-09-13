(function () {
        ((function () {
            var a = {
                width: document.html.clientWidth,
                height: document.html.clientHeight
            };
            window.resizeBy(632 - a.width, 320 - a.height)
        })).delay(300);
        var a = document.id("bookmarklet"),
            b = a.getElement(".text-block .description"),
            c = a.getElement(".board-list"),
            d = a.getElement(".action"),
            e = a.getElements(".shares .share"),
            f = a.getElement(".preview img"),
            g = app.page.media[0];
        d.addEvent("click", function () {
            if (this.hasClass("disabled")) return;
            var a = c.get("data-board-id");
            if (!a) return app.alert("请选择或者创建一个画板");
            var d = {
                board_id: a,
                text: b.value,
                via: app.page.via || 2,
                media_type: app.page.media_type || 0,
                video: app.page.video || 0,
                file_ticket: app.page.file_ticket || null,
                link: app.page.url,
                check: !0
            }, f = 0;
            e.each(function (a) {
                if (!a.hasClass("active")) return;
                var b = a.get("data-key"),
                    c = a.get("data-flag");
                d[b] = !0, f |= c;
                try {
                    ga("send", "event", "SocialShare", b + ":{api}", "PinDialog:" + app.page.pin.source), _paq.push(["trackEvent", "SocialShare", b + ":{api}", "PinDialog:" + app.page.pin.source])
                } catch (e) {}
            }), app.req.user.status.share = d.share_button = f, i(d)
        });
        var h = !1,
            i = function (a) {
                d.addClass("disabled");
                var b = (new Request.JSON({
                            url: "/pins/",
                            data: a,
                            onSuccess: function (b) {
                                if (b.err && b.msg && ~b.msg.indexOf("抓取") && f.src.indexOf("data\\:image") == 0) {
                                    if (h) return app.alert(b.msg);
                                    j(f.src, function (b) {
                                        h = !0;
                                        if (b.err) return app.alert(b.msg || "上传文件失败");
                                        a.file_id = b.id, delete a.file_ticket, i(a)
                                    });
                                    return
                                }
                                if (b.err) {
                                    app.error(b.msg || app.COMMON_ERRMSG), app.feedback(Object.merge(a, b));
                                    return
                                }
                                if (b.warning == 100) {
                                    app.confirm(\'你已经在画板<a target="_blank" href="/boards/\'+b.pin.board.board_id+\'/">\'+b.pin.board.title+"</a>中采集过这张图片，是否继续？",function(b){if(!b)return;delete a.check,i(a)});return}app.hideDialogBox("repin"),app.$pin=b.pin,app.route("/bookmarklet_success");if(!Browser.ie||Browser.version>=10)try{window.opener.postMessage("complete:"+g,"*"),window.opener.postMessage("singlePinComplete","*")}catch(c){}},onFailure:function(b){app.feedback(Object.merge(a,{err:b.status}))},onComplete:function(){d.removeClass("disabled")}})).post()},j=function(a,b){d.addClass("disabled"),(new Request.JSON({url:"/upload/",data:{file:a},onSuccess:b,onFailure:function(){app.alert("上传文件失败")}})).post()}})()