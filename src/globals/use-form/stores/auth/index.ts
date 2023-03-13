import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthStoreType } from "./types";

export const useAuth = create<AuthStoreType>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      tenant: null,
      setUser: (user) => set({ user }),

      setToken: (token) => set({ token }),
      getToken: () => get?.()?.token || null,

      setTenant: (tenant) => set({ tenant }),
      getTenant: () => get?.()?.tenant || null,

      clear: () => set({ token: null, user: null, tenant: null }),
    }),
    {
      name: "auth-store",
    }
  )
);
