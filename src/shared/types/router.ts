import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line stil-plugin-paths/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
   authOnly?: boolean;
   roles?: UserRole[];
};
