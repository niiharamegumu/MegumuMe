import { memo, VFC } from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name
export const HeadH2: VFC<HeadingProps> = memo(props => {
  const { children } = props
  return (
    <Heading
      as="h2"
      textTransform="uppercase"
      fontSize="4xl"
      pb={{ base: 2, md: 4 }}
      {...props}
    >
      {children}
    </Heading>
  )
})

// eslint-disable-next-line react/display-name
export const HeadH3: VFC<HeadingProps> = memo(props => {
  const { children } = props
  return (
    <Heading as="h3" fontSize="xl" pb={{ base: 2, md: 4 }} {...props}>
      {children}
    </Heading>
  )
})
