import { memo, VFC } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  body: string
}

// eslint-disable-next-line react/display-name
const BlogDetailBody: VFC<Props> = memo(props => {
  const { body } = props
  const color = 'gray.900'
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
          sm: { fontSize: '3xl' }
        },
        h2: {
          fontSize: '2xl',
          fontWeight: 'bold',
          color: color
        },
        h3: {
          fontSize: 'xl',
          fontWeight: 'bold',
          color: color
        },
        h4: {
          fontWeight: 'bold',
          color: color,
          base: { fontSize: 'md' },
          sm: { fontSize: 'lg' }
        },
        h5: {
          fontSize: 'md',
          fontWeight: 'bold',
          color: color
        },
        p: { fontSize: 'md', color: color, lineHeight: '1.8' },
        blockquote: {
          borderLeft: '3px solid',
          borderColor: 'gray.500',
          pl: 4,
          color: 'gray.500'
        },
        a: {
          fontWeight: 'bold',
          color: color
        },
        li: {
          mb: 2,
          color: color
        },
        'pre code': {
          borderRadius: 10,
          overflow: 'scroll'
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
