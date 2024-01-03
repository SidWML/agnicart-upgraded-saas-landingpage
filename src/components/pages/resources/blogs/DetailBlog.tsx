import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import Typography from "../../../generics/Typography";

export default function DetailBlog({ detailBlogs }) {
  const [detailBlog, setDetailBlog] = useState(detailBlogs);

  useEffect(() => {
    setDetailBlog(detailBlogs);
  }, []);

  return (
    detailBlog &&
    detailBlog.attributes && (
      <div className=" py-[120px]  w-full bg-[#f2f2f2] text-black dark:bg-black dark:text-white ">
        <div className=" py-4 space-y-4 lg:w-[90%] w-full px-6  mx-auto">
          <div className=" text-center">
            <Typography type="Jumbotron" mainHeading={detailBlog.attributes.title} textGd="bg-gradient-to-r from-amber-400 to-rose-600 bg-clip-text text-transparent" />
          </div>
          <div className=" w-full ">
            <img src={`http://localhost:1337${detailBlog.attributes.image.data[1] ? detailBlog.attributes.image.data[1].attributes.url : detailBlog.attributes.image.data[0].attributes.url}`} alt="" className=" max-h-full max-w-full object-cover  object-center" />
          </div>
          <div className="w-full tracking-normal text-justify">{HTMLReactParser(detailBlog.attributes.description)}</div>
        </div>
      </div>
    )
  );
}
