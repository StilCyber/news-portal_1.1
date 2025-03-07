import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

export const BugButton = () => {
   const [error, setError] = useState(false);
   const { t } = useTranslation();
   const onThrow = () => setError(true);
   useEffect(() => {
      if (error) {
         throw new Error();
      }
   }, [error]);
   return (
      <Button className={classNames('', {}, [])} onClick={onThrow}>
         {t('throw error')}
      </Button>
   );
};
