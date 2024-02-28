import { createContext } from 'react';
import { Theme } from '@/shared/const/theme';

export interface ThemeContextProps {
   theme?: Theme;
   setTheme?: (theme: Theme) => void;
   children?: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({});
