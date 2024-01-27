import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import React, { ReactNode } from 'react';

interface StoreDecoratorProps {
   state?: StateSchema;
   children: ReactNode;
}

const StoreDecorator = (props: StoreDecoratorProps) => {
   const { state, children } = props;
   return <StoreProvider>{children}</StoreProvider>;
};

export default StoreDecorator;
