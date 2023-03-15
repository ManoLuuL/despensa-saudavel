import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuStoreType } from './types';
import { DEFAULT_MENU_VALUES } from './consts';

export const useMenu = create<MenuStoreType>()(
  persist(
    set => ({
      ...DEFAULT_MENU_VALUES,

      clear: () => set({ ...DEFAULT_MENU_VALUES }),
      setSidebarSide: newSide => set({ sidebarSide: newSide }),
      setSidebarOpen: isOpen => set({ sidebarOpen: isOpen }),
      setModules: newModules => set({ modules: newModules }),
      setCurrentModule: newModule => set({ currentModule: newModule })
    }),
    {
      name: 'menu-store'
    }
  )
);
