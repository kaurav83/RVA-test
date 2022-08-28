import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

import { Layout } from './components';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginPage, HomePage, NewsPage, ProfilePage } from './pages';

import { useLogin } from './hooks';

export const App: FC = () => {
  useLogin();

  return (
    <>
      <ToastContainer newestOnTop transition={Slide} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route
            element={
              <ProtectedRoute
                redirectPath="/login"
                user={Boolean(localStorage.getItem('isAuth'))}
              />
            }
          >
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
