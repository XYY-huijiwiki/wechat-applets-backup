
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [475], {
        5237: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return o
                },
                P: function() {
                    return i
                }
            });
            var c = n(8724),
                i = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/redemption-cards",
                        method: "POST",
                        data: {
                            code: e
                        }
                    })
                },
                o = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/redemption-cards?limit=".concat(null == e ? void 0 : e.limit, "&offset=").concat(null == e ? void 0 : e.offset),
                        method: "GET"
                    })
                }
        },
        8032: function(e, t, n) {
            var c = n(5544),
                i = n(6540),
                o = n(118),
                a = n(758),
                u = n.n(a),
                M = n(6942),
                s = n.n(M),
                r = n(4848);
            t.A = function(e) {
                var t = e.myClick,
                    n = e.xx,
                    a = e.yy,
                    M = e.positionName,
                    g = e.bgImage,
                    I = e.key,
                    N = u().getStorageSync(M),
                    y = (0, i.useState)(N.x || n || 0),
                    j = (0, c.A)(y, 2),
                    x = j[0],
                    d = j[1],
                    l = (0, i.useState)(N.y || a || 0),
                    z = (0, c.A)(l, 2),
                    f = z[0],
                    p = z[1],
                    D = (0, i.useState)({
                        x: 0,
                        y: 0
                    }),
                    S = (0, c.A)(D, 2),
                    m = S[0],
                    b = S[1],
                    T = (0, i.useState)(!1),
                    h = (0, c.A)(T, 2),
                    A = h[0],
                    v = h[1];
                (0, i.useEffect)((function() {
                    var t = u().getStorageSync(e.positionName);
                    Object.keys(t).length > 0 ? (d(t.x), p(t.y)) : (d(e.xx), p(e.yy), setTimeout((function() {
                        u().setStorageSync(M, {
                            x: e.xx,
                            y: e.yy
                        })
                    }), 1e3))
                }), [e]);
                var w = function(e, t) {
                        var n = {
                            x: e,
                            y: t
                        };
                        u().setStorageSync(M, n)
                    },
                    Z = s()("fab-box", {
                        "transtion-box": !A
                    });
                return (0, r.jsx)(r.Fragment, {
                    children: 0 !== x && 0 !== f && g ? (0, r.jsx)(o.Ss, {
                        className: Z,
                        onTouchStart: function(e) {
                            var t = e.changedTouches[0],
                                n = t.pageX - x,
                                c = t.pageY - f;
                            b({
                                x: n,
                                y: c
                            })
                        },
                        onTouchMove: function(e) {
                            e.preventDefault(), v(!0);
                            var t = e.changedTouches[0],
                                n = t.pageX - m.x,
                                c = t.pageY - m.y;
                            d(n), p(c)
                        },
                        onTouchEnd: function() {
                            A && (v(!1), u().getSystemInfo({
                                success: function(e) {
                                    var t = u().createSelectorQuery();
                                    t.select(".fab-box").boundingClientRect(), t.exec((function(t) {
                                        var n = Number(e.screenWidth) / 2,
                                            c = Number(null == e ? void 0 : e.safeArea.height) - Number(t[0].height);
                                        v(!1);
                                        var i, o = 0;
                                        f < c ? o = f : f > c - 20 && (o = c), i = x < n ? 20 : e.screenWidth - Number(t[0].width) - 20, d(i), p(o), w(i, o)
                                    }))
                                },
                                fail: function(e) {
                                    w(n, a)
                                }
                            }))
                        },
                        onClick: function() {
                            t()
                        },
                        style: {
                            left: "".concat(x, "px"),
                            top: "".concat(f, "px")
                        },
                        children: (0, r.jsx)(o.Ss, {
                            children: (0, r.jsx)(o._V, {
                                className: "".concat("buy" === I ? "buy" : "make"),
                                src: g
                            })
                        })
                    }) : ""
                })
            }
        },
        7580: function(e, t, n) {
            e.exports = n.p + "assets/images/buy_ticket.png"
        },
        6965: function(e) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIzMjRfMTYxNTApIj4KPGNpcmNsZSBjeD0iMjgiIGN5PSIyOCIgcj0iMjgiIGZpbGw9IiM3MzY2RkYiLz4KPHBhdGggZD0iTTI5LjE2NjcgMTguMDIzMkMyOS4xNjY3IDE3LjM5OTYgMjkuOTIwNyAxNy4wODczIDMwLjM2MTYgMTcuNTI4MkwzOC42NDggMjUuODE0NkMzOS4yMDU4IDI2LjM3MjQgMzkuMTkyOSAyNy4yODA3IDM4LjYxOTQgMjcuODIyNEwzMC4zNDczIDM1LjYzNDlDMjkuOTAwOSAzNi4wNTY1IDI5LjE2NjcgMzUuNzQgMjkuMTY2NyAzNS4xMjZWMzAuMzMzM0MyMSAzMC4zMzMzIDE3LjUgMzkuMDgzMyAxNy41IDM5LjA4MzNDMTcuNSAyOS4xNjY2IDIwLjQxNjcgMjIuNzQ5OSAyOS4xNjY3IDIyLjc0OTlWMTguMDIzMloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjMyNF8xNjE1MCI+CjxyZWN0IHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
        }
    }
]);