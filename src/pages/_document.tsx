import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  // EQUIVALE AO ROOT DO REACT
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          {/* METADADOS  */}
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:title" content="Campanha 18 anos SENAI" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="../../public/img/og-metaimage.png"
          />

          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Ramabhadra&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="https://i.pinimg.com/originals/5e/c6/4e/5ec64e7fb1171180d55187326e300a77.png"
            type="image/x-icon"
          />

          <title>Senai Informática</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
