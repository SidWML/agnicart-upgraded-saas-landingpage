"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import TemplateFilters from '../templates/TemplateFilters';
import Typography from '../../../generics/Typography';
import LinkButton from '../../../generics/Link';
import Card from '../templates/Card';
import BlogListPage from './BlogListPage';

gsap.registerPlugin(ScrollTrigger);

export default function Blog({blogs}) {
  const bloggingSteps = [
    {
      title: 'Choose a blogging platform',
      description: 'The first step in starting a blog is to select a blogging platform or Content Management System (CMS) for publishing your content. A quick Google search will show you that there are several different sites available that suit bloggers from all industries. I recommend Wix because it’s a good all-around blogging platform that satisfies most needs.',
    },
    {
      title: 'Pick a hosting platform',
      description: 'Once you select your preferred blogging platform, you’ll need to choose a hosting platform. A blog, like other types of websites, requires a host. This essentially stores websites on a server under a unique address so that visitors can easily reach them.',
    },
    {
      title: 'Finding the right profitable blog niche',
      description: 'Let’s move away from the technical and dive into the more theoretical. Take a step back and think about the main element that will form the foundation of your blog, from its URL and domain name to its content and design: your blog’s niche. What, exactly, do you want your blog to be about? There is virtually no limit when it comes to your choice of subjects. The most crucial thing is that you select a specific topic area that will be the central focus of your entire blog and its content strategy. ',
    },
    {
      title: 'Select a blog name and domain',
      description: 'As you think about how to make a blog, the question of what to name it is probably lurking somewhere in the back of your mind. There are three main routes you can go with your blog\'s name. These include:Your first and last name The name of your business (if you have one) A creative new name When choosing your blog’s name, you should also think about the personality you want it to reflect. Should it be formal and professional? Sweet and romantic? Edgy and offbeat? If you’re stuck on names for your blog, this blog name generator is a helpful source of inspiration. ',
    },
    {
      title: 'Choose a blog template',
      description: 'The first part of setup for a blog is selecting a template. Like your blog’s name, its look and feel will be an important part of its personality. The most efficient way to get your blog up and running is to choose a pre-designed blog template. Afterwards, you can customize it based on your preferences.Be sure to pick one that conveys your blog’s subject area. There are website templates for bloggers of any genre, whether you’re a food blogger, photography blogger or business blogger.  As you browse, think about the mood you want your website to communicate, for example. whether it’s classic, modern, rugged or minimalist. ',
    },
    {
      title: 'Decide which pages to include',
      description: 'Once you’ve chosen a template, think about which pages to include. Most blogs include more than just a section to display their posts. They might also include an online store, as in the image below, or a contact page. some blogs opt to place their posts directly on the homepage, while others keep their homepages and blog pages separate. If you do this, make sure to include a navigation menu so that visitors can easily access your blog as well as any other pages.There’s no right or wrong way to set up a blog, so play around with different options to see what best suits your style and personality. Keep in mind that you can always add or remove pages over time as your blog evolves.',
    },
    {
      title: 'Create a blog logo',
      description: 'Finally, polish off your site with an attractive blog logo. This is another way to add personality to your site, and it’s an essential step if you want to create a blog that evolves into a recognizable brand.One option is to design your own or outsource the task, but you can also use an online logo maker. These tools give you plenty of room to customize your logo with your preferred colors, fonts and icons, and tend to be quicker and more affordable than hiring a professional designer.. ',
    },
    {
      title: 'Brainstorm blog topics',
      description: 'On the technical side, your blog is now setup and ready to go. It’s time to start thinking about which topics you’ll get started with.Begin by thinking about your experiences, successes, failures or discoveries related to your niche. What insights can you share? What ideas are you looking to explore in-depth? As you think of topics, try to get into your readers’ heads.',
    },

  ];

  const [hydrated, setHydrated] = useState(false);
useEffect(() => {
    setHydrated(true);
},[])




  useEffect(() => {
    gsap.fromTo('.blog', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.blog-selection',
        start: '-400px',
      },
    });
    tl.fromTo('.blog-selection', { y: '200px', opacity: 0 }, { y: '0px', opacity: 1, duration: 1.5 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.bottom-blog-banner',
        start: '-400px',
      },
    });

    tl2.fromTo('.img-1', { x: '200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 });
    tl2.fromTo('.img-2', { x: '-200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 }, '<');
  }, []);

  return (
    <div className="bg-white dark:bg-black ">
      <div className=" w-full   flex md:items-center z-[5] items-center md:py-[150px] py-[100px]  relative  ">
        <div className="w-[80%] m-auto text-white z-[3] h-[max-content] space-y-8 relative flex flex-col">
          <div className=" w-full blog space-y-8 flex items-center  flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] text-center  text-[7vw] w-full font-bold">
              Website Templates For Creatives and Businesses
            </h1>
            <p className=" text-center font-medium lg:w-[60%] z-[3] relative w-full mx-auto md:text-xl text-md">
              Our dream: everyone can create a website with no special skills required. Join the waitlist to make it a reality very soon.
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] relative z-[2] font-medium text-md " href="/register">
              Start Blogging
            </Link>
          </div>
          <div className=" w-full ">
            <img src="/templates/blog/blog.webp" alt="" className=" w-full" />
          </div>
        </div>
        <div className=" absolute top-0 bottom-0 right-0 z-[-1] left-0 bg-gradient-to-t from-black to-violet-700 via-black bg-opacity-30" />
      </div>
      <div className=" w-full blog-selection text-black overflow-hidden dark:text-white  py-[60px] space-y-8  lg:w-[90%] mx-auto px-6">
        <div className=" flex flex-col text-center items-center  w-full">
          {
                Typography({
                  type: 'Jumbotron',
                  mainHeading: 'BLOGS',
                  description: " let's explore the steps you need to take to create one, from ideation to publication. ",
                })
            }
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8">
          {
            bloggingSteps.map((card,index) => (
              <Card key={index} card={card} />
            ))
        }
        </div>
      </div>
      <div className="bg-[black] pt-[60px]  text-white">
        <TemplateFilters filterType="blog" />
      </div>
     { hydrated &&  <BlogListPage strapiBlogs={blogs} />  } 
      <div className=" w-full bottom-blog-banner ">
        <div className=" bg-[#F7C04A]">
          <div className="  mx-auto lg:px-6 px-6 grid md:grid-cols-2 grid-cols-1 gap-8 py-[60px] lg:w-[90%]  w-full">
            <div className=" flex items-center justify-center">
              <div className="   flex flex-col md:items-start col-span-1 space-y-4 text-white">
                {
                Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Create Stunning Blogs without Technical Hassles - Harness the Power of Drag and Drop!',
                  description: 'Unlock Your Blogging Potential with our No-Code Drag and Drop Page Builder.Elevate Your Blogging Experience with Effortless Design',
                })
            }
                <LinkButton mainInnerText="Start Blogging" />
              </div>
            </div>
            <div className=" col-span-1 flex items-center justify-center relative ">
              <img src="/templates/color.jpg" alt="" className="img-1 z-[2] max-w-[50%]" />
              <img src="/templates/Revel.jpg" alt="" className=" absolute z-[4] max-w-[60%]" />
              <img src="/templates/Light.jpg" alt="" className="img-2 z-[2] max-w-[50%]" />
            </div>
          </div>
        </div>
      </div>
    

    </div>
  );
}
