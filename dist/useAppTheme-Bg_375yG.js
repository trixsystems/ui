import { useToast as L } from "primevue/usetoast";
import k from "axios";
import { ref as g, computed as E, watch as N, onUnmounted as O, onMounted as q } from "vue";
import { useConfirm as U } from "primevue/useconfirm";
function B() {
  const e = L();
  return {
    success: (l, u = "Sucesso", r = {}) => {
      e.add({
        severity: "success",
        summary: u,
        detail: l,
        life: r.life ?? 3e3,
        closable: r.closable ?? !0,
        group: r.group
      });
    },
    error: (l, u = "Erro", r = {}) => {
      e.add({
        severity: "error",
        summary: u,
        detail: l,
        life: r.life ?? 5e3,
        closable: r.closable ?? !0,
        group: r.group
      });
    },
    warn: (l, u = "Atenção", r = {}) => {
      e.add({
        severity: "warn",
        summary: u,
        detail: l,
        life: r.life ?? 4e3,
        closable: r.closable ?? !0,
        group: r.group
      });
    },
    info: (l, u = "Informação", r = {}) => {
      e.add({
        severity: "info",
        summary: u,
        detail: l,
        life: r.life ?? 3e3,
        closable: r.closable ?? !0,
        group: r.group
      });
    },
    clear: (l) => {
      e.removeGroup(l ?? "default");
    },
    clearAll: () => {
      e.removeAllGroups();
    },
    toast: e
  };
}
const Q = B;
function D(e = {}) {
  const {
    baseURL: t = "/api/v1",
    tokenKey: a = "access_token",
    onUnauthorized: o
  } = e, s = k.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  return s.interceptors.request.use((n) => {
    const p = localStorage.getItem(a);
    return p && (n.headers.Authorization = `Bearer ${p}`), n;
  }), s.interceptors.response.use(
    (n) => n,
    (n) => {
      var p;
      return ((p = n.response) == null ? void 0 : p.status) === 401 && (localStorage.removeItem(a), o && o()), Promise.reject(n);
    }
  ), s;
}
function W(e) {
  const t = g(!1), a = g(null), o = g(null), s = e || D(), n = async (f) => {
    var c, d, h;
    t.value = !0, a.value = null;
    try {
      const v = await s.request(f);
      return o.value = v.data, { data: v.data, status: v.status };
    } catch (v) {
      const b = ((d = (c = v.response) == null ? void 0 : c.data) == null ? void 0 : d.error) || v.message || "Erro na requisição";
      return a.value = b, { error: b, status: (h = v.response) == null ? void 0 : h.status };
    } finally {
      t.value = !1;
    }
  };
  return {
    loading: t,
    error: a,
    data: o,
    request: n,
    get: (f, c) => n({ ...c, method: "GET", url: f }),
    post: (f, c, d) => n({ ...d, method: "POST", url: f, data: c }),
    put: (f, c, d) => n({ ...d, method: "PUT", url: f, data: c }),
    patch: (f, c, d) => n({ ...d, method: "PATCH", url: f, data: c }),
    del: (f, c) => n({ ...c, method: "DELETE", url: f }),
    client: s
  };
}
function X(e) {
  const {
    authUrl: t = "/api/v1",
    appName: a,
    tokenKey: o = "access_token",
    refreshTokenKey: s = "refresh_token",
    userKey: n = "user",
    onLogout: p
  } = e, l = g(null), u = g(null), r = g(null), i = g(!1), f = E(() => !!u.value && !!l.value), c = E(() => {
    var m;
    return ((m = l.value) == null ? void 0 : m.role) === "admin";
  }), d = E(() => {
    var m;
    return ["admin", "supervisor"].includes(((m = l.value) == null ? void 0 : m.role) || "");
  }), h = async () => {
    const m = localStorage.getItem(o), w = localStorage.getItem(s), S = localStorage.getItem(n);
    if (m && S) {
      u.value = m, r.value = w, l.value = JSON.parse(S);
      try {
        await $();
      } catch {
        b();
      }
    }
  }, v = async (m) => {
    var w, S, A;
    i.value = !0;
    try {
      const y = (await k.post(`${t}/unified-auth/login`, {
        email: m.email,
        password: m.password,
        app_name: a
      })).data;
      return u.value = y.access_token, r.value = y.refresh_token, l.value = {
        id: y.user.id,
        email: y.user.email,
        name: y.user.full_name,
        role: ((w = y.app_access) == null ? void 0 : w.role) || "user"
      }, localStorage.setItem(o, y.access_token), localStorage.setItem(s, y.refresh_token), localStorage.setItem(n, JSON.stringify(l.value)), { success: !0 };
    } catch (x) {
      return { success: !1, error: ((A = (S = x.response) == null ? void 0 : S.data) == null ? void 0 : A.error) || x.message || "Falha no login" };
    } finally {
      i.value = !1;
    }
  }, b = async () => {
    if (u.value)
      try {
        await k.post(`${t}/unified-auth/logout`, null, {
          headers: { Authorization: `Bearer ${u.value}` }
        });
      } catch {
      }
    u.value = null, r.value = null, l.value = null, localStorage.removeItem(o), localStorage.removeItem(s), localStorage.removeItem(n), p && p();
  }, j = async () => {
    if (!r.value)
      throw new Error("No refresh token");
    try {
      const m = await k.post(`${t}/unified-auth/refresh`, {
        refresh_token: r.value
      });
      return u.value = m.data.access_token, r.value = m.data.refresh_token, localStorage.setItem(o, m.data.access_token), localStorage.setItem(s, m.data.refresh_token), m.data.access_token;
    } catch {
      throw b(), new Error("Token refresh failed");
    }
  }, $ = async () => {
    var w;
    const m = await k.get(`${t}/unified-auth/me`, {
      headers: { Authorization: `Bearer ${u.value}` }
    });
    l.value = {
      id: m.data.id,
      email: m.data.email,
      name: m.data.full_name,
      role: ((w = m.data.app_access) == null ? void 0 : w.role) || "user"
    }, localStorage.setItem(n, JSON.stringify(l.value));
  };
  return {
    user: l,
    accessToken: u,
    refreshToken: r,
    loading: i,
    isAuthenticated: f,
    isAdmin: c,
    isSupervisor: d,
    initialize: h,
    login: v,
    logout: b,
    refreshAccessToken: j,
    fetchCurrentUser: $,
    changePassword: async (m, w) => {
      var S, A;
      i.value = !0;
      try {
        return await k.post(
          `${t}/unified-auth/change-password`,
          {
            current_password: m,
            new_password: w
          },
          {
            headers: { Authorization: `Bearer ${u.value}` }
          }
        ), { success: !0 };
      } catch (x) {
        return { success: !1, error: ((A = (S = x.response) == null ? void 0 : S.data) == null ? void 0 : A.error) || "Falha ao alterar senha" };
      } finally {
        i.value = !1;
      }
    }
  };
}
function Y() {
  const e = U();
  function t(o) {
    e.require({
      acceptLabel: "Sim",
      rejectLabel: "Não",
      ...o
    });
  }
  function a() {
    e.close();
  }
  return { require: t, close: a };
}
function Z(e) {
  const { schema: t, initialValues: a = {} } = e, o = g({ ...a }), s = g({}), n = g(!1), p = E(() => JSON.stringify(o.value) !== JSON.stringify(a)), l = E(() => Object.keys(s.value).length === 0), u = async () => {
    const c = await t.safeParseAsync(o.value);
    if (c.success)
      return s.value = {}, !0;
    const d = {};
    for (const h of c.error.issues) {
      const v = h.path[0];
      v && !d[v] && (d[v] = h.message);
    }
    return s.value = d, !1;
  };
  return {
    values: o,
    errors: s,
    isValid: l,
    isDirty: p,
    isSubmitting: n,
    handleSubmit: (c) => async (d) => {
      d == null || d.preventDefault(), n.value = !0;
      try {
        await u() && await c(o.value);
      } finally {
        n.value = !1;
      }
    },
    resetForm: () => {
      o.value = { ...a }, s.value = {}, n.value = !1;
    },
    setFieldError: (c, d) => {
      s.value = { ...s.value, [c]: d };
    },
    validate: u
  };
}
const P = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function ee(e, t = {}) {
  const { immediate: a = !1, returnFocusTo: o } = t, s = g(!1);
  let n = null;
  const p = () => e.value ? Array.from(
    e.value.querySelectorAll(P)
  ).filter((i) => !i.closest("[hidden]")) : [], l = (i) => {
    var v, b;
    if (!s.value || i.key !== "Tab") return;
    const f = p();
    if (f.length === 0) {
      i.preventDefault();
      return;
    }
    const c = f[0], d = f[f.length - 1], h = document.activeElement;
    i.shiftKey ? (h === c || !((v = e.value) != null && v.contains(h))) && (i.preventDefault(), d.focus()) : (h === d || !((b = e.value) != null && b.contains(h))) && (i.preventDefault(), c.focus());
  }, u = () => {
    var f;
    if (s.value || !e.value) return;
    n = document.activeElement, s.value = !0, document.addEventListener("keydown", l);
    const i = p();
    i.length > 0 ? i[0].focus() : (f = e.value) == null || f.focus();
  }, r = () => {
    if (!s.value) return;
    s.value = !1, document.removeEventListener("keydown", l);
    const i = o ? o instanceof Element ? o : o.value : n;
    i == null || i.focus(), n = null;
  };
  return a && N(
    e,
    (i) => {
      i ? u() : r();
    },
    { immediate: !0 }
  ), O(r), { isActive: s, activate: u, deactivate: r };
}
let T = null, I = null, C = 0;
function F(e) {
  const t = e === "polite" ? T : I;
  if (t && document.body.contains(t)) return t;
  const a = document.createElement("div");
  return a.setAttribute("aria-live", e), a.setAttribute("aria-atomic", "true"), a.setAttribute("aria-relevant", "additions text"), Object.assign(a.style, {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: "0"
  }), document.body.appendChild(a), e === "polite" ? T = a : I = a, a;
}
function z(e) {
  e && C === 0 && document.body.contains(e) && (document.body.removeChild(e), e === T && (T = null), e === I && (I = null));
}
function te(e = "polite") {
  let t = null;
  return q(() => {
    C++, t = F(e);
  }), O(() => {
    C--, z(t), t = null;
  }), { announce: (o, s = 3e3) => {
    t || (t = F(e)), t.textContent = "", requestAnimationFrame(() => {
      t && (t.textContent = o);
    }), s > 0 && setTimeout(() => {
      t && (t.textContent = "");
    }, s);
  } };
}
const _ = { current: "" };
function ae(e) {
  var d;
  const {
    appName: t,
    primaryColor: a,
    primaryColorHover: o,
    primaryColorDark: s,
    primaryColorGlow: n,
    cardRadius: p,
    customVars: l = {},
    selector: u = ":root"
  } = e;
  if (_.current === t) return;
  _.current = t;
  const r = {};
  a && (r["--trx-accent-color"] = a, r["--trx-accent-hover"] = o ?? R(a, -10), r["--trx-primary-soft"] = K(a, 0.15)), s && (r["--trx-accent-color-dark-override"] = s), n && (r["--trx-accent-glow"] = n), p && (r["--trx-card-radius"] = p), Object.assign(r, l);
  const i = Object.entries(r).map(([h, v]) => `  ${h}: ${v};`).join(`
`);
  if (!i) return;
  const f = `trx-app-theme-${t}`;
  (d = document.getElementById(f)) == null || d.remove();
  const c = document.createElement("style");
  c.id = f, c.textContent = `${u} {
${i}
}`, document.head.appendChild(c), document.documentElement.setAttribute("data-trx-app", t);
}
function re() {
  const e = document.querySelector('[id^="trx-app-theme-"]');
  e == null || e.remove(), document.documentElement.removeAttribute("data-trx-app"), _.current = "";
}
function K(e, t) {
  const a = e.replace("#", ""), o = parseInt(a.substring(0, 2), 16), s = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16);
  return `rgba(${o}, ${s}, ${n}, ${t})`;
}
function R(e, t) {
  const a = e.replace("#", ""), o = (l) => Math.min(255, Math.max(0, l)), s = o(parseInt(a.substring(0, 2), 16) + t), n = o(parseInt(a.substring(2, 4), 16) + t), p = o(parseInt(a.substring(4, 6), 16) + t);
  return `#${[s, n, p].map((l) => l.toString(16).padStart(2, "0")).join("")}`;
}
export {
  Q as a,
  W as b,
  D as c,
  X as d,
  Y as e,
  Z as f,
  ee as g,
  te as h,
  ae as i,
  re as r,
  B as u
};
