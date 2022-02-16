import { VFC } from "react";
import { Flex, Link } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  path: string;
  isBlank?: boolean;
};

export const NavLink: VFC<Props> = (props) => {
  const { children, path, isBlank = false } = props;
  return (
    <Link href={path} isExternal={isBlank}>
      <Flex
        bg="gray.700"
        justify="center"
        alignItems="center"
        w={{ base: "50px", md: "80px" }}
        h={{ base: "50px", md: "80px" }}
        textTransform="uppercase"
        borderRadius={10}
      >
        {children}
      </Flex>
    </Link>
  );
};
