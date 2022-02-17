import { memo, VFC } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { BlogType } from "../../types/blog";
import { TagButton } from "../TagButton";

type Props = { blog: BlogType };

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo((props) => {
  const { blog } = props;
  return (
    <Link href={`/blogs/${blog.id}`} _hover={{ border: "none" }}>
      <Box color="gray.900" p={{ base: 4, md: 6 }}>
        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          fontWeight="bold"
          mb={2}
        >
          {blog.title}
        </Text>
        <Text mb={1}>
          {blog.tags &&
            blog.tags.map((tag) => (
              <TagButton key={tag.id} tag={tag.tagName} />
            ))}
        </Text>
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
          {format(new Date(blog.createdAt), "yyyy.MM.dd")}
        </Text>
      </Box>
    </Link>
  );
});
