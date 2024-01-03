import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from './Head'

export default function AgnicartLayout({children, seo}) {
  
  return (
    <div className="">
      {
        seo && <Head pageTitle={seo.pageTitle} description={seo.description} url={seo.url} />
      }
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
