import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeStoreType } from './types';
import { DEFAULT_THEME_VALUES } from './consts';

export const useTheme = create<ThemeStoreType>()(
  persist(
    set => ({
      ...DEFAULT_THEME_VALUES,

      clear: () => set({ ...DEFAULT_THEME_VALUES }),
      toggleDark: () => set(v => ({ isDark: !v.isDark })),
      setIsDark: isDark => set({ isDark })
    }),
    {
      name: 'theme-store'
    }
  )
);
