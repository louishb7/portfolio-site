# Henrique Freitas — Portfolio

This is my personal portfolio, presenting projects, technical skills, and current focus on backend development. Visit the site at https://henriquefreitas.tech.

## About

I am a Software Development student focused on backend development, mainly using TypeScript, Node.js, and NestJS. The portfolio is intentionally kept as a simple static website.

## Tech Stack

- HTML
- CSS
- JavaScript
- Vercel

The portfolio includes responsive design, light and dark themes, persistent theme preference, accessibility improvements, Open Graph and social metadata, and a Content Security Policy with security headers.

## Projects

### BunkerMode

Modular personal organization system built around tasks, objectives and focused execution.

Stack: TypeScript, React, Vite, Node.js, NestJS, Prisma, PostgreSQL, Docker and Jest.

- Live Demo: https://bunkermodeproject.vercel.app/
- GitHub: https://github.com/louishb7/TaskSystem-BunkerMode

### Cadisk

Dental lab workflow management system designed for CAD designers to track work received from dentists throughout its production lifecycle.

Stack: TypeScript, React, Vite, Node.js, NestJS, Prisma, PostgreSQL, Docker and Jest.

- Live Demo: https://cadisk.vercel.app/
- GitHub: https://github.com/louishb7/Dental-lab

## Contact

- LinkedIn: https://www.linkedin.com/in/louishb7/
- GitHub: https://github.com/louishb7
- Email: [henriquefreitasdev@gmail.com](mailto:henriquefreitasdev@gmail.com)

## Idiomas e artigos

A interface é estática e usa português por padrão. `assets/js/i18n.js` concentra os textos PT/EN, atualiza os elementos com `data-i18n` (ou atributos `data-i18n-*`) e persiste a escolha em `localStorage`. Páginas novas reutilizam `assets/js/main.js`, o seletor da header e essas chaves.

`/articles/` é uma página HTML própria. O índice usa `assets/js/articles.js`, sem CMS nem backend. Para publicar um artigo:

1. Crie `articles/<slug>/index.html` com a mesma header/footer, os assets por caminhos absolutos (`/assets/...`) e o corpo em `<article class="article-document" lang="pt-BR">` ou `lang="en"`. Use `body data-page="article"`, `<main>`, metadata e canonical próprios, e inclua `/assets/js/main.js` como módulo. O CSS já cobre headings, listas, código, citações, links e imagens. Inclua um link de volta para `/articles/` com `data-i18n="articles.back"`.
2. Acrescente uma entrada ao array `articles` em `assets/js/articles.js`:

   ```js
   {
     slug: "meu-artigo",
     date: "2026-09-23",
     versions: {
       pt: {
         title: "Título real",
         description: "Resumo real",
         readingTime: 5,
         tags: ["Backend"],
         href: "/articles/meu-artigo/",
       },
     },
   }
   ```

3. Para uma tradução futura, crie outra página estática e adicione `en` em `versions` com seu próprio `href`. O índice prefere a versão no idioma da interface; quando ela não existe, mostra a versão disponível e informa o idioma do texto. O corpo de cada página permanece no idioma em que foi escrito, independentemente do idioma escolhido para a interface.
