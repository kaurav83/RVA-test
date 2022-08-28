import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  user: boolean;
  redirectPath: string;
};

export const ProtectedRoute: FC<Props> = ({ user, redirectPath }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
