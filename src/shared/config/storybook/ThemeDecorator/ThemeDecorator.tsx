import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeContextProps } from 'app/providers/ThemeProvider/lib/ThemeContext';
import 'app/styles/index.scss';
import React from 'react';

// interface IDecoratorProps {
//   children: React.ReactNode;
//   theme: any;
// }

const ThemeDecorator = (props: ThemeContextProps) => {
  const { children, theme } = props;
  return (
    <ThemeProvider themeProps={theme}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
