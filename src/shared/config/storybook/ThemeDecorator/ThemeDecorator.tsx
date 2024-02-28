import { ThemeContextProps } from '@/shared/lib/context/ThemeContext';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const ThemeDecorator = (props: ThemeContextProps) => {
   const { children, theme } = props;
   return (
      <ThemeProvider themeProps={theme}>
         <div className={`app ${theme}`}>{children}</div>
      </ThemeProvider>
   );
};

export default ThemeDecorator;
