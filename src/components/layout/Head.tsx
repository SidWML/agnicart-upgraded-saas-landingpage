import React from 'react';
import { default as NextHead } from 'next/head';
import HTMLReactParser from "html-react-parser"

export default function Head(props) {
  const { pageTitle, description, url } = props;
  return (
    <NextHead>
     
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      <meta
        property="og:title"
        content={pageTitle}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_APP_URL}${url}`}
      />
    </NextHead>
  );
}
