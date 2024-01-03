import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AllTemplates from './AllTemplates';

export const templatesFilter = [
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b1.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b2.png',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b4.jpg',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b5.png',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b6.jpg',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b7.png',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b8.jpeg',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b10.jpeg',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b11.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'beauty',
    img: '/templates/Beauty/b13.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b14.jpeg',
  },
  {
    title: 'mindcure',
    category: 'beauty',
    img: '/templates/Beauty/b15.jpeg',
  },

  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b1.png',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b2.png',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b4.jpeg',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b5.jpeg',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b6.png',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b7.png',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b8.jpg',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b10.jpeg',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b11.jpeg',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'blog',
    img: '/templates/blog/b13.png',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b14.png',
  },
  {
    title: 'mindcure',
    category: 'blog',
    img: '/templates/blog/b15.jpeg',
  },

  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b1.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b2.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b4.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b5.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b6.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b7.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b8.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b10.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b11.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'business',
    img: '/templates/business/b13.jpeg',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b14.webp',
  },
  {
    title: 'mindcure',
    category: 'business',
    img: '/templates/business/b15.jpeg',
  },

  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d1.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d2.jpeg',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d4.jpeg',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d5.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d6.png',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d7.png',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d8.jpeg',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d10.jpg',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d11.jpg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'design',
    img: '/templates/design/d13.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d14.jpeg',
  },
  {
    title: 'mindcure',
    category: 'design',
    img: '/templates/design/d15.png',
  },

  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e1.png',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e2.jpeg',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e4.jpg',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e5.jpeg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e6.jpg',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e7.jpeg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e8.jpg',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e10.png',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e11.png',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'education',
    img: '/templates/education/e13.jpeg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e14.jpg',
  },
  {
    title: 'mindcure',
    category: 'education',
    img: '/templates/education/e15.jpeg',
  },

  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f1.png',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f2.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f4.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f5.jpeg',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f6.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f7.jpeg',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f8.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f10.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f11.jpeg',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f12.jpeg',
  },
  {
    title: 'Glorious',
    category: 'fashion',
    img: '/templates/fashion/f13.png',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f14.png',
  },
  {
    title: 'mindcure',
    category: 'fashion',
    img: '/templates/fashion/f15.png',
  },

  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f1.jpeg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f2.jpeg',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f3.jpeg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f4.jpg',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f5.jpg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f6.jpg',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f7.webp',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f8.jpeg',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f9.jpeg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f10.jpg',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f11.jpeg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f12.png',
  },
  {
    title: 'Glorious',
    category: 'food',
    img: '/templates/food/f13.jpeg',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f14.png',
  },
  {
    title: 'mindcure',
    category: 'food',
    img: '/templates/food/f15.jpeg',
  },
];

export default function TemplateFilters({ filterType }) {
  const [filter, setFilter] = useState(filterType || '');
  const [dropdown, setDropdown] = useState();
  const [showFilters, setshowFilters] = useState(true);
  const filters = [
    {
      type: 'All Templates',
    },
    {
      type: 'Trending',
    },
    {
      type: 'Popular',
    },
    {
      type: 'Categories',
      types: ['Beauty', 'Fashion', 'Marketing', 'Blog', 'Business', 'Design', 'Education', 'Food', 'Medical', 'Photo and Video', 'Travel'],
    },
    {
      type: 'E-Commerce',
      types: ['Fashion Store', 'Electronic Store', 'Food Store', 'Cosmetic Store'],
    },
    {
      type: 'Business',
      types: ['Business and Marketing', ' Consulting', ' Food and Restaurents ', 'Coaching ', ' Real - Estate'],
    },
    {
      type: 'Special Pages',
      types: ['Search bar', 'Gallery ', ' 404 Error Page ', 'Blogs Page', ' Careers Page ', 'Forms'],
    },
  ];

  return (
    <div className=" w-full bg-black ">
      <div className="lg:w-[90%] relative  mx-auto px-6 w-full relative py-8 ">
        <div className=" w-full space-y-5 z-[4]  sticky md:top-[75px] top-[70px] pt-4 bg-black  ">
          <h1 className=" font-light text-sm  ">BROWSE BY</h1>
          <div className=" relative">
            <div className={` font-medium text-lg relative grid lg:grid-cols-7 md:grid-cols-4  grid-cols-2 gap-5 md:py-2  md:pb-4 border-b border-slate-700  border-gray-100   font-poppins ${showFilters ? 'h-full py-2' : ' md:h-full h-0 md:overflow-visible overflow-hidden'} duration-300 ease-linear`}>
              {filters.map((filter, index) => (
                <div key={index} className=" relative ">
                  <button onClick={() => { dropdown === index ? setDropdown() : setDropdown(index); }} className=" space-x-4 px-4 py-2 text-sm min-w-[max-content] w-full border border-slate-700">
                    <span className=" relative">{filter.type}</span>
                    {' '}
                    {filter.types && filter.types.length && <FontAwesomeIcon className=" text-sm" icon={faChevronDown} /> }
                    {' '}
                  </button>
                  {
              filter.types && filter.types.length && (
              <div className={`${dropdown === index ? ' h-[max-content]  py-4  ' : ' h-[0px] overflow-hidden '} top-[150%] absolute ${index === 6 ? 'lg:right-0' : index === 3 || index === 5 ? ' lg:left-0 right-0 ' : ' left-0'} duration-100 z-[999] ease-linear shadow-xl font-light text-[17px]  w-[max-content] px-8 rounded-xl bg-[#303030]`}>
                <div className={` w-[40px] rotate-45  z-[4] h-[40px] left-[50%] -translate-x-[50%] bg-[#303030] absolute top-[-2%]  -translate-y-[-2%]`} />
                <ul className=" z-[5] space-y-2 relative">
                  {
               filter.types.map((type,index) => (
                 <li key={index} className=" space-x-2 cursor-pointer flex items-center">
                   {' '}
                   {index === 6 && <input className="" type="checkbox" name="" id="" />}
                   {' '}
                   <span className="">{type}</span>
                 </li>
               ))
              }
                </ul>
              </div>
              )
             }
                </div>
              ))}

            </div>
            <div onClick={() => setshowFilters(!showFilters)} className=" p-2 border z-[2] w-[40px] h-[40px] flex items-center justify-center absolute bottom-[-19px] left-[50%] md:hidden block -translate-y-[-19px] rounded-br-full bg-[#212121] border-slate-700 rounded-bl-full -translate-x-[50%]">
              <FontAwesomeIcon icon={showFilters ? faChevronUp : faChevronDown} />
              {' '}
            </div>
          </div>

        </div>
        <div className=" lg:col-span-5 relative z-[1] md:col-span-2 col-span-1 w-full grid lg:grid-cols-4 md:grid-cols-3 py-[30px] grid-cols-2 lg:gap-8 gap-5">
          {filter === '' ? (
            <AllTemplates templatesFilter={templatesFilter} />
          ) : (
            templatesFilter
              .filter((template) => template.category === filter)
              .map((template,index) => (
                <div key={index} className="">
                  <div style={{ boxShadow: 'rgba(0,0,0,0.3) 0 1px 3px' }} className=" col-span-1 group rounded-xl overflow-hidden relative">
                    <img src={template.img} alt="" className="" />
                    <div className=" flex bg-black bg-opacity-60 absolute group-hover:top-0 right-0 group-hover:bottom-0 left-0  items-center flex-col justify-center">
                      <button className=" flex items-center px-6 py-2 bg-white text-black font-medium text-sm rounded-lg  space-x-2 ">
                        <span className=""> Color </span>
                      </button>
                      <button className=" flex items-center px-6 py-2 text-orange-500 font-medium text-sm rounded-lg  group-hover:underline space-x-2  ">
                        <span className="">View Template</span>
                      </button>
                    </div>
                  </div>
                  <div className=" text-white mt-2 px-2">
                    <h1 className=" text-2xl font-medium ">{template.title}</h1>
                    <p className=" font-medium  text-slate-400 uppercase">{template.category}</p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
