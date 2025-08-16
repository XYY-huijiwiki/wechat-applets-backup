
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [20], {
        4799: function(s, e, c) {
            var a = c(2180),
                n = c(1515),
                i = c(2954),
                l = c(1829),
                o = c(2153),
                t = c(1211),
                r = c(3608),
                x = c(3644),
                d = c(6261),
                m = c(5893);
            Page((0, a.createPageConfig)((function() {
                return (0, i.useLoad)((function() {
                    console.log("Page loaded.")
                })), (0, m.jsxs)(n.G7, {
                    className: "index",
                    children: [(0, m.jsx)(t.Z, {}), (0, m.jsxs)(n.G7, {
                        className: "main-box",
                        children: [(0, m.jsxs)(n.G7, {
                            className: "content",
                            children: [(0, m.jsx)(n.G7, {
                                className: "title",
                                children: "喜羊羊的超能铃铛"
                            }), (0, m.jsxs)(n.G7, {
                                className: "tips ",
                                children: [" ", (0, m.jsx)(n.Ee, {
                                    src: l.c8
                                }), "网络已连接"]
                            })]
                        }), (0, m.jsx)(n.G7, {
                            className: "bg",
                            children: (0, m.jsx)(n.Ee, {
                                src: l.lP
                            })
                        })]
                    }), (0, m.jsx)(n.G7, {
                        className: "button-box",
                        children: (0, m.jsx)(o.Z, {
                            text: "重新配网",
                            handleClick: function() {
                                (0, d.G3)("retry_pv", 1), (0, x.UY)(r.i.Package, r.i.Home + "?from=accomplish")
                            }
                        })
                    })]
                })
            }), "pages/accomplish/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "",
                navigationStyle: "custom",
                disableScroll: !0
            } || {}))
        }
    },
    function(s) {
        s.O(0, [107, 216, 592], (function() {
            return e = 4799, s(s.s = e);
            var e
        })), s.O()
    }
]);