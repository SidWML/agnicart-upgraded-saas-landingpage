import React from 'react';

export default function Typography(HeadingsTypographyConfig) {
  const {
    type, mainHeading, description, textAlign, textGd
  } = HeadingsTypographyConfig;
  switch (type) {
    case 'Jumbotron':
      return (
        <>
          <h1 className={`${textGd} lg:text-[4vw] md:text-[7vw] lg:leading-[85px] md:leading-[60px] leading-[40px] text-[7vw] w-full font-bold`}>
            {mainHeading}
          </h1>
          <p className="  font-medium z-[2]  md:text-xl text-md">{description}</p>
        </>
      );
    case 'Sub-Main-Heading':
      return (
        <>
          <h1 className=" font-bold lg:text-4xl text-2xl z-[2]">{mainHeading}</h1>
          <p className="  lg:text-md text-md font-medium  z-[2]">
            {description}
          </p>
        </>
      );
  }
}
