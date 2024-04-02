import { Container } from './Section.styled';

export const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
};
