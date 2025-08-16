
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [484], {
        8728: function(e, s, n) {
            var a = n(7842),
                l = n(5544),
                i = n(4634),
                t = n(8816),
                c = n(7316),
                o = n(118),
                m = n(758),
                r = n.n(m),
                d = n(6540),
                u = n(9617),
                p = n(8428),
                h = n(2257),
                v = n(4015),
                g = n.p + "assets/images/enjoy_cover.png",
                x = n.p + "assets/blind-icon.png",
                _ = n(4848),
                S = (0, v.PA)((function() {
                    var e, s, n, a, v, S;
                    (0, m.useShareAppMessage)((function() {
                        return {
                            title: "快来火花杂物社一起创作吧~",
                            path: "/pages/Home/index",
                            imageUrl: g
                        }
                    })), (0, m.useDidShow)((function() {
                        (0, c.Ht)() ? w(""): p.A.setNavigationThemes().then((function(e) {
                            var s, n = e.themes.length && (null === (s = e.themes) || void 0 === s ? void 0 : s[M]) || "";
                            p.A.setNavigationIps({
                                theme: n
                            }), q(n), w(n)
                        })), (0, c.qi)({
                            selected: t.Fd.Home
                        })
                    }));
                    var j = (0, d.useState)(0),
                        A = (0, l.A)(j, 2),
                        N = (A[0], A[1]),
                        f = function(e, s) {
                            N(e), "ceyanzhi" === s.type ? r().navigateTo({
                                url: t.g5.UploadPhoto + "?name=" + s.name
                            }) : r().navigateTo({
                                url: t.Fd.TemplateDetail + "?name=" + s.name
                            })
                        },
                        b = (0, d.useState)(!1),
                        k = (0, l.A)(b, 2),
                        T = k[0],
                        y = k[1],
                        w = function(e, s) {
                            var n = "全部" === s ? "" : s || "";
                            p.A.setHomeTemplates({
                                theme: e,
                                ip_name: n,
                                limit: 40,
                                offset: 0
                            }).then((function(e) {
                                e.length ? y(!0) : y(!1)
                            }))
                        },
                        C = (0, d.useState)(0),
                        I = (0, l.A)(C, 2),
                        H = I[0],
                        F = I[1],
                        P = (0, d.useState)(0),
                        U = (0, l.A)(P, 2),
                        M = U[0],
                        V = U[1],
                        D = (0, d.useState)(""),
                        J = (0, l.A)(D, 2),
                        O = J[0],
                        q = J[1],
                        z = (0, d.useState)("全部"),
                        B = (0, l.A)(z, 2),
                        E = (B[0], B[1]),
                        Q = (0, d.useState)(-1),
                        R = (0, l.A)(Q, 2),
                        W = R[0],
                        G = R[1],
                        K = (0, d.useState)(!1),
                        L = (0, l.A)(K, 2),
                        X = L[0],
                        Y = L[1];
                    (0, d.useEffect)((function() {
                        Y("精选玩法" === O)
                    }), [O]);
                    var Z, $, ee = function(e, s) {
                        G(s), E(e), w(O, e)
                    };
                    return (0, c.Ht)() ? (0, _.jsxs)(o.Ss, {
                        className: "home-view",
                        children: [(0, _.jsx)(i.A, {
                            text: "同道大叔的春节祝福"
                        }), (0, _.jsx)(o.Ss, {
                            className: "tongdao-page home_page",
                            children: T ? (0, _.jsx)(o.Ss, {
                                className: "home_page_template_list_tongdao",
                                children: null === p.A || void 0 === p.A || null === (Z = p.A.homeTemplates) || void 0 === Z || null === ($ = Z.map) || void 0 === $ ? void 0 : $.call(Z, (function(e, s) {
                                    return (0, _.jsxs)(o.Ss, {
                                        className: "home_page_template_item",
                                        id: "模版" + s,
                                        onClick: function() {
                                            return f(s, e)
                                        },
                                        children: [(0, _.jsx)(o._V, {
                                            mode: "aspectFill",
                                            className: "image_card",
                                            src: null == e ? void 0 : e.coverUrl
                                        }), (0, _.jsx)(o.Ss, {
                                            className: "display_name",
                                            children: null == e ? void 0 : e.displayName
                                        })]
                                    }, null == e ? void 0 : e.name)
                                }))
                            }) : (0, _.jsx)(o.Ss, {
                                className: "no-content",
                                children: "暂无更多内容"
                            })
                        }), (0, _.jsx)(u.A, {})]
                    }) : (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(i.A, {
                            text: "火花杂物社"
                        }), (0, _.jsx)(o.Ss, {
                            className: "blindIcon",
                            children: (0, _.jsx)(o._V, {
                                src: x,
                                onClick: function() {
                                    console.log("~~~~~~~blindIcon~~~~~~~"), r().navigateToMiniProgram({
                                        appId: "wx8a1c8def35a6e32f",
                                        path: "pagesA/pages/Blindbox/index"
                                    })
                                }
                            })
                        }), (0, _.jsxs)(o.Ss, {
                            className: "home_page ".concat((0, c.Qo)() ? "home_page_pad" : ""),
                            children: [(0, _.jsx)(o.Ss, {
                                className: "scroll-container home_page_template_scroll navigation",
                                children: null === p.A || void 0 === p.A || null === (e = p.A.navigationThemes) || void 0 === e || null === (s = e.map) || void 0 === s ? void 0 : s.call(e, (function(e, s) {
                                    return (0, _.jsxs)(o.Ss, {
                                        className: "test-item ".concat(s === M ? "theme_active" : ""),
                                        children: [(0, _.jsx)(o.Ss, {
                                            onClick: function(n) {
                                                return function(e, s, n, a) {
                                                    var l, i = e.target;
                                                    r().getSystemInfo({
                                                        success: function(e) {
                                                            l = e.windowWidth
                                                        }
                                                    }), V(s), i.x + n > l && F(n + H), p.A.setNavigationIps({
                                                        theme: a
                                                    }), G(-1), E("全部"), q(a), w(a)
                                                }(n, s, 80, e)
                                            },
                                            children: e
                                        }), (0, _.jsx)(o.Ss, {
                                            className: "".concat(s === M ? "line_active" : "")
                                        })]
                                    })
                                }))
                            }), X ? (0, _.jsx)(_.Fragment, {}) : (0, _.jsxs)(o.Ss, {
                                className: "scroll-container home_page_template_scroll ips",
                                children: [(0, _.jsx)(o.Ss, {
                                    className: "ip ".concat(-1 === W ? "active_ip" : ""),
                                    onClick: function(e) {
                                        return ee("全部", -1)
                                    },
                                    children: "全部"
                                }), null === p.A || void 0 === p.A || null === (n = p.A.navigationIps) || void 0 === n || null === (a = n.map) || void 0 === a ? void 0 : a.call(n, (function(e, s) {
                                    return (0, _.jsx)(o.Ss, {
                                        onClick: function(n) {
                                            return ee(e, s)
                                        },
                                        className: "ip ".concat(s === W ? "active_ip" : ""),
                                        children: e
                                    })
                                }))]
                            }), (0, _.jsx)(o.Ss, {
                                className: "home_page_template_scroll_y",
                                children: T ? (0, _.jsx)(o.Ss, {
                                    className: "home_page_template_list",
                                    children: null === p.A || void 0 === p.A || null === (v = p.A.homeTemplates) || void 0 === v || null === (S = v.map) || void 0 === S ? void 0 : S.call(v, (function(e, s) {
                                        return X ? (0, _.jsx)(o.Ss, {
                                            className: "home_page_template_item_pick",
                                            id: "模版" + s,
                                            onClick: function() {
                                                return f(s, e)
                                            },
                                            children: (0, _.jsx)(o._V, {
                                                className: "pick_img",
                                                src: (null == e ? void 0 : e.coverUrlRecom) || ""
                                            })
                                        }, null == e ? void 0 : e.name) : (0, _.jsxs)(o.Ss, {
                                            className: "home_page_template_item",
                                            id: "模版" + s,
                                            onClick: function() {
                                                return f(s, e)
                                            },
                                            children: [(0, _.jsx)(o.Ss, {
                                                className: "image_card",
                                                children: (0, _.jsx)(h.A, {
                                                    src: null == e ? void 0 : e.coverUrl
                                                })
                                            }), (0, _.jsx)(o.Ss, {
                                                className: "display_name",
                                                children: null == e ? void 0 : e.displayName
                                            }), (0, _.jsxs)(o.Ss, {
                                                className: "tags",
                                                children: [(0, _.jsx)(o.Ss, {
                                                    className: "ip tag theme",
                                                    children: (null == e ? void 0 : e.themes[0].length) > 4 ? "".concat(null == e ? void 0 : e.themes[0].substr(0, 3), "...") : null == e ? void 0 : e.themes[0]
                                                }), (0, _.jsx)(o.Ss, {
                                                    className: "ip tag",
                                                    children: (null == e ? void 0 : e.ipNames[0].length) > 4 ? "".concat(null == e ? void 0 : e.ipNames[0].substr(0, 3), "...") : null == e ? void 0 : e.ipNames[0]
                                                })]
                                            })]
                                        }, null == e ? void 0 : e.name)
                                    }))
                                }) : (0, _.jsx)(o.Ss, {
                                    className: "no-content",
                                    children: "暂无更多内容"
                                })
                            })]
                        }), (0, _.jsx)(u.A, {})]
                    })
                }));
            S.enableShareTimeline = !0, S.enableShareAppMessage = !0, Page((0, a.createPageConfig)(S, "pages/Home/index", {
                root: {
                    cn: []
                }
            }, {
                navigationStyle: "custom",
                enableShareAppMessage: !0,
                enableShareTimeline: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [907, 96, 76], (function() {
            return s = 8728, e(e.s = s);
            var s
        })), e.O()
    }
]);