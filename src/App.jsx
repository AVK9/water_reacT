import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Background, BackgroundBot } from './App.styled';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  return (
    <Background>
      <BackgroundBot>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/second" element={<SecondPage />}>
                <Route path=":half" element={<HalfPage />} />
              </Route> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BackgroundBot>
    </Background>
  );
}
export default App;
