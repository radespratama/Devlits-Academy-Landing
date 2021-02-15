import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
            <Head>
                {/* <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/public/images/logo.png`}/> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
      </Html>
    )
  }
}

export default MyDocument