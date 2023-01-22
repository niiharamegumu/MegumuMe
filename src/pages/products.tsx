import { GetStaticProps } from 'next'
import { useEffect, VFC } from 'react'
import useSWR from 'swr'
import { FcServices } from 'react-icons/fc'

import Seo from '../components/Seo'
import { clientProducts } from '../libs/microCMS/client'
import { ProductType } from '../types/product'
import { Grid, GridItem } from '@chakra-ui/react'
import { ProductCard } from '../components/product/ProductCard'
import { HeadH2 } from '../components/style/Common'
import VisibilitySection from '../components/VisibilitySection'

type Props = {
  staticProducts: ProductType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data: { contents: ProductType[] } = await clientProducts.get({
    endpoint: 'products'
  })
  return {
    props: {
      staticProducts: data.contents
    },
    revalidate: 86400 * 3
  }
}

const ProductsList: VFC<Props> = props => {
  const { staticProducts } = props
  const fetcher = (): Promise<ProductType[]> =>
    clientProducts.get({ endpoint: 'products' }).then(data => data.contents)
  const {
    data: products,
    error,
    mutate
  } = useSWR<ProductType[]>('products', fetcher, {
    fallbackData: staticProducts
  })

  useEffect(() => {
    mutate()
  }, [mutate])

  if (error) {
    return <div>failed to load.</div>
  }

  return (
    <>
      <Seo
        pageTitle="Products"
        pageDescription="これまでに制作した作品の一覧です。"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcServices />
        products
      </HeadH2>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }} gap={6}>
        {products?.map(product => (
          <VisibilitySection
            delay={0.15}
            key={product.id}
            chakraProps={{
              mb: 0
            }}
          >
            <ProductCard product={product} />
          </VisibilitySection>
        ))}
      </Grid>
    </>
  )
}
export default ProductsList
