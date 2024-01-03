import Link from 'next/link';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LinkButton from './generics/Link';
import Typography from './generics/Typography';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.fromTo('.template-heading', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.website-selection',
          start: '-400px',
        },
      });
      tl.fromTo(".website-selection", { y:"200px", opacity:0 }, { y:"0px", opacity:1, duration:1.5 })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.bottom-blog-banner',
        start: '-400px',
      },
    });

    tl2.fromTo('.img-1', { x: '200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 });
    tl2.fromTo('.img-2', { x: '-200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 }, '<');

    const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".support",
            start:"-400px"
        }
    })
    tl3.fromTo('.support-text', { x: '-200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 1 });
    tl3.fromTo('.support-image', { x: '200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 1 }, '<');

  }, []);

  return (
    <div className=" overflow-hidden ">
      <div style={{ background: 'url(/about.jpg)', backgroundSize: 'cover', backgroundPosition: 'bottom' }} className=" w-full   flex md:items-center z-[5] items-center md:py-[150px] py-[100px]  bg-[black] relative ">
        <div className="w-[80%] template-heading m-auto z-[5] text-white h-[max-content] space-y-8 relative">
          <div className=" relative w-full space-y-8 flex md:items-center items-center flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] md:text-center text-center text-[10vw] w-full font-bold">
              Simplifying Web Design for Everyone
            </h1>
            <p className=" text-center font-medium lg:w-[80%] z-[3] relative w-full mx-auto md:text-xl text-md">
              You don't have to be a tech expert or a professional designer to create stunning websites. Our website builder breaks down the complexities of web design into simple, step-by-step processes. We're dedicated to making web design accessible to everyone, regardless of their skill level
            </p>
          </div>

        </div>
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-black bg-opacity-50" />
      </div>
      <div className=" text-black bg-[#f2f2f2] ">
        <div className="lg:w-[90%] website-selection mx-auto w-full px-6 py-[60px] grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className=" col-span-1 space-y-4">
            <h1 className=" font-medium text-2xl ">
              Mission: Empowering Individuals and Businesses to Thrive Online
            </h1>
            <div className=" space-y-6">
              <p className=" text-justify text-slate-700">
                Our mission is to empower individuals and businesses of all sizes to thrive in the digital world. We believe that a strong online presence is essential for success in today's interconnected society. Through our user-friendly website builder, we provide the tools, resources, and guidance needed to create stunning websites that effectively convey your message, showcase your products or services, and engage your audience.
              </p>
              <p className=" text-justify text-slate-700">
                We are committed to simplifying the website building process, making it accessible to everyone, regardless of their technical expertise. Our platform offers intuitive features, customizable templates, and seamless integration with essential functionalities such as e-commerce, social media, and search engine optimization. By harnessing the power of technology, we enable our users to unlock their digital potential and achieve their online goals.
              </p>
              <p className=" text-justify text-slate-700">
                At the heart of our mission is a dedication to customer satisfaction. We strive to provide exceptional support, ensuring that our users receive prompt assistance and guidance whenever they need it. We understand that building an online presence can be a journey, and we are here to support you every step of the way.
              </p>
              <p className=" text-justify text-slate-700">
                Join us on our mission to empower individuals and businesses to thrive online. Together, we can unleash your digital potential and help you make a lasting impact in the digital landscape.
              </p>
            </div>
          </div>
          <div className=" col-span-1 space-y-4">
            <h1 className=" font-medium text-2xl ">
              About Agnicart: Agnicart is India's most affordable ecommerce software provider.
            </h1>
            <div className=" space-y-6">
              <p className=" text-justify text-slate-700">
                Agnicart, a subsidiary of WML IT Solutions Pvt Ltd is a technology company located in Hyderabad, Telangana and is specialized in building scalable e-commerce platform enabling sellers across the globe to come online.
              </p>
              <p className=" text-justify text-slate-700">
                Our Vision is to enable you with technology tools to have the right digital footprint at affordable price and thereby accelerate your path to realize your dreams.
              </p>
              <p className=" text-justify text-slate-700">
                We understand that your time is best spent focusing on working with customers and drive sales. Our offerings are structured in such a way, so you get to focus on the business while we take care of your online setup, online store management, and digital marketing needs.
              </p>
              <p className=" text-justify text-slate-700">
                Agnicart is committed to providing a comprehensive solution for online sellers, offering a range of features and services to streamline their e-commerce operations. From setting up an online store to managing inventory, processing orders, and handling payments, Agnicart empowers sellers to efficiently run their online businesses.
              </p>
              <p className=" text-justify text-slate-700">
                Agnicart takes pride in its customer-centric approach. We value our clients' feedback and actively incorporate their suggestions into our platform's development. Our dedicated support team is readily available to assist sellers with any queries or technical issues they may encounter, ensuring a smooth and seamless experience.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className=" bg-white">
        <div className=" lg:w-[90%] support  mx-auto w-full px-6 py-[60px] grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className=" support-text col-span-1 dark:text-black  space-y-4">
            <h1 className=" border-b-2 py-2 border-green-600 font-medium text-2xl  text-justify">
              At Agnicart, we prioritize your success and satisfaction. We understand that navigating the world of e-commerce can sometimes be challenging, which is why we offer comprehensive support to ensure you have a smooth experience:
            </h1>
            <div className=" space-y-6">
              <p className=" text-justify space-x-4 text-slate-700">
                <span className=" font-medium  text-black text-xl">24/7 Dedicated Customer Support:</span>
                <span className="">
                  Our team of knowledgeable and friendly customer support representatives is available round the clock to assist you. Whether you have a question, need technical assistance, or require guidance, we're here to help. You can reach us anytime through email or live chat, and we'll promptly address your concerns.
                </span>
              </p>
              <p className=" text-justify space-x-4 text-slate-700">
                <span className=" font-medium  text-black text-xl">Free Website Setup Service:</span>
                <span className="">
                  To make your journey with Agnicart even more convenient, we offer a free website setup service. Our experts will guide you through the process, helping you set up your online store and configure it according to your preferences. We'll ensure that you have a solid foundation to kickstart your e-commerce journey.
                </span>
              </p>
              <p className=" text-justify space-x-4 text-slate-700">
                <span className=" font-medium  text-black text-xl">Help Center and Resources:</span>
                <span className="">
                  In addition to our dedicated customer support, we provide a comprehensive Help Center with a wealth of resources. You'll have access to detailed guides, step-by-step tutorials, and informative articles to assist you at every stage of building and managing your online store. Whether you're a beginner or an experienced seller, our Help Center is a valuable knowledge base to empower you with the necessary information.
                </span>
              </p>
              <p className=" text-justify space-x-4 text-slate-700">
                <span className=" font-medium  text-black text-xl">Continuous Improvement and Feedback:</span>
                <span className="">
                  We believe in constant improvement, and your feedback plays a crucial role in shaping our platform. We actively encourage you to share your thoughts, suggestions, and ideas with us. Your input helps us enhance our features and services to better meet your needs and exceed your expectations.
                </span>
              </p>
            </div>
          </div>
          <div className=" support-image col-span-1 max-h-[700px] overflow-hidden">
            <img src="/support.jpg" alt="" className=" object-cover hover:scale-110 duration-500 ease-linear w-full max-h-full" />
          </div>
        </div>
      </div>
      <div className=" w-full bottom-blog-banner ">
        <div className=" bg-[#159895]">
          <div className="  mx-auto lg:px-6 px-6 grid md:grid-cols-2 grid-cols-1 gap-8 py-[60px] lg:w-[90%]  w-full">
            <div className=" flex items-center justify-center">
              <div className="   flex flex-col md:items-start col-span-1 space-y-4 text-white">
                {
                Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Create Stunning Websites without Technical Hassles - Harness the Power of Drag and Drop!',
                  description: 'Unlock Your Potential with our No-Code Drag and Drop Page Builder.Elevate Your Shopping Experience with Effortless Design',
                 
                })
            }
                <LinkButton  href='/register' mainInnerText="Start Creating" />
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
