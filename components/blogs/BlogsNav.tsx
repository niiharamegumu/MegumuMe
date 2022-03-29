import { VFC } from "react";
import { useRouter } from "next/router";
import { Flex, Link } from "@chakra-ui/react";

const BlogsNav: VFC = () => {
  const router = useRouter();
  const activePage = router.pathname.concat("/") as string;
  const styles = { color: "gray.500" };
  const activeStyles = {
    fontWeight: "bold",
    borderBottom: "2px solid",
    borderColor: "white",
    color: "white",
  };

  const isActivePage = (path: string): boolean => path === activePage;

  return (
    <Flex
      alignItems="center"
      gap={{ base: 8, md: 4 }}
      py={6}
      fontSize={{ base: "md", lg: "xl" }}
    >
      <Link
        href="/blogs/"
        _hover={{ textDecoration: "none" }}
        {...(isActivePage("/blogs/") ? activeStyles : styles)}
      >
        megumu.me
      </Link>
      <Link
        href="/blogs/notes/"
        _hover={{ textDecoration: "none" }}
        {...(isActivePage("/blogs/notes/") ? activeStyles : styles)}
      >
        note.com
      </Link>
    </Flex>
  );
};

export default BlogsNav;
