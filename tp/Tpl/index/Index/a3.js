(function () {
    var a = document.id("pin_view_layer"),
        b = a.getElement(".close-layer"),
        c = app.page.$waterfall && app.page.$waterfall.element,
        d = function () {
            app.go(app.$pinViewState.url), app.hidePinViewLayer(), c && c.getElements(".view-on").removeClass("view-on")
        };
    a.addEvent("click", function (a) {
        (a.target.id == "pin_view_layer" || ~a.target.className.indexOf("pin-view-wrapper")) && d()
    }), b.addEvent("click", d),
    function () {
        if (!app.page.$waterfall || !app.page.$waterfall.cells.length) return;
        var b = a.getElement(".pin-view-arrows .next"),
            d = a.getElement(".pin-view-arrows .prev"),
            e = app.page.$waterfall.element.getElement(".pin.view-on");
        e || (e = app.page.$waterfall.element.getElement(".pin[data-id=' + escape((interp = pin.pin_id) == null ? "
            " : interp) + ']"));
        if (!e) return;
        e.addClass("view-on");
        var f = e.getNext(".pin[data-id]"),
            g = e.getPrevious(".pin[data-id]");
        if (f) {
            var h = f.get("data-id");
            b.set("href", "/pins/" + h + "/").set("data-id", h).setStyle("visibility", "visible")
        }
        if (g) {
            var h = g.get("data-id");
            d.set("href", "/pins/" + h + "/").set("data-id", h).setStyle("visibility", "visible")
        }(new Elements([b, d])).addEvent("click", function () {
            var a = this.get("data-id");
            c.getElements(".view-on").removeClass("view-on"), c.getElement(".pin[data-id=" + a + "]").addClass("view-on")
        }), (new Fx.Scroll(window)).toElementEdge(e, "y")
    }()
})()