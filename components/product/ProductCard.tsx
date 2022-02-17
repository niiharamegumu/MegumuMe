import { memo, VFC } from "react";
import { Flex, Image, Stack, Text, Box, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { ProductType } from "../../types/product";
import { TagButton } from "../TagButton";

type Props = {
  product: ProductType;
};

const imageOption = "?fm=webp&w=200&q=30&dpr=4";

// eslint-disable-next-line react/display-name
export const ProductCard: VFC<Props> = memo((props) => {
  const { product } = props;
  return (
    <Box position="relative">
      {product.url && (
        <Link
          href={product.url}
          isExternal
          position="absolute"
          top={2}
          right={2}
          bg="gray.300"
          p={1}
          borderRadius={4}
          color="gray.900"
        >
          <FaExternalLinkAlt fontSize="20px" />
        </Link>
      )}
      <Flex>
        <Image
          w="100%"
          h={{ base: "200px", md: "300px", lg: "280px" }}
          objectFit="cover"
          src={`${product.mainImage.url}${imageOption}`}
          alt={product.title}
        />
      </Flex>
      <Box p={4} color="gray.900">
        <Text fontSize="xl" mb={2}>
          {product.title}
        </Text>
        <Text fontSize="md" mb={2}>
          {product.sumally}
        </Text>
        <Text>
          {product.skills &&
            product.skills.map((skill) => (
              <TagButton key={skill} tag={skill} />
            ))}
        </Text>
      </Box>
    </Box>
  );
});
