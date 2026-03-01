---
title: TrxEmailComposer
description: Compositor de e-mail com campos Para/CC, assunto e corpo.
category: Omnichannel
---

# TrxEmailComposer

Chips para destinatários (Enter/Tab para adicionar), suporte a anexos com preview de nome.

## Eventos

`send(draft)` · `discard`

## Uso

```vue
<TrxEmailComposer @send="sendEmail" @discard="closeComposer" />
```
