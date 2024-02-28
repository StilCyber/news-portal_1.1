import React, { useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

const defaultTheme =
   (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
   themeProps?: Theme;
   children?: React.ReactNode;
}

const ThemeProvider = ({ children, themeProps }: ThemeProviderProps) => {
   const [theme, setTheme] = useState<Theme>(themeProps || defaultTheme);

   const defaultProps = useMemo(
      () => ({
         theme,
         setTheme,
      }),
      [theme],
   );

   return (
      <ThemeContext.Provider value={defaultProps}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;
