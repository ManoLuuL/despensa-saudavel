import { LoginViewModel } from "../../../../api/services/auth/view-models/login-view-model";
import { User } from "./models/user";

type AuthStoreProps = {
  token: string | null;
  user: User | null;
  tenant: string | null;
};

type AuthStoreActions = {
  setUser(user: User): void;

  setToken(token: string): void;
  getToken(): string | null;

  setTenant(tenant: string): void;
  getTenant(): string | null;

  clear(): void;

  changeActiveCompany(activeCompany: LoginViewModel): void;
};

export type AuthStoreType = AuthStoreProps & AuthStoreActions;
