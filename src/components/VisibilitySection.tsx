import { memo, ReactNode, VFC } from 'react'
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

// eslint-disable-next-line react/display-name
const VisibilitySection: VFC<Props> = memo(props => {
  const { children, delay = 0, chakraProps } = props
  return (
    <ChakraBox
      {...chakraProps}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: [0, 1, 1], y: 0 }}
      exit={{ opacity: 0, y: 100 }}
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
})

export default VisibilitySection
