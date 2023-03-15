export type CommonItemAndSubItemProps = {
  id: number;
  name: string;
  path: string;

  position: number;
  expired: boolean;
};

export type MenuSubItem = CommonItemAndSubItemProps & {
  favorite: boolean;
  access: boolean;
  hidden: boolean;
};

export type MenuItem = CommonItemAndSubItemProps & {
  icon: string;

  subItems?: MenuSubItem[];
};

export type ModuleType = {
  id: number;
  path: string;
  name: string;
  icon: string;

  items: MenuItem[];
};

export type SidebarSides = "LEFT" | "RIGHT" | "TOP" | "BOTTOM";

export type MenuStoreProps = {
  sidebarSide: SidebarSides;
  sidebarOpen: boolean;

  modules: ModuleType[] | null;
  currentModule: ModuleType | null;
};

export type MenuStoreActions = {
  clear(): void;

  setSidebarSide(newSide: SidebarSides): void;
  setSidebarOpen(isOpen: boolean): void;

  setModules(newModules: ModuleType[]): void;
  setCurrentModule(newModule: ModuleType): void;
};

export type MenuStoreType = MenuStoreProps & MenuStoreActions;
