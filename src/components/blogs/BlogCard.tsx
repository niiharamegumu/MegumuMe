import { memo, VFC } from 'react'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { MdUpdate } from 'react-icons/md'

import { BlogType } from '../../types/blog'
import { TagButton } from '../TagButton'

type Props = {
  link: string
  title: string
  createdAt: string
  updatedAt?: string | null
  isBlank?: boolean
  tags?: BlogType['tags']
}

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo(props => {
  const { link, title, createdAt, updatedAt, isBlank, tags } = props

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
        <Flex gap={4} mt={2}>
          <Text as="time" fontSize={{ base: 'xs', sm: 'md' }}>
            {format(new Date(createdAt), 'yyyy.MM.dd')}
          </Text>
          {updatedAt && (
            <Flex
              as="time"
              fontSize={{ base: 'xs', sm: 'md' }}
              alignItems="center"
              gap={1}
            >
              <MdUpdate />
              {format(new Date(updatedAt), 'yyyy.MM.dd')}
            </Flex>
          )}
        </Flex>
      </Box>
    </Link>
  )
})
