import Blog from '@/components/pages/resources/blogs/Blog';
import React from 'react';


export default function Page({blogs}) {
  const seo={
    pageTitle:"Insightful Blogs and Informative Content by Agnicart - Stay Updated and Informed",
    description:"Explore Agnicart's blog section for a wealth of informative content. Discover insightful articles, valuable tips, and stay updated with the latest industry trends to enhance your knowledge and expertise.",
    url:'/resources/blog'
  }
  return (

      <Blog blogs={blogs}  />
  );
}



