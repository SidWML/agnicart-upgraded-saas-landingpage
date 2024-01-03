import Link from 'next/link';
import React from 'react';

export default function LinkButton({mainInnerText,SubText, color,href}) {
  return (
    <Link className={`px-4 py-2  w-[max-content] block lg:m-0 mx-auto  ${color} bg-[#0077ed]`} href={`${href}`}>
      {mainInnerText}
      {' '}
      {SubText && (<span className=" font-normal">It's Free</span>)} 
    </Link>
  );
}
