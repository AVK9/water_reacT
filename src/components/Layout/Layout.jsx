import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Footer from '../Footer/Footer';
import { ContentContainer, MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <ContentContainer>
        <Header />
        <MainContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <Footer />
      </ContentContainer>
    </>
  );
};

export default Layout;
