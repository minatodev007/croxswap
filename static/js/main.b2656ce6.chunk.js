(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [6], {
        102: function(e, t, n) {
            "use strict";
            n.d(t, "n", (function() {
                return p
            })), n.d(t, "m", (function() {
                return l
            })), n.d(t, "k", (function() {
                return b
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "x", (function() {
                return f
            })), n.d(t, "v", (function() {
                return x
            })), n.d(t, "w", (function() {
                return k
            })), n.d(t, "g", (function() {
                return w
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "f", (function() {
                return T
            })), n.d(t, "q", (function() {
                return j
            })), n.d(t, "o", (function() {
                return O
            })), n.d(t, "p", (function() {
                return A
            })), n.d(t, "j", (function() {
                return v
            })), n.d(t, "h", (function() {
                return B
            })), n.d(t, "i", (function() {
                return S
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "a", (function() {
                return D
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "c", (function() {
                return F
            })), n.d(t, "r", (function() {
                return E
            })), n.d(t, "s", (function() {
                return P
            })), n.d(t, "u", (function() {
                return _
            })), n.d(t, "t", (function() {
                return N
            })), n.d(t, "y", (function() {
                return R
            }));
            var a = n(3),
                r = n.n(a),
                s = n(0),
                i = n(47),
                o = (n(123), n(392)),
                c = n(122),
                d = n(8),
                u = new r.a(0),
                p = function() {
                    var e = Object(i.b)();
                    Object(s.useEffect)((function() {
                        e(Object(c.h)()), e(Object(c.l)()), e(Object(c.c)()), e(Object(c.i)()), e(Object(c.b)()), e(Object(c.f)())
                    }), [e])
                },
                l = function() {
                    return Object(i.c)((function(e) {
                        return e.farms.data
                    }))
                },
                b = function(e) {
                    return Object(i.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                y = function(e) {
                    var t = b(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? new r.a(t.userData.earnings) : new r.a(0),
                        nextHarvestUntil: t.userData ? Number(t.userData.nextHarvestUntil) : 0
                    }
                },
                f = function() {
                    return Object(i.c)((function(e) {
                        return e.rastaFarms.data
                    }))
                },
                m = function(e) {
                    return Object(i.c)((function(t) {
                        return t.rastaFarms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                x = function(e) {
                    return Object(i.c)((function(t) {
                        return t.rastaFarms.data.find((function(t) {
                            return t.lpSymbol === e
                        }))
                    }))
                },
                k = function(e) {
                    var t = m(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? new r.a(t.userData.earnings) : new r.a(0)
                    }
                },
                w = function() {
                    return Object(i.c)((function(e) {
                        return e.croxmasPools.data
                    }))
                },
                h = function(e) {
                    return Object(i.c)((function(t) {
                        return t.croxmasPools.data.find((function(t) {
                            return JSON.stringify(t.poolAddress) === JSON.stringify(e)
                        }))
                    }))
                },
                T = function(e) {
                    var t = function(e) {
                        return Object(i.c)((function(t) {
                            return t.croxmasPools.data.find((function(t) {
                                return JSON.stringify(t.poolAddress) === JSON.stringify(e)
                            }))
                        }))
                    }(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? t.userData.earnings : [0, 0],
                        nextHarvestUntil: t.userData ? Number(t.userData.nextHarvestUntil) : 0
                    }
                },
                j = function() {
                    return Object(i.c)((function(e) {
                        return e.grandPools.data
                    }))
                },
                O = function(e) {
                    return Object(i.c)((function(t) {
                        return t.grandPools.data.find((function(t) {
                            return JSON.stringify(t.poolAddress) === JSON.stringify(e)
                        }))
                    }))
                },
                A = function(e) {
                    var t = function(e) {
                        return Object(i.c)((function(t) {
                            return t.grandPools.data.find((function(t) {
                                return JSON.stringify(t.poolAddress) === JSON.stringify(e)
                            }))
                        }))
                    }(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? t.userData.earnings : [0, 0],
                        nextHarvestUntil: t.userData ? Number(t.userData.nextHarvestUntil) : 0
                    }
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = Object(i.c)((function(e) {
                            return e.dualFarms.data
                        }));
                    return t = t.filter((function(t) {
                        return e ? !t.isDualFarm : t.isDualFarm
                    }))
                },
                B = function(e) {
                    return Object(i.c)((function(t) {
                        return t.dualFarms.data.find((function(t) {
                            return JSON.stringify(t.poolAddress) === JSON.stringify(e)
                        }))
                    }))
                },
                S = function(e) {
                    var t = B(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? t.userData.earnings : [0, 0],
                        nextHarvestUntil: t.userData ? Number(t.userData.nextHarvestUntil) : 0
                    }
                },
                g = function() {
                    return Object(i.c)((function(e) {
                        return e.croxPools.data
                    }))
                },
                D = function(e) {
                    return Object(i.c)((function(t) {
                        return t.croxPools.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                C = function(e) {
                    var t = function(e) {
                        return Object(i.c)((function(t) {
                            return t.croxPools.data.find((function(t) {
                                return t.lpSymbol === e
                            }))
                        }))
                    }(e);
                    return {
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0)
                    }
                },
                F = function(e) {
                    var t = D(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? new r.a(t.userData.earnings) : new r.a(0),
                        nextHarvestUntil: t.userData ? Number(t.userData.nextHarvestUntil) : 0
                    }
                },
                E = function() {
                    var e = b(4);
                    return e && e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : u
                },
                P = function() {
                    var e = E(),
                        t = function() {
                            var e = b(0);
                            return e && e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : u
                        }();
                    return e.times(t)
                },
                _ = function() {
                    var e = E(),
                        t = m(1);
                    return t && t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : u
                },
                N = function() {
                    var e = E(),
                        t = m(7);
                    return t && t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : u
                },
                R = function() {
                    for (var e = l(), t = g(), n = v(), a = v(!0), s = w(), i = j(), c = f(), u = E(), p = P(), b = N(), y = _(), m = Object(o.a)(), x = new r.a(0), k = 0; k < e.length; k++) {
                        var h = e[k];
                        if (h.lpTotalInQuoteToken) {
                            var T = void 0;
                            T = h.quoteTokenSymbol === d.a.BNB ? u.times(h.lpTotalInQuoteToken) : h.quoteTokenSymbol === d.a.CAKE ? p.times(h.lpTotalInQuoteToken) : h.lpTotalInQuoteToken, x = x.plus(T)
                        }
                    }
                    for (var O = 0; O < t.length; O++) {
                        var A = t[O];
                        A.lpTotalInQuoteToken && (x = x.plus(A.lpTotalInQuoteToken))
                    }
                    for (var B = 0; B < n.length; B++) {
                        var S = n[B];
                        if (S.lpTotalInQuoteToken) {
                            var D = void 0;
                            D = S.quoteTokenSymbol === d.a.BNB ? u.times(S.lpTotalInQuoteToken) : S.quoteTokenSymbol === d.a.CAKE ? p.times(S.lpTotalInQuoteToken) : S.lpTotalInQuoteToken, x = x.plus(D)
                        }
                    }
                    for (var C = 0; C < a.length; C++) {
                        var F = a[C];
                        if (F.lpTotalInQuoteToken) {
                            var R = p.times(F.lpBalance);
                            "CROX" !== F.lpSymbol && (R = new r.a(F.tokenPrice).times(F.lpBalance)), x = x.plus(R)
                        }
                    }
                    for (var M = 0; M < s.length; M++) {
                        var L = s[M];
                        if (L.lpTotalInQuoteToken) {
                            var I = p.times(L.lpBalance);
                            x = x.plus(I)
                        }
                    }
                    for (var q = 0; q < i.length; q++) {
                        var U = i[q];
                        if (U.lpTotalInQuoteToken) {
                            var H = p.times(U.lpBalance);
                            x = x.plus(H)
                        }
                    }
                    for (var z = 0; z < c.length; z++) {
                        var V = c[z],
                            X = new r.a(0);
                        if (V && V.lpSymbol && !V.lpSymbol.includes("RLP") && !V.lpSymbol.includes("CAKE LP")) {
                            var W = new r.a(0);
                            "MRASTA" === V.tokenSymbol ? W = new r.a(m) : "CNR" === V.lpSymbol ? W = new r.a(.08) : "BNB" === V.lpSymbol ? W = new r.a(u) : "RASTA" === V.lpSymbol && (W = new r.a(y)), X = new r.a(V.singleTokenAmount).times(W), x = x.plus(new r.a(X))
                        } else V.quoteTokenSymbol === d.a.BNB && (X = u.times(V.lpTotalInQuoteToken)), V.quoteTokenSymbol === d.a.RASTA && (X = y.times(V.lpTotalInQuoteToken)), V.quoteTokenSymbol === d.a.ETH && (X = b.times(V.lpTotalInQuoteToken)), x = x.plus(new r.a(X))
                    }
                    return x
                }
        },
        1043: function(e, t) {},
        1045: function(e, t) {},
        1076: function(e, t, n) {},
        1093: function(e, t, n) {},
        11: function(e, t, n) {
            "use strict";
            t.a = {
                cake: {
                    56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
                    97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C"
                },
                masterChef: {
                    56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6",
                    97: "0xADE2948B4405289e85e697760BB42EED39A5733a"
                },
                rastaMasterChef: {
                    97: "0x35b1EF3FF9763F72C11e9f08B471D0b6b5A7515D",
                    56: "0xec89Be665c851FfBAe2a8Ded03080F3E64116539"
                },
                masterChefV1: {
                    56: "0xEAf239a85b2C24229042a0840771A5620a36D2B3",
                    97: "0xADE2948B4405289e85e697760BB42EED39A5733a"
                },
                wbnb: {
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C"
                },
                lottery: {
                    56: "",
                    97: ""
                },
                lotteryNFT: {
                    56: "",
                    97: ""
                },
                mulltiCall: {
                    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                    97: "0x35be5ca7917442ed5d2d4cc56ec9988dd158513e"
                },
                busd: {
                    56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C"
                },
                usdt: {
                    56: "0x55d398326f99059fF775485246999027B3197955",
                    97: ""
                },
                usdc: {
                    56: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                    97: ""
                },
                ada: {
                    56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
                    97: ""
                },
                eth: {
                    56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
                    97: ""
                },
                rasta: {
                    97: "0xeE14CBfAaD3BADa6fc9886bf2BA11D1c5F373DF2",
                    56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                }
            }
        },
        110: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract RASTAToken","name":"_rasta","type":"address"},{"internalType":"contract Zion","name":"_zion","type":"address"},{"internalType":"address","name":"_buoyancyAddr","type":"address"},{"internalType":"address","name":"_trustAddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_rastaPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rastaPerBlock","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buoyancyAddr","type":"address"}],"name":"buoyancy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buoyancyAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRasta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRastaPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rasta","outputs":[{"internalType":"contract RASTAToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rastaPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rastaPerBlock","type":"uint256"}],"name":"setRastaPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustAddr","type":"address"}],"name":"trust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zion","outputs":[{"internalType":"contract Zion","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        1103: function(e, t, n) {},
        1104: function(e, t, n) {},
        1107: function(e, t, n) {},
        1130: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r, s, i, o, c, d, u, p, l, b, y, f, m, x, k, w, h, T, j, O, A, v = n(0),
                B = n.n(v),
                S = n(108),
                g = n.n(S),
                D = n(83),
                C = n(54),
                F = n(115),
                E = n(9),
                P = n(3),
                _ = n.n(P),
                N = n(102),
                R = n(584),
                M = n.n(R),
                L = n(588),
                I = n.n(L),
                q = n(33),
                U = n(6),
                H = Object(U.c)(a || (a = Object(q.a)(["\n  * {\n    // font-family: 'Kanit', sans-serif;\n    font-family: 'Baloo 2', cursive;\n  }\n  body {\n    background-color: #1a1b23;\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]))),
                z = n(375),
                V = n(2),
                X = Object(U.e)(z.a)(r || (r = Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                W = function() {
                    return Object(V.jsx)(X, {
                        children: Object(V.jsx)(E.y, {})
                    })
                },
                J = n(4),
                G = n.n(J),
                K = n(10),
                Q = n(13),
                Y = n(192),
                Z = n(374),
                $ = (n(531), n(22), U.e.div(s || (s = Object(q.a)(["\n  padding: 24px;\n  text-align: center;\n"])))),
                ee = U.e.div(i || (i = Object(q.a)(["\n  text-align: center;\n"]))),
                te = function(e) {
                    var t = e.onDismiss,
                        n = Object(Z.a)();
                    return Object(V.jsxs)(Y.i, {
                        title: n(999, "Congratulations!"),
                        onDismiss: t,
                        children: [Object(V.jsxs)($, {
                            children: [Object(V.jsx)("img", {
                                src: "/images/present.svg",
                                alt: "You won present",
                                style: {
                                    height: "64px",
                                    marginBottom: "24px"
                                }
                            }), Object(V.jsx)(Y.f, {
                                size: "lg",
                                color: "secondary",
                                children: n(999, "You won an NFT!")
                            })]
                        }), Object(V.jsx)(ee, {
                            children: Object(V.jsx)(Y.b, {
                                as: "a",
                                href: "/nft",
                                children: n(999, "Go to claim NFT")
                            })
                        })]
                    })
                },
                ne = function() {
                    var e = Object(F.m)().account,
                        t = Object(Y.n)(Object(V.jsx)(te, {})),
                        n = Object(Q.a)(t, 1)[0],
                        a = Object(v.useRef)((function() {
                            return n()
                        }));
                    return Object(v.useEffect)((function() {
                        e && document.location.href.includes("/nft")
                    }), [e, a]), Object(V.jsx)("div", {})
                },
                ae = n(77),
                re = n.n(ae),
                se = (n(1076), n(14)),
                ie = n(256),
                oe = n(360),
                ce = n.n(oe),
                de = n(366),
                ue = n.n(de),
                pe = n(367),
                le = n.n(pe),
                be = n(587),
                ye = n.n(be),
                fe = n(365),
                me = n.n(fe),
                xe = n(213),
                ke = n.n(xe),
                we = n(368),
                he = n.n(we),
                Te = n(369),
                je = n.n(Te),
                Oe = n(585),
                Ae = function(e) {
                    return Object(V.jsxs)("svg", {
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.009 512.009",
                        children: [Object(V.jsx)("g", {
                            children: Object(V.jsx)("g", {
                                children: Object(V.jsxs)("g", {
                                    children: [Object(V.jsx)("path", {
                                        d: "M501.342,426.671h-10.667v-84.843l11.115-0.491c5.888-0.256,10.453-5.227,10.197-11.115 c-0.256-5.888-4.971-10.219-11.093-10.219l-10.219,0.448V138.671c0-5.888-4.779-10.667-10.667-10.667 c-5.888,0-10.667,4.779-10.667,10.667v10.667h-42.667v-10.667c0-5.888-4.779-10.667-10.667-10.667 c-5.888,0-10.667,4.779-10.667,10.667v32c-17.003,34.304-36.971,41.451-69.717,42.667c-5.888,0.235-10.475,5.205-10.261,11.072 c0.192,5.739,4.928,10.261,10.645,10.261h0.405c27.947-1.045,50.432-6.72,68.928-26.304v31.552 c-20.053,12.864-40.917,18.752-62.144,16.725c-64.683-6.592-130.688-84.992-172.523-204.693v-41.28 c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667v32h-64v-32c0-5.888-4.779-10.667-10.667-10.667 S64.009,4.783,64.009,10.671v42.304c0,0,0,0,0,0.021v285.995l-53.781,2.347c-5.888,0.256-10.453,5.248-10.219,11.115 c0.277,5.739,4.992,10.219,10.667,10.219h0.469l52.864-2.304v130.304H53.342c-5.888,0-10.667,4.779-10.667,10.667 c0,5.888,4.779,10.667,10.667,10.667h128c5.888,0,10.667-4.779,10.667-10.667c0-5.888-4.779-10.667-10.667-10.667h-10.667 V355.738l234.667-10.197v81.131h-10.667c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h106.667 c5.888,0,10.667-4.779,10.667-10.667C512.009,431.45,507.23,426.671,501.342,426.671z M149.342,490.671h-64v-42.667h64V490.671z M149.342,426.671h-64V359.45l64-2.773V426.671z M149.342,335.279l-64,2.773V105.263c16.853,35.285,38.101,70.293,64,96.96 V335.279z M149.342,170.287c-24.491-30.869-44.117-69.952-58.965-106.283h58.965V170.287z M405.342,324.164l-234.667,10.197 V221.316c14.741,11.264,30.72,19.797,48.064,24.149c0.875,0.213,1.728,0.32,2.603,0.32c4.779,0,9.131-3.243,10.347-8.107 c1.451-5.696-2.027-11.499-7.744-12.928c-19.499-4.885-37.227-16.107-53.269-31.189v-83.925 c44.821,99.925,106.453,161.749,170.368,168.235c3.563,0.341,7.253,0.555,11.115,0.555c15.723,0,33.877-3.477,53.184-13.44 V324.164z M426.675,173.828c0-0.021,0-0.064,0-0.085v-3.072h41.6c-13.184,21.525-27.093,39.253-41.6,52.779V173.828z M469.342,426.671h-42.667v-21.333h42.667V426.671z M469.342,384.004h-42.667v-39.403l42.667-1.856V384.004z M469.342,321.37 l-42.667,1.856v-71.744c13.995-10.56,28.352-24.917,42.667-44.096V321.37z",
                                        fill: "white"
                                    }), Object(V.jsx)("path", {
                                        d: "M394.675,469.338c-5.888,0-10.667,4.779-10.667,10.667c0,4.352-8.32,10.667-21.333,10.667s-21.333-6.315-21.333-10.667 c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667c0,4.352-8.32,10.667-21.333,10.667 c-13.013,0-21.333-6.315-21.333-10.667c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667 c0,17.941,18.731,32,42.667,32c12.949,0,24.235-4.203,32-10.816c7.744,6.613,19.051,10.816,32,10.816 c23.936,0,42.667-14.059,42.667-32C405.342,474.116,400.563,469.338,394.675,469.338z",
                                        fill: "white"
                                    })]
                                })
                            })
                        }), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {})]
                    })
                },
                ve = function(e) {
                    return Object(V.jsxs)("svg", {
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.009 512.009",
                        children: [Object(V.jsx)("g", {
                            children: Object(V.jsx)("g", {
                                children: Object(V.jsxs)("g", {
                                    children: [Object(V.jsx)("path", {
                                        d: "M501.342,426.671h-10.667v-84.843l11.115-0.491c5.888-0.256,10.453-5.227,10.197-11.115 c-0.256-5.888-4.971-10.219-11.093-10.219l-10.219,0.448V138.671c0-5.888-4.779-10.667-10.667-10.667 c-5.888,0-10.667,4.779-10.667,10.667v10.667h-42.667v-10.667c0-5.888-4.779-10.667-10.667-10.667 c-5.888,0-10.667,4.779-10.667,10.667v32c-17.003,34.304-36.971,41.451-69.717,42.667c-5.888,0.235-10.475,5.205-10.261,11.072 c0.192,5.739,4.928,10.261,10.645,10.261h0.405c27.947-1.045,50.432-6.72,68.928-26.304v31.552 c-20.053,12.864-40.917,18.752-62.144,16.725c-64.683-6.592-130.688-84.992-172.523-204.693v-41.28 c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667v32h-64v-32c0-5.888-4.779-10.667-10.667-10.667 S64.009,4.783,64.009,10.671v42.304c0,0,0,0,0,0.021v285.995l-53.781,2.347c-5.888,0.256-10.453,5.248-10.219,11.115 c0.277,5.739,4.992,10.219,10.667,10.219h0.469l52.864-2.304v130.304H53.342c-5.888,0-10.667,4.779-10.667,10.667 c0,5.888,4.779,10.667,10.667,10.667h128c5.888,0,10.667-4.779,10.667-10.667c0-5.888-4.779-10.667-10.667-10.667h-10.667 V355.738l234.667-10.197v81.131h-10.667c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h106.667 c5.888,0,10.667-4.779,10.667-10.667C512.009,431.45,507.23,426.671,501.342,426.671z M149.342,490.671h-64v-42.667h64V490.671z M149.342,426.671h-64V359.45l64-2.773V426.671z M149.342,335.279l-64,2.773V105.263c16.853,35.285,38.101,70.293,64,96.96 V335.279z M149.342,170.287c-24.491-30.869-44.117-69.952-58.965-106.283h58.965V170.287z M405.342,324.164l-234.667,10.197 V221.316c14.741,11.264,30.72,19.797,48.064,24.149c0.875,0.213,1.728,0.32,2.603,0.32c4.779,0,9.131-3.243,10.347-8.107 c1.451-5.696-2.027-11.499-7.744-12.928c-19.499-4.885-37.227-16.107-53.269-31.189v-83.925 c44.821,99.925,106.453,161.749,170.368,168.235c3.563,0.341,7.253,0.555,11.115,0.555c15.723,0,33.877-3.477,53.184-13.44 V324.164z M426.675,173.828c0-0.021,0-0.064,0-0.085v-3.072h41.6c-13.184,21.525-27.093,39.253-41.6,52.779V173.828z M469.342,426.671h-42.667v-21.333h42.667V426.671z M469.342,384.004h-42.667v-39.403l42.667-1.856V384.004z M469.342,321.37 l-42.667,1.856v-71.744c13.995-10.56,28.352-24.917,42.667-44.096V321.37z",
                                        fill: "#2d74c4c7"
                                    }), Object(V.jsx)("path", {
                                        d: "M394.675,469.338c-5.888,0-10.667,4.779-10.667,10.667c0,4.352-8.32,10.667-21.333,10.667s-21.333-6.315-21.333-10.667 c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667c0,4.352-8.32,10.667-21.333,10.667 c-13.013,0-21.333-6.315-21.333-10.667c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667 c0,17.941,18.731,32,42.667,32c12.949,0,24.235-4.203,32-10.816c7.744,6.613,19.051,10.816,32,10.816 c23.936,0,42.667-14.059,42.667-32C405.342,474.116,400.563,469.338,394.675,469.338z",
                                        fill: "#2d74c4c7"
                                    })]
                                })
                            })
                        }), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {}), Object(V.jsx)("g", {})]
                    })
                },
                Be = (n(1093), Object(U.e)(ae.Button)(o || (o = Object(q.a)(["\n  align-items: center;\n  display: flex !important;\n"])))),
                Se = Object(U.e)(ae.Button)(c || (c = Object(q.a)(["\ntext-align: left;\n  align-items: center;\n  display: flex !important;\n  color: #d1d1d1;\n  padding: 10px 12px;\n  width: 185px;\n  margin-left: 25px;\n"]))),
                ge = U.e.div(d || (d = Object(q.a)(["\n  padding: 3px 0;\n  border-top: 1px solid #8080801c;\n  border-bottom: 1px solid #8080801c;\n"]))),
                De = function(e) {
                    var t = Object(N.s)(),
                        n = Object(C.f)(),
                        a = Object(ie.a)(),
                        r = a.isDark,
                        s = a.toggleTheme,
                        i = Object(v.useState)(!1),
                        o = Object(Q.a)(i, 2),
                        c = o[0],
                        d = o[1],
                        u = Object(v.useState)(""),
                        p = Object(Q.a)(u, 2),
                        l = (p[0], p[1], Object(v.useState)(window.localStorage.getItem("target_id"))),
                        b = Object(Q.a)(l, 2),
                        y = b[0],
                        f = b[1],
                        m = "menu_item",
                        x = r ? "menu_item menu_active" : "menu_item menu_active_white",
                        k = function(e) {
                            switch (d(!1), window.localStorage.setItem("target_id", e.target.id), f(window.localStorage.getItem("target_id")), window.localStorage.getItem("target_id")) {
                                case "ico":
                                    n.push("/ico");
                                    break;
                                case "home":
                                    n.push("/");
                                    break;
                                case "farms":
                                    n.push("/farms");
                                    break;
                                case "pools":
                                    n.push("/pools/nextgen");
                                    break;
                                case "croxmas":
                                    n.push("/croxmas")
                            }
                        };
                    return Object(v.useEffect)((function() {
                        r ? (document.getElementById("crox_price").parentElement.parentElement.style.backgroundColor = "black", document.getElementById("crox_price").firstElementChild.classList.remove("white_mode_price")) : (document.getElementById("crox_price").parentElement.parentElement.style.backgroundColor = "#defaff", document.getElementById("crox_price").firstElementChild.classList.add("white_mode_price"))
                    })), Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)(Oe.slide, Object(se.a)(Object(se.a)({
                            id: "menu_body"
                        }, e), {}, {
                            isOpen: c,
                            onStateChange: function(e) {
                                return function(e) {
                                    d(e.isOpen)
                                }(e)
                            },
                            children: [Object(V.jsx)(ae.Button, {
                                className: "closeButton",
                                onClick: function() {
                                    return d(!1)
                                },
                                children: "\u2716"
                            }), Object(V.jsx)(E.r, {
                                href: "https://coinmarketcap.com/currencies/croxswap",
                                external: !0,
                                style: {
                                    textDecoration: "none"
                                },
                                children: Object(V.jsx)("div", {
                                    className: "menu_croxprice",
                                    id: "crox_price",
                                    children: Object(V.jsxs)(E.A, {
                                        className: "croxprice",
                                        color: "white",
                                        children: ["$CROX: $", t.toFixed(3)]
                                    })
                                })
                            }), Object(V.jsxs)(E.m, {
                                flexDirection: "column",
                                style: {
                                    position: "relative",
                                    height: "450px",
                                    overflow: "scroll",
                                    overflowX: "hidden"
                                },
                                children: [Object(V.jsxs)(Be, {
                                    className: "home" === y ? x : m,
                                    id: "home",
                                    onClick: function(e) {
                                        return k(e)
                                    },
                                    children: [r ? Object(V.jsx)(ce.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "white"
                                        },
                                        id: "home",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }) : Object(V.jsx)(ce.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "#2d74c4c7"
                                        },
                                        id: "home",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }), Object(V.jsx)(E.A, {
                                        fontSize: "18px",
                                        ml: "7px",
                                        id: "home",
                                        onClick: function(e) {
                                            return k(e)
                                        },
                                        children: "Home"
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "trade" === y ? x : m,
                                    id: "trade",
                                    onClick: function() {
                                        "none" === document.getElementById("trade_group").style.display ? document.getElementById("trade_group").style.display = "block" : document.getElementById("trade_group").style.display = "none"
                                    },
                                    children: [r ? Object(V.jsx)(me.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "white"
                                        },
                                        id: "trade"
                                    }) : Object(V.jsx)(me.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "#2d74c4c7"
                                        },
                                        id: "trade"
                                    }), Object(V.jsx)(E.A, {
                                        fontSize: "18px",
                                        ml: "7px",
                                        id: "trade",
                                        mr: "110px",
                                        children: "Trade"
                                    }), r ? Object(V.jsx)(ke.a, {
                                        id: "trade",
                                        sx: {
                                            color: "white"
                                        }
                                    }) : Object(V.jsx)(ke.a, {
                                        sx: {
                                            color: "#2d74c4c7"
                                        },
                                        id: "trade"
                                    })]
                                }), Object(V.jsxs)(ge, {
                                    id: "trade_group",
                                    style: {
                                        display: "none"
                                    },
                                    children: [Object(V.jsx)(Se, {
                                        children: Object(V.jsx)("a", {
                                            style: r ? {
                                                fontSize: "16px",
                                                width: "180px"
                                            } : {
                                                fontSize: "16px",
                                                width: "180px",
                                                color: "#2d74c4c7"
                                            },
                                            href: "https://exchange.croxswap.com/#/swap",
                                            children: "Swap"
                                        })
                                    }), Object(V.jsx)(Se, {
                                        children: Object(V.jsx)("a", {
                                            style: r ? {
                                                fontSize: "16px",
                                                width: "180px"
                                            } : {
                                                fontSize: "16px",
                                                width: "180px",
                                                color: "#2d74c4c7"
                                            },
                                            href: "https://exchange.croxswap.com/#/pool",
                                            children: "Liquidity"
                                        })
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "farms" === y ? x : m,
                                    id: "farms",
                                    onClick: function(e) {
                                        return k(e)
                                    },
                                    children: [r ? Object(V.jsx)(ue.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "white"
                                        },
                                        id: "farms",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }) : Object(V.jsx)(ue.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "#2d74c4c7"
                                        },
                                        id: "farms",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }), Object(V.jsx)(E.A, {
                                        fontSize: "18px",
                                        ml: "7px",
                                        id: "farms",
                                        onClick: function(e) {
                                            return k(e)
                                        },
                                        children: "Farms"
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "pools" === y ? x : m,
                                    id: "pools",
                                    onClick: function(e) {
                                        return k(e)
                                    },
                                    children: [r ? Object(V.jsx)(le.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "white"
                                        },
                                        id: "pools",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }) : Object(V.jsx)(le.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "#2d74c4c7"
                                        },
                                        id: "pools",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }), Object(V.jsx)(E.A, {
                                        fontSize: "18px",
                                        ml: "7px",
                                        id: "pools",
                                        onClick: function(e) {
                                            return k(e)
                                        },
                                        children: "Pools"
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "bridge" === y ? x : m,
                                    id: "bridge",
                                    onClick: function(e) {
                                        "none" === document.getElementById("bridge_iswap").style.display ? (document.getElementById("bridge_iswap").style.display = "block", document.getElementById("trade_group").style.display = "none") : document.getElementById("bridge_iswap").style.display = "none"
                                    },
                                    children: [Object(V.jsx)("div", {
                                        style: {
                                            width: "18px",
                                            height: "18px",
                                            marginTop: "-7px"
                                        },
                                        children: r ? Object(V.jsx)(Ae, {}) : Object(V.jsx)(ve, {})
                                    }), Object(V.jsx)(E.A, {
                                        fontSize: "18px",
                                        ml: "7px",
                                        id: "trade",
                                        mr: "96px",
                                        children: "Bridge"
                                    }), r ? Object(V.jsx)(ke.a, {
                                        id: "trade",
                                        sx: {
                                            color: "white"
                                        }
                                    }) : Object(V.jsx)(ke.a, {
                                        sx: {
                                            color: "#2d74c4c7"
                                        },
                                        id: "trade"
                                    })]
                                }), Object(V.jsxs)(ge, {
                                    id: "bridge_iswap",
                                    style: {
                                        display: "none"
                                    },
                                    children: [Object(V.jsx)(Se, {
                                        children: Object(V.jsx)("a", {
                                            style: r ? {
                                                fontSize: "16px",
                                                width: "180px"
                                            } : {
                                                fontSize: "16px",
                                                width: "180px",
                                                color: "#2d74c4c7"
                                            },
                                            href: "https://www.iswap.com/en-us/?type=bridge",
                                            children: "Heco Bridge (iSwap)"
                                        })
                                    }), Object(V.jsx)(Se, {
                                        children: Object(V.jsx)("a", {
                                            style: r ? {
                                                fontSize: "16px",
                                                width: "180px"
                                            } : {
                                                fontSize: "16px",
                                                width: "180px",
                                                color: "#2d74c4c7"
                                            },
                                            href: "https://bridge.croxswap.com",
                                            children: "CROX Bridge (soon)"
                                        })
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "referral" === y ? x : m,
                                    id: "referral",
                                    onClick: function(e) {
                                        return k(e)
                                    },
                                    children: [r ? Object(V.jsx)(he.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "white"
                                        },
                                        id: "pools",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }) : Object(V.jsx)(he.a, {
                                        sx: {
                                            fontSize: "18px",
                                            color: "#2d74c4c7"
                                        },
                                        id: "pools",
                                        onClick: function(e) {
                                            return k(e)
                                        }
                                    }), r ? Object(V.jsx)("a", {
                                        style: {
                                            fontSize: "18px",
                                            width: "160px",
                                            marginLeft: "7px",
                                            color: "#EAE2FC"
                                        },
                                        href: "https://referral.croxswap.com",
                                        children: "Referral"
                                    }) : Object(V.jsx)("a", {
                                        style: {
                                            fontSize: "18px",
                                            width: "160px",
                                            marginLeft: "7px",
                                            color: "#2B2A29"
                                        },
                                        href: "https://bridge.croxswap.com",
                                        children: "Referral"
                                    })]
                                }), Object(V.jsxs)(Be, {
                                    className: "ico" === y ? x : m,
                                    id: "ico",
                                    onClick: function(e) {
                                        return k(e)
                                    },
                                    children: [Object(V.jsx)("div", {
                                        style: {
                                            width: "18px",
                                            height: "18px",
                                            marginTop: "-7px"
                                        },
                                        id: "ico",
                                        children: r ? Object(V.jsx)(je.a, {
                                            sx: {
                                                fontSize: "18px",
                                                color: "white"
                                            },
                                            id: "pools",
                                            onClick: function(e) {
                                                return k(e)
                                            }
                                        }) : Object(V.jsx)(je.a, {
                                            sx: {
                                                fontSize: "18px",
                                                color: "#2d74c4c7"
                                            },
                                            id: "pools",
                                            onClick: function(e) {
                                                return k(e)
                                            }
                                        })
                                    }), r ? Object(V.jsx)(E.A, {
                                        style: {
                                            fontSize: "18px",
                                            width: "160px",
                                            marginLeft: "7px",
                                            color: "#EAE2FC"
                                        },
                                        id: "ico",
                                        children: "Xpad"
                                    }) : Object(V.jsx)(E.A, {
                                        style: {
                                            fontSize: "18px",
                                            width: "160px",
                                            marginLeft: "7px",
                                            color: "#2B2A29"
                                        },
                                        id: "ico",
                                        children: "Xpad"
                                    })]
                                })]
                            }), Object(V.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "55px",
                                    left: "20px"
                                },
                                children: Object(V.jsx)(ae.Button, {
                                    className: "wrapper_switch",
                                    onClick: function(e) {
                                        s()
                                    },
                                    children: Object(V.jsx)("div", {
                                        className: r ? "tdnn" : "tdnn day",
                                        children: Object(V.jsx)("div", {
                                            className: r ? "moon" : "moon sun"
                                        })
                                    })
                                })
                            }), Object(V.jsxs)("div", {
                                style: r ? {
                                    display: "flex",
                                    alignItems: "center",
                                    position: "absolute",
                                    bottom: 15
                                } : {
                                    padding: "5px 10px 2px",
                                    display: "flex",
                                    alignItems: "center",
                                    position: "absolute",
                                    bottom: 15,
                                    backgroundColor: "#2d74c4c7",
                                    borderRadius: "10px",
                                    left: "16px"
                                },
                                children: [Object(V.jsx)("a", {
                                    href: "https://t.me/croxswap",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_telegram.svg",
                                        alt: "telegram",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    })
                                }), Object(V.jsx)("a", {
                                    href: "https://twitter.com/croxswap",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_twitter.svg",
                                        alt: "twitter",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    })
                                }), Object(V.jsx)("a", {
                                    href: "https://github.com/croxswap",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_github.svg",
                                        alt: "github",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    })
                                }), Object(V.jsx)("a", {
                                    href: "https://www.youtube.com/channel/UCPEJ2aiaH03VwKe4YoFWSGw",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_youtube.svg",
                                        alt: "youtube",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    })
                                }), Object(V.jsx)("a", {
                                    href: "https://croxswap.medium.com",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_medium.svg",
                                        alt: "blog",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    })
                                }), Object(V.jsx)("a", {
                                    href: "https://reddit.com/r/croxswap",
                                    children: Object(V.jsx)("img", {
                                        src: "/icon_reddit.svg",
                                        alt: "reddit",
                                        style: r ? {
                                            marginRight: "12px"
                                        } : {}
                                    })
                                })]
                            })]
                        })), Object(V.jsx)(ae.Button, {
                            style: {
                                paddingLeft: 0,
                                paddingRight: 0
                            },
                            onClick: function() {
                                d(!0)
                            },
                            children: Object(V.jsx)(ye.a, {
                                sx: {
                                    color: "white"
                                }
                            })
                        })]
                    })
                },
                Ce = n(255),
                Fe = n.n(Ce),
                Ee = (n(348), n(370)),
                Pe = n.n(Ee),
                _e = [{
                    title: "BNB",
                    img: "bsc",
                    color: "#f0b90b",
                    link: "https://app.croxswap.com"
                }, {
                    title: "HECO",
                    img: "heco",
                    color: "#01943f",
                    link: "https://heco.croxswap.com"
                }],
                Ne = U.e.div(u || (u = Object(q.a)(["\n  background: radial-gradient( at center, #0f1c3c, #121827 );\n  border: 1px solid darkslategrey;\n  padding: 20px 0;\n  border-radius: 10px;\n  margin: 0 30px;\n  text-align: center;\n  width: 580px;\n  transition: all ease 200ms;\n  @media screen and (max-width: 580px) {\n    width: 360px;\n    .searchInput {\n      width: 300px !important;\n    }\n  }\n"]))),
                Re = U.e.button(p || (p = Object(q.a)(["\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  text-align: center;\n  transition: all 300ms;\n  margin: 10px;\n  margin-bottom: 0;\n  padding: 10px 20px;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.05)\n  }\n"]))),
                Me = U.e.div(l || (l = Object(q.a)(["\n  background-color: #f0b90b;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: none;\n"]))),
                Le = function(e) {
                    var t = e.onDismiss;
                    return Object(V.jsxs)(Ne, {
                        children: [Object(V.jsx)(E.d, {
                            style: {
                                position: "fixed",
                                right: "50px",
                                top: "20px",
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                width: "20px"
                            },
                            onClick: t,
                            children: "\u2716"
                        }), Object(V.jsx)(E.A, {
                            fontSize: "18px",
                            color: "#2d74c4",
                            children: "Select Source Chain"
                        }), _e.map((function(e) {
                            return Object(V.jsx)("a", {
                                href: e.link,
                                children: Object(V.jsx)(Re, {
                                    children: Object(V.jsxs)(E.m, {
                                        alignItems: "center",
                                        flexDirection: "column",
                                        children: [Object(V.jsx)("img", {
                                            src: "/images/network/".concat(e.img, "_net.svg"),
                                            alt: "".concat(e.title, " icon"),
                                            width: "80px",
                                            height: "80px",
                                            onError: function(t) {
                                                var n = t.currentTarget;
                                                n.onerror = null, n.src = "images/network/".concat(e.img, "_net.svg")
                                            }
                                        }), Object(V.jsxs)(E.m, {
                                            alignItems: "center",
                                            children: ["BNB" === e.title && Object(V.jsx)(Me, {}), Object(V.jsx)(E.A, {
                                                color: e.color,
                                                ml: "3px",
                                                children: e.title
                                            })]
                                        })]
                                    })
                                })
                            })
                        }))]
                    })
                },
                Ie = n(182),
                qe = Object(U.e)(re.a)(b || (b = Object(q.a)(["\n  background-color: #1a1b23;\n  padding: 0px 10px;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  z-index: 10000;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n"]))),
                Ue = U.e.div(y || (y = Object(q.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: #1a1b23;\n  padding: 0px 10px;\n  box-sizing: border-box;\n  justify-content: space-between;\n  position: fixed;\n  top: -1px;\n  z-index: 10000;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n"]))),
                He = Object(U.e)(ae.Button)(f || (f = Object(q.a)(["\n  margin: 0 24px;\n  padding: 0;\n  align-items: center;\n  display: flex;\n  background-color: #2c2d3a;\n  color: white;\n  border-radius: 20px;\n  font-size: 14px;\n  img {\n    margin-left: 4px;\n  }\n  z-index: 0;\n  @media screen and (max-width: 550px) {\n    margin: 0;\n  }\n"]))),
                ze = Object(U.e)(re.a)(m || (m = Object(q.a)(["\n  width: 30px;\n  background-color: #2c2d3a;\n  top: 0;\n  & .networkDropDown {\n    padding: 0 5px;\n  }\n  & svg {\n    display: none;\n  }\n"]))),
                Ve = Object(U.e)(ae.Button)(x || (x = Object(q.a)(["\n  background-color: transparent;\n  color: white;\n  box-sizing: border-box;\n  border-top: 5px solid transparent;\n  box-sizing: border-box;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-size: 16px;\n  font-weight: 100;\n  &:hover {\n    background-color: transparent;\n    border-top: 5px solid transparent;\n  }\n"]))),
                Xe = Object(U.e)(ae.Dropdown)(k || (k = Object(q.a)(["\n  background-color: transparent;\n  color: white;\n  box-sizing: border-box;\n  border-top: none;\n  box-sizing: border-box;\n  padding: 0px 25px;\n  font-size: 16px;\n  font-weight: 100;\n  border-top: 5px solid transparent;\n  &:hover {\n    background-color: transparent;\n    border-top: 5px solid transparent;\n  }\n  & .itemContainer {\n    background-color:  #121827;\n    border: none;\n    border-radius: 8px;\n    margin-top: 3px;\n  }\n"]))),
                We = U.e.div(w || (w = Object(q.a)(["\n  padding: 8px 0;\n  background-color: #121827;\n  border-radius: 8px;\n  & .swap {\n    padding: 16px;\n    display: flex;\n  }\n  & .liquidity {\n    padding: 16px;\n    display: flex;\n  }\n"]))),
                Je = Object(U.e)(ae.DropdownItem)(h || (h = Object(q.a)(["\n  background-color:  #121827;\n  width: 300px;\n  border: none;\n  padding: 30px 20px;\n  &:hover {\n    background-color: #253253;\n    .changeText {\n      color: #2d74c4;\n    }\n  }\n"]))),
                Ge = U.e.div(T || (T = Object(q.a)(["\n  display: flex;\n  padding: 9px 16px;\n  align-items: center;\n  background-color: #3b3c4e;\n  color: white;\n  border-radius: 30px;\n"]))),
                Ke = Object(U.e)(ae.Dropdown)(j || (j = Object(q.a)(["\n  background-color: #2c2d3a;\n  color: white;\n  box-sizing: border-box;\n  border-top: none;\n  box-sizing: border-box;\n  padding: 0px 30px;\n  font-size: 14px;\n  font-weight: 100;\n  &:hover {\n    background-color: #2c2d3a;\n    border-top: none;\n  }\n"]))),
                Qe = Object(U.e)(ae.Button)(O || (O = Object(q.a)(["\n  margin-left: 16px;\n  padding: 9px 16px;\n  background-color: #3b3c4e;\n  color: white;\n  font-size: 14px;\n  border-radius: 20px;\n  z-index: 1;\n  letter-spacing: 1px;\n  @media screen and (max-width: 550px) {\n    letter-spacing: 0;\n  }\n"]))),
                Ye = !1,
                Ze = function(e) {
                    var t = Object(C.f)(),
                        n = Object(F.m)(),
                        a = n.account,
                        r = n.connect,
                        s = n.reset,
                        i = n.status,
                        o = n.error,
                        c = Object(v.useState)(""),
                        d = Object(Q.a)(c, 2),
                        u = d[0],
                        p = d[1],
                        l = Object(E.H)((function(e) {
                            switch (Ye = !0, e) {
                                case "bsc":
                                    r("bsc");
                                    break;
                                case "walletconnect":
                                    r("walletconnect");
                                    break;
                                default:
                                    r("injected")
                            }
                        }), s, a),
                        b = l.onPresentNewConnectModal,
                        y = l.onPresentNewAccountModal,
                        f = Object(N.s)(),
                        m = Object(E.F)(),
                        x = m.isMd,
                        k = m.isSm,
                        w = m.isXs,
                        h = m.isLg;
                    Object(v.useEffect)((function() {
                        if (Ye && o) {
                            if (o && "ChainUnsupportedError" === o.name) {
                                var e = window.ethereum;
                                Object(K.a)(G.a.mark((function t() {
                                    return G.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.request({
                                                    method: "wallet_switchEthereumChain",
                                                    params: [{
                                                        chainId: "0x38"
                                                    }]
                                                });
                                            case 3:
                                                t.next = 16;
                                                break;
                                            case 5:
                                                if (t.prev = 5, t.t0 = t.catch(0), 4902 !== t.t0.code) {
                                                    t.next = 16;
                                                    break
                                                }
                                                return t.prev = 8, t.next = 11, e.request({
                                                    method: "wallet_addEthereumChain",
                                                    params: [{
                                                        chainId: "0x38",
                                                        chainName: "Binance Smart Chain",
                                                        nativeCurrency: {
                                                            name: "BNB",
                                                            symbol: "BNB",
                                                            decimals: 18
                                                        },
                                                        rpcUrls: [Object(Ie.a)()],
                                                        blockExplorerUrls: ["https://bscscan.com"]
                                                    }]
                                                });
                                            case 11:
                                                t.next = 16;
                                                break;
                                            case 13:
                                                t.prev = 13, t.t1 = t.catch(8), console.error(t.t1);
                                            case 16:
                                                r("injected");
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 5],
                                        [8, 13]
                                    ])
                                })))()
                            }
                            Ye = !1
                        }
                    }), [a, i, o]);
                    var T = Object(v.useState)(!1),
                        j = Object(Q.a)(T, 2),
                        O = j[0],
                        A = j[1];

                    function B() {
                        A(!1)
                    }
                    Fe.a.defaultStyles.overlay.backgroundColor = "rgba(69,42,122,0.6)", Fe.a.defaultStyles.overlay.zIndex = "98";
                    return Object(V.jsxs)(V.Fragment, {
                        children: [x || k || w || h ? Object(V.jsxs)(Ue, {
                            children: [Object(V.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [Object(V.jsx)("div", {
                                    id: "App",
                                    children: Object(V.jsx)(De, {
                                        pageWrapId: "page-wrap",
                                        outerContainerId: "App"
                                    })
                                }), Object(V.jsx)("img", {
                                    src: "/header_logo.png",
                                    width: "120px",
                                    alt: "logo1",
                                    style: {
                                        margin: "8px 14px",
                                        marginRight: "80px"
                                    }
                                })]
                            }), Object(V.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: a ? Object(V.jsxs)(He, {
                                    children: [Object(V.jsxs)(E.m, {
                                        onClick: function() {
                                            return A(!0)
                                        },
                                        alignItems: "center",
                                        children: [Object(V.jsx)("img", {
                                            src: "/images/network/bsc_icon.png",
                                            alt: "BSC",
                                            style: {
                                                width: "18px",
                                                height: "17px"
                                            }
                                        }), Object(V.jsx)(ze, {
                                            className: "menu",
                                            children: Object(V.jsx)(Ke, {
                                                label: "BNB",
                                                className: "itemContainer networkDropDown",
                                                itemsClassName: "itemContainer",
                                                onClick: function() {
                                                    return A(!0)
                                                }
                                            })
                                        })]
                                    }), Object(V.jsxs)(Qe, {
                                        onClick: y,
                                        children: [a.slice(0, 5), "...", a.slice(-5)]
                                    })]
                                }) : Object(V.jsxs)(He, {
                                    children: [Object(V.jsxs)(E.m, {
                                        onClick: function() {
                                            return A(!0)
                                        },
                                        alignItems: "center",
                                        children: [Object(V.jsx)("img", {
                                            src: "/images/network/bsc_icon.png",
                                            alt: "BSC",
                                            style: {
                                                width: "18px",
                                                height: "17px"
                                            }
                                        }), Object(V.jsx)(ze, {
                                            className: "menu",
                                            children: Object(V.jsx)(Ke, {
                                                label: "BNB",
                                                className: "itemContainer networkDropDown",
                                                itemsClassName: "itemContainer",
                                                onClick: function() {
                                                    return A(!0)
                                                }
                                            })
                                        })]
                                    }), Object(V.jsx)(Qe, {
                                        onClick: b,
                                        children: "CONNECT"
                                    })]
                                })
                            })]
                        }) : Object(V.jsxs)(qe, {
                            className: "croxmas" === u ? "menu_snow" : "menu",
                            children: [Object(V.jsx)("img", {
                                src: "/header_logo.png",
                                width: "120px",
                                alt: "logo1",
                                style: {
                                    margin: "8px 14px",
                                    marginRight: "20px"
                                }
                            }), Object(V.jsx)(Ve, {
                                className: "button",
                                onClick: function() {
                                    t.push("/"), p("")
                                },
                                children: "Home"
                            }), Object(V.jsx)(Xe, {
                                label: "Trade",
                                className: "dropdown itemContainer",
                                itemsClassName: "itemContainer",
                                children: Object(V.jsxs)(We, {
                                    children: [Object(V.jsx)(Je, {
                                        className: "menu-item swap",
                                        children: Object(V.jsxs)("a", {
                                            style: {
                                                marginTop: "3px",
                                                marginLeft: "7px"
                                            },
                                            href: "https://exchange.croxswap.com/#/swap",
                                            children: [Object(V.jsxs)(E.m, {
                                                alignItems: "center",
                                                children: [Object(V.jsx)(Pe.a, {
                                                    sx: {
                                                        fontSize: "20px"
                                                    }
                                                }), Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    bold: !0,
                                                    ml: "3px",
                                                    fontSize: "14px",
                                                    children: "Swap"
                                                })]
                                            }), Object(V.jsx)(E.m, {
                                                flexDirection: "column",
                                                ml: "20px",
                                                children: Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    style: {
                                                        lineHeight: "24px"
                                                    },
                                                    fontSize: "14px",
                                                    mt: "10px",
                                                    children: "Exchange your tokens using CroxSwap"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Je, {
                                        className: "menu-item swap",
                                        children: Object(V.jsxs)("a", {
                                            style: {
                                                marginTop: "3px",
                                                marginLeft: "7px"
                                            },
                                            href: "https://exchange.croxswap.com/#/pool",
                                            children: [Object(V.jsxs)(E.m, {
                                                alignItems: "center",
                                                children: [Object(V.jsx)(Pe.a, {
                                                    sx: {
                                                        fontSize: "20px"
                                                    }
                                                }), Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    bold: !0,
                                                    ml: "3px",
                                                    fontSize: "14px",
                                                    children: "Liquidity"
                                                })]
                                            }), Object(V.jsxs)(E.m, {
                                                flexDirection: "column",
                                                ml: "20px",
                                                children: [Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    style: {
                                                        lineHeight: "24px"
                                                    },
                                                    fontSize: "14px",
                                                    mt: "10px",
                                                    children: "Provide liquidity to earn a share of"
                                                }), Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    style: {
                                                        lineHeight: "24px"
                                                    },
                                                    fontSize: "14px",
                                                    children: "trade fees"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), Object(V.jsx)(Ve, {
                                className: "button",
                                onClick: function() {
                                    t.push("/farms"), p("")
                                },
                                children: "Farms"
                            }), Object(V.jsx)(Ve, {
                                className: "button",
                                onClick: function() {
                                    t.push("/pools/nextgen"), p("")
                                },
                                children: "Pools"
                            }), Object(V.jsx)(Xe, {
                                label: "Bridge",
                                className: "dropdown itemContainer",
                                itemsClassName: "itemContainer",
                                children: Object(V.jsxs)(We, {
                                    children: [Object(V.jsx)(Je, {
                                        className: "menu-item swap",
                                        children: Object(V.jsxs)("a", {
                                            style: {
                                                marginTop: "3px",
                                                marginLeft: "7px"
                                            },
                                            href: "https://www.iswap.com/en-us/?type=bridge",
                                            children: [Object(V.jsxs)(E.m, {
                                                alignItems: "center",
                                                children: [Object(V.jsx)("div", {
                                                    style: {
                                                        width: "16px",
                                                        height: "16px"
                                                    },
                                                    children: Object(V.jsx)(Ae, {})
                                                }), Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    bold: !0,
                                                    ml: "5px",
                                                    fontSize: "14px",
                                                    children: "HECO Bridge (iSwap)"
                                                })]
                                            }), Object(V.jsx)(E.m, {
                                                flexDirection: "column",
                                                ml: "20px",
                                                children: Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    style: {
                                                        lineHeight: "24px"
                                                    },
                                                    fontSize: "14px",
                                                    mt: "10px",
                                                    children: "Exchange your tokens using iSwap"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Je, {
                                        className: "menu-item swap",
                                        children: Object(V.jsxs)("a", {
                                            style: {
                                                marginTop: "3px",
                                                marginLeft: "7px"
                                            },
                                            href: "https://bridge.croxswap.com",
                                            children: [Object(V.jsxs)(E.m, {
                                                alignItems: "center",
                                                children: [Object(V.jsx)("div", {
                                                    style: {
                                                        width: "16px",
                                                        height: "16px"
                                                    },
                                                    children: Object(V.jsx)(Ae, {})
                                                }), Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    bold: !0,
                                                    ml: "5px",
                                                    fontSize: "14px",
                                                    children: "CROX Bridge (soon)"
                                                })]
                                            }), Object(V.jsx)(E.m, {
                                                flexDirection: "column",
                                                ml: "20px",
                                                children: Object(V.jsx)(E.A, {
                                                    color: "white",
                                                    style: {
                                                        lineHeight: "24px"
                                                    },
                                                    fontSize: "14px",
                                                    mt: "10px",
                                                    children: "Exchange your tokens using CROXSWAP"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), Object(V.jsx)(Ve, {
                                className: "button",
                                children: Object(V.jsx)("a", {
                                    href: "https://referral.croxswap.com",
                                    children: "Referral"
                                })
                            }), Object(V.jsx)(Ve, {
                                className: "button",
                                onClick: function() {
                                    t.push("/ico")
                                },
                                children: "Xpad"
                            }), Object(V.jsx)(ae.Separator, {}), Object(V.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [Object(V.jsx)(E.r, {
                                    href: "https://coinmarketcap.com/currencies/croxswap",
                                    external: !0,
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: Object(V.jsxs)(Ge, {
                                        children: [Object(V.jsx)(E.A, {
                                            fontSize: "14px",
                                            color: "white",
                                            children: "$CROX: "
                                        }), Object(V.jsx)(E.A, {
                                            fontSize: "14px",
                                            ml: "5px",
                                            color: "white",
                                            children: f.toFixed(3)
                                        })]
                                    })
                                }), a ? Object(V.jsxs)(He, {
                                    children: [Object(V.jsxs)(E.m, {
                                        onClick: function() {
                                            return A(!0)
                                        },
                                        alignItems: "center",
                                        children: [Object(V.jsx)("img", {
                                            src: "/images/network/bsc_icon.png",
                                            alt: "BNB",
                                            style: {
                                                width: "18px",
                                                height: "17px"
                                            }
                                        }), Object(V.jsx)(ze, {
                                            className: "menu",
                                            children: Object(V.jsx)(Ke, {
                                                label: "BNB",
                                                className: "itemContainer networkDropDown",
                                                itemsClassName: "itemContainer",
                                                onClick: function() {
                                                    return A(!0)
                                                }
                                            })
                                        })]
                                    }), Object(V.jsxs)(Qe, {
                                        onClick: y,
                                        children: [a.slice(0, 5), "...", a.slice(-5)]
                                    })]
                                }) : Object(V.jsxs)(He, {
                                    children: [Object(V.jsxs)(E.m, {
                                        onClick: function() {
                                            return A(!0)
                                        },
                                        alignItems: "center",
                                        children: [Object(V.jsx)("img", {
                                            src: "/images/network/bsc_icon.png",
                                            alt: "BNB",
                                            style: {
                                                width: "18px",
                                                height: "17px"
                                            }
                                        }), Object(V.jsx)(ze, {
                                            className: "menu",
                                            children: Object(V.jsx)(Ke, {
                                                label: "BNB",
                                                className: "itemContainer networkDropDown",
                                                itemsClassName: "itemContainer",
                                                onClick: function() {
                                                    return A(!0)
                                                }
                                            })
                                        })]
                                    }), Object(V.jsx)(Qe, {
                                        onClick: b,
                                        children: "CONNECT"
                                    })]
                                })]
                            })]
                        }), Object(V.jsx)("div", {
                            style: {
                                height: 62
                            }
                        }), Object(V.jsx)(Fe.a, {
                            isOpen: O,
                            onRequestClose: function() {
                                return B()
                            },
                            style: {
                                body: {
                                    overflow: "hidden"
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
                                    overflow: "hidden"
                                }
                            },
                            children: Object(V.jsx)(Le, {
                                onDismiss: function() {
                                    return B()
                                }
                            })
                        })]
                    })
                },
                $e = n(269),
                et = (n(1103), U.e.div(A || (A = Object(q.a)(["\n  background-image: url('/images/Farm_header_bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 255px;\n  background-position: center center;\n  background-color: white;\n"])))),
                tt = function(e) {
                    var t = e.isRasta,
                        n = Object(N.y)(),
                        a = Object($e.useCountUp)({
                            start: 0,
                            end: n.toNumber(),
                            duration: 1,
                            separator: ",",
                            decimals: 2
                        }),
                        r = a.countUp,
                        s = a.update,
                        i = Object(v.useRef)(s);
                    return Object(v.useEffect)((function() {
                        i.current(n.toNumber())
                    }), [n.toNumber(), i]), Object(V.jsx)(et, {
                        children: Object(V.jsxs)("div", {
                            className: "Card_text",
                            children: [Object(V.jsxs)("div", {
                                className: "TotalCard",
                                children: [Object(V.jsxs)("div", {
                                    className: "Totalprice",
                                    children: ["$", r]
                                }), Object(V.jsx)("div", {
                                    className: "tvl",
                                    children: "Total Value Locked(TVL)"
                                }), Object(V.jsx)("div", {
                                    className: "across",
                                    children: "Across All Farms and Pools"
                                })]
                            }), Object(V.jsxs)("p", {
                                className: "buyburn",
                                children: ["*Deposit fees is used to buyback & burn ", t ? "RASTA" : "CROX"]
                            })]
                        })
                    })
                },
                nt = n(378),
                at = n(214),
                rt = n(273),
                st = n(217),
                it = n(39),
                ot = n(1182),
                ct = n(1179),
                dt = n(1178),
                ut = n(1181),
                pt = n(1175),
                lt = n(1176),
                bt = n(1177),
                yt = n(1184),
                ft = n(1185),
                mt = n(1188),
                xt = n(1186),
                kt = n(1187),
                wt = n(188),
                ht = n.n(wt),
                Tt = [{
                    label: "binance",
                    iconlink: ""
                }, {
                    label: "bscscan",
                    iconlink: "https://bscscan.com/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    label: "coinmarket",
                    iconlink: "https://coinmarketcap.com/currencies/croxswap/"
                }, {
                    label: "coingecko",
                    iconlink: "https://www.coingecko.com/en/coins/croxswap"
                }, {
                    label: "pancake",
                    iconlink: "https://pancakeswap.finance/info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    label: "babyswap",
                    iconlink: "https://babyswap.info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    label: "centric",
                    iconlink: "https://www.centric.com/guide/"
                }, {
                    label: "techrate",
                    iconlink: "https://github.com/TechRate/Smart-Contract-Audits/blob/main/Crox%20Final.pdf"
                }, {
                    label: "crush",
                    iconlink: "https://www.bitcrush.com/"
                }, {
                    label: "rasta",
                    iconlink: "https://app.rasta.finance/"
                }, {
                    label: "pino",
                    iconlink: "https://www.pinocchu.com/"
                }, {
                    label: "blockmine",
                    iconlink: ""
                }, {
                    label: "gain",
                    iconlink: "https://gainpool.io/"
                }, {
                    label: "trustwallet",
                    iconlink: ""
                }, {
                    label: "game1",
                    iconlink: ""
                }, {
                    label: "dapp",
                    iconlink: "https://www.dapp.com/app/croxswap"
                }, {
                    label: "grem",
                    iconlink: "https://gremlins.finance/"
                }, {
                    label: "safepal",
                    iconlink: ""
                }, {
                    label: "rxseedcoin",
                    iconlink: "https://rxseedcoin.io/"
                }, {
                    label: "walletnow",
                    iconlink: "https://walletnow.net/"
                }, {
                    label: "french",
                    iconlink: "https://frenchconnection.finance/"
                }, {
                    label: "cryptoyou",
                    iconlink: "https://thecryptoyou.io/home"
                }, {
                    label: "bigleague",
                    iconlink: "https://bigleague.art/"
                }, {
                    label: "defily",
                    iconlink: "https://defily.io/#/farms"
                }, {
                    label: "xwin",
                    iconlink: "https://xwin.finance/"
                }, {
                    label: "infinite",
                    iconlink: "https://infiniteone.io/"
                }, {
                    label: "heco",
                    iconlink: "https://hecoinfo.com/token/0x381785593F9BAcE15aF908ac108b5f538155Ff3e"
                }, {
                    label: "iswap",
                    iconlink: "https://www.iswap.com/en-us/?type=bridge"
                }, {
                    label: "mdex",
                    iconlink: "https://ht.mdex.com/"
                }, {
                    label: "demeter",
                    iconlink: ""
                }];
            n(1104), n(597), n(604), n(605);
            ut.a.use([pt.a, lt.a, bt.a]);
            var jt = function(e) {
                    var t = Object(C.f)(),
                        n = Object(dt.a)("(max-width: 600px)"),
                        a = Object(F.m)(),
                        r = (a.account, a.connect),
                        s = a.reset,
                        i = (Object(E.H)(r, s).onPresentConnectModal, Object(E.F)()),
                        o = (i.isMd, i.isSm, i.isXs, i.isLg, Object(v.useState)(!1)),
                        c = Object(Q.a)(o, 2),
                        d = (c[0], c[1], Object(ie.a)()),
                        u = d.isDark,
                        p = d.toggleTheme,
                        l = Object(N.s)(),
                        b = Object(rt.d)(),
                        y = Object(rt.b)(Object(it.a)()),
                        f = b ? b.minus(y) : new nt.a(0),
                        m = l.times(f),
                        x = Object(it.a)(),
                        k = Object(v.useCallback)(Object(K.a)(G.a.mark((function e() {
                            var t;
                            return G.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t = window.ethereum)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, t.request({
                                            method: "wallet_watchAsset",
                                            params: {
                                                type: "ERC20",
                                                options: {
                                                    address: x,
                                                    symbol: "CROX",
                                                    decimals: "18",
                                                    image: "https://app.croxswap.com/images/egg/logo.png"
                                                }
                                            }
                                        });
                                    case 5:
                                        e.sent, e.next = 11;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        }))), [x]),
                        w = B.a.useState(""),
                        h = Object(Q.a)(w, 2),
                        T = h[0],
                        j = h[1],
                        O = function(e) {
                            return function(t, n) {
                                j(n ? e : "")
                            }
                        };
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)("div", {
                            className: "partners",
                            children: [Object(V.jsx)(E.A, {
                                className: "footer_headtext",
                                fontSize: "50px",
                                color: "white",
                                bold: !0,
                                children: "Partner Reviews"
                            }), Object(V.jsx)("div", {
                                className: "partner_review_group",
                                children: Object(V.jsxs)(ot.a, {
                                    effect: "coverflow",
                                    centeredSlides: !0,
                                    navigation: !1,
                                    loop: !0,
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: !1
                                    },
                                    coverflowEffect: {
                                        rotate: 20,
                                        stretch: -40,
                                        depth: 280,
                                        modifier: 1.3,
                                        slideShadows: !0
                                    },
                                    className: "swiper_head",
                                    breakpoints: {
                                        1400: {
                                            slidesPerView: 3.3,
                                            spaceBetween: 20
                                        },
                                        1060: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        600: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        200: {
                                            slidesPerView: 1,
                                            spaceBetween: 0
                                        }
                                    },
                                    children: [Object(V.jsx)(ct.a, {
                                        children: Object(V.jsxs)("div", {
                                            className: u ? "partner_review" : "partner_review_white",
                                            children: [Object(V.jsx)("div", {
                                                style: {
                                                    height: "40px"
                                                },
                                                children: Object(V.jsx)("img", {
                                                    src: "/images/footer/centric.png",
                                                    width: "130px",
                                                    alt: ""
                                                })
                                            }), Object(V.jsx)(E.A, {
                                                color: "white",
                                                ml: "25px",
                                                children: "The Centric community has enjoyed the various staking options on CroxSwap. The Dual-Farms are especially cool, as every deposit to the CNS-BNB LP adds CNS liquidity on PancakeSwap. Plus, the CroxSwap team has been wonderful to work with!"
                                            }), Object(V.jsx)(E.A, {
                                                fontSize: "14px",
                                                color: "aqua",
                                                style: {
                                                    textAlign: "right"
                                                },
                                                children: "--Thomas Butcher, COO, CentricSwap"
                                            })]
                                        })
                                    }), Object(V.jsx)(ct.a, {
                                        children: Object(V.jsxs)("div", {
                                            className: u ? "partner_review" : "partner_review_white",
                                            children: [Object(V.jsx)("div", {
                                                style: {
                                                    height: "40px"
                                                },
                                                children: Object(V.jsx)("img", {
                                                    src: "/images/footer/rasta.png",
                                                    width: "130px",
                                                    alt: ""
                                                })
                                            }), Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "19px",
                                                ml: "25px",
                                                children: "Throughout the toughest challenges, it is the company you keep that defines your success. We are honored to have CroxSwap as our main partners on this exciting journey to the moon."
                                            }), Object(V.jsx)(E.A, {
                                                fontSize: "14px",
                                                color: "aqua",
                                                style: {
                                                    textAlign: "right"
                                                },
                                                children: "-- Senor Burdy, Founder & CEO, Rasta Finance"
                                            })]
                                        })
                                    }), Object(V.jsx)(ct.a, {
                                        children: Object(V.jsxs)("div", {
                                            className: u ? "partner_review" : "partner_review_white",
                                            children: [Object(V.jsx)("div", {
                                                style: {
                                                    height: "40px"
                                                },
                                                children: Object(V.jsx)("img", {
                                                    src: "/images/footer/crush.png",
                                                    width: "130px",
                                                    alt: ""
                                                })
                                            }), Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "19px",
                                                ml: "25px",
                                                children: "Croxswap is by far one of our favorite partner projects. Cool team, good tech, what\u2019s not to love? They\u2019re definitely one to keep an eye on, and can\u2019t wait to see what we collaborate on in the future."
                                            }), Object(V.jsx)(E.A, {
                                                fontSize: "14px",
                                                color: "aqua",
                                                style: {
                                                    textAlign: "right"
                                                },
                                                children: "-- Master Blaster, Bitcrush Arcade"
                                            })]
                                        })
                                    })]
                                })
                            }), Object(V.jsx)(E.A, {
                                fontSize: "50px",
                                className: "footer_headtext",
                                bold: !0,
                                mt: "70px",
                                mb: "20px",
                                style: {
                                    textAlign: "center"
                                },
                                color: "white",
                                children: "Partners"
                            }), Object(V.jsx)("div", {
                                className: "partners_group",
                                children: Object(V.jsx)(yt.a, {
                                    container: !0,
                                    rowSpacing: 1,
                                    columnSpacing: {
                                        xs: 1,
                                        sm: 2,
                                        md: 3
                                    },
                                    style: {
                                        alignItems: "center"
                                    },
                                    children: Tt.map((function(e) {
                                        return Object(V.jsx)(yt.a, {
                                            className: "partner_img",
                                            item: !0,
                                            xs: 6,
                                            sm: 4,
                                            md: 3,
                                            lg: 2,
                                            children: Object(V.jsx)(E.r, {
                                                external: !0,
                                                href: e.iconlink,
                                                children: Object(V.jsx)("img", {
                                                    src: "/images/footer/".concat(e.label, ".png"),
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }))
                                })
                            })]
                        }), Object(V.jsx)("div", {
                            className: "footer",
                            children: Object(V.jsxs)(yt.a, {
                                container: !0,
                                rowSpacing: 1,
                                columnSpacing: {
                                    xs: 1,
                                    sm: 2,
                                    md: 3
                                },
                                children: [Object(V.jsxs)(yt.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 12,
                                    lg: 2.2,
                                    children: [Object(V.jsxs)("div", {
                                        className: "social_icon",
                                        children: [Object(V.jsx)(E.A, {
                                            fontSize: "32px",
                                            style: {
                                                textAlign: "center"
                                            },
                                            bold: !0,
                                            color: "white",
                                            children: "Socials"
                                        }), Object(V.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                marginBottom: 20,
                                                justifyContent: "space-between"
                                            },
                                            children: Object(V.jsxs)(yt.a, {
                                                container: !0,
                                                children: [Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://t.me/croxswap",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_telegram.svg",
                                                            alt: "telegram"
                                                        })
                                                    })
                                                }), Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://twitter.com/croxswap",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_twitter.svg",
                                                            alt: "twitter"
                                                        })
                                                    })
                                                }), Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://github.com/croxswap",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_github.svg",
                                                            alt: "github"
                                                        })
                                                    })
                                                }), Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://www.youtube.com/channel/UCPEJ2aiaH03VwKe4YoFWSGw",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_youtube.svg",
                                                            alt: "youtube"
                                                        })
                                                    })
                                                }), Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://croxswap.medium.com",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_medium.svg",
                                                            alt: "blog"
                                                        })
                                                    })
                                                }), Object(V.jsx)(yt.a, {
                                                    item: !0,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    xs: 2,
                                                    sm: 4,
                                                    md: 2,
                                                    children: Object(V.jsx)("a", {
                                                        href: "https://reddit.com/r/croxswap",
                                                        children: Object(V.jsx)("img", {
                                                            src: "/icon_reddit.svg",
                                                            alt: "reddit"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), Object(V.jsx)(E.m, {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: Object(V.jsxs)("a", {
                                            className: "text",
                                            href: "mailto: support@croxswap.com",
                                            children: ["Contact ", Object(V.jsx)("img", {
                                                src: "images/mobilelogo.png",
                                                alt: "logo",
                                                style: {
                                                    width: "30px",
                                                    marginLeft: "3px"
                                                }
                                            }), " Us"]
                                        })
                                    })]
                                }), Object(V.jsxs)(yt.a, {
                                    item: !0,
                                    xs: 12,
                                    lg: 6,
                                    children: [Object(V.jsxs)("div", {
                                        className: "several_links",
                                        children: [Object(V.jsxs)("div", {
                                            children: [Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "20px",
                                                bold: !0,
                                                children: "About"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://docs.croxswap.com",
                                                children: "Docs"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://github.com/croxswap",
                                                children: "Github"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://croxswap.medium.com/",
                                                children: "Blog"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://github.com/croxswap/audits",
                                                children: "Audits"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://docs.croxswap.com/guide",
                                                children: "Guide"
                                            })]
                                        }), Object(V.jsxs)("div", {
                                            children: [Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "20px",
                                                bold: !0,
                                                children: "Charts"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://dex.guru/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491-bsc",
                                                children: "DexGuru"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://poocoin.app/tokens/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                children: "Poocoin"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://charts.bogged.finance/?token=0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
                                                children: "BoggedCharts"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://www.dextools.io/app/bsc/pair-explorer/0xe38e899cc99ddea9737e06f0a22046d0ca904d70",
                                                children: "Dextools"
                                            })]
                                        }), Object(V.jsxs)("div", {
                                            children: [Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "20px",
                                                bold: !0,
                                                children: "Listings"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://coinmarketcap.com/currencies/croxswap/",
                                                children: "CoinMarketCap"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://www.coingecko.com/en/coins/croxswap",
                                                children: "Coingecko"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://pancakeswap.info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                children: "Pancakeswap"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://bscscan.com/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                children: "Bscscan"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://babyswap.info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                children: "Babyswap"
                                            })]
                                        }), Object(V.jsxs)("div", {
                                            children: [Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "20px",
                                                bold: !0,
                                                children: "Products"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                href: "https://exchange.croxswap.com/#/swap",
                                                children: "Exchange"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                href: "https://exchange.croxswap.com/#/pool",
                                                children: "Liquidity"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                children: "Launchpad(soon)"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://referral.croxswap.com",
                                                children: "Referral Program"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                external: !0,
                                                href: "https://forms.gle/xv759uRs4GARh4jQA",
                                                children: "Apply for Pools"
                                            })]
                                        }), Object(V.jsxs)("div", {
                                            children: [Object(V.jsx)(E.A, {
                                                color: "white",
                                                fontSize: "20px",
                                                bold: !0,
                                                children: "Innovation"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                onClick: function() {
                                                    return t.push("/farms")
                                                },
                                                children: "Dual-Farms"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                onClick: function() {
                                                    return t.push("/pools/crox")
                                                },
                                                children: "Next-Gen Pools"
                                            }), Object(V.jsx)(E.r, {
                                                style: {
                                                    lineHeight: "2.5"
                                                },
                                                href: "https://bridge.croxswap.com",
                                                children: "Cross-chain Bridge(Soon)"
                                            })]
                                        })]
                                    }), n && Object(V.jsxs)("div", {
                                        children: [Object(V.jsxs)(ft.a, {
                                            expanded: "panel1" === T,
                                            onChange: O("panel1"),
                                            className: "accordion_top",
                                            children: [Object(V.jsx)(xt.a, {
                                                expandIcon: Object(V.jsx)(ht.a, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                }),
                                                "aria-controls": "panel1bh-content",
                                                id: "panel1bh-header",
                                                children: Object(V.jsx)(kt.a, {
                                                    sx: {
                                                        width: "100%",
                                                        flexShrink: 0,
                                                        fontSize: 14,
                                                        color: "white"
                                                    },
                                                    children: "About"
                                                })
                                            }), Object(V.jsxs)(mt.a, {
                                                className: "accordion_detail",
                                                children: [Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://docs.croxswap.com",
                                                    children: "Docs"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://github.com/croxswap",
                                                    children: "Github"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://croxswap.medium.com/",
                                                    children: "Blog"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://github.com/croxswap/audits",
                                                    children: "Audits"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://docs.croxswap.com/guide",
                                                    children: "Guide"
                                                })]
                                            })]
                                        }), Object(V.jsxs)(ft.a, {
                                            expanded: "panel2" === T,
                                            onChange: O("panel2"),
                                            className: "accordion_top",
                                            children: [Object(V.jsx)(xt.a, {
                                                expandIcon: Object(V.jsx)(ht.a, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                }),
                                                "aria-controls": "panel2bh-content",
                                                id: "panel2bh-header",
                                                children: Object(V.jsx)(kt.a, {
                                                    sx: {
                                                        width: "100%",
                                                        flexShrink: 0,
                                                        fontSize: 14,
                                                        color: "white"
                                                    },
                                                    children: "Charts"
                                                })
                                            }), Object(V.jsxs)(mt.a, {
                                                className: "accordion_detail",
                                                children: [Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://dex.guru/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491-bsc",
                                                    children: "DexGuru"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://poocoin.app/tokens/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                    children: "Poocoin"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://charts.bogged.finance/?token=0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
                                                    children: "BoggedCharts"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://www.dextools.io/app/bsc/pair-explorer/0xe38e899cc99ddea9737e06f0a22046d0ca904d70",
                                                    children: "Dextools"
                                                })]
                                            })]
                                        }), Object(V.jsxs)(ft.a, {
                                            expanded: "panel3" === T,
                                            onChange: O("panel3"),
                                            className: "accordion_top",
                                            children: [Object(V.jsx)(xt.a, {
                                                expandIcon: Object(V.jsx)(ht.a, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                }),
                                                "aria-controls": "panel3bh-content",
                                                id: "panel3bh-header",
                                                children: Object(V.jsx)(kt.a, {
                                                    sx: {
                                                        width: "100%",
                                                        flexShrink: 0,
                                                        fontSize: 14,
                                                        color: "white"
                                                    },
                                                    children: "Listings"
                                                })
                                            }), Object(V.jsxs)(mt.a, {
                                                className: "accordion_detail",
                                                children: [Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://coinmarketcap.com/currencies/croxswap/",
                                                    children: "CoinMarketCap"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://www.coingecko.com/en/coins/croxswap",
                                                    children: "Coingecko"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://pancakeswap.info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                    children: "Pancakeswap"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://bscscan.com/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                    children: "Bscscan"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://babyswap.info/token/0x2c094f5a7d1146bb93850f629501eb749f6ed491",
                                                    children: "Babyswap"
                                                })]
                                            })]
                                        }), Object(V.jsxs)(ft.a, {
                                            expanded: "panel4" === T,
                                            onChange: O("panel4"),
                                            className: "accordion_top",
                                            children: [Object(V.jsx)(xt.a, {
                                                expandIcon: Object(V.jsx)(ht.a, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                }),
                                                "aria-controls": "panel4bh-content",
                                                id: "panel4bh-header",
                                                children: Object(V.jsx)(kt.a, {
                                                    sx: {
                                                        width: "100%",
                                                        flexShrink: 0,
                                                        fontSize: 14,
                                                        color: "white"
                                                    },
                                                    children: "Products"
                                                })
                                            }), Object(V.jsxs)(mt.a, {
                                                className: "accordion_detail",
                                                children: [Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    href: "https://exchange.croxswap.com/#/swap",
                                                    children: "Exchange"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    href: "https://exchange.croxswap.com/#/pool",
                                                    children: "Liquidity"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    children: "Launchpad(soon)"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://referral.croxswap.com",
                                                    children: "Referral Program"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    external: !0,
                                                    href: "https://forms.gle/xv759uRs4GARh4jQA",
                                                    children: "Apply for Pools"
                                                })]
                                            })]
                                        }), Object(V.jsxs)(ft.a, {
                                            expanded: "panel5" === T,
                                            onChange: O("panel5"),
                                            className: "accordion_top",
                                            children: [Object(V.jsx)(xt.a, {
                                                expandIcon: Object(V.jsx)(ht.a, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                }),
                                                "aria-controls": "panel5bh-content",
                                                id: "panel5bh-header",
                                                children: Object(V.jsx)(kt.a, {
                                                    sx: {
                                                        width: "100%",
                                                        flexShrink: 0,
                                                        fontSize: 14,
                                                        color: "white"
                                                    },
                                                    children: "Innovation"
                                                })
                                            }), Object(V.jsxs)(mt.a, {
                                                className: "accordion_detail",
                                                children: [Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    onClick: function() {
                                                        return t.push("/farms")
                                                    },
                                                    children: "Dual-Farms"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    onClick: function() {
                                                        return t.push("/pools/crox")
                                                    },
                                                    children: "Next-Gen Pools"
                                                }), Object(V.jsx)(E.r, {
                                                    style: {
                                                        lineHeight: "2"
                                                    },
                                                    href: "https://bridge.croxswap.com",
                                                    children: "Cross-chain Bridge(Soon)"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), Object(V.jsx)(yt.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    lg: 3.8,
                                    children: Object(V.jsx)("div", {
                                        className: "crox_detail",
                                        children: Object(V.jsxs)(yt.a, {
                                            container: !0,
                                            rowSpacing: 1,
                                            columnSpacing: {
                                                xs: 1,
                                                sm: 2,
                                                md: 3
                                            },
                                            style: {
                                                margin: "2% 0"
                                            },
                                            children: [Object(V.jsx)(yt.a, {
                                                item: !0,
                                                xs: 12,
                                                sm: 4,
                                                children: Object(V.jsxs)(E.m, {
                                                    flexDirection: n ? "row" : "column",
                                                    justifyContent: "space-between",
                                                    children: [Object(V.jsxs)(E.m, {
                                                        alignItems: "center",
                                                        children: [Object(V.jsx)("img", {
                                                            src: "/footer_logo.svg",
                                                            alt: "logo",
                                                            style: {
                                                                width: "50px"
                                                            }
                                                        }), Object(V.jsxs)(E.A, {
                                                            color: "white",
                                                            ml: "5px",
                                                            fontSize: "20px",
                                                            bold: !0,
                                                            children: ["$", l.toFixed(2)]
                                                        })]
                                                    }), Object(V.jsxs)(E.m, {
                                                        alignItems: "center",
                                                        mt: "10px",
                                                        children: [Object(V.jsx)(E.d, {
                                                            style: {
                                                                width: "50px",
                                                                height: "50px",
                                                                borderRadius: "50%",
                                                                background: "#121827 url('./Metamask.svg') no-repeat center",
                                                                backgroundSize: "30px"
                                                            },
                                                            onClick: k
                                                        }), Object(V.jsx)("span", {
                                                            style: {
                                                                fontSize: "8px",
                                                                color: "white",
                                                                marginLeft: "5px",
                                                                cursor: "pointer"
                                                            },
                                                            children: Object(V.jsx)(E.d, {
                                                                mt: "8px",
                                                                className: "buycrox_btn",
                                                                style: {
                                                                    height: "30px",
                                                                    borderRadius: "5px",
                                                                    padding: "5px",
                                                                    margin: "0"
                                                                },
                                                                children: Object(V.jsx)(E.r, {
                                                                    href: "https://exchange.croxswap.com/#/swap",
                                                                    children: Object(V.jsx)("p", {
                                                                        style: {
                                                                            fontSize: "12px"
                                                                        },
                                                                        children: "BUY CROX"
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    }), !n && Object(V.jsx)("div", {
                                                        style: {
                                                            marginTop: "20px",
                                                            marginLeft: "0px"
                                                        },
                                                        className: u ? "tdnn" : "tdnn day",
                                                        onClick: function(e) {
                                                            p()
                                                        },
                                                        children: Object(V.jsx)("div", {
                                                            className: u ? "moon" : "moon sun"
                                                        })
                                                    })]
                                                })
                                            }), Object(V.jsx)(yt.a, {
                                                item: !0,
                                                xs: 12,
                                                sm: 8,
                                                children: Object(V.jsxs)("div", {
                                                    className: "crox_info",
                                                    children: [Object(V.jsxs)(E.m, {
                                                        children: [Object(V.jsx)(E.A, {
                                                            className: "detail_info",
                                                            children: "MAX SUPPLY:"
                                                        }), Object(V.jsx)(E.A, {
                                                            color: "white",
                                                            bold: !0,
                                                            children: "5,000,000"
                                                        })]
                                                    }), Object(V.jsxs)(E.m, {
                                                        children: [Object(V.jsx)(E.A, {
                                                            className: "detail_info",
                                                            children: "CIRCULATING SUPPLY:"
                                                        }), Object(V.jsx)(E.A, {
                                                            children: Object(V.jsx)(st.a, {
                                                                fontSize: "16px",
                                                                value: Object(at.a)(f),
                                                                decimals: 0
                                                            })
                                                        })]
                                                    }), Object(V.jsxs)(E.m, {
                                                        children: [Object(V.jsx)(E.A, {
                                                            className: "detail_info",
                                                            children: "TOTAL BURNED:"
                                                        }), Object(V.jsx)(E.A, {
                                                            children: Object(V.jsx)(st.a, {
                                                                fontSize: "16px",
                                                                value: Object(at.a)(y),
                                                                decimals: 0
                                                            })
                                                        })]
                                                    }), Object(V.jsxs)(E.m, {
                                                        children: [Object(V.jsx)(E.A, {
                                                            className: "detail_info",
                                                            children: "MARKET CAP:"
                                                        }), Object(V.jsx)(E.A, {
                                                            children: Object(V.jsx)(st.a, {
                                                                fontSize: "16px",
                                                                value: Object(at.a)(m),
                                                                decimals: 0,
                                                                prefix: "$"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                Ot = (n(1106), n(1107), Object(v.lazy)((function() {
                    return Promise.all([n.e(11), n.e(0), n.e(15)]).then(n.bind(null, 1417))
                }))),
                At = Object(v.lazy)((function() {
                    return Promise.all([n.e(2), n.e(0), n.e(1), n.e(13)]).then(n.bind(null, 1418))
                })),
                vt = Object(v.lazy)((function() {
                    return Promise.all([n.e(2), n.e(0), n.e(1), n.e(17)]).then(n.bind(null, 1422))
                })),
                Bt = Object(v.lazy)((function() {
                    return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(25)]).then(n.bind(null, 1433))
                })),
                St = Object(v.lazy)((function() {
                    return Promise.all([n.e(2), n.e(0), n.e(1), n.e(5), n.e(24)]).then(n.bind(null, 1409))
                })),
                gt = Object(v.lazy)((function() {
                    return Promise.all([n.e(2), n.e(0), n.e(1), n.e(14)]).then(n.bind(null, 1419))
                })),
                Dt = Object(v.lazy)((function() {
                    return n.e(28).then(n.bind(null, 1410))
                })),
                Ct = Object(v.lazy)((function() {
                    return n.e(27).then(n.bind(null, 1411))
                })),
                Ft = Object(v.lazy)((function() {
                    return Promise.all([n.e(4), n.e(18)]).then(n.bind(null, 1425))
                })),
                Et = Object(v.lazy)((function() {
                    return Promise.all([n.e(4), n.e(9), n.e(0), n.e(12)]).then(n.bind(null, 1423))
                })),
                Pt = Object(v.lazy)((function() {
                    return n.e(26).then(n.bind(null, 1415))
                })),
                _t = Object(v.lazy)((function() {
                    return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 1420))
                })),
                Nt = Object(v.lazy)((function() {
                    return n.e(19).then(n.bind(null, 1426))
                }));
            _.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var Rt = function() {
                    var e = Object(F.m)(),
                        t = e.account,
                        n = e.connect;
                    return Object(v.useEffect)((function() {
                        !t && window.localStorage.getItem("accountStatus") && n("injected")
                    }), [t, n]), Object(N.n)(), Object(V.jsxs)(D.a, {
                        children: [Object(V.jsx)(E.w, {}), Object(V.jsx)(H, {}), Object(V.jsx)(Ze, {}), Object(V.jsx)(v.Suspense, {
                            fallback: Object(V.jsx)(W, {}),
                            children: Object(V.jsxs)(C.c, {
                                children: [Object(V.jsx)(C.a, {
                                    path: "/croxmas",
                                    children: Object(V.jsx)(_t, {})
                                }), Object(V.jsxs)(C.a, {
                                    path: "/farms",
                                    children: [Object(V.jsx)(tt, {}), Object(V.jsx)(At, {})]
                                }), Object(V.jsxs)(C.a, {
                                    path: "/rastafarms",
                                    children: [Object(V.jsx)(tt, {
                                        isRasta: !0
                                    }), Object(V.jsx)(vt, {})]
                                }), Object(V.jsxs)(C.a, {
                                    path: "/pools/nextgen",
                                    children: [Object(V.jsx)(tt, {}), Object(V.jsx)(Bt, {})]
                                }), Object(V.jsxs)(C.a, {
                                    path: "/dualfarms",
                                    children: [Object(V.jsx)(tt, {}), Object(V.jsx)(St, {})]
                                }), Object(V.jsx)(C.a, {
                                    path: "/nests",
                                    children: Object(V.jsx)(At, {
                                        tokenMode: !0
                                    })
                                }), Object(V.jsxs)(C.a, {
                                    path: "/pools/crox",
                                    children: [Object(V.jsx)(tt, {}), Object(V.jsx)(gt, {})]
                                }), Object(V.jsx)(C.a, {
                                    path: "/referral",
                                    children: Object(V.jsx)(Dt, {})
                                }), Object(V.jsx)(C.a, {
                                    path: "/ref/:ref",
                                    children: Object(V.jsx)(Ct, {})
                                }), Object(V.jsx)(C.a, {
                                    path: "/ico/:id/details",
                                    children: Object(V.jsx)(Et, {})
                                }), Object(V.jsx)(C.a, {
                                    path: "/ico",
                                    children: Object(V.jsx)(Ft, {})
                                }), Object(V.jsx)(C.a, {
                                    path: "/croxbalance",
                                    children: Object(V.jsx)(Nt, {})
                                }), Object(V.jsx)(C.a, {
                                    path: "/",
                                    children: Object(V.jsx)(Ot, {})
                                }), Object(V.jsx)(C.a, {
                                    component: Pt
                                })]
                            })
                        }), Object(V.jsx)(jt, {}), Object(V.jsx)(M.a, {
                            showUnder: 160,
                            style: {
                                zIndex: "100000000000000"
                            },
                            children: Object(V.jsx)(E.m, {
                                className: "scrollTop",
                                justifyContent: "center",
                                alignItems: "center",
                                children: Object(V.jsx)(I.a, {})
                            })
                        }), Object(V.jsx)(ne, {})]
                    })
                },
                Mt = B.a.memo(Rt),
                Lt = n(121),
                It = n(47),
                qt = n(589),
                Ut = n(185),
                Ht = {
                    code: "en",
                    language: "English"
                },
                zt = [Ht, {
                    code: "zh-CN",
                    language: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    code: "zh-TW",
                    language: "\u7e41\u9ad4\u4e2d\u6587"
                }],
                Vt = "pancakeSwapLanguage",
                Xt = B.a.createContext({
                    selectedLanguage: Ht,
                    setSelectedLanguage: function() {},
                    translatedLanguage: Ht,
                    setTranslatedLanguage: function() {}
                }),
                Wt = (parseInt(Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_VERCEL_ORG_ID: "team_TOxk2fr9839Dkp21wIRWu0hZ",
                    REACT_APP_VERCEL_URL: "crox-frontend-farm-2-0-39blajfl9-croxswapcom.vercel.app",
                    REACT_APP_VERCEL_GIT_COMMIT_SHA: "ee1a0c8fa399888fd689d8674b2aa8a137fd521b",
                    REACT_APP_VERCEL_ENV: "production",
                    REACT_APP_VERCEL_GIT_PROVIDER: "github",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "croxswap",
                    REACT_APP_VERCEL_PROJECT_ID: "prj_0XXiUcjv60sqyuKA1vtBdzTo8P1F",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "CroxSwap",
                    REACT_APP_GTAG: "GTM-PXLD3XW",
                    REACT_APP_VERCEL_GIT_REPO_SLUG: "crox-frontend-farm-2.0",
                    REACT_APP_VERCEL_GIT_REPO_OWNER: "croxswap",
                    REACT_APP_NODE_1: " https://bsc-dataseed1.ninicoin.io",
                    REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                    REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                    REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #175 from croxswap/feature/new-partner\n\nFeature/new partner",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_VERCEL_ARTIFACTS_TOKEN: "artifacts:eyJkZXBsb3ltZW50SWQiOiJkcGxfNnUxREh5Y2RqSjIxUlRnNEh3UnpRUm1pYldCWiIsIm93bmVySWQiOiJ0ZWFtX1RPeGsyZnI5ODM5RGtwMjF3SVJXdTBoWiIsInRpY2tldCI6ImdxRjB6UWNJb1dPUzJTQmtjR3hmTm5VeFJFaDVZMlJxU2pJeFVsUm5ORWgzVW5wUlVtMXBZbGRDV3ExQlVFbGZRVkpVU1VaQlExUlRwNjlGOStwYzNqR0pybDhJOHFjS1RGMHhBZ1k9In0=",
                    REACT_APP_VERCEL_ARTIFACTS_OWNER: "team_TOxk2fr9839Dkp21wIRWu0hZ",
                    REACT_APP_VERCEL_GIT_REPO_ID: "379041380",
                    REACT_APP_VERCEL_GIT_COMMIT_REF: "main",
                    REACT_APP_VERCEL_API_DC_ENDPOINT: "https://api-{{dc}}.vercel.com",
                    REACT_APP_AIRTABLE_API_URL: "https://api.airtable.com/v0/appPrSMXSVZZCwRJE/Donation%20Vault",
                    REACT_APP_AIRTABLE_API_KEY: "keybrKAJB28AYJpKq"
                }).REACT_APP_CROWDIN_PROJECTID), new qt.StringTranslations({
                    token: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_VERCEL_ORG_ID: "team_TOxk2fr9839Dkp21wIRWu0hZ",
                        REACT_APP_VERCEL_URL: "crox-frontend-farm-2-0-39blajfl9-croxswapcom.vercel.app",
                        REACT_APP_VERCEL_GIT_COMMIT_SHA: "ee1a0c8fa399888fd689d8674b2aa8a137fd521b",
                        REACT_APP_VERCEL_ENV: "production",
                        REACT_APP_VERCEL_GIT_PROVIDER: "github",
                        REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "croxswap",
                        REACT_APP_VERCEL_PROJECT_ID: "prj_0XXiUcjv60sqyuKA1vtBdzTo8P1F",
                        REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "CroxSwap",
                        REACT_APP_GTAG: "GTM-PXLD3XW",
                        REACT_APP_VERCEL_GIT_REPO_SLUG: "crox-frontend-farm-2.0",
                        REACT_APP_VERCEL_GIT_REPO_OWNER: "croxswap",
                        REACT_APP_NODE_1: " https://bsc-dataseed1.ninicoin.io",
                        REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                        REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #175 from croxswap/feature/new-partner\n\nFeature/new partner",
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_VERCEL_ARTIFACTS_TOKEN: "artifacts:eyJkZXBsb3ltZW50SWQiOiJkcGxfNnUxREh5Y2RqSjIxUlRnNEh3UnpRUm1pYldCWiIsIm93bmVySWQiOiJ0ZWFtX1RPeGsyZnI5ODM5RGtwMjF3SVJXdTBoWiIsInRpY2tldCI6ImdxRjB6UWNJb1dPUzJTQmtjR3hmTm5VeFJFaDVZMlJxU2pJeFVsUm5ORWgzVW5wUlVtMXBZbGRDV3ExQlVFbGZRVkpVU1VaQlExUlRwNjlGOStwYzNqR0pybDhJOHFjS1RGMHhBZ1k9In0=",
                        REACT_APP_VERCEL_ARTIFACTS_OWNER: "team_TOxk2fr9839Dkp21wIRWu0hZ",
                        REACT_APP_VERCEL_GIT_REPO_ID: "379041380",
                        REACT_APP_VERCEL_GIT_COMMIT_REF: "main",
                        REACT_APP_VERCEL_API_DC_ENDPOINT: "https://api-{{dc}}.vercel.com",
                        REACT_APP_AIRTABLE_API_URL: "https://api.airtable.com/v0/appPrSMXSVZZCwRJE/Donation%20Vault",
                        REACT_APP_AIRTABLE_API_KEY: "keybrKAJB28AYJpKq"
                    }).REACT_APP_CROWDIN_APIKEY
                }), function(e) {
                    var t = e.children,
                        n = Object(v.useState)(Ht),
                        a = Object(Q.a)(n, 2),
                        r = a[0],
                        s = a[1],
                        i = Object(v.useState)(Ht),
                        o = Object(Q.a)(i, 2),
                        c = o[0],
                        d = o[1],
                        u = Object(v.useState)([]),
                        p = Object(Q.a)(u, 2),
                        l = p[0],
                        b = p[1];
                    Object(v.useEffect)((function() {
                        var e = localStorage.getItem(Vt);
                        if (e) {
                            var t = function(e) {
                                return zt.filter((function(t) {
                                    return t.code === e
                                }))[0]
                            }(e);
                            s(t)
                        } else s(Ht)
                    }), []), Object(v.useEffect)((function() {
                        r && fetch("./i18n/".concat(r.code, ".json")).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            e.data.length < 1 ? b(["error"]) : b(e.data)
                        })).then((function() {
                            return d(r)
                        })).catch((function(e) {
                            console.error("ERROR"), console.error(e), b(["error"])
                        }))
                    }), [r, b]);
                    return Object(V.jsx)(Xt.Provider, {
                        value: {
                            selectedLanguage: r,
                            setSelectedLanguage: function(e) {
                                s(e), localStorage.setItem(Vt, e.code)
                            },
                            translatedLanguage: c,
                            setTranslatedLanguage: d
                        },
                        children: Object(V.jsx)(Ut.a.Provider, {
                            value: {
                                translations: l,
                                setTranslations: b
                            },
                            children: t
                        })
                    })
                }),
                Jt = n(267),
                Gt = n(265),
                Kt = n(261),
                Qt = n(73),
                Yt = n(205),
                Zt = n(208),
                $t = n(158),
                en = n(206),
                tn = n(207),
                nn = n(203),
                an = n(204),
                rn = Object(Qt.a)({
                    devTools: !1,
                    reducer: {
                        farms: Yt.a,
                        pools: $t.a,
                        croxPools: Zt.a,
                        dualFarms: en.a,
                        croxmasPools: tn.a,
                        grandPools: nn.a,
                        rastaFarms: an.a
                    }
                }),
                sn = function(e) {
                    var t = e.children,
                        n = Object(Ie.a)(),
                        a = parseInt("56");
                    return Object(V.jsx)(It.a, {
                        store: rn,
                        children: Object(V.jsx)(Jt.b, {
                            children: Object(V.jsx)(Wt, {
                                children: Object(V.jsx)(F.b, {
                                    chainId: a,
                                    connectors: {
                                        walletconnect: {
                                            rpcUrl: n
                                        },
                                        bsc: Lt
                                    },
                                    children: Object(V.jsx)(Gt.b, {
                                        children: Object(V.jsx)(Kt.b, {
                                            children: Object(V.jsx)(E.v, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            g.a.render(Object(V.jsx)(B.a.StrictMode, {
                children: Object(V.jsx)(sn, {
                    children: Object(V.jsx)(Mt, {})
                })
            }), document.getElementById("root"))
        },
        122: function(e, t, n) {
            "use strict";
            var a = n(205);
            n.d(t, "h", (function() {
                return a.c
            })), n.d(t, "g", (function() {
                return a.b
            }));
            var r = n(204);
            n.d(t, "l", (function() {
                return r.c
            })), n.d(t, "k", (function() {
                return r.b
            }));
            var s = n(206);
            n.d(t, "f", (function() {
                return s.c
            })), n.d(t, "e", (function() {
                return s.b
            }));
            var i = n(207);
            n.d(t, "c", (function() {
                return i.b
            })), n.d(t, "d", (function() {
                return i.c
            }));
            var o = n(203);
            n.d(t, "i", (function() {
                return o.b
            })), n.d(t, "j", (function() {
                return o.c
            }));
            var c = n(208);
            n.d(t, "b", (function() {
                return c.c
            })), n.d(t, "a", (function() {
                return c.b
            }));
            var d = n(158);
            n.d(t, "m", (function() {
                return d.b
            })), n.d(t, "n", (function() {
                return d.c
            })), n.d(t, "o", (function() {
                return d.d
            })), n.d(t, "p", (function() {
                return d.e
            }))
        },
        123: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(261);
            t.a = function() {
                var e = Object(a.useContext)(r.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        158: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return F
            })), n.d(t, "c", (function() {
                return E
            })), n.d(t, "e", (function() {
                return P
            })), n.d(t, "d", (function() {
                return _
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(28),
                o = n(14),
                c = n(73),
                d = n(72),
                u = n(80),
                p = n(353),
                l = n(32),
                b = n(8),
                y = n(22),
                f = n(39),
                m = n(95),
                x = n(3),
                k = n.n(x),
                w = d.a.filter((function(e) {
                    return e.lpSymbol !== b.a.BNB
                })),
                h = d.a.filter((function(e) {
                    return e.lpSymbol === b.a.BNB
                })),
                T = d.a.filter((function(e) {
                    return 0 !== e.pid
                })),
                j = Object(m.b)(),
                O = new j.eth.Contract(u, Object(f.d)()),
                A = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, e.tokenAddresses[56]]
                                        }
                                    })), e.next = 3, Object(y.a)(l, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", w.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(i.a)({}, t.pid, new k.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, c, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: e.lpSymbol,
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(l, n);
                                case 3:
                                    return a = e.sent, s = w.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(i.a)({}, t.pid, new k.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, j.eth.getBalance(t);
                                case 7:
                                    return c = e.sent, d = h.reduce((function(e, t) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(i.a)({}, t.pid, new k.a(c).toJSON()))
                                    }), {}), e.abrupt("return", Object(o.a)(Object(o.a)({}, s), d));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, c, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = T.map((function(e) {
                                        return {
                                            address: e.tokenAddresses[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(p, n);
                                case 3:
                                    return a = e.sent, s = T.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(i.a)({}, t.pid, new k.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, O.methods.userInfo("0", t).call();
                                case 7:
                                    return c = e.sent, d = c.amount, e.abrupt("return", Object(o.a)(Object(o.a)({}, s), {}, {
                                        0: new k.a(d).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, c;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = T.map((function(e) {
                                        return {
                                            address: e.tokenAddresses[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(p, n);
                                case 3:
                                    return a = e.sent, s = T.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(i.a)({}, t.pid, new k.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, O.methods.pendingCrox("0", t).call();
                                case 7:
                                    return c = e.sent, e.abrupt("return", Object(o.a)(Object(o.a)({}, s), {}, {
                                        0: new k.a(c).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = Object(c.b)({
                    name: "Pools",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(o.a)(Object(o.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                r = n.value,
                                s = n.sousId,
                                c = e.data.findIndex((function(e) {
                                    return e.sousId === s
                                }));
                            e.data[c] = Object(o.a)(Object(o.a)({}, e.data[c]), {}, {
                                userData: Object(o.a)(Object(o.a)({}, e.data[c].userData), {}, Object(i.a)({}, a, r))
                            })
                        }
                    }
                }),
                D = g.actions,
                C = (D.setPoolsPublicData, D.setPoolsUserData, D.updatePoolsUserData),
                F = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, A(t);
                                    case 2:
                                        s = n.sent, a(C({
                                            sousId: e,
                                            field: "allowance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                E = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, v(t);
                                    case 2:
                                        s = n.sent, a(C({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                P = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, B(t);
                                    case 2:
                                        s = n.sent, a(C({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                _ = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        s = n.sent, a(C({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = g.reducer
        },
        182: function(e, t, n) {
            "use strict";
            var a = n(581),
                r = n.n(a),
                s = [" https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed.binance.org"];
            t.a = function() {
                var e = r()(0, s.length - 1);
                return s[e]
            }
        },
        185: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(0),
                r = {
                    translations: [],
                    setTranslations: function() {}
                },
                s = Object(a.createContext)(r)
        },
        203: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return F
            })), n.d(t, "c", (function() {
                return E
            }));
            for (var a = n(4), r = n.n(a), s = n(10), i = n(14), o = n(20), c = n(73), d = n(70), u = n(13), p = n(3), l = n.n(p), b = n(32), y = n(210), f = n(22), m = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(d.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, o, c, d, p, m;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return t.lpAddresses[56], n = t.poolAddress[56], a = t.tokenAddresses[56], s = [{
                                                            address: a,
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }], e.next = 6, Object(f.a)(b, s);
                                                    case 6:
                                                        return o = e.sent, c = Object(u.a)(o, 1), d = c[0], e.next = 11, Object(f.a)(y, []);
                                                    case 11:
                                                        return p = e.sent, m = Object(u.a)(p, 1), m[0], e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            lpBalance: new l.a(d)
                                                        }));
                                                    case 15:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), x = m, k = n(74), w = [], h = 0; h < d.a.length; h++) d.a[h].active && w.push(h);
            for (var T = 0; T < d.a.length; T++) d.a[T].active || w.push(T);
            var j = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.tokenAddresses[56],
                                            name: "allowance",
                                            params: [t, e.poolAddress[56]]
                                        }
                                    })), e.next = 3, Object(f.a)(b, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.tokenAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(b, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(k, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(f.a)(y, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new l.a(e[0]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < w.length; p++) u[w[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(y, n);
                                case 3:
                                    return a = e.sent, s = Object(o.a)(a).map((function(e) {
                                        return e[0].map((function(e) {
                                            return parseInt(e._hex)
                                        }))
                                    })), i = Object(o.a)(s), e.abrupt("return", i[0]);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = {
                    data: Object(o.a)(d.a)
                },
                S = Object(c.b)({
                    name: "GrandPools",
                    initialState: B,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                g = S.actions,
                D = g.setFarmsPublicData,
                C = g.setFarmUserData,
                F = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x();
                                    case 2:
                                        n = e.sent, t(D(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                E = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, c, d;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, j(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, O(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, A(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, v(e);
                                    case 11:
                                        c = t.sent, d = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: Object(o.a)(c)
                                            }
                                        })), n(C({
                                            arrayOfUserDataObjects: d
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = S.reducer
        },
        204: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return U
            })), n.d(t, "b", (function() {
                return H
            }));
            var a = n(4),
                r = n.n(a),
                s = n(13),
                i = n(10),
                o = n(14),
                c = n(73),
                d = n(1141),
                u = n(95),
                p = {
                    97: "0x35b1EF3FF9763F72C11e9f08B471D0b6b5A7515D",
                    56: "0xec89Be665c851FfBAe2a8Ded03080F3E64116539"
                },
                l = {
                    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                    97: "0x35be5ca7917442ed5d2d4cc56ec9988dd158513e"
                },
                b = function(e) {
                    return e[56], e[56]
                },
                y = function() {
                    return b(p)
                },
                f = n(583),
                m = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, s, i, o, c, p, y;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(u.b)(), s = new a.eth.Contract(f, b(l)), i = new d.a(t), o = n.map((function(e) {
                                        return [e.address.toLowerCase(), i.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, s.methods.aggregate(o).call();
                                case 6:
                                    return c = e.sent, p = c.returnData, y = p.map((function(e, t) {
                                        return i.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", y);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = m,
                k = n(32),
                w = n(359),
                h = n(110),
                T = n(3),
                j = n.n(T),
                O = (n(379), function(e) {
                    return 27 === e ? 8 : 18
                }),
                A = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(t.map(function() {
                                        var e = Object(i.a)(r.a.mark((function e(t) {
                                            var n, a, i, c, d, u, p, l, f, m, w, T, A, v, B, S, g, D, C, F, E;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = b(t.lpAddresses), a = [{
                                                            address: b(t.tokenAddresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: b(t.quoteTokenAdresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [y()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: b(t.tokenAddresses),
                                                            name: "decimals"
                                                        }, {
                                                            address: b(t.quoteTokenAdresses),
                                                            name: "decimals"
                                                        }], e.next = 4, x(k, a);
                                                    case 4:
                                                        return i = e.sent, c = Object(s.a)(i, 6), d = c[0], u = c[1], p = c[2], l = c[3], f = c[4], m = c[5], (w = new j.a(p).div(new j.a(l))).isZero() && (w = new j.a(1)), T = new j.a(u).div(new j.a(10).pow(18)).times(new j.a(2)).times(w), A = new j.a(p).div(new j.a(10).pow(O(t.pid))), v = new j.a(d).div(new j.a(10).pow(f)).times(w), B = new j.a(u).div(new j.a(10).pow(m)).times(w), e.next = 20, x(h, [{
                                                            address: y(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: y(),
                                                            name: "totalAllocPoint"
                                                        }]);
                                                    case 20:
                                                        return S = e.sent, g = Object(s.a)(S, 2), D = g[0], C = g[1], F = new j.a(D.allocPoint._hex), E = F.div(new j.a(C)), e.abrupt("return", Object(o.a)(Object(o.a)({}, t), {}, {
                                                            tokenAmount: v.toJSON(),
                                                            quoteTokenAmount: B.toJSON(),
                                                            lpTotalInQuoteToken: T.toJSON(),
                                                            tokenPriceVsQuote: B.div(v).toJSON(),
                                                            poolWeight: E.toJSON(),
                                                            multiplier: "".concat(F.div(10).toString(), "X"),
                                                            singleTokenAmount: A.toJSON(),
                                                            depositFee: D.depositFeeBP / 100
                                                        }));
                                                    case 27:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = A,
                B = n(8),
                S = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(t.map(function() {
                                        var e = Object(i.a)(r.a.mark((function e(t) {
                                            var n, a, i, c, d, u, p, l, b, f, m, w, T, A, v, S, g, D, C, F, E, P, _;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[56], a = [{
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [t.tokenAddresses[56]]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [y()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: n,
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 4, x(k, a);
                                                    case 4:
                                                        return i = e.sent, c = Object(s.a)(i, 6), d = c[0], u = c[1], p = c[2], l = c[3], b = c[4], f = c[5], t.isTokenOnly ? (m = new j.a(p).div(new j.a(10).pow(b)), T = t.tokenSymbol === B.a.BUSD && t.quoteTokenSymbol === B.a.BUSD ? new j.a(1) : new j.a(null === t || void 0 === t ? void 0 : t.tokenPrice), w = m.times(T)) : (A = new j.a(p).div(new j.a(l)), w = new j.a(u).div(new j.a(10).pow(18)).times(new j.a(2)).times(A), m = new j.a(d).div(new j.a(10).pow(b)).times(A), v = new j.a(u).div(new j.a(10).pow(f)).times(A), T = m.comparedTo(0) > 0 ? v.div(m) : new j.a(u).div(new j.a(d))), S = new j.a(p).div(new j.a(10).pow(O(t.pid))), e.next = 16, x(h, [{
                                                            address: y(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: y(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: y(),
                                                            name: "rastaPerBlock"
                                                        }]);
                                                    case 16:
                                                        return g = e.sent, D = Object(s.a)(g, 3), C = D[0], F = D[1], E = D[2], P = new j.a(C.allocPoint._hex), _ = P.div(new j.a(F)), e.abrupt("return", Object(o.a)(Object(o.a)({}, t), {}, {
                                                            tokenDecimals: b[0],
                                                            tokenAmount: m.toJSON(),
                                                            lpTotalSupply: new j.a(p),
                                                            lpTotalInQuoteToken: w.toJSON(),
                                                            tokenPriceVsQuote: T.toJSON(),
                                                            poolWeight: _.toNumber(),
                                                            multiplier: "".concat(P.div(10).toString(), "X"),
                                                            depositFee: C.depositFeeBP / 100,
                                                            rastaPerBlock: new j.a(E).toNumber(),
                                                            singleTokenAmount: S.toJSON()
                                                        }));
                                                    case 24:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = S,
                D = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, s, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = y(), s = n.map((function(e) {
                                        return {
                                            address: b(e.lpAddresses),
                                            name: "allowance",
                                            params: [t, a]
                                        }
                                    })), e.next = 4, x(k, s);
                                case 4:
                                    return i = e.sent, o = i.map((function(e) {
                                        return new j.a(e).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.map((function(e) {
                                        return {
                                            address: b(e.lpAddresses),
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, x(k, a);
                                case 3:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new j.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, s, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = y(), s = n.map((function(e) {
                                        return {
                                            address: a,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, x(h, s);
                                case 4:
                                    return i = e.sent, o = i.map((function(e) {
                                        return new j.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(i.a)(r.a.mark((function e(t, n) {
                        var a, s, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = y(), s = n.map((function(e) {
                                        return {
                                            address: a,
                                            name: "pendingRasta",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, x(h, s);
                                case 4:
                                    return i = e.sent, o = i.map((function(e) {
                                        return new j.a(e).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = n(11),
                _ = {
                    data: [].concat([])
                },
                N = Object(c.b)({
                    name: "RastaFarms",
                    initialState: _,
                    reducers: {
                        setRastaFarmsPublicData: function(e, t) {
                            t.payload.forEach((function(t, n) {
                                e.data[n] = Object(o.a)(Object(o.a)({}, e.data[n]), t)
                            }))
                        },
                        setRastaFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(o.a)(Object(o.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                R = N.actions,
                M = R.setRastaFarmsPublicData,
                L = R.setRastaFarmUserData,
                I = function() {
                    var e = Object(i.a)(r.a.mark((function e(t) {
                        var n, a, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x(k, [{
                                        address: t,
                                        name: "symbol"
                                    }]);
                                case 2:
                                    return n = e.sent, a = Object(s.a)(n, 1), i = a[0], e.abrupt("return", i[0]);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var t, n, a, o, c, d, u, p, l, b, f, m, k, T, j;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = [], n = [], a = [], [], e.next = 6, x(h, [{
                                        address: y(),
                                        name: "poolLength"
                                    }]);
                                case 6:
                                    for (o = e.sent, c = Object(s.a)(o, 1), d = c[0], u = 0; u < parseInt(d[0]._hex); u++) p = x(h, [{
                                        address: y(),
                                        name: "poolInfo",
                                        params: [u]
                                    }]), t.push(p);
                                    return e.next = 12, Promise.all(t);
                                case 12:
                                    return l = e.sent, b = l.map((function(e) {
                                        return e[0]
                                    })), f = "", m = b.map(function() {
                                        var e = Object(i.a)(r.a.mark((function e(t, i) {
                                            var o, c, d, u, p, l, b, y, m, k, h, T, j, O, A, v;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, x(w, [{
                                                            address: t.lpToken,
                                                            name: "symbol"
                                                        }, {
                                                            address: t.lpToken,
                                                            name: "decimals"
                                                        }]);
                                                    case 2:
                                                        if (o = e.sent, c = Object(s.a)(o, 2), d = c[0], u = c[1], p = "", l = "", b = "", y = "", m = "", k = "", "RLP" !== d[0].toUpperCase() && "CAKE-LP" !== d[0].toUpperCase()) {
                                                            e.next = 36;
                                                            break
                                                        }
                                                        return e.next = 15, x(w, [{
                                                            address: t.lpToken,
                                                            name: "token0"
                                                        }, {
                                                            address: t.lpToken,
                                                            name: "token1"
                                                        }]);
                                                    case 15:
                                                        return h = e.sent, T = Object(s.a)(h, 2), j = T[0], O = T[1], e.next = 21, I(j[0]);
                                                    case 21:
                                                        return A = e.sent, e.next = 24, I(O[0]);
                                                    case 24:
                                                        v = e.sent, m = "WBNB" === A ? "BNB" : A.toUpperCase(), k = "WBNB" === v ? "BNB" : v.toUpperCase(), f = "".concat(m, "-").concat(k, " RLP"), "CAKE-LP" === d[0].toUpperCase() && (f = "".concat(m, "-").concat(k, " CAKE LP")), p = "MRASTA" === k || "RASTA" === m && "BUSD" === k ? m : k, l = "MRASTA" === k || "RASTA" === m && "BUSD" === k ? j[0] : O[0], y = "RASTA" === m && "BUSD" === k ? k : m, b = "RASTA" === m && "BUSD" === k ? O[0] : j[0], n.push({
                                                            pid: i,
                                                            lpSymbol: f,
                                                            lpAddresses: {
                                                                97: "",
                                                                56: t.lpToken
                                                            },
                                                            tokenSymbol: p,
                                                            tokenAddresses: {
                                                                97: "",
                                                                56: l
                                                            },
                                                            quoteTokenSymbol: y,
                                                            quoteTokenAdresses: {
                                                                97: "",
                                                                56: b
                                                            },
                                                            tokenDecimals: u[0]
                                                        }), e.next = 42;
                                                        break;
                                                    case 36:
                                                        f = "WBNB" === d[0].toUpperCase() ? "BNB" : d[0].toUpperCase(), p = f, "RASTA" === d[0].toUpperCase() ? (y = "RASTA", b = P.a.rasta[56]) : "ETH" === d[0].toUpperCase() ? (y = "ETH", b = P.a.eth[56]) : "BUSD" === d[0].toUpperCase() || "USDT" === d[0].toUpperCase() || "DAI" === d[0].toUpperCase() ? (y = "BUSD", b = P.a.busd[56]) : (y = "BNB", b = P.a.wbnb[56]), y = p, l = t.lpToken, a.push({
                                                            pid: i,
                                                            lpSymbol: f,
                                                            lpAddresses: {
                                                                97: "",
                                                                56: t.lpToken
                                                            },
                                                            tokenSymbol: p,
                                                            tokenAddresses: {
                                                                97: "",
                                                                56: l
                                                            },
                                                            quoteTokenSymbol: y,
                                                            quoteTokenAdresses: {
                                                                97: "",
                                                                56: b
                                                            },
                                                            tokenDecimals: u[0]
                                                        });
                                                    case 42:
                                                        return e.abrupt("return", [n, a]);
                                                    case 43:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), e.next = 18, Promise.all(m);
                                case 18:
                                    return k = e.sent, T = k[k.length - 1][0], j = k[k.length - 1][1], T.sort((function(e, t) {
                                        return e.pid - t.pid
                                    })), j.sort((function(e, t) {
                                        return e.pid - t.pid
                                    })), e.abrupt("return", [T, j]);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t) {
                            var n, a, i, o, c, d, u;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, q();
                                    case 2:
                                        return n = e.sent, a = Object(s.a)(n, 2), i = a[0], o = a[1], e.next = 8, v(i);
                                    case 8:
                                        return c = e.sent, e.next = 11, g(o);
                                    case 11:
                                        d = e.sent, u = c.concat(d), t(M(u));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                H = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n) {
                            var a, i, o, c, d, u, p, l, b, y;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, q();
                                    case 2:
                                        return a = t.sent, i = Object(s.a)(a, 2), o = i[0], c = i[1], d = o.concat(c), t.next = 9, D(e, d);
                                    case 9:
                                        return u = t.sent, t.next = 12, C(e, d);
                                    case 12:
                                        return p = t.sent, t.next = 15, F(e, d);
                                    case 15:
                                        return l = t.sent, t.next = 18, E(e, d);
                                    case 18:
                                        b = t.sent, y = u.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: u[t],
                                                tokenBalance: p[t],
                                                stakedBalance: l[t],
                                                earnings: b[t]
                                            }
                                        })), n(L({
                                            arrayOfUserDataObjects: y
                                        }));
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = N.reducer
        },
        205: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return E
            })), n.d(t, "b", (function() {
                return P
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(14),
                o = n(20),
                c = n(73),
                d = n(99),
                u = n(13),
                p = n(3),
                l = n.n(p),
                b = n(32),
                y = n(80),
                f = n(22),
                m = n(39),
                x = n(8),
                k = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(d.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, o, c, d, p, k, w, h, T, j, O, A, v, B, S, g, D, C, F, E, P;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[56], a = [{
                                                            address: t.tokenAddresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.isTokenOnly ? t.tokenAddresses[56] : n,
                                                            name: "balanceOf",
                                                            params: [Object(m.d)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [Object(m.d)()]
                                                        }, {
                                                            address: t.tokenAddresses[56],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 4, Object(f.a)(b, a);
                                                    case 4:
                                                        return s = e.sent, o = Object(u.a)(s, 7), c = o[0], d = o[1], p = o[2], k = o[3], w = o[4], h = o[5], T = o[6], t.isTokenOnly ? (j = new l.a(p).div(new l.a(10).pow(h)), A = t.tokenSymbol === x.a.BUSD && t.quoteTokenSymbol === x.a.BUSD ? new l.a(1) : new l.a(d).div(new l.a(c)), O = j.times(A)) : (v = new l.a(p).div(new l.a(k)), O = new l.a(d).div(new l.a(10).pow(18)).times(new l.a(2)).times(v), j = new l.a(c).div(new l.a(10).pow(h)).times(v), B = new l.a(d).div(new l.a(10).pow(T)).times(v), A = j.comparedTo(0) > 0 ? B.div(j) : new l.a(d).div(new l.a(c))), e.next = 16, Object(f.a)(y, [{
                                                            address: Object(m.d)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "croxPerBlock"
                                                        }]);
                                                    case 16:
                                                        return S = e.sent, g = Object(u.a)(S, 3), D = g[0], C = g[1], F = g[2], E = new l.a(D.allocPoint._hex), P = E.div(new l.a(C)), e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            tokenAmount: j.toJSON(),
                                                            lpTotalInQuoteToken: O.toJSON(),
                                                            tokenPriceVsQuote: A.toJSON(),
                                                            poolWeight: P.toNumber(),
                                                            multiplier: "".concat(E.div(10).toString(), "X"),
                                                            depositFeeBP: D.depositFeeBP,
                                                            harvestInterval: parseInt(D.harvestInterval._hex),
                                                            croxPerBlock: new l.a(F).toNumber(),
                                                            lpBalance: new l.a(w).div(new l.a(10).pow(18)).toString()
                                                        }));
                                                    case 24:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
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
                w = k,
                h = n(522),
                T = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(f.a)(b, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[3]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(b, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.f)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pidv1 || 50, t]
                                        }
                                    })), e.next = 4, Object(f.a)(h, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingCrox",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = {
                    data: Object(o.a)(d.a)
                },
                g = Object(c.b)({
                    name: "Farms",
                    initialState: S,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                D = g.actions,
                C = D.setFarmsPublicData,
                F = D.setFarmUserData,
                E = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, w();
                                    case 2:
                                        n = e.sent, t(C(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                P = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, o, c, d, u;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, T(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, O(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, A(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, v(e);
                                    case 11:
                                        return o = t.sent, t.next = 14, B(e);
                                    case 14:
                                        return c = t.sent, t.next = 17, j(e);
                                    case 17:
                                        d = t.sent, u = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: c[t],
                                                prevStakedBalance: o[t],
                                                nextHarvestUntil: d[t]
                                            }
                                        })), n(F({
                                            arrayOfUserDataObjects: u
                                        }));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = g.reducer
        },
        206: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return R
            })), n.d(t, "b", (function() {
                return M
            }));
            for (var a = n(4), r = n.n(a), s = n(10), i = n(14), o = n(20), c = n(73), d = n(55), u = n(13), p = n(157), l = n.n(p), b = n(3), y = n.n(b), f = n(32), m = n(74), x = n(81), k = n(22), w = n(8), h = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(d.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, o, c, d, p, b, h, T, j, O, A, v, B, S, g, D, C, F, E, P, _, N, R, M, L, I, q, U, H, z, V;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[56], a = t.poolAddress[56], s = [{
                                                            address: t.tokenAddresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [a]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [a]
                                                        }, {
                                                            address: t.tokenAddresses[56],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 5, Object(k.a)(f, s);
                                                    case 5:
                                                        return o = e.sent, c = Object(u.a)(o, 7), d = c[0], p = c[1], b = c[2], h = c[3], T = c[4], j = c[5], O = c[6], t.isTokenOnly ? (A = new y.a(b).div(new y.a(10).pow(j)), B = t.tokenSymbol === w.a.BUSD && t.quoteTokenSymbol === w.a.BUSD ? new y.a(1) : new y.a(p).div(new y.a(d)), v = A.times(B)) : (S = new y.a(b).div(new y.a(h)), v = new y.a(p).div(new y.a(10).pow(18)).times(new y.a(2)).times(S), A = new y.a(d).div(new y.a(10).pow(j)).times(S), g = new y.a(p).div(new y.a(10).pow(O)).times(S), B = A.comparedTo(0) > 0 ? g.div(A) : new y.a(p).div(new y.a(d))), e.next = 17, Object(k.a)(t.active ? x : m, [{
                                                            address: a,
                                                            name: "depositFee"
                                                        }, {
                                                            address: a,
                                                            name: "penaltyFee"
                                                        }, {
                                                            address: a,
                                                            name: "rewardPerBlock"
                                                        }, {
                                                            address: a,
                                                            name: "secRewardPerBlock"
                                                        }, {
                                                            address: a,
                                                            name: "startBlock"
                                                        }, {
                                                            address: a,
                                                            name: "bonusEndBlock"
                                                        }, {
                                                            address: a,
                                                            name: "lockPeriod"
                                                        }, {
                                                            address: a,
                                                            name: "stakedTokenLimit"
                                                        }]);
                                                    case 17:
                                                        if (D = e.sent, C = Object(u.a)(D, 8), F = C[0], E = C[1], P = C[2], _ = C[3], N = C[4], R = C[5], M = C[6], L = C[7], I = 0, e.prev = 28, !t.cgProjectID) {
                                                            e.next = 37;
                                                            break
                                                        }
                                                        return e.next = 32, l.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t.cgProjectID, "&vs_currencies=usd"));
                                                    case 32:
                                                        q = e.sent, U = q.data, I = U[t.cgProjectID].usd, e.next = 42;
                                                        break;
                                                    case 37:
                                                        return e.next = 39, l.a.get("https://api.pancakeswap.info/api/v2/tokens/".concat(t.tokenAddresses[56]));
                                                    case 39:
                                                        H = e.sent, z = H.data, I = Number(z.data.price);
                                                    case 42:
                                                        if (!t.cmcId) {
                                                            e.next = 46;
                                                            break
                                                        }
                                                        return V = "?aux=num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_active,is_fiat&id=".concat(t.cmcId), e.next = 46, l.a.get("https://powerful-beach-55472.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest".concat(V), {
                                                            headers: {
                                                                "X-CMC_PRO_API_KEY": "45c33548-cb4e-4f8f-8c34-bba4b92f9b50"
                                                            }
                                                        }).then((function(e) {
                                                            I = e.data.data[t.cmcId].quote.USD.price
                                                        }));
                                                    case 46:
                                                        e.next = 51;
                                                        break;
                                                    case 48:
                                                        e.prev = 48, e.t0 = e.catch(28), I = t.tokenPrice;
                                                    case 51:
                                                        return e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            tokenAmount: A.toJSON(),
                                                            lpTotalInQuoteToken: v.toJSON(),
                                                            tokenPriceVsQuote: B.toJSON(),
                                                            depositFeeBP: parseInt(F[0]._hex),
                                                            penaltyFeeBP: parseInt(E[0]._hex),
                                                            startBlock: parseInt(N[0]._hex),
                                                            bonusEndBlock: parseInt(R[0]._hex),
                                                            lockPeriod: parseInt(M[0]._hex),
                                                            rewardPerBlock: new y.a(P).toNumber(),
                                                            secRewardPerBlock: new y.a(_).toNumber(),
                                                            lpBalance: new y.a(T).div(new y.a(10).pow(18)).toString(),
                                                            tokenPrice: 0 === I ? t.tokenPrice : I,
                                                            maxStakeLimit: parseInt(L[0]._hex)
                                                        }));
                                                    case 52:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [28, 48]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), T = h, j = [], O = 0; O < d.a.length; O++) d.a[O].active && j.push(O);
            for (var A = 0; A < d.a.length; A++) d.a[A].active || j.push(A);
            var v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, e.poolAddress[56]]
                                        }
                                    })), e.next = 3, Object(k.a)(f, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new y.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "redeemableAmount",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e[0]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e.length > 5 ? e[5]._hex : e[3]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(f, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new y.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e[0]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return [parseInt(e[0]._hex), parseInt(e[1]._hex)]
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = [c[p][0], c[p][1]];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = {
                    data: Object(o.a)(d.a)
                },
                E = Object(c.b)({
                    name: "DualFarms",
                    initialState: F,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                P = E.actions,
                _ = P.setFarmsPublicData,
                N = P.setFarmUserData,
                R = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T();
                                    case 2:
                                        n = e.sent, t(_(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                M = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, o, c, d, u;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, v(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, g(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, D(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, C(e);
                                    case 11:
                                        return o = t.sent, t.next = 14, S(e);
                                    case 14:
                                        return c = t.sent, t.next = 17, B(e);
                                    case 17:
                                        d = t.sent, u = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: [o[t][0], o[t][1]],
                                                nextHarvestUntil: c[t],
                                                redeemable: d[t]
                                            }
                                        })), n(N({
                                            arrayOfUserDataObjects: u
                                        }));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = E.reducer
        },
        207: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return R
            })), n.d(t, "c", (function() {
                return M
            }));
            for (var a = n(4), r = n.n(a), s = n(10), i = n(14), o = n(20), c = n(73), d = n(56), u = n(13), p = n(157), l = n.n(p), b = n(3), y = n.n(b), f = n(32), m = n(74), x = n(81), k = n(22), w = n(8), h = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(d.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, o, c, d, p, b, h, T, j, O, A, v, B, S, g, D, C, F, E, P, _, N, R, M, L, I, q, U, H, z;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = t.lpAddresses[56], s = t.poolAddress[56], o = [{
                                                            address: t.tokenAddresses[56],
                                                            name: "balanceOf",
                                                            params: [a]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [a]
                                                        }, {
                                                            address: a,
                                                            name: "balanceOf",
                                                            params: [s]
                                                        }, {
                                                            address: a,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: a,
                                                            name: "balanceOf",
                                                            params: [s]
                                                        }, {
                                                            address: t.tokenAddresses[56],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 5, Object(k.a)(f, o);
                                                    case 5:
                                                        return c = e.sent, d = Object(u.a)(c, 7), p = d[0], b = d[1], h = d[2], T = d[3], j = d[4], O = d[5], A = d[6], t.isTokenOnly ? (v = new y.a(h).div(new y.a(10).pow(O)), S = t.tokenSymbol === w.a.BUSD && t.quoteTokenSymbol === w.a.BUSD ? new y.a(1) : new y.a(b).div(new y.a(p)), B = v.times(S)) : (g = new y.a(h).div(new y.a(T)), B = new y.a(b).div(new y.a(10).pow(18)).times(new y.a(2)).times(g), v = new y.a(p).div(new y.a(10).pow(O)).times(g), D = new y.a(b).div(new y.a(10).pow(A)).times(g), S = v.comparedTo(0) > 0 ? D.div(v) : new y.a(b).div(new y.a(p))), e.next = 17, Object(k.a)(t.active ? x : m, [{
                                                            address: s,
                                                            name: "depositFee"
                                                        }, {
                                                            address: s,
                                                            name: "penaltyFee"
                                                        }, {
                                                            address: s,
                                                            name: "rewardPerBlock"
                                                        }, {
                                                            address: s,
                                                            name: "secRewardPerBlock"
                                                        }, {
                                                            address: s,
                                                            name: "startBlock"
                                                        }, {
                                                            address: s,
                                                            name: "bonusEndBlock"
                                                        }, {
                                                            address: s,
                                                            name: "lockPeriod"
                                                        }]);
                                                    case 17:
                                                        if (C = e.sent, F = Object(u.a)(C, 7), E = F[0], P = F[1], _ = F[2], N = F[3], R = F[4], M = F[5], L = F[6], e.prev = 26, !t.cgProjectID) {
                                                            e.next = 35;
                                                            break
                                                        }
                                                        return e.next = 30, l.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t.cgProjectID, "&vs_currencies=usd"));
                                                    case 30:
                                                        q = e.sent, U = q.data, I = U[t.cgProjectID].usd, e.next = 40;
                                                        break;
                                                    case 35:
                                                        return e.next = 37, l.a.get("https://api.pancakeswap.info/api/v2/tokens/".concat(t.tokenAddresses[56]));
                                                    case 37:
                                                        H = e.sent, z = H.data, I = Number(z.data.price);
                                                    case 40:
                                                        e.next = 45;
                                                        break;
                                                    case 42:
                                                        e.prev = 42, e.t0 = e.catch(26), I = t.tokenPrice;
                                                    case 45:
                                                        return e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            tokenAmount: v.toJSON(),
                                                            lpTotalInQuoteToken: B.toJSON(),
                                                            tokenPriceVsQuote: S.toJSON(),
                                                            depositFeeBP: parseInt(E[0]._hex),
                                                            penaltyFeeBP: parseInt(P[0]._hex),
                                                            startBlock: parseInt(R[0]._hex),
                                                            bonusEndBlock: parseInt(M[0]._hex),
                                                            lockPeriod: parseInt(L[0]._hex),
                                                            rewardPerBlock: new y.a(_).toNumber(),
                                                            secRewardPerBlock: new y.a(N).toNumber(),
                                                            lpBalance: new y.a(j).div(new y.a(10).pow(null !== (n = t.lpTokenDecimal) && void 0 !== n ? n : 18)).toString(),
                                                            tokenPrice: 0 === I ? t.tokenPrice : I
                                                        }));
                                                    case 46:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [26, 42]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), T = h, j = [], O = 0; O < d.a.length; O++) d.a[O].active && j.push(O);
            for (var A = 0; A < d.a.length; A++) d.a[A].active || j.push(A);
            var v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, e.poolAddress[56]]
                                        }
                                    })), e.next = 3, Object(k.a)(f, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new y.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "redeemableAmount",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e[0]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e.length > 5 ? e[5]._hex : e[3]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(f, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new y.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return new y.a(e[0]._hex).toJSON()
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = c[p];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i, c, u, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.filter((function(e) {
                                        return !e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(k.a)(m, n);
                                case 3:
                                    return a = e.sent, s = d.a.filter((function(e) {
                                        return e.active
                                    })).map((function(e) {
                                        return {
                                            address: e.poolAddress[56],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 7, Object(k.a)(x, s);
                                case 7:
                                    for (i = e.sent, c = [].concat(Object(o.a)(i), Object(o.a)(a)).map((function(e) {
                                            return [parseInt(e[0]._hex), parseInt(e[1]._hex)]
                                        })), u = Object(o.a)(c), p = 0; p < j.length; p++) u[j[p]] = [c[p][0], c[p][1]];
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = {
                    data: Object(o.a)(d.a)
                },
                E = Object(c.b)({
                    name: "CroxmasPools",
                    initialState: F,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                P = E.actions,
                _ = P.setFarmsPublicData,
                N = P.setFarmUserData,
                R = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T();
                                    case 2:
                                        n = e.sent, t(_(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                M = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, o, c, d, u;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, v(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, g(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, D(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, C(e);
                                    case 11:
                                        return o = t.sent, t.next = 14, S(e);
                                    case 14:
                                        return c = t.sent, t.next = 17, B(e);
                                    case 17:
                                        d = t.sent, u = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: [o[t][0], o[t][1]],
                                                nextHarvestUntil: c[t],
                                                redeemable: d[t]
                                            }
                                        })), n(N({
                                            arrayOfUserDataObjects: u
                                        }));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = E.reducer
        },
        208: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return C
            })), n.d(t, "b", (function() {
                return F
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(14),
                o = n(20),
                c = n(73),
                d = n(72),
                u = n(13),
                p = n(3),
                l = n.n(p),
                b = n(32),
                y = n(80),
                f = n(22),
                m = n(39),
                x = n(8),
                k = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(d.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, o, c, d, p, k, w, h, T, j, O, A, v, B, S, g, D, C, F, E;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[56], a = [{
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [t.tokenAddresses[56]]
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [Object(m.d)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: n,
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[56],
                                                            name: "decimals"
                                                        }], e.next = 4, Object(f.a)(b, a);
                                                    case 4:
                                                        return s = e.sent, o = Object(u.a)(s, 6), c = o[0], d = o[1], p = o[2], k = o[3], w = o[4], h = o[5], t.isTokenOnly ? (T = new l.a(p).div(new l.a(10).pow(w)), O = t.tokenSymbol === x.a.BUSD && t.quoteTokenSymbol === x.a.BUSD ? new l.a(1) : new l.a(null === t || void 0 === t ? void 0 : t.tokenPrice), j = T.times(O)) : (A = new l.a(p).div(new l.a(k)), j = new l.a(d).div(new l.a(10).pow(18)).times(new l.a(2)).times(A), T = new l.a(c).div(new l.a(10).pow(w)).times(A), v = new l.a(d).div(new l.a(10).pow(h)).times(A), O = T.comparedTo(0) > 0 ? v.div(T) : new l.a(d).div(new l.a(c))), e.next = 15, Object(f.a)(y, [{
                                                            address: Object(m.d)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "croxPerBlock"
                                                        }]);
                                                    case 15:
                                                        return B = e.sent, S = Object(u.a)(B, 3), g = S[0], D = S[1], C = S[2], F = new l.a(g.allocPoint._hex), E = F.div(new l.a(D)), e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            tokenDecimals: w[0],
                                                            tokenAmount: T.toJSON(),
                                                            lpTotalSupply: new l.a(p),
                                                            lpTotalInQuoteToken: j.toJSON(),
                                                            tokenPriceVsQuote: O.toJSON(),
                                                            poolWeight: E.toNumber(),
                                                            multiplier: "".concat(F.div(10).toString(), "X"),
                                                            depositFeeBP: g.depositFeeBP,
                                                            harvestInterval: parseInt(g.harvestInterval._hex),
                                                            croxPerBlock: new l.a(C).toNumber()
                                                        }));
                                                    case 23:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
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
                w = k,
                h = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: e.lpAddresses[56],
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(f.a)(b, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = d.a.map((function(e) {
                                        return {
                                            address: e.lpAddresses[56],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(b, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[3]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = d.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingCrox",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = {
                    data: Object(o.a)(d.a)
                },
                B = Object(c.b)({
                    name: "CroxPools",
                    initialState: v,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                S = B.actions,
                g = S.setFarmsPublicData,
                D = S.setFarmUserData,
                C = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, w();
                                    case 2:
                                        n = e.sent, t(g(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                F = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, o, c, d;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, h(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, T(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, j(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, A(e);
                                    case 11:
                                        return o = t.sent, t.next = 14, O(e);
                                    case 14:
                                        c = t.sent, d = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: o[t],
                                                nextHarvestUntil: c[t]
                                            }
                                        })), n(D({
                                            arrayOfUserDataObjects: d
                                        }));
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = B.reducer
        },
        210: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolLimitPerUser","type":"uint256"}],"name":"NewPoolLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"index","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"transferFee","type":"uint16"}],"name":"NewStakedTokenTransferFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"NewWithdrawalInterval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"CROX_GRAND_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_WITHDRAWAL_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_TOKEN_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_index","type":"uint8"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"_stakedToken","type":"address"},{"internalType":"contract IBEP20[15]","name":"_rewardTokens","type":"address[15]"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256[15]","name":"_rewardPerBlocks","type":"uint256[15]"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint16","name":"_stakedTokenTransferFee","type":"uint16"},{"internalType":"uint256","name":"_withdrawalInterval","type":"uint256"},{"internalType":"address","name":"_admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardPerBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTokenTransferFee","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_rewardPerBlock","type":"uint256[]"},{"internalType":"uint8[]","name":"_index","type":"uint8[]"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferFee","type":"uint16"}],"name":"updateStakedTokenTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_interval","type":"uint256"}],"name":"updateWithdrawalInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        214: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n(3),
                r = n.n(a),
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = new r.a(e).dividedBy(new r.a(10).pow(t));
                    return n.toNumber()
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new r.a(10).pow(t)).toFixed()
                }
        },
        217: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(269),
                s = n(9),
                i = n(2);
            t.a = function(e) {
                var t = e.value,
                    n = e.decimals,
                    o = e.fontSize,
                    c = void 0 === o ? "20px" : o,
                    d = e.prefix,
                    u = e.kind,
                    p = e.color,
                    l = void 0 === p ? "textSubtle" : p,
                    b = Object(r.useCountUp)({
                        start: 0,
                        end: t,
                        duration: 1,
                        separator: ",",
                        decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3
                    }),
                    y = b.countUp,
                    f = b.update,
                    m = Object(a.useRef)(f);
                return Object(a.useEffect)((function() {
                    m.current(t)
                }), [t, m]), Object(i.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: u ? Object(i.jsxs)(i.Fragment, {
                        children: [Object(i.jsx)(s.A, {
                            fontSize: "20px",
                            color: l,
                            children: "Liquidity: "
                        }), Object(i.jsxs)(s.A, {
                            color: "primary",
                            fontSize: c,
                            style: {
                                marginLeft: "4px"
                            },
                            children: [d, y]
                        })]
                    }) : Object(i.jsxs)(s.A, {
                        color: l,
                        fontSize: c,
                        bold: !0,
                        children: [d, y]
                    })
                })
            }
        },
        22: function(e, t, n) {
            "use strict";
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(1141),
                o = n(95),
                c = n(582),
                d = n(39),
                u = function() {
                    var e = Object(s.a)(r.a.mark((function e(t, n) {
                        var a, s, u, p, l, b, y;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(o.b)(), s = new a.eth.Contract(c, Object(d.e)()), u = new i.a(t), p = n.map((function(e) {
                                        return [e.address.toLowerCase(), u.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, s.methods.aggregate(p).call();
                                case 6:
                                    return l = e.sent, b = l.returnData, y = b.map((function(e, t) {
                                        return u.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", y);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = u
        },
        256: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(6),
                s = n(267);
            t.a = function() {
                var e = Object(a.useContext)(s.a);
                return {
                    isDark: e.isDark,
                    toggleTheme: e.toggleTheme,
                    theme: Object(a.useContext)(r.a)
                }
            }
        },
        261: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(13),
                o = n(0),
                c = n.n(o),
                d = n(2),
                u = c.a.createContext({
                    slow: 0,
                    fast: 0
                }),
                p = function(e) {
                    var t = e.children,
                        n = Object(o.useState)(0),
                        a = Object(i.a)(n, 2),
                        c = a[0],
                        p = a[1],
                        l = Object(o.useState)(0),
                        b = Object(i.a)(l, 2),
                        y = b[0],
                        f = b[1];
                    return Object(o.useEffect)((function() {
                        var e = setInterval(Object(s.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(o.useEffect)((function() {
                        var e = setInterval(Object(s.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        p((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(d.jsx)(u.Provider, {
                        value: {
                            slow: c,
                            fast: y
                        },
                        children: t
                    })
                }
        },
        265: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(13),
                o = n(0),
                c = n.n(o),
                d = n(95),
                u = n(2),
                p = c.a.createContext(0),
                l = function(e) {
                    var t = e.children,
                        n = Object(o.useRef)(0),
                        a = Object(o.useState)(0),
                        c = Object(i.a)(a, 2),
                        l = c[0],
                        b = c[1];
                    return Object(o.useEffect)((function() {
                        var e = Object(d.b)(),
                            t = setInterval(Object(s.a)(r.a.mark((function t() {
                                var a;
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.eth.getBlockNumber();
                                        case 2:
                                            (a = t.sent) !== n.current && (n.current = a, b(a));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 6e3);
                        return function() {
                            return clearInterval(t)
                        }
                    }), []), Object(u.jsx)(p.Provider, {
                        value: l,
                        children: t
                    })
                }
        },
        267: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n(13),
                r = n(0),
                s = n.n(r),
                i = n(6),
                o = n(9),
                c = n(2),
                d = "IS_DARK",
                u = s.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                p = function(e) {
                    var t = e.children,
                        n = Object(r.useState)((function() {
                            var e = localStorage.getItem(d);
                            return !e || JSON.parse(e)
                        })),
                        s = Object(a.a)(n, 2),
                        p = s[0],
                        l = s[1];
                    return Object(c.jsx)(u.Provider, {
                        value: {
                            isDark: p,
                            toggleTheme: function() {
                                l((function(e) {
                                    return localStorage.setItem(d, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(c.jsx)(i.b, {
                            theme: p ? o.D : o.E,
                            children: t
                        })
                    })
                }
        },
        272: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')
        },
        273: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return w
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "b", (function() {
                return T
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(13),
                o = n(0),
                c = n(3),
                d = n.n(c),
                u = n(115),
                p = n(272),
                l = n(95),
                b = n(376),
                y = n(39),
                f = n(55),
                m = n(56),
                x = n(70),
                k = n(123),
                w = function() {
                    var e = Object(k.a)().slowRefresh,
                        t = Object(o.useState)(),
                        n = Object(i.a)(t, 2),
                        a = n[0],
                        c = n[1];
                    return Object(o.useEffect)((function() {
                        function e() {
                            return (e = Object(s.a)(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(l.a)(p, Object(y.a)()), e.next = 3, t.methods.totalSupply().call();
                                        case 3:
                                            n = e.sent, c(new d.a(n));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [e]), a
                },
                h = function() {
                    var e = Object(k.a)().slowRefresh,
                        t = Object(o.useState)(),
                        n = Object(i.a)(t, 2),
                        a = n[0],
                        c = n[1];
                    return Object(o.useEffect)((function() {
                        function e() {
                            return (e = Object(s.a)(r.a.mark((function e() {
                                var t, n, a, s, i, o, u, b;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            for (t = Object(l.a)(p, Object(y.a)()), (n = []).push(t.methods.balanceOf(Object(y.d)()).call()), a = 0; a < f.a.length; a++) n.push(t.methods.balanceOf(f.a[a].lpAddresses[56]).call());
                                            for (s = 0; s < m.a.length; s++) n.push(t.methods.balanceOf(m.a[s].poolAddress[56]).call());
                                            for (i = 0; i < x.a.length; i++) n.push(t.methods.balanceOf(x.a[i].poolAddress[56]).call());
                                            return e.next = 8, Promise.all(n);
                                        case 8:
                                            for (o = e.sent, u = new d.a(0), b = 0; b < o.length; b++) u = new d.a(u).plus(new d.a(o[b]));
                                            c(new d.a(u));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [e]), a
                },
                T = function(e) {
                    var t = Object(o.useState)(new d.a(0)),
                        n = Object(i.a)(t, 2),
                        a = n[0],
                        c = n[1],
                        u = Object(k.a)().slowRefresh;
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(l.a)(p, Object(y.a)()), e.next = 3, t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                        case 3:
                                            n = e.sent, c(new d.a(n));
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
                        e()
                    }), [e, u]), a
                };
            t.a = function(e) {
                var t = Object(o.useState)(new d.a(0)),
                    n = Object(i.a)(t, 2),
                    a = n[0],
                    c = n[1],
                    p = Object(u.m)(),
                    l = p.account,
                    y = p.ethereum,
                    f = Object(k.a)().fastRefresh;
                return Object(o.useEffect)((function() {
                    var t = function() {
                        var t = Object(s.a)(r.a.mark((function t() {
                            var n;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(b.c)(y, e, l);
                                    case 2:
                                        n = t.sent, c(new d.a(n));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    l && y && t()
                }), [l, y, e, f]), a
            }
        },
        32: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        353: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        359: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        374: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(185),
                s = /%(.*?)%/,
                i = function(e, t, n) {
                    var a = e.find((function(e) {
                        return e.data.stringId === t
                    }));
                    if (a) {
                        var r = a.data.text;
                        return r.includes("%") ? function(e, t) {
                            var n = s.exec(e)[0],
                                a = t.split(" ")[0];
                            return e.replace(n, a)
                        }(r, n) : r
                    }
                    return n
                };
            t.a = function() {
                var e = Object(a.useContext)(r.a).translations;
                return function(t, n) {
                    return "error" === e[0] ? n : e.length > 0 ? i(e, t, n) : n
                }
            }
        },
        375: function(e, t, n) {
            "use strict";
            var a, r, s = n(33),
                i = n(6),
                o = i.e.div(a || (a = Object(s.a)(["\n  margin: auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  width: 90%;\n  max-width: 1168px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n    margin: auto;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                c = Object(i.e)(o)(r || (r = Object(s.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 0px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 0px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 0px;\n    padding-bottom: 32px;\n  }\n  @media screen and (max-width: 1000px) {\n    width: 98%;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }));
            t.a = c
        },
        376: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "c", (function() {
                return p
            }));
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(125),
                o = n.n(i),
                c = n(32),
                d = function(e, t) {
                    return new(new o.a(e).eth.Contract)(c, t)
                },
                u = function() {
                    var e = Object(s.a)(r.a.mark((function e(t, n, a) {
                        var s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, t.methods.allowance(a, n.options.address).call();
                                case 3:
                                    return s = e.sent, e.abrupt("return", s);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", "0");
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(s.a)(r.a.mark((function e(t, n, a) {
                        var s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = d(t, n), e.prev = 1, e.next = 4, s.methods.balanceOf(a).call();
                                case 4:
                                    return i = e.sent, e.abrupt("return", i);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", "0");
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "c", (function() {
                return u
            }));
            var a = n(11),
                r = function() {
                    return a.a.cake[56]
                },
                s = function() {
                    return a.a.rastaMasterChef[56]
                },
                i = function() {
                    return a.a.masterChef[56]
                },
                o = function() {
                    return a.a.masterChefV1[56]
                },
                c = function() {
                    return a.a.mulltiCall[56]
                },
                d = function() {
                    return a.a.lottery[56]
                },
                u = function() {
                    return a.a.lotteryNFT[56]
                }
        },
        392: function(e, t, n) {
            "use strict";
            var a = n(4),
                r = n.n(a),
                s = n(10),
                i = n(13),
                o = n(0),
                c = n(577),
                d = n(3),
                u = n.n(d),
                p = n(125),
                l = n.n(p),
                b = n(265),
                y = function() {
                    return Object(o.useContext)(b.a)
                },
                f = c.a,
                m = new l.a("https://bsc-dataseed.binance.org/"),
                x = new m.eth.Contract(f, "0x28cD92ED2bf6A5B665DFFB66c70572Ea58Ff8846"),
                k = new m.eth.Contract(f, "0xe84413e4d2ce15dd89141c88e5f8e46eeb0de10c"),
                w = new m.eth.Contract(f, "0xbea61686d11aed2d078885d77ccaeda352bb1fe4");
            t.a = function() {
                var e = Object(o.useState)(0),
                    t = Object(i.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    c = y(),
                    d = Object(o.useCallback)(Object(s.a)(r.a.mark((function e() {
                        var t, s, i, o, c, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, x.methods.getReserves().call();
                                case 3:
                                    if (t = e.sent, new u.a(t.reserve0).eq(new u.a(0))) {
                                        e.next = 15;
                                        break
                                    }
                                    return s = new u.a(t.reserve1).div(t.reserve0), e.next = 8, k.methods.getReserves().call();
                                case 8:
                                    return i = e.sent, o = new u.a(i.reserve0).div(i.reserve1).times(s), e.next = 12, w.methods.getReserves().call();
                                case 12:
                                    c = e.sent, (d = new u.a(c.reserve0).div(c.reserve1).times(o)).isEqualTo(n) || a(d.toNumber());
                                case 15:
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), a(0);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 17]
                        ])
                    }))), [n]);
                return Object(o.useEffect)((function() {
                    x && k && w && d()
                }), [a, d, c]), n
            }
        },
        522: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CroxToken","name":"_crox","type":"address"},{"internalType":"address","name":"_trustaddr","type":"address"},{"internalType":"address","name":"_dev1addr","type":"address"},{"internalType":"address","name":"_dev2addr","type":"address"},{"internalType":"uint256","name":"_croxPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetDevAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetTrustAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"croxPerBlock","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"crox","outputs":[{"internalType":"contract CroxToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"croxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dev1addr","type":"address"}],"name":"dev1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dev1addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_dev2addr","type":"address"}],"name":"dev2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dev2addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCrox","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCroxPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustaddr","type":"address"}],"name":"trust","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_croxPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        531: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        55: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(8),
                s = [{
                    pid: -63,
                    risk: 5,
                    lpSymbol: "XWIN",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x3ED1f0F88b46050CC3305Cc73CEd8aC2C6529F45"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28"
                    },
                    tokenSymbol: "XWIN",
                    tokenPrice: 1.5,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    newPool: 16435296e5,
                    isDualFarm: !1,
                    isHintVisible: !1,
                    active: !0,
                    reward2: 5700,
                    projectLink: "https://xwin.finance/",
                    depositLink: "https://exchange.babyswap.finance/#/swap?outputCurrency=0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28"
                }, {
                    pid: -62,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x4de4e7759e6fcfecb1b5be5949efd5deb3097721"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNR",
                    tokenPrice: .07,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    newPool: 16435296e5,
                    active: !0,
                    reward2: 7e4,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -61,
                    risk: 5,
                    lpSymbol: "CNS-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x2b350805f60e6cdda477109f5490788226b31148"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x50605A84752eA65d6FC8dB922bBd957a381920CC"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNR",
                    tokenPrice: .07,
                    quoteTokenPrice: 500,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    minStaking: 30,
                    active: !0,
                    isDualFarm: !0,
                    newPool: 16435296e5,
                    reward1: 1e4,
                    reward2: 7e4,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                }, {
                    pid: -60,
                    risk: 5,
                    lpSymbol: "IF1-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xc13CA483E53caC9598F5712EA2181e0506b49443"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x4b5676c8775f035405c817E11C2ecB3CE5e5ef90"
                    },
                    tokenDecimal: 9,
                    tokenSymbol: "IF1",
                    tokenPrice: 64e-9,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xfcac1a3ede7b55cc51e3ebff2885a67fbfe01a1a"
                    },
                    quoteTokenPrice: 500,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    active: !1,
                    newPool: 16429248e5,
                    isDualFarm: !0,
                    reward1: 3e3,
                    reward2: 4e10,
                    projectLink: "https://infiniteone.com",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A"
                }, {
                    pid: -59,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xDA1550a33867001aa9Dc4a5B17F074aF8cC4689C"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenDecimal: 9,
                    tokenSymbol: "IF1",
                    tokenPrice: 64e-9,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xfcac1a3ede7b55cc51e3ebff2885a67fbfe01a1a"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    newPool: 16429248e5,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 2e10,
                    projectLink: "https://infiniteone.io/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -58,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x54b89cbb58e9226726d2272b40953ca031dad3f1"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xf41aCbA80328C076A207baDCbbd7bc331c0853f5"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 1441e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 30,
                    active: !1,
                    newPool: 16429248e5,
                    isDualFarm: !0,
                    reward1: 3e4,
                    reward2: 6e6,
                    isBoosterPool: !0,
                    showBackground: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -57,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xbe5147d1fa1c013bb11339ef4349f4b3206f5fdd"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "WSOW",
                    tokenPrice: .03,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe70D287AaD130e2Cee520e75d12C6efa4f1A377d"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    cmcId: 17209,
                    duration: 60,
                    newPool: 16429248e5,
                    isDualFarm: !1,
                    active: !0,
                    reward2: 14e4,
                    projectLink: "https://rxseedcoin.io/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -56,
                    risk: 5,
                    lpSymbol: "WSOW-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0xc09c3ef4192e2c70a5497dc82d717f94eeba946f"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x8b9f632dd108d078154c0312294ebcd4de0845b4"
                    },
                    tokenSymbol: "WSOW",
                    tokenPrice: .03,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe70D287AaD130e2Cee520e75d12C6efa4f1A377d"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 60,
                    active: !0,
                    cmcId: 17209,
                    isDualFarm: !0,
                    newPool: 16429248e5,
                    reward1: 1e4,
                    reward2: 14e4,
                    projectLink: "https://rxseedcoin.io/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0xe70d287aad130e2cee520e75d12c6efa4f1a377d/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -55,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x9A78423668a0C95b775D73Ba186BB0a2DD6eEd01"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 2335e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    newPool: 1642250244e3,
                    isDualFarm: !1,
                    active: !0,
                    reward2: 25e6,
                    projectLink: "https://frenchconnection.finance/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -54,
                    risk: 5,
                    lpSymbol: "FCF-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xAA59d0C68F4d7895812fCDDB7e58F47b49639458"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xC58A80CF11d1CbbAE4fc1c2Fa9244F517676Ab3D"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 2335e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenPrice: 440,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !0,
                    isDualFarm: !0,
                    newPool: 1642250244e3,
                    reward1: 1e4,
                    reward2: 4e7,
                    projectLink: "https://frenchconnection.finance/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x4673f018cc6d401AAD0402BdBf2abcBF43dd69F3"
                }, {
                    pid: -53,
                    risk: 5,
                    lpSymbol: "CRUSH-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x2d007af36defe6ab6eb6d43a2c3a36563f3a8a72"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x323D9232bC8848baBE21C409CF1DF82081D19fD2"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 30,
                    minStaking: 7,
                    active: !1,
                    isBoosterPool: !0,
                    newPool: 164017749e4,
                    isDualFarm: !0,
                    reward1: 1e4,
                    reward2: 7e4,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x0Ef0626736c2d484A792508e99949736D0AF807e/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -52,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x0b9c088d62c6adbaf126960002e11a899ba7598b"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xf41aCbA80328C076A207baDCbbd7bc331c0853f5"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0Ef0626736c2d484A792508e99949736D0AF807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 30,
                    minStaking: 7,
                    active: !1,
                    isDualFarm: !0,
                    isBoosterPool: !0,
                    newPool: 164017749e4,
                    reward1: 3e4,
                    reward2: 18e3,
                    showBackground: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -51,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x8cd2ec2f49a3e6fc8bd3aa51012a68c8bf513264"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "BGLG",
                    tokenPrice: .0126401,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xea01d8d9eacca9996db6bb3377c1fe64308e7328"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    newPool: 164017749e4,
                    active: !1,
                    reward2: 35e4,
                    projectLink: "https://bigleague.art/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -50,
                    risk: 5,
                    lpSymbol: "BGLG-BUSD LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x1e2494b00581a9bf9b649bbee7cf1087b8911d1f"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x859fA674937fd466C499A1e9a7BBd10946ec45b6"
                    },
                    tokenSymbol: "BGLG",
                    tokenPrice: .012375,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xea01d8d9eacca9996db6bb3377c1fe64308e7328"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    newPool: 164017749e4,
                    reward1: 12e3,
                    reward2: 8e5,
                    projectLink: "https://bigleague.art/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xEa01D8D9EaCCa9996Db6Bb3377c1Fe64308e7328"
                }, {
                    pid: -49,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xb093dbdc08fe7e0e24f64f8d4ad6be4eedcf3b92"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "BABY",
                    tokenPrice: 1.77,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    newPool: 164017749e4,
                    reward2: 2e3,
                    projectLink: "https://babyswap.finance",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -48,
                    risk: 5,
                    lpSymbol: "MILK-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x8302431ec0c23110d5eb95f6d916992b4fafa50c"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xDB6c248902AD2722A5E01E9689824c28bd0A5f75"
                    },
                    tokenSymbol: "MILK",
                    tokenPrice: .0111979,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xBf37f781473f3b50E82C668352984865eac9853f"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 30,
                    active: !1,
                    isDualFarm: !0,
                    newPool: 164017749e4,
                    reward1: 6e3,
                    reward2: 2e5,
                    projectLink: "https://thecryptoyou.io/home",
                    depositLink: "https://exchange.babyswap.finance/#/add/0xBf37f781473f3b50E82C668352984865eac9853f/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -47,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x9555636116a6d4c526c9b24572dd00dcbc78c5c0"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 2335e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 17e6,
                    projectLink: "https://frenchconnection.finance/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -46,
                    risk: 5,
                    lpSymbol: "FCF-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x01c6e7e4d9419f38aee16c02c30ed72d465beaf4"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xC58A80CF11d1CbbAE4fc1c2Fa9244F517676Ab3D"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 2335e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenPrice: 580,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 6e3,
                    reward2: 19e6,
                    projectLink: "https://frenchconnection.finance/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x4673f018cc6d401AAD0402BdBf2abcBF43dd69F3"
                }, {
                    pid: -45,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xaa5765b33f44b1a4be918fa91a8cc1280bbadf46"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "WNOW",
                    tokenPrice: .099658,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 34e3,
                    projectLink: "https://walletnow.net/",
                    depositLink: "https:exchange.croxswap.com"
                }, {
                    pid: -44,
                    risk: 5,
                    lpSymbol: "WNOW-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xb2ce797119703bb2781187e1546f7d60cdca5377"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x268C6d2BD3F593d44F3e697CC5A02Ae6EcdA9a23"
                    },
                    tokenSymbol: "WNOW",
                    tokenPrice: .099658,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                    },
                    quoteTokenPrice: 580,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 6e3,
                    reward2: 56e3,
                    projectLink: "https://walletnow.net/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x56AA0237244C67B9A854B4Efe8479cCa0B105289"
                }, {
                    pid: -43,
                    risk: 5,
                    lpSymbol: "CRUSH-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x2ab18f5f72743446a7a3a942607398d7eeacecc7"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x323D9232bC8848baBE21C409CF1DF82081D19fD2"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .2812,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 14,
                    minStaking: 1,
                    active: !1,
                    isBoosterPool: !0,
                    isDualFarm: !0,
                    reward1: 5e3,
                    reward2: 36e3,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x0Ef0626736c2d484A792508e99949736D0AF807e/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -42,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x6fd7fc7999a464738376bb69b557d19d0da2e672"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xf41aCbA80328C076A207baDCbbd7bc331c0853f5"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .15,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0Ef0626736c2d484A792508e99949736D0AF807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 14,
                    minStaking: 7,
                    active: !1,
                    isDualFarm: !0,
                    isBoosterPool: !0,
                    reward1: 2e4,
                    reward2: 8e3,
                    showBackground: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -41,
                    risk: 5,
                    lpSymbol: "RASTA-CROX LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x287284971cca720f4ac7e2ae141857b8299e99b2"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x068025Cb947C59684D298F9ad8FE475E3944ae9f"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .132543,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenPrice: .3,
                    quoteTokenSymbol: r.a.CAKE,
                    quoteTokenAdresses: a.a.cake,
                    title: "",
                    duration: 30,
                    isDualFarm: !0,
                    active: !1,
                    reward1: 17e3,
                    reward2: 35e3,
                    showBackground: !0,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.croxswap.com/#/add/0xE3e8cC42DA487d1116D26687856e9FB684817c52/0x2c094F5A7D1146BB93850f629501eB749f6Ed491"
                }, {
                    pid: -40,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xb9e9d0fd0f2881ba98818745cfa13b0054411467"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .132543,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 42e3,
                    showBackground: !0,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -39,
                    risk: 5,
                    lpSymbol: "RASTA-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xde3549a2d4135b896ab6665eff25fa90f8192caf"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x950b7377695e81235397da1b608c2087bc7002dc"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .132543,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenPrice: 600,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 1e4,
                    reward2: 55e3,
                    showBackground: !0,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xE3e8cC42DA487d1116D26687856e9FB684817c52"
                }, {
                    pid: -38,
                    risk: 5,
                    lpSymbol: "CRUSH-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x2ef72492be796eee36b77cd465c7a3695abd7480"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x323D9232bC8848baBE21C409CF1DF82081D19fD2"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .2812,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 7,
                    minStaking: 7,
                    active: !1,
                    isBoosterPool: !0,
                    isDualFarm: !0,
                    reward1: 5e3,
                    reward2: 36e3,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x0Ef0626736c2d484A792508e99949736D0AF807e/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -37,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0xbd094ae2b4b0afa2d09087c5c22485ea7de57b37"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xf41aCbA80328C076A207baDCbbd7bc331c0853f5"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .15,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0Ef0626736c2d484A792508e99949736D0AF807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 7,
                    minStaking: 7,
                    active: !1,
                    isDualFarm: !0,
                    isBoosterPool: !0,
                    reward1: 2e4,
                    reward2: 6e3,
                    showBackground: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -36,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x0cecf0997b94f553d80d413b026f48ba87024f8b"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "GAIN",
                    tokenPrice: .171489,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xAAc073847e989C6D9d2f115A69E57a024415c684"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 5e3,
                    projectLink: "https://gainpool.io/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -35,
                    risk: 5,
                    lpSymbol: "GAIN-USDT LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x033dab6f5fa99e77bbd52341be328f1b26ff9463"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x4b558829a04B200F17a73d159BE5fCEa74d35Df2"
                    },
                    tokenSymbol: "GAIN",
                    tokenPrice: .171489,
                    quoteTokenPrice: 1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xAAc073847e989C6D9d2f115A69E57a024415c684"
                    },
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 90,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 18e3,
                    reward2: 12e4,
                    projectLink: "https://gainpool.io/",
                    depositLink: "https://exchange.croxswap.com/#/add/0x55d398326f99059fF775485246999027B3197955/0xAAc073847e989C6D9d2f115A69E57a024415c684"
                }, {
                    pid: -34,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x9b09dFac9a922313389cC519C9cc2b85b3b6c452"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CNR+CRUSH",
                    tokenPrice: .09,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    minFirstDeposit: 3e3,
                    maxFirstDeposit: 12e3,
                    reward1: 23e3,
                    reward2: 23e3,
                    isWhalePool: !0,
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -33,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xf55a787bb66e9eff21fd63ca772a18a2e96001df"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CNR+CRUSH",
                    tokenPrice: .09,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    maxFirstDeposit: 2500,
                    active: !1,
                    reward1: 1e4,
                    reward2: 1e4,
                    isShrimpPool: !0,
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -32,
                    risk: 5,
                    lpSymbol: "CNS-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xf59db3b9a7cc26ac917cc617ff542b59f1132f34"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x50605A84752eA65d6FC8dB922bBd957a381920CC"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNR",
                    tokenPrice: .13,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 15e3,
                    reward2: 65e3,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                }, {
                    pid: -31,
                    risk: 5,
                    lpSymbol: "DMGK-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xa0572c1b63b7918337dd8281dc4228463ea63330"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x0cd050602341dcc312005287c8fb480ec0da6abe"
                    },
                    tokenSymbol: "DMGK",
                    tokenPrice: .0534331,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE"
                    },
                    quoteTokenPrice: 650,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 90,
                    minStaking: 30,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 25e3,
                    reward2: 57e4,
                    projectLink: "https://darkmagick.co/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE"
                }, {
                    pid: -30,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x43f15dd411dfea2051e4b8024cbffb43516c8d5b"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "DMGK",
                    tokenPrice: .0534331,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 90,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 18e4,
                    cgProjectID: "darkmagick",
                    projectLink: "https://darkmagick.co/",
                    depositLink: "https://exchange.croxswap.com/"
                }, {
                    pid: -29,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x35c643417538f5a6dd8dd55e75986d76d621bd3e"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "GREM",
                    tokenPrice: .0036,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x8c458EE3ebc5DaDFE5E0A3Daae47e3C2Aa62FF1c"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    penaltyFee: 40,
                    active: !1,
                    minFirstDeposit: 500,
                    reward2: 1e7,
                    cgProjectID: "gremlins-finance",
                    projectLink: "https://gremlins.finance/",
                    depositLink: "https://exchange.croxswap.com/#/swap"
                }, {
                    pid: -28,
                    risk: 5,
                    lpSymbol: "CLA-USDT LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x29108d47517adff3386ff756ebda8a413c4b2c78"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xcE6A9F4770F908dAc4E29090f397cE29547B569D"
                    },
                    tokenSymbol: "CLA",
                    tokenPrice: .0033,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xF6663F46ECd7AE8eE8b6cC54681A42EbA0ef52b4"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 60,
                    minStaking: 60,
                    minFirstDeposit: 6e3,
                    active: !1,
                    isDualFarm: !0,
                    isWhalePool: !0,
                    reward1: 9e3,
                    reward2: 4e5,
                    projectLink: "https://www.candelacoin.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/0xF6663F46ECd7AE8eE8b6cC54681A42EbA0ef52b4/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -27,
                    risk: 5,
                    lpSymbol: "GAME1-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0xbd2e6cb67fef37371c46c801606c7115aabf9b91"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x29e63966792d692ef405d897bd716c30e4e54944"
                    },
                    tokenSymbol: "GAME1",
                    tokenPrice: .01785158,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0e52d24c87a5ca4f37e3ee5e16ef5913fb0cceeb"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 30,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 5e3,
                    reward2: 1e5,
                    projectLink: "https://game1network.com/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x0e52d24c87a5ca4f37e3ee5e16ef5913fb0cceeb/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -26,
                    risk: 5,
                    lpSymbol: "BABY-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0xdd979fbaff3ee0bb5de598a49a2e04e833306719"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xE730C7B7470447AD4886c763247012DfD233bAfF"
                    },
                    tokenSymbol: "BABY",
                    tokenPrice: .5845,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 17500,
                    reward2: 17500,
                    projectLink: "https://home.babyswap.finance/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -25,
                    risk: 5,
                    lpSymbol: "DFL-BNB LP",
                    lpType: "JET LP",
                    poolAddress: {
                        97: "",
                        56: "0x311350c56e623ba25d42de6892e70b949cff2611"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x362923F64cF94c4462De0d059Dd0997954Ce8E31"
                    },
                    tokenSymbol: "DFL",
                    tokenPrice: .00539054,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xD675fF2B0ff139E14F86D87b7a6049ca7C66d76e"
                    },
                    quoteTokenPrice: 630,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 5e3,
                    reward2: 2e6,
                    projectLink: "https://defily.io/",
                    depositLink: "https://exchange.jetswap.finance/#/add/BNB/0xD675fF2B0ff139E14F86D87b7a6049ca7C66d76e"
                }, {
                    pid: -24,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x351abaf5b3d7ee9a1ea814121f2ec76a35b05ac4"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xf41aCbA80328C076A207baDCbbd7bc331c0853f5"
                    },
                    tokenSymbol: "USDT",
                    tokenPrice: 1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x55d398326f99059fF775485246999027B3197955"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 60,
                    minStaking: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 16e4,
                    reward2: 12e3,
                    showBackground: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -23,
                    risk: 5,
                    lpSymbol: "POLAR-BUSD LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x0d0d3fddea48fdad1d69bec10143125e4e041598"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2B7304ba278fa25caa8D44E26834eaba5965d919"
                    },
                    tokenSymbol: "POLAR",
                    tokenPrice: .0106,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x70905594023Cb2f37F3103fDc70315ad1601D6EF"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: "",
                    duration: 30,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 1e4,
                    reward2: 2e5,
                    projectLink: "https://polarisdefi.io/",
                    depositLink: "https://exchange.croxswap.com/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x70905594023Cb2f37F3103fDc70315ad1601D6EF"
                }, {
                    pid: -22,
                    risk: 5,
                    lpSymbol: "CRUSH-USDT LP",
                    lpType: "BABY LP",
                    poolAddress: {
                        97: "",
                        56: "0x2fc8c3dc50d0f90d5f90a8aaf30b9f80b1bfb5eb"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x323D9232bC8848baBE21C409CF1DF82081D19fD2"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .2812,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    title: "",
                    duration: 60,
                    minStaking: 60,
                    minFirstDeposit: 2800,
                    active: !1,
                    isWhalePool: !0,
                    isDualFarm: !0,
                    reward1: 12e3,
                    reward2: 1e5,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.babyswap.finance/#/add/0x0Ef0626736c2d484A792508e99949736D0AF807e/0x55d398326f99059fF775485246999027B3197955"
                }, {
                    pid: -21,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xda66d1c7cbf16478321ab3b5020dd02ceb1925f0"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "GOLDNUGGET",
                    tokenPrice: .27,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe0b58022487131ec9913c1f3acfd8f74fc6a6c7e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 2e4,
                    projectLink: "https://block-mine.io/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -20,
                    risk: 5,
                    lpSymbol: "GOLDNUGGET-BNB LP",
                    lpType: "APE LP",
                    poolAddress: {
                        97: "",
                        56: "0x68c03ca9ccd68e049f7786fb6cb0d865528b6070"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x93ebebff79C504e1F0B6946A6F2fe693E811470A"
                    },
                    tokenSymbol: "NUGGET",
                    tokenPrice: .54,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe0b58022487131ec9913c1f3acfd8f74fc6a6c7e"
                    },
                    quoteTokenPrice: 630,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    penaltyFee: 5,
                    reward1: 8e3,
                    reward2: 4e4,
                    projectLink: "https://block-mine.io/",
                    depositLink: "https://app.apeswap.finance/add/ETH/0xE0B58022487131eC9913C1F3AcFD8F74FC6A6C7E"
                }, {
                    pid: -19,
                    risk: 5,
                    lpSymbol: "NUX-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x4332d31aa04d19c98f4488066863b097a36e4478"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x9099502f8f2db7fbd442d0d1bbd63310eff908ea"
                    },
                    tokenSymbol: "NUX",
                    tokenPrice: .2672,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x6D8734002fBffE1c86495e32c95f732fC77F6F2A"
                    },
                    quoteTokenPrice: 630,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 1e4,
                    reward2: 6e4,
                    projectLink: "https://peanut.trade/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x6D8734002fBffE1c86495e32c95f732fC77F6F2A"
                }, {
                    pid: -18,
                    risk: 5,
                    lpSymbol: "PINO",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x5b254beb8325956977f37a66a4a59d88d5350128"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x6b681fc5bba4a85f50e6f0a314a4d5452a9b3384"
                    },
                    tokenSymbol: "PINO",
                    tokenPrice: .6363,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x6b681fc5bba4a85f50e6f0a314a4d5452a9b3384"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    isHintVisible: !1,
                    active: !1,
                    reward2: 2e3,
                    projectLink: "https://www.pinocchu.com/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x6B681fc5BbA4a85F50E6f0A314A4D5452a9B3384"
                }, {
                    pid: -17,
                    risk: 5,
                    lpSymbol: "PINO-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x0849b92fdb7ed9af55c00cb8b9147065143946f3"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x98c5ACDc6Fe2784C5bE122F4398254A479Ae6A29"
                    },
                    tokenSymbol: "PINO",
                    tokenPrice: .6363,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x6b681fc5bba4a85f50e6f0a314a4d5452a9b3384"
                    },
                    quoteTokenPrice: 630,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !0,
                    isDualFarm: !0,
                    reward1: 6e3,
                    reward2: 3e3,
                    projectLink: "https://www.pinocchu.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x6B681fc5BbA4a85F50E6f0A314A4D5452a9B3384"
                }, {
                    pid: -16,
                    risk: 5,
                    lpSymbol: "CROX-BNB LP",
                    lpType: "BISWAP LP ",
                    poolAddress: {
                        97: "",
                        56: "0x7ed56703ff95e17bfce01015453e97582392a463"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xFd9A43966ECf3E78714133bD86849154a2726FD7"
                    },
                    tokenSymbol: "CROX",
                    tokenIcon: "crox-bnb-biswap",
                    tokenPrice: .27,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 630,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    minStaking: 60,
                    isDualFarm: !1,
                    active: !1,
                    projectLink: "https://croxswap.com",
                    reward2: 26e4,
                    depositLink: "https://exchange.biswap.org/#/add/ETH/0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
                    isLPToken: !0,
                    showBackground: !0
                }, {
                    pid: -15,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xe3de39b320d3b2f473beb8e9ef79f98769662ef1"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CLA",
                    tokenPrice: .0033,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xF6663F46ECd7AE8eE8b6cC54681A42EbA0ef52b4"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 30,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 1e5,
                    projectLink: "https://www.candelacoin.com/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -14,
                    risk: 5,
                    lpSymbol: "CLA-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x0bc9f266b20bbe857a22733bb5b725b789803e22"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xb0d5b67aa55c29064a386ee53231d83bbf6d96dc"
                    },
                    tokenSymbol: "CLA",
                    tokenPrice: .0033,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xF6663F46ECd7AE8eE8b6cC54681A42EbA0ef52b4"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 2e4,
                    reward2: 48e4,
                    projectLink: "https://www.candelacoin.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xF6663F46ECd7AE8eE8b6cC54681A42EbA0ef52b4"
                }, {
                    pid: -13,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x946ee41bacd6e03b5fed29187e9b763c24eecee5"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNR",
                    tokenPrice: .13,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 216e3,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -12,
                    risk: 5,
                    lpSymbol: "CNS-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xcda5e7bfcb0970a1f56810d8a04f9917ab70038a"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x50605A84752eA65d6FC8dB922bBd957a381920CC"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNS",
                    tokenPrice: .13,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 3e4,
                    reward2: 432e3,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                }, {
                    pid: -11,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xa5e505d73779c2357e90c25ee581256cae3210fa"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .2665,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 33333,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -10,
                    risk: 5,
                    lpSymbol: "CRUSH-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xe8f108fd67423a24fe7b40c4a208ab8c41d86915"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x5bD6F198Ce9011550c31fC7FfC33305A4fbEa674"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .340979,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 15e3,
                    reward2: 66600,
                    projectLink: "https://bitcrusharcade.io/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0x0ef0626736c2d484a792508e99949736d0af807e"
                }, {
                    pid: -9,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xb9239eecf244927840e2ce315fd14a16d278c1c4"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNS",
                    tokenPrice: 8416e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -8,
                    risk: 5,
                    lpSymbol: "CNS-BNB LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0xac43af73e33589d22de23cc56eb081069cc5dfca"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x50605A84752eA65d6FC8dB922bBd957a381920CC"
                    },
                    tokenDecimal: 8,
                    tokenSymbol: "CNS",
                    tokenPrice: 8416e-7,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    projectLink: "https://www.centric.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/ETH/0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                }, {
                    pid: -7,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x168e09d8ad9478ec51df3b054d43652a3254bd1f"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .16,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    isDualFarm: !1,
                    active: !1,
                    reward2: 5e3,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.croxswap.com/#/swap?outputCurrency=0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                }, {
                    pid: -3,
                    risk: 5,
                    lpSymbol: "CROX-DAI LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x999c1fdea305ae7d5eb6709149c3f3a896667336"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xAfECBd00A925Ca4B5443587790F55a01f2F55332"
                    },
                    tokenSymbol: "DAI",
                    tokenPrice: 1,
                    quoteTokenPrice: 1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
                    },
                    quoteTokenSymbol: r.a.CAKE,
                    quoteTokenAdresses: a.a.cake,
                    title: "",
                    duration: 60,
                    isDualFarm: !0,
                    active: !1,
                    reward1: 2e4,
                    reward2: 1e4,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.croxswap.com/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
                }, {
                    pid: -4,
                    risk: 5,
                    lpSymbol: "RASTA-WBNB LP",
                    lpType: "RASTA LP",
                    poolAddress: {
                        97: "",
                        56: "0x6604863ea549d65a176205345275202b8cf97ce6"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xE84413e4D2CE15Dd89141C88e5f8E46eEb0DE10C"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .12,
                    quoteTokenPrice: 630,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    reward1: 5e3,
                    reward2: 5e3,
                    projectLink: "https://rasta.finance",
                    depositLink: "https://exchange.rasta.finance/#/add/ETH/0xE3e8cC42DA487d1116D26687856e9FB684817c52"
                }, {
                    pid: -5,
                    risk: 5,
                    lpSymbol: "GNT-BUSD LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x4b113451dcbec996c665454c85700c02d6a29e5e"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xa0b60F9b98ED62c2Be5e92E0666f1fc9B59Af7bD"
                    },
                    tokenSymbol: "GNT",
                    tokenPrice: 3968e-9,
                    quoteTokenPrice: 1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xF750A26EB0aCf95556e8529E72eD530f3b60f348"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    projectLink: "https://www.greentrusttoken.com/",
                    depositLink: "https://exchange.croxswap.com/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xF750A26EB0aCf95556e8529E72eD530f3b60f348"
                }, {
                    pid: -1,
                    risk: 5,
                    lpSymbol: "CROX-DAI LP",
                    lpType: "CAKE LP",
                    poolAddress: {
                        97: "",
                        56: "0x543ad651396a68010a1d40c7dbd6c1af12268eca"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xAfECBd00A925Ca4B5443587790F55a01f2F55332"
                    },
                    tokenSymbol: "DAI",
                    tokenPrice: 1,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
                    },
                    quoteTokenSymbol: r.a.CAKE,
                    quoteTokenAdresses: a.a.cake,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.croxswap.com/#/add/0x2c094F5A7D1146BB93850f629501eB749f6Ed491/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
                }, {
                    pid: -2,
                    risk: 5,
                    lpSymbol: "RASTA-WBNB LP",
                    lpType: "RASTA LP",
                    poolAddress: {
                        97: "",
                        56: "0xc38f31e73d3c5386f062d083ed32daf4d3f6df8b"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xE84413e4D2CE15Dd89141C88e5f8E46eEb0DE10C"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .13,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    duration: 60,
                    active: !1,
                    isDualFarm: !0,
                    projectLink: "https://croxswap.com",
                    depositLink: "https://exchange.rasta.finance/#/add/ETH/0xE3e8cC42DA487d1116D26687856e9FB684817c52"
                }];
            t.a = s
        },
        56: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(8),
                s = [{
                    pid: -124,
                    risk: 5,
                    lpSymbol: "XWIN",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x9a9d391d3ba11a80abe99baabeb3becab99530cb"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28"
                    },
                    tokenSymbol: "XWIN",
                    tokenPrice: 2.27,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28"
                    },
                    quoteTokenPrice: 2.27,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    isHintVisible: !1,
                    active: !0,
                    reward1: 6500,
                    closed: !0,
                    poolStartTime: 1640386219e3,
                    projectLink: "https://xwin.finance/",
                    depositLink: "https://exchange.babyswap.finance",
                    revert: !0
                }, {
                    pid: -125,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x6f9c9ae12b4833de3efb09b63dcd3ffc1ff4e926"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CNS",
                    tokenPrice: 4124e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward2: 2425e3,
                    closed: !0,
                    poolStartTime: 1640583602e3,
                    projectLink: "https://centric.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -101,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xe17f0ef01385c23771a79b133deb581689ebd8c2"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    isHintVisible: !1,
                    active: !0,
                    reward1: 6500,
                    closed: !0,
                    poolStartTime: 1640303483e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -102,
                    risk: 5,
                    lpSymbol: "WBNB",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0xfada247ac69fac3bde67e88d9e18d85759440c98"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 550,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 7200,
                    closed: !0,
                    poolStartTime: 1640307018e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com",
                    revert: !0
                }, {
                    pid: -103,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x744203bad3de493ec19eaea4fc04414c5f7008f5"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "RASTA",
                    tokenPrice: .092,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 11500,
                    closed: !0,
                    poolStartTime: 1640310678e3,
                    projectLink: "https://rasta.finance/",
                    depositLink: "https://rastadex.croxswap.com"
                }, {
                    pid: -104,
                    risk: 5,
                    lpSymbol: "CAKE",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x6221ccaa8300760cd9ad7ebc4df2301448589689"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 12.45,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 4e3,
                    closed: !0,
                    poolStartTime: 1640314258e3,
                    projectLink: "https://pancakeswap.finance/",
                    depositLink: "https://exchange.croxswap.com",
                    revert: !0
                }, {
                    pid: -105,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x844a51400a8752277bd5d98aeb57cd6aa809220d"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .2812,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 11500,
                    closed: !0,
                    poolStartTime: 1640317818e3,
                    projectLink: "https://bitcrush.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -106,
                    risk: 5,
                    lpSymbol: "Banana",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x44ef672b209c1c353009cef91171f3aa3020848a"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 14.01,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 4e3,
                    closed: !0,
                    poolStartTime: 1640321418e3,
                    projectLink: "https://apeswap.finance/",
                    depositLink: "https://app.apeswap.finance",
                    revert: !0
                }, {
                    pid: -107,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xf2a37337f3ed6ebc0b6b944658dfd286be315955"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CNS",
                    tokenPrice: 4124e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xf750a26eb0acf95556e8529e72ed530f3b60f348"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 11500,
                    closed: !0,
                    poolStartTime: 1640325018e3,
                    projectLink: "https://centric.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -108,
                    risk: 5,
                    lpSymbol: "BABY",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0xd5278d4f63888a99967efee2667becd4b3f15887"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 1.45,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 6500,
                    closed: !0,
                    poolStartTime: 1640328678e3,
                    projectLink: "https://babyswap.finance/",
                    depositLink: "https://exchange.babyswap.finance",
                    revert: !0
                }, {
                    pid: -109,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xf38235b8c96d4a190158982c78db3a12f4c5a0e1"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "WNOW",
                    tokenPrice: .099658,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 11500,
                    closed: !0,
                    poolStartTime: 1640332218e3,
                    projectLink: "https://walletnow.net/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -110,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x6982d6226d1716ddf3c99d156e89f633d3a77351"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "FCF",
                    tokenPrice: 2335e-7,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 88e5,
                    closed: !0,
                    poolStartTime: 1640339418e3,
                    projectLink: "https://frenchconnection.finance/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -112,
                    risk: 5,
                    lpSymbol: "ETH",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0xfd0f09cba3ac1eb4505576efa7b915dece773e32"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 4100,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 5200,
                    closed: !0,
                    poolStartTime: 1640343018e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com",
                    revert: !0
                }, {
                    pid: -113,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xf6885826d038fb604c64a5a64dc017203bbc15c3"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "BGLG",
                    tokenPrice: .0126401,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xea01d8d9eacca9996db6bb3377c1fe64308e7328"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 78200,
                    closed: !0,
                    poolStartTime: 1640346678e3,
                    projectLink: "https://bigleague.art//",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -114,
                    risk: 5,
                    lpSymbol: "CNR",
                    lpTokenDecimal: 8,
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x800d23de9bd616885cd4fc11a8ca3d0f4494b906"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: .075,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 6500,
                    closed: !0,
                    poolStartTime: 1640350258e3,
                    projectLink: "https://centric.com/",
                    depositLink: "https://exchange.croxswap.com",
                    revert: !0
                }, {
                    pid: -115,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xa35167d658055fbd6667064fc522883caf538282"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "BABY",
                    tokenPrice: 1.77,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 400,
                    closed: !0,
                    poolStartTime: 1640353818e3,
                    projectLink: "https://babyswap.finance/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -116,
                    risk: 5,
                    lpSymbol: "RASTA",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0xa152024392bd38cc9d5d8c1ae5e7bffec33517d0"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: .0922,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 5e3,
                    closed: !0,
                    poolStartTime: 1640357418e3,
                    projectLink: "https://rasta.finance/",
                    depositLink: "https://rastadex.croxswap.com",
                    revert: !0
                }, {
                    pid: -117,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0x26373b3c6b8ecef5e98700f1d087690ab288b3d7"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CNR",
                    tokenPrice: .075,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 1e4,
                    closed: !0,
                    poolStartTime: 1640361078e3,
                    projectLink: "https://centric.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -118,
                    risk: 5,
                    lpSymbol: "CRUSH",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x33190442d1bfac0047b5c4e6b58fcaa3283c98f0"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: .075,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 4e3,
                    closed: !0,
                    poolStartTime: 1640364658e3,
                    projectLink: "https://bitcrush.com/",
                    depositLink: "https://exchange.babyswap.finance",
                    revert: !0
                }, {
                    pid: -119,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xfd102f382fceeecaecd500f91b585d703cc5c8a3"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "WNOW",
                    tokenPrice: .099658,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                    },
                    rewardTokenSymbol: "FCF",
                    rewardTokenPrice: 2335e-7,
                    rewardTokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !0,
                    active: !0,
                    reward1: 3e3,
                    closed: !0,
                    reward2: 7e6,
                    poolStartTime: 1640368268e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -120,
                    risk: 5,
                    lpSymbol: "WNOW",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x885d1e573a9e9e7ddc05a109b115281a891708be"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .206,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: .07,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 5200,
                    closed: !0,
                    poolStartTime: 1640371818e3,
                    projectLink: "https://walletnow.net/",
                    depositLink: "https://exchange.croxswap.com",
                    revert: !0
                }, {
                    pid: -122,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "",
                        56: "0xf8ea34d839bf2a72b49369745811be80308487a5"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CRUSH",
                    tokenPrice: .07,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                    },
                    rewardTokenSymbol: "BGLG",
                    rewardTokenPrice: .0126401,
                    rewardTokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xea01d8d9eacca9996db6bb3377c1fe64308e7328"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !0,
                    active: !0,
                    reward1: 11500,
                    closed: !0,
                    reward2: 1e3,
                    poolStartTime: 1640379048e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com"
                }, {
                    pid: -123,
                    risk: 5,
                    lpSymbol: "MRASTA",
                    lpType: "",
                    poolAddress: {
                        97: "",
                        56: "0x7F6B502FE3Dfdfbd7979686FE56fb3CDC56D4fBc"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0xEAA4A2469a8471bD8314b2FF63c1d113FE8114bA"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .2,
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenPrice: 1,
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    active: !0,
                    reward1: 5200,
                    closed: !0,
                    poolStartTime: 1640382669e3,
                    projectLink: "https://rasta.finance/",
                    depositLink: "https://exchange.rasta.finance",
                    revert: !0
                }];
            t.a = s
        },
        582: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        583: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        675: function(e, t) {},
        677: function(e, t) {},
        679: function(e, t) {},
        683: function(e, t) {},
        684: function(e, t) {},
        70: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = [{
                    pid: -200,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpType: "No Fees",
                    poolAddress: {
                        97: "0x9a6becc6519fb1d3ecc70fa14384744174db1c50",
                        56: "0x9fd3800ea8b4dec4b2be5887e598dea523469bcf"
                    },
                    lpAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "CROX",
                    tokenPrice: .19,
                    tokenAddresses: {
                        97: "0x2b00815d72d80a026c52f8e291d6f486b4637620",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    rewardTokens: [{
                        tokenSymbol: "RASTA",
                        tokenAddress: {
                            97: "",
                            56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                        },
                        tokenPrice: .09,
                        rewardPerBlock: .0091
                    }, {
                        tokenSymbol: "CROX",
                        tokenAddress: {
                            97: "",
                            56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                        },
                        tokenPrice: .19,
                        rewardPerBlock: .025
                    }, {
                        tokenSymbol: "CRUSH",
                        tokenAddress: {
                            97: "",
                            56: "0x0ef0626736c2d484a792508e99949736d0af807e"
                        },
                        tokenPrice: .09,
                        rewardPerBlock: .089
                    }, {
                        tokenSymbol: "CNS",
                        tokenAddress: {
                            97: "",
                            56: "0xf6cb4ad242bab681effc5de40f7c8ff921a12d63"
                        },
                        tokenPrice: 4124e-7,
                        rewardPerBlock: 9
                    }, {
                        tokenSymbol: "WNOW",
                        tokenAddress: {
                            97: "",
                            56: "0x56aa0237244c67b9a854b4efe8479cca0b105289"
                        },
                        tokenPrice: .06695,
                        rewardPerBlock: .0298
                    }, {
                        tokenSymbol: "FCF",
                        tokenAddress: {
                            97: "",
                            56: "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3"
                        },
                        tokenPrice: 1147e-7,
                        rewardPerBlock: 18
                    }, {
                        tokenSymbol: "BGLG",
                        tokenAddress: {
                            97: "",
                            56: "0xea01d8d9eacca9996db6bb3377c1fe64308e7328"
                        },
                        tokenPrice: .0127876,
                        rewardPerBlock: .7
                    }, {
                        tokenSymbol: "ETH",
                        tokenAddress: {
                            97: "",
                            56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                        },
                        tokenPrice: 4e3,
                        rewardPerBlock: 124e-8
                    }, {
                        tokenSymbol: "WBNB",
                        tokenAddress: {
                            97: "",
                            56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                        },
                        tokenPrice: 550,
                        rewardPerBlock: 496e-8
                    }, {
                        tokenSymbol: "CAKE",
                        tokenAddress: {
                            97: "",
                            56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                        },
                        tokenPrice: 13,
                        rewardPerBlock: 992e-7
                    }, {
                        tokenSymbol: "MRASTA",
                        tokenAddress: {
                            97: "",
                            56: "0xeaa4a2469a8471bd8314b2ff63c1d113fe8114ba"
                        },
                        tokenPrice: .098768,
                        rewardPerBlock: .0025
                    }, {
                        tokenSymbol: "XWIN",
                        tokenAddress: {
                            97: "",
                            56: "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28"
                        },
                        tokenPrice: 2.27,
                        rewardPerBlock: .002
                    }, {
                        tokenSymbol: "MILK",
                        tokenAddress: {
                            97: "",
                            56: "0xBf37f781473f3b50E82C668352984865eac9853f"
                        },
                        tokenPrice: .00253543,
                        rewardPerBlock: .1984
                    }, {
                        tokenSymbol: "CNR",
                        tokenAddress: {
                            97: "",
                            56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                        },
                        tokenPrice: .01427,
                        rewardPerBlock: .0397
                    }, {
                        tokenSymbol: "BTCB",
                        tokenAddress: {
                            97: "",
                            56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
                        },
                        tokenPrice: 49130,
                        rewardPerBlock: 4.96e-8
                    }],
                    quoteTokenSymbol: n(8).a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isDualFarm: !1,
                    isHintVisible: !1,
                    active: !0,
                    reward2: 6500,
                    poolStartTime: 1640664e3,
                    projectLink: "https://app.croxswap.com/",
                    depositLink: "https://exchange.croxswap.com"
                }];
            t.a = r
        },
        708: function(e, t) {},
        710: function(e, t) {},
        72: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(8),
                s = [{
                    pid: 15,
                    risk: 5,
                    lpSymbol: "CROX",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    cgProjectId: "croxswap",
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: .36
                }, {
                    pid: 16,
                    risk: 5,
                    lpSymbol: "WBNB",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 414
                }, {
                    pid: 17,
                    risk: 5,
                    lpSymbol: "BUSD",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 1
                }, {
                    pid: 18,
                    risk: 5,
                    lpSymbol: "ETH",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 3425
                }, {
                    pid: 19,
                    risk: 5,
                    lpSymbol: "BTCB",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 47309
                }, {
                    pid: 20,
                    risk: 5,
                    lpSymbol: "CAKE",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 20.82
                }, {
                    pid: 21,
                    risk: 5,
                    lpSymbol: "USDT",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x55d398326f99059fF775485246999027B3197955"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 1
                }, {
                    pid: 22,
                    risk: 5,
                    lpSymbol: "ADA",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 2.4
                }, {
                    pid: 24,
                    risk: 5,
                    lpSymbol: "CNR",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xdCbA3fbd7BBc28abD18A472D28358089467A8a74"
                    },
                    tokenSymbol: "",
                    tokenDecimal: 8,
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    cgProjectId: "canary",
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: .26
                }, {
                    pid: 25,
                    risk: 5,
                    lpSymbol: "DPET",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xfb62ae373aca027177d1c18ee0862817f9080d08"
                    },
                    tokenSymbol: "",
                    tokenAddresses: {
                        97: "0xADE2948B4405289e85e697760BB42EED39A5733a",
                        56: "0x3d34883c175Ba72dDa0108EA1A5faFD6Fa673DB6"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: "",
                    isTokenOnly: !0,
                    tokenPrice: 2.02
                }];
            t.a = s
        },
        722: function(e, t) {},
        724: function(e, t) {},
        739: function(e, t) {},
        74: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"NewDepositFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewSecondRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"NewWithdrawalInterval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"CROX_NEXTGEN_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_WITHDRAWAL_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECOND_PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount1","type":"uint256"},{"internalType":"uint256","name":"_amount2","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakedToken","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_secRewardToken","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_penaltyFee","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_secRewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_lockPeriod","type":"uint256"},{"internalType":"uint256","name":"_withdrawLock","type":"uint256"},{"internalType":"address","name":"_admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"penaltyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secAccTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secRewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTokenLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"updateFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateSecondRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"updateStakedTokenLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_interval","type":"uint256"}],"name":"updateWithdrawalInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"secRewardDebt","type":"uint256"},{"internalType":"uint256","name":"withdrawFrom","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        741: function(e, t) {},
        764: function(e, t) {},
        766: function(e, t) {},
        781: function(e, t) {},
        783: function(e, t) {},
        792: function(e, t) {},
        793: function(e, t) {},
        795: function(e, t) {},
        797: function(e, t) {},
        8: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", (function() {
                    return a
                })),
                function(e) {
                    e.BNB = "BNB", e.CAKE = "CAKE", e.SYRUP = "SYRUP", e.BUSD = "BUSD", e.TWT = "TWT", e.UST = "UST", e.USDC = "USDC", e.USDT = "USDT", e.RASTA = "RASTA", e.MRASTA = "MRASTA", e.ETH = "ETH", e.COMP = "COMP", e.DOT = "DOT", e.CNS = "CNS", e.DFL = "DFL"
                }(a || (a = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance"
                }(r || (r = {}))
        },
        80: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"commissionAmount","type":"uint256"}],"name":"ReferralCommissionPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"crox","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"croxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"croxReferral","outputs":[{"internalType":"contract ICroxReferral","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_crox","type":"address"},{"internalType":"address","name":"_devAddress","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"address","name":"_rewardHolder","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_croxPerBlock","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCrox","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCroxPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralCommissionRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardHolder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICroxReferral","name":"_croxReferral","type":"address"}],"name":"setCroxReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_referralCommissionRate","type":"uint16"}],"name":"setReferralCommissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardHolder","type":"address"}],"name":"setRewardHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_croxPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        805: function(e, t) {},
        807: function(e, t) {},
        81: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"NewDepositFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewSecondRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"NewWithdrawalInterval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"CROX_NEXTGEN_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_WITHDRAWAL_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECOND_PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount1","type":"uint256"},{"internalType":"uint256","name":"_amount2","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakedToken","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_secRewardToken","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_penaltyFee","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_secRewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_lockPeriod","type":"uint256"},{"internalType":"uint256","name":"_withdrawLock","type":"uint256"},{"internalType":"address","name":"_admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"penaltyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"redeemableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secAccTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secRewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTokenLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"updateFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateSecondRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"updateStakedTokenLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_interval","type":"uint256"}],"name":"updateWithdrawalInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLocked","type":"uint256"},{"internalType":"uint256","name":"secRewardDebt","type":"uint256"},{"internalType":"uint256","name":"secRewardLocked","type":"uint256"},{"internalType":"uint256","name":"withdrawFrom","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        814: function(e, t) {},
        816: function(e, t) {},
        824: function(e, t) {},
        826: function(e, t) {},
        834: function(e, t) {},
        836: function(e, t) {},
        843: function(e, t) {},
        845: function(e, t) {},
        890: function(e, t) {},
        892: function(e, t) {},
        924: function(e, t) {},
        926: function(e, t) {},
        931: function(e, t) {},
        933: function(e, t) {},
        945: function(e, t) {},
        948: function(e, t) {},
        95: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n(125),
                r = n.n(a),
                s = n(182),
                i = Object(s.a)(),
                o = new r.a.providers.HttpProvider(i, {
                    timeout: 1e4
                }),
                c = function() {
                    return new r.a(o)
                },
                d = function(e, t, n) {
                    return new(c().eth.Contract)(e, t, n)
                }
        },
        952: function(e, t) {},
        960: function(e, t) {},
        99: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(8),
                s = [{
                    pid: 0,
                    pidv1: 12,
                    risk: 5,
                    lpSymbol: "BNB-CROX LP",
                    lpAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0xE38e899cc99ddeA9737e06f0A22046d0CA904D70"
                    },
                    tokenSymbol: "CROX",
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 1,
                    pidv1: 13,
                    risk: 5,
                    lpSymbol: "BUSD-CROX LP",
                    lpAddresses: {
                        97: "",
                        56: "0xe1d5c90e94d73625628b2E6B7AEAbF5f1c504872"
                    },
                    tokenSymbol: "CROX",
                    tokenAddresses: {
                        97: "",
                        56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 23,
                    risk: 3,
                    lpSymbol: "CROX-USDC LP",
                    lpAddresses: {
                        97: "",
                        56: "0x62b8A593fcd8d743607Da8cA7ed05b1309298226"
                    },
                    tokenSymbol: "CROX",
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491"
                    },
                    quoteTokenSymbol: r.a.USDC,
                    quoteTokenAdresses: a.a.usdc,
                    title: ""
                }, {
                    pid: 26,
                    risk: 3,
                    lpSymbol: "OLIVE-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x51123Dd7BF791929BBfA75E913f7632A0eF1B82c"
                    },
                    tokenSymbol: "OLIVE",
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x617724974218A18769020A70162165A539c07E8a"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 27,
                    risk: 3,
                    lpSymbol: "REDBUFF-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0xbb19bdd11EE3fb3A2bC81fAb2DB8f07AE3054c87"
                    },
                    tokenSymbol: "REDBUFF",
                    tokenAddresses: {
                        97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
                        56: "0x9eC132c19f2c35272DE3f81a75D674752D952DA8"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 2,
                    pidv1: 14,
                    risk: 3,
                    lpSymbol: "CROX-CAKE LP",
                    lpAddresses: {
                        97: "",
                        56: "0x2B64133686cC7297df941E972a90cEB2c957d7cb"
                    },
                    tokenSymbol: "CROX",
                    tokenAddresses: {
                        97: "",
                        56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491"
                    },
                    quoteTokenSymbol: r.a.CAKE,
                    quoteTokenAdresses: a.a.cake,
                    title: ""
                }, {
                    pid: 3,
                    pidv1: 15,
                    risk: 1,
                    lpSymbol: "RASTA-CROX LP",
                    lpAddresses: {
                        97: "",
                        56: "0x068025Cb947C59684D298F9ad8FE475E3944ae9f"
                    },
                    tokenSymbol: "RASTA",
                    tokenAddresses: {
                        97: "",
                        56: "0xe3e8cc42da487d1116d26687856e9fb684817c52"
                    },
                    quoteTokenSymbol: r.a.CAKE,
                    quoteTokenAdresses: a.a.cake,
                    title: ""
                }, {
                    pid: 4,
                    pidv1: 16,
                    risk: 2,
                    lpSymbol: "BNB-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"
                    },
                    tokenSymbol: "BNB",
                    tokenAddresses: a.a.wbnb,
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 12,
                    risk: 5,
                    lpSymbol: "CROX-USDT LP",
                    lpAddresses: {
                        97: "",
                        56: "0x9CEEF5164081545C1989CD621C1f1d48E81Ba18A"
                    },
                    tokenSymbol: "CROX",
                    tokenAddresses: {
                        97: "",
                        56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491"
                    },
                    quoteTokenSymbol: r.a.UST,
                    quoteTokenAdresses: a.a.usdt,
                    title: ""
                }, {
                    pid: 5,
                    pidv1: 17,
                    risk: 2,
                    lpSymbol: "BTCB-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082"
                    },
                    tokenSymbol: "BTCB",
                    tokenAddresses: {
                        97: "",
                        56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 6,
                    pidv1: 18,
                    risk: 2,
                    lpSymbol: "ETH-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc"
                    },
                    tokenSymbol: "ETH",
                    tokenAddresses: {
                        97: "",
                        56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 7,
                    pidv1: 19,
                    risk: 2,
                    lpSymbol: "USDT-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00"
                    },
                    tokenSymbol: "USDT",
                    tokenAddresses: {
                        97: "",
                        56: "0x55d398326f99059ff775485246999027b3197955"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 8,
                    pidv1: 20,
                    risk: 1,
                    lpSymbol: "DAI-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489"
                    },
                    tokenSymbol: "DAI",
                    tokenAddresses: {
                        97: "",
                        56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 9,
                    pidv1: 21,
                    risk: 1,
                    lpSymbol: "CAKE-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0"
                    },
                    tokenSymbol: "CAKE",
                    tokenAddresses: {
                        97: "",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 10,
                    pidv1: 22,
                    risk: 1,
                    lpSymbol: "CAKE-BUSD LP",
                    lpAddresses: {
                        97: "",
                        56: "0x804678fa97d91B974ec2af3c843270886528a9E6"
                    },
                    tokenSymbol: "CAKE",
                    tokenAddresses: {
                        97: "",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    quoteTokenSymbol: r.a.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    title: ""
                }, {
                    pid: 11,
                    pidv1: 23,
                    risk: 1,
                    lpSymbol: "DOT-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF"
                    },
                    tokenSymbol: "DOT",
                    tokenAddresses: {
                        97: "",
                        56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 13,
                    risk: 5,
                    lpSymbol: "DOGE-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0xac109C8025F272414fd9e2faA805a583708A017f"
                    },
                    tokenSymbol: "DOGE",
                    tokenAddresses: {
                        97: "",
                        56: "0xba2ae424d960c26247dd6c32edc70b295c744c43"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }, {
                    pid: 14,
                    risk: 3,
                    lpSymbol: "ADA-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0x28415ff2C35b65B9E5c7de82126b4015ab9d031F"
                    },
                    tokenSymbol: "ADA",
                    tokenAddresses: {
                        97: "",
                        56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"
                    },
                    quoteTokenSymbol: r.a.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    title: ""
                }];
            t.a = s
        }
    },
    [
        [1130, 7, 8]
    ]
]);
//# sourceMappingURL=main.b2656ce6.chunk.js.map