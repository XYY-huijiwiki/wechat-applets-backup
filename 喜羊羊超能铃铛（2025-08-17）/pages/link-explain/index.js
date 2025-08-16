
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [34], {
        7221: function(e, n, a) {
            var s = a(2180),
                c = a(1515),
                i = a(2954),
                t = a(1829),
                l = a(1211),
                o = a(5893),
                r = ["1. 确保已连按3次铃铛上的按键，听到铃铛语音提示“进入配网”", "2. 确保小程序已获取必要授权：可点击小程序右上角三个点 “ ... ”，选择 [设置] ，允许所有要求的权限；", "3. 将手机尽量靠近铃铛，搜索等待1分钟左右；", "4. 若上述操作无误，仍然无法搜索到，可尝试以下操作后重新配网：", "· 将铃铛恢复出厂设置：唤醒铃铛，对铃铛说“恢复出厂设置”。", "· 重启小程序：点击小程序右上角三个点 “ ... ”，选择 [重新进入小程序]。"];
            Page((0, s.createPageConfig)((function() {
                return (0, i.useLoad)((function() {
                    console.log("Page loaded.")
                })), (0, o.jsxs)(c.G7, {
                    className: "index",
                    children: [(0, o.jsx)(l.Z, {
                        showBack: !0
                    }), (0, o.jsx)(c.Ee, {
                        src: t.CV
                    }), (0, o.jsx)(c.G7, {
                        className: "title",
                        children: "搜不到铃铛？"
                    }), (0, o.jsx)(c.G7, {
                        className: "explain",
                        children: r.map((function(e, n) {
                            return (0, o.jsx)(c.G7, {
                                className: "explain-item",
                                children: (0, o.jsx)(c.G7, {
                                    className: "content",
                                    children: e
                                })
                            }, n)
                        }))
                    })]
                })
            }), "pages/link-explain/index", {
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
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return n = 7221, e(e.s = n);
            var n
        })), e.O()
    }
]);