import { memo, VFC } from 'react'
import { AiFillTag } from 'react-icons/ai'
import { Flex, Tag, TagLabel } from '@chakra-ui/react'

type Props = {
  tag: string
}

// eslint-disable-next-line react/display-name
export const TagButton: VFC<Props> = memo(props => {
  const { tag } = props
  return (
    <Tag
      variant="outline"
      colorScheme="teal"
      mr="2px"
      mb="2px"
      fontSize={{ base: 'xs', sm: 'sm' }}
    >
      <Flex justify="center" alignItems="center" gap="2px">
        <AiFillTag />
        <TagLabel>{tag}</TagLabel>
      </Flex>
    </Tag>
  )
})
