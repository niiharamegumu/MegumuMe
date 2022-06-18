import { memo, VFC } from 'react'
import { Box, Container } from '@chakra-ui/react'

import { Header } from './Header'
import { Footer } from './Footer'
import { MainLayout } from './MainLayout'
import { Nav } from './Nav'

type Props = {
  children: React.ReactNode
}

// eslint-disable-next-line react/display-name
export const Layout: VFC<Props> = memo(props => {
  const { children } = props
  return (
    <>
      <Container maxW="container.xl">
        <Header />
        <MainLayout rightComponents={<Nav />}>
          <Box p={{ base: '40px 0 20px', lg: '40px 0' }}>{children}</Box>
        </MainLayout>
        <Footer />
      </Container>
    </>
  )
})
