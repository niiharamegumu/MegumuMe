import { VFC } from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { FcHome, FcServices, FcReading, FcFeedback } from 'react-icons/fc'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

import { NavLink } from '../components/NavLink'
import { routePath } from '../utils/routePath'

export const Nav: VFC = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(auto-fit,40px)',
        md: 'repeat(auto-fit,80px)',
        lg: 'repeat(3,80px)'
      }}
      gap={2}
      justifyContent={{ base: 'center', lg: 'end' }}
    >
      <GridItem>
        <NavLink path={routePath.top} ariaLabel="Home Page">
          <Box fontSize={{ base: '30px', md: '40px' }}>
            <FcHome />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path={routePath.products} ariaLabel="Product Lisst">
          <Box fontSize={{ base: '30px', md: '40px' }}>
            <FcServices />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path={routePath.blogs.index} ariaLabel="Blog List">
          <Box fontSize={{ base: '30px', md: '40px' }}>
            <FcReading />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path={routePath.contact} ariaLabel="Contact">
          <Box fontSize={{ base: '30px', md: '40px' }}>
            <FcFeedback />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink
          path="https://github.com/niiharamegumu"
          isBlank={true}
          ariaLabel="To Github"
        >
          <Box fontSize={{ base: '30px', md: '40px' }}>
            <AiFillGithub />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink
          path="https://twitter.com/megumu_me"
          isBlank={true}
          ariaLabel="To Twitter"
        >
          <Box fontSize={{ base: '30px', md: '40px' }} color="blue.500">
            <AiOutlineTwitter />
          </Box>
        </NavLink>
      </GridItem>
    </Grid>
  )
}
