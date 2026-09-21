# Landing Page AGB

Landing page responsiva da AGB — Autenticidade, Gestão e Branding — construída com React e Vite.

## Rodar o projeto

```bash
npm install
npm run dev
```

O Vite mostrará no terminal o endereço local da aplicação.

## Configurar o WhatsApp

1. Duplique o arquivo `.env.example` com o nome `.env`.
2. Preencha `VITE_WHATSAPP_NUMBER` usando apenas números, com país e DDD.

Exemplo:

```env
VITE_WHATSAPP_NUMBER=5562999999999
```

Sem essa variável, os botões continuam visíveis para revisão do protótipo e mostram um aviso de configuração em vez de abrir um contato incorreto.

## Comandos

```bash
npm run dev      # servidor local
npm run lint     # validação do código
npm run build    # build de produção
npm run preview  # prévia do build
```

Os textos, preços, projetos, fundadores e perguntas frequentes ficam centralizados em `src/content/siteContent.js`.
