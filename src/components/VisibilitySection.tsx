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
      initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
      animate={{
        x: ['-50%', '-50%', '-50%', '-50%', '0%'],
        opacity: 1,
        scaleX: [0.0002, 0.0002, 0.0002, 0.0002, 1],
        scaleY: [1, 0.1, 1, 1, 1]
      }}
      exit={{ opacity: 0, x: -200 }}
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
