import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
   getProfileData,
   getProfileReadonly,
   profileActions,
   updateProfileData,
} from 'Entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'Entities/User';
import { HStack } from 'shared/ui/Stack';


interface ProfilePageHeaderProps {
   className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
   const { className } = props;
   const { t } = useTranslation('profile');
   const authData = useSelector(getUserAuthData);
   const profileData = useSelector(getProfileData);
   const canEdit = authData?.id === profileData?.id;

   const readonly = useSelector(getProfileReadonly);
   const dispatch = useAppDispatch();

   const onEdit = useCallback(() => {
      dispatch(profileActions.setReanonly(false));
   }, [dispatch]);

   const onCanselEdit = useCallback(() => {
      dispatch(profileActions.canselEdit());
   }, [dispatch]);

   const onSave = useCallback(() => {
      dispatch(updateProfileData());
   }, [dispatch]);

   return (
      <HStack justify="between" className={classNames('', {}, [className])}>
         <Text title={t('Profile')} />
         {canEdit && (
            <div>
               {readonly ? (
                  <Button
                     theme={ThemeButton.OUTLINE}
                     onClick={onEdit}
                  >
                     {t('Edit profile')}
                  </Button>
               ) : (
                  <HStack gap="8">
                     <Button
                        theme={ThemeButton.OUTLINE_RED}
                        onClick={onCanselEdit}
                     >
                        {t('Cancel')}
                     </Button>
                     <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                        {t('Save')}
                     </Button>
                  </HStack>
               )}
            </div>
         )}
      </HStack>
   );
};
