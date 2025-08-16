
require("../../@babel/runtime/helpers/Arrayincludes"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [631], {
        2429: function(e, s, c) {
            var n = c(2180),
                t = c(9439),
                i = c(3433),
                o = c(1515),
                l = c(2954),
                r = c.n(l),
                a = c(1829),
                u = c(2153),
                d = c(3644),
                h = c(3608),
                f = c(6261),
                p = c(9477),
                x = c(7294),
                g = c(1211),
                v = c(5893),
                m = function(e) {
                    var s = e.handleCancel;
                    return (0, v.jsx)(o.G7, {
                        className: "popup-mask",
                        children: (0, v.jsxs)(o.G7, {
                            className: "popup-container",
                            children: [(0, v.jsx)(o.G7, {
                                className: "popup-header",
                                children: (0, v.jsx)(o.Ee, {
                                    src: a.IO,
                                    onClick: function() {
                                        return s()
                                    },
                                    children: " "
                                })
                            }), (0, v.jsxs)(o.G7, {
                                className: "popup-body",
                                children: [(0, v.jsx)(o.G7, {
                                    className: "tips",
                                    children: "需要打开手机蓝牙哦"
                                }), (0, v.jsx)(o.Ee, {
                                    src: a.d8
                                })]
                            })]
                        })
                    })
                },
                j = c(3967),
                G = c.n(j),
                N = ["1. 确保小程序已获取必要授权：可点击小程序右上角三个点 “ ... ”，选择 [设置] ，允许所有要求的权限；", "2. 铃铛支持2.4G网络，手机热点请确保将个人热点设置为2.4G（苹果手机热点开启最大兼容性）；", "3. 确保输入正确的WiFi名称和密码；", "4. 若上述操作无误，仍然连接失败，可尝试以下操作后重新配网：", "· 将铃铛恢复出厂设置：唤醒铃铛，对铃铛说“恢复出厂设置”", "· 重启小程序：点击小程序右上角三个点 “ ... ”，选择 [重新进入小程序]。"];
             function C(e, s, c, n) {
                var t = {
                        wifiName: 1,
                        wifiPassword: 2,
                        openId: 3,
                        secretid: 4,
                        eqInfo: 129
                    }[e],
                    o = c || 0,
                    l = n || 0,
                    r = s.length;
                var a = function() {
                        var e = [];
                        return e.push(160), e.push(t), e.push(o), e.push(l), e.push(r), e.push.apply(e, (0, i.Z)(s)), e.push(function(e) {
                            return 1 + ~(255 & e.reduce((function(e, s) {
                                return e + s
                            }), 0))
                        }(e)), console.log("~~~~~~~binaryData~~~~~~~~~~~~~", e), e
                    }(),
                    u = new ArrayBuffer(a.length);
                return new Uint8Array(u).set(a), console.log(u), u
            }
             function b(e) {
                return Array.prototype.map.call(new Uint8Array(e), (function(e) {
                    return ("00" + e.toString(16)).slice(-2)
                })).join("")
            }
            Page((0, n.createPageConfig)((function() {
                var e = (0, x.useState)([]),
                    s = (0, t.Z)(e, 2),
                    c = s[0],
                    n = s[1],
                    j = (0, x.useRef)(""),
                    I = (0, x.useRef)(""),
                    w = (0, x.useRef)(""),
                    E = (0, x.useState)(!1),
                    B = (0, t.Z)(E, 2),
                    S = B[0],
                    y = B[1],
                    k = (0, x.useState)(2),
                    L = (0, t.Z)(k, 2),
                    F = L[0],
                    Z = L[1],
                    D = (0, x.useState)(""),
                    T = (0, t.Z)(D, 2),
                    W = T[0],
                    A = T[1],
                    R = (0, x.useState)(""),
                    P = (0, t.Z)(R, 2),
                    _ = P[0],
                    V = P[1],
                    M = (0, x.useState)(!1),
                    U = (0, t.Z)(M, 2),
                    J = U[0],
                    O = U[1],
                    q = (0, x.useState)(!1),
                    Y = (0, t.Z)(q, 2),
                    H = Y[0],
                    $ = Y[1],
                    z = (0, x.useState)(5),
                    K = (0, t.Z)(z, 2),
                    Q = K[0],
                    X = K[1];
                (0, l.useLoad)((function(e) {
                    console.log("Page loaded.", e);
                    var s = e.step;
                    Z(+(void 0 === s ? 2 : s)), ge()
                }));
                var ee = (0, x.useRef)((function(e) {}));
                ee.current = function(e) {
                    -1 === function(e, s, c) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n][s] === c) return n;
                        return -1
                    }(c, "deviceId", e.deviceId) && (n([].concat((0, i.Z)(c), [e])), console.log("~~~~~~~~~~~deviceRef~~~~~~~~~~~~~~~", e, [].concat((0, i.Z)(c), [e])), Z(3))
                };
                var se = function() {
                        console.log("~handleTestBluetoothAdapter~~"), r().openBluetoothAdapter({
                            success: function(e) {
                                console.log("open blueFi success: ", e), Z(2), ce(), ne(), ie()
                            },
                            fail: function(e) {
                                console.log("open blueFi fail: ", e), te(), 10001 === e.errCode && (console.log("open blueFi success2222222: ", e), y(!0))
                            }
                        })
                    },
                    ce = function() {
                        r().onBluetoothDeviceFound((function(e) {
                            e.devices.forEach((function(e) {
                                (e.name || e.localName) && (console.log("~~~~~~~~onBluetoothDeviceFound~~~~~~RES", e), (null == ee ? void 0 : ee.current) && ee.current(e))
                            }))
                        }))
                    },
                    ne = function() {
                        r().startBluetoothDevicesDiscovery({
                            services: ["0000FFFF-0000-1000-8000-00805F9B34FB"],
                            success: function() {
                                console.log("打开蓝牙搜索功能成功")
                            },
                            fail: function(e) {
                                console.log("打开蓝牙搜索功能失败", e)
                            }
                        })
                    },
                    te = function() {
                        r().onBluetoothAdapterStateChange((function(e) {
                            console.log("adapterState changed, now is", e), e.available && (y(!1), se())
                        }))
                    },
                    ie = function() {
                        r().getBluetoothDevices({
                            success: function(e) {
                                console.log("getBluetoothDevices", e)
                            }
                        })
                    },
                    oe = function() {
                        r().getBLEDeviceServices({
                            deviceId: I.current || "",
                            success: function(e) {
                                var s;
                                console.log("device services:", null == e ? void 0 : e.services), j.current = null == e || null === (s = e.services[0]) || void 0 === s ? void 0 : s.uuid, le(), setTimeout((function() {
                                    re(), setTimeout((function() {
                                        ae("eqInfo", "")
                                    }), 1e3)
                                }), 1500)
                            },
                            fail: function(e) {
                                console.log("device services:", e)
                            }
                        })
                    },
                    le = function() {
                        console.log("~~~~~~~~getBLEDeviceCharacteristics~~~~", I.current, j.current), r().getBLEDeviceCharacteristics({
                            deviceId: I.current || "",
                            serviceId: j.current,
                            success: function(e) {
                                console.log("device getBLEDeviceCharacteristics:", e.characteristics), w.current = e.characteristics
                            }
                        })
                    },
                    re = function() {
                        var e = (w.current || []).filter((function(e) {
                            var s;
                            return null == e || null === (s = e.properties) || void 0 === s ? void 0 : s.notify
                        }))[0].uuid;
                        console.log("~~~~~~~~notifyBLECharacteristicValueChange~~~~", w.current, e), r().notifyBLECharacteristicValueChange({
                            state: !0,
                            deviceId: I.current || "",
                            serviceId: j.current,
                            characteristicId: e,
                            success: function(e) {
                                var s = b(null == e ? void 0 : e.value);
                                console.log("notifyBLECharacteristicValueChange success", s, null == e ? void 0 : e.errMsg), de()
                            }
                        })
                    },
                    ae = function(e, s, c, n) {
                        var t = I.current,
                            i = j.current,
                            o = (w.current || []).filter((function(e) {
                                var s;
                                return null == e || null === (s = e.properties) || void 0 === s ? void 0 : s.write
                            }))[0].uuid;
                        console.log("发送写入指令:characteristicId=>" + o + "deviceId=>" + t + "serviceId=>" + i), console.log("发送写入指令:type=>" + e, "value=>" + s, "noSub=>" + c, "fenbaoNum=>" + n), r().writeBLECharacteristicValue({
                            deviceId: t || "",
                            serviceId: i,
                            characteristicId: o,
                            value: C(e, s, c, n),
                            success: function(e) {
                                console.log("写入成功" + JSON.stringify(e))
                            },
                            fail: function(e) {
                                console.log("写入数据失败" + e)
                            }
                        })
                    },
                    ue = function(e, s) {
                        var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                            n = function(e) {
                                console.log("~~~~str~~~~~~~~~~~", e);
                                for (var s = [], c = 0; c < e.length; c++) {
                                    var n = e.charCodeAt(c);
                                    n <= 127 ? s.push(n) : n <= 2047 ? s.push(192 | n >> 6, 128 | 63 & n) : s.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n)
                                }
                                return s
                            }(s),
                            t = n.length,
                            i = Math.ceil(t / 14);
                        console.log("~~~~~~~~~~~sendWriteFn~~~~~~~~~~~~~~~type=>", e, "str=>", s, "strByte=>", n, "byteNum=>", i);
                        for (var o = 0, l = 0; o < t; o += 14, l++) {
                            var r = n.slice(o, o + 14);
                            console.log("~~~~~for~~~~~~~~~~~", r, o, l, c[i - 1], c[l]), ae(e, r, c[i - 1], c[l])
                        }
                    },
                    de = function() {
                        r().onBLECharacteristicValueChange((function(e) {
                            console.log("特征值改变::   ", e);
                            var s = b(e.value);
                            console.log("更新后的特征值(16进制格式)", s), he(s)
                        }))
                    },
                    he = function(e) {
                        var s = function(e) {
                                for (var s = [], c = 0; c < e.length; c += 2) s.push(e.substr(c, 2));
                                return s
                            }(e),
                            c = e.slice(0, 6),
                            n = e.slice(0, 4);
                        console.log("~~~~~~~~~handleBlECharacteristicValueChange~~~~~~~", e, "splitData=>", s, "valueTag=>", c, "valueResutTag=>", n), "b00203" === c && xe(s), "b001" === n && (console.log("~~~~~~配网成功~~~~~~~~~"), r().setStorageSync("distributionNetworkResult", "success"), $(!0), X(3), setTimeout((function() {
                            Z(6)
                        }), 150)), "b000" === n && (console.log("~~~~~~配网失败~~~~~~~~~"), $(!1), X(4), setTimeout((function() {
                            Z(6)
                        }), 150))
                    },
                    fe = (0, x.useRef)(null),
                    pe = (0, x.useRef)(""),
                    xe = function(e) {
                        var s = function(e) {
                            for (var s = "", c = 0; c < e.length; c += 2) {
                                var n = parseInt(e.substring(c, c + 2), 16);
                                s += String.fromCharCode(n)
                            }
                            return s
                        }(e.slice(6, -1).join(""));
                        fe.current = fe.current ? "".concat(fe.current).concat(s) : s, console.log("~~~~~~~~~handleEqInfo~~~~~result~~", fe.current, s, e), 16 === fe.current.length && (console.log("~~~~~~~进入搜索设备状态~~~~~~~"), (0, p.F4)({
                            productId: "6575c573e0f23a0407b63a8a",
                            deviceId: fe.current
                        }).then((function(e) {
                            console.log("~~~~~~~authBindDevice~~~~~~~", e), pe.current = e.secret,
                                function() {
                                    var e = W || "",
                                        s = _ || "",
                                        c = pe.current || "";
                                    console.log("writeBLECharacteristicValueGroup", "wifname=>", e, "_wifiPassword=>", s, "secretId=>", c), ue("wifiName", e), ue("wifiPassword", s), ue("openId", "123456"), ue("secretid", c)
                                }(), X(2), fe.current = ""
                        })))
                    },
                    ge = function() {
                        r().getLocation({
                            type: "wgs84",
                            success: function(e) {
                                console.log("~~~~~getLocation~~~~~~", e)
                            }
                        }), r().getSetting({
                            success: function(e) {
                                var s = e.authSetting["scope.bluetooth"],
                                    c = e.authSetting["scope.userLocation"];
                                console.log("~~~~~~~getSetting~~~~~~~~~", e, s), !1 === s ? r().showModal({
                                    title: "提示！",
                                    confirmText: "去设置",
                                    showCancel: !1,
                                    content: "您未授权蓝牙权限，将无法使用相应功能，请前往设置中心授权蓝牙权限",
                                    success: function(e) {
                                        e.confirm && r().openSetting()
                                    }
                                }) : !1 === c ? r().showModal({
                                    title: "提示！",
                                    confirmText: "去设置",
                                    showCancel: !1,
                                    content: "您未授权位置信息权限，将无法使用相应功能，请前往设置中心授权位置信息权限",
                                    success: function(e) {
                                        e.confirm && r().openSetting()
                                    }
                                }) : (console.log("~~~~~~~~xxx~~~~~ok~"), se())
                            }
                        })
                    };
                return (0, v.jsxs)(o.G7, {
                    className: "index",
                    children: [(0, v.jsx)(g.Z, {
                        showBack: !0,
                        goBack: function() {
                            [2, 3, 6].includes(F) ? (0, d.UY)(h.i.Package, h.i.Home) : Z(F - 1)
                        }
                    }), 1 === F && (0, v.jsxs)(o.G7, {
                        className: "pre-box",
                        children: [(0, v.jsx)(o.G7, {
                            className: "pre-bg",
                            children: (0, v.jsx)(o.Ee, {
                                src: a.wU
                            })
                        }), (0, v.jsxs)(o.G7, {
                            className: "pre-tips",
                            children: [(0, v.jsxs)(o.G7, {
                                children: ["连续按三次铃铛上的", (0, v.jsx)(o.xv, {
                                    className: "text",
                                    children: "[按键]"
                                })]
                            }), (0, v.jsx)(o.G7, {
                                children: "听到铃铛提示音“开始配网”"
                            }), (0, v.jsx)(o.G7, {
                                children: "点击下方按钮进入下一步"
                            })]
                        }), (0, v.jsx)(u.Z, {
                            text: "下一步",
                            handleClick: function() {
                                ge()
                            }
                        })]
                    }), 2 === F && (0, v.jsxs)(o.G7, {
                        className: "link-box",
                        children: [(0, v.jsxs)(o.G7, {
                            className: "content",
                            children: [(0, v.jsx)(o.G7, {
                                className: "title",
                                children: "搜索铃铛..."
                            }), (0, v.jsx)(o.G7, {
                                className: "tips ",
                                children: "需连按3次铃铛按键，听到铃铛提示：“进入配网”"
                            })]
                        }), (0, v.jsx)(o.G7, {
                            className: "bg",
                            children: (0, v.jsx)(o.Ee, {
                                src: a.JJ
                            })
                        }), (0, v.jsx)(o.G7, {
                            className: "bottom-tips",
                            onClick: function() {
                                (0, f.G3)("miss_device_pv", 1), (0, d.c4)(h.i.Package, h.i.LinkExplain)
                            },
                            children: "搜不到铃铛？"
                        })]
                    }), 3 === F && (0, v.jsxs)(o.G7, {
                        className: "link-list-box",
                        children: [(0, v.jsx)(o.G7, {
                            className: "title",
                            children: "附近的铃铛"
                        }), (0, v.jsx)(o.G7, {
                            className: "list-box",
                            children: (c || []).map((function(e, s) {
                                return (0, v.jsxs)(o.G7, {
                                    className: "list-item",
                                    children: [(0, v.jsx)(o.Ee, {
                                        src: a.Ge
                                    }), (0, v.jsxs)(o.G7, {
                                        className: "content",
                                        children: [(0, v.jsx)(o.G7, {
                                            className: "name",
                                            children: "喜羊羊超能铃铛"
                                        }), (0, v.jsxs)(o.G7, {
                                            className: "detail",
                                            children: ["铃铛编码： ", (null == e ? void 0 : e.deviceId) || ""]
                                        })]
                                    }), (0, v.jsx)(o.G7, {
                                        className: "handle",
                                        children: (0, v.jsx)(u.Z, {
                                            text: "去连接",
                                            type: u._.SMALL,
                                            handleClick: function() {
                                                I.current = (null == e ? void 0 : e.deviceId) || "", Z(4), r().startWifi({
                                                    success: function(e) {
                                                        console.log("startWifistartWifi", e.errMsg)
                                                    }
                                                }), r().getConnectedWifi({
                                                    success: function(e) {
                                                        console.log("~~~~~getConnectedWifi~~~~~~", e);
                                                        var s = e.wifi;
                                                        A(s.SSID)
                                                    }
                                                })
                                            }
                                        })
                                    })]
                                }, s)
                            }))
                        })]
                    }), 4 === F && (0, v.jsxs)(o.G7, {
                        className: "input-wifi-box",
                        children: [(0, v.jsx)(o.G7, {
                            className: "title",
                            children: "连接网路"
                        }), (0, v.jsx)(o.G7, {
                            className: "tips",
                            children: "手机热点支持2.4G网络（苹果手机热点需开启最大兼容性）"
                        }), (0, v.jsxs)(o.G7, {
                            className: "input-box",
                            children: [(0, v.jsxs)(o.G7, {
                                className: G()("input-item", "name"),
                                children: [(0, v.jsx)(o.II, {
                                    onInput: function(e) {
                                        A(e.detail.value)
                                    },
                                    placeholderStyle: "color:#999",
                                    value: W,
                                    className: "input",
                                    placeholder: "请输入 Wi-Fi 名称"
                                }), (0, v.jsx)(o.Ee, {
                                    onClick: function() {
                                        A("")
                                    },
                                    src: a.Ux
                                })]
                            }), (0, v.jsxs)(o.G7, {
                                className: G()("input-item", "password"),
                                children: [(0, v.jsx)(o.II, {
                                    onInput: function(e) {
                                        (function(e) {
                                            return /^[\x00-\x7F]*$/.test(e)
                                        })(e.detail.value) && V(e.detail.value)
                                    },
                                    placeholderStyle: "color:#999",
                                    value: _,
                                    className: "input",
                                    password: !J,
                                    placeholder: "请输入 Wi-Fi 密码"
                                }), (0, v.jsx)(o.Ee, {
                                    onClick: function() {
                                        O(!J)
                                    },
                                    src: J ? a.te : a.Rk
                                })]
                            })]
                        }), (0, v.jsx)(u.Z, {
                            text: "下一步",
                            type: u._.LONG,
                            handleClick: function() {
                                (0, f.G3)("connect_net_pv", 1), console.log("~~~~~~~createBLEConnection~~~~", I.current), r().createBLEConnection({
                                    deviceId: I.current || "",
                                    success: function(e) {
                                        console.log("createBLEConnection success", e), oe()
                                    }
                                }), Z(5)
                            }
                        })]
                    }), 5 === F && (0, v.jsxs)(o.G7, {
                        className: "search-box",
                        children: [(0, v.jsx)(o.G7, {
                            className: "title",
                            children: "连接中..."
                        }), (0, v.jsx)(o.G7, {
                            className: "tips",
                            children: "请将手机靠近铃铛（小于2米）"
                        }), (0, v.jsx)(o.Ee, {
                            src: a.cE
                        }), (0, v.jsxs)(o.G7, {
                            className: "seach-step",
                            children: [(0, v.jsxs)(o.G7, {
                                className: "step-item",
                                children: [(0, v.jsx)(o.Ee, {
                                    src: a.c8
                                }), (0, v.jsx)(o.G7, {
                                    className: "step-text",
                                    children: "搜到了铃铛"
                                })]
                            }), Q > 1 && (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsxs)(o.G7, {
                                    className: "step-item",
                                    children: [(0, v.jsx)(o.Ee, {
                                        src: a.c8
                                    }), (0, v.jsx)(o.G7, {
                                        className: "step-text",
                                        children: "发送WiFi名称和密码"
                                    })]
                                }), (0, v.jsxs)(o.G7, {
                                    className: "step-item",
                                    children: [(0, v.jsx)(o.Ee, {
                                        src: a.c8
                                    }), (0, v.jsx)(o.G7, {
                                        className: "step-text",
                                        children: "收到WiFi名称和密码"
                                    })]
                                }), Q >= 2 && (0, v.jsxs)(o.G7, {
                                    className: G()("loading", "step-item"),
                                    children: [(0, v.jsx)(o.Ee, {
                                        src: a.ko
                                    }), (0, v.jsx)(o.G7, {
                                        className: "step-text",
                                        children: "铃铛连接WiFi中"
                                    })]
                                })]
                            })]
                        })]
                    }), 6 === F && (0, v.jsxs)(o.G7, {
                        className: "result-box",
                        children: [(0, v.jsx)(o.Ee, {
                            className: H ? "success" : "error",
                            src: H ? a.Yk : a.lT
                        }), (0, v.jsx)(o.G7, {
                            className: "title",
                            children: H ? "连接成功" : "连接失败"
                        }), H ? (0, v.jsx)(o.G7, {
                            className: "tips",
                            children: "开始和喜羊羊聊天吧"
                        }) : (0, v.jsx)(o.G7, {
                            className: "explain",
                            children: N.map((function(e, s) {
                                return (0, v.jsx)(o.G7, {
                                    className: "explain-item",
                                    children: (0, v.jsx)(o.G7, {
                                        className: "content",
                                        children: e
                                    })
                                }, s)
                            }))
                        }), (0, v.jsx)(o.G7, {
                            className: "btn",
                            children: (0, v.jsx)(u.Z, {
                                text: H ? "完成" : "重试",
                                handleClick: function() {
                                    r().closeBluetoothAdapter({
                                        success: function(e) {
                                            console.log(e)
                                        },
                                        fail: function(e) {
                                            console.log("===> 关闭失败", e)
                                        },
                                        complete: function() {
                                            H || (0, f.G3)("reconnect_net_pv", 1), (0, d.UY)(h.i.Package, h.i.Home)
                                        }
                                    })
                                }
                            })
                        })]
                    }), S && (0, v.jsx)(m, {
                        handleCancel: function() {
                            y(!1)
                        }
                    })]
                })
            }), "pages/link/index", {
                root: {
                    cn: []
                }
            }, {
                navigationBarTitleText: "",
                navigationStyle: "custom",
                disableScroll: !0,
                permission: {
                    "scope.userLocation": {
                        desc: "你的位置信息将用于小程序获取周边蓝牙设备信息"
                    }
                }
            } || {}))
        }
    },
    function(e) {
        e.O(0, [107, 216, 592], (function() {
            return s = 2429, e(e.s = s);
            var s
        })), e.O()
    }
]);