import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import {
   ProfileCard,
   fetchProfileData,
   getProfileData,
   getProfileError,
   getProfileForm,
   getProfileIsLoading,
   getProfileReadonly,
   profileActions,
   profileReducer,
} from 'Entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'Entities/Currency';
import { Country } from 'Entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
   className?: string;
}

const reducers: ReducersList = {
   profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const formData = useSelector(getProfileForm);
   const isLoading = useSelector(getProfileIsLoading);
   const error = useSelector(getProfileError);
   const readonly = useSelector(getProfileReadonly);


   const onChangeFirstname = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ first: value || '' }));
      },
      [dispatch],
   );

   const onChangeLastname = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ lastname: value || '' }));
      },
      [dispatch],
   );

   const onChangeAge = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      },
      [dispatch],
   );

   const onChangeCity = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ city: value || '' }));
      },
      [dispatch],
   );

   const onChangeUsername = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ username: value || '' }));
      },
      [dispatch],
   );

   const onChangeAvatar = useCallback(
      (value?: string) => {
         dispatch(profileActions.updateProfile({ avatar: value || '' }));
      },
      [dispatch],
   );

   const onChangeCurrency = useCallback(
      (currency: Currency) => {
         dispatch(profileActions.updateProfile({ currency }));
      },
      [dispatch],
   );

   const onChangeCountry = useCallback(
      (country: Country) => {
         dispatch(profileActions.updateProfile({ country }));
      },
      [dispatch],
   );

   useEffect(() => {
      dispatch(fetchProfileData());
   }, [dispatch]);

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <div className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            <ProfileCard
               data={formData}
               isLoading={isLoading}
               error={error}
               readonly={readonly}
               onChangeFirstname={onChangeFirstname}
               onChangeLastname={onChangeLastname}
               onChangeAge={onChangeAge}
               onChangeCity={onChangeCity}
               onChangeUsername={onChangeUsername}
               onChangeAvatar={onChangeAvatar}
               onChangeCurrency={onChangeCurrency}
               onChangeCountry={onChangeCountry}
            />
         </div>
      </DynamicModuleLoader>
   );
});

export default ProfilePage;
