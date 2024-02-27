import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
   className?: string;
   src?: string;
   size?: number;
}

export const Avatar = (props: AvatarProps) => {
   const { className, src, size } = props;

   const styles = useMemo<CSSProperties>(
      () => ({
         width: size || 100,
         height: size || 100,
      }),
      [size],
   );

   const mods: Mods = {};

   return (
      <img
         src={src}
         className={classNames(cls.Avatar, mods, [className])}
         alt="#"
         style={styles}
      />
   );
};
