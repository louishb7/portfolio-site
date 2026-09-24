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
    "hero.projects": "Ver projetos",
    "social.linkedin": "Perfil no LinkedIn",
    "social.github": "Perfil no GitHub",
    "about.title": "Sobre",
    "about.description":
      "Sou estudante de Desenvolvimento de Software com foco em backend. Antes disso, trabalhei com suporte técnico em um provedor de internet — diagnosticando problemas de conexão remotamente e no local, além de gerenciar contas de clientes em um painel administrativo. Essa experiência me ensinou a analisar problemas de forma sistemática antes de tirar conclusões, algo que hoje orienta meu trabalho com backend.",
    "about.cv": "Baixar currículo",
    "skills.title": "Minhas habilidades",
    "skills.description":
      "Estas são as tecnologias e ferramentas com as quais trabalho.",
    "skills.tools": "Ferramentas e ambiente",
    "projects.title": "Projetos",
    "projects.bunker.alt":
      "Apresentação do BunkerMode em desktop, tablet e celular",
    "projects.bunker.description":
      "Sistema de gestão de tarefas que conecta objetivos de longo prazo à execução diária.",
    "projects.cadisk.alt":
      "Apresentação do Cadisk em desktop, tablet e celular",
    "projects.cadisk.description":
      "Sistema de gestão para laboratórios de prótese dentária, com acompanhamento de casos, etapas de produção e entregas.",
    "projects.live": "Ver demonstração",
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
    "hero.projects": "View Projects",
    "social.linkedin": "LinkedIn profile",
    "social.github": "GitHub profile",
    "about.title": "About",
    "about.description":
      "I'm a Software Development student focused on backend. Before that, I worked in technical support for an internet provider — diagnosing connectivity issues both remotely and on-site, and managing customer accounts through an admin dashboard. That experience taught me to think through problems systematically before jumping to conclusions, which now shapes how I approach backend work.",
    "about.cv": "Download CV",
    "skills.title": "My Skills",
    "skills.description": "These are the technologies and tools I work with.",
    "skills.tools": "Tools & Environment",
    "projects.title": "Projects",
    "projects.bunker.alt":
      "BunkerMode presentation on desktop, tablet and mobile",
    "projects.bunker.description":
      "Task management system that turns long-term goals into daily execution.",
    "projects.cadisk.alt": "Cadisk presentation on desktop, tablet and mobile",
    "projects.cadisk.description":
      "Dental lab management system for tracking cases, production stages and deliveries.",
    "projects.live": "Live Demo",
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
