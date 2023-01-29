import { VFC } from 'react'
import { useRouter } from 'next/router'
import { Flex, Link } from '@chakra-ui/react'
import { routePath } from '../../utils/routePath'

const BlogsNav: VFC = () => {
  const router = useRouter()
  const activePage = router.asPath
  const styles = { color: 'gray.500' }
  const activeStyles = {
    fontWeight: 'bold',
    borderBottom: '2px solid',
    borderColor: 'white',
    color: 'white'
  }
  const isActivePageRegex = (path: string): boolean => {
    const regex = new RegExp(path, 'g')
    return regex.test(activePage)
  }

  return (
    <Flex
      alignItems="center"
      gap={4}
      py={6}
      fontSize={{ base: 'md', lg: 'xl' }}
    >
      <Link
        href={routePath.blogs.index}
        _hover={{ textDecoration: 'none' }}
        {...(isActivePageRegex('^/blogs/[0-9]*$') ? activeStyles : styles)}
      >
        megumu.me
      </Link>
      <Link
        href={routePath.blogs.zenn}
        _hover={{ textDecoration: 'none' }}
        {...(isActivePageRegex('^/blogs/zenn') ? activeStyles : styles)}
      >
        zenn.dev
      </Link>
      <Link
        href={routePath.blogs.note}
        _hover={{ textDecoration: 'none' }}
        {...(isActivePageRegex('^/blogs/notes/[0-9]*$')
          ? activeStyles
          : styles)}
      >
        note.com
      </Link>
    </Flex>
  )
}

export default BlogsNav
