import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from './redux/auth/selectors';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = useSelector(isAuthSelector);

  return !isAuth ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};

function App() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/"
          element={
            isAuth ? <Navigate to="/home" /> : <Navigate to="/welcome" />
          }
        />
        <Route
          path="/welcome"
          element={
            <RestrictedRoute redirectTo='/home' component={<WelcomePage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo='/home' component={<SignInPage />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo='/home' component={<SignUpPage />} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo='/welcome' component={<HomePage />} />
          }
        /> 
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
