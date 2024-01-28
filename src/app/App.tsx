import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'Entities/User';
import { useTranslation } from 'react-i18next';

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
