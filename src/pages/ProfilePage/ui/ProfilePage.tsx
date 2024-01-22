import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { profileReducer } from 'Entities/Profile';

interface ProfilePageProps {
   className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
   const { className } = props;
   const { t } = useTranslation();

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <div className={classNames('', {}, [className])}>
            {t('Profile Page')}
         </div>
      </DynamicModuleLoader>
   );
});

export default ProfilePage;
