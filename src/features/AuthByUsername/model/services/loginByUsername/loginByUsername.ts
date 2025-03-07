import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsernameProps {
   username: string;
   password: string;
}

export const loginByUsername = createAsyncThunk<
   User,
   LoginByUsernameProps,
   ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
   const { extra, rejectWithValue, dispatch } = thunkApi;
   try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
         throw new Error();
      }
      localStorage.setItem(
         USER_LOCALSTORAGE_KEY,
         JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));
      // if (extra.navigate) {
      //    extra.navigate('/profile');
      // }
      return response.data;
   } catch (e) {
      return rejectWithValue('error');
   }
});
