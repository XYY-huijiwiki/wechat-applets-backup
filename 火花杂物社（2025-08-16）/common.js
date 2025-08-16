
require("@babel/runtime/helpers/Objectvalues"), require("@babel/runtime/helpers/Arrayincludes"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [76], {
        8724: function(e, n, t) {
            t.d(n, {
                hO: function() {
                    return g
                },
                rb: function() {
                    return f
                },
                Ur: function() {
                    return p
                },
                E$: function() {
                    return v
                }
            });
            var r = t(9379),
                a = t(758),
                i = t.n(a),
                o = t(5879),
                c = t(8414),
                u = t(7971);
             function s(e, n, t) {
                var a = t,
                    o = "GET",
                    c = t.split(" ");
                return 2 === c.length && (o = c[0], a = c[1]),
                    function(t, c) {
                        t = (0, u.A)(t);
                        var s = Object.assign({
                                requestHandler: function(e) {
                                    return (0, r.A)({}, e)
                                },
                                responseHandler: function(e) {
                                    if (e.data) return e.data;
                                    throw new Error("internal error")
                                },
                                errorHandler: function(e) {
                                    throw e
                                }
                            }, n, c),
                            l = s.requestHandler,
                            d = s.responseHandler,
                            p = s.errorHandler,
                            f = function(e, n) {
                                return e.replace(/\{([^{}]+)\}/g, (function(e, t) {
                                    var r = n[t];
                                    return delete n[t], encodeURIComponent(r)
                                }))
                            }(a, t),
                            g = Object.assign(e, {
                                url: f,
                                data: t,
                                method: o
                            });
                        return Promise.resolve(l(g)).then((function(e) {
                            return new Promise((function(n, t) {
                                i().request((0, r.A)((0, r.A)({}, e), {}, {
                                    success: n,
                                    fail: t
                                }))
                            }))
                        })).then(d).catch(p)
                    }
            }
            i().getAccountInfoSync().miniProgram.envVersion;
            var l = "https://ip.xiaoice.com",
                d = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return s.bind(null, e, n)
                }({}, {
                    requestHandler: function(e) {
                        var n = e.url;
                        /^http(s)?:/.test(n) || (e.url = l + n);
                        var t, a = (0, o.iD)();
                        return a ? e.header = (0, r.A)((0, r.A)({}, null !== (t = e.header) && void 0 !== t ? t : {}), {}, {
                            "x-trace-id": (0, c.v4)(),
                            Authorization: a
                        }) : i().showToast({
                            title: "token 不存在，请重试",
                            icon: "error"
                        }), e
                    },
                    responseHandler: function(e) {
                        var n = null == e ? void 0 : e.data;
                        if (!n) throw new Error("服务器开小差了，请稍后再试~");
                        return n
                    },
                    errorHandler: function(e) {
                        throw i().showToast({
                            title: e.message || "服务器开小差了，请稍后再试~",
                            icon: "error"
                        }), e
                    }
                }),
                p = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = e.url;
                    /^http(s)?:/.test(t) || (e.url = l + t);
                    var a, o = i().getStorageSync("accessToken");
                    return o && n && (e.header = (0, r.A)((0, r.A)({}, null !== (a = e.header) && void 0 !== a ? a : {}), {}, {
                        authorization: "Bearer ".concat(o),
                        "x-trace-id": (0, c.v4)()
                    })), new Promise((function(n, t) {
                        i().request((0, r.A)((0, r.A)({}, e), {}, {
                            success: function(r) {
                                if (200 !== r.statusCode) return e.customError, void t(r.data);
                                n(r.data)
                            },
                            fail: function(e) {
                                setTimeout((function() {
                                    i().showToast({
                                        icon: "none",
                                        title: (null == e ? void 0 : e.msg) || "请求接口失败",
                                        duration: 1500
                                    })
                                }), 300), t(e)
                            }
                        }))
                    }))
                },
                f = d("POST /api/v1/auth/wx-login"),
                g = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return p((0, r.A)((0, r.A)({}, n), {}, {
                        url: "/api/v1/auth/wx-login",
                        method: "POST",
                        data: (0, r.A)({}, e)
                    }))
                };
             function v() {
                return p({
                    url: "/api/v1/auth/me/profile",
                    method: "GET"
                })
            }
            d("GET /api/calendar/v1/subscription"), d("GET /api/calendar/v1/calendars"), d("POST /api/calendar/v1/subscription"), d("GET /api/calendar/v1/calendars/{calendar_name}/cards"), d("GET /api/calendar/v1/calendars/{calendar_name}/common-card")
        },
        5879: function(e, n, t) {
            t.d(n, {
                Rf: function() {
                    return p
                },
                iD: function() {
                    return d
                },
                wD: function() {
                    return f
                }
            });
            var r = t(675),
                a = t(467),
                i = t(758),
                o = t.n(i),
                c = t(8724),
                u = (o().getStorageSync("appid"), o().getStorageSync("phoneCode"), o().getStorageSync("accessToken") || null);
             function s() {
                o().getAccountInfoSync().miniProgram.appId;
                return "wx9d6261452d025e43"
            }
             function l() {
                return o().getStorageSync("phoneCode") || null
            }
             function d() {
                return o().getStorageSync("accessToken") || u
            }
            var p = function() {
                    var e = (0, a.A)((0, r.A)().mark((function e(n, t) {
                        var a, i, u, l;
                        return (0, r.A)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o().setStorageSync("phoneCode", t), o().setStorageSync("loginCode", n), e.next = 4, (0, c.hO)({
                                        appId: s(),
                                        loginCode: n,
                                        phoneCode: t
                                    });
                                case 4:
                                    if (a = e.sent, u = (i = a || {}).access_token, l = i.refresh_token, !u) {
                                        e.next = 12;
                                        break
                                    }
                                    return o().setStorageSync("accessToken", u), o().setStorageSync("refreshToken", l), e.abrupt("return", !0);
                                case 12:
                                    return e.abrupt("return", !1);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, a.A)((0, r.A)().mark((function e(n) {
                        var t, a, i, u, d;
                        return (0, r.A)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (o().setStorageSync("loginCode", n), t = !0, console.log("~~~~~~checkLogin~~~~~~~~~in", l()), l()) {
                                        e.next = 7;
                                        break
                                    }
                                    t = !1, e.next = 14;
                                    break;
                                case 7:
                                    return console.log("~~~~~~使用本地存储的值请求登录接口", l()), e.next = 10, (0, c.rb)({
                                        appId: s() || "",
                                        loginCode: n
                                    });
                                case 10:
                                    a = e.sent, console.log("~~~~~~checkLogin~~~~~~~~~in--in", a), u = (i = a || {}).access_token, d = i.refresh_token, u ? (o().setStorageSync("accessToken", u), o().setStorageSync("refreshToken", d), t = !0) : t = !1;
                                case 14:
                                    return e.abrupt("return", t);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        4747: function(e, n, t) {
            t.d(n, {
                E4: function() {
                    return o
                },
                _b: function() {
                    return c
                }
            });
            var r = t(758),
                a = t.n(r),
                i = "xyy_auth_key";
             function o() {
                var e = a().getStorageSync(i);
                if (e) {
                    var n;
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                        console.error("getAuthStorage: ", e)
                    }
                    return n
                }
            }
             function c(e) {
                var n = JSON.stringify(e);
                a().setStorageSync(i, n)
            }
        },
        7513: function(e, n, t) {
            t.d(n, {
                $e: function() {
                    return f
                },
                Fs: function() {
                    return y
                },
                J: function() {
                    return v
                },
                Ln: function() {
                    return g
                },
                NG: function() {
                    return h
                },
                Qp: function() {
                    return d
                },
                UT: function() {
                    return l
                },
                im: function() {
                    return m
                },
                kA: function() {
                    return A
                },
                u3: function() {
                    return p
                }
            });
            var r = t(675),
                a = t(467),
                i = t(9379),
                o = t(8816),
                c = t(8724),
                u = t(758),
                s = t.n(u),
                l = function(e) {
                    var n, t, r, a;
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/video-tasks",
                        method: "POST",
                        data: (0, i.A)((0, i.A)({}, e), {}, {
                            wxMiniProgramNotifyInfo: {
                                page: o.Fd.Home
                            },
                            channel: (null === (n = decodeURIComponent((null === (r = s().getLaunchOptionsSync()) || void 0 === r || null === (r = r.query) || void 0 === r ? void 0 : r.scene) || "")) || void 0 === n || null === (t = n.split) || void 0 === t || null === (t = t.call(n, "=")) || void 0 === t ? void 0 : t[1]) || (null === (a = s().getLaunchOptionsSync().query) || void 0 === a ? void 0 : a.channel) || ""
                        })
                    })
                },
                d = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/utils/save-frame",
                        method: "POST",
                        data: {
                            videoUrl: e,
                            index: -1
                        }
                    })
                },
                p = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/video-tasks?limit=".concat(null == e ? void 0 : e.limit, "&offset=").concat(null == e ? void 0 : e.offset),
                        method: "GET"
                    })
                },
                f = function(e) {
                    var n, t, r, a;
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/orders",
                        method: "POST",
                        data: (0, i.A)((0, i.A)({}, e), {}, {
                            wxMiniProgramNotifyInfo: {
                                page: o.Fd.Home
                            },
                            channel: (null === (n = decodeURIComponent((null === (r = s().getLaunchOptionsSync()) || void 0 === r || null === (r = r.query) || void 0 === r ? void 0 : r.scene) || "")) || void 0 === n || null === (t = n.split) || void 0 === t || null === (t = t.call(n, "=")) || void 0 === t ? void 0 : t[1]) || (null === (a = s().getLaunchOptionsSync().query) || void 0 === a ? void 0 : a.channel) || ""
                        })
                    })
                },
                g = {
                    gen: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", (0, c.Ur)({
                                            url: "/api/ai-video/v1/shares",
                                            method: "POST",
                                            data: n
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    get: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", (0, c.Ur)({
                                            url: "/api/ai-video/v1/shares/".concat(n),
                                            method: "GET"
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                v = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/cards?limit=".concat(null == e ? void 0 : e.limit, "&offset=").concat(null == e ? void 0 : e.offset),
                        method: "get"
                    })
                },
                m = function(e) {
                    var n = e.card_id;
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/cards/".concat(n),
                        method: "get"
                    })
                },
                h = function(e) {
                    var n, t, r, a;
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/cards",
                        method: "POST",
                        data: (0, i.A)((0, i.A)({}, e), {}, {
                            wxMiniProgramNotifyInfo: {
                                page: o.Fd.Home
                            },
                            channel: (null === (n = decodeURIComponent((null === (r = s().getLaunchOptionsSync()) || void 0 === r || null === (r = r.query) || void 0 === r ? void 0 : r.scene) || "")) || void 0 === n || null === (t = n.split) || void 0 === t || null === (t = t.call(n, "=")) || void 0 === t ? void 0 : t[1]) || (null === (a = s().getLaunchOptionsSync().query) || void 0 === a ? void 0 : a.channel) || ""
                        })
                    })
                },
                A = function(e, n) {
                    var t, r, a, u;
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/redemption-cards/".concat(e, "/exchange"),
                        method: "POST",
                        data: (0, i.A)((0, i.A)({}, n), {}, {
                            wxMiniProgramNotifyInfo: {
                                page: o.Fd.Home
                            },
                            channel: (null === (t = decodeURIComponent((null === (a = s().getLaunchOptionsSync()) || void 0 === a || null === (a = a.query) || void 0 === a ? void 0 : a.scene) || "")) || void 0 === t || null === (r = t.split) || void 0 === r || null === (r = r.call(t, "=")) || void 0 === r ? void 0 : r[1]) || (null === (u = s().getLaunchOptionsSync().query) || void 0 === u ? void 0 : u.channel) || ""
                        })
                    })
                },
                y = function(e) {
                    return (0, c.Ur)({
                        url: "/api/ai-video/v1/cards/".concat(e, "/pay"),
                        method: "POST"
                    })
                }
        },
        3835: function(e, n, t) {
            t.d(n, {
                HU: function() {
                    return u
                },
                T6: function() {
                    return d
                },
                bF: function() {
                    return s
                },
                fS: function() {
                    return l
                },
                gz: function() {
                    return c
                },
                sJ: function() {
                    return o
                }
            });
            var r = t(9379),
                a = t(8724),
                i = (0, t(7316).Ht)() ? "tongdaodashu" : "wechat-mini-program",
                o = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/video-template-groups",
                        method: "get",
                        param: e
                    })
                },
                c = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/video-templates",
                        method: "get",
                        data: e
                    })
                },
                u = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/navigation/themes",
                        method: "get",
                        data: (0, r.A)({
                            tag: i
                        }, e)
                    })
                },
                s = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/navigation/ips",
                        method: "get",
                        data: (0, r.A)({
                            tag: i
                        }, e)
                    })
                },
                l = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/templates",
                        method: "get",
                        data: (0, r.A)({
                            tag: i
                        }, e)
                    })
                },
                d = function(e) {
                    return (0, a.Ur)({
                        url: "/api/ai-video/v1/templates/".concat(e),
                        method: "get"
                    })
                }
        },
        8761: function(e, n, t) {
            var r = t(118),
                a = t(758),
                i = t.n(a),
                o = t(9025),
                c = t(4848);
            n.A = function(e) {
                var n = e.onClick;
                return (0, c.jsx)(r.Ss, {
                    className: "custom_back",
                    children: (0, c.jsx)(r._V, {
                        className: "custom_back_icon",
                        src: o,
                        onClick: function() {
                            n ? null == n || n() : i().navigateBack()
                        }
                    })
                })
            }
        },
        9617: function(e, n, t) {
            var r = t(118),
                a = t(4848);
            n.A = function() {
                return (0, a.jsx)(r.Ss, {
                    className: "home_page_bottom"
                })
            }
        },
        6743: function(e, n, t) {
            var r = t(5544),
                a = t(118),
                i = t(6540),
                o = t(4848);
            n.A = function(e) {
                var n = e.content,
                    t = e.title,
                    c = e.btnText,
                    u = e.show,
                    s = void 0 !== u && u,
                    l = e.onFinish,
                    d = (0, i.useState)(!1),
                    p = (0, r.A)(d, 2),
                    f = p[0],
                    g = p[1];
                return (0, i.useEffect)((function() {
                    g(s)
                }), [s]), (0, o.jsx)(o.Fragment, {
                    children: f ? (0, o.jsx)(a.Ss, {
                        className: "default_modal_wrap",
                        children: (0, o.jsxs)(a.Ss, {
                            className: "default_modal",
                            children: [(0, o.jsx)(a.Ss, {
                                className: "default_modal_title",
                                children: t
                            }), (0, o.jsx)(a.Ss, {
                                className: "default_modal_content",
                                children: n
                            }), (0, o.jsxs)(a.Ss, {
                                className: "default_modal_btn",
                                onClick: function() {
                                    g(!1), null == l || l()
                                },
                                children: [(0, o.jsx)("button", {
                                    className: "default_btn_cancel",
                                    children: "取消"
                                }), (0, o.jsx)("button", {
                                    className: "default_btn_confirm",
                                    "open-type": "contact",
                                    "show-message-card": !0,
                                    "session-from": JSON.stringify({
                                        cardId: c
                                    }),
                                    children: "允许"
                                })]
                            })]
                        })
                    }) : (0, o.jsx)(o.Fragment, {})
                })
            }
        },
        2257: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return g
                }
            });
            var r = t(118),
                a = t(6540),
                i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjMyOyYjMTY3OyYjMTQ2OyYjMjMyOyYjMTM4OyYjMTc3OyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzEwXzk1OTEpIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxOTQzIiBjeD0iMyIgY3k9IjMiIHI9IjE1IiBmaWxsPSIjRDlFM0ZGIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMzEwXzk1OTEiPgo8cGF0aCBkPSJNMCAyMEMwIDguOTU0MzEgOC45NTQzMSAwIDIwIDBWMjBIMFoiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
                o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjMyOyYjMTY3OyYjMTQ2OyYjMjMyOyYjMTM4OyYjMTc3OyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzEwXzk1OTMpIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxOTQzIiBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDMyIC0xMikiIGZpbGw9IiNEOUUzRkYiLz4KPC9nPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIzMTBfOTU5MyI+CjxwYXRoIGQ9Ik0yMCAyMEMyMCA4Ljk1NDMxIDExLjA0NTcgMCAwIDBWMjBIMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
                c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjMyOyYjMTY3OyYjMTQ2OyYjMjMyOyYjMTM4OyYjMTc3OyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzEwXzk1OTUpIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxOTQzIiBjeD0iMTciIGN5PSIxNyIgcj0iMTUiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMTcgMTcpIiBmaWxsPSIjRDlFM0ZGIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMzEwXzk1OTUiPgo8cGF0aCBkPSJNMjAgMEMyMCAxMS4wNDU3IDExLjA0NTcgMjAgMCAyMFYwSDIwWiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                u = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjMyOyYjMTY3OyYjMTQ2OyYjMjMyOyYjMTM4OyYjMTc3OyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzEwXzk1OTcpIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxOTQzIiBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMiAzMikiIGZpbGw9IiNEOUUzRkYiLz4KPC9nPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIzMTBfOTU5NyI+CjxwYXRoIGQ9Ik0wIDBDMCAxMS4wNDU3IDguOTU0MzEgMjAgMjAgMjBWMEgwWiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                s = t.p + "assets/images/login_header.png",
                l = t(758),
                d = t.n(l),
                p = t(8414),
                f = t(4848),
                g = function(e) {
                    var n = e.src,
                        t = e.type,
                        l = void 0 === t ? "image" : t,
                        g = e.autoPlay,
                        v = void 0 !== g && g,
                        m = e.title,
                        h = (0, a.useRef)((0, p.v4)()),
                        A = (0, a.useRef)();
                    return (0, a.useEffect)((function() {
                        A.current = d().createVideoContext(h.current)
                    }), []), (0, a.useEffect)((function() {
                        var e, n;
                        v ? null === (e = A.current) || void 0 === e || e.play() : null === (n = A.current) || void 0 === n || n.pause()
                    }), [v]), (0, f.jsxs)(r.Ss, {
                        className: "custom_image_card",
                        children: ["image" === l ? (0, f.jsx)(r._V, {
                            mode: "heightFix",
                            src: n,
                            className: "main_image"
                        }) : (0, f.jsx)(r.Ce, {
                            src: n,
                            className: "main_video",
                            objectFit: "cover",
                            autoplay: v,
                            loop: !0,
                            muted: !0,
                            id: h.current,
                            controls: !1,
                            autoPauseIfNavigate: !0,
                            enablePlayGesture: !0,
                            enableProgressGesture: !1
                        }), [i, o, c, u].map((function(e, n) {
                            return (0, f.jsx)(r._V, {
                                className: "flow ".concat("flow" + n),
                                src: e
                            }, "flow" + n)
                        })), m ? (0, f.jsxs)(r.Ss, {
                            className: "video_title",
                            children: [(0, f.jsx)(r.Ss, {
                                className: "video_info_icon",
                                children: (0, f.jsx)(r._V, {
                                    className: "video_info_icon_image",
                                    src: s
                                })
                            }), (0, f.jsx)(r.Ss, {
                                className: "video_info_title",
                                children: m
                            })]
                        }) : (0, f.jsx)(f.Fragment, {})]
                    })
                }
        },
        4634: function(e, n, t) {
            var r = t(118),
                a = t(9025),
                i = t(758),
                o = t.n(i),
                c = t(8816),
                u = t(7316),
                s = t(4848);
            n.A = function(e) {
                var n = e.text,
                    t = e.isBack,
                    i = void 0 !== t && t,
                    l = e.onClick;
                return (0, s.jsxs)(r.Ss, {
                    className: "custom_title ".concat((0, u.Qo)() ? "custom_title_pad" : ""),
                    children: [i && (0, s.jsx)(r._V, {
                        className: "custom_back_icon",
                        src: a,
                        onClick: l ? function() {
                            return null == l ? void 0 : l()
                        } : function() {
                            o().switchTab({
                                url: c.Fd.Mine
                            })
                        }
                    }), (0, s.jsx)(r.EY, {
                        children: n
                    })]
                })
            }
        },
        7375: function(e, n, t) {
            var r = t(675),
                a = t(467),
                i = t(5544),
                o = t(118),
                c = t(758),
                u = t.n(c),
                s = t(6942),
                l = t.n(s),
                d = t(6540),
                p = t(5879),
                f = t(8724),
                g = t(4747),
                v = t(4848);
            n.A = function(e) {
                var n = e.className,
                    t = e.isLogin,
                    c = void 0 !== t && t,
                    s = e.onSuccess,
                    m = e.onCancel,
                    h = (0, d.useState)(!1),
                    A = (0, i.A)(h, 2),
                    y = A[0],
                    M = A[1],
                    I = (0, d.useState)(""),
                    x = (0, i.A)(I, 2),
                    j = x[0],
                    S = x[1];
                (0, d.useEffect)((function() {
                    j || u().login({
                        success: function(e) {
                            S(e.code), (0, p.wD)(e.code).then((function(e) {
                                console.log("~~~LoginButton~~checkLogin~~~~", e), M(!e), e && w()
                            }))
                        }
                    })
                }), [j]);
                var w = function() {
                        var e = (0, a.A)((0, r.A)().mark((function e() {
                            var n;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, f.E$)();
                                    case 2:
                                        if (n = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        (0, g._b)(n);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    T = function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, i, o;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = n.detail, i = t.errMsg, o = t.code, e.prev = 1, j) {
                                            e.next = 5;
                                            break
                                        }
                                        return u().showToast({
                                            title: "wx.code为空"
                                        }), e.abrupt("return");
                                    case 5:
                                        i.includes("ok") && (u().showLoading({
                                            title: "正在登录"
                                        }), u().login({
                                            success: function() {
                                                var e = (0, a.A)((0, r.A)().mark((function e(n) {
                                                    var t;
                                                    return (0, r.A)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, (0, p.Rf)(n.code, o);
                                                            case 2:
                                                                if (t = e.sent, u().hideLoading(), t) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return u().showToast({
                                                                    title: "登录失败,请重试"
                                                                }), null == m || m(), e.abrupt("return");
                                                            case 8:
                                                                return M(!1), u().showToast({
                                                                    title: "登录成功"
                                                                }), e.next = 12, w();
                                                            case 12:
                                                                null == s || s();
                                                            case 13:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(),
                                            fail: function() {
                                                u().hideLoading(), u().showToast({
                                                    title: "登录失败,请重试"
                                                }), null == m || m()
                                            }
                                        })), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), u().hideLoading(), u().showToast({
                                            title: e.t0.message || e.t0.errMsg
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, v.jsx)(v.Fragment, {
                    children: (0, v.jsx)(o.$n, {
                        className: l()("login-btn", n, (c || !y) && "hidden"),
                        openType: "getPhoneNumber",
                        onGetPhoneNumber: T
                    })
                })
            }
        },
        8816: function(e, n, t) {
            t.d(n, {
                Fd: function() {
                    return r
                },
                N0: function() {
                    return o
                },
                c4: function() {
                    return a
                },
                g5: function() {
                    return i
                }
            });
            var r = function(e) {
                    return e.Home = "/pages/Home/index", e.Mine = "/pages/Mine/index", e.TemplateDetail = "/pages/TemplateDetail/index", e.TaskList = "/pages/TaskList/index", e
                }({}),
                a = Object.values(r).map((function(e) {
                    return e.slice(1)
                })),
                i = function(e) {
                    return e.PaySuccess = "/pagesA/pages/PaySuccess/index", e.VideoShow = "/pagesA/pages/VideoShow/index", e.DocumentShow = "/pagesA/pages/DocumentShow/index", e.SharePage = "/pagesA/pages/SharePage/index", e.CustomWeb = "/pagesA/pages/CustomWeb/index", e.UploadPhoto = "/pagesA/pages/UploadPhoto/index", e.MyCard = "/pagesA/pages/MyCard/index", e.CardCheck = "/pagesA/pages/CardCheck/index", e
                }({}),
                o = Object.values(i).map((function(e) {
                    return e.replace("/pagesA/", "")
                }))
        },
        2950: function(e, n, t) {
            var r = t(675),
                a = t(467),
                i = t(5544),
                o = t(6540),
                c = t(7316),
                u = t(758),
                s = t.n(u),
                l = t(8816),
                d = t(5927),
                p = t(7513);
            n.A = function(e) {
                var n = e.show,
                    t = void 0 === n || n,
                    u = e.isShake,
                    f = void 0 !== u && u,
                    g = e.onSuccess,
                    v = e.onCancel,
                    m = e.details,
                    h = (0, o.useState)(t),
                    A = (0, i.A)(h, 2),
                    y = A[0],
                    M = A[1],
                    I = (0, o.useState)(""),
                    x = (0, i.A)(I, 2),
                    j = x[0],
                    S = x[1],
                    w = (0, o.useState)(!1),
                    T = (0, i.A)(w, 2),
                    k = T[0],
                    N = T[1],
                    b = (0, o.useState)({}),
                    C = (0, i.A)(b, 2),
                    z = C[0],
                    P = C[1];
                (0, o.useEffect)((function() {
                    M(t)
                }), [t]), (0, o.useEffect)((function() {
                    P(m)
                }), [m]), (0, o.useEffect)((function() {
                    N(f)
                }), [f]);
                var D = {
                    cancelClick: function() {
                        M(!1), null == v || v()
                    },
                    clickMakeHandle: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n, t) {
                            var a, i, o, u, f, v, m;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = {}, i = !1, z.payloadSchemas.forEach((function(e, n) {
                                                if (!i) return e.value ? (a[e.payloadKey] = {
                                                    text: e.value
                                                }, void(i = !1)) : (s().showToast({
                                                    title: e.placeholder,
                                                    icon: "error"
                                                }), void(i = !0))
                                            })), !i) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (o = {
                                                fields: a
                                            }, u = {
                                                templateName: z.name || "",
                                                payload: o
                                            }, f = s().getAccountInfoSync().miniProgram.envVersion, (0, c.aR)() && (u.wxMiniProgramOpenLinkInfo = {
                                                path: "pagesA/pages/PaySuccess/index",
                                                query: "",
                                                env_version: f
                                            }), s().showLoading({
                                                title: "加载中..."
                                            }), v = null, "redemption" !== n) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 14, (0, p.kA)(t || "", u).catch((function(e) {
                                            console.log("123", e), s().showToast({
                                                title: "field moderation" === e.errmsg ? "姓名不可用，请重新输入" : e.errmsg,
                                                icon: "none"
                                            })
                                        }));
                                    case 14:
                                        v = e.sent, e.next = 20;
                                        break;
                                    case 17:
                                        return e.next = 19, d.A.getCreateCardApi(u).catch((function(e) {
                                            console.log("123", e), s().showToast({
                                                title: "field moderation" === e.errmsg ? "姓名不可用，请重新输入" : e.errmsg,
                                                icon: "none"
                                            })
                                        }));
                                    case 19:
                                        v = e.sent;
                                    case 20:
                                        if (v) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 22:
                                        if (s().hideLoading(), "pay" !== n) {
                                            e.next = 38;
                                            break
                                        }
                                        if (!v.id) {
                                            e.next = 35;
                                            break
                                        }
                                        if (!(0, c.aR)()) {
                                            e.next = 29;
                                            break
                                        }
                                        null == g || g({
                                            id: v.id
                                        }), e.next = 33;
                                        break;
                                    case 29:
                                        return e.next = 31, d.A.getPayCardApi(v.id);
                                    case 31:
                                        m = e.sent, D.isAndroidPay(m);
                                    case 33:
                                        e.next = 36;
                                        break;
                                    case 35:
                                        s().showToast({
                                            title: "创建任务失败",
                                            icon: "none"
                                        });
                                    case 36:
                                        e.next = 39;
                                        break;
                                    case 38:
                                        s().navigateTo({
                                            url: l.Fd.TaskList
                                        });
                                    case 39:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    isAndroidPay: function(e) {
                        var n, t = ((e || {}).wechatPayInfo || {}).wxPaymentParameters || {},
                            r = t.timeStamp,
                            a = t.nonceStr,
                            i = t.package,
                            o = t.signType,
                            c = t.paySign;
                        s().requestPayment({
                            timeStamp: null === (n = r.toString) || void 0 === n ? void 0 : n.call(r),
                            nonceStr: a,
                            package: i,
                            signType: o,
                            paySign: c,
                            success: function(e) {
                                console.log("支付成功", e), D.androidPaySuccess()
                            },
                            fail: function(e) {
                                console.log("支付失败", e), s().showToast({
                                    title: "支付失败",
                                    icon: "none"
                                })
                            },
                            complete: function(e) {
                                console.log("支付完成", e)
                            }
                        })
                    },
                    androidPaySuccess: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e() {
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        s().getSetting({
                                            withSubscriptions: !0,
                                            success: function(e) {
                                                console.log("Taro.getSettingTaro.getSettingTaro.getSetting"), console.log(e.authSetting), console.log(e.subscriptionsSetting), s().requestSubscribeMessage({
                                                    tmplIds: ["Vta4rZZJ9q9ehnA3D-NE2SKlPoho2bTSIKiXziOTBuU"],
                                                    entityIds: ["Vta4rZZJ9q9ehnA3D-NE2SKlPoho2bTSIKiXziOTBuU"],
                                                    complete: function(e) {
                                                        s().navigateTo({
                                                            url: l.g5.PaySuccess
                                                        })
                                                    }
                                                })
                                            }
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    clickFreeMake: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e() {
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        s().navigateTo({
                                            url: l.Fd.TaskList
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                };
                return {
                    handles: D,
                    isShow: y,
                    setIsShow: M,
                    shake: k,
                    value: j,
                    setValue: S,
                    setShake: N
                }
            }
        },
        5927: function(e, n, t) {
            var r = t(675),
                a = t(467),
                i = t(3029),
                o = t(2901),
                c = t(4467),
                u = t(7513),
                s = t(758),
                l = t.n(s),
                d = t(7813),
                p = (0, o.A)((function e() {
                    (0, i.A)(this, e), (0, c.A)(this, "taskList", []), (0, c.A)(this, "videoTemplateList", []), (0, c.A)(this, "allCards", []), (0, c.A)(this, "cardDetail", {}), (0, d.l_)(this)
                }), [{
                    key: "createTask",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.templateName, a = n.payload, n.text, i = n.onSuccess, o = n.onError, e.next = 3, (0, u.UT)({
                                            templateName: t,
                                            payload: a
                                        }).then((function(e) {
                                            var n, t, r, a, o, c;
                                            l().requestPayment({
                                                timeStamp: null == e || null === (n = e.wxPaymentParameters) || void 0 === n || null === (n = n.timeStamp) || void 0 === n || null === (t = n.toString) || void 0 === t ? void 0 : t.call(n),
                                                nonceStr: null == e || null === (r = e.wxPaymentParameters) || void 0 === r ? void 0 : r.nonceStr,
                                                package: null == e || null === (a = e.wxPaymentParameters) || void 0 === a ? void 0 : a.package,
                                                signType: null == e || null === (o = e.wxPaymentParameters) || void 0 === o ? void 0 : o.signType,
                                                paySign: null == e || null === (c = e.wxPaymentParameters) || void 0 === c ? void 0 : c.paySign,
                                                success: function(e) {
                                                    console.log("支付成功", e), null == i || i()
                                                },
                                                fail: function(e) {
                                                    console.log("支付失败", e), l().showToast({
                                                        title: "支付失败",
                                                        icon: "none"
                                                    })
                                                },
                                                complete: function(e) {
                                                    console.log("支付完成", e)
                                                }
                                            })
                                        })).catch((function(e) {
                                            console.log("创建任务失败", e), null == o || o()
                                        }));
                                    case 3:
                                        e.sent;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "createIosTask",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.templateName, a = n.payload, i = n.onSuccess, o = n.onError, e.next = 3, (0, u.$e)({
                                            templateName: t,
                                            payload: a
                                        }).then((function(e) {
                                            null == i || i(e)
                                        })).catch((function(e) {
                                            console.log("创建任务失败", e), null == o || o()
                                        }));
                                    case 3:
                                        e.sent;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "queryTaskList",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o, c, s = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.offset, a = void 0 === t ? "1" : t, i = n.limit, o = void 0 === i ? 10 : i, e.next = 3, (0, u.u3)({
                                            offset: a,
                                            limit: o
                                        }).catch((function(e) {
                                            console.log("获取任务列表失败", e)
                                        }));
                                    case 3:
                                        return c = e.sent, (0, d.h5)((function() {
                                            c && (s.taskList = c, "0" == a && (s.videoTemplateList = c))
                                        })), e.abrupt("return", c);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setAllCards",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o, c, s = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.offset, a = void 0 === t ? "0" : t, i = n.limit, o = void 0 === i ? 20 : i, e.next = 3, (0, u.J)({
                                            offset: a,
                                            limit: o
                                        }).catch((function(e) {
                                            console.log("获取任务列表失败", e)
                                        }));
                                    case 3:
                                        return c = e.sent, (0, d.h5)((function() {
                                            s.allCards = c
                                        })), e.abrupt("return", c);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setCardDetail",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, u.im)(n);
                                    case 2:
                                        return t = e.sent, (0, d.h5)((function() {
                                            a.cardDetail = t
                                        })), e.abrupt("return", t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getCreateCardApi",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.templateName, a = n.payload, i = n.wxMiniProgramOpenLinkInfo, e.next = 3, (0, u.NG)({
                                            templateName: t,
                                            payload: a,
                                            wxMiniProgramOpenLinkInfo: i
                                        });
                                    case 3:
                                        return o = e.sent, e.abrupt("return", o);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getPayCardApi",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, u.Fs)(n);
                                    case 2:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]);
            n.A = new p
        },
        8428: function(e, n, t) {
            var r = t(675),
                a = t(467),
                i = t(3029),
                o = t(2901),
                c = t(4467),
                u = t(3835),
                s = t(7813),
                l = (0, o.A)((function e() {
                    (0, i.A)(this, e), (0, c.A)(this, "templateGroups", []), (0, c.A)(this, "templates", []), (0, c.A)(this, "promotedTemplates", []), (0, c.A)(this, "navigationThemes", []), (0, c.A)(this, "navigationIps", void 0), (0, c.A)(this, "homeTemplates", []), (0, c.A)(this, "templateDetail", void 0), (0, s.l_)(this)
                }), [{
                    key: "setTemplateGroups",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.theme, a = void 0 === t ? "" : t, e.next = 3, (0, u.sJ)({
                                            theme: a
                                        });
                                    case 3:
                                        i = e.sent, (0, s.h5)((function() {
                                            o.templateGroups = i
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setTemplates",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o, c, l, d, p, f, g = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n.theme, n.ipDisplayName, t = n.groupId, a = void 0 === t ? "" : t, i = n.promoted, o = void 0 !== i && i, c = n.limit, l = void 0 === c ? 20 : c, d = n.offset, p = void 0 === d ? 0 : d, e.next = 3, (0, u.gz)({
                                            templateGroupId: a,
                                            promoted: o,
                                            limit: l,
                                            offset: p
                                        });
                                    case 3:
                                        f = e.sent, (0, s.h5)((function() {
                                            g.templates = f
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setPromotedTemplates",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i, o, c, l, d, p = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.theme, a = void 0 === t ? "" : t, i = n.limit, o = void 0 === i ? 20 : i, c = n.offset, l = void 0 === c ? 0 : c, e.next = 3, (0, u.gz)({
                                            theme: a,
                                            promoted: !0,
                                            limit: o,
                                            offset: l
                                        });
                                    case 3:
                                        d = e.sent, (0, s.h5)((function() {
                                            p.promotedTemplates = d
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setNavigationThemes",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e() {
                            var n, t = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, u.HU)({});
                                    case 2:
                                        return n = e.sent, (0, s.h5)((function() {
                                            t.navigationThemes = n.themes
                                        })), e.abrupt("return", n);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setNavigationIps",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.theme, e.next = 3, (0, u.bF)({
                                            theme: t
                                        });
                                    case 3:
                                        a = e.sent, (0, s.h5)((function() {
                                            i.navigationIps = a.ipNames
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setHomeTemplates",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, u.fS)(n);
                                    case 2:
                                        return t = e.sent, (0, s.h5)((function() {
                                            a.homeTemplates = t
                                        })), e.abrupt("return", t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setTemplateDetail",
                    value: function() {
                        var e = (0, a.A)((0, r.A)().mark((function e(n) {
                            var t, a, i = this;
                            return (0, r.A)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.name, e.next = 3, (0, u.T6)(t);
                                    case 3:
                                        return a = e.sent, (0, s.h5)((function() {
                                            i.templateDetail = a
                                        })), e.abrupt("return", a);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]);
            n.A = new l
        },
        7316: function(e, n, t) {
            t.d(n, {
                Ht: function() {
                    return c
                },
                Qo: function() {
                    return s
                },
                aR: function() {
                    return o
                },
                jl: function() {
                    return u
                },
                qi: function() {
                    return i
                }
            });
            var r = t(758),
                a = t.n(r),
                i = function(e) {
                    var n = a().getCurrentInstance().page;
                    a().getTabBar(n).setState(e)
                },
                o = function() {
                    return "ios" == a().getSystemInfoSync().platform
                },
                c = function() {
                    var e;
                    return "tongdao" == (null === (e = a().getLaunchOptionsSync().query) || void 0 === e ? void 0 : e.startSource)
                },
                u = function() {
                    return !1
                },
                s = function() {
                    return a().getSystemInfoSync().screenWidth >= 768
                }
        },
        9392: function(e) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjY2Mjg3IDQuMzM3MDlDNS4yOTY3NiAzLjk3MDk3IDQuNzAzMTYgMy45NzA5NyA0LjMzNzA1IDQuMzM3MDlDMy45NzA5MyA0LjcwMzIgMy45NzA5MyA1LjI5NjggNC4zMzcwNSA1LjY2MjkxTDguNjc0MTMgMTBMNC4zMzcwNSAxNC4zMzcxQzMuOTcwOTMgMTQuNzAzMiAzLjk3MDkzIDE1LjI5NjggNC4zMzcwNSAxNS42NjI5QzQuNzAzMTYgMTYuMDI5IDUuMjk2NzUgMTYuMDI5IDUuNjYyODcgMTUuNjYyOUw5Ljk5OTk2IDExLjMyNThMMTQuMzM3IDE1LjY2MjlDMTQuNzAzMiAxNi4wMjkgMTUuMjk2OCAxNi4wMjkgMTUuNjYyOSAxNS42NjI5QzE2LjAyOSAxNS4yOTY4IDE2LjAyOSAxNC43MDMyIDE1LjY2MjkgMTQuMzM3MUwxMS4zMjU4IDEwTDE1LjY2MjkgNS42NjI5MUMxNi4wMjkgNS4yOTY4IDE2LjAyOSA0LjcwMzIgMTUuNjYyOSA0LjMzNzA5QzE1LjI5NjggMy45NzA5NyAxNC43MDMyIDMuOTcwOTcgMTQuMzM3IDQuMzM3MDlMOS45OTk5NiA4LjY3NDE3TDUuNjYyODcgNC4zMzcwOVoiIGZpbGw9IiNGN0Y4RkEiLz4KPC9zdmc+Cg=="
        },
        9025: function(e) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkxNjcgMy43NUw2LjI1IDEwLjQxNjdMMTIuOTE2NyAxNy4wODMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
        }
    }
]);