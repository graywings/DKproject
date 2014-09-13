var main = document.getElement(".sortable");
if (main) {
    var sorting = !1,
        container = $$(".sortable")[0],
        sortable, cancelBtn, oldorder, ContainTop, ContainHeight, start = function () {
            sorting = !0;
            var a;
            sortable = new Sortables(".sortable", {
                clone: !0,
                childrenSelector: ".Board:not(.default-board)",
                onStart: function (a, b) {
                    app.view.addEvent("mousemove", app.boardListScroll), a.setStyles({
                        border: "dashed 3px #DDD",
                        background: "transparent",
                        "box-shadow": "none",
                        width: b.getStyle("width").toInt() - 6,
                        height: b.getStyle("height").toInt() - 6
                    }), a.getChildren().setStyles({
                        visibility: "hidden"
                    }), a.addClass("sort"), b.setStyles({
                        "z-index": 999999,
                        opacity: .6,
                        filter: "alpha(opacity=40)"
                    })
                },
                onComplete: function (a) {
                    app.view.removeEvent("mousemove", app.boardListScroll), a.getChildren().setStyles({
                        visibility: ""
                    }), a.set("style", ""), complete()
                }
            }), oldorder = sortable.serialize(0, function (a) {
                return a.get("data-id")
            })
        }, complete = function () {
            var a = sortable.serialize(0, function (a) {
                return a.get("data-id")
            });
            oldorder.join("-") != a.join("-") ? (new Request.JSON({
                url: "/boards/sort/",
                data: {
                    ids: a.join(",")
                },
                onSuccess: onComplete(a, !0)
            })).post() : onComplete(a, !0)
        }, onComplete = function (a, b) {
            oldorder = a, sorting = !1
        };
    app.boardListScroll = function (a) {
        var b = window.innerHeight;
        ContainTop = container.getTop(), ContainHeight = container.getHeight();
        var c, d;
        b - a.client.y < 50 ? (d = window.getScroll(), c = Math.min(d.y + 50, ContainTop + ContainHeight - window.innerHeight), window.scrollTo(d.x, c)) : a.client.y < 50 && (d = window.getScroll(), c = Math.max(d.y - 50, ContainTop - 55), window.scrollTo(d.x, c))
    }, sorting ? complete() : start()
}(function () {
        var a = function () {
            var a = document.getElement("#waterfall");
            if (!document.getElement("#user_page .loading")) var c = (new Element("div", {
                "class": "loading"
            })).inject(a, "after").hide().set("html", \'<img src="/img/loading.gif"><span>正在加载...</span>\');else var c=document.getElement("#user_page .loading");var d=window.getSize().y,e=window.getScroll().y,f=a.getCoordinates().bottom;if(f-e-d<150&&!app.page.triggered&&!app.page.end){app.page.triggered=!0;if(!a.getElement(".Board")){app.page.end=!0;return}var g=a.getLast(".Board:not(.sort)").get("data-seq");(new Request.JSON({url:app.page.$url,data:{max:g,limit:10,wfl:1},noCache:!0,onRequest:function(){c.show()},onSuccess:function(d){c.hide();if(d.err){app.error(d.msg||app.COMMON_ERRMSG);return}if(d&&d.user&&d.user.boards.length>0){var e="";app.page.user&&app.page.user.boards&&(app.page.user.boards=app.page.user.boards.concat(d.user.boards)),d.user.boards.each(function(a){e+=app.renderSync("base/board_item",{board:a,user:app.req.user,show_cover_button:!0})}),Elements.from(e).inject(a),b()}else app.page.end=!0,c.set("html",\'<img src="/img/end.png">\').show()}})).get()}},b=function(){if(main){var a=$$(".sortable .Board:not(.inited)");sortable.addItems(a),a.addClass("inited")}app.page.triggered=!1};main&&$$(".sortable .Board").addClass("inited"),app.loadBoardEvent||(app.loadBoardEvent=function(){var b;window.clearTimeout(b),b=window.setTimeout(function(){a()},500)},window.addEvent("scroll",app.loadBoardEvent))})()