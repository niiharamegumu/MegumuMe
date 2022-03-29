import { memo, VFC } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import { BlogType } from "../../types/blog";
import { TagButton } from "../TagButton";

type Props = {
  link: string;
  title: string;
  createdAt: string;
  isTargetBlank?: boolean;
  tags?: BlogType["tags"];
};

// eslint-disable-next-line react/display-name
export const BlogCard: VFC<Props> = memo((props) => {
  const { link, title, createdAt, isTargetBlank, tags } = props;
  const linkProps = (url: string) => {
    if (url.match("^http")) {
      return {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return {};
  };
  return (
    <Link
      href={link}
      _hover={{ border: "none" }}
      {...(isTargetBlank ? linkProps(link) : {})}
    >
      <Box color="gray.900" p={{ base: 4, md: 6 }}>
        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          fontWeight="bold"
          mb={2}
        >
          {title}
        </Text>
        {tags &&
          tags.map((tag) => <TagButton key={tag.id} tag={tag.tagName} />)}
        <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600" mt={2}>
          {format(new Date(createdAt), "yyyy.MM.dd")}
        </Text>
      </Box>
    </Link>
  );
});
