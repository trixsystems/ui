# TrxSessionTimeout

Aviso de expiração de sessão por inatividade com contador regressivo. Detecta mousemove, keydown, click e scroll.

## Uso

```vue
<TrxSessionTimeout
  v-model="sessionActive"
  :timeout-ms="30 * 60 * 1000"
  :warning-ms="5 * 60 * 1000"
  @timeout="handleLogout"
  @extend="handleExtend"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `boolean` | `true` | Ativar monitoramento |
| `timeoutMs` | `number` | `1800000` | Timeout total (ms) — padrão 30min |
| `warningMs` | `number` | `300000` | Tempo de aviso antes (ms) — padrão 5min |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `timeout` | — | Sessão expirada |
| `extend` | — | Usuário estendeu sessão |

## Funcionamento

1. Detecta atividade do usuário (mouse, teclado, scroll, clique)
2. Ao ficar inativo por `timeoutMs - warningMs`, exibe modal com contador
3. Usuário pode clicar "Continuar sessão" para resetar o timer
4. Ao zerar, emite `timeout`

> Usa `Teleport to="body"` para renderizar sobre todo o conteúdo.
