import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeContextProps } from 'app/providers/ThemeProvider/lib/ThemeContext';
import 'app/styles/index.scss';
import React, { ReactNode } from 'react';

interface StoreDecoratorProps {
  state?: StateSchema;
  children: ReactNode;
}

const StoreDecorator = (props: StoreDecoratorProps) => {
  const { state, children } = props;
  return <StoreProvider>{children}</StoreProvider>
};

export default StoreDecorator;
