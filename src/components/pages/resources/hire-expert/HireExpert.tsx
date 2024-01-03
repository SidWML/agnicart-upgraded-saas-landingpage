"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Banner from '../../Banner';
import Typography from '../../../generics/Typography';
import Card from '../templates/Card';
import LinkButton from '../../../generics/Link';

gsap.registerPlugin(ScrollTrigger);

export default function HireExpert() {
  const expertServices = [
    {
      title: 'Design and Layout:',
      icon: '/experts/layout.png',
      description: 'Craft visually appealing and professional website designs tailored to your specific needs.Create a user-friendly and intuitive layout that enhances navigation and usability.Customize templates, themes, or styles to match your branding and aesthetic preferences.',
    },
    {
      title: 'Functionality and Features:',
      icon: '/experts/functionality.png',
      description: 'Integrate advanced features and functionalities into your website, such as e-commerce capabilities, forms, galleries, or blog sections.Implement interactive elements like sliders, carousels, or video players to engage visitors.Ensure responsiveness and compatibility across different devices and screen sizes.',
    },
    {
      title: 'Customization and Branding:',
      icon: '/experts/branding.png',
      description: "Customize your website's color scheme, typography, and graphics to align with your brand identity.Incorporate your logo, brand assets, and unique content to establish a cohesive brand presence.Create personalized elements like custom widgets, sidebars, or navigation menus.",
    },
    {
      title: 'Content Management:',
      icon: '/experts/cms.png',
      description: "Assist in organizing and structuring your website's content for optimal readability and accessibility.Optimize content for search engines (SEO) to improve visibility and search rankings.Provide guidance on content creation, including copywriting, imagery, and multimedia integration.",
    },
    {
      title: 'Troubleshooting and Support:',
      icon: '/experts/support.png',
      description: 'Resolve technical issues, bugs, or errors that may arise during the website-building process.Offer ongoing maintenance and support to ensure your website functions smoothly.Provide expert advice and guidance on best practices, updates, and security measures.',
    },
    {
      title: 'Performance Optimization:',
      icon: '/experts/optimisation.png',
      description: 'Optimize website loading speed and performance to deliver a seamless user experience.Implement caching mechanisms, image optimization techniques, or code optimizations.Conduct testing and performance analysis to identify and address any bottlenecks.',
    },

  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.website-selection',
        start: '-400px',
      },
    });
    tl.fromTo('.website-selection', { y: '200px', opacity: 0 }, { y: '0px', opacity: 1, duration: 1.5 });

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
    <div className=" bg-white dark:bg-black">
      <div className=" relative bg-black text-white">
        <Banner
          mainInnerText="Hire One Now"
          bgGradient="bg-gradient-to-t from-[#2b3469] to-[#4e68a1]"
          mainHeading="Hire an Expert "
          description="Level up your project with a coding expert on your team.
          Experience seamless development with a skilled coding expert.
          Elevate your projects with the expertise of a coding mastermind."
          img="/experts/experts.jpg"
        />
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-gradient-to-t from-black to-[#98EECC] via-black bg-opacity-30" />
      </div>
      <div className=" w-full website-selection text-black dark:text-white py-[60px] space-y-8  lg:w-[90%] mx-auto px-6">
        <div className=" flex flex-col text-start items-center  w-full">
          {
                Typography({
                  type: 'Jumbotron',
                  mainHeading: 'What can Experts do?',
                  description: 'Experts can provide a range of valuable services to enhance your website-building experience. Here are some key points outlining what website builder experts can do: ',
                })
            }
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8">
          {
                expertServices.map((service,index) => (
                  <Card key={index} card={service} />
                ))
            }
        </div>
      </div>
      <div className=" w-full bottom-blog-banner ">
        <div className=" bg-[#E76161]">
          <div className="  mx-auto lg:px-6 px-6 grid md:grid-cols-2 grid-cols-1 gap-8 py-[60px] lg:w-[90%]  w-full">
            <div className=" flex items-center justify-center">
              <div className="   flex flex-col md:items-start col-span-1 space-y-4 text-white">
                {
                Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Create a stunning website without writing a single line of code - Hire an Expert! ',
                  description: 'Transform your vision into a professional website with the help of our coding experts.Build a custom website effortlessly with the guidance of our coding experts ',
                })
            }
                <LinkButton mainInnerText="Hire Now" href="/register" />
              </div>
            </div>
            <div className=" col-span-1 flex items-center justify-center relative ">
              <img src="/templates/color.jpg" alt="" className="img-1 z-[2] max-w-[50%]" />
              <img src="/templates/Revel.jpg" alt="" className=" absolute z-[4] max-w-[60%]" />
              <img src="/templates/Light.jpg" alt="" className=" img-2 z-[2] max-w-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
