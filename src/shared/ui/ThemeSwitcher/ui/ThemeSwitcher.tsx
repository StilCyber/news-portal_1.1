import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import { Button, ThemeButton } from '../../Button/Button';

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme();

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames('', {}, [className])}
         onClick={toggleTheme}
      >
         {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
   );
});
