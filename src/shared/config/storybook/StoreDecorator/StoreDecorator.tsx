import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import React, { ReactNode } from 'react';

interface StoreDecoratorProps {
   state?: DeepPartial<StateSchema>;
   children: ReactNode;
}

const StoreDecorator = (props: StoreDecoratorProps) => {
   const { state, children } = props;
   return <StoreProvider initialState={state}>{children}</StoreProvider>;
};

export default StoreDecorator;
