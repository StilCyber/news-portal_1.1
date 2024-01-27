import React, { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'Entities/User';
import { useTranslation } from 'react-i18next';

function App() {
   const { theme } = useTheme();
   const dispatch = useDispatch();
   const { t } = useTranslation();

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, [dispatch]);

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback="">
            <Navbar />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
               {t('lorem')}
            </Modal>
            <div className="content-page">
               <Sidebar />
               <AppRouter />
            </div>
         </Suspense>
      </div>
   );
}

export default App;
