import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import React from 'react';

interface IDecoratorProps {
    children: React.ReactNode;
    theme: string;
}

const ThemeDecorator = (props: IDecoratorProps) => {
    const { children, theme } = props;
    return <div className={`app ${theme}`}>{children}</div>;
};

export default ThemeDecorator;
