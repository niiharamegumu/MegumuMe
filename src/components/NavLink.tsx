import { memo, VFC } from 'react'
import { Flex, Link } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  path: string
  isBlank?: boolean
  ariaLabel?: string
}

// eslint-disable-next-line react/display-name
export const NavLink: VFC<Props> = memo(props => {
  const { children, path, isBlank = false, ariaLabel } = props
  return (
    <Link href={path} isExternal={isBlank} aria-label={ariaLabel}>
      <Flex
        bg="gray.700"
        justify="center"
        alignItems="center"
        w={{ base: '40px', md: '80px' }}
        h={{ base: '40px', md: '80px' }}
        textTransform="uppercase"
        borderRadius={10}
      >
        {children}
      </Flex>
    </Link>
  )
})
