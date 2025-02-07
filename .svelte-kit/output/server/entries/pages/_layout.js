import { a as addTranslations, s as setRoute, b as setLocale } from "../../chunks/index3.js";
const prerender = true;
const load = async ({ data }) => {
  const { i18n, translations } = data;
  const { lang, route } = i18n;
  addTranslations(translations);
  await setRoute(route);
  await setLocale(lang);
  return i18n;
};
export {
  load,
  prerender
};
