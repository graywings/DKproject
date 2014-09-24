(function () {
    var a = document.getElement(".pin-view"),
        b = a.getElement(".main-part .main-image"),
        c = a.get("data-id"),
        d = a.get("data-board-id"),
        e = a.get("data-media-type"),
        f = a.get("data-orig-source"),
        g = document.id("pin_view_layer");
    (function () {
        app.initPureLikeButtons({
            buttonSelector: ".pin-view .tool-bar .like-btn",
            unLikeButtonClass: "liked",
            onLikeSuccess: function (a) {
                var b = a.getParent(".main-part").getElement(".tool-bar-bottom .like-btn"),
                    c = b.getElement(".num"),
                    d = c.innerHTML.toInt() || 0;
                c.set("text", d + 1)
            },
            onUnLikeSuccess: function (a) {
                var b = a.getParent(".main-part").getElement(".tool-bar-bottom .like-btn"),
                    c = b.getElement(".num"),
                    d = c.innerHTML.toInt() || 0;
                c.set("text", d - 1 || "")
            }
        }), app.initDelCommentButtons(), app.initAddCommentButtons(), app.initReplyButtons(), app.initLikeButtons(), app.initFollowButtons(), app.initPureFollowBoardButtons({
            buttonSelector: ".follow-btn",
            onFollowSuccess: function (a) {
                var b = a.getElement(".text");
                b.innerHTML = b.innerHTML.replace("关注", "取消关注")
            },
            onUnfollowSuccess: function (a) {
                var b = a.getElement(".text");
                b.innerHTML = b.innerHTML.replace("取消关注", "关注")
            }
        });
        var b = a.getElement(".tool-bar-bottom .like-btn"),
            c = a.getElement(".tool-bar .like-btn");
        b.addEvent("click", function () {
            c.click()
        });
        var d = a.getElement(".tool-bar-bottom .comment-btn"),
            e = document.getElement("#pin_view_add_comment textarea"),
            f = new Fx.Scroll(g || document.body);
        d.addEvent("click", function () {
            e.select(), f.toElementCenter(e, "y", {
                y: g ? -document.body.getScroll().y : 0
            })
        })
    })(),
    function () {
        if (e && e == 1) {
            var a = 658,
                c = 410,
                d = new Swiff(f, {
                    width: a,
                    height: c,
                    params: {
                        allowfullscreen: !0,
                        wMode: "opaque"
                    }
                });
            d.inject(b.getElement(".image-holder").empty())
        }
    }(),
    function () {
        var a = document.getElement(".tool-bar .del-btn");
        a && a.addEvent("click", function () {
            var a = new Button(this);
            return app.confirm({
                title: "删除确认",
                text: "删除采集后不能恢复，确定要删除吗?",
                action: "删除"
            }, function (b) {
                b && (a.setTitle("正在删除...").disable(), (new Request.JSON({
                    url: "/pins/" + c + "/",
                    data: {
                        _method: "DELETE"
                    },
                    onSuccess: function (b) {
                        if (b.err) {
                            app.error(b.msg || app.COMMON_ERRMSG), a.setTitle().enable();
                            return
                        }
                        var c = "/boards/" + d + "/";
                        app.msg("已经成功删除采集"), setTimeout(function () {
                            location.href = c
                        }, 1500)
                    },
                    onFailure: function () {
                        a.setTitle().enable()
                    }
                })).post())
            }), !1
        })
    }(),
    function () {
        if (g) return;
        var a, b, d = app.getState().id,
            e = "/pins/" + c + "/zoom/",
            f = "#header, #header_side_menu, #top_promotion",
            h = $$(f),
            i = document.getElement(".pin-view .tool-bar .zoomin"),
            j = function () {
                a || (a = Elements.from(app.renderSync("base/pin_view_zoom"))[0], a.getElement("#zoomr_hide").addEvent("click", function () {
                    return app.popState(), !1
                })), b = a.retrieve("slide"), b || (b = new SlidePage(a, {
                    fixedSelector: f
                }), a.store("slide", b)), a.inject(document.body).show(), b.show().chain(function () {
                    a.setStyles({
                        width: "100%",
                        height: "auto"
                    }), h.setStyle("visibility", "hidden")
                }), app.registerStateHandler(d, k)
            }, k = function () {
                if (!a) return;
                b = a.retrieve("slide"), h.setStyle("visibility", ""), b.hide().chain(function () {
                    a.destroy(), a = null
                }), app.setTitle(), app.removeStateHandler(d)
            };
        app.registerStateHandler(e, j), i.addEvent("click", function (a) {
            return app.pushState(null, app.page.title, e), !1
        })
    }(),
    function () {
        if (!g) return;
        var b = a.getElement(".tool-bar .zoomin"),
            c = g.getElement(".zoom-layer"),
            d = c.getElement(".holder"),
            e = c.getElement(".close-zoom"),
            f = g.getElement(".close-layer"),
            h = a.get("data-size-y");
        b.addEvent("click", function (a) {
            d.empty();
            var b = (new Element("img", {
                src: c.get("data-img")
            })).inject(d);
            b.addEvent("click", function (a) {
                a.stop()
            });
            var e = document.html.clientHeight - h;
            return e > 0 && b.setStyle("margin-top", e / 2), c.show(), f.hide(), !1
        }), (new Elements([e, d])).addEvent("click", function () {
            return c.hide(), f.show(), !1
        })
    }(),
    function () {
        var a = document.getElement(".pin-view .info-piece .more-comments");
        if (a) {
            var b = a.getNext(".comments"),
                d = b.getElement(".comment").get("data-id"),
                e = 10,
                f = !1;
            a.addEvents({
                click: function (g) {
                    f = !0, a.tween("opacity", .3), (new Request.JSON({
                        url: "/pins/" + c + "/comments/",
                        data: {
                            max: d,
                            limit: e
                        },
                        onSuccess: function (c) {
                            if (c.err) return alert(c.msg || app.COMMON_ERRMSG);
                            var f = c.comments.reverse(),
                                g;
                            b.getElements(".comment.new").removeClass("new"), f.each(function (a, c) {
                                a.pin_user_id = "' + escape((interp = pin.user_id) == null ? "
                                " : interp) + '";
                                var d = app.renderSync("base/comment_item", a),
                                    e = Elements.from(d).inject(b, "top");
                                c === 0 && (g = e[0]), e.addClass("new")
                            });
                            if (f.length < e) return a.dispose();
                            d = f[f.length - 1].comment_id, a.tween("opacity", 1)
                        }
                    })).get()
                }
            })
        }
    }(),
    function () {
        var b = a.get("data-size-y"),
            c = a.getElement(".main-image .arrows");
        c && b > 700 && c.setStyle("top", 280)
    }(),
    function () {
        var b = document.getElement(".pin-view .board-piece .board-pins");
        stopWindowScroll(b);
        var d = function () {
            var e = app.createCellLoader("/boards/' + escape((interp = board.board_id) == null ? "
                " : interp) + '/", 20, function (a) {
                    return a.board.pins && a.board.pins.each(function (a) {
                        a.pin_id == c && (a.selected = !0)
                    }), {
                        data: a.board.pins
                    }
                }, {
                    template: "base/pin_view_board_pin_item"
                });
            new Waterfall("board_pins_waterfall", {
                container: b,
                cellWidth: 78,
                cellSpace: 2,
                minCols: 3,
                maxCols: 3,
                cellSelector: ".cell",
                hibernate: !1,
                containerSelector: "",
                loadOffset: 100,
                autoResize: !1,
                scrollEl: a.getElement(".board-piece .board-pins"),
                transitionClass: "",
                containerSelectorOffset: 0,
                loader: e
            }), app.view.removeEvent("initWaterfall", d)
        };
        app.view.addEvent("initWaterfall", d)
    }(),
    function () {
        var b = a.getElement(".recommend-pins .waterfall"),
            c = function () {
                b.$waterfall = new Waterfall(b, {
                    container: a,
                    minCols: 4,
                    maxCols: 4,
                    hibernate: !1,
                    containerSelector: "",
                    autoResize: !1,
                    scrollEl: g || window,
                    transitionClass: "",
                    containerSelectorOffset: 0,
                    loader: app.createCellLoader("/pins/' + escape((interp = pin.pin_id) == null ? "
                        " : interp) + '/recommend/", 10, 0, function (a) {
                            return {
                                data: a
                            }
                        })
                }), app.view.removeEvent("initWaterfall", c)
            };
        app.view.addEvent("initWaterfall", c)
    }(),
    function () {
        function f() {
            var a = d.getLast(".wfc"),
                f = a ? a.get("data-seq") : null;
            (new Request.JSON({
                url: "/pins/" + c + "/relatedboards/",
                data: {
                    max: f
                },
                onSuccess: function (a) {
                    if (a.err || !a.length) return e.hide();
                    (a.length < 4 || a.getLast().seq == 1) && e.hide(), b.show();
                    var c = "";
                    a.forEach(function (a) {
                        c += app.renderSync("base/board_item", {
                            board: a,
                            user: app.req.user
                        })
                    }), Elements.from(c).inject(d)
                }
            })).get()
        }
        var b = a.getElement(".related-boards"),
            d = b.getElement(".board-box"),
            e = b.getElement(".load-more-board");
        f(), e.addEvent("click", f)
    }(),
    function () {
        var b = a.getElement(".tool-bar .huaban-share-unit .more"),
            c = a.getElement(".tool-bar .huaban-share-unit .menu");
        new MenuController({
            menu: c,
            trigger: b
        })
    }(),
    function () {
        a.getElement(".tool-bar-bottom .report-btn").addEvent("click", function () {
            return window.report_type = "pin", window.report_id = c, app.showDialog("report"), !1
        }), a.getElement(".info-piece .comments").addEvent("click:relay(a.report-button)", function () {
            return window.report_type = "comment", window.report_id = this.getParent(".comment").getProperty("data-id"), app.showDialog("report"), !1
        })
    }(),
    function () {
        try {
            ga("set", "dimension6", "' + escape((interp = pin.board.category_id) == null ? "
                " : interp) + '"), _paq.push(["setCustomVariable", 5, "Pin Category", "' + escape((interp = pin.board.category_id) == null ? "
                " : interp) + '", "page"
            ])
        } catch (a) {}
        try {
            e && e == 1 && (f && ~f.indexOf("youku.com") ? (ga("send", "event", "video-pins", "view", "youku"), _paq.push(["trackEvent", "video-pins", "view", "youku"])) : (ga("send", "event", "video-pins", "view", "others"), _paq.push(["trackEvent", "video-pins", "view", "others"])))
        } catch (a) {}
        app.gaqTrackEvent(".pin-view .board-piece .board-pins .cell", {
            category: "Pin Source Board Link"
        }), app.gaqTrackEvent(".pin-view .siblings-piece .inner", {
            category: "Pin Source Domain Link"
        }), app.gaqTrackEvent(".pin-view .board-piece .follow-btn", {
            category: "Pin Source Board Follow"
        }), document.getElements(".pin-view .tool-bar .huaban-share-unit a").each(function (a) {
            app.gaqTrackEvent(a, {
                category: "SocialShare",
                action: a.get("data-to") + ":{js}",
                label: "PinView:' + escape((interp = pin.source) == null ? "
                " : interp) + '"
            })
        }), app.gaqTrackEvent(".pin-view .main-image .image-holder a", {
            category: "Pin Links Image",
            useTargetUrlAsLabel: !0
        }), app.gaqTrackEvent(".pin-view .tool-bar-bottom .source", {
            category: "Pin Links Site"
        }), app.gaqTrackEvent(".pin-view .bottom-part .related-boards", {
            elementEvent: "click:relay(.Board)",
            category: "pin_view_recommend_board",
            label: location.pathname || ""
        }), app.gaqTrackEvent(".pin-view .bottom-part .related-boards", {
            elementEvent: "click:relay(.follow)",
            category: "pin_view_recommend_board_follow",
            label: location.pathname || ""
        }), app.gaqTrackEvent(".pin-view .bottom-part .recommend-pins", {
            elementEvent: "click:relay(.pin)",
            category: "pin_view_recommend_pin",
            label: location.pathname || ""
        }), app.gaqTrackEvent(".pin-view .gift-info .goto-buy", {
            category: "commodity",
            label: "buy",
            value: "http://huaban.com/pins/' + escape((interp = pin.pin_id) == null ? "
            " : interp) + '/"
        }), app.gaqTrackPromotion(".pin-view-promo a", {
            category: "pin_view_promotions",
            useTargetUrlAsLabel: !0
        })
    }();
    if (g && app.page.$url.indexOf("/gift/") == 0 || !history.state && document.referrer && document.referrer.indexOf("http://huaban.com/gift/") == 0) try {
        ga("send", "event", "from_gift", "click", location.href)
    } catch (h) {}
})()