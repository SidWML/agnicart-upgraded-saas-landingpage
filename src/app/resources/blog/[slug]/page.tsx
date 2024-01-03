import DetailBlog from '@/components/pages/resources/blogs/DetailBlog'
import React from 'react'


export default function Page({detailBlogs}) {
  const seo = { 
    pageTitle:detailBlogs.attributes.title,
    description:detailBlogs.attributes.title,
    url:`/resources/blog/${detailBlogs.attributes.title}`
  }
  return (

        <DetailBlog detailBlogs={detailBlogs} />
  )
}


// export async function getServerSideProps(context){
//   console.log(context);
//   const { slug } = context.params
//     const { data } = await axios.get(`http://127.0.0.1:1337/api/blogs?populate=image&filters[slug][$eq]=${slug}`);
//     const detailBlogs = data.data[0];
//     return{
//       props:{
//         detailBlogs
//       }
//     }

// }