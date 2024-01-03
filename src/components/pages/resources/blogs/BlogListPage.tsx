import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Typography from '../../../generics/Typography';

export default function BlogListPage({ strapiBlogs }) {
 

  return (
    <div className=" pb-8 text-center w-full bg-white dark:bg-[black]  px-6 ">
      <div className=" py-4  lg:w-[90%] w-full px-6  mx-auto">
        {
            Typography({
              type: 'Jumbotron',
              mainHeading: 'LATEST BLOGS',
              textGd: 'bg-gradient-to-r from-amber-400 to-rose-600 bg-clip-text text-transparent',
            })
        }
      </div>
      <div className="">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
          {
           strapiBlogs && strapiBlogs.map((blog,index) => {
             const newDate = new Date(blog.attributes.publishedAt);
             const date = newDate.toDateString();
             const time = newDate.toLocaleTimeString();
             return (
               <Link key={index} href={`/resources/blog/${blog.attributes.slug}`} style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 1px 3px' }} className=" h-[500px] group relative hover:shadow-custom rounded-3xl overflow-hidden">
                 <img src={`http://localhost:1337${blog.attributes.image.data[0].attributes.url}`} alt="" className=" group-hover:scale-110 duration-1000 ease-linear relative z-[1] w-full h-full object-cover" />
                 <div className=" absolute bottom-0 bg-gradient-to-t from-trueGray-900 top-0 right-0 flex items-end left-0  p-4 z-[5]">
                   <div className="  overflow-hidden text-start  space-y-3">
                     <p className=" font-light text-xs text-slate-100">
                       {date}
                       {' '}
                       -
                       {' '}
                       {time}
                     </p>
                     <div className=" text-start  space-y-1 flex flex-col justify-between  ">
                       <h1 className=" min-h-[50px] font-medium text-md text-white">{blog.attributes.title}</h1>
                     </div>
                   </div>
                 </div>
               </Link>
             );
           })
        }
        </div>
        <button className="px-6 py-2 font-medium text-white text-sm mt-6 bg-[#0077ed]">Load more</button>
      </div>

    </div>
  );
}
