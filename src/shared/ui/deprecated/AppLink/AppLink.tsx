import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   RED = 'red',
}

interface AppLinkProps extends LinkProps {
   className?: string;
   theme?: AppLinkTheme;
   children?: ReactNode;
}

/**
 * @deprecated
 */

export const AppLink = memo((props: AppLinkProps) => {
   const {
      to,
      className,
      children,
      theme = AppLinkTheme.PRIMARY,
      ...otherProps
   } = props;

   return (
      <Link
         to={to}
         className={classNames(cls.AppLink, { [cls[theme]]: true }, [
            className,
         ])}
         {...otherProps}
      >
         {children}
      </Link>
   );
});
