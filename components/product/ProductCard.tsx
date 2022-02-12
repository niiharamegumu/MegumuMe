import { Flex, Image, Stack, Text, Box, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
};

const imageOption = "?fm=webp&w=500";

// eslint-disable-next-line react/display-name
export const ProductCard: VFC<Props> = memo((props) => {
  const { product } = props;
  return (
    <Box
      position="relative"
      border="1px"
      borderColor="gray.300"
      borderRadius={10}
      overflow="hidden"
    >
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
          objectFit="cover"
          src={`${product["main-image"].url}${imageOption}`}
          alt={product.title}
        />
      </Flex>
      <Stack p={4} bg="gray.300" color="gray.900" spacing={1}>
        <Text fontSize="lg">{product.title}</Text>
        <Text fontSize="md">{product.sumally}</Text>
        <Text fontSize="sm" color="gray.600">
          {product.skills.join(" / ")}
        </Text>
      </Stack>
    </Box>
  );
});
