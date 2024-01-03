import Customers from '@/components/pages/Customers'
import React from 'react'

export default function Page() {
  const seo ={
    pageTitle:"Happy Customers and Success Stories - Agnicart's Trusted E-commerce Platform",
    description:"Discover the success stories of Agnicart's happy customers. Read their testimonials and learn how our trusted e-commerce platform has helped businesses thrive and achieve remarkable results.",
    url:"/customers"
  }
  return (

        <Customers />
  )
}
