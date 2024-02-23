import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
   className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
   const { className } = props;
   const { t } = useTranslation('profile');
   const { id } = useParams<{ id: string }>();

   if (!id) {
      return <Text title={t('Profile not found')} />;
   }

   return (
      <Page className={classNames('', {}, [className])}>
         <VStack gap="16" max>
            <EditableProfileCard id={id} />
         </VStack>
      </Page>
   );
});

export default ProfilePage;
