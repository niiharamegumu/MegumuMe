import React, { VFC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FcDocument } from 'react-icons/fc'

import Seo from '../../components/Seo'
import { HeadH2, HeadH3 } from '../../components/style/Common'
import VisibilitySection from '../../components/VisibilitySection'

const Privacy: VFC = () => {
  return (
    <>
      <Seo
        pageTitle="Privacy Policy"
        pageDescription="プライバシーポリシー"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcDocument />
        privacy policy
      </HeadH2>
      <VisibilitySection
        delay={0.4}
        chakraProps={{
          borderRadius: 10,
          py: { base: 4, md: 6 }
        }}
      >
        <HeadH3>個人情報の利用目的</HeadH3>
        <Text as="p">
          当ブログでは、お問い合わせフォームからのお問い合わせ時にお名前・メールアドレスの個人情報のご記入を必須とさせていただいております。
          <br />
          取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
        </Text>
        <HeadH3 mt={8}>免責事項</HeadH3>
        <Text as="p">
          当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          <br />
          また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          <br />
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </Text>
        <HeadH3 mt={8}>著作権について</HeadH3>
        <Text as="p">
          当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
          <br />
          当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
        </Text>
        <HeadH3 mt={8}>リンクについて</HeadH3>
        <Text as="p">
          当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
          <br />
          ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
        </Text>
      </VisibilitySection>
    </>
  )
}

export default Privacy
