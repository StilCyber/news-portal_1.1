import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
   className?: string;
}

export const EditableProfileCardHeader = (
   props: EditableProfileCardHeaderProps,
) => {
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
                     data-testid="EditableProfileCardHeader.EditButton"
                  >
                     {t('Edit profile')}
                  </Button>
               ) : (
                  <HStack gap="8">
                     <Button
                        theme={ThemeButton.OUTLINE_RED}
                        onClick={onCanselEdit}
                        data-testid="EditableProfileCardHeader.CancelButton"
                     >
                        {t('Cancel')}
                     </Button>
                     <Button
                        theme={ThemeButton.OUTLINE}
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton"
                     >
                        {t('Save')}
                     </Button>
                  </HStack>
               )}
            </div>
         )}
      </HStack>
   );
};
