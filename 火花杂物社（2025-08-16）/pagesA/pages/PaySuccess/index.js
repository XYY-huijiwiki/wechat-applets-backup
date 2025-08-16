
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [256], {
        7226: function(s, a, e) {
            var i = e(7842),
                n = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiM4NTk5RkYiLz4KPHBhdGggZD0iTTI0IDM4TDM2IDUwTDU2IDMwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                c = e(7316),
                r = e(118),
                I = e(758),
                o = e.n(I),
                g = e(8816),
                l = e(4848),
                t = function() {
                    var s = (0, I.useRouter)(),
                        a = s.params.isi,
                        e = void 0 === a ? "" : a;
                    console.log("router.params!!!!!", s.params);
                    var i = "#小程序://淘票票/McRXkzcfYb6c7Xv";
                    return o().hideShareMenu(), (0, l.jsx)(l.Fragment, {
                        children: e ? (0, l.jsx)(l.Fragment, {
                            children: "webview" === e ? (0, l.jsx)(r.SC, {
                                src: i
                            }) : (0, l.jsxs)(r.Ss, {
                                className: "pay_success_wrap",
                                children: [(0, l.jsx)(r._V, {
                                    src: n
                                }), (0, l.jsx)(r.Ss, {
                                    className: "pay_text",
                                    children: "点击下方【前往影片详情】按钮，前往【淘票票电影】小程序里《喜羊羊与灰太狼之守护》影片详情页面，并点击「想看」"
                                }), (0, l.jsx)(r.Ss, {
                                    className: "pay_success_btn",
                                    onClick: function() {
                                        var s = o().getAccountInfoSync().miniProgram.envVersion;
                                        o().navigateToMiniProgram({
                                            shortLink: i,
                                            envVersion: s,
                                            success: function(s) {
                                                console.log("跳转成功！", s)
                                            }
                                        })
                                    },
                                    children: "前往影片详情"
                                })]
                            })
                        }) : (0, l.jsxs)(r.Ss, {
                            className: "pay_success_wrap",
                            children: [(0, l.jsx)(r._V, {
                                src: (0, c.jl)() ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNEODJGMUIiLz4KPHBhdGggZD0iTTI0IDM4TDM2IDUwTDU2IDMwIiBzdHJva2U9IiNGRkRBQkYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" : n
                            }), (0, l.jsx)(r.Ss, {
                                className: "pay_text",
                                children: "支付成功且正在生成定制卡牌"
                            }), (0, l.jsx)(r.Ss, {
                                className: "pay_success_btn",
                                onClick: function() {
                                    return o().navigateTo({
                                        url: g.Fd.TaskList
                                    })
                                },
                                children: "前往查看定制卡牌"
                            })]
                        })
                    })
                };
            Page((0, i.createPageConfig)(t, "pagesA/pages/PaySuccess/index", {
                root: {
                    cn: []
                }
            }, {
                navigationStyle: "custom",
                enableShareAppMessage: !1,
                enableShareTimeline: !1
            } || {}))
        }
    },
    function(s) {
        s.O(0, [907, 96, 76], (function() {
            return a = 7226, s(s.s = a);
            var a
        })), s.O()
    }
]);