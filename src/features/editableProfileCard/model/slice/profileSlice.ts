import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from 'Entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const initialState: ProfileSchema = {
   readonly: true,
   isLoading: false,
   data: undefined,
   form: undefined,
};

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setReanonly: (state, action: PayloadAction<boolean>) => {
         state.readonly = action.payload;
      },
      updateProfile: (state, action: PayloadAction<Profile>) => {
         state.form = {
            ...state.form,
            ...action.payload,
         };
      },
      canselEdit: (state) => {
         state.readonly = true;
         state.form = state.data;
         state.validateErrors = undefined;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(
            fetchProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
               state.isLoading = false;
               state.data = action.payload;
               state.form = action.payload;
            },
         )
         .addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
         })

         .addCase(updateProfileData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
         })
         .addCase(
            updateProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
               state.isLoading = false;
               state.data = action.payload;
               state.form = action.payload;
               state.readonly = true;
               state.validateErrors = undefined;
            },
         )
         .addCase(updateProfileData.rejected, (state, action) => {
            state.validateErrors = action.payload;
            state.isLoading = false;
         });
   },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
