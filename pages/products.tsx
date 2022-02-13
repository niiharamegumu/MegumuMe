import { GetStaticProps } from "next";
import { useEffect, VFC } from "react";
import useSWR from "swr";
import { FcServices } from "react-icons/fc";

import { clientProducts } from "../libs/microCMS/client";
import { ProductType } from "../types/product";
import { Nav } from "../components/Nav";
import { MainLayout } from "../components/MainLayout";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "../components/product/ProductCard";
import { HeadH2 } from "../components/style/Common";

type Props = {
  staticProducts: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await clientProducts.get({ endpoint: "products" });
  return {
    props: {
      staticProducts: data.contents,
    },
    revalidate: 30,
  };
};

const ProductsList: VFC<Props> = (props) => {
  const { staticProducts } = props;
  const fetcher = () =>
    clientProducts.get({ endpoint: "products" }).then((data) => data.contents);
  const {
    data: products,
    error,
    mutate,
  } = useSWR<ProductType[]>("products", fetcher, {
    fallbackData: staticProducts,
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (error) {
    return (
      <MainLayout rightComponents={<Nav />}>
        <div>failed to load.</div>;
      </MainLayout>
    );
  }

  return (
    <MainLayout rightComponents={<Nav />}>
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcServices />
        products
      </HeadH2>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={6}>
        {products?.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </MainLayout>
  );
};
export default ProductsList;
