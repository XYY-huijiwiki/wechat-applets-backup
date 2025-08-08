
require("@babel/runtime/helpers/Arrayincludes"), require("@babel/runtime/helpers/Objectvalues"),
    /*! For license information please see common.js.LICENSE.txt */
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        [592], {
            3804: function(t, e, n) {
                n.d(e, {
                    GQ: function() {
                        return l
                    },
                    IU: function() {
                        return u
                    },
                    Nd: function() {
                        return i
                    },
                    R5: function() {
                        return d
                    },
                    Si: function() {
                        return s
                    },
                    XF: function() {
                        return o
                    },
                    ch: function() {
                        return r
                    },
                    d8: function() {
                        return p
                    },
                    in : function() {
                        return c
                    },
                    km: function() {
                        return h
                    },
                    lG: function() {
                        return g
                    },
                    tb: function() {
                        return f
                    },
                    zl: function() {
                        return a
                    }
                });
                var r = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-manager/share-bg.png",
                    o = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/sad_motion.png",
                    i = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-manager/save-icon.svg",
                    s = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-manager/share-icon-green.svg",
                    a = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-chat/pickup.gif",
                    c = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/pre-video.mp4",
                    u = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/create_icon.png",
                    h = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/empty.png",
                    f = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-chat/voice-icon.svg",
                    l = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-chat/voice-play.gif",
                    p = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group-chat/invite-icon.png",
                    d = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/bless-animation-v2.webp",
                    g = "https://virtualhuman-app.oss-cn-beijing.aliyuncs.com/interaction/public/ip-miniprogram/imgs/"
            },
            3931: function(t, e, n) {
                n(5271);
                var r = n(6041),
                    o = n(2752),
                    i = n(4598),
                    s = n(2676),
                    a = (0, o.z)(r.G7)({
                        name: "BtnContainer",
                        class: "b1cb9caz",
                        propsAsIs: !0
                    });
                e.ZP = function(t) {
                    var e = t.disabled,
                        n = t.children,
                        r = t.onClick,
                        o = t.className,
                        c = t.style,
                        u = t.type,
                        h = void 0 === u ? "default" : u,
                        f = (0, i.Z)((function() {
                            null == r || r()
                        }), {
                            wait: 500,
                            leading: !0,
                            trailing: !1
                        }).run;
                    return (0, s.jsx)(a, {
                        className: "".concat(h, " ").concat(null != o ? o : "", " ").concat(e ? "disabled" : ""),
                        style: c,
                        onClick: f,
                        children: n
                    })
                }, n(9814)
            },
            8897: function(t, e, n) {
                n.d(e, {
                    Dt: function() {
                        return h
                    },
                    Gu: function() {
                        return l
                    },
                    UF: function() {
                        return r
                    },
                    Ue: function() {
                        return s
                    },
                    Xq: function() {
                        return f
                    },
                    Y1: function() {
                        return u
                    },
                    il: function() {
                        return c
                    },
                    n9: function() {
                        return i
                    },
                    nj: function() {
                        return a
                    },
                    uU: function() {
                        return o
                    }
                });
                var r = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/close_icon.png",
                    o = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/refresh_disabled_icon.png",
                    i = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/refresh_icon.png",
                    s = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/pink_ball.png",
                    a = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/yellow_ball.png",
                    c = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/purple_ball.png",
                    u = "https://commercial-cdn.xiaoice.com/character-ip/praising-groups-mini-program/group/mock-owner-v2.png",
                    h = "https://commercial-cdn.xiaoice.com/character-ip/character-assets/avatars/huitailang.jpg",
                    f = "https://commercial-cdn.xiaoice.com/character-ip/character-assets/avatars/lanyangyang.jpg",
                    l = "https://commercial-cdn.xiaoice.com/character-ip/character-assets/avatars/xiyangyang.jpg"
            },
            8392: function(t, e, n) {
                var r = n(542),
                    o = n(6041),
                    i = n(6976),
                    s = n.n(i),
                    a = n(5271),
                    c = n(199),
                    u = n(1139),
                    h = n(3452),
                    f = n(3804),
                    l = n(1504),
                    p = n(2676);
                e.Z = function(t) {
                    var e, n = t.handleCancel,
                        d = (0, a.useState)((null === (e = (0, i.getCurrentInstance)().router) || void 0 === e ? void 0 : e.params.roomId) || ""),
                        g = (0, r.Z)(d, 1)[0],
                        v = (0, a.useState)((0, h.gv)()),
                        y = (0, r.Z)(v, 1)[0];
                    (0, i.useShareAppMessage)((function(t) {
                        return (0, l.G3)("share_pv", 1, {
                            tags: {
                                room_id: g
                            }
                        }), "button" === t.from ? {
                            title: "叮咚，你收到一条羊村群聊邀请信息",
                            path: "/".concat(c.iY.Package, "/").concat(c.iY.Group, "?roomId=").concat(g, "&fromUserId=").concat(null == y ? void 0 : y.id),
                            imageUrl: f.ch
                        } : {
                            title: "叮咚，你收到一条羊村群聊邀请信息",
                            path: "/".concat(c.iY.Package, "/").concat(c.iY.Group, "?roomId=").concat(g)
                        }
                    }));
                    return (0, p.jsx)(o.G7, {
                        className: "popup-mask",
                        children: (0, p.jsxs)(o.G7, {
                            className: "popup-container",
                            children: [(0, p.jsxs)(o.G7, {
                                className: "popup-body",
                                children: [(0, p.jsxs)(o.G7, {
                                    className: "content-item",
                                    children: [(0, p.jsx)(o.zx, {
                                        openType: "share",
                                        children: (0, p.jsx)(o.Ee, {
                                            src: f.Si
                                        })
                                    }), "转发到微信"]
                                }), (0, p.jsxs)(o.G7, {
                                    className: "content-item",
                                    onClick: function() {
                                        return (0, l.G3)("save_qr_code_pv", 1, {
                                            tags: {
                                                room_id: g
                                            }
                                        }), void s().request({
                                            url: "".concat(u.v2, "/api/v1/wx-qrcode"),
                                            method: "POST",
                                            responseType: "arraybuffer",
                                            data: {
                                                page: "pages/group/index",
                                                info: {
                                                    roomId: g,
                                                    fromUserId: null == y ? void 0 : y.id
                                                },
                                                env_version: "release" === u.ge ? "release" : "trial"
                                            },
                                            header: {
                                                Authorization: s().getStorageSync("accessToken")
                                            },
                                            success: function(t) {
                                                console.log("/api/v1/wx-qrcode~~~~~~~~~~~", t);
                                                var e = s().arrayBufferToBase64(t.data),
                                                    r = s().getFileSystemManager(),
                                                    o = Math.random(),
                                                    i = s().env.USER_DATA_PATH + "/pic" + o + ".png";
                                                r.writeFile({
                                                    filePath: i,
                                                    data: e,
                                                    encoding: "base64",
                                                    success: function(t) {
                                                        console.log("bbbbb", t), s().saveImageToPhotosAlbum({
                                                            filePath: i,
                                                            success: function() {
                                                                setTimeout((function() {
                                                                    s().showToast({
                                                                        title: "保存成功"
                                                                    }), n()
                                                                }), 100)
                                                            },
                                                            fail: function() {
                                                                setTimeout((function() {
                                                                    s().showToast({
                                                                        title: "保存失败",
                                                                        icon: "none"
                                                                    })
                                                                }), 100)
                                                            },
                                                            complete: function() {
                                                                s().hideLoading()
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    },
                                    children: [(0, p.jsx)(o.Ee, {
                                        src: f.Nd
                                    }), "保存二维码"]
                                })]
                            }), (0, p.jsx)(o.G7, {
                                className: "popup-footer",
                                onClick: n,
                                children: "取消"
                            })]
                        })
                    })
                }
            },
            5575: function(t, e, n) {
                var r = n(542),
                    o = n(2752),
                    i = n(6041),
                    s = n(3804),
                    a = n(5271),
                    c = n(2187),
                    u = n.n(c),
                    h = n(3931),
                    f = n(2676),
                    l = (0, o.z)(i.G7)({
                        name: "Container",
                        class: "cxw1k92",
                        propsAsIs: !0
                    });
                e.Z = function(t) {
                    var e = t.type,
                        n = void 0 === e ? "default" : e,
                        o = t.footer,
                        c = t.okText,
                        p = void 0 === c ? "确认" : c,
                        d = t.cancelText,
                        g = void 0 === d ? "取消" : d,
                        v = t.children,
                        y = t.onCancel,
                        m = t.onOk,
                        b = a.useState(!1),
                        k = (0, r.Z)(b, 2),
                        w = k[0],
                        A = k[1];
                    a.useEffect((function() {
                        setTimeout((function() {
                            A(!0)
                        }), 0)
                    }), []);
                    var _ = function() {
                        A(!1), setTimeout((function() {
                            m && m()
                        }), 200)
                    };
                    return (0, f.jsxs)(l, {
                        className: u()({
                            show: w
                        }),
                        children: [(0, f.jsx)(i.G7, {
                            className: "mask"
                        }), (0, f.jsxs)(i.G7, {
                            className: u()("modal"),
                            children: [(0, f.jsx)(i.Ee, {
                                className: "title_icon",
                                src: s.XF
                            }), (0, f.jsx)(i.G7, {
                                className: "body",
                                children: v
                            }), !1 === o ? null : (0, f.jsx)(i.G7, {
                                className: "footer",
                                children: "confirm" === n ? (0, f.jsx)(h.ZP, {
                                    style: {
                                        background: "rgba(255, 255, 255, 0.20)"
                                    },
                                    onClick: _,
                                    children: "知道了"
                                }) : (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(h.ZP, {
                                        className: "footer-btn",
                                        style: {
                                            background: "rgba(255, 255, 255, 0.20)"
                                        },
                                        onClick: function() {
                                            A(!1), setTimeout((function() {
                                                y && y()
                                            }), 200)
                                        },
                                        children: g
                                    }), (0, f.jsx)(h.ZP, {
                                        type: "primary",
                                        className: "footer-btn",
                                        onClick: _,
                                        children: p
                                    })]
                                })
                            })]
                        })]
                    })
                }, n(960)
            },
            8285: function(t, e, n) {
                n.d(e, {
                    Z: function() {
                        return f
                    }
                });
                var r = n(6041),
                    o = n(6976),
                    i = n.n(o),
                    s = n(199),
                    a = n.p + "assets/imgs/chat_b.svg",
                    c = n(3452),
                    u = n(1598),
                    h = n(2676),
                    f = function(t) {
                        var e = t.page,
                            n = t.handleClick,
                            o = function(t) {
                                var e = i().getCurrentPages(),
                                    r = e.length ? "/" + e[e.length - 1].route : "";
                                console.log(r);
                                var o = "/pages/group/index?tabType=" + t; - 1 == o.indexOf(r) && i().redirectTo({
                                    url: o
                                }), n && n(t)
                            };
                        return (0, h.jsxs)(r.G7, {
                            className: "active_bar  ".concat("blindBox" === e ? "active_bar_bind" : ""),
                            children: [(0, h.jsxs)(r.G7, {
                                className: "active_item ".concat("chat" === e ? "active" : ""),
                                onClick: function() {
                                    return o("chat")
                                },
                                children: [(0, h.jsx)(r.Ee, {
                                    src: "chat" === e ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDNDMy4zNDMxNSAzIDIgNC4zNDMxNSAyIDZWMTZDMiAxNy42NTY5IDMuMzQzMTUgMTkgNSAxOUgxMEwxMS41ODQgMjEuMzc2QzExLjc4MTkgMjEuNjcyOCAxMi4yMTgxIDIxLjY3MjggMTIuNDE2IDIxLjM3NkwxNCAxOUgxOUMyMC42NTY5IDE5IDIyIDE3LjY1NjkgMjIgMTZWNkMyMiA0LjM0MzE1IDIwLjY1NjkgMyAxOSAzSDVaIiBmaWxsPSIjNzM1Q0U2Ii8+CjxjaXJjbGUgY3g9IjciIGN5PSIxMSIgcj0iMS4yNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMS4yNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTciIGN5PSIxMSIgcj0iMS4yNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" : a
                                }), "聊天"]
                            }), (0, h.jsxs)(r.G7, {
                                className: "active_item active_item_row  ".concat("blindBox" === e ? "active" : ""),
                                onClick: function() {
                                    i().redirectTo({
                                        url: s.$D.BlindBox
                                    })
                                },
                                children: [(0, h.jsx)(r.Ee, {
                                    src: "blindBox" === e ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgB7dmxTsJAGAfw/12QGIiGycWlI076BsIbABodldkBVyfr5NrFmThKVHgD4A06GcYyuDgRFWMC9vNK4sbX0kB6Ve83kKb3kd6/d700PcAw/jeBJd0fFE+IpAPQSAiyDx8Gt6usjyKxJCJhq9+COrTUsbPq+iiRI9CuWIWpzDXUlUuquoQkEFwhyVlkdEIDtCtFaypFVx1a0MPL+FSudgYeVxA6hTR3PjC7gU01C7gCNkCrVjyF3s7/sHIyd841sgEEZAMpIYn22Tb+b7SHtAhZPJZeRnUzAXQzAXT79QEyXIMPuoJhRGLfRu9qRRspcvw4sOedZ58BCXGJdLHnnTTLqG4mgG4mgG4mgG5/92101axyBbv1C6zlN+a2f7w846l1A6/bQRyJjcDO0Rnb+UBua3sWMK7EAmTzm5E1k/Er4kosgNu8xlhNE85k/DabQnEl9gwM1dwexpzfi+BHgNBDSqh9BJdrYwP4gvpICSl9diOEDZD11x1S3+ehWdCHsI0ONkC1446+1OaCzhDBtYM+hNUstMkX7BUIEg1VncwXa6Keulb/3f906h1vBMMwjNT6BgxTjtL5qvGSAAAAAElFTkSuQmCC" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHwSURBVHgB7ZlBTgIxFIb/TlAS4wJvMN6AGwgngQ0GccF4AsoJnI2GsJKTADfgBs4NZOViAlNfCZg62s7AwNSEfhto+1L62r9t+As4HOcNQ0EeHoetlRAhdbQEY3z8MpgcMz4LDwVZJ4LTYGr01QcN7NjxWWSuQBDw2meMvhBoMIYGymFBqxPmWR1jAt0u9xOGKUX5sEPkJWiORjzSBRglZHnwEj/xMG2TCnQB2gQ6Xd62PPgd/mWMQNdY0TUwD321nAhMrqsIwpAv1fpOj39sN6UkGr/yWxjIipeyXTFwj6H1PRaBO11/JgnV1UJFgKcHvyHBEwQiQccidTZEFhnxUu+r6s8ZF4bDQ7uJ73tcqGWaqcJ3xj7k/f3C94BtXAK2cQnYppI3MH0q/BechGxzPnvA9k2sw0nINi4B27gEbOMSsM353MRFUTxRnccTHeKVlrYCiieq4yCvtLQEyBqp5QhbYk/K2wNbP0jXnNtXSpHbF4ovcfP2l7F1Ajamsod3tW5vX4jsvJlavojxLDvGiZF2/trDIFW90MVrTyHS7Jw+Grsypd+mWWnTyuCU0FvEb1nQW4EuXrsCJJnQpNkSiUxHqzYBqXdPoGk5ic0Dhykg199E+VawtdvrKAF6zprRc9b8ilQQlnRwOBwOx2F8AUZGus+BiAMPAAAAAElFTkSuQmCC"
                                }), "盲盒日历"]
                            }), !(0, c.gv)() && (0, h.jsx)(u.Z, {
                                handleLoginSuccess: function() {
                                    n && n("chat")
                                }
                            }), (0, h.jsxs)(r.G7, {
                                className: "active_item ".concat("main" === e ? "active" : ""),
                                onClick: function() {
                                    return o("main")
                                },
                                children: [(0, h.jsx)(r.Ee, {
                                    src: "main" === e ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiM3MzVDRTYiLz4KPHBhdGggZD0iTTkgMTZDOS43NDMwNiAxNi42NjUxIDEwLjcyNDMgMTcuMDY5NSAxMS44IDE3LjA2OTVDMTIuODc1NyAxNy4wNjk1IDEzLjg1NjkgMTYuNjY1MSAxNC42IDE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iOSIgc3Ryb2tlPSIjNjY2QTgwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTkgMTZDOS43NDMwNiAxNi42NjUxIDEwLjcyNDMgMTcuMDY5NSAxMS44IDE3LjA2OTVDMTIuODc1NyAxNy4wNjk1IDEzLjg1NjkgMTYuNjY1MSAxNC42IDE2IiBzdHJva2U9IiM2NjZBODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="
                                }), "我的"]
                            })]
                        })
                    }
            },
            1598: function(t, e, n) {
                var r = n(8436),
                    o = n(6557),
                    i = n(542),
                    s = n(6041),
                    a = n(6976),
                    c = n.n(a),
                    u = n(2187),
                    h = n.n(u),
                    f = n(5271),
                    l = n(3452),
                    p = n(1139),
                    d = n(1504),
                    g = n(2676);
                e.Z = function(t) {
                    var e = t.handleLoginSuccess,
                        n = (0, f.useState)(!1),
                        a = (0, i.Z)(n, 2),
                        u = a[0],
                        v = a[1],
                        y = (0, f.useState)(""),
                        m = (0, i.Z)(y, 2),
                        b = m[0],
                        k = m[1];
                    (0, f.useEffect)((function() {
                        b || c().login({
                            success: function(t) {
                                console.log("~~~~~~login~~~~~~~~~in", t), k(t.code), (0, l.Xx)(t.code).then((function(t) {
                                    v(!t), t && w()
                                }))
                            }
                        })
                    }), [b]);
                    var w = function() {
                            var t = (0, o.Z)((0, r.Z)().m((function t() {
                                return (0, r.Z)().w((function(t) {
                                    for (;;) switch (t.n) {
                                        case 0:
                                            (0, p.F7)().then((function(t) {
                                                console.log("getUserAuth", t), null != t && t.id ? (A(null == t ? void 0 : t.id), c().setStorageSync("userAuthInfo", JSON.stringify(t || {}))) : c().setStorageSync("userAuthInfo", JSON.stringify({}))
                                            })).catch((function(t) {
                                                c().setStorageSync("userAuthInfo", JSON.stringify({}))
                                            }));
                                        case 1:
                                            return t.a(2)
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        A = function(t) {
                            (0, d.G3)("login_pv", 1, {
                                userid: t
                            })
                        },
                        _ = function() {
                            var t = (0, o.Z)((0, r.Z)().m((function t() {
                                return (0, r.Z)().w((function(t) {
                                    for (;;) switch (t.n) {
                                        case 0:
                                            c().showLoading({
                                                title: "正在登录"
                                            }), c().login({
                                                success: function() {
                                                    var t = (0, o.Z)((0, r.Z)().m((function t(n) {
                                                        var o;
                                                        return (0, r.Z)().w((function(t) {
                                                            for (;;) switch (t.n) {
                                                                case 0:
                                                                    return t.n = 1, (0, l.PJ)(n.code);
                                                                case 1:
                                                                    if (o = t.v, console.log("loginRes", o), c().hideLoading(), o) {
                                                                        t.n = 2;
                                                                        break
                                                                    }
                                                                    return c().showToast({
                                                                        title: "登录失败,请重试"
                                                                    }), t.a(2);
                                                                case 2:
                                                                    return v(!1), c().showToast({
                                                                        title: "登录成功"
                                                                    }), t.n = 3, w();
                                                                case 3:
                                                                    e();
                                                                case 4:
                                                                    return t.a(2)
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()
                                            });
                                        case 1:
                                            return t.a(2)
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return (0, g.jsx)(g.Fragment, {
                        children: (0, g.jsx)(s.zx, {
                            className: h()("login-btn", !u && "hidden"),
                            onClick: _
                        })
                    })
                }
            },
            220: function(t, e, n) {
                var r = n(542),
                    o = n(6041),
                    i = n(2187),
                    s = n.n(i),
                    a = n(6976),
                    c = n.n(a),
                    u = n(5271),
                    h = n(2676),
                    f = function(t) {
                        var e = t.navigationBarBackgroundColor,
                            n = t.children,
                            i = t.showBack,
                            a = t.showHandle,
                            f = t.showBlindBack,
                            l = t.showEdit,
                            p = void 0 !== l && l,
                            d = t.goBack,
                            g = t.goHandle,
                            v = t.goEdit,
                            y = u.useState((function() {
                                return c().getStorageSync("statusBarHeight") || c().getSystemInfoSync().statusBarHeight
                            })),
                            m = (0, r.Z)(y, 1)[0],
                            b = u.useState((function() {
                                var t = c().getStorageSync("navigationBarHeight");
                                if (t) return t;
                                var e = c().getSystemInfoSync(),
                                    n = e.statusBarHeight,
                                    r = e.platform,
                                    o = c().getMenuButtonBoundingClientRect(),
                                    i = o.top,
                                    s = o.height;
                                return i && 0 !== i && s && 0 !== s ? 2 * (i - n) + s : "android" === r ? 48 : 40
                            })),
                            k = (0, r.Z)(b, 1)[0],
                            w = u.useState((function() {
                                var t;
                                return (null === (t = c().getMenuButtonBoundingClientRect()) || void 0 === t ? void 0 : t.left) || 540 * c().getStorageSync("rpxScale")
                            })),
                            A = (0, r.Z)(w, 1)[0];
                        return (0, h.jsxs)(o.G7, {
                            className: "base-container",
                            id: "custom-navigation",
                            style: {
                                background: e || "transparent"
                            },
                            children: [(0, h.jsx)(o.G7, {
                                style: {
                                    height: m
                                }
                            }), (0, h.jsx)(o.G7, {
                                className: "navigation",
                                style: {
                                    height: k,
                                    width: A
                                },
                                children: (0, h.jsxs)(o.G7, {
                                    className: s()("left-box", (i || f) && "show-back"),
                                    children: [i && (0, h.jsx)(o.G7, {
                                        className: "return",
                                        onClick: function() {
                                            d ? d((function() {
                                                c().navigateBack()
                                            })) : c().navigateBack()
                                        }
                                    }), f && (0, h.jsx)(o.G7, {
                                        className: "return1",
                                        onClick: function() {
                                            d ? d((function() {
                                                c().navigateBack()
                                            })) : c().navigateBack()
                                        }
                                    }), (0, h.jsxs)(o.G7, {
                                        className: s()("navigation-content", (a || p) && "show-handle"),
                                        onClick: function() {
                                            a && g && g(), p && v && v()
                                        },
                                        children: [n, a && (0, h.jsx)(o.G7, {
                                            className: "handle"
                                        }), p && (0, h.jsx)(o.G7, {
                                            className: "edit"
                                        })]
                                    })]
                                })
                            })]
                        })
                    };
                f.defaultProps = {
                    showBack: !1,
                    showHandle: !1
                }, e.Z = f
            },
            199: function(t, e, n) {
                n.d(e, {
                    $D: function() {
                        return i
                    },
                    L1: function() {
                        return o
                    },
                    cx: function() {
                        return s
                    },
                    iY: function() {
                        return r
                    }
                });
                var r = function(t) {
                        return t.Package = "pages", t.Home = "index/index", t.GroupManager = "group-manager/index", t.Group = "group/index", t.GroupChat = "group-chat/index", t
                    }({}),
                    o = ["".concat(r.Package, "/").concat(r.Home), "".concat(r.Package, "/").concat(r.Group), "".concat(r.Package, "/").concat(r.GroupChat), "".concat(r.Package, "/").concat(r.GroupManager)],
                    i = function(t) {
                        return t.PaySuccess = "/pagesA/pages/Pay/index", t.BlindBox = "/pagesA/pages/Blindbox/index", t
                    }({}),
                    s = Object.values(i).map((function(t) {
                        return t.replace("/pagesA/", "")
                    }))
            },
            1139: function(t, e, n) {
                n.d(e, {
                    v2: function() {
                        return p
                    },
                    sm: function() {
                        return b
                    },
                    ge: function() {
                        return l
                    },
                    Yr: function() {
                        return d
                    },
                    g5: function() {
                        return E
                    },
                    tT: function() {
                        return j
                    },
                    zY: function() {
                        return L
                    },
                    vm: function() {
                        return B
                    },
                    Tq: function() {
                        return R
                    },
                    Rb: function() {
                        return _
                    },
                    bY: function() {
                        return O
                    },
                    Nh: function() {
                        return m
                    },
                    A4: function() {
                        return D
                    },
                    Vv: function() {
                        return k
                    },
                    UU: function() {
                        return A
                    },
                    pI: function() {
                        return N
                    },
                    RC: function() {
                        return M
                    },
                    F7: function() {
                        return C
                    },
                    fs: function() {
                        return x
                    },
                    NJ: function() {
                        return v
                    },
                    PH: function() {
                        return T
                    },
                    zG: function() {
                        return S
                    },
                    jQ: function() {
                        return w
                    },
                    Vg: function() {
                        return P
                    },
                    zW: function() {
                        return I
                    }
                });
                var r = n(8436),
                    o = n(6557),
                    i = n(5979),
                    s = n(6976),
                    a = n.n(s),
                    c = n(3452),
                    u = n(5928);
                 function h(t, e, n) {
                    var r = n,
                        o = "GET",
                        s = n.split(" ");
                    return 2 === s.length && (o = s[0], r = s[1]),
                        function(n, s) {
                            n = (0, u.Z)(n);
                            var c = Object.assign({
                                    requestHandler: function(t) {
                                        return (0, i.Z)({}, t)
                                    },
                                    responseHandler: function(t) {
                                        if (t.data) return t.data;
                                        throw new Error("internal error")
                                    },
                                    errorHandler: function(t) {
                                        throw t
                                    }
                                }, e, s),
                                h = c.requestHandler,
                                f = c.responseHandler,
                                l = c.errorHandler,
                                p = function(t, e) {
                                    return t.replace(/\{([^{}]+)\}/g, (function(t, n) {
                                        var r = e[n];
                                        return delete e[n], encodeURIComponent(r)
                                    }))
                                }(r, n),
                                d = Object.assign(t, {
                                    url: p,
                                    data: n,
                                    method: o
                                });
                            return Promise.resolve(h(d)).then((function(t) {
                                return new Promise((function(e, n) {
                                    a().request((0, i.Z)((0, i.Z)({}, t), {}, {
                                        success: e,
                                        fail: n
                                    }))
                                }))
                            })).then(f).catch(l)
                        }
                }
                var f = n(2930),
                    l = a().getAccountInfoSync().miniProgram.envVersion,
                    p = "https://ip.xiaoice.com";
                console.log("baseURL", p);
                var d = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return h.bind(null, t, e)
                    }({}, {
                        requestHandler: function(t) {
                            var e = t.url;
                            /^http(s)?:/.test(e) || (t.url = p + e);
                            var n, r = (0, c.hP)();
                            return r && (t.header = (0, i.Z)((0, i.Z)({}, null !== (n = t.header) && void 0 !== n ? n : {}), {}, {
                                "x-trace-id": (0, f.D)(),
                                Authorization: r
                            })), t
                        },
                        responseHandler: function(t) {
                            var e = null == t ? void 0 : t.data;
                            if (!e) throw new Error("服务器开小差了，请稍后再试~");
                            return "400401" === e.errno && (0, c.MM)(), e
                        },
                        errorHandler: function(t) {
                            throw a().showToast({
                                title: t.message || "服务器开小差了，请稍后再试~",
                                icon: "error"
                            }), t
                        }
                    }),
                    g = function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = t.url;
                        /^http(s)?:/.test(n) || (t.url = p + n);
                        var r, o = a().getStorageSync("accessToken");
                        return o && e && (t.header = (0, i.Z)((0, i.Z)({}, null !== (r = t.header) && void 0 !== r ? r : {}), {}, {
                            authorization: o,
                            "x-trace-id": (0, f.D)()
                        })), new Promise((function(e, n) {
                            a().request((0, i.Z)((0, i.Z)({}, t), {}, {
                                success: function(t) {
                                    if (200 !== t.statusCode) return setTimeout((function() {
                                        a().showToast({
                                            icon: "none",
                                            title: t.data.msg || "请求接口失败",
                                            duration: 1500
                                        })
                                    }), 300), void n(t.data);
                                    e(t.data)
                                },
                                fail: function(t) {
                                    setTimeout((function() {
                                        a().showToast({
                                            icon: "none",
                                            title: (null == t ? void 0 : t.msg) || "请求接口失败",
                                            duration: 1500
                                        })
                                    }), 300), n(t)
                                }
                            }))
                        }))
                    };
                 function v(t) {
                    return y.apply(this, arguments)
                }
                 function y() {
                    return (y = (0, o.Z)((0, r.Z)().m((function t(e) {
                        return (0, r.Z)().w((function(t) {
                            for (;;) switch (t.n) {
                                case 0:
                                    return t.a(2, g({
                                        url: "".concat(p, "/api/v1/ipchat/asr?sample_rate=16k&audio_format=MP3"),
                                        method: "POST",
                                        data: e,
                                        header: {
                                            Authorization: a().getStorageSync("accessToken"),
                                            "Trace-Id": (0, f.D)(),
                                            "content-type": "application/octet-stream"
                                        }
                                    }, !1))
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                var m = d("POST /api/v1/ipchat/characters/{ip_name}/tts"),
                    b = d("POST /api/v1/rooms"),
                    k = d("GET /api/v1/rooms/{room_id}"),
                    w = d("PATCH /api/kuakuaqun/v1/rooms/{room_id}"),
                    A = d("GET /api/v1/rooms/{room_id}/messages"),
                    _ = d("GET /api/v1/rooms/creation-remain-info"),
                    E = d("POST /api/v1/messages/batch-get"),
                    S = d("POST /api/v1/rooms/{room_id}/leave"),
                    T = d("POST /api/v1/rooms/{room_id}/join"),
                    x = (d("POST /api/v1/wx-qrcode"), d("GET /api/v1/wx-qrcode-info/{info_id}")),
                    C = d("GET /api/v1/auth/me"),
                    O = d("GET /api/v1/public-info/rooms/{room_id}"),
                    I = (d("POST /api/v1/auth/me/profile/update-avatar"), d("PATCH /api/v1/auth/me/profile")),
                    N = d("GET /api/calendar/v1/subscription"),
                    j = d("GET /api/calendar/v1/calendars"),
                    P = d("POST /api/calendar/v1/subscription"),
                    B = d("GET /api/calendar/v1/calendars/{calendar_name}/cards"),
                    R = d("GET /api/calendar/v1/calendars/{calendar_name}/common-card"),
                    M = (d("GET /api/kuakuaqun/v1/characters"), d("GET /api/kuakuaqun/v1/themes")),
                    L = (d("GET /api/v1/candidate-characters/list"), d("POST /api/v1/candidate-characters/refresh"), d("GET /api/kuakuaqun/v1/themes/{theme_name}/candidate-characters?refresh={refresh}")),
                    D = d("GET /api/v1/rooms")
            },
            6883: function(t, e, n) {
                n.d(e, {
                    H: function() {
                        return r
                    },
                    x: function() {
                        return o
                    }
                });
                var r = function(t) {
                        var e = {};
                        return t.forEach((function(t) {
                            e[null == t ? void 0 : t.id] = t
                        })), e
                    },
                    o = function(t) {
                        var e = t.characters,
                            n = t.humans,
                            r = t.leftCharacterIds,
                            o = t.leftHumanIds;
                        return {
                            residualCharacters: e.filter((function(t) {
                                return !r.includes(t.id)
                            })),
                            residualHumans: n.filter((function(t) {
                                return !o.includes(t.id)
                            }))
                        }
                    }
            },
            7448: function(t, e, n) {
                t = n.nmd(t);
                var r, o, i, s = n(5392).window,
                    a = n(3195).Blob,
                    c = n(5392).location,
                    u = n(5392).navigator,
                    h = n(8462).default,
                    f = n(4439).default,
                    l = n(8009).default,
                    p = n(7103).default,
                    d = n(7871).default,
                    g = n(5065).default,
                    v = n(342).default,
                    y = n(1501).default,
                    m = n(3990).default;
                ! function(n, s) {
                    "object" == m(e) && "object" == m(t) ? t.exports = s() : (o = [], void 0 === (i = "function" == typeof(r = s) ? r.apply(e, o) : r) || (t.exports = i))
                }(0, (function() {
                    return function(t) {
                        var e = {};
                         function n(r) {
                            if (e[r]) return e[r].exports;
                            var o = e[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                        }
                        return n.m = t, n.c = e, n.d = function(t, e, r) {
                            n.o(t, e) || Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: r
                            })
                        }, n.r = function(t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                        }, n.t = function(t, e) {
                            if (1 & e && (t = n(t)), 8 & e) return t;
                            if (4 & e && "object" == m(t) && t && t.__esModule) return t;
                            var r = Object.create(null);
                            if (n.r(r), Object.defineProperty(r, "default", {
                                    enumerable: !0,
                                    value: t
                                }), 2 & e && "string" != typeof t)
                                for (var o in t) n.d(r, o, function(e) {
                                    return t[e]
                                }.bind(null, o));
                            return r
                        }, n.n = function(t) {
                            var e = t && t.__esModule ? function() {
                                return t.default
                            } : function() {
                                return t
                            };
                            return n.d(e, "a", e), e
                        }, n.o = function(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }, n.p = "", n(n.s = 17)
                    }([function(t, e) {
                        t.exports = function() {
                            return function() {}
                        }
                    }, function(t, e, n) {
                        var r = n(27),
                            o = n(28),
                            i = String.fromCharCode(30);
                        t.exports = {
                            protocol: 4,
                            encodePacket: r,
                            encodePayload: function(t, e) {
                                var n = t.length,
                                    o = new Array(n),
                                    s = 0;
                                t.forEach((function(t, a) {
                                    r(t, !1, (function(t) {
                                        o[a] = t, ++s === n && e(o.join(i))
                                    }))
                                }))
                            },
                            decodePacket: o,
                            decodePayload: function(t, e) {
                                for (var n = t.split(i), r = [], s = 0; s < n.length; s++) {
                                    var a = o(n[s], e);
                                    if (r.push(a), "error" === a.type) break
                                }
                                return r
                            }
                        }
                    }, function(t, e, n) {
                        function r(t) {
                            if (t) return function(t) {
                                for (var e in r.prototype) t[e] = r.prototype[e];
                                return t
                            }(t)
                        }
                        t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
                        }, r.prototype.once = function(t, e) {
                            function n() {
                                this.off(t, n), e.apply(this, arguments)
                            }
                            return n.fn = e, this.on(t, n), this
                        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                            var n, r = this._callbacks["$" + t];
                            if (!r) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                            for (var o = 0; o < r.length; o++)
                                if ((n = r[o]) === e || n.fn === e) {
                                    r.splice(o, 1);
                                    break
                                }
                            return 0 === r.length && delete this._callbacks["$" + t], this
                        }, r.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                            if (n) {
                                r = 0;
                                for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e)
                            }
                            return this
                        }, r.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
                        }, r.prototype.hasListeners = function(t) {
                            return !!this.listeners(t).length
                        }
                    }, function(t, e) {
                        t.exports.pick = function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            return n.reduce((function(e, n) {
                                return t.hasOwnProperty(n) && (e[n] = t[n]), e
                            }), {})
                        }, t.exports.installTimerFunctions = function(t, e) {
                            t.setTimeoutFn = function(t, e) {
                                return setTimeout((function() {
                                    t()
                                }), e)
                            }, t.clearTimeoutFn = function(t) {
                                clearTimeout(t)
                            }
                        }
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
                        var r, o = n(2),
                            i = n(43),
                            s = n(14),
                            a = n(0)("socket.io-parser");
                        e.protocol = 5,
                            function(t) {
                                t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
                            }(r = e.PacketType || (e.PacketType = {})), e.Encoder = y((function t() {
                                v(this, t)
                            }), [{
                                key: "encode",
                                value: function(t) {
                                    return a("encoding packet %j", t), t.type !== r.EVENT && t.type !== r.ACK || !s.hasBinary(t) ? [this.encodeAsString(t)] : (t.type = t.type === r.EVENT ? r.BINARY_EVENT : r.BINARY_ACK, this.encodeAsBinary(t))
                                }
                            }, {
                                key: "encodeAsString",
                                value: function(t) {
                                    var e = "" + t.type;
                                    return t.type !== r.BINARY_EVENT && t.type !== r.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), a("encoded %j as %s", t, e), e
                                }
                            }, {
                                key: "encodeAsBinary",
                                value: function(t) {
                                    var e = i.deconstructPacket(t),
                                        n = this.encodeAsString(e.packet),
                                        r = e.buffers;
                                    return r.unshift(n), r
                                }
                            }]);
                        var c = function(t) {
                            function e() {
                                return v(this, e), p(this, e)
                            }
                            return g(e, t), y(e, [{
                                key: "add",
                                value: function(t) {
                                    var n;
                                    if ("string" == typeof t)(n = this.decodeString(t)).type === r.BINARY_EVENT || n.type === r.BINARY_ACK ? (this.reconstructor = new u(n), 0 === n.attachments && d(e, "emit", this, 3)(["decoded", n])) : d(e, "emit", this, 3)(["decoded", n]);
                                    else {
                                        if (!s.isBinary(t) && !t.base64) throw new Error("Unknown type: " + t);
                                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                        (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, d(e, "emit", this, 3)(["decoded", n]))
                                    }
                                }
                            }, {
                                key: "decodeString",
                                value: function(t) {
                                    var n = 0,
                                        o = {
                                            type: Number(t.charAt(0))
                                        };
                                    if (void 0 === r[o.type]) throw new Error("unknown packet type " + o.type);
                                    if (o.type === r.BINARY_EVENT || o.type === r.BINARY_ACK) {
                                        for (var i = n + 1;
                                            "-" !== t.charAt(++n) && n != t.length;);
                                        var s = t.substring(i, n);
                                        if (s != Number(s) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                                        o.attachments = Number(s)
                                    }
                                    if ("/" === t.charAt(n + 1)) {
                                        for (var c = n + 1; ++n && "," !== t.charAt(n) && n !== t.length;);
                                        o.nsp = t.substring(c, n)
                                    } else o.nsp = "/";
                                    var u = t.charAt(n + 1);
                                    if ("" !== u && Number(u) == u) {
                                        for (var h = n + 1; ++n;) {
                                            var f = t.charAt(n);
                                            if (null == f || Number(f) != f) {
                                                --n;
                                                break
                                            }
                                            if (n === t.length) break
                                        }
                                        o.id = Number(t.substring(h, n + 1))
                                    }
                                    if (t.charAt(++n)) {
                                        var l = function(t) {
                                            try {
                                                return JSON.parse(t)
                                            } catch (t) {
                                                return !1
                                            }
                                        }(t.substr(n));
                                        if (!e.isPayloadValid(o.type, l)) throw new Error("invalid payload");
                                        o.data = l
                                    }
                                    return a("decoded %s as %j", t, o), o
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.reconstructor && this.reconstructor.finishedReconstruction()
                                }
                            }], [{
                                key: "isPayloadValid",
                                value: function(t, e) {
                                    switch (t) {
                                        case r.CONNECT:
                                            return "object" == m(e);
                                        case r.DISCONNECT:
                                            return void 0 === e;
                                        case r.CONNECT_ERROR:
                                            return "string" == typeof e || "object" == m(e);
                                        case r.EVENT:
                                        case r.BINARY_EVENT:
                                            return Array.isArray(e) && e.length > 0;
                                        case r.ACK:
                                        case r.BINARY_ACK:
                                            return Array.isArray(e)
                                    }
                                }
                            }])
                        }(o);
                        e.Decoder = c;
                        var u = y((function t(e) {
                            v(this, t), this.packet = e, this.buffers = [], this.reconPack = e
                        }), [{
                            key: "takeBinaryData",
                            value: function(t) {
                                if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                                    var e = i.reconstructPacket(this.reconPack, this.buffers);
                                    return this.finishedReconstruction(), e
                                }
                                return null
                            }
                        }, {
                            key: "finishedReconstruction",
                            value: function() {
                                this.reconPack = null, this.buffers = []
                            }
                        }])
                    }, function(t, e) {
                        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        t.exports = function(t) {
                            var e = t,
                                o = t.indexOf("["),
                                i = t.indexOf("]"); - 1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                            for (var s, a, c = n.exec(t || ""), u = {}, h = 14; h--;) u[r[h]] = c[h] || "";
                            return -1 != o && -1 != i && (u.source = e, u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"), u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), u.ipv6uri = !0), u.pathNames = function(t, e) {
                                var n = e.replace(/\/{2,9}/g, "/").split("/");
                                return "/" != e.substr(0, 1) && 0 !== e.length || n.splice(0, 1), "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1), n
                            }(0, u.path), u.queryKey = (s = u.query, a = {}, s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, n) {
                                e && (a[e] = n)
                            })), a), u
                        }
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.Manager = void 0;
                        var r = n(20),
                            o = n(12),
                            i = n(13),
                            s = n(4),
                            a = n(15),
                            c = n(44),
                            u = n(16),
                            h = n(0)("socket.io-client:manager"),
                            f = function(t) {
                                function e(t, n) {
                                    var r, i;
                                    v(this, e), (r = p(this, e)).nsps = {}, r.subs = [], t && "object" == m(t) && (n = t, t = void 0), (n = n || {}).path = n.path || "/socket.io", r.opts = n, (0, o.installTimerFunctions)(l(r), n), r.reconnection(!1 !== n.reconnection), r.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), r.reconnectionDelay(n.reconnectionDelay || 1e3), r.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), r.randomizationFactor(null !== (i = n.randomizationFactor) && void 0 !== i ? i : .5), r.backoff = new c({
                                        min: r.reconnectionDelay(),
                                        max: r.reconnectionDelayMax(),
                                        jitter: r.randomizationFactor()
                                    }), r.timeout(null == n.timeout ? 2e4 : n.timeout), r._readyState = "closed", r.uri = t;
                                    var a = n.parser || s;
                                    return r.encoder = new a.Encoder, r.decoder = new a.Decoder, r._autoConnect = !1 !== n.autoConnect, r._autoConnect && r.open(), r
                                }
                                return g(e, t), y(e, [{
                                    key: "reconnection",
                                    value: function(t) {
                                        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
                                    }
                                }, {
                                    key: "reconnectionAttempts",
                                    value: function(t) {
                                        return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                                    }
                                }, {
                                    key: "reconnectionDelay",
                                    value: function(t) {
                                        var e;
                                        return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this)
                                    }
                                }, {
                                    key: "randomizationFactor",
                                    value: function(t) {
                                        var e;
                                        return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this)
                                    }
                                }, {
                                    key: "reconnectionDelayMax",
                                    value: function(t) {
                                        var e;
                                        return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this)
                                    }
                                }, {
                                    key: "timeout",
                                    value: function(t) {
                                        return arguments.length ? (this._timeout = t, this) : this._timeout
                                    }
                                }, {
                                    key: "maybeReconnectOnOpen",
                                    value: function() {
                                        !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                                    }
                                }, {
                                    key: "open",
                                    value: function(t) {
                                        var e = this;
                                        if (h("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
                                        h("opening %s", this.uri), this.engine = r(this.uri, this.opts);
                                        var n = this.engine,
                                            o = this;
                                        this._readyState = "opening", this.skipReconnect = !1;
                                        var i = (0, a.on)(n, "open", (function() {
                                                o.onopen(), t && t()
                                            })),
                                            s = (0, a.on)(n, "error", (function(n) {
                                                h("error"), o.cleanup(), o._readyState = "closed", e.emitReserved("error", n), t ? t(n) : o.maybeReconnectOnOpen()
                                            }));
                                        if (!1 !== this._timeout) {
                                            var c = this._timeout;
                                            h("connect attempt will timeout after %d", c), 0 === c && i();
                                            var u = this.setTimeoutFn((function() {
                                                h("connect attempt timed out after %d", c), i(), n.close(), n.emit("error", new Error("timeout"))
                                            }), c);
                                            this.opts.autoUnref && u.unref(), this.subs.push((function() {
                                                clearTimeout(u)
                                            }))
                                        }
                                        return this.subs.push(i), this.subs.push(s), this
                                    }
                                }, {
                                    key: "connect",
                                    value: function(t) {
                                        return this.open(t)
                                    }
                                }, {
                                    key: "onopen",
                                    value: function() {
                                        h("open"), this.cleanup(), this._readyState = "open", this.emitReserved("open");
                                        var t = this.engine;
                                        this.subs.push((0, a.on)(t, "ping", this.onping.bind(this)), (0, a.on)(t, "data", this.ondata.bind(this)), (0, a.on)(t, "error", this.onerror.bind(this)), (0, a.on)(t, "close", this.onclose.bind(this)), (0, a.on)(this.decoder, "decoded", this.ondecoded.bind(this)))
                                    }
                                }, {
                                    key: "onping",
                                    value: function() {
                                        this.emitReserved("ping")
                                    }
                                }, {
                                    key: "ondata",
                                    value: function(t) {
                                        this.decoder.add(t)
                                    }
                                }, {
                                    key: "ondecoded",
                                    value: function(t) {
                                        this.emitReserved("packet", t)
                                    }
                                }, {
                                    key: "onerror",
                                    value: function(t) {
                                        h("error", t), this.emitReserved("error", t)
                                    }
                                }, {
                                    key: "socket",
                                    value: function(t, e) {
                                        var n = this.nsps[t];
                                        return n || (n = new i.Socket(this, t, e), this.nsps[t] = n), n
                                    }
                                }, {
                                    key: "_destroy",
                                    value: function(t) {
                                        for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) {
                                            var r = n[e];
                                            if (this.nsps[r].active) return void h("socket %s is still active, skipping close", r)
                                        }
                                        this._close()
                                    }
                                }, {
                                    key: "_packet",
                                    value: function(t) {
                                        h("writing packet %j", t);
                                        for (var e = this.encoder.encode(t), n = 0; n < e.length; n++) this.engine.write(e[n], t.options)
                                    }
                                }, {
                                    key: "cleanup",
                                    value: function() {
                                        h("cleanup"), this.subs.forEach((function(t) {
                                            return t()
                                        })), this.subs.length = 0, this.decoder.destroy()
                                    }
                                }, {
                                    key: "_close",
                                    value: function() {
                                        h("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
                                    }
                                }, {
                                    key: "disconnect",
                                    value: function() {
                                        return this._close()
                                    }
                                }, {
                                    key: "onclose",
                                    value: function(t) {
                                        h("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
                                    }
                                }, {
                                    key: "reconnect",
                                    value: function() {
                                        var t = this;
                                        if (this._reconnecting || this.skipReconnect) return this;
                                        var e = this;
                                        if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                                        else {
                                            var n = this.backoff.duration();
                                            h("will wait %dms before reconnect attempt", n), this._reconnecting = !0;
                                            var r = this.setTimeoutFn((function() {
                                                e.skipReconnect || (h("attempting reconnect"), t.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((function(n) {
                                                    n ? (h("reconnect attempt error"), e._reconnecting = !1, e.reconnect(), t.emitReserved("reconnect_error", n)) : (h("reconnect success"), e.onreconnect())
                                                })))
                                            }), n);
                                            this.opts.autoUnref && r.unref(), this.subs.push((function() {
                                                clearTimeout(r)
                                            }))
                                        }
                                    }
                                }, {
                                    key: "onreconnect",
                                    value: function() {
                                        var t = this.backoff.attempts;
                                        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
                                    }
                                }])
                            }(u.StrictEventEmitter);
                        e.Manager = f
                    }, function(t, e, n) {
                        var r = n(22);
                        e.websocket = r
                    }, function(t, e) {
                        var n;
                        n = function() {
                            return this
                        }();
                        try {
                            n = n || new Function("return this")()
                        } catch (t) {
                            "object" == (void 0 === s ? "undefined" : m(s)) && (n = s)
                        }
                        t.exports = n
                    }, function(t, e, n) {
                        var r = n(1),
                            o = n(2),
                            i = n(3).installTimerFunctions,
                            s = n(0)("engine.io-client:transport");
                        t.exports = function(t) {
                            function e(t) {
                                var n;
                                return v(this, e), n = p(this, e), i(l(n), t), n.opts = t, n.query = t.query, n.readyState = "", n.socket = t.socket, n
                            }
                            return g(e, t), y(e, [{
                                key: "onError",
                                value: function(t, e) {
                                    var n = new Error(t);
                                    return n.type = "TransportError", n.description = e, this.emit("error", n), this
                                }
                            }, {
                                key: "open",
                                value: function() {
                                    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                                }
                            }, {
                                key: "close",
                                value: function() {
                                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                                }
                            }, {
                                key: "send",
                                value: function(t) {
                                    "open" === this.readyState ? this.write(t) : s("transport is not open, discarding packets")
                                }
                            }, {
                                key: "onOpen",
                                value: function() {
                                    this.readyState = "open", this.writable = !0, this.emit("open")
                                }
                            }, {
                                key: "onData",
                                value: function(t) {
                                    var e = r.decodePacket(t, this.socket.binaryType);
                                    this.onPacket(e)
                                }
                            }, {
                                key: "onPacket",
                                value: function(t) {
                                    this.emit("packet", t)
                                }
                            }, {
                                key: "onClose",
                                value: function() {
                                    this.readyState = "closed", this.emit("close")
                                }
                            }])
                        }(o)
                    }, function(t, e) {
                        var n = Object.create(null);
                        n.open = "0", n.close = "1", n.ping = "2", n.pong = "3", n.message = "4", n.upgrade = "5", n.noop = "6";
                        var r = Object.create(null);
                        Object.keys(n).forEach((function(t) {
                            r[n[t]] = t
                        })), t.exports = {
                            PACKET_TYPES: n,
                            PACKET_TYPES_REVERSE: r,
                            ERROR_PACKET: {
                                type: "error",
                                data: "parser error"
                            }
                        }
                    }, function(t, e) {
                        e.encode = function(t) {
                            var e = "";
                            for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                            return e
                        }, e.decode = function(t) {
                            for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                                var i = n[r].split("=");
                                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                            }
                            return e
                        }
                    }, function(t, e, n) {
                        var r = n(31);
                        t.exports.pick = function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            return n.reduce((function(e, n) {
                                return t.hasOwnProperty(n) && (e[n] = t[n]), e
                            }), {})
                        };
                        var o = setTimeout,
                            i = clearTimeout;
                        t.exports.installTimerFunctions = function(t, e) {
                            e.useNativeTimers ? (t.setTimeoutFn = o.bind(r), t.clearTimeoutFn = i.bind(r)) : (t.setTimeoutFn = setTimeout.bind(r), t.clearTimeoutFn = clearTimeout.bind(r))
                        }
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.Socket = void 0;
                        var r = n(4),
                            o = n(15),
                            i = n(16),
                            s = n(0)("socket.io-client:socket"),
                            a = Object.freeze({
                                connect: 1,
                                connect_error: 1,
                                disconnect: 1,
                                disconnecting: 1,
                                newListener: 1,
                                removeListener: 1
                            }),
                            c = function(t) {
                                function e(t, n, r) {
                                    var o;
                                    return v(this, e), (o = p(this, e)).connected = !1, o.disconnected = !0, o.receiveBuffer = [], o.sendBuffer = [], o.ids = 0, o.acks = {}, o.flags = {}, o.io = t, o.nsp = n, r && r.auth && (o.auth = r.auth), o.io._autoConnect && o.open(), o
                                }
                                return g(e, t), y(e, [{
                                    key: "subEvents",
                                    value: function() {
                                        if (!this.subs) {
                                            var t = this.io;
                                            this.subs = [(0, o.on)(t, "open", this.onopen.bind(this)), (0, o.on)(t, "packet", this.onpacket.bind(this)), (0, o.on)(t, "error", this.onerror.bind(this)), (0, o.on)(t, "close", this.onclose.bind(this))]
                                        }
                                    }
                                }, {
                                    key: "active",
                                    get: function() {
                                        return !!this.subs
                                    }
                                }, {
                                    key: "connect",
                                    value: function() {
                                        return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                                    }
                                }, {
                                    key: "open",
                                    value: function() {
                                        return this.connect()
                                    }
                                }, {
                                    key: "send",
                                    value: function() {
                                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                        return e.unshift("message"), this.emit.apply(this, e), this
                                    }
                                }, {
                                    key: "emit",
                                    value: function(t) {
                                        if (a.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                                        n.unshift(t);
                                        var i = {
                                            type: r.PacketType.EVENT,
                                            data: n,
                                            options: {}
                                        };
                                        i.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1] && (s("emitting packet with ack id %d", this.ids), this.acks[this.ids] = n.pop(), i.id = this.ids++);
                                        var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                        return !this.flags.volatile || c && this.connected ? this.connected ? this.packet(i) : this.sendBuffer.push(i) : s("discard packet as the transport is not currently writable"), this.flags = {}, this
                                    }
                                }, {
                                    key: "packet",
                                    value: function(t) {
                                        t.nsp = this.nsp, this.io._packet(t)
                                    }
                                }, {
                                    key: "onopen",
                                    value: function() {
                                        var t = this;
                                        s("transport is open - connecting"), "function" == typeof this.auth ? this.auth((function(e) {
                                            t.packet({
                                                type: r.PacketType.CONNECT,
                                                data: e
                                            })
                                        })) : this.packet({
                                            type: r.PacketType.CONNECT,
                                            data: this.auth
                                        })
                                    }
                                }, {
                                    key: "onerror",
                                    value: function(t) {
                                        this.connected || this.emitReserved("connect_error", t)
                                    }
                                }, {
                                    key: "onclose",
                                    value: function(t) {
                                        s("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", t)
                                    }
                                }, {
                                    key: "onpacket",
                                    value: function(t) {
                                        if (t.nsp === this.nsp) switch (t.type) {
                                            case r.PacketType.CONNECT:
                                                if (t.data && t.data.sid) {
                                                    var e = t.data.sid;
                                                    this.onconnect(e)
                                                } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                                break;
                                            case r.PacketType.EVENT:
                                            case r.PacketType.BINARY_EVENT:
                                                this.onevent(t);
                                                break;
                                            case r.PacketType.ACK:
                                            case r.PacketType.BINARY_ACK:
                                                this.onack(t);
                                                break;
                                            case r.PacketType.DISCONNECT:
                                                this.ondisconnect();
                                                break;
                                            case r.PacketType.CONNECT_ERROR:
                                                var n = new Error(t.data.message);
                                                n.data = t.data.data, this.emitReserved("connect_error", n)
                                        }
                                    }
                                }, {
                                    key: "onevent",
                                    value: function(t) {
                                        var e = t.data || [];
                                        s("emitting event %j", e), null != t.id && (s("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
                                    }
                                }, {
                                    key: "emitEvent",
                                    value: function(t) {
                                        if (this._anyListeners && this._anyListeners.length) {
                                            var n, r = this._anyListeners.slice(),
                                                o = f(r);
                                            try {
                                                for (o.s(); !(n = o.n()).done;) {
                                                    n.value.apply(this, t)
                                                }
                                            } catch (t) {
                                                o.e(t)
                                            } finally {
                                                o.f()
                                            }
                                        }
                                        d(e, "emit", this, 1).apply(this, t)
                                    }
                                }, {
                                    key: "ack",
                                    value: function(t) {
                                        var e = this,
                                            n = !1;
                                        return function() {
                                            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                                            n || (n = !0, s("sending ack %j", i), e.packet({
                                                type: r.PacketType.ACK,
                                                id: t,
                                                data: i
                                            }))
                                        }
                                    }
                                }, {
                                    key: "onack",
                                    value: function(t) {
                                        var e = this.acks[t.id];
                                        "function" == typeof e ? (s("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : s("bad ack %s", t.id)
                                    }
                                }, {
                                    key: "onconnect",
                                    value: function(t) {
                                        s("socket connected with id %s", t), this.id = t, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                                    }
                                }, {
                                    key: "emitBuffered",
                                    value: function() {
                                        var t = this;
                                        this.receiveBuffer.forEach((function(e) {
                                            return t.emitEvent(e)
                                        })), this.receiveBuffer = [], this.sendBuffer.forEach((function(e) {
                                            return t.packet(e)
                                        })), this.sendBuffer = []
                                    }
                                }, {
                                    key: "ondisconnect",
                                    value: function() {
                                        s("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.subs && (this.subs.forEach((function(t) {
                                            return t()
                                        })), this.subs = void 0), this.io._destroy(this)
                                    }
                                }, {
                                    key: "disconnect",
                                    value: function() {
                                        return this.connected && (s("performing disconnect (%s)", this.nsp), this.packet({
                                            type: r.PacketType.DISCONNECT
                                        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                                    }
                                }, {
                                    key: "close",
                                    value: function() {
                                        return this.disconnect()
                                    }
                                }, {
                                    key: "compress",
                                    value: function(t) {
                                        return this.flags.compress = t, this
                                    }
                                }, {
                                    key: "volatile",
                                    get: function() {
                                        return this.flags.volatile = !0, this
                                    }
                                }, {
                                    key: "onAny",
                                    value: function(t) {
                                        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                                    }
                                }, {
                                    key: "prependAny",
                                    value: function(t) {
                                        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                                    }
                                }, {
                                    key: "offAny",
                                    value: function(t) {
                                        if (!this._anyListeners) return this;
                                        if (t) {
                                            for (var e = this._anyListeners, n = 0; n < e.length; n++)
                                                if (t === e[n]) return e.splice(n, 1), this
                                        } else this._anyListeners = [];
                                        return this
                                    }
                                }, {
                                    key: "listenersAny",
                                    value: function() {
                                        return this._anyListeners || []
                                    }
                                }])
                            }(i.StrictEventEmitter);
                        e.Socket = c
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.hasBinary = e.isBinary = void 0;
                        var r = "function" == typeof ArrayBuffer,
                            o = Object.prototype.toString,
                            i = "function" == typeof a || void 0 !== a && "[object BlobConstructor]" === o.call(a),
                            s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
                         function c(t) {
                            return r && (t instanceof ArrayBuffer || function(t) {
                                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
                            }(t)) || i && t instanceof a || s && t instanceof File
                        }
                        e.isBinary = c, e.hasBinary = function t(e, n) {
                            if (!e || "object" != m(e)) return !1;
                            if (Array.isArray(e)) {
                                for (var r = 0, o = e.length; r < o; r++)
                                    if (t(e[r])) return !0;
                                return !1
                            }
                            if (c(e)) return !0;
                            if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i) && t(e[i])) return !0;
                            return !1
                        }
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.on = void 0, e.on = function(t, e, n) {
                            return t.on(e, n),
                                function() {
                                    t.off(e, n)
                                }
                        }
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.StrictEventEmitter = void 0;
                        var r = n(2);
                        e.StrictEventEmitter = function(t) {
                            function e() {
                                return v(this, e), p(this, e, arguments)
                            }
                            return g(e, t), y(e, [{
                                key: "on",
                                value: function(t, n) {
                                    return d(e, "on", this, 3)([t, n]), this
                                }
                            }, {
                                key: "once",
                                value: function(t, n) {
                                    return d(e, "once", this, 3)([t, n]), this
                                }
                            }, {
                                key: "emit",
                                value: function(t) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    return d(e, "emit", this, 3)([t].concat(r)), this
                                }
                            }, {
                                key: "emitReserved",
                                value: function(t) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    return d(e, "emit", this, 3)([t].concat(r)), this
                                }
                            }, {
                                key: "listeners",
                                value: function(t) {
                                    return d(e, "listeners", this, 3)([t])
                                }
                            }])
                        }(r)
                    }, function(t, e, n) {
                        t.exports = n(18)
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.io = e.Socket = e.Manager = e.protocol = void 0;
                        var r = n(19),
                            o = n(6),
                            i = n(0)("socket.io-client");
                        t.exports = e = a;
                        var s = e.managers = {};
                         function a(t, e) {
                            "object" == m(t) && (e = t, t = void 0), e = e || {};
                            var n, a = (0, r.url)(t, e.path || "/socket.io"),
                                c = a.source,
                                u = a.id,
                                h = a.path,
                                f = s[u] && h in s[u].nsps;
                            return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (i("ignoring socket cache for %s", c), n = new o.Manager(c, e)) : (s[u] || (i("new io instance for %s", c), s[u] = new o.Manager(c, e)), n = s[u]), a.query && !e.query && (e.query = a.queryKey), n.socket(a.path, e)
                        }
                        e.io = a;
                        var c = n(4);
                        Object.defineProperty(e, "protocol", {
                            enumerable: !0,
                            get: function() {
                                return c.protocol
                            }
                        }), e.connect = a;
                        var u = n(6);
                        Object.defineProperty(e, "Manager", {
                            enumerable: !0,
                            get: function() {
                                return u.Manager
                            }
                        });
                        var h = n(13);
                        Object.defineProperty(e, "Socket", {
                            enumerable: !0,
                            get: function() {
                                return h.Socket
                            }
                        }), e.default = a
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.url = void 0;
                        var r = n(5),
                            o = n(0)("socket.io-client:url");
                        e.url = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                i = t;
                            n = n || void 0 !== c && c, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), o("parse %s", t), i = r(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
                            var s = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
                            return i.id = i.protocol + "://" + s + ":" + i.port + e, i.href = i.protocol + "://" + s + (n && n.port === i.port ? "" : ":" + i.port), i
                        }
                    }, function(t, e, n) {
                        var r = n(21);
                        t.exports = function(t, e) {
                            return new r(t, e)
                        }, t.exports.Socket = r, t.exports.protocol = r.protocol, t.exports.Transport = n(9), t.exports.transports = n(7), t.exports.parser = n(1)
                    }, function(t, e, n) {
                        var r = n(7),
                            o = n(2),
                            i = n(0)("engine.io-client:socket"),
                            s = n(1),
                            a = n(5),
                            u = n(11),
                            h = n(3).installTimerFunctions,
                            f = function(t) {
                                function e(t) {
                                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return v(this, e), n = p(this, e), t && "object" == m(t) && (r = t, t = null), t ? (t = a(t), r.hostname = t.host, r.secure = "https" === t.protocol || "wss" === t.protocol, r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = a(r.host).host), h(l(n), r), n.secure = null != r.secure ? r.secure : void 0 !== c && "https:" === c.protocol, r.hostname && !r.port && (r.port = n.secure ? "443" : "80"), n.hostname = r.hostname || (void 0 !== c ? c.hostname : "localhost"), n.port = r.port || (void 0 !== c && c.port ? c.port : n.secure ? 443 : 80), n.transports = r.transports || ["polling", "websocket"], n.readyState = "", n.writeBuffer = [], n.prevBufferLen = 0, n.opts = Object.assign({
                                        path: "/engine.io",
                                        agent: !1,
                                        withCredentials: !1,
                                        upgrade: !0,
                                        jsonp: !0,
                                        timestampParam: "t",
                                        rememberUpgrade: !1,
                                        rejectUnauthorized: !0,
                                        perMessageDeflate: {
                                            threshold: 1024
                                        },
                                        transportOptions: {},
                                        closeOnBeforeunload: !0
                                    }, r), n.opts.path = n.opts.path.replace(/\/$/, "") + "/", "string" == typeof n.opts.query && (n.opts.query = u.decode(n.opts.query)), n.id = null, n.upgrades = null, n.pingInterval = null, n.pingTimeout = null, n.pingTimeoutTimer = null, "function" == typeof addEventListener && (n.opts.closeOnBeforeunload && addEventListener("beforeunload", (function() {
                                        n.transport && (n.transport.removeAllListeners(), n.transport.close())
                                    }), !1), "localhost" !== n.hostname && (n.offlineEventListener = function() {
                                        n.onClose("transport close")
                                    }, addEventListener("offline", n.offlineEventListener, !1))), n.open(), n
                                }
                                return g(e, t), y(e, [{
                                    key: "createTransport",
                                    value: function(t) {
                                        i('creating transport "%s"', t);
                                        var e = function(t) {
                                            var e = {};
                                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                            return e
                                        }(this.opts.query);
                                        e.EIO = s.protocol, e.transport = t, this.id && (e.sid = this.id);
                                        var n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
                                            query: e,
                                            socket: this,
                                            hostname: this.hostname,
                                            secure: this.secure,
                                            port: this.port
                                        });
                                        return i("options: %j", n), new r[t](n)
                                    }
                                }, {
                                    key: "open",
                                    value: function() {
                                        var t, n = this;
                                        if (this.opts.rememberUpgrade && e.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                        else {
                                            if (0 === this.transports.length) return void this.setTimeoutFn((function() {
                                                n.emit("error", "No transports available")
                                            }), 0);
                                            t = this.transports[0]
                                        }
                                        this.readyState = "opening";
                                        try {
                                            t = this.createTransport(t)
                                        } catch (t) {
                                            return i("error while creating transport: %s", t), this.transports.shift(), void this.open()
                                        }
                                        t.open(), this.setTransport(t)
                                    }
                                }, {
                                    key: "setTransport",
                                    value: function(t) {
                                        var e = this;
                                        i("setting transport %s", t.name), this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function() {
                                            e.onClose("transport close")
                                        }))
                                    }
                                }, {
                                    key: "probe",
                                    value: function(t) {
                                        var n = this;
                                        i('probing transport "%s"', t);
                                        var r = this.createTransport(t, {
                                                probe: 1
                                            }),
                                            o = !1;
                                        e.priorWebsocketSuccess = !1;
                                        var s = function() {
                                            o || (i('probe transport "%s" opened', t), r.send([{
                                                type: "ping",
                                                data: "probe"
                                            }]), r.once("packet", (function(s) {
                                                if (!o)
                                                    if ("pong" === s.type && "probe" === s.data) {
                                                        if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", r), !r) return;
                                                        e.priorWebsocketSuccess = "websocket" === r.name, i('pausing current transport "%s"', n.transport.name), n.transport.pause((function() {
                                                            o || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), l(), n.setTransport(r), r.send([{
                                                                type: "upgrade"
                                                            }]), n.emit("upgrade", r), r = null, n.upgrading = !1, n.flush())
                                                        }))
                                                    } else {
                                                        i('probe transport "%s" failed', t);
                                                        var a = new Error("probe error");
                                                        a.transport = r.name, n.emit("upgradeError", a)
                                                    }
                                            })))
                                        };
                                         function a() {
                                            o || (o = !0, l(), r.close(), r = null)
                                        }
                                        var c = function(e) {
                                            var o = new Error("probe error: " + e);
                                            o.transport = r.name, a(), i('probe transport "%s" failed because of error: %s', t, e), n.emit("upgradeError", o)
                                        };
                                         function u() {
                                            c("transport closed")
                                        }
                                         function h() {
                                            c("socket closed")
                                        }
                                         function f(t) {
                                            r && t.name !== r.name && (i('"%s" works - aborting "%s"', t.name, r.name), a())
                                        }
                                        var l = function() {
                                            r.removeListener("open", s), r.removeListener("error", c), r.removeListener("close", u), n.removeListener("close", h), n.removeListener("upgrading", f)
                                        };
                                        r.once("open", s), r.once("error", c), r.once("close", u), this.once("close", h), this.once("upgrading", f), r.open()
                                    }
                                }, {
                                    key: "onOpen",
                                    value: function() {
                                        if (i("socket open"), this.readyState = "open", e.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
                                            i("starting upgrade probes");
                                            for (var t = 0, n = this.upgrades.length; t < n; t++) this.probe(this.upgrades[t])
                                        }
                                    }
                                }, {
                                    key: "onPacket",
                                    value: function(t) {
                                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                                            case "open":
                                                this.onHandshake(JSON.parse(t.data));
                                                break;
                                            case "ping":
                                                this.resetPingTimeout(), this.sendPacket("pong"), this.emit("ping"), this.emit("pong");
                                                break;
                                            case "error":
                                                var e = new Error("server error");
                                                e.code = t.data, this.onError(e);
                                                break;
                                            case "message":
                                                this.emit("data", t.data), this.emit("message", t.data)
                                        } else i('packet received with socket readyState "%s"', this.readyState)
                                    }
                                }, {
                                    key: "onHandshake",
                                    value: function(t) {
                                        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                                    }
                                }, {
                                    key: "resetPingTimeout",
                                    value: function() {
                                        var t = this;
                                        this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function() {
                                            t.onClose("ping timeout")
                                        }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                                    }
                                }, {
                                    key: "onDrain",
                                    value: function() {
                                        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                                    }
                                }, {
                                    key: "flush",
                                    value: function() {
                                        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                                    }
                                }, {
                                    key: "write",
                                    value: function(t, e, n) {
                                        return this.sendPacket("message", t, e, n), this
                                    }
                                }, {
                                    key: "send",
                                    value: function(t, e, n) {
                                        return this.sendPacket("message", t, e, n), this
                                    }
                                }, {
                                    key: "sendPacket",
                                    value: function(t, e, n, r) {
                                        if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                                            (n = n || {}).compress = !1 !== n.compress;
                                            var o = {
                                                type: t,
                                                data: e,
                                                options: n
                                            };
                                            this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                                        }
                                    }
                                }, {
                                    key: "close",
                                    value: function() {
                                        var t = this,
                                            e = function() {
                                                t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close()
                                            },
                                            n = function n() {
                                                t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e()
                                            },
                                            r = function() {
                                                t.once("upgrade", n), t.once("upgradeError", n)
                                            };
                                        return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function() {
                                            t.upgrading ? r() : e()
                                        })) : this.upgrading ? r() : e()), this
                                    }
                                }, {
                                    key: "onError",
                                    value: function(t) {
                                        i("socket error %j", t), e.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
                                    }
                                }, {
                                    key: "onClose",
                                    value: function(t, e) {
                                        "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t), this.clearTimeoutFn(this.pingIntervalTimer), this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
                                    }
                                }, {
                                    key: "filterUpgrades",
                                    value: function(t) {
                                        for (var e = [], n = 0, r = t.length; n < r; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
                                        return e
                                    }
                                }])
                            }(o);
                        f.priorWebsocketSuccess = !1, f.protocol = s.protocol, t.exports = f
                    }, function(t, e, n) {
                        (function(e) {
                            var r = n(9),
                                o = n(1),
                                i = n(11),
                                s = n(30),
                                a = n(12).pick,
                                c = n(32),
                                h = c.WebSocket,
                                f = c.usingBrowserWebSocket,
                                l = c.defaultBinaryType,
                                d = c.nextTick,
                                m = n(0)("engine.io-client:websocket"),
                                b = void 0 !== u && "string" == typeof u.product && "reactnative" === u.product.toLowerCase(),
                                k = function(t) {
                                    function n(t) {
                                        var e;
                                        return v(this, n), (e = p(this, n, [t])).supportsBinary = !t.forceBase64, e
                                    }
                                    return g(n, t), y(n, [{
                                        key: "name",
                                        get: function() {
                                            return "websocket"
                                        }
                                    }, {
                                        key: "doOpen",
                                        value: function() {
                                            if (this.check()) {
                                                var t = this.uri(),
                                                    e = this.opts.protocols,
                                                    n = b ? {} : a(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                                this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                                                try {
                                                    this.ws = f && !b ? e ? new h(t, e) : new h(t) : new h(t, e, n)
                                                } catch (t) {
                                                    return this.emit("error", t)
                                                }
                                                this.ws.binaryType = this.socket.binaryType || l, this.addEventListeners()
                                            }
                                        }
                                    }, {
                                        key: "addEventListeners",
                                        value: function() {
                                            var t = this;
                                            this.ws.onopen = function() {
                                                t.opts.autoUnref && t.ws._socket.unref(), t.onOpen()
                                            }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = function(e) {
                                                return t.onData(e.data)
                                            }, this.ws.onerror = function(e) {
                                                return t.onError("websocket error", e)
                                            }
                                        }
                                    }, {
                                        key: "write",
                                        value: function(t) {
                                            var n = this;
                                            this.writable = !1;
                                            for (var r = function() {
                                                    var r = t[i],
                                                        s = i === t.length - 1;
                                                    o.encodePacket(r, n.supportsBinary, (function(t) {
                                                        var o = {};
                                                        !f && (r.options && (o.compress = r.options.compress), n.opts.perMessageDeflate) && ("string" == typeof t ? e.byteLength(t) : t.length) < n.opts.perMessageDeflate.threshold && (o.compress = !1);
                                                        try {
                                                            f ? n.ws.send(t) : n.ws.send(t, o)
                                                        } catch (t) {
                                                            m("websocket closed before onclose event")
                                                        }
                                                        s && d((function() {
                                                            n.writable = !0, n.emit("drain")
                                                        }), n.setTimeoutFn)
                                                    }))
                                                }, i = 0; i < t.length; i++) r()
                                        }
                                    }, {
                                        key: "onClose",
                                        value: function() {
                                            r.prototype.onClose.call(this)
                                        }
                                    }, {
                                        key: "doClose",
                                        value: function() {
                                            void 0 !== this.ws && (this.ws.close(), this.ws = null)
                                        }
                                    }, {
                                        key: "uri",
                                        value: function() {
                                            var t = this.query || {},
                                                e = this.opts.secure ? "wss" : "ws",
                                                n = "";
                                            return this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = s()), this.supportsBinary || (t.b64 = 1), (t = i.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + t
                                        }
                                    }, {
                                        key: "check",
                                        value: function() {
                                            return !(!h || "__initialize" in h && this.name === n.prototype.name)
                                        }
                                    }])
                                }(r);
                            t.exports = k
                        }).call(this, n(23).Buffer)
                    }, function(t, e, n) {
                        (function(t) {
                            var r = n(24),
                                o = n(25),
                                i = n(26);
                             function s() {
                                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                            }
                             function a(t, e) {
                                if (s() < e) throw new RangeError("Invalid typed array length");
                                return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
                            }
                             function c(t, e, n) {
                                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
                                if ("number" == typeof t) {
                                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                                    return f(this, t)
                                }
                                return u(this, t, e, n)
                            }
                             function u(t, e, n, r) {
                                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                                    if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                                    if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                                    return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = l(t, e), t
                                }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                                    if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                                    var r = 0 | d(e, n),
                                        o = (t = a(t, r)).write(e, n);
                                    return o !== r && (t = t.slice(0, o)), t
                                }(t, e, n) : function(t, e) {
                                    if (c.isBuffer(e)) {
                                        var n = 0 | p(e.length);
                                        return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                                    }
                                    if (e) {
                                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);
                                        if ("Buffer" === e.type && i(e.data)) return l(t, e.data)
                                    }
                                    var r;
                                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                                }(t, e)
                            }
                             function h(t) {
                                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                                if (t < 0) throw new RangeError('"size" argument must not be negative')
                            }
                             function f(t, e) {
                                if (h(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !c.TYPED_ARRAY_SUPPORT)
                                    for (var n = 0; n < e; ++n) t[n] = 0;
                                return t
                            }
                             function l(t, e) {
                                var n = e.length < 0 ? 0 : 0 | p(e.length);
                                t = a(t, n);
                                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                                return t
                            }
                             function p(t) {
                                if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                                return 0 | t
                            }
                             function d(t, e) {
                                if (c.isBuffer(t)) return t.length;
                                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                                "string" != typeof t && (t = "" + t);
                                var n = t.length;
                                if (0 === n) return 0;
                                for (var r = !1;;) switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return n;
                                    case "utf8":
                                    case "utf-8":
                                    case void 0:
                                        return Z(t).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * n;
                                    case "hex":
                                        return n >>> 1;
                                    case "base64":
                                        return G(t).length;
                                    default:
                                        if (r) return Z(t).length;
                                        e = ("" + e).toLowerCase(), r = !0
                                }
                            }
                             function g(t, e, n) {
                                var r = !1;
                                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                                if ((n >>>= 0) <= (e >>>= 0)) return "";
                                for (t || (t = "utf8");;) switch (t) {
                                    case "hex":
                                        return O(this, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return T(this, e, n);
                                    case "ascii":
                                        return x(this, e, n);
                                    case "latin1":
                                    case "binary":
                                        return C(this, e, n);
                                    case "base64":
                                        return S(this, e, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return I(this, e, n);
                                    default:
                                        if (r) throw new TypeError("Unknown encoding: " + t);
                                        t = (t + "").toLowerCase(), r = !0
                                }
                            }
                             function v(t, e, n) {
                                var r = t[e];
                                t[e] = t[n], t[n] = r
                            }
                             function y(t, e, n, r, o) {
                                if (0 === t.length) return -1;
                                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                                    if (o) return -1;
                                    n = t.length - 1
                                } else if (n < 0) {
                                    if (!o) return -1;
                                    n = 0
                                }
                                if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, o);
                                if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, r, o);
                                throw new TypeError("val must be string, number or Buffer")
                            }
                             function m(t, e, n, r, o) {
                                var i, s = 1,
                                    a = t.length,
                                    c = e.length;
                                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    s = 2, a /= 2, c /= 2, n /= 2
                                }
                                 function u(t, e) {
                                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                                }
                                if (o) {
                                    var h = -1;
                                    for (i = n; i < a; i++)
                                        if (u(t, i) === u(e, -1 === h ? 0 : i - h)) {
                                            if (-1 === h && (h = i), i - h + 1 === c) return h * s
                                        } else -1 !== h && (i -= i - h), h = -1
                                } else
                                    for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
                                        for (var f = !0, l = 0; l < c; l++)
                                            if (u(t, i + l) !== u(e, l)) {
                                                f = !1;
                                                break
                                            }
                                        if (f) return i
                                    }
                                return -1
                            }
                             function b(t, e, n, r) {
                                n = Number(n) || 0;
                                var o = t.length - n;
                                r ? (r = Number(r)) > o && (r = o) : r = o;
                                var i = e.length;
                                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                                r > i / 2 && (r = i / 2);
                                for (var s = 0; s < r; ++s) {
                                    var a = parseInt(e.substr(2 * s, 2), 16);
                                    if (isNaN(a)) return s;
                                    t[n + s] = a
                                }
                                return s
                            }
                             function k(t, e, n, r) {
                                return Y(Z(e, t.length - n), t, n, r)
                            }
                             function w(t, e, n, r) {
                                return Y(function(t) {
                                    for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                                    return e
                                }(e), t, n, r)
                            }
                             function A(t, e, n, r) {
                                return w(t, e, n, r)
                            }
                             function _(t, e, n, r) {
                                return Y(G(e), t, n, r)
                            }
                             function E(t, e, n, r) {
                                return Y(function(t, e) {
                                    for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, o = n % 256, i.push(o), i.push(r);
                                    return i
                                }(e, t.length - n), t, n, r)
                            }
                             function S(t, e, n) {
                                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                            }
                             function T(t, e, n) {
                                n = Math.min(t.length, n);
                                for (var r = [], o = e; o < n;) {
                                    var i, s, a, c, u = t[o],
                                        h = null,
                                        f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (o + f <= n) switch (f) {
                                        case 1:
                                            u < 128 && (h = u);
                                            break;
                                        case 2:
                                            128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (h = c);
                                            break;
                                        case 3:
                                            i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
                                            break;
                                        case 4:
                                            i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c)
                                    }
                                    null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), o += f
                                }
                                return function(t) {
                                    var e = t.length;
                                    if (e <= 4096) return String.fromCharCode.apply(String, t);
                                    for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                                    return n
                                }(r)
                            }
                             function x(t, e, n) {
                                var r = "";
                                n = Math.min(t.length, n);
                                for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                                return r
                            }
                             function C(t, e, n) {
                                var r = "";
                                n = Math.min(t.length, n);
                                for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                                return r
                            }
                             function O(t, e, n) {
                                var r = t.length;
                                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                                for (var o = "", i = e; i < n; ++i) o += U(t[i]);
                                return o
                            }
                             function I(t, e, n) {
                                for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                return o
                            }
                             function N(t, e, n) {
                                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                            }
                             function j(t, e, n, r, o, i) {
                                if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                                if (n + r > t.length) throw new RangeError("Index out of range")
                            }
                             function P(t, e, n, r) {
                                e < 0 && (e = 65535 + e + 1);
                                for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
                            }
                             function B(t, e, n, r) {
                                e < 0 && (e = 4294967295 + e + 1);
                                for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
                            }
                             function R(t, e, n, r, o, i) {
                                if (n + r > t.length) throw new RangeError("Index out of range");
                                if (n < 0) throw new RangeError("Index out of range")
                            }
                             function M(t, e, n, r, i) {
                                return i || R(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
                            }
                             function L(t, e, n, r, i) {
                                return i || R(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
                            }
                            e.Buffer = c, e.SlowBuffer = function(t) {
                                return +t != t && (t = 0), c.alloc(+t)
                            }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                                try {
                                    var t = new Uint8Array(1);
                                    return t.__proto__ = {
                                        __proto__: Uint8Array.prototype,
                                        foo: function() {
                                            return 42
                                        }
                                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                                } catch (t) {
                                    return !1
                                }
                            }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function(t) {
                                return t.__proto__ = c.prototype, t
                            }, c.from = function(t, e, n) {
                                return u(null, t, e, n)
                            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                                value: null,
                                configurable: !0
                            })), c.alloc = function(t, e, n) {
                                return function(t, e, n, r) {
                                    return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
                                }(null, t, e, n)
                            }, c.allocUnsafe = function(t) {
                                return f(null, t)
                            }, c.allocUnsafeSlow = function(t) {
                                return f(null, t)
                            }, c.isBuffer = function(t) {
                                return !(null == t || !t._isBuffer)
                            }, c.compare = function(t, e) {
                                if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                                if (t === e) return 0;
                                for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                                    if (t[o] !== e[o]) {
                                        n = t[o], r = e[o];
                                        break
                                    }
                                return n < r ? -1 : r < n ? 1 : 0
                            }, c.isEncoding = function(t) {
                                switch (String(t).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, c.concat = function(t, e) {
                                if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === t.length) return c.alloc(0);
                                var n;
                                if (void 0 === e)
                                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                                var r = c.allocUnsafe(e),
                                    o = 0;
                                for (n = 0; n < t.length; ++n) {
                                    var s = t[n];
                                    if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    s.copy(r, o), o += s.length
                                }
                                return r
                            }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                                var t = this.length;
                                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                                return this
                            }, c.prototype.swap32 = function() {
                                var t = this.length;
                                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                                return this
                            }, c.prototype.swap64 = function() {
                                var t = this.length;
                                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
                                return this
                            }, c.prototype.toString = function() {
                                var t = 0 | this.length;
                                return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : g.apply(this, arguments)
                            }, c.prototype.equals = function(t) {
                                if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                                return this === t || 0 === c.compare(this, t)
                            }, c.prototype.inspect = function() {
                                var t = "",
                                    n = e.INSPECT_MAX_BYTES;
                                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                            }, c.prototype.compare = function(t, e, n, r, o) {
                                if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                                if (r >= o && e >= n) return 0;
                                if (r >= o) return -1;
                                if (e >= n) return 1;
                                if (this === t) return 0;
                                for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(r, o), h = t.slice(e, n), f = 0; f < a; ++f)
                                    if (u[f] !== h[f]) {
                                        i = u[f], s = h[f];
                                        break
                                    }
                                return i < s ? -1 : s < i ? 1 : 0
                            }, c.prototype.includes = function(t, e, n) {
                                return -1 !== this.indexOf(t, e, n)
                            }, c.prototype.indexOf = function(t, e, n) {
                                return y(this, t, e, n, !0)
                            }, c.prototype.lastIndexOf = function(t, e, n) {
                                return y(this, t, e, n, !1)
                            }, c.prototype.write = function(t, e, n, r) {
                                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                                else {
                                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                                }
                                var o = this.length - e;
                                if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                r || (r = "utf8");
                                for (var i = !1;;) switch (r) {
                                    case "hex":
                                        return b(this, t, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return k(this, t, e, n);
                                    case "ascii":
                                        return w(this, t, e, n);
                                    case "latin1":
                                    case "binary":
                                        return A(this, t, e, n);
                                    case "base64":
                                        return _(this, t, e, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return E(this, t, e, n);
                                    default:
                                        if (i) throw new TypeError("Unknown encoding: " + r);
                                        r = ("" + r).toLowerCase(), i = !0
                                }
                            }, c.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, c.prototype.slice = function(t, e) {
                                var n, r = this.length;
                                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = c.prototype;
                                else {
                                    var o = e - t;
                                    n = new c(o, void 0);
                                    for (var i = 0; i < o; ++i) n[i] = this[i + t]
                                }
                                return n
                            }, c.prototype.readUIntLE = function(t, e, n) {
                                t |= 0, e |= 0, n || N(t, e, this.length);
                                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                                return r
                            }, c.prototype.readUIntBE = function(t, e, n) {
                                t |= 0, e |= 0, n || N(t, e, this.length);
                                for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
                                return r
                            }, c.prototype.readUInt8 = function(t, e) {
                                return e || N(t, 1, this.length), this[t]
                            }, c.prototype.readUInt16LE = function(t, e) {
                                return e || N(t, 2, this.length), this[t] | this[t + 1] << 8
                            }, c.prototype.readUInt16BE = function(t, e) {
                                return e || N(t, 2, this.length), this[t] << 8 | this[t + 1]
                            }, c.prototype.readUInt32LE = function(t, e) {
                                return e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                            }, c.prototype.readUInt32BE = function(t, e) {
                                return e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                            }, c.prototype.readIntLE = function(t, e, n) {
                                t |= 0, e |= 0, n || N(t, e, this.length);
                                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                                return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
                            }, c.prototype.readIntBE = function(t, e, n) {
                                t |= 0, e |= 0, n || N(t, e, this.length);
                                for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
                                return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
                            }, c.prototype.readInt8 = function(t, e) {
                                return e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                            }, c.prototype.readInt16LE = function(t, e) {
                                e || N(t, 2, this.length);
                                var n = this[t] | this[t + 1] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }, c.prototype.readInt16BE = function(t, e) {
                                e || N(t, 2, this.length);
                                var n = this[t + 1] | this[t] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }, c.prototype.readInt32LE = function(t, e) {
                                return e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                            }, c.prototype.readInt32BE = function(t, e) {
                                return e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                            }, c.prototype.readFloatLE = function(t, e) {
                                return e || N(t, 4, this.length), o.read(this, t, !0, 23, 4)
                            }, c.prototype.readFloatBE = function(t, e) {
                                return e || N(t, 4, this.length), o.read(this, t, !1, 23, 4)
                            }, c.prototype.readDoubleLE = function(t, e) {
                                return e || N(t, 8, this.length), o.read(this, t, !0, 52, 8)
                            }, c.prototype.readDoubleBE = function(t, e) {
                                return e || N(t, 8, this.length), o.read(this, t, !1, 52, 8)
                            }, c.prototype.writeUIntLE = function(t, e, n, r) {
                                t = +t, e |= 0, n |= 0, r || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                                var o = 1,
                                    i = 0;
                                for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                                return e + n
                            }, c.prototype.writeUIntBE = function(t, e, n, r) {
                                t = +t, e |= 0, n |= 0, r || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                                var o = n - 1,
                                    i = 1;
                                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                                return e + n
                            }, c.prototype.writeUInt8 = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                            }, c.prototype.writeUInt16LE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
                            }, c.prototype.writeUInt16BE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
                            }, c.prototype.writeUInt32LE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4
                            }, c.prototype.writeUInt32BE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4
                            }, c.prototype.writeIntLE = function(t, e, n, r) {
                                if (t = +t, e |= 0, !r) {
                                    var o = Math.pow(2, 8 * n - 1);
                                    j(this, t, e, n, o - 1, -o)
                                }
                                var i = 0,
                                    s = 1,
                                    a = 0;
                                for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s | 0) - a & 255;
                                return e + n
                            }, c.prototype.writeIntBE = function(t, e, n, r) {
                                if (t = +t, e |= 0, !r) {
                                    var o = Math.pow(2, 8 * n - 1);
                                    j(this, t, e, n, o - 1, -o)
                                }
                                var i = n - 1,
                                    s = 1,
                                    a = 0;
                                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s | 0) - a & 255;
                                return e + n
                            }, c.prototype.writeInt8 = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                            }, c.prototype.writeInt16LE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
                            }, c.prototype.writeInt16BE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
                            }, c.prototype.writeInt32LE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4
                            }, c.prototype.writeInt32BE = function(t, e, n) {
                                return t = +t, e |= 0, n || j(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4
                            }, c.prototype.writeFloatLE = function(t, e, n) {
                                return M(this, t, e, !0, n)
                            }, c.prototype.writeFloatBE = function(t, e, n) {
                                return M(this, t, e, !1, n)
                            }, c.prototype.writeDoubleLE = function(t, e, n) {
                                return L(this, t, e, !0, n)
                            }, c.prototype.writeDoubleBE = function(t, e, n) {
                                return L(this, t, e, !1, n)
                            }, c.prototype.copy = function(t, e, n, r) {
                                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                                if (0 === t.length || 0 === this.length) return 0;
                                if (e < 0) throw new RangeError("targetStart out of bounds");
                                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                                var o, i = r - n;
                                if (this === t && n < e && e < r)
                                    for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
                                else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                                    for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                                else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                                return i
                            }, c.prototype.fill = function(t, e, n, r) {
                                if ("string" == typeof t) {
                                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                                        var o = t.charCodeAt(0);
                                        o < 256 && (t = o)
                                    }
                                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                                    if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                                } else "number" == typeof t && (t &= 255);
                                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                                if (n <= e) return this;
                                var i;
                                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                                    for (i = e; i < n; ++i) this[i] = t;
                                else {
                                    var s = c.isBuffer(t) ? t : Z(new c(t, r).toString()),
                                        a = s.length;
                                    for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
                                }
                                return this
                            };
                            var D = /[^+\/0-9A-Za-z-_]/g;
                             function U(t) {
                                return t < 16 ? "0" + t.toString(16) : t.toString(16)
                            }
                             function Z(t, e) {
                                var n;
                                e = e || 1 / 0;
                                for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                                        if (!o) {
                                            if (n > 56319) {
                                                (e -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            if (s + 1 === r) {
                                                (e -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            o = n;
                                            continue
                                        }
                                        if (n < 56320) {
                                            (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                            continue
                                        }
                                        n = 65536 + (o - 55296 << 10 | n - 56320)
                                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                                    if (o = null, n < 128) {
                                        if ((e -= 1) < 0) break;
                                        i.push(n)
                                    } else if (n < 2048) {
                                        if ((e -= 2) < 0) break;
                                        i.push(n >> 6 | 192, 63 & n | 128)
                                    } else if (n < 65536) {
                                        if ((e -= 3) < 0) break;
                                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                    } else {
                                        if (!(n < 1114112)) throw new Error("Invalid code point");
                                        if ((e -= 4) < 0) break;
                                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                    }
                                }
                                return i
                            }
                             function G(t) {
                                return r.toByteArray(function(t) {
                                    if ((t = function(t) {
                                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                                        }(t).replace(D, "")).length < 2) return "";
                                    for (; t.length % 4 != 0;) t += "=";
                                    return t
                                }(t))
                            }
                             function Y(t, e, n, r) {
                                for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                                return o
                            }
                        }).call(this, n(8))
                    }, function(t, e, n) {
                        e.byteLength = function(t) {
                            var e = u(t),
                                n = e[0],
                                r = e[1];
                            return 3 * (n + r) / 4 - r
                        }, e.toByteArray = function(t) {
                            var e, n, r = u(t),
                                s = r[0],
                                a = r[1],
                                c = new i(function(t, e, n) {
                                    return 3 * (e + n) / 4 - n
                                }(0, s, a)),
                                h = 0,
                                f = a > 0 ? s - 4 : s;
                            for (n = 0; n < f; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = 255 & e;
                            return 2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, c[h++] = 255 & e), 1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = 255 & e), c
                        }, e.fromByteArray = function(t) {
                            for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(h(t, s, s + 16383 > a ? a : s + 16383));
                            return 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), i.join("")
                        };
                        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) r[a] = s[a], o[s.charCodeAt(a)] = a;
                         function u(t) {
                            var e = t.length;
                            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                            var n = t.indexOf("=");
                            return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
                        }
                         function h(t, e, n) {
                            for (var o, i, s = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                            return s.join("")
                        }
                        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
                    }, function(t, e) {
                        e.read = function(t, e, n, r, o) {
                            var i, s, a = 8 * o - r - 1,
                                c = (1 << a) - 1,
                                u = c >> 1,
                                h = -7,
                                f = n ? o - 1 : 0,
                                l = n ? -1 : 1,
                                p = t[e + f];
                            for (f += l, i = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; i = 256 * i + t[e + f], f += l, h -= 8);
                            for (s = i & (1 << -h) - 1, i >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8);
                            if (0 === i) i = 1 - u;
                            else {
                                if (i === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                                s += Math.pow(2, r), i -= u
                            }
                            return (p ? -1 : 1) * s * Math.pow(2, i - r)
                        }, e.write = function(t, e, n, r, o, i) {
                            var s, a, c, u = 8 * i - o - 1,
                                h = (1 << u) - 1,
                                f = h >> 1,
                                l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                p = r ? 0 : i - 1,
                                d = r ? 1 : -1,
                                g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? l / c : l * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
                            for (s = s << o | a, u += o; u > 0; t[n + p] = 255 & s, p += d, s /= 256, u -= 8);
                            t[n + p - d] |= 128 * g
                        }
                    }, function(t, e) {
                        var n = {}.toString;
                        t.exports = Array.isArray || function(t) {
                            return "[object Array]" == n.call(t)
                        }
                    }, function(t, e, n) {
                        var r = n(10).PACKET_TYPES,
                            o = "function" == typeof a || void 0 !== a && "[object BlobConstructor]" === Object.prototype.toString.call(a),
                            i = "function" == typeof ArrayBuffer,
                            s = function(t, e) {
                                var n = new FileReader;
                                return n.onload = function() {
                                    var t = n.result.split(",")[1];
                                    e("b" + t)
                                }, n.readAsDataURL(t)
                            };
                        t.exports = function(t, e, n) {
                            var c, u = t.type,
                                h = t.data;
                            return o && h instanceof a ? e ? n(h) : s(h, n) : i && (h instanceof ArrayBuffer || (c = h, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(c) : c && c.buffer instanceof ArrayBuffer)) ? e ? n(h) : s(new a([h]), n) : n(r[u] + (h || ""))
                        }
                    }, function(t, e, n) {
                        var r, o = n(10),
                            i = o.PACKET_TYPES_REVERSE,
                            s = o.ERROR_PACKET;
                        "function" == typeof ArrayBuffer && (r = n(29));
                        var c = function(t, e) {
                                if (r) {
                                    var n = r.decode(t);
                                    return u(n, e)
                                }
                                return {
                                    base64: !0,
                                    data: t
                                }
                            },
                            u = function(t, e) {
                                switch (e) {
                                    case "blob":
                                        return t instanceof ArrayBuffer ? new a([t]) : t;
                                    case "arraybuffer":
                                    default:
                                        return t
                                }
                            };
                        t.exports = function(t, e) {
                            if ("string" != typeof t) return {
                                type: "message",
                                data: u(t, e)
                            };
                            var n = t.charAt(0);
                            return "b" === n ? {
                                type: "message",
                                data: c(t.substring(1), e)
                            } : i[n] ? t.length > 1 ? {
                                type: i[n],
                                data: t.substring(1)
                            } : {
                                type: i[n]
                            } : s
                        }
                    }, function(t, e) {
                        ! function(t) {
                            e.encode = function(e) {
                                var n, r = new Uint8Array(e),
                                    o = r.length,
                                    i = "";
                                for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
                                return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
                            }, e.decode = function(e) {
                                var n, r, o, i, s, a = .75 * e.length,
                                    c = e.length,
                                    u = 0;
                                "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                                var h = new ArrayBuffer(a),
                                    f = new Uint8Array(h);
                                for (n = 0; n < c; n += 4) r = t.indexOf(e[n]), o = t.indexOf(e[n + 1]), i = t.indexOf(e[n + 2]), s = t.indexOf(e[n + 3]), f[u++] = r << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & s;
                                return h
                            }
                        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                    }, function(t, e, n) {
                        var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                            i = {},
                            s = 0,
                            a = 0;
                         function c(t) {
                            var e = "";
                            do {
                                e = o[t % 64] + e, t = Math.floor(t / 64)
                            } while (t > 0);
                            return e
                        }
                         function u() {
                            var t = c(+new Date);
                            return t !== r ? (s = 0, r = t) : t + "." + c(s++)
                        }
                        for (; a < 64; a++) i[o[a]] = a;
                        u.encode = c, u.decode = function(t) {
                            var e = 0;
                            for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
                            return e
                        }, t.exports = u
                    }, function(t, e) {
                        t.exports = "undefined" != typeof self ? self : void 0 !== s ? s : Function("return this")()
                    }, function(t, e, n) {
                        t.exports = {
                            WebSocket: n(33),
                            usingBrowserWebSocket: !1,
                            defaultBinaryType: "nodebuffer",
                            nextTick: function(t) {
                                setTimeout((function() {
                                    t()
                                }))
                            }
                        }
                    }, function(t, e, n) {
                        var r = n(34),
                            o = (n(35).URL, n(41)),
                            i = o.addEventListener,
                            s = o.removeEventListener,
                            a = n(42),
                            c = n(0)("wx-ws:wx-ws"),
                            u = ["nodebuffer", "arraybuffer"],
                            f = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
                            d = function(t) {
                                function e(t, n, r) {
                                    var o;
                                    return v(this, e), o = p(this, e), c("constructor: ", t, n, r), o.readyState = e.CONNECTING, o.protocol = "", o._closeCode = 1006, o._closeMessage = "", o._binaryType = u[0], o._socket = null, o.supports = {
                                        binary: !0
                                    }, null !== t && (o._bufferedAmount = 0, o._redirects = 0, "object" == m(n) && null !== n && (r = n, n = void 0), function(t, e, n, r) {
                                        var o = h({
                                            maxPayload: 104857600,
                                            perMessageDeflate: !0
                                        }, r);
                                        c("initAsClient: opts: ", o), t.url = e;
                                        var i = function(t) {
                                            return c("start create conn: ", t), wx.connectSocket(t) || {
                                                onClose: wx.onSocketClose,
                                                onOpen: wx.onSocketOpen,
                                                onError: wx.onSocketError,
                                                onMessage: wx.onSocketMessage,
                                                send: wx.sendSocketMessage,
                                                close: wx.closeSocket
                                            }
                                        }({
                                            url: t.url,
                                            header: o.headers,
                                            protocols: n,
                                            perMessageDeflate: !!o.perMessageDeflate,
                                            tcpNoDelay: !!o.tcpNoDelay
                                        });
                                        t.setSocket(i)
                                    }(l(o), t, n, r)), o
                                }
                                return g(e, t), y(e, [{
                                    key: "CONNECTING",
                                    get: function() {
                                        return e.CONNECTING
                                    }
                                }, {
                                    key: "CLOSING",
                                    get: function() {
                                        return e.CLOSING
                                    }
                                }, {
                                    key: "CLOSED",
                                    get: function() {
                                        return e.CLOSED
                                    }
                                }, {
                                    key: "OPEN",
                                    get: function() {
                                        return e.OPEN
                                    }
                                }, {
                                    key: "bufferedAmount",
                                    get: function() {
                                        return this._socket ? (this._socket.bufferSize || 0) + this._sender._bufferedBytes : this._bufferedAmount
                                    }
                                }, {
                                    key: "binaryType",
                                    get: function() {
                                        return this._binaryType
                                    },
                                    set: function(t) {
                                        c("set binaryType: ", t), u.includes(t) && (this._binaryType = t)
                                    }
                                }, {
                                    key: "setSocket",
                                    value: function(t, n) {
                                        var r = this;
                                        this._socket = t, this._sender = new a(t), c("set socket: socket =", t, ", head =", n, ", this: ", this), this._socket.onOpen((function(t) {
                                            c("socket onopen: ", t), r.readyState = e.OPEN, r.emit("open", t)
                                        })), this._socket.onClose((function(t) {
                                            c("socket onclose: ", t), r._closeCode = t.code, r._closeMessage = t.reason, r.emitClose()
                                        })), this._socket.onError((function(t) {
                                            c("socket onerror: ", t), r.emit("error", t)
                                        })), this._socket.onMessage((function(t) {
                                            c("socket onmessage: ", t, r), r.emit("message", t.data)
                                        }))
                                    }
                                }, {
                                    key: "emitClose",
                                    value: function() {
                                        this.readyState = e.CLOSED, this.removeEventListener(), this.emit("close", this._closeCode, this._closeMessage)
                                    }
                                }, {
                                    key: "send",
                                    value: function(t, n, r) {
                                        if (c("socket send msg: ", t, this.readyState, ", sender: ", this._sender), this.readyState === e.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
                                        "number" == typeof t && (t = t.toString()), this.readyState === e.OPEN ? this._sender.send(t, n, r) : r && r(new Error("WebSocket is not open: readyState ".concat(this.readyState, " ") + "(".concat(f[this.readyState], ")")))
                                    }
                                }, {
                                    key: "close",
                                    value: function(t, n) {
                                        var r = this;
                                        if (c("closing connection: ", this.readyState), this.readyState !== e.CLOSED) {
                                            if (this.readyState === e.CONNECTING) throw new Error("WebSocket was closed before the connection was established");
                                            this.readyState !== e.CLOSING && (this.readyState = e.CLOSING, this._socket.close({
                                                code: t,
                                                reason: n,
                                                success: function() {
                                                    c("connection closed..."), r.readyState = e.CLOSED, r._socket = null
                                                }
                                            }))
                                        }
                                    }
                                }])
                            }(r);
                        f.forEach((function(t, e) {
                            d[t] = e
                        })), ["open", "error", "close", "message"].forEach((function(t) {
                            Object.defineProperty(d.prototype, "on".concat(t), {get: function() {
                                    for (var e = this.listeners(t), n = 0; n < e.length; n++)
                                        if (e[n]._listener) return e[n]._listener
                                },
                                set: function(e) {
                                    for (var n = this.listeners(t), r = 0; r < n.length; r++) n[r]._listener && this.removeListener(t, n[r]);
                                    this.addEventListener(t, e)
                                }
                            })
                        })), d.prototype.addEventListener = i, d.prototype.removeEventListener = s, t.exports = d
                    }, function(t, e, n) {
                        var r, o = "object" == ("undefined" == typeof Reflect ? "undefined" : m(Reflect)) ? Reflect : null,
                            i = o && "function" == typeof o.apply ? o.apply : function(t, e, n) {
                                return Function.prototype.apply.call(t, e, n)
                            };
                        r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                        } : function(t) {
                            return Object.getOwnPropertyNames(t)
                        };
                        var s = Number.isNaN || function(t) {
                            return t != t
                        };
                         function a() {
                            a.init.call(this)
                        }
                        t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
                        var c = 10;
                         function u(t) {
                            if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + m(t))
                        }
                         function h(t) {
                            return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
                        }
                         function f(t, e, n, r) {
                            var o, i, s, a;
                            if (u(n), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), i = t._events), s = i[e]), void 0 === s) s = i[e] = n, ++t._eventsCount;
                            else if ("function" == typeof s ? s = i[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = h(t)) > 0 && s.length > o && !s.warned) {
                                s.warned = !0;
                                var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                                c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console && console.warn && console.warn(a)
                            }
                            return t
                        }
                         function l() {
                            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                        }
                         function p(t, e, n) {
                            var r = {
                                    fired: !1,
                                    wrapFn: void 0,
                                    target: t,
                                    type: e,
                                    listener: n
                                },
                                o = l.bind(r);
                            return o.listener = n, r.wrapFn = o, o
                        }
                         function d(t, e, n) {
                            var r = t._events;
                            if (void 0 === r) return [];
                            var o = r[e];
                            return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(t) {
                                for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                                return e
                            }(o) : v(o, o.length)
                        }
                         function g(t) {
                            var e = this._events;
                            if (void 0 !== e) {
                                var n = e[t];
                                if ("function" == typeof n) return 1;
                                if (void 0 !== n) return n.length
                            }
                            return 0
                        }
                         function v(t, e) {
                            for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
                            return n
                        }
                        Object.defineProperty(a, "defaultMaxListeners", {
                            enumerable: !0,
                            get: function() {
                                return c
                            },
                            set: function(t) {
                                if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                                c = t
                            }
                        }), a.init = function() {
                            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                        }, a.prototype.setMaxListeners = function(t) {
                            if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                            return this._maxListeners = t, this
                        }, a.prototype.getMaxListeners = function() {
                            return h(this)
                        }, a.prototype.emit = function(t) {
                            for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                            var r = "error" === t,
                                o = this._events;
                            if (void 0 !== o) r = r && void 0 === o.error;
                            else if (!r) return !1;
                            if (r) {
                                var s;
                                if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
                                var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                                throw a.context = s, a
                            }
                            var c = o[t];
                            if (void 0 === c) return !1;
                            if ("function" == typeof c) i(c, this, e);
                            else {
                                var u = c.length,
                                    h = v(c, u);
                                for (n = 0; n < u; ++n) i(h[n], this, e)
                            }
                            return !0
                        }, a.prototype.addListener = function(t, e) {
                            return f(this, t, e, !1)
                        }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
                            return f(this, t, e, !0)
                        }, a.prototype.once = function(t, e) {
                            return u(e), this.on(t, p(this, t, e)), this
                        }, a.prototype.prependOnceListener = function(t, e) {
                            return u(e), this.prependListener(t, p(this, t, e)), this
                        }, a.prototype.removeListener = function(t, e) {
                            var n, r, o, i, s;
                            if (u(e), void 0 === (r = this._events)) return this;
                            if (void 0 === (n = r[t])) return this;
                            if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
                            else if ("function" != typeof n) {
                                for (o = -1, i = n.length - 1; i >= 0; i--)
                                    if (n[i] === e || n[i].listener === e) {
                                        s = n[i].listener, o = i;
                                        break
                                    }
                                if (o < 0) return this;
                                0 === o ? n.shift() : function(t, e) {
                                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                                    t.pop()
                                }(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e)
                            }
                            return this
                        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
                            var e, n, r;
                            if (void 0 === (n = this._events)) return this;
                            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                            if (0 === arguments.length) {
                                var o, i = Object.keys(n);
                                for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                            }
                            if ("function" == typeof(e = n[t])) this.removeListener(t, e);
                            else if (void 0 !== e)
                                for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                            return this
                        }, a.prototype.listeners = function(t) {
                            return d(this, t, !0)
                        }, a.prototype.rawListeners = function(t) {
                            return d(this, t, !1)
                        }, a.listenerCount = function(t, e) {
                            return "function" == typeof t.listenerCount ? t.listenerCount(e) : g.call(t, e)
                        }, a.prototype.listenerCount = g, a.prototype.eventNames = function() {
                            return this._eventsCount > 0 ? r(this._events) : []
                        }
                    }, function(t, e, n) {
                        var r = n(36),
                            o = n(3);
                         function i() {
                            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                        }
                        e.parse = k, e.resolve = function(t, e) {
                            return k(t, !1, !0).resolve(e)
                        }, e.resolveObject = function(t, e) {
                            return t ? k(t, !1, !0).resolveObject(e) : e
                        }, e.format = function(t) {
                            return o.isString(t) && (t = k(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
                        }, e.Url = i;
                        var s = /^([a-z0-9.+-]+:)/i,
                            a = /:[0-9]*$/,
                            c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                            u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                            h = ["'"].concat(u),
                            f = ["%", "/", "?", ";", "#"].concat(h),
                            l = ["/", "?", "#"],
                            p = /^[+a-z0-9A-Z_-]{0,63}$/,
                            d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                            g = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            v = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            y = {
                                http: !0,
                                https: !0,
                                ftp: !0,
                                gopher: !0,
                                file: !0,
                                "http:": !0,
                                "https:": !0,
                                "ftp:": !0,
                                "gopher:": !0,
                                "file:": !0
                            },
                            b = n(38);
                         function k(t, e, n) {
                            if (t && o.isObject(t) && t instanceof i) return t;
                            var r = new i;
                            return r.parse(t, e, n), r
                        }
                        i.prototype.parse = function(t, e, n) {
                            if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + m(t));
                            var i = t.indexOf("?"),
                                a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
                                u = t.split(a);
                            u[0] = u[0].replace(/\\/g, "/");
                            var k = t = u.join(a);
                            if (k = k.trim(), !n && 1 === t.split("#").length) {
                                var w = c.exec(k);
                                if (w) return this.path = k, this.href = k, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = e ? b.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                            }
                            var A = s.exec(k);
                            if (A) {
                                var _ = (A = A[0]).toLowerCase();
                                this.protocol = _, k = k.substr(A.length)
                            }
                            if (n || A || k.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                                var E = "//" === k.substr(0, 2);
                                !E || A && v[A] || (k = k.substr(2), this.slashes = !0)
                            }
                            if (!v[A] && (E || A && !y[A])) {
                                for (var S, T, x = -1, C = 0; C < l.length; C++) - 1 !== (O = k.indexOf(l[C])) && (-1 === x || O < x) && (x = O);
                                for (-1 !== (T = -1 === x ? k.lastIndexOf("@") : k.lastIndexOf("@", x)) && (S = k.slice(0, T), k = k.slice(T + 1), this.auth = decodeURIComponent(S)), x = -1, C = 0; C < f.length; C++) {
                                    var O; - 1 !== (O = k.indexOf(f[C])) && (-1 === x || O < x) && (x = O)
                                } - 1 === x && (x = k.length), this.host = k.slice(0, x), k = k.slice(x), this.parseHost(), this.hostname = this.hostname || "";
                                var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                                if (!I)
                                    for (var N = this.hostname.split(/\./), j = (C = 0, N.length); C < j; C++) {
                                        var P = N[C];
                                        if (P && !P.match(p)) {
                                            for (var B = "", R = 0, M = P.length; R < M; R++) P.charCodeAt(R) > 127 ? B += "x" : B += P[R];
                                            if (!B.match(p)) {
                                                var L = N.slice(0, C),
                                                    D = N.slice(C + 1),
                                                    U = P.match(d);
                                                U && (L.push(U[1]), D.unshift(U[2])), D.length && (k = "/" + D.join(".") + k), this.hostname = L.join(".");
                                                break
                                            }
                                        }
                                    }
                                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), I || (this.hostname = r.toASCII(this.hostname));
                                var Z = this.port ? ":" + this.port : "",
                                    G = this.hostname || "";
                                this.host = G + Z, this.href += this.host, I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== k[0] && (k = "/" + k))
                            }
                            if (!g[_])
                                for (C = 0, j = h.length; C < j; C++) {
                                    var Y = h[C];
                                    if (-1 !== k.indexOf(Y)) {
                                        var F = encodeURIComponent(Y);
                                        F === Y && (F = escape(Y)), k = k.split(Y).join(F)
                                    }
                                }
                            var q = k.indexOf("#"); - 1 !== q && (this.hash = k.substr(q), k = k.slice(0, q));
                            var z = k.indexOf("?");
                            if (-1 !== z ? (this.search = k.substr(z), this.query = k.substr(z + 1), e && (this.query = b.parse(this.query)), k = k.slice(0, z)) : e && (this.search = "", this.query = {}), k && (this.pathname = k), y[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                                Z = this.pathname || "";
                                var H = this.search || "";
                                this.path = Z + H
                            }
                            return this.href = this.format(), this
                        }, i.prototype.format = function() {
                            var t = this.auth || "";
                            t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                            var e = this.protocol || "",
                                n = this.pathname || "",
                                r = this.hash || "",
                                i = !1,
                                s = "";
                            this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = b.stringify(this.query));
                            var a = this.search || s && "?" + s || "";
                            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || y[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), e + i + (n = n.replace(/[?#]/g, (function(t) {
                                return encodeURIComponent(t)
                            }))) + (a = a.replace("#", "%23")) + r
                        }, i.prototype.resolve = function(t) {
                            return this.resolveObject(k(t, !1, !0)).format()
                        }, i.prototype.resolveObject = function(t) {
                            if (o.isString(t)) {
                                var e = new i;
                                e.parse(t, !1, !0), t = e
                            }
                            for (var n = new i, r = Object.keys(this), s = 0; s < r.length; s++) {
                                var a = r[s];
                                n[a] = this[a]
                            }
                            if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
                            if (t.slashes && !t.protocol) {
                                for (var c = Object.keys(t), u = 0; u < c.length; u++) {
                                    var h = c[u];
                                    "protocol" !== h && (n[h] = t[h])
                                }
                                return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                            }
                            if (t.protocol && t.protocol !== n.protocol) {
                                if (!y[t.protocol]) {
                                    for (var f = Object.keys(t), l = 0; l < f.length; l++) {
                                        var p = f[l];
                                        n[p] = t[p]
                                    }
                                    return n.href = n.format(), n
                                }
                                if (n.protocol = t.protocol, t.host || v[t.protocol]) n.pathname = t.pathname;
                                else {
                                    for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()););
                                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/")
                                }
                                if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                                    var g = n.pathname || "",
                                        m = n.search || "";
                                    n.path = g + m
                                }
                                return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
                            }
                            var b = n.pathname && "/" === n.pathname.charAt(0),
                                k = t.host || t.pathname && "/" === t.pathname.charAt(0),
                                w = k || b || n.host && t.pathname,
                                A = w,
                                _ = n.pathname && n.pathname.split("/") || [],
                                E = (d = t.pathname && t.pathname.split("/") || [], n.protocol && !y[n.protocol]);
                            if (E && (n.hostname = "", n.port = null, n.host && ("" === _[0] ? _[0] = n.host : _.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), w = w && ("" === d[0] || "" === _[0])), k) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, _ = d;
                            else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), n.search = t.search, n.query = t.query;
                            else if (!o.isNullOrUndefined(t.search)) return E && (n.hostname = n.host = _.shift(), (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), n.host = n.hostname = O.shift())), n.search = t.search, n.query = t.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
                            if (!_.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                            for (var S = _.slice(-1)[0], T = (n.host || t.host || _.length > 1) && ("." === S || ".." === S) || "" === S, x = 0, C = _.length; C >= 0; C--) "." === (S = _[C]) ? _.splice(C, 1) : ".." === S ? (_.splice(C, 1), x++) : x && (_.splice(C, 1), x--);
                            if (!w && !A)
                                for (; x--; x) _.unshift("..");
                            !w || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), T && "/" !== _.join("/").substr(-1) && _.push("");
                            var O, I = "" === _[0] || _[0] && "/" === _[0].charAt(0);
                            return E && (n.hostname = n.host = I ? "" : _.length ? _.shift() : "", (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = O.shift(), n.host = n.hostname = O.shift())), (w = w || n.host && _.length) && !I && _.unshift(""), _.length ? n.pathname = _.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
                        }, i.prototype.parseHost = function() {
                            var t = this.host,
                                e = a.exec(t);
                            e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
                        }
                    }, function(t, e, n) {
                        (function(t, r) {
                            var o;
                            ! function() {
                                e && e.nodeType, t && t.nodeType;
                                var i = "object" == m(r) && r;
                                i.global !== i && i.window !== i && i.self;
                                var s, a = 2147483647,
                                    c = /^xn--/,
                                    u = /[^\x20-\x7E]/,
                                    h = /[\x2E\u3002\uFF0E\uFF61]/g,
                                    f = {
                                        overflow: "Overflow: input needs wider integers to process",
                                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                        "invalid-input": "Invalid input"
                                    },
                                    l = Math.floor,
                                    p = String.fromCharCode;
                                 function d(t) {
                                    throw new RangeError(f[t])
                                }
                                 function g(t, e) {
                                    for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                                    return r
                                }
                                 function v(t, e) {
                                    var n = t.split("@"),
                                        r = "";
                                    return n.length > 1 && (r = n[0] + "@", t = n[1]), r + g((t = t.replace(h, ".")).split("."), e).join(".")
                                }
                                 function y(t) {
                                    for (var e, n, r = [], o = 0, i = t.length; o < i;)(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--) : r.push(e);
                                    return r
                                }
                                 function b(t) {
                                    return g(t, (function(t) {
                                        var e = "";
                                        return t > 65535 && (e += p((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + p(t)
                                    })).join("")
                                }
                                 function k(t, e) {
                                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                                }
                                 function w(t, e, n) {
                                    var r = 0;
                                    for (t = n ? l(t / 700) : t >> 1, t += l(t / e); t > 455; r += 36) t = l(t / 35);
                                    return l(r + 36 * t / (t + 38))
                                }
                                 function A(t) {
                                    var e, n, r, o, i, s, c, u, h, f, p, g = [],
                                        v = t.length,
                                        y = 0,
                                        m = 128,
                                        k = 72;
                                    for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && d("not-basic"), g.push(t.charCodeAt(r));
                                    for (o = n > 0 ? n + 1 : 0; o < v;) {
                                        for (i = y, s = 1, c = 36; o >= v && d("invalid-input"), ((u = (p = t.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || u > l((a - y) / s)) && d("overflow"), y += u * s, !(u < (h = c <= k ? 1 : c >= k + 26 ? 26 : c - k)); c += 36) s > l(a / (f = 36 - h)) && d("overflow"), s *= f;
                                        k = w(y - i, e = g.length + 1, 0 == i), l(y / e) > a - m && d("overflow"), m += l(y / e), y %= e, g.splice(y++, 0, m)
                                    }
                                    return b(g)
                                }
                                 function _(t) {
                                    var e, n, r, o, i, s, c, u, h, f, g, v, m, b, A, _ = [];
                                    for (v = (t = y(t)).length, e = 128, n = 0, i = 72, s = 0; s < v; ++s)(g = t[s]) < 128 && _.push(p(g));
                                    for (r = o = _.length, o && _.push("-"); r < v;) {
                                        for (c = a, s = 0; s < v; ++s)(g = t[s]) >= e && g < c && (c = g);
                                        for (c - e > l((a - n) / (m = r + 1)) && d("overflow"), n += (c - e) * m, e = c, s = 0; s < v; ++s)
                                            if ((g = t[s]) < e && ++n > a && d("overflow"), g == e) {
                                                for (u = n, h = 36; !(u < (f = h <= i ? 1 : h >= i + 26 ? 26 : h - i)); h += 36) A = u - f, b = 36 - f, _.push(p(k(f + A % b, 0))), u = l(A / b);
                                                _.push(p(k(u, 0))), i = w(n, m, r == o), n = 0, ++r
                                            }++n, ++e
                                    }
                                    return _.join("")
                                }
                                s = {
                                    version: "1.4.1",
                                    ucs2: {
                                        decode: y,
                                        encode: b
                                    },
                                    decode: A,
                                    encode: _,
                                    toASCII: function(t) {
                                        return v(t, (function(t) {
                                            return u.test(t) ? "xn--" + _(t) : t
                                        }))
                                    },
                                    toUnicode: function(t) {
                                        return v(t, (function(t) {
                                            return c.test(t) ? A(t.slice(4).toLowerCase()) : t
                                        }))
                                    }
                                }, void 0 === (o = function() {
                                    return s
                                }.call(e, n, e, t)) || (t.exports = o)
                            }()
                        }).call(this, n(37)(t), n(8))
                    }, function(t, e) {
                        t.exports = function(t) {
                            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                                enumerable: !0,
                                get: function() {
                                    return t.l
                                }
                            }), Object.defineProperty(t, "id", {
                                enumerable: !0,
                                get: function() {
                                    return t.i
                                }
                            }), t.webpackPolyfill = 1), t
                        }
                    }, function(t, e, n) {
                        e.decode = e.parse = n(39), e.encode = e.stringify = n(40)
                    }, function(t, e, n) {
                        function r(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        t.exports = function(t, e, n, i) {
                            e = e || "&", n = n || "=";
                            var s = {};
                            if ("string" != typeof t || 0 === t.length) return s;
                            var a = /\+/g;
                            t = t.split(e);
                            var c = 1e3;
                            i && "number" == typeof i.maxKeys && (c = i.maxKeys);
                            var u = t.length;
                            c > 0 && u > c && (u = c);
                            for (var h = 0; h < u; ++h) {
                                var f, l, p, d, g = t[h].replace(a, "%20"),
                                    v = g.indexOf(n);
                                v >= 0 ? (f = g.substr(0, v), l = g.substr(v + 1)) : (f = g, l = ""), p = decodeURIComponent(f), d = decodeURIComponent(l), r(s, p) ? o(s[p]) ? s[p].push(d) : s[p] = [s[p], d] : s[p] = d
                            }
                            return s
                        };
                        var o = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                    }, function(t, e, n) {
                        var r = function(t) {
                            switch (m(t)) {
                                case "string":
                                    return t;
                                case "boolean":
                                    return t ? "true" : "false";
                                case "number":
                                    return isFinite(t) ? t : "";
                                default:
                                    return ""
                            }
                        };
                        t.exports = function(t, e, n, a) {
                            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == m(t) ? i(s(t), (function(s) {
                                var a = encodeURIComponent(r(s)) + n;
                                return o(t[s]) ? i(t[s], (function(t) {
                                    return a + encodeURIComponent(r(t))
                                })).join(e) : a + encodeURIComponent(r(t[s]))
                            })).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : ""
                        };
                        var o = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        };
                         function i(t, e) {
                            if (t.map) return t.map(e);
                            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
                            return n
                        }
                        var s = Object.keys || function(t) {
                            var e = [];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                            return e
                        }
                    }, function(t, e, n) {
                        var r = y((function t(e, n) {
                                v(this, t), this.target = n, this.type = e
                            })),
                            o = function(t) {
                                function e(t, n) {
                                    var r;
                                    return v(this, e), (r = p(this, e, ["message", n])).data = t, r
                                }
                                return g(e, t), y(e)
                            }(r),
                            i = function(t) {
                                function e(t, n, r) {
                                    var o;
                                    return v(this, e), (o = p(this, e, ["close", r])).wasClean = r._closeFrameReceived && r._closeFrameSent, o.reason = n, o.code = t, o
                                }
                                return g(e, t), y(e)
                            }(r),
                            s = function(t) {
                                function e(t) {
                                    return v(this, e), p(this, e, ["open", t])
                                }
                                return g(e, t), y(e)
                            }(r),
                            a = function(t) {
                                function e(t, n) {
                                    var r;
                                    return v(this, e), (r = p(this, e, ["error", n])).message = t.message, r.error = t, r
                                }
                                return g(e, t), y(e)
                            }(r),
                            c = {
                                addEventListener: function(t, e) {
                                    function n(t) {
                                        e.call(this, new o(t, this))
                                    }
                                     function r(t, n) {
                                        e.call(this, new i(t, n, this))
                                    }
                                     function c(t) {
                                        e.call(this, new a(t, this))
                                    }
                                     function u() {
                                        e.call(this, new s(this))
                                    }
                                    "function" == typeof e && ("message" === t ? (n._listener = e, this.on(t, n)) : "close" === t ? (r._listener = e, this.on(t, r)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (u._listener = e, this.on(t, u)) : this.on(t, e))
                                },
                                removeEventListener: function(t, e) {
                                    for (var n = this.listeners(t), r = 0; r < n.length; r++) n[r] !== e && n[r]._listener !== e || this.removeListener(t, n[r])
                                }
                            };
                        t.exports = c
                    }, function(t, e, n) {
                        var r = n(0)("wx-ws:sender");
                        t.exports = y((function t(e) {
                            v(this, t), this._socket = e, this._queue = [], this._bufferedBytes = 0, this._deflating = !1
                        }), [{
                            key: "send",
                            value: function(t, e, n) {
                                r("send msg: ", t, " sender: ", this, this._deflating), this._deflating ? this.enqueue([this.dispatch, t, e, n]) : this.dispatch(t, e, n)
                            }
                        }, {
                            key: "dispatch",
                            value: function(t, e, n) {
                                r("dispatch msg: ", t, ", sender: ", this), this._deflating = !0, "function" == typeof e && (n = e, e = {}), this._deflating = !1, this._socket.send({
                                    data: t,
                                    success: function(t) {
                                        return n && n(null, t)
                                    },
                                    fail: function(t) {
                                        return n && n(t)
                                    }
                                }), this.dequeue()
                            }
                        }, {
                            key: "dequeue",
                            value: function() {
                                for (; !this._deflating && this._queue.length;) {
                                    var t = this._queue.shift();
                                    this._bufferedBytes -= t[1].length, Reflect.apply(t[0], this, t.slice(1))
                                }
                            }
                        }, {
                            key: "enqueue",
                            value: function(t) {
                                this._bufferedBytes += t[1].length, this._queue.push(t)
                            }
                        }])
                    }, function(t, e, n) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.reconstructPacket = e.deconstructPacket = void 0;
                        var r = n(14);
                        e.deconstructPacket = function(t) {
                            var e = [],
                                n = t.data,
                                o = t;
                            return o.data = function t(e, n) {
                                if (!e) return e;
                                if (r.isBinary(e)) {
                                    var o = {
                                        _placeholder: !0,
                                        num: n.length
                                    };
                                    return n.push(e), o
                                }
                                if (Array.isArray(e)) {
                                    for (var i = new Array(e.length), s = 0; s < e.length; s++) i[s] = t(e[s], n);
                                    return i
                                }
                                if ("object" == m(e) && !(e instanceof Date)) {
                                    var a = {};
                                    for (var c in e) e.hasOwnProperty(c) && (a[c] = t(e[c], n));
                                    return a
                                }
                                return e
                            }(n, e), o.attachments = e.length, {
                                packet: o,
                                buffers: e
                            }
                        }, e.reconstructPacket = function(t, e) {
                            return t.data = function t(e, n) {
                                if (!e) return e;
                                if (e && e._placeholder) return n[e.num];
                                if (Array.isArray(e))
                                    for (var r = 0; r < e.length; r++) e[r] = t(e[r], n);
                                else if ("object" == m(e))
                                    for (var o in e) e.hasOwnProperty(o) && (e[o] = t(e[o], n));
                                return e
                            }(t.data, e), t.attachments = void 0, t
                        }
                    }, function(t, e) {
                        function n(t) {
                            t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
                        }
                        t.exports = n, n.prototype.duration = function() {
                            var t = this.ms * Math.pow(this.factor, this.attempts++);
                            if (this.jitter) {
                                var e = Math.random(),
                                    n = Math.floor(e * this.jitter * t);
                                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                            }
                            return 0 | Math.min(t, this.max)
                        }, n.prototype.reset = function() {
                            this.attempts = 0
                        }, n.prototype.setMin = function(t) {
                            this.ms = t
                        }, n.prototype.setMax = function(t) {
                            this.max = t
                        }, n.prototype.setJitter = function(t) {
                            this.jitter = t
                        }
                    }])
                }))
            },
            3452: function(t, e, n) {
                n.d(e, {
                    MM: function() {
                        return f
                    },
                    PJ: function() {
                        return p
                    },
                    Xx: function() {
                        return d
                    },
                    et: function() {
                        return g
                    },
                    gv: function() {
                        return h
                    },
                    hP: function() {
                        return u
                    },
                    rh: function() {
                        return c
                    }
                });
                var r = n(8436),
                    o = n(6557),
                    i = n(6976),
                    s = n.n(i),
                    a = n(1139);
                s().getStorageSync("appid");
                 function c() {
                    s().getAccountInfoSync().miniProgram.appId;
                    return "wx8a1c8def35a6e32f"
                }
                 function u() {
                    return s().getStorageSync("accessToken") || null
                }
                 function h() {
                    var t = s().getStorageSync("userAuthInfo");
                    return t ? JSON.parse(t) : null
                }
                var f = function() {
                        var t = (0, o.Z)((0, r.Z)().m((function t() {
                            var e, n, o;
                            return (0, r.Z)().w((function(t) {
                                for (;;) switch (t.n) {
                                    case 0:
                                        if (s().getStorageSync("phoneCode")) {
                                            t.n = 1;
                                            break
                                        }
                                        console.log("handleUnauthorized=>用户删除了小程序，无本地缓存，或者全新用户，需要重新授权"), t.n = 4;
                                        break;
                                    case 1:
                                        return console.log("handleUnauthorized=>用户登录态过期，需要重新登录"), t.n = 2, s().login();
                                    case 2:
                                        return e = t.v, n = e.code, console.log("handleUnauthorized  login+>", n), t.n = 3, d(n);
                                    case 3:
                                        o = t.v, console.log("handleUnauthorized  =>", o);
                                    case 4:
                                        return t.a(2)
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    l = ((0, a.Yr)("POST /api/v1/auth/wx-login"), (0, a.Yr)("POST /api/v1/auth/wechat-login")),
                    p = function() {
                        var t = (0, o.Z)((0, r.Z)().m((function t(e) {
                            var n, o, i, a;
                            return (0, r.Z)().w((function(t) {
                                for (;;) switch (t.n) {
                                    case 0:
                                        return s().setStorageSync("loginCode", e), t.n = 1, l({
                                            appId: c() || "",
                                            loginCode: e
                                        });
                                    case 1:
                                        if (n = t.v, console.log("~~~~~~login~~~~~~~~~in", n), console.log("~~~~~~login~~~~~~~~~in~~~~JSON", JSON.stringify(n), "loginCode=>", e, "appId=>", c()), i = (o = n || {}).access_token, a = o.refresh_token, !i) {
                                            t.n = 2;
                                            break
                                        }
                                        return s().setStorageSync("accessToken", i), s().setStorageSync("refreshToken", a), t.a(2, !0);
                                    case 2:
                                        return t.a(2, !1);
                                    case 3:
                                        return t.a(2)
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    d = function() {
                        var t = (0, o.Z)((0, r.Z)().m((function t(e) {
                            var n, o, i, a, h;
                            return (0, r.Z)().w((function(t) {
                                for (;;) switch (t.n) {
                                    case 0:
                                        if (s().setStorageSync("loginCode", e), n = !0, u()) {
                                            t.n = 1;
                                            break
                                        }
                                        n = !1, t.n = 3;
                                        break;
                                    case 1:
                                        return t.n = 2, l({
                                            appId: c() || "",
                                            loginCode: e
                                        });
                                    case 2:
                                        o = t.v, console.log("~~~~~~checkLogin~~~~~~~~~", JSON.stringify(o)), a = (i = o || {}).access_token, h = i.refresh_token, a ? (s().setStorageSync("accessToken", a), s().setStorageSync("refreshToken", h), n = !0) : n = !1;
                                    case 3:
                                        return t.a(2, n)
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    g = function() {
                        var t = (0, o.Z)((0, r.Z)().m((function t() {
                            return (0, r.Z)().w((function(t) {
                                for (;;) switch (t.n) {
                                    case 0:
                                        return t.a(2, (0, a.F7)().then((function(t) {
                                            console.log("getUserAuth", t), s().setStorageSync("userAuthInfo", JSON.stringify(t || {}))
                                        })).catch((function(t) {
                                            s().setStorageSync("userAuthInfo", JSON.stringify({}))
                                        })))
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
            },
            7160: function(t, e, n) {
                n.d(e, {
                    UY: function() {
                        return c
                    },
                    c4: function() {
                        return a
                    }
                });
                var r = n(5979),
                    o = n(199),
                    i = n(6976),
                    s = n.n(i),
                    a = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pages",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            o = u(t, e);
                        s().navigateTo((0, r.Z)({
                            url: o
                        }, n))
                    },
                    c = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pages",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.iY.Home,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = u(t, e);
                        s().reLaunch((0, r.Z)({
                            url: i
                        }, n))
                    },
                    u = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pages",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return "/".concat(t, "/").concat(e)
                    }
            },
            6836: function(t, e, n) {
                n.d(e, {
                    n: function() {
                        return a
                    }
                });
                var r = n(6483),
                    o = n.n(r),
                    i = n(1414),
                    s = n.n(i);
                o().locale(s());
                var a = function(t) {
                    var e = o()(),
                        n = o()(t);
                    return t ? n.isSame(e, "day") ? n.format("HH:mm") : n.isSame(e.subtract(1, "days"), "day") ? "昨天 ".concat(n.format("HH:mm")) : n.isSame(e.subtract(2, "days"), "days") ? n.format("dddd") : n.isSame(e.subtract(7, "days"), "days") ? "".concat(n.format("dddd"), " ").concat(n.format("HH:mm")) : n.format("YYYY年MM月DD日") : ""
                }
            },
            463: function(t, e, n) {
                n.d(e, {
                    l: function() {
                        return k
                    }
                });
                var r = n(8608),
                    o = n(6409),
                    i = n(7335),
                    s = n(8436),
                    a = n(6557),
                    c = n(7448);
                 function u() {
                    var t = this;
                    t.props.eventOptions, t._socket = function(t, e) {
                        return (0, c.io)(t, e)
                    }(t.config.url, t.config.options), t.handleOnConnect = function(t) {
                        console.log("[ws]talk connect connect success", t)
                    }, t.handleOnDisconnect = function(t) {
                        console.log("[ws]close talk connect", t)
                    }, t._socket.on("connect", t.handleOnConnect), t._socket.on("roomSendMsgAck", t.handleOnConnect), t._socket.on("disconnect", t.handleOnDisconnect)
                }
                 function h() {
                    var t = this;
                    t._socket && (t._socket.disconnect(), t._socket = null)
                }
                 function f(t) {
                    return l.apply(this, arguments)
                }
                 function l() {
                    return (l = (0, a.Z)((0, s.Z)().m((function t(e) {
                        var n, r;
                        return (0, s.Z)().w((function(t) {
                            for (;;) switch (t.n) {
                                case 0:
                                    if ((n = this).props.eventOptions, n._socket) {
                                        t.n = 1;
                                        break
                                    }
                                    return t.a(2, !1);
                                case 1:
                                    if (n._socket.io.off("reconnect", n.handleOnReconnect), n._socket.connected) {
                                        t.n = 3;
                                        break
                                    }
                                    return t.n = 2, g(n);
                                case 2:
                                    if (t.v) {
                                        t.n = 3;
                                        break
                                    }
                                    return console.error("connected failed"), console.log("[ws]connected failed, cannot send text", "WARN"), t.a(2, !1);
                                case 3:
                                    return r = function() {
                                        var t = (0, a.Z)((0, s.Z)().m((function t() {
                                            return (0, s.Z)().w((function(t) {
                                                for (;;) switch (t.n) {
                                                    case 0:
                                                        if (n._socket) {
                                                            t.n = 1;
                                                            break
                                                        }
                                                        return t.a(2);
                                                    case 1:
                                                        n._socket.off("error", n.handleOnError), n.handleOnError = function(t) {
                                                            console.log("[ws] errno: ".concat(t.errno, ", reason is: ").concat(t.errmsg), "ERROR")
                                                        }, n._socket.on("error", n.handleOnError), n._socket.emit("roomSendMsg", e), console.log("[ws]send info: ".concat(e), "INFO");
                                                    case 2:
                                                        return t.a(2)
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(), n.handleOnReconnect = function() {
                                        console.log("[ws]reconnect and resend...", "DEBUG")
                                    }, n._socket.io.on("reconnect", n.handleOnReconnect), r(), t.a(2, !0)
                            }
                        }), t, this)
                    })))).apply(this, arguments)
                }
                 function p(t) {
                    return d.apply(this, arguments)
                }
                 function d() {
                    return (d = (0, a.Z)((0, s.Z)().m((function t(e) {
                        return (0, s.Z)().w((function(t) {
                            for (;;) switch (t.n) {
                                case 0:
                                    return t.a(2, new Promise((function(t) {
                                        setTimeout((function() {
                                            t()
                                        }), e)
                                    })))
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                 function g(t) {
                    return v.apply(this, arguments)
                }
                 function v() {
                    return (v = (0, a.Z)((0, s.Z)().m((function t(e) {
                        var n, r, o, i, a;
                        return (0, s.Z)().w((function(t) {
                            for (;;) switch (t.n) {
                                case 0:
                                    if (o = null !== (n = e.config.maxRetryTime) && void 0 !== n ? n : 0, i = null !== (r = e.config.retryTimeInterval) && void 0 !== r ? r : 0, e._socket) {
                                        t.n = 1;
                                        break
                                    }
                                    return t.a(2, !1);
                                case 1:
                                    a = 0;
                                case 2:
                                    if (!(a < o)) {
                                        t.n = 5;
                                        break
                                    }
                                    return t.n = 3, p(i);
                                case 3:
                                    if (console.log("[ws]ws not connected, retry check connect...", "INFO"), !e._socket.connected) {
                                        t.n = 4;
                                        break
                                    }
                                    return t.a(2, !0);
                                case 4:
                                    a++, t.n = 2;
                                    break;
                                case 5:
                                    return t.a(2, !1)
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                 function y() {
                    return m.apply(this, arguments)
                }
                 function m() {
                    return (m = (0, a.Z)((0, s.Z)().m((function t() {
                        var e;
                        return (0, s.Z)().w((function(t) {
                            for (;;) switch (t.n) {
                                case 0:
                                    (e = this)._socket && (e._socket.disconnect(), e._socket.off("connect", e.handleOnConnect), e._socket.off("disconnect", e.handleOnDisconnect), e._socket.off("error", e.handleOnError), e._socket.io.off("reconnect", e.handleOnReconnect));
                                case 1:
                                    return t.a(2)
                            }
                        }), t, this)
                    })))).apply(this, arguments)
                }
                var b = (0, r.Z)((function t(e, n) {
                        (0, o.Z)(this, t), (0, i.Z)(this, "start", void 0), (0, i.Z)(this, "stop", void 0), (0, i.Z)(this, "sendText", void 0), (0, i.Z)(this, "release", void 0), (0, i.Z)(this, "_socket", void 0), (0, i.Z)(this, "config", void 0), (0, i.Z)(this, "props", void 0), this.start = u.bind(this), this.stop = h.bind(this), this.sendText = f.bind(this), this.release = y.bind(this), this._socket = null, this.config = e, this.props = n
                    })),
                    k = function(t, e) {
                        return new b(t, e)
                    }
            },
            1504: function(t, e, n) {
                n.d(e, {
                    G3: function() {
                        return c
                    },
                    GC: function() {
                        return u
                    }
                });
                var r = n(5979),
                    o = n(1032),
                    i = n(3452),
                    s = new o.ZP({
                        host: "cn-beijing.log.aliyuncs.com",
                        project: "aicplatform-cluster",
                        logstore: "character-ip-terminal",
                        time: 1,
                        count: 10,
                        topic: "mini_program",
                        source: "source",
                        tags: {
                            tags: "tags"
                        }
                    }),
                    a = function() {
                        var t;
                        return {
                            APIVersion: "",
                            __topic__: "mini_program",
                            userid: null === (t = (0, i.gv)()) || void 0 === t ? void 0 : t.id,
                            appid: "ip-kuakuaqun",
                            app_type: "mini_program",
                            deviceid: ""
                        }
                    },
                    c = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        s.send((0, r.Z)((0, r.Z)({}, a()), {}, {
                            event: t,
                            value: e
                        }, n))
                    },
                    u = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        s.send((0, r.Z)((0, r.Z)({}, a()), {}, {
                            event: t,
                            value: 1
                        }, e))
                    }
            },
            2930: function(t, e, n) {
                n.d(e, {
                    D: function() {
                        return i
                    }
                });
                for (var r = [], o = 0; o < 256; o++) r[o] = (o < 16 ? "0" : "") + o.toString(16);
                 function i() {
                    var t = 4294967295 * Math.random() | 0,
                        e = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        o = 4294967295 * Math.random() | 0;
                    return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & n | 128] + r[n >> 8 & 255] + "-" + r[n >> 16 & 255] + r[n >> 24 & 255] + r[255 & o] + r[o >> 8 & 255] + r[o >> 16 & 255] + r[o >> 24 & 255]).toUpperCase()
                }
            },
            9814: function(t, e, n) {
                n.r(e)
            },
            960: function(t, e, n) {
                n.r(e)
            }
        }
    ]);