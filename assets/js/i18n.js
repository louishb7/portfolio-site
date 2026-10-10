const STORAGE_KEY = "portfolio-language";

const translations = {
  pt: {
    "meta.home.title": "Henrique Freitas | Desenvolvedor com foco em Backend",
    "meta.home.description":
      "Portfólio de Henrique Freitas, estudante de Desenvolvimento de Software com foco em backend, TypeScript, Node.js e NestJS.",
    "meta.articles.title": "Artigos | Henrique Freitas",
    "meta.articles.description":
      "Artigos de Henrique Freitas sobre engenharia de software, backend e desenvolvimento.",
    "skip.main": "Ir para o conteúdo principal",
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.articles": "Artigos",
    "nav.open": "Abrir menu",
    "nav.close": "Fechar menu",
    "language.label": "Idioma do site",
    "theme.toLight": "Ativar tema claro",
    "theme.toDark": "Ativar tema escuro",
    "hero.title": "Desenvolvedor com foco em Backend",
    "hero.description":
      "Desenvolvo aplicações backend e APIs, com estudos focados em TypeScript, Node.js e NestJS.",
    "hero.current.eyebrow": "ATUALMENTE DESENVOLVENDO",
    "hero.current.description":
      "Uma plataforma autoral de aprendizagem de programação, com foco inicial em desenvolvimento backend.",
    "hero.current.cta": "Conhecer projeto",
    "social.linkedin": "Perfil no LinkedIn",
    "social.github": "Perfil no GitHub",
    "about.title": "Sobre",
    "about.description":
      "Estudante de análise e desenvolvimento de sistemas com foco em backend. Antes disso, trabalhei com suporte técnico em um provedor de internet, diagnosticando e resolvendo problemas de conexão tanto remotamente quanto presencialmente no local. Essa experiência me ensinou a analisar problemas de forma sistemática antes de tirar conclusões, algo que hoje orienta meu trabalho com backend.",
    "about.cv": "Baixar currículo",
    "skills.title": "Minhas habilidades",
    "skills.description":
      "Estas são as tecnologias e ferramentas com as quais trabalho.",
    "skills.tools": "Ferramentas e ambiente",
    "projects.title": "Projetos",
    "projects.others": "Outros trabalhos",
    "projects.bunkercode.alt":
      "Arte promocional ilustrativa do BunkerCode com notebook e smartphone",
    "projects.bunkercode.eyebrow": "PROJETO EM DESTAQUE",
    "projects.bunkercode.status": "Em desenvolvimento",
    "projects.bunkercode.description":
      "Plataforma autoral de aprendizagem de programação, com cursos, lições em Markdown e prática de código voltados inicialmente ao desenvolvimento backend.",
    "projects.bunkercode.stack":
      "Monorepo PNPM · TypeScript · React · Node.js · NestJS",
    "projects.bunkercode.cta": "Conhecer projeto",
    "projects.bunker.alt":
      "Apresentação do BunkerMode em desktop, tablet e celular",
    "projects.bunker.eyebrow": "PROJETO AUTORAL",
    "projects.bunker.status": "Versão concluída",
    "projects.bunker.description":
      "Aplicação de organização pessoal que reúne planejamento, objetivos, tarefas e acompanhamento de atividades em uma experiência integrada.",
    "projects.cadisk.alt":
      "Apresentação do Cadisk em desktop, tablet e celular",
    "projects.cadisk.eyebrow": "PROJETO PARA CLIENTE",
    "projects.cadisk.status": "Trabalho freelance",
    "projects.cadisk.description":
      "Sistema desenvolvido para organizar o fluxo operacional de laboratórios de prótese dentária, centralizando trabalhos, clientes, prazos, entregas, acompanhamento financeiro e seleção visual por odontograma interativo.",
    "projects.live": "Ver demonstração",
    "projects.caseStudy": "Ver estudo de caso",
    "contact.title": "Contato",
    "contact.description":
      "Estou aberto a oportunidades e conversas sobre desenvolvimento backend.",
    "footer.role": "Desenvolvedor com foco em Backend",
    "articles.eyebrow": "ESCRITA",
    "articles.title": "Artigos",
    "articles.intro":
      "Estudos, experiências e reflexões sobre engenharia de software, backend e desenvolvimento.",
    "articles.empty":
      "Ainda não há artigos publicados. Este espaço receberá textos novos em breve.",
    "articles.backHome": "Voltar ao início",
    "articles.read": "Ler artigo",
    "articles.minutes": "min de leitura",
    "articles.language.pt": "Em português",
    "articles.language.en": "Em inglês",
    "articles.back": "Voltar aos artigos",
  },
  en: {
    "meta.home.title": "Henrique Freitas | Backend-Focused Developer",
    "meta.home.description":
      "Portfolio of Henrique Freitas, a Software Development student focused on backend development with TypeScript, Node.js and NestJS.",
    "meta.articles.title": "Articles | Henrique Freitas",
    "meta.articles.description":
      "Articles by Henrique Freitas on software engineering, backend development, and the craft of building software.",
    "skip.main": "Skip to main content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.articles": "Articles",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "language.label": "Site language",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "hero.title": "Backend-Focused Developer",
    "hero.description":
      "I build backend applications and APIs, focusing my studies on TypeScript, Node.js and NestJS.",
    "hero.current.eyebrow": "CURRENTLY BUILDING",
    "hero.current.description":
      "A self-authored programming learning platform, initially focused on backend development.",
    "hero.current.cta": "Explore Project",
    "social.linkedin": "LinkedIn profile",
    "social.github": "GitHub profile",
    "about.title": "About",
    "about.description":
      "I'm a Software Development student focused on backend. Before that, I worked in technical support for an internet provider, diagnosing connectivity issues both remotely and on-site, and managing customer accounts through an admin dashboard. That experience taught me to think through problems systematically before jumping to conclusions, which now shapes how I approach backend work.",
    "about.cv": "Download CV",
    "skills.title": "My Skills",
    "skills.description": "These are the technologies and tools I work with.",
    "skills.tools": "Tools & Environment",
    "projects.title": "Projects",
    "projects.others": "Other Projects",
    "projects.bunkercode.alt":
      "Illustrative BunkerCode promotional artwork with a laptop and smartphone",
    "projects.bunkercode.eyebrow": "FEATURED PROJECT",
    "projects.bunkercode.status": "In Development",
    "projects.bunkercode.description":
      "Self-authored programming learning platform featuring courses, Markdown lessons, and hands-on code practice initially focused on backend development.",
    "projects.bunkercode.stack":
      "PNPM Monorepo · TypeScript · React · Node.js · NestJS",
    "projects.bunkercode.cta": "Explore Project",
    "projects.bunker.alt":
      "BunkerMode presentation on desktop, tablet and mobile",
    "projects.bunker.eyebrow": "PERSONAL PROJECT",
    "projects.bunker.status": "Completed Version",
    "projects.bunker.description":
      "Personal organization application that brings together planning, goals, tasks, and activity tracking in an integrated experience.",
    "projects.cadisk.alt": "Cadisk presentation on desktop, tablet and mobile",
    "projects.cadisk.eyebrow": "CLIENT PROJECT",
    "projects.cadisk.status": "Freelance Work",
    "projects.cadisk.description":
      "System built to organize the operational workflow of dental prosthesis laboratories, centralizing cases, clients, deadlines, deliveries, financial tracking, and visual tooth selection via an interactive odontogram.",
    "projects.live": "Live Demo",
    "projects.caseStudy": "View Case Study",
    "contact.title": "Contact",
    "contact.description":
      "I'm open to opportunities and conversations about backend development.",
    "footer.role": "Backend-Focused Developer",
    "articles.eyebrow": "WRITING",
    "articles.title": "Articles",
    "articles.intro":
      "Studies, practical experience, and reflections on software engineering, backend development, and building software.",
    "articles.empty":
      "No articles have been published yet. New writing will appear here soon.",
    "articles.backHome": "Back to home",
    "articles.read": "Read article",
    "articles.minutes": "min read",
    "articles.language.pt": "In Portuguese",
    "articles.language.en": "In English",
    "articles.back": "Back to articles",
  },
};

let currentLanguage = "pt";

export function t(key) {
  return translations[currentLanguage][key] ?? key;
}

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(language) {
  if (language !== "pt" && language !== "en") return;
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  for (const [attribute, selector] of [
    ["aria-label", "data-i18n-aria-label"],
    ["alt", "data-i18n-alt"],
  ]) {
    document.querySelectorAll(`[${selector}]`).forEach((element) => {
      element.setAttribute(attribute, t(element.getAttribute(selector)));
    });
  }

  const page = document.body.dataset.page || "home";
  if (page === "home" || page === "articles") {
    document.title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", description);
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(active));
  });
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {}
  document.dispatchEvent(
    new CustomEvent("portfolio:languagechange", { detail: { language } }),
  );
}

export function initI18n() {
  let saved = "pt";
  try {
    if (localStorage.getItem(STORAGE_KEY) === "en") saved = "en";
  } catch {}
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () =>
      setLanguage(button.dataset.language),
    );
  });
  setLanguage(saved);
}
