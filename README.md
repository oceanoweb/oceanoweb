# Oceano Web — Site Institucional

Site institucional da [Oceano Web](https://www.oceanoweb.com), agência digital especializada em transformação digital, IA e machine learning. Publicado na Vercel.

---

## Stack

| Camada          | Tecnologia                                                                     |
| --------------- | ------------------------------------------------------------------------------ |
| Framework       | [Next.js 16](https://nextjs.org) (App Router)                                  |
| Linguagem       | TypeScript 5.7 (strict)                                                        |
| Styling         | [Tailwind CSS 3](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Componentes     | [Radix UI](https://radix-ui.com)                                               |
| Formulários     | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)        |
| Email           | [Resend](https://resend.com)                                                   |
| Analytics       | Google Analytics 4                                                             |
| Package manager | Yarn 1.x                                                                       |
| Deploy          | [Vercel](https://vercel.com)                                                   |

---

## Pré-requisitos

- **Node.js** `>=24.0.0` — use [nvm](https://github.com/nvm-sh/nvm) para gerir versões
- **Yarn** `>=1.22`

```bash
# Activar a versão correta do Node via nvm
nvm use

# Confirmar
node --version  # v24.x.x
yarn --version  # 1.22.x
```

---

## Configuração local

### 1. Clonar o repositório

```bash
git clone <url-do-repo>
cd oceanoweb
```

### 2. Instalar dependências

```bash
yarn install
```

### 3. Configurar variáveis de ambiente

Copia o ficheiro de exemplo e preenche os valores:

```bash
cp .env.example .env.local
```

| Variável            | Descrição                                   | Obrigatória |
| ------------------- | ------------------------------------------- | ----------- |
| `RESEND_API_KEY`    | Chave da API Resend para envio de emails    | Sim         |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (ex: `G-XXXXXXXX`) | Não         |

> **Nota:** `NEXT_PUBLIC_*` é exposta ao browser. Nunca usar este prefixo para segredos.

### 4. Iniciar o servidor de desenvolvimento

```bash
yarn dev
```

Acede em [http://localhost:3000](http://localhost:3000).

---

## Scripts disponíveis

| Comando             | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| `yarn dev`          | Servidor de desenvolvimento com hot reload (Turbopack) |
| `yarn build`        | Build de produção                                      |
| `yarn start`        | Servidor de produção (requer `yarn build` primeiro)    |
| `yarn lint`         | Verifica erros com ESLint (`next/core-web-vitals`)     |
| `yarn format`       | Formata todos os ficheiros com Prettier                |
| `yarn format:check` | Verifica formatação sem alterar ficheiros              |

---

## Estrutura do projecto

```
├── app/
│   ├── layout.tsx        # RootLayout — metadados, fontes, Google Analytics
│   ├── page.tsx          # Página principal (single-page)
│   ├── error.tsx         # Error boundary do App Router
│   ├── robots.ts         # Geração de robots.txt
│   └── sitemap.ts        # Geração de sitemap.xml
│
├── components/
│   ├── ui/               # Componentes base (shadcn/ui + Radix)
│   ├── header.tsx        # Navbar com menu mobile
│   ├── hero.tsx          # Secção hero
│   ├── services.tsx      # Grid de serviços
│   ├── about.tsx         # Secção sobre
│   ├── metrics.tsx       # Secção de resultados
│   ├── testimonials.tsx  # Carousel de depoimentos
│   ├── cta-section.tsx   # Formulário de contacto
│   └── footer.tsx        # Rodapé
│
├── lib/
│   ├── site-config.ts    # URLs, contactos e configs globais
│   ├── translations.ts   # Traduções PT-BR / EN
│   ├── language-context.tsx  # Context de idioma
│   └── send-email.ts     # Server action — envio de email via Resend
│
├── hooks/
│   └── use-mobile.tsx    # Hook de breakpoint responsivo
│
├── public/               # Assets estáticos (imagens, favicons)
├── .nvmrc                # Versão do Node (24)
├── eslint.config.mjs     # Configuração ESLint (flat config, ESLint 9)
├── tailwind.config.ts    # Configuração Tailwind
└── next.config.mjs       # Configuração Next.js
```

---

## Deploy (Vercel)

O projecto está configurado para deploy automático na Vercel a partir da branch `main`.

- **Node version:** `24` (definida em `.nvmrc` e detectada automaticamente pela Vercel)
- **Package manager:** Yarn (detectado via `yarn.lock`)
- **Build command:** `yarn build` (default Vercel)
- **Output directory:** `.next` (default Next.js)

### Variáveis de ambiente na Vercel

Configura as seguintes variáveis no painel da Vercel em **Settings → Environment Variables**:

- `RESEND_API_KEY` — apenas para ambientes _Production_ e _Preview_
- `NEXT_PUBLIC_GA_ID` — para todos os ambientes

---

## Qualidade de código

```bash
# Lint
yarn lint

# Formatação
yarn format:check  # verificar
yarn format        # corrigir
```

O ESLint usa o preset `next/core-web-vitals` que inclui regras para React, React Hooks, acessibilidade e performance. O Prettier usa configuração em `.prettierrc`.
