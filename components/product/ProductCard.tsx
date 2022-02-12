import { Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
};

const imageOption = "?fm=webp&w=500";

// eslint-disable-next-line react/display-name
export const ProductCard: VFC<Props> = memo((props) => {
  const { product } = props;
  return (
    <Box>
      <Flex bg="gray.700" borderTopRadius={10}>
        <Image
          w="100%"
          objectFit="cover"
          borderTopRadius={10}
          src={`${product["main-image"].url}${imageOption}`}
          alt={product.title}
        />
      </Flex>
      <Stack
        p={4}
        bg="gray.300"
        color="gray.900"
        spacing={1}
        borderBottomRadius={10}
      >
        <Text fontSize="lg">{product.title}</Text>
        <Text fontSize="md">{product.sumally}</Text>
        <Text fontSize="sm" color="gray.600">
          {product.skills.join(" / ")}
        </Text>
      </Stack>
    </Box>
  );
});
