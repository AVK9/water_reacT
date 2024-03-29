import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { AppWrapper, Background, BackgroundBot } from './App.styled';

import { lazy } from 'react';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  return (
    <AppWrapper>
      <Background>
        <BackgroundBot>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              {/* <Route path="/second" element={<SecondPage />}>
                <Route path=":half" element={<HalfPage />} />
              </Route> */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BackgroundBot>
      </Background>
    </AppWrapper>
  );
}
export default App;
