import { VFC } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

export const HeadH2: VFC<HeadingProps> = (props) => {
  const { children } = props;
  return (
    <Heading
      as="h2"
      textTransform="uppercase"
      fontSize="4xl"
      pb={{ base: 2, md: 4 }}
      {...props}
    >
      {children}
    </Heading>
  );
};
export const HeadH3: VFC<HeadingProps> = (props) => {
  const { children } = props;
  return (
    <Heading as="h3" fontSize="xl" pb={{ base: 2, md: 4 }} {...props}>
      {children}
    </Heading>
  );
};
