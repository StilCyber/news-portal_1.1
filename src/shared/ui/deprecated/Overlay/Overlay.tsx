import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
   className?: string;
   onClick?: () => void;
}

/**
 * @deprecated
 */

export const Overlay = memo((props: OverlayProps) => {
   const { className, onClick } = props;

   return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
         onClick={onClick}
         className={classNames(cls.Overlay, {}, [className])}
      />
   );
});
