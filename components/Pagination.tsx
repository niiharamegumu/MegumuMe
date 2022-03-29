import { Flex, Link } from "@chakra-ui/react";
import { VFC } from "react";
import { FcUndo, FcRedo } from "react-icons/fc";

type Props = {
  pagePath: string;
  currentPagination: number;
  isLastPage: boolean;
};

const Pagination: VFC<Props> = (props) => {
  const { pagePath, currentPagination, isLastPage } = props;
  const prePage = currentPagination - 1;
  const nextPage = currentPagination + 1;

  return (
    <Flex
      fontSize="40px"
      justify={prePage <= 0 ? "flex-end" : "space-between"}
      pt={6}
    >
      <Link
        href={`${pagePath}${prePage}`}
        display={prePage <= 0 ? "none" : "block"}
      >
        <FcUndo />
      </Link>
      <Link
        href={`${pagePath}${nextPage}`}
        display={isLastPage ? "none" : "block"}
      >
        <FcRedo />
      </Link>
    </Flex>
  );
};

export default Pagination;
