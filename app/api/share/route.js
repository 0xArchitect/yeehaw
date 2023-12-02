 
export async function GET(request) {
  //get query params
  const searchParams = request.nextUrl.searchParams
  const v1 = searchParams.get('v1')
  const v2 = searchParams.get('v2')
  const v3 = searchParams.get('v3')
  const v4 = searchParams.get('v4')
  const v5 = searchParams.get('v5')
  const wallet = searchParams.get('wallet');
  const walletID = `${wallet.substring(0,5)}_${wallet.substring(-(wallet.length-4), -(wallet.length-1))}`
  const textBase64 = encodeURIComponent(`${v4}X + ${v5} ETH`)
//   :l-text,i-${walletID},ly-60,bg-ffffff,lx-1355,co-383838,ff-OutlastSlab.ttf,fs-60,l-end
// 
  const imageLink = `https://ik.imagekit.io/77adfk8ao/usergainstemp.png?tr=l-text,i-${v2},ly-1239,lx-1555,bg-ffffff,ff-OutlastSlab.ttf,fs-40,l-end:l-text,i-${v1},ly-1185,lx-1527,bg-ffffff,ff-OutlastSlab.ttf,fs-40,l-end:l-text,i-${v3}%,fs-90,lx-1310,ly-725,bg-ffffff,ff-OutlastSlab.ttf,l-end:l-text,i-${textBase64},ly-825,bg-ffffff,lx-1240,co-383838,ff-OutlastSlab.ttf,fs-60,l-end:l-text,i-${walletID},ly-70,bg-ffffff,lx-1360,co-383838,ff-OutlastSlab.ttf,fs-50,l-end`
  //make api call to get image
  await fetch(imageLink)
  const html = `<html>
  <head>
      <meta property="title" content="YEEHAW" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="YEEHAW" />
      <meta property="og:description" content="YEEHAW" />
      <meta property="og:image" content="${imageLink}" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="YEEHAW" />
      <meta property="twitter:description" content="YEEHAW"/>
      <meta property="twitter:image" content="${imageLink}" />

      <script>
          window.location.replace(window.location.origin)
      </script>
  </head>
  </html>
  `

  return new Response(html, {
    status: 200
    })
}