import { register, init, getLocaleFromNavigator, _, locale, waitLocale } from 'svelte-i18n';

register('en', () => import('./i18n/en.json'));
register('ja', () => import('./i18n/ja.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator() || 'en',
});

export async function loadI18n() {
  await waitLocale();
}

export function setLang(lang) {
  locale.set(lang);
}

export { _, locale };
