(function (rt) {
    var templates = rt.templates,
        attrs = function () {
            return rt.attrs.apply(rt, arguments)
        }, _ = function () {
            return rt._.apply(rt, arguments)
        }, img = function () {
            return rt.img.apply(rt, arguments)
        }, imgURL = function () {
            return rt.imgURL.apply(rt, arguments)
        }, imgSize = function () {
            return rt.imgSize.apply(rt, arguments)
        }, avatar = function () {
            return rt.avatar.apply(rt, arguments)
        }, isVerified = function () {
            return rt.isVerified.apply(rt, arguments)
        }, url = function () {
            return rt.url.apply(rt, arguments)
        }, mkurl = function () {
            return rt.mkurl.apply(rt, arguments)
        }, GACampaignURL = function () {
            return rt.GACampaignURL.apply(rt, arguments)
        }, format_text = function () {
            return rt.format_text.apply(rt, arguments)
        }, escape = function () {
            return rt.escape.apply(rt, arguments)
        }, __t = rt.templates,
        emerge = function () {
            return rt.renderSync.apply(rt, arguments)
        };
    __t["base/people_pins"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "pins",
                body_tpl: "base/people_pins_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/chrome_callout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "chrome_callout",
                style: "display: none;",
                "class": "has-close phide"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "intro sheet"
            })), buf.push("><span>安装花瓣的chrome采集工具，你可以方便地收集网络上的图片，<br"), buf.push(attrs({})), buf.push("/>视频及网页截图，这是花瓣的精髓所在。</span><a"), buf.push(attrs({
                target: "_blank",
                href: "#",
                onclick: "return false;",
                "class": "install-extension btn btn18 rbtn"
            })), buf.push("><strong> 安装花瓣Chrome扩展</strong><span></span></a><a"), buf.push(attrs({
                "class": "close"
            })), buf.push('></a></div></div></div><script>(function(){if(!Browser.chrome||Browser.version<18){document.id("chrome_callout").dispose();return}var a=Cookie.read("_hb_chrome_extention");$$("#chrome_callout .close").addEvent("click",function(){Cookie.write("_hb_chrome_extention",!0,{duration:365}),document.id("chrome_callout").hide()}),$$("#chrome_callout .install-extension").addEvent("click",function(){return installHuabanChromeAddon(),document.id("chrome_callout").hide(),!1})})()</script>')
        }
        return buf.join("")
    }, __t["base/header_main_menu"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, categories = settings.categories,
                groups = [];
            for (var i = 0, l = categories.length; i < l; i++) {
                var category = categories[i];
                if (category.display === !1) continue;
                category.nav_link = "/favorite/" + category.id + "/", groups[category.group] = groups[category.group] || [], groups[category.group].push(category)
            }
            buf.push("<div"), buf.push(attrs({
                id: "header_main_menu"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "left-module"
            })), buf.push("><a"), buf.push(attrs({
                href: "/following/",
                rel: "nofollow",
                "class": "main-link bold following"
            })), buf.push(">我的关注</a><a"), buf.push(attrs({
                href: "/all/",
                rel: "nofollow",
                "class": "main-link bold all"
            })), buf.push(">最新采集</a><a"), buf.push(attrs({
                href: "/all/videos/",
                rel: "nofollow",
                "class": "main-link bold videos with-line"
            })), buf.push(">视频</a><a"), buf.push(attrs({
                target: "_blank",
                href: "/apps/",
                rel: "nofollow",
                "class": "main-link apps with-line"
            })), buf.push(">移动应用</a><a"), buf.push(attrs({
                href: "/cc/?md=top",
                rel: "nofollow",
                "class": "main-link design"
            })), buf.push(">花瓣原创</a><a"), buf.push(attrs({
                href: "/gift/?md=top",
                rel: "nofollow",
                "class": "main-link gift with-line"
            })), buf.push(">花瓣礼物</a><a"), buf.push(attrs({
                href: "/activities/",
                rel: "nofollow",
                "class": "main-link activities"
            })), buf.push(">活动</a><a"), buf.push(attrs({
                href: "/weekly/",
                rel: "nofollow",
                "class": "main-link weekly"
            })), buf.push(">周刊</a><a"), buf.push(attrs({
                target: "_blank",
                href: "http://blog.huaban.com/",
                rel: "nofollow",
                "class": "main-link blog"
            })), buf.push(">博客</a></div><div"), buf.push(attrs({
                "class": "right-module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "row-0"
            })), buf.push("><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[0].length; $index < $$l; $index++) {
                var cat = groups[0][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div></div><div"), buf.push(attrs({
                "class": "row-1"
            })), buf.push("><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[1].length; $index < $$l; $index++) {
                var cat = groups[1][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[2].length; $index < $$l; $index++) {
                var cat = groups[2][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[3].length; $index < $$l; $index++) {
                var cat = groups[3][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div></div><div"), buf.push(attrs({
                "class": "row-2"
            })), buf.push("><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[4].length; $index < $$l; $index++) {
                var cat = groups[4][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "group"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[5].length; $index < $$l; $index++) {
                var cat = groups[5][$index];
                buf.push("<a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a>")
            }
            buf.push("</div>");
            if (req.promotions && req.promotions.dropdown && req.promotions.dropdown.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "group promotion"
                })), buf.push(">");
                for (var i = 0, $$l = req.promotions.dropdown.length; i < $$l; i++) {
                    var promo = req.promotions.dropdown[i];
                    i <= 6 && (buf.push("<a"), buf.push(attrs({
                        href: "" + promo.url + "",
                        target: promo.new_tab ? "_blank" : "_self",
                        rel: "nofollow",
                        "class": "brown-link"
                    })), buf.push(">" + escape((interp = promo.title) == null ? "" : interp) + "</a>"))
                }
                buf.push("</div>")
            }
            buf.push("</div></div></div><div"), buf.push(attrs({
                "class": "bottom-bar"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.switchHeaderTo('side');return false;",
                href: "#",
                "class": "to-side btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": "pin-icon"
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 固定到左侧</span></a><div"), buf.push(attrs({
                "class": "links"
            })), buf.push("><a"), buf.push(attrs({
                href: "/about/goodies/",
                rel: "nofollow"
            })), buf.push(">花瓣采集工具</a><a"), buf.push(attrs({
                href: "/about/",
                rel: "nofollow"
            })), buf.push(">关于花瓣</a><a"), buf.push(attrs({
                href: "/fm/joinus/",
                rel: "nofollow"
            })), buf.push(">加入我们</a><a"), buf.push(attrs({
                href: "/pins/53553/",
                rel: "nofollow"
            })), buf.push(">用户反馈</a><a"), buf.push(attrs({
                href: "/about/#links",
                rel: "nofollow"
            })), buf.push(">友情链接</a></div></div><div"), buf.push(attrs({
                "class": "up-arrow"
            })), buf.push('></div></div><script>((function(){if(location.hash){var a=$$("a[href="+location.hash+"]")[0];a&&(a.click(),docScroller.toElement(a))}})).delay(100),function(){app.gaqTrackPromotion(".group.promotion",{elementEvent:"click:relay(a.brown-link)",category:"dropdown-promotions",useTargetUrlAsLabel:!0})}()</script>')
        }
        return buf.join("")
    }, __t["base/pin_view_page"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "pin_view_page"
            })), buf.push(">");
            var __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/pin_view");
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><script>app.page.noPinViewLayer=!0</script>")
        }
        return buf.join("")
    }, __t["base/people_likes_boards"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "likes",
                body_tpl: "base/people_likes_boards_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/people_followers_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "desc-bar"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + " 的所有粉丝</div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var $index = 0, $$l = users.length; $index < $$l; $index++) {
                var u = users[$index],
                    __val__ = emerge("base/person_item", {
                        user: u,
                        pins: u.pins,
                        req: req
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/pin_view_material_extra"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, is_owner = this.req.user && pin.user_id === this.req.user.user_id,
                material = pin.material;
            buf.push("<div"), buf.push(attrs({
                "class": "pin-info creation-info wt"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-header"
            })), buf.push(">");
            if (pin.raw_text) {
                buf.push("<p"), buf.push(attrs({
                    "class": "text"
                })), buf.push(">");
                var __val__ = format_text(pin.raw_text, pin.text_meta, {
                    tag_icon: !0
                });
                buf.push(null == __val__ ? "" : __val__), buf.push("</p>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "info-body clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-left info-panel"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">编号:  " + escape((interp = material.material_id) == null ? "" : interp) + "</div>"), material.raw_resolution && material.raw_resolution != "0 x 0" && (buf.push("<div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">原图尺寸:  " + escape((interp = material.raw_resolution) == null ? "" : interp) + " px</div>")), material.raw_size && material.raw_size != "NaN x NaN cm" && (buf.push("<div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">原图大小:  " + escape((interp = material.raw_size) == null ? "" : interp) + "</div>")), buf.push("<div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">原图格式:  " + escape((interp = material.file_type || "JPG") == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "info-line last"
            })), buf.push("><span>版权所有:  花瓣&nbsp;</span><a"), buf.push(attrs({
                href: "/" + pin.user.urlname + "",
                "class": "brown-link x"
            })), buf.push(">@" + escape((interp = pin.user.username) == null ? "" : interp) + "</a></div></div>");
            if (material.prices && material.prices.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "info-right info-panel"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "size material"
                })), buf.push(">");
                for (var $index = 0, $$l = material.prices.length; $index < $$l; $index++) {
                    var price = material.prices[$index];
                    price.resolution != "0 x 0" && (buf.push("<label><span>" + escape((interp = price.name) == null ? "" : interp) + "</span>"), price.resolution ? (buf.push("<span"), buf.push(attrs({
                        "class": "num"
                    })), buf.push(">" + escape((interp = price.resolution) == null ? "" : interp) + " px</span>")) : price.size && (buf.push("<span"), buf.push(attrs({
                        "class": "num"
                    })), buf.push(">" + escape((interp = price.size) == null ? "" : interp) + "</span>")), buf.push("<span"), buf.push(attrs({
                        "class": "price"
                    })), buf.push(">￥" + escape((interp = price.price) == null ? "" : interp) + "</span></label>"))
                }
                buf.push("</div></div>")
            }
            buf.push("</div>"), material.type !== 2 && (buf.push("<div"), buf.push(attrs({
                "class": "info-footer"
            })), buf.push("><a"), buf.push(attrs({
                href: "/go/?pin_id=" + pin.pin_id + "",
                target: "_blank",
                rel: "nofollow",
                "class": "btn-with-icon btn btn18"
            })), buf.push(">去购买</a></div>")), buf.push("</div><script>(function(){})()</script>")
        }
        return buf.join("")
    }, __t["base/categories_cell"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, cur = "all",
                cats = {}, _categories = settings.categories.concat(settings.channels);
            _categories.unshift({
                id: "all",
                name: "全部"
            });
            for (var i = 0, l = _categories.length; i < l; i++) cats[_categories[i].id] = _categories[i];
            var cat_groups = [
                ["all", "home", "travel_places", "food_drink", "pets", "people", "film_music_books", "photography", "desire", "architecture", "tips", "funny", "art", "other"],
                ["illustration", "design", "web_app_icon"],
                ["taomm", "modeling_hair", "wedding_events", "apparel", "kids", "diy_crafts"],
                ["beauty", "cars_motorcycles", "data_presentation", "digital", "men", "sports"],
                ["videos", "web_captures"]
            ],
                keywords = typeof seo_keywords_dic == "undefined" ? {} : seo_keywords_dic;
            page.filter && ~page.filter.indexOf("category:") && (cur = page.filter.split(":").pop()), buf.push("<div"), buf.push(attrs({
                "class": "pin category wfc"
            })), buf.push(">");
            for (var i = 0, l = cat_groups.length; i < l; i++) {
                buf.push("<div"), buf.push(attrs({
                    "class": "cats " + (i === l - 1 ? "last" : "")
                })), buf.push(">");
                for (var j = 0, sl = cat_groups[i].length; j < sl; j++) {
                    var c = cats[cat_groups[i][j]],
                        keyword = keywords[c.id] || "";
                    buf.push("<a"), buf.push(attrs({
                        href: "/" + (c.id === "beauty" ? "favorite" : "all") + "/" + c.id + "/",
                        title: "" + keyword + "",
                        "class": (cur === c.id ? "selected " : " ") + c.id
                    })), buf.push("><span>");
                    var __val__ = c.name;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</span></a>")
                }
                buf.push("</div>")
            }
            cur == "web_captures" && (buf.push("<a"), buf.push(attrs({
                href: "http://huaban.com/about/goodies/chrome/",
                "class": "chrome_crx_ad"
            })), buf.push(">使用花瓣Chrome扩展 你也可以采集网页截图哦</a>")), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/index"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, qt = page.query && escape(page.query.text),
                qn = page.query && page.query.total,
                suggests = page.suggests || {}, categories = {};
            for (var i = 0; i < settings.categories.length; i++) categories[settings.categories[i].id] = settings.categories[i].name;
            var __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/ctx_bar", {
                filter: page.filter,
                qt: qt,
                qn: qn,
                categories: categories,
                settings: settings,
                user_info: page.user_info,
                _url: page.$url,
                promotion: req.promotions ? req.promotions.ctxbar_promotions : !1,
                suggests: suggests
            });
            buf.push(null == __val__ ? "" : __val__);
            var _topLeftShowing = !1;
            if (page.promotions && page.promotions.left_img) {
                var left_promos = page.promotions.left_img,
                    left_promo = Array.getRandom(left_promos);
                left_promo && (_topLeftShowing = !0)
            }
            Cookie.read("_tl0h") && (_topLeftShowing = !1);
            var topLeftPromotion_mixin = function () {
                buf.push("<a"), buf.push(attrs({
                    href: left_promo.url,
                    target: left_promo.new_tab ? "_blank" : "_self",
                    "class": "top-left-prom"
                })), buf.push("><img"), buf.push(attrs({
                    src: "http://" + settings.hbfile[left_promo.image.bucket] + "/img/promotion/" + left_promo.image.key,
                    width: 236,
                    height: left_promo.image.height
                })), buf.push("/><div"), buf.push(attrs({
                    "class": "cls"
                })), buf.push('></div></a><script>(function(){var a=document.getElement(".top-left-prom");a.getSiblings().length||(a=a.getParent(".wfc"));var b=a.getElement(".cls");b.onclick=function(){return app.page.$waterfall.remove(a),Cookie.write("_tl0h",1,{duration:10}),!1}})()</script>')
            };
            buf.push("<div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push(">");
            if (suggests && suggests.images && suggests.images.length && !page.query) {
                buf.push("<div"), buf.push(attrs({
                    "class": "category-image-box"
                })), buf.push(">");
                if (page.banner_box_promotion)
                    for (var $index = 0, $$l = page.banner_box_promotion.length; $index < $$l; $index++) {
                        var promotion = page.banner_box_promotion[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "" + promotion.url + "",
                            target: "_blank",
                            title: promotion.title,
                            rel: "nofollow",
                            "class": "category-image"
                        })), buf.push(">");
                        var image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key;
                        buf.push("<img"), buf.push(attrs({
                            width: "236",
                            height: "126",
                            src: image_url
                        })), buf.push("/></a>")
                    }
                for (var $index = 0, $$l = suggests.images.length; $index < $$l; $index++) {
                    var image = suggests.images[$index];
                    buf.push("<a"), buf.push(attrs({
                        href: "" + image.url + "",
                        target: "_blank",
                        title: image.name,
                        rel: "nofollow",
                        "class": "category-image"
                    })), buf.push("><img"), buf.push(attrs({
                        width: "236",
                        height: "126",
                        src: "" + ("http://" + image.file.bucket + ".b0.upaiyun.com/img/category_page/" + image.file.key) + ""
                    })), buf.push("/></a>")
                }
                buf.push("</div>")
            }
            buf.push("<div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            if (page.user_info) {
                buf.push("<div"), buf.push(attrs({
                    id: "user_info",
                    "class": "pin wfc"
                })), buf.push(">");
                var __val__ = emerge("base/people_profile", {
                    user_info: page.user_info,
                    user: req.user,
                    suggestion_friends: page.suggestion_friends || []
                });
                buf.push(null == __val__ ? "" : __val__), buf.push("</div>")
            } else if (~page.filter.indexOf("videos")) {
                buf.push("<div"), buf.push(attrs({
                    "class": "pin video-category wfc"
                })), buf.push(">"), _topLeftShowing && topLeftPromotion_mixin();
                var current = "videos";~
                page.filter.indexOf("youku") && (current = "youku"), ~page.filter.indexOf("ku6") && (current = "ku6"), ~page.filter.indexOf("56") && (current = "56"), buf.push("<div"), buf.push(attrs({
                    "class": "btns"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/all/videos/",
                    "class": "all btn " + (current == "videos" ? "current" : "")
                })), buf.push(">全部视频</a><a"), buf.push(attrs({
                    href: "/all/videos/youku/",
                    "class": "youku btn " + (current == "youku" ? "current" : "")
                })), buf.push(">优酷精选</a><a"), buf.push(attrs({
                    href: "/all/videos/ku6/",
                    "class": "ku6 btn " + (current == "ku6" ? "current" : "")
                })), buf.push(">酷6精选</a><a"), buf.push(attrs({
                    href: "/all/videos/56/",
                    "class": "v56 btn " + (current == "56" ? "current" : "")
                })), buf.push(">56视频</a></div></div>")
            } else _topLeftShowing && (buf.push("<div"), buf.push(attrs({
                "class": "pin wfc"
            })), buf.push(">"), topLeftPromotion_mixin(), buf.push("</div>")); if (page.promotions && (page.promotions.img_promotions || page.promotions.reading_promotions)) {
                var __val__ = emerge("base/promotions", {
                    promotions: page.promotions
                });
                buf.push(null == __val__ ? "" : __val__)
            }
            var promt = page.promotions ? page.promotions.promotion : !1;
            if (promt && promt.pin && promt.type == "pin") {
                var pin = promt.pin,
                    __val__ = emerge("base/pin_item", {
                        user: pin.user,
                        pin: pin,
                        board: pin.board,
                        promotion: promt
                    });
                buf.push(null == __val__ ? "" : __val__)
            } else if (promt && promt.board && promt.type == "board") {
                var __val__ = emerge("base/board_item", {
                    board: promt.board,
                    user: req.user,
                    promotion: promt
                });
                buf.push(null == __val__ ? "" : __val__)
            }
            if (page.pins)
                for (var $index = 0, $$l = page.pins.length; $index < $$l; $index++) {
                    var pin = page.pins[$index],
                        __val__ = emerge("base/pin_item", {
                            user: pin.user,
                            pin: pin,
                            board: pin.board
                        });
                    buf.push(null == __val__ ? "" : __val__)
                } else
                    for (var $index = 0, $$l = page.boards.length; $index < $$l; $index++) {
                        var board = page.boards[$index],
                            __val__ = emerge("base/board_item", {
                                board: board,
                                user: req.user
                            });
                        buf.push(null == __val__ ? "" : __val__)
                    }
            buf.push('</div></div><script>(function(){app.initLikeButtons(),app.initAddCommentButtons(),app.initFollowButtons()})(),function(){if(!Browser.isMobile||Cookie.read("_hmbc"))return;var a=navigator.userAgent.toLowerCase(),b=!!a.match(/ipad/),c={type:""};Browser.Platform.ios&&b?c.type="iPad":Browser.Platform.ios&&!b?c.type="iPhone":Browser.Platform.android?c.type="Android":c.type="other",document.id("elevator_item")&&document.id("elevator_item").hide(),app.render("base/mobile_callout",c,function(a,b){Elements.from(b).inject(document.body).getElement(".cls").addEvent("click",function(){document.id("mobile_callout").hide(),Cookie.write("_hmbc",1,{duration:3})}),document.getElement("#mobile_callout .back").addEvent("touchstart",function(){return document.getElement("#menu_bar .go-mobile").click(),!1})})}()</script><script>(function(){app._gaq_promotion&&app._gaq_promotion(),app.gaqTrackPromotion(".promotion .promotion-url",{category:"pin-board-promotions",useTargetUrlAsLabel:!0}),app.gaqTrackEvent(".promotion .promotion-url",{category:"Promotion"}),app.gaqTrackPromotion(".top-left-prom",{category:"top-left-promotion",useTargetUrlAsLabel:!0}),app.gaqTrackPromotion(".category-image-box .category-image",{category:"category_image_small",useTargetUrlAsLabel:!0})})()</script>')
        }
        return buf.join("")
    }, __t["base/message_deprecated_popup"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "message_popup_deprecated"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><div"), buf.push(attrs({
                "class": "tabs clearfix"
            })), buf.push("><a"), buf.push(attrs({
                "class": "tab mentions active"
            })), buf.push(">@提到我的<div"), buf.push(attrs({
                "class": "n n-0"
            })), buf.push(">0</div></a><a"), buf.push(attrs({
                "class": "tab activities"
            })), buf.push(">我的消息<div"), buf.push(attrs({
                "class": "n n-0"
            })), buf.push(">0</div></a></div></div><div"), buf.push(attrs({
                "class": "arr"
            })), buf.push("></div></div>")
        }
        return buf.join("")
    }, __t["base/people_commodities"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "commodities",
                body_tpl: "base/people_commodities_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/pin_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, _suffix = typeof suffix == "undefined" || !suffix ? "fw236" : suffix,
                promt = typeof promotion == "undefined" || !promotion ? null : promotion,
                seq = promt ? "" : pin.seq ? pin.seq : pin.pin_id,
                extraCssClass = promt ? "promotion" : "",
                board_title = board.is_private == 2 ? "待归类采集" : board.title,
                md = "";
            this.page.$url.indexOf("/ent/") != -1 && (md = "?md=ent"), buf.push("<div"), buf.push(attrs({
                "data-id": "" + pin.pin_id + "",
                "data-seq": seq,
                "data-source": "" + pin.source + "",
                "data-created-at": "" + pin.created_at + "",
                "class": "pin wfc " + ("" + extraCssClass + "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "hidden"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/" + md + ""
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</a>采集到<a"), buf.push(attrs({
                href: "/boards/" + pin.board_id + ""
            })), buf.push(">" + escape((interp = board_title) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                "class": "actions"
            })), buf.push("><div"), buf.push(attrs({
                "class": "right"
            })), buf.push(">"), this.req.user && pin.user_id === this.req.user.user_id ? (buf.push("<a"), buf.push(attrs({
                href: "/pins/" + pin.pin_id + "/edit/" + md + "",
                "class": "edit btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">编辑</span></a>")) : pin.liked ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + pin.pin_id + "",
                title: "喜欢",
                href: "#",
                onclick: "return false;",
                "class": "unlike btn-with-icon btn btn14"
            })), buf.push("><i"), buf.push(attrs({
                "class": "heart"
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> " + escape((interp = pin.like_count) == null ? "" : interp) + "</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + pin.pin_id + "",
                title: "喜欢",
                href: "#",
                onclick: "return false;",
                "class": "like btn-with-icon btn btn14"
            })), buf.push("><i"), buf.push(attrs({
                "class": "heart"
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> " + escape((interp = pin.like_count ? pin.like_count : "") == null ? "" : interp) + "</span></a>")), buf.push("</div>"), pin.private || (buf.push("<div"), buf.push(attrs({
                "class": "left"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.requireLogin(function(){ app.showDialogBox('repin', {pin_id:'" + pin.pin_id + "'});});return false;",
                href: "#",
                "class": "repin btn btn14 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 采集</span></a></div>")), buf.push("</div>");
            var size = imgSize(pin.file, _suffix),
                pinUrl = "/pins/" + pin.pin_id + "/" + md,
                targetUrl = promt ? promt.url || pinUrl : pinUrl,
                target = promt ? promt.new_tab ? "_blank" : "_self" : "_self",
                extra_css_class = [];
            size.h > 800 && extra_css_class.push("long"), promt && extra_css_class.push("promotion-url"), extra_css_class = extra_css_class.join(" "), buf.push("<a"), buf.push(attrs({
                href: "" + targetUrl + "" + md + "",
                target: "" + target + "",
                "class": "img " + ("" + extra_css_class + "") + " " + "x" + " " + "layer-view"
            })), buf.push("><div"), buf.push(attrs({
                "class": "default-bg"
            })), buf.push(">");
            var __val__ = pin.source;
            buf.push(null == __val__ ? "" : __val__), buf.push("</div>");
            var __val__ = img(pin.file, _suffix, {
                alt: user.username + "采集到" + board_title
            });
            buf.push(null == __val__ ? "" : __val__), pin.media_type === 1 && (buf.push("<img"), buf.push(attrs({
                src: "/img/media_video.png",
                "class": "video-icon"
            })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                style: "display: " + (size.h > 800 ? "block" : "none") + "",
                "class": "stop"
            })), buf.push("></span>");
            if (pin.commodity && pin.commodity.price) {
                var currency = pin.commodity.extra && pin.commodity.extra.currency ? pin.commodity.extra.currency + " " : "￥";
                buf.push("<div"), buf.push(attrs({
                    "class": "price"
                })), buf.push(">" + escape((interp = currency) == null ? "" : interp) + " " + escape((interp = Math.round(pin.commodity.price * 10) / 10) == null ? "" : interp) + "</div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "cover"
            })), buf.push("></div></a>");
            if (pin.raw_text) {
                buf.push("<p"), buf.push(attrs({
                    "class": "description"
                })), buf.push(">");
                var __val__ = format_text(pin.raw_text, pin.text_meta);
                buf.push(null == __val__ ? "" : __val__), buf.push("</p>")
            }
            if (pin.like_count || pin.comment_count || pin.repin_count) buf.push("<p"), buf.push(attrs({
                "class": "stats less"
            })), buf.push(">"), pin.repin_count && (buf.push("<span"), buf.push(attrs({
                title: "转采",
                "class": "repin"
            })), buf.push("><i></i>" + escape((interp = pin.repin_count) == null ? "" : interp) + "</span>")), pin.like_count && (buf.push("<span"), buf.push(attrs({
                title: "喜欢",
                "class": "like"
            })), buf.push("><i></i>" + escape((interp = pin.like_count) == null ? "" : interp) + "</span>")), pin.comment_count && (buf.push("<span"), buf.push(attrs({
                title: "评论",
                "class": "comment"
            })), buf.push("><i></i>" + escape((interp = pin.comment_count) == null ? "" : interp) + "</span>")), buf.push("</p>");
            buf.push("<div"), buf.push(attrs({
                "class": "convo attribution clearfix"
            })), buf.push(">"), locals.hide_user ? !pin.hide_origin && pin.source ? (buf.push("<p"), buf.push(attrs({
                "class": "NoImage"
            })), buf.push("><a"), buf.push(attrs({
                href: "/from/" + pin.source + "/" + md + "",
                "class": "x"
            })), buf.push(">" + escape((interp = pin.source) == null ? "" : interp) + "</a><a"), buf.push(attrs({
                title: "评论",
                "class": "replyButton"
            })), buf.push("></a></p>")) : (buf.push("<p"), buf.push(attrs({
                "class": "NoImage"
            })), buf.push("><a"), buf.push(attrs({
                title: "评论",
                "class": "replyButton"
            })), buf.push("></a></p>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                rel: "nofollow",
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user),
                "class": "avt"
            })), buf.push("/></a>"), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("<div"), buf.push(attrs({
                "class": "text"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/" + md + "",
                "class": "author x"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</a>&nbsp;采集到&nbsp;</div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/boards/" + pin.board_id + "/" + md + "",
                "class": "x"
            })), buf.push(">" + escape((interp = board.is_private == 2 ? "待归类采集" : board.title) == null ? "" : interp) + "</a></div><a"), buf.push(attrs({
                title: "评论",
                "class": "replyButton"
            })), buf.push("></a></div></div>")), buf.push("</div><div"), buf.push(attrs({
                style: pin.comments ? "" : "display:none;",
                "class": "comments muted"
            })), buf.push(">");
            if (pin.comments)
                for (var $index = 0, $$l = pin.comments.length; $index < $$l; $index++) {
                    var comment = pin.comments[$index],
                        __val__ = emerge("base/comment_item_convo", comment);
                    buf.push(null == __val__ ? "" : __val__)
                }
            buf.push("</div>"), au = this.req.user || {
                urlname: "",
                username: ""
            }, buf.push("<div"), buf.push(attrs({
                style: "display: " + (pin.comments ? "block" : "none") + ";",
                "class": "write convo clearfix"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(au.urlname) + "/",
                title: escape(au.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(au)
            })), buf.push("/></a>"), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("<form"), buf.push(attrs({
                action: "/pins/" + pin.pin_id + "/comments/",
                method: "POST"
            })), buf.push("><textarea"), buf.push(attrs({
                placeholder: "添加评论或把采集@给好友",
                "class": "clear-input GridComment"
            })), buf.push("></textarea><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "grid_comment_button btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 添加评论</span></a></form></div>"), promt && promt.show_icon && (buf.push("<div"), buf.push(attrs({
                "class": "promotion-icon"
            })), buf.push("></div>")), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/header_side_menu"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, categories = settings.categories,
                groups = [];
            for (var i = 0, l = categories.length; i < l; i++) {
                var category = categories[i];
                if (category.display === !1) continue;
                category.nav_link = "/favorite/" + category.id + "/", groups[category.group] = groups[category.group] || [], groups[category.group].push(category)
            }
            var moreLinks_mixin = function () {
                buf.push("<div"), buf.push(attrs({
                    "class": "menu more-links"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "row-0"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[0].length; e < t; e++) {
                    var n = groups[0][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div></div><div"), buf.push(attrs({
                    "class": "row-1"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[1].length; e < t; e++) {
                    var n = groups[1][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[2].length; e < t; e++) {
                    var n = groups[2][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[3].length; e < t; e++) {
                    var n = groups[3][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div></div><div"), buf.push(attrs({
                    "class": "row-2"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[4].length; e < t; e++) {
                    var n = groups[4][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "group clearfix"
                })), buf.push(">");
                for (var e = 0, t = groups[5].length; e < t; e++) {
                    var n = groups[5][e];
                    buf.push("<a"), buf.push(attrs({
                        href: n.nav_link,
                        rel: "nofollow"
                    })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                }
                buf.push("</div>");
                if (req.promotions && req.promotions.dropdown && req.promotions.dropdown.length) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "group promotion"
                    })), buf.push(">");
                    for (var r = 0, t = req.promotions.dropdown.length; r < t; r++) {
                        var i = req.promotions.dropdown[r];
                        if (r <= 6) {
                            var s = i.new_tab ? "_blank" : "_self";
                            buf.push("<a"), buf.push(attrs({
                                href: "" + i.url + "",
                                target: "" + s + "",
                                rel: "nofollow"
                            })), buf.push(">" + escape((interp = i.title) == null ? "" : interp) + "</a>")
                        }
                    }
                    buf.push("</div>")
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "pointer"
                })), buf.push("></div></div>")
            }, infoLinks_mixin = function () {
                    buf.push("<div"), buf.push(attrs({
                        "class": "menu info-links"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/about/goodies/",
                        rel: "nofollow"
                    })), buf.push(">采集工具</a><a"), buf.push(attrs({
                        href: "/about",
                        rel: "nofollow"
                    })), buf.push(">关于花瓣</a><a"), buf.push(attrs({
                        href: "/pins/53553/",
                        rel: "nofollow"
                    })), buf.push(">用户反馈</a><a"), buf.push(attrs({
                        href: "/about/#links",
                        rel: "nofollow"
                    })), buf.push(">友情链接</a><a"), buf.push(attrs({
                        href: "/fm/joinus",
                        rel: "nofollow"
                    })), buf.push(">加入我们</a><div"), buf.push(attrs({
                        "class": "pointer"
                    })), buf.push("></div></div>")
                }, selectionLinks_mixin = function () {
                    buf.push("<div"), buf.push(attrs({
                        "class": "menu selection-links"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/activities/",
                        rel: "nofollow"
                    })), buf.push(">活动</a><a"), buf.push(attrs({
                        href: "/weekly/?md=top2",
                        rel: "nofollow"
                    })), buf.push(">周刊</a><a"), buf.push(attrs({
                        target: "_blank",
                        href: "http://blog.huaban.com/?md=top2",
                        rel: "nofollow"
                    })), buf.push(">博客</a><div"), buf.push(attrs({
                        "class": "pointer"
                    })), buf.push("></div></div>")
                };
            buf.push("<div"), buf.push(attrs({
                id: "header_side_menu"
            })), buf.push("><div"), buf.push(attrs({
                "class": "nav pinned"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.switchHeaderTo('normal')",
                title: "解除锁定",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav following"
            })), buf.push("><a"), buf.push(attrs({
                href: "/following/",
                "data-title": "我的关注",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav all"
            })), buf.push("><a"), buf.push(attrs({
                href: "/all/",
                "data-title": "最新采集",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav videos"
            })), buf.push("><a"), buf.push(attrs({
                href: "/all/videos/",
                "data-title": "视频",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav more"
            })), buf.push("><a"), buf.push(attrs({
                "class": "nav-link"
            })), buf.push("><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div><i></i></a></div><div"), buf.push(attrs({
                "class": "nav selection"
            })), buf.push("><a"), buf.push(attrs({
                "class": "nav-link"
            })), buf.push("><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div><i></i></a></div><div"), buf.push(attrs({
                "class": "nav apps"
            })), buf.push("><a"), buf.push(attrs({
                target: "_blank",
                href: "/apps/?md=top2",
                "data-title": "花瓣移动应用",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav design"
            })), buf.push("><a"), buf.push(attrs({
                href: "/cc/?md=top2",
                "data-title": "花瓣原创",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav gift"
            })), buf.push("><a"), buf.push(attrs({
                href: "/gift/?md=top2",
                "data-title": "花瓣礼物",
                rel: "nofollow",
                "class": "nav-link"
            })), buf.push("><i></i></a></div><div"), buf.push(attrs({
                "class": "nav info"
            })), buf.push("><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div><i></i></div>"), moreLinks_mixin(), infoLinks_mixin(), selectionLinks_mixin(), buf.push('</div><script>((function(){if(location.hash){var a=$$("a[href="+location.hash+"]")[0];a&&(a.click(),docScroller.toElement(a))}})).delay(100)</script>')
        }
        return buf.join("")
    }, __t["base/board_list_filtrate"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "group create"
            })), buf.push("><div"), buf.push(attrs({
                "class": "side-title"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "selections"
            })), buf.push("><a"), buf.push(attrs({
                "data-name": name,
                "class": "board create-board"
            })), buf.push(">创建画板“" + escape((interp = name) == null ? "" : interp) + "”</a></div></div><div"), buf.push(attrs({
                "class": "group"
            })), buf.push("><div"), buf.push(attrs({
                "class": "side-title"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "selections"
            })), buf.push(">");
            for (var $index = 0, $$l = locals.boards.length; $index < $$l; $index++) {
                var board = locals.boards[$index];
                buf.push("<a"), buf.push(attrs({
                    title: board.title,
                    "data-board-id": board.board_id,
                    "class": "board"
                })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a>")
            }
            buf.push("</div></div>")
        }
        return buf.join("")
    }, __t["base/reading_promotions"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (promotions && promotions.length > 0) {
                buf.push("<div"), buf.push(attrs({
                    "class": "reading-promotions"
                })), buf.push("><h3>推荐阅读</h3>");
                var per_page = 3,
                    page = 0,
                    total_pages = Math.floor((promotions.length - 1) / per_page) + 1,
                    current_page = Math.floor(Math.random() * total_pages + 1);
                while (promotions.length > 0) {
                    var promotions_per_page = promotions.splice(0, per_page),
                        style = "";
                    page++, page != current_page && (style = "display: none;"), buf.push("<ul"), buf.push(attrs({
                        style: "" + style + "",
                        "class": "page" + page + ""
                    })), buf.push(">");
                    for (var $index = 0, $$l = promotions_per_page.length; $index < $$l; $index++) {
                        var promotion = promotions_per_page[$index];
                        buf.push("<li"), buf.push(attrs({
                            "class": "reading-item"
                        })), buf.push(">");
                        var image_url = "",
                            target = promotion.new_tab ? "_blank" : "_self";
                        promotion.image && (image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key), buf.push("<a"), buf.push(attrs({
                            href: "" + promotion.url + "",
                            target: "" + target + ""
                        })), buf.push("><img"), buf.push(attrs({
                            src: "" + image_url + "",
                            height: "50",
                            width: "50",
                            alt: !0
                        })), buf.push("/></a><h4><a"), buf.push(attrs({
                            href: "" + promotion.url + "",
                            target: "" + target + ""
                        })), buf.push(">" + escape((interp = promotion.title) == null ? "" : interp) + "</a></h4><div"), buf.push(attrs({
                            "class": "subtitle"
                        })), buf.push(">" + escape((interp = promotion.sub_title) == null ? "" : interp) + "</div></li>")
                    }
                    buf.push("</ul>")
                }
                if (total_pages > 1) {
                    buf.push("<ul"), buf.push(attrs({
                        "class": "pager"
                    })), buf.push(">");
                    for (var i = 1; i <= page; i++) {
                        var li_class = "";
                        i == current_page && (li_class = "current"), buf.push("<li"), buf.push(attrs({
                            "data-page": "" + i + "",
                            "class": "" + li_class + ""
                        })), buf.push(">●</li>")
                    }
                    buf.push("</ul>")
                }
                buf.push("</div>")
            }
            buf.push('<script>(function(){var a=$$(".reading-promotions ul.pager li");a.length>0&&a.addEvent("click",function(){if(this.hasClass("current"))return;var a=$$(".reading-promotions ul.pager li.current")[0],b=a.get("data-page"),c=$$(".reading-promotions ul.page"+b)[0],d=this.get("data-page"),e=$$(".reading-promotions ul.page"+d)[0];c.hide(),a.removeClass("current"),this.addClass("current"),e.show(),app.page.$waterfall.update(this.getParent(".promotions"))}),app.gaqTrackPromotion(".reading-promotions",{category:"category_reading_promotions",useTargetUrlAsLabel:!0,elementEvent:"click:relay(.reading-item a)"})})()</script>')
        }
        return buf.join("")
    }, __t["base/people_profile"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, req = req || app.req;
            buf.push("<div"), buf.push(attrs({
                id: "Profile"
            })), buf.push("><div"), buf.push(attrs({
                "class": "profile-basic"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                width: "54",
                height: "54",
                src: avatar(user)
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "userlink"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + ""), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("</a><a"), buf.push(attrs({
                href: "/settings/",
                title: "帐号设置",
                "class": "settings"
            })), buf.push("></a></div><div"), buf.push(attrs({
                "class": "profile-stats"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/pins/"
            })), buf.push("><strong>" + escape((interp = user_info.pin_count) == null ? "" : interp) + "</strong>采集</a><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "middle"
            })), buf.push("><strong>" + escape((interp = user_info.board_count) == null ? "" : interp) + "</strong>画板</a><a"), buf.push(attrs({
                href: "/" + user.urlname + "/followers/"
            })), buf.push("><strong>" + escape((interp = user_info.follower_count) == null ? "" : interp) + "</strong>粉丝</a></div>"), user.status.newbietask === 1 && (buf.push("<div"), buf.push(attrs({
                style: "display: none",
                "class": "unit"
            })), buf.push("><div"), buf.push(attrs({
                id: "task_start_tip"
            })), buf.push(">欢迎来到花瓣网，跟着花小瓣玩转花瓣吧！<div"), buf.push(attrs({
                "class": "start-button"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div><div"), buf.push(attrs({
                id: "task_progress"
            })), buf.push("><h3>用花瓣采集你喜欢的</h3><ol><li>创建画板</li><li>把精彩图片采集到画板中</li></ol></div></div><div"), buf.push(attrs({
                id: "task_modules",
                style: "display:none"
            })), buf.push("><div"), buf.push(attrs({
                "class": "module-exit module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "cancel"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "exit"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "module-step1-1 module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "next"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "data-relative-to": "#menu_bar .add-nav",
                "data-offset-x": "-176",
                "data-offset-y": "0",
                "class": "module-step1-2 module pos"
            })), buf.push("><div"), buf.push(attrs({
                "class": "add"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "point"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "data-relative-to": "#menu_bar .add-nav .menu a i.add-board",
                "data-offset-x": "-150",
                "data-offset-y": "-15",
                "class": "module-step1-3 module pos"
            })), buf.push("><div"), buf.push(attrs({
                "class": "add"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "point"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "data-relative-to": "#CreateBoard .CategoryPicker",
                "data-offset-x": "200",
                "data-offset-y": "50",
                "class": "module-step1-4 module pos"
            })), buf.push("><div"), buf.push(attrs({
                "data-relative-to": "#CreateBoard .close-btn",
                "data-offset-x": "0",
                "data-offset-y": "0",
                "class": "fake-close pos"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "module-step1-5 module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "next"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "module-step2-1 module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "text1"
            })), buf.push(">看到网页上不错的设计素材、优秀的摄影作品、好看的服饰、发型等美图，通过花瓣采集工具，点击一下，就可以把任意网站的图片、视频、网页等采集到画板中。点击图片还能回到原网页。</div><div"), buf.push(attrs({
                "class": "text2"
            })), buf.push(">从电脑中选择图片，上传，还能同步到第三方平台，让好友了解你的最新状态。</div><div"), buf.push(attrs({
                "class": "text3"
            })), buf.push(">点击转采按钮，即可把其他用户的美图转到自己的画板中，因为共同的兴趣，说不定还能和他们成为好友哦。</div><a"), buf.push(attrs({
                target: "_blank",
                href: "/about/goodies/",
                "class": "go"
            })), buf.push("></a><a"), buf.push(attrs({
                target: "_blank",
                href: "/about/goodies/",
                style: "display:none",
                "class": "go-goodies"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "module-step2-2 module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "next"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "module-welcome module"
            })), buf.push("><div"), buf.push(attrs({
                "class": "start"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div></div>"));
            if (suggestion_friends.length > 0) {
                buf.push("<div"), buf.push(attrs({
                    "class": "all-friends convo"
                })), buf.push(">已在花瓣的好友<a"), buf.push(attrs({
                    href: "/friends/weibo/"
                })), buf.push(">查看全部</a></div>");
                var cnt = 0;
                for (var $index = 0, $$l = suggestion_friends.length; $index < $$l; $index++) {
                    var f = suggestion_friends[$index];
                    if (cnt >= 3) break;
                    cnt += 1;
                    var __val__ = emerge("base/suggest_friend", {
                        friend: f
                    });
                    buf.push(null == __val__ ? "" : __val__)
                }
            } else buf.push("<div"), buf.push(attrs({
                "class": "profile-acts convo"
            })), buf.push("><div"), buf.push(attrs({
                "class": "links"
            })), buf.push("><a"), buf.push(attrs({
                href: "/friends/weibo/",
                "class": "btn wbtn"
            })), buf.push("><strong><em></em> 查找在花瓣的好友</strong><span></span></a></div></div>");
            buf.push('</div><script>(function(){var a=[],b=[],c=$("Profile").getElement(".profile-acts"),d=$("Profile");app.initFollowUserButtons(function(a){function c(c,d){if(d){var f=a.getParent(".suggestion").get("data-id");f&&!~b.indexOf(f)&&b.push(f),e(a.getParent(".suggestion"))}else(new Button(c.removeClass("unfollow"))).setTitle("关注")}$$("a.unfollowuser").each(function(b){c(b,a.hasClass("unfollowuser"))})}),d&&d.addEvent("click:relay(.suggestion a.mute)",function(a){var c=a.target;c.get("tag")!=="a"&&(c=c.getParent("a"));var d=c.get("data-friend-urlname"),f=c.get("data-service-name");(new Request.JSON({url:"/friends_suggest/mute/",data:{friend_urlname:d,service_name:f},onSuccess:function(a){!~b.indexOf(d)&&b.push(d),e(c.getParent(".suggestion"))}})).post()});var e=function(b){b&&b.dispose(),a.length>0?f():(new Request.JSON({url:"/friends_suggest/",data:{limit:10},onSuccess:function(b){b&&b.suggestion_friends&&b.suggestion_friends.length>0&&(a=b.suggestion_friends,f())}})).get(),setTimeout(function(){app.page.$waterfall&&app.page.$waterfall.reposition(!0)},100)},f=function(){var e=a.shift();while(e){var f=d.getElement(".suggestion[data-id="+e.urlname+"]");if(~b.indexOf(e.urlname)||f){e=a.shift();continue}app.render("base/suggest_friend",{friend:e},function(a,b){Elements.from(b)[0].inject(c,"before"),a&&Browser.exec(a)}),setTimeout(function(){app.page.$waterfall&&app.page.$waterfall.reposition(!0)},100);if(d.getElements(".suggestion").length<3){e=a.shift();continue}break}}})(),function(){document.id("task_start_tip")&&Asset.javascript("/js/user_task.js")}()</script>')
        }
        return buf.join("")
    }, __t["base/pin_success"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "form"
            })), buf.push("><div"), buf.push(attrs({
                "class": "pin-prompt"
            })), buf.push("><div"), buf.push(attrs({
                "class": "text"
            })), buf.push(">成功采集到<a"), buf.push(attrs({
                href: "#",
                "class": "brown-link prompt-board-link"
            })), buf.push("></a>|<a"), buf.push(attrs({
                href: "#",
                "class": "brown-link prompt-pin-link"
            })), buf.push(">查看采集</a></div></div><div"), buf.push(attrs({
                "class": "pin-done"
            })), buf.push("><h3"), buf.push(attrs({
                "class": "recommend-title"
            })), buf.push("></h3><div"), buf.push(attrs({
                "class": "recommend-board clearfix"
            })), buf.push('></div></div></div><script>(function(){app.initFollowButtons();var a=document.getElement(".pin-done .recommend-board"),b=document.getElement(".pin-done .recommend-title");(new Request.JSON({url:"/pins/"+app.$pin.pin_id+"/recommendBoards/",onSuccess:function(c){if(c.err||!c.boards)return;a.show();var d=$("pin_success").getElement(".box-title"),e=$("pin_success").getElement(".prompt-board-link"),f=$("pin_success").getElement(".prompt-pin-link");e.set("text",app.$pin.board.title),e.set("href","/boards/"+app.$pin.board.board_id+"/"),f.set("href","/pins/"+app.$pin.pin_id+"/");var g=c.boards[0];if(g)b.set("text",c.title),app.render("base/board_item",{board:g,user:app.req.user},function(b,c){Elements.from(c).inject(a),b&&Browser.exec(b);var e=setTimeout(function(){d.getElement(".close-btn").fireEvent("click"),clearTimeout(e)},5e3);app.gaqTrackEvent("#pin_success .recommend-board a.link",{category:"recommend_board_link"}),app.gaqTrackEvent("#pin_success .recommend-board .follow",{category:"recommend_board_follow"})});else{b.set("html",\'<span class="timer">3</span> 秒后自动关闭\');var h=b.getElement(".timer"),i=3;setInterval(function(){i-=1,h.set("text",i),i==0&&d.getElement(".close-btn").fireEvent("click")},1e3)}}})).get()})()</script>')
        }
        return buf.join("")
    }, __t["base/people_list_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "data-seq": "" + user.seq + "",
                "class": "person"
            })), buf.push("><div"), buf.push(attrs({
                "class": "PersonPins"
            })), buf.push(">");
            for (var $index = 0, $$l = user.pins.length; $index < $$l; $index++) {
                var pin = user.pins[$index];
                buf.push("<a"), buf.push(attrs({
                    href: "/pins/" + pin.pin_id + "/",
                    "class": "img"
                })), buf.push("><img"), buf.push(attrs({
                    src: imgURL(pin.file, "sq75")
                })), buf.push("/></a>")
            }
            buf.push("</div><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "PersonImage img"
            })), buf.push("><img"), buf.push(attrs({
                src: "" + this.avatar(user) + "",
                alt: "" + user.username + ""
            })), buf.push("/></a><p"), buf.push(attrs({
                "class": "PersonIdentity"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</a></p>"), req.user && user.user_id === req.user.user_id ? (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "disabled btn btn14 rbtn"
            })), buf.push("><strong> 你</strong><span></span></a>")) : user.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + user.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "unfollowuser btn btn14 wbtn"
            })), buf.push("><strong> 取消关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + user.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "followuser btn btn14 rbtn"
            })), buf.push("><strong> 关注</strong><span></span></a>")), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/bookmarklet"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "bookmarklet"
            })), buf.push(">");
            var __val__ = emerge("base/pin_create", {
                text: page.description,
                req: req,
                media: page.media[0]
            });
            buf.push(null == __val__ ? "" : __val__), buf.push('</div><script>(function(){((function(){var a={width:document.html.clientWidth,height:document.html.clientHeight};window.resizeBy(632-a.width,320-a.height)})).delay(300);var a=document.id("bookmarklet"),b=a.getElement(".text-block .description"),c=a.getElement(".board-list"),d=a.getElement(".action"),e=a.getElements(".shares .share"),f=a.getElement(".preview img"),g=app.page.media[0];d.addEvent("click",function(){if(this.hasClass("disabled"))return;var a=c.get("data-board-id");if(!a)return app.alert("请选择或者创建一个画板");var d={board_id:a,text:b.value,via:app.page.via||2,media_type:app.page.media_type||0,video:app.page.video||0,file_ticket:app.page.file_ticket||null,link:app.page.url,check:!0},f=0;e.each(function(a){if(!a.hasClass("active"))return;var b=a.get("data-key"),c=a.get("data-flag");d[b]=!0,f|=c;try{ga("send","event","SocialShare",b+":{api}","PinDialog:"+app.page.pin.source),_paq.push(["trackEvent","SocialShare",b+":{api}","PinDialog:"+app.page.pin.source])}catch(e){}}),app.req.user.status.share=d.share_button=f,i(d)});var h=!1,i=function(a){d.addClass("disabled");var b=(new Request.JSON({url:"/pins/",data:a,onSuccess:function(b){if(b.err&&b.msg&&~b.msg.indexOf("抓取")&&f.src.indexOf("data\\:image")==0){if(h)return app.alert(b.msg);j(f.src,function(b){h=!0;if(b.err)return app.alert(b.msg||"上传文件失败");a.file_id=b.id,delete a.file_ticket,i(a)});return}if(b.err){app.error(b.msg||app.COMMON_ERRMSG),app.feedback(Object.merge(a,b));return}if(b.warning==100){app.confirm(\'你已经在画板<a target="_blank" href="/boards/\'+b.pin.board.board_id+\'/">\'+b.pin.board.title+"</a>中采集过这张图片，是否继续？",function(b){if(!b)return;delete a.check,i(a)});return}app.hideDialogBox("repin"),app.$pin=b.pin,app.route("/bookmarklet_success");if(!Browser.ie||Browser.version>=10)try{window.opener.postMessage("complete:"+g,"*"),window.opener.postMessage("singlePinComplete","*")}catch(c){}},onFailure:function(b){app.feedback(Object.merge(a,{err:b.status}))},onComplete:function(){d.removeClass("disabled")}})).post()},j=function(a,b){d.addClass("disabled"),(new Request.JSON({url:"/upload/",data:{file:a},onSuccess:b,onFailure:function(){app.alert("上传文件失败")}})).post()}})()</script>')
        }
        return buf.join("")
    }, __t["base/pin_form"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, designer = this.req && this.req.user && this.req.user.status && this.req.user.status.designer;
            buf.push("<div"), buf.push(attrs({
                style: "display:none",
                "class": "pbt " + ("" + (designer ? "designer" : "") + "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "ImagePicker"
            })), buf.push("><img"), buf.push(attrs({
                src: "/img/load2.gif",
                alt: "Loading Indicator",
                "class": "load"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "Images pin carousel-container"
            })), buf.push("><div"), buf.push(attrs({
                "class": "carousel-clip"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "carousel-list"
            })), buf.push("><li><img"), buf.push(attrs({
                src: "/img/DefaultPin.gif",
                alt: "Media"
            })), buf.push("/></li></ul></div></div><div"), buf.push(attrs({
                "class": "Arrows"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                "class": "imagePickerNext picker"
            })), buf.push(">下一张&nbsp;→<span"), buf.push(attrs({
                "class": "imagePickerNextArrow"
            })), buf.push("></span></a><a"), buf.push(attrs({
                href: "#",
                "class": "imagePickerPrevious picker"
            })), buf.push(">←&nbsp;上一张<span"), buf.push(attrs({
                "class": "imagePickerPreviousArrow"
            })), buf.push("></span></a></div></div><div"), buf.push(attrs({
                "class": "pin-form clearfix"
            })), buf.push(">");
            var __val__ = emerge("base/board_list", {
                currentBoard: "default"
            });
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                "class": "InputArea"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "Form FancyForm"
            })), buf.push("><li"), buf.push(attrs({
                "class": "nmb"
            })), buf.push("><div"), buf.push(attrs({
                "class": "pin-desc"
            })), buf.push("><textarea"), buf.push(attrs({
                rows: "2",
                name: "caption",
                "class": "DescriptionTextarea"
            })), buf.push(">" + escape((interp = typeof text != "undefined" ? text : "") == null ? "" : interp) + "</textarea><label>这里填写相关描述</label><div"), buf.push(attrs({
                "class": "tag-tip"
            })), buf.push("><span>通过 #标签# 可以给采集添加标签，方便你更好地整理采集</span></div><div"), buf.push(attrs({
                "class": "tag-prompt-wrapper"
            })), buf.push("><div"), buf.push(attrs({
                style: "display:none;",
                "class": "tag-prompt"
            })), buf.push("><span>推荐标签:</span><div"), buf.push(attrs({
                "class": "tags"
            })), buf.push("></div></div><div"), buf.push(attrs({
                style: "display:none;",
                "class": "tag-prompt tag-prompt-more"
            })), buf.push("><span>更多推荐:</span><div"), buf.push(attrs({
                "class": "tags tags-more"
            })), buf.push("></div></div></div></div></li></ul></div><div"), buf.push(attrs({
                "class": "CreateBoardStatus error mainerror"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "share-opts"
            })), buf.push(">");
            var bindings = [];
            req.user.bindings.weibo && bindings.push({
                key: "weibo",
                value: "新浪微博"
            }), req.user.bindings.qzone && bindings.push({
                key: "qzone",
                value: "QQ空间"
            }), req.user.bindings.tqq && bindings.push({
                key: "tqq",
                value: "腾讯微博"
            }), req.user.bindings.renren && bindings.push({
                key: "renren",
                value: "人人"
            });
            if (bindings.length > 0) {
                buf.push("<span>分享到：</span>");
                for (var i = 0, $$l = bindings.length; i < $$l; i++) {
                    var binding = bindings[i];
                    if (i < 2) {
                        var css_class = binding.key + " enabled" + (i == 1 ? " last" : "");
                        buf.push("<label"), buf.push(attrs({
                            "class": "" + css_class + ""
                        })), buf.push("><input"), buf.push(attrs({
                            type: "checkbox",
                            checked: !0,
                            "data-key": "" + binding.key + ""
                        })), buf.push("/><span>" + escape((interp = binding.value) == null ? "" : interp) + "</span></label>")
                    }
                }
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "Buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><strong> 采下来</strong><span></span></a></div></div>"), designer && (buf.push("<div"), buf.push(attrs({
                "class": "creation-property"
            })), buf.push("><div"), buf.push(attrs({
                "class": "creation-column"
            })), buf.push("><span"), buf.push(attrs({
                "class": "title"
            })), buf.push(">源文件下载所需价格:</span><input"), buf.push(attrs({
                type: "number",
                name: "price",
                id: "price",
                "class": "clear-input"
            })), buf.push("/>RMB</div><div"), buf.push(attrs({
                "class": "creation-column"
            })), buf.push("><span"), buf.push(attrs({
                "class": "title"
            })), buf.push(">授权方式:</span><label><input"), buf.push(attrs({
                type: "radio",
                name: "authorize",
                value: "business"
            })), buf.push("/> 原创商业授权</label><label><input"), buf.push(attrs({
                type: "radio",
                name: "authorize",
                value: "edit"
            })), buf.push("/> 原创编辑授权</label><label><input"), buf.push(attrs({
                type: "radio",
                name: "authorize",
                value: "noright"
            })), buf.push("/>只展示不出售</label></div></div>")), buf.push("</div><div"), buf.push(attrs({
                id: "pin_confirm_popup",
                style: "display: none;"
            })), buf.push("><div"), buf.push(attrs({
                "class": "notice"
            })), buf.push('>你已经在画板<span class="board-name">待归类采集</span>中采集过这张图片，是否继续？</div><div'), buf.push(attrs({
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18 wbtn"
            })), buf.push("><strong> 取消</strong><span></span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "continue btn btn18 rbtn"
            })), buf.push("><strong> 继续</strong><span></span></a><div"), buf.push(attrs({
                "class": "clear"
            })), buf.push('></div></div></div><script>(function(){var a={weibo:1,qzone:2,tqq:4,douban:8,renren:16},b={},c={duration:3650},d=app.page.params&&app.page.params.via||null,e=app.page.params&&app.page.params.file_ticket||null;$$("div.pbt").each(function(c){var f=app.req.user.status.share;if(c.retrieve("initialized"))return;var g=$("bookmarklet")!==null;g&&$$(".creation-property").setStyle("display","none");var h=c.getElement("textarea.DescriptionTextarea"),i=function(){var a=!1;return function(b,c){c=typeof c=="function"?c:function(){};if(a)return c();a=!0,setTimeout(function(){(new Request.JSON({url:"/feedback/pin",data:b,onSuccess:function(a){c()},onFailure:function(){a=!1,c()}})).post()},5e3)}}(),j=new ImagePicker(c.getElement(".ImagePicker"));new FancyInput(h),h.get("registered-at")||(h.set("registered-at","registered"),new Autocompleter.Contacts.At(h));var k=c.getElements(".pin-form .share-opts input[type=checkbox]");k.each(function(b){var c=b.get("data-key"),d=b.getParent("label");f&a[c]||(d.removeClass("enabled"),d.addClass("disabled"),b.removeProperty("checked")),b.addEvent("change",function(){return b.get("checked")?(d.removeClass("disabled"),d.addClass("enabled")):(d.removeClass("enabled"),d.addClass("disabled")),!1})});var l=c.getElement(".board-list"),m=$$(".tag-tip")[0],n=$$(".tag-prompt")[0],o=$$(".tag-prompt-more")[0],p=n.getElement(".tags"),q=o.getElement(".tags");h.addEvent("keyup",function(){var a=h.get("value"),b=p.getElements("a");b.each(function(b){var c=b.get("data-tag");c="#"+c+"#",!~a.indexOf(c)&&b.hasClass("selected")&&b.removeClass("selected")})}),$$(".tag-prompt").addEvent("click:relay(a)",function(a){var b=a.target;b.get("tag")!="a"&&(b=b.getParent()),n.getElements("a").removeClass("selected"),b.addClass("selected");var c=b.get("data-tag");this.hasClass("tag-prompt-more")||s(c,this),c="#"+c+"#";var d=h.get("value");if(~d.indexOf(c)){"function"==typeof h.selectRange&&h.selectRange(d.indexOf(c),c.length+d.indexOf(c));return}h.focus(),h.set("value",d.trim()+" "+c)}),l.master.addEvent("select",function(){var a={};app.req.user.boards.each(function(b){a[b.board_id]=b});var b=l.get("data-board-id");if(!a[b])return;o.setStyle("display","none");var c=a[b].recommend_tags||[];if(!c||!c.length){n.hide();return}p.empty();var d=[];for(var e=0;e<c.length;e++)d.push(new Element("a",{title:c[e],"data-tag":c[e],html:\'<svg class="triangle"><polygon points="0 4, 2 0, 4 4, 2 0"></polygon></svg>\'+c[e]}));d.length?(p.adopt(d),m.hide(),n.show()):(n.hide(),m.show())});var r=function(a,b){if(!a||!a.length||a.error){o.setStyle("display","none"),n.getElements("a").removeClass("selected");return}q.set("text",""),a.each(function(a,b){if(b>5)return;(new Element("a",{text:a,title:a,"data-tag":a})).inject($$(".tags-more")[0])}),o.setStyle("display","block");var c=q.getStyle("height");c&&c.toInt()>29&&o.setStyle("height",c)},s=function(a,c){if(b[a])return r(b[a],c);(new Request.JSON({url:"/pin/tag",data:{q:a},onSuccess:function(d){d&&!d.error&&(b[a]=d),r(d,c)}})).get()},t=new Button(c.getElement("div.Buttons a.rbtn"),{click:function(){var b=h.get("value"),m=l.get("data-board-id"),n=j.getSelected();if(!n)return alert("没有选择要采集的图片");if(!m)return alert("请选择或者创建一个画板");var o={board_id:m,text:b},p=n.el.retrieve("file"),q=n.el.retrieve("pin_id");f=0,k.each(function(b){if(b.get("checked")){var c=b.get("data-key");o[c]=!0,f|=a[c];try{ga("send","event","SocialShare",c+":{api}","PinDialog:"+app.page.pin.source),_paq.push(["trackEvent","SocialShare",c+":{api}","PinDialog:"+app.page.pin.source])}catch(d){}}}),o.via=g?2:1,d?o.via=d:o.via=g?2:1,o.media_type=app.page.params&&app.page.params.media_type?app.page.params.media_type:0,o.video=app.page.params&&app.page.params.video?app.page.params.video:0,q?o.via=q:e?(o.file_ticket=e,o.link=app.page.params.url):p?o.file_id=p.id:(o.img_url=n.src,n.link&&(o.link=n.link)),o.share_button=f;if(p&&p.creation){o.creation=p.creation;var r=p;delete r.creation,o.file=r;var s=c.getElement(".creation-property .clear-input"),t=s.value,u=c.getElement(".creation-property input[name=authorize]:checked");if(!u)return alert("没有选择授权方式");if(u.value!="noright")if(!t||t<0)return alert("没有填写源文件下载所需价格或者价格不符合格式");o.authorize=u&&u.value,o.price=t}var v=this;v.setTitle("采集中...").disable();var w=c.getParent("#ScrapePin");!document.id("Repin")&&!w&&(o.check=!0);var x=o.creation?"/cc/creation/create/":"/pins/",y=new Request.JSON({url:x,data:o,onSuccess:function(a){if(a.err){alert(a.msg||app.COMMON_ERRMSG),i(Object.merge(o,a),function(){v.setTitle().enable()});return}if(a.warning==100){var b=document.id("pin_confirm_popup");b.getElement(".continue").addEvent("click",function(){delete y.options.data.check,y.post(),b.hide()}),b.getElement(".cancel").addEvent("click",function(){v.setTitle().enable(),b.hide(),window.close()}),b.getElement("span.board-name").set("html",\'<a target="_blank" href="/boards/\'+a.pin.board.board_id+\'/"><em>\'+a.pin.board.title+"</em></a>"),b.show();return}app.req.user.status.share=f,app.$pin=a.pin;if(g){app.route("/bookmarklet_success");if(!Browser.ie||Browser.version>=10)window.opener.postMessage("complete:"+n.src,"*"),window.opener.postMessage("singlePinComplete","*")}else o.creation?(v.element.fireEvent("success"),app.showDialog("creation_success")):(v.element.fireEvent("success"),app.showDialog("pin_success"))},onFailure:function(a){i(Object.merge(o,{err:a.status}),function(){v.setTitle().enable()})}});y.post();var z=[],A=app.req.user.boards.filter(function(a){return a.board_id==m&&z.push(a),a.board_id!=m});return app.req.user.boards=z.concat(A),!1}});e||(t.disable(),j.addEvents({startLoading:function(){t.disable()},finishLoading:function(){t.enable()}})),c.store("initialized",!0)})})()</script>')
        }
        return buf.join("")
    }, __t["base/suggest_friend"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, f = friend;
            buf.push("<div"), buf.push(attrs({
                "data-id": "" + f.urlname + "",
                "class": "convo suggestion"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(f.urlname) + "/",
                title: escape(f.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                width: "40px",
                height: "40px",
                src: avatar(f)
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "/" + f.urlname + "/",
                "class": "txt userlink"
            })), buf.push(">" + escape((interp = f.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                "class": "icon " + ("" + f.service_name + "")
            })), buf.push("></span><span"), buf.push(attrs({
                "class": "txt"
            })), buf.push(">" + escape((interp = f.user_info.username) == null ? "" : interp) + "</span><a"), buf.push(attrs({
                "data-id": "" + f.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "followuser btn wbtn"
            })), buf.push("><strong> 关注</strong><span></span></a><a"), buf.push(attrs({
                title: "不再推荐",
                "data-friend-urlname": "" + f.urlname + "",
                "data-friend-username": "" + f.username + "",
                "data-service-name": "" + f.service_name + "",
                "class": "mute"
            })), buf.push("></a></div>")
        }
        return buf.join("")
    }, __t["base/pin_create"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, main_id = Math.floor(1e6 * Math.random());
            buf.push("<div"), buf.push(attrs({
                id: "uniq_" + main_id + "",
                "class": "pin-create"
            })), buf.push("><div"), buf.push(attrs({
                "class": "preview"
            })), buf.push("><img"), buf.push(attrs({
                src: locals.media || ""
            })), buf.push("/><div"), buf.push(attrs({
                style: locals.h / locals.w > 1 ? "" : "display: none",
                "class": "stop"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "right-part"
            })), buf.push(">");
            var __val__ = emerge("base/board_list", {
                currentBoard: "default"
            });
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                "class": "text-block"
            })), buf.push("><textarea"), buf.push(attrs({
                "class": "clear-input description"
            })), buf.push(">" + escape((interp = locals.text || "") == null ? "" : interp) + "</textarea><div"), buf.push(attrs({
                "class": "tag-bar"
            })), buf.push("><div"), buf.push(attrs({
                "class": "normal"
            })), buf.push("><span"), buf.push(attrs({
                "class": "title"
            })), buf.push(">推荐标签</span><span"), buf.push(attrs({
                "class": "tags"
            })), buf.push("></span></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "more"
            })), buf.push("><span"), buf.push(attrs({
                "class": "title"
            })), buf.push(">更多标签</span><span"), buf.push(attrs({
                "class": "tags"
            })), buf.push("></span></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "tip"
            })), buf.push(">通过给采集添加 #标签#，更好地整理采集</div></div></div></div><div"), buf.push(attrs({
                "class": "bottom-part"
            })), buf.push(">");
            var bindings = [];
            req.user.bindings.weibo && bindings.push({
                key: "weibo",
                value: "新浪微博"
            }), req.user.bindings.qzone && bindings.push({
                key: "qzone",
                value: "QQ空间"
            }), req.user.bindings.tqq && bindings.push({
                key: "tqq",
                value: "腾讯微博"
            }), req.user.bindings.renren && bindings.push({
                key: "renren",
                value: "人人"
            });
            var share_bit_flags = {
                weibo: 1,
                qzone: 2,
                tqq: 4,
                douban: 8,
                renren: 16
            };
            if (bindings.length > 0) {
                buf.push("<div"), buf.push(attrs({
                    "class": "shares"
                })), buf.push("><span>分享到：</span>");
                for (var i = 0, $$l = bindings.length; i < $$l; i++) {
                    var binding = bindings[i];
                    i < 2 && (buf.push("<div"), buf.push(attrs({
                        "data-key": binding.key,
                        "data-flag": share_bit_flags[binding.key],
                        "class": "share " + (binding.key + (req.user.status.share & share_bit_flags[binding.key] ? " active" : ""))
                    })), buf.push("><div"), buf.push(attrs({
                        "class": "selection"
                    })), buf.push("></div>" + escape((interp = binding.value) == null ? "" : interp) + "</div>"))
                }
                buf.push("</div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "buttons"
            })), buf.push(">"), locals.cancel && (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消</span></a>")), buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 采下来</span></a></div></div></div><script>(function(){var a=document.id("uniq_' + escape((interp = main_id) == null ? "" : interp) + '"),b=a.getElement(".board-list"),c=a.getElement(".tag-bar .normal"),d=a.getElement(".tag-bar .more"),e=a.getElement(".tag-bar .tip"),f=c.getElement(".tags"),g=a.getElement("textarea"),h=a.getElement(".preview img"),i=a.getElement(".preview .stop");a.getElements(".shares .share").addEvent("click",function(){this.toggleClass("active")}),b.master.addEvent("select",function(){var a=b.get("data-board-id"),g=null;app.req.user.boards.each(function(b){b.board_id==a&&(g=b.recommend_tags)}),d.hide();if(!g||!g.length)c.hide(),e.show();else{c.show(),e.hide(),f.empty();for(var h=0;h<g.length;h++)(new Element(".tag",{html:g[h]})).inject(f)}}),f.addEvent("click:relay(.tag)",function(){if(~g.value.indexOf("#"+this.innerHTML+"#"))return;g.value+=" #"+this.innerHTML+"#"}),new Autocompleter.Contacts.At(g),h.onload=function(){this.height>this.width?i.show():i.hide()}})()</script>')
        }
        return buf.join("")
    }, __t["base/image_promotions"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (promotions && promotions.length > 0) {
                var current_page = Math.floor(Math.random() * promotions.length + 1),
                    promotion = promotions[current_page - 1],
                    image_url = "",
                    target = promotion.new_tab ? "_blank" : "_self";
                promotion.image && promotion.image.bucket && promotion.image.key && (image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key), buf.push("<div"), buf.push(attrs({
                    "class": "image-promotions"
                })), buf.push("><a"), buf.push(attrs({
                    href: "" + promotion.url + "",
                    target: "" + target + "",
                    rel: "nofollow"
                })), buf.push("><img"), buf.push(attrs({
                    src: "" + image_url + "",
                    alt: !0,
                    width: "204",
                    height: "330",
                    "class": "promotion"
                })), buf.push("/></a>");
                if (promotions.length > 1) {
                    buf.push("<ul"), buf.push(attrs({
                        "class": "pager"
                    })), buf.push(">");
                    for (var i = 1, l = promotions.length; i <= l; i++) {
                        var promotion = promotions[i - 1],
                            image_url = "",
                            target = promotion.new_tab ? "_blank" : "_self";
                        promotion.image && (image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key);
                        var li_class = "";
                        i == current_page && (li_class = "current"), buf.push("<li"), buf.push(attrs({
                            "data-url": "" + promotion.url + "",
                            "data-target": "" + target + "",
                            "data-image": "" + image_url + "",
                            "class": "" + li_class + ""
                        })), buf.push(">●</li>")
                    }
                    buf.push("</ul>")
                }
                buf.push("</div>")
            }
            buf.push('<script>(function(){var a=$$(".image-promotions ul.pager li");a.length>0&&a.addEvent("click",function(){if(this.hasClass("current"))return;var a=$$(".image-promotions ul.pager li.current")[0],b=$$(".image-promotions a")[0],c=$$(".image-promotions img.promotion")[0];a.removeClass("current"),b.set("href",this.get("data-url")),b.set("target",this.get("data-target")),c.set("src",this.get("data-image")),this.addClass("current")}),app.gaqTrackPromotion(".image-promotions a",{category:"category_image_promotions",useTargetUrlAsLabel:!0})})()</script>')
        }
        return buf.join("")
    }, __t["base/people_pins_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">"), req.user && req.user.user_id == user.user_id && (buf.push("<div"), buf.push(attrs({
                onclick: "app.showUploadDialog();",
                "class": "add-pin wfc"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><i></i><span>添加采集</span></div></div>"));
            for (var $index = 0, $$l = user.pins.length; $index < $$l; $index++) {
                var pin = user.pins[$index],
                    __val__ = emerge("base/pin_item", {
                        user: user,
                        pin: pin,
                        board: pin.board
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/people_commodities_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var $index = 0, $$l = user.commodities.length; $index < $$l; $index++) {
                var pin = user.commodities[$index],
                    __val__ = emerge("base/pin_item", {
                        user: user,
                        pin: pin,
                        board: pin.board
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/people_likes_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "desc-bar"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "pin-board-switcher clearfix"
            })), buf.push("><li"), buf.push(attrs({
                "class": "first selected"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/",
                "class": "pin-link"
            })), buf.push(">" + escape((interp = user.like_count) == null ? "" : interp) + " 采集</a></li><li"), buf.push(attrs({
                "class": "last"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/boards/"
            })), buf.push(">" + escape((interp = user.boards_like_count) == null ? "" : interp) + " 画板</a></li></ul></div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var pins = user.likes, i = 0, l = pins.length; i < l; i++) {
                var pin = pins[i],
                    __val__ = emerge("base/pin_item", {
                        user: pin.user,
                        pin: pin,
                        board: pin.board
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/board_list"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, _currentBoardId = "",
                _currentBoardTitle = "",
                _extraClass = "";
            locals.currentBoard && locals.currentBoard == "default" ? _extraClass = "use-default-board" : locals.currentBoard && (_currentBoardId = currentBoard.board_id, _currentBoardTitle = currentBoard.title);
            var _currentCategorys = locals.categorys ? locals.categorys + "" : "",
                _creationOnly = locals.creationOnly ? "true" : "";
            buf.push("<div"), buf.push(attrs({
                "data-board-id": _currentBoardId,
                "data-categorys": _currentCategorys,
                "data-creation": _creationOnly,
                "class": "board-list " + _extraClass
            })), buf.push("><div"), buf.push(attrs({
                "class": "current"
            })), buf.push("><div"), buf.push(attrs({
                "class": "name"
            })), buf.push(">" + escape((interp = _currentBoardTitle ? _currentBoardTitle : "选择画板...") == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div></div><div"), buf.push(attrs({
                style: "display:none",
                "class": "drop-list"
            })), buf.push("><div"), buf.push(attrs({
                "class": "boards"
            })), buf.push("></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "filtrate"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "filter"
            })), buf.push("><input"), buf.push(attrs({
                type: "text",
                placeholder: "快速筛选/创建画板",
                "class": "clear-input"
            })), buf.push('/></div></div></div><script>(function(){$$(".board-list:not(.inited)").each(function(a){var b=a.get("data-creation");a.addClass("inited"),a.master=new BoardList(a,{creationOnly:!!b})})})()</script>')
        }
        return buf.join("")
    }, __t["base/people_following"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "following",
                body_tpl: "base/people_following_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/people_likes_boards_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "desc-bar"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "pin-board-switcher clearfix"
            })), buf.push("><li"), buf.push(attrs({
                "class": "first"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/",
                "class": "pin-link"
            })), buf.push(">" + escape((interp = user.like_count) == null ? "" : interp) + " 采集</a></li><li"), buf.push(attrs({
                "class": "last selected"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/boards/"
            })), buf.push(">" + escape((interp = user.boards_like_count) == null ? "" : interp) + " 画板</a></li></ul></div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var boards = user.likes_boards, i = 0, l = boards.length; i < l; i++) {
                var board = boards[i],
                    __val__ = emerge("base/board_item", {
                        user: req.user,
                        board: board
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/404"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                "class": "not-found-page"
            })), buf.push("><div"), buf.push(attrs({
                "class": "content"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info"
            })), buf.push(">"), page.msg == "根据相关法律及政策，该搜索结果将不予显示，换个词试试吧" ? (buf.push("<p"), buf.push(attrs({
                "class": "search-writing"
            })), buf.push(">" + escape((interp = page.msg) == null ? "" : interp) + "</p>")) : ~page.msg.indexOf("你访问的帐号已经被禁用") ? (buf.push("<h2>你访问的用户主页已被禁止</h2><p"), buf.push(attrs({
                "class": "state"
            })), buf.push(">你可以<a"), buf.push(attrs({
                href: "/?md=404in",
                "class": "brown-link"
            })), buf.push(">返回花瓣首页</a>，也可以尝试搜索更有趣的内容。</p>")) : (buf.push("<h2>很抱歉，你访问的页面不存在</h2><p"), buf.push(attrs({
                "class": "state"
            })), buf.push(">输入地址有误或该地址已被删除，你可以<a"), buf.push(attrs({
                href: "/?md=404in",
                "class": "brown-link"
            })), buf.push(">返回花瓣首页</a>，也可以尝试搜索更有趣的内容。</p>")), buf.push("<div"), buf.push(attrs({
                "class": "search"
            })), buf.push("><form"), buf.push(attrs({
                id: "page_search_form",
                method: "get",
                action: page.query && page.query.type ? page.$url : "/search/"
            })), buf.push("><input"), buf.push(attrs({
                id: "query",
                placeholder: "输入一个词，更多精彩等着你",
                name: "q",
                "class": "clear-input search-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "search-btn btn18 go btn rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 搜索</span></a></form><p"), buf.push(attrs({
                "class": "search-text"
            })), buf.push(">热门搜索：");
            var words = ["早餐", "海报", "婚纱", "喵星人", "狗", "彩妆"];
            for (var $index = 0, $$l = words.length; $index < $$l; $index++) {
                var word = words[$index];
                buf.push("<a"), buf.push(attrs({
                    href: "/search/?q=" + encodeURIComponent(word) + "&md=404in",
                    "class": "brown-link"
                })), buf.push(">" + escape((interp = word) == null ? "" : interp) + "</a>")
            }
            buf.push("</p></div></div></div>");
            if (page.imgs.length || page.keywords.length || page.words.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "holder"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "recommend"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "title"
                })), buf.push("><h3>花瓣为您推荐</h3></div>");
                if (page.keywords.length || page.words.length) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "suggestion-keywords"
                    })), buf.push("><span>精彩推荐：</span>");
                    for (var $index = 0, $$l = page.keywords.length; $index < $$l; $index++) {
                        var word = page.keywords[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "/explore/" + word.slug + "/"
                        })), buf.push(">" + escape((interp = word.keyword) == null ? "" : interp) + "</a>")
                    }
                    for (var $index = 0, $$l = page.words.length; $index < $$l; $index++) {
                        var word = page.words[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: word.url
                        })), buf.push(">" + escape((interp = word.name) == null ? "" : interp) + "</a>")
                    }
                    buf.push("</div>")
                }
                if (page.imgs.length) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "showcase"
                    })), buf.push("><div"), buf.push(attrs({
                        style: "left: 252px;",
                        "class": "imgs"
                    })), buf.push(">");
                    for (var $index = 0, $$l = page.imgs.length; $index < $$l; $index++) {
                        var img = page.imgs[$index],
                            src = "http://" + img.file.bucket + ".b0.upaiyun.com/img/error_page/" + img.file.key + "_sq236";
                        buf.push("<a"), buf.push(attrs({
                            href: "" + img.url + ""
                        })), buf.push("><img"), buf.push(attrs({
                            src: "" + src + "",
                            alt: "" + img.des + "",
                            width: "235",
                            height: "235",
                            title: "" + img.des + ""
                        })), buf.push("/></a>")
                    }
                    buf.push("</div><div"), buf.push(attrs({
                        "class": "covering left disable"
                    })), buf.push("><i"), buf.push(attrs({
                        "class": "arrow"
                    })), buf.push("></i></div><div"), buf.push(attrs({
                        "class": "covering right"
                    })), buf.push("><i"), buf.push(attrs({
                        "class": "arrow"
                    })), buf.push("></i></div></div>")
                }
                buf.push("</div></div>")
            }
            buf.push('</div><style>html {background: white}\n</style><script>window._gaq_pageview_url="/404error/?url="+document.location.pathname+document.location.search+"&ref="+document.referrer,function(){app.initSearchForms("#page_search_form",4);if(document.getElement(".not-found-page .showcase")){var a=document.getElement(".not-found-page .showcase"),b=a.getElement(".imgs"),c=a.getElement(".covering.left"),d=a.getElement(".covering.right"),e=(b.getElements("a").length-5)*-252,e=e>0?0:e,f=!1;a.addEvent("click:relay(.covering)",function(a){a.stop();if(f)return;if(this.hasClass("disable"))return;var g=b.style.left.toInt();f=!0;if(this.hasClass("left")){var h=g+252;h==252&&c.addClass("disable"),b.tween("left",h).get("tween").chain(function(){d.removeClass("disable"),f=!1})}else{var h=g-252;h==e&&d.addClass("disable"),b.tween("left",h).get("tween").chain(function(){c.removeClass("disable"),f=!1})}})}}()</script>')
        }
        return buf.join("")
    }, __t["base/people_creations_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var $index = 0, $$l = user.creations.length; $index < $$l; $index++) {
                var pin = user.creations[$index],
                    __val__ = emerge("base/pin_item", {
                        user: user,
                        pin: pin,
                        board: pin.board
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/message_deprecated_popup_activities"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "activities-list list"
            })), buf.push(">");
            if (locals.feeds) {
                buf.push("<div"), buf.push(attrs({
                    "class": "box"
                })), buf.push(">");
                for (var $index = 0, $$l = feeds.length; $index < $$l; $index++) {
                    var f = feeds[$index],
                        u = f.user,
                        t = f.content.type,
                        is_unread = "";~
                    unread_feeds.indexOf(f.feed_id.toString()) && (is_unread = "unread");
                    var p = f.pin,
                        b = f.board,
                        fu = f.follow_user,
                        tu = this.req.user ? this.req.user.user_id : -1;
                    buf.push("<div"), buf.push(attrs({
                        "class": "item " + (is_unread ? "unread" : "")
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + escape(u.urlname) + "/",
                        title: escape(u.username),
                        "class": "img x"
                    })), buf.push("><img"), buf.push(attrs({
                        src: avatar(u),
                        "class": "avt"
                    })), buf.push("/></a>"), t == "pin" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">采集</span><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">" + escape((interp = p.raw_text.brief(40)) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">到</span><a"), buf.push(attrs({
                        href: "/boards/" + p.board_id + "/"
                    })), buf.push(">" + escape((interp = p.board.is_private == 2 ? "待归类采集" : p.board.title.brief(38)) == null ? "" : interp) + "</a></div>")) : t == "repin" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">转采了</span>"), p.raw_text ? (buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">你采集的</span><a"), buf.push(attrs({
                        href: "/pins/" + (p.via_pin && p.via || p.pin_id) + "/"
                    })), buf.push(">" + escape((interp = p.raw_text.brief(40)) == null ? "" : interp) + "</a>")) : (buf.push("<a"), buf.push(attrs({
                        href: "/pins/" + (p.via_pin && p.via || p.pin_id) + "/"
                    })), buf.push(">你的采集</a>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">到</span><a"), buf.push(attrs({
                        href: "/boards/" + p.board_id + "/"
                    })), buf.push(">" + escape((interp = p.board.is_private == 2 ? "待归类采集" : p.board.title.brief(38)) == null ? "" : interp) + "</a></div>")) : t == "like" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">喜欢了</span>"), p.raw_text ? (buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">" + escape((interp = tu === p.user.user_id ? "你" : p.user.username) == null ? "" : interp) + "采集的</span><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">" + escape((interp = p.raw_text.brief(40)) == null ? "" : interp) + "</a>")) : (buf.push("<a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">" + escape((interp = tu === p.user.user_id ? "你" : p.user.username) == null ? "" : interp) + "的采集</a>")), buf.push("</div>")) : t == "comment" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">评论了由</span><a"), buf.push(attrs({
                        href: "/" + p.user.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === p.user.user_id ? "你" : p.user.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">采集的</span><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">" + escape((interp = p.raw_text.brief(40)) == null ? "" : interp) + "</a></div>")) : t == "follow" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">关注了</span><a"), buf.push(attrs({
                        href: "/" + b.user.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === b.user.user_id ? "你" : b.user.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">的画板</span><a"), buf.push(attrs({
                        href: "/boards/" + b.board_id + "/"
                    })), buf.push(">" + escape((interp = b.title.brief(38)) == null ? "" : interp) + "</a></div>")) : t == "follow_people" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">关注了</span><a"), buf.push(attrs({
                        href: "/" + fu.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === fu.user_id ? "你" : fu.username) == null ? "" : interp) + "</a></div>")) : t == "guideboard" ? (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">推荐了你的画板</span><a"), buf.push(attrs({
                        href: "/boards/" + b.board_id + "/"
                    })), buf.push(">" + escape((interp = b.title.brief(13)) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">给花瓣网新用户，接下来会有一大波新用户关注你的画板。</span></div>")) : t == "like_board" && (buf.push("<div"), buf.push(attrs({
                        "class": "text"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + u.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === u.user_id ? "你" : u.username) == null ? "" : interp) + "</a>"), isVerified(u) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("<span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">喜欢了</span><a"), buf.push(attrs({
                        href: "/" + b.user.urlname + "/"
                    })), buf.push(">" + escape((interp = tu === b.user.user_id ? "你" : b.user.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                        "class": "text-node"
                    })), buf.push(">的画板</span><a"), buf.push(attrs({
                        href: "/boards/" + b.board_id + "/"
                    })), buf.push(">" + escape((interp = b.title.brief(38)) == null ? "" : interp) + "</a></div>")), buf.push("</div>")
                }
                buf.push("</div>")
            } else buf.push("<div"), buf.push(attrs({
                "class": "msg-loading"
            })), buf.push("></div>");
            buf.push("<a"), buf.push(attrs({
                href: "/message/activities/",
                "class": "view-all"
            })), buf.push(">查看所有消息»</a></div>")
        }
        return buf.join("")
    }, __t["base/header"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, show_designer_regform = !1;
            page.$url.match("/cc/") && !page.$url.match("/cc/register/") && !page.$url.match("/cc/center/") && (req.user && req.user.status && req.user.status.notdesigner ? show_designer_regform = !1 : req.user && req.user.status && !req.user.status.designer && (show_designer_regform = !0)), show_designer_regform = !1;
            if (req.promotions && req.promotions.top && req.promotions.top.length) {
                buf.push("<div"), buf.push(attrs({
                    id: "top_promotion",
                    style: "display: none"
                })), buf.push(">");
                for (var $index = 0, $$l = req.promotions.top.length; $index < $$l; $index++) {
                    var promo = req.promotions.top[$index],
                        image_url = "http://" + this.settings.hbfile[promo.image.bucket] + "/img/promotion/" + promo.image.key;
                    buf.push("<a"), buf.push(attrs({
                        href: promo.url,
                        target: promo.new_tab ? "_blank" : "_self",
                        "data-ad-name": "_tp-" + promo.image.key + "",
                        style: "background-image: url(" + image_url + "); display: none; height: " + promo.image.height + "px;",
                        rel: "nofollow",
                        "class": "inner"
                    })), buf.push("></a>")
                }
                buf.push("<div"), buf.push(attrs({
                    "class": "close"
                })), buf.push('></div><script>(function(){var a=document.id("top_promotion"),b=a.getElements(".inner"),c=a.getElement(".close"),d=null;b=b.filter(function(a){var b=a.get("data-ad-name");return!Cookie.read(b)}),b.length&&(d=b.getRandom().show(),a.show()),c.addEvent("click",function(){a.fade("out").get("tween").chain(function(){a.hide()}),d&&Cookie.write(d.get("data-ad-name"),1,{duration:30})})})()</script></div>')
            }
            buf.push("<div"), buf.push(attrs({
                id: "header",
                style: "width:auto"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><a"), buf.push(attrs({
                id: "huaban",
                href: "/"
            })), buf.push("></a><div"), buf.push(attrs({
                id: "menu_bar"
            })), buf.push("><div"), buf.push(attrs({
                "class": "left-part"
            })), buf.push('><script>((function(){var a=document.getElement("#menu_bar .menu-nav"),b=new SmoothNotification({arrow:"left",relative:{to:a,position:"centerright",edge:"centerleft",offset:{x:10,y:0}},container:"#header",duration:2e3,styles:{"border-radius":"3px","line-height":"22px","box-shadow":"none",padding:"8px 18px",background:"rgba(0,0,0,.5)"}});if(!Cookie.read("_hmt")&&!Browser.ie6){if(!a||app.view.hasClass("menu-bar-at-side"))return;Browser.ie&&Browser.version<=8&&(b.options.styles.background="black"),b.show("从这里开始浏览花瓣"),app.blinkMenuButton("start")}})).delay(1500)</script><div'), buf.push(attrs({
                "class": "nav menu-nav"
            })), buf.push("><a"), buf.push(attrs({
                "class": "nav-link"
            })), buf.push("><div"), buf.push(attrs({
                "class": "nav-icon"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div></a>");
            var __val__ = emerge("base/header_main_menu", {
                settings: settings,
                req: req
            });
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><form"), buf.push(attrs({
                id: "search_form",
                method: "get",
                action: page.query && page.query.type ? page.$url : "/search/",
                "class": "searching-unit"
            })), buf.push("><input"), buf.push(attrs({
                id: "query",
                type: "text",
                size: "27",
                name: "q",
                autocomplete: "off",
                placeholder: "搜索你喜欢的",
                value: page.query ? _(page.query.text) : "",
                "class": "default_value"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "go"
            })), buf.push("></a></form></div><div"), buf.push(attrs({
                "class": "right-part"
            })), buf.push("><a"), buf.push(attrs({
                style: "display: none",
                href: "#",
                onclick: "return false;",
                "class": "go-mobile btn rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 访问移动版</span></a>");
            if (req.user) {
                buf.push("<div"), buf.push(attrs({
                    "class": "nav add-nav"
                })), buf.push("><a"), buf.push(attrs({
                    title: "添加",
                    "class": "nav-link"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "nav-icon"
                })), buf.push("></div></a><div"), buf.push(attrs({
                    "class": "menu"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "group"
                })), buf.push("><a"), buf.push(attrs({
                    onclick: "app.showUploadDialog();"
                })), buf.push(">上传图片采集<i"), buf.push(attrs({
                    "class": "upload"
                })), buf.push("></i></a></div><div"), buf.push(attrs({
                    "class": "group"
                })), buf.push("><a"), buf.push(attrs({
                    onclick: "app.requireLogin(function() {app.showDialog('create_board'); });"
                })), buf.push(">添加画板<i"), buf.push(attrs({
                    "class": "add-board"
                })), buf.push("></i></a></div><div"), buf.push(attrs({
                    "class": "group"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/about/goodies/"
                })), buf.push(">安装采集工具<i"), buf.push(attrs({
                    "class": "goodies"
                })), buf.push("></i><span>从任何网页采集图片和视频</span></a></div><div"), buf.push(attrs({
                    "class": "arrow"
                })), buf.push("></div></div></div><div"), buf.push(attrs({
                    "class": "nav dm-nav"
                })), buf.push("><a"), buf.push(attrs({
                    title: "私信",
                    onclick: "app.page.dmController.openFreshList();",
                    "class": "nav-link"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "nav-icon"
                })), buf.push("></div><div"), buf.push(attrs({
                    "class": "num hidden"
                })), buf.push(">0</div></a></div><div"), buf.push(attrs({
                    "class": "nav message-nav"
                })), buf.push("><a"), buf.push(attrs({
                    title: "通知",
                    "class": "nav-link"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "nav-icon"
                })), buf.push("></div><div"), buf.push(attrs({
                    "class": "num hidden"
                })), buf.push(">0</div></a>");
                var __val__ = emerge("base/message_popup");
                buf.push(null == __val__ ? "" : __val__), buf.push("</div>")
            } else buf.push("<div"), buf.push(attrs({
                "class": "nav login-nav"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.requireLogin('', {to: 'login'});return false;",
                rel: "nofollow",
                href: "#",
                "class": "login btn wbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 登录</span></a><a"), buf.push(attrs({
                href: "/signup/",
                onclick: "app.requireLogin();return false;",
                rel: "nofollow",
                "class": "btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 注册</span></a></div>");
            req.user && (buf.push("<div"), buf.push(attrs({
                id: "nav_user",
                "class": "nav"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + req.user.urlname + "/",
                "class": "nav-link"
            })), buf.push("><img"), buf.push(attrs({
                width: 20,
                height: 20,
                src: avatar(req.user),
                "class": "avt"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></div></a><div"), buf.push(attrs({
                "class": "menu"
            })), buf.push("><div"), buf.push(attrs({
                "class": "group"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + req.user.urlname + "/"
            })), buf.push(">我的花瓣<i"), buf.push(attrs({
                "class": "mine"
            })), buf.push("></i></a></div>"), req.user && req.user.status && req.user.status.designer && (buf.push("<div"), buf.push(attrs({
                "class": "group"
            })), buf.push("><a"), buf.push(attrs({
                href: "/cc/center/"
            })), buf.push(">我的设计中心<i"), buf.push(attrs({
                "class": "center"
            })), buf.push("></i></a></div>")), buf.push("<div"), buf.push(attrs({
                "class": "group"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + req.user.urlname + "/following/"
            })), buf.push(">我关注的人<i"), buf.push(attrs({
                "class": "following"
            })), buf.push("></i></a><a"), buf.push(attrs({
                href: "/boards/following/"
            })), buf.push(">我关注的画板<i"), buf.push(attrs({
                "class": "following-boards"
            })), buf.push("></i></a><a"), buf.push(attrs({
                href: "/" + req.user.urlname + "/followers/"
            })), buf.push(">我的粉丝<i"), buf.push(attrs({
                "class": "followers"
            })), buf.push("></i></a><a"), buf.push(attrs({
                href: "/friends/weibo/"
            })), buf.push(">在花瓣查找好友<i"), buf.push(attrs({
                "class": "friends"
            })), buf.push("></i></a></div><div"), buf.push(attrs({
                "class": "group"
            })), buf.push("><a"), buf.push(attrs({
                href: "/settings/"
            })), buf.push(">帐号设置<i"), buf.push(attrs({
                "class": "settings"
            })), buf.push("></i></a><a"), buf.push(attrs({
                href: "/logout/"
            })), buf.push(">退出登录<i"), buf.push(attrs({
                "class": "exit"
            })), buf.push("></i></a></div></div></div>")), buf.push("</div></div></div></div>");
            var _hideSheet = !! page.$url.match(/^(\/(shiji|about|life))(\/.*)?/);
            if (!_hideSheet)
                if (req.from_123_360) {
                    var __val__ = emerge("base/favorites_callout");
                    buf.push(null == __val__ ? "" : __val__)
                } else if (!req.user) {
                var __val__ = emerge("base/unauth_callout");
                buf.push(null == __val__ ? "" : __val__);
                if (req.from_custom_login) {
                    var __val__ = emerge("base/custom_login_popout");
                    buf.push(null == __val__ ? "" : __val__)
                }
            } else if (req.user && req.user.status.sts && 0) {
                var __val__ = emerge("base/user_fix_callout");
                buf.push(null == __val__ ? "" : __val__)
            } else if (show_designer_regform) {
                var __val__ = emerge("base/design_copyright_register");
                buf.push(null == __val__ ? "" : __val__)
            } else {
                var __val__ = emerge("base/chrome_callout");
                buf.push(null == __val__ ? "" : __val__)
            }
            var __val__ = emerge("base/header_side_menu", {
                settings: settings,
                req: req
            });
            buf.push(null == __val__ ? "" : __val__), buf.push('<script>window.addEvent("domready",function(){Browser.ie6||(app.page.$header=(new FixedHeader("header")).attach());var a=document.id("nav_user"),b=a?a.getElement(".menu"):null,c=document.id("header_main_menu"),d=c.getParent(".nav"),e=document.getElement("#header_side_menu .menu.more-links"),f=document.getElement("#header_side_menu .nav.more"),g=document.getElement("#header_side_menu .menu.info-links"),h=document.getElement("#header_side_menu .nav.info"),i=document.getElement("#header_side_menu .menu.selection-links"),j=document.getElement("#header_side_menu .nav.selection"),k=document.getElement("#menu_bar .add-nav"),l=k?k.getElement(".menu"):null;g.addEvent("menu_show",function(){e.hide(),i.hide()}),e.addEvent("menu_show",function(){g.hide(),i.hide()}),i.addEvent("menu_show",function(){g.hide(),e.hide()}),b&&b.addEvent("menu_show",function(){var a=document.id("message_popup_deprecated");a&&a.getStyle("display")=="block"&&this.hide();var b=document.id("message_popup");b&&b.getStyle("display")=="block"&&this.hide()}),c.addEvent("menu_show",function(){Cookie.write("_hmt",1,{duration:30}),app.blinkMenuButton("stop")}),d.addEvent("click",function(){c.show()}),a&&new MenuController({menu:b,trigger:a}),new MenuController({menu:c,trigger:d,showupDelay:200}),new MenuController({menu:e,trigger:f}),new MenuController({menu:g,trigger:h}),new MenuController({menu:i,trigger:j}),k&&(k.addEvent("click",function(){l.show()}),app.view.addEvent("click",function(a){a.target.getParent(".add-nav")||l.hide()}));var m=new SmoothNotification({styles:{"border-radius":"3px","line-height":"1","white-space":"nowrap",padding:"10px"},container:"#header_side_menu"}),n=document.getElements("#header_side_menu .nav a[data-title]");n.addEvents({mouseenter:function(){document.getElements("#header_side_menu .menu").hide(),m.show(this.get("data-title"),{relative:{to:this,position:"rightcenter",edge:"leftcenter",offset:{x:10,y:0}},duration:!1,arrow:"left",fadeType:"right"})},mouseleave:function(){m.hide()}})})</script>'), req.user && buf.push('<script>(function(){if(app.req.user&&document.getElement("#menu_bar .alert-nav")){app.messager=new MessageChecker;var a=document.getElement("#menu_bar .alert-nav"),b=a.getElement(".nav-link"),c=a.getElement(".num"),d=!1,e=null,f={mentions:null,activities:null},g=document.getElements("#nav_user .menu, .add-nav .menu");function h(a){function b(a){e.getElements(".list").hide(),f[a].show(),e.getElements(".tab").removeClass("active"),e.getElement(".tab."+a).addClass("active"),g.hide()}if(d)return;f[a]?b(a):k(a,function(){b(a)})}function i(){var b=app.renderSync("base/message_deprecated_popup");e=Elements.from(b)[0].inject(a),e.getElements(".tabs .tab").addEvent("click",function(){this.hasClass("mentions")?h("mentions"):this.hasClass("activities")&&h("activities")})}function j(a,b){e||i(),f[a]&&(f[a].dispose(),f[a]=null),Object.each(f,function(a){a&&a.hide()}),f[a]=Elements.from(app.renderSync("base/message_deprecated_popup_"+a,b))[0].inject(e.getElement(".tabs"),"after"),stopWindowScroll(f[a].getElement(".box"))}function k(a,b){d=!0,j(a),(new Request.JSON({url:a=="mentions"?"/message/mentions":"/message/activities",onComplete:function(){d=!1},onSuccess:function(c){j(a,c),l(),app.messager&&app.messager.fetchNow(),b()}})).get()}function l(){e||i();var a=e.getElements(".tabs .tab .n");a[0].set("class","n n-"+app.messager.unreadMentions).innerHTML=app.messager.unreadMentions,a[1].set("class","n n-"+app.messager.unreadActivities).innerHTML=app.messager.unreadActivities}b.addEvent("click",function(){return e&&e.getStyle("display")=="block"?e.hide():e?(e.show(),g.hide()):app.messager.unreadActivities?h("activities"):h("mentions"),!1}),app.view.addEvent("click",function(a){if(a.target.getParent("#message_popup_deprecated"))return;e&&e.hide()})}})(),app.showDialogBox("dm",!0)</script>'), buf.push('<script>(function(){app.switchHeaderTo=function(a){if(!a)return;a=="side"?app.view.addClass("menu-bar-at-side"):a=="normal"&&app.view.removeClass("menu-bar-at-side"),window.fireEvent("resize"),Cookie.write("_ht",a[0],{duration:30})},Cookie.read("_ht")=="s"&&!Browser.ie6&&app.switchHeaderTo("side")})()</script>'), req.user && req.user.status && req.user.status.wc && !page.isQplus && (buf.push("<div"), buf.push(attrs({
                id: "newbies_welcome_overlay",
                style: "display: none;",
                "class": "phide overlay"
            })), buf.push('></div><script>(function(){app.render("newbies_welcome_overlay",function(a,b){$("newbies_welcome_overlay").set("html",b),a&&Browser.exec(a)})})()</script>')), buf.push('<script>(function(){app.initSearchForms("#search_form")})(),function(){app.gaqTrackEvent("#weekly_topic a.main-promo",{category:"weekly_main_promotion"}),app.gaqTrackEvent("#header_main_menu .promotion a, #header_side_menu .promotion a",{category:"main_menu_promotion"}),app.gaqTrackPromotion("#top_promotion a",{category:"top_promotion",useTargetUrlAsLabel:!0})}(),function(){var a=document.getElement("#menu_bar .go-mobile");if(Browser.isMobile)return a.show();a.addEvent("click",function(){this.hide(),Cookie.dispose("_nmb"),location.reload()})}()</script>')
        }
        return buf.join("")
    }, __t["base/dm_list_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (locals.system_dm_id) {
                buf.push("<div"), buf.push(attrs({
                    "data-with-user-id": "system",
                    "data-with-user-name": "系统通知",
                    "data-updated-at": created_at,
                    "class": "conversation system-dm-conversation " + (locals.unread ? "unread" : "")
                })), buf.push("><a"), buf.push(attrs({
                    "class": "avt"
                })), buf.push("></a><div"), buf.push(attrs({
                    "class": "title"
                })), buf.push("><span"), buf.push(attrs({
                    "class": "name"
                })), buf.push(">系统通知</span><i"), buf.push(attrs({
                    "class": "admin-icon"
                })), buf.push("></i><span"), buf.push(attrs({
                    "data-ts": "" + created_at + "",
                    "class": "ts-words time"
                })), buf.push(">");
                var __val__ = Date.timeAgo(created_at);
                buf.push(null == __val__ ? "" : __val__), buf.push("</span></div><div"), buf.push(attrs({
                    "class": "content"
                })), buf.push(">" + escape((interp = locals.text ? locals.text.replace(/(<([^>]+)>)/ig, "") : "") == null ? "" : interp) + "</div><i"), buf.push(attrs({
                    "class": "arrow"
                })), buf.push("></i></div>")
            } else {
                buf.push("<div"), buf.push(attrs({
                    "data-with-user-id": with_user_id,
                    "data-with-user-name": with_user.username,
                    "data-updated-at": updated_at,
                    "class": "conversation " + (locals.unread ? "unread" : "")
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + with_user.urlname + "/",
                    "class": "avt"
                })), buf.push("><img"), buf.push(attrs({
                    src: avatar(with_user)
                })), buf.push("/></a><div"), buf.push(attrs({
                    "class": "title"
                })), buf.push("><span"), buf.push(attrs({
                    "class": "name"
                })), buf.push(">" + escape((interp = with_user.username) == null ? "" : interp) + "</span><span"), buf.push(attrs({
                    "data-ts": "" + updated_at + "",
                    "class": "ts-words time"
                })), buf.push(">");
                var __val__ = Date.timeAgo(updated_at);
                buf.push(null == __val__ ? "" : __val__), buf.push("</span><div"), buf.push(attrs({
                    "class": "action"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "open"
                })), buf.push("></div><ul><li"), buf.push(attrs({
                    "class": "block"
                })), buf.push(">屏蔽此人</li></ul></div></div><div"), buf.push(attrs({
                    "class": "content"
                })), buf.push(">" + escape((interp = locals.last_message ? last_message.text : "") == null ? "" : interp) + "</div><i"), buf.push(attrs({
                    "class": "arrow"
                })), buf.push("></i></div>")
            }
        }
        return buf.join("")
    }, __t["base/mobile_callout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            type == "iPhone" ? (buf.push("<div"), buf.push(attrs({
                id: "mobile_callout",
                "class": "iphone"
            })), buf.push("><div"), buf.push(attrs({
                "class": "spacer"
            })), buf.push("></div><a"), buf.push(attrs({
                target: "_blank",
                href: "https://itunes.apple.com/cn/app/hua-ban-cai-ji-mei-hao-fen/id494813494",
                "class": "go"
            })), buf.push("></a><a"), buf.push(attrs({
                "class": "back"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div>")) : type == "Android" ? (buf.push("<div"), buf.push(attrs({
                id: "mobile_callout",
                "class": "android"
            })), buf.push("><div"), buf.push(attrs({
                "class": "spacer"
            })), buf.push("></div><a"), buf.push(attrs({
                target: "_blank",
                href: "http://hbfile.b0.upaiyun.com/android/huaban-android.apk",
                "class": "go"
            })), buf.push("></a><a"), buf.push(attrs({
                "class": "back"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div>")) : type == "iPad" ? (buf.push("<div"), buf.push(attrs({
                id: "mobile_callout",
                "class": "ipad"
            })), buf.push("><div"), buf.push(attrs({
                "class": "spacer"
            })), buf.push("></div><a"), buf.push(attrs({
                target: "_blank",
                href: "https://itunes.apple.com/cn/app/hua-banhd-cai-ji-mei-hao-fen/id575435250",
                "class": "go"
            })), buf.push("></a><a"), buf.push(attrs({
                "class": "back"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div>")) : type == "other" && (buf.push("<div"), buf.push(attrs({
                id: "mobile_callout",
                "class": "other"
            })), buf.push("><div"), buf.push(attrs({
                "class": "spacer"
            })), buf.push("></div><a"), buf.push(attrs({
                "class": "back"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "cls"
            })), buf.push("></div></div>"))
        }
        return buf.join("")
    }, __t["base/dm_dialog_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (locals.system_dm_id) {
                buf.push("<div"), buf.push(attrs({
                    "class": "system-message"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "text"
                })), buf.push(">");
                var __val__ = text;
                buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({
                    "data-ts": "" + created_at + "",
                    "class": "time ts-words"
                })), buf.push(">");
                var __val__ = "管理员发送于 " + Date.timeAgo(created_at);
                buf.push(null == __val__ ? "" : __val__), buf.push("</div></div>")
            } else {
                buf.push("<div"), buf.push(attrs({
                    "data-dm-id": locals.direct_message_id ? direct_message_id : "",
                    "class": "message clearfix " + type
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + from_user.urlname + "/"
                })), buf.push("><img"), buf.push(attrs({
                    src: avatar(from_user),
                    "class": "avt"
                })), buf.push("/></a><div"), buf.push(attrs({
                    "class": "text"
                })), buf.push(">");
                var __val__ = text.nl2br();
                buf.push(null == __val__ ? "" : __val__), type == "received" && (buf.push("<div"), buf.push(attrs({
                    title: "举报",
                    "class": "report"
                })), buf.push("></div>")), buf.push("<svg"), buf.push(attrs({
                    "class": "triangle"
                })), buf.push("><polygon"), buf.push(attrs({
                    points: "0 0, 10 0, 10 10"
                })), buf.push("></polygon></svg></div></div>")
            }
        }
        return buf.join("")
    }, __t["base/pin_view_recommend"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, recommend_pin_mixin = function (e) {
                    if (e) {
                        buf.push("<div"), buf.push(attrs({
                            "class": "recommend-pin"
                        })), buf.push("><a"), buf.push(attrs({
                            href: "/pins/" + e.pin_id + "/",
                            onclick: "try{ga('send', 'event', 'Pin Recommend Links', '/pins/" + e.pin_id + "/');_paq.push(['trackEvent', 'Pin Recommend Links', '/pins/" + e.pin_id + "/']);}catch(e){}",
                            "class": "img x"
                        })), buf.push("><img"), buf.push(attrs({
                            width: "180",
                            height: "180",
                            src: imgURL(e.file, "sq300")
                        })), buf.push("/>"), e.commodity && e.commodity.price && (buf.push("<div"), buf.push(attrs({
                            "class": "price"
                        })), buf.push(">" + escape((interp = "￥" + e.commodity.price.toFixed(2)) == null ? "" : interp) + "</div>")), buf.push("</a><div"), buf.push(attrs({
                            "class": "description"
                        })), buf.push("><div"), buf.push(attrs({
                            "class": "inner"
                        })), buf.push(">");
                        var t = format_text(e.raw_text, e.text_meta);
                        buf.push(null == t ? "" : t), buf.push("</div></div></div>")
                    }
                }, recommend_board_mixin = function (e) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "recommend-board"
                    })), buf.push("><h4>" + escape((interp = e.title) == null ? "" : interp) + "</h4><div"), buf.push(attrs({
                        "class": "stats"
                    })), buf.push("><span"), buf.push(attrs({
                        "class": "pin-count"
                    })), buf.push(">" + escape((interp = e.pin_count) == null ? "" : interp) + "采集</span><span"), buf.push(attrs({
                        "class": "form"
                    })), buf.push(">来自：<a"), buf.push(attrs({
                        href: "/" + e.user.urlname + "/"
                    })), buf.push(">" + escape((interp = e.user.username) == null ? "" : interp) + "</a></span></div><a"), buf.push(attrs({
                        href: "/boards/" + e.board_id + "/",
                        onclick: "try{ga('send', 'event', 'Pin Recommend Board Link', '/boards/" + e.board_id + "/');_paq.push(['trackEvent', 'Pin Recommend Board Link', '/boards/" + e.board_id + "/']);}catch(e){}",
                        "class": "pins clearfix x"
                    })), buf.push("><div"), buf.push(attrs({
                        "class": "el main"
                    })), buf.push("><img"), buf.push(attrs({
                        width: "213",
                        height: "213",
                        src: imgURL(e.pins[0].file, "sq300")
                    })), buf.push("/></div><div"), buf.push(attrs({
                        "class": "others"
                    })), buf.push(">");
                    for (var t = 1; e.pins[t] && t <= 6; t++) buf.push("<div"), buf.push(attrs({
                        "class": "el"
                    })), buf.push("><img"), buf.push(attrs({
                        width: "104",
                        height: "104",
                        src: imgURL(e.pins[t].file, "sq120")
                    })), buf.push("/></div>");
                    buf.push("</div></a><a"), buf.push(attrs({
                        "data-board-id": e.board_id,
                        href: "#",
                        onclick: "return false;",
                        "class": "follow-btn btn wbtn"
                    })), buf.push("><strong> 关注</strong><span></span></a></div>")
                };
            buf.push("<div"), buf.push(attrs({
                "class": "recommend-pins-unit clearfix"
            })), buf.push(">");
            for (var i = 0; i < 3; i++) recommend_pin_mixin(pins.pop());
            buf.push("</div><div"), buf.push(attrs({
                "class": "recommend-pins-unit clearfix"
            })), buf.push(">");
            for (var i = 0; i < 3; i++) recommend_pin_mixin(pins.pop());
            buf.push("</div>"), typeof boards != "undefined" && boards[0] && boards[0].pins && boards[0].pins.length > 0 && recommend_board_mixin(boards[0]), buf.push("<div"), buf.push(attrs({
                "class": "recommend-pins-unit clearfix"
            })), buf.push(">");
            for (var i = 0; i < 3; i++) recommend_pin_mixin(pins.pop());
            buf.push('</div><script>(function(){var a=document.getElement("#related_recommend .recommend-board"),b=document.getElement("#related_recommend .follow-btn");b&&b.addEvent("click",function(){var a=b.get("data-board-id"),c=(new Button(b)).disable();if(!app.req.user)return app.requireLogin();b.hasClass("unfollow")?(c.setTitle("取消..."),(new Request.JSON({url:"/boards/"+a+"/unfollow/",onSuccess:function(a){if(a.err)return c.setTitle("已关注"),app.error(a.msg||app.COMMON_ERRMSG);b.removeClass("unfollow").addClass("follow"),c.setTitle("关注").enable()}})).post()):(c.setTitle("关注..."),(new Request.JSON({url:"/boards/"+a+"/follow/",onSuccess:function(a){if(a.err)return c.setTitle("关注"),app.error(a.msg||app.COMMON_ERRMSG);b.addClass("unfollow").removeClass("follow"),c.setTitle("已关注").enable()}})).post())})})()</script>')
        }
        return buf.join("")
    }, __t["base/people_boards_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, self = req.user && req.user.user_id === user.user_id,
                is_sort_able = self ? "sortable" : "";
            buf.push("<div"), buf.push(attrs({
                id: "waterfall",
                "class": "sort-lists clearfix " + ("" + is_sort_able + "")
            })), buf.push(">"), self && (buf.push("<div"), buf.push(attrs({
                onclick: "app.requireLogin(function() {app.showDialog('create_board');});",
                "class": "wfc add-board"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><i></i><span>创建画板</span></div></div>"));
            for (var $index = 0, $$l = user.boards.length; $index < $$l; $index++) {
                var b = user.boards[$index];
                if (b && (b.is_private != 2 || b.pin_count > 0 && b.pins && b.pins[0])) {
                    var __val__ = emerge("base/board_item", {
                        board: b,
                        user: this.req.user,
                        show_cover_button: !0
                    });
                    buf.push(null == __val__ ? "" : __val__)
                }
            }
            buf.push('</div><script>var main=document.getElement(".sortable");if(main){var sorting=!1,container=$$(".sortable")[0],sortable,cancelBtn,oldorder,ContainTop,ContainHeight,start=function(){sorting=!0;var a;sortable=new Sortables(".sortable",{clone:!0,childrenSelector:".Board:not(.default-board)",onStart:function(a,b){app.view.addEvent("mousemove",app.boardListScroll),a.setStyles({border:"dashed 3px #DDD",background:"transparent","box-shadow":"none",width:b.getStyle("width").toInt()-6,height:b.getStyle("height").toInt()-6}),a.getChildren().setStyles({visibility:"hidden"}),a.addClass("sort"),b.setStyles({"z-index":999999,opacity:.6,filter:"alpha(opacity=40)"})},onComplete:function(a){app.view.removeEvent("mousemove",app.boardListScroll),a.getChildren().setStyles({visibility:""}),a.set("style",""),complete()}}),oldorder=sortable.serialize(0,function(a){return a.get("data-id")})},complete=function(){var a=sortable.serialize(0,function(a){return a.get("data-id")});oldorder.join("-")!=a.join("-")?(new Request.JSON({url:"/boards/sort/",data:{ids:a.join(",")},onSuccess:onComplete(a,!0)})).post():onComplete(a,!0)},onComplete=function(a,b){oldorder=a,sorting=!1};app.boardListScroll=function(a){var b=window.innerHeight;ContainTop=container.getTop(),ContainHeight=container.getHeight();var c,d;b-a.client.y<50?(d=window.getScroll(),c=Math.min(d.y+50,ContainTop+ContainHeight-window.innerHeight),window.scrollTo(d.x,c)):a.client.y<50&&(d=window.getScroll(),c=Math.max(d.y-50,ContainTop-55),window.scrollTo(d.x,c))},sorting?complete():start()}(function(){var a=function(){var a=document.getElement("#waterfall");if(!document.getElement("#user_page .loading"))var c=(new Element("div",{"class":"loading"})).inject(a,"after").hide().set("html",\'<img src="/img/loading.gif"><span>正在加载...</span>\');else var c=document.getElement("#user_page .loading");var d=window.getSize().y,e=window.getScroll().y,f=a.getCoordinates().bottom;if(f-e-d<150&&!app.page.triggered&&!app.page.end){app.page.triggered=!0;if(!a.getElement(".Board")){app.page.end=!0;return}var g=a.getLast(".Board:not(.sort)").get("data-seq");(new Request.JSON({url:app.page.$url,data:{max:g,limit:10,wfl:1},noCache:!0,onRequest:function(){c.show()},onSuccess:function(d){c.hide();if(d.err){app.error(d.msg||app.COMMON_ERRMSG);return}if(d&&d.user&&d.user.boards.length>0){var e="";app.page.user&&app.page.user.boards&&(app.page.user.boards=app.page.user.boards.concat(d.user.boards)),d.user.boards.each(function(a){e+=app.renderSync("base/board_item",{board:a,user:app.req.user,show_cover_button:!0})}),Elements.from(e).inject(a),b()}else app.page.end=!0,c.set("html",\'<img src="/img/end.png">\').show()}})).get()}},b=function(){if(main){var a=$$(".sortable .Board:not(.inited)");sortable.addItems(a),a.addClass("inited")}app.page.triggered=!1};main&&$$(".sortable .Board").addClass("inited"),app.loadBoardEvent||(app.loadBoardEvent=function(){var b;window.clearTimeout(b),b=window.setTimeout(function(){a()},500)},window.addEvent("scroll",app.loadBoardEvent))})()</script>')
        }
        return buf.join("")
    }, __t["base/bookmarklet_fetching"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "bookmarklet",
                style: "width: 550px; height: 400px; margin: 60px auto;",
                "class": "fetching"
            })), buf.push("><div"), buf.push(attrs({
                "class": "form"
            })), buf.push(">");
            var __val__ = emerge("base/pin_form", {
                text: page.description,
                req: req
            });
            buf.push(null == __val__ ? "" : __val__), buf.push('</div></div><script>(function(){((function(){var a={width:document.html.clientWidth,height:document.html.clientHeight};window.resizeBy(632-a.width,320-a.height)})).delay(300);var a=$("bookmarklet"),b=app.page.minWidth,c=app.page.minHeight;app.page.media_type!="1"&&(b=b<app.settings.minImageWidth?app.settings.minImageWidth:b,c=c<app.settings.minImageWidth?app.settings.minImageWidth:c);var d=a.getElement(".error"),e=a.getElements("img.load"),f=new ImagePicker(a.getElement(".ImagePicker"));f.setOptions({minW:b,minH:c});var g=app.page.media,h=function(a){return a.width===""||a.height===""||a.width.toInt()>=b&&a.height.toInt()>=c},i=a.getElement("a.rbtn"),j=function(a){a.length==0?((new RegExp("tudou.com","i")).test(g[0])?d.set("html","这一分钟土豆视频采集现在有点繁忙哦，过一分钟再采吧。").show():d.set("html","抱歉，页面上没有足够大的图片").show(),i&&i.addClass("disabled")):i&&i.removeClass("disabled")};!g||g.length<=0?(e.show(),(new Request.JSON({url:"/pins/create/find_images/",data:{url:app.page.url},noCache:!0,onSuccess:function(a){if(a.err){d.set("html",a.msg);return}g=a.images.filter(h).map(function(a){return a.src}),g.length==0?d.set("html","抱歉，页面上没有足够大的图片").show():f.load(g,app.page.url,j)},onComplete:function(b){if(typeOf(g)!="array"||g.length==0)e.hide(),a.getElement(".pbt").show()},onFailure:function(){d.set("html",app.COMMON_ERRMSG).show(),e.hide()}})).get()):f.load(g,app.page.url,j)})()</script>')
        }
        return buf.join("")
    }, __t["base/promote_user_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, profilelinks_mixin = function (e) {
                    buf.push("<ul"), buf.push(attrs({
                        "class": "profile-links"
                    })), buf.push(">");
                    var t = e.profile;
                    if (t.url) {
                        buf.push("<li"), buf.push(attrs({
                            "class": "website"
                        })), buf.push(">");
                        var n = t.url.substr(0, 7) == "http://" ? t.url : "http://" + t.url,
                            r = "访问" + e.username + "的个人主页";
                        buf.push("<a"), buf.push(attrs({
                            href: n,
                            title: r,
                            target: "_blank",
                            rel: "nofollow"
                        })), buf.push(">" + escape((interp = r) == null ? "" : interp) + "</a></li>")
                    }
                    if (e.bindings.weibo && e.bindings.weibo.user_info && !e.status.hide_weibo) {
                        var i = e.bindings.weibo.user_info,
                            n = "http://weibo.com/" + (i.urlname ? i.urlname : i.id),
                            r = "访问" + e.username + "的微博";
                        buf.push("<li"), buf.push(attrs({
                            "class": "weibo"
                        })), buf.push("><a"), buf.push(attrs({
                            href: n,
                            title: r,
                            target: "_blank",
                            rel: "nofollow"
                        })), buf.push(">" + escape((interp = r) == null ? "" : interp) + "</a></li>")
                    }
                    if (e.bindings.douban && e.bindings.douban.user_info && !e.status.hide_douban) {
                        var n = "http://www.douban.com/people/" + e.bindings.douban.user_info.urlname + "/",
                            r = "访问" + e.username + "的豆瓣主页";
                        buf.push("<li"), buf.push(attrs({
                            "class": "douban"
                        })), buf.push("><a"), buf.push(attrs({
                            href: n,
                            title: r,
                            target: "_blank",
                            rel: "nofollow"
                        })), buf.push(">" + escape((interp = r) == null ? "" : interp) + "</a></li>")
                    }
                    if (e.bindings.renren && e.bindings.renren.user_info && !e.status.hide_renren) {
                        var n = "http://www.renren.com/profile.do?id=" + e.bindings.renren.user_info.id,
                            r = "访问" + e.username + "的人人主页";
                        buf.push("<li"), buf.push(attrs({
                            "class": "renren"
                        })), buf.push("><a"), buf.push(attrs({
                            href: n,
                            title: r,
                            target: "_blank",
                            rel: "nofollow"
                        })), buf.push(">" + escape((interp = r) == null ? "" : interp) + "</a></li>")
                    }
                    if (e.bindings.tqq && e.bindings.tqq.user_info && !e.status.hide_tqq) {
                        var n = "http://t.qq.com/" + e.bindings.tqq.user_info.urlname,
                            r = "访问" + e.username + "的腾讯微博主页";
                        buf.push("<li"), buf.push(attrs({
                            "class": "tqq"
                        })), buf.push("><a"), buf.push(attrs({
                            href: n,
                            title: r,
                            target: "_blank",
                            rel: "nofollow"
                        })), buf.push(">" + escape((interp = r) == null ? "" : interp) + "</a></li>")
                    }
                    buf.push("</ul>")
                }, stats_mixin = function (e) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "stats"
                    })), buf.push("><div"), buf.push(attrs({
                        "class": "pin-count"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + e.urlname + "/pins/"
                    })), buf.push("><em"), buf.push(attrs({
                        title: "" + e.pin_count + ""
                    })), buf.push(">" + escape((interp = e.pin_count) == null ? "" : interp) + "</em><span>采集</span></a></div><div"), buf.push(attrs({
                        "class": "board-count"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + e.urlname + "/"
                    })), buf.push("><em"), buf.push(attrs({
                        title: "" + e.board_count + ""
                    })), buf.push(">" + escape((interp = e.board_count) == null ? "" : interp) + "</em><span>画板</span></a></div><div"), buf.push(attrs({
                        "class": "follower-count"
                    })), buf.push("><a"), buf.push(attrs({
                        href: "/" + e.urlname + "/followers/"
                    })), buf.push("><em"), buf.push(attrs({
                        title: "" + e.follower_count + ""
                    })), buf.push(">" + escape((interp = e.follower_count) == null ? "" : interp) + "</em><span>粉丝</span></a></div></div>")
                }, board_mixin = function (e, t) {
                    buf.push("<li"), buf.push(attrs({
                        "class": "board " + (t ? "last" : "")
                    })), buf.push("><h3>" + escape((interp = e.title) == null ? "" : interp) + "<span>(" + escape((interp = e.pin_count) == null ? "" : interp) + ")</span></h3><ul"), buf.push(attrs({
                        "class": "pins"
                    })), buf.push(">");
                    var n = e.pins && e.pins.slice(0, 8);
                    n.forEach(function (t) {
                        buf.push("<li"), buf.push(attrs({
                            "class": "pin"
                        })), buf.push("><a"), buf.push(attrs({
                            href: "/boards/" + e.board_id + "/",
                            "class": "x"
                        })), buf.push("><img"), buf.push(attrs({
                            height: "48",
                            width: "48",
                            src: imgURL(t.file, "sq75")
                        })), buf.push("/></a></li>")
                    }), buf.push("</ul><div"), buf.push(attrs({
                        "class": "actions"
                    })), buf.push(">");
                    if (!req.user || e.user_id != req.user.user_id) e.liked ? (buf.push("<a"), buf.push(attrs({
                        "data-id": "" + e.board_id + "",
                        href: "#",
                        onclick: "return false;",
                        "class": "unlike btn wbtn"
                    })), buf.push("><strong><em></em> " + escape((interp = e.like_count) == null ? "" : interp) + "喜欢</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                        "data-id": "" + e.board_id + "",
                        href: "#",
                        onclick: "return false;",
                        "class": "like btn wbtn"
                    })), buf.push("><strong><em></em> " + escape((interp = e.like_count ? e.like_count : "") == null ? "" : interp) + "喜欢</strong><span></span></a>")), e.following ? (buf.push("<a"), buf.push(attrs({
                        "data-id": "" + e.board_id + "",
                        href: "#",
                        onclick: "return false;",
                        "class": "" + (e.is_private == 2 ? "disabled" : "unfollow") + "" + " " + "btn" + " " + "wbtn"
                    })), buf.push("><strong> 取消关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                        "data-id": "" + e.board_id + "",
                        href: "#",
                        onclick: "return false;",
                        "class": "" + (e.is_private == 2 ? "disabled" : "follow") + "" + " " + "btn" + " " + "wbtn"
                    })), buf.push("><strong> 关注</strong><span></span></a>"));
                    buf.push("</div></li>")
                }, user = puser.user;
            buf.push("<li"), buf.push(attrs({
                "data-seq": "" + puser.updated_at + "",
                "class": "promote-user"
            })), buf.push("><div"), buf.push(attrs({
                "class": "user-info"
            })), buf.push("><div"), buf.push(attrs({
                "class": "summary"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                height: "75",
                width: "75",
                src: avatar(user),
                "class": "x"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "profile"
            })), buf.push("><div><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "x"
            })), buf.push("><em"), buf.push(attrs({
                "class": "username"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</em>"), isVerified(user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("</a>"), profilelinks_mixin(user), buf.push("</div>"), stats_mixin(user);
            if (user.following) buf.push("<a"), buf.push(attrs({
                "data-urlname": "" + user.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "unfollow btn wbtn"
            })), buf.push("><strong> 取消关注</strong><span></span></a>");
            else if (!req.user || req.user.user_id != user.user_id) buf.push("<a"), buf.push(attrs({
                "data-urlname": "" + user.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "follow btn wbtn"
            })), buf.push("><strong> 加关注</strong><span></span></a>");
            buf.push("</div></div><p"), buf.push(attrs({
                "class": "desc"
            })), buf.push(">" + escape((interp = puser.description) == null ? "" : interp) + "</p><a"), buf.push(attrs({
                href: "/" + user.urlname + "",
                "class": "homepage"
            })), buf.push(">访问TA的花瓣≫</a></div><ul"), buf.push(attrs({
                "class": "boards"
            })), buf.push(">");
            var boards = user.boards && user.boards.slice(0, 3);
            boards.forEach(function (e, t) {
                board_mixin(e, t == 2)
            }), buf.push("</ul></li>")
        }
        return buf.join("")
    }, __t["base/category_picker"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "BoardListOverlay"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "BoardSelector BoardPicker CategoryPicker"
            })), buf.push("><div"), buf.push(attrs({
                "class": "current"
            })), buf.push("><span"), buf.push(attrs({
                "class": "CurrentBoard"
            })), buf.push(">选择分类</span><span"), buf.push(attrs({
                "class": "DownArrow"
            })), buf.push("></span></div><div"), buf.push(attrs({
                "class": "BoardList"
            })), buf.push("><div"), buf.push(attrs({
                "class": "BoardListBody"
            })), buf.push('><ul></ul></div></div></div><script>(function(){$$("div.CategoryPicker").each(function(a){if(a.retrieve("initialized"))return;new CategoryPicker(a),a.store("initialized",!0)})})()</script>')
        }
        return buf.join("")
    }, __t["base/unauth_callout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "unauth_callout"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "intro"
            })), buf.push("><div"), buf.push(attrs({
                "class": "title"
            })), buf.push(">国内最优质图片灵感库</div><div>已有数百万出众网友，用花瓣保存喜欢的图片。</div><div"), buf.push(attrs({
                style: "display: none",
                "class": "more"
            })), buf.push("><span>更多相似内容：</span><a>潮品</a><a>当季流行</a></div></div>"), page.isQplus || (buf.push("<div"), buf.push(attrs({
                "class": "login"
            })), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=bar",
                onclick: "return false;",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=bar",
                onclick: "return false;",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=bar",
                onclick: "return false;",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=bar",
                onclick: "return false;",
                title: "人人帐号登录",
                rel: "nofollow",
                style: "margin-right: 0",
                "class": "renren"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">用以上社交帐号直接登录</div></div>")), buf.push("</div><div"), buf.push(attrs({
                style: "display: none",
                "class": "floating"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "title"
            })), buf.push(">国内最优质图片灵感库</div><div"), buf.push(attrs({
                "class": "sub-title"
            })), buf.push(">已有数百万出众网友，用花瓣保存喜欢的图片。</div>"), page.isQplus || (buf.push("<div"), buf.push(attrs({
                "class": "floating-login"
            })), buf.push("><div"), buf.push(attrs({
                "class": "words"
            })), buf.push(">用社交帐号直接登录：</div><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=barFloating",
                onclick: "return false;",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=barFloating",
                onclick: "return false;",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=barFloating",
                onclick: "return false;",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=barFloating",
                onclick: "return false;",
                title: "人人帐号登录",
                rel: "nofollow",
                style: "margin-right: 0",
                "class": "renren"
            })), buf.push("></a></div>")), buf.push('</div></div></div><script>(function(){window.oauth_callback=function(a){"string"==typeof a&&(a=JSON.parse(a)),app.req.user=a;if(app.$login_callback){app.redraw();var b=app.$login_callback;delete app.$login_callback,b()}else window.location=app.page.$url},$$("#unauth_callout .login a, #unauth_callout .floating-login a").addEvent("click",function(a){a.stop();var b=window.open(this.get("href"),"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()}),app.gaqTrackEvent("#unauth_callout .login a, #unauth_callout .floating-login a",{category:"unauth_callout_login"});var a=document.getElement("#unauth_callout .floating");window.addEvent("scroll",function(){window.getScrollTop()>120?a.show():a.hide()})})()</script>')
        }
        return buf.join("")
    }, __t["base/pin_view"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            locals.pin && (page = locals);
            var pin = page.pin,
                board = pin.board,
                is_owner = this.req.user && pin.user_id === this.req.user.user_id,
                pin_link_host = pin.source || "";
            if (!pin_link_host) {
                var match = /^http(?:s)?:\/\/([^/]+)(?:\/.*)?/.exec(pin.link);
                match && match.length == 2 && (pin_link_host = match[1] || "")
            }
            var pin_desc = pin.raw_text ? pin.raw_text.length > 20 ? pin.raw_text.substr(0, 20) + "..." : pin.raw_text : "",
                original_user = pin.original_pin && pin.original_pin.user ? pin.original_pin.user : pin.via_user;
            buf.push("<div"), buf.push(attrs({
                "data-id": pin.pin_id,
                "data-media-type": pin.media_type,
                "data-orig-source": pin.orig_source,
                "data-board-id": board.board_id,
                "data-size-x": pin.file.width,
                "data-size-y": pin.file.height,
                "class": "pin-view"
            })), buf.push("><div"), buf.push(attrs({
                "class": "pin-view-wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "main-part"
            })), buf.push("><div"), buf.push(attrs({
                "class": "image-piece piece"
            })), buf.push("><div"), buf.push(attrs({
                "class": "tool-bar"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.requireLogin(function(){app.showDialogBox('repin', {pin_id: '" + pin.pin_id + "'});});return false;",
                href: "#",
                "class": "repin-btn btn rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 采集</span></a>"), is_owner ? (buf.push("<a"), buf.push(attrs({
                href: "/pins/" + pin.pin_id + "/edit/",
                "class": "edit-btn btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 编辑</span></a>"), (pin.creation && pin.creation.selling) != 1 && (buf.push("<a"), buf.push(attrs({
                href: "/pins/" + pin.pin_id + "/delete/",
                "class": "del-btn btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 删除</span></a>"))) : (buf.push("<a"), buf.push(attrs({
                "data-id": pin.pin_id,
                href: "#",
                onclick: "return false;",
                "class": "like-btn " + (pin.liked ? "liked" : "") + " " + "btn-with-icon" + " " + "btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": "heart"
            })), buf.push("></i></a>")), buf.push("<div"), buf.push(attrs({
                "class": "right-part"
            })), buf.push("><div"), buf.push(attrs({
                "class": "huaban-share-unit"
            })), buf.push("><span>分享</span><div"), buf.push(attrs({
                "class": "share-btns"
            })), buf.push("><a"), buf.push(attrs({
                "data-to": "weibo",
                title: "新浪微博",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=weibo",
                "class": "share-btn weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                "data-to": "qzone",
                title: "QQ空间",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=qzone",
                "class": "share-btn qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                "data-to": "weixin",
                title: "微信",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=weixin",
                "class": "share-btn weixin"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "more"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "menu"
            })), buf.push("><a"), buf.push(attrs({
                "data-to": "tqq",
                title: "腾讯微博",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=tqq",
                "class": "tqq"
            })), buf.push("><i></i>腾讯微博</a><a"), buf.push(attrs({
                "data-to": "qfriends",
                title: "QQ好友",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=qfriends",
                "class": "qq"
            })), buf.push("><i></i>QQ 好友</a><a"), buf.push(attrs({
                "data-to": "douban",
                title: "豆瓣",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=douban",
                "class": "douban"
            })), buf.push("><i></i>豆瓣</a><a"), buf.push(attrs({
                "data-to": "renren",
                title: "人人网",
                target: "_blank",
                href: "/pins/" + pin.pin_id + "/js-share/?to=renren",
                "class": "renren"
            })), buf.push("><i></i>人人网</a><div"), buf.push(attrs({
                "class": "arr"
            })), buf.push("></div></div></div><a"), buf.push(attrs({
                href: "/pins/" + pin.pin_id + "/zoom/",
                title: "查看原图",
                "class": "zoomin btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i></a></div></div><div"), buf.push(attrs({
                "class": "main-image"
            })), buf.push("><div"), buf.push(attrs({
                "class": "image-holder"
            })), buf.push(">"), pin.link && !pin.hide_origin ? (pin_link_host ? (buf.push("<a"), buf.push(attrs({
                href: "/go/?pin_id=" + pin.pin_id + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push("><img"), buf.push(attrs({
                alt: pin_desc,
                src: imgURL(pin.file, "fw658")
            })), buf.push("/></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "" + pin.link + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push("><img"), buf.push(attrs({
                alt: pin_desc,
                src: imgURL(pin.file, "fw658")
            })), buf.push("/></a>")), pin.original_pin && pin.original_pin.text_meta && pin.original_pin.text_meta.creation && (buf.push("<a"), buf.push(attrs({
                href: "/pins/" + pin.original_pin.pin_id + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push("><span"), buf.push(attrs({
                "class": "link_icon"
            })), buf.push(">下载作品原图</span></a>"))) : pin.original_pin && pin.original_pin.text_meta && pin.original_pin.text_meta.creation ? (buf.push("<a"), buf.push(attrs({
                href: "/pins/" + pin.original_pin.pin_id + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push("><img"), buf.push(attrs({
                alt: pin_desc,
                src: imgURL(pin.file, "fw658")
            })), buf.push("/></a><div><a"), buf.push(attrs({
                href: "/pins/" + pin.original_pin.pin_id + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push("><span"), buf.push(attrs({
                "class": "link_icon"
            })), buf.push(">下载作品原图</span></a></div>")) : (buf.push("<img"), buf.push(attrs({
                alt: pin_desc,
                src: imgURL(pin.file, "fw658")
            })), buf.push("/>")), buf.push("</div></div>");
            if (pin.showcase && pin.showcase.length) {
                var __val__ = emerge("base/pin_view_extra_imgs", {
                    showcase: pin.showcase
                });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("<div"), buf.push(attrs({
                "class": "tool-bar-bottom"
            })), buf.push("><a"), buf.push(attrs({
                onclick: "app.requireLogin(function(){app.showDialogBox('repin', {pin_id: '" + pin.pin_id + "'});});return false;",
                href: "#",
                "class": "repin-btn btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 采集 <span class="num">' + escape((interp = pin.repin_count || "") == null ? "" : interp) + "</span></span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "like-btn btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 喜欢 <span class="num">' + escape((interp = pin.like_count || "") == null ? "" : interp) + "</span></span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "comment-btn btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 评论 <span class="num">' + escape((interp = pin.comment_count || "") == null ? "" : interp) + "</span></span></a><div"), buf.push(attrs({
                "class": "right-part"
            })), buf.push("><a"), buf.push(attrs({
                title: "举报这张采集",
                href: "#",
                onclick: "return false;",
                "class": "report-btn btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i></a>");
            if (!pin.commodity && pin.link && pin.source && !pin.hide_origin) buf.push("<a"), buf.push(attrs({
                href: "/go/?pin_id=" + pin.pin_id + "",
                rel: "nofollow",
                target: "_blank",
                "class": "source btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 查看来源 " + escape((interp = pin.source) == null ? "" : interp) + "</span></a>");
            else if (pin.creation || pin.original_pin && pin.original_pin.text_meta && pin.original_pin.text_meta.creation) {
                var _user = original_user || pin.user;
                buf.push("<a"), buf.push(attrs({
                    href: "" + ("/" + _user.urlname + "/creations" || "#") + "",
                    target: "_blank",
                    rel: "nofollow",
                    "class": "come-from creation-user btn wbtn btn-with-icon x"
                })), buf.push(">© 来自<span"), buf.push(attrs({
                    "class": "brown-link"
                })), buf.push(">@" + escape((interp = _user.username) == null ? "" : interp) + "</span>的版权作品</a>")
            } else if (pin.material || pin.original_pin && pin.original_pin.text_meta && pin.original_pin.text_meta.material) {
                var _user = original_user || pin.user;
                buf.push("<a"), buf.push(attrs({
                    href: "" + ("/" + _user.urlname || "#") + "",
                    target: "_blank",
                    rel: "nofollow",
                    "class": "come-from creation-user btn wbtn btn-with-icon x"
                })), buf.push(">© 来自<span"), buf.push(attrs({
                    "class": "brown-link"
                })), buf.push(">@" + escape((interp = _user.username) == null ? "" : interp) + "</span>的素材作品</a>")
            }
            buf.push("</div></div><div"), buf.push(attrs({
                "class": "extra-box"
            })), buf.push(">");
            if (pin.commodity) {
                var __val__ = emerge("base/pin_view_gift_extra", {
                    commodity: pin.commodity,
                    pin: pin
                });
                buf.push(null == __val__ ? "" : __val__)
            } else if (pin.creation) {
                var __val__ = emerge("base/pin_view_creation_extra", {
                    pin: pin
                });
                buf.push(null == __val__ ? "" : __val__)
            } else if (pin.material) {
                var __val__ = emerge("base/pin_view_material_extra", {
                    pin: pin
                });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div></div><div"), buf.push(attrs({
                "class": "info-piece piece"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(pin.user.urlname) + "/",
                title: escape(pin.user.username),
                rel: "nofollow",
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(pin.user),
                "class": "avt"
            })), buf.push("/></a>");
            if (pin.via_user) {
                buf.push("<div"), buf.push(attrs({
                    "class": "main"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + pin.user.urlname + "/",
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = pin.user.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                    "class": "space"
                })), buf.push(">从</span><a"), buf.push(attrs({
                    href: "/" + pin.via_user.urlname + "/",
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = pin.via_user.username) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                    "class": "sub"
                })), buf.push(">转采于<span"), buf.push(attrs({
                    "data-ts": "" + pin.created_at + "",
                    "class": "ts-words space"
                })), buf.push(">");
                var __val__ = Date.timeAgo(pin.created_at);
                buf.push(null == __val__ ? "" : __val__), buf.push("</span></div>")
            } else {
                buf.push("<div"), buf.push(attrs({
                    "class": "main"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + pin.user.urlname + "/",
                    rel: "nofollow"
                })), buf.push(">" + escape((interp = pin.user.username) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                    "class": "sub"
                })), buf.push(">"), pin.via < 1e3 && pin.via_client && (buf.push("通过"), pin.via_client.client_link ? (buf.push("<a"), buf.push(attrs({
                    href: "" + pin.via_client.client_link + "",
                    target: "_blank",
                    rel: "nofollow",
                    "class": "space brown-link"
                })), buf.push(">" + escape((interp = pin.via_client.client_name) == null ? "" : interp) + "</a>")) : (buf.push("<span"), buf.push(attrs({
                    "class": "space"
                })), buf.push(">" + escape((interp = pin.via_client.client_name) == null ? "" : interp) + "</span>"))), buf.push("采集于<span"), buf.push(attrs({
                    "data-ts": "" + pin.created_at + "",
                    "class": "ts-words space"
                })), buf.push(">");
                var __val__ = Date.timeAgo(pin.created_at);
                buf.push(null == __val__ ? "" : __val__), buf.push("</span></div>")
            }
            buf.push("</div>");
            if (pin.raw_text && !pin.creation) {
                buf.push("<div"), buf.push(attrs({
                    "class": "description"
                })), buf.push(">");
                var __val__ = format_text(pin.raw_text, pin.text_meta);
                buf.push(null == __val__ ? "" : __val__), buf.push("</div>")
            }
            pin.comment_count > 20 && (buf.push("<div"), buf.push(attrs({
                "class": "more-comments"
            })), buf.push(">加载较早的评论</div>")), buf.push("<div"), buf.push(attrs({
                "class": "comments"
            })), buf.push(">");
            if (pin.comments && pin.comments.length)
                for (var $index = 0, $$l = pin.comments.length; $index < $$l; $index++) {
                    var comment = pin.comments[$index];
                    comment.pin_user_id = pin.user_id;
                    var __val__ = emerge("base/comment_item", comment);
                    buf.push(null == __val__ ? "" : __val__)
                }
            buf.push("</div>");
            var __val__ = emerge("base/comment_form", {
                pin: pin,
                user: this.req.user
            });
            buf.push(null == __val__ ? "" : __val__);
            if (pin.likes && pin.likes.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "likes clearfix"
                })), buf.push("><h4>" + escape((interp = pin.like_count) == null ? "" : interp) + "喜欢</h4>");
                for (var $index = 0, $$l = pin.likes.length; $index < $$l; $index++) {
                    var u = pin.likes[$index];
                    buf.push("<a"), buf.push(attrs({
                        href: "/" + escape(u.urlname) + "/",
                        title: escape(u.username),
                        "class": "img x"
                    })), buf.push("><img"), buf.push(attrs({
                        width: 46,
                        height: 46,
                        src: avatar(u)
                    })), buf.push("/></a>")
                }
                buf.push("</div>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "repin-info-piece clearfix " + (pin.original && pin.via_pin && pin.via_user ? "two" : "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "board unit"
            })), buf.push("><a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/",
                rel: "nofollow",
                "class": "pins x"
            })), buf.push(">");
            for (var t = 0; t < 4 && t < board.pins.length; t++) buf.push("<img"), buf.push(attrs({
                width: "24",
                height: "24",
                src: imgURL(board.pins[t].file, "sq75")
            })), buf.push("/>");
            buf.push("</a><div"), buf.push(attrs({
                "class": "info"
            })), buf.push("><span>采集到画板</span><a"), buf.push(attrs({
                href: "/boards/" + pin.board_id + "/",
                rel: "nofollow",
                "class": "x"
            })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a></div>"), is_owner || (board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-btn unfollow btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消关注</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-btn btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 关注</span></a>"))), buf.push("</div>"), pin.original && pin.via_pin && pin.via_user && (buf.push("<div"), buf.push(attrs({
                "class": "repins-from unit"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(original_user.urlname) + "/",
                title: escape(original_user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                width: 50,
                height: 50,
                src: avatar(original_user)
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "info"
            })), buf.push("><span>采集自用户</span><a"), buf.push(attrs({
                href: "/" + original_user.urlname + "/",
                "class": "x"
            })), buf.push(">" + escape((interp = original_user.username) == null ? "" : interp) + "</a></div></div>")), buf.push("</div>"), pin.breadcrumb && (buf.push("<div"), buf.push(attrs({
                "class": "category-info-piece"
            })), buf.push(">该采集属于<a"), buf.push(attrs({
                href: "" + pin.breadcrumb.link + "",
                "class": "brown-link x"
            })), buf.push(">" + escape((interp = pin.breadcrumb.text) == null ? "" : interp) + "</a>分类</div>")), buf.push("</div><div"), buf.push(attrs({
                "class": "side-part"
            })), buf.push("><div"), buf.push(attrs({
                "class": "board-piece piece"
            })), buf.push("><div"), buf.push(attrs({
                "class": "board-info"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(pin.user.urlname) + "/",
                title: escape(pin.user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(pin.user),
                "class": "avt"
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "/boards/" + pin.board_id + "/",
                "class": "name x"
            })), buf.push(">" + escape((interp = pin.board.title) == null ? "" : interp) + "</a><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push(">" + escape((interp = pin.user.username) == null ? "" : interp) + "</div></div><div"), buf.push(attrs({
                "class": "board-pins cst-scrollbar"
            })), buf.push("><div"), buf.push(attrs({
                id: "board_pins_waterfall"
            })), buf.push(">");
            for (var $index = 0, $$l = board.pins.length; $index < $$l; $index++) {
                var board_pin = board.pins[$index];
                board_pin.pin_id == pin.pin_id && (board_pin.selected = !0);
                var __val__ = emerge("base/pin_view_board_pin_item", {
                    board_pin: board_pin
                });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div></div>"), is_owner || (board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-btn unfollow btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消关注画板</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-btn btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 关注画板</span></a>"))), buf.push("</div>");
            if (pin.siblings && !pin.hide_origin) {
                buf.push("<div"), buf.push(attrs({
                    "class": "siblings-piece piece"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/from/" + pin.source + "/",
                    "class": "inner x"
                })), buf.push("><div>同采自</div><div"), buf.push(attrs({
                    "class": "site"
                })), buf.push(">" + escape((interp = pin.source) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                    "class": "pins clearfix"
                })), buf.push(">");
                for (var i = 0, $$l = pin.siblings.length; i < $$l; i++) {
                    var sibling = pin.siblings[i];
                    i < 3 && (buf.push("<img"), buf.push(attrs({
                        src: imgURL(sibling.file, "sq120"),
                        "class": i < 2 ? "space" : ""
                    })), buf.push("/>"))
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "arrow"
                })), buf.push("></div></a></div>")
            }
            var _promotions = page.promotions || [];
            buf.push("<!-- - _promotions.push('iframe');-->");
            var random_ad = Array.getRandom(_promotions);
            if (random_ad == "iframe") buf.push("<div"), buf.push(attrs({
                "class": "pin-view-promo"
            })), buf.push("><iframe"), buf.push(attrs({
                src: "/adpush.html"
            })), buf.push("></iframe></div>");
            else if (random_ad) {
                var image_url = "http://" + this.settings.hbfile[random_ad.image.bucket] + "/img/promotion/" + random_ad.image.key;
                buf.push("<div"), buf.push(attrs({
                    "class": "pin-view-promo"
                })), buf.push("><a"), buf.push(attrs({
                    href: random_ad.url,
                    title: random_ad.title,
                    target: random_ad.new_tab ? "_blank" : "_self",
                    rel: "nofollow"
                })), buf.push("><img"), buf.push(attrs({
                    src: image_url,
                    width: 278
                })), buf.push("/></a></div>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "clear"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "bottom-part"
            })), buf.push("><div"), buf.push(attrs({
                "class": "pin-view-wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "related-boards clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "title-el"
            })), buf.push(">该采集也在以下画板</div><div"), buf.push(attrs({
                "class": "board-box clearfix"
            })), buf.push("></div><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "load-more-board btn btn18"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 加载更多</span></a></div><div"), buf.push(attrs({
                "class": "recommend-pins"
            })), buf.push("><div"), buf.push(attrs({
                "class": "title-el"
            })), buf.push(">推荐给你的采集</div><div"), buf.push(attrs({
                "class": "waterfall"
            })), buf.push('></div></div></div></div></div><script>(function(){var a=document.getElement(".pin-view"),b=a.getElement(".main-part .main-image"),c=a.get("data-id"),d=a.get("data-board-id"),e=a.get("data-media-type"),f=a.get("data-orig-source"),g=document.id("pin_view_layer");(function(){app.initPureLikeButtons({buttonSelector:".pin-view .tool-bar .like-btn",unLikeButtonClass:"liked",onLikeSuccess:function(a){var b=a.getParent(".main-part").getElement(".tool-bar-bottom .like-btn"),c=b.getElement(".num"),d=c.innerHTML.toInt()||0;c.set("text",d+1)},onUnLikeSuccess:function(a){var b=a.getParent(".main-part").getElement(".tool-bar-bottom .like-btn"),c=b.getElement(".num"),d=c.innerHTML.toInt()||0;c.set("text",d-1||"")}}),app.initDelCommentButtons(),app.initAddCommentButtons(),app.initReplyButtons(),app.initLikeButtons(),app.initFollowButtons(),app.initPureFollowBoardButtons({buttonSelector:".follow-btn",onFollowSuccess:function(a){var b=a.getElement(".text");b.innerHTML=b.innerHTML.replace("关注","取消关注")},onUnfollowSuccess:function(a){var b=a.getElement(".text");b.innerHTML=b.innerHTML.replace("取消关注","关注")}});var b=a.getElement(".tool-bar-bottom .like-btn"),c=a.getElement(".tool-bar .like-btn");b.addEvent("click",function(){c.click()});var d=a.getElement(".tool-bar-bottom .comment-btn"),e=document.getElement("#pin_view_add_comment textarea"),f=new Fx.Scroll(g||document.body);d.addEvent("click",function(){e.select(),f.toElementCenter(e,"y",{y:g?-document.body.getScroll().y:0})})})(),function(){if(e&&e==1){var a=658,c=410,d=new Swiff(f,{width:a,height:c,params:{allowfullscreen:!0,wMode:"opaque"}});d.inject(b.getElement(".image-holder").empty())}}(),function(){var a=document.getElement(".tool-bar .del-btn");a&&a.addEvent("click",function(){var a=new Button(this);return app.confirm({title:"删除确认",text:"删除采集后不能恢复，确定要删除吗?",action:"删除"},function(b){b&&(a.setTitle("正在删除...").disable(),(new Request.JSON({url:"/pins/"+c+"/",data:{_method:"DELETE"},onSuccess:function(b){if(b.err){app.error(b.msg||app.COMMON_ERRMSG),a.setTitle().enable();return}var c="/boards/"+d+"/";app.msg("已经成功删除采集"),setTimeout(function(){location.href=c},1500)},onFailure:function(){a.setTitle().enable()}})).post())}),!1})}(),function(){if(g)return;var a,b,d=app.getState().id,e="/pins/"+c+"/zoom/",f="#header, #header_side_menu, #top_promotion",h=$$(f),i=document.getElement(".pin-view .tool-bar .zoomin"),j=function(){a||(a=Elements.from(app.renderSync("base/pin_view_zoom"))[0],a.getElement("#zoomr_hide").addEvent("click",function(){return app.popState(),!1})),b=a.retrieve("slide"),b||(b=new SlidePage(a,{fixedSelector:f}),a.store("slide",b)),a.inject(document.body).show(),b.show().chain(function(){a.setStyles({width:"100%",height:"auto"}),h.setStyle("visibility","hidden")}),app.registerStateHandler(d,k)},k=function(){if(!a)return;b=a.retrieve("slide"),h.setStyle("visibility",""),b.hide().chain(function(){a.destroy(),a=null}),app.setTitle(),app.removeStateHandler(d)};app.registerStateHandler(e,j),i.addEvent("click",function(a){return app.pushState(null,app.page.title,e),!1})}(),function(){if(!g)return;var b=a.getElement(".tool-bar .zoomin"),c=g.getElement(".zoom-layer"),d=c.getElement(".holder"),e=c.getElement(".close-zoom"),f=g.getElement(".close-layer"),h=a.get("data-size-y");b.addEvent("click",function(a){d.empty();var b=(new Element("img",{src:c.get("data-img")})).inject(d);b.addEvent("click",function(a){a.stop()});var e=document.html.clientHeight-h;return e>0&&b.setStyle("margin-top",e/2),c.show(),f.hide(),!1}),(new Elements([e,d])).addEvent("click",function(){return c.hide(),f.show(),!1})}(),function(){var a=document.getElement(".pin-view .info-piece .more-comments");if(a){var b=a.getNext(".comments"),d=b.getElement(".comment").get("data-id"),e=10,f=!1;a.addEvents({click:function(g){f=!0,a.tween("opacity",.3),(new Request.JSON({url:"/pins/"+c+"/comments/",data:{max:d,limit:e},onSuccess:function(c){if(c.err)return alert(c.msg||app.COMMON_ERRMSG);var f=c.comments.reverse(),g;b.getElements(".comment.new").removeClass("new"),f.each(function(a,c){a.pin_user_id="' + escape((interp = pin.user_id) == null ? "" : interp) + '";var d=app.renderSync("base/comment_item",a),e=Elements.from(d).inject(b,"top");c===0&&(g=e[0]),e.addClass("new")});if(f.length<e)return a.dispose();d=f[f.length-1].comment_id,a.tween("opacity",1)}})).get()}})}}(),function(){var b=a.get("data-size-y"),c=a.getElement(".main-image .arrows");c&&b>700&&c.setStyle("top",280)}(),function(){var b=document.getElement(".pin-view .board-piece .board-pins");stopWindowScroll(b);var d=function(){var e=app.createCellLoader("/boards/' + escape((interp = board.board_id) == null ? "" : interp) + '/",20,function(a){return a.board.pins&&a.board.pins.each(function(a){a.pin_id==c&&(a.selected=!0)}),{data:a.board.pins}},{template:"base/pin_view_board_pin_item"});new Waterfall("board_pins_waterfall",{container:b,cellWidth:78,cellSpace:2,minCols:3,maxCols:3,cellSelector:".cell",hibernate:!1,containerSelector:"",loadOffset:100,autoResize:!1,scrollEl:a.getElement(".board-piece .board-pins"),transitionClass:"",containerSelectorOffset:0,loader:e}),app.view.removeEvent("initWaterfall",d)};app.view.addEvent("initWaterfall",d)}(),function(){var b=a.getElement(".recommend-pins .waterfall"),c=function(){b.$waterfall=new Waterfall(b,{container:a,minCols:4,maxCols:4,hibernate:!1,containerSelector:"",autoResize:!1,scrollEl:g||window,transitionClass:"",containerSelectorOffset:0,loader:app.createCellLoader("/pins/' + escape((interp = pin.pin_id) == null ? "" : interp) + '/recommend/",10,0,function(a){return{data:a}})}),app.view.removeEvent("initWaterfall",c)};app.view.addEvent("initWaterfall",c)}(),function(){function f(){var a=d.getLast(".wfc"),f=a?a.get("data-seq"):null;(new Request.JSON({url:"/pins/"+c+"/relatedboards/",data:{max:f},onSuccess:function(a){if(a.err||!a.length)return e.hide();(a.length<4||a.getLast().seq==1)&&e.hide(),b.show();var c="";a.forEach(function(a){c+=app.renderSync("base/board_item",{board:a,user:app.req.user})}),Elements.from(c).inject(d)}})).get()}var b=a.getElement(".related-boards"),d=b.getElement(".board-box"),e=b.getElement(".load-more-board");f(),e.addEvent("click",f)}(),function(){var b=a.getElement(".tool-bar .huaban-share-unit .more"),c=a.getElement(".tool-bar .huaban-share-unit .menu");new MenuController({menu:c,trigger:b})}(),function(){a.getElement(".tool-bar-bottom .report-btn").addEvent("click",function(){return window.report_type="pin",window.report_id=c,app.showDialog("report"),!1}),a.getElement(".info-piece .comments").addEvent("click:relay(a.report-button)",function(){return window.report_type="comment",window.report_id=this.getParent(".comment").getProperty("data-id"),app.showDialog("report"),!1})}(),function(){try{ga("set","dimension6","' + escape((interp = pin.board.category_id) == null ? "" : interp) + '"),_paq.push(["setCustomVariable",5,"Pin Category","' + escape((interp = pin.board.category_id) == null ? "" : interp) + '","page"])}catch(a){}try{e&&e==1&&(f&&~f.indexOf("youku.com")?(ga("send","event","video-pins","view","youku"),_paq.push(["trackEvent","video-pins","view","youku"])):(ga("send","event","video-pins","view","others"),_paq.push(["trackEvent","video-pins","view","others"])))}catch(a){}app.gaqTrackEvent(".pin-view .board-piece .board-pins .cell",{category:"Pin Source Board Link"}),app.gaqTrackEvent(".pin-view .siblings-piece .inner",{category:"Pin Source Domain Link"}),app.gaqTrackEvent(".pin-view .board-piece .follow-btn",{category:"Pin Source Board Follow"}),document.getElements(".pin-view .tool-bar .huaban-share-unit a").each(function(a){app.gaqTrackEvent(a,{category:"SocialShare",action:a.get("data-to")+":{js}",label:"PinView:' + escape((interp = pin.source) == null ? "" : interp) + '"})}),app.gaqTrackEvent(".pin-view .main-image .image-holder a",{category:"Pin Links Image",useTargetUrlAsLabel:!0}),app.gaqTrackEvent(".pin-view .tool-bar-bottom .source",{category:"Pin Links Site"}),app.gaqTrackEvent(".pin-view .bottom-part .related-boards",{elementEvent:"click:relay(.Board)",category:"pin_view_recommend_board",label:location.pathname||""}),app.gaqTrackEvent(".pin-view .bottom-part .related-boards",{elementEvent:"click:relay(.follow)",category:"pin_view_recommend_board_follow",label:location.pathname||""}),app.gaqTrackEvent(".pin-view .bottom-part .recommend-pins",{elementEvent:"click:relay(.pin)",category:"pin_view_recommend_pin",label:location.pathname||""}),app.gaqTrackEvent(".pin-view .gift-info .goto-buy",{category:"commodity",label:"buy",value:"http://huaban.com/pins/' + escape((interp = pin.pin_id) == null ? "" : interp) + '/"}),app.gaqTrackPromotion(".pin-view-promo a",{category:"pin_view_promotions",useTargetUrlAsLabel:!0})}();if(g&&app.page.$url.indexOf("/gift/")==0||!history.state&&document.referrer&&document.referrer.indexOf("http://huaban.com/gift/")==0)try{ga("send","event","from_gift","click",location.href)}catch(h){}})()</script>')
        }
        return buf.join("")
    }, __t["base/message_deprecated_popup_mentions"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "mentions-list list"
            })), buf.push(">");
            if (locals.pins) {
                buf.push("<div"), buf.push(attrs({
                    "class": "box"
                })), buf.push(">");
                for (var $index = 0, $$l = pins.length; $index < $$l; $index++) {
                    var p = pins[$index];
                    p.comments.length || p.comments.push(undefined);
                    for (i = 0; i < p.comments.length; i++) {
                        var comment = p.comments[i],
                            is_pin = typeof comment == "undefined",
                            obj = is_pin ? p : comment,
                            obj_id = is_pin ? p.pin_id : comment.comment_id,
                            tu = this.req.user ? this.req.user.user_id : -1,
                            cu = obj.user,
                            ulink = '<a class="author" href="/' + cu.urlname + '/">' + (tu === cu.user_id ? "你" : cu.username) + "</a>",
                            metas = obj.text_meta || null,
                            is_unread = "",
                            _prefix = is_pin ? "p:" : "c:";
                        typeof unread_mentions != "undefined" && ~unread_mentions.indexOf(_prefix + obj_id) && (is_unread = "unread"), buf.push("<div"), buf.push(attrs({
                            "class": "item " + (is_unread ? "unread" : "")
                        })), buf.push("><a"), buf.push(attrs({
                            href: "/pins/" + p.pin_id + "/",
                            "class": "pin-link"
                        })), buf.push("><img"), buf.push(attrs({
                            src: imgURL(p.file, "sq75"),
                            "class": "large-image"
                        })), buf.push("/><img"), buf.push(attrs({
                            src: avatar(cu),
                            "class": "small-avt"
                        })), buf.push("/></a><div"), buf.push(attrs({
                            "class": "text"
                        })), buf.push("><div"), buf.push(attrs({
                            "class": "content"
                        })), buf.push(">");
                        var __val__ = format_text(obj.raw_text, metas);
                        buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({
                            "class": "sub-line"
                        })), buf.push("><a"), buf.push(attrs({
                            href: "/" + cu.urlname + "/",
                            "class": "name"
                        })), buf.push(">" + escape((interp = tu === cu.user_id ? "你" : cu.username) == null ? "" : interp) + "</a><span"), buf.push(attrs({
                            "data-ts": "" + obj.created_at + "",
                            "class": "time ts-words"
                        })), buf.push(">" + escape((interp = Date.timeAgo(obj.created_at)) == null ? "" : interp) + "</span></div></div></div>")
                    }
                }
                buf.push("</div>")
            } else buf.push("<div"), buf.push(attrs({
                "class": "msg-loading"
            })), buf.push("></div>");
            buf.push("<a"), buf.push(attrs({
                href: "/message/mentions/",
                "class": "view-all"
            })), buf.push(">查看所有@提到我的»</a></div>")
        }
        return buf.join("")
    }, __t["base/pin_view_layer"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "pin_view_layer"
            })), buf.push("><div"), buf.push(attrs({
                "class": "close-layer"
            })), buf.push("><i></i></div>");
            var __val__ = emerge("base/pin_view", locals);
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                "class": "pin-view-arrows"
            })), buf.push("><a"), buf.push(attrs({
                style: "visibility: hidden",
                "class": "next x layer-view"
            })), buf.push("></a><a"), buf.push(attrs({
                style: "visibility: hidden",
                "class": "prev x layer-view"
            })), buf.push("></a></div><div"), buf.push(attrs({
                style: "display: none",
                "data-img": imgURL(pin.file, suffix = ""),
                "class": "zoom-layer"
            })), buf.push("><div"), buf.push(attrs({
                "class": "holder"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "close-zoom"
            })), buf.push('></div></div><script>(function(){var a=document.id("pin_view_layer"),b=a.getElement(".close-layer"),c=app.page.$waterfall&&app.page.$waterfall.element,d=function(){app.go(app.$pinViewState.url),app.hidePinViewLayer(),c&&c.getElements(".view-on").removeClass("view-on")};a.addEvent("click",function(a){(a.target.id=="pin_view_layer"||~a.target.className.indexOf("pin-view-wrapper"))&&d()}),b.addEvent("click",d),function(){if(!app.page.$waterfall||!app.page.$waterfall.cells.length)return;var b=a.getElement(".pin-view-arrows .next"),d=a.getElement(".pin-view-arrows .prev"),e=app.page.$waterfall.element.getElement(".pin.view-on");e||(e=app.page.$waterfall.element.getElement(".pin[data-id=' + escape((interp = pin.pin_id) == null ? "" : interp) + ']"));if(!e)return;e.addClass("view-on");var f=e.getNext(".pin[data-id]"),g=e.getPrevious(".pin[data-id]");if(f){var h=f.get("data-id");b.set("href","/pins/"+h+"/").set("data-id",h).setStyle("visibility","visible")}if(g){var h=g.get("data-id");d.set("href","/pins/"+h+"/").set("data-id",h).setStyle("visibility","visible")}(new Elements([b,d])).addEvent("click",function(){var a=this.get("data-id");c.getElements(".view-on").removeClass("view-on"),c.getElement(".pin[data-id="+a+"]").addClass("view-on")}),(new Fx.Scroll(window)).toElementEdge(e,"y")}()})()</script></div>')
        }
        return buf.join("")
    }, __t["base/unauth"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, imgBase = "http://hbfile.b0.upaiyun.com/img/unauth_page/";
            buf.push("<div"), buf.push(attrs({
                "class": "unauth-page"
            })), buf.push("><div"), buf.push(attrs({
                id: "unauth_main"
            })), buf.push("><div"), buf.push(attrs({
                "class": "sign-up"
            })), buf.push("><img"), buf.push(attrs({
                src: imgBase + "logo.png",
                width: 106,
                height: 36,
                "class": "logo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "title"
            })), buf.push("></div><span>花瓣帮你保存喜欢的图片，需要时，你可以点击它回到原网页。</span><div"), buf.push(attrs({
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=unauth",
                title: "微博帐号登录",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=unauth",
                title: "QQ帐号登录",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=unauth",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=unauth",
                title: "人人帐号登录",
                rel: "nofollow",
                "class": "renren"
            })), buf.push("></a></div><span"), buf.push(attrs({
                "class": "ds"
            })), buf.push(">使用以上帐号注册</span><div"), buf.push(attrs({
                "class": "switch-email-signup"
            })), buf.push(">使用邮箱注册</div><div"), buf.push(attrs({
                "class": "switch"
            })), buf.push(">已有帐号？登录</div><a"), buf.push(attrs({
                href: "/all/",
                title: "最新采集_图片大全_花瓣网",
                "class": "go"
            })), buf.push(">先逛逛»</a></div><div"), buf.push(attrs({
                "class": "login"
            })), buf.push("><img"), buf.push(attrs({
                src: imgBase + "logo_color.png",
                width: 108,
                height: 32,
                "class": "logo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "words"
            })), buf.push(">使用第三方帐号登录</div><div"), buf.push(attrs({
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=unauth",
                title: "微博帐号登录",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=unauth",
                title: "QQ帐号登录",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=unauth",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=unauth",
                title: "人人帐号登录",
                rel: "nofollow",
                "class": "renren"
            })), buf.push("></a></div><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">使用邮箱登录</div><form"), buf.push(attrs({
                action: "/auth/",
                method: "post",
                action: url("/auth/", !0),
                "class": "mail-login"
            })), buf.push("><input"), buf.push(attrs({
                type: "hidden",
                name: "_ref",
                value: "unauth"
            })), buf.push("/><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "花瓣注册邮箱",
                "class": "clear-input"
            })), buf.push("/><input"), buf.push(attrs({
                name: "password",
                type: "password",
                placeholder: "密码",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 登录</span></a></form><a"), buf.push(attrs({
                "class": "reset-password red-link"
            })), buf.push(">忘记密码»</a><div"), buf.push(attrs({
                "class": "switch-back"
            })), buf.push(">还没有花瓣帐号？<a"), buf.push(attrs({
                "class": "red-link"
            })), buf.push(">点击注册»</a></div><div"), buf.push(attrs({
                "class": "close"
            })), buf.push("></div></div></div><div"), buf.push(attrs({
                "class": "reset"
            })), buf.push("><img"), buf.push(attrs({
                src: imgBase + "logo_color.png",
                width: 108,
                height: 32,
                "class": "logo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">找回密码</div><form"), buf.push(attrs({
                "class": "reset-form"
            })), buf.push("><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "花瓣注册邮箱",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 发送邮件</span></a></form><a"), buf.push(attrs({
                "class": "back red-link"
            })), buf.push(">又想起来了»</a></div></div><div"), buf.push(attrs({
                "class": "email-signup"
            })), buf.push("><img"), buf.push(attrs({
                src: imgBase + "logo_color.png",
                width: 108,
                height: 32,
                "class": "logo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "signup-success"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info"
            })), buf.push("><i></i>注册成功</div><div"), buf.push(attrs({
                "class": "text"
            })), buf.push(">验证邮件已经发送到<span"), buf.push(attrs({
                "class": "email"
            })), buf.push(">email</span><br"), buf.push(attrs({})), buf.push("/>请<a"), buf.push(attrs({
                href: "",
                target: "_blank",
                "class": "check-mail red-link"
            })), buf.push(">点击查收邮件</a>激活账号。<br"), buf.push(attrs({})), buf.push("/>没有收到激活邮件？请耐心等待, 或者<a"), buf.push(attrs({
                "class": "resend red-link disabled"
            })), buf.push(">重新发送<span>30</span></a></div><a"), buf.push(attrs({
                href: "/login/",
                "class": "login-link red-link"
            })), buf.push(">« 返回登录页</a></div><div"), buf.push(attrs({
                "class": "signup-form hidden"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">使用邮箱注册</div><form"), buf.push(attrs({
                action: "",
                method: "post"
            })), buf.push("><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "邮箱",
                "class": "clear-input"
            })), buf.push("/><input"), buf.push(attrs({
                type: "text",
                name: "captcha",
                value: "",
                placeholder: "验证码",
                "class": "clear-input input-captcha"
            })), buf.push("/><input"), buf.push(attrs({
                type: "hidden",
                name: "challenge",
                value: ""
            })), buf.push("/><a"), buf.push(attrs({
                title: "换一个",
                "class": "captcha"
            })), buf.push("><img"), buf.push(attrs({
                src: ""
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 注册</span></a></form><a"), buf.push(attrs({
                "class": "email-signup-back"
            })), buf.push(">« 返回第三方帐号登录</a></div></div></div></div><div"), buf.push(attrs({
                id: "unauth_bottom"
            })), buf.push("><a"), buf.push(attrs({
                href: "/about/",
                rel: "nofollow"
            })), buf.push(">关于花瓣</a><a"), buf.push(attrs({
                href: "/about/goodies/",
                rel: "nofollow"
            })), buf.push(">花瓣采集工具</a><a"), buf.push(attrs({
                href: "/fm/joinus/",
                rel: "nofollow"
            })), buf.push('>加入我们</a></div></div><script>(function(){var a=["photo","pet","gift","wedding","movie","food","diy","trip"],b=a.getRandom(),c=a.indexOf(b)+1,d=800,e=document.id("unauth_main"),f=e.getElement(".title"),g=e.getElement(".switch"),h=e.getElement(".switch-email-signup"),i=e.getElement(".switch-back a"),j=e.getElement("a.email-signup-back"),k=e.getElement(".login"),l=e.getElement(".sign-up"),m=e.getElement(".email-signup"),n=l.getElement(".ds"),o=l.getElement(".buttons"),p=k.getElement(".mail-login .btn"),q=k.getElement(".mail-login"),r=k.getElement("input[name=email]"),s=m.getElement("input[name=email]"),t=m.getElement("input[name=captcha]"),u=k.getElement("input[name=password]"),v=k.getElement(".reset-password"),w=e.getElement(".reset"),x=w.getElement(".back"),y=w.getElement("form .btn"),z=m.getElement("form .btn"),A=w.getElement("input[name=email]"),B=m.getElement(".signup-success"),C=m.getElement(".signup-form");$(document.html).setStyles({"background-image":"url(http://hbfile.b0.upaiyun.com/img/unauth_page/"+b+"_bg.jpg)",height:"100%",position:"relative"}),l.setStyle("background-image","url(http://hbfile.b0.upaiyun.com/img/unauth_page/"+b+".jpg)"),f.setStyle("background-position","0 -"+c*60+"px"),$(document.html).setStyle("background-position","0 -100px"),n.addEvent("mouseenter",function(){o.addClass("hover")}),n.addEvent("mouseleave",function(){o.removeClass("hover")}),g.addEvent("click",function(){if(e.hasClass("switching"))return;e.addClass("switching"),function(){e.setStyles({width:520,"margin-left":-260}),k.show(),l.hide(),r.focus()}.delay(d/2),function(){e.removeClass("switching")}.delay(d)}),i.addEvent("click",function(){if(e.hasClass("switching"))return;e.addClass("switching"),function(){e.erase("style"),k.hide(),l.show()}.delay(d/2),function(){e.removeClass("switching")}.delay(d)}),window.oauth_callback=function(a){"string"==typeof a&&(a=JSON.parse(a)),app.req.user=a;if(app.$login_callback){app.redraw();var b=app.$login_callback;delete app.$login_callback,b()}else window.location=app.page.$url},e.getElements(".login .buttons a, .sign-up .buttons a").addEvent("click",function(a){a.stop();var b=window.open(this.get("href"),"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()}),q.addEvent("keydown",function(a){a.key=="enter"&&p.click()}),p.addEvent("click",function(){var a=r.value,b=u.value;return a.trim()==""?app.error("请输入您的邮箱地址"):~a.indexOf("@")?b.trim()==""?app.error("请输入密码"):(this.addClass("disabled"),(new Request.JSON({url:"/auth/",data:{email:a,password:b,_ref:"unauth"},onSuccess:function(a){if(a.err)return a.err==404?window.location.reload():app.error(a.msg);window.oauth_callback(a.user)},onComplete:function(){p.removeClass("disabled")}})).post(),!1):app.error("请输入正确的邮箱地址")}),v.addEvent("click",function(){k.hide(),w.show(),e.setStyle("height",280),A.focus()}),x.addEvent("click",function(){k.show(),w.hide(),e.setStyle("height",""),r.focus()}),y.addEvent("click",function(){var a=this;if(this.hasClass("disabled"))return;if(!A.value)return app.error("请输入您的邮箱地址");a.addClass("disabled"),(new Request.JSON({url:"/password/reset/",data:{email:A.value},onSuccess:function(a){if(a.err)return app.error(a.msg);app.alert("重置密码的链接已被发送到你的邮箱，请耐心等待",function(){location.reload()})},onComplete:function(b){a.removeClass("disabled")}})).post()}),h.addEvent("click",function(){if(e.hasClass("switching"))return;C.removeClass("hidden"),B.addClass("hidden"),app.getCaptcha(),e.addClass("switching"),function(){e.setStyles({width:520,"margin-top":-160,"margin-left":-260,height:320}),m.show(),l.hide(),s.focus()}.delay(d/2),function(){e.removeClass("switching")}.delay(d)}),j.addEvent("click",function(){if(e.hasClass("switching"))return;e.addClass("switching"),function(){e.erase("style"),m.hide(),l.show()}.delay(d/2),function(){e.removeClass("switching")}.delay(d)}),C.addEvent("keydown",function(a){a.key=="enter"&&z.click()}),z.addEvent("click",function(){var a=m.getElement("input[name=email]").get("value"),b=m.getElement("input[name=captcha]").get("value"),c=m.getElement("input[name=challenge]").get("value");if(!a||!b||!c)return app.alert("请输入完整的信息");(new Request.JSON({url:"/signup/email",data:{email:a,captcha:b,challenge:c,_ref:"unauth"},onComplete:function(b){b.err&&app.getCaptcha();if(b.err&&b.msg&&b.msg!=="email_exist")return app.error(b.msg);if(b.msg=="email_exist")return app.alert("该邮箱已注册啦，请直接登录");e.setStyle("height",280);var c=a.split("@")[1];/^((vip.)?qq.com|163.com|126.com|yeah.net|sina.com|sohu.com)$/.test(c)&&(c="mail."+c),c="http://"+c,B.getElement(".text span.email").set("text",a),B.getElement(".text a.check-mail").set("href",c),C.addClass("hidden"),B.removeClass("hidden"),G()}})).post()});var D=m.getElement(".resend"),E=D.getElement("span"),F=function(){E.innerHTML--,E.innerHTML=="0"?(E.hide(),D.removeClass("disabled")):setTimeout(F,1e3)},G=function(){E.show().innerHTML="30",setTimeout(F,1e3)};D.addEvent("click",function(){if(this.hasClass("disabled"))return;this.addClass("disabled"),app.getCaptcha(),G(),(new Request.JSON({url:"/signup/email/resend",onComplete:function(a){if(a.err&&a.msg&&a.msg!=="email_exist")return app.error(a.msg);if(a.msg=="email_exist")return app.alert("此邮箱已经注册过花瓣账号啦，你可以直接使用它登录");app.alert("发送成功，请查收")}})).post()}),m.getElement("form a.captcha").addEvent("click",function(){app.getCaptcha()}),app.tdcaptcha={},app.tdcaptcha.showcode=function(a){$$(".email-signup form input[name=challenge]").set("value",a);var b=app.settings.tdcaptcha.code_url;b+="?pubkey="+app.settings.tdcaptcha.public_key,b+="&clientsonid="+a+"&"+Math.random(),document.getElement(".email-signup form a.captcha img").set("src",b)},app.gaqTrackEvent("#unauth_main .go",{category:"unauth_get_in"})})()</script><style>html {\n  background-color: #686866;\n  background-size: cover;\n  transition: 10s .8s background-position linear;\n  min-height: 530px;\n}</style>')
        }
        return buf.join("")
    }, __t["base/comment_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "data-id": comment_id,
                "class": "comment"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user),
                "class": "avatar"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "meta"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "author"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</a>&nbsp;-&nbsp;<span"), buf.push(attrs({
                "data-ts": "" + created_at + "",
                "class": "ts-words"
            })), buf.push(">" + escape((interp = Date.timeAgo(created_at)) == null ? "" : interp) + "</span>说：</div><div"), buf.push(attrs({
                "class": "text"
            })), buf.push(">");
            var __val__ = format_text(raw_text, locals.text_meta || null);
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({
                "class": "action-buttons"
            })), buf.push("><a"), buf.push(attrs({
                "data-name": user.username,
                title: "回复",
                "class": "reply-button"
            })), buf.push("></a>"), this.req.user && (user_id === this.req.user.user_id || pin_user_id === this.req.user.user_id) && (buf.push("<a"), buf.push(attrs({
                "data-url": "/pins/" + pin_id + "/comments/" + comment_id + "/",
                title: "删除",
                "class": "delete"
            })), buf.push("></a>"));
            if (!this.req.user || user_id !== this.req.user.user_id) buf.push("<a"), buf.push(attrs({
                title: "举报",
                "class": "report-button"
            })), buf.push("></a>");
            buf.push("</div></div>")
        }
        return buf.join("")
    }, __t["base/promote_users"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, categories = {};
            for (var i = 0; i < settings.categories.length; i++) categories[settings.categories[i].id] = settings.categories[i].name;
            var _pusers = page.pusers,
                __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/ctx_bar", {
                filter: page.filter,
                qt: null,
                qn: null,
                categories: categories,
                settings: settings,
                user_info: page.user_info,
                _url: page.$url,
                promotion: req.promotions.ctxbar_promotions
            });
            buf.push(null == __val__ ? "" : __val__);
            if (_pusers && _pusers.length > 0) {
                buf.push("<ul"), buf.push(attrs({
                    "class": "promote-user-list"
                })), buf.push(">");
                for (var $index = 0, $$l = _pusers.length; $index < $$l; $index++) {
                    var puser = _pusers[$index],
                        __val__ = emerge("base/promote_user_item", {
                            puser: puser,
                            req: req
                        });
                    buf.push(null == __val__ ? "" : __val__)
                }
                buf.push("</ul><div"), buf.push(attrs({
                    "class": "loading"
                })), buf.push("><img"), buf.push(attrs({
                    src: "/img/loading.gif",
                    alt: "loading"
                })), buf.push("/><span>正在加载</span></div>")
            }
            buf.push('<script>(function(){function a(){function e(){if(c)return;var f=a.getLast("li.promote-user"),g=window.getSize().y,h=window.getScroll().y,i=f.getPosition().y+f.getDimensions().height;if(g+h<i)return;c=!0,d.show(),(new Request.JSON({url:app.page.$url,data:{max:f.get("data-seq"),limit:b},noCache:!0,onSuccess:function(c){if(c.err)return alert(c.msg||app.COMMON_ERRMSG);if(c.pusers&&c.pusers.length){var f="";c.pusers.each(function(a){f+=app.renderSync("base/promote_user_item",{puser:a,req:app.req})});var g=Elements.from(f);a.adopt(g)}c.pusers.length<b?(d.set("html",\'<img src="/img/end.png" alt="end" />\').show(),window.removeEvent("scroll",e)):d.hide()},onComplete:function(){c=!1}})).get()}var a=document.getElement("ul.promote-user-list");if(!a)return;var b=10,c=!1,d=a.getNext(".loading");window.addEvent("scroll",e)}function b(){if(app.view.retrieve("followuserbutton"))return;app.view.addEvent("click:relay(.promote-user .user-info a.follow, .promote-user .user-info a.unfollow)",function(a){function e(){b.hasClass("unfollow")?(d.setTitle("Unfollowing..."),(new Request.JSON({url:"/"+c+"/unfollow/",onSuccess:function(a){if(a.err)return d.setTitle("取消关注"),app.error(a.msg||app.COMMON_ERRMSG);b.removeClass("unfollow").addClass("follow"),d.setTitle("关注").enable()}})).post()):(d.setTitle("Following..."),(new Request.JSON({url:"/"+c+"/follow/",onSuccess:function(a){if(a.err)return d.setTitle("关注"),app.error(a.msg||app.COMMON_ERRMSG);b.addClass("unfollow").removeClass("follow"),d.setTitle("取消关注").enable(),fn&&fn(b)}})).post())}var b=a.target;b.get("tag")!=="a"&&(b=b.getParent("a"));var c=b.get("data-urlname"),d=(new Button(b)).disable();if(app.req.user)return e();app.requireLogin(function(){b=app.view.getElement(".promote-user .user-info a[data-urlname="+c+"].follow"),b?e():app.error("这就是你自己")})}),app.view.store("followuserbutton",!0)}function c(){if(app.view.retrieve("followboardbutton"))return;app.view.addEvent("click:relay(.promote-user .board a.follow, .promote-user .board a.unfollow)",function(a){function e(){b.hasClass("unfollow")?(d.setTitle("取消..."),(new Request.JSON({url:"/boards/"+c+"/unfollow/",onSuccess:function(a){if(a.err)return d.setTitle("已关注"),app.error(a.msg||app.COMMON_ERRMSG);b.removeClass("unfollow").addClass("follow"),d.setTitle("关注").enable()}})).post()):(d.setTitle("关注..."),(new Request.JSON({url:"/boards/"+c+"/follow/",onSuccess:function(a){if(a.err)return d.setTitle("关注"),app.error(a.msg||app.COMMON_ERRMSG);b.addClass("unfollow").removeClass("follow"),d.setTitle("已关注").enable()}})).post())}var b=a.target;b.get("tag")!=="a"&&(b=b.getParent("a"));var c=b.get("data-id"),d=(new Button(b)).disable();if(app.req.user)return e();app.requireLogin(function(){b=app.view.getElement(".promote-user .board a[data-id="+c+"].follow"),b?e():app.error("这个画板是你自己的")})}),app.view.store("followboardbutton")}function d(){if(app.view.retrieve("likeboardbutton"))return;app.view.addEvent("click:relay(.promote-user .board a.like, .promote-user .board a.unlike)",function(a){function g(){b.hasClass("like")?(new Request.JSON({url:"/boards/"+c+"/like/",onSuccess:function(a){a.err?app.error(a.msg||app.COMMON_ERRMSG):(b.addClass("unlike").removeClass("like"),f++,d.setTitle(f+"喜欢"))},onComplete:function(){d.enable()}})).post():b.hasClass("unlike")&&(new Request.JSON({url:"/boards/"+c+"/unlike/",onSuccess:function(a){if(a.err)app.error(a.msg||app.COMMON_ERRMSG);else{b.addClass("like").removeClass("unlike"),f--;var c=f>0?f+"喜欢":"喜欢";d.setTitle(c)}},onComplete:function(){d.enable()}})).post()}var b=a.target;b.get("tag")!=="a"&&(b=b.getParent("a"));var c=b.get("data-id"),d=(new Button(b)).disable(),e=b.getElement("strong").get("text"),f=e.toInt();f=isNaN(f)?0:f;if(app.req.user)return g();app.requireLogin(function(){b=app.view.getElement(".promote-user .board a[data-id="+c+"].like"),b?g():app.error("这个画板是你自己的")})}),app.view.store("likeboardbutton")}a(),b(),c(),d(),$$(".self-promote").addEvent("click",function(){var a=app.page.filter.split(":"),b=a[1]==="popular"?"popular":a[2],c=(new Button(this)).disable();c.setTitle("推荐自己..."),(new Request.JSON({url:"/users/"+app.req.user.user_id+"/promoted/",data:{category:b},onSuccess:function(a){a.err?app.error(a.msg||app.COMMON_ERRMSG):a.promoted?app.showDialog("already_promoted"):app.showDialog("self_promote")},onError:function(a,b){app.error(b||app.COMMON_ERRMSG)},onComplete:function(){c.setTitle("推荐自己"),c.enable()}})).get()})})()</script>')
        }
        return buf.join("")
    }, __t["base/people_creations"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "creations",
                body_tpl: "base/people_creations_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/people_followers"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "followers",
                body_tpl: "base/people_followers_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/bookmarklet_success"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, pin = app.$pin,
                bindings = app.req.user.bindings,
                boards = app.req.user.boards,
                board;
            for (var i = 0, l = boards.length; i < l; i++)
                if (boards[i].board_id == pin.board_id) {
                    board = boards[i];
                    break
                }
            var board_title = board.is_private == 2 ? "待归类采集" : board.title,
                apiShareButtons = [];
            bindings.weibo && apiShareButtons.push("weibo"), bindings.qzone && apiShareButtons.push("qzone"), bindings.tqq && apiShareButtons.push("tqq"), bindings.renren && apiShareButtons.push("renren"), apiShareButtons = apiShareButtons.length <= 2 ? apiShareButtons : apiShareButtons.slice(0, 2);
            var jsShareButtons = ["weibo", "qzone", "tqq", "douban", "renren"];
            jsShareButtons = jsShareButtons.filter(function (e) {
                return !~apiShareButtons.indexOf(e)
            }), buf.push("<div"), buf.push(attrs({
                "class": "form"
            })), buf.push("><div"), buf.push(attrs({
                "class": "bookmarklet-done"
            })), buf.push("><h3>你已经成功采集到<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/",
                target: "_blank",
                "class": "less"
            })), buf.push(">" + escape((interp = board_title) == null ? "" : interp) + "</a></h3><div"), buf.push(attrs({
                id: "pin_operations"
            })), buf.push("><a"), buf.push(attrs({
                id: "view_pin",
                href: "/pins/" + pin.pin_id + "/"
            })), buf.push(">查看这个采集</a>&nbsp;|<a"), buf.push(attrs({
                id: "close_window",
                href: "#"
            })), buf.push(">关闭窗口</a></div>");
            if (apiShareButtons.length > 0) {
                buf.push("<div"), buf.push(attrs({
                    "class": "pin-share-description"
                })), buf.push("><p>据说这么好的东西是要分享给好友的～～～</p><textarea>" + escape((interp = pin.raw_text) == null ? "" : interp) + "</textarea>");
                var __val__ = img(pin.file, "sq75", {
                    alt: ""
                });
                buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({
                    "class": "pin-share-buttons"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "pin-api-share-buttons"
                })), buf.push(">"), ~apiShareButtons.indexOf("weibo") && (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    "class": "weibo share-button btn btn18 wbtn"
                })), buf.push("><strong><em></em> 分享至新浪微博</strong><span></span></a>")), ~apiShareButtons.indexOf("qzone") && (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    "class": "qzone share-button btn btn18 wbtn"
                })), buf.push("><strong><em></em> 分享至QQ空间</strong><span></span></a>")), ~apiShareButtons.indexOf("tqq") && (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    "class": "tqq share-button btn btn18 wbtn"
                })), buf.push("><strong><em></em> 分享至腾讯微博</strong><span></span></a>")), ~apiShareButtons.indexOf("douban") && (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    "class": "douban share-button btn btn18 wbtn"
                })), buf.push("><strong><em></em> 分享至豆瓣</strong><span></span></a>")), ~apiShareButtons.indexOf("renren") && (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    "class": "renren share-button btn btn18 wbtn"
                })), buf.push("><strong><em></em> 分享至人人</strong><span></span></a>")), buf.push("</div><div"), buf.push(attrs({
                    "class": "pin-js-share-buttons"
                })), buf.push(">或:<ul>"), ~jsShareButtons.indexOf("weibo") && (buf.push("<li><a"), buf.push(attrs({
                    href: "#",
                    title: "分享到新浪微博",
                    "data-to": "weibo",
                    "class": "weibo share-button"
                })), buf.push(">分享到新浪微博</a></li>")), ~jsShareButtons.indexOf("qzone") && (buf.push("<li><a"), buf.push(attrs({
                    href: "#",
                    title: "分享到QQ空间",
                    "data-to": "qzone",
                    "class": "qzone share-button"
                })), buf.push(">分享到QQ空间</a></li>")), ~jsShareButtons.indexOf("tqq") && (buf.push("<li><a"), buf.push(attrs({
                    href: "#",
                    title: "分享到腾讯微博",
                    "data-to": "tqq",
                    "class": "tqq share-button"
                })), buf.push(">分享到腾讯微博</a></li>")), ~jsShareButtons.indexOf("douban") && (buf.push("<li><a"), buf.push(attrs({
                    href: "#",
                    title: "分享到豆瓣",
                    "data-to": "douban",
                    "class": "douban share-button"
                })), buf.push(">分享到豆瓣</a></li>")), ~jsShareButtons.indexOf("renren") && (buf.push("<li><a"), buf.push(attrs({
                    href: "#",
                    title: "分享到人人",
                    "data-to": "renren",
                    "class": "renren share-button"
                })), buf.push(">分享到人人</a></li>")), buf.push("</ul></div></div>")
            } else buf.push("<div"), buf.push(attrs({
                "class": "pin-js-share-buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                "data-to": "weibo",
                "class": "weibo share-button btn btn18 wbtn"
            })), buf.push("><strong><em></em> 分享到新浪微博</strong><span></span></a><a"), buf.push(attrs({
                href: "#",
                "data-to": "qzone",
                "class": "qzone share-button btn btn18 wbtn"
            })), buf.push("><strong><em></em> 分享到QQ空间</strong><span></span></a><a"), buf.push(attrs({
                href: "#",
                "data-to": "tqq",
                "class": "tqq share-button btn btn18 wbtn"
            })), buf.push("><strong><em></em> 分享到腾讯微博</strong><span></span></a><a"), buf.push(attrs({
                href: "#",
                "data-to": "douban",
                "class": "douban share-button btn btn18 wbtn"
            })), buf.push("><strong><em></em> 分享到豆瓣</strong><span></span></a></div>");
            buf.push('</div></div><script>(function(){var a={weibo:1,qzone:2,tqq:4,douban:8,renren:16},b=app.$pin,c=$("pin_success"),d=window.close,e=!1;c&&(d=function(){app.hideDialog()}),$("close_window").addEvent("click",function(){return d(),!1}),["weibo","qzone","tqq","douban","renren"].each(function(c){if(b.share_button/1&a[c]){var d=$$(".pin-api-share-buttons .share-button."+c);d[0]&&(new Button(d[0])).disable().setTitle("已成功分享")}}),$$(".pin-js-share-buttons .share-button").addEvent("click",function(){if(this.hasClass("disabled"))return;try{ga("send","event","SocialShare",shareType+":{js}","PinSuccess:"+app.page.pin.source),_paq.push(["trackEvent","SocialShare",shareType+":{js}","PinSuccess:"+app.page.pin.source])}catch(a){}var c=this.get("data-to");window.open("/pins/"+b.pin_id+"/js-share/?to="+c)}),$$(".pin-api-share-buttons .share-button").forEach(function(a){new Button(a,{disabledTitle:"分享中...",click:function(){this.disable();var a={},c=$$(".pin-share-description textarea")[0].value,d;this.element.hasClass("weibo")&&(a.weibo=!0,d="weibo"),this.element.hasClass("tqq")&&(a.tqq=!0,d="tqq"),this.element.hasClass("qzone")&&(a.qzone=!0,d="qzone"),this.element.hasClass("renren")&&(a.renren=!0,d="renren"),this.element.hasClass("douban")&&(a.douban=!0,d="douban");var f=c||"";f.length>45&&(f=f.substring(0,45)+"..."),f="这张图不错哦，分享给大家！"+f,a.description=f;try{ga("send","event","SocialShare",d+":{api}","PinSuccess:"+app.page.pin.source),_paq.push(["trackEvent","SocialShare",d+":{api}","PinSuccess:"+app.page.pin.source])}catch(g){}var h=this;return(new Request.JSON({url:"/pins/"+b.pin_id+"/share/",data:a,onSuccess:function(a){var b=!1;["weibo","qzone","tqq","douban","renren"].each(function(c){a[c]&&a[c].err&&(b=!0)}),b?a.weibo&&a.weibo.err&&[10024,20017,20046,20005,20006,20034,21332,21327,20003].indexOf(a.weibo.err)>=0?a.weibo.err==10024?(alert("请求频次超过上限"),h.enable()):[21327,20003,21332].indexOf(a.weibo.err)>=0?(e=!0,h.setTitle("分享失败"),document.getElement(".pin-share-buttons").innerHTML+=\'授权失败 <a href="/settings/#set_bindings" target="_blank"><strong>重新绑定新浪微博</strong></a>\'):(alert("分享失败"),h.enable()):(alert("分享失败"),h.enable()):h.setTitle("已成功分享")},onFailure:function(a){alert("分享失败"),h.enable()}})).post(),!1}})});if(!c){$("view_pin").set("target","_blank").addEvent("click",function(){setTimeout(d,100)}),e&&(clearTimeout(f),f=null);var f=setTimeout(function(){d()},6e3),g=$$(".pin-share-description textarea")[0];g&&g.addEvent("focus",function(){f&&(clearTimeout(f),f=null)})}})()</script>')
        }
        return buf.join("")
    }, __t["base/people_following_body"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "desc-bar"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + " 的所有关注</div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            for (var $index = 0, $$l = users.length; $index < $$l; $index++) {
                var u = users[$index],
                    __val__ = emerge("base/person_item", {
                        user: u,
                        pins: u.pins,
                        req: req
                    });
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/login_frame"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "black-overlay"
            })), buf.push("><div"), buf.push(attrs({
                id: "login_frame"
            })), buf.push("><img"), buf.push(attrs({
                src: "/img/logo_2x.png",
                width: 106,
                height: 36,
                "class": "logo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "sign-up"
            })), buf.push("><div"), buf.push(attrs({
                "class": "holder"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">用第三方帐号注册花瓣</div><div"), buf.push(attrs({
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=frame",
                title: "微博帐号登录",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=frame",
                title: "QQ帐号登录",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=frame",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=frame",
                title: "人人帐号登录",
                rel: "nofollow",
                style: "margin-right: 0",
                "class": "renren"
            })), buf.push("></a></div><a"), buf.push(attrs({
                "class": "switch-email-signup brown-link"
            })), buf.push(">使用邮箱注册</a></div><div"), buf.push(attrs({
                "class": "switch"
            })), buf.push(">已有帐号？<a"), buf.push(attrs({
                "class": "brown-link"
            })), buf.push(">登录到花瓣</a></div></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "login"
            })), buf.push("><div"), buf.push(attrs({
                "class": "holder"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">使用第三方帐号登录</div><div"), buf.push(attrs({
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/?_ref=frame",
                title: "微博帐号登录",
                rel: "nofollow",
                "class": "weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/?_ref=frame",
                title: "QQ帐号登录",
                rel: "nofollow",
                "class": "qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/?_ref=frame",
                title: "豆瓣帐号登录",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/?_ref=frame",
                title: "人人帐号登录",
                rel: "nofollow",
                style: "margin-right: 0",
                "class": "renren"
            })), buf.push("></a></div><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">使用邮箱登录</div><form"), buf.push(attrs({
                action: "/auth/",
                method: "post",
                action: url("/auth/", !0),
                "class": "mail-login"
            })), buf.push("><input"), buf.push(attrs({
                type: "hidden",
                name: "_ref",
                value: "frame"
            })), buf.push("/><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "花瓣注册邮箱",
                "class": "clear-input"
            })), buf.push("/><input"), buf.push(attrs({
                name: "password",
                type: "password",
                placeholder: "密码",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 登录</span></a></form><a"), buf.push(attrs({
                "class": "reset-password red-link"
            })), buf.push(">忘记密码»</a><div"), buf.push(attrs({
                "class": "switch-back"
            })), buf.push(">还没有花瓣帐号？<a"), buf.push(attrs({
                "class": "red-link"
            })), buf.push(">点击注册»</a></div></div></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "reset"
            })), buf.push("><div"), buf.push(attrs({
                "class": "holder"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">找回密码</div><form"), buf.push(attrs({
                "class": "reset-form"
            })), buf.push("><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "花瓣注册邮箱",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 发送邮件</span></a></form><a"), buf.push(attrs({
                "class": "back red-link"
            })), buf.push(">又想起来了»</a></div></div><div"), buf.push(attrs({
                "class": "email-signup"
            })), buf.push("><div"), buf.push(attrs({
                style: "display: none",
                "class": "signup-success"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">注册成功</div><div"), buf.push(attrs({
                "class": "text"
            })), buf.push(">验证邮件已经发送到<span"), buf.push(attrs({
                "class": "email"
            })), buf.push(">email</span>，请<a"), buf.push(attrs({
                href: "",
                target: "_blank",
                "class": "check-mail red-link"
            })), buf.push(">点击查收邮件</a>激活账号。<br"), buf.push(attrs({})), buf.push("/>没有收到激活邮件？请耐心等待，或者<a"), buf.push(attrs({
                "class": "resend red-link disabled"
            })), buf.push(">重新发送<span>30</span></a></div><a"), buf.push(attrs({
                "class": "login-link red-link"
            })), buf.push(">« 返回登录页</a></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "signup-form"
            })), buf.push("><div"), buf.push(attrs({
                "class": "holder"
            })), buf.push("><div"), buf.push(attrs({
                "class": "with-line"
            })), buf.push(">使用邮箱注册</div><form"), buf.push(attrs({
                action: "",
                method: "post"
            })), buf.push("><input"), buf.push(attrs({
                type: "text",
                name: "email",
                placeholder: "邮箱",
                "class": "clear-input"
            })), buf.push("/><input"), buf.push(attrs({
                type: "text",
                name: "captcha",
                value: "",
                placeholder: "验证码",
                "class": "clear-input input-captcha"
            })), buf.push("/><input"), buf.push(attrs({
                type: "hidden",
                name: "challenge",
                value: ""
            })), buf.push("/><a"), buf.push(attrs({
                title: "换一个",
                "class": "captcha"
            })), buf.push("><img"), buf.push(attrs({})), buf.push("/></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 注册</span></a></form><a"), buf.push(attrs({
                "class": "email-signup-back brown-link"
            })), buf.push(">« 返回第三方帐号登录</a></div></div></div><div"), buf.push(attrs({
                "class": "close"
            })), buf.push('><i></i></div></div></div><script>(function(){var a=800,b=document.id("login_frame"),c=b.getParent("div"),d=b.getElement(".switch"),e=b.getElement(".switch-email-signup"),f=b.getElement(".switch-back a"),g=b.getElement("a.email-signup-back"),h=b.getElement(".login"),i=b.getElement(".sign-up"),j=b.getElement(".email-signup"),k=i.getElement(".ds"),l=i.getElement(".buttons"),m=h.getElement(".mail-login .btn"),n=h.getElement(".mail-login"),o=h.getElement("input[name=email]"),p=j.getElement("input[name=email]"),q=j.getElement("input[name=captcha]"),r=h.getElement("input[name=password]"),s=h.getElement(".reset-password"),t=b.getElement(".reset"),u=t.getElement(".back"),v=t.getElement("form .btn"),w=j.getElement("form .btn"),x=t.getElement("input[name=email]"),y=j.getElement(".signup-success"),z=j.getElement(".signup-form"),A=j.getElement(".login-link"),B=b.getElement(".close"),C=c.switchTo=function(a){var c=new Elements([h,i,t,z,y]);typeof a=="string"&&(a=c[["login","signup","reset","emailSignup"].indexOf(a)]),c.hide(),a.show(),b.erase("style"),a==h?(b.setStyles({"margin-top":-215}),o.focus()):a==t?(b.setStyles({height:224,"margin-top":-137}),x.focus()):a==z?(app.getCaptcha(),p.focus()):a==y&&G()};d.addEvent("click",function(){if(b.hasClass("switching"))return;b.addClass("switching"),function(){C(h)}.delay(a/2),function(){b.removeClass("switching")}.delay(a)}),f.addEvent("click",function(){if(b.hasClass("switching"))return;b.addClass("switching"),function(){C(i)}.delay(a/2),function(){b.removeClass("switching")}.delay(a)}),window.oauth_callback=function(a){"string"==typeof a&&(a=JSON.parse(a)),app.req.user=a;if(app.$login_callback){var b=app.$login_callback;b.reload?location.reload():b.redraw&&app.redraw(),delete app.$login_callback,typeof b=="function"&&b()}else window.location=app.page.$url},b.getElements(".login .buttons a, .sign-up .buttons a").addEvent("click",function(a){a.stop();var b=window.open(this.get("href"),"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()}),n.addEvent("keydown",function(a){a.key=="enter"&&m.click()}),m.addEvent("click",function(){if(this.hasClass("disabled"))return;var a=o.value,b=r.value;return a.trim()==""?alert("请输入您的邮箱地址"):~a.indexOf("@")?b.trim()==""?alert("请输入密码"):(this.addClass("disabled"),(new Request.JSON({url:"/auth/",data:{email:a,password:b,_ref:"frame"},onSuccess:function(a){if(a.err)return a.err==404?window.location.reload():alert(a.msg);window.oauth_callback(a.user)},onComplete:function(){m.removeClass("disabled")}})).post(),!1):alert("请输入正确的邮箱地址")}),s.addEvent("click",function(){C(t)}),u.addEvent("click",function(){C(h)}),v.addEvent("click",function(){var a=this;if(this.hasClass("disabled"))return;if(!x.value)return alert("请输入您的邮箱地址");a.addClass("disabled"),(new Request.JSON({url:"/password/reset/",data:{email:x.value},onSuccess:function(a){if(a.err)return alert(a.msg);alert("重置密码的链接已被发送到你的邮箱"),location.reload()},onComplete:function(b){a.removeClass("disabled")}})).post()}),e.addEvent("click",function(){C(z)}),g.addEvent("click",function(){C(i)}),z.addEvent("keydown",function(a){a.key=="enter"&&w.click()}),w.addEvent("click",function(){var a=j.getElement("input[name=email]").get("value"),b=j.getElement("input[name=captcha]").get("value"),c=j.getElement("input[name=challenge]").get("value");if(!a||!b||!c)return alert("请输入完整的信息");(new Request.JSON({url:"/signup/email",data:{email:a,captcha:b,challenge:c,_ref:"frame"},onComplete:function(b){b.err&&app.getCaptcha();if(b.err&&b.msg&&b.msg!=="email_exist")return alert(b.msg);if(b.msg=="email_exist")return alert("该邮箱已注册，请直接登录");var c="http://"+a.split("@")[1];y.getElement(".text span.email").set("text",a),y.getElement(".text a.check-mail").set("href",c),C(y)}})).post()}),A.addEvent("click",function(){C(h)});var D=j.getElement(".resend"),E=D.getElement("span"),F=function(){E.innerHTML--,E.innerHTML=="0"?(E.hide(),D.removeClass("disabled")):setTimeout(F,1e3)},G=function(){E.show().innerHTML="30",setTimeout(F,1e3)};D.addEvent("click",function(){if(this.hasClass("disabled"))return;this.addClass("disabled"),app.getCaptcha(),G(),(new Request.JSON({url:"/signup/email/resend",onComplete:function(a){if(a.err&&a.msg&&a.msg!=="email_exist")return alert(a.msg);if(a.msg=="email_exist")return alert("此邮箱已经注册过花瓣账号啦，你可以直接使用它登录");alert("发送成功，请查收")}})).post()}),j.getElement("form a.captcha").addEvent("click",function(){app.getCaptcha()}),app.tdcaptcha={},app.tdcaptcha.showcode=function(a){$$(".email-signup form input[name=challenge]").set("value",a);var b=app.settings.tdcaptcha.code_url;b+="?pubkey="+app.settings.tdcaptcha.public_key,b+="&clientsonid="+a+"&"+Math.random(),document.getElement(".email-signup form a.captcha img").set("src",b)},B.addEvent("click",function(){c.dispose()})})()</script>')
        }
        return buf.join("")
    }, __t["base/design_copyright_register"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "unauth_callout",
                style: "display: none;",
                "class": "designer has-close"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "intro",
                "class": "sheet"
            })), buf.push("><h2>立即成为花瓣网认证设计师，赢得更多赞誉。</h2><p>欢迎参与花瓣网的原创版权计划，上传您的原创作品。</p><a"), buf.push(attrs({
                href: "/cc/register/",
                "class": "btn btn18 register"
            })), buf.push(">登记认证</a><a"), buf.push(attrs({
                id: "notdesigner",
                "class": "btn btn18"
            })), buf.push('>我不是设计师</a></div></div></div><script>(function(){document.id("unauth_callout").removeClass("has-close").show(),document.id("notdesigner").addEvent("click",function(){(new Request.JSON({url:"/cc/notdesigner/",onComplete:function(a){document.id("unauth_callout").setStyle("display","none")}})).post()})})()</script>')
        }
        return buf.join("")
    }, __t["base/pin_view_extra_imgs"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "extra-imgs"
            })), buf.push("><div"), buf.push(attrs({
                "class": "more-imgs"
            })), buf.push("><div"), buf.push(attrs({
                "class": "imgs"
            })), buf.push(">");
            for (var i = 0; i < 4; i++) showcase[i] ? (buf.push("<a><img"), buf.push(attrs({
                src: imgURL(showcase[i], "sq140")
            })), buf.push("/></a>")) : buf.push("<a></a>");
            buf.push("</div><a"), buf.push(attrs({
                "class": "open"
            })), buf.push('>展开大图<i></i></a></div></div><script>(function(){var a=document.getElement(".pin-view .extra-imgs"),b=a.getElement(".more-imgs");b&&b.addEvent("click",function(){this.destroy(),app.page.pin.showcase.files.each(function(b){if(!b)return;(new Element("div.img-holder")).grab((new Element("a",{href:"/go/?pin_id="+app.page.pin.pin_id,"class":"img",rel:"nofollow",target:"_blank"})).grab(new Element("img",{src:app.imgURL(b,"fw658"),height:app.imgSize(b,"fw658").h}))).inject(a)})})})()</script>')
        }
        return buf.join("")
    }, __t["base/user_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "data-id": "" + user.user_id + "",
                "data-seq": "" + user.user_id + "",
                "class": "pin user wfc"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user, "sq235")
            })), buf.push("/></a><h2>" + escape((interp = user.username) == null ? "" : interp) + "</h2><p"), buf.push(attrs({
                "class": "location less"
            })), buf.push("></p>"), current_user && (current_user.user_id !== user.user_id ? user.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": user.urlname,
                href: "#",
                onclick: "return false;",
                "class": "unfollowuser btn btn14 wbtn"
            })), buf.push("><strong> 取消关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": user.urlname,
                href: "#",
                onclick: "return false;",
                "class": "followuser btn btn14 wbtn"
            })), buf.push("><strong> 关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/settings/",
                "class": "btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 帐号设置</span></a>"))), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/promotions"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            promotions = promotions || {
                img_promotions: [],
                reading_promotions: []
            }, buf.push("<div"), buf.push(attrs({
                "class": "wfc topright promotions"
            })), buf.push(">");
            var __val__ = emerge("base/image_promotions", {
                promotions: promotions.img_promotions || []
            });
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/reading_promotions", {
                promotions: promotions.reading_promotions || []
            });
            buf.push(null == __val__ ? "" : __val__), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/comment_item_convo"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, _metas = typeof text_meta == "undefined" ? null : text_meta,
                _lm = 128 - user.username.len();
            buf.push("<div"), buf.push(attrs({
                "class": "comment convo clearfix"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user),
                "class": "avt"
            })), buf.push("/></a>"), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("<div"), buf.push(attrs({
                "class": "content"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "author"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + "</a>:&nbsp;");
            var __val__ = format_text(raw_text.brief(_lm), _metas);
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><a"), buf.push(attrs({
                title: "回复",
                "class": "replyButton"
            })), buf.push("></a></div>")
        }
        return buf.join("")
    }, __t["base/favorites_callout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "favorites_callout",
                style: "display: none;",
                "class": "has-close"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "intro sheet"
            })), buf.push(">");
            var from = "好123";
            app.req.from_123_360 == "360" ? from = "360安全网址" : app.req.from_123_360 == "tao123" ? from = "淘网址" : app.req.from_123_360 == "sogou" ? from = "搜狗网址导航" : app.req.from_123_360 == "qq" && (from = "QQ相册"), buf.push("<span"), buf.push(attrs({
                "class": "hi"
            })), buf.push(">hi，欢迎你从 " + escape((interp = from) == null ? "" : interp) + " 来到花瓣</span><span"), buf.push(attrs({
                "class": "favorite-notice"
            })), buf.push(">如果你喜欢这里，请把花瓣网添加到你的网页收藏夹吧，不担心以后找不到了。</span>"), Browser.Platform.mac ? (buf.push("<div"), buf.push(attrs({
                id: "command_d"
            })), buf.push("><span>把花瓣网加到你的浏览器收藏夹里</span></div>")) : (buf.push("<div"), buf.push(attrs({
                id: "ctrl_d"
            })), buf.push("><span>把花瓣网加到你的浏览器收藏夹里</span></div>")), buf.push("<a"), buf.push(attrs({
                "class": "close"
            })), buf.push('></a></div></div></div><script>(function(){Cookie.read("_hbfavorites")||(document.id("favorites_callout").removeClass("has-close").show(),(new Request.JSON({url:"/favorite_counter/show"})).post()),$$(".close").addEvent("click",function(){Cookie.read("_hbfavoritesed")?Cookie.write("_hbfavorites",!0,{duration:365}):(Cookie.write("_hbfavorites",!0,{duration:1}),Cookie.write("_hbfavoritesed",!0,{duration:365})),document.id("favorites_callout").hide(),(new Request.JSON({url:"/favorite_counter/close"})).post()}),document.addEvent("keydown",function(a){return a.code==68&&(a.meta||a.control)&&(Cookie.write("_hbfavorites",!0,{duration:365}),document.id("favorites_callout").hide(),(new Request.JSON({url:"/favorite_counter/fav"})).post()),!0})})()</script>')
        }
        return buf.join("")
    }, __t["base/user_fix_callout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "unauth_callout",
                style: "display: none;",
                "class": "has-close"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "intro",
                "class": "sheet"
            })), buf.push("><div"), buf.push(attrs({
                "class": "unauth-btns"
            })), buf.push("><a"), buf.push(attrs({
                id: "fix_user_btn",
                href: "/settings/",
                "class": "btn btn18 wbtn"
            })), buf.push('><strong><em></em> 完善我的注册帐号</strong><span></span></a></div><h2>请完善你的花瓣注册邮箱</h2>大侠，你是通过第三方帐号直接登录的</div></div></div><script>(function(){(!Cookie.read("_hbfu")||Cookie.read("_hbfu")!=app.req.user.user_id)&&document.id("unauth_callout").removeClass("has-close").show(),document.id("fix_user_btn").addEvent("click",function(){Cookie.write("_hbfu",app.req.user.user_id,{duration:1}),window.location.href=this.get("href")})})()</script>')
        }
        return buf.join("")
    }, __t["base/go"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                id: "go_notifier",
                "data-link": page.link
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "title"
            })), buf.push(">您即将离开花瓣，跳转至其它页面</div><img"), buf.push(attrs({
                src: "/img/pink_pic.png",
                height: 178,
                "class": "main-img"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push("><span>3</span>秒后自动跳转</div><a"), buf.push(attrs({
                href: page.link,
                "class": "go btn btn18"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 立刻前往</span></a></div></div><style>html { background: white; }\n.wrapper { width: 992px; }\n#unauth_callout { display: none; }</style><script>(function(){var a=document.id("go_notifier").get("data-link"),b=document.getElement("#go_notifier .sub span");if(!a)return;var c=null,d=function(){c=setTimeout(function(){b.innerHTML--,b.innerHTML==0?location.href=a:d()},1e3)},e=function(){c&&clearTimeout(c)};d(),document.getElement("#go_notifier .go").addEvent("click",e)})()</script>')
        }
        return buf.join("")
    }, __t["base/board_picker"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, _currentBoard = typeof currentBoard == "undefined" ? !1 : currentBoard;
            buf.push("<div"), buf.push(attrs({
                "class": "BoardListOverlay"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "BoardSelector BoardPicker"
            })), buf.push("><div"), buf.push(attrs({
                "class": "current"
            })), buf.push("><span"), buf.push(attrs({
                data: _currentBoard || "",
                "class": "CurrentBoard"
            })), buf.push(">选择画板...</span><span"), buf.push(attrs({
                "class": "DownArrow"
            })), buf.push("></span></div><div"), buf.push(attrs({
                "class": "BoardList"
            })), buf.push("><div"), buf.push(attrs({
                "class": "BoardListBody"
            })), buf.push("><ul></ul></div><div"), buf.push(attrs({
                "class": "CreateBoard"
            })), buf.push("><input"), buf.push(attrs({
                id: "board_name_input",
                type: "text",
                placeholder: "创建新画板",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "nf btn btn18 wbtn"
            })), buf.push("><strong> 创建</strong><span></span></a><div"), buf.push(attrs({
                "class": "CreateBoardStatus"
            })), buf.push('></div></div></div></div><script>(function(){$$("div.BoardPicker").each(function(a){if(a.hasClass("CandidateBoardPicker"))return;if(a.retrieve("initialized"))return;var b=a.getElement("div.CreateBoard"),c=$("board_name_input"),d=b.getElement("a.btn"),e=b.getElement(".CreateBoardStatus"),f=$(document.body).getHeight()<400?5:8,g=new BoardPicker(a,{maxVisibleItems:f,currentBoard:a.getElement(".CurrentBoard").get("data")}),h=new FancyInput(c);(new Button(d,{click:function(){var a=c.get("value").trim();return a==""?(e.set("html","请输入名称"),!1):(this.disable(),(new Request.JSON({url:"/boards/",data:{title:a},onSuccess:function(a){a.err?alert(a.msg||app.COMMON_ERRMSG):g.add(a.board).hide()},onFailure:function(){alert(app.COMMON_ERRMSG)},onComplete:function(){h.setValue(""),this.enable()}.bind(this)})).post(),!1)}})).disable().bind(h),a.store("initialized",!0)})})()</script>')
        }
        return buf.join("")
    }, __t["base/nav_bar"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, categories = settings.categories,
                groups = [],
                cats = {};
            if (page.filter) var filter = page.filter.split(":");
            else filter = ["", "", ""];
            for (var i = 0, l = categories.length; i < l; i++) {
                var category = categories[i];
                if (category.display === !1) continue;
                var now_link = "/favorite/";
                (filter[0] === "board" || filter[0] === "user") && (now_link = "/" + filter[0] + "s" + now_link), category.nav_link = now_link + category.id + "/", groups[category.group] = groups[category.group] || [], groups[category.group].push(category), cats[category.id] = category.name
            }
            var selected = "";
            filter[2] == "videos" ? selected = "videos" : filter[1] == "category" && filter[2] == "all" ? selected = "latest" : filter[1] == "following" && filter[2] == "all" ? selected = "following" : filter[1] == "popular" && (selected = "popular"), buf.push("<div"), buf.push(attrs({
                id: "shadow_nav",
                "class": navShowing ? "" : "closed"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                "class": "tent"
            })), buf.push("><div"), buf.push(attrs({
                "class": "huaban-shadow-nav clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "unit"
            })), buf.push("><a"), buf.push(attrs({
                href: "/all/",
                rel: "nofollow",
                "class": "large-btn latest " + (selected == "latest" ? "active" : "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></div>最新</a><a"), buf.push(attrs({
                href: "/popular/",
                rel: "nofollow",
                "class": "large-btn hot " + (selected == "popular" ? "active" : "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></div>热门</a><a"), buf.push(attrs({
                href: "/all/videos/",
                rel: "nofollow",
                "class": "large-btn video " + (selected == "videos" ? "active" : "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></div>视频</a></div><div"), buf.push(attrs({
                "class": "border"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "unit unit0"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "clearfix"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[0].length; $index < $$l; $index++) {
                var cat = groups[0][$index];
                buf.push("<li><a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow",
                    "class": cat.id == filter[2] ? "onthis" : ""
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a></li>")
            }
            buf.push("</ul></div><div"), buf.push(attrs({
                "class": "border"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "unit unit1"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "clearfix"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[1].length; $index < $$l; $index++) {
                var cat = groups[1][$index];
                buf.push("<li><a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow",
                    "class": cat.id == filter[2] ? "onthis" : ""
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a></li>")
            }
            buf.push("</ul></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "unit unit2"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "clearfix"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[2].length; $index < $$l; $index++) {
                var cat = groups[2][$index];
                buf.push("<li><a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow",
                    "class": cat.id == filter[2] ? "onthis" : ""
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a></li>")
            }
            buf.push("</ul></div><div"), buf.push(attrs({
                "class": "border"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "unit unit3"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "clearfix"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[3].length; $index < $$l; $index++) {
                var cat = groups[3][$index];
                buf.push("<li><a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow",
                    "class": cat.id == filter[2] ? "onthis" : ""
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a></li>")
            }
            buf.push("</ul></div><div"), buf.push(attrs({
                "class": "border"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "unit unit4"
            })), buf.push("><ul"), buf.push(attrs({
                "class": "clearfix"
            })), buf.push(">");
            for (var $index = 0, $$l = groups[4].length; $index < $$l; $index++) {
                var cat = groups[4][$index];
                buf.push("<li><a"), buf.push(attrs({
                    href: cat.nav_link,
                    rel: "nofollow",
                    "class": cat.id == filter[2] ? "onthis" : ""
                })), buf.push(">" + escape((interp = cat.name) == null ? "" : interp) + "</a></li>")
            }
            if (req.promotions && req.promotions.dropdown && req.promotions.dropdown.length) {
                buf.push("<li"), buf.push(attrs({
                    "class": "promotion"
                })), buf.push(">");
                var _n = Math.floor(Math.random() * req.promotions.dropdown.length + 1) - 1,
                    _promotion = req.promotions.dropdown[_n],
                    _target = _promotion.new_tab ? "_blank" : "_self";
                if (_promotion.image && _promotion.image.key && _promotion.image.bucket) {
                    var _promotion_icon = "http://" + settings.hbfile[_promotion.image.bucket] + "/img/promotion/" + _promotion.image.key;
                    buf.push("<a"), buf.push(attrs({
                        style: "background-image:url('" + _promotion_icon + "');",
                        href: "" + _promotion.promotion_url + "",
                        target: "" + _target + "",
                        "class": "with-img"
                    })), buf.push(">" + escape((interp = _promotion.title) == null ? "" : interp) + "</a>")
                } else buf.push("<a"), buf.push(attrs({
                    href: "" + _promotion.promotion_url + "",
                    target: "" + _target + ""
                })), buf.push(">" + escape((interp = _promotion.title) == null ? "" : interp) + "</a>");
                buf.push("</li>")
            }
            buf.push("</ul></div></div></div></div></div>")
        }
        return buf.join("")
    }, __t["base/comment_form"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            user = user || {
                urlname: "",
                username: ""
            }, buf.push("<div"), buf.push(attrs({
                id: "pin_view_add_comment",
                "data-id": pin.pin_id,
                "class": "clearfix"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user),
                "class": "avatar"
            })), buf.push("/></a><textarea"), buf.push(attrs({
                name: "caption",
                placeholder: "添加评论或把采集@给好友",
                "class": "clear-input"
            })), buf.push("></textarea><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "post disabled btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push('> 添加评论</span></a></div><script>(function(){var a=document.id("pin_view_add_comment");if(a.retrieve("initialized"))return;var b=a.get("data-id"),c=a.getElement(".post"),d=document.getElement(".pin-view .info-piece .comments"),e=a.getElement("textarea");e.addEvent("focus",function(){c.show(),e.retrieve("registered-at")||(e.store("registered-at","registered"),new Autocompleter.Contacts.At(e))}),c.addEvent("click",function(){var a=e.value.trim();if(!a||this.hasClass("disabled"))return;this.addClass("disabled"),app.requireLogin(function(){(new Request.JSON({url:"/pins/"+b+"/comments/",data:{text:a},onSuccess:function(c){function f(a){var b=app.renderSync("base/comment_item",a.comment),c=Elements.from(b).inject(d);c.highlight(),e.value=""}c.err&&c.err==412?(app.$form={pinId:b,text:a},app.requireCaptcha(f)):c.err?app.error(c.msg||app.COMMON_ERRMSG):f(c)},onFailure:function(){app.error(app.COMMON_ERRMSG)},onComplate:function(){c.removeClass("disabled")}})).post()})}),e.addEvents({keydown:function(a){if(a.key=="enter"&&(!Browser.Platform.mac&&a.control||Browser.Platform.mac&&a.meta))return c.fireEvent("click"),!1},keyup:function(){this.value?c.removeClass("disabled"):c.addClass("disabled")}}),a.store("initialized",!0)})()</script>')
        }
        return buf.join("")
    }, __t["base/people_layout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, user_url = "/" + user.urlname,
                qt = page.people_query && escape(page.people_query.text),
                qn = page.people_query && page.people_query.total;
            buf.push("<div"), buf.push(attrs({
                id: "user_page"
            })), buf.push("><div"), buf.push(attrs({
                "class": "wrapper clearfix"
            })), buf.push("><div"), buf.push(attrs({
                id: "user_card"
            })), buf.push("><div"), buf.push(attrs({
                "class": "maozi"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "inner clearfix " + (user.repins_from && user.repins_from.length ? "" : "without-side")
            })), buf.push("><div"), buf.push(attrs({
                "class": "avatar-unit"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user, "sq140sf")
            })), buf.push("/></a>");
            if (req.user && req.user.user_id == 1 || user.user_id != 1) buf.push("<div"), buf.push(attrs({
                "class": "counts clearfix"
            })), buf.push(">"), user.follower_count ? (buf.push("<a"), buf.push(attrs({
                href: "" + user_url + "/followers/",
                "class": "followers"
            })), buf.push("><div"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = user.follower_count) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push(">粉丝</div></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "" + user_url + "/followers/",
                rel: "nofollow",
                "class": "followers"
            })), buf.push("><div"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = user.follower_count) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push(">粉丝</div></a>")), user.following_count ? (buf.push("<a"), buf.push(attrs({
                href: "" + user_url + "/following/",
                "class": "follows"
            })), buf.push("><div"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = user.following_count) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push(">关注</div></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "" + user_url + "/following/",
                rel: "nofollow",
                "class": "follows"
            })), buf.push("><div"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = user.following_count) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "sub"
            })), buf.push(">关注</div></a>")), buf.push("</div>");
            buf.push("</div><div"), buf.push(attrs({
                "class": "head-line"
            })), buf.push("><div"), buf.push(attrs({
                "class": "name"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + ""), user.status.ban && user.status.ban > (new Date).getTime() && (buf.push("<sup"), buf.push(attrs({
                style: "color:red;"
            })), buf.push(">(已禁止)</sup>")), buf.push("</div>");
            var show_verification = page.user.profile.show_verification;
            show_verification && page.user.bindings[show_verification] && page.user.bindings[show_verification].user_info.verified && (buf.push("<img"), buf.push(attrs({
                src: "/img/medals/icon_v.png",
                "class": "v-icon weibo"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "medal-info weibo"
            })), buf.push("><i"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></i><div"), buf.push(attrs({
                "class": "medal-header"
            })), buf.push("><i"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "title"
            })), buf.push(">认证活动</span></div>"), user.user_id == 1 ? (buf.push("<div"), buf.push(attrs({
                "class": "content"
            })), buf.push(">花瓣网（huaban.com）官方</div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "content"
            })), buf.push(">" + escape((interp = page.user.bindings[show_verification].user_info.verified_reason) == null ? "" : interp) + "</div>")), buf.push("</div>")), user.status && user.status.designer ? (buf.push("<img"), buf.push(attrs({
                src: "/img/medals/icon_designer.png",
                "class": "v-icon verified"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "medal-info verified"
            })), buf.push("><i"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></i><span>花瓣认证设计师</span></div>")) : user.status && user.status.material && (buf.push("<img"), buf.push(attrs({
                src: "/img/medals/icon_material.png",
                "class": "v-icon verified"
            })), buf.push("/><div"), buf.push(attrs({
                "class": "medal-info verified"
            })), buf.push("><i"), buf.push(attrs({
                "class": "arrow"
            })), buf.push("></i><span>花瓣认证版权网站</span></div>")), buf.push("</div><ul"), buf.push(attrs({
                "class": "introduction"
            })), buf.push(">"), Number(user.profile.sex) && (user.profile.sex - 1 ? (buf.push("<li><i"), buf.push(attrs({
                id: "intro_sex_woman"
            })), buf.push("></i><em>女</em></li>")) : (buf.push("<li><i"), buf.push(attrs({
                id: "intro_sex_man"
            })), buf.push("></i><em>男</em></li>"))), user.profile.location && (buf.push("<li><i"), buf.push(attrs({
                id: "intro_location"
            })), buf.push("></i><em>来自" + escape((interp = user.profile.location) == null ? "" : interp) + "</em></li>")), user.profile.birthday && typeof dateToHoroscope != "undefined" && (buf.push("<li><i"), buf.push(attrs({
                id: "intro_horoscope"
            })), buf.push("></i><em>" + escape((interp = dateToHoroscope(user.profile.birthday)) == null ? "" : interp) + "座</em></li>")), user.profile.job && (buf.push("<li><i"), buf.push(attrs({
                id: "intro_job"
            })), buf.push("></i><em>" + escape((interp = user.profile.job) == null ? "" : interp) + "</em></li>")), buf.push("</ul><div"), buf.push(attrs({
                "class": "about clearfix"
            })), buf.push(">" + escape((interp = user.profile.about) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "action-buttons"
            })), buf.push(">"), req.user && user.user_id === req.user.user_id ? (buf.push("<a"), buf.push(attrs({
                href: "/settings/",
                "class": "btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 帐号设置</span></a>")) : (user.following ? (buf.push("<a"), buf.push(attrs({
                "data-urlname": "" + user.urlname + "",
                href: "#",
                onclick: "return false;",
                "class": "followuser unfollowuser btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消关注</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-urlname": "" + user.urlname + "",
                title: "关注" + user.username + "",
                href: "#",
                onclick: "return false;",
                "class": "followuser btn rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 关注</span></a>")), req.user && (buf.push("<a"), buf.push(attrs({
                onclick: "app.page.dmController.showDialog({user_id: " + user.user_id + ", username: '" + user.username + "'}, true); return false;",
                title: "发送私信给" + user.username + "",
                href: "#",
                "class": "msg btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": "message"
            })), buf.push("></i></a>"))), buf.push("</div><div"), buf.push(attrs({
                "class": "bindings"
            })), buf.push(">");
            if (user.bindings.weibo && !user.status.hide_weibo && user.bindings.weibo.user_info) {
                var weibo = user.bindings.weibo.user_info;
                buf.push("<a"), buf.push(attrs({
                    href: "http://weibo.com/" + (weibo.urlname ? weibo.urlname : weibo.id) + "",
                    title: "访问" + user.username + "的微博",
                    target: "_blank",
                    rel: "nofollow",
                    "class": "weibo"
                })), buf.push("></a>")
            }
            user.bindings.douban && !user.status.hide_douban && user.bindings.douban.user_info && (buf.push("<a"), buf.push(attrs({
                href: "http://www.douban.com/people/" + user.bindings.douban.user_info.urlname + "/",
                title: "访问" + user.username + "的豆瓣主页",
                target: "_blank",
                rel: "nofollow",
                "class": "douban"
            })), buf.push("></a>")), user.bindings.renren && !user.status.hide_renren && user.bindings.renren.user_info && (buf.push("<a"), buf.push(attrs({
                href: "http://www.renren.com/profile.do?id=" + user.bindings.renren.user_info.id + "",
                title: "访问" + user.username + "的人人主页",
                target: "_blank",
                rel: "nofollow",
                "class": "renren"
            })), buf.push("></a>")), user.bindings.tqq && !user.status.hide_tqq && user.bindings.tqq.user_info && (buf.push("<a"), buf.push(attrs({
                href: "http://t.qq.com/" + user.bindings.tqq.user_info.urlname + "",
                title: "访问" + user.username + "的腾讯微博主页",
                target: "_blank",
                rel: "nofollow",
                "class": "tqq"
            })), buf.push("></a>")), user.profile.url && (buf.push("<a"), buf.push(attrs({
                href: "" + (user.profile.url.substr(0, 7) == "http://" ? user.profile.url : "http://" + user.profile.url) + "",
                title: "访问" + user.username + "的个人主页",
                target: "_blank",
                rel: "nofollow",
                "class": "link"
            })), buf.push("></a>")), buf.push("</div>");
            if (!req.user || user.user_id !== req.user.user_id) buf.push("<div"), buf.push(attrs({
                title: "举报用户",
                "class": "report-user"
            })), buf.push("></div>");
            buf.push("</div>");
            if (user.repins_from && user.repins_from.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "side"
                })), buf.push("><h4>最多转采自</h4>");
                for (var $index = 0, $$l = user.repins_from.length; $index < $$l; $index++) {
                    var u = user.repins_from[$index];
                    buf.push("<a"), buf.push(attrs({
                        href: "/" + u.urlname + "/",
                        "class": "item x"
                    })), buf.push("><img"), buf.push(attrs({
                        src: avatar(u)
                    })), buf.push("/>" + escape((interp = u.username) == null ? "" : interp) + ""), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                        src: "/img/icon_v.png",
                        "class": "v-icon"
                    })), buf.push("/>")), buf.push("</a>")
                }
                buf.push("</div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "tabs"
            })), buf.push(">"), user.board_count ? (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                "class": "tab " + (!page.people_query && ctx == "boards" ? "active" : "")
            })), buf.push(">" + escape((interp = user.board_count) == null ? "" : interp) + "画板</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/",
                rel: "nofollow",
                "class": "tab " + (!page.people_query && ctx == "boards" ? "active" : "")
            })), buf.push(">" + escape((interp = user.board_count) == null ? "" : interp) + "画板</a>")), user.pin_count ? (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/pins/",
                "class": "tab " + (!page.people_query && ctx == "pins" ? "active" : "")
            })), buf.push(">" + escape((interp = user.pin_count) == null ? "" : interp) + "采集</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/pins/",
                rel: "nofollow",
                "class": "tab " + (!page.people_query && ctx == "pins" ? "active" : "")
            })), buf.push(">" + escape((interp = user.pin_count) == null ? "" : interp) + "采集</a>"));
            var _count = user.like_count;
            user.boards_like_count && (_count += user.boards_like_count), _count ? (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/",
                "class": "tab " + (!page.people_query && ctx == "likes" ? "active" : "")
            })), buf.push(">" + escape((interp = _count) == null ? "" : interp) + "喜欢</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/likes/",
                rel: "nofollow",
                "class": "tab " + (!page.people_query && ctx == "likes" ? "active" : "")
            })), buf.push(">" + escape((interp = _count) == null ? "" : interp) + "喜欢</a>")), user.commodity_count ? (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/commodities/",
                "class": "tab " + (!page.people_query && ctx == "commodities" ? "active" : "")
            })), buf.push(">" + escape((interp = user.commodity_count) == null ? "" : interp) + "商品</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/commodities/",
                rel: "nofollow",
                "class": "tab " + (!page.people_query && ctx == "commodities" ? "active" : "")
            })), buf.push(">" + escape((interp = user.commodity_count) == null ? "" : interp) + "商品</a>")), user && user.status && user.status.designer && (user.creations_count ? (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/creations/",
                "class": "tab " + (!page.people_query && ctx == "creations" ? "active" : "")
            })), buf.push(">" + escape((interp = user.creations_count) == null ? "" : interp) + "原创</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + user.urlname + "/creations/",
                rel: "nofollow",
                "class": "tab " + (!page.people_query && ctx == "creations" ? "active" : "")
            })), buf.push(">" + escape((interp = user.creations_count) == null ? "" : interp) + "原创</a>"))), buf.push("<form"), buf.push(attrs({
                id: "people_search_item",
                action: "/" + user.urlname + "/pins/",
                "class": "searching-unit"
            })), buf.push("><input"), buf.push(attrs({
                value: page.people_query ? _(page.people_query.text) : "",
                name: "q",
                placeholder: req.user && req.user.user_id == user.user_id ? "搜索我的采集" : "搜索TA的采集"
            })), buf.push("/><a"), buf.push(attrs({
                onclick: "return false;",
                "class": "go"
            })), buf.push("></a></form></div></div>"), qt && (buf.push("<div"), buf.push(attrs({
                "class": "search-status"
            })), buf.push(">找到 " + escape((interp = qn) == null ? "" : interp) + " 个与<strong>" + escape((interp = qt) == null ? "" : interp) + "</strong>相关的结果</div>"));
            var __val__ = emerge(body_tpl, {
                user: user,
                users: page.users || null,
                req: req
            });
            buf.push(null == __val__ ? "" : __val__), buf.push('</div></div><script>(function(){app.initFollowButtons(),app.initSearchForms("#people_search_item"),app.initPureFollowUserButtons({onFollowSuccess:function(a){a.getElement(".text").innerHTML="取消关注",a.removeClass("rbtn")},onUnfollowSuccess:function(a){a.getElement(".text").innerHTML="关注",a.addClass("rbtn")}}),app.initPureFollowUserButtons({buttonSelector:".item-followuser",unfollowButtonClass:"item-unfollowuser"}),app.initLikeButtons(),app.initAddCommentButtons()})(),function(){app.view.addEvent("click:relay(.board-cover-edit)",function(c){c.stop(),!app.dialog||!app.dialog.boards?(app.dialog={},app.dialog.boards={},app.page.user.boards.map(function(a){app.dialog.boards[a.board_id]=a})):app.page.user.boards.map(function(a){app.dialog.boards[a.board_id]=a});var d=this,e=d.getParent(".Board").get("data-id");$$(".cover-change")&&$$(".cover-change").removeClass("cover-change"),d.getParent(".Board").addClass("cover-change"),app.showDialog("board_cover"),b(e),a(e);var f=document.getElement("#board_cover");f.getElements(".left").addClass("none"),f.getElements(".none").length&&f.getElements(".right").removeClass("none");var g="设置封面 / "+app.dialog.boards[e].title;document.getElement("#board_cover h2").set("text",g),document.getElement("#board_cover .prompt")&&document.getElement("#board_cover .prompt").hide(),document.id("board_cover").getElement(".cover").show(),document.getElement(".cover-imgs").setStyle("left","226px")});var a=function(a){document.id("board_cover").getElements(".cover-option input:checked").set("checked",""),app.dialog.boards[a].cover?(document.getElement("#board_cover .cover-option").show(),document.getElement("#board_cover .cover-option .sub-arrow").show(),document.id("board_cover").getElement("#cover-option-default").set("checked",""),document.id("board_cover").getElement("#cover-option-custom").set("checked","checked")):document.getElement("#board_cover .cover-option").hide(),document.id("board_cover").addEvent("click:relay(.cover-option span)",function(a){document.id("board_cover").getElements(".cover-option input:checked").set("checked",""),this.getElement("input").set("checked","checked"),this.hasClass("first")?(document.getElement("#board_cover .cover").hide(),document.getElement("#board_cover .cover-option .sub-arrow").hide()):(document.getElement("#board_cover .cover").show(),document.getElement("#board_cover .cover-option .sub-arrow").show())})},b=function(a){var b=app.dialog.boards[a].pins;app.dialog.pinsNum=b.length,app.dialog.board_id=a,app.dialog.moveIndex=0;var c="";b.map(function(a){var b="http://"+app.settings.imgHosts[a.file.bucket]+"/"+a.file.key+"_sq235";c+="<li><img src=\'"+b+"\' data-id= \'"+a.pin_id+"\' />"+"</li>"}),document.getElement(".cover-imgs").set("html",c)}}(),$$(".report-user").addEvent("click",function(){return report_type="account",report_id=app.page.user.user_id,app.showDialog("report"),!1}),function(){var a=document.getElement(".head-line"),b=a.getElement(".v-icon.verified"),c=a.getElement(".verified.medal-info"),d=a.getElement(".v-icon.weibo"),e=a.getElement(".medal-info.weibo");b&&(new MenuController({menu:c,trigger:b,showupDelay:100}),c.addEvent("menu_show",function(){e&&e.hide();var a=b.getPosition().x,c=b.getPosition().y,d=this.getStyle("width").toInt(),f=this.getStyle("height").toInt(),g=c-f-30-window.scrollY,h=a-d/2;this.setStyle("top",g),this.setStyle("left",h)})),d&&(new MenuController({menu:e,trigger:d,showupDelay:100}),e.addEvent("menu_show",function(){c&&c.hide();var a=d.getPosition().x,b=d.getPosition().y,e=this.getStyle("width").toInt(),f=this.getStyle("height").toInt(),g=b-f-30-window.scrollY,h=a-e/2;this.setStyle("top",g),this.setStyle("left",h)}))}(),function(){app._gaq_promotion&&app._gaq_promotion()}()</script>')
        }
        return buf.join("")
    }, __t["base/pager"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, base_url = base_url || "?page=%_page_&limit=%_limit_";
            base_url = base_url.replace("%_limit_", per_page);
            var num_records = parseInt(num_records) || 0,
                cur_page = parseInt(cur_page) || 1,
                per_page = parseInt(per_page) || 2,
                num_pages = Math.ceil(num_records / per_page);
            cur_page < 1 && (cur_page = 1), num_pages < 1 && (num_pages = 1), cur_page > num_pages && (cur_page = num_pages);
            if (num_pages > 1) {
                buf.push("<div"), buf.push(attrs({
                    "class": "pager"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "pages"
                })), buf.push(">"), cur_page > 1 && (buf.push('<!--a.nextprev(href="#{base}?page=#{cur_page - 1}&limit=#{per_page}") 上一页--><a'), buf.push(attrs({
                    href: "" + base_url.replace("%_page_", cur_page - 1) + "",
                    "class": "nextprev"
                })), buf.push(">上一页</a>"));
                if (cur_page > 1)
                    if (cur_page > 8) {
                        for (var $index = 0, $$l = [1, 2].length; $index < $$l; $index++) {
                            var n = [1, 2][$index];
                            buf.push('<!--a(href="#{base}?page=#{cur_page}&limit=#{per_page}") #{n}--><a'), buf.push(attrs({
                                href: "" + base_url.replace("%_page_", n) + ""
                            })), buf.push(">" + escape((interp = n) == null ? "" : interp) + "</a>")
                        }
                        buf.push("<span"), buf.push(attrs({
                            "class": "break"
                        })), buf.push(">...</span>");
                        var offset = cur_page - 3;
                        cur_page > num_pages - 3 && (offset = num_pages - 6);
                        for (offset; offset < cur_page; offset++) buf.push('<!--a(href="#{base}?page=#{offset}&limit=#{per_page}") #{offset}--><a'), buf.push(attrs({
                            href: "" + base_url.replace("%_page_", offset) + ""
                        })), buf.push(">" + escape((interp = offset) == null ? "" : interp) + "</a>")
                    } else
                        for (var n = 1; n < cur_page; n++) buf.push('<!--a(href="#{base}?page=#{n}&limit=#{per_page}") #{n}--><a'), buf.push(attrs({
                            href: "" + base_url.replace("%_page_", n) + ""
                        })), buf.push(">" + escape((interp = n) == null ? "" : interp) + "</a>");
                buf.push("<span"), buf.push(attrs({
                    "class": "current"
                })), buf.push(">" + escape((interp = cur_page) == null ? "" : interp) + "</span>");
                if (num_pages - cur_page > 0)
                    if (num_pages - cur_page > 8) {
                        var offset = 7;
                        cur_page > 3 && (offset = cur_page + 3);
                        for (var n = cur_page + 1; n < offset; n++) buf.push('<!--a(href="#{base}?page=#{n}&limit=#{per_page}") #{n}--><a'), buf.push(attrs({
                            href: "" + base_url.replace("%_page_", n) + ""
                        })), buf.push(">" + escape((interp = n) == null ? "" : interp) + "</a>");
                        buf.push("<span"), buf.push(attrs({
                            "class": "break"
                        })), buf.push(">...</span>");
                        for (var n = num_pages - 1; n <= num_pages; n++) buf.push('<!--a(href="#{base}?page=#{n}&limit=#{per_page}") #{n}--><a'), buf.push(attrs({
                            href: "" + base_url.replace("%_page_", n) + ""
                        })), buf.push(">" + escape((interp = n) == null ? "" : interp) + "</a>")
                    } else
                        for (var n = cur_page + 1; n <= num_pages; n++) buf.push('<!--a(href="#{base}?page=#{n}&limit=#{per_page}") #{n}--><a'), buf.push(attrs({
                            href: "" + base_url.replace("%_page_", n) + ""
                        })), buf.push(">" + escape((interp = n) == null ? "" : interp) + "</a>");
                cur_page < num_pages && (buf.push('<!--a.nextprev(href="#{base}?page=#{cur_page + 1}&limit=#{per_page}") 下一页--><a'), buf.push(attrs({
                    href: "" + base_url.replace("%_page_", cur_page + 1) + "",
                    "class": "nextprev"
                })), buf.push(">下一页</a>")), buf.push("</div></div>")
            }
        }
        return buf.join("")
    }, __t["base/message_popup_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "item " + (message.unread ? "unread" : "")
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "avt"
            })), buf.push("><img"), buf.push(attrs({
                width: "75",
                height: "75",
                src: avatar(message.extra.by_user)
            })), buf.push("/></a>");
            if (message.type == "like_pin") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push(">"), message.extra.pin.raw_text ? (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>喜欢了你的采集</span></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/pins/" + message.extra.pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.pin.raw_text) == null ? "" : interp) + "</a></div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>喜欢了</span></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/pins/" + message.extra.pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">你的采集</a></div>")), buf.push("</div><a"), buf.push(attrs({
                href: "/pins/" + message.extra.pin.pin_id + "/",
                "class": "pin-link"
            })), buf.push("><img"), buf.push(attrs({
                src: imgURL(message.extra.pin.file, "sq75sf")
            })), buf.push("/></a>");
            else if (message.type == "pin_text") {
                buf.push("<div"), buf.push(attrs({
                    "class": "details"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "line"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + message.extra.by_user.urlname + "/",
                    "class": "brown-link"
                })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>采集了</span><a"), buf.push(attrs({
                    href: "/pins/" + message.extra.pin.pin_id + "/",
                    "class": "brown-link"
                })), buf.push(">" + escape((interp = message.extra.pin.raw_text.brief(20)) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                    "class": "main-content line"
                })), buf.push(">");
                var __val__ = format_text(message.extra.pin.raw_text, message.extra.pin.text_meta);
                buf.push(null == __val__ ? "" : __val__), buf.push("</div></div><a"), buf.push(attrs({
                    href: "/pins/" + message.extra.pin.pin_id + "/",
                    "class": "pin-link"
                })), buf.push("><img"), buf.push(attrs({
                    src: imgURL(message.extra.pin.file, "sq75sf")
                })), buf.push("/></a>")
            } else if (message.type == "follow_user") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push("><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><span>关注了你</span></div></div>");
            else if (message.type == "repin") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push(">"), message.extra.by_pin.raw_text ? (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>转采了你的采集</span></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/pins/" + message.extra.pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.pin.raw_text) == null ? "" : interp) + "</a></div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>转采了</span></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/pins/" + message.extra.by_pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">你的采集</a></div>")), buf.push("</div><a"), buf.push(attrs({
                href: "/pins/" + message.extra.by_pin.pin_id + "/",
                "class": "pin-link"
            })), buf.push("><img"), buf.push(attrs({
                src: imgURL(message.extra.by_pin.file, "sq75sf")
            })), buf.push("/></a>");
            else if (message.type == "repin_2nd") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push(">"), message.extra.by_pin.raw_text ? (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(8)) == null ? "" : interp) + "</a><span>通过</span><a"), buf.push(attrs({
                href: "/" + message.extra.through_pin.user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.through_pin.user.username.brief(8)) == null ? "" : interp) + "</a><span>转采了</span></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/pins/" + message.extra.pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.pin.raw_text) == null ? "" : interp) + "</a></div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><span>转采了</span><a"), buf.push(attrs({
                href: "/pins/" + message.extra.by_pin.pin_id + "/",
                "class": "brown-link"
            })), buf.push(">你的采集</a></div>")), buf.push("</div><a"), buf.push(attrs({
                href: "/pins/" + message.extra.by_pin.pin_id + "/",
                "class": "pin-link"
            })), buf.push("><img"), buf.push(attrs({
                src: imgURL(message.extra.by_pin.file, "sq75sf")
            })), buf.push("/></a>");
            else if (message.type == "like_board") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push("><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><span>喜欢了你的画板</span><a"), buf.push(attrs({
                href: "/boards/" + message.extra.board.board_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.board.title) == null ? "" : interp) + "</a></div></div>");
            else if (message.type == "follow_board") buf.push("<div"), buf.push(attrs({
                "class": "details"
            })), buf.push("><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + message.extra.by_user.urlname + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.by_user.username) == null ? "" : interp) + "</a></div><div"), buf.push(attrs({
                "class": "line"
            })), buf.push("><span>关注了你的画板</span><a"), buf.push(attrs({
                href: "/boards/" + message.extra.board.board_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = message.extra.board.title) == null ? "" : interp) + "</a></div></div>");
            else if (message.type == "comment") {
                buf.push("<div"), buf.push(attrs({
                    "class": "details"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "line"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/" + message.extra.by_user.urlname + "/",
                    "class": "brown-link"
                })), buf.push(">" + escape((interp = message.extra.by_user.username.brief(12)) == null ? "" : interp) + "</a><span>评论了</span>"), message.extra.pin.raw_text ? (buf.push("<a"), buf.push(attrs({
                    href: "/pins/" + message.extra.pin.pin_id + "/",
                    "class": "brown-link"
                })), buf.push(">" + escape((interp = message.extra.pin.raw_text.brief(20)) == null ? "" : interp) + "</a>")) : (buf.push("<a"), buf.push(attrs({
                    href: "/pins/" + message.extra.pin.pin_id + "/",
                    "class": "brown-link"
                })), buf.push(">采集</a>")), buf.push("</div><div"), buf.push(attrs({
                    "class": "main-content line"
                })), buf.push(">");
                var __val__ = format_text(message.extra.comment.raw_text, message.extra.comment.text_meta);
                buf.push(null == __val__ ? "" : __val__), buf.push("</div></div><a"), buf.push(attrs({
                    href: "/pins/" + message.extra.pin.pin_id + "/",
                    "class": "pin-link"
                })), buf.push("><img"), buf.push(attrs({
                    src: imgURL(message.extra.pin.file, "sq75sf")
                })), buf.push("/></a>")
            }
            buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/creation_success"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "form"
            })), buf.push("><div"), buf.push(attrs({
                "class": "creation-done"
            })), buf.push("><h3><div"), buf.push(attrs({
                "class": "common-message success"
            })), buf.push(">你已经成功上传, 待审核中</div></h3><div"), buf.push(attrs({
                id: "pin_operations",
                style: "margin-top:24px;"
            })), buf.push("><a"), buf.push(attrs({
                id: "continue_upload",
                href: "#"
            })), buf.push(">继续上传原创作品</a>|<a"), buf.push(attrs({
                id: "manage_creations",
                href: "/cc/center/"
            })), buf.push(">管理原创作品</a>|<a"), buf.push(attrs({
                id: "close_window",
                href: "#"
            })), buf.push('>关闭窗口</a></div></div></div><script>(function(){var a=$("CreationSuccess"),b=window.close;a&&(b=function(){app.hideDialog()}),$("close_window").addEvent("click",function(){return b(),!1}),$("continue_upload").addEvent("click",function(){return b(),app.showUploadDialog(),!1})})()</script>')
        }
        return buf.join("")
    }, __t["base/appeal"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "Appeal"
            })), buf.push(">");
            var username = page.user && page.user.username ? page.user.username : null,
                disabled_username = username ? !0 : !1,
                email = page.user && page.user.email ? page.user.email : null,
                disabled_email = email ? !0 : !1,
                url = page.user && page.user.url ? page.user.url : null,
                disabled_url = url ? !0 : !1;
            buf.push("<h1>申诉</h1><form"), buf.push(attrs({
                action: "",
                "class": "Form StaticForm nm"
            })), buf.push("><ul>");
            if (!page.user || username) buf.push("<li"), buf.push(attrs({
                "class": "nbt"
            })), buf.push("><input"), buf.push(attrs({
                id: "username",
                type: "text",
                name: "username",
                value: username,
                disabled: disabled_username,
                "class": "clear-input"
            })), buf.push("/><label>用户名</label><span"), buf.push(attrs({
                "class": "fff"
            })), buf.push("></span></li>");
            if (!page.user || url) buf.push("<li"), buf.push(attrs({
                "class": "nbt"
            })), buf.push("><input"), buf.push(attrs({
                id: "url",
                type: "text",
                name: "url",
                value: url,
                disabled: disabled_url,
                "class": "clear-input"
            })), buf.push("/><label>个性网址</label><span"), buf.push(attrs({
                "class": "fff"
            })), buf.push("></span></li>");
            if (!page.user || email) buf.push("<li"), buf.push(attrs({
                "class": "nbt"
            })), buf.push("><input"), buf.push(attrs({
                id: "email",
                type: "text",
                name: "email",
                value: email,
                disabled: disabled_email,
                "class": "clear-input"
            })), buf.push("/><label>Email</label><span"), buf.push(attrs({
                "class": "fff"
            })), buf.push("></span></li>");
            page.user || (buf.push("<li"), buf.push(attrs({
                "class": "nbt"
            })), buf.push("><p>请至少填写一项准确信息</p></li>")), buf.push("</ul><div"), buf.push(attrs({
                "class": "Submit"
            })), buf.push(">"), page.user ? (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><strong> 确认并提交</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><strong> 提交</strong><span></span></a>")), buf.push('</div></form></div><script>(function(){var a=$("Appeal");if(a.retrieve("initialized"))return;var b=$("username"),c=$("url"),d=$("email");new Button(a.getElement(".Submit a"),{click:function(){var e=b?b.get("value").trim():"",f=c?c.get("value").trim():"",g=d?d.get("value").trim():"";if(e==""&&f==""&&g==""){app.showTip(b,"至少输入其中一项",{width:150}),app.showTip(c,"至少输入其中一项",{width:150}),app.showTip(d,"至少输入其中一项",{width:150});return}return this.disable(),(new Request.JSON({url:"/appeal",data:{username:e,url:f,email:g},onSuccess:function(b){b.err?app.error(b.msg||b.err):(a.innerHTML=\'<h1>已提交您的申诉，请耐心等待。</h1><h2>继续浏览<a href="/">花瓣网</a></h2>\',setTimeout(function(){location.href="/"},5e3))},onFailure:function(){app.error(app.COMMON_ERRMSG)},onComplete:function(){this.enable()}.bind(this)})).post(),!1}}),a.getElements("input").addEvent("blur",function(a){app.hideTip(a.target)}),a.store("initialized",!0)})()</script>')
        }
        return buf.join("")
    }, __t["base/pin_view_creation_extra"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, is_owner = this.req.user && pin.user_id === this.req.user.user_id,
                width = pin.creation.extra.file.width,
                height = pin.creation.extra.file.height,
                creation = pin.creation;
            buf.push("<div"), buf.push(attrs({
                "class": "pin-info creation-info wt"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-header"
            })), buf.push(">");
            if (pin.raw_text) {
                buf.push("<p"), buf.push(attrs({
                    "class": "text"
                })), buf.push(">");
                var __val__ = format_text(pin.raw_text, pin.text_meta, {
                    tag_icon: !0
                });
                buf.push(null == __val__ ? "" : __val__), buf.push("</p>")
            }
            buf.push("</div><div"), buf.push(attrs({
                "class": "info-body clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-left info-panel"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">编号:  " + escape((interp = creation.creation_id) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">原图尺寸:  " + escape((interp = width) == null ? "" : interp) + " * " + escape((interp = height) == null ? "" : interp) + " px</div>");
            var type = creation.extra.file.type.split("/")[1].toUpperCase(),
                fakeType = {
                    JPEG: "JPG"
                };
            buf.push("<div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">原图格式:  " + escape((interp = fakeType[type] ? fakeType[type] : type) == null ? "" : interp) + "</div>");
            var useage = creation.auth_method == 1 ? "商业用途" : creation.auth_method == 2 ? "编辑用途" : "原创作品,只展示不出售";
            buf.push("<div"), buf.push(attrs({
                "class": "info-line"
            })), buf.push(">用途:  " + escape((interp = useage) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                "class": "info-line last"
            })), buf.push("><span>版权所有:  花瓣&nbsp;</span><a"), buf.push(attrs({
                href: "/" + pin.user.urlname + "",
                "class": "brown-link x"
            })), buf.push(">@" + escape((interp = pin.user.username) == null ? "" : interp) + "</a>"), pin.creation && pin.creation.extra.auth && (buf.push("<span"), buf.push(attrs({
                id: "portrait",
                "class": "portrait icon"
            })), buf.push("></span>")), buf.push("</div></div>"), creation.auth_method != 3 && (buf.push("<div"), buf.push(attrs({
                "class": "info-right info-panel"
            })), buf.push("><div"), buf.push(attrs({
                "class": "size"
            })), buf.push("><label><input"), buf.push(attrs({
                type: "radio",
                name: "size",
                value: "xl"
            })), buf.push("/><span>超大图</span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = (.85 * width).toFixed(0)) == null ? "" : interp) + " * " + escape((interp = (.85 * height).toFixed(0)) == null ? "" : interp) + "</span></label><label><input"), buf.push(attrs({
                type: "radio",
                name: "size",
                value: "l"
            })), buf.push("/><span>大图</span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = (.75 * width).toFixed(0)) == null ? "" : interp) + " * " + escape((interp = (.75 * height).toFixed(0)) == null ? "" : interp) + "</span></label><label><input"), buf.push(attrs({
                type: "radio",
                name: "size",
                value: "m"
            })), buf.push("/><span>中图</span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = (.6 * width).toFixed(0)) == null ? "" : interp) + " * " + escape((interp = (.6 * height).toFixed(0)) == null ? "" : interp) + "</span></label><label><input"), buf.push(attrs({
                type: "radio",
                name: "size",
                value: "s",
                checked: !0
            })), buf.push("/><span>小图</span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = (.5 * width).toFixed(0)) == null ? "" : interp) + " * " + escape((interp = (.5 * height).toFixed(0)) == null ? "" : interp) + "</span></label></div><div"), buf.push(attrs({
                "data-price": "" + creation.price + "",
                "class": "price"
            })), buf.push("><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">价格: ￥" + escape((interp = creation.price * .5) == null ? "" : interp) + "</span><a"), buf.push(attrs({
                href: "/cc/help/#item_8",
                "class": "doubt icon"
            })), buf.push("></a></div></div>")), buf.push("</div>"), creation.auth_method != 3 && (buf.push("<div"), buf.push(attrs({
                "class": "info-footer"
            })), buf.push("><a"), buf.push(attrs({
                id: "download_creation",
                creation_id: creation.creation_id,
                href: "#",
                onclick: "return false;",
                "class": "btn-with-icon btn btn18 rbtn"
            })), buf.push("><i"), buf.push(attrs({
                "class": "download-icon"
            })), buf.push("></i>"), is_owner ? buf.push("直接下载") : buf.push("授权下载"), buf.push("</a></div>")), buf.push('</div><script>(function(){app.page.portraitNoti=new SmoothNotification({duration:3e3,relative:{to:"portrait",position:"topcenter",offset:{x:0,y:-6}},arrow:"down",styles:{position:"absoute",padding:"4px 10px","font-size":"14px","border-radius":"2px"}}),document.id("portrait")&&document.id("portrait").addEvent("mouseenter",function(){if(document.getElement(".smooth-notification"))return;app.page.portraitNoti.show("肖像已授权")});var a=document.getElement(".creation-info .size");a&&a.addEvent("click:relay(input)",function(a){var b=this;b.getParent(".size").getElement("input:checked").checked=!1;var c=b.getParent(".info-panel").getElement(".price");b.checked=!0;var d=b.get("value"),e=c.get("data-price"),f={xl:.85,l:.75,m:.6,s:.5},g=e*f[d];return c.getElement(".num").set("text","价格: ￥"+g.toFixed(2)),!1}),document.id("download_creation")&&document.id("download_creation").addEvent("click",function(){var a=$$("input[name=size]:checked")[0],b=this.get("creation_id");a?a=a.get("value"):a="s",window.open("/cc/getorder/?size="+a+"&creation_id="+b,"","",!1)})})()</script>')
        }
        return buf.join("")
    }, __t["base/ctx_bar"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, site = ~filter.indexOf("site:") ? filter.substr(9) : null;
            filter = filter.split(":");
            if (site) buf.push("<div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "ctx_bar",
                "class": "board"
            })), buf.push("><p>来自<a"), buf.push(attrs({
                href: "http://" + site + "",
                target: "_blank",
                rel: "nofollow"
            })), buf.push(">" + escape((interp = site) == null ? "" : interp) + "</a>的采集<form"), buf.push(attrs({
                id: "search_from_sites",
                action: _url,
                "class": "search-item"
            })), buf.push("><input"), buf.push(attrs({
                value: "" + (qt || "") + "",
                name: "q",
                placeholder: "搜索你喜欢的",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                onclick: "return false;",
                "class": "go"
            })), buf.push("></a></form></p></div>"), qt && (buf.push("<div"), buf.push(attrs({
                "class": "search-status"
            })), buf.push(">找到 " + escape((interp = qn) == null ? "" : interp) + " 个与<strong>" + escape((interp = qt) == null ? "" : interp) + "</strong>相关的结果 |<a"), buf.push(attrs({
                href: "/from/" + site + "/"
            })), buf.push(">返回所有采集</a></div>")), buf.push("</div>");
            else if (filter[1] == "popular") buf.push("<div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "ctx_bar"
            })), buf.push("><div"), buf.push(attrs({
                "class": "p"
            })), buf.push(">热门" + escape((interp = filter[0] == "pin" ? "采集" : filter[0] === "board" ? "画板" : "") == null ? "" : interp) + "<ul"), buf.push(attrs({
                "class": "pin-board-switcher clearfix"
            })), buf.push("><li"), buf.push(attrs({
                "class": "first " + (filter[0] == "pin" ? "selected" : "")
            })), buf.push("><a"), buf.push(attrs({
                href: "/popular/",
                "class": "pin-link"
            })), buf.push(">采集</a></li><li"), buf.push(attrs({
                "class": filter[0] == "board" ? "selected" : ""
            })), buf.push("><a"), buf.push(attrs({
                href: "/boards/popular/"
            })), buf.push(">画板</a></li><li"), buf.push(attrs({
                "class": "last " + (filter[0] == "user" ? "selected" : "")
            })), buf.push("><a"), buf.push(attrs({
                href: "/users/popular/",
                "class": "user-link"
            })), buf.push(">推荐用户</a></li></ul><div"), buf.push(attrs({
                "class": "right"
            })), buf.push(">"), promotion && (buf.push("<a"), buf.push(attrs({
                href: "" + promotion.url + "",
                target: promotion.new_tab ? "_blank" : "_self",
                "class": "promotion"
            })), buf.push(">" + escape((interp = promotion.sub_title) == null ? "" : interp) + "</a>")), filter[0] == "user" && (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "self-promote btn wbtn"
            })), buf.push("><strong> 推荐自己</strong><span></span></a>")), buf.push("</div></div></div></div>");
            else if (filter[2] == "all" && filter[1] == "category" && settings && settings.categories) {
                var cates = settings.categories.filter(function (e) {
                    return e.display !== !1
                });
                buf.push("<div"), buf.push(attrs({
                    "class": "wrapper"
                })), buf.push("><div"), buf.push(attrs({
                    id: "category_guide"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "unit"
                })), buf.push(">");
                for (var i = 0; i < cates.length / 5; i++) buf.push("<a"), buf.push(attrs({
                    href: cates[i].nav_link,
                    rel: "nofollow",
                    "class": "x"
                })), buf.push(">" + escape((interp = cates[i].name) == null ? "" : interp) + "</a>");
                buf.push("</div><div"), buf.push(attrs({
                    "class": "unit"
                })), buf.push(">");
                for (var i = Math.floor(cates.length / 5) + 1; i < cates.length * 2 / 5; i++) buf.push("<a"), buf.push(attrs({
                    href: cates[i].nav_link,
                    rel: "nofollow",
                    "class": "x"
                })), buf.push(">" + escape((interp = cates[i].name) == null ? "" : interp) + "</a>");
                buf.push("</div><div"), buf.push(attrs({
                    "class": "unit"
                })), buf.push(">");
                for (var i = Math.floor(cates.length * 2 / 5) + 1; i < cates.length * 3 / 5; i++) buf.push("<a"), buf.push(attrs({
                    href: cates[i].nav_link,
                    rel: "nofollow",
                    "class": "x"
                })), buf.push(">" + escape((interp = cates[i].name) == null ? "" : interp) + "</a>");
                buf.push("</div><div"), buf.push(attrs({
                    "class": "unit"
                })), buf.push(">");
                for (var i = Math.floor(cates.length * 3 / 5) + 1; i < cates.length * 4 / 5; i++) buf.push("<a"), buf.push(attrs({
                    href: cates[i].nav_link,
                    rel: "nofollow",
                    "class": "x"
                })), buf.push(">" + escape((interp = cates[i].name) == null ? "" : interp) + "</a>");
                buf.push("</div><div"), buf.push(attrs({
                    "class": "unit last"
                })), buf.push(">");
                for (var i = Math.floor(cates.length * 4 / 5) + 1; i < cates.length; i++) buf.push("<a"), buf.push(attrs({
                    href: cates[i].nav_link,
                    rel: "nofollow",
                    "class": "x"
                })), buf.push(">" + escape((interp = cates[i].name) == null ? "" : interp) + "</a>");
                buf.push("</div><div"), buf.push(attrs({
                    "class": "clear"
                })), buf.push("></div></div></div>")
            } else if (filter[2] == "videos") {
                buf.push("<div"), buf.push(attrs({
                    "class": "wrapper"
                })), buf.push("><div"), buf.push(attrs({
                    id: "ctx_bar"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "p"
                })), buf.push(">");
                if (qt) {
                    buf.push("<a"), buf.push(attrs({
                        href: "/all/videos/"
                    })), buf.push(">视频</a>&nbsp;»&nbsp;");
                    var __val__ = qt;
                    buf.push(null == __val__ ? "" : __val__)
                } else buf.push("视频");
                buf.push("<div"), buf.push(attrs({
                    "class": "right"
                })), buf.push("><form"), buf.push(attrs({
                    id: "search_from_category",
                    action: _url,
                    "class": "search-item"
                })), buf.push("><input"), buf.push(attrs({
                    value: "" + (qt || "") + "",
                    name: "q",
                    placeholder: "搜索你喜欢的",
                    "class": "clear-input"
                })), buf.push("/><a"), buf.push(attrs({
                    onclick: "return false;",
                    "class": "go"
                })), buf.push("></a></form></div></div></div></div>")
            } else if (filter[1] == "category") {
                buf.push("<div"), buf.push(attrs({
                    id: "category_nav_bar"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "wrapper"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "title"
                })), buf.push(">"), qt ? (buf.push("<a"), buf.push(attrs({
                    href: "" + _url.split("?")[0] + ""
                })), buf.push(">" + escape((interp = categories[filter[2]]) == null ? "" : interp) + "</a>&nbsp;»&nbsp;" + escape((interp = qt) == null ? "" : interp) + "")) : buf.push("" + escape((interp = categories[filter[2]]) == null ? "" : interp) + ""), buf.push("</div><div"), buf.push(attrs({
                    "class": "navs"
                })), buf.push("><a"), buf.push(attrs({
                    href: "/favorite/" + filter[2] + "/" + (qt ? "?q=" + qt : ""),
                    "class": "x " + (filter[0] == "pin" ? "selected" : "")
                })), buf.push(">采集</a><a"), buf.push(attrs({
                    href: "/boards/favorite/" + filter[2] + "/" + (qt ? "?q=" + qt : "") + "",
                    "class": "x " + (filter[0] == "board" ? "selected" : "")
                })), buf.push(">画板</a><a"), buf.push(attrs({
                    href: "/users/favorite/" + filter[2] + "/",
                    "class": filter[0] == "user" ? "selected" : ""
                })), buf.push(">推荐用户</a>");
                if (locals.suggests && suggests.navigations)
                    for (var $index = 0, $$l = suggests.navigations.length; $index < $$l; $index++) {
                        var n = suggests.navigations[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "" + n.url + "",
                            target: "_blank"
                        })), buf.push(">" + escape((interp = n.name) == null ? "" : interp) + "</a>")
                    }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "right"
                })), buf.push(">");
                if (locals.suggests && suggests.words && suggests.words.length) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "filter-button"
                    })), buf.push(">筛选<div"), buf.push(attrs({
                        "class": "menu"
                    })), buf.push(">");
                    var _u = "/favorite/" + filter[2];
                    filter[0] == "board" && (_u = "/boards/favorite/" + filter[2]);
                    for (var $index = 0, $$l = suggests.words.length; $index < $$l; $index++) {
                        var w = suggests.words[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "" + (_u + "?q=" + w) + "",
                            "class": "x " + (locals.qt == w ? "selected" : "")
                        })), buf.push(">" + escape((interp = w) == null ? "" : interp) + "</a>")
                    }
                    buf.push("</div></div>")
                }
                filter[0] !== "user" ? filter[2] !== "beauty" && (buf.push("<form"), buf.push(attrs({
                    id: "search_from_category",
                    action: _url,
                    "class": "search-item"
                })), buf.push("><input"), buf.push(attrs({
                    value: "" + (qt || "") + "",
                    name: "q",
                    placeholder: "在此分类下搜索",
                    "class": "clear-input"
                })), buf.push("/><a"), buf.push(attrs({
                    onclick: "return false;",
                    "class": "go"
                })), buf.push("></a></form>")) : (buf.push("<a"), buf.push(attrs({
                    href: "#",
                    onclick: "return false;",
                    "class": "self-promote btn wbtn"
                })), buf.push("><strong> 推荐自己</strong><span></span></a>")), buf.push("</div></div></div>")
            }
            buf.push('<script>(function(){app.initSearchForms("#search_from_sites, #search_from_category"),app.gaqTrackPromotion("#ctx_bar .right a.promotion",{category:"ctx_bar-promotions",useTargetUrlAsLabel:!0})})(),function(){var a=document.id("category_guide");if(!a)return;var b=a.getParent(".wrapper"),c=function(){var c=b.getSize().x;c==992?a.set("class","w992"):c==1244?a.set("class","w1244"):c==1496&&a.set("class","w1496")};window.addEvent("resize",c),setTimeout(c,0),a.getElements(".unit a").each(function(a){app.gaqTrackEvent(a,{category:"category_guide",label:a.href})})}(),function(){var a=document.getElement("#category_nav_bar .filter-button");if(!a)return;var b=a.getElement(".menu");new MenuController({menu:b,trigger:a}),b.addEvents({menu_show:function(){a.addClass("active")},menu_hide:function(){a.removeClass("active")}})}(),function(){var a=document.id("category_nav_bar");if(!a)return;if(!app.req.user)return a.addClass("unauth");var b="http://hbfile.b0.upaiyun.com/img/category_backgrounds/",c=["anime","apparel","architecture","art","beauty","cars_motorcycles","collocation","data_presentation","default","design","desire","diy_crafts","education","film_music_books","fitness","food_drink","funny","games","geek","home","illustration","industrial_design","kids","men","modeling_hair","other","people","pets","photography","quotes","sports","tips","travel_places","web_app_icon","wedding_events"],d="' + escape((interp = filter[2]) == null ? "" : interp) + '",e=b+(~c.indexOf(d)?d:"default")+".jpg";a.setStyle("background-image","url("+e+")")}()</script>')
        }
        return buf.join("")
    }, __t["base/search_result"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var q = page.query,
                qt = escape(q.text),
                cate = escape(q.category),
                facets = page.facets,
                b = [],
                m = [
                    [page.pin_count, "pin", "采集", "/"],
                    [page.gift_count, "gift", "商品", "/gift/"],
                    [page.board_count, "board", "画板", "/boards/"],
                    [page.people_count, "people", "用户", "/people/"]
                ],
                search_form_style = page.words && page.words.length != 0 ? "short_form" : "long_form",
                type = q.type == "pin" || q.type == "board" ? q.type + "s" : q.type;
            buf.push("<div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "ctx_bar",
                "class": "board"
            })), buf.push("><div"), buf.push(attrs({
                "class": "search-group"
            })), buf.push("><form"), buf.push(attrs({
                id: "search_result_form",
                action: page.$url,
                "class": "search-item " + ("" + search_form_style + "")
            })), buf.push("><input"), buf.push(attrs({
                value: qt,
                name: "q",
                placeholder: "搜索你喜欢的",
                autocomplete: "off",
                "class": "clear-input"
            })), buf.push("/><a"), buf.push(attrs({
                onclick: "return false;",
                "class": "go"
            })), buf.push("></a></form>");
            if (page.words && page.words.length != 0) {
                buf.push("<ul"), buf.push(attrs({
                    "class": "recommend-word"
                })), buf.push("><li>相关搜索:");
                for (var i = 0, $$l = page.words.length; i < $$l; i++) {
                    var word = page.words[i];
                    buf.push("<li><a"), buf.push(attrs({
                        href: "/search/" + type + "/?q=" + encodeURIComponent(word) + "&rsclick=" + (i + 1) + "",
                        "class": "x"
                    })), buf.push(">");
                    var __val__ = word;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</a></li>")
                }
                buf.push("</li></ul>")
            }
            buf.push("<div"), buf.push(attrs({
                id: "search_switch",
                "class": "tabs"
            })), buf.push(">");
            for (var i = 0, $$l = m.length; i < $$l; i++) {
                var x = m[i];
                if (q.type == x[1]) {
                    buf.push("<a"), buf.push(attrs({
                        "class": "switch-" + x[1] + " tab active"
                    })), buf.push(">");
                    var __val__ = x[0] + " " + x[2];
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>")
                } else {
                    buf.push("<a"), buf.push(attrs({
                        href: "/search" + x[3] + "?q=" + qt,
                        "class": "switch-" + x[1] + " tab"
                    })), buf.push(">");
                    var __val__ = x[0] + " " + x[2];
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>")
                }
            }
            buf.push("</div></div>"), facets && (buf.push("<div"), buf.push(attrs({
                id: "search_filter"
            })), buf.push("><div"), buf.push(attrs({
                id: "search_more",
                "class": "search-more"
            })), buf.push("><i></i></div><ul></ul></div>")), buf.push("</div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            if (q.text.match(/(保时捷|porsche)/ig)) {
                var __val__ = emerge("base/porsche_item");
                buf.push(null == __val__ ? "" : __val__)
            }
            if (q.type == "pin")
                for (var $index = 0, $$l = page.pins.length; $index < $$l; $index++) {
                    var pin = page.pins[$index],
                        __val__ = emerge("base/pin_item", {
                            user: pin.user,
                            pin: pin,
                            board: pin.board
                        });
                    buf.push(null == __val__ ? "" : __val__)
                } else if (q.type == "board")
                    for (var $index = 0, $$l = page.boards.length; $index < $$l; $index++) {
                        var board = page.boards[$index],
                            __val__ = emerge("base/board_item", {
                                board: board,
                                user: req.user
                            });
                        buf.push(null == __val__ ? "" : __val__)
                    } else if (q.type == "people")
                        for (var $index = 0, $$l = page.users.length; $index < $$l; $index++) {
                            var user = page.users[$index],
                                __val__ = emerge("base/user_item", {
                                    user: user,
                                    current_user: this.req.user
                                });
                            buf.push(null == __val__ ? "" : __val__)
                        } else if (q.type == "gift")
                            for (var $index = 0, $$l = page.pins.length; $index < $$l; $index++) {
                                var pin = page.pins[$index],
                                    __val__ = emerge("base/pin_item", {
                                        user: pin.user,
                                        pin: pin,
                                        board: pin.board
                                    });
                                buf.push(null == __val__ ? "" : __val__)
                            }
                        buf.push('</div></div><script>(function(){app.initLikeButtons(),app.initAddCommentButtons(),app.initFollowButtons(),app.initFollowUserButtons(),app.initSearchForms("#search_result_form")})(),function(){if(app.page.facets){function a(a){if(!a)return null;var a=a.results,b=[],c={};app.settings.categories.forEach(function(a){c[a.id]=a});for(var d in a){var e=[d,a[d]];c[d]&&c[d].name&&(e.push(c[d].name),b.push(e))}return b.sort(function(a,b){return a[1]<b[1]}),b}app.page.facetResult=a(app.page.facets);var b=window.location.host,c=window.location.pathname,d="http://"+b+c+"?q="+app.page.query.text,e=\'<li><a id="all" href="\'+d+\'">全部<i>\'+app.page.facets.total+"</i></a></li>";app.page.facetResult.forEach(function(a){var d="http://"+b+c+"?q="+app.page.query.text+"&category="+a[0];e+=\'<li><a id="\'+a[0]+\'" href="\'+d+\'">\'+a[2]+"<i>"+a[1]+"</i></a></li>"}),document.getElement("#search_filter ul").innerHTML=e;function f(){var a=document.getElement("#search_filter .search-more"),b=document.getElement("#search_filter ul").getStyles("height").height.toInt()-13;b>31?(a.setStyle("display","block"),a.addEvent("click",function(){var c=document.getElement("#search_filter"),d=new Fx.Tween(c,{duration:400});if(this.get("id")==="search_more")d.start("height",b).chain(function(){a.erase("id").set("id","search_less")});else if(this.get("id")==="search_less"){var e=document.getElement("#search_filter #search_less"),c=document.getElement("#search_filter"),d=new Fx.Tween(c,{duration:400});d.start("height","25").chain(function(){a.erase("id").set("id","search_more")})}})):a.setStyle("display","none");var c=~window.location.href.indexOf("category");b>31&&c&&$("search_more").fireEvent("click")}window.addEvent("domready",function(){f()});var g;window.addEvent("resize",function(){window.clearTimeout(g),app.page.$url.match("/^/search/")&&(g=window.setTimeout(function(){f()},500))}),function(){function a(){var a={},b=window.location.search;return b.split("&").map(function(b){var c=b.split("=");a[c[0]]=c[1]}),a}var b=a(),c=b.category||"all";$(c).addClass("selected");if(c!=="all"){var d=document.getElement("#search_switch .selected a");if(!d)return!1;app.page.query.type==="pin"?d.set("text",app.page.facets.total+" 采集"):app.page.query.type==="board"&&d.set("text",app.page.facets.total+" 画板")}}()}}(),function(){if(Browser.ie&&Browser.version<=8)return;var a=function(){function r(a){return a*Math.random()}function s(){return document.createElement("canvas")}function t(){var a;for(var d=0;d<m;d++)a=d<m*.6?0:d<m*.8?1:d<m*.9?2:d<m*.98?3:4,o[d]=[r(b),r(c),a]}function u(){var a,d,e,f;p+=.01,d=Math.sin(p);for(a=0;a<m;a++){f=o[a],e=Math.sin(4*p+a),f[1]+=f[2]/2+(2+e),f[0]+=6*(d+e/2)/(10/f[2]),f[1]>c&&(f[1]=-n,f[0]=r(b));if(f[0]>b||f[0]<-n)d>0?f[0]=-n:f[0]=b;o[a]=f}}function v(){var a;k.fillStyle=l,k.clearRect(0,0,b,c),k.beginPath();for(a=0;a<m;a++)k.drawImage(i[o[a][2]],o[a][0],o[a][1]);k.fill(),u()}function w(a){b=window.innerWidth,c=window.innerHeight,j!==undefined&&(j.width=b,j.height=c,m=b*c/6e3,l=k.createLinearGradient(0,0,0,c),t())}function x(){window.addEvent("resize",a.resizeHandler,!1),j=document.createElement("canvas"),j.style.position="fixed",j.style.top="0px",j.style.left="0px",j.style.zIndex=5e3,j.style.pointerEvents="none",j.id="canvas_snow",document.body.appendChild(j),k=j.getContext("2d"),k.strokeStyle="none",d=s(),e=s(),f=s(),g=s(),h=s(),i=[d,e,f,g,h],y({canvas:d,width:n*.4,height:n*.4,color:"#FFF",soft:.05}),y({canvas:e,width:n*.5,height:n*.5,color:"#FFF",soft:.05}),y({canvas:f,width:n*.6,height:n*.6,color:"#FFF",soft:.3}),y({canvas:g,width:n*.8,height:n*.8,color:"#FFF",soft:.2}),y({canvas:h,width:n,height:n,color:"#FFF",soft:.05}),w(null),app.snowTimer=setInterval(function(){q(a.draw)},50)}function y(a){var b,c,d,e,f,g,h,i,j;d=a.width||30,e=a.height||30,f=d/2,g=e/2,i=a.color||"#FFF",h=a.soft||0,b=a.canvas,b.width=d,b.height=d,c=b.getContext("2d"),c.clearRect(0,0,d,e),j=c.createRadialGradient(f,g,0,f,g,f),j.addColorStop(0,i),j.addColorStop(.1,i),j.addColorStop(.85,z(i,h)),j.addColorStop(1,z(i,0)),c.fillStyle=j,c.fillRect(0,0,d,e)}function z(a,b){var c,d,e;return a=a.replace(/^s*#|s*$/g,""),a.length===3&&(a=a.replace(/([0-9a-fA-F])/g,"$1$1")),d=parseInt(a.substr(2,2),16),e=parseInt(a.substr(4,2),16),c=parseInt(a.substr(0,2),16),"rgba("+c+", "+d+", "+e+", "+b+")"}var b,c,d,e,f,g,h,i=[],j,k,l,m,n=20,o=[],p=0,q=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,62.5)}}();return{init:x,draw:v,resizeHandler:w}}();app.page.query.text.test(/(圣诞|元旦|新年|christmas|xmas|newyear)/i)&&(a.init(),Browser.ie&&setTimeout(function(){clearTimeout(app.snowTimer),$("canvas_snow").dispose()},4e3))}()</script>')
        }
        return buf.join("")
    }, __t["base/shiji_features_rss"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<h3>");
            var __val__ = feature.description;
            buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</h3>");
            for (var $index = 0, $$l = feature.feature_items.length; $index < $$l; $index++) {
                var item = feature.feature_items[$index];
                buf.push("<p"), buf.push(attrs({
                    style: "text-align: center;"
                })), buf.push(">");
                var link = item && item.data && item.data.link && item.data.link.link,
                    target = item && item.data && item.data.link && item.data.link.type || "_blank";
                link = item.pin ? "http://" + host + "/shiji/pins/" + item.pin.pin_id + "/" : link, target = item.pin ? "_blank" : target;
                var description = item && item.data && item.data.description || item && item.pin && item.pin.raw_text || "";
                buf.push("<a"), buf.push(attrs({
                    href: "" + link + "",
                    target: "" + target + "",
                    "class": "img"
                })), buf.push(">");
                if (item && item.pin && item.pin.file) {
                    var __val__ = img(item.pin.file, "sq490", {
                        alt: description
                    }, "sq490");
                    buf.push(null == __val__ ? "" : __val__)
                }
                buf.push("</a></p>");
                if (item.data && item.data.title) {
                    buf.push("<p"), buf.push(attrs({
                        style: "text-align: center;"
                    })), buf.push(">");
                    var __val__ = item.data.title;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</p>")
                }
                if (item.data && item.data.description) {
                    buf.push("<p"), buf.push(attrs({
                        style: "text-align: center;"
                    })), buf.push(">");
                    var __val__ = item.data.description;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</p>")
                }
                buf.push("<p"), buf.push(attrs({
                    style: "text-align: center;"
                })), buf.push(">售价:" + escape((interp = item.price) == null ? "" : interp) + "元</p>")
            }
        }
        return buf.join("")
    }, __t["base/people_likes"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "likes",
                body_tpl: "base/people_likes_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/board_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, promt = typeof promotion == "undefined" || !promotion ? null : promotion,
                _fbtn = typeof fbtn == "undefined" ? !0 : fbtn,
                seq = promt ? "" : board.seq,
                extraCssClass = promt ? "promotion" : "",
                is_private = board.is_private === 2 ? "default-board" : "";
            buf.push("<div"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                "data-seq": "" + seq + "",
                "class": "Board wfc " + ("" + extraCssClass + "" + is_private + "")
            })), buf.push(">"), user && board.user_id == user.user_id && board.is_private !== 2 && (buf.push("<div"), buf.push(attrs({
                "class": "draglay"
            })), buf.push("></div><div"), buf.push(attrs({
                title: "拖动改变排序",
                "class": "drag-icon"
            })), buf.push("></div>"));
            var board_url = "/boards/" + board.board_id + "/",
                target_url = promt ? promt.url || board_url : board_url,
                target = promt ? promt.new_tab ? "_blank" : "_self" : "_self",
                extra_css_class = promt ? "promotion-url" : "";
            buf.push("<a"), buf.push(attrs({
                href: "" + target_url + "",
                target: "" + target + "",
                "class": "link " + ("" + extra_css_class + "") + " " + "x"
            })), buf.push(">");
            if (board.pins.length || board.cover)
                if (board.cover) {
                    buf.push("<img"), buf.push(attrs({
                        src: imgURL(board.cover.file, "sq235"),
                        "class": "large"
                    })), buf.push("/>");
                    var Num = 0;
                    for (var i = 0; i < 4; i++) board.pins[i] && board.pins[i].pin_id !== board.cover.pin_id && Num < 3 && (Num++, buf.push("<img"), buf.push(attrs({
                        src: imgURL(board.pins[i].file, "sq75")
                    })), buf.push("/>"))
                } else {
                    buf.push("<img"), buf.push(attrs({
                        src: imgURL(board.pins[0].file, "sq235"),
                        "class": "large"
                    })), buf.push("/>");
                    for (var i = 1; i < 4; i++) board.pins[i] && (buf.push("<img"), buf.push(attrs({
                        src: imgURL(board.pins[i].file, "sq75")
                    })), buf.push("/>"))
                }
            buf.push("<div"), buf.push(attrs({
                "class": "shadows"
            })), buf.push("><div"), buf.push(attrs({
                "class": "large-shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "over " + (board.pins.length ? "" : "empty-board")
            })), buf.push(">"), board.is_private == 2 ? (buf.push("<h3>待归类采集"), board.pin_count > 500 && buf.push("<span>（采集数已达上限）</span>"), buf.push("</h3>")) : buf.push("<h3>" + escape((interp = board.title) == null ? "" : interp) + "</h3><h4>" + escape((interp = board.description) == null ? "" : interp) + "</h4>"), typeof pin != "undefined" && pin.index_in_board ? (buf.push("<div"), buf.push(attrs({
                "class": "pin-count"
            })), buf.push(">" + escape((interp = pin.index_in_board) == null ? "" : interp) + "/" + escape((interp = board.pin_count) == null ? "" : interp) + "</div>")) : board.pin_count && (buf.push("<div"), buf.push(attrs({
                "class": "pin-count"
            })), buf.push(">" + escape((interp = board.pin_count) == null ? "" : interp) + "</div>")), buf.push("</div>"), user && board.user_id === user.user_id && locals.show_cover_button && board.pins.length && (buf.push("<div"), buf.push(attrs({
                "class": "board-cover-edit"
            })), buf.push("><div"), buf.push(attrs({
                href: "#",
                "class": "btn btn12"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">设置封面</span></div></div>")), buf.push("</a>"), board.extra && board.extra.is_creation && (buf.push("<span"), buf.push(attrs({
                "class": "creation-mark"
            })), buf.push("></span>"));
            for (var $index = 0, $$l = board.pins.length; $index < $$l; $index++) {
                var pin = board.pins[$index];
                buf.push("<a"), buf.push(attrs({
                    href: "/pins/" + pin.pin_id + "",
                    title: "" + pin.raw_text + "",
                    "class": "hidden"
                })), buf.push("><img"), buf.push(attrs({
                    title: "" + pin.raw_text + "",
                    src: imgURL(pin.file, "sq75")
                })), buf.push("/></a>")
            }
            _fbtn && (user && board.user_id === user.user_id ? (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard"
            })), buf.push(">"), board.is_private !== 2 ? (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/edit/",
                "class": "btn btn14 wbtn"
            })), buf.push("><strong>编辑</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/edit/",
                onclick: "return false;",
                "class": "disabled btn btn14 wbtn"
            })), buf.push("><strong>编辑</strong><span></span></a>")), buf.push("</div>")) : board.user ? (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard2"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(board.user.urlname) + "/",
                title: escape(board.user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(board.user),
                "class": "BoardAvatar"
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "/" + board.user.urlname + "/",
                "class": "BoardUserUrl x"
            })), buf.push(">" + escape((interp = board.user.username) == null ? "" : interp) + "</a>"), board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "unfollow") + "" + " " + "btn" + " " + "wbtn"
            })), buf.push("><strong>已关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "follow") + "" + " " + "btn" + " " + "wbtn"
            })), buf.push("><strong>关注</strong><span></span></a>")), buf.push("</div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard"
            })), buf.push(">"), board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "unfollow") + "" + " " + "btn" + " " + "btn14" + " " + "wbtn"
            })), buf.push("><strong>取消关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "follow") + "" + " " + "btn" + " " + "btn14" + " " + "wbtn"
            })), buf.push("><strong>关注</strong><span></span></a>")), buf.push("</div>"))), promt && promt.show_icon && (buf.push("<div"), buf.push(attrs({
                "class": "promotion-icon"
            })), buf.push("></div>")), buf.push("</div>")
        }
        return buf.join("")
    }, __t["base/gift_features_rss"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<h3>");
            var __val__ = feature.description;
            buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</h3>");
            for (var $index = 0, $$l = feature.feature_items.length; $index < $$l; $index++) {
                var item = feature.feature_items[$index];
                buf.push("<p"), buf.push(attrs({
                    style: "text-align: center;"
                })), buf.push(">");
                var link = item && item.data && item.data.link && item.data.link.link,
                    target = item && item.data && item.data.link && item.data.link.type || "_blank";
                link = item.pin ? "http://" + host + "/pins/" + item.pin.pin_id + "/" : link, target = item.pin ? "_blank" : target;
                var description = item && item.data && item.data.description || item && item.pin && item.pin.raw_text || "";
                buf.push("<a"), buf.push(attrs({
                    href: "" + link + "",
                    target: "" + target + "",
                    "class": "img"
                })), buf.push(">");
                if (item && item.pin && item.pin.file) {
                    var __val__ = img(item.pin.file, "sq490", {
                        alt: description
                    }, "sq490");
                    buf.push(null == __val__ ? "" : __val__)
                }
                buf.push("</a></p>");
                if (item.data && item.data.title) {
                    buf.push("<p"), buf.push(attrs({
                        style: "text-align: center;"
                    })), buf.push(">");
                    var __val__ = item.data.title;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</p>")
                }
                if (item.data && item.data.description) {
                    buf.push("<p"), buf.push(attrs({
                        style: "text-align: center;"
                    })), buf.push(">");
                    var __val__ = item.data.description;
                    buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</p>")
                }
                buf.push("<p"), buf.push(attrs({
                    style: "text-align: center;"
                })), buf.push(">售价:" + escape((interp = item.price) == null ? "" : interp) + "元</p>")
            }
        }
        return buf.join("")
    }, __t["base/message_popup"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "message_popup",
                style: "display: none"
            })), buf.push("><div"), buf.push(attrs({
                "class": "bar"
            })), buf.push(">我的消息</div><div"), buf.push(attrs({
                "class": "box"
            })), buf.push("></div><a"), buf.push(attrs({
                href: "/message/",
                "class": "show-all"
            })), buf.push(">查看所有消息»</a><div"), buf.push(attrs({
                "class": "triangle"
            })), buf.push('></div></div><script>(function(){var a=new Class({initialize:function(a,b){this.mainEl=a,this.triggerButton=b,this.indicator=b.getElement(".num"),this.box=a.getElement(".box");var c=this;stopWindowScroll(this.box),b.addEvent("click",function(){c.open(),c.load()}),app.view.addEvent("click",function(a){a.target.match("#menu_bar .message-nav *")||c.close()}),this.updateIndicator(app.req.unread_messages||0)},fetch:function(){if(this.fetching)return;this.fetching=!0,(new Request.JSON({url:"/message/unreads/",noCache:!0,onSuccess:function(a){if(a.err)return;this.updateIndicator(a)}.bind(this),onComplete:function(){this.fetching=!1}.bind(this)})).get()},updateIndicator:function(a){this.indicator.innerHTML=a,a<=0?this.indicator.addClass("hidden"):this.indicator.removeClass("hidden")},load:function(){var a=this,b="";if(this.box.hasClass("loading-box"))return;this.box.addClass("loading-box"),this.box.empty(),(new Request.JSON({url:"/message/",data:{per_page:20,page:1},onSuccess:function(c){c.messages.length?(c.messages.each(function(a){b+=app.renderSync("base/message_popup_item",{message:a})}),Elements.from(b).inject(a.box)):(new Element("div.empty",{html:"没有消息"})).inject(a.box),a.updateIndicator(0),app.req.unread_messages=0,a.box.removeClass("loading-box")}})).get()},open:function(){this.mainEl.show()},close:function(){this.mainEl.hide(),this.box.removeClass("loading-box")}});if(!app.page.messageController){var b=document.id("message_popup"),c=document.getElement("#menu_bar .message-nav .nav-link");app.page.messageController=new a(b,c)}})()</script>')
        }
        return buf.join("")
    }, __t["base/people_boards"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var __val__ = emerge("base/people_layout", {
                req: req,
                user: page.user,
                ctx: "boards",
                body_tpl: "base/people_boards_body",
                page: page
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["base/board_item_ent"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, promt = typeof promotion == "undefined" || !promotion ? null : promotion,
                _fbtn = typeof fbtn == "undefined" ? !0 : fbtn,
                seq = promt ? "" : board.seq,
                user = req.user,
                is_invite_board = typeof invite == "undefined" || !invite ? "" : "is_invite",
                md = "?md=ent";
            this.page.$url.indexOf("life") != -1 && (md = "?md=life"), buf.push("<div"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                "data-seq": "" + seq + "",
                "class": "Board wfc " + ("" + is_invite_board + "")
            })), buf.push("><div"), buf.push(attrs({
                "class": "actions"
            })), buf.push("><div"), buf.push(attrs({
                "class": "right"
            })), buf.push(">"), req.user && board.user_id === req.user.user_id ? (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/edit/",
                "class": "edit btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">编辑</span></a>")) : board.liked ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "unlike-board btn btn14 wbtn"
            })), buf.push("><strong><em></em> " + escape((interp = board.like_count) == null ? "" : interp) + "喜欢</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "like-board btn btn14 wbtn"
            })), buf.push("><strong><em></em> " + escape((interp = board.like_count ? board.like_count : "") == null ? "" : interp) + "喜欢</strong><span></span></a>")), buf.push("</div></div>");
            var board_url = "/boards/" + board.board_id + "/",
                target_url = promt ? promt.promotion_url || board_url : board_url,
                extra_css_class = promt ? "promotion-url" : "";
            buf.push("<a"), buf.push(attrs({
                href: "" + target_url + "" + md + "",
                "class": "link " + ("" + extra_css_class + "")
            })), buf.push(">"), board.cover ? (buf.push("<img"), buf.push(attrs({
                src: imgURL(board.cover.file, "sq235"),
                "class": "large"
            })), buf.push("/>")) : board.pins.length && (buf.push("<img"), buf.push(attrs({
                src: imgURL(board.pins[0].file, "sq235"),
                "class": "large"
            })), buf.push("/>"));
            if (board.pins.length) {
                for (var i = 1; i < 4; i++) board.pins[i] && (buf.push("<img"), buf.push(attrs({
                    src: imgURL(board.pins[i].file, "sq75")
                })), buf.push("/>"));
                is_invite_board && (buf.push("<div"), buf.push(attrs({
                    "class": "recommend-icon"
                })), buf.push("><img"), buf.push(attrs({
                    src: "/img/find/star.png"
                })), buf.push("/></div>"))
            }
            buf.push("<div"), buf.push(attrs({
                "class": "shadows"
            })), buf.push("><div"), buf.push(attrs({
                "class": "large-shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "shadow"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "over " + (board.pins.length ? "" : "empty-board")
            })), buf.push(">"), board.is_private == 2 ? (buf.push("<h3>待归类采集"), board.pin_count > 500 && buf.push("<span>（采集数已达上限）</span>"), buf.push("</h3>")) : (buf.push("<h3"), buf.push(attrs({
                title: "" + board.title + ""
            })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</h3><h4>" + escape((interp = board.description) == null ? "" : interp) + "</h4>")), typeof pin != "undefined" && pin.index_in_board ? (buf.push("<div"), buf.push(attrs({
                "class": "pin-count"
            })), buf.push(">" + escape((interp = pin.index_in_board) == null ? "" : interp) + "/" + escape((interp = board.pin_count) == null ? "" : interp) + "</div>")) : board.pin_count && (buf.push("<div"), buf.push(attrs({
                "class": "pin-count"
            })), buf.push(">" + escape((interp = board.pin_count) == null ? "" : interp) + "</div>")), buf.push("</div>"), user && board.user_id === user.user_id && locals.show_cover_button && board.pins.length && (buf.push("<div"), buf.push(attrs({
                "class": "board-cover-edit"
            })), buf.push("><div"), buf.push(attrs({
                href: "#",
                "class": "btn btn12"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">设置封面</span></div></div>")), buf.push("</a>");
            for (var $index = 0, $$l = board.pins.length; $index < $$l; $index++) {
                var pin = board.pins[$index];
                buf.push("<a"), buf.push(attrs({
                    href: "/pins/" + pin.pin_id + "" + md + "",
                    title: "" + pin.raw_text + "",
                    "class": "hidden"
                })), buf.push("><img"), buf.push(attrs({
                    title: "" + pin.raw_text + "",
                    src: imgURL(pin.file, "sq75")
                })), buf.push("/></a>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "follow-like-count"
            })), buf.push("><div"), buf.push(attrs({
                title: "" + board.follow_count + "关注",
                "class": "follow-icon"
            })), buf.push("><span"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = board.follow_count) == null ? "" : interp) + "</span></div><div"), buf.push(attrs({
                title: "" + board.like_count + "喜欢",
                "class": "like-icon"
            })), buf.push("><span"), buf.push(attrs({
                "class": "icon"
            })), buf.push("></span><span"), buf.push(attrs({
                "class": "num"
            })), buf.push(">" + escape((interp = board.like_count) == null ? "" : interp) + "</span></div></div>"), _fbtn && (user && board.user.user_id === user.user_id ? (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard"
            })), buf.push(">"), board.is_private == 0 ? (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/edit/" + md + "",
                "class": "btn btn14 wbtn"
            })), buf.push("><strong>编辑</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/edit/" + md + "",
                onclick: "return false;",
                "class": "disabled btn btn14 wbtn"
            })), buf.push("><strong>编辑</strong><span></span></a>")), buf.push("</div>")) : board.user ? (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard2"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + escape(board.user.urlname) + "/",
                title: escape(board.user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(board.user),
                "class": "BoardAvatar"
            })), buf.push("/></a>"), is_invite_board ? (buf.push("<a"), buf.push(attrs({
                href: "/" + board.user.urlname + "/" + md + "",
                "class": "BoardUserUrl InviteUsername"
            })), buf.push(">" + escape((interp = board.user.username) == null ? "" : interp) + "</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/" + board.user.urlname + "/" + md + "",
                "class": "BoardUserUrl"
            })), buf.push(">" + escape((interp = board.user.username) == null ? "" : interp) + "</a>")), board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "unfollow") + "" + " " + "btn" + " " + "wbtn"
            })), buf.push("><strong>已关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "follow") + "" + " " + "btn" + " " + "wbtn"
            })), buf.push("><strong>关注</strong><span></span></a>")), buf.push("</div>")) : (buf.push("<div"), buf.push(attrs({
                "class": "FollowBoard"
            })), buf.push(">"), board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "unfollow") + "" + " " + "btn" + " " + "btn14" + " " + "wbtn"
            })), buf.push("><strong>取消关注</strong><span></span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "" + (board.is_private == 2 ? "disabled" : "follow") + "" + " " + "btn" + " " + "btn14" + " " + "wbtn"
            })), buf.push("><strong>关注</strong><span></span></a>")), buf.push("</div>"))), promt && promt.show_icon && (buf.push("<div"), buf.push(attrs({
                "class": "promotion-icon"
            })), buf.push("></div>")), buf.push("<div"), buf.push(attrs({
                "class": "actions"
            })), buf.push("><a"), buf.push(attrs({
                data: "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                style: "display:none;",
                "class": "hide_el like-board btn wbtn"
            })), buf.push("><strong><em></em>喜欢</strong><span></span></a></div></div>")
        }
        return buf.join("")
    }, __t["base/pin_view_board_pin_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, _long = imgSize(board_pin.file, "fw78").h > 150;
            buf.push("<a"), buf.push(attrs({
                href: "/pins/" + board_pin.pin_id + "/",
                "data-id": board_pin.pin_id,
                "data-seq": board_pin.pin_id,
                "class": "cell x layer-view " + ("" + (_long ? "long" : "") + " " + (board_pin.selected ? "selected" : "") + "")
            })), buf.push(">");
            var __val__ = img(board_pin.file, "fw78");
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                "class": "cover"
            })), buf.push("></div>"), _long && (buf.push("<div"), buf.push(attrs({
                "class": "stop"
            })), buf.push("></div>")), buf.push("</a>")
        }
        return buf.join("")
    }, __t["base/search_hint"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (result && result.length) {
                buf.push("<ul>");
                for (var $index = 0, $$l = result.length; $index < $$l; $index++) {
                    var keyword = result[$index];
                    buf.push("<li>" + escape((interp = keyword) == null ? "" : interp) + "</li>")
                }
                buf.push("</ul>")
            }
        }
        return buf.join("")
    }, __t["base/visit"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (visits && visits.length > 0) {
                var current_page = Math.floor(Math.random() * promotions.length + 1),
                    promotion = promotions[current_page - 1],
                    image_url = "",
                    target = promotion.new_tab ? "_blank" : "_self";
                promotion.image && promotion.image.bucket && promotion.image.key && (image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key), buf.push("<div"), buf.push(attrs({
                    "class": "image-promotions"
                })), buf.push("><a"), buf.push(attrs({
                    href: "" + promotion.url + "",
                    target: "" + target + ""
                })), buf.push("><img"), buf.push(attrs({
                    src: "" + image_url + "",
                    alt: !0,
                    width: "204",
                    height: "330",
                    "class": "promotion"
                })), buf.push("/></a>");
                if (promotions.length > 1) {
                    buf.push("<ul"), buf.push(attrs({
                        "class": "pager"
                    })), buf.push(">");
                    for (var i = 1, l = promotions.length; i <= l; i++) {
                        var promotion = promotions[i - 1],
                            image_url = "",
                            target = promotion.new_tab ? "_blank" : "_self";
                        promotion.image && (image_url = "http://" + this.settings.hbfile[promotion.image.bucket] + "/img/promotion/" + promotion.image.key);
                        var li_class = "";
                        i == current_page && (li_class = "current"), buf.push("<li"), buf.push(attrs({
                            "data-url": "" + promotion.url + "",
                            "data-target": "" + target + "",
                            "data-image": "" + image_url + "",
                            "class": "" + li_class + ""
                        })), buf.push(">●</li>")
                    }
                    buf.push("</ul>")
                }
                buf.push("</div>")
            }
            buf.push('<script>(function(){var a=$$(".image-promotions ul.pager li");a.length>0&&a.addEvent("click",function(){if(this.hasClass("current"))return;var a=$$(".image-promotions ul.pager li.current")[0],b=$$(".image-promotions a")[0],c=$$(".image-promotions img.promotion")[0];a.removeClass("current"),b.set("href",this.get("data-url")),b.set("target",this.get("data-target")),c.set("src",this.get("data-image")),this.addClass("current")})})()</script>')
        }
        return buf.join("")
    }, __t["base/custom_login_popout"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<link"), buf.push(attrs({
                rel: "stylesheet",
                href: "/css/login_popout.css",
                href: "/css/login_popout.css?1400726471.css"
            })), buf.push("/><div"), buf.push(attrs({
                id: "renren_zhan"
            })), buf.push("><div"), buf.push(attrs({
                id: "login_pop_renren",
                "class": "pop_login"
            })), buf.push("><div"), buf.push(attrs({
                "class": "info"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "",
                "class": "close"
            })), buf.push("><strong>Close</strong></a><p"), buf.push(attrs({
                id: "pop_title"
            })), buf.push(">花瓣网，一个好玩的图片兴趣社交网络</p><p"), buf.push(attrs({
                id: "pop_text"
            })), buf.push(">这里有数亿张由用户分享的图片，性感美女、爆笑贴图、饕餮美食、古镇风光、艺术设计、萌宠美图，快来找你所爱。</p><p"), buf.push(attrs({
                id: "login_text"
            })), buf.push(">使用合作帐号登录：</p><div"), buf.push(attrs({
                "class": "login_icon"
            })), buf.push("><a"), buf.push(attrs({
                id: "icon-renren",
                href: "/oauth/renren/reg_tip_login/"
            })), buf.push(">人人帐号登录</a><span"), buf.push(attrs({
                id: "icon-other"
            })), buf.push("><i>其他：</i><a"), buf.push(attrs({
                id: "pop_icon-weibo",
                href: "/oauth/weibo/reg_tip_login/"
            })), buf.push(">weibo</a><a"), buf.push(attrs({
                id: "pop_icon-qq",
                href: "/oauth/qzone/reg_tip_login/"
            })), buf.push(">qq</a><a"), buf.push(attrs({
                id: "pop_icon-douban",
                href: "/oauth/douban/reg_tip_login/"
            })), buf.push(">douban</a></span></div></div><div"), buf.push(attrs({
                id: "pop_mv",
                href: "#",
                onclick: "app.showDialog('mv');return false;"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "overlayer"
            })), buf.push('></div></div><script>window.addEvent("domready",function(){$$(".login_icon a").addEvent("click",function(a){a.stop();var b=window.open(this.get("href"),"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()});var a=function(){var a=$("login_pop_renren");Browser.ie?a.tween("margin-top",-1e3):a.addClass("animate_item")},b=function(){var a=document.getElement(".overlayer"),b=new Fx.Tween(a,{duration:500,property:"opacity"});b.start(0).chain(function(){a.setStyle("display","none")})},c=function(){if(!~window.location.pathname.indexOf("/shiji/")){var a=$("unauth_callout");a.tween("margin-top",0)}};$$(".close").addEvent("click",function(){return a(),b(),c(),!1})})</script>')
        }
        return buf.join("")
    }, __t["base/person_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "data-seq": user.seq,
                "class": "person-item"
            })), buf.push("><div"), buf.push(attrs({
                "class": "mask"
            })), buf.push("></div><a"), buf.push(attrs({
                href: "/" + escape(user.urlname) + "/",
                title: escape(user.username),
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(user, "sq120sf"),
                "class": "avt"
            })), buf.push("/></a><a"), buf.push(attrs({
                href: "/" + user.urlname + "",
                "class": "username"
            })), buf.push(">" + escape((interp = user.username) == null ? "" : interp) + ""), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("</a>");
            if (typeof bindtype != "undefined") {
                var bindship = user[bindtype],
                    urlname = bindship.user_info && (bindship.user_info.urlname || "u/" + bindship.user_info.id) || "";
                bindtype == "weibo" ? (buf.push("<a"), buf.push(attrs({
                    href: "http://weibo.com/" + urlname + "/",
                    target: "_blank",
                    "class": "bindship"
                })), buf.push("><i"), buf.push(attrs({
                    "class": "weibo"
                })), buf.push("></i>" + escape((interp = bindship.user_info.username) == null ? "" : interp) + "</a>")) : bindtype == "douan" ? (buf.push("<a"), buf.push(attrs({
                    href: "http://www.douban.com/people/" + urlname + "/",
                    target: "_blank",
                    "class": "bindship"
                })), buf.push("><i"), buf.push(attrs({
                    "class": "douban"
                })), buf.push("></i>" + escape((interp = bindship.user_info.username) == null ? "" : interp) + "</a>")) : bindtype == "renren" ? (buf.push("<a"), buf.push(attrs({
                    href: "http://www.renren.com/profile.do?id=" + bindship.user_info.id + "",
                    target: "_blank",
                    "class": "bindship"
                })), buf.push("><i"), buf.push(attrs({
                    "class": "renren"
                })), buf.push("></i>" + escape((interp = bindship.user_info.username) == null ? "" : interp) + "</a>")) : bindtype == "tqq" && (buf.push("<a"), buf.push(attrs({
                    href: "http://t.qq.com/" + urlname + "",
                    target: "_blank",
                    "class": "bindship"
                })), buf.push("><i"), buf.push(attrs({
                    "class": "tqq"
                })), buf.push("></i>" + escape((interp = bindship.user_info.username) == null ? "" : interp) + "</a>"))
            }
            if (locals.pins) {
                buf.push("<div"), buf.push(attrs({
                    "class": "pins"
                })), buf.push(">");
                for (var i = 0, $$l = pins.length; i < $$l; i++) {
                    var pin = pins[i];
                    if (i < 3) {
                        buf.push("<a"), buf.push(attrs({
                            href: "/pins/" + pin.pin_id + "",
                            "class": "img x"
                        })), buf.push(">");
                        var __val__ = img(pin.file, "sq75");
                        buf.push(null == __val__ ? "" : __val__), buf.push("</a>")
                    }
                }
                buf.push("</div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "btn-bar"
            })), buf.push(">");
            if (!req.user || req.user.user_id !== user.user_id) user.following ? (buf.push("<a"), buf.push(attrs({
                "data-urlname": user.urlname,
                href: "#",
                onclick: "return false;",
                "class": "item-followuser item-unfollowuser " + (user.following_me ? "following-me" : "") + " " + "btn"
            })), buf.push("><i></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消关注</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-urlname": user.urlname,
                href: "#",
                onclick: "return false;",
                "class": "item-followuser " + (user.following_me ? "following-me" : "") + " " + "btn"
            })), buf.push("><i></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 关注</span></a>"));
            buf.push("</div></div>")
        }
        return buf.join("")
    }, __t["base/hotkeys"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><h2>热键提示</h2><table"), buf.push(attrs({
                "class": "ln1"
            })), buf.push("><tbody><tr"), buf.push(attrs({
                "class": "title"
            })), buf.push("><td>全局</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">?</div></td><td>查看热键提示</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">Esc</div></td><td>取消焦点 / 退出</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">/</div></td><td>搜索</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">N</div></td><td>添加...</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">M</div></td><td>私信</td></tr><tr"), buf.push(attrs({
                "class": "title"
            })), buf.push("><td>瀑布流</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">.</div></td><td>显示新采集</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">J</div></td><td>向下滚动</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">K</div></td><td>向上滚动</td></tr></tbody></table><table"), buf.push(attrs({
                "class": "ln2"
            })), buf.push("><thead><tr"), buf.push(attrs({
                "class": "title"
            })), buf.push("><td>采集页</td></tr></thead><tbody><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">←</div></td><td>上一采集</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">➝</div></td><td>下一采集</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">F</div></td><td>查看大图  /  返回</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">O</div></td><td>打开来源网址</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">D</div></td><td>删除采集</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">R</div></td><td>转采</td></tr><tr><td><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">G</div><span"), buf.push(attrs({
                "class": "plus"
            })), buf.push("></span><div"), buf.push(attrs({
                "class": "hotkey"
            })), buf.push(">S</div></td><td>使用 Google 搜索</td></tr></tbody></table></div>")
        }
        return buf.join("")
    }, __t["base/board_view"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, __val__ = emerge("base/header");
            buf.push(null == __val__ ? "" : __val__);
            var board = page.board,
                user = board.user,
                user_url = "/" + user.urlname,
                board_url = "/boards/" + board.board_id,
                is_followers_page = !! page.followers;
            if (!board.is_private && req.user && !board.category_id) {
                buf.push("<div"), buf.push(attrs({
                    id: "category_callout"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "wrapper"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "callout sheet"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "form clearfix"
                })), buf.push("><p>为这个画板添加个分类，让其他人更容易找到它。</p><div"), buf.push(attrs({
                    "class": "picker"
                })), buf.push(">");
                var __val__ = emerge("base/category_picker");
                buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({
                    "class": "Submit"
                })), buf.push("><a"), buf.push(attrs({
                    href: "#",
                    onclick: "return false;",
                    "class": "btn btn18 rbtn"
                })), buf.push("><span"), buf.push(attrs({
                    "class": "text"
                })), buf.push("> 提交</span></a></div></div><div"), buf.push(attrs({
                    "class": "clear"
                })), buf.push("></div></div></div></div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "wrapper"
            })), buf.push("><div"), buf.push(attrs({
                id: "board_card"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push("><div"), buf.push(attrs({
                "class": "head-line"
            })), buf.push("><div"), buf.push(attrs({
                "class": "board-name"
            })), buf.push(">" + escape((interp = board.is_private == 2 ? "待归类采集" : board.title) == null ? "" : interp) + "</div>"), board.is_private == 2 && board.pin_count > 500 && (buf.push("<div"), buf.push(attrs({
                "class": "board-status"
            })), buf.push(">待归类采集数已达500上限</div>")), board.category_id != null && (buf.push("<div"), buf.push(attrs({
                "class": "board-category"
            })), buf.push("><span>所属分类：</span>"), ~ ["design", "web_app_icon", "illustration"].indexOf(board.category_id) ? (buf.push("<a"), buf.push(attrs({
                href: "/cc/" + board.category_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = board.category_name) == null ? "" : interp) + "</a>")) : board.category_id == "beauty" ? (buf.push("<a"), buf.push(attrs({
                href: "/favorite/" + board.category_id + "/",
                "class": "brown-link"
            })), buf.push(">" + escape((interp = board.category_name) == null ? "" : interp) + "</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/favorite/" + board.category_id + "/",
                "class": "brown-link x"
            })), buf.push(">" + escape((interp = board.category_name) == null ? "" : interp) + "</a>")), buf.push("</div>")), buf.push("</div>");
            if (board.description) {
                buf.push("<div"), buf.push(attrs({
                    "class": "board-description"
                })), buf.push(">");
                var __val__ = board.description.nl2br();
                buf.push(null == __val__ ? "" : __val__), buf.push("</div>")
            }
            buf.push("<div"), buf.push(attrs({
                "class": "action-buttons"
            })), buf.push(">"), req.user && board.user_id === req.user.user_id ? (board.is_private != 2 && (buf.push("<a"), buf.push(attrs({
                href: "" + board_url + "/edit/",
                "class": "edit btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">编辑画板</span></a>")), board.pins && board.pins.length && (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "organize btn btn14"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 批量管理采集</span></a>"))) : board.is_private != 2 && (board.following ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-board " + ("" + (board.is_private == 2 ? "disabled" : "unfollow") + "") + " " + "btn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 取消关注此画板</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "follow-board " + ("" + (board.is_private == 2 ? "disabled" : "") + "") + " " + "btn" + " " + "rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 关注此画板</span></a>")), board.is_private != 2 && (board.liked ? (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "unlike-board btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">" + escape((interp = board.like_count) == null ? "" : interp) + "喜欢</span></a>")) : (buf.push("<a"), buf.push(attrs({
                "data-id": "" + board.board_id + "",
                href: "#",
                onclick: "return false;",
                "class": "like-board btn-with-icon btn"
            })), buf.push("><i"), buf.push(attrs({
                "class": !0
            })), buf.push("></i><span"), buf.push(attrs({
                "class": "text"
            })), buf.push(">" + escape((interp = board.like_count ? board.like_count : "") == null ? "" : interp) + "喜欢</span></a>")))), board.is_private != 1 && (buf.push("<div"), buf.push(attrs({
                "class": "huaban-share-unit"
            })), buf.push("><span>分享</span><div"), buf.push(attrs({
                "class": "share-btns"
            })), buf.push("><a"), buf.push(attrs({
                "data-to": "weibo",
                title: "新浪微博",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=weibo",
                "class": "share-btn weibo"
            })), buf.push("></a><a"), buf.push(attrs({
                "data-to": "qzone",
                title: "QQ空间",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=qzone",
                "class": "share-btn qzone"
            })), buf.push("></a><a"), buf.push(attrs({
                "data-to": "weixin",
                title: "微信",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=weixin",
                "class": "share-btn weixin"
            })), buf.push("></a><div"), buf.push(attrs({
                "class": "more"
            })), buf.push("></div></div><div"), buf.push(attrs({
                "class": "menu"
            })), buf.push("><a"), buf.push(attrs({
                "data-to": "tqq",
                title: "腾讯微博",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=tqq",
                "class": "tqq"
            })), buf.push("><i></i>腾讯微博</a><a"), buf.push(attrs({
                "data-to": "qfriends",
                title: "QQ好友",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=qfriends",
                "class": "qq"
            })), buf.push("><i></i>QQ 好友</a><a"), buf.push(attrs({
                "data-to": "douban",
                title: "豆瓣",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=douban",
                "class": "douban"
            })), buf.push("><i></i>豆瓣</a><a"), buf.push(attrs({
                "data-to": "renren",
                title: "人人网",
                target: "_blank",
                href: "/boards/" + board.board_id + "/js-share/?to=renren",
                "class": "renren"
            })), buf.push("><i></i>人人网</a><div"), buf.push(attrs({
                "class": "arr"
            })), buf.push("></div></div></div>")), buf.push("</div></div><div"), buf.push(attrs({
                "class": "bar"
            })), buf.push("><a"), buf.push(attrs({
                href: "/" + board.user.urlname + "/",
                "class": "user-unit x"
            })), buf.push("><img"), buf.push(attrs({
                src: avatar(board.user)
            })), buf.push("/><span"), buf.push(attrs({
                "class": "name"
            })), buf.push(">" + escape((interp = board.user.username) == null ? "" : interp) + "</span>"), isVerified(page.user) && (buf.push("<img"), buf.push(attrs({
                src: "/img/icon_v.png",
                "class": "v-icon"
            })), buf.push("/>")), buf.push("</a><div"), buf.push(attrs({
                "class": "tabs"
            })), buf.push(">"), board.pin_count ? (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/",
                "class": "tab pins " + (is_followers_page ? "" : "active")
            })), buf.push(">" + escape((interp = board.pin_count) == null ? "" : interp) + "采集</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/",
                rel: "nofollow",
                "class": "tab pins " + (is_followers_page ? "" : "active")
            })), buf.push(">" + escape((interp = board.pin_count) == null ? "" : interp) + "采集</a>")), board.follow_count ? (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/followers/",
                "class": "tab " + (is_followers_page ? "active" : "")
            })), buf.push(">被" + escape((interp = board.follow_count) == null ? "" : interp) + "人关注</a>")) : (buf.push("<a"), buf.push(attrs({
                href: "/boards/" + board.board_id + "/followers/",
                rel: "nofollow",
                "class": "tab " + (is_followers_page ? "active" : "")
            })), buf.push(">被" + escape((interp = board.follow_count) == null ? "" : interp) + "人关注</a>")), buf.push("</div></div></div><div"), buf.push(attrs({
                id: "waterfall"
            })), buf.push(">");
            if (is_followers_page) {
                for (var $index = 0, $$l = page.followers.length; $index < $$l; $index++) {
                    var follower = page.followers[$index],
                        __val__ = emerge("base/person_item", {
                            user: follower,
                            pins: follower.pins,
                            req: req
                        });
                    buf.push(null == __val__ ? "" : __val__)
                }
                buf.push('<script>(function(){app.initPureFollowUserButtons({buttonSelector:".item-followuser",unfollowButtonClass:"item-unfollowuser"})})()</script>')
            } else if (board.pins) {
                req.user && req.user.user_id == board.user.user_id && board.is_private != 2 && (buf.push("<div"), buf.push(attrs({
                    onclick: "app.showUploadDialog();",
                    "class": "add-pin wfc"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "inner"
                })), buf.push("><i></i><span>添加采集</span></div></div>"));
                for (var $index = 0, $$l = board.pins.length; $index < $$l; $index++) {
                    var pin = board.pins[$index],
                        __val__ = emerge("base/pin_item", {
                            user: user,
                            pin: pin,
                            board: board,
                            hide_user: !0
                        });
                    buf.push(null == __val__ ? "" : __val__)
                }
                buf.push('<script>(function(){app.initLikeButtons(),app.initAddCommentButtons();var a=document.getElement("#board_card .organize");a&&app.pinOrganizer(a)})()</script>')
            }
            buf.push("</div>"), board.pins && board.pins.length && board.user_id !== (req.user && req.user.user_id) && (buf.push("<div"), buf.push(attrs({
                id: "board_sns_overlay"
            })), buf.push("><div"), buf.push(attrs({
                "class": "content"
            })), buf.push("><span"), buf.push(attrs({
                "class": "words"
            })), buf.push(">这个画板不错吧？赶紧分享给小伙伴！</span><span>分享到：</span><a"), buf.push(attrs({
                href: "js-share/?to=weibo",
                target: "_blank",
                "class": "sns-icon weibo"
            })), buf.push(">新浪微博</a><a"), buf.push(attrs({
                href: "js-share/?to=qzone",
                target: "_blank",
                "class": "sns-icon qqzone"
            })), buf.push(">QQ空间</a></div><div"), buf.push(attrs({
                "class": "close"
            })), buf.push("></div></div>")), buf.push('</div><script>(function(){try{ga("set","dimension5",app.page.board.category_id||""),_paq.push(["setCustomVariable",5,"Board Category",app.page.board.category_id||"","page"])}catch(a){}app.initPureFollowBoardButtons({onFollowSuccess:function(a){a.removeClass("rbtn"),a.getElement(".text").innerHTML="取消关注此画板"},onUnfollowSuccess:function(a){a.addClass("rbtn"),a.getElement(".text").innerHTML="关注此画板"}}),function(){var b=document.getElement("#board_card .action-buttons");if(!b||b.retrieve("initialized"))return;b.addEvent("click:relay(a.like-board,a.unlike-board)",function(){var a=this;app.requireLogin(function(){var b=a.get("text"),c=b.toInt();c=isNaN(c)?0:c;var d=(new Button(a)).disable();a.hasClass("like-board")?(new Request.JSON({url:"/boards/"+app.page.board.board_id+"/like/",onSuccess:function(b){if(b.err)app.error(b.msg||app.COMMON_ERRMSG);else{a.addClass("unlike-board").removeClass("like-board"),c++,d.setTitle(c+"喜欢");function e(a){document.body.removeEvent("mouseup",e)}document.body.addEvent("mouseup",e)}},onComplete:function(){d.enable()}})).post():a.hasClass("unlike-board")&&(new Request.JSON({url:"/boards/"+app.page.board.board_id+"/unlike/",onSuccess:function(b){if(b.err)app.error(b.msg||app.COMMON_ERRMSG);else{a.addClass("like-board").removeClass("unlike-board"),c--;var e=c>0?c+"喜欢":"喜欢";d.setTitle(e)}},onComplete:function(){d.enable()}})).post()})}),b.store("initialized",!0)}(),function(){function f(){b.slide("out").get("slide").chain(function(){b.hide()})}var b=$("category_callout");if(!b||b.retrieve("initialized"))return;var c=b.getElement(".Submit a"),d=b.getElement(".form"),e=new CategoryPicker(b.getElement("div.CategoryPicker")),g=new Button(c,{click:function(){var a=e.getSelected();return a?(this.disable(),(new Request.JSON({url:"/boards/"+app.page.board.board_id+"/",data:{category:a},onSuccess:function(a){a.err?alert(a.msg||app.COMMON_ERRMSG):(d.hide(),f(),app.msg("已成功设置分类，感谢你的支持。"))},onFailure:function(){alert(app.COMMON_ERRMSG)},onComplete:function(){this.enable()}.bind(this)})).post(),!1):!1}});g.disable(),e.addEvent("select",function(){this.getSelected()?g.enable():g.disable()}),b.store("initialized",!0)}(),function(){var a=document.getElement("#board_card .huaban-share-unit .more"),b=document.getElement("#board_card .huaban-share-unit .menu");new MenuController({menu:b,trigger:a})}()})(),function(){var a=document.id("board_sns_overlay");if(a){var b=!1;function c(e){var f=window.getSize().y;if(window.getScroll().y>f){if(b)return;b=!0,a.tween("height",[0,48]).get("tween").chain(function(){d(),app.view.removeEvent("mousewheel",c)})}}app.view.addEvent("mousewheel",c);function d(){function b(c){var d=window.getSize().y;window.getScroll().y>4*d&&a.getStyle("height").toInt()>0&&(a.tween("height",[48,0]),app.view.removeEvent("mousewheel",b))}app.view.addEvent("mousewheel",b)}a.addEvent("click:relay(.close)",function(b){return b.stop(),a.tween("height",[48,0]),!1})}}(),app._gaq_promotion&&app._gaq_promotion()</script>')
        }
        return buf.join("")
    }, __t["base/pin_view_zoom"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, pin = page.pin;
            buf.push("<div"), buf.push(attrs({
                id: "zoomr"
            })), buf.push("><div"), buf.push(attrs({
                id: "zoomr_toolbar"
            })), buf.push("><div"), buf.push(attrs({
                "class": "bg"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "fg"
            })), buf.push("><a"), buf.push(attrs({
                id: "zoomr_logo",
                href: "/"
            })), buf.push("><img"), buf.push(attrs({
                src: "/img/logo_grey.png",
                width: "98",
                height: "34",
                alt: "花瓣"
            })), buf.push("/></a><a"), buf.push(attrs({
                id: "zoomr_hide",
                href: "/pins/" + pin.pin_id + "/",
                title: "返回"
            })), buf.push(">返回</a></div></div><div"), buf.push(attrs({
                id: "zoomr_body"
            })), buf.push("><img"), buf.push(attrs({
                id: "zoomr_img",
                src: "" + imgURL(pin.file, suffix = "") + "",
                width: "" + pin.file.width + "",
                height: "" + pin.file.height + "",
                alt: "采集图片"
            })), buf.push("/></div></div>")
        }
        return buf.join("")
    }, __t["base/porsche_item"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                "class": "wfc porsche pin"
            })), buf.push("><a"), buf.push(attrs({
                style: "overflow: hidden;",
                href: "http://www.porsche.com/microsite/cayman/china.aspx?ws=1&pc=981CX_OWN_CHN_HP-Teaser",
                target: "_blank",
                onclick: "try{ga('send', 'event', 'Porsche Click', '" + page.filter + "', 'long');_paq.push(['trackEvent', 'Porsche Click', '" + page.filter + "', 'long']);}catch(e){}",
                "class": "img clearfix"
            })), buf.push("><img"), buf.push(attrs({
                src: "http://hbfile.b0.upaiyun.com/img/event/prosche/prosche_huaban_l.jpg",
                height: "5940"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "convo attribution clearfix"
            })), buf.push("><a"), buf.push(attrs({
                href: "/porsche/",
                title: "保时捷",
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: "http://img.hb.aicdn.com/35404c10347c621cfe7097b97b5ba78768989b131b7e-Hx8hVL_sq75",
                "class": "avt"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "text"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push(">来自&nbsp;<a"), buf.push(attrs({
                href: "/porsche/",
                "class": "author x"
            })), buf.push(">保时捷</a></div></div></div></div><div"), buf.push(attrs({
                style: "left:-1000px;",
                "class": "wfc porsche-sub pin"
            })), buf.push("><a"), buf.push(attrs({
                style: "overflow: hidden;",
                href: "http://www.porsche.com/microsite/cayman/china.aspx?ws=1&pc=981CX_OWN_CHN_HP-Teaser",
                target: "_blank",
                onclick: "try{ga('send', 'event', 'Porsche Click', '" + page.filter + "', 'short');_paq.push(['trackEvent', 'Porsche Click', '" + page.filter + "', 'short']);}catch(e){}",
                "class": "img"
            })), buf.push("><img"), buf.push(attrs({
                src: "http://hbfile.b0.upaiyun.com/img/event/prosche/prosche_huaban_r.jpg",
                height: "822"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "convo attribution clearfix"
            })), buf.push("><a"), buf.push(attrs({
                href: "/porsche/",
                title: "保时捷",
                "class": "img x"
            })), buf.push("><img"), buf.push(attrs({
                src: "http://img.hb.aicdn.com/35404c10347c621cfe7097b97b5ba78768989b131b7e-Hx8hVL_sq75",
                "class": "avt"
            })), buf.push("/></a><div"), buf.push(attrs({
                "class": "text"
            })), buf.push("><div"), buf.push(attrs({
                "class": "inner"
            })), buf.push(">来自&nbsp;<a"), buf.push(attrs({
                href: "/porsche/",
                "class": "author x"
            })), buf.push(">保时捷</a></div></div></div></div>")
        }
        return buf.join("")
    }, __t["base/feed_list"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<ol"), buf.push(attrs({
                "class": "activity"
            })), buf.push(">");
            for (var $index = 0, $$l = feeds.length; $index < $$l; $index++) {
                var f = feeds[$index],
                    u = user || f.user,
                    t = f.content.type,
                    p = f.pin,
                    b = f.board,
                    fu = f.follow_user,
                    tu = this.req.user ? this.req.user.user_id : -1,
                    ulink = '<a href="/' + u.urlname + '/">' + (tu === u.user_id ? "你" : u.username) + "</a>";
                if (t == "pin") {
                    buf.push("<li><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/",
                        "class": "img"
                    })), buf.push("><img"), buf.push(attrs({
                        src: imgURL(p.file, "sq75")
                    })), buf.push("/></a>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;采集&nbsp;<a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">");
                    var __val__ = p.raw_text.brief(20);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;到&nbsp;<a"), buf.push(attrs({
                        href: "/boards/" + p.board_id + "/"
                    })), buf.push(">");
                    var __val__ = p.board.is_private == 2 ? "待归类采集" : p.board.title.brief(18);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "repin") {
                    var vu = p.via_user,
                        vul = '<a href="/' + vu.urlname + '/">' + (tu === vu.user_id ? "你" : vu.username) + "</a>";
                    buf.push("<li><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/",
                        "class": "img"
                    })), buf.push("><img"), buf.push(attrs({
                        src: imgURL(p.file, "sq75")
                    })), buf.push("/></a>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;通过&nbsp;");
                    var __val__ = vul;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;转采了&nbsp;<a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">");
                    var __val__ = p.raw_text.brief(20);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;到&nbsp;<a"), buf.push(attrs({
                        href: "/boards/" + p.board_id + "/"
                    })), buf.push(">");
                    var __val__ = p.board.is_private == 2 ? "待归类采集" : p.board.title.brief(18);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "like") {
                    buf.push("<li><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/",
                        "class": "img"
                    })), buf.push("><img"), buf.push(attrs({
                        src: imgURL(p.file, "sq75")
                    })), buf.push("/></a>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;喜欢了由&nbsp;<a"), buf.push(attrs({
                        href: "/" + p.user.urlname + "/"
                    })), buf.push(">");
                    var __val__ = tu === p.user.user_id ? "你" : p.user.username;
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;采集的&nbsp;<a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">");
                    var __val__ = p.raw_text.brief(20);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "comment") {
                    buf.push("<li><a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/",
                        "class": "img"
                    })), buf.push("><img"), buf.push(attrs({
                        src: imgURL(p.file, "sq75")
                    })), buf.push("/></a>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;评论了由&nbsp;<a"), buf.push(attrs({
                        href: "/" + p.user.urlname + "/"
                    })), buf.push(">");
                    var __val__ = tu === p.user.user_id ? "你" : p.user.username;
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;采集的&nbsp;<a"), buf.push(attrs({
                        href: "/pins/" + p.pin_id + "/"
                    })), buf.push(">");
                    var __val__ = p.raw_text.brief(20);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "follow") {
                    buf.push("<li>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;关注了&nbsp;<a"), buf.push(attrs({
                        href: "/" + b.user.urlname + "/"
                    })), buf.push(">");
                    var __val__ = tu === b.user.user_id ? "你" : b.user.username;
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;的画板&nbsp;<a"), buf.push(attrs({
                        href: "/boards/" + b.board_id + "/"
                    })), buf.push(">");
                    var __val__ = b.is_private == 2 ? "待归类采集" : b.title.brief(18);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "follow_people") {
                    buf.push("<li>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;关注了&nbsp;<a"), buf.push(attrs({
                        href: "/" + fu.urlname + "/"
                    })), buf.push(">");
                    var __val__ = tu === fu.user_id ? "你" : fu.username;
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                } else if (t == "like_board") {
                    buf.push("<li>");
                    var __val__ = ulink;
                    buf.push(null == __val__ ? "" : __val__), buf.push("&nbsp;喜欢了&nbsp;<a"), buf.push(attrs({
                        href: "/" + b.user.urlname + "/"
                    })), buf.push(">");
                    var __val__ = tu === b.user.user_id ? "你" : b.user.username;
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a>&nbsp;的画板&nbsp;<a"), buf.push(attrs({
                        href: "/boards/" + b.board_id + "/"
                    })), buf.push(">");
                    var __val__ = b.is_private == 2 ? "待归类采集" : b.title.brief(18);
                    buf.push(null == __val__ ? "" : __val__), buf.push("</a></li>")
                }
            }
            buf.push("</ol>")
        }
        return buf.join("")
    }, __t["base/bookmarklet_multiple"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "bookmarklet_multiple"
            })), buf.push(">");
            var __val__ = emerge("base/board_list", {
                currentBoard: "default"
            });
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({
                style: "display: none",
                "class": "status-bar"
            })), buf.push("></div><div"), buf.push(attrs({
                "class": "pin-units clearfix"
            })), buf.push("><div"), buf.push(attrs({
                "class": "unit"
            })), buf.push("><img"), buf.push(attrs({})), buf.push("/><div"), buf.push(attrs({
                "class": "cancel"
            })), buf.push("></div><a"), buf.push(attrs({
                target: "_blank",
                "class": "indicator"
            })), buf.push("><i></i></a></div></div><div"), buf.push(attrs({
                "class": "bottom-part"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "go disabled btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({
                "class": "text"
            })), buf.push("> 采下来</span></a></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "info-part"
            })), buf.push("><span>采集成功</span><div"), buf.push(attrs({
                "class": "right"
            })), buf.push("><a"), buf.push(attrs({
                target: "_blank",
                "class": "go-board brown-link"
            })), buf.push(">查看画板</a><a"), buf.push(attrs({
                "class": "close-window brown-link"
            })), buf.push(">关闭窗口</a></div></div></div><div"), buf.push(attrs({
                id: "bookmarklet_multiple_alert",
                style: "display: none"
            })), buf.push(">你所使用的浏览器不支持批量采集所需的<a"), buf.push(attrs({
                href: "http://caniuse.com/#feat=x-doc-messaging",
                target: "_blank"
            })), buf.push(">特性</a><br"), buf.push(attrs({})), buf.push('/>请将 IE 浏览器升级至版本 10 以上，或者换用其它现代浏览器使用此功能</div><script>(function(){var a=document.id("bookmarklet_multiple"),b=a.getElement(".pin-units"),c=a.getElement(".unit").dispose(),d=a.getElement(".go"),e=a.getElement(".bottom-part"),f=a.getElement(".info-part"),g=f.getElement("span"),h=a.getElement(".close-window"),i=a.getElement(".go-board"),j=a.getElement(".board-list"),k=a.getElement(".status-bar"),l=document.id("bookmarklet_multiple_alert");if(Browser.ie&&Browser.version<10){l.show(),a.hide();return}var m=function(a){var d=c.clone().inject(b);d.setStyle("background-image","url("+a.imgUrl+")"),d.getElement("img").src=a.imgUrl,d.unit=a},n=new Request.Queue({stopOnFailure:!1,concurrent:2}),o=function(a){var b=a.unit,c=a.getElement("img");return new Request.JSON({url:"/pins/",method:"post",data:{timeout:3e3,board_id:b.toBoard,text:b.description,via:2,media_type:b.video?1:0,img_url:b.imgUrl,video:b.video||0,link:b.url,check:!0},onRequest:function(){u(a)},onComplete:function(d){var e=this;if(d.warning==100&&d.pin)v(a,d.pin.pin_id);else if(d.pin)w(a,d.pin.pin_id);else if(d.err&&d.msg&&~d.msg.indexOf("抓取")&&c.src.indexOf("data\\:image")==0){if(b.uploaded)return v(a);b.uploaded=!0,q(c,function(b){if(b.err)return v(a);e.options.data.file_id=b.id,delete e.options.data.file_ticket;var c=Math.floor(1e6*Math.random());n.addRequest(c,e).send(c)})}else v(a);p()||y()}})},p=function(){return!!n.hasNext()||!!Object.keys(n.getRunning()).length},q=function(a,b){var c=new Request.JSON({url:"/upload/",data:{file:a.src},onSuccess:b,onFailure:function(){v(a.getParent(".unit")),p()||y()}}),d=Math.floor(1e6*Math.random());n.addRequest(d,c).send(d)},r=function(a,b){a.each(function(a,c){a.unit.toBoard=b;var d=o(a);n.addRequest(c,d).send(c)})},s=function(a){if(!window.opener||!window.opener.postMessage)return;window.opener.postMessage("complete:"+a,"*")},t=function(a){a.addClass("waiting")},u=function(a){a.removeClass("waiting").addClass("sending"),j.hide(),k.show().innerHTML="正在采集..."},v=function(a,b){a.removeClass("sending").addClass("failed"),b&&(a.addClass("duplicated").getElement(".indicator").set("href","/pins/"+b+"/"),s(a.unit.imgUrl))},w=function(a,b){a.removeClass("sending").addClass("finished"),a.getElement(".indicator").set("href","/pins/"+b+"/"),s(a.unit.imgUrl)},x=function(a){a.removeClass("failed").addClass("sending"),o(a).send()},y=function(){e.hide(),f.show();var a=b.getElements(".failed").length,c=b.getElements(".finished").length;c&&!a?g.innerHTML="采集成功":a&&!c?g.innerHTML="采集失败":a&&c&&(g.innerHTML="采集成功 "+c+" 个，失败 "+a+" 个"),k.innerHTML="采集完成",window.fireEvent("allComplete")};Element.NativeEvents.message=2,window.addEvent("message",function(a){var b=JSON.decode(a.event.data);b.each(function(a){m(a)})}),window.opener.postMessage("multiUnits","*"),d.addEvent("click",function(){if(this.hasClass("disabled"))return;this.addClass("disabled"),b.addClass("started");var a=b.getElements(".unit");if(!a.length)return;var c=j.get("data-board-id");i.set("href","/boards/"+c+"/"),t(a),r(a,c)}),j.addEvent("select",function(){d.removeClass("disabled")}),b.addEvent("click:relay(.cancel)",function(){this.getParent(".unit").dispose(),b.getElements(".unit").length||d.addClass("disabled")}),b.addEvent("click:relay(.failed .indicator)",function(a){var b=this.getParent(".unit");if(b.hasClass("duplicated"))return;a.stop(),x(b)}),h.addEvent("click",function(){window.close()}),window.onbeforeunload=function(a){if(p())return"关闭窗口将会停止采集，确定关闭？"};var z=!0;window.addEvents({focus:function(){z=!0},blur:function(){z=!1},allComplete:function(){if($$(".unit.failed").length)return;setTimeout(function(){z||window.close()},6e3)}}),function(){var a={width:document.html.clientWidth,height:document.html.clientHeight};window.resizeBy(500-a.width,350-a.height)}.delay(300),Asset.images(["/img/bookmarklet/icons.png","/img/bookmarklet/pin_motion.gif"])})()</script>')
        }
        return buf.join("")
    }, __t["base/floating_notice"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, main_id = Math.floor(1e6 * Math.random());
            buf.push("<div"), buf.push(attrs({
                id: "uniq_" + main_id + "",
                "class": "floating-notice"
            })), buf.push("><i"), buf.push(attrs({
                "class": "icon-" + locals.type + ""
            })), buf.push("></i>");
            var __val__ = locals.text;
            buf.push(null == __val__ ? "" : __val__), buf.push('</div><script>(function(){var a=document.id("uniq_' + escape((interp = main_id) == null ? "" : interp) + '");a.setStyle("margin-left",-Math.floor(a.getSize().x/2)),a.addClass("showing");var b=app.view.getElements(".dialog-boxes>div");b.length&&b.getStyle("display").some(function(a){return a=="block"})||!document.id("header")||document.id("pin_view_layer")?a.setStyle("top",0):a.setStyle("top","");var c=Number("' + escape((interp = locals.timeout) == null ? "" : interp) + '");c&&setTimeout(function(){a.removeClass("showing"),setTimeout(function(){a.destroy()},200)},c)})()</script>')
        }
        return buf.join("")
    }, __t["base/board_list_cell"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp;
            if (locals.recent) {
                buf.push("<div"), buf.push(attrs({
                    "class": "group recent"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "side-title"
                })), buf.push("></div><div"), buf.push(attrs({
                    "class": "selections"
                })), buf.push(">");
                for (var $index = 0, $$l = locals.recent.length; $index < $$l; $index++) {
                    var board = locals.recent[$index];
                    buf.push("<a"), buf.push(attrs({
                        title: board.title,
                        "data-board-id": board.board_id,
                        "data-category": board.category_id,
                        "class": "board"
                    })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a>")
                }
                buf.push("</div></div>")
            }
            if (locals.letters)
                for (var i = 0; i < letters.length; i++) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "group"
                    })), buf.push("><div"), buf.push(attrs({
                        "class": "side-title"
                    })), buf.push("><div"), buf.push(attrs({
                        "class": "icon"
                    })), buf.push(">" + escape((interp = letters[i].letter) == null ? "" : interp) + "</div></div><div"), buf.push(attrs({
                        "class": "selections"
                    })), buf.push(">");
                    for (var $index = 0, $$l = letters[i].boards.length; $index < $$l; $index++) {
                        var board = letters[i].boards[$index];
                        buf.push("<a"), buf.push(attrs({
                            title: board.title,
                            "data-board-id": board.board_id,
                            "data-category": board.category_id,
                            "class": "board"
                        })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a>")
                    }
                    buf.push("</div></div>")
                }
            if (locals.num && locals.num.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "group"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "side-title"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "icon"
                })), buf.push(">#</div></div><div"), buf.push(attrs({
                    "class": "selections"
                })), buf.push(">");
                for (var $index = 0, $$l = locals.num.length; $index < $$l; $index++) {
                    var board = locals.num[$index];
                    buf.push("<a"), buf.push(attrs({
                        title: board.title,
                        "data-board-id": board.board_id,
                        "data-category": board.category_id,
                        "class": "board"
                    })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a>")
                }
                buf.push("</div></div>")
            }
            if (locals.other && locals.other.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "group other"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "side-title"
                })), buf.push("><div"), buf.push(attrs({
                    "class": "icon"
                })), buf.push(">?</div></div><div"), buf.push(attrs({
                    "class": "selections"
                })), buf.push(">");
                for (var $index = 0, $$l = locals.other.length; $index < $$l; $index++) {
                    var board = locals.other[$index];
                    buf.push("<a"), buf.push(attrs({
                        title: board.title,
                        "data-board-id": board.board_id,
                        "data-category": board.category_id,
                        "class": "board"
                    })), buf.push(">" + escape((interp = board.title) == null ? "" : interp) + "</a>")
                }
                buf.push("</div></div>")
            }
        }
        return buf.join("")
    }, __t["base/pin_view_gift_extra"] = function (locals) {
        var buf = [];
        with(locals || {}) {
            var interp, hideFoo = "no-foo";
            if (commodity.title || commodity.price > 0) hideFoo = "";
            buf.push("<div"), buf.push(attrs({
                "class": "pin-info gift-info"
            })), buf.push(">");
            if (commodity.title || commodity.price > 0) {
                buf.push("<div"), buf.push(attrs({
                    "class": "info-foo"
                })), buf.push(">");
                if (commodity.title) {
                    buf.push("<div"), buf.push(attrs({
                        id: "pin_commodity_bar",
                        "class": "info-title"
                    })), buf.push(">");
                    var _css_class = commodity.store ? "store-" + commodity.store + " icon" : "icon";
                    buf.push("<em"), buf.push(attrs({
                        "class": "" + _css_class + ""
                    })), buf.push("></em><h4>" + escape((interp = commodity.title) == null ? "" : interp) + "</h4></div>")
                }
                if (commodity.price > 0) {
                    buf.push("<div"), buf.push(attrs({
                        "class": "info-price"
                    })), buf.push(">");
                    var currency = commodity.extra && commodity.extra.currency ? commodity.extra.currency + " " : "￥";
                    buf.push("<span"), buf.push(attrs({
                        "class": "price-now"
                    })), buf.push(">" + escape((interp = currency) == null ? "" : interp) + "" + escape((interp = commodity.price) == null ? "" : interp) + "</span></div>")
                }
                buf.push("<a"), buf.push(attrs({
                    href: "/go/?pin_id=" + pin.pin_id + "",
                    rel: "nofollow",
                    target: "_blank",
                    "class": "button goto-buy"
                })), buf.push(">立即购买</a></div>")
            }
            var targets = (commodity.extra["target:gent"] || []).concat(commodity.extra["target:lady"] || []).concat(commodity.extra["target:child"] || []),
                scenes = commodity.extra.scene || [],
                _scenes = scenes.slice(0, 8);
            if (targets.length || _scenes.length) {
                buf.push("<div"), buf.push(attrs({
                    "class": "info-bar " + ("" + hideFoo + "")
                })), buf.push("><div"), buf.push(attrs({
                    "class": "info-fit"
                })), buf.push(">");
                if (targets.length) {
                    buf.push("<span"), buf.push(attrs({
                        "class": "fit-title"
                    })), buf.push(">适合对象:</span>");
                    for (var $index = 0, $$l = (commodity.extra["target:gent"] || []).length; $index < $$l; $index++) {
                        var target = (commodity.extra["target:gent"] || [])[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "/gift/goods/gent?target=" + target + "",
                            "class": "brown-link fit-item"
                        })), buf.push(">" + escape((interp = target) == null ? "" : interp) + "</a>")
                    }
                    for (var $index = 0, $$l = (commodity.extra["target:lady"] || []).length; $index < $$l; $index++) {
                        var target = (commodity.extra["target:lady"] || [])[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "/gift/goods/lady?target=" + target + "",
                            "class": "brown-link fit-item"
                        })), buf.push(">" + escape((interp = target) == null ? "" : interp) + "</a>")
                    }
                    for (var $index = 0, $$l = (commodity.extra["target:child"] || []).length; $index < $$l; $index++) {
                        var target = (commodity.extra["target:child"] || [])[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "/gift/goods/child?target=" + target + "",
                            "class": "brown-link fit-item"
                        })), buf.push(">" + escape((interp = target) == null ? "" : interp) + "</a>")
                    }
                }
                buf.push("</div><div"), buf.push(attrs({
                    "class": "info-fit info-fit-bottom"
                })), buf.push(">");
                var scenes = commodity.extra.scene || [],
                    _scenes = scenes.slice(0, 8);
                if (_scenes.length) {
                    buf.push("<span"), buf.push(attrs({
                        "class": "fit-title"
                    })), buf.push(">适合场合:</span>");
                    for (var $index = 0, $$l = _scenes.length; $index < $$l; $index++) {
                        var scene = _scenes[$index];
                        buf.push("<a"), buf.push(attrs({
                            href: "/gift/goods/scene/?scene=" + scene + "",
                            "class": "brown-link fit-item"
                        })), buf.push(">" + escape((interp = scene) == null ? "" : interp) + "</a>")
                    }
                }
                buf.push("</div></div>")
            }
            buf.push("</div>")
        }
        return buf.join("")
    }
})(app);