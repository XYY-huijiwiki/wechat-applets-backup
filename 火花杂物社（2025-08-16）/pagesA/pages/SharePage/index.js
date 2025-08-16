
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [99], {
        9420: function(e, n, i) {
            var s = i(7842),
                o = i(675),
                t = i(467),
                a = i(5544),
                c = i(6540),
                u = i(118),
                M = i(9617),
                r = i(6965),
                l = i(758),
                j = i.n(l),
                g = i(8816),
                N = i(7513),
                I = i(4634),
                d = i(8032),
                z = i(7580),
                y = i.p + "assets/images/make_same.png",
                p = i(4848);
            var A = function() {
                var e, n, i = (0, c.useState)(!0),
                    s = (0, a.A)(i, 2),
                    A = s[0],
                    m = s[1],
                    h = (0, c.useState)(),
                    x = (0, a.A)(h, 2),
                    D = x[0],
                    v = x[1],
                    S = (0, l.useRouter)(),
                    T = decodeURIComponent((null == S || null === (e = S.params) || void 0 === e ? void 0 : e.shareId) || "") || "";
                (0, l.useShareAppMessage)((function() {
                    return {
                        title: "快来火花杂物社一起创作吧~",
                        path: g.g5.SharePage + "?shareId=".concat(T)
                    }
                })), (0, l.useDidShow)((function() {
                    L()
                })), (0, c.useEffect)((function() {
                    N.Ln.get(T).then((function(e) {
                        console.log("res", e), v(e)
                    }))
                }), []);
                var f = (0, c.useState)({}),
                    b = (0, a.A)(f, 2),
                    w = b[0],
                    C = b[1],
                    L = function() {
                        var e = (0, t.A)((0, o.A)().mark((function e() {
                            var n;
                            return (0, o.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j().getSystemInfo({
                                            success: function(e) {
                                                return C(e), e
                                            }
                                        });
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    U = function(e, n) {
                        var i = j().getAccountInfoSync().miniProgram.envVersion;
                        "make" === e ? j().navigateTo({
                            url: n
                        }) : j().navigateToMiniProgram({
                            shortLink: n,
                            envVersion: i,
                            success: function(e) {
                                console.log("跳转成功！", e)
                            }
                        })
                    };
                return (0, p.jsxs)(u.Ss, {
                    className: "video-page",
                    children: [(0, p.jsx)(I.A, {
                        text: "",
                        isBack: !0,
                        onClick: function() {
                            console.log("===================================="), console.log("back"), console.log("===================================="), j().switchTab({
                                url: g.Fd.Home
                            })
                        }
                    }), (0, p.jsx)(u.Ss, {
                        className: "video_show_wrap",
                        children: (0, p.jsx)(u.Ce, {
                            src: (null == D ? void 0 : D.videoUrl) || "",
                            controls: A,
                            onClick: function() {
                                m(!A)
                            },
                            className: "video_show_video",
                            autoplay: !0,
                            showCenterPlayBtn: !0,
                            objectFit: "cover"
                        })
                    }), (0, p.jsxs)(u.Ss, {
                        className: "button-group",
                        children: [(0, p.jsxs)(u.Ss, {
                            className: "video_btn",
                            onClick: function() {},
                            children: [(0, p.jsx)(u.$n, {
                                "open-type": "share"
                            }), (0, p.jsx)(u._V, {
                                src: r
                            }), "分享给好友"]
                        }), (0, p.jsxs)(u.Ss, {
                            className: "video_btn",
                            onClick: function() {
                                null != D && D.videoUrl ? j().downloadFile({
                                    url: (null == D ? void 0 : D.videoUrl) || "",
                                    success: function(e) {
                                        j().authorize({
                                            scope: "scope.writePhotosAlbum",
                                            success: function() {
                                                j().saveVideoToPhotosAlbum({
                                                    filePath: e.tempFilePath,
                                                    success: function() {
                                                        j().showToast({
                                                            title: "保存成功"
                                                        })
                                                    },
                                                    fail: function() {
                                                        j().showToast({
                                                            title: "保存失败",
                                                            icon: "error"
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    },
                                    fail: function() {
                                        j().showToast({
                                            title: "下载失败",
                                            icon: "error"
                                        })
                                    }
                                }) : j().showToast({
                                    title: "视频不存在",
                                    icon: "error"
                                })
                            },
                            children: [(0, p.jsx)(u._V, {
                                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIzMjRfMTYxNTMpIj4KPGNpcmNsZSBjeD0iMjgiIGN5PSIyOCIgcj0iMjgiIGZpbGw9IiNGRkI3NUIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4xMTEyIDE4LjIyMjJWMjUuNTU1NkgyMC42OTc2QzIwLjE1MzIgMjUuNTU1NiAxOS44ODA1IDI2LjIxMzggMjAuMjY1NSAyNi41OTg4TDI2LjkxMzYgMzMuMjQ2OUMyNy4zOTA5IDMzLjcyNDIgMjguMTY0OCAzMy43MjQyIDI4LjY0MjEgMzMuMjQ2OUwzNS4yOTAyIDI2LjU5ODhDMzUuNjc1MSAyNi4yMTM4IDM1LjQwMjUgMjUuNTU1NiAzNC44NTggMjUuNTU1NkgzMS40NDQ1VjE4LjIyMjJDMzEuNDQ0NSAxNy41NDcyIDMwLjg5NzMgMTcgMzAuMjIyMyAxN0gyNS4zMzM0QzI0LjY1ODQgMTcgMjQuMTExMiAxNy41NDcyIDI0LjExMTIgMTguMjIyMlpNMjAuNDQ0NCAzNi41NTU2QzE5Ljc2OTQgMzYuNTU1NiAxOS4yMjIyIDM3LjEwMjggMTkuMjIyMiAzNy43Nzc4QzE5LjIyMjIgMzguNDUyOSAxOS43Njk0IDM5LjAwMDEgMjAuNDQ0NCAzOS4wMDAxSDM1LjExMTFDMzUuNzg2MSAzOS4wMDAxIDM2LjMzMzMgMzguNDUyOSAzNi4zMzMzIDM3Ljc3NzhDMzYuMzMzMyAzNy4xMDI4IDM1Ljc4NjEgMzYuNTU1NiAzNS4xMTExIDM2LjU1NTZIMjAuNDQ0NFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjMyNF8xNjE1MyI+CjxyZWN0IHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                            }), "保存到相册"]
                        })]
                    }), (0, p.jsx)(M.A, {}), null != D && null !== (n = D.videoCard) && void 0 !== n && null !== (n = n.template) && void 0 !== n && n.themes.includes("守护大电影") ? (0, p.jsxs)(u.Ss, {
                        children: [(0, p.jsx)(d.A, {
                            xx: w.screenWidth - 100,
                            yy: w.screenHeight - 170,
                            positionName: "sharetpp",
                            bgImage: z,
                            myClick: function() {
                                return U("buy", "#小程序://淘票票/McRXkzcfYb6c7Xv")
                            }
                        }, "buy"), (0, p.jsx)(d.A, {
                            xx: w.screenWidth - 100,
                            yy: w.screenHeight - 100,
                            positionName: "made",
                            bgImage: y,
                            myClick: function() {
                                var e;
                                return U("make", g.Fd.TemplateDetail + "?name=" + (null == D || null === (e = D.videoCard) || void 0 === e || null === (e = e.template) || void 0 === e ? void 0 : e.name))
                            }
                        }, "make")]
                    }) : ""]
                })
            };
            A.enableShareTimeline = !0, A.enableShareAppMessage = !0, Page((0, s.createPageConfig)(A, "pagesA/pages/SharePage/index", {
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
        e.O(0, [475, 907, 96, 76], (function() {
            return n = 9420, e(e.s = n);
            var n
        })), e.O()
    }
]);