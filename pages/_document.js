// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <CommonScript />
          <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gum1rdsjc1");
</script>
        </Head>

        <body className={`${BLOG.FONT_STYLE} font-light bg-day dark:bg-night`}>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
