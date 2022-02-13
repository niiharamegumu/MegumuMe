import React, { memo, VFC } from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { IoIosArrowDropleft } from "react-icons/io";

import { BlogType } from "../../types/blog";
import { TagButton } from "../TagButton";
import BlogDetailBody from "./BlogDetailBody";

type Props = { blog: BlogType };

const imageOption = "?fm=webp&w=500";

// eslint-disable-next-line react/display-name
export const BlogDetail: VFC<Props> = memo((props) => {
  const { blog } = props;
  return (
    <Box color="gray.900" borderRadius={10} overflow="hidden">
      <Flex>
        <Image
          src={`${blog.mainImage.url}${imageOption}`}
          alt={blog.title}
          objectFit="cover"
          w="100%"
          h={{ base: "180px", sm: "300px", md: "400px" }}
        />
      </Flex>

      <Box bg="gray.300" px={{ base: 4, lg: 20 }} py={14}>
        <Heading fontSize="4xl" fontWeight="bold" mb={4}>
          {blog.title}
        </Heading>
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600" mb={2}>
          {format(new Date(blog.updatedAt), "yyyy.MM.dd")}
        </Text>
        {blog.tags &&
          blog.tags.map((tag) => <TagButton key={tag.id} tag={tag.tagName} />)}
        <BlogDetailBody body={blog.body} />
        <Link
          href="/blogs/"
          display="block"
          color="gray.300"
          bg="gray.900"
          textAlign="center"
          py={4}
          borderRadius={10}
          fontSize="xl"
          fontWeight="bold"
          _hover={{ border: "none" }}
        >
          Blog一覧へ
        </Link>
      </Box>
    </Box>
  );
});
