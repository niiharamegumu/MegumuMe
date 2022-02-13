import { VFC } from "react";
import { AiFillTag } from "react-icons/ai";
import { Tag, TagLabel } from "@chakra-ui/react";

type Props = {
  tag: string;
};

export const TagButton: VFC<Props> = (props) => {
  const { tag } = props;
  return (
    <Tag variant="outline" colorScheme="teal" mr={2} mb={2}>
      <AiFillTag />
      <TagLabel>{tag}</TagLabel>
    </Tag>
  );
};
