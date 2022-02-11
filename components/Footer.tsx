import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.600"
      color="gray.400"
      textAlign="center"
      py={4}
    >
      &copy; 2022 by niihara megumu.
    </Box>
  );
};
