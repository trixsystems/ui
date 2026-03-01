# TrxMaintenancePage

Página de manutenção full-screen com ícone animado de chave inglesa e previsão de retorno.

## Uso

```vue
<TrxMaintenancePage
  title="Em Manutenção"
  message="Voltaremos em breve com novidades."
  estimated-time="14:00"
  logo-src="/logo.svg"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | `'Em Manutenção'` | Título principal |
| `message` | `string` | mensagem padrão | Mensagem informativa |
| `estimatedTime` | `string` | — | Previsão de retorno |
| `logoSrc` | `string` | — | URL do logo |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Conteúdo adicional abaixo da mensagem |
