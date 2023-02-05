/* eslint-disable @next/next/no-server-import-in-page */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'megumu.me'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #6139FD, #974FFE, #C260FE)'
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              border: 'none',
              height: '84%',
              width: '88%',
              display: 'flex',
              textAlign: 'left',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              padding: 40,
              position: 'relative',
              borderRadius: 50
            }}
          >
            <div
              style={{
                fontSize: 54,
                color: 'black',
                lineHeight: 1.3,
                width: '100%'
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                position: 'absolute',
                bottom: 20,
                right: 40
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #6139FD, #974FFE, #C260FE)'
                }}
              ></div>
              <p style={{ fontSize: 34, marginTop: 10 }}>megumu.me</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 640
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
