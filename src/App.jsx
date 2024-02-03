import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { apiRefreshUser } from './redux/auth/authSlice';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    );
};
