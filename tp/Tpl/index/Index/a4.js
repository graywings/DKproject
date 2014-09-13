(function () {
        var a = {
            weibo: 1,
            qzone: 2,
            tqq: 4,
            douban: 8,
            renren: 16
        }, b = {}, c = {
                duration: 3650
            }, d = app.page.params && app.page.params.via || null,
            e = app.page.params && app.page.params.file_ticket || null;
        $$("div.pbt").each(function (c) {
                var f = app.req.user.status.share;
                if (c.retrieve("initialized")) return;
                var g = $("bookmarklet") !== null;
                g && $$(".creation-property").setStyle("display", "none");
                var h = c.getElement("textarea.DescriptionTextarea"),
                    i = function () {
                        var a = !1;
                        return function (b, c) {
                            c = typeof c == "function" ? c : function () {};
                            if (a) return c();
                            a = !0, setTimeout(function () {
                                (new Request.JSON({
                                    url: "/feedback/pin",
                                    data: b,
                                    onSuccess: function (a) {
                                        c()
                                    },
                                    onFailure: function () {
                                        a = !1, c()
                                    }
                                })).post()
                            }, 5e3)
                        }
                    }(),
                    j = new ImagePicker(c.getElement(".ImagePicker"));
                new FancyInput(h), h.get("registered-at") || (h.set("registered-at", "registered"), new Autocompleter.Contacts.At(h));
                var k = c.getElements(".pin-form .share-opts input[type=checkbox]");
                k.each(function (b) {
                    var c = b.get("data-key"),
                        d = b.getParent("label");
                    f & a[c] || (d.removeClass("enabled"), d.addClass("disabled"), b.removeProperty("checked")), b.addEvent("change", function () {
                        return b.get("checked") ? (d.removeClass("disabled"), d.addClass("enabled")) : (d.removeClass("enabled"), d.addClass("disabled")), !1
                    })
                });
                var l = c.getElement(".board-list"),
                    m = $$(".tag-tip")[0],
                    n = $$(".tag-prompt")[0],
                    o = $$(".tag-prompt-more")[0],
                    p = n.getElement(".tags"),
                    q = o.getElement(".tags");
                h.addEvent("keyup", function () {
                    var a = h.get("value"),
                        b = p.getElements("a");
                    b.each(function (b) {
                        var c = b.get("data-tag");
                        c = "#" + c + "#", !~a.indexOf(c) && b.hasClass("selected") && b.removeClass("selected")
                    })
                }), $$(".tag-prompt").addEvent("click:relay(a)", function (a) {
                    var b = a.target;
                    b.get("tag") != "a" && (b = b.getParent()), n.getElements("a").removeClass("selected"), b.addClass("selected");
                    var c = b.get("data-tag");
                    this.hasClass("tag-prompt-more") || s(c, this), c = "#" + c + "#";
                    var d = h.get("value");
                    if (~d.indexOf(c)) {
                        "function" == typeof h.selectRange && h.selectRange(d.indexOf(c), c.length + d.indexOf(c));
                        return
                    }
                    h.focus(), h.set("value", d.trim() + " " + c)
                }), l.master.addEvent("select", function () {
                        var a = {};
                        app.req.user.boards.each(function (b) {
                            a[b.board_id] = b
                        });
                        var b = l.get("data-board-id");
                        if (!a[b]) return;
                        o.setStyle("display", "none");
                        var c = a[b].recommend_tags || [];
                        if (!c || !c.length) {
                            n.hide();
                            return
                        }
                        p.empty();
                        var d = [];
                        for (var e = 0; e < c.length; e++) d.push(new Element("a", {
                                    title: c[e],
                                    "data-tag": c[e],
                                    html: \'<svg class="triangle"><polygon points="0 4, 2 0, 4 4, 2 0"></polygon></svg>\'+c[e]}));d.length?(p.adopt(d),m.hide(),n.show()):(n.hide(),m.show())});var r=function(a,b){if(!a||!a.length||a.error){o.setStyle("display","none"),n.getElements("a").removeClass("selected");return}q.set("text",""),a.each(function(a,b){if(b>5)return;(new Element("a",{text:a,title:a,"data-tag":a})).inject($$(".tags-more")[0])}),o.setStyle("display","block");var c=q.getStyle("height");c&&c.toInt()>29&&o.setStyle("height",c)},s=function(a,c){if(b[a])return r(b[a],c);(new Request.JSON({url:"/pin/tag",data:{q:a},onSuccess:function(d){d&&!d.error&&(b[a]=d),r(d,c)}})).get()},t=new Button(c.getElement("div.Buttons a.rbtn"),{click:function(){var b=h.get("value"),m=l.get("data-board-id"),n=j.getSelected();if(!n)return alert("没有选择要采集的图片");if(!m)return alert("请选择或者创建一个画板");var o={board_id:m,text:b},p=n.el.retrieve("file"),q=n.el.retrieve("pin_id");f=0,k.each(function(b){if(b.get("checked")){var c=b.get("data-key");o[c]=!0,f|=a[c];try{ga("send","event","SocialShare",c+":{api}","PinDialog:"+app.page.pin.source),_paq.push(["trackEvent","SocialShare",c+":{api}","PinDialog:"+app.page.pin.source])}catch(d){}}}),o.via=g?2:1,d?o.via=d:o.via=g?2:1,o.media_type=app.page.params&&app.page.params.media_type?app.page.params.media_type:0,o.video=app.page.params&&app.page.params.video?app.page.params.video:0,q?o.via=q:e?(o.file_ticket=e,o.link=app.page.params.url):p?o.file_id=p.id:(o.img_url=n.src,n.link&&(o.link=n.link)),o.share_button=f;if(p&&p.creation){o.creation=p.creation;var r=p;delete r.creation,o.file=r;var s=c.getElement(".creation-property .clear-input"),t=s.value,u=c.getElement(".creation-property input[name=authorize]:checked");if(!u)return alert("没有选择授权方式");if(u.value!="noright")if(!t||t<0)return alert("没有填写源文件下载所需价格或者价格不符合格式");o.authorize=u&&u.value,o.price=t}var v=this;v.setTitle("采集中...").disable();var w=c.getParent("#ScrapePin");!document.id("Repin")&&!w&&(o.check=!0);var x=o.creation?"/cc/creation/create/":"/pins/",y=new Request.JSON({url:x,data:o,onSuccess:function(a){if(a.err){alert(a.msg||app.COMMON_ERRMSG),i(Object.merge(o,a),function(){v.setTitle().enable()});return}if(a.warning==100){var b=document.id("pin_confirm_popup");b.getElement(".continue").addEvent("click",function(){delete y.options.data.check,y.post(),b.hide()}),b.getElement(".cancel").addEvent("click",function(){v.setTitle().enable(),b.hide(),window.close()}),b.getElement("span.board-name").set("html",\'<a target="_blank" href="/boards/\'+a.pin.board.board_id+\'/"><em>\'+a.pin.board.title+"</em></a>"),b.show();return}app.req.user.status.share=f,app.$pin=a.pin;if(g){app.route("/bookmarklet_success");if(!Browser.ie||Browser.version>=10)window.opener.postMessage("complete:"+n.src,"*"),window.opener.postMessage("singlePinComplete","*")}else o.creation?(v.element.fireEvent("success"),app.showDialog("creation_success")):(v.element.fireEvent("success"),app.showDialog("pin_success"))},onFailure:function(a){i(Object.merge(o,{err:a.status}),function(){v.setTitle().enable()})}});y.post();var z=[],A=app.req.user.boards.filter(function(a){return a.board_id==m&&z.push(a),a.board_id!=m});return app.req.user.boards=z.concat(A),!1}});e||(t.disable(),j.addEvents({startLoading:function(){t.disable()},finishLoading:function(){t.enable()}})),c.store("initialized",!0)})})()