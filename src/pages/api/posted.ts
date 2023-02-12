import { NextApiRequest, NextApiResponse } from 'next'
import { isCollectSignature } from './lib/crypto'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!isCollectSignature(req.headers['x-microcms-signature'], req)) {
      return res.status(401).send('Invalid token')
    }

    const articleId = req.body.contents.new.publishValue.id
    await res.revalidate(`/article/${articleId}`)
    return res.status(200)
  } catch (err) {
    console.log(err)
    console.log(req)
    return res.status(500).send(err)
  }
}
