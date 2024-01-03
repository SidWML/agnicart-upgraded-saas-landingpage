import React from "react";

export default function Card({ card }) {
  return (
    <div  className="  space-y-3  bg-white dark:bg-black rounded-3xl col-span-1 ">
      {card.icon && <img src={card.icon} alt="" className=" w-[30px] h-[30px]" />}
      <h1 className=" font-semibold text-2xl ">{card.title}</h1>
      <p className=" text-justify font-medium text-sm tracking-wide font-poppins text-slate-500 dark:text-slate-300">{card.description}</p>
    </div>
  );
}
