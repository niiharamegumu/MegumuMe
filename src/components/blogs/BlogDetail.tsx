import React, { memo, VFC } from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { BlogType } from '../../types/blog'
import { TagButton } from '../TagButton'
import BlogDetailBody from './BlogDetailBody'
import VisibilitySection from '../VisibilitySection'

type Props = { blog: BlogType }

const imageOption = '?fm=webp&w=200&q=40&dpr=5'

// eslint-disable-next-line react/display-name
export const BlogDetail: VFC<Props> = memo(props => {
  const { blog } = props
  return (
    <VisibilitySection delay={0.4} chakraProps={{}}>
      <Flex>
        <Image
          src={`${blog.mainImage.url}${imageOption}`}
          alt={blog.title}
          objectFit="cover"
          w="100%"
          h={{ base: '180px', sm: '300px' }}
        />
      </Flex>

      <Box pt={14} pb={{ base: 0, sm: 4 }}>
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '2xl', sm: '3xl' }}
          fontWeight="bold"
          lineHeight={1.4}
          mb={4}
        >
          {blog.title}
        </Heading>
        <Text fontSize={{ base: 'xs', sm: 'md' }} mb={4} color="white">
          {format(new Date(blog.createdAt), 'yyyy.MM.dd')}
        </Text>
        <Box mb={{ base: 6, sm: 12 }}>
          {blog.tags &&
            blog.tags.map(tag => <TagButton key={tag.id} tag={tag.tagName} />)}
        </Box>
        <BlogDetailBody body={blog.body} />
      </Box>
    </VisibilitySection>
  )
})
