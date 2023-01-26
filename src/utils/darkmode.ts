import { getLocalStorage } from "./localStorage";

export const getIsDark = (): boolean => {
  return getLocalStorage('isDark') === 'true';
}

export const setDarkMode = (isDark: boolean): void => {
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  document.documentElement.className = isDark ? 'dark' : 'light';
}


