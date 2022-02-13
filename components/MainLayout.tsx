import { VFC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  rightComponents?: React.ReactNode;
};

export const MainLayout: VFC<Props> = (props) => {
  const { children, rightComponents } = props;
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "4fr auto" }}
      alignItems="start"
      gap={6}
      mb={{ base: 2, md: 6, lg: 0 }}
    >
      <GridItem>{children}</GridItem>
      <GridItem
        position={{ base: "fixed", lg: "sticky" }}
        top={{ lg: 10 }}
        bottom={{ base: 0, lg: "unset" }}
        left={0}
        right={0}
        py={{ base: 3, lg: 0 }}
        w={{ base: "100%", lg: "auto" }}
        bg={{ base: "rgba(203,213,224, 0.5)", lg: "transparent" }}
        backdropFilter={{ base: "blur(3px)", lg: "blur(0px)" }}
      >
        {rightComponents}
      </GridItem>
    </Grid>
  );
};
