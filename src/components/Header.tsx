import { VFC } from "react";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import { FaKeyboard } from "react-icons/fa";

export const Header: VFC = () => {
  return (
    <Box as="header" pt={8}>
      <Link href="/" passHref>
        <Flex
          cursor="pointer"
          bg="white"
          w="60px"
          h="60px"
          borderRadius="50%"
          color="gray.900"
          justify="center"
          alignItems="center"
          fontWeight="bold"
          flexDirection="column"
        >
          MgM
          <FaKeyboard />
        </Flex>
      </Link>
    </Box>
  );
};
