export type ThemeState = {
  isDark: boolean;
};

export type ThemeActions = {
  clear(): void;

  toggleDark(): void;
  setIsDark(isDark: boolean): void;
};

export type ThemeStoreType = ThemeState & ThemeActions;
