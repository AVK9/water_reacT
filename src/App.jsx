import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from './redux/auth/selectors';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {isAuth ? <Route index element={<HomePage />} /> : <Route index element={<WelcomePage />} />}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
