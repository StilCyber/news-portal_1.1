import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
   const { t } = useTranslation('main');

   return <Page>{t('Main page')}</Page>;
});

export default MainPage;
