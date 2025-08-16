
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [539], {
        1622: function(e, n, i) {
            var s = i(2180),
                a = i(9439),
                t = i(1515),
                c = i(2954),
                o = i(6790),
                r = i(1829),
                l = i(2153),
                u = i(7294),
                x = i(1211),
                p = i(3608),
                d = i(3644),
                g = i(6261),
                h = i(8732),
                f = i(370),
                m = i(5893),
                b = {
                    Header: {
                        title: "喜羊羊超能铃铛",
                        tips: "连接网络，开启喜羊羊超能铃铛之旅",
                        image: r.oU,
                        btnText: "开始配网"
                    }
                };
             function j() {
                var e = (0, o.f)(),
                    n = (0, u.useState)(!0),
                    i = (0, a.Z)(n, 2),
                    s = i[0],
                    j = i[1];
                (0, c.useLoad)((function(e) {
                    (0, g.G3)("app_pv", 1)
                })), (0, u.useEffect)((function() {
                    console.log("loginStatus", e), e === o.u.NOT_LOGOIN_IN && j(!1), e === o.u.IS_LOGIN_IN && (j(!0), (0, g.G3)("login_pv", 1))
                }), [e]);
                return (0, m.jsxs)(t.G7, {
                    className: "index",
                    children: [(0, m.jsx)(x.Z, {}), function() {
                        var e = b.Header;
                        return (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsxs)(t.G7, {
                                className: "main-box",
                                children: [(0, m.jsxs)(t.G7, {
                                    className: "content",
                                    children: [(0, m.jsx)(t.G7, {
                                        className: "title",
                                        children: e.title
                                    }), (0, m.jsx)(t.G7, {
                                        className: "tips ",
                                        children: e.tips
                                    })]
                                }), (0, m.jsx)(t.G7, {
                                    className: "bg",
                                    children: (0, m.jsx)(t.Ee, {
                                        src: e.image
                                    })
                                })]
                            }), (0, m.jsxs)(t.G7, {
                                className: "button-box",
                                children: [(0, m.jsx)(l.Z, {
                                    text: e.btnText,
                                    openType: s ? void 0 : "getPhoneNumber|agreePrivacyAuthorization",
                                    onLoginSuccess: function() {
                                        j(!0)
                                    },
                                    handleClick: function() {
                                        s && ((0, g.G3)("scan_device_pv", 1), (0, d.c4)(p.i.Package, p.i.Link))
                                    }
                                }), (0, m.jsxs)(t.G7, {
                                    className: "operation-tips",
                                    onClick: function() {
                                        (0, d.c4)(p.i.Package, p.i.OperationInstructions)
                                    },
                                    children: [(0, m.jsx)(t.Ee, {
                                        src: r.zS
                                    }), (0, m.jsx)(t.G7, {
                                        children: "铃铛操作说明书"
                                    })]
                                })]
                            })]
                        })
                    }(), (0, m.jsx)(h.n, {
                        fixed: !0,
                        tabList: f.C,
                        onClick: function(e) {
                            0 !== e && (0, d.UY)(p.i.Package, p.i.UserProfile)
                        }
                    })]
                })
            }
            j.enableShareTimeline = !0, j.enableShareAppMessage = !0, Page((0, s.createPageConfig)(j, "pages/index/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "首页",
                navigationStyle: "custom",
                disableScroll: !0,
                enableShareAppMessage: !0,
                enableShareTimeline: !0
            } || {}))
        }
    },
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return n = 1622, e(e.s = n);
            var n
        })), e.O()
    }
]);