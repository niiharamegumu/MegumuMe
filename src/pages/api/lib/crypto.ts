import * as crypto from 'crypto'
import { NextApiRequest } from 'next'

export const isCollectSignature = (
  signature: string | string[] | undefined,
  req: NextApiRequest
): boolean => {
  if (!signature || Array.isArray(signature)) return false

  const expectedSignature = crypto
    .createHmac('sha256', process.env.X_MICROCMS_POSTED_WEBHOOK_SECRET_KEY!)
    .update(JSON.stringify(req.body))
    .digest('hex')
  if (
    !crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    )
  ) {
    return false
  }
  return true
}
