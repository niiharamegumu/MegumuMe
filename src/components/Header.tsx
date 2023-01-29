import { VFC } from 'react'
import Link from 'next/link'
import { Box, chakra, Flex, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { routePath } from '../utils/routePath'

const ChakraMotion = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Header: VFC = () => {
  return (
    <Box as="header" py={8}>
      <Link href={routePath.top} passHref>
        <Flex
          bgGradient="linear(to-br, #6139FD, #974FFE, #C260FE)"
          cursor="pointer"
          w="60px"
          h="60px"
          borderRadius="50%"
          color="white"
          justify="center"
          alignItems="center"
          fontWeight="bold"
          flexDirection="column"
        >
          <ChakraMotion
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-12, 0, 8] }}
            exit={{ opacity: 0, y: -12 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 2.3,
              delay: 0.4,
              repeat: Infinity
            }}
          >
            Megu
          </ChakraMotion>
        </Flex>
      </Link>
    </Box>
  )
}
