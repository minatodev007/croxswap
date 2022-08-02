(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [15], {
        1196: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "g", (function() {
                return j
            })), n.d(t, "a", (function() {
                return x
            })), n.d(t, "d", (function() {
                return b
            }));
            var c = n(3),
                i = n.n(c),
                a = n(8),
                r = n(1210),
                s = function(e, t) {
                    var n = t.cakePrice,
                        c = t.bnbPrice,
                        s = new i.a(e.croxPerBlock || 1).times(new i.a(e.poolWeight)).div(new i.a(10).pow(18)).times(r.b),
                        o = n.times(s),
                        l = new i.a(e.lpTotalInQuoteToken || 0);
                    return e.quoteTokenSymbol === a.a.BNB && (l = l.times(c)), e.quoteTokenSymbol === a.a.CAKE && (l = n.times(e.lpTotalInQuoteToken)), l.comparedTo(0) > 0 && (o = o.div(l)), {
                        apy: o,
                        totalValue: l
                    }
                },
                o = function(e, t) {
                    var n = t.rastaPrice,
                        c = t.ethPriceUsd,
                        s = t.bnbPrice,
                        o = t.cakePriceVsBNB,
                        l = r.c.times(e.poolWeight),
                        d = l.times(r.b),
                        j = o.times(d).div(e.lpTotalInQuoteToken);
                    if (e.quoteTokenSymbol === a.a.BUSD || e.quoteTokenSymbol === a.a.UST) j = o.times(d).div(e.lpTotalInQuoteToken).times(s);
                    else if (e.quoteTokenSymbol === a.a.ETH) j = n.div(c).times(d).div(e.lpTotalInQuoteToken);
                    else if (e.quoteTokenSymbol === a.a.RASTA) j = d.div(e.lpTotalInQuoteToken);
                    else if (e.dual) {
                        var x = e && o.times(l).times(r.b).div(e.lpTotalInQuoteToken),
                            b = e.tokenPriceVsQuote && new i.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(r.b).div(e.lpTotalInQuoteToken);
                        j = x && b && x.plus(b)
                    }
                    return j
                },
                l = function(e, t) {
                    var n = t.cakePrice,
                        c = (t.bnbPrice, new i.a(e.croxPerBlock || 1).times(new i.a(e.poolWeight)).div(new i.a(10).pow(18)).times(r.b)),
                        a = n.times(c),
                        s = new i.a("NaN" === e.lpTotalInQuoteToken ? 1e-4 : e.lpTotalInQuoteToken);
                    return s.comparedTo(0) > 0 && (a = a.div(s)), {
                        apy: a,
                        totalValue: s
                    }
                },
                d = function(e, t) {
                    var n = t.cakePrice,
                        c = t.bnbPrice,
                        s = new i.a(e.rewardPerBlock || 1).div(1e18),
                        o = new i.a(e.secRewardPerBlock || 1).div(1e18),
                        l = s.times(new i.a(r.a)).times(new i.a(365)),
                        d = o.times(new i.a(r.a)).times(new i.a(365)),
                        j = n.times(l),
                        x = new i.a(e.tokenPrice).times(d).times(Math.pow(10, e && (null === e || void 0 === e ? void 0 : e.tokenDecimal) ? 18 - e.tokenDecimal : 0)),
                        b = new i.a(e.lpTotalInQuoteToken || 0);
                    return (b = e.tokenSymbol === a.a.BNB ? b.times(c) : e.tokenSymbol === a.a.CAKE ? n.times(e.lpTotalInQuoteToken) : new i.a(e.quoteTokenPrice).times(e.lpTotalInQuoteToken)).comparedTo(0) > 0 && (x = x.div(b), j = j.div(b)), {
                        apy1: x,
                        apy2: j,
                        totalValue: b
                    }
                },
                j = function(e, t) {
                    var n = t.cakePrice,
                        c = t.bnbPrice,
                        s = e[0].rewardTokens.map((function(e) {
                            e.tokenSymbol;
                            var t = e.tokenPrice,
                                n = e.rewardPerBlock,
                                c = new i.a(n).times(new i.a(r.a)).times(new i.a(365));
                            return new i.a(t).times(c)
                        })),
                        o = n.times(e.lpBalance).div(1e18);
                    return e.revert && (o = new i.a(e.quoteTokenPrice).times(e.lpBalance)), e.isLPToken && (o = new i.a(e.lpTotalInQuoteToken || 0), o = e.tokenSymbol === a.a.BNB ? o.times(c) : e.tokenSymbol === a.a.CAKE ? n.times(e.lpTotalInQuoteToken) : new i.a(e.quoteTokenPrice).times(e.lpTotalInQuoteToken)), o.comparedTo(0) > 0 && (s = s.map((function(e) {
                        return e.div(o)
                    }))), {
                        apys: s,
                        totalGrandValue: o
                    }
                },
                x = function(e, t) {
                    var n = t.cakePrice,
                        c = t.bnbPrice,
                        s = new i.a(e.rewardPerBlock || 1).div(1e18),
                        o = new i.a(e.secRewardPerBlock || 1).div(1e18),
                        l = s.times(new i.a(r.a)).times(new i.a(365)),
                        d = o.times(new i.a(r.a)).times(new i.a(365)),
                        j = new i.a(e.tokenPrice).times(l),
                        x = new i.a(e.tokenPrice).times(d).times(Math.pow(10, (null === e || void 0 === e ? void 0 : e.lpTokenDecimal) ? 18 - e.lpTokenDecimal : 0));
                    "CNR" === e.tokenSymbol && "CROX" === e.lpSymbol && (j = new i.a(e.tokenPrice).times(l).times(Math.pow(10, 10))), "CNS" === e.tokenSymbol && "CROX" === e.lpSymbol && (j = new i.a(e.tokenPrice).times(l).times(Math.pow(10, 10))), e.rewardTokenSymbol && (x = new i.a(e.rewardTokenPrice).times(d)), e.isDualFarm || (x = new i.a(0));
                    var b = n.times(e.lpBalance);
                    return e.revert && (b = new i.a(e.quoteTokenPrice).times(e.lpBalance)), e.isLPToken && (b = new i.a(e.lpTotalInQuoteToken || 0), b = e.tokenSymbol === a.a.BNB ? b.times(c) : e.tokenSymbol === a.a.CAKE ? n.times(e.lpTotalInQuoteToken) : new i.a(e.quoteTokenPrice).times(e.lpTotalInQuoteToken)), b.comparedTo(0) > 0 && (j = j.div(b), x = x.div(b)), {
                        apy1: j,
                        apy2: x,
                        totalValue: b
                    }
                },
                b = function(e, t) {
                    var n = t.cakePrice,
                        c = t.bnbPrice,
                        s = new i.a(e.rewardPerBlock || 1).div(1e18),
                        o = new i.a(e.secRewardPerBlock || 1).div(1e8),
                        l = s.times(new i.a(r.a)).times(new i.a(365)),
                        d = o.times(new i.a(r.a)).times(new i.a(365)),
                        j = new i.a(e.tokenPrice).times(l).times(Math.pow(10, (null === e || void 0 === e ? void 0 : e.tokenDecimal) ? 18 - e.tokenDecimal : 0)),
                        x = new i.a(e.tokenPrice).times(d).times(Math.pow(10, (null === e || void 0 === e ? void 0 : e.tokenDecimal) ? 18 - e.tokenDecimal : 0)),
                        b = n.times(e.lpBalance);
                    return "CROX" !== e.lpSymbol && (b = new i.a(e.tokenPrice).times(e.lpBalance)), e.isLPToken && (b = new i.a(e.lpTotalInQuoteToken || 0), b = e.tokenSymbol === a.a.BNB ? b.times(c) : e.tokenSymbol === a.a.CAKE ? n.times(e.lpTotalInQuoteToken) : new i.a(e.quoteTokenPrice).times(e.lpTotalInQuoteToken)), b.comparedTo(0) > 0 && (j = j.div(b), x = x.div(b)), {
                        apy1: j,
                        apy2: x,
                        totalValue: b
                    }
                }
        },
        1210: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "d", (function() {
                return s
            }));
            var c = n(378);
            c.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            new c.a(.5);
            var i = new c.a(.2),
                a = new c.a(10512e3),
                r = new c.a(28800),
                s = 1
        },
        1241: function(e, t, n) {},
        1311: function(e, t, n) {},
        1312: function(e, t, n) {},
        1417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return On
            }));
            var c, i, a, r, s = n(20),
                o = n(33),
                l = n(0),
                d = n.n(l),
                j = n(6),
                x = n(54),
                b = n(192),
                h = n(374),
                p = n(1182),
                O = n(1179),
                m = n(1181),
                u = n(1408),
                g = n(1177),
                f = n(1262),
                y = n(375),
                w = n(13),
                v = n(4),
                C = n.n(v),
                k = n(10),
                S = n(9),
                A = n(378),
                F = n(214),
                T = n(157),
                L = n.n(T),
                N = n(273),
                P = n(39),
                z = n(1302),
                D = n(352),
                R = n(1303),
                I = n(1178),
                B = n(217),
                _ = n(102),
                E = n(2),
                V = Object(j.e)(S.f)(c || (c = Object(o.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  position: initial;\n"]))),
                M = j.e.div(i || (i = Object(o.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),
                $ = Object(j.e)(S.n)(a || (a = Object(o.a)(["\n  text-align: center;\n  font-size: 20px;\n  margin-top: 12px;\n  border-top: 1px solid #3b3c4e;\n  padding-top: 12px;\n"]))),
                H = Object(j.e)(S.m)(r || (r = Object(o.a)(["\n  background-color: #3b3c4e;\n  padding: 5px 10px;\n  border-radius: 10px;\n"]))),
                X = function() {
                    var e = Object(_.y)(),
                        t = Object(h.a)(),
                        n = Object(N.d)(),
                        c = Object(N.b)(Object(P.a)()),
                        i = Object(N.c)(),
                        a = Object(_.m)(),
                        r = Object(_.s)(),
                        s = n ? n.minus(c) : new A.a(0),
                        o = (Object(F.a)(s), r.times(s));
                    a && a[0] && a[0].croxPerBlock && new A.a(a[0].croxPerBlock).div(new A.a(10).pow(18)).toNumber();
                    var d = Object(I.a)("(max-width: 600px)");
                    Object(l.useEffect)((function() {
                        var t = function() {
                            var t = Object(k.a)(C.a.mark((function t() {
                                return C.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, L.a.post("https://powerful-earth-33741.herokuapp.com/record/add/bnb?bnbtvl=".concat(e, "&bnbCroxStake=").concat(Object(F.a)(i)));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        t()
                    }), [e, i]);
                    var j = Object(l.useState)([]),
                        x = Object(w.a)(j, 2),
                        b = x[0],
                        p = x[1];
                    Object(l.useEffect)((function() {
                        var e = function() {
                            var e = Object(k.a)(C.a.mark((function e() {
                                var t;
                                return C.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, L.a.get("https://powerful-earth-33741.herokuapp.com/record/get");
                                        case 2:
                                            t = e.sent, p(t.data[0]);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []);
                    var O = Number(b.hecotvl),
                        m = Number(b.hecoCroxStake);
                    return Object(E.jsx)("div", {
                        style: {
                            flex: "auto"
                        },
                        children: Object(E.jsx)(V, {
                            style: {
                                marginBottom: "10px"
                            },
                            children: Object(E.jsxs)(S.g, {
                                children: [Object(E.jsxs)(S.m, {
                                    alignItems: "center",
                                    style: {
                                        backgroundColor: "#3b3c4e",
                                        width: "140px",
                                        padding: "3px 10px",
                                        borderRadius: "5px"
                                    },
                                    children: [Object(E.jsx)(D.c, {
                                        style: {
                                            color: "white",
                                            fontSize: "20px"
                                        }
                                    }), Object(E.jsx)(S.A, {
                                        color: "white",
                                        fontSize: "17px",
                                        bold: !0,
                                        ml: "3px",
                                        children: "CROX STATS"
                                    })]
                                }), Object(E.jsxs)(M, {
                                    style: {
                                        marginTop: "20px"
                                    },
                                    children: [Object(E.jsx)(S.A, {
                                        fontSize: "17px",
                                        color: "textSubtle",
                                        bold: !0,
                                        children: t(10005, "Market Cap")
                                    }), Object(E.jsx)(B.a, {
                                        fontSize: "18px",
                                        value: Object(F.a)(o),
                                        prefix: "$",
                                        decimals: 0
                                    })]
                                }), Object(E.jsxs)(M, {
                                    style: {
                                        marginTop: "-10px"
                                    },
                                    children: [Object(E.jsx)(S.A, {
                                        bold: !0,
                                        fontSize: "17px",
                                        color: "textSubtle",
                                        children: "Total CROX Staked"
                                    }), i && Object(E.jsx)(S.A, {
                                        fontSize: "18px",
                                        color: "textSubtle",
                                        bold: !0,
                                        children: Object(E.jsx)(z.a, {
                                            isCounting: !0,
                                            end: Object(F.a)(i) + m,
                                            thousandsSeparator: ",",
                                            decimalPlaces: 0
                                        })
                                    })]
                                }), Object(E.jsxs)($, {
                                    fontSize: "18px",
                                    color: "textSubtle",
                                    children: [Object(E.jsx)(R.a, {
                                        style: {
                                            fontSize: "22px",
                                            marginRight: "5px",
                                            color: "textSubtle"
                                        }
                                    }), t(999, "Total Value Locked (TVL)")]
                                }), Object(E.jsx)("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: Object(E.jsxs)(S.A, {
                                        fontSize: "27px",
                                        color: "textSubtle",
                                        bold: !0,
                                        children: ["$", Object(E.jsx)(z.a, {
                                            isCounting: !0,
                                            end: e.toNumber() + O,
                                            thousandsSeparator: ",",
                                            decimalPlaces: 2
                                        })]
                                    })
                                }), Object(E.jsxs)(S.m, {
                                    justifyContent: "space-between",
                                    p: "0 10px",
                                    flexDirection: d ? "column" : "row",
                                    children: [Object(E.jsxs)(H, {
                                        justifyContent: "center",
                                        children: [Object(E.jsx)("img", {
                                            src: "/images/network/bsc_icon.png",
                                            alt: "BSC",
                                            style: {
                                                width: "22px",
                                                height: "21px"
                                            }
                                        }), Object(E.jsx)(S.A, {
                                            bold: !0,
                                            mr: "5px",
                                            color: "#e0ae32",
                                            children: "TVL"
                                        }), Object(E.jsx)(B.a, {
                                            fontSize: "16px",
                                            value: e.toNumber(),
                                            prefix: "$",
                                            decimals: 2
                                        })]
                                    }), Object(E.jsxs)(H, {
                                        justifyContent: "center",
                                        mt: d && "3px",
                                        alignItems: "center",
                                        children: [Object(E.jsx)("img", {
                                            src: "/images/network/heco_icon.png",
                                            alt: "HECO",
                                            style: {
                                                width: "22px",
                                                height: "21px",
                                                marginTop: "-3px"
                                            }
                                        }), Object(E.jsx)(S.A, {
                                            bold: !0,
                                            mr: "5px",
                                            color: "#01943f",
                                            children: "TVL"
                                        }), Object(E.jsxs)(S.A, {
                                            color: "textSubtle",
                                            bold: !0,
                                            children: ["$", Object(E.jsx)(z.a, {
                                                isCounting: !0,
                                                end: O,
                                                thousandsSeparator: ",",
                                                decimalPlaces: 2
                                            })]
                                        })]
                                    })]
                                }), Object(E.jsx)("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: Object(E.jsx)(S.A, {
                                        bold: !0,
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        children: t(999, "Across all Farms and Pools")
                                    })
                                })]
                            })
                        })
                    })
                },
                W = n(47),
                Q = n(1242),
                q = n(255),
                U = n.n(q),
                G = n(115),
                Z = n(3),
                K = n.n(Z),
                Y = n(122),
                J = n(1197),
                ee = n(1263),
                te = n(14),
                ne = n(22),
                ce = n(80),
                ie = n(1252),
                ae = n(123),
                re = function() {
                    var e = Object(l.useState)([]),
                        t = Object(w.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(G.m)().account,
                        a = Object(ae.a)().fastRefresh;
                    return Object(l.useEffect)((function() {
                        var e = function() {
                            var e = Object(k.a)(C.a.mark((function e() {
                                var t, n, a;
                                return C.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = ie.a.map((function(e) {
                                                return {
                                                    address: Object(P.d)(),
                                                    name: "pendingCrox",
                                                    params: [e.pid, i]
                                                }
                                            })), e.next = 3, Object(ne.a)(ce, t);
                                        case 3:
                                            n = e.sent, a = ie.a.map((function(e, t) {
                                                return Object(te.a)(Object(te.a)({}, e), {}, {
                                                    balance: new K.a(n[t])
                                                })
                                            })), c(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        i && e()
                    }), [i, a]), n
                },
                se = n(1427),
                oe = n(1387),
                le = n(1240),
                de = n(1424),
                je = n(1436),
                xe = n(1187),
                be = n(1435),
                he = n(1384),
                pe = n(1385),
                Oe = n(1386),
                me = n(1196),
                ue = n(1310),
                ge = n.n(ue),
                fe = n(1264),
                ye = function(e) {
                    var t = e.farmPid,
                        n = e.farmImage,
                        c = e.lpSymbol,
                        i = e.farmApy,
                        a = e.stakedBalance,
                        r = e.lpWorth,
                        s = e.earnings,
                        o = e.multiplier,
                        l = Object(J.e)(t).onReward,
                        d = Object(_.s)().toNumber();
                    return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                            children: Object(E.jsxs)(S.m, {
                                alignItems: "center",
                                justifyContent: "left",
                                ml: "10px",
                                children: [Object(E.jsx)("img", {
                                    src: "/images/farms/".concat(n, ".svg"),
                                    alt: "crox",
                                    width: 35,
                                    height: 35,
                                    style: {
                                        margin: "0 5px"
                                    }
                                }), Object(E.jsxs)("div", {
                                    children: [c, Object(E.jsx)(S.A, {
                                        fontSize: "14px",
                                        color: "#2d74c4",
                                        className: "farm_type",
                                        children: "Farm"
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("td", {
                            children: [i.times(new K.a(100)).toNumber().toFixed(2), "%"]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: [Object(F.a)(a).toFixed(2), "LP"]
                            }), "$", (Object(F.a)(a) * r).toFixed(2)]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.m, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "white",
                                    children: Object(F.a)(s).toFixed(2)
                                }), Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "#2d74c4",
                                    children: "CROX"
                                })]
                            }), Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", (Object(F.a)(s) * d).toFixed(2)]
                            })]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", (Object(F.a)(s) * d).toFixed(2)]
                            }), s && Object(F.a)(s) * d !== 0 ? Object(E.jsx)(se.a, {
                                variant: "contained",
                                onClick: function() {
                                    return l()
                                },
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                children: "Claim"
                            }) : Object(E.jsx)(se.a, {
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    color: "grey"
                                },
                                disabled: !0,
                                children: "Claimed"
                            })]
                        }), Object(E.jsx)("td", {
                            children: "0X" === o ? Object(E.jsx)(S.A, {
                                className: "finished_farm",
                                children: "Finished"
                            }) : Object(E.jsx)(S.A, {
                                className: "farming_farm",
                                children: "Farming"
                            })
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: [Object(F.a)(a).toFixed(2), "LP"]
                            }), Object(E.jsx)(se.a, {
                                color: "error",
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2D3748"
                                },
                                children: "Unstake"
                            })]
                        })]
                    })
                },
                we = function(e) {
                    var t = e.farmPid,
                        n = e.poolImage,
                        c = e.lpSymbol,
                        i = e.poolApy,
                        a = e.stakedBalance,
                        r = e.lpWorth,
                        s = e.earnings,
                        o = e.multiplier,
                        l = Object(J.e)(t).onReward,
                        d = Object(_.s)().toNumber();
                    return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                            children: Object(E.jsxs)(S.m, {
                                alignItems: "center",
                                justifyContent: "left",
                                ml: "10px",
                                children: [Object(E.jsx)("img", {
                                    src: "/images/farms/".concat(n, ".svg"),
                                    alt: "crox",
                                    width: 35,
                                    height: 35,
                                    style: {
                                        margin: "0 5px"
                                    }
                                }), Object(E.jsxs)("div", {
                                    children: [c, Object(E.jsx)(S.A, {
                                        fontSize: "14px",
                                        color: "#2d74c4",
                                        className: "farm_type",
                                        style: {
                                            minWidth: "80px"
                                        },
                                        children: "Pool"
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("td", {
                            children: [i.times(new K.a(100)).toNumber().toFixed(2), "%"]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: ["CNR" === c ? Object(F.a)(a, 8).toFixed(2) : Object(F.a)(a).toFixed(2), "LP"]
                            }), "$", "CNR" === c ? (Object(F.a)(a, 8) * r).toFixed(2) : (Object(F.a)(a) * r).toFixed(2)]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.m, {
                                justifyContent: "center",
                                alignItems: "center",
                                children: [Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "white",
                                    children: Object(F.a)(s).toFixed(2)
                                }), Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "#2d74c4",
                                    children: c
                                })]
                            }), Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                children: ["$", (Object(F.a)(s) * d).toFixed(2)]
                            })]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", (Object(F.a)(s) * d).toFixed(2)]
                            }), Object(E.jsx)(se.a, {
                                variant: "contained",
                                onClick: Object(k.a)(C.a.mark((function e() {
                                    return C.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", l());
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                children: "Claim"
                            })]
                        }), Object(E.jsx)("td", {
                            children: "0X" === o ? Object(E.jsx)(S.A, {
                                className: "finished_farm",
                                children: "Finished"
                            }) : Object(E.jsx)(S.A, {
                                className: "farming_farm",
                                children: "Farming"
                            })
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: ["CNR" === c ? Object(F.a)(a, 8).toFixed(2) : Object(F.a)(a).toFixed(2), c]
                            }), Object(E.jsx)(se.a, {
                                color: "error",
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2D3748"
                                },
                                children: "Unstake"
                            })]
                        })]
                    })
                },
                ve = function(e) {
                    var t = e.farmAddress,
                        n = e.farmImage,
                        c = e.lpSymbol,
                        i = e.farmApy,
                        a = e.stakedBalance,
                        r = e.lpWorth,
                        s = e.earnings,
                        o = e.active,
                        l = e.tokenPrice,
                        d = e.tokenSymbol,
                        j = Object(J.c)(t).onReward,
                        x = Object(_.s)().toNumber();
                    return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                            children: Object(E.jsxs)(S.m, {
                                alignItems: "center",
                                justifyContent: "left",
                                ml: "10px",
                                children: [Object(E.jsx)("img", {
                                    src: "/images/farms/".concat(n, ".svg"),
                                    alt: "crox",
                                    width: 35,
                                    height: 35,
                                    style: {
                                        margin: "0 5px"
                                    }
                                }), Object(E.jsxs)("div", {
                                    children: [c, Object(E.jsx)(S.A, {
                                        fontSize: "14px",
                                        color: "#2d74c4",
                                        className: "farm_type",
                                        children: "DualFarm"
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("td", {
                            children: [i.times(new K.a(100)).toNumber().toFixed(2), "%"]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: [Object(F.a)(a).toFixed(2), "LP"]
                            }), "$", (Object(F.a)(a) * r).toFixed(2)]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.m, {
                                justifyContent: "center",
                                alignItems: "center",
                                children: [Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "white",
                                    children: Object(F.a)(s[0]).toFixed(2)
                                }), Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "#2d74c4",
                                    children: "CROX"
                                }), Object(E.jsxs)(S.A, {
                                    fontSize: "14px",
                                    color: "white",
                                    children: [" + ", Object(F.a)(s[1]).toFixed(2)]
                                }), Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "#2d74c4",
                                    children: d
                                })]
                            }), Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", (Object(F.a)(s[0]) * x).toFixed(2), " + $", (Object(F.a)(s[1]) * l).toFixed(2)]
                            }), Object(E.jsx)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: "(A) + (B)"
                            })]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", (Object(F.a)(s[0]) * x + Object(F.a)(s[1]) * l).toFixed(2)]
                            }), s && Object(F.a)(s) * x !== 0 ? Object(E.jsx)(se.a, {
                                variant: "contained",
                                onClick: function() {
                                    return j()
                                },
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                children: "Claim"
                            }) : Object(E.jsx)(se.a, {
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    color: "grey"
                                },
                                disabled: !0,
                                children: "Claimed"
                            })]
                        }), Object(E.jsx)("td", {
                            children: o ? Object(E.jsx)(S.A, {
                                className: "farming_farm",
                                children: "Farming"
                            }) : Object(E.jsx)(S.A, {
                                className: "finished_farm",
                                children: "Finished"
                            })
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: [Object(F.a)(a).toFixed(2), "LP"]
                            }), Object(E.jsx)(se.a, {
                                color: "error",
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2D3748"
                                },
                                children: "Unstake"
                            })]
                        })]
                    })
                },
                Ce = function(e) {
                    var t = e.farmAddress,
                        n = e.nextgenImage,
                        c = e.lpSymbol,
                        i = e.nextgenApy,
                        a = e.stakedBalance,
                        r = e.earnings,
                        s = e.active,
                        o = e.tokenPrice,
                        l = e.tokenSymbol,
                        d = Object(J.c)(t).onReward;
                    Object(_.s)().toNumber();
                    return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                            children: Object(E.jsxs)(S.m, {
                                alignItems: "center",
                                justifyContent: "left",
                                ml: "10px",
                                children: [Object(E.jsx)("img", {
                                    src: "/images/farms/".concat(n, ".svg"),
                                    alt: "crox",
                                    width: 35,
                                    height: 35,
                                    style: {
                                        margin: "0 5px"
                                    }
                                }), Object(E.jsxs)("div", {
                                    children: [l, Object(E.jsx)(S.A, {
                                        fontSize: "14px",
                                        color: "#2d74c4",
                                        className: "farm_type",
                                        style: {
                                            minWidth: "80px"
                                        },
                                        children: "NextGen"
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("td", {
                            children: [i.times(new K.a(100)).toNumber().toFixed(2), "%"]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: ["CNR" === c ? Object(F.a)(a, 8).toFixed(2) : Object(F.a)(a).toFixed(2), "LP"]
                            }), "$", "CNR" === c ? (Object(F.a)(a, 8) * o).toFixed(2) : (Object(F.a)(a) * o).toFixed(2)]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.m, {
                                justifyContent: "center",
                                alignItems: "center",
                                children: [Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "white",
                                    children: "CNR" === l ? Object(F.a)(r[0], 8).toFixed(2) : Object(F.a)(r[0]).toFixed(2)
                                }), Object(E.jsx)(S.A, {
                                    fontSize: "14px",
                                    color: "#2d74c4",
                                    children: l
                                })]
                            }), Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", "CNR" === l ? (Object(F.a)(r[0], 8) * o).toFixed(2) : (Object(F.a)(r[0]) * o).toFixed(2)]
                            })]
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                fontSize: "14px",
                                color: "white",
                                children: ["$", "CNR" === l ? (Object(F.a)(r[0], 8) * o).toFixed(2) : (Object(F.a)(r[0]) * o).toFixed(2)]
                            }), Object(E.jsx)(se.a, {
                                variant: "contained",
                                onClick: function() {
                                    return d()
                                },
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                children: "Claim"
                            })]
                        }), Object(E.jsx)("td", {
                            children: s ? Object(E.jsx)(S.A, {
                                className: "farming_farm",
                                children: "Farming"
                            }) : Object(E.jsx)(S.A, {
                                className: "finished_farm",
                                children: "Finished"
                            })
                        }), Object(E.jsxs)("td", {
                            children: [Object(E.jsxs)(S.A, {
                                color: "white",
                                children: ["CNR" === c ? Object(F.a)(a, 8).toFixed(2) : Object(F.a)(a).toFixed(2), c]
                            }), Object(E.jsx)(se.a, {
                                color: "error",
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2D3748"
                                },
                                children: "Unstake"
                            })]
                        })]
                    })
                },
                ke = function(e) {
                    var t = e.cakeBalance,
                        n = e.isInvestor,
                        c = e.fontSize,
                        i = void 0 === c ? "14px" : c,
                        a = e.color,
                        r = void 0 === a ? "textSubtle" : a,
                        s = Object(h.a)();
                    return Object(G.m)().account ? n ? Object(E.jsx)(B.a, {
                        value: t,
                        fontSize: i,
                        color: r
                    }) : Object(E.jsx)(B.a, {
                        value: t,
                        fontSize: "24px"
                    }) : Object(E.jsx)(S.A, {
                        color: "textDisabled",
                        style: {
                            textAlign: "center"
                        },
                        children: s(298, "Locked")
                    })
                },
                Se = function() {
                    return Object(E.jsxs)("svg", {
                        width: "22",
                        height: "23",
                        viewBox: "0 0 22 23",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginTop: 7
                        },
                        children: [Object(E.jsx)("path", {
                            d: "M18.8906 11.5L20.6875 9.74219C21.2344 9.23438 20.9609 8.33594 20.2578 8.17969L17.8359 7.55469L18.5 5.13281C18.6953 4.42969 18.0703 3.76562 17.3672 3.96094L14.9453 4.66406L14.3203 2.20312C14.1641 1.53906 13.2266 1.26562 12.7188 1.8125L11 3.60938L9.24219 1.8125C8.73438 1.26562 7.79688 1.5 7.64062 2.20312L7.01562 4.66406L4.59375 3.96094C3.89062 3.76562 3.26562 4.42969 3.46094 5.13281L4.125 7.55469L1.70312 8.17969C1 8.33594 0.726562 9.23438 1.27344 9.74219L3.07031 11.5L1.27344 13.2578C0.726562 13.7656 1 14.6641 1.70312 14.8594L4.125 15.4844L3.46094 17.9062C3.26562 18.6094 3.89062 19.2344 4.59375 19.0391L7.01562 18.375L7.64062 20.7969C7.83594 21.5391 8.73438 21.7344 9.24219 21.2266L11 19.4297L12.7188 21.2266C13.2266 21.7734 14.125 21.5391 14.3203 20.7969L14.9453 18.375L17.3672 19.0391C18.0703 19.2344 18.6953 18.6094 18.5 17.9062L17.8359 15.4844L20.2578 14.8594C20.9609 14.6641 21.2344 13.7656 20.6875 13.2578L18.8906 11.5Z",
                            fill: "#2d74c4"
                        }), Object(E.jsx)("path", {
                            d: "M9.05469 15.8125C9.28906 16.0469 9.6875 16.0469 9.92188 15.8125L16.8125 8.92188C17.0469 8.6875 17.0469 8.28906 16.8125 8.05469L15.9688 7.21094C15.7344 6.97656 15.3594 6.97656 15.125 7.21094L9.5 12.8359L6.85156 10.2109C6.61719 9.97656 6.24219 9.97656 6.00781 10.2109L5.16406 11.0547C4.92969 11.2891 4.92969 11.6875 5.16406 11.9219L9.05469 15.8125Z",
                            fill: "white"
                        })]
                    })
                },
                Ae = function(e) {
                    return Object(E.jsx)("svg", {
                        width: "14",
                        height: "15",
                        viewBox: "0 0 14 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginRight: 5
                        },
                        children: Object(E.jsx)("path", {
                            d: "M7 14.5312C10.7461 14.5312 13.7812 11.4961 13.7812 7.75C13.7812 4.00391 10.7461 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.00391 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312ZM10.1719 6.54688C10.3359 6.54688 10.5 6.71094 10.5 6.875V8.625C10.5 8.81641 10.3359 8.95312 10.1719 8.95312H7V10.8945C7 11.1953 6.64453 11.332 6.42578 11.1406L3.30859 7.99609C3.17188 7.85938 3.17188 7.66797 3.30859 7.53125L6.42578 4.38672C6.64453 4.16797 7 4.33203 7 4.63281V6.54688H10.1719Z",
                            fill: "#E92B4D"
                        })
                    })
                },
                Fe = n(1190),
                Te = function(e) {
                    var t = e.walletTokenList,
                        n = d.a.useState(!1),
                        c = Object(w.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        r = d.a.useState([]),
                        s = Object(w.a)(r, 2),
                        o = s[0],
                        l = s[1],
                        j = Object(F.a)(Object(N.a)(Object(P.a)())),
                        x = Object(_.s)().toNumber();
                    return Object(E.jsxs)(S.m, {
                        justifyContent: "center",
                        style: {
                            margin: "5px 0"
                        },
                        className: "MobileTable",
                        flexDirection: "column",
                        children: [Object(E.jsxs)(he.a, {
                            style: {
                                backgroundColor: "#242542",
                                width: "100%",
                                margin: "0 5px 5px"
                            },
                            onClick: function() {
                                a(!i)
                            },
                            children: [Object(E.jsx)(pe.a, {
                                style: {
                                    padding: 5,
                                    backgroundColor: "#242542"
                                },
                                children: Object(E.jsxs)(S.m, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [Object(E.jsx)("div", {
                                        children: Object(E.jsxs)(S.m, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: "/images/farms/crox.svg",
                                                alt: "crox",
                                                width: 35,
                                                height: 35,
                                                style: {
                                                    margin: "0 5px"
                                                }
                                            }), Object(E.jsx)(S.A, {
                                                children: "CROX"
                                            })]
                                        })
                                    }), Object(E.jsx)("div", {
                                        children: Object(E.jsx)(ke, {
                                            color: "white",
                                            cakeBalance: j,
                                            isInvestor: !0,
                                            fontSize: "14px"
                                        })
                                    }), Object(E.jsx)("div", {
                                        children: Object(E.jsx)(Se, {})
                                    }), Object(E.jsx)("div", {
                                        children: Object(E.jsx)(se.a, {
                                            variant: "outlined",
                                            style: {
                                                color: "#2d74c4",
                                                border: "1px solid #2d74c4",
                                                padding: "3px 12px"
                                            },
                                            children: "Swap"
                                        })
                                    })]
                                })
                            }), Object(E.jsx)(Fe.a, { in: i,
                                timeout: "auto",
                                unmountOnExit: !0,
                                style: {
                                    padding: "5px 10px"
                                },
                                children: Object(E.jsxs)(S.m, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [Object(E.jsxs)("div", {
                                        children: [Object(E.jsx)(S.A, {
                                            children: "Token Price:"
                                        }), Object(E.jsxs)(S.A, {
                                            children: ["$", x.toLocaleString(void 0, {
                                                minimumFractionDigits: 3,
                                                maximumFractionDigits: 3
                                            })]
                                        })]
                                    }), Object(E.jsxs)("div", {
                                        children: [Object(E.jsx)(S.A, {
                                            children: "Token Value($):"
                                        }), Object(E.jsxs)(S.A, {
                                            children: ["$", (x * j).toLocaleString(void 0, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), t && t.map((function(e) {
                            return Object(E.jsxs)(he.a, {
                                style: {
                                    backgroundColor: "#242542",
                                    width: "100%",
                                    margin: "0 5px 5px"
                                },
                                onClick: function() {
                                    return function(e) {
                                        var t = o;
                                        t[e] = !t[e], l(t)
                                    }(e.symbol.split("."))
                                },
                                children: [Object(E.jsx)(pe.a, {
                                    style: {
                                        padding: 5,
                                        backgroundColor: "#242542"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        children: [Object(E.jsx)("div", {
                                            children: Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: e.logo_url ? e.logo_url : "/images/farms/".concat(e.symbol, ".svg"),
                                                    alt: e.symbol.toLowerCase(),
                                                    width: 35,
                                                    height: 35,
                                                    style: {
                                                        margin: "0 5px"
                                                    },
                                                    onError: function(e) {
                                                        var t = e.currentTarget;
                                                        t.onerror = null, t.src = "/images/no_icon.png"
                                                    }
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    children: e.symbol.split(".")
                                                })]
                                            })
                                        }), Object(E.jsx)("div", {
                                            children: Object(E.jsx)(S.A, {
                                                fontSize: "14px",
                                                children: e.amount.toFixed(2)
                                            })
                                        }), Object(E.jsx)("div", {
                                            children: e.is_verified ? Object(E.jsx)(Se, {}) : "-"
                                        }), Object(E.jsx)("div", {
                                            children: Object(E.jsx)(se.a, {
                                                variant: "outlined",
                                                style: {
                                                    color: "#2d74c4",
                                                    border: "1px solid #2d74c4",
                                                    padding: "3px 12px"
                                                },
                                                href: "https://exchange.croxswap.com/#/swap/".concat(e.id),
                                                children: "Swap"
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)(Fe.a, { in: o[e.symbol.split(".")],
                                    timeout: "auto",
                                    unmountOnExit: !0,
                                    style: {
                                        padding: "5px 10px"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        children: [Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                children: "Token Price:"
                                            }), Object(E.jsx)(S.A, {
                                                children: 0 !== e.price ? "$".concat(e.price.toFixed(2)) : "?"
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                children: "Token Value($):"
                                            }), Object(E.jsxs)(S.A, {
                                                children: ["$", (e.amount * e.price).toFixed(2)]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }))]
                    })
                },
                Le = (n(1241), function() {
                    var e = d.a.useState(!1),
                        t = Object(w.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = d.a.useState(!0),
                        a = Object(w.a)(i, 2);
                    a[0], a[1], Object(_.y)();
                    var r = d.a.useState(0),
                        s = Object(w.a)(r, 2),
                        o = (s[0], s[1], Object(F.a)(Object(N.a)(Object(P.a)())), Object(_.s)().toNumber(), Object(S.F)());
                    o.isMd, o.isSm, o.isXs, o.isLg;
                    return Object(E.jsx)(S.m, {
                        justifyContent: "center",
                        style: {
                            margin: "5px 0"
                        },
                        className: "MobileTable",
                        children: Object(E.jsxs)(he.a, {
                            style: {
                                backgroundColor: "#242542"
                            },
                            onClick: function() {
                                c(!n)
                            },
                            children: [Object(E.jsx)(pe.a, {
                                style: {
                                    padding: 5,
                                    backgroundColor: "#242542"
                                },
                                children: Object(E.jsx)("tbody", {
                                    className: "tbody_wallet tbody_wallet_transaction",
                                    children: Object(E.jsxs)("tr", {
                                        children: [Object(E.jsxs)("td", {
                                            children: [Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: "/images/farms/crox.svg",
                                                    alt: "crox",
                                                    width: 20,
                                                    height: 20,
                                                    style: {
                                                        margin: "0 5px"
                                                    }
                                                }), Object(E.jsx)(S.A, {
                                                    children: "550.356"
                                                })]
                                            }), Object(E.jsx)(S.A, {
                                                children: "$1025.56"
                                            })]
                                        }), Object(E.jsx)("td", {
                                            children: Object(E.jsx)(Ae, {})
                                        }), Object(E.jsx)("td", {
                                            children: Object(E.jsx)(S.s, {
                                                children: "0x5d0...169c0"
                                            })
                                        })]
                                    })
                                })
                            }), Object(E.jsx)(Fe.a, { in: n,
                                timeout: "auto",
                                unmountOnExit: !0,
                                children: Object(E.jsx)("tbody", {
                                    className: "tbody_wallet tbody_wallet_transaction_expand",
                                    children: Object(E.jsxs)("tr", {
                                        children: [Object(E.jsxs)("td", {
                                            children: [Object(E.jsx)(S.A, {
                                                children: "Date:"
                                            }), Object(E.jsx)(S.A, {
                                                children: "22-12-2021 13:25"
                                            })]
                                        }), Object(E.jsxs)("td", {
                                            children: [Object(E.jsx)(S.A, {
                                                children: "Txn Type:"
                                            }), Object(E.jsx)(S.A, {
                                                children: "Withdrawal"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                }),
                Ne = function(e) {
                    for (var t = e.stakedFarmList, n = e.stakedDualFarmList, c = e.stakedPoolList, i = e.stakedNextGenList, a = Object(l.useState)([]), r = Object(w.a)(a, 2), s = r[0], o = r[1], d = function(e) {
                            var t = s;
                            t[e] = !t[e], o(t)
                        }, j = Object(_.s)().toNumber(), x = Object(_.s)(), b = Object(_.r)(), h = [], p = [], O = [], m = 0; m < t.length; m++) h[m] = t[m].isTokenOnly ? t[m].tokenSymbol.toLowerCase() : "".concat(t[m].tokenSymbol.toLowerCase(), "-").concat(t[m].quoteTokenSymbol.toLowerCase()), p[m] = Object(me.c)(t[m], {
                        cakePrice: x,
                        bnbPrice: b
                    }), O[m] = new K.a(p[m].totalValue).div(new K.a(t[m].lpBalance)).toFixed(2);
                    for (var u = [], g = [], f = [], y = [], v = 0; v < n.length; v++) u[v] = n[v].lpSymbol.split(" ")[0].toLowerCase(), g[v] = Object(me.b)(n[v], {
                        cakePrice: x,
                        bnbPrice: b
                    }), f[v] = g[v].apy1.plus(g[v].apy2), y[v] = new K.a(g[v].totalValue).div(new K.a(n[v].lpBalance)).toFixed(2);
                    for (var C = [], k = [], A = [], T = 0; T < c.length; T++) C[T] = c[T].lpSymbol, k[T] = Object(me.e)(c[T], {
                        cakePrice: x,
                        bnbPrice: b
                    }), "CROX" === c[T].lpSymbol ? A[T] = x : A[T] = c[T].tokenPrice;
                    for (var L = [], N = [], P = [], z = [], D = 0; D < i.length; D++) L[D] = i[D].tokenSymbol, N[D] = Object(me.d)(i[D], {
                        cakePrice: x,
                        bnbPrice: b
                    }), P[D] = N[D].apy1.plus(N[D].apy2), z[D] = new K.a(N[D].totalValue).div(new K.a(i[D].lpBalance)).toFixed(2);
                    var R = Object(I.a)("(max-width: 520px)"),
                        B = function(e) {
                            var t = Object(J.e)(e).onReward;
                            return Object(E.jsx)(se.a, {
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                onClick: function() {
                                    return t()
                                },
                                children: "Claim"
                            })
                        },
                        V = function(e) {
                            var t = Object(J.c)(e).onReward;
                            return Object(E.jsx)(se.a, {
                                variant: "contained",
                                style: {
                                    padding: "0px 12px",
                                    backgroundColor: "#2d74c4"
                                },
                                onClick: function() {
                                    return t()
                                },
                                children: "Claim"
                            })
                        };
                    return Object(E.jsxs)(S.m, {
                        justifyContent: "center",
                        style: {
                            margin: "5px"
                        },
                        className: "MobileTable",
                        flexDirection: "column",
                        children: [t && t.map((function(e, t) {
                            return Object(E.jsxs)(he.a, {
                                style: {
                                    backgroundColor: "#242542",
                                    marginBottom: "5px"
                                },
                                onClick: function() {
                                    return d("".concat(e.pid, "farm"))
                                },
                                children: [Object(E.jsx)(pe.a, {
                                    style: {
                                        padding: 5,
                                        backgroundColor: "#242542"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: R ? "5px 0" : "5px 10px",
                                        children: [Object(E.jsx)("div", {
                                            children: Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: "/images/farms/".concat(h[t], ".svg"),
                                                    alt: "".concat(h[t]),
                                                    width: 35,
                                                    height: 35,
                                                    style: {
                                                        margin: "0 5px"
                                                    }
                                                }), Object(E.jsxs)("div", {
                                                    children: [Object(E.jsx)(S.A, {
                                                        color: "white",
                                                        children: e.lpSymbol
                                                    }), Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "#2d74c4",
                                                        className: "farm_type",
                                                        children: "Farm"
                                                    })]
                                                })]
                                            })
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                color: "white",
                                                fontSize: "14px",
                                                children: ["$", (Object(F.a)(e.userData.earnings) * j).toFixed(2)]
                                            }), B(e.pid)]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsx)(se.a, {
                                                color: "error",
                                                variant: "contained",
                                                style: {
                                                    padding: "0px 12px",
                                                    backgroundColor: "#2D3748"
                                                },
                                                children: "Unstake"
                                            })]
                                        }), Object(E.jsx)("div", {
                                            children: "0X" === e.multiplier ? Object(E.jsx)(S.A, {
                                                className: "finished_farm",
                                                children: R ? "" : "Finished"
                                            }) : Object(E.jsx)(S.A, {
                                                className: "farming_farm",
                                                children: R ? "" : "Farming"
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)(Fe.a, { in: s["".concat(e.pid, "farm")],
                                    timeout: "auto",
                                    unmountOnExit: !0,
                                    sx: {
                                        backgroundColor: "rgb(55, 55, 100)"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: "5px 10px",
                                        children: [Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "APR:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [p[t].apy.times(new K.a(100)).toNumber().toFixed(2), "%"]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Staked Token:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.stakedBalance) * O[t]).toFixed(2)]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Rewards:"
                                            }), Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "white",
                                                    children: Object(F.a)(e.userData.earnings).toFixed(2)
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "white",
                                                    ml: "2px",
                                                    children: "CROX"
                                                })]
                                            }), Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings) * j).toFixed(2)]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })), n && n.map((function(e, t) {
                            return Object(E.jsxs)(he.a, {
                                style: {
                                    backgroundColor: "#242542",
                                    marginBottom: "5px"
                                },
                                onClick: function() {
                                    return d("".concat(e.pid, "dual"))
                                },
                                children: [Object(E.jsx)(pe.a, {
                                    style: {
                                        padding: 5,
                                        backgroundColor: "#242542"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: R ? "5px 0" : "5px 10px",
                                        children: [Object(E.jsx)("div", {
                                            children: Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: "/images/farms/".concat(u[t], ".svg"),
                                                    alt: "".concat(u[t]),
                                                    width: 35,
                                                    height: 35,
                                                    style: {
                                                        margin: "0 5px"
                                                    }
                                                }), Object(E.jsxs)("div", {
                                                    children: [Object(E.jsx)(S.A, {
                                                        color: "white",
                                                        children: e.lpSymbol
                                                    }), Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "#2d74c4",
                                                        className: "farm_type",
                                                        children: "DualFarm"
                                                    })]
                                                })]
                                            })
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings[0]) * j + Object(F.a)(e.userData.earnings[1]) * e.tokenPrice).toFixed(2)]
                                            }), V(e.poolAddress)]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsx)(se.a, {
                                                color: "error",
                                                variant: "contained",
                                                style: {
                                                    padding: "0px 12px",
                                                    backgroundColor: "#2D3748"
                                                },
                                                children: "Unstake"
                                            })]
                                        }), Object(E.jsx)("div", {
                                            children: e.active ? Object(E.jsx)(S.A, {
                                                className: "farming_farm",
                                                children: R ? "" : "Farming"
                                            }) : Object(E.jsx)(S.A, {
                                                className: "finished_farm",
                                                children: R ? "" : "Finished"
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)(Fe.a, { in: s["".concat(e.pid, "dual")],
                                    timeout: "auto",
                                    unmountOnExit: !0,
                                    sx: {
                                        backgroundColor: "rgb(55, 55, 100)"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: "5px 10px",
                                        children: [Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "APR:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [f[t].times(new K.a(100)).toNumber().toFixed(2), "%"]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Staked Token:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.stakedBalance) * y[t]).toFixed(2)]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Rewards:"
                                            }), Object(E.jsxs)(S.m, {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                children: [Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "white",
                                                    children: Object(F.a)(e.userData.earnings[0]).toFixed(2)
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "#2d74c4",
                                                    children: "CROX"
                                                }), Object(E.jsxs)(S.A, {
                                                    fontSize: "14px",
                                                    color: "white",
                                                    children: [" + ", Object(F.a)(e.userData.earnings[1]).toFixed(2)]
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "#2d74c4",
                                                    children: e.tokenSymbol
                                                })]
                                            }), Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings[0]) * j).toFixed(2), " + $", (Object(F.a)(e.userData.earnings[1]) * e.tokenPrice).toFixed(2)]
                                            }), Object(E.jsx)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: "(A) + (B)"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })), c && c.map((function(e, t) {
                            return Object(E.jsxs)(he.a, {
                                style: {
                                    backgroundColor: "#242542",
                                    marginBottom: "5px"
                                },
                                onClick: function() {
                                    return d("".concat(e.pid, "pool"))
                                },
                                children: [Object(E.jsx)(pe.a, {
                                    style: {
                                        padding: 5,
                                        backgroundColor: "#242542"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: R ? "5px 0" : "5px 10px",
                                        children: [Object(E.jsx)("div", {
                                            children: Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: "/images/farms/".concat(C[t], ".svg"),
                                                    alt: "".concat(C[t]),
                                                    width: 35,
                                                    height: 35,
                                                    style: {
                                                        margin: "0 5px"
                                                    }
                                                }), Object(E.jsxs)("div", {
                                                    children: [Object(E.jsx)(S.A, {
                                                        color: "white",
                                                        children: e.lpSymbol
                                                    }), Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "#2d74c4",
                                                        className: "farm_type",
                                                        style: {
                                                            minWidth: "100px"
                                                        },
                                                        children: "Pool"
                                                    })]
                                                })]
                                            })
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings) * j).toFixed(2)]
                                            }), B(e.pid)]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: ["CNR" === e.lpSymbol ? Object(F.a)(e.userData.stakedBalance, 8).toFixed(2) : Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsx)(se.a, {
                                                color: "error",
                                                variant: "contained",
                                                style: {
                                                    padding: "0px 12px",
                                                    backgroundColor: "#2D3748"
                                                },
                                                children: "Unstake"
                                            })]
                                        }), Object(E.jsx)("div", {
                                            children: "0X" === e.multiplier ? Object(E.jsx)(S.A, {
                                                className: "finished_farm",
                                                children: R ? "" : "Finished"
                                            }) : Object(E.jsx)(S.A, {
                                                className: "farming_farm",
                                                children: R ? "" : "Farming"
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)(Fe.a, { in: s["".concat(e.pid, "pool")],
                                    timeout: "auto",
                                    unmountOnExit: !0,
                                    sx: {
                                        backgroundColor: "rgb(55, 55, 100)"
                                    },
                                    children: Object(E.jsx)("tbody", {
                                        className: "tbody_wallet tbody_wallet_yield_expand",
                                        children: Object(E.jsxs)(S.m, {
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            p: "5px 10px",
                                            children: [Object(E.jsxs)("div", {
                                                children: [Object(E.jsx)(S.A, {
                                                    color: "#2d74c4",
                                                    children: "APR:"
                                                }), Object(E.jsxs)(S.A, {
                                                    color: "white",
                                                    children: [k[t].apy.times(new K.a(100)).toNumber().toFixed(2), "%"]
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                children: [Object(E.jsx)(S.A, {
                                                    color: "#2d74c4",
                                                    children: "Staked Token:"
                                                }), Object(E.jsxs)(S.A, {
                                                    color: "white",
                                                    children: ["CNR" === e.lpSymbol ? Object(F.a)(e.userData.stakedBalance, 8).toFixed(2) : Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                                }), Object(E.jsxs)(S.A, {
                                                    children: ["$", "CNR" === e.lpSymbol ? (Object(F.a)(e.userData.stakedBalance, 8) * A[t]).toFixed(2) : (Object(F.a)(e.userData.stakedBalance) * A[t]).toFixed(2)]
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                children: [Object(E.jsx)(S.A, {
                                                    color: "#2d74c4",
                                                    children: "Rewards:"
                                                }), Object(E.jsxs)(S.m, {
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "white",
                                                        children: Object(F.a)(e.userData.earnings).toFixed(2)
                                                    }), Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "#2d74c4",
                                                        children: e.lpSymbol
                                                    })]
                                                }), Object(E.jsxs)(S.A, {
                                                    fontSize: "14px",
                                                    children: ["$", (Object(F.a)(e.userData.earnings) * j).toFixed(2)]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })
                        })), i && i.map((function(e, t) {
                            return Object(E.jsxs)(he.a, {
                                style: {
                                    backgroundColor: "#242542",
                                    marginBottom: "5px"
                                },
                                onClick: function() {
                                    return d("".concat(e.pid, "next"))
                                },
                                children: [Object(E.jsx)(pe.a, {
                                    style: {
                                        padding: 5,
                                        backgroundColor: "#242542"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: R ? "5px 0" : "5px 10px",
                                        children: [Object(E.jsx)("div", {
                                            children: Object(E.jsxs)(S.m, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: [Object(E.jsx)("img", {
                                                    src: "/images/farms/".concat(L[t], ".svg"),
                                                    alt: "".concat(L[t]),
                                                    width: 35,
                                                    height: 35,
                                                    style: {
                                                        margin: "0 5px"
                                                    }
                                                }), Object(E.jsxs)("div", {
                                                    children: [Object(E.jsx)(S.A, {
                                                        color: "white",
                                                        children: e.tokenSymbol
                                                    }), Object(E.jsx)(S.A, {
                                                        fontSize: "14px",
                                                        color: "#2d74c4",
                                                        className: "farm_type",
                                                        style: {
                                                            minWidth: "100px"
                                                        },
                                                        children: "NextGen"
                                                    })]
                                                })]
                                            })
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings[0]) * e.tokenPrice).toFixed(2)]
                                            }), V(e.poolAddress)]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: ["CNR" === e.lpSymbol ? Object(F.a)(e.userData.stakedBalance, 8).toFixed(2) : Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsx)(se.a, {
                                                color: "error",
                                                variant: "contained",
                                                style: {
                                                    padding: "0px 12px",
                                                    backgroundColor: "#2D3748"
                                                },
                                                children: "Unstake"
                                            })]
                                        }), Object(E.jsx)("div", {
                                            children: e.active ? Object(E.jsx)(S.A, {
                                                className: "farming_farm",
                                                children: R ? "" : "Farming"
                                            }) : Object(E.jsx)(S.A, {
                                                className: "finished_farm",
                                                children: R ? "" : "Finished"
                                            })
                                        })]
                                    })
                                }), Object(E.jsx)(Fe.a, { in: s["".concat(e.pid, "next")],
                                    timeout: "auto",
                                    unmountOnExit: !0,
                                    sx: {
                                        backgroundColor: "rgb(55, 55, 100)"
                                    },
                                    children: Object(E.jsxs)(S.m, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: "5px 10px",
                                        children: [Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "APR:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: [P[t].times(new K.a(100)).toNumber().toFixed(2), "%"]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Staked Token:"
                                            }), Object(E.jsxs)(S.A, {
                                                color: "white",
                                                children: ["CNR" === e.lpSymbol ? Object(F.a)(e.userData.stakedBalance, 8).toFixed(2) : Object(F.a)(e.userData.stakedBalance).toFixed(2), "LP"]
                                            }), Object(E.jsxs)(S.A, {
                                                children: ["$", "CNR" === e.lpSymbol ? (Object(F.a)(e.userData.stakedBalance, 8) * z[t]).toFixed(2) : (Object(F.a)(e.userData.stakedBalance) * A[t]).toFixed(2)]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)(S.A, {
                                                color: "#2d74c4",
                                                children: "Rewards:"
                                            }), Object(E.jsxs)(S.m, {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                children: [Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "white",
                                                    children: Object(F.a)(e.userData.earnings[0]).toFixed(2)
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: "14px",
                                                    color: "#2d74c4",
                                                    children: e.tokenSymbol
                                                })]
                                            }), Object(E.jsxs)(S.A, {
                                                fontSize: "14px",
                                                color: "white",
                                                children: ["$", (Object(F.a)(e.userData.earnings[0]) * e.tokenPrice).toFixed(2)]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }))]
                    })
                },
                Pe = ["children", "value", "index"];

            function ze(e) {
                var t = e.children,
                    n = e.value,
                    c = e.index,
                    i = Object(oe.a)(e, Pe);
                return Object(E.jsx)("div", Object(te.a)(Object(te.a)({
                    style: {
                        color: "white",
                        fontFamily: "'Baloo 2', cursive"
                    },
                    role: "tabpanel",
                    hidden: n !== c,
                    id: "vertical-tabpanel-".concat(c),
                    "aria-labelledby": "vertical-tab-".concat(c)
                }, i), {}, {
                    children: n === c && Object(E.jsx)(be.a, {
                        sx: {
                            p: 3
                        },
                        children: Object(E.jsx)(xe.a, {
                            children: t
                        })
                    })
                }))
            }

            function De(e) {
                return {
                    id: "vertical-tab-".concat(e),
                    "aria-controls": "vertical-tabpanel-".concat(e)
                }
            }
            var Re, Ie, Be, _e, Ee, Ve, Me, $e, He, Xe = function(e) {
                    var t = e.stakedFarmList,
                        n = e.stakedDualFarmList,
                        c = e.stakedPoolList,
                        i = e.stakedNextGenList,
                        a = e.walletTokenList,
                        r = Object(G.m)().account,
                        s = (Object(_.y)(), Object(le.a)(), Object(_.r)());
                    for (var o = d.a.useState(0), l = Object(w.a)(o, 2), j = l[0], x = l[1], b = function(e, t) {
                            x(t)
                        }, h = Object(F.a)(Object(N.a)(Object(P.a)())), p = Object(_.s)().toNumber(), O = Object(_.s)(), m = {
                            minHeight: "40px",
                            justifyContent: "flex-start",
                            fontFamily: "'Baloo 2', cursive",
                            fontSize: "20px",
                            letterSpacing: 0
                        }, u = Object(S.F)(), g = u.isMd, f = u.isSm, y = u.isXs, v = u.isLg, C = [], k = [], A = [], T = [], L = [], z = [], D = [], R = [], I = [], B = [], V = [], M = [], $ = [], H = [], X = 0, W = 0; W < t.length; W++) C[W] = t[W].isTokenOnly ? t[W].tokenSymbol.toLowerCase() : "".concat(t[W].tokenSymbol.toLowerCase(), "-").concat(t[W].quoteTokenSymbol.toLowerCase()), k[W] = Object(me.c)(t[W], {
                        cakePrice: O,
                        bnbPrice: s
                    }), A[W] = new K.a(k[W].totalValue).div(new K.a(t[W].lpBalance)).toFixed(2), t[W].userData.stakedBalance && (X += Object(F.a)(t[W].userData.stakedBalance) * A[W]);
                    for (var q = 0; q < n.length; q++) T[q] = n[q].lpSymbol.split(" ")[0].toLowerCase(), L[q] = Object(me.b)(n[q], {
                        cakePrice: O,
                        bnbPrice: s
                    }), z[q] = L[q].apy1.plus(L[q].apy2), D[q] = new K.a(L[q].totalValue).div(new K.a(n[q].lpBalance)).toFixed(2), n[q].userData.stakedBalance && (X += Object(F.a)(n[q].userData.stakedBalance) * D[q]);
                    for (var U = 0; U < c.length; U++) R[U] = c[U].lpSymbol, I[U] = Object(me.e)(c[U], {
                        cakePrice: O,
                        bnbPrice: s
                    }), "CROX" === c[U].lpSymbol ? B[U] = O : B[U] = c[U].tokenPrice, c[U].userData.stakedBalance && (X += Object(F.a)(c[U].userData.stakedBalance) * B[U]);
                    for (var Z = 0; Z < i.length; Z++) V[Z] = i[Z].tokenSymbol, M[Z] = Object(me.d)(i[Z], {
                        cakePrice: O,
                        bnbPrice: s
                    }), $[Z] = M[Z].apy1, H[Z] = i[Z].tokenPrice, i[Z].userData.stakedBalance && (X += Object(F.a)(i[Z].userData.stakedBalance) * H[Z]);
                    for (var Y = 0; Y < a.length; Y++) a[Y].price * a[Y].amount;
                    return Object(E.jsx)(E.Fragment, {
                        children: g || f || y || v ? Object(E.jsxs)(be.a, {
                            sx: {
                                flexGrow: 1,
                                bgcolor: "#171923",
                                height: 500
                            },
                            children: [Object(E.jsxs)(S.m, {
                                justifyContent: "center",
                                className: "tabcard_mobile",
                                children: [Object(E.jsx)("div", {
                                    className: "info_crox_wallet",
                                    children: Object(E.jsx)(he.a, {
                                        sx: {
                                            maxWidth: 250
                                        },
                                        className: "tabbody",
                                        children: Object(E.jsx)(Oe.a, {
                                            children: Object(E.jsx)(pe.a, {
                                                className: "cardContent",
                                                children: Object(E.jsxs)(xe.a, {
                                                    variant: "h5",
                                                    component: "div",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "18px",
                                                        mr: "3px",
                                                        color: "white",
                                                        children: "$CROX in Wallet"
                                                    }), Object(E.jsx)(S.A, {
                                                        children: Object(E.jsx)(ke, {
                                                            color: "#2d74c4",
                                                            cakeBalance: h,
                                                            isInvestor: !0,
                                                            fontSize: "18px"
                                                        })
                                                    }), Object(E.jsxs)(S.A, {
                                                        color: "#2d74c4",
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        fontSize: "18px",
                                                        children: ["$", (p * h).toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }), Object(E.jsx)("div", {
                                    className: "info_crox_wallet",
                                    children: Object(E.jsx)(he.a, {
                                        sx: {
                                            maxWidth: 250
                                        },
                                        className: "tabbody",
                                        children: Object(E.jsx)(Oe.a, {
                                            children: Object(E.jsx)(pe.a, {
                                                className: "cardContent",
                                                style: {
                                                    margin: "12px 0px"
                                                },
                                                children: Object(E.jsxs)(xe.a, {
                                                    variant: "h5",
                                                    component: "div",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "18px",
                                                        mr: "3px",
                                                        color: "white",
                                                        children: "Net Wallet Portfolio"
                                                    }), Object(E.jsxs)(S.A, {
                                                        color: "#2d74c4",
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        fontSize: "18px",
                                                        children: ["$", (p * h).toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }), Object(E.jsx)("div", {
                                    className: "info_crox_wallet",
                                    children: Object(E.jsx)(he.a, {
                                        sx: {
                                            maxWidth: 250
                                        },
                                        className: "tabbody",
                                        children: Object(E.jsx)(Oe.a, {
                                            children: Object(E.jsx)(pe.a, {
                                                className: "cardContent",
                                                style: {
                                                    margin: "12px 0px"
                                                },
                                                children: Object(E.jsxs)(xe.a, {
                                                    variant: "h5",
                                                    component: "div",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "18px",
                                                        mr: "3px",
                                                        color: "white",
                                                        children: "Net Staked Amount"
                                                    }), Object(E.jsxs)(S.A, {
                                                        color: "#2d74c4",
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        fontSize: "18px",
                                                        children: ["$", X.toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), Object(E.jsx)(S.m, {
                                justifyContent: "center",
                                children: Object(E.jsxs)(de.a, {
                                    variant: "scrollable",
                                    value: j,
                                    onChange: b,
                                    "aria-label": "Vertical tabs example",
                                    className: "tabs_mobile",
                                    children: [Object(E.jsx)(je.a, Object(te.a)({
                                        icon: Object(E.jsx)(ee.a, {
                                            style: {
                                                fontSize: "24px"
                                            }
                                        }),
                                        iconPosition: "start",
                                        label: "WALLET",
                                        style: m,
                                        className: "TabIcon leftTab"
                                    }, De(0))), Object(E.jsx)(je.a, Object(te.a)({
                                        icon: Object(E.jsx)(fe.b, {
                                            style: {
                                                fontSize: "24px"
                                            }
                                        }),
                                        iconPosition: "start",
                                        label: "YIELD TRACKER",
                                        style: m,
                                        className: "TabIcon leftTab"
                                    }, De(2)))]
                                })
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 0,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle",
                                    children: "Your Portfolio"
                                }), Object(E.jsx)(Te, {
                                    walletTokenList: a
                                })]
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 9,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle headerTitle_mobile",
                                    children: "Your Transactions"
                                }), Object(E.jsx)(Le, {})]
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 1,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle headerTitle_mobile",
                                    children: "Staked Farms & Pools"
                                }), Object(E.jsx)(Ne, {
                                    stakedFarmList: t,
                                    stakedDualFarmList: n,
                                    stakedPoolList: c,
                                    stakedNextGenList: i
                                })]
                            })]
                        }) : Object(E.jsxs)(be.a, {
                            sx: {
                                flexGrow: 1,
                                bgcolor: "#171923",
                                display: "flex",
                                height: 560
                            },
                            children: [Object(E.jsxs)(de.a, {
                                orientation: "vertical",
                                variant: "scrollable",
                                value: j,
                                onChange: b,
                                "aria-label": "Vertical tabs example",
                                sx: {
                                    borderRight: 1,
                                    borderColor: "divider",
                                    width: 210
                                },
                                children: [Object(E.jsx)(je.a, Object(te.a)(Object(te.a)({
                                    icon: Object(E.jsx)(ee.a, {
                                        style: {
                                            fontSize: "24px"
                                        }
                                    }),
                                    iconPosition: "start",
                                    label: "WALLET",
                                    style: m,
                                    sx: {
                                        mt: 2
                                    }
                                }, De(0)), {}, {
                                    className: "leftTab"
                                })), Object(E.jsx)(je.a, Object(te.a)(Object(te.a)({
                                    icon: Object(E.jsx)(fe.b, {
                                        style: {
                                            fontSize: "24px"
                                        }
                                    }),
                                    iconPosition: "start",
                                    label: "YIELD TRACKER",
                                    style: m
                                }, De(2)), {}, {
                                    className: "leftTab"
                                })), Object(E.jsx)("div", {
                                    className: "info_crox_wallet top_card",
                                    children: Object(E.jsx)(he.a, {
                                        sx: {
                                            maxWidth: 250
                                        },
                                        className: "tabbody",
                                        children: Object(E.jsx)(Oe.a, {
                                            children: Object(E.jsx)(pe.a, {
                                                className: "cardContent",
                                                children: Object(E.jsxs)(xe.a, {
                                                    variant: "h5",
                                                    component: "div",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "18px",
                                                        mr: "3px",
                                                        color: "#2d74c4",
                                                        children: "$CROX in Wallet"
                                                    }), Object(E.jsx)(S.A, {
                                                        children: Object(E.jsx)(ke, {
                                                            cakeBalance: h,
                                                            isInvestor: !0,
                                                            fontSize: "18px"
                                                        })
                                                    }), Object(E.jsxs)(S.A, {
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        fontSize: "18px",
                                                        children: ["$", (p * h).toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }), Object(E.jsx)("div", {
                                    className: "info_crox_wallet",
                                    children: Object(E.jsx)(he.a, {
                                        sx: {
                                            maxWidth: 250
                                        },
                                        className: "tabbody",
                                        children: Object(E.jsx)(Oe.a, {
                                            children: Object(E.jsx)(pe.a, {
                                                className: "cardContent",
                                                children: Object(E.jsxs)(xe.a, {
                                                    variant: "h5",
                                                    component: "div",
                                                    children: [Object(E.jsx)(S.A, {
                                                        fontSize: "18px",
                                                        mr: "3px",
                                                        color: "#2d74c4",
                                                        children: "Net Staked Amount"
                                                    }), Object(E.jsxs)(S.A, {
                                                        style: {
                                                            textAlign: "center"
                                                        },
                                                        fontSize: "18px",
                                                        children: ["$", X.toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 0,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle",
                                    children: "Your Portfolio"
                                }), Object(E.jsxs)("table", {
                                    className: "table tablesorter ",
                                    id: "plain-table",
                                    style: {
                                        marginTop: 60
                                    },
                                    children: [Object(E.jsx)("thead", {
                                        className: "thead_portfolio_wallet",
                                        children: Object(E.jsxs)("tr", {
                                            children: [Object(E.jsx)("th", {
                                                children: "Token Name"
                                            }), Object(E.jsx)("th", {
                                                children: "Token Price"
                                            }), Object(E.jsx)("th", {
                                                children: "Amount"
                                            }), Object(E.jsx)("th", {
                                                children: "TotalValue($)"
                                            }), Object(E.jsx)("th", {
                                                children: "Verified"
                                            }), Object(E.jsx)("th", {
                                                children: " "
                                            })]
                                        })
                                    }), Object(E.jsxs)("tbody", {
                                        className: "tbody_wallet",
                                        children: [Object(E.jsxs)("tr", {
                                            children: [Object(E.jsx)("td", {
                                                children: Object(E.jsxs)(S.m, {
                                                    alignItems: "center",
                                                    justifyContent: "left",
                                                    ml: "20px",
                                                    children: [Object(E.jsx)("img", {
                                                        src: "/images/farms/crox.svg",
                                                        alt: "crox",
                                                        width: 35,
                                                        height: 35,
                                                        style: {
                                                            margin: "0 5px"
                                                        }
                                                    }), "CROX"]
                                                })
                                            }), Object(E.jsxs)("td", {
                                                children: ["$", p.toLocaleString(void 0, {
                                                    minimumFractionDigits: 3,
                                                    maximumFractionDigits: 3
                                                })]
                                            }), Object(E.jsx)("td", {
                                                children: Object(E.jsx)(ke, {
                                                    color: "white",
                                                    cakeBalance: h,
                                                    isInvestor: !0,
                                                    fontSize: "16px"
                                                })
                                            }), Object(E.jsxs)("td", {
                                                children: ["$", (p * h).toLocaleString(void 0, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })]
                                            }), Object(E.jsx)("td", {
                                                children: Object(E.jsx)(Se, {})
                                            }), Object(E.jsx)("td", {
                                                children: Object(E.jsx)(se.a, {
                                                    variant: "outlined",
                                                    style: {
                                                        color: "#2d74c4",
                                                        border: "1px solid #2d74c4",
                                                        padding: "3px 12px"
                                                    },
                                                    href: "https://exchange.croxswap.com/#/swap/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                    children: "Swap"
                                                })
                                            })]
                                        }), a.map((function(e) {
                                            return Object(E.jsxs)("tr", {
                                                children: [Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.m, {
                                                        alignItems: "center",
                                                        justifyContent: "left",
                                                        ml: "20px",
                                                        children: [Object(E.jsx)("img", {
                                                            src: e.logo_url ? e.logo_url : "/images/farms/".concat(e.symbol, ".svg"),
                                                            alt: e.symbol.toLowerCase(),
                                                            width: 35,
                                                            height: 35,
                                                            style: {
                                                                margin: "0 5px"
                                                            },
                                                            onError: function(e) {
                                                                var t = e.currentTarget;
                                                                t.onerror = null, t.src = "/images/no_icon.png"
                                                            }
                                                        }), e.symbol.split(".")]
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: 0 !== e.price ? "$".concat(e.price.toFixed(2)) : "?"
                                                }), Object(E.jsx)("td", {
                                                    children: e.amount.toFixed(2)
                                                }), Object(E.jsxs)("td", {
                                                    children: ["$", (e.amount * e.price).toFixed(2)]
                                                }), Object(E.jsx)("td", {
                                                    children: e.is_verified ? Object(E.jsx)(Se, {}) : "-"
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsx)(se.a, {
                                                        variant: "outlined",
                                                        style: {
                                                            color: "#2d74c4",
                                                            border: "1px solid #2d74c4",
                                                            padding: "3px 12px"
                                                        },
                                                        href: "https://exchange.croxswap.com/#/swap/".concat(e.id),
                                                        children: "Swap"
                                                    })
                                                })]
                                            })
                                        }))]
                                    })]
                                })]
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 9,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle",
                                    children: "Your Transactions"
                                }), Object(E.jsxs)("table", {
                                    className: "table tablesorter table_portfolio",
                                    id: "plain-table",
                                    children: [Object(E.jsx)("thead", {
                                        className: "thead_portfolio_transaction",
                                        children: Object(E.jsxs)("tr", {
                                            children: [Object(E.jsx)("th", {
                                                children: "Date"
                                            }), Object(E.jsx)("th", {
                                                children: "Amount"
                                            }), Object(E.jsx)("th", {
                                                children: "From/To"
                                            }), Object(E.jsx)("th", {
                                                children: "Txn Type"
                                            }), Object(E.jsx)("th", {
                                                children: "Txn Hash"
                                            })]
                                        })
                                    }), Object(E.jsx)("tbody", {
                                        className: "tbody_transaction",
                                        children: Object(E.jsxs)("tr", {
                                            children: [Object(E.jsx)("td", {
                                                children: "22-12-2021 13:25"
                                            }), Object(E.jsxs)("td", {
                                                children: [Object(E.jsxs)(S.m, {
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    children: [Object(E.jsx)("img", {
                                                        src: "/images/farms/crox.svg",
                                                        alt: "crox",
                                                        width: 20,
                                                        height: 20,
                                                        style: {
                                                            margin: "0 5px"
                                                        }
                                                    }), "550.356"]
                                                }), "$1025.56"]
                                            }), Object(E.jsx)("td", {
                                                children: Object(E.jsxs)(S.m, {
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    children: [Object(E.jsx)(Ae, {}), "0x5d0...169c0"]
                                                })
                                            }), Object(E.jsx)("td", {
                                                children: "Withdrawal"
                                            }), Object(E.jsx)("td", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: Object(E.jsx)(se.a, {
                                                    href: "https://bscscan.com/address/".concat(r),
                                                    target: "_blank",
                                                    children: Object(E.jsxs)(S.m, {
                                                        alignItems: "center",
                                                        children: [Object(E.jsx)(S.A, {
                                                            color: "#2d74c4",
                                                            mr: "3px",
                                                            children: "0x5d0...69c0"
                                                        }), Object(E.jsx)(Q.a, {
                                                            style: {
                                                                fontSize: "20px",
                                                                color: "#2d74c4"
                                                            }
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), Object(E.jsxs)(ze, {
                                value: j,
                                index: 1,
                                children: [Object(E.jsx)(S.A, {
                                    color: "#EAE2FC",
                                    fontSize: "18px",
                                    className: "HeaderTitle",
                                    children: "Staked Farms & Pools"
                                }), Object(E.jsx)("div", {
                                    className: "headerCard headerCard_yield",
                                    children: Object(E.jsxs)(S.m, {
                                        alignItems: "center",
                                        m: "10px 25px",
                                        children: [Object(E.jsx)(ge.a, {
                                            style: {
                                                position: "fixed",
                                                marginLeft: 10
                                            }
                                        }), Object(E.jsx)(S.q, {
                                            style: {
                                                maxWidth: 250,
                                                paddingLeft: 40
                                            },
                                            placeholder: "Search by Pool Name"
                                        })]
                                    })
                                }), Object(E.jsxs)("table", {
                                    className: "table tablesorter",
                                    id: "plain-table",
                                    children: [Object(E.jsx)("thead", {
                                        className: "thead_portfolio_yield",
                                        children: Object(E.jsxs)("tr", {
                                            children: [Object(E.jsx)("th", {
                                                style: {
                                                    padding: "10px 60px"
                                                },
                                                children: "Pool Name"
                                            }), Object(E.jsx)("th", {
                                                children: "APR"
                                            }), Object(E.jsx)("th", {
                                                children: "Staked Tokens"
                                            }), Object(E.jsx)("th", {
                                                children: "Rewards"
                                            }), Object(E.jsx)("th", {
                                                children: "Total Earnings"
                                            }), Object(E.jsx)("th", {
                                                children: "Status"
                                            }), Object(E.jsx)("th", {
                                                children: "Unlocked Tokens"
                                            })]
                                        })
                                    }), Object(E.jsxs)("tbody", {
                                        className: "tbody_yield",
                                        children: [t.map((function(e, t) {
                                            return Object(E.jsx)(ye, {
                                                farmPid: e.pid,
                                                farmImage: C[t],
                                                lpSymbol: e.lpSymbol,
                                                farmApy: k[t].apy,
                                                stakedBalance: e.userData.stakedBalance,
                                                lpWorth: A[t],
                                                earnings: e.userData.earnings,
                                                multiplier: e.multiplier
                                            })
                                        })), n.map((function(e, t) {
                                            return Object(E.jsx)(ve, {
                                                farmAddress: e.poolAddress,
                                                farmImage: T[t],
                                                lpSymbol: e.lpSymbol,
                                                farmApy: z[t],
                                                stakedBalance: e.userData.stakedBalance,
                                                lpWorth: D[t],
                                                earnings: e.userData.earnings,
                                                active: e.active,
                                                tokenPrice: e.tokenPrice,
                                                tokenSymbol: e.tokenSymbol
                                            })
                                        })), c.map((function(e, t) {
                                            return Object(E.jsx)(we, {
                                                farmPid: e.pid,
                                                poolImage: R[t],
                                                lpSymbol: e.lpSymbol,
                                                poolApy: I[t].apy,
                                                stakedBalance: e.userData.stakedBalance,
                                                lpWorth: B[t],
                                                earnings: e.userData.earnings,
                                                multiplier: e.multiplier
                                            })
                                        })), i.map((function(e, t) {
                                            return Object(E.jsx)(Ce, {
                                                farmAddress: e.poolAddress,
                                                nextgenImage: V[t],
                                                lpSymbol: e.lpSymbol,
                                                nextgenApy: $[t],
                                                stakedBalance: e.userData.stakedBalance,
                                                earnings: e.userData.earnings,
                                                active: e.active,
                                                tokenPrice: e.tokenPrice,
                                                tokenSymbol: e.tokenSymbol
                                            })
                                        }))]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                We = function() {
                    return Object(E.jsx)("svg", {
                        width: "15",
                        height: "13",
                        viewBox: "0 0 15 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginRight: "4px"
                        },
                        children: Object(E.jsx)("path", {
                            d: "M12.375 8.375C11.2266 8.375 10.3125 9.3125 10.3125 10.4375C10.3125 11.5859 11.2266 12.5 12.375 12.5C13.5 12.5 14.4375 11.5859 14.4375 10.4375C14.4375 9.3125 13.5 8.375 12.375 8.375ZM12.375 11C12.0469 11 11.8125 10.7656 11.8125 10.4375C11.8125 10.1328 12.0469 9.875 12.375 9.875C12.6797 9.875 12.9375 10.1328 12.9375 10.4375C12.9375 10.7656 12.6797 11 12.375 11ZM14.25 4.25H12.75V3.3125C12.75 2.98438 12.8438 2.67969 13.0547 2.39844C13.1484 2.28125 13.125 2.07031 13.0078 1.95312L12.5156 1.39062C12.3516 1.20312 12.0703 1.22656 11.9297 1.41406C11.4844 1.92969 11.25 2.60938 11.25 3.3125V4.25H8.83594L7.52344 1.20312C7.35938 0.78125 6.96094 0.5 6.49219 0.5H3.375C2.74219 0.5 2.25 1.01562 2.25 1.625V5.07031C2.03906 4.90625 1.75781 4.92969 1.57031 5.09375L0.84375 5.84375C0.632812 6.03125 0.632812 6.35938 0.84375 6.57031L0.960938 6.6875C0.84375 6.89844 0.75 7.13281 0.679688 7.34375H0.515625C0.210938 7.34375 0 7.57812 0 7.85938V8.89062C0 9.19531 0.210938 9.40625 0.515625 9.40625H0.679688C0.75 9.64062 0.84375 9.875 0.960938 10.0859L0.820312 10.2031C0.632812 10.4141 0.632812 10.7422 0.820312 10.9297L1.57031 11.6562C1.75781 11.8672 2.08594 11.8672 2.29688 11.6562L2.41406 11.5391C2.625 11.6562 2.85938 11.75 3.07031 11.8203V11.9844C3.07031 12.2891 3.30469 12.5 3.58594 12.5H4.61719C4.92188 12.5 5.13281 12.2891 5.13281 11.9844V11.8203C5.36719 11.75 5.60156 11.6562 5.8125 11.5391L5.92969 11.6797C6.14062 11.8672 6.46875 11.8672 6.65625 11.6797L7.38281 10.9297C7.59375 10.7422 7.59375 10.4141 7.38281 10.2031L7.26562 10.0859C7.38281 9.875 7.47656 9.64062 7.54688 9.42969H7.73438C8.01562 9.42969 8.25 9.19531 8.25 8.91406V8.77344H10.125C10.6406 8.09375 11.4375 7.64844 12.375 7.64844C12.7969 7.64844 13.2188 7.74219 13.5703 7.92969L14.7656 6.73438C14.9062 6.59375 14.9766 6.40625 14.9766 6.19531V5C15 4.60156 14.6484 4.25 14.25 4.25ZM4.125 10.25C3.07031 10.25 2.25 9.42969 2.25 8.375C2.25 7.34375 3.07031 6.5 4.125 6.5C5.15625 6.5 6 7.34375 6 8.375C6 9.42969 5.15625 10.25 4.125 10.25ZM4.64062 4.25H3.75V2H6.23438L7.21875 4.25H4.64062Z",
                            fill: "white"
                        })
                    })
                },
                Qe = j.e.div(Re || (Re = Object(o.a)(["\n  background-color: #171923;\n  padding: 12px 0;\n  border-radius: 10px;\n  margin: 0 30px;\n  text-align: center;\n  width: 1100px;\n  transition: all ease 200ms;\n  @media screen and (max-width: 1024px) {\n    width: 750px;\n  }\n  @media screen and (max-width: 760px) {\n    width: 510px;\n  }\n  @media screen and (max-width: 520px) {\n    width: 350px;\n  }\n"]))),
                qe = j.e.div(Ie || (Ie = Object(o.a)(["\n  background-color: #2d74c4;\n  border-radius: 5px;\n  padding: 12px 15px;\n  width: 230px;\n  color: white;\n  font-size: 20px;\n  margin-left: -10px;\n  font-weight: 400;\n"]))),
                Ue = j.e.div(Be || (Be = Object(o.a)(["\n  display: flex;\n  @media screen and (max-width: 1024px) {\n    display: flex;\n  }\n  @media screen and (max-width: 760px) {\n    display: block;\n  }\n  @media screen and (max-width: 520px) {\n    display: block;\n  }\n"]))),
                Ge = j.e.div(_e || (_e = Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 750px;\n  @media screen and (max-width: 1024px) {\n    width: 530px;\n  }\n  @media screen and (max-width: 760px) {\n    width: 510px;\n  }\n  @media screen and (max-width: 520px) {\n    margin-top: 10px;\n    width: 350px;\n  }\n"]))),
                Ze = function(e) {
                    var t = e.onDismiss,
                        n = e.stakedFarmList,
                        c = e.stakedDualFarmList,
                        i = e.stakedPoolList,
                        a = e.stakedNextGenList,
                        r = Object(G.m)(),
                        s = r.account,
                        o = r.connect,
                        d = r.reset,
                        j = Object(S.H)((function(e) {
                            switch (!0, e) {
                                case "bsc":
                                    o("bsc");
                                    break;
                                case "walletconnect":
                                    o("walletconnect");
                                    break;
                                default:
                                    o("injected")
                            }
                        }), d, s).onPresentConnectModal,
                        x = Object(l.useRef)([]);
                    return Object(l.useEffect)((function() {
                        L.a.get("https://openapi.debank.com/v1/user/token_list?chain_id=bsc&id=".concat(s, "&is_all=false")).then((function(e) {
                            x.current = e.data, x.current.filter((function(e) {
                                return "CROX" !== e.symbol
                            })), x.current.sort((function(e, t) {
                                return t.price * t.amount - e.price * e.amount
                            }))
                        }))
                    })), Object(E.jsxs)(Qe, {
                        children: [Object(E.jsx)(se.a, {
                            style: {
                                position: "fixed",
                                right: "50px",
                                top: "30px",
                                color: "white",
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                width: "10px",
                                fontSize: 18
                            },
                            onClick: t,
                            children: "\u2716"
                        }), Object(E.jsxs)(Ue, {
                            children: [Object(E.jsxs)(qe, {
                                children: [Object(E.jsx)(We, {}), "Croxster Dashboard"]
                            }), Object(E.jsx)(Ge, {
                                children: s ? Object(E.jsx)(se.a, {
                                    style: {
                                        border: "1px solid #2d74c4"
                                    },
                                    className: "AccountButton",
                                    href: "https://bscscan.com/address/".concat(s),
                                    target: "_blank",
                                    children: Object(E.jsxs)(S.m, {
                                        alignItems: "center",
                                        children: [Object(E.jsxs)(S.A, {
                                            color: "#2d74c4",
                                            mr: "3px",
                                            children: [s.slice(0, 5), "...", s.slice(-5)]
                                        }), Object(E.jsx)(Q.a, {
                                            style: {
                                                fontSize: "20px",
                                                color: "#2d74c4"
                                            }
                                        })]
                                    })
                                }) : Object(E.jsx)(se.a, {
                                    style: {
                                        border: "1px solid #2d74c4"
                                    },
                                    className: "AccountButton",
                                    onClick: j,
                                    variant: "outlined",
                                    children: Object(E.jsxs)(S.m, {
                                        alignItems: "center",
                                        children: [Object(E.jsx)(S.A, {
                                            color: "#2d74c4",
                                            mr: "3px",
                                            children: "Connect Wallet"
                                        }), Object(E.jsx)(Q.a, {
                                            style: {
                                                fontSize: "20px",
                                                color: "#2d74c4"
                                            }
                                        })]
                                    })
                                })
                            })]
                        }), Object(E.jsx)(Xe, {
                            stakedFarmList: n,
                            stakedDualFarmList: c,
                            stakedPoolList: i,
                            stakedNextGenList: a,
                            walletTokenList: x.current
                        })]
                    })
                },
                Ke = function(e) {
                    var t = e.earningsSum,
                        n = e.isInvestor,
                        c = Object(h.a)();
                    return Object(G.m)().account ? n ? Object(E.jsx)(B.a, {
                        value: t,
                        fontSize: "14px"
                    }) : Object(E.jsx)(B.a, {
                        value: t
                    }) : Object(E.jsx)(S.A, {
                        color: "textDisabled",
                        style: {
                            textAlign: "center"
                        },
                        children: c(298, "Locked")
                    })
                },
                Ye = function(e) {
                    var t = e.stakeValue,
                        n = e.isInvestor;
                    return Object(G.m)().account ? n ? Object(E.jsx)(B.a, {
                        value: t,
                        fontSize: "14px"
                    }) : Object(E.jsx)(B.a, {
                        value: t
                    }) : Object(E.jsx)(S.A, {
                        color: "textDisabled",
                        style: {
                            textAlign: "center"
                        },
                        children: "LOCKED"
                    })
                },
                Je = n(72),
                et = function() {
                    var e = Object(l.useState)([]),
                        t = Object(w.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(G.m)().account,
                        a = Object(ae.a)().fastRefresh;
                    return Object(l.useEffect)((function() {
                        var e = function() {
                            var e = Object(k.a)(C.a.mark((function e() {
                                var t, n;
                                return C.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = ie.a.concat(Je.a).map((function(e) {
                                                return {
                                                    address: Object(P.d)(),
                                                    name: "pendingCrox",
                                                    params: [e.pid, i]
                                                }
                                            })), e.next = 3, Object(ne.a)(ce, t);
                                        case 3:
                                            n = e.sent, c(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        i && e()
                    }), [i, a]), n
                },
                tt = function() {
                    return Object(E.jsx)("svg", {
                        width: "34",
                        height: "30",
                        viewBox: "0 0 29 26",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginRight: "4px"
                        },
                        children: Object(E.jsx)("path", {
                            d: "M13.2324 7.20508L15.8691 7.88867C16.0645 7.9375 16.1621 8.08398 16.1621 8.2793C16.1621 8.52344 15.9668 8.71875 15.7227 8.71875H14.0137C13.8184 8.71875 13.623 8.66992 13.4766 8.57227C13.1836 8.47461 12.8906 8.52344 12.6953 8.66992L11.7676 9.54883C11.7188 9.59766 11.7188 9.64648 11.6699 9.69531C11.6211 9.74414 11.5723 9.8418 11.5723 9.93945C11.5723 10.1836 11.7188 10.3301 11.8652 10.4277C12.3535 10.7207 12.9395 10.9648 13.5254 11.0137V11.8438C13.5254 12.2832 13.916 12.625 14.4043 12.625H15.2344C15.7227 12.625 16.1133 12.2832 16.1133 11.8438V11.0137C17.6758 10.8184 18.8965 9.5 18.7012 7.9375C18.5547 6.81445 17.627 5.93555 16.4062 5.59375L13.7695 4.91016C13.5742 4.86133 13.4766 4.71484 13.4766 4.51953C13.4766 4.27539 13.6719 4.08008 13.916 4.08008H15.625C15.8203 4.08008 16.0156 4.12891 16.2109 4.22656C16.4551 4.32422 16.748 4.27539 16.9434 4.12891L17.8711 3.25C17.9199 3.20117 17.9199 3.15234 17.9688 3.10352C18.0176 3.05469 18.0664 2.95703 18.0664 2.85938C18.0664 2.61523 17.9199 2.46875 17.7734 2.37109C17.2852 2.07812 16.6992 1.88281 16.1133 1.78516V0.90625C16.1133 0.515625 15.7227 0.125 15.2344 0.125H14.4043C13.916 0.125 13.5742 0.515625 13.5742 0.90625V1.78516C11.9629 1.98047 10.7422 3.29883 10.9375 4.86133C11.084 5.98438 12.0605 6.86328 13.2324 7.20508ZM27.5879 16.1895C27.002 15.6523 26.123 15.7012 25.4883 16.1895L20.9961 19.7539C20.459 20.1934 19.7754 20.4375 19.043 20.4375H13.2812C12.8418 20.4375 12.5 20.0957 12.5 19.6562C12.5 19.2656 12.8418 18.875 13.2812 18.875H17.0898C17.8711 18.875 18.6035 18.3867 18.7012 17.6055C18.7012 17.5078 18.75 17.4102 18.75 17.3613C18.75 17.3125 18.75 17.3125 18.75 17.3125C18.7012 16.4824 18.0176 15.75 17.1875 15.75H9.375C7.95898 15.7988 6.73828 16.2383 5.71289 17.0684L3.4668 18.875H0.78125C0.341797 18.875 0 19.2656 0 19.6562V24.3438C0 24.7832 0.341797 25.125 0.78125 25.125H18.1641C18.8965 25.125 19.5801 24.8809 20.1172 24.4414L27.5391 18.5332C27.8809 18.2891 28.125 17.8496 28.125 17.3125C28.125 16.873 27.8809 16.4336 27.5879 16.1895Z",
                            fill: "#2d74c4"
                        })
                    })
                },
                nt = function() {
                    return Object(E.jsx)("svg", {
                        width: "15",
                        height: "13",
                        viewBox: "0 0 15 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginRight: "4px",
                            marginLeft: "-2px"
                        },
                        children: Object(E.jsx)("path", {
                            d: "M14.125 5.75H13.4219C13.2109 5.28125 12.9062 4.88281 12.5547 4.53125L13 2.75H12.25C11.5469 2.75 10.9375 3.07812 10.5391 3.57031C10.3516 3.54688 10.1641 3.5 10 3.5H7C5.17188 3.5 3.67188 4.78906 3.32031 6.5H2.3125C1.96094 6.5 1.67969 6.19531 1.75 5.84375C1.79688 5.5625 2.05469 5.375 2.33594 5.375H2.35938C2.42969 5.375 2.5 5.32812 2.5 5.23438V4.76562C2.5 4.69531 2.42969 4.625 2.35938 4.625C1.67969 4.625 1.09375 5.11719 1 5.77344C0.90625 6.57031 1.51562 7.25 2.3125 7.25H3.25C3.25 8.49219 3.83594 9.57031 4.75 10.25V12.125C4.75 12.3359 4.91406 12.5 5.125 12.5H6.625C6.8125 12.5 7 12.3359 7 12.125V11H10V12.125C10 12.3359 10.1641 12.5 10.375 12.5H11.875C12.0625 12.5 12.25 12.3359 12.25 12.125V10.25C12.5078 10.0391 12.7656 9.78125 12.9766 9.5H14.125C14.3125 9.5 14.5 9.33594 14.5 9.125V6.125C14.5 5.9375 14.3125 5.75 14.125 5.75ZM11.125 7.25C10.9141 7.25 10.75 7.08594 10.75 6.875C10.75 6.6875 10.9141 6.5 11.125 6.5C11.3125 6.5 11.5 6.6875 11.5 6.875C11.5 7.08594 11.3125 7.25 11.125 7.25ZM7 2.75H10C10.1172 2.75 10.2344 2.77344 10.3516 2.77344C10.3516 2.77344 10.375 2.77344 10.375 2.75C10.375 1.50781 9.36719 0.5 8.125 0.5C6.88281 0.5 5.875 1.50781 5.875 2.75C5.875 2.82031 5.875 2.86719 5.875 2.91406C6.22656 2.82031 6.60156 2.75 7 2.75Z",
                            fill: "white"
                        })
                    })
                },
                ct = function() {
                    return Object(E.jsx)("svg", {
                        width: "12",
                        height: "11",
                        viewBox: "0 0 12 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginRight: "5px"
                        },
                        children: Object(E.jsx)("path", {
                            d: "M1.5 1.75H0C0 4.65625 2.34375 7 5.25 7V10.375C5.25 10.5859 5.41406 10.75 5.625 10.75H6.375C6.5625 10.75 6.75 10.5859 6.75 10.375V7C6.75 4.11719 4.38281 1.75 1.5 1.75ZM10.5 0.25C8.50781 0.25 6.79688 1.35156 5.90625 2.96875C6.5625 3.67188 7.03125 4.53906 7.28906 5.47656C9.9375 5.21875 12 2.96875 12 0.25H10.5Z",
                            fill: "white"
                        })
                    })
                },
                it = (n(1311), Object(j.e)(S.f)(Ee || (Ee = Object(o.a)(["\n  min-height: 376px;\n  background-color: #2c2d3a;\n"])))),
                at = j.e.div(Ve || (Ve = Object(o.a)(["\n  padding: 15px;\n  z-index: 97;\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  color: #2d74c4;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  text-align: center;\n"]))),
                rt = j.e.div(Me || (Me = Object(o.a)(["\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n  @media screen and (max-width: 440px) {\n    text-align: end;\n    .portfolioLink {\n      text-align: center;\n    }\n  }\n"]))),
                st = j.e.thead($e || ($e = Object(o.a)(["\n  background-color: #3b3c4e;\n  tr th {\n    color: #2d74c4;\n  }\n"]))),
                ot = j.e.button(He || (He = Object(o.a)(["\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: bold;\n  background-color: transparent;\n"]))),
                lt = {
                    body: {
                        overflow: "hidden !important"
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "transparent",
                        border: "none",
                        overflow: "auto"
                    }
                };
            U.a.defaultStyles.overlay.backgroundColor = "rgba(69,42,122,0.6)", U.a.defaultStyles.overlay.zIndex = "98";
            var dt, jt, xt, bt, ht, pt, Ot, mt, ut, gt, ft, yt, wt, vt, Ct, kt, St, At, Ft, Tt, Lt, Nt, Pt, zt, Dt, Rt, It, Bt = function() {
                    var e = Object(l.useState)(!1),
                        t = Object(w.a)(e, 2),
                        n = t[0],
                        c = t[1];

                    function i() {
                        c(!1)
                    }
                    for (var a = Object(S.F)(), r = (a.isMd, a.isSm, a.isXs, a.isLg, Object(l.useState)(!1)), s = Object(w.a)(r, 2), o = s[0], d = s[1], j = Object(l.useState)("wallet"), x = Object(w.a)(j, 2), b = (x[0], x[1], Object(G.m)().account), p = Object(h.a)(), O = re(), m = Object(F.a)(Object(N.a)(Object(P.a)())), u = Object(_.s)().toNumber(), g = et(), y = Object(_.b)("CROX").stakedBalance, v = Object(_.j)(!0), A = Object(_.m)(), T = [], L = 0; L < A.length; L++) A[L].userData && 0 !== Object(F.a)(new K.a(A[L].userData.stakedBalance)) && T.push(A[L]);
                    for (var z = Object(_.j)(), D = [], R = 0; R < z.length; R++) z[R].userData && 0 !== Object(F.a)(new K.a(z[R].userData.stakedBalance)) && D.push(z[R]);
                    for (var B = Object(_.d)(), V = [], M = 0; M < B.length; M++) B[M].userData && 0 !== Object(F.a)(new K.a(B[M].userData.stakedBalance)) && V.push(B[M]);
                    for (var $ = Object(_.j)(!0), H = [], X = 0; X < $.length; X++) $[X].userData && 0 !== Object(F.a)(new K.a($[X].userData.stakedBalance)) && H.push($[X]);
                    for (var q = D.filter((function(e) {
                            return !0 === e.active
                        })), Z = Object(_.g)(), te = new K.a(0), ne = 0; ne < v.length; ne++) v[ne].userData && (te = new K.a(te).plus(new K.a(v[ne].userData.stakedBalance)));
                    for (var ce = new K.a(0), ie = 0; ie < Z.length; ie++) Z[ie].userData && (ce = new K.a(ce).plus(new K.a(Z[ie].userData.stakedBalance)));
                    var se = Object(F.a)(new K.a(y).plus(new K.a(te)).plus(new K.a(ce))),
                        oe = se * u,
                        le = g.reduce((function(e, t) {
                            return e + new K.a(t).div(new K.a(10).pow(18)).toNumber()
                        }), 0),
                        de = O.filter((function(e) {
                            return e.balance.toNumber() > 0
                        })),
                        je = Object(J.a)(de.map((function(e) {
                            return e.pid
                        }))).onReward,
                        xe = Object(l.useCallback)(Object(k.a)(C.a.mark((function e() {
                            return C.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d(!0), e.prev = 1, e.next = 4, je();
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 8:
                                        return e.prev = 8, d(!1), e.finish(8);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6, 8, 11]
                            ])
                        }))), [je]),
                        be = Object(W.b)(),
                        he = Object(ae.a)().fastRefresh;
                    Object(l.useEffect)((function() {
                        b && (be(Object(Y.g)(b)), be(Object(Y.a)(b)), be(Object(Y.e)(b)))
                    }), [b, be, he]);
                    var pe = Object(I.a)("(max-width: 600px)");
                    return Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)(it, {
                            children: Object(E.jsxs)(S.g, {
                                style: {
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                },
                                children: [Object(E.jsx)(S.m, {
                                    justifyContent: pe ? "center" : "flex-start",
                                    children: Object(E.jsxs)(S.m, {
                                        alignItems: "center",
                                        style: {
                                            backgroundColor: "#3b3c4e",
                                            width: "230px",
                                            padding: "3px 10px",
                                            borderRadius: "5px"
                                        },
                                        justifyContent: "flex-start",
                                        children: [Object(E.jsx)(f.a, {
                                            icon: "fa-solid:tractor",
                                            style: {
                                                color: "white"
                                            }
                                        }), Object(E.jsx)(S.A, {
                                            color: "white",
                                            fontSize: "17px",
                                            ml: "3px",
                                            bold: !0,
                                            children: "CROXSTER DASHBOARD"
                                        })]
                                    })
                                }), Object(E.jsxs)(E.Fragment, {
                                    children: [Object(E.jsxs)(at, {
                                        children: [Object(E.jsx)(tt, {}), "CROX FOLIO"]
                                    }), Object(E.jsxs)("table", {
                                        className: "table tablesorter ",
                                        id: "plain-table",
                                        children: [Object(E.jsx)(st, {
                                            className: "thead_invest",
                                            children: Object(E.jsxs)("tr", {
                                                children: [Object(E.jsx)("th", {
                                                    style: {
                                                        textAlign: "left",
                                                        paddingLeft: "16px"
                                                    },
                                                    children: "$CROX"
                                                }), Object(E.jsx)("th", {
                                                    children: "Amount"
                                                }), Object(E.jsx)("th", {
                                                    children: "Total($)"
                                                })]
                                            })
                                        }), Object(E.jsxs)("tbody", {
                                            className: "tbody_invest",
                                            children: [Object(E.jsxs)("tr", {
                                                children: [Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.m, {
                                                        alignItems: "center",
                                                        ml: "15px",
                                                        children: [Object(E.jsx)(ee.a, {
                                                            style: {
                                                                fontSize: "14px"
                                                            }
                                                        }), Object(E.jsx)(S.A, {
                                                            bold: !0,
                                                            color: "white",
                                                            ml: "3px",
                                                            children: "In Wallet"
                                                        })]
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsx)(ke, {
                                                        cakeBalance: m,
                                                        isInvestor: !0
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.A, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "white"
                                                        },
                                                        children: ["$", (u * m).toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })
                                                })]
                                            }), Object(E.jsxs)("tr", {
                                                children: [Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.m, {
                                                        alignItems: "center",
                                                        ml: "15px",
                                                        children: [Object(E.jsx)(nt, {}), Object(E.jsx)(S.A, {
                                                            bold: !0,
                                                            color: "white",
                                                            children: "Staked"
                                                        })]
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsx)(Ye, {
                                                        stakeValue: se,
                                                        isInvestor: !0
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.A, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "white"
                                                        },
                                                        children: ["$", oe.toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })
                                                })]
                                            }), Object(E.jsxs)("tr", {
                                                children: [Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.m, {
                                                        alignItems: "center",
                                                        ml: "15px",
                                                        children: [Object(E.jsx)(ct, {}), Object(E.jsx)(S.A, {
                                                            bold: !0,
                                                            color: "white",
                                                            children: "To Harvest"
                                                        })]
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsx)(Ke, {
                                                        earningsSum: le,
                                                        isInvestor: !0
                                                    })
                                                }), Object(E.jsx)("td", {
                                                    children: Object(E.jsxs)(S.A, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "white"
                                                        },
                                                        children: ["$", (u * le).toLocaleString(void 0, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }), Object(E.jsxs)(rt, {
                                    children: [Object(E.jsxs)(S.m, {
                                        mr: "50px",
                                        alignItems: "center",
                                        onClick: function() {
                                            return c(!0)
                                        },
                                        children: [Object(E.jsx)(ot, {
                                            style: {
                                                cursor: "pointer",
                                                color: "#2d74c4"
                                            },
                                            children: pe ? "Portfolio" : "View Full Portfolio"
                                        }), Object(E.jsx)(Q.a, {
                                            style: {
                                                color: "#2d74c4",
                                                fontSize: "20px"
                                            }
                                        })]
                                    }), b ? Object(E.jsx)(S.d, {
                                        id: "harvest-all",
                                        disabled: de.length <= 0 || o,
                                        onClick: xe,
                                        size: "sm",
                                        className: "havest_all_btn",
                                        style: {
                                            fontSize: "14px",
                                            width: "124px",
                                            borderRadius: "5px"
                                        },
                                        fullWidth: !0,
                                        children: o ? p(548, "Collecting CROX") : p(999, "Harvest all (".concat(de.length, ")"))
                                    }) : Object(E.jsx)(S.d, {
                                        id: "harvest-all",
                                        onClick: xe,
                                        fullWidth: !0,
                                        size: "sm",
                                        className: "havest_all_btn",
                                        style: {
                                            fontSize: "14px",
                                            width: "124px",
                                            borderRadius: "5px"
                                        },
                                        children: o ? p(548, "Collecting CROX") : p(999, "Harvest All")
                                    })]
                                })]
                            })
                        }), Object(E.jsx)(U.a, {
                            isOpen: n,
                            onRequestClose: function() {
                                return i()
                            },
                            style: lt,
                            children: Object(E.jsx)(Ze, {
                                onDismiss: function() {
                                    return i()
                                },
                                stakedFarmList: T,
                                stakedDualFarmList: q,
                                stakedPoolList: V,
                                stakedNextGenList: H
                            })
                        })]
                    })
                },
                _t = n(256),
                Et = (n(1312), j.e.div(dt || (dt = Object(o.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n"])))),
                Vt = j.e.div(jt || (jt = Object(o.a)(["\n  text-align: center;\n  width: 85%;\n  margin: auto;\n"]))),
                Mt = j.e.div(xt || (xt = Object(o.a)(["\n  // width: 25%;\n  margin-right: 0px;\n"]))),
                $t = j.e.div(bt || (bt = Object(o.a)(["\n  display: block;\n  width: 60%;\n  text-align: center;\n"]))),
                Ht = j.e.div(ht || (ht = Object(o.a)(["\n  background: #2c2d3a;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  border: 2px solid #3b3c4e;\n"]))),
                Xt = Object(j.e)(S.A)(pt || (pt = Object(o.a)(["\n  border-bottom: 2px solid #3b3c4e;\n  color: white;\n"]))),
                Wt = Object(j.e)(S.f)(Ot || (Ot = Object(o.a)(["\n  border: 2px solid #3b3c4e;\n  background: #2c2d3a;\n  margin: 10px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  & .swiper-button-prev:after,\n  & .swiper-button-next:after {\n    opacity: 0.5 !important;\n    font-size: 20px !important;\n  }\n"]))),
                Qt = function() {
                    var e = Object(x.f)(),
                        t = Object(_.j)(),
                        n = Object(_.s)(),
                        c = Object(_.r)(),
                        i = Object(b.m)(),
                        a = i.isMd,
                        r = i.isSm,
                        s = i.isXs,
                        o = (Object(_t.a)().isDark, t.filter((function(e) {
                            return e.active
                        })).map((function(e) {
                            var t = Math.abs(e.pid),
                                i = Object(me.b)(e, {
                                    cakePrice: n,
                                    bnbPrice: c
                                }),
                                a = i.apy1,
                                r = i.apy2,
                                s = i.totalValue;
                            return Object(te.a)(Object(te.a)({}, e), {}, {
                                apy: a.plus(r),
                                totalValue: s,
                                pidInAbs: t
                            })
                        }))),
                        l = function() {
                            e.push("/dualfarms")
                        };
                    return Object(E.jsx)(E.Fragment, {
                        children: a || r || s ? Object(E.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "stretch",
                                flex: "auto"
                            },
                            children: [Object(E.jsx)("div", {
                                className: "twitter",
                                children: Object(E.jsxs)("div", {
                                    className: "twitter__price-tag",
                                    style: {
                                        top: "-8px",
                                        left: "-10px"
                                    },
                                    children: [Object(E.jsx)(fe.c, {}), Object(E.jsx)("p", {
                                        className: "twitter__price-tag-price",
                                        children: "TOP FARMS"
                                    })]
                                })
                            }), Object(E.jsx)(Wt, {
                                style: {
                                    margin: "0 0 10px 0"
                                },
                                children: Object(E.jsx)(S.g, {
                                    style: {
                                        padding: "15px 0"
                                    },
                                    children: Object(E.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            marginRight: "20px",
                                            zIndex: 0
                                        },
                                        children: Object(E.jsx)(p.a, {
                                            navigation: !0,
                                            loop: !0,
                                            className: "mySwiper",
                                            autoplay: {
                                                delay: 2500,
                                                disableOnInteraction: !1
                                            },
                                            children: o && o.length > 0 && o.sort((function(e, t) {
                                                return e && t && e.apy.isGreaterThan(t.apy) ? -1 : 1
                                            })) && o.slice(0, 2).map((function(e, t) {
                                                var n = e.isDualFarm ? "".concat(e.lpSymbol.split(" ")[0].toLowerCase()) : "".concat(e.tokenSymbol.split(" ")[0].toLowerCase());
                                                return Object(E.jsx)(O.a, {
                                                    style: {
                                                        width: "100%",
                                                        margin: "auto",
                                                        marginBottom: "-11px"
                                                    },
                                                    children: Object(E.jsx)(Vt, {
                                                        onClick: l,
                                                        children: Object(E.jsxs)(Et, {
                                                            children: [Object(E.jsx)("div", {
                                                                style: {
                                                                    width: "30%"
                                                                },
                                                                children: Object(E.jsx)("div", {
                                                                    style: {
                                                                        margin: "auto"
                                                                    },
                                                                    children: Object(E.jsx)("img", {
                                                                        src: "/images/farms/".concat(n, ".svg"),
                                                                        alt: e.tokenSymbol,
                                                                        width: 80,
                                                                        height: 80
                                                                    })
                                                                })
                                                            }), Object(E.jsxs)($t, {
                                                                children: [Object(E.jsx)("div", {
                                                                    children: Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "20px",
                                                                        style: {
                                                                            lineHeight: "1"
                                                                        },
                                                                        bold: !0,
                                                                        children: null === e || void 0 === e ? void 0 : e.lpSymbol
                                                                    })
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        padding: "5px"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "15px",
                                                                        bold: !0,
                                                                        children: "APR: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "15px",
                                                                        bold: !0,
                                                                        style: {
                                                                            marginLeft: "4px"
                                                                        },
                                                                        children: [e.apy.times(100).toFixed(2), "%"]
                                                                    })]
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        padding: "5px"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "20px",
                                                                        bold: !0,
                                                                        children: "Liquidity: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        style: {
                                                                            marginTop: "3px",
                                                                            marginLeft: "3px"
                                                                        },
                                                                        children: ["$", e.totalValue.toNumber() ? e.totalValue.toNumber().toLocaleString(void 0, {
                                                                            minimumFractionDigits: 0,
                                                                            maximumFractionDigits: 0
                                                                        }) : "0"]
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                })
                                            }))
                                        })
                                    })
                                })
                            }), Object(E.jsx)("div", {
                                className: "twitter",
                                children: Object(E.jsxs)("div", {
                                    className: "twitter__price-tag",
                                    style: {
                                        top: "-8px",
                                        left: "-10px"
                                    },
                                    children: [Object(E.jsx)(fe.a, {}), Object(E.jsx)("p", {
                                        className: "twitter__price-tag-price",
                                        children: "NEW FARMS"
                                    })]
                                })
                            }), Object(E.jsx)(Wt, {
                                style: {
                                    margin: "0 0 10px 0"
                                },
                                children: Object(E.jsx)(S.g, {
                                    style: {
                                        padding: "15px 0"
                                    },
                                    children: Object(E.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            marginRight: "20px",
                                            zIndex: 0
                                        },
                                        children: Object(E.jsx)(p.a, {
                                            navigation: !0,
                                            loop: !0,
                                            className: "mySwiper",
                                            autoplay: {
                                                delay: 2500,
                                                disableOnInteraction: !1
                                            },
                                            children: o && o.length > 0 && o.sort((function(e, t) {
                                                return e && t && e.pidInAbs > t.pidInAbs ? -1 : 1
                                            })) && o.slice(0, 2).map((function(e, t) {
                                                var n = e.isDualFarm ? "".concat(e.lpSymbol.split(" ")[0].toLowerCase()) : "".concat(e.tokenSymbol.split(" ")[0].toLowerCase());
                                                return Object(E.jsx)(O.a, {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    children: Object(E.jsx)(Vt, {
                                                        onClick: l,
                                                        children: Object(E.jsxs)(Et, {
                                                            style: {
                                                                justifyContent: "center",
                                                                margin: "10px 0"
                                                            },
                                                            children: [Object(E.jsx)("div", {
                                                                style: {
                                                                    width: "30%"
                                                                },
                                                                children: Object(E.jsx)("div", {
                                                                    style: {
                                                                        margin: "auto"
                                                                    },
                                                                    children: Object(E.jsx)("img", {
                                                                        src: "/images/farms/".concat(n, ".svg"),
                                                                        alt: e.tokenSymbol,
                                                                        width: 80,
                                                                        height: 80
                                                                    })
                                                                })
                                                            }), Object(E.jsxs)($t, {
                                                                children: [Object(E.jsx)("div", {
                                                                    children: Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "20px",
                                                                        style: {
                                                                            lineHeight: "1"
                                                                        },
                                                                        bold: !0,
                                                                        children: null === e || void 0 === e ? void 0 : e.lpSymbol
                                                                    })
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "15px",
                                                                        bold: !0,
                                                                        children: "APR: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "15px",
                                                                        bold: !0,
                                                                        style: {
                                                                            marginLeft: "4px"
                                                                        },
                                                                        children: [e.apy.times(100).toFixed(2), "%"]
                                                                    })]
                                                                }), Object(E.jsx)("div", {
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    children: Object(E.jsx)("div", {
                                                                        style: {
                                                                            backgroundColor: "#3b3c4e",
                                                                            margin: "auto",
                                                                            borderRadius: "10px",
                                                                            width: "80%",
                                                                            display: "inline-flex"
                                                                        },
                                                                        children: Object(E.jsxs)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                width: "50%",
                                                                                margin: "auto"
                                                                            },
                                                                            children: [Object(E.jsx)("img", {
                                                                                src: "/images/farms/".concat(e.tokenSymbol.toLowerCase(), ".svg"),
                                                                                alt: e.tokenSymbol,
                                                                                width: 25,
                                                                                height: 25,
                                                                                style: {
                                                                                    margin: "0 3px"
                                                                                }
                                                                            }), Object(E.jsx)(S.A, {
                                                                                color: "white",
                                                                                style: {
                                                                                    fontSize: "15px",
                                                                                    paddingTop: "3px"
                                                                                },
                                                                                bold: !0,
                                                                                children: "+"
                                                                            }), Object(E.jsx)("img", {
                                                                                src: "/images/farms/crox.svg",
                                                                                alt: "CROX",
                                                                                width: 30,
                                                                                height: 30,
                                                                                style: {
                                                                                    margin: "0 3px"
                                                                                }
                                                                            })]
                                                                        })
                                                                    })
                                                                })]
                                                            }), Object(E.jsx)(Mt, {})]
                                                        })
                                                    })
                                                })
                                            }))
                                        })
                                    })
                                })
                            })]
                        }) : Object(E.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "stretch",
                                flex: "auto"
                            },
                            children: [Object(E.jsx)("div", {
                                className: "twitter",
                                children: Object(E.jsxs)("div", {
                                    className: "twitter__price-tag",
                                    style: {
                                        top: "0px",
                                        left: "0px"
                                    },
                                    children: [Object(E.jsx)(fe.c, {}), Object(E.jsx)("p", {
                                        className: "twitter__price-tag-price",
                                        children: "TOP FARMS"
                                    })]
                                })
                            }), Object(E.jsx)(Wt, {
                                style: {
                                    marginBottom: "10px"
                                },
                                children: Object(E.jsx)(S.g, {
                                    style: {
                                        padding: "12px 0"
                                    },
                                    children: Object(E.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            marginRight: "20px",
                                            zIndex: 0
                                        },
                                        children: Object(E.jsx)(p.a, {
                                            navigation: !0,
                                            loop: !0,
                                            className: "mySwiper",
                                            autoplay: {
                                                delay: 2500,
                                                disableOnInteraction: !1
                                            },
                                            children: o && o.length > 0 && o.sort((function(e, t) {
                                                return e && t && e.apy.isGreaterThan(t.apy) ? -1 : 1
                                            })) && o.slice(0, 2).map((function(e, t) {
                                                var n = e.isDualFarm ? "".concat(e.lpSymbol.split(" ")[0].toLowerCase()) : "".concat(e.tokenSymbol.split(" ")[0].toLowerCase());
                                                return Object(E.jsx)(O.a, {
                                                    style: {
                                                        width: "90%",
                                                        margin: "auto",
                                                        marginBottom: "-11px"
                                                    },
                                                    children: Object(E.jsx)(Vt, {
                                                        onClick: l,
                                                        children: Object(E.jsxs)(Et, {
                                                            children: [Object(E.jsx)("div", {
                                                                style: {
                                                                    width: "30%"
                                                                },
                                                                children: Object(E.jsx)("div", {
                                                                    style: {
                                                                        margin: "auto"
                                                                    },
                                                                    children: Object(E.jsx)("img", {
                                                                        src: "/images/farms/".concat(n, ".svg"),
                                                                        alt: n,
                                                                        width: 80,
                                                                        height: 80
                                                                    })
                                                                })
                                                            }), Object(E.jsxs)($t, {
                                                                children: [Object(E.jsx)("div", {
                                                                    children: Object(E.jsx)(Xt, {
                                                                        fontSize: "25px",
                                                                        mb: "5px",
                                                                        bold: !0,
                                                                        children: null === e || void 0 === e ? void 0 : e.lpSymbol
                                                                    })
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        children: "APR: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        style: {
                                                                            marginLeft: "4px"
                                                                        },
                                                                        children: [e.apy.times(100).toFixed(2), "%"]
                                                                    })]
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        children: "Liquidity: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        style: {
                                                                            marginLeft: "3px"
                                                                        },
                                                                        children: ["$", e.totalValue.toNumber() ? e.totalValue.toNumber().toLocaleString(void 0, {
                                                                            minimumFractionDigits: 0,
                                                                            maximumFractionDigits: 0
                                                                        }) : "0"]
                                                                    })]
                                                                })]
                                                            }), Object(E.jsx)("div", {
                                                                style: {
                                                                    width: "31%",
                                                                    margin: "5px"
                                                                },
                                                                children: Object(E.jsxs)(Ht, {
                                                                    style: {
                                                                        margin: "auto"
                                                                    },
                                                                    children: [Object(E.jsx)("div", {
                                                                        style: {
                                                                            paddingTop: "10px"
                                                                        },
                                                                        children: Object(E.jsx)(S.A, {
                                                                            color: "white",
                                                                            style: {
                                                                                fontSize: "20px"
                                                                            },
                                                                            bold: !0,
                                                                            children: "Earn"
                                                                        })
                                                                    }), Object(E.jsxs)("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: [Object(E.jsx)("img", {
                                                                            src: "/images/farms/".concat(e.tokenSymbol.toLowerCase(), ".svg"),
                                                                            alt: e.tokenSymbol,
                                                                            width: 35,
                                                                            height: 35,
                                                                            style: {
                                                                                margin: "0 5px"
                                                                            }
                                                                        }), Object(E.jsx)(S.A, {
                                                                            color: "white",
                                                                            style: {
                                                                                fontSize: "20px"
                                                                            },
                                                                            bold: !0,
                                                                            children: "+"
                                                                        }), Object(E.jsx)("img", {
                                                                            src: "/images/farms/crox.svg",
                                                                            alt: "CROX",
                                                                            width: 35,
                                                                            height: 35,
                                                                            style: {
                                                                                margin: "0 5px"
                                                                            }
                                                                        })]
                                                                    }), Object(E.jsx)("div", {
                                                                        style: {
                                                                            paddingTop: "5px"
                                                                        },
                                                                        children: Object(E.jsx)(S.A, {
                                                                            color: "white",
                                                                            fontSize: "12px",
                                                                            bold: !0,
                                                                            children: "Dual Rewards"
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            }))
                                        })
                                    })
                                })
                            }), Object(E.jsx)("div", {
                                className: "twitter",
                                children: Object(E.jsxs)("div", {
                                    className: "twitter__price-tag",
                                    style: {
                                        top: "0px",
                                        left: "0px"
                                    },
                                    children: [Object(E.jsx)(fe.a, {}), Object(E.jsx)("p", {
                                        className: "twitter__price-tag-price",
                                        children: "NEW FARMS"
                                    })]
                                })
                            }), Object(E.jsx)(Wt, {
                                style: {
                                    marginTop: "10px"
                                },
                                children: Object(E.jsx)(S.g, {
                                    style: {
                                        padding: "15px 0"
                                    },
                                    children: Object(E.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            marginRight: "20px",
                                            zIndex: 0
                                        },
                                        children: Object(E.jsx)(p.a, {
                                            navigation: !0,
                                            loop: !0,
                                            className: "mySwiper",
                                            autoplay: {
                                                delay: 2500,
                                                disableOnInteraction: !1
                                            },
                                            children: o && o.length > 0 && o.sort((function(e, t) {
                                                return e && t && e.pidInAbs > t.pidInAbs ? -1 : 1
                                            })) && o.slice(0, 2).map((function(e, t) {
                                                var n = e.isDualFarm ? "".concat(e.lpSymbol.split(" ")[0].toLowerCase()) : "".concat(e.tokenSymbol.split(" ")[0].toLowerCase());
                                                return Object(E.jsx)(O.a, {
                                                    style: {
                                                        width: "80%"
                                                    },
                                                    children: Object(E.jsx)(Vt, {
                                                        onClick: l,
                                                        children: Object(E.jsxs)(Et, {
                                                            style: {
                                                                justifyContent: "center",
                                                                margin: "10px 0"
                                                            },
                                                            children: [Object(E.jsx)("div", {
                                                                style: {
                                                                    width: "20%"
                                                                },
                                                                children: Object(E.jsx)("div", {
                                                                    style: {
                                                                        margin: "auto"
                                                                    },
                                                                    children: Object(E.jsx)("img", {
                                                                        src: "/images/farms/".concat(n, ".svg"),
                                                                        alt: n,
                                                                        width: 80,
                                                                        height: 80
                                                                    })
                                                                })
                                                            }), Object(E.jsxs)($t, {
                                                                children: [Object(E.jsx)("div", {
                                                                    children: Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "25px",
                                                                        style: {
                                                                            lineHeight: "1"
                                                                        },
                                                                        bold: !0,
                                                                        children: null === e || void 0 === e ? void 0 : e.lpSymbol
                                                                    })
                                                                }), Object(E.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "center"
                                                                    },
                                                                    children: [Object(E.jsx)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        children: "APR: "
                                                                    }), Object(E.jsxs)(S.A, {
                                                                        color: "white",
                                                                        fontSize: "18px",
                                                                        style: {
                                                                            marginLeft: "4px"
                                                                        },
                                                                        children: [e.apy.times(100).toFixed(2), "%"]
                                                                    })]
                                                                }), Object(E.jsx)("div", {
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    children: Object(E.jsxs)(Ht, {
                                                                        style: {
                                                                            padding: "5px",
                                                                            margin: "auto",
                                                                            borderRadius: "10px",
                                                                            width: "80%",
                                                                            display: "inline-flex",
                                                                            height: "auto"
                                                                        },
                                                                        children: [Object(E.jsxs)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                width: "70%"
                                                                            },
                                                                            children: [Object(E.jsx)("img", {
                                                                                src: "/images/farms/".concat(e.tokenSymbol.toLowerCase(), ".svg"),
                                                                                alt: e.tokenSymbol,
                                                                                width: 20,
                                                                                height: 20,
                                                                                style: {
                                                                                    margin: "0 8px"
                                                                                }
                                                                            }), Object(E.jsx)(S.A, {
                                                                                color: "white",
                                                                                style: {
                                                                                    fontSize: "15px",
                                                                                    paddingTop: "3px"
                                                                                },
                                                                                bold: !0,
                                                                                children: "+"
                                                                            }), Object(E.jsx)("img", {
                                                                                src: "/images/farms/crox.svg",
                                                                                alt: "CROX",
                                                                                width: 30,
                                                                                height: 30,
                                                                                style: {
                                                                                    margin: "0 8px"
                                                                                }
                                                                            })]
                                                                        }), Object(E.jsx)("div", {
                                                                            style: {
                                                                                width: "30%"
                                                                            },
                                                                            children: Object(E.jsx)(S.A, {
                                                                                color: "white",
                                                                                style: {
                                                                                    fontSize: "11px"
                                                                                },
                                                                                bold: !0,
                                                                                children: "Dual Rewards"
                                                                            })
                                                                        })]
                                                                    })
                                                                })]
                                                            }), Object(E.jsx)(Mt, {})]
                                                        })
                                                    })
                                                })
                                            }))
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                qt = j.e.div(mt || (mt = Object(o.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  @media screen and (max-width: 750px) {\n    display: block;\n  }  \n"]))),
                Ut = j.e.div(ut || (ut = Object(o.a)(["\n  // width: 25%;\n  margin-right: 0px;\n"]))),
                Gt = j.e.div(gt || (gt = Object(o.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-around;\n  margin-bottom: 20px;\n  padding: 0 20px;\n  @media screen and (max-width: 750px) {\n      display: inline-block;\n      width: 100%;\n      padding: 0;\n  }\n"]))),
                Zt = Object(j.e)(S.f)(ft || (ft = Object(o.a)(["\n  width: 100%;\n  margin: auto;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  background: #2c2d3a;\n  margin-bottom: 10px;\n  & .swiper-button-prev:after,\n  & .swiper-button-next:after {\n    opacity: 0.5 !important;\n    font-size: 20px !important;\n  }\n  @media screen and (min-width: 770px) {\n    width: 80%;\n}  \n"]))),
                Kt = Object(j.e)(S.A)(yt || (yt = Object(o.a)(["\n  font-size: 25px;\n  font-weight: bold;\n  @media screen and (max-width: 750px) {\n    text-align: center;\n  } \n"]))),
                Yt = Object(j.e)(S.A)(wt || (wt = Object(o.a)(["\n    fontSize: 15px; \n    font-weight: bold;\n    @media screen and (max-width: 750px) {\n       text-align: center;\n    }\n    @media screen and (max-width: 550px) {\n      font-size: 12px;\n   }\n"]))),
                Jt = j.e.div(vt || (vt = Object(o.a)(["\n  padding: 10px 20px;\n  background: #3b3c4e;\n  border-radius: 10px;\n  display: flex;\n  margin: auto;\n  @media screen and (max-width: 750px) {\n    justify-content: center;\n }\n"]))),
                en = Object(j.e)(S.A)(Ct || (Ct = Object(o.a)(["\n  font-size: 18px;\n  @media screen and (max-width: 750px) {\n    font-size: 17px;\n    margin-top: 10px;\n    text-align: center;\n  }\n"]))),
                tn = function() {
                    Object(j.g)().isDark;
                    var e = Object(x.f)(),
                        t = Object(_.d)(),
                        n = Object(_.s)(),
                        c = Object(_.r)(),
                        i = t.filter((function(e) {
                            return "0X" !== e.multiplier && "CROX" === e.lpSymbol
                        })).map((function(e) {
                            var t = Math.abs(e.pid),
                                i = Object(me.e)(e, {
                                    cakePrice: n,
                                    bnbPrice: c
                                }),
                                a = i.apy,
                                r = i.totalValue;
                            return Object(te.a)(Object(te.a)({}, e), {}, {
                                apy: a,
                                totalValue: r,
                                pidInAbs: t
                            })
                        })),
                        a = Object(I.a)("(max-width: 600px)"),
                        r = function() {
                            e.push("/pools/crox")
                        };
                    return Object(E.jsx)(Zt, {
                        children: Object(E.jsxs)(S.g, {
                            style: {
                                padding: "20px 40px 20px 30px"
                            },
                            children: [Object(E.jsx)(qt, {
                                style: {
                                    marginBottom: "5px"
                                },
                                children: Object(E.jsx)(Kt, {
                                    color: "#2d74c4",
                                    bold: !0,
                                    children: "Next-Generation Staking Pools"
                                })
                            }), Object(E.jsx)(qt, {
                                children: Object(E.jsx)(Yt, {
                                    mt: "-5px",
                                    children: "Stake your CROX in pools to earn new tokens"
                                })
                            }), i && i.length > 0 && i.map((function(e, t) {
                                return Object(E.jsxs)(Gt, {
                                    children: [Object(E.jsx)(Ut, {
                                        children: Object(E.jsxs)(Jt, {
                                            children: [Object(E.jsx)("div", {
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/farms/crox.svg",
                                                    alt: "crox",
                                                    width: 80,
                                                    height: 80
                                                })
                                            }), Object(E.jsxs)(S.m, {
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                children: [Object(E.jsx)(S.A, {
                                                    fontSize: a ? "16px" : "22px",
                                                    color: "#2d74c4",
                                                    bold: !0,
                                                    children: "Native CROX Pool"
                                                }), Object(E.jsx)(S.A, {
                                                    fontSize: a ? "12px" : "16px",
                                                    color: "white",
                                                    bold: !0,
                                                    children: "Stake CROX, Earn CROX"
                                                }), Object(E.jsxs)(S.m, {
                                                    justifyContent: "center",
                                                    children: [Object(E.jsx)(S.A, {
                                                        color: "#2d74c4",
                                                        fontSize: a ? "16px" : "18px",
                                                        bold: !0,
                                                        children: "APR:"
                                                    }), Object(E.jsxs)(S.A, {
                                                        color: "#2d74c4",
                                                        ml: "3px",
                                                        fontSize: a ? "16px" : "18px",
                                                        bold: !0,
                                                        children: [e.apy.times(100).toFixed(2), "%"]
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), Object(E.jsx)(Ut, {
                                        children: Object(E.jsxs)("div", {
                                            children: [Object(E.jsx)("div", {
                                                style: {
                                                    justifyContent: "center",
                                                    marginBottom: "10px"
                                                },
                                                children: Object(E.jsx)(en, {
                                                    bold: !0,
                                                    children: "Passive income forever"
                                                })
                                            }), Object(E.jsx)("div", {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: Object(E.jsx)(S.d, {
                                                    style: {
                                                        borderRadius: "10px",
                                                        padding: "0px 40px",
                                                        backgroundColor: "#2d74c4",
                                                        fontSize: "18px"
                                                    },
                                                    onClick: r,
                                                    children: " Earn Now "
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }))]
                        })
                    })
                },
                nn = Object(j.e)(S.f)(kt || (kt = Object(o.a)(["\n  background: #3b3c4e;\n  max-width: 4000px;\n  width: 240px;\n  margin: 0 15px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n"]))),
                cn = Object(j.e)(S.A)(St || (St = Object(o.a)(["\n  border-radius: 10px;\n  width: 36px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 900;\n  position: absolute;\n  margin-top: -15px;\n  margin-left: -15px;\n  background-color: #2c2d3a;\n"]))),
                an = j.e.div(At || (At = Object(o.a)(["\n  color: #2d74c4;\n  border-top: 1px solid #2c2d3a;\n  font-weight: 900;\n  font-size: 27px;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),
                rn = Object(j.e)(S.A)(Ft || (Ft = Object(o.a)(["\n  font-size: 14px;\n  text-align: center;\n  padding-bottom: 8px;\n  font-weight: bold;\n"]))),
                sn = Object(j.e)(S.A)(Tt || (Tt = Object(o.a)(["\n  font-size: 14.5px;\n  text-align: center;\n  width: 180px;\n"]))),
                on = j.e.div(Lt || (Lt = Object(o.a)(["\n  margin-top: 4px;\n  text-align: center;\n"]))),
                ln = function(e) {
                    var t = e.number,
                        n = e.desc,
                        c = e.percent,
                        i = e.type,
                        a = e.buttonText,
                        r = e.onClick;
                    return Object(E.jsxs)(nn, {
                        children: [Object(E.jsx)(cn, {
                            color: "white",
                            children: t
                        }), Object(E.jsx)(S.m, {
                            p: "15px 10px 10px",
                            mt: "5px",
                            justifyContent: "center",
                            style: {
                                height: "55px"
                            },
                            alignItems: "center",
                            children: Object(E.jsx)(sn, {
                                bold: !0,
                                color: "textSubtle",
                                children: n
                            })
                        }), Object(E.jsxs)(an, {
                            children: [c, "%"]
                        }), Object(E.jsx)(rn, {
                            color: "textSubtle",
                            children: i
                        }), Object(E.jsx)(on, {
                            children: Object(E.jsxs)(S.d, {
                                onClick: r,
                                style: {
                                    padding: "10px 15px",
                                    height: "auto",
                                    fontSize: "15px",
                                    borderRadius: "8px",
                                    backgroundColor: "#2d74c4"
                                },
                                children: [" ", a, " "]
                            })
                        })]
                    })
                };
            n(597), n(1313);
            m.a.use([u.a, g.a]);
            var dn = j.e.div(Nt || (Nt = Object(o.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  // margin-bottom: 32px;\n  padding-top: 40px;\n  text-align: center;\n\n  ", " {\n    height: 40px;\n    padding-top: 0;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                jn = Object(j.e)(b.a)(Pt || (Pt = Object(o.a)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 30px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                xn = j.e.div(zt || (zt = Object(o.a)(["\n  display: flex;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & .swiper-button-prev:after,\n  & .swiper-button-next:after {\n    opacity: 0.5 !important;\n    font-size: 20px !important;\n  }\n"]))),
                bn = j.e.div(Dt || (Dt = Object(o.a)(["\n  width: 100%;\n  marginright: 20px;\n  marginbottom: 20px;\n\n  & .swiper-button-prev:after,\n  & .swiper-button-next:after {\n    opacity: 0.5 !important;\n    font-size: 20px !important;\n  }\n"]))),
                hn = j.e.div(Rt || (Rt = Object(o.a)(["\n  width: 48% !important;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  background: #2c2d3a;\n  padding: 20px;\n  border-radius: 10px;\n"]))),
                pn = j.e.div(It || (It = Object(o.a)(["\n  width: 100%;\n  margin: auto;\n  border-radius: 10px;\n  padding: 24px;\n  background-color: #2c2d3a;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  & .swiper-button-prev:after,\n  & .swiper-button-next:after {\n    opacity: 0.5 !important;\n    font-size: 20px !important;\n  }\n"]))),
                On = function() {
                    var e = Object(I.a)("(max-width: 1200px)"),
                        t = Object(x.f)(),
                        n = (Object(h.a)(), Object(x.g)(), Object(b.m)()),
                        c = (n.isXl, n.isLg, n.isMd),
                        i = n.isSm,
                        a = n.isXs,
                        r = Object(_.j)(),
                        o = Object(_.j)(!0),
                        d = Object(_.s)(),
                        j = Object(_.r)(),
                        m = Object(l.useMemo)((function() {
                            var e = r.filter((function(e) {
                                return e.active
                            })).map((function(e) {
                                var t = Object(me.b)(e, {
                                        cakePrice: d,
                                        bnbPrice: j
                                    }),
                                    n = t.apy1,
                                    c = t.apy2;
                                return Number(n.plus(c).times(100).toFixed(0))
                            }));
                            return Math.max.apply(Math, Object(s.a)(e))
                        }), [r, d, j]),
                        u = Object(l.useMemo)((function() {
                            var e = o.filter((function(e) {
                                return e.active
                            })).map((function(e) {
                                var t = Object(me.d)(e, {
                                        cakePrice: d,
                                        bnbPrice: j
                                    }),
                                    n = t.apy1;
                                t.apy2;
                                return Number(n.times(100).toFixed(0))
                            }));
                            return Math.max.apply(Math, Object(s.a)(e))
                        }), [o, d, j]);
                    return Object(E.jsxs)(y.a, {
                        children: [Object(E.jsx)(dn, {
                            children: Object(E.jsx)(b.l, {
                                fontSize: "16px",
                                children: "THE FIRST AMM AND INNOVATIVE YIELD FARM WITH DUAL-REWARDS FARMING & STAKING PROTOCOL"
                            })
                        }), c || i || a ? Object(E.jsxs)(E.Fragment, {
                            children: [Object(E.jsx)(X, {}), Object(E.jsx)(bn, {
                                children: Object(E.jsxs)(p.a, {
                                    navigation: !0,
                                    loop: !0,
                                    className: "mySwiper",
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: !1
                                    },
                                    children: [Object(E.jsx)(O.a, {
                                        children: Object(E.jsx)("img", {
                                            src: "/crox-nft.png",
                                            alt: "nft",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://docs.croxswap.com/products/nfts", "_blank")
                                            }
                                        })
                                    }), Object(E.jsx)(O.a, {
                                        children: Object(E.jsx)("img", {
                                            src: "/bridge_banner.png",
                                            alt: "bridge",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://bridge.croxswap.com/")
                                            }
                                        })
                                    }), Object(E.jsx)(O.a, {
                                        children: Object(E.jsx)("img", {
                                            src: "/refer_banner.png",
                                            alt: "heco farms",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://heco.croxswap.com/hecofarms")
                                            }
                                        })
                                    })]
                                })
                            })]
                        }) : Object(E.jsxs)(xn, {
                            children: [Object(E.jsx)("div", {
                                style: {
                                    width: "60%",
                                    marginRight: "20px",
                                    height: "100%",
                                    zIndex: 0
                                },
                                children: Object(E.jsxs)(p.a, {
                                    navigation: !0,
                                    loop: !0,
                                    className: "mySwiper",
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: !1
                                    },
                                    style: {
                                        height: "100%"
                                    },
                                    children: [Object(E.jsx)(O.a, {
                                        style: {
                                            height: "258px"
                                        },
                                        children: Object(E.jsx)("img", {
                                            src: "/crox-nft.png",
                                            alt: "nft",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                height: "100%",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://docs.croxswap.com/products/nfts", "_blank")
                                            }
                                        })
                                    }), Object(E.jsx)(O.a, {
                                        style: {
                                            height: "258px"
                                        },
                                        children: Object(E.jsx)("img", {
                                            src: "/bridge_banner.png",
                                            alt: "bridge",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                height: "100%",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://bridge.croxswap.com/")
                                            }
                                        })
                                    }), Object(E.jsx)(O.a, {
                                        style: {
                                            height: "258px"
                                        },
                                        children: Object(E.jsx)("img", {
                                            src: "/refer_banner.png",
                                            alt: "heco farms",
                                            style: {
                                                borderRadius: "20px",
                                                display: "block",
                                                height: "100%",
                                                margin: "auto"
                                            },
                                            onClick: function() {
                                                return window.open("https://heco.croxswap.com/hecofarms")
                                            }
                                        })
                                    })]
                                })
                            }), Object(E.jsx)(X, {})]
                        }), e ? Object(E.jsxs)(pn, {
                            children: [Object(E.jsxs)(b.e, {
                                alignItems: "flex-start",
                                style: {
                                    backgroundColor: "#3b3c4e",
                                    padding: "3px 10px",
                                    borderRadius: "5px"
                                },
                                justifyContent: "space-between",
                                mb: "20px",
                                children: [Object(E.jsx)(f.a, {
                                    icon: "si-glyph:arrow-three-way-1",
                                    style: {
                                        fontSize: "30px"
                                    }
                                }), Object(E.jsx)(b.l, {
                                    ml: "15px",
                                    fontSize: "17px",
                                    color: "white",
                                    bold: !0,
                                    children: "4 WAYS TO MAKE PASSIVE INCOME FROM CROXSWAP"
                                })]
                            }), Object(E.jsxs)(p.a, {
                                navigation: !0,
                                loop: !0,
                                className: "mySwiper",
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: !1
                                },
                                breakpoints: {
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40
                                    },
                                    1e3: {
                                        slidesPerView: 3,
                                        spaceBetween: 50
                                    }
                                },
                                children: [Object(E.jsx)(O.a, {
                                    children: Object(E.jsx)(ln, {
                                        number: "1",
                                        desc: "Provide Liquidity & Earn a Share of",
                                        percent: "0.5",
                                        type: "Trade Fees",
                                        buttonText: "Add Liquidity",
                                        onClick: function() {
                                            return window.open("https://exchange.croxswap.com/#/pool", "_blank")
                                        }
                                    })
                                }), Object(E.jsx)(O.a, {
                                    children: Object(E.jsx)(ln, {
                                        number: "2",
                                        desc: "FARM with LP Tokens & Earn Multiple Tokens. Up To",
                                        percent: m.toLocaleString(),
                                        type: "APR",
                                        buttonText: "FARM & Earn",
                                        onClick: function() {
                                            return t.push("/dualfarms")
                                        }
                                    })
                                }), Object(E.jsx)(O.a, {
                                    children: Object(E.jsx)(ln, {
                                        number: "3",
                                        desc: "STAKE CROX & Earn Other Tokens. Up To",
                                        percent: u.toLocaleString(),
                                        type: "APR",
                                        buttonText: "STAKE CROX",
                                        onClick: function() {
                                            return t.push("/pools/nextgen")
                                        }
                                    })
                                }), Object(E.jsx)(O.a, {
                                    children: Object(E.jsx)(ln, {
                                        number: "4",
                                        desc: "Refer Friends & Earn",
                                        percent: "5",
                                        type: "from their earnings",
                                        buttonText: "Refer Now",
                                        onClick: function() {
                                            return window.open("https://referral.croxswap.com/")
                                        }
                                    })
                                })]
                            })]
                        }) : Object(E.jsxs)(pn, {
                            children: [Object(E.jsxs)(b.e, {
                                alignItems: "center",
                                style: {
                                    backgroundColor: "#3b3c4e",
                                    width: "450px",
                                    padding: "3px 10px",
                                    borderRadius: "5px"
                                },
                                justifyContent: "center",
                                children: [Object(E.jsx)(f.a, {
                                    icon: "si-glyph:arrow-three-way-1"
                                }), Object(E.jsx)(b.l, {
                                    ml: "5px",
                                    fontSize: "17px",
                                    color: "white",
                                    bold: !0,
                                    children: "4 WAYS TO MAKE PASSIVE INCOME FROM CROXSWAP"
                                })]
                            }), Object(E.jsxs)(b.e, {
                                mt: "20px",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                children: [Object(E.jsx)(ln, {
                                    number: "1",
                                    desc: "Provide Liquidity & Earn a Share of",
                                    percent: "0.5",
                                    type: "Trade Fees",
                                    buttonText: "Add Liquidity",
                                    onClick: function() {
                                        return window.open("https://exchange.croxswap.com/#/pool", "_blank")
                                    }
                                }), Object(E.jsx)(ln, {
                                    number: "2",
                                    desc: "FARM with LP Tokens & Earn Multiple Tokens. Up To",
                                    percent: m.toLocaleString(),
                                    type: "APR",
                                    buttonText: "FARM & Earn",
                                    onClick: function() {
                                        return t.push("/dualfarms")
                                    }
                                }), Object(E.jsx)(ln, {
                                    number: "3",
                                    desc: "STAKE CROX & Earn Other Tokens. Up To",
                                    percent: u.toLocaleString(),
                                    type: "APR",
                                    buttonText: "STAKE CROX",
                                    onClick: function() {
                                        return t.push("/pools/nextgen")
                                    }
                                }), Object(E.jsx)(ln, {
                                    number: "4",
                                    desc: "Refer Friends & Earn",
                                    percent: "5",
                                    type: "from their earnings",
                                    buttonText: "Refer Now",
                                    onClick: function() {
                                        return window.open("https://referral.croxswap.com/")
                                    }
                                })]
                            })]
                        }), Object(E.jsx)("div", {
                            children: c || i || a ? Object(E.jsxs)(E.Fragment, {
                                children: [Object(E.jsx)("div", {
                                    style: {
                                        marginBottom: "10px"
                                    },
                                    children: Object(E.jsx)(Bt, {})
                                }), Object(E.jsx)(Qt, {}), Object(E.jsx)(tn, {})]
                            }) : Object(E.jsxs)(E.Fragment, {
                                children: [Object(E.jsxs)(jn, {
                                    children: [Object(E.jsx)("div", {
                                        style: {
                                            width: "50%"
                                        },
                                        children: Object(E.jsx)(Bt, {})
                                    }), Object(E.jsx)(hn, {
                                        children: Object(E.jsx)(Qt, {})
                                    })]
                                }), Object(E.jsx)(tn, {})]
                            })
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=15.b1bb373e.chunk.js.map