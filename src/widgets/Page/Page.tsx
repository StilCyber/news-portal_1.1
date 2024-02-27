import { MutableRefObject, UIEvent, memo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UIActions } from '@/features/UI';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getUIScrollByPath } from '@/features/UI/model/selectors/ui';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children: React.ReactNode;
   onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
   const { className, children, onScrollEnd } = props;
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
   const dispatch = useAppDispatch();
   const { pathname } = useLocation();
   const scrollPosition = useSelector((state: StateSchema) =>
      getUIScrollByPath(state, pathname),
   );

   useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
   });

   useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
   });

   const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(
         UIActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
         }),
      );
   }, 500);

   return (
      <main
         className={classNames(cls.Page, {}, [className])}
         ref={wrapperRef}
         onScroll={onScroll}
      >
         {children}
         {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
      </main>
   );
});
