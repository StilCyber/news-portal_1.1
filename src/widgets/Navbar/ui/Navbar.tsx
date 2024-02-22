import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'Entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
   const [isAuthModal, setIsAuthModal] = useState(false);

   const { t } = useTranslation();

   const authData = useSelector(getUserAuthData);
   const dispatch = useDispatch();

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
   }, []);

   const onShowModal = useCallback(() => {
      setIsAuthModal(true);
   }, []);

   const onLogout = useCallback(() => {
      dispatch(userActions.logout());
   }, [dispatch]);

   if (authData) {
      return (
         <header>
            <Text
               title={t('Stil TV App')}
               theme={TextTheme.INVERTED}
               className={cls.appName}
            />
            <Dropdown
               items={[
                  {
                     content: t('Профиль'),
                     href: RoutePath.profile + authData.id,
                  },
                  {
                     content: t('Выйти'),
                     onClick: onLogout,
                  },
               ]}
               trigger={<Avatar src={authData.avatar} size={30} />}
            />
            <AppLink
               to={RoutePath.article_create}
               theme={AppLinkTheme.SECONDARY}
               className={cls.createBtn}
            >
               {t('Создать статью')}
            </AppLink>
         </header>
      );
   }

   return (
      <header className={classNames(cls.Navbar, {}, [className])}>
         <Button
            theme={ThemeButton.OUTLINE}
            className={cls.links}
            onClick={onShowModal}
         >
            {t('Войти')}
         </Button>
         {isAuthModal && (
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
         )}
      </header>
   );
});
