import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema, User } from './model/types/user';
import { getUserAuthData } from './model/selecrors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selecrors/getUserInited/getUserInited';

export { userReducer, userActions, UserSchema, User, getUserAuthData, getUserInited };
