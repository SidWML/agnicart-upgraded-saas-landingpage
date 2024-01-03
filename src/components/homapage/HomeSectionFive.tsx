import { faPlaneUp, faHouse, faGraduationCap, faShoppingBag, faUserDoctor, faPiggyBank, faUtensils } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkButton from "../generics/Link";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import Typography from "../generics/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSectionFive() {
  const websitesTypes = [
    {
      id: 6,
      src: "./e-commerce.svg",
      title: "E-Commerce",
      icon: <FontAwesomeIcon icon={faShoppingBag} />,
      images: ["/retail-1.jpg", "/retail-2.jpg", "/retail-3.jpg"],
    },
    {
      id: 1,
      src: "./house.svg",
      title: "Real Estate",
      icon: <FontAwesomeIcon icon={faHouse} />,
      images: ["/realestate-1.jpg", "/realestate-2.jpg", "/realestate-3.jpg"],
    },
    {
      id: 2,
      src: "./travel.svg",
      title: "Tour & Travel",
      icon: <FontAwesomeIcon icon={faPlaneUp} />,
      images: ["/travel-1.jpg", "/travel-2.jpg", "/travel-3.jpg"],
    },
    {
      id: 3,
      src: "./education.svg",
      title: "Education",
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      images: ["/education-1.jpg", "/education-2.jpg", "/education-3.jpg"],
    },

    {
      id: 8,
      src: "./health.svg",
      title: "Health Care",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
      images: ["/healthCare-1.jpg", "/healthCare-2.jpg", "/healthCare-3.jpg"],
    },
    {
      id: 9,
      src: "./finance.svg",
      title: "Finance",
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
      images: ["/finance-1.jpg", "/finance-2.jpg", "/finance-3.jpg"],
    },
    {
      id: 10,
      src: "./restaurant.svg",
      title: "Food Delivery",
      icon: <FontAwesomeIcon icon={faUtensils} />,
      images: ["/food-delivery-1.jpg", "/food-delivery-2.jpg", "/food-delivery-3.jpg"],
    },
  ];

  const [websiteType, setWebsiteType] = useState("E-Commerce");

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".h-s-5",
        start: "-400px",
      },
    });

    // const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.section-five-text',
    //     start: '-50px',
    //     end:"100%",
    //     scrub:0.3
    //   },
    // });
    tl.fromTo(".h-s-5", { y: "200px", opacity: 0 }, { y: "0px", opacity: 1, duration: 1.5 });
    // tl2.to('.section-five-text',{ y: '200px', opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div className="  bg-black relative overflow-hidden">
      <div id="case-studies" className="w-full h-s-5 py-[60px] px-6 lg:w-[90%] md:w-[95%] z-[5]  mx-auto flex flex-col relative  items-center overflow-hidden">
        {/* <div  className=" absolute top-[-50%] rounded-full  -translate-x-[50%] -translate-y-[0%] left-[50%]  bg-[#8D72E1]  opacity-75"></div> */}
        <div className=" overflow-hidden w-full">
          <div className=" space-y-4 section-five-text lg:text-start text-center w-full text-white  items-center ">
            {Typography({
              type: "Jumbotron",
              mainHeading: "Get started with a template",
              description: "Choose a design that fits your industry or passion. Then customize it to make it yours..",
            })}
            <LinkButton href="/register" mainInnerText="Get Started" />
          </div>
        </div>
        <div className="w-full font grid md:grid-cols-5 grid-cols-1 relative  md:gap-8 md:mt-[80px] mt-[50px]">
          <div className="lg:col-span-1 md:col-span-2 flex items-center md:flex-col flex-row md:overflow-hidden overflow-x-scroll col-span-1  w-full gap-4  ">
            {websitesTypes.map((category) => (
              // eslint-disable-next-line react/jsx-key
              <button onClick={() => setWebsiteType(`${category.title}`)} key={category.id} style={{ boxShadow: "0 10px 20px -5px rgb(0 0 0 / 10%)" }} className={`flex w-full min-w-[max-content]   items-center space-x-2 text-black  ${websiteType === category.title ? "bg-orange-600 text-white border border-orange-600" : "bg-white border border-white"} rounded-xl p-2`}>
                <div
                  className={`${websiteType === category.title ? "bg-slate-50 bg-opacity-40 text-white  " : ""} w-[35px] h-[35px] p-2 text-md flex items-center justify-center 
               rounded-full`}
                >
                  {category.icon}
                </div>
                <h1 className="text-[17px] font-medium">{category.title}</h1>
              </button>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-3 w-full md:mt-0  mt-[50px] text-white">
            {websitesTypes &&
              websitesTypes
                .filter((filterItem) => filterItem.title === websiteType)
                .map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <div key={item.id} className=" lg:w-[80%] w-full mx-auto  ">
                    <h1 className="md:text-[48px] text-[36px]  md:text-start text-center font-bold">{item.title}</h1>
                    <p className="text-[15px] font-light text-justify text-[#cbcbcb]">A smart workflow remains at the center of any excellent experience. With a powerful digital solution, you can accelerate your digital transformation to match the particular demands of your industry.</p>
                    <ul className="md:flex hidden w-full   text-center md:flex-row flex-col list-inside list-disc flex-wrap gap-4 mt-[30px] text-black">
                      <li className="py-2 px-6 border border-white shadow-lg rounded-xl bg-white ">Customer Assistance</li>
                      <li className="py-2 px-6 border border-white shadow-lg rounded-xl bg-white ">Admin Dashboard</li>
                      <li className="py-2 px-6 border border-white shadow-lg rounded-xl bg-white ">Properties Listing</li>
                      <li className="py-2 px-6 border border-white shadow-lg rounded-xl bg-white ">Content Marketing</li>
                      <li className="py-2 px-6 border border-white shadow-lg rounded-xl bg-white ">Website Optimization</li>
                    </ul>
                    <div className="w-full md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[50px] gap-8 lg:h-[500px]">
                      <div className="lg:col-span-2 col-span-1 w-full lg:h-full   rounded-xl overflow-hidden">
                        {" "}
                        <img src={`${item.images[0]}`} alt="" className="w-full h-full object-cover" />{" "}
                      </div>
                      <div className="col-span-1 space-y-8 w-full h-full">
                        <div className="w-full rounded-xl overflow-hidden ">
                          <img src={` ${item.images[1]}`} alt="" />
                        </div>
                        <div className="w-full rounded-xl lg:block md:hidden  overflow-hidden">
                          <img src={` ${item.images[2]}`} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" md:hidden block mt-5">
                      <Swiper autoplay modules={[Autoplay]} spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("slide change")} className="mySwiper">
                        {item.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img src={image} alt="" className="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div style={{ filter: "blur(100px)" }} className=" min-w-[50%] min-h-[50%] bg-[#1f1949] absolute top-[-50%]  rounded-full -translate-y-[-50%] left-[150%] -translate-x-[150%]" />
      <div style={{ filter: "blur(100px)" }} className=" min-w-[80%] min-h-[50%] bg-[#2a0a40] absolute top-[-80%]  rounded-full -translate-y-[-80%] left-[50%] -translate-x-[50%]" />
    </div>
  );
}
