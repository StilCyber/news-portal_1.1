import 'app/styles/index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

interface IDecoratorProps {
    children: React.ReactNode;
}

const RouterDecorator = (props: IDecoratorProps) => {
    const { children } = props;
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterDecorator;
