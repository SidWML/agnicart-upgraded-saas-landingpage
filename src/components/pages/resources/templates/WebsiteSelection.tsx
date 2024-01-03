import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Typography from '../../../generics/Typography';
import LinkButton from '../../../generics/Link';
import Card from './Card';


gsap.registerPlugin(ScrollTrigger);

export default function WebsiteSelection() {
  const cards = [
    {
      title: 'Know the type of website you are building',
      icon: '/templates/monitor.png',
      description: 'It is important to have a clear set of goals in mind when building your website. What kind of website do you want? Portfolio website templates are different from eCommerce templates and you need to choose what’s best for you. Once you are clear about the type of website you want to create, start laying out actions to achieve those goals. Look for website templates that can be customized to suit the requirements of your brand and business.',
    },
    {
      title: 'Find out what you like',
      icon: '/templates/like.png',
      description: 'Check out the kind of websites other people in your industry are building. How do they leverage their websites as a tool for their professional growth and how can you emulate them? Look at the kind of website templates your peers and competitors are using. What are the features and services that they offer through their websites?            Learn through examples and choose website templates that stand out from the crowd',
    },
    {
      title: 'Choose a clean, simple website design template',
      icon: '/templates/solution.png',
      description: 'It is important to have a clear set of goals in mind when building your website. What kind of website do you want? Portfolio website templates are different from eCommerce templates and you need to choose what’s best for you. Once you are clear about the type of website you want to create, start laying out actions to achieve those goals. Look for website templates that can be customized to suit the requirements of your brand and business.',
    },
    {
      title: 'Look for customization and flexibility',
      icon: '/templates/equalizer.png',
      description: 'Even the best website design templates may not always be perfect for you. What you need is a website template that you can customise to create a website that works best for you. You should choose a template that allows you to personalize the look and feel of your site through customizable fonts, colours, spacings, layouts, header, footer, site width and more. Choose website design templates with a good range of customizability and build a website that is perfect for you and your needs.',
    },
    {
      title: 'Review features and integrations',
      icon: '/templates/review.png',
      description: 'What do you want your website to do for you? A website is not simply a collection of web pages, it should be an all-in-one platform for you and your clients. For this, it needs to have a good length and breadth of features and integrations to be fully functional and useful. Review the different features like pages, galleries, forms, store, eCommerce features, blog etc offered by your website template of choice. Also, consider the third-party integrations that are on offer. Integrated services like chat, social media widgets, blog comments can provide added functionality while keeping your website light.',
    },
    {
      title: 'Choose mobile-friendly website design templates',
      icon: '/templates/login.png',
      description: 'The majority of web traffic on the internet today comes from mobile device users and this trend is likely to continue into the future and smartphones become more and more accessible and ubiquitous. The last thing you want is for your website to fall behind with the times. Lack of mobile optimization could negatively affect your website’s reach and accessibility. Always ensure that your site is mobile friendly and choose website templates that offer optimization features for both desktop and phone screens.',
    },
    {
      title: 'Ensure that your website template is search engine friendly',
      icon: '/templates/seo.png',
      description: 'How do you leverage your website to expand your reach and grow your business? The easiest and most cost-efficient way to do that is by making your website search engine friendly. SEO friendly website templates will help your portfolio website rank well in Google search results, bringing in more web traffic and clients. Search engines favour fast-loading websites and the best website templates will keep that in mind. Also, look for website templates that come with SEO management and optimization features..',
    },
    {
      title: 'Choose the right website builder',
      icon: '/templates/dashboard.png',
      description: 'It\'s not just about the website template you choose, the platform on which you are building your website is equally important. Make sure to choose a website builder that can give you everything you need for creating a beautiful website, all in one place.',
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
    <div className=" bg-white dark:bg-black text-black dark:text-white">
      <div className=" website-selection lg:w-[90%] mx-auto px-6  py-[60px] w-full">
        <div className="  text-center space-y-4">
          {
                    Typography({
                      type: 'Jumbotron',
                      mainHeading: 'How to Select Your Theme',
                      description: 'There is no better way of empowering yourself as a creator or small business than building your own website. With your own professional website, you can showcase your work, market yourself, set up an online store, start a blog and more. And with the right tools and the right website templates, building your website can be incredibly quick, easy and cost-efficient. Here are some tips for choosing the best website design templates for your professional website.',
                    })
                }
        </div>

        <div className=" grid lg:grid-cols-2 col-span-1  gap-8 mt-20">
          {
                cards.map((card,index) => (
                  <Card key={index} card={card} />
                ))
            }

        </div>
      </div>
      <div className=" w-full bottom-blog-banner ">
        <div className=" bg-[#865DFF]">
          <div className="  mx-auto lg:px-0 px-6 grid md:grid-cols-2 grid-cols-1 gap-8 py-[60px] lg:w-[90%]  w-full">
            <div className=" flex items-center justify-center">
              <div className="  flex flex-col md:items-start items-center md:text-start text-center  col-span-1 space-y-4 text-white">
                {
                Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Want To sell Your Templates ? ',
                  description: 'If your a UI Developer? and want to sell your Website Templates then you are in a right place. ',
                })
            }
                <LinkButton mainInnerText="Know now" href="/register" />
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
