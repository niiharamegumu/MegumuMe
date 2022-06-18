import { VFC } from 'react'
import { Box, Text, Flex, Link } from '@chakra-ui/react'
import { routePath } from '../utils/routePath'

export const Footer: VFC = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.600"
      color="gray.400"
      // display={{ base: "none", lg: "block" }}
      textAlign="center"
      py={4}
      pb={{ base: '108px', lg: 4 }}
    >
      <Flex
        as="nav"
        fontSize="sm"
        flexDirection={{ base: 'row', lg: 'column' }}
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Link href={routePath.privacy}>Privacy Policy</Link>
        <Text as="small">&copy; 2022 by niihara megumu.</Text>
      </Flex>
    </Box>
  )
}
