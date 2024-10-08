function xd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ka = { exports: {} },
  zo = {},
  xa = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  Pd = Symbol.for("react.portal"),
  Cd = Symbol.for("react.fragment"),
  Nd = Symbol.for("react.strict_mode"),
  Od = Symbol.for("react.profiler"),
  Td = Symbol.for("react.provider"),
  Rd = Symbol.for("react.context"),
  zd = Symbol.for("react.forward_ref"),
  jd = Symbol.for("react.suspense"),
  Ld = Symbol.for("react.memo"),
  Id = Symbol.for("react.lazy"),
  Bu = Symbol.iterator;
function Dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bu && e[Bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ca = Object.assign,
  Na = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Na),
    (this.updater = n || Pa);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Oa() {}
Oa.prototype = wn.prototype;
function Fl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Na),
    (this.updater = n || Pa);
}
var Ul = (Fl.prototype = new Oa());
Ul.constructor = Fl;
Ca(Ul, wn.prototype);
Ul.isPureReactComponent = !0;
var Hu = Array.isArray,
  Ta = Object.prototype.hasOwnProperty,
  Al = { current: null },
  Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function za(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ta.call(t, r) && !Ra.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: fr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Al.current,
  };
}
function Md(e, t) {
  return {
    $$typeof: fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function Fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vu = /\/+/g;
function ni(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fd("" + e.key)
    : t.toString(36);
}
function Fr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fr:
          case Pd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + ni(l, 0) : r),
      Hu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Vu, "$&/") + "/"),
          Fr(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          ($l(o) &&
            (o = Md(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Vu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Hu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + ni(i, u);
      l += Fr(i, t, n, s, o);
    }
  else if (((s = Dd(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + ni(i, u++)), (l += Fr(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ud(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Ur = { transition: null },
  Ad = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Ur,
    ReactCurrentOwner: Al,
  };
function ja() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = wn;
j.Fragment = Cd;
j.Profiler = Od;
j.PureComponent = Fl;
j.StrictMode = Nd;
j.Suspense = jd;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
j.act = ja;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ca({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Al.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ta.call(t, s) &&
        !Ra.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Td, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = za;
j.createFactory = function (e) {
  var t = za.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: zd, render: e };
};
j.isValidElement = $l;
j.lazy = function (e) {
  return { $$typeof: Id, _payload: { _status: -1, _result: e }, _init: Ud };
};
j.memo = function (e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
j.unstable_act = ja;
j.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ae.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
j.useId = function () {
  return ae.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ae.current.useRef(e);
};
j.useState = function (e) {
  return ae.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ae.current.useTransition();
};
j.version = "18.3.1";
xa.exports = j;
var M = xa.exports;
const jo = Ea(M),
  ji = xd({ __proto__: null, default: jo }, [M]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d = M,
  Wd = Symbol.for("react.element"),
  Bd = Symbol.for("react.fragment"),
  Hd = Object.prototype.hasOwnProperty,
  Vd = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Hd.call(t, r) && !Qd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Wd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Vd.current,
  };
}
zo.Fragment = Bd;
zo.jsx = La;
zo.jsxs = La;
ka.exports = zo;
var O = ka.exports,
  Li = {},
  Ia = { exports: {} },
  xe = {},
  Da = { exports: {} },
  Ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, T) {
    var z = N.length;
    N.push(T);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        Z = N[Q];
      if (0 < o(Z, T)) (N[Q] = T), (N[z] = Z), (z = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0],
      z = N.pop();
    if (z !== T) {
      N[0] = z;
      e: for (var Q = 0, Z = N.length, yr = Z >>> 1; Q < yr; ) {
        var Pt = 2 * (Q + 1) - 1,
          ti = N[Pt],
          Ct = Pt + 1,
          gr = N[Ct];
        if (0 > o(ti, z))
          Ct < Z && 0 > o(gr, ti)
            ? ((N[Q] = gr), (N[Ct] = z), (Q = Ct))
            : ((N[Q] = ti), (N[Pt] = z), (Q = Pt));
        else if (Ct < Z && 0 > o(gr, z)) (N[Q] = gr), (N[Ct] = z), (Q = Ct);
        else break e;
      }
    }
    return T;
  }
  function o(N, T) {
    var z = N.sortIndex - T.sortIndex;
    return z !== 0 ? z : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    p = null,
    h = 3,
    y = !1,
    g = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= N)
        r(a), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(a);
    }
  }
  function v(N) {
    if (((w = !1), m(N), !g))
      if (n(s) !== null) (g = !0), bo(S);
      else {
        var T = n(a);
        T !== null && ei(v, T.startTime - N);
      }
  }
  function S(N, T) {
    (g = !1), w && ((w = !1), f(P), (P = -1)), (y = !0);
    var z = h;
    try {
      for (
        m(T), p = n(s);
        p !== null && (!(p.expirationTime > T) || (N && !ve()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var Z = Q(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(s) && r(s),
            m(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var yr = !0;
      else {
        var Pt = n(a);
        Pt !== null && ei(v, Pt.startTime - T), (yr = !1);
      }
      return yr;
    } finally {
      (p = null), (h = z), (y = !1);
    }
  }
  var E = !1,
    x = null,
    P = -1,
    I = 5,
    R = -1;
  function ve() {
    return !(e.unstable_now() - R < I);
  }
  function En() {
    if (x !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = x(!0, N);
      } finally {
        T ? kn() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var kn;
  if (typeof c == "function")
    kn = function () {
      c(En);
    };
  else if (typeof MessageChannel < "u") {
    var Wu = new MessageChannel(),
      kd = Wu.port2;
    (Wu.port1.onmessage = En),
      (kn = function () {
        kd.postMessage(null);
      });
  } else
    kn = function () {
      k(En, 0);
    };
  function bo(N) {
    (x = N), E || ((E = !0), kn());
  }
  function ei(N, T) {
    P = k(function () {
      N(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), bo(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var z = h;
      h = T;
      try {
        return N();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = h;
      h = N;
      try {
        return T();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (N = {
          id: d++,
          callback: T,
          priorityLevel: N,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > Q
          ? ((N.sortIndex = z),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (w ? (f(P), (P = -1)) : (w = !0), ei(v, z - Q)))
          : ((N.sortIndex = Z), t(s, N), g || y || ((g = !0), bo(S))),
        N
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (N) {
      var T = h;
      return function () {
        var z = h;
        h = T;
        try {
          return N.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(Ma);
Da.exports = Ma;
var Kd = Da.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd = M,
  _e = Kd;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fa = new Set(),
  Kn = {};
function Ht(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Fa.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ii = Object.prototype.hasOwnProperty,
  Gd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qu = {},
  Ku = {};
function Xd(e) {
  return Ii.call(Ku, e)
    ? !0
    : Ii.call(Qu, e)
      ? !1
      : Gd.test(e)
        ? (Ku[e] = !0)
        : ((Qu[e] = !0), !1);
}
function Zd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Zd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wl = /[\-:]([a-z])/g;
function Bl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Bl);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Bl);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wl, Bl);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hl(e, t, n, r) {
  var o = ne.hasOwnProperty(t) ? ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qd(t, n, o, r) && (n = null),
    r || o === null
      ? Xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  Vl = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  Ua = Symbol.for("react.provider"),
  Aa = Symbol.for("react.context"),
  Ql = Symbol.for("react.forward_ref"),
  Mi = Symbol.for("react.suspense"),
  Fi = Symbol.for("react.suspense_list"),
  Kl = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  $a = Symbol.for("react.offscreen"),
  Yu = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yu && e[Yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  ri;
function jn(e) {
  if (ri === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ri = (t && t[1]) || "";
    }
  return (
    `
` +
    ri +
    e
  );
}
var oi = !1;
function ii(e, t) {
  if (!e || oi) return "";
  oi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (oi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function Jd(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn("Lazy");
    case 13:
      return jn("Suspense");
    case 19:
      return jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ii(e.type, !1)), e;
    case 11:
      return (e = ii(e.type.render, !1)), e;
    case 1:
      return (e = ii(e.type, !0)), e;
    default:
      return "";
  }
}
function Ui(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case Di:
      return "Profiler";
    case Vl:
      return "StrictMode";
    case Mi:
      return "Suspense";
    case Fi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Aa:
        return (e.displayName || "Context") + ".Consumer";
      case Ua:
        return (e._context.displayName || "Context") + ".Provider";
      case Ql:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kl:
        return (
          (t = e.displayName || null), t !== null ? t : Ui(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return Ui(e(t));
        } catch {}
    }
  return null;
}
function bd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ui(t);
    case 8:
      return t === Vl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ep(e) {
  var t = Wa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = ep(e));
}
function Ba(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function eo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ai(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ha(e, t) {
  (t = t.checked), t != null && Hl(e, "checked", t, !1);
}
function $i(e, t) {
  Ha(e, t);
  var n = wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wi(e, t.type, wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wi(e, t, n) {
  (t !== "number" || eo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wt(n) };
}
function Va(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Er,
  Ka = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function Ya(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ga(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ya(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var np = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vi(e, t) {
  if (t) {
    if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Qi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ki = null;
function Yl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yi = null,
  ln = null,
  un = null;
function Ju(e) {
  if ((e = mr(e))) {
    if (typeof Yi != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Fo(t)), Yi(e.stateNode, e.type, t));
  }
}
function Xa(e) {
  ln ? (un ? un.push(e) : (un = [e])) : (ln = e);
}
function Za() {
  if (ln) {
    var e = ln,
      t = un;
    if (((un = ln = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
  }
}
function qa(e, t) {
  return e(t);
}
function Ja() {}
var li = !1;
function ba(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return qa(e, t, n);
  } finally {
    (li = !1), (ln !== null || un !== null) && (Ja(), Za());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Gi = !1;
if (Je)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Gi = !1;
  }
function rp(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Un = !1,
  to = null,
  no = !1,
  Xi = null,
  op = {
    onError: function (e) {
      (Un = !0), (to = e);
    },
  };
function ip(e, t, n, r, o, i, l, u, s) {
  (Un = !1), (to = null), rp.apply(op, arguments);
}
function lp(e, t, n, r, o, i, l, u, s) {
  if ((ip.apply(this, arguments), Un)) {
    if (Un) {
      var a = to;
      (Un = !1), (to = null);
    } else throw Error(_(198));
    no || ((no = !0), (Xi = a));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ec(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function bu(e) {
  if (Vt(e) !== e) throw Error(_(188));
}
function up(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return bu(o), e;
        if (i === r) return bu(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function tc(e) {
  return (e = up(e)), e !== null ? nc(e) : null;
}
function nc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rc = _e.unstable_scheduleCallback,
  es = _e.unstable_cancelCallback,
  sp = _e.unstable_shouldYield,
  ap = _e.unstable_requestPaint,
  K = _e.unstable_now,
  cp = _e.unstable_getCurrentPriorityLevel,
  Gl = _e.unstable_ImmediatePriority,
  oc = _e.unstable_UserBlockingPriority,
  ro = _e.unstable_NormalPriority,
  fp = _e.unstable_LowPriority,
  ic = _e.unstable_IdlePriority,
  Lo = null,
  Ve = null;
function dp(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : hp,
  pp = Math.log,
  mp = Math.LN2;
function hp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pp(e) / mp) | 0)) | 0;
}
var kr = 64,
  xr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = In(u)) : ((i &= l), i !== 0 && (r = In(i)));
  } else (l = n & ~o), l !== 0 ? (r = In(l)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function vp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Fe(i),
      u = 1 << l,
      s = o[l];
    s === -1
      ? (!(u & n) || u & r) && (o[l] = vp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lc() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function ui(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function gp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Fe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Xl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var D = 0;
function uc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sc,
  Zl,
  ac,
  cc,
  fc,
  qi = !1,
  Pr = [],
  ft = null,
  dt = null,
  pt = null,
  Xn = new Map(),
  Zn = new Map(),
  ut = [],
  wp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ts(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = mr(t)), t !== null && Zl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Sp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ft = Cn(ft, e, t, n, r, o)), !0;
    case "dragenter":
      return (dt = Cn(dt, e, t, n, r, o)), !0;
    case "mouseover":
      return (pt = Cn(pt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Xn.set(i, Cn(Xn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Zn.set(i, Cn(Zn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function dc(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ec(n)), t !== null)) {
          (e.blockedOn = t),
            fc(e.priority, function () {
              ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ki = r), n.target.dispatchEvent(r), (Ki = null);
    } else return (t = mr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ns(e, t, n) {
  Ar(e) && n.delete(t);
}
function _p() {
  (qi = !1),
    ft !== null && Ar(ft) && (ft = null),
    dt !== null && Ar(dt) && (dt = null),
    pt !== null && Ar(pt) && (pt = null),
    Xn.forEach(ns),
    Zn.forEach(ns);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi ||
      ((qi = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, _p)));
}
function qn(e) {
  function t(o) {
    return Nn(o, e);
  }
  if (0 < Pr.length) {
    Nn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Nn(ft, e),
      dt !== null && Nn(dt, e),
      pt !== null && Nn(pt, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    dc(n), n.blockedOn === null && ut.shift();
}
var sn = rt.ReactCurrentBatchConfig,
  io = !0;
function Ep(e, t, n, r) {
  var o = D,
    i = sn.transition;
  sn.transition = null;
  try {
    (D = 1), ql(e, t, n, r);
  } finally {
    (D = o), (sn.transition = i);
  }
}
function kp(e, t, n, r) {
  var o = D,
    i = sn.transition;
  sn.transition = null;
  try {
    (D = 4), ql(e, t, n, r);
  } finally {
    (D = o), (sn.transition = i);
  }
}
function ql(e, t, n, r) {
  if (io) {
    var o = Ji(e, t, n, r);
    if (o === null) yi(e, t, r, lo, n), ts(e, r);
    else if (Sp(o, e, t, n, r)) r.stopPropagation();
    else if ((ts(e, r), t & 4 && -1 < wp.indexOf(e))) {
      for (; o !== null; ) {
        var i = mr(o);
        if (
          (i !== null && sc(i),
          (i = Ji(e, t, n, r)),
          i === null && yi(e, t, r, lo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else yi(e, t, r, null, n);
  }
}
var lo = null;
function Ji(e, t, n, r) {
  if (((lo = null), (e = Yl(r)), (e = Rt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ec(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lo = e), null;
}
function pc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cp()) {
        case Gl:
          return 1;
        case oc:
          return 4;
        case ro:
        case fp:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Jl = null,
  $r = null;
function mc() {
  if ($r) return $r;
  var e,
    t = Jl,
    n = t.length,
    r,
    o = "value" in at ? at.value : at.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return ($r = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Wr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function rs() {
  return !1;
}
function Pe(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cr
        : rs),
      (this.isPropagationStopped = rs),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bl = Pe(Sn),
  pr = H({}, Sn, { view: 0, detail: 0 }),
  xp = Pe(pr),
  si,
  ai,
  On,
  Io = H({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((si = e.screenX - On.screenX), (ai = e.screenY - On.screenY))
              : (ai = si = 0),
            (On = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  os = Pe(Io),
  Pp = H({}, Io, { dataTransfer: 0 }),
  Cp = Pe(Pp),
  Np = H({}, pr, { relatedTarget: 0 }),
  ci = Pe(Np),
  Op = H({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tp = Pe(Op),
  Rp = H({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zp = Pe(Rp),
  jp = H({}, Sn, { data: 0 }),
  is = Pe(jp),
  Lp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Dp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
}
function eu() {
  return Mp;
}
var Fp = H({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = Lp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Ip[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eu,
    charCode: function (e) {
      return e.type === "keypress" ? Wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Up = Pe(Fp),
  Ap = H({}, Io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ls = Pe(Ap),
  $p = H({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu,
  }),
  Wp = Pe($p),
  Bp = H({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hp = Pe(Bp),
  Vp = H({}, Io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qp = Pe(Vp),
  Kp = [9, 13, 27, 32],
  tu = Je && "CompositionEvent" in window,
  An = null;
Je && "documentMode" in document && (An = document.documentMode);
var Yp = Je && "TextEvent" in window && !An,
  hc = Je && (!tu || (An && 8 < An && 11 >= An)),
  us = " ",
  ss = !1;
function vc(e, t) {
  switch (e) {
    case "keyup":
      return Kp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function Gp(e, t) {
  switch (e) {
    case "compositionend":
      return yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ss = !0), us);
    case "textInput":
      return (e = t.data), e === us && ss ? null : e;
    default:
      return null;
  }
}
function Xp(e, t) {
  if (Gt)
    return e === "compositionend" || (!tu && vc(e, t))
      ? ((e = mc()), ($r = Jl = at = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function gc(e, t, n, r) {
  Xa(r),
    (t = uo(t, "onChange")),
    0 < t.length &&
      ((n = new bl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $n = null,
  Jn = null;
function qp(e) {
  Tc(e, 0);
}
function Do(e) {
  var t = qt(e);
  if (Ba(t)) return e;
}
function Jp(e, t) {
  if (e === "change") return t;
}
var wc = !1;
if (Je) {
  var fi;
  if (Je) {
    var di = "oninput" in document;
    if (!di) {
      var cs = document.createElement("div");
      cs.setAttribute("oninput", "return;"),
        (di = typeof cs.oninput == "function");
    }
    fi = di;
  } else fi = !1;
  wc = fi && (!document.documentMode || 9 < document.documentMode);
}
function fs() {
  $n && ($n.detachEvent("onpropertychange", Sc), (Jn = $n = null));
}
function Sc(e) {
  if (e.propertyName === "value" && Do(Jn)) {
    var t = [];
    gc(t, Jn, e, Yl(e)), ba(qp, t);
  }
}
function bp(e, t, n) {
  e === "focusin"
    ? (fs(), ($n = t), (Jn = n), $n.attachEvent("onpropertychange", Sc))
    : e === "focusout" && fs();
}
function em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(Jn);
}
function tm(e, t) {
  if (e === "click") return Do(t);
}
function nm(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : rm;
function bn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ii.call(t, o) || !$e(e[o], t[o])) return !1;
  }
  return !0;
}
function ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ps(e, t) {
  var n = ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ds(n);
  }
}
function _c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _c(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ec() {
  for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eo(e.document);
  }
  return t;
}
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function om(e) {
  var t = Ec(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ps(n, i));
        var l = ps(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var im = Je && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  bi = null,
  Wn = null,
  el = !1;
function ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  el ||
    Xt == null ||
    Xt !== eo(r) ||
    ((r = Xt),
    "selectionStart" in r && nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wn && bn(Wn, r)) ||
      ((Wn = r),
      (r = uo(bi, "onSelect")),
      0 < r.length &&
        ((t = new bl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zt = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd"),
  },
  pi = {},
  kc = {};
Je &&
  ((kc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  "TransitionEvent" in window || delete Zt.transitionend.transition);
function Mo(e) {
  if (pi[e]) return pi[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in kc) return (pi[e] = t[n]);
  return e;
}
var xc = Mo("animationend"),
  Pc = Mo("animationiteration"),
  Cc = Mo("animationstart"),
  Nc = Mo("transitionend"),
  Oc = new Map(),
  hs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  Oc.set(e, t), Ht(t, [e]);
}
for (var mi = 0; mi < hs.length; mi++) {
  var hi = hs[mi],
    lm = hi.toLowerCase(),
    um = hi[0].toUpperCase() + hi.slice(1);
  Et(lm, "on" + um);
}
Et(xc, "onAnimationEnd");
Et(Pc, "onAnimationIteration");
Et(Cc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Nc, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function vs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lp(r, t, void 0, e), (e.currentTarget = null);
}
function Tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          vs(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          vs(o, u, a), (i = s);
        }
    }
  }
  if (no) throw ((e = Xi), (no = !1), (Xi = null), e);
}
function U(e, t) {
  var n = t[il];
  n === void 0 && (n = t[il] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rc(t, e, 2, !1), n.add(r));
}
function vi(e, t, n) {
  var r = 0;
  t && (r |= 4), Rc(n, e, r, t);
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Or]) {
    (e[Or] = !0),
      Fa.forEach(function (n) {
        n !== "selectionchange" && (sm.has(n) || vi(n, !1, e), vi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), vi("selectionchange", !1, t));
  }
}
function Rc(e, t, n, r) {
  switch (pc(t)) {
    case 1:
      var o = Ep;
      break;
    case 4:
      o = kp;
      break;
    default:
      o = ql;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Gi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function yi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = Rt(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ba(function () {
    var a = i,
      d = Yl(n),
      p = [];
    e: {
      var h = Oc.get(e);
      if (h !== void 0) {
        var y = bl,
          g = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Up;
            break;
          case "focusin":
            (g = "focus"), (y = ci);
            break;
          case "focusout":
            (g = "blur"), (y = ci);
            break;
          case "beforeblur":
          case "afterblur":
            y = ci;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Cp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Wp;
            break;
          case xc:
          case Pc:
          case Cc:
            y = Tp;
            break;
          case Nc:
            y = Hp;
            break;
          case "scroll":
            y = xp;
            break;
          case "wheel":
            y = Qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ls;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var v = m.stateNode;
          if (
            (m.tag === 5 &&
              v !== null &&
              ((m = v),
              f !== null && ((v = Gn(c, f)), v != null && w.push(tr(c, v, m)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((h = new y(h, g, null, n, d)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ki &&
            (g = n.relatedTarget || n.fromElement) &&
            (Rt(g) || g[be]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = a),
              (g = g ? Rt(g) : null),
              g !== null &&
                ((k = Vt(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = a)),
          y !== g)
        ) {
          if (
            ((w = os),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ls),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (k = y == null ? h : qt(y)),
            (m = g == null ? h : qt(g)),
            (h = new w(v, c + "leave", y, n, d)),
            (h.target = k),
            (h.relatedTarget = m),
            (v = null),
            Rt(d) === a &&
              ((w = new w(f, c + "enter", g, n, d)),
              (w.target = m),
              (w.relatedTarget = k),
              (v = w)),
            (k = v),
            y && g)
          )
            t: {
              for (w = y, f = g, c = 0, m = w; m; m = Qt(m)) c++;
              for (m = 0, v = f; v; v = Qt(v)) m++;
              for (; 0 < c - m; ) (w = Qt(w)), c--;
              for (; 0 < m - c; ) (f = Qt(f)), m--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Qt(w)), (f = Qt(f));
              }
              w = null;
            }
          else w = null;
          y !== null && ys(p, h, y, w, !1),
            g !== null && k !== null && ys(p, k, g, w, !0);
        }
      }
      e: {
        if (
          ((h = a ? qt(a) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var S = Jp;
        else if (as(h))
          if (wc) S = nm;
          else {
            S = em;
            var E = bp;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = tm);
        if (S && (S = S(e, a))) {
          gc(p, S, n, d);
          break e;
        }
        E && E(e, h, a),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            Wi(h, "number", h.value);
      }
      switch (((E = a ? qt(a) : window), e)) {
        case "focusin":
          (as(E) || E.contentEditable === "true") &&
            ((Xt = E), (bi = a), (Wn = null));
          break;
        case "focusout":
          Wn = bi = Xt = null;
          break;
        case "mousedown":
          el = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (el = !1), ms(p, n, d);
          break;
        case "selectionchange":
          if (im) break;
        case "keydown":
        case "keyup":
          ms(p, n, d);
      }
      var x;
      if (tu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Gt
          ? vc(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (hc &&
          n.locale !== "ko" &&
          (Gt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Gt && (x = mc())
            : ((at = d),
              (Jl = "value" in at ? at.value : at.textContent),
              (Gt = !0))),
        (E = uo(a, P)),
        0 < E.length &&
          ((P = new is(P, e, null, n, d)),
          p.push({ event: P, listeners: E }),
          x ? (P.data = x) : ((x = yc(n)), x !== null && (P.data = x)))),
        (x = Yp ? Gp(e, n) : Xp(e, n)) &&
          ((a = uo(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new is("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: a }),
            (d.data = x)));
    }
    Tc(p, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Gn(e, n)),
      i != null && r.unshift(tr(e, i, o)),
      (i = Gn(e, t)),
      i != null && r.push(tr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ys(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Gn(n, i)), s != null && l.unshift(tr(n, s, u)))
        : o || ((s = Gn(n, i)), s != null && l.push(tr(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var am = /\r\n?/g,
  cm = /\u0000|\uFFFD/g;
function gs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      am,
      `
`
    )
    .replace(cm, "");
}
function Tr(e, t, n) {
  if (((t = gs(t)), gs(e) !== t && n)) throw Error(_(425));
}
function so() {}
var tl = null,
  nl = null;
function rl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0,
  fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ws = typeof Promise == "function" ? Promise : void 0,
  dm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ws < "u"
        ? function (e) {
            return ws.resolve(null).then(e).catch(pm);
          }
        : ol;
function pm(e) {
  setTimeout(function () {
    throw e;
  });
}
function gi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  qn(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ss(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _n = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + _n,
  nr = "__reactProps$" + _n,
  be = "__reactContainer$" + _n,
  il = "__reactEvents$" + _n,
  mm = "__reactListeners$" + _n,
  hm = "__reactHandles$" + _n;
function Rt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ss(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Ss(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mr(e) {
  return (
    (e = e[He] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Fo(e) {
  return e[nr] || null;
}
var ll = [],
  Jt = -1;
function kt(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || ((e.current = ll[Jt]), (ll[Jt] = null), Jt--);
}
function F(e, t) {
  Jt++, (ll[Jt] = e.current), (e.current = t);
}
var St = {},
  le = kt(St),
  pe = kt(!1),
  Mt = St;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function ao() {
  A(pe), A(le);
}
function _s(e, t, n) {
  if (le.current !== St) throw Error(_(168));
  F(le, t), F(pe, n);
}
function zc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, bd(e) || "Unknown", o));
  return H({}, n, r);
}
function co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Mt = le.current),
    F(le, e),
    F(pe, pe.current),
    !0
  );
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = zc(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(pe),
      A(le),
      F(le, e))
    : A(pe),
    F(pe, n);
}
var Ge = null,
  Uo = !1,
  wi = !1;
function jc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function vm(e) {
  (Uo = !0), jc(e);
}
function xt() {
  if (!wi && Ge !== null) {
    wi = !0;
    var e = 0,
      t = D;
    try {
      var n = Ge;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Uo = !1);
    } catch (o) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), rc(Gl, xt), o);
    } finally {
      (D = t), (wi = !1);
    }
  }
  return null;
}
var bt = [],
  en = 0,
  fo = null,
  po = 0,
  Ce = [],
  Ne = 0,
  Ft = null,
  Xe = 1,
  Ze = "";
function Nt(e, t) {
  (bt[en++] = po), (bt[en++] = fo), (fo = e), (po = t);
}
function Lc(e, t, n) {
  (Ce[Ne++] = Xe), (Ce[Ne++] = Ze), (Ce[Ne++] = Ft), (Ft = e);
  var r = Xe;
  e = Ze;
  var o = 32 - Fe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Fe(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Xe = (1 << (32 - Fe(t) + o)) | (n << o) | r),
      (Ze = i + e);
  } else (Xe = (1 << i) | (n << o) | r), (Ze = e);
}
function ru(e) {
  e.return !== null && (Nt(e, 1), Lc(e, 1, 0));
}
function ou(e) {
  for (; e === fo; )
    (fo = bt[--en]), (bt[en] = null), (po = bt[--en]), (bt[en] = null);
  for (; e === Ft; )
    (Ft = Ce[--Ne]),
      (Ce[Ne] = null),
      (Ze = Ce[--Ne]),
      (Ce[Ne] = null),
      (Xe = Ce[--Ne]),
      (Ce[Ne] = null);
}
var Se = null,
  ge = null,
  $ = !1,
  De = null;
function Ic(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ks(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (ge = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Xe, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sl(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!ks(e, t)) {
        if (ul(e)) throw Error(_(418));
        t = mt(n.nextSibling);
        var r = Se;
        t && ks(e, t)
          ? Ic(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e));
      }
    } else {
      if (ul(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e);
    }
  }
}
function xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Rr(e) {
  if (e !== Se) return !1;
  if (!$) return xs(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (ul(e)) throw (Dc(), Error(_(418)));
    for (; t; ) Ic(e, t), (t = mt(t.nextSibling));
  }
  if ((xs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = Se ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Dc() {
  for (var e = ge; e; ) e = mt(e.nextSibling);
}
function pn() {
  (ge = Se = null), ($ = !1);
}
function iu(e) {
  De === null ? (De = [e]) : De.push(e);
}
var ym = rt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ps(e) {
  var t = e._init;
  return t(e._payload);
}
function Mc(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = gt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, m, v) {
    return c === null || c.tag !== 6
      ? ((c = Ci(m, f.mode, v)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function s(f, c, m, v) {
    var S = m.type;
    return S === Yt
      ? d(f, c, m.props.children, v, m.key)
      : c !== null &&
          (c.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === it &&
              Ps(S) === c.type))
        ? ((v = o(c, m.props)), (v.ref = Tn(f, c, m)), (v.return = f), v)
        : ((v = Gr(m.type, m.key, m.props, null, f.mode, v)),
          (v.ref = Tn(f, c, m)),
          (v.return = f),
          v);
  }
  function a(f, c, m, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Ni(m, f.mode, v)), (c.return = f), c)
      : ((c = o(c, m.children || [])), (c.return = f), c);
  }
  function d(f, c, m, v, S) {
    return c === null || c.tag !== 7
      ? ((c = Dt(m, f.mode, v, S)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function p(f, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ci("" + c, f.mode, m)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sr:
          return (
            (m = Gr(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = Tn(f, null, c)),
            (m.return = f),
            m
          );
        case Kt:
          return (c = Ni(c, f.mode, m)), (c.return = f), c;
        case it:
          var v = c._init;
          return p(f, v(c._payload), m);
      }
      if (Ln(c) || xn(c))
        return (c = Dt(c, f.mode, m, null)), (c.return = f), c;
      zr(f, c);
    }
    return null;
  }
  function h(f, c, m, v) {
    var S = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : u(f, c, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Sr:
          return m.key === S ? s(f, c, m, v) : null;
        case Kt:
          return m.key === S ? a(f, c, m, v) : null;
        case it:
          return (S = m._init), h(f, c, S(m._payload), v);
      }
      if (Ln(m) || xn(m)) return S !== null ? null : d(f, c, m, v, null);
      zr(f, m);
    }
    return null;
  }
  function y(f, c, m, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(m) || null), u(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Sr:
          return (f = f.get(v.key === null ? m : v.key) || null), s(c, f, v, S);
        case Kt:
          return (f = f.get(v.key === null ? m : v.key) || null), a(c, f, v, S);
        case it:
          var E = v._init;
          return y(f, c, m, E(v._payload), S);
      }
      if (Ln(v) || xn(v)) return (f = f.get(m) || null), d(c, f, v, S, null);
      zr(c, v);
    }
    return null;
  }
  function g(f, c, m, v) {
    for (
      var S = null, E = null, x = c, P = (c = 0), I = null;
      x !== null && P < m.length;
      P++
    ) {
      x.index > P ? ((I = x), (x = null)) : (I = x.sibling);
      var R = h(f, x, m[P], v);
      if (R === null) {
        x === null && (x = I);
        break;
      }
      e && x && R.alternate === null && t(f, x),
        (c = i(R, c, P)),
        E === null ? (S = R) : (E.sibling = R),
        (E = R),
        (x = I);
    }
    if (P === m.length) return n(f, x), $ && Nt(f, P), S;
    if (x === null) {
      for (; P < m.length; P++)
        (x = p(f, m[P], v)),
          x !== null &&
            ((c = i(x, c, P)), E === null ? (S = x) : (E.sibling = x), (E = x));
      return $ && Nt(f, P), S;
    }
    for (x = r(f, x); P < m.length; P++)
      (I = y(x, f, P, m[P], v)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? P : I.key),
          (c = i(I, c, P)),
          E === null ? (S = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        x.forEach(function (ve) {
          return t(f, ve);
        }),
      $ && Nt(f, P),
      S
    );
  }
  function w(f, c, m, v) {
    var S = xn(m);
    if (typeof S != "function") throw Error(_(150));
    if (((m = S.call(m)), m == null)) throw Error(_(151));
    for (
      var E = (S = null), x = c, P = (c = 0), I = null, R = m.next();
      x !== null && !R.done;
      P++, R = m.next()
    ) {
      x.index > P ? ((I = x), (x = null)) : (I = x.sibling);
      var ve = h(f, x, R.value, v);
      if (ve === null) {
        x === null && (x = I);
        break;
      }
      e && x && ve.alternate === null && t(f, x),
        (c = i(ve, c, P)),
        E === null ? (S = ve) : (E.sibling = ve),
        (E = ve),
        (x = I);
    }
    if (R.done) return n(f, x), $ && Nt(f, P), S;
    if (x === null) {
      for (; !R.done; P++, R = m.next())
        (R = p(f, R.value, v)),
          R !== null &&
            ((c = i(R, c, P)), E === null ? (S = R) : (E.sibling = R), (E = R));
      return $ && Nt(f, P), S;
    }
    for (x = r(f, x); !R.done; P++, R = m.next())
      (R = y(x, f, P, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? P : R.key),
          (c = i(R, c, P)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        x.forEach(function (En) {
          return t(f, En);
        }),
      $ && Nt(f, P),
      S
    );
  }
  function k(f, c, m, v) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Yt &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Sr:
          e: {
            for (var S = m.key, E = c; E !== null; ) {
              if (E.key === S) {
                if (((S = m.type), S === Yt)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = o(E, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === it &&
                    Ps(S) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = o(E, m.props)),
                    (c.ref = Tn(f, E, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            m.type === Yt
              ? ((c = Dt(m.props.children, f.mode, v, m.key)),
                (c.return = f),
                (f = c))
              : ((v = Gr(m.type, m.key, m.props, null, f.mode, v)),
                (v.ref = Tn(f, c, m)),
                (v.return = f),
                (f = v));
          }
          return l(f);
        case Kt:
          e: {
            for (E = m.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Ni(m, f.mode, v)), (c.return = f), (f = c);
          }
          return l(f);
        case it:
          return (E = m._init), k(f, c, E(m._payload), v);
      }
      if (Ln(m)) return g(f, c, m, v);
      if (xn(m)) return w(f, c, m, v);
      zr(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = Ci(m, f.mode, v)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return k;
}
var mn = Mc(!0),
  Fc = Mc(!1),
  mo = kt(null),
  ho = null,
  tn = null,
  lu = null;
function uu() {
  lu = tn = ho = null;
}
function su(e) {
  var t = mo.current;
  A(mo), (e._currentValue = t);
}
function al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (ho = e),
    (lu = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (ho === null) throw Error(_(308));
      (tn = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var zt = null;
function au(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Uc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), au(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var lt = !1;
function cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ac(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), au(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
  }
}
function Cs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vo(e, t, n, r) {
  var o = e.updateQueue;
  lt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== l &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (d = a = s = null), (u = i);
    do {
      var h = u.lane,
        y = u.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            w = u;
          switch (((h = t), (y = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                p = g.call(y, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (h = typeof g == "function" ? g.call(y, p, h) : g),
                h == null)
              )
                break e;
              p = H({}, p, h);
              break e;
            case 2:
              lt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [u]) : h.push(u));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = y), (s = p)) : (d = d.next = y),
          (l |= h);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = p),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (At |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Ns(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var hr = {},
  Qe = kt(hr),
  rr = kt(hr),
  or = kt(hr);
function jt(e) {
  if (e === hr) throw Error(_(174));
  return e;
}
function fu(e, t) {
  switch ((F(or, t), F(rr, e), F(Qe, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hi(t, e));
  }
  A(Qe), F(Qe, t);
}
function hn() {
  A(Qe), A(rr), A(or);
}
function $c(e) {
  jt(or.current);
  var t = jt(Qe.current),
    n = Hi(t, e.type);
  t !== n && (F(rr, e), F(Qe, n));
}
function du(e) {
  rr.current === e && (A(Qe), A(rr));
}
var W = kt(0);
function yo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Si = [];
function pu() {
  for (var e = 0; e < Si.length; e++)
    Si[e]._workInProgressVersionPrimary = null;
  Si.length = 0;
}
var Hr = rt.ReactCurrentDispatcher,
  _i = rt.ReactCurrentBatchConfig,
  Ut = 0,
  B = null,
  G = null,
  q = null,
  go = !1,
  Bn = !1,
  ir = 0,
  gm = 0;
function re() {
  throw Error(_(321));
}
function mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function hu(e, t, n, r, o, i) {
  if (
    ((Ut = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? Em : km),
    (e = n(r, o)),
    Bn)
  ) {
    i = 0;
    do {
      if (((Bn = !1), (ir = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Hr.current = xm),
        (e = n(r, o));
    } while (Bn);
  }
  if (
    ((Hr.current = wo),
    (t = G !== null && G.next !== null),
    (Ut = 0),
    (q = G = B = null),
    (go = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function vu() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function ze() {
  if (G === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? B.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(_(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ei(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = G,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = i;
    do {
      var d = a.lane;
      if ((Ut & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (l = r)) : (s = s.next = p),
          (B.lanes |= d),
          (At |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      $e(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (B.lanes |= i), (At |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    $e(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Wc() {}
function Bc(e, t) {
  var n = B,
    r = ze(),
    o = t(),
    i = !$e(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (de = !0)),
    (r = r.queue),
    yu(Qc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Vc.bind(null, n, r, o, t), void 0, null),
      J === null)
    )
      throw Error(_(349));
    Ut & 30 || Hc(n, t, o);
  }
  return o;
}
function Hc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kc(t) && Yc(e);
}
function Qc(e, t, n) {
  return n(function () {
    Kc(t) && Yc(e);
  });
}
function Kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Yc(e) {
  var t = et(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Os(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _m.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gc() {
  return ze().memoizedState;
}
function Vr(e, t, n, r) {
  var o = Be();
  (B.flags |= e),
    (o.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ao(e, t, n, r) {
  var o = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var l = G.memoizedState;
    if (((i = l.destroy), r !== null && mu(r, l.deps))) {
      o.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (o.memoizedState = ur(1 | t, n, i, r));
}
function Ts(e, t) {
  return Vr(8390656, 8, e, t);
}
function yu(e, t) {
  return Ao(2048, 8, e, t);
}
function Xc(e, t) {
  return Ao(4, 2, e, t);
}
function Zc(e, t) {
  return Ao(4, 4, e, t);
}
function qc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Jc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, qc.bind(null, t, e), n)
  );
}
function gu() {}
function bc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ef(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tf(e, t, n) {
  return Ut & 21
    ? ($e(n, t) || ((n = lc()), (B.lanes |= n), (At |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function wm(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _i.transition;
  _i.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (_i.transition = r);
  }
}
function nf() {
  return ze().memoizedState;
}
function Sm(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rf(e))
  )
    of(t, n);
  else if (((n = Uc(e, t, n, r)), n !== null)) {
    var o = se();
    Ue(n, e, r, o), lf(n, t, r);
  }
}
function _m(e, t, n) {
  var r = yt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rf(e)) of(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), $e(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), au(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Uc(e, t, o, r)),
      n !== null && ((o = se()), Ue(n, e, r, o), lf(n, t, r));
  }
}
function rf(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function of(e, t) {
  Bn = go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
  }
}
var wo = {
    readContext: Re,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: Re,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: Ts,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vr(4194308, 4, qc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sm.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Os,
    useDebugValue: gu,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Os(!1),
        t = e[0];
      return (e = wm.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        o = Be();
      if ($) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(_(349));
        Ut & 30 || Hc(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ts(Qc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, Vc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = J.identifierPrefix;
      if ($) {
        var n = Ze,
          r = Xe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: Re,
    useCallback: bc,
    useContext: Re,
    useEffect: yu,
    useImperativeHandle: Jc,
    useInsertionEffect: Xc,
    useLayoutEffect: Zc,
    useMemo: ef,
    useReducer: Ei,
    useRef: Gc,
    useState: function () {
      return Ei(lr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = ze();
      return tf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Ei(lr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Bc,
    useId: nf,
    unstable_isNewReconciler: !1,
  },
  xm = {
    readContext: Re,
    useCallback: bc,
    useContext: Re,
    useEffect: yu,
    useImperativeHandle: Jc,
    useInsertionEffect: Xc,
    useLayoutEffect: Zc,
    useMemo: ef,
    useReducer: ki,
    useRef: Gc,
    useState: function () {
      return ki(lr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = ze();
      return G === null ? (t.memoizedState = e) : tf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(lr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Bc,
    useId: nf,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function cl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      o = yt(e),
      i = qe(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, o)),
      t !== null && (Ue(t, e, o, r), Br(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      o = yt(e),
      i = qe(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, o)),
      t !== null && (Ue(t, e, o, r), Br(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = yt(e),
      o = qe(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ht(e, o, r)),
      t !== null && (Ue(t, e, r, n), Br(t, e, r));
  },
};
function Rs(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bn(n, r) || !bn(o, i)
        : !0
  );
}
function uf(e, t, n) {
  var r = !1,
    o = St,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Re(i))
      : ((o = me(t) ? Mt : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dn(e, o) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $o.enqueueReplaceState(t, t.state, null);
}
function fl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), cu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Re(i))
    : ((i = me(t) ? Mt : le.current), (o.context = dn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (cl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $o.enqueueReplaceState(o, o.state, null),
      vo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function xi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function dl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pm = typeof WeakMap == "function" ? WeakMap : Map;
function sf(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _o || ((_o = !0), (El = r)), dl(e, t);
    }),
    n
  );
}
function af(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        dl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        dl(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Am.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Is(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cm = rt.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Fc(t, null, n, r) : mn(t, e.child, n, r);
}
function Ds(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    an(t, o),
    (r = hu(e, t, n, r, i, o)),
    (n = vu()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tt(e, t, o))
      : ($ && n && ru(t), (t.flags |= 1), ue(e, t, r, o), t.child)
  );
}
function Ms(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Cu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cf(e, t, i, r, o))
      : ((e = Gr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(l, r) && e.ref === t.ref)
    )
      return tt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = gt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), tt(e, t, o);
  }
  return pl(e, t, n, r, o);
}
function ff(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(rn, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(rn, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(rn, ye),
        (ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(rn, ye),
      (ye |= r);
  return ue(e, t, o, n), t.child;
}
function df(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function pl(e, t, n, r, o) {
  var i = me(n) ? Mt : le.current;
  return (
    (i = dn(t, i)),
    an(t, o),
    (n = hu(e, t, n, r, i, o)),
    (r = vu()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tt(e, t, o))
      : ($ && r && ru(t), (t.flags |= 1), ue(e, t, n, o), t.child)
  );
}
function Fs(e, t, n, r, o) {
  if (me(n)) {
    var i = !0;
    co(t);
  } else i = !1;
  if ((an(t, o), t.stateNode === null))
    Qr(e, t), uf(t, n, r), fl(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Re(a))
      : ((a = me(n) ? Mt : le.current), (a = dn(t, a)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && zs(t, l, r, a)),
      (lt = !1);
    var h = t.memoizedState;
    (l.state = h),
      vo(t, r, l, o),
      (s = t.memoizedState),
      u !== r || h !== s || pe.current || lt
        ? (typeof d == "function" && (cl(t, n, d, r), (s = t.memoizedState)),
          (u = lt || Rs(t, n, u, r, h, s, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Ac(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (l.props = a),
      (p = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Re(s))
        : ((s = me(n) ? Mt : le.current), (s = dn(t, s)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== p || h !== s) && zs(t, l, r, s)),
      (lt = !1),
      (h = t.memoizedState),
      (l.state = h),
      vo(t, r, l, o);
    var g = t.memoizedState;
    u !== p || h !== g || pe.current || lt
      ? (typeof y == "function" && (cl(t, n, y, r), (g = t.memoizedState)),
        (a = lt || Rs(t, n, a, r, h, g, s) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ml(e, t, n, r, i, o);
}
function ml(e, t, n, r, o, i) {
  df(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Es(t, n, !1), tt(e, t, i);
  (r = t.stateNode), (Cm.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    o && Es(t, n, !0),
    t.child
  );
}
function pf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _s(e, t.context, !1),
    fu(e, t.containerInfo);
}
function Us(e, t, n, r, o) {
  return pn(), iu(o), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
function vl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mf(e, t, n) {
  var r = t.pendingProps,
    o = W.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    F(W, o & 1),
    e === null)
  )
    return (
      sl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ho(l, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vl(n)),
              (t.memoizedState = hl),
              e)
            : wu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Nm(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = gt(u, i)) : ((i = Dt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? vl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = hl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wu(e, t) {
  return (
    (t = Ho({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && iu(r),
    mn(t, e.child, null, n),
    (e = wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xi(Error(_(422)))), jr(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ho({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Dt(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && mn(t, e.child, null, l),
          (t.child.memoizedState = vl(l)),
          (t.memoizedState = hl),
          i);
  if (!(t.mode & 1)) return jr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(_(419))), (r = xi(i, r, void 0)), jr(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), de || u)) {
    if (((r = J), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), et(e, o), Ue(r, e, o, -1));
    }
    return Pu(), (r = xi(Error(_(421)))), jr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $m.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = mt(o.nextSibling)),
      (Se = t),
      ($ = !0),
      (De = null),
      e !== null &&
        ((Ce[Ne++] = Xe),
        (Ce[Ne++] = Ze),
        (Ce[Ne++] = Ft),
        (Xe = e.id),
        (Ze = e.overflow),
        (Ft = t)),
      (t = wu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function As(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), al(e.return, t, n);
}
function Pi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function hf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && As(e, n, t);
        else if (e.tag === 19) As(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Pi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Pi(t, !0, n, null, i);
        break;
      case "together":
        Pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (At |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Om(e, t, n) {
  switch (t.tag) {
    case 3:
      pf(t), pn();
      break;
    case 5:
      $c(t);
      break;
    case 1:
      me(t.type) && co(t);
      break;
    case 4:
      fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      F(mo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? mf(e, t, n)
            : (F(W, W.current & 1),
              (e = tt(e, t, n)),
              e !== null ? e.sibling : null);
      F(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        F(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ff(e, t, n);
  }
  return tt(e, t, n);
}
var vf, yl, yf, gf;
vf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yl = function () {};
yf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jt(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ai(e, o)), (r = Ai(e, r)), (i = []);
        break;
      case "select":
        (o = H({}, o, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Bi(e, o)), (r = Bi(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = so);
    }
    Vi(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(a, "" + s)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (Kn.hasOwnProperty(a)
                  ? (s != null && a === "onScroll" && U("scroll", e),
                    i || u === s || (i = []))
                  : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Tm(e, t, n) {
  var r = t.pendingProps;
  switch ((ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && ao(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        A(pe),
        A(le),
        pu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Pl(De), (De = null)))),
        yl(e, t),
        oe(t),
        null
      );
    case 5:
      du(t);
      var o = jt(or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return oe(t), null;
        }
        if (((e = jt(Qe.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Dn.length; o++) U(Dn[o], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Gu(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Zu(r, i), U("invalid", r);
          }
          Vi(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, u, e),
                    (o = ["children", "" + u]))
                : Kn.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              _r(r), Xu(r, i, !0);
              break;
            case "textarea":
              _r(r), qu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = so);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[He] = t),
            (e[nr] = r),
            vf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Qi(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Dn.length; o++) U(Dn[o], e);
                o = r;
                break;
              case "source":
                U("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (o = r);
                break;
              case "details":
                U("toggle", e), (o = r);
                break;
              case "input":
                Gu(e, r), (o = Ai(e, r)), U("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Zu(e, r), (o = Bi(e, r)), U("invalid", e);
                break;
              default:
                o = r;
            }
            Vi(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ga(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ka(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Yn(e, s)
                        : typeof s == "number" && Yn(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Kn.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && U("scroll", e)
                          : s != null && Hl(e, i, s, l));
              }
            switch (n) {
              case "input":
                _r(e), Xu(e, r, !1);
                break;
              case "textarea":
                _r(e), qu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? on(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = so);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = jt(or.current)), jt(Qe.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (A(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          Dc(), pn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[He] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else De !== null && (Pl(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? X === 0 && (X = 3) : Pu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        hn(), yl(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return su(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && ao(), oe(t), null;
    case 19:
      if ((A(W), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Rn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = yo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > yn &&
            ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !$)
            )
              return oe(t), null;
          } else
            2 * K() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = W.current),
          F(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        xu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Rm(e, t) {
  switch ((ou(t), t.tag)) {
    case 1:
      return (
        me(t.type) && ao(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        A(pe),
        A(le),
        pu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return du(t), null;
    case 13:
      if ((A(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(W), null;
    case 4:
      return hn(), null;
    case 10:
      return su(t.type._context), null;
    case 22:
    case 23:
      return xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  zm = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function gl(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var $s = !1;
function jm(e, t) {
  if (((tl = io), (e = Ec()), nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (u = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++a === o && (u = l),
                h === i && ++d === r && (s = l),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nl = { focusedElem: e, selectionRange: n }, io = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    k = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Le(t.type, w),
                      k
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (g = $s), ($s = !1), g;
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && gl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function wl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[nr], delete t[il], delete t[mm], delete t[hm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = so));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), (e = e.sibling);
}
function _l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_l(e, t, n), e = e.sibling; e !== null; ) _l(e, t, n), (e = e.sibling);
}
var ee = null,
  Ie = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) _f(e, t, n), (n = n.sibling);
}
function _f(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Lo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || nn(n, t);
    case 6:
      var r = ee,
        o = Ie;
      (ee = null),
        ot(e, t, n),
        (ee = r),
        (Ie = o),
        ee !== null &&
          (Ie
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Ie
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? gi(e.parentNode, n)
              : e.nodeType === 1 && gi(e, n),
            qn(e))
          : gi(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (o = Ie),
        (ee = n.stateNode.containerInfo),
        (Ie = !0),
        ot(e, t, n),
        (ee = r),
        (Ie = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && gl(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), ot(e, t, n), (ie = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Bs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zm()),
      t.forEach(function (r) {
        var o = Wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(_(160));
        _f(i, l, o), (ee = null), (Ie = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        V(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ef(t, e), (t = t.sibling);
}
function Ef(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), We(e), r & 4)) {
        try {
          Hn(3, e, e.return), Wo(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Hn(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      je(t, e), We(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        We(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yn(o, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Ha(o, i),
              Qi(u, l);
            var a = Qi(u, i);
            for (l = 0; l < s.length; l += 2) {
              var d = s[l],
                p = s[l + 1];
              d === "style"
                ? Ga(o, p)
                : d === "dangerouslySetInnerHTML"
                  ? Ka(o, p)
                  : d === "children"
                    ? Yn(o, p)
                    : Hl(o, d, p, a);
            }
            switch (u) {
              case "input":
                $i(o, i);
                break;
              case "textarea":
                Va(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? on(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? on(o, !!i.multiple, i.defaultValue, !0)
                      : on(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[nr] = i;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((je(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      je(t, e), We(e);
      break;
    case 13:
      je(t, e),
        We(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Eu = K())),
        r & 4 && Bs(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || d), je(t, e), (ie = a)) : je(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (C = e, d = e.child; d !== null; ) {
            for (p = C = d; C !== null; ) {
              switch (((h = C), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, h, h.return);
                  break;
                case 1:
                  nn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  nn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Vs(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (C = y)) : Vs(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ya("display", l)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      je(t, e), We(e), r & 4 && Bs(e);
      break;
    case 21:
      break;
    default:
      je(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yn(o, ""), (r.flags &= -33));
          var i = Ws(e);
          _l(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Ws(e);
          Sl(e, u, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lm(e, t, n) {
  (C = e), kf(e);
}
function kf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var o = C,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Lr;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var a = ie;
        if (((Lr = l), (ie = s) && !a))
          for (C = o; C !== null; )
            (l = C),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Qs(o)
                : s !== null
                  ? ((s.return = l), (C = s))
                  : Qs(o);
        for (; i !== null; ) (C = i), kf(i), (i = i.sibling);
        (C = o), (Lr = u), (ie = a);
      }
      Hs(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (C = i)) : Hs(e);
  }
}
function Hs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Wo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ns(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ns(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && qn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        ie || (t.flags & 512 && wl(t));
      } catch (h) {
        V(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Vs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Qs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wo(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, o, s);
            }
          }
          var i = t.return;
          try {
            wl(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            wl(t);
          } catch (s) {
            V(t, l, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var Im = Math.ceil,
  So = rt.ReactCurrentDispatcher,
  Su = rt.ReactCurrentOwner,
  Te = rt.ReactCurrentBatchConfig,
  L = 0,
  J = null,
  Y = null,
  te = 0,
  ye = 0,
  rn = kt(0),
  X = 0,
  sr = null,
  At = 0,
  Bo = 0,
  _u = 0,
  Vn = null,
  fe = null,
  Eu = 0,
  yn = 1 / 0,
  Ye = null,
  _o = !1,
  El = null,
  vt = null,
  Ir = !1,
  ct = null,
  Eo = 0,
  Qn = 0,
  kl = null,
  Kr = -1,
  Yr = 0;
function se() {
  return L & 6 ? K() : Kr !== -1 ? Kr : (Kr = K());
}
function yt(e) {
  return e.mode & 1
    ? L & 2 && te !== 0
      ? te & -te
      : ym.transition !== null
        ? (Yr === 0 && (Yr = lc()), Yr)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pc(e.type))),
          e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (kl = null), Error(_(185)));
  dr(e, n, r),
    (!(L & 2) || e !== J) &&
      (e === J && (!(L & 2) && (Bo |= n), X === 4 && st(e, te)),
      he(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((yn = K() + 500), Uo && xt()));
}
function he(e, t) {
  var n = e.callbackNode;
  yp(e, t);
  var r = oo(e, e === J ? te : 0);
  if (r === 0)
    n !== null && es(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && es(n), t === 1))
      e.tag === 0 ? vm(Ks.bind(null, e)) : jc(Ks.bind(null, e)),
        dm(function () {
          !(L & 6) && xt();
        }),
        (n = null);
    else {
      switch (uc(r)) {
        case 1:
          n = Gl;
          break;
        case 4:
          n = oc;
          break;
        case 16:
          n = ro;
          break;
        case 536870912:
          n = ic;
          break;
        default:
          n = ro;
      }
      n = zf(n, xf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xf(e, t) {
  if (((Kr = -1), (Yr = 0), L & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = oo(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ko(e, r);
  else {
    t = r;
    var o = L;
    L |= 2;
    var i = Cf();
    (J !== e || te !== t) && ((Ye = null), (yn = K() + 500), It(e, t));
    do
      try {
        Fm();
        break;
      } catch (u) {
        Pf(e, u);
      }
    while (!0);
    uu(),
      (So.current = i),
      (L = o),
      Y !== null ? (t = 0) : ((J = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zi(e)), o !== 0 && ((r = o), (t = xl(e, o)))), t === 1)
    )
      throw ((n = sr), It(e, 0), st(e, r), he(e, K()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Dm(o) &&
          ((t = ko(e, r)),
          t === 2 && ((i = Zi(e)), i !== 0 && ((r = i), (t = xl(e, i)))),
          t === 1))
      )
        throw ((n = sr), It(e, 0), st(e, r), he(e, K()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Ot(e, fe, Ye);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = Eu + 500 - K()), 10 < t))
          ) {
            if (oo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ol(Ot.bind(null, e, fe, Ye), t);
            break;
          }
          Ot(e, fe, Ye);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Fe(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ol(Ot.bind(null, e, fe, Ye), r);
            break;
          }
          Ot(e, fe, Ye);
          break;
        case 5:
          Ot(e, fe, Ye);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? xf.bind(null, e) : null;
}
function xl(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Pl(t)),
    e
  );
}
function Pl(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!$e(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~_u,
      t &= ~Bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ks(e) {
  if (L & 6) throw Error(_(327));
  cn();
  var t = oo(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zi(e);
    r !== 0 && ((t = r), (n = xl(e, r)));
  }
  if (n === 1) throw ((n = sr), It(e, 0), st(e, t), he(e, K()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, fe, Ye),
    he(e, K()),
    null
  );
}
function ku(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((yn = K() + 500), Uo && xt());
  }
}
function $t(e) {
  ct !== null && ct.tag === 0 && !(L & 6) && cn();
  var t = L;
  L |= 1;
  var n = Te.transition,
    r = D;
  try {
    if (((Te.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Te.transition = n), (L = t), !(L & 6) && xt();
  }
}
function xu() {
  (ye = rn.current), A(rn);
}
function It(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fm(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ao();
          break;
        case 3:
          hn(), A(pe), A(le), pu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          A(W);
          break;
        case 19:
          A(W);
          break;
        case 10:
          su(r.type._context);
          break;
        case 22:
        case 23:
          xu();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Y = e = gt(e.current, null)),
    (te = ye = t),
    (X = 0),
    (sr = null),
    (_u = Bo = At = 0),
    (fe = Vn = null),
    zt !== null)
  ) {
    for (t = 0; t < zt.length; t++)
      if (((n = zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    zt = null;
  }
  return e;
}
function Pf(e, t) {
  do {
    var n = Y;
    try {
      if ((uu(), (Hr.current = wo), go)) {
        for (var r = B.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        go = !1;
      }
      if (
        ((Ut = 0),
        (q = G = B = null),
        (Bn = !1),
        (ir = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (sr = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = Ls(l);
          if (y !== null) {
            (y.flags &= -257),
              Is(y, l, u, i, t),
              y.mode & 1 && js(i, a, t),
              (t = y),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              js(i, a, t), Pu();
              break e;
            }
            s = Error(_(426));
          }
        } else if ($ && u.mode & 1) {
          var k = Ls(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Is(k, l, u, i, t),
              iu(vn(s, u));
            break e;
          }
        }
        (i = s = vn(s, u)),
          X !== 4 && (X = 2),
          Vn === null ? (Vn = [i]) : Vn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = sf(i, s, t);
              Cs(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (vt === null || !vt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = af(i, u, t);
                Cs(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Of(n);
    } catch (S) {
      (t = S), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cf() {
  var e = So.current;
  return (So.current = wo), e === null ? wo : e;
}
function Pu() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(At & 268435455) && !(Bo & 268435455)) || st(J, te);
}
function ko(e, t) {
  var n = L;
  L |= 2;
  var r = Cf();
  (J !== e || te !== t) && ((Ye = null), It(e, t));
  do
    try {
      Mm();
      break;
    } catch (o) {
      Pf(e, o);
    }
  while (!0);
  if ((uu(), (L = n), (So.current = r), Y !== null)) throw Error(_(261));
  return (J = null), (te = 0), X;
}
function Mm() {
  for (; Y !== null; ) Nf(Y);
}
function Fm() {
  for (; Y !== null && !sp(); ) Nf(Y);
}
function Nf(e) {
  var t = Rf(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Of(e) : (Y = t),
    (Su.current = null);
}
function Of(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rm(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = Tm(n, t, ye)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Ot(e, t, n) {
  var r = D,
    o = Te.transition;
  try {
    (Te.transition = null), (D = 1), Um(e, t, n, r);
  } finally {
    (Te.transition = o), (D = r);
  }
  return null;
}
function Um(e, t, n, r) {
  do cn();
  while (ct !== null);
  if (L & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (gp(e, i),
    e === J && ((Y = J = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ir ||
      ((Ir = !0),
      zf(ro, function () {
        return cn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Te.transition), (Te.transition = null);
    var l = D;
    D = 1;
    var u = L;
    (L |= 4),
      (Su.current = null),
      jm(e, n),
      Ef(n, e),
      om(nl),
      (io = !!tl),
      (nl = tl = null),
      (e.current = n),
      Lm(n),
      ap(),
      (L = u),
      (D = l),
      (Te.transition = i);
  } else e.current = n;
  if (
    (Ir && ((Ir = !1), (ct = e), (Eo = o)),
    (i = e.pendingLanes),
    i === 0 && (vt = null),
    dp(n.stateNode),
    he(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (_o) throw ((_o = !1), (e = El), (El = null), e);
  return (
    Eo & 1 && e.tag !== 0 && cn(),
    (i = e.pendingLanes),
    i & 1 ? (e === kl ? Qn++ : ((Qn = 0), (kl = e))) : (Qn = 0),
    xt(),
    null
  );
}
function cn() {
  if (ct !== null) {
    var e = uc(Eo),
      t = Te.transition,
      n = D;
    try {
      if (((Te.transition = null), (D = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (Eo = 0), L & 6)) throw Error(_(331));
        var o = L;
        for (L |= 4, C = e.current; C !== null; ) {
          var i = C,
            l = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var d = C;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (C = p);
                  else
                    for (; C !== null; ) {
                      d = C;
                      var h = d.sibling,
                        y = d.return;
                      if ((wf(d), d === a)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (C = h);
                        break;
                      }
                      C = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (C = l);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          l = C;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (C = m);
          else
            e: for (l = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(9, u);
                  }
                } catch (S) {
                  V(u, u.return, S);
                }
              if (u === l) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((L = o), xt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Lo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Te.transition = t);
    }
  }
  return !1;
}
function Ys(e, t, n) {
  (t = vn(n, t)),
    (t = sf(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = se()),
    e !== null && (dr(e, 1, t), he(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Ys(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ys(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          (e = vn(n, e)),
            (e = af(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = se()),
            t !== null && (dr(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Am(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > K() - Eu)
        ? It(e, 0)
        : (_u |= n)),
    he(e, t);
}
function Tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xr), (xr <<= 1), !(xr & 130023424) && (xr = 4194304))
      : (t = 1));
  var n = se();
  (e = et(e, t)), e !== null && (dr(e, t, n), he(e, n));
}
function $m(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tf(e, n);
}
function Wm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Tf(e, n);
}
var Rf;
Rf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Om(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Lc(t, po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qr(e, t), (e = t.pendingProps);
      var o = dn(t, le.current);
      an(t, n), (o = hu(null, t, r, e, o, n));
      var i = vu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), co(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            cu(t),
            (o.updater = $o),
            (t.stateNode = o),
            (o._reactInternals = t),
            fl(t, r, e, n),
            (t = ml(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && ru(t), ue(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Hm(r)),
          (e = Le(r, e)),
          o)
        ) {
          case 0:
            t = pl(null, t, r, e, n);
            break e;
          case 1:
            t = Fs(null, t, r, e, n);
            break e;
          case 11:
            t = Ds(null, t, r, e, n);
            break e;
          case 14:
            t = Ms(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Le(r, o)),
        pl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Le(r, o)),
        Fs(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((pf(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ac(e, t),
          vo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = vn(Error(_(423)), t)), (t = Us(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = vn(Error(_(424)), t)), (t = Us(e, t, r, n, o));
            break e;
          } else
            for (
              ge = mt(t.stateNode.containerInfo.firstChild),
                Se = t,
                $ = !0,
                De = null,
                n = Fc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === o)) {
            t = tt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $c(t),
        e === null && sl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        rl(r, o) ? (l = null) : i !== null && rl(r, i) && (t.flags |= 32),
        df(e, t),
        ue(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && sl(t), null;
    case 13:
      return mf(e, t, n);
    case 4:
      return (
        fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Le(r, o)),
        Ds(e, t, r, o, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          F(mo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if ($e(i.value, l)) {
            if (i.children === o.children && !pe.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      al(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(_(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  al(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ue(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (o = Re(o)),
        (r = r(o)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Le(r, t.pendingProps)),
        (o = Le(r.type, o)),
        Ms(e, t, r, o, n)
      );
    case 15:
      return cf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Le(r, o)),
        Qr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), co(t)) : (e = !1),
        an(t, n),
        uf(t, r, o),
        fl(t, r, o, n),
        ml(null, t, r, !0, e, n)
      );
    case 19:
      return hf(e, t, n);
    case 22:
      return ff(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function zf(e, t) {
  return rc(e, t);
}
function Bm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new Bm(e, t, n, r);
}
function Cu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hm(e) {
  if (typeof e == "function") return Cu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ql)) return 11;
    if (e === Kl) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Cu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Yt:
        return Dt(n.children, o, i, t);
      case Vl:
        (l = 8), (o |= 8);
        break;
      case Di:
        return (
          (e = Oe(12, n, t, o | 2)), (e.elementType = Di), (e.lanes = i), e
        );
      case Mi:
        return (e = Oe(13, n, t, o)), (e.elementType = Mi), (e.lanes = i), e;
      case Fi:
        return (e = Oe(19, n, t, o)), (e.elementType = Fi), (e.lanes = i), e;
      case $a:
        return Ho(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ua:
              l = 10;
              break e;
            case Aa:
              l = 9;
              break e;
            case Ql:
              l = 11;
              break e;
            case Kl:
              l = 14;
              break e;
            case it:
              (l = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dt(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Ho(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = $a),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ci(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function Ni(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vm(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ui(0)),
    (this.expirationTimes = ui(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ui(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Nu(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new Vm(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Oe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cu(i),
    e
  );
}
function Qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jf(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return zc(e, n, t);
  }
  return t;
}
function Lf(e, t, n, r, o, i, l, u, s) {
  return (
    (e = Nu(n, r, !0, e, o, i, l, u, s)),
    (e.context = jf(null)),
    (n = e.current),
    (r = se()),
    (o = yt(n)),
    (i = qe(r, o)),
    (i.callback = t ?? null),
    ht(n, i, o),
    (e.current.lanes = o),
    dr(e, o, r),
    he(e, r),
    e
  );
}
function Vo(e, t, n, r) {
  var o = t.current,
    i = se(),
    l = yt(o);
  return (
    (n = jf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(o, t, l)),
    e !== null && (Ue(e, o, l, i), Br(e, o, l)),
    l
  );
}
function xo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Km() {
  return null;
}
var If =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tu(e) {
  this._internalRoot = e;
}
Qo.prototype.render = Tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Vo(e, t, null, null);
};
Qo.prototype.unmount = Tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Vo(null, e, null, null);
    }),
      (t[be] = null);
  }
};
function Qo(e) {
  this._internalRoot = e;
}
Qo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && dc(e);
  }
};
function Ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ko(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xs() {}
function Ym(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = xo(l);
        i.call(a);
      };
    }
    var l = Lf(t, r, e, 0, null, !1, !1, "", Xs);
    return (
      (e._reactRootContainer = l),
      (e[be] = l.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = xo(s);
      u.call(a);
    };
  }
  var s = Nu(e, 0, !1, null, null, !1, !1, "", Xs);
  return (
    (e._reactRootContainer = s),
    (e[be] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Vo(t, s, n, r);
    }),
    s
  );
}
function Yo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var s = xo(l);
        u.call(s);
      };
    }
    Vo(t, l, e, o);
  } else l = Ym(n, t, e, o, r);
  return xo(l);
}
sc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Xl(t, n | 1), he(t, K()), !(L & 6) && ((yn = K() + 500), xt()));
      }
      break;
    case 13:
      $t(function () {
        var r = et(e, 1);
        if (r !== null) {
          var o = se();
          Ue(r, e, 1, o);
        }
      }),
        Ou(e, 1);
  }
};
Zl = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = se();
      Ue(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
ac = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = et(e, t);
    if (n !== null) {
      var r = se();
      Ue(n, e, t, r);
    }
    Ou(e, t);
  }
};
cc = function () {
  return D;
};
fc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Yi = function (e, t, n) {
  switch (t) {
    case "input":
      if (($i(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fo(r);
            if (!o) throw Error(_(90));
            Ba(r), $i(r, o);
          }
        }
      }
      break;
    case "textarea":
      Va(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
qa = ku;
Ja = $t;
var Gm = { usingClientEntryPoint: !1, Events: [mr, qt, Fo, Xa, Za, ku] },
  zn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xm = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || Km,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber)
    try {
      (Lo = Dr.inject(Xm)), (Ve = Dr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ru(t)) throw Error(_(200));
  return Qm(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!Ru(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = If;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Nu(e, 1, !1, null, null, n, !1, r, o)),
    (e[be] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new Tu(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = tc(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return $t(e);
};
xe.hydrate = function (e, t, n) {
  if (!Ko(t)) throw Error(_(200));
  return Yo(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!Ru(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = If;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Lf(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[be] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qo(t);
};
xe.render = function (e, t, n) {
  if (!Ko(t)) throw Error(_(200));
  return Yo(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Ko(e)) throw Error(_(40));
  return e._reactRootContainer
    ? ($t(function () {
        Yo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = ku;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ko(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Yo(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function Df() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df);
    } catch (e) {
      console.error(e);
    }
}
Df(), (Ia.exports = xe);
var Zm = Ia.exports,
  Zs = Zm;
(Li.createRoot = Zs.createRoot), (Li.hydrateRoot = Zs.hydrateRoot);
const qm = "modulepreload",
  Jm = function (e) {
    return "/" + e;
  },
  qs = {},
  Mf = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        l =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.all(
        n.map((u) => {
          if (((u = Jm(u)), u in qs)) return;
          qs[u] = !0;
          const s = u.endsWith(".css"),
            a = s ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${u}"]${a}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = s ? "stylesheet" : qm),
            s || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = u),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            s)
          )
            return new Promise((p, h) => {
              d.addEventListener("load", p),
                d.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    return o
      .then(() => t())
      .catch((i) => {
        const l = new Event("vite:preloadError", { cancelable: !0 });
        if (((l.payload = i), window.dispatchEvent(l), !l.defaultPrevented))
          throw i;
      });
  };
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Po() {
  return (
    (Po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Po.apply(this, arguments)
  );
}
var Lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Lt || (Lt = {}));
const Js = "popstate";
function bm(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location;
    return Cl(
      "",
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Uf(o);
  }
  return th(t, n, null, e);
}
function Ff(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function eh() {
  return Math.random().toString(36).substr(2, 8);
}
function bs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Cl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Po(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Af(t) : t,
      { state: n, key: (t && t.key) || r || eh() }
    )
  );
}
function Uf(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Af(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function th(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = Lt.Pop,
    s = null,
    a = d();
  a == null && ((a = 0), l.replaceState(Po({}, l.state, { idx: a }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    u = Lt.Pop;
    let k = d(),
      f = k == null ? null : k - a;
    (a = k), s && s({ action: u, location: w.location, delta: f });
  }
  function h(k, f) {
    u = Lt.Push;
    let c = Cl(w.location, k, f);
    a = d() + 1;
    let m = bs(c, a),
      v = w.createHref(c);
    try {
      l.pushState(m, "", v);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(v);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function y(k, f) {
    u = Lt.Replace;
    let c = Cl(w.location, k, f);
    a = d();
    let m = bs(c, a),
      v = w.createHref(c);
    l.replaceState(m, "", v),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function g(k) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof k == "string" ? k : Uf(k);
    return (
      (c = c.replace(/ $/, "%20")),
      Ff(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Js, p),
        (s = k),
        () => {
          o.removeEventListener(Js, p), (s = null);
        }
      );
    },
    createHref(k) {
      return t(o, k);
    },
    createURL: g,
    encodeLocation(k) {
      let f = g(k);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: y,
    go(k) {
      return l.go(k);
    },
  };
  return w;
}
var ea;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ea || (ea = {}));
function nh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const $f = ["post", "put", "patch", "delete"];
new Set($f);
const rh = ["get", ...$f];
new Set(rh);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(this, arguments)
  );
}
const oh = M.createContext(null),
  Wf = M.createContext(null);
function ih() {
  return M.useContext(Wf) != null;
}
function lh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Lt.Pop,
    navigator: i,
    static: l = !1,
    future: u,
  } = e;
  ih() && Ff(!1);
  let s = t.replace(/^\/*/, "/"),
    a = M.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: l,
        future: Nl({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, l]
    );
  typeof r == "string" && (r = Af(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: h = "",
      state: y = null,
      key: g = "default",
    } = r,
    w = M.useMemo(() => {
      let k = nh(d, s);
      return k == null
        ? null
        : {
            location: { pathname: k, search: p, hash: h, state: y, key: g },
            navigationType: o,
          };
    }, [s, d, p, h, y, g, o]);
  return w == null
    ? null
    : M.createElement(
        oh.Provider,
        { value: a },
        M.createElement(Wf.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const uh = "6";
try {
  window.__reactRouterVersion = uh;
} catch {}
const sh = "startTransition",
  ta = ji[sh];
function ah(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = M.useRef();
  i.current == null && (i.current = bm({ window: o, v5Compat: !0 }));
  let l = i.current,
    [u, s] = M.useState({ action: l.action, location: l.location }),
    { v7_startTransition: a } = r || {},
    d = M.useCallback(
      (p) => {
        a && ta ? ta(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    M.useLayoutEffect(() => l.listen(d), [l, d]),
    M.createElement(lh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: l,
      future: r,
    })
  );
}
var na;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(na || (na = {}));
var ra;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ra || (ra = {}));
const ch = "prueba2/assets/svgCirculo-DrAYZ3Uq.svg",
  Bf = (e = {}) => {
    const [t, n] = M.useState({}),
      r = M.useRef([]);
    return (
      M.useEffect(() => {
        const o = new IntersectionObserver((i) => {
          const l = {};
          i.forEach((u) => {
            l[u.target.id] = u.isIntersecting;
          }),
            n(l);
        }, e);
        return (
          r.current.forEach((i) => {
            i && o.observe(i);
          }),
          () => {
            r.current.forEach((i) => {
              i && o.unobserve(i);
            });
          }
        );
      }, [e]),
      [r, t]
    );
  };
var Hf = { exports: {} },
  Vf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr = M;
function fh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dh = typeof Object.is == "function" ? Object.is : fh,
  ph = vr.useSyncExternalStore,
  mh = vr.useRef,
  hh = vr.useEffect,
  vh = vr.useMemo,
  yh = vr.useDebugValue;
Vf.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = mh(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = vh(
    function () {
      function s(y) {
        if (!a) {
          if (((a = !0), (d = y), (y = r(y)), o !== void 0 && l.hasValue)) {
            var g = l.value;
            if (o(g, y)) return (p = g);
          }
          return (p = y);
        }
        if (((g = p), dh(d, y))) return g;
        var w = r(y);
        return o !== void 0 && o(g, w) ? g : ((d = y), (p = w));
      }
      var a = !1,
        d,
        p,
        h = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        h === null
          ? void 0
          : function () {
              return s(h());
            },
      ];
    },
    [t, n, r, o]
  );
  var u = ph(e, i[0], i[1]);
  return (
    hh(
      function () {
        (l.hasValue = !0), (l.value = u);
      },
      [u]
    ),
    yh(u),
    u
  );
};
Hf.exports = Vf;
var gh = Hf.exports,
  we = "default" in ji ? jo : ji,
  oa = Symbol.for("react-redux-context"),
  ia = typeof globalThis < "u" ? globalThis : {};
function wh() {
  if (!we.createContext) return {};
  const e = ia[oa] ?? (ia[oa] = new Map());
  let t = e.get(we.createContext);
  return t || ((t = we.createContext(null)), e.set(we.createContext, t)), t;
}
var _t = wh(),
  Sh = () => {
    throw new Error("uSES not initialized!");
  };
function zu(e = _t) {
  return function () {
    return we.useContext(e);
  };
}
var Qf = zu(),
  Kf = Sh,
  _h = (e) => {
    Kf = e;
  },
  Eh = (e, t) => e === t;
function kh(e = _t) {
  const t = e === _t ? Qf : zu(e),
    n = (r, o = {}) => {
      const { equalityFn: i = Eh, devModeChecks: l = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: u,
          subscription: s,
          getServerState: a,
          stabilityCheck: d,
          identityFunctionCheck: p,
        } = t();
      we.useRef(!0);
      const h = we.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r, d, l.stabilityCheck]
        ),
        y = Kf(s.addNestedSub, u.getState, a || u.getState, h, i);
      return we.useDebugValue(y), y;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var la = kh();
function xh(e) {
  e();
}
function Ph() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      xh(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var ua = { notify() {}, get: () => [] };
function Ch(e, t) {
  let n,
    r = ua,
    o = 0,
    i = !1;
  function l(w) {
    d();
    const k = r.subscribe(w);
    let f = !1;
    return () => {
      f || ((f = !0), k(), p());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return i;
  }
  function d() {
    o++, n || ((n = e.subscribe(s)), (r = Ph()));
  }
  function p() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = ua));
  }
  function h() {
    i || ((i = !0), d());
  }
  function y() {
    i && ((i = !1), p());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: h,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return g;
}
var Nh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Oh = typeof navigator < "u" && navigator.product === "ReactNative",
  Th = Nh || Oh ? we.useLayoutEffect : we.useEffect;
function Rh({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once",
}) {
  const l = we.useMemo(() => {
      const a = Ch(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, r, o, i]),
    u = we.useMemo(() => e.getState(), [e]);
  Th(() => {
    const { subscription: a } = l;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      u !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [l, u]);
  const s = t || _t;
  return we.createElement(s.Provider, { value: l }, n);
}
var zh = Rh;
function Yf(e = _t) {
  const t = e === _t ? Qf : zu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var jh = Yf();
function Lh(e = _t) {
  const t = e === _t ? jh : Yf(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ly = Lh();
_h(gh.useSyncExternalStoreWithSelector);
function b(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ih = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  sa = Ih,
  Oi = () => Math.random().toString(36).substring(7).split("").join("."),
  Dh = {
    INIT: `@@redux/INIT${Oi()}`,
    REPLACE: `@@redux/REPLACE${Oi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Oi()}`,
  },
  Co = Dh;
function ju(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Lu(e, t, n) {
  if (typeof e != "function") throw new Error(b(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(b(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(b(1));
    return n(Lu)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    l = i,
    u = 0,
    s = !1;
  function a() {
    l === i &&
      ((l = new Map()),
      i.forEach((k, f) => {
        l.set(f, k);
      }));
  }
  function d() {
    if (s) throw new Error(b(3));
    return o;
  }
  function p(k) {
    if (typeof k != "function") throw new Error(b(4));
    if (s) throw new Error(b(5));
    let f = !0;
    a();
    const c = u++;
    return (
      l.set(c, k),
      function () {
        if (f) {
          if (s) throw new Error(b(6));
          (f = !1), a(), l.delete(c), (i = null);
        }
      }
    );
  }
  function h(k) {
    if (!ju(k)) throw new Error(b(7));
    if (typeof k.type > "u") throw new Error(b(8));
    if (typeof k.type != "string") throw new Error(b(17));
    if (s) throw new Error(b(9));
    try {
      (s = !0), (o = r(o, k));
    } finally {
      s = !1;
    }
    return (
      (i = l).forEach((c) => {
        c();
      }),
      k
    );
  }
  function y(k) {
    if (typeof k != "function") throw new Error(b(10));
    (r = k), h({ type: Co.REPLACE });
  }
  function g() {
    const k = p;
    return {
      subscribe(f) {
        if (typeof f != "object" || f === null) throw new Error(b(11));
        function c() {
          const v = f;
          v.next && v.next(d());
        }
        return c(), { unsubscribe: k(c) };
      },
      [sa]() {
        return this;
      },
    };
  }
  return (
    h({ type: Co.INIT }),
    { dispatch: h, subscribe: p, getState: d, replaceReducer: y, [sa]: g }
  );
}
function Mh(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Co.INIT }) > "u") throw new Error(b(12));
    if (typeof n(void 0, { type: Co.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(b(13));
  });
}
function Gf(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Mh(n);
  } catch (i) {
    o = i;
  }
  return function (l = {}, u) {
    if (o) throw o;
    let s = !1;
    const a = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d],
        h = n[p],
        y = l[p],
        g = h(y, u);
      if (typeof g > "u") throw (u && u.type, new Error(b(14)));
      (a[p] = g), (s = s || g !== y);
    }
    return (s = s || r.length !== Object.keys(l).length), s ? a : l;
  };
}
function No(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r))
        );
}
function Fh(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(b(15));
    };
    const l = { getState: o.getState, dispatch: (s, ...a) => i(s, ...a) },
      u = e.map((s) => s(l));
    return (i = No(...u)(o.dispatch)), { ...o, dispatch: i };
  };
}
function Uh(e) {
  return ju(e) && "type" in e && typeof e.type == "string";
}
var Xf = Symbol.for("immer-nothing"),
  aa = Symbol.for("immer-draftable"),
  Ee = Symbol.for("immer-state");
function Me(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var gn = Object.getPrototypeOf;
function Wt(e) {
  return !!e && !!e[Ee];
}
function nt(e) {
  var t;
  return e
    ? Zf(e) ||
        Array.isArray(e) ||
        !!e[aa] ||
        !!((t = e.constructor) != null && t[aa]) ||
        Xo(e) ||
        Zo(e)
    : !1;
}
var Ah = Object.prototype.constructor.toString();
function Zf(e) {
  if (!e || typeof e != "object") return !1;
  const t = gn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Ah;
}
function Oo(e, t) {
  Go(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Go(e) {
  const t = e[Ee];
  return t ? t.type_ : Array.isArray(e) ? 1 : Xo(e) ? 2 : Zo(e) ? 3 : 0;
}
function Ol(e, t) {
  return Go(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qf(e, t, n) {
  const r = Go(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function $h(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xo(e) {
  return e instanceof Map;
}
function Zo(e) {
  return e instanceof Set;
}
function Tt(e) {
  return e.copy_ || e.base_;
}
function Tl(e, t) {
  if (Xo(e)) return new Map(e);
  if (Zo(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Zf(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ee];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const l = o[i],
        u = r[l];
      u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
        (u.get || u.set) &&
          (r[l] = {
            configurable: !0,
            writable: !0,
            enumerable: u.enumerable,
            value: e[l],
          });
    }
    return Object.create(gn(e), r);
  } else {
    const r = gn(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Iu(e, t = !1) {
  return (
    qo(e) ||
      Wt(e) ||
      !nt(e) ||
      (Go(e) > 1 && (e.set = e.add = e.clear = e.delete = Wh),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Iu(r, !0))),
    e
  );
}
function Wh() {
  Me(2);
}
function qo(e) {
  return Object.isFrozen(e);
}
var Bh = {};
function Bt(e) {
  const t = Bh[e];
  return t || Me(0, e), t;
}
var ar;
function Jf() {
  return ar;
}
function Hh(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ca(e, t) {
  t &&
    (Bt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Rl(e) {
  zl(e), e.drafts_.forEach(Vh), (e.drafts_ = null);
}
function zl(e) {
  e === ar && (ar = e.parent_);
}
function fa(e) {
  return (ar = Hh(ar, e));
}
function Vh(e) {
  const t = e[Ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function da(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ee].modified_ && (Rl(t), Me(4)),
        nt(e) && ((e = To(t, e)), t.parent_ || Ro(t, e)),
        t.patches_ &&
          Bt("Patches").generateReplacementPatches_(
            n[Ee].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = To(t, n, [])),
    Rl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Xf ? e : void 0
  );
}
function To(e, t, n) {
  if (qo(t)) return t;
  const r = t[Ee];
  if (!r) return Oo(t, (o, i) => pa(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Ro(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      l = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      Oo(i, (u, s) => pa(e, r, o, u, s, n, l)),
      Ro(e, o, !1),
      n &&
        e.patches_ &&
        Bt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function pa(e, t, n, r, o, i, l) {
  if (Wt(o)) {
    const u =
        i && t && t.type_ !== 3 && !Ol(t.assigned_, r) ? i.concat(r) : void 0,
      s = To(e, o, u);
    if ((qf(n, r, s), Wt(s))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(o);
  if (nt(o) && !qo(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    To(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Ro(e, o);
  }
}
function Ro(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Iu(t, n);
}
function Qh(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Jf(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = Du;
  n && ((o = [r]), (i = cr));
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return (r.draft_ = u), (r.revoke_ = l), u;
}
var Du = {
    get(e, t) {
      if (t === Ee) return e;
      const n = Tt(e);
      if (!Ol(n, t)) return Kh(e, n, t);
      const r = n[t];
      return e.finalized_ || !nt(r)
        ? r
        : r === Ti(e.base_, t)
          ? (Ri(e), (e.copy_[t] = Ll(r, e)))
          : r;
    },
    has(e, t) {
      return t in Tt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Tt(e));
    },
    set(e, t, n) {
      const r = bf(Tt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Ti(Tt(e), t),
          i = o == null ? void 0 : o[Ee];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if ($h(n, o) && (n !== void 0 || Ol(e.base_, t))) return !0;
        Ri(e), jl(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ti(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Ri(e), jl(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Tt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Me(11);
    },
    getPrototypeOf(e) {
      return gn(e.base_);
    },
    setPrototypeOf() {
      Me(12);
    },
  },
  cr = {};
Oo(Du, (e, t) => {
  cr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
cr.deleteProperty = function (e, t) {
  return cr.set.call(this, e, t, void 0);
};
cr.set = function (e, t, n) {
  return Du.set.call(this, e[0], t, n, e[0]);
};
function Ti(e, t) {
  const n = e[Ee];
  return (n ? Tt(n) : e)[t];
}
function Kh(e, t, n) {
  var o;
  const r = bf(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function bf(e, t) {
  if (!(t in e)) return;
  let n = gn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = gn(n);
  }
}
function jl(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && jl(e.parent_));
}
function Ri(e) {
  e.copy_ || (e.copy_ = Tl(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Yh = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const l = this;
          return function (s = i, ...a) {
            return l.produce(s, (d) => n.call(this, d, ...a));
          };
        }
        typeof n != "function" && Me(6),
          r !== void 0 && typeof r != "function" && Me(7);
        let o;
        if (nt(t)) {
          const i = fa(this),
            l = Ll(t, void 0);
          let u = !0;
          try {
            (o = n(l)), (u = !1);
          } finally {
            u ? Rl(i) : zl(i);
          }
          return ca(i, r), da(o, i);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === Xf && (o = void 0),
            this.autoFreeze_ && Iu(o, !0),
            r)
          ) {
            const i = [],
              l = [];
            Bt("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
          }
          return o;
        } else Me(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u));
        let r, o;
        return [
          this.produce(t, n, (l, u) => {
            (r = l), (o = u);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    nt(e) || Me(8), Wt(e) && (e = Gh(e));
    const t = fa(this),
      n = Ll(e, void 0);
    return (n[Ee].isManual_ = !0), zl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ee];
    (!n || !n.isManual_) && Me(9);
    const { scope_: r } = n;
    return ca(r, t), da(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Bt("Patches").applyPatches_;
    return Wt(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function Ll(e, t) {
  const n = Xo(e)
    ? Bt("MapSet").proxyMap_(e, t)
    : Zo(e)
      ? Bt("MapSet").proxySet_(e, t)
      : Qh(e, t);
  return (t ? t.scope_ : Jf()).drafts_.push(n), n;
}
function Gh(e) {
  return Wt(e) || Me(10, e), ed(e);
}
function ed(e) {
  if (!nt(e) || qo(e)) return e;
  const t = e[Ee];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Tl(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Tl(e, !0);
  return (
    Oo(n, (r, o) => {
      qf(n, r, ed(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var ke = new Yh(),
  td = ke.produce;
ke.produceWithPatches.bind(ke);
ke.setAutoFreeze.bind(ke);
ke.setUseStrictShallowCopy.bind(ke);
ke.applyPatches.bind(ke);
ke.createDraft.bind(ke);
ke.finishDraft.bind(ke);
function nd(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : o(i);
}
var rd = nd(),
  Xh = nd,
  Zh =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? No
              : No.apply(null, arguments);
        };
function ma(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(Ae(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Uh(r) && r.type === e),
    n
  );
}
var od = class Mn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Mn.prototype);
  }
  static get [Symbol.species]() {
    return Mn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Mn(...t[0].concat(this))
      : new Mn(...t.concat(this));
  }
};
function ha(e) {
  return nt(e) ? td(e, () => {}) : e;
}
function va(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Ae(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function qh(e) {
  return typeof e == "boolean";
}
var Jh = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let l = new od();
      return n && (qh(n) ? l.push(rd) : l.push(Xh(n.extraArgument))), l;
    },
  bh = "RTK_autoBatch",
  id = (e) => (t) => {
    setTimeout(t, e);
  },
  ev =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : id(10),
  tv =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        l = !1;
      const u = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? ev
              : e.type === "callback"
                ? e.queueNotification
                : id(e.timeout),
        a = () => {
          (l = !1), i && ((i = !1), u.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const p = () => o && d(),
            h = r.subscribe(p);
          return (
            u.add(d),
            () => {
              h(), u.delete(d);
            }
          );
        },
        dispatch(d) {
          var p;
          try {
            return (
              (o = !((p = d == null ? void 0 : d.meta) != null && p[bh])),
              (i = !o),
              i && (l || ((l = !0), s(a))),
              r.dispatch(d)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  nv = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new od(e);
      return r && o.push(tv(typeof r == "object" ? r : void 0)), o;
    };
function rv(e) {
  const t = Jh(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: l = void 0,
    } = e || {};
  let u;
  if (typeof n == "function") u = n;
  else if (ju(n)) u = Gf(n);
  else throw new Error(Ae(1));
  let s;
  typeof r == "function" ? (s = r(t)) : (s = t());
  let a = No;
  o && (a = Zh({ trace: !1, ...(typeof o == "object" && o) }));
  const d = Fh(...s),
    p = nv(d);
  let h = typeof l == "function" ? l(p) : p();
  const y = a(...h);
  return Lu(u, i, y);
}
function ld(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, l) {
      const u = typeof i == "string" ? i : i.type;
      if (!u) throw new Error(Ae(28));
      if (u in t) throw new Error(Ae(29));
      return (t[u] = l), o;
    },
    addMatcher(i, l) {
      return n.push({ matcher: i, reducer: l }), o;
    },
    addDefaultCase(i) {
      return (r = i), o;
    },
  };
  return e(o), [t, n, r];
}
function ov(e) {
  return typeof e == "function";
}
function iv(e, t) {
  let [n, r, o] = ld(t),
    i;
  if (ov(e)) i = () => ha(e());
  else {
    const u = ha(e);
    i = () => u;
  }
  function l(u = i(), s) {
    let a = [
      n[s.type],
      ...r.filter(({ matcher: d }) => d(s)).map(({ reducer: d }) => d),
    ];
    return (
      a.filter((d) => !!d).length === 0 && (a = [o]),
      a.reduce((d, p) => {
        if (p)
          if (Wt(d)) {
            const y = p(d, s);
            return y === void 0 ? d : y;
          } else {
            if (nt(d)) return td(d, (h) => p(h, s));
            {
              const h = p(d, s);
              if (h === void 0) {
                if (d === null) return d;
                throw new Error(Ae(9));
              }
              return h;
            }
          }
        return d;
      }, u)
    );
  }
  return (l.getInitialState = i), l;
}
var lv = Symbol.for("rtk-slice-createasyncthunk");
function uv(e, t) {
  return `${e}/${t}`;
}
function sv({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[lv];
  return function (o) {
    const { name: i, reducerPath: l = i } = o;
    if (!i) throw new Error(Ae(11));
    typeof process < "u";
    const u =
        (typeof o.reducers == "function" ? o.reducers(cv()) : o.reducers) || {},
      s = Object.keys(u),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(m, v) {
          const S = typeof m == "string" ? m : m.type;
          if (!S) throw new Error(Ae(12));
          if (S in a.sliceCaseReducersByType) throw new Error(Ae(13));
          return (a.sliceCaseReducersByType[S] = v), d;
        },
        addMatcher(m, v) {
          return a.sliceMatchers.push({ matcher: m, reducer: v }), d;
        },
        exposeAction(m, v) {
          return (a.actionCreators[m] = v), d;
        },
        exposeCaseReducer(m, v) {
          return (a.sliceCaseReducersByName[m] = v), d;
        },
      };
    s.forEach((m) => {
      const v = u[m],
        S = {
          reducerName: m,
          type: uv(i, m),
          createNotation: typeof o.reducers == "function",
        };
      dv(v) ? mv(S, v, d, t) : fv(S, v, d);
    });
    function p() {
      const [m = {}, v = [], S = void 0] =
          typeof o.extraReducers == "function"
            ? ld(o.extraReducers)
            : [o.extraReducers],
        E = { ...m, ...a.sliceCaseReducersByType };
      return iv(o.initialState, (x) => {
        for (let P in E) x.addCase(P, E[P]);
        for (let P of a.sliceMatchers) x.addMatcher(P.matcher, P.reducer);
        for (let P of v) x.addMatcher(P.matcher, P.reducer);
        S && x.addDefaultCase(S);
      });
    }
    const h = (m) => m,
      y = new Map();
    let g;
    function w(m, v) {
      return g || (g = p()), g(m, v);
    }
    function k() {
      return g || (g = p()), g.getInitialState();
    }
    function f(m, v = !1) {
      function S(x) {
        let P = x[m];
        return typeof P > "u" && v && (P = k()), P;
      }
      function E(x = h) {
        const P = va(y, v, { insert: () => new WeakMap() });
        return va(P, x, {
          insert: () => {
            const I = {};
            for (const [R, ve] of Object.entries(o.selectors ?? {}))
              I[R] = av(ve, x, k, v);
            return I;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: E,
        get selectors() {
          return E(S);
        },
        selectSlice: S,
      };
    }
    const c = {
      name: i,
      reducer: w,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: k,
      ...f(l),
      injectInto(m, { reducerPath: v, ...S } = {}) {
        const E = v ?? l;
        return (
          m.inject({ reducerPath: E, reducer: w }, S), { ...c, ...f(E, !0) }
        );
      },
    };
    return c;
  };
}
function av(e, t, n, r) {
  function o(i, ...l) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return (o.unwrapped = e), o;
}
var Mu = sv();
function cv() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function fv({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, l;
  if ("reducer" in r) {
    if (n && !pv(r)) throw new Error(Ae(17));
    (i = r.reducer), (l = r.prepare);
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, l ? ma(e, l) : ma(e));
}
function dv(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function pv(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function mv({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Ae(18));
  const {
      payloadCreator: i,
      fulfilled: l,
      pending: u,
      rejected: s,
      settled: a,
      options: d,
    } = n,
    p = o(e, i, d);
  r.exposeAction(t, p),
    l && r.addCase(p.fulfilled, l),
    u && r.addCase(p.pending, u),
    s && r.addCase(p.rejected, s),
    a && r.addMatcher(p.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: l || Mr,
      pending: u || Mr,
      rejected: s || Mr,
      settled: a || Mr,
    });
}
function Mr() {}
function Ae(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const hv = {
    es: {
      inicio: "Inicio",
      queHacemos: "¿Que hacemos?",
      paraQuienes: "¿Para quienes?",
      serviciosYProductos: "Servicios y productos",
      contacto: "Contacto",
      subTitleSlider1:
        "Facilitamos importaciones desde China para el éxito global de tu empresa",
      queHacemosSection: {
        titulo: "¿Qué hacemos?",
        contenido: `Somos especialistas en la gestión y servicios de importación a nivel mundial, enfocados en el {r}mercado asiático{/r}.
      Contamos con la experiencia, talento y herramientas necesarias para importar cualquier tipo de producto.
      Nos convertimos en el departamento de {r}Comercio Exterior de tu empresa{/r} para que mejoren su rentabilidad, competitividad y costos y sigan enfocados en vender más y desarrollar nuevos negocios.`,
        items: [
          {
            id: 1,
            contenido:
              "Facilitamos y gestionamos la inscripción de importación de tu empresa.",
            iconUrl: "/icons/mesa.svg",
          },
          {
            id: 2,
            contenido:
              "Costeo detallado e integral de cada operación (costeamos de manera detallada e integral cada operación).",
            iconUrl: "/icons/analic.svg",
          },
          {
            id: 3,
            contenido:
              "Facilitamos la búsqueda , negociación y selección del proveedor más apto.",
            iconUrl: "/icons/avion.svg",
          },
          {
            id: 4,
            contenido:
              "Profundo conocimiento de la oferta de productos y proveedores asiáticos.",
            iconUrl: "/icons/box-barco.svg",
          },
          {
            id: 5,
            contenido:
              "Envio de muestras y controles de calidad previos al embarque.",
            iconUrl: "/icons/envio.svg",
          },
          {
            id: 6,
            contenido:
              "Alcance nacional, atendemos a clientes en todo Argentina.",
            iconUrl: "/icons/ubic.svg",
          },
        ],
      },
      paraQuienesSection: {
        titulo: "¿Para quiénes lo hacemos?",
        subTitulo: "EMPRESAS SIN EXPERIENCIA IMPORTADORA",
        contenido:
          "Un servicio integral punta a punta, transformándonos en su Departamento Externo de importaciones",
        palabras: "/palabras.png",
      },
      chinaSection: {
        lead: "APARTADO INTERNACIONAL",
        titulo: "De China para el mundo",
        contenido:
          "{r}Servicio de triangulación:{/r} Gestionamos el envío de (pedidos/mercadería/productos) de China hacia empresas ubicadas en cualquier parte del mundo…",
      },
      serviciosYProductosSection: {
        titulo: "Servicios y Productos",
        items: [
          {
            id: 1,
            contenido: "Materias primas",
            iconUrl: "/icons/materia.svg",
          },
          {
            id: 2,
            contenido: "Insumos productivos",
            iconUrl: "/icons/insumos.svg",
          },
          {
            id: 3,
            contenido: "Matrices productivas",
            iconUrl: "/icons/matrices.svg",
          },
          { id: 4, contenido: "Repuestos", iconUrl: "/icons/repuestos.svg" },
          {
            id: 5,
            contenido: "Maquinaria liviana/pesada",
            iconUrl: "/icons/maquinaria.svg",
          },
          {
            id: 6,
            contenido: "Líneas completas de producción",
            iconUrl: "/icons/lineas.svg",
          },
          {
            id: 7,
            contenido: "Productos terminados",
            iconUrl: "/icons/productos.svg",
          },
        ],
      },
      contactoSection: {
        titulo: "Contacto",
        subTitulo: "Hacé crecer tu negocio",
        nombre: "Nombre y Apellido",
        email: "Email",
        telefono: "Teléfono",
        empresa: "Empresa",
        mensaje: "Mensaje, consulta o sugerencia",
        contenido:
          "No esperes más, y comienza a trabajar con nosotros para expandir los horizontes de tu emprendimiento o negocio.",
        subContenido: "Solicitá asesoramiento ahora",
        boton: "Enviar mensaje",
      },
    },
    en: {
      inicio: "Home",
      queHacemos: "What we do?",
      paraQuienes: "For whom?",
      serviciosYProductos: "Services and products",
      contacto: "Contact",
      subTitleSlider1:
        "We facilitate imports from China for the global success of your company",
      queHacemosSection: {
        titulo: "What do we do?",
        contenido: `We become the foreign trade department of your company, improving its profitability and competitiveness.
We are specialists in import services worldwide with strategic partners located in China
We have the experience, talent and tools necessary for the development of new business units.
`,
        items: [
          {
            id: 1,
            contenido:
              "We facilitate and manage the import registration of your company.",
            iconUrl: "/icons/mesa.svg",
          },
          {
            id: 2,
            contenido:
              "Detailed and comprehensive costing of each operation (we cost each operation in a detailed and comprehensive manner).",
            iconUrl: "/icons/analic.svg",
          },
          {
            id: 3,
            contenido:
              "We facilitate the search, negotiation and selection of the most suitable supplier.",
            iconUrl: "/icons/avion.svg",
          },
          {
            id: 4,
            contenido:
              "Deep knowledge of the offer of Asian products and suppliers.",
            iconUrl: "/icons/box-barco.svg",
          },
          {
            id: 5,
            contenido:
              "Sending of samples and quality controls prior to shipment.",
            iconUrl: "/icons/envio.svg",
          },
          {
            id: 6,
            contenido: "National reach, we serve clients throughout Argentina.",
            iconUrl: "/icons/ubic.svg",
          },
        ],
      },
      paraQuienesSection: {
        titulo: "For whom?",
        subTitulo: "COMPANIES WITHOUT IMPORT EXPERIENCE",
        contenido:
          "A comprehensive end-to-end service, transforming us into your External Import Department.",
        palabras: "/palabrasIngles.png",
      },
      chinaSection: {
        lead: "INTERNATIONAL APART",
        titulo: "From China for the world",
        contenido:
          "{r}Triangulation service{/r}: We manage the shipment of (orders/merchandise/products) from China to companies located in any part of the world…",
      },
      serviciosYProductosSection: {
        titulo: "Services and products",
        items: [
          { id: 1, contenido: "Raw materials", iconUrl: "/icons/materia.svg" },
          {
            id: 2,
            contenido: "Production materials",
            iconUrl: "/icons/insumos.svg",
          },
          {
            id: 3,
            contenido: "Production lines",
            iconUrl: "/icons/matrices.svg",
          },
          { id: 4, contenido: "Spare parts", iconUrl: "/icons/repuestos.svg" },
          {
            id: 5,
            contenido: "Light/large machinery",
            iconUrl: "/icons/maquinaria.svg",
          },
          {
            id: 6,
            contenido: "Complete production lines",
            iconUrl: "/icons/lineas.svg",
          },
          {
            id: 7,
            contenido: "Finished products",
            iconUrl: "/icons/productos.svg",
          },
        ],
      },
      contactoSection: {
        titulo: "Contact",
        subTitulo: "Grow your business",
        nombre: "Name and surname",
        email: "Email",
        telefono: "Phone",
        empresa: "Company",
        mensaje: "Message, inquiry or suggestion",
        contenido:
          "We are waiting for you to start working with us to expand the horizons of your business or business.",
        subContenido: "Request a consultation now",
        boton: "Send message",
      },
    },
  },
  vv = { value: hv },
  yv = Mu({ name: "data", initialState: vv, reducers: {} }),
  gv = (e) => e.data.value,
  wv = yv.reducer,
  Sv = { value: "es" },
  ud = Mu({
    name: "language",
    initialState: Sv,
    reducers: {
      setLanguage: (e, t) => {
        e.value = t.payload;
      },
    },
  }),
  { setLanguage: Iy } = ud.actions,
  _v = (e) => e.language.value,
  Ev = ud.reducer,
  Jo = () => {
    const e = la(_v);
    return la(gv)[e] || {};
  },
  kv = () => {
    const [e, t] = Bf({ threshold: 0.1 }),
      { paraQuienesSection: n } = Jo(),
      r = "1",
      o = t[r] || !1;
    return O.jsxs("section", {
      id: "para-quienes",
      className:
        "sm:flex flex-col h-[150vh] sm:bg-secondary sm:items-center sm:p-14",
      children: [
        O.jsxs("div", {
          className: "sm:w-[39vw] sm:mb-[1.9vw]",
          children: [
            O.jsx("h2", {
              className:
                "sm:text-center sm:text-[2.5vw] sm:font-bold sm:text-white sm:mb-[2.7vw]",
              children: n.titulo,
            }),
            O.jsx("h3", {
              className:
                "sm:text-center sm:text-[1.4vw] sm:font-bold sm:text-white sm:mb-[.5vw]",
              children: n.subTitulo,
            }),
            O.jsx("p", {
              className:
                "sm:text-center sm:text-xl sm:font-semibold sm:text-naranja",
              children: n.contenido,
            }),
          ],
        }),
        O.jsxs("div", {
          className: "sm:relative sm:w-[90vw] sm:h-[100vh] sm:left-3",
          children: [
            O.jsx("img", {
              src: n.palabras,
              alt: "",
              className:
                "sm:absolute sm:top-0 sm:left-[5vw] sm:right-0 sm:bottom-0 sm:m-auto sm:h-[37vw] ",
            }),
            O.jsx("img", {
              id: r,
              ref: (i) => (e.current[r] = i),
              src: ch,
              alt: "",
              className: `sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto sm:h-[30vw] sm:w-[30vw] ${o ? "animate-roll-in" : ""}`,
            }),
          ],
        }),
      ],
    });
  },
  xv = (e) => {
    const t = /\{r\}(.*?)\{\/r\}/g;
    let n = [],
      r = 0;
    return (
      e.replace(
        t,
        (o, i, l) => (
          l > r && n.push({ type: "texto", content: e.slice(r, l) }),
          n.push({ type: "resaltar", content: i }),
          (r = l + o.length),
          o
        )
      ),
      r < e.length && n.push({ type: "texto", content: e.slice(r) }),
      n
    );
  },
  Pv = ({ text: e, className: t }) => {
    const n = xv(e);
    return O.jsx(O.Fragment, {
      children: n.map((r, o) =>
        O.jsx(
          "span",
          {
            className: r.type === "resaltar" ? `${t}` : "",
            children: r.content,
          },
          o
        )
      ),
    });
  },
  Cv = () => {
    const { chinaSection: e } = Jo();
    return O.jsx("div", {
      className:
        "relative h-[65vh] sm:h-[39.4vw] sm:w-full bg-china-section bg-no-repeat bg-center bg-cover flex justify-end items-middle",
      children: O.jsxs("div", {
        className: "sm:w-[49%] sm:pt-[8vw] sm:pr-[4vw]",
        children: [
          O.jsx("h1", {
            className:
              "sm:text-[2.2vw] font-extrabold text-stroke-1-white text-left",
            children: e.lead,
          }),
          O.jsx("h1", {
            className:
              "sm:text-[3.55vw] text-white font-extrabold text-left sm:-mt-2",
            children: e.titulo,
          }),
          O.jsx("h2", {
            className:
              "sm:text-[1.8vw] text-white text-left sm:mt-[4.5vw] font-medium",
            children: O.jsx(Pv, { text: e.contenido, className: "font-bold" }),
          }),
        ],
      }),
    });
  };
var sd = { exports: {} },
  Nv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Ov = Nv,
  Tv = Ov;
function ad() {}
function cd() {}
cd.resetWarningCache = ad;
var Rv = function () {
  function e(r, o, i, l, u, s) {
    if (s !== Tv) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cd,
    resetWarningCache: ad,
  };
  return (n.PropTypes = n), n;
};
sd.exports = Rv();
var zv = sd.exports;
const jv = Ea(zv),
  fd = ({ items: e, efect: t }) => {
    const [n, r] = Bf();
    return O.jsx("div", {
      className: "sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-5",
      children: O.jsx("ul", {
        role: "list",
        className: "flex flex-col gap-y-3 w-full",
        children: e.map((o, i) => {
          const l = r[o.id];
          return O.jsxs(
            "li",
            {
              id: o.id,
              ref: (u) => (n.current[i] = u),
              className: `relative flex flex-col items-center py-5 px-[3vw] bg-white sm:h-full sm:w-full ${l ? `animated-enter-${t}` : ""}`,
              children: [
                O.jsx("div", {
                  className:
                    "flex relative sm:absolute sm:inset-0 h-[14vw] w-[14vw] sm:h-[4.5vw] sm:w-[4.5vw] sm:-left-8 my-auto rounded-full justify-center items-center bg-naranja",
                  children: O.jsx("img", {
                    className: "h-[12vw] sm:h-[3vw]",
                    src: o.iconUrl,
                    alt: "",
                  }),
                }),
                O.jsx("div", {
                  className:
                    "sm:flex sm:items-left sm:gap-x-4 sm:w-[100%] ml-[2vw]",
                  children: O.jsx("p", {
                    className:
                      "sm:text-[1.3vw] font-semibold sm:text-left text-secondary",
                    children: o.contenido,
                  }),
                }),
              ],
            },
            i
          );
        }),
      }),
    });
  };
fd.propTypes = { items: jv.array.isRequired };
const Lv = () => {
    const { serviciosYProductosSection: e } = Jo();
    return O.jsx("section", {
      id: "servicios-y-productos",
      className: "bg-secondary p-[6vw] bg-mapa bg-contain",
      children: O.jsx("div", {
        className: "h-[90vh] w-[40%] text-left",
        children: O.jsx(fd, { items: e.items, efect: "left" }),
      }),
    });
  },
  Iv = () => {
    const { contactoSection: e } = Jo(),
      {
        titulo: t,
        subTitulo: n,
        nombre: r,
        email: o,
        telefono: i,
        empresa: l,
        mensaje: u,
        contenido: s,
        subContenido: a,
        boton: d,
      } = e,
      p =
        "w-full h-[3.5vw] border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary";
    return O.jsx("section", {
      id: "contacto",
      className: "bg-white",
      children: O.jsx("form", {
        action: "",
        children: O.jsxs("div", {
          className: "container-contacto pl-[10vw] pt-[4vw]",
          children: [
            O.jsxs("div", {
              className: "titulo mb-[2vw]",
              children: [
                O.jsx("h1", {
                  className: "text-secondary text-left font-bold text-[2.7vw]",
                  children: t,
                }),
                O.jsx("h2", {
                  className:
                    "text-secondary text-left font-semibold text-[1.5vw]",
                  children: n,
                }),
              ],
            }),
            O.jsxs("div", {
              className: "nombre",
              children: [
                O.jsx("label", {
                  htmlFor: "email",
                  className: "sr-only",
                  children: "Email",
                }),
                O.jsx("input", {
                  name: "nombre",
                  id: "nombre",
                  className: p,
                  placeholder: r,
                }),
              ],
            }),
            O.jsx("div", {
              className: "email",
              children: O.jsx("input", {
                className: p,
                type: "email",
                placeholder: o,
              }),
            }),
            O.jsx("div", {
              className: "telefono",
              children: O.jsx("input", {
                className: p,
                type: "text",
                placeholder: i,
              }),
            }),
            O.jsx("div", {
              className: "empresa",
              children: O.jsx("input", {
                className: p,
                type: "text",
                placeholder: l,
              }),
            }),
            O.jsx("div", {
              className: "mensaje h-[15vw]",
              children: O.jsx("textarea", {
                className:
                  "w-full h-full border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary resize-none",
                placeholder: u,
              }),
            }),
            O.jsx("div", {
              className: "boton",
              children: O.jsx("button", {
                type: "button",
                className:
                  "rounded-md bg-naranja px-3.5 py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul w-full",
                children: d,
              }),
            }),
            O.jsxs("div", { className: "contenido", children: [s, " ", a] }),
          ],
        }),
      }),
    });
  },
  Dv = M.lazy(() => Mf(() => import("./Header-CMgWL1ZO.js"), [])),
  Mv = M.lazy(() => Mf(() => import("./QueHacemos-P5ocHQ_r.js"), []));
function Fv() {
  return O.jsxs(ah, {
    children: [
      O.jsx(Dv, {}),
      O.jsx(Mv, {}),
      O.jsx(kv, {}),
      O.jsx(Cv, {}),
      O.jsx(Lv, {}),
      O.jsx(Iv, {}),
    ],
  });
}
const dd = "prueba2/assets/Loading-C5RIasdU.png",
  ya = () =>
    O.jsx("div", {
      className: "flex justify-center items-center h-[100vh]",
      children: O.jsx("img", {
        src: dd,
        alt: "",
        className: "w-16 animate-rotate-360 animate-infinite",
        style: { animationIterationCount: "infinite" },
      }),
    });
function Uv(e, t) {
  return e.reduce((n, r, o) => {
    const i = r.split("/").pop().split(".")[0];
    return (n[i] = t[o]), n;
  }, {});
}
const Av = "prueba2/assets/Logo-DsoOdxr4.png",
  $v = "prueba2/assets/carrousel-nbZyNfu-.png",
  Wv = "prueba2/assets/head1-2nkyrNr6.png",
  Bv = "prueba2/assets/isologo-BH44BGcL.png",
  Hv = "prueba2/assets/chinaSection-0P6EgN8b.jpg",
  Vv = (e) =>
    new Promise((t, n) => {
      const r = new Image();
      (r.src = e),
        (r.onload = () => t(e)),
        (r.onerror = () => n(new Error(`Failed to load image: ${e}`)));
    }),
  Qv = ({ children: e }) => {
    const [t, n] = M.useState(!1),
      [r, o] = M.useState({});
    if (
      (M.useEffect(() => {
        (async () => {
          try {
            const u = [dd, Av, $v, Wv, Bv, Hv],
              s = await Promise.all(u.map(Vv));
            o(Uv(u, s)), n(!0);
          } catch (u) {
            console.error("Error loading resources", u);
          }
        })();
      }, []),
      !t)
    )
      return O.jsx(ya, {});
    const i = jo.cloneElement(e, { resources: r });
    return O.jsx(M.Suspense, { fallback: O.jsx(ya, {}), children: i });
  },
  Kv = { value: 0 },
  pd = Mu({
    name: "counter",
    initialState: Kv,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
      decrement: (e) => {
        e.value -= 1;
      },
      incrementByAmount: (e, t) => {
        e.value += t.payload;
      },
    },
  });
pd.actions;
const Yv = pd.reducer;
var Fu = {},
  Uu = {};
Uu.__esModule = !0;
Uu.default = Zv;
function Xr(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xr = function (n) {
          return typeof n;
        })
      : (Xr = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Xr(e)
  );
}
function zi() {}
var Gv = { getItem: zi, setItem: zi, removeItem: zi };
function Xv(e) {
  if ((typeof self > "u" ? "undefined" : Xr(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e],
      n = "redux-persist ".concat(e, " test");
    t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
  } catch {
    return !1;
  }
  return !0;
}
function Zv(e) {
  var t = "".concat(e, "Storage");
  return Xv(t) ? self[t] : Gv;
}
Fu.__esModule = !0;
Fu.default = bv;
var qv = Jv(Uu);
function Jv(e) {
  return e && e.__esModule ? e : { default: e };
}
function bv(e) {
  var t = (0, qv.default)(e);
  return {
    getItem: function (r) {
      return new Promise(function (o, i) {
        o(t.getItem(r));
      });
    },
    setItem: function (r, o) {
      return new Promise(function (i, l) {
        i(t.setItem(r, o));
      });
    },
    removeItem: function (r) {
      return new Promise(function (o, i) {
        o(t.removeItem(r));
      });
    },
  };
}
var md = void 0,
  ey = ty(Fu);
function ty(e) {
  return e && e.__esModule ? e : { default: e };
}
var ny = (0, ey.default)("local");
md = ny;
var Au = "persist:",
  hd = "persist/FLUSH",
  $u = "persist/REHYDRATE",
  vd = "persist/PAUSE",
  yd = "persist/PERSIST",
  gd = "persist/PURGE",
  wd = "persist/REGISTER",
  ry = -1;
function Zr(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Zr = function (n) {
          return typeof n;
        })
      : (Zr = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Zr(e)
  );
}
function ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ga(n, !0).forEach(function (r) {
          iy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ga(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function iy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ly(e, t, n, r) {
  r.debug;
  var o = oy({}, n);
  return (
    e &&
      Zr(e) === "object" &&
      Object.keys(e).forEach(function (i) {
        i !== "_persist" && t[i] === n[i] && (o[i] = e[i]);
      }),
    o
  );
}
function uy(e) {
  var t = e.blacklist || null,
    n = e.whitelist || null,
    r = e.transforms || [],
    o = e.throttle || 0,
    i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Au).concat(e.key),
    l = e.storage,
    u;
  e.serialize === !1
    ? (u = function (S) {
        return S;
      })
    : typeof e.serialize == "function"
      ? (u = e.serialize)
      : (u = sy);
  var s = e.writeFailHandler || null,
    a = {},
    d = {},
    p = [],
    h = null,
    y = null,
    g = function (S) {
      Object.keys(S).forEach(function (E) {
        f(E) && a[E] !== S[E] && p.indexOf(E) === -1 && p.push(E);
      }),
        Object.keys(a).forEach(function (E) {
          S[E] === void 0 &&
            f(E) &&
            p.indexOf(E) === -1 &&
            a[E] !== void 0 &&
            p.push(E);
        }),
        h === null && (h = setInterval(w, o)),
        (a = S);
    };
  function w() {
    if (p.length === 0) {
      h && clearInterval(h), (h = null);
      return;
    }
    var v = p.shift(),
      S = r.reduce(function (E, x) {
        return x.in(E, v, a);
      }, a[v]);
    if (S !== void 0)
      try {
        d[v] = u(S);
      } catch (E) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          E
        );
      }
    else delete d[v];
    p.length === 0 && k();
  }
  function k() {
    Object.keys(d).forEach(function (v) {
      a[v] === void 0 && delete d[v];
    }),
      (y = l.setItem(i, u(d)).catch(c));
  }
  function f(v) {
    return !(
      (n && n.indexOf(v) === -1 && v !== "_persist") ||
      (t && t.indexOf(v) !== -1)
    );
  }
  function c(v) {
    s && s(v);
  }
  var m = function () {
    for (; p.length !== 0; ) w();
    return y || Promise.resolve();
  };
  return { update: g, flush: m };
}
function sy(e) {
  return JSON.stringify(e);
}
function ay(e) {
  var t = e.transforms || [],
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Au).concat(e.key),
    r = e.storage;
  e.debug;
  var o;
  return (
    e.deserialize === !1
      ? (o = function (l) {
          return l;
        })
      : typeof e.deserialize == "function"
        ? (o = e.deserialize)
        : (o = cy),
    r.getItem(n).then(function (i) {
      if (i)
        try {
          var l = {},
            u = o(i);
          return (
            Object.keys(u).forEach(function (s) {
              l[s] = t.reduceRight(function (a, d) {
                return d.out(a, s, u);
              }, o(u[s]));
            }),
            l
          );
        } catch (s) {
          throw s;
        }
      else return;
    })
  );
}
function cy(e) {
  return JSON.parse(e);
}
function fy(e) {
  var t = e.storage,
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Au).concat(e.key);
  return t.removeItem(n, dy);
}
function dy(e) {}
function wa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wa(n, !0).forEach(function (r) {
          py(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wa(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function py(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function my(e, t) {
  if (e == null) return {};
  var n = hy(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function hy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var vy = 5e3;
function yy(e, t) {
  var n = e.version !== void 0 ? e.version : ry;
  e.debug;
  var r = e.stateReconciler === void 0 ? ly : e.stateReconciler,
    o = e.getStoredState || ay,
    i = e.timeout !== void 0 ? e.timeout : vy,
    l = null,
    u = !1,
    s = !0,
    a = function (p) {
      return p._persist.rehydrated && l && !s && l.update(p), p;
    };
  return function (d, p) {
    var h = d || {},
      y = h._persist,
      g = my(h, ["_persist"]),
      w = g;
    if (p.type === yd) {
      var k = !1,
        f = function (P, I) {
          k || (p.rehydrate(e.key, P, I), (k = !0));
        };
      if (
        (i &&
          setTimeout(function () {
            !k &&
              f(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"'
                  )
                )
              );
          }, i),
        (s = !1),
        l || (l = uy(e)),
        y)
      )
        return Ke({}, t(w, p), { _persist: y });
      if (typeof p.rehydrate != "function" || typeof p.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
        );
      return (
        p.register(e.key),
        o(e).then(
          function (x) {
            var P =
              e.migrate ||
              function (I, R) {
                return Promise.resolve(I);
              };
            P(x, n).then(
              function (I) {
                f(I);
              },
              function (I) {
                f(void 0, I);
              }
            );
          },
          function (x) {
            f(void 0, x);
          }
        ),
        Ke({}, t(w, p), { _persist: { version: n, rehydrated: !1 } })
      );
    } else {
      if (p.type === gd)
        return (u = !0), p.result(fy(e)), Ke({}, t(w, p), { _persist: y });
      if (p.type === hd)
        return p.result(l && l.flush()), Ke({}, t(w, p), { _persist: y });
      if (p.type === vd) s = !0;
      else if (p.type === $u) {
        if (u) return Ke({}, w, { _persist: Ke({}, y, { rehydrated: !0 }) });
        if (p.key === e.key) {
          var c = t(w, p),
            m = p.payload,
            v = r !== !1 && m !== void 0 ? r(m, d, c, e) : c,
            S = Ke({}, v, { _persist: Ke({}, y, { rehydrated: !0 }) });
          return a(S);
        }
      }
    }
    if (!y) return t(d, p);
    var E = t(w, p);
    return E === w ? d : a(Ke({}, E, { _persist: y }));
  };
}
function Sa(e) {
  return Sy(e) || wy(e) || gy();
}
function gy() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function wy(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function Sy(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function _a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _a(n, !0).forEach(function (r) {
          _y(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _a(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function _y(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Sd = { registry: [], bootstrapped: !1 },
  Ey = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sd,
      n = arguments.length > 1 ? arguments[1] : void 0;
    switch (n.type) {
      case wd:
        return Il({}, t, { registry: [].concat(Sa(t.registry), [n.key]) });
      case $u:
        var r = t.registry.indexOf(n.key),
          o = Sa(t.registry);
        return (
          o.splice(r, 1),
          Il({}, t, { registry: o, bootstrapped: o.length === 0 })
        );
      default:
        return t;
    }
  };
function ky(e, t, n) {
  var r = Lu(Ey, Sd, void 0),
    o = function (s) {
      r.dispatch({ type: wd, key: s });
    },
    i = function (s, a, d) {
      var p = { type: $u, payload: a, err: d, key: s };
      e.dispatch(p), r.dispatch(p);
    },
    l = Il({}, r, {
      purge: function () {
        var s = [];
        return (
          e.dispatch({
            type: gd,
            result: function (d) {
              s.push(d);
            },
          }),
          Promise.all(s)
        );
      },
      flush: function () {
        var s = [];
        return (
          e.dispatch({
            type: hd,
            result: function (d) {
              s.push(d);
            },
          }),
          Promise.all(s)
        );
      },
      pause: function () {
        e.dispatch({ type: vd });
      },
      persist: function () {
        e.dispatch({ type: yd, register: o, rehydrate: i });
      },
    });
  return l.persist(), l;
}
const xy = { key: "root", storage: md, whitelist: ["counter", "language"] },
  Py = Gf({ counter: Yv, language: Ev, data: wv }),
  Cy = yy(xy, Py),
  _d = rv({
    reducer: Cy,
    middleware: (e) =>
      e({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(rd),
  }),
  Ny = ky(_d);
function qr(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (qr = function (n) {
          return typeof n;
        })
      : (qr = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    qr(e)
  );
}
function Oy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Ry(e, t, n) {
  return t && Ty(e.prototype, t), e;
}
function zy(e, t) {
  return t && (qr(t) === "object" || typeof t == "function") ? t : Jr(e);
}
function Dl(e) {
  return (
    (Dl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Dl(e)
  );
}
function Jr(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function jy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ml(e, t);
}
function Ml(e, t) {
  return (
    (Ml =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Ml(e, t)
  );
}
function br(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ed = (function (e) {
  jy(t, e);
  function t() {
    var n, r;
    Oy(this, t);
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return (
      (r = zy(this, (n = Dl(t)).call.apply(n, [this].concat(i)))),
      br(Jr(r), "state", { bootstrapped: !1 }),
      br(Jr(r), "_unsubscribe", void 0),
      br(Jr(r), "handlePersistorState", function () {
        var u = r.props.persistor,
          s = u.getState(),
          a = s.bootstrapped;
        a &&
          (r.props.onBeforeLift
            ? Promise.resolve(r.props.onBeforeLift()).finally(function () {
                return r.setState({ bootstrapped: !0 });
              })
            : r.setState({ bootstrapped: !0 }),
          r._unsubscribe && r._unsubscribe());
      }),
      r
    );
  }
  return (
    Ry(t, [
      {
        key: "componentDidMount",
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState
          )),
            this.handlePersistorState();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
              ? this.props.children
              : this.props.loading;
        },
      },
    ]),
    t
  );
})(M.PureComponent);
br(Ed, "defaultProps", { children: null, loading: null });
Li.createRoot(document.getElementById("root")).render(
  O.jsx(jo.StrictMode, {
    children: O.jsx(Ed, {
      persistor: Ny,
      children: O.jsx(zh, {
        store: _d,
        children: O.jsx(Qv, { children: O.jsx(Fv, {}) }),
      }),
    }),
  })
);
export {
  jo as G,
  Av as L,
  Pv as R,
  Zm as a,
  la as b,
  Iy as c,
  Jo as d,
  $v as e,
  fd as f,
  Bv as i,
  O as j,
  zv as p,
  M as r,
  _v as s,
  Ly as u,
};
