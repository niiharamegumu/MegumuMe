import { ReactNode, VFC } from 'react'
import { chakra, ChakraProps, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  delay?: number
  chakraProps?: ChakraProps
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const VisibilitySection: VFC<Props> = props => {
  const { children, delay = 0, chakraProps } = props
  return (
    <ChakraBox
      {...chakraProps}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.8,
        delay,
        type: 'spring'
      }}
    >
      {children}
    </ChakraBox>
  )
}

export default VisibilitySection
