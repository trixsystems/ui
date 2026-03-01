import { defineComponent as b, createElementBlock as r, openBlock as l, normalizeClass as w, createElementVNode as s, resolveDirective as bt, withDirectives as et, createBlock as V, unref as T, createCommentVNode as f, toDisplayString as v, renderSlot as k, Transition as U, withCtx as C, createVNode as O, ref as E, computed as I, createTextVNode as N, withModifiers as j, normalizeStyle as z, onMounted as G, Fragment as D, renderList as y, resolveComponent as gt, reactive as yt, withKeys as pt, watch as Q, onBeforeUnmount as Y, onUnmounted as mt, nextTick as lt, resolveDynamicComponent as kt, useTemplateRef as st, mergeProps as wt, vModelText as nt, useCssVars as Tt, Teleport as rt, useAttrs as X, normalizeProps as h, guardReactiveProps as x, createSlots as A } from "vue";
import { u as Ct } from "./useTheme-nUyNyP_j.js";
import Z from "primevue/button";
import vt from "primevue/tag";
import ft from "primevue/progressspinner";
import at from "primevue/inputtext";
import ot from "primevue/password";
import it from "primevue/message";
import St from "primevue/datatable";
import { useRouter as Pt, useRoute as Vt } from "vue-router";
import ht from "primevue/avatar";
import xt from "primevue/checkbox";
import It from "primevue/autocomplete";
import At from "primevue/datepicker";
import Bt from "primevue/inputnumber";
import Mt from "primevue/select";
import Lt from "primevue/multiselect";
import Dt from "primevue/listbox";
import zt from "primevue/cascadeselect";
import Et from "primevue/checkboxgroup";
import Rt from "primevue/floatlabel";
import Nt from "primevue/fluid";
import qt from "primevue/iconfield";
import Ft from "primevue/iftalabel";
import Ot from "primevue/inputchips";
import Ht from "primevue/inputgroup";
import Ut from "primevue/inputgroupaddon";
import Gt from "primevue/inputicon";
import jt from "primevue/inputmask";
import Wt from "primevue/inputotp";
import Kt from "primevue/knob";
import Jt from "primevue/radiobutton";
import Xt from "primevue/radiobuttongroup";
import Yt from "primevue/rating";
import Qt from "primevue/selectbutton";
import Zt from "primevue/slider";
import te from "primevue/textarea";
import ee from "primevue/togglebutton";
import se from "primevue/toggleswitch";
import ae from "primevue/treeselect";
import le from "primevue/buttongroup";
import ne from "primevue/speeddial";
import re from "primevue/splitbutton";
import oe from "primevue/paginator";
import ie from "primevue/column";
import ce from "primevue/columngroup";
import ue from "primevue/dataview";
import de from "primevue/orderlist";
import _e from "primevue/organizationchart";
import pe from "primevue/picklist";
import me from "primevue/row";
import ve from "primevue/timeline";
import fe from "primevue/tree";
import he from "primevue/treetable";
import xe from "primevue/virtualscroller";
import $e from "primevue/accordion";
import be from "primevue/accordioncontent";
import ge from "primevue/accordionheader";
import ye from "primevue/accordionpanel";
import ke from "primevue/deferredcontent";
import we from "primevue/divider";
import Te from "primevue/fieldset";
import Ce from "primevue/panel";
import Se from "primevue/scrollpanel";
import Pe from "primevue/splitter";
import Ve from "primevue/splitterpanel";
import Ie from "primevue/stepper";
import Ae from "primevue/step";
import Be from "primevue/stepitem";
import Me from "primevue/steplist";
import Le from "primevue/steppanel";
import De from "primevue/steppanels";
import ze from "primevue/tabs";
import Ee from "primevue/tab";
import Re from "primevue/tablist";
import Ne from "primevue/tabpanel";
import qe from "primevue/tabpanels";
import Fe from "primevue/toolbar";
import Oe from "primevue/dialog";
import He from "primevue/confirmdialog";
import Ue from "primevue/confirmpopup";
import Ge from "primevue/drawer";
import je from "primevue/dynamicdialog";
import We from "primevue/popover";
import Ke from "primevue/breadcrumb";
import Je from "primevue/contextmenu";
import Xe from "primevue/dock";
import Ye from "primevue/megamenu";
import Qe from "primevue/menu";
import Ze from "primevue/menubar";
import ts from "primevue/panelmenu";
import es from "primevue/steps";
import ss from "primevue/tabmenu";
import as from "primevue/tieredmenu";
import ls from "primevue/toast";
import ns from "primevue/inlinemessage";
import rs from "primevue/carousel";
import os from "primevue/galleria";
import is from "primevue/image";
import cs from "primevue/imagecompare";
import us from "primevue/fileupload";
import ds from "primevue/chart";
import _s from "primevue/avatargroup";
import ps from "primevue/badge";
import ms from "primevue/blockui";
import vs from "primevue/chip";
import fs from "primevue/inplace";
import hs from "primevue/metergroup";
import xs from "primevue/overlaybadge";
import $s from "primevue/progressbar";
import bs from "primevue/scrolltop";
import gs from "primevue/skeleton";
import ys from "primevue/terminal";
const ks = /* @__PURE__ */ b({
  __name: "TrxLogo",
  props: {
    size: {},
    variant: {}
  },
  setup(t) {
    return (e, o) => (l(), r("div", {
      class: w(["trx-logo", [
        `trx-logo--${t.size || "md"}`,
        `trx-logo--${t.variant || "full"}`
      ]])
    }, [...o[0] || (o[0] = [
      s("svg", {
        viewBox: "0 0 120 40",
        class: "trx-logo__svg"
      }, [
        s("text", {
          x: "10",
          y: "30",
          class: "trx-logo__text",
          "font-family": "Inter, system-ui, sans-serif",
          "font-weight": "700"
        }, " TRX ")
      ], -1)
    ])], 2));
  }
}), L = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, a] of e)
    o[i] = a;
  return o;
}, ab = /* @__PURE__ */ L(ks, [["__scopeId", "data-v-d5448055"]]), ws = /* @__PURE__ */ b({
  __name: "TrxThemeToggle",
  setup(t) {
    const { isDark: e, toggleTheme: o } = Ct();
    return (i, a) => {
      const n = bt("tooltip");
      return et((l(), V(T(Z), {
        icon: T(e) ? "pi pi-sun" : "pi pi-moon",
        severity: "secondary",
        text: "",
        rounded: "",
        onClick: T(o),
        class: "trx-theme-toggle"
      }, null, 8, ["icon", "onClick"])), [
        [
          n,
          T(e) ? "Tema Claro" : "Tema Escuro",
          void 0,
          { bottom: !0 }
        ]
      ]);
    };
  }
}), lb = /* @__PURE__ */ L(ws, [["__scopeId", "data-v-f12c0272"]]), Ts = { class: "trx-page-header" }, Cs = { class: "trx-page-header__content" }, Ss = { class: "trx-page-header__title" }, Ps = {
  key: 0,
  class: "trx-page-header__subtitle"
}, Vs = { class: "trx-page-header__actions" }, Is = /* @__PURE__ */ b({
  __name: "TrxPageHeader",
  props: {
    title: {},
    subtitle: {},
    icon: {}
  },
  setup(t) {
    return (e, o) => (l(), r("div", Ts, [
      s("div", Cs, [
        t.icon ? (l(), r("i", {
          key: 0,
          class: w([t.icon, "trx-page-header__icon"])
        }, null, 2)) : f("", !0),
        s("div", null, [
          s("h1", Ss, v(t.title), 1),
          t.subtitle ? (l(), r("p", Ps, v(t.subtitle), 1)) : f("", !0)
        ])
      ]),
      s("div", Vs, [
        k(e.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), nb = /* @__PURE__ */ L(Is, [["__scopeId", "data-v-def36de6"]]), As = /* @__PURE__ */ b({
  __name: "TrxStatusBadge",
  props: {
    status: {},
    type: {}
  },
  setup(t) {
    const e = t, o = {
      // Common statuses
      active: "success",
      ativo: "success",
      online: "success",
      connected: "success",
      available: "success",
      completed: "success",
      aprovado: "success",
      inactive: "secondary",
      inativo: "secondary",
      offline: "secondary",
      disconnected: "secondary",
      pending: "warning",
      pendente: "warning",
      waiting: "warning",
      aguardando: "warning",
      busy: "warning",
      ocupado: "warning",
      error: "danger",
      erro: "danger",
      failed: "danger",
      falha: "danger",
      rejected: "danger",
      rejeitado: "danger",
      canceled: "danger",
      cancelado: "danger",
      info: "info",
      processing: "info",
      processando: "info"
    }, i = () => {
      if (e.type) return e.type;
      const a = e.status.toLowerCase();
      return o[a] || "secondary";
    };
    return (a, n) => (l(), V(T(vt), {
      value: t.status,
      severity: i(),
      class: "trx-status-badge"
    }, null, 8, ["value", "severity"]));
  }
}), rb = /* @__PURE__ */ L(As, [["__scopeId", "data-v-c36955e9"]]), Bs = {
  key: 0,
  class: "trx-loading-overlay"
}, Ms = { class: "trx-loading-overlay__content" }, Ls = {
  key: 0,
  class: "trx-loading-overlay__message"
}, Ds = /* @__PURE__ */ b({
  __name: "TrxLoadingOverlay",
  props: {
    visible: { type: Boolean },
    message: {}
  },
  setup(t) {
    return (e, o) => (l(), V(U, { name: "fade" }, {
      default: C(() => [
        t.visible ? (l(), r("div", Bs, [
          s("div", Ms, [
            O(T(ft), {
              style: { width: "50px", height: "50px" },
              strokeWidth: "4"
            }),
            t.message ? (l(), r("p", Ls, v(t.message), 1)) : f("", !0)
          ])
        ])) : f("", !0)
      ]),
      _: 1
    }));
  }
}), ob = /* @__PURE__ */ L(Ds, [["__scopeId", "data-v-4eb5da13"]]), zs = { class: "trx-empty-state" }, Es = { class: "trx-empty-state__title" }, Rs = {
  key: 0,
  class: "trx-empty-state__description"
}, Ns = { class: "trx-empty-state__actions" }, qs = /* @__PURE__ */ b({
  __name: "TrxEmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(t) {
    return (e, o) => (l(), r("div", zs, [
      s("i", {
        class: w([t.icon || "pi pi-inbox", "trx-empty-state__icon"])
      }, null, 2),
      s("h3", Es, v(t.title), 1),
      t.description ? (l(), r("p", Rs, v(t.description), 1)) : f("", !0),
      s("div", Ns, [
        k(e.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), ib = /* @__PURE__ */ L(qs, [["__scopeId", "data-v-49c3d947"]]), Fs = { class: "trx-login" }, Os = { class: "trx-login__container" }, Hs = { class: "trx-login__header" }, Us = { class: "trx-login__logo" }, Gs = {
  key: 0,
  class: "trx-login__logo-app"
}, js = { class: "trx-login__title" }, Ws = { class: "trx-login__subtitle" }, Ks = { class: "trx-login__field" }, Js = { class: "trx-login__field" }, Xs = { class: "trx-login__forgot" }, Ys = {
  key: 1,
  class: "trx-login__actions"
}, Qs = { class: "trx-login__footer" }, Zs = { class: "trx-login__copyright" }, ta = /* @__PURE__ */ b({
  __name: "TrxLoginForm",
  props: {
    appName: {},
    appTitle: {},
    loading: { type: Boolean },
    error: {}
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(""), n = E(""), c = I(() => a.value.trim() !== "" && n.value.trim() !== ""), u = () => {
      c.value && !o.loading && i("submit", {
        email: a.value.trim(),
        password: n.value
      });
    };
    return (_, d) => (l(), r("div", Fs, [
      s("div", Os, [
        s("div", Hs, [
          s("div", Us, [
            d[2] || (d[2] = s("span", { class: "trx-login__logo-text" }, "TRX", -1)),
            t.appName ? (l(), r("span", Gs, v(t.appName), 1)) : f("", !0)
          ]),
          s("h1", js, v(t.appTitle || "Entrar"), 1),
          s("p", Ws, [
            k(_.$slots, "subtitle", {}, () => [
              d[3] || (d[3] = N(" Entre com suas credenciais para acessar o sistema ", -1))
            ], !0)
          ])
        ]),
        s("form", {
          onSubmit: j(u, ["prevent"]),
          class: "trx-login__form"
        }, [
          t.error ? (l(), V(T(it), {
            key: 0,
            severity: "error",
            closable: !1,
            class: "trx-login__error"
          }, {
            default: C(() => [
              N(v(t.error), 1)
            ]),
            _: 1
          })) : f("", !0),
          s("div", Ks, [
            d[4] || (d[4] = s("label", {
              for: "email",
              class: "trx-login__label"
            }, "Email", -1)),
            O(T(at), {
              id: "email",
              modelValue: a.value,
              "onUpdate:modelValue": d[0] || (d[0] = (p) => a.value = p),
              type: "email",
              placeholder: "seu@email.com",
              class: "trx-login__input",
              disabled: t.loading,
              autocomplete: "email"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          s("div", Js, [
            d[5] || (d[5] = s("label", {
              for: "password",
              class: "trx-login__label"
            }, "Senha", -1)),
            O(T(ot), {
              id: "password",
              modelValue: n.value,
              "onUpdate:modelValue": d[1] || (d[1] = (p) => n.value = p),
              placeholder: "Digite sua senha",
              class: "trx-login__input",
              disabled: t.loading,
              feedback: !1,
              toggleMask: "",
              autocomplete: "current-password"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          s("div", Xs, [
            k(_.$slots, "forgot-password", {}, () => [
              d[6] || (d[6] = s("a", {
                href: "#",
                class: "trx-login__forgot-link"
              }, "Esqueceu a senha?", -1))
            ], !0)
          ]),
          O(T(Z), {
            type: "submit",
            label: t.loading ? "Entrando..." : "Entrar",
            loading: t.loading,
            disabled: !c.value || t.loading,
            class: "trx-login__submit",
            icon: "pi pi-sign-in"
          }, null, 8, ["label", "loading", "disabled"]),
          _.$slots.actions ? (l(), r("div", Ys, [
            k(_.$slots, "actions", {}, void 0, !0)
          ])) : f("", !0)
        ], 32),
        s("div", Qs, [
          k(_.$slots, "footer", {}, () => [
            s("p", Zs, " © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " TRX Systems ", 1)
          ], !0)
        ])
      ])
    ]));
  }
}), cb = /* @__PURE__ */ L(ta, [["__scopeId", "data-v-2ec7ed88"]]), ea = {
  key: 0,
  class: "trx-card-header"
}, sa = { class: "header-content" }, aa = {
  key: 0,
  class: "card-icon"
}, la = {
  key: 1,
  class: "header-text"
}, na = {
  key: 0,
  class: "card-title"
}, ra = {
  key: 1,
  class: "card-subtitle"
}, oa = { class: "trx-card-content" }, ia = {
  key: 0,
  class: "loading-overlay"
}, ca = {
  key: 1,
  class: "trx-card-footer"
}, ua = /* @__PURE__ */ b({
  __name: "TrxCard",
  props: {
    title: {},
    subtitle: {},
    icon: {},
    loading: { type: Boolean },
    hoverable: { type: Boolean }
  },
  setup(t) {
    return (e, o) => (l(), r("div", {
      class: w(["trx-card", { hoverable: t.hoverable, loading: t.loading }])
    }, [
      t.title || t.icon || e.$slots.header ? (l(), r("div", ea, [
        s("div", sa, [
          t.icon ? (l(), r("div", aa, [
            s("i", {
              class: w(t.icon)
            }, null, 2)
          ])) : f("", !0),
          t.title || t.subtitle ? (l(), r("div", la, [
            t.title ? (l(), r("h3", na, v(t.title), 1)) : f("", !0),
            t.subtitle ? (l(), r("p", ra, v(t.subtitle), 1)) : f("", !0)
          ])) : f("", !0)
        ]),
        k(e.$slots, "header-actions", {}, void 0, !0)
      ])) : f("", !0),
      s("div", oa, [
        t.loading ? (l(), r("div", ia, [...o[0] || (o[0] = [
          s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : f("", !0),
        k(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (l(), r("div", ca, [
        k(e.$slots, "footer", {}, void 0, !0)
      ])) : f("", !0)
    ], 2));
  }
}), ub = /* @__PURE__ */ L(ua, [["__scopeId", "data-v-49b3499e"]]), da = {
  key: 0,
  class: "stat-icon"
}, _a = { class: "stat-content" }, pa = { class: "stat-value" }, ma = { class: "stat-title" }, va = /* @__PURE__ */ b({
  __name: "TrxStatCard",
  props: {
    title: {},
    value: {},
    icon: {},
    trend: {},
    trendValue: {},
    color: {}
  },
  setup(t) {
    return (e, o) => (l(), r("div", {
      class: w(["trx-stat-card", `color-${t.color || "primary"}`])
    }, [
      t.icon ? (l(), r("div", da, [
        s("i", {
          class: w(t.icon)
        }, null, 2)
      ])) : f("", !0),
      s("div", _a, [
        s("div", pa, v(t.value), 1),
        s("div", ma, v(t.title), 1),
        t.trend && t.trendValue ? (l(), r("div", {
          key: 0,
          class: w(["stat-trend", `trend-${t.trend}`])
        }, [
          s("i", {
            class: w(t.trend === "up" ? "pi pi-arrow-up" : t.trend === "down" ? "pi pi-arrow-down" : "pi pi-minus")
          }, null, 2),
          s("span", null, v(t.trendValue), 1)
        ], 2)) : f("", !0)
      ])
    ], 2));
  }
}), db = /* @__PURE__ */ L(va, [["__scopeId", "data-v-5f985ae8"]]), fa = { class: "trx-datatable" }, ha = {
  key: 0,
  class: "table-header"
}, xa = { class: "p-input-icon-left" }, $a = { class: "empty-state" }, ba = /* @__PURE__ */ b({
  __name: "TrxDataTable",
  props: {
    value: {},
    loading: { type: Boolean },
    paginator: { type: Boolean },
    rows: {},
    totalRecords: {},
    lazy: { type: Boolean },
    globalFilter: { type: Boolean },
    emptyMessage: {},
    stripedRows: { type: Boolean },
    rowHover: { type: Boolean }
  },
  emits: ["page", "sort", "filter"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E({
      global: { value: null, matchMode: "contains" }
    }), n = I(() => o.rows || 10);
    return (c, u) => (l(), r("div", fa, [
      t.globalFilter ? (l(), r("div", ha, [
        s("span", xa, [
          u[4] || (u[4] = s("i", { class: "pi pi-search" }, null, -1)),
          O(T(at), {
            modelValue: a.value.global.value,
            "onUpdate:modelValue": u[0] || (u[0] = (_) => a.value.global.value = _),
            placeholder: "Buscar...",
            class: "search-input"
          }, null, 8, ["modelValue"])
        ]),
        k(c.$slots, "header-actions", {}, void 0, !0)
      ])) : f("", !0),
      O(T(St), {
        value: t.value,
        loading: t.loading,
        paginator: t.paginator,
        rows: n.value,
        totalRecords: t.totalRecords,
        lazy: t.lazy,
        filters: t.globalFilter ? a.value : void 0,
        globalFilterFields: t.globalFilter ? ["*"] : void 0,
        stripedRows: t.stripedRows !== !1,
        rowHover: t.rowHover !== !1,
        responsiveLayout: "scroll",
        onPage: u[1] || (u[1] = (_) => i("page", _)),
        onSort: u[2] || (u[2] = (_) => i("sort", _)),
        onFilter: u[3] || (u[3] = (_) => i("filter", _)),
        class: "trx-table"
      }, {
        empty: C(() => [
          s("div", $a, [
            u[5] || (u[5] = s("i", { class: "pi pi-inbox" }, null, -1)),
            s("p", null, v(t.emptyMessage || "Nenhum registro encontrado"), 1)
          ])
        ]),
        loading: C(() => [...u[6] || (u[6] = [
          s("div", { class: "loading-state" }, [
            s("i", { class: "pi pi-spin pi-spinner" }),
            s("p", null, "Carregando...")
          ], -1)
        ])]),
        default: C(() => [
          k(c.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["value", "loading", "paginator", "rows", "totalRecords", "lazy", "filters", "globalFilterFields", "stripedRows", "rowHover"])
    ]));
  }
}), _b = /* @__PURE__ */ L(ba, [["__scopeId", "data-v-f9d94f79"]]), ga = { class: "trx-status" }, ya = {
  key: 0,
  class: "status-label"
}, ka = /* @__PURE__ */ b({
  __name: "TrxStatus",
  props: {
    status: {},
    label: {},
    showLabel: { type: Boolean }
  },
  setup(t) {
    const e = {
      online: { color: "var(--trx-success-color, var(--success-color))", label: "Online" },
      offline: { color: "var(--trx-danger-color, var(--danger-color))", label: "Offline" },
      busy: { color: "var(--trx-warning-color, var(--warning-color))", label: "Ocupado" },
      away: { color: "var(--trx-info-color, var(--info-color))", label: "Ausente" },
      connecting: { color: "var(--trx-text-secondary, var(--text-secondary))", label: "Conectando..." }
    };
    return (o, i) => (l(), r("div", ga, [
      s("span", {
        class: w(["status-dot", { pulse: t.status === "connecting" }]),
        style: z({ backgroundColor: e[t.status].color })
      }, null, 6),
      t.showLabel !== !1 ? (l(), r("span", ya, v(t.label || e[t.status].label), 1)) : f("", !0)
    ]));
  }
}), pb = /* @__PURE__ */ L(ka, [["__scopeId", "data-v-0d5250d8"]]), wa = { class: "trx-layout__sidebar-header" }, Ta = { class: "trx-layout__logo-text" }, Ca = { class: "trx-layout__nav" }, Sa = { key: 0 }, Pa = ["onClick", "title"], Va = { key: 0 }, Ia = {
  key: 0,
  class: "trx-layout__section-header"
}, Aa = ["onClick", "title"], Ba = { key: 0 }, Ma = { class: "trx-layout__sidebar-footer" }, La = {
  key: 0,
  href: "https://trixsystems.io",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "trx-layout__footer-link"
}, Da = { class: "trx-layout__topbar" }, za = { class: "trx-layout__topbar-left" }, Ea = { class: "trx-layout__topbar-right" }, Ra = { class: "trx-layout__controls" }, Na = {
  key: 1,
  class: "trx-layout__divider"
}, qa = { class: "trx-layout__user" }, Fa = { class: "trx-layout__user-name" }, Oa = {
  id: "trx-main-content",
  class: "trx-layout__content",
  tabindex: "-1"
}, Ha = /* @__PURE__ */ b({
  __name: "TrxAppLayout",
  props: {
    appName: {},
    appIcon: { default: "pi pi-box" },
    menuItems: {},
    menuSections: {},
    userName: {},
    userRole: {},
    statusLabel: {},
    statusType: { default: "offline" },
    showStatus: { type: Boolean, default: !1 },
    onLogout: {}
  },
  emits: ["logout", "navigate"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = Pt(), n = Vt(), c = E(!1), u = E(!1), _ = I(() => o.userName ? o.userName.split(" ").map((S) => S[0]).join("").toUpperCase().slice(0, 2) : "U"), d = I(() => ({
      online: "trx-layout__status--online",
      offline: "trx-layout__status--offline",
      busy: "trx-layout__status--busy",
      paused: "trx-layout__status--paused"
    })[o.statusType || "offline"]);
    function p(S) {
      return S === "/" ? n.path === "/" || n.path === "" : n.path.startsWith(S);
    }
    G(() => {
      const S = localStorage.getItem("theme"), P = localStorage.getItem("sidebarCollapsed");
      S === "dark" && (u.value = !0, document.documentElement.classList.add("dark")), P === "true" && (c.value = !0);
    });
    const m = () => {
      u.value = !u.value, u.value ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, $ = () => {
      c.value = !c.value, localStorage.setItem("sidebarCollapsed", c.value.toString());
    }, g = (S) => {
      i("navigate", S), a.push(S);
    };
    async function M() {
      o.onLogout && await o.onLogout(), i("logout");
    }
    return (S, P) => (l(), r("div", {
      class: w(["trx-layout", { dark: u.value }])
    }, [
      P[5] || (P[5] = s("a", {
        href: "#trx-main-content",
        class: "trx-layout__skip-link"
      }, "Pular para o conteúdo", -1)),
      s("aside", {
        class: w(["trx-layout__sidebar", { "trx-layout__sidebar--collapsed": c.value }])
      }, [
        s("div", wa, [
          c.value ? (l(), r("div", {
            key: 1,
            class: "trx-layout__logo-mini",
            onClick: P[1] || (P[1] = (B) => g("/")),
            style: { cursor: "pointer" }
          }, [
            s("i", {
              class: w(t.appIcon)
            }, null, 2)
          ])) : (l(), r("div", {
            key: 0,
            class: "trx-layout__logo",
            onClick: P[0] || (P[0] = (B) => g("/")),
            style: { cursor: "pointer" }
          }, [
            s("i", {
              class: w(t.appIcon)
            }, null, 2),
            s("span", Ta, [
              P[2] || (P[2] = s("span", { class: "trx-layout__logo-trx" }, "TRX", -1)),
              N(" " + v(t.appName), 1)
            ])
          ]))
        ]),
        s("nav", Ca, [
          t.menuItems && t.menuItems.length ? (l(), r("ul", Sa, [
            (l(!0), r(D, null, y(t.menuItems, (B) => (l(), r("li", {
              key: B.path,
              class: w({ active: p(B.path) }),
              onClick: (R) => g(B.path),
              title: c.value ? B.label : ""
            }, [
              s("i", {
                class: w(B.icon)
              }, null, 2),
              c.value ? f("", !0) : (l(), r("span", Va, v(B.label), 1))
            ], 10, Pa))), 128))
          ])) : f("", !0),
          t.menuSections && t.menuSections.length ? (l(!0), r(D, { key: 1 }, y(t.menuSections, (B) => (l(), r("div", {
            key: B.key,
            class: "trx-layout__nav-section"
          }, [
            !c.value && B.items.length > 0 ? (l(), r("div", Ia, v(B.label), 1)) : f("", !0),
            s("ul", null, [
              (l(!0), r(D, null, y(B.items, (R) => (l(), r("li", {
                key: R.path,
                class: w({ active: p(R.path) }),
                onClick: (F) => g(R.path),
                title: c.value ? R.label : ""
              }, [
                s("i", {
                  class: w(R.icon)
                }, null, 2),
                c.value ? f("", !0) : (l(), r("span", Ba, v(R.label), 1))
              ], 10, Aa))), 128))
            ])
          ]))), 128)) : f("", !0)
        ]),
        s("div", Ma, [
          s("button", {
            class: "trx-layout__toggle-btn",
            onClick: $
          }, [
            s("i", {
              class: w(["pi", c.value ? "pi-angle-right" : "pi-angle-left"])
            }, null, 2)
          ]),
          c.value ? f("", !0) : (l(), r("a", La, " TRIX Systems "))
        ])
      ], 2),
      s("div", {
        class: w(["trx-layout__main", { "trx-layout__main--collapsed": c.value }])
      }, [
        s("header", Da, [
          s("div", za, [
            O(T(Z), {
              icon: "pi pi-bars",
              text: "",
              rounded: "",
              onClick: $,
              class: "trx-layout__mobile-menu"
            }),
            k(S.$slots, "topbar-left", {}, void 0, !0)
          ]),
          s("div", Ea, [
            s("div", Ra, [
              t.showStatus ? (l(), r("div", {
                key: 0,
                class: w(["trx-layout__status", d.value])
              }, [
                P[3] || (P[3] = s("span", { class: "trx-layout__status-dot" }, null, -1)),
                N(" " + v(t.statusLabel), 1)
              ], 2)) : f("", !0),
              t.showStatus ? (l(), r("span", Na)) : f("", !0),
              O(T(Z), {
                icon: u.value ? "pi pi-sun" : "pi pi-moon",
                onClick: m,
                rounded: "",
                text: "",
                size: "small",
                title: u.value ? "Modo Claro" : "Modo Escuro"
              }, null, 8, ["icon", "title"]),
              P[4] || (P[4] = s("span", { class: "trx-layout__divider" }, null, -1)),
              s("div", qa, [
                O(T(ht), {
                  label: _.value,
                  size: "small",
                  shape: "circle"
                }, null, 8, ["label"]),
                s("span", Fa, v(t.userName || "Usuario"), 1)
              ]),
              O(T(Z), {
                icon: "pi pi-sign-out",
                rounded: "",
                text: "",
                size: "small",
                onClick: M,
                title: "Sair"
              })
            ])
          ])
        ]),
        s("main", Oa, [
          k(S.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
}), mb = /* @__PURE__ */ L(Ha, [["__scopeId", "data-v-d15de8cb"]]), Ua = { class: "trx-not-found" }, Ga = { class: "trx-not-found__content" }, ja = { class: "trx-not-found__code" }, Wa = { class: "trx-not-found__title" }, Ka = { class: "trx-not-found__message" }, Ja = /* @__PURE__ */ b({
  __name: "TrxNotFound",
  props: {
    code: { default: "404" },
    title: { default: "Pagina nao encontrada" },
    message: { default: "A pagina que voce esta procurando nao existe ou foi movida." },
    buttonLabel: { default: "Voltar ao Inicio" },
    redirectTo: { default: "/" }
  },
  setup(t) {
    return (e, o) => {
      const i = gt("router-link");
      return l(), r("div", Ua, [
        s("div", Ga, [
          s("div", ja, v(t.code), 1),
          s("h1", Wa, v(t.title), 1),
          s("p", Ka, v(t.message), 1),
          O(i, { to: t.redirectTo }, {
            default: C(() => [
              O(T(Z), {
                label: t.buttonLabel,
                icon: "pi pi-home",
                size: "large"
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["to"])
        ])
      ]);
    };
  }
}), vb = /* @__PURE__ */ L(Ja, [["__scopeId", "data-v-603fc352"]]), Xa = { class: "trx-login-page" }, Ya = { class: "trx-login-page__settings" }, Qa = ["disabled"], Za = ["disabled"], tl = ["title"], el = { class: "trx-login-page__lang-label" }, sl = { class: "trx-login-page__container" }, al = { class: "trx-login-page__panel" }, ll = { class: "trx-login-page__card" }, nl = { class: "trx-login-page__header" }, rl = { class: "trx-login-page__icon" }, ol = { class: "trx-login-page__brand" }, il = {
  key: 0,
  class: "trx-login-page__tagline"
}, cl = { class: "trx-login-page__field" }, ul = {
  key: 0,
  class: "p-error"
}, dl = {
  key: 1,
  class: "p-error"
}, _l = { class: "trx-login-page__field" }, pl = {
  key: 0,
  class: "p-error"
}, ml = {
  key: 0,
  class: "trx-login-page__options"
}, vl = {
  key: 0,
  class: "trx-login-page__remember"
}, fl = {
  key: 0,
  class: "pi pi-sign-in"
}, hl = {
  key: 1,
  class: "trx-login-page__error"
}, xl = { class: "trx-login-page__footer" }, $l = /* @__PURE__ */ b({
  __name: "TrxLoginPage",
  props: {
    appName: {},
    appTagline: { default: "" },
    loading: { type: Boolean, default: !1 },
    error: {},
    showRememberMe: { type: Boolean, default: !0 },
    showForgotPassword: { type: Boolean, default: !0 },
    showFontControls: { type: Boolean, default: !0 },
    showLanguageToggle: { type: Boolean, default: !0 }
  },
  emits: ["submit", "forgotPassword"],
  setup(t, { emit: e }) {
    const o = e, i = yt({
      email: "",
      password: ""
    }), a = E(!1), n = E(!1), c = E(!1), u = E(localStorage.getItem("locale") || "pt-BR"), _ = I(() => u.value === "pt-BR" ? "PT" : "EN"), d = E(16), p = I(() => /.+@.+\..+/.test(i.email)), m = I(() => n.value && (!i.email || !p.value)), $ = I(() => n.value && !i.password), g = () => {
      c.value = !c.value, c.value ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, M = () => {
      const F = u.value === "pt-BR" ? "en" : "pt-BR";
      u.value = F, localStorage.setItem("locale", F);
    }, S = () => {
      d.value < 20 && (d.value += 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, P = () => {
      d.value > 12 && (d.value -= 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, B = () => {
      n.value = !0, !(!i.email || !i.password || !p.value) && o("submit", {
        email: i.email,
        password: i.password,
        rememberMe: a.value
      });
    }, R = () => {
      o("forgotPassword");
    };
    return G(() => {
      localStorage.getItem("theme") === "dark" && (document.documentElement.classList.add("dark"), c.value = !0);
      const q = localStorage.getItem("fontSize");
      q && (d.value = parseInt(q), document.documentElement.style.fontSize = `${d.value}px`);
    }), (F, q) => (l(), r("div", Xa, [
      s("div", Ya, [
        t.showFontControls ? (l(), r(D, { key: 0 }, [
          s("button", {
            onClick: P,
            title: "Diminuir fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value <= 12
          }, [...q[3] || (q[3] = [
            s("i", { class: "pi pi-minus" }, null, -1)
          ])], 8, Qa),
          s("button", {
            onClick: S,
            title: "Aumentar fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value >= 20
          }, [...q[4] || (q[4] = [
            s("i", { class: "pi pi-plus" }, null, -1)
          ])], 8, Za),
          q[5] || (q[5] = s("div", { class: "trx-login-page__settings-divider" }, null, -1))
        ], 64)) : f("", !0),
        s("button", {
          onClick: g,
          title: c.value ? "Modo claro" : "Modo escuro",
          class: "trx-login-page__settings-btn"
        }, [
          s("i", {
            class: w(c.value ? "pi pi-sun" : "pi pi-moon")
          }, null, 2)
        ], 8, tl),
        t.showLanguageToggle ? (l(), r(D, { key: 1 }, [
          q[7] || (q[7] = s("div", { class: "trx-login-page__settings-divider" }, null, -1)),
          s("button", {
            onClick: M,
            title: "Idioma",
            class: "trx-login-page__settings-btn trx-login-page__settings-btn--lang"
          }, [
            q[6] || (q[6] = s("i", { class: "pi pi-globe" }, null, -1)),
            s("span", el, v(_.value), 1)
          ])
        ], 64)) : f("", !0)
      ]),
      q[16] || (q[16] = s("div", { class: "trx-login-page__background" }, [
        s("div", { class: "trx-login-page__orb trx-login-page__orb--1" }),
        s("div", { class: "trx-login-page__orb trx-login-page__orb--2" }),
        s("div", { class: "trx-login-page__orb trx-login-page__orb--3" })
      ], -1)),
      s("div", sl, [
        s("div", al, [
          s("div", ll, [
            s("div", nl, [
              s("div", rl, [
                k(F.$slots, "icon", {}, () => [
                  q[8] || (q[8] = s("i", {
                    class: "pi pi-box",
                    style: { "font-size": "2.5rem", color: "white" }
                  }, null, -1))
                ], !0)
              ]),
              s("h1", ol, [
                q[9] || (q[9] = s("span", { class: "trx-login-page__brand-trx" }, "TRX", -1)),
                N(" " + v(t.appName), 1)
              ]),
              t.appTagline ? (l(), r("p", il, v(t.appTagline), 1)) : f("", !0),
              q[10] || (q[10] = s("h2", { class: "trx-login-page__title" }, "Acesse sua conta", -1)),
              q[11] || (q[11] = s("p", { class: "trx-login-page__subtitle" }, "Preencha seus dados para acessar", -1))
            ]),
            s("form", {
              class: "trx-login-page__form",
              onSubmit: j(B, ["prevent"])
            }, [
              s("div", cl, [
                q[12] || (q[12] = s("label", {
                  for: "email",
                  class: "trx-login-page__label"
                }, [
                  s("i", { class: "pi pi-envelope" }),
                  N(" Email ")
                ], -1)),
                O(T(at), {
                  id: "email",
                  modelValue: i.email,
                  "onUpdate:modelValue": q[0] || (q[0] = (W) => i.email = W),
                  type: "email",
                  placeholder: "seu@email.com",
                  class: w(["trx-login-page__input", { "p-invalid": m.value }])
                }, null, 8, ["modelValue", "class"]),
                n.value && !i.email ? (l(), r("small", ul, " Campo obrigatorio ")) : n.value && i.email && !p.value ? (l(), r("small", dl, " Email invalido ")) : f("", !0)
              ]),
              s("div", _l, [
                q[13] || (q[13] = s("label", {
                  for: "password",
                  class: "trx-login-page__label"
                }, [
                  s("i", { class: "pi pi-lock" }),
                  N(" Senha ")
                ], -1)),
                O(T(ot), {
                  id: "password",
                  modelValue: i.password,
                  "onUpdate:modelValue": q[1] || (q[1] = (W) => i.password = W),
                  feedback: !1,
                  toggleMask: "",
                  placeholder: "Digite sua senha",
                  class: w(["trx-login-page__input", { "p-invalid": $.value }]),
                  inputClass: "w-full"
                }, null, 8, ["modelValue", "class"]),
                $.value ? (l(), r("small", pl, " Campo obrigatorio ")) : f("", !0)
              ]),
              t.showRememberMe || t.showForgotPassword ? (l(), r("div", ml, [
                t.showRememberMe ? (l(), r("div", vl, [
                  O(T(xt), {
                    id: "remember-me",
                    modelValue: a.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (W) => a.value = W),
                    binary: !0
                  }, null, 8, ["modelValue"]),
                  q[14] || (q[14] = s("label", {
                    for: "remember-me",
                    class: "trx-login-page__remember-label"
                  }, " Lembrar de mim ", -1))
                ])) : f("", !0),
                t.showForgotPassword ? (l(), r("a", {
                  key: 1,
                  href: "#",
                  class: "trx-login-page__forgot",
                  onClick: j(R, ["prevent"])
                }, " Esqueceu sua senha? ")) : f("", !0)
              ])) : f("", !0),
              O(T(Z), {
                type: "submit",
                class: "trx-login-page__submit",
                loading: t.loading,
                disabled: t.loading
              }, {
                default: C(() => [
                  t.loading ? f("", !0) : (l(), r("i", fl)),
                  s("span", null, v(t.loading ? "Entrando..." : "Entrar"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              t.error ? (l(), r("div", hl, [
                O(T(it), {
                  severity: "error",
                  closable: !1
                }, {
                  default: C(() => [
                    N(v(t.error), 1)
                  ]),
                  _: 1
                })
              ])) : f("", !0)
            ], 32),
            s("div", xl, [
              k(F.$slots, "footer", {}, () => [
                q[15] || (q[15] = s("p", { class: "trx-login-page__copyright" }, [
                  N(" Powered by "),
                  s("a", {
                    href: "https://trixsystems.io",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "trx-login-page__link"
                  }, "TRIX Systems")
                ], -1))
              ], !0)
            ])
          ])
        ])
      ])
    ]));
  }
}), fb = /* @__PURE__ */ L($l, [["__scopeId", "data-v-1e9e3daf"]]), bl = ["aria-label"], gl = { class: "trx-banner__content" }, yl = { class: "trx-banner__body" }, kl = {
  key: 0,
  class: "trx-banner__title"
}, wl = {
  key: 1,
  class: "trx-banner__message"
}, Tl = /* @__PURE__ */ b({
  __name: "TrxBanner",
  props: {
    type: { default: "info" },
    title: {},
    dismissible: { type: Boolean, default: !1 },
    sticky: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      error: "pi pi-times-circle",
      neutral: "pi pi-bell"
    }, n = o.icon ?? a[o.type];
    return (c, u) => (l(), r("div", {
      class: w([
        "trx-banner",
        `trx-banner--${t.type}`,
        { "trx-banner--sticky": t.sticky }
      ]),
      role: "banner",
      "aria-label": t.title
    }, [
      s("div", gl, [
        s("i", {
          class: w(["trx-banner__icon", T(n)]),
          "aria-hidden": "true"
        }, null, 2),
        s("div", yl, [
          t.title ? (l(), r("strong", kl, v(t.title), 1)) : f("", !0),
          c.$slots.default ? (l(), r("span", wl, [
            k(c.$slots, "default", {}, void 0, !0)
          ])) : f("", !0)
        ])
      ]),
      t.dismissible ? (l(), r("button", {
        key: 0,
        type: "button",
        class: "trx-banner__close",
        "aria-label": "Fechar aviso",
        onClick: u[0] || (u[0] = (_) => i("dismiss"))
      }, [...u[1] || (u[1] = [
        s("i", {
          class: "pi pi-times",
          "aria-hidden": "true"
        }, null, -1)
      ])])) : f("", !0)
    ], 10, bl));
  }
}), hb = /* @__PURE__ */ L(Tl, [["__scopeId", "data-v-3e631643"]]), Cl = {
  key: 0,
  class: "trx-copy__value"
}, Sl = ["aria-label", "title"], Pl = { key: 0 }, Vl = { key: 1 }, Il = /* @__PURE__ */ b({
  __name: "TrxCopyButton",
  props: {
    value: {},
    label: {},
    showValue: { type: Boolean },
    feedbackDuration: { default: 1500 },
    size: { default: "normal" }
  },
  emits: ["copy"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(o.value), a.value = !0, i("copy", o.value), setTimeout(() => {
          a.value = !1;
        }, o.feedbackDuration);
      } catch {
        const c = document.createElement("textarea");
        c.value = o.value, c.style.position = "fixed", c.style.opacity = "0", document.body.appendChild(c), c.select(), document.execCommand("copy"), document.body.removeChild(c), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, o.feedbackDuration);
      }
    }
    return (c, u) => (l(), r("div", {
      class: w(["trx-copy", `trx-copy--${t.size}`])
    }, [
      t.showValue ? (l(), r("span", Cl, v(t.value), 1)) : f("", !0),
      s("button", {
        type: "button",
        class: w(["trx-copy__btn", { "trx-copy__btn--copied": a.value }]),
        "aria-label": a.value ? "Copiado!" : `Copiar ${t.label ?? t.value}`,
        title: a.value ? "Copiado!" : "Copiar",
        onClick: n
      }, [
        s("i", {
          class: w(a.value ? "pi pi-check" : "pi pi-copy"),
          "aria-hidden": "true"
        }, null, 2),
        t.label && !t.showValue ? (l(), r("span", Pl, v(a.value ? "Copiado!" : t.label), 1)) : !t.label && !t.showValue ? (l(), r("span", Vl, v(a.value ? "Copiado!" : "Copiar"), 1)) : f("", !0)
      ], 10, Sl)
    ], 2));
  }
}), xb = /* @__PURE__ */ L(Il, [["__scopeId", "data-v-e4ae9d59"]]), Al = {
  key: 0,
  class: "trx-agent-badge"
}, Bl = { class: "trx-agent-label" }, Ml = ["aria-expanded", "aria-label"], Ll = { class: "trx-agent-label" }, Dl = {
  key: 0,
  class: "trx-agent-menu",
  role: "listbox",
  "aria-label": "Selecionar status"
}, zl = ["aria-selected", "onClick"], El = /* @__PURE__ */ b({
  __name: "TrxAgentStatus",
  props: {
    modelValue: { default: "offline" },
    readonly: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    options: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const o = [
      { value: "online", label: "Online", color: "#10b981", icon: "pi pi-circle-fill" },
      { value: "busy", label: "Ocupado", color: "#ef4444", icon: "pi pi-phone" },
      { value: "paused", label: "Pausa", color: "#f59e0b", icon: "pi pi-pause-circle" },
      { value: "offline", label: "Offline", color: "#94a3b8", icon: "pi pi-circle" }
    ], i = t, a = e, n = E(!1), c = I(() => i.options ?? o), u = I(() => c.value.find((d) => d.value === i.modelValue) ?? o[3]);
    function _(d) {
      n.value = !1, a("update:modelValue", d.value), a("change", d.value);
    }
    return (d, p) => t.readonly || t.compact ? (l(), r("div", Al, [
      s("span", {
        class: "trx-agent-dot",
        style: z({ background: u.value.color })
      }, null, 4),
      s("span", Bl, v(u.value.label), 1)
    ])) : (l(), r("div", {
      key: 1,
      class: "trx-agent-wrap",
      onKeydown: p[2] || (p[2] = pt((m) => n.value = !1, ["escape"]))
    }, [
      s("button", {
        type: "button",
        class: "trx-agent-trigger",
        "aria-expanded": n.value,
        "aria-haspopup": "listbox",
        "aria-label": `Status atual: ${u.value.label}. Clique para alterar.`,
        onClick: p[0] || (p[0] = (m) => n.value = !n.value)
      }, [
        s("span", {
          class: "trx-agent-dot",
          style: z({ background: u.value.color })
        }, null, 4),
        s("span", Ll, v(u.value.label), 1),
        s("i", {
          class: w(["pi pi-chevron-down trx-agent-chevron", { "trx-agent-chevron--open": n.value }]),
          "aria-hidden": "true"
        }, null, 2)
      ], 8, Ml),
      O(U, { name: "trx-agent" }, {
        default: C(() => [
          n.value ? (l(), r("ul", Dl, [
            (l(!0), r(D, null, y(c.value, (m) => (l(), r("li", {
              key: m.value,
              role: "option",
              "aria-selected": m.value === t.modelValue,
              class: w(["trx-agent-option", { "trx-agent-option--active": m.value === t.modelValue }]),
              onClick: ($) => _(m)
            }, [
              s("span", {
                class: "trx-agent-dot",
                style: z({ background: m.color })
              }, null, 4),
              s("i", {
                class: w(m.icon),
                style: z({ color: m.color }),
                "aria-hidden": "true"
              }, null, 6),
              s("span", null, v(m.label), 1)
            ], 10, zl))), 128))
          ])) : f("", !0)
        ]),
        _: 1
      }),
      n.value ? (l(), r("div", {
        key: 0,
        class: "trx-agent-backdrop",
        onClick: p[1] || (p[1] = (m) => n.value = !1)
      })) : f("", !0)
    ], 32));
  }
}), $b = /* @__PURE__ */ L(El, [["__scopeId", "data-v-9a90548c"]]), Rl = {
  class: "trx-player",
  role: "region",
  "aria-label": "Player de áudio"
}, Nl = ["src"], ql = {
  key: 0,
  class: "trx-player__error"
}, Fl = ["aria-label", "disabled"], Ol = { class: "trx-player__timeline" }, Hl = { class: "trx-player__time" }, Ul = ["aria-valuemax", "aria-valuenow", "aria-label"], Gl = { class: "trx-player__track" }, jl = { class: "trx-player__time trx-player__time--total" }, Wl = { class: "trx-player__speed-wrap" }, Kl = ["aria-label"], Jl = {
  key: 0,
  class: "trx-player__speed-menu",
  role: "listbox"
}, Xl = ["aria-selected", "onClick"], Yl = /* @__PURE__ */ b({
  __name: "TrxAudioPlayer",
  props: {
    src: {},
    duration: {},
    downloadable: { type: Boolean, default: !0 },
    filename: {},
    speeds: { default: () => [0.5, 0.75, 1, 1.25, 1.5, 2] }
  },
  setup(t) {
    const e = t, o = E(null), i = E(!1), a = E(0), n = E(e.duration ?? 0), c = E(1), u = E(!1), _ = E(!1), d = E(!1), p = I(
      () => n.value > 0 ? a.value / n.value * 100 : 0
    );
    function m(H) {
      const K = Math.floor(H), J = Math.floor(K / 60), tt = K % 60;
      return `${J}:${tt.toString().padStart(2, "0")}`;
    }
    function $() {
      o.value && (i.value ? o.value.pause() : o.value.play());
    }
    function g(H) {
      if (!o.value || !n.value) return;
      const J = H.currentTarget.getBoundingClientRect(), tt = Math.max(0, Math.min(1, (H.clientX - J.left) / J.width));
      o.value.currentTime = tt * n.value;
    }
    function M(H) {
      c.value = H, d.value = !1, o.value && (o.value.playbackRate = H);
    }
    function S() {
      i.value = !0;
    }
    function P() {
      i.value = !1;
    }
    function B() {
      i.value = !1, a.value = 0;
    }
    function R() {
      var H;
      a.value = ((H = o.value) == null ? void 0 : H.currentTime) ?? 0;
    }
    function F() {
      var H;
      n.value = ((H = o.value) == null ? void 0 : H.duration) ?? e.duration ?? 0, u.value = !1;
    }
    function q() {
      _.value = !0, u.value = !1;
    }
    function W() {
      u.value = !0;
    }
    function ut() {
      u.value = !1;
    }
    function $t() {
      const H = document.createElement("a");
      H.href = e.src, H.download = e.filename ?? e.src.split("/").pop() ?? "gravacao.mp3", H.click();
    }
    return Q(c, (H) => {
      o.value && (o.value.playbackRate = H);
    }), Y(() => {
      var H;
      (H = o.value) == null || H.pause();
    }), (H, K) => (l(), r("div", Rl, [
      s("audio", {
        ref_key: "audioRef",
        ref: o,
        src: t.src,
        preload: "metadata",
        onPlay: S,
        onPause: P,
        onEnded: B,
        onTimeupdate: R,
        onLoadedmetadata: F,
        onError: q,
        onWaiting: W,
        onCanplay: ut
      }, null, 40, Nl),
      _.value ? (l(), r("div", ql, [...K[2] || (K[2] = [
        s("i", {
          class: "pi pi-exclamation-triangle",
          "aria-hidden": "true"
        }, null, -1),
        N(" Não foi possível carregar o áudio. ", -1)
      ])])) : (l(), r(D, { key: 1 }, [
        s("button", {
          type: "button",
          class: "trx-player__play",
          "aria-label": i.value ? "Pausar" : "Reproduzir",
          disabled: u.value,
          onClick: $
        }, [
          s("i", {
            class: w(u.value ? "pi pi-spin pi-spinner" : i.value ? "pi pi-pause" : "pi pi-play"),
            "aria-hidden": "true"
          }, null, 2)
        ], 8, Fl),
        s("div", Ol, [
          s("span", Hl, v(m(a.value)), 1),
          s("div", {
            class: "trx-player__bar",
            role: "slider",
            "aria-valuemin": 0,
            "aria-valuemax": n.value,
            "aria-valuenow": a.value,
            "aria-label": `Posição: ${m(a.value)} de ${m(n.value)}`,
            tabindex: "0",
            onClick: g
          }, [
            s("div", Gl, [
              s("div", {
                class: "trx-player__fill",
                style: z({ width: `${p.value}%` })
              }, null, 4),
              s("div", {
                class: "trx-player__thumb",
                style: z({ left: `${p.value}%` })
              }, null, 4)
            ])
          ], 8, Ul),
          s("span", jl, v(m(n.value)), 1)
        ]),
        s("div", Wl, [
          s("button", {
            type: "button",
            class: "trx-player__speed-btn",
            "aria-label": `Velocidade: ${c.value}x`,
            onClick: K[0] || (K[0] = (J) => d.value = !d.value)
          }, v(c.value) + "x ", 9, Kl),
          d.value ? (l(), r("ul", Jl, [
            (l(!0), r(D, null, y(t.speeds, (J) => (l(), r("li", {
              key: J,
              class: w(["trx-player__speed-opt", { "trx-player__speed-opt--active": J === c.value }]),
              role: "option",
              "aria-selected": J === c.value,
              onClick: (tt) => M(J)
            }, v(J) + "x ", 11, Xl))), 128))
          ])) : f("", !0),
          d.value ? (l(), r("div", {
            key: 1,
            class: "trx-player__backdrop",
            onClick: K[1] || (K[1] = (J) => d.value = !1)
          })) : f("", !0)
        ]),
        t.downloadable ? (l(), r("button", {
          key: 0,
          type: "button",
          class: "trx-player__download",
          "aria-label": "Baixar gravação",
          title: "Baixar gravação",
          onClick: $t
        }, [...K[3] || (K[3] = [
          s("i", {
            class: "pi pi-download",
            "aria-hidden": "true"
          }, null, -1)
        ])])) : f("", !0)
      ], 64))
    ]));
  }
}), bb = /* @__PURE__ */ L(Yl, [["__scopeId", "data-v-2ae62dee"]]), Ql = { class: "trx-alert__body" }, Zl = {
  key: 0,
  class: "trx-alert__title"
}, tn = { class: "trx-alert__content" }, en = /* @__PURE__ */ b({
  __name: "TrxAlert",
  props: {
    type: { default: "info" },
    title: {},
    dismissible: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      error: "pi pi-times-circle"
    }, n = o.icon ?? a[o.type];
    return (c, u) => (l(), r("div", {
      class: w(["trx-alert", `trx-alert--${t.type}`]),
      role: "alert"
    }, [
      s("i", {
        class: w(["trx-alert__icon", T(n)]),
        "aria-hidden": "true"
      }, null, 2),
      s("div", Ql, [
        t.title ? (l(), r("p", Zl, v(t.title), 1)) : f("", !0),
        s("div", tn, [
          k(c.$slots, "default", {}, void 0, !0)
        ])
      ]),
      t.dismissible ? (l(), r("button", {
        key: 0,
        class: "trx-alert__close",
        type: "button",
        "aria-label": "Fechar",
        onClick: u[0] || (u[0] = (_) => i("dismiss"))
      }, [...u[1] || (u[1] = [
        s("i", {
          class: "pi pi-times",
          "aria-hidden": "true"
        }, null, -1)
      ])])) : f("", !0)
    ], 2));
  }
}), gb = /* @__PURE__ */ L(en, [["__scopeId", "data-v-01863497"]]), sn = ["title", "aria-label"], an = ["src", "alt"], ln = {
  key: 1,
  class: "trx-avatar__initials"
}, nn = ["aria-label"], rn = /* @__PURE__ */ b({
  __name: "TrxUserAvatar",
  props: {
    name: {},
    src: {},
    status: {},
    size: { default: "md" },
    color: {}
  },
  setup(t) {
    const e = t, o = I(() => e.name ? e.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?"), i = {
      sm: "1.75rem",
      md: "2.25rem",
      lg: "3rem",
      xl: "4rem"
    }, a = {
      sm: "0.625rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.375rem"
    };
    return (n, c) => (l(), r("div", {
      class: w(["trx-avatar", `trx-avatar--${t.size}`]),
      style: z({
        width: i[t.size],
        height: i[t.size],
        fontSize: a[t.size],
        backgroundColor: t.src ? void 0 : t.color || "var(--trx-primary-soft)"
      }),
      title: t.name,
      role: "img",
      "aria-label": t.name ?? "Avatar"
    }, [
      t.src ? (l(), r("img", {
        key: 0,
        src: t.src,
        alt: t.name ?? "Avatar",
        class: "trx-avatar__img"
      }, null, 8, an)) : (l(), r("span", ln, v(o.value), 1)),
      t.status ? (l(), r("span", {
        key: 2,
        class: w(["trx-avatar__status", `trx-avatar__status--${t.status}`]),
        "aria-label": t.status
      }, null, 10, nn)) : f("", !0)
    ], 14, sn));
  }
}), yb = /* @__PURE__ */ L(rn, [["__scopeId", "data-v-ad53c350"]]), on = { class: "trx-kpi" }, cn = { class: "trx-kpi__header" }, un = { class: "trx-kpi__title" }, dn = {
  key: 0,
  class: "trx-kpi__skeleton"
}, _n = { class: "trx-kpi__value" }, pn = /* @__PURE__ */ b({
  __name: "TrxKPICard",
  props: {
    title: {},
    value: {},
    trend: {},
    trendType: { default: "neutral" },
    icon: {},
    loading: { type: Boolean },
    color: { default: "primary" }
  },
  setup(t) {
    const e = t, o = I(() => e.trendType === "up" ? "pi pi-arrow-up" : e.trendType === "down" ? "pi pi-arrow-down" : "pi pi-minus"), i = I(() => e.trendType === "up" ? "trx-kpi__trend--up" : e.trendType === "down" ? "trx-kpi__trend--down" : "trx-kpi__trend--neutral");
    return (a, n) => (l(), r("div", on, [
      s("div", cn, [
        s("span", un, v(t.title), 1),
        t.icon ? (l(), r("div", {
          key: 0,
          class: w(["trx-kpi__icon", `trx-kpi__icon--${t.color}`])
        }, [
          s("i", {
            class: w(t.icon),
            "aria-hidden": "true"
          }, null, 2)
        ], 2)) : f("", !0)
      ]),
      t.loading ? (l(), r("div", dn, [...n[0] || (n[0] = [
        s("div", { class: "trx-kpi__skeleton-value" }, null, -1),
        s("div", { class: "trx-kpi__skeleton-trend" }, null, -1)
      ])])) : (l(), r(D, { key: 1 }, [
        s("div", _n, v(t.value ?? "—"), 1),
        t.trend ? (l(), r("div", {
          key: 0,
          class: w(["trx-kpi__trend", i.value])
        }, [
          s("i", {
            class: w(o.value),
            "aria-hidden": "true"
          }, null, 2),
          s("span", null, v(t.trend), 1)
        ], 2)) : f("", !0)
      ], 64)),
      k(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), kb = /* @__PURE__ */ L(pn, [["__scopeId", "data-v-a42946dc"]]), mn = { class: "trx-search" }, vn = ["aria-label"], fn = { class: "trx-search__trigger-text" }, hn = { class: "trx-search__modal" }, xn = { class: "trx-search__input-wrap" }, $n = ["placeholder", "value"], bn = { class: "trx-search__results" }, gn = {
  key: 0,
  class: "trx-search__hint"
}, yn = /* @__PURE__ */ b({
  __name: "TrxSearchBar",
  props: {
    placeholder: {},
    disableShortcut: { type: Boolean }
  },
  emits: ["search", "open", "close"],
  setup(t, { expose: e, emit: o }) {
    const i = o, a = E(!1), n = E(""), c = E(null), u = async () => {
      var $;
      a.value = !0, i("open"), await lt(), ($ = c.value) == null || $.focus();
    }, _ = () => {
      a.value = !1, n.value = "", i("close");
    }, d = ($) => {
      n.value = $.target.value, i("search", n.value);
    }, p = ($) => {
      $.key === "Escape" && _();
    }, m = ($) => {
      ($.metaKey || $.ctrlKey) && $.key === "k" && ($.preventDefault(), a.value ? _() : u());
    };
    return G(() => {
      window.addEventListener("keydown", m);
    }), mt(() => {
      window.removeEventListener("keydown", m);
    }), e({ open: u, close: _ }), ($, g) => (l(), r("div", mn, [
      s("button", {
        type: "button",
        class: "trx-search__trigger",
        onClick: u,
        "aria-label": t.placeholder ?? "Buscar",
        "aria-haspopup": "dialog"
      }, [
        g[1] || (g[1] = s("i", {
          class: "pi pi-search",
          "aria-hidden": "true"
        }, null, -1)),
        s("span", fn, v(t.placeholder ?? "Buscar..."), 1),
        g[2] || (g[2] = s("kbd", { class: "trx-search__kbd" }, "⌘K", -1))
      ], 8, vn),
      O(U, { name: "trx-search" }, {
        default: C(() => [
          a.value ? (l(), r("div", {
            key: 0,
            class: "trx-search__overlay",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Busca",
            onClick: j(_, ["self"])
          }, [
            s("div", hn, [
              s("div", xn, [
                g[4] || (g[4] = s("i", {
                  class: "pi pi-search trx-search__input-icon",
                  "aria-hidden": "true"
                }, null, -1)),
                s("input", {
                  ref_key: "inputRef",
                  ref: c,
                  type: "search",
                  class: "trx-search__input",
                  placeholder: t.placeholder ?? "Buscar...",
                  value: n.value,
                  onInput: d,
                  onKeydown: p,
                  autocomplete: "off"
                }, null, 40, $n),
                n.value ? (l(), r("button", {
                  key: 0,
                  type: "button",
                  class: "trx-search__clear",
                  "aria-label": "Limpar",
                  onClick: g[0] || (g[0] = (M) => {
                    n.value = "", i("search", "");
                  })
                }, [...g[3] || (g[3] = [
                  s("i", {
                    class: "pi pi-times",
                    "aria-hidden": "true"
                  }, null, -1)
                ])])) : f("", !0),
                s("kbd", {
                  class: "trx-search__esc",
                  onClick: _
                }, "Esc")
              ]),
              s("div", bn, [
                k($.$slots, "default", { query: n.value }, () => [
                  n.value ? f("", !0) : (l(), r("p", gn, [...g[5] || (g[5] = [
                    s("i", {
                      class: "pi pi-info-circle",
                      "aria-hidden": "true"
                    }, null, -1),
                    N(" Digite para buscar ", -1)
                  ])]))
                ], !0)
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), wb = /* @__PURE__ */ L(yn, [["__scopeId", "data-v-4e83a1ba"]]), kn = {
  key: 0,
  class: "trx-filter-bar"
}, wn = {
  key: 0,
  class: "trx-filter-bar__inputs"
}, Tn = {
  key: 1,
  class: "trx-filter-bar__chips",
  role: "list",
  "aria-label": "Filtros ativos"
}, Cn = { class: "trx-filter-bar__chip-label" }, Sn = { class: "trx-filter-bar__chip-value" }, Pn = ["aria-label", "onClick"], Vn = /* @__PURE__ */ b({
  __name: "TrxFilterBar",
  props: {
    filters: {},
    clearLabel: {}
  },
  emits: ["remove", "clear"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => (o.filters ?? []).length > 0), n = (c) => c.displayValue ?? String(c.value);
    return (c, u) => a.value || c.$slots.default ? (l(), r("div", kn, [
      c.$slots.default ? (l(), r("div", wn, [
        k(c.$slots, "default", {}, void 0, !0)
      ])) : f("", !0),
      a.value ? (l(), r("div", Tn, [
        u[3] || (u[3] = s("span", { class: "trx-filter-bar__label" }, "Filtros:", -1)),
        (l(!0), r(D, null, y(t.filters, (_) => (l(), r("span", {
          key: _.key,
          class: "trx-filter-bar__chip",
          role: "listitem"
        }, [
          s("span", Cn, v(_.label) + ":", 1),
          s("span", Sn, v(n(_)), 1),
          s("button", {
            type: "button",
            class: "trx-filter-bar__chip-remove",
            "aria-label": `Remover filtro ${_.label}`,
            onClick: (d) => i("remove", _.key)
          }, [...u[1] || (u[1] = [
            s("i", {
              class: "pi pi-times",
              "aria-hidden": "true"
            }, null, -1)
          ])], 8, Pn)
        ]))), 128)),
        s("button", {
          type: "button",
          class: "trx-filter-bar__clear",
          onClick: u[0] || (u[0] = (_) => i("clear"))
        }, [
          u[2] || (u[2] = s("i", {
            class: "pi pi-filter-slash",
            "aria-hidden": "true"
          }, null, -1)),
          N(" " + v(t.clearLabel ?? "Limpar filtros"), 1)
        ])
      ])) : f("", !0)
    ])) : f("", !0);
  }
}), Tb = /* @__PURE__ */ L(Vn, [["__scopeId", "data-v-227ccd1b"]]), In = {
  key: 0,
  class: "trx-dta__inline"
}, An = ["disabled", "aria-label", "title", "onClick"], Bn = ["aria-expanded"], Mn = {
  key: 0,
  class: "trx-dta__dropdown",
  role: "menu"
}, Ln = {
  key: 0,
  class: "trx-dta__separator"
}, Dn = ["disabled", "onClick"], zn = /* @__PURE__ */ b({
  __name: "TrxDataTableActions",
  props: {
    row: {},
    actions: {},
    variant: {}
  },
  setup(t) {
    const e = t, o = E(!1), i = E(null), a = I(
      () => e.actions.filter((m) => !m.visible || m.visible(e.row))
    ), n = I(
      () => e.variant ?? (a.value.length > 2 ? "menu" : "inline")
    ), c = (m) => {
      var $;
      ($ = m.disabled) != null && $.call(m, e.row) || (m.action(e.row), o.value = !1);
    }, u = E(null), _ = () => {
      o.value = !o.value;
    }, d = () => {
      o.value = !1;
    }, p = (m) => {
      u.value && !u.value.contains(m.target) && d();
    };
    return G(() => document.addEventListener("click", p, !0)), Y(() => document.removeEventListener("click", p, !0)), (m, $) => (l(), r("div", {
      class: "trx-dta",
      onKeydown: pt(d, ["escape"])
    }, [
      n.value === "inline" ? (l(), r("div", In, [
        (l(!0), r(D, null, y(a.value, (g) => {
          var M;
          return l(), r("button", {
            key: g.label,
            type: "button",
            class: w(["trx-dta__btn", `trx-dta__btn--${g.severity ?? "secondary"}`]),
            disabled: (M = g.disabled) == null ? void 0 : M.call(g, t.row),
            "aria-label": g.label,
            title: g.label,
            onClick: (S) => c(g)
          }, [
            g.icon ? (l(), r("i", {
              key: 0,
              class: w(g.icon),
              "aria-hidden": "true"
            }, null, 2)) : f("", !0),
            s("span", null, v(g.label), 1)
          ], 10, An);
        }), 128))
      ])) : (l(), r("div", {
        key: 1,
        ref_key: "menuWrapRef",
        ref: u,
        class: "trx-dta__menu-wrap"
      }, [
        s("button", {
          ref_key: "triggerRef",
          ref: i,
          type: "button",
          class: "trx-dta__trigger",
          "aria-expanded": o.value,
          "aria-haspopup": "menu",
          "aria-label": "Ações",
          onClick: _
        }, [...$[0] || ($[0] = [
          s("i", {
            class: "pi pi-ellipsis-v",
            "aria-hidden": "true"
          }, null, -1)
        ])], 8, Bn),
        O(U, { name: "trx-dta" }, {
          default: C(() => [
            o.value ? (l(), r("div", Mn, [
              (l(!0), r(D, null, y(a.value, (g) => {
                var M, S;
                return l(), r(D, {
                  key: g.label
                }, [
                  g.separator ? (l(), r("hr", Ln)) : f("", !0),
                  s("button", {
                    type: "button",
                    class: w([
                      "trx-dta__item",
                      `trx-dta__item--${g.severity ?? "secondary"}`,
                      { "trx-dta__item--disabled": (M = g.disabled) == null ? void 0 : M.call(g, t.row) }
                    ]),
                    disabled: (S = g.disabled) == null ? void 0 : S.call(g, t.row),
                    role: "menuitem",
                    onClick: (P) => c(g)
                  }, [
                    g.icon ? (l(), r("i", {
                      key: 0,
                      class: w(g.icon),
                      "aria-hidden": "true"
                    }, null, 2)) : f("", !0),
                    N(" " + v(g.label), 1)
                  ], 10, Dn)
                ], 64);
              }), 128))
            ])) : f("", !0)
          ]),
          _: 1
        })
      ], 512))
    ], 32));
  }
}), Cb = /* @__PURE__ */ L(zn, [["__scopeId", "data-v-fe60232d"]]), En = {
  class: "trx-error",
  role: "main"
}, Rn = { class: "trx-error__inner" }, Nn = { class: "trx-error__icon-wrap" }, qn = { class: "trx-error__code" }, Fn = { class: "trx-error__title" }, On = { class: "trx-error__desc" }, Hn = {
  key: 0,
  class: "trx-error__content"
}, Un = { class: "trx-error__actions" }, Gn = /* @__PURE__ */ b({
  __name: "TrxErrorPage",
  props: {
    code: { default: 500 },
    title: {},
    description: {},
    showBack: { type: Boolean, default: !0 },
    showRetry: { type: Boolean, default: !0 }
  },
  emits: ["back", "retry"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => ({
      500: {
        icon: "pi pi-server",
        title: "Erro Interno do Servidor",
        description: "Algo deu errado no servidor. Nossa equipe já foi notificada."
      },
      403: {
        icon: "pi pi-lock",
        title: "Acesso Negado",
        description: "Você não tem permissão para acessar este recurso."
      },
      503: {
        icon: "pi pi-wrench",
        title: "Em Manutenção",
        description: "O sistema está temporariamente indisponível. Tente novamente em alguns minutos."
      },
      404: {
        icon: "pi pi-map-marker",
        title: "Página Não Encontrada",
        description: "A página que você está procurando não existe ou foi movida."
      }
    })[o.code]);
    return (n, c) => (l(), r("div", En, [
      s("div", Rn, [
        s("div", Nn, [
          s("i", {
            class: w(["trx-error__icon", a.value.icon]),
            "aria-hidden": "true"
          }, null, 2),
          s("span", qn, v(t.code), 1)
        ]),
        s("h1", Fn, v(t.title ?? a.value.title), 1),
        s("p", On, v(t.description ?? a.value.description), 1),
        n.$slots.default ? (l(), r("div", Hn, [
          k(n.$slots, "default", {}, void 0, !0)
        ])) : f("", !0),
        s("div", Un, [
          t.showBack ? (l(), r("button", {
            key: 0,
            type: "button",
            class: "trx-error__btn trx-error__btn--secondary",
            onClick: c[0] || (c[0] = (u) => i("back"))
          }, [...c[2] || (c[2] = [
            s("i", {
              class: "pi pi-arrow-left",
              "aria-hidden": "true"
            }, null, -1),
            N(" Voltar ", -1)
          ])])) : f("", !0),
          t.showRetry ? (l(), r("button", {
            key: 1,
            type: "button",
            class: "trx-error__btn trx-error__btn--primary",
            onClick: c[1] || (c[1] = (u) => i("retry"))
          }, [...c[3] || (c[3] = [
            s("i", {
              class: "pi pi-refresh",
              "aria-hidden": "true"
            }, null, -1),
            N(" Tentar novamente ", -1)
          ])])) : f("", !0)
        ])
      ])
    ]));
  }
}), Sb = /* @__PURE__ */ L(Gn, [["__scopeId", "data-v-342a5b45"]]), jn = /* @__PURE__ */ b({
  __name: "TrxText",
  props: {
    variant: { default: "body" },
    as: {},
    muted: { type: Boolean },
    bold: { type: Boolean },
    truncate: { type: Boolean },
    noMargin: { type: Boolean }
  },
  setup(t) {
    const e = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      body: "p",
      "body-sm": "p",
      "body-lg": "p",
      caption: "small",
      label: "label",
      overline: "span",
      code: "code"
    }, o = t, i = o.as ?? e[o.variant];
    return (a, n) => (l(), V(kt(T(i)), {
      class: w([
        "trx-text",
        `trx-text--${t.variant}`,
        {
          "trx-text--muted": t.muted,
          "trx-text--bold": t.bold,
          "trx-text--truncate": t.truncate,
          "trx-text--no-margin": t.noMargin
        }
      ])
    }, {
      default: C(() => [
        k(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pb = /* @__PURE__ */ L(jn, [["__scopeId", "data-v-9bfe5d38"]]), Wn = { class: "trx-call-card__left" }, Kn = { class: "trx-call-card__info" }, Jn = { class: "trx-call-card__caller" }, Xn = { class: "trx-call-card__name" }, Yn = {
  key: 0,
  class: "trx-call-card__number"
}, Qn = { class: "trx-call-card__meta" }, Zn = {
  key: 0,
  class: "trx-call-card__duration"
}, tr = {
  key: 1,
  class: "trx-call-card__queue"
}, er = {
  key: 0,
  class: "trx-call-card__agent"
}, sr = { class: "trx-call-card__actions" }, ar = /* @__PURE__ */ b({
  __name: "TrxCallCard",
  props: {
    callerId: {},
    callerName: {},
    duration: {},
    status: {},
    direction: { default: "inbound" },
    queue: {},
    agent: {}
  },
  emits: ["answer", "hangup", "hold", "transfer"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = {
      ringing: { label: "Chamando", color: "var(--trx-info-color)", icon: "pi pi-phone" },
      active: { label: "Em chamada", color: "var(--trx-success-color)", icon: "pi pi-phone" },
      hold: { label: "Em espera", color: "var(--trx-warning-color)", icon: "pi pi-pause" },
      ended: { label: "Encerrada", color: "var(--trx-text-secondary)", icon: "pi pi-phone-slash" },
      missed: { label: "Perdida", color: "var(--trx-danger-color)", icon: "pi pi-times" }
    }, n = I(() => a[o.status]);
    function c(u) {
      if (!u) return "00:00";
      const _ = Math.floor(u / 60).toString().padStart(2, "0"), d = (u % 60).toString().padStart(2, "0");
      return `${_}:${d}`;
    }
    return (u, _) => (l(), r("div", {
      class: w(["trx-call-card", `trx-call-card--${t.status}`])
    }, [
      s("div", Wn, [
        s("div", {
          class: "trx-call-card__icon",
          style: z({ color: n.value.color })
        }, [
          s("i", {
            class: w(n.value.icon)
          }, null, 2),
          s("i", {
            class: w(["trx-call-card__direction", t.direction === "inbound" ? "pi pi-arrow-down-left" : "pi pi-arrow-up-right"])
          }, null, 2)
        ], 4)
      ]),
      s("div", Kn, [
        s("div", Jn, [
          s("span", Xn, v(t.callerName || t.callerId), 1),
          t.callerName ? (l(), r("span", Yn, v(t.callerId), 1)) : f("", !0)
        ]),
        s("div", Qn, [
          s("span", {
            class: "trx-call-card__status",
            style: z({ color: n.value.color })
          }, v(n.value.label), 5),
          t.duration !== void 0 ? (l(), r("span", Zn, v(c(t.duration)), 1)) : f("", !0),
          t.queue ? (l(), r("span", tr, v(t.queue), 1)) : f("", !0)
        ]),
        t.agent ? (l(), r("div", er, [
          _[4] || (_[4] = s("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : f("", !0)
      ]),
      s("div", sr, [
        k(u.$slots, "actions", {}, () => [
          t.status === "ringing" ? (l(), r("button", {
            key: 0,
            class: "trx-call-card__btn trx-call-card__btn--answer",
            onClick: _[0] || (_[0] = (d) => i("answer")),
            title: "Atender"
          }, [..._[5] || (_[5] = [
            s("i", { class: "pi pi-phone" }, null, -1)
          ])])) : f("", !0),
          t.status === "active" ? (l(), r("button", {
            key: 1,
            class: "trx-call-card__btn trx-call-card__btn--hold",
            onClick: _[1] || (_[1] = (d) => i("hold")),
            title: "Colocar em espera"
          }, [..._[6] || (_[6] = [
            s("i", { class: "pi pi-pause" }, null, -1)
          ])])) : f("", !0),
          t.status === "active" || t.status === "hold" ? (l(), r("button", {
            key: 2,
            class: "trx-call-card__btn trx-call-card__btn--transfer",
            onClick: _[2] || (_[2] = (d) => i("transfer")),
            title: "Transferir"
          }, [..._[7] || (_[7] = [
            s("i", { class: "pi pi-share-alt" }, null, -1)
          ])])) : f("", !0),
          t.status !== "ended" && t.status !== "missed" ? (l(), r("button", {
            key: 3,
            class: "trx-call-card__btn trx-call-card__btn--hangup",
            onClick: _[3] || (_[3] = (d) => i("hangup")),
            title: "Encerrar"
          }, [..._[8] || (_[8] = [
            s("i", { class: "pi pi-times" }, null, -1)
          ])])) : f("", !0)
        ], !0)
      ])
    ], 2));
  }
}), Vb = /* @__PURE__ */ L(ar, [["__scopeId", "data-v-98fdc3c5"]]), lr = /* @__PURE__ */ b({
  __name: "TrxCallTimer",
  props: {
    running: { type: Boolean, default: !1 },
    startAt: { default: 0 },
    format: { default: "mm:ss" },
    color: { default: "default" }
  },
  emits: ["tick"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(o.startAt);
    let n = null;
    const c = I(() => o.color !== "default" ? o.color : a.value >= 300 ? "danger" : a.value >= 180 ? "warning" : "success"), u = I(() => ({
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)",
      default: "var(--trx-text-primary)"
    })[c.value]), _ = I(() => {
      const m = Math.floor(a.value / 3600), $ = Math.floor(a.value % 3600 / 60), g = a.value % 60, M = $.toString().padStart(2, "0"), S = g.toString().padStart(2, "0");
      return o.format === "hh:mm:ss" ? `${m.toString().padStart(2, "0")}:${M}:${S}` : `${(m * 60 + $).toString().padStart(2, "0")}:${S}`;
    });
    function d() {
      n || (n = setInterval(() => {
        a.value++, i("tick", a.value);
      }, 1e3));
    }
    function p() {
      n && (clearInterval(n), n = null);
    }
    return Q(() => o.running, (m) => {
      m ? d() : p();
    }, { immediate: !0 }), Q(() => o.startAt, (m) => {
      a.value = m;
    }), mt(() => p()), (m, $) => (l(), r("span", {
      class: "trx-call-timer",
      style: z({ color: u.value })
    }, [
      $[0] || ($[0] = s("i", { class: "pi pi-clock trx-call-timer__icon" }, null, -1)),
      N(" " + v(_.value), 1)
    ], 4));
  }
}), nr = /* @__PURE__ */ L(lr, [["__scopeId", "data-v-35e4aaaf"]]), rr = { class: "trx-call-queue" }, or = { class: "trx-call-queue__header" }, ir = { class: "trx-call-queue__name" }, cr = { class: "trx-call-queue__count" }, ur = {
  key: 0,
  class: "trx-call-queue__empty"
}, dr = {
  key: 1,
  class: "trx-call-queue__list"
}, _r = { class: "trx-call-queue__item-info" }, pr = { class: "trx-call-queue__item-caller" }, mr = {
  key: 0,
  class: "trx-call-queue__item-number"
}, vr = { class: "trx-call-queue__item-meta" }, fr = { class: "trx-call-queue__item-actions" }, hr = ["onClick"], xr = ["onClick"], $r = /* @__PURE__ */ b({
  __name: "TrxCallQueue",
  props: {
    calls: {},
    queueName: {},
    maxWaitWarning: { default: 120 }
  },
  emits: ["answer", "transfer"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(
      () => [...o.calls].sort((u, _) => {
        const d = { high: 0, normal: 1, low: 2 };
        return d[u.priority ?? "normal"] - d[_.priority ?? "normal"] || _.waitTime - u.waitTime;
      })
    );
    function n(u) {
      return u < 60 ? `${u}s` : `${Math.floor(u / 60)}m ${u % 60}s`;
    }
    const c = {
      high: { label: "Alta", color: "var(--trx-danger-color)" },
      normal: { label: "Normal", color: "var(--trx-info-color)" },
      low: { label: "Baixa", color: "var(--trx-text-secondary)" }
    };
    return (u, _) => (l(), r("div", rr, [
      s("div", or, [
        s("span", ir, v(t.queueName || "Fila de Chamadas"), 1),
        s("span", cr, v(t.calls.length), 1)
      ]),
      t.calls.length === 0 ? (l(), r("div", ur, [..._[0] || (_[0] = [
        s("i", { class: "pi pi-inbox" }, null, -1),
        s("span", null, "Nenhuma chamada na fila", -1)
      ])])) : (l(), r("ul", dr, [
        (l(!0), r(D, null, y(a.value, (d) => (l(), r("li", {
          key: d.id,
          class: w(["trx-call-queue__item", { "trx-call-queue__item--warning": d.waitTime > t.maxWaitWarning }])
        }, [
          s("div", _r, [
            s("div", pr, [
              s("span", null, v(d.callerName || d.callerId), 1),
              d.callerName ? (l(), r("span", mr, v(d.callerId), 1)) : f("", !0)
            ]),
            s("div", vr, [
              s("span", {
                class: w(["trx-call-queue__wait", { "trx-call-queue__wait--over": d.waitTime > t.maxWaitWarning }])
              }, [
                _[1] || (_[1] = s("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(n(d.waitTime)), 1)
              ], 2),
              d.priority && d.priority !== "normal" ? (l(), r("span", {
                key: 0,
                class: "trx-call-queue__priority",
                style: z({ color: c[d.priority].color })
              }, v(c[d.priority].label), 5)) : f("", !0)
            ])
          ]),
          s("div", fr, [
            s("button", {
              class: "trx-call-queue__btn trx-call-queue__btn--answer",
              onClick: (p) => i("answer", d.id),
              title: "Atender"
            }, [..._[2] || (_[2] = [
              s("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, hr),
            s("button", {
              class: "trx-call-queue__btn",
              onClick: (p) => i("transfer", d.id),
              title: "Transferir"
            }, [..._[3] || (_[3] = [
              s("i", { class: "pi pi-share-alt" }, null, -1)
            ])], 8, xr)
          ])
        ], 2))), 128))
      ]))
    ]));
  }
}), Ib = /* @__PURE__ */ L($r, [["__scopeId", "data-v-48b24471"]]), br = {
  key: 0,
  class: "trx-dialer__display"
}, gr = { class: "trx-dialer__number" }, yr = { class: "trx-dialer__grid" }, kr = ["disabled", "onClick"], wr = { class: "trx-dialer__key-main" }, Tr = {
  key: 0,
  class: "trx-dialer__key-sub"
}, Cr = { class: "trx-dialer__actions" }, Sr = ["disabled"], Pr = ["disabled"], Vr = /* @__PURE__ */ b({
  __name: "TrxPhoneDialer",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean },
    showDisplay: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "call", "clear"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"], n = {
      2: "ABC",
      3: "DEF",
      4: "GHI",
      5: "JKL",
      6: "MNO",
      7: "PQRS",
      8: "TUV",
      9: "WXYZ",
      0: "+",
      "*": "",
      "#": ""
    }, c = I({
      get: () => o.modelValue ?? "",
      set: (m) => i("update:modelValue", m)
    });
    function u(m) {
      o.disabled || (c.value = c.value + m);
    }
    function _() {
      c.value = c.value.slice(0, -1);
    }
    function d() {
      c.value = "", i("clear");
    }
    function p() {
      c.value && i("call", c.value);
    }
    return (m, $) => (l(), r("div", {
      class: w(["trx-dialer", { "trx-dialer--disabled": t.disabled }])
    }, [
      t.showDisplay ? (l(), r("div", br, [
        s("span", gr, v(c.value || " "), 1),
        c.value ? (l(), r("button", {
          key: 0,
          class: "trx-dialer__backspace",
          onClick: _,
          title: "Apagar"
        }, [...$[0] || ($[0] = [
          s("i", { class: "pi pi-delete-left" }, null, -1)
        ])])) : f("", !0)
      ])) : f("", !0),
      s("div", yr, [
        (l(), r(D, null, y(a, (g) => s("button", {
          key: g,
          class: "trx-dialer__key",
          disabled: t.disabled,
          onClick: (M) => u(g)
        }, [
          s("span", wr, v(g), 1),
          n[g] ? (l(), r("span", Tr, v(n[g]), 1)) : f("", !0)
        ], 8, kr)), 64))
      ]),
      s("div", Cr, [
        s("button", {
          class: "trx-dialer__clear",
          disabled: t.disabled || !c.value,
          onClick: d,
          title: "Limpar"
        }, [...$[1] || ($[1] = [
          s("i", { class: "pi pi-times" }, null, -1)
        ])], 8, Sr),
        s("button", {
          class: "trx-dialer__call",
          disabled: t.disabled || !c.value,
          onClick: p,
          title: "Ligar"
        }, [...$[2] || ($[2] = [
          s("i", { class: "pi pi-phone" }, null, -1)
        ])], 8, Pr)
      ])
    ], 2));
  }
}), Ab = /* @__PURE__ */ L(Vr, [["__scopeId", "data-v-a4cd158b"]]), Ir = { class: "trx-softphone__info" }, Ar = { class: "trx-softphone__details" }, Br = { class: "trx-softphone__label" }, Mr = {
  key: 0,
  class: "trx-softphone__caller"
}, Lr = {
  key: 0,
  class: "trx-softphone__controls"
}, Dr = ["title"], zr = ["title"], Er = /* @__PURE__ */ b({
  __name: "TrxSoftphone",
  props: {
    status: {},
    callInfo: {},
    canTransfer: { type: Boolean, default: !0 },
    canHold: { type: Boolean, default: !0 }
  },
  emits: ["answer", "hangup", "mute", "unmute", "hold", "resume", "transfer"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => ({
      idle: "Disponível",
      ringing: "Chamada entrante...",
      active: "Em chamada",
      hold: "Em espera",
      muted: "Mudo"
    })[o.status]), n = I(() => o.status === "active" || o.status === "muted");
    return (c, u) => {
      var _;
      return l(), r("div", {
        class: w(["trx-softphone", `trx-softphone--${t.status}`])
      }, [
        s("div", Ir, [
          u[5] || (u[5] = s("div", { class: "trx-softphone__status-dot" }, null, -1)),
          s("div", Ar, [
            s("span", Br, v(a.value), 1),
            t.callInfo ? (l(), r("span", Mr, v(t.callInfo.name || t.callInfo.number), 1)) : f("", !0)
          ]),
          n.value && ((_ = t.callInfo) == null ? void 0 : _.duration) !== void 0 ? (l(), V(nr, {
            key: 0,
            running: n.value,
            "start-at": t.callInfo.duration,
            class: "trx-softphone__timer"
          }, null, 8, ["running", "start-at"])) : f("", !0)
        ]),
        t.status !== "idle" ? (l(), r("div", Lr, [
          t.status === "ringing" ? (l(), r("button", {
            key: 0,
            class: "trx-softphone__btn trx-softphone__btn--answer",
            onClick: u[0] || (u[0] = (d) => i("answer"))
          }, [...u[6] || (u[6] = [
            s("i", { class: "pi pi-phone" }, null, -1)
          ])])) : f("", !0),
          n.value || t.status === "hold" ? (l(), r(D, { key: 1 }, [
            t.canHold ? (l(), r("button", {
              key: 0,
              class: w(["trx-softphone__btn", t.status === "hold" ? "trx-softphone__btn--active" : ""]),
              onClick: u[1] || (u[1] = (d) => t.status === "hold" ? i("resume") : i("hold")),
              title: t.status === "hold" ? "Retomar" : "Espera"
            }, [
              s("i", {
                class: w(t.status === "hold" ? "pi pi-play" : "pi pi-pause")
              }, null, 2)
            ], 10, Dr)) : f("", !0),
            n.value ? (l(), r("button", {
              key: 1,
              class: w(["trx-softphone__btn", t.status === "muted" ? "trx-softphone__btn--active" : ""]),
              onClick: u[2] || (u[2] = (d) => t.status === "muted" ? i("unmute") : i("mute")),
              title: t.status === "muted" ? "Ativar mic" : "Mudo"
            }, [
              s("i", {
                class: w(t.status === "muted" ? "pi pi-microphone-slash" : "pi pi-microphone")
              }, null, 2)
            ], 10, zr)) : f("", !0),
            t.canTransfer ? (l(), r("button", {
              key: 2,
              class: "trx-softphone__btn",
              onClick: u[3] || (u[3] = (d) => i("transfer")),
              title: "Transferir"
            }, [...u[7] || (u[7] = [
              s("i", { class: "pi pi-share-alt" }, null, -1)
            ])])) : f("", !0)
          ], 64)) : f("", !0),
          s("button", {
            class: "trx-softphone__btn trx-softphone__btn--hangup",
            onClick: u[4] || (u[4] = (d) => i("hangup")),
            title: "Encerrar"
          }, [...u[8] || (u[8] = [
            s("i", { class: "pi pi-times" }, null, -1)
          ])])
        ])) : f("", !0)
      ], 2);
    };
  }
}), Bb = /* @__PURE__ */ L(Er, [["__scopeId", "data-v-80ab0580"]]), Rr = {
  key: 0,
  class: "trx-phone-input__ddi"
}, Nr = ["value", "placeholder", "disabled"], qr = /* @__PURE__ */ b({
  __name: "TrxPhoneInput",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "(00) 00000-0000" },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    showDdi: { type: Boolean, default: !1 },
    ddi: { default: "+55" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const o = e;
    function i(n) {
      const c = n.target.value.replace(/\D/g, "").slice(0, 11), u = a(c);
      o("update:modelValue", u), o("change", u);
    }
    function a(n) {
      return n.length <= 2 ? n.length ? `(${n}` : "" : n.length <= 6 ? `(${n.slice(0, 2)}) ${n.slice(2)}` : n.length <= 10 ? `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}` : `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
    }
    return (n, c) => (l(), r("div", {
      class: w(["trx-phone-input", { "trx-phone-input--invalid": t.invalid, "trx-phone-input--disabled": t.disabled }])
    }, [
      t.showDdi ? (l(), r("span", Rr, v(t.ddi), 1)) : f("", !0),
      c[0] || (c[0] = s("i", { class: "pi pi-phone trx-phone-input__icon" }, null, -1)),
      s("input", {
        class: "trx-phone-input__field",
        type: "tel",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        autocomplete: "tel",
        onInput: i
      }, null, 40, Nr)
    ], 2));
  }
}), Mb = /* @__PURE__ */ L(qr, [["__scopeId", "data-v-d0bc586c"]]), Fr = /* @__PURE__ */ b({
  __name: "TrxWaveform",
  props: {
    data: {},
    progress: { default: 0 },
    color: {},
    progressColor: {},
    height: { default: 48 },
    barWidth: { default: 3 },
    barGap: { default: 1 }
  },
  emits: ["seek"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = st("canvas");
    function n() {
      const u = a.value;
      if (!u || !o.data.length) return;
      const _ = u.getContext("2d");
      if (!_) return;
      const d = window.devicePixelRatio || 1, p = o.barWidth + o.barGap, m = p * o.data.length - o.barGap;
      u.width = m * d, u.height = o.height * d, u.style.width = `${m}px`, u.style.height = `${o.height}px`, _.scale(d, d);
      const $ = o.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", g = o.progressColor || "#10b981", M = o.height / 2;
      o.data.forEach((S, P) => {
        const B = P * p, R = Math.max(2, S * o.height * 0.9), F = M - R / 2, q = P / o.data.length < o.progress;
        _.fillStyle = q ? g : $ + "66", _.beginPath(), _.roundRect(B, F, o.barWidth, R, 1), _.fill();
      });
    }
    function c(u) {
      const _ = a.value;
      if (!_) return;
      const d = _.getBoundingClientRect(), p = (u.clientX - d.left) / d.width;
      i("seek", Math.max(0, Math.min(1, p)));
    }
    return G(n), Q(() => [o.data, o.progress, o.color, o.progressColor], n, { deep: !0 }), (u, _) => (l(), r("canvas", {
      ref_key: "canvas",
      ref: a,
      class: "trx-waveform",
      onClick: c
    }, null, 512));
  }
}), Lb = /* @__PURE__ */ L(Fr, [["__scopeId", "data-v-c031b667"]]), Or = { class: "trx-transcription" }, Hr = {
  key: 0,
  class: "trx-transcription__avatar"
}, Ur = { class: "trx-transcription__bubble" }, Gr = { class: "trx-transcription__header" }, jr = { class: "trx-transcription__speaker" }, Wr = { class: "trx-transcription__time" }, Kr = {
  key: 0,
  class: "trx-transcription__low-conf",
  title: "Baixa confiança"
}, Jr = ["innerHTML"], Xr = /* @__PURE__ */ b({
  __name: "TrxTranscription",
  props: {
    segments: {},
    currentTime: {},
    agentName: { default: "Agente" },
    customerName: { default: "Cliente" },
    searchQuery: {}
  },
  setup(t) {
    const e = t;
    function o(u) {
      const _ = Math.floor(u / 60).toString().padStart(2, "0"), d = Math.floor(u % 60).toString().padStart(2, "0");
      return `${_}:${d}`;
    }
    function i(u) {
      if (e.currentTime === void 0) return !1;
      const _ = u.endTime ?? u.startTime + 5;
      return e.currentTime >= u.startTime && e.currentTime <= _;
    }
    function a(u) {
      if (!e.searchQuery) return u;
      const _ = e.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return u.replace(new RegExp(`(${_})`, "gi"), "<mark>$1</mark>");
    }
    function n(u) {
      return u === "agent" ? e.agentName : u === "customer" ? e.customerName : u;
    }
    function c(u) {
      return u.split(" ").slice(0, 2).map((_) => _[0]).join("").toUpperCase();
    }
    return (u, _) => (l(), r("div", Or, [
      (l(!0), r(D, null, y(t.segments, (d) => (l(), r("div", {
        key: d.id,
        class: w(["trx-transcription__segment", [
          `trx-transcription__segment--${d.speaker}`,
          { "trx-transcription__segment--active": i(d) }
        ]])
      }, [
        d.speaker !== "system" ? (l(), r("div", Hr, v(c(n(d.speaker))), 1)) : f("", !0),
        s("div", Ur, [
          s("div", Gr, [
            s("span", jr, v(n(d.speaker)), 1),
            s("span", Wr, v(o(d.startTime)), 1),
            d.confidence !== void 0 && d.confidence < 0.7 ? (l(), r("span", Kr, [..._[0] || (_[0] = [
              s("i", { class: "pi pi-exclamation-triangle" }, null, -1)
            ])])) : f("", !0)
          ]),
          s("p", {
            class: "trx-transcription__text",
            innerHTML: a(d.text)
          }, null, 8, Jr)
        ])
      ], 2))), 128))
    ]));
  }
}), Db = /* @__PURE__ */ L(Xr, [["__scopeId", "data-v-2470dac6"]]), Yr = /* @__PURE__ */ b({
  __name: "TrxSparkline",
  props: {
    data: {},
    width: { default: 120 },
    height: { default: 40 },
    color: {},
    fill: { type: Boolean, default: !0 },
    strokeWidth: { default: 2 },
    showDot: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = st("canvas");
    function i() {
      const a = o.value;
      if (!a || e.data.length < 2) return;
      const n = a.getContext("2d");
      if (!n) return;
      const c = window.devicePixelRatio || 1;
      a.width = e.width * c, a.height = e.height * c, a.style.width = `${e.width}px`, a.style.height = `${e.height}px`, n.scale(c, c);
      const u = e.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", _ = Math.min(...e.data), p = Math.max(...e.data) - _ || 1, m = 2, $ = e.data.map((g, M) => ({
        x: M / (e.data.length - 1) * (e.width - m * 2) + m,
        y: e.height - m - (g - _) / p * (e.height - m * 2)
      }));
      if (n.beginPath(), n.moveTo($[0].x, $[0].y), $.slice(1).forEach((g) => n.lineTo(g.x, g.y)), e.fill) {
        const g = $[$.length - 1];
        n.lineTo(g.x, e.height), n.lineTo($[0].x, e.height), n.closePath();
        const M = n.createLinearGradient(0, 0, 0, e.height);
        M.addColorStop(0, u + "33"), M.addColorStop(1, u + "00"), n.fillStyle = M, n.fill(), n.beginPath(), n.moveTo($[0].x, $[0].y), $.slice(1).forEach((S) => n.lineTo(S.x, S.y));
      }
      if (n.strokeStyle = u, n.lineWidth = e.strokeWidth, n.lineJoin = "round", n.lineCap = "round", n.stroke(), e.showDot) {
        const g = $[$.length - 1];
        n.beginPath(), n.arc(g.x, g.y, 3, 0, Math.PI * 2), n.fillStyle = u, n.fill();
      }
    }
    return G(i), Q(() => [e.data, e.color, e.width, e.height], i, { deep: !0 }), (a, n) => (l(), r("canvas", {
      ref_key: "canvas",
      ref: o,
      class: "trx-sparkline"
    }, null, 512));
  }
}), Qr = /* @__PURE__ */ L(Yr, [["__scopeId", "data-v-5bfe2b98"]]), Zr = /* @__PURE__ */ b({
  __name: "TrxGaugeChart",
  props: {
    value: {},
    min: { default: 0 },
    max: { default: 100 },
    label: {},
    unit: {},
    size: { default: 160 },
    color: { default: "auto" },
    thickness: { default: 12 }
  },
  setup(t) {
    const e = t, o = st("canvas"), i = I(() => {
      if (e.color !== "auto") return e.color;
      const n = (e.value - e.min) / (e.max - e.min) * 100;
      return n >= 80 ? "#ef4444" : n >= 60 ? "#f59e0b" : "#10b981";
    });
    function a() {
      const n = o.value;
      if (!n) return;
      const c = n.getContext("2d");
      if (!c) return;
      const u = window.devicePixelRatio || 1;
      n.width = e.size * u, n.height = e.size * 0.65 * u, n.style.width = `${e.size}px`, n.style.height = `${e.size * 0.65}px`, c.scale(u, u);
      const _ = e.size / 2, d = e.size * 0.55, p = (e.size - e.thickness * 2 - 8) / 2, m = Math.PI, $ = 2 * Math.PI, g = Math.max(0, Math.min(1, (e.value - e.min) / (e.max - e.min))), M = m + g * Math.PI, S = getComputedStyle(document.documentElement), P = S.getPropertyValue("--trx-border-color").trim() || "#e2e8f0";
      c.beginPath(), c.arc(_, d, p, m, $), c.strokeStyle = P, c.lineWidth = e.thickness, c.lineCap = "round", c.stroke(), g > 0 && (c.beginPath(), c.arc(_, d, p, m, M), c.strokeStyle = i.value, c.lineWidth = e.thickness, c.lineCap = "round", c.stroke()), c.fillStyle = S.getPropertyValue("--trx-text-primary").trim() || "#1e293b", c.font = `bold ${e.size * 0.16}px Inter, system-ui`, c.textAlign = "center", c.textBaseline = "middle";
      const B = `${Math.round(e.value)}${e.unit || ""}`;
      c.fillText(B, _, d - e.size * 0.04), e.label && (c.fillStyle = S.getPropertyValue("--trx-text-secondary").trim() || "#64748b", c.font = `${e.size * 0.09}px Inter, system-ui`, c.fillText(e.label, _, d + e.size * 0.1));
    }
    return G(a), Q(() => [e.value, e.color, e.size], a), (n, c) => (l(), r("canvas", {
      ref_key: "canvas",
      ref: o,
      class: "trx-gauge"
    }, null, 512));
  }
}), zb = /* @__PURE__ */ L(Zr, [["__scopeId", "data-v-6d505e7d"]]), to = { class: "trx-metric-card__main" }, eo = { class: "trx-metric-card__title" }, so = { class: "trx-metric-card__value-row" }, ao = {
  key: 0,
  class: "trx-metric-card__skeleton"
}, lo = {
  key: 0,
  class: "trx-metric-card__unit"
}, no = {
  key: 0,
  class: "trx-metric-card__change-label"
}, ro = {
  key: 0,
  class: "trx-metric-card__chart"
}, oo = /* @__PURE__ */ b({
  __name: "TrxMetricCard",
  props: {
    title: {},
    value: {},
    unit: {},
    change: {},
    changeLabel: {},
    sparklineData: {},
    color: { default: "primary" },
    loading: { type: Boolean }
  },
  setup(t) {
    const e = t, o = I(() => ({
      primary: "var(--trx-accent-color)",
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)"
    })[e.color]), i = I(() => e.change !== void 0 && e.change >= 0), a = I(() => e.change === void 0 ? "" : e.change > 0 ? "pi pi-arrow-up" : e.change < 0 ? "pi pi-arrow-down" : "pi pi-minus");
    return (n, c) => {
      var u;
      return l(), r("div", {
        class: w(["trx-metric-card", `trx-metric-card--${t.color}`])
      }, [
        s("div", to, [
          s("p", eo, v(t.title), 1),
          s("div", so, [
            t.loading ? (l(), r("span", ao)) : (l(), r(D, { key: 1 }, [
              s("span", {
                class: "trx-metric-card__value",
                style: z({ color: o.value })
              }, v(t.value), 5),
              t.unit ? (l(), r("span", lo, v(t.unit), 1)) : f("", !0)
            ], 64))
          ]),
          t.change !== void 0 ? (l(), r("div", {
            key: 0,
            class: w(["trx-metric-card__change", i.value ? "trx-metric-card__change--up" : "trx-metric-card__change--down"])
          }, [
            s("i", {
              class: w(a.value)
            }, null, 2),
            s("span", null, v(Math.abs(t.change)) + "%", 1),
            t.changeLabel ? (l(), r("span", no, v(t.changeLabel), 1)) : f("", !0)
          ], 2)) : f("", !0)
        ]),
        (u = t.sparklineData) != null && u.length ? (l(), r("div", ro, [
          O(Qr, {
            data: t.sparklineData,
            width: 80,
            height: 40,
            color: o.value
          }, null, 8, ["data", "color"])
        ])) : f("", !0)
      ], 2);
    };
  }
}), Eb = /* @__PURE__ */ L(oo, [["__scopeId", "data-v-6c648207"]]), io = { class: "trx-heatmap" }, co = {
  key: 0,
  class: "trx-heatmap__hour-labels"
}, uo = { class: "trx-heatmap__grid" }, _o = {
  key: 0,
  class: "trx-heatmap__day-label"
}, po = ["title"], mo = /* @__PURE__ */ b({
  __name: "TrxHeatmap",
  props: {
    data: {},
    maxValue: {},
    cellSize: { default: 20 },
    showLabels: { type: Boolean, default: !0 },
    days: { default: () => ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] }
  },
  setup(t) {
    const e = t, o = Array.from({ length: 24 }, (u, _) => _), i = I(() => e.maxValue ?? Math.max(1, ...e.data.map((u) => u.value)));
    function a(u, _) {
      return e.data.find((d) => d.day === u && d.hour === _);
    }
    function n(u) {
      return Math.max(0.05, u / i.value);
    }
    function c(u) {
      return u === 0 || u === 6 || u === 12 || u === 18 || u === 23 ? `${u}h` : "";
    }
    return (u, _) => (l(), r("div", io, [
      t.showLabels ? (l(), r("div", co, [
        _[0] || (_[0] = s("div", { class: "trx-heatmap__corner" }, null, -1)),
        (l(!0), r(D, null, y(T(o), (d) => (l(), r("div", {
          key: d,
          class: "trx-heatmap__hour-label",
          style: z({ width: `${t.cellSize}px` })
        }, v(c(d)), 5))), 128))
      ])) : f("", !0),
      s("div", uo, [
        (l(!0), r(D, null, y(t.days, (d, p) => (l(), r("div", {
          key: p,
          class: "trx-heatmap__row"
        }, [
          t.showLabels ? (l(), r("div", _o, v(d), 1)) : f("", !0),
          (l(!0), r(D, null, y(T(o), (m) => {
            var $, g;
            return l(), r("div", {
              key: m,
              class: "trx-heatmap__cell",
              style: z({
                width: `${t.cellSize}px`,
                height: `${t.cellSize}px`,
                opacity: n((($ = a(p, m)) == null ? void 0 : $.value) ?? 0)
              }),
              title: `${d} ${m}h: ${((g = a(p, m)) == null ? void 0 : g.value) ?? 0}`
            }, null, 12, po);
          }), 128))
        ]))), 128))
      ])
    ]));
  }
}), Rb = /* @__PURE__ */ L(mo, [["__scopeId", "data-v-3bac74cd"]]), vo = /* @__PURE__ */ b({
  __name: "TrxDashboardGrid",
  props: {
    columns: { default: 12 },
    gap: { default: "1rem" }
  },
  setup(t) {
    return (e, o) => (l(), r("div", {
      class: "trx-dashboard-grid",
      style: z({
        gridTemplateColumns: `repeat(${t.columns}, 1fr)`,
        gap: t.gap
      })
    }, [
      k(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nb = /* @__PURE__ */ L(vo, [["__scopeId", "data-v-b95e8456"]]), fo = { class: "trx-table-toolbar" }, ho = {
  key: 0,
  class: "trx-table-toolbar__bulk"
}, xo = { class: "trx-table-toolbar__bulk-count" }, $o = { class: "trx-table-toolbar__main" }, bo = { class: "trx-table-toolbar__search" }, go = ["value", "placeholder"], yo = { class: "trx-table-toolbar__center" }, ko = {
  key: 0,
  class: "trx-table-toolbar__total"
}, wo = { class: "trx-table-toolbar__actions" }, To = ["disabled"], Co = {
  key: 0,
  class: "trx-table-toolbar__filter-panel"
}, So = /* @__PURE__ */ b({
  __name: "TrxTableToolbar",
  props: {
    searchValue: {},
    searchPlaceholder: { default: "Pesquisar..." },
    loading: { type: Boolean },
    total: {},
    selectedCount: {}
  },
  emits: ["update:searchValue", "refresh", "filter"],
  setup(t, { emit: e }) {
    const o = e, i = E(!1);
    return (a, n) => (l(), r("div", fo, [
      O(U, { name: "trx-bulk-slide" }, {
        default: C(() => [
          t.selectedCount && t.selectedCount > 0 ? (l(), r("div", ho, [
            s("span", xo, v(t.selectedCount) + " selecionado(s)", 1),
            k(a.$slots, "bulk-actions", {}, void 0, !0)
          ])) : f("", !0)
        ]),
        _: 3
      }),
      s("div", $o, [
        s("div", bo, [
          n[5] || (n[5] = s("i", { class: "pi pi-search trx-table-toolbar__search-icon" }, null, -1)),
          s("input", {
            class: "trx-table-toolbar__search-input",
            type: "text",
            value: t.searchValue,
            placeholder: t.searchPlaceholder,
            onInput: n[0] || (n[0] = (c) => o("update:searchValue", c.target.value))
          }, null, 40, go),
          t.searchValue ? (l(), r("button", {
            key: 0,
            class: "trx-table-toolbar__search-clear",
            onClick: n[1] || (n[1] = (c) => o("update:searchValue", ""))
          }, [...n[4] || (n[4] = [
            s("i", { class: "pi pi-times" }, null, -1)
          ])])) : f("", !0)
        ]),
        s("div", yo, [
          t.total !== void 0 ? (l(), r("span", ko, v(t.total) + " registro(s) ", 1)) : f("", !0)
        ]),
        s("div", wo, [
          k(a.$slots, "filters", {}, () => [
            a.$slots["filter-panel"] ? (l(), r("button", {
              key: 0,
              class: w(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--active": i.value }]),
              onClick: n[2] || (n[2] = (c) => {
                i.value = !i.value, o("filter");
              }),
              title: "Filtros"
            }, [...n[6] || (n[6] = [
              s("i", { class: "pi pi-filter" }, null, -1)
            ])], 2)) : f("", !0)
          ], !0),
          s("button", {
            class: w(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--loading": t.loading }]),
            onClick: n[3] || (n[3] = (c) => o("refresh")),
            title: "Atualizar",
            disabled: t.loading
          }, [
            s("i", {
              class: w(t.loading ? "pi pi-spin pi-spinner" : "pi pi-refresh")
            }, null, 2)
          ], 10, To),
          k(a.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      O(U, { name: "trx-slide-down" }, {
        default: C(() => [
          i.value && a.$slots["filter-panel"] ? (l(), r("div", Co, [
            k(a.$slots, "filter-panel", {}, void 0, !0)
          ])) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), qb = /* @__PURE__ */ L(So, [["__scopeId", "data-v-874b5252"]]), Po = {
  key: 0,
  class: "trx-bulk-actions"
}, Vo = { class: "trx-bulk-actions__count" }, Io = { class: "trx-bulk-actions__items" }, Ao = /* @__PURE__ */ b({
  __name: "TrxBulkActions",
  props: {
    count: {},
    visible: { type: Boolean },
    label: {}
  },
  emits: ["clear"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => o.visible !== void 0 ? o.visible : o.count > 0), n = I(() => {
      var c;
      return ((c = o.label) == null ? void 0 : c.replace("{count}", String(o.count))) ?? `${o.count} selecionado${o.count !== 1 ? "s" : ""}`;
    });
    return (c, u) => (l(), V(U, { name: "trx-bulk-up" }, {
      default: C(() => [
        a.value ? (l(), r("div", Po, [
          s("span", Vo, v(n.value), 1),
          s("div", Io, [
            k(c.$slots, "default", {}, void 0, !0)
          ]),
          s("button", {
            class: "trx-bulk-actions__clear",
            onClick: u[0] || (u[0] = (_) => i("clear")),
            title: "Limpar seleção"
          }, [...u[1] || (u[1] = [
            s("i", { class: "pi pi-times" }, null, -1)
          ])])
        ])) : f("", !0)
      ]),
      _: 3
    }));
  }
}), Fb = /* @__PURE__ */ L(Ao, [["__scopeId", "data-v-5f6bea7d"]]), Bo = { class: "trx-export-btn" }, Mo = ["disabled"], Lo = {
  key: 0,
  class: "trx-export-btn__menu"
}, Do = ["onClick"], zo = /* @__PURE__ */ b({
  __name: "TrxExportButton",
  props: {
    formats: { default: () => ["csv", "excel"] },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    label: { default: "Exportar" }
  },
  emits: ["export"],
  setup(t, { emit: e }) {
    const o = e, i = E(!1), a = {
      csv: { label: "CSV", icon: "pi pi-file" },
      excel: { label: "Excel", icon: "pi pi-file-excel" },
      pdf: { label: "PDF", icon: "pi pi-file-pdf" }
    };
    function n(u) {
      i.value = !1, o("export", u);
    }
    function c(u) {
      const _ = document.querySelector(".trx-export-btn");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return G(() => document.addEventListener("click", c, !0)), Y(() => document.removeEventListener("click", c, !0)), (u, _) => (l(), r("div", Bo, [
      s("button", {
        class: "trx-export-btn__trigger",
        disabled: t.disabled || t.loading,
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        s("i", {
          class: w(t.loading ? "pi pi-spin pi-spinner" : "pi pi-download")
        }, null, 2),
        s("span", null, v(t.label), 1),
        s("i", {
          class: w(["pi pi-chevron-down trx-export-btn__arrow", { "trx-export-btn__arrow--open": i.value }])
        }, null, 2)
      ], 8, Mo),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          i.value ? (l(), r("div", Lo, [
            (l(!0), r(D, null, y(t.formats, (d) => (l(), r("button", {
              key: d,
              class: "trx-export-btn__item",
              onClick: (p) => n(d)
            }, [
              s("i", {
                class: w(a[d].icon)
              }, null, 2),
              s("span", null, v(a[d].label), 1)
            ], 8, Do))), 128))
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ob = /* @__PURE__ */ L(zo, [["__scopeId", "data-v-2e0f2f33"]]), Eo = { class: "trx-col-config" }, Ro = {
  key: 0,
  class: "trx-col-config__panel"
}, No = ["checked", "disabled", "onChange"], qo = {
  key: 0,
  class: "trx-col-config__lock"
}, Fo = /* @__PURE__ */ b({
  __name: "TrxColumnConfig",
  props: {
    columns: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1);
    function n(_) {
      const d = o.columns.find(($) => $.key === _);
      if (d != null && d.required) return;
      const p = [...o.modelValue], m = p.indexOf(_);
      m === -1 ? p.push(_) : p.splice(m, 1), i("update:modelValue", p);
    }
    function c(_) {
      return o.modelValue.includes(_);
    }
    function u(_) {
      const d = document.querySelector(".trx-col-config");
      d && !d.contains(_.target) && (a.value = !1);
    }
    return G(() => document.addEventListener("click", u, !0)), Y(() => document.removeEventListener("click", u, !0)), (_, d) => (l(), r("div", Eo, [
      s("button", {
        class: "trx-col-config__trigger",
        onClick: d[0] || (d[0] = (p) => a.value = !a.value),
        title: "Configurar colunas"
      }, [...d[1] || (d[1] = [
        s("i", { class: "pi pi-table" }, null, -1)
      ])]),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          a.value ? (l(), r("div", Ro, [
            d[3] || (d[3] = s("p", { class: "trx-col-config__title" }, "Colunas visíveis", -1)),
            (l(!0), r(D, null, y(t.columns, (p) => (l(), r("label", {
              key: p.key,
              class: w(["trx-col-config__item", { "trx-col-config__item--required": p.required }])
            }, [
              s("input", {
                type: "checkbox",
                checked: c(p.key),
                disabled: p.required,
                onChange: (m) => n(p.key)
              }, null, 40, No),
              s("span", null, v(p.label), 1),
              p.required ? (l(), r("span", qo, [...d[2] || (d[2] = [
                s("i", { class: "pi pi-lock" }, null, -1)
              ])])) : f("", !0)
            ], 2))), 128))
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Hb = /* @__PURE__ */ L(Fo, [["__scopeId", "data-v-e1297a23"]]), Oo = ["value", "disabled", "placeholder", "max"], Ho = ["value", "disabled", "placeholder", "min"], Uo = /* @__PURE__ */ b({
  __name: "TrxDateRangePicker",
  props: {
    modelValue: { default: () => ({ start: null, end: null }) },
    disabled: { type: Boolean },
    startPlaceholder: { default: "Data inicial" },
    endPlaceholder: { default: "Data final" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => {
      var p;
      return ((p = o.modelValue) == null ? void 0 : p.start) ?? "";
    }), n = I(() => {
      var p;
      return ((p = o.modelValue) == null ? void 0 : p.end) ?? "";
    });
    function c(p) {
      var m;
      i("update:modelValue", { start: p.target.value || null, end: ((m = o.modelValue) == null ? void 0 : m.end) ?? null });
    }
    function u(p) {
      var m;
      i("update:modelValue", { start: ((m = o.modelValue) == null ? void 0 : m.start) ?? null, end: p.target.value || null });
    }
    function _() {
      i("update:modelValue", { start: null, end: null });
    }
    const d = I(() => {
      var p, m;
      return !!((p = o.modelValue) != null && p.start || (m = o.modelValue) != null && m.end);
    });
    return (p, m) => (l(), r("div", {
      class: w(["trx-daterange", { "trx-daterange--disabled": t.disabled }])
    }, [
      m[1] || (m[1] = s("i", { class: "pi pi-calendar trx-daterange__icon" }, null, -1)),
      s("input", {
        class: "trx-daterange__input",
        type: "date",
        value: a.value,
        disabled: t.disabled,
        placeholder: t.startPlaceholder,
        max: n.value || void 0,
        onChange: c
      }, null, 40, Oo),
      m[2] || (m[2] = s("span", { class: "trx-daterange__sep" }, "→", -1)),
      s("input", {
        class: "trx-daterange__input",
        type: "date",
        value: n.value,
        disabled: t.disabled,
        placeholder: t.endPlaceholder,
        min: a.value || void 0,
        onChange: u
      }, null, 40, Ho),
      d.value && !t.disabled ? (l(), r("button", {
        key: 0,
        class: "trx-daterange__clear",
        onClick: _
      }, [...m[0] || (m[0] = [
        s("i", { class: "pi pi-times" }, null, -1)
      ])])) : f("", !0)
    ], 2));
  }
}), Ub = /* @__PURE__ */ L(Uo, [["__scopeId", "data-v-7a43f167"]]), Go = ["value", "disabled", "placeholder"], jo = /* @__PURE__ */ b({
  __name: "TrxDurationInput",
  props: {
    modelValue: { default: 0 },
    format: { default: "hh:mm:ss" },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => {
      const u = o.modelValue ?? 0, _ = Math.floor(u / 3600), d = Math.floor(u % 3600 / 60), p = u % 60, m = ($) => String($).padStart(2, "0");
      return o.format === "hh:mm:ss" ? `${m(_)}:${m(d)}:${m(p)}` : `${m(d + _ * 60)}:${m(p)}`;
    });
    function n(u) {
      const _ = u.split(":").map(Number);
      return _.length === 3 ? _[0] * 3600 + _[1] * 60 + _[2] : _.length === 2 ? _[0] * 60 + _[1] : 0;
    }
    function c(u) {
      const _ = u.target.value, d = n(_);
      isNaN(d) || i("update:modelValue", d);
    }
    return (u, _) => (l(), r("div", {
      class: w(["trx-duration", { "trx-duration--invalid": t.invalid, "trx-duration--disabled": t.disabled }])
    }, [
      _[0] || (_[0] = s("i", { class: "pi pi-clock trx-duration__icon" }, null, -1)),
      s("input", {
        class: "trx-duration__input",
        type: "text",
        value: a.value,
        disabled: t.disabled,
        placeholder: t.placeholder ?? (t.format === "hh:mm:ss" ? "00:00:00" : "00:00"),
        pattern: "[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?",
        onChange: c
      }, null, 40, Go)
    ], 2));
  }
}), Gb = /* @__PURE__ */ L(jo, [["__scopeId", "data-v-6df8b487"]]), Wo = ["disabled"], Ko = {
  key: 1,
  class: "pi pi-chevron-down trx-timepicker__arrow"
}, Jo = {
  key: 0,
  class: "trx-timepicker__panel"
}, Xo = ["onClick"], Yo = /* @__PURE__ */ b({
  __name: "TrxTimePicker",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    step: { default: 30 },
    placeholder: { default: "--:--" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1), n = I(() => {
      const d = [];
      for (let m = 0; m < 1440; m += o.step) {
        const $ = Math.floor(m / 60), g = m % 60;
        d.push(`${String($).padStart(2, "0")}:${String(g).padStart(2, "0")}`);
      }
      return d;
    });
    function c(d) {
      i("update:modelValue", d), a.value = !1;
    }
    function u() {
      i("update:modelValue", "");
    }
    function _(d) {
      const p = document.querySelector(".trx-timepicker");
      p && !p.contains(d.target) && (a.value = !1);
    }
    return G(() => document.addEventListener("click", _, !0)), Y(() => document.removeEventListener("click", _, !0)), (d, p) => (l(), r("div", {
      class: w(["trx-timepicker", { "trx-timepicker--invalid": t.invalid, "trx-timepicker--disabled": t.disabled }])
    }, [
      s("button", {
        class: "trx-timepicker__trigger",
        disabled: t.disabled,
        onClick: p[0] || (p[0] = (m) => a.value = !a.value)
      }, [
        p[1] || (p[1] = s("i", { class: "pi pi-clock trx-timepicker__icon" }, null, -1)),
        s("span", {
          class: w({ "trx-timepicker__placeholder": !t.modelValue })
        }, v(t.modelValue || t.placeholder), 3),
        t.modelValue ? (l(), r("i", {
          key: 0,
          class: "pi pi-times trx-timepicker__clear",
          onClick: j(u, ["stop"])
        })) : (l(), r("i", Ko))
      ], 8, Wo),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          a.value ? (l(), r("div", Jo, [
            (l(!0), r(D, null, y(n.value, (m) => (l(), r("button", {
              key: m,
              class: w(["trx-timepicker__option", { "trx-timepicker__option--active": m === t.modelValue }]),
              onClick: ($) => c(m)
            }, v(m), 11, Xo))), 128))
          ])) : f("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), jb = /* @__PURE__ */ L(Yo, [["__scopeId", "data-v-6f06dd60"]]), Qo = ["accept", "multiple"], Zo = { class: "trx-dropzone__label" }, ti = {
  key: 0,
  class: "trx-dropzone__hint"
}, ei = {
  key: 1,
  class: "trx-dropzone__hint"
}, si = /* @__PURE__ */ b({
  __name: "TrxFileDropzone",
  props: {
    accept: {},
    multiple: { type: Boolean },
    maxSize: {},
    disabled: { type: Boolean },
    label: { default: "Arraste arquivos aqui ou clique para selecionar" },
    hint: { default: "Todos os arquivos são aceitos" }
  },
  emits: ["files", "error"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1), n = E();
    function c($) {
      $.preventDefault(), o.disabled || (a.value = !0);
    }
    function u() {
      a.value = !1;
    }
    function _($) {
      var M;
      if ($.preventDefault(), a.value = !1, o.disabled) return;
      const g = Array.from(((M = $.dataTransfer) == null ? void 0 : M.files) ?? []);
      p(g);
    }
    function d($) {
      const g = Array.from($.target.files ?? []);
      p(g), n.value && (n.value.value = "");
    }
    function p($) {
      if (o.maxSize) {
        const g = $.filter((M) => M.size > o.maxSize * 1024 * 1024);
        if (g.length) {
          i("error", `Arquivo(s) excedem ${o.maxSize}MB: ${g.map((M) => M.name).join(", ")}`);
          return;
        }
      }
      !o.multiple && $.length > 1 && ($ = [$[0]]), i("files", $);
    }
    function m() {
      var $;
      o.disabled || ($ = n.value) == null || $.click();
    }
    return ($, g) => (l(), r("div", {
      class: w(["trx-dropzone", {
        "trx-dropzone--dragging": a.value,
        "trx-dropzone--disabled": t.disabled
      }]),
      onClick: m,
      onDragover: c,
      onDragleave: u,
      onDrop: _
    }, [
      s("input", {
        ref_key: "fileInput",
        ref: n,
        type: "file",
        class: "trx-dropzone__input",
        accept: t.accept,
        multiple: t.multiple,
        onChange: d
      }, null, 40, Qo),
      g[0] || (g[0] = s("i", { class: "pi pi-upload trx-dropzone__icon" }, null, -1)),
      s("p", Zo, v(t.label), 1),
      t.hint ? (l(), r("p", ti, v(t.hint), 1)) : f("", !0),
      t.maxSize ? (l(), r("p", ei, "Máx. " + v(t.maxSize) + "MB por arquivo", 1)) : f("", !0)
    ], 34));
  }
}), Wb = /* @__PURE__ */ L(si, [["__scopeId", "data-v-83847ba3"]]), ai = { class: "trx-address__row" }, li = { class: "trx-address__field trx-address__field--zip" }, ni = { class: "trx-address__label" }, ri = { key: 0 }, oi = { class: "trx-address__cep-wrap" }, ii = ["value", "disabled"], ci = {
  key: 0,
  class: "pi pi-spin pi-spinner trx-address__cep-icon"
}, ui = {
  key: 0,
  class: "trx-address__error"
}, di = { class: "trx-address__row trx-address__row--street" }, _i = { class: "trx-address__field" }, pi = ["value", "disabled"], mi = { class: "trx-address__field trx-address__field--number" }, vi = ["value", "disabled"], fi = { class: "trx-address__row" }, hi = { class: "trx-address__field" }, xi = ["value", "disabled"], $i = { class: "trx-address__field" }, bi = ["value", "disabled"], gi = { class: "trx-address__row" }, yi = { class: "trx-address__field" }, ki = ["value", "disabled"], wi = { class: "trx-address__field trx-address__field--state" }, Ti = ["value", "disabled"], Ci = /* @__PURE__ */ b({
  __name: "TrxAddressForm",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1), n = E("");
    function c(_, d) {
      i("update:modelValue", { ...o.modelValue, [_]: d });
    }
    async function u(_) {
      const d = _.replace(/\D/g, "");
      if (c("zipCode", _), d.length === 8) {
        a.value = !0, n.value = "";
        try {
          const m = await (await fetch(`https://viacep.com.br/ws/${d}/json/`)).json();
          if (m.erro) {
            n.value = "CEP não encontrado";
            return;
          }
          i("update:modelValue", {
            ...o.modelValue,
            zipCode: _,
            street: m.logradouro,
            district: m.bairro,
            city: m.localidade,
            state: m.uf
          });
        } catch {
          n.value = "Erro ao buscar CEP";
        } finally {
          a.value = !1;
        }
      }
    }
    return (_, d) => {
      var p, m, $, g, M, S, P;
      return l(), r("div", {
        class: w(["trx-address", { "trx-address--disabled": t.disabled }])
      }, [
        s("div", ai, [
          s("div", li, [
            s("label", ni, [
              d[7] || (d[7] = N("CEP ", -1)),
              t.required ? (l(), r("span", ri, "*")) : f("", !0)
            ]),
            s("div", oi, [
              s("input", {
                class: w(["trx-address__input", { "trx-address__input--error": n.value }]),
                type: "text",
                maxlength: "9",
                placeholder: "00000-000",
                value: ((p = t.modelValue) == null ? void 0 : p.zipCode) ?? "",
                disabled: t.disabled,
                onInput: d[0] || (d[0] = (B) => u(B.target.value))
              }, null, 42, ii),
              a.value ? (l(), r("i", ci)) : f("", !0)
            ]),
            n.value ? (l(), r("span", ui, v(n.value), 1)) : f("", !0)
          ])
        ]),
        s("div", di, [
          s("div", _i, [
            d[8] || (d[8] = s("label", { class: "trx-address__label" }, "Logradouro", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Rua, Avenida...",
              value: ((m = t.modelValue) == null ? void 0 : m.street) ?? "",
              disabled: t.disabled,
              onInput: d[1] || (d[1] = (B) => c("street", B.target.value))
            }, null, 40, pi)
          ]),
          s("div", mi, [
            d[9] || (d[9] = s("label", { class: "trx-address__label" }, "Número", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Nº",
              value: (($ = t.modelValue) == null ? void 0 : $.number) ?? "",
              disabled: t.disabled,
              onInput: d[2] || (d[2] = (B) => c("number", B.target.value))
            }, null, 40, vi)
          ])
        ]),
        s("div", fi, [
          s("div", hi, [
            d[10] || (d[10] = s("label", { class: "trx-address__label" }, "Complemento", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Apto, Sala...",
              value: ((g = t.modelValue) == null ? void 0 : g.complement) ?? "",
              disabled: t.disabled,
              onInput: d[3] || (d[3] = (B) => c("complement", B.target.value))
            }, null, 40, xi)
          ]),
          s("div", $i, [
            d[11] || (d[11] = s("label", { class: "trx-address__label" }, "Bairro", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Bairro",
              value: ((M = t.modelValue) == null ? void 0 : M.district) ?? "",
              disabled: t.disabled,
              onInput: d[4] || (d[4] = (B) => c("district", B.target.value))
            }, null, 40, bi)
          ])
        ]),
        s("div", gi, [
          s("div", yi, [
            d[12] || (d[12] = s("label", { class: "trx-address__label" }, "Cidade", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Cidade",
              value: ((S = t.modelValue) == null ? void 0 : S.city) ?? "",
              disabled: t.disabled,
              onInput: d[5] || (d[5] = (B) => c("city", B.target.value))
            }, null, 40, ki)
          ]),
          s("div", wi, [
            d[13] || (d[13] = s("label", { class: "trx-address__label" }, "UF", -1)),
            s("input", {
              class: "trx-address__input",
              type: "text",
              maxlength: "2",
              placeholder: "UF",
              value: ((P = t.modelValue) == null ? void 0 : P.state) ?? "",
              disabled: t.disabled,
              onInput: d[6] || (d[6] = (B) => c("state", B.target.value))
            }, null, 40, Ti)
          ])
        ])
      ], 2);
    };
  }
}), Kb = /* @__PURE__ */ L(Ci, [["__scopeId", "data-v-4f713181"]]), Si = { class: "trx-page-layout" }, Pi = {
  key: 0,
  class: "trx-page-layout__breadcrumb"
}, Vi = {
  key: 0,
  class: "trx-page-layout__sep"
}, Ii = ["href"], Ai = {
  key: 2,
  class: "trx-page-layout__crumb"
}, Bi = {
  key: 1,
  class: "trx-page-layout__header"
}, Mi = { class: "trx-page-layout__heading" }, Li = {
  key: 0,
  class: "trx-page-layout__skeleton trx-page-layout__skeleton--title"
}, Di = {
  key: 0,
  class: "trx-page-layout__title"
}, zi = {
  key: 1,
  class: "trx-page-layout__subtitle"
}, Ei = {
  key: 0,
  class: "trx-page-layout__actions"
}, Ri = { class: "trx-page-layout__content" }, Ni = {
  key: 2,
  class: "trx-page-layout__footer"
}, qi = /* @__PURE__ */ b({
  __name: "TrxPageLayout",
  props: {
    title: {},
    subtitle: {},
    loading: { type: Boolean },
    breadcrumbs: {}
  },
  setup(t) {
    return (e, o) => {
      var i;
      return l(), r("div", Si, [
        (i = t.breadcrumbs) != null && i.length ? (l(), r("div", Pi, [
          (l(!0), r(D, null, y(t.breadcrumbs, (a, n) => (l(), r(D, { key: n }, [
            n > 0 ? (l(), r("span", Vi, "/")) : f("", !0),
            a.to ? (l(), r("a", {
              key: 1,
              class: "trx-page-layout__crumb trx-page-layout__crumb--link",
              href: a.to
            }, v(a.label), 9, Ii)) : (l(), r("span", Ai, v(a.label), 1))
          ], 64))), 128))
        ])) : f("", !0),
        t.title || e.$slots.header ? (l(), r("div", Bi, [
          s("div", Mi, [
            t.loading ? (l(), r("div", Li)) : (l(), r(D, { key: 1 }, [
              t.title ? (l(), r("h1", Di, v(t.title), 1)) : f("", !0),
              t.subtitle ? (l(), r("p", zi, v(t.subtitle), 1)) : f("", !0)
            ], 64))
          ]),
          e.$slots.actions ? (l(), r("div", Ei, [
            k(e.$slots, "actions", {}, void 0, !0)
          ])) : f("", !0),
          k(e.$slots, "header", {}, void 0, !0)
        ])) : f("", !0),
        s("div", Ri, [
          k(e.$slots, "default", {}, void 0, !0)
        ]),
        e.$slots.footer ? (l(), r("div", Ni, [
          k(e.$slots, "footer", {}, void 0, !0)
        ])) : f("", !0)
      ]);
    };
  }
}), Jb = /* @__PURE__ */ L(qi, [["__scopeId", "data-v-2b3d5429"]]), Fi = { class: "trx-tabs-router" }, Oi = {
  class: "trx-tabs-router__nav",
  role: "tablist"
}, Hi = ["disabled", "aria-selected", "onClick"], Ui = {
  key: 1,
  class: "trx-tabs-router__badge"
}, Gi = {
  class: "trx-tabs-router__content",
  role: "tabpanel"
}, ji = /* @__PURE__ */ b({
  __name: "TrxTabsRouter",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = e;
    return (i, a) => (l(), r("div", Fi, [
      s("nav", Oi, [
        (l(!0), r(D, null, y(t.tabs, (n) => (l(), r("button", {
          key: n.key,
          class: w(["trx-tabs-router__tab", { "trx-tabs-router__tab--active": t.modelValue === n.key }]),
          disabled: n.disabled,
          role: "tab",
          "aria-selected": t.modelValue === n.key,
          onClick: (c) => !n.disabled && o("update:modelValue", n.key)
        }, [
          n.icon ? (l(), r("i", {
            key: 0,
            class: w(n.icon)
          }, null, 2)) : f("", !0),
          s("span", null, v(n.label), 1),
          n.badge !== void 0 ? (l(), r("span", Ui, v(n.badge), 1)) : f("", !0)
        ], 10, Hi))), 128))
      ]),
      s("div", Gi, [
        k(i.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Xb = /* @__PURE__ */ L(ji, [["__scopeId", "data-v-e69a3f91"]]), Wi = { class: "trx-mobile-nav" }, Ki = ["onClick"], Ji = { class: "trx-mobile-nav__icon-wrap" }, Xi = {
  key: 0,
  class: "trx-mobile-nav__badge"
}, Yi = { class: "trx-mobile-nav__label" }, Qi = /* @__PURE__ */ b({
  __name: "TrxMobileNav",
  props: {
    items: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: e }) {
    const o = e;
    function i(a) {
      o("update:modelValue", a.key), o("select", a);
    }
    return (a, n) => (l(), r("nav", Wi, [
      (l(!0), r(D, null, y(t.items, (c) => (l(), r("button", {
        key: c.key,
        class: w(["trx-mobile-nav__item", { "trx-mobile-nav__item--active": t.modelValue === c.key }]),
        onClick: (u) => i(c)
      }, [
        s("div", Ji, [
          s("i", {
            class: w(c.icon)
          }, null, 2),
          c.badge ? (l(), r("span", Xi, v(c.badge > 99 ? "99+" : c.badge), 1)) : f("", !0)
        ]),
        s("span", Yi, v(c.label), 1)
      ], 10, Ki))), 128))
    ]));
  }
}), Yb = /* @__PURE__ */ L(Qi, [["__scopeId", "data-v-5b0a32c4"]]), Zi = { class: "trx-user-menu" }, tc = ["src", "alt"], ec = {
  key: 1,
  class: "trx-user-menu__initials"
}, sc = { class: "trx-user-menu__info" }, ac = { class: "trx-user-menu__name" }, lc = {
  key: 0,
  class: "trx-user-menu__role"
}, nc = {
  key: 0,
  class: "trx-user-menu__panel"
}, rc = {
  key: 0,
  class: "trx-user-menu__email"
}, oc = {
  key: 0,
  class: "trx-user-menu__sep"
}, ic = ["onClick"], cc = /* @__PURE__ */ b({
  __name: "TrxUserMenu",
  props: {
    name: {},
    email: {},
    avatar: {},
    role: {},
    items: { default: () => [] }
  },
  emits: ["select", "logout"],
  setup(t, { emit: e }) {
    const o = e, i = E(!1);
    function a(u) {
      i.value = !1, u.key === "logout" ? o("logout") : o("select", u.key);
    }
    const n = (u) => u.split(" ").map((_) => _[0]).slice(0, 2).join("").toUpperCase();
    function c(u) {
      const _ = document.querySelector(".trx-user-menu");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return G(() => document.addEventListener("click", c, !0)), Y(() => document.removeEventListener("click", c, !0)), (u, _) => (l(), r("div", Zi, [
      s("button", {
        class: "trx-user-menu__trigger",
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        t.avatar ? (l(), r("img", {
          key: 0,
          src: t.avatar,
          alt: t.name,
          class: "trx-user-menu__avatar"
        }, null, 8, tc)) : (l(), r("span", ec, v(n(t.name)), 1)),
        s("div", sc, [
          s("span", ac, v(t.name), 1),
          t.role ? (l(), r("span", lc, v(t.role), 1)) : f("", !0)
        ]),
        s("i", {
          class: w(["pi pi-chevron-down trx-user-menu__arrow", { "trx-user-menu__arrow--open": i.value }])
        }, null, 2)
      ]),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          i.value ? (l(), r("div", nc, [
            t.email ? (l(), r("div", rc, v(t.email), 1)) : f("", !0),
            (l(!0), r(D, null, y(t.items, (d) => (l(), r(D, {
              key: d.key
            }, [
              d.separator ? (l(), r("hr", oc)) : (l(), r("button", {
                key: 1,
                class: w(["trx-user-menu__item", { "trx-user-menu__item--danger": d.danger }]),
                onClick: (p) => a(d)
              }, [
                d.icon ? (l(), r("i", {
                  key: 0,
                  class: w(d.icon)
                }, null, 2)) : f("", !0),
                s("span", null, v(d.label), 1)
              ], 10, ic))
            ], 64))), 128))
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Qb = /* @__PURE__ */ L(cc, [["__scopeId", "data-v-919df4aa"]]), uc = { class: "trx-profile-card" }, dc = {
  key: 0,
  class: "trx-profile-card__loading"
}, _c = { class: "trx-profile-card__avatar-wrap" }, pc = ["src", "alt"], mc = {
  key: 1,
  class: "trx-profile-card__initials"
}, vc = { class: "trx-profile-card__name" }, fc = {
  key: 0,
  class: "trx-profile-card__role"
}, hc = {
  key: 1,
  class: "trx-profile-card__email"
}, xc = { class: "trx-profile-card__status" }, $c = {
  key: 2,
  class: "trx-profile-card__stats"
}, bc = { class: "trx-profile-card__stat-value" }, gc = { class: "trx-profile-card__stat-label" }, yc = {
  key: 3,
  class: "trx-profile-card__actions"
}, kc = /* @__PURE__ */ b({
  __name: "TrxProfileCard",
  props: {
    name: {},
    email: {},
    role: {},
    avatar: {},
    status: { default: "offline" },
    stats: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const e = {
      online: "Online",
      offline: "Offline",
      busy: "Ocupado",
      away: "Ausente"
    }, o = {
      online: "var(--trx-success-color)",
      offline: "var(--trx-text-secondary)",
      busy: "var(--trx-danger-color)",
      away: "var(--trx-warning-color)"
    };
    function i(a) {
      return a.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    }
    return (a, n) => {
      var c;
      return l(), r("div", uc, [
        t.loading ? (l(), r("div", dc, [...n[0] || (n[0] = [
          s("div", { class: "trx-profile-card__skel trx-profile-card__skel--avatar" }, null, -1),
          s("div", { class: "trx-profile-card__skel trx-profile-card__skel--name" }, null, -1),
          s("div", { class: "trx-profile-card__skel trx-profile-card__skel--role" }, null, -1)
        ])])) : (l(), r(D, { key: 1 }, [
          s("div", _c, [
            t.avatar ? (l(), r("img", {
              key: 0,
              src: t.avatar,
              alt: t.name,
              class: "trx-profile-card__avatar"
            }, null, 8, pc)) : (l(), r("span", mc, v(i(t.name)), 1)),
            s("span", {
              class: "trx-profile-card__status-dot",
              style: z({ background: o[t.status ?? "offline"] })
            }, null, 4)
          ]),
          s("h3", vc, v(t.name), 1),
          t.role ? (l(), r("p", fc, v(t.role), 1)) : f("", !0),
          t.email ? (l(), r("p", hc, v(t.email), 1)) : f("", !0),
          s("div", xc, [
            s("span", {
              class: "trx-profile-card__status-label",
              style: z({ color: o[t.status ?? "offline"] })
            }, v(e[t.status ?? "offline"]), 5)
          ]),
          (c = t.stats) != null && c.length ? (l(), r("div", $c, [
            (l(!0), r(D, null, y(t.stats, (u) => (l(), r("div", {
              key: u.label,
              class: "trx-profile-card__stat"
            }, [
              s("span", bc, v(u.value), 1),
              s("span", gc, v(u.label), 1)
            ]))), 128))
          ])) : f("", !0),
          a.$slots.actions ? (l(), r("div", yc, [
            k(a.$slots, "actions", {}, void 0, !0)
          ])) : f("", !0)
        ], 64))
      ]);
    };
  }
}), Zb = /* @__PURE__ */ L(kc, [["__scopeId", "data-v-b3cb7a45"]]), wc = /* @__PURE__ */ b({
  __name: "TrxRoleBadge",
  props: {
    role: {},
    size: { default: "md" },
    label: {}
  },
  setup(t) {
    const e = {
      admin: { label: "Admin", color: "var(--trx-danger-color)" },
      manager: { label: "Gerente", color: "var(--trx-warning-color)" },
      supervisor: { label: "Supervisor", color: "var(--trx-info-color, #3b82f6)" },
      agent: { label: "Agente", color: "var(--trx-accent-color)" },
      viewer: { label: "Visualizador", color: "var(--trx-text-secondary)" }
    }, o = t, i = e[o.role] ?? { label: o.role, color: "var(--trx-text-secondary)" }, a = o.label ?? i.label;
    return (n, c) => (l(), r("span", {
      class: w(["trx-role-badge", `trx-role-badge--${t.size}`]),
      style: z({ "--role-color": T(i).color })
    }, v(T(a)), 7));
  }
}), tg = /* @__PURE__ */ L(wc, [["__scopeId", "data-v-fa2938f0"]]), eg = /* @__PURE__ */ b({
  __name: "TrxPermissionGate",
  props: {
    permission: {},
    userPermissions: {},
    operator: { default: "or" }
  },
  setup(t) {
    const e = t, o = I(() => {
      const i = Array.isArray(e.permission) ? e.permission : [e.permission];
      return e.operator === "and" ? i.every((a) => e.userPermissions.includes(a)) : i.some((a) => e.userPermissions.includes(a));
    });
    return (i, a) => o.value ? k(i.$slots, "default", { key: 0 }) : k(i.$slots, "fallback", { key: 1 });
  }
}), Tc = { class: "trx-notif-bell" }, Cc = {
  key: 0,
  class: "trx-notif-bell__count"
}, Sc = {
  key: 0,
  class: "trx-notif-bell__panel"
}, Pc = { class: "trx-notif-bell__header" }, Vc = {
  key: 0,
  class: "trx-notif-bell__loading"
}, Ic = {
  key: 1,
  class: "trx-notif-bell__empty"
}, Ac = {
  key: 2,
  class: "trx-notif-bell__list"
}, Bc = ["onClick"], Mc = { class: "trx-notif-bell__item-content" }, Lc = { class: "trx-notif-bell__item-title" }, Dc = {
  key: 0,
  class: "trx-notif-bell__item-body"
}, zc = {
  key: 1,
  class: "trx-notif-bell__item-time"
}, Ec = {
  key: 0,
  class: "trx-notif-bell__item-dot"
}, Rc = /* @__PURE__ */ b({
  __name: "TrxNotificationBell",
  props: {
    items: { default: () => [] },
    count: {},
    loading: { type: Boolean }
  },
  emits: ["read", "read-all", "open"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1), n = () => o.count ?? o.items.filter((p) => !p.read).length, c = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      danger: "pi pi-times-circle"
    }, u = {
      info: "var(--trx-info-color, #3b82f6)",
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)"
    };
    function _() {
      a.value = !a.value, a.value && i("open");
    }
    function d(p) {
      const m = document.querySelector(".trx-notif-bell");
      m && !m.contains(p.target) && (a.value = !1);
    }
    return G(() => document.addEventListener("click", d, !0)), Y(() => document.removeEventListener("click", d, !0)), (p, m) => (l(), r("div", Tc, [
      s("button", {
        class: w(["trx-notif-bell__btn", { "trx-notif-bell__btn--active": a.value }]),
        onClick: _
      }, [
        m[1] || (m[1] = s("i", { class: "pi pi-bell" }, null, -1)),
        n() > 0 ? (l(), r("span", Cc, v(n() > 99 ? "99+" : n()), 1)) : f("", !0)
      ], 2),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          a.value ? (l(), r("div", Sc, [
            s("div", Pc, [
              m[2] || (m[2] = s("span", { class: "trx-notif-bell__title" }, "Notificações", -1)),
              n() > 0 ? (l(), r("button", {
                key: 0,
                class: "trx-notif-bell__read-all",
                onClick: m[0] || (m[0] = ($) => i("read-all"))
              }, " Marcar todas como lidas ")) : f("", !0)
            ]),
            t.loading ? (l(), r("div", Vc, [...m[3] || (m[3] = [
              s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : t.items.length ? (l(), r("div", Ac, [
              (l(!0), r(D, null, y(t.items, ($) => (l(), r("div", {
                key: $.id,
                class: w(["trx-notif-bell__item", { "trx-notif-bell__item--unread": !$.read }]),
                onClick: (g) => i("read", $.id)
              }, [
                s("div", {
                  class: "trx-notif-bell__item-icon",
                  style: z({ color: u[$.type ?? "info"] })
                }, [
                  s("i", {
                    class: w($.icon ?? c[$.type ?? "info"])
                  }, null, 2)
                ], 4),
                s("div", Mc, [
                  s("p", Lc, v($.title), 1),
                  $.body ? (l(), r("p", Dc, v($.body), 1)) : f("", !0),
                  $.time ? (l(), r("span", zc, v($.time), 1)) : f("", !0)
                ]),
                $.read ? f("", !0) : (l(), r("div", Ec))
              ], 10, Bc))), 128))
            ])) : (l(), r("div", Ic, [...m[4] || (m[4] = [
              s("i", { class: "pi pi-bell-slash" }, null, -1),
              s("span", null, "Nenhuma notificação", -1)
            ])]))
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), sg = /* @__PURE__ */ L(Rc, [["__scopeId", "data-v-e26fa7e6"]]), Nc = {
  key: 0,
  class: "trx-conn-status__label"
}, qc = /* @__PURE__ */ b({
  __name: "TrxConnectionStatus",
  props: {
    status: {},
    label: {},
    showLabel: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = I(() => ({
      connected: { label: "Conectado", color: "var(--trx-success-color)", icon: "pi pi-wifi", pulse: !1 },
      disconnected: { label: "Desconectado", color: "var(--trx-danger-color)", icon: "pi pi-times-circle", pulse: !1 },
      connecting: { label: "Conectando...", color: "var(--trx-warning-color)", icon: "pi pi-spin pi-spinner", pulse: !0 },
      error: { label: "Erro", color: "var(--trx-danger-color)", icon: "pi pi-exclamation-triangle", pulse: !1 }
    })[e.status]), i = I(() => e.label ?? o.value.label);
    return (a, n) => (l(), r("div", {
      class: "trx-conn-status",
      style: z({ "--conn-color": o.value.color })
    }, [
      s("span", {
        class: w(["trx-conn-status__dot", { "trx-conn-status__dot--pulse": o.value.pulse }])
      }, null, 2),
      s("i", {
        class: w(["trx-conn-status__icon", o.value.icon])
      }, null, 2),
      t.showLabel ? (l(), r("span", Nc, v(i.value), 1)) : f("", !0)
    ], 4));
  }
}), ag = /* @__PURE__ */ L(qc, [["__scopeId", "data-v-da8341e1"]]), Fc = { class: "trx-confirm-btn" }, Oc = {
  key: "idle",
  class: "trx-confirm-btn__idle"
}, Hc = ["disabled"], Uc = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Gc = {
  key: "confirm",
  class: "trx-confirm-btn__confirm-row"
}, jc = /* @__PURE__ */ b({
  __name: "TrxConfirmButton",
  props: {
    label: { default: "Excluir" },
    confirmLabel: { default: "Confirmar" },
    cancelLabel: { default: "Cancelar" },
    variant: { default: "danger" },
    icon: {},
    loading: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["confirm"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1);
    let n;
    function c() {
      o.disabled || o.loading || (a.value = !0, n = setTimeout(() => {
        a.value = !1;
      }, 3e3));
    }
    function u() {
      clearTimeout(n), a.value = !1, i("confirm");
    }
    function _() {
      clearTimeout(n), a.value = !1;
    }
    return (d, p) => (l(), r("div", Fc, [
      O(U, {
        name: "trx-confirm-swap",
        mode: "out-in"
      }, {
        default: C(() => [
          a.value ? (l(), r("div", Gc, [
            p[0] || (p[0] = s("span", { class: "trx-confirm-btn__question" }, "Tem certeza?", -1)),
            s("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--confirm",
              onClick: u
            }, v(t.confirmLabel), 1),
            s("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--cancel",
              onClick: _
            }, v(t.cancelLabel), 1)
          ])) : (l(), r("div", Oc, [
            s("button", {
              class: w(["trx-confirm-btn__btn", `trx-confirm-btn__btn--${t.variant}`]),
              disabled: t.disabled || t.loading,
              onClick: c
            }, [
              t.loading ? (l(), r("i", Uc)) : t.icon ? (l(), r("i", {
                key: 1,
                class: w(t.icon)
              }, null, 2)) : f("", !0),
              s("span", null, v(t.label), 1)
            ], 10, Hc)
          ]))
        ]),
        _: 1
      })
    ]));
  }
}), lg = /* @__PURE__ */ L(jc, [["__scopeId", "data-v-8d2f9f6d"]]), Wc = { key: 1 }, Kc = /* @__PURE__ */ b({
  __name: "TrxSaveIndicator",
  props: {
    state: {},
    label: {},
    errorMessage: {}
  },
  setup(t) {
    const e = t, o = I(() => ({
      idle: { icon: "", text: e.label ?? "", color: "var(--trx-text-secondary)" },
      saving: { icon: "pi pi-spin pi-spinner", text: "Salvando...", color: "var(--trx-text-secondary)" },
      saved: { icon: "pi pi-check-circle", text: e.label ?? "Salvo", color: "var(--trx-success-color)" },
      error: { icon: "pi pi-exclamation-circle", text: e.errorMessage ?? "Erro ao salvar", color: "var(--trx-danger-color)" }
    })[e.state]);
    return (i, a) => (l(), V(U, {
      name: "trx-save-fade",
      mode: "out-in"
    }, {
      default: C(() => [
        t.state !== "idle" ? (l(), r("span", {
          key: t.state,
          class: "trx-save-indicator",
          style: z({ color: o.value.color })
        }, [
          o.value.icon ? (l(), r("i", {
            key: 0,
            class: w(o.value.icon)
          }, null, 2)) : f("", !0),
          o.value.text ? (l(), r("span", Wc, v(o.value.text), 1)) : f("", !0)
        ], 4)) : f("", !0)
      ]),
      _: 1
    }));
  }
}), ng = /* @__PURE__ */ L(Kc, [["__scopeId", "data-v-74d4ab40"]]), Jc = { class: "trx-chat-bubble__content" }, Xc = {
  key: 0,
  class: "trx-chat-bubble__author"
}, Yc = { class: "trx-chat-bubble__body" }, Qc = {
  key: 0,
  class: "trx-chat-bubble__text"
}, Zc = ["src", "alt"], tu = ["src"], eu = ["href"], su = { class: "trx-chat-bubble__meta" }, au = {
  key: 0,
  class: "trx-chat-bubble__time"
}, lu = /* @__PURE__ */ b({
  __name: "TrxChatBubble",
  props: {
    message: {},
    author: {},
    time: {},
    direction: { default: "in" },
    status: {},
    type: { default: "text" },
    fileUrl: {},
    fileName: {}
  },
  setup(t) {
    const e = {
      sending: "pi pi-clock",
      sent: "pi pi-check",
      delivered: "pi pi-check",
      read: "pi pi-check-square",
      error: "pi pi-exclamation-triangle"
    }, o = {
      sending: "var(--trx-text-secondary)",
      sent: "var(--trx-text-secondary)",
      delivered: "var(--trx-text-secondary)",
      read: "var(--trx-accent-color)",
      error: "var(--trx-danger-color)"
    };
    return (i, a) => (l(), r("div", {
      class: w(["trx-chat-bubble", `trx-chat-bubble--${t.direction}`])
    }, [
      s("div", Jc, [
        t.author && t.direction === "in" ? (l(), r("span", Xc, v(t.author), 1)) : f("", !0),
        s("div", Yc, [
          k(i.$slots, "default", {}, () => [
            t.type === "text" ? (l(), r("p", Qc, v(t.message), 1)) : t.type === "image" && t.fileUrl ? (l(), r("img", {
              key: 1,
              class: "trx-chat-bubble__image",
              src: t.fileUrl,
              alt: t.fileName
            }, null, 8, Zc)) : t.type === "audio" && t.fileUrl ? (l(), r("audio", {
              key: 2,
              class: "trx-chat-bubble__audio",
              src: t.fileUrl,
              controls: ""
            }, null, 8, tu)) : t.type === "file" ? (l(), r("a", {
              key: 3,
              class: "trx-chat-bubble__file",
              href: t.fileUrl,
              target: "_blank",
              rel: "noopener"
            }, [
              a[0] || (a[0] = s("i", { class: "pi pi-file" }, null, -1)),
              s("span", null, v(t.fileName ?? "Arquivo"), 1)
            ], 8, eu)) : f("", !0)
          ], !0)
        ]),
        s("div", su, [
          t.time ? (l(), r("span", au, v(t.time), 1)) : f("", !0),
          t.status && t.direction === "out" ? (l(), r("i", {
            key: 1,
            class: w([e[t.status], "trx-chat-bubble__status"]),
            style: z({ color: o[t.status] })
          }, null, 6)) : f("", !0)
        ])
      ])
    ], 2));
  }
}), nu = /* @__PURE__ */ L(lu, [["__scopeId", "data-v-4e61c314"]]), ru = { class: "trx-chat-window" }, ou = {
  key: 0,
  class: "trx-chat-window__header"
}, iu = { class: "trx-chat-window__avatar" }, cu = ["src", "alt"], uu = { key: 1 }, du = { class: "trx-chat-window__contact-info" }, _u = { class: "trx-chat-window__contact-name" }, pu = {
  key: 0,
  class: "trx-chat-window__contact-status"
}, mu = {
  key: 0,
  class: "trx-chat-window__loading"
}, vu = {
  key: 1,
  class: "trx-chat-window__empty"
}, fu = { class: "trx-chat-window__composer" }, hu = ["disabled"], xu = ["placeholder", "disabled"], $u = ["disabled"], bu = /* @__PURE__ */ b({
  __name: "TrxChatWindow",
  props: {
    messages: { default: () => [] },
    contact: {},
    loading: { type: Boolean },
    placeholder: { default: "Digite uma mensagem..." },
    disabled: { type: Boolean }
  },
  emits: ["send", "attach"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(""), n = E();
    function c() {
      const p = a.value.trim();
      !p || o.disabled || (i("send", p), a.value = "");
    }
    function u(p) {
      p.key === "Enter" && !p.shiftKey && (p.preventDefault(), c());
    }
    function _() {
      lt(() => {
        n.value && (n.value.scrollTop = n.value.scrollHeight);
      });
    }
    Q(() => {
      var p;
      return (p = o.messages) == null ? void 0 : p.length;
    }, _);
    function d(p) {
      return p.split(" ").map((m) => m[0]).slice(0, 2).join("").toUpperCase();
    }
    return (p, m) => (l(), r("div", ru, [
      t.contact ? (l(), r("div", ou, [
        s("div", iu, [
          t.contact.avatar ? (l(), r("img", {
            key: 0,
            src: t.contact.avatar,
            alt: t.contact.name
          }, null, 8, cu)) : (l(), r("span", uu, v(d(t.contact.name)), 1))
        ]),
        s("div", du, [
          s("span", _u, v(t.contact.name), 1),
          t.contact.status ?? t.contact.subtitle ? (l(), r("span", pu, v(t.contact.status ?? t.contact.subtitle), 1)) : f("", !0)
        ]),
        k(p.$slots, "header-actions", {}, void 0, !0)
      ])) : f("", !0),
      s("div", {
        ref_key: "messagesEl",
        ref: n,
        class: "trx-chat-window__messages"
      }, [
        t.loading ? (l(), r("div", mu, [...m[2] || (m[2] = [
          s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : t.messages.length ? f("", !0) : (l(), r("div", vu, [...m[3] || (m[3] = [
          s("i", { class: "pi pi-comments" }, null, -1),
          s("span", null, "Nenhuma mensagem ainda", -1)
        ])])),
        (l(!0), r(D, null, y(t.messages, ($) => (l(), V(nu, wt({
          key: $.id
        }, { ref_for: !0 }, $), null, 16))), 128))
      ], 512),
      s("div", fu, [
        s("button", {
          class: "trx-chat-window__attach",
          onClick: m[0] || (m[0] = ($) => i("attach")),
          title: "Anexar arquivo",
          disabled: t.disabled
        }, [...m[4] || (m[4] = [
          s("i", { class: "pi pi-paperclip" }, null, -1)
        ])], 8, hu),
        et(s("textarea", {
          class: "trx-chat-window__input",
          placeholder: t.placeholder,
          "onUpdate:modelValue": m[1] || (m[1] = ($) => a.value = $),
          rows: "1",
          disabled: t.disabled,
          onKeydown: u
        }, null, 40, xu), [
          [nt, a.value]
        ]),
        s("button", {
          class: "trx-chat-window__send",
          disabled: !a.value.trim() || t.disabled,
          onClick: c,
          title: "Enviar"
        }, [...m[5] || (m[5] = [
          s("i", { class: "pi pi-send" }, null, -1)
        ])], 8, $u)
      ])
    ]));
  }
}), rg = /* @__PURE__ */ L(bu, [["__scopeId", "data-v-5f901218"]]), gu = ["title"], yu = { key: 0 }, ku = /* @__PURE__ */ b({
  __name: "TrxChannelBadge",
  props: {
    channel: {},
    size: { default: "md" },
    showLabel: { type: Boolean, default: !0 },
    iconOnly: { type: Boolean }
  },
  setup(t) {
    const e = {
      whatsapp: { label: "WhatsApp", icon: "pi pi-whatsapp", color: "#25D366" },
      phone: { label: "Telefone", icon: "pi pi-phone", color: "var(--trx-accent-color)" },
      email: { label: "E-mail", icon: "pi pi-envelope", color: "#3b82f6" },
      sms: { label: "SMS", icon: "pi pi-mobile", color: "#8b5cf6" },
      chat: { label: "Chat", icon: "pi pi-comments", color: "#06b6d4" },
      telegram: { label: "Telegram", icon: "pi pi-telegram", color: "#0088CC" },
      instagram: { label: "Instagram", icon: "pi pi-instagram", color: "#E1306C" },
      messenger: { label: "Messenger", icon: "pi pi-facebook", color: "#0099FF" }
    }, o = t, i = e[o.channel] ?? { label: o.channel, icon: "pi pi-question-circle", color: "var(--trx-text-secondary)" };
    return (a, n) => (l(), r("span", {
      class: w(["trx-channel-badge", `trx-channel-badge--${t.size}`]),
      style: z({ "--ch-color": T(i).color }),
      title: T(i).label
    }, [
      s("i", {
        class: w(T(i).icon)
      }, null, 2),
      !t.iconOnly && t.showLabel ? (l(), r("span", yu, v(T(i).label), 1)) : f("", !0)
    ], 14, gu));
  }
}), ct = /* @__PURE__ */ L(ku, [["__scopeId", "data-v-90daa003"]]), wu = { class: "trx-contact-card" }, Tu = {
  key: 0,
  class: "trx-contact-card__skeleton"
}, Cu = { class: "trx-contact-card__left" }, Su = { class: "trx-contact-card__avatar" }, Pu = ["src", "alt"], Vu = { key: 1 }, Iu = { class: "trx-contact-card__info" }, Au = { class: "trx-contact-card__name" }, Bu = {
  key: 0,
  class: "trx-contact-card__detail"
}, Mu = {
  key: 1,
  class: "trx-contact-card__detail"
}, Lu = {
  key: 2,
  class: "trx-contact-card__meta"
}, Du = {
  key: 1,
  class: "trx-contact-card__last"
}, zu = { class: "trx-contact-card__actions" }, Eu = /* @__PURE__ */ b({
  __name: "TrxContactCard",
  props: {
    name: {},
    phone: {},
    email: {},
    channel: {},
    status: {},
    lastContact: {},
    avatar: {},
    loading: { type: Boolean }
  },
  emits: ["call", "chat", "view"],
  setup(t, { emit: e }) {
    const o = e;
    function i(a) {
      return a.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    }
    return (a, n) => (l(), r("div", wu, [
      t.loading ? (l(), r("div", Tu, [...n[3] || (n[3] = [
        s("div", { class: "trx-contact-card__skel trx-contact-card__skel--avatar" }, null, -1),
        s("div", { class: "trx-contact-card__skel-info" }, [
          s("div", { class: "trx-contact-card__skel trx-contact-card__skel--name" }),
          s("div", { class: "trx-contact-card__skel trx-contact-card__skel--sub" })
        ], -1)
      ])])) : (l(), r(D, { key: 1 }, [
        s("div", Cu, [
          s("div", Su, [
            t.avatar ? (l(), r("img", {
              key: 0,
              src: t.avatar,
              alt: t.name
            }, null, 8, Pu)) : (l(), r("span", Vu, v(i(t.name)), 1))
          ]),
          s("div", Iu, [
            s("span", Au, v(t.name), 1),
            t.phone ? (l(), r("span", Bu, [
              n[4] || (n[4] = s("i", { class: "pi pi-phone" }, null, -1)),
              N(" " + v(t.phone), 1)
            ])) : f("", !0),
            t.email ? (l(), r("span", Mu, [
              n[5] || (n[5] = s("i", { class: "pi pi-envelope" }, null, -1)),
              N(" " + v(t.email), 1)
            ])) : f("", !0),
            t.channel || t.lastContact ? (l(), r("div", Lu, [
              t.channel ? (l(), V(ct, {
                key: 0,
                channel: t.channel,
                size: "sm"
              }, null, 8, ["channel"])) : f("", !0),
              t.lastContact ? (l(), r("span", Du, v(t.lastContact), 1)) : f("", !0)
            ])) : f("", !0)
          ])
        ]),
        s("div", zu, [
          t.phone ? (l(), r("button", {
            key: 0,
            class: "trx-contact-card__btn",
            title: "Ligar",
            onClick: n[0] || (n[0] = (c) => o("call"))
          }, [...n[6] || (n[6] = [
            s("i", { class: "pi pi-phone" }, null, -1)
          ])])) : f("", !0),
          s("button", {
            class: "trx-contact-card__btn",
            title: "Chat",
            onClick: n[1] || (n[1] = (c) => o("chat"))
          }, [...n[7] || (n[7] = [
            s("i", { class: "pi pi-comments" }, null, -1)
          ])]),
          s("button", {
            class: "trx-contact-card__btn",
            title: "Ver contato",
            onClick: n[2] || (n[2] = (c) => o("view"))
          }, [...n[8] || (n[8] = [
            s("i", { class: "pi pi-external-link" }, null, -1)
          ])])
        ])
      ], 64))
    ]));
  }
}), og = /* @__PURE__ */ L(Eu, [["__scopeId", "data-v-3bd57308"]]), Ru = { class: "trx-ticket-card__top" }, Nu = { class: "trx-ticket-card__id" }, qu = { class: "trx-ticket-card__badges" }, Fu = ["title"], Ou = { class: "trx-ticket-card__title" }, Hu = { class: "trx-ticket-card__meta" }, Uu = {
  key: 0,
  class: "trx-ticket-card__meta-item"
}, Gu = {
  key: 1,
  class: "trx-ticket-card__meta-item"
}, ju = {
  key: 2,
  class: "trx-ticket-card__meta-item trx-ticket-card__meta-item--time"
}, Wu = /* @__PURE__ */ b({
  __name: "TrxTicketCard",
  props: {
    id: {},
    title: {},
    status: { default: "open" },
    priority: { default: "medium" },
    channel: {},
    agent: {},
    customer: {},
    createdAt: {},
    updatedAt: {}
  },
  emits: ["view", "assign"],
  setup(t, { emit: e }) {
    const o = {
      open: { label: "Aberto", color: "var(--trx-accent-color)" },
      pending: { label: "Pendente", color: "var(--trx-warning-color)" },
      resolved: { label: "Resolvido", color: "var(--trx-success-color)" },
      closed: { label: "Fechado", color: "var(--trx-text-secondary)" }
    }, i = {
      low: { label: "Baixa", color: "var(--trx-text-secondary)", icon: "pi pi-minus" },
      medium: { label: "Média", color: "var(--trx-warning-color)", icon: "pi pi-equals" },
      high: { label: "Alta", color: "var(--trx-danger-color)", icon: "pi pi-arrow-up" },
      urgent: { label: "Urgente", color: "var(--trx-danger-color)", icon: "pi pi-exclamation-triangle" }
    }, a = e;
    return (n, c) => (l(), r("div", {
      class: "trx-ticket-card",
      onClick: c[3] || (c[3] = (u) => a("view"))
    }, [
      s("div", Ru, [
        s("span", Nu, "#" + v(t.id), 1),
        s("div", qu, [
          t.channel ? (l(), V(ct, {
            key: 0,
            channel: t.channel,
            size: "sm",
            "show-label": !1,
            "icon-only": ""
          }, null, 8, ["channel"])) : f("", !0),
          s("span", {
            class: "trx-ticket-card__status",
            style: z({ "--st-color": o[t.status ?? "open"].color })
          }, v(o[t.status ?? "open"].label), 5),
          s("span", {
            class: "trx-ticket-card__priority",
            style: z({ "--pr-color": i[t.priority ?? "medium"].color }),
            title: i[t.priority ?? "medium"].label
          }, [
            s("i", {
              class: w(i[t.priority ?? "medium"].icon)
            }, null, 2)
          ], 12, Fu)
        ])
      ]),
      s("p", Ou, v(t.title), 1),
      s("div", Hu, [
        t.customer ? (l(), r("span", Uu, [
          c[4] || (c[4] = s("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.customer), 1)
        ])) : f("", !0),
        t.agent ? (l(), r("span", Gu, [
          c[5] || (c[5] = s("i", { class: "pi pi-headphones" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : f("", !0),
        t.updatedAt ?? t.createdAt ? (l(), r("span", ju, [
          c[6] || (c[6] = s("i", { class: "pi pi-clock" }, null, -1)),
          N(" " + v(t.updatedAt ?? t.createdAt), 1)
        ])) : f("", !0)
      ]),
      s("div", {
        class: "trx-ticket-card__actions",
        onClick: c[2] || (c[2] = j(() => {
        }, ["stop"]))
      }, [
        k(n.$slots, "actions", {}, () => [
          s("button", {
            class: "trx-ticket-card__btn",
            onClick: c[0] || (c[0] = (u) => a("view"))
          }, [...c[7] || (c[7] = [
            s("i", { class: "pi pi-eye" }, null, -1),
            N(" Ver", -1)
          ])]),
          s("button", {
            class: "trx-ticket-card__btn",
            onClick: c[1] || (c[1] = (u) => a("assign"))
          }, [...c[8] || (c[8] = [
            s("i", { class: "pi pi-user-plus" }, null, -1),
            N(" Atribuir", -1)
          ])])
        ], !0)
      ])
    ]));
  }
}), ig = /* @__PURE__ */ L(Wu, [["__scopeId", "data-v-c88df6d1"]]), Ku = { class: "trx-call-history" }, Ju = {
  key: 0,
  class: "trx-call-history__empty"
}, Xu = {
  key: 1,
  class: "trx-call-history__empty"
}, Yu = {
  key: 2,
  class: "trx-call-history__list"
}, Qu = ["onClick"], Zu = { class: "trx-call-history__info" }, td = { class: "trx-call-history__name" }, ed = { class: "trx-call-history__sub" }, sd = { class: "trx-call-history__meta" }, ad = { class: "trx-call-history__duration" }, ld = { class: "trx-call-history__time" }, nd = ["onClick"], rd = ["onClick"], od = /* @__PURE__ */ b({
  __name: "TrxCallHistory",
  props: {
    calls: { default: () => [] },
    loading: { type: Boolean },
    showRecording: { type: Boolean, default: !0 }
  },
  emits: ["play", "callback", "view"],
  setup(t, { emit: e }) {
    const o = e, i = {
      inbound: { icon: "pi pi-arrow-down-left", color: "var(--trx-success-color)", label: "Recebida" },
      outbound: { icon: "pi pi-arrow-up-right", color: "var(--trx-accent-color)", label: "Realizada" },
      missed: { icon: "pi pi-times", color: "var(--trx-danger-color)", label: "Perdida" }
    };
    function a(n) {
      if (!n) return "—";
      const c = Math.floor(n / 60), u = n % 60;
      return `${c}:${String(u).padStart(2, "0")}`;
    }
    return (n, c) => (l(), r("div", Ku, [
      t.loading ? (l(), r("div", Ju, [...c[1] || (c[1] = [
        s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (l(), r("div", Yu, [
        (l(!0), r(D, null, y(t.calls, (u) => (l(), r("div", {
          key: u.id,
          class: "trx-call-history__item",
          onClick: (_) => o("view", u)
        }, [
          s("div", {
            class: "trx-call-history__icon",
            style: z({ color: i[u.direction].color })
          }, [
            s("i", {
              class: w(i[u.direction].icon)
            }, null, 2)
          ], 4),
          s("div", Zu, [
            s("span", td, v(u.callerName ?? u.callerId), 1),
            s("span", ed, v(u.callerId) + " · " + v(i[u.direction].label), 1)
          ]),
          s("div", sd, [
            s("span", ad, v(a(u.duration)), 1),
            s("span", ld, v(u.startedAt), 1)
          ]),
          s("div", {
            class: "trx-call-history__actions",
            onClick: c[0] || (c[0] = j(() => {
            }, ["stop"]))
          }, [
            t.showRecording && u.recording ? (l(), r("button", {
              key: 0,
              class: "trx-call-history__btn",
              title: "Reproduzir gravação",
              onClick: (_) => o("play", u.id)
            }, [...c[3] || (c[3] = [
              s("i", { class: "pi pi-play" }, null, -1)
            ])], 8, nd)) : f("", !0),
            s("button", {
              class: "trx-call-history__btn",
              title: "Ligar de volta",
              onClick: (_) => o("callback", u)
            }, [...c[4] || (c[4] = [
              s("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, rd)
          ])
        ], 8, Qu))), 128))
      ])) : (l(), r("div", Xu, [...c[2] || (c[2] = [
        s("i", { class: "pi pi-phone-slash" }, null, -1),
        s("span", null, "Nenhuma chamada encontrada", -1)
      ])]))
    ]));
  }
}), cg = /* @__PURE__ */ L(od, [["__scopeId", "data-v-09f018c0"]]), id = { class: "trx-call-script" }, cd = { class: "trx-call-script__header" }, ud = { class: "trx-call-script__title" }, dd = { class: "trx-call-script__progress" }, _d = { class: "trx-call-script__progress-bar" }, pd = {
  key: 0,
  class: "trx-call-script__step"
}, md = { class: "trx-call-script__step-header" }, vd = { class: "trx-call-script__step-title" }, fd = { class: "trx-call-script__step-content" }, hd = {
  key: 1,
  class: "trx-call-script__empty"
}, xd = { class: "trx-call-script__nav" }, $d = ["disabled"], bd = {
  key: 0,
  class: "pi pi-chevron-right"
}, gd = {
  key: 1,
  class: "pi pi-check"
}, yd = /* @__PURE__ */ b({
  __name: "TrxCallScript",
  props: {
    steps: { default: () => [] },
    title: { default: "Script de Atendimento" }
  },
  emits: ["complete", "stepChange"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(0);
    function n() {
      a.value < o.steps.length - 1 ? (a.value++, i("stepChange", a.value)) : i("complete");
    }
    function c() {
      a.value > 0 && (a.value--, i("stepChange", a.value));
    }
    const u = {
      info: "pi pi-info-circle",
      question: "pi pi-question-circle",
      action: "pi pi-check-circle"
    };
    return (_, d) => (l(), r("div", id, [
      s("div", cd, [
        s("span", ud, v(t.title), 1),
        s("span", dd, v(a.value + 1) + " / " + v(t.steps.length), 1)
      ]),
      s("div", _d, [
        s("div", {
          class: "trx-call-script__progress-fill",
          style: z({ width: `${(a.value + 1) / t.steps.length * 100}%` })
        }, null, 4)
      ]),
      t.steps[a.value] ? (l(), r("div", pd, [
        s("div", md, [
          s("i", {
            class: w(u[t.steps[a.value].type ?? "info"])
          }, null, 2),
          s("h4", vd, v(t.steps[a.value].title), 1)
        ]),
        s("p", fd, v(t.steps[a.value].content), 1)
      ])) : (l(), r("div", hd, [...d[0] || (d[0] = [
        s("i", { class: "pi pi-file-edit" }, null, -1),
        s("span", null, "Nenhum script disponível", -1)
      ])])),
      s("div", xd, [
        s("button", {
          class: "trx-call-script__btn trx-call-script__btn--secondary",
          disabled: a.value === 0,
          onClick: c
        }, [...d[1] || (d[1] = [
          s("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, $d),
        s("button", {
          class: "trx-call-script__btn trx-call-script__btn--primary",
          onClick: n
        }, [
          N(v(a.value === t.steps.length - 1 ? "Concluir" : "Próximo") + " ", 1),
          a.value < t.steps.length - 1 ? (l(), r("i", bd)) : (l(), r("i", gd))
        ])
      ])
    ]));
  }
}), ug = /* @__PURE__ */ L(yd, [["__scopeId", "data-v-b430310e"]]), kd = ["disabled"], wd = {
  key: 0,
  class: "trx-disposition__selected"
}, Td = {
  key: 1,
  class: "trx-disposition__placeholder"
}, Cd = {
  key: 0,
  class: "trx-disposition__panel"
}, Sd = ["onClick"], Pd = {
  key: 1,
  class: "pi pi-pencil trx-disposition__note-icon",
  title: "Requer observação"
}, Vd = {
  key: 0,
  class: "trx-disposition__note-wrap"
}, Id = ["value"], Ad = /* @__PURE__ */ b({
  __name: "TrxDispositionPicker",
  props: {
    dispositions: { default: () => [] },
    modelValue: {},
    note: {},
    disabled: { type: Boolean },
    placeholder: { default: "Selecione a tabulação..." }
  },
  emits: ["update:modelValue", "update:note", "confirm"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(!1), n = E(o.note ?? ""), c = E(o.dispositions.find((p) => p.id === o.modelValue) ?? null);
    function u(p) {
      c.value = p, a.value = !1, i("update:modelValue", p.id), p.requireNote || i("confirm", p.id, n.value);
    }
    function _() {
      c.value && i("confirm", c.value.id, n.value);
    }
    function d(p) {
      const m = document.querySelector(".trx-disposition");
      m && !m.contains(p.target) && (a.value = !1);
    }
    return G(() => document.addEventListener("click", d, !0)), Y(() => document.removeEventListener("click", d, !0)), (p, m) => {
      var $;
      return l(), r("div", {
        class: w(["trx-disposition", { "trx-disposition--disabled": t.disabled }])
      }, [
        s("button", {
          class: "trx-disposition__trigger",
          disabled: t.disabled,
          onClick: m[0] || (m[0] = (g) => a.value = !a.value)
        }, [
          c.value ? (l(), r("span", wd, [
            c.value.icon ? (l(), r("i", {
              key: 0,
              class: w(c.value.icon),
              style: z({ color: c.value.color })
            }, null, 6)) : f("", !0),
            s("span", {
              style: z({ color: c.value.color })
            }, v(c.value.label), 5)
          ])) : (l(), r("span", Td, v(t.placeholder), 1)),
          s("i", {
            class: w(["pi pi-chevron-down trx-disposition__arrow", { "trx-disposition__arrow--open": a.value }])
          }, null, 2)
        ], 8, kd),
        O(U, { name: "trx-dropdown" }, {
          default: C(() => [
            a.value ? (l(), r("div", Cd, [
              (l(!0), r(D, null, y(t.dispositions, (g) => (l(), r("button", {
                key: g.id,
                class: w(["trx-disposition__option", { "trx-disposition__option--active": t.modelValue === g.id }]),
                onClick: (M) => u(g)
              }, [
                g.icon ? (l(), r("i", {
                  key: 0,
                  class: w(g.icon),
                  style: z({ color: g.color })
                }, null, 6)) : f("", !0),
                s("span", {
                  style: z({ color: g.color })
                }, v(g.label), 5),
                g.requireNote ? (l(), r("i", Pd)) : f("", !0)
              ], 10, Sd))), 128))
            ])) : f("", !0)
          ]),
          _: 1
        }),
        ($ = c.value) != null && $.requireNote ? (l(), r("div", Vd, [
          s("textarea", {
            class: "trx-disposition__note",
            placeholder: "Adicione uma observação...",
            value: n.value,
            rows: "3",
            onInput: m[1] || (m[1] = (g) => {
              n.value = g.target.value, i("update:note", n.value);
            })
          }, null, 40, Id),
          s("button", {
            class: "trx-disposition__confirm",
            onClick: _
          }, [...m[2] || (m[2] = [
            s("i", { class: "pi pi-check" }, null, -1),
            N(" Confirmar ", -1)
          ])])
        ])) : f("", !0)
      ], 2);
    };
  }
}), dg = /* @__PURE__ */ L(Ad, [["__scopeId", "data-v-52a3852f"]]), Bd = { class: "trx-dialer-list" }, Md = {
  key: 0,
  class: "trx-dialer-list__empty"
}, Ld = ["onClick"], Dd = { class: "trx-dialer-list__info" }, zd = { class: "trx-dialer-list__name" }, Ed = { class: "trx-dialer-list__phone" }, Rd = { class: "trx-dialer-list__meta" }, Nd = {
  key: 0,
  class: "trx-dialer-list__attempts"
}, qd = ["onClick"], Fd = ["onClick"], Od = /* @__PURE__ */ b({
  __name: "TrxDialerList",
  props: {
    contacts: { default: () => [] },
    loading: { type: Boolean },
    currentId: {}
  },
  emits: ["dial", "skip", "view"],
  setup(t, { emit: e }) {
    const o = e, i = {
      pending: { label: "Pendente", color: "var(--trx-text-secondary)", icon: "pi pi-clock" },
      dialing: { label: "Discando", color: "var(--trx-warning-color)", icon: "pi pi-spin pi-spinner" },
      connected: { label: "Conectado", color: "var(--trx-success-color)", icon: "pi pi-phone" },
      completed: { label: "Concluído", color: "var(--trx-accent-color)", icon: "pi pi-check" },
      failed: { label: "Falhou", color: "var(--trx-danger-color)", icon: "pi pi-times" },
      skipped: { label: "Ignorado", color: "var(--trx-text-secondary)", icon: "pi pi-forward" }
    };
    return (a, n) => (l(), r("div", Bd, [
      t.loading ? (l(), r("div", Md, [...n[1] || (n[1] = [
        s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : (l(!0), r(D, { key: 1 }, y(t.contacts, (c) => (l(), r("div", {
        key: c.id,
        class: w(["trx-dialer-list__item", { "trx-dialer-list__item--current": t.currentId === c.id }]),
        onClick: (u) => o("view", c)
      }, [
        s("div", {
          class: "trx-dialer-list__status-icon",
          style: z({ color: i[c.status].color })
        }, [
          s("i", {
            class: w(i[c.status].icon)
          }, null, 2)
        ], 4),
        s("div", Dd, [
          s("span", zd, v(c.name), 1),
          s("span", Ed, v(c.phone), 1)
        ]),
        s("div", Rd, [
          s("span", {
            class: "trx-dialer-list__status-label",
            style: z({ color: i[c.status].color })
          }, v(i[c.status].label), 5),
          c.attempts ? (l(), r("span", Nd, v(c.attempts) + "x", 1)) : f("", !0)
        ]),
        s("div", {
          class: "trx-dialer-list__actions",
          onClick: n[0] || (n[0] = j(() => {
          }, ["stop"]))
        }, [
          c.status === "pending" ? (l(), r("button", {
            key: 0,
            class: "trx-dialer-list__btn trx-dialer-list__btn--dial",
            title: "Discar",
            onClick: (u) => o("dial", c)
          }, [...n[2] || (n[2] = [
            s("i", { class: "pi pi-phone" }, null, -1)
          ])], 8, qd)) : f("", !0),
          c.status === "pending" ? (l(), r("button", {
            key: 1,
            class: "trx-dialer-list__btn",
            title: "Pular",
            onClick: (u) => o("skip", c.id)
          }, [...n[3] || (n[3] = [
            s("i", { class: "pi pi-forward" }, null, -1)
          ])], 8, Fd)) : f("", !0)
        ])
      ], 10, Ld))), 128))
    ]));
  }
}), _g = /* @__PURE__ */ L(Od, [["__scopeId", "data-v-179000fd"]]), Hd = { class: "trx-ivr" }, Ud = {
  key: 0,
  class: "trx-ivr__toolbar"
}, Gd = ["onClick"], jd = { class: "trx-ivr__canvas" }, Wd = ["onClick"], Kd = { class: "trx-ivr__node-type" }, Jd = { class: "trx-ivr__node-body" }, Xd = { class: "trx-ivr__node-label" }, Yd = {
  key: 0,
  class: "trx-ivr__node-options"
}, Qd = { class: "trx-ivr__key" }, Zd = {
  key: 0,
  class: "trx-ivr__empty"
}, t_ = /* @__PURE__ */ b({
  __name: "TrxIVRBuilder",
  props: {
    nodes: { default: () => [] },
    readonly: { type: Boolean }
  },
  emits: ["update:nodes", "nodeClick", "nodeAdd"],
  setup(t, { emit: e }) {
    const o = e, i = E(null), a = {
      start: { icon: "pi pi-play-circle", color: "var(--trx-success-color)", label: "Início" },
      menu: { icon: "pi pi-list", color: "var(--trx-accent-color)", label: "Menu" },
      message: { icon: "pi pi-volume-up", color: "var(--trx-warning-color)", label: "Mensagem" },
      transfer: { icon: "pi pi-phone", color: "var(--trx-text-secondary)", label: "Transferir" },
      hangup: { icon: "pi pi-times-circle", color: "var(--trx-danger-color)", label: "Desligar" },
      condition: { icon: "pi pi-code", color: "#a78bfa", label: "Condição" }
    }, n = ["menu", "message", "transfer", "hangup", "condition"];
    function c(u) {
      i.value = u.id, o("nodeClick", u);
    }
    return (u, _) => (l(), r("div", Hd, [
      t.readonly ? f("", !0) : (l(), r("div", Ud, [
        _[0] || (_[0] = s("span", { class: "trx-ivr__toolbar-label" }, "Adicionar nó:", -1)),
        (l(), r(D, null, y(n, (d) => s("button", {
          key: d,
          class: "trx-ivr__add-btn",
          style: z({ color: a[d].color, borderColor: a[d].color }),
          onClick: (p) => o("nodeAdd", d)
        }, [
          s("i", {
            class: w(a[d].icon)
          }, null, 2),
          N(" " + v(a[d].label), 1)
        ], 12, Gd)), 64))
      ])),
      s("div", jd, [
        (l(!0), r(D, null, y(t.nodes, (d) => {
          var p;
          return l(), r("div", {
            key: d.id,
            class: w(["trx-ivr__node", { "trx-ivr__node--selected": i.value === d.id }]),
            style: z({ left: d.x + "px", top: d.y + "px", "--node-color": a[d.type].color }),
            onClick: (m) => c(d)
          }, [
            s("div", {
              class: "trx-ivr__node-header",
              style: z({ background: a[d.type].color })
            }, [
              s("i", {
                class: w([a[d.type].icon, "trx-ivr__node-icon"])
              }, null, 2),
              s("span", Kd, v(a[d.type].label), 1)
            ], 4),
            s("div", Jd, [
              s("span", Xd, v(d.label), 1),
              (p = d.options) != null && p.length ? (l(), r("div", Yd, [
                (l(!0), r(D, null, y(d.options, (m) => (l(), r("div", {
                  key: m.key,
                  class: "trx-ivr__node-option"
                }, [
                  s("kbd", Qd, v(m.key), 1),
                  s("span", null, v(m.label), 1)
                ]))), 128))
              ])) : f("", !0)
            ])
          ], 14, Wd);
        }), 128)),
        t.nodes.length ? f("", !0) : (l(), r("div", Zd, [..._[1] || (_[1] = [
          s("i", {
            class: "pi pi-sitemap",
            style: { "font-size": "2rem", color: "var(--trx-text-secondary)" }
          }, null, -1),
          s("span", null, "Nenhum nó. Adicione um nó para começar.", -1)
        ])]))
      ])
    ]));
  }
}), pg = /* @__PURE__ */ L(t_, [["__scopeId", "data-v-af6b0bd0"]]), e_ = ["width", "height", "viewBox"], s_ = ["cx", "cy", "r", "stroke", "stroke-width"], a_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray"], l_ = { class: "trx-progress-ring__label" }, n_ = {
  key: 0,
  class: "trx-progress-ring__unit"
}, r_ = {
  key: 1,
  class: "trx-progress-ring__text"
}, o_ = /* @__PURE__ */ b({
  __name: "TrxProgressRing",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    size: { default: 80 },
    thickness: { default: 8 },
    color: { default: "var(--trx-accent-color)" },
    trackColor: { default: "var(--trx-bg-secondary)" },
    label: {},
    showValue: { type: Boolean, default: !0 },
    unit: {},
    animate: { type: Boolean, default: !0 }
  },
  setup(t) {
    Tt((_) => ({
      v56cbcac2: _.size
    }));
    const e = t, o = I(() => Math.min(1, Math.max(0, (e.value ?? 0) / e.max))), i = I(() => e.size / 2 - e.thickness / 2), a = I(() => 2 * Math.PI * i.value), n = I(() => o.value * a.value), c = I(() => a.value - n.value), u = I(() => Math.round(o.value * e.max));
    return (_, d) => (l(), r("div", {
      class: "trx-progress-ring",
      style: z({ width: `${t.size}px`, height: `${t.size}px` })
    }, [
      (l(), r("svg", {
        width: t.size,
        height: t.size,
        viewBox: `0 0 ${t.size} ${t.size}`
      }, [
        s("circle", {
          cx: t.size / 2,
          cy: t.size / 2,
          r: i.value,
          fill: "none",
          stroke: t.trackColor,
          "stroke-width": t.thickness
        }, null, 8, s_),
        s("circle", {
          class: "trx-progress-ring__arc",
          cx: t.size / 2,
          cy: t.size / 2,
          r: i.value,
          fill: "none",
          stroke: t.color,
          "stroke-width": t.thickness,
          "stroke-linecap": "round",
          "stroke-dasharray": `${n.value} ${c.value}`,
          "stroke-dashoffset": 0,
          transform: "rotate(-90)",
          style: z({
            transformOrigin: "center",
            transition: t.animate ? "stroke-dasharray 0.5s ease" : "none"
          })
        }, null, 12, a_)
      ], 8, e_)),
      s("div", l_, [
        t.showValue ? (l(), r("span", {
          key: 0,
          class: "trx-progress-ring__value",
          style: z({ color: t.color })
        }, [
          N(v(u.value), 1),
          t.unit ? (l(), r("span", n_, v(t.unit), 1)) : f("", !0)
        ], 4)) : f("", !0),
        t.label ? (l(), r("span", r_, v(t.label), 1)) : f("", !0)
      ])
    ], 4));
  }
}), mg = /* @__PURE__ */ L(o_, [["__scopeId", "data-v-a5c29afc"]]), i_ = { class: "trx-ticker" }, c_ = {
  key: 0,
  class: "trx-ticker__label"
}, u_ = { key: 0 }, d_ = { key: 1 }, __ = /* @__PURE__ */ b({
  __name: "TrxRealTimeTicker",
  props: {
    value: { default: 0 },
    previousValue: {},
    label: {},
    unit: {},
    prefix: {},
    decimals: { default: 0 },
    animate: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = E("neutral");
    let i;
    Q(() => e.value, (c, u) => {
      c === u || !e.animate || (clearTimeout(i), o.value = c > u ? "up" : "down", i = setTimeout(() => o.value = "neutral", 1500));
    });
    const a = I(() => (e.value ?? 0).toFixed(e.decimals)), n = I(() => o.value === "up" ? "var(--trx-success-color)" : o.value === "down" ? "var(--trx-danger-color)" : "var(--trx-text-primary)");
    return (c, u) => (l(), r("div", i_, [
      t.label ? (l(), r("span", c_, v(t.label), 1)) : f("", !0),
      s("span", {
        class: w(["trx-ticker__value", `trx-ticker__value--${o.value}`]),
        style: z({ color: n.value })
      }, [
        t.prefix ? (l(), r("span", u_, v(t.prefix), 1)) : f("", !0),
        N(v(a.value), 1),
        t.unit ? (l(), r("span", d_, v(t.unit), 1)) : f("", !0)
      ], 6)
    ]));
  }
}), vg = /* @__PURE__ */ L(__, [["__scopeId", "data-v-66246e1c"]]), p_ = { class: "trx-funnel" }, m_ = {
  key: 0,
  class: "trx-funnel__empty"
}, v_ = {
  key: 1,
  class: "trx-funnel__steps"
}, f_ = { class: "trx-funnel__bar-wrap" }, h_ = { class: "trx-funnel__info" }, x_ = { class: "trx-funnel__label" }, $_ = { class: "trx-funnel__numbers" }, b_ = {
  key: 1,
  class: "trx-funnel__pct"
}, g_ = {
  key: 0,
  class: "trx-funnel__drop"
}, y_ = /* @__PURE__ */ b({
  __name: "TrxFunnelChart",
  props: {
    steps: { default: () => [] },
    showValues: { type: Boolean, default: !0 },
    showPercent: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = [
      "var(--trx-accent-color)",
      "#60a5fa",
      "#a78bfa",
      "#f472b6",
      "#fb923c",
      "#facc15"
    ], i = I(() => Math.max(...e.steps.map((n) => n.value), 1)), a = I(
      () => e.steps.map((n, c) => ({
        ...n,
        color: n.color ?? o[c % o.length],
        pct: Math.round(n.value / i.value * 100),
        convRate: c === 0 ? 100 : Math.round(n.value / e.steps[0].value * 100)
      }))
    );
    return (n, c) => (l(), r("div", p_, [
      t.steps.length ? (l(), r("div", v_, [
        (l(!0), r(D, null, y(a.value, (u, _) => (l(), r("div", {
          key: _,
          class: "trx-funnel__step"
        }, [
          s("div", f_, [
            s("div", {
              class: w(["trx-funnel__bar", { "trx-funnel__bar--animated": t.animated }]),
              style: z({ width: u.pct + "%", background: u.color })
            }, null, 6)
          ]),
          s("div", h_, [
            s("span", x_, v(u.label), 1),
            s("div", $_, [
              t.showValues ? (l(), r("span", {
                key: 0,
                class: "trx-funnel__value",
                style: z({ color: u.color })
              }, v(u.value.toLocaleString("pt-BR")), 5)) : f("", !0),
              t.showPercent ? (l(), r("span", b_, v(u.convRate) + "%", 1)) : f("", !0)
            ])
          ]),
          _ < a.value.length - 1 ? (l(), r("div", g_, [
            c[1] || (c[1] = s("i", { class: "pi pi-arrow-down" }, null, -1)),
            s("span", null, v((a.value[_ + 1].value - u.value).toLocaleString("pt-BR")), 1)
          ])) : f("", !0)
        ]))), 128))
      ])) : (l(), r("div", m_, [...c[0] || (c[0] = [
        s("i", { class: "pi pi-chart-bar" }, null, -1),
        N(" Sem dados ", -1)
      ])]))
    ]));
  }
}), fg = /* @__PURE__ */ L(y_, [["__scopeId", "data-v-2ff82e24"]]), k_ = { class: "trx-line-chart" }, w_ = ["viewBox", "height"], T_ = ["x1", "y1", "x2", "y2"], C_ = ["x", "y"], S_ = ["x", "y"], P_ = { key: 0 }, V_ = ["id"], I_ = ["stop-color"], A_ = ["stop-color"], B_ = ["d", "fill"], M_ = ["d", "stroke"], L_ = ["cx", "cy", "fill"], D_ = {
  key: 0,
  class: "trx-line-chart__legend"
}, dt = 600, z_ = /* @__PURE__ */ b({
  __name: "TrxLineChart",
  props: {
    labels: { default: () => [] },
    datasets: { default: () => [] },
    height: { default: 200 },
    showDots: { type: Boolean, default: !0 },
    showGrid: { type: Boolean, default: !0 },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa"], o = t, i = { top: 16, right: 16, bottom: 32, left: 40 }, a = I(() => dt - i.left - i.right), n = I(() => o.height - i.top - i.bottom), c = I(() => o.datasets.flatMap((g) => g.data)), u = I(() => Math.min(...c.value, 0)), _ = I(() => Math.max(...c.value, 1));
    function d(g) {
      const M = o.labels.length - 1 || 1;
      return i.left + g / M * a.value;
    }
    function p(g) {
      return i.top + n.value - (g - u.value) / (_.value - u.value) * n.value;
    }
    function m(g, M) {
      if (!g.length) return "";
      const S = g.map((B, R) => [d(R), p(B)]);
      let P = `M ${S[0][0]} ${S[0][1]}`;
      if (o.smooth)
        for (let B = 1; B < S.length; B++) {
          const R = (S[B - 1][0] + S[B][0]) / 2;
          P += ` C ${R} ${S[B - 1][1]} ${R} ${S[B][1]} ${S[B][0]} ${S[B][1]}`;
        }
      else
        S.slice(1).forEach(([B, R]) => {
          P += ` L ${B} ${R}`;
        });
      if (M) {
        const B = S[S.length - 1][0], R = i.top + n.value;
        P += ` L ${B} ${R} L ${S[0][0]} ${R} Z`;
      }
      return P;
    }
    const $ = I(() => Array.from({ length: 5 }, (M, S) => {
      const P = u.value + S / 4 * (_.value - u.value);
      return { v: Math.round(P), y: p(P) };
    }));
    return (g, M) => (l(), r("div", k_, [
      (l(), r("svg", {
        viewBox: `0 0 ${dt} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        t.showGrid ? (l(!0), r(D, { key: 0 }, y($.value, (S) => (l(), r("line", {
          key: S.v,
          x1: i.left,
          y1: S.y,
          x2: i.left + a.value,
          y2: S.y,
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, T_))), 128)) : f("", !0),
        (l(!0), r(D, null, y($.value, (S) => (l(), r("text", {
          key: "l" + S.v,
          x: i.left - 6,
          y: S.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(S.v), 9, C_))), 128)),
        (l(!0), r(D, null, y(t.labels, (S, P) => (l(), r("text", {
          key: "x" + P,
          x: d(P),
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(S), 9, S_))), 128)),
        (l(!0), r(D, null, y(t.datasets, (S, P) => (l(), r(D, { key: P }, [
          t.filled ? (l(), r("defs", P_, [
            s("linearGradient", {
              id: `fill-${P}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              s("stop", {
                offset: "0%",
                "stop-color": S.color ?? e[P % e.length],
                "stop-opacity": "0.25"
              }, null, 8, I_),
              s("stop", {
                offset: "100%",
                "stop-color": S.color ?? e[P % e.length],
                "stop-opacity": "0.02"
              }, null, 8, A_)
            ], 8, V_)
          ])) : f("", !0),
          t.filled ? (l(), r("path", {
            key: 1,
            d: m(S.data, !0),
            fill: `url(#fill-${P})`,
            stroke: "none"
          }, null, 8, B_)) : f("", !0),
          s("path", {
            d: m(S.data, !1),
            stroke: S.color ?? e[P % e.length],
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, M_),
          t.showDots ? (l(!0), r(D, { key: 2 }, y(S.data, (B, R) => (l(), r("circle", {
            key: R,
            cx: d(R),
            cy: p(B),
            r: "3",
            fill: S.color ?? e[P % e.length]
          }, null, 8, L_))), 128)) : f("", !0)
        ], 64))), 128))
      ], 8, w_)),
      t.datasets.length > 1 ? (l(), r("div", D_, [
        (l(!0), r(D, null, y(t.datasets, (S, P) => (l(), r("div", {
          key: P,
          class: "trx-line-chart__legend-item"
        }, [
          s("span", {
            class: "trx-line-chart__legend-dot",
            style: z({ background: S.color ?? e[P % e.length] })
          }, null, 4),
          s("span", null, v(S.label), 1)
        ]))), 128))
      ])) : f("", !0)
    ]));
  }
}), hg = /* @__PURE__ */ L(z_, [["__scopeId", "data-v-fe35e9f6"]]), E_ = { class: "trx-bar-chart" }, R_ = ["viewBox", "height"], N_ = ["x1", "y1", "x2", "y2"], q_ = ["x", "y"], F_ = ["x", "y"], O_ = ["x", "y", "width", "height", "fill"], H_ = ["x", "y", "width", "height", "fill"], U_ = ["x", "y", "fill"], G_ = {
  key: 0,
  class: "trx-bar-chart__legend"
}, _t = 600, j_ = /* @__PURE__ */ b({
  __name: "TrxBarChart",
  props: {
    labels: { default: () => [] },
    datasets: { default: () => [] },
    height: { default: 220 },
    showGrid: { type: Boolean, default: !0 },
    showValues: { type: Boolean, default: !1 },
    horizontal: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa"], o = t, i = { top: 20, right: 16, bottom: 36, left: 44 }, a = I(() => _t - i.left - i.right), n = I(() => o.height - i.top - i.bottom), c = I(() => o.stacked ? Math.max(...o.labels.map((M, S) => o.datasets.reduce((P, B) => P + (B.data[S] ?? 0), 0)), 1) : Math.max(...o.datasets.flatMap((M) => M.data), 1)), u = I(() => a.value / (o.labels.length || 1)), _ = I(
      () => o.stacked ? u.value * 0.6 : u.value * 0.8 / (o.datasets.length || 1)
    );
    function d(M, S) {
      const P = i.left + M * u.value;
      return o.stacked ? P + u.value * 0.2 : P + u.value * 0.1 + S * _.value;
    }
    function p(M, S = 0) {
      const P = M / c.value * n.value;
      return i.top + n.value - P - S / c.value * n.value;
    }
    function m(M) {
      return M / c.value * n.value;
    }
    const $ = I(
      () => Array.from({ length: 5 }, (M, S) => {
        const P = Math.round(S / 4 * c.value), B = i.top + n.value - S / 4 * n.value;
        return { v: P, y: B };
      })
    ), g = I(
      () => o.labels.map((M, S) => {
        let P = 0;
        return o.datasets.map((B, R) => {
          const F = B.data[S] ?? 0, q = { v: F, offset: P, di: R };
          return P += F, q;
        });
      })
    );
    return (M, S) => (l(), r("div", E_, [
      (l(), r("svg", {
        viewBox: `0 0 ${_t} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        t.showGrid ? (l(!0), r(D, { key: 0 }, y($.value, (P) => (l(), r("line", {
          key: P.v,
          x1: i.left,
          y1: P.y,
          x2: i.left + a.value,
          y2: P.y,
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, N_))), 128)) : f("", !0),
        (l(!0), r(D, null, y($.value, (P) => (l(), r("text", {
          key: "yl" + P.v,
          x: i.left - 6,
          y: P.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(P.v), 9, q_))), 128)),
        (l(!0), r(D, null, y(t.labels, (P, B) => (l(), r("text", {
          key: "xl" + B,
          x: i.left + B * u.value + u.value / 2,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(P), 9, F_))), 128)),
        t.stacked ? (l(!0), r(D, { key: 1 }, y(g.value, (P, B) => (l(), r(D, { key: B }, [
          (l(!0), r(D, null, y(P, (R) => (l(), r("rect", {
            key: R.di,
            x: d(B, 0),
            y: p(R.v, R.offset),
            width: _.value,
            height: m(R.v),
            fill: t.datasets[R.di].color ?? e[R.di % e.length],
            rx: "2"
          }, null, 8, O_))), 128))
        ], 64))), 128)) : (l(!0), r(D, { key: 2 }, y(t.datasets, (P, B) => (l(), r(D, { key: B }, [
          (l(!0), r(D, null, y(P.data, (R, F) => (l(), r("rect", {
            key: F,
            x: d(F, B),
            y: p(R),
            width: _.value,
            height: m(R),
            fill: P.color ?? e[B % e.length],
            rx: "2"
          }, null, 8, H_))), 128)),
          t.showValues ? (l(!0), r(D, { key: 0 }, y(P.data, (R, F) => (l(), r("text", {
            key: "val" + F,
            x: d(F, B) + _.value / 2,
            y: p(R) - 3,
            "text-anchor": "middle",
            "font-size": "9",
            fill: P.color ?? e[B % e.length]
          }, v(R), 9, U_))), 128)) : f("", !0)
        ], 64))), 128))
      ], 8, R_)),
      t.datasets.length > 1 ? (l(), r("div", G_, [
        (l(!0), r(D, null, y(t.datasets, (P, B) => (l(), r("div", {
          key: B,
          class: "trx-bar-chart__legend-item"
        }, [
          s("span", {
            class: "trx-bar-chart__legend-dot",
            style: z({ background: P.color ?? e[B % e.length] })
          }, null, 4),
          N(" " + v(P.label), 1)
        ]))), 128))
      ])) : f("", !0)
    ]));
  }
}), xg = /* @__PURE__ */ L(j_, [["__scopeId", "data-v-cad2549b"]]), W_ = { class: "trx-donut" }, K_ = { class: "trx-donut__chart" }, J_ = ["width", "height", "viewBox"], X_ = ["cx", "cy", "r", "stroke-width"], Y_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Q_ = ["x", "y"], Z_ = ["x", "y"], tp = {
  key: 0,
  class: "trx-donut__legend"
}, ep = { class: "trx-donut__legend-label" }, sp = { class: "trx-donut__legend-pct" }, ap = /* @__PURE__ */ b({
  __name: "TrxDonutChart",
  props: {
    slices: { default: () => [] },
    size: { default: 160 },
    thickness: { default: 30 },
    label: {},
    sublabel: {},
    showLegend: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa", "#facc15"], o = t, i = I(() => o.size / 2), a = I(() => o.size / 2), n = I(() => (o.size - o.thickness) / 2), c = I(() => 2 * Math.PI * n.value), u = I(() => o.slices.reduce((d, p) => d + p.value, 0) || 1), _ = I(() => {
      let d = 0;
      return o.slices.map((p, m) => {
        const $ = p.value / u.value, g = $ * c.value, M = c.value - g, S = { ...p, dash: g, gap: M, offset: d, color: p.color ?? e[m % e.length], pct: Math.round($ * 100) };
        return d += g, S;
      });
    });
    return (d, p) => (l(), r("div", W_, [
      s("div", K_, [
        (l(), r("svg", {
          width: t.size,
          height: t.size,
          viewBox: `0 0 ${t.size} ${t.size}`
        }, [
          s("circle", {
            cx: i.value,
            cy: a.value,
            r: n.value,
            fill: "none",
            stroke: "var(--trx-bg-secondary)",
            "stroke-width": t.thickness
          }, null, 8, X_),
          (l(!0), r(D, null, y(_.value, (m, $) => (l(), r("circle", {
            key: $,
            cx: i.value,
            cy: a.value,
            r: n.value,
            fill: "none",
            stroke: m.color,
            "stroke-width": t.thickness,
            "stroke-dasharray": `${m.dash} ${m.gap}`,
            "stroke-dashoffset": -(m.offset - c.value / 4),
            "stroke-linecap": "butt",
            style: z(t.animated ? { transition: "stroke-dasharray 0.6s ease" } : {})
          }, null, 12, Y_))), 128)),
          s("text", {
            x: i.value,
            y: a.value - (t.sublabel ? 8 : 4),
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            fill: "var(--trx-text-primary)"
          }, v(t.label ?? u.value.toLocaleString("pt-BR")), 9, Q_),
          t.sublabel ? (l(), r("text", {
            key: 0,
            x: i.value,
            y: a.value + 14,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v(t.sublabel), 9, Z_)) : f("", !0)
        ], 8, J_))
      ]),
      t.showLegend ? (l(), r("div", tp, [
        (l(!0), r(D, null, y(_.value, (m, $) => (l(), r("div", {
          key: $,
          class: "trx-donut__legend-item"
        }, [
          s("span", {
            class: "trx-donut__legend-dot",
            style: z({ background: m.color })
          }, null, 4),
          s("span", ep, v(m.label), 1),
          s("span", sp, v(m.pct) + "%", 1)
        ]))), 128))
      ])) : f("", !0)
    ]));
  }
}), $g = /* @__PURE__ */ L(ap, [["__scopeId", "data-v-962cda3e"]]), lp = ["value", "placeholder", "disabled"], np = /* @__PURE__ */ b({
  __name: "TrxCurrencyInput",
  props: {
    modelValue: {},
    currency: { default: "BRL" },
    locale: { default: "pt-BR" },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    placeholder: { default: "R$ 0,00" },
    min: {},
    max: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => o.modelValue === null || o.modelValue === void 0 ? "" : new Intl.NumberFormat(o.locale, {
      style: "currency",
      currency: o.currency
    }).format(o.modelValue));
    function n(_) {
      const d = _.target.value.replace(/[^\d,.-]/g, "").replace(",", "."), p = parseFloat(d), m = isNaN(p) ? null : p;
      i("update:modelValue", m), i("change", m), _.target.value = a.value;
    }
    function c(_) {
      const d = _.target, p = o.modelValue !== null && o.modelValue !== void 0 ? String(o.modelValue).replace(".", ",") : "";
      d.value = p, d.select();
    }
    function u(_) {
      _.target.value = a.value;
    }
    return (_, d) => (l(), r("div", {
      class: w(["trx-currency", { "trx-currency--invalid": t.invalid, "trx-currency--disabled": t.disabled }])
    }, [
      s("input", {
        class: "trx-currency__input",
        type: "text",
        inputmode: "decimal",
        value: a.value,
        placeholder: t.placeholder,
        disabled: t.disabled,
        onFocus: c,
        onBlur: u,
        onInput: n
      }, null, 40, lp)
    ], 2));
  }
}), bg = /* @__PURE__ */ L(np, [["__scopeId", "data-v-4e40eeca"]]), rp = ["disabled"], op = { class: "trx-color-picker__hex" }, ip = {
  key: 0,
  class: "trx-color-picker__panel"
}, cp = { class: "trx-color-picker__presets" }, up = ["title", "onClick"], dp = { class: "trx-color-picker__custom" }, _p = ["value"], pp = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
  "#000000",
  "#ffffff"
], mp = /* @__PURE__ */ b({
  __name: "TrxColorPicker",
  props: {
    modelValue: { default: "#10b981" },
    presets: { default: () => pp },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = e, i = E(!1);
    function a(u) {
      o("update:modelValue", u), i.value = !1;
    }
    function n(u) {
      o("update:modelValue", u.target.value);
    }
    function c(u) {
      const _ = document.querySelector(".trx-color-picker");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return G(() => document.addEventListener("click", c, !0)), Y(() => document.removeEventListener("click", c, !0)), (u, _) => (l(), r("div", {
      class: w(["trx-color-picker", { "trx-color-picker--disabled": t.disabled }])
    }, [
      s("button", {
        class: "trx-color-picker__trigger",
        disabled: t.disabled,
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        s("span", {
          class: "trx-color-picker__swatch",
          style: z({ background: t.modelValue })
        }, null, 4),
        s("span", op, v(t.modelValue), 1),
        _[2] || (_[2] = s("i", { class: "pi pi-chevron-down trx-color-picker__arrow" }, null, -1))
      ], 8, rp),
      O(U, { name: "trx-dropdown" }, {
        default: C(() => [
          i.value ? (l(), r("div", ip, [
            s("div", cp, [
              (l(!0), r(D, null, y(t.presets, (d) => (l(), r("button", {
                key: d,
                class: w(["trx-color-picker__preset", { "trx-color-picker__preset--active": t.modelValue === d }]),
                style: z({ background: d, borderColor: d === "#ffffff" ? "#e5e7eb" : d }),
                title: d,
                onClick: (p) => a(d)
              }, null, 14, up))), 128))
            ]),
            s("div", dp, [
              _[3] || (_[3] = s("span", null, "Personalizado:", -1)),
              s("input", {
                type: "color",
                class: "trx-color-picker__native",
                value: t.modelValue,
                onInput: n,
                onChange: _[1] || (_[1] = (d) => i.value = !1)
              }, null, 40, _p)
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), gg = /* @__PURE__ */ L(mp, [["__scopeId", "data-v-7ca62925"]]), vp = ["disabled", "onClick"], fp = ["placeholder", "disabled"], hp = {
  key: 0,
  class: "trx-tag-input__suggestions"
}, xp = ["onMousedown"], $p = /* @__PURE__ */ b({
  __name: "TrxTagInput",
  props: {
    modelValue: { default: () => [] },
    placeholder: { default: "Adicionar tag..." },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    max: {},
    suggestions: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E("");
    function n(p) {
      const m = p.trim();
      if (!m || o.modelValue.includes(m)) {
        a.value = "";
        return;
      }
      o.max && o.modelValue.length >= o.max || (i("update:modelValue", [...o.modelValue, m]), a.value = "");
    }
    function c(p) {
      i("update:modelValue", o.modelValue.filter((m) => m !== p));
    }
    function u(p) {
      (p.key === "Enter" || p.key === ",") && a.value.trim() && (p.preventDefault(), n(a.value)), p.key === "Backspace" && !a.value && o.modelValue.length && c(o.modelValue[o.modelValue.length - 1]);
    }
    const _ = E([]);
    function d() {
      var p;
      if (!((p = o.suggestions) != null && p.length) || !a.value) {
        _.value = [];
        return;
      }
      _.value = o.suggestions.filter(
        (m) => m.toLowerCase().includes(a.value.toLowerCase()) && !o.modelValue.includes(m)
      ).slice(0, 6);
    }
    return (p, m) => (l(), r(D, null, [
      s("div", {
        class: w(["trx-tag-input", { "trx-tag-input--invalid": t.invalid, "trx-tag-input--disabled": t.disabled }]),
        onClick: m[2] || (m[2] = ($) => {
          var g;
          return (g = p.$el.querySelector("input")) == null ? void 0 : g.focus();
        })
      }, [
        (l(!0), r(D, null, y(t.modelValue, ($) => (l(), r("span", {
          key: $,
          class: "trx-tag-input__tag"
        }, [
          N(v($) + " ", 1),
          s("button", {
            class: "trx-tag-input__remove",
            disabled: t.disabled,
            onClick: j((g) => c($), ["stop"])
          }, [...m[3] || (m[3] = [
            s("i", { class: "pi pi-times" }, null, -1)
          ])], 8, vp)
        ]))), 128)),
        !t.max || t.modelValue.length < t.max ? et((l(), r("input", {
          key: 0,
          class: "trx-tag-input__field",
          placeholder: t.modelValue.length ? "" : t.placeholder,
          disabled: t.disabled,
          "onUpdate:modelValue": m[0] || (m[0] = ($) => a.value = $),
          onKeydown: u,
          onInput: d,
          onBlur: m[1] || (m[1] = ($) => {
            a.value && n(a.value), _.value = [];
          })
        }, null, 40, fp)), [
          [nt, a.value]
        ]) : f("", !0)
      ], 2),
      _.value.length ? (l(), r("div", hp, [
        (l(!0), r(D, null, y(_.value, ($) => (l(), r("button", {
          key: $,
          class: "trx-tag-input__suggestion",
          onMousedown: j((g) => n($), ["prevent"])
        }, v($), 41, xp))), 128))
      ])) : f("", !0)
    ], 64));
  }
}), yg = /* @__PURE__ */ L($p, [["__scopeId", "data-v-0a95e840"]]), bp = ["type", "value", "disabled", "onInput", "onKeydown"], gp = /* @__PURE__ */ b({
  __name: "TrxOTPInput",
  props: {
    modelValue: { default: "" },
    length: { default: 6 },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    masked: { type: Boolean }
  },
  emits: ["update:modelValue", "complete"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E([]);
    function n(d) {
      return (o.modelValue ?? "")[d] ?? "";
    }
    function c(d, p) {
      var M;
      const m = d.target.value.replace(/\D/g, "").slice(-1), $ = (o.modelValue ?? "").split("");
      $[p] = m;
      const g = $.join("").slice(0, o.length);
      i("update:modelValue", g), m && p < o.length - 1 && ((M = a.value[p + 1]) == null || M.focus()), g.length === o.length && i("complete", g);
    }
    function u(d, p) {
      var m, $, g;
      if (d.key === "Backspace") {
        const M = (o.modelValue ?? "").split("");
        !M[p] && p > 0 ? ((m = a.value[p - 1]) == null || m.focus(), M[p - 1] = "") : M[p] = "", i("update:modelValue", M.join(""));
      }
      d.key === "ArrowLeft" && p > 0 && (($ = a.value[p - 1]) == null || $.focus()), d.key === "ArrowRight" && p < o.length - 1 && ((g = a.value[p + 1]) == null || g.focus());
    }
    function _(d) {
      var m, $;
      d.preventDefault();
      const p = ((m = d.clipboardData) == null ? void 0 : m.getData("text").replace(/\D/g, "").slice(0, o.length)) ?? "";
      i("update:modelValue", p), p.length === o.length && i("complete", p), ($ = a.value[Math.min(p.length, o.length - 1)]) == null || $.focus();
    }
    return (d, p) => (l(), r("div", {
      class: w(["trx-otp", { "trx-otp--invalid": t.invalid }])
    }, [
      (l(!0), r(D, null, y(t.length, (m) => (l(), r("input", {
        key: m - 1,
        ref_for: !0,
        ref: ($) => {
          $ && (a.value[m - 1] = $);
        },
        class: w(["trx-otp__cell", { "trx-otp__cell--filled": !!n(m - 1) }]),
        type: t.masked ? "password" : "text",
        inputmode: "numeric",
        maxlength: "1",
        value: n(m - 1),
        disabled: t.disabled,
        onInput: ($) => c($, m - 1),
        onKeydown: ($) => u($, m - 1),
        onPaste: _,
        onFocus: p[0] || (p[0] = ($) => $.target.select())
      }, null, 42, bp))), 128))
    ], 2));
  }
}), kg = /* @__PURE__ */ L(gp, [["__scopeId", "data-v-a732ce3a"]]), yp = {
  key: 0,
  class: "trx-sig-pad__placeholder"
}, kp = { class: "trx-sig-pad__footer" }, wp = ["disabled"], Tp = /* @__PURE__ */ b({
  __name: "TrxSignaturePad",
  props: {
    width: { default: 400 },
    height: { default: 150 },
    lineColor: { default: "var(--trx-text-primary)" },
    lineWidth: { default: 2 },
    disabled: { type: Boolean },
    placeholder: { default: "Assine aqui" }
  },
  emits: ["change", "clear"],
  setup(t, { expose: e, emit: o }) {
    const i = t, a = o, n = st("canvas"), c = E(!1), u = E(!0);
    function _() {
      var S;
      return ((S = n.value) == null ? void 0 : S.getContext("2d")) ?? null;
    }
    function d(S) {
      const P = n.value.getBoundingClientRect(), B = "touches" in S ? S.touches[0] : S;
      return { x: B.clientX - P.left, y: B.clientY - P.top };
    }
    function p(S) {
      if (i.disabled) return;
      S.preventDefault(), c.value = !0;
      const P = _();
      if (!P) return;
      const { x: B, y: R } = d(S);
      P.beginPath(), P.moveTo(B, R);
    }
    function m(S) {
      if (!c.value || i.disabled) return;
      S.preventDefault();
      const P = _();
      if (!P) return;
      const { x: B, y: R } = d(S);
      P.lineTo(B, R), P.strokeStyle = i.lineColor, P.lineWidth = i.lineWidth, P.lineCap = "round", P.lineJoin = "round", P.stroke(), u.value = !1;
    }
    function $() {
      var S;
      c.value && (c.value = !1, a("change", u.value ? null : ((S = n.value) == null ? void 0 : S.toDataURL()) ?? null));
    }
    function g() {
      const S = _();
      !S || !n.value || (S.clearRect(0, 0, n.value.width, n.value.height), u.value = !0, a("clear"), a("change", null));
    }
    function M() {
      var S;
      return u.value ? null : ((S = n.value) == null ? void 0 : S.toDataURL()) ?? null;
    }
    return G(() => {
      const S = _();
      if (!S || !n.value) return;
      const P = window.devicePixelRatio || 1;
      n.value.width = i.width * P, n.value.height = i.height * P, S.scale(P, P);
    }), e({ clear: g, toDataURL: M }), (S, P) => (l(), r("div", {
      class: w(["trx-sig-pad", { "trx-sig-pad--disabled": t.disabled }])
    }, [
      s("div", {
        class: "trx-sig-pad__canvas-wrap",
        style: z({ width: `${t.width}px`, height: `${t.height}px` })
      }, [
        s("canvas", {
          ref_key: "canvas",
          ref: n,
          class: "trx-sig-pad__canvas",
          style: z({ width: `${t.width}px`, height: `${t.height}px` }),
          onMousedown: p,
          onMousemove: m,
          onMouseup: $,
          onMouseleave: $,
          onTouchstart: p,
          onTouchmove: m,
          onTouchend: $
        }, null, 36),
        u.value ? (l(), r("span", yp, v(t.placeholder), 1)) : f("", !0)
      ], 4),
      s("div", kp, [
        P[1] || (P[1] = s("span", { class: "trx-sig-pad__line-label" }, "Assinatura", -1)),
        s("button", {
          class: "trx-sig-pad__clear",
          disabled: u.value || t.disabled,
          onClick: g
        }, [...P[0] || (P[0] = [
          s("i", { class: "pi pi-trash" }, null, -1),
          N(" Limpar ", -1)
        ])], 8, wp)
      ])
    ], 2));
  }
}), wg = /* @__PURE__ */ L(Tp, [["__scopeId", "data-v-49c2b653"]]), Cp = { class: "trx-md-editor__bar" }, Sp = { class: "trx-md-editor__toolbar" }, Pp = ["title", "disabled", "onClick"], Vp = { class: "trx-md-editor__modes" }, Ip = ["onClick"], Ap = ["value", "placeholder", "disabled"], Bp = ["innerHTML"], Mp = /* @__PURE__ */ b({
  __name: "TrxMarkdownEditor",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Escreva em Markdown..." },
    minHeight: { default: "200px" },
    maxHeight: { default: "600px" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E("write"), n = I(() => o.modelValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm, "<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm, "<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm, "<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>").replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>').replace(/\n/g, "<br>"));
    function c(_, d = "") {
      const p = document.querySelector(".trx-md-editor__textarea");
      if (!p) return;
      const m = p.selectionStart, $ = p.selectionEnd, g = p.value.slice(m, $), M = p.value.slice(0, m) + _ + g + d + p.value.slice($);
      i("update:modelValue", M), setTimeout(() => {
        p.focus(), p.setSelectionRange(m + _.length, m + _.length + g.length);
      }, 0);
    }
    const u = [
      { icon: "pi pi-bold", title: "Negrito", action: () => c("**", "**") },
      { icon: "pi pi-italic", title: "Itálico", action: () => c("*", "*") },
      { icon: "pi pi-code", title: "Código", action: () => c("`", "`") },
      { icon: "pi pi-list", title: "Lista", action: () => c("- ") },
      { icon: "pi pi-link", title: "Link", action: () => c("[texto](", ")") }
    ];
    return (_, d) => (l(), r("div", {
      class: w(["trx-md-editor", { "trx-md-editor--disabled": t.disabled }])
    }, [
      s("div", Cp, [
        s("div", Sp, [
          (l(), r(D, null, y(u, (p) => s("button", {
            key: p.title,
            class: "trx-md-editor__tool-btn",
            title: p.title,
            disabled: t.disabled,
            onClick: j((m) => p.action(), ["prevent"])
          }, [
            s("i", {
              class: w(p.icon)
            }, null, 2)
          ], 8, Pp)), 64))
        ]),
        s("div", Vp, [
          (l(), r(D, null, y(["write", "split", "preview"], (p) => s("button", {
            key: p,
            class: w(["trx-md-editor__mode-btn", { active: a.value === p }]),
            onClick: (m) => a.value = p
          }, v(p === "write" ? "Editar" : p === "preview" ? "Preview" : "Split"), 11, Ip)), 64))
        ])
      ]),
      s("div", {
        class: w(["trx-md-editor__body", `trx-md-editor__body--${a.value}`])
      }, [
        a.value !== "preview" ? (l(), r("textarea", {
          key: 0,
          class: "trx-md-editor__textarea",
          value: t.modelValue,
          placeholder: t.placeholder,
          disabled: t.disabled,
          style: z({ minHeight: t.minHeight, maxHeight: t.maxHeight }),
          onInput: d[0] || (d[0] = (p) => i("update:modelValue", p.target.value))
        }, null, 44, Ap)) : f("", !0),
        a.value !== "write" ? (l(), r("div", {
          key: 1,
          class: "trx-md-editor__preview",
          style: z({ minHeight: t.minHeight }),
          innerHTML: n.value
        }, null, 12, Bp)) : f("", !0)
      ], 2)
    ], 2));
  }
}), Tg = /* @__PURE__ */ L(Mp, [["__scopeId", "data-v-c4b3f5b2"]]), Lp = { class: "trx-json-editor__bar" }, Dp = { class: "trx-json-editor__actions" }, zp = ["disabled"], Ep = ["disabled"], Rp = { class: "trx-json-editor__body" }, Np = { class: "trx-json-editor__lines" }, qp = ["value", "disabled"], Fp = {
  key: 0,
  class: "trx-json-editor__error"
}, Op = /* @__PURE__ */ b({
  __name: "TrxJsonEditor",
  props: {
    modelValue: { default: () => ({}) },
    minHeight: { default: "180px" },
    disabled: { type: Boolean },
    validateOnChange: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "error"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(JSON.stringify(o.modelValue, null, 2)), n = E("");
    Q(() => o.modelValue, (m) => {
      try {
        const $ = JSON.parse(a.value);
        JSON.stringify($) !== JSON.stringify(m) && (a.value = JSON.stringify(m, null, 2));
      } catch {
        a.value = JSON.stringify(m, null, 2);
      }
    }, { deep: !0 });
    function c(m) {
      const $ = m.target.value;
      a.value = $, o.validateOnChange && u($);
    }
    function u(m) {
      try {
        const $ = JSON.parse(m);
        n.value = "", i("update:modelValue", $);
      } catch ($) {
        const g = $.message;
        n.value = g, i("error", g);
      }
    }
    function _() {
      try {
        const m = JSON.parse(a.value);
        a.value = JSON.stringify(m, null, 2), n.value = "";
      } catch {
      }
    }
    function d() {
      try {
        const m = JSON.parse(a.value);
        a.value = JSON.stringify(m), n.value = "";
      } catch {
      }
    }
    const p = I(() => a.value.split(`
`).length);
    return (m, $) => (l(), r("div", {
      class: w(["trx-json-editor", { "trx-json-editor--error": n.value, "trx-json-editor--disabled": t.disabled }])
    }, [
      s("div", Lp, [
        $[2] || ($[2] = s("span", { class: "trx-json-editor__lang" }, "JSON", -1)),
        s("div", Dp, [
          s("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: _
          }, [...$[0] || ($[0] = [
            s("i", { class: "pi pi-align-left" }, null, -1),
            N(" Formatar ", -1)
          ])], 8, zp),
          s("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: d
          }, [...$[1] || ($[1] = [
            s("i", { class: "pi pi-minus" }, null, -1),
            N(" Minificar ", -1)
          ])], 8, Ep)
        ])
      ]),
      s("div", Rp, [
        s("div", Np, [
          (l(!0), r(D, null, y(p.value, (g) => (l(), r("div", {
            key: g,
            class: "trx-json-editor__line-num"
          }, v(g), 1))), 128))
        ]),
        s("textarea", {
          class: "trx-json-editor__textarea",
          value: a.value,
          disabled: t.disabled,
          style: z({ minHeight: t.minHeight }),
          spellcheck: "false",
          autocomplete: "off",
          onInput: c
        }, null, 44, qp)
      ]),
      n.value ? (l(), r("div", Fp, [
        $[3] || ($[3] = s("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
        N(" " + v(n.value), 1)
      ])) : f("", !0)
    ], 2));
  }
}), Cg = /* @__PURE__ */ L(Op, [["__scopeId", "data-v-04c442f5"]]), Hp = ["title"], Up = { class: "trx-sidebar-nav__items" }, Gp = {
  key: 0,
  class: "trx-sidebar-nav__sep"
}, jp = { key: 1 }, Wp = ["title", "onClick"], Kp = {
  key: 1,
  class: "trx-sidebar-nav__label"
}, Jp = {
  key: 2,
  class: "trx-sidebar-nav__badge"
}, Xp = {
  key: 0,
  class: "trx-sidebar-nav__children"
}, Yp = ["onClick"], Qp = {
  key: 1,
  class: "trx-sidebar-nav__badge"
}, Zp = /* @__PURE__ */ b({
  __name: "TrxSidebarNav",
  props: {
    items: { default: () => [] },
    modelValue: {},
    collapsed: { type: Boolean },
    width: { default: "240px" },
    collapsedWidth: { default: "56px" }
  },
  emits: ["update:modelValue", "update:collapsed", "select"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(/* @__PURE__ */ new Set());
    function n(_) {
      a.value.has(_) ? a.value.delete(_) : a.value.add(_);
    }
    function c(_) {
      var d;
      if ((d = _.children) != null && d.length) {
        n(_.key);
        return;
      }
      i("update:modelValue", _.key), i("select", _);
    }
    function u(_) {
      var d;
      return o.modelValue === _.key ? !0 : ((d = _.children) == null ? void 0 : d.some((p) => p.key === o.modelValue)) ?? !1;
    }
    return (_, d) => (l(), r("nav", {
      class: w(["trx-sidebar-nav", { "trx-sidebar-nav--collapsed": t.collapsed }]),
      style: z({ width: t.collapsed ? t.collapsedWidth : t.width })
    }, [
      s("button", {
        class: "trx-sidebar-nav__toggle",
        onClick: d[0] || (d[0] = (p) => i("update:collapsed", !t.collapsed)),
        title: t.collapsed ? "Expandir" : "Recolher"
      }, [
        s("i", {
          class: w(t.collapsed ? "pi pi-angle-right" : "pi pi-angle-left")
        }, null, 2)
      ], 8, Hp),
      s("div", Up, [
        (l(!0), r(D, null, y(t.items, (p) => {
          var m, $;
          return l(), r(D, {
            key: p.key
          }, [
            p.separator ? (l(), r("hr", Gp)) : (l(), r("div", jp, [
              s("button", {
                class: w(["trx-sidebar-nav__item", {
                  "trx-sidebar-nav__item--active": u(p),
                  "trx-sidebar-nav__item--open": a.value.has(p.key)
                }]),
                title: t.collapsed ? p.label : void 0,
                onClick: (g) => c(p)
              }, [
                p.icon ? (l(), r("i", {
                  key: 0,
                  class: w([p.icon, "trx-sidebar-nav__icon"])
                }, null, 2)) : f("", !0),
                t.collapsed ? f("", !0) : (l(), r("span", Kp, v(p.label), 1)),
                !t.collapsed && p.badge ? (l(), r("span", Jp, v(p.badge), 1)) : f("", !0),
                !t.collapsed && ((m = p.children) != null && m.length) ? (l(), r("i", {
                  key: 3,
                  class: w(["pi pi-chevron-down trx-sidebar-nav__arrow", { "trx-sidebar-nav__arrow--open": a.value.has(p.key) }])
                }, null, 2)) : f("", !0)
              ], 10, Wp),
              !t.collapsed && (($ = p.children) != null && $.length) && a.value.has(p.key) ? (l(), r("div", Xp, [
                (l(!0), r(D, null, y(p.children, (g) => (l(), r("button", {
                  key: g.key,
                  class: w(["trx-sidebar-nav__child", { "trx-sidebar-nav__child--active": t.modelValue === g.key }]),
                  onClick: (M) => c(g)
                }, [
                  g.icon ? (l(), r("i", {
                    key: 0,
                    class: w(g.icon)
                  }, null, 2)) : f("", !0),
                  s("span", null, v(g.label), 1),
                  g.badge ? (l(), r("span", Qp, v(g.badge), 1)) : f("", !0)
                ], 10, Yp))), 128))
              ])) : f("", !0)
            ]))
          ], 64);
        }), 128))
      ])
    ], 6));
  }
}), Sg = /* @__PURE__ */ L(Zp, [["__scopeId", "data-v-f2db473b"]]), tm = { class: "trx-palette__search" }, em = ["placeholder"], sm = { class: "trx-palette__results" }, am = { class: "trx-palette__group-label" }, lm = ["onClick", "onMouseenter"], nm = { class: "trx-palette__item-info" }, rm = { class: "trx-palette__item-label" }, om = {
  key: 0,
  class: "trx-palette__item-desc"
}, im = {
  key: 1,
  class: "trx-palette__shortcut"
}, cm = {
  key: 1,
  class: "trx-palette__empty"
}, um = /* @__PURE__ */ b({
  __name: "TrxCommandPalette",
  props: {
    commands: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "Pesquisar comandos..." }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(""), n = E(0), c = E(), u = I(() => {
      if (!a.value) return o.commands;
      const g = a.value.toLowerCase();
      return o.commands.filter(
        (M) => {
          var S;
          return M.label.toLowerCase().includes(g) || ((S = M.description) == null ? void 0 : S.toLowerCase().includes(g));
        }
      );
    }), _ = I(() => {
      const g = {};
      for (const M of u.value) {
        const S = M.group ?? "Geral";
        g[S] || (g[S] = []), g[S].push(M);
      }
      return g;
    }), d = I(() => u.value);
    Q(() => o.modelValue, async (g) => {
      var M;
      g && (a.value = "", n.value = 0, await lt(), (M = c.value) == null || M.focus());
    });
    function p() {
      i("update:modelValue", !1);
    }
    function m(g) {
      g.action(), p();
    }
    function $(g) {
      if (g.key === "Escape") {
        p();
        return;
      }
      g.key === "ArrowDown" && (g.preventDefault(), n.value = Math.min(n.value + 1, d.value.length - 1)), g.key === "ArrowUp" && (g.preventDefault(), n.value = Math.max(n.value - 1, 0)), g.key === "Enter" && d.value[n.value] && m(d.value[n.value]);
    }
    return (g, M) => (l(), V(rt, { to: "body" }, [
      O(U, { name: "trx-palette-fade" }, {
        default: C(() => [
          t.modelValue ? (l(), r("div", {
            key: 0,
            class: "trx-palette-backdrop",
            onClick: j(p, ["self"])
          }, [
            s("div", {
              class: "trx-palette",
              onKeydown: $
            }, [
              s("div", tm, [
                M[2] || (M[2] = s("i", { class: "pi pi-search trx-palette__search-icon" }, null, -1)),
                et(s("input", {
                  ref_key: "searchInput",
                  ref: c,
                  class: "trx-palette__input",
                  placeholder: t.placeholder,
                  "onUpdate:modelValue": M[0] || (M[0] = (S) => a.value = S),
                  onInput: M[1] || (M[1] = (S) => n.value = 0)
                }, null, 40, em), [
                  [nt, a.value]
                ]),
                s("kbd", {
                  class: "trx-palette__esc",
                  onClick: p
                }, "Esc")
              ]),
              s("div", sm, [
                u.value.length ? (l(!0), r(D, { key: 0 }, y(_.value, (S, P) => (l(), r(D, { key: P }, [
                  s("div", am, v(P), 1),
                  (l(!0), r(D, null, y(S, (B) => (l(), r("button", {
                    key: B.id,
                    class: w(["trx-palette__item", { "trx-palette__item--active": d.value.indexOf(B) === n.value }]),
                    onClick: (R) => m(B),
                    onMouseenter: (R) => n.value = d.value.indexOf(B)
                  }, [
                    B.icon ? (l(), r("i", {
                      key: 0,
                      class: w([B.icon, "trx-palette__item-icon"])
                    }, null, 2)) : f("", !0),
                    s("div", nm, [
                      s("span", rm, v(B.label), 1),
                      B.description ? (l(), r("span", om, v(B.description), 1)) : f("", !0)
                    ]),
                    B.shortcut ? (l(), r("kbd", im, v(B.shortcut), 1)) : f("", !0)
                  ], 42, lm))), 128))
                ], 64))), 128)) : (l(), r("div", cm, [...M[3] || (M[3] = [
                  s("i", { class: "pi pi-search" }, null, -1),
                  s("span", null, "Nenhum comando encontrado", -1)
                ])]))
              ])
            ], 32)
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Pg = /* @__PURE__ */ L(um, [["__scopeId", "data-v-b994f6f6"]]), dm = { class: "trx-wizard" }, _m = { class: "trx-wizard__steps" }, pm = ["onClick"], mm = { class: "trx-wizard__step-circle" }, vm = {
  key: 0,
  class: "pi pi-check"
}, fm = { key: 2 }, hm = { class: "trx-wizard__step-info" }, xm = { class: "trx-wizard__step-label" }, $m = {
  key: 0,
  class: "trx-wizard__step-optional"
}, bm = { class: "trx-wizard__content" }, gm = { class: "trx-wizard__footer" }, ym = ["disabled"], km = { class: "trx-wizard__counter" }, wm = ["disabled"], Tm = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Cm = {
  key: 0,
  class: "pi pi-chevron-right"
}, Sm = {
  key: 1,
  class: "pi pi-check"
}, Pm = /* @__PURE__ */ b({
  __name: "TrxWizard",
  props: {
    steps: { default: () => [] },
    modelValue: { default: 0 },
    canGoNext: { type: Boolean, default: !0 },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "next", "prev", "finish"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(/* @__PURE__ */ new Set([0]));
    function n(p) {
      p < 0 || p >= o.steps.length || p > (o.modelValue ?? 0) && !o.canGoNext || (a.value.add(p), i("update:modelValue", p));
    }
    function c() {
      if (!o.canGoNext) return;
      const p = (o.modelValue ?? 0) + 1;
      if (p >= o.steps.length) {
        i("finish");
        return;
      }
      a.value.add(p), i("update:modelValue", p), i("next", p);
    }
    function u() {
      const p = (o.modelValue ?? 0) - 1;
      p < 0 || (i("update:modelValue", p), i("prev", p));
    }
    const _ = I(() => (o.modelValue ?? 0) === 0), d = I(() => (o.modelValue ?? 0) === o.steps.length - 1);
    return (p, m) => (l(), r("div", dm, [
      s("div", _m, [
        (l(!0), r(D, null, y(t.steps, ($, g) => (l(), r(D, {
          key: $.key
        }, [
          s("div", {
            class: w(["trx-wizard__step", {
              "trx-wizard__step--active": g === t.modelValue,
              "trx-wizard__step--completed": g < (t.modelValue ?? 0),
              "trx-wizard__step--visited": a.value.has(g)
            }]),
            onClick: (M) => n(g)
          }, [
            s("div", mm, [
              g < (t.modelValue ?? 0) ? (l(), r("i", vm)) : $.icon ? (l(), r("i", {
                key: 1,
                class: w($.icon)
              }, null, 2)) : (l(), r("span", fm, v(g + 1), 1))
            ]),
            s("div", hm, [
              s("span", xm, v($.label), 1),
              $.optional ? (l(), r("span", $m, "Opcional")) : f("", !0)
            ])
          ], 10, pm),
          g < t.steps.length - 1 ? (l(), r("div", {
            key: 0,
            class: w(["trx-wizard__connector", { "trx-wizard__connector--done": g < (t.modelValue ?? 0) }])
          }, null, 2)) : f("", !0)
        ], 64))), 128))
      ]),
      s("div", bm, [
        k(p.$slots, "default", {
          step: t.steps[t.modelValue ?? 0],
          index: t.modelValue ?? 0
        }, void 0, !0)
      ]),
      s("div", gm, [
        s("button", {
          class: "trx-wizard__btn trx-wizard__btn--secondary",
          disabled: _.value,
          onClick: u
        }, [...m[0] || (m[0] = [
          s("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, ym),
        s("span", km, v((t.modelValue ?? 0) + 1) + " / " + v(t.steps.length), 1),
        s("button", {
          class: "trx-wizard__btn trx-wizard__btn--primary",
          disabled: !t.canGoNext || t.loading,
          onClick: c
        }, [
          t.loading ? (l(), r("i", Tm)) : (l(), r(D, { key: 1 }, [
            N(v(d.value ? "Concluir" : "Próximo") + " ", 1),
            d.value ? (l(), r("i", Sm)) : (l(), r("i", Cm))
          ], 64))
        ], 8, wm)
      ])
    ]));
  }
}), Vg = /* @__PURE__ */ L(Pm, [["__scopeId", "data-v-25e71378"]]), Vm = { class: "trx-onboarding" }, Im = { class: "trx-onboarding__header" }, Am = { class: "trx-onboarding__title-top" }, Bm = {
  key: 0,
  class: "trx-onboarding__body"
}, Mm = {
  key: 0,
  class: "trx-onboarding__image-wrap"
}, Lm = ["src", "alt"], Dm = {
  key: 1,
  class: "trx-onboarding__icon-wrap"
}, zm = { class: "trx-onboarding__step-title" }, Em = { class: "trx-onboarding__step-desc" }, Rm = { class: "trx-onboarding__dots" }, Nm = ["onClick"], qm = { class: "trx-onboarding__footer" }, Fm = { key: 1 }, Om = {
  key: 0,
  class: "pi pi-arrow-right"
}, Hm = {
  key: 1,
  class: "pi pi-check"
}, Um = /* @__PURE__ */ b({
  __name: "TrxOnboarding",
  props: {
    steps: { default: () => [] },
    modelValue: { default: 0 },
    title: { default: "Bem-vindo!" },
    finishLabel: { default: "Começar" },
    skipLabel: { default: "Pular" },
    skippable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "finish", "skip"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = I(() => o.modelValue), n = I(() => o.steps[a.value]), c = I(() => a.value >= o.steps.length - 1);
    function u() {
      c.value ? i("finish") : i("update:modelValue", a.value + 1);
    }
    function _() {
      a.value > 0 && i("update:modelValue", a.value - 1);
    }
    function d(p) {
      i("update:modelValue", p);
    }
    return (p, m) => (l(), r("div", Vm, [
      s("div", Im, [
        s("span", Am, v(t.title), 1),
        t.skippable && !c.value ? (l(), r("button", {
          key: 0,
          class: "trx-onboarding__skip",
          onClick: m[0] || (m[0] = ($) => i("skip"))
        }, v(t.skipLabel), 1)) : f("", !0)
      ]),
      n.value ? (l(), r("div", Bm, [
        n.value.image ? (l(), r("div", Mm, [
          s("img", {
            src: n.value.image,
            alt: n.value.title,
            class: "trx-onboarding__image"
          }, null, 8, Lm)
        ])) : n.value.icon ? (l(), r("div", Dm, [
          s("i", {
            class: w([n.value.icon, "trx-onboarding__icon"])
          }, null, 2)
        ])) : f("", !0),
        s("h2", zm, v(n.value.title), 1),
        s("p", Em, v(n.value.description), 1)
      ])) : f("", !0),
      s("div", Rm, [
        (l(!0), r(D, null, y(t.steps, ($, g) => (l(), r("button", {
          key: g,
          class: w(["trx-onboarding__dot", { "trx-onboarding__dot--active": g === a.value, "trx-onboarding__dot--done": g < a.value }]),
          onClick: (M) => d(g)
        }, null, 10, Nm))), 128))
      ]),
      s("div", qm, [
        a.value > 0 ? (l(), r("button", {
          key: 0,
          class: "trx-onboarding__btn trx-onboarding__btn--prev",
          onClick: _
        }, [...m[1] || (m[1] = [
          s("i", { class: "pi pi-arrow-left" }, null, -1),
          N(" Anterior ", -1)
        ])])) : (l(), r("span", Fm)),
        s("button", {
          class: "trx-onboarding__btn trx-onboarding__btn--next",
          onClick: u
        }, [
          N(v(c.value ? t.finishLabel : "Próximo") + " ", 1),
          c.value ? (l(), r("i", Hm)) : (l(), r("i", Om))
        ])
      ])
    ]));
  }
}), Ig = /* @__PURE__ */ L(Um, [["__scopeId", "data-v-4359f9ee"]]), Gm = { class: "trx-kanban" }, jm = ["onDrop"], Wm = { class: "trx-kanban__col-header" }, Km = { class: "trx-kanban__col-label" }, Jm = { class: "trx-kanban__col-count" }, Xm = { key: 0 }, Ym = { class: "trx-kanban__cards" }, Qm = ["onDragstart", "onClick"], Zm = { class: "trx-kanban__card-header" }, tv = { class: "trx-kanban__card-title" }, ev = ["title"], sv = {
  key: 0,
  class: "trx-kanban__card-desc"
}, av = {
  key: 1,
  class: "trx-kanban__card-tags"
}, lv = {
  key: 2,
  class: "trx-kanban__card-assignee"
}, nv = { class: "trx-kanban__card-avatar" }, rv = { class: "trx-kanban__card-assignee-name" }, ov = {
  key: 0,
  class: "trx-kanban__col-empty"
}, iv = /* @__PURE__ */ b({
  __name: "TrxKanbanBoard",
  props: {
    columns: { default: () => [] },
    loading: { type: Boolean }
  },
  emits: ["move", "cardClick"],
  setup(t, { emit: e }) {
    const o = e, i = {
      low: "var(--trx-text-secondary)",
      medium: "var(--trx-warning-color)",
      high: "var(--trx-danger-color)"
    };
    let a = null;
    function n(u, _) {
      a = { cardId: u, fromCol: _ };
    }
    function c(u) {
      !a || a.fromCol === u || (o("move", a.cardId, a.fromCol, u), a = null);
    }
    return (u, _) => (l(), r("div", Gm, [
      (l(!0), r(D, null, y(t.columns, (d) => (l(), r("div", {
        key: d.id,
        class: "trx-kanban__col",
        onDragover: _[0] || (_[0] = j(() => {
        }, ["prevent"])),
        onDrop: (p) => c(d.id)
      }, [
        s("div", Wm, [
          s("div", {
            class: "trx-kanban__col-dot",
            style: z({ background: d.color ?? "var(--trx-accent-color)" })
          }, null, 4),
          s("span", Km, v(d.label), 1),
          s("span", Jm, [
            N(v(d.cards.length), 1),
            d.limit ? (l(), r("span", Xm, "/" + v(d.limit), 1)) : f("", !0)
          ])
        ]),
        s("div", Ym, [
          (l(!0), r(D, null, y(d.cards, (p) => {
            var m;
            return l(), r("div", {
              key: p.id,
              class: "trx-kanban__card",
              draggable: "true",
              onDragstart: ($) => n(p.id, d.id),
              onClick: ($) => o("cardClick", p, d.id)
            }, [
              s("div", Zm, [
                s("p", tv, v(p.title), 1),
                p.priority ? (l(), r("span", {
                  key: 0,
                  class: "trx-kanban__card-priority",
                  style: z({ color: i[p.priority] }),
                  title: p.priority
                }, "●", 12, ev)) : f("", !0)
              ]),
              p.description ? (l(), r("p", sv, v(p.description), 1)) : f("", !0),
              (m = p.tags) != null && m.length ? (l(), r("div", av, [
                (l(!0), r(D, null, y(p.tags, ($) => (l(), r("span", {
                  key: $,
                  class: "trx-kanban__card-tag"
                }, v($), 1))), 128))
              ])) : f("", !0),
              p.assignee ? (l(), r("div", lv, [
                s("span", nv, v(p.assignee.split(" ").map(($) => $[0]).join("").slice(0, 2).toUpperCase()), 1),
                s("span", rv, v(p.assignee), 1)
              ])) : f("", !0)
            ], 40, Qm);
          }), 128)),
          d.cards.length ? f("", !0) : (l(), r("div", ov, [..._[1] || (_[1] = [
            s("i", { class: "pi pi-inbox" }, null, -1),
            s("span", null, "Vazio", -1)
          ])]))
        ])
      ], 40, jm))), 128))
    ]));
  }
}), Ag = /* @__PURE__ */ L(iv, [["__scopeId", "data-v-9ad32a8a"]]), cv = { class: "trx-calendar" }, uv = { class: "trx-calendar__header" }, dv = { class: "trx-calendar__month" }, _v = { class: "trx-calendar__grid" }, pv = ["onClick"], mv = {
  key: 0,
  class: "trx-calendar__day"
}, vv = {
  key: 1,
  class: "trx-calendar__events"
}, fv = ["title", "onClick"], hv = {
  key: 0,
  class: "trx-calendar__more"
}, xv = /* @__PURE__ */ b({
  __name: "TrxCalendarView",
  props: {
    events: { default: () => [] },
    modelValue: {},
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "eventClick", "dateClick"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = /* @__PURE__ */ new Date(), n = E(a.getFullYear()), c = E(a.getMonth()), u = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], _ = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], d = I(() => new Date(n.value, c.value, 1).getDay()), p = I(() => new Date(n.value, c.value + 1, 0).getDate()), m = I(() => {
      const B = [];
      for (let R = 0; R < d.value; R++) B.push({ day: null, dateStr: "" });
      for (let R = 1; R <= p.value; R++) {
        const F = String(c.value + 1).padStart(2, "0"), q = String(R).padStart(2, "0");
        B.push({ day: R, dateStr: `${n.value}-${F}-${q}` });
      }
      return B;
    }), $ = I(() => {
      const B = {};
      for (const R of o.events)
        B[R.date] || (B[R.date] = []), B[R.date].push(R);
      return B;
    }), g = `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(2, "0")}-${String(a.getDate()).padStart(2, "0")}`;
    function M() {
      c.value === 0 ? (c.value = 11, n.value--) : c.value--;
    }
    function S() {
      c.value === 11 ? (c.value = 0, n.value++) : c.value++;
    }
    function P(B) {
      i("update:modelValue", B), i("dateClick", B);
    }
    return (B, R) => (l(), r("div", cv, [
      s("div", uv, [
        s("button", {
          class: "trx-calendar__nav",
          onClick: M
        }, [...R[0] || (R[0] = [
          s("i", { class: "pi pi-chevron-left" }, null, -1)
        ])]),
        s("span", dv, v(_[c.value]) + " " + v(n.value), 1),
        s("button", {
          class: "trx-calendar__nav",
          onClick: S
        }, [...R[1] || (R[1] = [
          s("i", { class: "pi pi-chevron-right" }, null, -1)
        ])])
      ]),
      s("div", _v, [
        (l(), r(D, null, y(u, (F) => s("div", {
          key: F,
          class: "trx-calendar__weekday"
        }, v(F), 1)), 64)),
        (l(!0), r(D, null, y(m.value, (F, q) => (l(), r("div", {
          key: q,
          class: w(["trx-calendar__cell", {
            "trx-calendar__cell--empty": !F.day,
            "trx-calendar__cell--today": F.dateStr === g,
            "trx-calendar__cell--selected": F.dateStr === t.modelValue
          }]),
          onClick: (W) => F.day && P(F.dateStr)
        }, [
          F.day ? (l(), r("span", mv, v(F.day), 1)) : f("", !0),
          F.dateStr && $.value[F.dateStr] ? (l(), r("div", vv, [
            (l(!0), r(D, null, y($.value[F.dateStr].slice(0, 2), (W) => (l(), r("div", {
              key: W.id,
              class: "trx-calendar__event",
              style: z({ background: W.color ?? "var(--trx-accent-color)" }),
              title: W.title,
              onClick: j((ut) => i("eventClick", W), ["stop"])
            }, v(W.title), 13, fv))), 128)),
            $.value[F.dateStr].length > 2 ? (l(), r("div", hv, " +" + v($.value[F.dateStr].length - 2), 1)) : f("", !0)
          ])) : f("", !0)
        ], 10, pv))), 128))
      ])
    ]));
  }
}), Bg = /* @__PURE__ */ L(xv, [["__scopeId", "data-v-007ab8e8"]]), $v = /* @__PURE__ */ b({
  __name: "TrxVirtualList",
  props: {
    items: { default: () => [] },
    itemHeight: { default: 48 },
    height: { default: 400 },
    overscan: { default: 5 }
  },
  setup(t) {
    const e = t, o = E(), i = E(0), a = I(() => Math.ceil(e.height / e.itemHeight) + e.overscan * 2), n = I(() => Math.max(0, Math.floor(i.value / e.itemHeight) - e.overscan)), c = I(() => Math.min(e.items.length, n.value + a.value)), u = I(() => e.items.slice(n.value, c.value).map((m, $) => ({ item: m, index: n.value + $ }))), _ = I(() => e.items.length * e.itemHeight), d = I(() => n.value * e.itemHeight);
    function p() {
      var m;
      i.value = ((m = o.value) == null ? void 0 : m.scrollTop) ?? 0;
    }
    return G(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.addEventListener("scroll", p, { passive: !0 });
    }), Y(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.removeEventListener("scroll", p);
    }), (m, $) => (l(), r("div", {
      ref_key: "container",
      ref: o,
      class: "trx-virtual-list",
      style: z({ height: `${t.height}px`, overflowY: "auto" })
    }, [
      s("div", {
        style: z({ height: `${_.value}px`, position: "relative" })
      }, [
        s("div", {
          style: z({ transform: `translateY(${d.value}px)` })
        }, [
          (l(!0), r(D, null, y(u.value, ({ item: g, index: M }) => (l(), r("div", {
            key: M,
            style: z({ height: `${t.itemHeight}px` })
          }, [
            k(m.$slots, "default", {
              item: g,
              index: M
            }, void 0, !0)
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), Mg = /* @__PURE__ */ L($v, [["__scopeId", "data-v-ecf43584"]]), bv = { class: "trx-code-block" }, gv = { class: "trx-code-block__header" }, yv = { class: "trx-code-block__lang-wrap" }, kv = {
  key: 0,
  class: "trx-code-block__filename"
}, wv = {
  key: 1,
  class: "trx-code-block__lang"
}, Tv = ["title"], Cv = { class: "trx-code-block__table" }, Sv = {
  key: 0,
  class: "trx-code-block__lineno"
}, Pv = { class: "trx-code-block__line" }, Vv = /* @__PURE__ */ b({
  __name: "TrxCodeBlock",
  props: {
    code: { default: "" },
    language: { default: "text" },
    filename: {},
    showLineNumbers: { type: Boolean, default: !0 },
    maxHeight: {}
  },
  setup(t) {
    const e = t, o = E(!1);
    async function i() {
      await navigator.clipboard.writeText(e.code), o.value = !0, setTimeout(() => o.value = !1, 2e3);
    }
    function a(n) {
      return n.split(`
`);
    }
    return (n, c) => (l(), r("div", bv, [
      s("div", gv, [
        s("div", yv, [
          t.filename ? (l(), r("span", kv, [
            c[0] || (c[0] = s("i", { class: "pi pi-file" }, null, -1)),
            N(" " + v(t.filename), 1)
          ])) : (l(), r("span", wv, v(t.language), 1))
        ]),
        s("button", {
          class: "trx-code-block__copy",
          onClick: i,
          title: o.value ? "Copiado!" : "Copiar"
        }, [
          s("i", {
            class: w(o.value ? "pi pi-check" : "pi pi-copy")
          }, null, 2),
          s("span", null, v(o.value ? "Copiado" : "Copiar"), 1)
        ], 8, Tv)
      ]),
      s("div", {
        class: "trx-code-block__body",
        style: z(t.maxHeight ? { maxHeight: t.maxHeight, overflowY: "auto" } : {})
      }, [
        s("table", Cv, [
          s("tbody", null, [
            (l(!0), r(D, null, y(a(t.code), (u, _) => (l(), r("tr", { key: _ }, [
              t.showLineNumbers ? (l(), r("td", Sv, v(_ + 1), 1)) : f("", !0),
              s("td", Pv, v(u || " "), 1)
            ]))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), Lg = /* @__PURE__ */ L(Vv, [["__scopeId", "data-v-c068f365"]]), Iv = ["innerHTML"], Av = /* @__PURE__ */ b({
  __name: "TrxMarkdownRenderer",
  props: {
    content: { default: "" },
    prose: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = I(() => {
      let i = e.content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return i = i.replace(
        /```(\w*)\n([\s\S]*?)```/g,
        (a, n, c) => `<pre class="trx-md__pre"><code class="trx-md__code" data-lang="${n}">${c.trimEnd()}</code></pre>`
      ), i = i.replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm, "<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm, "<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm, "<h1>$1</h1>"), i = i.replace(/^---$/gm, "<hr>"), i = i.replace(/^&gt;\s(.+)$/gm, "<blockquote>$1</blockquote>"), i = i.replace(/^[-*]\s(.+)$/gm, "<li>$1</li>"), i = i.replace(/(<li>[\s\S]*?<\/li>)\n?(?!<li>)/g, "<ul>$1</ul>"), i = i.replace(/^\d+\.\s(.+)$/gm, "<oli>$1</oli>"), i = i.replace(/(<oli>[\s\S]*?<\/oli>)\n?(?!<oli>)/g, "<ol>$1</ol>"), i = i.replace(/<\/?oli>/g, (a) => a === "<oli>" ? "<li>" : "</li>"), i = i.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(/`(.+?)`/g, '<code class="trx-md__inline-code">$1</code>').replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" class="trx-md__img">').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="trx-md__link">$1</a>'), i = i.replace(/\n{2,}/g, "</p><p>"), i = `<p>${i}</p>`, i = i.replace(/<p>(<h[1-6]>|<\/h[1-6]>|<hr>|<blockquote>|<\/blockquote>|<ul>|<\/ul>|<ol>|<\/ol>|<pre>|<\/pre>)/g, "$1"), i = i.replace(/(<\/h[1-6]>|<hr>|<\/blockquote>|<\/ul>|<\/ol>|<\/pre>)<\/p>/g, "$1"), i = i.replace(/<p><\/p>/g, ""), i = i.replace(/\n/g, "<br>"), i;
    });
    return (i, a) => (l(), r("div", {
      class: w(["trx-md-renderer", { "trx-md-renderer--prose": t.prose }]),
      innerHTML: o.value
    }, null, 10, Iv));
  }
}), Dg = /* @__PURE__ */ L(Av, [["__scopeId", "data-v-68ad6346"]]), Bv = { class: "trx-truncate" }, Mv = /* @__PURE__ */ b({
  __name: "TrxTruncateText",
  props: {
    text: { default: "" },
    lines: { default: 3 },
    expandLabel: { default: "Ver mais" },
    collapseLabel: { default: "Ver menos" }
  },
  setup(t) {
    const e = E(!1);
    return (o, i) => (l(), r("div", Bv, [
      s("div", {
        class: w(["trx-truncate__content", { "trx-truncate__content--collapsed": !e.value }]),
        style: z(e.value ? {} : { "-webkit-line-clamp": String(t.lines) })
      }, [
        k(o.$slots, "default", {}, () => [
          N(v(t.text), 1)
        ], !0)
      ], 6),
      s("button", {
        class: "trx-truncate__toggle",
        onClick: i[0] || (i[0] = (a) => e.value = !e.value)
      }, [
        N(v(e.value ? t.collapseLabel : t.expandLabel) + " ", 1),
        s("i", {
          class: w(e.value ? "pi pi-chevron-up" : "pi pi-chevron-down")
        }, null, 2)
      ])
    ]));
  }
}), zg = /* @__PURE__ */ L(Mv, [["__scopeId", "data-v-4d051201"]]), Lv = { class: "trx-conv-list" }, Dv = {
  key: 0,
  class: "trx-conv-list__skeleton"
}, zv = ["onClick"], Ev = { class: "trx-conv-list__avatar" }, Rv = ["src", "alt"], Nv = { key: 1 }, qv = { class: "trx-conv-list__info" }, Fv = { class: "trx-conv-list__top" }, Ov = { class: "trx-conv-list__name" }, Hv = { class: "trx-conv-list__time" }, Uv = { class: "trx-conv-list__bottom" }, Gv = { class: "trx-conv-list__msg" }, jv = { class: "trx-conv-list__meta" }, Wv = {
  key: 1,
  class: "trx-conv-list__unread"
}, Kv = /* @__PURE__ */ b({
  __name: "TrxConversationList",
  props: {
    conversations: { default: () => [] },
    activeId: {},
    loading: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const o = e, i = {
      open: "var(--trx-accent-color)",
      pending: "var(--trx-warning-color)",
      resolved: "var(--trx-success-color)"
    };
    function a(n) {
      return n.split(" ").map((c) => c[0]).slice(0, 2).join("").toUpperCase();
    }
    return (n, c) => (l(), r("div", Lv, [
      t.loading ? (l(), r("div", Dv, [
        (l(), r(D, null, y(5, (u) => s("div", {
          key: u,
          class: "trx-conv-list__skel-item"
        }, [...c[0] || (c[0] = [
          s("div", { class: "trx-conv-list__skel trx-conv-list__skel--avatar" }, null, -1),
          s("div", { class: "trx-conv-list__skel-info" }, [
            s("div", { class: "trx-conv-list__skel trx-conv-list__skel--name" }),
            s("div", { class: "trx-conv-list__skel trx-conv-list__skel--msg" })
          ], -1)
        ])])), 64))
      ])) : (l(!0), r(D, { key: 1 }, y(t.conversations, (u) => (l(), r("div", {
        key: u.id,
        class: w(["trx-conv-list__item", { "trx-conv-list__item--active": t.activeId === u.id }]),
        onClick: (_) => o("select", u)
      }, [
        s("div", Ev, [
          u.avatar ? (l(), r("img", {
            key: 0,
            src: u.avatar,
            alt: u.contact
          }, null, 8, Rv)) : (l(), r("span", Nv, v(a(u.contact)), 1)),
          u.status ? (l(), r("span", {
            key: 2,
            class: "trx-conv-list__status-dot",
            style: z({ background: i[u.status] })
          }, null, 4)) : f("", !0)
        ]),
        s("div", qv, [
          s("div", Fv, [
            s("span", Ov, v(u.contact), 1),
            s("span", Hv, v(u.lastTime), 1)
          ]),
          s("div", Uv, [
            s("span", Gv, v(u.lastMessage ?? "—"), 1),
            s("div", jv, [
              u.channel ? (l(), V(ct, {
                key: 0,
                channel: u.channel,
                size: "sm",
                "icon-only": "",
                "show-label": !1
              }, null, 8, ["channel"])) : f("", !0),
              u.unread ? (l(), r("span", Wv, v(u.unread), 1)) : f("", !0)
            ])
          ])
        ])
      ], 10, zv))), 128))
    ]));
  }
}), Eg = /* @__PURE__ */ L(Kv, [["__scopeId", "data-v-43f7b6c7"]]), Jv = { class: "trx-lead-card__header" }, Xv = { class: "trx-lead-card__avatar" }, Yv = { class: "trx-lead-card__identity" }, Qv = { class: "trx-lead-card__name" }, Zv = {
  key: 0,
  class: "trx-lead-card__company"
}, tf = { class: "trx-lead-card__badges" }, ef = ["title"], sf = {
  key: 0,
  class: "trx-lead-card__value"
}, af = { class: "trx-lead-card__meta" }, lf = {
  key: 0,
  class: "trx-lead-card__source"
}, nf = {
  key: 1,
  class: "trx-lead-card__assignee"
}, rf = {
  key: 2,
  class: "trx-lead-card__time"
}, of = /* @__PURE__ */ b({
  __name: "TrxLeadCard",
  props: {
    name: {},
    company: {},
    email: {},
    phone: {},
    value: {},
    status: { default: "new" },
    priority: { default: "medium" },
    assignee: {},
    source: {},
    updatedAt: {}
  },
  emits: ["view", "call", "email"],
  setup(t, { emit: e }) {
    const o = {
      new: { label: "Novo", color: "var(--trx-info-color, #3b82f6)" },
      contacted: { label: "Contatado", color: "var(--trx-accent-color)" },
      qualified: { label: "Qualificado", color: "var(--trx-warning-color)" },
      proposal: { label: "Proposta", color: "#8b5cf6" },
      won: { label: "Ganho", color: "var(--trx-success-color)" },
      lost: { label: "Perdido", color: "var(--trx-danger-color)" }
    }, i = {
      low: "pi pi-arrow-down",
      medium: "pi pi-minus",
      high: "pi pi-arrow-up"
    }, a = e;
    function n(u) {
      return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(u);
    }
    function c(u) {
      return u.split(" ").map((_) => _[0]).slice(0, 2).join("").toUpperCase();
    }
    return (u, _) => (l(), r("div", {
      class: "trx-lead-card",
      onClick: _[4] || (_[4] = (d) => a("view"))
    }, [
      s("div", Jv, [
        s("div", Xv, v(c(t.name)), 1),
        s("div", Yv, [
          s("span", Qv, v(t.name), 1),
          t.company ? (l(), r("span", Zv, v(t.company), 1)) : f("", !0)
        ]),
        s("div", tf, [
          s("span", {
            class: "trx-lead-card__status",
            style: z({ "--lst-color": o[t.status ?? "new"].color })
          }, v(o[t.status ?? "new"].label), 5),
          s("i", {
            class: w([i[t.priority ?? "medium"], "trx-lead-card__priority"]),
            title: t.priority
          }, null, 10, ef)
        ])
      ]),
      t.value ? (l(), r("div", sf, v(n(t.value)), 1)) : f("", !0),
      s("div", af, [
        t.source ? (l(), r("span", lf, [
          _[5] || (_[5] = s("i", { class: "pi pi-map-marker" }, null, -1)),
          N(" " + v(t.source), 1)
        ])) : f("", !0),
        t.assignee ? (l(), r("span", nf, [
          _[6] || (_[6] = s("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.assignee), 1)
        ])) : f("", !0),
        t.updatedAt ? (l(), r("span", rf, [
          _[7] || (_[7] = s("i", { class: "pi pi-clock" }, null, -1)),
          N(" " + v(t.updatedAt), 1)
        ])) : f("", !0)
      ]),
      s("div", {
        class: "trx-lead-card__actions",
        onClick: _[3] || (_[3] = j(() => {
        }, ["stop"]))
      }, [
        t.phone ? (l(), r("button", {
          key: 0,
          class: "trx-lead-card__btn",
          title: "Ligar",
          onClick: _[0] || (_[0] = (d) => a("call"))
        }, [..._[8] || (_[8] = [
          s("i", { class: "pi pi-phone" }, null, -1)
        ])])) : f("", !0),
        t.email ? (l(), r("button", {
          key: 1,
          class: "trx-lead-card__btn",
          title: "E-mail",
          onClick: _[1] || (_[1] = (d) => a("email"))
        }, [..._[9] || (_[9] = [
          s("i", { class: "pi pi-envelope" }, null, -1)
        ])])) : f("", !0),
        s("button", {
          class: "trx-lead-card__btn",
          title: "Ver lead",
          onClick: _[2] || (_[2] = (d) => a("view"))
        }, [..._[10] || (_[10] = [
          s("i", { class: "pi pi-external-link" }, null, -1)
        ])])
      ])
    ]));
  }
}), Rg = /* @__PURE__ */ L(of, [["__scopeId", "data-v-dcad9a9f"]]), cf = { class: "trx-sla__header" }, uf = { class: "trx-sla__label" }, df = {
  key: 0,
  class: "trx-sla__bar"
}, _f = /* @__PURE__ */ b({
  __name: "TrxSLAIndicator",
  props: {
    deadline: {},
    createdAt: {},
    warningThreshold: { default: 0.7 },
    label: {},
    showProgress: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, o = () => Date.now();
    function i($) {
      return $ ? new Date($).getTime() : 0;
    }
    const a = I(() => i(e.deadline) - i(e.createdAt)), n = I(() => o() - i(e.createdAt)), c = I(() => Math.max(0, i(e.deadline) - o())), u = I(() => Math.min(1, a.value > 0 ? n.value / a.value : 0)), _ = I(() => c.value === 0), d = I(() => !_.value && u.value >= e.warningThreshold), p = I(() => _.value ? "var(--trx-danger-color)" : d.value ? "var(--trx-warning-color)" : "var(--trx-success-color)");
    function m($) {
      if ($ <= 0) return "Vencido";
      const g = Math.floor($ / 36e5), M = Math.floor($ % 36e5 / 6e4);
      return g > 0 ? `${g}h ${M}m` : `${M}m`;
    }
    return ($, g) => (l(), r("div", {
      class: "trx-sla",
      style: z({ "--sla-color": p.value })
    }, [
      s("div", cf, [
        s("span", uf, v(t.label ?? "SLA"), 1),
        s("span", {
          class: w(["trx-sla__time", { "trx-sla__time--breached": _.value }])
        }, [
          s("i", {
            class: w(_.value ? "pi pi-times-circle" : d.value ? "pi pi-exclamation-triangle" : "pi pi-clock")
          }, null, 2),
          N(" " + v(m(c.value)), 1)
        ], 2)
      ]),
      t.showProgress ? (l(), r("div", df, [
        s("div", {
          class: "trx-sla__fill",
          style: z({ width: `${u.value * 100}%` })
        }, null, 4)
      ])) : f("", !0)
    ], 4));
  }
}), Ng = /* @__PURE__ */ L(_f, [["__scopeId", "data-v-dbfaca6d"]]), pf = { class: "trx-crm-timeline" }, mf = {
  key: 0,
  class: "trx-crm-timeline__loading"
}, vf = {
  key: 1,
  class: "trx-crm-timeline__empty"
}, ff = {
  key: 2,
  class: "trx-crm-timeline__list"
}, hf = ["onClick"], xf = { class: "trx-crm-timeline__line-wrap" }, $f = { class: "trx-crm-timeline__content" }, bf = { class: "trx-crm-timeline__header" }, gf = { class: "trx-crm-timeline__date" }, yf = { class: "trx-crm-timeline__title-row" }, kf = { class: "trx-crm-timeline__title" }, wf = {
  key: 0,
  class: "trx-crm-timeline__desc"
}, Tf = { class: "trx-crm-timeline__meta" }, Cf = {
  key: 0,
  class: "trx-crm-timeline__author"
}, Sf = {
  key: 1,
  class: "trx-crm-timeline__duration"
}, Pf = /* @__PURE__ */ b({
  __name: "TrxCRMTimeline",
  props: {
    events: { default: () => [] },
    loading: { type: Boolean }
  },
  emits: ["eventClick"],
  setup(t, { emit: e }) {
    const o = e, i = {
      call: { icon: "pi pi-phone", color: "var(--trx-success-color)", label: "Ligação" },
      email: { icon: "pi pi-envelope", color: "var(--trx-accent-color)", label: "Email" },
      note: { icon: "pi pi-file-edit", color: "var(--trx-warning-color)", label: "Nota" },
      meeting: { icon: "pi pi-calendar", color: "#a78bfa", label: "Reunião" },
      task: { icon: "pi pi-check-square", color: "var(--trx-text-secondary)", label: "Tarefa" },
      deal: { icon: "pi pi-dollar", color: "var(--trx-success-color)", label: "Negócio" },
      whatsapp: { icon: "pi pi-comments", color: "#25d366", label: "WhatsApp" },
      stage: { icon: "pi pi-arrow-right", color: "var(--trx-accent-color)", label: "Mudança de Fase" }
    }, a = {
      positive: { icon: "pi pi-thumbs-up", color: "var(--trx-success-color)" },
      negative: { icon: "pi pi-thumbs-down", color: "var(--trx-danger-color)" },
      neutral: { icon: "pi pi-minus", color: "var(--trx-text-secondary)" }
    };
    function n(c) {
      return new Date(c).toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
    }
    return (c, u) => (l(), r("div", pf, [
      t.loading ? (l(), r("div", mf, [...u[0] || (u[0] = [
        s("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.events.length ? (l(), r("div", ff, [
        (l(!0), r(D, null, y(t.events, (_) => (l(), r("div", {
          key: _.id,
          class: "trx-crm-timeline__item",
          onClick: (d) => o("eventClick", _)
        }, [
          s("div", xf, [
            s("div", {
              class: "trx-crm-timeline__dot",
              style: z({ background: i[_.type].color })
            }, [
              s("i", {
                class: w([i[_.type].icon, "trx-crm-timeline__dot-icon"])
              }, null, 2)
            ], 4),
            u[2] || (u[2] = s("div", { class: "trx-crm-timeline__line" }, null, -1))
          ]),
          s("div", $f, [
            s("div", bf, [
              s("span", {
                class: "trx-crm-timeline__type-badge",
                style: z({ color: i[_.type].color })
              }, v(i[_.type].label), 5),
              s("span", gf, v(n(_.date)), 1)
            ]),
            s("div", yf, [
              s("span", kf, v(_.title), 1),
              _.outcome ? (l(), r("span", {
                key: 0,
                class: "trx-crm-timeline__outcome",
                style: z({ color: a[_.outcome].color })
              }, [
                s("i", {
                  class: w(a[_.outcome].icon)
                }, null, 2)
              ], 4)) : f("", !0)
            ]),
            _.description ? (l(), r("p", wf, v(_.description), 1)) : f("", !0),
            s("div", Tf, [
              _.author ? (l(), r("span", Cf, [
                u[3] || (u[3] = s("i", { class: "pi pi-user" }, null, -1)),
                N(" " + v(_.author), 1)
              ])) : f("", !0),
              _.duration ? (l(), r("span", Sf, [
                u[4] || (u[4] = s("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(_.duration), 1)
              ])) : f("", !0)
            ])
          ])
        ], 8, hf))), 128))
      ])) : (l(), r("div", vf, [...u[1] || (u[1] = [
        s("i", { class: "pi pi-history" }, null, -1),
        s("span", null, "Nenhuma atividade registrada", -1)
      ])]))
    ]));
  }
}), qg = /* @__PURE__ */ L(Pf, [["__scopeId", "data-v-2b8a2f92"]]), Vf = { class: "trx-maintenance" }, If = { class: "trx-maintenance__card" }, Af = ["src"], Bf = { class: "trx-maintenance__title" }, Mf = { class: "trx-maintenance__message" }, Lf = {
  key: 1,
  class: "trx-maintenance__eta"
}, Df = /* @__PURE__ */ b({
  __name: "TrxMaintenancePage",
  props: {
    title: { default: "Em Manutenção" },
    message: { default: "Estamos trabalhando para melhorar sua experiência. Voltaremos em breve." },
    estimatedTime: {},
    showCountdown: { type: Boolean },
    logoSrc: {}
  },
  setup(t) {
    return (e, o) => (l(), r("div", Vf, [
      s("div", If, [
        t.logoSrc ? (l(), r("img", {
          key: 0,
          src: t.logoSrc,
          class: "trx-maintenance__logo",
          alt: "Logo"
        }, null, 8, Af)) : f("", !0),
        o[2] || (o[2] = s("div", { class: "trx-maintenance__icon" }, [
          s("i", { class: "pi pi-wrench" })
        ], -1)),
        s("h1", Bf, v(t.title), 1),
        s("p", Mf, v(t.message), 1),
        t.estimatedTime ? (l(), r("div", Lf, [
          o[1] || (o[1] = s("i", { class: "pi pi-clock" }, null, -1)),
          s("span", null, [
            o[0] || (o[0] = N("Previsão de retorno: ", -1)),
            s("strong", null, v(t.estimatedTime), 1)
          ])
        ])) : f("", !0),
        k(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Fg = /* @__PURE__ */ L(Df, [["__scopeId", "data-v-b30655b1"]]), zf = {
  key: 0,
  class: "trx-session-backdrop"
}, Ef = { class: "trx-session-dialog" }, Rf = { class: "trx-session-dialog__msg" }, Nf = { class: "trx-session-dialog__actions" }, qf = /* @__PURE__ */ b({
  __name: "TrxSessionTimeout",
  props: {
    timeoutMs: { default: 30 * 60 * 1e3 },
    warningMs: { default: 5 * 60 * 1e3 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["timeout", "extend", "update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = E(o.timeoutMs), n = E(!1);
    let c, u;
    function _() {
      clearTimeout(u), clearInterval(c), a.value = o.timeoutMs, n.value = !1, u = setTimeout(d, o.timeoutMs - o.warningMs);
    }
    function d() {
      n.value = !0, a.value = o.warningMs, c = setInterval(() => {
        a.value -= 1e3, a.value <= 0 && (clearInterval(c), n.value = !1, i("timeout"));
      }, 1e3);
    }
    function p() {
      _(), i("extend");
    }
    const m = ["mousemove", "keydown", "click", "scroll"];
    G(() => {
      o.modelValue && (m.forEach((S) => window.addEventListener(S, _, { passive: !0 })), _());
    }), Y(() => {
      clearTimeout(u), clearInterval(c), m.forEach((S) => window.removeEventListener(S, _));
    });
    const $ = I(() => Math.floor(a.value / 6e4)), g = I(() => Math.floor(a.value % 6e4 / 1e3)), M = I(() => `${$.value}:${String(g.value).padStart(2, "0")}`);
    return (S, P) => (l(), V(rt, { to: "body" }, [
      O(U, { name: "trx-session-fade" }, {
        default: C(() => [
          n.value ? (l(), r("div", zf, [
            s("div", Ef, [
              P[4] || (P[4] = s("div", { class: "trx-session-dialog__icon" }, [
                s("i", { class: "pi pi-clock" })
              ], -1)),
              P[5] || (P[5] = s("h2", { class: "trx-session-dialog__title" }, "Sessão expirando", -1)),
              s("p", Rf, [
                P[1] || (P[1] = N(" Sua sessão expirará em ", -1)),
                s("strong", null, v(M.value), 1),
                P[2] || (P[2] = N(" por inatividade. ", -1))
              ]),
              s("div", Nf, [
                s("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--extend",
                  onClick: p
                }, [...P[3] || (P[3] = [
                  s("i", { class: "pi pi-refresh" }, null, -1),
                  N(" Continuar sessão ", -1)
                ])]),
                s("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--logout",
                  onClick: P[0] || (P[0] = (B) => i("timeout"))
                }, " Sair agora ")
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Og = /* @__PURE__ */ L(qf, [["__scopeId", "data-v-3b5d9421"]]), Ff = { class: "trx-shortcut-panel" }, Of = { class: "trx-shortcut-panel__header" }, Hf = { class: "trx-shortcut-panel__body" }, Uf = { class: "trx-shortcut-panel__group-label" }, Gf = { class: "trx-shortcut-panel__list" }, jf = { class: "trx-shortcut-panel__desc" }, Wf = { class: "trx-shortcut-panel__keys" }, Kf = { class: "trx-shortcut-panel__footer" }, Jf = { class: "trx-shortcut-panel__key" }, Xf = /* @__PURE__ */ b({
  __name: "TrxShortcutHelper",
  props: {
    shortcuts: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    triggerKey: { default: "?" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, i = e, a = () => {
      const n = {};
      for (const c of o.shortcuts) {
        const u = c.group ?? "Geral";
        n[u] || (n[u] = []), n[u].push(c);
      }
      return n;
    };
    return (n, c) => (l(), V(rt, { to: "body" }, [
      O(U, { name: "trx-shortcut-fade" }, {
        default: C(() => [
          t.modelValue ? (l(), r("div", {
            key: 0,
            class: "trx-shortcut-backdrop",
            onClick: c[1] || (c[1] = j((u) => i("update:modelValue", !1), ["self"]))
          }, [
            s("div", Ff, [
              s("div", Of, [
                c[3] || (c[3] = s("h3", { class: "trx-shortcut-panel__title" }, "Atalhos de Teclado", -1)),
                s("button", {
                  class: "trx-shortcut-panel__close",
                  onClick: c[0] || (c[0] = (u) => i("update:modelValue", !1))
                }, [...c[2] || (c[2] = [
                  s("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              s("div", Hf, [
                (l(!0), r(D, null, y(a(), (u, _) => (l(), r(D, { key: _ }, [
                  s("div", Uf, v(_), 1),
                  s("div", Gf, [
                    (l(!0), r(D, null, y(u, (d, p) => (l(), r("div", {
                      key: p,
                      class: "trx-shortcut-panel__item"
                    }, [
                      s("span", jf, v(d.description), 1),
                      s("div", Wf, [
                        (l(!0), r(D, null, y(d.keys, (m) => (l(), r("kbd", {
                          key: m,
                          class: "trx-shortcut-panel__key"
                        }, v(m), 1))), 128))
                      ])
                    ]))), 128))
                  ])
                ], 64))), 128))
              ]),
              s("div", Kf, [
                c[4] || (c[4] = N(" Pressione ", -1)),
                s("kbd", Jf, v(t.triggerKey), 1),
                c[5] || (c[5] = N(" para abrir/fechar ", -1))
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Hg = /* @__PURE__ */ L(Xf, [["__scopeId", "data-v-d5032b0e"]]), Ug = /* @__PURE__ */ b({
  __name: "TrxFeatureFlag",
  props: {
    flag: {},
    flags: {}
  },
  setup(t) {
    const e = t, o = I(() => e.flags[e.flag] === !0);
    return (i, a) => o.value ? k(i.$slots, "default", { key: 0 }) : k(i.$slots, "disabled", { key: 1 });
  }
}), Yf = { inheritAttrs: !1 }, Gg = /* @__PURE__ */ b({
  ...Yf,
  __name: "TrxAutoComplete",
  setup(t) {
    const e = X(), o = I(() => ({
      placeholder: "Buscar...",
      ...e
    }));
    return (i, a) => (l(), V(T(It), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Qf = { inheritAttrs: !1 }, jg = /* @__PURE__ */ b({
  ...Qf,
  __name: "TrxDatePicker",
  setup(t) {
    const e = X(), o = I(() => ({
      dateFormat: "dd/mm/yy",
      showIcon: !0,
      ...e
    }));
    return (i, a) => (l(), V(T(At), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Zf = { inheritAttrs: !1 }, Wg = /* @__PURE__ */ b({
  ...Zf,
  __name: "TrxInputNumber",
  setup(t) {
    const e = X(), o = I(() => ({
      locale: "pt-BR",
      minFractionDigits: 2,
      ...e
    }));
    return (i, a) => (l(), V(T(Bt), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), th = { inheritAttrs: !1 }, Kg = /* @__PURE__ */ b({
  ...th,
  __name: "TrxPassword",
  setup(t) {
    const e = X(), o = I(() => ({
      weakLabel: "Fraco",
      mediumLabel: "Médio",
      strongLabel: "Forte",
      ...e
    }));
    return (i, a) => (l(), V(T(ot), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), eh = { inheritAttrs: !1 }, Jg = /* @__PURE__ */ b({
  ...eh,
  __name: "TrxSelect",
  setup(t) {
    const e = X(), o = I(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...e
    }));
    return (i, a) => (l(), V(T(Mt), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), sh = { inheritAttrs: !1 }, Xg = /* @__PURE__ */ b({
  ...sh,
  __name: "TrxMultiSelect",
  setup(t) {
    const e = X(), o = I(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...e
    }));
    return (i, a) => (l(), V(T(Lt), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), ah = { inheritAttrs: !1 }, Yg = /* @__PURE__ */ b({
  ...ah,
  __name: "TrxListbox",
  setup(t) {
    const e = X(), o = I(() => ({
      emptyMessage: "Nenhum resultado",
      ...e
    }));
    return (i, a) => (l(), V(T(Dt), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), lh = { inheritAttrs: !1 }, Qg = /* @__PURE__ */ b({
  ...lh,
  __name: "TrxCascadeSelect",
  setup(t) {
    return (e, o) => (l(), V(T(zt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), nh = { inheritAttrs: !1 }, Zg = /* @__PURE__ */ b({
  ...nh,
  __name: "TrxCheckbox",
  setup(t) {
    return (e, o) => (l(), V(T(xt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), rh = { inheritAttrs: !1 }, ty = /* @__PURE__ */ b({
  ...rh,
  __name: "TrxCheckboxGroup",
  setup(t) {
    return (e, o) => (l(), V(T(Et), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), oh = { inheritAttrs: !1 }, ey = /* @__PURE__ */ b({
  ...oh,
  __name: "TrxFloatLabel",
  setup(t) {
    return (e, o) => (l(), V(T(Rt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ih = { inheritAttrs: !1 }, sy = /* @__PURE__ */ b({
  ...ih,
  __name: "TrxFluid",
  setup(t) {
    return (e, o) => (l(), V(T(Nt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ch = { inheritAttrs: !1 }, ay = /* @__PURE__ */ b({
  ...ch,
  __name: "TrxIconField",
  setup(t) {
    return (e, o) => (l(), V(T(qt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), uh = { inheritAttrs: !1 }, ly = /* @__PURE__ */ b({
  ...uh,
  __name: "TrxIftaLabel",
  setup(t) {
    return (e, o) => (l(), V(T(Ft), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), dh = { inheritAttrs: !1 }, ny = /* @__PURE__ */ b({
  ...dh,
  __name: "TrxInputChips",
  setup(t) {
    return (e, o) => (l(), V(T(Ot), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _h = { inheritAttrs: !1 }, ry = /* @__PURE__ */ b({
  ..._h,
  __name: "TrxInputGroup",
  setup(t) {
    return (e, o) => (l(), V(T(Ht), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ph = { inheritAttrs: !1 }, oy = /* @__PURE__ */ b({
  ...ph,
  __name: "TrxInputGroupAddon",
  setup(t) {
    return (e, o) => (l(), V(T(Ut), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), mh = { inheritAttrs: !1 }, iy = /* @__PURE__ */ b({
  ...mh,
  __name: "TrxInputIcon",
  setup(t) {
    return (e, o) => (l(), V(T(Gt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), vh = { inheritAttrs: !1 }, cy = /* @__PURE__ */ b({
  ...vh,
  __name: "TrxInputMask",
  setup(t) {
    return (e, o) => (l(), V(T(jt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), fh = { inheritAttrs: !1 }, uy = /* @__PURE__ */ b({
  ...fh,
  __name: "TrxInputOtp",
  setup(t) {
    return (e, o) => (l(), V(T(Wt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), hh = { inheritAttrs: !1 }, dy = /* @__PURE__ */ b({
  ...hh,
  __name: "TrxInputText",
  setup(t) {
    return (e, o) => (l(), V(T(at), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), xh = { inheritAttrs: !1 }, _y = /* @__PURE__ */ b({
  ...xh,
  __name: "TrxKnob",
  setup(t) {
    return (e, o) => (l(), V(T(Kt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), $h = { inheritAttrs: !1 }, py = /* @__PURE__ */ b({
  ...$h,
  __name: "TrxRadioButton",
  setup(t) {
    return (e, o) => (l(), V(T(Jt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), bh = { inheritAttrs: !1 }, my = /* @__PURE__ */ b({
  ...bh,
  __name: "TrxRadioButtonGroup",
  setup(t) {
    return (e, o) => (l(), V(T(Xt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), gh = { inheritAttrs: !1 }, vy = /* @__PURE__ */ b({
  ...gh,
  __name: "TrxRating",
  setup(t) {
    return (e, o) => (l(), V(T(Yt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), yh = { inheritAttrs: !1 }, fy = /* @__PURE__ */ b({
  ...yh,
  __name: "TrxSelectButton",
  setup(t) {
    return (e, o) => (l(), V(T(Qt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), kh = { inheritAttrs: !1 }, hy = /* @__PURE__ */ b({
  ...kh,
  __name: "TrxSlider",
  setup(t) {
    return (e, o) => (l(), V(T(Zt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), wh = { inheritAttrs: !1 }, xy = /* @__PURE__ */ b({
  ...wh,
  __name: "TrxTextarea",
  setup(t) {
    return (e, o) => (l(), V(T(te), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Th = { inheritAttrs: !1 }, $y = /* @__PURE__ */ b({
  ...Th,
  __name: "TrxToggleButton",
  setup(t) {
    return (e, o) => (l(), V(T(ee), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ch = { inheritAttrs: !1 }, by = /* @__PURE__ */ b({
  ...Ch,
  __name: "TrxToggleSwitch",
  setup(t) {
    return (e, o) => (l(), V(T(se), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Sh = { inheritAttrs: !1 }, gy = /* @__PURE__ */ b({
  ...Sh,
  __name: "TrxTreeSelect",
  setup(t) {
    return (e, o) => (l(), V(T(ae), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ph = { inheritAttrs: !1 }, yy = /* @__PURE__ */ b({
  ...Ph,
  __name: "TrxButton",
  setup(t) {
    return (e, o) => (l(), V(T(Z), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Vh = { inheritAttrs: !1 }, ky = /* @__PURE__ */ b({
  ...Vh,
  __name: "TrxButtonGroup",
  setup(t) {
    return (e, o) => (l(), V(T(le), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ih = { inheritAttrs: !1 }, wy = /* @__PURE__ */ b({
  ...Ih,
  __name: "TrxSpeedDial",
  setup(t) {
    return (e, o) => (l(), V(T(ne), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ah = { inheritAttrs: !1 }, Ty = /* @__PURE__ */ b({
  ...Ah,
  __name: "TrxSplitButton",
  setup(t) {
    return (e, o) => (l(), V(T(re), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Bh = { inheritAttrs: !1 }, Cy = /* @__PURE__ */ b({
  ...Bh,
  __name: "TrxPaginator",
  setup(t) {
    const e = X(), o = I(() => ({
      rowsPerPageOptions: [10, 25, 50],
      ...e
    }));
    return (i, a) => (l(), V(T(oe), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Mh = { inheritAttrs: !1 }, Sy = /* @__PURE__ */ b({
  ...Mh,
  __name: "TrxColumn",
  setup(t) {
    return (e, o) => (l(), V(T(ie), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Lh = { inheritAttrs: !1 }, Py = /* @__PURE__ */ b({
  ...Lh,
  __name: "TrxColumnGroup",
  setup(t) {
    return (e, o) => (l(), V(T(ce), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Dh = { inheritAttrs: !1 }, Vy = /* @__PURE__ */ b({
  ...Dh,
  __name: "TrxDataView",
  setup(t) {
    return (e, o) => (l(), V(T(ue), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), zh = { inheritAttrs: !1 }, Iy = /* @__PURE__ */ b({
  ...zh,
  __name: "TrxOrderList",
  setup(t) {
    return (e, o) => (l(), V(T(de), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Eh = { inheritAttrs: !1 }, Ay = /* @__PURE__ */ b({
  ...Eh,
  __name: "TrxOrganizationChart",
  setup(t) {
    return (e, o) => (l(), V(T(_e), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Rh = { inheritAttrs: !1 }, By = /* @__PURE__ */ b({
  ...Rh,
  __name: "TrxPickList",
  setup(t) {
    return (e, o) => (l(), V(T(pe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Nh = { inheritAttrs: !1 }, My = /* @__PURE__ */ b({
  ...Nh,
  __name: "TrxRow",
  setup(t) {
    return (e, o) => (l(), V(T(me), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), qh = { inheritAttrs: !1 }, Ly = /* @__PURE__ */ b({
  ...qh,
  __name: "TrxTimeline",
  setup(t) {
    return (e, o) => (l(), V(T(ve), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Fh = { inheritAttrs: !1 }, Dy = /* @__PURE__ */ b({
  ...Fh,
  __name: "TrxTree",
  setup(t) {
    return (e, o) => (l(), V(T(fe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Oh = { inheritAttrs: !1 }, zy = /* @__PURE__ */ b({
  ...Oh,
  __name: "TrxTreeTable",
  setup(t) {
    return (e, o) => (l(), V(T(he), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Hh = { inheritAttrs: !1 }, Ey = /* @__PURE__ */ b({
  ...Hh,
  __name: "TrxVirtualScroller",
  setup(t) {
    return (e, o) => (l(), V(T(xe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Uh = { inheritAttrs: !1 }, Ry = /* @__PURE__ */ b({
  ...Uh,
  __name: "TrxAccordion",
  setup(t) {
    return (e, o) => (l(), V(T($e), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Gh = { inheritAttrs: !1 }, Ny = /* @__PURE__ */ b({
  ...Gh,
  __name: "TrxAccordionContent",
  setup(t) {
    return (e, o) => (l(), V(T(be), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), jh = { inheritAttrs: !1 }, qy = /* @__PURE__ */ b({
  ...jh,
  __name: "TrxAccordionHeader",
  setup(t) {
    return (e, o) => (l(), V(T(ge), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Wh = { inheritAttrs: !1 }, Fy = /* @__PURE__ */ b({
  ...Wh,
  __name: "TrxAccordionPanel",
  setup(t) {
    return (e, o) => (l(), V(T(ye), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Kh = { inheritAttrs: !1 }, Oy = /* @__PURE__ */ b({
  ...Kh,
  __name: "TrxDeferredContent",
  setup(t) {
    return (e, o) => (l(), V(T(ke), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Jh = { inheritAttrs: !1 }, Hy = /* @__PURE__ */ b({
  ...Jh,
  __name: "TrxDivider",
  setup(t) {
    return (e, o) => (l(), V(T(we), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Xh = { inheritAttrs: !1 }, Uy = /* @__PURE__ */ b({
  ...Xh,
  __name: "TrxFieldset",
  setup(t) {
    return (e, o) => (l(), V(T(Te), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Yh = { inheritAttrs: !1 }, Gy = /* @__PURE__ */ b({
  ...Yh,
  __name: "TrxPanel",
  setup(t) {
    return (e, o) => (l(), V(T(Ce), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Qh = { inheritAttrs: !1 }, jy = /* @__PURE__ */ b({
  ...Qh,
  __name: "TrxScrollPanel",
  setup(t) {
    return (e, o) => (l(), V(T(Se), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Zh = { inheritAttrs: !1 }, Wy = /* @__PURE__ */ b({
  ...Zh,
  __name: "TrxSplitter",
  setup(t) {
    return (e, o) => (l(), V(T(Pe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), tx = { inheritAttrs: !1 }, Ky = /* @__PURE__ */ b({
  ...tx,
  __name: "TrxSplitterPanel",
  setup(t) {
    return (e, o) => (l(), V(T(Ve), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ex = { inheritAttrs: !1 }, Jy = /* @__PURE__ */ b({
  ...ex,
  __name: "TrxStepper",
  setup(t) {
    return (e, o) => (l(), V(T(Ie), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), sx = { inheritAttrs: !1 }, Xy = /* @__PURE__ */ b({
  ...sx,
  __name: "TrxStep",
  setup(t) {
    return (e, o) => (l(), V(T(Ae), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ax = { inheritAttrs: !1 }, Yy = /* @__PURE__ */ b({
  ...ax,
  __name: "TrxStepItem",
  setup(t) {
    return (e, o) => (l(), V(T(Be), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), lx = { inheritAttrs: !1 }, Qy = /* @__PURE__ */ b({
  ...lx,
  __name: "TrxStepList",
  setup(t) {
    return (e, o) => (l(), V(T(Me), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), nx = { inheritAttrs: !1 }, Zy = /* @__PURE__ */ b({
  ...nx,
  __name: "TrxStepPanel",
  setup(t) {
    return (e, o) => (l(), V(T(Le), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), rx = { inheritAttrs: !1 }, t0 = /* @__PURE__ */ b({
  ...rx,
  __name: "TrxStepPanels",
  setup(t) {
    return (e, o) => (l(), V(T(De), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ox = { inheritAttrs: !1 }, e0 = /* @__PURE__ */ b({
  ...ox,
  __name: "TrxTabs",
  setup(t) {
    return (e, o) => (l(), V(T(ze), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ix = { inheritAttrs: !1 }, s0 = /* @__PURE__ */ b({
  ...ix,
  __name: "TrxTab",
  setup(t) {
    return (e, o) => (l(), V(T(Ee), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), cx = { inheritAttrs: !1 }, a0 = /* @__PURE__ */ b({
  ...cx,
  __name: "TrxTabList",
  setup(t) {
    return (e, o) => (l(), V(T(Re), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ux = { inheritAttrs: !1 }, l0 = /* @__PURE__ */ b({
  ...ux,
  __name: "TrxTabPanel",
  setup(t) {
    return (e, o) => (l(), V(T(Ne), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), dx = { inheritAttrs: !1 }, n0 = /* @__PURE__ */ b({
  ...dx,
  __name: "TrxTabPanels",
  setup(t) {
    return (e, o) => (l(), V(T(qe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _x = { inheritAttrs: !1 }, r0 = /* @__PURE__ */ b({
  ..._x,
  __name: "TrxToolbar",
  setup(t) {
    return (e, o) => (l(), V(T(Fe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), px = { inheritAttrs: !1 }, o0 = /* @__PURE__ */ b({
  ...px,
  __name: "TrxDialog",
  setup(t) {
    const e = X(), o = I(() => ({
      modal: !0,
      closable: !0,
      draggable: !1,
      ...e
    }));
    return (i, a) => (l(), V(T(Oe), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), mx = { inheritAttrs: !1 }, i0 = /* @__PURE__ */ b({
  ...mx,
  __name: "TrxConfirmDialog",
  setup(t) {
    const e = X(), o = I(() => ({
      acceptLabel: "Sim",
      rejectLabel: "Não",
      ...e
    }));
    return (i, a) => (l(), V(T(He), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), vx = { inheritAttrs: !1 }, c0 = /* @__PURE__ */ b({
  ...vx,
  __name: "TrxConfirmPopup",
  setup(t) {
    return (e, o) => (l(), V(T(Ue), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), fx = { inheritAttrs: !1 }, u0 = /* @__PURE__ */ b({
  ...fx,
  __name: "TrxDrawer",
  setup(t) {
    return (e, o) => (l(), V(T(Ge), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), hx = { inheritAttrs: !1 }, d0 = /* @__PURE__ */ b({
  ...hx,
  __name: "TrxDynamicDialog",
  setup(t) {
    return (e, o) => (l(), V(T(je), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), xx = { inheritAttrs: !1 }, _0 = /* @__PURE__ */ b({
  ...xx,
  __name: "TrxPopover",
  setup(t) {
    return (e, o) => (l(), V(T(We), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), $x = { inheritAttrs: !1 }, p0 = /* @__PURE__ */ b({
  ...$x,
  __name: "TrxBreadcrumb",
  setup(t) {
    return (e, o) => (l(), V(T(Ke), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), bx = { inheritAttrs: !1 }, m0 = /* @__PURE__ */ b({
  ...bx,
  __name: "TrxContextMenu",
  setup(t) {
    return (e, o) => (l(), V(T(Je), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), gx = { inheritAttrs: !1 }, v0 = /* @__PURE__ */ b({
  ...gx,
  __name: "TrxDock",
  setup(t) {
    return (e, o) => (l(), V(T(Xe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), yx = { inheritAttrs: !1 }, f0 = /* @__PURE__ */ b({
  ...yx,
  __name: "TrxMegaMenu",
  setup(t) {
    return (e, o) => (l(), V(T(Ye), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), kx = { inheritAttrs: !1 }, h0 = /* @__PURE__ */ b({
  ...kx,
  __name: "TrxMenu",
  setup(t) {
    return (e, o) => (l(), V(T(Qe), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), wx = { inheritAttrs: !1 }, x0 = /* @__PURE__ */ b({
  ...wx,
  __name: "TrxMenubar",
  setup(t) {
    return (e, o) => (l(), V(T(Ze), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Tx = { inheritAttrs: !1 }, $0 = /* @__PURE__ */ b({
  ...Tx,
  __name: "TrxPanelMenu",
  setup(t) {
    return (e, o) => (l(), V(T(ts), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Cx = { inheritAttrs: !1 }, b0 = /* @__PURE__ */ b({
  ...Cx,
  __name: "TrxSteps",
  setup(t) {
    return (e, o) => (l(), V(T(es), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Sx = { inheritAttrs: !1 }, g0 = /* @__PURE__ */ b({
  ...Sx,
  __name: "TrxTabMenu",
  setup(t) {
    return (e, o) => (l(), V(T(ss), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Px = { inheritAttrs: !1 }, y0 = /* @__PURE__ */ b({
  ...Px,
  __name: "TrxTieredMenu",
  setup(t) {
    return (e, o) => (l(), V(T(as), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Vx = { inheritAttrs: !1 }, k0 = /* @__PURE__ */ b({
  ...Vx,
  __name: "TrxToast",
  setup(t) {
    const e = X(), o = I(() => ({
      position: "top-right",
      ...e
    }));
    return (i, a) => (l(), V(T(ls), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Ix = { inheritAttrs: !1 }, w0 = /* @__PURE__ */ b({
  ...Ix,
  __name: "TrxInlineMessage",
  setup(t) {
    return (e, o) => (l(), V(T(ns), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ax = { inheritAttrs: !1 }, T0 = /* @__PURE__ */ b({
  ...Ax,
  __name: "TrxMessage",
  setup(t) {
    return (e, o) => (l(), V(T(it), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Bx = { inheritAttrs: !1 }, C0 = /* @__PURE__ */ b({
  ...Bx,
  __name: "TrxCarousel",
  setup(t) {
    return (e, o) => (l(), V(T(rs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Mx = { inheritAttrs: !1 }, S0 = /* @__PURE__ */ b({
  ...Mx,
  __name: "TrxGalleria",
  setup(t) {
    return (e, o) => (l(), V(T(os), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Lx = { inheritAttrs: !1 }, P0 = /* @__PURE__ */ b({
  ...Lx,
  __name: "TrxImage",
  setup(t) {
    return (e, o) => (l(), V(T(is), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Dx = { inheritAttrs: !1 }, V0 = /* @__PURE__ */ b({
  ...Dx,
  __name: "TrxImageCompare",
  setup(t) {
    return (e, o) => (l(), V(T(cs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), zx = { inheritAttrs: !1 }, I0 = /* @__PURE__ */ b({
  ...zx,
  __name: "TrxFileUpload",
  setup(t) {
    const e = X(), o = I(() => ({
      chooseLabel: "Escolher",
      uploadLabel: "Enviar",
      cancelLabel: "Cancelar",
      ...e
    }));
    return (i, a) => (l(), V(T(us), h(x(o.value)), A({ _: 2 }, [
      y(i.$slots, (n, c) => ({
        name: c,
        fn: C((u) => [
          k(i.$slots, c, h(x(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Ex = { inheritAttrs: !1 }, A0 = /* @__PURE__ */ b({
  ...Ex,
  __name: "TrxChart",
  setup(t) {
    return (e, o) => (l(), V(T(ds), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Rx = { inheritAttrs: !1 }, B0 = /* @__PURE__ */ b({
  ...Rx,
  __name: "TrxAvatar",
  setup(t) {
    return (e, o) => (l(), V(T(ht), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Nx = { inheritAttrs: !1 }, M0 = /* @__PURE__ */ b({
  ...Nx,
  __name: "TrxAvatarGroup",
  setup(t) {
    return (e, o) => (l(), V(T(_s), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), qx = { inheritAttrs: !1 }, L0 = /* @__PURE__ */ b({
  ...qx,
  __name: "TrxBadge",
  setup(t) {
    return (e, o) => (l(), V(T(ps), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Fx = { inheritAttrs: !1 }, D0 = /* @__PURE__ */ b({
  ...Fx,
  __name: "TrxBlockUI",
  setup(t) {
    return (e, o) => (l(), V(T(ms), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ox = { inheritAttrs: !1 }, z0 = /* @__PURE__ */ b({
  ...Ox,
  __name: "TrxChip",
  setup(t) {
    return (e, o) => (l(), V(T(vs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Hx = { inheritAttrs: !1 }, E0 = /* @__PURE__ */ b({
  ...Hx,
  __name: "TrxInplace",
  setup(t) {
    return (e, o) => (l(), V(T(fs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ux = { inheritAttrs: !1 }, R0 = /* @__PURE__ */ b({
  ...Ux,
  __name: "TrxMeterGroup",
  setup(t) {
    return (e, o) => (l(), V(T(hs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Gx = { inheritAttrs: !1 }, N0 = /* @__PURE__ */ b({
  ...Gx,
  __name: "TrxOverlayBadge",
  setup(t) {
    return (e, o) => (l(), V(T(xs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), jx = { inheritAttrs: !1 }, q0 = /* @__PURE__ */ b({
  ...jx,
  __name: "TrxProgressBar",
  setup(t) {
    return (e, o) => (l(), V(T($s), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Wx = { inheritAttrs: !1 }, F0 = /* @__PURE__ */ b({
  ...Wx,
  __name: "TrxProgressSpinner",
  setup(t) {
    return (e, o) => (l(), V(T(ft), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Kx = { inheritAttrs: !1 }, O0 = /* @__PURE__ */ b({
  ...Kx,
  __name: "TrxScrollTop",
  setup(t) {
    return (e, o) => (l(), V(T(bs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Jx = { inheritAttrs: !1 }, H0 = /* @__PURE__ */ b({
  ...Jx,
  __name: "TrxSkeleton",
  setup(t) {
    return (e, o) => (l(), V(T(gs), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Xx = { inheritAttrs: !1 }, U0 = /* @__PURE__ */ b({
  ...Xx,
  __name: "TrxTag",
  setup(t) {
    return (e, o) => (l(), V(T(vt), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Yx = { inheritAttrs: !1 }, G0 = /* @__PURE__ */ b({
  ...Yx,
  __name: "TrxTerminal",
  setup(t) {
    return (e, o) => (l(), V(T(ys), h(x(e.$attrs)), A({ _: 2 }, [
      y(e.$slots, (i, a) => ({
        name: a,
        fn: C((n) => [
          k(e.$slots, a, h(x(n || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  tg as $,
  nr as A,
  Ib as B,
  Ab as C,
  Bb as D,
  Mb as E,
  Lb as F,
  Db as G,
  Qr as H,
  zb as I,
  Eb as J,
  Rb as K,
  Nb as L,
  qb as M,
  Fb as N,
  Ob as O,
  Hb as P,
  Ub as Q,
  Gb as R,
  jb as S,
  ab as T,
  Wb as U,
  Kb as V,
  Jb as W,
  Xb as X,
  Yb as Y,
  Qb as Z,
  Zb as _,
  lb as a,
  iy as a$,
  eg as a0,
  sg as a1,
  ag as a2,
  lg as a3,
  ng as a4,
  nu as a5,
  rg as a6,
  ct as a7,
  og as a8,
  ig as a9,
  Dg as aA,
  zg as aB,
  Eg as aC,
  Rg as aD,
  Ng as aE,
  qg as aF,
  Fg as aG,
  Og as aH,
  Hg as aI,
  Ug as aJ,
  Gg as aK,
  jg as aL,
  Wg as aM,
  Kg as aN,
  Jg as aO,
  Xg as aP,
  Yg as aQ,
  Qg as aR,
  Zg as aS,
  ty as aT,
  ey as aU,
  sy as aV,
  ay as aW,
  ly as aX,
  ny as aY,
  ry as aZ,
  oy as a_,
  cg as aa,
  ug as ab,
  dg as ac,
  _g as ad,
  pg as ae,
  mg as af,
  vg as ag,
  fg as ah,
  hg as ai,
  xg as aj,
  $g as ak,
  bg as al,
  gg as am,
  yg as an,
  kg as ao,
  wg as ap,
  Tg as aq,
  Cg as ar,
  Sg as as,
  Pg as at,
  Vg as au,
  Ig as av,
  Ag as aw,
  Bg as ax,
  Mg as ay,
  Lg as az,
  nb as b,
  x0 as b$,
  cy as b0,
  uy as b1,
  dy as b2,
  _y as b3,
  py as b4,
  my as b5,
  vy as b6,
  fy as b7,
  hy as b8,
  xy as b9,
  Gy as bA,
  jy as bB,
  Wy as bC,
  Ky as bD,
  Jy as bE,
  Xy as bF,
  Yy as bG,
  Qy as bH,
  Zy as bI,
  t0 as bJ,
  e0 as bK,
  s0 as bL,
  a0 as bM,
  l0 as bN,
  n0 as bO,
  r0 as bP,
  o0 as bQ,
  i0 as bR,
  c0 as bS,
  u0 as bT,
  d0 as bU,
  _0 as bV,
  p0 as bW,
  m0 as bX,
  v0 as bY,
  f0 as bZ,
  h0 as b_,
  $y as ba,
  by as bb,
  gy as bc,
  yy as bd,
  ky as be,
  wy as bf,
  Ty as bg,
  Cy as bh,
  Sy as bi,
  Py as bj,
  Vy as bk,
  Iy as bl,
  Ay as bm,
  By as bn,
  My as bo,
  Ly as bp,
  Dy as bq,
  zy as br,
  Ey as bs,
  Ry as bt,
  Ny as bu,
  qy as bv,
  Fy as bw,
  Oy as bx,
  Hy as by,
  Uy as bz,
  rb as c,
  $0 as c0,
  b0 as c1,
  g0 as c2,
  y0 as c3,
  k0 as c4,
  w0 as c5,
  T0 as c6,
  C0 as c7,
  S0 as c8,
  P0 as c9,
  V0 as ca,
  I0 as cb,
  A0 as cc,
  B0 as cd,
  M0 as ce,
  L0 as cf,
  D0 as cg,
  z0 as ch,
  E0 as ci,
  R0 as cj,
  N0 as ck,
  q0 as cl,
  F0 as cm,
  O0 as cn,
  H0 as co,
  U0 as cp,
  G0 as cq,
  ob as d,
  ib as e,
  cb as f,
  ub as g,
  db as h,
  _b as i,
  pb as j,
  mb as k,
  vb as l,
  fb as m,
  hb as n,
  xb as o,
  $b as p,
  bb as q,
  gb as r,
  yb as s,
  kb as t,
  wb as u,
  Tb as v,
  Cb as w,
  Sb as x,
  Pb as y,
  Vb as z
};
