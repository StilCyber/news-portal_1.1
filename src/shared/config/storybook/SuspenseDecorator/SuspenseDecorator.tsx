import { Suspense } from 'react';

interface SuspenseDecoratorProps {
   children: React.ReactNode;
}

const SuspenseDecorator = (props: SuspenseDecoratorProps) => {
   const { children } = props;

   return <Suspense>{children}</Suspense>;
};

export default SuspenseDecorator;
