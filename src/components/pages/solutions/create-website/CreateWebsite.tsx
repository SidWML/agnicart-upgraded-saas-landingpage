"use client";
import React from "react";
import Banner from "../../Banner";
import TemplatesSection from "../../TemplatesSection";
import BuilderSection from "../../BuilderSection";
import HomeSectionSix from "../../../homapage/HomeSectionSix";
import HomeSectionSeven from "../../../homapage/HomeSectionSeven";
import HomeSectionNine from "../../../homapage/HomeSectionNine";
import Marque from "../../Marque";
import TemplateFilters from "../../resources/templates/TemplateFilters";
import HomeSectionThree from "../../../homapage/HomeSectionThree";

export default function CreateWebsite() {
  return (
    <div className="">
      <div className=" relative bg-black text-white">
        <Banner mainInnerText="Get Started" bgGradient="bg-gradient-to-t from-[#2b3469] via-black to-[#4e68a1]" mainHeading="Create a Website Quickly & Easily" description="The easiest and fastest way to design a high quality website. Start building your website and show it to everyone." img="/blog.png" />
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-gradient-to-t from-black to-[#d34c0c] via-black bg-opacity-30" />
      </div>
      <HomeSectionThree />
      <div className=" text-white bg-[black]">
        <TemplatesSection />
        <TemplateFilters />
      </div>
      <Marque />
      <BuilderSection />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionNine bg="bg-gradient-to-r from-[#5F264A] to-[#643A6B]" />
    </div>
  );
}
