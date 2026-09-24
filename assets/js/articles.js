import { getLanguage, t } from "./i18n.js";

// Cada entrada representa um artigo. `versions` pode conter só pt, só en ou ambos.
// Cada versão aponta para sua própria página HTML estática em `href`.
export const articles = [];

function renderArticles() {
  const list = document.getElementById("articles-list");
  const empty = document.getElementById("articles-empty");
  if (!list || !empty) return;

  list.replaceChildren();
  empty.hidden = articles.length > 0;
  const language = getLanguage();

  [...articles]
    .sort((left, right) => right.date.localeCompare(left.date))
    .forEach((article) => {
      const versionLanguage = article.versions[language]
        ? language
        : article.versions.pt
          ? "pt"
          : "en";
      const version = article.versions[versionLanguage];
      if (!version) return;

      const wrapper = document.createElement("article");
      wrapper.className = "article-preview";
      const contentLanguage = versionLanguage === "pt" ? "pt-BR" : "en";

      const meta = document.createElement("p");
      meta.className = "article-preview-meta";
      const date = new Intl.DateTimeFormat(
        language === "pt" ? "pt-BR" : "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      ).format(new Date(`${article.date}T12:00:00`));
      meta.textContent = `${date} · ${version.readingTime} ${t("articles.minutes")} · ${t(`articles.language.${versionLanguage}`)}`;

      const heading = document.createElement("h2");
      heading.lang = contentLanguage;
      const link = document.createElement("a");
      link.href = version.href;
      link.textContent = version.title;
      heading.append(link);

      const description = document.createElement("p");
      description.className = "article-preview-description";
      description.lang = contentLanguage;
      description.textContent = version.description;

      const tags = document.createElement("p");
      tags.className = "article-preview-tags";
      tags.lang = contentLanguage;
      tags.textContent = (version.tags || []).join(" · ");

      wrapper.append(meta, heading, description);
      if (version.tags?.length) wrapper.append(tags);
      list.append(wrapper);
    });
}

document.addEventListener("portfolio:languagechange", renderArticles);
renderArticles();
