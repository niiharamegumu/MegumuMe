import { memo, VFC } from "react";
import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { BlogType } from "../../types/blog";
import { TagButton } from "../TagButton";

type Props = { blog: BlogType };

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo((props) => {
  const { blog } = props;
  return (
    <Link href={`/blogs/${blog.id}`} _hover={{ border: "none" }}>
      <Stack color="gray.900" p={{ base: 4, md: 6 }} spacing={2}>
        <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="bold">
          {blog.title}
        </Text>
        <Text>
          {blog.tags &&
            blog.tags.map((tag) => (
              <TagButton key={tag.id} tag={tag.tagName} />
            ))}
        </Text>
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
          {format(new Date(blog.updatedAt), "yyyy.MM.dd")}
        </Text>
      </Stack>
    </Link>
  );
});
