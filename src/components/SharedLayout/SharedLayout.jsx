import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Footer from '../Footer/Footer';
import { Container, MainContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
};

export default SharedLayout;
