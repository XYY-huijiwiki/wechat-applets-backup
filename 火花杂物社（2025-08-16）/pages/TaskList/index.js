
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [66], {
        8829: function(e, s, a) {
            var t = a(7842),
                n = a(436),
                i = a(675),
                l = a(467),
                c = a(5544),
                r = a(4015),
                u = a(6540),
                d = a(5927),
                o = a(118),
                m = a(4634),
                g = a.p + "assets/images/making-toast.svg",
                x = a(758),
                I = a.n(x),
                h = a(8816),
                p = a(4848),
                N = (0, r.PA)((function() {
                    var e = (0, u.useState)(!0),
                        s = (0, c.A)(e, 2),
                        a = s[0],
                        t = s[1],
                        r = (0, u.useState)("0"),
                        x = (0, c.A)(r, 2),
                        N = x[0],
                        S = x[1],
                        j = (0, u.useState)([]),
                        v = (0, c.A)(j, 2),
                        M = v[0],
                        A = v[1],
                        b = (0, u.useState)(!1),
                        f = (0, c.A)(b, 2),
                        k = f[0],
                        y = f[1],
                        D = (0, u.useState)(!1),
                        Z = (0, c.A)(D, 2),
                        _ = Z[0],
                        w = Z[1],
                        z = (0, u.useState)(!1),
                        C = (0, c.A)(z, 2),
                        P = C[0],
                        T = C[1],
                        L = (0, u.useState)(15),
                        H = (0, c.A)(L, 2),
                        G = H[0],
                        E = (H[1], (0, u.useRef)(null));
                    (0, u.useEffect)((function() {
                        _ ? clearInterval(E.current) : E.current = setInterval((function() {
                            Q()
                        }), 1e3 * G)
                    }), [_]), (0, u.useEffect)((function() {
                        Y(), I().hideShareMenu()
                    }), []);
                    var R = function() {
                            var e = (0, l.A)((0, i.A)().mark((function e(s) {
                                return (0, i.A)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("finished" === (null == s ? void 0 : s.status)) {
                                                e.next = 5;
                                                break
                                            }
                                            return T(!0), e.abrupt("return");
                                        case 5:
                                            I().navigateTo({
                                                url: "".concat(h.g5.VideoShow, "?taskId=").concat(s.id)
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Q = function() {
                            var e = (0, l.A)((0, i.A)().mark((function e() {
                                var s, a;
                                return (0, i.A)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.A.setAllCards({
                                                offset: N,
                                                limit: 15
                                            });
                                        case 2:
                                            if (s = e.sent, y(!1), 0 !== (null == s ? void 0 : s.length)) {
                                                e.next = 7;
                                                break
                                            }
                                            return t(!1), e.abrupt("return");
                                        case 7:
                                            null != s && s.length && (A([].concat((0, n.A)(M), (0, n.A)(s))), a = s.every((function(e) {
                                                return "finished" === (null == e ? void 0 : e.status)
                                            })), w(a)), S(String(Number(N) + 15));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Y = function() {
                            y(!0), Q()
                        },
                        B = function(e) {
                            var s = new Date(e),
                                a = s.getFullYear(),
                                t = s.getMonth() + 1,
                                n = s.getDate();
                            return "".concat(a, ".").concat(t, ".").concat(n)
                        };
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(m.A, {
                            text: "我的卡库",
                            isBack: !0
                        }), (0, p.jsxs)(o.BM, {
                            className: "task_scrollview",
                            scrollY: !0,
                            onScrollToLower: Y,
                            children: [M.map((function(e) {
                                return (0, p.jsx)(p.Fragment, {
                                    children: "paying" === (null == e ? void 0 : e.status) ? (0, p.jsx)(p.Fragment, {}) : (0, p.jsxs)(o.Ss, {
                                        className: "task_item",
                                        onClick: function() {
                                            return R(e)
                                        },
                                        children: [(0, p.jsxs)(o.Ss, {
                                            className: "task_first",
                                            children: [(0, p.jsx)(o._V, {
                                                className: "task_cover",
                                                mode: "aspectFill",
                                                src: (null == e ? void 0 : e.coverUrl) || ""
                                            }), (0, p.jsxs)(o.Ss, {
                                                className: "task_info",
                                                children: [(0, p.jsx)(o.Ss, {
                                                    className: "task_title",
                                                    children: (null == e ? void 0 : e.template.displayName.length) > 10 ? "".concat(null == e ? void 0 : e.template.displayName.substr(0, 9), "...") : null == e ? void 0 : e.template.displayName
                                                }), (0, p.jsxs)(o.Ss, {
                                                    className: "task_id",
                                                    children: [(0, p.jsx)(o.Ss, {
                                                        className: "task_theme task_puple",
                                                        children: (null == e ? void 0 : e.template.themes[0].length) > 7 ? "".concat(null == e ? void 0 : e.template.themes[0].substr(0, 6), "...") : null == e ? void 0 : e.template.themes[0]
                                                    }), (0, p.jsx)(o.Ss, {
                                                        className: "task_ipname task_puple",
                                                        children: (null == e ? void 0 : e.template.ipNames[0].length) > 7 ? "".concat(null == e ? void 0 : e.template.ipNames[0].substr(0, 6), "...") : null == e ? void 0 : e.template.ipNames[0]
                                                    })]
                                                })]
                                            }), (0, p.jsxs)(o.Ss, {
                                                children: [(0, p.jsxs)(o.Ss, {
                                                    className: "task_status ".concat("finished" !== (null == e ? void 0 : e.status) && "make_ing"),
                                                    children: [(0, p.jsx)(o._V, {
                                                        src: "finished" === (null == e ? void 0 : e.status) ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjciIGZpbGw9IiM0QkNGOEQiLz4KPHBhdGggZD0iTTUgOEw3LjUgMTAuNUwxMS41IDYuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTRDMTEuMzEzNyAxNCAxNCAxMS4zMTM3IDE0IDhDMTQgNC42ODYyOSAxMS4zMTM3IDIgOCAyQzQuNjg2MjkgMiAyIDQuNjg2MjkgMiA4IiBzdHJva2U9IiNGRkQ1MkMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=",
                                                        className: "make_icon"
                                                    }), "finished" === (null == e ? void 0 : e.status) ? "已完成" : "制作中"]
                                                }), (0, p.jsx)(o.Ss, {
                                                    className: "task_time",
                                                    children: (0, p.jsx)(o.EY, {
                                                        children: B(null == e ? void 0 : e.createdAt)
                                                    })
                                                })]
                                            })]
                                        }), (0, p.jsx)(o.Ss, {
                                            className: "task_line",
                                            children: "1"
                                        }), (0, p.jsxs)(o.Ss, {
                                            className: "task_second",
                                            children: [(0, p.jsx)(o.Ss, {
                                                children: "定制内容"
                                            }), null == e ? void 0 : e.template.payloadSchemas.map((function(s, a) {
                                                var t;
                                                return (0, p.jsxs)(o.Ss, {
                                                    className: "payload_schemas",
                                                    children: [(0, p.jsxs)(o.Ss, {
                                                        className: "number",
                                                        children: [a + 1, ". "]
                                                    }), (0, p.jsx)(o.Ss, {
                                                        children: s.title
                                                    }), e.payload.fields[s.payloadKey] && (0, p.jsxs)(o.Ss, {
                                                        children: ["：", null === (t = e.payload.fields[s.payloadKey]) || void 0 === t ? void 0 : t.text]
                                                    })]
                                                })
                                            }))]
                                        })]
                                    }, e.id)
                                })
                            })), k && (0, p.jsxs)(o.Ss, {
                                className: "task_loading",
                                children: [(0, p.jsx)(o._V, {
                                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICA8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik04IDE0QzExLjMxMzcgMTQgMTQgMTEuMzEzNyAxNCA4QzE0IDQuNjg2MjkgMTEuMzEzNyAyIDggMkM0LjY4NjI5IDIgMiA0LjY4NjI5IDIgOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==",
                                    className: "make_icon ".concat("make_ing")
                                }), "加载中..."]
                            }), !a && (0, p.jsx)(o.Ss, {
                                className: "no_more",
                                children: "没有更多数据了"
                            })]
                        }), P && (0, p.jsx)(o.Ss, {
                            className: "making_toast",
                            children: (0, p.jsxs)(o.Ss, {
                                className: "content",
                                children: [(0, p.jsx)(o._V, {
                                    style: "width: 80px; height: 80px; margin-top: -40px",
                                    src: g
                                }), (0, p.jsx)(o.Ss, {
                                    className: "title",
                                    children: "祝福卡制作中"
                                }), (0, p.jsx)(o.Ss, {
                                    className: "sub_title",
                                    children: "预计需要30秒，请小伙伴耐心等待～"
                                }), (0, p.jsx)(o.Ss, {
                                    className: "btn",
                                    onClick: function() {
                                        T(!1)
                                    },
                                    children: "我知道了"
                                })]
                            })
                        }), (0, p.jsx)(o.Ss, {
                            className: "bottom_safe"
                        })]
                    })
                }));
            Page((0, t.createPageConfig)(N, "pages/TaskList/index", {
                root: {
                    cn: []
                }
            }, {
                navigationStyle: "custom",
                enableShareAppMessage: !1,
                enableShareTimeline: !1,
                disableSwipeBack: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [907, 96, 76], (function() {
            return s = 8829, e(e.s = s);
            var s
        })), e.O()
    }
]);