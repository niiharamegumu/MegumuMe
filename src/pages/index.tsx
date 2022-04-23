import type { NextPage } from 'next'
import {
  Accordion,
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Text
} from '@chakra-ui/react'
import { FcIdea, FcCommandLine, FcBusinessman } from 'react-icons/fc'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiPhp,
  SiNextdotjs,
  SiJquery,
  SiPython,
  SiShopify,
  SiNuxtdotjs,
  SiFirebase
} from 'react-icons/si'

import Seo from '../components/Seo'
import { HeadH2, HeadH3 } from '../components/style/Common'
import { AccordionContent } from '../components/AccordionContent'
import VisibilitySection from '../components/VisibilitySection'

const Home: NextPage = () => {
  return (
    <>
      <Seo
        pageTitle="About Me"
        pageDescription="宮崎生まれ、宮崎育ち。フロントエンドを主にしている地方在住エンジニア。独学で日々学んでいます。"
        pageImg="https://megumu.me/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <VisibilitySection delay={0.4} chakraProps={{ mb: 10 }}>
        <HeadH2 display="flex" alignItems="center" gap={2}>
          <FcIdea />
          about
        </HeadH2>
        <Box
          as="section"
          bg="gray.300"
          color="gray.900"
          borderRadius={10}
          p={{ base: 4, md: 6 }}
        >
          <HeadH3>Gumu（Niihara Megumu）</HeadH3>
          <Text fontSize="sm" as="p" mb={2}>
            1996.12.23 25 years old.
          </Text>
          <Text fontSize="sm" as="p" mb={2}>
            宮崎生まれ、宮崎育ち
            <br />
            フロントエンドを主にしている地方在住エンジニア。
            <br />
            独学で日々学んでいます。
          </Text>
          <Text fontSize="sm" as="p">
            宮崎でずっと生きていく手段を模索中・・・
          </Text>
        </Box>
      </VisibilitySection>

      <VisibilitySection delay={0.6} chakraProps={{ mb: 10 }}>
        <HeadH2 display="flex" alignItems="center" gap={2}>
          <FcCommandLine />
          Skills
        </HeadH2>
        <Grid
          templateColumns={{ base: 'repeat(2,1fr)', sm: 'repeat(4,1fr)' }}
          gap={4}
          alignItems="center"
        >
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="orange.500"
              flexDirection="column"
            >
              <AiFillHtml5 />
              <Text fontSize="sm">HTML</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="blue.500"
              flexDirection="column"
            >
              <FaCss3Alt />
              <Text fontSize="sm">CSS</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="yellow.500"
              flexDirection="column"
            >
              <IoLogoJavascript />
              <Text fontSize="sm">JaveScript</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={70}
              color="purple.500"
              flexDirection="column"
            >
              <SiPhp />
              <Text fontSize="sm">PHP</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="cyan.500"
              flexDirection="column"
            >
              <FaReact />
              <Text fontSize="sm">React</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="gray.800"
              flexDirection="column"
            >
              <SiNextdotjs />
              <Text fontSize="sm">Next.js</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="blue.600"
              flexDirection="column"
            >
              <SiJquery />
              <Text fontSize="sm">jQuery</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="green.600"
              flexDirection="column"
            >
              <FaVuejs />
              <Text fontSize="sm">Vue.js</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="green.700"
              flexDirection="column"
            >
              <SiNuxtdotjs />
              <Text fontSize="sm">Nuxt.js</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="blue.600"
              flexDirection="column"
            >
              <SiPython />
              <Text fontSize="sm">Python</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="green.400"
              flexDirection="column"
            >
              <SiShopify />
              <Text fontSize="sm">Shopify</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg="gray.300"
              h="130px"
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              fontSize={60}
              color="orange.400"
              flexDirection="column"
            >
              <SiFirebase />
              <Text fontSize="sm">Firebase</Text>
            </Flex>
          </GridItem>
        </Grid>
      </VisibilitySection>

      <VisibilitySection delay={0.8} chakraProps={{ mb: 0 }}>
        <HeadH2 display="flex" alignItems="center" gap={2}>
          <FcBusinessman />
          Career
        </HeadH2>
        <Accordion allowToggle>
          <AccordionContent title="2020年12月 株式会社Libertyship 現在">
            前職で魅力を感じたフロントエンドのお仕事をすべくアラタナ時代のご縁があり株式会社Libertyshipへジョイン。
            <br />
            年間10件以上のサイトのメイン開発兼プロジェクトマネジメントを行い
            <Link
              fontWeight="bold"
              href="https://community.shopify.com/c/%E7%B7%8F%E5%90%88%E7%9A%84%E3%81%AA%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3/%E6%97%A5%E6%9C%AC%E3%81%AEshopify-experts%E3%81%A8shopify-plus-partners%E3%81%AE%E4%B8%80%E8%A6%A7/td-p/722989"
              target="_blank"
              rel="noopener noreferrer"
            >
              ShopifyExpert
            </Link>
            の一員として、Shopifyのサービスを活用したECサイトの開発・運用を行う。
            <br />
            直近では、自社サービス内において、サウナ施設の予約システム・ロケーション管理システムをShopifyAppを使用して構築する。
          </AccordionContent>
          <AccordionContent title="2020年04月 株式会社ZOZOテクノロジーズへ合併">
            株式会社アラタナが株式会社ZOZOテクノロジーズへ吸収合併。
            <br />
            合併後も変わらずアラタナの頃の開発を行う。
            <br />
            データ管理ダッシュボードの開発のサポートを行った際にフロントエンドの楽しさに気づく。
            <br />
            一身上の都合により退社（健康上の都合）
          </AccordionContent>
          <AccordionContent title="2019年04月 株式会社アラタナ 新卒入社">
            株式会社アラタナ 新卒入社
            <br />
            配属は、バックエンドエンジニア。AWS・Pythonを使用しAPIの開発、データ連携周りの保守や管理を行う。
            <br />
            PagerDuty、DataDog、Lambda、Cloud Watch
            Logs、SNS、S3を活用し、エラー監視ツールの強化開発を行う。
          </AccordionContent>
          <AccordionContent title="2019年03月 宮崎大学 卒業">
            宮崎大学 教育文化学部 人間社会課程
            社会システムコースにて、経済学、法学などを学ぶ。
            <br />
            専攻は経済学。
            <br />
            産業革命の歴史、経済を勉強しているときにパソコンの経済を知る。
            <br />
            これからの時代は、「パソコンだ！」と感じ、本屋さんでHTML,CSSの本を買い独学を開始。
            <br />
            基本的なWebページを作成しながら傍らWeb系企業の就職活動を開始。
          </AccordionContent>
        </Accordion>
      </VisibilitySection>
    </>
  )
}

export default Home
