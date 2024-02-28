import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Modal } from '@/shared/ui/Modal';
import { getUserInited, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

function App() {
   const { theme } = useTheme();
   const dispatch = useDispatch();
   const { t } = useTranslation();
   const inited = useSelector(getUserInited);

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, [dispatch]);

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={classNames('app', {}, [theme])}>
         <Suspense fallback="">
            <Navbar />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
               {t('lorem')}
            </Modal>
            <div className="content-page">
               <Sidebar />
               {inited && <AppRouter />}
            </div>
         </Suspense>
      </div>
   );
}

export default App;
