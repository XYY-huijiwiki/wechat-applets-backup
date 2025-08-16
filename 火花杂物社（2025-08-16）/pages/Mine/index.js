
require("../../@babel/runtime/helpers/Objectvalues"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [200], {
        7088: function(e, s, a) {
            var n = a(7842),
                c = a(5544),
                i = a(4634),
                l = a(8816),
                t = a(7316),
                r = a(118),
                o = a(758),
                m = a.n(o),
                d = a(6540),
                u = a(9617),
                g = a(4747),
                x = a.p + "assets/images/mine_header.svg",
                j = a.p + "assets/images/mine_works.svg",
                h = a(5927),
                S = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgM0wxMSA4TDYgMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
                N = a(4015),
                v = function(e) {
                    return e.myCard = "我的卡券", e.cardCheck = "卡券兑换", e.contactService = "联系客服", e.privacyPolicy = "隐私政策", e.commonProblem = "常见问题", e
                }({}),
                _ = a(7375),
                b = a(4848),
                I = function(e) {
                    var s = e.content,
                        a = e.title,
                        n = e.btnText,
                        i = e.show,
                        l = void 0 !== i && i,
                        t = (0, d.useState)(!1),
                        o = (0, c.A)(t, 2),
                        m = o[0],
                        u = o[1];
                    return (0, d.useEffect)((function() {
                        u(l)
                    }), [l]), (0, b.jsx)(b.Fragment, {
                        children: m ? (0, b.jsx)(r.Ss, {
                            className: "custom_modal_wrap",
                            children: (0, b.jsxs)(r.Ss, {
                                className: "custom_modal",
                                children: [(0, b.jsx)(r._V, {
                                    className: "custom_image",
                                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjIuOCIgZmlsbD0iIzczNjZGRiIgc3Ryb2tlPSIjRTJFNUY5IiBzdHJva2Utd2lkdGg9IjIuNCIvPgo8cGF0aCBkPSJNMTQuNCAyMi44TDIxLjYgMzBMMzMuNiAxOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                }), (0, b.jsx)(r.Ss, {
                                    className: "custom_modal_title",
                                    children: a
                                }), (0, b.jsx)(r.Ss, {
                                    className: "custom_modal_content",
                                    children: s
                                }), (0, b.jsx)(r.Ss, {
                                    className: "custom_modal_btn",
                                    onClick: function() {
                                        return u(!1)
                                    },
                                    children: n
                                })]
                            })
                        }) : (0, b.jsx)(b.Fragment, {})
                    })
                },
                p = (0, N.PA)((function() {
                    var e, s, a, n = (0, d.useState)(),
                        N = (0, c.A)(n, 2),
                        p = N[0],
                        C = N[1],
                        A = (0, d.useState)(!1),
                        M = (0, c.A)(A, 2),
                        f = (M[0], M[1]),
                        y = (0, o.useRouter)().params.success,
                        Z = void 0 === y ? "" : y,
                        w = (0, d.useState)(!1),
                        k = (0, c.A)(w, 2),
                        P = k[0],
                        D = k[1];
                    (0, o.useDidShow)((function() {
                        D(Boolean(Z || "") || !1), (0, t.qi)({
                            selected: l.Fd.Mine
                        }), T()
                    })), (0, o.useShareAppMessage)((function() {
                        return {
                            title: "快来火花杂物社一起创作吧~",
                            path: l.Fd.Mine
                        }
                    }));
                    var T = function() {
                        C((0, g.E4)()), (0, g.E4)() && h.A.setAllCards({
                            offset: "0",
                            limit: 20
                        })
                    };
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)(i.A, {
                            text: "我的"
                        }), (0, b.jsxs)(r.Ss, {
                            className: "mine_wrap",
                            children: [(0, b.jsxs)(r.Ss, {
                                className: "mine_info",
                                children: [(0, b.jsx)(r._V, {
                                    className: "mine_icon ".concat(null != p && p.avatarUrl ? "" : "no_border"),
                                    src: (null == p ? void 0 : p.avatarUrl) || x
                                }), (0, b.jsx)(r.Ss, {
                                    className: "mine_name",
                                    children: (null == p ? void 0 : p.nickName) || "未登录"
                                }), (0, b.jsx)(r.Ss, {
                                    className: "mine_id"
                                })]
                            }), (0, b.jsxs)(r.Ss, {
                                className: "mine_works",
                                onClick: function() {
                                    null != p && p.avatarUrl ? m().navigateTo({
                                        url: l.Fd.TaskList
                                    }) : f(!0)
                                },
                                children: [(0, b.jsx)(_.A, {
                                    onCancel: function() {
                                        f(!1)
                                    },
                                    onSuccess: function() {
                                        T()
                                    }
                                }), (0, b.jsxs)(r.Ss, {
                                    className: "mine_left",
                                    children: [(0, b.jsx)(r._V, {
                                        src: j,
                                        className: "mine_works_icon"
                                    }), (0, b.jsx)(r.Ss, {
                                        children: "我的卡库"
                                    })]
                                }), (0, b.jsxs)(r.Ss, {
                                    className: "mine_right",
                                    children: [(null === h.A || void 0 === h.A || null === (e = h.A.allCards) || void 0 === e || null === (e = e.filter((function(e) {
                                        return "paying" !== e.status
                                    }))) || void 0 === e ? void 0 : e.length) > 0 ? (0, b.jsx)(r.Ss, {
                                        className: "works_pre",
                                        children: null === h.A || void 0 === h.A || null === (s = h.A.allCards) || void 0 === s || null === (s = s.filter((function(e) {
                                            return "paying" !== e.status
                                        }))) || void 0 === s || null === (a = s.slice) || void 0 === a || null === (a = a.call(s, 0, 3)) || void 0 === a ? void 0 : a.map((function(e, s) {
                                            return (0, b.jsx)(r.Ss, {
                                                className: "works_item works_item_".concat(s),
                                                children: (0, b.jsx)(r._V, {
                                                    src: null == e ? void 0 : e.coverUrl,
                                                    mode: "heightFix",
                                                    className: "works_cover"
                                                })
                                            }, e.id)
                                        }))
                                    }) : (0, b.jsx)(r.Ss, {
                                        className: "no_works",
                                        children: "暂无卡库"
                                    }), (0, b.jsx)(r._V, {
                                        className: "entry_icon",
                                        src: S
                                    })]
                                })]
                            }), (0, b.jsx)(r.Ss, {
                                className: "mine_others",
                                children: Object.values(v).map((function(e, s) {
                                    return (0, b.jsxs)(r.Ss, {
                                        className: "mine_other ".concat(0 === s ? "no_top_border" : ""),
                                        onClick: function() {
                                            e !== v.myCard ? e !== v.cardCheck ? e !== v.contactService && (e !== v.privacyPolicy ? m().navigateTo({
                                                url: l.g5.DocumentShow + "?type=" + encodeURIComponent(e)
                                            }) : m().openPrivacyContract()) : m().navigateTo({
                                                url: l.g5.CardCheck
                                            }) : m().navigateTo({
                                                url: l.g5.MyCard
                                            })
                                        },
                                        children: [e, e === v.contactService ? (0, b.jsx)(r.$n, {
                                            "open-type": "contact",
                                            className: "kf_btn"
                                        }) : (0, b.jsx)(b.Fragment, {}), (0, b.jsx)(r._V, {
                                            className: "entry_icon",
                                            src: S
                                        })]
                                    }, e)
                                }))
                            })]
                        }), (0, b.jsx)(I, {
                            title: "视频创建成功",
                            content: (0, b.jsxs)(r.Ss, {
                                children: ["请耐心等待，后续可以", (0, b.jsx)(r.EY, {
                                    className: "success_modal_text",
                                    children: "关注微信通知"
                                }), "或者去", (0, b.jsx)(r.EY, {
                                    className: "success_modal_text",
                                    children: "我的卡库"
                                }), "中查看视频"]
                            }),
                            btnText: "我知道了",
                            show: P
                        }), (0, b.jsx)(u.A, {})]
                    })
                }));
            p.enableShareTimeline = !0, p.enableShareAppMessage = !0, Page((0, n.createPageConfig)(p, "pages/Mine/index", {
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
            return s = 7088, e(e.s = s);
            var s
        })), e.O()
    }
]);