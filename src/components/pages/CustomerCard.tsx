import Link from 'next/link';
import React, { useState } from 'react';

export default function CustomerCard({ customer }) {
  const [scroll, setscroll] = useState(false);
  return (
    <div className="">
    <Link
      target="_blank"
      href={customer.url}
      onMouseEnter={() => setscroll(true)}
      onMouseLeave={() => setscroll(false)}
      style={{
        backgroundImage: `url(${customer.thumbnail})`, backgroundSize: '100%', backgroundPosition: scroll ? 'bottom' : 'top', transition: 'all 4s ease',
      }}
      className=" col-span-1 h-[400px] rounded-xl overflow-hidden  block relative "
    />
    <Link className=' text-white font-medium text-2xl  mt-2 block' href={customer.url} >{customer.name}</Link>
    </div>
  );
}
