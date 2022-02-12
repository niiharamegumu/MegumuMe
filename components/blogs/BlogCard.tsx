import { memo, VFC } from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { BlogType } from "../../types/blog";

type Props = { blog: BlogType };

const imageOption = "?fm=webp&w=500";

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo((props) => {
  const { blog } = props;
  return (
    <Flex borderRadius={10} overflow="hidden" bg="gray.300" alignItems="center">
      <Image
        src={`${blog.mainImage.url}${imageOption}`}
        alt={blog.title}
        objectFit="cover"
        w={{ base: "42vw", lg: "25vw" }}
        h={{ base: "140px", sm: "220px" }}
      />
      <Box color="gray.900" p={{ base: 2, md: 4 }}>
        <Text fontSize={{ base: "sm", sm: "lg", md: "xl" }} fontWeight="bold">
          {blog.title}
        </Text>
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
          {format(new Date(blog.updatedAt), "yyyy.MM.dd")}
        </Text>
      </Box>
    </Flex>
  );
});
