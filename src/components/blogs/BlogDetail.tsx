import React, { memo, VFC } from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
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
    <Box color="gray.900" borderRadius={10} overflow="hidden">
      <VisibilitySection delay={0.4}>
        <Flex>
          <Image
            src={`${blog.mainImage.url}${imageOption}`}
            alt={blog.title}
            objectFit="cover"
            w="100%"
            h={{ base: '180px', sm: '300px', md: '400px' }}
          />
        </Flex>
      </VisibilitySection>

      <VisibilitySection
        delay={0.4}
        chakraProps={{
          bg: 'gray.300',
          px: {
            base: 4,
            lg: 20
          },
          py: 14
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', sm: '4xl' }}
          fontWeight="bold"
          lineHeight={1.6}
          mb={4}
        >
          {blog.title}
        </Heading>
        <Text fontSize={{ base: 'xs', sm: 'md' }} color="gray.600" mb={2}>
          {format(new Date(blog.createdAt), 'yyyy.MM.dd')}
        </Text>
        {blog.tags &&
          blog.tags.map(tag => <TagButton key={tag.id} tag={tag.tagName} />)}
        <BlogDetailBody body={blog.body} />
      </VisibilitySection>
    </Box>
  )
})
