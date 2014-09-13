window.addEvent("domready", function () {
    Browser.ie6 || (app.page.$header = (new FixedHeader("header")).attach());
    var a = document.id("nav_user"),
        b = a ? a.getElement(".menu") : null,
        c = document.id("header_main_menu"),
        d = c.getParent(".nav"),
        e = document.getElement("#header_side_menu .menu.more-links"),
        f = document.getElement("#header_side_menu .nav.more"),
        g = document.getElement("#header_side_menu .menu.info-links"),
        h = document.getElement("#header_side_menu .nav.info"),
        i = document.getElement("#header_side_menu .menu.selection-links"),
        j = document.getElement("#header_side_menu .nav.selection"),
        k = document.getElement("#menu_bar .add-nav"),
        l = k ? k.getElement(".menu") : null;
    g.addEvent("menu_show", function () {
        e.hide(), i.hide()
    }), e.addEvent("menu_show", function () {
        g.hide(), i.hide()
    }), i.addEvent("menu_show", function () {
        g.hide(), e.hide()
    }), b && b.addEvent("menu_show", function () {
        var a = document.id("message_popup_deprecated");
        a && a.getStyle("display") == "block" && this.hide();
        var b = document.id("message_popup");
        b && b.getStyle("display") == "block" && this.hide()
    }), c.addEvent("menu_show", function () {
        Cookie.write("_hmt", 1, {
            duration: 30
        }), app.blinkMenuButton("stop")
    }), d.addEvent("click", function () {
        c.show()
    }), a && new MenuController({
        menu: b,
        trigger: a
    }), new MenuController({
        menu: c,
        trigger: d,
        showupDelay: 200
    }), new MenuController({
        menu: e,
        trigger: f
    }), new MenuController({
        menu: g,
        trigger: h
    }), new MenuController({
        menu: i,
        trigger: j
    }), k && (k.addEvent("click", function () {
        l.show()
    }), app.view.addEvent("click", function (a) {
        a.target.getParent(".add-nav") || l.hide()
    }));
    var m = new SmoothNotification({
        styles: {
            "border-radius": "3px",
            "line-height": "1",
            "white-space": "nowrap",
            padding: "10px"
        },
        container: "#header_side_menu"
    }),
        n = document.getElements("#header_side_menu .nav a[data-title]");
    n.addEvents({
        mouseenter: function () {
            document.getElements("#header_side_menu .menu").hide(), m.show(this.get("data-title"), {
                relative: {
                    to: this,
                    position: "rightcenter",
                    edge: "leftcenter",
                    offset: {
                        x: 10,
                        y: 0
                    }
                },
                duration: !1,
                arrow: "left",
                fadeType: "right"
            })
        },
        mouseleave: function () {
            m.hide()
        }
    })
}) < /script>'), req.user && buf.push('<script>(function(){if(app.req.user&&document.getElement("#menu_bar .alert-nav")){app.messager=new MessageChecker;var a=document.getElement("#menu_bar .alert-nav"),b=a.getElement(".nav-link"),c=a.getElement(".num"),d=!1,e=null,f={mentions:null,activities:null},g=document.getElements("#nav_user .menu, .add-nav .menu");function h(a){function b(a){e.getElements(".list").hide(),f[a].show(),e.getElements(".tab").removeClass("active"),e.getElement(".tab."+a).addClass("active"),g.hide()}if(d)return;f[a]?b(a):k(a,function(){b(a)})}function i(){var b=app.renderSync("base/message_deprecated_popup
");e=Elements.from(b)[0].inject(a),e.getElements(".tabs.tab ").addEvent("
click ",function(){this.hasClass("
mentions ")?h("
mentions "):this.hasClass("
activities ")&&h("
activities ")})}function j(a,b){e||i(),f[a]&&(f[a].dispose(),f[a]=null),Object.each(f,function(a){a&&a.hide()}),f[a]=Elements.from(app.renderSync("
base / message_deprecated_popup_ "+a,b))[0].inject(e.getElement(".tabs "),"
after "),stopWindowScroll(f[a].getElement(".box "))}function k(a,b){d=!0,j(a),(new Request.JSON({url:a=="
mentions "?" / message / mentions ":" / message / activities ",onComplete:function(){d=!1},onSuccess:function(c){j(a,c),l(),app.messager&&app.messager.fetchNow(),b()}})).get()}function l(){e||i();var a=e.getElements(".tabs.tab.n ");a[0].set("
class ","
n n - "+app.messager.unreadMentions).innerHTML=app.messager.unreadMentions,a[1].set("
class ","
n n - "+app.messager.unreadActivities).innerHTML=app.messager.unreadActivities}b.addEvent("
click ",function(){return e&&e.getStyle("
display ")=="
block "?e.hide():e?(e.show(),g.hide()):app.messager.unreadActivities?h("
activities "):h("
mentions "),!1}),app.view.addEvent("
click ",function(a){if(a.target.getParent("#
message_popup_deprecated "))return;e&&e.hide()})}})(),app.showDialogBox("
dm ",!0)</script>'), buf.push('<script>(function(){app.switchHeaderTo=function(a){if(!a)return;a=="
side "?app.view.addClass("
menu - bar - at - side "):a=="
normal "&&app.view.removeClass("
menu - bar - at - side "),window.fireEvent("
resize "),Cookie.write("
_ht ",a[0],{duration:30})},Cookie.read("
_ht ")=="
s "&&!Browser.ie6&&app.switchHeaderTo("
side ")})()