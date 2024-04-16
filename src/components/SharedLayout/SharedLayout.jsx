import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Footer from '../Footer/Footer';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Content, MainContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Content>
      <Header />
      <LanguageSwitcher />
      <MainContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </Content>
  );
};

export default SharedLayout;
