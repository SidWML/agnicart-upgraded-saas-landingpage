import React, { useEffect } from "react";
import Typography from "../../generics/Typography";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Grids(props) {
  const { cards } = props;
  useEffect(() => {

    const tc1 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-six-c-1",
        start:"-700px",
        end:"30%",

      }
    })
    tc1.fromTo(".section-six-c-1", { scale:0.5, opacity:0.5 }, { scale:1, opacity:1, duration:1 })
    const tc2 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-six-c-2",
        start:"-700px",
        end:"30%",

      }
    })
    tc2.fromTo(".section-six-c-2", { x:"-100px", opacity:0.5 }, { x:"0px", opacity:1, duration:1 })
    const tc3 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-six-c-3",
        start:"-700px",
        end:"30%",

      }
    })
    tc3.fromTo(".section-six-c-3", { x:"100px", opacity:0.5 }, { x:"0px", opacity:1, duration:1 })
    const tc4 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-six-c-4",
        start:"-700px",
        end:"30%",

      }
    })
    tc4.fromTo(".section-six-c-4", { y:"200px", opacity:0.5 }, { y:"0px", opacity:1, duration:1 })
    const tc5 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-six-c-5",
        start:"-700px",
        end:"30%",

      }
    })
    tc5.fromTo(".section-six-c-5", { x:"-100px", opacity:0.5 }, { x:"0px", opacity:1, duration:1 })
  },[])

  return (
    <div className=" mt-20 flex flex-col gap-5">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
        <div
          className={` ${cards[0].card_1_bg} rounded-3xl md:col-span-1 section-six-c-1 col-span-1 overflow-hidden space-y-4 ${cards[0].card_1_color}`}
        >
          <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
            <Typography type="Sub-Main-Heading" mainHeading={cards[0].card_1_main_heading} description={cards[0].card_1_description} />
          </div>
          <div className="w-full  ">
            <img src={cards[0].card_1_image} alt="" className="  object-cover" />
          </div>
        </div>
        <div
          style={{ boxShadow: "rgba(0,0,0,0.3) 0 1px 3px" }}
          className={`${cards[1].card_2_bg} rounded-3xl md:col-span-1 section-six-c-2 col-span-1 ${cards[1].card_2_color} overflow-hidden space-y-4 `}
        >
          <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
            <Typography type="Sub-Main-Heading" mainHeading={cards[1].card_2_main_heading} description={cards[1].card_2_description} />
          </div>

          <div className="w-full  ">
            {cards[1].image ? (
              <img src={cards[1].card_2_image} alt="" className="" />
            ) : (
              <video src={cards[1].card_2_image} autoPlay muted loop alt="" className="" />
            )}
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div
          style={{ boxShadow: "rgba(0,0,0,0.3) 0 1px 3px" }}
          className={`  rounded-3xl md:col-span-1 section-six-c-3 col-span-1 overflow-hidden space-y-4 ${cards[2].card_3_color} ${cards[2].card_3_bg}`}
        >
          <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
            <Typography type="Sub-Main-Heading" mainHeading={cards[2].card_3_main_heading} description={cards[2].card_3_description} />

          </div>
          <div className="w-full  ">
            <img src={cards[2].card_3_image} alt="" className="  object-cover" />
          </div>
        </div>
        <div
          style={{ boxShadow: "rgba(0,0,0,0.3) 0 1px 3px" }}
          className={` ${cards[3].card_4_bg} rounded-3xl md:col-span-1 section-six-c-4 ${cards[3].card_4_color} col-span-1 overflow-hidden space-y-4 `}
        >
          <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
            <Typography type="Sub-Main-Heading" mainHeading={cards[3].card_4_main_heading} description={cards[3].card_4_description} />
          </div>
          <div className="w-full  ">
            <img src={cards[3].card_4_image} alt="" className="  object-cover" />
          </div>
        </div>

        <div
          style={{ boxShadow: "rgba(0,0,0,0.3) 0 1px 3px" }}
          className={` ${cards[4].card_5_bg}  rounded-3xl md:col-span-1 section-six-c-5 ${cards[4].card_5_color} col-span-1 overflow-hidden space-y-4 `}
        >
          <div className=" w-[100%] space-y-4 lg:p-16 p-8 ">
            <Typography type="Sub-Main-Heading" mainHeading={cards[4].card_5_main_heading} description={cards[4].card_5_description} />
          </div>
          <div className="w-full  ">
            <img src={cards[4].card_5_image} alt="" className="  object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
