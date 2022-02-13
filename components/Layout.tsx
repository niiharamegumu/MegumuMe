import { VFC } from "react";
import { Box, Container } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl">
        <Header />
        <Box py="40px">{children}</Box>
        <Footer />
      </Container>
    </>
  );
};
