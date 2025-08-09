(wx.webpackJsonp = wx.webpackJsonp || []).push([
        [539], {
            1973: function(e, n, t) {
                var a = t(2180),
                    r = t(1413),
                    i = t(7762),
                    o = t(3433),
                    c = t(4165),
                    u = t(5861),
                    s = t(9439),
                    l = t(1515),
                    d = t(7294),
                    p = t(2954),
                    x = t.n(p),
                    f = t(4184),
                    h = t.n(f),
                    g = t(8395),
                    v = t(9606),
                    m = t(9697),
                    y = t(1211),
                    b = t(3592),
                    k = t(1809),
                    Z = t(4641),
                    _ = t(1141),
                    T = t(7863),
                    S = t(2607),
                    N = t(6261),
                    j = t(9686),
                    w = t(613),
                    G = t(726),
                    I = t(8982),
                    A = "index-module__profileLoginBtn___gTGyg",
                    C = "index-module__blindBoxLogin___wrEoP",
                    D = "index-module__navbarWrap___Il45W",
                    M = "index-module__navbarTitle___kufLc",
                    R = t.p + "assets/blind-icon.png",
                    E = t(5893),
                    P = function(e) {
                        return Math.ceil(.237 * e.length)
                    };

                function z() {
                    var e = (0, d.useState)(!1),
                        n = (0, s.Z)(e, 2),
                        t = n[0],
                        a = n[1],
                        f = (0, d.useState)(!1),
                        z = (0, s.Z)(f, 2),
                        L = z[0],
                        B = z[1],
                        U = (0, d.useState)(!1),
                        F = (0, s.Z)(U, 2),
                        Q = F[0],
                        Y = F[1],
                        H = (0, d.useState)(!1),
                        W = (0, s.Z)(H, 2),
                        J = W[0],
                        q = W[1],
                        O = (0, d.useState)(!1),
                        V = (0, s.Z)(O, 2),
                        X = V[0],
                        $ = (V[1], (0, d.useState)(0)),
                        K = (0, s.Z)($, 2),
                        ee = K[0],
                        ne = K[1],
                        te = (0, d.useState)([]),
                        ae = (0, s.Z)(te, 2),
                        re = ae[0],
                        ie = ae[1],
                        oe = (0, d.useState)(0),
                        ce = (0, s.Z)(oe, 2),
                        ue = ce[0],
                        se = ce[1],
                        le = (0, d.useState)(!0),
                        de = (0, s.Z)(le, 2),
                        pe = de[0],
                        xe = de[1],
                        fe = (0, d.useState)((0, I.nk)()),
                        he = (0, s.Z)(fe, 2),
                        ge = he[0],
                        ve = he[1],
                        me = (0, d.useRef)(),
                        ye = (0, d.useRef)(),
                        be = (0, d.useRef)(0),
                        ke = x().createVideoContext("video"),
                        Ze = (0, d.useState)((function() {
                            var e = x().getSystemInfoSync(),
                                n = e.statusBarHeight,
                                t = e.platform,
                                a = x().getMenuButtonBoundingClientRect(),
                                r = a.top,
                                i = a.height;
                            return r && 0 !== r && i && 0 !== i ? 2 * (r - n) + i + n : ("android" === t ? 48 : 40) + n
                        })),
                        _e = (0, s.Z)(Ze, 1)[0],
                        Te = (0, d.useState)(0),
                        Se = (0, s.Z)(Te, 2),
                        Ne = Se[0],
                        je = Se[1];
                    (0, d.useLayoutEffect)((function() {
                        x().createSelectorQuery().select("#safe-area").boundingClientRect().exec((function(e) {
                            console.log("safe-area", e);
                            var n = e[0].height,
                                t = x().getSystemInfoSync().screenWidth;
                            je(n - 1056 * (t / 750))
                        }))
                    }), []), (0, p.useReady)((function() {
                        setTimeout((function() {
                            Re()
                        }), 50), De(), console.log("~~~~~~创建绘画ID~~~~~~"), (0, _.Mc)(), (0, N.G3)("app_pv", 1)
                    })), (0, p.useUnload)((function() {
                        var e, n;
                        q(!0), null == me || null === (e = me.current) || void 0 === e || e.dispose(), me.current = null, null == ye || null === (n = ye.current) || void 0 === n || n.dispose(), ye.current = null
                    })), (0, p.useDidShow)((function() {
                        ve((0, I.nk)())
                    })), (0, p.useShareAppMessage)((function(e) {
                        return "button" === e.from && console.log(e.target), {
                            title: "叮咚，青青草原男神喜羊羊邀请你一起聊天啦",
                            path: "/pages/index/index",
                            imageUrl: "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/xyy-3d-share-bg.png"
                        }
                    })), (0, p.useShareTimeline)((function() {
                        return {
                            title: "叮咚，青青草原男神喜羊羊邀请你一起聊天啦",
                            path: "/pages/index/index",
                            imageUrl: "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/xyy-3d-share-timeline-bg.png"
                        }
                    }));
                    var we = (0, d.useState)(!1),
                        Ge = (0, s.Z)(we, 2),
                        Ie = Ge[0],
                        Ae = Ge[1],
                        Ce = function() {
                            Ae(!0), ve((0, I.nk)())
                        };
                    (0, d.useEffect)((function() {
                        x().createSelectorQuery().select("#scroll").boundingClientRect().exec((function(e) {
                            se(e[0].height)
                        }))
                    }), [re]);
                    var De = function() {
                            var e = (0, T.R)("https://commercial-cdn.xiaoice.com/character-ip/GOODwuaction1221.zip"),
                                n = x().getSystemInfoSync();
                            x().createSelectorQuery().select("#xyy-canvas").node(function() {
                                var t = (0, u.Z)((0, c.Z)().mark((function t(a) {
                                    var r, i, o, u, s, l, d;
                                    return (0, c.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!J) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                return r = ye.current = new S.Zf(a.node, {
                                                    dpr: n.pixelRatio,
                                                    fps: 30,
                                                    raycaster: !0,
                                                    orbitControls: {
                                                        enablePan: !1,
                                                        enableZoom: !1,
                                                        enableRotate: !0
                                                    },
                                                    loaders: {
                                                        gltf: !0
                                                    },
                                                    camera: {
                                                        fov: 100,
                                                        near: .1,
                                                        far: 200,
                                                        position: [0, 0, 25.6],
                                                        focus: [0, 0, 0]
                                                    }
                                                }), i = r.loadGLTF, o = r.renderLoop, u = r.addCharacter, s = r.camera, console.log("camera", s), t.next = 6, e;
                                            case 6:
                                                if (l = t.sent, !J) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 9:
                                                return t.next = 11, i(l, "xyy");
                                            case 11:
                                                if (d = t.sent, !J) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 14:
                                                me.current = new S.zk("xyy", d, {
                                                    baseActionUrl: "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/actions/",
                                                    blinkMorphNames: ["eyeBlinkLeft", "eyeBlinkRight"],
                                                    idleActions: ["idle", "idle", "idle", "sikao"],
                                                    deepIdle1: "shuijiao2",
                                                    deepIdle1DeltaTime: 6e4,
                                                    preActions: ["zuoxiadiantou1", "shuijiao1", "changge1", "changGe_anim2_1"],
                                                    loopedActions: ["zuoxiadiantou2", "shuijiao2", "changge2", "changGe_anim2_2", "idle", "sikao", "66wu"],
                                                    postActions: ["zuoxiadiantou3", "shuijiao3", "changge3", "changGe_anim2_3"],
                                                    mainActions: ["changge1", "changge2", "changge3", "tiqiu"],
                                                    extraActions: ["changGe_anim2_1", "changGe_anim2_2", "changGe_anim2_3", "zuqiu_tiqiu"]
                                                }), u(me.current, 0, 0, 0), o();
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()).exec()
                        },
                        Me = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e() {
                                var n, t, a, r, i, u, s;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = (0, g.Z)(G.W6)[0], a = t.text, r = t.json, ie([{
                                                belongTo: G.dT.XYY,
                                                content: {
                                                    text: a
                                                },
                                                id: Date.now(),
                                                duration: P(a)
                                            }].concat((0, o.Z)(re))), e.next = 5, (0, _.uU)({
                                                url: r,
                                                method: "GET"
                                            });
                                        case 5:
                                            return i = e.sent, u = i.audio, s = i.blendshape, e.next = 9, null === (n = me.current) || void 0 === n ? void 0 : n.playTalk(u.audioUrl, s, void 0, 2.5, -100, "huishou");
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Re = function() {
                            ke.play()
                        },
                        Ee = function() {
                            var e = Date.now();
                            return be.current = e, e
                        },
                        Pe = function(e) {
                            return be.current === e
                        },
                        ze = function() {
                            Y(!0), setTimeout((function() {
                                Me()
                            }), 500)
                        },
                        Le = function(e) {
                            var n;
                            null === (n = ye.current) || void 0 === n || n.onTouch(e)
                        },
                        Be = (0, v.Z)(function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e(n) {
                                var t, a, r, i, o, u, l, d, p, f, h, g, v, m, y, b, k, Z, T, S, N, j, w, G, I, A, C, D, M, R, E;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise((function(e) {
                                                x().createSelectorQuery().select("#xyy-canvas").boundingClientRect().exec(e)
                                            }));
                                        case 2:
                                            if (a = e.sent, r = (0, s.Z)(a, 1), i = r[0], o = i.left, u = i.top, l = i.width, d = i.height, p = n.target.x - o, f = n.target.y - u, h = null === (t = ye.current) || void 0 === t ? void 0 : t.onClick(p, f, l, d)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 14:
                                            if (console.log("click", h), !["leg_1", "leg_2", "leg_3", "leg_4"].includes(h)) {
                                                e.next = 19;
                                                break
                                            }
                                            null == me || null === (g = me.current) || void 0 === g || g.playDeepIdle1(), e.next = 64;
                                            break;
                                        case 19:
                                            if (!["head_3", "head_1"].includes(h)) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.next = 22, null == me || null === (v = me.current) || void 0 === v ? void 0 : v.breakDeepIdle();
                                        case 22:
                                            return e.next = 24, null == me || null === (m = me.current) || void 0 === m ? void 0 : m.breakTalk();
                                        case 24:
                                            null == me || null === (y = me.current) || void 0 === y || y.playAction("shuashuai"), e.next = 64;
                                            break;
                                        case 27:
                                            if (!["head_2"].includes(h)) {
                                                e.next = 35;
                                                break
                                            }
                                            return e.next = 30, null == me || null === (b = me.current) || void 0 === b ? void 0 : b.breakDeepIdle();
                                        case 30:
                                            return e.next = 32, null == me || null === (k = me.current) || void 0 === k ? void 0 : k.breakTalk();
                                        case 32:
                                            null == me || null === (Z = me.current) || void 0 === Z || Z.playAction("sikao"), e.next = 64;
                                            break;
                                        case 35:
                                            if (!["body_5", "body_6", "body_7"].includes(h)) {
                                                e.next = 52;
                                                break
                                            }
                                            return e.next = 38, null == me || null === (T = me.current) || void 0 === T ? void 0 : T.breakDeepIdle();
                                        case 38:
                                            if (G = "https://alphax-yyyz.oss-cn-shenzhen.aliyuncs.com/xiaobing/xyyaction/action-hahadaxiao.wav", (w = "https://alphax-yyyz.oss-cn-shenzhen.aliyuncs.com/xiaobing/xyyaction/action-hahadaxiao.json") && G) {
                                                e.next = 41;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 41:
                                            return e.next = 43, (0, _.uU)({
                                                url: w
                                            });
                                        case 43:
                                            return I = e.sent, A = I.blendshapes, null == me || null === (S = me.current) || void 0 === S || S.playAction("hahadaxiao"), e.next = 48, null == me || null === (N = me.current) || void 0 === N ? void 0 : N.playTalk(G, A, void 0, 2.5, -100);
                                        case 48:
                                            return e.next = 50, null == me || null === (j = me.current) || void 0 === j ? void 0 : j.resetTalkMorph();
                                        case 50:
                                            e.next = 64;
                                            break;
                                        case 52:
                                            if (!["arm_1", "arm_2", "arm_3"].includes(h)) {
                                                e.next = 63;
                                                break
                                            }
                                            return e.next = 55, null == me || null === (C = me.current) || void 0 === C ? void 0 : C.breakDeepIdle();
                                        case 55:
                                            return e.next = 57, (0, _.uU)({
                                                url: "https://alphax-yyyz.oss-cn-shenzhen.aliyuncs.com/xiaobing/xyymusic/music-xyysikaowu0922.json"
                                            });
                                        case 57:
                                            return M = e.sent, R = M.blendshapes, e.next = 61, null == me || null === (D = me.current) || void 0 === D ? void 0 : D.playTalk("https://alphax-yyyz.oss-cn-shenzhen.aliyuncs.com/xiaobing/xyymusic/music-xyysikaowu0922.wav", R, void 0, 2.5, -100, "tiaowu");
                                        case 61:
                                            e.next = 64;
                                            break;
                                        case 63:
                                            null == me || null === (E = me.current) || void 0 === E || E.breakDeepIdle();
                                        case 64:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(), 100),
                        Ue = function() {
                            var e;
                            be.current = 0, null == me || null === (e = me.current) || void 0 === e || e.breakTalk(), We.current(0)
                        },
                        Fe = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e(n, t) {
                                var a;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("start" === n && Ue(), t) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            (0, N.G3)("audio_pv", 1), (0, N.G3)("input_audio_duration_sec", (((null == t ? void 0 : t.duration) || 0) / 1e3).toFixed(3)), a = x().getFileSystemManager().readFileSync(t.tempFilePath), x().getFileSystemManager().removeSavedFile({
                                                filePath: t.tempFilePath
                                            }), (0, _.NJ)(a).then((function(e) {
                                                null != e && e.text ? Qe(null == e ? void 0 : e.text, !1) : x().showToast({
                                                    icon: "none",
                                                    title: "未识别到语音",
                                                    duration: 1e3
                                                })
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Qe = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e(n) {
                                var t, a, r, i, o, u, l, d, p, x, f, h, g = arguments;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = g.length > 1 && void 0 !== g[1] && g[1], r = g.length > 2 ? g[2] : void 0, "" !== n) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (i = null === (t = me.current) || void 0 === t ? void 0 : t.breakDeepIdle(), "$gesture:all" !== n) {
                                                e.next = 10;
                                                break
                                            }
                                            return l = Array.from(null !== (o = null === (u = me.current) || void 0 === u ? void 0 : u.allAnimations) && void 0 !== o ? o : []), e.next = 9, Je({
                                                queryResult: {
                                                    languageCode: "zh-CN",
                                                    parameters: {},
                                                    responseMessages: [{
                                                        text: {
                                                            text: ["这是我所有的动作！"],
                                                            redactedText: ["快来选一个测试吧！"],
                                                            responseType: "ENTRY_PROMPT",
                                                            source: "VIRTUAL_AGENT"
                                                        }
                                                    }, {
                                                        payload: {
                                                            payloadType: "listAllGesture",
                                                            buttonList: l.map((function(e) {
                                                                return "$gesture:" + e
                                                            }))
                                                        },
                                                        responseType: "ENTRY_PROMPT",
                                                        source: "VIRTUAL_AGENT"
                                                    }],
                                                    webhookStatuses: [],
                                                    webhookPayloads: [],
                                                    currentPage: {
                                                        name: "655349cc9a9e00ff0a957098",
                                                        displayName: "ChooseStory"
                                                    },
                                                    currentFlow: {
                                                        name: "654a099a9a9e00ff0a9521b4",
                                                        displayName: "默认初始对话流"
                                                    },
                                                    match: {
                                                        intent: "agents/654a092e9a9e00ff0a952173/intents/6551e6cf9a9e00ff0a9557d9",
                                                        intentDisplayName: "讲故事",
                                                        faq: "",
                                                        faqDisplayName: "",
                                                        faqStandardQuestion: "",
                                                        faqDirectoryName: "",
                                                        documentQA: "",
                                                        documentQADisplayName: "",
                                                        documentQADirectoryName: "",
                                                        tableQA: "",
                                                        tableQADisplayName: "",
                                                        tableQADirectoryName: "",
                                                        event: "",
                                                        parameters: [],
                                                        matchType: "INTENT",
                                                        confidence: .9990330934524536
                                                    },
                                                    text: "你可以讲故事吗?",
                                                    triggerIntent: "",
                                                    triggerEvent: "",
                                                    responseSourceType: ["cx-automata"],
                                                    redactedParameters: [],
                                                    redactedInput: "你可以讲故事吗?"
                                                }
                                            }, !1, 0);
                                        case 9:
                                            return e.abrupt("return");
                                        case 10:
                                            if (!/^\$gesture:\w+$/.test(n)) {
                                                e.next = 14;
                                                break
                                            }
                                            return p = n.split(":"), x = (0, s.Z)(p, 2), f = x[1], null == me || null === (d = me.current) || void 0 === d || d.playAction(f), e.abrupt("return");
                                        case 14:
                                            return r || (r = Ee()), a || He.current({
                                                belongTo: G.dT.CURRENT_USER,
                                                content: {
                                                    text: n
                                                },
                                                id: Date.now()
                                            }, {
                                                belongTo: G.dT.XYY,
                                                content: {},
                                                isLoading: !0,
                                                id: Date.now()
                                            }), e.next = 18, (0, _.zV)(n, a);
                                        case 18:
                                            if (h = e.sent, Pe(r)) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 21:
                                            if (!i) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 24, i;
                                        case 24:
                                            return e.next = 26, Je(h, !1, r);
                                        case 26:
                                            We.current(0);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ye = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e(n, t) {
                                var a, r, i, o, u, s, l, d, p, x, f, h, g;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (i = (r = null != n ? n : {}).payloadType, o = r.actionList, u = r.audioList, s = r.storyName, l = r.eposide, console.log("handlePayload~", n, t, be.current), "randomAudio1WithAction" !== i) {
                                                e.next = 8;
                                                break
                                            }
                                            x = u[Math.random() * u.length | 0], d = x.audio, p = x.bs, e.next = 15;
                                            break;
                                        case 8:
                                            if ("randomAudio1WithLoopAction" !== i) {
                                                e.next = 14;
                                                break
                                            }
                                            f = u.filter((function(e) {
                                                var n = e || {},
                                                    t = n.eposide,
                                                    a = n.storyName;
                                                return t === l && a === s
                                            }))[0], d = f.audio, p = f.bs, e.next = 15;
                                            break;
                                        case 14:
                                            return e.abrupt("return");
                                        case 15:
                                            if (h = o[0], !p) {
                                                e.next = 22;
                                                break
                                            }
                                            return e.next = 19, (0, _.uU)({
                                                url: p
                                            });
                                        case 19:
                                            if (g = e.sent.blendshapes, Pe(t)) {
                                                e.next = 22;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 22:
                                            return e.next = 24, null === (a = me.current) || void 0 === a ? void 0 : a.playTalk(d, g, void 0, 2.5, -100, h);
                                        case 24:
                                            return e.abrupt("return");
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        He = (0, d.useRef)(null);
                    He.current = function(e, n) {
                        ie([].concat((0, o.Z)(re), [e, n]).filter((function(e) {
                            return (n || !(null != e && e.isLoading)) && !(0, m.Z)(e)
                        })))
                    };
                    var We = (0, d.useRef)();
                    We.current = function(e) {
                        ne(e)
                    };
                    var Je = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e(n) {
                                var t, a, r, o, u, s, l, d, p = arguments;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = p.length > 1 && void 0 !== p[1] && p[1], r = p.length > 2 ? p[2] : void 0, o = p.length > 3 && void 0 !== p[3] ? p[3] : "", u = n, s = (0, c.Z)().mark((function e() {
                                                var n, t, s, l, p, f, h, v, m, y, b, k, Z, T, S, N, w, I, A, C, D, M, R, E, z;
                                                return (0, c.Z)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (console.log("dialogResTTSFn~~~~~~~", r, be.current), Pe(r)) {
                                                                e.next = 3;
                                                                break
                                                            }
                                                            return e.abrupt("return", {
                                                                v: void 0
                                                            });
                                                        case 3:
                                                            t = u[d], s = t.payload, (l = s || {}).order, p = l.payloadType, f = l.buttonList, h = l.actionList, v = [], m = (null == t || null === (n = t.text) || void 0 === n ? void 0 : n.text) || "", y = {
                                                                type: G.dT.XYY,
                                                                content: {
                                                                    text: m
                                                                },
                                                                id: (0, j.D)(),
                                                                duration: P(m)
                                                            }, b = o, f && "listAllGesture" === p ? (y.buttonList = f, He.current(y)) : f && "randomButton3" === p && (y.buttonList = (0, g.Z)(null != f ? f : []).slice(0, 3), He.current(y)), "action" === p && (b = h[0]), k = "", Z = (0, i.Z)(m.split(/([\u3002|\uff1b|;|\uff01|!]+)/)), e.prev = 14, S = (0, c.Z)().mark((function e() {
                                                                var n, t;
                                                                return (0, c.Z)().wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            n = T.value, /([\u3002|\uff1b|;|\uff01|!]+)/.test(n) ? (t = k + n, v.push((function() {
                                                                                return (0, _.Nh)(t)
                                                                            })), k = "") : "" !== n && (k += n);
                                                                        case 2:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            })), Z.s();
                                                        case 17:
                                                            if ((T = Z.n()).done) {
                                                                e.next = 21;
                                                                break
                                                            }
                                                            return e.delegateYield(S(), "t0", 19);
                                                        case 19:
                                                            e.next = 17;
                                                            break;
                                                        case 21:
                                                            e.next = 26;
                                                            break;
                                                        case 23:
                                                            e.prev = 23, e.t1 = e.catch(14), Z.e(e.t1);
                                                        case 26:
                                                            return e.prev = 26, Z.f(), e.finish(26);
                                                        case 29:
                                                            if (k && (N = k, v.push((function() {
                                                                    return (0, _.Nh)(N)
                                                                })), k = ""), !v.length) {
                                                                e.next = 56;
                                                                break
                                                            }
                                                            w = v[0](), I = 1;
                                                        case 33:
                                                            if (!(I <= v.length)) {
                                                                e.next = 56;
                                                                break
                                                            }
                                                            return e.next = 36, w;
                                                        case 36:
                                                            return A = e.sent, C = A.audio, D = A.blendshape, 1 === I && (a || !m && !f || He.current(y)), M = x().getFileSystemManager(), R = "".concat(x().env.USER_DATA_PATH, "/xiyangyang-audio-").concat(Date.now(), ".wav"), e.prev = 42, M.writeFileSync(R, null == C ? void 0 : C.base64Data, "base64"), w = null === (E = v[I]) || void 0 === E ? void 0 : E.call(v), e.next = 47, null === (z = me.current) || void 0 === z ? void 0 : z.playTalk(R, D, void 0, 2.5, -100, b || void 0);
                                                        case 47:
                                                            return e.prev = 47, x().getFileSystemManager().removeSavedFile({
                                                                filePath: R
                                                            }), e.finish(47);
                                                        case 51:
                                                            if (Pe(r)) {
                                                                e.next = 53;
                                                                break
                                                            }
                                                            return e.abrupt("return", {
                                                                v: void 0
                                                            });
                                                        case 53:
                                                            I++, e.next = 33;
                                                            break;
                                                        case 56:
                                                            if (!s) {
                                                                e.next = 60;
                                                                break
                                                            }
                                                            return console.log("~~~~~~~~payload~~~~xx~~~~", r, be.current), e.next = 60, Ye(s, r);
                                                        case 60:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [14, 23, 26, 29],
                                                    [42, , 47, 51]
                                                ])
                                            })), d = 0;
                                        case 6:
                                            if (!(d < u.length)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.delegateYield(s(), "t0", 8);
                                        case 8:
                                            if (!(l = e.t0)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return", l.v);
                                        case 11:
                                            d++, e.next = 6;
                                            break;
                                        case 14:
                                            return e.next = 16, null === (t = me.current) || void 0 === t ? void 0 : t.resetTalkMorph();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        qe = function() {
                            var e = (0, u.Z)((0, c.Z)().mark((function e() {
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            x().showToast({
                                                title: "游戏功能敬请期待",
                                                icon: "none"
                                            }), (0, N.G3)("skill_pv", 1);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Oe = function(e) {
                            var n;
                            Ue();
                            var t = null == e || null === (n = e.content) || void 0 === n ? void 0 : n.text,
                                a = null == e ? void 0 : e.duration;
                            ie(re.map((function(n) {
                                return (0, r.Z)((0, r.Z)({}, n), {}, {
                                    isPlaying: (null == n ? void 0 : n.id) === e.id
                                })
                            }))), Je((0, G.PB)(t), !0, 0), setTimeout((function() {
                                ie(re.map((function(e) {
                                    return (0, r.Z)((0, r.Z)({}, e), {}, {
                                        isPlaying: !1
                                    })
                                })))
                            }), 1e3 * a)
                        },
                        Ve = (0, d.useCallback)((function() {
                            return (0, E.jsx)(l.G7, {
                                className: "video-container",
                                onClick: function() {
                                    Y(!0), ze()
                                },
                                children: (0, E.jsx)(l.nk, {
                                    id: "video",
                                    src: "https://commercial-cdn.xiaoice.com/character-ip/xiyangyang-mini-images/open-v2.mp4",
                                    autoplay: !0,
                                    controls: !1,
                                    "object-fit": "cover",
                                    onEnded: function() {
                                        ze()
                                    }
                                })
                            })
                        }), []),
                        Xe = function() {
                            (0, N.GC)("press_update_user_profile_btn_pv"), x().navigateTo({
                                url: "/pages/home/index"
                            })
                        };
                    return (0, E.jsxs)(l.G7, {
                        className: h()("index", t && "expand"),
                        children: [(0, E.jsx)(l.G7, {
                            className: "safe-area",
                            id: "safe-area"
                        }), (0, E.jsx)(l.G7, {
                            className: "nav-bar-container",
                            children: (0, E.jsx)(y.Z, {
                                content: Q ? (0, E.jsxs)(l.G7, {
                                    className: D,
                                    children: [(0, E.jsx)(k.Z, {
                                        className: A,
                                        isLogin: Ie,
                                        onSuccess: function() {
                                            return Ce()
                                        }
                                    }), (0, E.jsx)(l.Ee, {
                                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSIzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiAxN0M2IDE1LjM0MzEgNy4zNDMxNSAxNCA5IDE0SDE1QzE2LjY1NjkgMTQgMTggMTUuMzQzMSAxOCAxN1YxOUg2VjE3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
                                        style: {
                                            width: 28,
                                            height: 28
                                        },
                                        onClick: function() {
                                            return Xe()
                                        }
                                    }), !(null != ge && ge.updated) && (0, E.jsx)(l.G7, {
                                        className: M,
                                        onClick: function() {
                                            return Xe()
                                        },
                                        children: "快来设置昵称吧"
                                    })]
                                }) : null
                            })
                        }), !Q && Ve(), (0, E.jsx)(l.G7, {
                            onClick: function(e) {
                                Be(e)
                            },
                            className: h()("canvas-container"),
                            children: (0, E.jsx)(l.Xz, {
                                onTouchStart: function(e) {
                                    return Le(e)
                                },
                                onTouchCancel: function(e) {
                                    return Le(e)
                                },
                                onTouchMove: function(e) {
                                    return Le(e)
                                },
                                onTouchEnd: function(e) {
                                    return Le(e)
                                },
                                className: "xyy-canvas",
                                id: "xyy-canvas",
                                "canvas-id": "xyy-canvas",
                                type: "webgl"
                            })
                        }), (0, E.jsx)(l.G7, {
                            className: "booth"
                        }), (0, E.jsx)(l.G7, {
                            className: "expand-btn",
                            onClick: function() {
                                (0, N.G3)(t ? "dialogue_open_pv" : "dialogue_close_pv", 1), a(!t)
                            }
                        }), (0, E.jsx)(k.Z, {
                            isLogin: Ie,
                            onSuccess: function() {
                                return Ce()
                            }
                        }), (0, E.jsx)(E.Fragment, {
                            children: (0, E.jsx)(l.pf, {
                                className: "scrollview",
                                style: {
                                    height: Ne
                                },
                                scrollY: !0,
                                scrollTop: ue,
                                children: (0, E.jsx)(l.G7, {
                                    className: "dialogue-box-container",
                                    id: "scroll",
                                    children: (re || []).map((function(e, n) {
                                        var t = e || {},
                                            a = t.belongTo,
                                            r = t.content,
                                            i = t.isPlaying,
                                            o = t.isLoading,
                                            c = t.buttonList,
                                            u = t.duration,
                                            s = a === G.dT.CURRENT_USER;
                                        return (0, E.jsxs)(l.G7, {
                                            className: h()("dialogue-item", s ? "self-box" : "other-box"),
                                            children: [!s && !o && !c && (0, E.jsxs)(l.G7, {
                                                className: h()("voice-paly"),
                                                onClick: function() {
                                                    Oe(e)
                                                },
                                                children: [(0, E.jsx)(l.Ee, {
                                                    src: i ? w.GQ : w.tb
                                                }), u, "″"]
                                            }), (0, E.jsx)(l.G7, {
                                                className: "item-portrait",
                                                onClick: function() {
                                                    s && ((0, N.GC)("press_user_avatar_btn_pv"), x().navigateTo({
                                                        url: "/pages/home/index"
                                                    }))
                                                },
                                                children: (0, E.jsx)(l.Ee, {
                                                    src: s ? (null == ge ? void 0 : ge.avatarUrl) || w.cQ : w.Fn
                                                })
                                            }), (0, E.jsxs)(l.G7, {
                                                className: "item-content",
                                                children: [o ? (0, E.jsx)(l.Ee, {
                                                    src: w.R2
                                                }) : (0, E.jsxs)(E.Fragment, {
                                                    children: [" ", null == r ? void 0 : r.text]
                                                }), c && (0, E.jsx)(l.G7, {
                                                    className: "content-story",
                                                    children: c.map((function(e, n) {
                                                        return (0, E.jsx)(l.G7, {
                                                            className: "story-item",
                                                            onClick: function() {
                                                                var n = Ee();
                                                                /^\$gesture:\w+$/.test(e) || We.current(n), Qe(e, !1, n)
                                                            },
                                                            children: e
                                                        }, n)
                                                    }))
                                                })]
                                            })]
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, E.jsxs)(l.G7, {
                            className: h()("handle-scene-container", L && "is-hidden"),
                            children: [(0, E.jsx)(l.G7, {
                                className: h()("handle-text", "handle-item"),
                                onClick: function() {
                                    return function(e) {
                                        switch (e) {
                                            case "text":
                                                B(!0), xe(!1)
                                        }
                                    }("text")
                                },
                                children: (0, E.jsx)(l.Ee, {
                                    src: w.c9
                                })
                            }), (0, E.jsx)(l.G7, {
                                className: h()("handle-voice", "handle-item"),
                                children: (0, E.jsx)(Z.Z, {
                                    onHhanldeVoiceStatus: Fe,
                                    tipShow: pe
                                })
                            }), (0, E.jsx)(l.G7, {
                                className: h()("handle-game", "handle-item"),
                                onClick: function() {
                                    console.log("~~~~~~~~~~handleSendGame~~~~~~~~"), qe()
                                },
                                children: (0, E.jsx)(E.Fragment, {
                                    children: X ? (0, E.jsx)(l.Ee, {
                                        src: w.AS
                                    }) : ee ? (0, E.jsx)(l.Ee, {
                                        src: w.DR
                                    }) : (0, E.jsx)(l.Ee, {
                                        src: w.nt
                                    })
                                })
                            })]
                        }), L && (0, E.jsx)(b.Z, {
                            customNavigationHeight: _e,
                            onClose: function() {
                                B(!1), xe(!0)
                            },
                            onSubmit: function(e) {
                                (0, N.G3)("text_pv", 1), We.current(0), Qe(e, !1)
                            }
                        }), (0, E.jsxs)(l.G7, {
                            className: "blindIcon",
                            children: [(0, E.jsx)(l.Ee, {
                                src: R,
                                onClick: function() {
                                    console.log("~~~~~~~blindIcon~~~~~~~"), x().navigateToMiniProgram({
                                        appId: "wx8a1c8def35a6e32f",
                                        path: "pagesA/pages/Blindbox/index"
                                    })
                                }
                            }), (0, E.jsx)(k.Z, {
                                className: C,
                                isLogin: Ie,
                                onSuccess: function() {
                                    x().navigateTo({
                                        url: "/pagesA/pages/BlindBox/index"
                                    })
                                }
                            })]
                        })]
                    })
                }
                z.enableShareTimeline = !0, z.enableShareAppMessage = !0, Page((0, a.createPageConfig)(z, "pages/index/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "喜羊羊",
                    navigationBarBackgroundColor: "#B6C8E4",
                    navigationBarTextStyle: "white",
                    navigationStyle: "custom",
                    disableScroll: !0,
                    requiredBackgroundModes: ["audio"],
                    enableShareAppMessage: !0,
                    enableShareTimeline: !0
                } || {}))
            }
        },
        function(e) {
            e.O(0, [107, 216, 592], (function() {
                return function(n) {
                    return e(e.s = n)
                }(1973)
            })), e.O()
        }
    ]);