import { defineComponent as g, createElementBlock as o, openBlock as s, normalizeClass as w, createElementVNode as e, resolveDirective as yt, withDirectives as Y, createBlock as L, unref as P, createCommentVNode as h, toDisplayString as v, renderSlot as I, Transition as j, withCtx as B, createVNode as O, ref as D, computed as S, createTextVNode as N, withModifiers as H, normalizeStyle as R, onMounted as W, Fragment as V, renderList as b, resolveComponent as kt, reactive as wt, withKeys as at, watch as Z, onBeforeUnmount as G, onUnmounted as ft, nextTick as nt, resolveDynamicComponent as Tt, useTemplateRef as ot, mergeProps as Ct, vModelText as J, useCssVars as St, Teleport as et, useAttrs as tt, normalizeProps as y, guardReactiveProps as k, createSlots as z } from "vue";
import { u as It } from "./useTheme-nUyNyP_j.js";
import st from "primevue/button";
import xt from "primevue/tag";
import ht from "primevue/progressspinner";
import rt from "primevue/inputtext";
import it from "primevue/password";
import ct from "primevue/message";
import Vt from "primevue/datatable";
import { useRouter as Bt, useRoute as Pt } from "vue-router";
import $t from "primevue/avatar";
import gt from "primevue/checkbox";
import At from "primevue/autocomplete";
import Mt from "primevue/datepicker";
import Lt from "primevue/inputnumber";
import zt from "primevue/select";
import Dt from "primevue/multiselect";
import Et from "primevue/listbox";
import Rt from "primevue/cascadeselect";
import Nt from "primevue/checkboxgroup";
import qt from "primevue/floatlabel";
import Ft from "primevue/fluid";
import Ot from "primevue/iconfield";
import jt from "primevue/iftalabel";
import Ht from "primevue/inputchips";
import Ut from "primevue/inputgroup";
import Wt from "primevue/inputgroupaddon";
import Gt from "primevue/inputicon";
import Kt from "primevue/inputmask";
import Yt from "primevue/inputotp";
import Jt from "primevue/knob";
import Xt from "primevue/radiobutton";
import Qt from "primevue/radiobuttongroup";
import Zt from "primevue/rating";
import te from "primevue/selectbutton";
import ee from "primevue/slider";
import se from "primevue/textarea";
import ae from "primevue/togglebutton";
import le from "primevue/toggleswitch";
import ne from "primevue/treeselect";
import oe from "primevue/buttongroup";
import re from "primevue/speeddial";
import ie from "primevue/splitbutton";
import ce from "primevue/paginator";
import ue from "primevue/column";
import de from "primevue/columngroup";
import _e from "primevue/dataview";
import pe from "primevue/orderlist";
import ve from "primevue/organizationchart";
import me from "primevue/picklist";
import fe from "primevue/row";
import xe from "primevue/timeline";
import he from "primevue/tree";
import $e from "primevue/treetable";
import ge from "primevue/virtualscroller";
import be from "primevue/accordion";
import ye from "primevue/accordioncontent";
import ke from "primevue/accordionheader";
import we from "primevue/accordionpanel";
import Te from "primevue/deferredcontent";
import Ce from "primevue/divider";
import Se from "primevue/fieldset";
import Ie from "primevue/panel";
import Ve from "primevue/scrollpanel";
import Be from "primevue/splitter";
import Pe from "primevue/splitterpanel";
import Ae from "primevue/stepper";
import Me from "primevue/step";
import Le from "primevue/stepitem";
import ze from "primevue/steplist";
import De from "primevue/steppanel";
import Ee from "primevue/steppanels";
import Re from "primevue/tabs";
import Ne from "primevue/tab";
import qe from "primevue/tablist";
import Fe from "primevue/tabpanel";
import Oe from "primevue/tabpanels";
import je from "primevue/toolbar";
import He from "primevue/dialog";
import Ue from "primevue/confirmdialog";
import We from "primevue/confirmpopup";
import Ge from "primevue/drawer";
import Ke from "primevue/dynamicdialog";
import Ye from "primevue/popover";
import Je from "primevue/breadcrumb";
import Xe from "primevue/dock";
import Qe from "primevue/megamenu";
import Ze from "primevue/menu";
import ts from "primevue/menubar";
import es from "primevue/panelmenu";
import ss from "primevue/steps";
import as from "primevue/tabmenu";
import ls from "primevue/tieredmenu";
import ns from "primevue/toast";
import os from "primevue/inlinemessage";
import rs from "primevue/carousel";
import is from "primevue/galleria";
import cs from "primevue/image";
import us from "primevue/imagecompare";
import ds from "primevue/fileupload";
import _s from "primevue/chart";
import ps from "primevue/avatargroup";
import vs from "primevue/badge";
import ms from "primevue/blockui";
import fs from "primevue/chip";
import xs from "primevue/inplace";
import hs from "primevue/metergroup";
import $s from "primevue/overlaybadge";
import gs from "primevue/progressbar";
import bs from "primevue/scrolltop";
import ys from "primevue/skeleton";
import ks from "primevue/terminal";
const ws = /* @__PURE__ */ g({
  __name: "TrxLogo",
  props: {
    size: {},
    variant: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", {
      class: w(["trx-logo", [
        `trx-logo--${t.size || "md"}`,
        `trx-logo--${t.variant || "full"}`
      ]])
    }, [...r[0] || (r[0] = [
      e("svg", {
        viewBox: "0 0 120 40",
        class: "trx-logo__svg"
      }, [
        e("text", {
          x: "10",
          y: "30",
          class: "trx-logo__text",
          "font-family": "Inter, system-ui, sans-serif",
          "font-weight": "700"
        }, " TRX ")
      ], -1)
    ])], 2));
  }
}), A = (t, a) => {
  const r = t.__vccOpts || t;
  for (const [i, l] of a)
    r[i] = l;
  return r;
}, Uw = /* @__PURE__ */ A(ws, [["__scopeId", "data-v-d5448055"]]), Ts = /* @__PURE__ */ g({
  __name: "TrxThemeToggle",
  setup(t) {
    const { isDark: a, toggleTheme: r } = It();
    return (i, l) => {
      const n = yt("tooltip");
      return Y((s(), L(P(st), {
        icon: P(a) ? "pi pi-sun" : "pi pi-moon",
        severity: "secondary",
        text: "",
        rounded: "",
        onClick: P(r),
        class: "trx-theme-toggle"
      }, null, 8, ["icon", "onClick"])), [
        [
          n,
          P(a) ? "Tema Claro" : "Tema Escuro",
          void 0,
          { bottom: !0 }
        ]
      ]);
    };
  }
}), Ww = /* @__PURE__ */ A(Ts, [["__scopeId", "data-v-f12c0272"]]), Cs = { class: "trx-page-header" }, Ss = { class: "trx-page-header__content" }, Is = { class: "trx-page-header__title" }, Vs = {
  key: 0,
  class: "trx-page-header__subtitle"
}, Bs = { class: "trx-page-header__actions" }, Ps = /* @__PURE__ */ g({
  __name: "TrxPageHeader",
  props: {
    title: {},
    subtitle: {},
    icon: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Cs, [
      e("div", Ss, [
        t.icon ? (s(), o("i", {
          key: 0,
          class: w([t.icon, "trx-page-header__icon"])
        }, null, 2)) : h("", !0),
        e("div", null, [
          e("h1", Is, v(t.title), 1),
          t.subtitle ? (s(), o("p", Vs, v(t.subtitle), 1)) : h("", !0)
        ])
      ]),
      e("div", Bs, [
        I(a.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), Gw = /* @__PURE__ */ A(Ps, [["__scopeId", "data-v-def36de6"]]), As = /* @__PURE__ */ g({
  __name: "TrxStatusBadge",
  props: {
    status: {},
    type: {}
  },
  setup(t) {
    const a = t, r = {
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
      if (a.type) return a.type;
      const l = a.status.toLowerCase();
      return r[l] || "secondary";
    };
    return (l, n) => (s(), L(P(xt), {
      value: t.status,
      severity: i(),
      class: "trx-status-badge"
    }, null, 8, ["value", "severity"]));
  }
}), Kw = /* @__PURE__ */ A(As, [["__scopeId", "data-v-c36955e9"]]), Ms = {
  key: 0,
  class: "trx-loading-overlay"
}, Ls = { class: "trx-loading-overlay__content" }, zs = {
  key: 0,
  class: "trx-loading-overlay__message"
}, Ds = /* @__PURE__ */ g({
  __name: "TrxLoadingOverlay",
  props: {
    visible: { type: Boolean },
    message: {}
  },
  setup(t) {
    return (a, r) => (s(), L(j, { name: "fade" }, {
      default: B(() => [
        t.visible ? (s(), o("div", Ms, [
          e("div", Ls, [
            O(P(ht), {
              style: { width: "50px", height: "50px" },
              strokeWidth: "4"
            }),
            t.message ? (s(), o("p", zs, v(t.message), 1)) : h("", !0)
          ])
        ])) : h("", !0)
      ]),
      _: 1
    }));
  }
}), Yw = /* @__PURE__ */ A(Ds, [["__scopeId", "data-v-4eb5da13"]]), Es = { class: "trx-empty-state" }, Rs = { class: "trx-empty-state__title" }, Ns = {
  key: 0,
  class: "trx-empty-state__description"
}, qs = { class: "trx-empty-state__actions" }, Fs = /* @__PURE__ */ g({
  __name: "TrxEmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Es, [
      e("i", {
        class: w([t.icon || "pi pi-inbox", "trx-empty-state__icon"])
      }, null, 2),
      e("h3", Rs, v(t.title), 1),
      t.description ? (s(), o("p", Ns, v(t.description), 1)) : h("", !0),
      e("div", qs, [
        I(a.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), Jw = /* @__PURE__ */ A(Fs, [["__scopeId", "data-v-49c3d947"]]), Os = { class: "trx-login" }, js = { class: "trx-login__container" }, Hs = { class: "trx-login__header" }, Us = { class: "trx-login__logo" }, Ws = {
  key: 0,
  class: "trx-login__logo-app"
}, Gs = { class: "trx-login__title" }, Ks = { class: "trx-login__subtitle" }, Ys = { class: "trx-login__field" }, Js = { class: "trx-login__field" }, Xs = { class: "trx-login__forgot" }, Qs = {
  key: 1,
  class: "trx-login__actions"
}, Zs = { class: "trx-login__footer" }, ta = { class: "trx-login__copyright" }, ea = /* @__PURE__ */ g({
  __name: "TrxLoginForm",
  props: {
    appName: {},
    appTitle: {},
    loading: { type: Boolean },
    error: {}
  },
  emits: ["submit"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D(""), c = S(() => l.value.trim() !== "" && n.value.trim() !== ""), u = () => {
      c.value && !r.loading && i("submit", {
        email: l.value.trim(),
        password: n.value
      });
    };
    return (_, d) => (s(), o("div", Os, [
      e("div", js, [
        e("div", Hs, [
          e("div", Us, [
            d[2] || (d[2] = e("span", { class: "trx-login__logo-text" }, "TRX", -1)),
            t.appName ? (s(), o("span", Ws, v(t.appName), 1)) : h("", !0)
          ]),
          e("h1", Gs, v(t.appTitle || "Entrar"), 1),
          e("p", Ks, [
            I(_.$slots, "subtitle", {}, () => [
              d[3] || (d[3] = N(" Entre com suas credenciais para acessar o sistema ", -1))
            ], !0)
          ])
        ]),
        e("form", {
          onSubmit: H(u, ["prevent"]),
          class: "trx-login__form"
        }, [
          t.error ? (s(), L(P(ct), {
            key: 0,
            severity: "error",
            closable: !1,
            class: "trx-login__error"
          }, {
            default: B(() => [
              N(v(t.error), 1)
            ]),
            _: 1
          })) : h("", !0),
          e("div", Ys, [
            d[4] || (d[4] = e("label", {
              for: "email",
              class: "trx-login__label"
            }, "Email", -1)),
            O(P(rt), {
              id: "email",
              modelValue: l.value,
              "onUpdate:modelValue": d[0] || (d[0] = (p) => l.value = p),
              type: "email",
              placeholder: "seu@email.com",
              class: "trx-login__input",
              disabled: t.loading,
              autocomplete: "email"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          e("div", Js, [
            d[5] || (d[5] = e("label", {
              for: "password",
              class: "trx-login__label"
            }, "Senha", -1)),
            O(P(it), {
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
          e("div", Xs, [
            I(_.$slots, "forgot-password", {}, () => [
              d[6] || (d[6] = e("a", {
                href: "#",
                class: "trx-login__forgot-link"
              }, "Esqueceu a senha?", -1))
            ], !0)
          ]),
          O(P(st), {
            type: "submit",
            label: t.loading ? "Entrando..." : "Entrar",
            loading: t.loading,
            disabled: !c.value || t.loading,
            class: "trx-login__submit",
            icon: "pi pi-sign-in"
          }, null, 8, ["label", "loading", "disabled"]),
          _.$slots.actions ? (s(), o("div", Qs, [
            I(_.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 32),
        e("div", Zs, [
          I(_.$slots, "footer", {}, () => [
            e("p", ta, " © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " TRX Systems ", 1)
          ], !0)
        ])
      ])
    ]));
  }
}), Xw = /* @__PURE__ */ A(ea, [["__scopeId", "data-v-2ec7ed88"]]), sa = {
  key: 0,
  class: "trx-card-header"
}, aa = { class: "header-content" }, la = {
  key: 0,
  class: "card-icon"
}, na = {
  key: 1,
  class: "header-text"
}, oa = {
  key: 0,
  class: "card-title"
}, ra = {
  key: 1,
  class: "card-subtitle"
}, ia = { class: "trx-card-content" }, ca = {
  key: 0,
  class: "loading-overlay"
}, ua = {
  key: 1,
  class: "trx-card-footer"
}, da = /* @__PURE__ */ g({
  __name: "TrxCard",
  props: {
    title: {},
    subtitle: {},
    icon: {},
    loading: { type: Boolean },
    hoverable: { type: Boolean }
  },
  setup(t) {
    return (a, r) => (s(), o("div", {
      class: w(["trx-card", { hoverable: t.hoverable, loading: t.loading }])
    }, [
      t.title || t.icon || a.$slots.header ? (s(), o("div", sa, [
        e("div", aa, [
          t.icon ? (s(), o("div", la, [
            e("i", {
              class: w(t.icon)
            }, null, 2)
          ])) : h("", !0),
          t.title || t.subtitle ? (s(), o("div", na, [
            t.title ? (s(), o("h3", oa, v(t.title), 1)) : h("", !0),
            t.subtitle ? (s(), o("p", ra, v(t.subtitle), 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        I(a.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      e("div", ia, [
        t.loading ? (s(), o("div", ca, [...r[0] || (r[0] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : h("", !0),
        I(a.$slots, "default", {}, void 0, !0)
      ]),
      a.$slots.footer ? (s(), o("div", ua, [
        I(a.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ], 2));
  }
}), Qw = /* @__PURE__ */ A(da, [["__scopeId", "data-v-49b3499e"]]), _a = {
  key: 0,
  class: "stat-icon"
}, pa = { class: "stat-content" }, va = { class: "stat-value" }, ma = { class: "stat-title" }, fa = /* @__PURE__ */ g({
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
    return (a, r) => (s(), o("div", {
      class: w(["trx-stat-card", `color-${t.color || "primary"}`])
    }, [
      t.icon ? (s(), o("div", _a, [
        e("i", {
          class: w(t.icon)
        }, null, 2)
      ])) : h("", !0),
      e("div", pa, [
        e("div", va, v(t.value), 1),
        e("div", ma, v(t.title), 1),
        t.trend && t.trendValue ? (s(), o("div", {
          key: 0,
          class: w(["stat-trend", `trend-${t.trend}`])
        }, [
          e("i", {
            class: w(t.trend === "up" ? "pi pi-arrow-up" : t.trend === "down" ? "pi pi-arrow-down" : "pi pi-minus")
          }, null, 2),
          e("span", null, v(t.trendValue), 1)
        ], 2)) : h("", !0)
      ])
    ], 2));
  }
}), Zw = /* @__PURE__ */ A(fa, [["__scopeId", "data-v-5f985ae8"]]), xa = { class: "trx-datatable" }, ha = {
  key: 0,
  class: "table-header"
}, $a = { class: "p-input-icon-left" }, ga = { class: "empty-state" }, ba = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = D({
      global: { value: null, matchMode: "contains" }
    }), n = S(() => r.rows || 10);
    return (c, u) => (s(), o("div", xa, [
      t.globalFilter ? (s(), o("div", ha, [
        e("span", $a, [
          u[4] || (u[4] = e("i", { class: "pi pi-search" }, null, -1)),
          O(P(rt), {
            modelValue: l.value.global.value,
            "onUpdate:modelValue": u[0] || (u[0] = (_) => l.value.global.value = _),
            placeholder: "Buscar...",
            class: "search-input"
          }, null, 8, ["modelValue"])
        ]),
        I(c.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      O(P(Vt), {
        value: t.value,
        loading: t.loading,
        paginator: t.paginator,
        rows: n.value,
        totalRecords: t.totalRecords,
        lazy: t.lazy,
        filters: t.globalFilter ? l.value : void 0,
        globalFilterFields: t.globalFilter ? ["*"] : void 0,
        stripedRows: t.stripedRows !== !1,
        rowHover: t.rowHover !== !1,
        responsiveLayout: "scroll",
        onPage: u[1] || (u[1] = (_) => i("page", _)),
        onSort: u[2] || (u[2] = (_) => i("sort", _)),
        onFilter: u[3] || (u[3] = (_) => i("filter", _)),
        class: "trx-table"
      }, {
        empty: B(() => [
          e("div", ga, [
            u[5] || (u[5] = e("i", { class: "pi pi-inbox" }, null, -1)),
            e("p", null, v(t.emptyMessage || "Nenhum registro encontrado"), 1)
          ])
        ]),
        loading: B(() => [...u[6] || (u[6] = [
          e("div", { class: "loading-state" }, [
            e("i", { class: "pi pi-spin pi-spinner" }),
            e("p", null, "Carregando...")
          ], -1)
        ])]),
        default: B(() => [
          I(c.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["value", "loading", "paginator", "rows", "totalRecords", "lazy", "filters", "globalFilterFields", "stripedRows", "rowHover"])
    ]));
  }
}), tT = /* @__PURE__ */ A(ba, [["__scopeId", "data-v-f9d94f79"]]), ya = { class: "trx-status" }, ka = {
  key: 0,
  class: "status-label"
}, wa = /* @__PURE__ */ g({
  __name: "TrxStatus",
  props: {
    status: {},
    label: {},
    showLabel: { type: Boolean }
  },
  setup(t) {
    const a = {
      online: { color: "var(--trx-success-color, var(--success-color))", label: "Online" },
      offline: { color: "var(--trx-danger-color, var(--danger-color))", label: "Offline" },
      busy: { color: "var(--trx-warning-color, var(--warning-color))", label: "Ocupado" },
      away: { color: "var(--trx-info-color, var(--info-color))", label: "Ausente" },
      connecting: { color: "var(--trx-text-secondary, var(--text-secondary))", label: "Conectando..." }
    };
    return (r, i) => (s(), o("div", ya, [
      e("span", {
        class: w(["status-dot", { pulse: t.status === "connecting" }]),
        style: R({ backgroundColor: a[t.status].color })
      }, null, 6),
      t.showLabel !== !1 ? (s(), o("span", ka, v(t.label || a[t.status].label), 1)) : h("", !0)
    ]));
  }
}), eT = /* @__PURE__ */ A(wa, [["__scopeId", "data-v-0d5250d8"]]), Ta = { class: "trx-layout__sidebar-header" }, Ca = { class: "trx-layout__logo-text" }, Sa = { class: "trx-layout__nav" }, Ia = { key: 0 }, Va = ["onClick", "title"], Ba = { key: 0 }, Pa = {
  key: 0,
  class: "trx-layout__section-header"
}, Aa = ["onClick", "title"], Ma = { key: 0 }, La = { class: "trx-layout__sidebar-footer" }, za = {
  key: 0,
  href: "https://trixsystems.io",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "trx-layout__footer-link"
}, Da = { class: "trx-layout__topbar" }, Ea = { class: "trx-layout__topbar-left" }, Ra = { class: "trx-layout__topbar-right" }, Na = { class: "trx-layout__controls" }, qa = {
  key: 1,
  class: "trx-layout__divider"
}, Fa = { class: "trx-layout__user" }, Oa = { class: "trx-layout__user-name" }, ja = {
  id: "trx-main-content",
  class: "trx-layout__content",
  tabindex: "-1"
}, Ha = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = Bt(), n = Pt(), c = D(!1), u = D(!1), _ = S(() => r.userName ? r.userName.split(" ").map(($) => $[0]).join("").toUpperCase().slice(0, 2) : "U"), d = S(() => ({
      online: "trx-layout__status--online",
      offline: "trx-layout__status--offline",
      busy: "trx-layout__status--busy",
      paused: "trx-layout__status--paused"
    })[r.statusType || "offline"]);
    function p($) {
      return $ === "/" ? n.path === "/" || n.path === "" : n.path.startsWith($);
    }
    W(() => {
      const $ = localStorage.getItem("theme"), C = localStorage.getItem("sidebarCollapsed");
      $ === "dark" && (u.value = !0, document.documentElement.classList.add("dark")), C === "true" && (c.value = !0);
    });
    const m = () => {
      u.value = !u.value, u.value ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, x = () => {
      c.value = !c.value, localStorage.setItem("sidebarCollapsed", c.value.toString());
    }, f = ($) => {
      i("navigate", $), l.push($);
    };
    async function T() {
      r.onLogout && await r.onLogout(), i("logout");
    }
    return ($, C) => (s(), o("div", {
      class: w(["trx-layout", { dark: u.value }])
    }, [
      C[5] || (C[5] = e("a", {
        href: "#trx-main-content",
        class: "trx-layout__skip-link"
      }, "Pular para o conteúdo", -1)),
      e("aside", {
        class: w(["trx-layout__sidebar", { "trx-layout__sidebar--collapsed": c.value }])
      }, [
        e("div", Ta, [
          c.value ? (s(), o("div", {
            key: 1,
            class: "trx-layout__logo-mini",
            onClick: C[1] || (C[1] = (M) => f("/")),
            style: { cursor: "pointer" }
          }, [
            e("i", {
              class: w(t.appIcon)
            }, null, 2)
          ])) : (s(), o("div", {
            key: 0,
            class: "trx-layout__logo",
            onClick: C[0] || (C[0] = (M) => f("/")),
            style: { cursor: "pointer" }
          }, [
            e("i", {
              class: w(t.appIcon)
            }, null, 2),
            e("span", Ca, [
              C[2] || (C[2] = e("span", { class: "trx-layout__logo-trx" }, "TRX", -1)),
              N(" " + v(t.appName), 1)
            ])
          ]))
        ]),
        e("nav", Sa, [
          t.menuItems && t.menuItems.length ? (s(), o("ul", Ia, [
            (s(!0), o(V, null, b(t.menuItems, (M) => (s(), o("li", {
              key: M.path,
              class: w({ active: p(M.path) }),
              onClick: (E) => f(M.path),
              title: c.value ? M.label : ""
            }, [
              e("i", {
                class: w(M.icon)
              }, null, 2),
              c.value ? h("", !0) : (s(), o("span", Ba, v(M.label), 1))
            ], 10, Va))), 128))
          ])) : h("", !0),
          t.menuSections && t.menuSections.length ? (s(!0), o(V, { key: 1 }, b(t.menuSections, (M) => (s(), o("div", {
            key: M.key,
            class: "trx-layout__nav-section"
          }, [
            !c.value && M.items.length > 0 ? (s(), o("div", Pa, v(M.label), 1)) : h("", !0),
            e("ul", null, [
              (s(!0), o(V, null, b(M.items, (E) => (s(), o("li", {
                key: E.path,
                class: w({ active: p(E.path) }),
                onClick: (F) => f(E.path),
                title: c.value ? E.label : ""
              }, [
                e("i", {
                  class: w(E.icon)
                }, null, 2),
                c.value ? h("", !0) : (s(), o("span", Ma, v(E.label), 1))
              ], 10, Aa))), 128))
            ])
          ]))), 128)) : h("", !0)
        ]),
        e("div", La, [
          e("button", {
            class: "trx-layout__toggle-btn",
            onClick: x
          }, [
            e("i", {
              class: w(["pi", c.value ? "pi-angle-right" : "pi-angle-left"])
            }, null, 2)
          ]),
          c.value ? h("", !0) : (s(), o("a", za, " TRIX Systems "))
        ])
      ], 2),
      e("div", {
        class: w(["trx-layout__main", { "trx-layout__main--collapsed": c.value }])
      }, [
        e("header", Da, [
          e("div", Ea, [
            O(P(st), {
              icon: "pi pi-bars",
              text: "",
              rounded: "",
              onClick: x,
              class: "trx-layout__mobile-menu"
            }),
            I($.$slots, "topbar-left", {}, void 0, !0)
          ]),
          e("div", Ra, [
            e("div", Na, [
              t.showStatus ? (s(), o("div", {
                key: 0,
                class: w(["trx-layout__status", d.value])
              }, [
                C[3] || (C[3] = e("span", { class: "trx-layout__status-dot" }, null, -1)),
                N(" " + v(t.statusLabel), 1)
              ], 2)) : h("", !0),
              t.showStatus ? (s(), o("span", qa)) : h("", !0),
              O(P(st), {
                icon: u.value ? "pi pi-sun" : "pi pi-moon",
                onClick: m,
                rounded: "",
                text: "",
                size: "small",
                title: u.value ? "Modo Claro" : "Modo Escuro"
              }, null, 8, ["icon", "title"]),
              C[4] || (C[4] = e("span", { class: "trx-layout__divider" }, null, -1)),
              e("div", Fa, [
                O(P($t), {
                  label: _.value,
                  size: "small",
                  shape: "circle"
                }, null, 8, ["label"]),
                e("span", Oa, v(t.userName || "Usuario"), 1)
              ]),
              O(P(st), {
                icon: "pi pi-sign-out",
                rounded: "",
                text: "",
                size: "small",
                onClick: T,
                title: "Sair"
              })
            ])
          ])
        ]),
        e("main", ja, [
          I($.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
}), sT = /* @__PURE__ */ A(Ha, [["__scopeId", "data-v-d15de8cb"]]), Ua = { class: "trx-not-found" }, Wa = { class: "trx-not-found__content" }, Ga = { class: "trx-not-found__code" }, Ka = { class: "trx-not-found__title" }, Ya = { class: "trx-not-found__message" }, Ja = /* @__PURE__ */ g({
  __name: "TrxNotFound",
  props: {
    code: { default: "404" },
    title: { default: "Pagina nao encontrada" },
    message: { default: "A pagina que voce esta procurando nao existe ou foi movida." },
    buttonLabel: { default: "Voltar ao Inicio" },
    redirectTo: { default: "/" }
  },
  setup(t) {
    return (a, r) => {
      const i = kt("router-link");
      return s(), o("div", Ua, [
        e("div", Wa, [
          e("div", Ga, v(t.code), 1),
          e("h1", Ka, v(t.title), 1),
          e("p", Ya, v(t.message), 1),
          O(i, { to: t.redirectTo }, {
            default: B(() => [
              O(P(st), {
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
}), aT = /* @__PURE__ */ A(Ja, [["__scopeId", "data-v-603fc352"]]), Xa = { class: "trx-login-page" }, Qa = { class: "trx-login-page__settings" }, Za = ["disabled"], tl = ["disabled"], el = ["title"], sl = { class: "trx-login-page__lang-label" }, al = { class: "trx-login-page__container" }, ll = { class: "trx-login-page__panel" }, nl = { class: "trx-login-page__card" }, ol = { class: "trx-login-page__header" }, rl = { class: "trx-login-page__icon" }, il = { class: "trx-login-page__brand" }, cl = {
  key: 0,
  class: "trx-login-page__brand-trx"
}, ul = {
  key: 0,
  class: "trx-login-page__tagline"
}, dl = { class: "trx-login-page__field" }, _l = {
  key: 0,
  class: "p-error"
}, pl = {
  key: 1,
  class: "p-error"
}, vl = { class: "trx-login-page__field" }, ml = {
  key: 0,
  class: "p-error"
}, fl = {
  key: 0,
  class: "trx-login-page__options"
}, xl = {
  key: 0,
  class: "trx-login-page__remember"
}, hl = {
  key: 0,
  class: "pi pi-sign-in"
}, $l = {
  key: 1,
  class: "trx-login-page__error"
}, gl = { class: "trx-login-page__footer" }, bl = /* @__PURE__ */ g({
  __name: "TrxLoginPage",
  props: {
    appName: {},
    brandPrefix: { default: "TRX" },
    appTagline: { default: "" },
    loading: { type: Boolean, default: !1 },
    error: {},
    showRememberMe: { type: Boolean, default: !0 },
    showForgotPassword: { type: Boolean, default: !0 },
    showFontControls: { type: Boolean, default: !0 },
    showLanguageToggle: { type: Boolean, default: !0 }
  },
  emits: ["submit", "forgotPassword"],
  setup(t, { emit: a }) {
    const r = a, i = wt({
      email: "",
      password: ""
    }), l = D(!1), n = D(!1), c = D(!1), u = D(localStorage.getItem("locale") || "pt-BR"), _ = S(() => u.value === "pt-BR" ? "PT" : "EN"), d = D(16), p = S(() => /.+@.+\..+/.test(i.email)), m = S(() => n.value && (!i.email || !p.value)), x = S(() => n.value && !i.password), f = () => {
      c.value = !c.value, c.value ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, T = () => {
      const F = u.value === "pt-BR" ? "en" : "pt-BR";
      u.value = F, localStorage.setItem("locale", F);
    }, $ = () => {
      d.value < 20 && (d.value += 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, C = () => {
      d.value > 12 && (d.value -= 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, M = () => {
      n.value = !0, !(!i.email || !i.password || !p.value) && r("submit", {
        email: i.email,
        password: i.password,
        rememberMe: l.value
      });
    }, E = () => {
      r("forgotPassword");
    };
    return W(() => {
      localStorage.getItem("theme") === "dark" && (document.documentElement.classList.add("dark"), c.value = !0);
      const q = localStorage.getItem("fontSize");
      q && (d.value = parseInt(q), document.documentElement.style.fontSize = `${d.value}px`);
    }), (F, q) => (s(), o("div", Xa, [
      e("div", Qa, [
        t.showFontControls ? (s(), o(V, { key: 0 }, [
          e("button", {
            onClick: C,
            title: "Diminuir fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value <= 12
          }, [...q[3] || (q[3] = [
            e("i", { class: "pi pi-minus" }, null, -1)
          ])], 8, Za),
          e("button", {
            onClick: $,
            title: "Aumentar fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value >= 20
          }, [...q[4] || (q[4] = [
            e("i", { class: "pi pi-plus" }, null, -1)
          ])], 8, tl),
          q[5] || (q[5] = e("div", { class: "trx-login-page__settings-divider" }, null, -1))
        ], 64)) : h("", !0),
        e("button", {
          onClick: f,
          title: c.value ? "Modo claro" : "Modo escuro",
          class: "trx-login-page__settings-btn"
        }, [
          e("i", {
            class: w(c.value ? "pi pi-sun" : "pi pi-moon")
          }, null, 2)
        ], 8, el),
        t.showLanguageToggle ? (s(), o(V, { key: 1 }, [
          q[7] || (q[7] = e("div", { class: "trx-login-page__settings-divider" }, null, -1)),
          e("button", {
            onClick: T,
            title: "Idioma",
            class: "trx-login-page__settings-btn trx-login-page__settings-btn--lang"
          }, [
            q[6] || (q[6] = e("i", { class: "pi pi-globe" }, null, -1)),
            e("span", sl, v(_.value), 1)
          ])
        ], 64)) : h("", !0)
      ]),
      q[15] || (q[15] = e("div", { class: "trx-login-page__background" }, [
        e("div", { class: "trx-login-page__orb trx-login-page__orb--1" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--2" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--3" })
      ], -1)),
      e("div", al, [
        e("div", ll, [
          e("div", nl, [
            e("div", ol, [
              e("div", rl, [
                I(F.$slots, "icon", {}, () => [
                  q[8] || (q[8] = e("i", {
                    class: "pi pi-box",
                    style: { "font-size": "2.5rem", color: "white" }
                  }, null, -1))
                ], !0)
              ]),
              e("h1", il, [
                t.brandPrefix ? (s(), o("span", cl, v(t.brandPrefix), 1)) : h("", !0),
                N(v(t.brandPrefix ? " " : "") + v(t.appName), 1)
              ]),
              t.appTagline ? (s(), o("p", ul, v(t.appTagline), 1)) : h("", !0),
              q[9] || (q[9] = e("h2", { class: "trx-login-page__title" }, "Acesse sua conta", -1)),
              q[10] || (q[10] = e("p", { class: "trx-login-page__subtitle" }, "Preencha seus dados para acessar", -1))
            ]),
            e("form", {
              class: "trx-login-page__form",
              onSubmit: H(M, ["prevent"])
            }, [
              e("div", dl, [
                q[11] || (q[11] = e("label", {
                  for: "email",
                  class: "trx-login-page__label"
                }, [
                  e("i", { class: "pi pi-envelope" }),
                  N(" Email ")
                ], -1)),
                O(P(rt), {
                  id: "email",
                  modelValue: i.email,
                  "onUpdate:modelValue": q[0] || (q[0] = (K) => i.email = K),
                  type: "email",
                  placeholder: "seu@email.com",
                  class: w(["trx-login-page__input", { "p-invalid": m.value }])
                }, null, 8, ["modelValue", "class"]),
                n.value && !i.email ? (s(), o("small", _l, " Campo obrigatorio ")) : n.value && i.email && !p.value ? (s(), o("small", pl, " Email invalido ")) : h("", !0)
              ]),
              e("div", vl, [
                q[12] || (q[12] = e("label", {
                  for: "password",
                  class: "trx-login-page__label"
                }, [
                  e("i", { class: "pi pi-lock" }),
                  N(" Senha ")
                ], -1)),
                O(P(it), {
                  id: "password",
                  modelValue: i.password,
                  "onUpdate:modelValue": q[1] || (q[1] = (K) => i.password = K),
                  feedback: !1,
                  toggleMask: "",
                  placeholder: "Digite sua senha",
                  class: w(["trx-login-page__input", { "p-invalid": x.value }]),
                  inputClass: "w-full"
                }, null, 8, ["modelValue", "class"]),
                x.value ? (s(), o("small", ml, " Campo obrigatorio ")) : h("", !0)
              ]),
              t.showRememberMe || t.showForgotPassword ? (s(), o("div", fl, [
                t.showRememberMe ? (s(), o("div", xl, [
                  O(P(gt), {
                    id: "remember-me",
                    modelValue: l.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (K) => l.value = K),
                    binary: !0
                  }, null, 8, ["modelValue"]),
                  q[13] || (q[13] = e("label", {
                    for: "remember-me",
                    class: "trx-login-page__remember-label"
                  }, " Lembrar de mim ", -1))
                ])) : h("", !0),
                t.showForgotPassword ? (s(), o("a", {
                  key: 1,
                  href: "#",
                  class: "trx-login-page__forgot",
                  onClick: H(E, ["prevent"])
                }, " Esqueceu sua senha? ")) : h("", !0)
              ])) : h("", !0),
              O(P(st), {
                type: "submit",
                class: "trx-login-page__submit",
                loading: t.loading,
                disabled: t.loading
              }, {
                default: B(() => [
                  t.loading ? h("", !0) : (s(), o("i", hl)),
                  e("span", null, v(t.loading ? "Entrando..." : "Entrar"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              t.error ? (s(), o("div", $l, [
                O(P(ct), {
                  severity: "error",
                  closable: !1
                }, {
                  default: B(() => [
                    N(v(t.error), 1)
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ], 32),
            e("div", gl, [
              I(F.$slots, "footer", {}, () => [
                q[14] || (q[14] = e("p", { class: "trx-login-page__copyright" }, [
                  N(" Powered by "),
                  e("a", {
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
}), lT = /* @__PURE__ */ A(bl, [["__scopeId", "data-v-b5b9c53f"]]), yl = ["aria-label"], kl = { class: "trx-banner__content" }, wl = { class: "trx-banner__body" }, Tl = {
  key: 0,
  class: "trx-banner__title"
}, Cl = {
  key: 1,
  class: "trx-banner__message"
}, Sl = /* @__PURE__ */ g({
  __name: "TrxBanner",
  props: {
    type: { default: "info" },
    title: {},
    dismissible: { type: Boolean, default: !1 },
    sticky: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      error: "pi pi-times-circle",
      neutral: "pi pi-bell"
    }, n = r.icon ?? l[r.type];
    return (c, u) => (s(), o("div", {
      class: w([
        "trx-banner",
        `trx-banner--${t.type}`,
        { "trx-banner--sticky": t.sticky }
      ]),
      role: "banner",
      "aria-label": t.title
    }, [
      e("div", kl, [
        e("i", {
          class: w(["trx-banner__icon", P(n)]),
          "aria-hidden": "true"
        }, null, 2),
        e("div", wl, [
          t.title ? (s(), o("strong", Tl, v(t.title), 1)) : h("", !0),
          c.$slots.default ? (s(), o("span", Cl, [
            I(c.$slots, "default", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ]),
      t.dismissible ? (s(), o("button", {
        key: 0,
        type: "button",
        class: "trx-banner__close",
        "aria-label": "Fechar aviso",
        onClick: u[0] || (u[0] = (_) => i("dismiss"))
      }, [...u[1] || (u[1] = [
        e("i", {
          class: "pi pi-times",
          "aria-hidden": "true"
        }, null, -1)
      ])])) : h("", !0)
    ], 10, yl));
  }
}), nT = /* @__PURE__ */ A(Sl, [["__scopeId", "data-v-3e631643"]]), Il = {
  key: 0,
  class: "trx-copy__value"
}, Vl = ["aria-label", "title"], Bl = { key: 0 }, Pl = { key: 1 }, Al = /* @__PURE__ */ g({
  __name: "TrxCopyButton",
  props: {
    value: {},
    label: {},
    showValue: { type: Boolean },
    feedbackDuration: { default: 1500 },
    size: { default: "normal" }
  },
  emits: ["copy"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(r.value), l.value = !0, i("copy", r.value), setTimeout(() => {
          l.value = !1;
        }, r.feedbackDuration);
      } catch {
        const c = document.createElement("textarea");
        c.value = r.value, c.style.position = "fixed", c.style.opacity = "0", document.body.appendChild(c), c.select(), document.execCommand("copy"), document.body.removeChild(c), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, r.feedbackDuration);
      }
    }
    return (c, u) => (s(), o("div", {
      class: w(["trx-copy", `trx-copy--${t.size}`])
    }, [
      t.showValue ? (s(), o("span", Il, v(t.value), 1)) : h("", !0),
      e("button", {
        type: "button",
        class: w(["trx-copy__btn", { "trx-copy__btn--copied": l.value }]),
        "aria-label": l.value ? "Copiado!" : `Copiar ${t.label ?? t.value}`,
        title: l.value ? "Copiado!" : "Copiar",
        onClick: n
      }, [
        e("i", {
          class: w(l.value ? "pi pi-check" : "pi pi-copy"),
          "aria-hidden": "true"
        }, null, 2),
        t.label && !t.showValue ? (s(), o("span", Bl, v(l.value ? "Copiado!" : t.label), 1)) : !t.label && !t.showValue ? (s(), o("span", Pl, v(l.value ? "Copiado!" : "Copiar"), 1)) : h("", !0)
      ], 10, Vl)
    ], 2));
  }
}), oT = /* @__PURE__ */ A(Al, [["__scopeId", "data-v-e4ae9d59"]]), Ml = {
  key: 0,
  class: "trx-agent-badge"
}, Ll = { class: "trx-agent-label" }, zl = ["aria-expanded", "aria-label"], Dl = { class: "trx-agent-label" }, El = {
  key: 0,
  class: "trx-agent-menu",
  role: "listbox",
  "aria-label": "Selecionar status"
}, Rl = ["aria-selected", "onClick"], Nl = /* @__PURE__ */ g({
  __name: "TrxAgentStatus",
  props: {
    modelValue: { default: "offline" },
    readonly: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    options: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: a }) {
    const r = [
      { value: "online", label: "Online", color: "#10b981", icon: "pi pi-circle-fill" },
      { value: "busy", label: "Ocupado", color: "#ef4444", icon: "pi pi-phone" },
      { value: "paused", label: "Pausa", color: "#f59e0b", icon: "pi pi-pause-circle" },
      { value: "offline", label: "Offline", color: "#94a3b8", icon: "pi pi-circle" }
    ], i = t, l = a, n = D(!1), c = S(() => i.options ?? r), u = S(() => c.value.find((d) => d.value === i.modelValue) ?? r[3]);
    function _(d) {
      n.value = !1, l("update:modelValue", d.value), l("change", d.value);
    }
    return (d, p) => t.readonly || t.compact ? (s(), o("div", Ml, [
      e("span", {
        class: "trx-agent-dot",
        style: R({ background: u.value.color })
      }, null, 4),
      e("span", Ll, v(u.value.label), 1)
    ])) : (s(), o("div", {
      key: 1,
      class: "trx-agent-wrap",
      onKeydown: p[2] || (p[2] = at((m) => n.value = !1, ["escape"]))
    }, [
      e("button", {
        type: "button",
        class: "trx-agent-trigger",
        "aria-expanded": n.value,
        "aria-haspopup": "listbox",
        "aria-label": `Status atual: ${u.value.label}. Clique para alterar.`,
        onClick: p[0] || (p[0] = (m) => n.value = !n.value)
      }, [
        e("span", {
          class: "trx-agent-dot",
          style: R({ background: u.value.color })
        }, null, 4),
        e("span", Dl, v(u.value.label), 1),
        e("i", {
          class: w(["pi pi-chevron-down trx-agent-chevron", { "trx-agent-chevron--open": n.value }]),
          "aria-hidden": "true"
        }, null, 2)
      ], 8, zl),
      O(j, { name: "trx-agent" }, {
        default: B(() => [
          n.value ? (s(), o("ul", El, [
            (s(!0), o(V, null, b(c.value, (m) => (s(), o("li", {
              key: m.value,
              role: "option",
              "aria-selected": m.value === t.modelValue,
              class: w(["trx-agent-option", { "trx-agent-option--active": m.value === t.modelValue }]),
              onClick: (x) => _(m)
            }, [
              e("span", {
                class: "trx-agent-dot",
                style: R({ background: m.color })
              }, null, 4),
              e("i", {
                class: w(m.icon),
                style: R({ color: m.color }),
                "aria-hidden": "true"
              }, null, 6),
              e("span", null, v(m.label), 1)
            ], 10, Rl))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      }),
      n.value ? (s(), o("div", {
        key: 0,
        class: "trx-agent-backdrop",
        onClick: p[1] || (p[1] = (m) => n.value = !1)
      })) : h("", !0)
    ], 32));
  }
}), rT = /* @__PURE__ */ A(Nl, [["__scopeId", "data-v-9a90548c"]]), ql = {
  class: "trx-player",
  role: "region",
  "aria-label": "Player de áudio"
}, Fl = ["src"], Ol = {
  key: 0,
  class: "trx-player__error"
}, jl = ["aria-label", "disabled"], Hl = { class: "trx-player__timeline" }, Ul = { class: "trx-player__time" }, Wl = ["aria-valuemax", "aria-valuenow", "aria-label"], Gl = { class: "trx-player__track" }, Kl = { class: "trx-player__time trx-player__time--total" }, Yl = { class: "trx-player__speed-wrap" }, Jl = ["aria-label"], Xl = {
  key: 0,
  class: "trx-player__speed-menu",
  role: "listbox"
}, Ql = ["aria-selected", "onClick"], Zl = /* @__PURE__ */ g({
  __name: "TrxAudioPlayer",
  props: {
    src: {},
    duration: {},
    downloadable: { type: Boolean, default: !0 },
    filename: {},
    speeds: { default: () => [0.5, 0.75, 1, 1.25, 1.5, 2] }
  },
  setup(t) {
    const a = t, r = D(null), i = D(!1), l = D(0), n = D(a.duration ?? 0), c = D(1), u = D(!1), _ = D(!1), d = D(!1), p = S(
      () => n.value > 0 ? l.value / n.value * 100 : 0
    );
    function m(U) {
      const X = Math.floor(U), Q = Math.floor(X / 60), lt = X % 60;
      return `${Q}:${lt.toString().padStart(2, "0")}`;
    }
    function x() {
      r.value && (i.value ? r.value.pause() : r.value.play());
    }
    function f(U) {
      if (!r.value || !n.value) return;
      const Q = U.currentTarget.getBoundingClientRect(), lt = Math.max(0, Math.min(1, (U.clientX - Q.left) / Q.width));
      r.value.currentTime = lt * n.value;
    }
    function T(U) {
      c.value = U, d.value = !1, r.value && (r.value.playbackRate = U);
    }
    function $() {
      i.value = !0;
    }
    function C() {
      i.value = !1;
    }
    function M() {
      i.value = !1, l.value = 0;
    }
    function E() {
      var U;
      l.value = ((U = r.value) == null ? void 0 : U.currentTime) ?? 0;
    }
    function F() {
      var U;
      n.value = ((U = r.value) == null ? void 0 : U.duration) ?? a.duration ?? 0, u.value = !1;
    }
    function q() {
      _.value = !0, u.value = !1;
    }
    function K() {
      u.value = !0;
    }
    function dt() {
      u.value = !1;
    }
    function bt() {
      const U = document.createElement("a");
      U.href = a.src, U.download = a.filename ?? a.src.split("/").pop() ?? "gravacao.mp3", U.click();
    }
    return Z(c, (U) => {
      r.value && (r.value.playbackRate = U);
    }), G(() => {
      var U;
      (U = r.value) == null || U.pause();
    }), (U, X) => (s(), o("div", ql, [
      e("audio", {
        ref_key: "audioRef",
        ref: r,
        src: t.src,
        preload: "metadata",
        onPlay: $,
        onPause: C,
        onEnded: M,
        onTimeupdate: E,
        onLoadedmetadata: F,
        onError: q,
        onWaiting: K,
        onCanplay: dt
      }, null, 40, Fl),
      _.value ? (s(), o("div", Ol, [...X[2] || (X[2] = [
        e("i", {
          class: "pi pi-exclamation-triangle",
          "aria-hidden": "true"
        }, null, -1),
        N(" Não foi possível carregar o áudio. ", -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("button", {
          type: "button",
          class: "trx-player__play",
          "aria-label": i.value ? "Pausar" : "Reproduzir",
          disabled: u.value,
          onClick: x
        }, [
          e("i", {
            class: w(u.value ? "pi pi-spin pi-spinner" : i.value ? "pi pi-pause" : "pi pi-play"),
            "aria-hidden": "true"
          }, null, 2)
        ], 8, jl),
        e("div", Hl, [
          e("span", Ul, v(m(l.value)), 1),
          e("div", {
            class: "trx-player__bar",
            role: "slider",
            "aria-valuemin": 0,
            "aria-valuemax": n.value,
            "aria-valuenow": l.value,
            "aria-label": `Posição: ${m(l.value)} de ${m(n.value)}`,
            tabindex: "0",
            onClick: f
          }, [
            e("div", Gl, [
              e("div", {
                class: "trx-player__fill",
                style: R({ width: `${p.value}%` })
              }, null, 4),
              e("div", {
                class: "trx-player__thumb",
                style: R({ left: `${p.value}%` })
              }, null, 4)
            ])
          ], 8, Wl),
          e("span", Kl, v(m(n.value)), 1)
        ]),
        e("div", Yl, [
          e("button", {
            type: "button",
            class: "trx-player__speed-btn",
            "aria-label": `Velocidade: ${c.value}x`,
            onClick: X[0] || (X[0] = (Q) => d.value = !d.value)
          }, v(c.value) + "x ", 9, Jl),
          d.value ? (s(), o("ul", Xl, [
            (s(!0), o(V, null, b(t.speeds, (Q) => (s(), o("li", {
              key: Q,
              class: w(["trx-player__speed-opt", { "trx-player__speed-opt--active": Q === c.value }]),
              role: "option",
              "aria-selected": Q === c.value,
              onClick: (lt) => T(Q)
            }, v(Q) + "x ", 11, Ql))), 128))
          ])) : h("", !0),
          d.value ? (s(), o("div", {
            key: 1,
            class: "trx-player__backdrop",
            onClick: X[1] || (X[1] = (Q) => d.value = !1)
          })) : h("", !0)
        ]),
        t.downloadable ? (s(), o("button", {
          key: 0,
          type: "button",
          class: "trx-player__download",
          "aria-label": "Baixar gravação",
          title: "Baixar gravação",
          onClick: bt
        }, [...X[3] || (X[3] = [
          e("i", {
            class: "pi pi-download",
            "aria-hidden": "true"
          }, null, -1)
        ])])) : h("", !0)
      ], 64))
    ]));
  }
}), iT = /* @__PURE__ */ A(Zl, [["__scopeId", "data-v-2ae62dee"]]), tn = { class: "trx-alert__body" }, en = {
  key: 0,
  class: "trx-alert__title"
}, sn = { class: "trx-alert__content" }, an = /* @__PURE__ */ g({
  __name: "TrxAlert",
  props: {
    type: { default: "info" },
    title: {},
    dismissible: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      error: "pi pi-times-circle"
    }, n = r.icon ?? l[r.type];
    return (c, u) => (s(), o("div", {
      class: w(["trx-alert", `trx-alert--${t.type}`]),
      role: "alert"
    }, [
      e("i", {
        class: w(["trx-alert__icon", P(n)]),
        "aria-hidden": "true"
      }, null, 2),
      e("div", tn, [
        t.title ? (s(), o("p", en, v(t.title), 1)) : h("", !0),
        e("div", sn, [
          I(c.$slots, "default", {}, void 0, !0)
        ])
      ]),
      t.dismissible ? (s(), o("button", {
        key: 0,
        class: "trx-alert__close",
        type: "button",
        "aria-label": "Fechar",
        onClick: u[0] || (u[0] = (_) => i("dismiss"))
      }, [...u[1] || (u[1] = [
        e("i", {
          class: "pi pi-times",
          "aria-hidden": "true"
        }, null, -1)
      ])])) : h("", !0)
    ], 2));
  }
}), cT = /* @__PURE__ */ A(an, [["__scopeId", "data-v-01863497"]]), ln = ["title", "aria-label"], nn = ["src", "alt"], on = {
  key: 1,
  class: "trx-avatar__initials"
}, rn = ["aria-label"], cn = /* @__PURE__ */ g({
  __name: "TrxUserAvatar",
  props: {
    name: {},
    src: {},
    status: {},
    size: { default: "md" },
    color: {}
  },
  setup(t) {
    const a = t, r = S(() => a.name ? a.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?"), i = {
      sm: "1.75rem",
      md: "2.25rem",
      lg: "3rem",
      xl: "4rem"
    }, l = {
      sm: "0.625rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.375rem"
    };
    return (n, c) => (s(), o("div", {
      class: w(["trx-avatar", `trx-avatar--${t.size}`]),
      style: R({
        width: i[t.size],
        height: i[t.size],
        fontSize: l[t.size],
        backgroundColor: t.src ? void 0 : t.color || "var(--trx-primary-soft)"
      }),
      title: t.name,
      role: "img",
      "aria-label": t.name ?? "Avatar"
    }, [
      t.src ? (s(), o("img", {
        key: 0,
        src: t.src,
        alt: t.name ?? "Avatar",
        class: "trx-avatar__img"
      }, null, 8, nn)) : (s(), o("span", on, v(r.value), 1)),
      t.status ? (s(), o("span", {
        key: 2,
        class: w(["trx-avatar__status", `trx-avatar__status--${t.status}`]),
        "aria-label": t.status
      }, null, 10, rn)) : h("", !0)
    ], 14, ln));
  }
}), uT = /* @__PURE__ */ A(cn, [["__scopeId", "data-v-ad53c350"]]), un = { class: "trx-kpi" }, dn = { class: "trx-kpi__header" }, _n = { class: "trx-kpi__title" }, pn = {
  key: 0,
  class: "trx-kpi__skeleton"
}, vn = { class: "trx-kpi__value" }, mn = /* @__PURE__ */ g({
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
    const a = t, r = S(() => a.trendType === "up" ? "pi pi-arrow-up" : a.trendType === "down" ? "pi pi-arrow-down" : "pi pi-minus"), i = S(() => a.trendType === "up" ? "trx-kpi__trend--up" : a.trendType === "down" ? "trx-kpi__trend--down" : "trx-kpi__trend--neutral");
    return (l, n) => (s(), o("div", un, [
      e("div", dn, [
        e("span", _n, v(t.title), 1),
        t.icon ? (s(), o("div", {
          key: 0,
          class: w(["trx-kpi__icon", `trx-kpi__icon--${t.color}`])
        }, [
          e("i", {
            class: w(t.icon),
            "aria-hidden": "true"
          }, null, 2)
        ], 2)) : h("", !0)
      ]),
      t.loading ? (s(), o("div", pn, [...n[0] || (n[0] = [
        e("div", { class: "trx-kpi__skeleton-value" }, null, -1),
        e("div", { class: "trx-kpi__skeleton-trend" }, null, -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", vn, v(t.value ?? "—"), 1),
        t.trend ? (s(), o("div", {
          key: 0,
          class: w(["trx-kpi__trend", i.value])
        }, [
          e("i", {
            class: w(r.value),
            "aria-hidden": "true"
          }, null, 2),
          e("span", null, v(t.trend), 1)
        ], 2)) : h("", !0)
      ], 64)),
      I(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dT = /* @__PURE__ */ A(mn, [["__scopeId", "data-v-a42946dc"]]), fn = { class: "trx-search" }, xn = ["aria-label"], hn = { class: "trx-search__trigger-text" }, $n = { class: "trx-search__modal" }, gn = { class: "trx-search__input-wrap" }, bn = ["placeholder", "value"], yn = { class: "trx-search__results" }, kn = {
  key: 0,
  class: "trx-search__hint"
}, wn = /* @__PURE__ */ g({
  __name: "TrxSearchBar",
  props: {
    placeholder: {},
    disableShortcut: { type: Boolean }
  },
  emits: ["search", "open", "close"],
  setup(t, { expose: a, emit: r }) {
    const i = r, l = D(!1), n = D(""), c = D(null), u = async () => {
      var x;
      l.value = !0, i("open"), await nt(), (x = c.value) == null || x.focus();
    }, _ = () => {
      l.value = !1, n.value = "", i("close");
    }, d = (x) => {
      n.value = x.target.value, i("search", n.value);
    }, p = (x) => {
      x.key === "Escape" && _();
    }, m = (x) => {
      (x.metaKey || x.ctrlKey) && x.key === "k" && (x.preventDefault(), l.value ? _() : u());
    };
    return W(() => {
      window.addEventListener("keydown", m);
    }), ft(() => {
      window.removeEventListener("keydown", m);
    }), a({ open: u, close: _ }), (x, f) => (s(), o("div", fn, [
      e("button", {
        type: "button",
        class: "trx-search__trigger",
        onClick: u,
        "aria-label": t.placeholder ?? "Buscar",
        "aria-haspopup": "dialog"
      }, [
        f[1] || (f[1] = e("i", {
          class: "pi pi-search",
          "aria-hidden": "true"
        }, null, -1)),
        e("span", hn, v(t.placeholder ?? "Buscar..."), 1),
        f[2] || (f[2] = e("kbd", { class: "trx-search__kbd" }, "⌘K", -1))
      ], 8, xn),
      O(j, { name: "trx-search" }, {
        default: B(() => [
          l.value ? (s(), o("div", {
            key: 0,
            class: "trx-search__overlay",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Busca",
            onClick: H(_, ["self"])
          }, [
            e("div", $n, [
              e("div", gn, [
                f[4] || (f[4] = e("i", {
                  class: "pi pi-search trx-search__input-icon",
                  "aria-hidden": "true"
                }, null, -1)),
                e("input", {
                  ref_key: "inputRef",
                  ref: c,
                  type: "search",
                  class: "trx-search__input",
                  placeholder: t.placeholder ?? "Buscar...",
                  value: n.value,
                  onInput: d,
                  onKeydown: p,
                  autocomplete: "off"
                }, null, 40, bn),
                n.value ? (s(), o("button", {
                  key: 0,
                  type: "button",
                  class: "trx-search__clear",
                  "aria-label": "Limpar",
                  onClick: f[0] || (f[0] = (T) => {
                    n.value = "", i("search", "");
                  })
                }, [...f[3] || (f[3] = [
                  e("i", {
                    class: "pi pi-times",
                    "aria-hidden": "true"
                  }, null, -1)
                ])])) : h("", !0),
                e("kbd", {
                  class: "trx-search__esc",
                  onClick: _
                }, "Esc")
              ]),
              e("div", yn, [
                I(x.$slots, "default", { query: n.value }, () => [
                  n.value ? h("", !0) : (s(), o("p", kn, [...f[5] || (f[5] = [
                    e("i", {
                      class: "pi pi-info-circle",
                      "aria-hidden": "true"
                    }, null, -1),
                    N(" Digite para buscar ", -1)
                  ])]))
                ], !0)
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), _T = /* @__PURE__ */ A(wn, [["__scopeId", "data-v-4e83a1ba"]]), Tn = {
  key: 0,
  class: "trx-filter-bar"
}, Cn = {
  key: 0,
  class: "trx-filter-bar__inputs"
}, Sn = {
  key: 1,
  class: "trx-filter-bar__chips",
  role: "list",
  "aria-label": "Filtros ativos"
}, In = { class: "trx-filter-bar__chip-label" }, Vn = { class: "trx-filter-bar__chip-value" }, Bn = ["aria-label", "onClick"], Pn = /* @__PURE__ */ g({
  __name: "TrxFilterBar",
  props: {
    filters: {},
    clearLabel: {}
  },
  emits: ["remove", "clear"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => (r.filters ?? []).length > 0), n = (c) => c.displayValue ?? String(c.value);
    return (c, u) => l.value || c.$slots.default ? (s(), o("div", Tn, [
      c.$slots.default ? (s(), o("div", Cn, [
        I(c.$slots, "default", {}, void 0, !0)
      ])) : h("", !0),
      l.value ? (s(), o("div", Sn, [
        u[3] || (u[3] = e("span", { class: "trx-filter-bar__label" }, "Filtros:", -1)),
        (s(!0), o(V, null, b(t.filters, (_) => (s(), o("span", {
          key: _.key,
          class: "trx-filter-bar__chip",
          role: "listitem"
        }, [
          e("span", In, v(_.label) + ":", 1),
          e("span", Vn, v(n(_)), 1),
          e("button", {
            type: "button",
            class: "trx-filter-bar__chip-remove",
            "aria-label": `Remover filtro ${_.label}`,
            onClick: (d) => i("remove", _.key)
          }, [...u[1] || (u[1] = [
            e("i", {
              class: "pi pi-times",
              "aria-hidden": "true"
            }, null, -1)
          ])], 8, Bn)
        ]))), 128)),
        e("button", {
          type: "button",
          class: "trx-filter-bar__clear",
          onClick: u[0] || (u[0] = (_) => i("clear"))
        }, [
          u[2] || (u[2] = e("i", {
            class: "pi pi-filter-slash",
            "aria-hidden": "true"
          }, null, -1)),
          N(" " + v(t.clearLabel ?? "Limpar filtros"), 1)
        ])
      ])) : h("", !0)
    ])) : h("", !0);
  }
}), pT = /* @__PURE__ */ A(Pn, [["__scopeId", "data-v-227ccd1b"]]), An = {
  key: 0,
  class: "trx-dta__inline"
}, Mn = ["disabled", "aria-label", "title", "onClick"], Ln = ["aria-expanded"], zn = {
  key: 0,
  class: "trx-dta__dropdown",
  role: "menu"
}, Dn = {
  key: 0,
  class: "trx-dta__separator"
}, En = ["disabled", "onClick"], Rn = /* @__PURE__ */ g({
  __name: "TrxDataTableActions",
  props: {
    row: {},
    actions: {},
    variant: {}
  },
  setup(t) {
    const a = t, r = D(!1), i = D(null), l = S(
      () => a.actions.filter((m) => !m.visible || m.visible(a.row))
    ), n = S(
      () => a.variant ?? (l.value.length > 2 ? "menu" : "inline")
    ), c = (m) => {
      var x;
      (x = m.disabled) != null && x.call(m, a.row) || (m.action(a.row), r.value = !1);
    }, u = D(null), _ = () => {
      r.value = !r.value;
    }, d = () => {
      r.value = !1;
    }, p = (m) => {
      u.value && !u.value.contains(m.target) && d();
    };
    return W(() => document.addEventListener("click", p, !0)), G(() => document.removeEventListener("click", p, !0)), (m, x) => (s(), o("div", {
      class: "trx-dta",
      onKeydown: at(d, ["escape"])
    }, [
      n.value === "inline" ? (s(), o("div", An, [
        (s(!0), o(V, null, b(l.value, (f) => {
          var T;
          return s(), o("button", {
            key: f.label,
            type: "button",
            class: w(["trx-dta__btn", `trx-dta__btn--${f.severity ?? "secondary"}`]),
            disabled: (T = f.disabled) == null ? void 0 : T.call(f, t.row),
            "aria-label": f.label,
            title: f.label,
            onClick: ($) => c(f)
          }, [
            f.icon ? (s(), o("i", {
              key: 0,
              class: w(f.icon),
              "aria-hidden": "true"
            }, null, 2)) : h("", !0),
            e("span", null, v(f.label), 1)
          ], 10, Mn);
        }), 128))
      ])) : (s(), o("div", {
        key: 1,
        ref_key: "menuWrapRef",
        ref: u,
        class: "trx-dta__menu-wrap"
      }, [
        e("button", {
          ref_key: "triggerRef",
          ref: i,
          type: "button",
          class: "trx-dta__trigger",
          "aria-expanded": r.value,
          "aria-haspopup": "menu",
          "aria-label": "Ações",
          onClick: _
        }, [...x[0] || (x[0] = [
          e("i", {
            class: "pi pi-ellipsis-v",
            "aria-hidden": "true"
          }, null, -1)
        ])], 8, Ln),
        O(j, { name: "trx-dta" }, {
          default: B(() => [
            r.value ? (s(), o("div", zn, [
              (s(!0), o(V, null, b(l.value, (f) => {
                var T, $;
                return s(), o(V, {
                  key: f.label
                }, [
                  f.separator ? (s(), o("hr", Dn)) : h("", !0),
                  e("button", {
                    type: "button",
                    class: w([
                      "trx-dta__item",
                      `trx-dta__item--${f.severity ?? "secondary"}`,
                      { "trx-dta__item--disabled": (T = f.disabled) == null ? void 0 : T.call(f, t.row) }
                    ]),
                    disabled: ($ = f.disabled) == null ? void 0 : $.call(f, t.row),
                    role: "menuitem",
                    onClick: (C) => c(f)
                  }, [
                    f.icon ? (s(), o("i", {
                      key: 0,
                      class: w(f.icon),
                      "aria-hidden": "true"
                    }, null, 2)) : h("", !0),
                    N(" " + v(f.label), 1)
                  ], 10, En)
                ], 64);
              }), 128))
            ])) : h("", !0)
          ]),
          _: 1
        })
      ], 512))
    ], 32));
  }
}), vT = /* @__PURE__ */ A(Rn, [["__scopeId", "data-v-fe60232d"]]), Nn = {
  class: "trx-error",
  role: "main"
}, qn = { class: "trx-error__inner" }, Fn = { class: "trx-error__icon-wrap" }, On = { class: "trx-error__code" }, jn = { class: "trx-error__title" }, Hn = { class: "trx-error__desc" }, Un = {
  key: 0,
  class: "trx-error__content"
}, Wn = { class: "trx-error__actions" }, Gn = /* @__PURE__ */ g({
  __name: "TrxErrorPage",
  props: {
    code: { default: 500 },
    title: {},
    description: {},
    showBack: { type: Boolean, default: !0 },
    showRetry: { type: Boolean, default: !0 }
  },
  emits: ["back", "retry"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => ({
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
    })[r.code]);
    return (n, c) => (s(), o("div", Nn, [
      e("div", qn, [
        e("div", Fn, [
          e("i", {
            class: w(["trx-error__icon", l.value.icon]),
            "aria-hidden": "true"
          }, null, 2),
          e("span", On, v(t.code), 1)
        ]),
        e("h1", jn, v(t.title ?? l.value.title), 1),
        e("p", Hn, v(t.description ?? l.value.description), 1),
        n.$slots.default ? (s(), o("div", Un, [
          I(n.$slots, "default", {}, void 0, !0)
        ])) : h("", !0),
        e("div", Wn, [
          t.showBack ? (s(), o("button", {
            key: 0,
            type: "button",
            class: "trx-error__btn trx-error__btn--secondary",
            onClick: c[0] || (c[0] = (u) => i("back"))
          }, [...c[2] || (c[2] = [
            e("i", {
              class: "pi pi-arrow-left",
              "aria-hidden": "true"
            }, null, -1),
            N(" Voltar ", -1)
          ])])) : h("", !0),
          t.showRetry ? (s(), o("button", {
            key: 1,
            type: "button",
            class: "trx-error__btn trx-error__btn--primary",
            onClick: c[1] || (c[1] = (u) => i("retry"))
          }, [...c[3] || (c[3] = [
            e("i", {
              class: "pi pi-refresh",
              "aria-hidden": "true"
            }, null, -1),
            N(" Tentar novamente ", -1)
          ])])) : h("", !0)
        ])
      ])
    ]));
  }
}), mT = /* @__PURE__ */ A(Gn, [["__scopeId", "data-v-342a5b45"]]), Kn = /* @__PURE__ */ g({
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
    const a = {
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
    }, r = t, i = r.as ?? a[r.variant];
    return (l, n) => (s(), L(Tt(P(i)), {
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
      default: B(() => [
        I(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fT = /* @__PURE__ */ A(Kn, [["__scopeId", "data-v-9bfe5d38"]]), Yn = { class: "trx-call-card__left" }, Jn = { class: "trx-call-card__info" }, Xn = { class: "trx-call-card__caller" }, Qn = { class: "trx-call-card__name" }, Zn = {
  key: 0,
  class: "trx-call-card__number"
}, to = { class: "trx-call-card__meta" }, eo = {
  key: 0,
  class: "trx-call-card__duration"
}, so = {
  key: 1,
  class: "trx-call-card__queue"
}, ao = {
  key: 0,
  class: "trx-call-card__agent"
}, lo = { class: "trx-call-card__actions" }, no = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = {
      ringing: { label: "Chamando", color: "var(--trx-info-color)", icon: "pi pi-phone" },
      active: { label: "Em chamada", color: "var(--trx-success-color)", icon: "pi pi-phone" },
      hold: { label: "Em espera", color: "var(--trx-warning-color)", icon: "pi pi-pause" },
      ended: { label: "Encerrada", color: "var(--trx-text-secondary)", icon: "pi pi-phone-slash" },
      missed: { label: "Perdida", color: "var(--trx-danger-color)", icon: "pi pi-times" }
    }, n = S(() => l[r.status]);
    function c(u) {
      if (!u) return "00:00";
      const _ = Math.floor(u / 60).toString().padStart(2, "0"), d = (u % 60).toString().padStart(2, "0");
      return `${_}:${d}`;
    }
    return (u, _) => (s(), o("div", {
      class: w(["trx-call-card", `trx-call-card--${t.status}`])
    }, [
      e("div", Yn, [
        e("div", {
          class: "trx-call-card__icon",
          style: R({ color: n.value.color })
        }, [
          e("i", {
            class: w(n.value.icon)
          }, null, 2),
          e("i", {
            class: w(["trx-call-card__direction", t.direction === "inbound" ? "pi pi-arrow-down-left" : "pi pi-arrow-up-right"])
          }, null, 2)
        ], 4)
      ]),
      e("div", Jn, [
        e("div", Xn, [
          e("span", Qn, v(t.callerName || t.callerId), 1),
          t.callerName ? (s(), o("span", Zn, v(t.callerId), 1)) : h("", !0)
        ]),
        e("div", to, [
          e("span", {
            class: "trx-call-card__status",
            style: R({ color: n.value.color })
          }, v(n.value.label), 5),
          t.duration !== void 0 ? (s(), o("span", eo, v(c(t.duration)), 1)) : h("", !0),
          t.queue ? (s(), o("span", so, v(t.queue), 1)) : h("", !0)
        ]),
        t.agent ? (s(), o("div", ao, [
          _[4] || (_[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0)
      ]),
      e("div", lo, [
        I(u.$slots, "actions", {}, () => [
          t.status === "ringing" ? (s(), o("button", {
            key: 0,
            class: "trx-call-card__btn trx-call-card__btn--answer",
            onClick: _[0] || (_[0] = (d) => i("answer")),
            title: "Atender"
          }, [..._[5] || (_[5] = [
            e("i", { class: "pi pi-phone" }, null, -1)
          ])])) : h("", !0),
          t.status === "active" ? (s(), o("button", {
            key: 1,
            class: "trx-call-card__btn trx-call-card__btn--hold",
            onClick: _[1] || (_[1] = (d) => i("hold")),
            title: "Colocar em espera"
          }, [..._[6] || (_[6] = [
            e("i", { class: "pi pi-pause" }, null, -1)
          ])])) : h("", !0),
          t.status === "active" || t.status === "hold" ? (s(), o("button", {
            key: 2,
            class: "trx-call-card__btn trx-call-card__btn--transfer",
            onClick: _[2] || (_[2] = (d) => i("transfer")),
            title: "Transferir"
          }, [..._[7] || (_[7] = [
            e("i", { class: "pi pi-share-alt" }, null, -1)
          ])])) : h("", !0),
          t.status !== "ended" && t.status !== "missed" ? (s(), o("button", {
            key: 3,
            class: "trx-call-card__btn trx-call-card__btn--hangup",
            onClick: _[3] || (_[3] = (d) => i("hangup")),
            title: "Encerrar"
          }, [..._[8] || (_[8] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])) : h("", !0)
        ], !0)
      ])
    ], 2));
  }
}), xT = /* @__PURE__ */ A(no, [["__scopeId", "data-v-98fdc3c5"]]), oo = /* @__PURE__ */ g({
  __name: "TrxCallTimer",
  props: {
    running: { type: Boolean, default: !1 },
    startAt: { default: 0 },
    format: { default: "mm:ss" },
    color: { default: "default" }
  },
  emits: ["tick"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(r.startAt);
    let n = null;
    const c = S(() => r.color !== "default" ? r.color : l.value >= 300 ? "danger" : l.value >= 180 ? "warning" : "success"), u = S(() => ({
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)",
      default: "var(--trx-text-primary)"
    })[c.value]), _ = S(() => {
      const m = Math.floor(l.value / 3600), x = Math.floor(l.value % 3600 / 60), f = l.value % 60, T = x.toString().padStart(2, "0"), $ = f.toString().padStart(2, "0");
      return r.format === "hh:mm:ss" ? `${m.toString().padStart(2, "0")}:${T}:${$}` : `${(m * 60 + x).toString().padStart(2, "0")}:${$}`;
    });
    function d() {
      n || (n = setInterval(() => {
        l.value++, i("tick", l.value);
      }, 1e3));
    }
    function p() {
      n && (clearInterval(n), n = null);
    }
    return Z(() => r.running, (m) => {
      m ? d() : p();
    }, { immediate: !0 }), Z(() => r.startAt, (m) => {
      l.value = m;
    }), ft(() => p()), (m, x) => (s(), o("span", {
      class: "trx-call-timer",
      style: R({ color: u.value })
    }, [
      x[0] || (x[0] = e("i", { class: "pi pi-clock trx-call-timer__icon" }, null, -1)),
      N(" " + v(_.value), 1)
    ], 4));
  }
}), ro = /* @__PURE__ */ A(oo, [["__scopeId", "data-v-35e4aaaf"]]), io = { class: "trx-call-queue" }, co = { class: "trx-call-queue__header" }, uo = { class: "trx-call-queue__name" }, _o = { class: "trx-call-queue__count" }, po = {
  key: 0,
  class: "trx-call-queue__empty"
}, vo = {
  key: 1,
  class: "trx-call-queue__list"
}, mo = { class: "trx-call-queue__item-info" }, fo = { class: "trx-call-queue__item-caller" }, xo = {
  key: 0,
  class: "trx-call-queue__item-number"
}, ho = { class: "trx-call-queue__item-meta" }, $o = { class: "trx-call-queue__item-actions" }, go = ["onClick"], bo = ["onClick"], yo = /* @__PURE__ */ g({
  __name: "TrxCallQueue",
  props: {
    calls: {},
    queueName: {},
    maxWaitWarning: { default: 120 }
  },
  emits: ["answer", "transfer"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(
      () => [...r.calls].sort((u, _) => {
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
    return (u, _) => (s(), o("div", io, [
      e("div", co, [
        e("span", uo, v(t.queueName || "Fila de Chamadas"), 1),
        e("span", _o, v(t.calls.length), 1)
      ]),
      t.calls.length === 0 ? (s(), o("div", po, [..._[0] || (_[0] = [
        e("i", { class: "pi pi-inbox" }, null, -1),
        e("span", null, "Nenhuma chamada na fila", -1)
      ])])) : (s(), o("ul", vo, [
        (s(!0), o(V, null, b(l.value, (d) => (s(), o("li", {
          key: d.id,
          class: w(["trx-call-queue__item", { "trx-call-queue__item--warning": d.waitTime > t.maxWaitWarning }])
        }, [
          e("div", mo, [
            e("div", fo, [
              e("span", null, v(d.callerName || d.callerId), 1),
              d.callerName ? (s(), o("span", xo, v(d.callerId), 1)) : h("", !0)
            ]),
            e("div", ho, [
              e("span", {
                class: w(["trx-call-queue__wait", { "trx-call-queue__wait--over": d.waitTime > t.maxWaitWarning }])
              }, [
                _[1] || (_[1] = e("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(n(d.waitTime)), 1)
              ], 2),
              d.priority && d.priority !== "normal" ? (s(), o("span", {
                key: 0,
                class: "trx-call-queue__priority",
                style: R({ color: c[d.priority].color })
              }, v(c[d.priority].label), 5)) : h("", !0)
            ])
          ]),
          e("div", $o, [
            e("button", {
              class: "trx-call-queue__btn trx-call-queue__btn--answer",
              onClick: (p) => i("answer", d.id),
              title: "Atender"
            }, [..._[2] || (_[2] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, go),
            e("button", {
              class: "trx-call-queue__btn",
              onClick: (p) => i("transfer", d.id),
              title: "Transferir"
            }, [..._[3] || (_[3] = [
              e("i", { class: "pi pi-share-alt" }, null, -1)
            ])], 8, bo)
          ])
        ], 2))), 128))
      ]))
    ]));
  }
}), hT = /* @__PURE__ */ A(yo, [["__scopeId", "data-v-48b24471"]]), ko = {
  key: 0,
  class: "trx-dialer__display"
}, wo = { class: "trx-dialer__number" }, To = { class: "trx-dialer__grid" }, Co = ["disabled", "onClick"], So = { class: "trx-dialer__key-main" }, Io = {
  key: 0,
  class: "trx-dialer__key-sub"
}, Vo = { class: "trx-dialer__actions" }, Bo = ["disabled"], Po = ["disabled"], Ao = /* @__PURE__ */ g({
  __name: "TrxPhoneDialer",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean },
    showDisplay: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "call", "clear"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"], n = {
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
    }, c = S({
      get: () => r.modelValue ?? "",
      set: (m) => i("update:modelValue", m)
    });
    function u(m) {
      r.disabled || (c.value = c.value + m);
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
    return (m, x) => (s(), o("div", {
      class: w(["trx-dialer", { "trx-dialer--disabled": t.disabled }])
    }, [
      t.showDisplay ? (s(), o("div", ko, [
        e("span", wo, v(c.value || " "), 1),
        c.value ? (s(), o("button", {
          key: 0,
          class: "trx-dialer__backspace",
          onClick: _,
          title: "Apagar"
        }, [...x[0] || (x[0] = [
          e("i", { class: "pi pi-delete-left" }, null, -1)
        ])])) : h("", !0)
      ])) : h("", !0),
      e("div", To, [
        (s(), o(V, null, b(l, (f) => e("button", {
          key: f,
          class: "trx-dialer__key",
          disabled: t.disabled,
          onClick: (T) => u(f)
        }, [
          e("span", So, v(f), 1),
          n[f] ? (s(), o("span", Io, v(n[f]), 1)) : h("", !0)
        ], 8, Co)), 64))
      ]),
      e("div", Vo, [
        e("button", {
          class: "trx-dialer__clear",
          disabled: t.disabled || !c.value,
          onClick: d,
          title: "Limpar"
        }, [...x[1] || (x[1] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])], 8, Bo),
        e("button", {
          class: "trx-dialer__call",
          disabled: t.disabled || !c.value,
          onClick: p,
          title: "Ligar"
        }, [...x[2] || (x[2] = [
          e("i", { class: "pi pi-phone" }, null, -1)
        ])], 8, Po)
      ])
    ], 2));
  }
}), $T = /* @__PURE__ */ A(Ao, [["__scopeId", "data-v-a4cd158b"]]), Mo = { class: "trx-softphone__info" }, Lo = { class: "trx-softphone__details" }, zo = { class: "trx-softphone__label" }, Do = {
  key: 0,
  class: "trx-softphone__caller"
}, Eo = {
  key: 0,
  class: "trx-softphone__controls"
}, Ro = ["title"], No = ["title"], qo = /* @__PURE__ */ g({
  __name: "TrxSoftphone",
  props: {
    status: {},
    callInfo: {},
    canTransfer: { type: Boolean, default: !0 },
    canHold: { type: Boolean, default: !0 }
  },
  emits: ["answer", "hangup", "mute", "unmute", "hold", "resume", "transfer"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => ({
      idle: "Disponível",
      ringing: "Chamada entrante...",
      active: "Em chamada",
      hold: "Em espera",
      muted: "Mudo"
    })[r.status]), n = S(() => r.status === "active" || r.status === "muted");
    return (c, u) => {
      var _;
      return s(), o("div", {
        class: w(["trx-softphone", `trx-softphone--${t.status}`])
      }, [
        e("div", Mo, [
          u[5] || (u[5] = e("div", { class: "trx-softphone__status-dot" }, null, -1)),
          e("div", Lo, [
            e("span", zo, v(l.value), 1),
            t.callInfo ? (s(), o("span", Do, v(t.callInfo.name || t.callInfo.number), 1)) : h("", !0)
          ]),
          n.value && ((_ = t.callInfo) == null ? void 0 : _.duration) !== void 0 ? (s(), L(ro, {
            key: 0,
            running: n.value,
            "start-at": t.callInfo.duration,
            class: "trx-softphone__timer"
          }, null, 8, ["running", "start-at"])) : h("", !0)
        ]),
        t.status !== "idle" ? (s(), o("div", Eo, [
          t.status === "ringing" ? (s(), o("button", {
            key: 0,
            class: "trx-softphone__btn trx-softphone__btn--answer",
            onClick: u[0] || (u[0] = (d) => i("answer"))
          }, [...u[6] || (u[6] = [
            e("i", { class: "pi pi-phone" }, null, -1)
          ])])) : h("", !0),
          n.value || t.status === "hold" ? (s(), o(V, { key: 1 }, [
            t.canHold ? (s(), o("button", {
              key: 0,
              class: w(["trx-softphone__btn", t.status === "hold" ? "trx-softphone__btn--active" : ""]),
              onClick: u[1] || (u[1] = (d) => t.status === "hold" ? i("resume") : i("hold")),
              title: t.status === "hold" ? "Retomar" : "Espera"
            }, [
              e("i", {
                class: w(t.status === "hold" ? "pi pi-play" : "pi pi-pause")
              }, null, 2)
            ], 10, Ro)) : h("", !0),
            n.value ? (s(), o("button", {
              key: 1,
              class: w(["trx-softphone__btn", t.status === "muted" ? "trx-softphone__btn--active" : ""]),
              onClick: u[2] || (u[2] = (d) => t.status === "muted" ? i("unmute") : i("mute")),
              title: t.status === "muted" ? "Ativar mic" : "Mudo"
            }, [
              e("i", {
                class: w(t.status === "muted" ? "pi pi-microphone-slash" : "pi pi-microphone")
              }, null, 2)
            ], 10, No)) : h("", !0),
            t.canTransfer ? (s(), o("button", {
              key: 2,
              class: "trx-softphone__btn",
              onClick: u[3] || (u[3] = (d) => i("transfer")),
              title: "Transferir"
            }, [...u[7] || (u[7] = [
              e("i", { class: "pi pi-share-alt" }, null, -1)
            ])])) : h("", !0)
          ], 64)) : h("", !0),
          e("button", {
            class: "trx-softphone__btn trx-softphone__btn--hangup",
            onClick: u[4] || (u[4] = (d) => i("hangup")),
            title: "Encerrar"
          }, [...u[8] || (u[8] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ])) : h("", !0)
      ], 2);
    };
  }
}), gT = /* @__PURE__ */ A(qo, [["__scopeId", "data-v-80ab0580"]]), Fo = {
  key: 0,
  class: "trx-phone-input__ddi"
}, Oo = ["value", "placeholder", "disabled"], jo = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = a;
    function i(n) {
      const c = n.target.value.replace(/\D/g, "").slice(0, 11), u = l(c);
      r("update:modelValue", u), r("change", u);
    }
    function l(n) {
      return n.length <= 2 ? n.length ? `(${n}` : "" : n.length <= 6 ? `(${n.slice(0, 2)}) ${n.slice(2)}` : n.length <= 10 ? `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}` : `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
    }
    return (n, c) => (s(), o("div", {
      class: w(["trx-phone-input", { "trx-phone-input--invalid": t.invalid, "trx-phone-input--disabled": t.disabled }])
    }, [
      t.showDdi ? (s(), o("span", Fo, v(t.ddi), 1)) : h("", !0),
      c[0] || (c[0] = e("i", { class: "pi pi-phone trx-phone-input__icon" }, null, -1)),
      e("input", {
        class: "trx-phone-input__field",
        type: "tel",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        autocomplete: "tel",
        onInput: i
      }, null, 40, Oo)
    ], 2));
  }
}), bT = /* @__PURE__ */ A(jo, [["__scopeId", "data-v-d0bc586c"]]), Ho = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = ot("canvas");
    function n() {
      const u = l.value;
      if (!u || !r.data.length) return;
      const _ = u.getContext("2d");
      if (!_) return;
      const d = window.devicePixelRatio || 1, p = r.barWidth + r.barGap, m = p * r.data.length - r.barGap;
      u.width = m * d, u.height = r.height * d, u.style.width = `${m}px`, u.style.height = `${r.height}px`, _.scale(d, d);
      const x = r.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", f = r.progressColor || "#10b981", T = r.height / 2;
      r.data.forEach(($, C) => {
        const M = C * p, E = Math.max(2, $ * r.height * 0.9), F = T - E / 2, q = C / r.data.length < r.progress;
        _.fillStyle = q ? f : x + "66", _.beginPath(), _.roundRect(M, F, r.barWidth, E, 1), _.fill();
      });
    }
    function c(u) {
      const _ = l.value;
      if (!_) return;
      const d = _.getBoundingClientRect(), p = (u.clientX - d.left) / d.width;
      i("seek", Math.max(0, Math.min(1, p)));
    }
    return W(n), Z(() => [r.data, r.progress, r.color, r.progressColor], n, { deep: !0 }), (u, _) => (s(), o("canvas", {
      ref_key: "canvas",
      ref: l,
      class: "trx-waveform",
      onClick: c
    }, null, 512));
  }
}), yT = /* @__PURE__ */ A(Ho, [["__scopeId", "data-v-c031b667"]]), Uo = { class: "trx-transcription" }, Wo = {
  key: 0,
  class: "trx-transcription__avatar"
}, Go = { class: "trx-transcription__bubble" }, Ko = { class: "trx-transcription__header" }, Yo = { class: "trx-transcription__speaker" }, Jo = { class: "trx-transcription__time" }, Xo = {
  key: 0,
  class: "trx-transcription__low-conf",
  title: "Baixa confiança"
}, Qo = ["innerHTML"], Zo = /* @__PURE__ */ g({
  __name: "TrxTranscription",
  props: {
    segments: {},
    currentTime: {},
    agentName: { default: "Agente" },
    customerName: { default: "Cliente" },
    searchQuery: {}
  },
  setup(t) {
    const a = t;
    function r(u) {
      const _ = Math.floor(u / 60).toString().padStart(2, "0"), d = Math.floor(u % 60).toString().padStart(2, "0");
      return `${_}:${d}`;
    }
    function i(u) {
      if (a.currentTime === void 0) return !1;
      const _ = u.endTime ?? u.startTime + 5;
      return a.currentTime >= u.startTime && a.currentTime <= _;
    }
    function l(u) {
      if (!a.searchQuery) return u;
      const _ = a.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return u.replace(new RegExp(`(${_})`, "gi"), "<mark>$1</mark>");
    }
    function n(u) {
      return u === "agent" ? a.agentName : u === "customer" ? a.customerName : u;
    }
    function c(u) {
      return u.split(" ").slice(0, 2).map((_) => _[0]).join("").toUpperCase();
    }
    return (u, _) => (s(), o("div", Uo, [
      (s(!0), o(V, null, b(t.segments, (d) => (s(), o("div", {
        key: d.id,
        class: w(["trx-transcription__segment", [
          `trx-transcription__segment--${d.speaker}`,
          { "trx-transcription__segment--active": i(d) }
        ]])
      }, [
        d.speaker !== "system" ? (s(), o("div", Wo, v(c(n(d.speaker))), 1)) : h("", !0),
        e("div", Go, [
          e("div", Ko, [
            e("span", Yo, v(n(d.speaker)), 1),
            e("span", Jo, v(r(d.startTime)), 1),
            d.confidence !== void 0 && d.confidence < 0.7 ? (s(), o("span", Xo, [..._[0] || (_[0] = [
              e("i", { class: "pi pi-exclamation-triangle" }, null, -1)
            ])])) : h("", !0)
          ]),
          e("p", {
            class: "trx-transcription__text",
            innerHTML: l(d.text)
          }, null, 8, Qo)
        ])
      ], 2))), 128))
    ]));
  }
}), kT = /* @__PURE__ */ A(Zo, [["__scopeId", "data-v-2470dac6"]]), tr = /* @__PURE__ */ g({
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
    const a = t, r = ot("canvas");
    function i() {
      const l = r.value;
      if (!l || a.data.length < 2) return;
      const n = l.getContext("2d");
      if (!n) return;
      const c = window.devicePixelRatio || 1;
      l.width = a.width * c, l.height = a.height * c, l.style.width = `${a.width}px`, l.style.height = `${a.height}px`, n.scale(c, c);
      const u = a.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", _ = Math.min(...a.data), p = Math.max(...a.data) - _ || 1, m = 2, x = a.data.map((f, T) => ({
        x: T / (a.data.length - 1) * (a.width - m * 2) + m,
        y: a.height - m - (f - _) / p * (a.height - m * 2)
      }));
      if (n.beginPath(), n.moveTo(x[0].x, x[0].y), x.slice(1).forEach((f) => n.lineTo(f.x, f.y)), a.fill) {
        const f = x[x.length - 1];
        n.lineTo(f.x, a.height), n.lineTo(x[0].x, a.height), n.closePath();
        const T = n.createLinearGradient(0, 0, 0, a.height);
        T.addColorStop(0, u + "33"), T.addColorStop(1, u + "00"), n.fillStyle = T, n.fill(), n.beginPath(), n.moveTo(x[0].x, x[0].y), x.slice(1).forEach(($) => n.lineTo($.x, $.y));
      }
      if (n.strokeStyle = u, n.lineWidth = a.strokeWidth, n.lineJoin = "round", n.lineCap = "round", n.stroke(), a.showDot) {
        const f = x[x.length - 1];
        n.beginPath(), n.arc(f.x, f.y, 3, 0, Math.PI * 2), n.fillStyle = u, n.fill();
      }
    }
    return W(i), Z(() => [a.data, a.color, a.width, a.height], i, { deep: !0 }), (l, n) => (s(), o("canvas", {
      ref_key: "canvas",
      ref: r,
      class: "trx-sparkline"
    }, null, 512));
  }
}), er = /* @__PURE__ */ A(tr, [["__scopeId", "data-v-5bfe2b98"]]), sr = /* @__PURE__ */ g({
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
    const a = t, r = ot("canvas"), i = S(() => {
      if (a.color !== "auto") return a.color;
      const n = (a.value - a.min) / (a.max - a.min) * 100;
      return n >= 80 ? "#ef4444" : n >= 60 ? "#f59e0b" : "#10b981";
    });
    function l() {
      const n = r.value;
      if (!n) return;
      const c = n.getContext("2d");
      if (!c) return;
      const u = window.devicePixelRatio || 1;
      n.width = a.size * u, n.height = a.size * 0.65 * u, n.style.width = `${a.size}px`, n.style.height = `${a.size * 0.65}px`, c.scale(u, u);
      const _ = a.size / 2, d = a.size * 0.55, p = (a.size - a.thickness * 2 - 8) / 2, m = Math.PI, x = 2 * Math.PI, f = Math.max(0, Math.min(1, (a.value - a.min) / (a.max - a.min))), T = m + f * Math.PI, $ = getComputedStyle(document.documentElement), C = $.getPropertyValue("--trx-border-color").trim() || "#e2e8f0";
      c.beginPath(), c.arc(_, d, p, m, x), c.strokeStyle = C, c.lineWidth = a.thickness, c.lineCap = "round", c.stroke(), f > 0 && (c.beginPath(), c.arc(_, d, p, m, T), c.strokeStyle = i.value, c.lineWidth = a.thickness, c.lineCap = "round", c.stroke()), c.fillStyle = $.getPropertyValue("--trx-text-primary").trim() || "#1e293b", c.font = `bold ${a.size * 0.16}px Inter, system-ui`, c.textAlign = "center", c.textBaseline = "middle";
      const M = `${Math.round(a.value)}${a.unit || ""}`;
      c.fillText(M, _, d - a.size * 0.04), a.label && (c.fillStyle = $.getPropertyValue("--trx-text-secondary").trim() || "#64748b", c.font = `${a.size * 0.09}px Inter, system-ui`, c.fillText(a.label, _, d + a.size * 0.1));
    }
    return W(l), Z(() => [a.value, a.color, a.size], l), (n, c) => (s(), o("canvas", {
      ref_key: "canvas",
      ref: r,
      class: "trx-gauge"
    }, null, 512));
  }
}), wT = /* @__PURE__ */ A(sr, [["__scopeId", "data-v-6d505e7d"]]), ar = { class: "trx-metric-card__main" }, lr = { class: "trx-metric-card__title" }, nr = { class: "trx-metric-card__value-row" }, or = {
  key: 0,
  class: "trx-metric-card__skeleton"
}, rr = {
  key: 0,
  class: "trx-metric-card__unit"
}, ir = {
  key: 0,
  class: "trx-metric-card__change-label"
}, cr = {
  key: 0,
  class: "trx-metric-card__chart"
}, ur = /* @__PURE__ */ g({
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
    const a = t, r = S(() => ({
      primary: "var(--trx-accent-color)",
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)"
    })[a.color]), i = S(() => a.change !== void 0 && a.change >= 0), l = S(() => a.change === void 0 ? "" : a.change > 0 ? "pi pi-arrow-up" : a.change < 0 ? "pi pi-arrow-down" : "pi pi-minus");
    return (n, c) => {
      var u;
      return s(), o("div", {
        class: w(["trx-metric-card", `trx-metric-card--${t.color}`])
      }, [
        e("div", ar, [
          e("p", lr, v(t.title), 1),
          e("div", nr, [
            t.loading ? (s(), o("span", or)) : (s(), o(V, { key: 1 }, [
              e("span", {
                class: "trx-metric-card__value",
                style: R({ color: r.value })
              }, v(t.value), 5),
              t.unit ? (s(), o("span", rr, v(t.unit), 1)) : h("", !0)
            ], 64))
          ]),
          t.change !== void 0 ? (s(), o("div", {
            key: 0,
            class: w(["trx-metric-card__change", i.value ? "trx-metric-card__change--up" : "trx-metric-card__change--down"])
          }, [
            e("i", {
              class: w(l.value)
            }, null, 2),
            e("span", null, v(Math.abs(t.change)) + "%", 1),
            t.changeLabel ? (s(), o("span", ir, v(t.changeLabel), 1)) : h("", !0)
          ], 2)) : h("", !0)
        ]),
        (u = t.sparklineData) != null && u.length ? (s(), o("div", cr, [
          O(er, {
            data: t.sparklineData,
            width: 80,
            height: 40,
            color: r.value
          }, null, 8, ["data", "color"])
        ])) : h("", !0)
      ], 2);
    };
  }
}), TT = /* @__PURE__ */ A(ur, [["__scopeId", "data-v-6c648207"]]), dr = { class: "trx-heatmap" }, _r = {
  key: 0,
  class: "trx-heatmap__hour-labels"
}, pr = { class: "trx-heatmap__grid" }, vr = {
  key: 0,
  class: "trx-heatmap__day-label"
}, mr = ["title"], fr = /* @__PURE__ */ g({
  __name: "TrxHeatmap",
  props: {
    data: {},
    maxValue: {},
    cellSize: { default: 20 },
    showLabels: { type: Boolean, default: !0 },
    days: { default: () => ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] }
  },
  setup(t) {
    const a = t, r = Array.from({ length: 24 }, (u, _) => _), i = S(() => a.maxValue ?? Math.max(1, ...a.data.map((u) => u.value)));
    function l(u, _) {
      return a.data.find((d) => d.day === u && d.hour === _);
    }
    function n(u) {
      return Math.max(0.05, u / i.value);
    }
    function c(u) {
      return u === 0 || u === 6 || u === 12 || u === 18 || u === 23 ? `${u}h` : "";
    }
    return (u, _) => (s(), o("div", dr, [
      t.showLabels ? (s(), o("div", _r, [
        _[0] || (_[0] = e("div", { class: "trx-heatmap__corner" }, null, -1)),
        (s(!0), o(V, null, b(P(r), (d) => (s(), o("div", {
          key: d,
          class: "trx-heatmap__hour-label",
          style: R({ width: `${t.cellSize}px` })
        }, v(c(d)), 5))), 128))
      ])) : h("", !0),
      e("div", pr, [
        (s(!0), o(V, null, b(t.days, (d, p) => (s(), o("div", {
          key: p,
          class: "trx-heatmap__row"
        }, [
          t.showLabels ? (s(), o("div", vr, v(d), 1)) : h("", !0),
          (s(!0), o(V, null, b(P(r), (m) => {
            var x, f;
            return s(), o("div", {
              key: m,
              class: "trx-heatmap__cell",
              style: R({
                width: `${t.cellSize}px`,
                height: `${t.cellSize}px`,
                opacity: n(((x = l(p, m)) == null ? void 0 : x.value) ?? 0)
              }),
              title: `${d} ${m}h: ${((f = l(p, m)) == null ? void 0 : f.value) ?? 0}`
            }, null, 12, mr);
          }), 128))
        ]))), 128))
      ])
    ]));
  }
}), CT = /* @__PURE__ */ A(fr, [["__scopeId", "data-v-3bac74cd"]]), xr = /* @__PURE__ */ g({
  __name: "TrxDashboardGrid",
  props: {
    columns: { default: 12 },
    gap: { default: "1rem" }
  },
  setup(t) {
    return (a, r) => (s(), o("div", {
      class: "trx-dashboard-grid",
      style: R({
        gridTemplateColumns: `repeat(${t.columns}, 1fr)`,
        gap: t.gap
      })
    }, [
      I(a.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ST = /* @__PURE__ */ A(xr, [["__scopeId", "data-v-b95e8456"]]), hr = { class: "trx-table-toolbar" }, $r = {
  key: 0,
  class: "trx-table-toolbar__bulk"
}, gr = { class: "trx-table-toolbar__bulk-count" }, br = { class: "trx-table-toolbar__main" }, yr = { class: "trx-table-toolbar__search" }, kr = ["value", "placeholder"], wr = { class: "trx-table-toolbar__center" }, Tr = {
  key: 0,
  class: "trx-table-toolbar__total"
}, Cr = { class: "trx-table-toolbar__actions" }, Sr = ["disabled"], Ir = {
  key: 0,
  class: "trx-table-toolbar__filter-panel"
}, Vr = /* @__PURE__ */ g({
  __name: "TrxTableToolbar",
  props: {
    searchValue: {},
    searchPlaceholder: { default: "Pesquisar..." },
    loading: { type: Boolean },
    total: {},
    selectedCount: {}
  },
  emits: ["update:searchValue", "refresh", "filter"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1);
    return (l, n) => (s(), o("div", hr, [
      O(j, { name: "trx-bulk-slide" }, {
        default: B(() => [
          t.selectedCount && t.selectedCount > 0 ? (s(), o("div", $r, [
            e("span", gr, v(t.selectedCount) + " selecionado(s)", 1),
            I(l.$slots, "bulk-actions", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      }),
      e("div", br, [
        e("div", yr, [
          n[5] || (n[5] = e("i", { class: "pi pi-search trx-table-toolbar__search-icon" }, null, -1)),
          e("input", {
            class: "trx-table-toolbar__search-input",
            type: "text",
            value: t.searchValue,
            placeholder: t.searchPlaceholder,
            onInput: n[0] || (n[0] = (c) => r("update:searchValue", c.target.value))
          }, null, 40, kr),
          t.searchValue ? (s(), o("button", {
            key: 0,
            class: "trx-table-toolbar__search-clear",
            onClick: n[1] || (n[1] = (c) => r("update:searchValue", ""))
          }, [...n[4] || (n[4] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])) : h("", !0)
        ]),
        e("div", wr, [
          t.total !== void 0 ? (s(), o("span", Tr, v(t.total) + " registro(s) ", 1)) : h("", !0)
        ]),
        e("div", Cr, [
          I(l.$slots, "filters", {}, () => [
            l.$slots["filter-panel"] ? (s(), o("button", {
              key: 0,
              class: w(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--active": i.value }]),
              onClick: n[2] || (n[2] = (c) => {
                i.value = !i.value, r("filter");
              }),
              title: "Filtros"
            }, [...n[6] || (n[6] = [
              e("i", { class: "pi pi-filter" }, null, -1)
            ])], 2)) : h("", !0)
          ], !0),
          e("button", {
            class: w(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--loading": t.loading }]),
            onClick: n[3] || (n[3] = (c) => r("refresh")),
            title: "Atualizar",
            disabled: t.loading
          }, [
            e("i", {
              class: w(t.loading ? "pi pi-spin pi-spinner" : "pi pi-refresh")
            }, null, 2)
          ], 10, Sr),
          I(l.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      O(j, { name: "trx-slide-down" }, {
        default: B(() => [
          i.value && l.$slots["filter-panel"] ? (s(), o("div", Ir, [
            I(l.$slots, "filter-panel", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), IT = /* @__PURE__ */ A(Vr, [["__scopeId", "data-v-874b5252"]]), Br = {
  key: 0,
  class: "trx-bulk-actions"
}, Pr = { class: "trx-bulk-actions__count" }, Ar = { class: "trx-bulk-actions__items" }, Mr = /* @__PURE__ */ g({
  __name: "TrxBulkActions",
  props: {
    count: {},
    visible: { type: Boolean },
    label: {}
  },
  emits: ["clear"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => r.visible !== void 0 ? r.visible : r.count > 0), n = S(() => {
      var c;
      return ((c = r.label) == null ? void 0 : c.replace("{count}", String(r.count))) ?? `${r.count} selecionado${r.count !== 1 ? "s" : ""}`;
    });
    return (c, u) => (s(), L(j, { name: "trx-bulk-up" }, {
      default: B(() => [
        l.value ? (s(), o("div", Br, [
          e("span", Pr, v(n.value), 1),
          e("div", Ar, [
            I(c.$slots, "default", {}, void 0, !0)
          ]),
          e("button", {
            class: "trx-bulk-actions__clear",
            onClick: u[0] || (u[0] = (_) => i("clear")),
            title: "Limpar seleção"
          }, [...u[1] || (u[1] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ])) : h("", !0)
      ]),
      _: 3
    }));
  }
}), VT = /* @__PURE__ */ A(Mr, [["__scopeId", "data-v-5f6bea7d"]]), Lr = { class: "trx-export-btn" }, zr = ["disabled"], Dr = {
  key: 0,
  class: "trx-export-btn__menu"
}, Er = ["onClick"], Rr = /* @__PURE__ */ g({
  __name: "TrxExportButton",
  props: {
    formats: { default: () => ["csv", "excel"] },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    label: { default: "Exportar" }
  },
  emits: ["export"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1), l = {
      csv: { label: "CSV", icon: "pi pi-file" },
      excel: { label: "Excel", icon: "pi pi-file-excel" },
      pdf: { label: "PDF", icon: "pi pi-file-pdf" }
    };
    function n(u) {
      i.value = !1, r("export", u);
    }
    function c(u) {
      const _ = document.querySelector(".trx-export-btn");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", Lr, [
      e("button", {
        class: "trx-export-btn__trigger",
        disabled: t.disabled || t.loading,
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        e("i", {
          class: w(t.loading ? "pi pi-spin pi-spinner" : "pi pi-download")
        }, null, 2),
        e("span", null, v(t.label), 1),
        e("i", {
          class: w(["pi pi-chevron-down trx-export-btn__arrow", { "trx-export-btn__arrow--open": i.value }])
        }, null, 2)
      ], 8, zr),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", Dr, [
            (s(!0), o(V, null, b(t.formats, (d) => (s(), o("button", {
              key: d,
              class: "trx-export-btn__item",
              onClick: (p) => n(d)
            }, [
              e("i", {
                class: w(l[d].icon)
              }, null, 2),
              e("span", null, v(l[d].label), 1)
            ], 8, Er))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), BT = /* @__PURE__ */ A(Rr, [["__scopeId", "data-v-2e0f2f33"]]), Nr = { class: "trx-col-config" }, qr = {
  key: 0,
  class: "trx-col-config__panel"
}, Fr = ["checked", "disabled", "onChange"], Or = {
  key: 0,
  class: "trx-col-config__lock"
}, jr = /* @__PURE__ */ g({
  __name: "TrxColumnConfig",
  props: {
    columns: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1);
    function n(_) {
      const d = r.columns.find((x) => x.key === _);
      if (d != null && d.required) return;
      const p = [...r.modelValue], m = p.indexOf(_);
      m === -1 ? p.push(_) : p.splice(m, 1), i("update:modelValue", p);
    }
    function c(_) {
      return r.modelValue.includes(_);
    }
    function u(_) {
      const d = document.querySelector(".trx-col-config");
      d && !d.contains(_.target) && (l.value = !1);
    }
    return W(() => document.addEventListener("click", u, !0)), G(() => document.removeEventListener("click", u, !0)), (_, d) => (s(), o("div", Nr, [
      e("button", {
        class: "trx-col-config__trigger",
        onClick: d[0] || (d[0] = (p) => l.value = !l.value),
        title: "Configurar colunas"
      }, [...d[1] || (d[1] = [
        e("i", { class: "pi pi-table" }, null, -1)
      ])]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", qr, [
            d[3] || (d[3] = e("p", { class: "trx-col-config__title" }, "Colunas visíveis", -1)),
            (s(!0), o(V, null, b(t.columns, (p) => (s(), o("label", {
              key: p.key,
              class: w(["trx-col-config__item", { "trx-col-config__item--required": p.required }])
            }, [
              e("input", {
                type: "checkbox",
                checked: c(p.key),
                disabled: p.required,
                onChange: (m) => n(p.key)
              }, null, 40, Fr),
              e("span", null, v(p.label), 1),
              p.required ? (s(), o("span", Or, [...d[2] || (d[2] = [
                e("i", { class: "pi pi-lock" }, null, -1)
              ])])) : h("", !0)
            ], 2))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), PT = /* @__PURE__ */ A(jr, [["__scopeId", "data-v-e1297a23"]]), Hr = ["value", "disabled", "placeholder", "max"], Ur = ["value", "disabled", "placeholder", "min"], Wr = /* @__PURE__ */ g({
  __name: "TrxDateRangePicker",
  props: {
    modelValue: { default: () => ({ start: null, end: null }) },
    disabled: { type: Boolean },
    startPlaceholder: { default: "Data inicial" },
    endPlaceholder: { default: "Data final" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => {
      var p;
      return ((p = r.modelValue) == null ? void 0 : p.start) ?? "";
    }), n = S(() => {
      var p;
      return ((p = r.modelValue) == null ? void 0 : p.end) ?? "";
    });
    function c(p) {
      var m;
      i("update:modelValue", { start: p.target.value || null, end: ((m = r.modelValue) == null ? void 0 : m.end) ?? null });
    }
    function u(p) {
      var m;
      i("update:modelValue", { start: ((m = r.modelValue) == null ? void 0 : m.start) ?? null, end: p.target.value || null });
    }
    function _() {
      i("update:modelValue", { start: null, end: null });
    }
    const d = S(() => {
      var p, m;
      return !!((p = r.modelValue) != null && p.start || (m = r.modelValue) != null && m.end);
    });
    return (p, m) => (s(), o("div", {
      class: w(["trx-daterange", { "trx-daterange--disabled": t.disabled }])
    }, [
      m[1] || (m[1] = e("i", { class: "pi pi-calendar trx-daterange__icon" }, null, -1)),
      e("input", {
        class: "trx-daterange__input",
        type: "date",
        value: l.value,
        disabled: t.disabled,
        placeholder: t.startPlaceholder,
        max: n.value || void 0,
        onChange: c
      }, null, 40, Hr),
      m[2] || (m[2] = e("span", { class: "trx-daterange__sep" }, "→", -1)),
      e("input", {
        class: "trx-daterange__input",
        type: "date",
        value: n.value,
        disabled: t.disabled,
        placeholder: t.endPlaceholder,
        min: l.value || void 0,
        onChange: u
      }, null, 40, Ur),
      d.value && !t.disabled ? (s(), o("button", {
        key: 0,
        class: "trx-daterange__clear",
        onClick: _
      }, [...m[0] || (m[0] = [
        e("i", { class: "pi pi-times" }, null, -1)
      ])])) : h("", !0)
    ], 2));
  }
}), AT = /* @__PURE__ */ A(Wr, [["__scopeId", "data-v-7a43f167"]]), Gr = ["value", "disabled", "placeholder"], Kr = /* @__PURE__ */ g({
  __name: "TrxDurationInput",
  props: {
    modelValue: { default: 0 },
    format: { default: "hh:mm:ss" },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => {
      const u = r.modelValue ?? 0, _ = Math.floor(u / 3600), d = Math.floor(u % 3600 / 60), p = u % 60, m = (x) => String(x).padStart(2, "0");
      return r.format === "hh:mm:ss" ? `${m(_)}:${m(d)}:${m(p)}` : `${m(d + _ * 60)}:${m(p)}`;
    });
    function n(u) {
      const _ = u.split(":").map(Number);
      return _.length === 3 ? _[0] * 3600 + _[1] * 60 + _[2] : _.length === 2 ? _[0] * 60 + _[1] : 0;
    }
    function c(u) {
      const _ = u.target.value, d = n(_);
      isNaN(d) || i("update:modelValue", d);
    }
    return (u, _) => (s(), o("div", {
      class: w(["trx-duration", { "trx-duration--invalid": t.invalid, "trx-duration--disabled": t.disabled }])
    }, [
      _[0] || (_[0] = e("i", { class: "pi pi-clock trx-duration__icon" }, null, -1)),
      e("input", {
        class: "trx-duration__input",
        type: "text",
        value: l.value,
        disabled: t.disabled,
        placeholder: t.placeholder ?? (t.format === "hh:mm:ss" ? "00:00:00" : "00:00"),
        pattern: "[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?",
        onChange: c
      }, null, 40, Gr)
    ], 2));
  }
}), MT = /* @__PURE__ */ A(Kr, [["__scopeId", "data-v-6df8b487"]]), Yr = ["disabled"], Jr = {
  key: 1,
  class: "pi pi-chevron-down trx-timepicker__arrow"
}, Xr = {
  key: 0,
  class: "trx-timepicker__panel"
}, Qr = ["onClick"], Zr = /* @__PURE__ */ g({
  __name: "TrxTimePicker",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    step: { default: 30 },
    placeholder: { default: "--:--" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1), n = S(() => {
      const d = [];
      for (let m = 0; m < 1440; m += r.step) {
        const x = Math.floor(m / 60), f = m % 60;
        d.push(`${String(x).padStart(2, "0")}:${String(f).padStart(2, "0")}`);
      }
      return d;
    });
    function c(d) {
      i("update:modelValue", d), l.value = !1;
    }
    function u() {
      i("update:modelValue", "");
    }
    function _(d) {
      const p = document.querySelector(".trx-timepicker");
      p && !p.contains(d.target) && (l.value = !1);
    }
    return W(() => document.addEventListener("click", _, !0)), G(() => document.removeEventListener("click", _, !0)), (d, p) => (s(), o("div", {
      class: w(["trx-timepicker", { "trx-timepicker--invalid": t.invalid, "trx-timepicker--disabled": t.disabled }])
    }, [
      e("button", {
        class: "trx-timepicker__trigger",
        disabled: t.disabled,
        onClick: p[0] || (p[0] = (m) => l.value = !l.value)
      }, [
        p[1] || (p[1] = e("i", { class: "pi pi-clock trx-timepicker__icon" }, null, -1)),
        e("span", {
          class: w({ "trx-timepicker__placeholder": !t.modelValue })
        }, v(t.modelValue || t.placeholder), 3),
        t.modelValue ? (s(), o("i", {
          key: 0,
          class: "pi pi-times trx-timepicker__clear",
          onClick: H(u, ["stop"])
        })) : (s(), o("i", Jr))
      ], 8, Yr),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Xr, [
            (s(!0), o(V, null, b(n.value, (m) => (s(), o("button", {
              key: m,
              class: w(["trx-timepicker__option", { "trx-timepicker__option--active": m === t.modelValue }]),
              onClick: (x) => c(m)
            }, v(m), 11, Qr))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), LT = /* @__PURE__ */ A(Zr, [["__scopeId", "data-v-6f06dd60"]]), ti = ["accept", "multiple"], ei = { class: "trx-dropzone__label" }, si = {
  key: 0,
  class: "trx-dropzone__hint"
}, ai = {
  key: 1,
  class: "trx-dropzone__hint"
}, li = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1), n = D();
    function c(x) {
      x.preventDefault(), r.disabled || (l.value = !0);
    }
    function u() {
      l.value = !1;
    }
    function _(x) {
      var T;
      if (x.preventDefault(), l.value = !1, r.disabled) return;
      const f = Array.from(((T = x.dataTransfer) == null ? void 0 : T.files) ?? []);
      p(f);
    }
    function d(x) {
      const f = Array.from(x.target.files ?? []);
      p(f), n.value && (n.value.value = "");
    }
    function p(x) {
      if (r.maxSize) {
        const f = x.filter((T) => T.size > r.maxSize * 1024 * 1024);
        if (f.length) {
          i("error", `Arquivo(s) excedem ${r.maxSize}MB: ${f.map((T) => T.name).join(", ")}`);
          return;
        }
      }
      !r.multiple && x.length > 1 && (x = [x[0]]), i("files", x);
    }
    function m() {
      var x;
      r.disabled || (x = n.value) == null || x.click();
    }
    return (x, f) => (s(), o("div", {
      class: w(["trx-dropzone", {
        "trx-dropzone--dragging": l.value,
        "trx-dropzone--disabled": t.disabled
      }]),
      onClick: m,
      onDragover: c,
      onDragleave: u,
      onDrop: _
    }, [
      e("input", {
        ref_key: "fileInput",
        ref: n,
        type: "file",
        class: "trx-dropzone__input",
        accept: t.accept,
        multiple: t.multiple,
        onChange: d
      }, null, 40, ti),
      f[0] || (f[0] = e("i", { class: "pi pi-upload trx-dropzone__icon" }, null, -1)),
      e("p", ei, v(t.label), 1),
      t.hint ? (s(), o("p", si, v(t.hint), 1)) : h("", !0),
      t.maxSize ? (s(), o("p", ai, "Máx. " + v(t.maxSize) + "MB por arquivo", 1)) : h("", !0)
    ], 34));
  }
}), zT = /* @__PURE__ */ A(li, [["__scopeId", "data-v-83847ba3"]]), ni = { class: "trx-address__row" }, oi = { class: "trx-address__field trx-address__field--zip" }, ri = { class: "trx-address__label" }, ii = { key: 0 }, ci = { class: "trx-address__cep-wrap" }, ui = ["value", "disabled"], di = {
  key: 0,
  class: "pi pi-spin pi-spinner trx-address__cep-icon"
}, _i = {
  key: 0,
  class: "trx-address__error"
}, pi = { class: "trx-address__row trx-address__row--street" }, vi = { class: "trx-address__field" }, mi = ["value", "disabled"], fi = { class: "trx-address__field trx-address__field--number" }, xi = ["value", "disabled"], hi = { class: "trx-address__row" }, $i = { class: "trx-address__field" }, gi = ["value", "disabled"], bi = { class: "trx-address__field" }, yi = ["value", "disabled"], ki = { class: "trx-address__row" }, wi = { class: "trx-address__field" }, Ti = ["value", "disabled"], Ci = { class: "trx-address__field trx-address__field--state" }, Si = ["value", "disabled"], Ii = /* @__PURE__ */ g({
  __name: "TrxAddressForm",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1), n = D("");
    function c(_, d) {
      i("update:modelValue", { ...r.modelValue, [_]: d });
    }
    async function u(_) {
      const d = _.replace(/\D/g, "");
      if (c("zipCode", _), d.length === 8) {
        l.value = !0, n.value = "";
        try {
          const m = await (await fetch(`https://viacep.com.br/ws/${d}/json/`)).json();
          if (m.erro) {
            n.value = "CEP não encontrado";
            return;
          }
          i("update:modelValue", {
            ...r.modelValue,
            zipCode: _,
            street: m.logradouro,
            district: m.bairro,
            city: m.localidade,
            state: m.uf
          });
        } catch {
          n.value = "Erro ao buscar CEP";
        } finally {
          l.value = !1;
        }
      }
    }
    return (_, d) => {
      var p, m, x, f, T, $, C;
      return s(), o("div", {
        class: w(["trx-address", { "trx-address--disabled": t.disabled }])
      }, [
        e("div", ni, [
          e("div", oi, [
            e("label", ri, [
              d[7] || (d[7] = N("CEP ", -1)),
              t.required ? (s(), o("span", ii, "*")) : h("", !0)
            ]),
            e("div", ci, [
              e("input", {
                class: w(["trx-address__input", { "trx-address__input--error": n.value }]),
                type: "text",
                maxlength: "9",
                placeholder: "00000-000",
                value: ((p = t.modelValue) == null ? void 0 : p.zipCode) ?? "",
                disabled: t.disabled,
                onInput: d[0] || (d[0] = (M) => u(M.target.value))
              }, null, 42, ui),
              l.value ? (s(), o("i", di)) : h("", !0)
            ]),
            n.value ? (s(), o("span", _i, v(n.value), 1)) : h("", !0)
          ])
        ]),
        e("div", pi, [
          e("div", vi, [
            d[8] || (d[8] = e("label", { class: "trx-address__label" }, "Logradouro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Rua, Avenida...",
              value: ((m = t.modelValue) == null ? void 0 : m.street) ?? "",
              disabled: t.disabled,
              onInput: d[1] || (d[1] = (M) => c("street", M.target.value))
            }, null, 40, mi)
          ]),
          e("div", fi, [
            d[9] || (d[9] = e("label", { class: "trx-address__label" }, "Número", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Nº",
              value: ((x = t.modelValue) == null ? void 0 : x.number) ?? "",
              disabled: t.disabled,
              onInput: d[2] || (d[2] = (M) => c("number", M.target.value))
            }, null, 40, xi)
          ])
        ]),
        e("div", hi, [
          e("div", $i, [
            d[10] || (d[10] = e("label", { class: "trx-address__label" }, "Complemento", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Apto, Sala...",
              value: ((f = t.modelValue) == null ? void 0 : f.complement) ?? "",
              disabled: t.disabled,
              onInput: d[3] || (d[3] = (M) => c("complement", M.target.value))
            }, null, 40, gi)
          ]),
          e("div", bi, [
            d[11] || (d[11] = e("label", { class: "trx-address__label" }, "Bairro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Bairro",
              value: ((T = t.modelValue) == null ? void 0 : T.district) ?? "",
              disabled: t.disabled,
              onInput: d[4] || (d[4] = (M) => c("district", M.target.value))
            }, null, 40, yi)
          ])
        ]),
        e("div", ki, [
          e("div", wi, [
            d[12] || (d[12] = e("label", { class: "trx-address__label" }, "Cidade", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Cidade",
              value: (($ = t.modelValue) == null ? void 0 : $.city) ?? "",
              disabled: t.disabled,
              onInput: d[5] || (d[5] = (M) => c("city", M.target.value))
            }, null, 40, Ti)
          ]),
          e("div", Ci, [
            d[13] || (d[13] = e("label", { class: "trx-address__label" }, "UF", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              maxlength: "2",
              placeholder: "UF",
              value: ((C = t.modelValue) == null ? void 0 : C.state) ?? "",
              disabled: t.disabled,
              onInput: d[6] || (d[6] = (M) => c("state", M.target.value))
            }, null, 40, Si)
          ])
        ])
      ], 2);
    };
  }
}), DT = /* @__PURE__ */ A(Ii, [["__scopeId", "data-v-4f713181"]]), Vi = { class: "trx-page-layout" }, Bi = {
  key: 0,
  class: "trx-page-layout__breadcrumb"
}, Pi = {
  key: 0,
  class: "trx-page-layout__sep"
}, Ai = ["href"], Mi = {
  key: 2,
  class: "trx-page-layout__crumb"
}, Li = {
  key: 1,
  class: "trx-page-layout__header"
}, zi = { class: "trx-page-layout__heading" }, Di = {
  key: 0,
  class: "trx-page-layout__skeleton trx-page-layout__skeleton--title"
}, Ei = {
  key: 0,
  class: "trx-page-layout__title"
}, Ri = {
  key: 1,
  class: "trx-page-layout__subtitle"
}, Ni = {
  key: 0,
  class: "trx-page-layout__actions"
}, qi = { class: "trx-page-layout__content" }, Fi = {
  key: 2,
  class: "trx-page-layout__footer"
}, Oi = /* @__PURE__ */ g({
  __name: "TrxPageLayout",
  props: {
    title: {},
    subtitle: {},
    loading: { type: Boolean },
    breadcrumbs: {}
  },
  setup(t) {
    return (a, r) => {
      var i;
      return s(), o("div", Vi, [
        (i = t.breadcrumbs) != null && i.length ? (s(), o("div", Bi, [
          (s(!0), o(V, null, b(t.breadcrumbs, (l, n) => (s(), o(V, { key: n }, [
            n > 0 ? (s(), o("span", Pi, "/")) : h("", !0),
            l.to ? (s(), o("a", {
              key: 1,
              class: "trx-page-layout__crumb trx-page-layout__crumb--link",
              href: l.to
            }, v(l.label), 9, Ai)) : (s(), o("span", Mi, v(l.label), 1))
          ], 64))), 128))
        ])) : h("", !0),
        t.title || a.$slots.header ? (s(), o("div", Li, [
          e("div", zi, [
            t.loading ? (s(), o("div", Di)) : (s(), o(V, { key: 1 }, [
              t.title ? (s(), o("h1", Ei, v(t.title), 1)) : h("", !0),
              t.subtitle ? (s(), o("p", Ri, v(t.subtitle), 1)) : h("", !0)
            ], 64))
          ]),
          a.$slots.actions ? (s(), o("div", Ni, [
            I(a.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0),
          I(a.$slots, "header", {}, void 0, !0)
        ])) : h("", !0),
        e("div", qi, [
          I(a.$slots, "default", {}, void 0, !0)
        ]),
        a.$slots.footer ? (s(), o("div", Fi, [
          I(a.$slots, "footer", {}, void 0, !0)
        ])) : h("", !0)
      ]);
    };
  }
}), ET = /* @__PURE__ */ A(Oi, [["__scopeId", "data-v-2b3d5429"]]), ji = { class: "trx-tabs-router" }, Hi = {
  class: "trx-tabs-router__nav",
  role: "tablist"
}, Ui = ["disabled", "aria-selected", "onClick"], Wi = {
  key: 1,
  class: "trx-tabs-router__badge"
}, Gi = {
  class: "trx-tabs-router__content",
  role: "tabpanel"
}, Ki = /* @__PURE__ */ g({
  __name: "TrxTabsRouter",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", ji, [
      e("nav", Hi, [
        (s(!0), o(V, null, b(t.tabs, (n) => (s(), o("button", {
          key: n.key,
          class: w(["trx-tabs-router__tab", { "trx-tabs-router__tab--active": t.modelValue === n.key }]),
          disabled: n.disabled,
          role: "tab",
          "aria-selected": t.modelValue === n.key,
          onClick: (c) => !n.disabled && r("update:modelValue", n.key)
        }, [
          n.icon ? (s(), o("i", {
            key: 0,
            class: w(n.icon)
          }, null, 2)) : h("", !0),
          e("span", null, v(n.label), 1),
          n.badge !== void 0 ? (s(), o("span", Wi, v(n.badge), 1)) : h("", !0)
        ], 10, Ui))), 128))
      ]),
      e("div", Gi, [
        I(i.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), RT = /* @__PURE__ */ A(Ki, [["__scopeId", "data-v-e69a3f91"]]), Yi = { class: "trx-mobile-nav" }, Ji = ["onClick"], Xi = { class: "trx-mobile-nav__icon-wrap" }, Qi = {
  key: 0,
  class: "trx-mobile-nav__badge"
}, Zi = { class: "trx-mobile-nav__label" }, tc = /* @__PURE__ */ g({
  __name: "TrxMobileNav",
  props: {
    items: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = a;
    function i(l) {
      r("update:modelValue", l.key), r("select", l);
    }
    return (l, n) => (s(), o("nav", Yi, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("button", {
        key: c.key,
        class: w(["trx-mobile-nav__item", { "trx-mobile-nav__item--active": t.modelValue === c.key }]),
        onClick: (u) => i(c)
      }, [
        e("div", Xi, [
          e("i", {
            class: w(c.icon)
          }, null, 2),
          c.badge ? (s(), o("span", Qi, v(c.badge > 99 ? "99+" : c.badge), 1)) : h("", !0)
        ]),
        e("span", Zi, v(c.label), 1)
      ], 10, Ji))), 128))
    ]));
  }
}), NT = /* @__PURE__ */ A(tc, [["__scopeId", "data-v-5b0a32c4"]]), ec = { class: "trx-user-menu" }, sc = ["src", "alt"], ac = {
  key: 1,
  class: "trx-user-menu__initials"
}, lc = { class: "trx-user-menu__info" }, nc = { class: "trx-user-menu__name" }, oc = {
  key: 0,
  class: "trx-user-menu__role"
}, rc = {
  key: 0,
  class: "trx-user-menu__panel"
}, ic = {
  key: 0,
  class: "trx-user-menu__email"
}, cc = {
  key: 0,
  class: "trx-user-menu__sep"
}, uc = ["onClick"], dc = /* @__PURE__ */ g({
  __name: "TrxUserMenu",
  props: {
    name: {},
    email: {},
    avatar: {},
    role: {},
    items: { default: () => [] }
  },
  emits: ["select", "logout"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1);
    function l(u) {
      i.value = !1, u.key === "logout" ? r("logout") : r("select", u.key);
    }
    const n = (u) => u.split(" ").map((_) => _[0]).slice(0, 2).join("").toUpperCase();
    function c(u) {
      const _ = document.querySelector(".trx-user-menu");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", ec, [
      e("button", {
        class: "trx-user-menu__trigger",
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        t.avatar ? (s(), o("img", {
          key: 0,
          src: t.avatar,
          alt: t.name,
          class: "trx-user-menu__avatar"
        }, null, 8, sc)) : (s(), o("span", ac, v(n(t.name)), 1)),
        e("div", lc, [
          e("span", nc, v(t.name), 1),
          t.role ? (s(), o("span", oc, v(t.role), 1)) : h("", !0)
        ]),
        e("i", {
          class: w(["pi pi-chevron-down trx-user-menu__arrow", { "trx-user-menu__arrow--open": i.value }])
        }, null, 2)
      ]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", rc, [
            t.email ? (s(), o("div", ic, v(t.email), 1)) : h("", !0),
            (s(!0), o(V, null, b(t.items, (d) => (s(), o(V, {
              key: d.key
            }, [
              d.separator ? (s(), o("hr", cc)) : (s(), o("button", {
                key: 1,
                class: w(["trx-user-menu__item", { "trx-user-menu__item--danger": d.danger }]),
                onClick: (p) => l(d)
              }, [
                d.icon ? (s(), o("i", {
                  key: 0,
                  class: w(d.icon)
                }, null, 2)) : h("", !0),
                e("span", null, v(d.label), 1)
              ], 10, uc))
            ], 64))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), qT = /* @__PURE__ */ A(dc, [["__scopeId", "data-v-919df4aa"]]), _c = { class: "trx-profile-card" }, pc = {
  key: 0,
  class: "trx-profile-card__loading"
}, vc = { class: "trx-profile-card__avatar-wrap" }, mc = ["src", "alt"], fc = {
  key: 1,
  class: "trx-profile-card__initials"
}, xc = { class: "trx-profile-card__name" }, hc = {
  key: 0,
  class: "trx-profile-card__role"
}, $c = {
  key: 1,
  class: "trx-profile-card__email"
}, gc = { class: "trx-profile-card__status" }, bc = {
  key: 2,
  class: "trx-profile-card__stats"
}, yc = { class: "trx-profile-card__stat-value" }, kc = { class: "trx-profile-card__stat-label" }, wc = {
  key: 3,
  class: "trx-profile-card__actions"
}, Tc = /* @__PURE__ */ g({
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
    const a = {
      online: "Online",
      offline: "Offline",
      busy: "Ocupado",
      away: "Ausente"
    }, r = {
      online: "var(--trx-success-color)",
      offline: "var(--trx-text-secondary)",
      busy: "var(--trx-danger-color)",
      away: "var(--trx-warning-color)"
    };
    function i(l) {
      return l.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    }
    return (l, n) => {
      var c;
      return s(), o("div", _c, [
        t.loading ? (s(), o("div", pc, [...n[0] || (n[0] = [
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--avatar" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--name" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--role" }, null, -1)
        ])])) : (s(), o(V, { key: 1 }, [
          e("div", vc, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name,
              class: "trx-profile-card__avatar"
            }, null, 8, mc)) : (s(), o("span", fc, v(i(t.name)), 1)),
            e("span", {
              class: "trx-profile-card__status-dot",
              style: R({ background: r[t.status ?? "offline"] })
            }, null, 4)
          ]),
          e("h3", xc, v(t.name), 1),
          t.role ? (s(), o("p", hc, v(t.role), 1)) : h("", !0),
          t.email ? (s(), o("p", $c, v(t.email), 1)) : h("", !0),
          e("div", gc, [
            e("span", {
              class: "trx-profile-card__status-label",
              style: R({ color: r[t.status ?? "offline"] })
            }, v(a[t.status ?? "offline"]), 5)
          ]),
          (c = t.stats) != null && c.length ? (s(), o("div", bc, [
            (s(!0), o(V, null, b(t.stats, (u) => (s(), o("div", {
              key: u.label,
              class: "trx-profile-card__stat"
            }, [
              e("span", yc, v(u.value), 1),
              e("span", kc, v(u.label), 1)
            ]))), 128))
          ])) : h("", !0),
          l.$slots.actions ? (s(), o("div", wc, [
            I(l.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 64))
      ]);
    };
  }
}), FT = /* @__PURE__ */ A(Tc, [["__scopeId", "data-v-b3cb7a45"]]), Cc = /* @__PURE__ */ g({
  __name: "TrxRoleBadge",
  props: {
    role: {},
    size: { default: "md" },
    label: {}
  },
  setup(t) {
    const a = {
      admin: { label: "Admin", color: "var(--trx-danger-color)" },
      manager: { label: "Gerente", color: "var(--trx-warning-color)" },
      supervisor: { label: "Supervisor", color: "var(--trx-info-color, #3b82f6)" },
      agent: { label: "Agente", color: "var(--trx-accent-color)" },
      viewer: { label: "Visualizador", color: "var(--trx-text-secondary)" }
    }, r = t, i = a[r.role] ?? { label: r.role, color: "var(--trx-text-secondary)" }, l = r.label ?? i.label;
    return (n, c) => (s(), o("span", {
      class: w(["trx-role-badge", `trx-role-badge--${t.size}`]),
      style: R({ "--role-color": P(i).color })
    }, v(P(l)), 7));
  }
}), OT = /* @__PURE__ */ A(Cc, [["__scopeId", "data-v-fa2938f0"]]), jT = /* @__PURE__ */ g({
  __name: "TrxPermissionGate",
  props: {
    permission: {},
    userPermissions: {},
    operator: { default: "or" }
  },
  setup(t) {
    const a = t, r = S(() => {
      const i = Array.isArray(a.permission) ? a.permission : [a.permission];
      return a.operator === "and" ? i.every((l) => a.userPermissions.includes(l)) : i.some((l) => a.userPermissions.includes(l));
    });
    return (i, l) => r.value ? I(i.$slots, "default", { key: 0 }) : I(i.$slots, "fallback", { key: 1 });
  }
}), Sc = { class: "trx-notif-bell" }, Ic = {
  key: 0,
  class: "trx-notif-bell__count"
}, Vc = {
  key: 0,
  class: "trx-notif-bell__panel"
}, Bc = { class: "trx-notif-bell__header" }, Pc = {
  key: 0,
  class: "trx-notif-bell__loading"
}, Ac = {
  key: 1,
  class: "trx-notif-bell__empty"
}, Mc = {
  key: 2,
  class: "trx-notif-bell__list"
}, Lc = ["onClick"], zc = { class: "trx-notif-bell__item-content" }, Dc = { class: "trx-notif-bell__item-title" }, Ec = {
  key: 0,
  class: "trx-notif-bell__item-body"
}, Rc = {
  key: 1,
  class: "trx-notif-bell__item-time"
}, Nc = {
  key: 0,
  class: "trx-notif-bell__item-dot"
}, qc = /* @__PURE__ */ g({
  __name: "TrxNotificationBell",
  props: {
    items: { default: () => [] },
    count: {},
    loading: { type: Boolean }
  },
  emits: ["read", "read-all", "open"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1), n = () => r.count ?? r.items.filter((p) => !p.read).length, c = {
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
      l.value = !l.value, l.value && i("open");
    }
    function d(p) {
      const m = document.querySelector(".trx-notif-bell");
      m && !m.contains(p.target) && (l.value = !1);
    }
    return W(() => document.addEventListener("click", d, !0)), G(() => document.removeEventListener("click", d, !0)), (p, m) => (s(), o("div", Sc, [
      e("button", {
        class: w(["trx-notif-bell__btn", { "trx-notif-bell__btn--active": l.value }]),
        onClick: _
      }, [
        m[1] || (m[1] = e("i", { class: "pi pi-bell" }, null, -1)),
        n() > 0 ? (s(), o("span", Ic, v(n() > 99 ? "99+" : n()), 1)) : h("", !0)
      ], 2),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Vc, [
            e("div", Bc, [
              m[2] || (m[2] = e("span", { class: "trx-notif-bell__title" }, "Notificações", -1)),
              n() > 0 ? (s(), o("button", {
                key: 0,
                class: "trx-notif-bell__read-all",
                onClick: m[0] || (m[0] = (x) => i("read-all"))
              }, " Marcar todas como lidas ")) : h("", !0)
            ]),
            t.loading ? (s(), o("div", Pc, [...m[3] || (m[3] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : t.items.length ? (s(), o("div", Mc, [
              (s(!0), o(V, null, b(t.items, (x) => (s(), o("div", {
                key: x.id,
                class: w(["trx-notif-bell__item", { "trx-notif-bell__item--unread": !x.read }]),
                onClick: (f) => i("read", x.id)
              }, [
                e("div", {
                  class: "trx-notif-bell__item-icon",
                  style: R({ color: u[x.type ?? "info"] })
                }, [
                  e("i", {
                    class: w(x.icon ?? c[x.type ?? "info"])
                  }, null, 2)
                ], 4),
                e("div", zc, [
                  e("p", Dc, v(x.title), 1),
                  x.body ? (s(), o("p", Ec, v(x.body), 1)) : h("", !0),
                  x.time ? (s(), o("span", Rc, v(x.time), 1)) : h("", !0)
                ]),
                x.read ? h("", !0) : (s(), o("div", Nc))
              ], 10, Lc))), 128))
            ])) : (s(), o("div", Ac, [...m[4] || (m[4] = [
              e("i", { class: "pi pi-bell-slash" }, null, -1),
              e("span", null, "Nenhuma notificação", -1)
            ])]))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), HT = /* @__PURE__ */ A(qc, [["__scopeId", "data-v-e26fa7e6"]]), Fc = {
  key: 0,
  class: "trx-conn-status__label"
}, Oc = /* @__PURE__ */ g({
  __name: "TrxConnectionStatus",
  props: {
    status: {},
    label: {},
    showLabel: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t, r = S(() => ({
      connected: { label: "Conectado", color: "var(--trx-success-color)", icon: "pi pi-wifi", pulse: !1 },
      disconnected: { label: "Desconectado", color: "var(--trx-danger-color)", icon: "pi pi-times-circle", pulse: !1 },
      connecting: { label: "Conectando...", color: "var(--trx-warning-color)", icon: "pi pi-spin pi-spinner", pulse: !0 },
      error: { label: "Erro", color: "var(--trx-danger-color)", icon: "pi pi-exclamation-triangle", pulse: !1 }
    })[a.status]), i = S(() => a.label ?? r.value.label);
    return (l, n) => (s(), o("div", {
      class: "trx-conn-status",
      style: R({ "--conn-color": r.value.color })
    }, [
      e("span", {
        class: w(["trx-conn-status__dot", { "trx-conn-status__dot--pulse": r.value.pulse }])
      }, null, 2),
      e("i", {
        class: w(["trx-conn-status__icon", r.value.icon])
      }, null, 2),
      t.showLabel ? (s(), o("span", Fc, v(i.value), 1)) : h("", !0)
    ], 4));
  }
}), UT = /* @__PURE__ */ A(Oc, [["__scopeId", "data-v-da8341e1"]]), jc = { class: "trx-confirm-btn" }, Hc = {
  key: "idle",
  class: "trx-confirm-btn__idle"
}, Uc = ["disabled"], Wc = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Gc = {
  key: "confirm",
  class: "trx-confirm-btn__confirm-row"
}, Kc = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1);
    let n;
    function c() {
      r.disabled || r.loading || (l.value = !0, n = setTimeout(() => {
        l.value = !1;
      }, 3e3));
    }
    function u() {
      clearTimeout(n), l.value = !1, i("confirm");
    }
    function _() {
      clearTimeout(n), l.value = !1;
    }
    return (d, p) => (s(), o("div", jc, [
      O(j, {
        name: "trx-confirm-swap",
        mode: "out-in"
      }, {
        default: B(() => [
          l.value ? (s(), o("div", Gc, [
            p[0] || (p[0] = e("span", { class: "trx-confirm-btn__question" }, "Tem certeza?", -1)),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--confirm",
              onClick: u
            }, v(t.confirmLabel), 1),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--cancel",
              onClick: _
            }, v(t.cancelLabel), 1)
          ])) : (s(), o("div", Hc, [
            e("button", {
              class: w(["trx-confirm-btn__btn", `trx-confirm-btn__btn--${t.variant}`]),
              disabled: t.disabled || t.loading,
              onClick: c
            }, [
              t.loading ? (s(), o("i", Wc)) : t.icon ? (s(), o("i", {
                key: 1,
                class: w(t.icon)
              }, null, 2)) : h("", !0),
              e("span", null, v(t.label), 1)
            ], 10, Uc)
          ]))
        ]),
        _: 1
      })
    ]));
  }
}), WT = /* @__PURE__ */ A(Kc, [["__scopeId", "data-v-8d2f9f6d"]]), Yc = { key: 1 }, Jc = /* @__PURE__ */ g({
  __name: "TrxSaveIndicator",
  props: {
    state: {},
    label: {},
    errorMessage: {}
  },
  setup(t) {
    const a = t, r = S(() => ({
      idle: { icon: "", text: a.label ?? "", color: "var(--trx-text-secondary)" },
      saving: { icon: "pi pi-spin pi-spinner", text: "Salvando...", color: "var(--trx-text-secondary)" },
      saved: { icon: "pi pi-check-circle", text: a.label ?? "Salvo", color: "var(--trx-success-color)" },
      error: { icon: "pi pi-exclamation-circle", text: a.errorMessage ?? "Erro ao salvar", color: "var(--trx-danger-color)" }
    })[a.state]);
    return (i, l) => (s(), L(j, {
      name: "trx-save-fade",
      mode: "out-in"
    }, {
      default: B(() => [
        t.state !== "idle" ? (s(), o("span", {
          key: t.state,
          class: "trx-save-indicator",
          style: R({ color: r.value.color })
        }, [
          r.value.icon ? (s(), o("i", {
            key: 0,
            class: w(r.value.icon)
          }, null, 2)) : h("", !0),
          r.value.text ? (s(), o("span", Yc, v(r.value.text), 1)) : h("", !0)
        ], 4)) : h("", !0)
      ]),
      _: 1
    }));
  }
}), GT = /* @__PURE__ */ A(Jc, [["__scopeId", "data-v-74d4ab40"]]), Xc = { class: "trx-chat-bubble__content" }, Qc = {
  key: 0,
  class: "trx-chat-bubble__author"
}, Zc = { class: "trx-chat-bubble__body" }, tu = {
  key: 0,
  class: "trx-chat-bubble__text"
}, eu = ["src", "alt"], su = ["src"], au = ["href"], lu = { class: "trx-chat-bubble__meta" }, nu = {
  key: 0,
  class: "trx-chat-bubble__time"
}, ou = /* @__PURE__ */ g({
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
    const a = {
      sending: "pi pi-clock",
      sent: "pi pi-check",
      delivered: "pi pi-check",
      read: "pi pi-check-square",
      error: "pi pi-exclamation-triangle"
    }, r = {
      sending: "var(--trx-text-secondary)",
      sent: "var(--trx-text-secondary)",
      delivered: "var(--trx-text-secondary)",
      read: "var(--trx-accent-color)",
      error: "var(--trx-danger-color)"
    };
    return (i, l) => (s(), o("div", {
      class: w(["trx-chat-bubble", `trx-chat-bubble--${t.direction}`])
    }, [
      e("div", Xc, [
        t.author && t.direction === "in" ? (s(), o("span", Qc, v(t.author), 1)) : h("", !0),
        e("div", Zc, [
          I(i.$slots, "default", {}, () => [
            t.type === "text" ? (s(), o("p", tu, v(t.message), 1)) : t.type === "image" && t.fileUrl ? (s(), o("img", {
              key: 1,
              class: "trx-chat-bubble__image",
              src: t.fileUrl,
              alt: t.fileName
            }, null, 8, eu)) : t.type === "audio" && t.fileUrl ? (s(), o("audio", {
              key: 2,
              class: "trx-chat-bubble__audio",
              src: t.fileUrl,
              controls: ""
            }, null, 8, su)) : t.type === "file" ? (s(), o("a", {
              key: 3,
              class: "trx-chat-bubble__file",
              href: t.fileUrl,
              target: "_blank",
              rel: "noopener"
            }, [
              l[0] || (l[0] = e("i", { class: "pi pi-file" }, null, -1)),
              e("span", null, v(t.fileName ?? "Arquivo"), 1)
            ], 8, au)) : h("", !0)
          ], !0)
        ]),
        e("div", lu, [
          t.time ? (s(), o("span", nu, v(t.time), 1)) : h("", !0),
          t.status && t.direction === "out" ? (s(), o("i", {
            key: 1,
            class: w([a[t.status], "trx-chat-bubble__status"]),
            style: R({ color: r[t.status] })
          }, null, 6)) : h("", !0)
        ])
      ])
    ], 2));
  }
}), ru = /* @__PURE__ */ A(ou, [["__scopeId", "data-v-4e61c314"]]), iu = { class: "trx-chat-window" }, cu = {
  key: 0,
  class: "trx-chat-window__header"
}, uu = { class: "trx-chat-window__avatar" }, du = ["src", "alt"], _u = { key: 1 }, pu = { class: "trx-chat-window__contact-info" }, vu = { class: "trx-chat-window__contact-name" }, mu = {
  key: 0,
  class: "trx-chat-window__contact-status"
}, fu = {
  key: 0,
  class: "trx-chat-window__loading"
}, xu = {
  key: 1,
  class: "trx-chat-window__empty"
}, hu = { class: "trx-chat-window__composer" }, $u = ["disabled"], gu = ["placeholder", "disabled"], bu = ["disabled"], yu = /* @__PURE__ */ g({
  __name: "TrxChatWindow",
  props: {
    messages: { default: () => [] },
    contact: {},
    loading: { type: Boolean },
    placeholder: { default: "Digite uma mensagem..." },
    disabled: { type: Boolean }
  },
  emits: ["send", "attach"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D();
    function c() {
      const p = l.value.trim();
      !p || r.disabled || (i("send", p), l.value = "");
    }
    function u(p) {
      p.key === "Enter" && !p.shiftKey && (p.preventDefault(), c());
    }
    function _() {
      nt(() => {
        n.value && (n.value.scrollTop = n.value.scrollHeight);
      });
    }
    Z(() => {
      var p;
      return (p = r.messages) == null ? void 0 : p.length;
    }, _);
    function d(p) {
      return p.split(" ").map((m) => m[0]).slice(0, 2).join("").toUpperCase();
    }
    return (p, m) => (s(), o("div", iu, [
      t.contact ? (s(), o("div", cu, [
        e("div", uu, [
          t.contact.avatar ? (s(), o("img", {
            key: 0,
            src: t.contact.avatar,
            alt: t.contact.name
          }, null, 8, du)) : (s(), o("span", _u, v(d(t.contact.name)), 1))
        ]),
        e("div", pu, [
          e("span", vu, v(t.contact.name), 1),
          t.contact.status ?? t.contact.subtitle ? (s(), o("span", mu, v(t.contact.status ?? t.contact.subtitle), 1)) : h("", !0)
        ]),
        I(p.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      e("div", {
        ref_key: "messagesEl",
        ref: n,
        class: "trx-chat-window__messages"
      }, [
        t.loading ? (s(), o("div", fu, [...m[2] || (m[2] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : t.messages.length ? h("", !0) : (s(), o("div", xu, [...m[3] || (m[3] = [
          e("i", { class: "pi pi-comments" }, null, -1),
          e("span", null, "Nenhuma mensagem ainda", -1)
        ])])),
        (s(!0), o(V, null, b(t.messages, (x) => (s(), L(ru, Ct({
          key: x.id
        }, { ref_for: !0 }, x), null, 16))), 128))
      ], 512),
      e("div", hu, [
        e("button", {
          class: "trx-chat-window__attach",
          onClick: m[0] || (m[0] = (x) => i("attach")),
          title: "Anexar arquivo",
          disabled: t.disabled
        }, [...m[4] || (m[4] = [
          e("i", { class: "pi pi-paperclip" }, null, -1)
        ])], 8, $u),
        Y(e("textarea", {
          class: "trx-chat-window__input",
          placeholder: t.placeholder,
          "onUpdate:modelValue": m[1] || (m[1] = (x) => l.value = x),
          rows: "1",
          disabled: t.disabled,
          onKeydown: u
        }, null, 40, gu), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-chat-window__send",
          disabled: !l.value.trim() || t.disabled,
          onClick: c,
          title: "Enviar"
        }, [...m[5] || (m[5] = [
          e("i", { class: "pi pi-send" }, null, -1)
        ])], 8, bu)
      ])
    ]));
  }
}), KT = /* @__PURE__ */ A(yu, [["__scopeId", "data-v-5f901218"]]), ku = ["title"], wu = { key: 0 }, Tu = /* @__PURE__ */ g({
  __name: "TrxChannelBadge",
  props: {
    channel: {},
    size: { default: "md" },
    showLabel: { type: Boolean, default: !0 },
    iconOnly: { type: Boolean }
  },
  setup(t) {
    const a = {
      whatsapp: { label: "WhatsApp", icon: "pi pi-whatsapp", color: "#25D366" },
      phone: { label: "Telefone", icon: "pi pi-phone", color: "var(--trx-accent-color)" },
      email: { label: "E-mail", icon: "pi pi-envelope", color: "#3b82f6" },
      sms: { label: "SMS", icon: "pi pi-mobile", color: "#8b5cf6" },
      chat: { label: "Chat", icon: "pi pi-comments", color: "#06b6d4" },
      telegram: { label: "Telegram", icon: "pi pi-telegram", color: "#0088CC" },
      instagram: { label: "Instagram", icon: "pi pi-instagram", color: "#E1306C" },
      messenger: { label: "Messenger", icon: "pi pi-facebook", color: "#0099FF" }
    }, r = t, i = a[r.channel] ?? { label: r.channel, icon: "pi pi-question-circle", color: "var(--trx-text-secondary)" };
    return (l, n) => (s(), o("span", {
      class: w(["trx-channel-badge", `trx-channel-badge--${t.size}`]),
      style: R({ "--ch-color": P(i).color }),
      title: P(i).label
    }, [
      e("i", {
        class: w(P(i).icon)
      }, null, 2),
      !t.iconOnly && t.showLabel ? (s(), o("span", wu, v(P(i).label), 1)) : h("", !0)
    ], 14, ku));
  }
}), ut = /* @__PURE__ */ A(Tu, [["__scopeId", "data-v-90daa003"]]), Cu = { class: "trx-contact-card" }, Su = {
  key: 0,
  class: "trx-contact-card__skeleton"
}, Iu = { class: "trx-contact-card__left" }, Vu = { class: "trx-contact-card__avatar" }, Bu = ["src", "alt"], Pu = { key: 1 }, Au = { class: "trx-contact-card__info" }, Mu = { class: "trx-contact-card__name" }, Lu = {
  key: 0,
  class: "trx-contact-card__detail"
}, zu = {
  key: 1,
  class: "trx-contact-card__detail"
}, Du = {
  key: 2,
  class: "trx-contact-card__meta"
}, Eu = {
  key: 1,
  class: "trx-contact-card__last"
}, Ru = { class: "trx-contact-card__actions" }, Nu = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = a;
    function i(l) {
      return l.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    }
    return (l, n) => (s(), o("div", Cu, [
      t.loading ? (s(), o("div", Su, [...n[3] || (n[3] = [
        e("div", { class: "trx-contact-card__skel trx-contact-card__skel--avatar" }, null, -1),
        e("div", { class: "trx-contact-card__skel-info" }, [
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--name" }),
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--sub" })
        ], -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", Iu, [
          e("div", Vu, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name
            }, null, 8, Bu)) : (s(), o("span", Pu, v(i(t.name)), 1))
          ]),
          e("div", Au, [
            e("span", Mu, v(t.name), 1),
            t.phone ? (s(), o("span", Lu, [
              n[4] || (n[4] = e("i", { class: "pi pi-phone" }, null, -1)),
              N(" " + v(t.phone), 1)
            ])) : h("", !0),
            t.email ? (s(), o("span", zu, [
              n[5] || (n[5] = e("i", { class: "pi pi-envelope" }, null, -1)),
              N(" " + v(t.email), 1)
            ])) : h("", !0),
            t.channel || t.lastContact ? (s(), o("div", Du, [
              t.channel ? (s(), L(ut, {
                key: 0,
                channel: t.channel,
                size: "sm"
              }, null, 8, ["channel"])) : h("", !0),
              t.lastContact ? (s(), o("span", Eu, v(t.lastContact), 1)) : h("", !0)
            ])) : h("", !0)
          ])
        ]),
        e("div", Ru, [
          t.phone ? (s(), o("button", {
            key: 0,
            class: "trx-contact-card__btn",
            title: "Ligar",
            onClick: n[0] || (n[0] = (c) => r("call"))
          }, [...n[6] || (n[6] = [
            e("i", { class: "pi pi-phone" }, null, -1)
          ])])) : h("", !0),
          e("button", {
            class: "trx-contact-card__btn",
            title: "Chat",
            onClick: n[1] || (n[1] = (c) => r("chat"))
          }, [...n[7] || (n[7] = [
            e("i", { class: "pi pi-comments" }, null, -1)
          ])]),
          e("button", {
            class: "trx-contact-card__btn",
            title: "Ver contato",
            onClick: n[2] || (n[2] = (c) => r("view"))
          }, [...n[8] || (n[8] = [
            e("i", { class: "pi pi-external-link" }, null, -1)
          ])])
        ])
      ], 64))
    ]));
  }
}), YT = /* @__PURE__ */ A(Nu, [["__scopeId", "data-v-3bd57308"]]), qu = { class: "trx-ticket-card__top" }, Fu = { class: "trx-ticket-card__id" }, Ou = { class: "trx-ticket-card__badges" }, ju = ["title"], Hu = { class: "trx-ticket-card__title" }, Uu = { class: "trx-ticket-card__meta" }, Wu = {
  key: 0,
  class: "trx-ticket-card__meta-item"
}, Gu = {
  key: 1,
  class: "trx-ticket-card__meta-item"
}, Ku = {
  key: 2,
  class: "trx-ticket-card__meta-item trx-ticket-card__meta-item--time"
}, Yu = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = {
      open: { label: "Aberto", color: "var(--trx-accent-color)" },
      pending: { label: "Pendente", color: "var(--trx-warning-color)" },
      resolved: { label: "Resolvido", color: "var(--trx-success-color)" },
      closed: { label: "Fechado", color: "var(--trx-text-secondary)" }
    }, i = {
      low: { label: "Baixa", color: "var(--trx-text-secondary)", icon: "pi pi-minus" },
      medium: { label: "Média", color: "var(--trx-warning-color)", icon: "pi pi-equals" },
      high: { label: "Alta", color: "var(--trx-danger-color)", icon: "pi pi-arrow-up" },
      urgent: { label: "Urgente", color: "var(--trx-danger-color)", icon: "pi pi-exclamation-triangle" }
    }, l = a;
    return (n, c) => (s(), o("div", {
      class: "trx-ticket-card",
      onClick: c[3] || (c[3] = (u) => l("view"))
    }, [
      e("div", qu, [
        e("span", Fu, "#" + v(t.id), 1),
        e("div", Ou, [
          t.channel ? (s(), L(ut, {
            key: 0,
            channel: t.channel,
            size: "sm",
            "show-label": !1,
            "icon-only": ""
          }, null, 8, ["channel"])) : h("", !0),
          e("span", {
            class: "trx-ticket-card__status",
            style: R({ "--st-color": r[t.status ?? "open"].color })
          }, v(r[t.status ?? "open"].label), 5),
          e("span", {
            class: "trx-ticket-card__priority",
            style: R({ "--pr-color": i[t.priority ?? "medium"].color }),
            title: i[t.priority ?? "medium"].label
          }, [
            e("i", {
              class: w(i[t.priority ?? "medium"].icon)
            }, null, 2)
          ], 12, ju)
        ])
      ]),
      e("p", Hu, v(t.title), 1),
      e("div", Uu, [
        t.customer ? (s(), o("span", Wu, [
          c[4] || (c[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.customer), 1)
        ])) : h("", !0),
        t.agent ? (s(), o("span", Gu, [
          c[5] || (c[5] = e("i", { class: "pi pi-headphones" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0),
        t.updatedAt ?? t.createdAt ? (s(), o("span", Ku, [
          c[6] || (c[6] = e("i", { class: "pi pi-clock" }, null, -1)),
          N(" " + v(t.updatedAt ?? t.createdAt), 1)
        ])) : h("", !0)
      ]),
      e("div", {
        class: "trx-ticket-card__actions",
        onClick: c[2] || (c[2] = H(() => {
        }, ["stop"]))
      }, [
        I(n.$slots, "actions", {}, () => [
          e("button", {
            class: "trx-ticket-card__btn",
            onClick: c[0] || (c[0] = (u) => l("view"))
          }, [...c[7] || (c[7] = [
            e("i", { class: "pi pi-eye" }, null, -1),
            N(" Ver", -1)
          ])]),
          e("button", {
            class: "trx-ticket-card__btn",
            onClick: c[1] || (c[1] = (u) => l("assign"))
          }, [...c[8] || (c[8] = [
            e("i", { class: "pi pi-user-plus" }, null, -1),
            N(" Atribuir", -1)
          ])])
        ], !0)
      ])
    ]));
  }
}), JT = /* @__PURE__ */ A(Yu, [["__scopeId", "data-v-c88df6d1"]]), Ju = { class: "trx-call-history" }, Xu = {
  key: 0,
  class: "trx-call-history__empty"
}, Qu = {
  key: 1,
  class: "trx-call-history__empty"
}, Zu = {
  key: 2,
  class: "trx-call-history__list"
}, td = ["onClick"], ed = { class: "trx-call-history__info" }, sd = { class: "trx-call-history__name" }, ad = { class: "trx-call-history__sub" }, ld = { class: "trx-call-history__meta" }, nd = { class: "trx-call-history__duration" }, od = { class: "trx-call-history__time" }, rd = ["onClick"], id = ["onClick"], cd = /* @__PURE__ */ g({
  __name: "TrxCallHistory",
  props: {
    calls: { default: () => [] },
    loading: { type: Boolean },
    showRecording: { type: Boolean, default: !0 }
  },
  emits: ["play", "callback", "view"],
  setup(t, { emit: a }) {
    const r = a, i = {
      inbound: { icon: "pi pi-arrow-down-left", color: "var(--trx-success-color)", label: "Recebida" },
      outbound: { icon: "pi pi-arrow-up-right", color: "var(--trx-accent-color)", label: "Realizada" },
      missed: { icon: "pi pi-times", color: "var(--trx-danger-color)", label: "Perdida" }
    };
    function l(n) {
      if (!n) return "—";
      const c = Math.floor(n / 60), u = n % 60;
      return `${c}:${String(u).padStart(2, "0")}`;
    }
    return (n, c) => (s(), o("div", Ju, [
      t.loading ? (s(), o("div", Xu, [...c[1] || (c[1] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", Zu, [
        (s(!0), o(V, null, b(t.calls, (u) => (s(), o("div", {
          key: u.id,
          class: "trx-call-history__item",
          onClick: (_) => r("view", u)
        }, [
          e("div", {
            class: "trx-call-history__icon",
            style: R({ color: i[u.direction].color })
          }, [
            e("i", {
              class: w(i[u.direction].icon)
            }, null, 2)
          ], 4),
          e("div", ed, [
            e("span", sd, v(u.callerName ?? u.callerId), 1),
            e("span", ad, v(u.callerId) + " · " + v(i[u.direction].label), 1)
          ]),
          e("div", ld, [
            e("span", nd, v(l(u.duration)), 1),
            e("span", od, v(u.startedAt), 1)
          ]),
          e("div", {
            class: "trx-call-history__actions",
            onClick: c[0] || (c[0] = H(() => {
            }, ["stop"]))
          }, [
            t.showRecording && u.recording ? (s(), o("button", {
              key: 0,
              class: "trx-call-history__btn",
              title: "Reproduzir gravação",
              onClick: (_) => r("play", u.id)
            }, [...c[3] || (c[3] = [
              e("i", { class: "pi pi-play" }, null, -1)
            ])], 8, rd)) : h("", !0),
            e("button", {
              class: "trx-call-history__btn",
              title: "Ligar de volta",
              onClick: (_) => r("callback", u)
            }, [...c[4] || (c[4] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, id)
          ])
        ], 8, td))), 128))
      ])) : (s(), o("div", Qu, [...c[2] || (c[2] = [
        e("i", { class: "pi pi-phone-slash" }, null, -1),
        e("span", null, "Nenhuma chamada encontrada", -1)
      ])]))
    ]));
  }
}), XT = /* @__PURE__ */ A(cd, [["__scopeId", "data-v-09f018c0"]]), ud = { class: "trx-call-script" }, dd = { class: "trx-call-script__header" }, _d = { class: "trx-call-script__title" }, pd = { class: "trx-call-script__progress" }, vd = { class: "trx-call-script__progress-bar" }, md = {
  key: 0,
  class: "trx-call-script__step"
}, fd = { class: "trx-call-script__step-header" }, xd = { class: "trx-call-script__step-title" }, hd = { class: "trx-call-script__step-content" }, $d = {
  key: 1,
  class: "trx-call-script__empty"
}, gd = { class: "trx-call-script__nav" }, bd = ["disabled"], yd = {
  key: 0,
  class: "pi pi-chevron-right"
}, kd = {
  key: 1,
  class: "pi pi-check"
}, wd = /* @__PURE__ */ g({
  __name: "TrxCallScript",
  props: {
    steps: { default: () => [] },
    title: { default: "Script de Atendimento" }
  },
  emits: ["complete", "stepChange"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(0);
    function n() {
      l.value < r.steps.length - 1 ? (l.value++, i("stepChange", l.value)) : i("complete");
    }
    function c() {
      l.value > 0 && (l.value--, i("stepChange", l.value));
    }
    const u = {
      info: "pi pi-info-circle",
      question: "pi pi-question-circle",
      action: "pi pi-check-circle"
    };
    return (_, d) => (s(), o("div", ud, [
      e("div", dd, [
        e("span", _d, v(t.title), 1),
        e("span", pd, v(l.value + 1) + " / " + v(t.steps.length), 1)
      ]),
      e("div", vd, [
        e("div", {
          class: "trx-call-script__progress-fill",
          style: R({ width: `${(l.value + 1) / t.steps.length * 100}%` })
        }, null, 4)
      ]),
      t.steps[l.value] ? (s(), o("div", md, [
        e("div", fd, [
          e("i", {
            class: w(u[t.steps[l.value].type ?? "info"])
          }, null, 2),
          e("h4", xd, v(t.steps[l.value].title), 1)
        ]),
        e("p", hd, v(t.steps[l.value].content), 1)
      ])) : (s(), o("div", $d, [...d[0] || (d[0] = [
        e("i", { class: "pi pi-file-edit" }, null, -1),
        e("span", null, "Nenhum script disponível", -1)
      ])])),
      e("div", gd, [
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--secondary",
          disabled: l.value === 0,
          onClick: c
        }, [...d[1] || (d[1] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, bd),
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--primary",
          onClick: n
        }, [
          N(v(l.value === t.steps.length - 1 ? "Concluir" : "Próximo") + " ", 1),
          l.value < t.steps.length - 1 ? (s(), o("i", yd)) : (s(), o("i", kd))
        ])
      ])
    ]));
  }
}), QT = /* @__PURE__ */ A(wd, [["__scopeId", "data-v-b430310e"]]), Td = ["disabled"], Cd = {
  key: 0,
  class: "trx-disposition__selected"
}, Sd = {
  key: 1,
  class: "trx-disposition__placeholder"
}, Id = {
  key: 0,
  class: "trx-disposition__panel"
}, Vd = ["onClick"], Bd = {
  key: 1,
  class: "pi pi-pencil trx-disposition__note-icon",
  title: "Requer observação"
}, Pd = {
  key: 0,
  class: "trx-disposition__note-wrap"
}, Ad = ["value"], Md = /* @__PURE__ */ g({
  __name: "TrxDispositionPicker",
  props: {
    dispositions: { default: () => [] },
    modelValue: {},
    note: {},
    disabled: { type: Boolean },
    placeholder: { default: "Selecione a tabulação..." }
  },
  emits: ["update:modelValue", "update:note", "confirm"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(!1), n = D(r.note ?? ""), c = D(r.dispositions.find((p) => p.id === r.modelValue) ?? null);
    function u(p) {
      c.value = p, l.value = !1, i("update:modelValue", p.id), p.requireNote || i("confirm", p.id, n.value);
    }
    function _() {
      c.value && i("confirm", c.value.id, n.value);
    }
    function d(p) {
      const m = document.querySelector(".trx-disposition");
      m && !m.contains(p.target) && (l.value = !1);
    }
    return W(() => document.addEventListener("click", d, !0)), G(() => document.removeEventListener("click", d, !0)), (p, m) => {
      var x;
      return s(), o("div", {
        class: w(["trx-disposition", { "trx-disposition--disabled": t.disabled }])
      }, [
        e("button", {
          class: "trx-disposition__trigger",
          disabled: t.disabled,
          onClick: m[0] || (m[0] = (f) => l.value = !l.value)
        }, [
          c.value ? (s(), o("span", Cd, [
            c.value.icon ? (s(), o("i", {
              key: 0,
              class: w(c.value.icon),
              style: R({ color: c.value.color })
            }, null, 6)) : h("", !0),
            e("span", {
              style: R({ color: c.value.color })
            }, v(c.value.label), 5)
          ])) : (s(), o("span", Sd, v(t.placeholder), 1)),
          e("i", {
            class: w(["pi pi-chevron-down trx-disposition__arrow", { "trx-disposition__arrow--open": l.value }])
          }, null, 2)
        ], 8, Td),
        O(j, { name: "trx-dropdown" }, {
          default: B(() => [
            l.value ? (s(), o("div", Id, [
              (s(!0), o(V, null, b(t.dispositions, (f) => (s(), o("button", {
                key: f.id,
                class: w(["trx-disposition__option", { "trx-disposition__option--active": t.modelValue === f.id }]),
                onClick: (T) => u(f)
              }, [
                f.icon ? (s(), o("i", {
                  key: 0,
                  class: w(f.icon),
                  style: R({ color: f.color })
                }, null, 6)) : h("", !0),
                e("span", {
                  style: R({ color: f.color })
                }, v(f.label), 5),
                f.requireNote ? (s(), o("i", Bd)) : h("", !0)
              ], 10, Vd))), 128))
            ])) : h("", !0)
          ]),
          _: 1
        }),
        (x = c.value) != null && x.requireNote ? (s(), o("div", Pd, [
          e("textarea", {
            class: "trx-disposition__note",
            placeholder: "Adicione uma observação...",
            value: n.value,
            rows: "3",
            onInput: m[1] || (m[1] = (f) => {
              n.value = f.target.value, i("update:note", n.value);
            })
          }, null, 40, Ad),
          e("button", {
            class: "trx-disposition__confirm",
            onClick: _
          }, [...m[2] || (m[2] = [
            e("i", { class: "pi pi-check" }, null, -1),
            N(" Confirmar ", -1)
          ])])
        ])) : h("", !0)
      ], 2);
    };
  }
}), ZT = /* @__PURE__ */ A(Md, [["__scopeId", "data-v-52a3852f"]]), Ld = { class: "trx-dialer-list" }, zd = {
  key: 0,
  class: "trx-dialer-list__empty"
}, Dd = ["onClick"], Ed = { class: "trx-dialer-list__info" }, Rd = { class: "trx-dialer-list__name" }, Nd = { class: "trx-dialer-list__phone" }, qd = { class: "trx-dialer-list__meta" }, Fd = {
  key: 0,
  class: "trx-dialer-list__attempts"
}, Od = ["onClick"], jd = ["onClick"], Hd = /* @__PURE__ */ g({
  __name: "TrxDialerList",
  props: {
    contacts: { default: () => [] },
    loading: { type: Boolean },
    currentId: {}
  },
  emits: ["dial", "skip", "view"],
  setup(t, { emit: a }) {
    const r = a, i = {
      pending: { label: "Pendente", color: "var(--trx-text-secondary)", icon: "pi pi-clock" },
      dialing: { label: "Discando", color: "var(--trx-warning-color)", icon: "pi pi-spin pi-spinner" },
      connected: { label: "Conectado", color: "var(--trx-success-color)", icon: "pi pi-phone" },
      completed: { label: "Concluído", color: "var(--trx-accent-color)", icon: "pi pi-check" },
      failed: { label: "Falhou", color: "var(--trx-danger-color)", icon: "pi pi-times" },
      skipped: { label: "Ignorado", color: "var(--trx-text-secondary)", icon: "pi pi-forward" }
    };
    return (l, n) => (s(), o("div", Ld, [
      t.loading ? (s(), o("div", zd, [...n[1] || (n[1] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : (s(!0), o(V, { key: 1 }, b(t.contacts, (c) => (s(), o("div", {
        key: c.id,
        class: w(["trx-dialer-list__item", { "trx-dialer-list__item--current": t.currentId === c.id }]),
        onClick: (u) => r("view", c)
      }, [
        e("div", {
          class: "trx-dialer-list__status-icon",
          style: R({ color: i[c.status].color })
        }, [
          e("i", {
            class: w(i[c.status].icon)
          }, null, 2)
        ], 4),
        e("div", Ed, [
          e("span", Rd, v(c.name), 1),
          e("span", Nd, v(c.phone), 1)
        ]),
        e("div", qd, [
          e("span", {
            class: "trx-dialer-list__status-label",
            style: R({ color: i[c.status].color })
          }, v(i[c.status].label), 5),
          c.attempts ? (s(), o("span", Fd, v(c.attempts) + "x", 1)) : h("", !0)
        ]),
        e("div", {
          class: "trx-dialer-list__actions",
          onClick: n[0] || (n[0] = H(() => {
          }, ["stop"]))
        }, [
          c.status === "pending" ? (s(), o("button", {
            key: 0,
            class: "trx-dialer-list__btn trx-dialer-list__btn--dial",
            title: "Discar",
            onClick: (u) => r("dial", c)
          }, [...n[2] || (n[2] = [
            e("i", { class: "pi pi-phone" }, null, -1)
          ])], 8, Od)) : h("", !0),
          c.status === "pending" ? (s(), o("button", {
            key: 1,
            class: "trx-dialer-list__btn",
            title: "Pular",
            onClick: (u) => r("skip", c.id)
          }, [...n[3] || (n[3] = [
            e("i", { class: "pi pi-forward" }, null, -1)
          ])], 8, jd)) : h("", !0)
        ])
      ], 10, Dd))), 128))
    ]));
  }
}), tC = /* @__PURE__ */ A(Hd, [["__scopeId", "data-v-179000fd"]]), Ud = { class: "trx-ivr" }, Wd = {
  key: 0,
  class: "trx-ivr__toolbar"
}, Gd = ["onClick"], Kd = { class: "trx-ivr__canvas" }, Yd = ["onClick"], Jd = { class: "trx-ivr__node-type" }, Xd = { class: "trx-ivr__node-body" }, Qd = { class: "trx-ivr__node-label" }, Zd = {
  key: 0,
  class: "trx-ivr__node-options"
}, t_ = { class: "trx-ivr__key" }, e_ = {
  key: 0,
  class: "trx-ivr__empty"
}, s_ = /* @__PURE__ */ g({
  __name: "TrxIVRBuilder",
  props: {
    nodes: { default: () => [] },
    readonly: { type: Boolean }
  },
  emits: ["update:nodes", "nodeClick", "nodeAdd"],
  setup(t, { emit: a }) {
    const r = a, i = D(null), l = {
      start: { icon: "pi pi-play-circle", color: "var(--trx-success-color)", label: "Início" },
      menu: { icon: "pi pi-list", color: "var(--trx-accent-color)", label: "Menu" },
      message: { icon: "pi pi-volume-up", color: "var(--trx-warning-color)", label: "Mensagem" },
      transfer: { icon: "pi pi-phone", color: "var(--trx-text-secondary)", label: "Transferir" },
      hangup: { icon: "pi pi-times-circle", color: "var(--trx-danger-color)", label: "Desligar" },
      condition: { icon: "pi pi-code", color: "#a78bfa", label: "Condição" }
    }, n = ["menu", "message", "transfer", "hangup", "condition"];
    function c(u) {
      i.value = u.id, r("nodeClick", u);
    }
    return (u, _) => (s(), o("div", Ud, [
      t.readonly ? h("", !0) : (s(), o("div", Wd, [
        _[0] || (_[0] = e("span", { class: "trx-ivr__toolbar-label" }, "Adicionar nó:", -1)),
        (s(), o(V, null, b(n, (d) => e("button", {
          key: d,
          class: "trx-ivr__add-btn",
          style: R({ color: l[d].color, borderColor: l[d].color }),
          onClick: (p) => r("nodeAdd", d)
        }, [
          e("i", {
            class: w(l[d].icon)
          }, null, 2),
          N(" " + v(l[d].label), 1)
        ], 12, Gd)), 64))
      ])),
      e("div", Kd, [
        (s(!0), o(V, null, b(t.nodes, (d) => {
          var p;
          return s(), o("div", {
            key: d.id,
            class: w(["trx-ivr__node", { "trx-ivr__node--selected": i.value === d.id }]),
            style: R({ left: d.x + "px", top: d.y + "px", "--node-color": l[d.type].color }),
            onClick: (m) => c(d)
          }, [
            e("div", {
              class: "trx-ivr__node-header",
              style: R({ background: l[d.type].color })
            }, [
              e("i", {
                class: w([l[d.type].icon, "trx-ivr__node-icon"])
              }, null, 2),
              e("span", Jd, v(l[d.type].label), 1)
            ], 4),
            e("div", Xd, [
              e("span", Qd, v(d.label), 1),
              (p = d.options) != null && p.length ? (s(), o("div", Zd, [
                (s(!0), o(V, null, b(d.options, (m) => (s(), o("div", {
                  key: m.key,
                  class: "trx-ivr__node-option"
                }, [
                  e("kbd", t_, v(m.key), 1),
                  e("span", null, v(m.label), 1)
                ]))), 128))
              ])) : h("", !0)
            ])
          ], 14, Yd);
        }), 128)),
        t.nodes.length ? h("", !0) : (s(), o("div", e_, [..._[1] || (_[1] = [
          e("i", {
            class: "pi pi-sitemap",
            style: { "font-size": "2rem", color: "var(--trx-text-secondary)" }
          }, null, -1),
          e("span", null, "Nenhum nó. Adicione um nó para começar.", -1)
        ])]))
      ])
    ]));
  }
}), eC = /* @__PURE__ */ A(s_, [["__scopeId", "data-v-af6b0bd0"]]), a_ = ["width", "height", "viewBox"], l_ = ["cx", "cy", "r", "stroke", "stroke-width"], n_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray"], o_ = { class: "trx-progress-ring__label" }, r_ = {
  key: 0,
  class: "trx-progress-ring__unit"
}, i_ = {
  key: 1,
  class: "trx-progress-ring__text"
}, c_ = /* @__PURE__ */ g({
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
    St((_) => ({
      v56cbcac2: _.size
    }));
    const a = t, r = S(() => Math.min(1, Math.max(0, (a.value ?? 0) / a.max))), i = S(() => a.size / 2 - a.thickness / 2), l = S(() => 2 * Math.PI * i.value), n = S(() => r.value * l.value), c = S(() => l.value - n.value), u = S(() => Math.round(r.value * a.max));
    return (_, d) => (s(), o("div", {
      class: "trx-progress-ring",
      style: R({ width: `${t.size}px`, height: `${t.size}px` })
    }, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: `0 0 ${t.size} ${t.size}`
      }, [
        e("circle", {
          cx: t.size / 2,
          cy: t.size / 2,
          r: i.value,
          fill: "none",
          stroke: t.trackColor,
          "stroke-width": t.thickness
        }, null, 8, l_),
        e("circle", {
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
          style: R({
            transformOrigin: "center",
            transition: t.animate ? "stroke-dasharray 0.5s ease" : "none"
          })
        }, null, 12, n_)
      ], 8, a_)),
      e("div", o_, [
        t.showValue ? (s(), o("span", {
          key: 0,
          class: "trx-progress-ring__value",
          style: R({ color: t.color })
        }, [
          N(v(u.value), 1),
          t.unit ? (s(), o("span", r_, v(t.unit), 1)) : h("", !0)
        ], 4)) : h("", !0),
        t.label ? (s(), o("span", i_, v(t.label), 1)) : h("", !0)
      ])
    ], 4));
  }
}), sC = /* @__PURE__ */ A(c_, [["__scopeId", "data-v-a5c29afc"]]), u_ = { class: "trx-ticker" }, d_ = {
  key: 0,
  class: "trx-ticker__label"
}, __ = { key: 0 }, p_ = { key: 1 }, v_ = /* @__PURE__ */ g({
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
    const a = t, r = D("neutral");
    let i;
    Z(() => a.value, (c, u) => {
      c === u || !a.animate || (clearTimeout(i), r.value = c > u ? "up" : "down", i = setTimeout(() => r.value = "neutral", 1500));
    });
    const l = S(() => (a.value ?? 0).toFixed(a.decimals)), n = S(() => r.value === "up" ? "var(--trx-success-color)" : r.value === "down" ? "var(--trx-danger-color)" : "var(--trx-text-primary)");
    return (c, u) => (s(), o("div", u_, [
      t.label ? (s(), o("span", d_, v(t.label), 1)) : h("", !0),
      e("span", {
        class: w(["trx-ticker__value", `trx-ticker__value--${r.value}`]),
        style: R({ color: n.value })
      }, [
        t.prefix ? (s(), o("span", __, v(t.prefix), 1)) : h("", !0),
        N(v(l.value), 1),
        t.unit ? (s(), o("span", p_, v(t.unit), 1)) : h("", !0)
      ], 6)
    ]));
  }
}), aC = /* @__PURE__ */ A(v_, [["__scopeId", "data-v-66246e1c"]]), m_ = { class: "trx-funnel" }, f_ = {
  key: 0,
  class: "trx-funnel__empty"
}, x_ = {
  key: 1,
  class: "trx-funnel__steps"
}, h_ = { class: "trx-funnel__bar-wrap" }, $_ = { class: "trx-funnel__info" }, g_ = { class: "trx-funnel__label" }, b_ = { class: "trx-funnel__numbers" }, y_ = {
  key: 1,
  class: "trx-funnel__pct"
}, k_ = {
  key: 0,
  class: "trx-funnel__drop"
}, w_ = /* @__PURE__ */ g({
  __name: "TrxFunnelChart",
  props: {
    steps: { default: () => [] },
    showValues: { type: Boolean, default: !0 },
    showPercent: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t, r = [
      "var(--trx-accent-color)",
      "#60a5fa",
      "#a78bfa",
      "#f472b6",
      "#fb923c",
      "#facc15"
    ], i = S(() => Math.max(...a.steps.map((n) => n.value), 1)), l = S(
      () => a.steps.map((n, c) => ({
        ...n,
        color: n.color ?? r[c % r.length],
        pct: Math.round(n.value / i.value * 100),
        convRate: c === 0 ? 100 : Math.round(n.value / a.steps[0].value * 100)
      }))
    );
    return (n, c) => (s(), o("div", m_, [
      t.steps.length ? (s(), o("div", x_, [
        (s(!0), o(V, null, b(l.value, (u, _) => (s(), o("div", {
          key: _,
          class: "trx-funnel__step"
        }, [
          e("div", h_, [
            e("div", {
              class: w(["trx-funnel__bar", { "trx-funnel__bar--animated": t.animated }]),
              style: R({ width: u.pct + "%", background: u.color })
            }, null, 6)
          ]),
          e("div", $_, [
            e("span", g_, v(u.label), 1),
            e("div", b_, [
              t.showValues ? (s(), o("span", {
                key: 0,
                class: "trx-funnel__value",
                style: R({ color: u.color })
              }, v(u.value.toLocaleString("pt-BR")), 5)) : h("", !0),
              t.showPercent ? (s(), o("span", y_, v(u.convRate) + "%", 1)) : h("", !0)
            ])
          ]),
          _ < l.value.length - 1 ? (s(), o("div", k_, [
            c[1] || (c[1] = e("i", { class: "pi pi-arrow-down" }, null, -1)),
            e("span", null, v((l.value[_ + 1].value - u.value).toLocaleString("pt-BR")), 1)
          ])) : h("", !0)
        ]))), 128))
      ])) : (s(), o("div", f_, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-chart-bar" }, null, -1),
        N(" Sem dados ", -1)
      ])]))
    ]));
  }
}), lC = /* @__PURE__ */ A(w_, [["__scopeId", "data-v-2ff82e24"]]), T_ = { class: "trx-line-chart" }, C_ = ["viewBox", "height"], S_ = ["x1", "y1", "x2", "y2"], I_ = ["x", "y"], V_ = ["x", "y"], B_ = { key: 0 }, P_ = ["id"], A_ = ["stop-color"], M_ = ["stop-color"], L_ = ["d", "fill"], z_ = ["d", "stroke"], D_ = ["cx", "cy", "fill"], E_ = {
  key: 0,
  class: "trx-line-chart__legend"
}, _t = 600, R_ = /* @__PURE__ */ g({
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
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa"], r = t, i = { top: 16, right: 16, bottom: 32, left: 40 }, l = S(() => _t - i.left - i.right), n = S(() => r.height - i.top - i.bottom), c = S(() => r.datasets.flatMap((f) => f.data)), u = S(() => Math.min(...c.value, 0)), _ = S(() => Math.max(...c.value, 1));
    function d(f) {
      const T = r.labels.length - 1 || 1;
      return i.left + f / T * l.value;
    }
    function p(f) {
      return i.top + n.value - (f - u.value) / (_.value - u.value) * n.value;
    }
    function m(f, T) {
      if (!f.length) return "";
      const $ = f.map((M, E) => [d(E), p(M)]);
      let C = `M ${$[0][0]} ${$[0][1]}`;
      if (r.smooth)
        for (let M = 1; M < $.length; M++) {
          const E = ($[M - 1][0] + $[M][0]) / 2;
          C += ` C ${E} ${$[M - 1][1]} ${E} ${$[M][1]} ${$[M][0]} ${$[M][1]}`;
        }
      else
        $.slice(1).forEach(([M, E]) => {
          C += ` L ${M} ${E}`;
        });
      if (T) {
        const M = $[$.length - 1][0], E = i.top + n.value;
        C += ` L ${M} ${E} L ${$[0][0]} ${E} Z`;
      }
      return C;
    }
    const x = S(() => Array.from({ length: 5 }, (T, $) => {
      const C = u.value + $ / 4 * (_.value - u.value);
      return { v: Math.round(C), y: p(C) };
    }));
    return (f, T) => (s(), o("div", T_, [
      (s(), o("svg", {
        viewBox: `0 0 ${_t} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        t.showGrid ? (s(!0), o(V, { key: 0 }, b(x.value, ($) => (s(), o("line", {
          key: $.v,
          x1: i.left,
          y1: $.y,
          x2: i.left + l.value,
          y2: $.y,
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, S_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: i.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, I_))), 128)),
        (s(!0), o(V, null, b(t.labels, ($, C) => (s(), o("text", {
          key: "x" + C,
          x: d(C),
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($), 9, V_))), 128)),
        (s(!0), o(V, null, b(t.datasets, ($, C) => (s(), o(V, { key: C }, [
          t.filled ? (s(), o("defs", B_, [
            e("linearGradient", {
              id: `fill-${C}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              e("stop", {
                offset: "0%",
                "stop-color": $.color ?? a[C % a.length],
                "stop-opacity": "0.25"
              }, null, 8, A_),
              e("stop", {
                offset: "100%",
                "stop-color": $.color ?? a[C % a.length],
                "stop-opacity": "0.02"
              }, null, 8, M_)
            ], 8, P_)
          ])) : h("", !0),
          t.filled ? (s(), o("path", {
            key: 1,
            d: m($.data, !0),
            fill: `url(#fill-${C})`,
            stroke: "none"
          }, null, 8, L_)) : h("", !0),
          e("path", {
            d: m($.data, !1),
            stroke: $.color ?? a[C % a.length],
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, z_),
          t.showDots ? (s(!0), o(V, { key: 2 }, b($.data, (M, E) => (s(), o("circle", {
            key: E,
            cx: d(E),
            cy: p(M),
            r: "3",
            fill: $.color ?? a[C % a.length]
          }, null, 8, D_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, C_)),
      t.datasets.length > 1 ? (s(), o("div", E_, [
        (s(!0), o(V, null, b(t.datasets, ($, C) => (s(), o("div", {
          key: C,
          class: "trx-line-chart__legend-item"
        }, [
          e("span", {
            class: "trx-line-chart__legend-dot",
            style: R({ background: $.color ?? a[C % a.length] })
          }, null, 4),
          e("span", null, v($.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), nC = /* @__PURE__ */ A(R_, [["__scopeId", "data-v-fe35e9f6"]]), N_ = { class: "trx-bar-chart" }, q_ = ["viewBox", "height"], F_ = ["x1", "y1", "x2", "y2"], O_ = ["x", "y"], j_ = ["x", "y"], H_ = ["x", "y", "width", "height", "fill"], U_ = ["x", "y", "width", "height", "fill"], W_ = ["x", "y", "fill"], G_ = {
  key: 0,
  class: "trx-bar-chart__legend"
}, pt = 600, K_ = /* @__PURE__ */ g({
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
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa"], r = t, i = { top: 20, right: 16, bottom: 36, left: 44 }, l = S(() => pt - i.left - i.right), n = S(() => r.height - i.top - i.bottom), c = S(() => r.stacked ? Math.max(...r.labels.map((T, $) => r.datasets.reduce((C, M) => C + (M.data[$] ?? 0), 0)), 1) : Math.max(...r.datasets.flatMap((T) => T.data), 1)), u = S(() => l.value / (r.labels.length || 1)), _ = S(
      () => r.stacked ? u.value * 0.6 : u.value * 0.8 / (r.datasets.length || 1)
    );
    function d(T, $) {
      const C = i.left + T * u.value;
      return r.stacked ? C + u.value * 0.2 : C + u.value * 0.1 + $ * _.value;
    }
    function p(T, $ = 0) {
      const C = T / c.value * n.value;
      return i.top + n.value - C - $ / c.value * n.value;
    }
    function m(T) {
      return T / c.value * n.value;
    }
    const x = S(
      () => Array.from({ length: 5 }, (T, $) => {
        const C = Math.round($ / 4 * c.value), M = i.top + n.value - $ / 4 * n.value;
        return { v: C, y: M };
      })
    ), f = S(
      () => r.labels.map((T, $) => {
        let C = 0;
        return r.datasets.map((M, E) => {
          const F = M.data[$] ?? 0, q = { v: F, offset: C, di: E };
          return C += F, q;
        });
      })
    );
    return (T, $) => (s(), o("div", N_, [
      (s(), o("svg", {
        viewBox: `0 0 ${pt} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        t.showGrid ? (s(!0), o(V, { key: 0 }, b(x.value, (C) => (s(), o("line", {
          key: C.v,
          x1: i.left,
          y1: C.y,
          x2: i.left + l.value,
          y2: C.y,
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, F_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, (C) => (s(), o("text", {
          key: "yl" + C.v,
          x: i.left - 6,
          y: C.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C.v), 9, O_))), 128)),
        (s(!0), o(V, null, b(t.labels, (C, M) => (s(), o("text", {
          key: "xl" + M,
          x: i.left + M * u.value + u.value / 2,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C), 9, j_))), 128)),
        t.stacked ? (s(!0), o(V, { key: 1 }, b(f.value, (C, M) => (s(), o(V, { key: M }, [
          (s(!0), o(V, null, b(C, (E) => (s(), o("rect", {
            key: E.di,
            x: d(M, 0),
            y: p(E.v, E.offset),
            width: _.value,
            height: m(E.v),
            fill: t.datasets[E.di].color ?? a[E.di % a.length],
            rx: "2"
          }, null, 8, H_))), 128))
        ], 64))), 128)) : (s(!0), o(V, { key: 2 }, b(t.datasets, (C, M) => (s(), o(V, { key: M }, [
          (s(!0), o(V, null, b(C.data, (E, F) => (s(), o("rect", {
            key: F,
            x: d(F, M),
            y: p(E),
            width: _.value,
            height: m(E),
            fill: C.color ?? a[M % a.length],
            rx: "2"
          }, null, 8, U_))), 128)),
          t.showValues ? (s(!0), o(V, { key: 0 }, b(C.data, (E, F) => (s(), o("text", {
            key: "val" + F,
            x: d(F, M) + _.value / 2,
            y: p(E) - 3,
            "text-anchor": "middle",
            "font-size": "9",
            fill: C.color ?? a[M % a.length]
          }, v(E), 9, W_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, q_)),
      t.datasets.length > 1 ? (s(), o("div", G_, [
        (s(!0), o(V, null, b(t.datasets, (C, M) => (s(), o("div", {
          key: M,
          class: "trx-bar-chart__legend-item"
        }, [
          e("span", {
            class: "trx-bar-chart__legend-dot",
            style: R({ background: C.color ?? a[M % a.length] })
          }, null, 4),
          N(" " + v(C.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), oC = /* @__PURE__ */ A(K_, [["__scopeId", "data-v-cad2549b"]]), Y_ = { class: "trx-donut" }, J_ = { class: "trx-donut__chart" }, X_ = ["width", "height", "viewBox"], Q_ = ["cx", "cy", "r", "stroke-width"], Z_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], tp = ["x", "y"], ep = ["x", "y"], sp = {
  key: 0,
  class: "trx-donut__legend"
}, ap = { class: "trx-donut__legend-label" }, lp = { class: "trx-donut__legend-pct" }, np = /* @__PURE__ */ g({
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
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa", "#facc15"], r = t, i = S(() => r.size / 2), l = S(() => r.size / 2), n = S(() => (r.size - r.thickness) / 2), c = S(() => 2 * Math.PI * n.value), u = S(() => r.slices.reduce((d, p) => d + p.value, 0) || 1), _ = S(() => {
      let d = 0;
      return r.slices.map((p, m) => {
        const x = p.value / u.value, f = x * c.value, T = c.value - f, $ = { ...p, dash: f, gap: T, offset: d, color: p.color ?? a[m % a.length], pct: Math.round(x * 100) };
        return d += f, $;
      });
    });
    return (d, p) => (s(), o("div", Y_, [
      e("div", J_, [
        (s(), o("svg", {
          width: t.size,
          height: t.size,
          viewBox: `0 0 ${t.size} ${t.size}`
        }, [
          e("circle", {
            cx: i.value,
            cy: l.value,
            r: n.value,
            fill: "none",
            stroke: "var(--trx-bg-secondary)",
            "stroke-width": t.thickness
          }, null, 8, Q_),
          (s(!0), o(V, null, b(_.value, (m, x) => (s(), o("circle", {
            key: x,
            cx: i.value,
            cy: l.value,
            r: n.value,
            fill: "none",
            stroke: m.color,
            "stroke-width": t.thickness,
            "stroke-dasharray": `${m.dash} ${m.gap}`,
            "stroke-dashoffset": -(m.offset - c.value / 4),
            "stroke-linecap": "butt",
            style: R(t.animated ? { transition: "stroke-dasharray 0.6s ease" } : {})
          }, null, 12, Z_))), 128)),
          e("text", {
            x: i.value,
            y: l.value - (t.sublabel ? 8 : 4),
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            fill: "var(--trx-text-primary)"
          }, v(t.label ?? u.value.toLocaleString("pt-BR")), 9, tp),
          t.sublabel ? (s(), o("text", {
            key: 0,
            x: i.value,
            y: l.value + 14,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v(t.sublabel), 9, ep)) : h("", !0)
        ], 8, X_))
      ]),
      t.showLegend ? (s(), o("div", sp, [
        (s(!0), o(V, null, b(_.value, (m, x) => (s(), o("div", {
          key: x,
          class: "trx-donut__legend-item"
        }, [
          e("span", {
            class: "trx-donut__legend-dot",
            style: R({ background: m.color })
          }, null, 4),
          e("span", ap, v(m.label), 1),
          e("span", lp, v(m.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), rC = /* @__PURE__ */ A(np, [["__scopeId", "data-v-962cda3e"]]), op = ["value", "placeholder", "disabled"], rp = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => r.modelValue === null || r.modelValue === void 0 ? "" : new Intl.NumberFormat(r.locale, {
      style: "currency",
      currency: r.currency
    }).format(r.modelValue));
    function n(_) {
      const d = _.target.value.replace(/[^\d,.-]/g, "").replace(",", "."), p = parseFloat(d), m = isNaN(p) ? null : p;
      i("update:modelValue", m), i("change", m), _.target.value = l.value;
    }
    function c(_) {
      const d = _.target, p = r.modelValue !== null && r.modelValue !== void 0 ? String(r.modelValue).replace(".", ",") : "";
      d.value = p, d.select();
    }
    function u(_) {
      _.target.value = l.value;
    }
    return (_, d) => (s(), o("div", {
      class: w(["trx-currency", { "trx-currency--invalid": t.invalid, "trx-currency--disabled": t.disabled }])
    }, [
      e("input", {
        class: "trx-currency__input",
        type: "text",
        inputmode: "decimal",
        value: l.value,
        placeholder: t.placeholder,
        disabled: t.disabled,
        onFocus: c,
        onBlur: u,
        onInput: n
      }, null, 40, op)
    ], 2));
  }
}), iC = /* @__PURE__ */ A(rp, [["__scopeId", "data-v-4e40eeca"]]), ip = ["disabled"], cp = { class: "trx-color-picker__hex" }, up = {
  key: 0,
  class: "trx-color-picker__panel"
}, dp = { class: "trx-color-picker__presets" }, _p = ["title", "onClick"], pp = { class: "trx-color-picker__custom" }, vp = ["value"], mp = [
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
], fp = /* @__PURE__ */ g({
  __name: "TrxColorPicker",
  props: {
    modelValue: { default: "#10b981" },
    presets: { default: () => mp },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1);
    function l(u) {
      r("update:modelValue", u), i.value = !1;
    }
    function n(u) {
      r("update:modelValue", u.target.value);
    }
    function c(u) {
      const _ = document.querySelector(".trx-color-picker");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", {
      class: w(["trx-color-picker", { "trx-color-picker--disabled": t.disabled }])
    }, [
      e("button", {
        class: "trx-color-picker__trigger",
        disabled: t.disabled,
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        e("span", {
          class: "trx-color-picker__swatch",
          style: R({ background: t.modelValue })
        }, null, 4),
        e("span", cp, v(t.modelValue), 1),
        _[2] || (_[2] = e("i", { class: "pi pi-chevron-down trx-color-picker__arrow" }, null, -1))
      ], 8, ip),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", up, [
            e("div", dp, [
              (s(!0), o(V, null, b(t.presets, (d) => (s(), o("button", {
                key: d,
                class: w(["trx-color-picker__preset", { "trx-color-picker__preset--active": t.modelValue === d }]),
                style: R({ background: d, borderColor: d === "#ffffff" ? "#e5e7eb" : d }),
                title: d,
                onClick: (p) => l(d)
              }, null, 14, _p))), 128))
            ]),
            e("div", pp, [
              _[3] || (_[3] = e("span", null, "Personalizado:", -1)),
              e("input", {
                type: "color",
                class: "trx-color-picker__native",
                value: t.modelValue,
                onInput: n,
                onChange: _[1] || (_[1] = (d) => i.value = !1)
              }, null, 40, vp)
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), cC = /* @__PURE__ */ A(fp, [["__scopeId", "data-v-7ca62925"]]), xp = ["disabled", "onClick"], hp = ["placeholder", "disabled"], $p = {
  key: 0,
  class: "trx-tag-input__suggestions"
}, gp = ["onMousedown"], bp = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = D("");
    function n(p) {
      const m = p.trim();
      if (!m || r.modelValue.includes(m)) {
        l.value = "";
        return;
      }
      r.max && r.modelValue.length >= r.max || (i("update:modelValue", [...r.modelValue, m]), l.value = "");
    }
    function c(p) {
      i("update:modelValue", r.modelValue.filter((m) => m !== p));
    }
    function u(p) {
      (p.key === "Enter" || p.key === ",") && l.value.trim() && (p.preventDefault(), n(l.value)), p.key === "Backspace" && !l.value && r.modelValue.length && c(r.modelValue[r.modelValue.length - 1]);
    }
    const _ = D([]);
    function d() {
      var p;
      if (!((p = r.suggestions) != null && p.length) || !l.value) {
        _.value = [];
        return;
      }
      _.value = r.suggestions.filter(
        (m) => m.toLowerCase().includes(l.value.toLowerCase()) && !r.modelValue.includes(m)
      ).slice(0, 6);
    }
    return (p, m) => (s(), o(V, null, [
      e("div", {
        class: w(["trx-tag-input", { "trx-tag-input--invalid": t.invalid, "trx-tag-input--disabled": t.disabled }]),
        onClick: m[2] || (m[2] = (x) => {
          var f;
          return (f = p.$el.querySelector("input")) == null ? void 0 : f.focus();
        })
      }, [
        (s(!0), o(V, null, b(t.modelValue, (x) => (s(), o("span", {
          key: x,
          class: "trx-tag-input__tag"
        }, [
          N(v(x) + " ", 1),
          e("button", {
            class: "trx-tag-input__remove",
            disabled: t.disabled,
            onClick: H((f) => c(x), ["stop"])
          }, [...m[3] || (m[3] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])], 8, xp)
        ]))), 128)),
        !t.max || t.modelValue.length < t.max ? Y((s(), o("input", {
          key: 0,
          class: "trx-tag-input__field",
          placeholder: t.modelValue.length ? "" : t.placeholder,
          disabled: t.disabled,
          "onUpdate:modelValue": m[0] || (m[0] = (x) => l.value = x),
          onKeydown: u,
          onInput: d,
          onBlur: m[1] || (m[1] = (x) => {
            l.value && n(l.value), _.value = [];
          })
        }, null, 40, hp)), [
          [J, l.value]
        ]) : h("", !0)
      ], 2),
      _.value.length ? (s(), o("div", $p, [
        (s(!0), o(V, null, b(_.value, (x) => (s(), o("button", {
          key: x,
          class: "trx-tag-input__suggestion",
          onMousedown: H((f) => n(x), ["prevent"])
        }, v(x), 41, gp))), 128))
      ])) : h("", !0)
    ], 64));
  }
}), uC = /* @__PURE__ */ A(bp, [["__scopeId", "data-v-0a95e840"]]), yp = ["type", "value", "disabled", "onInput", "onKeydown"], kp = /* @__PURE__ */ g({
  __name: "TrxOTPInput",
  props: {
    modelValue: { default: "" },
    length: { default: 6 },
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    masked: { type: Boolean }
  },
  emits: ["update:modelValue", "complete"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D([]);
    function n(d) {
      return (r.modelValue ?? "")[d] ?? "";
    }
    function c(d, p) {
      var T;
      const m = d.target.value.replace(/\D/g, "").slice(-1), x = (r.modelValue ?? "").split("");
      x[p] = m;
      const f = x.join("").slice(0, r.length);
      i("update:modelValue", f), m && p < r.length - 1 && ((T = l.value[p + 1]) == null || T.focus()), f.length === r.length && i("complete", f);
    }
    function u(d, p) {
      var m, x, f;
      if (d.key === "Backspace") {
        const T = (r.modelValue ?? "").split("");
        !T[p] && p > 0 ? ((m = l.value[p - 1]) == null || m.focus(), T[p - 1] = "") : T[p] = "", i("update:modelValue", T.join(""));
      }
      d.key === "ArrowLeft" && p > 0 && ((x = l.value[p - 1]) == null || x.focus()), d.key === "ArrowRight" && p < r.length - 1 && ((f = l.value[p + 1]) == null || f.focus());
    }
    function _(d) {
      var m, x;
      d.preventDefault();
      const p = ((m = d.clipboardData) == null ? void 0 : m.getData("text").replace(/\D/g, "").slice(0, r.length)) ?? "";
      i("update:modelValue", p), p.length === r.length && i("complete", p), (x = l.value[Math.min(p.length, r.length - 1)]) == null || x.focus();
    }
    return (d, p) => (s(), o("div", {
      class: w(["trx-otp", { "trx-otp--invalid": t.invalid }])
    }, [
      (s(!0), o(V, null, b(t.length, (m) => (s(), o("input", {
        key: m - 1,
        ref_for: !0,
        ref: (x) => {
          x && (l.value[m - 1] = x);
        },
        class: w(["trx-otp__cell", { "trx-otp__cell--filled": !!n(m - 1) }]),
        type: t.masked ? "password" : "text",
        inputmode: "numeric",
        maxlength: "1",
        value: n(m - 1),
        disabled: t.disabled,
        onInput: (x) => c(x, m - 1),
        onKeydown: (x) => u(x, m - 1),
        onPaste: _,
        onFocus: p[0] || (p[0] = (x) => x.target.select())
      }, null, 42, yp))), 128))
    ], 2));
  }
}), dC = /* @__PURE__ */ A(kp, [["__scopeId", "data-v-a732ce3a"]]), wp = {
  key: 0,
  class: "trx-sig-pad__placeholder"
}, Tp = { class: "trx-sig-pad__footer" }, Cp = ["disabled"], Sp = /* @__PURE__ */ g({
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
  setup(t, { expose: a, emit: r }) {
    const i = t, l = r, n = ot("canvas"), c = D(!1), u = D(!0);
    function _() {
      var $;
      return (($ = n.value) == null ? void 0 : $.getContext("2d")) ?? null;
    }
    function d($) {
      const C = n.value.getBoundingClientRect(), M = "touches" in $ ? $.touches[0] : $;
      return { x: M.clientX - C.left, y: M.clientY - C.top };
    }
    function p($) {
      if (i.disabled) return;
      $.preventDefault(), c.value = !0;
      const C = _();
      if (!C) return;
      const { x: M, y: E } = d($);
      C.beginPath(), C.moveTo(M, E);
    }
    function m($) {
      if (!c.value || i.disabled) return;
      $.preventDefault();
      const C = _();
      if (!C) return;
      const { x: M, y: E } = d($);
      C.lineTo(M, E), C.strokeStyle = i.lineColor, C.lineWidth = i.lineWidth, C.lineCap = "round", C.lineJoin = "round", C.stroke(), u.value = !1;
    }
    function x() {
      var $;
      c.value && (c.value = !1, l("change", u.value ? null : (($ = n.value) == null ? void 0 : $.toDataURL()) ?? null));
    }
    function f() {
      const $ = _();
      !$ || !n.value || ($.clearRect(0, 0, n.value.width, n.value.height), u.value = !0, l("clear"), l("change", null));
    }
    function T() {
      var $;
      return u.value ? null : (($ = n.value) == null ? void 0 : $.toDataURL()) ?? null;
    }
    return W(() => {
      const $ = _();
      if (!$ || !n.value) return;
      const C = window.devicePixelRatio || 1;
      n.value.width = i.width * C, n.value.height = i.height * C, $.scale(C, C);
    }), a({ clear: f, toDataURL: T }), ($, C) => (s(), o("div", {
      class: w(["trx-sig-pad", { "trx-sig-pad--disabled": t.disabled }])
    }, [
      e("div", {
        class: "trx-sig-pad__canvas-wrap",
        style: R({ width: `${t.width}px`, height: `${t.height}px` })
      }, [
        e("canvas", {
          ref_key: "canvas",
          ref: n,
          class: "trx-sig-pad__canvas",
          style: R({ width: `${t.width}px`, height: `${t.height}px` }),
          onMousedown: p,
          onMousemove: m,
          onMouseup: x,
          onMouseleave: x,
          onTouchstart: p,
          onTouchmove: m,
          onTouchend: x
        }, null, 36),
        u.value ? (s(), o("span", wp, v(t.placeholder), 1)) : h("", !0)
      ], 4),
      e("div", Tp, [
        C[1] || (C[1] = e("span", { class: "trx-sig-pad__line-label" }, "Assinatura", -1)),
        e("button", {
          class: "trx-sig-pad__clear",
          disabled: u.value || t.disabled,
          onClick: f
        }, [...C[0] || (C[0] = [
          e("i", { class: "pi pi-trash" }, null, -1),
          N(" Limpar ", -1)
        ])], 8, Cp)
      ])
    ], 2));
  }
}), _C = /* @__PURE__ */ A(Sp, [["__scopeId", "data-v-49c2b653"]]), Ip = { class: "trx-md-editor__bar" }, Vp = { class: "trx-md-editor__toolbar" }, Bp = ["title", "disabled", "onClick"], Pp = { class: "trx-md-editor__modes" }, Ap = ["onClick"], Mp = ["value", "placeholder", "disabled"], Lp = ["innerHTML"], zp = /* @__PURE__ */ g({
  __name: "TrxMarkdownEditor",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Escreva em Markdown..." },
    minHeight: { default: "200px" },
    maxHeight: { default: "600px" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D("write"), n = S(() => r.modelValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm, "<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm, "<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm, "<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>").replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>').replace(/\n/g, "<br>"));
    function c(_, d = "") {
      const p = document.querySelector(".trx-md-editor__textarea");
      if (!p) return;
      const m = p.selectionStart, x = p.selectionEnd, f = p.value.slice(m, x), T = p.value.slice(0, m) + _ + f + d + p.value.slice(x);
      i("update:modelValue", T), setTimeout(() => {
        p.focus(), p.setSelectionRange(m + _.length, m + _.length + f.length);
      }, 0);
    }
    const u = [
      { icon: "pi pi-bold", title: "Negrito", action: () => c("**", "**") },
      { icon: "pi pi-italic", title: "Itálico", action: () => c("*", "*") },
      { icon: "pi pi-code", title: "Código", action: () => c("`", "`") },
      { icon: "pi pi-list", title: "Lista", action: () => c("- ") },
      { icon: "pi pi-link", title: "Link", action: () => c("[texto](", ")") }
    ];
    return (_, d) => (s(), o("div", {
      class: w(["trx-md-editor", { "trx-md-editor--disabled": t.disabled }])
    }, [
      e("div", Ip, [
        e("div", Vp, [
          (s(), o(V, null, b(u, (p) => e("button", {
            key: p.title,
            class: "trx-md-editor__tool-btn",
            title: p.title,
            disabled: t.disabled,
            onClick: H((m) => p.action(), ["prevent"])
          }, [
            e("i", {
              class: w(p.icon)
            }, null, 2)
          ], 8, Bp)), 64))
        ]),
        e("div", Pp, [
          (s(), o(V, null, b(["write", "split", "preview"], (p) => e("button", {
            key: p,
            class: w(["trx-md-editor__mode-btn", { active: l.value === p }]),
            onClick: (m) => l.value = p
          }, v(p === "write" ? "Editar" : p === "preview" ? "Preview" : "Split"), 11, Ap)), 64))
        ])
      ]),
      e("div", {
        class: w(["trx-md-editor__body", `trx-md-editor__body--${l.value}`])
      }, [
        l.value !== "preview" ? (s(), o("textarea", {
          key: 0,
          class: "trx-md-editor__textarea",
          value: t.modelValue,
          placeholder: t.placeholder,
          disabled: t.disabled,
          style: R({ minHeight: t.minHeight, maxHeight: t.maxHeight }),
          onInput: d[0] || (d[0] = (p) => i("update:modelValue", p.target.value))
        }, null, 44, Mp)) : h("", !0),
        l.value !== "write" ? (s(), o("div", {
          key: 1,
          class: "trx-md-editor__preview",
          style: R({ minHeight: t.minHeight }),
          innerHTML: n.value
        }, null, 12, Lp)) : h("", !0)
      ], 2)
    ], 2));
  }
}), pC = /* @__PURE__ */ A(zp, [["__scopeId", "data-v-c4b3f5b2"]]), Dp = { class: "trx-json-editor__bar" }, Ep = { class: "trx-json-editor__actions" }, Rp = ["disabled"], Np = ["disabled"], qp = { class: "trx-json-editor__body" }, Fp = { class: "trx-json-editor__lines" }, Op = ["value", "disabled"], jp = {
  key: 0,
  class: "trx-json-editor__error"
}, Hp = /* @__PURE__ */ g({
  __name: "TrxJsonEditor",
  props: {
    modelValue: { default: () => ({}) },
    minHeight: { default: "180px" },
    disabled: { type: Boolean },
    validateOnChange: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "error"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(JSON.stringify(r.modelValue, null, 2)), n = D("");
    Z(() => r.modelValue, (m) => {
      try {
        const x = JSON.parse(l.value);
        JSON.stringify(x) !== JSON.stringify(m) && (l.value = JSON.stringify(m, null, 2));
      } catch {
        l.value = JSON.stringify(m, null, 2);
      }
    }, { deep: !0 });
    function c(m) {
      const x = m.target.value;
      l.value = x, r.validateOnChange && u(x);
    }
    function u(m) {
      try {
        const x = JSON.parse(m);
        n.value = "", i("update:modelValue", x);
      } catch (x) {
        const f = x.message;
        n.value = f, i("error", f);
      }
    }
    function _() {
      try {
        const m = JSON.parse(l.value);
        l.value = JSON.stringify(m, null, 2), n.value = "";
      } catch {
      }
    }
    function d() {
      try {
        const m = JSON.parse(l.value);
        l.value = JSON.stringify(m), n.value = "";
      } catch {
      }
    }
    const p = S(() => l.value.split(`
`).length);
    return (m, x) => (s(), o("div", {
      class: w(["trx-json-editor", { "trx-json-editor--error": n.value, "trx-json-editor--disabled": t.disabled }])
    }, [
      e("div", Dp, [
        x[2] || (x[2] = e("span", { class: "trx-json-editor__lang" }, "JSON", -1)),
        e("div", Ep, [
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: _
          }, [...x[0] || (x[0] = [
            e("i", { class: "pi pi-align-left" }, null, -1),
            N(" Formatar ", -1)
          ])], 8, Rp),
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: d
          }, [...x[1] || (x[1] = [
            e("i", { class: "pi pi-minus" }, null, -1),
            N(" Minificar ", -1)
          ])], 8, Np)
        ])
      ]),
      e("div", qp, [
        e("div", Fp, [
          (s(!0), o(V, null, b(p.value, (f) => (s(), o("div", {
            key: f,
            class: "trx-json-editor__line-num"
          }, v(f), 1))), 128))
        ]),
        e("textarea", {
          class: "trx-json-editor__textarea",
          value: l.value,
          disabled: t.disabled,
          style: R({ minHeight: t.minHeight }),
          spellcheck: "false",
          autocomplete: "off",
          onInput: c
        }, null, 44, Op)
      ]),
      n.value ? (s(), o("div", jp, [
        x[3] || (x[3] = e("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
        N(" " + v(n.value), 1)
      ])) : h("", !0)
    ], 2));
  }
}), vC = /* @__PURE__ */ A(Hp, [["__scopeId", "data-v-04c442f5"]]), Up = ["title"], Wp = { class: "trx-sidebar-nav__items" }, Gp = {
  key: 0,
  class: "trx-sidebar-nav__sep"
}, Kp = { key: 1 }, Yp = ["title", "onClick"], Jp = {
  key: 1,
  class: "trx-sidebar-nav__label"
}, Xp = {
  key: 2,
  class: "trx-sidebar-nav__badge"
}, Qp = {
  key: 0,
  class: "trx-sidebar-nav__children"
}, Zp = ["onClick"], tv = {
  key: 1,
  class: "trx-sidebar-nav__badge"
}, ev = /* @__PURE__ */ g({
  __name: "TrxSidebarNav",
  props: {
    items: { default: () => [] },
    modelValue: {},
    collapsed: { type: Boolean },
    width: { default: "240px" },
    collapsedWidth: { default: "56px" }
  },
  emits: ["update:modelValue", "update:collapsed", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(/* @__PURE__ */ new Set());
    function n(_) {
      l.value.has(_) ? l.value.delete(_) : l.value.add(_);
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
      return r.modelValue === _.key ? !0 : ((d = _.children) == null ? void 0 : d.some((p) => p.key === r.modelValue)) ?? !1;
    }
    return (_, d) => (s(), o("nav", {
      class: w(["trx-sidebar-nav", { "trx-sidebar-nav--collapsed": t.collapsed }]),
      style: R({ width: t.collapsed ? t.collapsedWidth : t.width })
    }, [
      e("button", {
        class: "trx-sidebar-nav__toggle",
        onClick: d[0] || (d[0] = (p) => i("update:collapsed", !t.collapsed)),
        title: t.collapsed ? "Expandir" : "Recolher"
      }, [
        e("i", {
          class: w(t.collapsed ? "pi pi-angle-right" : "pi pi-angle-left")
        }, null, 2)
      ], 8, Up),
      e("div", Wp, [
        (s(!0), o(V, null, b(t.items, (p) => {
          var m, x;
          return s(), o(V, {
            key: p.key
          }, [
            p.separator ? (s(), o("hr", Gp)) : (s(), o("div", Kp, [
              e("button", {
                class: w(["trx-sidebar-nav__item", {
                  "trx-sidebar-nav__item--active": u(p),
                  "trx-sidebar-nav__item--open": l.value.has(p.key)
                }]),
                title: t.collapsed ? p.label : void 0,
                onClick: (f) => c(p)
              }, [
                p.icon ? (s(), o("i", {
                  key: 0,
                  class: w([p.icon, "trx-sidebar-nav__icon"])
                }, null, 2)) : h("", !0),
                t.collapsed ? h("", !0) : (s(), o("span", Jp, v(p.label), 1)),
                !t.collapsed && p.badge ? (s(), o("span", Xp, v(p.badge), 1)) : h("", !0),
                !t.collapsed && ((m = p.children) != null && m.length) ? (s(), o("i", {
                  key: 3,
                  class: w(["pi pi-chevron-down trx-sidebar-nav__arrow", { "trx-sidebar-nav__arrow--open": l.value.has(p.key) }])
                }, null, 2)) : h("", !0)
              ], 10, Yp),
              !t.collapsed && ((x = p.children) != null && x.length) && l.value.has(p.key) ? (s(), o("div", Qp, [
                (s(!0), o(V, null, b(p.children, (f) => (s(), o("button", {
                  key: f.key,
                  class: w(["trx-sidebar-nav__child", { "trx-sidebar-nav__child--active": t.modelValue === f.key }]),
                  onClick: (T) => c(f)
                }, [
                  f.icon ? (s(), o("i", {
                    key: 0,
                    class: w(f.icon)
                  }, null, 2)) : h("", !0),
                  e("span", null, v(f.label), 1),
                  f.badge ? (s(), o("span", tv, v(f.badge), 1)) : h("", !0)
                ], 10, Zp))), 128))
              ])) : h("", !0)
            ]))
          ], 64);
        }), 128))
      ])
    ], 6));
  }
}), mC = /* @__PURE__ */ A(ev, [["__scopeId", "data-v-f2db473b"]]), sv = { class: "trx-palette__search" }, av = ["placeholder"], lv = { class: "trx-palette__results" }, nv = { class: "trx-palette__group-label" }, ov = ["onClick", "onMouseenter"], rv = { class: "trx-palette__item-info" }, iv = { class: "trx-palette__item-label" }, cv = {
  key: 0,
  class: "trx-palette__item-desc"
}, uv = {
  key: 1,
  class: "trx-palette__shortcut"
}, dv = {
  key: 1,
  class: "trx-palette__empty"
}, _v = /* @__PURE__ */ g({
  __name: "TrxCommandPalette",
  props: {
    commands: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "Pesquisar comandos..." }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D(0), c = D(), u = S(() => {
      if (!l.value) return r.commands;
      const f = l.value.toLowerCase();
      return r.commands.filter(
        (T) => {
          var $;
          return T.label.toLowerCase().includes(f) || (($ = T.description) == null ? void 0 : $.toLowerCase().includes(f));
        }
      );
    }), _ = S(() => {
      const f = {};
      for (const T of u.value) {
        const $ = T.group ?? "Geral";
        f[$] || (f[$] = []), f[$].push(T);
      }
      return f;
    }), d = S(() => u.value);
    Z(() => r.modelValue, async (f) => {
      var T;
      f && (l.value = "", n.value = 0, await nt(), (T = c.value) == null || T.focus());
    });
    function p() {
      i("update:modelValue", !1);
    }
    function m(f) {
      f.action(), p();
    }
    function x(f) {
      if (f.key === "Escape") {
        p();
        return;
      }
      f.key === "ArrowDown" && (f.preventDefault(), n.value = Math.min(n.value + 1, d.value.length - 1)), f.key === "ArrowUp" && (f.preventDefault(), n.value = Math.max(n.value - 1, 0)), f.key === "Enter" && d.value[n.value] && m(d.value[n.value]);
    }
    return (f, T) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-palette-fade" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", {
            key: 0,
            class: "trx-palette-backdrop",
            onClick: H(p, ["self"])
          }, [
            e("div", {
              class: "trx-palette",
              onKeydown: x
            }, [
              e("div", sv, [
                T[2] || (T[2] = e("i", { class: "pi pi-search trx-palette__search-icon" }, null, -1)),
                Y(e("input", {
                  ref_key: "searchInput",
                  ref: c,
                  class: "trx-palette__input",
                  placeholder: t.placeholder,
                  "onUpdate:modelValue": T[0] || (T[0] = ($) => l.value = $),
                  onInput: T[1] || (T[1] = ($) => n.value = 0)
                }, null, 40, av), [
                  [J, l.value]
                ]),
                e("kbd", {
                  class: "trx-palette__esc",
                  onClick: p
                }, "Esc")
              ]),
              e("div", lv, [
                u.value.length ? (s(!0), o(V, { key: 0 }, b(_.value, ($, C) => (s(), o(V, { key: C }, [
                  e("div", nv, v(C), 1),
                  (s(!0), o(V, null, b($, (M) => (s(), o("button", {
                    key: M.id,
                    class: w(["trx-palette__item", { "trx-palette__item--active": d.value.indexOf(M) === n.value }]),
                    onClick: (E) => m(M),
                    onMouseenter: (E) => n.value = d.value.indexOf(M)
                  }, [
                    M.icon ? (s(), o("i", {
                      key: 0,
                      class: w([M.icon, "trx-palette__item-icon"])
                    }, null, 2)) : h("", !0),
                    e("div", rv, [
                      e("span", iv, v(M.label), 1),
                      M.description ? (s(), o("span", cv, v(M.description), 1)) : h("", !0)
                    ]),
                    M.shortcut ? (s(), o("kbd", uv, v(M.shortcut), 1)) : h("", !0)
                  ], 42, ov))), 128))
                ], 64))), 128)) : (s(), o("div", dv, [...T[3] || (T[3] = [
                  e("i", { class: "pi pi-search" }, null, -1),
                  e("span", null, "Nenhum comando encontrado", -1)
                ])]))
              ])
            ], 32)
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), fC = /* @__PURE__ */ A(_v, [["__scopeId", "data-v-b994f6f6"]]), pv = { class: "trx-wizard" }, vv = { class: "trx-wizard__steps" }, mv = ["onClick"], fv = { class: "trx-wizard__step-circle" }, xv = {
  key: 0,
  class: "pi pi-check"
}, hv = { key: 2 }, $v = { class: "trx-wizard__step-info" }, gv = { class: "trx-wizard__step-label" }, bv = {
  key: 0,
  class: "trx-wizard__step-optional"
}, yv = { class: "trx-wizard__content" }, kv = { class: "trx-wizard__footer" }, wv = ["disabled"], Tv = { class: "trx-wizard__counter" }, Cv = ["disabled"], Sv = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Iv = {
  key: 0,
  class: "pi pi-chevron-right"
}, Vv = {
  key: 1,
  class: "pi pi-check"
}, Bv = /* @__PURE__ */ g({
  __name: "TrxWizard",
  props: {
    steps: { default: () => [] },
    modelValue: { default: 0 },
    canGoNext: { type: Boolean, default: !0 },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "next", "prev", "finish"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(/* @__PURE__ */ new Set([0]));
    function n(p) {
      p < 0 || p >= r.steps.length || p > (r.modelValue ?? 0) && !r.canGoNext || (l.value.add(p), i("update:modelValue", p));
    }
    function c() {
      if (!r.canGoNext) return;
      const p = (r.modelValue ?? 0) + 1;
      if (p >= r.steps.length) {
        i("finish");
        return;
      }
      l.value.add(p), i("update:modelValue", p), i("next", p);
    }
    function u() {
      const p = (r.modelValue ?? 0) - 1;
      p < 0 || (i("update:modelValue", p), i("prev", p));
    }
    const _ = S(() => (r.modelValue ?? 0) === 0), d = S(() => (r.modelValue ?? 0) === r.steps.length - 1);
    return (p, m) => (s(), o("div", pv, [
      e("div", vv, [
        (s(!0), o(V, null, b(t.steps, (x, f) => (s(), o(V, {
          key: x.key
        }, [
          e("div", {
            class: w(["trx-wizard__step", {
              "trx-wizard__step--active": f === t.modelValue,
              "trx-wizard__step--completed": f < (t.modelValue ?? 0),
              "trx-wizard__step--visited": l.value.has(f)
            }]),
            onClick: (T) => n(f)
          }, [
            e("div", fv, [
              f < (t.modelValue ?? 0) ? (s(), o("i", xv)) : x.icon ? (s(), o("i", {
                key: 1,
                class: w(x.icon)
              }, null, 2)) : (s(), o("span", hv, v(f + 1), 1))
            ]),
            e("div", $v, [
              e("span", gv, v(x.label), 1),
              x.optional ? (s(), o("span", bv, "Opcional")) : h("", !0)
            ])
          ], 10, mv),
          f < t.steps.length - 1 ? (s(), o("div", {
            key: 0,
            class: w(["trx-wizard__connector", { "trx-wizard__connector--done": f < (t.modelValue ?? 0) }])
          }, null, 2)) : h("", !0)
        ], 64))), 128))
      ]),
      e("div", yv, [
        I(p.$slots, "default", {
          step: t.steps[t.modelValue ?? 0],
          index: t.modelValue ?? 0
        }, void 0, !0)
      ]),
      e("div", kv, [
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--secondary",
          disabled: _.value,
          onClick: u
        }, [...m[0] || (m[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, wv),
        e("span", Tv, v((t.modelValue ?? 0) + 1) + " / " + v(t.steps.length), 1),
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--primary",
          disabled: !t.canGoNext || t.loading,
          onClick: c
        }, [
          t.loading ? (s(), o("i", Sv)) : (s(), o(V, { key: 1 }, [
            N(v(d.value ? "Concluir" : "Próximo") + " ", 1),
            d.value ? (s(), o("i", Vv)) : (s(), o("i", Iv))
          ], 64))
        ], 8, Cv)
      ])
    ]));
  }
}), xC = /* @__PURE__ */ A(Bv, [["__scopeId", "data-v-25e71378"]]), Pv = { class: "trx-onboarding" }, Av = { class: "trx-onboarding__header" }, Mv = { class: "trx-onboarding__title-top" }, Lv = {
  key: 0,
  class: "trx-onboarding__body"
}, zv = {
  key: 0,
  class: "trx-onboarding__image-wrap"
}, Dv = ["src", "alt"], Ev = {
  key: 1,
  class: "trx-onboarding__icon-wrap"
}, Rv = { class: "trx-onboarding__step-title" }, Nv = { class: "trx-onboarding__step-desc" }, qv = { class: "trx-onboarding__dots" }, Fv = ["onClick"], Ov = { class: "trx-onboarding__footer" }, jv = { key: 1 }, Hv = {
  key: 0,
  class: "pi pi-arrow-right"
}, Uv = {
  key: 1,
  class: "pi pi-check"
}, Wv = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => r.modelValue), n = S(() => r.steps[l.value]), c = S(() => l.value >= r.steps.length - 1);
    function u() {
      c.value ? i("finish") : i("update:modelValue", l.value + 1);
    }
    function _() {
      l.value > 0 && i("update:modelValue", l.value - 1);
    }
    function d(p) {
      i("update:modelValue", p);
    }
    return (p, m) => (s(), o("div", Pv, [
      e("div", Av, [
        e("span", Mv, v(t.title), 1),
        t.skippable && !c.value ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__skip",
          onClick: m[0] || (m[0] = (x) => i("skip"))
        }, v(t.skipLabel), 1)) : h("", !0)
      ]),
      n.value ? (s(), o("div", Lv, [
        n.value.image ? (s(), o("div", zv, [
          e("img", {
            src: n.value.image,
            alt: n.value.title,
            class: "trx-onboarding__image"
          }, null, 8, Dv)
        ])) : n.value.icon ? (s(), o("div", Ev, [
          e("i", {
            class: w([n.value.icon, "trx-onboarding__icon"])
          }, null, 2)
        ])) : h("", !0),
        e("h2", Rv, v(n.value.title), 1),
        e("p", Nv, v(n.value.description), 1)
      ])) : h("", !0),
      e("div", qv, [
        (s(!0), o(V, null, b(t.steps, (x, f) => (s(), o("button", {
          key: f,
          class: w(["trx-onboarding__dot", { "trx-onboarding__dot--active": f === l.value, "trx-onboarding__dot--done": f < l.value }]),
          onClick: (T) => d(f)
        }, null, 10, Fv))), 128))
      ]),
      e("div", Ov, [
        l.value > 0 ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__btn trx-onboarding__btn--prev",
          onClick: _
        }, [...m[1] || (m[1] = [
          e("i", { class: "pi pi-arrow-left" }, null, -1),
          N(" Anterior ", -1)
        ])])) : (s(), o("span", jv)),
        e("button", {
          class: "trx-onboarding__btn trx-onboarding__btn--next",
          onClick: u
        }, [
          N(v(c.value ? t.finishLabel : "Próximo") + " ", 1),
          c.value ? (s(), o("i", Uv)) : (s(), o("i", Hv))
        ])
      ])
    ]));
  }
}), hC = /* @__PURE__ */ A(Wv, [["__scopeId", "data-v-4359f9ee"]]), Gv = { class: "trx-kanban" }, Kv = ["onDrop"], Yv = { class: "trx-kanban__col-header" }, Jv = { class: "trx-kanban__col-label" }, Xv = { class: "trx-kanban__col-count" }, Qv = { key: 0 }, Zv = { class: "trx-kanban__cards" }, tm = ["onDragstart", "onClick"], em = { class: "trx-kanban__card-header" }, sm = { class: "trx-kanban__card-title" }, am = ["title"], lm = {
  key: 0,
  class: "trx-kanban__card-desc"
}, nm = {
  key: 1,
  class: "trx-kanban__card-tags"
}, om = {
  key: 2,
  class: "trx-kanban__card-assignee"
}, rm = { class: "trx-kanban__card-avatar" }, im = { class: "trx-kanban__card-assignee-name" }, cm = {
  key: 0,
  class: "trx-kanban__col-empty"
}, um = /* @__PURE__ */ g({
  __name: "TrxKanbanBoard",
  props: {
    columns: { default: () => [] },
    loading: { type: Boolean }
  },
  emits: ["move", "cardClick"],
  setup(t, { emit: a }) {
    const r = a, i = {
      low: "var(--trx-text-secondary)",
      medium: "var(--trx-warning-color)",
      high: "var(--trx-danger-color)"
    };
    let l = null;
    function n(u, _) {
      l = { cardId: u, fromCol: _ };
    }
    function c(u) {
      !l || l.fromCol === u || (r("move", l.cardId, l.fromCol, u), l = null);
    }
    return (u, _) => (s(), o("div", Gv, [
      (s(!0), o(V, null, b(t.columns, (d) => (s(), o("div", {
        key: d.id,
        class: "trx-kanban__col",
        onDragover: _[0] || (_[0] = H(() => {
        }, ["prevent"])),
        onDrop: (p) => c(d.id)
      }, [
        e("div", Yv, [
          e("div", {
            class: "trx-kanban__col-dot",
            style: R({ background: d.color ?? "var(--trx-accent-color)" })
          }, null, 4),
          e("span", Jv, v(d.label), 1),
          e("span", Xv, [
            N(v(d.cards.length), 1),
            d.limit ? (s(), o("span", Qv, "/" + v(d.limit), 1)) : h("", !0)
          ])
        ]),
        e("div", Zv, [
          (s(!0), o(V, null, b(d.cards, (p) => {
            var m;
            return s(), o("div", {
              key: p.id,
              class: "trx-kanban__card",
              draggable: "true",
              onDragstart: (x) => n(p.id, d.id),
              onClick: (x) => r("cardClick", p, d.id)
            }, [
              e("div", em, [
                e("p", sm, v(p.title), 1),
                p.priority ? (s(), o("span", {
                  key: 0,
                  class: "trx-kanban__card-priority",
                  style: R({ color: i[p.priority] }),
                  title: p.priority
                }, "●", 12, am)) : h("", !0)
              ]),
              p.description ? (s(), o("p", lm, v(p.description), 1)) : h("", !0),
              (m = p.tags) != null && m.length ? (s(), o("div", nm, [
                (s(!0), o(V, null, b(p.tags, (x) => (s(), o("span", {
                  key: x,
                  class: "trx-kanban__card-tag"
                }, v(x), 1))), 128))
              ])) : h("", !0),
              p.assignee ? (s(), o("div", om, [
                e("span", rm, v(p.assignee.split(" ").map((x) => x[0]).join("").slice(0, 2).toUpperCase()), 1),
                e("span", im, v(p.assignee), 1)
              ])) : h("", !0)
            ], 40, tm);
          }), 128)),
          d.cards.length ? h("", !0) : (s(), o("div", cm, [..._[1] || (_[1] = [
            e("i", { class: "pi pi-inbox" }, null, -1),
            e("span", null, "Vazio", -1)
          ])]))
        ])
      ], 40, Kv))), 128))
    ]));
  }
}), $C = /* @__PURE__ */ A(um, [["__scopeId", "data-v-9ad32a8a"]]), dm = { class: "trx-calendar" }, _m = { class: "trx-calendar__header" }, pm = { class: "trx-calendar__month" }, vm = { class: "trx-calendar__grid" }, mm = ["onClick"], fm = {
  key: 0,
  class: "trx-calendar__day"
}, xm = {
  key: 1,
  class: "trx-calendar__events"
}, hm = ["title", "onClick"], $m = {
  key: 0,
  class: "trx-calendar__more"
}, gm = /* @__PURE__ */ g({
  __name: "TrxCalendarView",
  props: {
    events: { default: () => [] },
    modelValue: {},
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "eventClick", "dateClick"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = /* @__PURE__ */ new Date(), n = D(l.getFullYear()), c = D(l.getMonth()), u = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], _ = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], d = S(() => new Date(n.value, c.value, 1).getDay()), p = S(() => new Date(n.value, c.value + 1, 0).getDate()), m = S(() => {
      const M = [];
      for (let E = 0; E < d.value; E++) M.push({ day: null, dateStr: "" });
      for (let E = 1; E <= p.value; E++) {
        const F = String(c.value + 1).padStart(2, "0"), q = String(E).padStart(2, "0");
        M.push({ day: E, dateStr: `${n.value}-${F}-${q}` });
      }
      return M;
    }), x = S(() => {
      const M = {};
      for (const E of r.events)
        M[E.date] || (M[E.date] = []), M[E.date].push(E);
      return M;
    }), f = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
    function T() {
      c.value === 0 ? (c.value = 11, n.value--) : c.value--;
    }
    function $() {
      c.value === 11 ? (c.value = 0, n.value++) : c.value++;
    }
    function C(M) {
      i("update:modelValue", M), i("dateClick", M);
    }
    return (M, E) => (s(), o("div", dm, [
      e("div", _m, [
        e("button", {
          class: "trx-calendar__nav",
          onClick: T
        }, [...E[0] || (E[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1)
        ])]),
        e("span", pm, v(_[c.value]) + " " + v(n.value), 1),
        e("button", {
          class: "trx-calendar__nav",
          onClick: $
        }, [...E[1] || (E[1] = [
          e("i", { class: "pi pi-chevron-right" }, null, -1)
        ])])
      ]),
      e("div", vm, [
        (s(), o(V, null, b(u, (F) => e("div", {
          key: F,
          class: "trx-calendar__weekday"
        }, v(F), 1)), 64)),
        (s(!0), o(V, null, b(m.value, (F, q) => (s(), o("div", {
          key: q,
          class: w(["trx-calendar__cell", {
            "trx-calendar__cell--empty": !F.day,
            "trx-calendar__cell--today": F.dateStr === f,
            "trx-calendar__cell--selected": F.dateStr === t.modelValue
          }]),
          onClick: (K) => F.day && C(F.dateStr)
        }, [
          F.day ? (s(), o("span", fm, v(F.day), 1)) : h("", !0),
          F.dateStr && x.value[F.dateStr] ? (s(), o("div", xm, [
            (s(!0), o(V, null, b(x.value[F.dateStr].slice(0, 2), (K) => (s(), o("div", {
              key: K.id,
              class: "trx-calendar__event",
              style: R({ background: K.color ?? "var(--trx-accent-color)" }),
              title: K.title,
              onClick: H((dt) => i("eventClick", K), ["stop"])
            }, v(K.title), 13, hm))), 128)),
            x.value[F.dateStr].length > 2 ? (s(), o("div", $m, " +" + v(x.value[F.dateStr].length - 2), 1)) : h("", !0)
          ])) : h("", !0)
        ], 10, mm))), 128))
      ])
    ]));
  }
}), gC = /* @__PURE__ */ A(gm, [["__scopeId", "data-v-007ab8e8"]]), bm = /* @__PURE__ */ g({
  __name: "TrxVirtualList",
  props: {
    items: { default: () => [] },
    itemHeight: { default: 48 },
    height: { default: 400 },
    overscan: { default: 5 }
  },
  setup(t) {
    const a = t, r = D(), i = D(0), l = S(() => Math.ceil(a.height / a.itemHeight) + a.overscan * 2), n = S(() => Math.max(0, Math.floor(i.value / a.itemHeight) - a.overscan)), c = S(() => Math.min(a.items.length, n.value + l.value)), u = S(() => a.items.slice(n.value, c.value).map((m, x) => ({ item: m, index: n.value + x }))), _ = S(() => a.items.length * a.itemHeight), d = S(() => n.value * a.itemHeight);
    function p() {
      var m;
      i.value = ((m = r.value) == null ? void 0 : m.scrollTop) ?? 0;
    }
    return W(() => {
      var m;
      return (m = r.value) == null ? void 0 : m.addEventListener("scroll", p, { passive: !0 });
    }), G(() => {
      var m;
      return (m = r.value) == null ? void 0 : m.removeEventListener("scroll", p);
    }), (m, x) => (s(), o("div", {
      ref_key: "container",
      ref: r,
      class: "trx-virtual-list",
      style: R({ height: `${t.height}px`, overflowY: "auto" })
    }, [
      e("div", {
        style: R({ height: `${_.value}px`, position: "relative" })
      }, [
        e("div", {
          style: R({ transform: `translateY(${d.value}px)` })
        }, [
          (s(!0), o(V, null, b(u.value, ({ item: f, index: T }) => (s(), o("div", {
            key: T,
            style: R({ height: `${t.itemHeight}px` })
          }, [
            I(m.$slots, "default", {
              item: f,
              index: T
            }, void 0, !0)
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), bC = /* @__PURE__ */ A(bm, [["__scopeId", "data-v-ecf43584"]]), ym = { class: "trx-code-block" }, km = { class: "trx-code-block__header" }, wm = { class: "trx-code-block__lang-wrap" }, Tm = {
  key: 0,
  class: "trx-code-block__filename"
}, Cm = {
  key: 1,
  class: "trx-code-block__lang"
}, Sm = ["title"], Im = { class: "trx-code-block__table" }, Vm = {
  key: 0,
  class: "trx-code-block__lineno"
}, Bm = { class: "trx-code-block__line" }, Pm = /* @__PURE__ */ g({
  __name: "TrxCodeBlock",
  props: {
    code: { default: "" },
    language: { default: "text" },
    filename: {},
    showLineNumbers: { type: Boolean, default: !0 },
    maxHeight: {}
  },
  setup(t) {
    const a = t, r = D(!1);
    async function i() {
      await navigator.clipboard.writeText(a.code), r.value = !0, setTimeout(() => r.value = !1, 2e3);
    }
    function l(n) {
      return n.split(`
`);
    }
    return (n, c) => (s(), o("div", ym, [
      e("div", km, [
        e("div", wm, [
          t.filename ? (s(), o("span", Tm, [
            c[0] || (c[0] = e("i", { class: "pi pi-file" }, null, -1)),
            N(" " + v(t.filename), 1)
          ])) : (s(), o("span", Cm, v(t.language), 1))
        ]),
        e("button", {
          class: "trx-code-block__copy",
          onClick: i,
          title: r.value ? "Copiado!" : "Copiar"
        }, [
          e("i", {
            class: w(r.value ? "pi pi-check" : "pi pi-copy")
          }, null, 2),
          e("span", null, v(r.value ? "Copiado" : "Copiar"), 1)
        ], 8, Sm)
      ]),
      e("div", {
        class: "trx-code-block__body",
        style: R(t.maxHeight ? { maxHeight: t.maxHeight, overflowY: "auto" } : {})
      }, [
        e("table", Im, [
          e("tbody", null, [
            (s(!0), o(V, null, b(l(t.code), (u, _) => (s(), o("tr", { key: _ }, [
              t.showLineNumbers ? (s(), o("td", Vm, v(_ + 1), 1)) : h("", !0),
              e("td", Bm, v(u || " "), 1)
            ]))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), yC = /* @__PURE__ */ A(Pm, [["__scopeId", "data-v-c068f365"]]), Am = ["innerHTML"], Mm = /* @__PURE__ */ g({
  __name: "TrxMarkdownRenderer",
  props: {
    content: { default: "" },
    prose: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t, r = S(() => {
      let i = a.content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return i = i.replace(
        /```(\w*)\n([\s\S]*?)```/g,
        (l, n, c) => `<pre class="trx-md__pre"><code class="trx-md__code" data-lang="${n}">${c.trimEnd()}</code></pre>`
      ), i = i.replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm, "<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm, "<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm, "<h1>$1</h1>"), i = i.replace(/^---$/gm, "<hr>"), i = i.replace(/^&gt;\s(.+)$/gm, "<blockquote>$1</blockquote>"), i = i.replace(/^[-*]\s(.+)$/gm, "<li>$1</li>"), i = i.replace(/(<li>[\s\S]*?<\/li>)\n?(?!<li>)/g, "<ul>$1</ul>"), i = i.replace(/^\d+\.\s(.+)$/gm, "<oli>$1</oli>"), i = i.replace(/(<oli>[\s\S]*?<\/oli>)\n?(?!<oli>)/g, "<ol>$1</ol>"), i = i.replace(/<\/?oli>/g, (l) => l === "<oli>" ? "<li>" : "</li>"), i = i.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(/`(.+?)`/g, '<code class="trx-md__inline-code">$1</code>').replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" class="trx-md__img">').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="trx-md__link">$1</a>'), i = i.replace(/\n{2,}/g, "</p><p>"), i = `<p>${i}</p>`, i = i.replace(/<p>(<h[1-6]>|<\/h[1-6]>|<hr>|<blockquote>|<\/blockquote>|<ul>|<\/ul>|<ol>|<\/ol>|<pre>|<\/pre>)/g, "$1"), i = i.replace(/(<\/h[1-6]>|<hr>|<\/blockquote>|<\/ul>|<\/ol>|<\/pre>)<\/p>/g, "$1"), i = i.replace(/<p><\/p>/g, ""), i = i.replace(/\n/g, "<br>"), i;
    });
    return (i, l) => (s(), o("div", {
      class: w(["trx-md-renderer", { "trx-md-renderer--prose": t.prose }]),
      innerHTML: r.value
    }, null, 10, Am));
  }
}), kC = /* @__PURE__ */ A(Mm, [["__scopeId", "data-v-68ad6346"]]), Lm = { class: "trx-truncate" }, zm = /* @__PURE__ */ g({
  __name: "TrxTruncateText",
  props: {
    text: { default: "" },
    lines: { default: 3 },
    expandLabel: { default: "Ver mais" },
    collapseLabel: { default: "Ver menos" }
  },
  setup(t) {
    const a = D(!1);
    return (r, i) => (s(), o("div", Lm, [
      e("div", {
        class: w(["trx-truncate__content", { "trx-truncate__content--collapsed": !a.value }]),
        style: R(a.value ? {} : { "-webkit-line-clamp": String(t.lines) })
      }, [
        I(r.$slots, "default", {}, () => [
          N(v(t.text), 1)
        ], !0)
      ], 6),
      e("button", {
        class: "trx-truncate__toggle",
        onClick: i[0] || (i[0] = (l) => a.value = !a.value)
      }, [
        N(v(a.value ? t.collapseLabel : t.expandLabel) + " ", 1),
        e("i", {
          class: w(a.value ? "pi pi-chevron-up" : "pi pi-chevron-down")
        }, null, 2)
      ])
    ]));
  }
}), wC = /* @__PURE__ */ A(zm, [["__scopeId", "data-v-4d051201"]]), Dm = { class: "trx-conv-list" }, Em = {
  key: 0,
  class: "trx-conv-list__skeleton"
}, Rm = ["onClick"], Nm = { class: "trx-conv-list__avatar" }, qm = ["src", "alt"], Fm = { key: 1 }, Om = { class: "trx-conv-list__info" }, jm = { class: "trx-conv-list__top" }, Hm = { class: "trx-conv-list__name" }, Um = { class: "trx-conv-list__time" }, Wm = { class: "trx-conv-list__bottom" }, Gm = { class: "trx-conv-list__msg" }, Km = { class: "trx-conv-list__meta" }, Ym = {
  key: 1,
  class: "trx-conv-list__unread"
}, Jm = /* @__PURE__ */ g({
  __name: "TrxConversationList",
  props: {
    conversations: { default: () => [] },
    activeId: {},
    loading: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const r = a, i = {
      open: "var(--trx-accent-color)",
      pending: "var(--trx-warning-color)",
      resolved: "var(--trx-success-color)"
    };
    function l(n) {
      return n.split(" ").map((c) => c[0]).slice(0, 2).join("").toUpperCase();
    }
    return (n, c) => (s(), o("div", Dm, [
      t.loading ? (s(), o("div", Em, [
        (s(), o(V, null, b(5, (u) => e("div", {
          key: u,
          class: "trx-conv-list__skel-item"
        }, [...c[0] || (c[0] = [
          e("div", { class: "trx-conv-list__skel trx-conv-list__skel--avatar" }, null, -1),
          e("div", { class: "trx-conv-list__skel-info" }, [
            e("div", { class: "trx-conv-list__skel trx-conv-list__skel--name" }),
            e("div", { class: "trx-conv-list__skel trx-conv-list__skel--msg" })
          ], -1)
        ])])), 64))
      ])) : (s(!0), o(V, { key: 1 }, b(t.conversations, (u) => (s(), o("div", {
        key: u.id,
        class: w(["trx-conv-list__item", { "trx-conv-list__item--active": t.activeId === u.id }]),
        onClick: (_) => r("select", u)
      }, [
        e("div", Nm, [
          u.avatar ? (s(), o("img", {
            key: 0,
            src: u.avatar,
            alt: u.contact
          }, null, 8, qm)) : (s(), o("span", Fm, v(l(u.contact)), 1)),
          u.status ? (s(), o("span", {
            key: 2,
            class: "trx-conv-list__status-dot",
            style: R({ background: i[u.status] })
          }, null, 4)) : h("", !0)
        ]),
        e("div", Om, [
          e("div", jm, [
            e("span", Hm, v(u.contact), 1),
            e("span", Um, v(u.lastTime), 1)
          ]),
          e("div", Wm, [
            e("span", Gm, v(u.lastMessage ?? "—"), 1),
            e("div", Km, [
              u.channel ? (s(), L(ut, {
                key: 0,
                channel: u.channel,
                size: "sm",
                "icon-only": "",
                "show-label": !1
              }, null, 8, ["channel"])) : h("", !0),
              u.unread ? (s(), o("span", Ym, v(u.unread), 1)) : h("", !0)
            ])
          ])
        ])
      ], 10, Rm))), 128))
    ]));
  }
}), TC = /* @__PURE__ */ A(Jm, [["__scopeId", "data-v-43f7b6c7"]]), Xm = { class: "trx-lead-card__header" }, Qm = { class: "trx-lead-card__avatar" }, Zm = { class: "trx-lead-card__identity" }, tf = { class: "trx-lead-card__name" }, ef = {
  key: 0,
  class: "trx-lead-card__company"
}, sf = { class: "trx-lead-card__badges" }, af = ["title"], lf = {
  key: 0,
  class: "trx-lead-card__value"
}, nf = { class: "trx-lead-card__meta" }, of = {
  key: 0,
  class: "trx-lead-card__source"
}, rf = {
  key: 1,
  class: "trx-lead-card__assignee"
}, cf = {
  key: 2,
  class: "trx-lead-card__time"
}, uf = /* @__PURE__ */ g({
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
  setup(t, { emit: a }) {
    const r = {
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
    }, l = a;
    function n(u) {
      return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(u);
    }
    function c(u) {
      return u.split(" ").map((_) => _[0]).slice(0, 2).join("").toUpperCase();
    }
    return (u, _) => (s(), o("div", {
      class: "trx-lead-card",
      onClick: _[4] || (_[4] = (d) => l("view"))
    }, [
      e("div", Xm, [
        e("div", Qm, v(c(t.name)), 1),
        e("div", Zm, [
          e("span", tf, v(t.name), 1),
          t.company ? (s(), o("span", ef, v(t.company), 1)) : h("", !0)
        ]),
        e("div", sf, [
          e("span", {
            class: "trx-lead-card__status",
            style: R({ "--lst-color": r[t.status ?? "new"].color })
          }, v(r[t.status ?? "new"].label), 5),
          e("i", {
            class: w([i[t.priority ?? "medium"], "trx-lead-card__priority"]),
            title: t.priority
          }, null, 10, af)
        ])
      ]),
      t.value ? (s(), o("div", lf, v(n(t.value)), 1)) : h("", !0),
      e("div", nf, [
        t.source ? (s(), o("span", of, [
          _[5] || (_[5] = e("i", { class: "pi pi-map-marker" }, null, -1)),
          N(" " + v(t.source), 1)
        ])) : h("", !0),
        t.assignee ? (s(), o("span", rf, [
          _[6] || (_[6] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.assignee), 1)
        ])) : h("", !0),
        t.updatedAt ? (s(), o("span", cf, [
          _[7] || (_[7] = e("i", { class: "pi pi-clock" }, null, -1)),
          N(" " + v(t.updatedAt), 1)
        ])) : h("", !0)
      ]),
      e("div", {
        class: "trx-lead-card__actions",
        onClick: _[3] || (_[3] = H(() => {
        }, ["stop"]))
      }, [
        t.phone ? (s(), o("button", {
          key: 0,
          class: "trx-lead-card__btn",
          title: "Ligar",
          onClick: _[0] || (_[0] = (d) => l("call"))
        }, [..._[8] || (_[8] = [
          e("i", { class: "pi pi-phone" }, null, -1)
        ])])) : h("", !0),
        t.email ? (s(), o("button", {
          key: 1,
          class: "trx-lead-card__btn",
          title: "E-mail",
          onClick: _[1] || (_[1] = (d) => l("email"))
        }, [..._[9] || (_[9] = [
          e("i", { class: "pi pi-envelope" }, null, -1)
        ])])) : h("", !0),
        e("button", {
          class: "trx-lead-card__btn",
          title: "Ver lead",
          onClick: _[2] || (_[2] = (d) => l("view"))
        }, [..._[10] || (_[10] = [
          e("i", { class: "pi pi-external-link" }, null, -1)
        ])])
      ])
    ]));
  }
}), CC = /* @__PURE__ */ A(uf, [["__scopeId", "data-v-dcad9a9f"]]), df = { class: "trx-sla__header" }, _f = { class: "trx-sla__label" }, pf = {
  key: 0,
  class: "trx-sla__bar"
}, vf = /* @__PURE__ */ g({
  __name: "TrxSLAIndicator",
  props: {
    deadline: {},
    createdAt: {},
    warningThreshold: { default: 0.7 },
    label: {},
    showProgress: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t, r = () => Date.now();
    function i(x) {
      return x ? new Date(x).getTime() : 0;
    }
    const l = S(() => i(a.deadline) - i(a.createdAt)), n = S(() => r() - i(a.createdAt)), c = S(() => Math.max(0, i(a.deadline) - r())), u = S(() => Math.min(1, l.value > 0 ? n.value / l.value : 0)), _ = S(() => c.value === 0), d = S(() => !_.value && u.value >= a.warningThreshold), p = S(() => _.value ? "var(--trx-danger-color)" : d.value ? "var(--trx-warning-color)" : "var(--trx-success-color)");
    function m(x) {
      if (x <= 0) return "Vencido";
      const f = Math.floor(x / 36e5), T = Math.floor(x % 36e5 / 6e4);
      return f > 0 ? `${f}h ${T}m` : `${T}m`;
    }
    return (x, f) => (s(), o("div", {
      class: "trx-sla",
      style: R({ "--sla-color": p.value })
    }, [
      e("div", df, [
        e("span", _f, v(t.label ?? "SLA"), 1),
        e("span", {
          class: w(["trx-sla__time", { "trx-sla__time--breached": _.value }])
        }, [
          e("i", {
            class: w(_.value ? "pi pi-times-circle" : d.value ? "pi pi-exclamation-triangle" : "pi pi-clock")
          }, null, 2),
          N(" " + v(m(c.value)), 1)
        ], 2)
      ]),
      t.showProgress ? (s(), o("div", pf, [
        e("div", {
          class: "trx-sla__fill",
          style: R({ width: `${u.value * 100}%` })
        }, null, 4)
      ])) : h("", !0)
    ], 4));
  }
}), SC = /* @__PURE__ */ A(vf, [["__scopeId", "data-v-dbfaca6d"]]), mf = { class: "trx-crm-timeline" }, ff = {
  key: 0,
  class: "trx-crm-timeline__loading"
}, xf = {
  key: 1,
  class: "trx-crm-timeline__empty"
}, hf = {
  key: 2,
  class: "trx-crm-timeline__list"
}, $f = ["onClick"], gf = { class: "trx-crm-timeline__line-wrap" }, bf = { class: "trx-crm-timeline__content" }, yf = { class: "trx-crm-timeline__header" }, kf = { class: "trx-crm-timeline__date" }, wf = { class: "trx-crm-timeline__title-row" }, Tf = { class: "trx-crm-timeline__title" }, Cf = {
  key: 0,
  class: "trx-crm-timeline__desc"
}, Sf = { class: "trx-crm-timeline__meta" }, If = {
  key: 0,
  class: "trx-crm-timeline__author"
}, Vf = {
  key: 1,
  class: "trx-crm-timeline__duration"
}, Bf = /* @__PURE__ */ g({
  __name: "TrxCRMTimeline",
  props: {
    events: { default: () => [] },
    loading: { type: Boolean }
  },
  emits: ["eventClick"],
  setup(t, { emit: a }) {
    const r = a, i = {
      call: { icon: "pi pi-phone", color: "var(--trx-success-color)", label: "Ligação" },
      email: { icon: "pi pi-envelope", color: "var(--trx-accent-color)", label: "Email" },
      note: { icon: "pi pi-file-edit", color: "var(--trx-warning-color)", label: "Nota" },
      meeting: { icon: "pi pi-calendar", color: "#a78bfa", label: "Reunião" },
      task: { icon: "pi pi-check-square", color: "var(--trx-text-secondary)", label: "Tarefa" },
      deal: { icon: "pi pi-dollar", color: "var(--trx-success-color)", label: "Negócio" },
      whatsapp: { icon: "pi pi-comments", color: "#25d366", label: "WhatsApp" },
      stage: { icon: "pi pi-arrow-right", color: "var(--trx-accent-color)", label: "Mudança de Fase" }
    }, l = {
      positive: { icon: "pi pi-thumbs-up", color: "var(--trx-success-color)" },
      negative: { icon: "pi pi-thumbs-down", color: "var(--trx-danger-color)" },
      neutral: { icon: "pi pi-minus", color: "var(--trx-text-secondary)" }
    };
    function n(c) {
      return new Date(c).toLocaleString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
    }
    return (c, u) => (s(), o("div", mf, [
      t.loading ? (s(), o("div", ff, [...u[0] || (u[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.events.length ? (s(), o("div", hf, [
        (s(!0), o(V, null, b(t.events, (_) => (s(), o("div", {
          key: _.id,
          class: "trx-crm-timeline__item",
          onClick: (d) => r("eventClick", _)
        }, [
          e("div", gf, [
            e("div", {
              class: "trx-crm-timeline__dot",
              style: R({ background: i[_.type].color })
            }, [
              e("i", {
                class: w([i[_.type].icon, "trx-crm-timeline__dot-icon"])
              }, null, 2)
            ], 4),
            u[2] || (u[2] = e("div", { class: "trx-crm-timeline__line" }, null, -1))
          ]),
          e("div", bf, [
            e("div", yf, [
              e("span", {
                class: "trx-crm-timeline__type-badge",
                style: R({ color: i[_.type].color })
              }, v(i[_.type].label), 5),
              e("span", kf, v(n(_.date)), 1)
            ]),
            e("div", wf, [
              e("span", Tf, v(_.title), 1),
              _.outcome ? (s(), o("span", {
                key: 0,
                class: "trx-crm-timeline__outcome",
                style: R({ color: l[_.outcome].color })
              }, [
                e("i", {
                  class: w(l[_.outcome].icon)
                }, null, 2)
              ], 4)) : h("", !0)
            ]),
            _.description ? (s(), o("p", Cf, v(_.description), 1)) : h("", !0),
            e("div", Sf, [
              _.author ? (s(), o("span", If, [
                u[3] || (u[3] = e("i", { class: "pi pi-user" }, null, -1)),
                N(" " + v(_.author), 1)
              ])) : h("", !0),
              _.duration ? (s(), o("span", Vf, [
                u[4] || (u[4] = e("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(_.duration), 1)
              ])) : h("", !0)
            ])
          ])
        ], 8, $f))), 128))
      ])) : (s(), o("div", xf, [...u[1] || (u[1] = [
        e("i", { class: "pi pi-history" }, null, -1),
        e("span", null, "Nenhuma atividade registrada", -1)
      ])]))
    ]));
  }
}), IC = /* @__PURE__ */ A(Bf, [["__scopeId", "data-v-2b8a2f92"]]), Pf = { class: "trx-maintenance" }, Af = { class: "trx-maintenance__card" }, Mf = ["src"], Lf = { class: "trx-maintenance__title" }, zf = { class: "trx-maintenance__message" }, Df = {
  key: 1,
  class: "trx-maintenance__eta"
}, Ef = /* @__PURE__ */ g({
  __name: "TrxMaintenancePage",
  props: {
    title: { default: "Em Manutenção" },
    message: { default: "Estamos trabalhando para melhorar sua experiência. Voltaremos em breve." },
    estimatedTime: {},
    showCountdown: { type: Boolean },
    logoSrc: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Pf, [
      e("div", Af, [
        t.logoSrc ? (s(), o("img", {
          key: 0,
          src: t.logoSrc,
          class: "trx-maintenance__logo",
          alt: "Logo"
        }, null, 8, Mf)) : h("", !0),
        r[2] || (r[2] = e("div", { class: "trx-maintenance__icon" }, [
          e("i", { class: "pi pi-wrench" })
        ], -1)),
        e("h1", Lf, v(t.title), 1),
        e("p", zf, v(t.message), 1),
        t.estimatedTime ? (s(), o("div", Df, [
          r[1] || (r[1] = e("i", { class: "pi pi-clock" }, null, -1)),
          e("span", null, [
            r[0] || (r[0] = N("Previsão de retorno: ", -1)),
            e("strong", null, v(t.estimatedTime), 1)
          ])
        ])) : h("", !0),
        I(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), VC = /* @__PURE__ */ A(Ef, [["__scopeId", "data-v-b30655b1"]]), Rf = {
  key: 0,
  class: "trx-session-backdrop"
}, Nf = { class: "trx-session-dialog" }, qf = { class: "trx-session-dialog__msg" }, Ff = { class: "trx-session-dialog__actions" }, Of = /* @__PURE__ */ g({
  __name: "TrxSessionTimeout",
  props: {
    timeoutMs: { default: 30 * 60 * 1e3 },
    warningMs: { default: 5 * 60 * 1e3 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["timeout", "extend", "update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(r.timeoutMs), n = D(!1);
    let c, u;
    function _() {
      clearTimeout(u), clearInterval(c), l.value = r.timeoutMs, n.value = !1, u = setTimeout(d, r.timeoutMs - r.warningMs);
    }
    function d() {
      n.value = !0, l.value = r.warningMs, c = setInterval(() => {
        l.value -= 1e3, l.value <= 0 && (clearInterval(c), n.value = !1, i("timeout"));
      }, 1e3);
    }
    function p() {
      _(), i("extend");
    }
    const m = ["mousemove", "keydown", "click", "scroll"];
    W(() => {
      r.modelValue && (m.forEach(($) => window.addEventListener($, _, { passive: !0 })), _());
    }), G(() => {
      clearTimeout(u), clearInterval(c), m.forEach(($) => window.removeEventListener($, _));
    });
    const x = S(() => Math.floor(l.value / 6e4)), f = S(() => Math.floor(l.value % 6e4 / 1e3)), T = S(() => `${x.value}:${String(f.value).padStart(2, "0")}`);
    return ($, C) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-session-fade" }, {
        default: B(() => [
          n.value ? (s(), o("div", Rf, [
            e("div", Nf, [
              C[4] || (C[4] = e("div", { class: "trx-session-dialog__icon" }, [
                e("i", { class: "pi pi-clock" })
              ], -1)),
              C[5] || (C[5] = e("h2", { class: "trx-session-dialog__title" }, "Sessão expirando", -1)),
              e("p", qf, [
                C[1] || (C[1] = N(" Sua sessão expirará em ", -1)),
                e("strong", null, v(T.value), 1),
                C[2] || (C[2] = N(" por inatividade. ", -1))
              ]),
              e("div", Ff, [
                e("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--extend",
                  onClick: p
                }, [...C[3] || (C[3] = [
                  e("i", { class: "pi pi-refresh" }, null, -1),
                  N(" Continuar sessão ", -1)
                ])]),
                e("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--logout",
                  onClick: C[0] || (C[0] = (M) => i("timeout"))
                }, " Sair agora ")
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), BC = /* @__PURE__ */ A(Of, [["__scopeId", "data-v-3b5d9421"]]), jf = { class: "trx-shortcut-panel" }, Hf = { class: "trx-shortcut-panel__header" }, Uf = { class: "trx-shortcut-panel__body" }, Wf = { class: "trx-shortcut-panel__group-label" }, Gf = { class: "trx-shortcut-panel__list" }, Kf = { class: "trx-shortcut-panel__desc" }, Yf = { class: "trx-shortcut-panel__keys" }, Jf = { class: "trx-shortcut-panel__footer" }, Xf = { class: "trx-shortcut-panel__key" }, Qf = /* @__PURE__ */ g({
  __name: "TrxShortcutHelper",
  props: {
    shortcuts: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    triggerKey: { default: "?" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = () => {
      const n = {};
      for (const c of r.shortcuts) {
        const u = c.group ?? "Geral";
        n[u] || (n[u] = []), n[u].push(c);
      }
      return n;
    };
    return (n, c) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-shortcut-fade" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", {
            key: 0,
            class: "trx-shortcut-backdrop",
            onClick: c[1] || (c[1] = H((u) => i("update:modelValue", !1), ["self"]))
          }, [
            e("div", jf, [
              e("div", Hf, [
                c[3] || (c[3] = e("h3", { class: "trx-shortcut-panel__title" }, "Atalhos de Teclado", -1)),
                e("button", {
                  class: "trx-shortcut-panel__close",
                  onClick: c[0] || (c[0] = (u) => i("update:modelValue", !1))
                }, [...c[2] || (c[2] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", Uf, [
                (s(!0), o(V, null, b(l(), (u, _) => (s(), o(V, { key: _ }, [
                  e("div", Wf, v(_), 1),
                  e("div", Gf, [
                    (s(!0), o(V, null, b(u, (d, p) => (s(), o("div", {
                      key: p,
                      class: "trx-shortcut-panel__item"
                    }, [
                      e("span", Kf, v(d.description), 1),
                      e("div", Yf, [
                        (s(!0), o(V, null, b(d.keys, (m) => (s(), o("kbd", {
                          key: m,
                          class: "trx-shortcut-panel__key"
                        }, v(m), 1))), 128))
                      ])
                    ]))), 128))
                  ])
                ], 64))), 128))
              ]),
              e("div", Jf, [
                c[4] || (c[4] = N(" Pressione ", -1)),
                e("kbd", Xf, v(t.triggerKey), 1),
                c[5] || (c[5] = N(" para abrir/fechar ", -1))
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), PC = /* @__PURE__ */ A(Qf, [["__scopeId", "data-v-d5032b0e"]]), AC = /* @__PURE__ */ g({
  __name: "TrxFeatureFlag",
  props: {
    flag: {},
    flags: {}
  },
  setup(t) {
    const a = t, r = S(() => a.flags[a.flag] === !0);
    return (i, l) => r.value ? I(i.$slots, "default", { key: 0 }) : I(i.$slots, "disabled", { key: 1 });
  }
}), Zf = { class: "trx-dtmf" }, tx = ["onClick"], ex = { class: "trx-dtmf__main" }, sx = {
  key: 0,
  class: "trx-dtmf__sub"
}, ax = /* @__PURE__ */ g({
  __name: "TrxDTMFPad",
  emits: ["digit"],
  setup(t, { emit: a }) {
    const r = a, i = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["*", "0", "#"]
    ], l = {
      1: "",
      2: "ABC",
      3: "DEF",
      4: "GHI",
      5: "JKL",
      6: "MNO",
      7: "PQRS",
      8: "TUV",
      9: "WXYZ",
      "*": "",
      0: "+",
      "#": ""
    };
    function n(c) {
      r("digit", c);
    }
    return (c, u) => (s(), o("div", Zf, [
      (s(), o(V, null, b(i, (_, d) => e("div", {
        key: d,
        class: "trx-dtmf__row"
      }, [
        (s(!0), o(V, null, b(_, (p) => (s(), o("button", {
          key: p,
          class: "trx-dtmf__key",
          onClick: (m) => n(p)
        }, [
          e("span", ex, v(p), 1),
          l[p] ? (s(), o("span", sx, v(l[p]), 1)) : h("", !0)
        ], 8, tx))), 128))
      ])), 64))
    ]));
  }
}), MC = /* @__PURE__ */ A(ax, [["__scopeId", "data-v-2f681100"]]), lx = { class: "trx-tf-dialog" }, nx = { class: "trx-tf-dialog__header" }, ox = { class: "trx-tf-dialog__type-tabs" }, rx = ["onClick"], ix = { class: "trx-tf-dialog__search" }, cx = { class: "trx-tf-dialog__list" }, ux = {
  key: 0,
  class: "trx-tf-dialog__loading"
}, dx = ["onClick"], _x = { class: "trx-tf-dialog__item-info" }, px = { class: "trx-tf-dialog__item-name" }, vx = { class: "trx-tf-dialog__item-ext" }, mx = { class: "trx-tf-dialog__item-status" }, fx = {
  key: 1,
  class: "trx-tf-dialog__empty"
}, xx = { class: "trx-tf-dialog__footer" }, hx = ["disabled"], $x = /* @__PURE__ */ g({
  __name: "TrxTransferDialog",
  props: {
    targets: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "transfer"],
  setup(t, { emit: a }) {
    const r = a, i = D("blind"), l = D(""), n = D(null);
    return (c, u) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-tf-fade" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", {
            key: 0,
            class: "trx-tf-backdrop",
            onClick: u[4] || (u[4] = H((_) => r("update:modelValue", !1), ["self"]))
          }, [
            e("div", lx, [
              e("div", nx, [
                u[6] || (u[6] = e("h3", { class: "trx-tf-dialog__title" }, "Transferir Chamada", -1)),
                e("button", {
                  class: "trx-tf-dialog__close",
                  onClick: u[0] || (u[0] = (_) => r("update:modelValue", !1))
                }, [...u[5] || (u[5] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", ox, [
                (s(), o(V, null, b(["blind", "attended", "conference"], (_) => e("button", {
                  key: _,
                  class: w(["trx-tf-dialog__type-btn", { active: i.value === _ }]),
                  onClick: (d) => i.value = _
                }, v(_ === "blind" ? "Cega" : _ === "attended" ? "Assistida" : "Conferência"), 11, rx)), 64))
              ]),
              e("div", ix, [
                u[7] || (u[7] = e("i", { class: "pi pi-search trx-tf-dialog__search-icon" }, null, -1)),
                Y(e("input", {
                  "onUpdate:modelValue": u[1] || (u[1] = (_) => l.value = _),
                  class: "trx-tf-dialog__search-input",
                  placeholder: "Buscar ramal ou agente...",
                  autofocus: ""
                }, null, 512), [
                  [J, l.value]
                ])
              ]),
              e("div", cx, [
                t.loading ? (s(), o("div", ux, [...u[8] || (u[8] = [
                  e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
                ])])) : h("", !0),
                (s(!0), o(V, null, b(t.targets.filter((_) => !l.value || _.name.toLowerCase().includes(l.value.toLowerCase()) || _.extension.includes(l.value)), (_) => {
                  var d;
                  return s(), o("div", {
                    key: _.id,
                    class: w(["trx-tf-dialog__item", { "trx-tf-dialog__item--selected": ((d = n.value) == null ? void 0 : d.id) === _.id, "trx-tf-dialog__item--unavailable": !_.available }]),
                    onClick: (p) => n.value = _
                  }, [
                    e("div", {
                      class: w(["trx-tf-dialog__item-dot", _.available ? "available" : "busy"])
                    }, null, 2),
                    e("div", _x, [
                      e("span", px, v(_.name), 1),
                      e("span", vx, v(_.extension), 1)
                    ]),
                    e("span", mx, v(_.available ? "Disponível" : "Ocupado"), 1)
                  ], 10, dx);
                }), 128)),
                !t.targets.length && !t.loading ? (s(), o("div", fx, " Nenhum ramal encontrado ")) : h("", !0)
              ]),
              e("div", xx, [
                e("button", {
                  class: "trx-tf-dialog__btn trx-tf-dialog__btn--cancel",
                  onClick: u[2] || (u[2] = (_) => r("update:modelValue", !1))
                }, " Cancelar "),
                e("button", {
                  class: "trx-tf-dialog__btn trx-tf-dialog__btn--confirm",
                  disabled: !n.value,
                  onClick: u[3] || (u[3] = (_) => n.value && r("transfer", n.value, i.value))
                }, [
                  u[9] || (u[9] = e("i", { class: "pi pi-phone" }, null, -1)),
                  N(" " + v(i.value === "blind" ? "Transferir" : i.value === "attended" ? "Consultar" : "Conferência"), 1)
                ], 8, hx)
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), LC = /* @__PURE__ */ A($x, [["__scopeId", "data-v-d021e3e9"]]), gx = { class: "trx-monitor" }, bx = {
  key: 0,
  class: "trx-monitor__empty"
}, yx = {
  key: 1,
  class: "trx-monitor__empty"
}, kx = {
  key: 2,
  class: "trx-monitor__list"
}, wx = { class: "trx-monitor__agent" }, Tx = { class: "trx-monitor__agent-name" }, Cx = { class: "trx-monitor__agent-ext" }, Sx = { class: "trx-monitor__call-info" }, Ix = { class: "trx-monitor__customer" }, Vx = {
  key: 0,
  class: "trx-monitor__queue"
}, Bx = { class: "trx-monitor__duration" }, Px = {
  key: 0,
  class: "trx-monitor__active-badge"
}, Ax = ["onClick"], Mx = {
  key: 1,
  class: "trx-monitor__actions"
}, Lx = ["title", "onClick"], zx = /* @__PURE__ */ g({
  __name: "TrxCallMonitor",
  props: {
    calls: { default: () => [] },
    loading: { type: Boolean },
    activeId: {},
    activeMode: {}
  },
  emits: ["monitor", "stop"],
  setup(t, { emit: a }) {
    const r = a, i = [
      { key: "listen", label: "Escuta", icon: "pi pi-eye", color: "var(--trx-accent-color)" },
      { key: "whisper", label: "Sussurro", icon: "pi pi-microphone", color: "var(--trx-warning-color)" },
      { key: "barge", label: "Entrar", icon: "pi pi-phone", color: "var(--trx-danger-color)" }
    ];
    function l(n) {
      const c = Math.floor(n / 60), u = n % 60;
      return `${String(c).padStart(2, "0")}:${String(u).padStart(2, "0")}`;
    }
    return (n, c) => (s(), o("div", gx, [
      t.loading ? (s(), o("div", bx, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", kx, [
        (s(!0), o(V, null, b(t.calls, (u) => (s(), o("div", {
          key: u.id,
          class: w(["trx-monitor__item", { "trx-monitor__item--active": t.activeId === u.id }])
        }, [
          e("div", wx, [
            e("span", Tx, v(u.agentName), 1),
            e("span", Cx, v(u.agentExt), 1)
          ]),
          e("div", Sx, [
            e("span", Ix, v(u.customerName ?? u.customerPhone), 1),
            u.queue ? (s(), o("span", Vx, v(u.queue), 1)) : h("", !0)
          ]),
          e("span", Bx, v(l(u.duration)), 1),
          t.activeId === u.id ? (s(), o("div", Px, [
            c[3] || (c[3] = e("i", { class: "pi pi-circle-fill trx-monitor__pulse" }, null, -1)),
            N(" " + v(t.activeMode === "listen" ? "Escutando" : t.activeMode === "whisper" ? "Sussurrando" : "Na chamada") + " ", 1),
            e("button", {
              class: "trx-monitor__stop-btn",
              onClick: (_) => r("stop", u.id)
            }, [...c[2] || (c[2] = [
              e("i", { class: "pi pi-stop-circle" }, null, -1)
            ])], 8, Ax)
          ])) : (s(), o("div", Mx, [
            (s(), o(V, null, b(i, (_) => e("button", {
              key: _.key,
              class: "trx-monitor__mode-btn",
              title: _.label,
              style: R({ "--mc": _.color }),
              onClick: (d) => r("monitor", u, _.key)
            }, [
              e("i", {
                class: w(_.icon)
              }, null, 2)
            ], 12, Lx)), 64))
          ]))
        ], 2))), 128))
      ])) : (s(), o("div", yx, [...c[1] || (c[1] = [
        e("i", {
          class: "pi pi-phone",
          style: { "font-size": "1.5rem" }
        }, null, -1),
        e("span", null, "Nenhuma chamada ativa", -1)
      ])]))
    ]));
  }
}), zC = /* @__PURE__ */ A(zx, [["__scopeId", "data-v-df8b4f98"]]), Dx = ["disabled"], Ex = {
  key: 0,
  class: "trx-break__panel"
}, Rx = ["onClick"], Nx = { class: "trx-break__reason-label" }, qx = {
  key: 0,
  class: "trx-break__reason-max"
}, Fx = {
  key: 0,
  class: "trx-break__empty"
}, Ox = /* @__PURE__ */ g({
  __name: "TrxBreakSelector",
  props: {
    reasons: { default: () => [] },
    modelValue: { default: null },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "start", "end"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1);
    return (l, n) => (s(), o("div", {
      class: w(["trx-break", { "trx-break--active": t.modelValue }])
    }, [
      e("button", {
        class: "trx-break__trigger",
        disabled: t.disabled,
        onClick: n[0] || (n[0] = (c) => t.modelValue ? (r("update:modelValue", null), r("end")) : i.value = !i.value)
      }, [
        e("i", {
          class: w(t.modelValue ? "pi pi-play" : "pi pi-pause")
        }, null, 2),
        e("span", null, v(t.modelValue ? "Retornar" : "Iniciar Pausa"), 1),
        t.modelValue ? h("", !0) : (s(), o("i", {
          key: 0,
          class: w(["pi pi-chevron-down trx-break__arrow", { rotated: i.value }])
        }, null, 2))
      ], 8, Dx),
      O(j, { name: "trx-break-drop" }, {
        default: B(() => [
          i.value && !t.modelValue ? (s(), o("div", Ex, [
            n[1] || (n[1] = e("div", { class: "trx-break__panel-title" }, "Motivo da pausa", -1)),
            (s(!0), o(V, null, b(t.reasons, (c) => (s(), o("button", {
              key: c.id,
              class: "trx-break__reason",
              onClick: (u) => {
                r("update:modelValue", c.id), r("start", c), i.value = !1;
              }
            }, [
              e("i", {
                class: w([c.icon ?? "pi pi-circle", "trx-break__reason-icon"])
              }, null, 2),
              e("span", Nx, v(c.label), 1),
              c.maxMinutes ? (s(), o("span", qx, v(c.maxMinutes) + "min", 1)) : h("", !0)
            ], 8, Rx))), 128)),
            t.reasons.length ? h("", !0) : (s(), o("div", Fx, "Nenhum motivo configurado"))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), DC = /* @__PURE__ */ A(Ox, [["__scopeId", "data-v-11d04d15"]]), jx = { class: "trx-qm" }, Hx = {
  key: 0,
  class: "trx-qm__loading"
}, Ux = {
  key: 1,
  class: "trx-qm__empty"
}, Wx = {
  key: 2,
  class: "trx-qm__list"
}, Gx = { class: "trx-qm__queue-header" }, Kx = { class: "trx-qm__queue-name" }, Yx = { class: "trx-qm__agents" }, Jx = { class: "trx-qm__metric" }, Xx = { class: "trx-qm__metric-value trx-qm__metric-value--warn" }, Qx = { class: "trx-qm__metric" }, Zx = { class: "trx-qm__metric-value trx-qm__metric-value--active" }, th = { class: "trx-qm__metric" }, eh = { class: "trx-qm__metric-value" }, sh = { class: "trx-qm__metric" }, ah = { class: "trx-qm__metric" }, lh = { class: "trx-qm__metric-value" }, nh = { class: "trx-qm__metric" }, oh = { class: "trx-qm__sl-bar" }, rh = /* @__PURE__ */ g({
  __name: "TrxQueueMetrics",
  props: {
    queues: { default: () => [] },
    loading: { type: Boolean },
    compact: { type: Boolean }
  },
  setup(t) {
    function a(i) {
      const l = Math.floor(i / 60), n = i % 60;
      return `${String(l).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
    }
    function r(i) {
      return i >= 80 ? "var(--trx-success-color)" : i >= 60 ? "var(--trx-warning-color)" : "var(--trx-danger-color)";
    }
    return (i, l) => (s(), o("div", jx, [
      t.loading ? (s(), o("div", Hx, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.queues.length ? (s(), o("div", Wx, [
        (s(!0), o(V, null, b(t.queues, (n) => (s(), o("div", {
          key: n.name,
          class: "trx-qm__queue"
        }, [
          e("div", Gx, [
            e("span", Kx, v(n.name), 1),
            e("span", Yx, v(n.agentsReady) + "/" + v(n.agentsTotal) + " agentes", 1)
          ]),
          e("div", {
            class: w(["trx-qm__metrics", { "trx-qm__metrics--compact": t.compact }])
          }, [
            e("div", Jx, [
              e("span", Xx, v(n.waiting), 1),
              l[1] || (l[1] = e("span", { class: "trx-qm__metric-label" }, "Aguardando", -1))
            ]),
            e("div", Qx, [
              e("span", Zx, v(n.active), 1),
              l[2] || (l[2] = e("span", { class: "trx-qm__metric-label" }, "Em atendimento", -1))
            ]),
            e("div", th, [
              e("span", eh, v(n.abandoned), 1),
              l[3] || (l[3] = e("span", { class: "trx-qm__metric-label" }, "Abandonadas", -1))
            ]),
            e("div", sh, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: r(n.serviceLevel) })
              }, v(n.serviceLevel) + "%", 5),
              l[4] || (l[4] = e("span", { class: "trx-qm__metric-label" }, "Nível de Serviço", -1))
            ]),
            e("div", ah, [
              e("span", lh, v(a(n.avgWait)), 1),
              l[5] || (l[5] = e("span", { class: "trx-qm__metric-label" }, "TMA Espera", -1))
            ]),
            e("div", nh, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: n.longestWait > 120 ? "var(--trx-danger-color)" : void 0 })
              }, v(a(n.longestWait)), 5),
              l[6] || (l[6] = e("span", { class: "trx-qm__metric-label" }, "Maior Espera", -1))
            ])
          ], 2),
          e("div", oh, [
            e("div", {
              class: "trx-qm__sl-fill",
              style: R({ width: n.serviceLevel + "%", background: r(n.serviceLevel) })
            }, null, 4)
          ])
        ]))), 128))
      ])) : (s(), o("div", Ux, "Nenhuma fila configurada"))
    ]));
  }
}), EC = /* @__PURE__ */ A(rh, [["__scopeId", "data-v-63231ab6"]]), ih = { class: "trx-rank" }, ch = {
  key: 0,
  class: "trx-rank__header"
}, uh = { class: "trx-rank__title" }, dh = {
  key: 1,
  class: "trx-rank__loading"
}, _h = {
  key: 2,
  class: "trx-rank__empty"
}, ph = {
  key: 3,
  class: "trx-rank__list"
}, vh = ["onClick"], mh = { class: "trx-rank__pos" }, fh = { class: "trx-rank__avatar-wrap" }, xh = ["src", "alt"], hh = {
  key: 1,
  class: "trx-rank__avatar-init"
}, $h = { class: "trx-rank__name" }, gh = { class: "trx-rank__bar-wrap" }, bh = { class: "trx-rank__value-wrap" }, yh = { class: "trx-rank__value" }, kh = {
  key: 0,
  class: "trx-rank__unit"
}, wh = /* @__PURE__ */ g({
  __name: "TrxAgentRanking",
  props: {
    entries: { default: () => [] },
    title: { default: "Ranking" },
    loading: { type: Boolean },
    highlight: {},
    maxValue: {}
  },
  emits: ["rowClick"],
  setup(t, { emit: a }) {
    const r = a, i = ["🥇", "🥈", "🥉"];
    return (l, n) => (s(), o("div", ih, [
      t.title ? (s(), o("div", ch, [
        e("span", uh, v(t.title), 1)
      ])) : h("", !0),
      t.loading ? (s(), o("div", dh, [...n[0] || (n[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.entries.length ? (s(), o("div", ph, [
        (s(!0), o(V, null, b(t.entries, (c, u) => (s(), o("div", {
          key: c.id,
          class: w(["trx-rank__item", { "trx-rank__item--highlight": t.highlight === c.id }]),
          onClick: (_) => r("rowClick", c)
        }, [
          e("span", mh, v(u < 3 ? i[u] : `#${u + 1}`), 1),
          e("div", fh, [
            c.avatar ? (s(), o("img", {
              key: 0,
              src: c.avatar,
              class: "trx-rank__avatar",
              alt: c.name
            }, null, 8, xh)) : (s(), o("div", hh, v(c.name[0]), 1))
          ]),
          e("span", $h, v(c.name), 1),
          e("div", gh, [
            e("div", {
              class: "trx-rank__bar",
              style: R({ width: (t.maxValue ? c.value / t.maxValue * 100 : 100) + "%" })
            }, null, 4)
          ]),
          e("div", bh, [
            e("span", yh, v(c.value.toLocaleString("pt-BR")), 1),
            c.unit ? (s(), o("span", kh, v(c.unit), 1)) : h("", !0),
            c.delta !== void 0 ? (s(), o("span", {
              key: 1,
              class: w(["trx-rank__delta", c.delta > 0 ? "up" : c.delta < 0 ? "down" : ""])
            }, [
              e("i", {
                class: w(c.delta > 0 ? "pi pi-arrow-up" : c.delta < 0 ? "pi pi-arrow-down" : "pi pi-minus")
              }, null, 2)
            ], 2)) : h("", !0)
          ])
        ], 10, vh))), 128))
      ])) : (s(), o("div", _h, "Sem dados"))
    ]));
  }
}), RC = /* @__PURE__ */ A(wh, [["__scopeId", "data-v-f7fb6516"]]), Th = { class: "trx-recorder__indicator" }, Ch = { class: "trx-recorder__label" }, Sh = { class: "trx-recorder__time" }, Ih = { class: "trx-recorder__controls" }, Vh = ["disabled"], Bh = ["disabled"], Ph = ["disabled"], Ah = ["disabled"], Mh = /* @__PURE__ */ g({
  __name: "TrxCallRecorder",
  props: {
    state: { default: "idle" },
    duration: { default: 0 },
    disabled: { type: Boolean }
  },
  emits: ["start", "pause", "resume", "stop"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => {
      const n = Math.floor(r.duration / 60), c = r.duration % 60;
      return `${String(n).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
    });
    return (n, c) => (s(), o("div", {
      class: w(["trx-recorder", `trx-recorder--${t.state}`])
    }, [
      e("div", Th, [
        e("span", {
          class: w(["trx-recorder__dot", { "trx-recorder__dot--blink": t.state === "recording" }])
        }, null, 2),
        e("span", Ch, v(t.state === "idle" ? "Sem gravação" : t.state === "recording" ? "Gravando" : "Pausado"), 1)
      ]),
      e("span", Sh, v(l.value), 1),
      e("div", Ih, [
        t.state === "idle" ? (s(), o("button", {
          key: 0,
          class: "trx-recorder__btn trx-recorder__btn--start",
          disabled: t.disabled,
          title: "Iniciar gravação",
          onClick: c[0] || (c[0] = (u) => i("start"))
        }, [...c[4] || (c[4] = [
          e("i", { class: "pi pi-circle-fill" }, null, -1)
        ])], 8, Vh)) : (s(), o(V, { key: 1 }, [
          t.state === "recording" ? (s(), o("button", {
            key: 0,
            class: "trx-recorder__btn trx-recorder__btn--pause",
            disabled: t.disabled,
            title: "Pausar",
            onClick: c[1] || (c[1] = (u) => i("pause"))
          }, [...c[5] || (c[5] = [
            e("i", { class: "pi pi-pause" }, null, -1)
          ])], 8, Bh)) : (s(), o("button", {
            key: 1,
            class: "trx-recorder__btn trx-recorder__btn--resume",
            disabled: t.disabled,
            title: "Retomar",
            onClick: c[2] || (c[2] = (u) => i("resume"))
          }, [...c[6] || (c[6] = [
            e("i", { class: "pi pi-play" }, null, -1)
          ])], 8, Ph)),
          e("button", {
            class: "trx-recorder__btn trx-recorder__btn--stop",
            disabled: t.disabled,
            title: "Parar",
            onClick: c[3] || (c[3] = (u) => i("stop"))
          }, [...c[7] || (c[7] = [
            e("i", { class: "pi pi-stop" }, null, -1)
          ])], 8, Ah)
        ], 64))
      ])
    ], 2));
  }
}), NC = /* @__PURE__ */ A(Mh, [["__scopeId", "data-v-86250438"]]), Lh = { class: "trx-ext-picker__name" }, zh = { class: "trx-ext-picker__ext" }, Dh = {
  key: 1,
  class: "trx-ext-picker__placeholder"
}, Eh = {
  key: 0,
  class: "trx-ext-picker__panel"
}, Rh = { class: "trx-ext-picker__search-wrap" }, Nh = {
  key: 0,
  class: "trx-ext-picker__loading"
}, qh = {
  key: 1,
  class: "trx-ext-picker__list"
}, Fh = ["onClick"], Oh = { class: "trx-ext-picker__item-info" }, jh = { class: "trx-ext-picker__item-name" }, Hh = { class: "trx-ext-picker__item-dept" }, Uh = { class: "trx-ext-picker__item-ext" }, Wh = {
  key: 0,
  class: "trx-ext-picker__empty"
}, Gh = /* @__PURE__ */ g({
  __name: "TrxExtensionPicker",
  props: {
    extensions: { default: () => [] },
    modelValue: { default: null },
    placeholder: { default: "Buscar ramal..." },
    disabled: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D(!1), c = S(
      () => r.extensions.filter(
        (p) => !l.value || p.name.toLowerCase().includes(l.value.toLowerCase()) || p.extension.includes(l.value) || (p.department ?? "").toLowerCase().includes(l.value.toLowerCase())
      )
    ), u = S(() => r.extensions.find((p) => p.id === r.modelValue) ?? null);
    function _(p) {
      i("update:modelValue", p.id), i("select", p), n.value = !1, l.value = "";
    }
    function d() {
      i("update:modelValue", null), l.value = "";
    }
    return (p, m) => (s(), o("div", {
      class: w(["trx-ext-picker", { open: n.value }])
    }, [
      e("div", {
        class: w(["trx-ext-picker__trigger", { disabled: t.disabled }]),
        onClick: m[0] || (m[0] = (x) => !t.disabled && (n.value = !n.value))
      }, [
        u.value ? (s(), o(V, { key: 0 }, [
          e("div", {
            class: w(["trx-ext-picker__dot", u.value.available ? "on" : "off"])
          }, null, 2),
          e("span", Lh, v(u.value.name), 1),
          e("span", zh, v(u.value.extension), 1),
          e("button", {
            class: "trx-ext-picker__clear",
            onClick: H(d, ["stop"])
          }, [...m[2] || (m[2] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ], 64)) : (s(), o("span", Dh, [
          m[3] || (m[3] = e("i", { class: "pi pi-phone" }, null, -1)),
          N(" " + v(t.placeholder), 1)
        ])),
        m[4] || (m[4] = e("i", { class: "pi pi-chevron-down trx-ext-picker__arrow" }, null, -1))
      ], 2),
      n.value ? (s(), o("div", Eh, [
        e("div", Rh, [
          m[5] || (m[5] = e("i", { class: "pi pi-search trx-ext-picker__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": m[1] || (m[1] = (x) => l.value = x),
            class: "trx-ext-picker__search",
            placeholder: "Buscar...",
            autofocus: ""
          }, null, 512), [
            [J, l.value]
          ])
        ]),
        t.loading ? (s(), o("div", Nh, [...m[6] || (m[6] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : (s(), o("div", qh, [
          (s(!0), o(V, null, b(c.value, (x) => (s(), o("div", {
            key: x.id,
            class: w(["trx-ext-picker__item", { "trx-ext-picker__item--selected": t.modelValue === x.id }]),
            onClick: (f) => _(x)
          }, [
            e("div", {
              class: w(["trx-ext-picker__dot", x.available ? "on" : "off"])
            }, null, 2),
            e("div", Oh, [
              e("span", jh, v(x.name), 1),
              e("span", Hh, v(x.department), 1)
            ]),
            e("span", Uh, v(x.extension), 1)
          ], 10, Fh))), 128)),
          c.value.length ? h("", !0) : (s(), o("div", Wh, "Nenhum resultado"))
        ]))
      ])) : h("", !0)
    ], 2));
  }
}), qC = /* @__PURE__ */ A(Gh, [["__scopeId", "data-v-0ff142eb"]]), Kh = { class: "trx-aht" }, Yh = { class: "trx-aht__header" }, Jh = { class: "trx-aht__label" }, Xh = { class: "trx-aht__target" }, Qh = { class: "trx-aht__value-row" }, Zh = { class: "trx-aht__bar-wrap" }, t1 = {
  key: 0,
  class: "trx-aht__breakdown"
}, e1 = {
  key: 0,
  class: "trx-aht__seg"
}, s1 = { class: "trx-aht__seg-val" }, a1 = {
  key: 1,
  class: "trx-aht__seg"
}, l1 = { class: "trx-aht__seg-val" }, n1 = {
  key: 2,
  class: "trx-aht__seg"
}, o1 = { class: "trx-aht__seg-val" }, r1 = /* @__PURE__ */ g({
  __name: "TrxAHTIndicator",
  props: {
    value: { default: 0 },
    target: { default: 180 },
    label: { default: "TMA" },
    showBreakdown: { type: Boolean, default: !1 },
    talkTime: {},
    holdTime: {},
    acwTime: {}
  },
  setup(t) {
    const a = t;
    function r(c) {
      const u = Math.floor(c / 60), _ = c % 60;
      return `${String(u).padStart(2, "0")}:${String(_).padStart(2, "0")}`;
    }
    const i = S(() => Math.min(a.value / (a.target || 1) * 100, 200)), l = S(() => i.value <= 80 ? "var(--trx-success-color)" : i.value <= 110 ? "var(--trx-warning-color)" : "var(--trx-danger-color)"), n = S(() => a.value - a.target);
    return (c, u) => (s(), o("div", Kh, [
      e("div", Yh, [
        e("span", Jh, v(t.label), 1),
        e("span", Xh, "Meta: " + v(r(t.target)), 1)
      ]),
      e("div", Qh, [
        e("span", {
          class: "trx-aht__value",
          style: R({ color: l.value })
        }, v(r(t.value)), 5),
        e("span", {
          class: w(["trx-aht__delta", n.value > 0 ? "over" : "under"])
        }, [
          e("i", {
            class: w(n.value > 0 ? "pi pi-arrow-up" : "pi pi-arrow-down")
          }, null, 2),
          N(" " + v(r(Math.abs(n.value))), 1)
        ], 2)
      ]),
      e("div", Zh, [
        e("div", {
          class: "trx-aht__bar",
          style: R({ width: Math.min(i.value, 100) + "%", background: l.value })
        }, null, 4),
        u[0] || (u[0] = e("div", {
          class: "trx-aht__target-line",
          style: { left: "100%" }
        }, null, -1)),
        i.value > 100 ? (s(), o("div", {
          key: 0,
          class: "trx-aht__over-bar",
          style: R({ width: i.value - 100 + "%", background: "var(--trx-danger-color)", opacity: 0.4 })
        }, null, 4)) : h("", !0)
      ]),
      t.showBreakdown ? (s(), o("div", t1, [
        t.talkTime !== void 0 ? (s(), o("div", e1, [
          u[1] || (u[1] = e("i", { class: "pi pi-phone" }, null, -1)),
          u[2] || (u[2] = e("span", null, "Fala", -1)),
          e("span", s1, v(r(t.talkTime)), 1)
        ])) : h("", !0),
        t.holdTime !== void 0 ? (s(), o("div", a1, [
          u[3] || (u[3] = e("i", { class: "pi pi-pause" }, null, -1)),
          u[4] || (u[4] = e("span", null, "Hold", -1)),
          e("span", l1, v(r(t.holdTime)), 1)
        ])) : h("", !0),
        t.acwTime !== void 0 ? (s(), o("div", n1, [
          u[5] || (u[5] = e("i", { class: "pi pi-file-edit" }, null, -1)),
          u[6] || (u[6] = e("span", null, "ACW", -1)),
          e("span", o1, v(r(t.acwTime)), 1)
        ])) : h("", !0)
      ])) : h("", !0)
    ]));
  }
}), FC = /* @__PURE__ */ A(r1, [["__scopeId", "data-v-98b6df67"]]), i1 = { class: "trx-conf" }, c1 = { class: "trx-conf__header" }, u1 = { class: "trx-conf__header-info" }, d1 = { class: "trx-conf__count" }, _1 = { class: "trx-conf__participants" }, p1 = { class: "trx-conf__participant-avatar" }, v1 = {
  key: 0,
  class: "trx-conf__speaking-ring"
}, m1 = { class: "trx-conf__participant-info" }, f1 = { class: "trx-conf__participant-name" }, x1 = { class: "trx-conf__participant-num" }, h1 = { class: "trx-conf__participant-dur" }, $1 = { class: "trx-conf__participant-actions" }, g1 = ["title", "onClick"], b1 = ["onClick"], y1 = { class: "trx-conf__controls" }, k1 = /* @__PURE__ */ g({
  __name: "TrxConferencePanel",
  props: {
    participants: { default: () => [] },
    muted: { type: Boolean },
    onHold: { type: Boolean }
  },
  emits: ["muteParticipant", "kickParticipant", "addParticipant", "toggleMute", "toggleHold", "end"],
  setup(t, { emit: a }) {
    const r = a;
    function i(l) {
      if (!l) return "--:--";
      const n = Math.floor(l / 60), c = l % 60;
      return `${String(n).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
    }
    return (l, n) => (s(), o("div", i1, [
      e("div", c1, [
        e("div", u1, [
          n[5] || (n[5] = e("i", { class: "pi pi-users trx-conf__icon" }, null, -1)),
          e("div", null, [
            n[4] || (n[4] = e("div", { class: "trx-conf__title" }, "Conferência", -1)),
            e("div", d1, v(t.participants.length) + " participantes", 1)
          ])
        ]),
        e("button", {
          class: "trx-conf__add-btn",
          title: "Adicionar participante",
          onClick: n[0] || (n[0] = (c) => r("addParticipant"))
        }, [...n[6] || (n[6] = [
          e("i", { class: "pi pi-plus" }, null, -1)
        ])])
      ]),
      e("div", _1, [
        (s(!0), o(V, null, b(t.participants, (c) => (s(), o("div", {
          key: c.id,
          class: w(["trx-conf__participant", { "trx-conf__participant--speaking": c.speaking }])
        }, [
          e("div", p1, [
            N(v(c.name[0]) + " ", 1),
            c.speaking ? (s(), o("div", v1)) : h("", !0)
          ]),
          e("div", m1, [
            e("span", f1, v(c.name), 1),
            e("span", x1, v(c.number), 1)
          ]),
          e("span", h1, v(i(c.duration)), 1),
          e("div", $1, [
            e("button", {
              class: w(["trx-conf__p-btn", { muted: c.muted }]),
              title: c.muted ? "Ativar" : "Mutar",
              onClick: (u) => r("muteParticipant", c.id)
            }, [
              e("i", {
                class: w(c.muted ? "pi pi-microphone-off" : "pi pi-microphone")
              }, null, 2)
            ], 10, g1),
            c.role !== "host" ? (s(), o("button", {
              key: 0,
              class: "trx-conf__p-btn trx-conf__p-btn--kick",
              title: "Remover",
              onClick: (u) => r("kickParticipant", c.id)
            }, [...n[7] || (n[7] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])], 8, b1)) : h("", !0)
          ])
        ], 2))), 128))
      ]),
      e("div", y1, [
        e("button", {
          class: w(["trx-conf__ctrl-btn", { active: t.muted }]),
          title: "Mutar/Desmutar",
          onClick: n[1] || (n[1] = (c) => r("toggleMute"))
        }, [
          e("i", {
            class: w(t.muted ? "pi pi-microphone-off" : "pi pi-microphone")
          }, null, 2)
        ], 2),
        e("button", {
          class: w(["trx-conf__ctrl-btn", { active: t.onHold }]),
          title: "Colocar em espera",
          onClick: n[2] || (n[2] = (c) => r("toggleHold"))
        }, [...n[8] || (n[8] = [
          e("i", { class: "pi pi-pause" }, null, -1)
        ])], 2),
        e("button", {
          class: "trx-conf__ctrl-btn trx-conf__ctrl-btn--end",
          title: "Encerrar",
          onClick: n[3] || (n[3] = (c) => r("end"))
        }, [...n[9] || (n[9] = [
          e("i", {
            class: "pi pi-phone",
            style: { transform: "rotate(135deg)" }
          }, null, -1)
        ])])
      ])
    ]));
  }
}), OC = /* @__PURE__ */ A(k1, [["__scopeId", "data-v-a2f799aa"]]), w1 = { class: "trx-radar" }, T1 = ["width", "height", "viewBox"], C1 = ["points"], S1 = ["x1", "y1", "x2", "y2"], I1 = ["x", "y"], V1 = ["d", "fill"], B1 = ["d", "stroke"], P1 = ["cx", "cy", "fill"], A1 = {
  key: 0,
  class: "trx-radar__legend"
}, M1 = /* @__PURE__ */ g({
  __name: "TrxRadarChart",
  props: {
    axes: { default: () => [] },
    datasets: { default: () => [] },
    size: { default: 260 },
    max: { default: 100 },
    levels: { default: 4 },
    filled: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = ["var(--trx-accent-color)", "#f472b6", "#60a5fa", "#fb923c"], r = t, i = S(() => r.size / 2), l = S(() => r.size / 2), n = S(() => r.size / 2 - 24);
    function c(x) {
      return Math.PI * 2 * x / r.axes.length - Math.PI / 2;
    }
    function u(x, f) {
      const T = x / r.levels * n.value, $ = c(f);
      return [i.value + T * Math.cos($), l.value + T * Math.sin($)];
    }
    function _(x) {
      const f = n.value + 14, T = c(x);
      return [i.value + f * Math.cos(T), l.value + f * Math.sin(T)];
    }
    function d(x) {
      return x.map((f, T) => {
        const $ = Math.min(f, r.max) / r.max * n.value, C = c(T);
        return [i.value + $ * Math.cos(C), l.value + $ * Math.sin(C)];
      });
    }
    function p(x) {
      return x.map((f, T) => `${T === 0 ? "M" : "L"}${f[0].toFixed(1)},${f[1].toFixed(1)}`).join(" ") + " Z";
    }
    const m = S(
      () => Array.from(
        { length: r.levels },
        (x, f) => r.axes.map((T, $) => u(f + 1, $))
      )
    );
    return (x, f) => (s(), o("div", w1, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: `0 0 ${t.size} ${t.size}`,
        style: { width: "100%", "max-width": "100%" }
      }, [
        (s(!0), o(V, null, b(m.value, (T, $) => (s(), o("polygon", {
          key: $,
          points: T.map((C) => C.join(",")).join(" "),
          fill: "none",
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, C1))), 128)),
        (s(!0), o(V, null, b(t.axes, (T, $) => (s(), o("line", {
          key: $,
          x1: i.value,
          y1: l.value,
          x2: u(t.levels, $)[0],
          y2: u(t.levels, $)[1],
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, S1))), 128)),
        (s(!0), o(V, null, b(t.axes, (T, $) => (s(), o("text", {
          key: "l" + $,
          x: _($)[0],
          y: _($)[1],
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(T), 9, I1))), 128)),
        (s(!0), o(V, null, b(t.datasets, (T, $) => (s(), o("g", { key: $ }, [
          t.filled ? (s(), o("path", {
            key: 0,
            d: p(d(T.data)),
            fill: T.color ?? a[$ % a.length],
            "fill-opacity": "0.15"
          }, null, 8, V1)) : h("", !0),
          e("path", {
            d: p(d(T.data)),
            fill: "none",
            stroke: T.color ?? a[$ % a.length],
            "stroke-width": "2",
            "stroke-linejoin": "round"
          }, null, 8, B1),
          (s(!0), o(V, null, b(T.data, (C, M) => (s(), o("circle", {
            key: M,
            cx: d(T.data)[M][0],
            cy: d(T.data)[M][1],
            r: "3",
            fill: T.color ?? a[$ % a.length]
          }, null, 8, P1))), 128))
        ]))), 128))
      ], 8, T1)),
      t.datasets.length > 1 ? (s(), o("div", A1, [
        (s(!0), o(V, null, b(t.datasets, (T, $) => (s(), o("div", {
          key: $,
          class: "trx-radar__legend-item"
        }, [
          e("span", {
            class: "trx-radar__legend-dot",
            style: R({ background: T.color ?? a[$ % a.length] })
          }, null, 4),
          N(" " + v(T.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), jC = /* @__PURE__ */ A(M1, [["__scopeId", "data-v-7ae6d64b"]]), L1 = { class: "trx-bullet" }, z1 = {
  key: 0,
  class: "trx-bullet__label"
}, D1 = { class: "trx-bullet__values" }, E1 = { class: "trx-bullet__val" }, R1 = { class: "trx-bullet__tgt" }, N1 = /* @__PURE__ */ g({
  __name: "TrxBulletChart",
  props: {
    items: { default: () => [] },
    height: { default: 20 },
    unit: {},
    showLabels: { type: Boolean, default: !0 }
  },
  setup(t) {
    function a(l, n) {
      return Math.min(l / n * 100, 100);
    }
    function r(l) {
      return l.max ?? l.target * 1.5;
    }
    function i(l) {
      return l.color ?? "var(--trx-accent-color)";
    }
    return (l, n) => (s(), o("div", L1, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("div", {
        key: c.label,
        class: "trx-bullet__row"
      }, [
        t.showLabels ? (s(), o("div", z1, v(c.label), 1)) : h("", !0),
        e("div", {
          class: "trx-bullet__chart",
          style: R({ height: t.height + "px" })
        }, [
          e("div", {
            class: "trx-bullet__range trx-bullet__range--poor",
            style: R({ width: c.ranges ? a(c.ranges[0], r(c)) + "%" : "33%" })
          }, null, 4),
          e("div", {
            class: "trx-bullet__range trx-bullet__range--ok",
            style: R({ width: c.ranges ? a(c.ranges[1], r(c)) + "%" : "66%" })
          }, null, 4),
          n[0] || (n[0] = e("div", {
            class: "trx-bullet__range trx-bullet__range--good",
            style: { width: "100%" }
          }, null, -1)),
          e("div", {
            class: "trx-bullet__value-bar",
            style: R({ width: a(c.value, r(c)) + "%", background: i(c) })
          }, null, 4),
          e("div", {
            class: "trx-bullet__target-line",
            style: R({ left: a(c.target, r(c)) + "%" })
          }, null, 4)
        ], 4),
        e("div", D1, [
          e("span", E1, v(c.value) + v(t.unit), 1),
          e("span", R1, "/ " + v(c.target) + v(t.unit), 1)
        ])
      ]))), 128))
    ]));
  }
}), HC = /* @__PURE__ */ A(N1, [["__scopeId", "data-v-f642af30"]]), q1 = { class: "trx-waterfall" }, F1 = ["viewBox", "height"], O1 = ["x1", "y1", "x2", "y2"], j1 = ["x", "y"], H1 = ["x1", "y1", "x2", "y2"], U1 = ["x", "y", "width", "height", "fill"], W1 = ["x1", "y1", "x2", "y2"], G1 = ["x", "y"], K1 = ["x", "y", "fill"], vt = 600, Y1 = /* @__PURE__ */ g({
  __name: "TrxWaterfallChart",
  props: {
    items: { default: () => [] },
    height: { default: 220 },
    unit: {},
    positiveColor: { default: "var(--trx-success-color)" },
    negativeColor: { default: "var(--trx-danger-color)" },
    totalColor: { default: "var(--trx-accent-color)" }
  },
  setup(t) {
    const a = t, r = { top: 20, right: 16, bottom: 36, left: 50 }, i = S(() => vt - r.left - r.right), l = S(() => a.height - r.top - r.bottom), n = S(() => {
      let f = 0;
      return a.items.map((T) => {
        if (T.isTotal) {
          const C = f + T.value;
          return { ...T, start: 0, end: C, running: f };
        }
        const $ = f;
        return f += T.value, { ...T, start: $, end: f, running: f };
      });
    }), c = S(() => n.value.flatMap((f) => [f.start, f.end])), u = S(() => Math.min(...c.value, 0)), _ = S(() => Math.max(...c.value, 1)), d = S(() => i.value / a.items.length * 0.6);
    function p(f) {
      return r.top + l.value - (f - u.value) / (_.value - u.value) * l.value;
    }
    function m(f) {
      const T = i.value / a.items.length;
      return r.left + f * T + (T - d.value) / 2;
    }
    const x = S(
      () => Array.from({ length: 5 }, (f, T) => {
        const $ = u.value + T / 4 * (_.value - u.value);
        return { v: Math.round($), y: p($) };
      })
    );
    return (f, T) => (s(), o("div", q1, [
      (s(), o("svg", {
        viewBox: `0 0 ${vt} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("line", {
          key: $.v,
          x1: r.left,
          y1: $.y,
          x2: r.left + i.value,
          y2: $.y,
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, O1))), 128)),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: r.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, j1))), 128)),
        e("line", {
          x1: r.left,
          y1: p(0),
          x2: r.left + i.value,
          y2: p(0),
          stroke: "var(--trx-text-secondary)",
          "stroke-width": "1.5"
        }, null, 8, H1),
        (s(!0), o(V, null, b(n.value, ($, C) => (s(), o("g", { key: C }, [
          e("rect", {
            x: m(C),
            y: Math.min(p($.start), p($.end)),
            width: d.value,
            height: Math.abs(p($.start) - p($.end)),
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor,
            rx: "2"
          }, null, 8, U1),
          C < n.value.length - 1 && !$.isTotal && !n.value[C + 1].isTotal ? (s(), o("line", {
            key: 0,
            x1: m(C) + d.value,
            y1: p($.end),
            x2: m(C + 1),
            y2: p($.end),
            stroke: "var(--trx-border-color)",
            "stroke-width": "1",
            "stroke-dasharray": "3,3"
          }, null, 8, W1)) : h("", !0),
          e("text", {
            x: m(C) + d.value / 2,
            y: r.top + l.value + 18,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v($.label), 9, G1),
          e("text", {
            x: m(C) + d.value / 2,
            y: Math.min(p($.start), p($.end)) - 4,
            "text-anchor": "middle",
            "font-size": "9",
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor
          }, v($.value > 0 ? "+" : "") + v($.value), 9, K1)
        ]))), 128))
      ], 8, F1))
    ]));
  }
}), UC = /* @__PURE__ */ A(Y1, [["__scopeId", "data-v-246079c5"]]), J1 = { class: "trx-hbar" }, X1 = {
  key: 0,
  class: "trx-hbar__loading"
}, Q1 = {
  key: 1,
  class: "trx-hbar__empty"
}, Z1 = {
  key: 2,
  class: "trx-hbar__list"
}, t$ = { class: "trx-hbar__label-row" }, e$ = { class: "trx-hbar__label" }, s$ = {
  key: 0,
  class: "trx-hbar__values"
}, a$ = {
  key: 0,
  class: "trx-hbar__target-val"
}, l$ = { class: "trx-hbar__track" }, n$ = /* @__PURE__ */ g({
  __name: "TrxHorizontalBar",
  props: {
    items: { default: () => [] },
    unit: {},
    showValues: { type: Boolean, default: !0 },
    showTarget: { type: Boolean, default: !0 },
    maxValue: {},
    loading: { type: Boolean }
  },
  setup(t) {
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa", "#facc15"];
    function r(i, l) {
      return l ?? Math.max(...i.map((n) => Math.max(n.value, n.target ?? 0)), 1);
    }
    return (i, l) => (s(), o("div", J1, [
      t.loading ? (s(), o("div", X1, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.items.length ? (s(), o("div", Z1, [
        (s(!0), o(V, null, b(t.items, (n, c) => (s(), o("div", {
          key: n.label,
          class: "trx-hbar__item"
        }, [
          e("div", t$, [
            e("span", e$, v(n.label), 1),
            t.showValues ? (s(), o("div", s$, [
              e("span", {
                class: "trx-hbar__value",
                style: R({ color: n.color ?? a[c % a.length] })
              }, v(n.value.toLocaleString("pt-BR")) + v(t.unit), 5),
              t.showTarget && n.target ? (s(), o("span", a$, "/ " + v(n.target) + v(t.unit), 1)) : h("", !0)
            ])) : h("", !0)
          ]),
          e("div", l$, [
            e("div", {
              class: "trx-hbar__fill",
              style: R({
                width: n.value / r(t.items, t.maxValue) * 100 + "%",
                background: n.color ?? a[c % a.length]
              })
            }, null, 4),
            t.showTarget && n.target ? (s(), o("div", {
              key: 0,
              class: "trx-hbar__target-line",
              style: R({ left: n.target / r(t.items, t.maxValue) * 100 + "%" })
            }, null, 4)) : h("", !0)
          ])
        ]))), 128))
      ])) : (s(), o("div", Q1, "Sem dados"))
    ]));
  }
}), WC = /* @__PURE__ */ A(n$, [["__scopeId", "data-v-699106b6"]]), o$ = { class: "trx-scatter" }, r$ = ["viewBox", "height"], i$ = ["x1", "y1", "x2", "y2"], c$ = ["x1", "y1", "x2", "y2"], u$ = ["x", "y"], d$ = ["x", "y"], _$ = ["cx", "cy", "r", "fill"], p$ = { key: 0 }, v$ = ["x", "y"], m$ = {
  key: 0,
  class: "trx-scatter__legend"
}, mt = 600, f$ = /* @__PURE__ */ g({
  __name: "TrxScatterChart",
  props: {
    datasets: { default: () => [] },
    height: { default: 240 },
    xLabel: {},
    yLabel: {},
    showGrid: { type: Boolean, default: !0 },
    showTooltip: { type: Boolean }
  },
  setup(t) {
    const a = ["var(--trx-accent-color)", "#f472b6", "#60a5fa", "#fb923c", "#a78bfa"], r = t, i = { top: 16, right: 16, bottom: 36, left: 44 }, l = S(() => mt - i.left - i.right), n = S(() => r.height - i.top - i.bottom), c = S(() => r.datasets.flatMap((C) => C.data.map((M) => M.x))), u = S(() => r.datasets.flatMap((C) => C.data.map((M) => M.y))), _ = S(() => Math.min(...c.value, 0)), d = S(() => Math.max(...c.value, 1)), p = S(() => Math.min(...u.value, 0)), m = S(() => Math.max(...u.value, 1));
    function x(C) {
      return i.left + (C - _.value) / (d.value - _.value) * l.value;
    }
    function f(C) {
      return i.top + n.value - (C - p.value) / (m.value - p.value) * n.value;
    }
    const T = S(() => Array.from({ length: 5 }, (C, M) => {
      const E = _.value + M / 4 * (d.value - _.value);
      return { v: Math.round(E), x: x(E) };
    })), $ = S(() => Array.from({ length: 5 }, (C, M) => {
      const E = p.value + M / 4 * (m.value - p.value);
      return { v: Math.round(E), y: f(E) };
    }));
    return (C, M) => (s(), o("div", o$, [
      (s(), o("svg", {
        viewBox: `0 0 ${mt} ${t.height}`,
        height: t.height,
        preserveAspectRatio: "none",
        style: { width: "100%" }
      }, [
        t.showGrid ? (s(), o(V, { key: 0 }, [
          (s(!0), o(V, null, b($.value, (E) => (s(), o("line", {
            key: "gy" + E.v,
            x1: i.left,
            y1: E.y,
            x2: i.left + l.value,
            y2: E.y,
            stroke: "var(--trx-border-color)",
            "stroke-width": "1"
          }, null, 8, i$))), 128)),
          (s(!0), o(V, null, b(T.value, (E) => (s(), o("line", {
            key: "gx" + E.v,
            x1: E.x,
            y1: i.top,
            x2: E.x,
            y2: i.top + n.value,
            stroke: "var(--trx-border-color)",
            "stroke-width": "1"
          }, null, 8, c$))), 128))
        ], 64)) : h("", !0),
        (s(!0), o(V, null, b($.value, (E) => (s(), o("text", {
          key: "yl" + E.v,
          x: i.left - 6,
          y: E.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, u$))), 128)),
        (s(!0), o(V, null, b(T.value, (E) => (s(), o("text", {
          key: "xl" + E.v,
          x: E.x,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, d$))), 128)),
        (s(!0), o(V, null, b(t.datasets, (E, F) => (s(), o("g", { key: F }, [
          (s(!0), o(V, null, b(E.data, (q, K) => (s(), o("circle", {
            key: K,
            cx: x(q.x),
            cy: f(q.y),
            r: q.size ?? 5,
            fill: E.color ?? a[F % a.length],
            "fill-opacity": "0.8"
          }, [
            q.label ? (s(), o("title", p$, v(q.label) + ": (" + v(q.x) + ", " + v(q.y) + ")", 1)) : h("", !0)
          ], 8, _$))), 128))
        ]))), 128)),
        t.xLabel ? (s(), o("text", {
          key: 1,
          x: i.left + l.value / 2,
          y: t.height - 2,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(t.xLabel), 9, v$)) : h("", !0)
      ], 8, r$)),
      t.datasets.length > 1 ? (s(), o("div", m$, [
        (s(!0), o(V, null, b(t.datasets, (E, F) => (s(), o("div", {
          key: F,
          class: "trx-scatter__legend-item"
        }, [
          e("span", {
            class: "trx-scatter__legend-dot",
            style: R({ background: E.color ?? a[F % a.length] })
          }, null, 4),
          N(" " + v(E.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), GC = /* @__PURE__ */ A(f$, [["__scopeId", "data-v-6225f708"]]), x$ = { class: "trx-pie" }, h$ = ["width", "height", "viewBox"], $$ = ["d", "fill"], g$ = ["x", "y"], b$ = {
  key: 0,
  class: "trx-pie__legend"
}, y$ = { class: "trx-pie__legend-label" }, k$ = { class: "trx-pie__legend-pct" }, w$ = /* @__PURE__ */ g({
  __name: "TrxPieChart",
  props: {
    slices: { default: () => [] },
    size: { default: 180 },
    showLegend: { type: Boolean, default: !0 },
    showLabels: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa", "#facc15", "#34d399", "#f87171"], r = t, i = S(() => r.size / 2), l = S(() => r.size / 2), n = S(() => r.size / 2 - 4), c = S(() => r.slices.reduce((_, d) => _ + d.value, 0) || 1), u = S(() => {
      let _ = -Math.PI / 2;
      return r.slices.map((d, p) => {
        const m = d.value / c.value, x = m * 2 * Math.PI, f = _;
        _ += x;
        const T = i.value + n.value * Math.cos(f), $ = l.value + n.value * Math.sin(f), C = i.value + n.value * Math.cos(_), M = l.value + n.value * Math.sin(_), E = x > Math.PI ? 1 : 0, F = f + x / 2;
        return {
          ...d,
          color: d.color ?? a[p % a.length],
          pct: Math.round(m * 100),
          d: `M ${i.value} ${l.value} L ${T} ${$} A ${n.value} ${n.value} 0 ${E} 1 ${C} ${M} Z`,
          labelX: i.value + n.value * 0.65 * Math.cos(F),
          labelY: l.value + n.value * 0.65 * Math.sin(F)
        };
      });
    });
    return (_, d) => (s(), o("div", x$, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: `0 0 ${t.size} ${t.size}`,
        style: { "max-width": "100%" }
      }, [
        (s(!0), o(V, null, b(u.value, (p, m) => (s(), o("path", {
          key: m,
          d: p.d,
          fill: p.color,
          stroke: "var(--trx-bg-card)",
          "stroke-width": "2"
        }, [
          e("title", null, v(p.label) + ": " + v(p.pct) + "%", 1)
        ], 8, $$))), 128)),
        t.showLabels ? (s(!0), o(V, { key: 0 }, b(u.value.filter((p) => p.pct > 8), (p, m) => (s(), o("text", {
          key: "l" + m,
          x: p.labelX,
          y: p.labelY,
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "11",
          "font-weight": "700",
          fill: "white"
        }, v(p.pct) + "%", 9, g$))), 128)) : h("", !0)
      ], 8, h$)),
      t.showLegend ? (s(), o("div", b$, [
        (s(!0), o(V, null, b(u.value, (p, m) => (s(), o("div", {
          key: m,
          class: "trx-pie__legend-item"
        }, [
          e("span", {
            class: "trx-pie__legend-dot",
            style: R({ background: p.color })
          }, null, 4),
          e("span", y$, v(p.label), 1),
          e("span", k$, v(p.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), KC = /* @__PURE__ */ A(w$, [["__scopeId", "data-v-a92927e0"]]), T$ = {
  key: 0,
  class: "trx-typing__name"
}, C$ = {
  key: 1,
  class: "trx-typing__text"
}, S$ = /* @__PURE__ */ g({
  __name: "TrxTypingIndicator",
  props: {
    name: {},
    visible: { type: Boolean, default: !0 },
    variant: { default: "bubble" }
  },
  setup(t) {
    return (a, r) => (s(), L(j, { name: "trx-typing-fade" }, {
      default: B(() => [
        t.visible ? (s(), o("div", {
          key: 0,
          class: w(["trx-typing", `trx-typing--${t.variant}`])
        }, [
          t.variant === "bubble" ? (s(), o(V, { key: 0 }, [
            r[0] || (r[0] = e("div", { class: "trx-typing__bubble" }, [
              e("span", { class: "trx-typing__dot" }),
              e("span", { class: "trx-typing__dot" }),
              e("span", { class: "trx-typing__dot" })
            ], -1)),
            t.name ? (s(), o("span", T$, v(t.name) + " está digitando...", 1)) : h("", !0)
          ], 64)) : (s(), o("span", C$, [
            N(v(t.name ? `${t.name} está digitando` : "Digitando") + " ", 1),
            r[1] || (r[1] = e("span", { class: "trx-typing__ellipsis" }, [
              e("span", null, "."),
              e("span", null, "."),
              e("span", null, ".")
            ], -1))
          ]))
        ], 2)) : h("", !0)
      ]),
      _: 1
    }));
  }
}), YC = /* @__PURE__ */ A(S$, [["__scopeId", "data-v-04651ca9"]]), I$ = { class: "trx-quick-replies" }, V$ = ["disabled", "onClick"], B$ = /* @__PURE__ */ g({
  __name: "TrxQuickReplies",
  props: {
    replies: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", I$, [
      (s(!0), o(V, null, b(t.replies, (n) => (s(), o("button", {
        key: n.id,
        class: "trx-quick-replies__btn",
        disabled: t.disabled,
        onClick: (c) => r("select", n)
      }, v(n.label), 9, V$))), 128))
    ]));
  }
}), JC = /* @__PURE__ */ A(B$, [["__scopeId", "data-v-082e109e"]]), P$ = { class: "trx-canned__search-wrap" }, A$ = ["placeholder"], M$ = { class: "trx-canned__list" }, L$ = ["onClick", "onMouseenter"], z$ = { class: "trx-canned__shortcut" }, D$ = { class: "trx-canned__info" }, E$ = { class: "trx-canned__title" }, R$ = { class: "trx-canned__preview" }, N$ = {
  key: 0,
  class: "trx-canned__cat"
}, q$ = {
  key: 0,
  class: "trx-canned__empty"
}, F$ = /* @__PURE__ */ g({
  __name: "TrxCannedResponses",
  props: {
    responses: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    trigger: { default: "/" }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D(0), c = S(
      () => r.responses.filter(
        (d) => !l.value || d.shortcut.includes(l.value) || d.title.toLowerCase().includes(l.value.toLowerCase()) || d.content.toLowerCase().includes(l.value.toLowerCase())
      )
    );
    function u(d) {
      i("select", d), i("update:modelValue", !1), l.value = "";
    }
    function _(d) {
      d.key === "ArrowDown" && (d.preventDefault(), n.value = Math.min(n.value + 1, c.value.length - 1)), d.key === "ArrowUp" && (d.preventDefault(), n.value = Math.max(n.value - 1, 0)), d.key === "Enter" && c.value[n.value] && (d.preventDefault(), u(c.value[n.value])), d.key === "Escape" && i("update:modelValue", !1);
    }
    return (d, p) => t.modelValue ? (s(), o("div", {
      key: 0,
      class: "trx-canned",
      onKeydown: _
    }, [
      e("div", P$, [
        p[4] || (p[4] = e("i", { class: "pi pi-search trx-canned__search-icon" }, null, -1)),
        Y(e("input", {
          "onUpdate:modelValue": p[0] || (p[0] = (m) => l.value = m),
          class: "trx-canned__search",
          placeholder: `Buscar resposta (${t.trigger}...)`,
          autofocus: "",
          onInput: p[1] || (p[1] = (m) => n.value = 0)
        }, null, 40, A$), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-canned__close",
          onClick: p[2] || (p[2] = (m) => i("update:modelValue", !1))
        }, [...p[3] || (p[3] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])])
      ]),
      e("div", M$, [
        (s(!0), o(V, null, b(c.value, (m, x) => (s(), o("div", {
          key: m.id,
          class: w(["trx-canned__item", { "trx-canned__item--highlighted": x === n.value }]),
          onClick: (f) => u(m),
          onMouseenter: (f) => n.value = x
        }, [
          e("code", z$, v(m.shortcut), 1),
          e("div", D$, [
            e("span", E$, v(m.title), 1),
            e("span", R$, v(m.content), 1)
          ]),
          m.category ? (s(), o("span", N$, v(m.category), 1)) : h("", !0)
        ], 42, L$))), 128)),
        c.value.length ? h("", !0) : (s(), o("div", q$, "Nenhuma resposta encontrada"))
      ])
    ], 32)) : h("", !0);
  }
}), XC = /* @__PURE__ */ A(F$, [["__scopeId", "data-v-b64dd5e1"]]), O$ = { class: "trx-email" }, j$ = { class: "trx-email__field" }, H$ = { class: "trx-email__chips" }, U$ = ["onClick"], W$ = {
  key: 0,
  class: "trx-email__field"
}, G$ = { class: "trx-email__chips" }, K$ = ["onClick"], Y$ = { class: "trx-email__field" }, J$ = { class: "trx-email__footer" }, X$ = { class: "trx-email__footer-left" }, Q$ = {
  class: "trx-email__attach-btn",
  title: "Anexar arquivo"
}, Z$ = {
  key: 0,
  class: "trx-email__attach-count"
}, tg = { class: "trx-email__footer-right" }, eg = ["disabled"], sg = /* @__PURE__ */ g({
  __name: "TrxEmailComposer",
  emits: ["send", "discard"],
  setup(t, { emit: a }) {
    const r = D({ to: [], cc: [], subject: "", body: "" }), i = D(""), l = D(""), n = D(!1), c = D(!1), u = a;
    function _(x, f) {
      const T = f.value.trim();
      T && T.includes("@") && (r.value[x] = [...r.value[x] ?? [], T], f.value = "", x === "to" ? i.value = "" : l.value = "");
    }
    function d(x, f) {
      const T = [...r.value[x] ?? []];
      T.splice(f, 1), r.value[x] = T;
    }
    async function p() {
      c.value = !0, u("send", { ...r.value }), c.value = !1;
    }
    function m(x) {
      const f = x.target.files;
      f && (r.value.attachments = [...r.value.attachments ?? [], ...Array.from(f)]);
    }
    return (x, f) => {
      var T;
      return s(), o("div", O$, [
        e("div", j$, [
          f[12] || (f[12] = e("label", { class: "trx-email__label" }, "Para", -1)),
          e("div", H$, [
            (s(!0), o(V, null, b(r.value.to, ($, C) => (s(), o("span", {
              key: C,
              class: "trx-email__chip"
            }, [
              N(v($) + " ", 1),
              e("button", {
                class: "trx-email__chip-remove",
                onClick: (M) => d("to", C)
              }, [...f[11] || (f[11] = [
                e("i", { class: "pi pi-times" }, null, -1)
              ])], 8, U$)
            ]))), 128)),
            Y(e("input", {
              "onUpdate:modelValue": f[0] || (f[0] = ($) => i.value = $),
              class: "trx-email__chip-input",
              placeholder: "email@exemplo.com",
              onKeydown: [
                f[1] || (f[1] = at(H(($) => _("to", { value: i.value }), ["prevent"]), ["enter"])),
                f[2] || (f[2] = at(H(($) => _("to", { value: i.value }), ["prevent"]), ["tab"]))
              ],
              onBlur: f[3] || (f[3] = ($) => _("to", { value: i.value }))
            }, null, 544), [
              [J, i.value]
            ])
          ]),
          n.value ? h("", !0) : (s(), o("button", {
            key: 0,
            class: "trx-email__cc-toggle",
            onClick: f[4] || (f[4] = ($) => n.value = !0)
          }, "CC"))
        ]),
        n.value ? (s(), o("div", W$, [
          f[14] || (f[14] = e("label", { class: "trx-email__label" }, "CC", -1)),
          e("div", G$, [
            (s(!0), o(V, null, b(r.value.cc, ($, C) => (s(), o("span", {
              key: C,
              class: "trx-email__chip"
            }, [
              N(v($) + " ", 1),
              e("button", {
                class: "trx-email__chip-remove",
                onClick: (M) => d("cc", C)
              }, [...f[13] || (f[13] = [
                e("i", { class: "pi pi-times" }, null, -1)
              ])], 8, K$)
            ]))), 128)),
            Y(e("input", {
              "onUpdate:modelValue": f[5] || (f[5] = ($) => l.value = $),
              class: "trx-email__chip-input",
              placeholder: "cc@exemplo.com",
              onKeydown: [
                f[6] || (f[6] = at(H(($) => _("cc", { value: l.value }), ["prevent"]), ["enter"])),
                f[7] || (f[7] = at(H(($) => _("cc", { value: l.value }), ["prevent"]), ["tab"]))
              ]
            }, null, 544), [
              [J, l.value]
            ])
          ])
        ])) : h("", !0),
        e("div", Y$, [
          f[15] || (f[15] = e("label", { class: "trx-email__label" }, "Assunto", -1)),
          Y(e("input", {
            "onUpdate:modelValue": f[8] || (f[8] = ($) => r.value.subject = $),
            class: "trx-email__subject",
            placeholder: "Assunto..."
          }, null, 512), [
            [J, r.value.subject]
          ])
        ]),
        Y(e("textarea", {
          "onUpdate:modelValue": f[9] || (f[9] = ($) => r.value.body = $),
          class: "trx-email__body",
          placeholder: "Escreva sua mensagem...",
          rows: "8"
        }, null, 512), [
          [J, r.value.body]
        ]),
        e("div", J$, [
          e("div", X$, [
            e("label", Q$, [
              f[16] || (f[16] = e("i", { class: "pi pi-paperclip" }, null, -1)),
              e("input", {
                type: "file",
                multiple: "",
                hidden: "",
                onChange: m
              }, null, 32)
            ]),
            (T = r.value.attachments) != null && T.length ? (s(), o("span", Z$, v(r.value.attachments.length) + " anexo(s) ", 1)) : h("", !0)
          ]),
          e("div", tg, [
            e("button", {
              class: "trx-email__btn trx-email__btn--discard",
              onClick: f[10] || (f[10] = ($) => u("discard"))
            }, "Descartar"),
            e("button", {
              class: "trx-email__btn trx-email__btn--send",
              disabled: !r.value.to.length || !r.value.subject || !r.value.body || c.value,
              onClick: p
            }, [
              f[17] || (f[17] = e("i", { class: "pi pi-send" }, null, -1)),
              N(" " + v(c.value ? "Enviando..." : "Enviar"), 1)
            ], 8, eg)
          ])
        ])
      ]);
    };
  }
}), QC = /* @__PURE__ */ A(sg, [["__scopeId", "data-v-96c2a2b1"]]), ag = { class: "trx-tpl" }, lg = { class: "trx-tpl__search" }, ng = { class: "trx-tpl__layout" }, og = { class: "trx-tpl__list" }, rg = {
  key: 0,
  class: "trx-tpl__loading"
}, ig = { class: "trx-tpl__cat-label" }, cg = ["onClick"], ug = { class: "trx-tpl__item-name" }, dg = { class: "trx-tpl__item-lang" }, _g = { class: "trx-tpl__preview" }, pg = {
  key: 0,
  class: "trx-tpl__no-select"
}, vg = { class: "trx-tpl__preview-body" }, mg = {
  key: 0,
  class: "trx-tpl__vars"
}, fg = { class: "trx-tpl__var-label" }, xg = ["onUpdate:modelValue", "placeholder"], hg = /* @__PURE__ */ g({
  __name: "TrxTemplateSelector",
  props: {
    templates: { default: () => [] },
    modelValue: { default: null },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(""), n = D(null), c = D({}), u = S(() => [...new Set(r.templates.map((x) => x.category))]), _ = S(
      () => r.templates.filter(
        (x) => !l.value || x.name.toLowerCase().includes(l.value.toLowerCase()) || x.body.toLowerCase().includes(l.value.toLowerCase())
      )
    );
    function d(x) {
      n.value = x, c.value = Object.fromEntries((x.variables ?? []).map((f) => [f, ""])), i("update:modelValue", x.id);
    }
    function p() {
      n.value && i("select", n.value, c.value);
    }
    function m() {
      if (!n.value) return "";
      let x = n.value.body;
      return Object.entries(c.value).forEach(([f, T]) => {
        x = x.replace(new RegExp(f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), T || f);
      }), x;
    }
    return (x, f) => {
      var T;
      return s(), o("div", ag, [
        e("div", lg, [
          f[1] || (f[1] = e("i", { class: "pi pi-search trx-tpl__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": f[0] || (f[0] = ($) => l.value = $),
            class: "trx-tpl__search-input",
            placeholder: "Buscar template..."
          }, null, 512), [
            [J, l.value]
          ])
        ]),
        e("div", ng, [
          e("div", og, [
            t.loading ? (s(), o("div", rg, [...f[2] || (f[2] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : (s(!0), o(V, { key: 1 }, b(u.value, ($) => (s(), o("div", { key: $ }, [
              e("div", ig, v($), 1),
              (s(!0), o(V, null, b(_.value.filter((C) => C.category === $), (C) => {
                var M;
                return s(), o("div", {
                  key: C.id,
                  class: w(["trx-tpl__item", { "trx-tpl__item--active": ((M = n.value) == null ? void 0 : M.id) === C.id }]),
                  onClick: (E) => d(C)
                }, [
                  e("span", ug, v(C.name), 1),
                  e("span", dg, v(C.language), 1)
                ], 10, cg);
              }), 128))
            ]))), 128))
          ]),
          e("div", _g, [
            n.value ? (s(), o(V, { key: 1 }, [
              e("div", vg, v(m()), 1),
              (T = n.value.variables) != null && T.length ? (s(), o("div", mg, [
                f[4] || (f[4] = e("div", { class: "trx-tpl__vars-title" }, "Variáveis", -1)),
                (s(!0), o(V, null, b(n.value.variables, ($) => (s(), o("div", {
                  key: $,
                  class: "trx-tpl__var-row"
                }, [
                  e("label", fg, v($), 1),
                  Y(e("input", {
                    "onUpdate:modelValue": (C) => c.value[$] = C,
                    class: "trx-tpl__var-input",
                    placeholder: $
                  }, null, 8, xg), [
                    [J, c.value[$]]
                  ])
                ]))), 128))
              ])) : h("", !0),
              e("button", {
                class: "trx-tpl__confirm-btn",
                onClick: p
              }, [...f[5] || (f[5] = [
                e("i", { class: "pi pi-check" }, null, -1),
                N(" Usar Template ", -1)
              ])])
            ], 64)) : (s(), o("div", pg, [...f[3] || (f[3] = [
              e("i", {
                class: "pi pi-file",
                style: { "font-size": "1.5rem" }
              }, null, -1),
              e("span", null, "Selecione um template", -1)
            ])]))
          ])
        ])
      ]);
    };
  }
}), ZC = /* @__PURE__ */ A(hg, [["__scopeId", "data-v-6e07f607"]]), $g = { class: "trx-sentiment__icon-wrap" }, gg = { class: "trx-sentiment__emoji" }, bg = { class: "trx-sentiment__info" }, yg = { class: "trx-sentiment__label" }, kg = {
  key: 0,
  class: "trx-sentiment__score"
}, wg = {
  key: 0,
  class: "trx-sentiment__bar-wrap"
}, Tg = /* @__PURE__ */ g({
  __name: "TrxSentimentIndicator",
  props: {
    sentiment: { default: "unknown" },
    score: { default: 0 },
    label: {},
    showScore: { type: Boolean },
    size: { default: "md" }
  },
  setup(t) {
    const a = t, r = {
      positive: { icon: "pi pi-face-smile", label: "Positivo", color: "var(--trx-success-color)", emoji: "😊" },
      neutral: { icon: "pi pi-minus-circle", label: "Neutro", color: "var(--trx-warning-color)", emoji: "😐" },
      negative: { icon: "pi pi-face-sad", label: "Negativo", color: "var(--trx-danger-color)", emoji: "😟" },
      unknown: { icon: "pi pi-question-circle", label: "Indefinido", color: "var(--trx-text-secondary)", emoji: "❓" }
    }, i = S(() => r[a.sentiment]), l = S(() => `${a.score >= 0 ? "+" : ""}${Math.round(a.score * 100)}`);
    return (n, c) => (s(), o("div", {
      class: w(["trx-sentiment", `trx-sentiment--${t.size}`]),
      style: R({ "--sc": i.value.color })
    }, [
      e("div", $g, [
        e("span", gg, v(i.value.emoji), 1)
      ]),
      e("div", bg, [
        e("span", yg, v(t.label ?? i.value.label), 1),
        t.showScore && t.sentiment !== "unknown" ? (s(), o("span", kg, v(l.value), 1)) : h("", !0)
      ]),
      t.showScore && t.sentiment !== "unknown" ? (s(), o("div", wg, [
        e("div", {
          class: "trx-sentiment__bar",
          style: R({ width: Math.abs(t.score) * 100 + "%" })
        }, null, 4)
      ])) : h("", !0)
    ], 6));
  }
}), t4 = /* @__PURE__ */ A(Tg, [["__scopeId", "data-v-0cf3b19c"]]), Cg = { class: "trx-bot-bubble" }, Sg = { class: "trx-bot-bubble__avatar" }, Ig = ["src", "alt"], Vg = {
  key: 1,
  class: "trx-bot-bubble__avatar-init"
}, Bg = { class: "trx-bot-bubble__content" }, Pg = { class: "trx-bot-bubble__name" }, Ag = { class: "trx-bot-bubble__message" }, Mg = {
  key: 0,
  class: "trx-bot-bubble__typing"
}, Lg = { class: "trx-bot-bubble__text" }, zg = {
  key: 0,
  class: "trx-bot-bubble__options"
}, Dg = ["onClick"], Eg = {
  key: 0,
  class: "trx-bot-bubble__time"
}, Rg = /* @__PURE__ */ g({
  __name: "TrxBotBubble",
  props: {
    message: {},
    botName: { default: "Bot" },
    botAvatar: {},
    time: {},
    loading: { type: Boolean, default: !1 },
    options: { default: () => [] }
  },
  emits: ["optionSelect"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", Cg, [
      e("div", Sg, [
        t.botAvatar ? (s(), o("img", {
          key: 0,
          src: t.botAvatar,
          alt: t.botName,
          class: "trx-bot-bubble__avatar-img"
        }, null, 8, Ig)) : (s(), o("div", Vg, [...l[0] || (l[0] = [
          e("i", { class: "pi pi-android" }, null, -1)
        ])]))
      ]),
      e("div", Bg, [
        e("div", Pg, v(t.botName), 1),
        e("div", Ag, [
          t.loading ? (s(), o("div", Mg, [...l[1] || (l[1] = [
            e("span", null, null, -1),
            e("span", null, null, -1),
            e("span", null, null, -1)
          ])])) : (s(), o(V, { key: 1 }, [
            e("p", Lg, v(t.message), 1),
            t.options.length ? (s(), o("div", zg, [
              (s(!0), o(V, null, b(t.options, (n) => (s(), o("button", {
                key: n,
                class: "trx-bot-bubble__option",
                onClick: (c) => r("optionSelect", n)
              }, v(n), 9, Dg))), 128))
            ])) : h("", !0)
          ], 64))
        ]),
        t.time ? (s(), o("span", Eg, v(t.time), 1)) : h("", !0)
      ])
    ]));
  }
}), e4 = /* @__PURE__ */ A(Rg, [["__scopeId", "data-v-fdd3fdf6"]]), Ng = { class: "trx-tz__content" }, qg = { class: "trx-tz__time" }, Fg = { class: "trx-tz__meta" }, Og = {
  key: 0,
  class: "trx-tz__date"
}, jg = { class: "trx-tz__offset" }, Hg = {
  key: 0,
  class: "trx-tz__local"
}, Ug = { class: "trx-tz__local-time" }, Wg = /* @__PURE__ */ g({
  __name: "TrxContactTimezone",
  props: {
    timezone: { default: "America/Sao_Paulo" },
    contactName: {},
    showClock: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, r = D(/* @__PURE__ */ new Date());
    let i;
    W(() => {
      i = setInterval(() => {
        r.value = /* @__PURE__ */ new Date();
      }, 1e3);
    }), G(() => clearInterval(i));
    const l = S(() => {
      try {
        return r.value.toLocaleTimeString("pt-BR", { timeZone: a.timezone, hour: "2-digit", minute: "2-digit", second: a.compact ? void 0 : "2-digit" });
      } catch {
        return "--:--";
      }
    }), n = S(() => {
      try {
        return r.value.toLocaleDateString("pt-BR", { timeZone: a.timezone, weekday: "short", day: "2-digit", month: "short" });
      } catch {
        return "";
      }
    }), c = S(() => r.value.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })), u = S(() => {
      var m;
      try {
        return ((m = new Intl.DateTimeFormat("en-US", { timeZone: a.timezone, timeZoneName: "short" }).formatToParts(r.value).find((T) => T.type === "timeZoneName")) == null ? void 0 : m.value) ?? a.timezone;
      } catch {
        return a.timezone;
      }
    }), _ = S(() => {
      try {
        return parseInt(r.value.toLocaleString("pt-BR", { timeZone: a.timezone, hour: "2-digit", hour12: !1 }));
      } catch {
        return 12;
      }
    }), d = S(() => _.value >= 8 && _.value < 18), p = S(() => _.value < 7 || _.value >= 22);
    return (m, x) => (s(), o("div", {
      class: w(["trx-tz", { "trx-tz--compact": t.compact }])
    }, [
      e("div", {
        class: w(["trx-tz__icon-wrap", p.value ? "night" : d.value ? "day" : "evening"])
      }, [
        e("i", {
          class: w(p.value ? "pi pi-moon" : "pi pi-sun")
        }, null, 2)
      ], 2),
      e("div", Ng, [
        e("div", qg, v(l.value), 1),
        e("div", Fg, [
          t.compact ? h("", !0) : (s(), o("span", Og, v(n.value), 1)),
          e("span", jg, v(u.value), 1),
          e("span", {
            class: w(["trx-tz__status", p.value ? "night" : d.value ? "business" : "off"])
          }, v(p.value ? "Noite" : d.value ? "Horário comercial" : "Fora do horário"), 3)
        ])
      ]),
      t.compact ? h("", !0) : (s(), o("div", Hg, [
        x[0] || (x[0] = e("span", { class: "trx-tz__local-label" }, "Seu horário:", -1)),
        e("span", Ug, v(c.value), 1)
      ]))
    ], 2));
  }
}), s4 = /* @__PURE__ */ A(Wg, [["__scopeId", "data-v-61352836"]]), Gg = { class: "trx-split__pane trx-split__pane--second" }, Kg = /* @__PURE__ */ g({
  __name: "TrxSplitPane",
  props: {
    direction: { default: "horizontal" },
    initialSize: { default: 50 },
    minSize: { default: 15 },
    maxSize: { default: 85 }
  },
  setup(t) {
    const a = t, r = D(a.initialSize), i = D(!1), l = D();
    function n(_) {
      i.value = !0, document.addEventListener("mousemove", c), document.addEventListener("touchmove", c), document.addEventListener("mouseup", u), document.addEventListener("touchend", u), _.preventDefault();
    }
    function c(_) {
      if (!i.value || !l.value) return;
      const d = l.value.getBoundingClientRect(), p = _ instanceof MouseEvent ? a.direction === "horizontal" ? _.clientX : _.clientY : a.direction === "horizontal" ? _.touches[0].clientX : _.touches[0].clientY, m = a.direction === "horizontal" ? d.width : d.height, x = p - (a.direction === "horizontal" ? d.left : d.top), f = Math.round(x / m * 100);
      r.value = Math.max(a.minSize, Math.min(a.maxSize, f));
    }
    function u() {
      i.value = !1, document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", c), document.removeEventListener("mouseup", u), document.removeEventListener("touchend", u);
    }
    return G(u), (_, d) => (s(), o("div", {
      ref_key: "container",
      ref: l,
      class: w(["trx-split", [`trx-split--${t.direction}`, { "trx-split--dragging": i.value }]])
    }, [
      e("div", {
        class: "trx-split__pane trx-split__pane--first",
        style: R(t.direction === "horizontal" ? { width: r.value + "%" } : { height: r.value + "%" })
      }, [
        I(_.$slots, "first", {}, void 0, !0)
      ], 4),
      e("div", {
        class: "trx-split__handle",
        onMousedown: n,
        onTouchstart: n
      }, [...d[0] || (d[0] = [
        e("div", { class: "trx-split__handle-bar" }, null, -1)
      ])], 32),
      e("div", Gg, [
        I(_.$slots, "second", {}, void 0, !0)
      ])
    ], 2));
  }
}), a4 = /* @__PURE__ */ A(Kg, [["__scopeId", "data-v-146c2928"]]), Yg = {
  key: 0,
  class: "trx-fab-actions"
}, Jg = { class: "trx-fab-action__label" }, Xg = ["title", "onClick"], Qg = /* @__PURE__ */ g({
  __name: "TrxFloatingActionButton",
  props: {
    icon: { default: "pi pi-plus" },
    actions: { default: () => [] },
    position: { default: "bottom-right" },
    color: {},
    size: { default: "md" }
  },
  emits: ["click", "action"],
  setup(t, { emit: a }) {
    const r = a, i = D(!1);
    return (l, n) => (s(), o("div", {
      class: w(["trx-fab-wrap", `trx-fab-wrap--${t.position}`])
    }, [
      O(j, { name: "trx-fab-actions" }, {
        default: B(() => [
          i.value && t.actions.length ? (s(), o("div", Yg, [
            (s(!0), o(V, null, b([...t.actions].reverse(), (c, u) => (s(), o("div", {
              key: c.id,
              class: "trx-fab-action",
              style: R({ "--delay": u * 0.05 + "s", "--ac": c.color ?? "var(--trx-accent-color)" })
            }, [
              e("span", Jg, v(c.label), 1),
              e("button", {
                class: "trx-fab-action__btn",
                style: R({ background: c.color ?? "var(--trx-accent-color)" }),
                title: c.label,
                onClick: (_) => {
                  r("action", c), i.value = !1;
                }
              }, [
                e("i", {
                  class: w(c.icon)
                }, null, 2)
              ], 12, Xg)
            ], 4))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      }),
      e("button", {
        class: w(["trx-fab", `trx-fab--${t.size}`]),
        style: R({ background: t.color ?? "var(--trx-accent-color)" }),
        onClick: n[0] || (n[0] = (c) => t.actions.length ? i.value = !i.value : r("click"))
      }, [
        O(j, { name: "trx-fab-rotate" }, {
          default: B(() => [
            (s(), o("i", {
              key: i.value ? "close" : "open",
              class: w(i.value ? "pi pi-times" : t.icon)
            }, null, 2))
          ]),
          _: 1
        })
      ], 6)
    ], 2));
  }
}), l4 = /* @__PURE__ */ A(Qg, [["__scopeId", "data-v-1778a9e3"]]), Zg = {
  key: 0,
  class: "trx-ctx-menu__separator"
}, tb = ["disabled", "onClick"], eb = /* @__PURE__ */ g({
  __name: "TrxContextMenu",
  props: {
    items: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    x: { default: 0 },
    y: { default: 0 }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = a;
    function i() {
      r("update:modelValue", !1);
    }
    function l(n) {
      n.key === "Escape" && i();
    }
    return W(() => document.addEventListener("keydown", l)), G(() => document.removeEventListener("keydown", l)), (n, c) => (s(), L(et, { to: "body" }, [
      t.modelValue ? (s(), o("div", {
        key: 0,
        class: "trx-ctx-overlay",
        onClick: i,
        onContextmenu: H(i, ["prevent"])
      }, null, 32)) : h("", !0),
      O(j, { name: "trx-ctx-fade" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", {
            key: 0,
            class: "trx-ctx-menu",
            style: R({ left: t.x + "px", top: t.y + "px" }),
            role: "menu"
          }, [
            (s(!0), o(V, null, b(t.items, (u) => (s(), o(V, {
              key: u.id
            }, [
              u.separator ? (s(), o("div", Zg)) : (s(), o("button", {
                key: 1,
                class: w(["trx-ctx-menu__item", { "trx-ctx-menu__item--danger": u.danger, "trx-ctx-menu__item--disabled": u.disabled }]),
                disabled: u.disabled,
                role: "menuitem",
                onClick: (_) => !u.disabled && (r("select", u), i())
              }, [
                u.icon ? (s(), o("i", {
                  key: 0,
                  class: w([u.icon, "trx-ctx-menu__icon"])
                }, null, 2)) : h("", !0),
                e("span", null, v(u.label), 1)
              ], 10, tb))
            ], 64))), 128))
          ], 4)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), n4 = /* @__PURE__ */ A(eb, [["__scopeId", "data-v-0e16a25d"]]), sb = { class: "trx-drag-list" }, ab = ["draggable", "onDragstart", "onDragover", "onDrop"], lb = ["onDragstart"], nb = { class: "trx-drag-list__content" }, ob = /* @__PURE__ */ g({
  __name: "TrxDraggableList",
  props: {
    items: {},
    handle: { type: Boolean }
  },
  emits: ["update:items", "reorder"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(null), n = D(null);
    function c(p) {
      l.value = p;
    }
    function u(p, m) {
      p.preventDefault(), n.value = m;
    }
    function _(p) {
      if (l.value === null || l.value === p) {
        d();
        return;
      }
      const m = [...r.items], [x] = m.splice(l.value, 1);
      m.splice(p, 0, x), i("update:items", m), i("reorder", l.value, p), d();
    }
    function d() {
      l.value = null, n.value = null;
    }
    return (p, m) => (s(), o("div", sb, [
      (s(!0), o(V, null, b(t.items, (x, f) => (s(), o("div", {
        key: x.id,
        class: w(["trx-drag-list__item", {
          "trx-drag-list__item--dragging": l.value === f,
          "trx-drag-list__item--over": n.value === f && l.value !== f
        }]),
        draggable: !t.handle,
        onDragstart: (T) => c(f),
        onDragover: (T) => u(T, f),
        onDrop: (T) => _(f),
        onDragend: d
      }, [
        t.handle ? (s(), o("div", {
          key: 0,
          class: "trx-drag-list__handle",
          draggable: "true",
          onDragstart: (T) => c(f)
        }, [...m[0] || (m[0] = [
          e("i", { class: "pi pi-bars" }, null, -1)
        ])], 40, lb)) : h("", !0),
        e("div", nb, [
          I(p.$slots, "default", {
            item: x,
            index: f
          }, void 0, !0)
        ])
      ], 42, ab))), 128))
    ]));
  }
}), o4 = /* @__PURE__ */ A(ob, [["__scopeId", "data-v-b1539e37"]]), rb = /* @__PURE__ */ g({
  __name: "TrxBackToTop",
  props: {
    threshold: { default: 300 },
    scrollTarget: {},
    behavior: { default: "smooth" }
  },
  setup(t) {
    const a = t, r = D(!1);
    function i() {
      const n = a.scrollTarget ? document.querySelector(a.scrollTarget) : null, c = n ? n.scrollTop : window.scrollY;
      r.value = c > a.threshold;
    }
    function l() {
      const n = a.scrollTarget ? document.querySelector(a.scrollTarget) : null;
      n ? n.scrollTo({ top: 0, behavior: a.behavior }) : window.scrollTo({ top: 0, behavior: a.behavior });
    }
    return W(() => {
      const n = a.scrollTarget ? document.querySelector(a.scrollTarget) : window;
      n == null || n.addEventListener("scroll", i, { passive: !0 });
    }), G(() => {
      const n = a.scrollTarget ? document.querySelector(a.scrollTarget) : window;
      n == null || n.removeEventListener("scroll", i);
    }), (n, c) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-btt-fade" }, {
        default: B(() => [
          r.value ? (s(), o("button", {
            key: 0,
            class: "trx-btt",
            title: "Voltar ao topo",
            onClick: l
          }, [...c[0] || (c[0] = [
            e("i", { class: "pi pi-arrow-up" }, null, -1)
          ])])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), r4 = /* @__PURE__ */ A(rb, [["__scopeId", "data-v-2789be87"]]), ib = ["title"], cb = { class: "trx-rsidebar__content" }, ub = /* @__PURE__ */ g({
  __name: "TrxResizableSidebar",
  props: {
    side: { default: "left" },
    initialWidth: { default: 280 },
    minWidth: { default: 160 },
    maxWidth: { default: 600 },
    collapsible: { type: Boolean, default: !0 }
  },
  emits: ["collapse", "expand", "resize"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D(r.initialWidth), n = D(!1), c = D(!1), u = D(r.initialWidth);
    function _(x) {
      c.value = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", p), x.preventDefault();
    }
    function d(x) {
      if (!c.value) return;
      const f = r.side === "left" ? x.movementX : -x.movementX, T = Math.max(r.minWidth, Math.min(r.maxWidth, l.value + f));
      l.value = T, i("resize", T);
    }
    function p() {
      c.value = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p);
    }
    function m() {
      n.value ? (n.value = !1, l.value = u.value, i("expand")) : (u.value = l.value, n.value = !0, i("collapse"));
    }
    return G(p), (x, f) => (s(), o("div", {
      class: w(["trx-rsidebar", [`trx-rsidebar--${t.side}`, { "trx-rsidebar--collapsed": n.value, "trx-rsidebar--dragging": c.value }]]),
      style: R({ width: n.value ? "0px" : l.value + "px" })
    }, [
      e("div", {
        class: w(["trx-rsidebar__handle", `trx-rsidebar__handle--${t.side}`]),
        onMousedown: _
      }, [
        t.collapsible ? (s(), o("button", {
          key: 0,
          class: "trx-rsidebar__toggle",
          title: n.value ? "Expandir" : "Recolher",
          onMousedown: f[0] || (f[0] = H(() => {
          }, ["stop"])),
          onClick: m
        }, [
          e("i", {
            class: w(t.side === "left" ? n.value ? "pi pi-chevron-right" : "pi pi-chevron-left" : n.value ? "pi pi-chevron-left" : "pi pi-chevron-right")
          }, null, 2)
        ], 40, ib)) : h("", !0)
      ], 34),
      e("div", cb, [
        I(x.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), i4 = /* @__PURE__ */ A(ub, [["__scopeId", "data-v-bfeae2d6"]]), db = { class: "trx-jv" }, _b = { class: "trx-jv__toolbar" }, pb = ["innerHTML"], vb = /* @__PURE__ */ g({
  __name: "TrxJsonViewer",
  props: {
    data: {},
    expandDepth: { default: 2 }
  },
  setup(t) {
    const a = t, r = D(!1);
    function i() {
      navigator.clipboard.writeText(JSON.stringify(a.data, null, 2)), r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 1500);
    }
    function l(_, d = 0) {
      if (_ === null) return '<span class="trx-jv-null">null</span>';
      if (typeof _ == "boolean") return `<span class="trx-jv-bool">${_}</span>`;
      if (typeof _ == "number") return `<span class="trx-jv-num">${_}</span>`;
      if (typeof _ == "string") return `<span class="trx-jv-str">"${n(_)}"</span>`;
      const p = Array.isArray(_), m = p ? _.map((F, q) => [q, F]) : Object.entries(_);
      if (m.length === 0) return p ? '<span class="trx-jv-brace">[]</span>' : '<span class="trx-jv-brace">{}</span>';
      const x = d >= a.expandDepth, f = `jv-${Math.random().toString(36).slice(2)}`, T = p ? "[" : "{", $ = p ? "]" : "}", C = "  ".repeat(d + 1), M = "  ".repeat(d), E = m.map(([F, q]) => {
        const K = p ? "" : `<span class="trx-jv-key">"${n(String(F))}"</span><span class="trx-jv-colon">: </span>`;
        return `${C}${K}${l(q, d + 1)}`;
      }).join(`,
`);
      return `<span class="trx-jv-brace">${T}</span><span class="trx-jv-toggle" data-target="${f}" title="Toggle">${x ? "▸" : "▾"}</span><span class="trx-jv-count">${m.length}</span><span id="${f}" class="trx-jv-block"${x ? ' style="display:none"' : ""}>
${E}
${M}</span><span class="trx-jv-brace">${$}</span>`;
    }
    function n(_) {
      return _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const c = S(() => l(a.data));
    function u(_) {
      const d = _.target.closest(".trx-jv-toggle");
      if (!d) return;
      const p = d.dataset.target;
      if (!p) return;
      const m = document.getElementById(p);
      if (!m) return;
      const x = m.style.display === "none";
      m.style.display = x ? "" : "none", d.textContent = x ? "▾" : "▸";
    }
    return (_, d) => (s(), o("div", db, [
      e("div", _b, [
        d[0] || (d[0] = e("span", { class: "trx-jv__badge" }, "JSON", -1)),
        e("button", {
          class: "trx-jv__copy",
          onClick: i
        }, [
          e("i", {
            class: w(r.value ? "pi pi-check" : "pi pi-copy")
          }, null, 2),
          N(" " + v(r.value ? "Copiado" : "Copiar"), 1)
        ])
      ]),
      e("pre", {
        class: "trx-jv__body",
        onClick: u,
        innerHTML: c.value
      }, null, 8, pb)
    ]));
  }
}), c4 = /* @__PURE__ */ A(vb, [["__scopeId", "data-v-56a7e2b2"]]), mb = { class: "trx-diff" }, fb = { class: "trx-diff__header" }, xb = {
  key: 0,
  class: "trx-diff__title"
}, hb = { class: "trx-diff__stats" }, $b = { class: "trx-diff__stat trx-diff__stat--add" }, gb = { class: "trx-diff__stat trx-diff__stat--rem" }, bb = {
  key: 0,
  class: "trx-diff__unified"
}, yb = { class: "trx-diff__gutter" }, kb = { class: "trx-diff__gutter" }, wb = { class: "trx-diff__marker" }, Tb = { class: "trx-diff__code" }, Cb = {
  key: 1,
  class: "trx-diff__split"
}, Sb = { class: "trx-diff__pane" }, Ib = { class: "trx-diff__pane-title" }, Vb = { class: "trx-diff__gutter" }, Bb = { class: "trx-diff__marker" }, Pb = { class: "trx-diff__code" }, Ab = { class: "trx-diff__pane" }, Mb = { class: "trx-diff__pane-title" }, Lb = { class: "trx-diff__gutter" }, zb = { class: "trx-diff__marker" }, Db = { class: "trx-diff__code" }, Eb = /* @__PURE__ */ g({
  __name: "TrxDiffViewer",
  props: {
    original: {},
    modified: {},
    title: {},
    titleOriginal: { default: "Original" },
    titleModified: { default: "Modificado" },
    unified: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t;
    function r(u, _) {
      const d = u.split(`
`), p = _.split(`
`), m = d.length, x = p.length, f = Array.from({ length: m + 1 }, () => new Array(x + 1).fill(0));
      for (let F = m - 1; F >= 0; F--)
        for (let q = x - 1; q >= 0; q--)
          d[F] === p[q] ? f[F][q] = f[F + 1][q + 1] + 1 : f[F][q] = Math.max(f[F + 1][q], f[F][q + 1]);
      const T = [];
      let $ = 0, C = 0, M = 1, E = 1;
      for (; $ < m || C < x; )
        $ < m && C < x && d[$] === p[C] ? (T.push({ type: "equal", content: d[$], lineOrig: M++, lineMod: E++ }), $++, C++) : C < x && ($ >= m || f[$][C + 1] >= f[$ + 1][C]) ? (T.push({ type: "add", content: p[C], lineOrig: null, lineMod: E++ }), C++) : (T.push({ type: "remove", content: d[$], lineOrig: M++, lineMod: null }), $++);
      return T;
    }
    const i = S(() => r(a.original, a.modified)), l = S(() => ({
      added: i.value.filter((u) => u.type === "add").length,
      removed: i.value.filter((u) => u.type === "remove").length
    })), n = S(() => i.value.filter((u) => u.type !== "add")), c = S(() => i.value.filter((u) => u.type !== "remove"));
    return (u, _) => (s(), o("div", mb, [
      e("div", fb, [
        t.title ? (s(), o("span", xb, v(t.title), 1)) : h("", !0),
        e("div", hb, [
          e("span", $b, "+" + v(l.value.added), 1),
          e("span", gb, "-" + v(l.value.removed), 1)
        ])
      ]),
      t.unified ? (s(), o("div", bb, [
        (s(!0), o(V, null, b(i.value, (d, p) => (s(), o("div", {
          key: p,
          class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
        }, [
          e("span", yb, v(d.lineOrig ?? ""), 1),
          e("span", kb, v(d.lineMod ?? ""), 1),
          e("span", wb, v(d.type === "add" ? "+" : d.type === "remove" ? "-" : " "), 1),
          e("span", Tb, v(d.content), 1)
        ], 2))), 128))
      ])) : (s(), o("div", Cb, [
        e("div", Sb, [
          e("div", Ib, v(t.titleOriginal), 1),
          (s(!0), o(V, null, b(n.value, (d, p) => (s(), o("div", {
            key: p,
            class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", Vb, v(d.lineOrig), 1),
            e("span", Bb, v(d.type === "remove" ? "-" : " "), 1),
            e("span", Pb, v(d.content), 1)
          ], 2))), 128))
        ]),
        _[0] || (_[0] = e("div", { class: "trx-diff__divider" }, null, -1)),
        e("div", Ab, [
          e("div", Mb, v(t.titleModified), 1),
          (s(!0), o(V, null, b(c.value, (d, p) => (s(), o("div", {
            key: p,
            class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", Lb, v(d.lineMod), 1),
            e("span", zb, v(d.type === "add" ? "+" : " "), 1),
            e("span", Db, v(d.content), 1)
          ], 2))), 128))
        ])
      ]))
    ]));
  }
}), u4 = /* @__PURE__ */ A(Eb, [["__scopeId", "data-v-cc06dd9b"]]), Rb = { class: "trx-inf__sentinel" }, Nb = /* @__PURE__ */ g({
  __name: "TrxInfiniteScroll",
  props: {
    loading: { type: Boolean, default: !1 },
    hasMore: { type: Boolean, default: !0 },
    threshold: { default: 80 },
    scrollTarget: {}
  },
  emits: ["load"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = D();
    function n(_) {
      if (r.loading || !r.hasMore) return;
      const d = _.target;
      d.scrollHeight - d.scrollTop - d.clientHeight < r.threshold && i("load");
    }
    function c() {
      if (r.loading || !r.hasMore) return;
      document.documentElement.scrollHeight - window.scrollY - window.innerHeight < r.threshold && i("load");
    }
    let u = null;
    return W(() => {
      if (r.scrollTarget)
        u = document.querySelector(r.scrollTarget), u == null || u.addEventListener("scroll", n, { passive: !0 });
      else if (l.value) {
        const _ = getComputedStyle(l.value);
        _.overflowY === "auto" || _.overflowY === "scroll" ? (u = l.value, l.value.addEventListener("scroll", n, { passive: !0 })) : (u = window, window.addEventListener("scroll", c, { passive: !0 }));
      }
    }), G(() => {
      u === window ? window.removeEventListener("scroll", c) : u == null || u.removeEventListener("scroll", n);
    }), (_, d) => (s(), o("div", {
      ref_key: "container",
      ref: l,
      class: "trx-inf"
    }, [
      I(_.$slots, "default", {}, void 0, !0),
      e("div", Rb, [
        t.loading ? I(_.$slots, "loader", { key: 0 }, () => [
          d[0] || (d[0] = e("div", { class: "trx-inf__loader" }, [
            e("span", { class: "trx-inf__dot" }),
            e("span", { class: "trx-inf__dot" }),
            e("span", { class: "trx-inf__dot" })
          ], -1))
        ], !0) : t.hasMore ? h("", !0) : I(_.$slots, "end", { key: 1 }, () => [
          d[1] || (d[1] = e("div", { class: "trx-inf__end" }, "Sem mais itens", -1))
        ], !0)
      ])
    ], 512));
  }
}), d4 = /* @__PURE__ */ A(Nb, [["__scopeId", "data-v-5ed8d6bb"]]), qb = { class: "trx-pivot" }, Fb = { class: "trx-pivot__wrap" }, Ob = { class: "trx-pivot__table" }, jb = { class: "trx-pivot__th trx-pivot__th--corner" }, Hb = {
  key: 0,
  class: "trx-pivot__th trx-pivot__th--total"
}, Ub = { class: "trx-pivot__td trx-pivot__td--label" }, Wb = {
  key: 0,
  class: "trx-pivot__td trx-pivot__td--total"
}, Gb = { key: 0 }, Kb = { class: "trx-pivot__td trx-pivot__td--grand" }, Yb = /* @__PURE__ */ g({
  __name: "TrxPivotTable",
  props: {
    data: {},
    rowField: {},
    colField: {},
    valueField: {},
    aggregation: { default: "sum" },
    rowLabel: { default: "Linha" },
    showTotals: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t;
    function r(x) {
      if (!x.length) return 0;
      switch (a.aggregation) {
        case "count":
          return x.length;
        case "avg":
          return x.reduce((f, T) => f + T, 0) / x.length;
        case "min":
          return Math.min(...x);
        case "max":
          return Math.max(...x);
        default:
          return x.reduce((f, T) => f + T, 0);
      }
    }
    function i(x) {
      return a.aggregation === "count" ? String(x) : x.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
    }
    const l = S(() => [...new Set(a.data.map((x) => String(x[a.rowField])))]), n = S(() => [...new Set(a.data.map((x) => String(x[a.colField])))]), c = (x, f) => i(r(
      a.data.filter((T) => String(T[a.rowField]) === x && String(T[a.colField]) === f).map((T) => Number(T[a.valueField]) || 0)
    )), u = (x) => i(r(
      n.value.flatMap(
        (f) => a.data.filter((T) => String(T[a.rowField]) === x && String(T[a.colField]) === f).map((T) => Number(T[a.valueField]) || 0)
      )
    )), _ = (x) => i(r(
      l.value.flatMap(
        (f) => a.data.filter((T) => String(T[a.rowField]) === f && String(T[a.colField]) === x).map((T) => Number(T[a.valueField]) || 0)
      )
    )), d = S(() => i(r(a.data.map((x) => Number(x[a.valueField]) || 0)))), p = S(() => {
      let x = 0;
      for (const f of l.value)
        for (const T of n.value) {
          const $ = a.data.filter((M) => String(M[a.rowField]) === f && String(M[a.colField]) === T).map((M) => Number(M[a.valueField]) || 0), C = r($);
          C > x && (x = C);
        }
      return x;
    });
    function m(x, f) {
      const T = a.data.filter(($) => String($[a.rowField]) === x && String($[a.colField]) === f).map(($) => Number($[a.valueField]) || 0);
      return p.value ? r(T) / p.value : 0;
    }
    return (x, f) => (s(), o("div", qb, [
      e("div", Fb, [
        e("table", Ob, [
          e("thead", null, [
            e("tr", null, [
              e("th", jb, v(t.rowLabel), 1),
              (s(!0), o(V, null, b(n.value, (T) => (s(), o("th", {
                key: T,
                class: "trx-pivot__th"
              }, v(T), 1))), 128)),
              t.showTotals ? (s(), o("th", Hb, "Total")) : h("", !0)
            ])
          ]),
          e("tbody", null, [
            (s(!0), o(V, null, b(l.value, (T) => (s(), o("tr", { key: T }, [
              e("td", Ub, v(T), 1),
              (s(!0), o(V, null, b(n.value, ($) => (s(), o("td", {
                key: $,
                class: "trx-pivot__td trx-pivot__td--value",
                style: R({ "--heat": m(T, $) })
              }, v(c(T, $)), 5))), 128)),
              t.showTotals ? (s(), o("td", Wb, v(u(T)), 1)) : h("", !0)
            ]))), 128))
          ]),
          t.showTotals ? (s(), o("tfoot", Gb, [
            e("tr", null, [
              f[0] || (f[0] = e("td", { class: "trx-pivot__td trx-pivot__td--label trx-pivot__td--foot" }, "Total", -1)),
              (s(!0), o(V, null, b(n.value, (T) => (s(), o("td", {
                key: T,
                class: "trx-pivot__td trx-pivot__td--total"
              }, v(_(T)), 1))), 128)),
              e("td", Kb, v(d.value), 1)
            ])
          ])) : h("", !0)
        ])
      ])
    ]));
  }
}), _4 = /* @__PURE__ */ A(Yb, [["__scopeId", "data-v-d9bac3c6"]]), Jb = { class: "trx-env-banner__label" }, Xb = {
  key: 0,
  class: "trx-env-banner__msg"
}, Qb = /* @__PURE__ */ g({
  __name: "TrxEnvironmentBanner",
  props: {
    env: { default: "development" },
    message: {},
    dismissible: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = {
      development: "DESENVOLVIMENTO",
      staging: "STAGING",
      homologation: "HOMOLOGAÇÃO",
      production: "PRODUÇÃO"
    }, r = {
      development: "pi pi-code",
      staging: "pi pi-server",
      homologation: "pi pi-check-circle",
      production: "pi pi-globe"
    }, i = D(!0);
    return (l, n) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-env-slide" }, {
        default: B(() => [
          i.value && t.env !== "production" ? (s(), o("div", {
            key: 0,
            class: w(["trx-env-banner", `trx-env-banner--${t.env}`]),
            role: "banner"
          }, [
            e("i", {
              class: w([r[t.env], "trx-env-banner__icon"])
            }, null, 2),
            e("span", Jb, v(a[t.env]), 1),
            t.message ? (s(), o("span", Xb, "— " + v(t.message), 1)) : h("", !0),
            t.dismissible ? (s(), o("button", {
              key: 1,
              class: "trx-env-banner__close",
              onClick: n[0] || (n[0] = (c) => i.value = !1),
              title: "Fechar"
            }, [...n[1] || (n[1] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])])) : h("", !0)
          ], 2)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), p4 = /* @__PURE__ */ A(Qb, [["__scopeId", "data-v-b7dfb3ab"]]), Zb = { class: "trx-log" }, ty = { class: "trx-log__toolbar" }, ey = { class: "trx-log__filters" }, sy = ["onClick"], ay = { class: "trx-log__search-wrap" }, ly = { class: "trx-log__count" }, ny = {
  key: 0,
  class: "trx-log__empty"
}, oy = {
  key: 0,
  class: "trx-log__ts"
}, ry = {
  key: 1,
  class: "trx-log__source"
}, iy = { class: "trx-log__msg" }, cy = {
  key: 2,
  class: "trx-log__meta"
}, uy = /* @__PURE__ */ g({
  __name: "TrxLogViewer",
  props: {
    logs: {},
    maxHeight: { default: "400px" },
    filter: {},
    autoScroll: { type: Boolean, default: !0 },
    showTimestamp: { type: Boolean, default: !0 },
    showSource: { type: Boolean, default: !0 }
  },
  setup(t) {
    const a = t, r = D(""), i = D(/* @__PURE__ */ new Set(["debug", "info", "warn", "error", "success"])), l = D(), n = ["debug", "info", "warn", "error", "success"];
    function c(d) {
      i.value.has(d) ? i.value.delete(d) : i.value.add(d);
    }
    const u = S(() => {
      const d = r.value.toLowerCase();
      return a.logs.filter(
        (p) => {
          var m;
          return i.value.has(p.level) && (p.message.toLowerCase().includes(d) || ((m = p.source) == null ? void 0 : m.toLowerCase().includes(d)) || !d);
        }
      );
    });
    Z(() => a.logs.length, async () => {
      a.autoScroll && l.value && (await nt(), l.value.scrollTop = l.value.scrollHeight);
    });
    const _ = {
      debug: "pi pi-code",
      info: "pi pi-info-circle",
      warn: "pi pi-exclamation-triangle",
      error: "pi pi-times-circle",
      success: "pi pi-check-circle"
    };
    return (d, p) => (s(), o("div", Zb, [
      e("div", ty, [
        e("div", ey, [
          (s(), o(V, null, b(n, (m) => e("button", {
            key: m,
            class: w(["trx-log__filter", [`trx-log__filter--${m}`, { "trx-log__filter--active": i.value.has(m) }]]),
            onClick: (x) => c(m)
          }, [
            e("i", {
              class: w(_[m])
            }, null, 2),
            e("span", null, v(m), 1)
          ], 10, sy)), 64))
        ]),
        e("div", ay, [
          p[1] || (p[1] = e("i", { class: "pi pi-search trx-log__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
            class: "trx-log__search",
            placeholder: "Buscar..."
          }, null, 512), [
            [J, r.value]
          ])
        ]),
        e("span", ly, v(u.value.length) + " / " + v(t.logs.length), 1)
      ]),
      e("div", {
        ref_key: "container",
        ref: l,
        class: "trx-log__body",
        style: R({ maxHeight: t.maxHeight })
      }, [
        u.value.length ? h("", !0) : (s(), o("div", ny, "Nenhum log")),
        (s(!0), o(V, null, b(u.value, (m) => (s(), o("div", {
          key: m.id,
          class: w(["trx-log__entry", `trx-log__entry--${m.level}`])
        }, [
          e("i", {
            class: w([_[m.level], "trx-log__entry-icon"])
          }, null, 2),
          t.showTimestamp && m.timestamp ? (s(), o("span", oy, v(m.timestamp), 1)) : h("", !0),
          t.showSource && m.source ? (s(), o("span", ry, "[" + v(m.source) + "]", 1)) : h("", !0),
          e("span", iy, v(m.message), 1),
          m.meta ? (s(), o("details", cy, [
            p[2] || (p[2] = e("summary", null, "meta", -1)),
            e("pre", null, v(JSON.stringify(m.meta, null, 2)), 1)
          ])) : h("", !0)
        ], 2))), 128))
      ], 4)
    ]));
  }
}), v4 = /* @__PURE__ */ A(uy, [["__scopeId", "data-v-d3d12a7f"]]), dy = /* @__PURE__ */ g({
  __name: "TrxOfflineIndicator",
  props: {
    position: { default: "top" },
    reconnectLabel: { default: "Reconectando..." }
  },
  setup(t) {
    const a = D(!navigator.onLine), r = D(!1);
    function i() {
      a.value = !0, r.value = !1;
    }
    function l() {
      r.value = !0, setTimeout(() => {
        a.value = !1, r.value = !1;
      }, 1200);
    }
    return W(() => {
      window.addEventListener("offline", i), window.addEventListener("online", l);
    }), G(() => {
      window.removeEventListener("offline", i), window.removeEventListener("online", l);
    }), (n, c) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-offline-slide" }, {
        default: B(() => [
          a.value || r.value ? (s(), o("div", {
            key: 0,
            class: w(["trx-offline", [`trx-offline--${t.position}`, { "trx-offline--reconnecting": r.value }]]),
            role: "status",
            "aria-live": "assertive"
          }, [
            r.value ? (s(), o(V, { key: 0 }, [
              c[0] || (c[0] = e("i", { class: "pi pi-spin pi-spinner" }, null, -1)),
              e("span", null, v(t.reconnectLabel), 1)
            ], 64)) : (s(), o(V, { key: 1 }, [
              c[1] || (c[1] = e("i", { class: "pi pi-wifi" }, null, -1)),
              c[2] || (c[2] = e("span", null, "Sem conexão com a internet", -1))
            ], 64))
          ], 2)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), m4 = /* @__PURE__ */ A(dy, [["__scopeId", "data-v-5caecc99"]]), _y = {
  key: 0,
  class: "trx-upd",
  role: "dialog",
  "aria-live": "polite"
}, py = { class: "trx-upd__content" }, vy = { class: "trx-upd__title" }, my = { class: "trx-upd__msg" }, fy = {
  key: 0,
  class: "trx-upd__ver"
}, xy = { class: "trx-upd__actions" }, hy = /* @__PURE__ */ g({
  __name: "TrxUpdatePrompt",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "Atualização disponível" },
    message: { default: "Uma nova versão do sistema está disponível." },
    updateLabel: { default: "Atualizar agora" },
    dismissLabel: { default: "Depois" },
    version: {}
  },
  emits: ["update:modelValue", "update", "dismiss"],
  setup(t, { emit: a }) {
    const r = a;
    function i() {
      r("update"), r("update:modelValue", !1);
    }
    function l() {
      r("dismiss"), r("update:modelValue", !1);
    }
    return (n, c) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-upd-slide" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", _y, [
            c[2] || (c[2] = e("div", { class: "trx-upd__icon-wrap" }, [
              e("i", { class: "pi pi-refresh trx-upd__icon" })
            ], -1)),
            e("div", py, [
              e("p", vy, v(t.title), 1),
              e("p", my, [
                N(v(t.message), 1),
                t.version ? (s(), o("span", fy, " v" + v(t.version), 1)) : h("", !0)
              ])
            ]),
            e("div", xy, [
              e("button", {
                class: "trx-upd__btn trx-upd__btn--update",
                onClick: i
              }, [
                c[0] || (c[0] = e("i", { class: "pi pi-check" }, null, -1)),
                N(" " + v(t.updateLabel), 1)
              ]),
              e("button", {
                class: "trx-upd__btn trx-upd__btn--dismiss",
                onClick: l
              }, v(t.dismissLabel), 1)
            ]),
            e("button", {
              class: "trx-upd__close",
              onClick: l,
              title: "Fechar"
            }, [...c[1] || (c[1] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), f4 = /* @__PURE__ */ A(hy, [["__scopeId", "data-v-81ddfccd"]]), $y = { class: "trx-fp" }, gy = { class: "trx-fp__header" }, by = { class: "trx-fp__meta" }, yy = { class: "trx-fp__name" }, ky = {
  key: 0,
  class: "trx-fp__size"
}, wy = { class: "trx-fp__actions" }, Ty = ["href", "aria-label"], Cy = ["src", "alt"], Sy = ["src"], Iy = ["src"], Vy = ["src"], By = {
  key: 4,
  class: "trx-fp__text-wrap"
}, Py = ["src"], Ay = {
  key: 5,
  class: "trx-fp__unknown"
}, My = { class: "trx-fp__ext" }, Ly = ["href"], zy = /* @__PURE__ */ g({
  __name: "TrxFilePreview",
  props: {
    url: {},
    name: {},
    mimeType: {},
    size: {},
    maxHeight: { default: "480px" }
  },
  emits: ["download", "close"],
  setup(t, { emit: a }) {
    const r = t, i = a;
    function l() {
      var m;
      const d = r.mimeType ?? "", p = ((m = (r.name ?? "").split(".").pop()) == null ? void 0 : m.toLowerCase()) ?? "";
      return d.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(p) ? "image" : d === "application/pdf" || p === "pdf" ? "pdf" : d.startsWith("video/") || ["mp4", "webm", "ogg", "mov"].includes(p) ? "video" : d.startsWith("audio/") || ["mp3", "wav", "ogg", "aac", "flac"].includes(p) ? "audio" : d.startsWith("text/") || ["txt", "csv", "json", "xml", "md", "log", "yaml", "yml"].includes(p) ? "text" : "unknown";
    }
    const n = S(l);
    function c(d) {
      return d < 1024 ? `${d} B` : d < 1024 * 1024 ? `${(d / 1024).toFixed(1)} KB` : `${(d / (1024 * 1024)).toFixed(2)} MB`;
    }
    const u = {
      image: "pi pi-image",
      pdf: "pi pi-file-pdf",
      video: "pi pi-video",
      audio: "pi pi-volume-up",
      text: "pi pi-file",
      unknown: "pi pi-file"
    }, _ = S(() => {
      var d;
      return ((d = (r.name ?? "").split(".").pop()) == null ? void 0 : d.toUpperCase()) ?? "FILE";
    });
    return (d, p) => (s(), o("div", $y, [
      e("div", gy, [
        e("i", {
          class: w([u[n.value], "trx-fp__header-icon"])
        }, null, 2),
        e("div", by, [
          e("span", yy, v(t.name ?? "Arquivo"), 1),
          t.size ? (s(), o("span", ky, v(c(t.size)), 1)) : h("", !0)
        ]),
        e("div", wy, [
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            "aria-label": `Baixar ${t.name}`,
            class: "trx-fp__action",
            onClick: p[0] || (p[0] = (m) => i("download"))
          }, [...p[2] || (p[2] = [
            e("i", { class: "pi pi-download" }, null, -1)
          ])], 8, Ty)) : h("", !0),
          e("button", {
            class: "trx-fp__action",
            onClick: p[1] || (p[1] = (m) => i("close"))
          }, [...p[3] || (p[3] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ])
      ]),
      e("div", {
        class: "trx-fp__body",
        style: R({ maxHeight: t.maxHeight })
      }, [
        n.value === "image" ? (s(), o("img", {
          key: 0,
          src: t.url,
          alt: t.name,
          class: "trx-fp__img"
        }, null, 8, Cy)) : n.value === "pdf" ? (s(), o("iframe", {
          key: 1,
          src: t.url,
          class: "trx-fp__iframe",
          title: "PDF Preview"
        }, null, 8, Sy)) : n.value === "video" ? (s(), o("video", {
          key: 2,
          src: t.url,
          controls: "",
          class: "trx-fp__video"
        }, " Seu browser não suporta vídeo. ", 8, Iy)) : n.value === "audio" ? (s(), o("audio", {
          key: 3,
          src: t.url,
          controls: "",
          class: "trx-fp__audio"
        }, " Seu browser não suporta áudio. ", 8, Vy)) : n.value === "text" ? (s(), o("div", By, [
          I(d.$slots, "text-content", {}, () => [
            e("iframe", {
              src: t.url,
              class: "trx-fp__iframe",
              title: "Text Preview",
              sandbox: "allow-same-origin"
            }, null, 8, Py)
          ], !0)
        ])) : (s(), o("div", Ay, [
          e("span", My, v(_.value), 1),
          p[5] || (p[5] = e("p", { class: "trx-fp__unknown-msg" }, "Pré-visualização não disponível para este tipo de arquivo.", -1)),
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            class: "trx-fp__dl-btn"
          }, [...p[4] || (p[4] = [
            e("i", { class: "pi pi-download" }, null, -1),
            N(" Baixar arquivo ", -1)
          ])], 8, Ly)) : h("", !0)
        ]))
      ], 4)
    ]));
  }
}), x4 = /* @__PURE__ */ A(zy, [["__scopeId", "data-v-ea51c0ff"]]), Dy = {
  key: 0,
  class: "trx-ann__dots"
}, Ey = ["onClick"], Ry = { class: "trx-ann__msg" }, Ny = ["href"], qy = /* @__PURE__ */ g({
  __name: "TrxAnnouncementBar",
  props: {
    announcements: { default: () => [] },
    rotateInterval: { default: 0 }
  },
  setup(t) {
    const a = t, r = D(/* @__PURE__ */ new Set()), i = D(0), l = S(() => a.announcements.filter((p) => !r.value.has(p.id))), n = S(() => l.value[i.value % Math.max(l.value.length, 1)] ?? null);
    function c(p) {
      r.value.add(p), i.value >= l.value.length - 1 && (i.value = 0);
    }
    let u = null;
    function _() {
      a.rotateInterval > 0 && (u = setInterval(() => {
        l.value.length > 1 && (i.value = (i.value + 1) % l.value.length);
      }, a.rotateInterval));
    }
    W(_), G(() => {
      u && clearInterval(u);
    }), Z(() => a.rotateInterval, () => {
      u && clearInterval(u), _();
    });
    const d = {
      info: "pi pi-info-circle",
      success: "pi pi-check-circle",
      warning: "pi pi-exclamation-triangle",
      danger: "pi pi-times-circle"
    };
    return (p, m) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-ann-slide" }, {
        default: B(() => [
          n.value ? (s(), o("div", {
            key: 0,
            class: w(["trx-ann", `trx-ann--${n.value.type ?? "info"}`]),
            role: "status",
            "aria-live": "polite"
          }, [
            l.value.length > 1 ? (s(), o("div", Dy, [
              (s(!0), o(V, null, b(l.value, (x, f) => (s(), o("span", {
                key: x.id,
                class: w(["trx-ann__dot", { "trx-ann__dot--active": f === i.value % l.value.length }]),
                onClick: (T) => i.value = f
              }, null, 10, Ey))), 128))
            ])) : h("", !0),
            e("i", {
              class: w([d[n.value.type ?? "info"], "trx-ann__icon"])
            }, null, 2),
            e("span", Ry, v(n.value.message), 1),
            n.value.link ? (s(), o("a", {
              key: 1,
              href: n.value.link.href,
              class: "trx-ann__link",
              target: "_blank",
              rel: "noopener"
            }, [
              N(v(n.value.link.label) + " ", 1),
              m[1] || (m[1] = e("i", { class: "pi pi-external-link" }, null, -1))
            ], 8, Ny)) : h("", !0),
            n.value.dismissible !== !1 ? (s(), o("button", {
              key: 2,
              class: "trx-ann__close",
              onClick: m[0] || (m[0] = (x) => c(n.value.id)),
              title: "Fechar"
            }, [...m[2] || (m[2] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])])) : h("", !0)
          ], 2)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), h4 = /* @__PURE__ */ A(qy, [["__scopeId", "data-v-84e8d297"]]), Fy = { inheritAttrs: !1 }, $4 = /* @__PURE__ */ g({
  ...Fy,
  __name: "TrxAutoComplete",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Buscar...",
      ...a
    }));
    return (i, l) => (s(), L(P(At), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Oy = { inheritAttrs: !1 }, g4 = /* @__PURE__ */ g({
  ...Oy,
  __name: "TrxDatePicker",
  setup(t) {
    const a = tt(), r = S(() => ({
      dateFormat: "dd/mm/yy",
      showIcon: !0,
      ...a
    }));
    return (i, l) => (s(), L(P(Mt), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), jy = { inheritAttrs: !1 }, b4 = /* @__PURE__ */ g({
  ...jy,
  __name: "TrxInputNumber",
  setup(t) {
    const a = tt(), r = S(() => ({
      locale: "pt-BR",
      minFractionDigits: 2,
      ...a
    }));
    return (i, l) => (s(), L(P(Lt), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Hy = { inheritAttrs: !1 }, y4 = /* @__PURE__ */ g({
  ...Hy,
  __name: "TrxPassword",
  setup(t) {
    const a = tt(), r = S(() => ({
      weakLabel: "Fraco",
      mediumLabel: "Médio",
      strongLabel: "Forte",
      ...a
    }));
    return (i, l) => (s(), L(P(it), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Uy = { inheritAttrs: !1 }, k4 = /* @__PURE__ */ g({
  ...Uy,
  __name: "TrxSelect",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(zt), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Wy = { inheritAttrs: !1 }, w4 = /* @__PURE__ */ g({
  ...Wy,
  __name: "TrxMultiSelect",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(Dt), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Gy = { inheritAttrs: !1 }, T4 = /* @__PURE__ */ g({
  ...Gy,
  __name: "TrxListbox",
  setup(t) {
    const a = tt(), r = S(() => ({
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(Et), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Ky = { inheritAttrs: !1 }, C4 = /* @__PURE__ */ g({
  ...Ky,
  __name: "TrxCascadeSelect",
  setup(t) {
    return (a, r) => (s(), L(P(Rt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Yy = { inheritAttrs: !1 }, S4 = /* @__PURE__ */ g({
  ...Yy,
  __name: "TrxCheckbox",
  setup(t) {
    return (a, r) => (s(), L(P(gt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Jy = { inheritAttrs: !1 }, I4 = /* @__PURE__ */ g({
  ...Jy,
  __name: "TrxCheckboxGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Nt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Xy = { inheritAttrs: !1 }, V4 = /* @__PURE__ */ g({
  ...Xy,
  __name: "TrxFloatLabel",
  setup(t) {
    return (a, r) => (s(), L(P(qt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Qy = { inheritAttrs: !1 }, B4 = /* @__PURE__ */ g({
  ...Qy,
  __name: "TrxFluid",
  setup(t) {
    return (a, r) => (s(), L(P(Ft), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Zy = { inheritAttrs: !1 }, P4 = /* @__PURE__ */ g({
  ...Zy,
  __name: "TrxIconField",
  setup(t) {
    return (a, r) => (s(), L(P(Ot), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), t0 = { inheritAttrs: !1 }, A4 = /* @__PURE__ */ g({
  ...t0,
  __name: "TrxIftaLabel",
  setup(t) {
    return (a, r) => (s(), L(P(jt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), e0 = { inheritAttrs: !1 }, M4 = /* @__PURE__ */ g({
  ...e0,
  __name: "TrxInputChips",
  setup(t) {
    return (a, r) => (s(), L(P(Ht), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), s0 = { inheritAttrs: !1 }, L4 = /* @__PURE__ */ g({
  ...s0,
  __name: "TrxInputGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Ut), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), a0 = { inheritAttrs: !1 }, z4 = /* @__PURE__ */ g({
  ...a0,
  __name: "TrxInputGroupAddon",
  setup(t) {
    return (a, r) => (s(), L(P(Wt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), l0 = { inheritAttrs: !1 }, D4 = /* @__PURE__ */ g({
  ...l0,
  __name: "TrxInputIcon",
  setup(t) {
    return (a, r) => (s(), L(P(Gt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), n0 = { inheritAttrs: !1 }, E4 = /* @__PURE__ */ g({
  ...n0,
  __name: "TrxInputMask",
  setup(t) {
    return (a, r) => (s(), L(P(Kt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), o0 = { inheritAttrs: !1 }, R4 = /* @__PURE__ */ g({
  ...o0,
  __name: "TrxInputOtp",
  setup(t) {
    return (a, r) => (s(), L(P(Yt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), r0 = { inheritAttrs: !1 }, N4 = /* @__PURE__ */ g({
  ...r0,
  __name: "TrxInputText",
  setup(t) {
    return (a, r) => (s(), L(P(rt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), i0 = { inheritAttrs: !1 }, q4 = /* @__PURE__ */ g({
  ...i0,
  __name: "TrxKnob",
  setup(t) {
    return (a, r) => (s(), L(P(Jt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), c0 = { inheritAttrs: !1 }, F4 = /* @__PURE__ */ g({
  ...c0,
  __name: "TrxRadioButton",
  setup(t) {
    return (a, r) => (s(), L(P(Xt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), u0 = { inheritAttrs: !1 }, O4 = /* @__PURE__ */ g({
  ...u0,
  __name: "TrxRadioButtonGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Qt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), d0 = { inheritAttrs: !1 }, j4 = /* @__PURE__ */ g({
  ...d0,
  __name: "TrxRating",
  setup(t) {
    return (a, r) => (s(), L(P(Zt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _0 = { inheritAttrs: !1 }, H4 = /* @__PURE__ */ g({
  ..._0,
  __name: "TrxSelectButton",
  setup(t) {
    return (a, r) => (s(), L(P(te), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), p0 = { inheritAttrs: !1 }, U4 = /* @__PURE__ */ g({
  ...p0,
  __name: "TrxSlider",
  setup(t) {
    return (a, r) => (s(), L(P(ee), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), v0 = { inheritAttrs: !1 }, W4 = /* @__PURE__ */ g({
  ...v0,
  __name: "TrxTextarea",
  setup(t) {
    return (a, r) => (s(), L(P(se), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), m0 = { inheritAttrs: !1 }, G4 = /* @__PURE__ */ g({
  ...m0,
  __name: "TrxToggleButton",
  setup(t) {
    return (a, r) => (s(), L(P(ae), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), f0 = { inheritAttrs: !1 }, K4 = /* @__PURE__ */ g({
  ...f0,
  __name: "TrxToggleSwitch",
  setup(t) {
    return (a, r) => (s(), L(P(le), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), x0 = { inheritAttrs: !1 }, Y4 = /* @__PURE__ */ g({
  ...x0,
  __name: "TrxTreeSelect",
  setup(t) {
    return (a, r) => (s(), L(P(ne), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), h0 = { inheritAttrs: !1 }, J4 = /* @__PURE__ */ g({
  ...h0,
  __name: "TrxButton",
  setup(t) {
    return (a, r) => (s(), L(P(st), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), $0 = { inheritAttrs: !1 }, X4 = /* @__PURE__ */ g({
  ...$0,
  __name: "TrxButtonGroup",
  setup(t) {
    return (a, r) => (s(), L(P(oe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), g0 = { inheritAttrs: !1 }, Q4 = /* @__PURE__ */ g({
  ...g0,
  __name: "TrxSpeedDial",
  setup(t) {
    return (a, r) => (s(), L(P(re), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), b0 = { inheritAttrs: !1 }, Z4 = /* @__PURE__ */ g({
  ...b0,
  __name: "TrxSplitButton",
  setup(t) {
    return (a, r) => (s(), L(P(ie), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), y0 = { inheritAttrs: !1 }, t3 = /* @__PURE__ */ g({
  ...y0,
  __name: "TrxPaginator",
  setup(t) {
    const a = tt(), r = S(() => ({
      rowsPerPageOptions: [10, 25, 50],
      ...a
    }));
    return (i, l) => (s(), L(P(ce), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), k0 = { inheritAttrs: !1 }, e3 = /* @__PURE__ */ g({
  ...k0,
  __name: "TrxColumn",
  setup(t) {
    return (a, r) => (s(), L(P(ue), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), w0 = { inheritAttrs: !1 }, s3 = /* @__PURE__ */ g({
  ...w0,
  __name: "TrxColumnGroup",
  setup(t) {
    return (a, r) => (s(), L(P(de), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), T0 = { inheritAttrs: !1 }, a3 = /* @__PURE__ */ g({
  ...T0,
  __name: "TrxDataView",
  setup(t) {
    return (a, r) => (s(), L(P(_e), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), C0 = { inheritAttrs: !1 }, l3 = /* @__PURE__ */ g({
  ...C0,
  __name: "TrxOrderList",
  setup(t) {
    return (a, r) => (s(), L(P(pe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), S0 = { inheritAttrs: !1 }, n3 = /* @__PURE__ */ g({
  ...S0,
  __name: "TrxOrganizationChart",
  setup(t) {
    return (a, r) => (s(), L(P(ve), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), I0 = { inheritAttrs: !1 }, o3 = /* @__PURE__ */ g({
  ...I0,
  __name: "TrxPickList",
  setup(t) {
    return (a, r) => (s(), L(P(me), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), V0 = { inheritAttrs: !1 }, r3 = /* @__PURE__ */ g({
  ...V0,
  __name: "TrxRow",
  setup(t) {
    return (a, r) => (s(), L(P(fe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), B0 = { inheritAttrs: !1 }, i3 = /* @__PURE__ */ g({
  ...B0,
  __name: "TrxTimeline",
  setup(t) {
    return (a, r) => (s(), L(P(xe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), P0 = { inheritAttrs: !1 }, c3 = /* @__PURE__ */ g({
  ...P0,
  __name: "TrxTree",
  setup(t) {
    return (a, r) => (s(), L(P(he), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), A0 = { inheritAttrs: !1 }, u3 = /* @__PURE__ */ g({
  ...A0,
  __name: "TrxTreeTable",
  setup(t) {
    return (a, r) => (s(), L(P($e), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), M0 = { inheritAttrs: !1 }, d3 = /* @__PURE__ */ g({
  ...M0,
  __name: "TrxVirtualScroller",
  setup(t) {
    return (a, r) => (s(), L(P(ge), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), L0 = { inheritAttrs: !1 }, _3 = /* @__PURE__ */ g({
  ...L0,
  __name: "TrxAccordion",
  setup(t) {
    return (a, r) => (s(), L(P(be), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), z0 = { inheritAttrs: !1 }, p3 = /* @__PURE__ */ g({
  ...z0,
  __name: "TrxAccordionContent",
  setup(t) {
    return (a, r) => (s(), L(P(ye), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), D0 = { inheritAttrs: !1 }, v3 = /* @__PURE__ */ g({
  ...D0,
  __name: "TrxAccordionHeader",
  setup(t) {
    return (a, r) => (s(), L(P(ke), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), E0 = { inheritAttrs: !1 }, m3 = /* @__PURE__ */ g({
  ...E0,
  __name: "TrxAccordionPanel",
  setup(t) {
    return (a, r) => (s(), L(P(we), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), R0 = { inheritAttrs: !1 }, f3 = /* @__PURE__ */ g({
  ...R0,
  __name: "TrxDeferredContent",
  setup(t) {
    return (a, r) => (s(), L(P(Te), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), N0 = { inheritAttrs: !1 }, x3 = /* @__PURE__ */ g({
  ...N0,
  __name: "TrxDivider",
  setup(t) {
    return (a, r) => (s(), L(P(Ce), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), q0 = { inheritAttrs: !1 }, h3 = /* @__PURE__ */ g({
  ...q0,
  __name: "TrxFieldset",
  setup(t) {
    return (a, r) => (s(), L(P(Se), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), F0 = { inheritAttrs: !1 }, $3 = /* @__PURE__ */ g({
  ...F0,
  __name: "TrxPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Ie), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), O0 = { inheritAttrs: !1 }, g3 = /* @__PURE__ */ g({
  ...O0,
  __name: "TrxScrollPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Ve), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), j0 = { inheritAttrs: !1 }, b3 = /* @__PURE__ */ g({
  ...j0,
  __name: "TrxSplitter",
  setup(t) {
    return (a, r) => (s(), L(P(Be), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), H0 = { inheritAttrs: !1 }, y3 = /* @__PURE__ */ g({
  ...H0,
  __name: "TrxSplitterPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Pe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), U0 = { inheritAttrs: !1 }, k3 = /* @__PURE__ */ g({
  ...U0,
  __name: "TrxStepper",
  setup(t) {
    return (a, r) => (s(), L(P(Ae), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), W0 = { inheritAttrs: !1 }, w3 = /* @__PURE__ */ g({
  ...W0,
  __name: "TrxStep",
  setup(t) {
    return (a, r) => (s(), L(P(Me), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), G0 = { inheritAttrs: !1 }, T3 = /* @__PURE__ */ g({
  ...G0,
  __name: "TrxStepItem",
  setup(t) {
    return (a, r) => (s(), L(P(Le), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), K0 = { inheritAttrs: !1 }, C3 = /* @__PURE__ */ g({
  ...K0,
  __name: "TrxStepList",
  setup(t) {
    return (a, r) => (s(), L(P(ze), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Y0 = { inheritAttrs: !1 }, S3 = /* @__PURE__ */ g({
  ...Y0,
  __name: "TrxStepPanel",
  setup(t) {
    return (a, r) => (s(), L(P(De), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), J0 = { inheritAttrs: !1 }, I3 = /* @__PURE__ */ g({
  ...J0,
  __name: "TrxStepPanels",
  setup(t) {
    return (a, r) => (s(), L(P(Ee), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), X0 = { inheritAttrs: !1 }, V3 = /* @__PURE__ */ g({
  ...X0,
  __name: "TrxTabs",
  setup(t) {
    return (a, r) => (s(), L(P(Re), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Q0 = { inheritAttrs: !1 }, B3 = /* @__PURE__ */ g({
  ...Q0,
  __name: "TrxTab",
  setup(t) {
    return (a, r) => (s(), L(P(Ne), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Z0 = { inheritAttrs: !1 }, P3 = /* @__PURE__ */ g({
  ...Z0,
  __name: "TrxTabList",
  setup(t) {
    return (a, r) => (s(), L(P(qe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), tk = { inheritAttrs: !1 }, A3 = /* @__PURE__ */ g({
  ...tk,
  __name: "TrxTabPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Fe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ek = { inheritAttrs: !1 }, M3 = /* @__PURE__ */ g({
  ...ek,
  __name: "TrxTabPanels",
  setup(t) {
    return (a, r) => (s(), L(P(Oe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), sk = { inheritAttrs: !1 }, L3 = /* @__PURE__ */ g({
  ...sk,
  __name: "TrxToolbar",
  setup(t) {
    return (a, r) => (s(), L(P(je), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ak = { inheritAttrs: !1 }, z3 = /* @__PURE__ */ g({
  ...ak,
  __name: "TrxDialog",
  setup(t) {
    const a = tt(), r = S(() => ({
      modal: !0,
      closable: !0,
      draggable: !1,
      ...a
    }));
    return (i, l) => (s(), L(P(He), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), lk = { inheritAttrs: !1 }, D3 = /* @__PURE__ */ g({
  ...lk,
  __name: "TrxConfirmDialog",
  setup(t) {
    const a = tt(), r = S(() => ({
      acceptLabel: "Sim",
      rejectLabel: "Não",
      ...a
    }));
    return (i, l) => (s(), L(P(Ue), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), nk = { inheritAttrs: !1 }, E3 = /* @__PURE__ */ g({
  ...nk,
  __name: "TrxConfirmPopup",
  setup(t) {
    return (a, r) => (s(), L(P(We), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ok = { inheritAttrs: !1 }, R3 = /* @__PURE__ */ g({
  ...ok,
  __name: "TrxDrawer",
  setup(t) {
    return (a, r) => (s(), L(P(Ge), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), rk = { inheritAttrs: !1 }, N3 = /* @__PURE__ */ g({
  ...rk,
  __name: "TrxDynamicDialog",
  setup(t) {
    return (a, r) => (s(), L(P(Ke), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ik = { inheritAttrs: !1 }, q3 = /* @__PURE__ */ g({
  ...ik,
  __name: "TrxPopover",
  setup(t) {
    return (a, r) => (s(), L(P(Ye), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ck = { inheritAttrs: !1 }, F3 = /* @__PURE__ */ g({
  ...ck,
  __name: "TrxBreadcrumb",
  setup(t) {
    return (a, r) => (s(), L(P(Je), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), uk = { inheritAttrs: !1 }, O3 = /* @__PURE__ */ g({
  ...uk,
  __name: "TrxDock",
  setup(t) {
    return (a, r) => (s(), L(P(Xe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), dk = { inheritAttrs: !1 }, j3 = /* @__PURE__ */ g({
  ...dk,
  __name: "TrxMegaMenu",
  setup(t) {
    return (a, r) => (s(), L(P(Qe), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _k = { inheritAttrs: !1 }, H3 = /* @__PURE__ */ g({
  ..._k,
  __name: "TrxMenu",
  setup(t) {
    return (a, r) => (s(), L(P(Ze), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), pk = { inheritAttrs: !1 }, U3 = /* @__PURE__ */ g({
  ...pk,
  __name: "TrxMenubar",
  setup(t) {
    return (a, r) => (s(), L(P(ts), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), vk = { inheritAttrs: !1 }, W3 = /* @__PURE__ */ g({
  ...vk,
  __name: "TrxPanelMenu",
  setup(t) {
    return (a, r) => (s(), L(P(es), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), mk = { inheritAttrs: !1 }, G3 = /* @__PURE__ */ g({
  ...mk,
  __name: "TrxSteps",
  setup(t) {
    return (a, r) => (s(), L(P(ss), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), fk = { inheritAttrs: !1 }, K3 = /* @__PURE__ */ g({
  ...fk,
  __name: "TrxTabMenu",
  setup(t) {
    return (a, r) => (s(), L(P(as), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), xk = { inheritAttrs: !1 }, Y3 = /* @__PURE__ */ g({
  ...xk,
  __name: "TrxTieredMenu",
  setup(t) {
    return (a, r) => (s(), L(P(ls), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), hk = { inheritAttrs: !1 }, J3 = /* @__PURE__ */ g({
  ...hk,
  __name: "TrxToast",
  setup(t) {
    const a = tt(), r = S(() => ({
      position: "top-right",
      ...a
    }));
    return (i, l) => (s(), L(P(ns), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), $k = { inheritAttrs: !1 }, X3 = /* @__PURE__ */ g({
  ...$k,
  __name: "TrxInlineMessage",
  setup(t) {
    return (a, r) => (s(), L(P(os), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), gk = { inheritAttrs: !1 }, Q3 = /* @__PURE__ */ g({
  ...gk,
  __name: "TrxMessage",
  setup(t) {
    return (a, r) => (s(), L(P(ct), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), bk = { inheritAttrs: !1 }, Z3 = /* @__PURE__ */ g({
  ...bk,
  __name: "TrxCarousel",
  setup(t) {
    return (a, r) => (s(), L(P(rs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), yk = { inheritAttrs: !1 }, t8 = /* @__PURE__ */ g({
  ...yk,
  __name: "TrxGalleria",
  setup(t) {
    return (a, r) => (s(), L(P(is), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), kk = { inheritAttrs: !1 }, e8 = /* @__PURE__ */ g({
  ...kk,
  __name: "TrxImage",
  setup(t) {
    return (a, r) => (s(), L(P(cs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), wk = { inheritAttrs: !1 }, s8 = /* @__PURE__ */ g({
  ...wk,
  __name: "TrxImageCompare",
  setup(t) {
    return (a, r) => (s(), L(P(us), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Tk = { inheritAttrs: !1 }, a8 = /* @__PURE__ */ g({
  ...Tk,
  __name: "TrxFileUpload",
  setup(t) {
    const a = tt(), r = S(() => ({
      chooseLabel: "Escolher",
      uploadLabel: "Enviar",
      cancelLabel: "Cancelar",
      ...a
    }));
    return (i, l) => (s(), L(P(ds), y(k(r.value)), z({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, y(k(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Ck = { inheritAttrs: !1 }, l8 = /* @__PURE__ */ g({
  ...Ck,
  __name: "TrxChart",
  setup(t) {
    return (a, r) => (s(), L(P(_s), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Sk = { inheritAttrs: !1 }, n8 = /* @__PURE__ */ g({
  ...Sk,
  __name: "TrxAvatar",
  setup(t) {
    return (a, r) => (s(), L(P($t), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ik = { inheritAttrs: !1 }, o8 = /* @__PURE__ */ g({
  ...Ik,
  __name: "TrxAvatarGroup",
  setup(t) {
    return (a, r) => (s(), L(P(ps), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Vk = { inheritAttrs: !1 }, r8 = /* @__PURE__ */ g({
  ...Vk,
  __name: "TrxBadge",
  setup(t) {
    return (a, r) => (s(), L(P(vs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Bk = { inheritAttrs: !1 }, i8 = /* @__PURE__ */ g({
  ...Bk,
  __name: "TrxBlockUI",
  setup(t) {
    return (a, r) => (s(), L(P(ms), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Pk = { inheritAttrs: !1 }, c8 = /* @__PURE__ */ g({
  ...Pk,
  __name: "TrxChip",
  setup(t) {
    return (a, r) => (s(), L(P(fs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ak = { inheritAttrs: !1 }, u8 = /* @__PURE__ */ g({
  ...Ak,
  __name: "TrxInplace",
  setup(t) {
    return (a, r) => (s(), L(P(xs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Mk = { inheritAttrs: !1 }, d8 = /* @__PURE__ */ g({
  ...Mk,
  __name: "TrxMeterGroup",
  setup(t) {
    return (a, r) => (s(), L(P(hs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Lk = { inheritAttrs: !1 }, _8 = /* @__PURE__ */ g({
  ...Lk,
  __name: "TrxOverlayBadge",
  setup(t) {
    return (a, r) => (s(), L(P($s), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), zk = { inheritAttrs: !1 }, p8 = /* @__PURE__ */ g({
  ...zk,
  __name: "TrxProgressBar",
  setup(t) {
    return (a, r) => (s(), L(P(gs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Dk = { inheritAttrs: !1 }, v8 = /* @__PURE__ */ g({
  ...Dk,
  __name: "TrxProgressSpinner",
  setup(t) {
    return (a, r) => (s(), L(P(ht), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ek = { inheritAttrs: !1 }, m8 = /* @__PURE__ */ g({
  ...Ek,
  __name: "TrxScrollTop",
  setup(t) {
    return (a, r) => (s(), L(P(bs), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Rk = { inheritAttrs: !1 }, f8 = /* @__PURE__ */ g({
  ...Rk,
  __name: "TrxSkeleton",
  setup(t) {
    return (a, r) => (s(), L(P(ys), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Nk = { inheritAttrs: !1 }, x8 = /* @__PURE__ */ g({
  ...Nk,
  __name: "TrxTag",
  setup(t) {
    return (a, r) => (s(), L(P(xt), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
}), qk = { inheritAttrs: !1 }, h8 = /* @__PURE__ */ g({
  ...qk,
  __name: "TrxTerminal",
  setup(t) {
    return (a, r) => (s(), L(P(ks), y(k(a.$attrs)), z({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, y(k(n || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  OT as $,
  ro as A,
  hT as B,
  $T as C,
  gT as D,
  bT as E,
  yT as F,
  kT as G,
  er as H,
  wT as I,
  TT as J,
  CT as K,
  ST as L,
  IT as M,
  VT as N,
  BT as O,
  PT as P,
  AT as Q,
  MT as R,
  LT as S,
  Uw as T,
  zT as U,
  DT as V,
  ET as W,
  RT as X,
  NT as Y,
  qT as Z,
  FT as _,
  Ww as a,
  JC as a$,
  jT as a0,
  HT as a1,
  UT as a2,
  WT as a3,
  GT as a4,
  ru as a5,
  KT as a6,
  ut as a7,
  YT as a8,
  JT as a9,
  kC as aA,
  wC as aB,
  TC as aC,
  CC as aD,
  SC as aE,
  IC as aF,
  VC as aG,
  BC as aH,
  PC as aI,
  AC as aJ,
  MC as aK,
  LC as aL,
  zC as aM,
  DC as aN,
  EC as aO,
  RC as aP,
  NC as aQ,
  qC as aR,
  FC as aS,
  OC as aT,
  jC as aU,
  HC as aV,
  UC as aW,
  WC as aX,
  GC as aY,
  KC as aZ,
  YC as a_,
  XT as aa,
  QT as ab,
  ZT as ac,
  tC as ad,
  eC as ae,
  sC as af,
  aC as ag,
  lC as ah,
  nC as ai,
  oC as aj,
  rC as ak,
  iC as al,
  cC as am,
  uC as an,
  dC as ao,
  _C as ap,
  pC as aq,
  vC as ar,
  mC as as,
  fC as at,
  xC as au,
  hC as av,
  $C as aw,
  gC as ax,
  bC as ay,
  yC as az,
  Gw as b,
  o3 as b$,
  XC as b0,
  QC as b1,
  ZC as b2,
  t4 as b3,
  e4 as b4,
  s4 as b5,
  a4 as b6,
  l4 as b7,
  n4 as b8,
  o4 as b9,
  M4 as bA,
  L4 as bB,
  z4 as bC,
  D4 as bD,
  E4 as bE,
  R4 as bF,
  N4 as bG,
  q4 as bH,
  F4 as bI,
  O4 as bJ,
  j4 as bK,
  H4 as bL,
  U4 as bM,
  W4 as bN,
  G4 as bO,
  K4 as bP,
  Y4 as bQ,
  J4 as bR,
  X4 as bS,
  Q4 as bT,
  Z4 as bU,
  t3 as bV,
  e3 as bW,
  s3 as bX,
  a3 as bY,
  l3 as bZ,
  n3 as b_,
  r4 as ba,
  i4 as bb,
  c4 as bc,
  u4 as bd,
  d4 as be,
  _4 as bf,
  p4 as bg,
  v4 as bh,
  m4 as bi,
  f4 as bj,
  x4 as bk,
  h4 as bl,
  $4 as bm,
  g4 as bn,
  b4 as bo,
  y4 as bp,
  k4 as bq,
  w4 as br,
  T4 as bs,
  C4 as bt,
  S4 as bu,
  I4 as bv,
  V4 as bw,
  B4 as bx,
  P4 as by,
  A4 as bz,
  Kw as c,
  f8 as c$,
  r3 as c0,
  i3 as c1,
  c3 as c2,
  u3 as c3,
  d3 as c4,
  _3 as c5,
  p3 as c6,
  v3 as c7,
  m3 as c8,
  f3 as c9,
  j3 as cA,
  H3 as cB,
  U3 as cC,
  W3 as cD,
  G3 as cE,
  K3 as cF,
  Y3 as cG,
  J3 as cH,
  X3 as cI,
  Q3 as cJ,
  Z3 as cK,
  t8 as cL,
  e8 as cM,
  s8 as cN,
  a8 as cO,
  l8 as cP,
  n8 as cQ,
  o8 as cR,
  r8 as cS,
  i8 as cT,
  c8 as cU,
  u8 as cV,
  d8 as cW,
  _8 as cX,
  p8 as cY,
  v8 as cZ,
  m8 as c_,
  x3 as ca,
  h3 as cb,
  $3 as cc,
  g3 as cd,
  b3 as ce,
  y3 as cf,
  k3 as cg,
  w3 as ch,
  T3 as ci,
  C3 as cj,
  S3 as ck,
  I3 as cl,
  V3 as cm,
  B3 as cn,
  P3 as co,
  A3 as cp,
  M3 as cq,
  L3 as cr,
  z3 as cs,
  D3 as ct,
  E3 as cu,
  R3 as cv,
  N3 as cw,
  q3 as cx,
  F3 as cy,
  O3 as cz,
  Yw as d,
  x8 as d0,
  h8 as d1,
  Jw as e,
  Xw as f,
  Qw as g,
  Zw as h,
  tT as i,
  eT as j,
  sT as k,
  aT as l,
  lT as m,
  nT as n,
  oT as o,
  rT as p,
  iT as q,
  cT as r,
  uT as s,
  dT as t,
  _T as u,
  pT as v,
  vT as w,
  mT as x,
  fT as y,
  xT as z
};
