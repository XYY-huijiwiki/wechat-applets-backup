
(wx.webpackJsonp = wx.webpackJsonp || []).push([
    [104], {
        8034: function(e, s, a) {
            var t = a(7842),
                n = a(9379),
                l = a(5544),
                i = a(8761),
                c = a(9617),
                o = a(8816),
                r = a(118),
                d = a(758),
                u = a.n(d),
                m = a(6540),
                h = a.p + "assets/images/star.png",
                _ = a.p + "assets/red-theme/logo.png",
                p = a(7316),
                A = a(8428),
                S = (a(5927), a(4015)),
                x = a(2950),
                f = a.p + "assets/images/make_header.png",
                j = a.p + "assets/red-theme/make_head.png",
                g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgB1ZGxDcIwEEW/DQNQo4SOTAARMIN3QUyAR2AZeugisUEoIekzwc9JaaLIic5d8irr++5JdwfMkuPZXfOLu2tqbSgkaEh4jWQVCuv/t9gmmZGnT3YZql/5jhJ0kvKlkYwKtJJJwVCSpvumkvH6/xYarOxVIM0GsRzkEnJW5ifnEcsymtfBlGxka7dP8Xxg9rRxvUQ6qutiOAAAAABJRU5ErkJggg==",
                v = a(9392),
                N = function(e) {
                    var s = e.show,
                        a = void 0 === s || s,
                        t = e.isShake,
                        n = void 0 !== t && t,
                        i = e.onCancel,
                        c = e.item,
                        o = (0, m.useState)(a),
                        r = (0, l.A)(o, 2),
                        d = r[0],
                        u = r[1],
                        h = (0, m.useState)(""),
                        _ = (0, l.A)(h, 2),
                        p = _[0],
                        A = _[1],
                        S = (0, m.useState)(!1),
                        x = (0, l.A)(S, 2),
                        f = x[0],
                        j = x[1];
                    return (0, m.useEffect)((function() {
                        A(c.value)
                    }), [c]), (0, m.useEffect)((function() {
                        u(a)
                    }), [a]), (0, m.useEffect)((function() {
                        j(n)
                    }), [n]), {
                        handles: {
                            cancelClick: function() {
                                A(""), u(!1), null == i || i()
                            }
                        },
                        editModalStatus: d,
                        shake: f,
                        value: p,
                        setValue: A,
                        setShake: j
                    }
                },
                k = a.p + "assets/images/name_toast.svg",
                w = a.p + "assets/red-theme/name_toast.svg",
                C = a(4848),
                y = function(e) {
                    var s = e.show,
                        a = void 0 === s || s,
                        t = e.item,
                        n = e.onCancel,
                        i = e.onSave,
                        c = e.onInput,
                        o = N({
                            show: a,
                            item: t,
                            onCancel: n,
                            onSave: i
                        }),
                        u = o.handles,
                        h = o.editModalStatus,
                        _ = o.shake,
                        A = o.setShake,
                        S = o.value,
                        x = o.setValue,
                        g = (0, m.useState)(!1),
                        v = (0, l.A)(g, 2);
                    v[0], v[1], (0, d.useDidShow)((function() {
                        I()
                    }));
                    var y = (0, m.useState)(""),
                        b = (0, l.A)(y, 2),
                        R = b[0],
                        E = b[1],
                        I = function() {
                            (0, p.aR)(), E("calc(358px + 106px + 20px + env(safe-area-inset-bottom))")
                        };
                    return (0, C.jsx)(C.Fragment, {
                        children: h ? (0, C.jsx)(r.Ss, {
                            className: "make_wrap",
                            children: (0, C.jsxs)(r.Ss, {
                                className: "edit_main",
                                style: {
                                    height: R
                                },
                                children: [(0, C.jsx)(r.Ss, {
                                    className: "make_header",
                                    children: (0, C.jsx)(r._V, {
                                        mode: "heightFix",
                                        src: (0, p.Ht)() ? j : f
                                    })
                                }), (0, C.jsxs)(r.Ss, {
                                    className: "edit_title",
                                    children: [(0, C.jsx)(r._V, {
                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dLBCYAwEETRWSuwhLRiJ5ZgB9qRlmAHlmALdrBOYA9eBCErISEfhlzCOy1QXarawytigTu5Dak9sNiIlBqWGTNwMWyFR/F4ucPQGR419Hd0evvX4WMicvEZuJ0LKLYbmXTGsrBbyG4AAAAASUVORK5CYII=",
                                        onClick: function() {
                                            return u.cancelClick()
                                        }
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "edit_title_title",
                                        children: ["编辑", t.title]
                                    }), (0, C.jsx)(r.Ss, {
                                        className: "save",
                                        onClick: function() {
                                            return i({
                                                text: S
                                            }), void n()
                                        },
                                        children: "保存"
                                    })]
                                }), (0, C.jsx)(r.Ss, {
                                    className: "make_all",
                                    children: (0, C.jsx)(r.Ss, {
                                        className: "edit_content",
                                        children: (0, C.jsx)(r.Ss, {
                                            children: "string" === t.type ? (0, C.jsxs)(r.Ss, {
                                                children: [(0, C.jsxs)(r.Ss, {
                                                    className: "tips",
                                                    children: [(0, C.jsx)(r.Ss, {
                                                        className: "name_toast",
                                                        children: (0, C.jsx)(r._V, {
                                                            src: (0, p.jl)() ? w : k
                                                        })
                                                    }), (0, C.jsx)(r.Ss, {
                                                        className: "toast_info",
                                                        children: "只允许输入中文字，最多只能输入4个字"
                                                    })]
                                                }), (0, C.jsx)(r.pd, {
                                                    focus: (0, p.aR)(),
                                                    onBlur: function() {
                                                        return function() {
                                                            if ((0, p.aR)()) {
                                                                E("calc(250px + 90px + 20px + env(safe-area-inset-bottom))"), c("blur")
                                                            }
                                                        }()
                                                    },
                                                    onFocus: function() {
                                                        (0, p.aR)() && (E(R), c("focus"))
                                                    },
                                                    placeholder: t.placeholder,
                                                    className: _ ? "error" : "",
                                                    value: S,
                                                    onInput: function(e) {
                                                        null == c || c(), A(!1);
                                                        var s = e.detail.value.replace(/[^\u4e00-\u9fa5]/g, "");
                                                        x(s.slice(0, 4))
                                                    }
                                                })]
                                            }) : ""
                                        })
                                    })
                                })]
                            })
                        }) : null
                    })
                },
                b = function(e) {
                    var s = e.onSuccess,
                        a = e.show,
                        t = void 0 === a || a,
                        i = e.details,
                        c = e.isShake,
                        o = void 0 !== c && c,
                        d = (e.onInput, e.onCancel),
                        h = e.redemptionId,
                        _ = (0, x.A)({
                            onSuccess: s,
                            show: t,
                            isShake: o,
                            onCancel: d,
                            details: i
                        }),
                        A = _.handles,
                        S = _.isShow,
                        N = _.setIsShow,
                        k = function() {
                            return "ios" === u().getSystemInfoSync().platform
                        },
                        w = (0, m.useState)(0),
                        b = (0, l.A)(w, 2),
                        R = b[0],
                        E = b[1],
                        I = (0, m.useState)(!1),
                        B = (0, l.A)(I, 2),
                        V = B[0],
                        T = B[1],
                        U = (0, m.useState)({}),
                        D = (0, l.A)(U, 2),
                        M = D[0],
                        Q = D[1],
                        F = (0, m.useState)(),
                        H = (0, l.A)(F, 2),
                        J = H[0],
                        Y = H[1],
                        G = (0, m.useState)(""),
                        L = (0, l.A)(G, 2),
                        O = (L[0], L[1]),
                        X = (0, m.useState)([]),
                        P = (0, l.A)(X, 2),
                        W = (P[0], P[1], (0, m.useState)([])),
                        Z = (0, l.A)(W, 2),
                        K = (Z[0], Z[1], (0, m.useState)([])),
                        q = (0, l.A)(K, 2),
                        z = (q[0], q[1], function(e, s) {
                            var a = (0, n.A)((0, n.A)({
                                show: !0
                            }, e), {}, {
                                index: s
                            });
                            console.log("params", a), O((0, n.A)((0, n.A)({
                                show: !0
                            }, e), {}, {
                                index: e.options.length / 2
                            }))
                        });
                    return (0, C.jsxs)(C.Fragment, {
                        children: [S ? (0, C.jsx)(r.Ss, {
                            className: "make_wrap",
                            children: (0, C.jsxs)(r.Ss, {
                                className: "make_main",
                                children: [(0, C.jsx)(r.Ss, {
                                    className: "make_header",
                                    children: (0, C.jsx)(r._V, {
                                        mode: "heightFix",
                                        src: (0, p.Ht)() ? j : f
                                    })
                                }), (0, C.jsxs)(r.Ss, {
                                    className: "make_title",
                                    children: ["编辑定制内容", (0, C.jsx)(r._V, {
                                        src: v,
                                        onClick: function() {
                                            return A.cancelClick()
                                        }
                                    })]
                                }), (0, C.jsxs)(r.Ss, {
                                    className: "make_all",
                                    children: [(0, C.jsx)(r.Ss, {
                                        className: "make_content_scroll",
                                        children: (0, C.jsx)(r.Ss, {
                                            className: "make_content",
                                            children: null == i ? void 0 : i.payloadSchemas.map((function(e, s) {
                                                return (0, C.jsxs)(r.Ss, {
                                                    children: [(0, C.jsxs)(r.Ss, {
                                                        className: "single_make_content",
                                                        children: [(0, C.jsx)(r.Ss, {
                                                            className: "make_item_title",
                                                            children: e.title
                                                        }), (0, C.jsx)(r.Ss, {
                                                            style: {
                                                                width: "calc(100% - 112rpx)"
                                                            },
                                                            children: "string" === e.type ? (0, C.jsxs)(r.Ss, {
                                                                className: "placeholder_item",
                                                                onClick: function() {
                                                                    return function(e, s) {
                                                                        "string" !== e.type ? z(e, s) : (N(!1), T(!0)), Q(e), E(s)
                                                                    }(e, s)
                                                                },
                                                                children: [e.value ? (0, C.jsx)(r.Ss, {
                                                                    className: "make_item_placeholder make_item_value",
                                                                    children: e.value
                                                                }) : (0, C.jsx)(r.Ss, {
                                                                    className: "make_item_placeholder",
                                                                    children: e.placeholder
                                                                }), (0, C.jsx)(r._V, {
                                                                    className: "make_item_img",
                                                                    src: g
                                                                })]
                                                            }) : (0, C.jsxs)(r.Ss, {
                                                                className: "placeholder_item",
                                                                children: [(0, C.jsx)(r.LC, {
                                                                    className: "my-picker",
                                                                    mode: e.type,
                                                                    range: e.options,
                                                                    onChange: function(a) {
                                                                        return function(e, s, a) {
                                                                            "date" === a.type ? (Y(e.detail.value), i.payloadSchemas[s].value = e.detail.value) : (Y(a.options[e.detail.value]), i.payloadSchemas[s].value = a.options[e.detail.value])
                                                                        }(a, s, e)
                                                                    },
                                                                    value: e.value,
                                                                    children: J ? (0, C.jsx)(r.Ss, {
                                                                        className: "make_item_value",
                                                                        children: J
                                                                    }) : (0, C.jsx)(r.Ss, {
                                                                        className: "make_item_placeholder",
                                                                        children: e.placeholder
                                                                    })
                                                                }), (0, C.jsx)(r._V, {
                                                                    className: "make_item_img",
                                                                    src: g
                                                                })]
                                                            })
                                                        })]
                                                    }), (null == i ? void 0 : i.payloadSchemas.length) - 1 === s ? "" : (0, C.jsx)(r.Ss, {
                                                        className: "make_item_line"
                                                    })]
                                                })
                                            }))
                                        })
                                    }), null != i && i.price ? (0, C.jsxs)(r.Ss, {
                                        className: "postion_button",
                                        children: [k() ? (0, C.jsx)(r.Ss, {
                                            className: "is_ios_make is_ios_tip",
                                            children: "小程序暂不支持苹果手机生成卡牌，请点击下方按钮前往生成卡牌页面"
                                        }) : "", k() && !h ? (0, C.jsx)(r.Ss, {
                                            className: "start_make is_ios_make",
                                            onClick: function() {
                                                return A.clickMakeHandle("pay")
                                            },
                                            children: (0, C.jsx)(r.Ss, {
                                                children: "前往生成卡牌页面"
                                            })
                                        }) : (0, C.jsxs)(r.Ss, {
                                            className: "start_make",
                                            onClick: function() {
                                                return A.clickMakeHandle(h ? "redemption" : "pay", h)
                                            },
                                            children: ["提交并生成卡牌 ", h ? "" : "¥".concat((((null == i ? void 0 : i.price) || 0) / 100).toFixed(2))]
                                        })]
                                    }) : (0, C.jsx)(r.Ss, {
                                        className: "postion_button",
                                        children: (0, C.jsx)(r.Ss, {
                                            className: "start_make",
                                            onClick: function() {
                                                return A.clickMakeHandle("free")
                                            },
                                            children: "免费提交并生成卡牌"
                                        })
                                    })]
                                })]
                            })
                        }) : null, (0, C.jsx)(y, {
                            details: i,
                            item: M,
                            show: V,
                            onCancel: function() {
                                N(!0), T(!1)
                            },
                            onInput: function(e) {},
                            onSave: function(e) {
                                var s = e.text,
                                    a = void 0 === s ? "" : s;
                                i.payloadSchemas[R].value = a
                            }
                        })]
                    })
                },
                R = a(4747),
                E = a(7375),
                I = a(8414),
                B = a(6743),
                V = (0, S.PA)((function() {
                    var e, s, a = (0, m.useState)(0),
                        t = (0, l.A)(a, 2),
                        S = t[0],
                        x = t[1],
                        f = (0, m.useState)(!1),
                        j = (0, l.A)(f, 2),
                        g = j[0],
                        v = j[1],
                        N = (0, d.useRouter)().params,
                        k = N.name,
                        w = void 0 === k ? "" : k,
                        y = N.redemptionId,
                        V = void 0 === y ? "" : y,
                        T = ((0, m.useRef)((0, I.v4)()), (0, m.useRef)(), (0, m.useState)(!1)),
                        U = (0, l.A)(T, 2),
                        D = U[0],
                        M = U[1];
                    (0, d.useDidShow)((function() {}));
                    var Q = (0, m.useState)(!1),
                        F = (0, l.A)(Q, 2),
                        H = (F[0], F[1]),
                        J = (0, m.useState)(),
                        Y = (0, l.A)(J, 2),
                        G = Y[0],
                        L = Y[1],
                        O = (0, m.useState)(!1),
                        X = (0, l.A)(O, 2),
                        P = X[0],
                        W = X[1],
                        Z = (0, m.useState)(""),
                        K = (0, l.A)(Z, 2),
                        q = K[0],
                        z = K[1],
                        $ = (0, m.useRef)(""),
                        ee = (0, m.useState)({}),
                        se = (0, l.A)(ee, 2),
                        ae = se[0],
                        te = se[1];
                    (0, m.useEffect)((function() {
                        return console.log("templateDetail-useEffect"), L((0, R.E4)()), A.A.setTemplateDetail({
                                name: w
                            }).then((function(e) {
                                var s = e.payloadSchemas.map((function(e) {
                                        return e.title
                                    })).toString().replace(/,/g, "、"),
                                    a = (0, n.A)((0, n.A)({}, e), {}, {
                                        schemasTitle: s
                                    });
                                te(a)
                            })),
                            function() {
                                console.log("templateDetail-return")
                            }
                    }), []), (0, d.useDidShow)((function() {
                        console.log("templateDetail-useDidShow")
                    })), (0, d.useDidHide)((function() {
                        console.log("templateDetail-useDidHide")
                    }));
                    return (0, d.useShareAppMessage)((function() {
                        return {
                            title: "快来火花杂物社一起创作吧~",
                            path: o.Fd.TemplateDetail + "?name=".concat(w)
                        }
                    })), (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(i.A, {
                            onClick: function() {
                                u().switchTab({
                                    url: o.Fd.Home
                                })
                            }
                        }), (0, C.jsxs)(C.Fragment, {
                            children: [(0, C.jsxs)(r.Ss, {
                                className: "template_detail_page",
                                children: [(0, C.jsx)(r.Ss, {
                                    className: "template_detail_page_banner",
                                    children: (0, C.jsx)(r.RC, {
                                        className: "template_detail_page_banner_swiper",
                                        circular: !0,
                                        autoplay: !1,
                                        current: S,
                                        onChange: function(e) {
                                            x(e.detail.current)
                                        },
                                        indicatorDots: !0,
                                        indicatorColor: "rgba(255, 255, 255, 0.50)",
                                        indicatorActiveColor: "rgba(255, 255, 255, 11)",
                                        children: (0, C.jsx)(r.wu, {
                                            className: "template_detail_page_banner_swiper_item",
                                            children: (0, C.jsx)(r.Ce, {
                                                src: (null == ae ? void 0 : ae.videoUrl) || "",
                                                className: "main_video",
                                                objectFit: "contain",
                                                autoplay: !0,
                                                loop: !0,
                                                controls: !1,
                                                autoPauseIfNavigate: !0,
                                                enablePlayGesture: !0,
                                                poster: (null == ae ? void 0 : ae.coverUrl) || "",
                                                enableProgressGesture: !1
                                            }, null == ae ? void 0 : ae.name)
                                        })
                                    })
                                }), (0, C.jsxs)(r.Ss, {
                                    className: "template_detail_page_info",
                                    children: [(0, C.jsx)(r._V, {
                                        mode: "heightFix",
                                        className: "template_detail_page_info_star",
                                        src: (0, p.Ht)() ? _ : h
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_header",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "template_detail_page_info_icon",
                                            children: (0, C.jsx)(r._V, {
                                                src: null == ae ? void 0 : ae.avatarUrl
                                            })
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "template_detail_page_info_title",
                                            children: null == ae ? void 0 : ae.displayName
                                        })]
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_desc",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "desc_title",
                                            children: "主题："
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "desc_content",
                                            children: (null == ae || null === (e = ae.themes) || void 0 === e ? void 0 : e[0]) || ""
                                        })]
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_desc",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "desc_title",
                                            children: "动画："
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "desc_content",
                                            children: (null == ae || null === (s = ae.ipNames) || void 0 === s ? void 0 : s[0]) || ""
                                        })]
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_desc",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "desc_title",
                                            children: "介绍："
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "desc_content",
                                            children: (null == ae ? void 0 : ae.description) || ""
                                        })]
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_desc",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "desc_title",
                                            children: "台词："
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "desc_content",
                                            dangerouslySetInnerHTML: {
                                                __html: function(e) {
                                                    if (e) {
                                                        return e.replace(/\{(.*?)\}/g, "<View>$1</View>")
                                                    }
                                                }(null == ae ? void 0 : ae.subtitle)
                                            }
                                        })]
                                    }), (0, C.jsxs)(r.Ss, {
                                        className: "template_detail_page_info_desc",
                                        children: [(0, C.jsx)(r.Ss, {
                                            className: "desc_title",
                                            children: "定制："
                                        }), (0, C.jsx)(r.Ss, {
                                            className: "desc_content",
                                            children: (null == ae ? void 0 : ae.schemasTitle) || ""
                                        })]
                                    })]
                                }), (0, C.jsxs)(r.Ss, {
                                    className: "template_detail_page_use_btn_wrap",
                                    children: ["aigc+redemption" === (null == ae ? void 0 : ae.type) && 0 == ae.redemptionCodeQuantity ? (0, C.jsx)(r.Ss, {
                                        className: "template_detail_page_use_btn dis",
                                        children: "已售罄"
                                    }) : null != ae && ae.price ? (0, C.jsx)(r.Ss, {
                                        className: "template_detail_page_use_btn",
                                        onClick: function() {
                                            G ? v(!0) : H(!0)
                                        },
                                        children: "开始定制"
                                    }) : (0, C.jsx)(r.Ss, {
                                        className: "template_detail_page_use_btn",
                                        onClick: function() {
                                            G ? v(!0) : H(!0)
                                        },
                                        children: "免费定制"
                                    }), (0, C.jsx)(E.A, {
                                        onCancel: function() {
                                            H(!1)
                                        },
                                        onSuccess: function() {
                                            L((0, R.E4)())
                                        }
                                    })]
                                })]
                            }), (0, C.jsx)(c.A, {})]
                        }), (0, C.jsx)(b, {
                            show: g,
                            isShake: P,
                            details: ae,
                            redemptionId: V,
                            onSuccess: function(e) {
                                (0, p.aR)() && function(e) {
                                    if (null == e || !e.id) return u().showToast({
                                        title: "生成任务失败",
                                        icon: "none"
                                    }), void W(!0);
                                    z(null == e ? void 0 : e.id), $.current = null == e ? void 0 : e.id, setTimeout((function() {
                                        M(!0)
                                    }), 200)
                                }(e)
                            },
                            onInput: function() {
                                W(!1)
                            },
                            onCancel: function() {
                                W(!1), v(!1)
                            }
                        }), (0, C.jsx)(B.A, {
                            show: D,
                            content: "即将打开“火种杂物社”客服",
                            btnText: q || $.current,
                            onFinish: function() {
                                M(!1), v(!1)
                            }
                        })]
                    })
                }));
            V.enableShareTimeline = !0, V.enableShareAppMessage = !0, Page((0, t.createPageConfig)(V, "pages/TemplateDetail/index", {
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
            return s = 8034, e(e.s = s);
            var s
        })), e.O()
    }
]);