import { VFC } from "react";
import { Box, Container } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainLayout } from "./MainLayout";
import { Nav } from "./Nav";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl">
        <Header />
        <MainLayout rightComponents={<Nav />}>
          <Box py="40px">{children}</Box>
        </MainLayout>
        <Footer />
      </Container>
    </>
  );
};
