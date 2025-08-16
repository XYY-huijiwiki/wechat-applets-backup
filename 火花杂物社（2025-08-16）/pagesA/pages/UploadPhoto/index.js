
require("../../sub-vendors.js"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [14], {
        7391: function(e, s, n) {
            var a = n(7842),
                t = n(675),
                c = n(467),
                l = n(9379),
                i = n(5544),
                o = n(118),
                r = n(6540),
                u = n(758),
                m = n.n(u),
                d = n.p + "assets/images/tt_correct.png",
                g = n.p + "assets/images/tt_cat.png",
                p = n.p + "assets/images/tt_big_angle.png",
                h = n.p + "assets/images/tt_big_mask.png",
                S = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgMjggMiIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0iTTAgMUgyOCIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfNDYwNV81NDg4KSIvPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQ2MDVfNTQ4OCIgeDE9IjAiIHkxPSIxLjUiIHgyPSIyOCIgeTI9IjEuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQUFBQkIzIiBzdG9wLW9wYWNpdHk9IjAuNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBQUFCQjIiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+Cjwvc3ZnPg==",
                f = n.p + "assets/images/tt_tips_title.png",
                x = n.p + "assets/images/upload/more.png",
                j = n.p + "assets/red-theme/upload/more.png",
                N = n.p + "assets/images/upload/upload_btn.png",
                v = n.p + "assets/red-theme/upload/upload_btn.png",
                I = n(9392),
                _ = n(4848),
                A = function(e) {
                    var s = e.isOpen,
                        n = e.details,
                        a = e.onClose,
                        t = e.goPay;
                    return s ? (0, _.jsx)(o.Ss, {
                        className: "modal-overlay",
                        children: (0, _.jsxs)(o.Ss, {
                            className: "modal-content",
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: [(0, _.jsx)(o._V, {
                                src: I,
                                className: "close-button",
                                onClick: a,
                                children: "×"
                            }), (0, _.jsx)(o.Ss, {
                                className: "action_btn pay",
                                onClick: t,
                                children: null != n && n.price ? "付费制作¥".concat((((null == n ? void 0 : n.price) || 0) / 100).toFixed(2)) : "免费制作"
                            })]
                        })
                    }) : null
                },
                b = n(8816),
                y = n(7375),
                C = n(8428),
                P = n(4747),
                k = n(2950),
                w = n(3835),
                T = n(2257),
                V = n(8761),
                M = n(7316),
                Z = n(6743),
                F = function() {
                    var e, s = (0, r.useState)(""),
                        n = (0, i.A)(s, 2),
                        a = n[0],
                        I = n[1],
                        F = (0, r.useState)(!1),
                        H = (0, i.A)(F, 2),
                        W = H[0],
                        D = H[1],
                        z = (0, r.useState)({}),
                        B = (0, i.A)(z, 2),
                        R = B[0],
                        G = B[1],
                        O = (0, r.useState)(!1),
                        U = (0, i.A)(O, 2),
                        Y = U[0],
                        E = U[1],
                        Q = (0, r.useState)(),
                        J = (0, i.A)(Q, 2),
                        L = J[0],
                        X = J[1],
                        K = (0, u.useRouter)().params.name,
                        q = void 0 === K ? "" : K,
                        $ = (0, r.useRef)(""),
                        ee = (0, r.useState)(!1),
                        se = (0, i.A)(ee, 2),
                        ne = se[0],
                        ae = se[1],
                        te = (0, k.A)({
                            details: R,
                            onCancel: function() {
                                E(!1)
                            },
                            onSuccess: function(e) {
                                if (null == e || !e.id) return m().showToast({
                                    title: "生成任务失败",
                                    icon: "none"
                                }), void E(!1);
                                $.current = null == e ? void 0 : e.id, setTimeout((function() {
                                    ae(!0)
                                }), 200)
                            }
                        }).handles;
                    (0, u.useShareAppMessage)((function() {
                        var e;
                        return {
                            title: "快来火花杂物社一起创作吧~",
                            path: "".concat(b.g5.UploadPhoto, "?name=").concat(q, "&channel=").concat((null === (e = m().getLaunchOptionsSync().query) || void 0 === e ? void 0 : e.channel) || "")
                        }
                    }));
                    var ce = (0, r.useState)([]),
                        le = (0, i.A)(ce, 2),
                        ie = le[0],
                        oe = le[1];
                    (0, r.useEffect)((function() {
                        return console.log("useEffect-show"), X((0, P.E4)()), C.A.setTemplateDetail({
                                name: q
                            }).then((function(e) {
                                var s = e.payloadSchemas.map((function(e) {
                                        return e.title
                                    })).toString().replace(/,/g, "、"),
                                    n = (0, l.A)((0, l.A)({}, e), {}, {
                                        schemasTitle: s
                                    });
                                G(n)
                            })), (0, w.fS)({
                                limit: 20,
                                offset: 0,
                                theme: "精选玩法"
                            }).then((function(e) {
                                console.log("getHomeTemplates", e), oe(e.filter((function(e) {
                                    return e.name !== q
                                })))
                            })),
                            function() {
                                console.log("useEffect-hide")
                            }
                    }), []);
                    var re = function() {
                            m().chooseImage({
                                count: 1,
                                sizeType: ["original", "compressed"],
                                sourceType: ["album", "camera"],
                                success: function(e) {
                                    var s = e.tempFilePaths;
                                    e.tempFiles[0].size >= 5e6 ? m().showToast({
                                        icon: "none",
                                        title: "请上传小于5M的图片哦～"
                                    }) : (ue(s[0]), I(s[0]))
                                },
                                fail: function(e) {
                                    console.error("Choose image fail:", e)
                                }
                            })
                        },
                        ue = function(e) {
                            m().getFileSystemManager().readFile({
                                filePath: e,
                                encoding: "base64",
                                success: function() {
                                    var e = (0, c.A)((0, t.A)().mark((function e(s) {
                                        var n;
                                        return (0, t.A)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    -1 !== (n = R.payloadSchemas.findIndex((function(e) {
                                                        return "faceImage" === e.payloadKey
                                                    }))) && (R.payloadSchemas[n].value = s.data), G(R), E(!0);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(s) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fail: function(e) {
                                    console.error("Convert to Base64 error:", e)
                                }
                            })
                        };
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(V.A, {
                            onClick: function() {
                                m().switchTab({
                                    url: b.Fd.Home
                                })
                            }
                        }), (0, _.jsxs)(o.Ss, {
                            className: "upload_photo_page",
                            children: [(0, _.jsxs)(o.Ss, {
                                className: "photo_content",
                                onClick: function() {
                                    L && (m().getStorageSync("firstAdd") ? re() : (D(!0), m().setStorageSync("firstAdd", !0)))
                                },
                                children: [a && (0, _.jsx)(o._V, {
                                    mode: "heightFix",
                                    className: "photo",
                                    src: a
                                }), (0, _.jsx)(o.Ss, {
                                    className: "choose_photo_button",
                                    children: (0, _.jsx)(o._V, {
                                        className: "upload_btn",
                                        src: (0, M.jl)() ? v : N
                                    })
                                }), (0, _.jsx)(y.A, {
                                    onCancel: function() {},
                                    onSuccess: function() {
                                        X((0, P.E4)())
                                    }
                                })]
                            }), (0, _.jsx)(o.Ss, {
                                className: "upload_standard"
                            }), ie.length > 0 && (0, _.jsx)(o.Ss, {
                                children: (0, _.jsx)(o._V, {
                                    className: "more_icon",
                                    src: (0, M.jl)() ? j : x
                                })
                            }), (0, _.jsx)(o.Ss, {
                                className: "more_template_list",
                                children: null == ie || null === (e = ie.map) || void 0 === e ? void 0 : e.call(ie, (function(e, s) {
                                    return (0, _.jsxs)(o.Ss, {
                                        className: "home_page_template_item",
                                        id: "模版" + s,
                                        onClick: function() {
                                            return function(e) {
                                                "ceyanzhi" === e.type ? m().navigateTo({
                                                    url: b.g5.UploadPhoto + "?name=" + e.name
                                                }) : m().navigateTo({
                                                    url: b.Fd.TemplateDetail + "?name=" + e.name
                                                })
                                            }(e)
                                        },
                                        children: [(0, _.jsx)(o.Ss, {
                                            className: "image_card",
                                            children: (0, _.jsx)(T.A, {
                                                src: null == e ? void 0 : e.coverUrl
                                            })
                                        }), (0, _.jsx)(o.Ss, {
                                            className: "display_name",
                                            children: null == e ? void 0 : e.displayName
                                        }), (0, _.jsxs)(o.Ss, {
                                            className: "tags",
                                            children: [(0, _.jsx)(o.Ss, {
                                                className: "ip tag theme",
                                                children: (null == e ? void 0 : e.themes[0].length) > 4 ? "".concat(null == e ? void 0 : e.themes[0].substr(0, 3), "...") : null == e ? void 0 : e.themes[0]
                                            }), (0, _.jsx)(o.Ss, {
                                                className: "ip tag",
                                                children: (null == e ? void 0 : e.ipNames[0].length) > 4 ? "".concat(null == e ? void 0 : e.ipNames[0].substr(0, 3), "...") : null == e ? void 0 : e.ipNames[0]
                                            })]
                                        })]
                                    }, null == e ? void 0 : e.name)
                                }))
                            })]
                        }), W && (0, _.jsx)(o.Ss, {
                            className: "tips_madel",
                            children: (0, _.jsxs)(o.Ss, {
                                className: "tips-content",
                                children: [(0, _.jsxs)(o.Ss, {
                                    className: "first",
                                    children: [(0, _.jsx)(o.Ss, {
                                        className: "title",
                                        children: (0, _.jsx)(o._V, {
                                            className: "tt_tips_title",
                                            src: f
                                        })
                                    }), (0, _.jsx)(o._V, {
                                        className: "correct_img",
                                        src: d
                                    }), (0, _.jsxs)(o.Ss, {
                                        className: "demarcation-line",
                                        children: [(0, _.jsx)(o._V, {
                                            className: "tt_line_tip",
                                            src: S
                                        }), "以下为错误示范", (0, _.jsx)(o._V, {
                                            className: "tt_line_tip",
                                            src: S
                                        })]
                                    }), (0, _.jsxs)(o.Ss, {
                                        className: "error",
                                        children: [(0, _.jsxs)(o.Ss, {
                                            className: "error-single",
                                            children: [(0, _.jsx)(o._V, {
                                                className: "error-img",
                                                src: g
                                            }), (0, _.jsx)(o.Ss, {
                                                children: "非人脸"
                                            })]
                                        }), (0, _.jsxs)(o.Ss, {
                                            className: "error-single",
                                            children: [(0, _.jsx)(o._V, {
                                                className: "error-img",
                                                src: p
                                            }), (0, _.jsx)(o.Ss, {
                                                children: "人脸角度过大"
                                            })]
                                        }), (0, _.jsxs)(o.Ss, {
                                            className: "error-single",
                                            children: [(0, _.jsx)(o._V, {
                                                className: "error-img",
                                                src: h
                                            }), (0, _.jsx)(o.Ss, {
                                                children: "遮挡过多"
                                            })]
                                        })]
                                    })]
                                }), (0, _.jsxs)(o.Ss, {
                                    className: "second",
                                    children: [(0, _.jsx)(o.Ss, {
                                        className: "title",
                                        children: "用户照片不收集承诺"
                                    }), (0, _.jsx)(o.Ss, {
                                        className: "content",
                                        children: "我们承诺不收集任何用户信息，您上传的照片系统仅用于所选视频合成，视频生成后照片会自动删除，不会保留您的照片等个人信息或另做他用。"
                                    }), (0, _.jsxs)(o.Ss, {
                                        className: "tip_button",
                                        children: [(0, _.jsx)(o.Ss, {
                                            className: "no-agree btn",
                                            onClick: function() {
                                                D(!1)
                                            },
                                            children: "不同意"
                                        }), (0, _.jsx)(o.Ss, {
                                            className: "agree btn",
                                            onClick: function() {
                                                D(!1), re()
                                            },
                                            children: "同意上传照片"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, _.jsx)(A, {
                            isOpen: Y,
                            onClose: function() {
                                return E(!1)
                            },
                            details: R,
                            goPay: function() {
                                R.price ? te.clickMakeHandle("pay") : te.clickMakeHandle("free")
                            }
                        }), (0, _.jsx)(Z.A, {
                            show: ne,
                            content: "即将打开“火种杂物社”客服",
                            btnText: $.current,
                            onFinish: function() {
                                ae(!1), E(!1)
                            }
                        })]
                    })
                };
            F.enableShareTimeline = !0, F.enableShareAppMessage = !0, Page((0, a.createPageConfig)(F, "pagesA/pages/UploadPhoto/index", {
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
            return s = 7391, e(e.s = s);
            var s
        })), e.O()
    }
]);