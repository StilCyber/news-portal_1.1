import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'Entities/User';
import { SidebarItemType } from '../../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
   const { item, collapsed } = props;
   const { t } = useTranslation();
   const isAuth = useSelector(getUserAuthData);

   if (item.authOnly && !isAuth) {
      return null;
   }

   return (
      <div className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
         <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
         >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
         </AppLink>
      </div>
   );
});
