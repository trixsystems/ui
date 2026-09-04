import { defineComponent as g, createElementBlock as o, openBlock as s, normalizeClass as y, createElementVNode as e, resolveDirective as yt, withDirectives as Y, createBlock as L, unref as P, createCommentVNode as h, toDisplayString as v, renderSlot as I, Transition as j, withCtx as B, createVNode as O, ref as z, computed as S, createTextVNode as N, withModifiers as H, normalizeStyle as R, onMounted as W, Fragment as V, renderList as b, resolveComponent as kt, reactive as wt, withKeys as at, watch as Z, onBeforeUnmount as G, onUnmounted as ft, nextTick as nt, resolveDynamicComponent as Tt, useTemplateRef as ot, mergeProps as Ct, vModelText as J, useCssVars as St, Teleport as et, useAttrs as tt, normalizeProps as w, guardReactiveProps as T, createSlots as D } from "vue";
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
import Mt from "primevue/autocomplete";
import At from "primevue/datepicker";
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
import ue from "primevue/dataview";
import de from "primevue/orderlist";
import _e from "primevue/organizationchart";
import pe from "primevue/picklist";
import ve from "primevue/timeline";
import me from "primevue/tree";
import fe from "primevue/treetable";
import xe from "primevue/virtualscroller";
import he from "primevue/accordion";
import $e from "primevue/accordioncontent";
import ge from "primevue/accordionheader";
import be from "primevue/accordionpanel";
import ye from "primevue/deferredcontent";
import ke from "primevue/divider";
import we from "primevue/fieldset";
import Te from "primevue/panel";
import Ce from "primevue/scrollpanel";
import Se from "primevue/splitter";
import Ie from "primevue/splitterpanel";
import Ve from "primevue/stepper";
import Be from "primevue/step";
import Pe from "primevue/stepitem";
import Me from "primevue/steplist";
import Ae from "primevue/steppanel";
import Le from "primevue/steppanels";
import ze from "primevue/tabs";
import De from "primevue/tab";
import Ee from "primevue/tablist";
import Re from "primevue/tabpanel";
import Ne from "primevue/tabpanels";
import qe from "primevue/toolbar";
import Fe from "primevue/dialog";
import Oe from "primevue/confirmdialog";
import je from "primevue/confirmpopup";
import He from "primevue/drawer";
import Ue from "primevue/dynamicdialog";
import We from "primevue/popover";
import Ge from "primevue/breadcrumb";
import Ke from "primevue/dock";
import Ye from "primevue/megamenu";
import Je from "primevue/menu";
import Xe from "primevue/menubar";
import Qe from "primevue/panelmenu";
import Ze from "primevue/steps";
import ts from "primevue/tabmenu";
import es from "primevue/tieredmenu";
import ss from "primevue/toast";
import as from "primevue/inlinemessage";
import ls from "primevue/carousel";
import ns from "primevue/galleria";
import os from "primevue/image";
import rs from "primevue/imagecompare";
import is from "primevue/fileupload";
import cs from "primevue/chart";
import us from "primevue/avatargroup";
import ds from "primevue/badge";
import _s from "primevue/blockui";
import ps from "primevue/chip";
import vs from "primevue/inplace";
import ms from "primevue/metergroup";
import fs from "primevue/overlaybadge";
import xs from "primevue/progressbar";
import hs from "primevue/scrolltop";
import $s from "primevue/skeleton";
import gs from "primevue/terminal";
const bs = /* @__PURE__ */ g({
  __name: "TrxLogo",
  props: {
    size: {},
    variant: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", {
      class: y(["trx-logo", [
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
}), M = (t, a) => {
  const r = t.__vccOpts || t;
  for (const [i, l] of a)
    r[i] = l;
  return r;
}, Ew = /* @__PURE__ */ M(bs, [["__scopeId", "data-v-d5448055"]]), ys = /* @__PURE__ */ g({
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
}), Rw = /* @__PURE__ */ M(ys, [["__scopeId", "data-v-f12c0272"]]), ks = { class: "trx-page-header" }, ws = { class: "trx-page-header__content" }, Ts = { class: "trx-page-header__title" }, Cs = {
  key: 0,
  class: "trx-page-header__subtitle"
}, Ss = { class: "trx-page-header__actions" }, Is = /* @__PURE__ */ g({
  __name: "TrxPageHeader",
  props: {
    title: {},
    subtitle: {},
    icon: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", ks, [
      e("div", ws, [
        t.icon ? (s(), o("i", {
          key: 0,
          class: y([t.icon, "trx-page-header__icon"])
        }, null, 2)) : h("", !0),
        e("div", null, [
          e("h1", Ts, v(t.title), 1),
          t.subtitle ? (s(), o("p", Cs, v(t.subtitle), 1)) : h("", !0)
        ])
      ]),
      e("div", Ss, [
        I(a.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), Nw = /* @__PURE__ */ M(Is, [["__scopeId", "data-v-def36de6"]]), Vs = /* @__PURE__ */ g({
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
}), qw = /* @__PURE__ */ M(Vs, [["__scopeId", "data-v-c36955e9"]]), Bs = {
  key: 0,
  class: "trx-loading-overlay"
}, Ps = { class: "trx-loading-overlay__content" }, Ms = {
  key: 0,
  class: "trx-loading-overlay__message"
}, As = /* @__PURE__ */ g({
  __name: "TrxLoadingOverlay",
  props: {
    visible: { type: Boolean },
    message: {}
  },
  setup(t) {
    return (a, r) => (s(), L(j, { name: "fade" }, {
      default: B(() => [
        t.visible ? (s(), o("div", Bs, [
          e("div", Ps, [
            O(P(ht), {
              style: { width: "50px", height: "50px" },
              strokeWidth: "4"
            }),
            t.message ? (s(), o("p", Ms, v(t.message), 1)) : h("", !0)
          ])
        ])) : h("", !0)
      ]),
      _: 1
    }));
  }
}), Fw = /* @__PURE__ */ M(As, [["__scopeId", "data-v-4eb5da13"]]), Ls = { class: "trx-empty-state" }, zs = { class: "trx-empty-state__title" }, Ds = {
  key: 0,
  class: "trx-empty-state__description"
}, Es = { class: "trx-empty-state__actions" }, Rs = /* @__PURE__ */ g({
  __name: "TrxEmptyState",
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Ls, [
      e("i", {
        class: y([t.icon || "pi pi-inbox", "trx-empty-state__icon"])
      }, null, 2),
      e("h3", zs, v(t.title), 1),
      t.description ? (s(), o("p", Ds, v(t.description), 1)) : h("", !0),
      e("div", Es, [
        I(a.$slots, "actions", {}, void 0, !0)
      ])
    ]));
  }
}), Ow = /* @__PURE__ */ M(Rs, [["__scopeId", "data-v-49c3d947"]]), Ns = { class: "trx-login" }, qs = { class: "trx-login__container" }, Fs = { class: "trx-login__header" }, Os = { class: "trx-login__logo" }, js = {
  key: 0,
  class: "trx-login__logo-app"
}, Hs = { class: "trx-login__title" }, Us = { class: "trx-login__subtitle" }, Ws = { class: "trx-login__field" }, Gs = { class: "trx-login__field" }, Ks = { class: "trx-login__forgot" }, Ys = {
  key: 1,
  class: "trx-login__actions"
}, Js = { class: "trx-login__footer" }, Xs = { class: "trx-login__copyright" }, Qs = /* @__PURE__ */ g({
  __name: "TrxLoginForm",
  props: {
    appName: {},
    appTitle: {},
    loading: { type: Boolean },
    error: {}
  },
  emits: ["submit"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(""), n = z(""), c = S(() => l.value.trim() !== "" && n.value.trim() !== ""), u = () => {
      c.value && !r.loading && i("submit", {
        email: l.value.trim(),
        password: n.value
      });
    };
    return (_, d) => (s(), o("div", Ns, [
      e("div", qs, [
        e("div", Fs, [
          e("div", Os, [
            d[2] || (d[2] = e("span", { class: "trx-login__logo-text" }, "TRX", -1)),
            t.appName ? (s(), o("span", js, v(t.appName), 1)) : h("", !0)
          ]),
          e("h1", Hs, v(t.appTitle || "Entrar"), 1),
          e("p", Us, [
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
          e("div", Ws, [
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
          e("div", Gs, [
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
          e("div", Ks, [
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
          _.$slots.actions ? (s(), o("div", Ys, [
            I(_.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 32),
        e("div", Js, [
          I(_.$slots, "footer", {}, () => [
            e("p", Xs, " © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " TRX Systems ", 1)
          ], !0)
        ])
      ])
    ]));
  }
}), jw = /* @__PURE__ */ M(Qs, [["__scopeId", "data-v-2ec7ed88"]]), Zs = {
  key: 0,
  class: "trx-card-header"
}, ta = { class: "header-content" }, ea = {
  key: 0,
  class: "card-icon"
}, sa = {
  key: 1,
  class: "header-text"
}, aa = {
  key: 0,
  class: "card-title"
}, la = {
  key: 1,
  class: "card-subtitle"
}, na = { class: "trx-card-content" }, oa = {
  key: 0,
  class: "loading-overlay"
}, ra = {
  key: 1,
  class: "trx-card-footer"
}, ia = /* @__PURE__ */ g({
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
      class: y(["trx-card", { hoverable: t.hoverable, loading: t.loading }])
    }, [
      t.title || t.icon || a.$slots.header ? (s(), o("div", Zs, [
        e("div", ta, [
          t.icon ? (s(), o("div", ea, [
            e("i", {
              class: y(t.icon)
            }, null, 2)
          ])) : h("", !0),
          t.title || t.subtitle ? (s(), o("div", sa, [
            t.title ? (s(), o("h3", aa, v(t.title), 1)) : h("", !0),
            t.subtitle ? (s(), o("p", la, v(t.subtitle), 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        I(a.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      e("div", na, [
        t.loading ? (s(), o("div", oa, [...r[0] || (r[0] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : h("", !0),
        I(a.$slots, "default", {}, void 0, !0)
      ]),
      a.$slots.footer ? (s(), o("div", ra, [
        I(a.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ], 2));
  }
}), Hw = /* @__PURE__ */ M(ia, [["__scopeId", "data-v-49b3499e"]]), ca = {
  key: 0,
  class: "stat-icon"
}, ua = { class: "stat-content" }, da = { class: "stat-value" }, _a = { class: "stat-title" }, pa = /* @__PURE__ */ g({
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
      class: y(["trx-stat-card", `color-${t.color || "primary"}`])
    }, [
      t.icon ? (s(), o("div", ca, [
        e("i", {
          class: y(t.icon)
        }, null, 2)
      ])) : h("", !0),
      e("div", ua, [
        e("div", da, v(t.value), 1),
        e("div", _a, v(t.title), 1),
        t.trend && t.trendValue ? (s(), o("div", {
          key: 0,
          class: y(["stat-trend", `trend-${t.trend}`])
        }, [
          e("i", {
            class: y(t.trend === "up" ? "pi pi-arrow-up" : t.trend === "down" ? "pi pi-arrow-down" : "pi pi-minus")
          }, null, 2),
          e("span", null, v(t.trendValue), 1)
        ], 2)) : h("", !0)
      ])
    ], 2));
  }
}), Uw = /* @__PURE__ */ M(pa, [["__scopeId", "data-v-5f985ae8"]]), va = { class: "trx-datatable" }, ma = {
  key: 0,
  class: "table-header"
}, fa = { class: "p-input-icon-left" }, xa = { class: "empty-state" }, ha = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z({
      global: { value: null, matchMode: "contains" }
    }), n = S(() => r.rows || 10);
    return (c, u) => (s(), o("div", va, [
      t.globalFilter ? (s(), o("div", ma, [
        e("span", fa, [
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
          e("div", xa, [
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
}), Ww = /* @__PURE__ */ M(ha, [["__scopeId", "data-v-f9d94f79"]]), $a = { class: "trx-status" }, ga = {
  key: 0,
  class: "status-label"
}, ba = /* @__PURE__ */ g({
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
    return (r, i) => (s(), o("div", $a, [
      e("span", {
        class: y(["status-dot", { pulse: t.status === "connecting" }]),
        style: R({ backgroundColor: a[t.status].color })
      }, null, 6),
      t.showLabel !== !1 ? (s(), o("span", ga, v(t.label || a[t.status].label), 1)) : h("", !0)
    ]));
  }
}), Gw = /* @__PURE__ */ M(ba, [["__scopeId", "data-v-0d5250d8"]]), ya = { class: "trx-layout__sidebar-header" }, ka = { class: "trx-layout__logo-text" }, wa = {
  key: 0,
  class: "trx-layout__logo-trx"
}, Ta = { class: "trx-layout__nav" }, Ca = { key: 0 }, Sa = ["onClick", "title"], Ia = { key: 0 }, Va = {
  key: 0,
  class: "trx-layout__section-header"
}, Ba = ["onClick", "title"], Pa = { key: 0 }, Ma = { class: "trx-layout__sidebar-footer" }, Aa = ["href"], La = { class: "trx-layout__topbar" }, za = { class: "trx-layout__topbar-left" }, Da = { class: "trx-layout__topbar-right" }, Ea = { class: "trx-layout__controls" }, Ra = {
  key: 1,
  class: "trx-layout__divider"
}, Na = { class: "trx-layout__user" }, qa = { class: "trx-layout__user-name" }, Fa = {
  id: "trx-main-content",
  class: "trx-layout__content",
  tabindex: "-1"
}, Oa = /* @__PURE__ */ g({
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
    const r = t, i = a, l = Bt(), n = Pt(), c = z(!1), u = z(!1), _ = S(() => r.userName ? r.userName.split(" ").map(($) => $[0]).join("").toUpperCase().slice(0, 2) : "U"), d = S(() => ({
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
    async function k() {
      r.onLogout && await r.onLogout(), i("logout");
    }
    return ($, C) => (s(), o("div", {
      class: y(["trx-layout", { dark: u.value }])
    }, [
      C[4] || (C[4] = e("a", {
        href: "#trx-main-content",
        class: "trx-layout__skip-link"
      }, "Pular para o conteúdo", -1)),
      e("aside", {
        class: y(["trx-layout__sidebar", { "trx-layout__sidebar--collapsed": c.value }])
      }, [
        e("div", ya, [
          c.value ? (s(), o("div", {
            key: 1,
            class: "trx-layout__logo-mini",
            onClick: C[1] || (C[1] = (A) => f("/")),
            style: { cursor: "pointer" }
          }, [
            e("i", {
              class: y(t.appIcon)
            }, null, 2)
          ])) : (s(), o("div", {
            key: 0,
            class: "trx-layout__logo",
            onClick: C[0] || (C[0] = (A) => f("/")),
            style: { cursor: "pointer" }
          }, [
            e("i", {
              class: y(t.appIcon)
            }, null, 2),
            e("span", ka, [
              t.brandPrefix ? (s(), o("span", wa, v(t.brandPrefix), 1)) : h("", !0),
              N(v(t.brandPrefix ? " " : "") + v(t.appName), 1)
            ])
          ]))
        ]),
        e("nav", Ta, [
          t.menuItems && t.menuItems.length ? (s(), o("ul", Ca, [
            (s(!0), o(V, null, b(t.menuItems, (A) => (s(), o("li", {
              key: A.path,
              class: y({ active: p(A.path) }),
              onClick: (E) => f(A.path),
              title: c.value ? A.label : ""
            }, [
              e("i", {
                class: y(A.icon)
              }, null, 2),
              c.value ? h("", !0) : (s(), o("span", Ia, v(A.label), 1))
            ], 10, Sa))), 128))
          ])) : h("", !0),
          t.menuSections && t.menuSections.length ? (s(!0), o(V, { key: 1 }, b(t.menuSections, (A) => (s(), o("div", {
            key: A.key,
            class: "trx-layout__nav-section"
          }, [
            !c.value && A.items.length > 0 ? (s(), o("div", Va, v(A.label), 1)) : h("", !0),
            e("ul", null, [
              (s(!0), o(V, null, b(A.items, (E) => (s(), o("li", {
                key: E.path,
                class: y({ active: p(E.path) }),
                onClick: (F) => f(E.path),
                title: c.value ? E.label : ""
              }, [
                e("i", {
                  class: y(E.icon)
                }, null, 2),
                c.value ? h("", !0) : (s(), o("span", Pa, v(E.label), 1))
              ], 10, Ba))), 128))
            ])
          ]))), 128)) : h("", !0)
        ]),
        e("div", Ma, [
          e("button", {
            class: "trx-layout__toggle-btn",
            onClick: x
          }, [
            e("i", {
              class: y(["pi", c.value ? "pi-angle-right" : "pi-angle-left"])
            }, null, 2)
          ]),
          !c.value && t.footerText ? (s(), o("a", {
            key: 0,
            href: t.footerUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "trx-layout__footer-link"
          }, v(t.footerText), 9, Aa)) : h("", !0)
        ])
      ], 2),
      e("div", {
        class: y(["trx-layout__main", { "trx-layout__main--collapsed": c.value }])
      }, [
        e("header", La, [
          e("div", za, [
            O(P(st), {
              icon: "pi pi-bars",
              text: "",
              rounded: "",
              onClick: x,
              class: "trx-layout__mobile-menu"
            }),
            I($.$slots, "topbar-left", {}, void 0, !0)
          ]),
          e("div", Da, [
            e("div", Ea, [
              t.showStatus ? (s(), o("div", {
                key: 0,
                class: y(["trx-layout__status", d.value])
              }, [
                C[2] || (C[2] = e("span", { class: "trx-layout__status-dot" }, null, -1)),
                N(" " + v(t.statusLabel), 1)
              ], 2)) : h("", !0),
              t.showStatus ? (s(), o("span", Ra)) : h("", !0),
              O(P(st), {
                icon: u.value ? "pi pi-sun" : "pi pi-moon",
                onClick: m,
                rounded: "",
                text: "",
                size: "small",
                title: u.value ? "Modo Claro" : "Modo Escuro"
              }, null, 8, ["icon", "title"]),
              C[3] || (C[3] = e("span", { class: "trx-layout__divider" }, null, -1)),
              e("div", Na, [
                O(P($t), {
                  label: _.value,
                  size: "small",
                  shape: "circle"
                }, null, 8, ["label"]),
                e("span", qa, v(t.userName || "Usuario"), 1)
              ]),
              O(P(st), {
                icon: "pi pi-sign-out",
                rounded: "",
                text: "",
                size: "small",
                onClick: k,
                title: "Sair"
              })
            ])
          ])
        ]),
        e("main", Fa, [
          I($.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
}), Kw = /* @__PURE__ */ M(Oa, [["__scopeId", "data-v-90bad350"]]), ja = { class: "trx-not-found" }, Ha = { class: "trx-not-found__content" }, Ua = { class: "trx-not-found__code" }, Wa = { class: "trx-not-found__title" }, Ga = { class: "trx-not-found__message" }, Ka = /* @__PURE__ */ g({
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
      return s(), o("div", ja, [
        e("div", Ha, [
          e("div", Ua, v(t.code), 1),
          e("h1", Wa, v(t.title), 1),
          e("p", Ga, v(t.message), 1),
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
}), Yw = /* @__PURE__ */ M(Ka, [["__scopeId", "data-v-603fc352"]]), Ya = { class: "trx-login-page" }, Ja = { class: "trx-login-page__settings" }, Xa = ["disabled"], Qa = ["disabled"], Za = ["title"], tl = { class: "trx-login-page__lang-label" }, el = { class: "trx-login-page__container" }, sl = { class: "trx-login-page__panel" }, al = { class: "trx-login-page__card" }, ll = { class: "trx-login-page__header" }, nl = { class: "trx-login-page__icon" }, ol = { class: "trx-login-page__brand" }, rl = {
  key: 0,
  class: "trx-login-page__brand-trx"
}, il = {
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
}, vl = {
  key: 0,
  class: "trx-login-page__options"
}, ml = {
  key: 0,
  class: "trx-login-page__remember"
}, fl = {
  key: 0,
  class: "pi pi-sign-in"
}, xl = {
  key: 1,
  class: "trx-login-page__error"
}, hl = { class: "trx-login-page__footer" }, $l = /* @__PURE__ */ g({
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
    }), l = z(!1), n = z(!1), c = z(!1), u = z(localStorage.getItem("locale") || "pt-BR"), _ = S(() => u.value === "pt-BR" ? "PT" : "EN"), d = z(16), p = S(() => /.+@.+\..+/.test(i.email)), m = S(() => n.value && (!i.email || !p.value)), x = S(() => n.value && !i.password), f = () => {
      c.value = !c.value, c.value ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, k = () => {
      const F = u.value === "pt-BR" ? "en" : "pt-BR";
      u.value = F, localStorage.setItem("locale", F);
    }, $ = () => {
      d.value < 20 && (d.value += 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, C = () => {
      d.value > 12 && (d.value -= 1, document.documentElement.style.fontSize = `${d.value}px`, localStorage.setItem("fontSize", d.value.toString()));
    }, A = () => {
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
    }), (F, q) => (s(), o("div", Ya, [
      e("div", Ja, [
        t.showFontControls ? (s(), o(V, { key: 0 }, [
          e("button", {
            onClick: C,
            title: "Diminuir fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value <= 12
          }, [...q[3] || (q[3] = [
            e("i", { class: "pi pi-minus" }, null, -1)
          ])], 8, Xa),
          e("button", {
            onClick: $,
            title: "Aumentar fonte",
            class: "trx-login-page__settings-btn",
            disabled: d.value >= 20
          }, [...q[4] || (q[4] = [
            e("i", { class: "pi pi-plus" }, null, -1)
          ])], 8, Qa),
          q[5] || (q[5] = e("div", { class: "trx-login-page__settings-divider" }, null, -1))
        ], 64)) : h("", !0),
        e("button", {
          onClick: f,
          title: c.value ? "Modo claro" : "Modo escuro",
          class: "trx-login-page__settings-btn"
        }, [
          e("i", {
            class: y(c.value ? "pi pi-sun" : "pi pi-moon")
          }, null, 2)
        ], 8, Za),
        t.showLanguageToggle ? (s(), o(V, { key: 1 }, [
          q[7] || (q[7] = e("div", { class: "trx-login-page__settings-divider" }, null, -1)),
          e("button", {
            onClick: k,
            title: "Idioma",
            class: "trx-login-page__settings-btn trx-login-page__settings-btn--lang"
          }, [
            q[6] || (q[6] = e("i", { class: "pi pi-globe" }, null, -1)),
            e("span", tl, v(_.value), 1)
          ])
        ], 64)) : h("", !0)
      ]),
      q[15] || (q[15] = e("div", { class: "trx-login-page__background" }, [
        e("div", { class: "trx-login-page__orb trx-login-page__orb--1" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--2" }),
        e("div", { class: "trx-login-page__orb trx-login-page__orb--3" })
      ], -1)),
      e("div", el, [
        e("div", sl, [
          e("div", al, [
            e("div", ll, [
              e("div", nl, [
                I(F.$slots, "icon", {}, () => [
                  q[8] || (q[8] = e("i", {
                    class: "pi pi-box",
                    style: { "font-size": "2.5rem", color: "white" }
                  }, null, -1))
                ], !0)
              ]),
              e("h1", ol, [
                t.brandPrefix ? (s(), o("span", rl, v(t.brandPrefix), 1)) : h("", !0),
                N(v(t.brandPrefix ? " " : "") + v(t.appName), 1)
              ]),
              t.appTagline ? (s(), o("p", il, v(t.appTagline), 1)) : h("", !0),
              q[9] || (q[9] = e("h2", { class: "trx-login-page__title" }, "Acesse sua conta", -1)),
              q[10] || (q[10] = e("p", { class: "trx-login-page__subtitle" }, "Preencha seus dados para acessar", -1))
            ]),
            e("form", {
              class: "trx-login-page__form",
              onSubmit: H(A, ["prevent"])
            }, [
              e("div", cl, [
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
                  class: y(["trx-login-page__input", { "p-invalid": m.value }])
                }, null, 8, ["modelValue", "class"]),
                n.value && !i.email ? (s(), o("small", ul, " Campo obrigatorio ")) : n.value && i.email && !p.value ? (s(), o("small", dl, " Email invalido ")) : h("", !0)
              ]),
              e("div", _l, [
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
                  class: y(["trx-login-page__input", { "p-invalid": x.value }]),
                  inputClass: "w-full"
                }, null, 8, ["modelValue", "class"]),
                x.value ? (s(), o("small", pl, " Campo obrigatorio ")) : h("", !0)
              ]),
              t.showRememberMe || t.showForgotPassword ? (s(), o("div", vl, [
                t.showRememberMe ? (s(), o("div", ml, [
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
                  t.loading ? h("", !0) : (s(), o("i", fl)),
                  e("span", null, v(t.loading ? "Entrando..." : "Entrar"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              t.error ? (s(), o("div", xl, [
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
            e("div", hl, [
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
}), Jw = /* @__PURE__ */ M($l, [["__scopeId", "data-v-b5b9c53f"]]), gl = ["aria-label"], bl = { class: "trx-banner__content" }, yl = { class: "trx-banner__body" }, kl = {
  key: 0,
  class: "trx-banner__title"
}, wl = {
  key: 1,
  class: "trx-banner__message"
}, Tl = /* @__PURE__ */ g({
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
      class: y([
        "trx-banner",
        `trx-banner--${t.type}`,
        { "trx-banner--sticky": t.sticky }
      ]),
      role: "banner",
      "aria-label": t.title
    }, [
      e("div", bl, [
        e("i", {
          class: y(["trx-banner__icon", P(n)]),
          "aria-hidden": "true"
        }, null, 2),
        e("div", yl, [
          t.title ? (s(), o("strong", kl, v(t.title), 1)) : h("", !0),
          c.$slots.default ? (s(), o("span", wl, [
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
    ], 10, gl));
  }
}), Xw = /* @__PURE__ */ M(Tl, [["__scopeId", "data-v-3e631643"]]), Cl = {
  key: 0,
  class: "trx-copy__value"
}, Sl = ["aria-label", "title"], Il = { key: 0 }, Vl = { key: 1 }, Bl = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(!1);
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
      class: y(["trx-copy", `trx-copy--${t.size}`])
    }, [
      t.showValue ? (s(), o("span", Cl, v(t.value), 1)) : h("", !0),
      e("button", {
        type: "button",
        class: y(["trx-copy__btn", { "trx-copy__btn--copied": l.value }]),
        "aria-label": l.value ? "Copiado!" : `Copiar ${t.label ?? t.value}`,
        title: l.value ? "Copiado!" : "Copiar",
        onClick: n
      }, [
        e("i", {
          class: y(l.value ? "pi pi-check" : "pi pi-copy"),
          "aria-hidden": "true"
        }, null, 2),
        t.label && !t.showValue ? (s(), o("span", Il, v(l.value ? "Copiado!" : t.label), 1)) : !t.label && !t.showValue ? (s(), o("span", Vl, v(l.value ? "Copiado!" : "Copiar"), 1)) : h("", !0)
      ], 10, Sl)
    ], 2));
  }
}), Qw = /* @__PURE__ */ M(Bl, [["__scopeId", "data-v-e4ae9d59"]]), Pl = {
  key: 0,
  class: "trx-agent-badge"
}, Ml = { class: "trx-agent-label" }, Al = ["aria-expanded", "aria-label"], Ll = { class: "trx-agent-label" }, zl = {
  key: 0,
  class: "trx-agent-menu",
  role: "listbox",
  "aria-label": "Selecionar status"
}, Dl = ["aria-selected", "onClick"], El = /* @__PURE__ */ g({
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
    ], i = t, l = a, n = z(!1), c = S(() => i.options ?? r), u = S(() => c.value.find((d) => d.value === i.modelValue) ?? r[3]);
    function _(d) {
      n.value = !1, l("update:modelValue", d.value), l("change", d.value);
    }
    return (d, p) => t.readonly || t.compact ? (s(), o("div", Pl, [
      e("span", {
        class: "trx-agent-dot",
        style: R({ background: u.value.color })
      }, null, 4),
      e("span", Ml, v(u.value.label), 1)
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
        e("span", Ll, v(u.value.label), 1),
        e("i", {
          class: y(["pi pi-chevron-down trx-agent-chevron", { "trx-agent-chevron--open": n.value }]),
          "aria-hidden": "true"
        }, null, 2)
      ], 8, Al),
      O(j, { name: "trx-agent" }, {
        default: B(() => [
          n.value ? (s(), o("ul", zl, [
            (s(!0), o(V, null, b(c.value, (m) => (s(), o("li", {
              key: m.value,
              role: "option",
              "aria-selected": m.value === t.modelValue,
              class: y(["trx-agent-option", { "trx-agent-option--active": m.value === t.modelValue }]),
              onClick: (x) => _(m)
            }, [
              e("span", {
                class: "trx-agent-dot",
                style: R({ background: m.color })
              }, null, 4),
              e("i", {
                class: y(m.icon),
                style: R({ color: m.color }),
                "aria-hidden": "true"
              }, null, 6),
              e("span", null, v(m.label), 1)
            ], 10, Dl))), 128))
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
}), Zw = /* @__PURE__ */ M(El, [["__scopeId", "data-v-9a90548c"]]), Rl = {
  class: "trx-player",
  role: "region",
  "aria-label": "Player de áudio"
}, Nl = ["src"], ql = {
  key: 0,
  class: "trx-player__error"
}, Fl = ["aria-label", "disabled"], Ol = { class: "trx-player__timeline" }, jl = { class: "trx-player__time" }, Hl = ["aria-valuemax", "aria-valuenow", "aria-label"], Ul = { class: "trx-player__track" }, Wl = { class: "trx-player__time trx-player__time--total" }, Gl = { class: "trx-player__speed-wrap" }, Kl = ["aria-label"], Yl = {
  key: 0,
  class: "trx-player__speed-menu",
  role: "listbox"
}, Jl = ["aria-selected", "onClick"], Xl = /* @__PURE__ */ g({
  __name: "TrxAudioPlayer",
  props: {
    src: {},
    duration: {},
    downloadable: { type: Boolean, default: !0 },
    filename: {},
    speeds: { default: () => [0.5, 0.75, 1, 1.25, 1.5, 2] }
  },
  setup(t) {
    const a = t, r = z(null), i = z(!1), l = z(0), n = z(a.duration ?? 0), c = z(1), u = z(!1), _ = z(!1), d = z(!1), p = S(
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
    function k(U) {
      c.value = U, d.value = !1, r.value && (r.value.playbackRate = U);
    }
    function $() {
      i.value = !0;
    }
    function C() {
      i.value = !1;
    }
    function A() {
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
    }), (U, X) => (s(), o("div", Rl, [
      e("audio", {
        ref_key: "audioRef",
        ref: r,
        src: t.src,
        preload: "metadata",
        onPlay: $,
        onPause: C,
        onEnded: A,
        onTimeupdate: E,
        onLoadedmetadata: F,
        onError: q,
        onWaiting: K,
        onCanplay: dt
      }, null, 40, Nl),
      _.value ? (s(), o("div", ql, [...X[2] || (X[2] = [
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
            class: y(u.value ? "pi pi-spin pi-spinner" : i.value ? "pi pi-pause" : "pi pi-play"),
            "aria-hidden": "true"
          }, null, 2)
        ], 8, Fl),
        e("div", Ol, [
          e("span", jl, v(m(l.value)), 1),
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
            e("div", Ul, [
              e("div", {
                class: "trx-player__fill",
                style: R({ width: `${p.value}%` })
              }, null, 4),
              e("div", {
                class: "trx-player__thumb",
                style: R({ left: `${p.value}%` })
              }, null, 4)
            ])
          ], 8, Hl),
          e("span", Wl, v(m(n.value)), 1)
        ]),
        e("div", Gl, [
          e("button", {
            type: "button",
            class: "trx-player__speed-btn",
            "aria-label": `Velocidade: ${c.value}x`,
            onClick: X[0] || (X[0] = (Q) => d.value = !d.value)
          }, v(c.value) + "x ", 9, Kl),
          d.value ? (s(), o("ul", Yl, [
            (s(!0), o(V, null, b(t.speeds, (Q) => (s(), o("li", {
              key: Q,
              class: y(["trx-player__speed-opt", { "trx-player__speed-opt--active": Q === c.value }]),
              role: "option",
              "aria-selected": Q === c.value,
              onClick: (lt) => k(Q)
            }, v(Q) + "x ", 11, Jl))), 128))
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
}), tT = /* @__PURE__ */ M(Xl, [["__scopeId", "data-v-2ae62dee"]]), Ql = { class: "trx-alert__body" }, Zl = {
  key: 0,
  class: "trx-alert__title"
}, tn = { class: "trx-alert__content" }, en = /* @__PURE__ */ g({
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
      class: y(["trx-alert", `trx-alert--${t.type}`]),
      role: "alert"
    }, [
      e("i", {
        class: y(["trx-alert__icon", P(n)]),
        "aria-hidden": "true"
      }, null, 2),
      e("div", Ql, [
        t.title ? (s(), o("p", Zl, v(t.title), 1)) : h("", !0),
        e("div", tn, [
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
}), eT = /* @__PURE__ */ M(en, [["__scopeId", "data-v-01863497"]]), sn = ["title", "aria-label"], an = ["src", "alt"], ln = {
  key: 1,
  class: "trx-avatar__initials"
}, nn = ["aria-label"], on = /* @__PURE__ */ g({
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
      class: y(["trx-avatar", `trx-avatar--${t.size}`]),
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
      }, null, 8, an)) : (s(), o("span", ln, v(r.value), 1)),
      t.status ? (s(), o("span", {
        key: 2,
        class: y(["trx-avatar__status", `trx-avatar__status--${t.status}`]),
        "aria-label": t.status
      }, null, 10, nn)) : h("", !0)
    ], 14, sn));
  }
}), sT = /* @__PURE__ */ M(on, [["__scopeId", "data-v-ad53c350"]]), rn = { class: "trx-kpi" }, cn = { class: "trx-kpi__header" }, un = { class: "trx-kpi__title" }, dn = {
  key: 0,
  class: "trx-kpi__skeleton"
}, _n = { class: "trx-kpi__value" }, pn = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", rn, [
      e("div", cn, [
        e("span", un, v(t.title), 1),
        t.icon ? (s(), o("div", {
          key: 0,
          class: y(["trx-kpi__icon", `trx-kpi__icon--${t.color}`])
        }, [
          e("i", {
            class: y(t.icon),
            "aria-hidden": "true"
          }, null, 2)
        ], 2)) : h("", !0)
      ]),
      t.loading ? (s(), o("div", dn, [...n[0] || (n[0] = [
        e("div", { class: "trx-kpi__skeleton-value" }, null, -1),
        e("div", { class: "trx-kpi__skeleton-trend" }, null, -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", _n, v(t.value ?? "—"), 1),
        t.trend ? (s(), o("div", {
          key: 0,
          class: y(["trx-kpi__trend", i.value])
        }, [
          e("i", {
            class: y(r.value),
            "aria-hidden": "true"
          }, null, 2),
          e("span", null, v(t.trend), 1)
        ], 2)) : h("", !0)
      ], 64)),
      I(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), aT = /* @__PURE__ */ M(pn, [["__scopeId", "data-v-a42946dc"]]), vn = { class: "trx-search" }, mn = ["aria-label"], fn = { class: "trx-search__trigger-text" }, xn = { class: "trx-search__modal" }, hn = { class: "trx-search__input-wrap" }, $n = ["placeholder", "value"], gn = { class: "trx-search__results" }, bn = {
  key: 0,
  class: "trx-search__hint"
}, yn = /* @__PURE__ */ g({
  __name: "TrxSearchBar",
  props: {
    placeholder: {},
    disableShortcut: { type: Boolean }
  },
  emits: ["search", "open", "close"],
  setup(t, { expose: a, emit: r }) {
    const i = r, l = z(!1), n = z(""), c = z(null), u = async () => {
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
    }), a({ open: u, close: _ }), (x, f) => (s(), o("div", vn, [
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
        e("span", fn, v(t.placeholder ?? "Buscar..."), 1),
        f[2] || (f[2] = e("kbd", { class: "trx-search__kbd" }, "⌘K", -1))
      ], 8, mn),
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
            e("div", xn, [
              e("div", hn, [
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
                }, null, 40, $n),
                n.value ? (s(), o("button", {
                  key: 0,
                  type: "button",
                  class: "trx-search__clear",
                  "aria-label": "Limpar",
                  onClick: f[0] || (f[0] = (k) => {
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
              e("div", gn, [
                I(x.$slots, "default", { query: n.value }, () => [
                  n.value ? h("", !0) : (s(), o("p", bn, [...f[5] || (f[5] = [
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
}), lT = /* @__PURE__ */ M(yn, [["__scopeId", "data-v-4e83a1ba"]]), kn = {
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
}, Cn = { class: "trx-filter-bar__chip-label" }, Sn = { class: "trx-filter-bar__chip-value" }, In = ["aria-label", "onClick"], Vn = /* @__PURE__ */ g({
  __name: "TrxFilterBar",
  props: {
    filters: {},
    clearLabel: {}
  },
  emits: ["remove", "clear"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = S(() => (r.filters ?? []).length > 0), n = (c) => c.displayValue ?? String(c.value);
    return (c, u) => l.value || c.$slots.default ? (s(), o("div", kn, [
      c.$slots.default ? (s(), o("div", wn, [
        I(c.$slots, "default", {}, void 0, !0)
      ])) : h("", !0),
      l.value ? (s(), o("div", Tn, [
        u[3] || (u[3] = e("span", { class: "trx-filter-bar__label" }, "Filtros:", -1)),
        (s(!0), o(V, null, b(t.filters, (_) => (s(), o("span", {
          key: _.key,
          class: "trx-filter-bar__chip",
          role: "listitem"
        }, [
          e("span", Cn, v(_.label) + ":", 1),
          e("span", Sn, v(n(_)), 1),
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
          ])], 8, In)
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
}), nT = /* @__PURE__ */ M(Vn, [["__scopeId", "data-v-227ccd1b"]]), Bn = {
  key: 0,
  class: "trx-dta__inline"
}, Pn = ["disabled", "aria-label", "title", "onClick"], Mn = ["aria-expanded"], An = {
  key: 0,
  class: "trx-dta__dropdown",
  role: "menu"
}, Ln = {
  key: 0,
  class: "trx-dta__separator"
}, zn = ["disabled", "onClick"], Dn = /* @__PURE__ */ g({
  __name: "TrxDataTableActions",
  props: {
    row: {},
    actions: {},
    variant: {}
  },
  setup(t) {
    const a = t, r = z(!1), i = z(null), l = S(
      () => a.actions.filter((m) => !m.visible || m.visible(a.row))
    ), n = S(
      () => a.variant ?? (l.value.length > 2 ? "menu" : "inline")
    ), c = (m) => {
      var x;
      (x = m.disabled) != null && x.call(m, a.row) || (m.action(a.row), r.value = !1);
    }, u = z(null), _ = () => {
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
      n.value === "inline" ? (s(), o("div", Bn, [
        (s(!0), o(V, null, b(l.value, (f) => {
          var k;
          return s(), o("button", {
            key: f.label,
            type: "button",
            class: y(["trx-dta__btn", `trx-dta__btn--${f.severity ?? "secondary"}`]),
            disabled: (k = f.disabled) == null ? void 0 : k.call(f, t.row),
            "aria-label": f.label,
            title: f.label,
            onClick: ($) => c(f)
          }, [
            f.icon ? (s(), o("i", {
              key: 0,
              class: y(f.icon),
              "aria-hidden": "true"
            }, null, 2)) : h("", !0),
            e("span", null, v(f.label), 1)
          ], 10, Pn);
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
        ])], 8, Mn),
        O(j, { name: "trx-dta" }, {
          default: B(() => [
            r.value ? (s(), o("div", An, [
              (s(!0), o(V, null, b(l.value, (f) => {
                var k, $;
                return s(), o(V, {
                  key: f.label
                }, [
                  f.separator ? (s(), o("hr", Ln)) : h("", !0),
                  e("button", {
                    type: "button",
                    class: y([
                      "trx-dta__item",
                      `trx-dta__item--${f.severity ?? "secondary"}`,
                      { "trx-dta__item--disabled": (k = f.disabled) == null ? void 0 : k.call(f, t.row) }
                    ]),
                    disabled: ($ = f.disabled) == null ? void 0 : $.call(f, t.row),
                    role: "menuitem",
                    onClick: (C) => c(f)
                  }, [
                    f.icon ? (s(), o("i", {
                      key: 0,
                      class: y(f.icon),
                      "aria-hidden": "true"
                    }, null, 2)) : h("", !0),
                    N(" " + v(f.label), 1)
                  ], 10, zn)
                ], 64);
              }), 128))
            ])) : h("", !0)
          ]),
          _: 1
        })
      ], 512))
    ], 32));
  }
}), oT = /* @__PURE__ */ M(Dn, [["__scopeId", "data-v-fe60232d"]]), En = {
  class: "trx-error",
  role: "main"
}, Rn = { class: "trx-error__inner" }, Nn = { class: "trx-error__icon-wrap" }, qn = { class: "trx-error__code" }, Fn = { class: "trx-error__title" }, On = { class: "trx-error__desc" }, jn = {
  key: 0,
  class: "trx-error__content"
}, Hn = { class: "trx-error__actions" }, Un = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", En, [
      e("div", Rn, [
        e("div", Nn, [
          e("i", {
            class: y(["trx-error__icon", l.value.icon]),
            "aria-hidden": "true"
          }, null, 2),
          e("span", qn, v(t.code), 1)
        ]),
        e("h1", Fn, v(t.title ?? l.value.title), 1),
        e("p", On, v(t.description ?? l.value.description), 1),
        n.$slots.default ? (s(), o("div", jn, [
          I(n.$slots, "default", {}, void 0, !0)
        ])) : h("", !0),
        e("div", Hn, [
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
}), rT = /* @__PURE__ */ M(Un, [["__scopeId", "data-v-342a5b45"]]), Wn = /* @__PURE__ */ g({
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
      class: y([
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
}), iT = /* @__PURE__ */ M(Wn, [["__scopeId", "data-v-9bfe5d38"]]), Gn = { class: "trx-call-card__left" }, Kn = { class: "trx-call-card__info" }, Yn = { class: "trx-call-card__caller" }, Jn = { class: "trx-call-card__name" }, Xn = {
  key: 0,
  class: "trx-call-card__number"
}, Qn = { class: "trx-call-card__meta" }, Zn = {
  key: 0,
  class: "trx-call-card__duration"
}, to = {
  key: 1,
  class: "trx-call-card__queue"
}, eo = {
  key: 0,
  class: "trx-call-card__agent"
}, so = { class: "trx-call-card__actions" }, ao = /* @__PURE__ */ g({
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
      class: y(["trx-call-card", `trx-call-card--${t.status}`])
    }, [
      e("div", Gn, [
        e("div", {
          class: "trx-call-card__icon",
          style: R({ color: n.value.color })
        }, [
          e("i", {
            class: y(n.value.icon)
          }, null, 2),
          e("i", {
            class: y(["trx-call-card__direction", t.direction === "inbound" ? "pi pi-arrow-down-left" : "pi pi-arrow-up-right"])
          }, null, 2)
        ], 4)
      ]),
      e("div", Kn, [
        e("div", Yn, [
          e("span", Jn, v(t.callerName || t.callerId), 1),
          t.callerName ? (s(), o("span", Xn, v(t.callerId), 1)) : h("", !0)
        ]),
        e("div", Qn, [
          e("span", {
            class: "trx-call-card__status",
            style: R({ color: n.value.color })
          }, v(n.value.label), 5),
          t.duration !== void 0 ? (s(), o("span", Zn, v(c(t.duration)), 1)) : h("", !0),
          t.queue ? (s(), o("span", to, v(t.queue), 1)) : h("", !0)
        ]),
        t.agent ? (s(), o("div", eo, [
          _[4] || (_[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0)
      ]),
      e("div", so, [
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
}), cT = /* @__PURE__ */ M(ao, [["__scopeId", "data-v-98fdc3c5"]]), lo = /* @__PURE__ */ g({
  __name: "TrxCallTimer",
  props: {
    running: { type: Boolean, default: !1 },
    startAt: { default: 0 },
    format: { default: "mm:ss" },
    color: { default: "default" }
  },
  emits: ["tick"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(r.startAt);
    let n = null;
    const c = S(() => r.color !== "default" ? r.color : l.value >= 300 ? "danger" : l.value >= 180 ? "warning" : "success"), u = S(() => ({
      success: "var(--trx-success-color)",
      warning: "var(--trx-warning-color)",
      danger: "var(--trx-danger-color)",
      default: "var(--trx-text-primary)"
    })[c.value]), _ = S(() => {
      const m = Math.floor(l.value / 3600), x = Math.floor(l.value % 3600 / 60), f = l.value % 60, k = x.toString().padStart(2, "0"), $ = f.toString().padStart(2, "0");
      return r.format === "hh:mm:ss" ? `${m.toString().padStart(2, "0")}:${k}:${$}` : `${(m * 60 + x).toString().padStart(2, "0")}:${$}`;
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
}), no = /* @__PURE__ */ M(lo, [["__scopeId", "data-v-35e4aaaf"]]), oo = { class: "trx-call-queue" }, ro = { class: "trx-call-queue__header" }, io = { class: "trx-call-queue__name" }, co = { class: "trx-call-queue__count" }, uo = {
  key: 0,
  class: "trx-call-queue__empty"
}, _o = {
  key: 1,
  class: "trx-call-queue__list"
}, po = { class: "trx-call-queue__item-info" }, vo = { class: "trx-call-queue__item-caller" }, mo = {
  key: 0,
  class: "trx-call-queue__item-number"
}, fo = { class: "trx-call-queue__item-meta" }, xo = { class: "trx-call-queue__item-actions" }, ho = ["onClick"], $o = ["onClick"], go = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", oo, [
      e("div", ro, [
        e("span", io, v(t.queueName || "Fila de Chamadas"), 1),
        e("span", co, v(t.calls.length), 1)
      ]),
      t.calls.length === 0 ? (s(), o("div", uo, [..._[0] || (_[0] = [
        e("i", { class: "pi pi-inbox" }, null, -1),
        e("span", null, "Nenhuma chamada na fila", -1)
      ])])) : (s(), o("ul", _o, [
        (s(!0), o(V, null, b(l.value, (d) => (s(), o("li", {
          key: d.id,
          class: y(["trx-call-queue__item", { "trx-call-queue__item--warning": d.waitTime > t.maxWaitWarning }])
        }, [
          e("div", po, [
            e("div", vo, [
              e("span", null, v(d.callerName || d.callerId), 1),
              d.callerName ? (s(), o("span", mo, v(d.callerId), 1)) : h("", !0)
            ]),
            e("div", fo, [
              e("span", {
                class: y(["trx-call-queue__wait", { "trx-call-queue__wait--over": d.waitTime > t.maxWaitWarning }])
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
          e("div", xo, [
            e("button", {
              class: "trx-call-queue__btn trx-call-queue__btn--answer",
              onClick: (p) => i("answer", d.id),
              title: "Atender"
            }, [..._[2] || (_[2] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, ho),
            e("button", {
              class: "trx-call-queue__btn",
              onClick: (p) => i("transfer", d.id),
              title: "Transferir"
            }, [..._[3] || (_[3] = [
              e("i", { class: "pi pi-share-alt" }, null, -1)
            ])], 8, $o)
          ])
        ], 2))), 128))
      ]))
    ]));
  }
}), uT = /* @__PURE__ */ M(go, [["__scopeId", "data-v-48b24471"]]), bo = {
  key: 0,
  class: "trx-dialer__display"
}, yo = { class: "trx-dialer__number" }, ko = { class: "trx-dialer__grid" }, wo = ["disabled", "onClick"], To = { class: "trx-dialer__key-main" }, Co = {
  key: 0,
  class: "trx-dialer__key-sub"
}, So = { class: "trx-dialer__actions" }, Io = ["disabled"], Vo = ["disabled"], Bo = /* @__PURE__ */ g({
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
      class: y(["trx-dialer", { "trx-dialer--disabled": t.disabled }])
    }, [
      t.showDisplay ? (s(), o("div", bo, [
        e("span", yo, v(c.value || " "), 1),
        c.value ? (s(), o("button", {
          key: 0,
          class: "trx-dialer__backspace",
          onClick: _,
          title: "Apagar"
        }, [...x[0] || (x[0] = [
          e("i", { class: "pi pi-delete-left" }, null, -1)
        ])])) : h("", !0)
      ])) : h("", !0),
      e("div", ko, [
        (s(), o(V, null, b(l, (f) => e("button", {
          key: f,
          class: "trx-dialer__key",
          disabled: t.disabled,
          onClick: (k) => u(f)
        }, [
          e("span", To, v(f), 1),
          n[f] ? (s(), o("span", Co, v(n[f]), 1)) : h("", !0)
        ], 8, wo)), 64))
      ]),
      e("div", So, [
        e("button", {
          class: "trx-dialer__clear",
          disabled: t.disabled || !c.value,
          onClick: d,
          title: "Limpar"
        }, [...x[1] || (x[1] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])], 8, Io),
        e("button", {
          class: "trx-dialer__call",
          disabled: t.disabled || !c.value,
          onClick: p,
          title: "Ligar"
        }, [...x[2] || (x[2] = [
          e("i", { class: "pi pi-phone" }, null, -1)
        ])], 8, Vo)
      ])
    ], 2));
  }
}), dT = /* @__PURE__ */ M(Bo, [["__scopeId", "data-v-a4cd158b"]]), Po = { class: "trx-softphone__info" }, Mo = { class: "trx-softphone__details" }, Ao = { class: "trx-softphone__label" }, Lo = {
  key: 0,
  class: "trx-softphone__caller"
}, zo = {
  key: 0,
  class: "trx-softphone__controls"
}, Do = ["title"], Eo = ["title"], Ro = /* @__PURE__ */ g({
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
        class: y(["trx-softphone", `trx-softphone--${t.status}`])
      }, [
        e("div", Po, [
          u[5] || (u[5] = e("div", { class: "trx-softphone__status-dot" }, null, -1)),
          e("div", Mo, [
            e("span", Ao, v(l.value), 1),
            t.callInfo ? (s(), o("span", Lo, v(t.callInfo.name || t.callInfo.number), 1)) : h("", !0)
          ]),
          n.value && ((_ = t.callInfo) == null ? void 0 : _.duration) !== void 0 ? (s(), L(no, {
            key: 0,
            running: n.value,
            "start-at": t.callInfo.duration,
            class: "trx-softphone__timer"
          }, null, 8, ["running", "start-at"])) : h("", !0)
        ]),
        t.status !== "idle" ? (s(), o("div", zo, [
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
              class: y(["trx-softphone__btn", t.status === "hold" ? "trx-softphone__btn--active" : ""]),
              onClick: u[1] || (u[1] = (d) => t.status === "hold" ? i("resume") : i("hold")),
              title: t.status === "hold" ? "Retomar" : "Espera"
            }, [
              e("i", {
                class: y(t.status === "hold" ? "pi pi-play" : "pi pi-pause")
              }, null, 2)
            ], 10, Do)) : h("", !0),
            n.value ? (s(), o("button", {
              key: 1,
              class: y(["trx-softphone__btn", t.status === "muted" ? "trx-softphone__btn--active" : ""]),
              onClick: u[2] || (u[2] = (d) => t.status === "muted" ? i("unmute") : i("mute")),
              title: t.status === "muted" ? "Ativar mic" : "Mudo"
            }, [
              e("i", {
                class: y(t.status === "muted" ? "pi pi-microphone-slash" : "pi pi-microphone")
              }, null, 2)
            ], 10, Eo)) : h("", !0),
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
}), _T = /* @__PURE__ */ M(Ro, [["__scopeId", "data-v-80ab0580"]]), No = {
  key: 0,
  class: "trx-phone-input__ddi"
}, qo = ["value", "placeholder", "disabled"], Fo = /* @__PURE__ */ g({
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
      class: y(["trx-phone-input", { "trx-phone-input--invalid": t.invalid, "trx-phone-input--disabled": t.disabled }])
    }, [
      t.showDdi ? (s(), o("span", No, v(t.ddi), 1)) : h("", !0),
      c[0] || (c[0] = e("i", { class: "pi pi-phone trx-phone-input__icon" }, null, -1)),
      e("input", {
        class: "trx-phone-input__field",
        type: "tel",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        autocomplete: "tel",
        onInput: i
      }, null, 40, qo)
    ], 2));
  }
}), pT = /* @__PURE__ */ M(Fo, [["__scopeId", "data-v-d0bc586c"]]), Oo = /* @__PURE__ */ g({
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
      const x = r.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", f = r.progressColor || "#10b981", k = r.height / 2;
      r.data.forEach(($, C) => {
        const A = C * p, E = Math.max(2, $ * r.height * 0.9), F = k - E / 2, q = C / r.data.length < r.progress;
        _.fillStyle = q ? f : x + "66", _.beginPath(), _.roundRect(A, F, r.barWidth, E, 1), _.fill();
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
}), vT = /* @__PURE__ */ M(Oo, [["__scopeId", "data-v-c031b667"]]), jo = { class: "trx-transcription" }, Ho = {
  key: 0,
  class: "trx-transcription__avatar"
}, Uo = { class: "trx-transcription__bubble" }, Wo = { class: "trx-transcription__header" }, Go = { class: "trx-transcription__speaker" }, Ko = { class: "trx-transcription__time" }, Yo = {
  key: 0,
  class: "trx-transcription__low-conf",
  title: "Baixa confiança"
}, Jo = ["innerHTML"], Xo = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", jo, [
      (s(!0), o(V, null, b(t.segments, (d) => (s(), o("div", {
        key: d.id,
        class: y(["trx-transcription__segment", [
          `trx-transcription__segment--${d.speaker}`,
          { "trx-transcription__segment--active": i(d) }
        ]])
      }, [
        d.speaker !== "system" ? (s(), o("div", Ho, v(c(n(d.speaker))), 1)) : h("", !0),
        e("div", Uo, [
          e("div", Wo, [
            e("span", Go, v(n(d.speaker)), 1),
            e("span", Ko, v(r(d.startTime)), 1),
            d.confidence !== void 0 && d.confidence < 0.7 ? (s(), o("span", Yo, [..._[0] || (_[0] = [
              e("i", { class: "pi pi-exclamation-triangle" }, null, -1)
            ])])) : h("", !0)
          ]),
          e("p", {
            class: "trx-transcription__text",
            innerHTML: l(d.text)
          }, null, 8, Jo)
        ])
      ], 2))), 128))
    ]));
  }
}), mT = /* @__PURE__ */ M(Xo, [["__scopeId", "data-v-2470dac6"]]), Qo = /* @__PURE__ */ g({
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
      const u = a.color || getComputedStyle(document.documentElement).getPropertyValue("--trx-accent-color").trim() || "#10b981", _ = Math.min(...a.data), p = Math.max(...a.data) - _ || 1, m = 2, x = a.data.map((f, k) => ({
        x: k / (a.data.length - 1) * (a.width - m * 2) + m,
        y: a.height - m - (f - _) / p * (a.height - m * 2)
      }));
      if (n.beginPath(), n.moveTo(x[0].x, x[0].y), x.slice(1).forEach((f) => n.lineTo(f.x, f.y)), a.fill) {
        const f = x[x.length - 1];
        n.lineTo(f.x, a.height), n.lineTo(x[0].x, a.height), n.closePath();
        const k = n.createLinearGradient(0, 0, 0, a.height);
        k.addColorStop(0, u + "33"), k.addColorStop(1, u + "00"), n.fillStyle = k, n.fill(), n.beginPath(), n.moveTo(x[0].x, x[0].y), x.slice(1).forEach(($) => n.lineTo($.x, $.y));
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
}), Zo = /* @__PURE__ */ M(Qo, [["__scopeId", "data-v-5bfe2b98"]]), tr = /* @__PURE__ */ g({
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
      const _ = a.size / 2, d = a.size * 0.55, p = (a.size - a.thickness * 2 - 8) / 2, m = Math.PI, x = 2 * Math.PI, f = Math.max(0, Math.min(1, (a.value - a.min) / (a.max - a.min))), k = m + f * Math.PI, $ = getComputedStyle(document.documentElement), C = $.getPropertyValue("--trx-border-color").trim() || "#e2e8f0";
      c.beginPath(), c.arc(_, d, p, m, x), c.strokeStyle = C, c.lineWidth = a.thickness, c.lineCap = "round", c.stroke(), f > 0 && (c.beginPath(), c.arc(_, d, p, m, k), c.strokeStyle = i.value, c.lineWidth = a.thickness, c.lineCap = "round", c.stroke()), c.fillStyle = $.getPropertyValue("--trx-text-primary").trim() || "#1e293b", c.font = `bold ${a.size * 0.16}px Inter, system-ui`, c.textAlign = "center", c.textBaseline = "middle";
      const A = `${Math.round(a.value)}${a.unit || ""}`;
      c.fillText(A, _, d - a.size * 0.04), a.label && (c.fillStyle = $.getPropertyValue("--trx-text-secondary").trim() || "#64748b", c.font = `${a.size * 0.09}px Inter, system-ui`, c.fillText(a.label, _, d + a.size * 0.1));
    }
    return W(l), Z(() => [a.value, a.color, a.size], l), (n, c) => (s(), o("canvas", {
      ref_key: "canvas",
      ref: r,
      class: "trx-gauge"
    }, null, 512));
  }
}), fT = /* @__PURE__ */ M(tr, [["__scopeId", "data-v-6d505e7d"]]), er = { class: "trx-metric-card__main" }, sr = { class: "trx-metric-card__title" }, ar = { class: "trx-metric-card__value-row" }, lr = {
  key: 0,
  class: "trx-metric-card__skeleton"
}, nr = {
  key: 0,
  class: "trx-metric-card__unit"
}, or = {
  key: 0,
  class: "trx-metric-card__change-label"
}, rr = {
  key: 0,
  class: "trx-metric-card__chart"
}, ir = /* @__PURE__ */ g({
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
        class: y(["trx-metric-card", `trx-metric-card--${t.color}`])
      }, [
        e("div", er, [
          e("p", sr, v(t.title), 1),
          e("div", ar, [
            t.loading ? (s(), o("span", lr)) : (s(), o(V, { key: 1 }, [
              e("span", {
                class: "trx-metric-card__value",
                style: R({ color: r.value })
              }, v(t.value), 5),
              t.unit ? (s(), o("span", nr, v(t.unit), 1)) : h("", !0)
            ], 64))
          ]),
          t.change !== void 0 ? (s(), o("div", {
            key: 0,
            class: y(["trx-metric-card__change", i.value ? "trx-metric-card__change--up" : "trx-metric-card__change--down"])
          }, [
            e("i", {
              class: y(l.value)
            }, null, 2),
            e("span", null, v(Math.abs(t.change)) + "%", 1),
            t.changeLabel ? (s(), o("span", or, v(t.changeLabel), 1)) : h("", !0)
          ], 2)) : h("", !0)
        ]),
        (u = t.sparklineData) != null && u.length ? (s(), o("div", rr, [
          O(Zo, {
            data: t.sparklineData,
            width: 80,
            height: 40,
            color: r.value
          }, null, 8, ["data", "color"])
        ])) : h("", !0)
      ], 2);
    };
  }
}), xT = /* @__PURE__ */ M(ir, [["__scopeId", "data-v-6c648207"]]), cr = { class: "trx-heatmap" }, ur = {
  key: 0,
  class: "trx-heatmap__hour-labels"
}, dr = { class: "trx-heatmap__grid" }, _r = {
  key: 0,
  class: "trx-heatmap__day-label"
}, pr = ["title"], vr = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", cr, [
      t.showLabels ? (s(), o("div", ur, [
        _[0] || (_[0] = e("div", { class: "trx-heatmap__corner" }, null, -1)),
        (s(!0), o(V, null, b(P(r), (d) => (s(), o("div", {
          key: d,
          class: "trx-heatmap__hour-label",
          style: R({ width: `${t.cellSize}px` })
        }, v(c(d)), 5))), 128))
      ])) : h("", !0),
      e("div", dr, [
        (s(!0), o(V, null, b(t.days, (d, p) => (s(), o("div", {
          key: p,
          class: "trx-heatmap__row"
        }, [
          t.showLabels ? (s(), o("div", _r, v(d), 1)) : h("", !0),
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
            }, null, 12, pr);
          }), 128))
        ]))), 128))
      ])
    ]));
  }
}), hT = /* @__PURE__ */ M(vr, [["__scopeId", "data-v-3bac74cd"]]), mr = /* @__PURE__ */ g({
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
}), $T = /* @__PURE__ */ M(mr, [["__scopeId", "data-v-b95e8456"]]), fr = { class: "trx-table-toolbar" }, xr = {
  key: 0,
  class: "trx-table-toolbar__bulk"
}, hr = { class: "trx-table-toolbar__bulk-count" }, $r = { class: "trx-table-toolbar__main" }, gr = { class: "trx-table-toolbar__search" }, br = ["value", "placeholder"], yr = { class: "trx-table-toolbar__center" }, kr = {
  key: 0,
  class: "trx-table-toolbar__total"
}, wr = { class: "trx-table-toolbar__actions" }, Tr = ["disabled"], Cr = {
  key: 0,
  class: "trx-table-toolbar__filter-panel"
}, Sr = /* @__PURE__ */ g({
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
    const r = a, i = z(!1);
    return (l, n) => (s(), o("div", fr, [
      O(j, { name: "trx-bulk-slide" }, {
        default: B(() => [
          t.selectedCount && t.selectedCount > 0 ? (s(), o("div", xr, [
            e("span", hr, v(t.selectedCount) + " selecionado(s)", 1),
            I(l.$slots, "bulk-actions", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      }),
      e("div", $r, [
        e("div", gr, [
          n[5] || (n[5] = e("i", { class: "pi pi-search trx-table-toolbar__search-icon" }, null, -1)),
          e("input", {
            class: "trx-table-toolbar__search-input",
            type: "text",
            value: t.searchValue,
            placeholder: t.searchPlaceholder,
            onInput: n[0] || (n[0] = (c) => r("update:searchValue", c.target.value))
          }, null, 40, br),
          t.searchValue ? (s(), o("button", {
            key: 0,
            class: "trx-table-toolbar__search-clear",
            onClick: n[1] || (n[1] = (c) => r("update:searchValue", ""))
          }, [...n[4] || (n[4] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])) : h("", !0)
        ]),
        e("div", yr, [
          t.total !== void 0 ? (s(), o("span", kr, v(t.total) + " registro(s) ", 1)) : h("", !0)
        ]),
        e("div", wr, [
          I(l.$slots, "filters", {}, () => [
            l.$slots["filter-panel"] ? (s(), o("button", {
              key: 0,
              class: y(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--active": i.value }]),
              onClick: n[2] || (n[2] = (c) => {
                i.value = !i.value, r("filter");
              }),
              title: "Filtros"
            }, [...n[6] || (n[6] = [
              e("i", { class: "pi pi-filter" }, null, -1)
            ])], 2)) : h("", !0)
          ], !0),
          e("button", {
            class: y(["trx-table-toolbar__btn", { "trx-table-toolbar__btn--loading": t.loading }]),
            onClick: n[3] || (n[3] = (c) => r("refresh")),
            title: "Atualizar",
            disabled: t.loading
          }, [
            e("i", {
              class: y(t.loading ? "pi pi-spin pi-spinner" : "pi pi-refresh")
            }, null, 2)
          ], 10, Tr),
          I(l.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      O(j, { name: "trx-slide-down" }, {
        default: B(() => [
          i.value && l.$slots["filter-panel"] ? (s(), o("div", Cr, [
            I(l.$slots, "filter-panel", {}, void 0, !0)
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), gT = /* @__PURE__ */ M(Sr, [["__scopeId", "data-v-874b5252"]]), Ir = {
  key: 0,
  class: "trx-bulk-actions"
}, Vr = { class: "trx-bulk-actions__count" }, Br = { class: "trx-bulk-actions__items" }, Pr = /* @__PURE__ */ g({
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
        l.value ? (s(), o("div", Ir, [
          e("span", Vr, v(n.value), 1),
          e("div", Br, [
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
}), bT = /* @__PURE__ */ M(Pr, [["__scopeId", "data-v-5f6bea7d"]]), Mr = { class: "trx-export-btn" }, Ar = ["disabled"], Lr = {
  key: 0,
  class: "trx-export-btn__menu"
}, zr = ["onClick"], Dr = /* @__PURE__ */ g({
  __name: "TrxExportButton",
  props: {
    formats: { default: () => ["csv", "excel"] },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    label: { default: "Exportar" }
  },
  emits: ["export"],
  setup(t, { emit: a }) {
    const r = a, i = z(!1), l = {
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
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", Mr, [
      e("button", {
        class: "trx-export-btn__trigger",
        disabled: t.disabled || t.loading,
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        e("i", {
          class: y(t.loading ? "pi pi-spin pi-spinner" : "pi pi-download")
        }, null, 2),
        e("span", null, v(t.label), 1),
        e("i", {
          class: y(["pi pi-chevron-down trx-export-btn__arrow", { "trx-export-btn__arrow--open": i.value }])
        }, null, 2)
      ], 8, Ar),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", Lr, [
            (s(!0), o(V, null, b(t.formats, (d) => (s(), o("button", {
              key: d,
              class: "trx-export-btn__item",
              onClick: (p) => n(d)
            }, [
              e("i", {
                class: y(l[d].icon)
              }, null, 2),
              e("span", null, v(l[d].label), 1)
            ], 8, zr))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), yT = /* @__PURE__ */ M(Dr, [["__scopeId", "data-v-2e0f2f33"]]), Er = { class: "trx-col-config" }, Rr = {
  key: 0,
  class: "trx-col-config__panel"
}, Nr = ["checked", "disabled", "onChange"], qr = {
  key: 0,
  class: "trx-col-config__lock"
}, Fr = /* @__PURE__ */ g({
  __name: "TrxColumnConfig",
  props: {
    columns: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(!1);
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
    return W(() => document.addEventListener("click", u, !0)), G(() => document.removeEventListener("click", u, !0)), (_, d) => (s(), o("div", Er, [
      e("button", {
        class: "trx-col-config__trigger",
        onClick: d[0] || (d[0] = (p) => l.value = !l.value),
        title: "Configurar colunas"
      }, [...d[1] || (d[1] = [
        e("i", { class: "pi pi-table" }, null, -1)
      ])]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Rr, [
            d[3] || (d[3] = e("p", { class: "trx-col-config__title" }, "Colunas visíveis", -1)),
            (s(!0), o(V, null, b(t.columns, (p) => (s(), o("label", {
              key: p.key,
              class: y(["trx-col-config__item", { "trx-col-config__item--required": p.required }])
            }, [
              e("input", {
                type: "checkbox",
                checked: c(p.key),
                disabled: p.required,
                onChange: (m) => n(p.key)
              }, null, 40, Nr),
              e("span", null, v(p.label), 1),
              p.required ? (s(), o("span", qr, [...d[2] || (d[2] = [
                e("i", { class: "pi pi-lock" }, null, -1)
              ])])) : h("", !0)
            ], 2))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), kT = /* @__PURE__ */ M(Fr, [["__scopeId", "data-v-e1297a23"]]), Or = ["value", "disabled", "placeholder", "max"], jr = ["value", "disabled", "placeholder", "min"], Hr = /* @__PURE__ */ g({
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
      class: y(["trx-daterange", { "trx-daterange--disabled": t.disabled }])
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
      }, null, 40, Or),
      m[2] || (m[2] = e("span", { class: "trx-daterange__sep" }, "→", -1)),
      e("input", {
        class: "trx-daterange__input",
        type: "date",
        value: n.value,
        disabled: t.disabled,
        placeholder: t.endPlaceholder,
        min: l.value || void 0,
        onChange: u
      }, null, 40, jr),
      d.value && !t.disabled ? (s(), o("button", {
        key: 0,
        class: "trx-daterange__clear",
        onClick: _
      }, [...m[0] || (m[0] = [
        e("i", { class: "pi pi-times" }, null, -1)
      ])])) : h("", !0)
    ], 2));
  }
}), wT = /* @__PURE__ */ M(Hr, [["__scopeId", "data-v-7a43f167"]]), Ur = ["value", "disabled", "placeholder"], Wr = /* @__PURE__ */ g({
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
      class: y(["trx-duration", { "trx-duration--invalid": t.invalid, "trx-duration--disabled": t.disabled }])
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
      }, null, 40, Ur)
    ], 2));
  }
}), TT = /* @__PURE__ */ M(Wr, [["__scopeId", "data-v-6df8b487"]]), Gr = ["disabled"], Kr = {
  key: 1,
  class: "pi pi-chevron-down trx-timepicker__arrow"
}, Yr = {
  key: 0,
  class: "trx-timepicker__panel"
}, Jr = ["onClick"], Xr = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(!1), n = S(() => {
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
      class: y(["trx-timepicker", { "trx-timepicker--invalid": t.invalid, "trx-timepicker--disabled": t.disabled }])
    }, [
      e("button", {
        class: "trx-timepicker__trigger",
        disabled: t.disabled,
        onClick: p[0] || (p[0] = (m) => l.value = !l.value)
      }, [
        p[1] || (p[1] = e("i", { class: "pi pi-clock trx-timepicker__icon" }, null, -1)),
        e("span", {
          class: y({ "trx-timepicker__placeholder": !t.modelValue })
        }, v(t.modelValue || t.placeholder), 3),
        t.modelValue ? (s(), o("i", {
          key: 0,
          class: "pi pi-times trx-timepicker__clear",
          onClick: H(u, ["stop"])
        })) : (s(), o("i", Kr))
      ], 8, Gr),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Yr, [
            (s(!0), o(V, null, b(n.value, (m) => (s(), o("button", {
              key: m,
              class: y(["trx-timepicker__option", { "trx-timepicker__option--active": m === t.modelValue }]),
              onClick: (x) => c(m)
            }, v(m), 11, Jr))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), CT = /* @__PURE__ */ M(Xr, [["__scopeId", "data-v-6f06dd60"]]), Qr = ["accept", "multiple"], Zr = { class: "trx-dropzone__label" }, ti = {
  key: 0,
  class: "trx-dropzone__hint"
}, ei = {
  key: 1,
  class: "trx-dropzone__hint"
}, si = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(!1), n = z();
    function c(x) {
      x.preventDefault(), r.disabled || (l.value = !0);
    }
    function u() {
      l.value = !1;
    }
    function _(x) {
      var k;
      if (x.preventDefault(), l.value = !1, r.disabled) return;
      const f = Array.from(((k = x.dataTransfer) == null ? void 0 : k.files) ?? []);
      p(f);
    }
    function d(x) {
      const f = Array.from(x.target.files ?? []);
      p(f), n.value && (n.value.value = "");
    }
    function p(x) {
      if (r.maxSize) {
        const f = x.filter((k) => k.size > r.maxSize * 1024 * 1024);
        if (f.length) {
          i("error", `Arquivo(s) excedem ${r.maxSize}MB: ${f.map((k) => k.name).join(", ")}`);
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
      class: y(["trx-dropzone", {
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
      }, null, 40, Qr),
      f[0] || (f[0] = e("i", { class: "pi pi-upload trx-dropzone__icon" }, null, -1)),
      e("p", Zr, v(t.label), 1),
      t.hint ? (s(), o("p", ti, v(t.hint), 1)) : h("", !0),
      t.maxSize ? (s(), o("p", ei, "Máx. " + v(t.maxSize) + "MB por arquivo", 1)) : h("", !0)
    ], 34));
  }
}), ST = /* @__PURE__ */ M(si, [["__scopeId", "data-v-83847ba3"]]), ai = { class: "trx-address__row" }, li = { class: "trx-address__field trx-address__field--zip" }, ni = { class: "trx-address__label" }, oi = { key: 0 }, ri = { class: "trx-address__cep-wrap" }, ii = ["value", "disabled"], ci = {
  key: 0,
  class: "pi pi-spin pi-spinner trx-address__cep-icon"
}, ui = {
  key: 0,
  class: "trx-address__error"
}, di = { class: "trx-address__row trx-address__row--street" }, _i = { class: "trx-address__field" }, pi = ["value", "disabled"], vi = { class: "trx-address__field trx-address__field--number" }, mi = ["value", "disabled"], fi = { class: "trx-address__row" }, xi = { class: "trx-address__field" }, hi = ["value", "disabled"], $i = { class: "trx-address__field" }, gi = ["value", "disabled"], bi = { class: "trx-address__row" }, yi = { class: "trx-address__field" }, ki = ["value", "disabled"], wi = { class: "trx-address__field trx-address__field--state" }, Ti = ["value", "disabled"], Ci = /* @__PURE__ */ g({
  __name: "TrxAddressForm",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(!1), n = z("");
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
      var p, m, x, f, k, $, C;
      return s(), o("div", {
        class: y(["trx-address", { "trx-address--disabled": t.disabled }])
      }, [
        e("div", ai, [
          e("div", li, [
            e("label", ni, [
              d[7] || (d[7] = N("CEP ", -1)),
              t.required ? (s(), o("span", oi, "*")) : h("", !0)
            ]),
            e("div", ri, [
              e("input", {
                class: y(["trx-address__input", { "trx-address__input--error": n.value }]),
                type: "text",
                maxlength: "9",
                placeholder: "00000-000",
                value: ((p = t.modelValue) == null ? void 0 : p.zipCode) ?? "",
                disabled: t.disabled,
                onInput: d[0] || (d[0] = (A) => u(A.target.value))
              }, null, 42, ii),
              l.value ? (s(), o("i", ci)) : h("", !0)
            ]),
            n.value ? (s(), o("span", ui, v(n.value), 1)) : h("", !0)
          ])
        ]),
        e("div", di, [
          e("div", _i, [
            d[8] || (d[8] = e("label", { class: "trx-address__label" }, "Logradouro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Rua, Avenida...",
              value: ((m = t.modelValue) == null ? void 0 : m.street) ?? "",
              disabled: t.disabled,
              onInput: d[1] || (d[1] = (A) => c("street", A.target.value))
            }, null, 40, pi)
          ]),
          e("div", vi, [
            d[9] || (d[9] = e("label", { class: "trx-address__label" }, "Número", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Nº",
              value: ((x = t.modelValue) == null ? void 0 : x.number) ?? "",
              disabled: t.disabled,
              onInput: d[2] || (d[2] = (A) => c("number", A.target.value))
            }, null, 40, mi)
          ])
        ]),
        e("div", fi, [
          e("div", xi, [
            d[10] || (d[10] = e("label", { class: "trx-address__label" }, "Complemento", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Apto, Sala...",
              value: ((f = t.modelValue) == null ? void 0 : f.complement) ?? "",
              disabled: t.disabled,
              onInput: d[3] || (d[3] = (A) => c("complement", A.target.value))
            }, null, 40, hi)
          ]),
          e("div", $i, [
            d[11] || (d[11] = e("label", { class: "trx-address__label" }, "Bairro", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Bairro",
              value: ((k = t.modelValue) == null ? void 0 : k.district) ?? "",
              disabled: t.disabled,
              onInput: d[4] || (d[4] = (A) => c("district", A.target.value))
            }, null, 40, gi)
          ])
        ]),
        e("div", bi, [
          e("div", yi, [
            d[12] || (d[12] = e("label", { class: "trx-address__label" }, "Cidade", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              placeholder: "Cidade",
              value: (($ = t.modelValue) == null ? void 0 : $.city) ?? "",
              disabled: t.disabled,
              onInput: d[5] || (d[5] = (A) => c("city", A.target.value))
            }, null, 40, ki)
          ]),
          e("div", wi, [
            d[13] || (d[13] = e("label", { class: "trx-address__label" }, "UF", -1)),
            e("input", {
              class: "trx-address__input",
              type: "text",
              maxlength: "2",
              placeholder: "UF",
              value: ((C = t.modelValue) == null ? void 0 : C.state) ?? "",
              disabled: t.disabled,
              onInput: d[6] || (d[6] = (A) => c("state", A.target.value))
            }, null, 40, Ti)
          ])
        ])
      ], 2);
    };
  }
}), IT = /* @__PURE__ */ M(Ci, [["__scopeId", "data-v-4f713181"]]), Si = { class: "trx-page-layout" }, Ii = {
  key: 0,
  class: "trx-page-layout__breadcrumb"
}, Vi = {
  key: 0,
  class: "trx-page-layout__sep"
}, Bi = ["href"], Pi = {
  key: 2,
  class: "trx-page-layout__crumb"
}, Mi = {
  key: 1,
  class: "trx-page-layout__header"
}, Ai = { class: "trx-page-layout__heading" }, Li = {
  key: 0,
  class: "trx-page-layout__skeleton trx-page-layout__skeleton--title"
}, zi = {
  key: 0,
  class: "trx-page-layout__title"
}, Di = {
  key: 1,
  class: "trx-page-layout__subtitle"
}, Ei = {
  key: 0,
  class: "trx-page-layout__actions"
}, Ri = { class: "trx-page-layout__content" }, Ni = {
  key: 2,
  class: "trx-page-layout__footer"
}, qi = /* @__PURE__ */ g({
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
      return s(), o("div", Si, [
        (i = t.breadcrumbs) != null && i.length ? (s(), o("div", Ii, [
          (s(!0), o(V, null, b(t.breadcrumbs, (l, n) => (s(), o(V, { key: n }, [
            n > 0 ? (s(), o("span", Vi, "/")) : h("", !0),
            l.to ? (s(), o("a", {
              key: 1,
              class: "trx-page-layout__crumb trx-page-layout__crumb--link",
              href: l.to
            }, v(l.label), 9, Bi)) : (s(), o("span", Pi, v(l.label), 1))
          ], 64))), 128))
        ])) : h("", !0),
        t.title || a.$slots.header ? (s(), o("div", Mi, [
          e("div", Ai, [
            t.loading ? (s(), o("div", Li)) : (s(), o(V, { key: 1 }, [
              t.title ? (s(), o("h1", zi, v(t.title), 1)) : h("", !0),
              t.subtitle ? (s(), o("p", Di, v(t.subtitle), 1)) : h("", !0)
            ], 64))
          ]),
          a.$slots.actions ? (s(), o("div", Ei, [
            I(a.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0),
          I(a.$slots, "header", {}, void 0, !0)
        ])) : h("", !0),
        e("div", Ri, [
          I(a.$slots, "default", {}, void 0, !0)
        ]),
        a.$slots.footer ? (s(), o("div", Ni, [
          I(a.$slots, "footer", {}, void 0, !0)
        ])) : h("", !0)
      ]);
    };
  }
}), VT = /* @__PURE__ */ M(qi, [["__scopeId", "data-v-2b3d5429"]]), Fi = { class: "trx-tabs-router" }, Oi = {
  class: "trx-tabs-router__nav",
  role: "tablist"
}, ji = ["disabled", "aria-selected", "onClick"], Hi = {
  key: 1,
  class: "trx-tabs-router__badge"
}, Ui = {
  class: "trx-tabs-router__content",
  role: "tabpanel"
}, Wi = /* @__PURE__ */ g({
  __name: "TrxTabsRouter",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", Fi, [
      e("nav", Oi, [
        (s(!0), o(V, null, b(t.tabs, (n) => (s(), o("button", {
          key: n.key,
          class: y(["trx-tabs-router__tab", { "trx-tabs-router__tab--active": t.modelValue === n.key }]),
          disabled: n.disabled,
          role: "tab",
          "aria-selected": t.modelValue === n.key,
          onClick: (c) => !n.disabled && r("update:modelValue", n.key)
        }, [
          n.icon ? (s(), o("i", {
            key: 0,
            class: y(n.icon)
          }, null, 2)) : h("", !0),
          e("span", null, v(n.label), 1),
          n.badge !== void 0 ? (s(), o("span", Hi, v(n.badge), 1)) : h("", !0)
        ], 10, ji))), 128))
      ]),
      e("div", Ui, [
        I(i.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), BT = /* @__PURE__ */ M(Wi, [["__scopeId", "data-v-e69a3f91"]]), Gi = { class: "trx-mobile-nav" }, Ki = ["onClick"], Yi = { class: "trx-mobile-nav__icon-wrap" }, Ji = {
  key: 0,
  class: "trx-mobile-nav__badge"
}, Xi = { class: "trx-mobile-nav__label" }, Qi = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("nav", Gi, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("button", {
        key: c.key,
        class: y(["trx-mobile-nav__item", { "trx-mobile-nav__item--active": t.modelValue === c.key }]),
        onClick: (u) => i(c)
      }, [
        e("div", Yi, [
          e("i", {
            class: y(c.icon)
          }, null, 2),
          c.badge ? (s(), o("span", Ji, v(c.badge > 99 ? "99+" : c.badge), 1)) : h("", !0)
        ]),
        e("span", Xi, v(c.label), 1)
      ], 10, Ki))), 128))
    ]));
  }
}), PT = /* @__PURE__ */ M(Qi, [["__scopeId", "data-v-5b0a32c4"]]), Zi = { class: "trx-user-menu" }, tc = ["src", "alt"], ec = {
  key: 1,
  class: "trx-user-menu__initials"
}, sc = { class: "trx-user-menu__info" }, ac = { class: "trx-user-menu__name" }, lc = {
  key: 0,
  class: "trx-user-menu__role"
}, nc = {
  key: 0,
  class: "trx-user-menu__panel"
}, oc = {
  key: 0,
  class: "trx-user-menu__email"
}, rc = {
  key: 0,
  class: "trx-user-menu__sep"
}, ic = ["onClick"], cc = /* @__PURE__ */ g({
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
    const r = a, i = z(!1);
    function l(u) {
      i.value = !1, u.key === "logout" ? r("logout") : r("select", u.key);
    }
    const n = (u) => u.split(" ").map((_) => _[0]).slice(0, 2).join("").toUpperCase();
    function c(u) {
      const _ = document.querySelector(".trx-user-menu");
      _ && !_.contains(u.target) && (i.value = !1);
    }
    return W(() => document.addEventListener("click", c, !0)), G(() => document.removeEventListener("click", c, !0)), (u, _) => (s(), o("div", Zi, [
      e("button", {
        class: "trx-user-menu__trigger",
        onClick: _[0] || (_[0] = (d) => i.value = !i.value)
      }, [
        t.avatar ? (s(), o("img", {
          key: 0,
          src: t.avatar,
          alt: t.name,
          class: "trx-user-menu__avatar"
        }, null, 8, tc)) : (s(), o("span", ec, v(n(t.name)), 1)),
        e("div", sc, [
          e("span", ac, v(t.name), 1),
          t.role ? (s(), o("span", lc, v(t.role), 1)) : h("", !0)
        ]),
        e("i", {
          class: y(["pi pi-chevron-down trx-user-menu__arrow", { "trx-user-menu__arrow--open": i.value }])
        }, null, 2)
      ]),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", nc, [
            t.email ? (s(), o("div", oc, v(t.email), 1)) : h("", !0),
            (s(!0), o(V, null, b(t.items, (d) => (s(), o(V, {
              key: d.key
            }, [
              d.separator ? (s(), o("hr", rc)) : (s(), o("button", {
                key: 1,
                class: y(["trx-user-menu__item", { "trx-user-menu__item--danger": d.danger }]),
                onClick: (p) => l(d)
              }, [
                d.icon ? (s(), o("i", {
                  key: 0,
                  class: y(d.icon)
                }, null, 2)) : h("", !0),
                e("span", null, v(d.label), 1)
              ], 10, ic))
            ], 64))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), MT = /* @__PURE__ */ M(cc, [["__scopeId", "data-v-919df4aa"]]), uc = { class: "trx-profile-card" }, dc = {
  key: 0,
  class: "trx-profile-card__loading"
}, _c = { class: "trx-profile-card__avatar-wrap" }, pc = ["src", "alt"], vc = {
  key: 1,
  class: "trx-profile-card__initials"
}, mc = { class: "trx-profile-card__name" }, fc = {
  key: 0,
  class: "trx-profile-card__role"
}, xc = {
  key: 1,
  class: "trx-profile-card__email"
}, hc = { class: "trx-profile-card__status" }, $c = {
  key: 2,
  class: "trx-profile-card__stats"
}, gc = { class: "trx-profile-card__stat-value" }, bc = { class: "trx-profile-card__stat-label" }, yc = {
  key: 3,
  class: "trx-profile-card__actions"
}, kc = /* @__PURE__ */ g({
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
      return s(), o("div", uc, [
        t.loading ? (s(), o("div", dc, [...n[0] || (n[0] = [
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--avatar" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--name" }, null, -1),
          e("div", { class: "trx-profile-card__skel trx-profile-card__skel--role" }, null, -1)
        ])])) : (s(), o(V, { key: 1 }, [
          e("div", _c, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name,
              class: "trx-profile-card__avatar"
            }, null, 8, pc)) : (s(), o("span", vc, v(i(t.name)), 1)),
            e("span", {
              class: "trx-profile-card__status-dot",
              style: R({ background: r[t.status ?? "offline"] })
            }, null, 4)
          ]),
          e("h3", mc, v(t.name), 1),
          t.role ? (s(), o("p", fc, v(t.role), 1)) : h("", !0),
          t.email ? (s(), o("p", xc, v(t.email), 1)) : h("", !0),
          e("div", hc, [
            e("span", {
              class: "trx-profile-card__status-label",
              style: R({ color: r[t.status ?? "offline"] })
            }, v(a[t.status ?? "offline"]), 5)
          ]),
          (c = t.stats) != null && c.length ? (s(), o("div", $c, [
            (s(!0), o(V, null, b(t.stats, (u) => (s(), o("div", {
              key: u.label,
              class: "trx-profile-card__stat"
            }, [
              e("span", gc, v(u.value), 1),
              e("span", bc, v(u.label), 1)
            ]))), 128))
          ])) : h("", !0),
          l.$slots.actions ? (s(), o("div", yc, [
            I(l.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 64))
      ]);
    };
  }
}), AT = /* @__PURE__ */ M(kc, [["__scopeId", "data-v-b3cb7a45"]]), wc = /* @__PURE__ */ g({
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
      class: y(["trx-role-badge", `trx-role-badge--${t.size}`]),
      style: R({ "--role-color": P(i).color })
    }, v(P(l)), 7));
  }
}), LT = /* @__PURE__ */ M(wc, [["__scopeId", "data-v-fa2938f0"]]), zT = /* @__PURE__ */ g({
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
}), Tc = { class: "trx-notif-bell" }, Cc = {
  key: 0,
  class: "trx-notif-bell__count"
}, Sc = {
  key: 0,
  class: "trx-notif-bell__panel"
}, Ic = { class: "trx-notif-bell__header" }, Vc = {
  key: 0,
  class: "trx-notif-bell__loading"
}, Bc = {
  key: 1,
  class: "trx-notif-bell__empty"
}, Pc = {
  key: 2,
  class: "trx-notif-bell__list"
}, Mc = ["onClick"], Ac = { class: "trx-notif-bell__item-content" }, Lc = { class: "trx-notif-bell__item-title" }, zc = {
  key: 0,
  class: "trx-notif-bell__item-body"
}, Dc = {
  key: 1,
  class: "trx-notif-bell__item-time"
}, Ec = {
  key: 0,
  class: "trx-notif-bell__item-dot"
}, Rc = /* @__PURE__ */ g({
  __name: "TrxNotificationBell",
  props: {
    items: { default: () => [] },
    count: {},
    loading: { type: Boolean }
  },
  emits: ["read", "read-all", "open"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(!1), n = () => r.count ?? r.items.filter((p) => !p.read).length, c = {
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
    return W(() => document.addEventListener("click", d, !0)), G(() => document.removeEventListener("click", d, !0)), (p, m) => (s(), o("div", Tc, [
      e("button", {
        class: y(["trx-notif-bell__btn", { "trx-notif-bell__btn--active": l.value }]),
        onClick: _
      }, [
        m[1] || (m[1] = e("i", { class: "pi pi-bell" }, null, -1)),
        n() > 0 ? (s(), o("span", Cc, v(n() > 99 ? "99+" : n()), 1)) : h("", !0)
      ], 2),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          l.value ? (s(), o("div", Sc, [
            e("div", Ic, [
              m[2] || (m[2] = e("span", { class: "trx-notif-bell__title" }, "Notificações", -1)),
              n() > 0 ? (s(), o("button", {
                key: 0,
                class: "trx-notif-bell__read-all",
                onClick: m[0] || (m[0] = (x) => i("read-all"))
              }, " Marcar todas como lidas ")) : h("", !0)
            ]),
            t.loading ? (s(), o("div", Vc, [...m[3] || (m[3] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : t.items.length ? (s(), o("div", Pc, [
              (s(!0), o(V, null, b(t.items, (x) => (s(), o("div", {
                key: x.id,
                class: y(["trx-notif-bell__item", { "trx-notif-bell__item--unread": !x.read }]),
                onClick: (f) => i("read", x.id)
              }, [
                e("div", {
                  class: "trx-notif-bell__item-icon",
                  style: R({ color: u[x.type ?? "info"] })
                }, [
                  e("i", {
                    class: y(x.icon ?? c[x.type ?? "info"])
                  }, null, 2)
                ], 4),
                e("div", Ac, [
                  e("p", Lc, v(x.title), 1),
                  x.body ? (s(), o("p", zc, v(x.body), 1)) : h("", !0),
                  x.time ? (s(), o("span", Dc, v(x.time), 1)) : h("", !0)
                ]),
                x.read ? h("", !0) : (s(), o("div", Ec))
              ], 10, Mc))), 128))
            ])) : (s(), o("div", Bc, [...m[4] || (m[4] = [
              e("i", { class: "pi pi-bell-slash" }, null, -1),
              e("span", null, "Nenhuma notificação", -1)
            ])]))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), DT = /* @__PURE__ */ M(Rc, [["__scopeId", "data-v-e26fa7e6"]]), Nc = {
  key: 0,
  class: "trx-conn-status__label"
}, qc = /* @__PURE__ */ g({
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
        class: y(["trx-conn-status__dot", { "trx-conn-status__dot--pulse": r.value.pulse }])
      }, null, 2),
      e("i", {
        class: y(["trx-conn-status__icon", r.value.icon])
      }, null, 2),
      t.showLabel ? (s(), o("span", Nc, v(i.value), 1)) : h("", !0)
    ], 4));
  }
}), ET = /* @__PURE__ */ M(qc, [["__scopeId", "data-v-da8341e1"]]), Fc = { class: "trx-confirm-btn" }, Oc = {
  key: "idle",
  class: "trx-confirm-btn__idle"
}, jc = ["disabled"], Hc = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Uc = {
  key: "confirm",
  class: "trx-confirm-btn__confirm-row"
}, Wc = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(!1);
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
    return (d, p) => (s(), o("div", Fc, [
      O(j, {
        name: "trx-confirm-swap",
        mode: "out-in"
      }, {
        default: B(() => [
          l.value ? (s(), o("div", Uc, [
            p[0] || (p[0] = e("span", { class: "trx-confirm-btn__question" }, "Tem certeza?", -1)),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--confirm",
              onClick: u
            }, v(t.confirmLabel), 1),
            e("button", {
              class: "trx-confirm-btn__btn trx-confirm-btn__btn--cancel",
              onClick: _
            }, v(t.cancelLabel), 1)
          ])) : (s(), o("div", Oc, [
            e("button", {
              class: y(["trx-confirm-btn__btn", `trx-confirm-btn__btn--${t.variant}`]),
              disabled: t.disabled || t.loading,
              onClick: c
            }, [
              t.loading ? (s(), o("i", Hc)) : t.icon ? (s(), o("i", {
                key: 1,
                class: y(t.icon)
              }, null, 2)) : h("", !0),
              e("span", null, v(t.label), 1)
            ], 10, jc)
          ]))
        ]),
        _: 1
      })
    ]));
  }
}), RT = /* @__PURE__ */ M(Wc, [["__scopeId", "data-v-8d2f9f6d"]]), Gc = { key: 1 }, Kc = /* @__PURE__ */ g({
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
            class: y(r.value.icon)
          }, null, 2)) : h("", !0),
          r.value.text ? (s(), o("span", Gc, v(r.value.text), 1)) : h("", !0)
        ], 4)) : h("", !0)
      ]),
      _: 1
    }));
  }
}), NT = /* @__PURE__ */ M(Kc, [["__scopeId", "data-v-74d4ab40"]]), Yc = { class: "trx-chat-bubble__content" }, Jc = {
  key: 0,
  class: "trx-chat-bubble__author"
}, Xc = { class: "trx-chat-bubble__body" }, Qc = {
  key: 0,
  class: "trx-chat-bubble__text"
}, Zc = ["src", "alt"], tu = ["src"], eu = ["href"], su = { class: "trx-chat-bubble__meta" }, au = {
  key: 0,
  class: "trx-chat-bubble__time"
}, lu = /* @__PURE__ */ g({
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
      class: y(["trx-chat-bubble", `trx-chat-bubble--${t.direction}`])
    }, [
      e("div", Yc, [
        t.author && t.direction === "in" ? (s(), o("span", Jc, v(t.author), 1)) : h("", !0),
        e("div", Xc, [
          I(i.$slots, "default", {}, () => [
            t.type === "text" ? (s(), o("p", Qc, v(t.message), 1)) : t.type === "image" && t.fileUrl ? (s(), o("img", {
              key: 1,
              class: "trx-chat-bubble__image",
              src: t.fileUrl,
              alt: t.fileName
            }, null, 8, Zc)) : t.type === "audio" && t.fileUrl ? (s(), o("audio", {
              key: 2,
              class: "trx-chat-bubble__audio",
              src: t.fileUrl,
              controls: ""
            }, null, 8, tu)) : t.type === "file" ? (s(), o("a", {
              key: 3,
              class: "trx-chat-bubble__file",
              href: t.fileUrl,
              target: "_blank",
              rel: "noopener"
            }, [
              l[0] || (l[0] = e("i", { class: "pi pi-file" }, null, -1)),
              e("span", null, v(t.fileName ?? "Arquivo"), 1)
            ], 8, eu)) : h("", !0)
          ], !0)
        ]),
        e("div", su, [
          t.time ? (s(), o("span", au, v(t.time), 1)) : h("", !0),
          t.status && t.direction === "out" ? (s(), o("i", {
            key: 1,
            class: y([a[t.status], "trx-chat-bubble__status"]),
            style: R({ color: r[t.status] })
          }, null, 6)) : h("", !0)
        ])
      ])
    ], 2));
  }
}), nu = /* @__PURE__ */ M(lu, [["__scopeId", "data-v-4e61c314"]]), ou = { class: "trx-chat-window" }, ru = {
  key: 0,
  class: "trx-chat-window__header"
}, iu = { class: "trx-chat-window__avatar" }, cu = ["src", "alt"], uu = { key: 1 }, du = { class: "trx-chat-window__contact-info" }, _u = { class: "trx-chat-window__contact-name" }, pu = {
  key: 0,
  class: "trx-chat-window__contact-status"
}, vu = {
  key: 0,
  class: "trx-chat-window__loading"
}, mu = {
  key: 1,
  class: "trx-chat-window__empty"
}, fu = { class: "trx-chat-window__composer" }, xu = ["disabled"], hu = ["placeholder", "disabled"], $u = ["disabled"], gu = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(""), n = z();
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
    return (p, m) => (s(), o("div", ou, [
      t.contact ? (s(), o("div", ru, [
        e("div", iu, [
          t.contact.avatar ? (s(), o("img", {
            key: 0,
            src: t.contact.avatar,
            alt: t.contact.name
          }, null, 8, cu)) : (s(), o("span", uu, v(d(t.contact.name)), 1))
        ]),
        e("div", du, [
          e("span", _u, v(t.contact.name), 1),
          t.contact.status ?? t.contact.subtitle ? (s(), o("span", pu, v(t.contact.status ?? t.contact.subtitle), 1)) : h("", !0)
        ]),
        I(p.$slots, "header-actions", {}, void 0, !0)
      ])) : h("", !0),
      e("div", {
        ref_key: "messagesEl",
        ref: n,
        class: "trx-chat-window__messages"
      }, [
        t.loading ? (s(), o("div", vu, [...m[2] || (m[2] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : t.messages.length ? h("", !0) : (s(), o("div", mu, [...m[3] || (m[3] = [
          e("i", { class: "pi pi-comments" }, null, -1),
          e("span", null, "Nenhuma mensagem ainda", -1)
        ])])),
        (s(!0), o(V, null, b(t.messages, (x) => (s(), L(nu, Ct({
          key: x.id
        }, { ref_for: !0 }, x), null, 16))), 128))
      ], 512),
      e("div", fu, [
        e("button", {
          class: "trx-chat-window__attach",
          onClick: m[0] || (m[0] = (x) => i("attach")),
          title: "Anexar arquivo",
          disabled: t.disabled
        }, [...m[4] || (m[4] = [
          e("i", { class: "pi pi-paperclip" }, null, -1)
        ])], 8, xu),
        Y(e("textarea", {
          class: "trx-chat-window__input",
          placeholder: t.placeholder,
          "onUpdate:modelValue": m[1] || (m[1] = (x) => l.value = x),
          rows: "1",
          disabled: t.disabled,
          onKeydown: u
        }, null, 40, hu), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-chat-window__send",
          disabled: !l.value.trim() || t.disabled,
          onClick: c,
          title: "Enviar"
        }, [...m[5] || (m[5] = [
          e("i", { class: "pi pi-send" }, null, -1)
        ])], 8, $u)
      ])
    ]));
  }
}), qT = /* @__PURE__ */ M(gu, [["__scopeId", "data-v-5f901218"]]), bu = ["title"], yu = { key: 0 }, ku = /* @__PURE__ */ g({
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
      class: y(["trx-channel-badge", `trx-channel-badge--${t.size}`]),
      style: R({ "--ch-color": P(i).color }),
      title: P(i).label
    }, [
      e("i", {
        class: y(P(i).icon)
      }, null, 2),
      !t.iconOnly && t.showLabel ? (s(), o("span", yu, v(P(i).label), 1)) : h("", !0)
    ], 14, bu));
  }
}), ut = /* @__PURE__ */ M(ku, [["__scopeId", "data-v-90daa003"]]), wu = { class: "trx-contact-card" }, Tu = {
  key: 0,
  class: "trx-contact-card__skeleton"
}, Cu = { class: "trx-contact-card__left" }, Su = { class: "trx-contact-card__avatar" }, Iu = ["src", "alt"], Vu = { key: 1 }, Bu = { class: "trx-contact-card__info" }, Pu = { class: "trx-contact-card__name" }, Mu = {
  key: 0,
  class: "trx-contact-card__detail"
}, Au = {
  key: 1,
  class: "trx-contact-card__detail"
}, Lu = {
  key: 2,
  class: "trx-contact-card__meta"
}, zu = {
  key: 1,
  class: "trx-contact-card__last"
}, Du = { class: "trx-contact-card__actions" }, Eu = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", wu, [
      t.loading ? (s(), o("div", Tu, [...n[3] || (n[3] = [
        e("div", { class: "trx-contact-card__skel trx-contact-card__skel--avatar" }, null, -1),
        e("div", { class: "trx-contact-card__skel-info" }, [
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--name" }),
          e("div", { class: "trx-contact-card__skel trx-contact-card__skel--sub" })
        ], -1)
      ])])) : (s(), o(V, { key: 1 }, [
        e("div", Cu, [
          e("div", Su, [
            t.avatar ? (s(), o("img", {
              key: 0,
              src: t.avatar,
              alt: t.name
            }, null, 8, Iu)) : (s(), o("span", Vu, v(i(t.name)), 1))
          ]),
          e("div", Bu, [
            e("span", Pu, v(t.name), 1),
            t.phone ? (s(), o("span", Mu, [
              n[4] || (n[4] = e("i", { class: "pi pi-phone" }, null, -1)),
              N(" " + v(t.phone), 1)
            ])) : h("", !0),
            t.email ? (s(), o("span", Au, [
              n[5] || (n[5] = e("i", { class: "pi pi-envelope" }, null, -1)),
              N(" " + v(t.email), 1)
            ])) : h("", !0),
            t.channel || t.lastContact ? (s(), o("div", Lu, [
              t.channel ? (s(), L(ut, {
                key: 0,
                channel: t.channel,
                size: "sm"
              }, null, 8, ["channel"])) : h("", !0),
              t.lastContact ? (s(), o("span", zu, v(t.lastContact), 1)) : h("", !0)
            ])) : h("", !0)
          ])
        ]),
        e("div", Du, [
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
}), FT = /* @__PURE__ */ M(Eu, [["__scopeId", "data-v-3bd57308"]]), Ru = { class: "trx-ticket-card__top" }, Nu = { class: "trx-ticket-card__id" }, qu = { class: "trx-ticket-card__badges" }, Fu = ["title"], Ou = { class: "trx-ticket-card__title" }, ju = { class: "trx-ticket-card__meta" }, Hu = {
  key: 0,
  class: "trx-ticket-card__meta-item"
}, Uu = {
  key: 1,
  class: "trx-ticket-card__meta-item"
}, Wu = {
  key: 2,
  class: "trx-ticket-card__meta-item trx-ticket-card__meta-item--time"
}, Gu = /* @__PURE__ */ g({
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
      e("div", Ru, [
        e("span", Nu, "#" + v(t.id), 1),
        e("div", qu, [
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
              class: y(i[t.priority ?? "medium"].icon)
            }, null, 2)
          ], 12, Fu)
        ])
      ]),
      e("p", Ou, v(t.title), 1),
      e("div", ju, [
        t.customer ? (s(), o("span", Hu, [
          c[4] || (c[4] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.customer), 1)
        ])) : h("", !0),
        t.agent ? (s(), o("span", Uu, [
          c[5] || (c[5] = e("i", { class: "pi pi-headphones" }, null, -1)),
          N(" " + v(t.agent), 1)
        ])) : h("", !0),
        t.updatedAt ?? t.createdAt ? (s(), o("span", Wu, [
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
}), OT = /* @__PURE__ */ M(Gu, [["__scopeId", "data-v-c88df6d1"]]), Ku = { class: "trx-call-history" }, Yu = {
  key: 0,
  class: "trx-call-history__empty"
}, Ju = {
  key: 1,
  class: "trx-call-history__empty"
}, Xu = {
  key: 2,
  class: "trx-call-history__list"
}, Qu = ["onClick"], Zu = { class: "trx-call-history__info" }, td = { class: "trx-call-history__name" }, ed = { class: "trx-call-history__sub" }, sd = { class: "trx-call-history__meta" }, ad = { class: "trx-call-history__duration" }, ld = { class: "trx-call-history__time" }, nd = ["onClick"], od = ["onClick"], rd = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", Ku, [
      t.loading ? (s(), o("div", Yu, [...c[1] || (c[1] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", Xu, [
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
              class: y(i[u.direction].icon)
            }, null, 2)
          ], 4),
          e("div", Zu, [
            e("span", td, v(u.callerName ?? u.callerId), 1),
            e("span", ed, v(u.callerId) + " · " + v(i[u.direction].label), 1)
          ]),
          e("div", sd, [
            e("span", ad, v(l(u.duration)), 1),
            e("span", ld, v(u.startedAt), 1)
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
            ])], 8, nd)) : h("", !0),
            e("button", {
              class: "trx-call-history__btn",
              title: "Ligar de volta",
              onClick: (_) => r("callback", u)
            }, [...c[4] || (c[4] = [
              e("i", { class: "pi pi-phone" }, null, -1)
            ])], 8, od)
          ])
        ], 8, Qu))), 128))
      ])) : (s(), o("div", Ju, [...c[2] || (c[2] = [
        e("i", { class: "pi pi-phone-slash" }, null, -1),
        e("span", null, "Nenhuma chamada encontrada", -1)
      ])]))
    ]));
  }
}), jT = /* @__PURE__ */ M(rd, [["__scopeId", "data-v-09f018c0"]]), id = { class: "trx-call-script" }, cd = { class: "trx-call-script__header" }, ud = { class: "trx-call-script__title" }, dd = { class: "trx-call-script__progress" }, _d = { class: "trx-call-script__progress-bar" }, pd = {
  key: 0,
  class: "trx-call-script__step"
}, vd = { class: "trx-call-script__step-header" }, md = { class: "trx-call-script__step-title" }, fd = { class: "trx-call-script__step-content" }, xd = {
  key: 1,
  class: "trx-call-script__empty"
}, hd = { class: "trx-call-script__nav" }, $d = ["disabled"], gd = {
  key: 0,
  class: "pi pi-chevron-right"
}, bd = {
  key: 1,
  class: "pi pi-check"
}, yd = /* @__PURE__ */ g({
  __name: "TrxCallScript",
  props: {
    steps: { default: () => [] },
    title: { default: "Script de Atendimento" }
  },
  emits: ["complete", "stepChange"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(0);
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
    return (_, d) => (s(), o("div", id, [
      e("div", cd, [
        e("span", ud, v(t.title), 1),
        e("span", dd, v(l.value + 1) + " / " + v(t.steps.length), 1)
      ]),
      e("div", _d, [
        e("div", {
          class: "trx-call-script__progress-fill",
          style: R({ width: `${(l.value + 1) / t.steps.length * 100}%` })
        }, null, 4)
      ]),
      t.steps[l.value] ? (s(), o("div", pd, [
        e("div", vd, [
          e("i", {
            class: y(u[t.steps[l.value].type ?? "info"])
          }, null, 2),
          e("h4", md, v(t.steps[l.value].title), 1)
        ]),
        e("p", fd, v(t.steps[l.value].content), 1)
      ])) : (s(), o("div", xd, [...d[0] || (d[0] = [
        e("i", { class: "pi pi-file-edit" }, null, -1),
        e("span", null, "Nenhum script disponível", -1)
      ])])),
      e("div", hd, [
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--secondary",
          disabled: l.value === 0,
          onClick: c
        }, [...d[1] || (d[1] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, $d),
        e("button", {
          class: "trx-call-script__btn trx-call-script__btn--primary",
          onClick: n
        }, [
          N(v(l.value === t.steps.length - 1 ? "Concluir" : "Próximo") + " ", 1),
          l.value < t.steps.length - 1 ? (s(), o("i", gd)) : (s(), o("i", bd))
        ])
      ])
    ]));
  }
}), HT = /* @__PURE__ */ M(yd, [["__scopeId", "data-v-b430310e"]]), kd = ["disabled"], wd = {
  key: 0,
  class: "trx-disposition__selected"
}, Td = {
  key: 1,
  class: "trx-disposition__placeholder"
}, Cd = {
  key: 0,
  class: "trx-disposition__panel"
}, Sd = ["onClick"], Id = {
  key: 1,
  class: "pi pi-pencil trx-disposition__note-icon",
  title: "Requer observação"
}, Vd = {
  key: 0,
  class: "trx-disposition__note-wrap"
}, Bd = ["value"], Pd = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(!1), n = z(r.note ?? ""), c = z(r.dispositions.find((p) => p.id === r.modelValue) ?? null);
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
        class: y(["trx-disposition", { "trx-disposition--disabled": t.disabled }])
      }, [
        e("button", {
          class: "trx-disposition__trigger",
          disabled: t.disabled,
          onClick: m[0] || (m[0] = (f) => l.value = !l.value)
        }, [
          c.value ? (s(), o("span", wd, [
            c.value.icon ? (s(), o("i", {
              key: 0,
              class: y(c.value.icon),
              style: R({ color: c.value.color })
            }, null, 6)) : h("", !0),
            e("span", {
              style: R({ color: c.value.color })
            }, v(c.value.label), 5)
          ])) : (s(), o("span", Td, v(t.placeholder), 1)),
          e("i", {
            class: y(["pi pi-chevron-down trx-disposition__arrow", { "trx-disposition__arrow--open": l.value }])
          }, null, 2)
        ], 8, kd),
        O(j, { name: "trx-dropdown" }, {
          default: B(() => [
            l.value ? (s(), o("div", Cd, [
              (s(!0), o(V, null, b(t.dispositions, (f) => (s(), o("button", {
                key: f.id,
                class: y(["trx-disposition__option", { "trx-disposition__option--active": t.modelValue === f.id }]),
                onClick: (k) => u(f)
              }, [
                f.icon ? (s(), o("i", {
                  key: 0,
                  class: y(f.icon),
                  style: R({ color: f.color })
                }, null, 6)) : h("", !0),
                e("span", {
                  style: R({ color: f.color })
                }, v(f.label), 5),
                f.requireNote ? (s(), o("i", Id)) : h("", !0)
              ], 10, Sd))), 128))
            ])) : h("", !0)
          ]),
          _: 1
        }),
        (x = c.value) != null && x.requireNote ? (s(), o("div", Vd, [
          e("textarea", {
            class: "trx-disposition__note",
            placeholder: "Adicione uma observação...",
            value: n.value,
            rows: "3",
            onInput: m[1] || (m[1] = (f) => {
              n.value = f.target.value, i("update:note", n.value);
            })
          }, null, 40, Bd),
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
}), UT = /* @__PURE__ */ M(Pd, [["__scopeId", "data-v-52a3852f"]]), Md = { class: "trx-dialer-list" }, Ad = {
  key: 0,
  class: "trx-dialer-list__empty"
}, Ld = ["onClick"], zd = { class: "trx-dialer-list__info" }, Dd = { class: "trx-dialer-list__name" }, Ed = { class: "trx-dialer-list__phone" }, Rd = { class: "trx-dialer-list__meta" }, Nd = {
  key: 0,
  class: "trx-dialer-list__attempts"
}, qd = ["onClick"], Fd = ["onClick"], Od = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", Md, [
      t.loading ? (s(), o("div", Ad, [...n[1] || (n[1] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : (s(!0), o(V, { key: 1 }, b(t.contacts, (c) => (s(), o("div", {
        key: c.id,
        class: y(["trx-dialer-list__item", { "trx-dialer-list__item--current": t.currentId === c.id }]),
        onClick: (u) => r("view", c)
      }, [
        e("div", {
          class: "trx-dialer-list__status-icon",
          style: R({ color: i[c.status].color })
        }, [
          e("i", {
            class: y(i[c.status].icon)
          }, null, 2)
        ], 4),
        e("div", zd, [
          e("span", Dd, v(c.name), 1),
          e("span", Ed, v(c.phone), 1)
        ]),
        e("div", Rd, [
          e("span", {
            class: "trx-dialer-list__status-label",
            style: R({ color: i[c.status].color })
          }, v(i[c.status].label), 5),
          c.attempts ? (s(), o("span", Nd, v(c.attempts) + "x", 1)) : h("", !0)
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
          ])], 8, qd)) : h("", !0),
          c.status === "pending" ? (s(), o("button", {
            key: 1,
            class: "trx-dialer-list__btn",
            title: "Pular",
            onClick: (u) => r("skip", c.id)
          }, [...n[3] || (n[3] = [
            e("i", { class: "pi pi-forward" }, null, -1)
          ])], 8, Fd)) : h("", !0)
        ])
      ], 10, Ld))), 128))
    ]));
  }
}), WT = /* @__PURE__ */ M(Od, [["__scopeId", "data-v-179000fd"]]), jd = { class: "trx-ivr" }, Hd = {
  key: 0,
  class: "trx-ivr__toolbar"
}, Ud = ["onClick"], Wd = { class: "trx-ivr__canvas" }, Gd = ["onClick"], Kd = { class: "trx-ivr__node-type" }, Yd = { class: "trx-ivr__node-body" }, Jd = { class: "trx-ivr__node-label" }, Xd = {
  key: 0,
  class: "trx-ivr__node-options"
}, Qd = { class: "trx-ivr__key" }, Zd = {
  key: 0,
  class: "trx-ivr__empty"
}, t_ = /* @__PURE__ */ g({
  __name: "TrxIVRBuilder",
  props: {
    nodes: { default: () => [] },
    readonly: { type: Boolean }
  },
  emits: ["update:nodes", "nodeClick", "nodeAdd"],
  setup(t, { emit: a }) {
    const r = a, i = z(null), l = {
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
    return (u, _) => (s(), o("div", jd, [
      t.readonly ? h("", !0) : (s(), o("div", Hd, [
        _[0] || (_[0] = e("span", { class: "trx-ivr__toolbar-label" }, "Adicionar nó:", -1)),
        (s(), o(V, null, b(n, (d) => e("button", {
          key: d,
          class: "trx-ivr__add-btn",
          style: R({ color: l[d].color, borderColor: l[d].color }),
          onClick: (p) => r("nodeAdd", d)
        }, [
          e("i", {
            class: y(l[d].icon)
          }, null, 2),
          N(" " + v(l[d].label), 1)
        ], 12, Ud)), 64))
      ])),
      e("div", Wd, [
        (s(!0), o(V, null, b(t.nodes, (d) => {
          var p;
          return s(), o("div", {
            key: d.id,
            class: y(["trx-ivr__node", { "trx-ivr__node--selected": i.value === d.id }]),
            style: R({ left: d.x + "px", top: d.y + "px", "--node-color": l[d.type].color }),
            onClick: (m) => c(d)
          }, [
            e("div", {
              class: "trx-ivr__node-header",
              style: R({ background: l[d.type].color })
            }, [
              e("i", {
                class: y([l[d.type].icon, "trx-ivr__node-icon"])
              }, null, 2),
              e("span", Kd, v(l[d.type].label), 1)
            ], 4),
            e("div", Yd, [
              e("span", Jd, v(d.label), 1),
              (p = d.options) != null && p.length ? (s(), o("div", Xd, [
                (s(!0), o(V, null, b(d.options, (m) => (s(), o("div", {
                  key: m.key,
                  class: "trx-ivr__node-option"
                }, [
                  e("kbd", Qd, v(m.key), 1),
                  e("span", null, v(m.label), 1)
                ]))), 128))
              ])) : h("", !0)
            ])
          ], 14, Gd);
        }), 128)),
        t.nodes.length ? h("", !0) : (s(), o("div", Zd, [..._[1] || (_[1] = [
          e("i", {
            class: "pi pi-sitemap",
            style: { "font-size": "2rem", color: "var(--trx-text-secondary)" }
          }, null, -1),
          e("span", null, "Nenhum nó. Adicione um nó para começar.", -1)
        ])]))
      ])
    ]));
  }
}), GT = /* @__PURE__ */ M(t_, [["__scopeId", "data-v-af6b0bd0"]]), e_ = ["width", "height", "viewBox"], s_ = ["cx", "cy", "r", "stroke", "stroke-width"], a_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray"], l_ = { class: "trx-progress-ring__label" }, n_ = {
  key: 0,
  class: "trx-progress-ring__unit"
}, o_ = {
  key: 1,
  class: "trx-progress-ring__text"
}, r_ = /* @__PURE__ */ g({
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
        }, null, 8, s_),
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
        }, null, 12, a_)
      ], 8, e_)),
      e("div", l_, [
        t.showValue ? (s(), o("span", {
          key: 0,
          class: "trx-progress-ring__value",
          style: R({ color: t.color })
        }, [
          N(v(u.value), 1),
          t.unit ? (s(), o("span", n_, v(t.unit), 1)) : h("", !0)
        ], 4)) : h("", !0),
        t.label ? (s(), o("span", o_, v(t.label), 1)) : h("", !0)
      ])
    ], 4));
  }
}), KT = /* @__PURE__ */ M(r_, [["__scopeId", "data-v-a5c29afc"]]), i_ = { class: "trx-ticker" }, c_ = {
  key: 0,
  class: "trx-ticker__label"
}, u_ = { key: 0 }, d_ = { key: 1 }, __ = /* @__PURE__ */ g({
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
    const a = t, r = z("neutral");
    let i;
    Z(() => a.value, (c, u) => {
      c === u || !a.animate || (clearTimeout(i), r.value = c > u ? "up" : "down", i = setTimeout(() => r.value = "neutral", 1500));
    });
    const l = S(() => (a.value ?? 0).toFixed(a.decimals)), n = S(() => r.value === "up" ? "var(--trx-success-color)" : r.value === "down" ? "var(--trx-danger-color)" : "var(--trx-text-primary)");
    return (c, u) => (s(), o("div", i_, [
      t.label ? (s(), o("span", c_, v(t.label), 1)) : h("", !0),
      e("span", {
        class: y(["trx-ticker__value", `trx-ticker__value--${r.value}`]),
        style: R({ color: n.value })
      }, [
        t.prefix ? (s(), o("span", u_, v(t.prefix), 1)) : h("", !0),
        N(v(l.value), 1),
        t.unit ? (s(), o("span", d_, v(t.unit), 1)) : h("", !0)
      ], 6)
    ]));
  }
}), YT = /* @__PURE__ */ M(__, [["__scopeId", "data-v-66246e1c"]]), p_ = { class: "trx-funnel" }, v_ = {
  key: 0,
  class: "trx-funnel__empty"
}, m_ = {
  key: 1,
  class: "trx-funnel__steps"
}, f_ = { class: "trx-funnel__bar-wrap" }, x_ = { class: "trx-funnel__info" }, h_ = { class: "trx-funnel__label" }, $_ = { class: "trx-funnel__numbers" }, g_ = {
  key: 1,
  class: "trx-funnel__pct"
}, b_ = {
  key: 0,
  class: "trx-funnel__drop"
}, y_ = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", p_, [
      t.steps.length ? (s(), o("div", m_, [
        (s(!0), o(V, null, b(l.value, (u, _) => (s(), o("div", {
          key: _,
          class: "trx-funnel__step"
        }, [
          e("div", f_, [
            e("div", {
              class: y(["trx-funnel__bar", { "trx-funnel__bar--animated": t.animated }]),
              style: R({ width: u.pct + "%", background: u.color })
            }, null, 6)
          ]),
          e("div", x_, [
            e("span", h_, v(u.label), 1),
            e("div", $_, [
              t.showValues ? (s(), o("span", {
                key: 0,
                class: "trx-funnel__value",
                style: R({ color: u.color })
              }, v(u.value.toLocaleString("pt-BR")), 5)) : h("", !0),
              t.showPercent ? (s(), o("span", g_, v(u.convRate) + "%", 1)) : h("", !0)
            ])
          ]),
          _ < l.value.length - 1 ? (s(), o("div", b_, [
            c[1] || (c[1] = e("i", { class: "pi pi-arrow-down" }, null, -1)),
            e("span", null, v((l.value[_ + 1].value - u.value).toLocaleString("pt-BR")), 1)
          ])) : h("", !0)
        ]))), 128))
      ])) : (s(), o("div", v_, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-chart-bar" }, null, -1),
        N(" Sem dados ", -1)
      ])]))
    ]));
  }
}), JT = /* @__PURE__ */ M(y_, [["__scopeId", "data-v-2ff82e24"]]), k_ = { class: "trx-line-chart" }, w_ = ["viewBox", "height"], T_ = ["x1", "y1", "x2", "y2"], C_ = ["x", "y"], S_ = ["x", "y"], I_ = { key: 0 }, V_ = ["id"], B_ = ["stop-color"], P_ = ["stop-color"], M_ = ["d", "fill"], A_ = ["d", "stroke"], L_ = ["cx", "cy", "fill"], z_ = {
  key: 0,
  class: "trx-line-chart__legend"
}, _t = 600, D_ = /* @__PURE__ */ g({
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
      const k = r.labels.length - 1 || 1;
      return i.left + f / k * l.value;
    }
    function p(f) {
      return i.top + n.value - (f - u.value) / (_.value - u.value) * n.value;
    }
    function m(f, k) {
      if (!f.length) return "";
      const $ = f.map((A, E) => [d(E), p(A)]);
      let C = `M ${$[0][0]} ${$[0][1]}`;
      if (r.smooth)
        for (let A = 1; A < $.length; A++) {
          const E = ($[A - 1][0] + $[A][0]) / 2;
          C += ` C ${E} ${$[A - 1][1]} ${E} ${$[A][1]} ${$[A][0]} ${$[A][1]}`;
        }
      else
        $.slice(1).forEach(([A, E]) => {
          C += ` L ${A} ${E}`;
        });
      if (k) {
        const A = $[$.length - 1][0], E = i.top + n.value;
        C += ` L ${A} ${E} L ${$[0][0]} ${E} Z`;
      }
      return C;
    }
    const x = S(() => Array.from({ length: 5 }, (k, $) => {
      const C = u.value + $ / 4 * (_.value - u.value);
      return { v: Math.round(C), y: p(C) };
    }));
    return (f, k) => (s(), o("div", k_, [
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
        }, null, 8, T_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: i.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, C_))), 128)),
        (s(!0), o(V, null, b(t.labels, ($, C) => (s(), o("text", {
          key: "x" + C,
          x: d(C),
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($), 9, S_))), 128)),
        (s(!0), o(V, null, b(t.datasets, ($, C) => (s(), o(V, { key: C }, [
          t.filled ? (s(), o("defs", I_, [
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
              }, null, 8, B_),
              e("stop", {
                offset: "100%",
                "stop-color": $.color ?? a[C % a.length],
                "stop-opacity": "0.02"
              }, null, 8, P_)
            ], 8, V_)
          ])) : h("", !0),
          t.filled ? (s(), o("path", {
            key: 1,
            d: m($.data, !0),
            fill: `url(#fill-${C})`,
            stroke: "none"
          }, null, 8, M_)) : h("", !0),
          e("path", {
            d: m($.data, !1),
            stroke: $.color ?? a[C % a.length],
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, A_),
          t.showDots ? (s(!0), o(V, { key: 2 }, b($.data, (A, E) => (s(), o("circle", {
            key: E,
            cx: d(E),
            cy: p(A),
            r: "3",
            fill: $.color ?? a[C % a.length]
          }, null, 8, L_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, w_)),
      t.datasets.length > 1 ? (s(), o("div", z_, [
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
}), XT = /* @__PURE__ */ M(D_, [["__scopeId", "data-v-fe35e9f6"]]), E_ = { class: "trx-bar-chart" }, R_ = ["viewBox", "height"], N_ = ["x1", "y1", "x2", "y2"], q_ = ["x", "y"], F_ = ["x", "y"], O_ = ["x", "y", "width", "height", "fill"], j_ = ["x", "y", "width", "height", "fill"], H_ = ["x", "y", "fill"], U_ = {
  key: 0,
  class: "trx-bar-chart__legend"
}, pt = 600, W_ = /* @__PURE__ */ g({
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
    const a = ["var(--trx-accent-color)", "#60a5fa", "#f472b6", "#fb923c", "#a78bfa"], r = t, i = { top: 20, right: 16, bottom: 36, left: 44 }, l = S(() => pt - i.left - i.right), n = S(() => r.height - i.top - i.bottom), c = S(() => r.stacked ? Math.max(...r.labels.map((k, $) => r.datasets.reduce((C, A) => C + (A.data[$] ?? 0), 0)), 1) : Math.max(...r.datasets.flatMap((k) => k.data), 1)), u = S(() => l.value / (r.labels.length || 1)), _ = S(
      () => r.stacked ? u.value * 0.6 : u.value * 0.8 / (r.datasets.length || 1)
    );
    function d(k, $) {
      const C = i.left + k * u.value;
      return r.stacked ? C + u.value * 0.2 : C + u.value * 0.1 + $ * _.value;
    }
    function p(k, $ = 0) {
      const C = k / c.value * n.value;
      return i.top + n.value - C - $ / c.value * n.value;
    }
    function m(k) {
      return k / c.value * n.value;
    }
    const x = S(
      () => Array.from({ length: 5 }, (k, $) => {
        const C = Math.round($ / 4 * c.value), A = i.top + n.value - $ / 4 * n.value;
        return { v: C, y: A };
      })
    ), f = S(
      () => r.labels.map((k, $) => {
        let C = 0;
        return r.datasets.map((A, E) => {
          const F = A.data[$] ?? 0, q = { v: F, offset: C, di: E };
          return C += F, q;
        });
      })
    );
    return (k, $) => (s(), o("div", E_, [
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
        }, null, 8, N_))), 128)) : h("", !0),
        (s(!0), o(V, null, b(x.value, (C) => (s(), o("text", {
          key: "yl" + C.v,
          x: i.left - 6,
          y: C.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C.v), 9, q_))), 128)),
        (s(!0), o(V, null, b(t.labels, (C, A) => (s(), o("text", {
          key: "xl" + A,
          x: i.left + A * u.value + u.value / 2,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(C), 9, F_))), 128)),
        t.stacked ? (s(!0), o(V, { key: 1 }, b(f.value, (C, A) => (s(), o(V, { key: A }, [
          (s(!0), o(V, null, b(C, (E) => (s(), o("rect", {
            key: E.di,
            x: d(A, 0),
            y: p(E.v, E.offset),
            width: _.value,
            height: m(E.v),
            fill: t.datasets[E.di].color ?? a[E.di % a.length],
            rx: "2"
          }, null, 8, O_))), 128))
        ], 64))), 128)) : (s(!0), o(V, { key: 2 }, b(t.datasets, (C, A) => (s(), o(V, { key: A }, [
          (s(!0), o(V, null, b(C.data, (E, F) => (s(), o("rect", {
            key: F,
            x: d(F, A),
            y: p(E),
            width: _.value,
            height: m(E),
            fill: C.color ?? a[A % a.length],
            rx: "2"
          }, null, 8, j_))), 128)),
          t.showValues ? (s(!0), o(V, { key: 0 }, b(C.data, (E, F) => (s(), o("text", {
            key: "val" + F,
            x: d(F, A) + _.value / 2,
            y: p(E) - 3,
            "text-anchor": "middle",
            "font-size": "9",
            fill: C.color ?? a[A % a.length]
          }, v(E), 9, H_))), 128)) : h("", !0)
        ], 64))), 128))
      ], 8, R_)),
      t.datasets.length > 1 ? (s(), o("div", U_, [
        (s(!0), o(V, null, b(t.datasets, (C, A) => (s(), o("div", {
          key: A,
          class: "trx-bar-chart__legend-item"
        }, [
          e("span", {
            class: "trx-bar-chart__legend-dot",
            style: R({ background: C.color ?? a[A % a.length] })
          }, null, 4),
          N(" " + v(C.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), QT = /* @__PURE__ */ M(W_, [["__scopeId", "data-v-cad2549b"]]), G_ = { class: "trx-donut" }, K_ = { class: "trx-donut__chart" }, Y_ = ["width", "height", "viewBox"], J_ = ["cx", "cy", "r", "stroke-width"], X_ = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Q_ = ["x", "y"], Z_ = ["x", "y"], tp = {
  key: 0,
  class: "trx-donut__legend"
}, ep = { class: "trx-donut__legend-label" }, sp = { class: "trx-donut__legend-pct" }, ap = /* @__PURE__ */ g({
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
        const x = p.value / u.value, f = x * c.value, k = c.value - f, $ = { ...p, dash: f, gap: k, offset: d, color: p.color ?? a[m % a.length], pct: Math.round(x * 100) };
        return d += f, $;
      });
    });
    return (d, p) => (s(), o("div", G_, [
      e("div", K_, [
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
          }, null, 8, J_),
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
          }, null, 12, X_))), 128)),
          e("text", {
            x: i.value,
            y: l.value - (t.sublabel ? 8 : 4),
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            fill: "var(--trx-text-primary)"
          }, v(t.label ?? u.value.toLocaleString("pt-BR")), 9, Q_),
          t.sublabel ? (s(), o("text", {
            key: 0,
            x: i.value,
            y: l.value + 14,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v(t.sublabel), 9, Z_)) : h("", !0)
        ], 8, Y_))
      ]),
      t.showLegend ? (s(), o("div", tp, [
        (s(!0), o(V, null, b(_.value, (m, x) => (s(), o("div", {
          key: x,
          class: "trx-donut__legend-item"
        }, [
          e("span", {
            class: "trx-donut__legend-dot",
            style: R({ background: m.color })
          }, null, 4),
          e("span", ep, v(m.label), 1),
          e("span", sp, v(m.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), ZT = /* @__PURE__ */ M(ap, [["__scopeId", "data-v-962cda3e"]]), lp = ["value", "placeholder", "disabled"], np = /* @__PURE__ */ g({
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
      class: y(["trx-currency", { "trx-currency--invalid": t.invalid, "trx-currency--disabled": t.disabled }])
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
      }, null, 40, lp)
    ], 2));
  }
}), tC = /* @__PURE__ */ M(np, [["__scopeId", "data-v-4e40eeca"]]), op = ["disabled"], rp = { class: "trx-color-picker__hex" }, ip = {
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
], vp = /* @__PURE__ */ g({
  __name: "TrxColorPicker",
  props: {
    modelValue: { default: "#10b981" },
    presets: { default: () => pp },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = a, i = z(!1);
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
      class: y(["trx-color-picker", { "trx-color-picker--disabled": t.disabled }])
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
        e("span", rp, v(t.modelValue), 1),
        _[2] || (_[2] = e("i", { class: "pi pi-chevron-down trx-color-picker__arrow" }, null, -1))
      ], 8, op),
      O(j, { name: "trx-dropdown" }, {
        default: B(() => [
          i.value ? (s(), o("div", ip, [
            e("div", cp, [
              (s(!0), o(V, null, b(t.presets, (d) => (s(), o("button", {
                key: d,
                class: y(["trx-color-picker__preset", { "trx-color-picker__preset--active": t.modelValue === d }]),
                style: R({ background: d, borderColor: d === "#ffffff" ? "#e5e7eb" : d }),
                title: d,
                onClick: (p) => l(d)
              }, null, 14, up))), 128))
            ]),
            e("div", dp, [
              _[3] || (_[3] = e("span", null, "Personalizado:", -1)),
              e("input", {
                type: "color",
                class: "trx-color-picker__native",
                value: t.modelValue,
                onInput: n,
                onChange: _[1] || (_[1] = (d) => i.value = !1)
              }, null, 40, _p)
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), eC = /* @__PURE__ */ M(vp, [["__scopeId", "data-v-7ca62925"]]), mp = ["disabled", "onClick"], fp = ["placeholder", "disabled"], xp = {
  key: 0,
  class: "trx-tag-input__suggestions"
}, hp = ["onMousedown"], $p = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z("");
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
    const _ = z([]);
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
        class: y(["trx-tag-input", { "trx-tag-input--invalid": t.invalid, "trx-tag-input--disabled": t.disabled }]),
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
          ])], 8, mp)
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
        }, null, 40, fp)), [
          [J, l.value]
        ]) : h("", !0)
      ], 2),
      _.value.length ? (s(), o("div", xp, [
        (s(!0), o(V, null, b(_.value, (x) => (s(), o("button", {
          key: x,
          class: "trx-tag-input__suggestion",
          onMousedown: H((f) => n(x), ["prevent"])
        }, v(x), 41, hp))), 128))
      ])) : h("", !0)
    ], 64));
  }
}), sC = /* @__PURE__ */ M($p, [["__scopeId", "data-v-0a95e840"]]), gp = ["type", "value", "disabled", "onInput", "onKeydown"], bp = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z([]);
    function n(d) {
      return (r.modelValue ?? "")[d] ?? "";
    }
    function c(d, p) {
      var k;
      const m = d.target.value.replace(/\D/g, "").slice(-1), x = (r.modelValue ?? "").split("");
      x[p] = m;
      const f = x.join("").slice(0, r.length);
      i("update:modelValue", f), m && p < r.length - 1 && ((k = l.value[p + 1]) == null || k.focus()), f.length === r.length && i("complete", f);
    }
    function u(d, p) {
      var m, x, f;
      if (d.key === "Backspace") {
        const k = (r.modelValue ?? "").split("");
        !k[p] && p > 0 ? ((m = l.value[p - 1]) == null || m.focus(), k[p - 1] = "") : k[p] = "", i("update:modelValue", k.join(""));
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
      class: y(["trx-otp", { "trx-otp--invalid": t.invalid }])
    }, [
      (s(!0), o(V, null, b(t.length, (m) => (s(), o("input", {
        key: m - 1,
        ref_for: !0,
        ref: (x) => {
          x && (l.value[m - 1] = x);
        },
        class: y(["trx-otp__cell", { "trx-otp__cell--filled": !!n(m - 1) }]),
        type: t.masked ? "password" : "text",
        inputmode: "numeric",
        maxlength: "1",
        value: n(m - 1),
        disabled: t.disabled,
        onInput: (x) => c(x, m - 1),
        onKeydown: (x) => u(x, m - 1),
        onPaste: _,
        onFocus: p[0] || (p[0] = (x) => x.target.select())
      }, null, 42, gp))), 128))
    ], 2));
  }
}), aC = /* @__PURE__ */ M(bp, [["__scopeId", "data-v-a732ce3a"]]), yp = {
  key: 0,
  class: "trx-sig-pad__placeholder"
}, kp = { class: "trx-sig-pad__footer" }, wp = ["disabled"], Tp = /* @__PURE__ */ g({
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
    const i = t, l = r, n = ot("canvas"), c = z(!1), u = z(!0);
    function _() {
      var $;
      return (($ = n.value) == null ? void 0 : $.getContext("2d")) ?? null;
    }
    function d($) {
      const C = n.value.getBoundingClientRect(), A = "touches" in $ ? $.touches[0] : $;
      return { x: A.clientX - C.left, y: A.clientY - C.top };
    }
    function p($) {
      if (i.disabled) return;
      $.preventDefault(), c.value = !0;
      const C = _();
      if (!C) return;
      const { x: A, y: E } = d($);
      C.beginPath(), C.moveTo(A, E);
    }
    function m($) {
      if (!c.value || i.disabled) return;
      $.preventDefault();
      const C = _();
      if (!C) return;
      const { x: A, y: E } = d($);
      C.lineTo(A, E), C.strokeStyle = i.lineColor, C.lineWidth = i.lineWidth, C.lineCap = "round", C.lineJoin = "round", C.stroke(), u.value = !1;
    }
    function x() {
      var $;
      c.value && (c.value = !1, l("change", u.value ? null : (($ = n.value) == null ? void 0 : $.toDataURL()) ?? null));
    }
    function f() {
      const $ = _();
      !$ || !n.value || ($.clearRect(0, 0, n.value.width, n.value.height), u.value = !0, l("clear"), l("change", null));
    }
    function k() {
      var $;
      return u.value ? null : (($ = n.value) == null ? void 0 : $.toDataURL()) ?? null;
    }
    return W(() => {
      const $ = _();
      if (!$ || !n.value) return;
      const C = window.devicePixelRatio || 1;
      n.value.width = i.width * C, n.value.height = i.height * C, $.scale(C, C);
    }), a({ clear: f, toDataURL: k }), ($, C) => (s(), o("div", {
      class: y(["trx-sig-pad", { "trx-sig-pad--disabled": t.disabled }])
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
        u.value ? (s(), o("span", yp, v(t.placeholder), 1)) : h("", !0)
      ], 4),
      e("div", kp, [
        C[1] || (C[1] = e("span", { class: "trx-sig-pad__line-label" }, "Assinatura", -1)),
        e("button", {
          class: "trx-sig-pad__clear",
          disabled: u.value || t.disabled,
          onClick: f
        }, [...C[0] || (C[0] = [
          e("i", { class: "pi pi-trash" }, null, -1),
          N(" Limpar ", -1)
        ])], 8, wp)
      ])
    ], 2));
  }
}), lC = /* @__PURE__ */ M(Tp, [["__scopeId", "data-v-49c2b653"]]), Cp = { class: "trx-md-editor__bar" }, Sp = { class: "trx-md-editor__toolbar" }, Ip = ["title", "disabled", "onClick"], Vp = { class: "trx-md-editor__modes" }, Bp = ["onClick"], Pp = ["value", "placeholder", "disabled"], Mp = ["innerHTML"], Ap = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z("write"), n = S(() => r.modelValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm, "<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm, "<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm, "<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>").replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>').replace(/\n/g, "<br>"));
    function c(_, d = "") {
      const p = document.querySelector(".trx-md-editor__textarea");
      if (!p) return;
      const m = p.selectionStart, x = p.selectionEnd, f = p.value.slice(m, x), k = p.value.slice(0, m) + _ + f + d + p.value.slice(x);
      i("update:modelValue", k), setTimeout(() => {
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
      class: y(["trx-md-editor", { "trx-md-editor--disabled": t.disabled }])
    }, [
      e("div", Cp, [
        e("div", Sp, [
          (s(), o(V, null, b(u, (p) => e("button", {
            key: p.title,
            class: "trx-md-editor__tool-btn",
            title: p.title,
            disabled: t.disabled,
            onClick: H((m) => p.action(), ["prevent"])
          }, [
            e("i", {
              class: y(p.icon)
            }, null, 2)
          ], 8, Ip)), 64))
        ]),
        e("div", Vp, [
          (s(), o(V, null, b(["write", "split", "preview"], (p) => e("button", {
            key: p,
            class: y(["trx-md-editor__mode-btn", { active: l.value === p }]),
            onClick: (m) => l.value = p
          }, v(p === "write" ? "Editar" : p === "preview" ? "Preview" : "Split"), 11, Bp)), 64))
        ])
      ]),
      e("div", {
        class: y(["trx-md-editor__body", `trx-md-editor__body--${l.value}`])
      }, [
        l.value !== "preview" ? (s(), o("textarea", {
          key: 0,
          class: "trx-md-editor__textarea",
          value: t.modelValue,
          placeholder: t.placeholder,
          disabled: t.disabled,
          style: R({ minHeight: t.minHeight, maxHeight: t.maxHeight }),
          onInput: d[0] || (d[0] = (p) => i("update:modelValue", p.target.value))
        }, null, 44, Pp)) : h("", !0),
        l.value !== "write" ? (s(), o("div", {
          key: 1,
          class: "trx-md-editor__preview",
          style: R({ minHeight: t.minHeight }),
          innerHTML: n.value
        }, null, 12, Mp)) : h("", !0)
      ], 2)
    ], 2));
  }
}), nC = /* @__PURE__ */ M(Ap, [["__scopeId", "data-v-c4b3f5b2"]]), Lp = { class: "trx-json-editor__bar" }, zp = { class: "trx-json-editor__actions" }, Dp = ["disabled"], Ep = ["disabled"], Rp = { class: "trx-json-editor__body" }, Np = { class: "trx-json-editor__lines" }, qp = ["value", "disabled"], Fp = {
  key: 0,
  class: "trx-json-editor__error"
}, Op = /* @__PURE__ */ g({
  __name: "TrxJsonEditor",
  props: {
    modelValue: { default: () => ({}) },
    minHeight: { default: "180px" },
    disabled: { type: Boolean },
    validateOnChange: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "error"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(JSON.stringify(r.modelValue, null, 2)), n = z("");
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
      class: y(["trx-json-editor", { "trx-json-editor--error": n.value, "trx-json-editor--disabled": t.disabled }])
    }, [
      e("div", Lp, [
        x[2] || (x[2] = e("span", { class: "trx-json-editor__lang" }, "JSON", -1)),
        e("div", zp, [
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: _
          }, [...x[0] || (x[0] = [
            e("i", { class: "pi pi-align-left" }, null, -1),
            N(" Formatar ", -1)
          ])], 8, Dp),
          e("button", {
            class: "trx-json-editor__btn",
            disabled: t.disabled,
            onClick: d
          }, [...x[1] || (x[1] = [
            e("i", { class: "pi pi-minus" }, null, -1),
            N(" Minificar ", -1)
          ])], 8, Ep)
        ])
      ]),
      e("div", Rp, [
        e("div", Np, [
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
        }, null, 44, qp)
      ]),
      n.value ? (s(), o("div", Fp, [
        x[3] || (x[3] = e("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
        N(" " + v(n.value), 1)
      ])) : h("", !0)
    ], 2));
  }
}), oC = /* @__PURE__ */ M(Op, [["__scopeId", "data-v-04c442f5"]]), jp = ["title"], Hp = { class: "trx-sidebar-nav__items" }, Up = {
  key: 0,
  class: "trx-sidebar-nav__sep"
}, Wp = { key: 1 }, Gp = ["title", "onClick"], Kp = {
  key: 1,
  class: "trx-sidebar-nav__label"
}, Yp = {
  key: 2,
  class: "trx-sidebar-nav__badge"
}, Jp = {
  key: 0,
  class: "trx-sidebar-nav__children"
}, Xp = ["onClick"], Qp = {
  key: 1,
  class: "trx-sidebar-nav__badge"
}, Zp = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(/* @__PURE__ */ new Set());
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
      class: y(["trx-sidebar-nav", { "trx-sidebar-nav--collapsed": t.collapsed }]),
      style: R({ width: t.collapsed ? t.collapsedWidth : t.width })
    }, [
      e("button", {
        class: "trx-sidebar-nav__toggle",
        onClick: d[0] || (d[0] = (p) => i("update:collapsed", !t.collapsed)),
        title: t.collapsed ? "Expandir" : "Recolher"
      }, [
        e("i", {
          class: y(t.collapsed ? "pi pi-angle-right" : "pi pi-angle-left")
        }, null, 2)
      ], 8, jp),
      e("div", Hp, [
        (s(!0), o(V, null, b(t.items, (p) => {
          var m, x;
          return s(), o(V, {
            key: p.key
          }, [
            p.separator ? (s(), o("hr", Up)) : (s(), o("div", Wp, [
              e("button", {
                class: y(["trx-sidebar-nav__item", {
                  "trx-sidebar-nav__item--active": u(p),
                  "trx-sidebar-nav__item--open": l.value.has(p.key)
                }]),
                title: t.collapsed ? p.label : void 0,
                onClick: (f) => c(p)
              }, [
                p.icon ? (s(), o("i", {
                  key: 0,
                  class: y([p.icon, "trx-sidebar-nav__icon"])
                }, null, 2)) : h("", !0),
                t.collapsed ? h("", !0) : (s(), o("span", Kp, v(p.label), 1)),
                !t.collapsed && p.badge ? (s(), o("span", Yp, v(p.badge), 1)) : h("", !0),
                !t.collapsed && ((m = p.children) != null && m.length) ? (s(), o("i", {
                  key: 3,
                  class: y(["pi pi-chevron-down trx-sidebar-nav__arrow", { "trx-sidebar-nav__arrow--open": l.value.has(p.key) }])
                }, null, 2)) : h("", !0)
              ], 10, Gp),
              !t.collapsed && ((x = p.children) != null && x.length) && l.value.has(p.key) ? (s(), o("div", Jp, [
                (s(!0), o(V, null, b(p.children, (f) => (s(), o("button", {
                  key: f.key,
                  class: y(["trx-sidebar-nav__child", { "trx-sidebar-nav__child--active": t.modelValue === f.key }]),
                  onClick: (k) => c(f)
                }, [
                  f.icon ? (s(), o("i", {
                    key: 0,
                    class: y(f.icon)
                  }, null, 2)) : h("", !0),
                  e("span", null, v(f.label), 1),
                  f.badge ? (s(), o("span", Qp, v(f.badge), 1)) : h("", !0)
                ], 10, Xp))), 128))
              ])) : h("", !0)
            ]))
          ], 64);
        }), 128))
      ])
    ], 6));
  }
}), rC = /* @__PURE__ */ M(Zp, [["__scopeId", "data-v-f2db473b"]]), tv = { class: "trx-palette__search" }, ev = ["placeholder"], sv = { class: "trx-palette__results" }, av = { class: "trx-palette__group-label" }, lv = ["onClick", "onMouseenter"], nv = { class: "trx-palette__item-info" }, ov = { class: "trx-palette__item-label" }, rv = {
  key: 0,
  class: "trx-palette__item-desc"
}, iv = {
  key: 1,
  class: "trx-palette__shortcut"
}, cv = {
  key: 1,
  class: "trx-palette__empty"
}, uv = /* @__PURE__ */ g({
  __name: "TrxCommandPalette",
  props: {
    commands: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "Pesquisar comandos..." }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(""), n = z(0), c = z(), u = S(() => {
      if (!l.value) return r.commands;
      const f = l.value.toLowerCase();
      return r.commands.filter(
        (k) => {
          var $;
          return k.label.toLowerCase().includes(f) || (($ = k.description) == null ? void 0 : $.toLowerCase().includes(f));
        }
      );
    }), _ = S(() => {
      const f = {};
      for (const k of u.value) {
        const $ = k.group ?? "Geral";
        f[$] || (f[$] = []), f[$].push(k);
      }
      return f;
    }), d = S(() => u.value);
    Z(() => r.modelValue, async (f) => {
      var k;
      f && (l.value = "", n.value = 0, await nt(), (k = c.value) == null || k.focus());
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
    return (f, k) => (s(), L(et, { to: "body" }, [
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
              e("div", tv, [
                k[2] || (k[2] = e("i", { class: "pi pi-search trx-palette__search-icon" }, null, -1)),
                Y(e("input", {
                  ref_key: "searchInput",
                  ref: c,
                  class: "trx-palette__input",
                  placeholder: t.placeholder,
                  "onUpdate:modelValue": k[0] || (k[0] = ($) => l.value = $),
                  onInput: k[1] || (k[1] = ($) => n.value = 0)
                }, null, 40, ev), [
                  [J, l.value]
                ]),
                e("kbd", {
                  class: "trx-palette__esc",
                  onClick: p
                }, "Esc")
              ]),
              e("div", sv, [
                u.value.length ? (s(!0), o(V, { key: 0 }, b(_.value, ($, C) => (s(), o(V, { key: C }, [
                  e("div", av, v(C), 1),
                  (s(!0), o(V, null, b($, (A) => (s(), o("button", {
                    key: A.id,
                    class: y(["trx-palette__item", { "trx-palette__item--active": d.value.indexOf(A) === n.value }]),
                    onClick: (E) => m(A),
                    onMouseenter: (E) => n.value = d.value.indexOf(A)
                  }, [
                    A.icon ? (s(), o("i", {
                      key: 0,
                      class: y([A.icon, "trx-palette__item-icon"])
                    }, null, 2)) : h("", !0),
                    e("div", nv, [
                      e("span", ov, v(A.label), 1),
                      A.description ? (s(), o("span", rv, v(A.description), 1)) : h("", !0)
                    ]),
                    A.shortcut ? (s(), o("kbd", iv, v(A.shortcut), 1)) : h("", !0)
                  ], 42, lv))), 128))
                ], 64))), 128)) : (s(), o("div", cv, [...k[3] || (k[3] = [
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
}), iC = /* @__PURE__ */ M(uv, [["__scopeId", "data-v-b994f6f6"]]), dv = { class: "trx-wizard" }, _v = { class: "trx-wizard__steps" }, pv = ["onClick"], vv = { class: "trx-wizard__step-circle" }, mv = {
  key: 0,
  class: "pi pi-check"
}, fv = { key: 2 }, xv = { class: "trx-wizard__step-info" }, hv = { class: "trx-wizard__step-label" }, $v = {
  key: 0,
  class: "trx-wizard__step-optional"
}, gv = { class: "trx-wizard__content" }, bv = { class: "trx-wizard__footer" }, yv = ["disabled"], kv = { class: "trx-wizard__counter" }, wv = ["disabled"], Tv = {
  key: 0,
  class: "pi pi-spin pi-spinner"
}, Cv = {
  key: 0,
  class: "pi pi-chevron-right"
}, Sv = {
  key: 1,
  class: "pi pi-check"
}, Iv = /* @__PURE__ */ g({
  __name: "TrxWizard",
  props: {
    steps: { default: () => [] },
    modelValue: { default: 0 },
    canGoNext: { type: Boolean, default: !0 },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "next", "prev", "finish"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(/* @__PURE__ */ new Set([0]));
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
    return (p, m) => (s(), o("div", dv, [
      e("div", _v, [
        (s(!0), o(V, null, b(t.steps, (x, f) => (s(), o(V, {
          key: x.key
        }, [
          e("div", {
            class: y(["trx-wizard__step", {
              "trx-wizard__step--active": f === t.modelValue,
              "trx-wizard__step--completed": f < (t.modelValue ?? 0),
              "trx-wizard__step--visited": l.value.has(f)
            }]),
            onClick: (k) => n(f)
          }, [
            e("div", vv, [
              f < (t.modelValue ?? 0) ? (s(), o("i", mv)) : x.icon ? (s(), o("i", {
                key: 1,
                class: y(x.icon)
              }, null, 2)) : (s(), o("span", fv, v(f + 1), 1))
            ]),
            e("div", xv, [
              e("span", hv, v(x.label), 1),
              x.optional ? (s(), o("span", $v, "Opcional")) : h("", !0)
            ])
          ], 10, pv),
          f < t.steps.length - 1 ? (s(), o("div", {
            key: 0,
            class: y(["trx-wizard__connector", { "trx-wizard__connector--done": f < (t.modelValue ?? 0) }])
          }, null, 2)) : h("", !0)
        ], 64))), 128))
      ]),
      e("div", gv, [
        I(p.$slots, "default", {
          step: t.steps[t.modelValue ?? 0],
          index: t.modelValue ?? 0
        }, void 0, !0)
      ]),
      e("div", bv, [
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--secondary",
          disabled: _.value,
          onClick: u
        }, [...m[0] || (m[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1),
          N(" Anterior ", -1)
        ])], 8, yv),
        e("span", kv, v((t.modelValue ?? 0) + 1) + " / " + v(t.steps.length), 1),
        e("button", {
          class: "trx-wizard__btn trx-wizard__btn--primary",
          disabled: !t.canGoNext || t.loading,
          onClick: c
        }, [
          t.loading ? (s(), o("i", Tv)) : (s(), o(V, { key: 1 }, [
            N(v(d.value ? "Concluir" : "Próximo") + " ", 1),
            d.value ? (s(), o("i", Sv)) : (s(), o("i", Cv))
          ], 64))
        ], 8, wv)
      ])
    ]));
  }
}), cC = /* @__PURE__ */ M(Iv, [["__scopeId", "data-v-25e71378"]]), Vv = { class: "trx-onboarding" }, Bv = { class: "trx-onboarding__header" }, Pv = { class: "trx-onboarding__title-top" }, Mv = {
  key: 0,
  class: "trx-onboarding__body"
}, Av = {
  key: 0,
  class: "trx-onboarding__image-wrap"
}, Lv = ["src", "alt"], zv = {
  key: 1,
  class: "trx-onboarding__icon-wrap"
}, Dv = { class: "trx-onboarding__step-title" }, Ev = { class: "trx-onboarding__step-desc" }, Rv = { class: "trx-onboarding__dots" }, Nv = ["onClick"], qv = { class: "trx-onboarding__footer" }, Fv = { key: 1 }, Ov = {
  key: 0,
  class: "pi pi-arrow-right"
}, jv = {
  key: 1,
  class: "pi pi-check"
}, Hv = /* @__PURE__ */ g({
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
    return (p, m) => (s(), o("div", Vv, [
      e("div", Bv, [
        e("span", Pv, v(t.title), 1),
        t.skippable && !c.value ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__skip",
          onClick: m[0] || (m[0] = (x) => i("skip"))
        }, v(t.skipLabel), 1)) : h("", !0)
      ]),
      n.value ? (s(), o("div", Mv, [
        n.value.image ? (s(), o("div", Av, [
          e("img", {
            src: n.value.image,
            alt: n.value.title,
            class: "trx-onboarding__image"
          }, null, 8, Lv)
        ])) : n.value.icon ? (s(), o("div", zv, [
          e("i", {
            class: y([n.value.icon, "trx-onboarding__icon"])
          }, null, 2)
        ])) : h("", !0),
        e("h2", Dv, v(n.value.title), 1),
        e("p", Ev, v(n.value.description), 1)
      ])) : h("", !0),
      e("div", Rv, [
        (s(!0), o(V, null, b(t.steps, (x, f) => (s(), o("button", {
          key: f,
          class: y(["trx-onboarding__dot", { "trx-onboarding__dot--active": f === l.value, "trx-onboarding__dot--done": f < l.value }]),
          onClick: (k) => d(f)
        }, null, 10, Nv))), 128))
      ]),
      e("div", qv, [
        l.value > 0 ? (s(), o("button", {
          key: 0,
          class: "trx-onboarding__btn trx-onboarding__btn--prev",
          onClick: _
        }, [...m[1] || (m[1] = [
          e("i", { class: "pi pi-arrow-left" }, null, -1),
          N(" Anterior ", -1)
        ])])) : (s(), o("span", Fv)),
        e("button", {
          class: "trx-onboarding__btn trx-onboarding__btn--next",
          onClick: u
        }, [
          N(v(c.value ? t.finishLabel : "Próximo") + " ", 1),
          c.value ? (s(), o("i", jv)) : (s(), o("i", Ov))
        ])
      ])
    ]));
  }
}), uC = /* @__PURE__ */ M(Hv, [["__scopeId", "data-v-4359f9ee"]]), Uv = { class: "trx-kanban" }, Wv = ["onDrop"], Gv = { class: "trx-kanban__col-header" }, Kv = { class: "trx-kanban__col-label" }, Yv = { class: "trx-kanban__col-count" }, Jv = { key: 0 }, Xv = { class: "trx-kanban__cards" }, Qv = ["onDragstart", "onClick"], Zv = { class: "trx-kanban__card-header" }, tm = { class: "trx-kanban__card-title" }, em = ["title"], sm = {
  key: 0,
  class: "trx-kanban__card-desc"
}, am = {
  key: 1,
  class: "trx-kanban__card-tags"
}, lm = {
  key: 2,
  class: "trx-kanban__card-assignee"
}, nm = { class: "trx-kanban__card-avatar" }, om = { class: "trx-kanban__card-assignee-name" }, rm = {
  key: 0,
  class: "trx-kanban__col-empty"
}, im = /* @__PURE__ */ g({
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
    return (u, _) => (s(), o("div", Uv, [
      (s(!0), o(V, null, b(t.columns, (d) => (s(), o("div", {
        key: d.id,
        class: "trx-kanban__col",
        onDragover: _[0] || (_[0] = H(() => {
        }, ["prevent"])),
        onDrop: (p) => c(d.id)
      }, [
        e("div", Gv, [
          e("div", {
            class: "trx-kanban__col-dot",
            style: R({ background: d.color ?? "var(--trx-accent-color)" })
          }, null, 4),
          e("span", Kv, v(d.label), 1),
          e("span", Yv, [
            N(v(d.cards.length), 1),
            d.limit ? (s(), o("span", Jv, "/" + v(d.limit), 1)) : h("", !0)
          ])
        ]),
        e("div", Xv, [
          (s(!0), o(V, null, b(d.cards, (p) => {
            var m;
            return s(), o("div", {
              key: p.id,
              class: "trx-kanban__card",
              draggable: "true",
              onDragstart: (x) => n(p.id, d.id),
              onClick: (x) => r("cardClick", p, d.id)
            }, [
              e("div", Zv, [
                e("p", tm, v(p.title), 1),
                p.priority ? (s(), o("span", {
                  key: 0,
                  class: "trx-kanban__card-priority",
                  style: R({ color: i[p.priority] }),
                  title: p.priority
                }, "●", 12, em)) : h("", !0)
              ]),
              p.description ? (s(), o("p", sm, v(p.description), 1)) : h("", !0),
              (m = p.tags) != null && m.length ? (s(), o("div", am, [
                (s(!0), o(V, null, b(p.tags, (x) => (s(), o("span", {
                  key: x,
                  class: "trx-kanban__card-tag"
                }, v(x), 1))), 128))
              ])) : h("", !0),
              p.assignee ? (s(), o("div", lm, [
                e("span", nm, v(p.assignee.split(" ").map((x) => x[0]).join("").slice(0, 2).toUpperCase()), 1),
                e("span", om, v(p.assignee), 1)
              ])) : h("", !0)
            ], 40, Qv);
          }), 128)),
          d.cards.length ? h("", !0) : (s(), o("div", rm, [..._[1] || (_[1] = [
            e("i", { class: "pi pi-inbox" }, null, -1),
            e("span", null, "Vazio", -1)
          ])]))
        ])
      ], 40, Wv))), 128))
    ]));
  }
}), dC = /* @__PURE__ */ M(im, [["__scopeId", "data-v-9ad32a8a"]]), cm = { class: "trx-calendar" }, um = { class: "trx-calendar__header" }, dm = { class: "trx-calendar__month" }, _m = { class: "trx-calendar__grid" }, pm = ["onClick"], vm = {
  key: 0,
  class: "trx-calendar__day"
}, mm = {
  key: 1,
  class: "trx-calendar__events"
}, fm = ["title", "onClick"], xm = {
  key: 0,
  class: "trx-calendar__more"
}, hm = /* @__PURE__ */ g({
  __name: "TrxCalendarView",
  props: {
    events: { default: () => [] },
    modelValue: {},
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "eventClick", "dateClick"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = /* @__PURE__ */ new Date(), n = z(l.getFullYear()), c = z(l.getMonth()), u = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], _ = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], d = S(() => new Date(n.value, c.value, 1).getDay()), p = S(() => new Date(n.value, c.value + 1, 0).getDate()), m = S(() => {
      const A = [];
      for (let E = 0; E < d.value; E++) A.push({ day: null, dateStr: "" });
      for (let E = 1; E <= p.value; E++) {
        const F = String(c.value + 1).padStart(2, "0"), q = String(E).padStart(2, "0");
        A.push({ day: E, dateStr: `${n.value}-${F}-${q}` });
      }
      return A;
    }), x = S(() => {
      const A = {};
      for (const E of r.events)
        A[E.date] || (A[E.date] = []), A[E.date].push(E);
      return A;
    }), f = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
    function k() {
      c.value === 0 ? (c.value = 11, n.value--) : c.value--;
    }
    function $() {
      c.value === 11 ? (c.value = 0, n.value++) : c.value++;
    }
    function C(A) {
      i("update:modelValue", A), i("dateClick", A);
    }
    return (A, E) => (s(), o("div", cm, [
      e("div", um, [
        e("button", {
          class: "trx-calendar__nav",
          onClick: k
        }, [...E[0] || (E[0] = [
          e("i", { class: "pi pi-chevron-left" }, null, -1)
        ])]),
        e("span", dm, v(_[c.value]) + " " + v(n.value), 1),
        e("button", {
          class: "trx-calendar__nav",
          onClick: $
        }, [...E[1] || (E[1] = [
          e("i", { class: "pi pi-chevron-right" }, null, -1)
        ])])
      ]),
      e("div", _m, [
        (s(), o(V, null, b(u, (F) => e("div", {
          key: F,
          class: "trx-calendar__weekday"
        }, v(F), 1)), 64)),
        (s(!0), o(V, null, b(m.value, (F, q) => (s(), o("div", {
          key: q,
          class: y(["trx-calendar__cell", {
            "trx-calendar__cell--empty": !F.day,
            "trx-calendar__cell--today": F.dateStr === f,
            "trx-calendar__cell--selected": F.dateStr === t.modelValue
          }]),
          onClick: (K) => F.day && C(F.dateStr)
        }, [
          F.day ? (s(), o("span", vm, v(F.day), 1)) : h("", !0),
          F.dateStr && x.value[F.dateStr] ? (s(), o("div", mm, [
            (s(!0), o(V, null, b(x.value[F.dateStr].slice(0, 2), (K) => (s(), o("div", {
              key: K.id,
              class: "trx-calendar__event",
              style: R({ background: K.color ?? "var(--trx-accent-color)" }),
              title: K.title,
              onClick: H((dt) => i("eventClick", K), ["stop"])
            }, v(K.title), 13, fm))), 128)),
            x.value[F.dateStr].length > 2 ? (s(), o("div", xm, " +" + v(x.value[F.dateStr].length - 2), 1)) : h("", !0)
          ])) : h("", !0)
        ], 10, pm))), 128))
      ])
    ]));
  }
}), _C = /* @__PURE__ */ M(hm, [["__scopeId", "data-v-007ab8e8"]]), $m = /* @__PURE__ */ g({
  __name: "TrxVirtualList",
  props: {
    items: { default: () => [] },
    itemHeight: { default: 48 },
    height: { default: 400 },
    overscan: { default: 5 }
  },
  setup(t) {
    const a = t, r = z(), i = z(0), l = S(() => Math.ceil(a.height / a.itemHeight) + a.overscan * 2), n = S(() => Math.max(0, Math.floor(i.value / a.itemHeight) - a.overscan)), c = S(() => Math.min(a.items.length, n.value + l.value)), u = S(() => a.items.slice(n.value, c.value).map((m, x) => ({ item: m, index: n.value + x }))), _ = S(() => a.items.length * a.itemHeight), d = S(() => n.value * a.itemHeight);
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
          (s(!0), o(V, null, b(u.value, ({ item: f, index: k }) => (s(), o("div", {
            key: k,
            style: R({ height: `${t.itemHeight}px` })
          }, [
            I(m.$slots, "default", {
              item: f,
              index: k
            }, void 0, !0)
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 4));
  }
}), pC = /* @__PURE__ */ M($m, [["__scopeId", "data-v-ecf43584"]]), gm = { class: "trx-code-block" }, bm = { class: "trx-code-block__header" }, ym = { class: "trx-code-block__lang-wrap" }, km = {
  key: 0,
  class: "trx-code-block__filename"
}, wm = {
  key: 1,
  class: "trx-code-block__lang"
}, Tm = ["title"], Cm = { class: "trx-code-block__table" }, Sm = {
  key: 0,
  class: "trx-code-block__lineno"
}, Im = { class: "trx-code-block__line" }, Vm = /* @__PURE__ */ g({
  __name: "TrxCodeBlock",
  props: {
    code: { default: "" },
    language: { default: "text" },
    filename: {},
    showLineNumbers: { type: Boolean, default: !0 },
    maxHeight: {}
  },
  setup(t) {
    const a = t, r = z(!1);
    async function i() {
      await navigator.clipboard.writeText(a.code), r.value = !0, setTimeout(() => r.value = !1, 2e3);
    }
    function l(n) {
      return n.split(`
`);
    }
    return (n, c) => (s(), o("div", gm, [
      e("div", bm, [
        e("div", ym, [
          t.filename ? (s(), o("span", km, [
            c[0] || (c[0] = e("i", { class: "pi pi-file" }, null, -1)),
            N(" " + v(t.filename), 1)
          ])) : (s(), o("span", wm, v(t.language), 1))
        ]),
        e("button", {
          class: "trx-code-block__copy",
          onClick: i,
          title: r.value ? "Copiado!" : "Copiar"
        }, [
          e("i", {
            class: y(r.value ? "pi pi-check" : "pi pi-copy")
          }, null, 2),
          e("span", null, v(r.value ? "Copiado" : "Copiar"), 1)
        ], 8, Tm)
      ]),
      e("div", {
        class: "trx-code-block__body",
        style: R(t.maxHeight ? { maxHeight: t.maxHeight, overflowY: "auto" } : {})
      }, [
        e("table", Cm, [
          e("tbody", null, [
            (s(!0), o(V, null, b(l(t.code), (u, _) => (s(), o("tr", { key: _ }, [
              t.showLineNumbers ? (s(), o("td", Sm, v(_ + 1), 1)) : h("", !0),
              e("td", Im, v(u || " "), 1)
            ]))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), vC = /* @__PURE__ */ M(Vm, [["__scopeId", "data-v-c068f365"]]), Bm = ["innerHTML"], Pm = /* @__PURE__ */ g({
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
      class: y(["trx-md-renderer", { "trx-md-renderer--prose": t.prose }]),
      innerHTML: r.value
    }, null, 10, Bm));
  }
}), mC = /* @__PURE__ */ M(Pm, [["__scopeId", "data-v-68ad6346"]]), Mm = { class: "trx-truncate" }, Am = /* @__PURE__ */ g({
  __name: "TrxTruncateText",
  props: {
    text: { default: "" },
    lines: { default: 3 },
    expandLabel: { default: "Ver mais" },
    collapseLabel: { default: "Ver menos" }
  },
  setup(t) {
    const a = z(!1);
    return (r, i) => (s(), o("div", Mm, [
      e("div", {
        class: y(["trx-truncate__content", { "trx-truncate__content--collapsed": !a.value }]),
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
          class: y(a.value ? "pi pi-chevron-up" : "pi pi-chevron-down")
        }, null, 2)
      ])
    ]));
  }
}), fC = /* @__PURE__ */ M(Am, [["__scopeId", "data-v-4d051201"]]), Lm = { class: "trx-conv-list" }, zm = {
  key: 0,
  class: "trx-conv-list__skeleton"
}, Dm = ["onClick"], Em = { class: "trx-conv-list__avatar" }, Rm = ["src", "alt"], Nm = { key: 1 }, qm = { class: "trx-conv-list__info" }, Fm = { class: "trx-conv-list__top" }, Om = { class: "trx-conv-list__name" }, jm = { class: "trx-conv-list__time" }, Hm = { class: "trx-conv-list__bottom" }, Um = { class: "trx-conv-list__msg" }, Wm = { class: "trx-conv-list__meta" }, Gm = {
  key: 1,
  class: "trx-conv-list__unread"
}, Km = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", Lm, [
      t.loading ? (s(), o("div", zm, [
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
        class: y(["trx-conv-list__item", { "trx-conv-list__item--active": t.activeId === u.id }]),
        onClick: (_) => r("select", u)
      }, [
        e("div", Em, [
          u.avatar ? (s(), o("img", {
            key: 0,
            src: u.avatar,
            alt: u.contact
          }, null, 8, Rm)) : (s(), o("span", Nm, v(l(u.contact)), 1)),
          u.status ? (s(), o("span", {
            key: 2,
            class: "trx-conv-list__status-dot",
            style: R({ background: i[u.status] })
          }, null, 4)) : h("", !0)
        ]),
        e("div", qm, [
          e("div", Fm, [
            e("span", Om, v(u.contact), 1),
            e("span", jm, v(u.lastTime), 1)
          ]),
          e("div", Hm, [
            e("span", Um, v(u.lastMessage ?? "—"), 1),
            e("div", Wm, [
              u.channel ? (s(), L(ut, {
                key: 0,
                channel: u.channel,
                size: "sm",
                "icon-only": "",
                "show-label": !1
              }, null, 8, ["channel"])) : h("", !0),
              u.unread ? (s(), o("span", Gm, v(u.unread), 1)) : h("", !0)
            ])
          ])
        ])
      ], 10, Dm))), 128))
    ]));
  }
}), xC = /* @__PURE__ */ M(Km, [["__scopeId", "data-v-43f7b6c7"]]), Ym = { class: "trx-lead-card__header" }, Jm = { class: "trx-lead-card__avatar" }, Xm = { class: "trx-lead-card__identity" }, Qm = { class: "trx-lead-card__name" }, Zm = {
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
}, of = {
  key: 2,
  class: "trx-lead-card__time"
}, rf = /* @__PURE__ */ g({
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
      e("div", Ym, [
        e("div", Jm, v(c(t.name)), 1),
        e("div", Xm, [
          e("span", Qm, v(t.name), 1),
          t.company ? (s(), o("span", Zm, v(t.company), 1)) : h("", !0)
        ]),
        e("div", tf, [
          e("span", {
            class: "trx-lead-card__status",
            style: R({ "--lst-color": r[t.status ?? "new"].color })
          }, v(r[t.status ?? "new"].label), 5),
          e("i", {
            class: y([i[t.priority ?? "medium"], "trx-lead-card__priority"]),
            title: t.priority
          }, null, 10, ef)
        ])
      ]),
      t.value ? (s(), o("div", sf, v(n(t.value)), 1)) : h("", !0),
      e("div", af, [
        t.source ? (s(), o("span", lf, [
          _[5] || (_[5] = e("i", { class: "pi pi-map-marker" }, null, -1)),
          N(" " + v(t.source), 1)
        ])) : h("", !0),
        t.assignee ? (s(), o("span", nf, [
          _[6] || (_[6] = e("i", { class: "pi pi-user" }, null, -1)),
          N(" " + v(t.assignee), 1)
        ])) : h("", !0),
        t.updatedAt ? (s(), o("span", of, [
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
}), hC = /* @__PURE__ */ M(rf, [["__scopeId", "data-v-dcad9a9f"]]), cf = { class: "trx-sla__header" }, uf = { class: "trx-sla__label" }, df = {
  key: 0,
  class: "trx-sla__bar"
}, _f = /* @__PURE__ */ g({
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
      const f = Math.floor(x / 36e5), k = Math.floor(x % 36e5 / 6e4);
      return f > 0 ? `${f}h ${k}m` : `${k}m`;
    }
    return (x, f) => (s(), o("div", {
      class: "trx-sla",
      style: R({ "--sla-color": p.value })
    }, [
      e("div", cf, [
        e("span", uf, v(t.label ?? "SLA"), 1),
        e("span", {
          class: y(["trx-sla__time", { "trx-sla__time--breached": _.value }])
        }, [
          e("i", {
            class: y(_.value ? "pi pi-times-circle" : d.value ? "pi pi-exclamation-triangle" : "pi pi-clock")
          }, null, 2),
          N(" " + v(m(c.value)), 1)
        ], 2)
      ]),
      t.showProgress ? (s(), o("div", df, [
        e("div", {
          class: "trx-sla__fill",
          style: R({ width: `${u.value * 100}%` })
        }, null, 4)
      ])) : h("", !0)
    ], 4));
  }
}), $C = /* @__PURE__ */ M(_f, [["__scopeId", "data-v-dbfaca6d"]]), pf = { class: "trx-crm-timeline" }, vf = {
  key: 0,
  class: "trx-crm-timeline__loading"
}, mf = {
  key: 1,
  class: "trx-crm-timeline__empty"
}, ff = {
  key: 2,
  class: "trx-crm-timeline__list"
}, xf = ["onClick"], hf = { class: "trx-crm-timeline__line-wrap" }, $f = { class: "trx-crm-timeline__content" }, gf = { class: "trx-crm-timeline__header" }, bf = { class: "trx-crm-timeline__date" }, yf = { class: "trx-crm-timeline__title-row" }, kf = { class: "trx-crm-timeline__title" }, wf = {
  key: 0,
  class: "trx-crm-timeline__desc"
}, Tf = { class: "trx-crm-timeline__meta" }, Cf = {
  key: 0,
  class: "trx-crm-timeline__author"
}, Sf = {
  key: 1,
  class: "trx-crm-timeline__duration"
}, If = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", pf, [
      t.loading ? (s(), o("div", vf, [...u[0] || (u[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.events.length ? (s(), o("div", ff, [
        (s(!0), o(V, null, b(t.events, (_) => (s(), o("div", {
          key: _.id,
          class: "trx-crm-timeline__item",
          onClick: (d) => r("eventClick", _)
        }, [
          e("div", hf, [
            e("div", {
              class: "trx-crm-timeline__dot",
              style: R({ background: i[_.type].color })
            }, [
              e("i", {
                class: y([i[_.type].icon, "trx-crm-timeline__dot-icon"])
              }, null, 2)
            ], 4),
            u[2] || (u[2] = e("div", { class: "trx-crm-timeline__line" }, null, -1))
          ]),
          e("div", $f, [
            e("div", gf, [
              e("span", {
                class: "trx-crm-timeline__type-badge",
                style: R({ color: i[_.type].color })
              }, v(i[_.type].label), 5),
              e("span", bf, v(n(_.date)), 1)
            ]),
            e("div", yf, [
              e("span", kf, v(_.title), 1),
              _.outcome ? (s(), o("span", {
                key: 0,
                class: "trx-crm-timeline__outcome",
                style: R({ color: l[_.outcome].color })
              }, [
                e("i", {
                  class: y(l[_.outcome].icon)
                }, null, 2)
              ], 4)) : h("", !0)
            ]),
            _.description ? (s(), o("p", wf, v(_.description), 1)) : h("", !0),
            e("div", Tf, [
              _.author ? (s(), o("span", Cf, [
                u[3] || (u[3] = e("i", { class: "pi pi-user" }, null, -1)),
                N(" " + v(_.author), 1)
              ])) : h("", !0),
              _.duration ? (s(), o("span", Sf, [
                u[4] || (u[4] = e("i", { class: "pi pi-clock" }, null, -1)),
                N(" " + v(_.duration), 1)
              ])) : h("", !0)
            ])
          ])
        ], 8, xf))), 128))
      ])) : (s(), o("div", mf, [...u[1] || (u[1] = [
        e("i", { class: "pi pi-history" }, null, -1),
        e("span", null, "Nenhuma atividade registrada", -1)
      ])]))
    ]));
  }
}), gC = /* @__PURE__ */ M(If, [["__scopeId", "data-v-2b8a2f92"]]), Vf = { class: "trx-maintenance" }, Bf = { class: "trx-maintenance__card" }, Pf = ["src"], Mf = { class: "trx-maintenance__title" }, Af = { class: "trx-maintenance__message" }, Lf = {
  key: 1,
  class: "trx-maintenance__eta"
}, zf = /* @__PURE__ */ g({
  __name: "TrxMaintenancePage",
  props: {
    title: { default: "Em Manutenção" },
    message: { default: "Estamos trabalhando para melhorar sua experiência. Voltaremos em breve." },
    estimatedTime: {},
    showCountdown: { type: Boolean },
    logoSrc: {}
  },
  setup(t) {
    return (a, r) => (s(), o("div", Vf, [
      e("div", Bf, [
        t.logoSrc ? (s(), o("img", {
          key: 0,
          src: t.logoSrc,
          class: "trx-maintenance__logo",
          alt: "Logo"
        }, null, 8, Pf)) : h("", !0),
        r[2] || (r[2] = e("div", { class: "trx-maintenance__icon" }, [
          e("i", { class: "pi pi-wrench" })
        ], -1)),
        e("h1", Mf, v(t.title), 1),
        e("p", Af, v(t.message), 1),
        t.estimatedTime ? (s(), o("div", Lf, [
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
}), bC = /* @__PURE__ */ M(zf, [["__scopeId", "data-v-b30655b1"]]), Df = {
  key: 0,
  class: "trx-session-backdrop"
}, Ef = { class: "trx-session-dialog" }, Rf = { class: "trx-session-dialog__msg" }, Nf = { class: "trx-session-dialog__actions" }, qf = /* @__PURE__ */ g({
  __name: "TrxSessionTimeout",
  props: {
    timeoutMs: { default: 30 * 60 * 1e3 },
    warningMs: { default: 5 * 60 * 1e3 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["timeout", "extend", "update:modelValue"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(r.timeoutMs), n = z(!1);
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
    const x = S(() => Math.floor(l.value / 6e4)), f = S(() => Math.floor(l.value % 6e4 / 1e3)), k = S(() => `${x.value}:${String(f.value).padStart(2, "0")}`);
    return ($, C) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-session-fade" }, {
        default: B(() => [
          n.value ? (s(), o("div", Df, [
            e("div", Ef, [
              C[4] || (C[4] = e("div", { class: "trx-session-dialog__icon" }, [
                e("i", { class: "pi pi-clock" })
              ], -1)),
              C[5] || (C[5] = e("h2", { class: "trx-session-dialog__title" }, "Sessão expirando", -1)),
              e("p", Rf, [
                C[1] || (C[1] = N(" Sua sessão expirará em ", -1)),
                e("strong", null, v(k.value), 1),
                C[2] || (C[2] = N(" por inatividade. ", -1))
              ]),
              e("div", Nf, [
                e("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--extend",
                  onClick: p
                }, [...C[3] || (C[3] = [
                  e("i", { class: "pi pi-refresh" }, null, -1),
                  N(" Continuar sessão ", -1)
                ])]),
                e("button", {
                  class: "trx-session-dialog__btn trx-session-dialog__btn--logout",
                  onClick: C[0] || (C[0] = (A) => i("timeout"))
                }, " Sair agora ")
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), yC = /* @__PURE__ */ M(qf, [["__scopeId", "data-v-3b5d9421"]]), Ff = { class: "trx-shortcut-panel" }, Of = { class: "trx-shortcut-panel__header" }, jf = { class: "trx-shortcut-panel__body" }, Hf = { class: "trx-shortcut-panel__group-label" }, Uf = { class: "trx-shortcut-panel__list" }, Wf = { class: "trx-shortcut-panel__desc" }, Gf = { class: "trx-shortcut-panel__keys" }, Kf = { class: "trx-shortcut-panel__footer" }, Yf = { class: "trx-shortcut-panel__key" }, Jf = /* @__PURE__ */ g({
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
            e("div", Ff, [
              e("div", Of, [
                c[3] || (c[3] = e("h3", { class: "trx-shortcut-panel__title" }, "Atalhos de Teclado", -1)),
                e("button", {
                  class: "trx-shortcut-panel__close",
                  onClick: c[0] || (c[0] = (u) => i("update:modelValue", !1))
                }, [...c[2] || (c[2] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", jf, [
                (s(!0), o(V, null, b(l(), (u, _) => (s(), o(V, { key: _ }, [
                  e("div", Hf, v(_), 1),
                  e("div", Uf, [
                    (s(!0), o(V, null, b(u, (d, p) => (s(), o("div", {
                      key: p,
                      class: "trx-shortcut-panel__item"
                    }, [
                      e("span", Wf, v(d.description), 1),
                      e("div", Gf, [
                        (s(!0), o(V, null, b(d.keys, (m) => (s(), o("kbd", {
                          key: m,
                          class: "trx-shortcut-panel__key"
                        }, v(m), 1))), 128))
                      ])
                    ]))), 128))
                  ])
                ], 64))), 128))
              ]),
              e("div", Kf, [
                c[4] || (c[4] = N(" Pressione ", -1)),
                e("kbd", Yf, v(t.triggerKey), 1),
                c[5] || (c[5] = N(" para abrir/fechar ", -1))
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), kC = /* @__PURE__ */ M(Jf, [["__scopeId", "data-v-d5032b0e"]]), wC = /* @__PURE__ */ g({
  __name: "TrxFeatureFlag",
  props: {
    flag: {},
    flags: {}
  },
  setup(t) {
    const a = t, r = S(() => a.flags[a.flag] === !0);
    return (i, l) => r.value ? I(i.$slots, "default", { key: 0 }) : I(i.$slots, "disabled", { key: 1 });
  }
}), Xf = { class: "trx-dtmf" }, Qf = ["onClick"], Zf = { class: "trx-dtmf__main" }, tx = {
  key: 0,
  class: "trx-dtmf__sub"
}, ex = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", Xf, [
      (s(), o(V, null, b(i, (_, d) => e("div", {
        key: d,
        class: "trx-dtmf__row"
      }, [
        (s(!0), o(V, null, b(_, (p) => (s(), o("button", {
          key: p,
          class: "trx-dtmf__key",
          onClick: (m) => n(p)
        }, [
          e("span", Zf, v(p), 1),
          l[p] ? (s(), o("span", tx, v(l[p]), 1)) : h("", !0)
        ], 8, Qf))), 128))
      ])), 64))
    ]));
  }
}), TC = /* @__PURE__ */ M(ex, [["__scopeId", "data-v-2f681100"]]), sx = { class: "trx-tf-dialog" }, ax = { class: "trx-tf-dialog__header" }, lx = { class: "trx-tf-dialog__type-tabs" }, nx = ["onClick"], ox = { class: "trx-tf-dialog__search" }, rx = { class: "trx-tf-dialog__list" }, ix = {
  key: 0,
  class: "trx-tf-dialog__loading"
}, cx = ["onClick"], ux = { class: "trx-tf-dialog__item-info" }, dx = { class: "trx-tf-dialog__item-name" }, _x = { class: "trx-tf-dialog__item-ext" }, px = { class: "trx-tf-dialog__item-status" }, vx = {
  key: 1,
  class: "trx-tf-dialog__empty"
}, mx = { class: "trx-tf-dialog__footer" }, fx = ["disabled"], xx = /* @__PURE__ */ g({
  __name: "TrxTransferDialog",
  props: {
    targets: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "transfer"],
  setup(t, { emit: a }) {
    const r = a, i = z("blind"), l = z(""), n = z(null);
    return (c, u) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-tf-fade" }, {
        default: B(() => [
          t.modelValue ? (s(), o("div", {
            key: 0,
            class: "trx-tf-backdrop",
            onClick: u[4] || (u[4] = H((_) => r("update:modelValue", !1), ["self"]))
          }, [
            e("div", sx, [
              e("div", ax, [
                u[6] || (u[6] = e("h3", { class: "trx-tf-dialog__title" }, "Transferir Chamada", -1)),
                e("button", {
                  class: "trx-tf-dialog__close",
                  onClick: u[0] || (u[0] = (_) => r("update:modelValue", !1))
                }, [...u[5] || (u[5] = [
                  e("i", { class: "pi pi-times" }, null, -1)
                ])])
              ]),
              e("div", lx, [
                (s(), o(V, null, b(["blind", "attended", "conference"], (_) => e("button", {
                  key: _,
                  class: y(["trx-tf-dialog__type-btn", { active: i.value === _ }]),
                  onClick: (d) => i.value = _
                }, v(_ === "blind" ? "Cega" : _ === "attended" ? "Assistida" : "Conferência"), 11, nx)), 64))
              ]),
              e("div", ox, [
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
              e("div", rx, [
                t.loading ? (s(), o("div", ix, [...u[8] || (u[8] = [
                  e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
                ])])) : h("", !0),
                (s(!0), o(V, null, b(t.targets.filter((_) => !l.value || _.name.toLowerCase().includes(l.value.toLowerCase()) || _.extension.includes(l.value)), (_) => {
                  var d;
                  return s(), o("div", {
                    key: _.id,
                    class: y(["trx-tf-dialog__item", { "trx-tf-dialog__item--selected": ((d = n.value) == null ? void 0 : d.id) === _.id, "trx-tf-dialog__item--unavailable": !_.available }]),
                    onClick: (p) => n.value = _
                  }, [
                    e("div", {
                      class: y(["trx-tf-dialog__item-dot", _.available ? "available" : "busy"])
                    }, null, 2),
                    e("div", ux, [
                      e("span", dx, v(_.name), 1),
                      e("span", _x, v(_.extension), 1)
                    ]),
                    e("span", px, v(_.available ? "Disponível" : "Ocupado"), 1)
                  ], 10, cx);
                }), 128)),
                !t.targets.length && !t.loading ? (s(), o("div", vx, " Nenhum ramal encontrado ")) : h("", !0)
              ]),
              e("div", mx, [
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
                ], 8, fx)
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), CC = /* @__PURE__ */ M(xx, [["__scopeId", "data-v-d021e3e9"]]), hx = { class: "trx-monitor" }, $x = {
  key: 0,
  class: "trx-monitor__empty"
}, gx = {
  key: 1,
  class: "trx-monitor__empty"
}, bx = {
  key: 2,
  class: "trx-monitor__list"
}, yx = { class: "trx-monitor__agent" }, kx = { class: "trx-monitor__agent-name" }, wx = { class: "trx-monitor__agent-ext" }, Tx = { class: "trx-monitor__call-info" }, Cx = { class: "trx-monitor__customer" }, Sx = {
  key: 0,
  class: "trx-monitor__queue"
}, Ix = { class: "trx-monitor__duration" }, Vx = {
  key: 0,
  class: "trx-monitor__active-badge"
}, Bx = ["onClick"], Px = {
  key: 1,
  class: "trx-monitor__actions"
}, Mx = ["title", "onClick"], Ax = /* @__PURE__ */ g({
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
    return (n, c) => (s(), o("div", hx, [
      t.loading ? (s(), o("div", $x, [...c[0] || (c[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.calls.length ? (s(), o("div", bx, [
        (s(!0), o(V, null, b(t.calls, (u) => (s(), o("div", {
          key: u.id,
          class: y(["trx-monitor__item", { "trx-monitor__item--active": t.activeId === u.id }])
        }, [
          e("div", yx, [
            e("span", kx, v(u.agentName), 1),
            e("span", wx, v(u.agentExt), 1)
          ]),
          e("div", Tx, [
            e("span", Cx, v(u.customerName ?? u.customerPhone), 1),
            u.queue ? (s(), o("span", Sx, v(u.queue), 1)) : h("", !0)
          ]),
          e("span", Ix, v(l(u.duration)), 1),
          t.activeId === u.id ? (s(), o("div", Vx, [
            c[3] || (c[3] = e("i", { class: "pi pi-circle-fill trx-monitor__pulse" }, null, -1)),
            N(" " + v(t.activeMode === "listen" ? "Escutando" : t.activeMode === "whisper" ? "Sussurrando" : "Na chamada") + " ", 1),
            e("button", {
              class: "trx-monitor__stop-btn",
              onClick: (_) => r("stop", u.id)
            }, [...c[2] || (c[2] = [
              e("i", { class: "pi pi-stop-circle" }, null, -1)
            ])], 8, Bx)
          ])) : (s(), o("div", Px, [
            (s(), o(V, null, b(i, (_) => e("button", {
              key: _.key,
              class: "trx-monitor__mode-btn",
              title: _.label,
              style: R({ "--mc": _.color }),
              onClick: (d) => r("monitor", u, _.key)
            }, [
              e("i", {
                class: y(_.icon)
              }, null, 2)
            ], 12, Mx)), 64))
          ]))
        ], 2))), 128))
      ])) : (s(), o("div", gx, [...c[1] || (c[1] = [
        e("i", {
          class: "pi pi-phone",
          style: { "font-size": "1.5rem" }
        }, null, -1),
        e("span", null, "Nenhuma chamada ativa", -1)
      ])]))
    ]));
  }
}), SC = /* @__PURE__ */ M(Ax, [["__scopeId", "data-v-df8b4f98"]]), Lx = ["disabled"], zx = {
  key: 0,
  class: "trx-break__panel"
}, Dx = ["onClick"], Ex = { class: "trx-break__reason-label" }, Rx = {
  key: 0,
  class: "trx-break__reason-max"
}, Nx = {
  key: 0,
  class: "trx-break__empty"
}, qx = /* @__PURE__ */ g({
  __name: "TrxBreakSelector",
  props: {
    reasons: { default: () => [] },
    modelValue: { default: null },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "start", "end"],
  setup(t, { emit: a }) {
    const r = a, i = z(!1);
    return (l, n) => (s(), o("div", {
      class: y(["trx-break", { "trx-break--active": t.modelValue }])
    }, [
      e("button", {
        class: "trx-break__trigger",
        disabled: t.disabled,
        onClick: n[0] || (n[0] = (c) => t.modelValue ? (r("update:modelValue", null), r("end")) : i.value = !i.value)
      }, [
        e("i", {
          class: y(t.modelValue ? "pi pi-play" : "pi pi-pause")
        }, null, 2),
        e("span", null, v(t.modelValue ? "Retornar" : "Iniciar Pausa"), 1),
        t.modelValue ? h("", !0) : (s(), o("i", {
          key: 0,
          class: y(["pi pi-chevron-down trx-break__arrow", { rotated: i.value }])
        }, null, 2))
      ], 8, Lx),
      O(j, { name: "trx-break-drop" }, {
        default: B(() => [
          i.value && !t.modelValue ? (s(), o("div", zx, [
            n[1] || (n[1] = e("div", { class: "trx-break__panel-title" }, "Motivo da pausa", -1)),
            (s(!0), o(V, null, b(t.reasons, (c) => (s(), o("button", {
              key: c.id,
              class: "trx-break__reason",
              onClick: (u) => {
                r("update:modelValue", c.id), r("start", c), i.value = !1;
              }
            }, [
              e("i", {
                class: y([c.icon ?? "pi pi-circle", "trx-break__reason-icon"])
              }, null, 2),
              e("span", Ex, v(c.label), 1),
              c.maxMinutes ? (s(), o("span", Rx, v(c.maxMinutes) + "min", 1)) : h("", !0)
            ], 8, Dx))), 128)),
            t.reasons.length ? h("", !0) : (s(), o("div", Nx, "Nenhum motivo configurado"))
          ])) : h("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), IC = /* @__PURE__ */ M(qx, [["__scopeId", "data-v-11d04d15"]]), Fx = { class: "trx-qm" }, Ox = {
  key: 0,
  class: "trx-qm__loading"
}, jx = {
  key: 1,
  class: "trx-qm__empty"
}, Hx = {
  key: 2,
  class: "trx-qm__list"
}, Ux = { class: "trx-qm__queue-header" }, Wx = { class: "trx-qm__queue-name" }, Gx = { class: "trx-qm__agents" }, Kx = { class: "trx-qm__metric" }, Yx = { class: "trx-qm__metric-value trx-qm__metric-value--warn" }, Jx = { class: "trx-qm__metric" }, Xx = { class: "trx-qm__metric-value trx-qm__metric-value--active" }, Qx = { class: "trx-qm__metric" }, Zx = { class: "trx-qm__metric-value" }, th = { class: "trx-qm__metric" }, eh = { class: "trx-qm__metric" }, sh = { class: "trx-qm__metric-value" }, ah = { class: "trx-qm__metric" }, lh = { class: "trx-qm__sl-bar" }, nh = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", Fx, [
      t.loading ? (s(), o("div", Ox, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.queues.length ? (s(), o("div", Hx, [
        (s(!0), o(V, null, b(t.queues, (n) => (s(), o("div", {
          key: n.name,
          class: "trx-qm__queue"
        }, [
          e("div", Ux, [
            e("span", Wx, v(n.name), 1),
            e("span", Gx, v(n.agentsReady) + "/" + v(n.agentsTotal) + " agentes", 1)
          ]),
          e("div", {
            class: y(["trx-qm__metrics", { "trx-qm__metrics--compact": t.compact }])
          }, [
            e("div", Kx, [
              e("span", Yx, v(n.waiting), 1),
              l[1] || (l[1] = e("span", { class: "trx-qm__metric-label" }, "Aguardando", -1))
            ]),
            e("div", Jx, [
              e("span", Xx, v(n.active), 1),
              l[2] || (l[2] = e("span", { class: "trx-qm__metric-label" }, "Em atendimento", -1))
            ]),
            e("div", Qx, [
              e("span", Zx, v(n.abandoned), 1),
              l[3] || (l[3] = e("span", { class: "trx-qm__metric-label" }, "Abandonadas", -1))
            ]),
            e("div", th, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: r(n.serviceLevel) })
              }, v(n.serviceLevel) + "%", 5),
              l[4] || (l[4] = e("span", { class: "trx-qm__metric-label" }, "Nível de Serviço", -1))
            ]),
            e("div", eh, [
              e("span", sh, v(a(n.avgWait)), 1),
              l[5] || (l[5] = e("span", { class: "trx-qm__metric-label" }, "TMA Espera", -1))
            ]),
            e("div", ah, [
              e("span", {
                class: "trx-qm__metric-value",
                style: R({ color: n.longestWait > 120 ? "var(--trx-danger-color)" : void 0 })
              }, v(a(n.longestWait)), 5),
              l[6] || (l[6] = e("span", { class: "trx-qm__metric-label" }, "Maior Espera", -1))
            ])
          ], 2),
          e("div", lh, [
            e("div", {
              class: "trx-qm__sl-fill",
              style: R({ width: n.serviceLevel + "%", background: r(n.serviceLevel) })
            }, null, 4)
          ])
        ]))), 128))
      ])) : (s(), o("div", jx, "Nenhuma fila configurada"))
    ]));
  }
}), VC = /* @__PURE__ */ M(nh, [["__scopeId", "data-v-63231ab6"]]), oh = { class: "trx-rank" }, rh = {
  key: 0,
  class: "trx-rank__header"
}, ih = { class: "trx-rank__title" }, ch = {
  key: 1,
  class: "trx-rank__loading"
}, uh = {
  key: 2,
  class: "trx-rank__empty"
}, dh = {
  key: 3,
  class: "trx-rank__list"
}, _h = ["onClick"], ph = { class: "trx-rank__pos" }, vh = { class: "trx-rank__avatar-wrap" }, mh = ["src", "alt"], fh = {
  key: 1,
  class: "trx-rank__avatar-init"
}, xh = { class: "trx-rank__name" }, hh = { class: "trx-rank__bar-wrap" }, $h = { class: "trx-rank__value-wrap" }, gh = { class: "trx-rank__value" }, bh = {
  key: 0,
  class: "trx-rank__unit"
}, yh = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", oh, [
      t.title ? (s(), o("div", rh, [
        e("span", ih, v(t.title), 1)
      ])) : h("", !0),
      t.loading ? (s(), o("div", ch, [...n[0] || (n[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.entries.length ? (s(), o("div", dh, [
        (s(!0), o(V, null, b(t.entries, (c, u) => (s(), o("div", {
          key: c.id,
          class: y(["trx-rank__item", { "trx-rank__item--highlight": t.highlight === c.id }]),
          onClick: (_) => r("rowClick", c)
        }, [
          e("span", ph, v(u < 3 ? i[u] : `#${u + 1}`), 1),
          e("div", vh, [
            c.avatar ? (s(), o("img", {
              key: 0,
              src: c.avatar,
              class: "trx-rank__avatar",
              alt: c.name
            }, null, 8, mh)) : (s(), o("div", fh, v(c.name[0]), 1))
          ]),
          e("span", xh, v(c.name), 1),
          e("div", hh, [
            e("div", {
              class: "trx-rank__bar",
              style: R({ width: (t.maxValue ? c.value / t.maxValue * 100 : 100) + "%" })
            }, null, 4)
          ]),
          e("div", $h, [
            e("span", gh, v(c.value.toLocaleString("pt-BR")), 1),
            c.unit ? (s(), o("span", bh, v(c.unit), 1)) : h("", !0),
            c.delta !== void 0 ? (s(), o("span", {
              key: 1,
              class: y(["trx-rank__delta", c.delta > 0 ? "up" : c.delta < 0 ? "down" : ""])
            }, [
              e("i", {
                class: y(c.delta > 0 ? "pi pi-arrow-up" : c.delta < 0 ? "pi pi-arrow-down" : "pi pi-minus")
              }, null, 2)
            ], 2)) : h("", !0)
          ])
        ], 10, _h))), 128))
      ])) : (s(), o("div", uh, "Sem dados"))
    ]));
  }
}), BC = /* @__PURE__ */ M(yh, [["__scopeId", "data-v-f7fb6516"]]), kh = { class: "trx-recorder__indicator" }, wh = { class: "trx-recorder__label" }, Th = { class: "trx-recorder__time" }, Ch = { class: "trx-recorder__controls" }, Sh = ["disabled"], Ih = ["disabled"], Vh = ["disabled"], Bh = ["disabled"], Ph = /* @__PURE__ */ g({
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
      class: y(["trx-recorder", `trx-recorder--${t.state}`])
    }, [
      e("div", kh, [
        e("span", {
          class: y(["trx-recorder__dot", { "trx-recorder__dot--blink": t.state === "recording" }])
        }, null, 2),
        e("span", wh, v(t.state === "idle" ? "Sem gravação" : t.state === "recording" ? "Gravando" : "Pausado"), 1)
      ]),
      e("span", Th, v(l.value), 1),
      e("div", Ch, [
        t.state === "idle" ? (s(), o("button", {
          key: 0,
          class: "trx-recorder__btn trx-recorder__btn--start",
          disabled: t.disabled,
          title: "Iniciar gravação",
          onClick: c[0] || (c[0] = (u) => i("start"))
        }, [...c[4] || (c[4] = [
          e("i", { class: "pi pi-circle-fill" }, null, -1)
        ])], 8, Sh)) : (s(), o(V, { key: 1 }, [
          t.state === "recording" ? (s(), o("button", {
            key: 0,
            class: "trx-recorder__btn trx-recorder__btn--pause",
            disabled: t.disabled,
            title: "Pausar",
            onClick: c[1] || (c[1] = (u) => i("pause"))
          }, [...c[5] || (c[5] = [
            e("i", { class: "pi pi-pause" }, null, -1)
          ])], 8, Ih)) : (s(), o("button", {
            key: 1,
            class: "trx-recorder__btn trx-recorder__btn--resume",
            disabled: t.disabled,
            title: "Retomar",
            onClick: c[2] || (c[2] = (u) => i("resume"))
          }, [...c[6] || (c[6] = [
            e("i", { class: "pi pi-play" }, null, -1)
          ])], 8, Vh)),
          e("button", {
            class: "trx-recorder__btn trx-recorder__btn--stop",
            disabled: t.disabled,
            title: "Parar",
            onClick: c[3] || (c[3] = (u) => i("stop"))
          }, [...c[7] || (c[7] = [
            e("i", { class: "pi pi-stop" }, null, -1)
          ])], 8, Bh)
        ], 64))
      ])
    ], 2));
  }
}), PC = /* @__PURE__ */ M(Ph, [["__scopeId", "data-v-86250438"]]), Mh = { class: "trx-ext-picker__name" }, Ah = { class: "trx-ext-picker__ext" }, Lh = {
  key: 1,
  class: "trx-ext-picker__placeholder"
}, zh = {
  key: 0,
  class: "trx-ext-picker__panel"
}, Dh = { class: "trx-ext-picker__search-wrap" }, Eh = {
  key: 0,
  class: "trx-ext-picker__loading"
}, Rh = {
  key: 1,
  class: "trx-ext-picker__list"
}, Nh = ["onClick"], qh = { class: "trx-ext-picker__item-info" }, Fh = { class: "trx-ext-picker__item-name" }, Oh = { class: "trx-ext-picker__item-dept" }, jh = { class: "trx-ext-picker__item-ext" }, Hh = {
  key: 0,
  class: "trx-ext-picker__empty"
}, Uh = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(""), n = z(!1), c = S(
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
      class: y(["trx-ext-picker", { open: n.value }])
    }, [
      e("div", {
        class: y(["trx-ext-picker__trigger", { disabled: t.disabled }]),
        onClick: m[0] || (m[0] = (x) => !t.disabled && (n.value = !n.value))
      }, [
        u.value ? (s(), o(V, { key: 0 }, [
          e("div", {
            class: y(["trx-ext-picker__dot", u.value.available ? "on" : "off"])
          }, null, 2),
          e("span", Mh, v(u.value.name), 1),
          e("span", Ah, v(u.value.extension), 1),
          e("button", {
            class: "trx-ext-picker__clear",
            onClick: H(d, ["stop"])
          }, [...m[2] || (m[2] = [
            e("i", { class: "pi pi-times" }, null, -1)
          ])])
        ], 64)) : (s(), o("span", Lh, [
          m[3] || (m[3] = e("i", { class: "pi pi-phone" }, null, -1)),
          N(" " + v(t.placeholder), 1)
        ])),
        m[4] || (m[4] = e("i", { class: "pi pi-chevron-down trx-ext-picker__arrow" }, null, -1))
      ], 2),
      n.value ? (s(), o("div", zh, [
        e("div", Dh, [
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
        t.loading ? (s(), o("div", Eh, [...m[6] || (m[6] = [
          e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
        ])])) : (s(), o("div", Rh, [
          (s(!0), o(V, null, b(c.value, (x) => (s(), o("div", {
            key: x.id,
            class: y(["trx-ext-picker__item", { "trx-ext-picker__item--selected": t.modelValue === x.id }]),
            onClick: (f) => _(x)
          }, [
            e("div", {
              class: y(["trx-ext-picker__dot", x.available ? "on" : "off"])
            }, null, 2),
            e("div", qh, [
              e("span", Fh, v(x.name), 1),
              e("span", Oh, v(x.department), 1)
            ]),
            e("span", jh, v(x.extension), 1)
          ], 10, Nh))), 128)),
          c.value.length ? h("", !0) : (s(), o("div", Hh, "Nenhum resultado"))
        ]))
      ])) : h("", !0)
    ], 2));
  }
}), MC = /* @__PURE__ */ M(Uh, [["__scopeId", "data-v-0ff142eb"]]), Wh = { class: "trx-aht" }, Gh = { class: "trx-aht__header" }, Kh = { class: "trx-aht__label" }, Yh = { class: "trx-aht__target" }, Jh = { class: "trx-aht__value-row" }, Xh = { class: "trx-aht__bar-wrap" }, Qh = {
  key: 0,
  class: "trx-aht__breakdown"
}, Zh = {
  key: 0,
  class: "trx-aht__seg"
}, t1 = { class: "trx-aht__seg-val" }, e1 = {
  key: 1,
  class: "trx-aht__seg"
}, s1 = { class: "trx-aht__seg-val" }, a1 = {
  key: 2,
  class: "trx-aht__seg"
}, l1 = { class: "trx-aht__seg-val" }, n1 = /* @__PURE__ */ g({
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
    return (c, u) => (s(), o("div", Wh, [
      e("div", Gh, [
        e("span", Kh, v(t.label), 1),
        e("span", Yh, "Meta: " + v(r(t.target)), 1)
      ]),
      e("div", Jh, [
        e("span", {
          class: "trx-aht__value",
          style: R({ color: l.value })
        }, v(r(t.value)), 5),
        e("span", {
          class: y(["trx-aht__delta", n.value > 0 ? "over" : "under"])
        }, [
          e("i", {
            class: y(n.value > 0 ? "pi pi-arrow-up" : "pi pi-arrow-down")
          }, null, 2),
          N(" " + v(r(Math.abs(n.value))), 1)
        ], 2)
      ]),
      e("div", Xh, [
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
      t.showBreakdown ? (s(), o("div", Qh, [
        t.talkTime !== void 0 ? (s(), o("div", Zh, [
          u[1] || (u[1] = e("i", { class: "pi pi-phone" }, null, -1)),
          u[2] || (u[2] = e("span", null, "Fala", -1)),
          e("span", t1, v(r(t.talkTime)), 1)
        ])) : h("", !0),
        t.holdTime !== void 0 ? (s(), o("div", e1, [
          u[3] || (u[3] = e("i", { class: "pi pi-pause" }, null, -1)),
          u[4] || (u[4] = e("span", null, "Hold", -1)),
          e("span", s1, v(r(t.holdTime)), 1)
        ])) : h("", !0),
        t.acwTime !== void 0 ? (s(), o("div", a1, [
          u[5] || (u[5] = e("i", { class: "pi pi-file-edit" }, null, -1)),
          u[6] || (u[6] = e("span", null, "ACW", -1)),
          e("span", l1, v(r(t.acwTime)), 1)
        ])) : h("", !0)
      ])) : h("", !0)
    ]));
  }
}), AC = /* @__PURE__ */ M(n1, [["__scopeId", "data-v-98b6df67"]]), o1 = { class: "trx-conf" }, r1 = { class: "trx-conf__header" }, i1 = { class: "trx-conf__header-info" }, c1 = { class: "trx-conf__count" }, u1 = { class: "trx-conf__participants" }, d1 = { class: "trx-conf__participant-avatar" }, _1 = {
  key: 0,
  class: "trx-conf__speaking-ring"
}, p1 = { class: "trx-conf__participant-info" }, v1 = { class: "trx-conf__participant-name" }, m1 = { class: "trx-conf__participant-num" }, f1 = { class: "trx-conf__participant-dur" }, x1 = { class: "trx-conf__participant-actions" }, h1 = ["title", "onClick"], $1 = ["onClick"], g1 = { class: "trx-conf__controls" }, b1 = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", o1, [
      e("div", r1, [
        e("div", i1, [
          n[5] || (n[5] = e("i", { class: "pi pi-users trx-conf__icon" }, null, -1)),
          e("div", null, [
            n[4] || (n[4] = e("div", { class: "trx-conf__title" }, "Conferência", -1)),
            e("div", c1, v(t.participants.length) + " participantes", 1)
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
      e("div", u1, [
        (s(!0), o(V, null, b(t.participants, (c) => (s(), o("div", {
          key: c.id,
          class: y(["trx-conf__participant", { "trx-conf__participant--speaking": c.speaking }])
        }, [
          e("div", d1, [
            N(v(c.name[0]) + " ", 1),
            c.speaking ? (s(), o("div", _1)) : h("", !0)
          ]),
          e("div", p1, [
            e("span", v1, v(c.name), 1),
            e("span", m1, v(c.number), 1)
          ]),
          e("span", f1, v(i(c.duration)), 1),
          e("div", x1, [
            e("button", {
              class: y(["trx-conf__p-btn", { muted: c.muted }]),
              title: c.muted ? "Ativar" : "Mutar",
              onClick: (u) => r("muteParticipant", c.id)
            }, [
              e("i", {
                class: y(c.muted ? "pi pi-microphone-off" : "pi pi-microphone")
              }, null, 2)
            ], 10, h1),
            c.role !== "host" ? (s(), o("button", {
              key: 0,
              class: "trx-conf__p-btn trx-conf__p-btn--kick",
              title: "Remover",
              onClick: (u) => r("kickParticipant", c.id)
            }, [...n[7] || (n[7] = [
              e("i", { class: "pi pi-times" }, null, -1)
            ])], 8, $1)) : h("", !0)
          ])
        ], 2))), 128))
      ]),
      e("div", g1, [
        e("button", {
          class: y(["trx-conf__ctrl-btn", { active: t.muted }]),
          title: "Mutar/Desmutar",
          onClick: n[1] || (n[1] = (c) => r("toggleMute"))
        }, [
          e("i", {
            class: y(t.muted ? "pi pi-microphone-off" : "pi pi-microphone")
          }, null, 2)
        ], 2),
        e("button", {
          class: y(["trx-conf__ctrl-btn", { active: t.onHold }]),
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
}), LC = /* @__PURE__ */ M(b1, [["__scopeId", "data-v-a2f799aa"]]), y1 = { class: "trx-radar" }, k1 = ["width", "height", "viewBox"], w1 = ["points"], T1 = ["x1", "y1", "x2", "y2"], C1 = ["x", "y"], S1 = ["d", "fill"], I1 = ["d", "stroke"], V1 = ["cx", "cy", "fill"], B1 = {
  key: 0,
  class: "trx-radar__legend"
}, P1 = /* @__PURE__ */ g({
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
      const k = x / r.levels * n.value, $ = c(f);
      return [i.value + k * Math.cos($), l.value + k * Math.sin($)];
    }
    function _(x) {
      const f = n.value + 14, k = c(x);
      return [i.value + f * Math.cos(k), l.value + f * Math.sin(k)];
    }
    function d(x) {
      return x.map((f, k) => {
        const $ = Math.min(f, r.max) / r.max * n.value, C = c(k);
        return [i.value + $ * Math.cos(C), l.value + $ * Math.sin(C)];
      });
    }
    function p(x) {
      return x.map((f, k) => `${k === 0 ? "M" : "L"}${f[0].toFixed(1)},${f[1].toFixed(1)}`).join(" ") + " Z";
    }
    const m = S(
      () => Array.from(
        { length: r.levels },
        (x, f) => r.axes.map((k, $) => u(f + 1, $))
      )
    );
    return (x, f) => (s(), o("div", y1, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: `0 0 ${t.size} ${t.size}`,
        style: { width: "100%", "max-width": "100%" }
      }, [
        (s(!0), o(V, null, b(m.value, (k, $) => (s(), o("polygon", {
          key: $,
          points: k.map((C) => C.join(",")).join(" "),
          fill: "none",
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, w1))), 128)),
        (s(!0), o(V, null, b(t.axes, (k, $) => (s(), o("line", {
          key: $,
          x1: i.value,
          y1: l.value,
          x2: u(t.levels, $)[0],
          y2: u(t.levels, $)[1],
          stroke: "var(--trx-border-color)",
          "stroke-width": "1"
        }, null, 8, T1))), 128)),
        (s(!0), o(V, null, b(t.axes, (k, $) => (s(), o("text", {
          key: "l" + $,
          x: _($)[0],
          y: _($)[1],
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(k), 9, C1))), 128)),
        (s(!0), o(V, null, b(t.datasets, (k, $) => (s(), o("g", { key: $ }, [
          t.filled ? (s(), o("path", {
            key: 0,
            d: p(d(k.data)),
            fill: k.color ?? a[$ % a.length],
            "fill-opacity": "0.15"
          }, null, 8, S1)) : h("", !0),
          e("path", {
            d: p(d(k.data)),
            fill: "none",
            stroke: k.color ?? a[$ % a.length],
            "stroke-width": "2",
            "stroke-linejoin": "round"
          }, null, 8, I1),
          (s(!0), o(V, null, b(k.data, (C, A) => (s(), o("circle", {
            key: A,
            cx: d(k.data)[A][0],
            cy: d(k.data)[A][1],
            r: "3",
            fill: k.color ?? a[$ % a.length]
          }, null, 8, V1))), 128))
        ]))), 128))
      ], 8, k1)),
      t.datasets.length > 1 ? (s(), o("div", B1, [
        (s(!0), o(V, null, b(t.datasets, (k, $) => (s(), o("div", {
          key: $,
          class: "trx-radar__legend-item"
        }, [
          e("span", {
            class: "trx-radar__legend-dot",
            style: R({ background: k.color ?? a[$ % a.length] })
          }, null, 4),
          N(" " + v(k.label), 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), zC = /* @__PURE__ */ M(P1, [["__scopeId", "data-v-7ae6d64b"]]), M1 = { class: "trx-bullet" }, A1 = {
  key: 0,
  class: "trx-bullet__label"
}, L1 = { class: "trx-bullet__values" }, z1 = { class: "trx-bullet__val" }, D1 = { class: "trx-bullet__tgt" }, E1 = /* @__PURE__ */ g({
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
    return (l, n) => (s(), o("div", M1, [
      (s(!0), o(V, null, b(t.items, (c) => (s(), o("div", {
        key: c.label,
        class: "trx-bullet__row"
      }, [
        t.showLabels ? (s(), o("div", A1, v(c.label), 1)) : h("", !0),
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
        e("div", L1, [
          e("span", z1, v(c.value) + v(t.unit), 1),
          e("span", D1, "/ " + v(c.target) + v(t.unit), 1)
        ])
      ]))), 128))
    ]));
  }
}), DC = /* @__PURE__ */ M(E1, [["__scopeId", "data-v-f642af30"]]), R1 = { class: "trx-waterfall" }, N1 = ["viewBox", "height"], q1 = ["x1", "y1", "x2", "y2"], F1 = ["x", "y"], O1 = ["x1", "y1", "x2", "y2"], j1 = ["x", "y", "width", "height", "fill"], H1 = ["x1", "y1", "x2", "y2"], U1 = ["x", "y"], W1 = ["x", "y", "fill"], vt = 600, G1 = /* @__PURE__ */ g({
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
      return a.items.map((k) => {
        if (k.isTotal) {
          const C = f + k.value;
          return { ...k, start: 0, end: C, running: f };
        }
        const $ = f;
        return f += k.value, { ...k, start: $, end: f, running: f };
      });
    }), c = S(() => n.value.flatMap((f) => [f.start, f.end])), u = S(() => Math.min(...c.value, 0)), _ = S(() => Math.max(...c.value, 1)), d = S(() => i.value / a.items.length * 0.6);
    function p(f) {
      return r.top + l.value - (f - u.value) / (_.value - u.value) * l.value;
    }
    function m(f) {
      const k = i.value / a.items.length;
      return r.left + f * k + (k - d.value) / 2;
    }
    const x = S(
      () => Array.from({ length: 5 }, (f, k) => {
        const $ = u.value + k / 4 * (_.value - u.value);
        return { v: Math.round($), y: p($) };
      })
    );
    return (f, k) => (s(), o("div", R1, [
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
        }, null, 8, q1))), 128)),
        (s(!0), o(V, null, b(x.value, ($) => (s(), o("text", {
          key: "l" + $.v,
          x: r.left - 6,
          y: $.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v($.v), 9, F1))), 128)),
        e("line", {
          x1: r.left,
          y1: p(0),
          x2: r.left + i.value,
          y2: p(0),
          stroke: "var(--trx-text-secondary)",
          "stroke-width": "1.5"
        }, null, 8, O1),
        (s(!0), o(V, null, b(n.value, ($, C) => (s(), o("g", { key: C }, [
          e("rect", {
            x: m(C),
            y: Math.min(p($.start), p($.end)),
            width: d.value,
            height: Math.abs(p($.start) - p($.end)),
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor,
            rx: "2"
          }, null, 8, j1),
          C < n.value.length - 1 && !$.isTotal && !n.value[C + 1].isTotal ? (s(), o("line", {
            key: 0,
            x1: m(C) + d.value,
            y1: p($.end),
            x2: m(C + 1),
            y2: p($.end),
            stroke: "var(--trx-border-color)",
            "stroke-width": "1",
            "stroke-dasharray": "3,3"
          }, null, 8, H1)) : h("", !0),
          e("text", {
            x: m(C) + d.value / 2,
            y: r.top + l.value + 18,
            "text-anchor": "middle",
            "font-size": "10",
            fill: "var(--trx-text-secondary)"
          }, v($.label), 9, U1),
          e("text", {
            x: m(C) + d.value / 2,
            y: Math.min(p($.start), p($.end)) - 4,
            "text-anchor": "middle",
            "font-size": "9",
            fill: $.isTotal ? t.totalColor : $.value >= 0 ? t.positiveColor : t.negativeColor
          }, v($.value > 0 ? "+" : "") + v($.value), 9, W1)
        ]))), 128))
      ], 8, N1))
    ]));
  }
}), EC = /* @__PURE__ */ M(G1, [["__scopeId", "data-v-246079c5"]]), K1 = { class: "trx-hbar" }, Y1 = {
  key: 0,
  class: "trx-hbar__loading"
}, J1 = {
  key: 1,
  class: "trx-hbar__empty"
}, X1 = {
  key: 2,
  class: "trx-hbar__list"
}, Q1 = { class: "trx-hbar__label-row" }, Z1 = { class: "trx-hbar__label" }, t$ = {
  key: 0,
  class: "trx-hbar__values"
}, e$ = {
  key: 0,
  class: "trx-hbar__target-val"
}, s$ = { class: "trx-hbar__track" }, a$ = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", K1, [
      t.loading ? (s(), o("div", Y1, [...l[0] || (l[0] = [
        e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : t.items.length ? (s(), o("div", X1, [
        (s(!0), o(V, null, b(t.items, (n, c) => (s(), o("div", {
          key: n.label,
          class: "trx-hbar__item"
        }, [
          e("div", Q1, [
            e("span", Z1, v(n.label), 1),
            t.showValues ? (s(), o("div", t$, [
              e("span", {
                class: "trx-hbar__value",
                style: R({ color: n.color ?? a[c % a.length] })
              }, v(n.value.toLocaleString("pt-BR")) + v(t.unit), 5),
              t.showTarget && n.target ? (s(), o("span", e$, "/ " + v(n.target) + v(t.unit), 1)) : h("", !0)
            ])) : h("", !0)
          ]),
          e("div", s$, [
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
      ])) : (s(), o("div", J1, "Sem dados"))
    ]));
  }
}), RC = /* @__PURE__ */ M(a$, [["__scopeId", "data-v-699106b6"]]), l$ = { class: "trx-scatter" }, n$ = ["viewBox", "height"], o$ = ["x1", "y1", "x2", "y2"], r$ = ["x1", "y1", "x2", "y2"], i$ = ["x", "y"], c$ = ["x", "y"], u$ = ["cx", "cy", "r", "fill"], d$ = { key: 0 }, _$ = ["x", "y"], p$ = {
  key: 0,
  class: "trx-scatter__legend"
}, mt = 600, v$ = /* @__PURE__ */ g({
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
    const a = ["var(--trx-accent-color)", "#f472b6", "#60a5fa", "#fb923c", "#a78bfa"], r = t, i = { top: 16, right: 16, bottom: 36, left: 44 }, l = S(() => mt - i.left - i.right), n = S(() => r.height - i.top - i.bottom), c = S(() => r.datasets.flatMap((C) => C.data.map((A) => A.x))), u = S(() => r.datasets.flatMap((C) => C.data.map((A) => A.y))), _ = S(() => Math.min(...c.value, 0)), d = S(() => Math.max(...c.value, 1)), p = S(() => Math.min(...u.value, 0)), m = S(() => Math.max(...u.value, 1));
    function x(C) {
      return i.left + (C - _.value) / (d.value - _.value) * l.value;
    }
    function f(C) {
      return i.top + n.value - (C - p.value) / (m.value - p.value) * n.value;
    }
    const k = S(() => Array.from({ length: 5 }, (C, A) => {
      const E = _.value + A / 4 * (d.value - _.value);
      return { v: Math.round(E), x: x(E) };
    })), $ = S(() => Array.from({ length: 5 }, (C, A) => {
      const E = p.value + A / 4 * (m.value - p.value);
      return { v: Math.round(E), y: f(E) };
    }));
    return (C, A) => (s(), o("div", l$, [
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
          }, null, 8, o$))), 128)),
          (s(!0), o(V, null, b(k.value, (E) => (s(), o("line", {
            key: "gx" + E.v,
            x1: E.x,
            y1: i.top,
            x2: E.x,
            y2: i.top + n.value,
            stroke: "var(--trx-border-color)",
            "stroke-width": "1"
          }, null, 8, r$))), 128))
        ], 64)) : h("", !0),
        (s(!0), o(V, null, b($.value, (E) => (s(), o("text", {
          key: "yl" + E.v,
          x: i.left - 6,
          y: E.y + 4,
          "text-anchor": "end",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, i$))), 128)),
        (s(!0), o(V, null, b(k.value, (E) => (s(), o("text", {
          key: "xl" + E.v,
          x: E.x,
          y: i.top + n.value + 18,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(E.v), 9, c$))), 128)),
        (s(!0), o(V, null, b(t.datasets, (E, F) => (s(), o("g", { key: F }, [
          (s(!0), o(V, null, b(E.data, (q, K) => (s(), o("circle", {
            key: K,
            cx: x(q.x),
            cy: f(q.y),
            r: q.size ?? 5,
            fill: E.color ?? a[F % a.length],
            "fill-opacity": "0.8"
          }, [
            q.label ? (s(), o("title", d$, v(q.label) + ": (" + v(q.x) + ", " + v(q.y) + ")", 1)) : h("", !0)
          ], 8, u$))), 128))
        ]))), 128)),
        t.xLabel ? (s(), o("text", {
          key: 1,
          x: i.left + l.value / 2,
          y: t.height - 2,
          "text-anchor": "middle",
          "font-size": "10",
          fill: "var(--trx-text-secondary)"
        }, v(t.xLabel), 9, _$)) : h("", !0)
      ], 8, n$)),
      t.datasets.length > 1 ? (s(), o("div", p$, [
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
}), NC = /* @__PURE__ */ M(v$, [["__scopeId", "data-v-6225f708"]]), m$ = { class: "trx-pie" }, f$ = ["width", "height", "viewBox"], x$ = ["d", "fill"], h$ = ["x", "y"], $$ = {
  key: 0,
  class: "trx-pie__legend"
}, g$ = { class: "trx-pie__legend-label" }, b$ = { class: "trx-pie__legend-pct" }, y$ = /* @__PURE__ */ g({
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
        const k = i.value + n.value * Math.cos(f), $ = l.value + n.value * Math.sin(f), C = i.value + n.value * Math.cos(_), A = l.value + n.value * Math.sin(_), E = x > Math.PI ? 1 : 0, F = f + x / 2;
        return {
          ...d,
          color: d.color ?? a[p % a.length],
          pct: Math.round(m * 100),
          d: `M ${i.value} ${l.value} L ${k} ${$} A ${n.value} ${n.value} 0 ${E} 1 ${C} ${A} Z`,
          labelX: i.value + n.value * 0.65 * Math.cos(F),
          labelY: l.value + n.value * 0.65 * Math.sin(F)
        };
      });
    });
    return (_, d) => (s(), o("div", m$, [
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
        ], 8, x$))), 128)),
        t.showLabels ? (s(!0), o(V, { key: 0 }, b(u.value.filter((p) => p.pct > 8), (p, m) => (s(), o("text", {
          key: "l" + m,
          x: p.labelX,
          y: p.labelY,
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": "11",
          "font-weight": "700",
          fill: "white"
        }, v(p.pct) + "%", 9, h$))), 128)) : h("", !0)
      ], 8, f$)),
      t.showLegend ? (s(), o("div", $$, [
        (s(!0), o(V, null, b(u.value, (p, m) => (s(), o("div", {
          key: m,
          class: "trx-pie__legend-item"
        }, [
          e("span", {
            class: "trx-pie__legend-dot",
            style: R({ background: p.color })
          }, null, 4),
          e("span", g$, v(p.label), 1),
          e("span", b$, v(p.pct) + "%", 1)
        ]))), 128))
      ])) : h("", !0)
    ]));
  }
}), qC = /* @__PURE__ */ M(y$, [["__scopeId", "data-v-a92927e0"]]), k$ = {
  key: 0,
  class: "trx-typing__name"
}, w$ = {
  key: 1,
  class: "trx-typing__text"
}, T$ = /* @__PURE__ */ g({
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
          class: y(["trx-typing", `trx-typing--${t.variant}`])
        }, [
          t.variant === "bubble" ? (s(), o(V, { key: 0 }, [
            r[0] || (r[0] = e("div", { class: "trx-typing__bubble" }, [
              e("span", { class: "trx-typing__dot" }),
              e("span", { class: "trx-typing__dot" }),
              e("span", { class: "trx-typing__dot" })
            ], -1)),
            t.name ? (s(), o("span", k$, v(t.name) + " está digitando...", 1)) : h("", !0)
          ], 64)) : (s(), o("span", w$, [
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
}), FC = /* @__PURE__ */ M(T$, [["__scopeId", "data-v-04651ca9"]]), C$ = { class: "trx-quick-replies" }, S$ = ["disabled", "onClick"], I$ = /* @__PURE__ */ g({
  __name: "TrxQuickReplies",
  props: {
    replies: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const r = a;
    return (i, l) => (s(), o("div", C$, [
      (s(!0), o(V, null, b(t.replies, (n) => (s(), o("button", {
        key: n.id,
        class: "trx-quick-replies__btn",
        disabled: t.disabled,
        onClick: (c) => r("select", n)
      }, v(n.label), 9, S$))), 128))
    ]));
  }
}), OC = /* @__PURE__ */ M(I$, [["__scopeId", "data-v-082e109e"]]), V$ = { class: "trx-canned__search-wrap" }, B$ = ["placeholder"], P$ = { class: "trx-canned__list" }, M$ = ["onClick", "onMouseenter"], A$ = { class: "trx-canned__shortcut" }, L$ = { class: "trx-canned__info" }, z$ = { class: "trx-canned__title" }, D$ = { class: "trx-canned__preview" }, E$ = {
  key: 0,
  class: "trx-canned__cat"
}, R$ = {
  key: 0,
  class: "trx-canned__empty"
}, N$ = /* @__PURE__ */ g({
  __name: "TrxCannedResponses",
  props: {
    responses: { default: () => [] },
    modelValue: { type: Boolean, default: !1 },
    trigger: { default: "/" }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(""), n = z(0), c = S(
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
      e("div", V$, [
        p[4] || (p[4] = e("i", { class: "pi pi-search trx-canned__search-icon" }, null, -1)),
        Y(e("input", {
          "onUpdate:modelValue": p[0] || (p[0] = (m) => l.value = m),
          class: "trx-canned__search",
          placeholder: `Buscar resposta (${t.trigger}...)`,
          autofocus: "",
          onInput: p[1] || (p[1] = (m) => n.value = 0)
        }, null, 40, B$), [
          [J, l.value]
        ]),
        e("button", {
          class: "trx-canned__close",
          onClick: p[2] || (p[2] = (m) => i("update:modelValue", !1))
        }, [...p[3] || (p[3] = [
          e("i", { class: "pi pi-times" }, null, -1)
        ])])
      ]),
      e("div", P$, [
        (s(!0), o(V, null, b(c.value, (m, x) => (s(), o("div", {
          key: m.id,
          class: y(["trx-canned__item", { "trx-canned__item--highlighted": x === n.value }]),
          onClick: (f) => u(m),
          onMouseenter: (f) => n.value = x
        }, [
          e("code", A$, v(m.shortcut), 1),
          e("div", L$, [
            e("span", z$, v(m.title), 1),
            e("span", D$, v(m.content), 1)
          ]),
          m.category ? (s(), o("span", E$, v(m.category), 1)) : h("", !0)
        ], 42, M$))), 128)),
        c.value.length ? h("", !0) : (s(), o("div", R$, "Nenhuma resposta encontrada"))
      ])
    ], 32)) : h("", !0);
  }
}), jC = /* @__PURE__ */ M(N$, [["__scopeId", "data-v-b64dd5e1"]]), q$ = { class: "trx-email" }, F$ = { class: "trx-email__field" }, O$ = { class: "trx-email__chips" }, j$ = ["onClick"], H$ = {
  key: 0,
  class: "trx-email__field"
}, U$ = { class: "trx-email__chips" }, W$ = ["onClick"], G$ = { class: "trx-email__field" }, K$ = { class: "trx-email__footer" }, Y$ = { class: "trx-email__footer-left" }, J$ = {
  class: "trx-email__attach-btn",
  title: "Anexar arquivo"
}, X$ = {
  key: 0,
  class: "trx-email__attach-count"
}, Q$ = { class: "trx-email__footer-right" }, Z$ = ["disabled"], tg = /* @__PURE__ */ g({
  __name: "TrxEmailComposer",
  emits: ["send", "discard"],
  setup(t, { emit: a }) {
    const r = z({ to: [], cc: [], subject: "", body: "" }), i = z(""), l = z(""), n = z(!1), c = z(!1), u = a;
    function _(x, f) {
      const k = f.value.trim();
      k && k.includes("@") && (r.value[x] = [...r.value[x] ?? [], k], f.value = "", x === "to" ? i.value = "" : l.value = "");
    }
    function d(x, f) {
      const k = [...r.value[x] ?? []];
      k.splice(f, 1), r.value[x] = k;
    }
    async function p() {
      c.value = !0, u("send", { ...r.value }), c.value = !1;
    }
    function m(x) {
      const f = x.target.files;
      f && (r.value.attachments = [...r.value.attachments ?? [], ...Array.from(f)]);
    }
    return (x, f) => {
      var k;
      return s(), o("div", q$, [
        e("div", F$, [
          f[12] || (f[12] = e("label", { class: "trx-email__label" }, "Para", -1)),
          e("div", O$, [
            (s(!0), o(V, null, b(r.value.to, ($, C) => (s(), o("span", {
              key: C,
              class: "trx-email__chip"
            }, [
              N(v($) + " ", 1),
              e("button", {
                class: "trx-email__chip-remove",
                onClick: (A) => d("to", C)
              }, [...f[11] || (f[11] = [
                e("i", { class: "pi pi-times" }, null, -1)
              ])], 8, j$)
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
        n.value ? (s(), o("div", H$, [
          f[14] || (f[14] = e("label", { class: "trx-email__label" }, "CC", -1)),
          e("div", U$, [
            (s(!0), o(V, null, b(r.value.cc, ($, C) => (s(), o("span", {
              key: C,
              class: "trx-email__chip"
            }, [
              N(v($) + " ", 1),
              e("button", {
                class: "trx-email__chip-remove",
                onClick: (A) => d("cc", C)
              }, [...f[13] || (f[13] = [
                e("i", { class: "pi pi-times" }, null, -1)
              ])], 8, W$)
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
        e("div", G$, [
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
        e("div", K$, [
          e("div", Y$, [
            e("label", J$, [
              f[16] || (f[16] = e("i", { class: "pi pi-paperclip" }, null, -1)),
              e("input", {
                type: "file",
                multiple: "",
                hidden: "",
                onChange: m
              }, null, 32)
            ]),
            (k = r.value.attachments) != null && k.length ? (s(), o("span", X$, v(r.value.attachments.length) + " anexo(s) ", 1)) : h("", !0)
          ]),
          e("div", Q$, [
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
            ], 8, Z$)
          ])
        ])
      ]);
    };
  }
}), HC = /* @__PURE__ */ M(tg, [["__scopeId", "data-v-96c2a2b1"]]), eg = { class: "trx-tpl" }, sg = { class: "trx-tpl__search" }, ag = { class: "trx-tpl__layout" }, lg = { class: "trx-tpl__list" }, ng = {
  key: 0,
  class: "trx-tpl__loading"
}, og = { class: "trx-tpl__cat-label" }, rg = ["onClick"], ig = { class: "trx-tpl__item-name" }, cg = { class: "trx-tpl__item-lang" }, ug = { class: "trx-tpl__preview" }, dg = {
  key: 0,
  class: "trx-tpl__no-select"
}, _g = { class: "trx-tpl__preview-body" }, pg = {
  key: 0,
  class: "trx-tpl__vars"
}, vg = { class: "trx-tpl__var-label" }, mg = ["onUpdate:modelValue", "placeholder"], fg = /* @__PURE__ */ g({
  __name: "TrxTemplateSelector",
  props: {
    templates: { default: () => [] },
    modelValue: { default: null },
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(""), n = z(null), c = z({}), u = S(() => [...new Set(r.templates.map((x) => x.category))]), _ = S(
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
      return Object.entries(c.value).forEach(([f, k]) => {
        x = x.replace(new RegExp(f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), k || f);
      }), x;
    }
    return (x, f) => {
      var k;
      return s(), o("div", eg, [
        e("div", sg, [
          f[1] || (f[1] = e("i", { class: "pi pi-search trx-tpl__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": f[0] || (f[0] = ($) => l.value = $),
            class: "trx-tpl__search-input",
            placeholder: "Buscar template..."
          }, null, 512), [
            [J, l.value]
          ])
        ]),
        e("div", ag, [
          e("div", lg, [
            t.loading ? (s(), o("div", ng, [...f[2] || (f[2] = [
              e("i", { class: "pi pi-spin pi-spinner" }, null, -1)
            ])])) : (s(!0), o(V, { key: 1 }, b(u.value, ($) => (s(), o("div", { key: $ }, [
              e("div", og, v($), 1),
              (s(!0), o(V, null, b(_.value.filter((C) => C.category === $), (C) => {
                var A;
                return s(), o("div", {
                  key: C.id,
                  class: y(["trx-tpl__item", { "trx-tpl__item--active": ((A = n.value) == null ? void 0 : A.id) === C.id }]),
                  onClick: (E) => d(C)
                }, [
                  e("span", ig, v(C.name), 1),
                  e("span", cg, v(C.language), 1)
                ], 10, rg);
              }), 128))
            ]))), 128))
          ]),
          e("div", ug, [
            n.value ? (s(), o(V, { key: 1 }, [
              e("div", _g, v(m()), 1),
              (k = n.value.variables) != null && k.length ? (s(), o("div", pg, [
                f[4] || (f[4] = e("div", { class: "trx-tpl__vars-title" }, "Variáveis", -1)),
                (s(!0), o(V, null, b(n.value.variables, ($) => (s(), o("div", {
                  key: $,
                  class: "trx-tpl__var-row"
                }, [
                  e("label", vg, v($), 1),
                  Y(e("input", {
                    "onUpdate:modelValue": (C) => c.value[$] = C,
                    class: "trx-tpl__var-input",
                    placeholder: $
                  }, null, 8, mg), [
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
            ], 64)) : (s(), o("div", dg, [...f[3] || (f[3] = [
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
}), UC = /* @__PURE__ */ M(fg, [["__scopeId", "data-v-6e07f607"]]), xg = { class: "trx-sentiment__icon-wrap" }, hg = { class: "trx-sentiment__emoji" }, $g = { class: "trx-sentiment__info" }, gg = { class: "trx-sentiment__label" }, bg = {
  key: 0,
  class: "trx-sentiment__score"
}, yg = {
  key: 0,
  class: "trx-sentiment__bar-wrap"
}, kg = /* @__PURE__ */ g({
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
      class: y(["trx-sentiment", `trx-sentiment--${t.size}`]),
      style: R({ "--sc": i.value.color })
    }, [
      e("div", xg, [
        e("span", hg, v(i.value.emoji), 1)
      ]),
      e("div", $g, [
        e("span", gg, v(t.label ?? i.value.label), 1),
        t.showScore && t.sentiment !== "unknown" ? (s(), o("span", bg, v(l.value), 1)) : h("", !0)
      ]),
      t.showScore && t.sentiment !== "unknown" ? (s(), o("div", yg, [
        e("div", {
          class: "trx-sentiment__bar",
          style: R({ width: Math.abs(t.score) * 100 + "%" })
        }, null, 4)
      ])) : h("", !0)
    ], 6));
  }
}), WC = /* @__PURE__ */ M(kg, [["__scopeId", "data-v-0cf3b19c"]]), wg = { class: "trx-bot-bubble" }, Tg = { class: "trx-bot-bubble__avatar" }, Cg = ["src", "alt"], Sg = {
  key: 1,
  class: "trx-bot-bubble__avatar-init"
}, Ig = { class: "trx-bot-bubble__content" }, Vg = { class: "trx-bot-bubble__name" }, Bg = { class: "trx-bot-bubble__message" }, Pg = {
  key: 0,
  class: "trx-bot-bubble__typing"
}, Mg = { class: "trx-bot-bubble__text" }, Ag = {
  key: 0,
  class: "trx-bot-bubble__options"
}, Lg = ["onClick"], zg = {
  key: 0,
  class: "trx-bot-bubble__time"
}, Dg = /* @__PURE__ */ g({
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
    return (i, l) => (s(), o("div", wg, [
      e("div", Tg, [
        t.botAvatar ? (s(), o("img", {
          key: 0,
          src: t.botAvatar,
          alt: t.botName,
          class: "trx-bot-bubble__avatar-img"
        }, null, 8, Cg)) : (s(), o("div", Sg, [...l[0] || (l[0] = [
          e("i", { class: "pi pi-android" }, null, -1)
        ])]))
      ]),
      e("div", Ig, [
        e("div", Vg, v(t.botName), 1),
        e("div", Bg, [
          t.loading ? (s(), o("div", Pg, [...l[1] || (l[1] = [
            e("span", null, null, -1),
            e("span", null, null, -1),
            e("span", null, null, -1)
          ])])) : (s(), o(V, { key: 1 }, [
            e("p", Mg, v(t.message), 1),
            t.options.length ? (s(), o("div", Ag, [
              (s(!0), o(V, null, b(t.options, (n) => (s(), o("button", {
                key: n,
                class: "trx-bot-bubble__option",
                onClick: (c) => r("optionSelect", n)
              }, v(n), 9, Lg))), 128))
            ])) : h("", !0)
          ], 64))
        ]),
        t.time ? (s(), o("span", zg, v(t.time), 1)) : h("", !0)
      ])
    ]));
  }
}), GC = /* @__PURE__ */ M(Dg, [["__scopeId", "data-v-fdd3fdf6"]]), Eg = { class: "trx-tz__content" }, Rg = { class: "trx-tz__time" }, Ng = { class: "trx-tz__meta" }, qg = {
  key: 0,
  class: "trx-tz__date"
}, Fg = { class: "trx-tz__offset" }, Og = {
  key: 0,
  class: "trx-tz__local"
}, jg = { class: "trx-tz__local-time" }, Hg = /* @__PURE__ */ g({
  __name: "TrxContactTimezone",
  props: {
    timezone: { default: "America/Sao_Paulo" },
    contactName: {},
    showClock: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, r = z(/* @__PURE__ */ new Date());
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
        return ((m = new Intl.DateTimeFormat("en-US", { timeZone: a.timezone, timeZoneName: "short" }).formatToParts(r.value).find((k) => k.type === "timeZoneName")) == null ? void 0 : m.value) ?? a.timezone;
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
      class: y(["trx-tz", { "trx-tz--compact": t.compact }])
    }, [
      e("div", {
        class: y(["trx-tz__icon-wrap", p.value ? "night" : d.value ? "day" : "evening"])
      }, [
        e("i", {
          class: y(p.value ? "pi pi-moon" : "pi pi-sun")
        }, null, 2)
      ], 2),
      e("div", Eg, [
        e("div", Rg, v(l.value), 1),
        e("div", Ng, [
          t.compact ? h("", !0) : (s(), o("span", qg, v(n.value), 1)),
          e("span", Fg, v(u.value), 1),
          e("span", {
            class: y(["trx-tz__status", p.value ? "night" : d.value ? "business" : "off"])
          }, v(p.value ? "Noite" : d.value ? "Horário comercial" : "Fora do horário"), 3)
        ])
      ]),
      t.compact ? h("", !0) : (s(), o("div", Og, [
        x[0] || (x[0] = e("span", { class: "trx-tz__local-label" }, "Seu horário:", -1)),
        e("span", jg, v(c.value), 1)
      ]))
    ], 2));
  }
}), KC = /* @__PURE__ */ M(Hg, [["__scopeId", "data-v-61352836"]]), Ug = { class: "trx-split__pane trx-split__pane--second" }, Wg = /* @__PURE__ */ g({
  __name: "TrxSplitPane",
  props: {
    direction: { default: "horizontal" },
    initialSize: { default: 50 },
    minSize: { default: 15 },
    maxSize: { default: 85 }
  },
  setup(t) {
    const a = t, r = z(a.initialSize), i = z(!1), l = z();
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
      class: y(["trx-split", [`trx-split--${t.direction}`, { "trx-split--dragging": i.value }]])
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
      e("div", Ug, [
        I(_.$slots, "second", {}, void 0, !0)
      ])
    ], 2));
  }
}), YC = /* @__PURE__ */ M(Wg, [["__scopeId", "data-v-146c2928"]]), Gg = {
  key: 0,
  class: "trx-fab-actions"
}, Kg = { class: "trx-fab-action__label" }, Yg = ["title", "onClick"], Jg = /* @__PURE__ */ g({
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
    const r = a, i = z(!1);
    return (l, n) => (s(), o("div", {
      class: y(["trx-fab-wrap", `trx-fab-wrap--${t.position}`])
    }, [
      O(j, { name: "trx-fab-actions" }, {
        default: B(() => [
          i.value && t.actions.length ? (s(), o("div", Gg, [
            (s(!0), o(V, null, b([...t.actions].reverse(), (c, u) => (s(), o("div", {
              key: c.id,
              class: "trx-fab-action",
              style: R({ "--delay": u * 0.05 + "s", "--ac": c.color ?? "var(--trx-accent-color)" })
            }, [
              e("span", Kg, v(c.label), 1),
              e("button", {
                class: "trx-fab-action__btn",
                style: R({ background: c.color ?? "var(--trx-accent-color)" }),
                title: c.label,
                onClick: (_) => {
                  r("action", c), i.value = !1;
                }
              }, [
                e("i", {
                  class: y(c.icon)
                }, null, 2)
              ], 12, Yg)
            ], 4))), 128))
          ])) : h("", !0)
        ]),
        _: 1
      }),
      e("button", {
        class: y(["trx-fab", `trx-fab--${t.size}`]),
        style: R({ background: t.color ?? "var(--trx-accent-color)" }),
        onClick: n[0] || (n[0] = (c) => t.actions.length ? i.value = !i.value : r("click"))
      }, [
        O(j, { name: "trx-fab-rotate" }, {
          default: B(() => [
            (s(), o("i", {
              key: i.value ? "close" : "open",
              class: y(i.value ? "pi pi-times" : t.icon)
            }, null, 2))
          ]),
          _: 1
        })
      ], 6)
    ], 2));
  }
}), JC = /* @__PURE__ */ M(Jg, [["__scopeId", "data-v-1778a9e3"]]), Xg = {
  key: 0,
  class: "trx-ctx-menu__separator"
}, Qg = ["disabled", "onClick"], Zg = /* @__PURE__ */ g({
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
              u.separator ? (s(), o("div", Xg)) : (s(), o("button", {
                key: 1,
                class: y(["trx-ctx-menu__item", { "trx-ctx-menu__item--danger": u.danger, "trx-ctx-menu__item--disabled": u.disabled }]),
                disabled: u.disabled,
                role: "menuitem",
                onClick: (_) => !u.disabled && (r("select", u), i())
              }, [
                u.icon ? (s(), o("i", {
                  key: 0,
                  class: y([u.icon, "trx-ctx-menu__icon"])
                }, null, 2)) : h("", !0),
                e("span", null, v(u.label), 1)
              ], 10, Qg))
            ], 64))), 128))
          ], 4)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), XC = /* @__PURE__ */ M(Zg, [["__scopeId", "data-v-0e16a25d"]]), tb = { class: "trx-drag-list" }, eb = ["draggable", "onDragstart", "onDragover", "onDrop"], sb = ["onDragstart"], ab = { class: "trx-drag-list__content" }, lb = /* @__PURE__ */ g({
  __name: "TrxDraggableList",
  props: {
    items: {},
    handle: { type: Boolean }
  },
  emits: ["update:items", "reorder"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z(null), n = z(null);
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
    return (p, m) => (s(), o("div", tb, [
      (s(!0), o(V, null, b(t.items, (x, f) => (s(), o("div", {
        key: x.id,
        class: y(["trx-drag-list__item", {
          "trx-drag-list__item--dragging": l.value === f,
          "trx-drag-list__item--over": n.value === f && l.value !== f
        }]),
        draggable: !t.handle,
        onDragstart: (k) => c(f),
        onDragover: (k) => u(k, f),
        onDrop: (k) => _(f),
        onDragend: d
      }, [
        t.handle ? (s(), o("div", {
          key: 0,
          class: "trx-drag-list__handle",
          draggable: "true",
          onDragstart: (k) => c(f)
        }, [...m[0] || (m[0] = [
          e("i", { class: "pi pi-bars" }, null, -1)
        ])], 40, sb)) : h("", !0),
        e("div", ab, [
          I(p.$slots, "default", {
            item: x,
            index: f
          }, void 0, !0)
        ])
      ], 42, eb))), 128))
    ]));
  }
}), QC = /* @__PURE__ */ M(lb, [["__scopeId", "data-v-b1539e37"]]), nb = /* @__PURE__ */ g({
  __name: "TrxBackToTop",
  props: {
    threshold: { default: 300 },
    scrollTarget: {},
    behavior: { default: "smooth" }
  },
  setup(t) {
    const a = t, r = z(!1);
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
}), ZC = /* @__PURE__ */ M(nb, [["__scopeId", "data-v-2789be87"]]), ob = ["title"], rb = { class: "trx-rsidebar__content" }, ib = /* @__PURE__ */ g({
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
    const r = t, i = a, l = z(r.initialWidth), n = z(!1), c = z(!1), u = z(r.initialWidth);
    function _(x) {
      c.value = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", p), x.preventDefault();
    }
    function d(x) {
      if (!c.value) return;
      const f = r.side === "left" ? x.movementX : -x.movementX, k = Math.max(r.minWidth, Math.min(r.maxWidth, l.value + f));
      l.value = k, i("resize", k);
    }
    function p() {
      c.value = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p);
    }
    function m() {
      n.value ? (n.value = !1, l.value = u.value, i("expand")) : (u.value = l.value, n.value = !0, i("collapse"));
    }
    return G(p), (x, f) => (s(), o("div", {
      class: y(["trx-rsidebar", [`trx-rsidebar--${t.side}`, { "trx-rsidebar--collapsed": n.value, "trx-rsidebar--dragging": c.value }]]),
      style: R({ width: n.value ? "0px" : l.value + "px" })
    }, [
      e("div", {
        class: y(["trx-rsidebar__handle", `trx-rsidebar__handle--${t.side}`]),
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
            class: y(t.side === "left" ? n.value ? "pi pi-chevron-right" : "pi pi-chevron-left" : n.value ? "pi pi-chevron-left" : "pi pi-chevron-right")
          }, null, 2)
        ], 40, ob)) : h("", !0)
      ], 34),
      e("div", rb, [
        I(x.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), t4 = /* @__PURE__ */ M(ib, [["__scopeId", "data-v-bfeae2d6"]]), cb = { class: "trx-jv" }, ub = { class: "trx-jv__toolbar" }, db = ["innerHTML"], _b = /* @__PURE__ */ g({
  __name: "TrxJsonViewer",
  props: {
    data: {},
    expandDepth: { default: 2 }
  },
  setup(t) {
    const a = t, r = z(!1);
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
      const x = d >= a.expandDepth, f = `jv-${Math.random().toString(36).slice(2)}`, k = p ? "[" : "{", $ = p ? "]" : "}", C = "  ".repeat(d + 1), A = "  ".repeat(d), E = m.map(([F, q]) => {
        const K = p ? "" : `<span class="trx-jv-key">"${n(String(F))}"</span><span class="trx-jv-colon">: </span>`;
        return `${C}${K}${l(q, d + 1)}`;
      }).join(`,
`);
      return `<span class="trx-jv-brace">${k}</span><span class="trx-jv-toggle" data-target="${f}" title="Toggle">${x ? "▸" : "▾"}</span><span class="trx-jv-count">${m.length}</span><span id="${f}" class="trx-jv-block"${x ? ' style="display:none"' : ""}>
${E}
${A}</span><span class="trx-jv-brace">${$}</span>`;
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
    return (_, d) => (s(), o("div", cb, [
      e("div", ub, [
        d[0] || (d[0] = e("span", { class: "trx-jv__badge" }, "JSON", -1)),
        e("button", {
          class: "trx-jv__copy",
          onClick: i
        }, [
          e("i", {
            class: y(r.value ? "pi pi-check" : "pi pi-copy")
          }, null, 2),
          N(" " + v(r.value ? "Copiado" : "Copiar"), 1)
        ])
      ]),
      e("pre", {
        class: "trx-jv__body",
        onClick: u,
        innerHTML: c.value
      }, null, 8, db)
    ]));
  }
}), e4 = /* @__PURE__ */ M(_b, [["__scopeId", "data-v-56a7e2b2"]]), pb = { class: "trx-diff" }, vb = { class: "trx-diff__header" }, mb = {
  key: 0,
  class: "trx-diff__title"
}, fb = { class: "trx-diff__stats" }, xb = { class: "trx-diff__stat trx-diff__stat--add" }, hb = { class: "trx-diff__stat trx-diff__stat--rem" }, $b = {
  key: 0,
  class: "trx-diff__unified"
}, gb = { class: "trx-diff__gutter" }, bb = { class: "trx-diff__gutter" }, yb = { class: "trx-diff__marker" }, kb = { class: "trx-diff__code" }, wb = {
  key: 1,
  class: "trx-diff__split"
}, Tb = { class: "trx-diff__pane" }, Cb = { class: "trx-diff__pane-title" }, Sb = { class: "trx-diff__gutter" }, Ib = { class: "trx-diff__marker" }, Vb = { class: "trx-diff__code" }, Bb = { class: "trx-diff__pane" }, Pb = { class: "trx-diff__pane-title" }, Mb = { class: "trx-diff__gutter" }, Ab = { class: "trx-diff__marker" }, Lb = { class: "trx-diff__code" }, zb = /* @__PURE__ */ g({
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
      const k = [];
      let $ = 0, C = 0, A = 1, E = 1;
      for (; $ < m || C < x; )
        $ < m && C < x && d[$] === p[C] ? (k.push({ type: "equal", content: d[$], lineOrig: A++, lineMod: E++ }), $++, C++) : C < x && ($ >= m || f[$][C + 1] >= f[$ + 1][C]) ? (k.push({ type: "add", content: p[C], lineOrig: null, lineMod: E++ }), C++) : (k.push({ type: "remove", content: d[$], lineOrig: A++, lineMod: null }), $++);
      return k;
    }
    const i = S(() => r(a.original, a.modified)), l = S(() => ({
      added: i.value.filter((u) => u.type === "add").length,
      removed: i.value.filter((u) => u.type === "remove").length
    })), n = S(() => i.value.filter((u) => u.type !== "add")), c = S(() => i.value.filter((u) => u.type !== "remove"));
    return (u, _) => (s(), o("div", pb, [
      e("div", vb, [
        t.title ? (s(), o("span", mb, v(t.title), 1)) : h("", !0),
        e("div", fb, [
          e("span", xb, "+" + v(l.value.added), 1),
          e("span", hb, "-" + v(l.value.removed), 1)
        ])
      ]),
      t.unified ? (s(), o("div", $b, [
        (s(!0), o(V, null, b(i.value, (d, p) => (s(), o("div", {
          key: p,
          class: y(["trx-diff__line", `trx-diff__line--${d.type}`])
        }, [
          e("span", gb, v(d.lineOrig ?? ""), 1),
          e("span", bb, v(d.lineMod ?? ""), 1),
          e("span", yb, v(d.type === "add" ? "+" : d.type === "remove" ? "-" : " "), 1),
          e("span", kb, v(d.content), 1)
        ], 2))), 128))
      ])) : (s(), o("div", wb, [
        e("div", Tb, [
          e("div", Cb, v(t.titleOriginal), 1),
          (s(!0), o(V, null, b(n.value, (d, p) => (s(), o("div", {
            key: p,
            class: y(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", Sb, v(d.lineOrig), 1),
            e("span", Ib, v(d.type === "remove" ? "-" : " "), 1),
            e("span", Vb, v(d.content), 1)
          ], 2))), 128))
        ]),
        _[0] || (_[0] = e("div", { class: "trx-diff__divider" }, null, -1)),
        e("div", Bb, [
          e("div", Pb, v(t.titleModified), 1),
          (s(!0), o(V, null, b(c.value, (d, p) => (s(), o("div", {
            key: p,
            class: y(["trx-diff__line", `trx-diff__line--${d.type}`])
          }, [
            e("span", Mb, v(d.lineMod), 1),
            e("span", Ab, v(d.type === "add" ? "+" : " "), 1),
            e("span", Lb, v(d.content), 1)
          ], 2))), 128))
        ])
      ]))
    ]));
  }
}), s4 = /* @__PURE__ */ M(zb, [["__scopeId", "data-v-cc06dd9b"]]), Db = { class: "trx-inf__sentinel" }, Eb = /* @__PURE__ */ g({
  __name: "TrxInfiniteScroll",
  props: {
    loading: { type: Boolean, default: !1 },
    hasMore: { type: Boolean, default: !0 },
    threshold: { default: 80 },
    scrollTarget: {}
  },
  emits: ["load"],
  setup(t, { emit: a }) {
    const r = t, i = a, l = z();
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
      e("div", Db, [
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
}), a4 = /* @__PURE__ */ M(Eb, [["__scopeId", "data-v-5ed8d6bb"]]), Rb = { class: "trx-pivot" }, Nb = { class: "trx-pivot__wrap" }, qb = { class: "trx-pivot__table" }, Fb = { class: "trx-pivot__th trx-pivot__th--corner" }, Ob = {
  key: 0,
  class: "trx-pivot__th trx-pivot__th--total"
}, jb = { class: "trx-pivot__td trx-pivot__td--label" }, Hb = {
  key: 0,
  class: "trx-pivot__td trx-pivot__td--total"
}, Ub = { key: 0 }, Wb = { class: "trx-pivot__td trx-pivot__td--grand" }, Gb = /* @__PURE__ */ g({
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
          return x.reduce((f, k) => f + k, 0) / x.length;
        case "min":
          return Math.min(...x);
        case "max":
          return Math.max(...x);
        default:
          return x.reduce((f, k) => f + k, 0);
      }
    }
    function i(x) {
      return a.aggregation === "count" ? String(x) : x.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
    }
    const l = S(() => [...new Set(a.data.map((x) => String(x[a.rowField])))]), n = S(() => [...new Set(a.data.map((x) => String(x[a.colField])))]), c = (x, f) => i(r(
      a.data.filter((k) => String(k[a.rowField]) === x && String(k[a.colField]) === f).map((k) => Number(k[a.valueField]) || 0)
    )), u = (x) => i(r(
      n.value.flatMap(
        (f) => a.data.filter((k) => String(k[a.rowField]) === x && String(k[a.colField]) === f).map((k) => Number(k[a.valueField]) || 0)
      )
    )), _ = (x) => i(r(
      l.value.flatMap(
        (f) => a.data.filter((k) => String(k[a.rowField]) === f && String(k[a.colField]) === x).map((k) => Number(k[a.valueField]) || 0)
      )
    )), d = S(() => i(r(a.data.map((x) => Number(x[a.valueField]) || 0)))), p = S(() => {
      let x = 0;
      for (const f of l.value)
        for (const k of n.value) {
          const $ = a.data.filter((A) => String(A[a.rowField]) === f && String(A[a.colField]) === k).map((A) => Number(A[a.valueField]) || 0), C = r($);
          C > x && (x = C);
        }
      return x;
    });
    function m(x, f) {
      const k = a.data.filter(($) => String($[a.rowField]) === x && String($[a.colField]) === f).map(($) => Number($[a.valueField]) || 0);
      return p.value ? r(k) / p.value : 0;
    }
    return (x, f) => (s(), o("div", Rb, [
      e("div", Nb, [
        e("table", qb, [
          e("thead", null, [
            e("tr", null, [
              e("th", Fb, v(t.rowLabel), 1),
              (s(!0), o(V, null, b(n.value, (k) => (s(), o("th", {
                key: k,
                class: "trx-pivot__th"
              }, v(k), 1))), 128)),
              t.showTotals ? (s(), o("th", Ob, "Total")) : h("", !0)
            ])
          ]),
          e("tbody", null, [
            (s(!0), o(V, null, b(l.value, (k) => (s(), o("tr", { key: k }, [
              e("td", jb, v(k), 1),
              (s(!0), o(V, null, b(n.value, ($) => (s(), o("td", {
                key: $,
                class: "trx-pivot__td trx-pivot__td--value",
                style: R({ "--heat": m(k, $) })
              }, v(c(k, $)), 5))), 128)),
              t.showTotals ? (s(), o("td", Hb, v(u(k)), 1)) : h("", !0)
            ]))), 128))
          ]),
          t.showTotals ? (s(), o("tfoot", Ub, [
            e("tr", null, [
              f[0] || (f[0] = e("td", { class: "trx-pivot__td trx-pivot__td--label trx-pivot__td--foot" }, "Total", -1)),
              (s(!0), o(V, null, b(n.value, (k) => (s(), o("td", {
                key: k,
                class: "trx-pivot__td trx-pivot__td--total"
              }, v(_(k)), 1))), 128)),
              e("td", Wb, v(d.value), 1)
            ])
          ])) : h("", !0)
        ])
      ])
    ]));
  }
}), l4 = /* @__PURE__ */ M(Gb, [["__scopeId", "data-v-d9bac3c6"]]), Kb = { class: "trx-env-banner__label" }, Yb = {
  key: 0,
  class: "trx-env-banner__msg"
}, Jb = /* @__PURE__ */ g({
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
    }, i = z(!0);
    return (l, n) => (s(), L(et, { to: "body" }, [
      O(j, { name: "trx-env-slide" }, {
        default: B(() => [
          i.value && t.env !== "production" ? (s(), o("div", {
            key: 0,
            class: y(["trx-env-banner", `trx-env-banner--${t.env}`]),
            role: "banner"
          }, [
            e("i", {
              class: y([r[t.env], "trx-env-banner__icon"])
            }, null, 2),
            e("span", Kb, v(a[t.env]), 1),
            t.message ? (s(), o("span", Yb, "— " + v(t.message), 1)) : h("", !0),
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
}), n4 = /* @__PURE__ */ M(Jb, [["__scopeId", "data-v-b7dfb3ab"]]), Xb = { class: "trx-log" }, Qb = { class: "trx-log__toolbar" }, Zb = { class: "trx-log__filters" }, ty = ["onClick"], ey = { class: "trx-log__search-wrap" }, sy = { class: "trx-log__count" }, ay = {
  key: 0,
  class: "trx-log__empty"
}, ly = {
  key: 0,
  class: "trx-log__ts"
}, ny = {
  key: 1,
  class: "trx-log__source"
}, oy = { class: "trx-log__msg" }, ry = {
  key: 2,
  class: "trx-log__meta"
}, iy = /* @__PURE__ */ g({
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
    const a = t, r = z(""), i = z(/* @__PURE__ */ new Set(["debug", "info", "warn", "error", "success"])), l = z(), n = ["debug", "info", "warn", "error", "success"];
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
    return (d, p) => (s(), o("div", Xb, [
      e("div", Qb, [
        e("div", Zb, [
          (s(), o(V, null, b(n, (m) => e("button", {
            key: m,
            class: y(["trx-log__filter", [`trx-log__filter--${m}`, { "trx-log__filter--active": i.value.has(m) }]]),
            onClick: (x) => c(m)
          }, [
            e("i", {
              class: y(_[m])
            }, null, 2),
            e("span", null, v(m), 1)
          ], 10, ty)), 64))
        ]),
        e("div", ey, [
          p[1] || (p[1] = e("i", { class: "pi pi-search trx-log__search-icon" }, null, -1)),
          Y(e("input", {
            "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
            class: "trx-log__search",
            placeholder: "Buscar..."
          }, null, 512), [
            [J, r.value]
          ])
        ]),
        e("span", sy, v(u.value.length) + " / " + v(t.logs.length), 1)
      ]),
      e("div", {
        ref_key: "container",
        ref: l,
        class: "trx-log__body",
        style: R({ maxHeight: t.maxHeight })
      }, [
        u.value.length ? h("", !0) : (s(), o("div", ay, "Nenhum log")),
        (s(!0), o(V, null, b(u.value, (m) => (s(), o("div", {
          key: m.id,
          class: y(["trx-log__entry", `trx-log__entry--${m.level}`])
        }, [
          e("i", {
            class: y([_[m.level], "trx-log__entry-icon"])
          }, null, 2),
          t.showTimestamp && m.timestamp ? (s(), o("span", ly, v(m.timestamp), 1)) : h("", !0),
          t.showSource && m.source ? (s(), o("span", ny, "[" + v(m.source) + "]", 1)) : h("", !0),
          e("span", oy, v(m.message), 1),
          m.meta ? (s(), o("details", ry, [
            p[2] || (p[2] = e("summary", null, "meta", -1)),
            e("pre", null, v(JSON.stringify(m.meta, null, 2)), 1)
          ])) : h("", !0)
        ], 2))), 128))
      ], 4)
    ]));
  }
}), o4 = /* @__PURE__ */ M(iy, [["__scopeId", "data-v-d3d12a7f"]]), cy = /* @__PURE__ */ g({
  __name: "TrxOfflineIndicator",
  props: {
    position: { default: "top" },
    reconnectLabel: { default: "Reconectando..." }
  },
  setup(t) {
    const a = z(!navigator.onLine), r = z(!1);
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
            class: y(["trx-offline", [`trx-offline--${t.position}`, { "trx-offline--reconnecting": r.value }]]),
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
}), r4 = /* @__PURE__ */ M(cy, [["__scopeId", "data-v-5caecc99"]]), uy = {
  key: 0,
  class: "trx-upd",
  role: "dialog",
  "aria-live": "polite"
}, dy = { class: "trx-upd__content" }, _y = { class: "trx-upd__title" }, py = { class: "trx-upd__msg" }, vy = {
  key: 0,
  class: "trx-upd__ver"
}, my = { class: "trx-upd__actions" }, fy = /* @__PURE__ */ g({
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
          t.modelValue ? (s(), o("div", uy, [
            c[2] || (c[2] = e("div", { class: "trx-upd__icon-wrap" }, [
              e("i", { class: "pi pi-refresh trx-upd__icon" })
            ], -1)),
            e("div", dy, [
              e("p", _y, v(t.title), 1),
              e("p", py, [
                N(v(t.message), 1),
                t.version ? (s(), o("span", vy, " v" + v(t.version), 1)) : h("", !0)
              ])
            ]),
            e("div", my, [
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
}), i4 = /* @__PURE__ */ M(fy, [["__scopeId", "data-v-81ddfccd"]]), xy = { class: "trx-fp" }, hy = { class: "trx-fp__header" }, $y = { class: "trx-fp__meta" }, gy = { class: "trx-fp__name" }, by = {
  key: 0,
  class: "trx-fp__size"
}, yy = { class: "trx-fp__actions" }, ky = ["href", "aria-label"], wy = ["src", "alt"], Ty = ["src"], Cy = ["src"], Sy = ["src"], Iy = {
  key: 4,
  class: "trx-fp__text-wrap"
}, Vy = ["src"], By = {
  key: 5,
  class: "trx-fp__unknown"
}, Py = { class: "trx-fp__ext" }, My = ["href"], Ay = /* @__PURE__ */ g({
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
    return (d, p) => (s(), o("div", xy, [
      e("div", hy, [
        e("i", {
          class: y([u[n.value], "trx-fp__header-icon"])
        }, null, 2),
        e("div", $y, [
          e("span", gy, v(t.name ?? "Arquivo"), 1),
          t.size ? (s(), o("span", by, v(c(t.size)), 1)) : h("", !0)
        ]),
        e("div", yy, [
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            "aria-label": `Baixar ${t.name}`,
            class: "trx-fp__action",
            onClick: p[0] || (p[0] = (m) => i("download"))
          }, [...p[2] || (p[2] = [
            e("i", { class: "pi pi-download" }, null, -1)
          ])], 8, ky)) : h("", !0),
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
        }, null, 8, wy)) : n.value === "pdf" ? (s(), o("iframe", {
          key: 1,
          src: t.url,
          class: "trx-fp__iframe",
          title: "PDF Preview"
        }, null, 8, Ty)) : n.value === "video" ? (s(), o("video", {
          key: 2,
          src: t.url,
          controls: "",
          class: "trx-fp__video"
        }, " Seu browser não suporta vídeo. ", 8, Cy)) : n.value === "audio" ? (s(), o("audio", {
          key: 3,
          src: t.url,
          controls: "",
          class: "trx-fp__audio"
        }, " Seu browser não suporta áudio. ", 8, Sy)) : n.value === "text" ? (s(), o("div", Iy, [
          I(d.$slots, "text-content", {}, () => [
            e("iframe", {
              src: t.url,
              class: "trx-fp__iframe",
              title: "Text Preview",
              sandbox: "allow-same-origin"
            }, null, 8, Vy)
          ], !0)
        ])) : (s(), o("div", By, [
          e("span", Py, v(_.value), 1),
          p[5] || (p[5] = e("p", { class: "trx-fp__unknown-msg" }, "Pré-visualização não disponível para este tipo de arquivo.", -1)),
          t.url ? (s(), o("a", {
            key: 0,
            href: t.url,
            download: "",
            class: "trx-fp__dl-btn"
          }, [...p[4] || (p[4] = [
            e("i", { class: "pi pi-download" }, null, -1),
            N(" Baixar arquivo ", -1)
          ])], 8, My)) : h("", !0)
        ]))
      ], 4)
    ]));
  }
}), c4 = /* @__PURE__ */ M(Ay, [["__scopeId", "data-v-ea51c0ff"]]), Ly = {
  key: 0,
  class: "trx-ann__dots"
}, zy = ["onClick"], Dy = { class: "trx-ann__msg" }, Ey = ["href"], Ry = /* @__PURE__ */ g({
  __name: "TrxAnnouncementBar",
  props: {
    announcements: { default: () => [] },
    rotateInterval: { default: 0 }
  },
  setup(t) {
    const a = t, r = z(/* @__PURE__ */ new Set()), i = z(0), l = S(() => a.announcements.filter((p) => !r.value.has(p.id))), n = S(() => l.value[i.value % Math.max(l.value.length, 1)] ?? null);
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
            class: y(["trx-ann", `trx-ann--${n.value.type ?? "info"}`]),
            role: "status",
            "aria-live": "polite"
          }, [
            l.value.length > 1 ? (s(), o("div", Ly, [
              (s(!0), o(V, null, b(l.value, (x, f) => (s(), o("span", {
                key: x.id,
                class: y(["trx-ann__dot", { "trx-ann__dot--active": f === i.value % l.value.length }]),
                onClick: (k) => i.value = f
              }, null, 10, zy))), 128))
            ])) : h("", !0),
            e("i", {
              class: y([d[n.value.type ?? "info"], "trx-ann__icon"])
            }, null, 2),
            e("span", Dy, v(n.value.message), 1),
            n.value.link ? (s(), o("a", {
              key: 1,
              href: n.value.link.href,
              class: "trx-ann__link",
              target: "_blank",
              rel: "noopener"
            }, [
              N(v(n.value.link.label) + " ", 1),
              m[1] || (m[1] = e("i", { class: "pi pi-external-link" }, null, -1))
            ], 8, Ey)) : h("", !0),
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
}), u4 = /* @__PURE__ */ M(Ry, [["__scopeId", "data-v-84e8d297"]]), Ny = { inheritAttrs: !1 }, d4 = /* @__PURE__ */ g({
  ...Ny,
  __name: "TrxAutoComplete",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Buscar...",
      ...a
    }));
    return (i, l) => (s(), L(P(Mt), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), qy = { inheritAttrs: !1 }, _4 = /* @__PURE__ */ g({
  ...qy,
  __name: "TrxDatePicker",
  setup(t) {
    const a = tt(), r = S(() => ({
      dateFormat: "dd/mm/yy",
      showIcon: !0,
      ...a
    }));
    return (i, l) => (s(), L(P(At), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Fy = { inheritAttrs: !1 }, p4 = /* @__PURE__ */ g({
  ...Fy,
  __name: "TrxInputNumber",
  setup(t) {
    const a = tt(), r = S(() => ({
      locale: "pt-BR",
      minFractionDigits: 2,
      ...a
    }));
    return (i, l) => (s(), L(P(Lt), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Oy = { inheritAttrs: !1 }, v4 = /* @__PURE__ */ g({
  ...Oy,
  __name: "TrxPassword",
  setup(t) {
    const a = tt(), r = S(() => ({
      weakLabel: "Fraco",
      mediumLabel: "Médio",
      strongLabel: "Forte",
      ...a
    }));
    return (i, l) => (s(), L(P(it), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), jy = { inheritAttrs: !1 }, m4 = /* @__PURE__ */ g({
  ...jy,
  __name: "TrxSelect",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(zt), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Hy = { inheritAttrs: !1 }, f4 = /* @__PURE__ */ g({
  ...Hy,
  __name: "TrxMultiSelect",
  setup(t) {
    const a = tt(), r = S(() => ({
      placeholder: "Selecione...",
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(Dt), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Uy = { inheritAttrs: !1 }, x4 = /* @__PURE__ */ g({
  ...Uy,
  __name: "TrxListbox",
  setup(t) {
    const a = tt(), r = S(() => ({
      emptyMessage: "Nenhum resultado",
      ...a
    }));
    return (i, l) => (s(), L(P(Et), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Wy = { inheritAttrs: !1 }, h4 = /* @__PURE__ */ g({
  ...Wy,
  __name: "TrxCascadeSelect",
  setup(t) {
    return (a, r) => (s(), L(P(Rt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Gy = { inheritAttrs: !1 }, $4 = /* @__PURE__ */ g({
  ...Gy,
  __name: "TrxCheckbox",
  setup(t) {
    return (a, r) => (s(), L(P(gt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ky = { inheritAttrs: !1 }, g4 = /* @__PURE__ */ g({
  ...Ky,
  __name: "TrxCheckboxGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Nt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Yy = { inheritAttrs: !1 }, b4 = /* @__PURE__ */ g({
  ...Yy,
  __name: "TrxFloatLabel",
  setup(t) {
    return (a, r) => (s(), L(P(qt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Jy = { inheritAttrs: !1 }, y4 = /* @__PURE__ */ g({
  ...Jy,
  __name: "TrxFluid",
  setup(t) {
    return (a, r) => (s(), L(P(Ft), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Xy = { inheritAttrs: !1 }, k4 = /* @__PURE__ */ g({
  ...Xy,
  __name: "TrxIconField",
  setup(t) {
    return (a, r) => (s(), L(P(Ot), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Qy = { inheritAttrs: !1 }, w4 = /* @__PURE__ */ g({
  ...Qy,
  __name: "TrxIftaLabel",
  setup(t) {
    return (a, r) => (s(), L(P(jt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Zy = { inheritAttrs: !1 }, T4 = /* @__PURE__ */ g({
  ...Zy,
  __name: "TrxInputChips",
  setup(t) {
    return (a, r) => (s(), L(P(Ht), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), t0 = { inheritAttrs: !1 }, C4 = /* @__PURE__ */ g({
  ...t0,
  __name: "TrxInputGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Ut), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), e0 = { inheritAttrs: !1 }, S4 = /* @__PURE__ */ g({
  ...e0,
  __name: "TrxInputGroupAddon",
  setup(t) {
    return (a, r) => (s(), L(P(Wt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), s0 = { inheritAttrs: !1 }, I4 = /* @__PURE__ */ g({
  ...s0,
  __name: "TrxInputIcon",
  setup(t) {
    return (a, r) => (s(), L(P(Gt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), a0 = { inheritAttrs: !1 }, V4 = /* @__PURE__ */ g({
  ...a0,
  __name: "TrxInputMask",
  setup(t) {
    return (a, r) => (s(), L(P(Kt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), l0 = { inheritAttrs: !1 }, B4 = /* @__PURE__ */ g({
  ...l0,
  __name: "TrxInputOtp",
  setup(t) {
    return (a, r) => (s(), L(P(Yt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), n0 = { inheritAttrs: !1 }, P4 = /* @__PURE__ */ g({
  ...n0,
  __name: "TrxInputText",
  setup(t) {
    return (a, r) => (s(), L(P(rt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), o0 = { inheritAttrs: !1 }, M4 = /* @__PURE__ */ g({
  ...o0,
  __name: "TrxKnob",
  setup(t) {
    return (a, r) => (s(), L(P(Jt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), r0 = { inheritAttrs: !1 }, A4 = /* @__PURE__ */ g({
  ...r0,
  __name: "TrxRadioButton",
  setup(t) {
    return (a, r) => (s(), L(P(Xt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), i0 = { inheritAttrs: !1 }, L4 = /* @__PURE__ */ g({
  ...i0,
  __name: "TrxRadioButtonGroup",
  setup(t) {
    return (a, r) => (s(), L(P(Qt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), c0 = { inheritAttrs: !1 }, z4 = /* @__PURE__ */ g({
  ...c0,
  __name: "TrxRating",
  setup(t) {
    return (a, r) => (s(), L(P(Zt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), u0 = { inheritAttrs: !1 }, D4 = /* @__PURE__ */ g({
  ...u0,
  __name: "TrxSelectButton",
  setup(t) {
    return (a, r) => (s(), L(P(te), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), d0 = { inheritAttrs: !1 }, E4 = /* @__PURE__ */ g({
  ...d0,
  __name: "TrxSlider",
  setup(t) {
    return (a, r) => (s(), L(P(ee), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _0 = { inheritAttrs: !1 }, R4 = /* @__PURE__ */ g({
  ..._0,
  __name: "TrxTextarea",
  setup(t) {
    return (a, r) => (s(), L(P(se), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), p0 = { inheritAttrs: !1 }, N4 = /* @__PURE__ */ g({
  ...p0,
  __name: "TrxToggleButton",
  setup(t) {
    return (a, r) => (s(), L(P(ae), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), v0 = { inheritAttrs: !1 }, q4 = /* @__PURE__ */ g({
  ...v0,
  __name: "TrxToggleSwitch",
  setup(t) {
    return (a, r) => (s(), L(P(le), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), m0 = { inheritAttrs: !1 }, F4 = /* @__PURE__ */ g({
  ...m0,
  __name: "TrxTreeSelect",
  setup(t) {
    return (a, r) => (s(), L(P(ne), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), f0 = { inheritAttrs: !1 }, O4 = /* @__PURE__ */ g({
  ...f0,
  __name: "TrxButton",
  setup(t) {
    return (a, r) => (s(), L(P(st), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), x0 = { inheritAttrs: !1 }, j4 = /* @__PURE__ */ g({
  ...x0,
  __name: "TrxButtonGroup",
  setup(t) {
    return (a, r) => (s(), L(P(oe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), h0 = { inheritAttrs: !1 }, H4 = /* @__PURE__ */ g({
  ...h0,
  __name: "TrxSpeedDial",
  setup(t) {
    return (a, r) => (s(), L(P(re), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), $0 = { inheritAttrs: !1 }, U4 = /* @__PURE__ */ g({
  ...$0,
  __name: "TrxSplitButton",
  setup(t) {
    return (a, r) => (s(), L(P(ie), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), g0 = { inheritAttrs: !1 }, W4 = /* @__PURE__ */ g({
  ...g0,
  __name: "TrxPaginator",
  setup(t) {
    const a = tt(), r = S(() => ({
      rowsPerPageOptions: [10, 25, 50],
      ...a
    }));
    return (i, l) => (s(), L(P(ce), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), b0 = { inheritAttrs: !1 }, G4 = /* @__PURE__ */ g({
  ...b0,
  __name: "TrxDataView",
  setup(t) {
    return (a, r) => (s(), L(P(ue), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), y0 = { inheritAttrs: !1 }, K4 = /* @__PURE__ */ g({
  ...y0,
  __name: "TrxOrderList",
  setup(t) {
    return (a, r) => (s(), L(P(de), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), k0 = { inheritAttrs: !1 }, Y4 = /* @__PURE__ */ g({
  ...k0,
  __name: "TrxOrganizationChart",
  setup(t) {
    return (a, r) => (s(), L(P(_e), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), w0 = { inheritAttrs: !1 }, J4 = /* @__PURE__ */ g({
  ...w0,
  __name: "TrxPickList",
  setup(t) {
    return (a, r) => (s(), L(P(pe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), T0 = { inheritAttrs: !1 }, X4 = /* @__PURE__ */ g({
  ...T0,
  __name: "TrxTimeline",
  setup(t) {
    return (a, r) => (s(), L(P(ve), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), C0 = { inheritAttrs: !1 }, Q4 = /* @__PURE__ */ g({
  ...C0,
  __name: "TrxTree",
  setup(t) {
    return (a, r) => (s(), L(P(me), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), S0 = { inheritAttrs: !1 }, Z4 = /* @__PURE__ */ g({
  ...S0,
  __name: "TrxTreeTable",
  setup(t) {
    return (a, r) => (s(), L(P(fe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), I0 = { inheritAttrs: !1 }, t3 = /* @__PURE__ */ g({
  ...I0,
  __name: "TrxVirtualScroller",
  setup(t) {
    return (a, r) => (s(), L(P(xe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), V0 = { inheritAttrs: !1 }, e3 = /* @__PURE__ */ g({
  ...V0,
  __name: "TrxAccordion",
  setup(t) {
    return (a, r) => (s(), L(P(he), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), B0 = { inheritAttrs: !1 }, s3 = /* @__PURE__ */ g({
  ...B0,
  __name: "TrxAccordionContent",
  setup(t) {
    return (a, r) => (s(), L(P($e), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), P0 = { inheritAttrs: !1 }, a3 = /* @__PURE__ */ g({
  ...P0,
  __name: "TrxAccordionHeader",
  setup(t) {
    return (a, r) => (s(), L(P(ge), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), M0 = { inheritAttrs: !1 }, l3 = /* @__PURE__ */ g({
  ...M0,
  __name: "TrxAccordionPanel",
  setup(t) {
    return (a, r) => (s(), L(P(be), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), A0 = { inheritAttrs: !1 }, n3 = /* @__PURE__ */ g({
  ...A0,
  __name: "TrxDeferredContent",
  setup(t) {
    return (a, r) => (s(), L(P(ye), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), L0 = { inheritAttrs: !1 }, o3 = /* @__PURE__ */ g({
  ...L0,
  __name: "TrxDivider",
  setup(t) {
    return (a, r) => (s(), L(P(ke), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), z0 = { inheritAttrs: !1 }, r3 = /* @__PURE__ */ g({
  ...z0,
  __name: "TrxFieldset",
  setup(t) {
    return (a, r) => (s(), L(P(we), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), D0 = { inheritAttrs: !1 }, i3 = /* @__PURE__ */ g({
  ...D0,
  __name: "TrxPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Te), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), E0 = { inheritAttrs: !1 }, c3 = /* @__PURE__ */ g({
  ...E0,
  __name: "TrxScrollPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Ce), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), R0 = { inheritAttrs: !1 }, u3 = /* @__PURE__ */ g({
  ...R0,
  __name: "TrxSplitter",
  setup(t) {
    return (a, r) => (s(), L(P(Se), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), N0 = { inheritAttrs: !1 }, d3 = /* @__PURE__ */ g({
  ...N0,
  __name: "TrxSplitterPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Ie), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), q0 = { inheritAttrs: !1 }, _3 = /* @__PURE__ */ g({
  ...q0,
  __name: "TrxStepper",
  setup(t) {
    return (a, r) => (s(), L(P(Ve), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), F0 = { inheritAttrs: !1 }, p3 = /* @__PURE__ */ g({
  ...F0,
  __name: "TrxStep",
  setup(t) {
    return (a, r) => (s(), L(P(Be), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), O0 = { inheritAttrs: !1 }, v3 = /* @__PURE__ */ g({
  ...O0,
  __name: "TrxStepItem",
  setup(t) {
    return (a, r) => (s(), L(P(Pe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), j0 = { inheritAttrs: !1 }, m3 = /* @__PURE__ */ g({
  ...j0,
  __name: "TrxStepList",
  setup(t) {
    return (a, r) => (s(), L(P(Me), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), H0 = { inheritAttrs: !1 }, f3 = /* @__PURE__ */ g({
  ...H0,
  __name: "TrxStepPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Ae), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), U0 = { inheritAttrs: !1 }, x3 = /* @__PURE__ */ g({
  ...U0,
  __name: "TrxStepPanels",
  setup(t) {
    return (a, r) => (s(), L(P(Le), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), W0 = { inheritAttrs: !1 }, h3 = /* @__PURE__ */ g({
  ...W0,
  __name: "TrxTabs",
  setup(t) {
    return (a, r) => (s(), L(P(ze), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), G0 = { inheritAttrs: !1 }, $3 = /* @__PURE__ */ g({
  ...G0,
  __name: "TrxTab",
  setup(t) {
    return (a, r) => (s(), L(P(De), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), K0 = { inheritAttrs: !1 }, g3 = /* @__PURE__ */ g({
  ...K0,
  __name: "TrxTabList",
  setup(t) {
    return (a, r) => (s(), L(P(Ee), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Y0 = { inheritAttrs: !1 }, b3 = /* @__PURE__ */ g({
  ...Y0,
  __name: "TrxTabPanel",
  setup(t) {
    return (a, r) => (s(), L(P(Re), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), J0 = { inheritAttrs: !1 }, y3 = /* @__PURE__ */ g({
  ...J0,
  __name: "TrxTabPanels",
  setup(t) {
    return (a, r) => (s(), L(P(Ne), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), X0 = { inheritAttrs: !1 }, k3 = /* @__PURE__ */ g({
  ...X0,
  __name: "TrxToolbar",
  setup(t) {
    return (a, r) => (s(), L(P(qe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Q0 = { inheritAttrs: !1 }, w3 = /* @__PURE__ */ g({
  ...Q0,
  __name: "TrxDialog",
  setup(t) {
    const a = tt(), r = S(() => ({
      modal: !0,
      closable: !0,
      draggable: !1,
      ...a
    }));
    return (i, l) => (s(), L(P(Fe), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), Z0 = { inheritAttrs: !1 }, T3 = /* @__PURE__ */ g({
  ...Z0,
  __name: "TrxConfirmDialog",
  setup(t) {
    const a = tt(), r = S(() => ({
      acceptLabel: "Sim",
      rejectLabel: "Não",
      ...a
    }));
    return (i, l) => (s(), L(P(Oe), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), tk = { inheritAttrs: !1 }, C3 = /* @__PURE__ */ g({
  ...tk,
  __name: "TrxConfirmPopup",
  setup(t) {
    return (a, r) => (s(), L(P(je), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ek = { inheritAttrs: !1 }, S3 = /* @__PURE__ */ g({
  ...ek,
  __name: "TrxDrawer",
  setup(t) {
    return (a, r) => (s(), L(P(He), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), sk = { inheritAttrs: !1 }, I3 = /* @__PURE__ */ g({
  ...sk,
  __name: "TrxDynamicDialog",
  setup(t) {
    return (a, r) => (s(), L(P(Ue), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ak = { inheritAttrs: !1 }, V3 = /* @__PURE__ */ g({
  ...ak,
  __name: "TrxPopover",
  setup(t) {
    return (a, r) => (s(), L(P(We), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), lk = { inheritAttrs: !1 }, B3 = /* @__PURE__ */ g({
  ...lk,
  __name: "TrxBreadcrumb",
  setup(t) {
    return (a, r) => (s(), L(P(Ge), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), nk = { inheritAttrs: !1 }, P3 = /* @__PURE__ */ g({
  ...nk,
  __name: "TrxDock",
  setup(t) {
    return (a, r) => (s(), L(P(Ke), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ok = { inheritAttrs: !1 }, M3 = /* @__PURE__ */ g({
  ...ok,
  __name: "TrxMegaMenu",
  setup(t) {
    return (a, r) => (s(), L(P(Ye), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), rk = { inheritAttrs: !1 }, A3 = /* @__PURE__ */ g({
  ...rk,
  __name: "TrxMenu",
  setup(t) {
    return (a, r) => (s(), L(P(Je), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ik = { inheritAttrs: !1 }, L3 = /* @__PURE__ */ g({
  ...ik,
  __name: "TrxMenubar",
  setup(t) {
    return (a, r) => (s(), L(P(Xe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), ck = { inheritAttrs: !1 }, z3 = /* @__PURE__ */ g({
  ...ck,
  __name: "TrxPanelMenu",
  setup(t) {
    return (a, r) => (s(), L(P(Qe), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), uk = { inheritAttrs: !1 }, D3 = /* @__PURE__ */ g({
  ...uk,
  __name: "TrxSteps",
  setup(t) {
    return (a, r) => (s(), L(P(Ze), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), dk = { inheritAttrs: !1 }, E3 = /* @__PURE__ */ g({
  ...dk,
  __name: "TrxTabMenu",
  setup(t) {
    return (a, r) => (s(), L(P(ts), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), _k = { inheritAttrs: !1 }, R3 = /* @__PURE__ */ g({
  ..._k,
  __name: "TrxTieredMenu",
  setup(t) {
    return (a, r) => (s(), L(P(es), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), pk = { inheritAttrs: !1 }, N3 = /* @__PURE__ */ g({
  ...pk,
  __name: "TrxToast",
  setup(t) {
    const a = tt(), r = S(() => ({
      position: "top-right",
      ...a
    }));
    return (i, l) => (s(), L(P(ss), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), vk = { inheritAttrs: !1 }, q3 = /* @__PURE__ */ g({
  ...vk,
  __name: "TrxInlineMessage",
  setup(t) {
    return (a, r) => (s(), L(P(as), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), mk = { inheritAttrs: !1 }, F3 = /* @__PURE__ */ g({
  ...mk,
  __name: "TrxMessage",
  setup(t) {
    return (a, r) => (s(), L(P(ct), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), fk = { inheritAttrs: !1 }, O3 = /* @__PURE__ */ g({
  ...fk,
  __name: "TrxCarousel",
  setup(t) {
    return (a, r) => (s(), L(P(ls), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), xk = { inheritAttrs: !1 }, j3 = /* @__PURE__ */ g({
  ...xk,
  __name: "TrxGalleria",
  setup(t) {
    return (a, r) => (s(), L(P(ns), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), hk = { inheritAttrs: !1 }, H3 = /* @__PURE__ */ g({
  ...hk,
  __name: "TrxImage",
  setup(t) {
    return (a, r) => (s(), L(P(os), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), $k = { inheritAttrs: !1 }, U3 = /* @__PURE__ */ g({
  ...$k,
  __name: "TrxImageCompare",
  setup(t) {
    return (a, r) => (s(), L(P(rs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), gk = { inheritAttrs: !1 }, W3 = /* @__PURE__ */ g({
  ...gk,
  __name: "TrxFileUpload",
  setup(t) {
    const a = tt(), r = S(() => ({
      chooseLabel: "Escolher",
      uploadLabel: "Enviar",
      cancelLabel: "Cancelar",
      ...a
    }));
    return (i, l) => (s(), L(P(is), w(T(r.value)), D({ _: 2 }, [
      b(i.$slots, (n, c) => ({
        name: c,
        fn: B((u) => [
          I(i.$slots, c, w(T(u || {})))
        ])
      }))
    ]), 1040));
  }
}), bk = { inheritAttrs: !1 }, G3 = /* @__PURE__ */ g({
  ...bk,
  __name: "TrxChart",
  setup(t) {
    return (a, r) => (s(), L(P(cs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), yk = { inheritAttrs: !1 }, K3 = /* @__PURE__ */ g({
  ...yk,
  __name: "TrxAvatar",
  setup(t) {
    return (a, r) => (s(), L(P($t), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), kk = { inheritAttrs: !1 }, Y3 = /* @__PURE__ */ g({
  ...kk,
  __name: "TrxAvatarGroup",
  setup(t) {
    return (a, r) => (s(), L(P(us), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), wk = { inheritAttrs: !1 }, J3 = /* @__PURE__ */ g({
  ...wk,
  __name: "TrxBadge",
  setup(t) {
    return (a, r) => (s(), L(P(ds), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Tk = { inheritAttrs: !1 }, X3 = /* @__PURE__ */ g({
  ...Tk,
  __name: "TrxBlockUI",
  setup(t) {
    return (a, r) => (s(), L(P(_s), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ck = { inheritAttrs: !1 }, Q3 = /* @__PURE__ */ g({
  ...Ck,
  __name: "TrxChip",
  setup(t) {
    return (a, r) => (s(), L(P(ps), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Sk = { inheritAttrs: !1 }, Z3 = /* @__PURE__ */ g({
  ...Sk,
  __name: "TrxInplace",
  setup(t) {
    return (a, r) => (s(), L(P(vs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ik = { inheritAttrs: !1 }, t8 = /* @__PURE__ */ g({
  ...Ik,
  __name: "TrxMeterGroup",
  setup(t) {
    return (a, r) => (s(), L(P(ms), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Vk = { inheritAttrs: !1 }, e8 = /* @__PURE__ */ g({
  ...Vk,
  __name: "TrxOverlayBadge",
  setup(t) {
    return (a, r) => (s(), L(P(fs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Bk = { inheritAttrs: !1 }, s8 = /* @__PURE__ */ g({
  ...Bk,
  __name: "TrxProgressBar",
  setup(t) {
    return (a, r) => (s(), L(P(xs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Pk = { inheritAttrs: !1 }, a8 = /* @__PURE__ */ g({
  ...Pk,
  __name: "TrxProgressSpinner",
  setup(t) {
    return (a, r) => (s(), L(P(ht), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Mk = { inheritAttrs: !1 }, l8 = /* @__PURE__ */ g({
  ...Mk,
  __name: "TrxScrollTop",
  setup(t) {
    return (a, r) => (s(), L(P(hs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Ak = { inheritAttrs: !1 }, n8 = /* @__PURE__ */ g({
  ...Ak,
  __name: "TrxSkeleton",
  setup(t) {
    return (a, r) => (s(), L(P($s), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), Lk = { inheritAttrs: !1 }, o8 = /* @__PURE__ */ g({
  ...Lk,
  __name: "TrxTag",
  setup(t) {
    return (a, r) => (s(), L(P(xt), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
}), zk = { inheritAttrs: !1 }, r8 = /* @__PURE__ */ g({
  ...zk,
  __name: "TrxTerminal",
  setup(t) {
    return (a, r) => (s(), L(P(gs), w(T(a.$attrs)), D({ _: 2 }, [
      b(a.$slots, (i, l) => ({
        name: l,
        fn: B((n) => [
          I(a.$slots, l, w(T(n || {})))
        ])
      }))
    ]), 1040));
  }
});
export {
  LT as $,
  no as A,
  uT as B,
  dT as C,
  _T as D,
  pT as E,
  vT as F,
  mT as G,
  Zo as H,
  fT as I,
  xT as J,
  hT as K,
  $T as L,
  gT as M,
  bT as N,
  yT as O,
  kT as P,
  wT as Q,
  TT as R,
  CT as S,
  Ew as T,
  ST as U,
  IT as V,
  VT as W,
  BT as X,
  PT as Y,
  MT as Z,
  AT as _,
  Rw as a,
  OC as a$,
  zT as a0,
  DT as a1,
  ET as a2,
  RT as a3,
  NT as a4,
  nu as a5,
  qT as a6,
  ut as a7,
  FT as a8,
  OT as a9,
  mC as aA,
  fC as aB,
  xC as aC,
  hC as aD,
  $C as aE,
  gC as aF,
  bC as aG,
  yC as aH,
  kC as aI,
  wC as aJ,
  TC as aK,
  CC as aL,
  SC as aM,
  IC as aN,
  VC as aO,
  BC as aP,
  PC as aQ,
  MC as aR,
  AC as aS,
  LC as aT,
  zC as aU,
  DC as aV,
  EC as aW,
  RC as aX,
  NC as aY,
  qC as aZ,
  FC as a_,
  jT as aa,
  HT as ab,
  UT as ac,
  WT as ad,
  GT as ae,
  KT as af,
  YT as ag,
  JT as ah,
  XT as ai,
  QT as aj,
  ZT as ak,
  tC as al,
  eC as am,
  sC as an,
  aC as ao,
  lC as ap,
  nC as aq,
  oC as ar,
  rC as as,
  iC as at,
  cC as au,
  uC as av,
  dC as aw,
  _C as ax,
  pC as ay,
  vC as az,
  Nw as b,
  Q4 as b$,
  jC as b0,
  HC as b1,
  UC as b2,
  WC as b3,
  GC as b4,
  KC as b5,
  YC as b6,
  JC as b7,
  XC as b8,
  QC as b9,
  T4 as bA,
  C4 as bB,
  S4 as bC,
  I4 as bD,
  V4 as bE,
  B4 as bF,
  P4 as bG,
  M4 as bH,
  A4 as bI,
  L4 as bJ,
  z4 as bK,
  D4 as bL,
  E4 as bM,
  R4 as bN,
  N4 as bO,
  q4 as bP,
  F4 as bQ,
  O4 as bR,
  j4 as bS,
  H4 as bT,
  U4 as bU,
  W4 as bV,
  G4 as bW,
  K4 as bX,
  Y4 as bY,
  J4 as bZ,
  X4 as b_,
  ZC as ba,
  t4 as bb,
  e4 as bc,
  s4 as bd,
  a4 as be,
  l4 as bf,
  n4 as bg,
  o4 as bh,
  r4 as bi,
  i4 as bj,
  c4 as bk,
  u4 as bl,
  d4 as bm,
  _4 as bn,
  p4 as bo,
  v4 as bp,
  m4 as bq,
  f4 as br,
  x4 as bs,
  h4 as bt,
  $4 as bu,
  g4 as bv,
  b4 as bw,
  y4 as bx,
  k4 as by,
  w4 as bz,
  qw as c,
  Z4 as c0,
  t3 as c1,
  e3 as c2,
  s3 as c3,
  a3 as c4,
  l3 as c5,
  n3 as c6,
  o3 as c7,
  r3 as c8,
  i3 as c9,
  z3 as cA,
  D3 as cB,
  E3 as cC,
  R3 as cD,
  N3 as cE,
  q3 as cF,
  F3 as cG,
  O3 as cH,
  j3 as cI,
  H3 as cJ,
  U3 as cK,
  W3 as cL,
  G3 as cM,
  K3 as cN,
  Y3 as cO,
  J3 as cP,
  X3 as cQ,
  Q3 as cR,
  Z3 as cS,
  t8 as cT,
  e8 as cU,
  s8 as cV,
  a8 as cW,
  l8 as cX,
  n8 as cY,
  o8 as cZ,
  r8 as c_,
  c3 as ca,
  u3 as cb,
  d3 as cc,
  _3 as cd,
  p3 as ce,
  v3 as cf,
  m3 as cg,
  f3 as ch,
  x3 as ci,
  h3 as cj,
  $3 as ck,
  g3 as cl,
  b3 as cm,
  y3 as cn,
  k3 as co,
  w3 as cp,
  T3 as cq,
  C3 as cr,
  S3 as cs,
  I3 as ct,
  V3 as cu,
  B3 as cv,
  P3 as cw,
  M3 as cx,
  A3 as cy,
  L3 as cz,
  Fw as d,
  Ow as e,
  jw as f,
  Hw as g,
  Uw as h,
  Ww as i,
  Gw as j,
  Kw as k,
  Yw as l,
  Jw as m,
  Xw as n,
  Qw as o,
  Zw as p,
  tT as q,
  eT as r,
  sT as s,
  aT as t,
  lT as u,
  nT as v,
  oT as w,
  rT as x,
  iT as y,
  cT as z
};
