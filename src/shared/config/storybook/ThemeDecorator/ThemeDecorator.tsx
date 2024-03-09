import { ThemeContextProps } from '@/shared/lib/context/ThemeContext';
// eslint-disable-next-line stil-plugin-paths/layer-imports
import '@/app/styles/index.scss';
// eslint-disable-next-line stil-plugin-paths/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const ThemeDecorator = (props: ThemeContextProps) => {
   const { children, theme } = props;
   return (
      <ThemeProvider initialTheme={theme}>
         <div className={`app ${theme}`}>{children}</div>
      </ThemeProvider>
   );
};

export default ThemeDecorator;
