import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import Typography from '../generics/Typography';

export default function HomeSectionSix({ type }) {
  const variants = ['Bloggers', 'Designers', 'Shops', 'Real States', 'Restaurents ', 'Education ', 'Travels ', 'Health Care'];
  const [variant, setVariant] = useState(variants[0]);
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % variants.length;
      setVariant(variants[currentIndex]);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const swiperImages = [
    {
      img: '/ecom-1.png',
    },
    {
      img: '/ecom-2.png',
    },

    {
      img: '/ecom-3.webp',
    },
    {
      img: '/ecom-4.webp',
    },
    {
      img: '/ecom-5.webp',
    },
    {
      img: '/ecom-6.webp',
    },
  ];

  useEffect(() => {
    // const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.section-six-text',
    //     start: '-50px',
    //     end:"100%",
    //     scrub:0.3
    //   },
    // });

    // tl2.to('.section-six-text',{ y: '200px', opacity: 1, duration:1.5 });

    const tc1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-1',
        start: '-700px',
        end: '30%',

      },
    });
    tc1.fromTo('.section-six-c-1', { scale: 0.5, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 1 });
    const tc2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-2',
        start: '-700px',
        end: '30%',

      },
    });
    tc2.fromTo('.section-six-c-2', { x: '-100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });
    const tc3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-3',
        start: '-700px',
        end: '30%',

      },
    });
    tc3.fromTo('.section-six-c-3', { x: '100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });
    const tc4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-4',
        start: '-700px',
        end: '30%',

      },
    });
    tc4.fromTo('.section-six-c-4', { x: '100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });
    const tc5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-5',
        start: '-700px',
        end: '30%',

      },
    });
    tc5.fromTo('.section-six-c-5', { x: '-100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });

    const tc6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-6',
        start: '-700px',
        end: '30%',

      },
    });
    tc6.fromTo('.section-six-c-6', { scale: 0.5, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 1 });

    const tc7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-7',
        start: '-700px',
        end: '30%',

      },
    });
    tc7.fromTo('.section-six-c-7', { x: '100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });
    const tc8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-8',
        start: '-700px',
        end: '30%',

      },
    });
    tc8.fromTo('.section-six-c-8', { x: '-100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });

    const tc9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-9',
        start: '-700px',
        end: '30%',

      },
    });
    tc7.fromTo('.section-six-c-9', { x: '-100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });
    const tc10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-10',
        start: '-700px',
        end: '30%',

      },
    });
    tc10.fromTo('.section-six-c-10', { x: '100px', opacity: 0.5 }, { x: '0px', opacity: 1, duration: 1 });

    const tc11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-11',
        start: '-700px',
        end: '30%',

      },
    });
    tc11.fromTo('.section-six-c-11', { y: '200px', opacity: 0.5 }, {
      y: '0px', opacity: 1, duration: 1, transformOrigin: 'left-bottom',
    });
    const tc12 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-12',
        start: '-700px',
        end: '30%',

      },
    });
    tc12.fromTo('.section-six-c-12', { y: '200px', opacity: 0.5 }, {
      y: '0px', opacity: 1, duration: 1, transformOrigin: 'center',
    });
    const tc13 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-six-c-13',
        start: '-700px',
        end: '30%',

      },
    });
    tc13.fromTo('.section-six-c-13', { y: '200px', opacity: 0.5 }, {
      y: '0px', opacity: 1, duration: 1, transformOrigin: 'right-bottom',
    });
  }, []);

  return (
    <div className="  h-s-6 bg-[#ebebec] dark:bg-black overflow-hidden">
      <div className="py-[60px] px-8 lg:w-[90%] w-full mx-auto">
        <div className=" w-full  ">
          <div className=" text-center text-black dark:text-white section-six-text">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[75px] md:leading-[60px] md:w-[80%] w-full leading-[50px] text-[10vw] mx-auto font-bold">
              We have Templates ready for
              {' '}
              <span className="text-[#0077ed]">
                {' '}
                {variant}
              </span>
            </h1>
          </div>
        </div>
        <div className=" mt-12 flex flex-col gap-5">
          <div

            className={` relative section-six-c-1   md:grid-cols-5 grid-cols-1  lg:pt-24 pt-12  overflow-hidden bg-black rounded-3xl  overflow-hidden ${type === 'ecommerce' ? ' hidden ' : ' grid '}`}
          >
            <div className="lg:px-16 px-8 md:col-span-2 col-span-1 space-y-4 z-[2] text-white">
              {Typography({
                type: 'Sub-Main-Heading',
                mainHeading: 'Blogs and Magazine',
                description: 'Choose from many layouts and content modules for your online newspaper or magazine.',
              })}
            </div>
            <div className=" md:col-span-3 col-span-1 w-full z-[2]">
              <img src="/blog.png" alt="" className="" />
            </div>
            <div
              style={{ filter: 'blur(100px)' }}
              className=" min-w-[80%] min-h-[50%] bg-[#5e1093] absolute top-[-50%]  rounded-full -translate-y-[-50%] left-[50%] -translate-x-[50%]"
            />
          </div>
          <div className={`  md:grid-cols-2 grid-cols-1 gap-5 ${type === 'ecommerce' ? ' hidden ' : 'grid '}`}>
            <div className="section-six-c-2 bg-[#2fc4b5] rounded-3xl  overflow-hidden space-y-4 text-white">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Manage Dynamic Content Easily',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="">
                <img src="/content.png" alt="" className="" />
              </div>
            </div>
            <div

              className=" bg-[#f2f2f2] section-six-c-3 rounded-3xl  overflow-hidden space-y-4 text-black overflow-hidden"
            >
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Create your Own Widgets and Reuse them ',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="">
                <img src="/widgets.jpg" alt="" className="" />
              </div>
            </div>
          </div>
          <div className={`  md:grid-cols-2 grid-cols-1 gap-5 ${type === 'ecommerce' ? ' hidden ' : ' grid'}`}>
            <div

              className=" bg-[#ffffff] section-six-c-4 rounded-3xl  overflow-hidden space-y-4 text-white overflow-hidden"
            >
              <div className=" w-[100%] space-y-4 lg:p-16 p-8 text-black ">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Easy Styling of Components',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="">
                <img src="/global styling.png" alt="" className="" />
              </div>
            </div>
            <div className=" bg-[#212A3E] section-six-c-5 rounded-3xl  overflow-hidden space-y-4 text-white">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'User Friendly Menu ',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="w-full  bg-red-500">
                <img src="/menu.png" alt="" className=" max-w-full max-h-full object-cover" />
              </div>
            </div>
          </div>
          <div className=" w-full lg:px-16 px-8 lg:pt-16 pt-8 section-six-c-6 bg-black relative text-white rounded-3xl  overflow-hidden">
            <div className=" w-[100%] space-y-4 text-center z-[99] relative">
              {Typography({
                type: 'Sub-Main-Heading',
                mainHeading: 'Build Professional E-commerce Websites ',
                description: 'Customize every part of your online store from products lists and singles to cart, checkout and Secure Payments ',
              })}
            </div>
            <div className=" md:px-16 md:pt-16 px-8 pt-12">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={5000}
                loop
                breakpoints={
                  // when window width is >= 320px
                  {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    900: {
                      slidesPerView: 1,
                      spaceBetween: 25,
                    },
                  }
                }
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper "
              >
                {swiperImages.map((image,index) => (
                  <SwiperSlide>
                    <div key={index} className="">
                      <img src={image.img} alt="" className=" lg:max-w-full lg:max-h-full min-h-full object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              style={{ filter: 'blur(100px)' }}
              className=" min-w-[80%] min-h-[50%] bg-[#B71375] absolute top-[-80%] rounded-full -translate-y-[-80%] left-[50%] -translate-x-[50%]"
            />
          </div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div

              className=" bg-[#ededed] lg:col-span-2 section-six-c-7 col-span-1 rounded-3xl  overflow-hidden space-y-4 text-white "
            >
              <div className=" w-[100%] space-y-4 lg:p-16 p-8 text-black ">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Advanced product filters & variation swatches',
                  description: 'Let them search with the most advanced filters, visual variations and fast response.',
                })}
              </div>
              <div className="">
                <img src="/filters.png" alt="" className="" />
              </div>
            </div>
            <div className=" bg-[#116D6E] section-six-c-8 col-span-1 rounded-3xl  overflow-hidden space-y-4 text-white">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Manage Discounts, Coupons and Offers',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="w-full  ">
                <img src="/discount.png" alt="" className=" max-w-full max-h-full object-cover" />
              </div>
            </div>
          </div>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
            <div

              className=" bg-[black] col-span-1 rounded-3xl  section-six-c-9 space-y-4 text-white overflow-hidden"
            >
              <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Customize checkouts',
                  description: 'Let them search with the most advanced filters, visual variations and fast response.',
                })}
              </div>
              <div className="">
                <img src="/checkout.webp" alt="" className="" />
              </div>
            </div>
            <div className=" bg-[#f4f5f7] rounded-3xl md:col-span-2 section-six-c-10 col-span-1 overflow-hidden space-y-4 text-white">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8 text-black">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Easily Manage Products, Orders using our User Friendly Dashboard',
                  description: 'Easily build advanced dynamic sites such as booking, event manager, listing and more.',
                })}
              </div>
              <div className="w-full max-h-[300px] ">
                <img src="/dash.png" alt="" className="  object-cover" />
              </div>
            </div>
          </div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div

              className=" bg-[#707cd2]  col-span-1 section-six-c-11 rounded-3xl  overflow-hidden space-y-4 text-white "
            >
              <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'SEO',
                  description: 'Optimize your SEO and improve discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools.',
                })}
              </div>
              <div className="">
                <img src="/SEO.png" alt="" className="" />
              </div>
            </div>
            <div className=" bg-[#152740] section-six-c-12 rounded-3xl col-span-1 overflow-hidden space-y-4 text-white">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Collaboration',
                  description: 'Work better together, ship faster, and avoid unauthorized changes with advanced roles and permissions, page branching, and more.',
                })}
              </div>
              <div className="w-full max-h-[300px] ">
                <img src="/Collaboration.png" alt="" className="  object-cover" />
              </div>
            </div>
            <div className=" bg-[#f4f6fa] section-six-c-13 rounded-3xl col-span-1 overflow-hidden space-y-4 text-black">
              <div className=" w-[100%] space-y-4 lg:p-16 p-8">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: 'Integration',
                  description: 'Connect your site to your existing tech stack with Webflow’s extensible platform, as well as Webflow Apps.',
                })}
              </div>
              <div className="w-full max-h-[300px] ">
                <img src="/integration.webp" alt="" className="  object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
