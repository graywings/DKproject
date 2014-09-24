function (e) {
    function t(t, r, i) {
        var o = this;
        return this.on("click.pjax", t, function (t) {
            var a = e.extend({}, d(r, i));
            a.container || (a.container = e(this).attr("data-pjax") || o), n(t, a)
        })
    }

    function n(t, n, r) {
        r = d(n, r);
        var o = t.currentTarget;
        if ("A" !== o.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== o.protocol || location.hostname !== o.hostname || o.hash && o.href.replace(o.hash, "") === location.href.replace(location.hash, "") || o.href === location.href + "#" || t.isDefaultPrevented())) {
            var a = {
                url: o.href,
                container: e(o).attr("data-pjax"),
                target: o
            }, s = e.extend({}, a, r),
                c = e.Event("pjax:click");
            e(o).trigger(c, [s]), c.isDefaultPrevented() || (i(s), t.preventDefault(), e(o).trigger("pjax:clicked", [s]))
        }
    }

    function r(t, n, r) {
        r = d(n, r);
        var o = t.currentTarget;
        if ("FORM" !== o.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var a = {
            type: o.method.toUpperCase(),
            url: o.action,
            data: e(o).serializeArray(),
            container: e(o).attr("data-pjax"),
            target: o
        };
        i(e.extend({}, a, r)), t.preventDefault()
    }

    function i(t) {
        function n(t, n, i) {
            i || (i = {}), i.relatedTarget = r;
            var o = e.Event(t, i);
            return s.trigger(o, n), !o.isDefaultPrevented()
        }
        t = e.extend(!0, {}, e.ajaxSettings, i.defaults, t), e.isFunction(t.url) && (t.url = t.url());
        var r = t.target,
            o = f(t.url).hash,
            s = t.context = p(t.container);
        t.data || (t.data = {}), t.data._pjax = s.selector;
        var c;
        t.beforeSend = function (e, r) {
            return "GET" !== r.type && (r.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", s.selector), n("pjax:beforeSend", [e, r]) ? (r.timeout > 0 && (c = setTimeout(function () {
                n("pjax:timeout", [e, t]) && e.abort("timeout")
            }, r.timeout), r.timeout = 0), t.requestUrl = f(r.url).href, void 0) : !1
        }, t.complete = function (e, r) {
            c && clearTimeout(c), n("pjax:complete", [e, r, t]), n("pjax:end", [e, t])
        }, t.error = function (e, r, i) {
            var o = g("", e, t),
                s = n("pjax:error", [e, r, i, t]);
            "GET" == t.type && "abort" !== r && s && a(o.url)
        }, t.success = function (r, c, u) {
            var d = i.state,
                p = "function" == typeof e.pjax.defaults.version ? e.pjax.defaults.version() : e.pjax.defaults.version,
                h = u.getResponseHeader("X-PJAX-Version"),
                m = g(r, u, t);
            if (p && h && p !== h) return a(m.url), void 0;
            if (!m.contents) return a(m.url), void 0;
            i.state = {
                id: t.id || l(),
                url: m.url,
                title: m.title,
                container: s.selector,
                fragment: t.fragment,
                timeout: t.timeout
            }, (t.push || t.replace) && window.history.replaceState(i.state, m.title, m.url);
            try {
                document.activeElement.blur()
            } catch (y) {}
            m.title && (document.title = m.title), n("pjax:beforeReplace", [m.contents, t], {
                state: i.state,
                previousState: d
            }), s.html(m.contents);
            var b = s.find("input[autofocus], textarea[autofocus]").last()[0];
            if (b && document.activeElement !== b && b.focus(), v(m.scripts), "number" == typeof t.scrollTo && e(window).scrollTop(t.scrollTo), "" !== o) {
                var w = f(m.url);
                w.hash = o, i.state.url = w.href, window.history.replaceState(i.state, m.title, w.href);
                var x = e(w.hash);
                x.length && e(window).scrollTop(x.offset().top)
            }
            n("pjax:success", [r, c, u, t])
        }, i.state || (i.state = {
            id: l(),
            url: window.location.href,
            title: document.title,
            container: s.selector,
            fragment: t.fragment,
            timeout: t.timeout
        }, window.history.replaceState(i.state, document.title));
        var d = i.xhr;
        d && d.readyState < 4 && (d.onreadystatechange = e.noop, d.abort()), i.options = t;
        var d = i.xhr = e.ajax(t);
        return d.readyState > 0 && (t.push && !t.replace && (y(i.state.id, s.clone().contents()), window.history.pushState(null, "", u(t.requestUrl))), n("pjax:start", [d, t]), n("pjax:send", [d, t])), i.xhr
    }

    function o(t, n) {
        var r = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return i(e.extend(r, d(t, n)))
    }

    function a(e) {
        window.history.replaceState(null, "", "#"), window.location.replace(e)
    }

    function s(t) {
        var n = i.state,
            r = t.state;
        if (r && r.container) {
            if (E && _ == r.url) return;
            if (i.state && i.state.id === r.id) return;
            var o = e(r.container);
            if (o.length) {
                var s, c = C[r.id];
                i.state && (s = i.state.id < r.id ? "forward" : "back", b(s, i.state.id, o.clone().contents()));
                var l = e.Event("pjax:popstate", {
                    state: r,
                    direction: s
                });
                o.trigger(l);
                var u = {
                    id: r.id,
                    url: r.url,
                    container: o,
                    push: !1,
                    fragment: r.fragment,
                    timeout: r.timeout,
                    scrollTo: !1
                };
                if (c) {
                    o.trigger("pjax:start", [null, u]), i.state = r, r.title && (document.title = r.title);
                    var f = e.Event("pjax:beforeReplace", {
                        state: r,
                        previousState: n
                    });
                    o.trigger(f, [c, u]), o.html(c), o.trigger("pjax:end", [null, u])
                } else i(u);
                o[0].offsetHeight
            } else a(location.href)
        }
        E = !1
    }

    function c(t) {
        var n = e.isFunction(t.url) ? t.url() : t.url,
            r = t.type ? t.type.toUpperCase() : "GET",
            i = e("<form>", {
                method: "GET" === r ? "GET" : "POST",
                action: n,
                style: "display:none"
            });
        "GET" !== r && "POST" !== r && i.append(e("<input>", {
            type: "hidden",
            name: "_method",
            value: r.toLowerCase()
        }));
        var o = t.data;
        if ("string" == typeof o) e.each(o.split("&"), function (t, n) {
            var r = n.split("=");
            i.append(e("<input>", {
                type: "hidden",
                name: r[0],
                value: r[1]
            }))
        });
        else if ("object" == typeof o)
            for (key in o) i.append(e("<input>", {
                type: "hidden",
                name: key,
                value: o[key]
            }));
        e(document.body).append(i), i.submit()
    }

    function l() {
        return (new Date).getTime()
    }

    function u(e) {
        return e.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }

    function f(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }

    function d(t, n) {
        return t && n ? n.container = t : n = e.isPlainObject(t) ? t : {
            container: t
        }, n.container && (n.container = p(n.container)), n
    }

    function p(t) {
        if (t = e(t), t.length) {
            if ("" !== t.selector && t.context === document) return t;
            if (t.attr("id")) return e("#" + t.attr("id"));
            throw "cant get selector for pjax container!"
        }
        throw "no pjax container for " + t.selector
    }

    function h(e, t) {
        return e.filter(t).add(e.find(t))
    }

    function m(t) {
        return e.parseHTML(t, document, !0)
    }

    function g(t, n, r) {
        var i = {};
        if (i.url = u(n.getResponseHeader("X-PJAX-URL") || r.requestUrl), /<html/i.test(t)) var o = e(m(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
        a = e(m(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else var o = a = e(m(t)); if (0 === a.length) return i;
        if (i.title = h(o, "title").last().text(), r.fragment) {
            if ("body" === r.fragment) var s = a;
            else var s = h(a, r.fragment).first();
            s.length && (i.contents = s.contents(), i.title || (i.title = s.attr("title") || s.data("title")))
        } else /<html/i.test(t) || (i.contents = a);
        return i.contents && (i.contents = i.contents.not(function () {
            return e(this).is("title")
        }), i.contents.find("title").remove(), i.scripts = h(i.contents, "script[src]").remove(), i.contents = i.contents.not(i.scripts)), i.title && (i.title = e.trim(i.title)), i
    }

    function v(t) {
        if (t) {
            var n = e("script[src]");
            t.each(function () {
                var t = this.src,
                    r = n.filter(function () {
                        return this.src === t
                    });
                if (!r.length) {
                    var i = document.createElement("script");
                    i.type = e(this).attr("type"), i.src = e(this).attr("src"), document.head.appendChild(i)
                }
            })
        }
    }

    function y(e, t) {
        for (C[e] = t, N.push(e); S.length;) delete C[S.shift()];
        for (; N.length > i.defaults.maxCacheLength;) delete C[N.shift()]
    }

    function b(e, t, n) {
        var r, i;
        C[t] = n, "forward" === e ? (r = N, i = S) : (r = S, i = N), r.push(t), (t = i.pop()) && delete C[t]
    }

    function w() {
        return e("meta").filter(function () {
            var t = e(this).attr("http-equiv");
            return t && "X-PJAX-VERSION" === t.toUpperCase()
        }).attr("content")
    }

    function x() {
        e.fn.pjax = t, e.pjax = i, e.pjax.enable = e.noop, e.pjax.disable = T, e.pjax.click = n, e.pjax.submit = r, e.pjax.reload = o, e.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20,
            version: w
        }, e(window).on("popstate.pjax", s)
    }

    function T() {
        e.fn.pjax = function () {
            return this
        }, e.pjax = c, e.pjax.enable = x, e.pjax.disable = e.noop, e.pjax.click = e.noop, e.pjax.submit = e.noop, e.pjax.reload = function () {
            window.location.reload()
        }, e(window).off("popstate.pjax", s)
    }
    var E = !0,
        _ = window.location.href,
        k = window.history.state;
    k && k.container && (i.state = k), "state" in window.history && (E = !1);
    var C = {}, S = [],
        N = [];
    e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), e.support.pjax ? x() : T()
}(jQuery)