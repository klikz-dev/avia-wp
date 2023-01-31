!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var s = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          i.d(
            n,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 33));
})([
  function (e, t, i) {
    "use strict";
    var n = i(3),
      s = Object.prototype.toString;
    function a(e) {
      return "[object Array]" === s.call(e);
    }
    function r(e) {
      return void 0 === e;
    }
    function o(e) {
      return null !== e && "object" == typeof e;
    }
    function l(e) {
      return "[object Function]" === s.call(e);
    }
    function c(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), a(e)))
          for (var i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e);
        else
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) &&
              t.call(null, e[s], s, e);
    }
    e.exports = {
      isArray: a,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === s.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !r(e) &&
          null !== e.constructor &&
          !r(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: o,
      isUndefined: r,
      isDate: function (e) {
        return "[object Date]" === s.call(e);
      },
      isFile: function (e) {
        return "[object File]" === s.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === s.call(e);
      },
      isFunction: l,
      isStream: function (e) {
        return o(e) && l(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function e() {
        var t = {};
        function i(i, n) {
          "object" == typeof t[n] && "object" == typeof i
            ? (t[n] = e(t[n], i))
            : (t[n] = i);
        }
        for (var n = 0, s = arguments.length; n < s; n++) c(arguments[n], i);
        return t;
      },
      deepMerge: function e() {
        var t = {};
        function i(i, n) {
          "object" == typeof t[n] && "object" == typeof i
            ? (t[n] = e(t[n], i))
            : (t[n] = "object" == typeof i ? e({}, i) : i);
        }
        for (var n = 0, s = arguments.length; n < s; n++) c(arguments[n], i);
        return t;
      },
      extend: function (e, t, i) {
        return (
          c(t, function (t, s) {
            e[s] = i && "function" == typeof t ? n(t, i) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, i) {
    (function (i) {
      var n, s;
      /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */ window.Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          var t,
            i = (this.document || this.ownerDocument).querySelectorAll(e),
            n = this;
          do {
            for (t = i.length; 0 <= --t && i.item(t) !== n; );
          } while (t < 0 && (n = n.parentElement));
          return n;
        }),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
          }
          "function" != typeof window.CustomEvent &&
            ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
        })(),
        (function () {
          for (
            var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
            i < t.length && !window.requestAnimationFrame;
            ++i
          )
            (window.requestAnimationFrame =
              window[t[i] + "RequestAnimationFrame"]),
              (window.cancelAnimationFrame =
                window[t[i] + "CancelAnimationFrame"] ||
                window[t[i] + "CancelRequestAnimationFrame"]);
          window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (t, i) {
              var n = new Date().getTime(),
                s = Math.max(0, 16 - (n - e)),
                a = window.setTimeout(function () {
                  t(n + s);
                }, s);
              return (e = n + s), a;
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (e) {
                clearTimeout(e);
              });
        })(),
        (s = void 0 !== i ? i : "undefined" != typeof window ? window : this),
        void 0 ===
          (n = function () {
            return (function (e) {
              "use strict";
              var t = {
                  ignore: "[data-scroll-ignore]",
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: "easeInOutCubic",
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                },
                i = function () {
                  var e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (t) {
                      for (var i in t) {
                        if (!t.hasOwnProperty(i)) return;
                        e[i] = t[i];
                      }
                    }),
                    e
                  );
                },
                n = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      i = String(e),
                      n = i.length,
                      s = -1,
                      a = "",
                      r = i.charCodeAt(0);
                    ++s < n;

                  ) {
                    if (0 === (t = i.charCodeAt(s)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    a +=
                      (1 <= t && t <= 31) ||
                      127 == t ||
                      (0 === s && 48 <= t && t <= 57) ||
                      (1 === s && 48 <= t && t <= 57 && 45 === r)
                        ? "\\" + t.toString(16) + " "
                        : 128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                        ? i.charAt(s)
                        : "\\" + i.charAt(s);
                  }
                  return "#" + a;
                },
                s = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                a = function (t, i, n) {
                  0 === t && document.body.focus(),
                    n ||
                      (t.focus(),
                      document.activeElement !== t &&
                        (t.setAttribute("tabindex", "-1"),
                        t.focus(),
                        (t.style.outline = "none")),
                      e.scrollTo(0, i));
                },
                r = function (t, i, n, s) {
                  if (i.emitEvents && "function" == typeof e.CustomEvent) {
                    var a = new CustomEvent(t, {
                      bubbles: !0,
                      detail: { anchor: n, toggle: s },
                    });
                    document.dispatchEvent(a);
                  }
                };
              return function (o, l) {
                var c,
                  d,
                  u,
                  h,
                  p = {
                    cancelScroll: function (e) {
                      cancelAnimationFrame(h),
                        (h = null),
                        e || r("scrollCancel", c);
                    },
                    animateScroll: function (n, o, l) {
                      p.cancelScroll();
                      var d = i(c || t, l || {}),
                        m =
                          "[object Number]" ===
                          Object.prototype.toString.call(n),
                        f = m || !n.tagName ? null : n;
                      if (m || f) {
                        var g = e.pageYOffset;
                        d.header &&
                          !u &&
                          (u = document.querySelector(d.header));
                        var v,
                          y,
                          b,
                          w,
                          T,
                          E,
                          S,
                          x,
                          C = (function (t) {
                            return t
                              ? ((i = t),
                                parseInt(e.getComputedStyle(i).height, 10) +
                                  t.offsetTop)
                              : 0;
                            var i;
                          })(u),
                          k = m
                            ? n
                            : (function (t, i, n, a) {
                                var r = 0;
                                if (t.offsetParent)
                                  for (
                                    ;
                                    (r += t.offsetTop), (t = t.offsetParent);

                                  );
                                return (
                                  (r = Math.max(r - i - n, 0)),
                                  a && (r = Math.min(r, s() - e.innerHeight)),
                                  r
                                );
                              })(
                                f,
                                C,
                                parseInt(
                                  "function" == typeof d.offset
                                    ? d.offset(n, o)
                                    : d.offset,
                                  10
                                ),
                                d.clip
                              ),
                          M = k - g,
                          P = s(),
                          A = 0,
                          L =
                            ((v = M),
                            (b = (y = d).speedAsDuration
                              ? y.speed
                              : Math.abs((v / 1e3) * y.speed)),
                            y.durationMax && b > y.durationMax
                              ? y.durationMax
                              : y.durationMin && b < y.durationMin
                              ? y.durationMin
                              : parseInt(b, 10)),
                          $ = function (t) {
                            var i, s, l;
                            w || (w = t),
                              (A += t - w),
                              (E =
                                g +
                                M *
                                  ((s = T =
                                    1 < (T = 0 === L ? 0 : A / L) ? 1 : T),
                                  "easeInQuad" === (i = d).easing &&
                                    (l = s * s),
                                  "easeOutQuad" === i.easing &&
                                    (l = s * (2 - s)),
                                  "easeInOutQuad" === i.easing &&
                                    (l =
                                      s < 0.5
                                        ? 2 * s * s
                                        : (4 - 2 * s) * s - 1),
                                  "easeInCubic" === i.easing && (l = s * s * s),
                                  "easeOutCubic" === i.easing &&
                                    (l = --s * s * s + 1),
                                  "easeInOutCubic" === i.easing &&
                                    (l =
                                      s < 0.5
                                        ? 4 * s * s * s
                                        : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                          1),
                                  "easeInQuart" === i.easing &&
                                    (l = s * s * s * s),
                                  "easeOutQuart" === i.easing &&
                                    (l = 1 - --s * s * s * s),
                                  "easeInOutQuart" === i.easing &&
                                    (l =
                                      s < 0.5
                                        ? 8 * s * s * s * s
                                        : 1 - 8 * --s * s * s * s),
                                  "easeInQuint" === i.easing &&
                                    (l = s * s * s * s * s),
                                  "easeOutQuint" === i.easing &&
                                    (l = 1 + --s * s * s * s * s),
                                  "easeInOutQuint" === i.easing &&
                                    (l =
                                      s < 0.5
                                        ? 16 * s * s * s * s * s
                                        : 1 + 16 * --s * s * s * s * s),
                                  i.customEasing && (l = i.customEasing(s)),
                                  l || s)),
                              e.scrollTo(0, Math.floor(E)),
                              (function (t, i) {
                                var s = e.pageYOffset;
                                if (
                                  t == i ||
                                  s == i ||
                                  (g < i && e.innerHeight + s) >= P
                                )
                                  return (
                                    p.cancelScroll(!0),
                                    a(n, i, m),
                                    r("scrollStop", d, n, o),
                                    !(h = w = null)
                                  );
                              })(E, k) ||
                                ((h = e.requestAnimationFrame($)), (w = t));
                          };
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                          (S = n),
                          (x = d),
                          m ||
                            (history.pushState &&
                              x.updateURL &&
                              history.pushState(
                                {
                                  smoothScroll: JSON.stringify(x),
                                  anchor: S.id,
                                },
                                document.title,
                                S === document.documentElement
                                  ? "#top"
                                  : "#" + S.id
                              )),
                          "matchMedia" in e &&
                          e.matchMedia("(prefers-reduced-motion)").matches
                            ? a(n, Math.floor(k), !1)
                            : (r("scrollStart", d, n, o),
                              p.cancelScroll(!0),
                              e.requestAnimationFrame($));
                      }
                    },
                  },
                  m = function (t) {
                    if (
                      !t.defaultPrevented &&
                      !(
                        0 !== t.button ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey
                      ) &&
                      "closest" in t.target &&
                      (d = t.target.closest(o)) &&
                      "a" === d.tagName.toLowerCase() &&
                      !t.target.closest(c.ignore) &&
                      d.hostname === e.location.hostname &&
                      d.pathname === e.location.pathname &&
                      /#/.test(d.href)
                    ) {
                      var i, s;
                      try {
                        i = n(decodeURIComponent(d.hash));
                      } catch (t) {
                        i = n(d.hash);
                      }
                      if ("#" === i) {
                        if (!c.topOnEmptyHash) return;
                        s = document.documentElement;
                      } else s = document.querySelector(i);
                      (s = s || "#top" !== i ? s : document.documentElement) &&
                        (t.preventDefault(),
                        (function (t) {
                          if (
                            history.replaceState &&
                            t.updateURL &&
                            !history.state
                          ) {
                            var i = e.location.hash;
                            (i = i || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(t),
                                  anchor: i || e.pageYOffset,
                                },
                                document.title,
                                i || e.location.href
                              );
                          }
                        })(c),
                        p.animateScroll(s, d));
                    }
                  },
                  f = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(c)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          n(history.state.anchor)
                        ))) ||
                        p.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                return (
                  (p.destroy = function () {
                    c &&
                      (document.removeEventListener("click", m, !1),
                      e.removeEventListener("popstate", f, !1),
                      p.cancelScroll(),
                      (h = u = d = c = null));
                  }),
                  (function () {
                    if (
                      !(
                        "querySelector" in document &&
                        "addEventListener" in e &&
                        "requestAnimationFrame" in e &&
                        "closest" in e.Element.prototype
                      )
                    )
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    p.destroy(),
                      (c = i(t, l || {})),
                      (u = c.header ? document.querySelector(c.header) : null),
                      document.addEventListener("click", m, !1),
                      c.updateURL &&
                        c.popstate &&
                        e.addEventListener("popstate", f, !1);
                  })(),
                  p
                );
              };
            })(s);
          }.apply(t, [])) || (e.exports = n);
    }.call(this, i(2)));
  },
  function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
          i[n] = arguments[n];
        return e.apply(t, i);
      };
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    function s(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, i) {
      if (!t) return e;
      var a;
      if (i) a = i(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var r = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                r.push(s(t) + "=" + s(e));
            }));
        }),
          (a = r.join("&"));
      }
      if (a) {
        var o = e.indexOf("#");
        -1 !== o && (e = e.slice(0, o)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
      }
      return e;
    };
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, i) {
    "use strict";
    (function (t) {
      var n = i(0),
        s = i(22),
        a = { "Content-Type": "application/x-www-form-urlencoded" };
      function r(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var o,
        l = {
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (o = i(7)),
            o),
          transformRequest: [
            function (e, t) {
              return (
                s(t, "Accept"),
                s(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e)
                  ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (l.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        n.forEach(["delete", "get", "head"], function (e) {
          l.headers[e] = {};
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          l.headers[e] = n.merge(a);
        }),
        (e.exports = l);
    }.call(this, i(21)));
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      s = i(23),
      a = i(4),
      r = i(25),
      o = i(28),
      l = i(29),
      c = i(8);
    e.exports = function (e) {
      return new Promise(function (t, d) {
        var u = e.data,
          h = e.headers;
        n.isFormData(u) && delete h["Content-Type"];
        var p = new XMLHttpRequest();
        if (e.auth) {
          var m = e.auth.username || "",
            f = e.auth.password || "";
          h.Authorization = "Basic " + btoa(m + ":" + f);
        }
        var g = r(e.baseURL, e.url);
        if (
          (p.open(
            e.method.toUpperCase(),
            a(g, e.params, e.paramsSerializer),
            !0
          ),
          (p.timeout = e.timeout),
          (p.onreadystatechange = function () {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status ||
                (p.responseURL && 0 === p.responseURL.indexOf("file:")))
            ) {
              var i =
                  "getAllResponseHeaders" in p
                    ? o(p.getAllResponseHeaders())
                    : null,
                n = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? p.response
                      : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: i,
                  config: e,
                  request: p,
                };
              s(t, d, n), (p = null);
            }
          }),
          (p.onabort = function () {
            p && (d(c("Request aborted", e, "ECONNABORTED", p)), (p = null));
          }),
          (p.onerror = function () {
            d(c("Network Error", e, null, p)), (p = null);
          }),
          (p.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              d(c(t, e, "ECONNABORTED", p)),
              (p = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var v = i(30),
            y =
              (e.withCredentials || l(g)) && e.xsrfCookieName
                ? v.read(e.xsrfCookieName)
                : void 0;
          y && (h[e.xsrfHeaderName] = y);
        }
        if (
          ("setRequestHeader" in p &&
            n.forEach(h, function (e, t) {
              void 0 === u && "content-type" === t.toLowerCase()
                ? delete h[t]
                : p.setRequestHeader(t, e);
            }),
          n.isUndefined(e.withCredentials) ||
            (p.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            p.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          p.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              p && (p.abort(), d(e), (p = null));
            }),
          void 0 === u && (u = null),
          p.send(u);
      });
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(24);
    e.exports = function (e, t, i, s, a) {
      var r = new Error(e);
      return n(r, t, i, s, a);
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = function (e, t) {
      t = t || {};
      var i = {},
        s = ["url", "method", "params", "data"],
        a = ["headers", "auth", "proxy"],
        r = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      n.forEach(s, function (e) {
        void 0 !== t[e] && (i[e] = t[e]);
      }),
        n.forEach(a, function (s) {
          n.isObject(t[s])
            ? (i[s] = n.deepMerge(e[s], t[s]))
            : void 0 !== t[s]
            ? (i[s] = t[s])
            : n.isObject(e[s])
            ? (i[s] = n.deepMerge(e[s]))
            : void 0 !== e[s] && (i[s] = e[s]);
        }),
        n.forEach(r, function (n) {
          void 0 !== t[n] ? (i[n] = t[n]) : void 0 !== e[n] && (i[n] = e[n]);
        });
      var o = s.concat(a).concat(r),
        l = Object.keys(t).filter(function (e) {
          return -1 === o.indexOf(e);
        });
      return (
        n.forEach(l, function (n) {
          void 0 !== t[n] ? (i[n] = t[n]) : void 0 !== e[n] && (i[n] = e[n]);
        }),
        i
      );
    };
  },
  function (e, t, i) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, i) {
    e.exports = i(16);
  },
  function (e, t, i) {
    (function (t) {
      "object" == typeof navigator &&
        (e.exports = (function () {
          "use strict";
          function e(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function n(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
          }
          function s(e, t, i) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          function a(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                i.push.apply(i, n);
            }
            return i;
          }
          function r(e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(i), !0).forEach(function (t) {
                    s(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : a(Object(i)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(i, t)
                    );
                  });
            }
            return e;
          }
          function o(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var i = [],
                    n = !0,
                    s = !1,
                    a = void 0;
                  try {
                    for (
                      var r, o = e[Symbol.iterator]();
                      !(n = (r = o.next()).done) &&
                      (i.push(r.value), !t || i.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      n || null == o.return || o.return();
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              c(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function l(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return d(e);
              })(e) ||
              (function (e) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e);
              })(e) ||
              c(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function c(e, t) {
            if (e) {
              if ("string" == typeof e) return d(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(e)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? d(e, t)
                  : void 0
              );
            }
          }
          function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n;
          }
          function u(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function h(e, t, i) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          function p(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                i.push.apply(i, n);
            }
            return i;
          }
          function m(e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? p(Object(i), !0).forEach(function (t) {
                    h(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : p(Object(i)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(i, t)
                    );
                  });
            }
            return e;
          }
          var f = { addCSS: !0, thumbWidth: 15, watch: !0 };
          function g(e, t) {
            return function () {
              return Array.from(document.querySelectorAll(t)).includes(this);
            }.call(e, t);
          }
          var v,
            y,
            b,
            w = function (e) {
              return null != e ? e.constructor : null;
            },
            T = function (e, t) {
              return !!(e && t && e instanceof t);
            },
            E = function (e) {
              return w(e) === String;
            },
            S = function (e) {
              return Array.isArray(e);
            },
            x = function (e) {
              return T(e, NodeList);
            },
            C = E,
            k = S,
            M = x,
            P = function (e) {
              return T(e, Element);
            },
            A = function (e) {
              return T(e, Event);
            },
            L = function (e) {
              return (
                (function (e) {
                  return null == e;
                })(e) ||
                ((E(e) || S(e) || x(e)) && !e.length) ||
                ((function (e) {
                  return w(e) === Object;
                })(e) &&
                  !Object.keys(e).length)
              );
            },
            $ = (function () {
              function e(t, i) {
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  P(t)
                    ? (this.element = t)
                    : C(t) && (this.element = document.querySelector(t)),
                  P(this.element) &&
                    L(this.element.rangeTouch) &&
                    ((this.config = m({}, f, {}, i)), this.init());
              }
              return (
                (function (e, t, i) {
                  t && u(e.prototype, t), i && u(e, i);
                })(
                  e,
                  [
                    {
                      key: "init",
                      value: function () {
                        e.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = "none"),
                            (this.element.style.webKitUserSelect = "none"),
                            (this.element.style.touchAction = "manipulation")),
                          this.listeners(!0),
                          (this.element.rangeTouch = this));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        e.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = ""),
                            (this.element.style.webKitUserSelect = ""),
                            (this.element.style.touchAction = "")),
                          this.listeners(!1),
                          (this.element.rangeTouch = null));
                      },
                    },
                    {
                      key: "listeners",
                      value: function (e) {
                        var t = this,
                          i = e ? "addEventListener" : "removeEventListener";
                        ["touchstart", "touchmove", "touchend"].forEach(
                          function (e) {
                            t.element[i](
                              e,
                              function (e) {
                                return t.set(e);
                              },
                              !1
                            );
                          }
                        );
                      },
                    },
                    {
                      key: "get",
                      value: function (t) {
                        if (!e.enabled || !A(t)) return null;
                        var i,
                          n = t.target,
                          s = t.changedTouches[0],
                          a = parseFloat(n.getAttribute("min")) || 0,
                          r = parseFloat(n.getAttribute("max")) || 100,
                          o = parseFloat(n.getAttribute("step")) || 1,
                          l = n.getBoundingClientRect(),
                          c =
                            ((100 / l.width) * (this.config.thumbWidth / 2)) /
                            100;
                        return (
                          0 > (i = (100 / l.width) * (s.clientX - l.left))
                            ? (i = 0)
                            : 100 < i && (i = 100),
                          50 > i
                            ? (i -= (100 - 2 * i) * c)
                            : 50 < i && (i += 2 * (i - 50) * c),
                          a +
                            (function (e, t) {
                              if (1 > t) {
                                var i = (function (e) {
                                  var t = ""
                                    .concat(e)
                                    .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                  return t
                                    ? Math.max(
                                        0,
                                        (t[1] ? t[1].length : 0) -
                                          (t[2] ? +t[2] : 0)
                                      )
                                    : 0;
                                })(t);
                                return parseFloat(e.toFixed(i));
                              }
                              return Math.round(e / t) * t;
                            })((i / 100) * (r - a), o)
                        );
                      },
                    },
                    {
                      key: "set",
                      value: function (t) {
                        e.enabled &&
                          A(t) &&
                          !t.target.disabled &&
                          (t.preventDefault(),
                          (t.target.value = this.get(t)),
                          (function (e, t) {
                            if (e && t) {
                              var i = new Event(t, { bubbles: !0 });
                              e.dispatchEvent(i);
                            }
                          })(
                            t.target,
                            "touchend" === t.type ? "change" : "input"
                          ));
                      },
                    },
                  ],
                  [
                    {
                      key: "setup",
                      value: function (t) {
                        var i =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = null;
                        if (
                          (L(t) || C(t)
                            ? (n = Array.from(
                                document.querySelectorAll(
                                  C(t) ? t : 'input[type="range"]'
                                )
                              ))
                            : P(t)
                            ? (n = [t])
                            : M(t)
                            ? (n = Array.from(t))
                            : k(t) && (n = t.filter(P)),
                          L(n))
                        )
                          return null;
                        var s = m({}, f, {}, i);
                        if (C(t) && s.watch) {
                          var a = new MutationObserver(function (i) {
                            Array.from(i).forEach(function (i) {
                              Array.from(i.addedNodes).forEach(function (i) {
                                P(i) && g(i, t) && new e(i, s);
                              });
                            });
                          });
                          a.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                          });
                        }
                        return n.map(function (t) {
                          return new e(t, i);
                        });
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return "ontouchstart" in document.documentElement;
                      },
                    },
                  ]
                ),
                e
              );
            })(),
            I = function (e) {
              return null != e ? e.constructor : null;
            },
            O = function (e, t) {
              return Boolean(e && t && e instanceof t);
            },
            z = function (e) {
              return null == e;
            },
            N = function (e) {
              return I(e) === Object;
            },
            D = function (e) {
              return I(e) === String;
            },
            H = function (e) {
              return I(e) === Function;
            },
            q = function (e) {
              return Array.isArray(e);
            },
            j = function (e) {
              return O(e, NodeList);
            },
            B = function (e) {
              return (
                z(e) ||
                ((D(e) || q(e) || j(e)) && !e.length) ||
                (N(e) && !Object.keys(e).length)
              );
            },
            F = z,
            R = N,
            V = function (e) {
              return I(e) === Number && !Number.isNaN(e);
            },
            _ = D,
            G = function (e) {
              return I(e) === Boolean;
            },
            W = H,
            Y = q,
            X = j,
            U = function (e) {
              return O(e, Element);
            },
            K = function (e) {
              return O(e, Event);
            },
            Q = function (e) {
              return O(e, KeyboardEvent);
            },
            J = function (e) {
              return O(e, TextTrack) || (!z(e) && D(e.kind));
            },
            Z = function (e) {
              if (O(e, window.URL)) return !0;
              if (!D(e)) return !1;
              var t = e;
              (e.startsWith("http://") && e.startsWith("https://")) ||
                (t = "http://".concat(e));
              try {
                return !B(new URL(t).hostname);
              } catch (e) {
                return !1;
              }
            },
            ee = B,
            te =
              ((v = document.createElement("span")),
              (y = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
              }),
              (b = Object.keys(y).find(function (e) {
                return void 0 !== v.style[e];
              })),
              !!_(b) && y[b]);
          function ie(e, t) {
            setTimeout(function () {
              try {
                (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
              } catch (e) {}
            }, t);
          }
          var ne = {
            isIE:
              /* @cc_on!@ */
              !!document.documentMode,
            isEdge: window.navigator.userAgent.includes("Edge"),
            isWebkit:
              "WebkitAppearance" in document.documentElement.style &&
              !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
          };
          function se(e, t) {
            return t.split(".").reduce(function (e, t) {
              return e && e[t];
            }, e);
          }
          function ae() {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = arguments.length,
                i = new Array(t > 1 ? t - 1 : 0),
                n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            if (!i.length) return e;
            var a = i.shift();
            return R(a)
              ? (Object.keys(a).forEach(function (t) {
                  R(a[t])
                    ? (Object.keys(e).includes(t) ||
                        Object.assign(e, s({}, t, {})),
                      ae(e[t], a[t]))
                    : Object.assign(e, s({}, t, a[t]));
                }),
                ae.apply(void 0, [e].concat(i)))
              : e;
          }
          function re(e, t) {
            var i = e.length ? e : [e];
            Array.from(i)
              .reverse()
              .forEach(function (e, i) {
                var n = i > 0 ? t.cloneNode(!0) : t,
                  s = e.parentNode,
                  a = e.nextSibling;
                n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n);
              });
          }
          function oe(e, t) {
            U(e) &&
              !ee(t) &&
              Object.entries(t)
                .filter(function (e) {
                  var t = o(e, 2)[1];
                  return !F(t);
                })
                .forEach(function (t) {
                  var i = o(t, 2),
                    n = i[0],
                    s = i[1];
                  return e.setAttribute(n, s);
                });
          }
          function le(e, t, i) {
            var n = document.createElement(e);
            return R(t) && oe(n, t), _(i) && (n.innerText = i), n;
          }
          function ce(e, t, i, n) {
            U(t) && t.appendChild(le(e, i, n));
          }
          function de(e) {
            X(e) || Y(e)
              ? Array.from(e).forEach(de)
              : U(e) && U(e.parentNode) && e.parentNode.removeChild(e);
          }
          function ue(e) {
            if (U(e))
              for (var t = e.childNodes.length; t > 0; )
                e.removeChild(e.lastChild), (t -= 1);
          }
          function he(e, t) {
            return U(t) && U(t.parentNode) && U(e)
              ? (t.parentNode.replaceChild(e, t), e)
              : null;
          }
          function pe(e, t) {
            if (!_(e) || ee(e)) return {};
            var i = {},
              n = ae({}, t);
            return (
              e.split(",").forEach(function (e) {
                var t = e.trim(),
                  s = t.replace(".", ""),
                  a = t.replace(/[[\]]/g, "").split("="),
                  r = o(a, 1)[0],
                  l = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                switch (t.charAt(0)) {
                  case ".":
                    _(n.class)
                      ? (i.class = "".concat(n.class, " ").concat(s))
                      : (i.class = s);
                    break;
                  case "#":
                    i.id = t.replace("#", "");
                    break;
                  case "[":
                    i[r] = l;
                }
              }),
              ae(n, i)
            );
          }
          function me(e, t) {
            if (U(e)) {
              var i = t;
              G(i) || (i = !e.hidden), (e.hidden = i);
            }
          }
          function fe(e, t, i) {
            if (X(e))
              return Array.from(e).map(function (e) {
                return fe(e, t, i);
              });
            if (U(e)) {
              var n = "toggle";
              return (
                void 0 !== i && (n = i ? "add" : "remove"),
                e.classList[n](t),
                e.classList.contains(t)
              );
            }
            return !1;
          }
          function ge(e, t) {
            return U(e) && e.classList.contains(t);
          }
          function ve(e, t) {
            var i = Element.prototype;
            return (
              i.matches ||
              i.webkitMatchesSelector ||
              i.mozMatchesSelector ||
              i.msMatchesSelector ||
              function () {
                return Array.from(document.querySelectorAll(t)).includes(this);
              }
            ).call(e, t);
          }
          function ye(e) {
            return this.elements.container.querySelectorAll(e);
          }
          function be(e) {
            return this.elements.container.querySelector(e);
          }
          function we() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            U(e) &&
              (e.focus({ preventScroll: !0 }),
              t && fe(e, this.config.classNames.tabFocus));
          }
          var Te,
            Ee = {
              "audio/ogg": "vorbis",
              "audio/wav": "1",
              "video/webm": "vp8, vorbis",
              "video/mp4": "avc1.42E01E, mp4a.40.2",
              "video/ogg": "theora",
            },
            Se = {
              audio: "canPlayType" in document.createElement("audio"),
              video: "canPlayType" in document.createElement("video"),
              check: function (e, t, i) {
                var n = ne.isIPhone && i && Se.playsinline,
                  s = Se[e] || "html5" !== t;
                return {
                  api: s,
                  ui:
                    s && Se.rangeInput && ("video" !== e || !ne.isIPhone || n),
                };
              },
              pip: !(
                ne.isIPhone ||
                (!W(le("video").webkitSetPresentationMode) &&
                  (!document.pictureInPictureEnabled ||
                    le("video").disablePictureInPicture))
              ),
              airplay: W(window.WebKitPlaybackTargetAvailabilityEvent),
              playsinline: "playsInline" in document.createElement("video"),
              mime: function (e) {
                if (ee(e)) return !1;
                var t = o(e.split("/"), 1)[0],
                  i = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(Ee).includes(i) &&
                  (i += '; codecs="'.concat(Ee[e], '"'));
                try {
                  return Boolean(
                    i && this.media.canPlayType(i).replace(/no/, "")
                  );
                } catch (e) {
                  return !1;
                }
              },
              textTracks: "textTracks" in document.createElement("video"),
              rangeInput:
                ((Te = document.createElement("input")),
                (Te.type = "range"),
                "range" === Te.type),
              touch: "ontouchstart" in document.documentElement,
              transitions: !1 !== te,
              reducedMotion:
                "matchMedia" in window &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            },
            xe = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    return (e = !0), null;
                  },
                });
                window.addEventListener("test", null, t),
                  window.removeEventListener("test", null, t);
              } catch (e) {}
              return e;
            })();
          function Ce(e, t, i) {
            var n = this,
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              a =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4],
              r =
                arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (e && "addEventListener" in e && !ee(t) && W(i)) {
              var o = t.split(" "),
                l = r;
              xe && (l = { passive: a, capture: r }),
                o.forEach(function (t) {
                  n &&
                    n.eventListeners &&
                    s &&
                    n.eventListeners.push({
                      element: e,
                      type: t,
                      callback: i,
                      options: l,
                    }),
                    e[s ? "addEventListener" : "removeEventListener"](t, i, l);
                });
            }
          }
          function ke(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              i = arguments.length > 2 ? arguments[2] : void 0,
              n =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              s =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            Ce.call(this, e, t, i, !0, n, s);
          }
          function Me(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              i = arguments.length > 2 ? arguments[2] : void 0,
              n =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              s =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            Ce.call(this, e, t, i, !1, n, s);
          }
          function Pe(e) {
            var t = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              s =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              a =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              r = function r() {
                Me(e, i, r, s, a);
                for (
                  var o = arguments.length, l = new Array(o), c = 0;
                  c < o;
                  c++
                )
                  l[c] = arguments[c];
                n.apply(t, l);
              };
            Ce.call(this, e, i, r, !0, s, a);
          }
          function Ae(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            if (U(e) && !ee(t)) {
              var s = new CustomEvent(t, {
                bubbles: i,
                detail: r(r({}, n), {}, { plyr: this }),
              });
              e.dispatchEvent(s);
            }
          }
          function Le() {
            this &&
              this.eventListeners &&
              (this.eventListeners.forEach(function (e) {
                var t = e.element,
                  i = e.type,
                  n = e.callback,
                  s = e.options;
                t.removeEventListener(i, n, s);
              }),
              (this.eventListeners = []));
          }
          function $e() {
            var e = this;
            return new Promise(function (t) {
              return e.ready
                ? setTimeout(t, 0)
                : ke.call(e, e.elements.container, "ready", t);
            }).then(function () {});
          }
          function Ie(e) {
            (function (e) {
              return O(e, Promise) && H(e.then);
            })(e) && e.then(null, function () {});
          }
          function Oe(e) {
            return (
              !!(Y(e) || (_(e) && e.includes(":"))) &&
              (Y(e) ? e : e.split(":")).map(Number).every(V)
            );
          }
          function ze(e) {
            if (!Y(e) || !e.every(V)) return null;
            var t = o(e, 2),
              i = t[0],
              n = t[1],
              s = (function e(t, i) {
                return 0 === i ? t : e(i, t % i);
              })(i, n);
            return [i / s, n / s];
          }
          function Ne(e) {
            var t = function (e) {
                return Oe(e) ? e.split(":").map(Number) : null;
              },
              i = t(e);
            if (
              (null === i && (i = t(this.config.ratio)),
              null === i &&
                !ee(this.embed) &&
                Y(this.embed.ratio) &&
                (i = this.embed.ratio),
              null === i && this.isHTML5)
            ) {
              var n = this.media;
              i = ze([n.videoWidth, n.videoHeight]);
            }
            return i;
          }
          function De(e) {
            if (!this.isVideo) return {};
            var t = this.elements.wrapper,
              i = Ne.call(this, e),
              n = o(Y(i) ? i : [0, 0], 2),
              s = (100 / n[0]) * n[1];
            if (
              ((t.style.paddingBottom = "".concat(s, "%")),
              this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
            ) {
              var a =
                  (100 / this.media.offsetWidth) *
                  parseInt(
                    window.getComputedStyle(this.media).paddingBottom,
                    10
                  ),
                r = (a - s) / (a / 50);
              this.media.style.transform = "translateY(-".concat(r, "%)");
            } else
              this.isHTML5 &&
                t.classList.toggle(
                  this.config.classNames.videoFixedRatio,
                  null !== i
                );
            return { padding: s, ratio: i };
          }
          var He = {
            getSources: function () {
              var e = this;
              return this.isHTML5
                ? Array.from(this.media.querySelectorAll("source")).filter(
                    function (t) {
                      var i = t.getAttribute("type");
                      return !!ee(i) || Se.mime.call(e, i);
                    }
                  )
                : [];
            },
            getQualityOptions: function () {
              return this.config.quality.forced
                ? this.config.quality.options
                : He.getSources
                    .call(this)
                    .map(function (e) {
                      return Number(e.getAttribute("size"));
                    })
                    .filter(Boolean);
            },
            setup: function () {
              if (this.isHTML5) {
                var e = this;
                (e.options.speed = e.config.speed.options),
                  ee(this.config.ratio) || De.call(e),
                  Object.defineProperty(e.media, "quality", {
                    get: function () {
                      var t = He.getSources.call(e).find(function (t) {
                        return t.getAttribute("src") === e.source;
                      });
                      return t && Number(t.getAttribute("size"));
                    },
                    set: function (t) {
                      if (e.quality !== t) {
                        if (
                          e.config.quality.forced &&
                          W(e.config.quality.onChange)
                        )
                          e.config.quality.onChange(t);
                        else {
                          var i = He.getSources.call(e).find(function (e) {
                            return Number(e.getAttribute("size")) === t;
                          });
                          if (!i) return;
                          var n = e.media,
                            s = n.currentTime,
                            a = n.paused,
                            r = n.preload,
                            o = n.readyState,
                            l = n.playbackRate;
                          (e.media.src = i.getAttribute("src")),
                            ("none" !== r || o) &&
                              (e.once("loadedmetadata", function () {
                                (e.speed = l),
                                  (e.currentTime = s),
                                  a || Ie(e.play());
                              }),
                              e.media.load());
                        }
                        Ae.call(e, e.media, "qualitychange", !1, {
                          quality: t,
                        });
                      }
                    },
                  });
              }
            },
            cancelRequests: function () {
              this.isHTML5 &&
                (de(He.getSources.call(this)),
                this.media.setAttribute("src", this.config.blankVideo),
                this.media.load(),
                this.debug.log("Cancelled network requests"));
            },
          };
          function qe(e) {
            return Y(e)
              ? e.filter(function (t, i) {
                  return e.indexOf(t) === i;
                })
              : e;
          }
          function je(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            return ee(e)
              ? e
              : e.toString().replace(/{(\d+)}/g, function (e, t) {
                  return i[t].toString();
                });
          }
          var Be = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "";
              return e.replace(
                new RegExp(
                  t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
                  "g"
                ),
                i.toString()
              );
            },
            Fe = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return e.toString().replace(/\w\S*/g, function (e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
              });
            };
          function Re() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = e.toString();
            return (
              (t = Be(t, "-", " ")),
              (t = Be(t, "_", " ")),
              (t = Fe(t)),
              Be(t, " ", "")
            );
          }
          function Ve(e) {
            var t = document.createElement("div");
            return t.appendChild(e), t.innerHTML;
          }
          var _e = {
              pip: "PIP",
              airplay: "AirPlay",
              html5: "HTML5",
              vimeo: "Vimeo",
              youtube: "YouTube",
            },
            Ge = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (ee(e) || ee(t)) return "";
              var i = se(t.i18n, e);
              if (ee(i)) return Object.keys(_e).includes(e) ? _e[e] : "";
              var n = { "{seektime}": t.seekTime, "{title}": t.title };
              return (
                Object.entries(n).forEach(function (e) {
                  var t = o(e, 2),
                    n = t[0],
                    s = t[1];
                  i = Be(i, n, s);
                }),
                i
              );
            },
            We = (function () {
              function t(i) {
                e(this, t),
                  (this.enabled = i.config.storage.enabled),
                  (this.key = i.config.storage.key);
              }
              return (
                n(
                  t,
                  [
                    {
                      key: "get",
                      value: function (e) {
                        if (!t.supported || !this.enabled) return null;
                        var i = window.localStorage.getItem(this.key);
                        if (ee(i)) return null;
                        var n = JSON.parse(i);
                        return _(e) && e.length ? n[e] : n;
                      },
                    },
                    {
                      key: "set",
                      value: function (e) {
                        if (t.supported && this.enabled && R(e)) {
                          var i = this.get();
                          ee(i) && (i = {}),
                            ae(i, e),
                            window.localStorage.setItem(
                              this.key,
                              JSON.stringify(i)
                            );
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "supported",
                      get: function () {
                        try {
                          return (
                            "localStorage" in window &&
                            (window.localStorage.setItem("___test", "___test"),
                            window.localStorage.removeItem("___test"),
                            !0)
                          );
                        } catch (e) {
                          return !1;
                        }
                      },
                    },
                  ]
                ),
                t
              );
            })();
          function Ye(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "text";
            return new Promise(function (i, n) {
              try {
                var s = new XMLHttpRequest();
                if (!("withCredentials" in s)) return;
                s.addEventListener("load", function () {
                  if ("text" === t)
                    try {
                      i(JSON.parse(s.responseText));
                    } catch (e) {
                      i(s.responseText);
                    }
                  else i(s.response);
                }),
                  s.addEventListener("error", function () {
                    throw new Error(s.status);
                  }),
                  s.open("GET", e, !0),
                  (s.responseType = t),
                  s.send();
              } catch (e) {
                n(e);
              }
            });
          }
          function Xe(e, t) {
            if (_(e)) {
              var i = _(t),
                n = function () {
                  return null !== document.getElementById(t);
                },
                s = function (e, t) {
                  (e.innerHTML = t),
                    (i && n()) ||
                      document.body.insertAdjacentElement("afterbegin", e);
                };
              if (!i || !n()) {
                var a = We.supported,
                  r = document.createElement("div");
                if (
                  (r.setAttribute("hidden", ""),
                  i && r.setAttribute("id", t),
                  a)
                ) {
                  var o = window.localStorage.getItem(
                    "".concat("cache", "-").concat(t)
                  );
                  if (null !== o) {
                    var l = JSON.parse(o);
                    s(r, l.content);
                  }
                }
                Ye(e)
                  .then(function (e) {
                    ee(e) ||
                      (a &&
                        window.localStorage.setItem(
                          "".concat("cache", "-").concat(t),
                          JSON.stringify({ content: e })
                        ),
                      s(r, e));
                  })
                  .catch(function () {});
              }
            }
          }
          var Ue = function (e) {
              return Math.trunc((e / 60 / 60) % 60, 10);
            },
            Ke = function (e) {
              return Math.trunc((e / 60) % 60, 10);
            },
            Qe = function (e) {
              return Math.trunc(e % 60, 10);
            };
          function Je() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!V(e)) return Je(void 0, t, i);
            var n = function (e) {
                return "0".concat(e).slice(-2);
              },
              s = Ue(e),
              a = Ke(e),
              r = Qe(e);
            return (
              (s = t || s > 0 ? "".concat(s, ":") : ""),
              ""
                .concat(i && e > 0 ? "-" : "")
                .concat(s)
                .concat(n(a), ":")
                .concat(n(r))
            );
          }
          var Ze = {
            getIconUrl: function () {
              var e =
                new URL(this.config.iconUrl, window.location).host !==
                  window.location.host ||
                (ne.isIE && !window.svg4everybody);
              return { url: this.config.iconUrl, cors: e };
            },
            findElements: function () {
              try {
                return (
                  (this.elements.controls = be.call(
                    this,
                    this.config.selectors.controls.wrapper
                  )),
                  (this.elements.buttons = {
                    play: ye.call(this, this.config.selectors.buttons.play),
                    pause: be.call(this, this.config.selectors.buttons.pause),
                    restart: be.call(
                      this,
                      this.config.selectors.buttons.restart
                    ),
                    rewind: be.call(this, this.config.selectors.buttons.rewind),
                    fastForward: be.call(
                      this,
                      this.config.selectors.buttons.fastForward
                    ),
                    mute: be.call(this, this.config.selectors.buttons.mute),
                    pip: be.call(this, this.config.selectors.buttons.pip),
                    airplay: be.call(
                      this,
                      this.config.selectors.buttons.airplay
                    ),
                    settings: be.call(
                      this,
                      this.config.selectors.buttons.settings
                    ),
                    captions: be.call(
                      this,
                      this.config.selectors.buttons.captions
                    ),
                    fullscreen: be.call(
                      this,
                      this.config.selectors.buttons.fullscreen
                    ),
                  }),
                  (this.elements.progress = be.call(
                    this,
                    this.config.selectors.progress
                  )),
                  (this.elements.inputs = {
                    seek: be.call(this, this.config.selectors.inputs.seek),
                    volume: be.call(this, this.config.selectors.inputs.volume),
                  }),
                  (this.elements.display = {
                    buffer: be.call(this, this.config.selectors.display.buffer),
                    currentTime: be.call(
                      this,
                      this.config.selectors.display.currentTime
                    ),
                    duration: be.call(
                      this,
                      this.config.selectors.display.duration
                    ),
                  }),
                  U(this.elements.progress) &&
                    (this.elements.display.seekTooltip = this.elements.progress.querySelector(
                      ".".concat(this.config.classNames.tooltip)
                    )),
                  !0
                );
              } catch (e) {
                return (
                  this.debug.warn(
                    "It looks like there is a problem with your custom controls HTML",
                    e
                  ),
                  this.toggleNativeControls(!0),
                  !1
                );
              }
            },
            createIcon: function (e, t) {
              var i = Ze.getIconUrl.call(this),
                n = ""
                  .concat(i.cors ? "" : i.url, "#")
                  .concat(this.config.iconPrefix),
                s = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
              oe(s, ae(t, { "aria-hidden": "true", focusable: "false" }));
              var a = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "use"
                ),
                r = "".concat(n, "-").concat(e);
              return (
                "href" in a &&
                  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                a.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  r
                ),
                s.appendChild(a),
                s
              );
            },
            createLabel: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = Ge(e, this.config),
                n = r(
                  r({}, t),
                  {},
                  {
                    class: [t.class, this.config.classNames.hidden]
                      .filter(Boolean)
                      .join(" "),
                  }
                );
              return le("span", n, i);
            },
            createBadge: function (e) {
              if (ee(e)) return null;
              var t = le("span", { class: this.config.classNames.menu.value });
              return (
                t.appendChild(
                  le("span", { class: this.config.classNames.menu.badge }, e)
                ),
                t
              );
            },
            createButton: function (e, t) {
              var i = this,
                n = ae({}, t),
                s = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = e.toString();
                  return (t = Re(t)).charAt(0).toLowerCase() + t.slice(1);
                })(e),
                a = {
                  element: "button",
                  toggle: !1,
                  label: null,
                  icon: null,
                  labelPressed: null,
                  iconPressed: null,
                };
              switch (
                (["element", "icon", "label"].forEach(function (e) {
                  Object.keys(n).includes(e) && ((a[e] = n[e]), delete n[e]);
                }),
                "button" !== a.element ||
                  Object.keys(n).includes("type") ||
                  (n.type = "button"),
                Object.keys(n).includes("class")
                  ? n.class.split(" ").some(function (e) {
                      return e === i.config.classNames.control;
                    }) ||
                    ae(n, {
                      class: ""
                        .concat(n.class, " ")
                        .concat(this.config.classNames.control),
                    })
                  : (n.class = this.config.classNames.control),
                e)
              ) {
                case "play":
                  (a.toggle = !0),
                    (a.label = "play"),
                    (a.labelPressed = "pause"),
                    (a.icon = "play"),
                    (a.iconPressed = "pause");
                  break;
                case "mute":
                  (a.toggle = !0),
                    (a.label = "mute"),
                    (a.labelPressed = "unmute"),
                    (a.icon = "volume"),
                    (a.iconPressed = "muted");
                  break;
                case "captions":
                  (a.toggle = !0),
                    (a.label = "enableCaptions"),
                    (a.labelPressed = "disableCaptions"),
                    (a.icon = "captions-off"),
                    (a.iconPressed = "captions-on");
                  break;
                case "fullscreen":
                  (a.toggle = !0),
                    (a.label = "enterFullscreen"),
                    (a.labelPressed = "exitFullscreen"),
                    (a.icon = "enter-fullscreen"),
                    (a.iconPressed = "exit-fullscreen");
                  break;
                case "play-large":
                  (n.class += " ".concat(
                    this.config.classNames.control,
                    "--overlaid"
                  )),
                    (s = "play"),
                    (a.label = "play"),
                    (a.icon = "play");
                  break;
                default:
                  ee(a.label) && (a.label = s), ee(a.icon) && (a.icon = e);
              }
              var r = le(a.element);
              return (
                a.toggle
                  ? (r.appendChild(
                      Ze.createIcon.call(this, a.iconPressed, {
                        class: "icon--pressed",
                      })
                    ),
                    r.appendChild(
                      Ze.createIcon.call(this, a.icon, {
                        class: "icon--not-pressed",
                      })
                    ),
                    r.appendChild(
                      Ze.createLabel.call(this, a.labelPressed, {
                        class: "label--pressed",
                      })
                    ),
                    r.appendChild(
                      Ze.createLabel.call(this, a.label, {
                        class: "label--not-pressed",
                      })
                    ))
                  : (r.appendChild(Ze.createIcon.call(this, a.icon)),
                    r.appendChild(Ze.createLabel.call(this, a.label))),
                ae(n, pe(this.config.selectors.buttons[s], n)),
                oe(r, n),
                "play" === s
                  ? (Y(this.elements.buttons[s]) ||
                      (this.elements.buttons[s] = []),
                    this.elements.buttons[s].push(r))
                  : (this.elements.buttons[s] = r),
                r
              );
            },
            createRange: function (e, t) {
              var i = le(
                "input",
                ae(
                  pe(this.config.selectors.inputs[e]),
                  {
                    type: "range",
                    min: 0,
                    max: 100,
                    step: 0.01,
                    value: 0,
                    autocomplete: "off",
                    role: "slider",
                    "aria-label": Ge(e, this.config),
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": 0,
                  },
                  t
                )
              );
              return (
                (this.elements.inputs[e] = i),
                Ze.updateRangeFill.call(this, i),
                $.setup(i),
                i
              );
            },
            createProgress: function (e, t) {
              var i = le(
                "progress",
                ae(
                  pe(this.config.selectors.display[e]),
                  {
                    min: 0,
                    max: 100,
                    value: 0,
                    role: "progressbar",
                    "aria-hidden": !0,
                  },
                  t
                )
              );
              if ("volume" !== e) {
                i.appendChild(le("span", null, "0"));
                var n = { played: "played", buffer: "buffered" }[e],
                  s = n ? Ge(n, this.config) : "";
                i.innerText = "% ".concat(s.toLowerCase());
              }
              return (this.elements.display[e] = i), i;
            },
            createTime: function (e, t) {
              var i = pe(this.config.selectors.display[e], t),
                n = le(
                  "div",
                  ae(i, {
                    class: ""
                      .concat(i.class ? i.class : "", " ")
                      .concat(this.config.classNames.display.time, " ")
                      .trim(),
                    "aria-label": Ge(e, this.config),
                  }),
                  "00:00"
                );
              return (this.elements.display[e] = n), n;
            },
            bindMenuItemShortcuts: function (e, t) {
              var i = this;
              ke.call(
                this,
                e,
                "keydown keyup",
                function (n) {
                  if (
                    [32, 38, 39, 40].includes(n.which) &&
                    (n.preventDefault(),
                    n.stopPropagation(),
                    "keydown" !== n.type)
                  ) {
                    var s,
                      a = ve(e, '[role="menuitemradio"]');
                    !a && [32, 39].includes(n.which)
                      ? Ze.showMenuPanel.call(i, t, !0)
                      : 32 !== n.which &&
                        (40 === n.which || (a && 39 === n.which)
                          ? ((s = e.nextElementSibling),
                            U(s) || (s = e.parentNode.firstElementChild))
                          : ((s = e.previousElementSibling),
                            U(s) || (s = e.parentNode.lastElementChild)),
                        we.call(i, s, !0));
                  }
                },
                !1
              ),
                ke.call(this, e, "keyup", function (e) {
                  13 === e.which && Ze.focusFirstMenuItem.call(i, null, !0);
                });
            },
            createMenuItem: function (e) {
              var t = this,
                i = e.value,
                n = e.list,
                s = e.type,
                a = e.title,
                r = e.badge,
                o = void 0 === r ? null : r,
                l = e.checked,
                c = void 0 !== l && l,
                d = pe(this.config.selectors.inputs[s]),
                u = le(
                  "button",
                  ae(d, {
                    type: "button",
                    role: "menuitemradio",
                    class: ""
                      .concat(this.config.classNames.control, " ")
                      .concat(d.class ? d.class : "")
                      .trim(),
                    "aria-checked": c,
                    value: i,
                  })
                ),
                h = le("span");
              (h.innerHTML = a),
                U(o) && h.appendChild(o),
                u.appendChild(h),
                Object.defineProperty(u, "checked", {
                  enumerable: !0,
                  get: function () {
                    return "true" === u.getAttribute("aria-checked");
                  },
                  set: function (e) {
                    e &&
                      Array.from(u.parentNode.children)
                        .filter(function (e) {
                          return ve(e, '[role="menuitemradio"]');
                        })
                        .forEach(function (e) {
                          return e.setAttribute("aria-checked", "false");
                        }),
                      u.setAttribute("aria-checked", e ? "true" : "false");
                  },
                }),
                this.listeners.bind(
                  u,
                  "click keyup",
                  function (e) {
                    if (!Q(e) || 32 === e.which) {
                      switch (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        (u.checked = !0),
                        s)
                      ) {
                        case "language":
                          t.currentTrack = Number(i);
                          break;
                        case "quality":
                          t.quality = i;
                          break;
                        case "speed":
                          t.speed = parseFloat(i);
                      }
                      Ze.showMenuPanel.call(t, "home", Q(e));
                    }
                  },
                  s,
                  !1
                ),
                Ze.bindMenuItemShortcuts.call(this, u, s),
                n.appendChild(u);
            },
            formatTime: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              if (!V(e)) return e;
              var i = Ue(this.duration) > 0;
              return Je(e, i, t);
            },
            updateTimeDisplay: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              U(e) && V(t) && (e.innerText = Ze.formatTime(t, i));
            },
            updateVolume: function () {
              this.supported.ui &&
                (U(this.elements.inputs.volume) &&
                  Ze.setRange.call(
                    this,
                    this.elements.inputs.volume,
                    this.muted ? 0 : this.volume
                  ),
                U(this.elements.buttons.mute) &&
                  (this.elements.buttons.mute.pressed =
                    this.muted || 0 === this.volume));
            },
            setRange: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              U(e) && ((e.value = t), Ze.updateRangeFill.call(this, e));
            },
            updateProgress: function (e) {
              var t = this;
              if (this.supported.ui && K(e)) {
                var i,
                  n,
                  s = 0;
                if (e)
                  switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                      (i = this.currentTime),
                        (n = this.duration),
                        (s =
                          0 === i ||
                          0 === n ||
                          Number.isNaN(i) ||
                          Number.isNaN(n)
                            ? 0
                            : ((i / n) * 100).toFixed(2)),
                        "timeupdate" === e.type &&
                          Ze.setRange.call(this, this.elements.inputs.seek, s);
                      break;
                    case "playing":
                    case "progress":
                      !(function (e, i) {
                        var n = V(i) ? i : 0,
                          s = U(e) ? e : t.elements.display.buffer;
                        if (U(s)) {
                          s.value = n;
                          var a = s.getElementsByTagName("span")[0];
                          U(a) && (a.childNodes[0].nodeValue = n);
                        }
                      })(this.elements.display.buffer, 100 * this.buffered);
                  }
              }
            },
            updateRangeFill: function (e) {
              var t = K(e) ? e.target : e;
              if (U(t) && "range" === t.getAttribute("type")) {
                if (ve(t, this.config.selectors.inputs.seek)) {
                  t.setAttribute("aria-valuenow", this.currentTime);
                  var i = Ze.formatTime(this.currentTime),
                    n = Ze.formatTime(this.duration),
                    s = Ge("seekLabel", this.config);
                  t.setAttribute(
                    "aria-valuetext",
                    s.replace("{currentTime}", i).replace("{duration}", n)
                  );
                } else if (ve(t, this.config.selectors.inputs.volume)) {
                  var a = 100 * t.value;
                  t.setAttribute("aria-valuenow", a),
                    t.setAttribute(
                      "aria-valuetext",
                      "".concat(a.toFixed(1), "%")
                    );
                } else t.setAttribute("aria-valuenow", t.value);
                ne.isWebkit &&
                  t.style.setProperty(
                    "--value",
                    "".concat((t.value / t.max) * 100, "%")
                  );
              }
            },
            updateSeekTooltip: function (e) {
              var t = this;
              if (
                this.config.tooltips.seek &&
                U(this.elements.inputs.seek) &&
                U(this.elements.display.seekTooltip) &&
                0 !== this.duration
              ) {
                var i = "".concat(this.config.classNames.tooltip, "--visible"),
                  n = function (e) {
                    return fe(t.elements.display.seekTooltip, i, e);
                  };
                if (this.touch) n(!1);
                else {
                  var s = 0,
                    a = this.elements.progress.getBoundingClientRect();
                  if (K(e)) s = (100 / a.width) * (e.pageX - a.left);
                  else {
                    if (!ge(this.elements.display.seekTooltip, i)) return;
                    s = parseFloat(
                      this.elements.display.seekTooltip.style.left,
                      10
                    );
                  }
                  s < 0 ? (s = 0) : s > 100 && (s = 100),
                    Ze.updateTimeDisplay.call(
                      this,
                      this.elements.display.seekTooltip,
                      (this.duration / 100) * s
                    ),
                    (this.elements.display.seekTooltip.style.left = "".concat(
                      s,
                      "%"
                    )),
                    K(e) &&
                      ["mouseenter", "mouseleave"].includes(e.type) &&
                      n("mouseenter" === e.type);
                }
              }
            },
            timeUpdate: function (e) {
              var t =
                !U(this.elements.display.duration) && this.config.invertTime;
              Ze.updateTimeDisplay.call(
                this,
                this.elements.display.currentTime,
                t ? this.duration - this.currentTime : this.currentTime,
                t
              ),
                (e && "timeupdate" === e.type && this.media.seeking) ||
                  Ze.updateProgress.call(this, e);
            },
            durationUpdate: function () {
              if (
                this.supported.ui &&
                (this.config.invertTime || !this.currentTime)
              ) {
                if (this.duration >= Math.pow(2, 32))
                  return (
                    me(this.elements.display.currentTime, !0),
                    void me(this.elements.progress, !0)
                  );
                U(this.elements.inputs.seek) &&
                  this.elements.inputs.seek.setAttribute(
                    "aria-valuemax",
                    this.duration
                  );
                var e = U(this.elements.display.duration);
                !e &&
                  this.config.displayDuration &&
                  this.paused &&
                  Ze.updateTimeDisplay.call(
                    this,
                    this.elements.display.currentTime,
                    this.duration
                  ),
                  e &&
                    Ze.updateTimeDisplay.call(
                      this,
                      this.elements.display.duration,
                      this.duration
                    ),
                  Ze.updateSeekTooltip.call(this);
              }
            },
            toggleMenuButton: function (e, t) {
              me(this.elements.settings.buttons[e], !t);
            },
            updateSetting: function (e, t, i) {
              var n = this.elements.settings.panels[e],
                s = null,
                a = t;
              if ("captions" === e) s = this.currentTrack;
              else {
                if (
                  ((s = ee(i) ? this[e] : i),
                  ee(s) && (s = this.config[e].default),
                  !ee(this.options[e]) && !this.options[e].includes(s))
                )
                  return void this.debug.warn(
                    "Unsupported value of '".concat(s, "' for ").concat(e)
                  );
                if (!this.config[e].options.includes(s))
                  return void this.debug.warn(
                    "Disabled value of '".concat(s, "' for ").concat(e)
                  );
              }
              if ((U(a) || (a = n && n.querySelector('[role="menu"]')), U(a))) {
                this.elements.settings.buttons[e].querySelector(
                  ".".concat(this.config.classNames.menu.value)
                ).innerHTML = Ze.getLabel.call(this, e, s);
                var r = a && a.querySelector('[value="'.concat(s, '"]'));
                U(r) && (r.checked = !0);
              }
            },
            getLabel: function (e, t) {
              switch (e) {
                case "speed":
                  return 1 === t
                    ? Ge("normal", this.config)
                    : "".concat(t, "&times;");
                case "quality":
                  if (V(t)) {
                    var i = Ge("qualityLabel.".concat(t), this.config);
                    return i.length ? i : "".concat(t, "p");
                  }
                  return Fe(t);
                case "captions":
                  return it.getLabel.call(this);
                default:
                  return null;
              }
            },
            setQualityMenu: function (e) {
              var t = this;
              if (U(this.elements.settings.panels.quality)) {
                var i = this.elements.settings.panels.quality.querySelector(
                  '[role="menu"]'
                );
                Y(e) &&
                  (this.options.quality = qe(e).filter(function (e) {
                    return t.config.quality.options.includes(e);
                  }));
                var n =
                  !ee(this.options.quality) && this.options.quality.length > 1;
                if (
                  (Ze.toggleMenuButton.call(this, "quality", n),
                  ue(i),
                  Ze.checkMenu.call(this),
                  n)
                ) {
                  var s = function (e) {
                    var i = Ge("qualityBadge.".concat(e), t.config);
                    return i.length ? Ze.createBadge.call(t, i) : null;
                  };
                  this.options.quality
                    .sort(function (e, i) {
                      var n = t.config.quality.options;
                      return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
                    })
                    .forEach(function (e) {
                      Ze.createMenuItem.call(t, {
                        value: e,
                        list: i,
                        type: "quality",
                        title: Ze.getLabel.call(t, "quality", e),
                        badge: s(e),
                      });
                    }),
                    Ze.updateSetting.call(this, "quality", i);
                }
              }
            },
            setCaptionsMenu: function () {
              var e = this;
              if (U(this.elements.settings.panels.captions)) {
                var t = this.elements.settings.panels.captions.querySelector(
                    '[role="menu"]'
                  ),
                  i = it.getTracks.call(this),
                  n = Boolean(i.length);
                if (
                  (Ze.toggleMenuButton.call(this, "captions", n),
                  ue(t),
                  Ze.checkMenu.call(this),
                  n)
                ) {
                  var s = i.map(function (i, n) {
                    return {
                      value: n,
                      checked: e.captions.toggled && e.currentTrack === n,
                      title: it.getLabel.call(e, i),
                      badge:
                        i.language &&
                        Ze.createBadge.call(e, i.language.toUpperCase()),
                      list: t,
                      type: "language",
                    };
                  });
                  s.unshift({
                    value: -1,
                    checked: !this.captions.toggled,
                    title: Ge("disabled", this.config),
                    list: t,
                    type: "language",
                  }),
                    s.forEach(Ze.createMenuItem.bind(this)),
                    Ze.updateSetting.call(this, "captions", t);
                }
              }
            },
            setSpeedMenu: function () {
              var e = this;
              if (U(this.elements.settings.panels.speed)) {
                var t = this.elements.settings.panels.speed.querySelector(
                  '[role="menu"]'
                );
                this.options.speed = this.options.speed.filter(function (t) {
                  return t >= e.minimumSpeed && t <= e.maximumSpeed;
                });
                var i =
                  !ee(this.options.speed) && this.options.speed.length > 1;
                Ze.toggleMenuButton.call(this, "speed", i),
                  ue(t),
                  Ze.checkMenu.call(this),
                  i &&
                    (this.options.speed.forEach(function (i) {
                      Ze.createMenuItem.call(e, {
                        value: i,
                        list: t,
                        type: "speed",
                        title: Ze.getLabel.call(e, "speed", i),
                      });
                    }),
                    Ze.updateSetting.call(this, "speed", t));
              }
            },
            checkMenu: function () {
              var e = this.elements.settings.buttons,
                t =
                  !ee(e) &&
                  Object.values(e).some(function (e) {
                    return !e.hidden;
                  });
              me(this.elements.settings.menu, !t);
            },
            focusFirstMenuItem: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!this.elements.settings.popup.hidden) {
                var i = e;
                U(i) ||
                  (i = Object.values(this.elements.settings.panels).find(
                    function (e) {
                      return !e.hidden;
                    }
                  ));
                var n = i.querySelector('[role^="menuitem"]');
                we.call(this, n, t);
              }
            },
            toggleMenu: function (e) {
              var t = this.elements.settings.popup,
                i = this.elements.buttons.settings;
              if (U(t) && U(i)) {
                var n = t.hidden,
                  s = n;
                if (G(e)) s = e;
                else if (Q(e) && 27 === e.which) s = !1;
                else if (K(e)) {
                  var a = W(e.composedPath) ? e.composedPath()[0] : e.target,
                    r = t.contains(a);
                  if (r || (!r && e.target !== i && s)) return;
                }
                i.setAttribute("aria-expanded", s),
                  me(t, !s),
                  fe(
                    this.elements.container,
                    this.config.classNames.menu.open,
                    s
                  ),
                  s && Q(e)
                    ? Ze.focusFirstMenuItem.call(this, null, !0)
                    : s || n || we.call(this, i, Q(e));
              }
            },
            getMenuSize: function (e) {
              var t = e.cloneNode(!0);
              (t.style.position = "absolute"),
                (t.style.opacity = 0),
                t.removeAttribute("hidden"),
                e.parentNode.appendChild(t);
              var i = t.scrollWidth,
                n = t.scrollHeight;
              return de(t), { width: i, height: n };
            },
            showMenuPanel: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = this.elements.container.querySelector(
                  "#plyr-settings-".concat(this.id, "-").concat(t)
                );
              if (U(n)) {
                var s = n.parentNode,
                  a = Array.from(s.children).find(function (e) {
                    return !e.hidden;
                  });
                if (Se.transitions && !Se.reducedMotion) {
                  (s.style.width = "".concat(a.scrollWidth, "px")),
                    (s.style.height = "".concat(a.scrollHeight, "px"));
                  var r = Ze.getMenuSize.call(this, n),
                    o = function t(i) {
                      i.target === s &&
                        ["width", "height"].includes(i.propertyName) &&
                        ((s.style.width = ""),
                        (s.style.height = ""),
                        Me.call(e, s, te, t));
                    };
                  ke.call(this, s, te, o),
                    (s.style.width = "".concat(r.width, "px")),
                    (s.style.height = "".concat(r.height, "px"));
                }
                me(a, !0), me(n, !1), Ze.focusFirstMenuItem.call(this, n, i);
              }
            },
            setDownloadUrl: function () {
              var e = this.elements.buttons.download;
              U(e) && e.setAttribute("href", this.download);
            },
            create: function (e) {
              var t = this,
                i = Ze.bindMenuItemShortcuts,
                n = Ze.createButton,
                s = Ze.createProgress,
                a = Ze.createRange,
                r = Ze.createTime,
                o = Ze.setQualityMenu,
                l = Ze.setSpeedMenu,
                c = Ze.showMenuPanel;
              (this.elements.controls = null),
                Y(this.config.controls) &&
                  this.config.controls.includes("play-large") &&
                  this.elements.container.appendChild(
                    n.call(this, "play-large")
                  );
              var d = le("div", pe(this.config.selectors.controls.wrapper));
              this.elements.controls = d;
              var u = { class: "plyr__controls__item" };
              return (
                qe(Y(this.config.controls) ? this.config.controls : []).forEach(
                  function (o) {
                    if (
                      ("restart" === o &&
                        d.appendChild(n.call(t, "restart", u)),
                      "rewind" === o && d.appendChild(n.call(t, "rewind", u)),
                      "play" === o && d.appendChild(n.call(t, "play", u)),
                      "fast-forward" === o &&
                        d.appendChild(n.call(t, "fast-forward", u)),
                      "progress" === o)
                    ) {
                      var l = le("div", {
                          class: "".concat(
                            u.class,
                            " plyr__progress__container"
                          ),
                        }),
                        h = le("div", pe(t.config.selectors.progress));
                      if (
                        (h.appendChild(
                          a.call(t, "seek", { id: "plyr-seek-".concat(e.id) })
                        ),
                        h.appendChild(s.call(t, "buffer")),
                        t.config.tooltips.seek)
                      ) {
                        var p = le(
                          "span",
                          { class: t.config.classNames.tooltip },
                          "00:00"
                        );
                        h.appendChild(p), (t.elements.display.seekTooltip = p);
                      }
                      (t.elements.progress = h),
                        l.appendChild(t.elements.progress),
                        d.appendChild(l);
                    }
                    if (
                      ("current-time" === o &&
                        d.appendChild(r.call(t, "currentTime", u)),
                      "duration" === o &&
                        d.appendChild(r.call(t, "duration", u)),
                      "mute" === o || "volume" === o)
                    ) {
                      var m = t.elements.volume;
                      if (
                        ((U(m) && d.contains(m)) ||
                          ((m = le(
                            "div",
                            ae({}, u, {
                              class: "".concat(u.class, " plyr__volume").trim(),
                            })
                          )),
                          (t.elements.volume = m),
                          d.appendChild(m)),
                        "mute" === o && m.appendChild(n.call(t, "mute")),
                        "volume" === o && !ne.isIos)
                      ) {
                        var f = { max: 1, step: 0.05, value: t.config.volume };
                        m.appendChild(
                          a.call(
                            t,
                            "volume",
                            ae(f, { id: "plyr-volume-".concat(e.id) })
                          )
                        );
                      }
                    }
                    if (
                      ("captions" === o &&
                        d.appendChild(n.call(t, "captions", u)),
                      "settings" === o && !ee(t.config.settings))
                    ) {
                      var g = le(
                        "div",
                        ae({}, u, {
                          class: "".concat(u.class, " plyr__menu").trim(),
                          hidden: "",
                        })
                      );
                      g.appendChild(
                        n.call(t, "settings", {
                          "aria-haspopup": !0,
                          "aria-controls": "plyr-settings-".concat(e.id),
                          "aria-expanded": !1,
                        })
                      );
                      var v = le("div", {
                          class: "plyr__menu__container",
                          id: "plyr-settings-".concat(e.id),
                          hidden: "",
                        }),
                        y = le("div"),
                        b = le("div", {
                          id: "plyr-settings-".concat(e.id, "-home"),
                        }),
                        w = le("div", { role: "menu" });
                      b.appendChild(w),
                        y.appendChild(b),
                        (t.elements.settings.panels.home = b),
                        t.config.settings.forEach(function (n) {
                          var s = le(
                            "button",
                            ae(pe(t.config.selectors.buttons.settings), {
                              type: "button",
                              class: ""
                                .concat(t.config.classNames.control, " ")
                                .concat(
                                  t.config.classNames.control,
                                  "--forward"
                                ),
                              role: "menuitem",
                              "aria-haspopup": !0,
                              hidden: "",
                            })
                          );
                          i.call(t, s, n),
                            ke.call(t, s, "click", function () {
                              c.call(t, n, !1);
                            });
                          var a = le("span", null, Ge(n, t.config)),
                            r = le("span", {
                              class: t.config.classNames.menu.value,
                            });
                          (r.innerHTML = e[n]),
                            a.appendChild(r),
                            s.appendChild(a),
                            w.appendChild(s);
                          var o = le("div", {
                              id: "plyr-settings-".concat(e.id, "-").concat(n),
                              hidden: "",
                            }),
                            l = le("button", {
                              type: "button",
                              class: ""
                                .concat(t.config.classNames.control, " ")
                                .concat(t.config.classNames.control, "--back"),
                            });
                          l.appendChild(
                            le("span", { "aria-hidden": !0 }, Ge(n, t.config))
                          ),
                            l.appendChild(
                              le(
                                "span",
                                { class: t.config.classNames.hidden },
                                Ge("menuBack", t.config)
                              )
                            ),
                            ke.call(
                              t,
                              o,
                              "keydown",
                              function (e) {
                                37 === e.which &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  c.call(t, "home", !0));
                              },
                              !1
                            ),
                            ke.call(t, l, "click", function () {
                              c.call(t, "home", !1);
                            }),
                            o.appendChild(l),
                            o.appendChild(le("div", { role: "menu" })),
                            y.appendChild(o),
                            (t.elements.settings.buttons[n] = s),
                            (t.elements.settings.panels[n] = o);
                        }),
                        v.appendChild(y),
                        g.appendChild(v),
                        d.appendChild(g),
                        (t.elements.settings.popup = v),
                        (t.elements.settings.menu = g);
                    }
                    if (
                      ("pip" === o &&
                        Se.pip &&
                        d.appendChild(n.call(t, "pip", u)),
                      "airplay" === o &&
                        Se.airplay &&
                        d.appendChild(n.call(t, "airplay", u)),
                      "download" === o)
                    ) {
                      var T = ae({}, u, {
                        element: "a",
                        href: t.download,
                        target: "_blank",
                      });
                      t.isHTML5 && (T.download = "");
                      var E = t.config.urls.download;
                      !Z(E) &&
                        t.isEmbed &&
                        ae(T, {
                          icon: "logo-".concat(t.provider),
                          label: t.provider,
                        }),
                        d.appendChild(n.call(t, "download", T));
                    }
                    "fullscreen" === o &&
                      d.appendChild(n.call(t, "fullscreen", u));
                  }
                ),
                this.isHTML5 && o.call(this, He.getQualityOptions.call(this)),
                l.call(this),
                d
              );
            },
            inject: function () {
              var e = this;
              if (this.config.loadSprite) {
                var t = Ze.getIconUrl.call(this);
                t.cors && Xe(t.url, "sprite-plyr");
              }
              this.id = Math.floor(1e4 * Math.random());
              var i = null;
              this.elements.controls = null;
              var n,
                s,
                a = {
                  id: this.id,
                  seektime: this.config.seekTime,
                  title: this.config.title,
                },
                r = !0;
              if (
                (W(this.config.controls) &&
                  (this.config.controls = this.config.controls.call(this, a)),
                this.config.controls || (this.config.controls = []),
                U(this.config.controls) || _(this.config.controls)
                  ? (i = this.config.controls)
                  : ((i = Ze.create.call(this, {
                      id: this.id,
                      seektime: this.config.seekTime,
                      speed: this.speed,
                      quality: this.quality,
                      captions: it.getLabel.call(this),
                    })),
                    (r = !1)),
                r &&
                  _(this.config.controls) &&
                  ((n = i),
                  Object.entries(a).forEach(function (e) {
                    var t = o(e, 2),
                      i = t[0],
                      s = t[1];
                    n = Be(n, "{".concat(i, "}"), s);
                  }),
                  (i = n)),
                _(this.config.selectors.controls.container) &&
                  (s = document.querySelector(
                    this.config.selectors.controls.container
                  )),
                U(s) || (s = this.elements.container),
                s[U(i) ? "insertAdjacentElement" : "insertAdjacentHTML"](
                  "afterbegin",
                  i
                ),
                U(this.elements.controls) || Ze.findElements.call(this),
                !ee(this.elements.buttons))
              ) {
                var l = function (t) {
                  var i = e.config.classNames.controlPressed;
                  Object.defineProperty(t, "pressed", {
                    enumerable: !0,
                    get: function () {
                      return ge(t, i);
                    },
                    set: function () {
                      var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      fe(t, i, e);
                    },
                  });
                };
                Object.values(this.elements.buttons)
                  .filter(Boolean)
                  .forEach(function (e) {
                    Y(e) || X(e)
                      ? Array.from(e).filter(Boolean).forEach(l)
                      : l(e);
                  });
              }
              if ((ne.isEdge && ie(s), this.config.tooltips.controls)) {
                var c = this.config,
                  d = c.classNames,
                  u = c.selectors,
                  h = ""
                    .concat(u.controls.wrapper, " ")
                    .concat(u.labels, " .")
                    .concat(d.hidden),
                  p = ye.call(this, h);
                Array.from(p).forEach(function (t) {
                  fe(t, e.config.classNames.hidden, !1),
                    fe(t, e.config.classNames.tooltip, !0);
                });
              }
            },
          };
          function et(e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              i = e;
            if (t) {
              var n = document.createElement("a");
              (n.href = i), (i = n.href);
            }
            try {
              return new URL(i);
            } catch (e) {
              return null;
            }
          }
          function tt(e) {
            var t = new URLSearchParams();
            return (
              R(e) &&
                Object.entries(e).forEach(function (e) {
                  var i = o(e, 2),
                    n = i[0],
                    s = i[1];
                  t.set(n, s);
                }),
              t
            );
          }
          var it = {
              setup: function () {
                if (this.supported.ui)
                  if (
                    !this.isVideo ||
                    this.isYouTube ||
                    (this.isHTML5 && !Se.textTracks)
                  )
                    Y(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      Ze.setCaptionsMenu.call(this);
                  else {
                    if (
                      (U(this.elements.captions) ||
                        ((this.elements.captions = le(
                          "div",
                          pe(this.config.selectors.captions)
                        )),
                        (function (e, t) {
                          U(e) &&
                            U(t) &&
                            t.parentNode.insertBefore(e, t.nextSibling);
                        })(this.elements.captions, this.elements.wrapper)),
                      ne.isIE && window.URL)
                    ) {
                      var e = this.media.querySelectorAll("track");
                      Array.from(e).forEach(function (e) {
                        var t = e.getAttribute("src"),
                          i = et(t);
                        null !== i &&
                          i.hostname !== window.location.href.hostname &&
                          ["http:", "https:"].includes(i.protocol) &&
                          Ye(t, "blob")
                            .then(function (t) {
                              e.setAttribute(
                                "src",
                                window.URL.createObjectURL(t)
                              );
                            })
                            .catch(function () {
                              de(e);
                            });
                      });
                    }
                    var t = qe(
                        (
                          navigator.languages || [
                            navigator.language ||
                              navigator.userLanguage ||
                              "en",
                          ]
                        ).map(function (e) {
                          return e.split("-")[0];
                        })
                      ),
                      i = (
                        this.storage.get("language") ||
                        this.config.captions.language ||
                        "auto"
                      ).toLowerCase();
                    "auto" === i && (i = o(t, 1)[0]);
                    var n = this.storage.get("captions");
                    if (
                      (G(n) || (n = this.config.captions.active),
                      Object.assign(this.captions, {
                        toggled: !1,
                        active: n,
                        language: i,
                        languages: t,
                      }),
                      this.isHTML5)
                    ) {
                      var s = this.config.captions.update
                        ? "addtrack removetrack"
                        : "removetrack";
                      ke.call(
                        this,
                        this.media.textTracks,
                        s,
                        it.update.bind(this)
                      );
                    }
                    setTimeout(it.update.bind(this), 0);
                  }
              },
              update: function () {
                var e = this,
                  t = it.getTracks.call(this, !0),
                  i = this.captions,
                  n = i.active,
                  s = i.language,
                  a = i.meta,
                  r = i.currentTrackNode,
                  o = Boolean(
                    t.find(function (e) {
                      return e.language === s;
                    })
                  );
                this.isHTML5 &&
                  this.isVideo &&
                  t
                    .filter(function (e) {
                      return !a.get(e);
                    })
                    .forEach(function (t) {
                      e.debug.log("Track added", t),
                        a.set(t, { default: "showing" === t.mode }),
                        "showing" === t.mode && (t.mode = "hidden"),
                        ke.call(e, t, "cuechange", function () {
                          return it.updateCues.call(e);
                        });
                    }),
                  ((o && this.language !== s) || !t.includes(r)) &&
                    (it.setLanguage.call(this, s),
                    it.toggle.call(this, n && o)),
                  fe(
                    this.elements.container,
                    this.config.classNames.captions.enabled,
                    !ee(t)
                  ),
                  Y(this.config.controls) &&
                    this.config.controls.includes("settings") &&
                    this.config.settings.includes("captions") &&
                    Ze.setCaptionsMenu.call(this);
              },
              toggle: function (e) {
                var t = this,
                  i =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                if (this.supported.ui) {
                  var n = this.captions.toggled,
                    s = this.config.classNames.captions.active,
                    a = F(e) ? !n : e;
                  if (a !== n) {
                    if (
                      (i ||
                        ((this.captions.active = a),
                        this.storage.set({ captions: a })),
                      !this.language && a && !i)
                    ) {
                      var r = it.getTracks.call(this),
                        o = it.findTrack.call(
                          this,
                          [this.captions.language].concat(
                            l(this.captions.languages)
                          ),
                          !0
                        );
                      return (
                        (this.captions.language = o.language),
                        void it.set.call(this, r.indexOf(o))
                      );
                    }
                    this.elements.buttons.captions &&
                      (this.elements.buttons.captions.pressed = a),
                      fe(this.elements.container, s, a),
                      (this.captions.toggled = a),
                      Ze.updateSetting.call(this, "captions"),
                      Ae.call(
                        this,
                        this.media,
                        a ? "captionsenabled" : "captionsdisabled"
                      );
                  }
                  setTimeout(function () {
                    a &&
                      t.captions.toggled &&
                      (t.captions.currentTrackNode.mode = "hidden");
                  });
                }
              },
              set: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  i = it.getTracks.call(this);
                if (-1 !== e)
                  if (V(e))
                    if (e in i) {
                      if (this.captions.currentTrack !== e) {
                        this.captions.currentTrack = e;
                        var n = i[e],
                          s = n || {},
                          a = s.language;
                        (this.captions.currentTrackNode = n),
                          Ze.updateSetting.call(this, "captions"),
                          t ||
                            ((this.captions.language = a),
                            this.storage.set({ language: a })),
                          this.isVimeo && this.embed.enableTextTrack(a),
                          Ae.call(this, this.media, "languagechange");
                      }
                      it.toggle.call(this, !0, t),
                        this.isHTML5 &&
                          this.isVideo &&
                          it.updateCues.call(this);
                    } else this.debug.warn("Track not found", e);
                  else this.debug.warn("Invalid caption argument", e);
                else it.toggle.call(this, !1, t);
              },
              setLanguage: function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                if (_(e)) {
                  var i = e.toLowerCase();
                  this.captions.language = i;
                  var n = it.getTracks.call(this),
                    s = it.findTrack.call(this, [i]);
                  it.set.call(this, n.indexOf(s), t);
                } else this.debug.warn("Invalid language argument", e);
              },
              getTracks: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  i = Array.from((this.media || {}).textTracks || []);
                return i
                  .filter(function (i) {
                    return !e.isHTML5 || t || e.captions.meta.has(i);
                  })
                  .filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind);
                  });
              },
              findTrack: function (e) {
                var t,
                  i = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  s = it.getTracks.call(this),
                  a = function (e) {
                    return Number((i.captions.meta.get(e) || {}).default);
                  },
                  r = Array.from(s).sort(function (e, t) {
                    return a(t) - a(e);
                  });
                return (
                  e.every(function (e) {
                    return !(t = r.find(function (t) {
                      return t.language === e;
                    }));
                  }),
                  t || (n ? r[0] : void 0)
                );
              },
              getCurrentTrack: function () {
                return it.getTracks.call(this)[this.currentTrack];
              },
              getLabel: function (e) {
                var t = e;
                return (
                  !J(t) &&
                    Se.textTracks &&
                    this.captions.toggled &&
                    (t = it.getCurrentTrack.call(this)),
                  J(t)
                    ? ee(t.label)
                      ? ee(t.language)
                        ? Ge("enabled", this.config)
                        : e.language.toUpperCase()
                      : t.label
                    : Ge("disabled", this.config)
                );
              },
              updateCues: function (e) {
                if (this.supported.ui)
                  if (U(this.elements.captions))
                    if (F(e) || Array.isArray(e)) {
                      var t = e;
                      if (!t) {
                        var i = it.getCurrentTrack.call(this);
                        t = Array.from((i || {}).activeCues || [])
                          .map(function (e) {
                            return e.getCueAsHTML();
                          })
                          .map(Ve);
                      }
                      var n = t
                        .map(function (e) {
                          return e.trim();
                        })
                        .join("\n");
                      if (n !== this.elements.captions.innerHTML) {
                        ue(this.elements.captions);
                        var s = le("span", pe(this.config.selectors.caption));
                        (s.innerHTML = n),
                          this.elements.captions.appendChild(s),
                          Ae.call(this, this.media, "cuechange");
                      }
                    } else this.debug.warn("updateCues: Invalid input", e);
                  else this.debug.warn("No captions element to render to");
              },
            },
            nt = {
              enabled: !0,
              title: "",
              debug: !1,
              autoplay: !1,
              autopause: !0,
              playsinline: !0,
              seekTime: 10,
              volume: 1,
              muted: !1,
              duration: null,
              displayDuration: !0,
              invertTime: !0,
              toggleInvert: !0,
              ratio: null,
              clickToPlay: !0,
              hideControls: !0,
              resetOnEnd: !1,
              disableContextMenu: !0,
              loadSprite: !0,
              iconPrefix: "plyr",
              iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
              blankVideo: "https://cdn.plyr.io/static/blank.mp4",
              quality: {
                default: 576,
                options: [
                  4320,
                  2880,
                  2160,
                  1440,
                  1080,
                  720,
                  576,
                  480,
                  360,
                  240,
                ],
                forced: !1,
                onChange: null,
              },
              loop: { active: !1 },
              speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
              },
              keyboard: { focused: !0, global: !1 },
              tooltips: { controls: !1, seek: !0 },
              captions: { active: !1, language: "auto", update: !1 },
              fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
              storage: { enabled: !0, key: "plyr" },
              controls: [
                "play-large",
                "play",
                "progress",
                "current-time",
                "mute",
                "volume",
                "captions",
                "settings",
                "pip",
                "airplay",
                "fullscreen",
              ],
              settings: ["captions", "quality", "speed"],
              i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                  2160: "4K",
                  1440: "HD",
                  1080: "HD",
                  720: "HD",
                  576: "SD",
                  480: "SD",
                },
              },
              urls: {
                download: null,
                vimeo: {
                  sdk: "https://player.vimeo.com/api/player.js",
                  iframe: "https://player.vimeo.com/video/{0}?{1}",
                  api: "https://vimeo.com/api/v2/video/{0}.json",
                },
                youtube: {
                  sdk: "https://www.youtube.com/iframe_api",
                  api:
                    "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                },
                googleIMA: {
                  sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                },
              },
              listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null,
              },
              events: [
                "ended",
                "progress",
                "stalled",
                "playing",
                "waiting",
                "canplay",
                "canplaythrough",
                "loadstart",
                "loadeddata",
                "loadedmetadata",
                "timeupdate",
                "volumechange",
                "play",
                "pause",
                "error",
                "seeking",
                "seeked",
                "emptied",
                "ratechange",
                "cuechange",
                "download",
                "enterfullscreen",
                "exitfullscreen",
                "captionsenabled",
                "captionsdisabled",
                "languagechange",
                "controlshidden",
                "controlsshown",
                "ready",
                "statechange",
                "qualitychange",
                "adsloaded",
                "adscontentpause",
                "adscontentresume",
                "adstarted",
                "adsmidpoint",
                "adscomplete",
                "adsallcomplete",
                "adsimpression",
                "adsclick",
              ],
              selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: { container: null, wrapper: ".plyr__controls" },
                labels: "[data-plyr]",
                buttons: {
                  play: '[data-plyr="play"]',
                  pause: '[data-plyr="pause"]',
                  restart: '[data-plyr="restart"]',
                  rewind: '[data-plyr="rewind"]',
                  fastForward: '[data-plyr="fast-forward"]',
                  mute: '[data-plyr="mute"]',
                  captions: '[data-plyr="captions"]',
                  download: '[data-plyr="download"]',
                  fullscreen: '[data-plyr="fullscreen"]',
                  pip: '[data-plyr="pip"]',
                  airplay: '[data-plyr="airplay"]',
                  settings: '[data-plyr="settings"]',
                  loop: '[data-plyr="loop"]',
                },
                inputs: {
                  seek: '[data-plyr="seek"]',
                  volume: '[data-plyr="volume"]',
                  speed: '[data-plyr="speed"]',
                  language: '[data-plyr="language"]',
                  quality: '[data-plyr="quality"]',
                },
                display: {
                  currentTime: ".plyr__time--current",
                  duration: ".plyr__time--duration",
                  buffer: ".plyr__progress__buffer",
                  loop: ".plyr__progress__loop",
                  volume: ".plyr__volume--display",
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption",
              },
              classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: { time: "plyr__time" },
                menu: {
                  value: "plyr__menu__value",
                  badge: "plyr__badge",
                  open: "plyr--menu-open",
                },
                captions: {
                  enabled: "plyr--captions-enabled",
                  active: "plyr--captions-active",
                },
                fullscreen: {
                  enabled: "plyr--fullscreen-enabled",
                  fallback: "plyr--fullscreen-fallback",
                },
                pip: {
                  supported: "plyr--pip-supported",
                  active: "plyr--pip-active",
                },
                airplay: {
                  supported: "plyr--airplay-supported",
                  active: "plyr--airplay-active",
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                  thumbContainer: "plyr__preview-thumb",
                  thumbContainerShown: "plyr__preview-thumb--is-shown",
                  imageContainer: "plyr__preview-thumb__image-container",
                  timeContainer: "plyr__preview-thumb__time-container",
                  scrubbingContainer: "plyr__preview-scrubbing",
                  scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
                },
              },
              attributes: {
                embed: {
                  provider: "data-plyr-provider",
                  id: "data-plyr-embed-id",
                },
              },
              ads: { enabled: !1, publisherId: "", tagUrl: "" },
              previewThumbnails: { enabled: !1, src: "" },
              vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                premium: !1,
                referrerPolicy: null,
              },
              youtube: {
                noCookie: !0,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
            },
            st = "picture-in-picture",
            at = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
            rt = function () {},
            ot = (function () {
              function t() {
                var i =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                e(this, t),
                  (this.enabled = window.console && i),
                  this.enabled && this.log("Debugging enabled");
              }
              return (
                n(t, [
                  {
                    key: "log",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.log, console)
                        : rt;
                    },
                  },
                  {
                    key: "warn",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.warn, console)
                        : rt;
                    },
                  },
                  {
                    key: "error",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.error, console)
                        : rt;
                    },
                  },
                ]),
                t
              );
            })(),
            lt = (function () {
              function t(i) {
                var n = this;
                e(this, t),
                  (this.player = i),
                  (this.prefix = t.prefix),
                  (this.property = t.property),
                  (this.scrollPosition = { x: 0, y: 0 }),
                  (this.forceFallback =
                    "force" === i.config.fullscreen.fallback),
                  (this.player.elements.fullscreen =
                    i.config.fullscreen.container &&
                    (function (e, t) {
                      return (
                        Element.prototype.closest ||
                        function () {
                          var e = this;
                          do {
                            if (ve.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode;
                          } while (null !== e && 1 === e.nodeType);
                          return null;
                        }
                      ).call(e, t);
                    })(
                      this.player.elements.container,
                      i.config.fullscreen.container
                    )),
                  ke.call(
                    this.player,
                    document,
                    "ms" === this.prefix
                      ? "MSFullscreenChange"
                      : "".concat(this.prefix, "fullscreenchange"),
                    function () {
                      n.onChange();
                    }
                  ),
                  ke.call(
                    this.player,
                    this.player.elements.container,
                    "dblclick",
                    function (e) {
                      (U(n.player.elements.controls) &&
                        n.player.elements.controls.contains(e.target)) ||
                        n.toggle();
                    }
                  ),
                  ke.call(
                    this,
                    this.player.elements.container,
                    "keydown",
                    function (e) {
                      return n.trapFocus(e);
                    }
                  ),
                  this.update();
              }
              return (
                n(
                  t,
                  [
                    {
                      key: "onChange",
                      value: function () {
                        if (this.enabled) {
                          var e = this.player.elements.buttons.fullscreen;
                          U(e) && (e.pressed = this.active),
                            Ae.call(
                              this.player,
                              this.target,
                              this.active
                                ? "enterfullscreen"
                                : "exitfullscreen",
                              !0
                            );
                        }
                      },
                    },
                    {
                      key: "toggleFallback",
                      value: function () {
                        var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0];
                        if (
                          (e
                            ? (this.scrollPosition = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0,
                              })
                            : window.scrollTo(
                                this.scrollPosition.x,
                                this.scrollPosition.y
                              ),
                          (document.body.style.overflow = e ? "hidden" : ""),
                          fe(
                            this.target,
                            this.player.config.classNames.fullscreen.fallback,
                            e
                          ),
                          ne.isIos)
                        ) {
                          var t = document.head.querySelector(
                              'meta[name="viewport"]'
                            ),
                            i = "viewport-fit=cover";
                          t ||
                            (t = document.createElement("meta")).setAttribute(
                              "name",
                              "viewport"
                            );
                          var n = _(t.content) && t.content.includes(i);
                          e
                            ? ((this.cleanupViewport = !n),
                              n || (t.content += ",".concat(i)))
                            : this.cleanupViewport &&
                              (t.content = t.content
                                .split(",")
                                .filter(function (e) {
                                  return e.trim() !== i;
                                })
                                .join(","));
                        }
                        this.onChange();
                      },
                    },
                    {
                      key: "trapFocus",
                      value: function (e) {
                        if (
                          !ne.isIos &&
                          this.active &&
                          "Tab" === e.key &&
                          9 === e.keyCode
                        ) {
                          var t = document.activeElement,
                            i = ye.call(
                              this.player,
                              "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                            ),
                            n = o(i, 1)[0],
                            s = i[i.length - 1];
                          t !== s || e.shiftKey
                            ? t === n &&
                              e.shiftKey &&
                              (s.focus(), e.preventDefault())
                            : (n.focus(), e.preventDefault());
                        }
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        var e;
                        this.enabled
                          ? ((e = this.forceFallback
                              ? "Fallback (forced)"
                              : t.native
                              ? "Native"
                              : "Fallback"),
                            this.player.debug.log(
                              "".concat(e, " fullscreen enabled")
                            ))
                          : this.player.debug.log(
                              "Fullscreen not supported and fallback disabled"
                            ),
                          fe(
                            this.player.elements.container,
                            this.player.config.classNames.fullscreen.enabled,
                            this.enabled
                          );
                      },
                    },
                    {
                      key: "enter",
                      value: function () {
                        this.enabled &&
                          (ne.isIos && this.player.config.fullscreen.iosNative
                            ? this.target.webkitEnterFullscreen()
                            : !t.native || this.forceFallback
                            ? this.toggleFallback(!0)
                            : this.prefix
                            ? ee(this.prefix) ||
                              this.target[
                                ""
                                  .concat(this.prefix, "Request")
                                  .concat(this.property)
                              ]()
                            : this.target.requestFullscreen({
                                navigationUI: "hide",
                              }));
                      },
                    },
                    {
                      key: "exit",
                      value: function () {
                        if (this.enabled)
                          if (
                            ne.isIos &&
                            this.player.config.fullscreen.iosNative
                          )
                            this.target.webkitExitFullscreen(),
                              Ie(this.player.play());
                          else if (!t.native || this.forceFallback)
                            this.toggleFallback(!1);
                          else if (this.prefix) {
                            if (!ee(this.prefix)) {
                              var e = "moz" === this.prefix ? "Cancel" : "Exit";
                              document[
                                ""
                                  .concat(this.prefix)
                                  .concat(e)
                                  .concat(this.property)
                              ]();
                            }
                          } else
                            (
                              document.cancelFullScreen ||
                              document.exitFullscreen
                            ).call(document);
                      },
                    },
                    {
                      key: "toggle",
                      value: function () {
                        this.active ? this.exit() : this.enter();
                      },
                    },
                    {
                      key: "usingNative",
                      get: function () {
                        return t.native && !this.forceFallback;
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return (
                          (t.native ||
                            this.player.config.fullscreen.fallback) &&
                          this.player.config.fullscreen.enabled &&
                          this.player.supported.ui &&
                          this.player.isVideo
                        );
                      },
                    },
                    {
                      key: "active",
                      get: function () {
                        if (!this.enabled) return !1;
                        if (!t.native || this.forceFallback)
                          return ge(
                            this.target,
                            this.player.config.classNames.fullscreen.fallback
                          );
                        var e = this.prefix
                          ? document[
                              ""
                                .concat(this.prefix)
                                .concat(this.property, "Element")
                            ]
                          : document.fullscreenElement;
                        return e && e.shadowRoot
                          ? e === this.target.getRootNode().host
                          : e === this.target;
                      },
                    },
                    {
                      key: "target",
                      get: function () {
                        return ne.isIos &&
                          this.player.config.fullscreen.iosNative
                          ? this.player.media
                          : this.player.elements.fullscreen ||
                              this.player.elements.container;
                      },
                    },
                  ],
                  [
                    {
                      key: "native",
                      get: function () {
                        return !!(
                          document.fullscreenEnabled ||
                          document.webkitFullscreenEnabled ||
                          document.mozFullScreenEnabled ||
                          document.msFullscreenEnabled
                        );
                      },
                    },
                    {
                      key: "prefix",
                      get: function () {
                        if (W(document.exitFullscreen)) return "";
                        var e = "";
                        return (
                          ["webkit", "moz", "ms"].some(function (t) {
                            return !(
                              (!W(document["".concat(t, "ExitFullscreen")]) &&
                                !W(
                                  document["".concat(t, "CancelFullScreen")]
                                )) ||
                              ((e = t), 0)
                            );
                          }),
                          e
                        );
                      },
                    },
                    {
                      key: "property",
                      get: function () {
                        return "moz" === this.prefix
                          ? "FullScreen"
                          : "Fullscreen";
                      },
                    },
                  ]
                ),
                t
              );
            })();
          function ct(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return new Promise(function (i, n) {
              var s = new Image(),
                a = function () {
                  delete s.onload,
                    delete s.onerror,
                    (s.naturalWidth >= t ? i : n)(s);
                };
              Object.assign(s, { onload: a, onerror: a, src: e });
            });
          }
          var dt = {
              addStyleHook: function () {
                fe(
                  this.elements.container,
                  this.config.selectors.container.replace(".", ""),
                  !0
                ),
                  fe(
                    this.elements.container,
                    this.config.classNames.uiSupported,
                    this.supported.ui
                  );
              },
              toggleNativeControls: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                e && this.isHTML5
                  ? this.media.setAttribute("controls", "")
                  : this.media.removeAttribute("controls");
              },
              build: function () {
                var e = this;
                if ((this.listeners.media(), !this.supported.ui))
                  return (
                    this.debug.warn(
                      "Basic support only for "
                        .concat(this.provider, " ")
                        .concat(this.type)
                    ),
                    void dt.toggleNativeControls.call(this, !0)
                  );
                U(this.elements.controls) ||
                  (Ze.inject.call(this), this.listeners.controls()),
                  dt.toggleNativeControls.call(this),
                  this.isHTML5 && it.setup.call(this),
                  (this.volume = null),
                  (this.muted = null),
                  (this.loop = null),
                  (this.quality = null),
                  (this.speed = null),
                  Ze.updateVolume.call(this),
                  Ze.timeUpdate.call(this),
                  dt.checkPlaying.call(this),
                  fe(
                    this.elements.container,
                    this.config.classNames.pip.supported,
                    Se.pip && this.isHTML5 && this.isVideo
                  ),
                  fe(
                    this.elements.container,
                    this.config.classNames.airplay.supported,
                    Se.airplay && this.isHTML5
                  ),
                  fe(
                    this.elements.container,
                    this.config.classNames.isIos,
                    ne.isIos
                  ),
                  fe(
                    this.elements.container,
                    this.config.classNames.isTouch,
                    this.touch
                  ),
                  (this.ready = !0),
                  setTimeout(function () {
                    Ae.call(e, e.media, "ready");
                  }, 0),
                  dt.setTitle.call(this),
                  this.poster &&
                    dt.setPoster
                      .call(this, this.poster, !1)
                      .catch(function () {}),
                  this.config.duration && Ze.durationUpdate.call(this);
              },
              setTitle: function () {
                var e = Ge("play", this.config);
                if (
                  (_(this.config.title) &&
                    !ee(this.config.title) &&
                    (e += ", ".concat(this.config.title)),
                  Array.from(this.elements.buttons.play || []).forEach(
                    function (t) {
                      t.setAttribute("aria-label", e);
                    }
                  ),
                  this.isEmbed)
                ) {
                  var t = be.call(this, "iframe");
                  if (!U(t)) return;
                  var i = ee(this.config.title) ? "video" : this.config.title,
                    n = Ge("frameTitle", this.config);
                  t.setAttribute("title", n.replace("{title}", i));
                }
              },
              togglePoster: function (e) {
                fe(
                  this.elements.container,
                  this.config.classNames.posterEnabled,
                  e
                );
              },
              setPoster: function (e) {
                var t = this,
                  i =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return i && this.poster
                  ? Promise.reject(new Error("Poster already set"))
                  : (this.media.setAttribute("data-poster", e),
                    $e
                      .call(this)
                      .then(function () {
                        return ct(e);
                      })
                      .catch(function (i) {
                        throw (
                          (e === t.poster && dt.togglePoster.call(t, !1), i)
                        );
                      })
                      .then(function () {
                        if (e !== t.poster)
                          throw new Error(
                            "setPoster cancelled by later call to setPoster"
                          );
                      })
                      .then(function () {
                        return (
                          Object.assign(t.elements.poster.style, {
                            backgroundImage: "url('".concat(e, "')"),
                            backgroundSize: "",
                          }),
                          dt.togglePoster.call(t, !0),
                          e
                        );
                      }));
              },
              checkPlaying: function (e) {
                var t = this;
                fe(
                  this.elements.container,
                  this.config.classNames.playing,
                  this.playing
                ),
                  fe(
                    this.elements.container,
                    this.config.classNames.paused,
                    this.paused
                  ),
                  fe(
                    this.elements.container,
                    this.config.classNames.stopped,
                    this.stopped
                  ),
                  Array.from(this.elements.buttons.play || []).forEach(
                    function (e) {
                      Object.assign(e, { pressed: t.playing }),
                        e.setAttribute(
                          "aria-label",
                          Ge(t.playing ? "pause" : "play", t.config)
                        );
                    }
                  ),
                  (K(e) && "timeupdate" === e.type) ||
                    dt.toggleControls.call(this);
              },
              checkLoading: function (e) {
                var t = this;
                (this.loading = ["stalled", "waiting"].includes(e.type)),
                  clearTimeout(this.timers.loading),
                  (this.timers.loading = setTimeout(
                    function () {
                      fe(
                        t.elements.container,
                        t.config.classNames.loading,
                        t.loading
                      ),
                        dt.toggleControls.call(t);
                    },
                    this.loading ? 250 : 0
                  ));
              },
              toggleControls: function (e) {
                var t = this.elements.controls;
                if (t && this.config.hideControls) {
                  var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                  this.toggleControls(
                    Boolean(
                      e ||
                        this.loading ||
                        this.paused ||
                        t.pressed ||
                        t.hover ||
                        i
                    )
                  );
                }
              },
              migrateStyles: function () {
                var e = this;
                Object.values(r({}, this.media.style))
                  .filter(function (e) {
                    return !ee(e) && e.startsWith("--plyr");
                  })
                  .forEach(function (t) {
                    e.elements.container.style.setProperty(
                      t,
                      e.media.style.getPropertyValue(t)
                    ),
                      e.media.style.removeProperty(t);
                  }),
                  ee(this.media.style) && this.media.removeAttribute("style");
              },
            },
            ut = (function () {
              function t(i) {
                e(this, t),
                  (this.player = i),
                  (this.lastKey = null),
                  (this.focusTimer = null),
                  (this.lastKeyDown = null),
                  (this.handleKey = this.handleKey.bind(this)),
                  (this.toggleMenu = this.toggleMenu.bind(this)),
                  (this.setTabFocus = this.setTabFocus.bind(this)),
                  (this.firstTouch = this.firstTouch.bind(this));
              }
              return (
                n(t, [
                  {
                    key: "handleKey",
                    value: function (e) {
                      var t = this.player,
                        i = t.elements,
                        n = e.keyCode ? e.keyCode : e.which,
                        s = "keydown" === e.type,
                        a = s && n === this.lastKey;
                      if (
                        !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
                        V(n)
                      )
                        if (s) {
                          var r = document.activeElement;
                          if (U(r)) {
                            var o = t.config.selectors.editable;
                            if (r !== i.inputs.seek && ve(r, o)) return;
                            if (
                              32 === e.which &&
                              ve(r, 'button, [role^="menuitem"]')
                            )
                              return;
                          }
                          switch (
                            ([
                              32,
                              37,
                              38,
                              39,
                              40,
                              48,
                              49,
                              50,
                              51,
                              52,
                              53,
                              54,
                              56,
                              57,
                              67,
                              70,
                              73,
                              75,
                              76,
                              77,
                              79,
                            ].includes(n) &&
                              (e.preventDefault(), e.stopPropagation()),
                            n)
                          ) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                              a ||
                                (t.currentTime = (t.duration / 10) * (n - 48));
                              break;
                            case 32:
                            case 75:
                              a || Ie(t.togglePlay());
                              break;
                            case 38:
                              t.increaseVolume(0.1);
                              break;
                            case 40:
                              t.decreaseVolume(0.1);
                              break;
                            case 77:
                              a || (t.muted = !t.muted);
                              break;
                            case 39:
                              t.forward();
                              break;
                            case 37:
                              t.rewind();
                              break;
                            case 70:
                              t.fullscreen.toggle();
                              break;
                            case 67:
                              a || t.toggleCaptions();
                              break;
                            case 76:
                              t.loop = !t.loop;
                          }
                          27 === n &&
                            !t.fullscreen.usingNative &&
                            t.fullscreen.active &&
                            t.fullscreen.toggle(),
                            (this.lastKey = n);
                        } else this.lastKey = null;
                    },
                  },
                  {
                    key: "toggleMenu",
                    value: function (e) {
                      Ze.toggleMenu.call(this.player, e);
                    },
                  },
                  {
                    key: "firstTouch",
                    value: function () {
                      var e = this.player,
                        t = e.elements;
                      (e.touch = !0),
                        fe(t.container, e.config.classNames.isTouch, !0);
                    },
                  },
                  {
                    key: "setTabFocus",
                    value: function (e) {
                      var t = this.player,
                        i = t.elements;
                      if (
                        (clearTimeout(this.focusTimer),
                        "keydown" !== e.type || 9 === e.which)
                      ) {
                        "keydown" === e.type &&
                          (this.lastKeyDown = e.timeStamp);
                        var n,
                          s = e.timeStamp - this.lastKeyDown <= 20;
                        ("focus" !== e.type || s) &&
                          ((n = t.config.classNames.tabFocus),
                          fe(ye.call(t, ".".concat(n)), n, !1),
                          "focusout" !== e.type &&
                            (this.focusTimer = setTimeout(function () {
                              var e = document.activeElement;
                              i.container.contains(e) &&
                                fe(
                                  document.activeElement,
                                  t.config.classNames.tabFocus,
                                  !0
                                );
                            }, 10)));
                      }
                    },
                  },
                  {
                    key: "global",
                    value: function () {
                      var e =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0],
                        t = this.player;
                      t.config.keyboard.global &&
                        Ce.call(
                          t,
                          window,
                          "keydown keyup",
                          this.handleKey,
                          e,
                          !1
                        ),
                        Ce.call(t, document.body, "click", this.toggleMenu, e),
                        Pe.call(
                          t,
                          document.body,
                          "touchstart",
                          this.firstTouch
                        ),
                        Ce.call(
                          t,
                          document.body,
                          "keydown focus blur focusout",
                          this.setTabFocus,
                          e,
                          !1,
                          !0
                        );
                    },
                  },
                  {
                    key: "container",
                    value: function () {
                      var e = this.player,
                        t = e.config,
                        i = e.elements,
                        n = e.timers;
                      !t.keyboard.global &&
                        t.keyboard.focused &&
                        ke.call(
                          e,
                          i.container,
                          "keydown keyup",
                          this.handleKey,
                          !1
                        ),
                        ke.call(
                          e,
                          i.container,
                          "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                          function (t) {
                            var s = i.controls;
                            s &&
                              "enterfullscreen" === t.type &&
                              ((s.pressed = !1), (s.hover = !1));
                            var a = 0;
                            ["touchstart", "touchmove", "mousemove"].includes(
                              t.type
                            ) &&
                              (dt.toggleControls.call(e, !0),
                              (a = e.touch ? 3e3 : 2e3)),
                              clearTimeout(n.controls),
                              (n.controls = setTimeout(function () {
                                return dt.toggleControls.call(e, !1);
                              }, a));
                          }
                        );
                      var s = function (t) {
                          if (!t) return De.call(e);
                          var n = i.container.getBoundingClientRect(),
                            s = n.width,
                            a = n.height;
                          return De.call(e, "".concat(s, ":").concat(a));
                        },
                        a = function () {
                          clearTimeout(n.resized),
                            (n.resized = setTimeout(s, 50));
                        };
                      ke.call(
                        e,
                        i.container,
                        "enterfullscreen exitfullscreen",
                        function (t) {
                          var n = e.fullscreen,
                            r = n.target,
                            l = n.usingNative;
                          if (
                            r === i.container &&
                            (e.isEmbed || !ee(e.config.ratio))
                          ) {
                            var c = "enterfullscreen" === t.type,
                              d = s(c);
                            d.padding,
                              (function (t, i, n) {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                  var s = e.elements.wrapper.firstChild,
                                    a = o(t, 2)[1],
                                    r = o(Ne.call(e), 2),
                                    l = r[0],
                                    c = r[1];
                                  (s.style.maxWidth = n
                                    ? "".concat((a / c) * l, "px")
                                    : null),
                                    (s.style.margin = n ? "0 auto" : null);
                                }
                              })(d.ratio, 0, c),
                              l ||
                                (c
                                  ? ke.call(e, window, "resize", a)
                                  : Me.call(e, window, "resize", a));
                          }
                        }
                      );
                    },
                  },
                  {
                    key: "media",
                    value: function () {
                      var e = this,
                        t = this.player,
                        i = t.elements;
                      if (
                        (ke.call(
                          t,
                          t.media,
                          "timeupdate seeking seeked",
                          function (e) {
                            return Ze.timeUpdate.call(t, e);
                          }
                        ),
                        ke.call(
                          t,
                          t.media,
                          "durationchange loadeddata loadedmetadata",
                          function (e) {
                            return Ze.durationUpdate.call(t, e);
                          }
                        ),
                        ke.call(t, t.media, "ended", function () {
                          t.isHTML5 &&
                            t.isVideo &&
                            t.config.resetOnEnd &&
                            (t.restart(), t.pause());
                        }),
                        ke.call(
                          t,
                          t.media,
                          "progress playing seeking seeked",
                          function (e) {
                            return Ze.updateProgress.call(t, e);
                          }
                        ),
                        ke.call(t, t.media, "volumechange", function (e) {
                          return Ze.updateVolume.call(t, e);
                        }),
                        ke.call(
                          t,
                          t.media,
                          "playing play pause ended emptied timeupdate",
                          function (e) {
                            return dt.checkPlaying.call(t, e);
                          }
                        ),
                        ke.call(
                          t,
                          t.media,
                          "waiting canplay seeked playing",
                          function (e) {
                            return dt.checkLoading.call(t, e);
                          }
                        ),
                        t.supported.ui && t.config.clickToPlay && !t.isAudio)
                      ) {
                        var n = be.call(
                          t,
                          ".".concat(t.config.classNames.video)
                        );
                        if (!U(n)) return;
                        ke.call(t, i.container, "click", function (s) {
                          ([i.container, n].includes(s.target) ||
                            n.contains(s.target)) &&
                            ((t.touch && t.config.hideControls) ||
                              (t.ended
                                ? (e.proxy(s, t.restart, "restart"),
                                  e.proxy(
                                    s,
                                    function () {
                                      Ie(t.play());
                                    },
                                    "play"
                                  ))
                                : e.proxy(
                                    s,
                                    function () {
                                      Ie(t.togglePlay());
                                    },
                                    "play"
                                  )));
                        });
                      }
                      t.supported.ui &&
                        t.config.disableContextMenu &&
                        ke.call(
                          t,
                          i.wrapper,
                          "contextmenu",
                          function (e) {
                            e.preventDefault();
                          },
                          !1
                        ),
                        ke.call(t, t.media, "volumechange", function () {
                          t.storage.set({ volume: t.volume, muted: t.muted });
                        }),
                        ke.call(t, t.media, "ratechange", function () {
                          Ze.updateSetting.call(t, "speed"),
                            t.storage.set({ speed: t.speed });
                        }),
                        ke.call(t, t.media, "qualitychange", function (e) {
                          Ze.updateSetting.call(
                            t,
                            "quality",
                            null,
                            e.detail.quality
                          );
                        }),
                        ke.call(t, t.media, "ready qualitychange", function () {
                          Ze.setDownloadUrl.call(t);
                        });
                      var s = t.config.events
                        .concat(["keyup", "keydown"])
                        .join(" ");
                      ke.call(t, t.media, s, function (e) {
                        var n = e.detail,
                          s = void 0 === n ? {} : n;
                        "error" === e.type && (s = t.media.error),
                          Ae.call(t, i.container, e.type, !0, s);
                      });
                    },
                  },
                  {
                    key: "proxy",
                    value: function (e, t, i) {
                      var n = this.player,
                        s = n.config.listeners[i],
                        a = !0;
                      W(s) && (a = s.call(n, e)),
                        !1 !== a && W(t) && t.call(n, e);
                    },
                  },
                  {
                    key: "bind",
                    value: function (e, t, i, n) {
                      var s = this,
                        a =
                          !(arguments.length > 4 && void 0 !== arguments[4]) ||
                          arguments[4],
                        r = this.player,
                        o = r.config.listeners[n],
                        l = W(o);
                      ke.call(
                        r,
                        e,
                        t,
                        function (e) {
                          return s.proxy(e, i, n);
                        },
                        a && !l
                      );
                    },
                  },
                  {
                    key: "controls",
                    value: function () {
                      var e = this,
                        t = this.player,
                        i = t.elements,
                        n = ne.isIE ? "change" : "input";
                      if (
                        (i.buttons.play &&
                          Array.from(i.buttons.play).forEach(function (i) {
                            e.bind(
                              i,
                              "click",
                              function () {
                                Ie(t.togglePlay());
                              },
                              "play"
                            );
                          }),
                        this.bind(
                          i.buttons.restart,
                          "click",
                          t.restart,
                          "restart"
                        ),
                        this.bind(
                          i.buttons.rewind,
                          "click",
                          t.rewind,
                          "rewind"
                        ),
                        this.bind(
                          i.buttons.fastForward,
                          "click",
                          t.forward,
                          "fastForward"
                        ),
                        this.bind(
                          i.buttons.mute,
                          "click",
                          function () {
                            t.muted = !t.muted;
                          },
                          "mute"
                        ),
                        this.bind(i.buttons.captions, "click", function () {
                          return t.toggleCaptions();
                        }),
                        this.bind(
                          i.buttons.download,
                          "click",
                          function () {
                            Ae.call(t, t.media, "download");
                          },
                          "download"
                        ),
                        this.bind(
                          i.buttons.fullscreen,
                          "click",
                          function () {
                            t.fullscreen.toggle();
                          },
                          "fullscreen"
                        ),
                        this.bind(
                          i.buttons.pip,
                          "click",
                          function () {
                            t.pip = "toggle";
                          },
                          "pip"
                        ),
                        this.bind(
                          i.buttons.airplay,
                          "click",
                          t.airplay,
                          "airplay"
                        ),
                        this.bind(
                          i.buttons.settings,
                          "click",
                          function (e) {
                            e.stopPropagation(),
                              e.preventDefault(),
                              Ze.toggleMenu.call(t, e);
                          },
                          null,
                          !1
                        ),
                        this.bind(
                          i.buttons.settings,
                          "keyup",
                          function (e) {
                            var i = e.which;
                            [13, 32].includes(i) &&
                              (13 !== i
                                ? (e.preventDefault(),
                                  e.stopPropagation(),
                                  Ze.toggleMenu.call(t, e))
                                : Ze.focusFirstMenuItem.call(t, null, !0));
                          },
                          null,
                          !1
                        ),
                        this.bind(i.settings.menu, "keydown", function (e) {
                          27 === e.which && Ze.toggleMenu.call(t, e);
                        }),
                        this.bind(
                          i.inputs.seek,
                          "mousedown mousemove",
                          function (e) {
                            var t = i.progress.getBoundingClientRect(),
                              n = (100 / t.width) * (e.pageX - t.left);
                            e.currentTarget.setAttribute("seek-value", n);
                          }
                        ),
                        this.bind(
                          i.inputs.seek,
                          "mousedown mouseup keydown keyup touchstart touchend",
                          function (e) {
                            var i = e.currentTarget,
                              n = e.keyCode ? e.keyCode : e.which;
                            if (!Q(e) || 39 === n || 37 === n) {
                              t.lastSeekTime = Date.now();
                              var s = i.hasAttribute("play-on-seeked"),
                                a = ["mouseup", "touchend", "keyup"].includes(
                                  e.type
                                );
                              s && a
                                ? (i.removeAttribute("play-on-seeked"),
                                  Ie(t.play()))
                                : !a &&
                                  t.playing &&
                                  (i.setAttribute("play-on-seeked", ""),
                                  t.pause());
                            }
                          }
                        ),
                        ne.isIos)
                      ) {
                        var s = ye.call(t, 'input[type="range"]');
                        Array.from(s).forEach(function (t) {
                          return e.bind(t, n, function (e) {
                            return ie(e.target);
                          });
                        });
                      }
                      this.bind(
                        i.inputs.seek,
                        n,
                        function (e) {
                          var i = e.currentTarget,
                            n = i.getAttribute("seek-value");
                          ee(n) && (n = i.value),
                            i.removeAttribute("seek-value"),
                            (t.currentTime = (n / i.max) * t.duration);
                        },
                        "seek"
                      ),
                        this.bind(
                          i.progress,
                          "mouseenter mouseleave mousemove",
                          function (e) {
                            return Ze.updateSeekTooltip.call(t, e);
                          }
                        ),
                        this.bind(
                          i.progress,
                          "mousemove touchmove",
                          function (e) {
                            var i = t.previewThumbnails;
                            i && i.loaded && i.startMove(e);
                          }
                        ),
                        this.bind(
                          i.progress,
                          "mouseleave touchend click",
                          function () {
                            var e = t.previewThumbnails;
                            e && e.loaded && e.endMove(!1, !0);
                          }
                        ),
                        this.bind(
                          i.progress,
                          "mousedown touchstart",
                          function (e) {
                            var i = t.previewThumbnails;
                            i && i.loaded && i.startScrubbing(e);
                          }
                        ),
                        this.bind(i.progress, "mouseup touchend", function (e) {
                          var i = t.previewThumbnails;
                          i && i.loaded && i.endScrubbing(e);
                        }),
                        ne.isWebkit &&
                          Array.from(ye.call(t, 'input[type="range"]')).forEach(
                            function (i) {
                              e.bind(i, "input", function (e) {
                                return Ze.updateRangeFill.call(t, e.target);
                              });
                            }
                          ),
                        t.config.toggleInvert &&
                          !U(i.display.duration) &&
                          this.bind(
                            i.display.currentTime,
                            "click",
                            function () {
                              0 !== t.currentTime &&
                                ((t.config.invertTime = !t.config.invertTime),
                                Ze.timeUpdate.call(t));
                            }
                          ),
                        this.bind(
                          i.inputs.volume,
                          n,
                          function (e) {
                            t.volume = e.target.value;
                          },
                          "volume"
                        ),
                        this.bind(
                          i.controls,
                          "mouseenter mouseleave",
                          function (e) {
                            i.controls.hover =
                              !t.touch && "mouseenter" === e.type;
                          }
                        ),
                        i.fullscreen &&
                          Array.from(i.fullscreen.children)
                            .filter(function (e) {
                              return !e.contains(i.container);
                            })
                            .forEach(function (n) {
                              e.bind(n, "mouseenter mouseleave", function (e) {
                                i.controls.hover =
                                  !t.touch && "mouseenter" === e.type;
                              });
                            }),
                        this.bind(
                          i.controls,
                          "mousedown mouseup touchstart touchend touchcancel",
                          function (e) {
                            i.controls.pressed = [
                              "mousedown",
                              "touchstart",
                            ].includes(e.type);
                          }
                        ),
                        this.bind(i.controls, "focusin", function () {
                          var n = t.config,
                            s = t.timers;
                          fe(i.controls, n.classNames.noTransition, !0),
                            dt.toggleControls.call(t, !0),
                            setTimeout(function () {
                              fe(i.controls, n.classNames.noTransition, !1);
                            }, 0);
                          var a = e.touch ? 3e3 : 4e3;
                          clearTimeout(s.controls),
                            (s.controls = setTimeout(function () {
                              return dt.toggleControls.call(t, !1);
                            }, a));
                        }),
                        this.bind(
                          i.inputs.volume,
                          "wheel",
                          function (e) {
                            var i = e.webkitDirectionInvertedFromDevice,
                              n = o(
                                [e.deltaX, -e.deltaY].map(function (e) {
                                  return i ? -e : e;
                                }),
                                2
                              ),
                              s = n[0],
                              a = n[1],
                              r = Math.sign(Math.abs(s) > Math.abs(a) ? s : a);
                            t.increaseVolume(r / 50);
                            var l = t.media.volume;
                            ((1 === r && l < 1) || (-1 === r && l > 0)) &&
                              e.preventDefault();
                          },
                          "volume",
                          !1
                        );
                    },
                  },
                ]),
                t
              );
            })();
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== t || ("undefined" != typeof self && self);
          var ht = (function (e, t) {
            return (
              (function (e, t) {
                e.exports = (function () {
                  var e = function () {},
                    t = {},
                    i = {},
                    n = {};
                  function s(e, t) {
                    if (e) {
                      var s = n[e];
                      if (((i[e] = t), s))
                        for (; s.length; ) s[0](e, t), s.splice(0, 1);
                    }
                  }
                  function a(t, i) {
                    t.call && (t = { success: t }),
                      i.length ? (t.error || e)(i) : (t.success || e)(t);
                  }
                  function r(t, i, n, s) {
                    var a,
                      o,
                      l = document,
                      c = n.async,
                      d = (n.numRetries || 0) + 1,
                      u = n.before || e,
                      h = t.replace(/[\?|#].*$/, ""),
                      p = t.replace(/^(css|img)!/, "");
                    (s = s || 0),
                      /(^css!|\.css$)/.test(h)
                        ? (((o = l.createElement("link")).rel = "stylesheet"),
                          (o.href = p),
                          (a = "hideFocus" in o) &&
                            o.relList &&
                            ((a = 0), (o.rel = "preload"), (o.as = "style")))
                        : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
                        ? ((o = l.createElement("img")).src = p)
                        : (((o = l.createElement("script")).src = t),
                          (o.async = void 0 === c || c)),
                      (o.onload = o.onerror = o.onbeforeload = function (e) {
                        var l = e.type[0];
                        if (a)
                          try {
                            o.sheet.cssText.length || (l = "e");
                          } catch (e) {
                            18 != e.code && (l = "e");
                          }
                        if ("e" == l) {
                          if ((s += 1) < d) return r(t, i, n, s);
                        } else if ("preload" == o.rel && "style" == o.as)
                          return (o.rel = "stylesheet");
                        i(t, l, e.defaultPrevented);
                      }),
                      !1 !== u(t, o) && l.head.appendChild(o);
                  }
                  function o(e, i, n) {
                    var o, l;
                    if ((i && i.trim && (o = i), (l = (o ? n : i) || {}), o)) {
                      if (o in t) throw "LoadJS";
                      t[o] = !0;
                    }
                    function c(t, i) {
                      !(function (e, t, i) {
                        var n,
                          s,
                          a = (e = e.push ? e : [e]).length,
                          o = a,
                          l = [];
                        for (
                          n = function (e, i, n) {
                            if (("e" == i && l.push(e), "b" == i)) {
                              if (!n) return;
                              l.push(e);
                            }
                            --a || t(l);
                          },
                            s = 0;
                          s < o;
                          s++
                        )
                          r(e[s], n, i);
                      })(
                        e,
                        function (e) {
                          a(l, e), t && a({ success: t, error: i }, e), s(o, e);
                        },
                        l
                      );
                    }
                    if (l.returnPromise) return new Promise(c);
                    c();
                  }
                  return (
                    (o.ready = function (e, t) {
                      return (
                        (function (e, t) {
                          e = e.push ? e : [e];
                          var s,
                            a,
                            r,
                            o = [],
                            l = e.length,
                            c = l;
                          for (
                            s = function (e, i) {
                              i.length && o.push(e), --c || t(o);
                            };
                            l--;

                          )
                            (a = e[l]),
                              (r = i[a])
                                ? s(a, r)
                                : (n[a] = n[a] || []).push(s);
                        })(e, function (e) {
                          a(t, e);
                        }),
                        o
                      );
                    }),
                    (o.done = function (e) {
                      s(e, []);
                    }),
                    (o.reset = function () {
                      (t = {}), (i = {}), (n = {});
                    }),
                    (o.isDefined = function (e) {
                      return e in t;
                    }),
                    o
                  );
                })();
              })((t = { exports: {} })),
              t.exports
            );
          })();
          function pt(e) {
            return new Promise(function (t, i) {
              ht(e, { success: t, error: i });
            });
          }
          function mt(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
              this.media.paused === e &&
                ((this.media.paused = !e),
                Ae.call(this, this.media, e ? "play" : "pause"));
          }
          var ft = {
            setup: function () {
              var e = this;
              fe(e.elements.wrapper, e.config.classNames.embed, !0),
                (e.options.speed = e.config.speed.options),
                De.call(e),
                R(window.Vimeo)
                  ? ft.ready.call(e)
                  : pt(e.config.urls.vimeo.sdk)
                      .then(function () {
                        ft.ready.call(e);
                      })
                      .catch(function (t) {
                        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                      });
            },
            ready: function () {
              var e = this,
                t = this,
                i = t.config.vimeo,
                n = i.premium,
                s = i.referrerPolicy,
                a = (function (e, t) {
                  if (null == e) return {};
                  var i,
                    n,
                    s = (function (e, t) {
                      if (null == e) return {};
                      var i,
                        n,
                        s = {},
                        a = Object.keys(e);
                      for (n = 0; n < a.length; n++)
                        (i = a[n]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                      return s;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                      (i = a[n]),
                        t.indexOf(i) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, i) &&
                            (s[i] = e[i]));
                  }
                  return s;
                })(i, ["premium", "referrerPolicy"]);
              n && Object.assign(a, { controls: !1, sidedock: !1 });
              var l = tt(
                  r(
                    {
                      loop: t.config.loop.active,
                      autoplay: t.autoplay,
                      muted: t.muted,
                      gesture: "media",
                      playsinline: !this.config.fullscreen.iosNative,
                    },
                    a
                  )
                ),
                c = t.media.getAttribute("src");
              ee(c) && (c = t.media.getAttribute(t.config.attributes.embed.id));
              var d,
                u = ee((d = c))
                  ? null
                  : V(Number(d))
                  ? d
                  : d.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                  ? RegExp.$2
                  : d,
                h = le("iframe"),
                p = je(t.config.urls.vimeo.iframe, u, l);
              h.setAttribute("src", p),
                h.setAttribute("allowfullscreen", ""),
                h.setAttribute(
                  "allow",
                  "autoplay,fullscreen,picture-in-picture"
                ),
                ee(s) || h.setAttribute("referrerPolicy", s);
              var m = t.poster;
              if (n)
                h.setAttribute("data-poster", m), (t.media = he(h, t.media));
              else {
                var f = le("div", {
                  class: t.config.classNames.embedContainer,
                  "data-poster": m,
                });
                f.appendChild(h), (t.media = he(f, t.media));
              }
              Ye(je(t.config.urls.vimeo.api, u), "json").then(function (e) {
                if (!ee(e)) {
                  var i = new URL(e[0].thumbnail_large);
                  (i.pathname = "".concat(i.pathname.split("_")[0], ".jpg")),
                    dt.setPoster.call(t, i.href).catch(function () {});
                }
              }),
                (t.embed = new window.Vimeo.Player(h, {
                  autopause: t.config.autopause,
                  muted: t.muted,
                })),
                (t.media.paused = !0),
                (t.media.currentTime = 0),
                t.supported.ui && t.embed.disableTextTrack(),
                (t.media.play = function () {
                  return mt.call(t, !0), t.embed.play();
                }),
                (t.media.pause = function () {
                  return mt.call(t, !1), t.embed.pause();
                }),
                (t.media.stop = function () {
                  t.pause(), (t.currentTime = 0);
                });
              var g = t.media.currentTime;
              Object.defineProperty(t.media, "currentTime", {
                get: function () {
                  return g;
                },
                set: function (e) {
                  var i = t.embed,
                    n = t.media,
                    s = t.paused,
                    a = t.volume,
                    r = s && !i.hasPlayed;
                  (n.seeking = !0),
                    Ae.call(t, n, "seeking"),
                    Promise.resolve(r && i.setVolume(0))
                      .then(function () {
                        return i.setCurrentTime(e);
                      })
                      .then(function () {
                        return r && i.pause();
                      })
                      .then(function () {
                        return r && i.setVolume(a);
                      })
                      .catch(function () {});
                },
              });
              var v = t.config.speed.selected;
              Object.defineProperty(t.media, "playbackRate", {
                get: function () {
                  return v;
                },
                set: function (e) {
                  t.embed
                    .setPlaybackRate(e)
                    .then(function () {
                      (v = e), Ae.call(t, t.media, "ratechange");
                    })
                    .catch(function () {
                      t.options.speed = [1];
                    });
                },
              });
              var y = t.config.volume;
              Object.defineProperty(t.media, "volume", {
                get: function () {
                  return y;
                },
                set: function (e) {
                  t.embed.setVolume(e).then(function () {
                    (y = e), Ae.call(t, t.media, "volumechange");
                  });
                },
              });
              var b = t.config.muted;
              Object.defineProperty(t.media, "muted", {
                get: function () {
                  return b;
                },
                set: function (e) {
                  var i = !!G(e) && e;
                  t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
                    (b = i), Ae.call(t, t.media, "volumechange");
                  });
                },
              });
              var w,
                T = t.config.loop;
              Object.defineProperty(t.media, "loop", {
                get: function () {
                  return T;
                },
                set: function (e) {
                  var i = G(e) ? e : t.config.loop.active;
                  t.embed.setLoop(i).then(function () {
                    T = i;
                  });
                },
              }),
                t.embed
                  .getVideoUrl()
                  .then(function (e) {
                    (w = e), Ze.setDownloadUrl.call(t);
                  })
                  .catch(function (t) {
                    e.debug.warn(t);
                  }),
                Object.defineProperty(t.media, "currentSrc", {
                  get: function () {
                    return w;
                  },
                }),
                Object.defineProperty(t.media, "ended", {
                  get: function () {
                    return t.currentTime === t.duration;
                  },
                }),
                Promise.all([
                  t.embed.getVideoWidth(),
                  t.embed.getVideoHeight(),
                ]).then(function (i) {
                  var n = o(i, 2),
                    s = n[0],
                    a = n[1];
                  (t.embed.ratio = [s, a]), De.call(e);
                }),
                t.embed.setAutopause(t.config.autopause).then(function (e) {
                  t.config.autopause = e;
                }),
                t.embed.getVideoTitle().then(function (i) {
                  (t.config.title = i), dt.setTitle.call(e);
                }),
                t.embed.getCurrentTime().then(function (e) {
                  (g = e), Ae.call(t, t.media, "timeupdate");
                }),
                t.embed.getDuration().then(function (e) {
                  (t.media.duration = e), Ae.call(t, t.media, "durationchange");
                }),
                t.embed.getTextTracks().then(function (e) {
                  (t.media.textTracks = e), it.setup.call(t);
                }),
                t.embed.on("cuechange", function (e) {
                  var i = e.cues,
                    n = (void 0 === i ? [] : i).map(function (e) {
                      return (function (e) {
                        var t = document.createDocumentFragment(),
                          i = document.createElement("div");
                        return (
                          t.appendChild(i),
                          (i.innerHTML = e),
                          t.firstChild.innerText
                        );
                      })(e.text);
                    });
                  it.updateCues.call(t, n);
                }),
                t.embed.on("loaded", function () {
                  t.embed.getPaused().then(function (e) {
                    mt.call(t, !e), e || Ae.call(t, t.media, "playing");
                  }),
                    U(t.embed.element) &&
                      t.supported.ui &&
                      t.embed.element.setAttribute("tabindex", -1);
                }),
                t.embed.on("bufferstart", function () {
                  Ae.call(t, t.media, "waiting");
                }),
                t.embed.on("bufferend", function () {
                  Ae.call(t, t.media, "playing");
                }),
                t.embed.on("play", function () {
                  mt.call(t, !0), Ae.call(t, t.media, "playing");
                }),
                t.embed.on("pause", function () {
                  mt.call(t, !1);
                }),
                t.embed.on("timeupdate", function (e) {
                  (t.media.seeking = !1),
                    (g = e.seconds),
                    Ae.call(t, t.media, "timeupdate");
                }),
                t.embed.on("progress", function (e) {
                  (t.media.buffered = e.percent),
                    Ae.call(t, t.media, "progress"),
                    1 === parseInt(e.percent, 10) &&
                      Ae.call(t, t.media, "canplaythrough"),
                    t.embed.getDuration().then(function (e) {
                      e !== t.media.duration &&
                        ((t.media.duration = e),
                        Ae.call(t, t.media, "durationchange"));
                    });
                }),
                t.embed.on("seeked", function () {
                  (t.media.seeking = !1), Ae.call(t, t.media, "seeked");
                }),
                t.embed.on("ended", function () {
                  (t.media.paused = !0), Ae.call(t, t.media, "ended");
                }),
                t.embed.on("error", function (e) {
                  (t.media.error = e), Ae.call(t, t.media, "error");
                }),
                setTimeout(function () {
                  return dt.build.call(t);
                }, 0);
            },
          };
          function gt(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
              this.media.paused === e &&
                ((this.media.paused = !e),
                Ae.call(this, this.media, e ? "play" : "pause"));
          }
          function vt(e) {
            return e.noCookie
              ? "https://www.youtube-nocookie.com"
              : "http:" === window.location.protocol
              ? "http://www.youtube.com"
              : void 0;
          }
          var yt,
            bt = {
              setup: function () {
                var e = this;
                if (
                  (fe(this.elements.wrapper, this.config.classNames.embed, !0),
                  R(window.YT) && W(window.YT.Player))
                )
                  bt.ready.call(this);
                else {
                  var t = window.onYouTubeIframeAPIReady;
                  (window.onYouTubeIframeAPIReady = function () {
                    W(t) && t(), bt.ready.call(e);
                  }),
                    pt(this.config.urls.youtube.sdk).catch(function (t) {
                      e.debug.warn("YouTube API failed to load", t);
                    });
                }
              },
              getTitle: function (e) {
                var t = this;
                Ye(je(this.config.urls.youtube.api, e))
                  .then(function (e) {
                    if (R(e)) {
                      var i = e.title,
                        n = e.height,
                        s = e.width;
                      (t.config.title = i),
                        dt.setTitle.call(t),
                        (t.embed.ratio = [s, n]);
                    }
                    De.call(t);
                  })
                  .catch(function () {
                    De.call(t);
                  });
              },
              ready: function () {
                var e = this,
                  t = e.media && e.media.getAttribute("id");
                if (ee(t) || !t.startsWith("youtube-")) {
                  var i = e.media.getAttribute("src");
                  ee(i) &&
                    (i = e.media.getAttribute(this.config.attributes.embed.id));
                  var n,
                    s,
                    a = ee((n = i))
                      ? null
                      : n.match(
                          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                        )
                      ? RegExp.$2
                      : n,
                    r =
                      ((s = e.provider),
                      ""
                        .concat(s, "-")
                        .concat(Math.floor(1e4 * Math.random()))),
                    o = le("div", { id: r, "data-poster": e.poster });
                  e.media = he(o, e.media);
                  var l = function (e) {
                    return "https://i.ytimg.com/vi/"
                      .concat(a, "/")
                      .concat(e, "default.jpg");
                  };
                  ct(l("maxres"), 121)
                    .catch(function () {
                      return ct(l("sd"), 121);
                    })
                    .catch(function () {
                      return ct(l("hq"));
                    })
                    .then(function (t) {
                      return dt.setPoster.call(e, t.src);
                    })
                    .then(function (t) {
                      t.includes("maxres") ||
                        (e.elements.poster.style.backgroundSize = "cover");
                    })
                    .catch(function () {});
                  var c = e.config.youtube;
                  e.embed = new window.YT.Player(r, {
                    videoId: a,
                    host: vt(c),
                    playerVars: ae(
                      {},
                      {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui ? 0 : 1,
                        disablekb: 1,
                        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language,
                        widget_referrer: window ? window.location.href : null,
                      },
                      c
                    ),
                    events: {
                      onError: function (t) {
                        if (!e.media.error) {
                          var i = t.data,
                            n =
                              {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players.",
                              }[i] || "An unknown error occured";
                          (e.media.error = { code: i, message: n }),
                            Ae.call(e, e.media, "error");
                        }
                      },
                      onPlaybackRateChange: function (t) {
                        var i = t.target;
                        (e.media.playbackRate = i.getPlaybackRate()),
                          Ae.call(e, e.media, "ratechange");
                      },
                      onReady: function (t) {
                        if (!W(e.media.play)) {
                          var i = t.target;
                          bt.getTitle.call(e, a),
                            (e.media.play = function () {
                              gt.call(e, !0), i.playVideo();
                            }),
                            (e.media.pause = function () {
                              gt.call(e, !1), i.pauseVideo();
                            }),
                            (e.media.stop = function () {
                              i.stopVideo();
                            }),
                            (e.media.duration = i.getDuration()),
                            (e.media.paused = !0),
                            (e.media.currentTime = 0),
                            Object.defineProperty(e.media, "currentTime", {
                              get: function () {
                                return Number(i.getCurrentTime());
                              },
                              set: function (t) {
                                e.paused &&
                                  !e.embed.hasPlayed &&
                                  e.embed.mute(),
                                  (e.media.seeking = !0),
                                  Ae.call(e, e.media, "seeking"),
                                  i.seekTo(t);
                              },
                            }),
                            Object.defineProperty(e.media, "playbackRate", {
                              get: function () {
                                return i.getPlaybackRate();
                              },
                              set: function (e) {
                                i.setPlaybackRate(e);
                              },
                            });
                          var n = e.config.volume;
                          Object.defineProperty(e.media, "volume", {
                            get: function () {
                              return n;
                            },
                            set: function (t) {
                              (n = t),
                                i.setVolume(100 * n),
                                Ae.call(e, e.media, "volumechange");
                            },
                          });
                          var s = e.config.muted;
                          Object.defineProperty(e.media, "muted", {
                            get: function () {
                              return s;
                            },
                            set: function (t) {
                              var n = G(t) ? t : s;
                              (s = n),
                                i[n ? "mute" : "unMute"](),
                                Ae.call(e, e.media, "volumechange");
                            },
                          }),
                            Object.defineProperty(e.media, "currentSrc", {
                              get: function () {
                                return i.getVideoUrl();
                              },
                            }),
                            Object.defineProperty(e.media, "ended", {
                              get: function () {
                                return e.currentTime === e.duration;
                              },
                            });
                          var r = i.getAvailablePlaybackRates();
                          (e.options.speed = r.filter(function (t) {
                            return e.config.speed.options.includes(t);
                          })),
                            e.supported.ui &&
                              e.media.setAttribute("tabindex", -1),
                            Ae.call(e, e.media, "timeupdate"),
                            Ae.call(e, e.media, "durationchange"),
                            clearInterval(e.timers.buffering),
                            (e.timers.buffering = setInterval(function () {
                              (e.media.buffered = i.getVideoLoadedFraction()),
                                (null === e.media.lastBuffered ||
                                  e.media.lastBuffered < e.media.buffered) &&
                                  Ae.call(e, e.media, "progress"),
                                (e.media.lastBuffered = e.media.buffered),
                                1 === e.media.buffered &&
                                  (clearInterval(e.timers.buffering),
                                  Ae.call(e, e.media, "canplaythrough"));
                            }, 200)),
                            setTimeout(function () {
                              return dt.build.call(e);
                            }, 50);
                        }
                      },
                      onStateChange: function (t) {
                        var i = t.target;
                        switch (
                          (clearInterval(e.timers.playing),
                          e.media.seeking &&
                            [1, 2].includes(t.data) &&
                            ((e.media.seeking = !1),
                            Ae.call(e, e.media, "seeked")),
                          t.data)
                        ) {
                          case -1:
                            Ae.call(e, e.media, "timeupdate"),
                              (e.media.buffered = i.getVideoLoadedFraction()),
                              Ae.call(e, e.media, "progress");
                            break;
                          case 0:
                            gt.call(e, !1),
                              e.media.loop
                                ? (i.stopVideo(), i.playVideo())
                                : Ae.call(e, e.media, "ended");
                            break;
                          case 1:
                            e.config.autoplay ||
                            !e.media.paused ||
                            e.embed.hasPlayed
                              ? (gt.call(e, !0),
                                Ae.call(e, e.media, "playing"),
                                (e.timers.playing = setInterval(function () {
                                  Ae.call(e, e.media, "timeupdate");
                                }, 50)),
                                e.media.duration !== i.getDuration() &&
                                  ((e.media.duration = i.getDuration()),
                                  Ae.call(e, e.media, "durationchange")))
                              : e.media.pause();
                            break;
                          case 2:
                            e.muted || e.embed.unMute(), gt.call(e, !1);
                            break;
                          case 3:
                            Ae.call(e, e.media, "waiting");
                        }
                        Ae.call(e, e.elements.container, "statechange", !1, {
                          code: t.data,
                        });
                      },
                    },
                  });
                }
              },
            },
            wt = {
              setup: function () {
                this.media
                  ? (fe(
                      this.elements.container,
                      this.config.classNames.type.replace("{0}", this.type),
                      !0
                    ),
                    fe(
                      this.elements.container,
                      this.config.classNames.provider.replace(
                        "{0}",
                        this.provider
                      ),
                      !0
                    ),
                    this.isEmbed &&
                      fe(
                        this.elements.container,
                        this.config.classNames.type.replace("{0}", "video"),
                        !0
                      ),
                    this.isVideo &&
                      ((this.elements.wrapper = le("div", {
                        class: this.config.classNames.video,
                      })),
                      re(this.media, this.elements.wrapper),
                      (this.elements.poster = le("div", {
                        class: this.config.classNames.poster,
                      })),
                      this.elements.wrapper.appendChild(this.elements.poster)),
                    this.isHTML5
                      ? He.setup.call(this)
                      : this.isYouTube
                      ? bt.setup.call(this)
                      : this.isVimeo && ft.setup.call(this))
                  : this.debug.warn("No media element found!");
              },
            },
            Tt = (function () {
              function t(i) {
                var n = this;
                e(this, t),
                  (this.player = i),
                  (this.config = i.config.ads),
                  (this.playing = !1),
                  (this.initialized = !1),
                  (this.elements = { container: null, displayContainer: null }),
                  (this.manager = null),
                  (this.loader = null),
                  (this.cuePoints = null),
                  (this.events = {}),
                  (this.safetyTimer = null),
                  (this.countdownTimer = null),
                  (this.managerPromise = new Promise(function (e, t) {
                    n.on("loaded", e), n.on("error", t);
                  })),
                  this.load();
              }
              return (
                n(t, [
                  {
                    key: "load",
                    value: function () {
                      var e = this;
                      this.enabled &&
                        (R(window.google) && R(window.google.ima)
                          ? this.ready()
                          : pt(this.player.config.urls.googleIMA.sdk)
                              .then(function () {
                                e.ready();
                              })
                              .catch(function () {
                                e.trigger(
                                  "error",
                                  new Error("Google IMA SDK failed to load")
                                );
                              }));
                    },
                  },
                  {
                    key: "ready",
                    value: function () {
                      var e,
                        t = this;
                      this.enabled ||
                        ((e = this).manager && e.manager.destroy(),
                        e.elements.displayContainer &&
                          e.elements.displayContainer.destroy(),
                        e.elements.container.remove()),
                        this.startSafetyTimer(12e3, "ready()"),
                        this.managerPromise.then(function () {
                          t.clearSafetyTimer("onAdsManagerLoaded()");
                        }),
                        this.listeners(),
                        this.setupIMA();
                    },
                  },
                  {
                    key: "setupIMA",
                    value: function () {
                      var e = this;
                      (this.elements.container = le("div", {
                        class: this.player.config.classNames.ads,
                      })),
                        this.player.elements.container.appendChild(
                          this.elements.container
                        ),
                        google.ima.settings.setVpaidMode(
                          google.ima.ImaSdkSettings.VpaidMode.ENABLED
                        ),
                        google.ima.settings.setLocale(
                          this.player.config.ads.language
                        ),
                        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                          this.player.config.playsinline
                        ),
                        (this.elements.displayContainer = new google.ima.AdDisplayContainer(
                          this.elements.container,
                          this.player.media
                        )),
                        (this.loader = new google.ima.AdsLoader(
                          this.elements.displayContainer
                        )),
                        this.loader.addEventListener(
                          google.ima.AdsManagerLoadedEvent.Type
                            .ADS_MANAGER_LOADED,
                          function (t) {
                            return e.onAdsManagerLoaded(t);
                          },
                          !1
                        ),
                        this.loader.addEventListener(
                          google.ima.AdErrorEvent.Type.AD_ERROR,
                          function (t) {
                            return e.onAdError(t);
                          },
                          !1
                        ),
                        this.requestAds();
                    },
                  },
                  {
                    key: "requestAds",
                    value: function () {
                      var e = this.player.elements.container;
                      try {
                        var t = new google.ima.AdsRequest();
                        (t.adTagUrl = this.tagUrl),
                          (t.linearAdSlotWidth = e.offsetWidth),
                          (t.linearAdSlotHeight = e.offsetHeight),
                          (t.nonLinearAdSlotWidth = e.offsetWidth),
                          (t.nonLinearAdSlotHeight = e.offsetHeight),
                          (t.forceNonLinearFullSlot = !1),
                          t.setAdWillPlayMuted(!this.player.muted),
                          this.loader.requestAds(t);
                      } catch (e) {
                        this.onAdError(e);
                      }
                    },
                  },
                  {
                    key: "pollCountdown",
                    value: function () {
                      var e = this,
                        t =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0];
                      if (!t)
                        return (
                          clearInterval(this.countdownTimer),
                          void this.elements.container.removeAttribute(
                            "data-badge-text"
                          )
                        );
                      var i = function () {
                        var t = Je(Math.max(e.manager.getRemainingTime(), 0)),
                          i = ""
                            .concat(Ge("advertisement", e.player.config), " - ")
                            .concat(t);
                        e.elements.container.setAttribute("data-badge-text", i);
                      };
                      this.countdownTimer = setInterval(i, 100);
                    },
                  },
                  {
                    key: "onAdsManagerLoaded",
                    value: function (e) {
                      var t = this;
                      if (this.enabled) {
                        var i = new google.ima.AdsRenderingSettings();
                        (i.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                          (i.enablePreloading = !0),
                          (this.manager = e.getAdsManager(this.player, i)),
                          (this.cuePoints = this.manager.getCuePoints()),
                          this.manager.addEventListener(
                            google.ima.AdErrorEvent.Type.AD_ERROR,
                            function (e) {
                              return t.onAdError(e);
                            }
                          ),
                          Object.keys(google.ima.AdEvent.Type).forEach(
                            function (e) {
                              t.manager.addEventListener(
                                google.ima.AdEvent.Type[e],
                                function (e) {
                                  return t.onAdEvent(e);
                                }
                              );
                            }
                          ),
                          this.trigger("loaded");
                      }
                    },
                  },
                  {
                    key: "addCuePoints",
                    value: function () {
                      var e = this;
                      ee(this.cuePoints) ||
                        this.cuePoints.forEach(function (t) {
                          if (0 !== t && -1 !== t && t < e.player.duration) {
                            var i = e.player.elements.progress;
                            if (U(i)) {
                              var n = (100 / e.player.duration) * t,
                                s = le("span", {
                                  class: e.player.config.classNames.cues,
                                });
                              (s.style.left = "".concat(n.toString(), "%")),
                                i.appendChild(s);
                            }
                          }
                        });
                    },
                  },
                  {
                    key: "onAdEvent",
                    value: function (e) {
                      var t = this,
                        i = this.player.elements.container,
                        n = e.getAd(),
                        s = e.getAdData();
                      switch (
                        ((function (e) {
                          Ae.call(
                            t.player,
                            t.player.media,
                            "ads".concat(e.replace(/_/g, "").toLowerCase())
                          );
                        })(e.type),
                        e.type)
                      ) {
                        case google.ima.AdEvent.Type.LOADED:
                          this.trigger("loaded"),
                            this.pollCountdown(!0),
                            n.isLinear() ||
                              ((n.width = i.offsetWidth),
                              (n.height = i.offsetHeight));
                          break;
                        case google.ima.AdEvent.Type.STARTED:
                          this.manager.setVolume(this.player.volume);
                          break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                          this.player.ended
                            ? this.loadAds()
                            : this.loader.contentComplete();
                          break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                          this.pauseContent();
                          break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                          this.pollCountdown(), this.resumeContent();
                          break;
                        case google.ima.AdEvent.Type.LOG:
                          s.adError &&
                            this.player.debug.warn(
                              "Non-fatal ad error: ".concat(
                                s.adError.getMessage()
                              )
                            );
                      }
                    },
                  },
                  {
                    key: "onAdError",
                    value: function (e) {
                      this.cancel(), this.player.debug.warn("Ads error", e);
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var e,
                        t = this,
                        i = this.player.elements.container;
                      this.player.on("canplay", function () {
                        t.addCuePoints();
                      }),
                        this.player.on("ended", function () {
                          t.loader.contentComplete();
                        }),
                        this.player.on("timeupdate", function () {
                          e = t.player.currentTime;
                        }),
                        this.player.on("seeked", function () {
                          var i = t.player.currentTime;
                          ee(t.cuePoints) ||
                            t.cuePoints.forEach(function (n, s) {
                              e < n &&
                                n < i &&
                                (t.manager.discardAdBreak(),
                                t.cuePoints.splice(s, 1));
                            });
                        }),
                        window.addEventListener("resize", function () {
                          t.manager &&
                            t.manager.resize(
                              i.offsetWidth,
                              i.offsetHeight,
                              google.ima.ViewMode.NORMAL
                            );
                        });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var e = this,
                        t = this.player.elements.container;
                      this.managerPromise || this.resumeContent(),
                        this.managerPromise
                          .then(function () {
                            e.manager.setVolume(e.player.volume),
                              e.elements.displayContainer.initialize();
                            try {
                              e.initialized ||
                                (e.manager.init(
                                  t.offsetWidth,
                                  t.offsetHeight,
                                  google.ima.ViewMode.NORMAL
                                ),
                                e.manager.start()),
                                (e.initialized = !0);
                            } catch (t) {
                              e.onAdError(t);
                            }
                          })
                          .catch(function () {});
                    },
                  },
                  {
                    key: "resumeContent",
                    value: function () {
                      (this.elements.container.style.zIndex = ""),
                        (this.playing = !1),
                        Ie(this.player.media.play());
                    },
                  },
                  {
                    key: "pauseContent",
                    value: function () {
                      (this.elements.container.style.zIndex = 3),
                        (this.playing = !0),
                        this.player.media.pause();
                    },
                  },
                  {
                    key: "cancel",
                    value: function () {
                      this.initialized && this.resumeContent(),
                        this.trigger("error"),
                        this.loadAds();
                    },
                  },
                  {
                    key: "loadAds",
                    value: function () {
                      var e = this;
                      this.managerPromise
                        .then(function () {
                          e.manager && e.manager.destroy(),
                            (e.managerPromise = new Promise(function (t) {
                              e.on("loaded", t), e.player.debug.log(e.manager);
                            })),
                            (e.initialized = !1),
                            e.requestAds();
                        })
                        .catch(function () {});
                    },
                  },
                  {
                    key: "trigger",
                    value: function (e) {
                      for (
                        var t = this,
                          i = arguments.length,
                          n = new Array(i > 1 ? i - 1 : 0),
                          s = 1;
                        s < i;
                        s++
                      )
                        n[s - 1] = arguments[s];
                      var a = this.events[e];
                      Y(a) &&
                        a.forEach(function (e) {
                          W(e) && e.apply(t, n);
                        });
                    },
                  },
                  {
                    key: "on",
                    value: function (e, t) {
                      return (
                        Y(this.events[e]) || (this.events[e] = []),
                        this.events[e].push(t),
                        this
                      );
                    },
                  },
                  {
                    key: "startSafetyTimer",
                    value: function (e, t) {
                      var i = this;
                      this.player.debug.log(
                        "Safety timer invoked from: ".concat(t)
                      ),
                        (this.safetyTimer = setTimeout(function () {
                          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
                        }, e));
                    },
                  },
                  {
                    key: "clearSafetyTimer",
                    value: function (e) {
                      F(this.safetyTimer) ||
                        (this.player.debug.log(
                          "Safety timer cleared from: ".concat(e)
                        ),
                        clearTimeout(this.safetyTimer),
                        (this.safetyTimer = null));
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      var e = this.config;
                      return (
                        this.player.isHTML5 &&
                        this.player.isVideo &&
                        e.enabled &&
                        (!ee(e.publisherId) || Z(e.tagUrl))
                      );
                    },
                  },
                  {
                    key: "tagUrl",
                    get: function () {
                      var e = this.config;
                      if (Z(e.tagUrl)) return e.tagUrl;
                      var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId,
                      };
                      return ""
                        .concat(
                          "https://go.aniview.com/api/adserver6/vast/",
                          "?"
                        )
                        .concat(tt(t));
                    },
                  },
                ]),
                t
              );
            })(),
            Et = function (e, t) {
              var i = {};
              return (
                e > t.width / t.height
                  ? ((i.width = t.width), (i.height = (1 / e) * t.width))
                  : ((i.height = t.height), (i.width = e * t.height)),
                i
              );
            },
            St = (function () {
              function t(i) {
                e(this, t),
                  (this.player = i),
                  (this.thumbnails = []),
                  (this.loaded = !1),
                  (this.lastMouseMoveTime = Date.now()),
                  (this.mouseDown = !1),
                  (this.loadedImages = []),
                  (this.elements = { thumb: {}, scrubbing: {} }),
                  this.load();
              }
              return (
                n(t, [
                  {
                    key: "load",
                    value: function () {
                      var e = this;
                      this.player.elements.display.seekTooltip &&
                        (this.player.elements.display.seekTooltip.hidden = this.enabled),
                        this.enabled &&
                          this.getThumbnails().then(function () {
                            e.enabled &&
                              (e.render(),
                              e.determineContainerAutoSizing(),
                              (e.loaded = !0));
                          });
                    },
                  },
                  {
                    key: "getThumbnails",
                    value: function () {
                      var e = this;
                      return new Promise(function (t) {
                        var i = e.player.config.previewThumbnails.src;
                        if (ee(i))
                          throw new Error(
                            "Missing previewThumbnails.src config attribute"
                          );
                        var n = function () {
                          e.thumbnails.sort(function (e, t) {
                            return e.height - t.height;
                          }),
                            e.player.debug.log(
                              "Preview thumbnails",
                              e.thumbnails
                            ),
                            t();
                        };
                        if (W(i))
                          i(function (t) {
                            (e.thumbnails = t), n();
                          });
                        else {
                          var s = (_(i) ? [i] : i).map(function (t) {
                            return e.getThumbnail(t);
                          });
                          Promise.all(s).then(n);
                        }
                      });
                    },
                  },
                  {
                    key: "getThumbnail",
                    value: function (e) {
                      var t = this;
                      return new Promise(function (i) {
                        Ye(e).then(function (n) {
                          var s,
                            a,
                            r = {
                              frames:
                                ((s = n),
                                (a = []),
                                s
                                  .split(/\r\n\r\n|\n\n|\r\r/)
                                  .forEach(function (e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach(function (e) {
                                      if (V(t.startTime)) {
                                        if (!ee(e.trim()) && ee(t.text)) {
                                          var i = e.trim().split("#xywh="),
                                            n = o(i, 1);
                                          if (((t.text = n[0]), i[1])) {
                                            var s = o(i[1].split(","), 4);
                                            (t.x = s[0]),
                                              (t.y = s[1]),
                                              (t.w = s[2]),
                                              (t.h = s[3]);
                                          }
                                        }
                                      } else {
                                        var a = e.match(
                                          /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                        );
                                        a &&
                                          ((t.startTime =
                                            60 * Number(a[1] || 0) * 60 +
                                            60 * Number(a[2]) +
                                            Number(a[3]) +
                                            Number("0.".concat(a[4]))),
                                          (t.endTime =
                                            60 * Number(a[6] || 0) * 60 +
                                            60 * Number(a[7]) +
                                            Number(a[8]) +
                                            Number("0.".concat(a[9]))));
                                      }
                                    }),
                                      t.text && a.push(t);
                                  }),
                                a),
                              height: null,
                              urlPrefix: "",
                            };
                          r.frames[0].text.startsWith("/") ||
                            r.frames[0].text.startsWith("http://") ||
                            r.frames[0].text.startsWith("https://") ||
                            (r.urlPrefix = e.substring(
                              0,
                              e.lastIndexOf("/") + 1
                            ));
                          var l = new Image();
                          (l.onload = function () {
                            (r.height = l.naturalHeight),
                              (r.width = l.naturalWidth),
                              t.thumbnails.push(r),
                              i();
                          }),
                            (l.src = r.urlPrefix + r.frames[0].text);
                        });
                      });
                    },
                  },
                  {
                    key: "startMove",
                    value: function (e) {
                      if (
                        this.loaded &&
                        K(e) &&
                        ["touchmove", "mousemove"].includes(e.type) &&
                        this.player.media.duration
                      ) {
                        if ("touchmove" === e.type)
                          this.seekTime =
                            this.player.media.duration *
                            (this.player.elements.inputs.seek.value / 100);
                        else {
                          var t = this.player.elements.progress.getBoundingClientRect(),
                            i = (100 / t.width) * (e.pageX - t.left);
                          (this.seekTime =
                            this.player.media.duration * (i / 100)),
                            this.seekTime < 0 && (this.seekTime = 0),
                            this.seekTime > this.player.media.duration - 1 &&
                              (this.seekTime = this.player.media.duration - 1),
                            (this.mousePosX = e.pageX),
                            (this.elements.thumb.time.innerText = Je(
                              this.seekTime
                            ));
                        }
                        this.showImageAtCurrentTime();
                      }
                    },
                  },
                  {
                    key: "endMove",
                    value: function () {
                      this.toggleThumbContainer(!1, !0);
                    },
                  },
                  {
                    key: "startScrubbing",
                    value: function (e) {
                      (F(e.button) || !1 === e.button || 0 === e.button) &&
                        ((this.mouseDown = !0),
                        this.player.media.duration &&
                          (this.toggleScrubbingContainer(!0),
                          this.toggleThumbContainer(!1, !0),
                          this.showImageAtCurrentTime()));
                    },
                  },
                  {
                    key: "endScrubbing",
                    value: function () {
                      var e = this;
                      (this.mouseDown = !1),
                        Math.ceil(this.lastTime) ===
                        Math.ceil(this.player.media.currentTime)
                          ? this.toggleScrubbingContainer(!1)
                          : Pe.call(
                              this.player,
                              this.player.media,
                              "timeupdate",
                              function () {
                                e.mouseDown || e.toggleScrubbingContainer(!1);
                              }
                            );
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var e = this;
                      this.player.on("play", function () {
                        e.toggleThumbContainer(!1, !0);
                      }),
                        this.player.on("seeked", function () {
                          e.toggleThumbContainer(!1);
                        }),
                        this.player.on("timeupdate", function () {
                          e.lastTime = e.player.media.currentTime;
                        });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      (this.elements.thumb.container = le("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .thumbContainer,
                      })),
                        (this.elements.thumb.imageContainer = le("div", {
                          class: this.player.config.classNames.previewThumbnails
                            .imageContainer,
                        })),
                        this.elements.thumb.container.appendChild(
                          this.elements.thumb.imageContainer
                        );
                      var e = le("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .timeContainer,
                      });
                      (this.elements.thumb.time = le("span", {}, "00:00")),
                        e.appendChild(this.elements.thumb.time),
                        this.elements.thumb.container.appendChild(e),
                        U(this.player.elements.progress) &&
                          this.player.elements.progress.appendChild(
                            this.elements.thumb.container
                          ),
                        (this.elements.scrubbing.container = le("div", {
                          class: this.player.config.classNames.previewThumbnails
                            .scrubbingContainer,
                        })),
                        this.player.elements.wrapper.appendChild(
                          this.elements.scrubbing.container
                        );
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.elements.thumb.container &&
                        this.elements.thumb.container.remove(),
                        this.elements.scrubbing.container &&
                          this.elements.scrubbing.container.remove();
                    },
                  },
                  {
                    key: "showImageAtCurrentTime",
                    value: function () {
                      var e = this;
                      this.mouseDown
                        ? this.setScrubbingContainerSize()
                        : this.setThumbContainerSizeAndPos();
                      var t = this.thumbnails[0].frames.findIndex(function (t) {
                          return (
                            e.seekTime >= t.startTime && e.seekTime <= t.endTime
                          );
                        }),
                        i = t >= 0,
                        n = 0;
                      this.mouseDown || this.toggleThumbContainer(i),
                        i &&
                          (this.thumbnails.forEach(function (i, s) {
                            e.loadedImages.includes(i.frames[t].text) &&
                              (n = s);
                          }),
                          t !== this.showingThumb &&
                            ((this.showingThumb = t), this.loadImage(n)));
                    },
                  },
                  {
                    key: "loadImage",
                    value: function () {
                      var e = this,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        i = this.showingThumb,
                        n = this.thumbnails[t],
                        s = n.urlPrefix,
                        a = n.frames[i],
                        r = n.frames[i].text,
                        o = s + r;
                      if (
                        this.currentImageElement &&
                        this.currentImageElement.dataset.filename === r
                      )
                        this.showImage(
                          this.currentImageElement,
                          a,
                          t,
                          i,
                          r,
                          !1
                        ),
                          (this.currentImageElement.dataset.index = i),
                          this.removeOldImages(this.currentImageElement);
                      else {
                        this.loadingImage &&
                          this.usingSprites &&
                          (this.loadingImage.onload = null);
                        var l = new Image();
                        (l.src = o),
                          (l.dataset.index = i),
                          (l.dataset.filename = r),
                          (this.showingThumbFilename = r),
                          this.player.debug.log("Loading image: ".concat(o)),
                          (l.onload = function () {
                            return e.showImage(l, a, t, i, r, !0);
                          }),
                          (this.loadingImage = l),
                          this.removeOldImages(l);
                      }
                    },
                  },
                  {
                    key: "showImage",
                    value: function (e, t, i, n, s) {
                      var a =
                        !(arguments.length > 5 && void 0 !== arguments[5]) ||
                        arguments[5];
                      this.player.debug.log(
                        "Showing thumb: "
                          .concat(s, ". num: ")
                          .concat(n, ". qual: ")
                          .concat(i, ". newimg: ")
                          .concat(a)
                      ),
                        this.setImageSizeAndOffset(e, t),
                        a &&
                          (this.currentImageContainer.appendChild(e),
                          (this.currentImageElement = e),
                          this.loadedImages.includes(s) ||
                            this.loadedImages.push(s)),
                        this.preloadNearby(n, !0)
                          .then(this.preloadNearby(n, !1))
                          .then(this.getHigherQuality(i, e, t, s));
                    },
                  },
                  {
                    key: "removeOldImages",
                    value: function (e) {
                      var t = this;
                      Array.from(this.currentImageContainer.children).forEach(
                        function (i) {
                          if ("img" === i.tagName.toLowerCase()) {
                            var n = t.usingSprites ? 500 : 1e3;
                            if (
                              i.dataset.index !== e.dataset.index &&
                              !i.dataset.deleting
                            ) {
                              i.dataset.deleting = !0;
                              var s = t.currentImageContainer;
                              setTimeout(function () {
                                s.removeChild(i),
                                  t.player.debug.log(
                                    "Removing thumb: ".concat(
                                      i.dataset.filename
                                    )
                                  );
                              }, n);
                            }
                          }
                        }
                      );
                    },
                  },
                  {
                    key: "preloadNearby",
                    value: function (e) {
                      var t = this,
                        i =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                      return new Promise(function (n) {
                        setTimeout(function () {
                          var s = t.thumbnails[0].frames[e].text;
                          if (t.showingThumbFilename === s) {
                            var a;
                            a = i
                              ? t.thumbnails[0].frames.slice(e)
                              : t.thumbnails[0].frames.slice(0, e).reverse();
                            var r = !1;
                            a.forEach(function (e) {
                              var i = e.text;
                              if (i !== s && !t.loadedImages.includes(i)) {
                                (r = !0),
                                  t.player.debug.log(
                                    "Preloading thumb filename: ".concat(i)
                                  );
                                var a = t.thumbnails[0].urlPrefix + i,
                                  o = new Image();
                                (o.src = a),
                                  (o.onload = function () {
                                    t.player.debug.log(
                                      "Preloaded thumb filename: ".concat(i)
                                    ),
                                      t.loadedImages.includes(i) ||
                                        t.loadedImages.push(i),
                                      n();
                                  });
                              }
                            }),
                              r || n();
                          }
                        }, 300);
                      });
                    },
                  },
                  {
                    key: "getHigherQuality",
                    value: function (e, t, i, n) {
                      var s = this;
                      if (e < this.thumbnails.length - 1) {
                        var a = t.naturalHeight;
                        this.usingSprites && (a = i.h),
                          a < this.thumbContainerHeight &&
                            setTimeout(function () {
                              s.showingThumbFilename === n &&
                                (s.player.debug.log(
                                  "Showing higher quality thumb for: ".concat(n)
                                ),
                                s.loadImage(e + 1));
                            }, 300);
                      }
                    },
                  },
                  {
                    key: "toggleThumbContainer",
                    value: function () {
                      var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        i = this.player.config.classNames.previewThumbnails
                          .thumbContainerShown;
                      this.elements.thumb.container.classList.toggle(i, e),
                        !e &&
                          t &&
                          ((this.showingThumb = null),
                          (this.showingThumbFilename = null));
                    },
                  },
                  {
                    key: "toggleScrubbingContainer",
                    value: function () {
                      var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        t = this.player.config.classNames.previewThumbnails
                          .scrubbingContainerShown;
                      this.elements.scrubbing.container.classList.toggle(t, e),
                        e ||
                          ((this.showingThumb = null),
                          (this.showingThumbFilename = null));
                    },
                  },
                  {
                    key: "determineContainerAutoSizing",
                    value: function () {
                      (this.elements.thumb.imageContainer.clientHeight > 20 ||
                        this.elements.thumb.imageContainer.clientWidth > 20) &&
                        (this.sizeSpecifiedInCSS = !0);
                    },
                  },
                  {
                    key: "setThumbContainerSizeAndPos",
                    value: function () {
                      if (this.sizeSpecifiedInCSS) {
                        if (
                          this.elements.thumb.imageContainer.clientHeight >
                            20 &&
                          this.elements.thumb.imageContainer.clientWidth < 20
                        ) {
                          var e = Math.floor(
                            this.elements.thumb.imageContainer.clientHeight *
                              this.thumbAspectRatio
                          );
                          this.elements.thumb.imageContainer.style.width = "".concat(
                            e,
                            "px"
                          );
                        } else if (
                          this.elements.thumb.imageContainer.clientHeight <
                            20 &&
                          this.elements.thumb.imageContainer.clientWidth > 20
                        ) {
                          var t = Math.floor(
                            this.elements.thumb.imageContainer.clientWidth /
                              this.thumbAspectRatio
                          );
                          this.elements.thumb.imageContainer.style.height = "".concat(
                            t,
                            "px"
                          );
                        }
                      } else {
                        var i = Math.floor(
                          this.thumbContainerHeight * this.thumbAspectRatio
                        );
                        (this.elements.thumb.imageContainer.style.height = "".concat(
                          this.thumbContainerHeight,
                          "px"
                        )),
                          (this.elements.thumb.imageContainer.style.width = "".concat(
                            i,
                            "px"
                          ));
                      }
                      this.setThumbContainerPos();
                    },
                  },
                  {
                    key: "setThumbContainerPos",
                    value: function () {
                      var e = this.player.elements.progress.getBoundingClientRect(),
                        t = this.player.elements.container.getBoundingClientRect(),
                        i = this.elements.thumb.container,
                        n = t.left - e.left + 10,
                        s = t.right - e.left - i.clientWidth - 10,
                        a = this.mousePosX - e.left - i.clientWidth / 2;
                      a < n && (a = n),
                        a > s && (a = s),
                        (i.style.left = "".concat(a, "px"));
                    },
                  },
                  {
                    key: "setScrubbingContainerSize",
                    value: function () {
                      var e = Et(this.thumbAspectRatio, {
                          width: this.player.media.clientWidth,
                          height: this.player.media.clientHeight,
                        }),
                        t = e.width,
                        i = e.height;
                      (this.elements.scrubbing.container.style.width = "".concat(
                        t,
                        "px"
                      )),
                        (this.elements.scrubbing.container.style.height = "".concat(
                          i,
                          "px"
                        ));
                    },
                  },
                  {
                    key: "setImageSizeAndOffset",
                    value: function (e, t) {
                      if (this.usingSprites) {
                        var i = this.thumbContainerHeight / t.h;
                        (e.style.height = "".concat(e.naturalHeight * i, "px")),
                          (e.style.width = "".concat(e.naturalWidth * i, "px")),
                          (e.style.left = "-".concat(t.x * i, "px")),
                          (e.style.top = "-".concat(t.y * i, "px"));
                      }
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      return (
                        this.player.isHTML5 &&
                        this.player.isVideo &&
                        this.player.config.previewThumbnails.enabled
                      );
                    },
                  },
                  {
                    key: "currentImageContainer",
                    get: function () {
                      return this.mouseDown
                        ? this.elements.scrubbing.container
                        : this.elements.thumb.imageContainer;
                    },
                  },
                  {
                    key: "usingSprites",
                    get: function () {
                      return Object.keys(this.thumbnails[0].frames[0]).includes(
                        "w"
                      );
                    },
                  },
                  {
                    key: "thumbAspectRatio",
                    get: function () {
                      return this.usingSprites
                        ? this.thumbnails[0].frames[0].w /
                            this.thumbnails[0].frames[0].h
                        : this.thumbnails[0].width / this.thumbnails[0].height;
                    },
                  },
                  {
                    key: "thumbContainerHeight",
                    get: function () {
                      return this.mouseDown
                        ? Et(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight,
                          }).height
                        : this.sizeSpecifiedInCSS
                        ? this.elements.thumb.imageContainer.clientHeight
                        : Math.floor(
                            this.player.media.clientWidth /
                              this.thumbAspectRatio /
                              4
                          );
                    },
                  },
                  {
                    key: "currentImageElement",
                    get: function () {
                      return this.mouseDown
                        ? this.currentScrubbingImageElement
                        : this.currentThumbnailImageElement;
                    },
                    set: function (e) {
                      this.mouseDown
                        ? (this.currentScrubbingImageElement = e)
                        : (this.currentThumbnailImageElement = e);
                    },
                  },
                ]),
                t
              );
            })(),
            xt = {
              insertElements: function (e, t) {
                var i = this;
                _(t)
                  ? ce(e, this.media, { src: t })
                  : Y(t) &&
                    t.forEach(function (t) {
                      ce(e, i.media, t);
                    });
              },
              change: function (e) {
                var t = this;
                se(e, "sources.length")
                  ? (He.cancelRequests.call(this),
                    this.destroy.call(
                      this,
                      function () {
                        (t.options.quality = []),
                          de(t.media),
                          (t.media = null),
                          U(t.elements.container) &&
                            t.elements.container.removeAttribute("class");
                        var i = e.sources,
                          n = e.type,
                          s = o(i, 1)[0],
                          a = s.provider,
                          r = void 0 === a ? at.html5 : a,
                          l = s.src,
                          c = "html5" === r ? n : "div",
                          d = "html5" === r ? {} : { src: l };
                        Object.assign(t, {
                          provider: r,
                          type: n,
                          supported: Se.check(n, r, t.config.playsinline),
                          media: le(c, d),
                        }),
                          t.elements.container.appendChild(t.media),
                          G(e.autoplay) && (t.config.autoplay = e.autoplay),
                          t.isHTML5 &&
                            (t.config.crossorigin &&
                              t.media.setAttribute("crossorigin", ""),
                            t.config.autoplay &&
                              t.media.setAttribute("autoplay", ""),
                            ee(e.poster) || (t.poster = e.poster),
                            t.config.loop.active &&
                              t.media.setAttribute("loop", ""),
                            t.config.muted && t.media.setAttribute("muted", ""),
                            t.config.playsinline &&
                              t.media.setAttribute("playsinline", "")),
                          dt.addStyleHook.call(t),
                          t.isHTML5 && xt.insertElements.call(t, "source", i),
                          (t.config.title = e.title),
                          wt.setup.call(t),
                          t.isHTML5 &&
                            Object.keys(e).includes("tracks") &&
                            xt.insertElements.call(t, "track", e.tracks),
                          (t.isHTML5 || (t.isEmbed && !t.supported.ui)) &&
                            dt.build.call(t),
                          t.isHTML5 && t.media.load(),
                          ee(e.previewThumbnails) ||
                            (Object.assign(
                              t.config.previewThumbnails,
                              e.previewThumbnails
                            ),
                            t.previewThumbnails &&
                              t.previewThumbnails.loaded &&
                              (t.previewThumbnails.destroy(),
                              (t.previewThumbnails = null)),
                            t.config.previewThumbnails.enabled &&
                              (t.previewThumbnails = new St(t))),
                          t.fullscreen.update();
                      },
                      !0
                    ))
                  : this.debug.warn("Invalid source format");
              },
            },
            Ct = (function () {
              function t(i, n) {
                var s = this;
                if (
                  (e(this, t),
                  (this.timers = {}),
                  (this.ready = !1),
                  (this.loading = !1),
                  (this.failed = !1),
                  (this.touch = Se.touch),
                  (this.media = i),
                  _(this.media) &&
                    (this.media = document.querySelectorAll(this.media)),
                  ((window.jQuery && this.media instanceof jQuery) ||
                    X(this.media) ||
                    Y(this.media)) &&
                    (this.media = this.media[0]),
                  (this.config = ae(
                    {},
                    nt,
                    t.defaults,
                    n || {},
                    (function () {
                      try {
                        return JSON.parse(
                          s.media.getAttribute("data-plyr-config")
                        );
                      } catch (e) {
                        return {};
                      }
                    })()
                  )),
                  (this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                      popup: null,
                      menu: null,
                      panels: {},
                      buttons: {},
                    },
                  }),
                  (this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap(),
                  }),
                  (this.fullscreen = { active: !1 }),
                  (this.options = { speed: [], quality: [] }),
                  (this.debug = new ot(this.config.debug)),
                  this.debug.log("Config", this.config),
                  this.debug.log("Support", Se),
                  !F(this.media) && U(this.media))
                )
                  if (this.media.plyr) this.debug.warn("Target already setup");
                  else if (this.config.enabled)
                    if (Se.check().api) {
                      var a = this.media.cloneNode(!0);
                      (a.autoplay = !1), (this.elements.original = a);
                      var r = this.media.tagName.toLowerCase(),
                        o = null,
                        l = null;
                      switch (r) {
                        case "div":
                          if (
                            ((o = this.media.querySelector("iframe")), U(o))
                          ) {
                            if (
                              ((l = et(o.getAttribute("src"))),
                              (this.provider = (function (e) {
                                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                                  e
                                )
                                  ? at.youtube
                                  : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                      e
                                    )
                                  ? at.vimeo
                                  : null;
                              })(l.toString())),
                              (this.elements.container = this.media),
                              (this.media = o),
                              (this.elements.container.className = ""),
                              l.search.length)
                            ) {
                              var c = ["1", "true"];
                              c.includes(l.searchParams.get("autoplay")) &&
                                (this.config.autoplay = !0),
                                c.includes(l.searchParams.get("loop")) &&
                                  (this.config.loop.active = !0),
                                this.isYouTube
                                  ? ((this.config.playsinline = c.includes(
                                      l.searchParams.get("playsinline")
                                    )),
                                    (this.config.youtube.hl = l.searchParams.get(
                                      "hl"
                                    )))
                                  : (this.config.playsinline = !0);
                            }
                          } else
                            (this.provider = this.media.getAttribute(
                              this.config.attributes.embed.provider
                            )),
                              this.media.removeAttribute(
                                this.config.attributes.embed.provider
                              );
                          if (
                            ee(this.provider) ||
                            !Object.keys(at).includes(this.provider)
                          )
                            return void this.debug.error(
                              "Setup failed: Invalid provider"
                            );
                          this.type = "video";
                          break;
                        case "video":
                        case "audio":
                          (this.type = r),
                            (this.provider = at.html5),
                            this.media.hasAttribute("crossorigin") &&
                              (this.config.crossorigin = !0),
                            this.media.hasAttribute("autoplay") &&
                              (this.config.autoplay = !0),
                            (this.media.hasAttribute("playsinline") ||
                              this.media.hasAttribute("webkit-playsinline")) &&
                              (this.config.playsinline = !0),
                            this.media.hasAttribute("muted") &&
                              (this.config.muted = !0),
                            this.media.hasAttribute("loop") &&
                              (this.config.loop.active = !0);
                          break;
                        default:
                          return void this.debug.error(
                            "Setup failed: unsupported type"
                          );
                      }
                      (this.supported = Se.check(
                        this.type,
                        this.provider,
                        this.config.playsinline
                      )),
                        this.supported.api
                          ? ((this.eventListeners = []),
                            (this.listeners = new ut(this)),
                            (this.storage = new We(this)),
                            (this.media.plyr = this),
                            U(this.elements.container) ||
                              ((this.elements.container = le("div", {
                                tabindex: 0,
                              })),
                              re(this.media, this.elements.container)),
                            dt.migrateStyles.call(this),
                            dt.addStyleHook.call(this),
                            wt.setup.call(this),
                            this.config.debug &&
                              ke.call(
                                this,
                                this.elements.container,
                                this.config.events.join(" "),
                                function (e) {
                                  s.debug.log("event: ".concat(e.type));
                                }
                              ),
                            (this.fullscreen = new lt(this)),
                            (this.isHTML5 ||
                              (this.isEmbed && !this.supported.ui)) &&
                              dt.build.call(this),
                            this.listeners.container(),
                            this.listeners.global(),
                            this.config.ads.enabled &&
                              (this.ads = new Tt(this)),
                            this.isHTML5 &&
                              this.config.autoplay &&
                              setTimeout(function () {
                                return Ie(s.play());
                              }, 10),
                            (this.lastSeekTime = 0),
                            this.config.previewThumbnails.enabled &&
                              (this.previewThumbnails = new St(this)))
                          : this.debug.error("Setup failed: no support");
                    } else this.debug.error("Setup failed: no support");
                  else this.debug.error("Setup failed: disabled by config");
                else
                  this.debug.error("Setup failed: no suitable element passed");
              }
              return (
                n(
                  t,
                  [
                    {
                      key: "play",
                      value: function () {
                        var e = this;
                        return W(this.media.play)
                          ? (this.ads &&
                              this.ads.enabled &&
                              this.ads.managerPromise
                                .then(function () {
                                  return e.ads.play();
                                })
                                .catch(function () {
                                  return Ie(e.media.play());
                                }),
                            this.media.play())
                          : null;
                      },
                    },
                    {
                      key: "pause",
                      value: function () {
                        return this.playing && W(this.media.pause)
                          ? this.media.pause()
                          : null;
                      },
                    },
                    {
                      key: "togglePlay",
                      value: function (e) {
                        return (G(e) ? e : !this.playing)
                          ? this.play()
                          : this.pause();
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.isHTML5
                          ? (this.pause(), this.restart())
                          : W(this.media.stop) && this.media.stop();
                      },
                    },
                    {
                      key: "restart",
                      value: function () {
                        this.currentTime = 0;
                      },
                    },
                    {
                      key: "rewind",
                      value: function (e) {
                        this.currentTime -= V(e) ? e : this.config.seekTime;
                      },
                    },
                    {
                      key: "forward",
                      value: function (e) {
                        this.currentTime += V(e) ? e : this.config.seekTime;
                      },
                    },
                    {
                      key: "increaseVolume",
                      value: function (e) {
                        var t = this.media.muted ? 0 : this.volume;
                        this.volume = t + (V(e) ? e : 0);
                      },
                    },
                    {
                      key: "decreaseVolume",
                      value: function (e) {
                        this.increaseVolume(-e);
                      },
                    },
                    {
                      key: "toggleCaptions",
                      value: function (e) {
                        it.toggle.call(this, e, !1);
                      },
                    },
                    {
                      key: "airplay",
                      value: function () {
                        Se.airplay &&
                          this.media.webkitShowPlaybackTargetPicker();
                      },
                    },
                    {
                      key: "toggleControls",
                      value: function (e) {
                        if (this.supported.ui && !this.isAudio) {
                          var t = ge(
                              this.elements.container,
                              this.config.classNames.hideControls
                            ),
                            i = void 0 === e ? void 0 : !e,
                            n = fe(
                              this.elements.container,
                              this.config.classNames.hideControls,
                              i
                            );
                          if (
                            (n &&
                              Y(this.config.controls) &&
                              this.config.controls.includes("settings") &&
                              !ee(this.config.settings) &&
                              Ze.toggleMenu.call(this, !1),
                            n !== t)
                          ) {
                            var s = n ? "controlshidden" : "controlsshown";
                            Ae.call(this, this.media, s);
                          }
                          return !n;
                        }
                        return !1;
                      },
                    },
                    {
                      key: "on",
                      value: function (e, t) {
                        ke.call(this, this.elements.container, e, t);
                      },
                    },
                    {
                      key: "once",
                      value: function (e, t) {
                        Pe.call(this, this.elements.container, e, t);
                      },
                    },
                    {
                      key: "off",
                      value: function (e, t) {
                        Me(this.elements.container, e, t);
                      },
                    },
                    {
                      key: "destroy",
                      value: function (e) {
                        var t = this,
                          i =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                        if (this.ready) {
                          var n = function () {
                            (document.body.style.overflow = ""),
                              (t.embed = null),
                              i
                                ? (Object.keys(t.elements).length &&
                                    (de(t.elements.buttons.play),
                                    de(t.elements.captions),
                                    de(t.elements.controls),
                                    de(t.elements.wrapper),
                                    (t.elements.buttons.play = null),
                                    (t.elements.captions = null),
                                    (t.elements.controls = null),
                                    (t.elements.wrapper = null)),
                                  W(e) && e())
                                : (Le.call(t),
                                  he(t.elements.original, t.elements.container),
                                  Ae.call(
                                    t,
                                    t.elements.original,
                                    "destroyed",
                                    !0
                                  ),
                                  W(e) && e.call(t.elements.original),
                                  (t.ready = !1),
                                  setTimeout(function () {
                                    (t.elements = null), (t.media = null);
                                  }, 200));
                          };
                          this.stop(),
                            clearTimeout(this.timers.loading),
                            clearTimeout(this.timers.controls),
                            clearTimeout(this.timers.resized),
                            this.isHTML5
                              ? (dt.toggleNativeControls.call(this, !0), n())
                              : this.isYouTube
                              ? (clearInterval(this.timers.buffering),
                                clearInterval(this.timers.playing),
                                null !== this.embed &&
                                  W(this.embed.destroy) &&
                                  this.embed.destroy(),
                                n())
                              : this.isVimeo &&
                                (null !== this.embed &&
                                  this.embed.unload().then(n),
                                setTimeout(n, 200));
                        }
                      },
                    },
                    {
                      key: "supports",
                      value: function (e) {
                        return Se.mime.call(this, e);
                      },
                    },
                    {
                      key: "isHTML5",
                      get: function () {
                        return this.provider === at.html5;
                      },
                    },
                    {
                      key: "isEmbed",
                      get: function () {
                        return this.isYouTube || this.isVimeo;
                      },
                    },
                    {
                      key: "isYouTube",
                      get: function () {
                        return this.provider === at.youtube;
                      },
                    },
                    {
                      key: "isVimeo",
                      get: function () {
                        return this.provider === at.vimeo;
                      },
                    },
                    {
                      key: "isVideo",
                      get: function () {
                        return "video" === this.type;
                      },
                    },
                    {
                      key: "isAudio",
                      get: function () {
                        return "audio" === this.type;
                      },
                    },
                    {
                      key: "playing",
                      get: function () {
                        return Boolean(
                          this.ready && !this.paused && !this.ended
                        );
                      },
                    },
                    {
                      key: "paused",
                      get: function () {
                        return Boolean(this.media.paused);
                      },
                    },
                    {
                      key: "stopped",
                      get: function () {
                        return Boolean(this.paused && 0 === this.currentTime);
                      },
                    },
                    {
                      key: "ended",
                      get: function () {
                        return Boolean(this.media.ended);
                      },
                    },
                    {
                      key: "currentTime",
                      set: function (e) {
                        if (this.duration) {
                          var t = V(e) && e > 0;
                          (this.media.currentTime = t
                            ? Math.min(e, this.duration)
                            : 0),
                            this.debug.log(
                              "Seeking to ".concat(this.currentTime, " seconds")
                            );
                        }
                      },
                      get: function () {
                        return Number(this.media.currentTime);
                      },
                    },
                    {
                      key: "buffered",
                      get: function () {
                        var e = this.media.buffered;
                        return V(e)
                          ? e
                          : e && e.length && this.duration > 0
                          ? e.end(0) / this.duration
                          : 0;
                      },
                    },
                    {
                      key: "seeking",
                      get: function () {
                        return Boolean(this.media.seeking);
                      },
                    },
                    {
                      key: "duration",
                      get: function () {
                        var e = parseFloat(this.config.duration),
                          t = (this.media || {}).duration,
                          i = V(t) && t !== 1 / 0 ? t : 0;
                        return e || i;
                      },
                    },
                    {
                      key: "volume",
                      set: function (e) {
                        var t = e;
                        _(t) && (t = Number(t)),
                          V(t) || (t = this.storage.get("volume")),
                          V(t) || (t = this.config.volume),
                          t > 1 && (t = 1),
                          t < 0 && (t = 0),
                          (this.config.volume = t),
                          (this.media.volume = t),
                          !ee(e) && this.muted && t > 0 && (this.muted = !1);
                      },
                      get: function () {
                        return Number(this.media.volume);
                      },
                    },
                    {
                      key: "muted",
                      set: function (e) {
                        var t = e;
                        G(t) || (t = this.storage.get("muted")),
                          G(t) || (t = this.config.muted),
                          (this.config.muted = t),
                          (this.media.muted = t);
                      },
                      get: function () {
                        return Boolean(this.media.muted);
                      },
                    },
                    {
                      key: "hasAudio",
                      get: function () {
                        return (
                          !this.isHTML5 ||
                          !!this.isAudio ||
                          Boolean(this.media.mozHasAudio) ||
                          Boolean(this.media.webkitAudioDecodedByteCount) ||
                          Boolean(
                            this.media.audioTracks &&
                              this.media.audioTracks.length
                          )
                        );
                      },
                    },
                    {
                      key: "speed",
                      set: function (e) {
                        var t = this,
                          i = null;
                        V(e) && (i = e),
                          V(i) || (i = this.storage.get("speed")),
                          V(i) || (i = this.config.speed.selected);
                        var n = this.minimumSpeed,
                          s = this.maximumSpeed;
                        (i = (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 255;
                          return Math.min(Math.max(e, t), i);
                        })(i, n, s)),
                          (this.config.speed.selected = i),
                          setTimeout(function () {
                            t.media.playbackRate = i;
                          }, 0);
                      },
                      get: function () {
                        return Number(this.media.playbackRate);
                      },
                    },
                    {
                      key: "minimumSpeed",
                      get: function () {
                        return this.isYouTube
                          ? Math.min.apply(Math, l(this.options.speed))
                          : this.isVimeo
                          ? 0.5
                          : 0.0625;
                      },
                    },
                    {
                      key: "maximumSpeed",
                      get: function () {
                        return this.isYouTube
                          ? Math.max.apply(Math, l(this.options.speed))
                          : this.isVimeo
                          ? 2
                          : 16;
                      },
                    },
                    {
                      key: "quality",
                      set: function (e) {
                        var t = this.config.quality,
                          i = this.options.quality;
                        if (i.length) {
                          var n = [
                              !ee(e) && Number(e),
                              this.storage.get("quality"),
                              t.selected,
                              t.default,
                            ].find(V),
                            s = !0;
                          if (!i.includes(n)) {
                            var a = (function (e, t) {
                              return Y(e) && e.length
                                ? e.reduce(function (e, i) {
                                    return Math.abs(i - t) < Math.abs(e - t)
                                      ? i
                                      : e;
                                  })
                                : null;
                            })(i, n);
                            this.debug.warn(
                              "Unsupported quality option: "
                                .concat(n, ", using ")
                                .concat(a, " instead")
                            ),
                              (n = a),
                              (s = !1);
                          }
                          (t.selected = n),
                            (this.media.quality = n),
                            s && this.storage.set({ quality: n });
                        }
                      },
                      get: function () {
                        return this.media.quality;
                      },
                    },
                    {
                      key: "loop",
                      set: function (e) {
                        var t = G(e) ? e : this.config.loop.active;
                        (this.config.loop.active = t), (this.media.loop = t);
                      },
                      get: function () {
                        return Boolean(this.media.loop);
                      },
                    },
                    {
                      key: "source",
                      set: function (e) {
                        xt.change.call(this, e);
                      },
                      get: function () {
                        return this.media.currentSrc;
                      },
                    },
                    {
                      key: "download",
                      get: function () {
                        var e = this.config.urls.download;
                        return Z(e) ? e : this.source;
                      },
                      set: function (e) {
                        Z(e) &&
                          ((this.config.urls.download = e),
                          Ze.setDownloadUrl.call(this));
                      },
                    },
                    {
                      key: "poster",
                      set: function (e) {
                        this.isVideo
                          ? dt.setPoster.call(this, e, !1).catch(function () {})
                          : this.debug.warn("Poster can only be set for video");
                      },
                      get: function () {
                        return this.isVideo
                          ? this.media.getAttribute("poster") ||
                              this.media.getAttribute("data-poster")
                          : null;
                      },
                    },
                    {
                      key: "ratio",
                      get: function () {
                        if (!this.isVideo) return null;
                        var e = ze(Ne.call(this));
                        return Y(e) ? e.join(":") : e;
                      },
                      set: function (e) {
                        this.isVideo
                          ? _(e) && Oe(e)
                            ? ((this.config.ratio = e), De.call(this))
                            : this.debug.error(
                                "Invalid aspect ratio specified (".concat(
                                  e,
                                  ")"
                                )
                              )
                          : this.debug.warn(
                              "Aspect ratio can only be set for video"
                            );
                      },
                    },
                    {
                      key: "autoplay",
                      set: function (e) {
                        var t = G(e) ? e : this.config.autoplay;
                        this.config.autoplay = t;
                      },
                      get: function () {
                        return Boolean(this.config.autoplay);
                      },
                    },
                    {
                      key: "currentTrack",
                      set: function (e) {
                        it.set.call(this, e, !1);
                      },
                      get: function () {
                        var e = this.captions,
                          t = e.toggled,
                          i = e.currentTrack;
                        return t ? i : -1;
                      },
                    },
                    {
                      key: "language",
                      set: function (e) {
                        it.setLanguage.call(this, e, !1);
                      },
                      get: function () {
                        return (it.getCurrentTrack.call(this) || {}).language;
                      },
                    },
                    {
                      key: "pip",
                      set: function (e) {
                        if (Se.pip) {
                          var t = G(e) ? e : !this.pip;
                          W(this.media.webkitSetPresentationMode) &&
                            this.media.webkitSetPresentationMode(
                              t ? st : "inline"
                            ),
                            W(this.media.requestPictureInPicture) &&
                              (!this.pip && t
                                ? this.media.requestPictureInPicture()
                                : this.pip &&
                                  !t &&
                                  document.exitPictureInPicture());
                        }
                      },
                      get: function () {
                        return Se.pip
                          ? ee(this.media.webkitPresentationMode)
                            ? this.media === document.pictureInPictureElement
                            : this.media.webkitPresentationMode === st
                          : null;
                      },
                    },
                  ],
                  [
                    {
                      key: "supported",
                      value: function (e, t, i) {
                        return Se.check(e, t, i);
                      },
                    },
                    {
                      key: "loadSprite",
                      value: function (e, t) {
                        return Xe(e, t);
                      },
                    },
                    {
                      key: "setup",
                      value: function (e) {
                        var i =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = null;
                        return (
                          _(e)
                            ? (n = Array.from(document.querySelectorAll(e)))
                            : X(e)
                            ? (n = Array.from(e))
                            : Y(e) && (n = e.filter(U)),
                          ee(n)
                            ? null
                            : n.map(function (e) {
                                return new t(e, i);
                              })
                        );
                      },
                    },
                  ]
                ),
                t
              );
            })();
          return (
            (Ct.defaults = ((yt = nt), JSON.parse(JSON.stringify(yt)))), Ct
          );
        })());
    }.call(this, i(2)));
  },
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {},
  function (e, t, i) {
    "use strict";
    var n = i(0),
      s = i(3),
      a = i(17),
      r = i(9);
    function o(e) {
      var t = new a(e),
        i = s(a.prototype.request, t);
      return n.extend(i, a.prototype, t), n.extend(i, t), i;
    }
    var l = o(i(6));
    (l.Axios = a),
      (l.create = function (e) {
        return o(r(l.defaults, e));
      }),
      (l.Cancel = i(10)),
      (l.CancelToken = i(31)),
      (l.isCancel = i(5)),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = i(32)),
      (e.exports = l),
      (e.exports.default = l);
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      s = i(4),
      a = i(18),
      r = i(19),
      o = i(9);
    function l(e) {
      (this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() });
    }
    (l.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = o(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [r, void 0],
        i = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        i = i.then(t.shift(), t.shift());
      return i;
    }),
      (l.prototype.getUri = function (e) {
        return (
          (e = o(this.defaults, e)),
          s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        l.prototype[e] = function (t, i) {
          return this.request(n.merge(i || {}, { method: e, url: t }));
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        l.prototype[e] = function (t, i, s) {
          return this.request(n.merge(s || {}, { method: e, url: t, data: i }));
        };
      }),
      (e.exports = l);
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    function s() {
      this.handlers = [];
    }
    (s.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (s.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (s.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = s);
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      s = i(20),
      a = i(5),
      r = i(6);
    function o(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        o(e),
        (e.headers = e.headers || {}),
        (e.data = s(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || r.adapter)(e).then(
          function (t) {
            return (
              o(e), (t.data = s(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              a(t) ||
                (o(e),
                t &&
                  t.response &&
                  (t.response.data = s(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = function (e, t, i) {
      return (
        n.forEach(i, function (i) {
          e = i(e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var i,
      n,
      s = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (i === setTimeout) return setTimeout(e, 0);
      if ((i === a || !i) && setTimeout)
        return (i = setTimeout), setTimeout(e, 0);
      try {
        return i(e, 0);
      } catch (t) {
        try {
          return i.call(null, e, 0);
        } catch (t) {
          return i.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        i = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        i = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        n = r;
      }
    })();
    var l,
      c = [],
      d = !1,
      u = -1;
    function h() {
      d &&
        l &&
        ((d = !1), l.length ? (c = l.concat(c)) : (u = -1), c.length && p());
    }
    function p() {
      if (!d) {
        var e = o(h);
        d = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++u < t; ) l && l[u].run();
          (u = -1), (t = c.length);
        }
        (l = null),
          (d = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === r || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (s.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      c.push(new m(e, t)), 1 !== c.length || d || o(p);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (s.title = "browser"),
      (s.browser = !0),
      (s.env = {}),
      (s.argv = []),
      (s.version = ""),
      (s.versions = {}),
      (s.on = f),
      (s.addListener = f),
      (s.once = f),
      (s.off = f),
      (s.removeListener = f),
      (s.removeAllListeners = f),
      (s.emit = f),
      (s.prependListener = f),
      (s.prependOnceListener = f),
      (s.listeners = function (e) {
        return [];
      }),
      (s.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (s.cwd = function () {
        return "/";
      }),
      (s.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (s.umask = function () {
        return 0;
      });
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = function (e, t) {
      n.forEach(e, function (i, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = i), delete e[n]);
      });
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(8);
    e.exports = function (e, t, i) {
      var s = i.config.validateStatus;
      !s || s(i.status)
        ? e(i)
        : t(
            n(
              "Request failed with status code " + i.status,
              i.config,
              null,
              i.request,
              i
            )
          );
    };
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e, t, i, n, s) {
      return (
        (e.config = t),
        i && (e.code = i),
        (e.request = n),
        (e.response = s),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(26),
      s = i(27);
    e.exports = function (e, t) {
      return e && !n(t) ? s(e, t) : t;
    };
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0),
      s = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        i,
        a,
        r = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((a = e.indexOf(":")),
              (t = n.trim(e.substr(0, a)).toLowerCase()),
              (i = n.trim(e.substr(a + 1))),
              t)
            ) {
              if (r[t] && s.indexOf(t) >= 0) return;
              r[t] =
                "set-cookie" === t
                  ? (r[t] ? r[t] : []).concat([i])
                  : r[t]
                  ? r[t] + ", " + i
                  : i;
            }
          }),
          r)
        : r;
    };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            i = document.createElement("a");
          function s(e) {
            var n = e;
            return (
              t && (i.setAttribute("href", n), (n = i.href)),
              i.setAttribute("href", n),
              {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname:
                  "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname,
              }
            );
          }
          return (
            (e = s(window.location.href)),
            function (t) {
              var i = n.isString(t) ? s(t) : t;
              return i.protocol === e.protocol && i.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, i, s, a, r) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()),
              n.isString(s) && o.push("path=" + s),
              n.isString(a) && o.push("domain=" + a),
              !0 === r && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, i) {
    "use strict";
    var n = i(10);
    function s(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var i = this;
      e(function (e) {
        i.reason || ((i.reason = new n(e)), t(i.reason));
      });
    }
    (s.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (s.source = function () {
        var e;
        return {
          token: new s(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = s);
  },
  function (e, t, i) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    i(13), i(14), i(15);
    var n = "is-active",
      s = "is-hidden",
      a = "is-disabled",
      r = "bullet",
      o = i(1),
      l = i.n(o);
    function c(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return d(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return d(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === i && e.constructor && (i = e.constructor.name);
          if ("Map" === i || "Set" === i) return Array.from(e);
          if (
            "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return d(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    var u = document.querySelector("[data-component=filters"),
      h = {
        init: function () {
          if (u)
            return (function () {
              !(function () {
                if (u.classList.contains(n)) {
                  new l.a().animateScroll(
                    document.querySelector("[data-role=filters-target]")
                  );
                }
              })();
              for (
                var e = u.querySelectorAll("[data-role=filters-control"),
                  t = u.querySelector("[data-role=filters-form]"),
                  i = 0;
                i < e.length;
                i++
              )
                e[i].addEventListener("change", function () {
                  var e = c(u.querySelectorAll("input:checked"))
                      .map(function (e) {
                        return e.value;
                      })
                      .join(","),
                    i = ""
                      .concat(window.location.origin)
                      .concat(t.dataset.path)
                      .concat(e);
                  window.location = i;
                });
            })();
        },
      };
    var p = i(11),
      m = i.n(p),
      f = document.querySelectorAll("[data-component=grid]"),
      g = document.querySelectorAll("[data-role=grid-trigger]"),
      v = {
        init: function () {
          if (f.length > 0)
            return void (function () {
              for (var e = 0; e < g.length; e++)
                g[e].addEventListener("click", y);
            })();
        },
      };
    function y() {
      var e = this.dataset.id,
        t = this.closest("[data-role=grid-group]");
      this.classList.contains(n) ||
        this.classList.contains(a) ||
        (this.classList.add(n),
        (function (e, t) {
          m.a
            .get("/wp-json/wp/v2/person/".concat(e))
            .then(function (e) {
              !(function () {
                for (var e = 0; e < g.length; e++)
                  g[e].classList.contains(n) || g[e].classList.add(a);
              })(),
                (function (e, t) {
                  var i = document.createElement("div");
                  i.addEventListener("click", function (e) {
                    ((function () {
                      for (var e = 0; e < g.length; e++)
                        g[e].classList.remove(a), g[e].classList.remove(n);
                    })(),
                    e.target.matches("[data-role=grid-close]") ||
                      e.target.parentNode.matches("[data-role=grid-close]")) &&
                      (new l.a().animateScroll(i.previousSibling),
                      i.parentNode.removeChild(i));
                  }),
                    (function (e, t, i) {
                      var n = '<div data-component="modal" class="wysiwyg relative bg-blue-100 px-20 py-48 md:px-40 md:py-40">\n      <button class="absolute right-0 top-0 border-solid border-2 border-blue-400 p-8 mt-12 mr-12" data-role="grid-close">\n        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M16 1.712L14.389 0 8 6.788 1.611 0 0 1.712 6.389 8.5 0 15.288 1.611 17 8 10.212 14.389 17 16 15.288 9.611 8.5 16 1.712z" fill="#273953"/>\n        </svg>\n      </button>\n      '.concat(
                        e,
                        "\n    </div>"
                      );
                      (i.innerHTML = n),
                        (s = i),
                        (a = t),
                        a.parentNode.insertBefore(s, a.nextSibling),
                        new l.a().animateScroll(
                          document.querySelector("[data-component=modal]")
                        );
                      var s, a;
                    })(e, t, i);
                })(e.data.content.rendered, t);
            })
            .catch(function (e) {
              console.log(e);
            });
        })(e, t));
    }
    var b = document.querySelector("[data-component=link]"),
      w = {
        init: function () {
          if (b) return void new l.a('a[href*="#"]');
        },
      };
    var T = {
        open: function (e) {
          e.trigger.classList.add(n),
            e.viewport.classList.add(n),
            this.ariaExpanded(e);
        },
        close: function (e) {
          e.trigger && e.viewport
            ? (e.trigger.classList.remove(n), e.viewport.classList.remove(n))
            : e.trigger
            ? e.trigger.classList.remove(n)
            : e.viewport && e.viewport.classList.remove(n),
            this.ariaHidden(e);
        },
        ariaHidden: function (e) {
          e.trigger && e.viewport
            ? (e.trigger.setAttribute("aria-expanded", "false"),
              e.viewport.setAttribute("aria-hidden", "true"))
            : e.trigger
            ? e.trigger.setAttribute("aria-expanded", "false")
            : e.viewport && e.viewport.setAttribute("aria-hidden", "true");
        },
        ariaExpanded: function (e) {
          e.trigger && e.viewport
            ? (e.trigger.setAttribute("aria-expanded", "true"),
              e.viewport.setAttribute("aria-hidden", "false"))
            : e.trigger
            ? e.trigger.setAttribute("aria-expanded", "false")
            : e.viewport && e.viewport.setAttribute("aria-hidden", "false");
        },
      },
      E = document.querySelector("[data-component=menu]"),
      S = document.querySelector("[data-role=menu-trigger]"),
      x = document.querySelector("[data-role=menu-trigger-text]"),
      C = document.querySelector("[data-role=menu-viewport]"),
      k = document.querySelectorAll("[data-role=menu-dropdown-trigger]"),
      M = document.querySelectorAll("[data-role=menu-dropdown-trigger-mobile]"),
      P = {
        init: function () {
          if (E)
            return (
              (function () {
                for (var e = 0; e < k.length; e++)
                  k[e].addEventListener("mouseenter", A),
                    k[e].addEventListener("mouseleave", A);
                for (var t = 0; t < M.length; t++)
                  M[t].addEventListener("click", L);
              })(),
              void S.addEventListener("click", $)
            );
        },
      };
    function A() {
      E.classList.contains(n) ||
        (this.classList.contains(n)
          ? T.close({
              trigger: this,
              viewport: this.querySelector("[data-role=menu-dropdown]"),
            })
          : T.open({
              trigger: this,
              viewport: this.querySelector("[data-role=menu-dropdown]"),
            }));
    }
    function L() {
      var e = this.closest("[data-role=menu-dropdown-trigger]").querySelector(
          "[data-role=menu-dropdown]"
        ),
        t = this.closest("[data-role=menu-dropdown-trigger-outer]");
      this.classList.contains(n)
        ? (T.close({ trigger: this, viewport: e }), t.classList.remove(n))
        : (T.open({ trigger: this, viewport: e }), t.classList.add(n));
    }
    function $() {
      this.classList.contains(n)
        ? ((x.innerHTML = "Menu"),
          T.close({ trigger: this, viewport: C }),
          E.classList.remove(n))
        : ((x.innerHTML = "Close"),
          T.open({ trigger: this, viewport: C }),
          E.classList.add(n));
    }
    function I(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function O(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach(function (i) {
          void 0 === e[i]
            ? (e[i] = t[i])
            : I(t[i]) &&
              I(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              O(e[i], t[i]);
        });
    }
    var z = "undefined" != typeof document ? document : {},
      N = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
    O(z, N);
    var D = "undefined" != typeof window ? window : {};
    O(D, {
      document: N,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
    });
    class H {
      constructor(e) {
        const t = this;
        for (let i = 0; i < e.length; i += 1) t[i] = e[i];
        return (t.length = e.length), this;
      }
    }
    function q(e, t) {
      const i = [];
      let n = 0;
      if (e && !t && e instanceof H) return e;
      if (e)
        if ("string" == typeof e) {
          let s, a;
          const r = e.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let e = "div";
            for (
              0 === r.indexOf("<li") && (e = "ul"),
                0 === r.indexOf("<tr") && (e = "tbody"),
                (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) ||
                  (e = "tr"),
                0 === r.indexOf("<tbody") && (e = "table"),
                0 === r.indexOf("<option") && (e = "select"),
                a = z.createElement(e),
                a.innerHTML = r,
                n = 0;
              n < a.childNodes.length;
              n += 1
            )
              i.push(a.childNodes[n]);
          } else
            for (
              s =
                t || "#" !== e[0] || e.match(/[ .<>:~]/)
                  ? (t || z).querySelectorAll(e.trim())
                  : [z.getElementById(e.trim().split("#")[1])],
                n = 0;
              n < s.length;
              n += 1
            )
              s[n] && i.push(s[n]);
        } else if (e.nodeType || e === D || e === z) i.push(e);
        else if (e.length > 0 && e[0].nodeType)
          for (n = 0; n < e.length; n += 1) i.push(e[n]);
      return new H(i);
    }
    function j(e) {
      const t = [];
      for (let i = 0; i < e.length; i += 1)
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    (q.fn = H.prototype), (q.Class = H), (q.Dom7 = H);
    "resize scroll".split(" ");
    const B = {
      addClass: function (e) {
        if (void 0 === e) return this;
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.add(t[e]);
        return this;
      },
      removeClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.remove(t[e]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.toggle(t[e]);
        return this;
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        let i;
        if (void 0 !== t) {
          for (let n = 0; n < this.length; n += 1)
            (i = this[n]),
              i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
              (i.dom7ElementDataStorage[e] = t);
          return this;
        }
        if (((i = this[0]), i)) {
          if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
            return i.dom7ElementDataStorage[e];
          const t = i.getAttribute("data-" + e);
          return t || void 0;
        }
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t].style;
          (i.webkitTransform = e), (i.transform = e);
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t].style;
          (i.webkitTransitionDuration = e), (i.transitionDuration = e);
        }
        return this;
      },
      on: function (...e) {
        let [t, i, n, s] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), q(t).is(i))) n.apply(t, s);
          else {
            const e = q(t).parents();
            for (let t = 0; t < e.length; t += 1)
              q(e[t]).is(i) && n.apply(e[t], s);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, s);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, n, s] = e;
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!i && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : i && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const i = r[e];
                (n && i.listener === n) ||
                (n &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === n)
                  ? (a.removeEventListener(t, i.proxyListener, s),
                    r.splice(e, 1))
                  : n ||
                    (a.removeEventListener(t, i.proxyListener, s),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < t.length; n += 1) {
          const s = t[n];
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t];
            let a;
            try {
              a = new D.CustomEvent(s, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
            } catch (e) {
              (a = z.createEvent("Event")),
                a.initEvent(s, !0, !0),
                (a.detail = i);
            }
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(a),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = ["webkitTransitionEnd", "transitionend"],
          i = this;
        let n;
        function s(a) {
          if (a.target === this)
            for (e.call(this, a), n = 0; n < t.length; n += 1) i.off(t[n], s);
        }
        if (e) for (n = 0; n < t.length; n += 1) i.on(t[n], s);
        return this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (this.length > 0) {
          const e = this[0],
            t = e.getBoundingClientRect(),
            i = z.body,
            n = e.clientTop || i.clientTop || 0,
            s = e.clientLeft || i.clientLeft || 0,
            a = e === D ? D.scrollY : e.scrollTop,
            r = e === D ? D.scrollX : e.scrollLeft;
          return { top: t.top + a - n, left: t.left + r - s };
        }
        return null;
      },
      css: function (e, t) {
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (let t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return D.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (let t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = this[0];
        let i, n;
        if (!t || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (t.matches) return t.matches(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);
          for (i = q(e), n = 0; n < i.length; n += 1) if (i[n] === t) return !0;
          return !1;
        }
        if (e === z) return t === z;
        if (e === D) return t === D;
        if (e.nodeType || e instanceof H) {
          for (i = e.nodeType ? [e] : e, n = 0; n < i.length; n += 1)
            if (i[n] === t) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        let i;
        return e > t - 1
          ? new H([])
          : e < 0
          ? ((i = t + e), new H(i < 0 ? [] : [this[i]]))
          : new H([this[e]]);
      },
      append: function (...e) {
        let t;
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = z.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof H)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        let t, i;
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            const n = z.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
          } else if (e instanceof H)
            for (i = 0; i < e.length; i += 1)
              this[t].insertBefore(e[i], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && q(this[0].nextElementSibling).is(e)
              ? new H([this[0].nextElementSibling])
              : new H([])
            : this[0].nextElementSibling
            ? new H([this[0].nextElementSibling])
            : new H([])
          : new H([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return new H([]);
        for (; i.nextElementSibling; ) {
          const n = i.nextElementSibling;
          e ? q(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return new H(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && q(t.previousElementSibling).is(e)
              ? new H([t.previousElementSibling])
              : new H([])
            : t.previousElementSibling
            ? new H([t.previousElementSibling])
            : new H([]);
        }
        return new H([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return new H([]);
        for (; i.previousElementSibling; ) {
          const n = i.previousElementSibling;
          e ? q(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return new H(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? q(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return q(j(t));
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let n = this[i].parentNode;
          for (; n; )
            e ? q(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return q(j(t));
      },
      closest: function (e) {
        let t = this;
        return void 0 === e
          ? new H([])
          : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return new H(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].childNodes;
          for (let i = 0; i < n.length; i += 1)
            e
              ? 1 === n[i].nodeType && q(n[i]).is(e) && t.push(n[i])
              : 1 === n[i].nodeType && t.push(n[i]);
        }
        return new H(j(t));
      },
      filter: function (e) {
        const t = [],
          i = this;
        for (let n = 0; n < i.length; n += 1)
          e.call(i[n], n, i[n]) && t.push(i[n]);
        return new H(t);
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function (...e) {
        const t = this;
        let i, n;
        for (i = 0; i < e.length; i += 1) {
          const s = q(e[i]);
          for (n = 0; n < s.length; n += 1)
            (t[t.length] = s[n]), (t.length += 1);
        }
        return t;
      },
      styles: function () {
        return this[0] ? D.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(B).forEach((e) => {
      q.fn[e] = q.fn[e] || B[e];
    });
    const F = {
        deleteProps(e) {
          const t = e;
          Object.keys(t).forEach((e) => {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: (e, t = 0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t = "x") {
          let i, n, s;
          const a = D.getComputedStyle(e, null);
          return (
            D.WebKitCSSMatrix
              ? ((n = a.transform || a.webkitTransform),
                n.split(",").length > 6 &&
                  (n = n
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (s = new D.WebKitCSSMatrix("none" === n ? "" : n)))
              : ((s =
                  a.MozTransform ||
                  a.OTransform ||
                  a.MsTransform ||
                  a.msTransform ||
                  a.transform ||
                  a
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                (i = s.toString().split(","))),
            "x" === t &&
              (n = D.WebKitCSSMatrix
                ? s.m41
                : 16 === i.length
                ? parseFloat(i[12])
                : parseFloat(i[4])),
            "y" === t &&
              (n = D.WebKitCSSMatrix
                ? s.m42
                : 16 === i.length
                ? parseFloat(i[13])
                : parseFloat(i[5])),
            n || 0
          );
        },
        parseUrlQuery(e) {
          const t = {};
          let i,
            n,
            s,
            a,
            r = e || D.location.href;
          if ("string" == typeof r && r.length)
            for (
              r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                n = r.split("&").filter((e) => "" !== e),
                a = n.length,
                i = 0;
              i < a;
              i += 1
            )
              (s = n[i].replace(/#\S+/g, "").split("=")),
                (t[decodeURIComponent(s[0])] =
                  void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
          return t;
        },
        isObject: (e) =>
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object,
        extend(...e) {
          const t = Object(e[0]);
          for (let i = 1; i < e.length; i += 1) {
            const n = e[i];
            if (null != n) {
              const e = Object.keys(Object(n));
              for (let i = 0, s = e.length; i < s; i += 1) {
                const s = e[i],
                  a = Object.getOwnPropertyDescriptor(n, s);
                void 0 !== a &&
                  a.enumerable &&
                  (F.isObject(t[s]) && F.isObject(n[s])
                    ? F.extend(t[s], n[s])
                    : !F.isObject(t[s]) && F.isObject(n[s])
                    ? ((t[s] = {}), F.extend(t[s], n[s]))
                    : (t[s] = n[s]));
              }
            }
          }
          return t;
        },
      },
      R = {
        touch: !!(
          "ontouchstart" in D ||
          (D.DocumentTouch && z instanceof D.DocumentTouch)
        ),
        pointerEvents:
          !!D.PointerEvent &&
          "maxTouchPoints" in D.navigator &&
          D.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in D || "WebkitMutationObserver" in D,
        passiveListener: (function () {
          let e = !1;
          try {
            const t = Object.defineProperty({}, "passive", {
              get() {
                e = !0;
              },
            });
            D.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in D,
      };
    class V {
      constructor(e = {}) {
        const t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach((e) => {
              t.on(e, t.params.on[e]);
            });
      }
      on(e, t, i) {
        const n = this;
        if ("function" != typeof t) return n;
        const s = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][s](t);
          }),
          n
        );
      }
      once(e, t, i) {
        const n = this;
        if ("function" != typeof t) return n;
        function s(...i) {
          n.off(e, s), s.f7proxy && delete s.f7proxy, t.apply(n, i);
        }
        return (s.f7proxy = t), n.on(e, s, i);
      }
      off(e, t) {
        const i = this;
        return i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].length &&
                  i.eventsListeners[e].forEach((n, s) => {
                    (n === t || (n.f7proxy && n.f7proxy === t)) &&
                      i.eventsListeners[e].splice(s, 1);
                  });
            }),
            i)
          : i;
      }
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let i, n, s;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (n = e.slice(1, e.length)), (s = t))
          : ((i = e[0].events), (n = e[0].data), (s = e[0].context || t));
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            if (t.eventsListeners && t.eventsListeners[e]) {
              const i = [];
              t.eventsListeners[e].forEach((e) => {
                i.push(e);
              }),
                i.forEach((e) => {
                  e.apply(s, n);
                });
            }
          }),
          t
        );
      }
      useModulesParams(e) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach((i) => {
            const n = t.modules[i];
            n.params && F.extend(e, n.params);
          });
      }
      useModules(e = {}) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach((i) => {
            const n = t.modules[i],
              s = e[i] || {};
            n.instance &&
              Object.keys(n.instance).forEach((e) => {
                const i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
              }),
              n.on &&
                t.on &&
                Object.keys(n.on).forEach((e) => {
                  t.on(e, n.on[e]);
                }),
              n.create && n.create.bind(t)(s);
          });
      }
      static set components(e) {
        this.use && this.use(e);
      }
      static installModule(e, ...t) {
        const i = this;
        i.prototype.modules || (i.prototype.modules = {});
        const n =
          e.name || `${Object.keys(i.prototype.modules).length}_${F.now()}`;
        return (
          (i.prototype.modules[n] = e),
          e.proto &&
            Object.keys(e.proto).forEach((t) => {
              i.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach((t) => {
              i[t] = e.static[t];
            }),
          e.install && e.install.apply(i, t),
          i
        );
      }
      static use(e, ...t) {
        const i = this;
        return Array.isArray(e)
          ? (e.forEach((e) => i.installModule(e)), i)
          : i.installModule(e, ...t);
      }
    }
    var _ = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.$el;
        (t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth),
          (i =
            void 0 !== e.params.height ? e.params.height : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left"), 10) -
              parseInt(n.css("padding-right"), 10)),
            (i =
              i -
              parseInt(n.css("padding-top"), 10) -
              parseInt(n.css("padding-bottom"), 10)),
            F.extend(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this,
          t = e.params,
          { $wrapperEl: i, size: n, rtlTranslate: s, wrongRTL: a } = e,
          r = e.virtual && t.virtual.enabled,
          o = r ? e.virtual.slides.length : e.slides.length,
          l = i.children("." + e.params.slideClass),
          c = r ? e.virtual.slides.length : l.length;
        let d = [];
        const u = [],
          h = [];
        function p(e) {
          return !t.cssMode || e !== l.length - 1;
        }
        let m = t.slidesOffsetBefore;
        "function" == typeof m && (m = t.slidesOffsetBefore.call(e));
        let f = t.slidesOffsetAfter;
        "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
        const g = e.snapGrid.length,
          v = e.snapGrid.length;
        let y,
          b,
          w = t.spaceBetween,
          T = -m,
          E = 0,
          S = 0;
        if (void 0 === n) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * n),
          (e.virtualSize = -w),
          s
            ? l.css({ marginLeft: "", marginTop: "" })
            : l.css({ marginRight: "", marginBottom: "" }),
          t.slidesPerColumn > 1 &&
            ((y =
              Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn
                ? c
                : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
        const x = t.slidesPerColumn,
          C = y / x,
          k = Math.floor(c / t.slidesPerColumn);
        for (let i = 0; i < c; i += 1) {
          b = 0;
          const s = l.eq(i);
          if (t.slidesPerColumn > 1) {
            let n, a, r;
            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
              const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                o = i - t.slidesPerColumn * t.slidesPerGroup * e,
                l =
                  0 === e
                    ? t.slidesPerGroup
                    : Math.min(
                        Math.ceil((c - e * x * t.slidesPerGroup) / x),
                        t.slidesPerGroup
                      );
              (r = Math.floor(o / l)),
                (a = o - r * l + e * t.slidesPerGroup),
                (n = a + (r * y) / x),
                s.css({
                  "-webkit-box-ordinal-group": n,
                  "-moz-box-ordinal-group": n,
                  "-ms-flex-order": n,
                  "-webkit-order": n,
                  order: n,
                });
            } else
              "column" === t.slidesPerColumnFill
                ? ((a = Math.floor(i / x)),
                  (r = i - a * x),
                  (a > k || (a === k && r === x - 1)) &&
                    ((r += 1), r >= x && ((r = 0), (a += 1))))
                : ((r = Math.floor(i / C)), (a = i - r * C));
            s.css(
              "margin-" + (e.isHorizontal() ? "top" : "left"),
              0 !== r && t.spaceBetween && t.spaceBetween + "px"
            );
          }
          if ("none" !== s.css("display")) {
            if ("auto" === t.slidesPerView) {
              const i = D.getComputedStyle(s[0], null),
                n = s[0].style.transform,
                a = s[0].style.webkitTransform;
              if (
                (n && (s[0].style.transform = "none"),
                a && (s[0].style.webkitTransform = "none"),
                t.roundLengths)
              )
                b = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
              else if (e.isHorizontal()) {
                const e = parseFloat(i.getPropertyValue("width")),
                  t = parseFloat(i.getPropertyValue("padding-left")),
                  n = parseFloat(i.getPropertyValue("padding-right")),
                  s = parseFloat(i.getPropertyValue("margin-left")),
                  a = parseFloat(i.getPropertyValue("margin-right")),
                  r = i.getPropertyValue("box-sizing");
                b = r && "border-box" === r ? e + s + a : e + t + n + s + a;
              } else {
                const e = parseFloat(i.getPropertyValue("height")),
                  t = parseFloat(i.getPropertyValue("padding-top")),
                  n = parseFloat(i.getPropertyValue("padding-bottom")),
                  s = parseFloat(i.getPropertyValue("margin-top")),
                  a = parseFloat(i.getPropertyValue("margin-bottom")),
                  r = i.getPropertyValue("box-sizing");
                b = r && "border-box" === r ? e + s + a : e + t + n + s + a;
              }
              n && (s[0].style.transform = n),
                a && (s[0].style.webkitTransform = a),
                t.roundLengths && (b = Math.floor(b));
            } else
              (b = (n - (t.slidesPerView - 1) * w) / t.slidesPerView),
                t.roundLengths && (b = Math.floor(b)),
                l[i] &&
                  (e.isHorizontal()
                    ? (l[i].style.width = b + "px")
                    : (l[i].style.height = b + "px"));
            l[i] && (l[i].swiperSlideSize = b),
              h.push(b),
              t.centeredSlides
                ? ((T = T + b / 2 + E / 2 + w),
                  0 === E && 0 !== i && (T = T - n / 2 - w),
                  0 === i && (T = T - n / 2 - w),
                  Math.abs(T) < 0.001 && (T = 0),
                  t.roundLengths && (T = Math.floor(T)),
                  S % t.slidesPerGroup == 0 && d.push(T),
                  u.push(T))
                : (t.roundLengths && (T = Math.floor(T)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && d.push(T),
                  u.push(T),
                  (T = T + b + w)),
              (e.virtualSize += b + w),
              (E = b),
              (S += 1);
          }
        }
        let M;
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + f),
          s &&
            a &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            i.css({ width: e.virtualSize + t.spaceBetween + "px" }),
          t.setWrapperSize &&
            (e.isHorizontal()
              ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : i.css({ height: e.virtualSize + t.spaceBetween + "px" })),
          t.slidesPerColumn > 1 &&
            ((e.virtualSize = (b + t.spaceBetween) * y),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : i.css({ height: e.virtualSize + t.spaceBetween + "px" }),
            t.centeredSlides))
        ) {
          M = [];
          for (let i = 0; i < d.length; i += 1) {
            let n = d[i];
            t.roundLengths && (n = Math.floor(n)),
              d[i] < e.virtualSize + d[0] && M.push(n);
          }
          d = M;
        }
        if (!t.centeredSlides) {
          M = [];
          for (let i = 0; i < d.length; i += 1) {
            let s = d[i];
            t.roundLengths && (s = Math.floor(s)),
              d[i] <= e.virtualSize - n && M.push(s);
          }
          (d = M),
            Math.floor(e.virtualSize - n) - Math.floor(d[d.length - 1]) > 1 &&
              d.push(e.virtualSize - n);
        }
        if (
          (0 === d.length && (d = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? s
                ? l.filter(p).css({ marginLeft: w + "px" })
                : l.filter(p).css({ marginRight: w + "px" })
              : l.filter(p).css({ marginBottom: w + "px" })),
          t.centeredSlides && t.centeredSlidesBounds)
        ) {
          let e = 0;
          h.forEach((i) => {
            e += i + (t.spaceBetween ? t.spaceBetween : 0);
          }),
            (e -= t.spaceBetween);
          const i = e - n;
          d = d.map((e) => (e < 0 ? -m : e > i ? i + f : e));
        }
        if (t.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((i) => {
              e += i + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (e -= t.spaceBetween),
            e < n)
          ) {
            const t = (n - e) / 2;
            d.forEach((e, i) => {
              d[i] = e - t;
            }),
              u.forEach((e, i) => {
                u[i] = e + t;
              });
          }
        }
        F.extend(e, {
          slides: l,
          snapGrid: d,
          slidesGrid: u,
          slidesSizesGrid: h,
        }),
          c !== o && e.emit("slidesLengthChange"),
          d.length !== g &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          u.length !== v && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [];
        let n,
          s = 0;
        if (
          ("number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed),
          "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        )
          if (t.params.centeredSlides)
            t.visibleSlides.each((e, t) => {
              i.push(t);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length) break;
              i.push(t.slides.eq(e)[0]);
            }
        else i.push(t.slides.eq(t.activeIndex)[0]);
        for (n = 0; n < i.length; n += 1)
          if (void 0 !== i[n]) {
            const e = i[n].offsetHeight;
            s = e > s ? e : s;
          }
        s && t.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: s } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        s && (a = e),
          n.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const r = n[e],
            o =
              (a +
                (i.centeredSlides ? t.minTranslate() : 0) -
                r.swiperSlideOffset) /
              (r.swiperSlideSize + i.spaceBetween);
          if (i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) {
            const s = -(a - r.swiperSlideOffset),
              o = s + t.slidesSizesGrid[e];
            ((s >= 0 && s < t.size - 1) ||
              (o > 1 && o <= t.size) ||
              (s <= 0 && o >= t.size)) &&
              (t.visibleSlides.push(r),
              t.visibleSlidesIndexes.push(e),
              n.eq(e).addClass(i.slideVisibleClass));
          }
          r.progress = s ? -o : o;
        }
        t.visibleSlides = q(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: a, isEnd: r } = t;
        const o = a,
          l = r;
        0 === n
          ? ((s = 0), (a = !0), (r = !0))
          : ((s = (e - t.minTranslate()) / n), (a = s <= 0), (r = s >= 1)),
          F.extend(t, { progress: s, isBeginning: a, isEnd: r }),
          (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((o && !a) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: n,
            activeIndex: s,
            realIndex: a,
          } = e,
          r = e.virtual && i.virtual.enabled;
        let o;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          o.addClass(i.slideActiveClass),
          i.loop &&
            (o.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = o
          .nextAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let c = o
          .prevAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        i.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            c.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass));
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: s,
            params: a,
            activeIndex: r,
            realIndex: o,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : i >= n[e] && i < n[e + 1] && (d = e + 1)
              : i >= n[e] && (d = e);
          a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (s.indexOf(i) >= 0) c = s.indexOf(i);
        else {
          const e = Math.min(a.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / a.slidesPerGroup);
        }
        if ((c >= s.length && (c = s.length - 1), d === r))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        F.extend(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          n = q(e.target).closest("." + i.slideClass)[0];
        let s = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            t.slides[e] === n && (s = !0);
        if (!n || !s)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                q(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = q(n).index()),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var G = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: i,
          translate: n,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let a = F.getTranslate(s[0], e);
        return i && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: n,
            params: s,
            $wrapperEl: a,
            wrapperEl: r,
            progress: o,
          } = i;
        let l,
          c = 0,
          d = 0;
        i.isHorizontal() ? (c = n ? -e : e) : (d = e),
          s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          s.cssMode
            ? (r[
                i.isHorizontal() ? "scrollLeft" : "scrollTop"
              ] = i.isHorizontal() ? -c : -d)
            : s.virtualTranslate ||
              a.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? c : d);
        const u = i.maxTranslate() - i.minTranslate();
        (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
          l !== o && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, n = !0, s) {
        const a = this,
          { params: r, wrapperEl: o } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const l = a.minTranslate(),
          c = a.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          a.updateProgress(d),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          return (
            0 === t
              ? (o[e ? "scrollLeft" : "scrollTop"] = -d)
              : o.scrollTo
              ? o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" })
              : (o[e ? "scrollLeft" : "scrollTop"] = -d),
            !0
          );
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(d),
              i &&
                (a.emit("beforeTransitionStart", t, s),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(d),
              i &&
                (a.emit("beforeTransitionStart", t, s),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      i && a.emit("transitionEnd"));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    var W = {
      setTransition: function (e, t) {
        const i = this;
        i.params.cssMode || i.$wrapperEl.transition(e),
          i.emit("setTransition", e, t);
      },
      transitionStart: function (e = !0, t) {
        const i = this,
          { activeIndex: n, params: s, previousIndex: a } = i;
        if (s.cssMode) return;
        s.autoHeight && i.updateAutoHeight();
        let r = t;
        if (
          (r || (r = n > a ? "next" : n < a ? "prev" : "reset"),
          i.emit("transitionStart"),
          e && n !== a)
        ) {
          if ("reset" === r) return void i.emit("slideResetTransitionStart");
          i.emit("slideChangeTransitionStart"),
            "next" === r
              ? i.emit("slideNextTransitionStart")
              : i.emit("slidePrevTransitionStart");
        }
      },
      transitionEnd: function (e = !0, t) {
        const i = this,
          { activeIndex: n, previousIndex: s, params: a } = i;
        if (((i.animating = !1), a.cssMode)) return;
        i.setTransition(0);
        let r = t;
        if (
          (r || (r = n > s ? "next" : n < s ? "prev" : "reset"),
          i.emit("transitionEnd"),
          e && n !== s)
        ) {
          if ("reset" === r) return void i.emit("slideResetTransitionEnd");
          i.emit("slideChangeTransitionEnd"),
            "next" === r
              ? i.emit("slideNextTransitionEnd")
              : i.emit("slidePrevTransitionEnd");
        }
      },
    };
    var Y = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, n) {
        const s = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: r,
          snapGrid: o,
          slidesGrid: l,
          previousIndex: c,
          activeIndex: d,
          rtlTranslate: u,
          wrapperEl: h,
        } = s;
        if (s.animating && r.preventInteractionOnTransition) return !1;
        const p = Math.min(s.params.slidesPerGroupSkip, a);
        let m = p + Math.floor((a - p) / s.params.slidesPerGroup);
        m >= o.length && (m = o.length - 1),
          (d || r.initialSlide || 0) === (c || 0) &&
            i &&
            s.emit("beforeSlideChangeStart");
        const f = -o[m];
        if ((s.updateProgress(f), r.normalizeSlideIndex))
          for (let e = 0; e < l.length; e += 1)
            -Math.floor(100 * f) >= Math.floor(100 * l[e]) && (a = e);
        if (s.initialized && a !== d) {
          if (!s.allowSlideNext && f < s.translate && f < s.minTranslate())
            return !1;
          if (
            !s.allowSlidePrev &&
            f > s.translate &&
            f > s.maxTranslate() &&
            (d || 0) !== a
          )
            return !1;
        }
        let g;
        if (
          ((g = a > d ? "next" : a < d ? "prev" : "reset"),
          (u && -f === s.translate) || (!u && f === s.translate))
        )
          return (
            s.updateActiveIndex(a),
            r.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== r.effect && s.setTranslate(f),
            "reset" !== g && (s.transitionStart(i, g), s.transitionEnd(i, g)),
            !1
          );
        if (r.cssMode) {
          const e = s.isHorizontal();
          let i = -f;
          return (
            u && (i = h.scrollWidth - h.offsetWidth - i),
            0 === t
              ? (h[e ? "scrollLeft" : "scrollTop"] = i)
              : h.scrollTo
              ? h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" })
              : (h[e ? "scrollLeft" : "scrollTop"] = i),
            !0
          );
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(f),
              s.updateActiveIndex(a),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, n),
              s.transitionStart(i, g),
              s.transitionEnd(i, g))
            : (s.setTransition(t),
              s.setTranslate(f),
              s.updateActiveIndex(a),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, n),
              s.transitionStart(i, g),
              s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(i, g));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                ))),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, n) {
        const s = this;
        let a = e;
        return s.params.loop && (a += s.loopedSlides), s.slideTo(a, t, i, n);
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const n = this,
          { params: s, animating: a } = n,
          r = n.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
        if (s.loop) {
          if (a) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return n.slideTo(n.activeIndex + r, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const n = this,
          {
            params: s,
            animating: a,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
          } = n;
        if (s.loop) {
          if (a) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const d = c(l ? n.translate : -n.translate),
          u = r.map((e) => c(e));
        o.map((e) => c(e)), r[u.indexOf(d)];
        let h,
          p = r[u.indexOf(d) - 1];
        return (
          void 0 === p &&
            s.cssMode &&
            r.forEach((e) => {
              !p && d >= e && (p = e);
            }),
          void 0 !== p &&
            ((h = o.indexOf(p)), h < 0 && (h = n.activeIndex - 1)),
          n.slideTo(h, e, t, i)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, n = 0.5) {
        const s = this;
        let a = s.activeIndex;
        const r = Math.min(s.params.slidesPerGroupSkip, a),
          o = r + Math.floor((a - r) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[o]) {
          const e = s.snapGrid[o];
          l - e > (s.snapGrid[o + 1] - e) * n && (a += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[o - 1];
          l - e <= (s.snapGrid[o] - e) * n && (a -= s.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, s.slidesGrid.length - 1)),
          s.slideTo(a, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          a = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(q(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? a < e.loopedSlides - n / 2 ||
                a > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (a = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  F.nextTick(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - n
              ? (e.loopFix(),
                (a = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                F.nextTick(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    var X = {
      loopCreate: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e;
        i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
        let n = i.children("." + t.slideClass);
        if (t.loopFillGroupWithBlank) {
          const e = t.slidesPerGroup - (n.length % t.slidesPerGroup);
          if (e !== t.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = q(z.createElement("div")).addClass(
                `${t.slideClass} ${t.slideBlankClass}`
              );
              i.append(e);
            }
            n = i.children("." + t.slideClass);
          }
        }
        "auto" !== t.slidesPerView ||
          t.loopedSlides ||
          (t.loopedSlides = n.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(t.loopedSlides || t.slidesPerView, 10)
          )),
          (e.loopedSlides += t.loopAdditionalSlides),
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
        const s = [],
          a = [];
        n.each((t, i) => {
          const r = q(i);
          t < e.loopedSlides && a.push(i),
            t < n.length && t >= n.length - e.loopedSlides && s.push(i),
            r.attr("data-swiper-slide-index", t);
        });
        for (let e = 0; e < a.length; e += 1)
          i.append(q(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (let e = s.length - 1; e >= 0; e -= 1)
          i.prepend(q(s[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: n,
          allowSlidePrev: s,
          allowSlideNext: a,
          snapGrid: r,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < n) {
          (l = i.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= i.length - n) {
          (l = -i.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = a), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    var U = {
      setGrabCursor: function (e) {
        if (
          R.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode
        )
          return;
        const t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      },
      unsetGrabCursor: function () {
        R.touch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode ||
          (this.el.style.cursor = "");
      },
    };
    var K = {
      appendSlide: function (e) {
        const t = this,
          { $wrapperEl: i, params: n } = t;
        if ((n.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
        else i.append(e);
        n.loop && t.loopCreate(), (n.observer && R.observer) || t.update();
      },
      prependSlide: function (e) {
        const t = this,
          { params: i, $wrapperEl: n, activeIndex: s } = t;
        i.loop && t.loopDestroy();
        let a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && n.prepend(e[t]);
          a = s + e.length;
        } else n.prepend(e);
        i.loop && t.loopCreate(),
          (i.observer && R.observer) || t.update(),
          t.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        const i = this,
          { $wrapperEl: n, params: s, activeIndex: a } = i;
        let r = a;
        s.loop &&
          ((r -= i.loopedSlides),
          i.loopDestroy(),
          (i.slides = n.children("." + s.slideClass)));
        const o = i.slides.length;
        if (e <= 0) return void i.prependSlide(t);
        if (e >= o) return void i.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const c = [];
        for (let t = o - 1; t >= e; t -= 1) {
          const e = i.slides.eq(t);
          e.remove(), c.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
          l = r > e ? r + t.length : r;
        } else n.append(t);
        for (let e = 0; e < c.length; e += 1) n.append(c[e]);
        s.loop && i.loopCreate(),
          (s.observer && R.observer) || i.update(),
          s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
      },
      removeSlide: function (e) {
        const t = this,
          { params: i, $wrapperEl: n, activeIndex: s } = t;
        let a = s;
        i.loop &&
          ((a -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = n.children("." + i.slideClass)));
        let r,
          o = a;
        if ("object" == typeof e && "length" in e) {
          for (let i = 0; i < e.length; i += 1)
            (r = e[i]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < o && (o -= 1);
          o = Math.max(o, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < o && (o -= 1),
            (o = Math.max(o, 0));
        i.loop && t.loopCreate(),
          (i.observer && R.observer) || t.update(),
          i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
      },
      removeAllSlides: function () {
        const e = this,
          t = [];
        for (let i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t);
      },
    };
    const Q = (function () {
      const e = D.navigator.platform,
        t = D.navigator.userAgent,
        i = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!D.cordova && !D.phonegap),
          phonegap: !(!D.cordova && !D.phonegap),
          electron: !1,
        },
        n = D.screen.width,
        s = D.screen.height,
        a = t.match(/(Android);?[\s\/]+([\d.]+)?/);
      let r = t.match(/(iPad).*OS\s([\d_]+)/);
      const o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
        d = t.indexOf("Edge/") >= 0,
        u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
        h = "Win32" === e,
        p = t.toLowerCase().indexOf("electron") >= 0;
      let m = "MacIntel" === e;
      return (
        !r &&
          m &&
          R.touch &&
          ((1024 === n && 1366 === s) ||
            (834 === n && 1194 === s) ||
            (834 === n && 1112 === s) ||
            (768 === n && 1024 === s)) &&
          ((r = t.match(/(Version)\/([\d.]+)/)), (m = !1)),
        (i.ie = c),
        (i.edge = d),
        (i.firefox = u),
        a &&
          !h &&
          ((i.os = "android"),
          (i.osVersion = a[2]),
          (i.android = !0),
          (i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
        (r || l || o) && ((i.os = "ios"), (i.ios = !0)),
        l && !o && ((i.osVersion = l[2].replace(/_/g, ".")), (i.iphone = !0)),
        r && ((i.osVersion = r[2].replace(/_/g, ".")), (i.ipad = !0)),
        o &&
          ((i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null),
          (i.ipod = !0)),
        i.ios &&
          i.osVersion &&
          t.indexOf("Version/") >= 0 &&
          "10" === i.osVersion.split(".")[0] &&
          (i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
        (i.webView =
          !(
            !(l || r || o) ||
            (!t.match(/.*AppleWebKit(?!.*Safari)/i) && !D.navigator.standalone)
          ) ||
          (D.matchMedia && D.matchMedia("(display-mode: standalone)").matches)),
        (i.webview = i.webView),
        (i.standalone = i.webView),
        (i.desktop = !(i.ios || i.android) || p),
        i.desktop &&
          ((i.electron = p),
          (i.macos = m),
          (i.windows = h),
          i.macos && (i.os = "macos"),
          i.windows && (i.os = "windows")),
        (i.pixelRatio = D.devicePixelRatio || 1),
        i
      );
    })();
    function J(e) {
      const t = this,
        i = t.touchEventsData,
        { params: n, touches: s } = t;
      if (t.animating && n.preventInteractionOnTransition) return;
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      const r = q(a.target);
      if ("wrapper" === n.touchEventsTarget && !r.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === a.type),
        !i.isTouchEvent && "which" in a && 3 === a.which)
      )
        return;
      if (!i.isTouchEvent && "button" in a && a.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      if (
        n.noSwiping &&
        r.closest(
          n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass
        )[0]
      )
        return void (t.allowClick = !0);
      if (n.swipeHandler && !r.closest(n.swipeHandler)[0]) return;
      (s.currentX =
        "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
        (s.currentY =
          "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
      const o = s.currentX,
        l = s.currentY,
        c = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        d = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
      if (!c || !(o <= d || o >= D.screen.width - d)) {
        if (
          (F.extend(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (s.startX = o),
          (s.startY = l),
          (i.touchStartTime = F.now()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          n.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== a.type)
        ) {
          let e = !0;
          r.is(i.formElements) && (e = !1),
            z.activeElement &&
              q(z.activeElement).is(i.formElements) &&
              z.activeElement !== r[0] &&
              z.activeElement.blur();
          const s = e && t.allowTouchMove && n.touchStartPreventDefault;
          (n.touchStartForcePreventDefault || s) && a.preventDefault();
        }
        t.emit("touchStart", a);
      }
    }
    function Z(e) {
      const t = this,
        i = t.touchEventsData,
        { params: n, touches: s, rtlTranslate: a } = t;
      let r = e;
      if ((r.originalEvent && (r = r.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          t.emit("touchMoveOpposite", r)
        );
      if (i.isTouchEvent && "touchmove" !== r.type) return;
      const o =
          "touchmove" === r.type &&
          r.targetTouches &&
          (r.targetTouches[0] || r.changedTouches[0]),
        l = "touchmove" === r.type ? o.pageX : r.pageX,
        c = "touchmove" === r.type ? o.pageY : r.pageY;
      if (r.preventedByNestedSwiper) return (s.startX = l), void (s.startY = c);
      if (!t.allowTouchMove)
        return (
          (t.allowClick = !1),
          void (
            i.isTouched &&
            (F.extend(s, { startX: l, startY: c, currentX: l, currentY: c }),
            (i.touchStartTime = F.now()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (t.isVertical()) {
          if (
            (c < s.startY && t.translate <= t.maxTranslate()) ||
            (c > s.startY && t.translate >= t.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (l < s.startX && t.translate <= t.maxTranslate()) ||
          (l > s.startX && t.translate >= t.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        z.activeElement &&
        r.target === z.activeElement &&
        q(r.target).is(i.formElements)
      )
        return (i.isMoved = !0), void (t.allowClick = !1);
      if (
        (i.allowTouchCallbacks && t.emit("touchMove", r),
        r.targetTouches && r.targetTouches.length > 1)
      )
        return;
      (s.currentX = l), (s.currentY = c);
      const d = s.currentX - s.startX,
        u = s.currentY - s.startY;
      if (t.params.threshold && Math.sqrt(d ** 2 + u ** 2) < t.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (t.isHorizontal() && s.currentY === s.startY) ||
        (t.isVertical() && s.currentX === s.startX)
          ? (i.isScrolling = !1)
          : d * d + u * u >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(u), Math.abs(d))) / Math.PI),
            (i.isScrolling = t.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && t.emit("touchMoveOpposite", r),
        void 0 === i.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (t.allowClick = !1),
        !n.cssMode && r.cancelable && r.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && r.stopPropagation(),
        i.isMoved ||
          (n.loop && t.loopFix(),
          (i.startTranslate = t.getTranslate()),
          t.setTransition(0),
          t.animating &&
            t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
            t.setGrabCursor(!0),
          t.emit("sliderFirstMove", r)),
        t.emit("sliderMove", r),
        (i.isMoved = !0);
      let h = t.isHorizontal() ? d : u;
      (s.diff = h),
        (h *= n.touchRatio),
        a && (h = -h),
        (t.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let p = !0,
        m = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (m = 0),
        h > 0 && i.currentTranslate > t.minTranslate()
          ? ((p = !1),
            n.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + h) ** m))
          : h < 0 &&
            i.currentTranslate < t.maxTranslate() &&
            ((p = !1),
            n.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - h) ** m)),
        p && (r.preventedByNestedSwiper = !0),
        !t.allowSlideNext &&
          "next" === t.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev &&
          "prev" === t.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(h) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            void (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) &&
          (t.updateActiveIndex(), t.updateSlidesClasses()),
        n.freeMode &&
          (0 === i.velocities.length &&
            i.velocities.push({
              position: s[t.isHorizontal() ? "startX" : "startY"],
              time: i.touchStartTime,
            }),
          i.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: F.now(),
          })),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate));
    }
    function ee(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: n,
          touches: s,
          rtlTranslate: a,
          $wrapperEl: r,
          slidesGrid: o,
          snapGrid: l,
        } = t;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", c),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = F.now(),
        u = d - i.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(c),
          t.emit("tap click", c),
          u < 300 &&
            d - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c)),
        (i.lastClickTime = F.now()),
        F.nextTick(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode) {
        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (h > -t.maxTranslate())
          return void (t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (n.freeModeMomentum) {
          if (i.velocities.length > 1) {
            const e = i.velocities.pop(),
              s = i.velocities.pop(),
              a = e.position - s.position,
              r = e.time - s.time;
            (t.velocity = a / r),
              (t.velocity /= 2),
              Math.abs(t.velocity) < n.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (r > 150 || F.now() - e.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= n.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          let e = 1e3 * n.freeModeMomentumRatio;
          const s = t.velocity * e;
          let o = t.translate + s;
          a && (o = -o);
          let c,
            d = !1;
          const u = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
          let h;
          if (o < t.maxTranslate())
            n.freeModeMomentumBounce
              ? (o + t.maxTranslate() < -u && (o = t.maxTranslate() - u),
                (c = t.maxTranslate()),
                (d = !0),
                (i.allowMomentumBounce = !0))
              : (o = t.maxTranslate()),
              n.loop && n.centeredSlides && (h = !0);
          else if (o > t.minTranslate())
            n.freeModeMomentumBounce
              ? (o - t.minTranslate() > u && (o = t.minTranslate() + u),
                (c = t.minTranslate()),
                (d = !0),
                (i.allowMomentumBounce = !0))
              : (o = t.minTranslate()),
              n.loop && n.centeredSlides && (h = !0);
          else if (n.freeModeSticky) {
            let e;
            for (let t = 0; t < l.length; t += 1)
              if (l[t] > -o) {
                e = t;
                break;
              }
            (o =
              Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) ||
              "next" === t.swipeDirection
                ? l[e]
                : l[e - 1]),
              (o = -o);
          }
          if (
            (h &&
              t.once("transitionEnd", () => {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((e = a
                ? Math.abs((-o - t.translate) / t.velocity)
                : Math.abs((o - t.translate) / t.velocity)),
              n.freeModeSticky)
            ) {
              const i = Math.abs((a ? -o : o) - t.translate),
                s = t.slidesSizesGrid[t.activeIndex];
              e = i < s ? n.speed : i < 2 * s ? 1.5 * n.speed : 2.5 * n.speed;
            }
          } else if (n.freeModeSticky) return void t.slideToClosest();
          n.freeModeMomentumBounce && d
            ? (t.updateProgress(c),
              t.setTransition(e),
              t.setTranslate(o),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              r.transitionEnd(() => {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(n.speed),
                  setTimeout(() => {
                    t.setTranslate(c),
                      r.transitionEnd(() => {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(o),
              t.setTransition(e),
              t.setTranslate(o),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                r.transitionEnd(() => {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(o),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (n.freeModeSticky) return void t.slideToClosest();
        return void (
          (!n.freeModeMomentum || u >= n.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        );
      }
      let p = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? h >= o[e] && h < o[e + t] && ((p = e), (m = o[e + t] - o[e]))
          : h >= o[e] && ((p = e), (m = o[o.length - 1] - o[o.length - 2]));
      }
      const f = (h - o[p]) / m,
        g = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= n.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (f > 1 - n.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(p + g)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + g),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function te() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: s, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = n),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function ie(e) {
      const t = this;
      t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function ne() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i } = e;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = i
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let se = !1;
    function ae() {}
    var re = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    };
    const oe = {
        update: _,
        translate: G,
        transition: W,
        slide: Y,
        loop: X,
        grabCursor: U,
        manipulation: K,
        events: {
          attachEvents: function () {
            const e = this,
              { params: t, touchEvents: i, el: n, wrapperEl: s } = e;
            (e.onTouchStart = J.bind(e)),
              (e.onTouchMove = Z.bind(e)),
              (e.onTouchEnd = ee.bind(e)),
              t.cssMode && (e.onScroll = ne.bind(e)),
              (e.onClick = ie.bind(e));
            const a = !!t.nested;
            if (!R.touch && R.pointerEvents)
              n.addEventListener(i.start, e.onTouchStart, !1),
                z.addEventListener(i.move, e.onTouchMove, a),
                z.addEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (R.touch) {
                const s = !(
                  "touchstart" !== i.start ||
                  !R.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                n.addEventListener(i.start, e.onTouchStart, s),
                  n.addEventListener(
                    i.move,
                    e.onTouchMove,
                    R.passiveListener ? { passive: !1, capture: a } : a
                  ),
                  n.addEventListener(i.end, e.onTouchEnd, s),
                  i.cancel && n.addEventListener(i.cancel, e.onTouchEnd, s),
                  se || (z.addEventListener("touchstart", ae), (se = !0));
              }
              ((t.simulateTouch && !Q.ios && !Q.android) ||
                (t.simulateTouch && !R.touch && Q.ios)) &&
                (n.addEventListener("mousedown", e.onTouchStart, !1),
                z.addEventListener("mousemove", e.onTouchMove, a),
                z.addEventListener("mouseup", e.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              n.addEventListener("click", e.onClick, !0),
              t.cssMode && s.addEventListener("scroll", e.onScroll),
              t.updateOnWindowResize
                ? e.on(
                    Q.ios || Q.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    te,
                    !0
                  )
                : e.on("observerUpdate", te, !0);
          },
          detachEvents: function () {
            const e = this,
              { params: t, touchEvents: i, el: n, wrapperEl: s } = e,
              a = !!t.nested;
            if (!R.touch && R.pointerEvents)
              n.removeEventListener(i.start, e.onTouchStart, !1),
                z.removeEventListener(i.move, e.onTouchMove, a),
                z.removeEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (R.touch) {
                const s = !(
                  "onTouchStart" !== i.start ||
                  !R.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                n.removeEventListener(i.start, e.onTouchStart, s),
                  n.removeEventListener(i.move, e.onTouchMove, a),
                  n.removeEventListener(i.end, e.onTouchEnd, s),
                  i.cancel && n.removeEventListener(i.cancel, e.onTouchEnd, s);
              }
              ((t.simulateTouch && !Q.ios && !Q.android) ||
                (t.simulateTouch && !R.touch && Q.ios)) &&
                (n.removeEventListener("mousedown", e.onTouchStart, !1),
                z.removeEventListener("mousemove", e.onTouchMove, a),
                z.removeEventListener("mouseup", e.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              n.removeEventListener("click", e.onClick, !0),
              t.cssMode && s.removeEventListener("scroll", e.onScroll),
              e.off(
                Q.ios || Q.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                te
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: i,
                loopedSlides: n = 0,
                params: s,
                $el: a,
              } = e,
              r = s.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r);
            if (o && e.currentBreakpoint !== o) {
              const l = o in r ? r[o] : void 0;
              l &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach((e) => {
                  const t = l[e];
                  void 0 !== t &&
                    (l[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              const c = l || e.originalParams,
                d = s.slidesPerColumn > 1,
                u = c.slidesPerColumn > 1;
              d && !u
                ? a.removeClass(
                    `${s.containerModifierClass}multirow ${s.containerModifierClass}multirow-column`
                  )
                : !d &&
                  u &&
                  (a.addClass(s.containerModifierClass + "multirow"),
                  "column" === c.slidesPerColumnFill &&
                    a.addClass(s.containerModifierClass + "multirow-column"));
              const h = c.direction && c.direction !== s.direction,
                p = s.loop && (c.slidesPerView !== s.slidesPerView || h);
              h && i && e.changeDirection(),
                F.extend(e.params, c),
                F.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = o),
                p &&
                  i &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - n + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", c);
            }
          },
          getBreakpoint: function (e) {
            if (!e) return;
            let t = !1;
            const i = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: D.innerHeight * t, point: e };
              }
              return { value: e, point: e };
            });
            i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < i.length; e += 1) {
              const { point: n, value: s } = i[e];
              s <= D.innerWidth && (t = n);
            }
            return t || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              t = e.params,
              i = e.isLocked,
              n =
                e.slides.length > 0 &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && n
              ? (e.isLocked = n <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              i && i !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            const { classNames: e, params: t, rtl: i, $el: n } = this,
              s = [];
            s.push("initialized"),
              s.push(t.direction),
              t.freeMode && s.push("free-mode"),
              t.autoHeight && s.push("autoheight"),
              i && s.push("rtl"),
              t.slidesPerColumn > 1 &&
                (s.push("multirow"),
                "column" === t.slidesPerColumnFill &&
                  s.push("multirow-column")),
              Q.android && s.push("android"),
              Q.ios && s.push("ios"),
              t.cssMode && s.push("css-mode"),
              s.forEach((i) => {
                e.push(t.containerModifierClass + i);
              }),
              n.addClass(e.join(" "));
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" "));
          },
        },
        images: {
          loadImage: function (e, t, i, n, s, a) {
            let r;
            function o() {
              a && a();
            }
            q(e).parent("picture")[0] || (e.complete && s)
              ? o()
              : t
              ? ((r = new D.Image()),
                (r.onload = o),
                (r.onerror = o),
                n && (r.sizes = n),
                i && (r.srcset = i),
                t && (r.src = t))
              : o();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const n = e.imagesToLoad[i];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      le = {};
    class ce extends V {
      constructor(...e) {
        let t, i;
        1 === e.length && e[0].constructor && e[0].constructor === Object
          ? (i = e[0])
          : ([t, i] = e),
          i || (i = {}),
          (i = F.extend({}, i)),
          t && !i.el && (i.el = t),
          super(i),
          Object.keys(oe).forEach((e) => {
            Object.keys(oe[e]).forEach((t) => {
              ce.prototype[t] || (ce.prototype[t] = oe[e][t]);
            });
          });
        const n = this;
        void 0 === n.modules && (n.modules = {}),
          Object.keys(n.modules).forEach((e) => {
            const t = n.modules[e];
            if (t.params) {
              const e = Object.keys(t.params)[0],
                n = t.params[e];
              if ("object" != typeof n || null === n) return;
              if (!(e in i) || !("enabled" in n)) return;
              !0 === i[e] && (i[e] = { enabled: !0 }),
                "object" != typeof i[e] ||
                  "enabled" in i[e] ||
                  (i[e].enabled = !0),
                i[e] || (i[e] = { enabled: !1 });
            }
          });
        const s = F.extend({}, re);
        n.useModulesParams(s),
          (n.params = F.extend({}, s, le, i)),
          (n.originalParams = F.extend({}, n.params)),
          (n.passedParams = F.extend({}, i)),
          (n.$ = q);
        const a = q(n.params.el);
        if (((t = a[0]), !t)) return;
        if (a.length > 1) {
          const e = [];
          return (
            a.each((t, n) => {
              const s = F.extend({}, i, { el: n });
              e.push(new ce(s));
            }),
            e
          );
        }
        let r;
        return (
          (t.swiper = n),
          a.data("swiper", n),
          t && t.shadowRoot && t.shadowRoot.querySelector
            ? ((r = q(t.shadowRoot.querySelector("." + n.params.wrapperClass))),
              (r.children = (e) => a.children(e)))
            : (r = a.children("." + n.params.wrapperClass)),
          F.extend(n, {
            $el: a,
            el: t,
            $wrapperEl: r,
            wrapperEl: r[0],
            classNames: [],
            slides: q(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
            rtlTranslate:
              "horizontal" === n.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
              let t = ["mousedown", "mousemove", "mouseup"];
              return (
                R.pointerEvents &&
                  (t = ["pointerdown", "pointermove", "pointerup"]),
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                R.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements:
                "input, select, option, textarea, button, video, label",
              lastClickTime: F.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.useModules(),
          n.params.init && n.init(),
          n
        );
      }
      slidesPerViewDynamic() {
        const {
          params: e,
          slides: t,
          slidesGrid: i,
          size: n,
          activeIndex: s,
        } = this;
        let a = 1;
        if (e.centeredSlides) {
          let e,
            i = t[s].swiperSlideSize;
          for (let r = s + 1; r < t.length; r += 1)
            t[r] &&
              !e &&
              ((i += t[r].swiperSlideSize), (a += 1), i > n && (e = !0));
          for (let r = s - 1; r >= 0; r -= 1)
            t[r] &&
              !e &&
              ((i += t[r].swiperSlideSize), (a += 1), i > n && (e = !0));
        } else
          for (let e = s + 1; e < t.length; e += 1) i[e] - i[s] < n && (a += 1);
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || n()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${n}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            (i.params.direction = e),
            i.slides.each((t, i) => {
              "vertical" === e ? (i.style.width = "") : (i.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      init() {
        const e = this;
        e.initialized ||
          (e.emit("beforeInit"),
          e.params.breakpoints && e.setBreakpoint(),
          e.addClasses(),
          e.params.loop && e.loopCreate(),
          e.updateSize(),
          e.updateSlides(),
          e.params.watchOverflow && e.checkOverflow(),
          e.params.grabCursor && e.setGrabCursor(),
          e.params.preloadImages && e.preloadImages(),
          e.params.loop
            ? e.slideTo(
                e.params.initialSlide + e.loopedSlides,
                0,
                e.params.runCallbacksOnInit
              )
            : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
          e.attachEvents(),
          (e.initialized = !0),
          e.emit("init"));
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: n, $el: s, $wrapperEl: a, slides: r } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              s.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              i.$el.data("swiper", null),
              F.deleteProps(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        F.extend(le, e);
      }
      static get extendedDefaults() {
        return le;
      }
      static get defaults() {
        return re;
      }
      static get Class() {
        return V;
      }
      static get $() {
        return q;
      }
    }
    var de = { name: "device", proto: { device: Q }, static: { device: Q } },
      ue = { name: "support", proto: { support: R }, static: { support: R } };
    const he = {
      isEdge: !!D.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        const e = D.navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        D.navigator.userAgent
      ),
    };
    var pe = {
        name: "browser",
        proto: { browser: he },
        static: { browser: he },
      },
      me = {
        name: "resize",
        create() {
          const e = this;
          F.extend(e, {
            resize: {
              resizeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init() {
            D.addEventListener("resize", this.resize.resizeHandler),
              D.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy() {
            D.removeEventListener("resize", this.resize.resizeHandler),
              D.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      };
    const fe = {
      func: D.MutationObserver || D.WebkitMutationObserver,
      attach(e, t = {}) {
        const i = this,
          n = new (0, fe.func)((e) => {
            if (1 === e.length) return void i.emit("observerUpdate", e[0]);
            const t = function () {
              i.emit("observerUpdate", e[0]);
            };
            D.requestAnimationFrame
              ? D.requestAnimationFrame(t)
              : D.setTimeout(t, 0);
          });
        n.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(n);
      },
      init() {
        const e = this;
        if (R.observer && e.params.observer) {
          if (e.params.observeParents) {
            const t = e.$el.parents();
            for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy() {
        this.observer.observers.forEach((e) => {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    };
    var ge = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create() {
        F.extend(this, {
          observer: {
            init: fe.init.bind(this),
            attach: fe.attach.bind(this),
            destroy: fe.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init() {
          this.observer.init();
        },
        destroy() {
          this.observer.destroy();
        },
      },
    };
    const ve = {
      update(e) {
        const t = this,
          { slidesPerView: i, slidesPerGroup: n, centeredSlides: s } = t.params,
          { addSlidesBefore: a, addSlidesAfter: r } = t.params.virtual,
          {
            from: o,
            to: l,
            slides: c,
            slidesGrid: d,
            renderSlide: u,
            offset: h,
          } = t.virtual;
        t.updateActiveIndex();
        const p = t.activeIndex || 0;
        let m, f, g;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          s
            ? ((f = Math.floor(i / 2) + n + a), (g = Math.floor(i / 2) + n + r))
            : ((f = i + (n - 1) + a), (g = n + r));
        const v = Math.max((p || 0) - g, 0),
          y = Math.min((p || 0) + f, c.length - 1),
          b = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);
        function w() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (F.extend(t.virtual, {
            from: v,
            to: y,
            offset: b,
            slidesGrid: t.slidesGrid,
          }),
          o === v && l === y && !e)
        )
          return (
            t.slidesGrid !== d && b !== h && t.slides.css(m, b + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: b,
              from: v,
              to: y,
              slides: (function () {
                const e = [];
                for (let t = v; t <= y; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void w()
          );
        const T = [],
          E = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (let e = o; e <= l; e += 1)
            (e < v || e > y) &&
              t.$wrapperEl
                .find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < c.length; t += 1)
          t >= v &&
            t <= y &&
            (void 0 === l || e
              ? E.push(t)
              : (t > l && E.push(t), t < o && T.push(t)));
        E.forEach((e) => {
          t.$wrapperEl.append(u(c[e], e));
        }),
          T.sort((e, t) => t - e).forEach((e) => {
            t.$wrapperEl.prepend(u(c[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, b + "px"),
          w();
      },
      renderSlide(e, t) {
        const i = this,
          n = i.params.virtual;
        if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
        const s = n.renderSlide
          ? q(n.renderSlide.call(i, e, t))
          : q(
              `<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          n.cache && (i.virtual.cache[t] = s),
          s
        );
      },
      appendSlide(e) {
        const t = this;
        if ("object" == typeof e && "length" in e)
          for (let i = 0; i < e.length; i += 1)
            e[i] && t.virtual.slides.push(e[i]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide(e) {
        const t = this,
          i = t.activeIndex;
        let n = i + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i += 1)
            e[i] && t.virtual.slides.unshift(e[i]);
          (n = i + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          const e = t.virtual.cache,
            i = {};
          Object.keys(e).forEach((t) => {
            const n = e[t],
              a = n.attr("data-swiper-slide-index");
            a && n.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (i[parseInt(t, 10) + s] = n);
          }),
            (t.virtual.cache = i);
        }
        t.virtual.update(!0), t.slideTo(n, 0);
      },
      removeSlide(e) {
        const t = this;
        if (null == e) return;
        let i = t.activeIndex;
        if (Array.isArray(e))
          for (let n = e.length - 1; n >= 0; n -= 1)
            t.virtual.slides.splice(e[n], 1),
              t.params.virtual.cache && delete t.virtual.cache[e[n]],
              e[n] < i && (i -= 1),
              (i = Math.max(i, 0));
        else
          t.virtual.slides.splice(e, 1),
            t.params.virtual.cache && delete t.virtual.cache[e],
            e < i && (i -= 1),
            (i = Math.max(i, 0));
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeAllSlides() {
        const e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    };
    var ye = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create() {
        F.extend(this, {
          virtual: {
            update: ve.update.bind(this),
            appendSlide: ve.appendSlide.bind(this),
            prependSlide: ve.prependSlide.bind(this),
            removeSlide: ve.removeSlide.bind(this),
            removeAllSlides: ve.removeAllSlides.bind(this),
            renderSlide: ve.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit() {
          const e = this;
          if (!e.params.virtual.enabled) return;
          e.classNames.push(e.params.containerModifierClass + "virtual");
          const t = { watchSlidesProgress: !0 };
          F.extend(e.params, t),
            F.extend(e.originalParams, t),
            e.params.initialSlide || e.virtual.update();
        },
        setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    };
    const be = {
      handle(e) {
        const t = this,
          { rtlTranslate: i } = t;
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const s = n.keyCode || n.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === s) ||
            (t.isVertical() && 40 === s) ||
            34 === s)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === s) ||
            (t.isVertical() && 38 === s) ||
            33 === s)
        )
          return !1;
        if (
          !(
            n.shiftKey ||
            n.altKey ||
            n.ctrlKey ||
            n.metaKey ||
            (z.activeElement &&
              z.activeElement.nodeName &&
              ("input" === z.activeElement.nodeName.toLowerCase() ||
                "textarea" === z.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (33 === s ||
              34 === s ||
              37 === s ||
              39 === s ||
              38 === s ||
              40 === s)
          ) {
            let e = !1;
            if (
              t.$el.parents("." + t.params.slideClass).length > 0 &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            const n = D.innerWidth,
              s = D.innerHeight,
              a = t.$el.offset();
            i && (a.left -= t.$el[0].scrollLeft);
            const r = [
              [a.left, a.top],
              [a.left + t.width, a.top],
              [a.left, a.top + t.height],
              [a.left + t.width, a.top + t.height],
            ];
            for (let t = 0; t < r.length; t += 1) {
              const i = r[t];
              i[0] >= 0 && i[0] <= n && i[1] >= 0 && i[1] <= s && (e = !0);
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((33 !== s && 34 !== s && 37 !== s && 39 !== s) ||
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (((34 !== s && 39 !== s) || i) &&
                ((33 !== s && 37 !== s) || !i)) ||
                t.slideNext(),
              (((33 !== s && 37 !== s) || i) &&
                ((34 !== s && 39 !== s) || !i)) ||
                t.slidePrev())
            : ((33 !== s && 34 !== s && 38 !== s && 40 !== s) ||
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (34 !== s && 40 !== s) || t.slideNext(),
              (33 !== s && 38 !== s) || t.slidePrev()),
            t.emit("keyPress", s);
        }
      },
      enable() {
        this.keyboard.enabled ||
          (q(z).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable() {
        this.keyboard.enabled &&
          (q(z).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    };
    var we = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create() {
        F.extend(this, {
          keyboard: {
            enabled: !1,
            enable: be.enable.bind(this),
            disable: be.disable.bind(this),
            handle: be.handle.bind(this),
          },
        });
      },
      on: {
        init() {
          const e = this;
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy() {
          const e = this;
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
    const Te = {
      lastScrollTime: F.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: () =>
        D.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              let e = "onwheel" in z;
              if (!e) {
                const t = z.createElement("div");
                t.setAttribute("onwheel", "return;"),
                  (e = "function" == typeof t.onwheel);
              }
              return (
                !e &&
                  z.implementation &&
                  z.implementation.hasFeature &&
                  !0 !== z.implementation.hasFeature("", "") &&
                  (e = z.implementation.hasFeature("Events.wheel", "3.0")),
                e
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize(e) {
        let t = 0,
          i = 0,
          n = 0,
          s = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (n = 10 * t),
          (s = 10 * i),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (n = e.deltaX),
          e.shiftKey && !n && ((n = s), (s = 0)),
          (n || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((n *= 40), (s *= 40))
              : ((n *= 800), (s *= 800))),
          n && !t && (t = n < 1 ? -1 : 1),
          s && !i && (i = s < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: n, pixelY: s }
        );
      },
      handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle(e) {
        let t = e;
        const i = this,
          n = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        let s = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarged &&
            (s = q(i.params.mousewheel.eventsTarged)),
          !i.mouseEntered && !s[0].contains(t.target) && !n.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        let a = 0;
        const r = i.rtlTranslate ? -1 : 1,
          o = Te.normalize(t);
        if (n.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            a = o.pixelX * r;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            a = o.pixelY;
          }
        else
          a =
            Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
        if (0 === a) return !0;
        if ((n.invert && (a = -a), i.params.freeMode)) {
          const e = {
              time: F.now(),
              delta: Math.abs(a),
              direction: Math.sign(a),
            },
            { lastEventBeforeSnap: s } = i.mousewheel,
            r =
              s &&
              e.time < s.time + 500 &&
              e.delta <= s.delta &&
              e.direction === s.direction;
          if (!r) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            let s = i.getTranslate() + a * n.sensitivity;
            const o = i.isBeginning,
              l = i.isEnd;
            if (
              (s >= i.minTranslate() && (s = i.minTranslate()),
              s <= i.maxTranslate() && (s = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(s),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!o && i.isBeginning) || (!l && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              const t = i.mousewheel.recentWheelEvents;
              t.length >= 15 && t.shift();
              const n = t.length ? t[t.length - 1] : void 0,
                s = t[0];
              if (
                (t.push(e),
                n && (e.delta > n.delta || e.direction !== n.direction))
              )
                t.splice(0);
              else if (
                t.length >= 15 &&
                e.time - s.time < 500 &&
                s.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const n = a > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = e),
                  t.splice(0),
                  (i.mousewheel.timeout = F.nextTick(() => {
                    i.slideToClosest(i.params.speed, !0, void 0, n);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = F.nextTick(() => {
                  (i.mousewheel.lastEventBeforeSnap = e),
                    t.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (r || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              s === i.minTranslate() || s === i.maxTranslate())
            )
              return !0;
          }
        } else {
          const t = {
              time: F.now(),
              delta: Math.abs(a),
              direction: Math.sign(a),
              raw: e,
            },
            n = i.mousewheel.recentWheelEvents;
          n.length >= 2 && n.shift();
          const s = n.length ? n[n.length - 1] : void 0;
          if (
            (n.push(t),
            s
              ? (t.direction !== s.direction ||
                  t.delta > s.delta ||
                  t.time > s.time + 150) &&
                i.mousewheel.animateSlider(t)
              : i.mousewheel.animateSlider(t),
            i.mousewheel.releaseScroll(t))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider(e) {
        const t = this;
        return (
          (e.delta >= 6 && F.now() - t.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), t.emit("scroll", e.raw))
            : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), t.emit("scroll", e.raw)),
          (t.mousewheel.lastScrollTime = new D.Date().getTime()),
          !1)
        );
      },
      releaseScroll(e) {
        const t = this,
          i = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges)
          return !0;
        return !1;
      },
      enable() {
        const e = this,
          t = Te.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        let i = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (i = q(e.params.mousewheel.eventsTarged)),
          i.on("mouseenter", e.mousewheel.handleMouseEnter),
          i.on("mouseleave", e.mousewheel.handleMouseLeave),
          i.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable() {
        const e = this,
          t = Te.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        let i = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (i = q(e.params.mousewheel.eventsTarged)),
          i.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    };
    const Ee = {
      update() {
        const e = this,
          t = e.params.navigation;
        if (e.params.loop) return;
        const { $nextEl: i, $prevEl: n } = e.navigation;
        n &&
          n.length > 0 &&
          (e.isBeginning
            ? n.addClass(t.disabledClass)
            : n.removeClass(t.disabledClass),
          n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            t.lockClass
          )),
          i &&
            i.length > 0 &&
            (e.isEnd
              ? i.addClass(t.disabledClass)
              : i.removeClass(t.disabledClass),
            i[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass));
      },
      onPrevClick(e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick(e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init() {
        const e = this,
          t = e.params.navigation;
        if (!t.nextEl && !t.prevEl) return;
        let i, n;
        t.nextEl &&
          ((i = q(t.nextEl)),
          e.params.uniqueNavElements &&
            "string" == typeof t.nextEl &&
            i.length > 1 &&
            1 === e.$el.find(t.nextEl).length &&
            (i = e.$el.find(t.nextEl))),
          t.prevEl &&
            ((n = q(t.prevEl)),
            e.params.uniqueNavElements &&
              "string" == typeof t.prevEl &&
              n.length > 1 &&
              1 === e.$el.find(t.prevEl).length &&
              (n = e.$el.find(t.prevEl))),
          i && i.length > 0 && i.on("click", e.navigation.onNextClick),
          n && n.length > 0 && n.on("click", e.navigation.onPrevClick),
          F.extend(e.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: n,
            prevEl: n && n[0],
          });
      },
      destroy() {
        const e = this,
          { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t.length &&
          (t.off("click", e.navigation.onNextClick),
          t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    };
    const Se = {
      update() {
        const e = this,
          t = e.rtl,
          i = e.params.pagination;
        if (
          !i.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          s = e.pagination.$el;
        let a;
        const r = e.params.loop
          ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((a = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              a > n - 1 - 2 * e.loopedSlides && (a -= n - 2 * e.loopedSlides),
              a > r - 1 && (a -= r),
              a < 0 && "bullets" !== e.params.paginationType && (a = r + a))
            : (a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === i.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let r, o, l;
          if (
            (i.dynamicBullets &&
              ((e.pagination.bulletSize = n
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              s.css(
                e.isHorizontal() ? "width" : "height",
                e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
              ),
              i.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((e.pagination.dynamicBulletIndex += a - e.previousIndex),
                e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                  ? (e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1)
                  : e.pagination.dynamicBulletIndex < 0 &&
                    (e.pagination.dynamicBulletIndex = 0)),
              (r = a - e.pagination.dynamicBulletIndex),
              (o = r + (Math.min(n.length, i.dynamicMainBullets) - 1)),
              (l = (o + r) / 2)),
            n.removeClass(
              `${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`
            ),
            s.length > 1)
          )
            n.each((e, t) => {
              const n = q(t),
                s = n.index();
              s === a && n.addClass(i.bulletActiveClass),
                i.dynamicBullets &&
                  (s >= r &&
                    s <= o &&
                    n.addClass(i.bulletActiveClass + "-main"),
                  s === r &&
                    n
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev"),
                  s === o &&
                    n
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next"));
            });
          else {
            const t = n.eq(a),
              s = t.index();
            if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
              const t = n.eq(r),
                a = n.eq(o);
              for (let e = r; e <= o; e += 1)
                n.eq(e).addClass(i.bulletActiveClass + "-main");
              if (e.params.loop)
                if (s >= n.length - i.dynamicMainBullets) {
                  for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(i.bulletActiveClass + "-main");
                  n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                    i.bulletActiveClass + "-prev"
                  );
                } else
                  t
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev-prev"),
                    a
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next");
              else
                t
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev-prev"),
                  a
                    .next()
                    .addClass(i.bulletActiveClass + "-next")
                    .next()
                    .addClass(i.bulletActiveClass + "-next-next");
            }
          }
          if (i.dynamicBullets) {
            const s = Math.min(n.length, i.dynamicMainBullets + 4),
              a =
                (e.pagination.bulletSize * s - e.pagination.bulletSize) / 2 -
                l * e.pagination.bulletSize,
              r = t ? "right" : "left";
            n.css(e.isHorizontal() ? r : "top", a + "px");
          }
        }
        if (
          ("fraction" === i.type &&
            (s.find("." + i.currentClass).text(i.formatFractionCurrent(a + 1)),
            s.find("." + i.totalClass).text(i.formatFractionTotal(r))),
          "progressbar" === i.type)
        ) {
          let t;
          t = i.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (a + 1) / r;
          let o = 1,
            l = 1;
          "horizontal" === t ? (o = n) : (l = n),
            s
              .find("." + i.progressbarFillClass)
              .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
              .transition(e.params.speed);
        }
        "custom" === i.type && i.renderCustom
          ? (s.html(i.renderCustom(e, a + 1, r)),
            e.emit("paginationRender", e, s[0]))
          : e.emit("paginationUpdate", e, s[0]),
          s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            i.lockClass
          );
      },
      render() {
        const e = this,
          t = e.params.pagination;
        if (
          !t.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          n = e.pagination.$el;
        let s = "";
        if ("bullets" === t.type) {
          const a = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          for (let i = 0; i < a; i += 1)
            t.renderBullet
              ? (s += t.renderBullet.call(e, i, t.bulletClass))
              : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          n.html(s), (e.pagination.bullets = n.find("." + t.bulletClass));
        }
        "fraction" === t.type &&
          ((s = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          n.html(s)),
          "progressbar" === t.type &&
            ((s = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            n.html(s)),
          "custom" !== t.type &&
            e.emit("paginationRender", e.pagination.$el[0]);
      },
      init() {
        const e = this,
          t = e.params.pagination;
        if (!t.el) return;
        let i = q(t.el);
        0 !== i.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            i.length > 1 &&
            1 === e.$el.find(t.el).length &&
            (i = e.$el.find(t.el)),
          "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
          i.addClass(t.modifierClass + t.type),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (e.pagination.dynamicBulletIndex = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            i.addClass(t.progressbarOppositeClass),
          t.clickable &&
            i.on("click", "." + t.bulletClass, function (t) {
              t.preventDefault();
              let i = q(this).index() * e.params.slidesPerGroup;
              e.params.loop && (i += e.loopedSlides), e.slideTo(i);
            }),
          F.extend(e.pagination, { $el: i, el: i[0] }));
      },
      destroy() {
        const e = this.params.pagination;
        if (
          !e.el ||
          !this.pagination.el ||
          !this.pagination.$el ||
          0 === this.pagination.$el.length
        )
          return;
        const t = this.pagination.$el;
        t.removeClass(e.hiddenClass),
          t.removeClass(e.modifierClass + e.type),
          this.pagination.bullets &&
            this.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && t.off("click", "." + e.bulletClass);
      },
    };
    const xe = {
      setTranslate() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: i, progress: n } = e,
          { dragSize: s, trackSize: a, $dragEl: r, $el: o } = t,
          l = e.params.scrollbar;
        let c = s,
          d = (a - s) * n;
        i
          ? ((d = -d),
            d > 0 ? ((c = s - d), (d = 0)) : -d + s > a && (c = a + d))
          : d < 0
          ? ((c = s + d), (d = 0))
          : d + s > a && (c = a - d),
          e.isHorizontal()
            ? (r.transform(`translate3d(${d}px, 0, 0)`),
              (r[0].style.width = c + "px"))
            : (r.transform(`translate3d(0px, ${d}px, 0)`),
              (r[0].style.height = c + "px")),
          l.hide &&
            (clearTimeout(e.scrollbar.timeout),
            (o[0].style.opacity = 1),
            (e.scrollbar.timeout = setTimeout(() => {
              (o[0].style.opacity = 0), o.transition(400);
            }, 1e3)));
      },
      setTransition(e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { $dragEl: i, $el: n } = t;
        (i[0].style.width = ""), (i[0].style.height = "");
        const s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
          a = e.size / e.virtualSize,
          r = a * (s / e.size);
        let o;
        (o =
          "auto" === e.params.scrollbar.dragSize
            ? s * a
            : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (i[0].style.width = o + "px")
            : (i[0].style.height = o + "px"),
          (n[0].style.display = a >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (n[0].style.opacity = 0),
          F.extend(t, {
            trackSize: s,
            divider: a,
            moveDivider: r,
            dragSize: o,
          }),
          t.$el[
            e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
          ](e.params.scrollbar.lockClass);
      },
      getPointerPosition(e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition(e) {
        const { scrollbar: t, rtlTranslate: i } = this,
          { $el: n, dragSize: s, trackSize: a, dragStartPos: r } = t;
        let o;
        (o =
          (t.getPointerPosition(e) -
            n.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== r ? r : s / 2)) /
          (a - s)),
          (o = Math.max(Math.min(o, 1), 0)),
          i && (o = 1 - o);
        const l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart(e) {
        const t = this,
          i = t.params.scrollbar,
          { scrollbar: n, $wrapperEl: s } = t,
          { $el: a, $dragEl: r } = n;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? n.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          n.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          a.transition(0),
          i.hide && a.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove(e) {
        const { scrollbar: t, $wrapperEl: i } = this,
          { $el: n, $dragEl: s } = t;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          n.transition(0),
          s.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd(e) {
        const t = this,
          i = t.params.scrollbar,
          { scrollbar: n, $wrapperEl: s } = t,
          { $el: a } = n;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          i.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = F.nextTick(() => {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          i.snapOnRelease && t.slideToClosest());
      },
      enableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: i,
            touchEventsDesktop: n,
            params: s,
          } = e,
          a = t.$el[0],
          r = !(!R.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          o = !(!R.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        R.touch
          ? (a.addEventListener(i.start, e.scrollbar.onDragStart, r),
            a.addEventListener(i.move, e.scrollbar.onDragMove, r),
            a.addEventListener(i.end, e.scrollbar.onDragEnd, o))
          : (a.addEventListener(n.start, e.scrollbar.onDragStart, r),
            z.addEventListener(n.move, e.scrollbar.onDragMove, r),
            z.addEventListener(n.end, e.scrollbar.onDragEnd, o));
      },
      disableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: i,
            touchEventsDesktop: n,
            params: s,
          } = e,
          a = t.$el[0],
          r = !(!R.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          o = !(!R.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        R.touch
          ? (a.removeEventListener(i.start, e.scrollbar.onDragStart, r),
            a.removeEventListener(i.move, e.scrollbar.onDragMove, r),
            a.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
          : (a.removeEventListener(n.start, e.scrollbar.onDragStart, r),
            z.removeEventListener(n.move, e.scrollbar.onDragMove, r),
            z.removeEventListener(n.end, e.scrollbar.onDragEnd, o));
      },
      init() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const { scrollbar: t, $el: i } = e,
          n = e.params.scrollbar;
        let s = q(n.el);
        e.params.uniqueNavElements &&
          "string" == typeof n.el &&
          s.length > 1 &&
          1 === i.find(n.el).length &&
          (s = i.find(n.el));
        let a = s.find("." + e.params.scrollbar.dragClass);
        0 === a.length &&
          ((a = q(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          s.append(a)),
          F.extend(t, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
          n.draggable && t.enableDraggable();
      },
      destroy() {
        this.scrollbar.disableDraggable();
      },
    };
    const Ce = {
      setTransform(e, t) {
        const { rtl: i } = this,
          n = q(e),
          s = i ? -1 : 1,
          a = n.attr("data-swiper-parallax") || "0";
        let r = n.attr("data-swiper-parallax-x"),
          o = n.attr("data-swiper-parallax-y");
        const l = n.attr("data-swiper-parallax-scale"),
          c = n.attr("data-swiper-parallax-opacity");
        if (
          (r || o
            ? ((r = r || "0"), (o = o || "0"))
            : this.isHorizontal()
            ? ((r = a), (o = "0"))
            : ((o = a), (r = "0")),
          (r =
            r.indexOf("%") >= 0
              ? parseInt(r, 10) * t * s + "%"
              : r * t * s + "px"),
          (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
          null != c)
        ) {
          const e = c - (c - 1) * (1 - Math.abs(t));
          n[0].style.opacity = e;
        }
        if (null == l) n.transform(`translate3d(${r}, ${o}, 0px)`);
        else {
          const e = l - (l - 1) * (1 - Math.abs(t));
          n.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`);
        }
      },
      setTranslate() {
        const e = this,
          { $el: t, slides: i, progress: n, snapGrid: s } = e;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((t, i) => {
            e.parallax.setTransform(i, n);
          }),
          i.each((t, i) => {
            let a = i.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (a += Math.ceil(t / 2) - n * (s.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              q(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((t, i) => {
                  e.parallax.setTransform(i, a);
                });
          });
      },
      setTransition(e = this.params.speed) {
        const { $el: t } = this;
        t.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((t, i) => {
          const n = q(i);
          let s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), n.transition(s);
        });
      },
    };
    const ke = {
      getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          n = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt((n - t) ** 2 + (s - i) ** 2);
      },
      onGestureStart(e) {
        const t = this,
          i = t.params.zoom,
          n = t.zoom,
          { gesture: s } = n;
        if (
          ((n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1), !R.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (n.fakeGestureTouched = !0),
            (s.scaleStart = ke.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = q(e.target).closest("." + t.params.slideClass)),
        0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
        (s.$imageEl = s.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl && s.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange(e) {
        const t = this.params.zoom,
          i = this.zoom,
          { gesture: n } = i;
        if (!R.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (n.scaleMove = ke.getDistanceBetweenTouches(e));
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((i.scale = R.gestures
            ? e.scale * i.currentScale
            : (n.scaleMove / n.scaleStart) * i.currentScale),
          i.scale > n.maxRatio &&
            (i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** 0.5),
          i.scale < t.minRatio &&
            (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** 0.5),
          n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
      },
      onGestureEnd(e) {
        const t = this.params.zoom,
          i = this.zoom,
          { gesture: n } = i;
        if (!R.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !Q.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio)),
          n.$imageEl
            .transition(this.params.speed)
            .transform(`translate3d(0,0,0) scale(${i.scale})`),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (n.$slideEl = void 0));
      },
      onTouchStart(e) {
        const t = this.zoom,
          { gesture: i, image: n } = t;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (n.isTouched ||
            (Q.android && e.cancelable && e.preventDefault(),
            (n.isTouched = !0),
            (n.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (n.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove(e) {
        const t = this,
          i = t.zoom,
          { gesture: n, image: s, velocity: a } = i;
        if (!n.$imageEl || 0 === n.$imageEl.length) return;
        if (((t.allowClick = !1), !s.isTouched || !n.$slideEl)) return;
        s.isMoved ||
          ((s.width = n.$imageEl[0].offsetWidth),
          (s.height = n.$imageEl[0].offsetHeight),
          (s.startX = F.getTranslate(n.$imageWrapEl[0], "x") || 0),
          (s.startY = F.getTranslate(n.$imageWrapEl[0], "y") || 0),
          (n.slideWidth = n.$slideEl[0].offsetWidth),
          (n.slideHeight = n.$slideEl[0].offsetHeight),
          n.$imageWrapEl.transition(0),
          t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
        const r = s.width * i.scale,
          o = s.height * i.scale;
        if (!(r < n.slideWidth && o < n.slideHeight)) {
          if (
            ((s.minX = Math.min(n.slideWidth / 2 - r / 2, 0)),
            (s.maxX = -s.minX),
            (s.minY = Math.min(n.slideHeight / 2 - o / 2, 0)),
            (s.maxY = -s.minY),
            (s.touchesCurrent.x =
              "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesCurrent.y =
              "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
            !s.isMoved && !i.isScaling)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(s.minX) === Math.floor(s.startX) &&
                s.touchesCurrent.x < s.touchesStart.x) ||
                (Math.floor(s.maxX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x > s.touchesStart.x))
            )
              return void (s.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(s.minY) === Math.floor(s.startY) &&
                s.touchesCurrent.y < s.touchesStart.y) ||
                (Math.floor(s.maxY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y > s.touchesStart.y))
            )
              return void (s.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (s.isMoved = !0),
            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
            s.currentX < s.minX &&
              (s.currentX = s.minX + 1 - (s.minX - s.currentX + 1) ** 0.8),
            s.currentX > s.maxX &&
              (s.currentX = s.maxX - 1 + (s.currentX - s.maxX + 1) ** 0.8),
            s.currentY < s.minY &&
              (s.currentY = s.minY + 1 - (s.minY - s.currentY + 1) ** 0.8),
            s.currentY > s.maxY &&
              (s.currentY = s.maxY - 1 + (s.currentY - s.maxY + 1) ** 0.8),
            a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
            a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
            a.prevTime || (a.prevTime = Date.now()),
            (a.x =
              (s.touchesCurrent.x - a.prevPositionX) /
              (Date.now() - a.prevTime) /
              2),
            (a.y =
              (s.touchesCurrent.y - a.prevPositionY) /
              (Date.now() - a.prevTime) /
              2),
            Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
            Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
            (a.prevPositionX = s.touchesCurrent.x),
            (a.prevPositionY = s.touchesCurrent.y),
            (a.prevTime = Date.now()),
            n.$imageWrapEl.transform(
              `translate3d(${s.currentX}px, ${s.currentY}px,0)`
            );
        }
      },
      onTouchEnd() {
        const e = this.zoom,
          { gesture: t, image: i, velocity: n } = e;
        if (!t.$imageEl || 0 === t.$imageEl.length) return;
        if (!i.isTouched || !i.isMoved)
          return (i.isTouched = !1), void (i.isMoved = !1);
        (i.isTouched = !1), (i.isMoved = !1);
        let s = 300,
          a = 300;
        const r = n.x * s,
          o = i.currentX + r,
          l = n.y * a,
          c = i.currentY + l;
        0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)),
          0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
        const d = Math.max(s, a);
        (i.currentX = o), (i.currentY = c);
        const u = i.width * e.scale,
          h = i.height * e.scale;
        (i.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
          (i.maxX = -i.minX),
          (i.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
          (i.maxY = -i.minY),
          (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
          (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
          t.$imageWrapEl
            .transition(d)
            .transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
      },
      onTransitionEnd() {
        const e = this.zoom,
          { gesture: t } = e;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle(e) {
        const t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in(e) {
        const t = this,
          i = t.zoom,
          n = t.params.zoom,
          { gesture: s, image: a } = i;
        if (
          (s.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (s.$slideEl = t.$wrapperEl.children(
                  "." + t.params.slideActiveClass
                ))
              : (s.$slideEl = t.slides.eq(t.activeIndex)),
            (s.$imageEl = s.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (s.$imageWrapEl = s.$imageEl.parent("." + n.containerClass))),
          !s.$imageEl || 0 === s.$imageEl.length)
        )
          return;
        let r, o, l, c, d, u, h, p, m, f, g, v, y, b, w, T, E, S;
        s.$slideEl.addClass("" + n.zoomedSlideClass),
          void 0 === a.touchesStart.x && e
            ? ((r =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((r = a.touchesStart.x), (o = a.touchesStart.y)),
          (i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
          (i.currentScale =
            s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
          e
            ? ((E = s.$slideEl[0].offsetWidth),
              (S = s.$slideEl[0].offsetHeight),
              (l = s.$slideEl.offset().left),
              (c = s.$slideEl.offset().top),
              (d = l + E / 2 - r),
              (u = c + S / 2 - o),
              (m = s.$imageEl[0].offsetWidth),
              (f = s.$imageEl[0].offsetHeight),
              (g = m * i.scale),
              (v = f * i.scale),
              (y = Math.min(E / 2 - g / 2, 0)),
              (b = Math.min(S / 2 - v / 2, 0)),
              (w = -y),
              (T = -b),
              (h = d * i.scale),
              (p = u * i.scale),
              h < y && (h = y),
              h > w && (h = w),
              p < b && (p = b),
              p > T && (p = T))
            : ((h = 0), (p = 0)),
          s.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${h}px, ${p}px,0)`),
          s.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${i.scale})`);
      },
      out() {
        const e = this,
          t = e.zoom,
          i = e.params.zoom,
          { gesture: n } = t;
        n.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (n.$slideEl = e.$wrapperEl.children(
                "." + e.params.slideActiveClass
              ))
            : (n.$slideEl = e.slides.eq(e.activeIndex)),
          (n.$imageEl = n.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass))),
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            n.$slideEl.removeClass("" + i.zoomedSlideClass),
            (n.$slideEl = void 0));
      },
      enable() {
        const e = this,
          t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const i = !(
            "touchstart" !== e.touchEvents.start ||
            !R.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          n = !R.passiveListener || { passive: !1, capture: !0 },
          s = "." + e.params.slideClass;
        R.gestures
          ? (e.$wrapperEl.on("gesturestart", s, t.onGestureStart, i),
            e.$wrapperEl.on("gesturechange", s, t.onGestureChange, i),
            e.$wrapperEl.on("gestureend", s, t.onGestureEnd, i))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.on(e.touchEvents.start, s, t.onGestureStart, i),
            e.$wrapperEl.on(e.touchEvents.move, s, t.onGestureChange, n),
            e.$wrapperEl.on(e.touchEvents.end, s, t.onGestureEnd, i),
            e.touchEvents.cancel &&
              e.$wrapperEl.on(e.touchEvents.cancel, s, t.onGestureEnd, i)),
          e.$wrapperEl.on(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove,
            n
          );
      },
      disable() {
        const e = this,
          t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        const i = !(
            "touchstart" !== e.touchEvents.start ||
            !R.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          n = !R.passiveListener || { passive: !1, capture: !0 },
          s = "." + e.params.slideClass;
        R.gestures
          ? (e.$wrapperEl.off("gesturestart", s, t.onGestureStart, i),
            e.$wrapperEl.off("gesturechange", s, t.onGestureChange, i),
            e.$wrapperEl.off("gestureend", s, t.onGestureEnd, i))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.off(e.touchEvents.start, s, t.onGestureStart, i),
            e.$wrapperEl.off(e.touchEvents.move, s, t.onGestureChange, n),
            e.$wrapperEl.off(e.touchEvents.end, s, t.onGestureEnd, i),
            e.touchEvents.cancel &&
              e.$wrapperEl.off(e.touchEvents.cancel, s, t.onGestureEnd, i)),
          e.$wrapperEl.off(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove,
            n
          );
      },
    };
    const Me = {
      loadInSlide(e, t = !0) {
        const i = this,
          n = i.params.lazy;
        if (void 0 === e) return;
        if (0 === i.slides.length) return;
        const s =
          i.virtual && i.params.virtual.enabled
            ? i.$wrapperEl.children(
                `.${i.params.slideClass}[data-swiper-slide-index="${e}"]`
              )
            : i.slides.eq(e);
        let a = s.find(
          `.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`
        );
        !s.hasClass(n.elementClass) ||
          s.hasClass(n.loadedClass) ||
          s.hasClass(n.loadingClass) ||
          (a = a.add(s[0])),
          0 !== a.length &&
            a.each((e, a) => {
              const r = q(a);
              r.addClass(n.loadingClass);
              const o = r.attr("data-background"),
                l = r.attr("data-src"),
                c = r.attr("data-srcset"),
                d = r.attr("data-sizes"),
                u = r.parent("picture");
              i.loadImage(r[0], l || o, c, d, !1, () => {
                if (null != i && i && (!i || i.params) && !i.destroyed) {
                  if (
                    (o
                      ? (r.css("background-image", `url("${o}")`),
                        r.removeAttr("data-background"))
                      : (c &&
                          (r.attr("srcset", c), r.removeAttr("data-srcset")),
                        d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                        u.length &&
                          u.children("source").each((e, t) => {
                            const i = q(t);
                            i.attr("data-srcset") &&
                              (i.attr("srcset", i.attr("data-srcset")),
                              i.removeAttr("data-srcset"));
                          }),
                        l && (r.attr("src", l), r.removeAttr("data-src"))),
                    r.addClass(n.loadedClass).removeClass(n.loadingClass),
                    s.find("." + n.preloaderClass).remove(),
                    i.params.loop && t)
                  ) {
                    const e = s.attr("data-swiper-slide-index");
                    if (s.hasClass(i.params.slideDuplicateClass)) {
                      const t = i.$wrapperEl.children(
                        `[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`
                      );
                      i.lazy.loadInSlide(t.index(), !1);
                    } else {
                      const t = i.$wrapperEl.children(
                        `.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                      );
                      i.lazy.loadInSlide(t.index(), !1);
                    }
                  }
                  i.emit("lazyImageReady", s[0], r[0]),
                    i.params.autoHeight && i.updateAutoHeight();
                }
              }),
                i.emit("lazyImageLoad", s[0], r[0]);
            });
      },
      load() {
        const e = this,
          { $wrapperEl: t, params: i, slides: n, activeIndex: s } = e,
          a = e.virtual && i.virtual.enabled,
          r = i.lazy;
        let o = i.slidesPerView;
        function l(e) {
          if (a) {
            if (
              t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (n[e]) return !0;
          return !1;
        }
        function c(e) {
          return a ? q(e).attr("data-swiper-slide-index") : q(e).index();
        }
        if (
          ("auto" === o && (o = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each((t, i) => {
            const n = a ? q(i).attr("data-swiper-slide-index") : q(i).index();
            e.lazy.loadInSlide(n);
          });
        else if (o > 1)
          for (let t = s; t < s + o; t += 1) l(t) && e.lazy.loadInSlide(t);
        else e.lazy.loadInSlide(s);
        if (r.loadPrevNext)
          if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
            const t = r.loadPrevNextAmount,
              i = o,
              a = Math.min(s + i + Math.max(t, i), n.length),
              c = Math.max(s - Math.max(i, t), 0);
            for (let t = s + o; t < a; t += 1) l(t) && e.lazy.loadInSlide(t);
            for (let t = c; t < s; t += 1) l(t) && e.lazy.loadInSlide(t);
          } else {
            const n = t.children("." + i.slideNextClass);
            n.length > 0 && e.lazy.loadInSlide(c(n));
            const s = t.children("." + i.slidePrevClass);
            s.length > 0 && e.lazy.loadInSlide(c(s));
          }
      },
    };
    const Pe = {
      LinearSpline: function (e, t) {
        const i = (function () {
          let e, t, i;
          return (n, s) => {
            for (t = -1, e = n.length; e - t > 1; )
              (i = (e + t) >> 1), n[i] <= s ? (t = i) : (e = i);
            return e;
          };
        })();
        let n, s;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((s = i(this.x, e)),
                (n = s - 1),
                ((e - this.x[n]) * (this.y[s] - this.y[n])) /
                  (this.x[s] - this.x[n]) +
                  this.y[n])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction(e) {
        const t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new Pe.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new Pe.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate(e, t) {
        const i = this,
          n = i.controller.control;
        let s, a;
        function r(e) {
          const t = i.rtlTranslate ? -i.translate : i.translate;
          "slide" === i.params.controller.by &&
            (i.controller.getInterpolateFunction(e),
            (a = -i.controller.spline.interpolate(-t))),
            (a && "container" !== i.params.controller.by) ||
              ((s =
                (e.maxTranslate() - e.minTranslate()) /
                (i.maxTranslate() - i.minTranslate())),
              (a = (t - i.minTranslate()) * s + e.minTranslate())),
            i.params.controller.inverse && (a = e.maxTranslate() - a),
            e.updateProgress(a),
            e.setTranslate(a, i),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(n))
          for (let e = 0; e < n.length; e += 1)
            n[e] !== t && n[e] instanceof ce && r(n[e]);
        else n instanceof ce && t !== n && r(n);
      },
      setTransition(e, t) {
        const i = this,
          n = i.controller.control;
        let s;
        function a(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                F.nextTick(() => {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(() => {
                n &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(n))
          for (s = 0; s < n.length; s += 1)
            n[s] !== t && n[s] instanceof ce && a(n[s]);
        else n instanceof ce && t !== n && a(n);
      },
    };
    const Ae = {
      makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
      makeElNotFocusable: (e) => (e.attr("tabIndex", "-1"), e),
      addElRole: (e, t) => (e.attr("role", t), e),
      addElLabel: (e, t) => (e.attr("aria-label", t), e),
      disableEl: (e) => (e.attr("aria-disabled", !0), e),
      enableEl: (e) => (e.attr("aria-disabled", !1), e),
      onEnterKey(e) {
        const t = this,
          i = t.params.a11y;
        if (13 !== e.keyCode) return;
        const n = q(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          n.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd
            ? t.a11y.notify(i.lastSlideMessage)
            : t.a11y.notify(i.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            n.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning
              ? t.a11y.notify(i.firstSlideMessage)
              : t.a11y.notify(i.prevSlideMessage)),
          t.pagination &&
            n.is("." + t.params.pagination.bulletClass) &&
            n[0].click();
      },
      notify(e) {
        const t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation() {
        const e = this;
        if (e.params.loop || !e.navigation) return;
        const { $nextEl: t, $prevEl: i } = e.navigation;
        i &&
          i.length > 0 &&
          (e.isBeginning
            ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
            : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
          t &&
            t.length > 0 &&
            (e.isEnd
              ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t))
              : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)));
      },
      updatePagination() {
        const e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each((i, n) => {
            const s = q(n);
            e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, "button"),
              e.a11y.addElLabel(
                s,
                t.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  s.index() + 1
                )
              );
          });
      },
      init() {
        const e = this;
        e.$el.append(e.a11y.liveRegion);
        const t = e.params.a11y;
        let i, n;
        e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
          i &&
            (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
          n &&
            (e.a11y.makeElFocusable(n),
            e.a11y.addElRole(n, "button"),
            e.a11y.addElLabel(n, t.prevSlideMessage),
            n.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy() {
        const e = this;
        let t, i;
        e.a11y.liveRegion &&
          e.a11y.liveRegion.length > 0 &&
          e.a11y.liveRegion.remove(),
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
          t && t.off("keydown", e.a11y.onEnterKey),
          i && i.off("keydown", e.a11y.onEnterKey),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.off(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
    };
    const Le = {
      init() {
        const e = this;
        if (!e.params.history) return;
        if (!D.history || !D.history.pushState)
          return (
            (e.params.history.enabled = !1),
            void (e.params.hashNavigation.enabled = !0)
          );
        const t = e.history;
        (t.initialized = !0),
          (t.paths = Le.getPathValues()),
          (t.paths.key || t.paths.value) &&
            (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState ||
              D.addEventListener("popstate", e.history.setHistoryPopState));
      },
      destroy() {
        const e = this;
        e.params.history.replaceState ||
          D.removeEventListener("popstate", e.history.setHistoryPopState);
      },
      setHistoryPopState() {
        (this.history.paths = Le.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues() {
        const e = D.location.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory(e, t) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        const i = this.slides.eq(t);
        let n = Le.slugify(i.attr("data-history"));
        D.location.pathname.includes(e) || (n = `${e}/${n}`);
        const s = D.history.state;
        (s && s.value === n) ||
          (this.params.history.replaceState
            ? D.history.replaceState({ value: n }, null, n)
            : D.history.pushState({ value: n }, null, n));
      },
      slugify: (e) =>
        e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      scrollToSlide(e, t, i) {
        const n = this;
        if (t)
          for (let s = 0, a = n.slides.length; s < a; s += 1) {
            const a = n.slides.eq(s);
            if (
              Le.slugify(a.attr("data-history")) === t &&
              !a.hasClass(n.params.slideDuplicateClass)
            ) {
              const t = a.index();
              n.slideTo(t, e, i);
            }
          }
        else n.slideTo(0, e, i);
      },
    };
    const $e = {
      onHashCange() {
        const e = this;
        e.emit("hashChange");
        const t = z.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          const i = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${t}"]`)
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash() {
        const e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            D.history &&
            D.history.replaceState
          )
            D.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ),
              e.emit("hashSet");
          else {
            const t = e.slides.eq(e.activeIndex),
              i = t.attr("data-hash") || t.attr("data-history");
            (z.location.hash = i || ""), e.emit("hashSet");
          }
      },
      init() {
        const e = this;
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        e.hashNavigation.initialized = !0;
        const t = z.location.hash.replace("#", "");
        if (t) {
          const i = 0;
          for (let n = 0, s = e.slides.length; n < s; n += 1) {
            const s = e.slides.eq(n);
            if (
              (s.attr("data-hash") || s.attr("data-history")) === t &&
              !s.hasClass(e.params.slideDuplicateClass)
            ) {
              const t = s.index();
              e.slideTo(t, i, e.params.runCallbacksOnInit, !0);
            }
          }
        }
        e.params.hashNavigation.watchState &&
          q(D).on("hashchange", e.hashNavigation.onHashCange);
      },
      destroy() {
        const e = this;
        e.params.hashNavigation.watchState &&
          q(D).off("hashchange", e.hashNavigation.onHashCange);
      },
    };
    const Ie = {
      run() {
        const e = this,
          t = e.slides.eq(e.activeIndex);
        let i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = F.nextTick(() => {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start() {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop() {
        const e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause(e) {
        const t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    };
    const Oe = {
      setTranslate() {
        const e = this,
          { slides: t } = e;
        for (let i = 0; i < t.length; i += 1) {
          const t = e.slides.eq(i);
          let n = -t[0].swiperSlideOffset;
          e.params.virtualTranslate || (n -= e.translate);
          let s = 0;
          e.isHorizontal() || ((s = n), (n = 0));
          const a = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(t[0].progress), 0)
            : 1 + Math.min(Math.max(t[0].progress, -1), 0);
          t.css({ opacity: a }).transform(`translate3d(${n}px, ${s}px, 0px)`);
        }
      },
      setTransition(e) {
        const t = this,
          { slides: i, $wrapperEl: n } = t;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          let e = !1;
          i.transitionEnd(() => {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const i = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < i.length; e += 1) n.trigger(i[e]);
          });
        }
      },
    };
    const ze = {
      setTranslate() {
        const {
            $el: e,
            $wrapperEl: t,
            slides: i,
            width: n,
            height: s,
            rtlTranslate: a,
            size: r,
          } = this,
          o = this.params.cubeEffect,
          l = this.isHorizontal(),
          c = this.virtual && this.params.virtual.enabled;
        let d,
          u = 0;
        o.shadow &&
          (l
            ? ((d = t.find(".swiper-cube-shadow")),
              0 === d.length &&
                ((d = q('<div class="swiper-cube-shadow"></div>')),
                t.append(d)),
              d.css({ height: n + "px" }))
            : ((d = e.find(".swiper-cube-shadow")),
              0 === d.length &&
                ((d = q('<div class="swiper-cube-shadow"></div>')),
                e.append(d))));
        for (let e = 0; e < i.length; e += 1) {
          const t = i.eq(e);
          let n = e;
          c && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
          let s = 90 * n,
            d = Math.floor(s / 360);
          a && ((s = -s), (d = Math.floor(-s / 360)));
          const h = Math.max(Math.min(t[0].progress, 1), -1);
          let p = 0,
            m = 0,
            f = 0;
          n % 4 == 0
            ? ((p = 4 * -d * r), (f = 0))
            : (n - 1) % 4 == 0
            ? ((p = 0), (f = 4 * -d * r))
            : (n - 2) % 4 == 0
            ? ((p = r + 4 * d * r), (f = r))
            : (n - 3) % 4 == 0 && ((p = -r), (f = 3 * r + 4 * r * d)),
            a && (p = -p),
            l || ((m = p), (p = 0));
          const g = `rotateX(${l ? 0 : -s}deg) rotateY(${
            l ? s : 0
          }deg) translate3d(${p}px, ${m}px, ${f}px)`;
          if (
            (h <= 1 &&
              h > -1 &&
              ((u = 90 * n + 90 * h), a && (u = 90 * -n - 90 * h)),
            t.transform(g),
            o.slideShadows)
          ) {
            let e = l
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              i = l
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = q(
                `<div class="swiper-slide-shadow-${l ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === i.length &&
                ((i = q(
                  `<div class="swiper-slide-shadow-${
                    l ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(i)),
              e.length && (e[0].style.opacity = Math.max(-h, 0)),
              i.length && (i[0].style.opacity = Math.max(h, 0));
          }
        }
        if (
          (t.css({
            "-webkit-transform-origin": `50% 50% -${r / 2}px`,
            "-moz-transform-origin": `50% 50% -${r / 2}px`,
            "-ms-transform-origin": `50% 50% -${r / 2}px`,
            "transform-origin": `50% 50% -${r / 2}px`,
          }),
          o.shadow)
        )
          if (l)
            d.transform(
              `translate3d(0px, ${n / 2 + o.shadowOffset}px, ${
                -n / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`
            );
          else {
            const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              t =
                1.5 -
                (Math.sin((2 * e * Math.PI) / 360) / 2 +
                  Math.cos((2 * e * Math.PI) / 360) / 2),
              i = o.shadowScale,
              n = o.shadowScale / t,
              a = o.shadowOffset;
            d.transform(
              `scale3d(${i}, 1, ${n}) translate3d(0px, ${s / 2 + a}px, ${
                -s / 2 / n
              }px) rotateX(-90deg)`
            );
          }
        const h = he.isSafari || he.isUiWebView ? -r / 2 : 0;
        t.transform(
          `translate3d(0px,0,${h}px) rotateX(${
            this.isHorizontal() ? 0 : u
          }deg) rotateY(${this.isHorizontal() ? -u : 0}deg)`
        );
      },
      setTransition(e) {
        const { $el: t, slides: i } = this;
        i
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    };
    const Ne = {
      setTranslate() {
        const e = this,
          { slides: t, rtlTranslate: i } = e;
        for (let n = 0; n < t.length; n += 1) {
          const s = t.eq(n);
          let a = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (a = Math.max(Math.min(s[0].progress, 1), -1));
          let r = -180 * a,
            o = 0,
            l = -s[0].swiperSlideOffset,
            c = 0;
          if (
            (e.isHorizontal()
              ? i && (r = -r)
              : ((c = l), (l = 0), (o = -r), (r = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(a)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            let t = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              i = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === t.length &&
              ((t = q(
                `<div class="swiper-slide-shadow-${
                  e.isHorizontal() ? "left" : "top"
                }"></div>`
              )),
              s.append(t)),
              0 === i.length &&
                ((i = q(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? "right" : "bottom"
                  }"></div>`
                )),
                s.append(i)),
              t.length && (t[0].style.opacity = Math.max(-a, 0)),
              i.length && (i[0].style.opacity = Math.max(a, 0));
          }
          s.transform(
            `translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`
          );
        }
      },
      setTransition(e) {
        const t = this,
          { slides: i, activeIndex: n, $wrapperEl: s } = t;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          let e = !1;
          i.eq(n).transitionEnd(function () {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const i = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < i.length; e += 1) s.trigger(i[e]);
          });
        }
      },
    };
    const De = {
      setTranslate() {
        const {
            width: e,
            height: t,
            slides: i,
            $wrapperEl: n,
            slidesSizesGrid: s,
          } = this,
          a = this.params.coverflowEffect,
          r = this.isHorizontal(),
          o = this.translate,
          l = r ? e / 2 - o : t / 2 - o,
          c = r ? a.rotate : -a.rotate,
          d = a.depth;
        for (let e = 0, t = i.length; e < t; e += 1) {
          const t = i.eq(e),
            n = s[e],
            o = ((l - t[0].swiperSlideOffset - n / 2) / n) * a.modifier;
          let u = r ? c * o : 0,
            h = r ? 0 : c * o,
            p = -d * Math.abs(o),
            m = a.stretch;
          "string" == typeof m &&
            -1 !== m.indexOf("%") &&
            (m = (parseFloat(a.stretch) / 100) * n);
          let f = r ? 0 : m * o,
            g = r ? m * o : 0;
          Math.abs(g) < 0.001 && (g = 0),
            Math.abs(f) < 0.001 && (f = 0),
            Math.abs(p) < 0.001 && (p = 0),
            Math.abs(u) < 0.001 && (u = 0),
            Math.abs(h) < 0.001 && (h = 0);
          const v = `translate3d(${g}px,${f}px,${p}px)  rotateX(${h}deg) rotateY(${u}deg)`;
          if (
            (t.transform(v),
            (t[0].style.zIndex = 1 - Math.abs(Math.round(o))),
            a.slideShadows)
          ) {
            let e = r
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              i = r
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = q(
                `<div class="swiper-slide-shadow-${r ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === i.length &&
                ((i = q(
                  `<div class="swiper-slide-shadow-${
                    r ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(i)),
              e.length && (e[0].style.opacity = o > 0 ? o : 0),
              i.length && (i[0].style.opacity = -o > 0 ? -o : 0);
          }
        }
        if (R.pointerEvents || R.prefixedPointerEvents) {
          n[0].style.perspectiveOrigin = l + "px 50%";
        }
      },
      setTransition(e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    };
    const He = {
      init() {
        const e = this,
          { thumbs: t } = e.params,
          i = e.constructor;
        t.swiper instanceof i
          ? ((e.thumbs.swiper = t.swiper),
            F.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            F.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : F.isObject(t.swiper) &&
            ((e.thumbs.swiper = new i(
              F.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick() {
        const e = this,
          t = e.thumbs.swiper;
        if (!t) return;
        const i = t.clickedIndex,
          n = t.clickedSlide;
        if (n && q(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let s;
        if (
          ((s = t.params.loop
            ? parseInt(q(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : i),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const i = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${s}"]`)
              .eq(0)
              .index(),
            n = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${s}"]`)
              .eq(0)
              .index();
          s = void 0 === i ? n : void 0 === n ? i : n - t < t - i ? n : i;
        }
        e.slideTo(s);
      },
      update(e) {
        const t = this,
          i = t.thumbs.swiper;
        if (!i) return;
        const n =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView,
          s = t.params.thumbs.autoScrollOffset,
          a = s && !i.params.loop;
        if (t.realIndex !== i.realIndex || a) {
          let r,
            o,
            l = i.activeIndex;
          if (i.params.loop) {
            i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              (l = i.activeIndex));
            const e = i.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              n = i.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (r =
              void 0 === e
                ? n
                : void 0 === n
                ? e
                : n - l == l - e
                ? l
                : n - l < l - e
                ? n
                : e),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          a && (r += "next" === o ? s : -1 * s),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(r) < 0 &&
              (i.params.centeredSlides
                ? (r =
                    r > l
                      ? r - Math.floor(n / 2) + 1
                      : r + Math.floor(n / 2) - 1)
                : r > l && (r = r - n + 1),
              i.slideTo(r, e ? 0 : void 0));
        }
        let r = 1;
        const o = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (r = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (r = 1),
          (r = Math.floor(r)),
          i.slides.removeClass(o),
          i.params.loop || (i.params.virtual && i.params.virtual.enabled))
        )
          for (let e = 0; e < r; e += 1)
            i.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(o);
        else
          for (let e = 0; e < r; e += 1)
            i.slides.eq(t.realIndex + e).addClass(o);
      },
    };
    const qe = [
      de,
      ue,
      pe,
      me,
      ge,
      ye,
      we,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create() {
          F.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: Te.enable.bind(this),
              disable: Te.disable.bind(this),
              handle: Te.handle.bind(this),
              handleMouseEnter: Te.handleMouseEnter.bind(this),
              handleMouseLeave: Te.handleMouseLeave.bind(this),
              animateSlider: Te.animateSlider.bind(this),
              releaseScroll: Te.releaseScroll.bind(this),
              lastScrollTime: F.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          });
        },
        on: {
          init() {
            const e = this;
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy() {
            const e = this;
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create() {
          F.extend(this, {
            navigation: {
              init: Ee.init.bind(this),
              update: Ee.update.bind(this),
              destroy: Ee.destroy.bind(this),
              onNextClick: Ee.onNextClick.bind(this),
              onPrevClick: Ee.onPrevClick.bind(this),
            },
          });
        },
        on: {
          init() {
            this.navigation.init(), this.navigation.update();
          },
          toEdge() {
            this.navigation.update();
          },
          fromEdge() {
            this.navigation.update();
          },
          destroy() {
            this.navigation.destroy();
          },
          click(e) {
            const t = this,
              { $nextEl: i, $prevEl: n } = t.navigation;
            if (
              t.params.navigation.hideOnClick &&
              !q(e.target).is(n) &&
              !q(e.target).is(i)
            ) {
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : n && (e = n.hasClass(t.params.navigation.hiddenClass)),
                !0 === e
                  ? t.emit("navigationShow", t)
                  : t.emit("navigationHide", t),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                n && n.toggleClass(t.params.navigation.hiddenClass);
            }
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create() {
          F.extend(this, {
            pagination: {
              init: Se.init.bind(this),
              render: Se.render.bind(this),
              update: Se.update.bind(this),
              destroy: Se.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init() {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange() {
            const e = this;
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange() {
            const e = this;
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy() {
            this.pagination.destroy();
          },
          click(e) {
            const t = this;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !q(e.target).hasClass(t.params.pagination.bulletClass)
            ) {
              !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit("paginationShow", t)
                : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            }
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create() {
          F.extend(this, {
            scrollbar: {
              init: xe.init.bind(this),
              destroy: xe.destroy.bind(this),
              updateSize: xe.updateSize.bind(this),
              setTranslate: xe.setTranslate.bind(this),
              setTransition: xe.setTransition.bind(this),
              enableDraggable: xe.enableDraggable.bind(this),
              disableDraggable: xe.disableDraggable.bind(this),
              setDragPosition: xe.setDragPosition.bind(this),
              getPointerPosition: xe.getPointerPosition.bind(this),
              onDragStart: xe.onDragStart.bind(this),
              onDragMove: xe.onDragMove.bind(this),
              onDragEnd: xe.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init() {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update() {
            this.scrollbar.updateSize();
          },
          resize() {
            this.scrollbar.updateSize();
          },
          observerUpdate() {
            this.scrollbar.updateSize();
          },
          setTranslate() {
            this.scrollbar.setTranslate();
          },
          setTransition(e) {
            this.scrollbar.setTransition(e);
          },
          destroy() {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create() {
          F.extend(this, {
            parallax: {
              setTransform: Ce.setTransform.bind(this),
              setTranslate: Ce.setTranslate.bind(this),
              setTransition: Ce.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition(e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create() {
          const e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach((i) => {
              t[i] = ke[i].bind(e);
            }),
            F.extend(e, { zoom: t });
          let i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: () => i,
            set(t) {
              if (i !== t) {
                const i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  n = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, n);
              }
              i = t;
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy() {
            this.zoom.disable();
          },
          touchStart(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap(e) {
            const t = this;
            t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              t.zoom.toggle(e);
          },
          transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange() {
            const e = this;
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create() {
          F.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: Me.load.bind(this),
              loadInSlide: Me.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            const e = this;
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load();
          },
          scroll() {
            const e = this;
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart() {
            const e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange() {
            const e = this;
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create() {
          F.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: Pe.getInterpolateFunction.bind(this),
              setTranslate: Pe.setTranslate.bind(this),
              setTransition: Pe.setTransition.bind(this),
            },
          });
        },
        on: {
          update() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate(e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition(e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create() {
          const e = this;
          F.extend(e, {
            a11y: {
              liveRegion: q(
                `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
              ),
            },
          }),
            Object.keys(Ae).forEach((t) => {
              e.a11y[t] = Ae[t].bind(e);
            });
        },
        on: {
          init() {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate() {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy() {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create() {
          F.extend(this, {
            history: {
              init: Le.init.bind(this),
              setHistory: Le.setHistory.bind(this),
              setHistoryPopState: Le.setHistoryPopState.bind(this),
              scrollToSlide: Le.scrollToSlide.bind(this),
              destroy: Le.destroy.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.history.enabled && e.history.init();
          },
          destroy() {
            const e = this;
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd() {
            const e = this;
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange() {
            const e = this;
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create() {
          F.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: $e.init.bind(this),
              destroy: $e.destroy.bind(this),
              setHash: $e.setHash.bind(this),
              onHashCange: $e.onHashCange.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd() {
            const e = this;
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange() {
            const e = this;
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create() {
          const e = this;
          F.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Ie.run.bind(e),
              start: Ie.start.bind(e),
              stop: Ie.stop.bind(e),
              pause: Ie.pause.bind(e),
              onVisibilityChange() {
                "hidden" === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd(t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart(e, t) {
            const i = this;
            i.autoplay.running &&
              (t || !i.params.autoplay.disableOnInteraction
                ? i.autoplay.pause(e)
                : i.autoplay.stop());
          },
          sliderFirstMove() {
            const e = this;
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd() {
            const e = this;
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create() {
          F.extend(this, {
            fadeEffect: {
              setTranslate: Oe.setTranslate.bind(this),
              setTransition: Oe.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("fade" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "fade");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            F.extend(this.params, e), F.extend(this.originalParams, e);
          },
          setTranslate() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition(e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create() {
          F.extend(this, {
            cubeEffect: {
              setTranslate: ze.setTranslate.bind(this),
              setTransition: ze.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("cube" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "cube"),
              this.classNames.push(this.params.containerModifierClass + "3d");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            };
            F.extend(this.params, e), F.extend(this.originalParams, e);
          },
          setTranslate() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition(e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create() {
          F.extend(this, {
            flipEffect: {
              setTranslate: Ne.setTranslate.bind(this),
              setTransition: Ne.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("flip" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "flip"),
              this.classNames.push(this.params.containerModifierClass + "3d");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            F.extend(this.params, e), F.extend(this.originalParams, e);
          },
          setTranslate() {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition(e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create() {
          F.extend(this, {
            coverflowEffect: {
              setTranslate: De.setTranslate.bind(this),
              setTransition: De.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                this.params.containerModifierClass + "coverflow"
              ),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate() {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition(e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create() {
          F.extend(this, {
            thumbs: {
              swiper: null,
              init: He.init.bind(this),
              update: He.update.bind(this),
              onThumbClick: He.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            const { thumbs: e } = this.params;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange() {
            this.thumbs.swiper && this.thumbs.update();
          },
          update() {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize() {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate() {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition(e) {
            const t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy() {
            const e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
    void 0 === ce.use &&
      ((ce.use = ce.Class.use), (ce.installModule = ce.Class.installModule)),
      ce.use(qe);
    var je = ce;
    function Be(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (i = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Fe(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return Fe(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          i && (e = i);
          var n = 0,
            s = function () {};
          return {
            s: s,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: s,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        r = !0,
        o = !1;
      return {
        s: function () {
          i = e[Symbol.iterator]();
        },
        n: function () {
          var e = i.next();
          return (r = e.done), e;
        },
        e: function (e) {
          (o = !0), (a = e);
        },
        f: function () {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw a;
          }
        },
      };
    }
    function Fe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    var Re = document.querySelectorAll("[data-component=slideshow]"),
      Ve = {
        init: function () {
          if (Re.length > 0)
            return (function () {
              var e,
                t = Be(Re);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var i = e.value;
                  new je(i.querySelector("[data-role=slideshow-slides]"), {
                    loop: !0,
                    navigation: {
                      nextEl: i.querySelector("[data-role=slideshow-next]"),
                      prevEl: i.querySelector("[data-role=slideshow-prev]"),
                    },
                    pagination: {
                      clickable: !0,
                      el: i.querySelector("[data-role=slideshow-pagination]"),
                      bulletClass: r,
                      bulletActiveClass: n,
                      renderBullet: function (e, t) {
                        var i = e + 1;
                        return "<button class="
                          .concat(t, '><span class="sr-only"')
                          .concat(i, "</span></button>");
                      },
                    },
                  });
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            })();
        },
      };
    function _e(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (i = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ge(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return Ge(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          i && (e = i);
          var n = 0,
            s = function () {};
          return {
            s: s,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: s,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        r = !0,
        o = !1;
      return {
        s: function () {
          i = e[Symbol.iterator]();
        },
        n: function () {
          var e = i.next();
          return (r = e.done), e;
        },
        e: function (e) {
          (o = !0), (a = e);
        },
        f: function () {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw a;
          }
        },
      };
    }
    function Ge(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    var We = document.querySelectorAll("[data-grid-slideshow]"),
      Ye = {
        init: function () {
          if (We.length > 0)
            return (function () {
              var e,
                t = _e(We);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var i = e.value;
                  new je(i.querySelector("[data-grid-slideshow-slides]"), {
                    grabCursor: !0,
                    slidesPerView: "auto",
                    freeMode: !0,
                    spaceBetween: 30,
                    mousewheel: !0,
                  });
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            })();
        },
      };
    function Xe(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (i = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ue(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return Ue(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          i && (e = i);
          var n = 0,
            s = function () {};
          return {
            s: s,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: s,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        r = !0,
        o = !1;
      return {
        s: function () {
          i = e[Symbol.iterator]();
        },
        n: function () {
          var e = i.next();
          return (r = e.done), e;
        },
        e: function (e) {
          (o = !0), (a = e);
        },
        f: function () {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw a;
          }
        },
      };
    }
    function Ue(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    var Ke = document.querySelectorAll("[data-component=slideshow-two-col]"),
      Qe = {
        init: function () {
          if (Ke.length > 0)
            return (function () {
              var e,
                t = Xe(Ke);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var i = e.value;
                  new je(
                    i.querySelector("[data-role=slideshow-two-col-slides]"),
                    {
                      loop: !0,
                      navigation: {
                        nextEl: i.querySelector(
                          "[data-role=slideshow-two-col-next]"
                        ),
                        prevEl: i.querySelector(
                          "[data-role=slideshow-two-col-prev]"
                        ),
                      },
                      autoplay: {
                        delay: 5000,
                      },
                      pagination: {
                        clickable: !0,
                        el: i.querySelector(
                          "[data-role=slideshow-two-col-pagination]"
                        ),
                        bulletClass: r,
                        bulletActiveClass: n,
                        renderBullet: function (e, t) {
                          var i = e + 1;
                          return "<button class="
                            .concat(t, '><span class="sr-only"')
                            .concat(i, "</span></button>");
                        },
                      },
                    }
                  );
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            })();
        },
      };
    var Je = i(12),
      Ze = i.n(Je),
      et = document.querySelectorAll("[data-component=video]"),
      tt = {
        init: function () {
          if (et.length > 0)
            return (function () {
              for (
                var e = function (e) {
                    var t = et[e].querySelector("[data-role=video-frame"),
                      i = new Ze.a(t),
                      n = et[e].querySelector("[data-role=video-play]"),
                      a = et[e].querySelector("[data-role=video-placeholder]");
                    n.addEventListener("click", function () {
                      i.play(), a.classList.add(s);
                    });
                  },
                  t = 0;
                t < et.length;
                t++
              )
                e(t);
            })();
        },
      };
    var it = {};
    (it.filters = h),
      (it.grid = v),
      (it.link = w),
      (it.menu = P),
      (it.slideshow = Ve),
      (it.slideshowGrid = Ye),
      (it.slideshowTwoCol = Qe),
      (it.video = tt),
      window.namespace || (window.AVIA = it),
      Object.keys(it).forEach(function (e) {
        it[e].init();
      }),
      window.Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          var t,
            i = (this.document || this.ownerDocument).querySelectorAll(e),
            n = this;
          do {
            for (t = i.length; --t >= 0 && i.item(t) !== n; );
          } while (t < 0 && (n = n.parentElement));
          return n;
        });
  },
]);
