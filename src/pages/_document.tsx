// pages/_document.js

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
