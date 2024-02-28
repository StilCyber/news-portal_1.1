import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
   DynamicModuleLoader,
   ReducersList,
} from '@/shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { ProfileCard } from '@/entities/Profile';
import { VStack } from '@/shared/ui/Stack';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
   className?: string;
   id: string;
}

const reducers: ReducersList = {
   profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
   const { className, id } = props;

   const { t } = useTranslation('profile');
   const dispatch = useAppDispatch();
   const formData = useSelector(getProfileForm);
   const isLoading = useSelector(getProfileIsLoading);
   const error = useSelector(getProfileError);
   const readonly = useSelector(getProfileReadonly);
   const validateErrors = useSelector(getProfileValidateErrors);

   const validateErrorTranslates = {
      [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
      [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age'),
      [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Incorrect region'),
      [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
         'First and last name are required',
      ),
      [ValidateProfileErrors.NO_DATA]: t('The data is not specified'),
   };

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

   useInitialEffect(() => {
      if (id) {
         dispatch(fetchProfileData(id));
      }
   });

   const reducers: ReducersList = {
      profile: profileReducer,
   };

   return (
      <DynamicModuleLoader reducers={reducers}>
         <VStack className={classNames('', {}, [className])}>
            <EditableProfileCardHeader />
            {validateErrors?.length &&
               validateErrors.map((err: ValidateProfileErrors) => (
                  <Text
                     theme={TextTheme.ERROR}
                     text={validateErrorTranslates[err]}
                     key={err}
                     data-testid="EditableProfileCard.Error"
                  />
               ))}
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
         </VStack>
      </DynamicModuleLoader>
   );
});
