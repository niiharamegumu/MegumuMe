import { memo, VFC } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  body: string
}

// eslint-disable-next-line react/display-name
const BlogDetailBody: VFC<Props> = memo(props => {
  const { body } = props
  const color = 'white'
  return (
    <Box
      mt={4}
      sx={{
        '*': {
          mb: 4,
          listStyle: 'none'
        },
        h1: {
          fontWeight: 'bold',
          color: color,
          base: { fontSize: '2xl' },
          sm: { fontSize: '3xl' },
          mt: { base: 6, sm: 10, md: 12 }
        },
        h2: {
          fontSize: 'xl',
          fontWeight: 'bold',
          color: color,
          mt: { base: 8, sm: 10, md: 12 }
        },
        h3: {
          fontSize: 'xl',
          fontWeight: 'bold',
          color: color,
          mt: 4
        },
        h4: {
          fontWeight: 'bold',
          color: color,
          base: { fontSize: 'md' },
          sm: { fontSize: 'lg' },
          mt: 4
        },
        h5: {
          fontSize: 'md',
          fontWeight: 'bold',
          color: color,
          mt: 4
        },
        p: {
          fontSize: { base: 'sm', sm: 'md' },
          color: color,
          lineHeight: '1.8'
        },
        blockquote: {
          borderLeft: '3px solid',
          borderColor: 'gray.500',
          pl: 4,
          color: color
        },
        a: {
          fontWeight: 'bold',
          color: 'purple.400',
          textDecoration: 'underline'
        },
        li: {
          mb: 2,
          color: color
        },
        'pre code': {
          borderRadius: 10,
          overflow: 'scroll',
          backgroundColor: 'gray.700',
          fontSize: { base: 'xs', sm: 'sm' }
        },
        img: {
          w: '100%',
          h: { base: 200, sm: 300, md: 400 },
          objectFit: 'cover',
          borderRadius: 10
        }
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Box>
  )
})
export default BlogDetailBody
