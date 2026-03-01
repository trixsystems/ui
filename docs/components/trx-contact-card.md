# TrxContactCard

Card de contato com informações de telefone, e-mail, canal preferido e botões de ação rápida.

## Uso Básico

```vue
<TrxContactCard
  name="João Silva"
  phone="+55 11 99999-9999"
  email="joao@empresa.com"
  channel="whatsapp"
  @call="startCall"
  @chat="openChat"
  @view="openProfile"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `name` | `string` | — | Nome do contato |
| `phone` | `string` | — | Telefone |
| `email` | `string` | — | E-mail |
| `channel` | `TrxChannel` | — | Canal preferido |
| `status` | `string` | — | Status do contato |
| `lastContact` | `string` | — | Data/hora do último contato |
| `avatar` | `string` | — | URL do avatar |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Eventos

| Evento | Descrição |
|--------|-----------|
| `call` | Iniciar chamada |
| `chat` | Abrir chat |
| `view` | Ver perfil completo |

## Exemplo em Lista

```vue
<div class="flex flex-column gap-2">
  <TrxContactCard
    v-for="contact in contacts"
    :key="contact.id"
    v-bind="contact"
    @call="startCall(contact)"
    @chat="openChat(contact)"
    @view="router.push(`/contacts/${contact.id}`)"
  />
</div>
```
