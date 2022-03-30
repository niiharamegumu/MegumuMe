import { VFC } from "react";
import { Box } from "@chakra-ui/react";

export const Footer: VFC = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.600"
      color="gray.400"
      display={{ base: "none", lg: "block" }}
      textAlign="center"
      py={4}
    >
      &copy; 2022 by niihara megumu.
    </Box>
  );
};
