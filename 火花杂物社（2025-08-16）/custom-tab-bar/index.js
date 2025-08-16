
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [777], {
        7134: function(e, t, s) {
            var a = s(7842),
                n = s(3029),
                c = s(2901),
                m = s(6919),
                r = s(5501),
                o = s(4467),
                i = s(6540),
                h = s(758),
                l = s.n(h),
                _ = s(118),
                d = s(6942),
                u = s.n(d),
                b = s(4015),
                g = (0, s(7316).jl)() ? {
                    home: {
                        selected: "../assets/red-theme/home-ed.svg",
                        normal: "../assets/red-theme/home.svg"
                    },
                    mine: {
                        selected: "../assets/red-theme/main-ed.svg",
                        normal: "../assets/red-theme/main.svg"
                    }
                } : {
                    home: {
                        selected: "../assets/images/home-ed.svg",
                        normal: "../assets/images/home.svg"
                    },
                    mine: {
                        selected: "../assets/images/main-ed.svg",
                        normal: "../assets/images/main.svg"
                    }
                },
                v = s(8816),
                x = s(4848),
                p = function(e) {
                    function t() {
                        var e;
                        (0, n.A)(this, t);
                        for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++) a[c] = arguments[c];
                        return e = (0, m.A)(this, t, [].concat(a)), (0, o.A)(e, "state", {
                            selected: "",
                            list: [{
                                pagePath: v.Fd.Home,
                                selectedIconPath: g.home.selected,
                                iconPath: g.home.normal,
                                text: "发现"
                            }, {
                                pagePath: v.Fd.Mine,
                                selectedIconPath: g.mine.selected,
                                iconPath: g.mine.normal,
                                text: "我的"
                            }]
                        }), (0, o.A)(e, "switchTab", (function(e) {
                            l().switchTab({
                                url: e
                            })
                        })), e
                    }
                    return (0, r.A)(t, e), (0, c.A)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                s = t.list,
                                a = t.selected;
                            return (0, x.jsxs)(_.Ss, {
                                className: "custom_tab_bar",
                                children: [(0, x.jsx)(_.Ss, {
                                    className: "custom_tab_bar_border"
                                }), s.map((function(t, s) {
                                    var n = a === t.pagePath;
                                    return (0, x.jsx)(_.Ss, {
                                        className: "custom_tab_bar_item",
                                        children: (0, x.jsxs)(_.Ss, {
                                            className: "custom_tab_bar_item_content",
                                            onClick: function() {
                                                return e.switchTab(t.pagePath)
                                            },
                                            children: [(0, x.jsx)(_.Ss, {
                                                className: "custom_tab_bar_item_img_wrap",
                                                children: (0, x.jsx)(_._V, {
                                                    className: u()("custom_tab_bar_item_img"),
                                                    src: n ? t.selectedIconPath : t.iconPath
                                                })
                                            }), (0, x.jsx)(_.Ss, {
                                                className: u()("custom_tab_bar_item_text", (0, o.A)({}, "custom_tab_bar_item_text_active", n)),
                                                children: t.text
                                            })]
                                        })
                                    }, s)
                                }))]
                            })
                        }
                    }])
                }(i.Component),
                f = (0, b.PA)(p);
            Component((0, a.createComponentConfig)(f, "custom-tab-bar/index"))
        }
    },
    function(e) {
        e.O(0, [907, 96, 76], (function() {
            return t = 7134, e(e.s = t);
            var t
        })), e.O()
    }
]);