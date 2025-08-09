(wx.webpackJsonp = wx.webpackJsonp || []).push([
        [311], {
            460: function(e, n, a) {
                var t = a(2180),
                    l = a(1413),
                    i = a(4165),
                    o = a(5861),
                    r = a(9439),
                    s = a(1515),
                    u = a(2954),
                    c = a.n(u),
                    d = a(1211),
                    _ = a(613),
                    p = a(8982),
                    m = {
                        home: "index-module__home___jdQDx",
                        safeArea: "index-module__safeArea___Kcd99",
                        navbarWrap: "index-module__navbarWrap___mvuk2",
                        content: "index-module__content___s3KfW",
                        userInfoForm: "index-module__userInfoForm___zciGd",
                        userInfo: "index-module__userInfo___Id56R",
                        avatarWrap: "index-module__avatarWrap___hx0K1",
                        editBtn: "index-module__editBtn___xwRD8",
                        baseCard: "index-module__baseCard___olWDy",
                        baseInfo: "index-module__baseInfo___FV1oD",
                        baseHeader: "index-module__baseHeader___t73n6",
                        baseImage: "index-module__baseImage___Br1_5",
                        baseTitleWrap: "index-module__baseTitleWrap___NZ7jp",
                        baseTitle: "index-module__baseTitle___XytZ0",
                        baseSubTitle: "index-module__baseSubTitle___rcukr",
                        expandWrap: "index-module__expandWrap___JREqb",
                        expandText: "index-module__expandText___OAdft",
                        footer: "index-module__footer___t1oUD",
                        formFooter: "index-module__formFooter___v830G",
                        submitBtn: "index-module__submitBtn___sQbVT",
                        radioLabel: "index-module__radioLabel___qcxDQ",
                        checked: "index-module__checked___B1VC9",
                        formRadioGroup: "index-module__formRadioGroup___UwC09"
                    },
                    x = a(1141),
                    v = a(5394),
                    f = a(4184),
                    h = a.n(f),
                    b = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4zIj4KPHBhdGggZD0iTTIuMjUgNC41TDYgOC4yNUw5Ljc1IDQuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=",
                    g = a(7294);

                function Z(e, n) {
                    if (null == e) return {};
                    var a, t, l = function(e, n) {
                        if (null == e) return {};
                        var a, t, l = {},
                            i = Object.keys(e);
                        for (t = 0; t < i.length; t++) a = i[t], n.indexOf(a) >= 0 || (l[a] = e[a]);
                        return l
                    }(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (t = 0; t < i.length; t++) a = i[t], n.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a])
                    }
                    return l
                }
                var j = "index-module__formItem___ooBVz",
                    y = "index-module__formItemText___jatvO",
                    k = "index-module__formItemInput___r5LHY",
                    N = "index-module__formItemTextarea___vfsbS",
                    I = "index-module__formItemPlaceholder___DA2Ll",
                    T = a(5893),
                    G = ["label", "inputType", "className", "style", "content"];

                function C(e) {
                    var n = e.label,
                        a = e.inputType,
                        t = void 0 === a ? "input" : a,
                        i = e.className,
                        o = e.style,
                        r = e.content,
                        u = Z(e, G);
                    return (0, T.jsxs)(s.G7, {
                        className: h()(j, i),
                        children: [(0, T.jsx)(s.G7, {
                            className: y,
                            children: n
                        }), r, r ? null : "input" === t ? (0, T.jsx)(s.II, (0, l.Z)((0, l.Z)({}, u), {}, {
                            className: k,
                            placeholderClass: I,
                            style: o
                        })) : (0, T.jsx)(s.gx, (0, l.Z)((0, l.Z)({}, u), {}, {
                            className: N,
                            placeholderClass: I,
                            "disable-default-padding": !0,
                            style: o
                        }))]
                    })
                }
                var w = a(6261),
                    B = function(e) {
                        return !!e && !!e.then && !! function(e) {
                            return !!(e && e.constructor && e.call && e.apply)
                        }(e.then)
                    },
                    S = function(e) {
                        return function() {
                            try {
                                var n = e.apply(void 0, arguments);
                                return B(n) ? n.then((function(e) {
                                    return [void 0, e]
                                })).catch((function(e) {
                                    return [e, void 0]
                                })) : [void 0, n]
                            } catch (e) {
                                return [e, void 0]
                            }
                        }
                    };
                Page((0, t.createPageConfig)((function() {
                    (0, u.useLoad)((function() {
                        console.log("Page loaded.")
                    }));
                    var e = (0, g.useState)(!1),
                        n = (0, r.Z)(e, 2),
                        a = n[0],
                        t = n[1],
                        f = (0, g.useState)((0, p.nk)()),
                        Z = (0, r.Z)(f, 2),
                        j = Z[0],
                        y = Z[1],
                        k = (0, g.useState)(),
                        N = (0, r.Z)(k, 2),
                        I = N[0],
                        G = N[1],
                        B = c().getStorageSync("safeHeight"),
                        W = function() {
                            var e = (0, o.Z)((0, i.Z)().mark((function e() {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, x.Ai)();
                                        case 2:
                                            if (n = e.sent) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return (0, p.RR)(n), e.abrupt("return", n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, g.useEffect)((function() {
                        W().then((function(e) {
                            var n = e || {},
                                a = n.nickName,
                                t = n.age,
                                l = n.gender,
                                i = n.likes,
                                o = n.desires,
                                r = n.dislikes,
                                s = n.occupations,
                                u = n.hobbies,
                                c = n.personalities;
                            G({
                                nickName: a,
                                age: t,
                                gender: l,
                                like: null == i ? void 0 : i[0],
                                desire: null == o ? void 0 : o[0],
                                dislike: null == r ? void 0 : r[0],
                                occupation: null == s ? void 0 : s[0],
                                hobby: null == u ? void 0 : u[0],
                                personality: null == c ? void 0 : c[0]
                            })
                        }))
                    }), []);
                    var F = function() {
                            var e = (0, o.Z)((0, i.Z)().mark((function e(n) {
                                var a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = n.detail.avatarUrl, (0, w.GC)("press_update_avatar_btn_pv"), c().uploadFile({
                                                url: "".concat(x.v2, "/api/v1/auth/profile/update-avatar"),
                                                filePath: a,
                                                name: "file",
                                                header: {
                                                    Authorization: (0, v.hP)()
                                                },
                                                success: function(e) {
                                                    var n;
                                                    if (null != e && null !== (n = e.data) && void 0 !== n && n.includes("errmsg")) c().showToast({
                                                        title: "上传图片失败",
                                                        icon: "none"
                                                    });
                                                    else {
                                                        var a = JSON.parse(e.data);
                                                        console.log("上传图片成功： ", a);
                                                        var t = (0, p.nk)() || {},
                                                            i = (0, l.Z)((0, l.Z)({}, t), {}, {
                                                                avatarUrl: null == a ? void 0 : a.avatarUrl
                                                            });
                                                        y(i), (0, p.RR)(i)
                                                    }
                                                },
                                                fail: function(e) {
                                                    console.log("上传图片失败： ", e)
                                                }
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        R = function() {
                            var e = (0, o.Z)((0, i.Z)().mark((function e(n) {
                                var a, t, o, s, u, d, _, m, v, f, h, b, g, Z, j, k, N, T;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = n.detail.value, t = a.nickName, o = a.gender, s = a.age, u = a.occupation, d = a.hobby, _ = a.desire, m = a.like, v = a.personality, f = a.dislike, t) {
                                                e.next = 4;
                                                break
                                            }
                                            return c().showToast({
                                                title: "昵称不能为空",
                                                icon: "none"
                                            }), e.abrupt("return");
                                        case 4:
                                            if (o) {
                                                e.next = 7;
                                                break
                                            }
                                            return c().showToast({
                                                title: "性别不能为空",
                                                icon: "none"
                                            }), e.abrupt("return");
                                        case 7:
                                            return (0, w.GC)("save_user_profile_pv"), h = {
                                                nickName: t,
                                                gender: o,
                                                age: s ? +s : null == I ? void 0 : I.age,
                                                occupations: u ? [u] : [(null == I ? void 0 : I.occupation) || ""],
                                                hobbies: d ? [d] : [(null == I ? void 0 : I.hobby) || ""],
                                                desires: _ ? [_] : [(null == I ? void 0 : I.desire) || ""],
                                                likes: m ? [m] : [(null == I ? void 0 : I.like) || ""],
                                                personalities: v ? [v] : [(null == I ? void 0 : I.personality) || ""],
                                                dislikes: f ? [f] : [(null == I ? void 0 : I.dislike) || ""]
                                            }, e.next = 11, S(x.Lj)(h);
                                        case 11:
                                            if (b = e.sent, g = (0, r.Z)(b, 2), Z = g[0], j = g[1], !Z && j) {
                                                e.next = 19;
                                                break
                                            }
                                            return k = "400402" == (null == Z ? void 0 : Z.errno) ? "输入的信息含有违规内容，换个表述试试吧" : "信息保存失败", c().showToast({
                                                title: k,
                                                icon: "none"
                                            }), e.abrupt("return");
                                        case 19:
                                            c().showToast({
                                                title: "信息保存成功",
                                                icon: "none"
                                            }), N = (0, p.nk)() || {}, T = (0, l.Z)((0, l.Z)({}, N), j), y(T), (0, p.RR)(T);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, T.jsxs)(s.G7, {
                        className: m.home,
                        children: [(0, T.jsx)(s.G7, {
                            className: m.navWrap,
                            children: (0, T.jsx)(d.Z, {
                                content: (0, T.jsx)(s.G7, {
                                    className: m.navbarWrap,
                                    children: (0, T.jsx)(s.Ee, {
                                        src: _.Ms,
                                        style: {
                                            width: 28,
                                            height: 28
                                        },
                                        onClick: function() {
                                            c().navigateBack()
                                        }
                                    })
                                })
                            })
                        }), (0, T.jsxs)(s.l0, {
                            className: m.userInfoForm,
                            onSubmit: R,
                            children: [(0, T.jsxs)(s.pf, {
                                className: m.content,
                                scrollY: !0,
                                style: {
                                    height: B - 56
                                },
                                scrollAnchoring: !0,
                                enhanced: !0,
                                showScrollbar: !1,
                                children: [(0, T.jsxs)(s.G7, {
                                    className: m.avatarWrap,
                                    children: [(0, T.jsx)(s.Ee, {
                                        src: (null == j ? void 0 : j.avatarUrl) || _.hz,
                                        style: {
                                            width: 80,
                                            height: 80
                                        },
                                        mode: "aspectFit"
                                    }), (0, T.jsx)(s.zx, {
                                        openType: "chooseAvatar",
                                        className: m.editBtn,
                                        onChooseAvatar: F,
                                        children: (0, T.jsx)(s.Ee, {
                                            src: _.Nr,
                                            style: {
                                                width: 20,
                                                height: 20
                                            },
                                            mode: "aspectFit"
                                        })
                                    })]
                                }), (0, T.jsxs)(s.G7, {
                                    className: m.userInfo,
                                    children: [(0, T.jsxs)(s.G7, {
                                        className: h()(m.baseCard, m.baseInfo),
                                        children: [(0, T.jsxs)(s.G7, {
                                            className: h()(m.baseHeader, m.baseInfoHeader),
                                            children: [(0, T.jsx)(s.Ee, {
                                                className: m.baseImage,
                                                src: _.u_
                                            }), (0, T.jsx)(s.G7, {
                                                className: m.baseTitleWrap,
                                                children: (0, T.jsx)(s.xv, {
                                                    className: m.baseTitle,
                                                    children: "基本信息"
                                                })
                                            })]
                                        }), (0, T.jsx)(C, {
                                            label: "昵称*",
                                            placeholder: "请输入中文昵称，喜羊羊会记住的哦",
                                            type: "nickname",
                                            maxlength: 16,
                                            name: "nickName",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "nickName"
                                                })
                                            },
                                            value: null == I ? void 0 : I.nickName,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    nickName: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    nickName: e.detail.value
                                                }))
                                            },
                                            onNickNameReview: function(e) {
                                                e.detail.pass || G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    nickName: ""
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "性别*",
                                            style: {
                                                alignItems: "center"
                                            },
                                            content: (0, T.jsxs)(s.FX, {
                                                name: "gender",
                                                className: m.formRadioGroup,
                                                onChange: function(e) {
                                                    (0, w.GC)("update_user_profile_pv", {
                                                        section: "gender"
                                                    }), G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                        gender: e.detail.value
                                                    }))
                                                },
                                                children: [(0, T.jsxs)(s.__, {
                                                    className: h()(m.radioLabel, "male" === (null == I ? void 0 : I.gender) && m.checked),
                                                    children: [(0, T.jsx)(s.Y8, {
                                                        value: "male",
                                                        checked: "male" === (null == I ? void 0 : I.gender)
                                                    }), (0, T.jsx)(s.xv, {
                                                        children: "小帅"
                                                    })]
                                                }), (0, T.jsxs)(s.__, {
                                                    className: h()(m.radioLabel, "female" === (null == I ? void 0 : I.gender) && m.checked),
                                                    children: [(0, T.jsx)(s.Y8, {
                                                        value: "female",
                                                        checked: "female" === (null == I ? void 0 : I.gender)
                                                    }), (0, T.jsx)(s.xv, {
                                                        children: "小美"
                                                    })]
                                                })]
                                            })
                                        }), (0, T.jsx)(C, {
                                            label: "职业",
                                            placeholder: "例如，初中生、小学生、程序员",
                                            type: "text",
                                            maxlength: 20,
                                            name: "occupation",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "occupation"
                                                })
                                            },
                                            value: null == I ? void 0 : I.occupation,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    occupation: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    occupation: e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "爱好",
                                            placeholder: "喜羊羊对你的爱好很感兴趣，说不定能碰撞出一些火花呢",
                                            inputType: "textarea",
                                            maxlength: 30,
                                            name: "hobby",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "hobby"
                                                })
                                            },
                                            value: null == I ? void 0 : I.hobby,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    hobby: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    hobby: e.detail.value
                                                }))
                                            }
                                        })]
                                    }), a ? (0, T.jsxs)(s.G7, {
                                        className: h()(m.baseCard, m.moreInfo),
                                        children: [(0, T.jsxs)(s.G7, {
                                            className: h()(m.baseHeader, m.baseInfoHeader),
                                            children: [(0, T.jsx)(s.Ee, {
                                                className: m.baseImage,
                                                src: _.C6
                                            }), (0, T.jsxs)(s.G7, {
                                                className: m.baseTitleWrap,
                                                children: [(0, T.jsx)(s.xv, {
                                                    className: m.baseTitle,
                                                    children: "更多信息"
                                                }), (0, T.jsx)(s.xv, {
                                                    className: m.baseSubTitle,
                                                    children: "下面的信息能够帮助喜羊羊更好地了解你"
                                                })]
                                            })]
                                        }), (0, T.jsx)(C, {
                                            label: "年龄",
                                            placeholder: "请填写阿拉伯数字",
                                            type: "number",
                                            maxlength: 2,
                                            name: "age",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "age"
                                                })
                                            },
                                            value: null != I && I.age ? String(null == I ? void 0 : I.age) : "",
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    age: +e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    age: +e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "性格",
                                            placeholder: "喜羊羊会根据你的性格，更好地理解你的想法和感情",
                                            inputType: "textarea",
                                            maxlength: 30,
                                            name: "personality",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "personality"
                                                })
                                            },
                                            value: null == I ? void 0 : I.personality,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    personality: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    personality: e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "目标愿望",
                                            placeholder: "悄悄告诉喜羊羊你的愿望是什么，说不定能帮助你实现呢",
                                            inputType: "textarea",
                                            maxlength: 30,
                                            name: "desire",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "desire"
                                                })
                                            },
                                            value: null == I ? void 0 : I.desire,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    desire: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    desire: e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "喜欢的事",
                                            placeholder: "可以填写你喜欢的事物，比如食物、行为等，喜羊羊会默默记住的",
                                            inputType: "textarea",
                                            maxlength: 30,
                                            name: "like",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "like"
                                                })
                                            },
                                            value: null == I ? void 0 : I.like,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    like: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    like: e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(C, {
                                            label: "讨厌的事",
                                            placeholder: "可以填写你讨厌的事物，比如食物、行为等，喜羊羊会默默记住的",
                                            inputType: "textarea",
                                            maxlength: 30,
                                            name: "dislike",
                                            onFocus: function() {
                                                return (0, w.GC)("update_user_profile_pv", {
                                                    section: "dislike"
                                                })
                                            },
                                            value: null == I ? void 0 : I.dislike,
                                            onInput: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    dislike: e.detail.value
                                                }))
                                            },
                                            onBlur: function(e) {
                                                G((0, l.Z)((0, l.Z)({}, I), {}, {
                                                    dislike: e.detail.value
                                                }))
                                            }
                                        }), (0, T.jsx)(s.G7, {
                                            className: m.footer,
                                            children: (0, T.jsxs)(s.G7, {
                                                className: m.expandWrap,
                                                onClick: function() {
                                                    return t(!1)
                                                },
                                                children: [(0, T.jsx)(s.xv, {
                                                    className: m.expandText,
                                                    children: "收起"
                                                }), (0, T.jsx)(s.Ee, {
                                                    src: b,
                                                    style: {
                                                        width: 12,
                                                        height: 12,
                                                        transform: "rotate(-180deg)"
                                                    }
                                                })]
                                            })
                                        })]
                                    }) : (0, T.jsxs)(s.G7, {
                                        className: m.expandWrap,
                                        onClick: function() {
                                            (0, w.GC)("press_extend_update_user_profile_btn_pv"), t(!0)
                                        },
                                        children: [(0, T.jsx)(s.xv, {
                                            className: m.expandText,
                                            children: "展开"
                                        }), (0, T.jsx)(s.Ee, {
                                            src: b,
                                            style: {
                                                width: 12,
                                                height: 12
                                            }
                                        })]
                                    })]
                                })]
                            }), (0, T.jsx)(s.G7, {
                                className: m.formFooter,
                                children: (0, T.jsx)(s.zx, {
                                    className: m.submitBtn,
                                    formType: "submit",
                                    children: "保存"
                                })
                            })]
                        })]
                    })
                }), "pages/home/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#B6C8E4",
                    navigationBarTextStyle: "white",
                    navigationStyle: "custom",
                    homeButton: !1,
                    disableScroll: !0
                } || {}))
            }
        },
        function(e) {
            e.O(0, [107, 216, 592], (function() {
                return function(n) {
                    return e(e.s = n)
                }(460)
            })), e.O()
        }
    ]);