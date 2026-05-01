# Social Digital Pro 2024 — Sitio web oficial

Sitio web bilingüe (Inglés / Español) para **Social Digital Pro 2024 SAS** (NIT 902010188), construido con Next.js 15, App Router, TypeScript, Tailwind CSS y `next-intl`.

Cumple los requisitos del partner:

1. Hosteado (lista de despliegue al final).
2. Footer con razón social: **Social Digital Pro 2024 SAS · NIT 902010188**.
3. Sección **About us**.
4. Descripción de servicios (PPC, SMM, Content Writing).
5. Sección **Contact us** con formulario funcional + dirección y email reales.
6. **Privacy policy** en página separada.
7. Bilingüe con switcher EN/ES en la esquina superior derecha.

---

## Estructura

```text
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Header + Footer + provider next-intl
│   │   ├── page.tsx                # Home (Hero + About + Services + Contact)
│   │   └── privacy-policy/
│   │       └── page.tsx            # Privacy policy en página dedicada
│   ├── api/contact/route.ts        # POST: valida y devuelve el mensaje de éxito
│   ├── globals.css                 # Tailwind + clases utilitarias del proyecto
│   ├── layout.tsx                  # Root layout (metadata global)
│   ├── not-found.tsx               # 404
│   ├── robots.ts                   # robots.txt
│   └── sitemap.ts                  # sitemap.xml
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx             # Cliente, hace fetch a /api/contact
│   ├── Footer.tsx                  # Razón social + NIT + email
│   ├── Header.tsx                  # Nav + menú móvil + switcher
│   ├── Hero.tsx
│   ├── LanguageSwitcher.tsx        # EN / ES
│   └── Services.tsx
├── i18n/
│   ├── messages/en.json
│   ├── messages/es.json
│   ├── request.ts
│   └── routing.ts
├── public/favicon.svg
├── middleware.ts                   # Locale routing + redirección "/"
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Datos del negocio (ya incrustados en el sitio)

| Campo | Valor |
| --- | --- |
| Razón social | Social Digital Pro 2024 SAS |
| NIT | 902010188 |
| Email | gerencia@socialdigitalpro2024.com |
| Teléfono | +57 314 2929 017 |
| Dirección | Conjunto Altavista, Manzana 46 casa 2A, Valledupar, Cesar, Colombia |
| Dominio | socialdigitalpro2024.com |

Si cambian los datos, edítalos en `i18n/messages/en.json` y `i18n/messages/es.json` (claves `contact.*` y `footer.*`).

---

## Requisitos

- Node.js **18.18 o superior** (recomendado 20+)
- npm 9+

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El middleware redirige automáticamente a `/en` o `/es` según el navegador.

### Comprobación de producción

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Despliegue (recomendado: Vercel)

Vercel hostea Next.js de forma nativa, gratis y con HTTPS automático.

1. Sube este proyecto a un repositorio en GitHub / GitLab / Bitbucket.
2. Entra a [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
3. Vercel detecta Next.js, deja todos los valores por defecto y haz clic en **Deploy**.
4. Cuando termine, ve a **Settings → Domains** del proyecto y agrega `socialdigitalpro2024.com` y `www.socialdigitalpro2024.com`.
5. Vercel te mostrará los registros DNS exactos a configurar en tu proveedor de dominio:
   - Para el dominio raíz: un registro `A` apuntando a `76.76.21.21`.
   - Para `www`: un registro `CNAME` apuntando a `cname.vercel-dns.com`.
6. Espera la propagación DNS (de minutos a un par de horas). Vercel emite el certificado SSL automáticamente.

### Alternativas

- **Netlify**: importa el repo, framework auto-detectado como Next.js. Mismo flujo de dominio en Site settings → Domain management.
- **Cualquier VPS con Node 20**: `npm ci && npm run build && npm run start -- -p 80` detrás de Nginx con HTTPS via Certbot.

---

## Endpoint del formulario de contacto

`POST /api/contact`

Body JSON:

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+57 300 0000000",
  "address": "Calle 1 # 2-3",
  "subject": "Consulta",
  "message": "Hola..."
}
```

Respuesta exitosa (HTTP 200):

```json
{ "ok": true, "message": "Thank you! We will contact you shortly." }
```

> El handler valida `name`, `email` y `message`. Hoy registra la submission en consola del servidor — para enviar email real conecta un proveedor (Resend, SendGrid, AWS SES) en `app/api/contact/route.ts` donde está marcado el `TODO`.

---

## Internacionalización

- Locales soportados: `en` (por defecto), `es`.
- Rutas: `/en/...` y `/es/...`. La raíz `/` redirige al locale del navegador.
- Para agregar / editar textos: modifica los JSON en `i18n/messages/`.
- Para agregar un nuevo idioma: añádelo a `routing.ts` y crea su archivo de mensajes correspondiente.

---

## Licencia

© Social Digital Pro 2024 SAS — NIT 902010188. Todos los derechos reservados.
