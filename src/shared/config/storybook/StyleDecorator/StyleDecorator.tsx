import 'app/styles/index.scss';
import React from 'react';

interface IDecoratorProps {
   children: React.ReactNode;
}

const StyleDecorator = (props: IDecoratorProps) => {
   const { children } = props;
   return <div>{children}</div>;
};

export default StyleDecorator;
