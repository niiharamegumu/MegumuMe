import { memo, VFC } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { BlogType } from "../../types/blog";
import { TagButton } from "../TagButton";

type Props = { blog: BlogType };

const imageOption = "?fm=webp&w=500";

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo((props) => {
  const { blog } = props;
  return (
    <Link href={`/blogs/${blog.id}`} _hover={{ border: "none" }}>
      <Box color="gray.900" p={{ base: 2, md: 4 }}>
        <Text
          fontSize={{ base: "sm", sm: "lg", md: "xl" }}
          fontWeight="bold"
          mb={1}
        >
          {blog.title}
        </Text>
        {blog.tags &&
          blog.tags.map((tag) => <TagButton key={tag.id} tag={tag.tagName} />)}
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
          {format(new Date(blog.updatedAt), "yyyy.MM.dd")}
        </Text>
      </Box>
    </Link>
  );
});
