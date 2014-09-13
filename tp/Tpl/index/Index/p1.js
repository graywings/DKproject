 window.isMainPinterestSite = true;
 var Pc = {
     expns: {
         "10": {
             "display_data": {},
             "triggerable_placed_exps": [],
             "experience_id": 10000,
             "type": "1",
             "id": "10:10000",
             "cacheable_resources": []
         },
         "13": {
             "display_data": {},
             "triggerable_placed_exps": ["13:10050", "13:10028"],
             "experience_id": 1,
             "type": "1",
             "id": "13:1",
             "cacheable_resources": []
         },
         "14": {
             "display_data": {},
             "triggerable_placed_exps": [],
             "experience_id": 10022,
             "type": "1",
             "id": "14:10022",
             "cacheable_resources": []
         },
         "15": {
             "display_data": {},
             "triggerable_placed_exps": [],
             "experience_id": 10051,
             "type": "1",
             "id": "15:10051",
             "cacheable_resources": []
         },
         "22": {
             "display_data": {},
             "triggerable_placed_exps": [],
             "experience_id": 10000,
             "type": "1",
             "id": "22:10000",
             "cacheable_resources": []
         },
         "24": {
             "display_data": {},
             "triggerable_placed_exps": [],
             "experience_id": 10000,
             "type": "1",
             "id": "24:10000",
             "cacheable_resources": []
         }
     },
     experiments: {
         "active": {},
         "triggerable": {
             "denzel_buy_button_ebay": "control",
             "conversations": "enabled"
         }
     },
     pageStreaming: true,
     scriptLoadLocation: null,
     reportPageLoadTimings: false,
     TEST_MODE: false,
     dynamicallyLoadedJSFiles: {
         "webapp\/js\/app\/common\/bundle-mapbox.js": "http:\/\/passets-ec.pinterest.com\/webapp\/js\/app\/common\/bundle-mapbox.f2984856.js"
     }
 };
 var P = {
     modules: {}
 };
 P.expns = Pc.expns;
 P.DEBUG = Pc.DEBUG;
 P.interfaces = {};
 P.FB_KEY = -1;
 P.CONTEXT = {};
 P.STRINGS = {};
 P.PAGE_INFO = null;
 P.ROUTES = [];
 P.PAGE_ROUTE_PATTERN = "";
 P.PAGE_LOAD_REQUEST_IDENTIFIER = "";
 P.bodyColumns = {
     _pinWidth: 0,
     _pinMargin: 0,
     _minColumns: 0,
     _maxColumns: 0,
     getBodyWidth: function () {
         return window.innerWidth || document.documentElement.clientWidth
     },
     getBodyColumnsNeeded: function () {
         var a = P.bodyColumns._pinWidth + P.bodyColumns._pinMargin,
             b = P.bodyColumns.getBodyWidth();
         return Math.min(Math.max(Math.floor(b / a), P.bodyColumns._minColumns), P.bodyColumns._maxColumns)
     },
     setNumColumns: function (a) {
         var b = document.documentElement;
         a = a ? a : P.bodyColumns.getBodyColumnsNeeded();
         var d = b.className.replace(/ columns-\d+/,
             "");
         b.className = d + (" columns-" + a)
     },
     initialize: function (a, b, d, e) {
         P.bodyColumns._pinWidth = a;
         P.bodyColumns._pinMargin = b;
         P.bodyColumns._minColumns = d;
         P.bodyColumns._maxColumns = e;
         P.bodyColumns.setNumColumns()
     }
 };
 var LOADED_CLASS = " loaded",
     FADE_CLASS = " fade";
 P.lazy = {
     onImageLoad: function (a) {
         var b = LOADED_CLASS;
         P.overlap.isOverlappingViewport(a) && (b += FADE_CLASS);
         a.className += b
     }
 };
 window.P.lazy = {
     onImageLoad: P.lazy.onImageLoad
 };
 P.overlap = {
     isOverlappingViewport: function (a, b) {
         void 0 === b && (b = 0);
         var d = window.innerWidth || document.documentElement.clientWidth,
             e = window.innerHeight || document.documentElement.clientHeight;
         if (!a.getBoundingClientRect) return !0;
         var c = a.getBoundingClientRect(),
             g = c.bottom - c.top;
         return 0 < c.right - c.left && 0 < g && c.top < e + b && c.bottom > -b && c.left < d + b && c.right > -b
     }
 };
 P.scout = {};
 P.scout.init = function (a) {
     P.CONTEXT = a.context;
     P.FB_KEY = a.facebook_key;
     P.PAGE_INFO = a.page_info;
     P.ROUTES = a.routes;
     P.STREAMING = a.streaming;
     P.STRINGS = a.strings;
     P.PAGE_LOAD_REQUEST_IDENTIFIER = a.page_load_request_identifier;
     P.PAGE_ROUTE_PATTERN = a.page_route_pattern
 };
 window.P.scout = {
     init: P.scout.init
 };
 P.script = {};
 P.script.ready = function (a, b) {
     $script.ready(a, b)
 };
 P.script.load = function (a, b, d) {
     P.script.ready(a, function () {
         0 === b.lastIndexOf("//", 0) && (b = window.location.protocol + b);
         $script(b, d)
     })
 };
 P.script.done = function (a) {
     $script.done(a)
 };
 window.P.script = {
     ready: P.script.ready,
     load: P.script.load,
     done: P.script.done
 };
 var JS_MODULE_ID_START_ARGS = "startArgs",
     startArgsRef = null;
 P.start = {};
 P.start.start = function (a) {
     startArgsRef = a;
     P.script.done(JS_MODULE_ID_START_ARGS)
 };
 P.start.ready = function (a) {
     P.script.ready(JS_MODULE_ID_START_ARGS, function () {
         a(startArgsRef)
     })
 };
 P.start.finishStart = function () {
     startArgsRef = null
 };
 window.P.start = {
     start: P.start.start,
     ready: P.start.ready,
     finishStart: P.start.finishStart
 };
 var doc = document,
     head = doc.getElementsByTagName("head")[0],
     validBase = /^https?:\/\//,
     list = {}, ids = {}, delay = {}, scriptpath = "",
     scripts = {}, s = "string",
     f = !1,
     push = "push",
     domContentLoaded = "DOMContentLoaded",
     readyState = "readyState",
     addEventListenerName = "addEventListenerName",
     onreadystatechangeName = "onreadystatechangeName";

 function every(a, b) {
     for (var d = 0, e = a.length; d < e; ++d)
         if (!b(a[d])) return f;
     return !0
 }

 function each(a, b) {
     every(a, function (a) {
         return !b(a)
     });
     return f
 }!doc[readyState] && doc[addEventListenerName] && (doc[addEventListenerName](domContentLoaded, function fn() {
     doc.removeEventListener(domContentLoaded, fn, f);
     doc[readyState] = "complete"
 }, f), doc[readyState] = "loading");

 function $script(a, b, d) {
     function e(a) {
         return a.call ? a() : list[a]
     }

     function c() {
         if (!--l) {
             list[h] = 1;
             k && k();
             for (var a in delay) every(a.split("|"), e) && !each(delay[a], e) && (delay[a] = [])
         }
     }
     a = a[push] ? a : [a];
     var g = b && "function" == typeof b,
         k = g ? b : d,
         h = g ? a.join("") : b,
         l = a.length;
     setTimeout(function () {
         each(a, function (a) {
             if (null === a) return c();
             if (scripts[a]) return h && (ids[h] = 1), 2 == scripts[a] && c();
             scripts[a] = 1;
             h && (ids[h] = 1);
             create(!validBase.test(a) && scriptpath ? scriptpath + a + ".js" : a, c)
         })
     }, 0);
     return $script
 }

 function create(a, b) {
     var d = !1,
         e = function (a, b) {
             d || ("loaded" == a.readyState || "completed" == a.readyState ? b() : setTimeout(function () {
                 e(a, b)
             }, 100))
         }, c = doc.createElement("script"),
         g = c.onload = c.onerror = c[onreadystatechangeName] = function () {
             d || (d = !0, c.readyState && !/^c|loade/.test(c.readyState)) || (c.onload = c[onreadystatechangeName] = null, scripts[a] = 2, b())
         };
     e(c, g);
     c.async = 1;
     c.src = a;
     head.insertBefore(c, head.firstChild)
 }
 $script.get = create;
 $script.order = function (a, b, d) {
     (function c() {
         var g = a.shift();
         a.length ? $script(g, c) : $script(g, b, d)
     })()
 };
 $script.path = function (a) {
     scriptpath = a
 };
 $script.ready = function (a, b, d) {
     a = a[push] ? a : [a];
     var e = [];
     !each(a, function (a) {
         list[a] || e.push(a)
     }) && every(a, function (a) {
         return list[a]
     }) ? b() : function (a) {
         delay[a] || (delay[a] = []);
         delay[a][push](b);
         d && d(e)
     }(a.join("|"));
     return $script
 };
 $script.done = function (a) {
     $script([null], a)
 };
 P.scout.CONST = {};
 P.scout.CONST.PIN_WIDTH = 236;
 P.scout.CONST.PIN_MARGIN = 14;
 P.scout.CONST.MIN_COLUMNS = 3;
 P.scout.CONST.MAX_COLUMNS = 10;
 P.bodyColumns.initialize(P.scout.CONST.PIN_WIDTH, P.scout.CONST.PIN_MARGIN, P.scout.CONST.MIN_COLUMNS, P.scout.CONST.MAX_COLUMNS);