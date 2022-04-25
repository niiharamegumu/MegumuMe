import { VFC } from 'react'
import Link from 'next/link'
import { Box, chakra, Flex, shouldForwardProp } from '@chakra-ui/react'
import { FaKeyboard } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ChakraMotion = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

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
          <ChakraMotion
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{
              scaleX: [1, 1, 1, 1, 1.2, 1.2],
              scaleY: [0.1, 0.1, 0.1, 0.1, 1, 1]
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
          >
            <FaKeyboard />
          </ChakraMotion>
        </Flex>
      </Link>
    </Box>
  )
}
