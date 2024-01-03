import React, { useState } from 'react';

export default function Input(props) {
  const {
    label, type, icon, color, name, labelColor, bgColor, placeholder, required,
  } = props;
  const [focus, setFocus] = useState(false);

  return (
    <div className=" w-full space-y-2 ">
      {/* <label className={``} htmlFor="">{label}</label> */}
      <input placeholder={placeholder} name={name} required={required} type={type} className={` pl-4 pr-8 py-4 rounded-xl ${bgColor}  h-full border border-[#84858e] border-opacity-30 bg-white dark:bg-[#2b2b2b] outline-[#0077ed]   w-full ${color}`} />
    </div>
  );
}
