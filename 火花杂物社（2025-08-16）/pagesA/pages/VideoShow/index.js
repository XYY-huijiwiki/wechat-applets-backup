
require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [581], {
        7563: function(e, n, s) {
            var a = s(7842),
                i = s(675),
                t = s(467),
                c = s(5544),
                r = s(6540),
                o = s(118),
                l = s(9617),
                u = s(6965),
                d = s.p + "assets/images/save_img.svg",
                h = s.p + "assets/images/save_video.svg",
                m = s(7580),
                g = s.p + "assets/images/re_play.png",
                v = s.p + "assets/images/car/car.png",
                p = s.p + "assets/images/car/carUse.png",
                x = s(758),
                I = s.n(x),
                S = s(8816),
                j = s(7513),
                f = s(8032),
                b = s(4634),
                N = s(4848),
                y = ["ceyanzhi"];
            var _ = function() {
                var e, n, s, a = (0, r.useState)(!1),
                    _ = (0, c.A)(a, 2),
                    w = _[0],
                    A = _[1],
                    k = (0, r.useState)({
                        visible: !1,
                        coverUrl: ""
                    }),
                    M = (0, c.A)(k, 2),
                    C = M[0],
                    P = M[1],
                    T = (0, r.useState)(),
                    D = (0, c.A)(T, 2),
                    U = D[0],
                    Z = D[1],
                    L = (0, r.useRef)(),
                    F = (0, x.useRouter)(),
                    H = (0, r.useRef)(""),
                    z = decodeURIComponent((null == F || null === (e = F.params) || void 0 === e ? void 0 : e.taskId) || "") || "",
                    V = (0, r.useRef)(null);
                (0, x.useShareAppMessage)((function(e) {
                    var n, s;
                    return H.current ? {
                        title: "快来火花杂物社一起创作吧~",
                        path: "".concat(S.g5.SharePage, "?shareId=").concat(H.current, "&channel=").concat((null === (n = I().getLaunchOptionsSync().query) || void 0 === n ? void 0 : n.channel) || "")
                    } : {
                        title: "快来火花杂物社一起创作吧~",
                        path: "".concat(S.Fd.Home, "?channel=").concat((null === (s = I().getLaunchOptionsSync().query) || void 0 === s ? void 0 : s.channel) || "")
                    }
                })), (0, x.useDidShow)((function() {
                    I().setKeepScreenOn({
                        keepScreenOn: !0
                    }), Q()
                })), (0, r.useEffect)((function() {
                    if (z) return L.current = I().createVideoContext("video_show_id"), B(), j.Ln.gen({
                            cardId: z
                        }).then((function(e) {
                            H.current = e.id
                        })),
                        function() {
                            V.current && clearTimeout(V.current)
                        };
                    I().navigateBack()
                }), []);
                var B = function e() {
                        (0, j.im)({
                            card_id: z
                        }).then((function(n) {
                            "finished" === n.status ? (Z(n), A(!0), V.current = null, P({
                                visible: !1,
                                coverUrl: ""
                            })) : "generating" === n.status && (P({
                                visible: !0,
                                coverUrl: n.coverUrl
                            }), V.current = setTimeout((function() {
                                e()
                            }), 3e3))
                        }))
                    },
                    G = function() {
                        var e = (0, t.A)((0, i.A)().mark((function e() {
                            var n, s;
                            return (0, i.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, I().showLoading({
                                            title: "保存中...",
                                            mask: !0
                                        }), e.next = 4, (0, j.Qp)((null == U ? void 0 : U.videoUrl) || "");
                                    case 4:
                                        if (!(n = e.sent).imageUrl) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 8, I().downloadFile({
                                            url: n.imageUrl
                                        });
                                    case 8:
                                        if (!(s = e.sent).tempFilePath) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 12, I().saveImageToPhotosAlbum({
                                            filePath: s.tempFilePath
                                        });
                                    case 12:
                                        console.log("图片已保存到相册"), I().hideLoading(), I().showToast({
                                            title: "图片已保存",
                                            icon: "success",
                                            duration: 2e3
                                        });
                                    case 15:
                                        e.next = 21;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(0), I().hideLoading(), I().showToast({
                                            title: "保存失败",
                                            icon: "error",
                                            duration: 2e3
                                        });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 17]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    R = (0, r.useState)({}),
                    W = (0, c.A)(R, 2),
                    J = W[0],
                    O = W[1],
                    Q = function() {
                        var e = (0, t.A)((0, i.A)().mark((function e() {
                            var n;
                            return (0, i.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, I().getSystemInfo({
                                            success: function(e) {
                                                return O(e), e
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
                    X = (0, r.useState)(!1),
                    E = (0, c.A)(X, 2),
                    Y = E[0],
                    q = E[1],
                    K = (0, r.useState)(!1),
                    $ = (0, c.A)(K, 2),
                    ee = $[0],
                    ne = $[1];
                return (0, N.jsxs)(N.Fragment, {
                    children: [ee && (0, N.jsx)(o.Ss, {
                        className: "car_use_wrapper",
                        children: (0, N.jsx)(o._V, {
                            onClick: function() {
                                return ne(!1)
                            },
                            mode: "widthFix",
                            className: "car_use",
                            src: p
                        })
                    }), (0, N.jsx)(b.A, {
                        isBack: !0
                    }), (0, N.jsxs)(o.Ss, {
                        className: "video-page",
                        children: [(null == U ? void 0 : U.redemptionCode) && (0, N.jsxs)(o.Ss, {
                            className: "car_wrapper",
                            children: [(0, N.jsx)(o.Ss, {
                                children: (0, N.jsx)(o._V, {
                                    className: "car_icon",
                                    src: v
                                })
                            }), (0, N.jsxs)(o.Ss, {
                                className: "center",
                                children: [(0, N.jsx)(o.Ss, {
                                    className: "title",
                                    children: "高德3D导航车标兑换码"
                                }), (0, N.jsx)(o.Ss, {
                                    className: "value",
                                    children: null == U ? void 0 : U.redemptionCode
                                }), (0, N.jsxs)(o.Ss, {
                                    className: "go",
                                    onClick: function() {
                                        ne(!0)
                                    },
                                    children: ["查看兑换方法", (0, N.jsx)(o._V, {
                                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSAyLjI1TDguMjUgNkw0LjUgOS43NSIgc3Ryb2tlPSIjODBFQUZGIiBzdHJva2Utd2lkdGg9IjEuMTI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                    })]
                                })]
                            }), (0, N.jsx)(o.Ss, {
                                className: "copy",
                                onClick: function() {
                                    null != U && U.redemptionCode && I().setClipboardData({
                                        data: U.redemptionCode,
                                        success: function() {
                                            console.log("复制成功")
                                        },
                                        fail: function(e) {
                                            console.error("复制失败", e)
                                        }
                                    })
                                },
                                children: "复制"
                            })]
                        }), (0, N.jsxs)(o.Ss, {
                            style: {
                                display: null != U && U.videoUrl ? "block" : "none"
                            },
                            className: "video_show_wrap",
                            children: [(0, N.jsx)(o.Ce, {
                                id: "video_show_id",
                                src: (null == U ? void 0 : U.videoUrl) || "",
                                onEnded: function() {
                                    q(!0)
                                },
                                className: "video_show_video",
                                showCenterPlayBtn: !0,
                                autoplay: !0,
                                objectFit: "cover"
                            }), Y && y.includes(null == U || null === (n = U.template) || void 0 === n ? void 0 : n.type) && (0, N.jsx)(o.Ss, {
                                className: "video_show_end",
                                children: (0, N.jsxs)(o.Ss, {
                                    className: "action_wrapper",
                                    children: [(0, N.jsx)(o._V, {
                                        src: g,
                                        className: "re_play",
                                        onClick: function() {
                                            var e;
                                            q(!1), null === (e = L.current) || void 0 === e || e.play()
                                        }
                                    }), (0, N.jsx)(o.Ss, {
                                        className: "try_again",
                                        onClick: function() {
                                            var e, n;
                                            q(!1), null === (e = L.current) || void 0 === e || e.stop(), I().navigateTo({
                                                url: "".concat(S.g5.UploadPhoto, "?name=").concat(null == U || null === (n = U.template) || void 0 === n ? void 0 : n.name)
                                            })
                                        },
                                        children: "不服气 再测一次"
                                    })]
                                })
                            })]
                        }), C.visible && (0, N.jsxs)(o.Ss, {
                            className: "generate_wrapper",
                            children: [(0, N.jsx)(o._V, {
                                src: C.coverUrl,
                                mode: "widthFix"
                            }), (0, N.jsxs)(o.Ss, {
                                className: "generate_text",
                                children: [(0, N.jsx)(o._V, {
                                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgMjFDMTYuOTcwNiAyMSAyMSAxNi45NzA2IDIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=",
                                    className: "generate_text_loading"
                                }), (0, N.jsx)(o.Ss, {
                                    className: "generate_text_title",
                                    children: "卡片制作中..."
                                }), (0, N.jsx)(o.Ss, {
                                    className: "generate_text_desc",
                                    children: "请耐心等待，卡片生成后会自动播放哦"
                                })]
                            })]
                        }), null != U && U.videoUrl && w ? (0, N.jsxs)(o.Ss, {
                            className: "button-group",
                            children: [(0, N.jsxs)(o.Ss, {
                                className: "video_btn",
                                onClick: function() {
                                    console.log("1111111")
                                },
                                children: [(0, N.jsx)(o.$n, {
                                    "open-type": "share"
                                }), (0, N.jsx)(o._V, {
                                    mode: "heightFix",
                                    src: u
                                }), "分享好友"]
                            }), (0, N.jsxs)(o.Ss, {
                                className: "video_btn",
                                onClick: G,
                                children: [(0, N.jsx)(o._V, {
                                    mode: "heightFix",
                                    src: d
                                }), "保存图片"]
                            }), (0, N.jsxs)(o.Ss, {
                                className: "video_btn",
                                onClick: function() {
                                    null != U && U.videoUrl ? (I().showLoading({
                                        title: "保存中...",
                                        mask: !0
                                    }), I().downloadFile({
                                        url: (null == U ? void 0 : U.videoUrl) || "",
                                        success: function(e) {
                                            I().saveVideoToPhotosAlbum({
                                                filePath: e.tempFilePath,
                                                success: function() {
                                                    I().hideLoading(), I().showToast({
                                                        title: "保存成功"
                                                    })
                                                },
                                                fail: function() {
                                                    I().hideLoading(), I().showToast({
                                                        title: "保存失败",
                                                        icon: "error"
                                                    })
                                                }
                                            })
                                        },
                                        fail: function(e) {
                                            I().hideLoading(), I().showToast({
                                                title: "下载失败",
                                                icon: "error"
                                            })
                                        }
                                    })) : I().showToast({
                                        title: "视频不存在",
                                        icon: "error"
                                    })
                                },
                                children: [(0, N.jsx)(o._V, {
                                    mode: "heightFix",
                                    src: h
                                }), "保存视频"]
                            })]
                        }) : (0, N.jsx)(o.Ss, {
                            className: "button-group",
                            style: {
                                height: "84px"
                            }
                        }), (0, N.jsx)(l.A, {}), null != U && null !== (s = U.template) && void 0 !== s && s.themes.includes("守护大电影") ? (0, N.jsx)(o.Ss, {
                            children: (0, N.jsx)(f.A, {
                                xx: J.screenWidth - 100,
                                yy: J.screenHeight - 100,
                                positionName: "gongzhonghao",
                                bgImage: m,
                                myClick: function() {
                                    return function(e, n) {
                                        var s = I().getAccountInfoSync().miniProgram.envVersion;
                                        "make" === e ? I().navigateTo({
                                            url: S.g5.CustomWeb + "?src=" + n
                                        }) : I().navigateToMiniProgram({
                                            shortLink: n,
                                            envVersion: s,
                                            success: function(e) {
                                                console.log("跳转成功！", e)
                                            }
                                        })
                                    }("buy", "#小程序://淘票票/McRXkzcfYb6c7Xv")
                                }
                            }, "buy")
                        }) : ""]
                    })]
                })
            };
            _.enableShareTimeline = !0, _.enableShareAppMessage = !0, Page((0, a.createPageConfig)(_, "pagesA/pages/VideoShow/index", {
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
            return n = 7563, e(e.s = n);
            var n
        })), e.O()
    }
]);