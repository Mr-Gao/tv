(function (t) {
  function e(e) {
    for (
      var n, o, r = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (o = r[u]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    d && d(e);
    while (p.length) p.shift()();
    return s.push.apply(s, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== i[c] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var n = {},
    i = { app: 0 },
    s = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function (t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var l = 0; l < r.length; l++) e(r[l]);
  var d = c;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "0cae": function (t, e, a) {},
  "12e3": function (t, e, a) {},
  1831: function (t, e, a) {
    t.exports = a.p + "media/switch.mp3";
  },
  2395: function (t, e, a) {},
  "26fb": function (t, e, a) {
    t.exports = a.p + "images/ttt.jpg";
  },
  "289b": function (t, e) {
    window.storage = function (t, e) {
      if (void 0 !== e) {
        var a;
        try {
          a = JSON.stringify(e);
        } catch (i) {
          a = e;
        }
        return window.localStorage.setItem(t, a), !0;
      }
      var n;
      try {
        n = JSON.parse(window.localStorage.getItem(t));
      } catch (s) {
        n = window.localStorage.getItem(t);
      }
      return n;
    };
  },
  "318a": function (t, e, a) {
    "use strict";
    a("12e3");
  },
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e623"), a("e379"), a("5dc8"), a("37e1");
    var n = a("2b0e"),
      i = function () {
        var t = this,
          e = this,
          a = e.$createElement,
          n = e._self._c || a;
        return n(
          "div",
          { staticClass: "container" },
          [
            n("Television", {
              on: {
                pay: function () {
                  t.$refs.paycode.open();
                },
              },
            }),
            n("Footer"),
            n(
              "Modal",
              {
                ref: "paycode",
                staticClass: "paycode",
                attrs: { "btn-text": "下次一定" },
              },
              [
                n("p", [e._v("哇哦٩(๑ᵒ̴̶͈᷄ᗨᵒ̴̶͈᷅)و ！你要请我喝奶茶吗?")]),
                n("img", { attrs: { src: "images/ttt.jpg" } }),
                n(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "11px",
                      "margin-top": "10px",
                      color: "#666",
                    },
                  },
                  [
                    n("p", [e._v("赞赏仅用做服务器补贴，感谢你的支持哦~")]),
                    n("p", [
                      e._v("“"),
                      n("span", { staticStyle: { color: "#46c829" } }, [
                        e._v("您有想看的节目或建议"),
                      ]),
                      e._v("”可以附带留言告诉我"),
                    ]),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      s = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "all" }, [
          n(
            "div",
            {
              staticClass: "old-tv",
              class: {
                off: !t.power,
                load: t.loaded,
                "off-animation": t.offAnimation,
              },
            },
            [
              n(
                "div",
                { staticClass: "paycode-btn", on: { click: t.showPaycode } },
                [n("img", { attrs: { src: a("64bb") } })]
              ),
              n("div", { staticClass: "antenna" }),
              n("main", [
                n("div", { staticClass: "error-noise" }, [
                  n("div", { staticClass: "error-effect" }, [
                    n("video", { ref: "video", attrs: { playsinline: "" } }),
                    n("div", { staticClass: "old-tv-content" }, [
                      t.power
                        ? n("div", { staticClass: "text-layout" }, [
                            t.rate > 1
                              ? n("span", { staticClass: "corner-text rate" }, [
                                  t._v(t._s(t.rate) + "x"),
                                ])
                              : t._e(),
                            t.loaded
                              ? t._e()
                              : n("p", [t._v(" " + t._s(t.waitingText) + " ")]),
                          ])
                        : t._e(),
                    ]),
                  ]),
                ]),
              ]),
              n("div", { staticClass: "speaker" }),
              n("div", { staticClass: "volume" }, [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: t.volume,
                      expression: "volume",
                      modifiers: { number: !0 },
                    },
                  ],
                  attrs: { type: "range", min: "0", max: "100" },
                  domProps: { value: t.volume },
                  on: {
                    __r: function (e) {
                      t.volume = t._n(e.target.value);
                    },
                    blur: function (e) {
                      return t.$forceUpdate();
                    },
                  },
                }),
              ]),
              n("nav", { staticClass: "channel" }, [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: t.rate,
                      expression: "rate",
                      modifiers: { number: !0 },
                    },
                  ],
                  attrs: { type: "range", min: "1", max: "2", step: "0.5" },
                  domProps: { value: t.rate },
                  on: {
                    __r: function (e) {
                      t.rate = t._n(e.target.value);
                    },
                    blur: function (e) {
                      return t.$forceUpdate();
                    },
                  },
                }),
              ]),
              n(
                "nav",
                {
                  staticClass: "power",
                  on: { click: t.handlePowerClick, touchend: t.handlePowerOn },
                },
                [n("button")]
              ),
              n("nav"),
              n("footer"),
            ]
          ),
          t.playInOrder
            ? n("div", { staticClass: "controller" }, [
                n(
                  "div",
                  {
                    staticClass: "prev",
                    on: {
                      click: function (e) {
                        return t.handlePlaylist(0);
                      },
                    },
                  },
                  [n("i", { staticClass: "iconfont icon-Previoustrack" })]
                ),
                n("span", { staticClass: "play-index" }, [
                  t._v(t._s(t.nowPlaying) + "/" + t._s(t.videoSeries.count)),
                ]),
                n(
                  "div",
                  {
                    staticClass: "next",
                    on: {
                      click: function (e) {
                        return t.handlePlaylist(1);
                      },
                    },
                  },
                  [n("i", { staticClass: "iconfont icon-Previoustrack" })]
                ),
              ])
            : t._e(),
          t._m(0),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { attrs: { id: "table-tv" } }, [
            a("div", { staticClass: "scene" }, [
              a("div", { staticClass: "shape cuboid-1 cub-1" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow": "inset 0 1px rgba(255,255,255,0.2)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", {
                  staticClass: "face tp",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
              ]),
              a("div", { staticClass: "shape cuboid-3 cub-3" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", {
                  staticClass: "face lt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-4 cub-4" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", {
                  staticClass: "face lt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-5 cub-5" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", {
                  staticClass: "face rt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-6 cub-6" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", {
                  staticClass: "face rt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-2 cub-2" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow": "inset 0 1px rgba(255,255,255,0.2)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", {
                  staticClass: "face tp",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)",
                  },
                }),
              ]),
            ]),
          ]);
        },
      ],
      c = a("1da1"),
      l = (a("96cf"), a("b0c0"), a("99af"), a("1831")),
      d = a.n(l),
      u = a("f5c5"),
      p = a.n(u),
      f = [
        {
          name: "longzhu1",
          count: 10,
          repo: "superdangdang/tv",
          playInOrder: !0,
        },
        {
          name: "shierdameinv",
          count: 6,
          repo: "superdangdang/tv",
          playInOrder: !0,
          random: !0,
        },
        { name: "duolaameng", count: 1, repo: "superdangdang/tv2" },
        { name: "heimaojingzhang", count: 1, repo: "superdangdang/tv2" },
        {
          name: "labixiaoxin",
          count: 2,
          repo: "superdangdang/tv2",
          playInOrder: !0,
        },
        { name: "outman", count: 1, repo: "superdangdang/tv2" },
        { name: "tiebiatongmu", count: 1, repo: "superdangdang/tv2" },
      ],
      v = [
        "信号接收中...",
        "⚠️电压不稳定⚠️",
        "正在拍打电视机",
        "电视机正在冒烟",
        "再等等",
        "FBI WARNING",
        "CDN信号接入中...",
      ],
      h = { switch: new Audio(d.a), noise: new Audio(p.a) };
    function m(t) {
      return Math.floor(Math.random() * t);
    }
    function b() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return t[m(t.length)];
    }
    h.noise.loop = !0;
    var y = {
        data: function () {
          return {
            videoControl: null,
            volume: 100,
            rate: 1,
            power: !1,
            loaded: !1,
            paycode: !1,
            waitingText: v[0],
            waitingTextTimer: null,
            cdn: "",
            videoSeries: {},
            offAnimation: !1,
          };
        },
        watch: {
          volume: function (t, e) {
            var a = t / 100;
            this.videoControl.volume(a), (h.noise.volume = a);
          },
          rate: function (t, e) {
            this.videoControl.playbackRate(t);
          },
        },
        created: function () {
          this.setWaitingText();
        },
        mounted: function () {
          var t = this;
          (this.videoControl = videojs(this.$refs.video, {
            autoplay: !0,
            controls: !1,
            loop: !0,
            width: 0,
            height: 0,
            children: [],
          })),
            this.videoControl.on("canplay", function () {
              t.handleCanplay();
            }),
            this.videoControl.on("error", function () {
              4 === t.videoControl.error().code && t.handleMediaError();
            });
        },
        destroyed: function () {
          clearTimeout(this.waitingTextTimer);
        },
        computed: {
          playInOrder: function () {
            return !!this.videoSeries.playInOrder;
          },
        },
        methods: {
          handlePowerClick: function () {
            "ontouchstart" in document || this.handlePowerOn();
          },
          handlePowerOn: function () {
            var t = this;
            return Object(c["a"])(
              regeneratorRuntime.mark(function e() {
                var a, n, i, s, o, r, c, l;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        h.switch.pause(),
                          (h.switch.currentTime = 0),
                          h.switch.play(),
                          (t.power = !t.power),
                          t.power
                            ? ((t.offAnimation = !1),
                              t.toWaitState(),
                              (t.videoSeries = b(f)),
                              (a = t.videoSeries),
                              (n = a.name),
                              (i = a.repo),
                              (s = a.count),
                              (o = a.playInOrder),
                              (r = a.random),
                              (t.nowPlaying = o && !r ? 1 : m(s) + 1),
                              (c = "".concat(n, "/").concat(t.nowPlaying)),
                              (l = "https://cdn.jsdelivr.net/gh/"
                                .concat(i, "@master/videos/")
                                .concat(c, "/playlist.m3u8")),
                              t.videoControl.src() === l
                                ? (t.handleCanplay(),
                                  t.videoControl.play().catch(function (e) {
                                    console.warn(e),
                                      9 === e.code &&
                                        t.toErrorState(
                                          "信号丢失 请插拔电源重试"
                                        );
                                  }))
                                : t.videoControl.src({
                                    type: "application/x-mpegURL",
                                    src: l,
                                  }))
                            : t.toStopState();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          handleCanplay: function () {
            this.toPlayState();
          },
          handleMediaError: function () {
            this.toErrorState("信号丢失 请插拔电源重试");
          },
          toPlayState: function () {
            h.noise.pause(),
              (this.loaded = !0),
              clearTimeout(this.waitingTextTimer);
          },
          toWaitState: function () {
            (this.waitingText = v[0]),
              this.setWaitingText(),
              h.noise.play(),
              (this.loaded = !1);
          },
          toStopState: function () {
            (this.offAnimation = !0),
              (this.videoSeries = {}),
              clearTimeout(this.waitingTextTimer),
              (this.rate = 1),
              h.noise.pause(),
              this.videoControl.pause(),
              (this.loaded = !1);
          },
          toErrorState: function (t) {
            clearTimeout(this.waitingTextTimer),
              h.noise.play(),
              (this.loaded = !1),
              (this.waitingText = t);
          },
          showPaycode: function () {
            this.$emit("pay");
          },
          setWaitingText: function () {
            var t = this;
            this.waitingTextTimer = setTimeout(function () {
              (t.waitingText = b(v)), t.setWaitingText();
            }, 1e3 * (m(5) + 5));
          },
          handlePlaylist: function (t) {
            if (this.loaded)
              if (t) {
                if (this.nowPlaying >= this.videoSeries.count) return;
                this.playSeries(this.nowPlaying + 1);
              } else {
                if (this.nowPlaying <= 1) return;
                this.playSeries(this.nowPlaying - 1);
              }
          },
          playSeries: function (t) {
            var e = this;
            this.toWaitState();
            var a = this.videoSeries,
              n = a.name,
              i = a.repo;
            a.count, a.playInOrder;
            this.nowPlaying = t;
            var s = "".concat(n, "/").concat(this.nowPlaying),
              o = "https://cdn.jsdelivr.net/gh/"
                .concat(i, "@master/videos/")
                .concat(s, "/playlist.m3u8");
            this.videoControl.src() === o
              ? (this.handleCanplay(),
                this.videoControl.play().catch(function (t) {
                  console.warn(t),
                    9 === t.code && e.toErrorState("信号丢失 请插拔电源重试");
                }))
              : this.videoControl.src({
                  type: "application/x-mpegURL",
                  src: o,
                });
          },
        },
      },
      x = y,
      g = (a("318a"), a("2877")),
      C = Object(g["a"])(x, o, r, !1, null, "03d70710", null),
      w = C.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "container-footer" },
          [
            n("p", { staticClass: "copyright" }, [
              n("span", { staticClass: "no-select" }, [
                t._v("© 2020 - " + t._s(t.year) + " "),
              ]),
              t._v(" 外卖券干饭人 "),
              t._m(0),
            ]),
            n(
              "Modal",
              {
                ref: "contact",
                staticClass: "contact",
                attrs: { "btn-text": "再见！" },
              },
              [
                n("img", {
                  staticClass: "contact-code",
                  attrs: { src: a("26fb") },
                }),
                n("p", [t._v("备注来意")]),
                t._v(
                  " （比如有没有可能来个带宽资源赞助？电视信号快断粮了，宝～） "
                ),
              ]
            ),
          ],
          1
        );
      },
      T = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("span", { staticClass: "links" }, [
            a(
              "a",
              {
                attrs: {
                  href: "https://www.baidu.com",
                },
              },
              [t._v("更多好玩")]
            ),
          ]);
        },
      ],
      X = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("transition", { attrs: { name: "fadein" } }, [
          a(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.visible,
                  expression: "visible",
                },
              ],
              staticClass: "modal",
            },
            [
              t._t("default"),
              a("div", { staticClass: "close-btn", on: { click: t.close } }, [
                t._v(" " + t._s(t.btnText) + " "),
              ]),
            ],
            2
          ),
        ]);
      },
      S = [],
      R = {
        name: "Modal",
        props: { btnText: { type: String, default: "" } },
        data: function () {
          return { visible: !1 };
        },
        methods: {
          open: function () {
            this.visible = !0;
          },
          close: function () {
            this.visible = !1;
          },
        },
      },
      O = R,
      j = (a("6306"), Object(g["a"])(O, X, S, !1, null, "e8323650", null)),
      k = j.exports,
      D = {
        name: "Footer",
        components: { Modal: k },
        computed: {
          year: function () {
            return new Date().getFullYear();
          },
        },
      },
      N = D,
      L = (a("ca11"), Object(g["a"])(N, P, T, !1, null, "24dd2893", null)),
      I = L.exports,
      z = {
        name: "App",
        components: { Television: w, Footer: I, Modal: k },
        data: function () {
          return { paycode: !1 };
        },
      },
      G = z,
      V = (a("7c55"), Object(g["a"])(G, i, s, !1, null, null, null)),
      q = V.exports;
    a("289b"), a("cd22");
    (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function (t) {
          return t(q);
        },
      }).$mount("#app");
  },
  6306: function (t, e, a) {
    "use strict";
    a("e6e3");
  },
  "64bb": function (t, e, a) {
    t.exports = a.p + "tv/images/milktea.png";
  },
  "7c55": function (t, e, a) {
    "use strict";
    a("2395");
  },
  ca11: function (t, e, a) {
    "use strict";
    a("0cae");
  },
  cd22: function (t, e, a) {},
  e6e3: function (t, e, a) {},
  f5c5: function (t, e, a) {
    t.exports = a.p + "tv/media/noise.mp3";
  },
});
(function (t) {
  function e(e) {
    for (
      var n, o, r = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (o = r[u]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    d && d(e);
    while (p.length) p.shift()();
    return s.push.apply(s, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== i[c] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var n = {},
    i = { app: 0 },
    s = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function (t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var l = 0; l < r.length; l++) e(r[l]);
  var d = c;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "0cae": function (t, e, a) {},
  "12e3": function (t, e, a) {},
  1831: function (t, e, a) {
    t.exports = a.p + "media/switch.mp3";
  },
  2395: function (t, e, a) {},
  "26fb": function (t, e, a) {
    t.exports = a.p + "images/ttt.jpg";
  },
  "289b": function (t, e) {
    window.storage = function (t, e) {
      if (void 0 !== e) {
        var a;
        try {
          a = JSON.stringify(e);
        } catch (i) {
          a = e;
        }
        return window.localStorage.setItem(t, a), !0;
      }
      var n;
      try {
        n = JSON.parse(window.localStorage.getItem(t));
      } catch (s) {
        n = window.localStorage.getItem(t);
      }
      return n;
    };
  },
  "318a": function (t, e, a) {
    "use strict";
    a("12e3");
  },
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e623"), a("e379"), a("5dc8"), a("37e1");
    var n = a("2b0e"),
      i = function () {
        var t = this,
          e = this,
          a = e.$createElement,
          n = e._self._c || a;
        return n(
          "div",
          { staticClass: "container" },
          [
            n("Television", {
              on: {
                pay: function () {
                  t.$refs.paycode.open();
                },
              },
            }),
            n("Footer"),
            n(
              "Modal",
              {
                ref: "paycode",
                staticClass: "paycode",
                attrs: { "btn-text": "下次一定" },
              },
              [
                n("p", [e._v("哇哦٩(๑ᵒ̴̶͈᷄ᗨᵒ̴̶͈᷅)و ！你要请我喝奶茶吗?")]),
                n("img", {
                  attrs: {
                    src: "data:image/png;base64,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",
                  },
                }),
                n(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "11px",
                      "margin-top": "10px",
                      color: "#666",
                    },
                  },
                  [
                    n("p", [e._v("转错以及想退回的可以在微信支付账单详情")]),
                    n("p", [
                      e._v("“"),
                      n("span", { staticStyle: { color: "#46c829" } }, [
                        e._v("联系收款方"),
                      ]),
                      e._v("”可以附带留言告诉我哦~"),
                    ]),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      s = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "all" }, [
          n(
            "div",
            {
              staticClass: "old-tv",
              class: {
                off: !t.power,
                load: t.loaded,
                "off-animation": t.offAnimation,
              },
            },
            [
              n(
                "div",
                { staticClass: "paycode-btn", on: { click: t.showPaycode } },
                [n("img", { attrs: { src: a("64bb") } })]
              ),
              n("div", { staticClass: "antenna" }),
              n("main", [
                n("div", { staticClass: "error-noise" }, [
                  n("div", { staticClass: "error-effect" }, [
                    n("video", { ref: "video", attrs: { playsinline: "" } }),
                    n("div", { staticClass: "old-tv-content" }, [
                      t.power
                        ? n("div", { staticClass: "text-layout" }, [
                            t.rate > 1
                              ? n("span", { staticClass: "corner-text rate" }, [
                                  t._v(t._s(t.rate) + "x"),
                                ])
                              : t._e(),
                            t.loaded
                              ? t._e()
                              : n("p", [t._v(" " + t._s(t.waitingText) + " ")]),
                          ])
                        : t._e(),
                    ]),
                  ]),
                ]),
              ]),
              n("div", { staticClass: "speaker" }),
              n("div", { staticClass: "volume" }, [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: t.volume,
                      expression: "volume",
                      modifiers: { number: !0 },
                    },
                  ],
                  attrs: { type: "range", min: "0", max: "100" },
                  domProps: { value: t.volume },
                  on: {
                    __r: function (e) {
                      t.volume = t._n(e.target.value);
                    },
                    blur: function (e) {
                      return t.$forceUpdate();
                    },
                  },
                }),
              ]),
              n("nav", { staticClass: "channel" }, [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: t.rate,
                      expression: "rate",
                      modifiers: { number: !0 },
                    },
                  ],
                  attrs: { type: "range", min: "1", max: "2", step: "0.5" },
                  domProps: { value: t.rate },
                  on: {
                    __r: function (e) {
                      t.rate = t._n(e.target.value);
                    },
                    blur: function (e) {
                      return t.$forceUpdate();
                    },
                  },
                }),
              ]),
              n(
                "nav",
                {
                  staticClass: "power",
                  on: { click: t.handlePowerClick, touchend: t.handlePowerOn },
                },
                [n("button")]
              ),
              n("nav"),
              n("footer"),
            ]
          ),
          t.playInOrder
            ? n("div", { staticClass: "controller" }, [
                n(
                  "div",
                  {
                    staticClass: "prev",
                    on: {
                      click: function (e) {
                        return t.handlePlaylist(0);
                      },
                    },
                  },
                  [n("i", { staticClass: "iconfont icon-Previoustrack" })]
                ),
                n("span", { staticClass: "play-index" }, [
                  t._v(t._s(t.nowPlaying) + "/" + t._s(t.videoSeries.count)),
                ]),
                n(
                  "div",
                  {
                    staticClass: "next",
                    on: {
                      click: function (e) {
                        return t.handlePlaylist(1);
                      },
                    },
                  },
                  [n("i", { staticClass: "iconfont icon-Previoustrack" })]
                ),
              ])
            : t._e(),
          t._m(0),
        ]);
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { attrs: { id: "table-tv" } }, [
            a("div", { staticClass: "scene" }, [
              a("div", { staticClass: "shape cuboid-1 cub-1" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow": "inset 0 1px rgba(255,255,255,0.2)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", {
                  staticClass: "face tp",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
              ]),
              a("div", { staticClass: "shape cuboid-3 cub-3" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", {
                  staticClass: "face lt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-4 cub-4" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", {
                  staticClass: "face lt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-5 cub-5" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", {
                  staticClass: "face rt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.8)",
                  },
                }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-6 cub-6" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", {
                  staticClass: "face rt",
                  staticStyle: {
                    "box-shadow": "inset 0 300px rgba(0,0,0,0.3)",
                  },
                }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", { staticClass: "face tp" }),
              ]),
              a("div", { staticClass: "shape cuboid-2 cub-2" }, [
                a("div", {
                  staticClass: "face ft",
                  staticStyle: {
                    "box-shadow": "inset 0 1px rgba(255,255,255,0.2)",
                  },
                }),
                a("div", { staticClass: "face bk" }),
                a("div", { staticClass: "face rt" }),
                a("div", { staticClass: "face lt" }),
                a("div", { staticClass: "face bm" }),
                a("div", {
                  staticClass: "face tp",
                  staticStyle: {
                    "box-shadow":
                      "inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)",
                  },
                }),
              ]),
            ]),
          ]);
        },
      ],
      c = a("1da1"),
      l = (a("96cf"), a("b0c0"), a("99af"), a("1831")),
      d = a.n(l),
      u = a("f5c5"),
      p = a.n(u),
      f = [
        {
          name: "longzhu1",
          count: 10,
          repo: "superdangdang/tv",
          playInOrder: !0,
        },
        {
          name: "shierdameinv",
          count: 6,
          repo: "superdangdang/tv",
          playInOrder: !0,
          random: !0,
        },
        { name: "duolaameng", count: 1, repo: "superdangdang/tv2" },
        { name: "heimaojingzhang", count: 1, repo: "superdangdang/tv2" },
        {
          name: "labixiaoxin",
          count: 2,
          repo: "superdangdang/tv2",
          playInOrder: !0,
        },
        { name: "outman", count: 1, repo: "superdangdang/tv2" },
        { name: "tiebiatongmu", count: 1, repo: "superdangdang/tv2" },
      ],
      v = [
        "信号接收中...",
        "⚠️电压不稳定⚠️",
        "正在拍打电视机",
        "电视机正在冒烟",
        "再等等",
        "FBI WARNING",
        "CDN信号接入中...",
      ],
      h = { switch: new Audio(d.a), noise: new Audio(p.a) };
    function m(t) {
      return Math.floor(Math.random() * t);
    }
    function b() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return t[m(t.length)];
    }
    h.noise.loop = !0;
    var y = {
        data: function () {
          return {
            videoControl: null,
            volume: 100,
            rate: 1,
            power: !1,
            loaded: !1,
            paycode: !1,
            waitingText: v[0],
            waitingTextTimer: null,
            cdn: "",
            videoSeries: {},
            offAnimation: !1,
          };
        },
        watch: {
          volume: function (t, e) {
            var a = t / 100;
            this.videoControl.volume(a), (h.noise.volume = a);
          },
          rate: function (t, e) {
            this.videoControl.playbackRate(t);
          },
        },
        created: function () {
          this.setWaitingText();
        },
        mounted: function () {
          var t = this;
          (this.videoControl = videojs(this.$refs.video, {
            autoplay: !0,
            controls: !1,
            loop: !0,
            width: 0,
            height: 0,
            children: [],
          })),
            this.videoControl.on("canplay", function () {
              t.handleCanplay();
            }),
            this.videoControl.on("error", function () {
              4 === t.videoControl.error().code && t.handleMediaError();
            });
        },
        destroyed: function () {
          clearTimeout(this.waitingTextTimer);
        },
        computed: {
          playInOrder: function () {
            return !!this.videoSeries.playInOrder;
          },
        },
        methods: {
          handlePowerClick: function () {
            "ontouchstart" in document || this.handlePowerOn();
          },
          handlePowerOn: function () {
            var t = this;
            return Object(c["a"])(
              regeneratorRuntime.mark(function e() {
                var a, n, i, s, o, r, c, l;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        h.switch.pause(),
                          (h.switch.currentTime = 0),
                          h.switch.play(),
                          (t.power = !t.power),
                          t.power
                            ? ((t.offAnimation = !1),
                              t.toWaitState(),
                              (t.videoSeries = b(f)),
                              (a = t.videoSeries),
                              (n = a.name),
                              (i = a.repo),
                              (s = a.count),
                              (o = a.playInOrder),
                              (r = a.random),
                              (t.nowPlaying = o && !r ? 1 : m(s) + 1),
                              (c = "".concat(n, "/").concat(t.nowPlaying)),
                              (l = "https://cdn.jsdelivr.net/gh/"
                                .concat(i, "@master/videos/")
                                .concat(c, "/playlist.m3u8")),
                              t.videoControl.src() === l
                                ? (t.handleCanplay(),
                                  t.videoControl.play().catch(function (e) {
                                    console.warn(e),
                                      9 === e.code &&
                                        t.toErrorState(
                                          "信号丢失 请插拔电源重试"
                                        );
                                  }))
                                : t.videoControl.src({
                                    type: "application/x-mpegURL",
                                    src: l,
                                  }))
                            : t.toStopState();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          handleCanplay: function () {
            this.toPlayState();
          },
          handleMediaError: function () {
            this.toErrorState("信号丢失 请插拔电源重试");
          },
          toPlayState: function () {
            h.noise.pause(),
              (this.loaded = !0),
              clearTimeout(this.waitingTextTimer);
          },
          toWaitState: function () {
            (this.waitingText = v[0]),
              this.setWaitingText(),
              h.noise.play(),
              (this.loaded = !1);
          },
          toStopState: function () {
            (this.offAnimation = !0),
              (this.videoSeries = {}),
              clearTimeout(this.waitingTextTimer),
              (this.rate = 1),
              h.noise.pause(),
              this.videoControl.pause(),
              (this.loaded = !1);
          },
          toErrorState: function (t) {
            clearTimeout(this.waitingTextTimer),
              h.noise.play(),
              (this.loaded = !1),
              (this.waitingText = t);
          },
          showPaycode: function () {
            this.$emit("pay");
          },
          setWaitingText: function () {
            var t = this;
            this.waitingTextTimer = setTimeout(function () {
              (t.waitingText = b(v)), t.setWaitingText();
            }, 1e3 * (m(5) + 5));
          },
          handlePlaylist: function (t) {
            if (this.loaded)
              if (t) {
                if (this.nowPlaying >= this.videoSeries.count) return;
                this.playSeries(this.nowPlaying + 1);
              } else {
                if (this.nowPlaying <= 1) return;
                this.playSeries(this.nowPlaying - 1);
              }
          },
          playSeries: function (t) {
            var e = this;
            this.toWaitState();
            var a = this.videoSeries,
              n = a.name,
              i = a.repo;
            a.count, a.playInOrder;
            this.nowPlaying = t;
            var s = "".concat(n, "/").concat(this.nowPlaying),
              o = "https://cdn.jsdelivr.net/gh/"
                .concat(i, "@master/videos/")
                .concat(s, "/playlist.m3u8");
            this.videoControl.src() === o
              ? (this.handleCanplay(),
                this.videoControl.play().catch(function (t) {
                  console.warn(t),
                    9 === t.code && e.toErrorState("信号丢失 请插拔电源重试");
                }))
              : this.videoControl.src({
                  type: "application/x-mpegURL",
                  src: o,
                });
          },
        },
      },
      x = y,
      g = (a("318a"), a("2877")),
      C = Object(g["a"])(x, o, r, !1, null, "03d70710", null),
      w = C.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "container-footer" },
          [
            n("p", { staticClass: "copyright" }, [
              n("span", { staticClass: "no-select" }, [
                t._v("© 2016 - " + t._s(t.year) + ","),
              ]),
              t._v(" 外卖券干饭人 "),
              t._m(0),
            ]),
            n(
              "Modal",
              {
                ref: "contact",
                staticClass: "contact",
                attrs: { "btn-text": "再见！" },
              },
              [
                n("img", {
                  staticClass: "contact-code",
                  attrs: { src: a("26fb") },
                }),
                n("p", [t._v("备注来意")]),
                t._v(
                  " （比如有没有可能来个带宽资源赞助？电视信号快断粮了，宝～） "
                ),
              ]
            ),
          ],
          1
        );
      },
      T = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("span", { staticClass: "links" }, [
            a(
              "a",
              {
                attrs: {
                  href: "https://www.baidu.com",
                },
              },
              [t._v("更多好玩")]
            ),
          ]);
        },
      ],
      X = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("transition", { attrs: { name: "fadein" } }, [
          a(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.visible,
                  expression: "visible",
                },
              ],
              staticClass: "modal",
            },
            [
              t._t("default"),
              a("div", { staticClass: "close-btn", on: { click: t.close } }, [
                t._v(" " + t._s(t.btnText) + " "),
              ]),
            ],
            2
          ),
        ]);
      },
      S = [],
      R = {
        name: "Modal",
        props: { btnText: { type: String, default: "" } },
        data: function () {
          return { visible: !1 };
        },
        methods: {
          open: function () {
            this.visible = !0;
          },
          close: function () {
            this.visible = !1;
          },
        },
      },
      O = R,
      j = (a("6306"), Object(g["a"])(O, X, S, !1, null, "e8323650", null)),
      k = j.exports,
      D = {
        name: "Footer",
        components: { Modal: k },
        computed: {
          year: function () {
            return new Date().getFullYear();
          },
        },
      },
      N = D,
      L = (a("ca11"), Object(g["a"])(N, P, T, !1, null, "24dd2893", null)),
      I = L.exports,
      z = {
        name: "App",
        components: { Television: w, Footer: I, Modal: k },
        data: function () {
          return { paycode: !1 };
        },
      },
      G = z,
      V = (a("7c55"), Object(g["a"])(G, i, s, !1, null, null, null)),
      q = V.exports;
    a("289b"), a("cd22");
    (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function (t) {
          return t(q);
        },
      }).$mount("#app");
  },
  6306: function (t, e, a) {
    "use strict";
    a("e6e3");
  },
  "64bb": function (t, e, a) {
    t.exports = a.p + "tv/images/milktea.png";
  },
  "7c55": function (t, e, a) {
    "use strict";
    a("2395");
  },
  ca11: function (t, e, a) {
    "use strict";
    a("0cae");
  },
  cd22: function (t, e, a) {},
  e6e3: function (t, e, a) {},
  f5c5: function (t, e, a) {
    t.exports = a.p + "tv/media/noise.mp3";
  },
});
