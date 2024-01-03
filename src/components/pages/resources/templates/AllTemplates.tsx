import React from 'react';

export default function AllTemplates({ templatesFilter }) {
  return (
    templatesFilter.map((template,index) => (
      <div key={index} className="">
        <div className=" col-span-1 group rounded-xl overflow-hidden relative">
          <img src={template.img} alt="" className="" />
          <div className=" flex bg-black bg-opacity-60 absolute group-hover:top-0 right-0 group-hover:bottom-0 left-0  items-center flex-col justify-center">
            <button className=" flex items-center px-6 py-2 bg-white text-black font-medium text-sm rounded-lg  space-x-2 "><span className=""> Color </span></button>
            <button className=" flex items-center px-6 py-2 text-orange-500 font-medium text-sm rounded-lg  group-hover:underline space-x-2  "><span className="">View Template</span></button>
          </div>
        </div>
        <div className=" text-white mt-2 px-2">
          <h1 className=" text-2xl font-medium ">{template.title}</h1>
          <p className=" font-medium  text-slate-400 uppercase">{template.category}</p>
        </div>
      </div>
    ))
  );
}
