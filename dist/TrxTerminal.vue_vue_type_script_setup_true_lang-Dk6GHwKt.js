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
}, Ww = /* @__PURE__ */ A(ws, [["__scopeId", "data-v-d5448055"]]), Ts = /* @__PURE__ */ g({
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
}), Gw = /* @__PURE__ */ A(Ts, [["__scopeId", "data-v-f12c0272"]]), Cs = { class: "trx-page-header" }, Ss = { class: "trx-page-header__content" }, Is = { class: "trx-page-header__title" }, Vs = {
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
}), Kw = /* @__PURE__ */ A(Ps, [["__scopeId", "data-v-def36de6"]]), As = /* @__PURE__ */ g({
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
}), Yw = /* @__PURE__ */ A(As, [["__scopeId", "data-v-c36955e9"]]), Ms = {
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
}), Jw = /* @__PURE__ */ A(Ds, [["__scopeId", "data-v-4eb5da13"]]), Es = { class: "trx-empty-state" }, Rs = { class: "trx-empty-state__title" }, Ns = {
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
}), Xw = /* @__PURE__ */ A(Fs, [["__scopeId", "data-v-49c3d947"]]), Os = { class: "trx-login" }, js = { class: "trx-login__container" }, Hs = { class: "trx-login__header" }, Us = { class: "trx-login__logo" }, Ws = {
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
}), Qw = /* @__PURE__ */ A(ea, [["__scopeId", "data-v-2ec7ed88"]]), sa = {
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
}), Zw = /* @__PURE__ */ A(da, [["__scopeId", "data-v-49b3499e"]]), _a = {
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
}), tT = /* @__PURE__ */ A(fa, [["__scopeId", "data-v-5f985ae8"]]), xa = { class: "trx-datatable" }, ha = {
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
}), eT = /* @__PURE__ */ A(ba, [["__scopeId", "data-v-f9d94f79"]]), ya = { class: "trx-status" }, ka = {
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
}), sT = /* @__PURE__ */ A(wa, [["__scopeId", "data-v-0d5250d8"]]), Ta = { class: "trx-layout__sidebar-header" }, Ca = { class: "trx-layout__logo-text" }, Sa = {
  key: 0,
  class: "trx-layout__logo-trx"
}, Ia = { class: "trx-layout__nav" }, Va = { key: 0 }, Ba = ["onClick", "title"], Pa = { key: 0 }, Aa = {
  key: 0,
  class: "trx-layout__section-header"
}, Ma = ["onClick", "title"], La = { key: 0 }, za = { class: "trx-layout__sidebar-footer" }, Da = ["href"], Ea = { class: "trx-layout__topbar" }, Ra = { class: "trx-layout__topbar-left" }, Na = { class: "trx-layout__topbar-right" }, qa = { class: "trx-layout__controls" }, Fa = {
  key: 1,
  class: "trx-layout__divider"
}, Oa = { class: "trx-layout__user" }, ja = { class: "trx-layout__user-name" }, Ha = {
  id: "trx-main-content",
  class: "trx-layout__content",
  tabindex: "-1"
}, Ua = /* @__PURE__ */ g({
  __name: "TrxAppLayout",
  props: {
    appName: {},
    brandPrefix: { default: "TRX" },
    appIcon: { default: "pi pi-box" },
    menuItems: {},
    menuSections: {},
    userName: {},
    userRole: {},
    statusLabel: {},
    statusType: { default: "offline" },
    showStatus: { type: Boolean, default: !1 },
    onLogout: {},
    footerText: { default: "TRIX Systems" },
    footerUrl: { default: "https://trixsystems.io" }
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
      C[4] || (C[4] = e("a", {
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
              t.brandPrefix ? (s(), o("span", Sa, v(t.brandPrefix), 1)) : h("", !0),
              N(v(t.brandPrefix ? " " : "") + v(t.appName), 1)
            ])
          ]))
        ]),
        e("nav", Ia, [
          t.menuItems && t.menuItems.length ? (s(), o("ul", Va, [
            (s(!0), o(V, null, b(t.menuItems, (M) => (s(), o("li", {
              key: M.path,
              class: w({ active: p(M.path) }),
              onClick: (E) => f(M.path),
              title: c.value ? M.label : ""
            }, [
              e("i", {
                class: w(M.icon)
              }, null, 2),
              c.value ? h("", !0) : (s(), o("span", Pa, v(M.label), 1))
            ], 10, Ba))), 128))
          ])) : h("", !0),
          t.menuSections && t.menuSections.length ? (s(!0), o(V, { key: 1 }, b(t.menuSections, (M) => (s(), o("div", {
            key: M.key,
            class: "trx-layout__nav-section"
          }, [
            !c.value && M.items.length > 0 ? (s(), o("div", Aa, v(M.label), 1)) : h("", !0),
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
                c.value ? h("", !0) : (s(), o("span", La, v(E.label), 1))
              ], 10, Ma))), 128))
            ])
          ]))), 128)) : h("", !0)
        ]),
        e("div", za, [
          e("button", {
            class: "trx-layout__toggle-btn",
            onClick: x
          }, [
            e("i", {
              class: w(["pi", c.value ? "pi-angle-right" : "pi-angle-left"])
            }, null, 2)
          ]),
          !c.value && t.footerText ? (s(), o("a", {
            key: 0,
            href: t.footerUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "trx-layout__footer-link"
          }, v(t.footerText), 9, Da)) : h("", !0)
        ])
      ], 2),
      e("div", {
        class: w(["trx-layout__main", { "trx-layout__main--collapsed": c.value }])
      }, [
        e("header", Ea, [
          e("div", Ra, [
            O(P(st), {
              icon: "pi pi-bars",
              text: "",
              rounded: "",
              onClick: x,
              class: "trx-layout__mobile-menu"
            }),
            I($.$slots, "topbar-left", {}, void 0, !0)
          ]),
          e("div", Na, [
            e("div", qa, [
              t.showStatus ? (s(), o("div", {
                key: 0,
                class: w(["trx-layout__status", d.value])
              }, [
                C[2] || (C[2] = e("span", { class: "trx-layout__status-dot" }, null, -1)),
                N(" " + v(t.statusLabel), 1)
              ], 2)) : h("", !0),
              t.showStatus ? (s(), o("span", Fa)) : h("", !0),
              O(P(st), {
                icon: u.value ? "pi pi-sun" : "pi pi-moon",
                onClick: m,
                rounded: "",
                text: "",
                size: "small",
                title: u.value ? "Modo Claro" : "Modo Escuro"
              }, null, 8, ["icon", "title"]),
              C[3] || (C[3] = e("span", { class: "trx-layout__divider" }, null, -1)),
              e("div", Oa, [
                O(P($t), {
                  label: _.value,
                  size: "small",
                  shape: "circle"
                }, null, 8, ["label"]),
                e("span", ja, v(t.userName || "Usuario"), 1)
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
        e("main", Ha, [
          I($.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
}), aT = /* @__PURE__ */ A(Ua, [["__scopeId", "data-v-90bad350"]]), Wa = { class: "trx-not-found" }, Ga = { class: "trx-not-found__content" }, Ka = { class: "trx-not-found__code" }, Ya = { class: "trx-not-found__title" }, Ja = { class: "trx-not-found__message" }, Xa = /* @__PURE__ */ g({
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
      return s(), o("div", Wa, [
        e("div", Ga, [
          e("div", Ka, v(t.code), 1),
          e("h1", Ya, v(t.title), 1),
          e("p", Ja, v(t.message), 1),
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
}), lT = /* @__PURE__ */ A(Xa, [["__scopeId", "data-v-603fc352"]]), Qa = { class: "trx-login-page" }, Za = { class: "trx-login-page__settings" }, tl = ["disabled"], el = ["disabled"], sl = ["title"], al = { class: "trx-login-page__lang-label" }, ll = { class: "trx-login-page__container" }, nl = { class: "trx-login-page__panel" }, ol = { class: "trx-login-page__card" }, rl = { class: "trx-login-page__header" }, il = { class: "trx-login-page__icon" }, cl = { class: "trx-login-page__brand" }, ul = {
  key: 0,
  class: "trx-login-page__brand-trx"
}, dl = {
  key: 0,
  class: "trx-login-page__tagline"
}, _l = { class: "trx-login-page__field" }, pl = {
  key: 0,
  class: "p-error"
}, vl = {
  key: 1,
  class: "p-error"
}, ml = { class: "trx-login-page__field" }, fl = {
  key: 0,
  class: "p-error"
}, xl = {
  key: 0,
  class: "trx-login-page__options"
}, hl = {
  key: 0,
  class: "trx-login-page__remember"
}, $l = {
  key: 0,
  class: "pi pi-sign-in"
}, gl = {
  key: 1,
  class: "trx-login-page__error"
}, bl = { class: "trx-login-page__footer" }, yl = /* @__PURE__ */ g({
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
    }), (F, q) => (s(), o("div", Qa, [
      e("div", Za, [
        t.showFontControls ? (s(), o(V, { key: 0 }, [
          e("button", {
            onClick: C,
            title: "Diminuir fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value <= 12
          }, [...q[3] || (q[3] = [
            e("i", { class: "pi pi-minus" }, null, -1)
          ])], 8, tl),
          e("button", {
            onClick: $,
            title: "Aumentar fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value >= 20
          }, [...q[4] || (q[4] = [
            e("i", { class: "pi pi-plus" }, null, -1)
          ])], 8, el),
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
        ], 8, sl),
        t.showLanguageToggle ? (s(), o(V, { key: 1 }, [
          q[7] || (q[7] = e("div", { class: "trx-login-page__settings-divider" }, null, -1)),
          e("button", {
            onClick: T,
            title: "Idioma",
            class: "trx-login-page__settings-btn trx-login-page__settings-btn--lang"
          }, [
            q[6] || (q[6] = e("i", { class: "pi pi-globe" }, null, -1)),
            e("span", al, v(_.value), 1)
          ])
        ], 64)) : h("", !0)
      ]),
      q[15] || (q[15] = e("div", { class: "trx-login-page__background" }, [
        e("div", { class: "trx-login-page__orb trx-login-page__orb--1" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--2" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--3" })
      ], -1)),
      e("div", ll, [
        e("div", nl, [
          e("div", ol, [
            e("div", rl, [
              e("div", il, [
                I(F.$slots, "icon", {}, () => [
                  q[8] || (q[8] = e("i", {
                    class: "pi pi-box",
                    style: { "font-size": "2.5rem", color: "white" }
                  }, null, -1))
                ], !0)
              ]),
              e("h1", cl, [
                t.brandPrefix ? (s(), o("span", ul, v(t.brandPrefix), 1)) : h("", !0),
                N(v(t.brandPrefix ? " " : "") + v(t.appName), 1)
              ]),
              t.appTagline ? (s(), o("p", dl, v(t.appTagline), 1)) : h("", !0),
              q[9] || (q[9] = e("h2", { class: "trx-login-page__title" }, "Acesse sua conta", -1)),
              q[10] || (q[10] = e("p", { class: "trx-login-page__subtitle" }, "Preencha seus dados para acessar", -1))
            ]),
            e("form", {
              class: "trx-login-page__form",
              onSubmit: H(M, ["prevent"])
            }, [
              e("div", _l, [
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
                n.value && !i.email ? (s(), o("small", pl, " Campo obrigatorio ")) : n.value && i.email && !p.value ? (s(), o("small", vl, " Email invalido ")) : h("", !0)
              ]),
              e("div", ml, [
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
                x.value ? (s(), o("small", fl, " Campo obrigatorio ")) : h("", !0)
              ]),
              t.showRememberMe || t.showForgotPassword ? (s(), o("div", xl, [
                t.showRememberMe ? (s(), o("div", hl, [
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
                  t.loading ? h("", !0) : (s(), o("i", $l)),
                  e("span", null, v(t.loading ? "Entrando..." : "Entrar"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              t.error ? (s(), o("div", gl, [
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
            e("div", bl, [
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
}), nT = /* @__PURE__ */ A(yl, [["__scopeId", "data-v-b5b9c53f"]]), kl = ["aria-label"], wl = { class: "trx-banner__content" }, Tl = { class: "trx-banner__body" }, Cl = {
  key: 0,
  class: "trx-banner__title"
}, Sl = {
  key: 1,
  class: "trx-banner__message"
}, Il = /* @__PURE__ */ g({
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
      e("div", wl, [
        e("i", {
          class: w(["trx-banner__icon", P(n)]),
          "aria-hidden": "true"
        }, null, 2),
        e("div", Tl, [
          t.title ? (s(), o("strong", Cl, v(t.title), 1)) : h("", !0),
          c.$slots.default ? (s(), o("span", Sl, [
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
    ], 10, kl));
  }
}), oT = /* @__PURE__ */ A(Il, [["__scopeId", "data-v-3e631643"]]), Vl = {
  key: 0,
  class: "trx-copy__value"
}, Bl = ["aria-label", "title"], Pl = { key: 0 }, Al = { key: 1 }, Ml = /* @__PURE__ */ g({
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
      t.showValue ? (s(), o("span", Vl, v(t.value), 1)) : h("", !0),
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
        t.label && !t.showValue ? (s(), o("span", Pl, v(l.value ? "Copiado!" : t.label), 1)) : !t.label && !t.showValue ? (s(), o("span", Al, v(l.value ? "Copiado!" : "Copiar"), 1)) : h("", !0)
      ], 10, Bl)
    ], 2));
  }
}), rT = /* @__PURE__ */ A(Ml, [["__scopeId", "data-v-e4ae9d59"]]), Ll = {
  key: 0,
  class: "trx-agent-badge"
}, zl = { class: "trx-agent-label" }, Dl = ["aria-expanded", "aria-label"], El = { class: "trx-agent-label" }, Rl = {
  key: 0,
  class: "trx-agent-menu",
  role: "listbox",
  "aria-label": "Selecionar status"
}, Nl = ["aria-selected", "onClick"], ql = /* @__PURE__ */ g({
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
    return (d, p) => t.readonly || t.compact ? (s(), o("div", Ll, [
      e("span", {
        class: "trx-agent-dot",
        style: R({ background: u.value.color })
      }, null, 4),
      e("span", zl, v(u.value.label), 1)
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
        e("span", El, v(u.value.label), 1),
        e("i", {
          class: w(["pi pi-chevron-down trx-agent-chevron", { "trx-agent-chevron--open": n.value }]),
          "aria-hidden": "true"
        }, null, 2)
      ], 8, Dl),
      O(j, { name: "trx-agent" }, {
        default: B(() => [
          n.value ? (s(), o("ul", Rl, [
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
            ], 10, Nl))), 128))
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
}), iT = /* @__PURE__ */ A(ql, [["__scopeId", "data-v-9a90548c"]]), Fl = {
  class: "trx-player",
  role: "region",
  "aria-label": "Player de áudio"
}, Ol = ["src"], jl = {
  key: 0,
  class: "trx-player__error"
}, Hl = ["aria-label", "disabled"], Ul = { class: "trx-player__timeline" }, Wl = { class: "trx-player__time" }, Gl = ["aria-valuemax", "aria-valuenow", "aria-label"], Kl = { class: "trx-player__track" }, Yl = { class: "trx-player__time trx-player__time--total" }, Jl = { class: "trx-player__speed-wrap" }, Xl = ["aria-label"], Ql = {
  key: 0,
  class: "trx-player__speed-menu",
  role: "listbox"
}, Zl = ["aria-selected", "onClick"], tn = /* @__PURE__ */ g({
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
    }), (U, X) => (s(), o("div", Fl, [
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
      }, null, 40, Ol),
      _.value ? (s(), o("div", jl, [...X[2] || (X[2] = [
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
        ], 8, Hl),
        e("div", Ul, [
          e("span", Wl, v(m(l.value)), 1),
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
            e("div", Kl, [
              e("div", {
                class: "trx-player__fill",
                style: R({ width: `${p.value}%` })
              }, null, 4),
              e("div", {
                class: "trx-player__thumb",
                style: R({ left: `${p.value}%` })
              }, null, 4)
            ])
          ], 8, Gl),
          e("span", Yl, v(m(n.value)), 1)
        ]),
        e("div", Jl, [
          e("button", {
            type: "button",
            class: "trx-player__speed-btn",
            "aria-label": `Velocidade: ${c.value}x`,
            onClick: X[0] || (X[0] = (Q) => d.value = !d.value)
          }, v(c.value) + "x ", 9, Xl),
          d.value ? (s(), o("ul", Ql, [
            (s(!0), o(V, null, b(t.speeds, (Q) => (s(), o("li", {
              key: Q,
              class: w(["trx-player__speed-opt", { "trx-player__speed-opt--active": Q === c.value }]),
              role: "option",
              "aria-selected": Q === c.value,
              onClick: (lt) => T(Q)
            }, v(Q) + "x ", 11, Zl))), 128))
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
}), cT = /* @__PURE__ */ A(tn, [["__scopeId", "data-v-2ae62dee"]]), en = { class: "trx-alert__body" }, sn = {
  key: 0,
  class: "trx-alert__title"
}, an = { class: "trx-alert__content" }, ln = /* @__PURE__ */ g({
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
      e("div", en, [
        t.title ? (s(), o("p", sn, v(t.title), 1)) : h("", !0),
        e("div", an, [
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
}), uT = /* @__PURE__ */ A(ln, [["__scopeId", "data-v-01863497"]]), nn = ["title", "aria-label"], on = ["src", "alt"], rn = {
  key: 1,
  class: "trx-avatar__initials"
}, cn = ["aria-label"], un = /* @__PURE__ */ g({
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
      }, null, 8, on)) : (s(), o("span", rn, v(r.value), 1)),
      t.status ? (s(), o("span", {
        key: 2,
        class: w(["trx-avatar__status", `trx-avatar__status--${t.status}`]),
        "aria-label": t.status
      }, null, 10, cn)) : h("", !0)
    ], 14, nn));
  }
}), dT = /* @__PURE__ */ A(un, [["__scopeId", "data-v-ad53c350"]]), dn = { class: "trx-kpi" }, _n = { class: "trx-kpi__header" }, pn = { class: "trx-kpi__title" }, vn = {
  key: 0,
  class: "trx-kpi__skeleton"
}, mn = { class: "trx-kpi__value" }, fn = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", dn, [
      e("div", _n, [
        e("span", pn, v(t.title), 1),
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
      t.loading ? (s(), o("div", vn, [...n[0] || (n[0] = [
        e("div", { class: "trx-kpi__skeleton-value" }, null, -1),
        e("div", { class: "trx-kpi__skeleton-trend" }, null, -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", mn, v(t.value ?? "—"), 1),
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
}), _T = /* @__PURE__ */ A(fn, [["__scopeId", "data-v-a42946dc"]]), xn = { class: "trx-search" }, hn = ["aria-label"], $n = { class: "trx-search__trigger-text" }, gn = { class: "trx-search__modal" }, bn = { class: "trx-search__input-wrap" }, yn = ["placeholder", "value"], kn = { class: "trx-search__results" }, wn = {
  key: 0,
  class: "trx-search__hint"
}, Tn = /* @__PURE__ */ g({
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
    }), a({ open: u, close: _ }), (x, f) => (s(), o("div", xn, [
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
        e("span", $n, v(t.placeholder ?? "Buscar..."), 1),
        f[2] || (f[2] = e("kbd", { class: "trx-search__kbd" }, "⌘K", -1))
      ], 8, hn),
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
            e("div", gn, [
              e("div", bn, [
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
                }, null, 40, yn),
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
              e("div", kn, [
                I(x.$slots, "default", { query: n.value }, () => [
                  n.value ? h("", !0) : (s(), o("p", wn, [...f[5] || (f[5] = [
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
}), pT = /* @__PURE__ */ A(Tn, [["__scopeId", "data-v-4e83a1ba"]]), Cn = {
  key: 0,
  class: "trx-filter-bar"
}, Sn = {
  key: 0,
  class: "trx-filter-bar__inputs"
}, In = {
  key: 1,
  class: "trx-filter-bar__chips",
  role: "list",
  "aria-label": "Filtros ativos"
}, Vn = { class: "trx-filter-bar__chip-label" }, Bn = { class: "trx-filter-bar__chip-value" }, Pn = ["aria-label", "onClick"], An = /* @__PURE__ */ g({
  __name: "TrxFilterBar",
  props: {
    filters: {},
    clearLabel: {}
  },
  emits: ["remove", "clear"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => (r.filters ?? []).length > 0), n = (c) => c.displayValue ?? String(c.value);
    return (c, u) => l.value || c.$slots.default ? (s(), o("div", Cn, [
      c.$slots.default ? (s(), o("div", Sn, [
        I(c.$slots, "default", {}, void 0, !0)
      ])) : h("", !0),
      l.value ? (s(), o("div", In, [
        u[3] || (u[3] = e("span", { class: "trx-filter-bar__label" }, "Filtros:", -1)),
        (s(!0), o(V, null, b(t.filters, (_) => (s(), o("span", {
          key: _.key,
          class: "trx-filter-bar__chip",
          role: "listitem"
        }, [
          e("span", Vn, v(_.label) + ":", 1),
          e("span", Bn, v(n(_)), 1),
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
          ])], 8, Pn)
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
}), vT = /* @__PURE__ */ A(An, [["__scopeId", "data-v-227ccd1b"]]), Mn = {
  key: 0,
  class: "trx-dta__inline"
}, Ln = ["disabled", "aria-label", "title", "onClick"], zn = ["aria-expanded"], Dn = {
  key: 0,
  class: "trx-dta__dropdown",
  role: "menu"
}, En = {
  key: 0,
  class: "trx-dta__separator"
}, Rn = ["disabled", "onClick"], Nn = /* @__PURE__ */ g({
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
      n.value === "inline" ? (s(), o("div", Mn, [
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
          ], 10, Ln);
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
        ])], 8, zn),
        O(j, { name: "trx-dta" }, {
          default: B(() => [
            r.value ? (s(), o("div", Dn, [
              (s(!0), o(V, null, b(l.value, (f) => {
                var T, $;
                return s(), o(V, {
                  key: f.label
                }, [
                  f.separator ? (s(), o("hr", En)) : h("", !0),
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
                  ], 10, Rn)
                ], 64);
              }), 128))
            ])) : h("", !0)
          ]),
          _: 1
        })
      ], 512))
    ], 32));
  }
}), mT = /* @__PURE__ */ A(Nn, [["__scopeId", "data-v-fe60232d"]]), qn = {
  class: "trx-error",
  role: "main"
}, Fn = { class: "trx-error__inner" }, On = { class: "trx-error__icon-wrap" }, jn = { class: "trx-error__code" }, Hn = { class: "trx-error__title" }, Un = { class: "trx-error__desc" }, Wn = {
  key: 0,
  class: "trx-error__content"
}, Gn = { class: "trx-error__actions" }, Kn = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", qn, [
      e("div", Fn, [
        e("div", On, [
          e("i", {
            class: w(["trx-error__icon", l.value.icon]),
            "aria-hidden": "true"
          }, null, 2),
          e("span", jn, v(t.code), 1)
        ]),
        e("h1", Hn, v(t.title ?? l.value.title), 1),
        e("p", Un, v(t.description ?? l.value.description), 1),
        n.$slots.default ? (s(), o("div", Wn, [
          I(n.$slots, "default", {}, void 0, !0)
        ])) : h("", !0),
        e("div", Gn, [
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
}), fT = /* @__PURE__ */ A(Kn, [["__scopeId", "data-v-342a5b45"]]), Yn = /* @__PURE__ */ g({
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
}), xT = /* @__PURE__ */ A(Yn, [["__scopeId", "data-v-9bfe5d38"]]), Jn = { class: "trx-call-card__left" }, Xn = { class: "trx-call-card__info" }, Qn = { class: "trx-call-card__caller" }, Zn = { class: "trx-call-card__name" }, to = {
  key: 0,
  class: "trx-call-card__number"
}, eo = { class: "trx-call-card__meta" }, so = {
  key: 0,
  class: "trx-call-card__duration"
}, ao = {
  key: 1,
  class: "trx-call-card__queue"
}, lo = {
  key: 0,
  class: "trx-call-card__agent"
}, no = { class: "trx-call-card__actions" }, oo = /* @__PURE__ */ g({
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
      e("div", Jn, [
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
      e("div", Xn, [
        e("div", Qn, [
          e("span", Zn, v(t.callerName || t.callerId), 1),
          t.callerName ? (s(), o("span", to, v(t.callerId), 1)) : h("", !0)
        ]),
        e("div", eo, [
          e("span", {
            class: "trx-call-card__status",
            style: R({ color: n.value.color })
          }, v(n.value.label), 5),
          t.duration !== void 0 ? (s(), o("span", so, v(c(t.duration)), 1)) : h("", !0),
          t.queue ? (s(), o("span", ao, v(t.queue), 1)) : h("", !0)
        ]),
        t.agent ? (s(), o("div", lo, [
          _[4] || (_[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0)
      ]),
      e("div", no, [
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
}), hT = /* @__PURE__ */ A(oo, [["__scopeId", "data-v-98fdc3c5"]]), ro = /* @__PURE__ */ g({
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
}), io = /* @__PURE__ */ A(ro, [["__scopeId", "data-v-35e4aaaf"]]), co = { class: "trx-call-queue" }, uo = { class: "trx-call-queue__header" }, _o = { class: "trx-call-queue__name" }, po = { class: "trx-call-queue__count" }, vo = {
  key: 0,
  class: "trx-call-queue__empty"
}, mo = {
  key: 1,
  class: "trx-call-queue__list"
}, fo = { class: "trx-call-queue__item-info" }, xo = { class: "trx-call-queue__item-caller" }, ho = {
  key: 0,
  class: "trx-call-queue__item-number"
}, $o = { class: "trx-call-queue__item-meta" }, go = { class: "trx-call-queue__item-actions" }, bo = ["onClick"], yo = ["onClick"], ko = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", co, [
      e("div", uo, [
        e("span", _o, v(t.queueName || "Fila de Chamadas"), 1),
        e("span", po, v(t.calls.length), 1)
      ]),
      t.calls.length === 0 ? (s(), o("div", vo, [..._[0] || (_[0] = [
        e("i", { class: "pi pi-inbox" }, null, -1),
        e("span", null, "Nenhuma chamada na fila", -1)
      ])])) : (s(), o("ul", mo, [
        (s(!0), o(V, null, b(l.value, (d) => (s(), o("li", {
          key: d.id,
          class: w(["trx-call-queue__item", { "trx-call-queue__item--warning": d.waitTime > t.maxWaitWarning }])
        }, [
          e("div", fo, [
            e("div", xo, [
              e("span", null, v(d.callerName || d.callerId), 1),
              d.callerName ? (s(), o("span", ho, v(d.callerId), 1)) : h("", !0)
            ]),
            e("div", $o, [
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
          e("div", go, [
            e("button", {
              class: "trx-call-queue__btn trx-call-queue__btn--answer",
              onClick: (p) => i("answer", d.id),
              title: "Atender"
            }, [..._[2] || (_[2] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, bo),
            e("button", {
              class: "trx-call-queue__btn",
              onClick: (p) => i("transfer", d.id),
              title: "Transferir"
            }, [..._[3] || (_[3] = [
              e("i", { class: "pi pi-share-alt" }, null, -1)
            ])], 8, yo)
          ])
        ], 2))), 128))
      ]))
    ]));
  }
}), $T = /* @__PURE__ */ A(ko, [["__scopeId", "data-v-48b24471"]]), wo = {
  key: 0,
  class: "trx-dialer__display"
}, To = { class: "trx-dialer__number" }, Co = { class: "trx-dialer__grid" }, So = ["disabled", "onClick"], Io = { class: "trx-dialer__key-main" }, Vo = {
  key: 0,
  class: "trx-dialer__key-sub"
}, Bo = { class: "trx-dialer__actions" }, Po = ["disabled"], Ao = ["disabled"], Mo = /* @__PURE__ */ g({
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
      t.showDisplay ? (s(), o("div", wo, [
        e("span", To, v(c.value || " "), 1),
        c.value ? (s(), o("button", {
          key: 0,
          class: "trx-dialer__backspace",
          onClick: _,
          title: "Apagar"
        }, [...x[0] || (x[0] = [
          e("i", { class: "pi pi-delete-left" }, null, -1)
        ])])) : h("", !0)
      ])) : h("", !0),
      e("div", Co, [
        (s(), o(V, null, b(l, (f) => e("button", {
          key: f,
          class: "trx-dialer__key",
          disabled: t.disabled,
          onClick: (T) => u(f)
        }, [
          e("span", Io, v(f), 1),
          n[f] ? (s(), o("span", Vo, v(n[f]), 1)) : h("", !0)
        ], 8, So)), 64))
      ]),
      e("div", Bo, [
        e("button", {
          class: "trx-dialer__clear",
          disabled: t.disabled || !c.value,
          onClick: d,
          title: "Limpar"
        }, [...x[1] || (x[1] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])], 8, Po),
        e("button", {
          class: "trx-dialer__call",
          disabled: t.disabled || !c.value,
          onClick: p,
          title: "Ligar"
        }, [...x[2] || (x[2] = [
          e("i", { class: "pi pi-phone" }, null, -1)
        ])], 8, Ao)
      ])
    ], 2));
  }
}), gT = /* @__PURE__ */ A(Mo, [["__scopeId", "data-v-a4cd158b"]]), Lo = { class: "trx-softphone__info" }, zo = { class: "trx-softphone__details" }, Do = { class: "trx-softphone__label" }, Eo = {
  key: 0,
  class: "trx-softphone__caller"
}, Ro = {
  key: 0,
  class: "trx-softphone__controls"
}, No = ["title"], qo = ["title"], Fo = /* @__PURE__ */ g({
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
        e("div", Lo, [
          u[5] || (u[5] = e("div", { class: "trx-softphone__status-dot" }, null, -1)),
          e("div", zo, [
            e("span", Do, v(l.value), 1),
            t.callInfo ? (s(), o("span", Eo, v(t.callInfo.name || t.callInfo.number), 1)) : h("", !0)
          ]),
          n.value && ((_ = t.callInfo) == null ? void 0 : _.duration) !== void 0 ? (s(), L(io, {
            key: 0,
            running: n.value,
            "start-at": t.callInfo.duration,
            class: "trx-softphone__timer"
          }, null, 8, ["running", "start-at"])) : h("", !0)
        ]),
        t.status !== "idle" ? (s(), o("div", Ro, [
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
            ], 10, No)) : h("", !0),
            n.value ? (s(), o("button", {
              key: 1,
              class: w(["trx-softphone__btn", t.status === "muted" ? "trx-softphone__btn--active" : ""]),
              onClick: u[2] || (u[2] = (d) => t.status === "muted" ? i("unmute") : i("mute")),
              title: t.status === "muted" ? "Ativar mic" : "Mudo"
            }, [
              e("i", {
                class: w(t.status === "muted" ? "pi pi-microphone-slash" : "pi pi-microphone")
              }, null, 2)
            ], 10, qo)) : h("", !0),
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
}), bT = /* @__PURE__ */ A(Fo, [["__scopeId", "data-v-80ab0580"]]), Oo = {
  key: 0,
  class: "trx-phone-input__ddi"
}, jo = ["value", "placeholder", "disabled"], Ho = /* @__PURE__ */ g({
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
      t.showDdi ? (s(), o("span", Oo, v(t.ddi), 1)) : h("", !0),
      c[0] || (c[0] = e("i", { class: "pi pi-phone trx-phone-input__icon" }, null, -1)),
      e("input", {
        class: "trx-phone-input__field",
        type: "tel",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        autocomplete: "tel",
        onInput: i
      }, null, 40, jo)
    ], 2));
  }
}), yT = /* @__PURE__ */ A(Ho, [["__scopeId", "data-v-d0bc586c"]]), Uo = /* @__PURE__ */ g({
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
}), kT = /* @__PURE__ */ A(Uo, [["__scopeId", "data-v-c031b667"]]), Wo = { class: "trx-transcription" }, Go = {
  key: 0,
  class: "trx-transcription__avatar"
}, Ko = { class: "trx-transcription__bubble" }, Yo = { class: "trx-transcription__header" }, Jo = { class: "trx-transcription__speaker" }, Xo = { class: "trx-transcription__time" }, Qo = {
  key: 0,
  class: "trx-transcription__low-conf",
  title: "Baixa confiança"
}, Zo = ["innerHTML"], tr = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", Wo, [
      (s(!0), o(V, null, b(t.segments, (d) => (s(), o("div", {
        key: d.id,
        class: w(["trx-transcription__segment", [
          `trx-transcription__segment--${d.speaker}`,
          { "trx-transcription__segment--active": i(d) }
        ]])
      }, [
        d.speaker !== "system" ? (s(), o("div", Go, v(c(n(d.speaker))), 1)) : h("", !0),
        e("div", Ko, [
          e("div", Yo, [
            e("span", Jo, v(n(d.speaker)), 1),
            e("span", Xo, v(r(d.startTime)), 1),
            d.confidence !== void 0 && d.confidence < 0.7 ? (s(), o("span", Qo, [..._[0] || (_[0] = [
              e("i", { class: "pi pi-exclamation-triangle" }, null, -1)
            ])])) : h("", !0)
          ]),
          e("p", {
            class: "trx-transcription__text",
            innerHTML: l(d.text)
          }, null, 8, Zo)
        ])
      ], 2))), 128))
    ]));
  }
}), wT = /* @__PURE__ */ A(tr, [["__scopeId", "data-v-2470dac6"]]), er = /* @__PURE__ */ g({
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
}), sr = /* @__PURE__ */ A(er, [["__scopeId", "data-v-5bfe2b98"]]), ar = /* @__PURE__ */ g({
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
}), TT = /* @__PURE__ */ A(ar, [["__scopeId", "data-v-6d505e7d"]]), lr = { class: "trx-metric-card__main" }, nr = { class: "trx-metric-card__title" }, or = { class: "trx-metric-card__value-row" }, rr = {
  key: 0,
  class: "trx-metric-card__skeleton"
}, ir = {
  key: 0,
  class: "trx-metric-card__unit"
}, cr = {
  key: 0,
  class: "trx-metric-card__change-label"
}, ur = {
  key: 0,
  class: "trx-metric-card__chart"
}, dr = /* @__PURE__ */ g({
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
        e("div", lr, [
          e("p", nr, v(t.title), 1),
          e("div", or, [
            t.loading ? (s(), o("span", rr)) : (s(), o(V, { key: 1 }, [
              e("span", {
                class: "trx-metric-card__value",
                style: R({ color: r.value })
              }, v(t.value), 5),
              t.unit ? (s(), o("span", ir, v(t.unit), 1)) : h("", !0)
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
            t.changeLabel ? (s(), o("span", cr, v(t.changeLabel), 1)) : h("", !0)
          ], 2)) : h("", !0)
        ]),
        (u = t.sparklineData) != null && u.length ? (s(), o("div", ur, [
          O(sr, {
            data: t.sparklineData,
            width: 80,
            height: 40,
            color: r.value
          }, null, 8, ["data", "color"])
        ])) : h("", !0)
      ], 2);
    };
  }
}), CT = /* @__PURE__ */ A(dr, [["__scopeId", "data-v-6c648207"]]), _r = { class: "trx-heatmap" }, pr = {
  key: 0,
  class: "trx-heatmap__hour-labels"
}, vr = { class: "trx-heatmap__grid" }, mr = {
  key: 0,
  class: "trx-heatmap__day-label"
}, fr = ["title"], xr = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", _r, [
      t.showLabels ? (s(), o("div", pr, [
        _[0] || (_[0] = e("div", { class: "trx-heatmap__corner" }, null, -1)),
        (s(!0), o(V, null, b(P(r), (d) => (s(), o("div", {
          key: d,
          class: "trx-heatmap__hour-label",
          style: R({ width: `${t.cellSize}px` })
        }, v(c(d)), 5))), 128))
      ])) : h("", !0),
      e("div", vr, [
        (s(!0), o(V, null, b(t.days, (d, p) => (s(), o("div", {
          key: p,
          class: "trx-heatmap__row"
        }, [
          t.showLabels ? (s(), o("div", mr, v(d), 1)) : h("", !0),
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
            }, null, 12, fr);
          }), 128))
        ]))), 128))
      ])
    ]));
  }
}), ST = /* @__PURE__ */ A(xr, [["__scopeId", "data-v-3bac74cd"]]), hr = /* @__PURE__ */ g({
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
}), IT = /* @__PURE__ */ A(hr, [["__scopeId", "data-v-b95e8456"]]), $r = { class: "trx-table-toolbar" }, gr = {
  key: 0,
  class: "trx-table-toolbar__bulk"
}, br = { class: "trx-table-toolbar__bulk-count" }, yr = { class: "trx-table-toolbar__main" }, kr = { class: "trx-table-toolbar__search" }, wr = ["value", "placeholder"], Tr = { class: "trx-table-toolbar__center" }, Cr = {
  key: 0,
  class: "trx-table-toolbar__total"
}, Sr = { class: "trx-table-toolbar__actions" }, Ir = ["disabled"], Vr = {
  key: 0,
  class: "trx-table-toolbar__filter-panel"
}, Br = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", $r, [
      O(j, { name: "trx-bulk-slide" }, {
        default: B(() => [
          t.selectedCount && t.selectedCount > 0 ? (s(), o("div", gr, [
            e("span", br, v(t.selectedCount) + " selecionado(s)", 1),
            I(l.$slots, "bulk-actions", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      }),
      e("div", yr, [
        e("div", kr, [
          n[5] || (n[5] = e("i", { class: "pi pi-search trx-table-toolbar__search-icon" }, null, -1)),
          e("input", {
            class: "trx-table-toolbar__search-input",
            type: "text",
            value: t.searchValue,
            placeholder: t.searchPlaceholder,
            onInput: n[0] || (n[0] = (c) => r("update:searchValue", c.target.value))
          }, null, 40, wr),
          t.searchValue ? (s(), o("button", {
            key: 0,
            class: "trx-table-toolbar__search-clear",
            onClick: n[1] || (n[1] = (c) => r("update:searchValue", ""))
          }, [...n[4] || (n[4] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])) : h("", !0)
        ]),
        e("div", Tr, [
          t.total !== void 0 ? (s(), o("span", Cr, v(t.total) + " registro(s) ", 1)) : h("", !0)
        ]),
        e("div", Sr, [
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
          ], 10, Ir),
          I(l.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      O(j, { name: "trx-slide-down" }, {
        default: B(() => [
          i.value && l.$slots["filter-panel"] ? (s(), o("div", Vr, [
            I(l.$slots, "filter-panel", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), VT = /* @__PURE__ */ A(Br, [["__scopeId", "data-v-874b5252"]]), Pr = {
  key: 0,
  class: "trx-bulk-actions"
}, Ar = { class: "trx-bulk-actions__count" }, Mr = { class: "trx-bulk-actions__items" }, Lr = /* @__PURE__ */ g({
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
        l.value ? (s(), o("div", Pr, [
          e("span", Ar, v(n.value), 1),
          e("div", Mr, [
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
}), BT = /* @__PURE__ */ A(Lr, [["__scopeId", "data-v-5f6bea7d"]]), zr = { class: "trx-export-btn" }, Dr = ["disabled"], Er = {
  key: 0,
  class: "trx-export-btn__menu"
}, Rr = ["onClick"], Nr = /* @__PURE__ */ g({
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
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", zr, [
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
      ], 8, Dr),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", Er, [
            (s(!0), o(V, null, b(t.formats, (d) => (s(), o("button", {
              key: d,
              class: "trx-export-btn__item",
              onClick: (p) => n(d)
            }, [
              e("i", {
                class: w(l[d].icon)
              }, null, 2),
              e("span", null, v(l[d].label), 1)
            ], 8, Rr))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), PT = /* @__PURE__ */ A(Nr, [["__scopeId", "data-v-2e0f2f33"]]), qr = { class: "trx-col-config" }, Fr = {
  key: 0,
  class: "trx-col-config__panel"
}, Or = ["checked", "disabled", "onChange"], jr = {
  key: 0,
  class: "trx-col-config__lock"
}, Hr = /* @__PURE__ */ g({
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
    return W(() => document.addEventListener("click", u, !0)), G(() => document.removeEventListener("click", u, !0)), (_, d) => (s(), o("div", qr, [
      e("button", {
        class: "trx-col-config__trigger",
        onClick: d[0] || (d[0] = (p) => l.value = !l.value),
        title: "Configurar colunas"
      }, [...d[1] || (d[1] = [
        e("i", { class: "pi pi-table" }, null, -1)
      ])]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Fr, [
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
              }, null, 40, Or),
              e("span", null, v(p.label), 1),
              p.required ? (s(), o("span", jr, [...d[2] || (d[2] = [
                e("i", { class: "pi pi-lock" }, null, -1)
              ])])) : h("", !0)
            ], 2))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), AT = /* @__PURE__ */ A(Hr, [["__scopeId", "data-v-e1297a23"]]), Ur = ["value", "disabled", "placeholder", "max"], Wr = ["value", "disabled", "placeholder", "min"], Gr = /* @__PURE__ */ g({
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
      }, null, 40, Ur),
      m[2] || (m[2] = e("span", { class: "trx-daterange__sep" }, "→", -1)),
      e("input", {
        class: "trx-daterange__input",
        type: "date",
        value: n.value,
        disabled: t.disabled,
        placeholder: t.endPlaceholder,
        min: l.value || void 0,
        onChange: u
      }, null, 40, Wr),
      d.value && !t.disabled ? (s(), o("button", {
        key: 0,
        class: "trx-daterange__clear",
        onClick: _
      }, [...m[0] || (m[0] = [
        e("i", { class: "pi pi-times" }, null, -1)
      ])])) : h("", !0)
    ], 2));
  }
}), MT = /* @__PURE__ */ A(Gr, [["__scopeId", "data-v-7a43f167"]]), Kr = ["value", "disabled", "placeholder"], Yr = /* @__PURE__ */ g({
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
      }, null, 40, Kr)
    ], 2));
  }
}), LT = /* @__PURE__ */ A(Yr, [["__scopeId", "data-v-6df8b487"]]), Jr = ["disabled"], Xr = {
  key: 1,
  class: "pi pi-chevron-down trx-timepicker__arrow"
}, Qr = {
  key: 0,
  class: "trx-timepicker__panel"
}, Zr = ["onClick"], ti = /* @__PURE__ */ g({
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
        })) : (s(), o("i", Xr))
      ], 8, Jr),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Qr, [
            (s(!0), o(V, null, b(n.value, (m) => (s(), o("button", {
              key: m,
              class: w(["trx-timepicker__option", { "trx-timepicker__option--active": m === t.modelValue }]),
              onClick: (x) => c(m)
            }, v(m), 11, Zr))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), zT = /* @__PURE__ */ A(ti, [["__scopeId", "data-v-6f06dd60"]]), ei = ["accept", "multiple"], si = { class: "trx-dropzone__label" }, ai = {
  key: 0,
  class: "trx-dropzone__hint"
}, li = {
  key: 1,
  class: "trx-dropzone__hint"
}, ni = /* @__PURE__ */ g({
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
      }, null, 40, ei),
      f[0] || (f[0] = e("i", { class: "pi pi-upload trx-dropzone__icon" }, null, -1)),
      e("p", si, v(t.label), 1),
      t.hint ? (s(), o("p", ai, v(t.hint), 1)) : h("", !0),
      t.maxSize ? (s(), o("p", li, "Máx. " + v(t.maxSize) + "MB por arquivo", 1)) : h("", !0)
    ], 34));
  }
}), DT = /* @__PURE__ */ A(ni, [["__scopeId", "data-v-83847ba3"]]), oi = { class: "trx-address__row" }, ri = { class: "trx-address__field trx-address__field--zip" }, ii = { class: "trx-address__label" }, ci = { key: 0 }, ui = { class: "trx-address__cep-wrap" }, di = ["value", "disabled"], _i = {
  key: 0,
  class: "pi pi-spin pi-spinner trx-address__cep-icon"
}, pi = {
  key: 0,
  class: "trx-address__error"
}, vi = { class: "trx-address__row trx-address__row--street" }, mi = { class: "trx-address__field" }, fi = ["value", "disabled"], xi = { class: "trx-address__field trx-address__field--number" }, hi = ["value", "disabled"], $i = { class: "trx-address__row" }, gi = { class: "trx-address__field" }, bi = ["value", "disabled"], yi = { class: "trx-address__field" }, ki = ["value", "disabled"], wi = { class: "trx-address__row" }, Ti = { class: "trx-address__field" }, Ci = ["value", "disabled"], Si = { class: "trx-address__field trx-address__field--state" }, Ii = ["value", "disabled"], Vi = /* @__PURE__ */ g({
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
        e("div", oi, [
          e("div", ri, [
            e("label", ii, [
              d[7] || (d[7] = N("CEP ", -1)),
              t.required ? (s(), o("span", ci, "*")) : h("", !0)
            ]),
            e("div", ui, [
              e("input", {
                class: w(["trx-address__input", { "trx-address__input--error": n.value }]),
                type: "text",
                maxlength: "9",
                placeholder: "00000-000",
                value: ((p = t.modelValue) == null ? void 0 : p.zipCode) ?? "",
                disabled: t.disabled,
                onInput: d[0] || (d[0] = (M) => u(M.target.value))
              }, null, 42, di),
              l.value ? (s(), o("i", _i)) : h("", !0)
            ]),
            n.value ? (s(), o("span", pi, v(n.value), 1)) : h("", !0)
          ])
        ]),
        e("div", vi, [
          e("div", mi, [
            d[8] || (d[8] = e("label", { class: "trx-address__label" }, "Logradouro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Rua, Avenida...",
              value: ((m = t.modelValue) == null ? void 0 : m.street) ?? "",
              disabled: t.disabled,
              onInput: d[1] || (d[1] = (M) => c("street", M.target.value))
            }, null, 40, fi)
          ]),
          e("div", xi, [
            d[9] || (d[9] = e("label", { class: "trx-address__label" }, "Número", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Nº",
              value: ((x = t.modelValue) == null ? void 0 : x.number) ?? "",
              disabled: t.disabled,
              onInput: d[2] || (d[2] = (M) => c("number", M.target.value))
            }, null, 40, hi)
          ])
        ]),
        e("div", $i, [
          e("div", gi, [
            d[10] || (d[10] = e("label", { class: "trx-address__label" }, "Complemento", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Apto, Sala...",
              value: ((f = t.modelValue) == null ? void 0 : f.complement) ?? "",
              disabled: t.disabled,
              onInput: d[3] || (d[3] = (M) => c("complement", M.target.value))
            }, null, 40, bi)
          ]),
          e("div", yi, [
            d[11] || (d[11] = e("label", { class: "trx-address__label" }, "Bairro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Bairro",
              value: ((T = t.modelValue) == null ? void 0 : T.district) ?? "",
              disabled: t.disabled,
              onInput: d[4] || (d[4] = (M) => c("district", M.target.value))
            }, null, 40, ki)
          ])
        ]),
        e("div", wi, [
          e("div", Ti, [
            d[12] || (d[12] = e("label", { class: "trx-address__label" }, "Cidade", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Cidade",
              value: (($ = t.modelValue) == null ? void 0 : $.city) ?? "",
              disabled: t.disabled,
              onInput: d[5] || (d[5] = (M) => c("city", M.target.value))
            }, null, 40, Ci)
          ]),
          e("div", Si, [
            d[13] || (d[13] = e("label", { class: "trx-address__label" }, "UF", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              maxlength: "2",
              placeholder: "UF",
              value: ((C = t.modelValue) == null ? void 0 : C.state) ?? "",
              disabled: t.disabled,
              onInput: d[6] || (d[6] = (M) => c("state", M.target.value))
            }, null, 40, Ii)
          ])
        ])
      ], 2);
    };
  }
}), ET = /* @__PURE__ */ A(Vi, [["__scopeId", "data-v-4f713181"]]), Bi = { class: "trx-page-layout" }, Pi = {
  key: 0,
  class: "trx-page-layout__breadcrumb"
}, Ai = {
  key: 0,
  class: "trx-page-layout__sep"
}, Mi = ["href"], Li = {
  key: 2,
  class: "trx-page-layout__crumb"
}, zi = {
  key: 1,
  class: "trx-page-layout__header"
}, Di = { class: "trx-page-layout__heading" }, Ei = {
  key: 0,
  class: "trx-page-layout__skeleton trx-page-layout__skeleton--title"
}, Ri = {
  key: 0,
  class: "trx-page-layout__title"
}, Ni = {
  key: 1,
  class: "trx-page-layout__subtitle"
}, qi = {
  key: 0,
  class: "trx-page-layout__actions"
}, Fi = { class: "trx-page-layout__content" }, Oi = {
  key: 2,
  class: "trx-page-layout__footer"
}, ji = /* @__PURE__ */ g({
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
      return s(), o("div", Bi, [
        (i = t.breadcrumbs) != null && i.length ? (s(), o("div", Pi, [
          (s(!0), o(V, null, b(t.breadcrumbs, (l, n) => (s(), o(V, { key: n }, [
            n > 0 ? (s(), o("span", Ai, "/")) : h("", !0),
            l.to ? (s(), o("a", {
              key: 1,
              class: "trx-page-layout__crumb trx-page-layout__crumb--link",
              href: l.to
            }, v(l.label), 9, Mi)) : (s(), o("span", Li, v(l.label), 1))
          ], 64))), 128))
        ])) : h("", !0),
        t.title || a.$slots.header ? (s(), o("div", zi, [
          e("div", Di, [
            t.loading ? (s(), o("div", Ei)) : (s(), o(V, { key: 1 }, [
              t.title ? (s(), o("h1", Ri, v(t.title), 1)) : h("", !0),
              t.subtitle ? (s(), o("p", Ni, v(t.subtitle), 1)) : h("", !0)
            ], 64))
          ]),
          a.$slots.actions ? (s(), o("div", qi, [
            I(a.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0),
          I(a.$slots, "header", {}, void 0, !0)
        ])) : h("", !0),
        e("div", Fi, [
          I(a.$slots, "default", {}, void 0, !0)
        ]),
        a.$slots.footer ? (s(), o("div", Oi, [
          I(a.$slots, "footer", {}, void 0, !0)
        ])) : h("", !0)
      ]);
    };
  }
}), RT = /* @__PURE__ */ A(ji, [["__scopeId", "data-v-2b3d5429"]]), Hi = { class: "trx-tabs-router" }, Ui = {
  class: "trx-tabs-router__nav",
  role: "tablist"
}, Wi = ["disabled", "aria-selected", "onClick"], Gi = {
  key: 1,
  class: "trx-tabs-router__badge"
}, Ki = {
  class: "trx-tabs-router__content",
  role: "tabpanel"
}, Yi = /* @__PURE__ */ g({
  __name: "TrxTabsRouter",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", Hi, [
      e("nav", Ui, [
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
          n.badge !== void 0 ? (s(), o("span", Gi, v(n.badge), 1)) : h("", !0)
        ], 10, Wi))), 128))
      ]),
      e("div", Ki, [
        I(i.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), NT = /* @__PURE__ */ A(Yi, [["__scopeId", "data-v-e69a3f91"]]), Ji = { class: "trx-mobile-nav" }, Xi = ["onClick"], Qi = { class: "trx-mobile-nav__icon-wrap" }, Zi = {
  key: 0,
  class: "trx-mobile-nav__badge"
}, tc = { class: "trx-mobile-nav__label" }, ec = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("nav", Ji, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("button", {
        key: c.key,
        class: w(["trx-mobile-nav__item", { "trx-mobile-nav__item--active": t.modelValue === c.key }]),
        onClick: (u) => i(c)
      }, [
        e("div", Qi, [
          e("i", {
            class: w(c.icon)
          }, null, 2),
          c.badge ? (s(), o("span", Zi, v(c.badge > 99 ? "99+" : c.badge), 1)) : h("", !0)
        ]),
        e("span", tc, v(c.label), 1)
      ], 10, Xi))), 128))
    ]));
  }
}), qT = /* @__PURE__ */ A(ec, [["__scopeId", "data-v-5b0a32c4"]]), sc = { class: "trx-user-menu" }, ac = ["src", "alt"], lc = {
  key: 1,
  class: "trx-user-menu__initials"
}, nc = { class: "trx-user-menu__info" }, oc = { class: "trx-user-menu__name" }, rc = {
  key: 0,
  class: "trx-user-menu__role"
}, ic = {
  key: 0,
  class: "trx-user-menu__panel"
}, cc = {
  key: 0,
  class: "trx-user-menu__email"
}, uc = {
  key: 0,
  class: "trx-user-menu__sep"
}, dc = ["onClick"], _c = /* @__PURE__ */ g({
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
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", sc, [
      e("button", {
        class: "trx-user-menu__trigger",
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        t.avatar ? (s(), o("img", {
          key: 0,
          src: t.avatar,
          alt: t.name,
          class: "trx-user-menu__avatar"
        }, null, 8, ac)) : (s(), o("span", lc, v(n(t.name)), 1)),
        e("div", nc, [
          e("span", oc, v(t.name), 1),
          t.role ? (s(), o("span", rc, v(t.role), 1)) : h("", !0)
        ]),
        e("i", {
          class: w(["pi pi-chevron-down trx-user-menu__arrow", { "trx-user-menu__arrow--open": i.value }])
        }, null, 2)
      ]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", ic, [
            t.email ? (s(), o("div", cc, v(t.email), 1)) : h("", !0),
            (s(!0), o(V, null, b(t.items, (d) => (s(), o(V, {
              key: d.key
            }, [
              d.separator ? (s(), o("hr", uc)) : (s(), o("button", {
                key: 1,
                class: w(["trx-user-menu__item", { "trx-user-menu__item--danger": d.danger }]),
                onClick: (p) => l(d)
              }, [
                d.icon ? (s(), o("i", {
                  key: 0,
                  class: w(d.icon)
                }, null, 2)) : h("", !0),
                e("span", null, v(d.label), 1)
              ], 10, dc))
            ], 64))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), FT = /* @__PURE__ */ A(_c, [["__scopeId", "data-v-919df4aa"]]), pc = { class: "trx-profile-card" }, vc = {
  key: 0,
  class: "trx-profile-card__loading"
}, mc = { class: "trx-profile-card__avatar-wrap" }, fc = ["src", "alt"], xc = {
  key: 1,
  class: "trx-profile-card__initials"
}, hc = { class: "trx-profile-card__name" }, $c = {
  key: 0,
  class: "trx-profile-card__role"
}, gc = {
  key: 1,
  class: "trx-profile-card__email"
}, bc = { class: "trx-profile-card__status" }, yc = {
  key: 2,
  class: "trx-profile-card__stats"
}, kc = { class: "trx-profile-card__stat-value" }, wc = { class: "trx-profile-card__stat-label" }, Tc = {
  key: 3,
  class: "trx-profile-card__actions"
}, Cc = /* @__PURE__ */ g({
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
      return s(), o("div", pc, [
        t.loading ? (s(), o("div", vc, [...n[0] || (n[0] = [
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--avatar" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--name" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--role" }, null, -1)
        ])])) : (s(), o(V, { key: 1 }, [
          e("div", mc, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name,
              class: "trx-profile-card__avatar"
            }, null, 8, fc)) : (s(), o("span", xc, v(i(t.name)), 1)),
            e("span", {
              class: "trx-profile-card__status-dot",
              style: R({ background: r[t.status ?? "offline"] })
            }, null, 4)
          ]),
          e("h3", hc, v(t.name), 1),
          t.role ? (s(), o("p", $c, v(t.role), 1)) : h("", !0),
          t.email ? (s(), o("p", gc, v(t.email), 1)) : h("", !0),
          e("div", bc, [
            e("span", {
              class: "trx-profile-card__status-label",
              style: R({ color: r[t.status ?? "offline"] })
            }, v(a[t.status ?? "offline"]), 5)
          ]),
          (c = t.stats) != null && c.length ? (s(), o("div", yc, [
            (s(!0), o(V, null, b(t.stats, (u) => (s(), o("div", {
              key: u.label,
              class: "trx-profile-card__stat"
            }, [
              e("span", kc, v(u.value), 1),
              e("span", wc, v(u.label), 1)
            ]))), 128))
          ])) : h("", !0),
          l.$slots.actions ? (s(), o("div", Tc, [
            I(l.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 64))
      ]);
    };
  }
}), OT = /* @__PURE__ */ A(Cc, [["__scopeId", "data-v-b3cb7a45"]]), Sc = /* @__PURE__ */ g({
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
}), jT = /* @__PURE__ */ A(Sc, [["__scopeId", "data-v-fa2938f0"]]), HT = /* @__PURE__ */ g({
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
}), Ic = { class: "trx-notif-bell" }, Vc = {
  key: 0,
  class: "trx-notif-bell__count"
}, Bc = {
  key: 0,
  class: "trx-notif-bell__panel"
}, Pc = { class: "trx-notif-bell__header" }, Ac = {
  key: 0,
  class: "trx-notif-bell__loading"
}, Mc = {
  key: 1,
  class: "trx-notif-bell__empty"
}, Lc = {
  key: 2,
  class: "trx-notif-bell__list"
}, zc = ["onClick"], Dc = { class: "trx-notif-bell__item-content" }, Ec = { class: "trx-notif-bell__item-title" }, Rc = {
  key: 0,
  class: "trx-notif-bell__item-body"
}, Nc = {
  key: 1,
  class: "trx-notif-bell__item-time"
}, qc = {
  key: 0,
  class: "trx-notif-bell__item-dot"
}, Fc = /* @__PURE__ */ g({
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
    return W(() => document.addEventListener("click", d, !0)), G(() => document.removeEventListener("click", d, !0)), (p, m) => (s(), o("div", Ic, [
      e("button", {
        class: w(["trx-notif-bell__btn", { "trx-notif-bell__btn--active": l.value }]),
        onClick: _
      }, [
        m[1] || (m[1] = e("i", { class: "pi pi-bell" }, null, -1)),
        n() > 0 ? (s(), o("span", Vc, v(n() > 99 ? "99+" : n()), 1)) : h("", !0)
      ], 2),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Bc, [
            e("div", Pc, [
              m[2] || (m[2] = e("span", { class: "trx-notif-bell__title" }, "Notificações", -1)),
              n() > 0 ? (s(), o("button", {
                key: 0,
                class: "trx-notif-bell__read-all",
                onClick: m[0] || (m[0] = (x) => i("read-all"))
              }, " Marcar todas como lidas ")) : h("", !0)
            ]),
            t.loading ? (s(), o("div", Ac, [...m[3] || (m[3] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : t.items.length ? (s(), o("div", Lc, [
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
                e("div", Dc, [
                  e("p", Ec, v(x.title), 1),
                  x.body ? (s(), o("p", Rc, v(x.body), 1)) : h("", !0),
                  x.time ? (s(), o("span", Nc, v(x.time), 1)) : h("", !0)
                ]),
                x.read ? h("", !0) : (s(), o("div", qc))
              ], 10, zc))), 128))
            ])) : (s(), o("div", Mc, [...m[4] || (m[4] = [
              e("i", { class: "pi pi-bell-slash" }, null, -1),
              e("span", null, "Nenhuma notificação", -1)
            ])]))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), UT = /* @__PURE__ */ A(Fc, [["__scopeId", "data-v-e26fa7e6"]]), Oc = {
  key: 0,
  class: "trx-conn-status__label"
}, jc = /* @__PURE__ */ g({
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
      t.showLabel ? (s(), o("span", Oc, v(i.value), 1)) : h("", !0)
    ], 4));
  }
}), WT = /* @__PURE__ */ A(jc, [["__scopeId", "data-v-da8341e1"]]), Hc = { class: "trx-confirm-btn" }, Uc = {
  key: "idle",
  class: "trx-confirm-btn__idle"
}, Wc = ["disabled"], Gc = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Kc = {
  key: "confirm",
  class: "trx-confirm-btn__confirm-row"
}, Yc = /* @__PURE__ */ g({
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
    return (d, p) => (s(), o("div", Hc, [
      O(j, {
        name: "trx-confirm-swap",
        mode: "out-in"
      }, {
        default: B(() => [
          l.value ? (s(), o("div", Kc, [
            p[0] || (p[0] = e("span", { class: "trx-confirm-btn__question" }, "Tem certeza?", -1)),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--confirm",
              onClick: u
            }, v(t.confirmLabel), 1),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--cancel",
              onClick: _
            }, v(t.cancelLabel), 1)
          ])) : (s(), o("div", Uc, [
            e("button", {
              class: w(["trx-confirm-btn__btn", `trx-confirm-btn__btn--${t.variant}`]),
              disabled: t.disabled || t.loading,
              onClick: c
            }, [
              t.loading ? (s(), o("i", Gc)) : t.icon ? (s(), o("i", {
                key: 1,
                class: w(t.icon)
              }, null, 2)) : h("", !0),
              e("span", null, v(t.label), 1)
            ], 10, Wc)
          ]))
        ]),
        _: 1
      })
    ]));
  }
}), GT = /* @__PURE__ */ A(Yc, [["__scopeId", "data-v-8d2f9f6d"]]), Jc = { key: 1 }, Xc = /* @__PURE__ */ g({
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
          r.value.text ? (s(), o("span", Jc, v(r.value.text), 1)) : h("", !0)
        ], 4)) : h("", !0)
      ]),
      _: 1
    }));
  }
}), KT = /* @__PURE__ */ A(Xc, [["__scopeId", "data-v-74d4ab40"]]), Qc = { class: "trx-chat-bubble__content" }, Zc = {
  key: 0,
  class: "trx-chat-bubble__author"
}, tu = { class: "trx-chat-bubble__body" }, eu = {
  key: 0,
  class: "trx-chat-bubble__text"
}, su = ["src", "alt"], au = ["src"], lu = ["href"], nu = { class: "trx-chat-bubble__meta" }, ou = {
  key: 0,
  class: "trx-chat-bubble__time"
}, ru = /* @__PURE__ */ g({
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
      e("div", Qc, [
        t.author && t.direction === "in" ? (s(), o("span", Zc, v(t.author), 1)) : h("", !0),
        e("div", tu, [
          I(i.$slots, "default", {}, () => [
            t.type === "text" ? (s(), o("p", eu, v(t.message), 1)) : t.type === "image" && t.fileUrl ? (s(), o("img", {
              key: 1,
              class: "trx-chat-bubble__image",
              src: t.fileUrl,
              alt: t.fileName
            }, null, 8, su)) : t.type === "audio" && t.fileUrl ? (s(), o("audio", {
              key: 2,
              class: "trx-chat-bubble__audio",
              src: t.fileUrl,
              controls: ""
            }, null, 8, au)) : t.type === "file" ? (s(), o("a", {
              key: 3,
              class: "trx-chat-bubble__file",
              href: t.fileUrl,
              target: "_blank",
              rel: "noopener"
            }, [
              l[0] || (l[0] = e("i", { class: "pi pi-file" }, null, -1)),
              e("span", null, v(t.fileName ?? "Arquivo"), 1)
            ], 8, lu)) : h("", !0)
          ], !0)
        ]),
        e("div", nu, [
          t.time ? (s(), o("span", ou, v(t.time), 1)) : h("", !0),
          t.status && t.direction === "out" ? (s(), o("i", {
            key: 1,
            class: w([a[t.status], "trx-chat-bubble__status"]),
            style: R({ color: r[t.status] })
          }, null, 6)) : h("", !0)
        ])
      ])
    ], 2));
  }
}), iu = /* @__PURE__ */ A(ru, [["__scopeId", "data-v-4e61c314"]]), cu = { class: "trx-chat-window" }, uu = {
  key: 0,
  class: "trx-chat-window__header"
}, du = { class: "trx-chat-window__avatar" }, _u = ["src", "alt"], pu = { key: 1 }, vu = { class: "trx-chat-window__contact-info" }, mu = { class: "trx-chat-window__contact-name" }, fu = {
  key: 0,
  class: "trx-chat-window__contact-status"
}, xu = {
  key: 0,
  class: "trx-chat-window__loading"
}, hu = {
  key: 1,
  class: "trx-chat-window__empty"
}, $u = { class: "trx-chat-window__composer" }, gu = ["disabled"], bu = ["placeholder", "disabled"], yu = ["disabled"], ku = /* @__PURE__ */ g({
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
    return (p, m) => (s(), o("div", cu, [
      t.contact ? (s(), o("div", uu, [
        e("div", du, [
          t.contact.avatar ? (s(), o("img", {
            key: 0,
            src: t.contact.avatar,
            alt: t.contact.name
          }, null, 8, _u)) : (s(), o("span", pu, v(d(t.contact.name)), 1))
        ]),
        e("div", vu, [
          e("span", mu, v(t.contact.name), 1),
          t.contact.status ?? t.contact.subtitle ? (s(), o("span", fu, v(t.contact.status ?? t.contact.subtitle), 1)) : h("", !0)
        ]),
        I(p.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      e("div", {
        ref_key: "messagesEl",
        ref: n,
        class: "trx-chat-window__messages"
      }, [
        t.loading ? (s(), o("div", xu, [...m[2] || (m[2] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : t.messages.length ? h("", !0) : (s(), o("div", hu, [...m[3] || (m[3] = [
          e("i", { class: "pi pi-comments" }, null, -1),
          e("span", null, "Nenhuma mensagem ainda", -1)
        ])])),
        (s(!0), o(V, null, b(t.messages, (x) => (s(), L(iu, Ct({
          key: x.id
        }, { ref_for: !0 }, x), null, 16))), 128))
      ], 512),
      e("div", $u, [
        e("button", {
          class: "trx-chat-window__attach",
          onClick: m[0] || (m[0] = (x) => i("attach")),
          title: "Anexar arquivo",
          disabled: t.disabled
        }, [...m[4] || (m[4] = [
          e("i", { class: "pi pi-paperclip" }, null, -1)
        ])], 8, gu),
        Y(e("textarea", {
          class: "trx-chat-window__input",
          placeholder: t.placeholder,
          "onUpdate:modelValue": m[1] || (m[1] = (x) => l.value = x),
          rows: "1",
          disabled: t.disabled,
          onKeydown: u
        }, null, 40, bu), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-chat-window__send",
          disabled: !l.value.trim() || t.disabled,
          onClick: c,
          title: "Enviar"
        }, [...m[5] || (m[5] = [
          e("i", { class: "pi pi-send" }, null, -1)
        ])], 8, yu)
      ])
    ]));
  }
}), YT = /* @__PURE__ */ A(ku, [["__scopeId", "data-v-5f901218"]]), wu = ["title"], Tu = { key: 0 }, Cu = /* @__PURE__ */ g({
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
      !t.iconOnly && t.showLabel ? (s(), o("span", Tu, v(P(i).label), 1)) : h("", !0)
    ], 14, wu));
  }
}), ut = /* @__PURE__ */ A(Cu, [["__scopeId", "data-v-90daa003"]]), Su = { class: "trx-contact-card" }, Iu = {
  key: 0,
  class: "trx-contact-card__skeleton"
}, Vu = { class: "trx-contact-card__left" }, Bu = { class: "trx-contact-card__avatar" }, Pu = ["src", "alt"], Au = { key: 1 }, Mu = { class: "trx-contact-card__info" }, Lu = { class: "trx-contact-card__name" }, zu = {
  key: 0,
  class: "trx-contact-card__detail"
}, Du = {
  key: 1,
  class: "trx-contact-card__detail"
}, Eu = {
  key: 2,
  class: "trx-contact-card__meta"
}, Ru = {
  key: 1,
  class: "trx-contact-card__last"
}, Nu = { class: "trx-contact-card__actions" }, qu = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", Su, [
      t.loading ? (s(), o("div", Iu, [...n[3] || (n[3] = [
        e("div", { class: "trx-contact-card__skel trx-contact-card__skel--avatar" }, null, -1),
        e("div", { class: "trx-contact-card__skel-info" }, [
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--name" }),
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--sub" })
        ], -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", Vu, [
          e("div", Bu, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name
            }, null, 8, Pu)) : (s(), o("span", Au, v(i(t.name)), 1))
          ]),
          e("div", Mu, [
            e("span", Lu, v(t.name), 1),
            t.phone ? (s(), o("span", zu, [
              n[4] || (n[4] = e("i", { class: "pi pi-phone" }, null, -1)),
              N(" " + v(t.phone), 1)
            ])) : h("", !0),
            t.email ? (s(), o("span", Du, [
              n[5] || (n[5] = e("i", { class: "pi pi-envelope" }, null, -1)),
              N(" " + v(t.email), 1)
            ])) : h("", !0),
            t.channel || t.lastContact ? (s(), o("div", Eu, [
              t.channel ? (s(), L(ut, {
                key: 0,
                channel: t.channel,
                size: "sm"
              }, null, 8, ["channel"])) : h("", !0),
              t.lastContact ? (s(), o("span", Ru, v(t.lastContact), 1)) : h("", !0)
            ])) : h("", !0)
          ])
        ]),
        e("div", Nu, [
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
}), JT = /* @__PURE__ */ A(qu, [["__scopeId", "data-v-3bd57308"]]), Fu = { class: "trx-ticket-card__top" }, Ou = { class: "trx-ticket-card__id" }, ju = { class: "trx-ticket-card__badges" }, Hu = ["title"], Uu = { class: "trx-ticket-card__title" }, Wu = { class: "trx-ticket-card__meta" }, Gu = {
  key: 0,
  class: "trx-ticket-card__meta-item"
}, Ku = {
  key: 1,
  class: "trx-ticket-card__meta-item"
}, Yu = {
  key: 2,
  class: "trx-ticket-card__meta-item trx-ticket-card__meta-item--time"
}, Ju = /* @__PURE__ */ g({
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
      e("div", Fu, [
        e("span", Ou, "#" + v(t.id), 1),
        e("div", ju, [
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
          ], 12, Hu)
        ])
      ]),
      e("p", Uu, v(t.title), 1),
      e("div", Wu, [
        t.customer ? (s(), o("span", Gu, [
          c[4] || (c[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.customer), 1)
        ])) : h("", !0),
        t.agent ? (s(), o("span", Ku, [
          c[5] || (c[5] = e("i", { class: "pi pi-headphones" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0),
        t.updatedAt ?? t.createdAt ? (s(), o("span", Yu, [
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
}), XT = /* @__PURE__ */ A(Ju, [["__scopeId", "data-v-c88df6d1"]]), Xu = { class: "trx-call-history" }, Qu = {
  key: 0,
  class: "trx-call-history__empty"
}, Zu = {
  key: 1,
  class: "trx-call-history__empty"
}, td = {
  key: 2,
  class: "trx-call-history__list"
}, ed = ["onClick"], sd = { class: "trx-call-history__info" }, ad = { class: "trx-call-history__name" }, ld = { class: "trx-call-history__sub" }, nd = { class: "trx-call-history__meta" }, od = { class: "trx-call-history__duration" }, rd = { class: "trx-call-history__time" }, id = ["onClick"], cd = ["onClick"], ud = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", Xu, [
      t.loading ? (s(), o("div", Qu, [...c[1] || (c[1] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", td, [
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
          e("div", sd, [
            e("span", ad, v(u.callerName ?? u.callerId), 1),
            e("span", ld, v(u.callerId) + " · " + v(i[u.direction].label), 1)
          ]),
          e("div", nd, [
            e("span", od, v(l(u.duration)), 1),
            e("span", rd, v(u.startedAt), 1)
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
            ])], 8, id)) : h("", !0),
            e("button", {
              class: "trx-call-history__btn",
              title: "Ligar de volta",
              onClick: (_) => r("callback", u)
            }, [...c[4] || (c[4] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, cd)
          ])
        ], 8, ed))), 128))
      ])) : (s(), o("div", Zu, [...c[2] || (c[2] = [
        e("i", { class: "pi pi-phone-slash" }, null, -1),
        e("span", null, "Nenhuma chamada encontrada", -1)
      ])]))
    ]));
  }
}), QT = /* @__PURE__ */ A(ud, [["__scopeId", "data-v-09f018c0"]]), dd = { class: "trx-call-script" }, _d = { class: "trx-call-script__header" }, pd = { class: "trx-call-script__title" }, vd = { class: "trx-call-script__progress" }, md = { class: "trx-call-script__progress-bar" }, fd = {
  key: 0,
  class: "trx-call-script__step"
}, xd = { class: "trx-call-script__step-header" }, hd = { class: "trx-call-script__step-title" }, $d = { class: "trx-call-script__step-content" }, gd = {
  key: 1,
  class: "trx-call-script__empty"
}, bd = { class: "trx-call-script__nav" }, yd = ["disabled"], kd = {
  key: 0,
  class: "pi pi-chevron-right"
}, wd = {
  key: 1,
  class: "pi pi-check"
}, Td = /* @__PURE__ */ g({
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
    return (_, d) => (s(), o("div", dd, [
      e("div", _d, [
        e("span", pd, v(t.title), 1),
        e("span", vd, v(l.value + 1) + " / " + v(t.steps.length), 1)
      ]),
      e("div", md, [
        e("div", {
          class: "trx-call-script__progress-fill",
          style: R({ width: `${(l.value + 1) / t.steps.length * 100}%` })
        }, null, 4)
      ]),
      t.steps[l.value] ? (s(), o("div", fd, [
        e("div", xd, [
          e("i", {
            class: w(u[t.steps[l.value].type ?? "info"])
          }, null, 2),
          e("h4", hd, v(t.steps[l.value].title), 1)
        ]),
        e("p", $d, v(t.steps[l.value].content), 1)
      ])) : (s(), o("div", gd, [...d[0] || (d[0] = [
        e("i", { class: "pi pi-file-edit" }, null, -1),
        e("span", null, "Nenhum script disponível", -1)
      ])])),
      e("div", bd, [
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--secondary",
          disabled: l.value === 0,
          onClick: c
        }, [...d[1] || (d[1] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, yd),
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--primary",
          onClick: n
        }, [
          N(v(l.value === t.steps.length - 1 ? "Concluir" : "Próximo") + " ", 1),
          l.value < t.steps.length - 1 ? (s(), o("i", kd)) : (s(), o("i", wd))
        ])
      ])
    ]));
  }
}), ZT = /* @__PURE__ */ A(Td, [["__scopeId", "data-v-b430310e"]]), Cd = ["disabled"], Sd = {
  key: 0,
  class: "trx-disposition__selected"
}, Id = {
  key: 1,
  class: "trx-disposition__placeholder"
}, Vd = {
  key: 0,
  class: "trx-disposition__panel"
}, Bd = ["onClick"], Pd = {
  key: 1,
  class: "pi pi-pencil trx-disposition__note-icon",
  title: "Requer observação"
}, Ad = {
  key: 0,
  class: "trx-disposition__note-wrap"
}, Md = ["value"], Ld = /* @__PURE__ */ g({
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
          c.value ? (s(), o("span", Sd, [
            c.value.icon ? (s(), o("i", {
              key: 0,
              class: w(c.value.icon),
              style: R({ color: c.value.color })
            }, null, 6)) : h("", !0),
            e("span", {
              style: R({ color: c.value.color })
            }, v(c.value.label), 5)
          ])) : (s(), o("span", Id, v(t.placeholder), 1)),
          e("i", {
            class: w(["pi pi-chevron-down trx-disposition__arrow", { "trx-disposition__arrow--open": l.value }])
          }, null, 2)
        ], 8, Cd),
        O(j, { name: "trx-dropdown" }, {
          default: B(() => [
            l.value ? (s(), o("div", Vd, [
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
                f.requireNote ? (s(), o("i", Pd)) : h("", !0)
              ], 10, Bd))), 128))
            ])) : h("", !0)
          ]),
          _: 1
        }),
        (x = c.value) != null && x.requireNote ? (s(), o("div", Ad, [
          e("textarea", {
            class: "trx-disposition__note",
            placeholder: "Adicione uma observação...",
            value: n.value,
            rows: "3",
            onInput: m[1] || (m[1] = (f) => {
              n.value = f.target.value, i("update:note", n.value);
            })
          }, null, 40, Md),
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
}), tC = /* @__PURE__ */ A(Ld, [["__scopeId", "data-v-52a3852f"]]), zd = { class: "trx-dialer-list" }, Dd = {
  key: 0,
  class: "trx-dialer-list__empty"
}, Ed = ["onClick"], Rd = { class: "trx-dialer-list__info" }, Nd = { class: "trx-dialer-list__name" }, qd = { class: "trx-dialer-list__phone" }, Fd = { class: "trx-dialer-list__meta" }, Od = {
  key: 0,
  class: "trx-dialer-list__attempts"
}, jd = ["onClick"], Hd = ["onClick"], Ud = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", zd, [
      t.loading ? (s(), o("div", Dd, [...n[1] || (n[1] = [
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
        e("div", Rd, [
          e("span", Nd, v(c.name), 1),
          e("span", qd, v(c.phone), 1)
        ]),
        e("div", Fd, [
          e("span", {
            class: "trx-dialer-list__status-label",
            style: R({ color: i[c.status].color })
          }, v(i[c.status].label), 5),
          c.attempts ? (s(), o("span", Od, v(c.attempts) + "x", 1)) : h("", !0)
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
          ])], 8, jd)) : h("", !0),
          c.status === "pending" ? (s(), o("button", {
            key: 1,
            class: "trx-dialer-list__btn",
            title: "Pular",
            onClick: (u) => r("skip", c.id)
          }, [...n[3] || (n[3] = [
            e("i", { class: "pi pi-forward" }, null, -1)
          ])], 8, Hd)) : h("", !0)
        ])
      ], 10, Ed))), 128))
    ]));
  }
}), eC = /* @__PURE__ */ A(Ud, [["__scopeId", "data-v-179000fd"]]), Wd = { class: "trx-ivr" }, Gd = {
  key: 0,
  class: "trx-ivr__toolbar"
}, Kd = ["onClick"], Yd = { class: "trx-ivr__canvas" }, Jd = ["onClick"], Xd = { class: "trx-ivr__node-type" }, Qd = { class: "trx-ivr__node-body" }, Zd = { class: "trx-ivr__node-label" }, t_ = {
  key: 0,
  class: "trx-ivr__node-options"
}, e_ = { class: "trx-ivr__key" }, s_ = {
  key: 0,
  class: "trx-ivr__empty"
}, a_ = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", Wd, [
      t.readonly ? h("", !0) : (s(), o("div", Gd, [
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
        ], 12, Kd)), 64))
      ])),
      e("div", Yd, [
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
              e("span", Xd, v(l[d.type].label), 1)
            ], 4),
            e("div", Qd, [
              e("span", Zd, v(d.label), 1),
              (p = d.options) != null && p.length ? (s(), o("div", t_, [
                (s(!0), o(V, null, b(d.options, (m) => (s(), o("div", {
                  key: m.key,
                  class: "trx-ivr__node-option"
                }, [
                  e("kbd", e_, v(m.key), 1),
                  e("span", null, v(m.label), 1)
                ]))), 128))
              ])) : h("", !0)
            ])
          ], 14, Jd);
        }), 128)),
        t.nodes.length ? h("", !0) : (s(), o("div", s_, [..._[1] || (_[1] = [
          e("i", {
            class: "pi pi-sitemap",
            style: { "font-size": "2rem", color: "var(--trx-text-secondary)" }
          }, null, -1),
          e("span", null, "Nenhum nó. Adicione um nó para começar.", -1)
        ])]))
      ])
    ]));
  }
}), sC = /* @__PURE__ */ A(a_, [["__scopeId", "data-v-af6b0bd0"]]), l_ = ["width", "height", "viewBox"], n_ = ["cx", "cy", "r", "stroke", "stroke-width"], o_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray"], r_ = { class: "trx-progress-ring__label" }, i_ = {
  key: 0,
  class: "trx-progress-ring__unit"
}, c_ = {
  key: 1,
  class: "trx-progress-ring__text"
}, u_ = /* @__PURE__ */ g({
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
        }, null, 8, n_),
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
        }, null, 12, o_)
      ], 8, l_)),
      e("div", r_, [
        t.showValue ? (s(), o("span", {
          key: 0,
          class: "trx-progress-ring__value",
          style: R({ color: t.color })
        }, [
          N(v(u.value), 1),
          t.unit ? (s(), o("span", i_, v(t.unit), 1)) : h("", !0)
        ], 4)) : h("", !0),
        t.label ? (s(), o("span", c_, v(t.label), 1)) : h("", !0)
      ])
    ], 4));
  }
}), aC = /* @__PURE__ */ A(u_, [["__scopeId", "data-v-a5c29afc"]]), d_ = { class: "trx-ticker" }, __ = {
  key: 0,
  class: "trx-ticker__label"
}, p_ = { key: 0 }, v_ = { key: 1 }, m_ = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", d_, [
      t.label ? (s(), o("span", __, v(t.label), 1)) : h("", !0),
      e("span", {
        class: w(["trx-ticker__value", `trx-ticker__value--${r.value}`]),
        style: R({ color: n.value })
      }, [
        t.prefix ? (s(), o("span", p_, v(t.prefix), 1)) : h("", !0),
        N(v(l.value), 1),
        t.unit ? (s(), o("span", v_, v(t.unit), 1)) : h("", !0)
      ], 6)
    ]));
  }
}), lC = /* @__PURE__ */ A(m_, [["__scopeId", "data-v-66246e1c"]]), f_ = { class: "trx-funnel" }, x_ = {
  key: 0,
  class: "trx-funnel__empty"
}, h_ = {
  key: 1,
  class: "trx-funnel__steps"
}, $_ = { class: "trx-funnel__bar-wrap" }, g_ = { class: "trx-funnel__info" }, b_ = { class: "trx-funnel__label" }, y_ = { class: "trx-funnel__numbers" }, k_ = {
  key: 1,
  class: "trx-funnel__pct"
}, w_ = {
  key: 0,
  class: "trx-funnel__drop"
}, T_ = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", f_, [
      t.steps.length ? (s(), o("div", h_, [
        (s(!0), o(V, null, b(l.value, (u, _) => (s(), o("div", {
          key: _,
          class: "trx-funnel__step"
        }, [
          e("div", $_, [
            e("div", {
              class: w(["trx-funnel__bar", { "trx-funnel__bar--animated": t.animated }]),
              style: R({ width: u.pct + "%", background: u.color })
            }, null, 6)
          ]),
          e("div", g_, [
            e("span", b_, v(u.label), 1),
            e("div", y_, [
              t.showValues ? (s(), o("span", {
                key: 0,
                class: "trx-funnel__value",
                style: R({ color: u.color })
              }, v(u.value.toLocaleString("pt-BR")), 5)) : h("", !0),
              t.showPercent ? (s(), o("span", k_, v(u.convRate) + "%", 1)) : h("", !0)
            ])
          ]),
          _ < l.value.length - 1 ? (s(), o("div", w_, [
            c[1] || (c[1] = e("i", { class: "pi pi-arrow-down" }, null, -1)),
            e("span", null, v((l.value[_ + 1].value - u.value).toLocaleString("pt-BR")), 1)
          ])) : h("", !0)
        ]))), 128))
      ])) : (s(), o("div", x_, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-chart-bar" }, null, -1),
        N(" Sem dados ", -1)
      ])]))
    ]));
  }
}), nC = /* @__PURE__ */ A(T_, [["__scopeId", "data-v-2ff82e24"]]), C_ = { class: "trx-line-chart" }, S_ = ["viewBox", "height"], I_ = ["x1", "y1", "x2", "y2"], V_ = ["x", "y"], B_ = ["x", "y"], P_ = { key: 0 }, A_ = ["id"], M_ = ["stop-color"], L_ = ["stop-color"], z_ = ["d", "fill"], D_ = ["d", "stroke"], E_ = ["cx", "cy", "fill"], R_ = {
  key: 0,
  class: "trx-line-chart__legend"
}, _t = 600, N_ = /* @__PURE__ */ g({
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
    return (f, T) => (s(), o("div", C_, [
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
        }, null, 8, I_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: i.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, V_))), 128)),
        (s(!0), o(V, null, b(t.labels, ($, C) => (s(), o("text", {
          key: "x" + C,
          x: d(C),
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($), 9, B_))), 128)),
        (s(!0), o(V, null, b(t.datasets, ($, C) => (s(), o(V, { key: C }, [
          t.filled ? (s(), o("defs", P_, [
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
              }, null, 8, M_),
              e("stop", {
                offset: "100%",
                "stop-color": $.color ?? a[C % a.length],
                "stop-opacity": "0.02"
              }, null, 8, L_)
            ], 8, A_)
          ])) : h("", !0),
          t.filled ? (s(), o("path", {
            key: 1,
            d: m($.data, !0),
            fill: `url(#fill-${C})`,
            stroke: "none"
          }, null, 8, z_)) : h("", !0),
          e("path", {
            d: m($.data, !1),
            stroke: $.color ?? a[C % a.length],
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, D_),
          t.showDots ? (s(!0), o(V, { key: 2 }, b($.data, (M, E) => (s(), o("circle", {
            key: E,
            cx: d(E),
            cy: p(M),
            r: "3",
            fill: $.color ?? a[C % a.length]
          }, null, 8, E_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, S_)),
      t.datasets.length > 1 ? (s(), o("div", R_, [
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
}), oC = /* @__PURE__ */ A(N_, [["__scopeId", "data-v-fe35e9f6"]]), q_ = { class: "trx-bar-chart" }, F_ = ["viewBox", "height"], O_ = ["x1", "y1", "x2", "y2"], j_ = ["x", "y"], H_ = ["x", "y"], U_ = ["x", "y", "width", "height", "fill"], W_ = ["x", "y", "width", "height", "fill"], G_ = ["x", "y", "fill"], K_ = {
  key: 0,
  class: "trx-bar-chart__legend"
}, pt = 600, Y_ = /* @__PURE__ */ g({
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
    return (T, $) => (s(), o("div", q_, [
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
        }, null, 8, O_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, (C) => (s(), o("text", {
          key: "yl" + C.v,
          x: i.left - 6,
          y: C.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C.v), 9, j_))), 128)),
        (s(!0), o(V, null, b(t.labels, (C, M) => (s(), o("text", {
          key: "xl" + M,
          x: i.left + M * u.value + u.value / 2,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C), 9, H_))), 128)),
        t.stacked ? (s(!0), o(V, { key: 1 }, b(f.value, (C, M) => (s(), o(V, { key: M }, [
          (s(!0), o(V, null, b(C, (E) => (s(), o("rect", {
            key: E.di,
            x: d(M, 0),
            y: p(E.v, E.offset),
            width: _.value,
            height: m(E.v),
            fill: t.datasets[E.di].color ?? a[E.di % a.length],
            rx: "2"
          }, null, 8, U_))), 128))
        ], 64))), 128)) : (s(!0), o(V, { key: 2 }, b(t.datasets, (C, M) => (s(), o(V, { key: M }, [
          (s(!0), o(V, null, b(C.data, (E, F) => (s(), o("rect", {
            key: F,
            x: d(F, M),
            y: p(E),
            width: _.value,
            height: m(E),
            fill: C.color ?? a[M % a.length],
            rx: "2"
          }, null, 8, W_))), 128)),
          t.showValues ? (s(!0), o(V, { key: 0 }, b(C.data, (E, F) => (s(), o("text", {
            key: "val" + F,
            x: d(F, M) + _.value / 2,
            y: p(E) - 3,
            "text-anchor": "middle",
            "font-size": "9",
            fill: C.color ?? a[M % a.length]
          }, v(E), 9, G_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, F_)),
      t.datasets.length > 1 ? (s(), o("div", K_, [
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
}), rC = /* @__PURE__ */ A(Y_, [["__scopeId", "data-v-cad2549b"]]), J_ = { class: "trx-donut" }, X_ = { class: "trx-donut__chart" }, Q_ = ["width", "height", "viewBox"], Z_ = ["cx", "cy", "r", "stroke-width"], tp = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], ep = ["x", "y"], sp = ["x", "y"], ap = {
  key: 0,
  class: "trx-donut__legend"
}, lp = { class: "trx-donut__legend-label" }, np = { class: "trx-donut__legend-pct" }, op = /* @__PURE__ */ g({
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
    return (d, p) => (s(), o("div", J_, [
      e("div", X_, [
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
          }, null, 8, Z_),
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
          }, null, 12, tp))), 128)),
          e("text", {
            x: i.value,
            y: l.value - (t.sublabel ? 8 : 4),
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            fill: "var(--trx-text-primary)"
          }, v(t.label ?? u.value.toLocaleString("pt-BR")), 9, ep),
          t.sublabel ? (s(), o("text", {
            key: 0,
            x: i.value,
            y: l.value + 14,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v(t.sublabel), 9, sp)) : h("", !0)
        ], 8, Q_))
      ]),
      t.showLegend ? (s(), o("div", ap, [
        (s(!0), o(V, null, b(_.value, (m, x) => (s(), o("div", {
          key: x,
          class: "trx-donut__legend-item"
        }, [
          e("span", {
            class: "trx-donut__legend-dot",
            style: R({ background: m.color })
          }, null, 4),
          e("span", lp, v(m.label), 1),
          e("span", np, v(m.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), iC = /* @__PURE__ */ A(op, [["__scopeId", "data-v-962cda3e"]]), rp = ["value", "placeholder", "disabled"], ip = /* @__PURE__ */ g({
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
      }, null, 40, rp)
    ], 2));
  }
}), cC = /* @__PURE__ */ A(ip, [["__scopeId", "data-v-4e40eeca"]]), cp = ["disabled"], up = { class: "trx-color-picker__hex" }, dp = {
  key: 0,
  class: "trx-color-picker__panel"
}, _p = { class: "trx-color-picker__presets" }, pp = ["title", "onClick"], vp = { class: "trx-color-picker__custom" }, mp = ["value"], fp = [
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
], xp = /* @__PURE__ */ g({
  __name: "TrxColorPicker",
  props: {
    modelValue: { default: "#10b981" },
    presets: { default: () => fp },
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
        e("span", up, v(t.modelValue), 1),
        _[2] || (_[2] = e("i", { class: "pi pi-chevron-down trx-color-picker__arrow" }, null, -1))
      ], 8, cp),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", dp, [
            e("div", _p, [
              (s(!0), o(V, null, b(t.presets, (d) => (s(), o("button", {
                key: d,
                class: w(["trx-color-picker__preset", { "trx-color-picker__preset--active": t.modelValue === d }]),
                style: R({ background: d, borderColor: d === "#ffffff" ? "#e5e7eb" : d }),
                title: d,
                onClick: (p) => l(d)
              }, null, 14, pp))), 128))
            ]),
            e("div", vp, [
              _[3] || (_[3] = e("span", null, "Personalizado:", -1)),
              e("input", {
                type: "color",
                class: "trx-color-picker__native",
                value: t.modelValue,
                onInput: n,
                onChange: _[1] || (_[1] = (d) => i.value = !1)
              }, null, 40, mp)
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), uC = /* @__PURE__ */ A(xp, [["__scopeId", "data-v-7ca62925"]]), hp = ["disabled", "onClick"], $p = ["placeholder", "disabled"], gp = {
  key: 0,
  class: "trx-tag-input__suggestions"
}, bp = ["onMousedown"], yp = /* @__PURE__ */ g({
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
          ])], 8, hp)
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
        }, null, 40, $p)), [
          [J, l.value]
        ]) : h("", !0)
      ], 2),
      _.value.length ? (s(), o("div", gp, [
        (s(!0), o(V, null, b(_.value, (x) => (s(), o("button", {
          key: x,
          class: "trx-tag-input__suggestion",
          onMousedown: H((f) => n(x), ["prevent"])
        }, v(x), 41, bp))), 128))
      ])) : h("", !0)
    ], 64));
  }
}), dC = /* @__PURE__ */ A(yp, [["__scopeId", "data-v-0a95e840"]]), kp = ["type", "value", "disabled", "onInput", "onKeydown"], wp = /* @__PURE__ */ g({
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
      }, null, 42, kp))), 128))
    ], 2));
  }
}), _C = /* @__PURE__ */ A(wp, [["__scopeId", "data-v-a732ce3a"]]), Tp = {
  key: 0,
  class: "trx-sig-pad__placeholder"
}, Cp = { class: "trx-sig-pad__footer" }, Sp = ["disabled"], Ip = /* @__PURE__ */ g({
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
        u.value ? (s(), o("span", Tp, v(t.placeholder), 1)) : h("", !0)
      ], 4),
      e("div", Cp, [
        C[1] || (C[1] = e("span", { class: "trx-sig-pad__line-label" }, "Assinatura", -1)),
        e("button", {
          class: "trx-sig-pad__clear",
          disabled: u.value || t.disabled,
          onClick: f
        }, [...C[0] || (C[0] = [
          e("i", { class: "pi pi-trash" }, null, -1),
          N(" Limpar ", -1)
        ])], 8, Sp)
      ])
    ], 2));
  }
}), pC = /* @__PURE__ */ A(Ip, [["__scopeId", "data-v-49c2b653"]]), Vp = { class: "trx-md-editor__bar" }, Bp = { class: "trx-md-editor__toolbar" }, Pp = ["title", "disabled", "onClick"], Ap = { class: "trx-md-editor__modes" }, Mp = ["onClick"], Lp = ["value", "placeholder", "disabled"], zp = ["innerHTML"], Dp = /* @__PURE__ */ g({
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
      e("div", Vp, [
        e("div", Bp, [
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
          ], 8, Pp)), 64))
        ]),
        e("div", Ap, [
          (s(), o(V, null, b(["write", "split", "preview"], (p) => e("button", {
            key: p,
            class: w(["trx-md-editor__mode-btn", { active: l.value === p }]),
            onClick: (m) => l.value = p
          }, v(p === "write" ? "Editar" : p === "preview" ? "Preview" : "Split"), 11, Mp)), 64))
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
        }, null, 44, Lp)) : h("", !0),
        l.value !== "write" ? (s(), o("div", {
          key: 1,
          class: "trx-md-editor__preview",
          style: R({ minHeight: t.minHeight }),
          innerHTML: n.value
        }, null, 12, zp)) : h("", !0)
      ], 2)
    ], 2));
  }
}), vC = /* @__PURE__ */ A(Dp, [["__scopeId", "data-v-c4b3f5b2"]]), Ep = { class: "trx-json-editor__bar" }, Rp = { class: "trx-json-editor__actions" }, Np = ["disabled"], qp = ["disabled"], Fp = { class: "trx-json-editor__body" }, Op = { class: "trx-json-editor__lines" }, jp = ["value", "disabled"], Hp = {
  key: 0,
  class: "trx-json-editor__error"
}, Up = /* @__PURE__ */ g({
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
      e("div", Ep, [
        x[2] || (x[2] = e("span", { class: "trx-json-editor__lang" }, "JSON", -1)),
        e("div", Rp, [
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: _
          }, [...x[0] || (x[0] = [
            e("i", { class: "pi pi-align-left" }, null, -1),
            N(" Formatar ", -1)
          ])], 8, Np),
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: d
          }, [...x[1] || (x[1] = [
            e("i", { class: "pi pi-minus" }, null, -1),
            N(" Minificar ", -1)
          ])], 8, qp)
        ])
      ]),
      e("div", Fp, [
        e("div", Op, [
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
        }, null, 44, jp)
      ]),
      n.value ? (s(), o("div", Hp, [
        x[3] || (x[3] = e("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
        N(" " + v(n.value), 1)
      ])) : h("", !0)
    ], 2));
  }
}), mC = /* @__PURE__ */ A(Up, [["__scopeId", "data-v-04c442f5"]]), Wp = ["title"], Gp = { class: "trx-sidebar-nav__items" }, Kp = {
  key: 0,
  class: "trx-sidebar-nav__sep"
}, Yp = { key: 1 }, Jp = ["title", "onClick"], Xp = {
  key: 1,
  class: "trx-sidebar-nav__label"
}, Qp = {
  key: 2,
  class: "trx-sidebar-nav__badge"
}, Zp = {
  key: 0,
  class: "trx-sidebar-nav__children"
}, tv = ["onClick"], ev = {
  key: 1,
  class: "trx-sidebar-nav__badge"
}, sv = /* @__PURE__ */ g({
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
      ], 8, Wp),
      e("div", Gp, [
        (s(!0), o(V, null, b(t.items, (p) => {
          var m, x;
          return s(), o(V, {
            key: p.key
          }, [
            p.separator ? (s(), o("hr", Kp)) : (s(), o("div", Yp, [
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
                t.collapsed ? h("", !0) : (s(), o("span", Xp, v(p.label), 1)),
                !t.collapsed && p.badge ? (s(), o("span", Qp, v(p.badge), 1)) : h("", !0),
                !t.collapsed && ((m = p.children) != null && m.length) ? (s(), o("i", {
                  key: 3,
                  class: w(["pi pi-chevron-down trx-sidebar-nav__arrow", { "trx-sidebar-nav__arrow--open": l.value.has(p.key) }])
                }, null, 2)) : h("", !0)
              ], 10, Jp),
              !t.collapsed && ((x = p.children) != null && x.length) && l.value.has(p.key) ? (s(), o("div", Zp, [
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
                  f.badge ? (s(), o("span", ev, v(f.badge), 1)) : h("", !0)
                ], 10, tv))), 128))
              ])) : h("", !0)
            ]))
          ], 64);
        }), 128))
      ])
    ], 6));
  }
}), fC = /* @__PURE__ */ A(sv, [["__scopeId", "data-v-f2db473b"]]), av = { class: "trx-palette__search" }, lv = ["placeholder"], nv = { class: "trx-palette__results" }, ov = { class: "trx-palette__group-label" }, rv = ["onClick", "onMouseenter"], iv = { class: "trx-palette__item-info" }, cv = { class: "trx-palette__item-label" }, uv = {
  key: 0,
  class: "trx-palette__item-desc"
}, dv = {
  key: 1,
  class: "trx-palette__shortcut"
}, _v = {
  key: 1,
  class: "trx-palette__empty"
}, pv = /* @__PURE__ */ g({
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
              e("div", av, [
                T[2] || (T[2] = e("i", { class: "pi pi-search trx-palette__search-icon" }, null, -1)),
                Y(e("input", {
                  ref_key: "searchInput",
                  ref: c,
                  class: "trx-palette__input",
                  placeholder: t.placeholder,
                  "onUpdate:modelValue": T[0] || (T[0] = ($) => l.value = $),
                  onInput: T[1] || (T[1] = ($) => n.value = 0)
                }, null, 40, lv), [
                  [J, l.value]
                ]),
                e("kbd", {
                  class: "trx-palette__esc",
                  onClick: p
                }, "Esc")
              ]),
              e("div", nv, [
                u.value.length ? (s(!0), o(V, { key: 0 }, b(_.value, ($, C) => (s(), o(V, { key: C }, [
                  e("div", ov, v(C), 1),
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
                    e("div", iv, [
                      e("span", cv, v(M.label), 1),
                      M.description ? (s(), o("span", uv, v(M.description), 1)) : h("", !0)
                    ]),
                    M.shortcut ? (s(), o("kbd", dv, v(M.shortcut), 1)) : h("", !0)
                  ], 42, rv))), 128))
                ], 64))), 128)) : (s(), o("div", _v, [...T[3] || (T[3] = [
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
}), xC = /* @__PURE__ */ A(pv, [["__scopeId", "data-v-b994f6f6"]]), vv = { class: "trx-wizard" }, mv = { class: "trx-wizard__steps" }, fv = ["onClick"], xv = { class: "trx-wizard__step-circle" }, hv = {
  key: 0,
  class: "pi pi-check"
}, $v = { key: 2 }, gv = { class: "trx-wizard__step-info" }, bv = { class: "trx-wizard__step-label" }, yv = {
  key: 0,
  class: "trx-wizard__step-optional"
}, kv = { class: "trx-wizard__content" }, wv = { class: "trx-wizard__footer" }, Tv = ["disabled"], Cv = { class: "trx-wizard__counter" }, Sv = ["disabled"], Iv = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Vv = {
  key: 0,
  class: "pi pi-chevron-right"
}, Bv = {
  key: 1,
  class: "pi pi-check"
}, Pv = /* @__PURE__ */ g({
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
    return (p, m) => (s(), o("div", vv, [
      e("div", mv, [
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
            e("div", xv, [
              f < (t.modelValue ?? 0) ? (s(), o("i", hv)) : x.icon ? (s(), o("i", {
                key: 1,
                class: w(x.icon)
              }, null, 2)) : (s(), o("span", $v, v(f + 1), 1))
            ]),
            e("div", gv, [
              e("span", bv, v(x.label), 1),
              x.optional ? (s(), o("span", yv, "Opcional")) : h("", !0)
            ])
          ], 10, fv),
          f < t.steps.length - 1 ? (s(), o("div", {
            key: 0,
            class: w(["trx-wizard__connector", { "trx-wizard__connector--done": f < (t.modelValue ?? 0) }])
          }, null, 2)) : h("", !0)
        ], 64))), 128))
      ]),
      e("div", kv, [
        I(p.$slots, "default", {
          step: t.steps[t.modelValue ?? 0],
          index: t.modelValue ?? 0
        }, void 0, !0)
      ]),
      e("div", wv, [
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--secondary",
          disabled: _.value,
          onClick: u
        }, [...m[0] || (m[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, Tv),
        e("span", Cv, v((t.modelValue ?? 0) + 1) + " / " + v(t.steps.length), 1),
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--primary",
          disabled: !t.canGoNext || t.loading,
          onClick: c
        }, [
          t.loading ? (s(), o("i", Iv)) : (s(), o(V, { key: 1 }, [
            N(v(d.value ? "Concluir" : "Próximo") + " ", 1),
            d.value ? (s(), o("i", Bv)) : (s(), o("i", Vv))
          ], 64))
        ], 8, Sv)
      ])
    ]));
  }
}), hC = /* @__PURE__ */ A(Pv, [["__scopeId", "data-v-25e71378"]]), Av = { class: "trx-onboarding" }, Mv = { class: "trx-onboarding__header" }, Lv = { class: "trx-onboarding__title-top" }, zv = {
  key: 0,
  class: "trx-onboarding__body"
}, Dv = {
  key: 0,
  class: "trx-onboarding__image-wrap"
}, Ev = ["src", "alt"], Rv = {
  key: 1,
  class: "trx-onboarding__icon-wrap"
}, Nv = { class: "trx-onboarding__step-title" }, qv = { class: "trx-onboarding__step-desc" }, Fv = { class: "trx-onboarding__dots" }, Ov = ["onClick"], jv = { class: "trx-onboarding__footer" }, Hv = { key: 1 }, Uv = {
  key: 0,
  class: "pi pi-arrow-right"
}, Wv = {
  key: 1,
  class: "pi pi-check"
}, Gv = /* @__PURE__ */ g({
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
    return (p, m) => (s(), o("div", Av, [
      e("div", Mv, [
        e("span", Lv, v(t.title), 1),
        t.skippable && !c.value ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__skip",
          onClick: m[0] || (m[0] = (x) => i("skip"))
        }, v(t.skipLabel), 1)) : h("", !0)
      ]),
      n.value ? (s(), o("div", zv, [
        n.value.image ? (s(), o("div", Dv, [
          e("img", {
            src: n.value.image,
            alt: n.value.title,
            class: "trx-onboarding__image"
          }, null, 8, Ev)
        ])) : n.value.icon ? (s(), o("div", Rv, [
          e("i", {
            class: w([n.value.icon, "trx-onboarding__icon"])
          }, null, 2)
        ])) : h("", !0),
        e("h2", Nv, v(n.value.title), 1),
        e("p", qv, v(n.value.description), 1)
      ])) : h("", !0),
      e("div", Fv, [
        (s(!0), o(V, null, b(t.steps, (x, f) => (s(), o("button", {
          key: f,
          class: w(["trx-onboarding__dot", { "trx-onboarding__dot--active": f === l.value, "trx-onboarding__dot--done": f < l.value }]),
          onClick: (T) => d(f)
        }, null, 10, Ov))), 128))
      ]),
      e("div", jv, [
        l.value > 0 ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__btn trx-onboarding__btn--prev",
          onClick: _
        }, [...m[1] || (m[1] = [
          e("i", { class: "pi pi-arrow-left" }, null, -1),
          N(" Anterior ", -1)
        ])])) : (s(), o("span", Hv)),
        e("button", {
          class: "trx-onboarding__btn trx-onboarding__btn--next",
          onClick: u
        }, [
          N(v(c.value ? t.finishLabel : "Próximo") + " ", 1),
          c.value ? (s(), o("i", Wv)) : (s(), o("i", Uv))
        ])
      ])
    ]));
  }
}), $C = /* @__PURE__ */ A(Gv, [["__scopeId", "data-v-4359f9ee"]]), Kv = { class: "trx-kanban" }, Yv = ["onDrop"], Jv = { class: "trx-kanban__col-header" }, Xv = { class: "trx-kanban__col-label" }, Qv = { class: "trx-kanban__col-count" }, Zv = { key: 0 }, tm = { class: "trx-kanban__cards" }, em = ["onDragstart", "onClick"], sm = { class: "trx-kanban__card-header" }, am = { class: "trx-kanban__card-title" }, lm = ["title"], nm = {
  key: 0,
  class: "trx-kanban__card-desc"
}, om = {
  key: 1,
  class: "trx-kanban__card-tags"
}, rm = {
  key: 2,
  class: "trx-kanban__card-assignee"
}, im = { class: "trx-kanban__card-avatar" }, cm = { class: "trx-kanban__card-assignee-name" }, um = {
  key: 0,
  class: "trx-kanban__col-empty"
}, dm = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", Kv, [
      (s(!0), o(V, null, b(t.columns, (d) => (s(), o("div", {
        key: d.id,
        class: "trx-kanban__col",
        onDragover: _[0] || (_[0] = H(() => {
        }, ["prevent"])),
        onDrop: (p) => c(d.id)
      }, [
        e("div", Jv, [
          e("div", {
            class: "trx-kanban__col-dot",
            style: R({ background: d.color ?? "var(--trx-accent-color)" })
          }, null, 4),
          e("span", Xv, v(d.label), 1),
          e("span", Qv, [
            N(v(d.cards.length), 1),
            d.limit ? (s(), o("span", Zv, "/" + v(d.limit), 1)) : h("", !0)
          ])
        ]),
        e("div", tm, [
          (s(!0), o(V, null, b(d.cards, (p) => {
            var m;
            return s(), o("div", {
              key: p.id,
              class: "trx-kanban__card",
              draggable: "true",
              onDragstart: (x) => n(p.id, d.id),
              onClick: (x) => r("cardClick", p, d.id)
            }, [
              e("div", sm, [
                e("p", am, v(p.title), 1),
                p.priority ? (s(), o("span", {
                  key: 0,
                  class: "trx-kanban__card-priority",
                  style: R({ color: i[p.priority] }),
                  title: p.priority
                }, "●", 12, lm)) : h("", !0)
              ]),
              p.description ? (s(), o("p", nm, v(p.description), 1)) : h("", !0),
              (m = p.tags) != null && m.length ? (s(), o("div", om, [
                (s(!0), o(V, null, b(p.tags, (x) => (s(), o("span", {
                  key: x,
                  class: "trx-kanban__card-tag"
                }, v(x), 1))), 128))
              ])) : h("", !0),
              p.assignee ? (s(), o("div", rm, [
                e("span", im, v(p.assignee.split(" ").map((x) => x[0]).join("").slice(0, 2).toUpperCase()), 1),
                e("span", cm, v(p.assignee), 1)
              ])) : h("", !0)
            ], 40, em);
          }), 128)),
          d.cards.length ? h("", !0) : (s(), o("div", um, [..._[1] || (_[1] = [
            e("i", { class: "pi pi-inbox" }, null, -1),
            e("span", null, "Vazio", -1)
          ])]))
        ])
      ], 40, Yv))), 128))
    ]));
  }
}), gC = /* @__PURE__ */ A(dm, [["__scopeId", "data-v-9ad32a8a"]]), _m = { class: "trx-calendar" }, pm = { class: "trx-calendar__header" }, vm = { class: "trx-calendar__month" }, mm = { class: "trx-calendar__grid" }, fm = ["onClick"], xm = {
  key: 0,
  class: "trx-calendar__day"
}, hm = {
  key: 1,
  class: "trx-calendar__events"
}, $m = ["title", "onClick"], gm = {
  key: 0,
  class: "trx-calendar__more"
}, bm = /* @__PURE__ */ g({
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
    return (M, E) => (s(), o("div", _m, [
      e("div", pm, [
        e("button", {
          class: "trx-calendar__nav",
          onClick: T
        }, [...E[0] || (E[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1)
        ])]),
        e("span", vm, v(_[c.value]) + " " + v(n.value), 1),
        e("button", {
          class: "trx-calendar__nav",
          onClick: $
        }, [...E[1] || (E[1] = [
          e("i", { class: "pi pi-chevron-right" }, null, -1)
        ])])
      ]),
      e("div", mm, [
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
          F.day ? (s(), o("span", xm, v(F.day), 1)) : h("", !0),
          F.dateStr && x.value[F.dateStr] ? (s(), o("div", hm, [
            (s(!0), o(V, null, b(x.value[F.dateStr].slice(0, 2), (K) => (s(), o("div", {
              key: K.id,
              class: "trx-calendar__event",
              style: R({ background: K.color ?? "var(--trx-accent-color)" }),
              title: K.title,
              onClick: H((dt) => i("eventClick", K), ["stop"])
            }, v(K.title), 13, $m))), 128)),
            x.value[F.dateStr].length > 2 ? (s(), o("div", gm, " +" + v(x.value[F.dateStr].length - 2), 1)) : h("", !0)
          ])) : h("", !0)
        ], 10, fm))), 128))
      ])
    ]));
  }
}), bC = /* @__PURE__ */ A(bm, [["__scopeId", "data-v-007ab8e8"]]), ym = /* @__PURE__ */ g({
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
}), yC = /* @__PURE__ */ A(ym, [["__scopeId", "data-v-ecf43584"]]), km = { class: "trx-code-block" }, wm = { class: "trx-code-block__header" }, Tm = { class: "trx-code-block__lang-wrap" }, Cm = {
  key: 0,
  class: "trx-code-block__filename"
}, Sm = {
  key: 1,
  class: "trx-code-block__lang"
}, Im = ["title"], Vm = { class: "trx-code-block__table" }, Bm = {
  key: 0,
  class: "trx-code-block__lineno"
}, Pm = { class: "trx-code-block__line" }, Am = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", km, [
      e("div", wm, [
        e("div", Tm, [
          t.filename ? (s(), o("span", Cm, [
            c[0] || (c[0] = e("i", { class: "pi pi-file" }, null, -1)),
            N(" " + v(t.filename), 1)
          ])) : (s(), o("span", Sm, v(t.language), 1))
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
        ], 8, Im)
      ]),
      e("div", {
        class: "trx-code-block__body",
        style: R(t.maxHeight ? { maxHeight: t.maxHeight, overflowY: "auto" } : {})
      }, [
        e("table", Vm, [
          e("tbody", null, [
            (s(!0), o(V, null, b(l(t.code), (u, _) => (s(), o("tr", { key: _ }, [
              t.showLineNumbers ? (s(), o("td", Bm, v(_ + 1), 1)) : h("", !0),
              e("td", Pm, v(u || " "), 1)
            ]))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), kC = /* @__PURE__ */ A(Am, [["__scopeId", "data-v-c068f365"]]), Mm = ["innerHTML"], Lm = /* @__PURE__ */ g({
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
    }, null, 10, Mm));
  }
}), wC = /* @__PURE__ */ A(Lm, [["__scopeId", "data-v-68ad6346"]]), zm = { class: "trx-truncate" }, Dm = /* @__PURE__ */ g({
  __name: "TrxTruncateText",
  props: {
    text: { default: "" },
    lines: { default: 3 },
    expandLabel: { default: "Ver mais" },
    collapseLabel: { default: "Ver menos" }
  },
  setup(t) {
    const a = D(!1);
    return (r, i) => (s(), o("div", zm, [
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
}), TC = /* @__PURE__ */ A(Dm, [["__scopeId", "data-v-4d051201"]]), Em = { class: "trx-conv-list" }, Rm = {
  key: 0,
  class: "trx-conv-list__skeleton"
}, Nm = ["onClick"], qm = { class: "trx-conv-list__avatar" }, Fm = ["src", "alt"], Om = { key: 1 }, jm = { class: "trx-conv-list__info" }, Hm = { class: "trx-conv-list__top" }, Um = { class: "trx-conv-list__name" }, Wm = { class: "trx-conv-list__time" }, Gm = { class: "trx-conv-list__bottom" }, Km = { class: "trx-conv-list__msg" }, Ym = { class: "trx-conv-list__meta" }, Jm = {
  key: 1,
  class: "trx-conv-list__unread"
}, Xm = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", Em, [
      t.loading ? (s(), o("div", Rm, [
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
        e("div", qm, [
          u.avatar ? (s(), o("img", {
            key: 0,
            src: u.avatar,
            alt: u.contact
          }, null, 8, Fm)) : (s(), o("span", Om, v(l(u.contact)), 1)),
          u.status ? (s(), o("span", {
            key: 2,
            class: "trx-conv-list__status-dot",
            style: R({ background: i[u.status] })
          }, null, 4)) : h("", !0)
        ]),
        e("div", jm, [
          e("div", Hm, [
            e("span", Um, v(u.contact), 1),
            e("span", Wm, v(u.lastTime), 1)
          ]),
          e("div", Gm, [
            e("span", Km, v(u.lastMessage ?? "—"), 1),
            e("div", Ym, [
              u.channel ? (s(), L(ut, {
                key: 0,
                channel: u.channel,
                size: "sm",
                "icon-only": "",
                "show-label": !1
              }, null, 8, ["channel"])) : h("", !0),
              u.unread ? (s(), o("span", Jm, v(u.unread), 1)) : h("", !0)
            ])
          ])
        ])
      ], 10, Nm))), 128))
    ]));
  }
}), CC = /* @__PURE__ */ A(Xm, [["__scopeId", "data-v-43f7b6c7"]]), Qm = { class: "trx-lead-card__header" }, Zm = { class: "trx-lead-card__avatar" }, tf = { class: "trx-lead-card__identity" }, ef = { class: "trx-lead-card__name" }, sf = {
  key: 0,
  class: "trx-lead-card__company"
}, af = { class: "trx-lead-card__badges" }, lf = ["title"], nf = {
  key: 0,
  class: "trx-lead-card__value"
}, of = { class: "trx-lead-card__meta" }, rf = {
  key: 0,
  class: "trx-lead-card__source"
}, cf = {
  key: 1,
  class: "trx-lead-card__assignee"
}, uf = {
  key: 2,
  class: "trx-lead-card__time"
}, df = /* @__PURE__ */ g({
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
      e("div", Qm, [
        e("div", Zm, v(c(t.name)), 1),
        e("div", tf, [
          e("span", ef, v(t.name), 1),
          t.company ? (s(), o("span", sf, v(t.company), 1)) : h("", !0)
        ]),
        e("div", af, [
          e("span", {
            class: "trx-lead-card__status",
            style: R({ "--lst-color": r[t.status ?? "new"].color })
          }, v(r[t.status ?? "new"].label), 5),
          e("i", {
            class: w([i[t.priority ?? "medium"], "trx-lead-card__priority"]),
            title: t.priority
          }, null, 10, lf)
        ])
      ]),
      t.value ? (s(), o("div", nf, v(n(t.value)), 1)) : h("", !0),
      e("div", of, [
        t.source ? (s(), o("span", rf, [
          _[5] || (_[5] = e("i", { class: "pi pi-map-marker" }, null, -1)),
          N(" " + v(t.source), 1)
        ])) : h("", !0),
        t.assignee ? (s(), o("span", cf, [
          _[6] || (_[6] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.assignee), 1)
        ])) : h("", !0),
        t.updatedAt ? (s(), o("span", uf, [
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
}), SC = /* @__PURE__ */ A(df, [["__scopeId", "data-v-dcad9a9f"]]), _f = { class: "trx-sla__header" }, pf = { class: "trx-sla__label" }, vf = {
  key: 0,
  class: "trx-sla__bar"
}, mf = /* @__PURE__ */ g({
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
      e("div", _f, [
        e("span", pf, v(t.label ?? "SLA"), 1),
        e("span", {
          class: w(["trx-sla__time", { "trx-sla__time--breached": _.value }])
        }, [
          e("i", {
            class: w(_.value ? "pi pi-times-circle" : d.value ? "pi pi-exclamation-triangle" : "pi pi-clock")
          }, null, 2),
          N(" " + v(m(c.value)), 1)
        ], 2)
      ]),
      t.showProgress ? (s(), o("div", vf, [
        e("div", {
          class: "trx-sla__fill",
          style: R({ width: `${u.value * 100}%` })
        }, null, 4)
      ])) : h("", !0)
    ], 4));
  }
}), IC = /* @__PURE__ */ A(mf, [["__scopeId", "data-v-dbfaca6d"]]), ff = { class: "trx-crm-timeline" }, xf = {
  key: 0,
  class: "trx-crm-timeline__loading"
}, hf = {
  key: 1,
  class: "trx-crm-timeline__empty"
}, $f = {
  key: 2,
  class: "trx-crm-timeline__list"
}, gf = ["onClick"], bf = { class: "trx-crm-timeline__line-wrap" }, yf = { class: "trx-crm-timeline__content" }, kf = { class: "trx-crm-timeline__header" }, wf = { class: "trx-crm-timeline__date" }, Tf = { class: "trx-crm-timeline__title-row" }, Cf = { class: "trx-crm-timeline__title" }, Sf = {
  key: 0,
  class: "trx-crm-timeline__desc"
}, If = { class: "trx-crm-timeline__meta" }, Vf = {
  key: 0,
  class: "trx-crm-timeline__author"
}, Bf = {
  key: 1,
  class: "trx-crm-timeline__duration"
}, Pf = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", ff, [
      t.loading ? (s(), o("div", xf, [...u[0] || (u[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.events.length ? (s(), o("div", $f, [
        (s(!0), o(V, null, b(t.events, (_) => (s(), o("div", {
          key: _.id,
          class: "trx-crm-timeline__item",
          onClick: (d) => r("eventClick", _)
        }, [
          e("div", bf, [
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
          e("div", yf, [
            e("div", kf, [
              e("span", {
                class: "trx-crm-timeline__type-badge",
                style: R({ color: i[_.type].color })
              }, v(i[_.type].label), 5),
              e("span", wf, v(n(_.date)), 1)
            ]),
            e("div", Tf, [
              e("span", Cf, v(_.title), 1),
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
            _.description ? (s(), o("p", Sf, v(_.description), 1)) : h("", !0),
            e("div", If, [
              _.author ? (s(), o("span", Vf, [
                u[3] || (u[3] = e("i", { class: "pi pi-user" }, null, -1)),
                N(" " + v(_.author), 1)
              ])) : h("", !0),
              _.duration ? (s(), o("span", Bf, [
                u[4] || (u[4] = e("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(_.duration), 1)
              ])) : h("", !0)
            ])
          ])
        ], 8, gf))), 128))
      ])) : (s(), o("div", hf, [...u[1] || (u[1] = [
        e("i", { class: "pi pi-history" }, null, -1),
        e("span", null, "Nenhuma atividade registrada", -1)
      ])]))
    ]));
  }
}), VC = /* @__PURE__ */ A(Pf, [["__scopeId", "data-v-2b8a2f92"]]), Af = { class: "trx-maintenance" }, Mf = { class: "trx-maintenance__card" }, Lf = ["src"], zf = { class: "trx-maintenance__title" }, Df = { class: "trx-maintenance__message" }, Ef = {
  key: 1,
  class: "trx-maintenance__eta"
}, Rf = /* @__PURE__ */ g({
  __name: "TrxMaintenancePage",
  props: {
    title: { default: "Em Manutenção" },
    message: { default: "Estamos trabalhando para melhorar sua experiência. Voltaremos em breve." },
    estimatedTime: {},
    showCountdown: { type: Boolean },
    logoSrc: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Af, [
      e("div", Mf, [
        t.logoSrc ? (s(), o("img", {
          key: 0,
          src: t.logoSrc,
          class: "trx-maintenance__logo",
          alt: "Logo"
        }, null, 8, Lf)) : h("", !0),
        r[2] || (r[2] = e("div", { class: "trx-maintenance__icon" }, [
          e("i", { class: "pi pi-wrench" })
        ], -1)),
        e("h1", zf, v(t.title), 1),
        e("p", Df, v(t.message), 1),
        t.estimatedTime ? (s(), o("div", Ef, [
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
}), BC = /* @__PURE__ */ A(Rf, [["__scopeId", "data-v-b30655b1"]]), Nf = {
  key: 0,
  class: "trx-session-backdrop"
}, qf = { class: "trx-session-dialog" }, Ff = { class: "trx-session-dialog__msg" }, Of = { class: "trx-session-dialog__actions" }, jf = /* @__PURE__ */ g({
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
          n.value ? (s(), o("div", Nf, [
            e("div", qf, [
              C[4] || (C[4] = e("div", { class: "trx-session-dialog__icon" }, [
                e("i", { class: "pi pi-clock" })
              ], -1)),
              C[5] || (C[5] = e("h2", { class: "trx-session-dialog__title" }, "Sessão expirando", -1)),
              e("p", Ff, [
                C[1] || (C[1] = N(" Sua sessão expirará em ", -1)),
                e("strong", null, v(T.value), 1),
                C[2] || (C[2] = N(" por inatividade. ", -1))
              ]),
              e("div", Of, [
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
}), PC = /* @__PURE__ */ A(jf, [["__scopeId", "data-v-3b5d9421"]]), Hf = { class: "trx-shortcut-panel" }, Uf = { class: "trx-shortcut-panel__header" }, Wf = { class: "trx-shortcut-panel__body" }, Gf = { class: "trx-shortcut-panel__group-label" }, Kf = { class: "trx-shortcut-panel__list" }, Yf = { class: "trx-shortcut-panel__desc" }, Jf = { class: "trx-shortcut-panel__keys" }, Xf = { class: "trx-shortcut-panel__footer" }, Qf = { class: "trx-shortcut-panel__key" }, Zf = /* @__PURE__ */ g({
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
            e("div", Hf, [
              e("div", Uf, [
                c[3] || (c[3] = e("h3", { class: "trx-shortcut-panel__title" }, "Atalhos de Teclado", -1)),
                e("button", {
                  class: "trx-shortcut-panel__close",
                  onClick: c[0] || (c[0] = (u) => i("update:modelValue", !1))
                }, [...c[2] || (c[2] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", Wf, [
                (s(!0), o(V, null, b(l(), (u, _) => (s(), o(V, { key: _ }, [
                  e("div", Gf, v(_), 1),
                  e("div", Kf, [
                    (s(!0), o(V, null, b(u, (d, p) => (s(), o("div", {
                      key: p,
                      class: "trx-shortcut-panel__item"
                    }, [
                      e("span", Yf, v(d.description), 1),
                      e("div", Jf, [
                        (s(!0), o(V, null, b(d.keys, (m) => (s(), o("kbd", {
                          key: m,
                          class: "trx-shortcut-panel__key"
                        }, v(m), 1))), 128))
                      ])
                    ]))), 128))
                  ])
                ], 64))), 128))
              ]),
              e("div", Xf, [
                c[4] || (c[4] = N(" Pressione ", -1)),
                e("kbd", Qf, v(t.triggerKey), 1),
                c[5] || (c[5] = N(" para abrir/fechar ", -1))
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), AC = /* @__PURE__ */ A(Zf, [["__scopeId", "data-v-d5032b0e"]]), MC = /* @__PURE__ */ g({
  __name: "TrxFeatureFlag",
  props: {
    flag: {},
    flags: {}
  },
  setup(t) {
    const a = t, r = S(() => a.flags[a.flag] === !0);
    return (i, l) => r.value ? I(i.$slots, "default", { key: 0 }) : I(i.$slots, "disabled", { key: 1 });
  }
}), tx = { class: "trx-dtmf" }, ex = ["onClick"], sx = { class: "trx-dtmf__main" }, ax = {
  key: 0,
  class: "trx-dtmf__sub"
}, lx = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", tx, [
      (s(), o(V, null, b(i, (_, d) => e("div", {
        key: d,
        class: "trx-dtmf__row"
      }, [
        (s(!0), o(V, null, b(_, (p) => (s(), o("button", {
          key: p,
          class: "trx-dtmf__key",
          onClick: (m) => n(p)
        }, [
          e("span", sx, v(p), 1),
          l[p] ? (s(), o("span", ax, v(l[p]), 1)) : h("", !0)
        ], 8, ex))), 128))
      ])), 64))
    ]));
  }
}), LC = /* @__PURE__ */ A(lx, [["__scopeId", "data-v-2f681100"]]), nx = { class: "trx-tf-dialog" }, ox = { class: "trx-tf-dialog__header" }, rx = { class: "trx-tf-dialog__type-tabs" }, ix = ["onClick"], cx = { class: "trx-tf-dialog__search" }, ux = { class: "trx-tf-dialog__list" }, dx = {
  key: 0,
  class: "trx-tf-dialog__loading"
}, _x = ["onClick"], px = { class: "trx-tf-dialog__item-info" }, vx = { class: "trx-tf-dialog__item-name" }, mx = { class: "trx-tf-dialog__item-ext" }, fx = { class: "trx-tf-dialog__item-status" }, xx = {
  key: 1,
  class: "trx-tf-dialog__empty"
}, hx = { class: "trx-tf-dialog__footer" }, $x = ["disabled"], gx = /* @__PURE__ */ g({
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
            e("div", nx, [
              e("div", ox, [
                u[6] || (u[6] = e("h3", { class: "trx-tf-dialog__title" }, "Transferir Chamada", -1)),
                e("button", {
                  class: "trx-tf-dialog__close",
                  onClick: u[0] || (u[0] = (_) => r("update:modelValue", !1))
                }, [...u[5] || (u[5] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", rx, [
                (s(), o(V, null, b(["blind", "attended", "conference"], (_) => e("button", {
                  key: _,
                  class: w(["trx-tf-dialog__type-btn", { active: i.value === _ }]),
                  onClick: (d) => i.value = _
                }, v(_ === "blind" ? "Cega" : _ === "attended" ? "Assistida" : "Conferência"), 11, ix)), 64))
              ]),
              e("div", cx, [
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
              e("div", ux, [
                t.loading ? (s(), o("div", dx, [...u[8] || (u[8] = [
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
                    e("div", px, [
                      e("span", vx, v(_.name), 1),
                      e("span", mx, v(_.extension), 1)
                    ]),
                    e("span", fx, v(_.available ? "Disponível" : "Ocupado"), 1)
                  ], 10, _x);
                }), 128)),
                !t.targets.length && !t.loading ? (s(), o("div", xx, " Nenhum ramal encontrado ")) : h("", !0)
              ]),
              e("div", hx, [
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
                ], 8, $x)
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), zC = /* @__PURE__ */ A(gx, [["__scopeId", "data-v-d021e3e9"]]), bx = { class: "trx-monitor" }, yx = {
  key: 0,
  class: "trx-monitor__empty"
}, kx = {
  key: 1,
  class: "trx-monitor__empty"
}, wx = {
  key: 2,
  class: "trx-monitor__list"
}, Tx = { class: "trx-monitor__agent" }, Cx = { class: "trx-monitor__agent-name" }, Sx = { class: "trx-monitor__agent-ext" }, Ix = { class: "trx-monitor__call-info" }, Vx = { class: "trx-monitor__customer" }, Bx = {
  key: 0,
  class: "trx-monitor__queue"
}, Px = { class: "trx-monitor__duration" }, Ax = {
  key: 0,
  class: "trx-monitor__active-badge"
}, Mx = ["onClick"], Lx = {
  key: 1,
  class: "trx-monitor__actions"
}, zx = ["title", "onClick"], Dx = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", bx, [
      t.loading ? (s(), o("div", yx, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", wx, [
        (s(!0), o(V, null, b(t.calls, (u) => (s(), o("div", {
          key: u.id,
          class: w(["trx-monitor__item", { "trx-monitor__item--active": t.activeId === u.id }])
        }, [
          e("div", Tx, [
            e("span", Cx, v(u.agentName), 1),
            e("span", Sx, v(u.agentExt), 1)
          ]),
          e("div", Ix, [
            e("span", Vx, v(u.customerName ?? u.customerPhone), 1),
            u.queue ? (s(), o("span", Bx, v(u.queue), 1)) : h("", !0)
          ]),
          e("span", Px, v(l(u.duration)), 1),
          t.activeId === u.id ? (s(), o("div", Ax, [
            c[3] || (c[3] = e("i", { class: "pi pi-circle-fill trx-monitor__pulse" }, null, -1)),
            N(" " + v(t.activeMode === "listen" ? "Escutando" : t.activeMode === "whisper" ? "Sussurrando" : "Na chamada") + " ", 1),
            e("button", {
              class: "trx-monitor__stop-btn",
              onClick: (_) => r("stop", u.id)
            }, [...c[2] || (c[2] = [
              e("i", { class: "pi pi-stop-circle" }, null, -1)
            ])], 8, Mx)
          ])) : (s(), o("div", Lx, [
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
            ], 12, zx)), 64))
          ]))
        ], 2))), 128))
      ])) : (s(), o("div", kx, [...c[1] || (c[1] = [
        e("i", {
          class: "pi pi-phone",
          style: { "font-size": "1.5rem" }
        }, null, -1),
        e("span", null, "Nenhuma chamada ativa", -1)
      ])]))
    ]));
  }
}), DC = /* @__PURE__ */ A(Dx, [["__scopeId", "data-v-df8b4f98"]]), Ex = ["disabled"], Rx = {
  key: 0,
  class: "trx-break__panel"
}, Nx = ["onClick"], qx = { class: "trx-break__reason-label" }, Fx = {
  key: 0,
  class: "trx-break__reason-max"
}, Ox = {
  key: 0,
  class: "trx-break__empty"
}, jx = /* @__PURE__ */ g({
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
      ], 8, Ex),
      O(j, { name: "trx-break-drop" }, {
        default: B(() => [
          i.value && !t.modelValue ? (s(), o("div", Rx, [
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
              e("span", qx, v(c.label), 1),
              c.maxMinutes ? (s(), o("span", Fx, v(c.maxMinutes) + "min", 1)) : h("", !0)
            ], 8, Nx))), 128)),
            t.reasons.length ? h("", !0) : (s(), o("div", Ox, "Nenhum motivo configurado"))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), EC = /* @__PURE__ */ A(jx, [["__scopeId", "data-v-11d04d15"]]), Hx = { class: "trx-qm" }, Ux = {
  key: 0,
  class: "trx-qm__loading"
}, Wx = {
  key: 1,
  class: "trx-qm__empty"
}, Gx = {
  key: 2,
  class: "trx-qm__list"
}, Kx = { class: "trx-qm__queue-header" }, Yx = { class: "trx-qm__queue-name" }, Jx = { class: "trx-qm__agents" }, Xx = { class: "trx-qm__metric" }, Qx = { class: "trx-qm__metric-value trx-qm__metric-value--warn" }, Zx = { class: "trx-qm__metric" }, th = { class: "trx-qm__metric-value trx-qm__metric-value--active" }, eh = { class: "trx-qm__metric" }, sh = { class: "trx-qm__metric-value" }, ah = { class: "trx-qm__metric" }, lh = { class: "trx-qm__metric" }, nh = { class: "trx-qm__metric-value" }, oh = { class: "trx-qm__metric" }, rh = { class: "trx-qm__sl-bar" }, ih = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", Hx, [
      t.loading ? (s(), o("div", Ux, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.queues.length ? (s(), o("div", Gx, [
        (s(!0), o(V, null, b(t.queues, (n) => (s(), o("div", {
          key: n.name,
          class: "trx-qm__queue"
        }, [
          e("div", Kx, [
            e("span", Yx, v(n.name), 1),
            e("span", Jx, v(n.agentsReady) + "/" + v(n.agentsTotal) + " agentes", 1)
          ]),
          e("div", {
            class: w(["trx-qm__metrics", { "trx-qm__metrics--compact": t.compact }])
          }, [
            e("div", Xx, [
              e("span", Qx, v(n.waiting), 1),
              l[1] || (l[1] = e("span", { class: "trx-qm__metric-label" }, "Aguardando", -1))
            ]),
            e("div", Zx, [
              e("span", th, v(n.active), 1),
              l[2] || (l[2] = e("span", { class: "trx-qm__metric-label" }, "Em atendimento", -1))
            ]),
            e("div", eh, [
              e("span", sh, v(n.abandoned), 1),
              l[3] || (l[3] = e("span", { class: "trx-qm__metric-label" }, "Abandonadas", -1))
            ]),
            e("div", ah, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: r(n.serviceLevel) })
              }, v(n.serviceLevel) + "%", 5),
              l[4] || (l[4] = e("span", { class: "trx-qm__metric-label" }, "Nível de Serviço", -1))
            ]),
            e("div", lh, [
              e("span", nh, v(a(n.avgWait)), 1),
              l[5] || (l[5] = e("span", { class: "trx-qm__metric-label" }, "TMA Espera", -1))
            ]),
            e("div", oh, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: n.longestWait > 120 ? "var(--trx-danger-color)" : void 0 })
              }, v(a(n.longestWait)), 5),
              l[6] || (l[6] = e("span", { class: "trx-qm__metric-label" }, "Maior Espera", -1))
            ])
          ], 2),
          e("div", rh, [
            e("div", {
              class: "trx-qm__sl-fill",
              style: R({ width: n.serviceLevel + "%", background: r(n.serviceLevel) })
            }, null, 4)
          ])
        ]))), 128))
      ])) : (s(), o("div", Wx, "Nenhuma fila configurada"))
    ]));
  }
}), RC = /* @__PURE__ */ A(ih, [["__scopeId", "data-v-63231ab6"]]), ch = { class: "trx-rank" }, uh = {
  key: 0,
  class: "trx-rank__header"
}, dh = { class: "trx-rank__title" }, _h = {
  key: 1,
  class: "trx-rank__loading"
}, ph = {
  key: 2,
  class: "trx-rank__empty"
}, vh = {
  key: 3,
  class: "trx-rank__list"
}, mh = ["onClick"], fh = { class: "trx-rank__pos" }, xh = { class: "trx-rank__avatar-wrap" }, hh = ["src", "alt"], $h = {
  key: 1,
  class: "trx-rank__avatar-init"
}, gh = { class: "trx-rank__name" }, bh = { class: "trx-rank__bar-wrap" }, yh = { class: "trx-rank__value-wrap" }, kh = { class: "trx-rank__value" }, wh = {
  key: 0,
  class: "trx-rank__unit"
}, Th = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", ch, [
      t.title ? (s(), o("div", uh, [
        e("span", dh, v(t.title), 1)
      ])) : h("", !0),
      t.loading ? (s(), o("div", _h, [...n[0] || (n[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.entries.length ? (s(), o("div", vh, [
        (s(!0), o(V, null, b(t.entries, (c, u) => (s(), o("div", {
          key: c.id,
          class: w(["trx-rank__item", { "trx-rank__item--highlight": t.highlight === c.id }]),
          onClick: (_) => r("rowClick", c)
        }, [
          e("span", fh, v(u < 3 ? i[u] : `#${u + 1}`), 1),
          e("div", xh, [
            c.avatar ? (s(), o("img", {
              key: 0,
              src: c.avatar,
              class: "trx-rank__avatar",
              alt: c.name
            }, null, 8, hh)) : (s(), o("div", $h, v(c.name[0]), 1))
          ]),
          e("span", gh, v(c.name), 1),
          e("div", bh, [
            e("div", {
              class: "trx-rank__bar",
              style: R({ width: (t.maxValue ? c.value / t.maxValue * 100 : 100) + "%" })
            }, null, 4)
          ]),
          e("div", yh, [
            e("span", kh, v(c.value.toLocaleString("pt-BR")), 1),
            c.unit ? (s(), o("span", wh, v(c.unit), 1)) : h("", !0),
            c.delta !== void 0 ? (s(), o("span", {
              key: 1,
              class: w(["trx-rank__delta", c.delta > 0 ? "up" : c.delta < 0 ? "down" : ""])
            }, [
              e("i", {
                class: w(c.delta > 0 ? "pi pi-arrow-up" : c.delta < 0 ? "pi pi-arrow-down" : "pi pi-minus")
              }, null, 2)
            ], 2)) : h("", !0)
          ])
        ], 10, mh))), 128))
      ])) : (s(), o("div", ph, "Sem dados"))
    ]));
  }
}), NC = /* @__PURE__ */ A(Th, [["__scopeId", "data-v-f7fb6516"]]), Ch = { class: "trx-recorder__indicator" }, Sh = { class: "trx-recorder__label" }, Ih = { class: "trx-recorder__time" }, Vh = { class: "trx-recorder__controls" }, Bh = ["disabled"], Ph = ["disabled"], Ah = ["disabled"], Mh = ["disabled"], Lh = /* @__PURE__ */ g({
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
      e("div", Ch, [
        e("span", {
          class: w(["trx-recorder__dot", { "trx-recorder__dot--blink": t.state === "recording" }])
        }, null, 2),
        e("span", Sh, v(t.state === "idle" ? "Sem gravação" : t.state === "recording" ? "Gravando" : "Pausado"), 1)
      ]),
      e("span", Ih, v(l.value), 1),
      e("div", Vh, [
        t.state === "idle" ? (s(), o("button", {
          key: 0,
          class: "trx-recorder__btn trx-recorder__btn--start",
          disabled: t.disabled,
          title: "Iniciar gravação",
          onClick: c[0] || (c[0] = (u) => i("start"))
        }, [...c[4] || (c[4] = [
          e("i", { class: "pi pi-circle-fill" }, null, -1)
        ])], 8, Bh)) : (s(), o(V, { key: 1 }, [
          t.state === "recording" ? (s(), o("button", {
            key: 0,
            class: "trx-recorder__btn trx-recorder__btn--pause",
            disabled: t.disabled,
            title: "Pausar",
            onClick: c[1] || (c[1] = (u) => i("pause"))
          }, [...c[5] || (c[5] = [
            e("i", { class: "pi pi-pause" }, null, -1)
          ])], 8, Ph)) : (s(), o("button", {
            key: 1,
            class: "trx-recorder__btn trx-recorder__btn--resume",
            disabled: t.disabled,
            title: "Retomar",
            onClick: c[2] || (c[2] = (u) => i("resume"))
          }, [...c[6] || (c[6] = [
            e("i", { class: "pi pi-play" }, null, -1)
          ])], 8, Ah)),
          e("button", {
            class: "trx-recorder__btn trx-recorder__btn--stop",
            disabled: t.disabled,
            title: "Parar",
            onClick: c[3] || (c[3] = (u) => i("stop"))
          }, [...c[7] || (c[7] = [
            e("i", { class: "pi pi-stop" }, null, -1)
          ])], 8, Mh)
        ], 64))
      ])
    ], 2));
  }
}), qC = /* @__PURE__ */ A(Lh, [["__scopeId", "data-v-86250438"]]), zh = { class: "trx-ext-picker__name" }, Dh = { class: "trx-ext-picker__ext" }, Eh = {
  key: 1,
  class: "trx-ext-picker__placeholder"
}, Rh = {
  key: 0,
  class: "trx-ext-picker__panel"
}, Nh = { class: "trx-ext-picker__search-wrap" }, qh = {
  key: 0,
  class: "trx-ext-picker__loading"
}, Fh = {
  key: 1,
  class: "trx-ext-picker__list"
}, Oh = ["onClick"], jh = { class: "trx-ext-picker__item-info" }, Hh = { class: "trx-ext-picker__item-name" }, Uh = { class: "trx-ext-picker__item-dept" }, Wh = { class: "trx-ext-picker__item-ext" }, Gh = {
  key: 0,
  class: "trx-ext-picker__empty"
}, Kh = /* @__PURE__ */ g({
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
          e("span", zh, v(u.value.name), 1),
          e("span", Dh, v(u.value.extension), 1),
          e("button", {
            class: "trx-ext-picker__clear",
            onClick: H(d, ["stop"])
          }, [...m[2] || (m[2] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ], 64)) : (s(), o("span", Eh, [
          m[3] || (m[3] = e("i", { class: "pi pi-phone" }, null, -1)),
          N(" " + v(t.placeholder), 1)
        ])),
        m[4] || (m[4] = e("i", { class: "pi pi-chevron-down trx-ext-picker__arrow" }, null, -1))
      ], 2),
      n.value ? (s(), o("div", Rh, [
        e("div", Nh, [
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
        t.loading ? (s(), o("div", qh, [...m[6] || (m[6] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : (s(), o("div", Fh, [
          (s(!0), o(V, null, b(c.value, (x) => (s(), o("div", {
            key: x.id,
            class: w(["trx-ext-picker__item", { "trx-ext-picker__item--selected": t.modelValue === x.id }]),
            onClick: (f) => _(x)
          }, [
            e("div", {
              class: w(["trx-ext-picker__dot", x.available ? "on" : "off"])
            }, null, 2),
            e("div", jh, [
              e("span", Hh, v(x.name), 1),
              e("span", Uh, v(x.department), 1)
            ]),
            e("span", Wh, v(x.extension), 1)
          ], 10, Oh))), 128)),
          c.value.length ? h("", !0) : (s(), o("div", Gh, "Nenhum resultado"))
        ]))
      ])) : h("", !0)
    ], 2));
  }
}), FC = /* @__PURE__ */ A(Kh, [["__scopeId", "data-v-0ff142eb"]]), Yh = { class: "trx-aht" }, Jh = { class: "trx-aht__header" }, Xh = { class: "trx-aht__label" }, Qh = { class: "trx-aht__target" }, Zh = { class: "trx-aht__value-row" }, t1 = { class: "trx-aht__bar-wrap" }, e1 = {
  key: 0,
  class: "trx-aht__breakdown"
}, s1 = {
  key: 0,
  class: "trx-aht__seg"
}, a1 = { class: "trx-aht__seg-val" }, l1 = {
  key: 1,
  class: "trx-aht__seg"
}, n1 = { class: "trx-aht__seg-val" }, o1 = {
  key: 2,
  class: "trx-aht__seg"
}, r1 = { class: "trx-aht__seg-val" }, i1 = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", Yh, [
      e("div", Jh, [
        e("span", Xh, v(t.label), 1),
        e("span", Qh, "Meta: " + v(r(t.target)), 1)
      ]),
      e("div", Zh, [
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
      e("div", t1, [
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
      t.showBreakdown ? (s(), o("div", e1, [
        t.talkTime !== void 0 ? (s(), o("div", s1, [
          u[1] || (u[1] = e("i", { class: "pi pi-phone" }, null, -1)),
          u[2] || (u[2] = e("span", null, "Fala", -1)),
          e("span", a1, v(r(t.talkTime)), 1)
        ])) : h("", !0),
        t.holdTime !== void 0 ? (s(), o("div", l1, [
          u[3] || (u[3] = e("i", { class: "pi pi-pause" }, null, -1)),
          u[4] || (u[4] = e("span", null, "Hold", -1)),
          e("span", n1, v(r(t.holdTime)), 1)
        ])) : h("", !0),
        t.acwTime !== void 0 ? (s(), o("div", o1, [
          u[5] || (u[5] = e("i", { class: "pi pi-file-edit" }, null, -1)),
          u[6] || (u[6] = e("span", null, "ACW", -1)),
          e("span", r1, v(r(t.acwTime)), 1)
        ])) : h("", !0)
      ])) : h("", !0)
    ]));
  }
}), OC = /* @__PURE__ */ A(i1, [["__scopeId", "data-v-98b6df67"]]), c1 = { class: "trx-conf" }, u1 = { class: "trx-conf__header" }, d1 = { class: "trx-conf__header-info" }, _1 = { class: "trx-conf__count" }, p1 = { class: "trx-conf__participants" }, v1 = { class: "trx-conf__participant-avatar" }, m1 = {
  key: 0,
  class: "trx-conf__speaking-ring"
}, f1 = { class: "trx-conf__participant-info" }, x1 = { class: "trx-conf__participant-name" }, h1 = { class: "trx-conf__participant-num" }, $1 = { class: "trx-conf__participant-dur" }, g1 = { class: "trx-conf__participant-actions" }, b1 = ["title", "onClick"], y1 = ["onClick"], k1 = { class: "trx-conf__controls" }, w1 = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", c1, [
      e("div", u1, [
        e("div", d1, [
          n[5] || (n[5] = e("i", { class: "pi pi-users trx-conf__icon" }, null, -1)),
          e("div", null, [
            n[4] || (n[4] = e("div", { class: "trx-conf__title" }, "Conferência", -1)),
            e("div", _1, v(t.participants.length) + " participantes", 1)
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
      e("div", p1, [
        (s(!0), o(V, null, b(t.participants, (c) => (s(), o("div", {
          key: c.id,
          class: w(["trx-conf__participant", { "trx-conf__participant--speaking": c.speaking }])
        }, [
          e("div", v1, [
            N(v(c.name[0]) + " ", 1),
            c.speaking ? (s(), o("div", m1)) : h("", !0)
          ]),
          e("div", f1, [
            e("span", x1, v(c.name), 1),
            e("span", h1, v(c.number), 1)
          ]),
          e("span", $1, v(i(c.duration)), 1),
          e("div", g1, [
            e("button", {
              class: w(["trx-conf__p-btn", { muted: c.muted }]),
              title: c.muted ? "Ativar" : "Mutar",
              onClick: (u) => r("muteParticipant", c.id)
            }, [
              e("i", {
                class: w(c.muted ? "pi pi-microphone-off" : "pi pi-microphone")
              }, null, 2)
            ], 10, b1),
            c.role !== "host" ? (s(), o("button", {
              key: 0,
              class: "trx-conf__p-btn trx-conf__p-btn--kick",
              title: "Remover",
              onClick: (u) => r("kickParticipant", c.id)
            }, [...n[7] || (n[7] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])], 8, y1)) : h("", !0)
          ])
        ], 2))), 128))
      ]),
      e("div", k1, [
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
}), jC = /* @__PURE__ */ A(w1, [["__scopeId", "data-v-a2f799aa"]]), T1 = { class: "trx-radar" }, C1 = ["width", "height", "viewBox"], S1 = ["points"], I1 = ["x1", "y1", "x2", "y2"], V1 = ["x", "y"], B1 = ["d", "fill"], P1 = ["d", "stroke"], A1 = ["cx", "cy", "fill"], M1 = {
  key: 0,
  class: "trx-radar__legend"
}, L1 = /* @__PURE__ */ g({
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
    return (x, f) => (s(), o("div", T1, [
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
        }, null, 8, S1))), 128)),
        (s(!0), o(V, null, b(t.axes, (T, $) => (s(), o("line", {
          key: $,
          x1: i.value,
          y1: l.value,
          x2: u(t.levels, $)[0],
          y2: u(t.levels, $)[1],
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, I1))), 128)),
        (s(!0), o(V, null, b(t.axes, (T, $) => (s(), o("text", {
          key: "l" + $,
          x: _($)[0],
          y: _($)[1],
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(T), 9, V1))), 128)),
        (s(!0), o(V, null, b(t.datasets, (T, $) => (s(), o("g", { key: $ }, [
          t.filled ? (s(), o("path", {
            key: 0,
            d: p(d(T.data)),
            fill: T.color ?? a[$ % a.length],
            "fill-opacity": "0.15"
          }, null, 8, B1)) : h("", !0),
          e("path", {
            d: p(d(T.data)),
            fill: "none",
            stroke: T.color ?? a[$ % a.length],
            "stroke-width": "2",
            "stroke-linejoin": "round"
          }, null, 8, P1),
          (s(!0), o(V, null, b(T.data, (C, M) => (s(), o("circle", {
            key: M,
            cx: d(T.data)[M][0],
            cy: d(T.data)[M][1],
            r: "3",
            fill: T.color ?? a[$ % a.length]
          }, null, 8, A1))), 128))
        ]))), 128))
      ], 8, C1)),
      t.datasets.length > 1 ? (s(), o("div", M1, [
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
}), HC = /* @__PURE__ */ A(L1, [["__scopeId", "data-v-7ae6d64b"]]), z1 = { class: "trx-bullet" }, D1 = {
  key: 0,
  class: "trx-bullet__label"
}, E1 = { class: "trx-bullet__values" }, R1 = { class: "trx-bullet__val" }, N1 = { class: "trx-bullet__tgt" }, q1 = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", z1, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("div", {
        key: c.label,
        class: "trx-bullet__row"
      }, [
        t.showLabels ? (s(), o("div", D1, v(c.label), 1)) : h("", !0),
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
        e("div", E1, [
          e("span", R1, v(c.value) + v(t.unit), 1),
          e("span", N1, "/ " + v(c.target) + v(t.unit), 1)
        ])
      ]))), 128))
    ]));
  }
}), UC = /* @__PURE__ */ A(q1, [["__scopeId", "data-v-f642af30"]]), F1 = { class: "trx-waterfall" }, O1 = ["viewBox", "height"], j1 = ["x1", "y1", "x2", "y2"], H1 = ["x", "y"], U1 = ["x1", "y1", "x2", "y2"], W1 = ["x", "y", "width", "height", "fill"], G1 = ["x1", "y1", "x2", "y2"], K1 = ["x", "y"], Y1 = ["x", "y", "fill"], vt = 600, J1 = /* @__PURE__ */ g({
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
    return (f, T) => (s(), o("div", F1, [
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
        }, null, 8, j1))), 128)),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: r.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, H1))), 128)),
        e("line", {
          x1: r.left,
          y1: p(0),
          x2: r.left + i.value,
          y2: p(0),
          stroke: "var(--trx-text-secondary)",
          "stroke-width": "1.5"
        }, null, 8, U1),
        (s(!0), o(V, null, b(n.value, ($, C) => (s(), o("g", { key: C }, [
          e("rect", {
            x: m(C),
            y: Math.min(p($.start), p($.end)),
            width: d.value,
            height: Math.abs(p($.start) - p($.end)),
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor,
            rx: "2"
          }, null, 8, W1),
          C < n.value.length - 1 && !$.isTotal && !n.value[C + 1].isTotal ? (s(), o("line", {
            key: 0,
            x1: m(C) + d.value,
            y1: p($.end),
            x2: m(C + 1),
            y2: p($.end),
            stroke: "var(--trx-border-color)",
            "stroke-width": "1",
            "stroke-dasharray": "3,3"
          }, null, 8, G1)) : h("", !0),
          e("text", {
            x: m(C) + d.value / 2,
            y: r.top + l.value + 18,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v($.label), 9, K1),
          e("text", {
            x: m(C) + d.value / 2,
            y: Math.min(p($.start), p($.end)) - 4,
            "text-anchor": "middle",
            "font-size": "9",
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor
          }, v($.value > 0 ? "+" : "") + v($.value), 9, Y1)
        ]))), 128))
      ], 8, O1))
    ]));
  }
}), WC = /* @__PURE__ */ A(J1, [["__scopeId", "data-v-246079c5"]]), X1 = { class: "trx-hbar" }, Q1 = {
  key: 0,
  class: "trx-hbar__loading"
}, Z1 = {
  key: 1,
  class: "trx-hbar__empty"
}, t$ = {
  key: 2,
  class: "trx-hbar__list"
}, e$ = { class: "trx-hbar__label-row" }, s$ = { class: "trx-hbar__label" }, a$ = {
  key: 0,
  class: "trx-hbar__values"
}, l$ = {
  key: 0,
  class: "trx-hbar__target-val"
}, n$ = { class: "trx-hbar__track" }, o$ = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", X1, [
      t.loading ? (s(), o("div", Q1, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.items.length ? (s(), o("div", t$, [
        (s(!0), o(V, null, b(t.items, (n, c) => (s(), o("div", {
          key: n.label,
          class: "trx-hbar__item"
        }, [
          e("div", e$, [
            e("span", s$, v(n.label), 1),
            t.showValues ? (s(), o("div", a$, [
              e("span", {
                class: "trx-hbar__value",
                style: R({ color: n.color ?? a[c % a.length] })
              }, v(n.value.toLocaleString("pt-BR")) + v(t.unit), 5),
              t.showTarget && n.target ? (s(), o("span", l$, "/ " + v(n.target) + v(t.unit), 1)) : h("", !0)
            ])) : h("", !0)
          ]),
          e("div", n$, [
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
      ])) : (s(), o("div", Z1, "Sem dados"))
    ]));
  }
}), GC = /* @__PURE__ */ A(o$, [["__scopeId", "data-v-699106b6"]]), r$ = { class: "trx-scatter" }, i$ = ["viewBox", "height"], c$ = ["x1", "y1", "x2", "y2"], u$ = ["x1", "y1", "x2", "y2"], d$ = ["x", "y"], _$ = ["x", "y"], p$ = ["cx", "cy", "r", "fill"], v$ = { key: 0 }, m$ = ["x", "y"], f$ = {
  key: 0,
  class: "trx-scatter__legend"
}, mt = 600, x$ = /* @__PURE__ */ g({
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
    return (C, M) => (s(), o("div", r$, [
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
          }, null, 8, c$))), 128)),
          (s(!0), o(V, null, b(T.value, (E) => (s(), o("line", {
            key: "gx" + E.v,
            x1: E.x,
            y1: i.top,
            x2: E.x,
            y2: i.top + n.value,
            stroke: "var(--trx-border-color)",
            "stroke-width": "1"
          }, null, 8, u$))), 128))
        ], 64)) : h("", !0),
        (s(!0), o(V, null, b($.value, (E) => (s(), o("text", {
          key: "yl" + E.v,
          x: i.left - 6,
          y: E.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, d$))), 128)),
        (s(!0), o(V, null, b(T.value, (E) => (s(), o("text", {
          key: "xl" + E.v,
          x: E.x,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, _$))), 128)),
        (s(!0), o(V, null, b(t.datasets, (E, F) => (s(), o("g", { key: F }, [
          (s(!0), o(V, null, b(E.data, (q, K) => (s(), o("circle", {
            key: K,
            cx: x(q.x),
            cy: f(q.y),
            r: q.size ?? 5,
            fill: E.color ?? a[F % a.length],
            "fill-opacity": "0.8"
          }, [
            q.label ? (s(), o("title", v$, v(q.label) + ": (" + v(q.x) + ", " + v(q.y) + ")", 1)) : h("", !0)
          ], 8, p$))), 128))
        ]))), 128)),
        t.xLabel ? (s(), o("text", {
          key: 1,
          x: i.left + l.value / 2,
          y: t.height - 2,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(t.xLabel), 9, m$)) : h("", !0)
      ], 8, i$)),
      t.datasets.length > 1 ? (s(), o("div", f$, [
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
}), KC = /* @__PURE__ */ A(x$, [["__scopeId", "data-v-6225f708"]]), h$ = { class: "trx-pie" }, $$ = ["width", "height", "viewBox"], g$ = ["d", "fill"], b$ = ["x", "y"], y$ = {
  key: 0,
  class: "trx-pie__legend"
}, k$ = { class: "trx-pie__legend-label" }, w$ = { class: "trx-pie__legend-pct" }, T$ = /* @__PURE__ */ g({
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
    return (_, d) => (s(), o("div", h$, [
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
        ], 8, g$))), 128)),
        t.showLabels ? (s(!0), o(V, { key: 0 }, b(u.value.filter((p) => p.pct > 8), (p, m) => (s(), o("text", {
          key: "l" + m,
          x: p.labelX,
          y: p.labelY,
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "11",
          "font-weight": "700",
          fill: "white"
        }, v(p.pct) + "%", 9, b$))), 128)) : h("", !0)
      ], 8, $$)),
      t.showLegend ? (s(), o("div", y$, [
        (s(!0), o(V, null, b(u.value, (p, m) => (s(), o("div", {
          key: m,
          class: "trx-pie__legend-item"
        }, [
          e("span", {
            class: "trx-pie__legend-dot",
            style: R({ background: p.color })
          }, null, 4),
          e("span", k$, v(p.label), 1),
          e("span", w$, v(p.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), YC = /* @__PURE__ */ A(T$, [["__scopeId", "data-v-a92927e0"]]), C$ = {
  key: 0,
  class: "trx-typing__name"
}, S$ = {
  key: 1,
  class: "trx-typing__text"
}, I$ = /* @__PURE__ */ g({
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
            t.name ? (s(), o("span", C$, v(t.name) + " está digitando...", 1)) : h("", !0)
          ], 64)) : (s(), o("span", S$, [
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
}), JC = /* @__PURE__ */ A(I$, [["__scopeId", "data-v-04651ca9"]]), V$ = { class: "trx-quick-replies" }, B$ = ["disabled", "onClick"], P$ = /* @__PURE__ */ g({
  __name: "TrxQuickReplies",
  props: {
    replies: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", V$, [
      (s(!0), o(V, null, b(t.replies, (n) => (s(), o("button", {
        key: n.id,
        class: "trx-quick-replies__btn",
        disabled: t.disabled,
        onClick: (c) => r("select", n)
      }, v(n.label), 9, B$))), 128))
    ]));
  }
}), XC = /* @__PURE__ */ A(P$, [["__scopeId", "data-v-082e109e"]]), A$ = { class: "trx-canned__search-wrap" }, M$ = ["placeholder"], L$ = { class: "trx-canned__list" }, z$ = ["onClick", "onMouseenter"], D$ = { class: "trx-canned__shortcut" }, E$ = { class: "trx-canned__info" }, R$ = { class: "trx-canned__title" }, N$ = { class: "trx-canned__preview" }, q$ = {
  key: 0,
  class: "trx-canned__cat"
}, F$ = {
  key: 0,
  class: "trx-canned__empty"
}, O$ = /* @__PURE__ */ g({
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
      e("div", A$, [
        p[4] || (p[4] = e("i", { class: "pi pi-search trx-canned__search-icon" }, null, -1)),
        Y(e("input", {
          "onUpdate:modelValue": p[0] || (p[0] = (m) => l.value = m),
          class: "trx-canned__search",
          placeholder: `Buscar resposta (${t.trigger}...)`,
          autofocus: "",
          onInput: p[1] || (p[1] = (m) => n.value = 0)
        }, null, 40, M$), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-canned__close",
          onClick: p[2] || (p[2] = (m) => i("update:modelValue", !1))
        }, [...p[3] || (p[3] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])])
      ]),
      e("div", L$, [
        (s(!0), o(V, null, b(c.value, (m, x) => (s(), o("div", {
          key: m.id,
          class: w(["trx-canned__item", { "trx-canned__item--highlighted": x === n.value }]),
          onClick: (f) => u(m),
          onMouseenter: (f) => n.value = x
        }, [
          e("code", D$, v(m.shortcut), 1),
          e("div", E$, [
            e("span", R$, v(m.title), 1),
            e("span", N$, v(m.content), 1)
          ]),
          m.category ? (s(), o("span", q$, v(m.category), 1)) : h("", !0)
        ], 42, z$))), 128)),
        c.value.length ? h("", !0) : (s(), o("div", F$, "Nenhuma resposta encontrada"))
      ])
    ], 32)) : h("", !0);
  }
}), QC = /* @__PURE__ */ A(O$, [["__scopeId", "data-v-b64dd5e1"]]), j$ = { class: "trx-email" }, H$ = { class: "trx-email__field" }, U$ = { class: "trx-email__chips" }, W$ = ["onClick"], G$ = {
  key: 0,
  class: "trx-email__field"
}, K$ = { class: "trx-email__chips" }, Y$ = ["onClick"], J$ = { class: "trx-email__field" }, X$ = { class: "trx-email__footer" }, Q$ = { class: "trx-email__footer-left" }, Z$ = {
  class: "trx-email__attach-btn",
  title: "Anexar arquivo"
}, tg = {
  key: 0,
  class: "trx-email__attach-count"
}, eg = { class: "trx-email__footer-right" }, sg = ["disabled"], ag = /* @__PURE__ */ g({
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
      return s(), o("div", j$, [
        e("div", H$, [
          f[12] || (f[12] = e("label", { class: "trx-email__label" }, "Para", -1)),
          e("div", U$, [
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
              ])], 8, W$)
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
        n.value ? (s(), o("div", G$, [
          f[14] || (f[14] = e("label", { class: "trx-email__label" }, "CC", -1)),
          e("div", K$, [
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
              ])], 8, Y$)
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
        e("div", J$, [
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
        e("div", X$, [
          e("div", Q$, [
            e("label", Z$, [
              f[16] || (f[16] = e("i", { class: "pi pi-paperclip" }, null, -1)),
              e("input", {
                type: "file",
                multiple: "",
                hidden: "",
                onChange: m
              }, null, 32)
            ]),
            (T = r.value.attachments) != null && T.length ? (s(), o("span", tg, v(r.value.attachments.length) + " anexo(s) ", 1)) : h("", !0)
          ]),
          e("div", eg, [
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
            ], 8, sg)
          ])
        ])
      ]);
    };
  }
}), ZC = /* @__PURE__ */ A(ag, [["__scopeId", "data-v-96c2a2b1"]]), lg = { class: "trx-tpl" }, ng = { class: "trx-tpl__search" }, og = { class: "trx-tpl__layout" }, rg = { class: "trx-tpl__list" }, ig = {
  key: 0,
  class: "trx-tpl__loading"
}, cg = { class: "trx-tpl__cat-label" }, ug = ["onClick"], dg = { class: "trx-tpl__item-name" }, _g = { class: "trx-tpl__item-lang" }, pg = { class: "trx-tpl__preview" }, vg = {
  key: 0,
  class: "trx-tpl__no-select"
}, mg = { class: "trx-tpl__preview-body" }, fg = {
  key: 0,
  class: "trx-tpl__vars"
}, xg = { class: "trx-tpl__var-label" }, hg = ["onUpdate:modelValue", "placeholder"], $g = /* @__PURE__ */ g({
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
      return s(), o("div", lg, [
        e("div", ng, [
          f[1] || (f[1] = e("i", { class: "pi pi-search trx-tpl__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": f[0] || (f[0] = ($) => l.value = $),
            class: "trx-tpl__search-input",
            placeholder: "Buscar template..."
          }, null, 512), [
            [J, l.value]
          ])
        ]),
        e("div", og, [
          e("div", rg, [
            t.loading ? (s(), o("div", ig, [...f[2] || (f[2] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : (s(!0), o(V, { key: 1 }, b(u.value, ($) => (s(), o("div", { key: $ }, [
              e("div", cg, v($), 1),
              (s(!0), o(V, null, b(_.value.filter((C) => C.category === $), (C) => {
                var M;
                return s(), o("div", {
                  key: C.id,
                  class: w(["trx-tpl__item", { "trx-tpl__item--active": ((M = n.value) == null ? void 0 : M.id) === C.id }]),
                  onClick: (E) => d(C)
                }, [
                  e("span", dg, v(C.name), 1),
                  e("span", _g, v(C.language), 1)
                ], 10, ug);
              }), 128))
            ]))), 128))
          ]),
          e("div", pg, [
            n.value ? (s(), o(V, { key: 1 }, [
              e("div", mg, v(m()), 1),
              (T = n.value.variables) != null && T.length ? (s(), o("div", fg, [
                f[4] || (f[4] = e("div", { class: "trx-tpl__vars-title" }, "Variáveis", -1)),
                (s(!0), o(V, null, b(n.value.variables, ($) => (s(), o("div", {
                  key: $,
                  class: "trx-tpl__var-row"
                }, [
                  e("label", xg, v($), 1),
                  Y(e("input", {
                    "onUpdate:modelValue": (C) => c.value[$] = C,
                    class: "trx-tpl__var-input",
                    placeholder: $
                  }, null, 8, hg), [
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
            ], 64)) : (s(), o("div", vg, [...f[3] || (f[3] = [
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
}), t4 = /* @__PURE__ */ A($g, [["__scopeId", "data-v-6e07f607"]]), gg = { class: "trx-sentiment__icon-wrap" }, bg = { class: "trx-sentiment__emoji" }, yg = { class: "trx-sentiment__info" }, kg = { class: "trx-sentiment__label" }, wg = {
  key: 0,
  class: "trx-sentiment__score"
}, Tg = {
  key: 0,
  class: "trx-sentiment__bar-wrap"
}, Cg = /* @__PURE__ */ g({
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
      e("div", gg, [
        e("span", bg, v(i.value.emoji), 1)
      ]),
      e("div", yg, [
        e("span", kg, v(t.label ?? i.value.label), 1),
        t.showScore && t.sentiment !== "unknown" ? (s(), o("span", wg, v(l.value), 1)) : h("", !0)
      ]),
      t.showScore && t.sentiment !== "unknown" ? (s(), o("div", Tg, [
        e("div", {
          class: "trx-sentiment__bar",
          style: R({ width: Math.abs(t.score) * 100 + "%" })
        }, null, 4)
      ])) : h("", !0)
    ], 6));
  }
}), e4 = /* @__PURE__ */ A(Cg, [["__scopeId", "data-v-0cf3b19c"]]), Sg = { class: "trx-bot-bubble" }, Ig = { class: "trx-bot-bubble__avatar" }, Vg = ["src", "alt"], Bg = {
  key: 1,
  class: "trx-bot-bubble__avatar-init"
}, Pg = { class: "trx-bot-bubble__content" }, Ag = { class: "trx-bot-bubble__name" }, Mg = { class: "trx-bot-bubble__message" }, Lg = {
  key: 0,
  class: "trx-bot-bubble__typing"
}, zg = { class: "trx-bot-bubble__text" }, Dg = {
  key: 0,
  class: "trx-bot-bubble__options"
}, Eg = ["onClick"], Rg = {
  key: 0,
  class: "trx-bot-bubble__time"
}, Ng = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", Sg, [
      e("div", Ig, [
        t.botAvatar ? (s(), o("img", {
          key: 0,
          src: t.botAvatar,
          alt: t.botName,
          class: "trx-bot-bubble__avatar-img"
        }, null, 8, Vg)) : (s(), o("div", Bg, [...l[0] || (l[0] = [
          e("i", { class: "pi pi-android" }, null, -1)
        ])]))
      ]),
      e("div", Pg, [
        e("div", Ag, v(t.botName), 1),
        e("div", Mg, [
          t.loading ? (s(), o("div", Lg, [...l[1] || (l[1] = [
            e("span", null, null, -1),
            e("span", null, null, -1),
            e("span", null, null, -1)
          ])])) : (s(), o(V, { key: 1 }, [
            e("p", zg, v(t.message), 1),
            t.options.length ? (s(), o("div", Dg, [
              (s(!0), o(V, null, b(t.options, (n) => (s(), o("button", {
                key: n,
                class: "trx-bot-bubble__option",
                onClick: (c) => r("optionSelect", n)
              }, v(n), 9, Eg))), 128))
            ])) : h("", !0)
          ], 64))
        ]),
        t.time ? (s(), o("span", Rg, v(t.time), 1)) : h("", !0)
      ])
    ]));
  }
}), s4 = /* @__PURE__ */ A(Ng, [["__scopeId", "data-v-fdd3fdf6"]]), qg = { class: "trx-tz__content" }, Fg = { class: "trx-tz__time" }, Og = { class: "trx-tz__meta" }, jg = {
  key: 0,
  class: "trx-tz__date"
}, Hg = { class: "trx-tz__offset" }, Ug = {
  key: 0,
  class: "trx-tz__local"
}, Wg = { class: "trx-tz__local-time" }, Gg = /* @__PURE__ */ g({
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
      e("div", qg, [
        e("div", Fg, v(l.value), 1),
        e("div", Og, [
          t.compact ? h("", !0) : (s(), o("span", jg, v(n.value), 1)),
          e("span", Hg, v(u.value), 1),
          e("span", {
            class: w(["trx-tz__status", p.value ? "night" : d.value ? "business" : "off"])
          }, v(p.value ? "Noite" : d.value ? "Horário comercial" : "Fora do horário"), 3)
        ])
      ]),
      t.compact ? h("", !0) : (s(), o("div", Ug, [
        x[0] || (x[0] = e("span", { class: "trx-tz__local-label" }, "Seu horário:", -1)),
        e("span", Wg, v(c.value), 1)
      ]))
    ], 2));
  }
}), a4 = /* @__PURE__ */ A(Gg, [["__scopeId", "data-v-61352836"]]), Kg = { class: "trx-split__pane trx-split__pane--second" }, Yg = /* @__PURE__ */ g({
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
      e("div", Kg, [
        I(_.$slots, "second", {}, void 0, !0)
      ])
    ], 2));
  }
}), l4 = /* @__PURE__ */ A(Yg, [["__scopeId", "data-v-146c2928"]]), Jg = {
  key: 0,
  class: "trx-fab-actions"
}, Xg = { class: "trx-fab-action__label" }, Qg = ["title", "onClick"], Zg = /* @__PURE__ */ g({
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
          i.value && t.actions.length ? (s(), o("div", Jg, [
            (s(!0), o(V, null, b([...t.actions].reverse(), (c, u) => (s(), o("div", {
              key: c.id,
              class: "trx-fab-action",
              style: R({ "--delay": u * 0.05 + "s", "--ac": c.color ?? "var(--trx-accent-color)" })
            }, [
              e("span", Xg, v(c.label), 1),
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
              ], 12, Qg)
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
}), n4 = /* @__PURE__ */ A(Zg, [["__scopeId", "data-v-1778a9e3"]]), tb = {
  key: 0,
  class: "trx-ctx-menu__separator"
}, eb = ["disabled", "onClick"], sb = /* @__PURE__ */ g({
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
              u.separator ? (s(), o("div", tb)) : (s(), o("button", {
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
              ], 10, eb))
            ], 64))), 128))
          ], 4)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), o4 = /* @__PURE__ */ A(sb, [["__scopeId", "data-v-0e16a25d"]]), ab = { class: "trx-drag-list" }, lb = ["draggable", "onDragstart", "onDragover", "onDrop"], nb = ["onDragstart"], ob = { class: "trx-drag-list__content" }, rb = /* @__PURE__ */ g({
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
    return (p, m) => (s(), o("div", ab, [
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
        ])], 40, nb)) : h("", !0),
        e("div", ob, [
          I(p.$slots, "default", {
            item: x,
            index: f
          }, void 0, !0)
        ])
      ], 42, lb))), 128))
    ]));
  }
}), r4 = /* @__PURE__ */ A(rb, [["__scopeId", "data-v-b1539e37"]]), ib = /* @__PURE__ */ g({
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
}), i4 = /* @__PURE__ */ A(ib, [["__scopeId", "data-v-2789be87"]]), cb = ["title"], ub = { class: "trx-rsidebar__content" }, db = /* @__PURE__ */ g({
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
        ], 40, cb)) : h("", !0)
      ], 34),
      e("div", ub, [
        I(x.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), c4 = /* @__PURE__ */ A(db, [["__scopeId", "data-v-bfeae2d6"]]), _b = { class: "trx-jv" }, pb = { class: "trx-jv__toolbar" }, vb = ["innerHTML"], mb = /* @__PURE__ */ g({
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
    return (_, d) => (s(), o("div", _b, [
      e("div", pb, [
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
      }, null, 8, vb)
    ]));
  }
}), u4 = /* @__PURE__ */ A(mb, [["__scopeId", "data-v-56a7e2b2"]]), fb = { class: "trx-diff" }, xb = { class: "trx-diff__header" }, hb = {
  key: 0,
  class: "trx-diff__title"
}, $b = { class: "trx-diff__stats" }, gb = { class: "trx-diff__stat trx-diff__stat--add" }, bb = { class: "trx-diff__stat trx-diff__stat--rem" }, yb = {
  key: 0,
  class: "trx-diff__unified"
}, kb = { class: "trx-diff__gutter" }, wb = { class: "trx-diff__gutter" }, Tb = { class: "trx-diff__marker" }, Cb = { class: "trx-diff__code" }, Sb = {
  key: 1,
  class: "trx-diff__split"
}, Ib = { class: "trx-diff__pane" }, Vb = { class: "trx-diff__pane-title" }, Bb = { class: "trx-diff__gutter" }, Pb = { class: "trx-diff__marker" }, Ab = { class: "trx-diff__code" }, Mb = { class: "trx-diff__pane" }, Lb = { class: "trx-diff__pane-title" }, zb = { class: "trx-diff__gutter" }, Db = { class: "trx-diff__marker" }, Eb = { class: "trx-diff__code" }, Rb = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", fb, [
      e("div", xb, [
        t.title ? (s(), o("span", hb, v(t.title), 1)) : h("", !0),
        e("div", $b, [
          e("span", gb, "+" + v(l.value.added), 1),
          e("span", bb, "-" + v(l.value.removed), 1)
        ])
      ]),
      t.unified ? (s(), o("div", yb, [
        (s(!0), o(V, null, b(i.value, (d, p) => (s(), o("div", {
          key: p,
          class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
        }, [
          e("span", kb, v(d.lineOrig ?? ""), 1),
          e("span", wb, v(d.lineMod ?? ""), 1),
          e("span", Tb, v(d.type === "add" ? "+" : d.type === "remove" ? "-" : " "), 1),
          e("span", Cb, v(d.content), 1)
        ], 2))), 128))
      ])) : (s(), o("div", Sb, [
        e("div", Ib, [
          e("div", Vb, v(t.titleOriginal), 1),
          (s(!0), o(V, null, b(n.value, (d, p) => (s(), o("div", {
            key: p,
            class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", Bb, v(d.lineOrig), 1),
            e("span", Pb, v(d.type === "remove" ? "-" : " "), 1),
            e("span", Ab, v(d.content), 1)
          ], 2))), 128))
        ]),
        _[0] || (_[0] = e("div", { class: "trx-diff__divider" }, null, -1)),
        e("div", Mb, [
          e("div", Lb, v(t.titleModified), 1),
          (s(!0), o(V, null, b(c.value, (d, p) => (s(), o("div", {
            key: p,
            class: w(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", zb, v(d.lineMod), 1),
            e("span", Db, v(d.type === "add" ? "+" : " "), 1),
            e("span", Eb, v(d.content), 1)
          ], 2))), 128))
        ])
      ]))
    ]));
  }
}), d4 = /* @__PURE__ */ A(Rb, [["__scopeId", "data-v-cc06dd9b"]]), Nb = { class: "trx-inf__sentinel" }, qb = /* @__PURE__ */ g({
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
      e("div", Nb, [
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
}), _4 = /* @__PURE__ */ A(qb, [["__scopeId", "data-v-5ed8d6bb"]]), Fb = { class: "trx-pivot" }, Ob = { class: "trx-pivot__wrap" }, jb = { class: "trx-pivot__table" }, Hb = { class: "trx-pivot__th trx-pivot__th--corner" }, Ub = {
  key: 0,
  class: "trx-pivot__th trx-pivot__th--total"
}, Wb = { class: "trx-pivot__td trx-pivot__td--label" }, Gb = {
  key: 0,
  class: "trx-pivot__td trx-pivot__td--total"
}, Kb = { key: 0 }, Yb = { class: "trx-pivot__td trx-pivot__td--grand" }, Jb = /* @__PURE__ */ g({
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
    return (x, f) => (s(), o("div", Fb, [
      e("div", Ob, [
        e("table", jb, [
          e("thead", null, [
            e("tr", null, [
              e("th", Hb, v(t.rowLabel), 1),
              (s(!0), o(V, null, b(n.value, (T) => (s(), o("th", {
                key: T,
                class: "trx-pivot__th"
              }, v(T), 1))), 128)),
              t.showTotals ? (s(), o("th", Ub, "Total")) : h("", !0)
            ])
          ]),
          e("tbody", null, [
            (s(!0), o(V, null, b(l.value, (T) => (s(), o("tr", { key: T }, [
              e("td", Wb, v(T), 1),
              (s(!0), o(V, null, b(n.value, ($) => (s(), o("td", {
                key: $,
                class: "trx-pivot__td trx-pivot__td--value",
                style: R({ "--heat": m(T, $) })
              }, v(c(T, $)), 5))), 128)),
              t.showTotals ? (s(), o("td", Gb, v(u(T)), 1)) : h("", !0)
            ]))), 128))
          ]),
          t.showTotals ? (s(), o("tfoot", Kb, [
            e("tr", null, [
              f[0] || (f[0] = e("td", { class: "trx-pivot__td trx-pivot__td--label trx-pivot__td--foot" }, "Total", -1)),
              (s(!0), o(V, null, b(n.value, (T) => (s(), o("td", {
                key: T,
                class: "trx-pivot__td trx-pivot__td--total"
              }, v(_(T)), 1))), 128)),
              e("td", Yb, v(d.value), 1)
            ])
          ])) : h("", !0)
        ])
      ])
    ]));
  }
}), p4 = /* @__PURE__ */ A(Jb, [["__scopeId", "data-v-d9bac3c6"]]), Xb = { class: "trx-env-banner__label" }, Qb = {
  key: 0,
  class: "trx-env-banner__msg"
}, Zb = /* @__PURE__ */ g({
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
            e("span", Xb, v(a[t.env]), 1),
            t.message ? (s(), o("span", Qb, "— " + v(t.message), 1)) : h("", !0),
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
}), v4 = /* @__PURE__ */ A(Zb, [["__scopeId", "data-v-b7dfb3ab"]]), ty = { class: "trx-log" }, ey = { class: "trx-log__toolbar" }, sy = { class: "trx-log__filters" }, ay = ["onClick"], ly = { class: "trx-log__search-wrap" }, ny = { class: "trx-log__count" }, oy = {
  key: 0,
  class: "trx-log__empty"
}, ry = {
  key: 0,
  class: "trx-log__ts"
}, iy = {
  key: 1,
  class: "trx-log__source"
}, cy = { class: "trx-log__msg" }, uy = {
  key: 2,
  class: "trx-log__meta"
}, dy = /* @__PURE__ */ g({
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
    return (d, p) => (s(), o("div", ty, [
      e("div", ey, [
        e("div", sy, [
          (s(), o(V, null, b(n, (m) => e("button", {
            key: m,
            class: w(["trx-log__filter", [`trx-log__filter--${m}`, { "trx-log__filter--active": i.value.has(m) }]]),
            onClick: (x) => c(m)
          }, [
            e("i", {
              class: w(_[m])
            }, null, 2),
            e("span", null, v(m), 1)
          ], 10, ay)), 64))
        ]),
        e("div", ly, [
          p[1] || (p[1] = e("i", { class: "pi pi-search trx-log__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
            class: "trx-log__search",
            placeholder: "Buscar..."
          }, null, 512), [
            [J, r.value]
          ])
        ]),
        e("span", ny, v(u.value.length) + " / " + v(t.logs.length), 1)
      ]),
      e("div", {
        ref_key: "container",
        ref: l,
        class: "trx-log__body",
        style: R({ maxHeight: t.maxHeight })
      }, [
        u.value.length ? h("", !0) : (s(), o("div", oy, "Nenhum log")),
        (s(!0), o(V, null, b(u.value, (m) => (s(), o("div", {
          key: m.id,
          class: w(["trx-log__entry", `trx-log__entry--${m.level}`])
        }, [
          e("i", {
            class: w([_[m.level], "trx-log__entry-icon"])
          }, null, 2),
          t.showTimestamp && m.timestamp ? (s(), o("span", ry, v(m.timestamp), 1)) : h("", !0),
          t.showSource && m.source ? (s(), o("span", iy, "[" + v(m.source) + "]", 1)) : h("", !0),
          e("span", cy, v(m.message), 1),
          m.meta ? (s(), o("details", uy, [
            p[2] || (p[2] = e("summary", null, "meta", -1)),
            e("pre", null, v(JSON.stringify(m.meta, null, 2)), 1)
          ])) : h("", !0)
        ], 2))), 128))
      ], 4)
    ]));
  }
}), m4 = /* @__PURE__ */ A(dy, [["__scopeId", "data-v-d3d12a7f"]]), _y = /* @__PURE__ */ g({
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
}), f4 = /* @__PURE__ */ A(_y, [["__scopeId", "data-v-5caecc99"]]), py = {
  key: 0,
  class: "trx-upd",
  role: "dialog",
  "aria-live": "polite"
}, vy = { class: "trx-upd__content" }, my = { class: "trx-upd__title" }, fy = { class: "trx-upd__msg" }, xy = {
  key: 0,
  class: "trx-upd__ver"
}, hy = { class: "trx-upd__actions" }, $y = /* @__PURE__ */ g({
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
          t.modelValue ? (s(), o("div", py, [
            c[2] || (c[2] = e("div", { class: "trx-upd__icon-wrap" }, [
              e("i", { class: "pi pi-refresh trx-upd__icon" })
            ], -1)),
            e("div", vy, [
              e("p", my, v(t.title), 1),
              e("p", fy, [
                N(v(t.message), 1),
                t.version ? (s(), o("span", xy, " v" + v(t.version), 1)) : h("", !0)
              ])
            ]),
            e("div", hy, [
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
}), x4 = /* @__PURE__ */ A($y, [["__scopeId", "data-v-81ddfccd"]]), gy = { class: "trx-fp" }, by = { class: "trx-fp__header" }, yy = { class: "trx-fp__meta" }, ky = { class: "trx-fp__name" }, wy = {
  key: 0,
  class: "trx-fp__size"
}, Ty = { class: "trx-fp__actions" }, Cy = ["href", "aria-label"], Sy = ["src", "alt"], Iy = ["src"], Vy = ["src"], By = ["src"], Py = {
  key: 4,
  class: "trx-fp__text-wrap"
}, Ay = ["src"], My = {
  key: 5,
  class: "trx-fp__unknown"
}, Ly = { class: "trx-fp__ext" }, zy = ["href"], Dy = /* @__PURE__ */ g({
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
    return (d, p) => (s(), o("div", gy, [
      e("div", by, [
        e("i", {
          class: w([u[n.value], "trx-fp__header-icon"])
        }, null, 2),
        e("div", yy, [
          e("span", ky, v(t.name ?? "Arquivo"), 1),
          t.size ? (s(), o("span", wy, v(c(t.size)), 1)) : h("", !0)
        ]),
        e("div", Ty, [
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            "aria-label": `Baixar ${t.name}`,
            class: "trx-fp__action",
            onClick: p[0] || (p[0] = (m) => i("download"))
          }, [...p[2] || (p[2] = [
            e("i", { class: "pi pi-download" }, null, -1)
          ])], 8, Cy)) : h("", !0),
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
        }, null, 8, Sy)) : n.value === "pdf" ? (s(), o("iframe", {
          key: 1,
          src: t.url,
          class: "trx-fp__iframe",
          title: "PDF Preview"
        }, null, 8, Iy)) : n.value === "video" ? (s(), o("video", {
          key: 2,
          src: t.url,
          controls: "",
          class: "trx-fp__video"
        }, " Seu browser não suporta vídeo. ", 8, Vy)) : n.value === "audio" ? (s(), o("audio", {
          key: 3,
          src: t.url,
          controls: "",
          class: "trx-fp__audio"
        }, " Seu browser não suporta áudio. ", 8, By)) : n.value === "text" ? (s(), o("div", Py, [
          I(d.$slots, "text-content", {}, () => [
            e("iframe", {
              src: t.url,
              class: "trx-fp__iframe",
              title: "Text Preview",
              sandbox: "allow-same-origin"
            }, null, 8, Ay)
          ], !0)
        ])) : (s(), o("div", My, [
          e("span", Ly, v(_.value), 1),
          p[5] || (p[5] = e("p", { class: "trx-fp__unknown-msg" }, "Pré-visualização não disponível para este tipo de arquivo.", -1)),
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            class: "trx-fp__dl-btn"
          }, [...p[4] || (p[4] = [
            e("i", { class: "pi pi-download" }, null, -1),
            N(" Baixar arquivo ", -1)
          ])], 8, zy)) : h("", !0)
        ]))
      ], 4)
    ]));
  }
}), h4 = /* @__PURE__ */ A(Dy, [["__scopeId", "data-v-ea51c0ff"]]), Ey = {
  key: 0,
  class: "trx-ann__dots"
}, Ry = ["onClick"], Ny = { class: "trx-ann__msg" }, qy = ["href"], Fy = /* @__PURE__ */ g({
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
            l.value.length > 1 ? (s(), o("div", Ey, [
              (s(!0), o(V, null, b(l.value, (x, f) => (s(), o("span", {
                key: x.id,
                class: w(["trx-ann__dot", { "trx-ann__dot--active": f === i.value % l.value.length }]),
                onClick: (T) => i.value = f
              }, null, 10, Ry))), 128))
            ])) : h("", !0),
            e("i", {
              class: w([d[n.value.type ?? "info"], "trx-ann__icon"])
            }, null, 2),
            e("span", Ny, v(n.value.message), 1),
            n.value.link ? (s(), o("a", {
              key: 1,
              href: n.value.link.href,
              class: "trx-ann__link",
              target: "_blank",
              rel: "noopener"
            }, [
              N(v(n.value.link.label) + " ", 1),
              m[1] || (m[1] = e("i", { class: "pi pi-external-link" }, null, -1))
            ], 8, qy)) : h("", !0),
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
}), $4 = /* @__PURE__ */ A(Fy, [["__scopeId", "data-v-84e8d297"]]), Oy = { inheritAttrs: !1 }, g4 = /* @__PURE__ */ g({
  ...Oy,
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
}), jy = { inheritAttrs: !1 }, b4 = /* @__PURE__ */ g({
  ...jy,
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
}), Hy = { inheritAttrs: !1 }, y4 = /* @__PURE__ */ g({
  ...Hy,
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
}), Uy = { inheritAttrs: !1 }, k4 = /* @__PURE__ */ g({
  ...Uy,
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
}), Wy = { inheritAttrs: !1 }, w4 = /* @__PURE__ */ g({
  ...Wy,
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
}), Gy = { inheritAttrs: !1 }, T4 = /* @__PURE__ */ g({
  ...Gy,
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
}), Ky = { inheritAttrs: !1 }, C4 = /* @__PURE__ */ g({
  ...Ky,
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
}), Yy = { inheritAttrs: !1 }, S4 = /* @__PURE__ */ g({
  ...Yy,
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
}), Jy = { inheritAttrs: !1 }, I4 = /* @__PURE__ */ g({
  ...Jy,
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
}), Xy = { inheritAttrs: !1 }, V4 = /* @__PURE__ */ g({
  ...Xy,
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
}), Qy = { inheritAttrs: !1 }, B4 = /* @__PURE__ */ g({
  ...Qy,
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
}), Zy = { inheritAttrs: !1 }, P4 = /* @__PURE__ */ g({
  ...Zy,
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
}), t0 = { inheritAttrs: !1 }, A4 = /* @__PURE__ */ g({
  ...t0,
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
}), e0 = { inheritAttrs: !1 }, M4 = /* @__PURE__ */ g({
  ...e0,
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
}), s0 = { inheritAttrs: !1 }, L4 = /* @__PURE__ */ g({
  ...s0,
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
}), a0 = { inheritAttrs: !1 }, z4 = /* @__PURE__ */ g({
  ...a0,
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
}), l0 = { inheritAttrs: !1 }, D4 = /* @__PURE__ */ g({
  ...l0,
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
}), n0 = { inheritAttrs: !1 }, E4 = /* @__PURE__ */ g({
  ...n0,
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
}), o0 = { inheritAttrs: !1 }, R4 = /* @__PURE__ */ g({
  ...o0,
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
}), r0 = { inheritAttrs: !1 }, N4 = /* @__PURE__ */ g({
  ...r0,
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
}), i0 = { inheritAttrs: !1 }, q4 = /* @__PURE__ */ g({
  ...i0,
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
}), c0 = { inheritAttrs: !1 }, F4 = /* @__PURE__ */ g({
  ...c0,
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
}), u0 = { inheritAttrs: !1 }, O4 = /* @__PURE__ */ g({
  ...u0,
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
}), d0 = { inheritAttrs: !1 }, j4 = /* @__PURE__ */ g({
  ...d0,
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
}), _0 = { inheritAttrs: !1 }, H4 = /* @__PURE__ */ g({
  ..._0,
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
}), p0 = { inheritAttrs: !1 }, U4 = /* @__PURE__ */ g({
  ...p0,
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
}), v0 = { inheritAttrs: !1 }, W4 = /* @__PURE__ */ g({
  ...v0,
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
}), m0 = { inheritAttrs: !1 }, G4 = /* @__PURE__ */ g({
  ...m0,
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
}), f0 = { inheritAttrs: !1 }, K4 = /* @__PURE__ */ g({
  ...f0,
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
}), x0 = { inheritAttrs: !1 }, Y4 = /* @__PURE__ */ g({
  ...x0,
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
}), h0 = { inheritAttrs: !1 }, J4 = /* @__PURE__ */ g({
  ...h0,
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
}), $0 = { inheritAttrs: !1 }, X4 = /* @__PURE__ */ g({
  ...$0,
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
}), g0 = { inheritAttrs: !1 }, Q4 = /* @__PURE__ */ g({
  ...g0,
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
}), b0 = { inheritAttrs: !1 }, Z4 = /* @__PURE__ */ g({
  ...b0,
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
}), y0 = { inheritAttrs: !1 }, t3 = /* @__PURE__ */ g({
  ...y0,
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
}), k0 = { inheritAttrs: !1 }, e3 = /* @__PURE__ */ g({
  ...k0,
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
}), w0 = { inheritAttrs: !1 }, s3 = /* @__PURE__ */ g({
  ...w0,
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
}), T0 = { inheritAttrs: !1 }, a3 = /* @__PURE__ */ g({
  ...T0,
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
}), C0 = { inheritAttrs: !1 }, l3 = /* @__PURE__ */ g({
  ...C0,
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
}), S0 = { inheritAttrs: !1 }, n3 = /* @__PURE__ */ g({
  ...S0,
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
}), I0 = { inheritAttrs: !1 }, o3 = /* @__PURE__ */ g({
  ...I0,
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
}), V0 = { inheritAttrs: !1 }, r3 = /* @__PURE__ */ g({
  ...V0,
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
}), B0 = { inheritAttrs: !1 }, i3 = /* @__PURE__ */ g({
  ...B0,
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
}), P0 = { inheritAttrs: !1 }, c3 = /* @__PURE__ */ g({
  ...P0,
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
}), A0 = { inheritAttrs: !1 }, u3 = /* @__PURE__ */ g({
  ...A0,
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
}), M0 = { inheritAttrs: !1 }, d3 = /* @__PURE__ */ g({
  ...M0,
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
}), L0 = { inheritAttrs: !1 }, _3 = /* @__PURE__ */ g({
  ...L0,
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
}), z0 = { inheritAttrs: !1 }, p3 = /* @__PURE__ */ g({
  ...z0,
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
}), D0 = { inheritAttrs: !1 }, v3 = /* @__PURE__ */ g({
  ...D0,
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
}), E0 = { inheritAttrs: !1 }, m3 = /* @__PURE__ */ g({
  ...E0,
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
}), R0 = { inheritAttrs: !1 }, f3 = /* @__PURE__ */ g({
  ...R0,
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
}), N0 = { inheritAttrs: !1 }, x3 = /* @__PURE__ */ g({
  ...N0,
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
}), q0 = { inheritAttrs: !1 }, h3 = /* @__PURE__ */ g({
  ...q0,
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
}), F0 = { inheritAttrs: !1 }, $3 = /* @__PURE__ */ g({
  ...F0,
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
}), O0 = { inheritAttrs: !1 }, g3 = /* @__PURE__ */ g({
  ...O0,
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
}), j0 = { inheritAttrs: !1 }, b3 = /* @__PURE__ */ g({
  ...j0,
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
}), H0 = { inheritAttrs: !1 }, y3 = /* @__PURE__ */ g({
  ...H0,
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
}), U0 = { inheritAttrs: !1 }, k3 = /* @__PURE__ */ g({
  ...U0,
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
}), W0 = { inheritAttrs: !1 }, w3 = /* @__PURE__ */ g({
  ...W0,
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
}), G0 = { inheritAttrs: !1 }, T3 = /* @__PURE__ */ g({
  ...G0,
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
}), K0 = { inheritAttrs: !1 }, C3 = /* @__PURE__ */ g({
  ...K0,
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
}), Y0 = { inheritAttrs: !1 }, S3 = /* @__PURE__ */ g({
  ...Y0,
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
}), J0 = { inheritAttrs: !1 }, I3 = /* @__PURE__ */ g({
  ...J0,
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
}), X0 = { inheritAttrs: !1 }, V3 = /* @__PURE__ */ g({
  ...X0,
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
}), Q0 = { inheritAttrs: !1 }, B3 = /* @__PURE__ */ g({
  ...Q0,
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
}), Z0 = { inheritAttrs: !1 }, P3 = /* @__PURE__ */ g({
  ...Z0,
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
}), tk = { inheritAttrs: !1 }, A3 = /* @__PURE__ */ g({
  ...tk,
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
}), ek = { inheritAttrs: !1 }, M3 = /* @__PURE__ */ g({
  ...ek,
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
}), sk = { inheritAttrs: !1 }, L3 = /* @__PURE__ */ g({
  ...sk,
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
}), ak = { inheritAttrs: !1 }, z3 = /* @__PURE__ */ g({
  ...ak,
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
}), lk = { inheritAttrs: !1 }, D3 = /* @__PURE__ */ g({
  ...lk,
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
}), nk = { inheritAttrs: !1 }, E3 = /* @__PURE__ */ g({
  ...nk,
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
}), ok = { inheritAttrs: !1 }, R3 = /* @__PURE__ */ g({
  ...ok,
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
}), rk = { inheritAttrs: !1 }, N3 = /* @__PURE__ */ g({
  ...rk,
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
}), ik = { inheritAttrs: !1 }, q3 = /* @__PURE__ */ g({
  ...ik,
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
}), ck = { inheritAttrs: !1 }, F3 = /* @__PURE__ */ g({
  ...ck,
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
}), uk = { inheritAttrs: !1 }, O3 = /* @__PURE__ */ g({
  ...uk,
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
}), dk = { inheritAttrs: !1 }, j3 = /* @__PURE__ */ g({
  ...dk,
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
}), _k = { inheritAttrs: !1 }, H3 = /* @__PURE__ */ g({
  ..._k,
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
}), pk = { inheritAttrs: !1 }, U3 = /* @__PURE__ */ g({
  ...pk,
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
}), vk = { inheritAttrs: !1 }, W3 = /* @__PURE__ */ g({
  ...vk,
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
}), mk = { inheritAttrs: !1 }, G3 = /* @__PURE__ */ g({
  ...mk,
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
}), fk = { inheritAttrs: !1 }, K3 = /* @__PURE__ */ g({
  ...fk,
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
}), xk = { inheritAttrs: !1 }, Y3 = /* @__PURE__ */ g({
  ...xk,
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
}), hk = { inheritAttrs: !1 }, J3 = /* @__PURE__ */ g({
  ...hk,
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
}), $k = { inheritAttrs: !1 }, X3 = /* @__PURE__ */ g({
  ...$k,
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
}), gk = { inheritAttrs: !1 }, Q3 = /* @__PURE__ */ g({
  ...gk,
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
}), bk = { inheritAttrs: !1 }, Z3 = /* @__PURE__ */ g({
  ...bk,
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
}), yk = { inheritAttrs: !1 }, t8 = /* @__PURE__ */ g({
  ...yk,
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
}), kk = { inheritAttrs: !1 }, e8 = /* @__PURE__ */ g({
  ...kk,
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
}), wk = { inheritAttrs: !1 }, s8 = /* @__PURE__ */ g({
  ...wk,
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
}), Tk = { inheritAttrs: !1 }, a8 = /* @__PURE__ */ g({
  ...Tk,
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
}), Ck = { inheritAttrs: !1 }, l8 = /* @__PURE__ */ g({
  ...Ck,
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
}), Sk = { inheritAttrs: !1 }, n8 = /* @__PURE__ */ g({
  ...Sk,
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
}), Ik = { inheritAttrs: !1 }, o8 = /* @__PURE__ */ g({
  ...Ik,
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
}), Vk = { inheritAttrs: !1 }, r8 = /* @__PURE__ */ g({
  ...Vk,
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
}), Bk = { inheritAttrs: !1 }, i8 = /* @__PURE__ */ g({
  ...Bk,
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
}), Pk = { inheritAttrs: !1 }, c8 = /* @__PURE__ */ g({
  ...Pk,
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
}), Ak = { inheritAttrs: !1 }, u8 = /* @__PURE__ */ g({
  ...Ak,
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
}), Mk = { inheritAttrs: !1 }, d8 = /* @__PURE__ */ g({
  ...Mk,
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
}), Lk = { inheritAttrs: !1 }, _8 = /* @__PURE__ */ g({
  ...Lk,
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
}), zk = { inheritAttrs: !1 }, p8 = /* @__PURE__ */ g({
  ...zk,
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
}), Dk = { inheritAttrs: !1 }, v8 = /* @__PURE__ */ g({
  ...Dk,
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
}), Ek = { inheritAttrs: !1 }, m8 = /* @__PURE__ */ g({
  ...Ek,
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
}), Rk = { inheritAttrs: !1 }, f8 = /* @__PURE__ */ g({
  ...Rk,
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
}), Nk = { inheritAttrs: !1 }, x8 = /* @__PURE__ */ g({
  ...Nk,
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
}), qk = { inheritAttrs: !1 }, h8 = /* @__PURE__ */ g({
  ...qk,
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
}), Fk = { inheritAttrs: !1 }, $8 = /* @__PURE__ */ g({
  ...Fk,
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
  jT as $,
  io as A,
  $T as B,
  gT as C,
  bT as D,
  yT as E,
  kT as F,
  wT as G,
  sr as H,
  TT as I,
  CT as J,
  ST as K,
  IT as L,
  VT as M,
  BT as N,
  PT as O,
  AT as P,
  MT as Q,
  LT as R,
  zT as S,
  Ww as T,
  DT as U,
  ET as V,
  RT as W,
  NT as X,
  qT as Y,
  FT as Z,
  OT as _,
  Gw as a,
  XC as a$,
  HT as a0,
  UT as a1,
  WT as a2,
  GT as a3,
  KT as a4,
  iu as a5,
  YT as a6,
  ut as a7,
  JT as a8,
  XT as a9,
  wC as aA,
  TC as aB,
  CC as aC,
  SC as aD,
  IC as aE,
  VC as aF,
  BC as aG,
  PC as aH,
  AC as aI,
  MC as aJ,
  LC as aK,
  zC as aL,
  DC as aM,
  EC as aN,
  RC as aO,
  NC as aP,
  qC as aQ,
  FC as aR,
  OC as aS,
  jC as aT,
  HC as aU,
  UC as aV,
  WC as aW,
  GC as aX,
  KC as aY,
  YC as aZ,
  JC as a_,
  QT as aa,
  ZT as ab,
  tC as ac,
  eC as ad,
  sC as ae,
  aC as af,
  lC as ag,
  nC as ah,
  oC as ai,
  rC as aj,
  iC as ak,
  cC as al,
  uC as am,
  dC as an,
  _C as ao,
  pC as ap,
  vC as aq,
  mC as ar,
  fC as as,
  xC as at,
  hC as au,
  $C as av,
  gC as aw,
  bC as ax,
  yC as ay,
  kC as az,
  Kw as b,
  r3 as b$,
  QC as b0,
  ZC as b1,
  t4 as b2,
  e4 as b3,
  s4 as b4,
  a4 as b5,
  l4 as b6,
  n4 as b7,
  o4 as b8,
  r4 as b9,
  L4 as bA,
  z4 as bB,
  D4 as bC,
  E4 as bD,
  R4 as bE,
  N4 as bF,
  q4 as bG,
  F4 as bH,
  O4 as bI,
  j4 as bJ,
  H4 as bK,
  U4 as bL,
  W4 as bM,
  G4 as bN,
  K4 as bO,
  Y4 as bP,
  J4 as bQ,
  X4 as bR,
  Q4 as bS,
  Z4 as bT,
  t3 as bU,
  e3 as bV,
  s3 as bW,
  a3 as bX,
  l3 as bY,
  n3 as bZ,
  o3 as b_,
  i4 as ba,
  c4 as bb,
  u4 as bc,
  d4 as bd,
  _4 as be,
  p4 as bf,
  v4 as bg,
  m4 as bh,
  f4 as bi,
  x4 as bj,
  h4 as bk,
  $4 as bl,
  g4 as bm,
  b4 as bn,
  y4 as bo,
  k4 as bp,
  w4 as bq,
  T4 as br,
  C4 as bs,
  S4 as bt,
  I4 as bu,
  V4 as bv,
  B4 as bw,
  P4 as bx,
  A4 as by,
  M4 as bz,
  Yw as c,
  x8 as c$,
  i3 as c0,
  c3 as c1,
  u3 as c2,
  d3 as c3,
  _3 as c4,
  p3 as c5,
  v3 as c6,
  m3 as c7,
  f3 as c8,
  x3 as c9,
  H3 as cA,
  U3 as cB,
  W3 as cC,
  G3 as cD,
  K3 as cE,
  Y3 as cF,
  J3 as cG,
  X3 as cH,
  Q3 as cI,
  Z3 as cJ,
  t8 as cK,
  e8 as cL,
  s8 as cM,
  a8 as cN,
  l8 as cO,
  n8 as cP,
  o8 as cQ,
  r8 as cR,
  i8 as cS,
  c8 as cT,
  u8 as cU,
  d8 as cV,
  _8 as cW,
  p8 as cX,
  v8 as cY,
  m8 as cZ,
  f8 as c_,
  h3 as ca,
  $3 as cb,
  g3 as cc,
  b3 as cd,
  y3 as ce,
  k3 as cf,
  w3 as cg,
  T3 as ch,
  C3 as ci,
  S3 as cj,
  I3 as ck,
  V3 as cl,
  B3 as cm,
  P3 as cn,
  A3 as co,
  M3 as cp,
  L3 as cq,
  z3 as cr,
  D3 as cs,
  E3 as ct,
  R3 as cu,
  N3 as cv,
  q3 as cw,
  F3 as cx,
  O3 as cy,
  j3 as cz,
  Jw as d,
  h8 as d0,
  $8 as d1,
  Xw as e,
  Qw as f,
  Zw as g,
  tT as h,
  eT as i,
  sT as j,
  aT as k,
  lT as l,
  nT as m,
  oT as n,
  rT as o,
  iT as p,
  cT as q,
  uT as r,
  dT as s,
  _T as t,
  pT as u,
  vT as v,
  mT as w,
  fT as x,
  xT as y,
  hT as z
};
