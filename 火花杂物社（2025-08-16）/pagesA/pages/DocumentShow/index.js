
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [507], {
        9338: function(s, e, c) {
            var n = c(7842),
                o = c(5544),
                a = c(118),
                d = c(758),
                l = c(6540),
                t = c(4848),
                r = function() {
                    var s, e = (0, l.useState)(decodeURIComponent((null === (s = (0, d.useRouter)()) || void 0 === s || null === (s = s.params) || void 0 === s ? void 0 : s.type) || "") || ""),
                        c = (0, o.A)(e, 2);
                    return c[0], c[1], (0, t.jsx)(a.Ss, {
                        className: "document_scroll",
                        children: (0, t.jsxs)(a.Ss, {
                            className: "document_show_wrap",
                            children: [(0, t.jsx)(a.Ss, {
                                className: "document_show_title",
                                children: "常见问题"
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_first",
                                children: "1.  付款完成后找不到制作的卡："
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_second",
                                children: "a. 制作完成后，会收到含有链接的微信官方通知，点击链接会导向小程序作品页面。"
                            }), (0, t.jsxs)(a.Ss, {
                                className: "document_show_second",
                                children: [" ", "b.  直接通过”我的“页面，“我的作品”功能，开始制作的卡牌会在列表中。"]
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_second",
                                children: "c. 如果在小程序内依然找不到，尝试检查是否有不同账号登录的情况，有时可能误用了其他微信账号登录小程序。"
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_first",
                                children: "2.  提示下载失败："
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_second",
                                children: "a. 问题偶尔会出现，大多数是因为网络较差，服务器超时，请尝试在WIFI环境下或网络稳定的地方下载。"
                            }), (0, t.jsxs)(a.Ss, {
                                className: "document_show_second",
                                children: [" ", "b. 还可以尝试清理微信缓存或者重启微信应用，有时候缓存问题也会导致下载异常。"]
                            }), (0, t.jsxs)(a.Ss, {
                                className: "document_show_second",
                                children: [" ", "c.  确认手机存储空间是否足够，不足空间也可能导致下载失败。"]
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_first",
                                children: "3.  想分享给朋友："
                            }), (0, t.jsx)(a.Ss, {
                                className: "document_show_second",
                                children: "a. 利用小程序内的分享功能是最直接的方式，作品展示页有明确的分享按钮，可以直接将作品页面通过微信转发给朋友。"
                            }), (0, t.jsxs)(a.Ss, {
                                className: "document_show_second",
                                children: [" ", "b. 下载到本地后再通过微信的文件发送功能分享也是可行的，这样可以确保朋友能够接收到完整的作品。"]
                            }), (0, t.jsxs)(a.Ss, {
                                className: "document_show_second",
                                children: [" ", "如果以上建议仍然不能解决您的问题，可直接在小程序内寻找客服入口，联系客服进行更具体的故障排查和解决。"]
                            })]
                        })
                    })
                };
            Page((0, n.createPageConfig)(r, "pagesA/pages/DocumentShow/index", {
                root: {
                    cn: []
                }
            }, {} || {}))
        }
    },
    function(s) {
        s.O(0, [907, 96], (function() {
            return e = 9338, s(s.s = e);
            var e
        })), s.O()
    }
]);