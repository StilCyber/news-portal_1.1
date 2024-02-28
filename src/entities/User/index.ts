export { isUserAdmin, isUserManager } from './model/selecrors/roleSelectors';
export { userReducer, userActions } from './model/slice/userSlice';
export { getUserAuthData } from './model/selecrors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selecrors/getUserInited/getUserInited';
export { UserRole } from './model/consts/userConsts';
export { getUserRoles } from './model/selecrors/roleSelectors';

export type { UserSchema, User } from './model/types/user';
