import { memo, VFC } from 'react'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { BlogType } from '../../types/blog'
import { TagButton } from '../TagButton'

type Props = {
  link: string
  title: string
  createdAt: string
  isBlank?: boolean
  tags?: BlogType['tags']
}

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo(props => {
  const { link, title, createdAt, isBlank, tags } = props

  return (
    <Link href={link} _hover={{ border: 'none' }} isExternal={isBlank}>
      <Box py={{ base: 4, md: 6 }}>
        <Heading
          as="h3"
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
          fontWeight="bold"
          lineHeight={{ base: 1.8, md: 1.6 }}
          mb={2}
        >
          {title}
        </Heading>
        {tags && tags.map(tag => <TagButton key={tag.id} tag={tag.tagName} />)}
        <Text
          as="time"
          display="block"
          fontSize={{ base: 'xs', sm: 'md' }}
          mt={2}
        >
          {format(new Date(createdAt), 'yyyy.MM.dd')}
        </Text>
      </Box>
    </Link>
  )
})
