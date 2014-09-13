! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                throw new Error("Cannot find module '" + g + "'")
            }
            var j = c[g] = {
                exports: {}
            };
            b[g][0].call(j.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, j, j.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [
        function (a) {
            a("./leaflet"), a("./mapbox")
        }, {
            "./leaflet": 2,
            "./mapbox": 3
        }
    ],
    2: [
        function (a) {
            window.L = a("leaflet/dist/leaflet-src")
        }, {
            "leaflet/dist/leaflet-src": 6
        }
    ],
    3: [
        function (a, b) {
            window.L.Icon.Default.imagePath = "//api.tiles.mapbox.com/mapbox.js/v" + a("./package.json").version + "/images", L.mapbox = b.exports = {
                VERSION: a("./package.json").version,
                geocoder: a("./src/geocoder"),
                marker: a("./src/marker"),
                simplestyle: a("./src/simplestyle"),
                tileLayer: a("./src/tile_layer"),
                infoControl: a("./src/info_control"),
                shareControl: a("./src/share_control"),
                legendControl: a("./src/legend_control"),
                geocoderControl: a("./src/geocoder_control"),
                gridControl: a("./src/grid_control"),
                gridLayer: a("./src/grid_layer"),
                featureLayer: a("./src/feature_layer"),
                map: a("./src/map"),
                config: a("./src/config"),
                sanitize: a("sanitize-caja"),
                template: a("mustache").to_html
            }, L.mapbox.markerLayer = L.mapbox.featureLayer
        }, {
            "./package.json": 10,
            "./src/config": 11,
            "./src/feature_layer": 12,
            "./src/geocoder": 13,
            "./src/geocoder_control": 14,
            "./src/grid_control": 16,
            "./src/grid_layer": 17,
            "./src/info_control": 18,
            "./src/legend_control": 19,
            "./src/map": 21,
            "./src/marker": 22,
            "./src/share_control": 24,
            "./src/simplestyle": 25,
            "./src/tile_layer": 26,
            mustache: 7,
            "sanitize-caja": 8
        }
    ],
    4: [
        function (a, b) {
            function c(a, b, c) {
                function d(a) {
                    return a >= 200 && a < 300 || 304 === a
                }

                function e() {
                    void 0 === h.status || d(h.status) ? b.call(h, null, h) : b.call(h, h, null)
                }
                var f = !1;
                if ("undefined" === typeof window.XMLHttpRequest) return b(Error("Browser not supported"));
                if ("undefined" === typeof c) {
                    var g = a.match(/^\s*https?:\/\/[^\/]*/);
                    c = g && g[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
                }
                var h;
                if (!c || "object" !== typeof window.XDomainRequest && "function" !== typeof window.XDomainRequest) h = new window.XMLHttpRequest;
                else {
                    h = new window.XDomainRequest;
                    var i = b;
                    b = function () {
                        if (f) i.apply(this, arguments);
                        else {
                            var a = this,
                                b = arguments;
                            setTimeout(function () {
                                i.apply(a, b)
                            }, 0)
                        }
                    }
                }
                return "onload" in h ? h.onload = e : h.onreadystatechange = function () {
                    4 === h.readyState && e()
                }, h.onerror = function (a) {
                    b.call(this, a || !0, null), b = function () {}
                }, h.onprogress = function () {}, h.ontimeout = function (a) {
                    b.call(this, a, null), b = function () {}
                }, h.onabort = function (a) {
                    b.call(this, a, null), b = function () {}
                }, h.open("GET", a, !0), h.send(null), f = !0, h
            }
            "undefined" !== typeof b && (b.exports = c)
        }, {}
    ],
    5: [
        function (a, b, c) {
            ! function (a) {
                function b(a) {
                    if (b[a] !== f) return b[a];
                    var c;
                    if ("bug-string-char-index" == a) c = "a" != "a" [0];
                    else if ("json" == a) c = b("json-stringify") && b("json-parse");
                    else {
                        var d, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == a) {
                            var h = j.stringify,
                                i = "function" == typeof h && k;
                            if (i) {
                                (d = function () {
                                    return 1
                                }).toJSON = d;
                                try {
                                    i = "0" === h(0) && "0" === h(new Number) && '""' == h(new String) && h(g) === f && h(f) === f && h() === f && "1" === h(d) && "[1]" == h([d]) && "[null]" == h([f]) && "null" == h(null) && "[null,null,null]" == h([f, g, null]) && h({
                                        a: [d, !0, !1, null, "\x00\b\n\f\r	"]
                                    }) == e && "1" === h(null, d) && "[\n 1,\n 2\n]" == h([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == h(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == h(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == h(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == h(new Date(-1))
                                } catch (l) {
                                    i = !1
                                }
                            }
                            c = i
                        }
                        if ("json-parse" == a) {
                            var m = j.parse;
                            if ("function" == typeof m) try {
                                if (0 === m("0") && !m(!1)) {
                                    d = m(e);
                                    var n = 5 == d.a.length && 1 === d.a[0];
                                    if (n) {
                                        try {
                                            n = !m('"	"')
                                        } catch (l) {}
                                        if (n) try {
                                            n = 1 !== m("01")
                                        } catch (l) {}
                                        if (n) try {
                                            n = 1 !== m("1.")
                                        } catch (l) {}
                                    }
                                }
                            } catch (l) {
                                n = !1
                            }
                            c = n
                        }
                    }
                    return b[a] = !! c
                }
                var d, e, f, g = {}.toString,
                    h = "function" === typeof define && define.amd,
                    i = "object" == typeof JSON && JSON,
                    j = "object" == typeof c && c && !c.nodeType && c;
                j && i ? (j.stringify = i.stringify, j.parse = i.parse) : j = a.JSON = i || {};
                var k = new Date(-0xc782b5b800cec);
                try {
                    k = -109252 == k.getUTCFullYear() && 0 === k.getUTCMonth() && 1 === k.getUTCDate() && 10 == k.getUTCHours() && 37 == k.getUTCMinutes() && 6 == k.getUTCSeconds() && 708 == k.getUTCMilliseconds()
                } catch (l) {}
                if (!b("json")) {
                    var m = "[object Function]",
                        n = "[object Date]",
                        o = "[object Number]",
                        p = "[object String]",
                        q = "[object Array]",
                        r = "[object Boolean]",
                        s = b("bug-string-char-index");
                    if (!k) var t = Math.floor,
                    u = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], v = function (a, b) {
                        return u[b] + 365 * (a - 1970) + t((a - 1969 + (b = +(b > 1))) / 4) - t((a - 1901 + b) / 100) + t((a - 1601 + b) / 400)
                    };
                    (d = {}.hasOwnProperty) || (d = function (a) {
                        var b, c = {};
                        return (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        }, c).toString != g ? d = function (a) {
                            var b = this.__proto__,
                                c = a in (this.__proto__ = null, this);
                            return this.__proto__ = b, c
                        } : (b = c.constructor, d = function (a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }), c = null, d.call(this, a)
                    });
                    var w = {
                        "boolean": 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    }, x = function (a, b) {
                            var c = typeof a[b];
                            return "object" == c ? !! a[b] : !w[c]
                        };
                    if (e = function (a, b) {
                        var c, f, h, i = 0;
                        (c = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, f = new c;
                        for (h in f) d.call(f, h) && i++;
                        return c = f = null, i ? e = 2 == i ? function (a, b) {
                            var c, e = {}, f = g.call(a) == m;
                            for (c in a) f && "prototype" == c || d.call(e, c) || !(e[c] = 1) || !d.call(a, c) || b(c)
                        } : function (a, b) {
                            var c, e, f = g.call(a) == m;
                            for (c in a) f && "prototype" == c || !d.call(a, c) || (e = "constructor" === c) || b(c);
                            (e || d.call(a, c = "constructor")) && b(c)
                        } : (f = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], e = function (a, b) {
                            var c, e, h = g.call(a) == m,
                                i = !h && "function" != typeof a.constructor && x(a, "hasOwnProperty") ? a.hasOwnProperty : d;
                            for (c in a) h && "prototype" == c || !i.call(a, c) || b(c);
                            for (e = f.length; c = f[--e]; i.call(a, c) && b(c));
                        }), e(a, b)
                    }, !b("json-stringify")) {
                        var y = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }, z = "000000",
                            A = function (a, b) {
                                return (z + (b || 0)).slice(-a)
                            }, B = "\\u00",
                            C = function (a) {
                                var b, c = '"',
                                    d = 0,
                                    e = a.length,
                                    f = e > 10 && s;
                                for (f && (b = a.split("")); d < e; d++) {
                                    var g = a.charCodeAt(d);
                                    switch (g) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        c += y[g];
                                        break;
                                    default:
                                        if (g < 32) {
                                            c += B + A(2, g.toString(16));
                                            break
                                        }
                                        c += f ? b[d] : s ? a.charAt(d) : a[d]
                                    }
                                }
                                return c + '"'
                            }, D = function (a, b, c, h, i, j, k) {
                                var l, m, s, u, w, x, y, z, B, E, F, G, H, I, J, K;
                                try {
                                    l = b[a]
                                } catch (L) {}
                                if ("object" == typeof l && l)
                                    if (m = g.call(l), m != n || d.call(l, "toJSON")) "function" == typeof l.toJSON && (m != o && m != p && m != q || d.call(l, "toJSON")) && (l = l.toJSON(a));
                                    else if (l > -1 / 0 && l < 1 / 0) {
                                    if (v) {
                                        for (w = t(l / 864e5), s = t(w / 365.2425) + 1970 - 1; v(s + 1, 0) <= w; s++);
                                        for (u = t((w - v(s, 0)) / 30.42); v(s, u + 1) <= w; u++);
                                        w = 1 + w - v(s, u), x = (l % 864e5 + 864e5) % 864e5, y = t(x / 36e5) % 24, z = t(x / 6e4) % 60, B = t(x / 1e3) % 60, E = x % 1e3
                                    } else s = l.getUTCFullYear(), u = l.getUTCMonth(), w = l.getUTCDate(), y = l.getUTCHours(), z = l.getUTCMinutes(), B = l.getUTCSeconds(), E = l.getUTCMilliseconds();
                                    l = (s <= 0 || s >= 1e4 ? (s < 0 ? "-" : "+") + A(6, s < 0 ? -s : s) : A(4, s)) + "-" + A(2, u + 1) + "-" + A(2, w) + "T" + A(2, y) + ":" + A(2, z) + ":" + A(2, B) + "." + A(3, E) + "Z"
                                } else l = null; if (c && (l = c.call(b, a, l)), null === l) return "null";
                                if (m = g.call(l), m == r) return "" + l;
                                if (m == o) return l > -1 / 0 && l < 1 / 0 ? "" + l : "null";
                                if (m == p) return C("" + l);
                                if ("object" == typeof l) {
                                    for (I = k.length; I--;)
                                        if (k[I] === l) throw TypeError();
                                    if (k.push(l), F = [], J = j, j += i, m == q) {
                                        for (H = 0, I = l.length; H < I; H++) G = D(H, l, c, h, i, j, k), F.push(G === f ? "null" : G);
                                        K = F.length ? i ? "[\n" + j + F.join(",\n" + j) + "\n" + J + "]" : "[" + F.join(",") + "]" : "[]"
                                    } else e(h || l, function (a) {
                                        var b = D(a, l, c, h, i, j, k);
                                        b !== f && F.push(C(a) + ":" + (i ? " " : "") + b)
                                    }), K = F.length ? i ? "{\n" + j + F.join(",\n" + j) + "\n" + J + "}" : "{" + F.join(",") + "}" : "{}";
                                    return k.pop(), K
                                }
                            };
                        j.stringify = function (a, b, c) {
                            var d, e, f, h;
                            if ("function" == typeof b || "object" == typeof b && b)
                                if ((h = g.call(b)) == m) e = b;
                                else if (h == q) {
                                f = {};
                                for (var i, j = 0, k = b.length; j < k; i = b[j++], h = g.call(i), (h == p || h == o) && (f[i] = 1));
                            }
                            if (c)
                                if ((h = g.call(c)) == o) {
                                    if ((c -= c % 1) > 0)
                                        for (d = "", c > 10 && (c = 10); d.length < c; d += " ");
                                } else h == p && (d = c.length <= 10 ? c : c.slice(0, 10));
                            return D("", (i = {}, i[""] = a, i), e, f, d, "", [])
                        }
                    }
                    if (!b("json-parse")) {
                        var E, F, G = String.fromCharCode,
                            H = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "	",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            }, I = function () {
                                throw E = F = null, SyntaxError()
                            }, J = function () {
                                for (var a, b, c, d, e, f = F, g = f.length; E < g;) switch (e = f.charCodeAt(E)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    E++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = s ? f.charAt(E) : f[E], E++, a;
                                case 34:
                                    for (a = "@", E++; E < g;)
                                        if (e = f.charCodeAt(E), e < 32) I();
                                        else if (92 == e) switch (e = f.charCodeAt(++E)) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        a += H[e], E++;
                                        break;
                                    case 117:
                                        for (b = ++E, c = E + 4; E < c; E++) e = f.charCodeAt(E), e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || I();
                                        a += G("0x" + f.slice(b, E));
                                        break;
                                    default:
                                        I()
                                    } else {
                                        if (34 == e) break;
                                        for (e = f.charCodeAt(E), b = E; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++E);
                                        a += f.slice(b, E)
                                    } if (34 == f.charCodeAt(E)) return E++, a;
                                    I();
                                default:
                                    if (b = E, 45 == e && (d = !0, e = f.charCodeAt(++E)), e >= 48 && e <= 57) {
                                        for (48 == e && (e = f.charCodeAt(E + 1), e >= 48 && e <= 57) && I(), d = !1; E < g && (e = f.charCodeAt(E), e >= 48 && e <= 57); E++);
                                        if (46 == f.charCodeAt(E)) {
                                            for (c = ++E; c < g && (e = f.charCodeAt(c), e >= 48 && e <= 57); c++);
                                            c == E && I(), E = c
                                        }
                                        if (e = f.charCodeAt(E), 101 == e || 69 == e) {
                                            for (e = f.charCodeAt(++E), (43 == e || 45 == e) && E++, c = E; c < g && (e = f.charCodeAt(c), e >= 48 && e <= 57); c++);
                                            c == E && I(), E = c
                                        }
                                        return +f.slice(b, E)
                                    }
                                    if (d && I(), "true" == f.slice(E, E + 4)) return E += 4, !0;
                                    if ("false" == f.slice(E, E + 5)) return E += 5, !1;
                                    if ("null" == f.slice(E, E + 4)) return E += 4, null;
                                    I()
                                }
                                return "$"
                            }, K = function (a) {
                                var b, c;
                                if ("$" == a && I(), "string" == typeof a) {
                                    if ("@" == (s ? a.charAt(0) : a[0])) return a.slice(1);
                                    if ("[" == a) {
                                        for (b = []; a = J(), "]" != a; c || (c = !0)) c && ("," == a ? (a = J(), "]" == a && I()) : I()), "," == a && I(), b.push(K(a));
                                        return b
                                    }
                                    if ("{" == a) {
                                        for (b = {}; a = J(), "}" != a; c || (c = !0)) c && ("," == a ? (a = J(), "}" == a && I()) : I()), ("," == a || "string" != typeof a || "@" != (s ? a.charAt(0) : a[0]) || ":" != J()) && I(), b[a.slice(1)] = K(J());
                                        return b
                                    }
                                    I()
                                }
                                return a
                            }, L = function (a, b, c) {
                                var d = M(a, b, c);
                                d === f ? delete a[b] : a[b] = d
                            }, M = function (a, b, c) {
                                var d, f = a[b];
                                if ("object" == typeof f && f)
                                    if (g.call(f) == q)
                                        for (d = f.length; d--;) L(f, d, c);
                                    else e(f, function (a) {
                                        L(f, a, c)
                                    });
                                return c.call(a, b, f)
                            };
                        j.parse = function (a, b) {
                            var c, d;
                            return E = 0, F = "" + a, c = K(J()), "$" != J() && I(), E = F = null, b && g.call(b) == m ? M((d = {}, d[""] = c, d), "", b) : c
                        }
                    }
                }
                h && define(function () {
                    return j
                })
            }(this)
        }, {}
    ],
    6: [
        function (a, b) {
            ! function (a, c, d) {
                var e = a.L,
                    f = {};
                f.version = "0.7.2", "object" === typeof b && "object" === typeof b.exports ? b.exports = f : "function" === typeof define && define.amd && define(f), f.noConflict = function () {
                    return a.L = e, this
                }, a.L = f, f.Util = {
                    extend: function (a) {
                        var b, c, d, e, f = Array.prototype.slice.call(arguments, 1);
                        for (c = 0, d = f.length; c < d; c++) {
                            e = f[c] || {};
                            for (b in e) e.hasOwnProperty(b) && (a[b] = e[b])
                        }
                        return a
                    },
                    bind: function (a, b) {
                        var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                        return function () {
                            return a.apply(b, c || arguments)
                        }
                    },
                    stamp: function () {
                        var a = 0,
                            b = "_leaflet_id";
                        return function (c) {
                            return c[b] = c[b] || ++a, c[b]
                        }
                    }(),
                    invokeEach: function (a, b, c) {
                        var d, e;
                        if ("object" === typeof a) {
                            e = Array.prototype.slice.call(arguments, 3);
                            for (d in a) b.apply(c, [d, a[d]].concat(e));
                            return !0
                        }
                        return !1
                    },
                    limitExecByInterval: function (a, b, c) {
                        var d, e;
                        return function f() {
                            var g = arguments;
                            return d ? void(e = !0) : (d = !0, setTimeout(function () {
                                d = !1, e && (f.apply(c, g), e = !1)
                            }, b), void a.apply(c, g))
                        }
                    },
                    falseFn: function () {
                        return !1
                    },
                    formatNum: function (a, b) {
                        var c = Math.pow(10, b || 5);
                        return Math.round(a * c) / c
                    },
                    trim: function (a) {
                        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                    },
                    splitWords: function (a) {
                        return f.Util.trim(a).split(/\s+/)
                    },
                    setOptions: function (a, b) {
                        return a.options = f.extend({}, a.options, b), a.options
                    },
                    getParamString: function (a, b, c) {
                        var d = [];
                        for (var e in a) d.push(encodeURIComponent(c ? e.toUpperCase() : e) + "=" + encodeURIComponent(a[e]));
                        return (b && -1 !== b.indexOf("?") ? "&" : "?") + d.join("&")
                    },
                    template: function (a, b) {
                        return a.replace(/\{ *([\w_]+) *\}/g, function (a, c) {
                            var e = b[c];
                            if (e === d) throw new Error("No value provided for variable " + a);
                            return "function" === typeof e && (e = e(b)), e
                        })
                    },
                    isArray: Array.isArray || function (a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    },
                    emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                },
                function () {
                    function b(b) {
                        var c, d, e = ["webkit", "moz", "o", "ms"];
                        for (c = 0; c < e.length && !d; c++) d = a[e[c] + b];
                        return d
                    }

                    function c(b) {
                        var c = +new Date,
                            e = Math.max(0, 16 - (c - d));
                        return d = c + e, a.setTimeout(b, e)
                    }
                    var d = 0,
                        e = a.requestAnimationFrame || b("RequestAnimationFrame") || c,
                        g = a.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function (b) {
                            a.clearTimeout(b)
                        };
                    f.Util.requestAnimFrame = function (b, d, g, h) {
                        return b = f.bind(b, d), g && e === c ? void b() : e.call(a, b, h)
                    }, f.Util.cancelAnimFrame = function (b) {
                        b && g.call(a, b)
                    }
                }(), f.extend = f.Util.extend, f.bind = f.Util.bind, f.stamp = f.Util.stamp, f.setOptions = f.Util.setOptions, f.Class = function () {}, f.Class.extend = function (a) {
                    var b = function () {
                        this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                    }, c = function () {};
                    c.prototype = this.prototype;
                    var d = new c;
                    d.constructor = b, b.prototype = d;
                    for (var e in this) this.hasOwnProperty(e) && "prototype" !== e && (b[e] = this[e]);
                    a.statics && (f.extend(b, a.statics), delete a.statics), a.includes && (f.Util.extend.apply(null, [d].concat(a.includes)), delete a.includes), a.options && d.options && (a.options = f.extend({}, d.options, a.options)), f.extend(d, a), d._initHooks = [];
                    var g = this;
                    return b.__super__ = g.prototype, d.callInitHooks = function () {
                        if (!this._initHooksCalled) {
                            g.prototype.callInitHooks && g.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var a = 0, b = d._initHooks.length; a < b; a++) d._initHooks[a].call(this)
                        }
                    }, b
                }, f.Class.include = function (a) {
                    f.extend(this.prototype, a)
                }, f.Class.mergeOptions = function (a) {
                    f.extend(this.prototype.options, a)
                }, f.Class.addInitHook = function (a) {
                    var b = Array.prototype.slice.call(arguments, 1),
                        c = "function" === typeof a ? a : function () {
                            this[a].apply(this, b)
                        };
                    this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(c)
                };
                var g = "_leaflet_events";
                f.Mixin = {}, f.Mixin.Events = {
                    addEventListener: function (a, b, c) {
                        if (f.Util.invokeEach(a, this.addEventListener, this, b, c)) return this;
                        var d, e, h, i, j, k, l, m = this[g] = this[g] || {}, n = c && c !== this && f.stamp(c);
                        for (a = f.Util.splitWords(a), d = 0, e = a.length; d < e; d++) h = {
                            action: b,
                            context: c || this
                        }, i = a[d], n ? (j = i + "_idx", k = j + "_len", l = m[j] = m[j] || {}, l[n] || (l[n] = [], m[k] = (m[k] || 0) + 1), l[n].push(h)) : (m[i] = m[i] || [], m[i].push(h));
                        return this
                    },
                    hasEventListeners: function (a) {
                        var b = this[g];
                        return !!b && (a in b && b[a].length > 0 || a + "_idx" in b && b[a + "_idx_len"] > 0)
                    },
                    removeEventListener: function (a, b, c) {
                        if (!this[g]) return this;
                        if (!a) return this.clearAllEventListeners();
                        if (f.Util.invokeEach(a, this.removeEventListener, this, b, c)) return this;
                        var d, e, h, i, j, k, l, m, n, o = this[g],
                            p = c && c !== this && f.stamp(c);
                        for (a = f.Util.splitWords(a), d = 0, e = a.length; d < e; d++)
                            if (h = a[d], k = h + "_idx", l = k + "_len", m = o[k], b) {
                                if (i = p && m ? m[p] : o[h]) {
                                    for (j = i.length - 1; j >= 0; j--) i[j].action !== b || c && i[j].context !== c || (n = i.splice(j, 1), n[0].action = f.Util.falseFn);
                                    c && m && 0 === i.length && (delete m[p], o[l]--)
                                }
                            } else delete o[h], delete o[k], delete o[l];
                        return this
                    },
                    clearAllEventListeners: function () {
                        return delete this[g], this
                    },
                    fireEvent: function (a, b) {
                        if (!this.hasEventListeners(a)) return this;
                        var c, d, e, h, i, j = f.Util.extend({}, b, {
                                type: a,
                                target: this
                            }),
                            k = this[g];
                        if (k[a])
                            for (c = k[a].slice(), d = 0, e = c.length; d < e; d++) c[d].action.call(c[d].context, j);
                        h = k[a + "_idx"];
                        for (i in h)
                            if (c = h[i].slice())
                                for (d = 0, e = c.length; d < e; d++) c[d].action.call(c[d].context, j);
                        return this
                    },
                    addOneTimeEventListener: function (a, b, c) {
                        if (f.Util.invokeEach(a, this.addOneTimeEventListener, this, b, c)) return this;
                        var d = f.bind(function () {
                            this.removeEventListener(a, b, c).removeEventListener(a, d, c)
                        }, this);
                        return this.addEventListener(a, b, c).addEventListener(a, d, c)
                    }
                }, f.Mixin.Events.on = f.Mixin.Events.addEventListener, f.Mixin.Events.off = f.Mixin.Events.removeEventListener, f.Mixin.Events.once = f.Mixin.Events.addOneTimeEventListener, f.Mixin.Events.fire = f.Mixin.Events.fireEvent,
                function () {
                    var b = "ActiveXObject" in a,
                        e = b && !c.addEventListener,
                        g = navigator.userAgent.toLowerCase(),
                        h = -1 !== g.indexOf("webkit"),
                        i = -1 !== g.indexOf("chrome"),
                        j = -1 !== g.indexOf("phantom"),
                        k = -1 !== g.indexOf("android"),
                        l = -1 !== g.search("android [23]"),
                        m = -1 !== g.indexOf("gecko"),
                        n = typeof orientation !== d + "",
                        o = a.navigator && a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints && !a.PointerEvent,
                        p = a.PointerEvent && a.navigator.pointerEnabled && a.navigator.maxTouchPoints || o,
                        q = "devicePixelRatio" in a && a.devicePixelRatio > 1 || "matchMedia" in a && a.matchMedia("(min-resolution:144dpi)") && a.matchMedia("(min-resolution:144dpi)").matches,
                        r = c.documentElement,
                        s = b && "transition" in r.style,
                        t = "WebKitCSSMatrix" in a && "m11" in new a.WebKitCSSMatrix && !l,
                        u = "MozPerspective" in r.style,
                        v = "OTransition" in r.style,
                        w = !a.L_DISABLE_3D && (s || t || u || v) && !j,
                        x = !a.L_NO_TOUCH && !j && function () {
                            var a = "ontouchstart";
                            if (p || a in r) return !0;
                            var b = c.createElement("div"),
                                d = !1;
                            return b.setAttribute ? (b.setAttribute(a, "return;"), "function" === typeof b[a] && (d = !0), b.removeAttribute(a), b = null, d) : !1
                        }();
                    f.Browser = {
                        ie: b,
                        ielt9: e,
                        webkit: h,
                        gecko: m && !h && !a.opera && !b,
                        android: k,
                        android23: l,
                        chrome: i,
                        ie3d: s,
                        webkit3d: t,
                        gecko3d: u,
                        opera3d: v,
                        any3d: w,
                        mobile: n,
                        mobileWebkit: n && h,
                        mobileWebkit3d: n && t,
                        mobileOpera: n && a.opera,
                        touch: x,
                        msPointer: o,
                        pointer: p,
                        retina: q
                    }
                }(), f.Point = function (a, b, c) {
                    this.x = c ? Math.round(a) : a, this.y = c ? Math.round(b) : b
                }, f.Point.prototype = {
                    clone: function () {
                        return new f.Point(this.x, this.y)
                    },
                    add: function (a) {
                        return this.clone()._add(f.point(a))
                    },
                    _add: function (a) {
                        return this.x += a.x, this.y += a.y, this
                    },
                    subtract: function (a) {
                        return this.clone()._subtract(f.point(a))
                    },
                    _subtract: function (a) {
                        return this.x -= a.x, this.y -= a.y, this
                    },
                    divideBy: function (a) {
                        return this.clone()._divideBy(a)
                    },
                    _divideBy: function (a) {
                        return this.x /= a, this.y /= a, this
                    },
                    multiplyBy: function (a) {
                        return this.clone()._multiplyBy(a)
                    },
                    _multiplyBy: function (a) {
                        return this.x *= a, this.y *= a, this
                    },
                    round: function () {
                        return this.clone()._round()
                    },
                    _round: function () {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    },
                    floor: function () {
                        return this.clone()._floor()
                    },
                    _floor: function () {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                    },
                    distanceTo: function (a) {
                        a = f.point(a);
                        var b = a.x - this.x,
                            c = a.y - this.y;
                        return Math.sqrt(b * b + c * c)
                    },
                    equals: function (a) {
                        return a = f.point(a), a.x === this.x && a.y === this.y
                    },
                    contains: function (a) {
                        return a = f.point(a), Math.abs(a.x) <= Math.abs(this.x) && Math.abs(a.y) <= Math.abs(this.y)
                    },
                    toString: function () {
                        return "Point(" + f.Util.formatNum(this.x) + ", " + f.Util.formatNum(this.y) + ")"
                    }
                }, f.point = function (a, b, c) {
                    return a instanceof f.Point ? a : f.Util.isArray(a) ? new f.Point(a[0], a[1]) : a === d || null === a ? a : new f.Point(a, b, c)
                }, f.Bounds = function (a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; d < e; d++) this.extend(c[d])
                }, f.Bounds.prototype = {
                    extend: function (a) {
                        return a = f.point(a), this.min || this.max ? (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)) : (this.min = a.clone(), this.max = a.clone()), this
                    },
                    getCenter: function (a) {
                        return new f.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, a)
                    },
                    getBottomLeft: function () {
                        return new f.Point(this.min.x, this.max.y)
                    },
                    getTopRight: function () {
                        return new f.Point(this.max.x, this.min.y)
                    },
                    getSize: function () {
                        return this.max.subtract(this.min)
                    },
                    contains: function (a) {
                        var b, c;
                        return a = "number" === typeof a[0] || a instanceof f.Point ? f.point(a) : f.bounds(a), a instanceof f.Bounds ? (b = a.min, c = a.max) : b = c = a, b.x >= this.min.x && c.x <= this.max.x && b.y >= this.min.y && c.y <= this.max.y
                    },
                    intersects: function (a) {
                        a = f.bounds(a);
                        var b = this.min,
                            c = this.max,
                            d = a.min,
                            e = a.max,
                            g = e.x >= b.x && d.x <= c.x,
                            h = e.y >= b.y && d.y <= c.y;
                        return g && h
                    },
                    isValid: function () {
                        return !(!this.min || !this.max)
                    }
                }, f.bounds = function (a, b) {
                    return !a || a instanceof f.Bounds ? a : new f.Bounds(a, b)
                }, f.Transformation = function (a, b, c, d) {
                    this._a = a, this._b = b, this._c = c, this._d = d
                }, f.Transformation.prototype = {
                    transform: function (a, b) {
                        return this._transform(a.clone(), b)
                    },
                    _transform: function (a, b) {
                        return b = b || 1, a.x = b * (this._a * a.x + this._b), a.y = b * (this._c * a.y + this._d), a
                    },
                    untransform: function (a, b) {
                        return b = b || 1, new f.Point((a.x / b - this._b) / this._a, (a.y / b - this._d) / this._c)
                    }
                }, f.DomUtil = {
                    get: function (a) {
                        return "string" === typeof a ? c.getElementById(a) : a
                    },
                    getStyle: function (a, b) {
                        var d = a.style[b];
                        if (!d && a.currentStyle && (d = a.currentStyle[b]), (!d || "auto" === d) && c.defaultView) {
                            var e = c.defaultView.getComputedStyle(a, null);
                            d = e ? e[b] : null
                        }
                        return "auto" === d ? null : d
                    },
                    getViewportOffset: function (a) {
                        var b, d = 0,
                            e = 0,
                            g = a,
                            h = c.body,
                            i = c.documentElement;
                        do {
                            if (d += g.offsetTop || 0, e += g.offsetLeft || 0, d += parseInt(f.DomUtil.getStyle(g, "borderTopWidth"), 10) || 0, e += parseInt(f.DomUtil.getStyle(g, "borderLeftWidth"), 10) || 0, b = f.DomUtil.getStyle(g, "position"), g.offsetParent === h && "absolute" === b) break;
                            if ("fixed" === b) {
                                d += h.scrollTop || i.scrollTop || 0, e += h.scrollLeft || i.scrollLeft || 0;
                                break
                            }
                            if ("relative" === b && !g.offsetLeft) {
                                var j = f.DomUtil.getStyle(g, "width"),
                                    k = f.DomUtil.getStyle(g, "max-width"),
                                    l = g.getBoundingClientRect();
                                ("none" !== j || "none" !== k) && (e += l.left + g.clientLeft), d += l.top + (h.scrollTop || i.scrollTop || 0);
                                break
                            }
                            g = g.offsetParent
                        } while (g);
                        g = a;
                        do {
                            if (g === h) break;
                            d -= g.scrollTop || 0, e -= g.scrollLeft || 0, g = g.parentNode
                        } while (g);
                        return new f.Point(e, d)
                    },
                    documentIsLtr: function () {
                        return f.DomUtil._docIsLtrCached || (f.DomUtil._docIsLtrCached = !0, f.DomUtil._docIsLtr = "ltr" === f.DomUtil.getStyle(c.body, "direction")), f.DomUtil._docIsLtr
                    },
                    create: function (a, b, d) {
                        var e = c.createElement(a);
                        return e.className = b, d && d.appendChild(e), e
                    },
                    hasClass: function (a, b) {
                        if (a.classList !== d) return a.classList.contains(b);
                        var c = f.DomUtil._getClass(a);
                        return c.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(c)
                    },
                    addClass: function (a, b) {
                        if (a.classList !== d)
                            for (var c = f.Util.splitWords(b), e = 0, g = c.length; e < g; e++) a.classList.add(c[e]);
                        else if (!f.DomUtil.hasClass(a, b)) {
                            var h = f.DomUtil._getClass(a);
                            f.DomUtil._setClass(a, (h ? h + " " : "") + b)
                        }
                    },
                    removeClass: function (a, b) {
                        a.classList !== d ? a.classList.remove(b) : f.DomUtil._setClass(a, f.Util.trim((" " + f.DomUtil._getClass(a) + " ").replace(" " + b + " ", " ")))
                    },
                    _setClass: function (a, b) {
                        a.className.baseVal === d ? a.className = b : a.className.baseVal = b
                    },
                    _getClass: function (a) {
                        return a.className.baseVal === d ? a.className : a.className.baseVal
                    },
                    setOpacity: function (a, b) {
                        if ("opacity" in a.style) a.style.opacity = b;
                        else if ("filter" in a.style) {
                            var c = !1,
                                d = "DXImageTransform.Microsoft.Alpha";
                            try {
                                c = a.filters.item(d)
                            } catch (e) {
                                if (1 === b) return
                            }
                            b = Math.round(100 * b), c ? (c.Enabled = 100 !== b, c.Opacity = b) : a.style.filter += " progid:" + d + "(opacity=" + b + ")"
                        }
                    },
                    testProp: function (a) {
                        for (var b = c.documentElement.style, d = 0; d < a.length; d++)
                            if (a[d] in b) return a[d];
                        return !1
                    },
                    getTranslateString: function (a) {
                        var b = f.Browser.webkit3d,
                            c = "translate" + (b ? "3d" : "") + "(",
                            d = (b ? ",0" : "") + ")";
                        return c + a.x + "px," + a.y + "px" + d
                    },
                    getScaleString: function (a, b) {
                        var c = f.DomUtil.getTranslateString(b.add(b.multiplyBy(-1 * a))),
                            d = " scale(" + a + ") ";
                        return c + d
                    },
                    setPosition: function (a, b, c) {
                        a._leaflet_pos = b, !c && f.Browser.any3d ? a.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(b) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
                    },
                    getPosition: function (a) {
                        return a._leaflet_pos
                    }
                }, f.DomUtil.TRANSFORM = f.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), f.DomUtil.TRANSITION = f.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), f.DomUtil.TRANSITION_END = "webkitTransition" === f.DomUtil.TRANSITION || "OTransition" === f.DomUtil.TRANSITION ? f.DomUtil.TRANSITION + "End" : "transitionend",
                function () {
                    if ("onselectstart" in c) f.extend(f.DomUtil, {
                        disableTextSelection: function () {
                            f.DomEvent.on(a, "selectstart", f.DomEvent.preventDefault)
                        },
                        enableTextSelection: function () {
                            f.DomEvent.off(a, "selectstart", f.DomEvent.preventDefault)
                        }
                    });
                    else {
                        var b = f.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                        f.extend(f.DomUtil, {
                            disableTextSelection: function () {
                                if (b) {
                                    var a = c.documentElement.style;
                                    this._userSelect = a[b], a[b] = "none"
                                }
                            },
                            enableTextSelection: function () {
                                b && (c.documentElement.style[b] = this._userSelect, delete this._userSelect)
                            }
                        })
                    }
                    f.extend(f.DomUtil, {
                        disableImageDrag: function () {
                            f.DomEvent.on(a, "dragstart", f.DomEvent.preventDefault)
                        },
                        enableImageDrag: function () {
                            f.DomEvent.off(a, "dragstart", f.DomEvent.preventDefault)
                        }
                    })
                }(), f.LatLng = function (a, b, c) {
                    if (a = parseFloat(a), b = parseFloat(b), isNaN(a) || isNaN(b)) throw new Error("Invalid LatLng object: (" + a + ", " + b + ")");
                    this.lat = a, this.lng = b, c !== d && (this.alt = parseFloat(c))
                }, f.extend(f.LatLng, {
                    DEG_TO_RAD: Math.PI / 180,
                    RAD_TO_DEG: 180 / Math.PI,
                    MAX_MARGIN: 1e-9
                }), f.LatLng.prototype = {
                    equals: function (a) {
                        if (!a) return !1;
                        a = f.latLng(a);
                        var b = Math.max(Math.abs(this.lat - a.lat), Math.abs(this.lng - a.lng));
                        return b <= f.LatLng.MAX_MARGIN
                    },
                    toString: function (a) {
                        return "LatLng(" + f.Util.formatNum(this.lat, a) + ", " + f.Util.formatNum(this.lng, a) + ")"
                    },
                    distanceTo: function (a) {
                        a = f.latLng(a);
                        var b = 6378137,
                            c = f.LatLng.DEG_TO_RAD,
                            d = (a.lat - this.lat) * c,
                            e = (a.lng - this.lng) * c,
                            g = this.lat * c,
                            h = a.lat * c,
                            i = Math.sin(d / 2),
                            j = Math.sin(e / 2),
                            k = i * i + j * j * Math.cos(g) * Math.cos(h);
                        return 2 * b * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k))
                    },
                    wrap: function (a, b) {
                        var c = this.lng;
                        return a = a || -180, b = b || 180, c = (c + b) % (b - a) + (c < a || c === b ? b : a), new f.LatLng(this.lat, c)
                    }
                }, f.latLng = function (a, b) {
                    return a instanceof f.LatLng ? a : f.Util.isArray(a) ? "number" === typeof a[0] || "string" === typeof a[0] ? new f.LatLng(a[0], a[1], a[2]) : null : a === d || null === a ? a : "object" === typeof a && "lat" in a ? new f.LatLng(a.lat, "lng" in a ? a.lng : a.lon) : b === d ? null : new f.LatLng(a, b)
                }, f.LatLngBounds = function (a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; d < e; d++) this.extend(c[d])
                }, f.LatLngBounds.prototype = {
                    extend: function (a) {
                        if (!a) return this;
                        var b = f.latLng(a);
                        return a = null !== b ? b : f.latLngBounds(a), a instanceof f.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(a.lat, this._southWest.lat), this._southWest.lng = Math.min(a.lng, this._southWest.lng), this._northEast.lat = Math.max(a.lat, this._northEast.lat), this._northEast.lng = Math.max(a.lng, this._northEast.lng)) : (this._southWest = new f.LatLng(a.lat, a.lng), this._northEast = new f.LatLng(a.lat, a.lng)) : a instanceof f.LatLngBounds && (this.extend(a._southWest), this.extend(a._northEast)), this
                    },
                    pad: function (a) {
                        var b = this._southWest,
                            c = this._northEast,
                            d = Math.abs(b.lat - c.lat) * a,
                            e = Math.abs(b.lng - c.lng) * a;
                        return new f.LatLngBounds(new f.LatLng(b.lat - d, b.lng - e), new f.LatLng(c.lat + d, c.lng + e))
                    },
                    getCenter: function () {
                        return new f.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                    },
                    getSouthWest: function () {
                        return this._southWest
                    },
                    getNorthEast: function () {
                        return this._northEast
                    },
                    getNorthWest: function () {
                        return new f.LatLng(this.getNorth(), this.getWest())
                    },
                    getSouthEast: function () {
                        return new f.LatLng(this.getSouth(), this.getEast())
                    },
                    getWest: function () {
                        return this._southWest.lng
                    },
                    getSouth: function () {
                        return this._southWest.lat
                    },
                    getEast: function () {
                        return this._northEast.lng
                    },
                    getNorth: function () {
                        return this._northEast.lat
                    },
                    contains: function (a) {
                        a = "number" === typeof a[0] || a instanceof f.LatLng ? f.latLng(a) : f.latLngBounds(a);
                        var b, c, d = this._southWest,
                            e = this._northEast;
                        return a instanceof f.LatLngBounds ? (b = a.getSouthWest(), c = a.getNorthEast()) : b = c = a, d && b && e && c ? b.lat >= d.lat && c.lat <= e.lat && b.lng >= d.lng && c.lng <= e.lng : !1
                    },
                    intersects: function (a) {
                        a = f.latLngBounds(a);
                        var b = this._southWest,
                            c = this._northEast,
                            d = a.getSouthWest(),
                            e = a.getNorthEast(),
                            g = e.lat >= b.lat && d.lat <= c.lat,
                            h = e.lng >= b.lng && d.lng <= c.lng;
                        return g && h
                    },
                    toBBoxString: function () {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                    },
                    equals: function (a) {
                        return a ? (a = f.latLngBounds(a), this._southWest.equals(a.getSouthWest()) && this._northEast.equals(a.getNorthEast())) : !1
                    },
                    isValid: function () {
                        return !(!this._southWest || !this._northEast)
                    }
                }, f.latLngBounds = function (a, b) {
                    return !a || a instanceof f.LatLngBounds ? a : new f.LatLngBounds(a, b)
                }, f.Projection = {}, f.Projection.SphericalMercator = {
                    MAX_LATITUDE: 85.0511287798,
                    project: function (a) {
                        var b = f.LatLng.DEG_TO_RAD,
                            c = this.MAX_LATITUDE,
                            d = Math.max(Math.min(c, a.lat), -c),
                            e = a.lng * b,
                            g = d * b;
                        return g = Math.log(Math.tan(Math.PI / 4 + g / 2)), new f.Point(e, g)
                    },
                    unproject: function (a) {
                        var b = f.LatLng.RAD_TO_DEG,
                            c = a.x * b,
                            d = (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * b;
                        return new f.LatLng(d, c)
                    }
                }, f.Projection.LonLat = {
                    project: function (a) {
                        return new f.Point(a.lng, a.lat)
                    },
                    unproject: function (a) {
                        return new f.LatLng(a.y, a.x)
                    }
                }, f.CRS = {
                    latLngToPoint: function (a, b) {
                        var c = this.projection.project(a),
                            d = this.scale(b);
                        return this.transformation._transform(c, d)
                    },
                    pointToLatLng: function (a, b) {
                        var c = this.scale(b),
                            d = this.transformation.untransform(a, c);
                        return this.projection.unproject(d)
                    },
                    project: function (a) {
                        return this.projection.project(a)
                    },
                    scale: function (a) {
                        return 256 * Math.pow(2, a)
                    },
                    getSize: function (a) {
                        var b = this.scale(a);
                        return f.point(b, b)
                    }
                }, f.CRS.Simple = f.extend({}, f.CRS, {
                    projection: f.Projection.LonLat,
                    transformation: new f.Transformation(1, 0, -1, 0),
                    scale: function (a) {
                        return Math.pow(2, a)
                    }
                }), f.CRS.EPSG3857 = f.extend({}, f.CRS, {
                    code: "EPSG:3857",
                    projection: f.Projection.SphericalMercator,
                    transformation: new f.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                    project: function (a) {
                        var b = this.projection.project(a),
                            c = 6378137;
                        return b.multiplyBy(c)
                    }
                }), f.CRS.EPSG900913 = f.extend({}, f.CRS.EPSG3857, {
                    code: "EPSG:900913"
                }), f.CRS.EPSG4326 = f.extend({}, f.CRS, {
                    code: "EPSG:4326",
                    projection: f.Projection.LonLat,
                    transformation: new f.Transformation(1 / 360, .5, -1 / 360, .5)
                }), f.Map = f.Class.extend({
                    includes: f.Mixin.Events,
                    options: {
                        crs: f.CRS.EPSG3857,
                        fadeAnimation: f.DomUtil.TRANSITION && !f.Browser.android23,
                        trackResize: !0,
                        markerZoomAnimation: f.DomUtil.TRANSITION && f.Browser.any3d
                    },
                    initialize: function (a, b) {
                        b = f.setOptions(this, b), this._initContainer(a), this._initLayout(), this._onResize = f.bind(this._onResize, this), this._initEvents(), b.maxBounds && this.setMaxBounds(b.maxBounds), b.center && b.zoom !== d && this.setView(f.latLng(b.center), b.zoom, {
                            reset: !0
                        }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(b.layers)
                    },
                    setView: function (a, b) {
                        return b = b === d ? this.getZoom() : b, this._resetView(f.latLng(a), this._limitZoom(b)), this
                    },
                    setZoom: function (a, b) {
                        return this._loaded ? this.setView(this.getCenter(), a, {
                            zoom: b
                        }) : (this._zoom = this._limitZoom(a), this)
                    },
                    zoomIn: function (a, b) {
                        return this.setZoom(this._zoom + (a || 1), b)
                    },
                    zoomOut: function (a, b) {
                        return this.setZoom(this._zoom - (a || 1), b)
                    },
                    setZoomAround: function (a, b, c) {
                        var d = this.getZoomScale(b),
                            e = this.getSize().divideBy(2),
                            g = a instanceof f.Point ? a : this.latLngToContainerPoint(a),
                            h = g.subtract(e).multiplyBy(1 - 1 / d),
                            i = this.containerPointToLatLng(e.add(h));
                        return this.setView(i, b, {
                            zoom: c
                        })
                    },
                    fitBounds: function (a, b) {
                        b = b || {}, a = a.getBounds ? a.getBounds() : f.latLngBounds(a);
                        var c = f.point(b.paddingTopLeft || b.padding || [0, 0]),
                            d = f.point(b.paddingBottomRight || b.padding || [0, 0]),
                            e = this.getBoundsZoom(a, !1, c.add(d)),
                            g = d.subtract(c).divideBy(2),
                            h = this.project(a.getSouthWest(), e),
                            i = this.project(a.getNorthEast(), e),
                            j = this.unproject(h.add(i).divideBy(2).add(g), e);
                        return e = b && b.maxZoom ? Math.min(b.maxZoom, e) : e, this.setView(j, e, b)
                    },
                    fitWorld: function (a) {
                        return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], a)
                    },
                    panTo: function (a, b) {
                        return this.setView(a, this._zoom, {
                            pan: b
                        })
                    },
                    panBy: function (a) {
                        return this.fire("movestart"), this._rawPanBy(f.point(a)), this.fire("move"), this.fire("moveend")
                    },
                    setMaxBounds: function (a) {
                        return a = f.latLngBounds(a), this.options.maxBounds = a, a ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                    },
                    panInsideBounds: function (a, b) {
                        var c = this.getCenter(),
                            d = this._limitCenter(c, this._zoom, a);
                        return c.equals(d) ? this : this.panTo(d, b)
                    },
                    addLayer: function (a) {
                        var b = f.stamp(a);
                        return this._layers[b] ? this : (this._layers[b] = a, !a.options || isNaN(a.options.maxZoom) && isNaN(a.options.minZoom) || (this._zoomBoundLayers[b] = a, this._updateZoomLevels()), this.options.zoomAnimation && f.TileLayer && a instanceof f.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, a.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(a), this)
                    },
                    removeLayer: function (a) {
                        var b = f.stamp(a);
                        return this._layers[b] ? (this._loaded && a.onRemove(this), delete this._layers[b], this._loaded && this.fire("layerremove", {
                            layer: a
                        }), this._zoomBoundLayers[b] && (delete this._zoomBoundLayers[b], this._updateZoomLevels()), this.options.zoomAnimation && f.TileLayer && a instanceof f.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, a.off("load", this._onTileLayerLoad, this)), this) : this
                    },
                    hasLayer: function (a) {
                        return a ? f.stamp(a) in this._layers : !1
                    },
                    eachLayer: function (a, b) {
                        for (var c in this._layers) a.call(b, this._layers[c]);
                        return this
                    },
                    invalidateSize: function (a) {
                        if (!this._loaded) return this;
                        a = f.extend({
                            animate: !1,
                            pan: !0
                        }, a === !0 ? {
                            animate: !0
                        } : a);
                        var b = this.getSize();
                        this._sizeChanged = !0, this._initialCenter = null;
                        var c = this.getSize(),
                            d = b.divideBy(2).round(),
                            e = c.divideBy(2).round(),
                            g = d.subtract(e);
                        return g.x || g.y ? (a.animate && a.pan ? this.panBy(g) : (a.pan && this._rawPanBy(g), this.fire("move"), a.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(f.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                            oldSize: b,
                            newSize: c
                        })) : this
                    },
                    addHandler: function (a, b) {
                        if (!b) return this;
                        var c = this[a] = new b(this);
                        return this._handlers.push(c), this.options[a] && c.enable(), this
                    },
                    remove: function () {
                        this._loaded && this.fire("unload"), this._initEvents("off");
                        try {
                            delete this._container._leaflet
                        } catch (a) {
                            this._container._leaflet = d
                        }
                        return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
                    },
                    getCenter: function () {
                        return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                    },
                    getZoom: function () {
                        return this._zoom
                    },
                    getBounds: function () {
                        var a = this.getPixelBounds(),
                            b = this.unproject(a.getBottomLeft()),
                            c = this.unproject(a.getTopRight());
                        return new f.LatLngBounds(b, c)
                    },
                    getMinZoom: function () {
                        return this.options.minZoom === d ? this._layersMinZoom === d ? 0 : this._layersMinZoom : this.options.minZoom
                    },
                    getMaxZoom: function () {
                        return this.options.maxZoom === d ? this._layersMaxZoom === d ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                    },
                    getBoundsZoom: function (a, b, c) {
                        a = f.latLngBounds(a);
                        var d, e = this.getMinZoom() - (b ? 1 : 0),
                            g = this.getMaxZoom(),
                            h = this.getSize(),
                            i = a.getNorthWest(),
                            j = a.getSouthEast(),
                            k = !0;
                        c = f.point(c || [0, 0]);
                        do e++, d = this.project(j, e).subtract(this.project(i, e)).add(c), k = b ? d.x < h.x || d.y < h.y : h.contains(d); while (k && e <= g);
                        return k && b ? null : b ? e : e - 1
                    },
                    getSize: function () {
                        return (!this._size || this._sizeChanged) && (this._size = new f.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                    },
                    getPixelBounds: function () {
                        var a = this._getTopLeftPoint();
                        return new f.Bounds(a, a.add(this.getSize()))
                    },
                    getPixelOrigin: function () {
                        return this._checkIfLoaded(), this._initialTopLeftPoint
                    },
                    getPanes: function () {
                        return this._panes
                    },
                    getContainer: function () {
                        return this._container
                    },
                    getZoomScale: function (a) {
                        var b = this.options.crs;
                        return b.scale(a) / b.scale(this._zoom)
                    },
                    getScaleZoom: function (a) {
                        return this._zoom + Math.log(a) / Math.LN2
                    },
                    project: function (a, b) {
                        return b = b === d ? this._zoom : b, this.options.crs.latLngToPoint(f.latLng(a), b)
                    },
                    unproject: function (a, b) {
                        return b = b === d ? this._zoom : b, this.options.crs.pointToLatLng(f.point(a), b)
                    },
                    layerPointToLatLng: function (a) {
                        var b = f.point(a).add(this.getPixelOrigin());
                        return this.unproject(b)
                    },
                    latLngToLayerPoint: function (a) {
                        var b = this.project(f.latLng(a))._round();
                        return b._subtract(this.getPixelOrigin())
                    },
                    containerPointToLayerPoint: function (a) {
                        return f.point(a).subtract(this._getMapPanePos())
                    },
                    layerPointToContainerPoint: function (a) {
                        return f.point(a).add(this._getMapPanePos())
                    },
                    containerPointToLatLng: function (a) {
                        var b = this.containerPointToLayerPoint(f.point(a));
                        return this.layerPointToLatLng(b)
                    },
                    latLngToContainerPoint: function (a) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(f.latLng(a)))
                    },
                    mouseEventToContainerPoint: function (a) {
                        return f.DomEvent.getMousePosition(a, this._container)
                    },
                    mouseEventToLayerPoint: function (a) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))
                    },
                    mouseEventToLatLng: function (a) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))
                    },
                    _initContainer: function (a) {
                        var b = this._container = f.DomUtil.get(a);
                        if (!b) throw new Error("Map container not found.");
                        if (b._leaflet) throw new Error("Map container is already initialized.");
                        b._leaflet = !0
                    },
                    _initLayout: function () {
                        var a = this._container;
                        f.DomUtil.addClass(a, "leaflet-container" + (f.Browser.touch ? " leaflet-touch" : "") + (f.Browser.retina ? " leaflet-retina" : "") + (f.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                        var b = f.DomUtil.getStyle(a, "position");
                        "absolute" !== b && "relative" !== b && "fixed" !== b && (a.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                    },
                    _initPanes: function () {
                        var a = this._panes = {};
                        this._mapPane = a.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = a.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), a.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), a.shadowPane = this._createPane("leaflet-shadow-pane"), a.overlayPane = this._createPane("leaflet-overlay-pane"), a.markerPane = this._createPane("leaflet-marker-pane"), a.popupPane = this._createPane("leaflet-popup-pane");
                        var b = " leaflet-zoom-hide";
                        this.options.markerZoomAnimation || (f.DomUtil.addClass(a.markerPane, b), f.DomUtil.addClass(a.shadowPane, b), f.DomUtil.addClass(a.popupPane, b))
                    },
                    _createPane: function (a, b) {
                        return f.DomUtil.create("div", a, b || this._panes.objectsPane)
                    },
                    _clearPanes: function () {
                        this._container.removeChild(this._mapPane)
                    },
                    _addLayers: function (a) {
                        a = a ? f.Util.isArray(a) ? a : [a] : [];
                        for (var b = 0, c = a.length; b < c; b++) this.addLayer(a[b])
                    },
                    _resetView: function (a, b, c, d) {
                        var e = this._zoom !== b;
                        d || (this.fire("movestart"), e && this.fire("zoomstart")), this._zoom = b, this._initialCenter = a, this._initialTopLeftPoint = this._getNewTopLeftPoint(a), c ? this._initialTopLeftPoint._add(this._getMapPanePos()) : f.DomUtil.setPosition(this._mapPane, new f.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                        var g = !this._loaded;
                        this._loaded = !0, g && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("viewreset", {
                            hard: !c
                        }), this.fire("move"), (e || d) && this.fire("zoomend"), this.fire("moveend", {
                            hard: !c
                        })
                    },
                    _rawPanBy: function (a) {
                        f.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(a))
                    },
                    _getZoomSpan: function () {
                        return this.getMaxZoom() - this.getMinZoom()
                    },
                    _updateZoomLevels: function () {
                        var a, b = 1 / 0,
                            c = -1 / 0,
                            e = this._getZoomSpan();
                        for (a in this._zoomBoundLayers) {
                            var f = this._zoomBoundLayers[a];
                            isNaN(f.options.minZoom) || (b = Math.min(b, f.options.minZoom)), isNaN(f.options.maxZoom) || (c = Math.max(c, f.options.maxZoom))
                        }
                        a === d ? this._layersMaxZoom = this._layersMinZoom = d : (this._layersMaxZoom = c, this._layersMinZoom = b), e !== this._getZoomSpan() && this.fire("zoomlevelschange")
                    },
                    _panInsideMaxBounds: function () {
                        this.panInsideBounds(this.options.maxBounds)
                    },
                    _checkIfLoaded: function () {
                        if (!this._loaded) throw new Error("Set map center and zoom first.")
                    },
                    _initEvents: function (b) {
                        if (f.DomEvent) {
                            b = b || "on", f.DomEvent[b](this._container, "click", this._onMouseClick, this);
                            var c, d, e = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                            for (c = 0, d = e.length; c < d; c++) f.DomEvent[b](this._container, e[c], this._fireMouseEvent, this);
                            this.options.trackResize && f.DomEvent[b](a, "resize", this._onResize, this)
                        }
                    },
                    _onResize: function () {
                        f.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = f.Util.requestAnimFrame(function () {
                            this.invalidateSize({
                                debounceMoveend: !0
                            })
                        }, this, !1, this._container)
                    },
                    _onMouseClick: function (a) {
                        !this._loaded || !a._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || f.DomEvent._skipped(a) || (this.fire("preclick"), this._fireMouseEvent(a))
                    },
                    _fireMouseEvent: function (a) {
                        if (this._loaded && !f.DomEvent._skipped(a)) {
                            var b = a.type;
                            if (b = "mouseenter" === b ? "mouseover" : "mouseleave" === b ? "mouseout" : b, this.hasEventListeners(b)) {
                                "contextmenu" === b && f.DomEvent.preventDefault(a);
                                var c = this.mouseEventToContainerPoint(a),
                                    d = this.containerPointToLayerPoint(c),
                                    e = this.layerPointToLatLng(d);
                                this.fire(b, {
                                    latlng: e,
                                    layerPoint: d,
                                    containerPoint: c,
                                    originalEvent: a
                                })
                            }
                        }
                    },
                    _onTileLayerLoad: function () {
                        this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                    },
                    _clearHandlers: function () {
                        for (var a = 0, b = this._handlers.length; a < b; a++) this._handlers[a].disable()
                    },
                    whenReady: function (a, b) {
                        return this._loaded ? a.call(b || this, this) : this.on("load", a, b), this
                    },
                    _layerAdd: function (a) {
                        a.onAdd(this), this.fire("layeradd", {
                            layer: a
                        })
                    },
                    _getMapPanePos: function () {
                        return f.DomUtil.getPosition(this._mapPane)
                    },
                    _moved: function () {
                        var a = this._getMapPanePos();
                        return a && !a.equals([0, 0])
                    },
                    _getTopLeftPoint: function () {
                        return this.getPixelOrigin().subtract(this._getMapPanePos())
                    },
                    _getNewTopLeftPoint: function (a, b) {
                        var c = this.getSize()._divideBy(2);
                        return this.project(a, b)._subtract(c)._round()
                    },
                    _latLngToNewLayerPoint: function (a, b, c) {
                        var d = this._getNewTopLeftPoint(c, b).add(this._getMapPanePos());
                        return this.project(a, b)._subtract(d)
                    },
                    _getCenterLayerPoint: function () {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                    },
                    _getCenterOffset: function (a) {
                        return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())
                    },
                    _limitCenter: function (a, b, c) {
                        if (!c) return a;
                        var d = this.project(a, b),
                            e = this.getSize().divideBy(2),
                            g = new f.Bounds(d.subtract(e), d.add(e)),
                            h = this._getBoundsOffset(g, c, b);
                        return this.unproject(d.add(h), b)
                    },
                    _limitOffset: function (a, b) {
                        if (!b) return a;
                        var c = this.getPixelBounds(),
                            d = new f.Bounds(c.min.add(a), c.max.add(a));
                        return a.add(this._getBoundsOffset(d, b))
                    },
                    _getBoundsOffset: function (a, b, c) {
                        var d = this.project(b.getNorthWest(), c).subtract(a.min),
                            e = this.project(b.getSouthEast(), c).subtract(a.max),
                            g = this._rebound(d.x, -e.x),
                            h = this._rebound(d.y, -e.y);
                        return new f.Point(g, h)
                    },
                    _rebound: function (a, b) {
                        return a + b > 0 ? Math.round(a - b) / 2 : Math.max(0, Math.ceil(a)) - Math.max(0, Math.floor(b))
                    },
                    _limitZoom: function (a) {
                        var b = this.getMinZoom(),
                            c = this.getMaxZoom();
                        return Math.max(b, Math.min(c, a))
                    }
                }), f.map = function (a, b) {
                    return new f.Map(a, b)
                }, f.Projection.Mercator = {
                    MAX_LATITUDE: 85.0840591556,
                    R_MINOR: 6356752.314245179,
                    R_MAJOR: 6378137,
                    project: function (a) {
                        var b = f.LatLng.DEG_TO_RAD,
                            c = this.MAX_LATITUDE,
                            d = Math.max(Math.min(c, a.lat), -c),
                            e = this.R_MAJOR,
                            g = this.R_MINOR,
                            h = a.lng * b * e,
                            i = d * b,
                            j = g / e,
                            k = Math.sqrt(1 - j * j),
                            l = k * Math.sin(i);
                        l = Math.pow((1 - l) / (1 + l), .5 * k);
                        var m = Math.tan(.5 * (.5 * Math.PI - i)) / l;
                        return i = -e * Math.log(m), new f.Point(h, i)
                    },
                    unproject: function (a) {
                        for (var b, c = f.LatLng.RAD_TO_DEG, d = this.R_MAJOR, e = this.R_MINOR, g = a.x * c / d, h = e / d, i = Math.sqrt(1 - h * h), j = Math.exp(-a.y / d), k = Math.PI / 2 - 2 * Math.atan(j), l = 15, m = 1e-7, n = l, o = .1; Math.abs(o) > m && --n > 0;) b = i * Math.sin(k), o = Math.PI / 2 - 2 * Math.atan(j * Math.pow((1 - b) / (1 + b), .5 * i)) - k, k += o;
                        return new f.LatLng(k * c, g)
                    }
                }, f.CRS.EPSG3395 = f.extend({}, f.CRS, {
                    code: "EPSG:3395",
                    projection: f.Projection.Mercator,
                    transformation: function () {
                        var a = f.Projection.Mercator,
                            b = a.R_MAJOR,
                            c = .5 / (Math.PI * b);
                        return new f.Transformation(c, .5, -c, .5)
                    }()
                }), f.TileLayer = f.Class.extend({
                    includes: f.Mixin.Events,
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        tileSize: 256,
                        subdomains: "abc",
                        errorTileUrl: "",
                        attribution: "",
                        zoomOffset: 0,
                        opacity: 1,
                        unloadInvisibleTiles: f.Browser.mobile,
                        updateWhenIdle: f.Browser.mobile
                    },
                    initialize: function (a, b) {
                        b = f.setOptions(this, b), b.detectRetina && f.Browser.retina && b.maxZoom > 0 && (b.tileSize = Math.floor(b.tileSize / 2), b.zoomOffset++, b.minZoom > 0 && b.minZoom--, this.options.maxZoom--), b.bounds && (b.bounds = f.latLngBounds(b.bounds)), this._url = a;
                        var c = this.options.subdomains;
                        "string" === typeof c && (this.options.subdomains = c.split(""))
                    },
                    onAdd: function (a) {
                        this._map = a, this._animated = a._zoomAnimated, this._initContainer(), a.on({
                            viewreset: this._reset,
                            moveend: this._update
                        }, this), this._animated && a.on({
                            zoomanim: this._animateZoom,
                            zoomend: this._endZoomAnim
                        }, this), this.options.updateWhenIdle || (this._limitedUpdate = f.Util.limitExecByInterval(this._update, 150, this), a.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    onRemove: function (a) {
                        this._container.parentNode.removeChild(this._container), a.off({
                            viewreset: this._reset,
                            moveend: this._update
                        }, this), this._animated && a.off({
                            zoomanim: this._animateZoom,
                            zoomend: this._endZoomAnim
                        }, this), this.options.updateWhenIdle || a.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                    },
                    bringToFront: function () {
                        var a = this._map._panes.tilePane;
                        return this._container && (a.appendChild(this._container), this._setAutoZIndex(a, Math.max)), this
                    },
                    bringToBack: function () {
                        var a = this._map._panes.tilePane;
                        return this._container && (a.insertBefore(this._container, a.firstChild), this._setAutoZIndex(a, Math.min)), this
                    },
                    getAttribution: function () {
                        return this.options.attribution
                    },
                    getContainer: function () {
                        return this._container
                    },
                    setOpacity: function (a) {
                        return this.options.opacity = a, this._map && this._updateOpacity(), this
                    },
                    setZIndex: function (a) {
                        return this.options.zIndex = a, this._updateZIndex(), this
                    },
                    setUrl: function (a, b) {
                        return this._url = a, b || this.redraw(), this
                    },
                    redraw: function () {
                        return this._map && (this._reset({
                            hard: !0
                        }), this._update()), this
                    },
                    _updateZIndex: function () {
                        this._container && this.options.zIndex !== d && (this._container.style.zIndex = this.options.zIndex)
                    },
                    _setAutoZIndex: function (a, b) {
                        var c, d, e, f = a.children,
                            g = -b(1 / 0, -1 / 0);
                        for (d = 0, e = f.length; d < e; d++) f[d] !== this._container && (c = parseInt(f[d].style.zIndex, 10), isNaN(c) || (g = b(g, c)));
                        this.options.zIndex = this._container.style.zIndex = (isFinite(g) ? g : 0) + b(1, -1)
                    },
                    _updateOpacity: function () {
                        var a, b = this._tiles;
                        if (f.Browser.ielt9)
                            for (a in b) f.DomUtil.setOpacity(b[a], this.options.opacity);
                        else f.DomUtil.setOpacity(this._container, this.options.opacity)
                    },
                    _initContainer: function () {
                        var a = this._map._panes.tilePane;
                        if (!this._container) {
                            if (this._container = f.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                                var b = "leaflet-tile-container";
                                this._bgBuffer = f.DomUtil.create("div", b, this._container), this._tileContainer = f.DomUtil.create("div", b, this._container)
                            } else this._tileContainer = this._container;
                            a.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                        }
                    },
                    _reset: function (a) {
                        for (var b in this._tiles) this.fire("tileunload", {
                            tile: this._tiles[b]
                        });
                        this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && a && a.hard && this._clearBgBuffer(), this._initContainer()
                    },
                    _getTileSize: function () {
                        var a = this._map,
                            b = a.getZoom() + this.options.zoomOffset,
                            c = this.options.maxNativeZoom,
                            d = this.options.tileSize;
                        return c && b > c && (d = Math.round(a.getZoomScale(b) / a.getZoomScale(c) * d)), d
                    },
                    _update: function () {
                        if (this._map) {
                            var a = this._map,
                                b = a.getPixelBounds(),
                                c = a.getZoom(),
                                d = this._getTileSize();
                            if (!(c > this.options.maxZoom || c < this.options.minZoom)) {
                                var e = f.bounds(b.min.divideBy(d)._floor(), b.max.divideBy(d)._floor());
                                this._addTilesFromCenterOut(e), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(e)
                            }
                        }
                    },
                    _addTilesFromCenterOut: function (a) {
                        var b, d, e, g = [],
                            h = a.getCenter();
                        for (b = a.min.y; b <= a.max.y; b++)
                            for (d = a.min.x; d <= a.max.x; d++) e = new f.Point(d, b), this._tileShouldBeLoaded(e) && g.push(e);
                        var i = g.length;
                        if (0 !== i) {
                            g.sort(function (a, b) {
                                return a.distanceTo(h) - b.distanceTo(h)
                            });
                            var j = c.createDocumentFragment();
                            for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += i, d = 0; d < i; d++) this._addTile(g[d], j);
                            this._tileContainer.appendChild(j)
                        }
                    },
                    _tileShouldBeLoaded: function (a) {
                        if (a.x + ":" + a.y in this._tiles) return !1;
                        var b = this.options;
                        if (!b.continuousWorld) {
                            var c = this._getWrapTileNum();
                            if (b.noWrap && (a.x < 0 || a.x >= c.x) || a.y < 0 || a.y >= c.y) return !1
                        }
                        if (b.bounds) {
                            var d = b.tileSize,
                                e = a.multiplyBy(d),
                                f = e.add([d, d]),
                                g = this._map.unproject(e),
                                h = this._map.unproject(f);
                            if (b.continuousWorld || b.noWrap || (g = g.wrap(), h = h.wrap()), !b.bounds.intersects([g, h])) return !1
                        }
                        return !0
                    },
                    _removeOtherTiles: function (a) {
                        var b, c, d, e;
                        for (e in this._tiles) b = e.split(":"), c = parseInt(b[0], 10), d = parseInt(b[1], 10), (c < a.min.x || c > a.max.x || d < a.min.y || d > a.max.y) && this._removeTile(e)
                    },
                    _removeTile: function (a) {
                        var b = this._tiles[a];
                        this.fire("tileunload", {
                            tile: b,
                            url: b.src
                        }), this.options.reuseTiles ? (f.DomUtil.removeClass(b, "leaflet-tile-loaded"), this._unusedTiles.push(b)) : b.parentNode === this._tileContainer && this._tileContainer.removeChild(b), f.Browser.android || (b.onload = null, b.src = f.Util.emptyImageUrl), delete this._tiles[a]
                    },
                    _addTile: function (a, b) {
                        var c = this._getTilePos(a),
                            d = this._getTile();
                        f.DomUtil.setPosition(d, c, f.Browser.chrome), this._tiles[a.x + ":" + a.y] = d, this._loadTile(d, a), d.parentNode !== this._tileContainer && b.appendChild(d)
                    },
                    _getZoomForUrl: function () {
                        var a = this.options,
                            b = this._map.getZoom();
                        return a.zoomReverse && (b = a.maxZoom - b), b += a.zoomOffset, a.maxNativeZoom ? Math.min(b, a.maxNativeZoom) : b
                    },
                    _getTilePos: function (a) {
                        var b = this._map.getPixelOrigin(),
                            c = this._getTileSize();
                        return a.multiplyBy(c).subtract(b)
                    },
                    getTileUrl: function (a) {
                        return f.Util.template(this._url, f.extend({
                            s: this._getSubdomain(a),
                            z: a.z,
                            x: a.x,
                            y: a.y
                        }, this.options))
                    },
                    _getWrapTileNum: function () {
                        var a = this._map.options.crs,
                            b = a.getSize(this._map.getZoom());
                        return b.divideBy(this._getTileSize())._floor()
                    },
                    _adjustTilePoint: function (a) {
                        var b = this._getWrapTileNum();
                        this.options.continuousWorld || this.options.noWrap || (a.x = (a.x % b.x + b.x) % b.x), this.options.tms && (a.y = b.y - a.y - 1), a.z = this._getZoomForUrl()
                    },
                    _getSubdomain: function (a) {
                        var b = Math.abs(a.x + a.y) % this.options.subdomains.length;
                        return this.options.subdomains[b]
                    },
                    _getTile: function () {
                        if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                            var a = this._unusedTiles.pop();
                            return this._resetTile(a), a
                        }
                        return this._createTile()
                    },
                    _resetTile: function () {},
                    _createTile: function () {
                        var a = f.DomUtil.create("img", "leaflet-tile");
                        return a.style.width = a.style.height = this._getTileSize() + "px", a.galleryimg = "no", a.onselectstart = a.onmousemove = f.Util.falseFn, f.Browser.ielt9 && this.options.opacity !== d && f.DomUtil.setOpacity(a, this.options.opacity), f.Browser.mobileWebkit3d && (a.style.WebkitBackfaceVisibility = "hidden"), a
                    },
                    _loadTile: function (a, b) {
                        a._layer = this, a.onload = this._tileOnLoad, a.onerror = this._tileOnError, this._adjustTilePoint(b), a.src = this.getTileUrl(b), this.fire("tileloadstart", {
                            tile: a,
                            url: a.src
                        })
                    },
                    _tileLoaded: function () {
                        this._tilesToLoad--, this._animated && f.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(f.bind(this._clearBgBuffer, this), 500)))
                    },
                    _tileOnLoad: function () {
                        var a = this._layer;
                        this.src !== f.Util.emptyImageUrl && (f.DomUtil.addClass(this, "leaflet-tile-loaded"), a.fire("tileload", {
                            tile: this,
                            url: this.src
                        })), a._tileLoaded()
                    },
                    _tileOnError: function () {
                        var a = this._layer;
                        a.fire("tileerror", {
                            tile: this,
                            url: this.src
                        });
                        var b = a.options.errorTileUrl;
                        b && (this.src = b), a._tileLoaded()
                    }
                }), f.tileLayer = function (a, b) {
                    return new f.TileLayer(a, b)
                }, f.TileLayer.WMS = f.TileLayer.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        version: "1.1.1",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1
                    },
                    initialize: function (a, b) {
                        this._url = a;
                        var c = f.extend({}, this.defaultWmsParams),
                            d = b.tileSize || this.options.tileSize;
                        c.width = c.height = b.detectRetina && f.Browser.retina ? 2 * d : d;
                        for (var e in b) this.options.hasOwnProperty(e) || "crs" === e || (c[e] = b[e]);
                        this.wmsParams = c, f.setOptions(this, b)
                    },
                    onAdd: function (a) {
                        this._crs = this.options.crs || a.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var b = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[b] = this._crs.code, f.TileLayer.prototype.onAdd.call(this, a)
                    },
                    getTileUrl: function (a) {
                        var b = this._map,
                            c = this.options.tileSize,
                            d = a.multiplyBy(c),
                            e = d.add([c, c]),
                            g = this._crs.project(b.unproject(d, a.z)),
                            h = this._crs.project(b.unproject(e, a.z)),
                            i = this._wmsVersion >= 1.3 && this._crs === f.CRS.EPSG4326 ? [h.y, g.x, g.y, h.x].join(",") : [g.x, h.y, h.x, g.y].join(","),
                            j = f.Util.template(this._url, {
                                s: this._getSubdomain(a)
                            });
                        return j + f.Util.getParamString(this.wmsParams, j, !0) + "&BBOX=" + i
                    },
                    setParams: function (a, b) {
                        return f.extend(this.wmsParams, a), b || this.redraw(), this
                    }
                }), f.tileLayer.wms = function (a, b) {
                    return new f.TileLayer.WMS(a, b)
                }, f.TileLayer.Canvas = f.TileLayer.extend({
                    options: {
                        async: !1
                    },
                    initialize: function (a) {
                        f.setOptions(this, a)
                    },
                    redraw: function () {
                        this._map && (this._reset({
                            hard: !0
                        }), this._update());
                        for (var a in this._tiles) this._redrawTile(this._tiles[a]);
                        return this
                    },
                    _redrawTile: function (a) {
                        this.drawTile(a, a._tilePoint, this._map._zoom)
                    },
                    _createTile: function () {
                        var a = f.DomUtil.create("canvas", "leaflet-tile");
                        return a.width = a.height = this.options.tileSize, a.onselectstart = a.onmousemove = f.Util.falseFn, a
                    },
                    _loadTile: function (a, b) {
                        a._layer = this, a._tilePoint = b, this._redrawTile(a), this.options.async || this.tileDrawn(a)
                    },
                    drawTile: function () {},
                    tileDrawn: function (a) {
                        this._tileOnLoad.call(a)
                    }
                }), f.tileLayer.canvas = function (a) {
                    return new f.TileLayer.Canvas(a)
                }, f.ImageOverlay = f.Class.extend({
                    includes: f.Mixin.Events,
                    options: {
                        opacity: 1
                    },
                    initialize: function (a, b, c) {
                        this._url = a, this._bounds = f.latLngBounds(b), f.setOptions(this, c)
                    },
                    onAdd: function (a) {
                        this._map = a, this._image || this._initImage(), a._panes.overlayPane.appendChild(this._image), a.on("viewreset", this._reset, this), a.options.zoomAnimation && f.Browser.any3d && a.on("zoomanim", this._animateZoom, this), this._reset()
                    },
                    onRemove: function (a) {
                        a.getPanes().overlayPane.removeChild(this._image), a.off("viewreset", this._reset, this), a.options.zoomAnimation && a.off("zoomanim", this._animateZoom, this)
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    setOpacity: function (a) {
                        return this.options.opacity = a, this._updateOpacity(), this
                    },
                    bringToFront: function () {
                        return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                    },
                    bringToBack: function () {
                        var a = this._map._panes.overlayPane;
                        return this._image && a.insertBefore(this._image, a.firstChild), this
                    },
                    setUrl: function (a) {
                        this._url = a, this._image.src = this._url
                    },
                    getAttribution: function () {
                        return this.options.attribution
                    },
                    _initImage: function () {
                        this._image = f.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && f.Browser.any3d ? f.DomUtil.addClass(this._image, "leaflet-zoom-animated") : f.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), f.extend(this._image, {
                            galleryimg: "no",
                            onselectstart: f.Util.falseFn,
                            onmousemove: f.Util.falseFn,
                            onload: f.bind(this._onImageLoad, this),
                            src: this._url
                        })
                    },
                    _animateZoom: function (a) {
                        var b = this._map,
                            c = this._image,
                            d = b.getZoomScale(a.zoom),
                            e = this._bounds.getNorthWest(),
                            g = this._bounds.getSouthEast(),
                            h = b._latLngToNewLayerPoint(e, a.zoom, a.center),
                            i = b._latLngToNewLayerPoint(g, a.zoom, a.center)._subtract(h),
                            j = h._add(i._multiplyBy(.5 * (1 - 1 / d)));
                        c.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(j) + " scale(" + d + ") "
                    },
                    _reset: function () {
                        var a = this._image,
                            b = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                            c = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(b);
                        f.DomUtil.setPosition(a, b), a.style.width = c.x + "px", a.style.height = c.y + "px"
                    },
                    _onImageLoad: function () {
                        this.fire("load")
                    },
                    _updateOpacity: function () {
                        f.DomUtil.setOpacity(this._image, this.options.opacity)
                    }
                }), f.imageOverlay = function (a, b, c) {
                    return new f.ImageOverlay(a, b, c)
                }, f.Icon = f.Class.extend({
                    options: {
                        className: ""
                    },
                    initialize: function (a) {
                        f.setOptions(this, a)
                    },
                    createIcon: function (a) {
                        return this._createIcon("icon", a)
                    },
                    createShadow: function (a) {
                        return this._createIcon("shadow", a)
                    },
                    _createIcon: function (a, b) {
                        var c = this._getIconUrl(a);
                        if (!c) {
                            if ("icon" === a) throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null
                        }
                        var d;
                        return d = b && "IMG" === b.tagName ? this._createImg(c, b) : this._createImg(c), this._setIconStyles(d, a), d
                    },
                    _setIconStyles: function (a, b) {
                        var c, d = this.options,
                            e = f.point(d[b + "Size"]);
                        c = f.point("shadow" === b ? d.shadowAnchor || d.iconAnchor : d.iconAnchor), !c && e && (c = e.divideBy(2, !0)), a.className = "leaflet-marker-" + b + " " + d.className, c && (a.style.marginLeft = -c.x + "px", a.style.marginTop = -c.y + "px"), e && (a.style.width = e.x + "px", a.style.height = e.y + "px")
                    },
                    _createImg: function (a, b) {
                        return b = b || c.createElement("img"), b.src = a, b
                    },
                    _getIconUrl: function (a) {
                        return f.Browser.retina && this.options[a + "RetinaUrl"] ? this.options[a + "RetinaUrl"] : this.options[a + "Url"]
                    }
                }), f.icon = function (a) {
                    return new f.Icon(a)
                }, f.Icon.Default = f.Icon.extend({
                    options: {
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    },
                    _getIconUrl: function (a) {
                        var b = a + "Url";
                        if (this.options[b]) return this.options[b];
                        f.Browser.retina && "icon" === a && (a += "-2x");
                        var c = f.Icon.Default.imagePath;
                        if (!c) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                        return c + "/marker-" + a + ".png"
                    }
                }), f.Icon.Default.imagePath = function () {
                    var a, b, d, e, f, g = c.getElementsByTagName("script"),
                        h = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                    for (a = 0, b = g.length; a < b; a++)
                        if (d = g[a].src, e = d.match(h)) return f = d.split(h)[0], (f ? f + "/" : "") + "images"
                }(), f.Marker = f.Class.extend({
                    includes: f.Mixin.Events,
                    options: {
                        icon: new f.Icon.Default,
                        title: "",
                        alt: "",
                        clickable: !0,
                        draggable: !1,
                        keyboard: !0,
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250
                    },
                    initialize: function (a, b) {
                        f.setOptions(this, b), this._latlng = f.latLng(a)
                    },
                    onAdd: function (a) {
                        this._map = a, a.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), a.options.zoomAnimation && a.options.markerZoomAnimation && a.on("zoomanim", this._animateZoom, this)
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    onRemove: function (a) {
                        this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), a.off({
                            viewreset: this.update,
                            zoomanim: this._animateZoom
                        }, this), this._map = null
                    },
                    getLatLng: function () {
                        return this._latlng
                    },
                    setLatLng: function (a) {
                        return this._latlng = f.latLng(a), this.update(), this.fire("move", {
                            latlng: this._latlng
                        })
                    },
                    setZIndexOffset: function (a) {
                        return this.options.zIndexOffset = a, this.update(), this
                    },
                    setIcon: function (a) {
                        return this.options.icon = a, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
                    },
                    update: function () {
                        if (this._icon) {
                            var a = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(a)
                        }
                        return this
                    },
                    _initIcon: function () {
                        var a = this.options,
                            b = this._map,
                            c = b.options.zoomAnimation && b.options.markerZoomAnimation,
                            d = c ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                            e = a.icon.createIcon(this._icon),
                            g = !1;
                        e !== this._icon && (this._icon && this._removeIcon(), g = !0, a.title && (e.title = a.title), a.alt && (e.alt = a.alt)), f.DomUtil.addClass(e, d), a.keyboard && (e.tabIndex = "0"), this._icon = e, this._initInteraction(), a.riseOnHover && f.DomEvent.on(e, "mouseover", this._bringToFront, this).on(e, "mouseout", this._resetZIndex, this);
                        var h = a.icon.createShadow(this._shadow),
                            i = !1;
                        h !== this._shadow && (this._removeShadow(), i = !0), h && f.DomUtil.addClass(h, d), this._shadow = h, a.opacity < 1 && this._updateOpacity();
                        var j = this._map._panes;
                        g && j.markerPane.appendChild(this._icon), h && i && j.shadowPane.appendChild(this._shadow)
                    },
                    _removeIcon: function () {
                        this.options.riseOnHover && f.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
                    },
                    _removeShadow: function () {
                        this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
                    },
                    _setPos: function (a) {
                        f.DomUtil.setPosition(this._icon, a), this._shadow && f.DomUtil.setPosition(this._shadow, a), this._zIndex = a.y + this.options.zIndexOffset, this._resetZIndex()
                    },
                    _updateZIndex: function (a) {
                        this._icon.style.zIndex = this._zIndex + a
                    },
                    _animateZoom: function (a) {
                        var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center).round();
                        this._setPos(b)
                    },
                    _initInteraction: function () {
                        if (this.options.clickable) {
                            var a = this._icon,
                                b = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                            f.DomUtil.addClass(a, "leaflet-clickable"), f.DomEvent.on(a, "click", this._onMouseClick, this), f.DomEvent.on(a, "keypress", this._onKeyPress, this);
                            for (var c = 0; c < b.length; c++) f.DomEvent.on(a, b[c], this._fireMouseEvent, this);
                            f.Handler.MarkerDrag && (this.dragging = new f.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                        }
                    },
                    _onMouseClick: function (a) {
                        var b = this.dragging && this.dragging.moved();
                        (this.hasEventListeners(a.type) || b) && f.DomEvent.stopPropagation(a), b || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(a.type, {
                            originalEvent: a,
                            latlng: this._latlng
                        })
                    },
                    _onKeyPress: function (a) {
                        13 === a.keyCode && this.fire("click", {
                            originalEvent: a,
                            latlng: this._latlng
                        })
                    },
                    _fireMouseEvent: function (a) {
                        this.fire(a.type, {
                            originalEvent: a,
                            latlng: this._latlng
                        }), "contextmenu" === a.type && this.hasEventListeners(a.type) && f.DomEvent.preventDefault(a), "mousedown" !== a.type ? f.DomEvent.stopPropagation(a) : f.DomEvent.preventDefault(a)
                    },
                    setOpacity: function (a) {
                        return this.options.opacity = a, this._map && this._updateOpacity(), this
                    },
                    _updateOpacity: function () {
                        f.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && f.DomUtil.setOpacity(this._shadow, this.options.opacity)
                    },
                    _bringToFront: function () {
                        this._updateZIndex(this.options.riseOffset)
                    },
                    _resetZIndex: function () {
                        this._updateZIndex(0)
                    }
                }), f.marker = function (a, b) {
                    return new f.Marker(a, b)
                }, f.DivIcon = f.Icon.extend({
                    options: {
                        iconSize: [12, 12],
                        className: "leaflet-div-icon",
                        html: !1
                    },
                    createIcon: function (a) {
                        var b = a && "DIV" === a.tagName ? a : c.createElement("div"),
                            d = this.options;
                        return b.innerHTML = d.html !== !1 ? d.html : "", d.bgPos && (b.style.backgroundPosition = -d.bgPos.x + "px " + -d.bgPos.y + "px"), this._setIconStyles(b, "icon"), b
                    },
                    createShadow: function () {
                        return null
                    }
                }), f.divIcon = function (a) {
                    return new f.DivIcon(a)
                }, f.Map.mergeOptions({
                    closePopupOnClick: !0
                }), f.Popup = f.Class.extend({
                    includes: f.Mixin.Events,
                    options: {
                        minWidth: 50,
                        maxWidth: 300,
                        autoPan: !0,
                        closeButton: !0,
                        offset: [0, 7],
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        className: "",
                        zoomAnimation: !0
                    },
                    initialize: function (a, b) {
                        f.setOptions(this, a), this._source = b, this._animated = f.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
                    },
                    onAdd: function (a) {
                        this._map = a, this._container || this._initLayout();
                        var b = a.options.fadeAnimation;
                        b && f.DomUtil.setOpacity(this._container, 0), a._panes.popupPane.appendChild(this._container), a.on(this._getEvents(), this), this.update(), b && f.DomUtil.setOpacity(this._container, 1), this.fire("open"), a.fire("popupopen", {
                            popup: this
                        }), this._source && this._source.fire("popupopen", {
                            popup: this
                        })
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    openOn: function (a) {
                        return a.openPopup(this), this
                    },
                    onRemove: function (a) {
                        a._panes.popupPane.removeChild(this._container), f.Util.falseFn(this._container.offsetWidth), a.off(this._getEvents(), this), a.options.fadeAnimation && f.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), a.fire("popupclose", {
                            popup: this
                        }), this._source && this._source.fire("popupclose", {
                            popup: this
                        })
                    },
                    getLatLng: function () {
                        return this._latlng
                    },
                    setLatLng: function (a) {
                        return this._latlng = f.latLng(a), this._map && (this._updatePosition(), this._adjustPan()), this
                    },
                    getContent: function () {
                        return this._content
                    },
                    setContent: function (a) {
                        return this._content = a, this.update(), this
                    },
                    update: function () {
                        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                    },
                    _getEvents: function () {
                        var a = {
                            viewreset: this._updatePosition
                        };
                        return this._animated && (a.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (a.preclick = this._close), this.options.keepInView && (a.moveend = this._adjustPan), a
                    },
                    _close: function () {
                        this._map && this._map.closePopup(this)
                    },
                    _initLayout: function () {
                        var a, b = "leaflet-popup",
                            c = b + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                            d = this._container = f.DomUtil.create("div", c);
                        this.options.closeButton && (a = this._closeButton = f.DomUtil.create("a", b + "-close-button", d), a.href = "#close", a.innerHTML = "&#215;", f.DomEvent.disableClickPropagation(a), f.DomEvent.on(a, "click", this._onCloseButtonClick, this));
                        var e = this._wrapper = f.DomUtil.create("div", b + "-content-wrapper", d);
                        f.DomEvent.disableClickPropagation(e), this._contentNode = f.DomUtil.create("div", b + "-content", e), f.DomEvent.disableScrollPropagation(this._contentNode), f.DomEvent.on(e, "contextmenu", f.DomEvent.stopPropagation), this._tipContainer = f.DomUtil.create("div", b + "-tip-container", d), this._tip = f.DomUtil.create("div", b + "-tip", this._tipContainer)
                    },
                    _updateContent: function () {
                        if (this._content) {
                            if ("string" === typeof this._content) this._contentNode.innerHTML = this._content;
                            else {
                                for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                this._contentNode.appendChild(this._content)
                            }
                            this.fire("contentupdate")
                        }
                    },
                    _updateLayout: function () {
                        var a = this._contentNode,
                            b = a.style;
                        b.width = "", b.whiteSpace = "nowrap";
                        var c = a.offsetWidth;
                        c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), b.width = c + 1 + "px", b.whiteSpace = "", b.height = "";
                        var d = a.offsetHeight,
                            e = this.options.maxHeight,
                            g = "leaflet-popup-scrolled";
                        e && d > e ? (b.height = e + "px", f.DomUtil.addClass(a, g)) : f.DomUtil.removeClass(a, g), this._containerWidth = this._container.offsetWidth
                    },
                    _updatePosition: function () {
                        if (this._map) {
                            var a = this._map.latLngToLayerPoint(this._latlng),
                                b = this._animated,
                                c = f.point(this.options.offset);
                            b && f.DomUtil.setPosition(this._container, a), this._containerBottom = -c.y - (b ? 0 : a.y), this._containerLeft = -Math.round(this._containerWidth / 2) + c.x + (b ? 0 : a.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                        }
                    },
                    _zoomAnimation: function (a) {
                        var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center);
                        f.DomUtil.setPosition(this._container, b)
                    },
                    _adjustPan: function () {
                        if (this.options.autoPan) {
                            var a = this._map,
                                b = this._container.offsetHeight,
                                c = this._containerWidth,
                                d = new f.Point(this._containerLeft, -b - this._containerBottom);
                            this._animated && d._add(f.DomUtil.getPosition(this._container));
                            var e = a.layerPointToContainerPoint(d),
                                g = f.point(this.options.autoPanPadding),
                                h = f.point(this.options.autoPanPaddingTopLeft || g),
                                i = f.point(this.options.autoPanPaddingBottomRight || g),
                                j = a.getSize(),
                                k = 0,
                                l = 0;
                            e.x + c + i.x > j.x && (k = e.x + c - j.x + i.x), e.x - k - h.x < 0 && (k = e.x - h.x), e.y + b + i.y > j.y && (l = e.y + b - j.y + i.y), e.y - l - h.y < 0 && (l = e.y - h.y), (k || l) && a.fire("autopanstart").panBy([k, l])
                        }
                    },
                    _onCloseButtonClick: function (a) {
                        this._close(), f.DomEvent.stop(a)
                    }
                }), f.popup = function (a, b) {
                    return new f.Popup(a, b)
                }, f.Map.include({
                    openPopup: function (a, b, c) {
                        if (this.closePopup(), !(a instanceof f.Popup)) {
                            var d = a;
                            a = new f.Popup(c).setLatLng(b).setContent(d)
                        }
                        return a._isOpen = !0, this._popup = a, this.addLayer(a)
                    },
                    closePopup: function (a) {
                        return a && a !== this._popup || (a = this._popup, this._popup = null), a && (this.removeLayer(a), a._isOpen = !1), this
                    }
                }), f.Marker.include({
                    openPopup: function () {
                        return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                    },
                    closePopup: function () {
                        return this._popup && this._popup._close(), this
                    },
                    togglePopup: function () {
                        return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
                    },
                    bindPopup: function (a, b) {
                        var c = f.point(this.options.icon.options.popupAnchor || [0, 0]);
                        return c = c.add(f.Popup.prototype.options.offset), b && b.offset && (c = c.add(b.offset)), b = f.extend({
                            offset: c
                        }, b), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), a instanceof f.Popup ? (f.setOptions(a, b), this._popup = a) : this._popup = new f.Popup(b, this).setContent(a), this
                    },
                    setPopupContent: function (a) {
                        return this._popup && this._popup.setContent(a), this
                    },
                    unbindPopup: function () {
                        return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
                    },
                    getPopup: function () {
                        return this._popup
                    },
                    _movePopup: function (a) {
                        this._popup.setLatLng(a.latlng)
                    }
                }), f.LayerGroup = f.Class.extend({
                    initialize: function (a) {
                        this._layers = {};
                        var b, c;
                        if (a)
                            for (b = 0, c = a.length; b < c; b++) this.addLayer(a[b])
                    },
                    addLayer: function (a) {
                        var b = this.getLayerId(a);
                        return this._layers[b] = a, this._map && this._map.addLayer(a), this
                    },
                    removeLayer: function (a) {
                        var b = a in this._layers ? a : this.getLayerId(a);
                        return this._map && this._layers[b] && this._map.removeLayer(this._layers[b]), delete this._layers[b], this
                    },
                    hasLayer: function (a) {
                        return a ? a in this._layers || this.getLayerId(a) in this._layers : !1
                    },
                    clearLayers: function () {
                        return this.eachLayer(this.removeLayer, this), this
                    },
                    invoke: function (a) {
                        var b, c, d = Array.prototype.slice.call(arguments, 1);
                        for (b in this._layers) c = this._layers[b], c[a] && c[a].apply(c, d);
                        return this
                    },
                    onAdd: function (a) {
                        this._map = a, this.eachLayer(a.addLayer, a)
                    },
                    onRemove: function (a) {
                        this.eachLayer(a.removeLayer, a), this._map = null
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    eachLayer: function (a, b) {
                        for (var c in this._layers) a.call(b, this._layers[c]);
                        return this
                    },
                    getLayer: function (a) {
                        return this._layers[a]
                    },
                    getLayers: function () {
                        var a = [];
                        for (var b in this._layers) a.push(this._layers[b]);
                        return a
                    },
                    setZIndex: function (a) {
                        return this.invoke("setZIndex", a)
                    },
                    getLayerId: function (a) {
                        return f.stamp(a)
                    }
                }), f.layerGroup = function (a) {
                    return new f.LayerGroup(a)
                }, f.FeatureGroup = f.LayerGroup.extend({
                    includes: f.Mixin.Events,
                    statics: {
                        EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                    },
                    addLayer: function (a) {
                        return this.hasLayer(a) ? this : ("on" in a && a.on(f.FeatureGroup.EVENTS, this._propagateEvent, this), f.LayerGroup.prototype.addLayer.call(this, a), this._popupContent && a.bindPopup && a.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                            layer: a
                        }))
                    },
                    removeLayer: function (a) {
                        return this.hasLayer(a) ? (a in this._layers && (a = this._layers[a]), a.off(f.FeatureGroup.EVENTS, this._propagateEvent, this), f.LayerGroup.prototype.removeLayer.call(this, a), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                            layer: a
                        })) : this
                    },
                    bindPopup: function (a, b) {
                        return this._popupContent = a, this._popupOptions = b, this.invoke("bindPopup", a, b)
                    },
                    openPopup: function (a) {
                        for (var b in this._layers) {
                            this._layers[b].openPopup(a);
                            break
                        }
                        return this
                    },
                    setStyle: function (a) {
                        return this.invoke("setStyle", a)
                    },
                    bringToFront: function () {
                        return this.invoke("bringToFront")
                    },
                    bringToBack: function () {
                        return this.invoke("bringToBack")
                    },
                    getBounds: function () {
                        var a = new f.LatLngBounds;
                        return this.eachLayer(function (b) {
                            a.extend(b instanceof f.Marker ? b.getLatLng() : b.getBounds())
                        }), a
                    },
                    _propagateEvent: function (a) {
                        a = f.extend({
                            layer: a.target,
                            target: this
                        }, a), this.fire(a.type, a)
                    }
                }), f.featureGroup = function (a) {
                    return new f.FeatureGroup(a)
                }, f.Path = f.Class.extend({
                    includes: [f.Mixin.Events],
                    statics: {
                        CLIP_PADDING: function () {
                            var b = f.Browser.mobile ? 1280 : 2e3,
                                c = (b / Math.max(a.outerWidth, a.outerHeight) - 1) / 2;
                            return Math.max(0, Math.min(.5, c))
                        }()
                    },
                    options: {
                        stroke: !0,
                        color: "#0033ff",
                        dashArray: null,
                        lineCap: null,
                        lineJoin: null,
                        weight: 5,
                        opacity: .5,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        clickable: !0
                    },
                    initialize: function (a) {
                        f.setOptions(this, a)
                    },
                    onAdd: function (a) {
                        this._map = a, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), a.on({
                            viewreset: this.projectLatlngs,
                            moveend: this._updatePath
                        }, this)
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    onRemove: function (a) {
                        a._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, f.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), a.off({
                            viewreset: this.projectLatlngs,
                            moveend: this._updatePath
                        }, this)
                    },
                    projectLatlngs: function () {},
                    setStyle: function (a) {
                        return f.setOptions(this, a), this._container && this._updateStyle(), this
                    },
                    redraw: function () {
                        return this._map && (this.projectLatlngs(), this._updatePath()), this
                    }
                }), f.Map.include({
                    _updatePathViewport: function () {
                        var a = f.Path.CLIP_PADDING,
                            b = this.getSize(),
                            c = f.DomUtil.getPosition(this._mapPane),
                            d = c.multiplyBy(-1)._subtract(b.multiplyBy(a)._round()),
                            e = d.add(b.multiplyBy(1 + 2 * a)._round());
                        this._pathViewport = new f.Bounds(d, e)
                    }
                }), f.Path.SVG_NS = "http://www.w3.org/2000/svg", f.Browser.svg = !(!c.createElementNS || !c.createElementNS(f.Path.SVG_NS, "svg").createSVGRect), f.Path = f.Path.extend({
                    statics: {
                        SVG: f.Browser.svg
                    },
                    bringToFront: function () {
                        var a = this._map._pathRoot,
                            b = this._container;
                        return b && a.lastChild !== b && a.appendChild(b), this
                    },
                    bringToBack: function () {
                        var a = this._map._pathRoot,
                            b = this._container,
                            c = a.firstChild;
                        return b && c !== b && a.insertBefore(b, c), this
                    },
                    getPathString: function () {},
                    _createElement: function (a) {
                        return c.createElementNS(f.Path.SVG_NS, a)
                    },
                    _initElements: function () {
                        this._map._initPathRoot(), this._initPath(), this._initStyle()
                    },
                    _initPath: function () {
                        this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && f.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
                    },
                    _initStyle: function () {
                        this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                    },
                    _updateStyle: function () {
                        this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                    },
                    _updatePath: function () {
                        var a = this.getPathString();
                        a || (a = "M0 0"), this._path.setAttribute("d", a)
                    },
                    _initEvents: function () {
                        if (this.options.clickable) {
                            (f.Browser.svg || !f.Browser.vml) && f.DomUtil.addClass(this._path, "leaflet-clickable"), f.DomEvent.on(this._container, "click", this._onMouseClick, this);
                            for (var a = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], b = 0; b < a.length; b++) f.DomEvent.on(this._container, a[b], this._fireMouseEvent, this)
                        }
                    },
                    _onMouseClick: function (a) {
                        this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(a)
                    },
                    _fireMouseEvent: function (a) {
                        if (this.hasEventListeners(a.type)) {
                            var b = this._map,
                                c = b.mouseEventToContainerPoint(a),
                                d = b.containerPointToLayerPoint(c),
                                e = b.layerPointToLatLng(d);
                            this.fire(a.type, {
                                latlng: e,
                                layerPoint: d,
                                containerPoint: c,
                                originalEvent: a
                            }), "contextmenu" === a.type && f.DomEvent.preventDefault(a), "mousemove" !== a.type && f.DomEvent.stopPropagation(a)
                        }
                    }
                }), f.Map.include({
                    _initPathRoot: function () {
                        this._pathRoot || (this._pathRoot = f.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && f.Browser.any3d ? (f.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                            zoomanim: this._animatePathZoom,
                            zoomend: this._endPathZoom
                        })) : f.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                    },
                    _animatePathZoom: function (a) {
                        var b = this.getZoomScale(a.zoom),
                            c = this._getCenterOffset(a.center)._multiplyBy(-b)._add(this._pathViewport.min);
                        this._pathRoot.style[f.DomUtil.TRANSFORM] = f.DomUtil.getTranslateString(c) + " scale(" + b + ") ", this._pathZooming = !0
                    },
                    _endPathZoom: function () {
                        this._pathZooming = !1
                    },
                    _updateSvgViewport: function () {
                        if (!this._pathZooming) {
                            this._updatePathViewport();
                            var a = this._pathViewport,
                                b = a.min,
                                c = a.max,
                                d = c.x - b.x,
                                e = c.y - b.y,
                                g = this._pathRoot,
                                h = this._panes.overlayPane;
                            f.Browser.mobileWebkit && h.removeChild(g), f.DomUtil.setPosition(g, b), g.setAttribute("width", d), g.setAttribute("height", e), g.setAttribute("viewBox", [b.x, b.y, d, e].join(" ")), f.Browser.mobileWebkit && h.appendChild(g)
                        }
                    }
                }), f.Path.include({
                    bindPopup: function (a, b) {
                        return a instanceof f.Popup ? this._popup = a : ((!this._popup || b) && (this._popup = new f.Popup(b, this)), this._popup.setContent(a)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                    },
                    unbindPopup: function () {
                        return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                    },
                    openPopup: function (a) {
                        return this._popup && (a = a || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                            latlng: a
                        })), this
                    },
                    closePopup: function () {
                        return this._popup && this._popup._close(), this
                    },
                    _openPopup: function (a) {
                        this._popup.setLatLng(a.latlng), this._map.openPopup(this._popup)
                    }
                }), f.Browser.vml = !f.Browser.svg && function () {
                    try {
                        var a = c.createElement("div");
                        a.innerHTML = '<v:shape adj="1"/>';
                        var b = a.firstChild;
                        return b.style.behavior = "url(#default#VML)", b && "object" === typeof b.adj
                    } catch (d) {
                        return !1
                    }
                }(), f.Path = f.Browser.svg || !f.Browser.vml ? f.Path : f.Path.extend({
                    statics: {
                        VML: !0,
                        CLIP_PADDING: .02
                    },
                    _createElement: function () {
                        try {
                            return c.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function (a) {
                                return c.createElement("<lvml:" + a + ' class="lvml">')
                            }
                        } catch (a) {
                            return function (a) {
                                return c.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                            }
                        }
                    }(),
                    _initPath: function () {
                        var a = this._container = this._createElement("shape");
                        f.DomUtil.addClass(a, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && f.DomUtil.addClass(a, "leaflet-clickable"), a.coordsize = "1 1", this._path = this._createElement("path"), a.appendChild(this._path), this._map._pathRoot.appendChild(a)
                    },
                    _initStyle: function () {
                        this._updateStyle()
                    },
                    _updateStyle: function () {
                        var a = this._stroke,
                            b = this._fill,
                            c = this.options,
                            d = this._container;
                        d.stroked = c.stroke, d.filled = c.fill, c.stroke ? (a || (a = this._stroke = this._createElement("stroke"), a.endcap = "round", d.appendChild(a)), a.weight = c.weight + "px", a.color = c.color, a.opacity = c.opacity, a.dashStyle = c.dashArray ? f.Util.isArray(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : "", c.lineCap && (a.endcap = c.lineCap.replace("butt", "flat")), c.lineJoin && (a.joinstyle = c.lineJoin)) : a && (d.removeChild(a), this._stroke = null), c.fill ? (b || (b = this._fill = this._createElement("fill"), d.appendChild(b)), b.color = c.fillColor || c.color, b.opacity = c.fillOpacity) : b && (d.removeChild(b), this._fill = null)
                    },
                    _updatePath: function () {
                        var a = this._container.style;
                        a.display = "none", this._path.v = this.getPathString() + " ", a.display = ""
                    }
                }), f.Map.include(f.Browser.svg || !f.Browser.vml ? {} : {
                    _initPathRoot: function () {
                        if (!this._pathRoot) {
                            var a = this._pathRoot = c.createElement("div");
                            a.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(a), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                        }
                    }
                }), f.Browser.canvas = function () {
                    return !!c.createElement("canvas").getContext
                }(), f.Path = f.Path.SVG && !a.L_PREFER_CANVAS || !f.Browser.canvas ? f.Path : f.Path.extend({
                    statics: {
                        CANVAS: !0,
                        SVG: !1
                    },
                    redraw: function () {
                        return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                    },
                    setStyle: function (a) {
                        return f.setOptions(this, a), this._map && (this._updateStyle(), this._requestUpdate()), this
                    },
                    onRemove: function (a) {
                        a.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this._map = null
                    },
                    _requestUpdate: function () {
                        this._map && !f.Path._updateRequest && (f.Path._updateRequest = f.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                    },
                    _fireMapMoveEnd: function () {
                        f.Path._updateRequest = null, this.fire("moveend")
                    },
                    _initElements: function () {
                        this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                    },
                    _updateStyle: function () {
                        var a = this.options;
                        a.stroke && (this._ctx.lineWidth = a.weight, this._ctx.strokeStyle = a.color), a.fill && (this._ctx.fillStyle = a.fillColor || a.color)
                    },
                    _drawPath: function () {
                        var a, b, c, d, e, g;
                        for (this._ctx.beginPath(), a = 0, c = this._parts.length; a < c; a++) {
                            for (b = 0, d = this._parts[a].length; b < d; b++) e = this._parts[a][b], g = (0 === b ? "move" : "line") + "To", this._ctx[g](e.x, e.y);
                            this instanceof f.Polygon && this._ctx.closePath()
                        }
                    },
                    _checkIfEmpty: function () {
                        return !this._parts.length
                    },
                    _updatePath: function () {
                        if (!this._checkIfEmpty()) {
                            var a = this._ctx,
                                b = this.options;
                            this._drawPath(), a.save(), this._updateStyle(), b.fill && (a.globalAlpha = b.fillOpacity, a.fill()), b.stroke && (a.globalAlpha = b.opacity, a.stroke()), a.restore()
                        }
                    },
                    _initEvents: function () {
                        this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
                    },
                    _onClick: function (a) {
                        this._containsPoint(a.layerPoint) && this.fire("click", a)
                    },
                    _onMouseMove: function (a) {
                        this._map && !this._map._animatingZoom && (this._containsPoint(a.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", a)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", a)))
                    }
                }), f.Map.include(f.Path.SVG && !a.L_PREFER_CANVAS || !f.Browser.canvas ? {} : {
                    _initPathRoot: function () {
                        var a, b = this._pathRoot;
                        b || (b = this._pathRoot = c.createElement("canvas"), b.style.position = "absolute", a = this._canvasCtx = b.getContext("2d"), a.lineCap = "round", a.lineJoin = "round", this._panes.overlayPane.appendChild(b), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                    },
                    _updateCanvasViewport: function () {
                        if (!this._pathZooming) {
                            this._updatePathViewport();
                            var a = this._pathViewport,
                                b = a.min,
                                c = a.max.subtract(b),
                                d = this._pathRoot;
                            f.DomUtil.setPosition(d, b), d.width = c.x, d.height = c.y, d.getContext("2d").translate(-b.x, -b.y)
                        }
                    }
                }), f.LineUtil = {
                    simplify: function (a, b) {
                        if (!b || !a.length) return a.slice();
                        var c = b * b;
                        return a = this._reducePoints(a, c), a = this._simplifyDP(a, c)
                    },
                    pointToSegmentDistance: function (a, b, c) {
                        return Math.sqrt(this._sqClosestPointOnSegment(a, b, c, !0))
                    },
                    closestPointOnSegment: function (a, b, c) {
                        return this._sqClosestPointOnSegment(a, b, c)
                    },
                    _simplifyDP: function (a, b) {
                        var c = a.length,
                            e = typeof Uint8Array !== d + "" ? Uint8Array : Array,
                            f = new e(c);
                        f[0] = f[c - 1] = 1, this._simplifyDPStep(a, f, b, 0, c - 1);
                        var g, h = [];
                        for (g = 0; g < c; g++) f[g] && h.push(a[g]);
                        return h
                    },
                    _simplifyDPStep: function (a, b, c, d, e) {
                        var f, g, h, i = 0;
                        for (g = d + 1; g <= e - 1; g++) h = this._sqClosestPointOnSegment(a[g], a[d], a[e], !0), h > i && (f = g, i = h);
                        i > c && (b[f] = 1, this._simplifyDPStep(a, b, c, d, f), this._simplifyDPStep(a, b, c, f, e))
                    },
                    _reducePoints: function (a, b) {
                        for (var c = [a[0]], d = 1, e = 0, f = a.length; d < f; d++) this._sqDist(a[d], a[e]) > b && (c.push(a[d]), e = d);
                        return e < f - 1 && c.push(a[f - 1]), c
                    },
                    clipSegment: function (a, b, c, d) {
                        var e, f, g, h = d ? this._lastCode : this._getBitCode(a, c),
                            i = this._getBitCode(b, c);
                        for (this._lastCode = i;;) {
                            if (!(h | i)) return [a, b];
                            if (h & i) return !1;
                            e = h || i, f = this._getEdgeIntersection(a, b, e, c), g = this._getBitCode(f, c), e === h ? (a = f, h = g) : (b = f, i = g)
                        }
                    },
                    _getEdgeIntersection: function (a, b, c, d) {
                        var e = b.x - a.x,
                            g = b.y - a.y,
                            h = d.min,
                            i = d.max;
                        return 8 & c ? new f.Point(a.x + e * (i.y - a.y) / g, i.y) : 4 & c ? new f.Point(a.x + e * (h.y - a.y) / g, h.y) : 2 & c ? new f.Point(i.x, a.y + g * (i.x - a.x) / e) : 1 & c ? new f.Point(h.x, a.y + g * (h.x - a.x) / e) : void 0
                    },
                    _getBitCode: function (a, b) {
                        var c = 0;
                        return a.x < b.min.x ? c |= 1 : a.x > b.max.x && (c |= 2), a.y < b.min.y ? c |= 4 : a.y > b.max.y && (c |= 8), c
                    },
                    _sqDist: function (a, b) {
                        var c = b.x - a.x,
                            d = b.y - a.y;
                        return c * c + d * d
                    },
                    _sqClosestPointOnSegment: function (a, b, c, d) {
                        var e, g = b.x,
                            h = b.y,
                            i = c.x - g,
                            j = c.y - h,
                            k = i * i + j * j;
                        return k > 0 && (e = ((a.x - g) * i + (a.y - h) * j) / k, e > 1 ? (g = c.x, h = c.y) : e > 0 && (g += i * e, h += j * e)), i = a.x - g, j = a.y - h, d ? i * i + j * j : new f.Point(g, h)
                    }
                }, f.Polyline = f.Path.extend({
                    initialize: function (a, b) {
                        f.Path.prototype.initialize.call(this, b), this._latlngs = this._convertLatLngs(a)
                    },
                    options: {
                        smoothFactor: 1,
                        noClip: !1
                    },
                    projectLatlngs: function () {
                        this._originalPoints = [];
                        for (var a = 0, b = this._latlngs.length; a < b; a++) this._originalPoints[a] = this._map.latLngToLayerPoint(this._latlngs[a])
                    },
                    getPathString: function () {
                        for (var a = 0, b = this._parts.length, c = ""; a < b; a++) c += this._getPathPartStr(this._parts[a]);
                        return c
                    },
                    getLatLngs: function () {
                        return this._latlngs
                    },
                    setLatLngs: function (a) {
                        return this._latlngs = this._convertLatLngs(a), this.redraw()
                    },
                    addLatLng: function (a) {
                        return this._latlngs.push(f.latLng(a)), this.redraw()
                    },
                    spliceLatLngs: function () {
                        var a = [].splice.apply(this._latlngs, arguments);
                        return this._convertLatLngs(this._latlngs, !0), this.redraw(), a
                    },
                    closestLayerPoint: function (a) {
                        for (var b, c, d = 1 / 0, e = this._parts, g = null, h = 0, i = e.length; h < i; h++)
                            for (var j = e[h], k = 1, l = j.length; k < l; k++) {
                                b = j[k - 1], c = j[k];
                                var m = f.LineUtil._sqClosestPointOnSegment(a, b, c, !0);
                                m < d && (d = m, g = f.LineUtil._sqClosestPointOnSegment(a, b, c))
                            }
                        return g && (g.distance = Math.sqrt(d)), g
                    },
                    getBounds: function () {
                        return new f.LatLngBounds(this.getLatLngs())
                    },
                    _convertLatLngs: function (a, b) {
                        var c, d, e = b ? a : [];
                        for (c = 0, d = a.length; c < d; c++) {
                            if (f.Util.isArray(a[c]) && "number" !== typeof a[c][0]) return;
                            e[c] = f.latLng(a[c])
                        }
                        return e
                    },
                    _initEvents: function () {
                        f.Path.prototype._initEvents.call(this)
                    },
                    _getPathPartStr: function (a) {
                        for (var b, c = f.Path.VML, d = 0, e = a.length, g = ""; d < e; d++) b = a[d], c && b._round(), g += (d ? "L" : "M") + b.x + " " + b.y;
                        return g
                    },
                    _clipPoints: function () {
                        var a, b, c, d = this._originalPoints,
                            e = d.length;
                        if (this.options.noClip) return void(this._parts = [d]);
                        this._parts = [];
                        var g = this._parts,
                            h = this._map._pathViewport,
                            i = f.LineUtil;
                        for (a = 0, b = 0; a < e - 1; a++) c = i.clipSegment(d[a], d[a + 1], h, a), c && (g[b] = g[b] || [], g[b].push(c[0]), (c[1] !== d[a + 1] || a === e - 2) && (g[b].push(c[1]), b++))
                    },
                    _simplifyPoints: function () {
                        for (var a = this._parts, b = f.LineUtil, c = 0, d = a.length; c < d; c++) a[c] = b.simplify(a[c], this.options.smoothFactor)
                    },
                    _updatePath: function () {
                        this._map && (this._clipPoints(), this._simplifyPoints(), f.Path.prototype._updatePath.call(this))
                    }
                }), f.polyline = function (a, b) {
                    return new f.Polyline(a, b)
                }, f.PolyUtil = {}, f.PolyUtil.clipPolygon = function (a, b) {
                    var c, d, e, g, h, i, j, k, l, m = [1, 4, 2, 8],
                        n = f.LineUtil;
                    for (d = 0, j = a.length; d < j; d++) a[d]._code = n._getBitCode(a[d], b);
                    for (g = 0; g < 4; g++) {
                        for (k = m[g], c = [], d = 0, j = a.length, e = j - 1; d < j; e = d++) h = a[d], i = a[e], h._code & k ? i._code & k || (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)) : (i._code & k && (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)), c.push(h));
                        a = c
                    }
                    return a
                }, f.Polygon = f.Polyline.extend({
                    options: {
                        fill: !0
                    },
                    initialize: function (a, b) {
                        f.Polyline.prototype.initialize.call(this, a, b), this._initWithHoles(a)
                    },
                    _initWithHoles: function (a) {
                        var b, c, d;
                        if (a && f.Util.isArray(a[0]) && "number" !== typeof a[0][0])
                            for (this._latlngs = this._convertLatLngs(a[0]), this._holes = a.slice(1), b = 0, c = this._holes.length; b < c; b++) d = this._holes[b] = this._convertLatLngs(this._holes[b]), d[0].equals(d[d.length - 1]) && d.pop();
                        a = this._latlngs, a.length >= 2 && a[0].equals(a[a.length - 1]) && a.pop()
                    },
                    projectLatlngs: function () {
                        if (f.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                            var a, b, c, d;
                            for (a = 0, c = this._holes.length; a < c; a++)
                                for (this._holePoints[a] = [], b = 0, d = this._holes[a].length; b < d; b++) this._holePoints[a][b] = this._map.latLngToLayerPoint(this._holes[a][b])
                        }
                    },
                    setLatLngs: function (a) {
                        return a && f.Util.isArray(a[0]) && "number" !== typeof a[0][0] ? (this._initWithHoles(a), this.redraw()) : f.Polyline.prototype.setLatLngs.call(this, a)
                    },
                    _clipPoints: function () {
                        var a = this._originalPoints,
                            b = [];
                        if (this._parts = [a].concat(this._holePoints), !this.options.noClip) {
                            for (var c = 0, d = this._parts.length; c < d; c++) {
                                var e = f.PolyUtil.clipPolygon(this._parts[c], this._map._pathViewport);
                                e.length && b.push(e)
                            }
                            this._parts = b
                        }
                    },
                    _getPathPartStr: function (a) {
                        var b = f.Polyline.prototype._getPathPartStr.call(this, a);
                        return b + (f.Browser.svg ? "z" : "x")
                    }
                }), f.polygon = function (a, b) {
                    return new f.Polygon(a, b)
                },
                function () {
                    function a(a) {
                        return f.FeatureGroup.extend({
                            initialize: function (a, b) {
                                this._layers = {}, this._options = b, this.setLatLngs(a)
                            },
                            setLatLngs: function (b) {
                                var c = 0,
                                    d = b.length;
                                for (this.eachLayer(function (a) {
                                    c < d ? a.setLatLngs(b[c++]) : this.removeLayer(a)
                                }, this); c < d;) this.addLayer(new a(b[c++], this._options));
                                return this
                            },
                            getLatLngs: function () {
                                var a = [];
                                return this.eachLayer(function (b) {
                                    a.push(b.getLatLngs())
                                }), a
                            }
                        })
                    }
                    f.MultiPolyline = a(f.Polyline), f.MultiPolygon = a(f.Polygon), f.multiPolyline = function (a, b) {
                        return new f.MultiPolyline(a, b)
                    }, f.multiPolygon = function (a, b) {
                        return new f.MultiPolygon(a, b)
                    }
                }(), f.Rectangle = f.Polygon.extend({
                    initialize: function (a, b) {
                        f.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(a), b)
                    },
                    setBounds: function (a) {
                        this.setLatLngs(this._boundsToLatLngs(a))
                    },
                    _boundsToLatLngs: function (a) {
                        return a = f.latLngBounds(a), [a.getSouthWest(), a.getNorthWest(), a.getNorthEast(), a.getSouthEast()]
                    }
                }), f.rectangle = function (a, b) {
                    return new f.Rectangle(a, b)
                }, f.Circle = f.Path.extend({
                    initialize: function (a, b, c) {
                        f.Path.prototype.initialize.call(this, c), this._latlng = f.latLng(a), this._mRadius = b
                    },
                    options: {
                        fill: !0
                    },
                    setLatLng: function (a) {
                        return this._latlng = f.latLng(a), this.redraw()
                    },
                    setRadius: function (a) {
                        return this._mRadius = a, this.redraw()
                    },
                    projectLatlngs: function () {
                        var a = this._getLngRadius(),
                            b = this._latlng,
                            c = this._map.latLngToLayerPoint([b.lat, b.lng - a]);
                        this._point = this._map.latLngToLayerPoint(b), this._radius = Math.max(this._point.x - c.x, 1)
                    },
                    getBounds: function () {
                        var a = this._getLngRadius(),
                            b = this._mRadius / 40075017 * 360,
                            c = this._latlng;
                        return new f.LatLngBounds([c.lat - b, c.lng - a], [c.lat + b, c.lng + a])
                    },
                    getLatLng: function () {
                        return this._latlng
                    },
                    getPathString: function () {
                        var a = this._point,
                            b = this._radius;
                        return this._checkIfEmpty() ? "" : f.Browser.svg ? "M" + a.x + "," + (a.y - b) + "A" + b + "," + b + ",0,1,1," + (a.x - .1) + "," + (a.y - b) + " z" : (a._round(), b = Math.round(b), "AL " + a.x + "," + a.y + " " + b + "," + b + " 0,23592600")
                    },
                    getRadius: function () {
                        return this._mRadius
                    },
                    _getLatRadius: function () {
                        return this._mRadius / 40075017 * 360
                    },
                    _getLngRadius: function () {
                        return this._getLatRadius() / Math.cos(f.LatLng.DEG_TO_RAD * this._latlng.lat)
                    },
                    _checkIfEmpty: function () {
                        if (!this._map) return !1;
                        var a = this._map._pathViewport,
                            b = this._radius,
                            c = this._point;
                        return c.x - b > a.max.x || c.y - b > a.max.y || c.x + b < a.min.x || c.y + b < a.min.y
                    }
                }), f.circle = function (a, b, c) {
                    return new f.Circle(a, b, c)
                }, f.CircleMarker = f.Circle.extend({
                    options: {
                        radius: 10,
                        weight: 2
                    },
                    initialize: function (a, b) {
                        f.Circle.prototype.initialize.call(this, a, null, b), this._radius = this.options.radius
                    },
                    projectLatlngs: function () {
                        this._point = this._map.latLngToLayerPoint(this._latlng)
                    },
                    _updateStyle: function () {
                        f.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                    },
                    setLatLng: function (a) {
                        return f.Circle.prototype.setLatLng.call(this, a), this._popup && this._popup._isOpen && this._popup.setLatLng(a), this
                    },
                    setRadius: function (a) {
                        return this.options.radius = this._radius = a, this.redraw()
                    },
                    getRadius: function () {
                        return this._radius
                    }
                }), f.circleMarker = function (a, b) {
                    return new f.CircleMarker(a, b)
                }, f.Polyline.include(f.Path.CANVAS ? {
                    _containsPoint: function (a, b) {
                        var c, d, e, g, h, i, j, k = this.options.weight / 2;
                        for (f.Browser.touch && (k += 10), c = 0, g = this._parts.length; c < g; c++)
                            for (j = this._parts[c], d = 0, h = j.length, e = h - 1; d < h; e = d++)
                                if ((b || 0 !== d) && (i = f.LineUtil.pointToSegmentDistance(a, j[e], j[d]), i <= k)) return !0;
                        return !1
                    }
                } : {}), f.Polygon.include(f.Path.CANVAS ? {
                    _containsPoint: function (a) {
                        var b, c, d, e, g, h, i, j, k = !1;
                        if (f.Polyline.prototype._containsPoint.call(this, a, !0)) return !0;
                        for (e = 0, i = this._parts.length; e < i; e++)
                            for (b = this._parts[e], g = 0, j = b.length, h = j - 1; g < j; h = g++) c = b[g], d = b[h], c.y > a.y !== d.y > a.y && a.x < (d.x - c.x) * (a.y - c.y) / (d.y - c.y) + c.x && (k = !k);
                        return k
                    }
                } : {}), f.Circle.include(f.Path.CANVAS ? {
                    _drawPath: function () {
                        var a = this._point;
                        this._ctx.beginPath(), this._ctx.arc(a.x, a.y, this._radius, 0, 2 * Math.PI, !1)
                    },
                    _containsPoint: function (a) {
                        var b = this._point,
                            c = this.options.stroke ? this.options.weight / 2 : 0;
                        return a.distanceTo(b) <= this._radius + c
                    }
                } : {}), f.CircleMarker.include(f.Path.CANVAS ? {
                    _updateStyle: function () {
                        f.Path.prototype._updateStyle.call(this)
                    }
                } : {}), f.GeoJSON = f.FeatureGroup.extend({
                    initialize: function (a, b) {
                        f.setOptions(this, b), this._layers = {}, a && this.addData(a)
                    },
                    addData: function (a) {
                        var b, c, d, e = f.Util.isArray(a) ? a : a.features;
                        if (e) {
                            for (b = 0, c = e.length; b < c; b++) d = e[b], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(e[b]);
                            return this
                        }
                        var g = this.options;
                        if (!g.filter || g.filter(a)) {
                            var h = f.GeoJSON.geometryToLayer(a, g.pointToLayer, g.coordsToLatLng, g);
                            return h.feature = f.GeoJSON.asFeature(a), h.defaultOptions = h.options, this.resetStyle(h), g.onEachFeature && g.onEachFeature(a, h), this.addLayer(h)
                        }
                    },
                    resetStyle: function (a) {
                        var b = this.options.style;
                        b && (f.Util.extend(a.options, a.defaultOptions), this._setLayerStyle(a, b))
                    },
                    setStyle: function (a) {
                        this.eachLayer(function (b) {
                            this._setLayerStyle(b, a)
                        }, this)
                    },
                    _setLayerStyle: function (a, b) {
                        "function" === typeof b && (b = b(a.feature)), a.setStyle && a.setStyle(b)
                    }
                }), f.extend(f.GeoJSON, {
                    geometryToLayer: function (a, b, c, d) {
                        var e, g, h, i, j = "Feature" === a.type ? a.geometry : a,
                            k = j.coordinates,
                            l = [];
                        switch (c = c || this.coordsToLatLng, j.type) {
                        case "Point":
                            return e = c(k), b ? b(a, e) : new f.Marker(e);
                        case "MultiPoint":
                            for (h = 0, i = k.length; h < i; h++) e = c(k[h]), l.push(b ? b(a, e) : new f.Marker(e));
                            return new f.FeatureGroup(l);
                        case "LineString":
                            return g = this.coordsToLatLngs(k, 0, c), new f.Polyline(g, d);
                        case "Polygon":
                            if (2 === k.length && !k[1].length) throw new Error("Invalid GeoJSON object.");
                            return g = this.coordsToLatLngs(k, 1, c), new f.Polygon(g, d);
                        case "MultiLineString":
                            return g = this.coordsToLatLngs(k, 1, c), new f.MultiPolyline(g, d);
                        case "MultiPolygon":
                            return g = this.coordsToLatLngs(k, 2, c), new f.MultiPolygon(g, d);
                        case "GeometryCollection":
                            for (h = 0, i = j.geometries.length; h < i; h++) l.push(this.geometryToLayer({
                                geometry: j.geometries[h],
                                type: "Feature",
                                properties: a.properties
                            }, b, c, d));
                            return new f.FeatureGroup(l);
                        default:
                            throw new Error("Invalid GeoJSON object.")
                        }
                    },
                    coordsToLatLng: function (a) {
                        return new f.LatLng(a[1], a[0], a[2])
                    },
                    coordsToLatLngs: function (a, b, c) {
                        var d, e, f, g = [];
                        for (e = 0, f = a.length; e < f; e++) d = b ? this.coordsToLatLngs(a[e], b - 1, c) : (c || this.coordsToLatLng)(a[e]), g.push(d);
                        return g
                    },
                    latLngToCoords: function (a) {
                        var b = [a.lng, a.lat];
                        return a.alt !== d && b.push(a.alt), b
                    },
                    latLngsToCoords: function (a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(f.GeoJSON.latLngToCoords(a[c]));
                        return b
                    },
                    getFeature: function (a, b) {
                        return a.feature ? f.extend({}, a.feature, {
                            geometry: b
                        }) : f.GeoJSON.asFeature(b)
                    },
                    asFeature: function (a) {
                        return "Feature" === a.type ? a : {
                            type: "Feature",
                            properties: {},
                            geometry: a
                        }
                    }
                });
                var h = {
                    toGeoJSON: function () {
                        return f.GeoJSON.getFeature(this, {
                            type: "Point",
                            coordinates: f.GeoJSON.latLngToCoords(this.getLatLng())
                        })
                    }
                };
                f.Marker.include(h), f.Circle.include(h), f.CircleMarker.include(h), f.Polyline.include({
                    toGeoJSON: function () {
                        return f.GeoJSON.getFeature(this, {
                            type: "LineString",
                            coordinates: f.GeoJSON.latLngsToCoords(this.getLatLngs())
                        })
                    }
                }), f.Polygon.include({
                    toGeoJSON: function () {
                        var a, b, c, d = [f.GeoJSON.latLngsToCoords(this.getLatLngs())];
                        if (d[0].push(d[0][0]), this._holes)
                            for (a = 0, b = this._holes.length; a < b; a++) c = f.GeoJSON.latLngsToCoords(this._holes[a]), c.push(c[0]), d.push(c);
                        return f.GeoJSON.getFeature(this, {
                            type: "Polygon",
                            coordinates: d
                        })
                    }
                }),
                function () {
                    function a(a) {
                        return function () {
                            var b = [];
                            return this.eachLayer(function (a) {
                                b.push(a.toGeoJSON().geometry.coordinates)
                            }), f.GeoJSON.getFeature(this, {
                                type: a,
                                coordinates: b
                            })
                        }
                    }
                    f.MultiPolyline.include({
                        toGeoJSON: a("MultiLineString")
                    }), f.MultiPolygon.include({
                        toGeoJSON: a("MultiPolygon")
                    }), f.LayerGroup.include({
                        toGeoJSON: function () {
                            var b, c = this.feature && this.feature.geometry,
                                d = [];
                            if (c && "MultiPoint" === c.type) return a("MultiPoint").call(this);
                            var e = c && "GeometryCollection" === c.type;
                            return this.eachLayer(function (a) {
                                a.toGeoJSON && (b = a.toGeoJSON(), d.push(e ? b.geometry : f.GeoJSON.asFeature(b)))
                            }), e ? f.GeoJSON.getFeature(this, {
                                geometries: d,
                                type: "GeometryCollection"
                            }) : {
                                type: "FeatureCollection",
                                features: d
                            }
                        }
                    })
                }(), f.geoJson = function (a, b) {
                    return new f.GeoJSON(a, b)
                }, f.DomEvent = {
                    addListener: function (a, b, c, d) {
                        var e, g, h, i = f.stamp(c),
                            j = "_leaflet_" + b + i;
                        return a[j] ? this : (e = function (b) {
                            return c.call(d || a, b || f.DomEvent._getEvent())
                        }, f.Browser.pointer && 0 === b.indexOf("touch") ? this.addPointerListener(a, b, e, i) : (f.Browser.touch && "dblclick" === b && this.addDoubleTapListener && this.addDoubleTapListener(a, e, i), "addEventListener" in a ? "mousewheel" === b ? (a.addEventListener("DOMMouseScroll", e, !1), a.addEventListener(b, e, !1)) : "mouseenter" === b || "mouseleave" === b ? (g = e, h = "mouseenter" === b ? "mouseover" : "mouseout", e = function (b) {
                            return f.DomEvent._checkMouse(a, b) ? g(b) : void 0
                        }, a.addEventListener(h, e, !1)) : "click" === b && f.Browser.android ? (g = e, e = function (a) {
                            return f.DomEvent._filterClick(a, g)
                        }, a.addEventListener(b, e, !1)) : a.addEventListener(b, e, !1) : "attachEvent" in a && a.attachEvent("on" + b, e), a[j] = e, this))
                    },
                    removeListener: function (a, b, c) {
                        var d = f.stamp(c),
                            e = "_leaflet_" + b + d,
                            g = a[e];
                        return g ? (f.Browser.pointer && 0 === b.indexOf("touch") ? this.removePointerListener(a, b, d) : f.Browser.touch && "dblclick" === b && this.removeDoubleTapListener ? this.removeDoubleTapListener(a, d) : "removeEventListener" in a ? "mousewheel" === b ? (a.removeEventListener("DOMMouseScroll", g, !1), a.removeEventListener(b, g, !1)) : "mouseenter" === b || "mouseleave" === b ? a.removeEventListener("mouseenter" === b ? "mouseover" : "mouseout", g, !1) : a.removeEventListener(b, g, !1) : "detachEvent" in a && a.detachEvent("on" + b, g), a[e] = null, this) : this
                    },
                    stopPropagation: function (a) {
                        return a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, f.DomEvent._skipped(a), this
                    },
                    disableScrollPropagation: function (a) {
                        var b = f.DomEvent.stopPropagation;
                        return f.DomEvent.on(a, "mousewheel", b).on(a, "MozMousePixelScroll", b)
                    },
                    disableClickPropagation: function (a) {
                        for (var b = f.DomEvent.stopPropagation, c = f.Draggable.START.length - 1; c >= 0; c--) f.DomEvent.on(a, f.Draggable.START[c], b);
                        return f.DomEvent.on(a, "click", f.DomEvent._fakeStop).on(a, "dblclick", b)
                    },
                    preventDefault: function (a) {
                        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, this
                    },
                    stop: function (a) {
                        return f.DomEvent.preventDefault(a).stopPropagation(a)
                    },
                    getMousePosition: function (a, b) {
                        if (!b) return new f.Point(a.clientX, a.clientY);
                        var c = b.getBoundingClientRect();
                        return new f.Point(a.clientX - c.left - b.clientLeft, a.clientY - c.top - b.clientTop)
                    },
                    getWheelDelta: function (a) {
                        var b = 0;
                        return a.wheelDelta && (b = a.wheelDelta / 120), a.detail && (b = -a.detail / 3), b
                    },
                    _skipEvents: {},
                    _fakeStop: function (a) {
                        f.DomEvent._skipEvents[a.type] = !0
                    },
                    _skipped: function (a) {
                        var b = this._skipEvents[a.type];
                        return this._skipEvents[a.type] = !1, b
                    },
                    _checkMouse: function (a, b) {
                        var c = b.relatedTarget;
                        if (!c) return !0;
                        try {
                            for (; c && c !== a;) c = c.parentNode
                        } catch (d) {
                            return !1
                        }
                        return c !== a
                    },
                    _getEvent: function () {
                        var b = a.event;
                        if (!b)
                            for (var c = arguments.callee.caller; c && (b = c.arguments[0], !b || a.Event !== b.constructor);) c = c.caller;
                        return b
                    },
                    _filterClick: function (a, b) {
                        var c = a.timeStamp || a.originalEvent.timeStamp,
                            d = f.DomEvent._lastClick && c - f.DomEvent._lastClick;
                        return d && d > 100 && d < 1e3 || a.target._simulatedClick && !a._simulated ? void f.DomEvent.stop(a) : (f.DomEvent._lastClick = c, b(a))
                    }
                }, f.DomEvent.on = f.DomEvent.addListener, f.DomEvent.off = f.DomEvent.removeListener, f.Draggable = f.Class.extend({
                    includes: f.Mixin.Events,
                    statics: {
                        START: f.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                        END: {
                            mousedown: "mouseup",
                            touchstart: "touchend",
                            pointerdown: "touchend",
                            MSPointerDown: "touchend"
                        },
                        MOVE: {
                            mousedown: "mousemove",
                            touchstart: "touchmove",
                            pointerdown: "touchmove",
                            MSPointerDown: "touchmove"
                        }
                    },
                    initialize: function (a, b) {
                        this._element = a, this._dragStartTarget = b || a
                    },
                    enable: function () {
                        if (!this._enabled) {
                            for (var a = f.Draggable.START.length - 1; a >= 0; a--) f.DomEvent.on(this._dragStartTarget, f.Draggable.START[a], this._onDown, this);
                            this._enabled = !0
                        }
                    },
                    disable: function () {
                        if (this._enabled) {
                            for (var a = f.Draggable.START.length - 1; a >= 0; a--) f.DomEvent.off(this._dragStartTarget, f.Draggable.START[a], this._onDown, this);
                            this._enabled = !1, this._moved = !1
                        }
                    },
                    _onDown: function (a) {
                        if (this._moved = !1, !a.shiftKey && (1 === a.which || 1 === a.button || a.touches) && (f.DomEvent.stopPropagation(a), !f.Draggable._disabled && (f.DomUtil.disableImageDrag(), f.DomUtil.disableTextSelection(), !this._moving))) {
                            var b = a.touches ? a.touches[0] : a;
                            this._startPoint = new f.Point(b.clientX, b.clientY), this._startPos = this._newPos = f.DomUtil.getPosition(this._element), f.DomEvent.on(c, f.Draggable.MOVE[a.type], this._onMove, this).on(c, f.Draggable.END[a.type], this._onUp, this)
                        }
                    },
                    _onMove: function (a) {
                        if (a.touches && a.touches.length > 1) return void(this._moved = !0);
                        var b = a.touches && 1 === a.touches.length ? a.touches[0] : a,
                            d = new f.Point(b.clientX, b.clientY),
                            e = d.subtract(this._startPoint);
                        (e.x || e.y) && (f.DomEvent.preventDefault(a), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = f.DomUtil.getPosition(this._element).subtract(e), f.DomUtil.addClass(c.body, "leaflet-dragging"), f.DomUtil.addClass(a.target || a.srcElement, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, f.Util.cancelAnimFrame(this._animRequest), this._animRequest = f.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
                    },
                    _updatePosition: function () {
                        this.fire("predrag"), f.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                    },
                    _onUp: function (a) {
                        f.DomUtil.removeClass(c.body, "leaflet-dragging"), f.DomUtil.removeClass(a.target || a.srcElement, "leaflet-drag-target");
                        for (var b in f.Draggable.MOVE) f.DomEvent.off(c, f.Draggable.MOVE[b], this._onMove).off(c, f.Draggable.END[b], this._onUp);
                        f.DomUtil.enableImageDrag(), f.DomUtil.enableTextSelection(), this._moved && this._moving && (f.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                            distance: this._newPos.distanceTo(this._startPos)
                        })), this._moving = !1
                    }
                }), f.Handler = f.Class.extend({
                    initialize: function (a) {
                        this._map = a
                    },
                    enable: function () {
                        this._enabled || (this._enabled = !0, this.addHooks())
                    },
                    disable: function () {
                        this._enabled && (this._enabled = !1, this.removeHooks())
                    },
                    enabled: function () {
                        return !!this._enabled
                    }
                }), f.Map.mergeOptions({
                    dragging: !0,
                    inertia: !f.Browser.android23,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    inertiaThreshold: f.Browser.touch ? 32 : 18,
                    easeLinearity: .25,
                    worldCopyJump: !1
                }), f.Map.Drag = f.Handler.extend({
                    addHooks: function () {
                        if (!this._draggable) {
                            var a = this._map;
                            this._draggable = new f.Draggable(a._mapPane, a._container), this._draggable.on({
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this), a.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), a.on("viewreset", this._onViewReset, this), a.whenReady(this._onViewReset, this))
                        }
                        this._draggable.enable()
                    },
                    removeHooks: function () {
                        this._draggable.disable()
                    },
                    moved: function () {
                        return this._draggable && this._draggable._moved
                    },
                    _onDragStart: function () {
                        var a = this._map;
                        a._panAnim && a._panAnim.stop(), a.fire("movestart").fire("dragstart"), a.options.inertia && (this._positions = [], this._times = [])
                    },
                    _onDrag: function () {
                        if (this._map.options.inertia) {
                            var a = this._lastTime = +new Date,
                                b = this._lastPos = this._draggable._newPos;
                            this._positions.push(b), this._times.push(a), a - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                        }
                        this._map.fire("move").fire("drag")
                    },
                    _onViewReset: function () {
                        var a = this._map.getSize()._divideBy(2),
                            b = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = b.subtract(a).x, this._worldWidth = this._map.project([0, 180]).x
                    },
                    _onPreDrag: function () {
                        var a = this._worldWidth,
                            b = Math.round(a / 2),
                            c = this._initialWorldOffset,
                            d = this._draggable._newPos.x,
                            e = (d - b + c) % a + b - c,
                            f = (d + b + c) % a - b - c,
                            g = Math.abs(e + c) < Math.abs(f + c) ? e : f;
                        this._draggable._newPos.x = g
                    },
                    _onDragEnd: function (a) {
                        var b = this._map,
                            c = b.options,
                            d = +new Date - this._lastTime,
                            e = !c.inertia || d > c.inertiaThreshold || !this._positions[0];
                        if (b.fire("dragend", a), e) b.fire("moveend");
                        else {
                            var g = this._lastPos.subtract(this._positions[0]),
                                h = (this._lastTime + d - this._times[0]) / 1e3,
                                i = c.easeLinearity,
                                j = g.multiplyBy(i / h),
                                k = j.distanceTo([0, 0]),
                                l = Math.min(c.inertiaMaxSpeed, k),
                                m = j.multiplyBy(l / k),
                                n = l / (c.inertiaDeceleration * i),
                                o = m.multiplyBy(-n / 2).round();
                            o.x && o.y ? (o = b._limitOffset(o, b.options.maxBounds), f.Util.requestAnimFrame(function () {
                                b.panBy(o, {
                                    duration: n,
                                    easeLinearity: i,
                                    noMoveStart: !0
                                })
                            })) : b.fire("moveend")
                        }
                    }
                }), f.Map.addInitHook("addHandler", "dragging", f.Map.Drag), f.Map.mergeOptions({
                    doubleClickZoom: !0
                }), f.Map.DoubleClickZoom = f.Handler.extend({
                    addHooks: function () {
                        this._map.on("dblclick", this._onDoubleClick, this)
                    },
                    removeHooks: function () {
                        this._map.off("dblclick", this._onDoubleClick, this)
                    },
                    _onDoubleClick: function (a) {
                        var b = this._map,
                            c = b.getZoom() + (a.originalEvent.shiftKey ? -1 : 1);
                        "center" === b.options.doubleClickZoom ? b.setZoom(c) : b.setZoomAround(a.containerPoint, c)
                    }
                }), f.Map.addInitHook("addHandler", "doubleClickZoom", f.Map.DoubleClickZoom), f.Map.mergeOptions({
                    scrollWheelZoom: !0
                }), f.Map.ScrollWheelZoom = f.Handler.extend({
                    addHooks: function () {
                        f.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), f.DomEvent.on(this._map._container, "MozMousePixelScroll", f.DomEvent.preventDefault), this._delta = 0
                    },
                    removeHooks: function () {
                        f.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), f.DomEvent.off(this._map._container, "MozMousePixelScroll", f.DomEvent.preventDefault)
                    },
                    _onWheelScroll: function (a) {
                        var b = f.DomEvent.getWheelDelta(a);
                        this._delta += b, this._lastMousePos = this._map.mouseEventToContainerPoint(a), this._startTime || (this._startTime = +new Date);
                        var c = Math.max(40 - (+new Date - this._startTime), 0);
                        clearTimeout(this._timer), this._timer = setTimeout(f.bind(this._performZoom, this), c), f.DomEvent.preventDefault(a), f.DomEvent.stopPropagation(a)
                    },
                    _performZoom: function () {
                        var a = this._map,
                            b = this._delta,
                            c = a.getZoom();
                        b = b > 0 ? Math.ceil(b) : Math.floor(b), b = Math.max(Math.min(b, 4), -4), b = a._limitZoom(c + b) - c, this._delta = 0, this._startTime = null, b && ("center" === a.options.scrollWheelZoom ? a.setZoom(c + b) : a.setZoomAround(this._lastMousePos, c + b))
                    }
                }), f.Map.addInitHook("addHandler", "scrollWheelZoom", f.Map.ScrollWheelZoom), f.extend(f.DomEvent, {
                    _touchstart: f.Browser.msPointer ? "MSPointerDown" : f.Browser.pointer ? "pointerdown" : "touchstart",
                    _touchend: f.Browser.msPointer ? "MSPointerUp" : f.Browser.pointer ? "pointerup" : "touchend",
                    addDoubleTapListener: function (a, b, d) {
                        function e(a) {
                            var b;
                            if (f.Browser.pointer ? (o.push(a.pointerId), b = o.length) : b = a.touches.length, !(b > 1)) {
                                var c = Date.now(),
                                    d = c - (h || c);
                                i = a.touches ? a.touches[0] : a, j = d > 0 && d <= k, h = c
                            }
                        }

                        function g(a) {
                            if (f.Browser.pointer) {
                                var c = o.indexOf(a.pointerId);
                                if (-1 === c) return;
                                o.splice(c, 1)
                            }
                            if (j) {
                                if (f.Browser.pointer) {
                                    var d, e = {};
                                    for (var g in i) d = i[g], e[g] = "function" === typeof d ? d.bind(i) : d;
                                    i = e
                                }
                                i.type = "dblclick", b(i), h = null
                            }
                        }
                        var h, i, j = !1,
                            k = 250,
                            l = "_leaflet_",
                            m = this._touchstart,
                            n = this._touchend,
                            o = [];
                        a[l + m + d] = e, a[l + n + d] = g;
                        var p = f.Browser.pointer ? c.documentElement : a;
                        return a.addEventListener(m, e, !1), p.addEventListener(n, g, !1), f.Browser.pointer && p.addEventListener(f.DomEvent.POINTER_CANCEL, g, !1), this
                    },
                    removeDoubleTapListener: function (a, b) {
                        var d = "_leaflet_";
                        return a.removeEventListener(this._touchstart, a[d + this._touchstart + b], !1), (f.Browser.pointer ? c.documentElement : a).removeEventListener(this._touchend, a[d + this._touchend + b], !1), f.Browser.pointer && c.documentElement.removeEventListener(f.DomEvent.POINTER_CANCEL, a[d + this._touchend + b], !1), this
                    }
                }), f.extend(f.DomEvent, {
                    POINTER_DOWN: f.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                    POINTER_MOVE: f.Browser.msPointer ? "MSPointerMove" : "pointermove",
                    POINTER_UP: f.Browser.msPointer ? "MSPointerUp" : "pointerup",
                    POINTER_CANCEL: f.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                    _pointers: [],
                    _pointerDocumentListener: !1,
                    addPointerListener: function (a, b, c, d) {
                        switch (b) {
                        case "touchstart":
                            return this.addPointerListenerStart(a, b, c, d);
                        case "touchend":
                            return this.addPointerListenerEnd(a, b, c, d);
                        case "touchmove":
                            return this.addPointerListenerMove(a, b, c, d);
                        default:
                            throw "Unknown touch event type"
                        }
                    },
                    addPointerListenerStart: function (a, b, d, e) {
                        var g = "_leaflet_",
                            h = this._pointers,
                            i = function (a) {
                                f.DomEvent.preventDefault(a);
                                for (var b = !1, c = 0; c < h.length; c++)
                                    if (h[c].pointerId === a.pointerId) {
                                        b = !0;
                                        break
                                    }
                                b || h.push(a), a.touches = h.slice(), a.changedTouches = [a], d(a)
                            };
                        if (a[g + "touchstart" + e] = i, a.addEventListener(this.POINTER_DOWN, i, !1), !this._pointerDocumentListener) {
                            var j = function (a) {
                                for (var b = 0; b < h.length; b++)
                                    if (h[b].pointerId === a.pointerId) {
                                        h.splice(b, 1);
                                        break
                                    }
                            };
                            c.documentElement.addEventListener(this.POINTER_UP, j, !1), c.documentElement.addEventListener(this.POINTER_CANCEL, j, !1), this._pointerDocumentListener = !0
                        }
                        return this
                    },
                    addPointerListenerMove: function (a, b, c, d) {
                        function e(a) {
                            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType || 0 !== a.buttons) {
                                for (var b = 0; b < g.length; b++)
                                    if (g[b].pointerId === a.pointerId) {
                                        g[b] = a;
                                        break
                                    }
                                a.touches = g.slice(), a.changedTouches = [a], c(a)
                            }
                        }
                        var f = "_leaflet_",
                            g = this._pointers;
                        return a[f + "touchmove" + d] = e, a.addEventListener(this.POINTER_MOVE, e, !1), this
                    },
                    addPointerListenerEnd: function (a, b, c, d) {
                        var e = "_leaflet_",
                            f = this._pointers,
                            g = function (a) {
                                for (var b = 0; b < f.length; b++)
                                    if (f[b].pointerId === a.pointerId) {
                                        f.splice(b, 1);
                                        break
                                    }
                                a.touches = f.slice(), a.changedTouches = [a], c(a)
                            };
                        return a[e + "touchend" + d] = g, a.addEventListener(this.POINTER_UP, g, !1), a.addEventListener(this.POINTER_CANCEL, g, !1), this
                    },
                    removePointerListener: function (a, b, c) {
                        var d = "_leaflet_",
                            e = a[d + b + c];
                        switch (b) {
                        case "touchstart":
                            a.removeEventListener(this.POINTER_DOWN, e, !1);
                            break;
                        case "touchmove":
                            a.removeEventListener(this.POINTER_MOVE, e, !1);
                            break;
                        case "touchend":
                            a.removeEventListener(this.POINTER_UP, e, !1), a.removeEventListener(this.POINTER_CANCEL, e, !1)
                        }
                        return this
                    }
                }), f.Map.mergeOptions({
                    touchZoom: f.Browser.touch && !f.Browser.android23,
                    bounceAtZoomLimits: !0
                }), f.Map.TouchZoom = f.Handler.extend({
                    addHooks: function () {
                        f.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    removeHooks: function () {
                        f.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    _onTouchStart: function (a) {
                        var b = this._map;
                        if (a.touches && 2 === a.touches.length && !b._animatingZoom && !this._zooming) {
                            var d = b.mouseEventToLayerPoint(a.touches[0]),
                                e = b.mouseEventToLayerPoint(a.touches[1]),
                                g = b._getCenterLayerPoint();
                            this._startCenter = d.add(e)._divideBy(2), this._startDist = d.distanceTo(e), this._moved = !1, this._zooming = !0, this._centerOffset = g.subtract(this._startCenter), b._panAnim && b._panAnim.stop(), f.DomEvent.on(c, "touchmove", this._onTouchMove, this).on(c, "touchend", this._onTouchEnd, this), f.DomEvent.preventDefault(a)
                        }
                    },
                    _onTouchMove: function (a) {
                        var b = this._map;
                        if (a.touches && 2 === a.touches.length && this._zooming) {
                            var c = b.mouseEventToLayerPoint(a.touches[0]),
                                d = b.mouseEventToLayerPoint(a.touches[1]);
                            this._scale = c.distanceTo(d) / this._startDist, this._delta = c._add(d)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (b.options.bounceAtZoomLimits || !(b.getZoom() === b.getMinZoom() && this._scale < 1 || b.getZoom() === b.getMaxZoom() && this._scale > 1)) && (this._moved || (f.DomUtil.addClass(b._mapPane, "leaflet-touching"), b.fire("movestart").fire("zoomstart"), this._moved = !0), f.Util.cancelAnimFrame(this._animRequest), this._animRequest = f.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), f.DomEvent.preventDefault(a))
                        }
                    },
                    _updateOnMove: function () {
                        var a = this._map,
                            b = this._getScaleOrigin(),
                            c = a.layerPointToLatLng(b),
                            d = a.getScaleZoom(this._scale);
                        a._animateZoom(c, d, this._startCenter, this._scale, this._delta)
                    },
                    _onTouchEnd: function () {
                        if (!this._moved || !this._zooming) return void(this._zooming = !1);
                        var a = this._map;
                        this._zooming = !1, f.DomUtil.removeClass(a._mapPane, "leaflet-touching"), f.Util.cancelAnimFrame(this._animRequest), f.DomEvent.off(c, "touchmove", this._onTouchMove).off(c, "touchend", this._onTouchEnd);
                        var b = this._getScaleOrigin(),
                            d = a.layerPointToLatLng(b),
                            e = a.getZoom(),
                            g = a.getScaleZoom(this._scale) - e,
                            h = g > 0 ? Math.ceil(g) : Math.floor(g),
                            i = a._limitZoom(e + h),
                            j = a.getZoomScale(i) / this._scale;
                        a._animateZoom(d, i, b, j)
                    },
                    _getScaleOrigin: function () {
                        var a = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                        return this._startCenter.add(a)
                    }
                }), f.Map.addInitHook("addHandler", "touchZoom", f.Map.TouchZoom), f.Map.mergeOptions({
                    tap: !0,
                    tapTolerance: 15
                }), f.Map.Tap = f.Handler.extend({
                    addHooks: function () {
                        f.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                    },
                    removeHooks: function () {
                        f.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                    },
                    _onDown: function (a) {
                        if (a.touches) {
                            if (f.DomEvent.preventDefault(a), this._fireClick = !0, a.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                            var b = a.touches[0],
                                d = b.target;
                            this._startPos = this._newPos = new f.Point(b.clientX, b.clientY), d.tagName && "a" === d.tagName.toLowerCase() && f.DomUtil.addClass(d, "leaflet-active"), this._holdTimeout = setTimeout(f.bind(function () {
                                this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", b))
                            }, this), 1e3), f.DomEvent.on(c, "touchmove", this._onMove, this).on(c, "touchend", this._onUp, this)
                        }
                    },
                    _onUp: function (a) {
                        if (clearTimeout(this._holdTimeout), f.DomEvent.off(c, "touchmove", this._onMove, this).off(c, "touchend", this._onUp, this), this._fireClick && a && a.changedTouches) {
                            var b = a.changedTouches[0],
                                d = b.target;
                            d && d.tagName && "a" === d.tagName.toLowerCase() && f.DomUtil.removeClass(d, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", b)
                        }
                    },
                    _isTapValid: function () {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                    },
                    _onMove: function (a) {
                        var b = a.touches[0];
                        this._newPos = new f.Point(b.clientX, b.clientY)
                    },
                    _simulateEvent: function (b, d) {
                        var e = c.createEvent("MouseEvents");
                        e._simulated = !0, d.target._simulatedClick = !0, e.initMouseEvent(b, !0, !0, a, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(e)
                    }
                }), f.Browser.touch && !f.Browser.pointer && f.Map.addInitHook("addHandler", "tap", f.Map.Tap), f.Map.mergeOptions({
                    boxZoom: !0
                }), f.Map.BoxZoom = f.Handler.extend({
                    initialize: function (a) {
                        this._map = a, this._container = a._container, this._pane = a._panes.overlayPane, this._moved = !1
                    },
                    addHooks: function () {
                        f.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                    },
                    removeHooks: function () {
                        f.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
                    },
                    moved: function () {
                        return this._moved
                    },
                    _onMouseDown: function (a) {
                        return this._moved = !1, !a.shiftKey || 1 !== a.which && 1 !== a.button ? !1 : (f.DomUtil.disableTextSelection(), f.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(a), void f.DomEvent.on(c, "mousemove", this._onMouseMove, this).on(c, "mouseup", this._onMouseUp, this).on(c, "keydown", this._onKeyDown, this))
                    },
                    _onMouseMove: function (a) {
                        this._moved || (this._box = f.DomUtil.create("div", "leaflet-zoom-box", this._pane), f.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                        var b = this._startLayerPoint,
                            c = this._box,
                            d = this._map.mouseEventToLayerPoint(a),
                            e = d.subtract(b),
                            g = new f.Point(Math.min(d.x, b.x), Math.min(d.y, b.y));
                        f.DomUtil.setPosition(c, g), this._moved = !0, c.style.width = Math.max(0, Math.abs(e.x) - 4) + "px", c.style.height = Math.max(0, Math.abs(e.y) - 4) + "px"
                    },
                    _finish: function () {
                        this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), f.DomUtil.enableTextSelection(), f.DomUtil.enableImageDrag(), f.DomEvent.off(c, "mousemove", this._onMouseMove).off(c, "mouseup", this._onMouseUp).off(c, "keydown", this._onKeyDown)
                    },
                    _onMouseUp: function (a) {
                        this._finish();
                        var b = this._map,
                            c = b.mouseEventToLayerPoint(a);
                        if (!this._startLayerPoint.equals(c)) {
                            var d = new f.LatLngBounds(b.layerPointToLatLng(this._startLayerPoint), b.layerPointToLatLng(c));
                            b.fitBounds(d), b.fire("boxzoomend", {
                                boxZoomBounds: d
                            })
                        }
                    },
                    _onKeyDown: function (a) {
                        27 === a.keyCode && this._finish()
                    }
                }), f.Map.addInitHook("addHandler", "boxZoom", f.Map.BoxZoom), f.Map.mergeOptions({
                    keyboard: !0,
                    keyboardPanOffset: 80,
                    keyboardZoomOffset: 1
                }), f.Map.Keyboard = f.Handler.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 173]
                    },
                    initialize: function (a) {
                        this._map = a, this._setPanOffset(a.options.keyboardPanOffset), this._setZoomOffset(a.options.keyboardZoomOffset)
                    },
                    addHooks: function () {
                        var a = this._map._container; - 1 === a.tabIndex && (a.tabIndex = "0"), f.DomEvent.on(a, "focus", this._onFocus, this).on(a, "blur", this._onBlur, this).on(a, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                    },
                    removeHooks: function () {
                        this._removeHooks();
                        var a = this._map._container;
                        f.DomEvent.off(a, "focus", this._onFocus, this).off(a, "blur", this._onBlur, this).off(a, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                    },
                    _onMouseDown: function () {
                        if (!this._focused) {
                            var b = c.body,
                                d = c.documentElement,
                                e = b.scrollTop || d.scrollTop,
                                f = b.scrollLeft || d.scrollLeft;
                            this._map._container.focus(), a.scrollTo(f, e)
                        }
                    },
                    _onFocus: function () {
                        this._focused = !0, this._map.fire("focus")
                    },
                    _onBlur: function () {
                        this._focused = !1, this._map.fire("blur")
                    },
                    _setPanOffset: function (a) {
                        var b, c, d = this._panKeys = {}, e = this.keyCodes;
                        for (b = 0, c = e.left.length; b < c; b++) d[e.left[b]] = [-1 * a, 0];
                        for (b = 0, c = e.right.length; b < c; b++) d[e.right[b]] = [a, 0];
                        for (b = 0, c = e.down.length; b < c; b++) d[e.down[b]] = [0, a];
                        for (b = 0, c = e.up.length; b < c; b++) d[e.up[b]] = [0, -1 * a]
                    },
                    _setZoomOffset: function (a) {
                        var b, c, d = this._zoomKeys = {}, e = this.keyCodes;
                        for (b = 0, c = e.zoomIn.length; b < c; b++) d[e.zoomIn[b]] = a;
                        for (b = 0, c = e.zoomOut.length; b < c; b++) d[e.zoomOut[b]] = -a
                    },
                    _addHooks: function () {
                        f.DomEvent.on(c, "keydown", this._onKeyDown, this)
                    },
                    _removeHooks: function () {
                        f.DomEvent.off(c, "keydown", this._onKeyDown, this)
                    },
                    _onKeyDown: function (a) {
                        var b = a.keyCode,
                            c = this._map;
                        if (b in this._panKeys) {
                            if (c._panAnim && c._panAnim._inProgress) return;
                            c.panBy(this._panKeys[b]), c.options.maxBounds && c.panInsideBounds(c.options.maxBounds)
                        } else {
                            if (!(b in this._zoomKeys)) return;
                            c.setZoom(c.getZoom() + this._zoomKeys[b])
                        }
                        f.DomEvent.stop(a)
                    }
                }), f.Map.addInitHook("addHandler", "keyboard", f.Map.Keyboard), f.Handler.MarkerDrag = f.Handler.extend({
                    initialize: function (a) {
                        this._marker = a
                    },
                    addHooks: function () {
                        var a = this._marker._icon;
                        this._draggable || (this._draggable = new f.Draggable(a, a)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), f.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                    },
                    removeHooks: function () {
                        this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), f.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                    },
                    moved: function () {
                        return this._draggable && this._draggable._moved
                    },
                    _onDragStart: function () {
                        this._marker.closePopup().fire("movestart").fire("dragstart")
                    },
                    _onDrag: function () {
                        var a = this._marker,
                            b = a._shadow,
                            c = f.DomUtil.getPosition(a._icon),
                            d = a._map.layerPointToLatLng(c);
                        b && f.DomUtil.setPosition(b, c), a._latlng = d, a.fire("move", {
                            latlng: d
                        }).fire("drag")
                    },
                    _onDragEnd: function (a) {
                        this._marker.fire("moveend").fire("dragend", a)
                    }
                }), f.Control = f.Class.extend({
                    options: {
                        position: "topright"
                    },
                    initialize: function (a) {
                        f.setOptions(this, a)
                    },
                    getPosition: function () {
                        return this.options.position
                    },
                    setPosition: function (a) {
                        var b = this._map;
                        return b && b.removeControl(this), this.options.position = a, b && b.addControl(this), this
                    },
                    getContainer: function () {
                        return this._container
                    },
                    addTo: function (a) {
                        this._map = a;
                        var b = this._container = this.onAdd(a),
                            c = this.getPosition(),
                            d = a._controlCorners[c];
                        return f.DomUtil.addClass(b, "leaflet-control"), -1 !== c.indexOf("bottom") ? d.insertBefore(b, d.firstChild) : d.appendChild(b), this
                    },
                    removeFrom: function (a) {
                        var b = this.getPosition(),
                            c = a._controlCorners[b];
                        return c.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(a), this
                    },
                    _refocusOnMap: function () {
                        this._map && this._map.getContainer().focus()
                    }
                }), f.control = function (a) {
                    return new f.Control(a)
                }, f.Map.include({
                    addControl: function (a) {
                        return a.addTo(this), this
                    },
                    removeControl: function (a) {
                        return a.removeFrom(this), this
                    },
                    _initControlPos: function () {
                        function a(a, e) {
                            var g = c + a + " " + c + e;
                            b[a + e] = f.DomUtil.create("div", g, d)
                        }
                        var b = this._controlCorners = {}, c = "leaflet-",
                            d = this._controlContainer = f.DomUtil.create("div", c + "control-container", this._container);
                        a("top", "left"), a("top", "right"), a("bottom", "left"), a("bottom", "right")
                    },
                    _clearControlPos: function () {
                        this._container.removeChild(this._controlContainer)
                    }
                }), f.Control.Zoom = f.Control.extend({
                    options: {
                        position: "topleft",
                        zoomInText: "+",
                        zoomInTitle: "Zoom in",
                        zoomOutText: "-",
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function (a) {
                        var b = "leaflet-control-zoom",
                            c = f.DomUtil.create("div", b + " leaflet-bar");
                        return this._map = a, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, b + "-in", c, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, b + "-out", c, this._zoomOut, this), this._updateDisabled(), a.on("zoomend zoomlevelschange", this._updateDisabled, this), c
                    },
                    onRemove: function (a) {
                        a.off("zoomend zoomlevelschange", this._updateDisabled, this)
                    },
                    _zoomIn: function (a) {
                        this._map.zoomIn(a.shiftKey ? 3 : 1)
                    },
                    _zoomOut: function (a) {
                        this._map.zoomOut(a.shiftKey ? 3 : 1)
                    },
                    _createButton: function (a, b, c, d, e, g) {
                        var h = f.DomUtil.create("a", c, d);
                        h.innerHTML = a, h.href = "#", h.title = b;
                        var i = f.DomEvent.stopPropagation;
                        return f.DomEvent.on(h, "click", i).on(h, "mousedown", i).on(h, "dblclick", i).on(h, "click", f.DomEvent.preventDefault).on(h, "click", e, g).on(h, "click", this._refocusOnMap, g), h
                    },
                    _updateDisabled: function () {
                        var a = this._map,
                            b = "leaflet-disabled";
                        f.DomUtil.removeClass(this._zoomInButton, b), f.DomUtil.removeClass(this._zoomOutButton, b), a._zoom === a.getMinZoom() && f.DomUtil.addClass(this._zoomOutButton, b), a._zoom === a.getMaxZoom() && f.DomUtil.addClass(this._zoomInButton, b)
                    }
                }), f.Map.mergeOptions({
                    zoomControl: !0
                }), f.Map.addInitHook(function () {
                    this.options.zoomControl && (this.zoomControl = new f.Control.Zoom, this.addControl(this.zoomControl))
                }), f.control.zoom = function (a) {
                    return new f.Control.Zoom(a)
                }, f.Control.Attribution = f.Control.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                    },
                    initialize: function (a) {
                        f.setOptions(this, a), this._attributions = {}
                    },
                    onAdd: function (a) {
                        this._container = f.DomUtil.create("div", "leaflet-control-attribution"), f.DomEvent.disableClickPropagation(this._container);
                        for (var b in a._layers) a._layers[b].getAttribution && this.addAttribution(a._layers[b].getAttribution());
                        return a.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                    },
                    onRemove: function (a) {
                        a.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                    },
                    setPrefix: function (a) {
                        return this.options.prefix = a, this._update(), this
                    },
                    addAttribution: function (a) {
                        return a ? (this._attributions[a] || (this._attributions[a] = 0), this._attributions[a]++, this._update(), this) : void 0
                    },
                    removeAttribution: function (a) {
                        return a ? (this._attributions[a] && (this._attributions[a]--, this._update()), this) : void 0
                    },
                    _update: function () {
                        if (this._map) {
                            var a = [];
                            for (var b in this._attributions) this._attributions[b] && a.push(b);
                            var c = [];
                            this.options.prefix && c.push(this.options.prefix), a.length && c.push(a.join(", ")), this._container.innerHTML = c.join(" | ")
                        }
                    },
                    _onLayerAdd: function (a) {
                        a.layer.getAttribution && this.addAttribution(a.layer.getAttribution())
                    },
                    _onLayerRemove: function (a) {
                        a.layer.getAttribution && this.removeAttribution(a.layer.getAttribution())
                    }
                }), f.Map.mergeOptions({
                    attributionControl: !0
                }), f.Map.addInitHook(function () {
                    this.options.attributionControl && (this.attributionControl = (new f.Control.Attribution).addTo(this))
                }), f.control.attribution = function (a) {
                    return new f.Control.Attribution(a)
                }, f.Control.Scale = f.Control.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0,
                        updateWhenIdle: !1
                    },
                    onAdd: function (a) {
                        this._map = a;
                        var b = "leaflet-control-scale",
                            c = f.DomUtil.create("div", b),
                            d = this.options;
                        return this._addScales(d, b, c), a.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), a.whenReady(this._update, this), c
                    },
                    onRemove: function (a) {
                        a.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                    },
                    _addScales: function (a, b, c) {
                        a.metric && (this._mScale = f.DomUtil.create("div", b + "-line", c)), a.imperial && (this._iScale = f.DomUtil.create("div", b + "-line", c))
                    },
                    _update: function () {
                        var a = this._map.getBounds(),
                            b = a.getCenter().lat,
                            c = 6378137 * Math.PI * Math.cos(b * Math.PI / 180),
                            d = c * (a.getNorthEast().lng - a.getSouthWest().lng) / 180,
                            e = this._map.getSize(),
                            f = this.options,
                            g = 0;
                        e.x > 0 && (g = d * (f.maxWidth / e.x)), this._updateScales(f, g)
                    },
                    _updateScales: function (a, b) {
                        a.metric && b && this._updateMetric(b), a.imperial && b && this._updateImperial(b)
                    },
                    _updateMetric: function (a) {
                        var b = this._getRoundNum(a);
                        this._mScale.style.width = this._getScaleWidth(b / a) + "px", this._mScale.innerHTML = b < 1e3 ? b + " m" : b / 1e3 + " km"
                    },
                    _updateImperial: function (a) {
                        var b, c, d, e = 3.2808399 * a,
                            f = this._iScale;
                        e > 5280 ? (b = e / 5280, c = this._getRoundNum(b), f.style.width = this._getScaleWidth(c / b) + "px", f.innerHTML = c + " mi") : (d = this._getRoundNum(e), f.style.width = this._getScaleWidth(d / e) + "px", f.innerHTML = d + " ft")
                    },
                    _getScaleWidth: function (a) {
                        return Math.round(this.options.maxWidth * a) - 10
                    },
                    _getRoundNum: function (a) {
                        var b = Math.pow(10, (Math.floor(a) + "").length - 1),
                            c = a / b;
                        return c = c >= 10 ? 10 : c >= 5 ? 5 : c >= 3 ? 3 : c >= 2 ? 2 : 1, b * c
                    }
                }), f.control.scale = function (a) {
                    return new f.Control.Scale(a)
                }, f.Control.Layers = f.Control.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0
                    },
                    initialize: function (a, b, c) {
                        f.setOptions(this, c), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                        for (var d in a) this._addLayer(a[d], d);
                        for (d in b) this._addLayer(b[d], d, !0)
                    },
                    onAdd: function (a) {
                        return this._initLayout(), this._update(), a.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                    },
                    onRemove: function (a) {
                        a.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
                    },
                    addBaseLayer: function (a, b) {
                        return this._addLayer(a, b), this._update(), this
                    },
                    addOverlay: function (a, b) {
                        return this._addLayer(a, b, !0), this._update(), this
                    },
                    removeLayer: function (a) {
                        var b = f.stamp(a);
                        return delete this._layers[b], this._update(), this
                    },
                    _initLayout: function () {
                        var a = "leaflet-control-layers",
                            b = this._container = f.DomUtil.create("div", a);
                        b.setAttribute("aria-haspopup", !0), f.Browser.touch ? f.DomEvent.on(b, "click", f.DomEvent.stopPropagation) : f.DomEvent.disableClickPropagation(b).disableScrollPropagation(b);
                        var c = this._form = f.DomUtil.create("form", a + "-list");
                        if (this.options.collapsed) {
                            f.Browser.android || f.DomEvent.on(b, "mouseover", this._expand, this).on(b, "mouseout", this._collapse, this);
                            var d = this._layersLink = f.DomUtil.create("a", a + "-toggle", b);
                            d.href = "#", d.title = "Layers", f.Browser.touch ? f.DomEvent.on(d, "click", f.DomEvent.stop).on(d, "click", this._expand, this) : f.DomEvent.on(d, "focus", this._expand, this), f.DomEvent.on(c, "click", function () {
                                setTimeout(f.bind(this._onInputClick, this), 0)
                            }, this), this._map.on("click", this._collapse, this)
                        } else this._expand();
                        this._baseLayersList = f.DomUtil.create("div", a + "-base", c), this._separator = f.DomUtil.create("div", a + "-separator", c), this._overlaysList = f.DomUtil.create("div", a + "-overlays", c), b.appendChild(c)
                    },
                    _addLayer: function (a, b, c) {
                        var d = f.stamp(a);
                        this._layers[d] = {
                            layer: a,
                            name: b,
                            overlay: c
                        }, this.options.autoZIndex && a.setZIndex && (this._lastZIndex++, a.setZIndex(this._lastZIndex))
                    },
                    _update: function () {
                        if (this._container) {
                            this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                            var a, b, c = !1,
                                d = !1;
                            for (a in this._layers) b = this._layers[a], this._addItem(b), d = d || b.overlay, c = c || !b.overlay;
                            this._separator.style.display = d && c ? "" : "none"
                        }
                    },
                    _onLayerChange: function (a) {
                        var b = this._layers[f.stamp(a.layer)];
                        if (b) {
                            this._handlingClick || this._update();
                            var c = b.overlay ? "layeradd" === a.type ? "overlayadd" : "overlayremove" : "layeradd" === a.type ? "baselayerchange" : null;
                            c && this._map.fire(c, b)
                        }
                    },
                    _createRadioElement: function (a, b) {
                        var d = '<input type="radio" class="leaflet-control-layers-selector" name="' + a + '"';
                        b && (d += ' checked="checked"'), d += "/>";
                        var e = c.createElement("div");
                        return e.innerHTML = d, e.firstChild
                    },
                    _addItem: function (a) {
                        var b, d = c.createElement("label"),
                            e = this._map.hasLayer(a.layer);
                        a.overlay ? (b = c.createElement("input"), b.type = "checkbox", b.className = "leaflet-control-layers-selector", b.defaultChecked = e) : b = this._createRadioElement("leaflet-base-layers", e), b.layerId = f.stamp(a.layer), f.DomEvent.on(b, "click", this._onInputClick, this);
                        var g = c.createElement("span");
                        g.innerHTML = " " + a.name, d.appendChild(b), d.appendChild(g);
                        var h = a.overlay ? this._overlaysList : this._baseLayersList;
                        return h.appendChild(d), d
                    },
                    _onInputClick: function () {
                        var a, b, c, d = this._form.getElementsByTagName("input"),
                            e = d.length;
                        for (this._handlingClick = !0, a = 0; a < e; a++) b = d[a], c = this._layers[b.layerId], b.checked && !this._map.hasLayer(c.layer) ? this._map.addLayer(c.layer) : !b.checked && this._map.hasLayer(c.layer) && this._map.removeLayer(c.layer);
                        this._handlingClick = !1, this._refocusOnMap()
                    },
                    _expand: function () {
                        f.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                    },
                    _collapse: function () {
                        this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                    }
                }), f.control.layers = function (a, b, c) {
                    return new f.Control.Layers(a, b, c)
                }, f.PosAnimation = f.Class.extend({
                    includes: f.Mixin.Events,
                    run: function (a, b, c, d) {
                        this.stop(), this._el = a, this._inProgress = !0, this._newPos = b, this.fire("start"), a.style[f.DomUtil.TRANSITION] = "all " + (c || .25) + "s cubic-bezier(0,0," + (d || .5) + ",1)", f.DomEvent.on(a, f.DomUtil.TRANSITION_END, this._onTransitionEnd, this), f.DomUtil.setPosition(a, b), f.Util.falseFn(a.offsetWidth), this._stepTimer = setInterval(f.bind(this._onStep, this), 50)
                    },
                    stop: function () {
                        this._inProgress && (f.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), f.Util.falseFn(this._el.offsetWidth))
                    },
                    _onStep: function () {
                        var a = this._getPos();
                        return a ? (this._el._leaflet_pos = a, void this.fire("step")) : void this._onTransitionEnd()
                    },
                    _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                    _getPos: function () {
                        var b, c, d, e = this._el,
                            g = a.getComputedStyle(e);
                        if (f.Browser.any3d) {
                            if (d = g[f.DomUtil.TRANSFORM].match(this._transformRe), !d) return;
                            b = parseFloat(d[1]), c = parseFloat(d[2])
                        } else b = parseFloat(g.left), c = parseFloat(g.top);
                        return new f.Point(b, c, !0)
                    },
                    _onTransitionEnd: function () {
                        f.DomEvent.off(this._el, f.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[f.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
                    }
                }), f.Map.include({
                    setView: function (a, b, c) {
                        if (b = b === d ? this._zoom : this._limitZoom(b), a = this._limitCenter(f.latLng(a), b, this.options.maxBounds), c = c || {}, this._panAnim && this._panAnim.stop(), this._loaded && !c.reset && c !== !0) {
                            c.animate !== d && (c.zoom = f.extend({
                                animate: c.animate
                            }, c.zoom), c.pan = f.extend({
                                animate: c.animate
                            }, c.pan));
                            var e = this._zoom !== b ? this._tryAnimatedZoom && this._tryAnimatedZoom(a, b, c.zoom) : this._tryAnimatedPan(a, c.pan);
                            if (e) return clearTimeout(this._sizeTimer), this
                        }
                        return this._resetView(a, b), this
                    },
                    panBy: function (a, b) {
                        if (a = f.point(a).round(), b = b || {}, !a.x && !a.y) return this;
                        if (this._panAnim || (this._panAnim = new f.PosAnimation, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), b.noMoveStart || this.fire("movestart"), b.animate !== !1) {
                            f.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                            var c = this._getMapPanePos().subtract(a);
                            this._panAnim.run(this._mapPane, c, b.duration || .25, b.easeLinearity)
                        } else this._rawPanBy(a), this.fire("move").fire("moveend");
                        return this
                    },
                    _onPanTransitionStep: function () {
                        this.fire("move")
                    },
                    _onPanTransitionEnd: function () {
                        f.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                    },
                    _tryAnimatedPan: function (a, b) {
                        var c = this._getCenterOffset(a)._floor();
                        return (b && b.animate) === !0 || this.getSize().contains(c) ? (this.panBy(c, b), !0) : !1
                    }
                }), f.PosAnimation = f.DomUtil.TRANSITION ? f.PosAnimation : f.PosAnimation.extend({
                    run: function (a, b, c, d) {
                        this.stop(), this._el = a, this._inProgress = !0, this._duration = c || .25, this._easeOutPower = 1 / Math.max(d || .5, .2), this._startPos = f.DomUtil.getPosition(a), this._offset = b.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                    },
                    stop: function () {
                        this._inProgress && (this._step(), this._complete())
                    },
                    _animate: function () {
                        this._animId = f.Util.requestAnimFrame(this._animate, this), this._step()
                    },
                    _step: function () {
                        var a = +new Date - this._startTime,
                            b = 1e3 * this._duration;
                        a < b ? this._runFrame(this._easeOut(a / b)) : (this._runFrame(1), this._complete())
                    },
                    _runFrame: function (a) {
                        var b = this._startPos.add(this._offset.multiplyBy(a));
                        f.DomUtil.setPosition(this._el, b), this.fire("step")
                    },
                    _complete: function () {
                        f.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                    },
                    _easeOut: function (a) {
                        return 1 - Math.pow(1 - a, this._easeOutPower)
                    }
                }), f.Map.mergeOptions({
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4
                }), f.DomUtil.TRANSITION && f.Map.addInitHook(function () {
                    this._zoomAnimated = this.options.zoomAnimation && f.DomUtil.TRANSITION && f.Browser.any3d && !f.Browser.android23 && !f.Browser.mobileOpera, this._zoomAnimated && f.DomEvent.on(this._mapPane, f.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                }), f.Map.include(f.DomUtil.TRANSITION ? {
                    _catchTransitionEnd: function (a) {
                        this._animatingZoom && a.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                    },
                    _nothingToAnimate: function () {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                    },
                    _tryAnimatedZoom: function (a, b, c) {
                        if (this._animatingZoom) return !0;
                        if (c = c || {}, !this._zoomAnimated || c.animate === !1 || this._nothingToAnimate() || Math.abs(b - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                        var d = this.getZoomScale(b),
                            e = this._getCenterOffset(a)._divideBy(1 - 1 / d),
                            f = this._getCenterLayerPoint()._add(e);
                        return c.animate === !0 || this.getSize().contains(e) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(a, b, f, d, null, !0), !0) : !1
                    },
                    _animateZoom: function (a, b, c, d, e, g) {
                        this._animatingZoom = !0, f.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = a, this._animateToZoom = b, f.Draggable && (f.Draggable._disabled = !0), this.fire("zoomanim", {
                            center: a,
                            zoom: b,
                            origin: c,
                            scale: d,
                            delta: e,
                            backwards: g
                        })
                    },
                    _onZoomTransitionEnd: function () {
                        this._animatingZoom = !1, f.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), f.Draggable && (f.Draggable._disabled = !1)
                    }
                } : {}), f.TileLayer.include({
                    _animateZoom: function (a) {
                        this._animating || (this._animating = !0, this._prepareBgBuffer());
                        var b = this._bgBuffer,
                            c = f.DomUtil.TRANSFORM,
                            d = a.delta ? f.DomUtil.getTranslateString(a.delta) : b.style[c],
                            e = f.DomUtil.getScaleString(a.scale, a.origin);
                        b.style[c] = a.backwards ? e + " " + d : d + " " + e
                    },
                    _endZoomAnim: function () {
                        var a = this._tileContainer,
                            b = this._bgBuffer;
                        a.style.visibility = "", a.parentNode.appendChild(a), f.Util.falseFn(b.offsetWidth), this._animating = !1
                    },
                    _clearBgBuffer: function () {
                        var a = this._map;
                        !a || a._animatingZoom || a.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[f.DomUtil.TRANSFORM] = "")
                    },
                    _prepareBgBuffer: function () {
                        var a = this._tileContainer,
                            b = this._bgBuffer,
                            c = this._getLoadedTilesPercentage(b),
                            d = this._getLoadedTilesPercentage(a);
                        return b && c > .5 && d < .5 ? (a.style.visibility = "hidden", void this._stopLoadingImages(a)) : (b.style.visibility = "hidden", b.style[f.DomUtil.TRANSFORM] = "", this._tileContainer = b, b = this._bgBuffer = a, this._stopLoadingImages(b), void clearTimeout(this._clearBgBufferTimer))
                    },
                    _getLoadedTilesPercentage: function (a) {
                        var b, c, d = a.getElementsByTagName("img"),
                            e = 0;
                        for (b = 0, c = d.length; b < c; b++) d[b].complete && e++;
                        return e / c
                    },
                    _stopLoadingImages: function (a) {
                        var b, c, d, e = Array.prototype.slice.call(a.getElementsByTagName("img"));
                        for (b = 0, c = e.length; b < c; b++) d = e[b], d.complete || (d.onload = f.Util.falseFn, d.onerror = f.Util.falseFn, d.src = f.Util.emptyImageUrl, d.parentNode.removeChild(d))
                    }
                }), f.Map.include({
                    _defaultLocateOptions: {
                        watch: !1,
                        setView: !1,
                        maxZoom: 1 / 0,
                        timeout: 1e4,
                        maximumAge: 0,
                        enableHighAccuracy: !1
                    },
                    locate: function (a) {
                        if (a = this._locateOptions = f.extend(this._defaultLocateOptions, a), !navigator.geolocation) return this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }), this;
                        var b = f.bind(this._handleGeolocationResponse, this),
                            c = f.bind(this._handleGeolocationError, this);
                        return a.watch ? this._locationWatchId = navigator.geolocation.watchPosition(b, c, a) : navigator.geolocation.getCurrentPosition(b, c, a), this
                    },
                    stopLocate: function () {
                        return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                    },
                    _handleGeolocationError: function (a) {
                        var b = a.code,
                            c = a.message || (1 === b ? "permission denied" : 2 === b ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: b,
                            message: "Geolocation error: " + c + "."
                        })
                    },
                    _handleGeolocationResponse: function (a) {
                        var b = a.coords.latitude,
                            c = a.coords.longitude,
                            d = new f.LatLng(b, c),
                            e = 180 * a.coords.accuracy / 40075017,
                            g = e / Math.cos(f.LatLng.DEG_TO_RAD * b),
                            h = f.latLngBounds([b - e, c - g], [b + e, c + g]),
                            i = this._locateOptions;
                        if (i.setView) {
                            var j = Math.min(this.getBoundsZoom(h), i.maxZoom);
                            this.setView(d, j)
                        }
                        var k = {
                            latlng: d,
                            bounds: h,
                            timestamp: a.timestamp
                        };
                        for (var l in a.coords) "number" === typeof a.coords[l] && (k[l] = a.coords[l]);
                        this.fire("locationfound", k)
                    }
                })
            }(window, document)
        }, {}
    ],
    7: [
        function (a, b, c) {
            ! function (a, b) {
                if ("object" === typeof c && c) b(c);
                else {
                    var d = {};
                    b(d), "function" === typeof define && define.amd ? define(d) : a.Mustache = d
                }
            }(this, function (a) {
                function b(a, b) {
                    return u.call(a, b)
                }

                function c(a) {
                    return !b(q, a)
                }

                function d(a) {
                    return "function" === typeof a
                }

                function e(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                function f(a) {
                    return String(a).replace(/[&<>"'\/]/g, function (a) {
                        return x[a]
                    })
                }

                function g(a) {
                    this.string = a, this.tail = a, this.pos = 0
                }

                function h(a, b) {
                    this.view = null == a ? {} : a, this.parent = b, this._cache = {
                        ".": this.view
                    }
                }

                function i() {
                    this.clearCache()
                }

                function j(b, c, e, f) {
                    function g(a) {
                        return c.render(a, e)
                    }
                    for (var h, i, k, l = "", m = 0, n = b.length; m < n; ++m) switch (h = b[m], i = h[1], h[0]) {
                    case "#":
                        if (k = e.lookup(i), "object" === typeof k || "string" === typeof k)
                            if (w(k))
                                for (var o = 0, p = k.length; o < p; ++o) l += j(h[4], c, e.push(k[o]), f);
                            else k && (l += j(h[4], c, e.push(k), f));
                            else if (d(k)) {
                            var q = null == f ? null : f.slice(h[3], h[5]);
                            k = k.call(e.view, q, g), null != k && (l += k)
                        } else k && (l += j(h[4], c, e, f));
                        break;
                    case "^":
                        k = e.lookup(i), (!k || w(k) && 0 === k.length) && (l += j(h[4], c, e, f));
                        break;
                    case ">":
                        k = c.getPartial(i), d(k) && (l += k(e));
                        break;
                    case "&":
                        k = e.lookup(i), null != k && (l += k);
                        break;
                    case "name":
                        k = e.lookup(i), null != k && (l += a.escape(k));
                        break;
                    case "text":
                        l += i
                    }
                    return l
                }

                function k(a) {
                    for (var b, c = [], d = c, e = [], f = 0, g = a.length; f < g; ++f) switch (b = a[f], b[0]) {
                    case "#":
                    case "^":
                        e.push(b), d.push(b), d = b[4] = [];
                        break;
                    case "/":
                        var h = e.pop();
                        h[5] = b[2], d = e.length > 0 ? e[e.length - 1][4] : c;
                        break;
                    default:
                        d.push(b)
                    }
                    return c
                }

                function l(a) {
                    for (var b, c, d = [], e = 0, f = a.length; e < f; ++e) b = a[e], b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (c = b, d.push(b)));
                    return d
                }

                function m(a) {
                    return [new RegExp(e(a[0]) + "\\s*"), new RegExp("\\s*" + e(a[1]))]
                }

                function n(b, d) {
                    function f() {
                        if (A && !B)
                            for (; z.length;) delete y[z.pop()];
                        else z = [];
                        A = !1, B = !1
                    }
                    if (b = b || "", d = d || a.tags, "string" === typeof d && (d = d.split(p)), 2 !== d.length) throw new Error("Invalid tags: " + d.join(", "));
                    for (var h, i, j, n, q, u, v = m(d), w = new g(b), x = [], y = [], z = [], A = !1, B = !1; !w.eos();) {
                        if (h = w.pos, j = w.scanUntil(v[0]))
                            for (var C = 0, D = j.length; C < D; ++C) n = j.charAt(C), c(n) ? z.push(y.length) : B = !0, y.push(["text", n, h, h + 1]), h += 1, "\n" == n && f();
                        if (!w.scan(v[0])) break;
                        if (A = !0, i = w.scan(t) || "name", w.scan(o), "=" === i ? (j = w.scanUntil(r), w.scan(r), w.scanUntil(v[1])) : "{" === i ? (j = w.scanUntil(new RegExp("\\s*" + e("}" + d[1]))), w.scan(s), w.scanUntil(v[1]), i = "&") : j = w.scanUntil(v[1]), !w.scan(v[1])) throw new Error("Unclosed tag at " + w.pos);
                        if (q = [i, j, h, w.pos], y.push(q), "#" === i || "^" === i) x.push(q);
                        else if ("/" === i) {
                            if (u = x.pop(), !u) throw new Error('Unopened section "' + j + '" at ' + h);
                            if (u[1] !== j) throw new Error('Unclosed section "' + u[1] + '" at ' + h)
                        } else if ("name" === i || "{" === i || "&" === i) B = !0;
                        else if ("=" === i) {
                            if (d = j.split(p), 2 !== d.length) throw new Error("Invalid tags at " + h + ": " + d.join(", "));
                            v = m(d)
                        }
                    }
                    if (u = x.pop()) throw new Error('Unclosed section "' + u[1] + '" at ' + w.pos);
                    return k(l(y))
                }
                var o = /\s*/,
                    p = /\s+/,
                    q = /\S/,
                    r = /\s*=/,
                    s = /\s*\}/,
                    t = /#|\^|\/|>|\{|&|=|!/,
                    u = RegExp.prototype.test,
                    v = Object.prototype.toString,
                    w = Array.isArray || function (a) {
                        return "[object Array]" === v.call(a)
                    }, x = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;"
                    };
                g.prototype.eos = function () {
                    return "" === this.tail
                }, g.prototype.scan = function (a) {
                    var b = this.tail.match(a);
                    if (b && 0 === b.index) {
                        var c = b[0];
                        return this.tail = this.tail.substring(c.length), this.pos += c.length, c
                    }
                    return ""
                }, g.prototype.scanUntil = function (a) {
                    var b, c = this.tail.search(a);
                    switch (c) {
                    case -1:
                        b = this.tail, this.tail = "";
                        break;
                    case 0:
                        b = "";
                        break;
                    default:
                        b = this.tail.substring(0, c), this.tail = this.tail.substring(c)
                    }
                    return this.pos += b.length, b
                }, h.make = function (a) {
                    return a instanceof h ? a : new h(a)
                }, h.prototype.push = function (a) {
                    return new h(a, this)
                }, h.prototype.lookup = function (a) {
                    var b;
                    if (a in this._cache) b = this._cache[a];
                    else {
                        for (var c = this; c;) {
                            if (a.indexOf(".") > 0) {
                                b = c.view;
                                for (var e = a.split("."), f = 0; null != b && f < e.length;) b = b[e[f++]]
                            } else b = c.view[a]; if (null != b) break;
                            c = c.parent
                        }
                        this._cache[a] = b
                    }
                    return d(b) && (b = b.call(this.view)), b
                }, i.prototype.clearCache = function () {
                    this._cache = {}, this._partialCache = {}
                }, i.prototype.compile = function (b, c) {
                    var d = this._cache[b];
                    if (!d) {
                        var e = a.parse(b, c);
                        d = this._cache[b] = this.compileTokens(e, b)
                    }
                    return d
                }, i.prototype.compilePartial = function (a, b, c) {
                    var d = this.compile(b, c);
                    return this._partialCache[a] = d, d
                }, i.prototype.getPartial = function (a) {
                    return a in this._partialCache || !this._loadPartial || this.compilePartial(a, this._loadPartial(a)), this._partialCache[a]
                }, i.prototype.compileTokens = function (a, b) {
                    var c = this;
                    return function (e, f) {
                        if (f)
                            if (d(f)) c._loadPartial = f;
                            else
                                for (var g in f) c.compilePartial(g, f[g]);
                        return j(a, c, h.make(e), b)
                    }
                }, i.prototype.render = function (a, b, c) {
                    return this.compile(a)(b, c)
                }, a.name = "mustache.js", a.version = "0.7.3", a.tags = ["{{", "}}"], a.Scanner = g, a.Context = h, a.Writer = i, a.parse = n, a.escape = f;
                var y = new i;
                a.clearCache = function () {
                    return y.clearCache()
                }, a.compile = function (a, b) {
                    return y.compile(a, b)
                }, a.compilePartial = function (a, b, c) {
                    return y.compilePartial(a, b, c)
                }, a.compileTokens = function (a, b) {
                    return y.compileTokens(a, b)
                }, a.render = function (a, b, c) {
                    return y.render(a, b, c)
                }, a.to_html = function (b, c, e, f) {
                    var g = a.render(b, c, e);
                    return d(f) ? void f(g) : g
                }
            })
        }, {}
    ],
    8: [
        function (a, b) {
            function c(a) {
                "use strict";
                return /^https?/.test(a.getScheme()) ? a.toString() : "data" == a.getScheme() && /^image/.test(a.getPath()) ? a.toString() : void 0
            }

            function d(a) {
                return a
            }
            var e = a("./sanitizer-bundle.js");
            b.exports = function (a) {
                return a ? e(a, c, d) : ""
            }
        }, {
            "./sanitizer-bundle.js": 9
        }
    ],
    9: [
        function (a, b) {
            var c = function () {
                function a(a) {
                    var b = ("" + a).match(n);
                    return b ? new i(j(b[1]), j(b[2]), j(b[3]), j(b[4]), j(b[5]), j(b[6]), j(b[7])) : null
                }

                function b(a, b, f, g, h, j, k) {
                    var l = new i(d(a, o), d(b, o), c(f), g > 0 ? g.toString() : null, d(h, p), null, c(k));
                    return j && ("string" === typeof j ? l.setRawQuery(j.replace(/[^?&=0-9A-Za-z_\-~.%]/g, e)) : l.setAllParameters(j)), l
                }

                function c(a) {
                    return "string" == typeof a ? encodeURIComponent(a) : null
                }

                function d(a, b) {
                    return "string" == typeof a ? encodeURI(a).replace(b, e) : null
                }

                function e(a) {
                    var b = a.charCodeAt(0);
                    return "%" + "0123456789ABCDEF".charAt(b >> 4 & 15) + "0123456789ABCDEF".charAt(15 & b)
                }

                function f(a) {
                    return a.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                }

                function g(a) {
                    if (null === a) return null;
                    for (var b, c = f(a), d = l;
                        (b = c.replace(d, "$1")) != c; c = b);
                    return c
                }

                function h(a, b) {
                    var c = a.clone(),
                        d = b.hasScheme();
                    d ? c.setRawScheme(b.getRawScheme()) : d = b.hasCredentials(), d ? c.setRawCredentials(b.getRawCredentials()) : d = b.hasDomain(), d ? c.setRawDomain(b.getRawDomain()) : d = b.hasPort();
                    var e = b.getRawPath(),
                        f = g(e);
                    if (d) c.setPort(b.getPort()), f = f && f.replace(m, "");
                    else if (d = !! e) {
                        if (47 !== f.charCodeAt(0)) {
                            var h = g(c.getRawPath() || "").replace(m, ""),
                                i = h.lastIndexOf("/") + 1;
                            f = g((i ? h.substring(0, i) : "") + g(e)).replace(m, "")
                        }
                    } else f = f && f.replace(m, ""), f !== e && c.setRawPath(f);
                    return d ? c.setRawPath(f) : d = b.hasQuery(), d ? c.setRawQuery(b.getRawQuery()) : d = b.hasFragment(), d && c.setRawFragment(b.getRawFragment()), c
                }

                function i(a, b, c, d, e, f, g) {
                    this.scheme_ = a, this.credentials_ = b, this.domain_ = c, this.port_ = d, this.path_ = e, this.query_ = f, this.fragment_ = g, this.paramCache_ = null
                }

                function j(a) {
                    return "string" == typeof a && a.length > 0 ? a : null
                }
                var k = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
                    l = new RegExp(k),
                    m = /^(?:\.\.\/)*(?:\.\.$)?/;
                i.prototype.toString = function () {
                    var a = [];
                    return null !== this.scheme_ && a.push(this.scheme_, ":"), null !== this.domain_ && (a.push("//"), null !== this.credentials_ && a.push(this.credentials_, "@"), a.push(this.domain_), null !== this.port_ && a.push(":", this.port_.toString())), null !== this.path_ && a.push(this.path_), null !== this.query_ && a.push("?", this.query_), null !== this.fragment_ && a.push("#", this.fragment_), a.join("")
                }, i.prototype.clone = function () {
                    return new i(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                }, i.prototype.getScheme = function () {
                    return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                }, i.prototype.getRawScheme = function () {
                    return this.scheme_
                }, i.prototype.setScheme = function (a) {
                    return this.scheme_ = d(a, o), this
                }, i.prototype.setRawScheme = function (a) {
                    return this.scheme_ = a ? a : null, this
                }, i.prototype.hasScheme = function () {
                    return null !== this.scheme_
                }, i.prototype.getCredentials = function () {
                    return this.credentials_ && decodeURIComponent(this.credentials_)
                }, i.prototype.getRawCredentials = function () {
                    return this.credentials_
                }, i.prototype.setCredentials = function (a) {
                    return this.credentials_ = d(a, o), this
                }, i.prototype.setRawCredentials = function (a) {
                    return this.credentials_ = a ? a : null, this
                }, i.prototype.hasCredentials = function () {
                    return null !== this.credentials_
                }, i.prototype.getDomain = function () {
                    return this.domain_ && decodeURIComponent(this.domain_)
                }, i.prototype.getRawDomain = function () {
                    return this.domain_
                }, i.prototype.setDomain = function (a) {
                    return this.setRawDomain(a && encodeURIComponent(a))
                }, i.prototype.setRawDomain = function (a) {
                    return this.domain_ = a ? a : null, this.setRawPath(this.path_)
                }, i.prototype.hasDomain = function () {
                    return null !== this.domain_
                }, i.prototype.getPort = function () {
                    return this.port_ && decodeURIComponent(this.port_)
                }, i.prototype.setPort = function (a) {
                    if (a) {
                        if (a = Number(a), a !== (65535 & a)) throw new Error("Bad port number " + a);
                        this.port_ = "" + a
                    } else this.port_ = null;
                    return this
                }, i.prototype.hasPort = function () {
                    return null !== this.port_
                }, i.prototype.getPath = function () {
                    return this.path_ && decodeURIComponent(this.path_)
                }, i.prototype.getRawPath = function () {
                    return this.path_
                }, i.prototype.setPath = function (a) {
                    return this.setRawPath(d(a, p))
                }, i.prototype.setRawPath = function (a) {
                    return a ? (a = String(a), this.path_ = !this.domain_ || /^\//.test(a) ? a : "/" + a) : this.path_ = null, this
                }, i.prototype.hasPath = function () {
                    return null !== this.path_
                }, i.prototype.getQuery = function () {
                    return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                }, i.prototype.getRawQuery = function () {
                    return this.query_
                }, i.prototype.setQuery = function (a) {
                    return this.paramCache_ = null, this.query_ = c(a), this
                }, i.prototype.setRawQuery = function (a) {
                    return this.paramCache_ = null, this.query_ = a ? a : null, this
                }, i.prototype.hasQuery = function () {
                    return null !== this.query_
                }, i.prototype.setAllParameters = function (a) {
                    if ("object" === typeof a && !(a instanceof Array) && (a instanceof Object || "[object Array]" !== Object.prototype.toString.call(a))) {
                        var b = [],
                            c = -1;
                        for (var d in a) {
                            var e = a[d];
                            "string" === typeof e && (b[++c] = d, b[++c] = e)
                        }
                        a = b
                    }
                    this.paramCache_ = null;
                    for (var f = [], g = "", h = 0; h < a.length;) {
                        var d = a[h++],
                            e = a[h++];
                        f.push(g, encodeURIComponent(d.toString())), g = "&", e && f.push("=", encodeURIComponent(e.toString()))
                    }
                    return this.query_ = f.join(""), this
                }, i.prototype.checkParameterCache_ = function () {
                    if (!this.paramCache_) {
                        var a = this.query_;
                        if (a) {
                            for (var b = a.split(/[&\?]/), c = [], d = -1, e = 0; e < b.length; ++e) {
                                var f = b[e].match(/^([^=]*)(?:=(.*))?$/);
                                c[++d] = decodeURIComponent(f[1]).replace(/\+/g, " "), c[++d] = decodeURIComponent(f[2] || "").replace(/\+/g, " ")
                            }
                            this.paramCache_ = c
                        } else this.paramCache_ = []
                    }
                }, i.prototype.setParameterValues = function (a, b) {
                    "string" === typeof b && (b = [b]), this.checkParameterCache_();
                    for (var c = 0, d = this.paramCache_, e = [], f = 0; f < d.length; f += 2) a === d[f] ? c < b.length && e.push(a, b[c++]) : e.push(d[f], d[f + 1]);
                    for (; c < b.length;) e.push(a, b[c++]);
                    return this.setAllParameters(e), this
                }, i.prototype.removeParameter = function (a) {
                    return this.setParameterValues(a, [])
                }, i.prototype.getAllParameters = function () {
                    return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                }, i.prototype.getParameterValues = function (a) {
                    this.checkParameterCache_();
                    for (var b = [], c = 0; c < this.paramCache_.length; c += 2) a === this.paramCache_[c] && b.push(this.paramCache_[c + 1]);
                    return b
                }, i.prototype.getParameterMap = function () {
                    this.checkParameterCache_();
                    for (var a = {}, b = 0; b < this.paramCache_.length; b += 2) {
                        var c = this.paramCache_[b++],
                            d = this.paramCache_[b++];
                        c in a ? a[c].push(d) : a[c] = [d]
                    }
                    return a
                }, i.prototype.getParameterValue = function (a) {
                    this.checkParameterCache_();
                    for (var b = 0; b < this.paramCache_.length; b += 2)
                        if (a === this.paramCache_[b]) return this.paramCache_[b + 1];
                    return null
                }, i.prototype.getFragment = function () {
                    return this.fragment_ && decodeURIComponent(this.fragment_)
                }, i.prototype.getRawFragment = function () {
                    return this.fragment_
                }, i.prototype.setFragment = function (a) {
                    return this.fragment_ = a ? encodeURIComponent(a) : null, this
                }, i.prototype.setRawFragment = function (a) {
                    return this.fragment_ = a ? a : null, this
                }, i.prototype.hasFragment = function () {
                    return null !== this.fragment_
                };
                var n = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                    o = /[#\/\?@]/g,
                    p = /[\#\?]/g;
                return i.parse = a, i.create = b, i.resolve = h, i.collapse_dots = g, i.utils = {
                    mimeTypeOf: function (b) {
                        var c = a(b);
                        return /\.html$/.test(c.getPath()) ? "text/html" : "application/javascript"
                    },
                    resolve: function (b, c) {
                        return b ? h(a(b), a(c)).toString() : "" + c
                    }
                }, i
            }(),
                d = {};
            if (d.atype = {
                NONE: 0,
                URI: 1,
                URI_FRAGMENT: 11,
                SCRIPT: 2,
                STYLE: 3,
                HTML: 12,
                ID: 4,
                IDREF: 5,
                IDREFS: 6,
                GLOBAL_NAME: 7,
                LOCAL_NAME: 8,
                CLASSES: 9,
                FRAME_TARGET: 10,
                MEDIA_QUERY: 13
            }, d.atype = d.atype, d.ATTRIBS = {
                "*::class": 9,
                "*::dir": 0,
                "*::draggable": 0,
                "*::hidden": 0,
                "*::id": 4,
                "*::inert": 0,
                "*::itemprop": 0,
                "*::itemref": 6,
                "*::itemscope": 0,
                "*::lang": 0,
                "*::onblur": 2,
                "*::onchange": 2,
                "*::onclick": 2,
                "*::ondblclick": 2,
                "*::onfocus": 2,
                "*::onkeydown": 2,
                "*::onkeypress": 2,
                "*::onkeyup": 2,
                "*::onload": 2,
                "*::onmousedown": 2,
                "*::onmousemove": 2,
                "*::onmouseout": 2,
                "*::onmouseover": 2,
                "*::onmouseup": 2,
                "*::onreset": 2,
                "*::onscroll": 2,
                "*::onselect": 2,
                "*::onsubmit": 2,
                "*::onunload": 2,
                "*::spellcheck": 0,
                "*::style": 3,
                "*::title": 0,
                "*::translate": 0,
                "a::accesskey": 0,
                "a::coords": 0,
                "a::href": 1,
                "a::hreflang": 0,
                "a::name": 7,
                "a::onblur": 2,
                "a::onfocus": 2,
                "a::shape": 0,
                "a::tabindex": 0,
                "a::target": 10,
                "a::type": 0,
                "area::accesskey": 0,
                "area::alt": 0,
                "area::coords": 0,
                "area::href": 1,
                "area::nohref": 0,
                "area::onblur": 2,
                "area::onfocus": 2,
                "area::shape": 0,
                "area::tabindex": 0,
                "area::target": 10,
                "audio::controls": 0,
                "audio::loop": 0,
                "audio::mediagroup": 5,
                "audio::muted": 0,
                "audio::preload": 0,
                "bdo::dir": 0,
                "blockquote::cite": 1,
                "br::clear": 0,
                "button::accesskey": 0,
                "button::disabled": 0,
                "button::name": 8,
                "button::onblur": 2,
                "button::onfocus": 2,
                "button::tabindex": 0,
                "button::type": 0,
                "button::value": 0,
                "canvas::height": 0,
                "canvas::width": 0,
                "caption::align": 0,
                "col::align": 0,
                "col::char": 0,
                "col::charoff": 0,
                "col::span": 0,
                "col::valign": 0,
                "col::width": 0,
                "colgroup::align": 0,
                "colgroup::char": 0,
                "colgroup::charoff": 0,
                "colgroup::span": 0,
                "colgroup::valign": 0,
                "colgroup::width": 0,
                "command::checked": 0,
                "command::command": 5,
                "command::disabled": 0,
                "command::icon": 1,
                "command::label": 0,
                "command::radiogroup": 0,
                "command::type": 0,
                "data::value": 0,
                "del::cite": 1,
                "del::datetime": 0,
                "details::open": 0,
                "dir::compact": 0,
                "div::align": 0,
                "dl::compact": 0,
                "fieldset::disabled": 0,
                "font::color": 0,
                "font::face": 0,
                "font::size": 0,
                "form::accept": 0,
                "form::action": 1,
                "form::autocomplete": 0,
                "form::enctype": 0,
                "form::method": 0,
                "form::name": 7,
                "form::novalidate": 0,
                "form::onreset": 2,
                "form::onsubmit": 2,
                "form::target": 10,
                "h1::align": 0,
                "h2::align": 0,
                "h3::align": 0,
                "h4::align": 0,
                "h5::align": 0,
                "h6::align": 0,
                "hr::align": 0,
                "hr::noshade": 0,
                "hr::size": 0,
                "hr::width": 0,
                "iframe::align": 0,
                "iframe::frameborder": 0,
                "iframe::height": 0,
                "iframe::marginheight": 0,
                "iframe::marginwidth": 0,
                "iframe::width": 0,
                "img::align": 0,
                "img::alt": 0,
                "img::border": 0,
                "img::height": 0,
                "img::hspace": 0,
                "img::ismap": 0,
                "img::name": 7,
                "img::src": 1,
                "img::usemap": 11,
                "img::vspace": 0,
                "img::width": 0,
                "input::accept": 0,
                "input::accesskey": 0,
                "input::align": 0,
                "input::alt": 0,
                "input::autocomplete": 0,
                "input::checked": 0,
                "input::disabled": 0,
                "input::inputmode": 0,
                "input::ismap": 0,
                "input::list": 5,
                "input::max": 0,
                "input::maxlength": 0,
                "input::min": 0,
                "input::multiple": 0,
                "input::name": 8,
                "input::onblur": 2,
                "input::onchange": 2,
                "input::onfocus": 2,
                "input::onselect": 2,
                "input::placeholder": 0,
                "input::readonly": 0,
                "input::required": 0,
                "input::size": 0,
                "input::src": 1,
                "input::step": 0,
                "input::tabindex": 0,
                "input::type": 0,
                "input::usemap": 11,
                "input::value": 0,
                "ins::cite": 1,
                "ins::datetime": 0,
                "label::accesskey": 0,
                "label::for": 5,
                "label::onblur": 2,
                "label::onfocus": 2,
                "legend::accesskey": 0,
                "legend::align": 0,
                "li::type": 0,
                "li::value": 0,
                "map::name": 7,
                "menu::compact": 0,
                "menu::label": 0,
                "menu::type": 0,
                "meter::high": 0,
                "meter::low": 0,
                "meter::max": 0,
                "meter::min": 0,
                "meter::value": 0,
                "ol::compact": 0,
                "ol::reversed": 0,
                "ol::start": 0,
                "ol::type": 0,
                "optgroup::disabled": 0,
                "optgroup::label": 0,
                "option::disabled": 0,
                "option::label": 0,
                "option::selected": 0,
                "option::value": 0,
                "output::for": 6,
                "output::name": 8,
                "p::align": 0,
                "pre::width": 0,
                "progress::max": 0,
                "progress::min": 0,
                "progress::value": 0,
                "q::cite": 1,
                "select::autocomplete": 0,
                "select::disabled": 0,
                "select::multiple": 0,
                "select::name": 8,
                "select::onblur": 2,
                "select::onchange": 2,
                "select::onfocus": 2,
                "select::required": 0,
                "select::size": 0,
                "select::tabindex": 0,
                "source::type": 0,
                "table::align": 0,
                "table::bgcolor": 0,
                "table::border": 0,
                "table::cellpadding": 0,
                "table::cellspacing": 0,
                "table::frame": 0,
                "table::rules": 0,
                "table::summary": 0,
                "table::width": 0,
                "tbody::align": 0,
                "tbody::char": 0,
                "tbody::charoff": 0,
                "tbody::valign": 0,
                "td::abbr": 0,
                "td::align": 0,
                "td::axis": 0,
                "td::bgcolor": 0,
                "td::char": 0,
                "td::charoff": 0,
                "td::colspan": 0,
                "td::headers": 6,
                "td::height": 0,
                "td::nowrap": 0,
                "td::rowspan": 0,
                "td::scope": 0,
                "td::valign": 0,
                "td::width": 0,
                "textarea::accesskey": 0,
                "textarea::autocomplete": 0,
                "textarea::cols": 0,
                "textarea::disabled": 0,
                "textarea::inputmode": 0,
                "textarea::name": 8,
                "textarea::onblur": 2,
                "textarea::onchange": 2,
                "textarea::onfocus": 2,
                "textarea::onselect": 2,
                "textarea::placeholder": 0,
                "textarea::readonly": 0,
                "textarea::required": 0,
                "textarea::rows": 0,
                "textarea::tabindex": 0,
                "textarea::wrap": 0,
                "tfoot::align": 0,
                "tfoot::char": 0,
                "tfoot::charoff": 0,
                "tfoot::valign": 0,
                "th::abbr": 0,
                "th::align": 0,
                "th::axis": 0,
                "th::bgcolor": 0,
                "th::char": 0,
                "th::charoff": 0,
                "th::colspan": 0,
                "th::headers": 6,
                "th::height": 0,
                "th::nowrap": 0,
                "th::rowspan": 0,
                "th::scope": 0,
                "th::valign": 0,
                "th::width": 0,
                "thead::align": 0,
                "thead::char": 0,
                "thead::charoff": 0,
                "thead::valign": 0,
                "tr::align": 0,
                "tr::bgcolor": 0,
                "tr::char": 0,
                "tr::charoff": 0,
                "tr::valign": 0,
                "track::default": 0,
                "track::kind": 0,
                "track::label": 0,
                "track::srclang": 0,
                "ul::compact": 0,
                "ul::type": 0,
                "video::controls": 0,
                "video::height": 0,
                "video::loop": 0,
                "video::mediagroup": 5,
                "video::muted": 0,
                "video::poster": 1,
                "video::preload": 0,
                "video::width": 0
            }, d.ATTRIBS = d.ATTRIBS, d.eflags = {
                OPTIONAL_ENDTAG: 1,
                EMPTY: 2,
                CDATA: 4,
                RCDATA: 8,
                UNSAFE: 16,
                FOLDABLE: 32,
                SCRIPT: 64,
                STYLE: 128,
                VIRTUALIZED: 256
            }, d.eflags = d.eflags, d.ELEMENTS = {
                a: 0,
                abbr: 0,
                acronym: 0,
                address: 0,
                applet: 272,
                area: 2,
                article: 0,
                aside: 0,
                audio: 0,
                b: 0,
                base: 274,
                basefont: 274,
                bdi: 0,
                bdo: 0,
                big: 0,
                blockquote: 0,
                body: 305,
                br: 2,
                button: 0,
                canvas: 0,
                caption: 0,
                center: 0,
                cite: 0,
                code: 0,
                col: 2,
                colgroup: 1,
                command: 2,
                data: 0,
                datalist: 0,
                dd: 1,
                del: 0,
                details: 0,
                dfn: 0,
                dialog: 272,
                dir: 0,
                div: 0,
                dl: 0,
                dt: 1,
                em: 0,
                fieldset: 0,
                figcaption: 0,
                figure: 0,
                font: 0,
                footer: 0,
                form: 0,
                frame: 274,
                frameset: 272,
                h1: 0,
                h2: 0,
                h3: 0,
                h4: 0,
                h5: 0,
                h6: 0,
                head: 305,
                header: 0,
                hgroup: 0,
                hr: 2,
                html: 305,
                i: 0,
                iframe: 4,
                img: 2,
                input: 2,
                ins: 0,
                isindex: 274,
                kbd: 0,
                keygen: 274,
                label: 0,
                legend: 0,
                li: 1,
                link: 274,
                map: 0,
                mark: 0,
                menu: 0,
                meta: 274,
                meter: 0,
                nav: 0,
                nobr: 0,
                noembed: 276,
                noframes: 276,
                noscript: 276,
                object: 272,
                ol: 0,
                optgroup: 0,
                option: 1,
                output: 0,
                p: 1,
                param: 274,
                pre: 0,
                progress: 0,
                q: 0,
                s: 0,
                samp: 0,
                script: 84,
                section: 0,
                select: 0,
                small: 0,
                source: 2,
                span: 0,
                strike: 0,
                strong: 0,
                style: 148,
                sub: 0,
                summary: 0,
                sup: 0,
                table: 0,
                tbody: 1,
                td: 1,
                textarea: 8,
                tfoot: 1,
                th: 1,
                thead: 1,
                time: 0,
                title: 280,
                tr: 1,
                track: 2,
                tt: 0,
                u: 0,
                ul: 0,
                "var": 0,
                video: 0,
                wbr: 2
            }, d.ELEMENTS = d.ELEMENTS, d.ELEMENT_DOM_INTERFACES = {
                a: "HTMLAnchorElement",
                abbr: "HTMLElement",
                acronym: "HTMLElement",
                address: "HTMLElement",
                applet: "HTMLAppletElement",
                area: "HTMLAreaElement",
                article: "HTMLElement",
                aside: "HTMLElement",
                audio: "HTMLAudioElement",
                b: "HTMLElement",
                base: "HTMLBaseElement",
                basefont: "HTMLBaseFontElement",
                bdi: "HTMLElement",
                bdo: "HTMLElement",
                big: "HTMLElement",
                blockquote: "HTMLQuoteElement",
                body: "HTMLBodyElement",
                br: "HTMLBRElement",
                button: "HTMLButtonElement",
                canvas: "HTMLCanvasElement",
                caption: "HTMLTableCaptionElement",
                center: "HTMLElement",
                cite: "HTMLElement",
                code: "HTMLElement",
                col: "HTMLTableColElement",
                colgroup: "HTMLTableColElement",
                command: "HTMLCommandElement",
                data: "HTMLElement",
                datalist: "HTMLDataListElement",
                dd: "HTMLElement",
                del: "HTMLModElement",
                details: "HTMLDetailsElement",
                dfn: "HTMLElement",
                dialog: "HTMLDialogElement",
                dir: "HTMLDirectoryElement",
                div: "HTMLDivElement",
                dl: "HTMLDListElement",
                dt: "HTMLElement",
                em: "HTMLElement",
                fieldset: "HTMLFieldSetElement",
                figcaption: "HTMLElement",
                figure: "HTMLElement",
                font: "HTMLFontElement",
                footer: "HTMLElement",
                form: "HTMLFormElement",
                frame: "HTMLFrameElement",
                frameset: "HTMLFrameSetElement",
                h1: "HTMLHeadingElement",
                h2: "HTMLHeadingElement",
                h3: "HTMLHeadingElement",
                h4: "HTMLHeadingElement",
                h5: "HTMLHeadingElement",
                h6: "HTMLHeadingElement",
                head: "HTMLHeadElement",
                header: "HTMLElement",
                hgroup: "HTMLElement",
                hr: "HTMLHRElement",
                html: "HTMLHtmlElement",
                i: "HTMLElement",
                iframe: "HTMLIFrameElement",
                img: "HTMLImageElement",
                input: "HTMLInputElement",
                ins: "HTMLModElement",
                isindex: "HTMLUnknownElement",
                kbd: "HTMLElement",
                keygen: "HTMLKeygenElement",
                label: "HTMLLabelElement",
                legend: "HTMLLegendElement",
                li: "HTMLLIElement",
                link: "HTMLLinkElement",
                map: "HTMLMapElement",
                mark: "HTMLElement",
                menu: "HTMLMenuElement",
                meta: "HTMLMetaElement",
                meter: "HTMLMeterElement",
                nav: "HTMLElement",
                nobr: "HTMLElement",
                noembed: "HTMLElement",
                noframes: "HTMLElement",
                noscript: "HTMLElement",
                object: "HTMLObjectElement",
                ol: "HTMLOListElement",
                optgroup: "HTMLOptGroupElement",
                option: "HTMLOptionElement",
                output: "HTMLOutputElement",
                p: "HTMLParagraphElement",
                param: "HTMLParamElement",
                pre: "HTMLPreElement",
                progress: "HTMLProgressElement",
                q: "HTMLQuoteElement",
                s: "HTMLElement",
                samp: "HTMLElement",
                script: "HTMLScriptElement",
                section: "HTMLElement",
                select: "HTMLSelectElement",
                small: "HTMLElement",
                source: "HTMLSourceElement",
                span: "HTMLSpanElement",
                strike: "HTMLElement",
                strong: "HTMLElement",
                style: "HTMLStyleElement",
                sub: "HTMLElement",
                summary: "HTMLElement",
                sup: "HTMLElement",
                table: "HTMLTableElement",
                tbody: "HTMLTableSectionElement",
                td: "HTMLTableDataCellElement",
                textarea: "HTMLTextAreaElement",
                tfoot: "HTMLTableSectionElement",
                th: "HTMLTableHeaderCellElement",
                thead: "HTMLTableSectionElement",
                time: "HTMLTimeElement",
                title: "HTMLTitleElement",
                tr: "HTMLTableRowElement",
                track: "HTMLTrackElement",
                tt: "HTMLElement",
                u: "HTMLElement",
                ul: "HTMLUListElement",
                "var": "HTMLElement",
                video: "HTMLVideoElement",
                wbr: "HTMLElement"
            }, d.ELEMENT_DOM_INTERFACES = d.ELEMENT_DOM_INTERFACES, d.ueffects = {
                NOT_LOADED: 0,
                SAME_DOCUMENT: 1,
                NEW_DOCUMENT: 2
            }, d.ueffects = d.ueffects, d.URIEFFECTS = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 0,
                "command::icon": 1,
                "del::cite": 0,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 0,
                "q::cite": 0,
                "video::poster": 1
            }, d.URIEFFECTS = d.URIEFFECTS, d.ltypes = {
                UNSANDBOXED: 2,
                SANDBOXED: 1,
                DATA: 0
            }, d.ltypes = d.ltypes, d.LOADERTYPES = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 2,
                "command::icon": 1,
                "del::cite": 2,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 2,
                "q::cite": 2,
                "video::poster": 1
            }, d.LOADERTYPES = d.LOADERTYPES, "i" !== "I".toLowerCase()) throw "I/i problem";
            var e = function (a) {
                function b(a) {
                    if (F.hasOwnProperty(a)) return F[a];
                    var b = a.match(G);
                    if (b) return String.fromCharCode(parseInt(b[1], 10));
                    if (b = a.match(H)) return String.fromCharCode(parseInt(b[1], 16));
                    if (J && I.test(a)) {
                        J.innerHTML = "&" + a + ";";
                        var c = J.textContent;
                        return F[a] = c, c
                    }
                    return "&" + a + ";"
                }

                function d(a, c) {
                    return b(c)
                }

                function e(a) {
                    return a.replace(K, "")
                }

                function f(a) {
                    return a.replace(L, d)
                }

                function g(a) {
                    return ("" + a).replace(N, "&amp;").replace(P, "&lt;").replace(Q, "&gt;").replace(R, "&#34;")
                }

                function h(a) {
                    return a.replace(O, "&amp;$1").replace(P, "&lt;").replace(Q, "&gt;")
                }

                function i(a) {
                    var b = {
                        cdata: a.cdata || a.cdata,
                        comment: a.comment || a.comment,
                        endDoc: a.endDoc || a.endDoc,
                        endTag: a.endTag || a.endTag,
                        pcdata: a.pcdata || a.pcdata,
                        rcdata: a.rcdata || a.rcdata,
                        startDoc: a.startDoc || a.startDoc,
                        startTag: a.startTag || a.startTag
                    };
                    return function (a, c) {
                        return j(a, b, c)
                    }
                }

                function j(a, b, c) {
                    var d = m(a),
                        e = {
                            noMoreGT: !1,
                            noMoreEndComments: !1
                        };
                    l(b, d, 0, e, c)
                }

                function k(a, b, c, d, e) {
                    return function () {
                        l(a, b, c, d, e)
                    }
                }

                function l(b, c, d, e, f) {
                    try {
                        b.startDoc && 0 == d && b.startDoc(f);
                        for (var g, h, i, j = d, l = c.length; j < l;) {
                            var m = c[j++],
                                q = c[j];
                            switch (m) {
                            case "&":
                                M.test(q) ? (b.pcdata && b.pcdata("&" + q, f, V, k(b, c, j, e, f)), j++) : b.pcdata && b.pcdata("&amp;", f, V, k(b, c, j, e, f));
                                break;
                            case "</":
                                (g = /^([-\w:]+)[^\'\"]*/.exec(q)) ? g[0].length === q.length && ">" === c[j + 1] ? (j += 2, i = g[1].toLowerCase(), b.endTag && b.endTag(i, f, V, k(b, c, j, e, f))) : j = n(c, j, b, f, V, e) : b.pcdata && b.pcdata("&lt;/", f, V, k(b, c, j, e, f));
                                break;
                            case "<":
                                if (g = /^([-\w:]+)\s*\/?/.exec(q))
                                    if (g[0].length === q.length && ">" === c[j + 1]) {
                                        j += 2, i = g[1].toLowerCase(), b.startTag && b.startTag(i, [], f, V, k(b, c, j, e, f));
                                        var r = a.ELEMENTS[i];
                                        if (r & U) {
                                            var s = {
                                                name: i,
                                                next: j,
                                                eflags: r
                                            };
                                            j = p(c, s, b, f, V, e)
                                        }
                                    } else j = o(c, j, b, f, V, e);
                                    else b.pcdata && b.pcdata("&lt;", f, V, k(b, c, j, e, f));
                                break;
                            case "<!--":
                                if (!e.noMoreEndComments) {
                                    for (h = j + 1; h < l && (">" !== c[h] || !/--$/.test(c[h - 1])); h++);
                                    if (h < l) {
                                        if (b.comment) {
                                            var t = c.slice(j, h).join("");
                                            b.comment(t.substr(0, t.length - 2), f, V, k(b, c, h + 1, e, f))
                                        }
                                        j = h + 1
                                    } else e.noMoreEndComments = !0
                                }
                                e.noMoreEndComments && b.pcdata && b.pcdata("&lt;!--", f, V, k(b, c, j, e, f));
                                break;
                            case "<!":
                                if (/^\w/.test(q)) {
                                    if (!e.noMoreGT) {
                                        for (h = j + 1; h < l && ">" !== c[h]; h++);
                                        h < l ? j = h + 1 : e.noMoreGT = !0
                                    }
                                    e.noMoreGT && b.pcdata && b.pcdata("&lt;!", f, V, k(b, c, j, e, f))
                                } else b.pcdata && b.pcdata("&lt;!", f, V, k(b, c, j, e, f));
                                break;
                            case "<?":
                                if (!e.noMoreGT) {
                                    for (h = j + 1; h < l && ">" !== c[h]; h++);
                                    h < l ? j = h + 1 : e.noMoreGT = !0
                                }
                                e.noMoreGT && b.pcdata && b.pcdata("&lt;?", f, V, k(b, c, j, e, f));
                                break;
                            case ">":
                                b.pcdata && b.pcdata("&gt;", f, V, k(b, c, j, e, f));
                                break;
                            case "":
                                break;
                            default:
                                b.pcdata && b.pcdata(m, f, V, k(b, c, j, e, f))
                            }
                        }
                        b.endDoc && b.endDoc(f)
                    } catch (u) {
                        if (u !== V) throw u
                    }
                }

                function m(a) {
                    var b = /(<\/|<\!--|<[!?]|[&<>])/g;
                    if (a += "", T) return a.split(b);
                    for (var c, d = [], e = 0; null !== (c = b.exec(a));) d.push(a.substring(e, c.index)), d.push(c[0]), e = c.index + c[0].length;
                    return d.push(a.substring(e)), d
                }

                function n(a, b, c, d, e, f) {
                    var g = q(a, b);
                    return g ? (c.endTag && c.endTag(g.name, d, e, k(c, a, b, f, d)), g.next) : a.length
                }

                function o(a, b, c, d, e, f) {
                    var g = q(a, b);
                    return g ? (c.startTag && c.startTag(g.name, g.attrs, d, e, k(c, a, g.next, f, d)), g.eflags & U ? p(a, g, c, d, e, f) : g.next) : a.length
                }

                function p(b, c, d, e, f, g) {
                    var i = b.length;
                    W.hasOwnProperty(c.name) || (W[c.name] = new RegExp("^" + c.name + "(?:[\\s\\/]|$)", "i"));
                    for (var j = W[c.name], l = c.next, m = c.next + 1; m < i && ("</" !== b[m - 1] || !j.test(b[m])); m++);
                    m < i && (m -= 1);
                    var n = b.slice(l, m).join("");
                    if (c.eflags & a.eflags.CDATA) d.cdata && d.cdata(n, e, f, k(d, b, m, g, e));
                    else {
                        if (!(c.eflags & a.eflags.RCDATA)) throw new Error("bug");
                        d.rcdata && d.rcdata(h(n), e, f, k(d, b, m, g, e))
                    }
                    return m
                }

                function q(b, c) {
                    var d = /^([-\w:]+)/.exec(b[c]),
                        e = {};
                    e.name = d[1].toLowerCase(), e.eflags = a.ELEMENTS[e.name];
                    for (var f = b[c].substr(d[0].length), g = c + 1, h = b.length; g < h && ">" !== b[g]; g++) f += b[g];
                    if (h <= g) return void 0;
                    for (var i = [];
                        "" !== f;)
                        if (d = S.exec(f)) {
                            if (d[4] && !d[5] || d[6] && !d[7]) {
                                for (var j = d[4] || d[6], k = !1, l = [f, b[g++]]; g < h; g++) {
                                    if (k) {
                                        if (">" === b[g]) break
                                    } else 0 <= b[g].indexOf(j) && (k = !0);
                                    l.push(b[g])
                                }
                                if (h <= g) break;
                                f = l.join("");
                                continue
                            }
                            var m = d[1].toLowerCase(),
                                n = d[2] ? r(d[3]) : "";
                            i.push(m, n), f = f.substr(d[0].length)
                        } else f = f.replace(/^[\s\S][^a-z\s]*/, "");
                    return e.attrs = i, e.next = g + 1, e
                }

                function r(a) {
                    var b = a.charCodeAt(0);
                    return (34 === b || 39 === b) && (a = a.substr(1, a.length - 2)), f(e(a))
                }

                function s(b) {
                    var c, d, e = function (a, b) {
                            d || b.push(a)
                        };
                    return i({
                        startDoc: function () {
                            c = [], d = !1
                        },
                        startTag: function (e, f, h) {
                            if (!d && a.ELEMENTS.hasOwnProperty(e)) {
                                var i = a.ELEMENTS[e];
                                if (!(i & a.eflags.FOLDABLE)) {
                                    var j = b(e, f);
                                    if (!j) return void(d = !(i & a.eflags.EMPTY));
                                    if ("object" !== typeof j) throw new Error("tagPolicy did not return object (old API?)");
                                    if (!("attribs" in j)) throw new Error("tagPolicy gave no attribs");
                                    f = j.attribs;
                                    var k, l;
                                    if ("tagName" in j ? (l = j.tagName, k = a.ELEMENTS[l]) : (l = e, k = i), i & a.eflags.OPTIONAL_ENDTAG) {
                                        var m = c[c.length - 1];
                                        !m || m.orig !== e || m.rep === l && e === l || h.push("</", m.rep, ">")
                                    }
                                    i & a.eflags.EMPTY || c.push({
                                        orig: e,
                                        rep: l
                                    }), h.push("<", l);
                                    for (var n = 0, o = f.length; n < o; n += 2) {
                                        var p = f[n],
                                            q = f[n + 1];
                                        null !== q && void 0 !== q && h.push(" ", p, '="', g(q), '"')
                                    }
                                    h.push(">"), i & a.eflags.EMPTY && !(k & a.eflags.EMPTY) && h.push("</", l, ">")
                                }
                            }
                        },
                        endTag: function (b, e) {
                            if (d) return void(d = !1);
                            if (a.ELEMENTS.hasOwnProperty(b)) {
                                var f = a.ELEMENTS[b];
                                if (!(f & (a.eflags.EMPTY | a.eflags.FOLDABLE))) {
                                    var g;
                                    if (f & a.eflags.OPTIONAL_ENDTAG)
                                        for (g = c.length; --g >= 0;) {
                                            var h = c[g].orig;
                                            if (h === b) break;
                                            if (!(a.ELEMENTS[h] & a.eflags.OPTIONAL_ENDTAG)) return
                                        } else
                                            for (g = c.length; --g >= 0 && c[g].orig !== b;);
                                    if (g < 0) return;
                                    for (var i = c.length; --i > g;) {
                                        var j = c[i].rep;
                                        a.ELEMENTS[j] & a.eflags.OPTIONAL_ENDTAG || e.push("</", j, ">")
                                    }
                                    g < c.length && (b = c[g].rep), c.length = g, e.push("</", b, ">")
                                }
                            }
                        },
                        pcdata: e,
                        rcdata: e,
                        cdata: e,
                        endDoc: function (a) {
                            for (; c.length; c.length--) a.push("</", c[c.length - 1].rep, ">")
                        }
                    })
                }

                function t(a, b, d, e, f) {
                    if (!f) return null;
                    try {
                        var g = c.parse("" + a);
                        if (g && (!g.hasScheme() || X.test(g.getScheme()))) {
                            var h = f(g, b, d, e);
                            return h ? h.toString() : null
                        }
                    } catch (i) {
                        return null
                    }
                    return null
                }

                function u(a, b, c, d, e) {
                    if (c || a(b + " removed", {
                        change: "removed",
                        tagName: b
                    }), d !== e) {
                        var f = "changed";
                        d && !e ? f = "removed" : !d && e && (f = "added"), a(b + "." + c + " " + f, {
                            change: f,
                            tagName: b,
                            attribName: c,
                            oldValue: d,
                            newValue: e
                        })
                    }
                }

                function v(a, b, c) {
                    var d;
                    return d = b + "::" + c, a.hasOwnProperty(d) ? a[d] : (d = "*::" + c, a.hasOwnProperty(d) ? a[d] : void 0)
                }

                function w(b, c) {
                    return v(a.LOADERTYPES, b, c)
                }

                function x(b, c) {
                    return v(a.URIEFFECTS, b, c)
                }

                function y(b, c, d, e, f) {
                    for (var g = 0; g < c.length; g += 2) {
                        var h, i = c[g],
                            j = c[g + 1],
                            k = j,
                            l = null;
                        if (h = b + "::" + i, (a.ATTRIBS.hasOwnProperty(h) || (h = "*::" + i, a.ATTRIBS.hasOwnProperty(h))) && (l = a.ATTRIBS[h]), null !== l) switch (l) {
                        case a.atype.NONE:
                            break;
                        case a.atype.SCRIPT:
                            j = null, f && u(f, b, i, k, j);
                            break;
                        case a.atype.STYLE:
                            if ("undefined" === typeof C) {
                                j = null, f && u(f, b, i, k, j);
                                break
                            }
                            var m = [];
                            C(j, {
                                declaration: function (b, c) {
                                    var e = b.toLowerCase(),
                                        f = E[e];
                                    f && (D(e, f, c, d ? function (b) {
                                        return t(b, a.ueffects.SAME_DOCUMENT, a.ltypes.SANDBOXED, {
                                            TYPE: "CSS",
                                            CSS_PROP: e
                                        }, d)
                                    } : null), m.push(b + ": " + c.join(" ")))
                                }
                            }), j = m.length > 0 ? m.join(" ; ") : null, f && u(f, b, i, k, j);
                            break;
                        case a.atype.ID:
                        case a.atype.IDREF:
                        case a.atype.IDREFS:
                        case a.atype.GLOBAL_NAME:
                        case a.atype.LOCAL_NAME:
                        case a.atype.CLASSES:
                            j = e ? e(j) : j, f && u(f, b, i, k, j);
                            break;
                        case a.atype.URI:
                            j = t(j, x(b, i), w(b, i), {
                                TYPE: "MARKUP",
                                XML_ATTR: i,
                                XML_TAG: b
                            }, d), f && u(f, b, i, k, j);
                            break;
                        case a.atype.URI_FRAGMENT:
                            j && "#" === j.charAt(0) ? (j = j.substring(1), j = e ? e(j) : j, null !== j && void 0 !== j && (j = "#" + j)) : j = null, f && u(f, b, i, k, j);
                            break;
                        default:
                            j = null, f && u(f, b, i, k, j)
                        } else j = null, f && u(f, b, i, k, j);
                        c[g + 1] = j
                    }
                    return c
                }

                function z(b, c, d) {
                    return function (e, f) {
                        return a.ELEMENTS[e] & a.eflags.UNSAFE ? void(d && u(d, e, void 0, void 0, void 0)) : {
                            attribs: y(e, f, b, c, d)
                        }
                    }
                }

                function A(a, b) {
                    var c = [];
                    return s(b)(a, c), c.join("")
                }

                function B(a, b, c, d) {
                    var e = z(b, c, d);
                    return A(a, e)
                }
                var C, D, E;
                "undefined" !== typeof window && (C = window.parseCssDeclarations, D = window.sanitizeCssProperty, E = window.cssSchema);
                var F = {
                    lt: "<",
                    LT: "<",
                    gt: ">",
                    GT: ">",
                    amp: "&",
                    AMP: "&",
                    quot: '"',
                    apos: "'",
                    nbsp: "聽"
                }, G = /^#(\d+)$/,
                    H = /^#x([0-9A-Fa-f]+)$/,
                    I = /^[A-Za-z][A-za-z0-9]+$/,
                    J = "undefined" !== typeof window && window.document ? window.document.createElement("textarea") : null,
                    K = /\0/g,
                    L = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
                    M = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
                    N = /&/g,
                    O = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                    P = /[<]/g,
                    Q = />/g,
                    R = /\"/g,
                    S = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                    T = 3 === "a,b".split(/(,)/).length,
                    U = a.eflags.CDATA | a.eflags.RCDATA,
                    V = {}, W = {}, X = /^(?:https?|mailto|data)$/i,
                    Y = {};
                return Y.escapeAttrib = Y.escapeAttrib = g, Y.makeHtmlSanitizer = Y.makeHtmlSanitizer = s, Y.makeSaxParser = Y.makeSaxParser = i, Y.makeTagPolicy = Y.makeTagPolicy = z, Y.normalizeRCData = Y.normalizeRCData = h, Y.sanitize = Y.sanitize = B, Y.sanitizeAttribs = Y.sanitizeAttribs = y, Y.sanitizeWithPolicy = Y.sanitizeWithPolicy = A, Y.unescapeEntities = Y.unescapeEntities = f, Y
            }(d),
                f = e.sanitize;
            d.ATTRIBS["*::style"] = 0, d.ELEMENTS.style = 0, d.ATTRIBS["a::target"] = 0, d.ELEMENTS.video = 0, d.ATTRIBS["video::src"] = 0, d.ATTRIBS["video::poster"] = 0, d.ATTRIBS["video::controls"] = 0, d.ELEMENTS.audio = 0, d.ATTRIBS["audio::src"] = 0, d.ATTRIBS["video::autoplay"] = 0, d.ATTRIBS["video::controls"] = 0, "undefined" !== typeof b && (b.exports = f)
        }, {}
    ],
    10: [
        function (a, b) {
            b.exports = {
                author: "Mapbox",
                name: "mapbox.js",
                description: "mapbox javascript api",
                version: "1.6.2",
                homepage: "http://mapbox.com/",
                repository: {
                    type: "git",
                    url: "git://github.com/mapbox/mapbox.js.git"
                },
                main: "index.js",
                dependencies: {
                    leaflet: "0.7.2",
                    mustache: "0.7.3",
                    corslite: "0.0.5",
                    json3: "git://github.com/bestiejs/json3.git#v3.2.6",
                    "sanitize-caja": "0.0.0",
                    "leaflet-hash": "~0.2.1"
                },
                scripts: {
                    test: "jshint src/*.js && mocha-phantomjs test/index.html"
                },
                devDependencies: {
                    "leaflet-hash": "git://github.com/mlevans/leaflet-hash.git#b039a3aa4e2492a5c7448075172ac26769e601d6",
                    "leaflet-fullscreen": "0.0.0",
                    "uglify-js": "2.4.8",
                    mocha: "1.17.0",
                    "expect.js": "0.3.1",
                    sinon: "1.8.2",
                    "mocha-phantomjs": "3.1.6",
                    happen: "0.1.3",
                    browserify: "3.23.1",
                    jshint: "2.4.4",
                    "clean-css": "~2.0.7"
                },
                optionalDependencies: {},
                engines: {
                    node: "*"
                }
            }
        }, {}
    ],
    11: [
        function (a, b) {
            "use strict";
            b.exports = {
                HTTP_URLS: ["http://a.tiles.mapbox.com/v3/", "http://b.tiles.mapbox.com/v3/", "http://c.tiles.mapbox.com/v3/", "http://d.tiles.mapbox.com/v3/"],
                FORCE_HTTPS: !1,
                HTTPS_URLS: ["https://a.tiles.mapbox.com/v3/", "https://b.tiles.mapbox.com/v3/", "https://c.tiles.mapbox.com/v3/", "https://d.tiles.mapbox.com/v3/"]
            }
        }, {}
    ],
    12: [
        function (a, b) {
            "use strict";
            var c = a("./util"),
                d = a("./url"),
                e = a("./request"),
                f = a("./marker"),
                g = a("./simplestyle"),
                h = L.FeatureGroup.extend({
                    options: {
                        filter: function () {
                            return !0
                        },
                        sanitizer: a("sanitize-caja"),
                        style: g.style
                    },
                    initialize: function (a, b) {
                        L.setOptions(this, b), this._layers = {}, "string" === typeof a ? c.idUrl(a, this) : a && "object" === typeof a && this.setGeoJSON(a)
                    },
                    setGeoJSON: function (a) {
                        return this._geojson = a, this.clearLayers(), this._initialize(a), this
                    },
                    getGeoJSON: function () {
                        return this._geojson
                    },
                    loadURL: function (a) {
                        return this._request && "abort" in this._request && this._request.abort(), a = d.jsonify(a), this._request = e(a, L.bind(function (b, d) {
                            this._request = null, b && "abort" !== b.type ? (c.log("could not load features at " + a), this.fire("error", {
                                error: b
                            })) : d && (this.setGeoJSON(d), this.fire("ready"))
                        }, this)), this
                    },
                    loadID: function (a) {
                        return this.loadURL(d.base() + a + "/markers.geojson")
                    },
                    setFilter: function (a) {
                        return this.options.filter = a, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
                    },
                    getFilter: function () {
                        return this.options.filter
                    },
                    _initialize: function (a) {
                        var b, c, d = L.Util.isArray(a) ? a : a.features;
                        if (d)
                            for (b = 0, c = d.length; b < c; b++)(d[b].geometries || d[b].geometry || d[b].features) && this._initialize(d[b]);
                        else if (this.options.filter(a)) {
                            var e = L.GeoJSON.geometryToLayer(a, f.style),
                                h = f.createPopup(a, this.options.sanitizer);
                            "setStyle" in e && e.setStyle(g.style(a)), e.feature = a, h && e.bindPopup(h, {
                                closeButton: !1
                            }), this.addLayer(e)
                        }
                    }
                });
            b.exports = function (a, b) {
                return new h(a, b)
            }
        }, {
            "./marker": 22,
            "./request": 23,
            "./simplestyle": 25,
            "./url": 27,
            "./util": 28,
            "sanitize-caja": 8
        }
    ],
    13: [
        function (a, b) {
            "use strict";
            var c = a("./util"),
                d = a("./url"),
                e = a("./request");
            b.exports = function (a) {
                var b, f = {};
                return f.getURL = function () {
                    return b
                }, f.setURL = function (a) {
                    return b = d.jsonify(a), f
                }, f.setID = function (a) {
                    return c.strict(a, "string"), f.setURL(d.base() + a + "/geocode/{query}.json"), f
                }, f.setTileJSON = function (a) {
                    return c.strict(a, "object"), f.setURL(a.geocoder), f
                }, f.queryURL = function (a) {
                    if (c.strict(a, "string"), !f.getURL()) throw new Error("Geocoding map ID not set");
                    return L.Util.template(f.getURL(), {
                        query: encodeURIComponent(a)
                    })
                }, f.query = function (a, b) {
                    return c.strict(a, "string"), c.strict(b, "function"), e(f.queryURL(a), function (a, d) {
                        if (d && d.results && d.results.length) {
                            var e = {
                                results: d.results,
                                latlng: [d.results[0][0].lat, d.results[0][0].lon]
                            };
                            void 0 !== d.results[0][0].bounds && (e.bounds = d.results[0][0].bounds, e.lbounds = c.lbounds(e.bounds)), b(null, e)
                        } else b(a || !0)
                    }), f
                }, f.reverseQuery = function (a, b) {
                    function c(a) {
                        return void 0 !== a.lat && void 0 !== a.lng ? a.lng + "," + a.lat : void 0 !== a.lat && void 0 !== a.lon ? a.lon + "," + a.lat : a[0] + "," + a[1]
                    }
                    var d = "";
                    if (a.length && a[0].length) {
                        for (var g = 0, h = []; g < a.length; g++) h.push(c(a[g]));
                        d = h.join(";")
                    } else d = c(a);
                    return e(f.queryURL(d), function (a, c) {
                        b(a, c)
                    }), f
                }, "string" === typeof a ? -1 == a.indexOf("/") ? f.setID(a) : f.setURL(a) : "object" === typeof a && f.setTileJSON(a), f
            }
        }, {
            "./request": 23,
            "./url": 27,
            "./util": 28
        }
    ],
    14: [
        function (a, b) {
            "use strict";
            var c = a("./geocoder"),
                d = L.Control.extend({
                    includes: L.Mixin.Events,
                    options: {
                        position: "topleft",
                        pointZoom: 16,
                        keepOpen: !1
                    },
                    initialize: function (a, b) {
                        L.Util.setOptions(this, b), this.geocoder = c(a)
                    },
                    setURL: function (a) {
                        return this.geocoder.setURL(a), this
                    },
                    getURL: function () {
                        return this.geocoder.getURL()
                    },
                    setID: function (a) {
                        return this.geocoder.setID(a), this
                    },
                    setTileJSON: function (a) {
                        return this.geocoder.setTileJSON(a), this
                    },
                    _toggle: function (a) {
                        a && L.DomEvent.stop(a), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select())
                    },
                    _closeIfOpen: function () {
                        L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur())
                    },
                    onAdd: function (a) {
                        var b = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
                            c = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", b),
                            d = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", b),
                            e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", b),
                            f = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", e),
                            g = L.DomUtil.create("input", "", f);
                        return c.href = "#", c.innerHTML = "&nbsp;", g.type = "text", g.setAttribute("placeholder", "Search"), L.DomEvent.addListener(f, "submit", this._geocode, this), L.DomEvent.disableClickPropagation(b), this._map = a, this._results = d, this._input = g, this._form = f, this.options.keepOpen ? L.DomUtil.addClass(b, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(c, "click", this._toggle, this)), b
                    },
                    _geocode: function (a) {
                        L.DomEvent.preventDefault(a), L.DomUtil.addClass(this._container, "searching");
                        var b = this._map,
                            c = L.bind(function (a, b) {
                                if (L.DomUtil.removeClass(this._container, "searching"), !a && b && b.results && b.results.length) {
                                    if (this._results.innerHTML = "", 1 === b.results.length) this.fire("autoselect", {
                                        data: b
                                    }), d(b.results[0][0]), this._closeIfOpen();
                                    else {
                                        for (var c = 0, e = Math.min(b.results.length, 5); c < e; c++) {
                                            for (var f = [], g = 0; g < b.results[c].length; g++) b.results[c][g].name && f.push(b.results[c][g].name);
                                            if (f.length) {
                                                var h = L.DomUtil.create("a", "", this._results);
                                                h.innerHTML = f.join(", "), h.href = "#", L.bind(function (a) {
                                                    L.DomEvent.addListener(h, "click", function (b) {
                                                        d(a[0]), L.DomEvent.stop(b), this.fire("select", {
                                                            data: a
                                                        })
                                                    }, this)
                                                }, this)(b.results[c])
                                            }
                                        }
                                        if (b.results.length > 5) {
                                            var i = L.DomUtil.create("span", "", this._results);
                                            i.innerHTML = "Top 5 of " + b.results.length + "  results"
                                        }
                                    }
                                    this.fire("found", b)
                                } else this.fire("error", {
                                    error: a
                                })
                            }, this),
                            d = L.bind(function (a) {
                                if (a.bounds) {
                                    var c = a.bounds;
                                    this._map.fitBounds(L.latLngBounds([
                                        [c[1], c[0]],
                                        [c[3], c[2]]
                                    ]))
                                } else void 0 !== a.lat && void 0 !== a.lon && this._map.setView([a.lat, a.lon], void 0 === b.getZoom() ? this.options.pointZoom : Math.max(b.getZoom(), this.options.pointZoom))
                            }, this);
                        this.geocoder.query(this._input.value, c)
                    }
                });
            b.exports = function (a, b) {
                return new d(a, b)
            }
        }, {
            "./geocoder": 13
        }
    ],
    15: [
        function (a, b) {
            "use strict";

            function c(a) {
                return a >= 93 && a--, a >= 35 && a--, a - 32
            }
            b.exports = function (a) {
                return function (b, d) {
                    if (a) {
                        var e = c(a.grid[d].charCodeAt(b)),
                            f = a.keys[e];
                        return a.data[f]
                    }
                }
            }
        }, {}
    ],
    16: [
        function (a, b) {
            "use strict";
            var c = a("./util"),
                d = a("mustache"),
                e = L.Control.extend({
                    options: {
                        pinnable: !0,
                        follow: !1,
                        sanitizer: a("sanitize-caja"),
                        touchTeaser: !0,
                        location: !0
                    },
                    _currentContent: "",
                    _pinned: !1,
                    initialize: function (a, b) {
                        L.Util.setOptions(this, b), c.strict_instance(a, L.Class, "L.mapbox.gridLayer"), this._layer = a
                    },
                    setTemplate: function (a) {
                        return c.strict(a, "string"), this.options.template = a, this
                    },
                    _template: function (a, b) {
                        if (b) {
                            var c = this.options.template || this._layer.getTileJSON().template;
                            if (c) {
                                var e = {};
                                return e["__" + a + "__"] = !0, this.options.sanitizer(d.to_html(c, L.extend(e, b)))
                            }
                        }
                    },
                    _show: function (a, b) {
                        a !== this._currentContent && (this._currentContent = a, this.options.follow ? (this._popup.setContent(a).setLatLng(b.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = a))
                    },
                    hide: function () {
                        return this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable"), this
                    },
                    _mouseover: function (a) {
                        if (a.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"), !this._pinned) {
                            var b = this._template("teaser", a.data);
                            b ? this._show(b, a) : this.hide()
                        }
                    },
                    _mousemove: function (a) {
                        this._pinned || this.options.follow && this._popup.setLatLng(a.latLng)
                    },
                    _navigateTo: function (a) {
                        window.top.location.href = a
                    },
                    _click: function (a) {
                        var b = this._template("location", a.data);
                        if (this.options.location && b && 0 === b.search(/^https?:/)) return this._navigateTo(this._template("location", a.data));
                        if (this.options.pinnable) {
                            var c = this._template("full", a.data);
                            !c && this.options.touchTeaser && L.Browser.touch && (c = this._template("teaser", a.data)), c ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show(c, a)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this.hide())
                        }
                    },
                    _onPopupClose: function () {
                        this._currentContent = null, this._pinned = !1
                    },
                    _createClosebutton: function (a, b) {
                        var c = L.DomUtil.create("a", "close", a);
                        return c.innerHTML = "close", c.href = "#", c.title = "close", L.DomEvent.on(c, "click", L.DomEvent.stopPropagation).on(c, "mousedown", L.DomEvent.stopPropagation).on(c, "dblclick", L.DomEvent.stopPropagation).on(c, "click", L.DomEvent.preventDefault).on(c, "click", b, this), c
                    },
                    onAdd: function (a) {
                        this._map = a;
                        var b = "leaflet-control-grid map-tooltip",
                            c = L.DomUtil.create("div", b),
                            d = L.DomUtil.create("div", "map-tooltip-content");
                        return c.style.display = "none", this._createClosebutton(c, this.hide), c.appendChild(d), this._contentWrapper = d, this._popup = new L.Popup({
                            autoPan: !1,
                            closeOnClick: !1
                        }), a.on("popupclose", this._onPopupClose, this), L.DomEvent.disableClickPropagation(c).addListener(c, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), c
                    },
                    onRemove: function (a) {
                        a.off("popupclose", this._onPopupClose, this), this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this)
                    }
                });
            b.exports = function (a, b) {
                return new e(a, b)
            }
        }, {
            "./util": 28,
            mustache: 7,
            "sanitize-caja": 8
        }
    ],
    17: [
        function (a, b) {
            "use strict";
            var c = a("./util"),
                d = (a("./url"), a("./request")),
                e = a("./grid"),
                f = L.Class.extend({
                    includes: [L.Mixin.Events, a("./load_tilejson")],
                    options: {
                        template: function () {
                            return ""
                        }
                    },
                    _mouseOn: null,
                    _tilejson: {},
                    _cache: {},
                    initialize: function (a, b) {
                        L.Util.setOptions(this, b), this._loadTileJSON(a)
                    },
                    _setTileJSON: function (a) {
                        return c.strict(a, "object"), L.extend(this.options, {
                            grids: a.grids,
                            minZoom: a.minzoom,
                            maxZoom: a.maxzoom,
                            bounds: a.bounds && c.lbounds(a.bounds)
                        }), this._tilejson = a, this._cache = {}, this._update(), this
                    },
                    getTileJSON: function () {
                        return this._tilejson
                    },
                    active: function () {
                        return !!(this._map && this.options.grids && this.options.grids.length)
                    },
                    addTo: function (a) {
                        return a.addLayer(this), this
                    },
                    onAdd: function (a) {
                        this._map = a, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
                    },
                    onRemove: function () {
                        this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
                    },
                    getData: function (a, b) {
                        if (this.active()) {
                            var c = this._map,
                                d = c.project(a.wrap()),
                                e = 256,
                                f = 4,
                                g = Math.floor(d.x / e),
                                h = Math.floor(d.y / e),
                                i = c.options.crs.scale(c.getZoom()) / e;
                            return g = (g + i) % i, h = (h + i) % i, this._getTile(c.getZoom(), g, h, function (a) {
                                var c = Math.floor((d.x - g * e) / f),
                                    i = Math.floor((d.y - h * e) / f);
                                b(a(c, i))
                            }), this
                        }
                    },
                    _click: function (a) {
                        this.getData(a.latlng, L.bind(function (b) {
                            this.fire("click", {
                                latLng: a.latlng,
                                data: b
                            })
                        }, this))
                    },
                    _move: function (a) {
                        this.getData(a.latlng, L.bind(function (b) {
                            b !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
                                latLng: a.latlng,
                                data: this._mouseOn
                            }), this.fire("mouseover", {
                                latLng: a.latlng,
                                data: b
                            }), this._mouseOn = b) : this.fire("mousemove", {
                                latLng: a.latlng,
                                data: b
                            })
                        }, this))
                    },
                    _getTileURL: function (a) {
                        var b = this.options.grids,
                            c = (a.x + a.y) % b.length,
                            d = b[c];
                        return L.Util.template(d, a)
                    },
                    _update: function () {
                        if (this.active()) {
                            var a = this._map.getPixelBounds(),
                                b = this._map.getZoom(),
                                c = 256;
                            if (!(b > this.options.maxZoom || b < this.options.minZoom))
                                for (var d = new L.Point(Math.floor(a.min.x / c), Math.floor(a.min.y / c)), e = new L.Point(Math.floor(a.max.x / c), Math.floor(a.max.y / c)), f = this._map.options.crs.scale(b) / c, g = d.x; g <= e.x; g++)
                                    for (var h = d.y; h <= e.y; h++) {
                                        var i = (g + f) % f,
                                            j = (h + f) % f;
                                        this._getTile(b, i, j)
                                    }
                        }
                    },
                    _getTile: function (a, b, c, f) {
                        var g = a + "_" + b + "_" + c,
                            h = L.point(b, c);
                        if (h.z = a, this._tileShouldBeLoaded(h)) {
                            if (g in this._cache) {
                                if (!f) return;
                                return void("function" === typeof this._cache[g] ? f(this._cache[g]) : this._cache[g].push(f))
                            }
                            this._cache[g] = [], f && this._cache[g].push(f), d(this._getTileURL(h), L.bind(function (a, b) {
                                var c = this._cache[g];
                                this._cache[g] = e(b);
                                for (var d = 0; d < c.length; ++d) c[d](this._cache[g])
                            }, this))
                        }
                    },
                    _tileShouldBeLoaded: function (a) {
                        if (a.z > this.options.maxZoom || a.z < this.options.minZoom) return !1;
                        if (this.options.bounds) {
                            var b = 256,
                                c = a.multiplyBy(b),
                                d = c.add(new L.Point(b, b)),
                                e = this._map.unproject(c),
                                f = this._map.unproject(d),
                                g = new L.LatLngBounds([e, f]);
                            if (!this.options.bounds.intersects(g)) return !1
                        }
                        return !0
                    }
                });
            b.exports = function (a, b) {
                return new f(a, b)
            }
        }, {
            "./grid": 15,
            "./load_tilejson": 20,
            "./request": 23,
            "./url": 27,
            "./util": 28
        }
    ],
    18: [
        function (a, b) {
            "use strict";
            var c = L.Control.extend({
                options: {
                    position: "bottomright",
                    sanitizer: a("sanitize-caja")
                },
                initialize: function (a) {
                    L.setOptions(this, a), this._info = {}
                },
                onAdd: function (a) {
                    this._container = L.DomUtil.create("div", "mapbox-control-info mapbox-small"), this._content = L.DomUtil.create("div", "map-info-container", this._container), ("bottomright" === this.options.position || "topright" === this.options.position) && (this._container.className += " mapbox-control-info-right");
                    var b = L.DomUtil.create("a", "mapbox-info-toggle mapbox-icon mapbox-icon-info", this._container);
                    b.href = "#", L.DomEvent.addListener(b, "click", this._showInfo, this), L.DomEvent.disableClickPropagation(this._container);
                    for (var c in a._layers) a._layers[c].getAttribution && this.addInfo(a._layers[c].getAttribution());
                    return a.on("moveend", this._editLink, this).on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                },
                onRemove: function (a) {
                    a.off("moveend", this._editLink, this).off("layeradd", this._onLayerAdd, this).off("layerremove", this._onLayerRemove, this)
                },
                addInfo: function (a) {
                    return a ? (this._info[a] || (this._info[a] = 0), this._info[a] = !0, this._update()) : this
                },
                removeInfo: function (a) {
                    return a ? (this._info[a] && (this._info[a] = !1), this._update()) : this
                },
                _showInfo: function (a) {
                    return L.DomEvent.preventDefault(a), this._active === !0 ? this._hidecontent() : (L.DomUtil.addClass(this._container, "active"), this._active = !0, void this._update())
                },
                _hidecontent: function () {
                    this._content.innerHTML = "", this._active = !1, L.DomUtil.removeClass(this._container, "active")
                },
                _update: function () {
                    if (!this._map) return this;
                    this._content.innerHTML = "";
                    var a = "none",
                        b = [];
                    for (var c in this._info) this._info.hasOwnProperty(c) && this._info[c] && (b.push(this.options.sanitizer(c)), a = "block");
                    return this._content.innerHTML += b.join(" | "), this._editLink(), this._container.style.display = a, this
                },
                _editLink: function () {
                    if (this._content.getElementsByClassName) {
                        var a = this._content.getElementsByClassName("mapbox-improve-map");
                        if (a.length && this._map._loaded)
                            for (var b = this._map.getCenter().wrap(), c = this._tilejson || this._map._tilejson || {}, d = c.id || "", e = 0; e < a.length; e++) a[e].href = a[e].href.split("#")[0] + "#" + d + "/" + b.lng.toFixed(3) + "/" + b.lat.toFixed(3) + "/" + this._map.getZoom()
                    }
                },
                _onLayerAdd: function (a) {
                    a.layer.getAttribution && a.layer.getAttribution() ? this.addInfo(a.layer.getAttribution()) : "on" in a.layer && a.layer.getAttribution && a.layer.on("ready", L.bind(function () {
                        this.addInfo(a.layer.getAttribution())
                    }, this))
                },
                _onLayerRemove: function (a) {
                    a.layer.getAttribution && this.removeInfo(a.layer.getAttribution())
                }
            });
            b.exports = function (a) {
                return new c(a)
            }
        }, {
            "sanitize-caja": 8
        }
    ],
    19: [
        function (a, b) {
            "use strict";
            var c = L.Control.extend({
                options: {
                    position: "bottomright",
                    sanitizer: a("sanitize-caja")
                },
                initialize: function (a) {
                    L.setOptions(this, a), this._legends = {}
                },
                onAdd: function () {
                    return this._container = L.DomUtil.create("div", "map-legends wax-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
                },
                addLegend: function (a) {
                    return a ? (this._legends[a] || (this._legends[a] = 0), this._legends[a]++, this._update()) : this
                },
                removeLegend: function (a) {
                    return a ? (this._legends[a] && this._legends[a]--, this._update()) : this
                },
                _update: function () {
                    if (!this._map) return this;
                    this._container.innerHTML = "";
                    var a = "none";
                    for (var b in this._legends)
                        if (this._legends.hasOwnProperty(b) && this._legends[b]) {
                            var c = L.DomUtil.create("div", "map-legend wax-legend", this._container);
                            c.innerHTML = this.options.sanitizer(b), a = "block"
                        }
                    return this._container.style.display = a, this
                }
            });
            b.exports = function (a) {
                return new c(a)
            }
        }, {
            "sanitize-caja": 8
        }
    ],
    20: [
        function (a, b) {
            "use strict";
            var c = a("./request"),
                d = a("./url"),
                e = a("./util");
            b.exports = {
                _loadTileJSON: function (a) {
                    "string" === typeof a ? (-1 == a.indexOf("/") && (a = d.base() + a + ".json"), c(d.secureFlag(a), L.bind(function (b, c) {
                        b ? (e.log("could not load TileJSON at " + a), this.fire("error", {
                            error: b
                        })) : c && (this._setTileJSON(c), this.fire("ready"))
                    }, this))) : a && "object" === typeof a && this._setTileJSON(a)
                }
            }
        }, {
            "./request": 23,
            "./url": 27,
            "./util": 28
        }
    ],
    21: [
        function (a, b) {
            "use strict";
            var c = (a("./util"), a("./tile_layer")),
                d = a("./feature_layer"),
                e = a("./grid_layer"),
                f = a("./grid_control"),
                g = a("./info_control"),
                h = a("./share_control"),
                i = a("./legend_control"),
                j = L.Map.extend({
                    includes: [a("./load_tilejson")],
                    options: {
                        tileLayer: {},
                        featureLayer: {},
                        gridLayer: {},
                        legendControl: {},
                        gridControl: {},
                        infoControl: {},
                        attributionControl: !1,
                        shareControl: !1
                    },
                    _tilejson: {},
                    initialize: function (a, b, j) {
                        L.Map.prototype.initialize.call(this, a, j), this.attributionControl && this.attributionControl.setPrefix(""), this.options.tileLayer && (this.tileLayer = c(void 0, this.options.tileLayer), this.addLayer(this.tileLayer)), this.options.featureLayer === !1 || this.options.markerLayer === !1 ? this.options.featureLayer = this.options.markerLayer = !1 : this.options.markerLayer && (this.options.featureLayer = this.options.markerLayer), this.options.featureLayer && (this.featureLayer = this.markerLayer = d(void 0, this.options.featureLayer), this.addLayer(this.featureLayer)), this.options.gridLayer && (this.gridLayer = e(void 0, this.options.gridLayer), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = f(this.gridLayer, this.options.gridControl), this.addControl(this.gridControl)), this.options.infoControl && (this.infoControl = g(this.options.infoControl), this.addControl(this.infoControl)), this.options.legendControl && (this.legendControl = i(this.options.legendControl), this.addControl(this.legendControl)), this.options.shareControl && (this.shareControl = h(void 0, this.options.shareControl), this.addControl(this.shareControl)), this._loadTileJSON(b)
                    },
                    addLayer: function (a) {
                        return "on" in a && a.on("ready", L.bind(function () {
                            this._updateLayer(a)
                        }, this)), L.Map.prototype.addLayer.call(this, a)
                    },
                    _setTileJSON: function (a) {
                        return this._tilejson = a, this._initialize(a), this
                    },
                    getTileJSON: function () {
                        return this._tilejson
                    },
                    _initialize: function (a) {
                        if (this.tileLayer && (this.tileLayer._setTileJSON(a), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && a.data && a.data[0] && this.featureLayer.loadURL(a.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(a), this._updateLayer(this.gridLayer)), this.infoControl && a.attribution && this.infoControl.addInfo(a.attribution), this.legendControl && a.legend && this.legendControl.addLegend(a.legend), this.shareControl && this.shareControl._setTileJSON(a), !this._loaded && a.center) {
                            var b = a.center[2],
                                c = L.latLng(a.center[1], a.center[0]);
                            this.setView(c, b)
                        }
                    },
                    _updateLayer: function (a) {
                        a.options && (this.infoControl && this._loaded && this.infoControl.addInfo(a.options.infoControl), this.attributionControl && this._loaded && a.getAttribution && this.attributionControl.addAttribution(a.getAttribution()), L.stamp(a) in this._zoomBoundLayers || !a.options.maxZoom && !a.options.minZoom || (this._zoomBoundLayers[L.stamp(a)] = a), this._updateZoomLevels())
                    }
                });
            b.exports = function (a, b, c) {
                return new j(a, b, c)
            }
        }, {
            "./feature_layer": 12,
            "./grid_control": 16,
            "./grid_layer": 17,
            "./info_control": 18,
            "./legend_control": 19,
            "./load_tilejson": 20,
            "./share_control": 24,
            "./tile_layer": 26,
            "./util": 28
        }
    ],
    22: [
        function (a, b) {
            "use strict";

            function c(a) {
                a = a || {};
                var b = {
                    small: [20, 50],
                    medium: [30, 70],
                    large: [35, 90]
                }, c = a["marker-size"] || "medium",
                    d = a["marker-symbol"] ? "-" + a["marker-symbol"] : "",
                    e = (a["marker-color"] || "7e7e7e").replace("#", "");
                return L.icon({
                    iconUrl: f.base() + "marker/pin-" + c.charAt(0) + d + "+" + e + (L.Browser.retina ? "@2x" : "") + ".png",
                    iconSize: b[c],
                    iconAnchor: [b[c][0] / 2, b[c][1] / 2],
                    popupAnchor: [0, -b[c][1] / 2]
                })
            }

            function d(a, b) {
                return L.marker(b, {
                    icon: c(a.properties),
                    title: g.strip_tags(h(a.properties && a.properties.title || ""))
                })
            }

            function e(a, b) {
                if (!a || !a.properties) return "";
                var c = "";
                return a.properties.title && (c += '<div class="marker-title">' + a.properties.title + "</div>"), a.properties.description && (c += '<div class="marker-description">' + a.properties.description + "</div>"), (b || h)(c)
            }
            var f = a("./url"),
                g = a("./util"),
                h = a("sanitize-caja");
            b.exports = {
                icon: c,
                style: d,
                createPopup: e
            }
        }, {
            "./url": 27,
            "./util": 28,
            "sanitize-caja": 8
        }
    ],
    23: [
        function (a, b) {
            "use strict";
            var c = a("corslite"),
                d = a("json3"),
                e = a("./util").strict;
            b.exports = function (a, b) {
                function f(a, c) {
                    !a && c && (c = d.parse("g" == c.responseText[0] ? c.responseText.substring(5, c.responseText.length - 2) : c.responseText)), b(a, c)
                }
                return e(a, "string"), e(b, "function"), c(a, f)
            }
        }, {
            "./util": 28,
            corslite: 4,
            json3: 5
        }
    ],
    24: [
        function (a, b) {
            "use strict";
            var c = a("./url"),
                d = L.Control.extend({
                    includes: [a("./load_tilejson")],
                    options: {
                        position: "topleft",
                        url: ""
                    },
                    initialize: function (a, b) {
                        L.setOptions(this, b), this._loadTileJSON(a)
                    },
                    _setTileJSON: function (a) {
                        this._tilejson = a
                    },
                    onAdd: function (a) {
                        this._map = a, this._url = c;
                        var b = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar"),
                            d = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", b);
                        return d.href = "#", this._modal = a._createPane("mapbox-modal", this._map._container), this._mask = a._createPane("mapbox-modal-mask", this._modal), this._content = a._createPane("mapbox-modal-content", this._modal), L.DomEvent.addListener(d, "click", this._shareClick, this), L.DomEvent.disableClickPropagation(b), this._map.on("mousedown", this._clickOut, this), b
                    },
                    _clickOut: function (a) {
                        return this._sharing ? (L.DomEvent.preventDefault(a), L.DomUtil.removeClass(this._modal, "active"), this._content.innerHTML = "", void(this._sharing = null)) : void 0
                    },
                    _shareClick: function (a) {
                        if (L.DomEvent.stop(a), this._sharing) return this._clickOut(a);
                        var b = this._tilejson || this._map._tilejson || {}, c = encodeURIComponent(this.options.url || b.webpage || window.location),
                            d = encodeURIComponent(b.name),
                            e = this._url.base() + b.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png",
                            f = "//twitter.com/intent/tweet?status=" + d + " " + c,
                            g = "//www.facebook.com/sharer.php?u=" + c + "&t=" + encodeURIComponent(b.name),
                            h = "//www.pinterest.com/pin/create/button/?url=" + c + "&media=" + e + "&description=" + b.name,
                            i = "<h3>Share this map</h3><div class='mapbox-share-buttons'><a class='mapbox-button mapbox-button-icon mapbox-icon-facebook' target='_blank' href='{{facebook}}'>Facebook</a><a class='mapbox-button mapbox-button-icon mapbox-icon-twitter' target='_blank' href='{{twitter}}'>Twitter</a><a class='mapbox-button mapbox-button-icon mapbox-icon-pinterest' target='_blank' href='{{pinterest}}'>Pinterest</a></div>".replace("{{twitter}}", f).replace("{{facebook}}", g).replace("{{pinterest}}", h),
                            j = '<iframe width="100%" height="500px" frameBorder="0" src="{{embed}}"></iframe>'.replace("{{embed}}", b.embed || window.location),
                            k = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
                        L.DomUtil.addClass(this._modal, "active"), this._sharing = this._map._createPane("mapbox-modal-body", this._content), this._sharing.innerHTML = i;
                        var l = L.DomUtil.create("input", "mapbox-embed", this._sharing);
                        l.type = "text", l.value = j;
                        var m = L.DomUtil.create("label", "mapbox-embed-description", this._sharing);
                        m.innerHTML = k;
                        var n = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);
                        n.href = "#", L.DomEvent.disableClickPropagation(this._sharing), L.DomEvent.addListener(n, "click", this._clickOut, this), L.DomEvent.addListener(l, "click", function (a) {
                            a.target.focus(), a.target.select()
                        })
                    }
                });
            b.exports = function (a, b) {
                return new d(a, b)
            }
        }, {
            "./load_tilejson": 20,
            "./url": 27
        }
    ],
    25: [
        function (a, b) {
            "use strict";

            function c(a, b) {
                var c = {};
                for (var d in b) c[d] = void 0 === a[d] ? b[d] : a[d];
                return c
            }

            function d(a) {
                for (var b = {}, c = 0; c < g.length; c++) b[g[c][1]] = a[g[c][0]];
                return b
            }

            function e(a) {
                return d(c(a.properties || {}, f))
            }
            var f = {
                stroke: "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                fill: "#555555",
                "fill-opacity": .5
            }, g = [
                    ["stroke", "color"],
                    ["stroke-width", "weight"],
                    ["stroke-opacity", "opacity"],
                    ["fill", "fillColor"],
                    ["fill-opacity", "fillOpacity"]
                ];
            b.exports = {
                style: e,
                defaults: f
            }
        }, {}
    ],
    26: [
        function (a, b) {
            "use strict";
            var c = a("./util"),
                d = (a("./url"), L.TileLayer.extend({
                    includes: [a("./load_tilejson")],
                    options: {
                        format: "png"
                    },
                    formats: ["png", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
                    scalePrefix: "@2x.",
                    initialize: function (a, b) {
                        L.TileLayer.prototype.initialize.call(this, void 0, b), this._tilejson = {}, b && b.detectRetina && L.Browser.retina && b.retinaVersion && (a = b.retinaVersion), b && b.format && c.strict_oneof(b.format, this.formats), this._loadTileJSON(a)
                    },
                    setFormat: function (a) {
                        return c.strict(a, "string"), this.options.format = a, this.redraw(), this
                    },
                    _autoScale: function () {
                        return this.options && L.Browser.retina && this.options.detectRetina && !this.options.retinaVersion && this.options.autoscale
                    },
                    setUrl: null,
                    _setTileJSON: function (a) {
                        return c.strict(a, "object"), L.extend(this.options, {
                            tiles: a.tiles,
                            attribution: a.attribution,
                            minZoom: a.minzoom,
                            maxZoom: a.maxzoom,
                            autoscale: a.autoscale || !1,
                            tms: "tms" === a.scheme,
                            bounds: a.bounds && c.lbounds(a.bounds)
                        }), this._tilejson = a, this.redraw(), this
                    },
                    getTileJSON: function () {
                        return this._tilejson
                    },
                    getTileUrl: function (a) {
                        var b = this.options.tiles,
                            c = Math.floor(Math.abs(a.x + a.y) % b.length),
                            d = b[c],
                            e = L.Util.template(d, a);
                        return e ? e.replace(".png", (this._autoScale() ? this.scalePrefix : ".") + this.options.format) : e
                    },
                    _update: function () {
                        this.options.tiles && L.TileLayer.prototype._update.call(this)
                    }
                }));
            b.exports = function (a, b) {
                return new d(a, b)
            }
        }, {
            "./load_tilejson": 20,
            "./url": 27,
            "./util": 28
        }
    ],
    27: [
        function (a, b) {
            "use strict";
            var c = a("./config");
            b.exports = {
                isSSL: function () {
                    return "https:" === document.location.protocol || c.FORCE_HTTPS
                },
                base: function (a) {
                    var b = this.isSSL() ? c.HTTPS_URLS : c.HTTP_URLS;
                    return void 0 === a || "number" !== typeof a ? b[0] : b[a % b.length]
                },
                secureFlag: function (a) {
                    return this.isSSL() ? a.match(/(\?|&)secure/) ? a : -1 !== a.indexOf("?") ? a + "&secure" : a + "?secure" : a
                },
                jsonify: function (a) {
                    return a.replace(/\.(geo)?jsonp(?=$|\?)/, ".$1json")
                }
            }
        }, {
            "./config": 11
        }
    ],
    28: [
        function (a, b) {
            "use strict";

            function c(a, b) {
                if (!b || !b.length) return !1;
                for (var c = 0; c < b.length; c++)
                    if (b[c] == a) return !0;
                return !1
            }
            b.exports = {
                idUrl: function (a, b) {
                    -1 == a.indexOf("/") ? b.loadID(a) : b.loadURL(a)
                },
                log: function (a) {
                    console && "function" === typeof console.error && console.error(a)
                },
                strict: function (a, b) {
                    if (typeof a !== b) throw new Error("Invalid argument: " + b + " expected")
                },
                strict_instance: function (a, b, c) {
                    if (!(a instanceof b)) throw new Error("Invalid argument: " + c + " expected")
                },
                strict_oneof: function (a, b) {
                    if (!c(a, b)) throw new Error("Invalid argument: " + a + " given, valid values are " + b.join(", "))
                },
                strip_tags: function (a) {
                    return a.replace(/<[^<]+>/g, "")
                },
                lbounds: function (a) {
                    return new L.LatLngBounds([
                        [a[1], a[0]],
                        [a[3], a[2]]
                    ])
                }
            }
        }, {}
    ]
}, {}, [1]), window.goog && goog.provide("P.customMapZoomControl"), L.Control.CustomMapZoomControl = L.Control.Zoom.extend({
    options: {
        position: "bottomright",
        rightMostPoint: 515
    },
    _getZoomLatLng: function () {
        var a = this._map,
            b = this.options.rightMostPoint / 2,
            c = P.Viewport.width / 2 + b,
            d = P.Viewport.height / 2,
            e = L.point(c, d),
            f = a.containerPointToLatLng(e);
        return f
    },
    _zoomIn: function (a) {
        var b = this._map,
            c = b.getZoom();
        if (!(c >= b.getMaxZoom())) {
            var d = this._getZoomLatLng();
            c += a.shiftKey ? 3 : 1, b.setZoomAround(d, c)
        }
    },
    _zoomOut: function (a) {
        var b = this._map,
            c = b.getZoom();
        if (!(c <= b.getMinZoom())) {
            var d = this._getZoomLatLng();
            c -= a.shiftKey ? 3 : 1, b.setZoomAround(d, c)
        }
    }
}), L.control.customMapZoomControl = function (a) {
    return new L.Control.CustomMapZoomControl(a)
},
function (a, b) {
    L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        },
        initialize: function (a) {
            L.Util.setOptions(this, a), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = []
        },
        addLayer: function (a) {
            if (a instanceof L.LayerGroup) {
                var b = [];
                for (var c in a._layers) b.push(a._layers[c]);
                return this.addLayers(b)
            }
            if (!a.getLatLng) return this._nonPointGroup.addLayer(a), this;
            if (!this._map) return this._needsClustering.push(a), this;
            if (this.hasLayer(a)) return this;
            this._unspiderfy && this._unspiderfy(), this._addLayer(a, this._maxZoom);
            var d = a,
                e = this._map.getZoom();
            if (a.__parent)
                for (; d.__parent._zoom >= e;) d = d.__parent;
            return this._currentShownBounds.contains(d.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(a, d) : this._animationAddLayerNonAnimated(a, d)), this
        },
        removeLayer: function (a) {
            if (a instanceof L.LayerGroup) {
                var b = [];
                for (var c in a._layers) b.push(a._layers[c]);
                return this.removeLayers(b)
            }
            return a.getLatLng ? this._map ? a.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(a)), this._removeLayer(a, !0), this._featureGroup.hasLayer(a) && (this._featureGroup.removeLayer(a), a.setOpacity && a.setOpacity(1)), this) : this : (!this._arraySplice(this._needsClustering, a) && this.hasLayer(a) && this._needsRemoving.push(a), this) : (this._nonPointGroup.removeLayer(a), this)
        },
        addLayers: function (a) {
            var b, c, d, e, f = this._featureGroup,
                g = this._nonPointGroup,
                h = this.options.chunkedLoading,
                i = this.options.chunkInterval,
                j = this.options.chunkProgress;
            if (this._map) {
                var k = 0,
                    l = (new Date).getTime(),
                    m = L.bind(function () {
                        for (var b = (new Date).getTime(); k < a.length; k++) {
                            if (h && k % 200 === 0) {
                                var c = (new Date).getTime() - b;
                                if (c > i) break
                            }
                            if (e = a[k], e.getLatLng) {
                                if (!this.hasLayer(e) && (this._addLayer(e, this._maxZoom), e.__parent && 2 === e.__parent.getChildCount())) {
                                    var d = e.__parent.getAllChildMarkers(),
                                        n = d[0] === e ? d[1] : d[0];
                                    f.removeLayer(n)
                                }
                            } else g.addLayer(e)
                        }
                        j && j(k, a.length, (new Date).getTime() - l), k === a.length ? (this._featureGroup.eachLayer(function (a) {
                            a instanceof L.MarkerCluster && a._iconNeedsUpdate && a._updateIcon()
                        }), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(m, this.options.chunkDelay)
                    }, this);
                m()
            } else {
                for (b = [], c = 0, d = a.length; c < d; c++) e = a[c], e.getLatLng ? this.hasLayer(e) || b.push(e) : g.addLayer(e);
                this._needsClustering = this._needsClustering.concat(b)
            }
            return this
        },
        removeLayers: function (a) {
            var b, c, d, e = this._featureGroup,
                f = this._nonPointGroup;
            if (!this._map) {
                for (b = 0, c = a.length; b < c; b++) d = a[b], this._arraySplice(this._needsClustering, d), f.removeLayer(d);
                return this
            }
            for (b = 0, c = a.length; b < c; b++) d = a[b], d.__parent ? (this._removeLayer(d, !0, !0), e.hasLayer(d) && (e.removeLayer(d), d.setOpacity && d.setOpacity(1))) : f.removeLayer(d);
            return this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), e.eachLayer(function (a) {
                a instanceof L.MarkerCluster && a._updateIcon()
            }), this
        },
        clearLayers: function () {
            return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function (a) {
                delete a.__parent
            }), this._map && this._generateInitialClusters(), this
        },
        getBounds: function () {
            var a = new L.LatLngBounds;
            this._topClusterLevel && a.extend(this._topClusterLevel._bounds);
            for (var b = this._needsClustering.length - 1; b >= 0; b--) a.extend(this._needsClustering[b].getLatLng());
            return a.extend(this._nonPointGroup.getBounds()), a
        },
        eachLayer: function (a, b) {
            var c, d = this._needsClustering.slice();
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(d), c = d.length - 1; c >= 0; c--) a.call(b, d[c]);
            this._nonPointGroup.eachLayer(a, b)
        },
        getLayers: function () {
            var a = [];
            return this.eachLayer(function (b) {
                a.push(b)
            }), a
        },
        getLayer: function (a) {
            var b = null;
            return this.eachLayer(function (c) {
                L.stamp(c) === a && (b = c)
            }), b
        },
        hasLayer: function (a) {
            if (!a) return !1;
            var b, c = this._needsClustering;
            for (b = c.length - 1; b >= 0; b--)
                if (c[b] === a) return !0;
            for (c = this._needsRemoving, b = c.length - 1; b >= 0; b--)
                if (c[b] === a) return !1;
            return !(!a.__parent || a.__parent._group !== this) || this._nonPointGroup.hasLayer(a)
        },
        zoomToShowLayer: function (a, b) {
            var c = function () {
                if ((a._icon || a.__parent._icon) && !this._inZoomAnimation)
                    if (this._map.off("moveend", c, this), this.off("animationend", c, this), a._icon) b();
                    else if (a.__parent._icon) {
                    var d = function () {
                        this.off("spiderfied", d, this), b()
                    };
                    this.on("spiderfied", d, this), a.__parent.spiderfy()
                }
            };
            a._icon && this._map.getBounds().contains(a.getLatLng()) ? b() : a.__parent._zoom < this._map.getZoom() ? (this._map.on("moveend", c, this), this._map.panTo(a.getLatLng())) : (this._map.on("moveend", c, this), this.on("animationend", c, this), this._map.setView(a.getLatLng(), a.__parent._zoom + 1), a.__parent.zoomToBounds())
        },
        onAdd: function (a) {
            this._map = a;
            var b, c, d;
            if (!isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";
            for (this._featureGroup.onAdd(a), this._nonPointGroup.onAdd(a), this._gridClusters || this._generateInitialClusters(), b = 0, c = this._needsRemoving.length; b < c; b++) d = this._needsRemoving[b], this._removeLayer(d, !0);
            this._needsRemoving = [], this._zoom = this._map.getZoom(), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), c = this._needsClustering, this._needsClustering = [], this.addLayers(c)
        },
        onRemove: function (a) {
            a.off("zoomend", this._zoomEnd, this), a.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), this._hideCoverage(), this._featureGroup.onRemove(a), this._nonPointGroup.onRemove(a), this._featureGroup.clearLayers(), this._map = null
        },
        getVisibleParent: function (a) {
            for (var b = a; b && !b._icon;) b = b.__parent;
            return b || null
        },
        _arraySplice: function (a, b) {
            for (var c = a.length - 1; c >= 0; c--)
                if (a[c] === b) return a.splice(c, 1), !0
        },
        _removeLayer: function (a, b, c) {
            var d = this._gridClusters,
                e = this._gridUnclustered,
                f = this._featureGroup,
                g = this._map;
            if (b)
                for (var h = this._maxZoom; h >= 0 && e[h].removeObject(a, g.project(a.getLatLng(), h)); h--);
            var i, j = a.__parent,
                k = j._markers;
            for (this._arraySplice(k, a); j && (j._childCount--, !(j._zoom < 0));) b && j._childCount <= 1 ? (i = j._markers[0] === a ? j._markers[1] : j._markers[0], d[j._zoom].removeObject(j, g.project(j._cLatLng, j._zoom)), e[j._zoom].addObject(i, g.project(i.getLatLng(), j._zoom)), this._arraySplice(j.__parent._childClusters, j), j.__parent._markers.push(i), i.__parent = j.__parent, j._icon && (f.removeLayer(j), c || f.addLayer(i))) : (j._recalculateBounds(), c && j._icon || j._updateIcon()), j = j.__parent;
            delete a.__parent
        },
        _isOrIsParent: function (a, b) {
            for (; b;) {
                if (a === b) return !0;
                b = b.parentNode
            }
            return !1
        },
        _propagateEvent: function (a) {
            if (a.layer instanceof L.MarkerCluster) {
                if (a.originalEvent && this._isOrIsParent(a.layer._icon, a.originalEvent.relatedTarget)) return;
                a.type = "cluster" + a.type
            }
            this.fire(a.type, a)
        },
        _defaultIconCreateFunction: function (a) {
            var b = a.getChildCount(),
                c = " marker-cluster-";
            return c += b < 10 ? "small" : b < 100 ? "medium" : "large", new L.DivIcon({
                html: "<div><span>" + b + "</span></div>",
                className: "marker-cluster" + c,
                iconSize: new L.Point(40, 40)
            })
        },
        _bindEvents: function () {
            var a = this._map,
                b = this.options.spiderfyOnMaxZoom,
                c = this.options.showCoverageOnHover,
                d = this.options.zoomToBoundsOnClick;
            (b || d) && this.on("clusterclick", this._zoomOrSpiderfy, this), c && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), a.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function (a) {
            var b = this._map;
            b.getMaxZoom() === b.getZoom() ? this.options.spiderfyOnMaxZoom && a.layer.spiderfy() : this.options.zoomToBoundsOnClick && a.layer.zoomToBounds(), a.originalEvent && 13 === a.originalEvent.keyCode && b._container.focus()
        },
        _showCoverage: function (a) {
            var b = this._map;
            this._inZoomAnimation || (this._shownPolygon && b.removeLayer(this._shownPolygon), a.layer.getChildCount() > 2 && a.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(a.layer.getConvexHull(), this.options.polygonOptions), b.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function () {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null)
        },
        _unbindEvents: function () {
            var a = this.options.spiderfyOnMaxZoom,
                b = this.options.showCoverageOnHover,
                c = this.options.zoomToBoundsOnClick,
                d = this._map;
            (a || c) && this.off("clusterclick", this._zoomOrSpiderfy, this), b && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), d.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function () {
            this._map && (this._mergeSplitClusters(), this._zoom = this._map._zoom, this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function () {
            if (!this._inZoomAnimation) {
                var a = this._getExpandedVisibleBounds();
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, a), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._map._zoom, a), this._currentShownBounds = a
            }
        },
        _generateInitialClusters: function () {
            var a = this._map.getMaxZoom(),
                b = this.options.maxClusterRadius,
                c = b;
            "function" !== typeof b && (c = function () {
                return b
            }), this.options.disableClusteringAtZoom && (a = this.options.disableClusteringAtZoom - 1), this._maxZoom = a, this._gridClusters = {}, this._gridUnclustered = {};
            for (var d = a; d >= 0; d--) this._gridClusters[d] = new L.DistanceGrid(c(d)), this._gridUnclustered[d] = new L.DistanceGrid(c(d));
            this._topClusterLevel = new L.MarkerCluster(this, -1)
        },
        _addLayer: function (a, b) {
            var c, d, e = this._gridClusters,
                f = this._gridUnclustered;
            for (this.options.singleMarkerMode && (a.options.icon = this.options.iconCreateFunction({
                getChildCount: function () {
                    return 1
                },
                getAllChildMarkers: function () {
                    return [a]
                }
            })); b >= 0; b--) {
                c = this._map.project(a.getLatLng(), b);
                var g = e[b].getNearObject(c);
                if (g) return g._addChild(a), void(a.__parent = g);
                if (g = f[b].getNearObject(c)) {
                    var h = g.__parent;
                    h && this._removeLayer(g, !1);
                    var i = new L.MarkerCluster(this, b, g, a);
                    e[b].addObject(i, this._map.project(i._cLatLng, b)), g.__parent = i, a.__parent = i;
                    var j = i;
                    for (d = b - 1; d > h._zoom; d--) j = new L.MarkerCluster(this, d, j), e[d].addObject(j, this._map.project(g.getLatLng(), d));
                    for (h._addChild(j), d = b; d >= 0 && f[d].removeObject(g, this._map.project(g.getLatLng(), d)); d--);
                    return
                }
                f[b].addObject(a, c)
            }
            this._topClusterLevel._addChild(a), a.__parent = this._topClusterLevel
        },
        _enqueue: function (a) {
            this._queue.push(a), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function () {
            for (var a = 0; a < this._queue.length; a++) this._queue[a].call(this);
            this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null
        },
        _mergeSplitClusters: function () {
            this._processQueue(), this._zoom < this._map._zoom && this._currentShownBounds.contains(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(), this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function () {
            if (!this.options.removeOutsideVisibleBounds) return this.getBounds();
            var a = this._map,
                b = a.getBounds(),
                c = b._southWest,
                d = b._northEast,
                e = L.Browser.mobile ? 0 : Math.abs(c.lat - d.lat),
                f = L.Browser.mobile ? 0 : Math.abs(c.lng - d.lng);
            return new L.LatLngBounds(new L.LatLng(c.lat - e, c.lng - f, !0), new L.LatLng(d.lat + e, d.lng + f, !0))
        },
        _animationAddLayerNonAnimated: function (a, b) {
            if (b === a) this._featureGroup.addLayer(a);
            else if (2 === b._childCount) {
                b._addToMap();
                var c = b.getAllChildMarkers();
                this._featureGroup.removeLayer(c[0]), this._featureGroup.removeLayer(c[1])
            } else b._updateIcon()
        }
    }), L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? {
        _animationStart: function () {
            this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++
        },
        _animationEnd: function () {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend")
        },
        _animationZoomIn: function (a, b) {
            var c, d = this._getExpandedVisibleBounds(),
                e = this._featureGroup;
            this._topClusterLevel._recursively(d, a, 0, function (f) {
                var g, h = f._latlng,
                    i = f._markers;
                for (d.contains(h) || (h = null), f._isSingleParent() && a + 1 === b ? (e.removeLayer(f), f._recursivelyAddChildrenToMap(null, b, d)) : (f.setOpacity(0), f._recursivelyAddChildrenToMap(h, b, d)), c = i.length - 1; c >= 0; c--) g = i[c], d.contains(g._latlng) || e.removeLayer(g)
            }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(d, b), e.eachLayer(function (a) {
                a instanceof L.MarkerCluster || !a._icon || a.setOpacity(1)
            }), this._topClusterLevel._recursively(d, a, b, function (a) {
                a._recursivelyRestoreChildPositions(b)
            }), this._enqueue(function () {
                this._topClusterLevel._recursively(d, a, 0, function (a) {
                    e.removeLayer(a), a.setOpacity(1)
                }), this._animationEnd()
            })
        },
        _animationZoomOut: function (a, b) {
            this._animationZoomOutSingle(this._topClusterLevel, a - 1, b), this._topClusterLevel._recursivelyAddChildrenToMap(null, b, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, a, this._getExpandedVisibleBounds())
        },
        _animationZoomOutSingle: function (a, b, c) {
            var d = this._getExpandedVisibleBounds();
            a._recursivelyAnimateChildrenInAndAddSelfToMap(d, b + 1, c);
            var e = this;
            this._forceLayout(), a._recursivelyBecomeVisible(d, c), this._enqueue(function () {
                if (1 === a._childCount) {
                    var f = a._markers[0];
                    f.setLatLng(f.getLatLng()), f.setOpacity && f.setOpacity(1)
                } else a._recursively(d, c, 0, function (a) {
                    a._recursivelyRemoveChildrenFromMap(d, b + 1)
                });
                e._animationEnd()
            })
        },
        _animationAddLayer: function (a, b) {
            var c = this,
                d = this._featureGroup;
            d.addLayer(a), b !== a && (b._childCount > 2 ? (b._updateIcon(), this._forceLayout(), this._animationStart(), a._setPos(this._map.latLngToLayerPoint(b.getLatLng())), a.setOpacity(0), this._enqueue(function () {
                d.removeLayer(a), a.setOpacity(1), c._animationEnd()
            })) : (this._forceLayout(), c._animationStart(), c._animationZoomOutSingle(b, this._map.getMaxZoom(), this._map.getZoom())))
        },
        _forceLayout: function () {
            L.Util.falseFn(b.body.offsetWidth)
        }
    } : {
        _animationStart: function () {},
        _animationZoomIn: function (a, b) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, a), this._topClusterLevel._recursivelyAddChildrenToMap(null, b, this._getExpandedVisibleBounds()), this.fire("animationend")
        },
        _animationZoomOut: function (a, b) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, a), this._topClusterLevel._recursivelyAddChildrenToMap(null, b, this._getExpandedVisibleBounds()), this.fire("animationend")
        },
        _animationAddLayer: function (a, b) {
            this._animationAddLayerNonAnimated(a, b)
        }
    }), L.markerClusterGroup = function (a) {
        return new L.MarkerClusterGroup(a)
    }, L.MarkerCluster = L.Marker.extend({
        initialize: function (a, b, c, d) {
            L.Marker.prototype.initialize.call(this, c ? c._cLatLng || c.getLatLng() : new L.LatLng(0, 0), {
                icon: this
            }), this._group = a, this._zoom = b, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._bounds = new L.LatLngBounds, c && this._addChild(c), d && this._addChild(d)
        },
        getAllChildMarkers: function (a) {
            a = a || [];
            for (var b = this._childClusters.length - 1; b >= 0; b--) this._childClusters[b].getAllChildMarkers(a);
            for (var c = this._markers.length - 1; c >= 0; c--) a.push(this._markers[c]);
            return a
        },
        getChildCount: function () {
            return this._childCount
        },
        zoomToBounds: function () {
            for (var a, b = this._childClusters.slice(), c = this._group._map, d = c.getBoundsZoom(this._bounds), e = this._zoom + 1, f = c.getZoom(); b.length > 0 && d > e;) {
                e++;
                var g = [];
                for (a = 0; a < b.length; a++) g = g.concat(b[a]._childClusters);
                b = g
            }
            if (c.options.isMobile) d > e ? this._group._map.setView(this._latlng, e) : d <= f ? this._group._map.setView(this._latlng, f + 1) : this._group._map.fitBounds(this._bounds);
            else {
                var h = this._group.options.mapModule;
                c = h.map;
                var i = h.getSafeZonePaddingTopLeft(),
                    j = h.getSafeZonePaddingBottomRight();
                d > e ? this._group._map.fitBounds(this._bounds, {
                    paddingTopLeft: i,
                    paddingBottomRight: j
                }) : d <= f ? this._group._map.setView(this._latlng, f + 1) : this._group._map.fitBounds(this._bounds, {
                    paddingTopLeft: i,
                    paddingBottomRight: j
                })
            }
        },
        getBounds: function () {
            var a = new L.LatLngBounds;
            return a.extend(this._bounds), a
        },
        _updateIcon: function () {
            this._iconNeedsUpdate = !0, this._icon && this.setIcon(this)
        },
        createIcon: function () {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon()
        },
        createShadow: function () {
            return this._iconObj.createShadow()
        },
        _addChild: function (a, b) {
            this._iconNeedsUpdate = !0, this._expandBounds(a), a instanceof L.MarkerCluster ? (b || (this._childClusters.push(a), a.__parent = this), this._childCount += a._childCount) : (b || this._markers.push(a), this._childCount++), this.__parent && this.__parent._addChild(a, !0)
        },
        _expandBounds: function (a) {
            var b, c = a._wLatLng || a._latlng;
            a instanceof L.MarkerCluster ? (this._bounds.extend(a._bounds), b = a._childCount) : (this._bounds.extend(c), b = 1), this._cLatLng || (this._cLatLng = a._cLatLng || c);
            var d = this._childCount + b;
            this._wLatLng ? (this._wLatLng.lat = (c.lat * b + this._wLatLng.lat * this._childCount) / d, this._wLatLng.lng = (c.lng * b + this._wLatLng.lng * this._childCount) / d) : this._latlng = this._wLatLng = new L.LatLng(c.lat, c.lng)
        },
        _addToMap: function (a) {
            a && (this._backupLatlng = this._latlng, this.setLatLng(a)), this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function (a, b, c) {
            this._recursively(a, 0, c - 1, function (a) {
                var c, d, e = a._markers;
                for (c = e.length - 1; c >= 0; c--) d = e[c], d._icon && (d._setPos(b), d.setOpacity(0))
            }, function (a) {
                var c, d, e = a._childClusters;
                for (c = e.length - 1; c >= 0; c--) d = e[c], d._icon && (d._setPos(b), d.setOpacity(0))
            })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function (a, b, c) {
            this._recursively(a, c, 0, function (d) {
                d._recursivelyAnimateChildrenIn(a, d._group._map.latLngToLayerPoint(d.getLatLng()).round(), b), d._isSingleParent() && b - 1 === c ? (d.setOpacity(1), d._recursivelyRemoveChildrenFromMap(a, b)) : d.setOpacity(0), d._addToMap()
            })
        },
        _recursivelyBecomeVisible: function (a, b) {
            this._recursively(a, 0, b, null, function (a) {
                a.setOpacity(1)
            })
        },
        _recursivelyAddChildrenToMap: function (a, b, c) {
            this._recursively(c, -1, b, function (d) {
                if (b !== d._zoom)
                    for (var e = d._markers.length - 1; e >= 0; e--) {
                        var f = d._markers[e];
                        c.contains(f._latlng) && (a && (f._backupLatlng = f.getLatLng(), f.setLatLng(a), f.setOpacity && f.setOpacity(0)), d._group._featureGroup.addLayer(f))
                    }
            }, function (b) {
                b._addToMap(a)
            })
        },
        _recursivelyRestoreChildPositions: function (a) {
            for (var b = this._markers.length - 1; b >= 0; b--) {
                var c = this._markers[b];
                c._backupLatlng && (c.setLatLng(c._backupLatlng), delete c._backupLatlng)
            }
            if (a - 1 === this._zoom)
                for (var d = this._childClusters.length - 1; d >= 0; d--) this._childClusters[d]._restorePosition();
            else
                for (var e = this._childClusters.length - 1; e >= 0; e--) this._childClusters[e]._recursivelyRestoreChildPositions(a)
        },
        _restorePosition: function () {
            this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function (a, b, c) {
            var d, e;
            this._recursively(a, -1, b - 1, function (a) {
                for (e = a._markers.length - 1; e >= 0; e--) d = a._markers[e], c && c.contains(d._latlng) || (a._group._featureGroup.removeLayer(d), d.setOpacity && d.setOpacity(1))
            }, function (a) {
                for (e = a._childClusters.length - 1; e >= 0; e--) d = a._childClusters[e], c && c.contains(d._latlng) || (a._group._featureGroup.removeLayer(d), d.setOpacity && d.setOpacity(1))
            })
        },
        _recursively: function (a, b, c, d, e) {
            var f, g, h = this._childClusters,
                i = this._zoom;
            if (b > i)
                for (f = h.length - 1; f >= 0; f--) g = h[f], a.intersects(g._bounds) && g._recursively(a, b, c, d, e);
            else if (d && d(this), e && this._zoom === c && e(this), c > i)
                for (f = h.length - 1; f >= 0; f--) g = h[f], a.intersects(g._bounds) && g._recursively(a, b, c, d, e)
        },
        _recalculateBounds: function () {
            var a, b = this._markers,
                c = this._childClusters;
            for (this._bounds = new L.LatLngBounds, delete this._wLatLng, a = b.length - 1; a >= 0; a--) this._expandBounds(b[a]);
            for (a = c.length - 1; a >= 0; a--) this._expandBounds(c[a])
        },
        _isSingleParent: function () {
            return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
        }
    }), L.DistanceGrid = function (a) {
        this._cellSize = a, this._sqCellSize = a * a, this._grid = {}, this._objectPoint = {}
    }, L.DistanceGrid.prototype = {
        addObject: function (a, b) {
            var c = this._getCoord(b.x),
                d = this._getCoord(b.y),
                e = this._grid,
                f = e[d] = e[d] || {}, g = f[c] = f[c] || [],
                h = L.Util.stamp(a);
            this._objectPoint[h] = b, g.push(a)
        },
        updateObject: function (a, b) {
            this.removeObject(a), this.addObject(a, b)
        },
        removeObject: function (a, b) {
            var c, d, e = this._getCoord(b.x),
                f = this._getCoord(b.y),
                g = this._grid,
                h = g[f] = g[f] || {}, i = h[e] = h[e] || [];
            for (delete this._objectPoint[L.Util.stamp(a)], c = 0, d = i.length; c < d; c++)
                if (i[c] === a) return i.splice(c, 1), 1 === d && delete h[e], !0
        },
        eachObject: function (a, b) {
            var c, d, e, f, g, h, i, j = this._grid;
            for (c in j) {
                g = j[c];
                for (d in g)
                    for (h = g[d], e = 0, f = h.length; e < f; e++) i = a.call(b, h[e]), i && (e--, f--)
            }
        },
        getNearObject: function (a) {
            var b, c, d, e, f, g, h, i, j = this._getCoord(a.x),
                k = this._getCoord(a.y),
                l = this._objectPoint,
                m = this._sqCellSize,
                n = null;
            for (b = k - 1; b <= k + 1; b++)
                if (e = this._grid[b])
                    for (c = j - 1; c <= j + 1; c++)
                        if (f = e[c])
                            for (d = 0, g = f.length; d < g; d++) h = f[d], i = this._sqDist(l[L.Util.stamp(h)], a), i < m && (m = i, n = h);
            return n
        },
        _getCoord: function (a) {
            return Math.floor(a / this._cellSize)
        },
        _sqDist: function (a, b) {
            var c = b.x - a.x,
                d = b.y - a.y;
            return c * c + d * d
        }
    },
    function () {
        L.QuickHull = {
            getDistant: function (a, b) {
                var c = b[1].lat - b[0].lat,
                    d = b[0].lng - b[1].lng;
                return d * (a.lat - b[0].lat) + c * (a.lng - b[0].lng)
            },
            findMostDistantPointFromBaseLine: function (a, b) {
                var c, d, e, f = 0,
                    g = null,
                    h = [];
                for (c = b.length - 1; c >= 0; c--) d = b[c], e = this.getDistant(d, a), e > 0 && (h.push(d), e > f && (f = e, g = d));
                return {
                    maxPoint: g,
                    newPoints: h
                }
            },
            buildConvexHull: function (a, b) {
                var c = [],
                    d = this.findMostDistantPointFromBaseLine(a, b);
                return d.maxPoint ? (c = c.concat(this.buildConvexHull([a[0], d.maxPoint], d.newPoints)), c = c.concat(this.buildConvexHull([d.maxPoint, a[1]], d.newPoints))) : [a[0]]
            },
            getConvexHull: function (a) {
                var b, c = !1,
                    d = !1,
                    e = null,
                    f = null;
                for (b = a.length - 1; b >= 0; b--) {
                    var g = a[b];
                    (c === !1 || g.lat > c) && (e = g, c = g.lat), (d === !1 || g.lat < d) && (f = g, d = g.lat)
                }
                var h = [].concat(this.buildConvexHull([f, e], a), this.buildConvexHull([e, f], a));
                return h
            }
        }
    }(), L.MarkerCluster.include({
        getConvexHull: function () {
            var a, b, c = this.getAllChildMarkers(),
                d = [];
            for (b = c.length - 1; b >= 0; b--) a = c[b].getLatLng(), d.push(a);
            return L.QuickHull.getConvexHull(d)
        }
    }), L.MarkerCluster.include({
        _2PI: 2 * Math.PI,
        _circleFootSeparation: 25,
        _circleStartAngle: Math.PI / 6,
        _spiralFootSeparation: 28,
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        spiderfy: function () {
            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                var a, b = this.getAllChildMarkers(),
                    c = this._group,
                    d = c._map,
                    e = d.latLngToLayerPoint(this._latlng);
                this._group._unspiderfy(), this._group._spiderfied = this, b.length >= this._circleSpiralSwitchover ? a = this._generatePointsSpiral(b.length, e) : (e.y += 10, a = this._generatePointsCircle(b.length, e)), this._animationSpiderfy(b, a)
            }
        },
        unspiderfy: function (a) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(a), this._group._spiderfied = null)
        },
        _generatePointsCircle: function (a, b) {
            var c, d, e = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + a),
                f = e / this._2PI,
                g = this._2PI / a,
                h = [];
            for (h.length = a, c = a - 1; c >= 0; c--) d = this._circleStartAngle + c * g, h[c] = new L.Point(b.x + f * Math.cos(d), b.y + f * Math.sin(d))._round();
            return h
        },
        _generatePointsSpiral: function (a, b) {
            var c, d = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart,
                e = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation,
                f = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor,
                g = 0,
                h = [];
            for (h.length = a, c = a - 1; c >= 0; c--) g += e / d + 5e-4 * c, h[c] = new L.Point(b.x + d * Math.cos(g), b.y + d * Math.sin(g))._round(), d += this._2PI * f / g;
            return h
        },
        _noanimationUnspiderfy: function () {
            var a, b, c = this._group,
                d = c._map,
                e = c._featureGroup,
                f = this.getAllChildMarkers();
            for (this.setOpacity(1), b = f.length - 1; b >= 0; b--) a = f[b], e.removeLayer(a), a._preSpiderfyLatlng && (a.setLatLng(a._preSpiderfyLatlng), delete a._preSpiderfyLatlng), a.setZIndexOffset && a.setZIndexOffset(0), a._spiderLeg && (d.removeLayer(a._spiderLeg), delete a._spiderLeg);
            c._spiderfied = null
        }
    }), L.MarkerCluster.include(L.DomUtil.TRANSITION ? {
        SVG_ANIMATION: function () {
            return b.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1
        }(),
        _animationSpiderfy: function (a, c) {
            var d, e, f, g, h = this,
                i = this._group,
                j = i._map,
                k = i._featureGroup,
                l = j.latLngToLayerPoint(this._latlng);
            for (d = a.length - 1; d >= 0; d--) e = a[d], e.setOpacity ? (e.setZIndexOffset(1e6), e.setOpacity(0), k.addLayer(e), e._setPos(l)) : k.addLayer(e);
            i._forceLayout(), i._animationStart();
            var m = L.Path.SVG ? 0 : .3,
                n = L.Path.SVG_NS;
            for (d = a.length - 1; d >= 0; d--)
                if (g = j.layerPointToLatLng(c[d]), e = a[d], e._preSpiderfyLatlng = e._latlng, e.setLatLng(g), e.setOpacity && e.setOpacity(1), f = new L.Polyline([h._latlng, g], {
                    weight: 1.5,
                    color: "#222",
                    opacity: m
                }), j.addLayer(f), e._spiderLeg = f, L.Path.SVG && this.SVG_ANIMATION) {
                    var o = f._path.getTotalLength();
                    f._path.setAttribute("stroke-dasharray", o + "," + o);
                    var p = b.createElementNS(n, "animate");
                    p.setAttribute("attributeName", "stroke-dashoffset"), p.setAttribute("begin", "indefinite"), p.setAttribute("from", o), p.setAttribute("to", 0), p.setAttribute("dur", .25), f._path.appendChild(p), p.beginElement(), p = b.createElementNS(n, "animate"), p.setAttribute("attributeName", "stroke-opacity"), p.setAttribute("attributeName", "stroke-opacity"), p.setAttribute("begin", "indefinite"), p.setAttribute("from", 0), p.setAttribute("to", .5), p.setAttribute("dur", .25), f._path.appendChild(p), p.beginElement()
                }
            if (h.setOpacity(.3), L.Path.SVG)
                for (this._group._forceLayout(), d = a.length - 1; d >= 0; d--) e = a[d]._spiderLeg, e.options.opacity = .5, e._path.setAttribute("stroke-opacity", .5);
            setTimeout(function () {
                i._animationEnd(), i.fire("spiderfied")
            }, 200)
        },
        _animationUnspiderfy: function (a) {
            var b, c, d, e = this._group,
                f = e._map,
                g = e._featureGroup,
                h = a ? f._latLngToNewLayerPoint(this._latlng, a.zoom, a.center) : f.latLngToLayerPoint(this._latlng),
                i = this.getAllChildMarkers(),
                j = L.Path.SVG && this.SVG_ANIMATION;
            for (e._animationStart(), this.setOpacity(1), c = i.length - 1; c >= 0; c--) b = i[c], b._preSpiderfyLatlng && (b.setLatLng(b._preSpiderfyLatlng), delete b._preSpiderfyLatlng, b.setOpacity ? (b._setPos(h), b.setOpacity(0)) : g.removeLayer(b), j && (d = b._spiderLeg._path.childNodes[0], d.setAttribute("to", d.getAttribute("from")), d.setAttribute("from", 0), d.beginElement(), d = b._spiderLeg._path.childNodes[1], d.setAttribute("from", .5), d.setAttribute("to", 0), d.setAttribute("stroke-opacity", 0), d.beginElement(), b._spiderLeg._path.setAttribute("stroke-opacity", 0)));
            setTimeout(function () {
                var a = 0;
                for (c = i.length - 1; c >= 0; c--) b = i[c], b._spiderLeg && a++;
                for (c = i.length - 1; c >= 0; c--) b = i[c], b._spiderLeg && (b.setOpacity && (b.setOpacity(1), b.setZIndexOffset(0)), a > 1 && g.removeLayer(b), f.removeLayer(b._spiderLeg), delete b._spiderLeg);
                e._animationEnd()
            }, 200)
        }
    } : {
        _animationSpiderfy: function (a, b) {
            var c, d, e, f, g = this._group,
                h = g._map,
                i = g._featureGroup;
            for (c = a.length - 1; c >= 0; c--) f = h.layerPointToLatLng(b[c]), d = a[c], d._preSpiderfyLatlng = d._latlng, d.setLatLng(f), d.setZIndexOffset && d.setZIndexOffset(1e6), i.addLayer(d), e = new L.Polyline([this._latlng, f], {
                weight: 1.5,
                color: "#222"
            }), h.addLayer(e), d._spiderLeg = e;
            this.setOpacity(.3), g.fire("spiderfied")
        },
        _animationUnspiderfy: function () {
            this._noanimationUnspiderfy()
        }
    }), L.MarkerClusterGroup.include({
        _spiderfied: null,
        _spiderfierOnAdd: function () {
            this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Path.SVG && !L.Browser.touch && this._map._initPathRoot()
        },
        _spiderfierOnRemove: function () {
            this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy()
        },
        _unspiderfyZoomStart: function () {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
        },
        _unspiderfyZoomAnim: function (a) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(a))
        },
        _unspiderfyWrapper: function () {
            this._unspiderfy()
        },
        _unspiderfy: function (a) {
            this._spiderfied && this._spiderfied.unspiderfy(a)
        },
        _noanimationUnspiderfy: function () {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
        },
        _unspiderfyLayer: function (a) {
            a._spiderLeg && (this._featureGroup.removeLayer(a), a.setOpacity(1), a.setZIndexOffset(0), this._map.removeLayer(a._spiderLeg), delete a._spiderLeg)
        }
    })
}(window, document);