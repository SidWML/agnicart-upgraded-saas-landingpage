import {
  faBuilding, faEnvelope, faPhone, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="w-full bg-white dark:bg-white  min-h-[90vh] blog-container py-[120px]  relative  overflow-hidden ">
      {/* <div className="absolute left-[0%] top-[0%] bottom-0 right-0 flex items-center justify-center">
      <div className="  w-[30%] h-[50%] opacity-30 rounded-full bg-gradient-to-br from-pink-500 to-blue-300 ">

</div>
      </div> */}
      <div className="lg:w-[70%] w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  rounded-2xl border  border-slate-200 backdrop-blur-2xl bg-slate-100 dark:bg-slate-100 bg-opacity-10">
        <div className=" col-span-2 w-full flex items-center justify-center">
          <img src="/contact1.png" alt="" className=" w-[50%]" />
        </div>
        <div className="lg:col-span-2 col-span-1 p-5 lg:w-[90%] w-full mr-auto   ">
          <h1 className=" text-[2.5rem] font-medium text-black">Get in Touch </h1>
          <form action="" className=" space-y-8">
            <div className="flex flex-col space-y-2 mt-4 text-black ">
              <label htmlFor="name" className=" font-medium">Full Name</label>
              <div className=" relative">
                <input type="text" placeholder="Enter your name" name="name" id="name" className=" placeholder:text-black placeholder:text-xs py-2 px-8 appearance-none outline-none focus:outline-none border border-[#333] rounded-lg  bg-transparent w-full" />
                <FontAwesomeIcon className="absolute w-4 h-4 top-[50%] left-[2%] -translate-x-[2%] text-black -translate-y-[50%]" icon={faUser} />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4 text-black">
              <label htmlFor="email" className=" font-medium">Email</label>
              <div className=" relative w-full">
                <input type="email" placeholder="Enter your email" name="email" id="email" className=" placeholder:text-black placeholder:text-xs py-2 appearance-none outline-none focus:outline-none w-full px-8 border border-[#333] rounded-lg  bg-transparent" />
                <FontAwesomeIcon className="absolute w-4 h-4 top-[50%] left-[2%] -translate-x-[2%] text-black -translate-y-[50%]" icon={faEnvelope} />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4  text-black">
              <label htmlFor="Business" className=" font-medium">Business Name</label>
              <div className=" relative">
                <input type="text" placeholder="Enter your Business name" name="Business" id="Business" className=" placeholder:text-black placeholder:text-xs py-2 appearance-none outline-none w-full px-8 focus:outline-none border border-[#333] rounded-lg  bg-transparent" />
                <FontAwesomeIcon className="absolute w-4 h-4 top-[50%] left-[2%] -translate-x-[2%] text-black -translate-y-[50%]" icon={faBuilding} />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4 text-black">
              <label htmlFor="phone_number" className=" font-medium">Phone Number</label>
              <div className=" relative w-full">
                <input type="text" placeholder="Enter your Phone Number" name="phone_number" id="phone_number" className=" placeholder:text-black placeholder:text-xs py-2 appearance-none outline-none w-full px-8 focus:outline-none border border-[#333] rounded-lg  bg-transparent" />
                <FontAwesomeIcon className="absolute w-4 h-4 top-[50%] left-[2%] -translate-x-[2%] text-black -translate-y-[50%]" icon={faPhone} />
              </div>
            </div>
            <button className="px-8 py-2 border border-[#333] rounded-full text-sm font-medium text-black hover:bg-white hover:text-black">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}
