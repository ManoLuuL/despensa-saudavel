import { LoginUserViewModel } from "../../../../../api/services/auth/view-models/login-user-view-model";
import { UserProfileViewModel } from "../../../../../api/services/user/view-models/user-profile-view-model";

export type User = LoginUserViewModel & {
  profile: UserProfileViewModel;
};
