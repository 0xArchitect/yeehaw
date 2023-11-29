 
export async function GET(request) {
  //get query params
  const searchParams = request.nextUrl.searchParams
  const v1 = searchParams.get('v1')
  const v2 = searchParams.get('v2')
  const v3 = searchParams.get('v3')
  const v4 = searchParams.get('v4')
  const v5 = searchParams.get('v5')
  const textBase64 = atob(`${v4}X + ${v5} ETH`)
  const imageLink = `https://ik.imagekit.io/gjbjze6w2/gained.png?tr=l-text,i-${v1},ly-1245,lx-1570,ff-OutlastSlab.ttf,fs-40,l-end:l-text,i-${v2},ly-1300,lx-1600,ff-OutlastSlab.ttf,fs-40,l-end:l-text,i-${v3}%,fs-120,lx-1350,ly-700,ff-OutlastSlab.ttf,l-end:l-text,ie-${textBase64},ly-850,lx-1280,ff-OutlastSlab.ttf,fs-60,l-end`

  const html = `<html>
  <head>
      <meta property="title" content="YEEHAW" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="YEEHAW" />
      <meta property="og:description" content="YEEHAW" />
      <meta property="og:image" content="${imageLink}" />

      <meta property="twitter:card" content="${imageLink}" />
      <meta property="twitter:title" content="YEEHAW" />
      <meta property="twitter:description" content="YEEHAW"/>
      <meta property="twitter:image" content="${imageLink}" />

      <script>
          // window.location.replace(window.location.origin)
      </script>
  </head>
  </html>
  `

  return new Response(html, {
    status: 200
    })
}